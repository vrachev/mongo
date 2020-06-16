// 'use strict';

// var coll = "coll";
// var t = db.getCollection(coll);
// t.drop();

// db.createCollection(coll);

// while(true) {
//     sleep(1000);
// }

// (function() {
//         'use strict';
    
//         const rst = new ReplSetTest({nodes: 2});
//         rst.startSet();
//         rst.initiate();
    
//         var primary = rst.getPrimary();
//         var longString = "x".repeat(1000)
//         assert.commandWorked(primary.getDB('db').foo.insert(Array.from({length: 10000}, _ => ({a: longString}))))
    
//         rst.awaitReplication()
    
//         assert.soon(() => {
//             print('looping');
//             sleep(10);
//             return false;
//         }, "Force timeout.", 1000000)

//         rst.stopSet();
//     })();

(function() {
    'use strict';

    const rst = new ReplSetTest({nodes: 2});
    rst.startSet();
    rst.initiate();

    // var primary = rst.getPrimary();
    // var longString = "x".repeat(1000)
    // assert.commandWorked(primary.getDB('db').foo.insert(Array.from({length: 10000}, _ => ({a: longString}))))

    // rst.awaitReplication()

    sleep(1000000000)
    rst.stopSet();
})();

