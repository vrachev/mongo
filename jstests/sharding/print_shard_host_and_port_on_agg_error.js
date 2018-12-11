// Tests that an aggregation error which occurs on a sharded collection will send an error message
// containing the host and port of the shard where the error occurred.
(function() {
    "use strict";

    load("jstests/aggregation/extras/utils.js");  // For assertErrMsgContains.

    const st = new ShardingTest({shards: 2, config: 1});

    const mongosDb = st.s.getDB(jsTestName());
    const coll = mongosDb.getCollection("foo");

    // Enable sharding on the test DB and ensure its primary is shard 0.
    assert.commandWorked(mongosDb.adminCommand({enableSharding: mongosDb.getName()}));
    st.ensurePrimaryShard(mongosDb.getName(), st.rs0.getURL());

    // Add some data
    coll.drop();
    assert.commandWorked(coll.insert({_id: 0}));
    assert.commandWorked(coll.insert({_id: 1}));

    // Shard the collection.
    assert.commandWorked(
        mongosDb.adminCommand({shardCollection: coll.getFullName(), key: {_id: 1}}));
    assert.commandWorked(mongosDb.adminCommand({split: coll.getFullName(), middle: {_id: 0}}));
    assert.commandWorked(mongosDb.adminCommand(
        {moveChunk: coll.getFullName(), find: {_id: 1}, to: st.rs1.getURL()}));

    // Aggregate that will fail
    const pipe = [{$project: {a: {$divide: ["$_id", 0]}}}];
    const divideByZeroErrorCode = 16608;
    const expectedHostAndPort = st.rs1.getPrimary().host;
    const expectedErrMsg = "Error on remote shard " + expectedHostAndPort;

    assertErrMsgContains(coll, pipe, divideByZeroErrorCode, expectedErrMsg);

    st.stop();
}());
