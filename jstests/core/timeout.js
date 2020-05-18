(function() {
    'use strict';
    
    const rst = new ReplSetTest({nodes: 3});
    rst.startSet();
    rst.initiate();
    
    assert.soon(() => sleep(1000000), "Force timeout.", 100)
})();
