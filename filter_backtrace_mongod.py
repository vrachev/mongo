from __future__ import print_function
 
import json
import os
import signal
import buildscripts.mongosymb as mongosymb
 
beginBacktrace = '----- BEGIN BACKTRACE -----'
endBacktrace = '-----  END BACKTRACE  -----'
 
class State(object):
    NORMAL = 0
    JSON_BACKTRACE = 1
    FRAMES_BACKTRACE = 2
 
# Ignore Ctrl-C. When the process feeding the pipe exits, `stdin` will be closed.
signal.signal(signal.SIGINT, signal.SIG_IGN)
 
state = State.NORMAL
framesBacktrace = []
while True:
    line = os.sys.stdin.readline()
    if not line:
        break
 
    line = line.rstrip()
    if state == State.NORMAL:
        print(line)
        if line.endswith(beginBacktrace):
            state = State.JSON_BACKTRACE
    elif state == State.JSON_BACKTRACE:
        try:
            line = line[line.index('{"backtrace":'):]
        except ValueError:
            if "Top-level" in line:
                print(line)
                continue
            else:
                print("Bad line: " + line.strip())
                os.exit(1)
 
        traceDoc = json.JSONDecoder().raw_decode(line)[0]
        frames = mongosymb.symbolize_frames(traceDoc, mongosymb.PathDbgFileResolver('./mongod'), '/opt/mongodbtoolchain/v2/bin/llvm-symbolizer')
        mongosymb.classic_output(frames, os.sys.stdout, indent=2)
        state = State.FRAMES_BACKTRACE
    elif state == State.FRAMES_BACKTRACE:
        if line.endswith(endBacktrace):
            print(line)
            state = State.NORMAL
    else:
        print("BUGF")