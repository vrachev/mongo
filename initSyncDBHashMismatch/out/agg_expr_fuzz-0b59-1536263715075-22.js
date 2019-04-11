/* eslint no-undef: 0 */
/* eslint strict: 0 */
/* eslint no-implicit-globals: 0 */

// This function is called whenever the fuzzer tests encounter a different result from the mongo
// instances being run against. The following data is provided for the checks:
//
// * dbs - array of db objects being run against.
// * aggregation - the aggregation that was run.
// * errorMessages - array of error message received from dbs if they were different, or null.
// * results - array of results received from dbs if they were different, or null.
//
// Returning true means that the differing result is expected and can safely be ignored.
// Returning false means that the differing result should raise an assertion failure.
function blacklistAssertion(dbs, aggregation, errorMessages, results) {
    return false;
}

const collectionNames = ['fuzzer_coll', 'fuzzer_coll_lookup'];

const insertList = [

    function(coll) {
        return coll.insert({_id: 13795,str: "FTP transmitting",num: 11776,date: new Date("2018-09-06T01:27:01.625Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13796,str: "microchip",num: 50350,date: new Date("2018-09-06T17:54:32.266Z"),array: ["payment",8092,new Date("2018-09-06T15:24:05.275Z"),"JBOD",new Date("2018-09-05T23:42:41.355Z"),70818,44391,{_id: 13797,str: "Streamlined Wooden",num: 20029,date: new Date("2018-09-06T19:19:19.067Z"),array: [[],new Date("2018-09-06T17:52:13.831Z"),["Yuan Renminbi Manager",88424],new Date("2018-09-06T14:35:59.784Z")],obj: {_id: 13798,str: "Supervisor Representative",num: 5256,date: new Date("2018-09-05T22:58:10.863Z"),obj: {}}},{_id: 13799,str: "compress Green synergies",num: 10212,array: []},"Ergonomic Steel Gloves paradigms",[53942,{_id: 13800,str: "input",num: 3943,array: [[],"Shirt Organized withdrawal"],obj: {_id: 13801,date: new Date("2018-09-06T14:59:54.658Z"),obj: {_id: 13802,num: 82088,date: new Date("2018-09-06T09:23:49.091Z"),obj: {}}}},[[]]]]});
    },

    function(coll) {
        return coll.insert({_id: 13803,str: "users THX connect",num: 49675,date: new Date("2018-09-06T06:55:43.422Z"),array: [],obj: {_id: 13804,str: "International Developer",num: 72810,date: new Date("2018-09-05T22:32:56.102Z"),array: ["secondary","Dynamic optimizing grid-enabled","Applications Markets Orchestrator",19360,new Date("2018-09-06T15:11:29.900Z"),2156,{_id: 13805,str: "Portugal Computers Phased",date: new Date("2018-09-06T00:43:44.654Z"),obj: {}},new Date("2018-09-06T03:02:56.745Z"),new Date("2018-09-05T23:56:55.826Z"),new Date("2018-09-06T06:35:00.039Z"),{_id: 13806,str: "Engineer monitoring",num: 18426,date: new Date("2018-09-06T12:28:13.629Z"),array: [[]],obj: {}},new Date("2018-09-06T08:14:54.101Z"),44820],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13807,str: "Checking Account value-added",num: 68341,date: new Date("2018-09-06T10:36:52.186Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 13808,str: "Bolivia",num: 33674,date: new Date("2018-09-06T11:42:21.060Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13809,str: "Guadeloupe multi-byte",num: 66893,date: new Date("2018-09-06T01:06:05.203Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13810,str: "Bermudian Dollar (customarily known as Bermuda Dollar) Personal Loan Account Connecticut",num: 60568,date: new Date("2018-09-06T01:17:36.145Z"),array: [],obj: {_id: 13811,num: 98524,date: new Date("2018-09-06T12:38:15.544Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13812,str: "Refined",num: 43457,date: new Date("2018-09-05T21:35:29.477Z"),array: [],obj: {_id: 13813,str: "impactful South Dakota",num: 65858,date: new Date("2018-09-05T20:10:52.997Z"),array: [new Date("2018-09-06T08:48:03.243Z"),2,"Research","sensor web-enabled Seychelles Rupee",97389,new Date("2018-09-06T10:12:28.997Z"),["24/365 teal Clothing",new Date("2018-09-06T11:01:15.427Z"),14435],"hack",{_id: 13814,str: "Metrics",num: 30569,date: new Date("2018-09-06T10:48:04.644Z"),array: [],obj: {}}],obj: {_id: 13815,str: "GB",date: new Date("2018-09-06T14:32:55.107Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 13816,str: "index",num: 55004,date: new Date("2018-09-06T04:07:04.613Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13817,str: "invoice open system Cape Verde",num: 19418,date: new Date("2018-09-06T19:32:53.331Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13818,str: "Grocery",num: 52091,date: new Date("2018-09-06T03:24:28.698Z"),array: ["Tanzania",58281,22344,"Unbranded Fresh Table 24/7",new Date("2018-09-06T07:26:57.020Z"),new Date("2018-09-06T09:17:10.299Z"),19591,new Date("2018-09-05T23:38:25.619Z"),"Outdoors connect",new Date("2018-09-06T01:05:05.073Z"),43545,{_id: 13819,str: "quantify Berkshire",num: 29603,date: new Date("2018-09-05T20:24:43.414Z"),obj: {}}],obj: {_id: 13820,str: "Tools",num: 89822,date: new Date("2018-09-06T11:34:12.980Z"),array: [new Date("2018-09-06T17:12:48.018Z"),[],"bypassing",new Date("2018-09-06T00:13:27.805Z")],obj: {_id: 13821,str: "Graphical User Interface",date: new Date("2018-09-06T02:59:15.945Z"),array: [],obj: {_id: 13822,num: 57365,date: new Date("2018-09-06T06:19:24.275Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 13823,str: "Guarani Books Tuna",num: 69538,date: new Date("2018-09-06T06:21:07.864Z"),array: [],obj: {_id: 13824,num: 74123,date: new Date("2018-09-06T12:10:29.861Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 13825,str: "Buckinghamshire invoice Barbados Dollar",num: 31724,date: new Date("2018-09-05T20:23:43.627Z"),array: [53344,39089,"Ergonomic Concrete Hat systems",[99154,new Date("2018-09-05T20:37:53.432Z"),new Date("2018-09-05T21:47:20.049Z"),{_id: 13826,str: "circuit Trail",num: 53502,date: new Date("2018-09-06T12:41:20.847Z"),obj: {}},{_id: 13827,date: new Date("2018-09-06T16:13:04.643Z"),array: [new Date("2018-09-06T19:24:09.347Z")],obj: {_id: 13828,str: "synthesize",num: 58904,date: new Date("2018-09-06T19:47:25.701Z"),array: [],obj: {_id: 13829,str: "Tactics motivating transmit",num: 9232,array: []}}}],"Facilitator Democratic People's Republic of Korea bypassing",66090,new Date("2018-09-06T01:55:40.402Z"),{_id: 13830,date: new Date("2018-09-06T07:51:56.301Z")},"real-time payment Denar"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13831,str: "program violet SAS",num: 78800,date: new Date("2018-09-06T02:29:12.145Z"),array: ["Forward",69334,74995,{_id: 13832,num: 78050,date: new Date("2018-09-06T01:12:05.074Z"),obj: {}},new Date("2018-09-06T12:33:21.240Z"),new Date("2018-09-05T23:46:52.464Z"),new Date("2018-09-06T14:10:22.932Z"),"Delaware","innovate",new Date("2018-09-06T02:09:50.511Z"),[],61545,["generating Alaska"],new Date("2018-09-06T03:54:41.173Z"),42716],obj: {_id: 13833,str: "asynchronous",num: 29403,date: new Date("2018-09-06T08:18:17.451Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13834,str: "empowering maximized sensor",num: 43038,date: new Date("2018-09-06T13:17:20.531Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13835,str: "Fantastic",num: 27184,date: new Date("2018-09-06T07:19:30.146Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13836,num: 8398,date: new Date("2018-09-06T13:07:27.050Z"),obj: {_id: 13837,str: "Bedfordshire bleeding-edge backing up",num: 2446,date: new Date("2018-09-06T09:01:08.811Z"),array: [98078,[new Date("2018-09-06T01:40:08.233Z"),{_id: 13838,str: "HTTP",obj: {}},"invoice mint green Wooden","empower"],72924,new Date("2018-09-06T05:34:48.286Z"),"interface blue",{_id: 13839,str: "Boliviano Mvdol architecture Wooden",num: 81176,date: new Date("2018-09-06T06:26:18.777Z"),array: [],obj: {}},58732,[],"transmitter",new Date("2018-09-06T06:48:00.094Z"),"parse"]}});
    },

    function(coll) {
        return coll.insert({_id: 13840,str: "Credit Card Account asynchronous core",num: 60702,date: new Date("2018-09-06T03:25:05.248Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13841,str: "end-to-end Intelligent Concrete Shoes",num: 24698,date: new Date("2018-09-06T18:27:56.212Z"),array: [],obj: {_id: 13842,num: 18575,date: new Date("2018-09-06T12:11:55.538Z"),array: [new Date("2018-09-06T06:43:18.227Z"),{_id: 13843,str: "China",array: [],obj: {_id: 13844,str: "recontextualize",num: 86416,date: new Date("2018-09-05T23:10:51.555Z"),array: [64012,"Strategist"],obj: {}}},new Date("2018-09-06T00:11:35.245Z"),"parsing Incredible Steel Ball",new Date("2018-09-06T19:14:10.059Z"),"Chicken interfaces Handcrafted",[],new Date("2018-09-06T02:20:09.744Z"),"Berkshire",[new Date("2018-09-06T00:00:20.519Z"),2315],22457,{_id: 13845,str: "Fantastic impactful Auto Loan Account",num: 78982,date: new Date("2018-09-06T17:00:08.457Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13846,str: "Credit Card Account Tools Assurance",num: 89037,date: new Date("2018-09-06T00:58:07.497Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 13847,str: "Electronics orchestration",num: 10966,date: new Date("2018-09-05T20:30:46.442Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13848,str: "Borders Avon",num: 9913,date: new Date("2018-09-05T23:14:05.730Z"),obj: {_id: 13849,num: 40302,date: new Date("2018-09-05T22:43:06.591Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13850,str: "California",num: 9775,date: new Date("2018-09-05T23:48:37.872Z"),array: [],obj: {_id: 13851,str: "Gardens",num: 13467,date: new Date("2018-09-06T09:20:21.662Z"),array: [[],new Date("2018-09-05T23:41:29.714Z"),36552,"infomediaries compressing District","deposit",new Date("2018-09-06T18:17:15.759Z"),new Date("2018-09-05T21:10:20.746Z"),13503,"value-added open-source Maryland",{_id: 13852,num: 91059,date: new Date("2018-09-06T02:28:03.446Z"),array: [84154],obj: {_id: 13853,str: "transmit Fantastic Soft Towels",obj: {_id: 13854,str: "Delaware HDD system",num: 4661,date: new Date("2018-09-06T13:46:45.481Z")}}},{_id: 13855,date: new Date("2018-09-06T02:45:55.662Z"),array: []},[new Date("2018-09-06T05:22:52.718Z"),new Date("2018-09-06T14:51:24.993Z"),{_id: 13856,str: "Checking Account Gorgeous Steel Fish",date: new Date("2018-09-06T04:04:56.018Z"),array: [],obj: {}},"Light"]],obj: {_id: 13857,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 13858,str: "Intelligent vortals",num: 73132,array: [new Date("2018-09-06T09:57:19.514Z"),"e-business Usability",[],[3522,"fuchsia Directives Small Metal Chair",{_id: 13859,str: "bricks-and-clicks United Arab Emirates Port",date: new Date("2018-09-05T22:25:03.108Z"),array: [63298],obj: {_id: 13860,str: "portals Clothing",num: 5875,date: new Date("2018-09-06T10:21:36.770Z")}}],"haptic mission-critical synergize",97167,new Date("2018-09-06T05:51:22.942Z"),"bus Berkshire Assistant",16957,new Date("2018-09-06T11:57:52.276Z"),{_id: 13861,str: "Personal Loan Account USB digital",num: 11995,date: new Date("2018-09-05T23:45:30.169Z"),obj: {}}],obj: {_id: 13862,str: "Graphic Interface online IB",date: new Date("2018-09-06T13:33:06.491Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13863,str: "violet",num: 44502,date: new Date("2018-09-06T11:22:24.992Z"),array: [{_id: 13864,str: "Rufiyaa",num: 63910,date: new Date("2018-09-05T22:21:59.403Z"),obj: {}},new Date("2018-09-06T13:42:20.826Z"),8375,"primary","circuit Global",91914,38961,5180,"Metal hack",63845,[],new Date("2018-09-06T05:25:33.213Z"),[],"policy transmitting Wallis and Futuna",{_id: 13865,str: "Bacon Coordinator",num: 527,date: new Date("2018-09-06T05:37:53.448Z"),array: [new Date("2018-09-06T11:42:06.289Z"),new Date("2018-09-06T03:04:18.859Z")]}]});
    },

    function(coll) {
        return coll.insert({_id: 13866,str: "Electronics",num: 3550,date: new Date("2018-09-06T18:51:19.457Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13867,str: "transmitting",date: new Date("2018-09-06T14:45:57.070Z"),array: [82031,25572,new Date("2018-09-06T14:33:03.946Z"),"Beauty Ergonomic Lead",new Date("2018-09-05T23:16:28.261Z"),13855,{_id: 13868,str: "systemic",num: 47246,array: [90158],obj: {_id: 13869,str: "Pizza Practical",num: 23009,date: new Date("2018-09-05T20:12:08.123Z"),array: []}},"Credit Card Account Tuna",[],{_id: 13870,num: 61709,array: [new Date("2018-09-06T02:53:49.828Z")],obj: {}},new Date("2018-09-06T01:46:37.793Z"),"quantifying synergy","compressing"],obj: {_id: 13871,str: "Face to face",num: 3559,date: new Date("2018-09-06T11:46:15.541Z")}});
    },

    function(coll) {
        return coll.insert({_id: 13872,str: "viral",num: 6117,date: new Date("2018-09-05T21:17:49.953Z"),array: [],obj: {_id: 13873,num: 31398,date: new Date("2018-09-05T20:01:09.832Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13874,str: "withdrawal Sleek",num: 92131,date: new Date("2018-09-06T05:28:01.597Z"),array: [],obj: {_id: 13875,str: "Zambian Kwacha Investment Account",num: 14213,date: new Date("2018-09-06T11:19:29.950Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13876,str: "Hat",num: 33248,date: new Date("2018-09-06T07:13:05.398Z"),array: [{_id: 13877,str: "Awesome Cotton Hat bypassing",num: 73787,array: [],obj: {}},23603,"Dobra Georgia Intelligent Plastic Shirt","Accounts Cambridgeshire",[],new Date("2018-09-06T17:04:13.909Z"),{_id: 13878,str: "embrace",num: 6464,date: new Date("2018-09-06T01:43:21.892Z"),array: [50739,38353,new Date("2018-09-06T18:58:49.794Z"),"Knoll"]},"Guatemala Home Loan Account deposit","HDD Credit Card Account high-level",new Date("2018-09-06T18:27:18.947Z")],obj: {_id: 13879,str: "Generic Corporate",num: 39081,date: new Date("2018-09-06T07:33:17.520Z"),obj: {_id: 13880,date: new Date("2018-09-06T15:52:17.190Z"),array: [new Date("2018-09-05T22:07:38.881Z"),46157,{_id: 13881,date: new Date("2018-09-06T19:41:41.277Z"),obj: {}},"Colombia"]}}});
    },

    function(coll) {
        return coll.insert({_id: 13882,str: "markets Designer",num: 8829,date: new Date("2018-09-06T09:02:40.261Z"),array: [["Lead Avon Virginia",new Date("2018-09-06T00:06:23.122Z"),new Date("2018-09-06T19:45:16.661Z"),[],32881],"quantify Bike redundant","calculate Monitored",52630,45304,new Date("2018-09-05T23:28:46.612Z"),64348,["Configuration Burundi Barbados",[]],{_id: 13883,str: "Automated green compressing",num: 17515,date: new Date("2018-09-06T00:52:17.158Z"),array: [],obj: {_id: 13884,str: "Triple-buffered systems sensor",array: [54454]}},new Date("2018-09-06T15:22:45.750Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13885,str: "optical Place",num: 59877,date: new Date("2018-09-06T11:36:30.006Z"),array: [],obj: {_id: 13886,str: "enable",num: 57115,array: ["Gorgeous",new Date("2018-09-06T08:18:06.507Z"),62835,92800,new Date("2018-09-06T11:44:15.473Z"),new Date("2018-09-06T15:25:38.580Z"),["systemic Saint Kitts and Nevis",new Date("2018-09-06T14:54:42.864Z"),"Seamless Money Market Account"],{_id: 13887,str: "system-worthy Rhode Island",num: 71967,date: new Date("2018-09-06T16:23:27.907Z"),obj: {_id: 13888,str: "Practical Frozen Chicken",num: 72717,date: new Date("2018-09-06T15:39:39.748Z"),array: []}},{_id: 13889,str: "User-centric Handmade Frozen Car Course",date: new Date("2018-09-05T22:27:21.229Z"),array: [new Date("2018-09-06T01:06:53.366Z")],obj: {}},"Refined bandwidth",{_id: 13890,str: "Jewelery azure next-generation",num: 55529,date: new Date("2018-09-06T08:15:36.668Z"),obj: {}},[]],obj: {_id: 13891,num: 19368,date: new Date("2018-09-06T05:55:37.679Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13892,str: "backing up transmitting",num: 66921,date: new Date("2018-09-06T10:18:42.156Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13893,str: "metrics back up",num: 30799,date: new Date("2018-09-06T11:19:20.128Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13894,str: "auxiliary transmit",num: 28070,date: new Date("2018-09-06T03:42:40.517Z"),array: [],obj: {_id: 13895,str: "Auto Loan Account Steel Views",num: 67895,date: new Date("2018-09-05T20:03:53.385Z"),array: [[],new Date("2018-09-06T19:44:55.112Z"),new Date("2018-09-06T19:08:54.611Z"),"Licensed Steel Sausages",47101,5770,["intangible"],{_id: 13896,str: "Profound JSON paradigm",num: 57311,date: new Date("2018-09-06T19:24:26.375Z"),array: [],obj: {}},57655,new Date("2018-09-06T13:08:15.662Z"),new Date("2018-09-06T03:24:01.894Z"),86230,new Date("2018-09-06T18:37:43.380Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 13897,str: "Grocery Libyan Arab Jamahiriya",num: 15852,array: [[new Date("2018-09-06T11:55:48.884Z"),"Soap monitor",89049,71282],new Date("2018-09-06T18:19:08.289Z"),{_id: 13898,str: "synthesizing Administrator Gorgeous Frozen Bike",date: new Date("2018-09-06T04:27:33.114Z"),array: [],obj: {}},5956,"Health zero defect",6601,"Heard Island and McDonald Islands reboot frictionless",new Date("2018-09-06T18:50:40.943Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 13899,str: "back-end",num: 92903,date: new Date("2018-09-06T14:10:52.692Z"),array: [new Date("2018-09-06T00:07:36.198Z"),new Date("2018-09-05T22:28:04.009Z"),"Progressive",6757,{_id: 13900,str: "indexing",num: 91853,date: new Date("2018-09-06T17:10:25.437Z"),obj: {}},47423,86500,[],"virtual integrated lavender","rich generate","open-source composite synthesize","Officer Keyboard Unbranded Frozen Fish",77317],obj: {_id: 13901,str: "connect",num: 90647,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13902,str: "product",num: 75694,date: new Date("2018-09-06T07:36:30.444Z"),array: [],obj: {_id: 13903,str: "virtual out-of-the-box auxiliary",num: 41403,date: new Date("2018-09-06T10:58:19.523Z"),array: [new Date("2018-09-06T02:13:31.747Z"),64148,"Awesome Frozen Pizza",22353,{_id: 13904,str: "Dynamic",array: [],obj: {_id: 13905,str: "connect Customer Vista",num: 52554,date: new Date("2018-09-05T20:55:56.819Z"),obj: {}}},new Date("2018-09-05T22:35:26.588Z"),85159,75170,["Armenia"],[],47167],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13906,str: "context-sensitive Home Integrated",num: 19448,date: new Date("2018-09-06T15:43:57.209Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13907,str: "Rubber architectures",num: 44641,array: ["Associate Handcrafted Rubber Table","Bedfordshire Garden",new Date("2018-09-06T07:39:20.479Z"),41259,{_id: 13908,str: "Rubber morph",num: 28646,date: new Date("2018-09-06T15:09:41.154Z"),array: [],obj: {}},28820,{_id: 13909,num: 39125,date: new Date("2018-09-06T07:44:16.320Z"),array: [[],"turquoise Granite",new Date("2018-09-06T03:01:25.801Z"),new Date("2018-09-06T14:19:01.509Z"),64769,83375,89712,[],new Date("2018-09-05T23:28:43.336Z")],obj: {_id: 13910,str: "functionalities",num: 76795,date: new Date("2018-09-06T18:21:40.033Z"),array: [],obj: {_id: 13911,str: "matrix Guyana Dollar",obj: {_id: 13912,str: "3rd generation web-readiness",num: 54352,date: new Date("2018-09-06T18:55:11.311Z")}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13913,str: "Group",num: 3065,date: new Date("2018-09-06T16:22:28.970Z"),array: ["neural bottom-line",{_id: 13914,str: "feed actuating Generic",array: [],obj: {_id: 13915,str: "Stand-alone New Leu",num: 18128,date: new Date("2018-09-06T15:58:03.353Z"),array: [new Date("2018-09-06T11:39:37.882Z"),36864,99756,16270,"attitude Oklahoma Infrastructure"],obj: {_id: 13916,str: "Crossroad alarm",num: 33128,date: new Date("2018-09-06T00:20:19.050Z"),array: [new Date("2018-09-06T02:46:55.041Z"),"RSS quantify"],obj: {}}}},[],"Money Market Account payment",new Date("2018-09-06T16:32:01.721Z"),[76632],new Date("2018-09-06T01:31:57.272Z"),81929,new Date("2018-09-06T09:06:58.955Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13917,str: "French Guiana",num: 60282,date: new Date("2018-09-05T21:01:42.855Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13918,str: "Administrator solutions",num: 22275,date: new Date("2018-09-06T06:20:30.290Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13919,str: "Berkshire",num: 12693,date: new Date("2018-09-06T17:33:12.435Z"),array: [],obj: {_id: 13920,str: "support",date: new Date("2018-09-06T14:07:22.084Z"),array: [new Date("2018-09-06T17:58:08.438Z"),["Dynamic Interactions",91466],"SCSI Bedfordshire",new Date("2018-09-06T05:42:22.165Z"),21815,{_id: 13921,date: new Date("2018-09-06T17:33:18.505Z"),obj: {}},[],new Date("2018-09-05T21:35:10.554Z"),97874,"District web-readiness","Afghani Cape Verde pricing structure"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13922,str: "Investor SMTP",num: 72211,date: new Date("2018-09-06T18:54:49.135Z"),array: [{_id: 13923,str: "New York harness",num: 50411,date: new Date("2018-09-06T03:10:36.799Z"),array: [new Date("2018-09-06T10:57:32.958Z"),55189],obj: {_id: 13924,num: 53966,array: [],obj: {}}},new Date("2018-09-06T09:15:51.535Z"),"Executive Administrator",99556,["fuchsia fuchsia"],21795,"Extended Soft open architecture",new Date("2018-09-06T06:46:11.363Z"),[],"Home Loan Account",19379,"navigating",78398]});
    },

    function(coll) {
        return coll.insert({_id: 13925,str: "SDD",num: 85037,date: new Date("2018-09-06T15:57:11.862Z"),array: [64536,"payment Unbranded Granite Gloves Investor",{_id: 13926,str: "contextually-based",num: 34406,date: new Date("2018-09-06T18:46:20.553Z"),array: [],obj: {}},55897,new Date("2018-09-06T09:54:20.627Z"),new Date("2018-09-06T06:30:03.228Z"),"Rupiah Integration ubiquitous",new Date("2018-09-06T03:33:24.235Z"),"parse",54090],obj: {_id: 13927,str: "e-services ROI Forward",date: new Date("2018-09-06T15:28:09.045Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 13928,str: "Creative strategic Buckinghamshire",num: 17733,date: new Date("2018-09-06T12:16:03.059Z"),obj: {_id: 13929,str: "application Berkshire",num: 47083,date: new Date("2018-09-05T21:13:43.514Z"),array: [],obj: {_id: 13930,str: "portals Fresh enhance",num: 1516,array: ["Cordoba Oro Lek digital",48412,"Buckinghamshire content",40586,9952,[new Date("2018-09-05T23:45:09.225Z"),new Date("2018-09-06T08:35:28.390Z"),22249,22594],[],"Group Iraq Fundamental",new Date("2018-09-06T12:22:23.810Z"),"TCP Rubber"]}}});
    },

    function(coll) {
        return coll.insert({_id: 13931,str: "systems Handcrafted",num: 53781,date: new Date("2018-09-06T10:19:23.612Z"),array: [new Date("2018-09-06T16:45:18.366Z"),[],64706,"e-business Gorgeous Frozen Chair"]});
    },

    function(coll) {
        return coll.insert({_id: 13932,str: "Automotive reintermediate Regional",date: new Date("2018-09-06T12:36:09.476Z"),array: [],obj: {_id: 13933,num: 63578,date: new Date("2018-09-05T20:40:52.622Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13934,str: "back-end",date: new Date("2018-09-06T12:06:41.811Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13935,str: "Berkshire Assimilated",num: 14826,date: new Date("2018-09-06T19:11:39.263Z"),array: ["District aggregate",new Date("2018-09-06T01:04:40.280Z"),"Home engineer architectures",28474,new Date("2018-09-05T22:10:01.623Z"),20630,new Date("2018-09-06T12:53:20.474Z"),{_id: 13936,str: "Future",num: 7489,date: new Date("2018-09-06T09:03:19.222Z"),array: [],obj: {}},13427,"Tools solutions",new Date("2018-09-06T03:44:33.568Z"),["wireless Manager withdrawal"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13937,str: "input SSL Personal Loan Account",num: 9037,date: new Date("2018-09-06T08:37:28.259Z"),array: [87392,"Palladium infrastructure bluetooth","Open-source Vermont",52675,"Cambridgeshire Open-architected",[],2870,new Date("2018-09-06T11:45:45.433Z"),"invoice Assurance projection"],obj: {_id: 13938,num: 23439,date: new Date("2018-09-06T11:31:54.335Z"),array: [{_id: 13939,str: "Gorgeous Frozen Ball transform extensible",num: 44502,date: new Date("2018-09-06T19:06:32.562Z"),array: [],obj: {}},97361,new Date("2018-09-06T10:37:16.966Z"),{_id: 13940,str: "Hawaii",num: 85320,date: new Date("2018-09-05T22:56:08.358Z"),array: [],obj: {_id: 13941,str: "Ohio",num: 99278,date: new Date("2018-09-06T19:36:16.959Z"),array: [new Date("2018-09-05T21:48:16.018Z"),new Date("2018-09-05T21:42:53.273Z"),86798],obj: {_id: 13942,array: [[]],obj: {}}}},{ _id: 13943 }]}});
    },

    function(coll) {
        return coll.insert({_id: 13944,str: "South Carolina neural",num: 90798,date: new Date("2018-09-06T15:42:32.170Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13945,str: "Public-key SQL",num: 30247,date: new Date("2018-09-06T18:12:38.363Z"),array: [new Date("2018-09-06T19:42:19.070Z"),"Clothing migration Trail","Handcrafted Soft Mouse envisioneer Markets",[],new Date("2018-09-06T00:02:48.658Z"),68646,79849,new Date("2018-09-06T17:02:35.801Z"),new Date("2018-09-06T19:44:50.661Z"),11059,66971,"Pizza iterate",new Date("2018-09-06T03:44:54.127Z")],obj: {_id: 13946,str: "copy",num: 50125,date: new Date("2018-09-06T10:51:43.301Z"),array: ["Checking Account",[{_id: 13947,str: "Port Intelligent",num: 89320,date: new Date("2018-09-05T22:18:49.027Z"),array: [],obj: {}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 13948,str: "Focused generating",num: 62571,date: new Date("2018-09-06T00:09:51.956Z"),array: [new Date("2018-09-06T04:31:28.353Z"),"SMTP deploy",45306,"National JSON",{_id: 13949,str: "navigating",num: 39377,array: []},new Date("2018-09-06T05:08:55.216Z"),"Sausages capacitor",new Date("2018-09-06T13:36:22.927Z"),"channels Tonga maximize",81240,47839],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13950,str: "Function-based Down-sized neural-net",num: 13812,date: new Date("2018-09-06T07:44:00.610Z"),array: [],obj: {_id: 13951,num: 17712,date: new Date("2018-09-06T03:50:32.748Z"),array: [],obj: {_id: 13952,str: "Visionary Borders Awesome",num: 45274,date: new Date("2018-09-06T16:09:02.487Z"),array: [43414,{_id: 13953,str: "teal",num: 35417,obj: {}},new Date("2018-09-06T10:59:23.326Z"),97609,"Minnesota Expanded back up",{_id: 13954,str: "Solutions Progressive Cheese",date: new Date("2018-09-06T07:15:35.552Z"),array: [],obj: {_id: 13955,str: "benchmark bypass",num: 30927,date: new Date("2018-09-05T22:53:32.029Z"),array: []}},new Date("2018-09-06T12:45:45.826Z"),"parse",83019],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13956,str: "Tasty Frozen Chicken withdrawal Internal",num: 80619,obj: {_id: 13957,str: "Unbranded Frozen Chips e-tailers",date: new Date("2018-09-06T06:19:53.739Z"),array: ["Lari",18338,{_id: 13958,str: "USB",num: 81491,date: new Date("2018-09-06T06:53:24.160Z"),array: ["calculate Kids"],obj: {}},new Date("2018-09-06T07:02:16.938Z"),"Credit Card Account Group local",21953,new Date("2018-09-06T12:42:05.331Z"),{_id: 13959,num: 51316,date: new Date("2018-09-06T04:30:10.511Z"),array: [[],{_id: 13960,str: "North Dakota",num: 21792,array: []},65754],obj: {_id: 13961,num: 67930,date: new Date("2018-09-06T02:24:09.995Z"),obj: {_id: 13962,str: "Personal Loan Account content mission-critical",num: 17556,array: []}}},new Date("2018-09-06T12:57:23.002Z"),37962,89454,[new Date("2018-09-06T16:50:04.996Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13963,str: "protocol",num: 59982,date: new Date("2018-09-06T01:12:14.273Z"),array: [40339,new Date("2018-09-06T02:10:51.622Z"),"Unbranded Steel Pizza Dynamic tan",new Date("2018-09-06T15:11:25.282Z"),37893,[],78698,new Date("2018-09-06T05:04:13.492Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13964,str: "navigate override hardware",num: 41151,date: new Date("2018-09-06T18:19:57.256Z"),array: ["background",new Date("2018-09-06T01:55:20.645Z"),new Date("2018-09-06T06:35:57.194Z"),40375,"Causeway Kentucky envisioneer","Research Home Loan Account",new Date("2018-09-06T15:46:16.519Z"),90113,{_id: 13965,str: "Handcrafted",date: new Date("2018-09-05T22:51:52.928Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13966,str: "calculating 3rd generation",num: 97019,date: new Date("2018-09-06T17:45:22.268Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13967,str: "Books",num: 53912,date: new Date("2018-09-06T17:56:52.024Z"),array: [78201,69684,new Date("2018-09-06T12:44:48.903Z"),81123,"Connecticut pixel Ergonomic Frozen Ball",["parse","Beauty",new Date("2018-09-06T05:29:29.451Z"),"Designer",new Date("2018-09-05T22:56:21.163Z")],"reciprocal multi-byte",new Date("2018-09-06T01:18:36.683Z"),[],68959,93303,[{_id: 13968,str: "override",num: 7011,date: new Date("2018-09-06T01:03:32.259Z"),obj: {}},new Date("2018-09-05T22:35:36.173Z")],{_id: 13969,str: "Fantastic Frozen Chips Personal Loan Account Total",date: new Date("2018-09-06T09:44:22.342Z"),array: [],obj: {}}],obj: {_id: 13970,num: 47794,date: new Date("2018-09-06T15:53:00.447Z"),array: [],obj: {_id: 13971,str: "algorithm",date: new Date("2018-09-05T23:28:41.109Z"),array: ["Gorgeous Metal Salad Refined"]}}});
    },

    function(coll) {
        return coll.insert({_id: 13972,str: "Island",num: 27460,date: new Date("2018-09-06T17:26:56.738Z"),array: [3632,[],"infrastructure Small Metal Chips",{_id: 13973,num: 72880,date: new Date("2018-09-06T03:30:38.245Z"),obj: {}},770,new Date("2018-09-06T02:15:06.658Z"),{_id: 13974,str: "Practical Granite Chair card",num: 60369,date: new Date("2018-09-06T04:12:09.679Z"),array: [],obj: {_id: 13975,str: "Sharable Cambridgeshire",date: new Date("2018-09-05T19:58:02.808Z"),array: [48917,new Date("2018-09-06T05:13:01.935Z"),["application",new Date("2018-09-06T06:57:28.706Z")],"Saint Pierre and Miquelon Engineer","deposit SMTP database"]}},new Date("2018-09-06T06:44:26.405Z"),68150,"open-source"],obj: {_id: 13976,str: "Small Group",num: 30547,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13977,str: "olive haptic",num: 73474,date: new Date("2018-09-06T15:41:51.027Z"),array: [new Date("2018-09-06T15:04:09.975Z"),53728,"Steel Incredible copying",38135,64390,{_id: 13978,str: "Maine synthesizing",num: 31351,date: new Date("2018-09-06T11:21:23.737Z"),obj: {}}],obj: {_id: 13979,num: 49925,date: new Date("2018-09-06T15:45:01.663Z"),array: [],obj: {_id: 13980,str: "Avon",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13981,str: "Clothing mint green Human",num: 5875,date: new Date("2018-09-06T09:39:31.290Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13982,str: "Cross-platform transmit",date: new Date("2018-09-05T22:53:42.648Z"),array: [28801,new Date("2018-09-06T17:08:41.489Z"),"Frozen SDD Convertible Marks","PNG Yemeni Rial",new Date("2018-09-06T08:02:43.684Z"),[],[3523,47062,new Date("2018-09-06T12:59:06.744Z"),{_id: 13983,str: "maximize District",num: 60725,date: new Date("2018-09-06T12:39:46.184Z"),array: [],obj: {_id: 13984,str: "Principal Customer",date: new Date("2018-09-06T07:58:36.852Z"),array: [new Date("2018-09-06T16:07:07.973Z")],obj: {_id: 13985,str: "Identity orchestrate",num: 61533,date: new Date("2018-09-06T09:36:44.225Z"),array: [],obj: {}}}}],29386,new Date("2018-09-06T07:27:16.685Z"),"JBOD Tasty Frozen Hat",["AGP"],{_id: 13986,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 13987,str: "online",num: 75017,array: [],obj: {_id: 13988,str: "Grass-roots tan interactive",num: 50494,date: new Date("2018-09-06T13:21:44.310Z"),array: [1067,"quantify","innovate",30730,new Date("2018-09-06T08:51:17.532Z"),new Date("2018-09-05T23:21:07.012Z"),72956,{_id: 13989,str: "orange XSS",date: new Date("2018-09-06T02:39:03.906Z"),obj: {}},"Avon program seize","firewall",[],{_id: 13990,num: 24833,array: [],obj: {_id: 13991,str: "Cotton Mill USB",num: 16881,array: [new Date("2018-09-06T00:08:37.722Z"),new Date("2018-09-05T21:56:43.661Z")]}}]}});
    },

    function(coll) {
        return coll.insert({_id: 13992,str: "cross-platform",num: 41901,date: new Date("2018-09-06T04:44:01.325Z"),array: [new Date("2018-09-06T02:53:03.988Z"),new Date("2018-09-06T07:13:19.026Z"),"Handmade El Salvador Colon US Dollar",12078,"Corporate Fantastic Granite Keyboard",{_id: 13993,str: "radical ROI",num: 3787,date: new Date("2018-09-06T09:07:08.126Z"),obj: {_id: 13994,num: 11490,date: new Date("2018-09-06T01:46:28.139Z"),array: [new Date("2018-09-06T08:46:25.439Z"),[],51043],obj: {_id: 13995,str: "monetize Mountains",num: 87803,date: new Date("2018-09-06T15:21:22.595Z"),array: [],obj: {}}}},59508,{_id: 13996,str: "Program bypassing system",num: 62467,array: [{_id: 13997,array: []},77162,79561],obj: {_id: 13998,str: "red",num: 39828,date: new Date("2018-09-06T18:03:42.386Z"),array: ["Developer"],obj: {_id: 13999,str: "Program Bedfordshire Metal",num: 33898,obj: {}}}},[],20664]});
    },

    function(coll) {
        return coll.insert({_id: 14000,str: "Gardens SQL",num: 25282,date: new Date("2018-09-06T10:59:04.563Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14001,str: "revolutionize Chair input",num: 69355,date: new Date("2018-09-06T05:29:00.506Z"),array: [new Date("2018-09-06T10:01:07.120Z"),80229,[],{_id: 14002,str: "Buckinghamshire Buckinghamshire",num: 18534,date: new Date("2018-09-06T02:04:02.840Z"),obj: {}},"Azerbaijan","navigating Buckinghamshire"],obj: {_id: 14003,str: "orange deposit Sports",num: 63181,date: new Date("2018-09-06T18:12:45.838Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14004,str: "driver Bedfordshire",num: 76694,date: new Date("2018-09-06T17:12:01.693Z"),array: ["seamless Alabama",new Date("2018-09-06T10:36:56.385Z"),87931,79855,new Date("2018-09-05T23:46:12.576Z"),"CSS Open-source",[new Date("2018-09-05T23:08:43.462Z"),{_id: 14005,str: "transmit Buckinghamshire Virginia",num: 81829,date: new Date("2018-09-06T17:31:24.451Z"),array: [],obj: {_id: 14006,str: "cutting-edge Frozen",date: new Date("2018-09-06T13:42:44.810Z"),array: [new Date("2018-09-06T15:56:14.541Z"),{_id: 14007,num: 30637,obj: {}},74012,98349],obj: {}}},{_id: 14008,str: "redundant Small",num: 95562,date: new Date("2018-09-06T14:36:26.832Z")}],{_id: 14009,obj: {_id: 14010,str: "frame Baby Toys",num: 77101,date: new Date("2018-09-06T04:58:39.026Z"),array: []}},65289,[],new Date("2018-09-05T23:21:53.567Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14011,str: "workforce circuit Wooden",num: 268,date: new Date("2018-09-06T17:51:54.461Z"),array: [94202,"Consultant United Kingdom",new Date("2018-09-06T11:15:41.307Z"),88485],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14012,str: "gold target",date: new Date("2018-09-05T21:42:30.049Z"),array: [[],"violet","indexing Gorgeous",23190,new Date("2018-09-06T17:13:32.088Z"),41113,7069,new Date("2018-09-06T09:09:32.535Z"),{_id: 14013,str: "bandwidth Arkansas Central African Republic",num: 71409,date: new Date("2018-09-06T05:10:59.158Z"),array: [[],{_id: 14014,num: 94479,date: new Date("2018-09-06T08:17:06.800Z"),array: [],obj: {_id: 14015,str: "morph Tactics",num: 17488,date: new Date("2018-09-06T17:45:23.339Z"),array: [],obj: {_id: 14016,num: 8181,obj: {}}}},{_id: 14017,str: "Accounts Sleek",num: 45521,date: new Date("2018-09-06T13:07:15.030Z"),array: ["Tactics"]},new Date("2018-09-06T05:56:35.671Z"),"North Dakota",14677],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 14018,str: "Avon Bedfordshire",num: 28045,array: ["Squares Supervisor Tasty Rubber Sausages",new Date("2018-09-06T02:10:39.303Z"),70349,[],99809,{_id: 14019,str: "Isle Plastic",num: 67199,array: ["Grocery",71492,"compress deposit","Granite array"]},{_id: 14020,num: 42791,date: new Date("2018-09-06T10:29:49.980Z"),array: [],obj: {_id: 14021,str: "Legacy Gorgeous",date: new Date("2018-09-06T06:04:07.580Z"),array: [new Date("2018-09-06T14:55:49.793Z"),new Date("2018-09-06T15:13:37.412Z")],obj: {}}},"Vermont deposit application",56940,new Date("2018-09-06T04:24:50.649Z"),27760,49971],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14022,str: "Iraqi Dinar Points",num: 86690,date: new Date("2018-09-06T18:39:24.227Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14023,str: "Unbranded",num: 94366,date: new Date("2018-09-05T23:10:06.197Z"),array: ["convergence client-server Sleek",24586,"Industrial","Baby",8301,new Date("2018-09-06T10:53:23.845Z"),new Date("2018-09-05T20:59:00.420Z"),{_id: 14024,str: "Fords Wallis and Futuna",date: new Date("2018-09-06T00:50:18.398Z"),array: [],obj: {_id: 14025,str: "Handmade FTP port",num: 8130,date: new Date("2018-09-06T19:47:58.515Z"),array: [],obj: {_id: 14026,str: "Soap",num: 7967,array: [75214,new Date("2018-09-06T19:37:56.129Z")],obj: {}}}},18269,{_id: 14027,num: 69710,obj: {_id: 14028,str: "calculating",num: 21473,date: new Date("2018-09-06T02:28:22.683Z"),array: [],obj: {_id: 14029,num: 41896,date: new Date("2018-09-06T13:52:29.389Z"),array: [new Date("2018-09-06T13:59:27.340Z"),[]],obj: {}}}},new Date("2018-09-06T06:39:19.488Z"),[new Date("2018-09-06T11:45:06.342Z")],"Buckinghamshire",{_id: 14030,date: new Date("2018-09-05T22:57:38.258Z")}]});
    },

    function(coll) {
        return coll.insert({_id: 14031,str: "South Africa intuitive",num: 67438,array: [60659,new Date("2018-09-06T09:27:07.002Z"),"Lebanese Pound",50127,79098,["Human","Loop Clothing JSON","Soft",{_id: 14032,str: "solution-oriented Consultant Yuan Renminbi",num: 74884,array: [new Date("2018-09-05T20:02:47.724Z"),new Date("2018-09-06T15:55:20.182Z"),new Date("2018-09-06T13:22:57.047Z")],obj: {}}],96474,{_id: 14033,str: "Lead",num: 84615,date: new Date("2018-09-05T23:58:22.493Z"),array: [],obj: {}},79922,["Quetzal reciprocal withdrawal"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14034,str: "Books adapter Internal",num: 9040,date: new Date("2018-09-06T01:37:32.510Z"),array: ["copying bluetooth black",70487,"Practical","Concrete",{_id: 14035,str: "platforms California",date: new Date("2018-09-06T07:59:36.535Z"),array: [],obj: {}},87068],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14036,str: "1080p EXE concept",num: 27988,date: new Date("2018-09-06T03:38:23.250Z"),array: [],obj: {_id: 14037,str: "gold",num: 62456,array: [{_id: 14038,str: "quantify GB",date: new Date("2018-09-06T16:16:37.759Z"),obj: {_id: 14039,str: "Cambridgeshire Incredible Fresh Chicken array",num: 70849,date: new Date("2018-09-06T12:55:03.313Z")}},"Grocery Hong Kong Switzerland",[],56328,new Date("2018-09-06T00:11:48.462Z"),[new Date("2018-09-06T14:51:38.389Z")],"Sleek Rubber Soap",new Date("2018-09-06T17:34:29.447Z"),"Generic Cotton Mouse",new Date("2018-09-06T14:44:19.716Z"),[50194,"Kids Officer Group"],13754,"impactful"],obj: {_id: 14040,str: "SAS proactive",num: 91280,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14041,str: "Checking Account policy invoice",num: 29482,date: new Date("2018-09-06T19:09:24.559Z"),array: [new Date("2018-09-06T16:04:20.105Z"),"Automotive Land",[],{_id: 14042,str: "Home Soft",num: 3083,date: new Date("2018-09-06T09:59:04.117Z"),array: [],obj: {_id: 14043,str: "quantify tertiary",num: 69769,date: new Date("2018-09-06T17:57:15.304Z"),array: [96532,[],[21986,"plum"],"lavender",31394]}},new Date("2018-09-06T04:07:42.837Z"),new Date("2018-09-06T11:24:08.701Z"),{_id: 14044,num: 84051,array: ["Avon","Ameliorated Integration"],obj: {}},new Date("2018-09-06T02:30:18.377Z")],obj: {_id: 14045,num: 52748,date: new Date("2018-09-05T23:53:23.322Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14046,str: "generate solid state hack",num: 82847,date: new Date("2018-09-06T18:42:47.097Z"),obj: {_id: 14047,str: "Kroon interface",date: new Date("2018-09-05T21:39:40.135Z"),array: [935,"utilisation payment Response",new Date("2018-09-05T23:58:37.424Z"),71563,new Date("2018-09-06T09:12:59.887Z"),25212,"Bedfordshire Jamaica Estates",[],new Date("2018-09-06T03:06:56.471Z"),18188,{_id: 14048,str: "Bermudian Dollar (customarily known as Bermuda Dollar)",date: new Date("2018-09-06T09:11:31.120Z"),array: []},new Date("2018-09-06T13:24:50.726Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14049,str: "ivory",num: 42224,date: new Date("2018-09-06T14:01:36.132Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14050,str: "Coordinator Malaysian Ringgit",num: 48500,date: new Date("2018-09-05T23:41:14.309Z"),array: ["Berkshire Avon",new Date("2018-09-06T05:53:32.807Z"),new Date("2018-09-05T23:24:04.147Z"),71776,[[],"transmitting",75158],30575,"Investment Account Unbranded Outdoors",[{_id: 14051,str: "Borders yellow",num: 6072,date: new Date("2018-09-05T22:54:46.842Z"),array: [],obj: {}}],66601,new Date("2018-09-05T20:07:56.261Z"),"transmitter",new Date("2018-09-05T23:55:13.589Z"),new Date("2018-09-06T18:28:26.826Z")],obj: {_id: 14052,str: "task-force AI scale",num: 31195,date: new Date("2018-09-06T08:20:23.816Z"),array: [{_id: 14053,str: "Kids Checking Account",num: 52395,date: new Date("2018-09-06T09:50:39.264Z"),obj: {_id: 14054,date: new Date("2018-09-06T11:13:04.259Z"),array: [[],new Date("2018-09-06T02:01:22.043Z")],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 14055,str: "enhance",num: 68137,date: new Date("2018-09-06T03:08:55.940Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14056,str: "navigate Rustic Wooden Ball next-generation",num: 13733,date: new Date("2018-09-06T01:10:25.390Z"),array: [new Date("2018-09-06T03:35:24.791Z"),new Date("2018-09-06T06:35:29.386Z"),"Auto Loan Account Licensed Personal Loan Account",25366,93399,new Date("2018-09-06T16:21:35.503Z"),"Movies Wooden",61899,{_id: 14057,num: 35006,date: new Date("2018-09-06T15:14:20.628Z"),array: [[]],obj: {}},"Groves","synthesizing","deposit cultivate Avon",{_id: 14058,str: "Codes specifically reserved for testing purposes",num: 60116,date: new Date("2018-09-06T19:22:29.784Z"),array: [],obj: {_id: 14059,str: "HTTP Malawi",num: 89280,obj: {_id: 14060,str: "Technician",date: new Date("2018-09-06T12:39:12.921Z"),array: []}}},70513],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14061,str: "Lead software",num: 62398,date: new Date("2018-09-06T17:07:25.905Z"),array: [new Date("2018-09-06T03:33:23.066Z"),"Savings Account",new Date("2018-09-05T23:04:08.587Z"),"maximize Persistent partnerships",13480,96198,[],91378,new Date("2018-09-06T03:10:00.949Z"),["Metal Rubber",{_id: 14062,str: "wireless gold",obj: {_id: 14063,str: "Principal Texas circuit",num: 16893,date: new Date("2018-09-06T07:17:11.683Z"),array: [],obj: {_id: 14064,date: new Date("2018-09-06T11:48:45.769Z"),array: [],obj: {}}}}],"disintermediate"],obj: {_id: 14065,str: "digital programming",num: 81960}});
    },

    function(coll) {
        return coll.insert({_id: 14066,str: "New Caledonia deposit override",date: new Date("2018-09-06T06:55:10.149Z"),array: ["Functionality",new Date("2018-09-06T02:49:45.040Z"),{_id: 14067,str: "Awesome Soft Gloves compressing",num: 74980,date: new Date("2018-09-06T03:43:15.941Z"),array: [],obj: {}},[],new Date("2018-09-06T01:10:43.325Z"),"contingency Sleek Soft Keyboard",new Date("2018-09-05T21:54:01.548Z"),93404,79385,58771,new Date("2018-09-06T18:48:09.039Z"),10232],obj: {_id: 14068,str: "Small 1080p solid state",num: 68612,date: new Date("2018-09-06T15:46:57.872Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14069,str: "Designer enhance Home",num: 15315,date: new Date("2018-09-06T02:53:03.125Z"),array: [new Date("2018-09-06T08:36:14.506Z"),new Date("2018-09-06T10:36:22.745Z"),"foreground",17959,"navigate Panama",{_id: 14070,str: "bluetooth",num: 27705,date: new Date("2018-09-06T19:09:57.756Z"),array: [],obj: {_id: 14071,num: 20876,obj: {}}},[],new Date("2018-09-06T18:44:39.843Z")],obj: {_id: 14072,str: "Gateway turquoise",date: new Date("2018-09-06T06:13:57.913Z"),array: [45723,55476,"synthesize",55546,["Passage"],"Small",[78204,24164,new Date("2018-09-06T18:25:26.259Z"),[]]]}});
    },

    function(coll) {
        return coll.insert({_id: 14073,str: "Summit",num: 67778,date: new Date("2018-09-05T21:37:24.193Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14074,str: "cross-platform mindshare",num: 21567,date: new Date("2018-09-06T18:38:43.001Z"),array: [39032,new Date("2018-09-06T00:37:35.814Z"),"Security",37767,62510,29536,new Date("2018-09-06T09:09:04.474Z"),[],"Chicken Bedfordshire bus","Money Market Account Checking Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14075,str: "THX",num: 60584,date: new Date("2018-09-06T00:16:39.568Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14076,str: "quantifying",num: 72105,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14077,str: "Tenge connect",num: 73202,date: new Date("2018-09-05T23:07:05.568Z"),array: [58917,new Date("2018-09-05T22:01:35.147Z"),new Date("2018-09-06T12:10:06.823Z"),47032,new Date("2018-09-06T17:25:56.600Z"),"Baby ivory grey",54005,"Fish","integrate Cayman Islands Dollar Tactics",[],75647,"Intelligent Steel Towels Concrete full-range",[{_id: 14078,str: "Internal",num: 77131,array: [],obj: {}},new Date("2018-09-06T17:09:03.793Z")]],obj: {_id: 14079,str: "redefine",num: 97983,date: new Date("2018-09-06T04:28:39.789Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14080,str: "deposit Metal Unbranded",num: 29031,date: new Date("2018-09-06T19:53:10.243Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14081,str: "Steel withdrawal",num: 38211,date: new Date("2018-09-06T19:11:58.642Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14082,str: "optimal Concrete",num: 3607,date: new Date("2018-09-06T19:41:40.872Z"),array: [45646,"Functionality Rubber",68624,new Date("2018-09-06T00:01:43.021Z"),80758,"Cloned Computer motivating",[],{_id: 14083,str: "West Virginia Island Incredible Steel Bike",num: 40010,date: new Date("2018-09-05T23:49:40.094Z"),obj: {_id: 14084,num: 43332,date: new Date("2018-09-06T11:18:35.210Z"),array: [],obj: {}}},new Date("2018-09-06T11:51:14.973Z"),"program","Director brand Greens",["Prairie",23140,{_id: 14085,str: "Pizza",date: new Date("2018-09-05T22:17:15.724Z"),array: []},new Date("2018-09-05T22:01:18.532Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14086,str: "alarm driver",num: 7041,date: new Date("2018-09-06T05:06:54.212Z"),array: [],obj: {_id: 14087,num: 83792,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14088,str: "Michigan Chips",num: 18335,date: new Date("2018-09-06T15:15:46.650Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14089,str: "Cambridgeshire global Louisiana",num: 95310,date: new Date("2018-09-06T15:59:01.823Z"),array: ["Metal Mouse",new Date("2018-09-06T19:27:55.129Z"),new Date("2018-09-06T05:39:14.199Z"),21511,"channels Credit Card Account solid state",new Date("2018-09-06T18:26:43.394Z"),[],{_id: 14090,str: "Intuitive Metrics",num: 44289,date: new Date("2018-09-06T01:20:21.052Z"),array: [],obj: {}},"emulation hack",45904,"Handmade Street synthesize",66535],obj: {_id: 14091,num: 16987,date: new Date("2018-09-06T06:38:25.345Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14092,str: "Cambridgeshire backing up",num: 61386,date: new Date("2018-09-06T11:54:27.713Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14093,str: "virtual",date: new Date("2018-09-06T07:53:46.688Z"),array: [[],new Date("2018-09-06T17:18:43.493Z"),{_id: 14094,str: "application Falls Coordinator",num: 85855,date: new Date("2018-09-06T19:13:11.566Z"),obj: {}},91899,"cross-platform",new Date("2018-09-06T11:08:41.357Z"),new Date("2018-09-06T14:03:07.882Z"),"synthesize bricks-and-clicks","Legacy leading-edge 1080p",96870],obj: {_id: 14095,num: 2825,date: new Date("2018-09-05T22:19:33.704Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14096,str: "Massachusetts United States of America",date: new Date("2018-09-06T12:32:51.963Z"),array: ["Nebraska parse",new Date("2018-09-06T07:25:21.595Z"),"Tuna Missouri COM",new Date("2018-09-06T07:56:14.880Z"),"Response","Licensed",new Date("2018-09-06T02:11:10.312Z"),new Date("2018-09-06T19:16:12.942Z"),[],41289,28657,81984]});
    },

    function(coll) {
        return coll.insert({_id: 14097,str: "firewall Frozen Buckinghamshire",num: 42501,date: new Date("2018-09-06T06:22:27.873Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14098,str: "Cotton Central African Republic streamline",num: 27028,date: new Date("2018-09-06T17:03:07.491Z"),array: [32127,"Web",{_id: 14099,num: 69043,date: new Date("2018-09-06T09:29:38.180Z"),array: [],obj: {}},"Borders interfaces",65438,79676,new Date("2018-09-06T03:10:43.823Z"),[],"Synergized","multi-byte Facilitator Saint Martin"],obj: {_id: 14100,str: "Hat Enhanced Outdoors",num: 23369,date: new Date("2018-09-05T21:38:01.165Z"),obj: {_id: 14101,str: "platforms customer loyalty back-end",num: 15456,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14102,str: "Incredible Steel Pizza",num: 78322,date: new Date("2018-09-06T15:11:16.230Z"),array: [],obj: {_id: 14103,str: "Intranet neural Rubber",num: 38119,date: new Date("2018-09-06T04:41:24.098Z"),array: [new Date("2018-09-06T14:31:50.986Z"),22655,"Direct indexing Incredible Rubber Bacon",new Date("2018-09-06T01:56:35.631Z"),[],"International fuchsia",new Date("2018-09-06T13:20:07.644Z"),"Venezuela",82416,new Date("2018-09-06T06:01:28.159Z"),{_id: 14104,str: "Factors",num: 30897,obj: {_id: 14105,str: "Norfolk Island",num: 62228,date: new Date("2018-09-05T21:33:05.904Z"),array: [new Date("2018-09-06T04:00:00.669Z")],obj: {}}},new Date("2018-09-06T01:54:57.673Z"),20538],obj: {_id: 14106,str: "1080p",date: new Date("2018-09-05T20:31:01.084Z"),array: [84445,{_id: 14107,num: 52100,array: []}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14108,str: "Money Market Account Rubber",num: 99013,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14109,str: "protocol mint green e-business",num: 16477,date: new Date("2018-09-06T13:19:41.148Z"),array: [[],"Home Loan Account",{_id: 14110,str: "National feed",date: new Date("2018-09-06T07:10:46.297Z"),array: [],obj: {_id: 14111,str: "Coves Investment Account Rand Loti",num: 57243,date: new Date("2018-09-06T03:08:09.139Z"),array: [new Date("2018-09-05T21:49:10.060Z"),34502,87642],obj: {_id: 14112,str: "redundant Auto Loan Account",num: 1577,date: new Date("2018-09-06T11:20:25.703Z")}}},46388,new Date("2018-09-06T04:27:55.436Z"),"Pennsylvania",{_id: 14113,str: "Libyan Dinar PCI",num: 51348,date: new Date("2018-09-06T12:40:29.181Z"),array: []},new Date("2018-09-06T02:43:46.727Z"),new Date("2018-09-06T17:01:45.738Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14114,str: "Borders",num: 56913,date: new Date("2018-09-06T19:50:52.102Z"),array: [{_id: 14115,str: "responsive Somalia Networked",num: 66115,array: [],obj: {}},39811,new Date("2018-09-06T09:51:32.936Z"),"Home Loan Account tangible",74487,"program Coordinator support",new Date("2018-09-05T20:27:23.497Z"),[],new Date("2018-09-06T07:43:38.691Z"),16286,{_id: 14116,str: "Orchestrator",num: 79388,date: new Date("2018-09-06T10:23:34.605Z"),array: [],obj: {_id: 14117,str: "quantifying",num: 55423,array: []}}],obj: {_id: 14118,str: "JSON",date: new Date("2018-09-06T02:23:05.274Z")}});
    },

    function(coll) {
        return coll.insert({_id: 14119,str: "silver Avon seize",num: 13216,date: new Date("2018-09-06T01:38:53.253Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14120,str: "Concrete Gloves",num: 77941,date: new Date("2018-09-06T13:22:42.591Z"),array: [22355,"Networked sensor",new Date("2018-09-06T19:18:02.042Z"),"payment mobile",new Date("2018-09-06T00:37:47.507Z"),{_id: 14121,str: "mobile",num: 2408,date: new Date("2018-09-06T18:45:46.335Z"),array: [],obj: {}},42902,2858,[new Date("2018-09-06T17:51:59.376Z"),"multi-byte Concrete bluetooth",new Date("2018-09-06T17:25:58.676Z"),new Date("2018-09-06T00:42:15.084Z"),77002]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14122,num: 240,date: new Date("2018-09-06T04:37:35.098Z"),array: [80849,{_id: 14123,str: "Stream",num: 68286,date: new Date("2018-09-05T19:59:44.598Z"),array: [19829],obj: {_id: 14124,date: new Date("2018-09-06T11:38:25.082Z"),array: [],obj: {_id: 14125,str: "viral",num: 92886,date: new Date("2018-09-05T22:17:24.024Z")}}},["Strategist",new Date("2018-09-06T00:05:45.784Z"),21038,new Date("2018-09-06T08:22:29.382Z")],"reintermediate Rubber primary","bypass connecting",[],"interface Sports Utah",new Date("2018-09-05T21:55:53.860Z"),25186,new Date("2018-09-06T01:13:08.062Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14126,str: "Dynamic AI black",num: 5529,date: new Date("2018-09-06T07:03:34.270Z"),array: [{_id: 14127,str: "Fresh pink",num: 64296,date: new Date("2018-09-06T18:30:41.141Z"),array: [38361],obj: {}},new Date("2018-09-06T06:07:10.689Z"),29644,22595,"Functionality asymmetric JSON",[],new Date("2018-09-06T13:16:40.191Z"),47294,new Date("2018-09-06T02:24:15.894Z"),["Global payment","JBOD Incredible Concrete Towels Ergonomic",33017]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14128,str: "Washington",num: 14237,date: new Date("2018-09-06T05:50:04.465Z"),array: [new Date("2018-09-05T23:40:53.784Z"),63906,[{_id: 14129,num: 44706,date: new Date("2018-09-06T11:38:56.815Z"),array: [],obj: {}},[],new Date("2018-09-06T10:26:45.017Z"),30151],"Tasty Steel Ball","Assurance Cambodia","Alabama actuating",{_id: 14130,str: "Granite quantifying",num: 24460,array: [new Date("2018-09-05T21:10:23.199Z"),[],63055,new Date("2018-09-06T05:02:46.644Z")],obj: {_id: 14131,str: "empower generate interactive",date: new Date("2018-09-06T10:15:49.721Z"),array: ["niches",new Date("2018-09-06T07:15:51.047Z"),new Date("2018-09-05T20:52:37.112Z")],obj: {}}},[],{_id: 14132,num: 30249,date: new Date("2018-09-06T14:00:15.139Z")},{_id: 14133,str: "SDR",num: 77020,array: [{_id: 14134,str: "Buckinghamshire B2B",num: 62947,date: new Date("2018-09-05T22:56:36.839Z"),obj: {}}]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14135,num: 55649,array: []});
    },

    function(coll) {
        return coll.insert({_id: 14136,str: "primary capability Tasty Wooden Soap",num: 91299,date: new Date("2018-09-05T23:05:32.329Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14137,str: "ROI Michigan override",num: 7210,date: new Date("2018-09-06T05:29:21.982Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14138,str: "Open-source Wooden",num: 62214,date: new Date("2018-09-05T23:39:09.363Z"),array: [],obj: {_id: 14139,num: 84796,date: new Date("2018-09-06T10:18:38.169Z"),array: [new Date("2018-09-06T12:04:25.259Z"),"Incredible online",new Date("2018-09-06T12:22:37.613Z"),["Team-oriented Technician","hard drive matrix"],6917,"local Netherlands","intangible",44597,9720,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14140,str: "Drive turquoise",num: 20086,date: new Date("2018-09-06T08:34:05.510Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14141,str: "online Optimization architectures",num: 5108,date: new Date("2018-09-06T00:49:45.679Z"),array: [],obj: {_id: 14142,str: "Brazilian Real quantify Money Market Account",num: 54806,date: new Date("2018-09-06T15:54:31.875Z"),array: ["Ergonomic",new Date("2018-09-06T07:49:11.837Z"),{_id: 14143,num: 22203,date: new Date("2018-09-05T21:29:01.508Z"),obj: {_id: 14144,str: "distributed",date: new Date("2018-09-06T15:48:02.045Z"),array: [],obj: {}}},90293,new Date("2018-09-06T18:08:14.137Z"),45381,[new Date("2018-09-06T11:21:44.630Z")],[83297,[]],new Date("2018-09-05T20:07:42.262Z"),"Forks bluetooth dedicated",new Date("2018-09-06T17:32:54.773Z"),"transmit indigo Money Market Account","Borders"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14145,str: "Practical",num: 23961,date: new Date("2018-09-05T22:47:52.475Z"),array: [new Date("2018-09-06T01:58:16.229Z"),"Division niches Incredible",[],86000,new Date("2018-09-06T05:14:49.411Z"),"analyzer Gloves","robust Money Market Account Handcrafted Granite Shirt",[],new Date("2018-09-06T11:06:22.931Z"),78501,15373],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14146,str: "Industrial deposit",num: 10981,date: new Date("2018-09-06T16:21:25.219Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14147,str: "Creative rich Singapore",num: 3990,date: new Date("2018-09-06T09:35:36.542Z"),array: [],obj: {_id: 14148,str: "Internal mint green",num: 8575,date: new Date("2018-09-05T22:39:08.620Z"),array: ["enable Senior Web",new Date("2018-09-05T20:40:29.490Z"),40558,"deploy withdrawal multi-byte",new Date("2018-09-06T17:25:29.334Z"),"Kids",new Date("2018-09-06T00:28:07.657Z"),44835,71022,7198,[new Date("2018-09-06T04:50:57.245Z"),"HDD deposit Practical Soft Shoes",{_id: 14149,num: 35895,date: new Date("2018-09-06T09:18:21.381Z"),array: []}],"Gold"]}});
    },

    function(coll) {
        return coll.insert({_id: 14150,str: "Fantastic Fresh Mouse Home Loan Account Plastic",num: 97078,date: new Date("2018-09-05T23:25:37.560Z"),array: [],obj: {_id: 14151,str: "matrix Gloves",num: 45322,date: new Date("2018-09-06T13:34:01.808Z"),array: [81371,new Date("2018-09-05T23:28:51.198Z"),{_id: 14152,str: "Regional",obj: {}},{_id: 14153,num: 30693,date: new Date("2018-09-06T00:34:14.546Z"),array: [3366,new Date("2018-09-05T21:11:41.856Z"),"eyeballs"],obj: {}},"Nauru District Function-based","innovate 1080p",["Kids",new Date("2018-09-05T23:09:54.194Z"),34992],new Date("2018-09-06T04:48:09.810Z"),8871,"New Hampshire",{_id: 14154,array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14155,str: "local area network input synergies",num: 56300,date: new Date("2018-09-06T12:41:30.516Z"),array: [9580,"Officer Hungary",new Date("2018-09-05T21:40:01.527Z"),9130,new Date("2018-09-06T15:50:07.249Z"),new Date("2018-09-05T23:27:31.050Z"),"Bacon Factors","Hat",72348,{_id: 14156,str: "Guyana Dollar",num: 44059,date: new Date("2018-09-06T00:31:16.149Z"),array: [],obj: {}},[{_id: 14157,str: "impactful Circles",num: 14823,array: [],obj: {_id: 14158,str: "Nevada Fantastic Cross-platform",date: new Date("2018-09-06T10:13:59.280Z"),obj: {}}},["Garden infrastructures Industrial"]],new Date("2018-09-06T14:11:25.601Z"),52333],obj: {_id: 14159,num: 61026,date: new Date("2018-09-06T06:35:21.381Z")}});
    },

    function(coll) {
        return coll.insert({_id: 14160,str: "seize Computers",num: 36623,date: new Date("2018-09-06T18:52:38.024Z"),array: [{_id: 14161,str: "pricing structure orange",date: new Date("2018-09-06T00:51:07.827Z"),array: [],obj: {}},new Date("2018-09-05T20:52:26.277Z"),2195,95785,"Chicken collaboration",new Date("2018-09-06T13:43:00.669Z"),[],"Sausages hacking",87636,new Date("2018-09-06T09:40:59.108Z"),new Date("2018-09-06T06:30:22.486Z")],obj: {_id: 14162,str: "green hub",num: 58526,date: new Date("2018-09-06T14:08:43.543Z"),array: [],obj: {_id: 14163,num: 71237,date: new Date("2018-09-06T15:38:30.305Z"),array: ["Ergonomic Car","connect Programmable Prairie"]}}});
    },

    function(coll) {
        return coll.insert({_id: 14164,str: "Berkshire Ergonomic Metal Hat",num: 19839,date: new Date("2018-09-06T06:10:40.528Z"),array: [new Date("2018-09-06T07:40:26.251Z"),"Car",new Date("2018-09-06T01:34:58.031Z"),3645,[],new Date("2018-09-05T21:30:33.909Z"),"Lithuanian Litas Investor human-resource",[{_id: 14165,num: 13110,array: [],obj: {}},41967,"reciprocal"],78271,"mission-critical New Hampshire",new Date("2018-09-06T04:41:40.078Z")],obj: {_id: 14166,str: "backing up",num: 26116,date: new Date("2018-09-05T21:40:36.797Z"),obj: {_id: 14167,str: "Creative",num: 84882,date: new Date("2018-09-06T12:21:53.207Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 14168,num: 65792,date: new Date("2018-09-06T09:08:05.068Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14169,str: "infomediaries multi-tasking Pakistan Rupee",num: 78171,date: new Date("2018-09-06T05:04:39.541Z"),array: [85770,"silver salmon Netherlands Antillian Guilder","portal Shoes compress",new Date("2018-09-05T21:46:47.269Z"),new Date("2018-09-06T07:27:40.472Z"),[],72348,"next generation",{_id: 14170,str: "Rhode Island Cheese systematic",num: 32659,date: new Date("2018-09-06T06:50:24.390Z"),array: [[]],obj: {_id: 14171,num: 33589,date: new Date("2018-09-05T22:09:55.881Z"),obj: {}}},new Date("2018-09-06T06:06:30.700Z"),[36006,"Tasty Cheese",new Date("2018-09-05T19:56:03.264Z"),"Crest communities",6119]],obj: {_id: 14172,str: "wireless Canada Zloty",num: 62296,array: [new Date("2018-09-06T03:05:42.016Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 14173,str: "Practical Wooden",array: [new Date("2018-09-05T20:04:34.896Z"),new Date("2018-09-06T18:36:26.661Z"),3329,"Plastic benchmark",{_id: 14174,num: 73425,date: new Date("2018-09-06T03:17:14.791Z"),array: [82133,[],"Ferry"],obj: {_id: 14175,str: "scalable Health Village",num: 82026,date: new Date("2018-09-06T18:16:59.425Z"),array: [],obj: {}}},new Date("2018-09-06T12:49:43.569Z"),[],[41561],72896,92505,"Libyan Arab Jamahiriya Cambridgeshire",new Date("2018-09-06T15:06:48.305Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14176,num: 91105,date: new Date("2018-09-06T10:11:32.975Z"),array: [],obj: {_id: 14177,str: "synthesizing Home Loan Account Auto Loan Account",num: 71795,date: new Date("2018-09-06T12:36:35.106Z"),array: [65633,"Fresh",53822,new Date("2018-09-06T04:03:48.627Z"),new Date("2018-09-06T11:02:17.052Z"),"SMS",{_id: 14178,str: "national protocol",num: 22860,date: new Date("2018-09-06T00:52:42.091Z"),array: [[],new Date("2018-09-06T04:21:35.030Z"),[{_id: 14179,str: "Harbor",array: [],obj: {}},new Date("2018-09-06T09:44:03.899Z"),82715],6267],obj: {}},"Guinea-Bissau USB user-centric",{_id: 14180,str: "Cotton PNG yellow",num: 85069,date: new Date("2018-09-06T01:01:56.936Z"),obj: {_id: 14181,str: "Soft Money Market Account"}},"Granite neural"],obj: {_id: 14182,str: "redundant overriding",num: 15200,array: [30149,new Date("2018-09-06T14:43:50.662Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 14183,str: "Metrics navigate Maryland",num: 42046,date: new Date("2018-09-05T21:15:59.410Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14184,str: "Investment Account Dominican Republic",num: 34659,date: new Date("2018-09-06T07:42:07.244Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14185,str: "Plain array",date: new Date("2018-09-05T23:33:16.266Z"),array: [new Date("2018-09-06T19:26:48.554Z"),80485,33571,"infomediaries SQL",{_id: 14186,str: "Persevering",num: 89649,date: new Date("2018-09-06T19:08:28.373Z"),array: [],obj: {}},["Kenyan Shilling facilitate"],13036,new Date("2018-09-05T22:42:01.902Z"),39523,[{_id: 14187,str: "COM quantifying bricks-and-clicks",num: 8520,array: [],obj: {}},"primary"]],obj: {_id: 14188,str: "Investment Account secondary",num: 72462,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14189,str: "incremental",num: 14519,date: new Date("2018-09-06T05:16:52.572Z"),array: [new Date("2018-09-06T02:58:05.993Z"),17839,"Maine PCI","invoice digital",16950,new Date("2018-09-06T00:29:03.915Z"),new Date("2018-09-05T23:22:36.520Z"),new Date("2018-09-05T22:46:27.024Z"),[],new Date("2018-09-05T22:14:11.690Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14190,str: "mobile Locks",num: 35862,date: new Date("2018-09-05T21:47:03.512Z"),array: [76503,90970,"deposit",new Date("2018-09-06T06:20:55.549Z"),[],["Auto Loan Account Nevada Frozen",new Date("2018-09-05T22:40:21.992Z"),"Valley"],98471,"web-enabled Gorgeous Principal",new Date("2018-09-06T08:05:25.175Z"),77298]});
    },

    function(coll) {
        return coll.insert({_id: 14191,str: "Sharable e-commerce",num: 37362,date: new Date("2018-09-06T00:03:06.107Z"),array: [new Date("2018-09-06T03:48:25.351Z"),[],new Date("2018-09-06T10:55:42.532Z"),"Frozen Puerto Rico Generic",13848,"Lane mint green","bricks-and-clicks Money Market Account XSS",10723,{_id: 14192,str: "Rupiah",num: 48190,date: new Date("2018-09-06T06:11:54.330Z"),array: [],obj: {_id: 14193,str: "firewall Bike violet",date: new Date("2018-09-06T06:04:10.429Z"),obj: {}}},["local area network aggregate Investor",new Date("2018-09-05T23:07:19.191Z"),88547],32657],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14194,str: "withdrawal transmit Illinois",num: 41319,date: new Date("2018-09-06T05:36:05.980Z"),array: [{_id: 14195,str: "Avon",num: 66714,date: new Date("2018-09-06T04:38:36.546Z"),obj: {}},new Date("2018-09-06T08:10:08.709Z"),new Date("2018-09-06T15:38:17.421Z"),67244,"Product bleeding-edge Wisconsin",[],61652,17921,new Date("2018-09-06T10:48:11.387Z"),"Home Loan Account Infrastructure",new Date("2018-09-06T17:32:35.095Z")],obj: {_id: 14196,date: new Date("2018-09-06T04:40:43.934Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14197,str: "primary",num: 23546,date: new Date("2018-09-05T20:13:31.079Z"),array: [81920,new Date("2018-09-06T04:49:17.687Z"),94664],obj: {_id: 14198,str: "Louisiana cyan Generic",num: 20493,date: new Date("2018-09-06T06:48:10.218Z"),obj: {_id: 14199,str: "withdrawal parse",num: 96931,date: new Date("2018-09-06T02:40:55.451Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14200,str: "port well-modulated",num: 23030,date: new Date("2018-09-06T09:42:38.381Z"),array: ["back up",16896,10132,36095,99662,{_id: 14201,num: 36997,date: new Date("2018-09-05T22:51:23.243Z"),array: [],obj: {}},"Small payment Island",new Date("2018-09-06T06:03:53.130Z"),new Date("2018-09-05T22:53:49.581Z"),{_id: 14202,str: "IB",array: []},"Creative virtual",[[]],"deposit"],obj: {_id: 14203,str: "Checking Account",num: 28734,date: new Date("2018-09-06T08:27:51.425Z"),array: [new Date("2018-09-06T10:26:36.894Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14204,num: 47258,date: new Date("2018-09-06T08:38:22.671Z"),array: [],obj: {_id: 14205,str: "streamline deposit",num: 64340,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14206,str: "Handcrafted Fresh",num: 44320,date: new Date("2018-09-06T13:17:26.437Z"),array: [new Date("2018-09-06T06:11:51.722Z"),new Date("2018-09-05T23:49:04.552Z"),56670,[],"Assistant Freeway","EXE Ergonomic multi-tasking",{_id: 14207,str: "Graphic Interface",num: 36904,date: new Date("2018-09-06T15:12:03.873Z"),obj: {}},8049,[],"back up program",5126,new Date("2018-09-06T15:08:18.298Z"),54847]});
    },

    function(coll) {
        return coll.insert({_id: 14208,str: "blue open-source Paradigm",date: new Date("2018-09-06T04:52:13.273Z"),obj: {_id: 14209,num: 7250,date: new Date("2018-09-06T15:23:20.477Z"),array: ["Savings Account SCSI Sleek Concrete Keyboard",new Date("2018-09-06T08:24:30.284Z"),new Date("2018-09-06T03:21:29.756Z"),new Date("2018-09-06T06:50:58.672Z"),"Unbranded",new Date("2018-09-06T15:01:39.137Z"),56615,2686,"Awesome Wooden Ball",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14210,num: 39051,date: new Date("2018-09-06T04:29:03.793Z"),array: [],obj: {_id: 14211,str: "mission-critical Salad reintermediate",num: 86370,date: new Date("2018-09-06T08:07:01.713Z"),array: [72100,"e-services moratorium Granite",new Date("2018-09-06T02:23:23.357Z"),[],{_id: 14212,str: "hack"},new Date("2018-09-06T01:30:28.399Z"),34208,23521,"green EXE",["red Central African Republic Investor",45199]],obj: {_id: 14213,str: "Arkansas Optional withdrawal",num: 42024,date: new Date("2018-09-06T18:44:15.423Z"),array: [],obj: {_id: 14214,date: new Date("2018-09-06T07:31:44.125Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 14215,str: "Auto Loan Account Rubber",num: 96620,date: new Date("2018-09-06T11:48:16.293Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14216,str: "Unbranded Frozen Pants middleware SAS",num: 4743,date: new Date("2018-09-06T01:46:34.185Z"),array: [8656,new Date("2018-09-06T04:42:38.599Z"),14309,30583,"Incredible Cotton Chips",{_id: 14217,str: "tangible",num: 19356,date: new Date("2018-09-06T01:06:10.710Z"),array: [],obj: {}},[],{_id: 14218,str: "Haiti",array: [],obj: {}},"open-source Incredible Concrete Gloves",new Date("2018-09-06T04:35:21.511Z"),new Date("2018-09-06T05:51:22.012Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14219,str: "implement Missouri Bedfordshire",num: 32837,date: new Date("2018-09-06T09:20:56.595Z"),array: [],obj: {_id: 14220,num: 52201,date: new Date("2018-09-06T12:07:07.181Z"),array: [{_id: 14221,str: "Sausages Fundamental indexing",date: new Date("2018-09-06T02:01:14.226Z"),array: [new Date("2018-09-06T01:31:46.980Z"),[57912,"parsing transmitting Strategist"],"Infrastructure Springs Computer",{_id: 14222,num: 32841,obj: {_id: 14223,num: 75868,date: new Date("2018-09-06T10:28:38.350Z"),array: [85211],obj: {}}}],obj: {_id: 14224,str: "Crossroad",num: 86985,date: new Date("2018-09-06T14:48:57.799Z")}},99464,new Date("2018-09-06T00:26:50.393Z"),new Date("2018-09-06T02:30:49.935Z"),"Security","mesh",new Date("2018-09-06T09:01:22.588Z"),"vortals payment Pizza",22690,[],["Fish Forward",new Date("2018-09-06T14:18:56.564Z"),{_id: 14225,num: 80511,array: [],obj: {}}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14226,str: "Corporate pink",num: 48483,date: new Date("2018-09-05T22:00:42.130Z"),array: [{_id: 14227,str: "turquoise",num: 94023,array: [],obj: {}},77914,"cross-media",new Date("2018-09-06T10:39:04.053Z"),new Date("2018-09-06T04:50:42.398Z"),[],new Date("2018-09-06T04:46:35.316Z"),72065,33132,"user-centric Developer"]});
    },

    function(coll) {
        return coll.insert({_id: 14228,str: "Handmade",num: 10793,date: new Date("2018-09-06T02:11:19.880Z"),array: [74142,"Salad Industrial invoice",{_id: 14229,str: "Rue",num: 55549,date: new Date("2018-09-06T11:54:09.059Z"),obj: {}},40563,"Internal Berkshire Green","monitor",new Date("2018-09-06T15:30:08.593Z"),"composite Tuna Computers",new Date("2018-09-06T00:59:45.807Z"),new Date("2018-09-06T14:26:28.103Z"),[]],obj: {_id: 14230,str: "HTTP fuchsia copy",date: new Date("2018-09-06T13:55:51.801Z"),array: [10247,new Date("2018-09-06T15:29:28.926Z"),"Sleek Iceland withdrawal",77257,{_id: 14231,num: 56049,date: new Date("2018-09-06T14:12:10.495Z"),array: [],obj: {}},67430,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14232,str: "indexing 5th generation overriding",num: 62072,date: new Date("2018-09-06T16:23:25.037Z"),array: [],obj: {_id: 14233,str: "Gorgeous Fresh Keyboard",num: 31712,date: new Date("2018-09-06T07:10:55.734Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14234,str: "SQL Money Market Account Global",num: 24575,date: new Date("2018-09-05T22:30:15.894Z"),array: [],obj: {_id: 14235,str: "Officer",num: 12894,date: new Date("2018-09-06T06:05:14.231Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14236,str: "Legacy HTTP Beauty",num: 60619,date: new Date("2018-09-06T17:04:09.789Z"),array: [],obj: {_id: 14237,str: "grid-enabled",num: 40405,date: new Date("2018-09-05T23:01:05.640Z")}});
    },

    function(coll) {
        return coll.insert({_id: 14238,str: "Incredible Chips Uzbekistan Sum",num: 21398,date: new Date("2018-09-06T11:48:18.689Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14239,str: "Cape Verde Escudo users Buckinghamshire",num: 59030,date: new Date("2018-09-06T19:11:00.604Z"),array: [],obj: {_id: 14240,str: "deposit National",num: 21526,date: new Date("2018-09-05T20:17:29.261Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14241,num: 15164,date: new Date("2018-09-05T20:41:05.437Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14242,str: "green innovate Mobility",num: 54929,date: new Date("2018-09-05T21:05:31.835Z"),array: [[],"Concrete lavender",42984,new Date("2018-09-06T01:17:40.638Z"),66918,new Date("2018-09-05T22:54:07.265Z")],obj: {_id: 14243,str: "Intranet",num: 84123,date: new Date("2018-09-06T01:16:33.627Z"),array: [28255,new Date("2018-09-06T04:56:19.695Z"),{_id: 14244,str: "Toys blue Gourde US Dollar",date: new Date("2018-09-06T15:17:22.303Z"),array: [77433],obj: {}},"zero tolerance Lithuanian Litas Metal",new Date("2018-09-06T10:02:13.106Z"),"models"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14245,str: "Home Loan Account cross-platform Manager",num: 43963,date: new Date("2018-09-06T06:41:06.062Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14246,str: "optical Borders",num: 68023,date: new Date("2018-09-06T08:21:48.219Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14247,str: "withdrawal programming",num: 33304,date: new Date("2018-09-06T02:09:07.450Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14248,str: "Small Concrete Bacon Movies",num: 38030,date: new Date("2018-09-06T09:50:15.669Z"),array: [],obj: {_id: 14249,str: "connecting",num: 47661,date: new Date("2018-09-05T22:22:20.327Z"),array: ["Soft architectures","Consultant Marshall Islands calculate",new Date("2018-09-05T21:03:43.986Z"),new Date("2018-09-06T09:02:20.699Z"),61135,[{_id: 14250,str: "Ouguiya Paradigm",array: [5201],obj: {}},"mobile"],[],new Date("2018-09-06T08:22:34.098Z"),20547,32920,40380,{_id: 14251,str: "Forward Internal Russian Federation",num: 68470,date: new Date("2018-09-06T09:00:56.286Z"),array: [new Date("2018-09-06T06:31:23.362Z")]},new Date("2018-09-06T14:04:36.413Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14252,str: "feed Auto Loan Account Granite",date: new Date("2018-09-06T11:31:45.255Z"),array: [new Date("2018-09-06T00:43:34.227Z"),[48028],78905,"Data real-time",new Date("2018-09-06T19:51:58.942Z"),"green Investor Pants",new Date("2018-09-06T00:36:43.905Z"),"Fantastic Malaysian Ringgit","Chips Licensed Beauty",{_id: 14253,str: "turquoise deposit invoice",num: 36831,obj: {_id: 14254,str: "synergize digital",num: 89804,date: new Date("2018-09-06T13:06:26.731Z"),array: [],obj: {_id: 14255,date: new Date("2018-09-06T04:07:01.548Z"),array: [],obj: {}}}},86500],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14256,str: "salmon Customer-focused",num: 72507,date: new Date("2018-09-06T07:26:29.021Z"),array: [new Date("2018-09-06T16:25:50.486Z"),32905,new Date("2018-09-06T05:08:37.452Z"),39709,new Date("2018-09-05T20:50:47.559Z"),"Generic value-added","PCI Berkshire Plaza",54356,77296,96495,{_id: 14257,str: "Ramp",date: new Date("2018-09-06T19:03:59.300Z"),array: [],obj: {}},"Savings Account Central Global",[],"Saint Lucia hard drive"],obj: {_id: 14258,str: "Licensed Frozen Bacon Shirt",num: 57758,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14259,str: "SCSI Guyana Dollar",date: new Date("2018-09-06T03:13:13.376Z"),array: ["Honduras Jewelery Terrace",new Date("2018-09-05T20:22:43.934Z"),66193,"Argentina 24/365 United States Minor Outlying Islands",{_id: 14260,str: "Kansas",num: 14461,date: new Date("2018-09-06T15:37:43.591Z"),array: [86405,[22719,{_id: 14261,str: "innovative",num: 79327,date: new Date("2018-09-06T10:26:48.498Z"),array: ["enhance Mills",{_id: 14262,num: 34028,obj: {}},464],obj: {_id: 14263,str: "Springs",num: 62972,obj: {_id: 14264,str: "Saudi Arabia Gloves",date: new Date("2018-09-06T07:17:01.747Z"),array: [],obj: {_id: 14265,num: 18503,obj: {}}}}},6618,new Date("2018-09-06T08:29:55.934Z")],"Representative Handcrafted Granite Cheese Investor"]},new Date("2018-09-05T21:50:24.409Z"),new Date("2018-09-06T15:27:45.512Z"),[],new Date("2018-09-06T00:38:48.086Z")]});
    },

    function(coll) {
        return coll.insert({_id: 14266,str: "markets Quality Solomon Islands Dollar",date: new Date("2018-09-05T20:55:18.019Z"),array: ["connect Cambridgeshire",new Date("2018-09-06T15:31:33.565Z"),"Cambridgeshire white Credit Card Account",new Date("2018-09-05T20:09:21.826Z"),94943,new Date("2018-09-06T15:21:03.335Z"),"optimize Michigan SSL",[],79090,{_id: 14267,str: "withdrawal Keys navigate",num: 95431,date: new Date("2018-09-06T10:42:09.744Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14268,str: "Personal Loan Account",num: 98869,date: new Date("2018-09-06T17:20:50.368Z"),array: ["Tasty sky blue Australia","bypassing",{_id: 14269,str: "invoice exuding",num: 63882,date: new Date("2018-09-06T15:47:37.869Z"),array: [],obj: {_id: 14270,str: "functionalities Integrated Phased",num: 80295,date: new Date("2018-09-06T16:46:56.486Z")}},8176,new Date("2018-09-06T07:13:54.207Z"),new Date("2018-09-06T13:47:54.816Z"),51155,"Intelligent",new Date("2018-09-06T18:48:54.183Z"),14032,[],61488],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14271,num: 38655,array: [],obj: {_id: 14272,str: "New Taiwan Dollar bandwidth Handcrafted Rubber Cheese",num: 14269,date: new Date("2018-09-06T18:17:51.499Z"),array: ["parsing",94957,27927,"systems mobile",new Date("2018-09-05T21:11:16.862Z"),[],1087,new Date("2018-09-06T08:13:33.196Z"),{_id: 14273,str: "THX",num: 86881,date: new Date("2018-09-06T16:19:49.100Z"),array: [new Date("2018-09-06T17:07:04.065Z"),"Latvian Lats Louisiana programming",["Agent Chicken end-to-end"]],obj: {_id: 14274,num: 83536,date: new Date("2018-09-05T22:16:19.733Z")}},new Date("2018-09-06T02:45:06.985Z"),{_id: 14275,str: "port panel",num: 84990,date: new Date("2018-09-06T11:58:03.305Z"),array: [],obj: {}},1778]}});
    },

    function(coll) {
        return coll.insert({_id: 14276,str: "Trail",num: 85409,date: new Date("2018-09-06T09:14:48.469Z"),array: ["Vanuatu",new Date("2018-09-05T20:39:07.292Z"),3484],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14277,str: "deliverables",num: 68074,date: new Date("2018-09-06T17:36:49.568Z"),array: [],obj: {_id: 14278,str: "Kentucky Station sensor",num: 670,date: new Date("2018-09-06T08:42:09.574Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14279,str: "Response",num: 13224,date: new Date("2018-09-06T11:44:41.957Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14280,str: "Practical Plastic Shirt mindshare",num: 59478,date: new Date("2018-09-06T15:04:51.641Z"),array: [new Date("2018-09-05T23:47:16.974Z"),96771,"Brand harness","red calculating",new Date("2018-09-05T22:54:35.392Z"),[35199],"magnetic heuristic Kenya",44782,new Date("2018-09-06T06:23:40.270Z"),[],new Date("2018-09-06T13:11:55.202Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14281,str: "Auto Loan Account Falls",num: 19705,date: new Date("2018-09-06T17:34:15.991Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14282,str: "Granite Gorgeous",num: 200,date: new Date("2018-09-05T21:57:21.131Z"),array: ["Berkshire",68573,{_id: 14283,num: 41758,date: new Date("2018-09-06T06:29:37.673Z"),array: [[],new Date("2018-09-06T06:57:06.199Z"),"wireless",new Date("2018-09-06T03:08:33.290Z"),{_id: 14284,num: 81667,date: new Date("2018-09-06T17:57:10.551Z"),array: [],obj: {_id: 14285,str: "Lodge customer loyalty Facilitator",num: 82495,date: new Date("2018-09-05T20:58:23.336Z"),obj: {}}},"B2C interfaces",32604]},87717,"navigate National",new Date("2018-09-06T09:29:35.078Z"),new Date("2018-09-06T01:45:05.090Z")],obj: {_id: 14286,str: "Avon synthesizing Generic",date: new Date("2018-09-05T22:45:44.663Z"),obj: {_id: 14287,str: "Generic Fresh Mouse Ohio",num: 34419,array: [[],86020]}}});
    },

    function(coll) {
        return coll.insert({_id: 14288,num: 9449,date: new Date("2018-09-06T02:18:11.328Z"),array: [],obj: {_id: 14289,str: "Identity customer loyalty",date: new Date("2018-09-06T02:39:58.419Z"),array: [[],16805,{_id: 14290,str: "Brand unleash Liaison",num: 60489,date: new Date("2018-09-06T15:15:32.301Z"),array: [],obj: {_id: 14291,num: 76264,date: new Date("2018-09-06T13:40:44.282Z"),array: [54108,new Date("2018-09-06T04:41:19.272Z"),"Checking Account Liaison Specialist","Branch Intranet",{_id: 14292,str: "Garden microchip",array: []},"withdrawal Home",new Date("2018-09-06T04:38:45.944Z")],obj: {_id: 14293,str: "Representative Alabama",num: 76727,obj: {}}}},66948,["Belgium Cheese Directives"]]}});
    },

    function(coll) {
        return coll.insert({_id: 14294,str: "bypassing",num: 90588,date: new Date("2018-09-06T09:13:23.846Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14295,str: "needs-based Handmade",date: new Date("2018-09-06T04:22:52.251Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14296,str: "Cambridgeshire",num: 81928,date: new Date("2018-09-06T03:20:55.767Z"),array: [],obj: {_id: 14297,str: "matrix",num: 40751,date: new Date("2018-09-06T08:14:42.145Z"),array: [new Date("2018-09-06T06:27:02.961Z"),{_id: 14298,str: "Investment Account calculating",num: 94403,date: new Date("2018-09-06T05:49:44.645Z"),array: [],obj: {}},"COM",98738,new Date("2018-09-05T22:21:55.537Z"),new Date("2018-09-06T03:39:09.991Z"),38376,20971],obj: {_id: 14299,str: "card",date: new Date("2018-09-06T00:23:35.662Z"),array: [new Date("2018-09-06T05:48:47.728Z"),18663,{_id: 14300,str: "incremental payment",num: 14432,date: new Date("2018-09-06T12:46:40.365Z"),obj: {}},"United States of America Frozen deposit"]}}});
    },

    function(coll) {
        return coll.insert({_id: 14301,str: "Handcrafted Steel Salad",num: 5800,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14302,str: "primary Checking Account",num: 34823,date: new Date("2018-09-06T07:08:46.451Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14303,str: "reboot Engineer Optimization",num: 72709,date: new Date("2018-09-06T10:47:15.085Z"),array: [],obj: {_id: 14304,str: "Handcrafted",num: 63485,date: new Date("2018-09-06T17:51:02.209Z"),array: [60559,new Date("2018-09-06T07:21:33.129Z"),new Date("2018-09-06T10:19:51.190Z"),{_id: 14305,str: "Ecuador reboot Svalbard & Jan Mayen Islands",num: 47682,array: [31337],obj: {_id: 14306,str: "deposit wireless",num: 8892,obj: {_id: 14307,str: "focus group Internal",date: new Date("2018-09-06T08:18:03.513Z"),array: [],obj: {}}}},"quantifying",71241,["generating Rubber Public-key","Granite Savings Account",new Date("2018-09-06T13:29:57.644Z"),90231],new Date("2018-09-06T05:17:43.729Z"),"Zimbabwe Dollar West Virginia",32401]}});
    },

    function(coll) {
        return coll.insert({_id: 14308,str: "Table invoice Electronics",num: 81530,date: new Date("2018-09-05T20:58:56.022Z"),array: [new Date("2018-09-05T21:30:55.020Z"),["Tanzania",77965,"superstructure open-source Architect"],55101,668,"Program deposit",20278,new Date("2018-09-06T11:12:24.379Z")],obj: {_id: 14309,str: "incubate Computer",num: 24426,date: new Date("2018-09-05T22:24:52.967Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14310,str: "auxiliary Cotton",num: 84951,date: new Date("2018-09-05T23:44:55.491Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14311,str: "invoice invoice",num: 48355,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14312,str: "Taka",num: 63714,date: new Date("2018-09-06T14:10:13.846Z"),array: [new Date("2018-09-06T03:08:02.640Z"),72998,new Date("2018-09-06T12:23:02.726Z"),"Tasty microchip",new Date("2018-09-06T00:44:55.226Z"),{_id: 14313,str: "Credit Card Account Investor Hong Kong",num: 25897,date: new Date("2018-09-06T12:41:34.236Z"),array: [],obj: {_id: 14314,str: "Zimbabwe Dollar Computer",date: new Date("2018-09-06T16:52:11.322Z"),array: []}},"schemas Plastic Causeway",70989,{_id: 14315,str: "Credit Card Account",num: 24262,date: new Date("2018-09-06T16:32:11.082Z"),array: [36266,"enable Unbranded Steel Towels","Borders rich Object-based"],obj: {_id: 14316,str: "Home Loan Account mobile Enhanced",num: 2782,date: new Date("2018-09-06T07:49:24.814Z"),array: [],obj: { _id: 14317 }}},new Date("2018-09-06T15:41:41.612Z"),{_id: 14318,str: "Rustic",num: 41613,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 14319,str: "Books Intelligent Granite Car Concrete",date: new Date("2018-09-06T07:20:51.465Z"),array: ["Technician Turnpike",758,new Date("2018-09-06T02:16:37.489Z"),new Date("2018-09-06T04:58:27.862Z"),17167,"Bypass",new Date("2018-09-06T07:11:07.855Z"),[{_id: 14320,num: 41421,array: [],obj: {}}],new Date("2018-09-06T17:41:06.863Z"),"azure",58748,38462,["Station",{_id: 14321,str: "backing up",num: 93239,date: new Date("2018-09-06T13:10:45.175Z"),array: [],obj: {_id: 14322,str: "encoding pixel",date: new Date("2018-09-06T18:20:10.460Z"),array: [],obj: {}}},"Avon"]],obj: {_id: 14323,str: "Berkshire",num: 23087}});
    },

    function(coll) {
        return coll.insert({_id: 14324,str: "override Wooden",num: 7259,date: new Date("2018-09-06T09:38:42.200Z"),array: [new Date("2018-09-06T07:21:20.399Z"),[],new Date("2018-09-06T18:35:09.839Z"),{_id: 14325,date: new Date("2018-09-05T22:41:17.605Z"),array: ["Internal Unbranded Product"],obj: {_id: 14326,str: "Gloves technologies",num: 18499,date: new Date("2018-09-06T17:19:24.804Z"),array: [],obj: {}}},new Date("2018-09-05T22:24:30.991Z"),33415,"Incredible Martinique",68133,"moderator HDD",{_id: 14327,str: "RSS Cotton",num: 64816,date: new Date("2018-09-05T21:57:23.846Z"),obj: {_id: 14328,str: "mobile",num: 58620,array: []}},new Date("2018-09-06T18:50:27.612Z"),new Date("2018-09-06T01:14:47.568Z"),71720]});
    },

    function(coll) {
        return coll.insert({_id: 14329,num: 10326,date: new Date("2018-09-06T11:17:50.935Z"),array: [new Date("2018-09-06T02:54:26.842Z"),[],"Intelligent Steel Function-based",37732,new Date("2018-09-06T01:28:46.702Z"),"primary",new Date("2018-09-06T10:15:57.877Z"),"payment background Salad",30664,"Shoes",13801,41917,{_id: 14330,str: "Personal Loan Account Directives Norwegian Krone",num: 1521,date: new Date("2018-09-06T04:47:46.660Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 14331,str: "Organic brand",num: 44116,date: new Date("2018-09-06T06:59:32.418Z"),array: [new Date("2018-09-06T16:14:50.006Z"),68061,new Date("2018-09-06T19:48:47.936Z"),22947,"Maine withdrawal","Keyboard",{_id: 14332,str: "Investor",num: 81476,date: new Date("2018-09-06T07:02:16.920Z"),array: [[]],obj: {_id: 14333,num: 52996,obj: {_id: 14334,str: "grey Guarani",num: 86074,date: new Date("2018-09-06T02:12:28.191Z"),array: [],obj: {}}}},78973,[{_id: 14335,str: "4th generation e-markets",num: 45363,date: new Date("2018-09-06T11:42:36.702Z"),array: [],obj: {}}],new Date("2018-09-06T06:53:41.004Z"),new Date("2018-09-06T19:42:12.506Z"),98134]});
    },

    function(coll) {
        return coll.insert({_id: 14336,str: "Coordinator",num: 7853,date: new Date("2018-09-06T04:46:31.135Z"),array: [94298,{_id: 14337,str: "Shirt green",num: 57425,date: new Date("2018-09-06T07:42:41.414Z"),obj: {}},"invoice Fish Security",new Date("2018-09-06T02:52:29.571Z"),new Date("2018-09-05T23:11:24.092Z"),new Date("2018-09-05T22:09:15.918Z"),new Date("2018-09-06T04:49:36.594Z"),"JBOD",85076,70654,"deposit Assistant impactful"],obj: {_id: 14338,date: new Date("2018-09-06T11:38:13.204Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14339,str: "Rubber Practical Soft Shoes PCI",num: 43345,date: new Date("2018-09-06T06:04:41.328Z"),array: ["Netherlands Antilles Liaison",new Date("2018-09-06T10:55:36.985Z"),16323,new Date("2018-09-06T19:23:04.687Z"),75169,"Saint Helena parallelism",new Date("2018-09-06T08:06:05.253Z"),"overriding",{_id: 14340,str: "Avon Tanzania",num: 24989,date: new Date("2018-09-06T11:47:04.948Z"),array: [],obj: {}},{_id: 14341,str: "green Avenue transmitting",date: new Date("2018-09-06T08:18:22.788Z"),array: [],obj: {_id: 14342,str: "transmitter Handcrafted",num: 74998,date: new Date("2018-09-06T07:20:21.823Z"),obj: {_id: 14343,num: 59734,array: [{ _id: 14344 },42879,[new Date("2018-09-06T04:01:12.949Z"),"dynamic Tunnel Product"],53716,20753],obj: {_id: 14345,str: "virtual function protocol",num: 54422,date: new Date("2018-09-05T22:33:41.459Z"),array: [],obj: {}}}}},[[]]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14346,str: "payment Research",num: 31205,date: new Date("2018-09-06T11:57:54.996Z"),array: ["SCSI",new Date("2018-09-06T07:25:21.944Z"),new Date("2018-09-06T10:55:56.268Z"),["calculating Cotton"],78410,{_id: 14347,str: "Licensed",num: 21860,date: new Date("2018-09-06T04:52:40.491Z"),array: [],obj: {}},27813,new Date("2018-09-06T15:31:43.801Z"),[13168,4237],[],new Date("2018-09-06T07:13:03.573Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14348,str: "Shirt",num: 97709,date: new Date("2018-09-06T04:12:07.285Z"),array: [new Date("2018-09-06T14:23:20.242Z"),new Date("2018-09-06T02:36:23.439Z"),[],"withdrawal",57608,new Date("2018-09-05T23:21:32.434Z"),"Investment Account","e-business",[[77631],{_id: 14349,str: "RAM Refined optical",num: 51883,date: new Date("2018-09-06T08:41:04.769Z"),array: [],obj: {}}],new Date("2018-09-06T14:39:12.285Z"),29712,{_id: 14350,str: "Shirt Missouri program",num: 38879,date: new Date("2018-09-06T18:01:55.425Z"),array: [8372],obj: {}},"payment",88587,new Date("2018-09-06T05:10:15.984Z")],obj: {_id: 14351,num: 52375,date: new Date("2018-09-06T09:41:23.521Z"),obj: {_id: 14352,str: "clear-thinking hacking Automotive",array: [],obj: {_id: 14353,num: 49154,date: new Date("2018-09-06T19:52:10.357Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 14354,str: "deposit",num: 15152,date: new Date("2018-09-05T20:52:17.869Z"),array: [85127,new Date("2018-09-05T22:10:00.797Z"),"Virginia blue",new Date("2018-09-06T14:15:53.065Z"),new Date("2018-09-06T10:16:08.437Z"),10597,"Technician deposit","forecast Borders neural",[42438,{_id: 14355,date: new Date("2018-09-05T20:10:50.298Z"),array: [],obj: {}},"Home Loan Account payment Shoes","Assurance",13701,new Date("2018-09-06T06:42:37.536Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 14356,str: "Oklahoma Mayotte",num: 20312,date: new Date("2018-09-05T20:39:12.900Z"),array: ["navigating cyan",[],"panel synthesize",new Date("2018-09-06T05:24:08.018Z"),39671,new Date("2018-09-06T02:18:08.526Z"),"Steel",{_id: 14357,str: "Handmade Plastic Chicken mobile navigate",num: 52817,array: [85049],obj: {_id: 14358,num: 96288,date: new Date("2018-09-06T08:18:06.158Z"),array: [],obj: {}}},new Date("2018-09-06T07:09:33.096Z"),{_id: 14359,str: "Slovakia (Slovak Republic) back-end",num: 53121,date: new Date("2018-09-06T05:45:59.473Z")},"connecting interface Falkland Islands Pound",82982],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14360,str: "schemas invoice Rand Namibia Dollar",num: 72519,date: new Date("2018-09-06T13:35:43.452Z"),array: [28576,"benchmark South Dakota",{_id: 14361,str: "grey",num: 39597,date: new Date("2018-09-05T21:51:48.973Z"),array: [],obj: {_id: 14362,str: "back-end backing up e-business",num: 92840,date: new Date("2018-09-06T15:17:59.717Z"),obj: {}}},26462,[new Date("2018-09-06T10:06:47.314Z"),new Date("2018-09-06T06:19:40.201Z"),new Date("2018-09-06T18:41:04.275Z"),67711,"incubate",10720,[]],new Date("2018-09-06T13:04:35.821Z"),new Date("2018-09-06T13:01:52.673Z"),{_id: 14363,num: 31810,date: new Date("2018-09-06T14:36:32.653Z"),obj: {}}],obj: {_id: 14364,str: "reinvent Handmade Frozen Sausages",date: new Date("2018-09-06T11:14:19.016Z"),array: [{_id: 14365,str: "communities",num: 92876,date: new Date("2018-09-05T23:44:21.103Z"),array: ["Tuna wireless"],obj: {}},"multi-byte zero defect",new Date("2018-09-05T20:29:31.229Z"),{_id: 14366,num: 34031,array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14367,str: "next generation Supervisor Beauty",num: 86609,date: new Date("2018-09-06T01:15:45.066Z"),array: [],obj: {_id: 14368,str: "SDD",num: 66213,date: new Date("2018-09-06T04:14:13.430Z"),array: [],obj: {_id: 14369,str: "Berkshire high-level",date: new Date("2018-09-05T21:32:08.361Z"),obj: {_id: 14370,str: "target infomediaries Plaza",num: 12352,date: new Date("2018-09-06T09:07:39.680Z"),array: [{_id: 14371,num: 73817},new Date("2018-09-06T08:08:52.520Z"),28619,new Date("2018-09-06T08:50:03.945Z"),"artificial intelligence e-services",69010,new Date("2018-09-05T23:48:42.683Z"),"wireless",new Date("2018-09-06T00:33:37.581Z"),"Liaison","Vermont system frame",96734,{_id: 14372,str: "Savings Account open-source",num: 25842,obj: {}}],obj: {_id: 14373,date: new Date("2018-09-06T11:59:52.559Z"),array: ["Handcrafted",[new Date("2018-09-06T17:04:49.216Z")]]}}}}});
    },

    function(coll) {
        return coll.insert({_id: 14374,str: "SSL invoice",date: new Date("2018-09-06T10:20:56.635Z"),array: ["Tanzanian Shilling",35485,[],"SAS Palestinian Territory Creative",new Date("2018-09-06T12:41:56.201Z"),new Date("2018-09-06T16:13:44.124Z"),91401,{_id: 14375,str: "Hawaii Credit Card Account Swaziland",num: 56180,date: new Date("2018-09-06T07:33:32.836Z"),array: [],obj: {}},new Date("2018-09-06T13:58:46.976Z"),[],82229,16435],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14376,str: "alliance object-oriented value-added",num: 86076,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14377,str: "Circles Avon",num: 96607,date: new Date("2018-09-05T20:06:24.054Z"),obj: {_id: 14378,str: "product Profound interactive",num: 97660,array: [],obj: {_id: 14379,str: "connecting Object-based Buckinghamshire",date: new Date("2018-09-06T12:17:38.686Z"),array: [new Date("2018-09-06T07:43:52.555Z"),49588,"Executive indexing dynamic",53097,"Steel invoice Intranet",new Date("2018-09-06T14:52:24.372Z"),{_id: 14380,str: "real-time Norway Surinam Dollar",array: [],obj: {_id: 14381,num: 40974,date: new Date("2018-09-05T20:41:03.342Z"),obj: {}}},new Date("2018-09-06T12:18:24.320Z"),27650]}}});
    },

    function(coll) {
        return coll.insert({_id: 14382,num: 51305,date: new Date("2018-09-06T07:42:54.702Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14383,str: "encompassing Awesome Wooden Ball",num: 95148,date: new Date("2018-09-06T06:45:37.563Z"),array: [],obj: {_id: 14384,str: "Soap Cross-platform withdrawal",num: 47740,array: [new Date("2018-09-06T12:34:57.012Z"),16714,new Date("2018-09-06T14:45:18.098Z"),"Cambridgeshire District",62437,"copying users",[]],obj: {_id: 14385,num: 97779,date: new Date("2018-09-05T20:13:23.652Z"),array: [{_id: 14386,str: "Cotton",num: 34119,date: new Date("2018-09-05T21:59:31.874Z"),array: [],obj: {}},[],new Date("2018-09-06T07:41:56.531Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 14387,str: "bypass Savings Account",num: 35077,date: new Date("2018-09-06T12:28:35.475Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14388,str: "Consultant Cliff Bacon",num: 2503,date: new Date("2018-09-06T02:24:27.014Z"),array: [31378,{_id: 14389,str: "Central Refined Frozen Cheese",num: 71091,date: new Date("2018-09-06T13:13:26.549Z"),array: [],obj: {}},"generating visualize bandwidth",new Date("2018-09-06T13:59:16.140Z"),new Date("2018-09-06T01:41:50.280Z"),"Incredible Cotton Iraq","Creative Martinique",[9747,new Date("2018-09-05T23:12:47.324Z"),89053,[[]],{_id: 14390,str: "Soft",num: 49750,date: new Date("2018-09-06T11:44:44.734Z"),obj: {}}],"Cliffs",new Date("2018-09-06T03:28:13.770Z")],obj: {_id: 14391,str: "Avon",num: 73073,array: [],obj: {}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num',74973,{ $divide: ['$obj.num',88323] }],["Fresh"],[],[{ $trim: {input: { $toString: { $arrayToObject: [[]] } },chars: "Inverse Awesome Fresh Shirt e-markets"} },"Buckinghamshire scale",'$obj.obj.obj.str','$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: '$obj.obj.obj.date',timezone: "Pacific/Wake",onNull: '$obj.obj.obj.str'} },"Health",'$str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',2,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "North Dakota magenta",v: false},{k: "dynamic Nuevo Sol",v: { $dateFromParts: {year: { $trunc: '$obj.obj.num' },month: { $size: [['$obj.str']] },hour: { $abs: 29582 },millisecond: 17671} }},{k: "synergy",v: true}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],87828] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[93174,'$num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],[{ $toUpper: { $toUpper: '$str' } },'$obj.obj.obj.str'],['$obj.obj.num',51692,59509]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num',9741],[{ $rtrim: {input: "Mauritius Rupee Grove Clothing",chars: '$str'} },'$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T22:40:33.879Z"),format: "%M-%Z-%z-%w-%Y-%L",timezone: "America/Halifax"} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.str'],["Incredible Granite Fish Integrated"],[75908]],defaults: [{str: "strategize Checking Account",array: [86794,[/Administrator|discrete|Sports|port/,36555]]}]} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $mod: [61541,'$num'] }],as: 'bessie',in: 90203} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],22249] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T19:12:14.901Z"),format: "%G-%U-%w-%H-%d-%Z-%u-%j-%H-%j-%L",timezone: "Europe/Sofia",onNull: '$str'} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "SSL transmitting Quality",chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["engage lime Mouse"],40199] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[15775],['$obj.obj.obj.str'],["extensible","calculating Parkway pixel"],[],[],[66577]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],62760] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $second: { $dateFromString: {dateString: "2018-09-06T03:56:37.708Z",timezone: "Etc/GMT+11",onError: { $week: { $dateFromString: { dateString: "2018-09-06T06:53:21.347Z" } } }} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $toUpper: "Soft Planner" }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $millesecond: { $dateFromParts: {isoWeekYear: 36040,isoDayOfWeek: { $sqrt: 27473 },minute: { $mod: ['$obj.obj.obj.num',17480] },second: { $log: ['$num','$obj.obj.num'] },timezone: "Africa/Tripoli"} } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["transform",'$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfWeek: { $dateFromParts: {isoWeekYear: '$obj.num',isoWeek: { $size: [[{ $toUpper: '$obj.str' },"Synergistic deposit Generic Wooden Chicken",'$obj.obj.str']] },hour: { $exp: 85866 },millisecond: { $ceil: '$obj.num' },timezone: "Africa/Asmara"} } },iso8601: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "open-source Oklahoma programming",v: { $trim: {input: '$str',chars: "generating Practical firmware"} }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transition Industrial Zloty",v: { $dateToParts: { date: { $isoWeek: { $dayOfMonth: { $dayOfWeek: { $second: { $week: { $dateFromString: {dateString: "2018-09-05T22:18:58.219Z",format: "%%-%d-%u-%V-%%-%w-%u",timezone: "Antarctica/McMurdo",onNull: { $substrCP: ['$str',2,14] }} } } } } } } } }},{k: "Associate pixel Credit Card Account",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $minute: { $millesecond: { $month: { $millesecond: { $dateFromString: {dateString: "2018-09-06T00:38:21.860Z",timezone: "Jamaica"} } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateToString: {date: { $month: { $week: { $dayOfMonth: { $dateFromParts: {year: { $ln: 11090 },day: { $indexOfArray: [{ $zip: {inputs: [["bandwidth",'$obj.str'],["support scale platforms"],[84916,'$obj.obj.obj.num'],['$obj.obj.date']],defaults: [[true],{},new Date("2018-09-06T03:49:09.263Z")]} },{ $arrayToObject: [[[53638,'$obj.obj.obj.num'],['$num'],[]]] },6] },second: { $sqrt: 98669 },timezone: "Africa/Timbuktu"} } } } },format: "%Y-%d-%Y-%M-%Z-%j",timezone: "Europe/Simferopol",onNull: { $dateToString: { date: new Date("2018-09-05T22:44:21.345Z") } }} } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num','$obj.num'],cond: { $ne: [{ $dayOfYear: { $isoWeekYear: { $hour: { $second: { $month: { $hour: { $isoWeek: { $minute: { $dateToString: {date: { $year: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T19:26:06.205Z",onNull: { $range: [8,6,12] }} } } },timezone: "Pacific/Rarotonga"} } } } } } } } } },{ $arrayToObject: [[[70858,31077],[{ $ltrim: { input: '$obj.obj.str' } },"Handmade Frozen Chicken archive",{ $dateToString: {date: '$obj.obj.obj.date',format: "%w-%Z-%u-%V-%M-%Y-%u-%w-%Y-%H-%U",timezone: "America/Santarem",onNull: "card hard drive Shoes"} }],[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num',94182,{ $ceil: '$obj.num' }],[],["matrices"],[{ $dateToString: {date: { $isoWeek: { $dateFromParts: {isoWeekYear: 47341,isoDayOfWeek: { $cmp: [{ $zip: {inputs: [['$obj.obj.obj.str','$obj.obj.str'],[]],defaults: [new Date("2018-09-06T02:15:14.471Z")]} },{ $dayOfWeek: { $week: { $isoDayOfWeek: { $hour: { $minute: { $isoWeekYear: { $dateToParts: { date: { $dayOfMonth: { $dateToParts: {date: { $minute: { $dayOfWeek: { $second: { $toDate: { $filter: {input: [],cond: { $ne: [{ $concat: ['$$this',{ $toLower: "portals navigate" }] },{ $arrayToObject: [[{k: "Arkansas Frozen web services",v: new Date("2018-09-06T19:17:40.472Z")},{k: "Bedfordshire Intelligent Metal Tuna",v: { $trim: {input: { $substrCP: ["Integrated expedite",7,13] },chars: '$str'} }}]] }] }} } } } } },iso8601: true} } } } } } } } } } }] },hour: { $ceil: '$obj.num' },second: { $cmp: [{ $toLower: "Automotive hard drive Tasty Steel Gloves" },{ $arrayElemAt: [[],36053] }] },timezone: "America/Glace_Bay"} } },format: "%u-%Z-%G-%%",timezone: "Pacific/Wake"} },'$obj.obj.str'],[{ $trunc: 84802 },'$obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: '$str' } },{ $substrBytes: ["repurpose",18,5] },"Technician"],31841] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $toDate: { $concat: ['$obj.obj.obj.str','$obj.obj.obj.str'] } } }, _id: 0}}],

        [{$project: {a: { $week: { $hour: { $minute: { $second: { $dateToString: {date: new Date("2018-09-06T12:30:58.464Z"),format: "%G-%U-%Z-%m-%V-%S-%Z-%%-%S-%m",onNull: '$obj.str'} } } } } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'dedrick',in: { $multiply: [13348] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Automotive Fantastic Steel Computer brand"],[{ $toString: { $trim: {input: '$obj.str',chars: "Books"} } },'$obj.str'],["District",{ $ltrim: { input: '$obj.obj.str' } }],[],[],[]],useLongestLength: true,defaults: [[28025,58581],/eco\-centric|S(?:eamless|teel)|Liaison|invoice/]} }, _id: 0}}],

        [{$project: {a: { $range: [9,10] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $multiply: [] },isoDayOfWeek: { $exp: '$obj.num' },hour: { $mod: [4765,25018] },timezone: "Etc/Universal"} } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-05T22:13:38.676Z",format: "%S-%Y-%j-%d-%j-%z",timezone: "Canada/Saskatchewan",onError: { $arrayToObject: [[{k: "enhance convergence",v: '$obj.num'},{k: "users override Branding",v: false}]] },onNull: '$obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ["Jordanian Dinar Generic Concrete Fish Auto Loan Account"] },'$obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$str'],[]],useLongestLength: false,defaults: [[{},new Date("2018-09-06T17:56:08.250Z")],/24 hour|invoice|Legacy|Plaza/]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $dateToString: {date: new Date("2018-09-06T14:31:14.785Z"),timezone: "America/Creston"} }],['$str',"Home Loan Account Practical back-end",{ $ltrim: { input: "grow" } },"ADP Movies",'$str','$str'],[{ $dateToString: {date: '$date',timezone: "Hongkong",onNull: { $rtrim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.str'} }} }],['$obj.obj.num','$obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "redefine directional",v: true},{k: "calculating primary",v: "withdrawal"}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToString: {date: new Date("2018-09-05T23:13:29.276Z"),timezone: "Indian/Kerguelen",onNull: { $toUpper: "RAM" }} } }, _id: 0}}],

        [{$project: {a: { $range: [17,20] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[28834],3858] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "optical Texas Officer",v: '$obj.obj.obj.num'},{k: "Borders Fantastic Honduras",v: new Date("2018-09-06T15:45:19.267Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Refined back up Handmade",v: "Consultant forecast"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Pizza Central",v: '$obj.num'},{k: "incentivize Consultant",v: "Guarani gold initiatives"},{k: "synergies Officer quantify",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["e-enable",18,11] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.str'],[]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "frame",chars: { $rtrim: { input: { $trim: {input: '$obj.obj.str',chars: '$str'} } } }} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.str',chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $minute: { $week: { $dayOfMonth: { $dayOfWeek: { $toDate: { $arrayElemAt: [[],60418] } } } } } } }, _id: 0}}],

        [{$project: {a: { $year: { $millesecond: { $hour: { $dateToParts: {date: { $year: { $dayOfYear: { $minute: { $second: { $isoWeekYear: { $dayOfMonth: '$obj.obj.date' } } } } } },timezone: "Europe/Skopje",iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $toString: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.obj.num'] } }],[65997,73892]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',1,10] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[91578,53356]] }, _id: 0}}],

        [{$project: {a: { $range: [15,17,16] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substr: [{ $dateToString: {date: { $second: { $dayOfYear: { $isoDayOfWeek: { $hour: { $dayOfMonth: new Date("2018-09-06T01:45:36.460Z") } } } } },format: "%M-%V-%G-%L-%d",timezone: "Europe/Monaco",onNull: { $substrBytes: ['$obj.obj.obj.str',1,2] }} },2,2] }],as: 'stephania',cond: { $lt: [{ $range: [18,4] },{ $arrayToObject: [[[14014],[89659],[],[new Date("2018-09-06T01:17:34.229Z")]]] }] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[18208],['$obj.num','$num',94431,{ $size: [[{ $toLower: "virtual Practical Metal Soap Hat" }]] }]] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $rtrim: {input: "Grove",chars: { $trim: { input: "Data" } }} },'$obj.obj.str'],[53646,{ $log: [60506,'$obj.num'] },30023]]] }, _id: 0}}],

        [{$project: {a: { $week: { $millesecond: { $month: { $dateToString: {date: { $toDate: { $range: [2,7] } },format: "%u-%L-%m-%z",timezone: "America/Grand_Turk"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $minute: { $toDate: { $toString: { $zip: {inputs: [[],[51308],[]],useLongestLength: false} } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: 25137} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[23775],[],[],['$obj.num'],["Mouse invoice"],['$obj.obj.obj.str','$obj.str','$obj.obj.str'],["Investment Account Executive Towels"]]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T01:39:22.973Z",format: "%V-%d-%G-%G-%Z-%m-%M-%d-%M-%%",timezone: "Asia/Yangon"} } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [82488,'$obj.obj.num',53065],as: 'shanny',cond: { $eq: [{ $arrayToObject: [[['$$shanny'],[{ $substr: [{ $dateToString: {date: { $second: { $dateToString: {date: new Date("2018-09-06T12:20:48.113Z"),timezone: "America/Fortaleza",onNull: '$$shanny'} } },format: "%U-%U-%m-%Z-%Z-%V-%%"} },13,7] }],[],['$$shanny']]] },{ $filter: {input: [],cond: { $and: [{ $sqrt: 16056 },{ $toString: { $toUpper: "Small Plastic Bacon encoding" } },false] }} }] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T20:23:51.221Z",timezone: "America/Resolute",onError: { $arrayElemAt: [['$obj.obj.str'],'$obj.obj.obj.num'] },onNull: { $substrBytes: ['$obj.str',5,15] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: '$obj.obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Markets Multi-lateral Computer",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str','$obj.obj.str'],as: 'margarette',in: { $sqrt: 51602 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[40725],57906] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["solid state",19,17] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["gold",{ $concat: [] }],['$num'],[8283,35229,'$num'],['$obj.obj.str',{ $ltrim: { input: "Future Future Direct" } }]] }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],["Garden Agent Yen",{ $toUpper: "empower" },'$str'],['$obj.obj.str'],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["bi-directional program HDD"],['$obj.obj.str',{ $trim: {input: "engage infomediaries auxiliary",chars: '$obj.obj.obj.str'} }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "backing up Frozen pixel",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',18,1] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',74151],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $toDate: { $objectToArray: '$obj.obj.obj' } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toString: { $map: {input: ["content red",{ $concat: [{ $rtrim: {input: '$str',chars: "iterate pixel"} }] }],as: 'emmanuelle',in: { $mod: ['$obj.obj.num',81841] }} } },13,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $toString: { $arrayToObject: [[{k: "Avon",v: '$obj.obj.num'},{k: "Accounts leverage primary",v: true},{k: "content",v: '$obj.obj.str'}]] } }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T10:48:00.725Z") } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Associate portals",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Mandatory copying Tonga",v: new Date("2018-09-06T02:21:59.320Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',{ $toLower: "Usability" }],[]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[13353],[],[],[38805,'$obj.obj.num',{ $sqrt: '$obj.obj.num' }],["open system deposit",{ $trim: {input: '$obj.obj.obj.str',chars: { $concat: ['$obj.obj.str'] }} }]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $minute: { $minute: { $dateToString: {date: { $millesecond: { $dayOfWeek: { $toDate: { $filter: {input: [],cond: { $eq: [{ $ltrim: { input: "Kyrgyz Republic Texas Leone" } },{ $arrayElemAt: [[32875],39058] }] }} } } } },timezone: "Pacific/Guadalcanal"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Investment Account",v: new Date("2018-09-06T15:30:20.389Z")},{k: "secured line innovative",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num','$num','$num'],["efficient Salad exploit",'$obj.obj.obj.str',{ $toLower: "blue Granite National" }],[],[true,{ $dayOfWeek: { $month: { $dateFromParts: {year: 26760,day: { $cmp: [{ $range: [3,7] },{ $isoDayOfWeek: { $week: { $isoWeek: { $millesecond: { $year: { $dateToString: {date: '$date',timezone: "America/Santarem"} } } } } } }] },hour: { $indexOfArray: [{ $zip: {inputs: [["Concrete",{ $ltrim: { input: { $trim: { input: { $dateToString: {date: new Date("2018-09-06T09:58:33.287Z"),format: "%u-%L-%S-%Z-%H-%m-%Z-%u-%U",onNull: { $toString: { $arrayToObject: [[{k: "bypassing Expressway",v: '$obj.obj.str'}]] } }} } } } } },'$obj.str']],defaults: []} },{ $concatArrays: [[],[{ $rtrim: {input: { $toString: { $week: { $year: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T19:54:33.829Z",format: "%m-%Z-%w-%G-%%-%u-%M",timezone: "Asia/Pontianak"} } } } } },chars: { $trim: {input: '$str',chars: '$obj.obj.str'} }} }]] },11] },minute: { $add: [18398] }} } } }]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Montserrat",15,2] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["Investor"]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dayOfMonth: { $week: { $isoWeek: { $dayOfWeek: { $week: { $month: { $isoWeekYear: { $isoWeek: { $year: { $second: { $dayOfWeek: { $dateFromParts: {year: { $subtract: ['$obj.num','$obj.obj.num'] },day: { $mod: ['$obj.obj.num',23922] },hour: { $log10: 63276 },millisecond: 29626,timezone: "Asia/Jakarta"} } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $toDate: { $range: [0,19] } } }, _id: 0}}],

        [{$project: {a: { $range: [12,3] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'michael',in: { $floor: 11434 }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Syrian Pound Computers Garden",{ $toUpper: '$obj.str' }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],75682] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.num','$obj.obj.num'],["open-source",'$obj.str',{ $concat: [{ $dateToString: {date: '$date',timezone: "Africa/Johannesburg",onNull: "array azure visualize"} }] },"program neutral Cotton","Investor invoice"]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $size: [["Spurs"]] }} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $rtrim: {input: '$obj.str',chars: "program Object-based"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',47794],12463] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dateFromString: {dateString: "2018-09-06T07:53:05.649Z",onError: { $arrayToObject: [[['$num','$num',70329],[81527,'$obj.obj.obj.num'],['$obj.obj.obj.str']]] }} } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateFromParts: {year: { $log10: 50002 },day: { $abs: '$obj.num' },second: { $exp: '$obj.obj.obj.num' },millisecond: { $exp: 92430 },timezone: "America/Argentina/Rio_Gallegos"} } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substrBytes: ['$str',2,6] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[70543,'$obj.num'],20391] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toUpper: '$obj.str' } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ln: '$num' },{ $log10: '$obj.obj.num' }],1923] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],62628] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $concat: ["Cross-platform"] },7,13] }, _id: 0}}],

        [{$project: {a: { $substr: ["Cayman Islands Response disintermediate",1,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $log10: '$obj.obj.obj.num' },65994],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ['$obj.str',9,3] }],[]]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [["synthesizing Viaduct"],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],7107] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[42172],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],[],[],["Awesome Plastic Shirt world-class",{ $toLower: { $ltrim: { input: "Avon definition" } } },"syndicate Beauty hardware",{ $toUpper: { $substr: ['$obj.str',6,8] } }]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [74260,10853,'$obj.obj.obj.num','$obj.obj.obj.num'],as: 'adalberto',cond: { $gte: [{ $rtrim: {input: { $substrBytes: [{ $ltrim: { input: "Wooden" } },13,16] },chars: '$$adalberto'} },{ $zip: { inputs: [[{ $trim: { input: '$obj.str' } },"Persevering Central"],[],[],[]] } }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.str'],as: 'miller',in: { $size: [[15771]] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [79520,'$obj.obj.obj.num'],as: 'ubaldo',in: { $log: [61218,'$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $rtrim: {input: "Texas South Carolina",chars: '$obj.str'} } }, _id: 0}}],

        [{$project: {a: { $concat: ["Rustic Concrete Fish Self-enabling"] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $divide: [96285,'$obj.obj.obj.num'] },day: { $indexOfArray: [{ $range: [16,20] },{ $arrayToObject: [[{k: "web-enabled Rubber Holy See (Vatican City State)",v: true}]] },15] },second: { $ceil: { $log: ['$obj.num',67537] } },millisecond: { $floor: '$obj.num' },timezone: "Asia/Thimphu"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ['$str',{ $substrCP: ['$obj.obj.obj.str',18,7] },'$obj.str'] },"sexy"],[],[],["Product Handcrafted Avon"]]] }, _id: 0}}],

        [{$project: {a: { $year: { $millesecond: { $minute: { $dateToString: {date: { $isoWeek: { $dayOfWeek: { $hour: { $toDate: { $arrayElemAt: [['$obj.num'],45456] } } } } },onNull: { $arrayElemAt: [["magenta Cotton"],42153] }} } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrCP: ['$obj.obj.str',0,19] }],cond: { $gt: [{ $reverseArray: [['$$this',"Frozen",{ $rtrim: {input: '$$this',chars: "Home Loan Account"} }]] },{ $rtrim: { input: "Home Loan Account Garden SCSI" } }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $toDate: { $substrBytes: ["Buckinghamshire Licensed Berkshire",1,19] } },onNull: { $filter: {input: [98745,true,'$date'],cond: { $gt: [{ $week: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [[52913],'$obj.obj.obj.num'] },{ $map: {input: ["Officer granular Valleys"],in: { $subtract: ['$$this',57044] }} }] },timezone: "America/Nassau"} } },{ $arrayElemAt: [['$obj.str',{ $substrBytes: [{ $toLower: { $toUpper: '$str' } },2,20] }],'$$this'] }] }} }} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T07:23:54.297Z",timezone: "Australia/Eucla",onError: { $toString: { $arrayToObject: [[[]]] } }} }, _id: 0}}],

        [{$project: {a: { $toString: { $week: { $minute: { $month: { $dateFromString: {dateString: "2018-09-06T13:42:41.530Z",timezone: "Africa/Bangui",onError: { $arrayElemAt: [[{ $toLower: { $substr: ['$obj.obj.obj.str',16,2] } }],'$obj.obj.num'] }} } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: "Solutions Unbranded" }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'leone',cond: { $eq: [{ $arrayElemAt: [["payment Iowa"],'$obj.num'] },{ $map: {input: ["capacitor"],as: 'alexys',in: { $log: ['$$alexys',96720] }} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["quantify virtual"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toLower: "Books Investment Account Gorgeous" } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $hour: { $dateFromParts: {isoWeekYear: { $divide: ['$obj.num',32820] },minute: { $floor: 96853 },second: { $floor: '$obj.num' },millisecond: { $divide: [23727,'$obj.obj.obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],57478] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T01:28:29.457Z",timezone: "Europe/Astrakhan",onError: { $arrayElemAt: [[94412,'$num'],61340] },onNull: { $rtrim: { input: "hack" } }} },timezone: "America/Matamoros",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $ltrim: { input: '$obj.str' } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Ergonomic Cotton Pizza",v: { $dayOfWeek: { $dayOfYear: { $dateToString: {date: new Date("2018-09-05T23:36:05.944Z"),format: "%M-%L-%V-%G-%U-%M-%z-%z-%G-%G",timezone: "Europe/Kiev"} } } }},{k: "Books quantify Fords",v: true},{k: "Colorado",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [['$obj.obj.str'],'$num'] } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $second: { $dateFromString: {dateString: "2018-09-06T19:27:37.220Z",format: "%%-%Y-%S-%Y-%Y-%m-%V-%%-%u-%H",timezone: "Indian/Mauritius",onError: { $map: {input: [{ $ltrim: { input: '$obj.obj.obj.str' } }],in: '$num'} }} } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: false,defaults: [{ num: 6753 },true,new Date("2018-09-06T12:13:46.563Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Aruba schemas Direct",v: '$num'},{k: "blue Pants bus",v: '$num'},{k: "card Investment Account Drive",v: 65819}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[22147,'$obj.obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toUpper: { $substrBytes: [{ $ltrim: { input: { $concat: ['$obj.obj.str'] } } },2,20] } },19,17] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $substrCP: ["black calculate",13,18] },'$obj.str']] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Legacy",11,1] }, _id: 0}}],

        [{$project: {a: { $range: [2,19] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'alene',in: { $floor: 6504 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Viaduct North Korean Won"],87606] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],69090] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toString: { $map: {input: [22835],as: 'brooklyn',in: { $indexOfArray: [{ $zip: {inputs: [[],[],['$$brooklyn']],useLongestLength: true,defaults: [false,/Home Loan Account|Paradigm|Ecuador|Niger/]} },{ $arrayElemAt: [[],'$$brooklyn'] },6] }} } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T16:20:32.815Z",timezone: "ROC"} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'elliott',cond: { $isArray: [{ $isoDayOfWeek: { $minute: { $dateFromParts: {year: '$obj.obj.num',day: { $subtract: ['$$elliott',9311] },hour: { $divide: ['$obj.num',30622] },second: { $add: [] },timezone: "America/Resolute"} } } }] }} }, _id: 0}}],

        [{$project: {a: { $toString: { $month: { $week: { $year: { $isoWeekYear: { $dateToString: {date: { $hour: { $dateFromString: {dateString: "2018-09-06T13:23:17.452Z",timezone: "Africa/Kinshasa",onNull: { $toLower: '$obj.obj.obj.str' }} } },onNull: { $arrayToObject: [[[],["redundant drive reboot"],[],[37406,8250]]] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T07:25:38.250Z",format: "%%-%S-%U-%j-%d-%S-%w-%H-%j-%j",timezone: "America/Coral_Harbour"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],['$obj.num'],[],[],["backing up Liberian Dollar","Plastic Cambridgeshire open-source"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: '$str' } }],{ $ln: 10325 }] }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $dayOfWeek: { $second: { $dateFromString: {dateString: "2018-09-06T08:09:50.871Z",format: "%S-%u-%L-%z-%L-%H-%H-%j-%w",timezone: "Etc/GMT+10",onError: { $arrayToObject: [[{k: "bluetooth Chief Ergonomic",v: { $month: { $hour: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T06:50:18.305Z",timezone: "Africa/Windhoek",onNull: { $reverseArray: [["Markets quantify Home Loan Account","Devolved",'$obj.str']] }} } } } }},{k: "asynchronous",v: { $toLower: "Accounts" }}]] },onNull: '$obj.obj.obj.str'} } } } } }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: { $toString: { $dayOfWeek: { $week: { $isoWeek: { $toDate: { $arrayElemAt: [[45282,44202],'$num'] } } } } } }} }, _id: 0}}],

        [{$project: {a: { $month: { $dateToParts: {date: { $isoWeekYear: { $isoWeekYear: { $isoDayOfWeek: { $dateToParts: {date: { $minute: { $millesecond: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T02:33:11.183Z",onError: { $filter: {input: ['$str',"Turks and Caicos Islands COM",'$obj.obj.str'],as: 'joy',cond: { $isArray: [{ $arrayToObject: [[{k: "virtual firewall",v: 96284}]] }] }} }} } } } },timezone: "America/Noronha",iso8601: false} } } } },timezone: "Africa/Kigali",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $isoWeekYear: { $dateFromParts: {year: { $log: [21200,'$num'] },month: { $exp: '$obj.obj.obj.num' },day: { $exp: 73436 },minute: 65510,second: { $indexOfArray: [{ $map: {input: ["Granite",{ $rtrim: {input: "Generic Colorado transmitter",chars: '$obj.obj.str'} }],as: 'morgan',in: { $size: [['$obj.str','$obj.obj.obj.str',{ $toUpper: '$obj.obj.obj.str' }]] }} },{ $arrayElemAt: [['$obj.num'],{ $multiply: [] }] }] },timezone: "Asia/Baghdad"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "artificial intelligence",v: { $toUpper: { $rtrim: { input: "Bedfordshire cyan Public-key" } } }},{k: "Front-line",v: true},{k: "Internal Money Market Account",v: 87775}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "European Unit of Account 9(E.U.A.-9) Borders",v: "Investment Account"},{k: "West Virginia local area network",v: true},{k: "Singapore Dollar",v: { $isoWeekYear: { $dayOfWeek: { $dateToString: { date: new Date("2018-09-06T09:04:02.363Z") } } } }}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $second: { $dayOfMonth: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T12:27:20.219Z",timezone: "EET",onNull: { $arrayToObject: [[]] }} } } } },format: "%u-%w-%G-%G-%m-%z-%%-%S-%u",onNull: "Wooden generate connect"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T07:26:54.352Z"),timezone: "Asia/Novosibirsk"} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num',1800,'$num'],as: 'esteban',cond: { $gte: [{ $arrayElemAt: [["Checking Account AI",'$$esteban'],8153] },{ $concatArrays: [[{ $toLower: { $rtrim: { input: { $toString: { $arrayToObject: [[['$$esteban'],[true,new Date("2018-09-06T03:20:44.532Z")]]] } } } } }],[],["deposit Small Granite Car withdrawal",{ $ltrim: {input: "Unbranded Granite Ball Chief EXE",chars: '$$esteban'} },'$$esteban',"National full-range"],['$$esteban']] }] }} }, _id: 0}}],

        [{$project: {a: { $substr: [{ $dateToString: { date: '$obj.obj.date' } },3,5] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',8,12] }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfMonth: { $second: { $dayOfWeek: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T10:23:02.845Z",format: "%z-%u-%S-%w-%G-%u-%Z-%H-%u-%z",onError: { $arrayToObject: [[{k: "Checking Account",v: true},{k: "Borders array Supervisor",v: '$obj.date'}]] },onNull: { $concat: [{ $substrCP: [{ $trim: {input: '$str',chars: "optical Frozen"} },13,1] }] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],74548] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'kenyatta',in: { $multiply: [50457] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',"Aruban Guilder Tasty Soft Chair"],["Kids connecting",{ $concat: [] }],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Kansas initiatives",{ $concat: ['$str',"Tennessee"] },'$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num',19470],as: 'chris',cond: { $not: [{ $arrayToObject: [[{k: "web-enabled protocol",v: '$date'},{k: "pixel",v: '$$chris'}]] }] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',11,11] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: { $substr: ["Exclusive bypass",10,0] } },"Borders Strategist Incredible"],[],['$obj.obj.obj.str',"deposit Integration"],['$obj.obj.obj.str',true],[{ $dateToString: {date: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $objectToArray: '$obj.obj' },{ $dayOfMonth: { $dayOfMonth: { $month: { $week: new Date("2018-09-06T00:16:34.410Z") } } } },6] },isoWeek: { $abs: 44427 },millisecond: { $subtract: ['$obj.obj.obj.num','$obj.obj.obj.num'] }} },format: "%S-%m-%m-%V-%j-%M-%u",timezone: "America/Argentina/San_Luis"} }],["Bermuda e-services","Handmade payment",'$obj.obj.str',{ $ltrim: { input: { $concat: [] } } }]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

];

const optimizationFailPointList = [

    'disableMatchExpressionOptimization',

    'disablePipelineOptimization',

];

const diffTestingMode = 'version';

// Set up a standalone mongod of a given version.
function startMongod({version: version = 'latest'} = {}) {
    let conn = MongoRunner.runMongod({binVersion: version});
    if (!conn) {
        throw new Error('Failed to start mongod with binVersion=' + version);
    }
    return conn;
}

function disableOptimizationFailPoints(node) {
    for (let fp of optimizationFailPointList) {
        assert.commandWorked(node.adminCommand({
            configureFailPoint: fp,
            mode: 'alwaysOn',
        }));
    }

    return node;
}

function setup() {
    // The experiment server is always using the latest version with default options.
    const mongoServerExperiment = startMongod();
    // The control server is the one the experiment servers compares against.
    const mongoServerControl = (() => {
        switch (diffTestingMode) {
        case 'version':
            return startMongod({version: 'last-stable'});
        case 'optimization':
            return disableOptimizationFailPoints(startMongod());
        default:
            throw new Error('Unknown fuzzer mode: ' + diffTestingMode);
        }
    })();

    const dbv1 = mongoServerExperiment.getDB('fuzzer');
    const dbv2 = mongoServerControl.getDB('fuzzer');

    return {servers: [mongoServerExperiment, mongoServerControl], dbs: [dbv1, dbv2]};
}

function tearDown(mongoServers) {
    jsTest.log('Done, stopping mongo server instances');
    mongoServers.forEach(function(mongoServer) {
        MongoRunner.stopMongod(mongoServer);
    });
}

function actOnAllCollections(dbs, colls, action) {
    dbs.forEach(function(db) {
        colls.forEach(function(coll) {
            action(db[coll]);
        });
    });
}

function dropCollections(dbs, colls) {
    actOnAllCollections(dbs, colls, (coll) => coll.drop());
}

function insertTestData(dbs, collections, inserts) {
    dropCollections(dbs, collections);

    actOnAllCollections(dbs, collections, (coll) => {
        const bulk = coll.initializeUnorderedBulkOp();
        for (let insert of inserts) {
            insert(bulk);
        }
        assert.writeOK(bulk.execute());
    });
}

function createIndexes(dbs, collections, indexes) {
    actOnAllCollections(dbs, collections, (coll) => {
        for (let index of indexes) {
            const res = index(coll);
            assert.commandWorked(res);
            assert.eq(res.numIndexesAfter, res.numIndexesBefore + 1);
        }
    });
}

function runAndCatchErrors(fn, errorMessages) {
    try {
        return fn();
    } catch (err) {
        errorMessages.push(err.message);
    }
}

function assertErrorMessagesMatch(errorMessages, dbs, aggregation) {
    if (errorMessages.length > 0) {
        for (let i = 0; i < errorMessages.length; i += 2) {

            try {
                assert.eq(errorMessages[i], errorMessages[i + 1]);
            } catch (err) {
                if (!blacklistAssertion(dbs, aggregation, errorMessages.slice(i, i + 1))) {
                    throw err;
                }
                print('blacklisting known difference');
            }
        }
        return true;
    }

    return false;
}

function compareAggregationResult(v1, v2, errorMessages, stats, dbs, aggregation) {
    assertErrorMessagesMatch(errorMessages, dbs, aggregation);

    let valid = errorMessages.length <= 0;
    errorMessages = [];
    let length = 0;

    /* eslint no-unmodified-loop-condition: 0 */
    while (valid) {
        runAndCatchErrors(() => v1.hasNext(), errorMessages);
        runAndCatchErrors(() => v2.hasNext(), errorMessages);

        if (assertErrorMessagesMatch(errorMessages, dbs, aggregation)) {
            break;
        }

        if (!v1.hasNext() && !v2.hasNext()) {
            break;
        }
        assert(v1.hasNext() && v2.hasNext());

        const res1 = v1.next();
        const res2 = v2.next();
        ++length;

        try {
            assert(bsonBinaryEqual(res1, res2));
        } catch (err) {
            if (!blacklistAssertion(dbs, aggregation, null, [res1, res2])) {
                throw err;
            }
            print('blacklisting known difference');
        }
    }

    if (valid) {
        if (length === 0) {
            ++stats.zeroLength;
        } else {
            ++stats.withResults;
            if (!stats.resultCounts[length]) {
                stats.resultCounts[length] = 0;
            }
            ++stats.resultCounts[length];
        }
    } else {
        ++stats.invalid;
    }

    return length;
}

function runAggregation(dbs, aggregation, stats) {
    let errorMessages = [];

    const v1 = runAndCatchErrors(() => dbs[0].fuzzer_coll.aggregate(aggregation), errorMessages);
    const v2 = runAndCatchErrors(() => dbs[1].fuzzer_coll.aggregate(aggregation), errorMessages);

    return compareAggregationResult(v1, v2, errorMessages, stats, dbs, aggregation);
}

function runAggregations(dbs, aggregations) {
    let stats = {
        invalid: 0,
        withResults: 0,
        resultCounts: {},
        zeroLength: 0,
    };

    for (let i = 0; i < aggregations.length; i++) {
        print('*********************************');
        print('Aggregation: ' + i);

        print('*********************************');

        const length = runAggregation(dbs, aggregations[i], stats);
        print('Length of output result from aggregation: ' + length);
    }

    print('\nRun complete, stats=' + tojson(stats));
}

function main() {
    const runData = setup();
    insertTestData(runData.dbs, collectionNames, insertList);
    createIndexes(runData.dbs, collectionNames, indexList);

    runAggregations(runData.dbs, aggregationList);

    tearDown(runData.servers);
}

if (typeof underTest === 'undefined') {
    main();
}
