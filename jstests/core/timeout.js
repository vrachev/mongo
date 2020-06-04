(function() {
    'use strict';

    const rst = new ReplSetTest({nodes: 2});
    rst.startSet();
    rst.initiate();

    function start() {
        const resmokeCmd = 'python3 buildscripts/resmoke.py run ' +
        '--storageEngineCacheSizeGB=1 --dbpathPrefix=/data/db/resmoke ' +
        '--internalParam=test_archival --taskId=123 ' +
        '--basePort=20020 ' +
        '--suites=no_passthrough1' 

        // Start a new resmoke test
        return _startMongoProgram({args: resmokeCmd.split(' ')});
    }

    const pid = start()

    while(true) {
        checkProgram(pid)
        print("looping")
        sleep(1000)
    }
    rst.stopSet();
})();

