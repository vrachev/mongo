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
    load('jstests/replsets/libs/initial_sync_test.js');
    
    const name = 'intial_sync_reset_oldest_timestamp';
    const initialSyncTest = new InitialSyncTest(name);
    const primary = initialSyncTest.getPrimary();
    let secondary = initialSyncTest.getSecondary();
    const db = primary.getDB(name);
    const secondaryDB = secondary.getDB(name);

    // cannot create collection in a transaction, 
    assert.commandWorked(db.foo.insert({a: 1}));
    assert.commandWorked(db.foo.insert({a: 1}));

    const session = primary.startSession({causalConsistensy: false});
    const sessionDB = session.getDatabase(name);
    const sessionColl = sessionDB.getCollection("foo");
    session.startTransaction();
    assert.commandWorked(sessionColl.insert({b: 1}));

    let prepareTimeStamp = PrepareHelpers.prepareTransaction(session);

    assert(!initialSyncTest.step());

    secondary = initialSyncTest.getSecondary();
    secondary.setSlaveOk();

    const res = PrepareHelpers.commitTransaction(session, prepareTimeStamp);

    assert.commandWorked(PrepareHelpers.commitTransaction(session, prepareTimeStamp));
})();