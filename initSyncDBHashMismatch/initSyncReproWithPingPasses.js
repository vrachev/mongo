'use strict';

/* eslint no-undef: 0 */

load('jstests/replsets/libs/initial_sync_test.js'); // for InitialSyncTest

const seedData = [
    { // 0
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {create: 'coll2',capped: false}},
            {dbName: 'db2',commandObj: {create: 'coll1',capped: false}},
            {dbName: 'db2',commandObj: {create: 'coll2',capped: false}},
        ]
    }
];

const steps = [
    { // 1
        type: 'plain',
        ops: [
            {dbName: 'db2',commandObj: {renameCollection: 'db1.coll2',to: 'db2.coll1',dropTarget: true}},

            // This drop does not appear to be happening in the secondary.
            // 
            // Because of this, the next command of renaming db2.coll1 to db2.coll2 does not happen
            // since `dropTarget: false` and db2.coll2 still exists.
            // 
            // the UUID that points to db2.coll1 then stays pointing to db2.coll1 instead of db2.coll2,
            // and because of that, the drop coll operation of the 
            // `dbName: 'db2',commandObj: { convertToCapped: 'coll2' }}` drops db2.coll1 instead of db2.coll2
            //
            {dbName: 'db2',commandObj: { drop: 'coll2' }},
            {dbName: 'db2', commandObj: {ping: 1}},
        ],
    },
    { // 3
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {renameCollection: 'db2.coll1',to: 'db2.coll2',dropTarget: false}},
        ],
    },
    { // 4
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {create: 'coll1',capped: false}},
        ],
    },
    { // 5
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {renameCollection: 'db1.coll1',to: 'db2.coll1'}},
            {dbName: 'db2',commandObj: { convertToCapped: 'coll2' }},
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

function runStep(db, dbName, commandObj) {
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

    db.getSiblingDB(dbName).runCommand(commandObj);
}

function seedInitialData(db) {
    let stepNo = 0;

    while (stepNo < seedData.length) {
        const step = seedData[stepNo];
        ++stepNo;

        for (let {dbName, commandObj} of step.ops) {
            runStep(db, dbName, commandObj);
        }
    }
}

function runSteps(initSyncTest, db) {
    let stepNo = 0;

    do {
        const step = steps[stepNo];

        if (step === undefined) {
            continue;
        }

        ++stepNo;

        for (let {dbName, commandObj} of step.ops) {
            runStep(db, dbName, commandObj);
        }
    } while (!initSyncTest.step());
}

function main() {
    const {initSyncTest, session, db} = setup();
    seedInitialData(db);
    runSteps(initSyncTest, db);
    teardown(initSyncTest, session);
}

if (typeof underTest === 'undefined') {
    main();
}
