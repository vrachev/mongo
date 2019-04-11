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
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 0,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 1,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 2,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 3,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 4,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 5,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 6,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 7,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 8,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 9,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 10,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 11,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 12,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 13,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 14,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 15,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 16,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 17,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 18,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 19,counter: 0}]}},
        ],
    },
    { // 1
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 20,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 21,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 22,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 23,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 24,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 25,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 26,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 27,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 28,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 29,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 30,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 31,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 32,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 33,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 34,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 35,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 36,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 37,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 38,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 39,counter: 0}]}},
        ],
    },
    { // 2
        type: 'plain',
        ops: [
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 40,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 41,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 42,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 43,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 44,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 45,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 46,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 47,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 48,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 49,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 50,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 51,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 52,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 53,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 54,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 55,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 56,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 57,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 58,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 59,counter: 0}]}},
        ],
    },
    { // 3
        type: 'plain',
        ops: [
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 60,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 61,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 62,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 63,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 64,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 65,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 66,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 67,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 68,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 69,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 70,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 71,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 72,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 73,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 74,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 75,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 76,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 77,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 78,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 79,counter: 0}]}},
        ],
    },
    { // 4
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 80,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 81,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 82,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 83,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 84,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 85,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 86,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 87,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 88,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 89,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 90,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 91,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 92,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 93,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 94,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 95,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 96,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 97,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 98,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 99,counter: 0}]}},
        ],
    },
    { // 5
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 100,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 101,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 102,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 103,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 104,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 105,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 106,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 107,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 108,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 109,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 110,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 111,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 112,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 113,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 114,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 115,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 116,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 117,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 118,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 119,counter: 0}]}},
        ],
    },
    { // 6
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 120,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 121,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 122,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 123,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 124,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 125,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 126,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 127,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 128,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 129,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 130,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 131,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 132,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 133,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 134,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 135,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 136,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 137,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 138,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 139,counter: 0}]}},
        ],
    },
    { // 7
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 140,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 141,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 142,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 143,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 144,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 145,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 146,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 147,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 148,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 149,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 150,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 151,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 152,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 153,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 154,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 155,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 156,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 157,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 158,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 159,counter: 0}]}},
        ],
    },
    { // 8
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 160,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 161,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 162,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 163,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 164,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 165,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 166,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 167,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 168,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 169,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 170,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 171,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 172,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 173,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 174,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 175,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 176,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 177,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 178,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 179,counter: 0}]}},
        ],
    },
    { // 9
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 180,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 181,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 182,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 183,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 184,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 185,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 186,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 187,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 188,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 189,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 190,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 191,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 192,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 193,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 194,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 195,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll1',documents: [{_id: 196,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 197,counter: 0}]}},
            {dbName: 'db1',commandObj: {insert: 'coll2',documents: [{_id: 198,counter: 0}]}},
            {dbName: 'db2',commandObj: {insert: 'coll1',documents: [{_id: 199,counter: 0}]}},
        ],
    },
];

const steps = [
    { // 0
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: { convertToCapped: 'coll2' }},
            {dbName: 'db2',commandObj: { convertToCapped: 'coll1' }},
        ],
    },
    { // 1
        type: 'plain',
        ops: [
            {dbName: 'db2',commandObj: {collMod: 'coll1',usePowerOf2Sizes: true}},
            {dbName: 'db2',commandObj: {renameCollection: 'db1.coll2',to: 'db2.coll1',dropTarget: true}},
            {dbName: 'db1',commandObj: {renameCollection: 'db1.coll2',to: 'db1.coll1'}},
            {dbName: 'db2',commandObj: { drop: 'coll2' }},
        ],
    },
    { // 2
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {renameCollection: 'db1.coll2',to: 'db2.coll1',dropTarget: false}},
            {dbName: 'db1',commandObj: {collMod: 'coll1',usePowerOf2Sizes: true}},
            {dbName: 'db2',commandObj: { drop: 'coll2' }},
            {dbName: 'db1',commandObj: { drop: 'coll2' }},
            {dbName: 'db2',commandObj: {update: 'coll1',updates: [{q: { _id: 185 },u: { $inc: { counter: 10 } }}]}},
        ],
    },
    { // 3
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {renameCollection: 'db1.coll1',to: 'db2.coll1',dropTarget: false}},
            {dbName: 'db2',commandObj: {create: 'coll1',capped: false}},
            {dbName: 'db2',commandObj: {update: 'coll2',updates: [{q: { _id: 100 },u: { $inc: { counter: 18 } }}]}},
            {dbName: 'db1',commandObj: {renameCollection: 'db2.coll1',to: 'db2.coll2',dropTarget: false}},
            {dbName: 'db1',commandObj: { drop: 'coll1' }},
        ],
    },
    { // 4
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {collMod: 'coll1',usePowerOf2Sizes: true}},
            {dbName: 'db1',commandObj: {create: 'coll1',capped: false}},
            {dbName: 'db2',commandObj: {delete: 'coll1',deletes: [{q: { _id: 120 },limit: 1}]}},
            {dbName: 'db1',commandObj: {delete: 'coll1',deletes: [{q: { _id: 100 },limit: 1}]}},
            {dbName: 'db1',commandObj: { convertToCapped: 'coll1' }},
        ],
    },
    { // 5
        type: 'plain',
        ops: [
            {dbName: 'db1',commandObj: {collMod: 'coll2',usePowerOf2Sizes: true}},
            {dbName: 'db1',commandObj: {renameCollection: 'db1.coll1',to: 'db2.coll1'}},
            {dbName: 'db2',commandObj: { convertToCapped: 'coll2' }},
            {dbName: 'db1',commandObj: {create: 'coll2',capped: false}},
            {dbName: 'db2',commandObj: {delete: 'coll2',deletes: [{q: { _id: 78 },limit: 1}]}},
        ],
    },
    { // 6
        type: 'plain',
        ops: [
            {dbName: 'db2',commandObj: {collMod: 'coll1',usePowerOf2Sizes: true}},
            {dbName: 'db2',commandObj: {insert: 'coll2',documents: [{_id: 200,counter: 0}]}},
            {dbName: 'db2',commandObj: {renameCollection: 'db2.coll2',to: 'db1.coll2',dropTarget: false}},
            {dbName: 'db2',commandObj: {create: 'coll2',capped: true}},
            {dbName: 'db1',commandObj: {collMod: 'coll2',usePowerOf2Sizes: true}},
        ],
    },
    { // 7
        type: 'plain',
        ops: [
            {dbName: 'db2',commandObj: { convertToCapped: 'coll2' }},
            {dbName: 'db1',commandObj: { drop: 'coll1' }},
            {dbName: 'db1',commandObj: {create: 'coll1',capped: false}},
            {dbName: 'db2',commandObj: {collMod: 'coll2',usePowerOf2Sizes: true}},
            {dbName: 'db2',commandObj: {renameCollection: 'db2.coll2',to: 'db2.coll1'}},
        ],
    },
    { // 8
        type: 'plain',
        ops: [
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
