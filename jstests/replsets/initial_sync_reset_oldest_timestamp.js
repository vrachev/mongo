/**
 * If we fail an initial sync attempt, and the first oplog entry to apply during the new initial
 * sync attempt is a prepare oplog entry, the commit timestamp may be older than the oldest
 * timestamp from the first attempt. 
 * 
 * To fix this we reset the oldest timestamp (TODO: either at the beginning of initial sync or 
 * after we fail initial sync). This test tests that we are correctly resetting the timestamp
 * and that the commit timestamp of the prepare oplog entry is no longer earlier than the oldest
 * timestamp.
 */

(function() {
    "use strict";

    load("jstests/core/txns/libs/prepare_helpers.js");

    const replTest = new ReplSetTest({nodes: 2, nodeOptions: 
        {setParameter: "numInitialSyncAttempts=5"}});
    replTest.startSet();

    const config = replTest.getReplSetConfig();
    // Increase the election timeout so that we do not accidentally trigger an election while the
    // secondary is restarting.
    config.settings = {"electionTimeoutMillis": 12 * 60 * 60 * 1000};
    replTest.initiate(config);

    const primary = replTest.getPrimary();
    let secondary = replTest.getSecondary();

    const dbName = "test";
    const collName = "initial_sync_reset_oldest_timestamp";
    const testDB = primary.getDB(dbName);
    const testColl = testDB.getCollection(collName);

    // Need to create a collection outside of a transaction.
    assert.commandWorked(testColl.insert({_id: 1}));

    const session = primary.startSession({causalConsistensy: false});
    const sessionDB = session.getDatabase(name);
    const sessionColl = sessionDB.collection(collName);
    session.startTransaction();
    assert.commandWorked(sessionColl.insert({_id: 2}));
    const prepareTimestamp = PrepareHelpers.prepareTransaction(session);

    replTest.stop(secondary, undefined, {skipValidation: true});
    secondary = replTest.start(secondary, {
        startClean: true,
        setParameter: {
            'failpoint.failInitialSyncBeforeApplyingBatch': tojson(
                {mode: 'alwaysOn'})}},
        true);
    
})()
