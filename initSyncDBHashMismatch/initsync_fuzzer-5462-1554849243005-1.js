'use strict';

/* eslint no-undef: 0 */

load('jstests/replsets/libs/initial_sync_test.js'); // for InitialSyncTest

class InitSyncStats {
    constructor() {
        this._commandSuccess = 0;
        this._commandFailure = 0;
        this._commandBreakdown = {};
    }

    _defaultCommandBreakdown(commandName) {
        this._commandBreakdown[commandName] =
            this._commandBreakdown[commandName] || {success: 0, failure: 0, errorCodes: {}};

        return this._commandBreakdown[commandName];
    }

    recordCommandSuccess(commandName) {
        ++this._commandSuccess;
        ++this._defaultCommandBreakdown(commandName).success;
    }

    recordCommandFailure(commandName, codeName) {
        ++this._commandFailure;

        const commandStats = this._defaultCommandBreakdown(commandName);
        ++commandStats.failure;

        commandStats.errorCodes[codeName] = commandStats.errorCodes[codeName] || 0;
        ++commandStats.errorCodes[codeName];
    }

    get raw() {
        return {
            success: this._commandSuccess,
            failure: this._commandFailure,
            breakdown: this._commandBreakdown,
        };
    }
}

class SeedDataStats {
    constructor() {
        this._insertCount = 0;
        this._commandBreakdown = {};
    }

    // Returns stats breakdown at arbitrarily nested level,
    // creating the nested structure along the way if necessary.
    _defaultCommandBreakdown(key) {
        this._commandBreakdown[key] =
            this._commandBreakdown[key] || {insertCount: 0};

        return this._commandBreakdown[key];
    }

    recordDocumentInserted(key) {
        ++this._insertCount;
        ++this._defaultCommandBreakdown(key).insertCount;
    }

    get raw() {
        return {
            insertCount: this._insertCount,
            breakdown: this._commandBreakdown,
        };
    }
}

const seedData = [
    { // 0
        type: 'plain',
        ops: [
            //{dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 0}]}},
            //{dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 1}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 2}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 3}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 4}]}},
        ]
    }
];

const steps = [
    { // 0
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: { convertToCapped: 'coll2' }},
        ],
    },
    { // 1
        type: 'plain',
        ops: [
            {dbName: 'db2',commandObj: {renameCollection: 'db1.coll2',to: 'db2.coll1',dropTarget: true}},
            {dbName: 'db2',commandObj: { drop: 'coll2' }},
        ],
    },
    { // 3
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {renameCollection: 'db2.coll1',to: 'db2.coll2',dropTarget: false}},
            //{dbName: 'db1',commandObj: { drop: 'coll1' }},
        ],
    },
    { // 4
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {create: 'coll1',capped: false}},
            {dbName: 'db2',commandObj: {delete: 'coll1',deletes: [{q: { _id: 2 },limit: 1}]}},
            {dbName: 'db1',commandObj: {delete: 'coll1',deletes: [{q: { _id: 0 },limit: 1}]}},
            {dbName: 'db1',commandObj: { convertToCapped: 'coll1' }},
        ],
    },
    { // 5
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {renameCollection: 'db1.coll1',to: 'db2.coll1'}},
            {dbName: 'db2',commandObj: { convertToCapped: 'coll2' }},
            {dbName: 'db2',commandObj: {delete: 'coll2',deletes: [{q: { _id: 1 },limit: 1}]}},
        ],
    },
];

function setup() {
    const initSyncTest = new InitialSyncTest();
    const primary = initSyncTest.getPrimary();
    const session = primary.startSession({causalConsistency: false});
    const db = session.getDatabase('test');

    return {
        initSyncTest: initSyncTest,
        session: session,
        db: db,
    };
}

function teardown(initSyncTest, session) {
    session.endSession();
    initSyncTest.stop();
}

function printStats(stats, numSteps, name) {
    print('Stats for ' + name + ': ' + tojson(Object.assign({numSteps: numSteps}, stats.raw)));
}

function runStep(db, dbName, commandObj, recordStatsCB) {
    const commandName = Object.keys(commandObj)[0];

    // SERVER-16049: We force capped collections to be created with size=4GB to prevent
    // truncation from occuring.
    if ((commandName === 'create' && commandObj.capped) || commandName === 'convertToCapped') {
        commandObj.size = 4 * 1024 * 1024 * 1024; // 4GB
    }

    if (commandName === 'renameCollection') {
        // The renameCollection command must be run against the "admin" database.
        dbName = 'admin';
    }

    const res = db.getSiblingDB(dbName).runCommand(commandObj);

    recordStatsCB(commandName, res);
}

function seedInitialData(db, stats) {
    let stepNo = 0;

    while (stepNo < seedData.length) {
        const step = seedData[stepNo];
        ++stepNo;

        for (let {dbName, commandObj} of step.ops) {
            runStep(db, dbName, commandObj, (commandName, res) => {
                const collName = commandObj[commandName];
                const key = `${dbName}.${collName}`;
                assert.commandWorked(res);
                stats.recordDocumentInserted(key);
            });
        }
    }

    return stepNo;
}

function runSteps(initSyncTest, db, stats) {
    let stepNo = 0;

    do {
        const step = steps[stepNo];

        if (step === undefined) {
            continue;
        }

        ++stepNo;

        for (let {dbName, commandObj} of step.ops) {
            runStep(db, dbName, commandObj, (commandName, res) => {
                if (res.ok === 1) {
                    stats.recordCommandSuccess(commandName);
                } else {
                    stats.recordCommandFailure(commandName, res.codeName);
                }
            });
        }
    } while (!initSyncTest.step());

    return stepNo;
}

function main() {
    const initSyncStats = new InitSyncStats();
    const seedDataStats = new SeedDataStats();

    const {initSyncTest, session, db} = setup();

    const seedDataNumSteps = seedInitialData(db, seedDataStats);
    printStats(seedDataStats, seedDataNumSteps, 'seed data');

    const initSyncNumSteps = runSteps(initSyncTest, db, initSyncStats);
    printStats(initSyncStats, initSyncNumSteps, 'initial sync');

    teardown(initSyncTest, session);
}

if (typeof underTest === 'undefined') {
    main();
}
