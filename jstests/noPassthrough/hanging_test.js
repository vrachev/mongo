(function() {
"use strict";

const rst = new ReplSetTest({nodes: 7});
rst.startSet();

rst.initiate();

assert.soon(() => {
    return false;
}, "msgmsgmsg", 10);

rst.stopSet();
})()