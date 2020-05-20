(function() {
    'use strict';
    
    const rst = new ReplSetTest({nodes: 3});
    rst.startSet();
    rst.initiate();
    
    assert.soon(() => {
        print('looping');
        sleep(10);
        return false;
    }, "Force timeout.", 100)
})();
