(function() {
    'use strict';

    const rst = new ReplSetTest({nodes: 2});
    rst.startSet();
    rst.initiate();

    rst.awaitReplication()

    rst.stopSet();
})();
