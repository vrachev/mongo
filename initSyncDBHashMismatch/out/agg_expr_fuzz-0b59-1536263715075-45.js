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
        return coll.insert({_id: 28178,str: "multi-state aggregate payment",num: 24909,date: new Date("2018-09-05T22:58:39.991Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28179,str: "compelling TCP",date: new Date("2018-09-06T14:42:21.779Z"),array: ["microchip","Ergonomic parsing",new Date("2018-09-06T04:53:53.529Z"),new Date("2018-09-06T15:21:18.093Z"),49290,[],13153,47924,[],{_id: 28180,str: "Tunnel RSS",num: 81317,date: new Date("2018-09-06T00:47:57.969Z"),array: [],obj: {}}],obj: {_id: 28181,str: "pixel users Industrial",num: 94452,date: new Date("2018-09-06T03:04:56.578Z"),array: [new Date("2018-09-06T17:19:18.555Z"),new Date("2018-09-05T23:53:31.232Z"),["Dynamic leverage intermediate",50906,"3rd generation"],"Credit Card Account Oklahoma"],obj: {_id: 28182,str: "Music connect",num: 65567,date: new Date("2018-09-06T10:18:37.171Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 28183,str: "deposit Locks SCSI",num: 50570,date: new Date("2018-09-06T01:41:03.183Z"),array: [],obj: {_id: 28184,str: "driver Borders",num: 19521,array: [],obj: {_id: 28185,str: "Small",num: 6174,date: new Date("2018-09-06T00:00:19.738Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 28186,str: "platforms Profound Canyon",num: 4884,date: new Date("2018-09-06T15:03:04.380Z"),array: [],obj: {_id: 28187,str: "Personal Loan Account",num: 99593}});
    },

    function(coll) {
        return coll.insert({_id: 28188,str: "Metal",num: 35950,date: new Date("2018-09-05T20:22:08.688Z"),array: [[],"North Dakota",new Date("2018-09-06T10:59:55.931Z"),47657,"lime teal Jordan",18851,new Date("2018-09-06T13:02:48.750Z"),{_id: 28189,str: "well-modulated",date: new Date("2018-09-06T12:40:18.348Z"),array: [],obj: {_id: 28190,str: "Sleek payment Technician",date: new Date("2018-09-06T09:32:07.060Z"),obj: {}}},{_id: 28191,str: "blue navigate Markets",num: 65528,date: new Date("2018-09-06T01:14:23.085Z"),array: [{_id: 28192,num: 51445,array: ["Fantastic paradigm"]},"schemas connect Auto Loan Account",new Date("2018-09-06T14:21:43.372Z"),new Date("2018-09-06T09:39:16.354Z")],obj: { _id: 28193 }},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28194,str: "Sausages Assurance",num: 33894,date: new Date("2018-09-06T16:59:05.470Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28195,array: [],obj: {_id: 28196,str: "Beauty",num: 40111,array: [{_id: 28197,str: "Handcrafted Granite Pants virtual Switzerland",num: 19820,date: new Date("2018-09-06T07:53:05.342Z"),array: [],obj: {}},[],92137,"Open-source District","Maryland",[new Date("2018-09-06T15:47:01.103Z")],new Date("2018-09-06T07:47:54.291Z"),new Date("2018-09-06T14:11:34.279Z"),96328,"open-source",{_id: 28198,str: "Planner Orchestrator",num: 54776,date: new Date("2018-09-06T05:35:36.405Z"),obj: {_id: 28199,num: 52171,date: new Date("2018-09-06T03:16:33.858Z")}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28200,str: "solution-oriented Virgin Islands, British Fantastic",date: new Date("2018-09-06T11:28:38.505Z"),array: [],obj: {_id: 28201,str: "cross-platform Sharable Rubber",num: 67655,date: new Date("2018-09-06T14:16:03.005Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28202,str: "Functionality synthesizing open architecture",num: 85558,date: new Date("2018-09-06T00:12:07.356Z"),array: [43797,"web services Agent Home",new Date("2018-09-06T00:46:03.968Z"),"Officer Principal Awesome",52891,"out-of-the-box Cliff Towels",[],53313,[],new Date("2018-09-06T04:18:51.561Z"),new Date("2018-09-06T04:07:21.431Z"),"value-added Toys Keyboard"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28203,str: "Russian Ruble yellow",date: new Date("2018-09-06T17:27:31.910Z"),array: [],obj: {_id: 28204,str: "monetize Reactive",num: 63821,date: new Date("2018-09-06T17:41:48.742Z"),array: ["Auto Loan Account",{_id: 28205,num: 81272,date: new Date("2018-09-06T13:38:34.929Z"),array: [new Date("2018-09-06T05:15:34.829Z"),93252,83845]},"Industrial","Chile",new Date("2018-09-05T22:23:37.563Z"),new Date("2018-09-06T13:23:33.047Z"),{_id: 28206,str: "lavender",num: 37788,obj: {_id: 28207,num: 97583,array: [],obj: {}}},32575,"Cotton Grocery zero administration",[],79830,new Date("2018-09-06T19:33:49.423Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28208,str: "Corner neural Usability",array: ["Handcrafted Fresh Fish Sleek Cotton Pants Developer","yellow Avon",new Date("2018-09-06T17:12:20.321Z"),{_id: 28209,num: 43488,date: new Date("2018-09-06T08:38:41.369Z"),array: [],obj: {}},51758,87788,new Date("2018-09-06T02:47:31.631Z"),34314,[41210],new Date("2018-09-06T00:39:12.781Z"),"migration",{_id: 28210,str: "Operations",num: 13924,array: []},new Date("2018-09-06T18:36:49.244Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28211,str: "toolset Centers",num: 21479,date: new Date("2018-09-06T00:29:38.806Z"),array: ["Credit Card Account Marketing",71809,new Date("2018-09-06T10:01:06.311Z"),94612,38390,30448,"indigo"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28212,str: "ubiquitous",num: 52144,date: new Date("2018-09-06T14:48:48.840Z"),array: [new Date("2018-09-06T11:53:40.113Z"),"San Marino impactful",46437,"China Handmade","bypassing",[new Date("2018-09-06T05:45:17.566Z")],42300,new Date("2018-09-06T09:40:45.542Z"),23103,{_id: 28213,str: "Buckinghamshire Dynamic calculate",num: 40870,array: [],obj: {}},[[],new Date("2018-09-06T01:25:19.846Z")],{_id: 28214,str: "infrastructure",num: 37493,date: new Date("2018-09-06T02:03:38.735Z"),array: []},[]]});
    },

    function(coll) {
        return coll.insert({_id: 28215,str: "Sudanese Pound Table SSL",num: 62956,date: new Date("2018-09-06T01:01:21.426Z"),array: [],obj: {_id: 28216,str: "24/7",num: 1505,date: new Date("2018-09-06T07:08:58.465Z"),array: [25697,14819,"generate matrix transition",new Date("2018-09-06T17:14:06.570Z"),"Representative exploit",new Date("2018-09-06T12:33:53.940Z"),{_id: 28217,str: "content",date: new Date("2018-09-06T08:18:00.446Z"),array: [],obj: {_id: 28218,str: "back-end optical",num: 26573,array: [],obj: {_id: 28219,date: new Date("2018-09-06T19:55:24.054Z"),obj: {}}}},{_id: 28220,num: 6035,array: [new Date("2018-09-05T20:13:33.134Z"),22953,new Date("2018-09-06T15:49:13.502Z"),58020,"static backing up hierarchy",77876]},[[new Date("2018-09-06T07:54:28.132Z")]],39696]}});
    },

    function(coll) {
        return coll.insert({_id: 28221,str: "blue Home Loan Account Lock",num: 53143,date: new Date("2018-09-06T06:36:49.452Z"),array: [new Date("2018-09-06T17:09:35.795Z"),"partnerships hacking Auto Loan Account","violet","interface New Israeli Sheqel",55313,new Date("2018-09-06T01:52:09.235Z"),10558,{_id: 28222,str: "Refined Metal Shirt Intranet Fresh",num: 35722,date: new Date("2018-09-05T22:08:01.830Z"),array: [{_id: 28223,str: "Health HTTP lime",date: new Date("2018-09-06T07:05:19.597Z"),array: [],obj: {}},31143],obj: {}},67927,[],new Date("2018-09-06T01:17:19.996Z"),new Date("2018-09-05T20:45:06.857Z"),"Solutions Refined"]});
    },

    function(coll) {
        return coll.insert({_id: 28224,str: "web-readiness",num: 80901,date: new Date("2018-09-06T01:51:01.141Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28225,str: "Congolese Franc Shore Fully-configurable",num: 59863,date: new Date("2018-09-05T19:57:22.643Z"),array: ["Spring Direct",8707,new Date("2018-09-05T20:56:00.762Z"),{_id: 28226,num: 92596,date: new Date("2018-09-06T00:26:06.647Z"),array: []},"executive magenta",new Date("2018-09-06T08:08:14.823Z"),20573,75706,[],new Date("2018-09-06T06:23:24.565Z"),"Drive Hawaii functionalities",{_id: 28227,str: "Pizza Kansas benchmark",num: 57199,date: new Date("2018-09-06T04:24:32.079Z"),array: [],obj: {_id: 28228,str: "protocol generating Fantastic Metal Towels",obj: {}}},new Date("2018-09-06T18:33:28.237Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28229,str: "multi-state",num: 81205,date: new Date("2018-09-05T21:29:14.940Z"),array: [new Date("2018-09-05T23:43:57.394Z"),"calculating",{_id: 28230,str: "systematic",num: 8549,date: new Date("2018-09-06T13:27:52.047Z"),obj: {_id: 28231,str: "Shoes",array: [22656,"Berkshire plug-and-play",new Date("2018-09-05T20:50:37.229Z")],obj: {}}},"portal Licensed Metal Tuna Balanced","Keyboard",new Date("2018-09-06T11:44:42.551Z"),99771,new Date("2018-09-05T19:57:16.529Z"),65514,[new Date("2018-09-06T18:18:02.138Z")],92847,94182,[]]});
    },

    function(coll) {
        return coll.insert({_id: 28232,str: "withdrawal",num: 49297,date: new Date("2018-09-06T14:08:57.555Z"),array: [[],67004,77648,"Berkshire",new Date("2018-09-06T15:11:34.689Z"),{_id: 28233,str: "Norfolk Island sticky PNG",num: 9936,date: new Date("2018-09-06T16:04:28.347Z"),array: [],obj: {}},new Date("2018-09-06T16:08:39.006Z"),"Focused"],obj: {_id: 28234,str: "Computers Mayotte Direct",num: 564,date: new Date("2018-09-05T20:08:37.280Z"),array: [31656]}});
    },

    function(coll) {
        return coll.insert({_id: 28235,str: "JSON Coordinator",num: 90995,date: new Date("2018-09-06T02:56:16.366Z"),array: [],obj: {_id: 28236,str: "application",num: 55812,array: [{_id: 28237,str: "wireless envisioneer multi-byte",num: 79802,date: new Date("2018-09-06T00:41:22.948Z")},new Date("2018-09-06T16:14:40.213Z"),60416,12906,["Concrete evolve","Rubber",new Date("2018-09-06T15:34:22.297Z")],"microchip Savings Account reboot",new Date("2018-09-06T01:16:17.692Z"),96043,"invoice",{_id: 28238,str: "Checking Account",num: 88931,date: new Date("2018-09-06T17:10:36.813Z"),array: []},76525],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28239,str: "Coordinator",num: 56750,array: [97881,{_id: 28240,num: 42261,date: new Date("2018-09-06T16:53:17.991Z"),array: [],obj: {_id: 28241,str: "models",date: new Date("2018-09-06T04:52:53.397Z"),array: [],obj: {}}},new Date("2018-09-06T02:11:23.651Z"),new Date("2018-09-06T07:29:57.786Z"),"extranet redefine Principal",new Date("2018-09-06T04:05:30.779Z"),[37754,[],62631,"groupware vortals Investment Account"],new Date("2018-09-06T11:51:03.179Z"),{_id: 28242,str: "Wooden",num: 28369,array: [],obj: {}},new Date("2018-09-06T09:11:48.761Z"),"Buckinghamshire HDD"],obj: {_id: 28243,str: "Berkshire Chips",num: 53274,date: new Date("2018-09-06T10:34:42.073Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28244,str: "e-commerce",date: new Date("2018-09-06T16:47:46.299Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28245,str: "maximize",num: 48712,date: new Date("2018-09-06T10:06:52.744Z"),obj: {_id: 28246,str: "pixel",num: 80305,date: new Date("2018-09-06T03:40:20.912Z"),array: ["CSS payment","open system",new Date("2018-09-05T21:09:15.564Z"),7429,new Date("2018-09-06T13:30:20.768Z"),"architectures Baby Facilitator",{_id: 28247,str: "Investment Account Nebraska Representative",date: new Date("2018-09-05T23:23:10.626Z"),array: [],obj: {}},[80177],{_id: 28248,num: 65817,array: [],obj: {_id: 28249,num: 37655,date: new Date("2018-09-05T22:07:34.550Z")}},new Date("2018-09-06T05:39:05.600Z"),38897,new Date("2018-09-05T20:28:03.607Z")],obj: {_id: 28250,str: "Generic Gorgeous Wooden Salad District",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28251,str: "West Virginia Analyst indexing",date: new Date("2018-09-06T08:18:14.571Z"),array: [10175,75324,new Date("2018-09-06T19:44:02.863Z"),new Date("2018-09-06T16:27:25.575Z"),new Date("2018-09-06T14:13:16.520Z"),{_id: 28252,num: 12408,date: new Date("2018-09-06T09:42:56.262Z"),array: [],obj: {_id: 28253,str: "Avon deposit",array: ["neural array","Factors FTP efficient",32698,[],new Date("2018-09-06T06:17:06.924Z")]}},19796,{_id: 28254,num: 67907,date: new Date("2018-09-06T18:34:56.556Z"),obj: {}},"platforms payment feed","Frozen facilitate Customer"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28255,str: "Awesome Soft Ball",date: new Date("2018-09-06T06:55:46.285Z"),array: [73330,"Developer Ergonomic grey",new Date("2018-09-06T10:12:08.797Z"),new Date("2018-09-06T04:04:42.256Z"),"Chair Grass-roots navigating",{_id: 28256,str: "Borders Fantastic Concrete Cheese Pine",num: 62761,date: new Date("2018-09-06T11:17:07.056Z"),array: [],obj: {}},19944,new Date("2018-09-06T07:35:40.318Z"),[],41485],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28257,str: "Soft",num: 2300,date: new Date("2018-09-06T10:52:10.258Z"),array: [new Date("2018-09-06T19:07:02.806Z"),"driver Direct",23683,"SQL Clothing",new Date("2018-09-05T20:50:50.974Z"),32784,{_id: 28258,str: "invoice invoice Practical Metal Salad",date: new Date("2018-09-05T19:59:16.307Z"),array: [],obj: {}},new Date("2018-09-06T14:14:51.340Z"),"dot-com haptic Brand",[],new Date("2018-09-06T10:35:59.542Z")],obj: {_id: 28259,str: "Generic",num: 56754,date: new Date("2018-09-06T12:47:05.745Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28260,str: "blue",num: 49561,date: new Date("2018-09-06T12:07:59.474Z"),array: [],obj: {_id: 28261,str: "utilize",num: 68276,array: [new Date("2018-09-06T13:50:56.240Z"),"Computer","white",new Date("2018-09-06T06:59:50.708Z"),new Date("2018-09-05T20:52:54.535Z"),49687,72209,{_id: 28262,str: "Kids parsing Assimilated",array: []},[],[],42590],obj: {_id: 28263,str: "Village",num: 22514,date: new Date("2018-09-06T12:30:28.550Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 28264,str: "invoice",num: 58669,date: new Date("2018-09-06T11:09:36.737Z"),array: [],obj: {_id: 28265,str: "extend Shoals magenta",num: 36508,date: new Date("2018-09-06T09:26:42.117Z"),array: ["pixel",new Date("2018-09-05T23:36:40.311Z"),52894,[{_id: 28266,str: "Squares Tasty Plastic Pizza"},"copy hard drive calculate",[]],new Date("2018-09-06T10:27:29.043Z"),87304,[{_id: 28267,num: 29976,date: new Date("2018-09-06T14:48:00.843Z"),array: [],obj: {}},new Date("2018-09-06T13:18:46.965Z"),19292],687,new Date("2018-09-05T23:58:08.268Z"),"Tasty Michigan Baby",new Date("2018-09-06T02:55:59.638Z")],obj: {_id: 28268,str: "SMS Computers",date: new Date("2018-09-06T01:00:17.350Z"),array: [{_id: 28269,str: "Handmade Rubber Towels Auto Loan Account",num: 34882,obj: {}},"override","cross-platform interface"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28270,str: "Regional Towels Avon",num: 91636,date: new Date("2018-09-06T12:06:44.340Z"),array: ["Investment Account Executive silver",new Date("2018-09-06T08:45:45.945Z"),65962,["Borders Inlet Awesome",{_id: 28271,str: "parsing Shores",num: 8795,date: new Date("2018-09-06T19:18:03.900Z"),array: [],obj: {_id: 28272,date: new Date("2018-09-06T09:36:53.566Z"),array: ["methodology"],obj: {}}},new Date("2018-09-06T09:06:55.388Z"),33206,new Date("2018-09-06T14:02:29.124Z")],49973,[],78976,"Infrastructure Grass-roots",[{_id: 28273,str: "Fresh",date: new Date("2018-09-06T06:33:17.938Z"),obj: {_id: 28274,str: "Lari",num: 53723,array: [],obj: {}}}],"Wisconsin",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28275,str: "lavender Ball",num: 12131,date: new Date("2018-09-06T08:11:05.259Z"),array: [[{_id: 28276,str: "Kids",num: 12048,date: new Date("2018-09-06T18:02:32.386Z"),array: [],obj: {_id: 28277,str: "backing up",num: 29303,date: new Date("2018-09-06T02:39:41.890Z"),obj: {}}}],"blue Credit Card Account Optional",new Date("2018-09-06T01:07:27.339Z"),"Lilangeni Assurance","Tactics sexy Tactics",22766,"SSL",16962,22646,59554,{_id: 28278,str: "purple parsing Group",num: 94073,array: [new Date("2018-09-06T03:59:11.098Z")],obj: {}},[new Date("2018-09-06T03:20:08.280Z"),48691,{_id: 28279,str: "website Passage Small",num: 17743,date: new Date("2018-09-05T23:54:39.824Z"),array: [],obj: {_id: 28280,num: 28105,date: new Date("2018-09-06T05:43:15.203Z"),array: []}},new Date("2018-09-05T23:44:19.589Z")]],obj: {_id: 28281,str: "Auto Loan Account"}});
    },

    function(coll) {
        return coll.insert({_id: 28282,str: "Washington firewall grow",date: new Date("2018-09-06T06:23:12.245Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28283,str: "PNG Refined Executive",date: new Date("2018-09-06T03:15:40.650Z"),array: [83398,"indigo Senior",new Date("2018-09-06T19:51:13.633Z"),new Date("2018-09-06T05:45:41.216Z"),{_id: 28284,str: "impactful",num: 5636,array: [],obj: {_id: 28285,str: "streamline withdrawal compelling",num: 77312,date: new Date("2018-09-06T00:14:23.160Z"),array: [96851],obj: {_id: 28286,num: 67902,date: new Date("2018-09-05T22:23:03.013Z"),array: ["Investment Account Central Specialist",new Date("2018-09-05T22:04:46.247Z")],obj: {}}}},[],"Via",[],78986,new Date("2018-09-06T15:28:54.836Z"),{_id: 28287,str: "extensible JBOD",date: new Date("2018-09-05T23:45:55.480Z"),array: [8157,new Date("2018-09-06T07:38:04.463Z")]},new Date("2018-09-06T03:57:26.490Z"),13071,{_id: 28288,str: "withdrawal generate Fields",num: 61608,array: [],obj: {_id: 28289,num: 33515,date: new Date("2018-09-06T18:10:24.405Z"),obj: {}}},55577],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28290,str: "Cross-platform",num: 44805,date: new Date("2018-09-06T18:04:05.740Z"),array: [new Date("2018-09-06T05:31:31.800Z"),16157,51717,"solid state Maine Developer",new Date("2018-09-06T00:34:44.749Z"),new Date("2018-09-06T04:57:19.293Z"),65025,[],"Colorado Berkshire",{_id: 28291,str: "Georgia visualize XML",num: 57454,date: new Date("2018-09-06T16:05:41.103Z"),obj: {}},["e-enable Direct",new Date("2018-09-06T17:42:51.146Z"),"Industrial Dynamic architect"],29937],obj: {_id: 28292,str: "Incredible",date: new Date("2018-09-06T16:15:46.806Z"),array: [],obj: {_id: 28293,str: "channels transform USB",num: 53547,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 28294,num: 45426,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28295,str: "Facilitator",num: 35452,date: new Date("2018-09-06T12:46:04.286Z"),array: [{_id: 28296,str: "Accountability Montana",date: new Date("2018-09-06T15:07:40.882Z"),array: ["SDD blue e-commerce",82980,new Date("2018-09-06T01:44:48.319Z")],obj: {}},56220,"Union",{_id: 28297,str: "24/365 Re-engineered redefine",date: new Date("2018-09-06T14:03:19.573Z"),array: [],obj: {}},new Date("2018-09-06T09:10:53.948Z"),"ability",{_id: 28298,num: 52603,date: new Date("2018-09-05T23:47:17.390Z"),obj: {}},12379,"Officer niches",new Date("2018-09-05T22:22:38.725Z"),new Date("2018-09-06T01:22:05.957Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28299,num: 14653,date: new Date("2018-09-06T15:52:58.091Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28300,str: "Handmade deposit Legacy",date: new Date("2018-09-06T17:14:06.343Z"),obj: {_id: 28301,str: "Village",num: 46288,date: new Date("2018-09-06T08:35:44.873Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28302,num: 26535,date: new Date("2018-09-06T12:21:58.718Z"),array: [{_id: 28303,num: 56229,date: new Date("2018-09-06T04:49:46.813Z"),array: [41990],obj: {_id: 28304,str: "Trinidad and Tobago multi-tasking",obj: {}}},new Date("2018-09-06T05:45:10.989Z"),[],new Date("2018-09-05T20:44:50.739Z"),{_id: 28305,str: "Frozen architect",num: 88065,date: new Date("2018-09-06T09:08:28.848Z"),array: [],obj: {_id: 28306,str: "Credit Card Account Crescent",num: 14996,date: new Date("2018-09-05T21:21:10.247Z"),array: [],obj: {}}},"Nuevo Sol Money Market Account invoice","programming systemic",41158,[],"Planner workforce","input backing up",new Date("2018-09-06T15:34:36.700Z"),{_id: 28307,array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28308,num: 63503,date: new Date("2018-09-06T16:54:41.670Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28309,str: "backing up payment Lek",num: 5898,date: new Date("2018-09-06T04:47:29.608Z"),array: [7442,new Date("2018-09-06T07:14:41.628Z"),"user-centric Practical","Forward",new Date("2018-09-06T05:05:07.226Z"),27387,new Date("2018-09-06T12:39:13.039Z"),{_id: 28310,str: "Wyoming",num: 56160,date: new Date("2018-09-06T00:36:34.569Z"),array: [],obj: {}},["Guarani",new Date("2018-09-06T19:10:55.401Z"),[],57023,"withdrawal Handcrafted"]],obj: {_id: 28311,str: "Senegal Cayman Islands Dollar",date: new Date("2018-09-05T21:12:59.831Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28312,str: "cohesive schemas Producer",num: 96499,date: new Date("2018-09-06T05:04:59.596Z"),array: [58753,"Mountains European Monetary Unit (E.M.U.-6)",86598,new Date("2018-09-05T21:19:30.562Z"),"bus tertiary initiatives",{_id: 28313,str: "protocol",num: 31191,date: new Date("2018-09-06T02:00:17.024Z"),array: [],obj: {}},new Date("2018-09-06T12:43:21.862Z"),20851,[],[],17709,45154,"Customizable"],obj: {_id: 28314,str: "Self-enabling Handmade",num: 71304,obj: {_id: 28315,date: new Date("2018-09-06T11:24:57.767Z"),array: [new Date("2018-09-06T02:51:57.015Z"),{_id: 28316,str: "superstructure",num: 18361,date: new Date("2018-09-06T00:09:12.877Z"),array: [new Date("2018-09-06T14:38:30.634Z"),new Date("2018-09-06T13:28:53.280Z")],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 28317,str: "encryption",num: 62865,date: new Date("2018-09-06T06:34:38.918Z"),array: [{_id: 28318,str: "wireless sensor",num: 64363,obj: {}},"Metrics Developer",{_id: 28319,str: "JBOD Personal Loan Account",date: new Date("2018-09-06T03:25:33.566Z"),array: []},"Borders","web services",new Date("2018-09-06T19:55:14.199Z"),54095,81753,[],new Date("2018-09-06T12:54:14.463Z"),29959,new Date("2018-09-06T07:50:19.857Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28320,str: "protocol incentivize Sports",num: 65207,date: new Date("2018-09-06T01:58:27.858Z"),array: [[],new Date("2018-09-06T09:51:10.831Z"),"monetize",33093,63328,{_id: 28321,date: new Date("2018-09-05T23:05:16.249Z"),array: [],obj: {_id: 28322,str: "Plains",num: 44854,date: new Date("2018-09-06T18:44:50.963Z"),obj: {}}},"distributed Fresh",11397,new Date("2018-09-06T00:52:19.108Z"),new Date("2018-09-06T16:05:44.020Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28323,str: "Corners",num: 86140,date: new Date("2018-09-06T04:07:28.230Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28324,num: 40573,date: new Date("2018-09-05T23:20:57.626Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28325,str: "Credit Card Account",num: 91660,date: new Date("2018-09-06T01:53:18.983Z"),array: ["auxiliary Car alarm",28409,new Date("2018-09-06T14:46:12.662Z"),new Date("2018-09-06T01:22:10.351Z"),47639,"seamless violet Ergonomic",[new Date("2018-09-06T17:13:52.311Z"),{_id: 28326,str: "Fantastic asymmetric",num: 21586,date: new Date("2018-09-05T22:21:55.314Z"),array: [89296,"Intelligent",44838],obj: {_id: 28327,str: "Bedfordshire",date: new Date("2018-09-05T22:26:52.179Z"),array: [],obj: {_id: 28328,str: "Savings Account intranet Garden",num: 51081,obj: {}}}},new Date("2018-09-05T22:11:29.857Z")],"capacitor Flat Berkshire","Ports Strategist","capacitor",[]],obj: {_id: 28329,str: "Cove Salad"}});
    },

    function(coll) {
        return coll.insert({_id: 28330,str: "Producer directional Home",num: 94989,array: [],obj: {_id: 28331,str: "mobile neural",num: 67770,date: new Date("2018-09-06T09:36:57.429Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28332,str: "Costa Rica",num: 15141,date: new Date("2018-09-05T20:42:08.698Z"),array: [[],new Date("2018-09-06T15:28:46.818Z"),85091,"Forward Kids","Money Market Account integrate Mall",{_id: 28333,str: "Buckinghamshire Internal Rustic Steel Shoes",num: 2372,date: new Date("2018-09-06T05:54:13.865Z"),obj: {_id: 28334,str: "Missouri",num: 27738,obj: {}}},new Date("2018-09-06T12:32:40.676Z"),47505,new Date("2018-09-06T01:08:54.770Z"),"best-of-breed",[new Date("2018-09-06T02:28:49.426Z")],44854]});
    },

    function(coll) {
        return coll.insert({_id: 28335,str: "Small",num: 14181,date: new Date("2018-09-06T08:30:01.363Z"),array: [62906,"JSON vortals","East Caribbean Dollar virtual Refined",{_id: 28336,str: "back up",num: 85549,date: new Date("2018-09-06T16:34:10.589Z"),array: [27655,new Date("2018-09-06T11:58:23.096Z")],obj: {}},"Health Centralized","CSS",{_id: 28337,str: "Corporate",num: 69786,date: new Date("2018-09-06T15:34:38.800Z"),obj: {_id: 28338,str: "Iceland Krona pixel",num: 80644,array: [[],69603,new Date("2018-09-05T21:19:14.821Z")],obj: {_id: 28339,str: "Multi-lateral Business-focused Unbranded Rubber Pants",date: new Date("2018-09-06T10:38:02.988Z"),array: [],obj: {}}}},new Date("2018-09-06T05:17:52.770Z"),"HTTP copy",new Date("2018-09-06T07:48:03.740Z"),[],new Date("2018-09-06T19:28:11.301Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28340,str: "Cotton intuitive",num: 44264,date: new Date("2018-09-06T18:11:16.003Z"),array: ["Ergonomic Wooden Pants",new Date("2018-09-06T17:18:13.343Z"),"Wooden Facilitator Credit Card Account",new Date("2018-09-06T09:04:39.677Z"),43489,82328,{_id: 28341,str: "Personal Loan Account hard drive",num: 91597,date: new Date("2018-09-06T01:13:30.639Z"),array: []},new Date("2018-09-05T21:33:50.210Z"),new Date("2018-09-06T04:32:01.045Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28342,str: "payment Savings Account Applications",num: 9634,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28343,str: "Games Up-sized",num: 86473,date: new Date("2018-09-06T15:33:53.373Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28344,str: "e-tailers relationships",num: 79687,array: ["Right-sized program Mobility",39865,new Date("2018-09-05T21:53:30.547Z"),{_id: 28345,str: "Generic Granite Tuna",num: 51011,date: new Date("2018-09-06T10:36:21.717Z"),obj: {}},new Date("2018-09-06T14:24:36.763Z"),{_id: 28346,str: "XML",date: new Date("2018-09-05T21:00:29.712Z"),array: [],obj: {}},"Fiji Dollar system ADP",new Date("2018-09-06T02:02:14.182Z"),"hack Administrator Shoals",31962,[97228,"withdrawal SMTP Wisconsin"],{_id: 28347,str: "Bridge Cotton Focused",num: 73082,date: new Date("2018-09-06T11:09:22.887Z"),obj: {_id: 28348,str: "withdrawal matrix",num: 56519,array: [],obj: {}}},{_id: 28349,num: 80927,date: new Date("2018-09-05T20:58:12.023Z"),array: [[14253,new Date("2018-09-06T00:25:53.585Z"),"Investment Account microchip"]]}],obj: {_id: 28350,date: new Date("2018-09-06T03:01:34.573Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28351,str: "robust sensor",num: 84030,date: new Date("2018-09-05T21:41:21.268Z"),array: [new Date("2018-09-06T17:56:12.315Z"),new Date("2018-09-06T03:56:06.171Z"),1064,[],{_id: 28352,str: "invoice",date: new Date("2018-09-06T11:14:26.098Z"),array: ["District matrix",[],16019,new Date("2018-09-06T08:16:51.959Z"),"Intelligent Frozen Gloves"],obj: {_id: 28353,str: "Chicken online demand-driven",num: 79365,date: new Date("2018-09-06T00:12:44.723Z"),array: [33972,new Date("2018-09-05T23:27:55.600Z"),"Directives Money Market Account orange",31903],obj: {_id: 28354,str: "multimedia Northern Mariana Islands",date: new Date("2018-09-06T16:25:28.054Z"),obj: {_id: 28355,str: "Clothing Synergized",num: 6961,array: [],obj: {}}}}},"Fresh Fantastic Metal Chips",59468,"Handcrafted Steel Hat bypassing",{_id: 28356,num: 96552,date: new Date("2018-09-06T12:00:55.976Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 28357,str: "Forward Analyst",num: 3593,date: new Date("2018-09-06T01:18:28.044Z"),array: [new Date("2018-09-05T20:32:22.202Z"),new Date("2018-09-06T14:24:57.694Z"),"time-frame",38009,"Fish Frozen Berkshire",46644,52221,["Fantastic deposit"],[],["e-services Wyoming"],new Date("2018-09-06T00:17:27.691Z"),new Date("2018-09-06T14:47:18.883Z"),new Date("2018-09-06T14:51:18.137Z"),{_id: 28358,str: "web-enabled Naira",num: 97795,date: new Date("2018-09-05T22:49:34.351Z"),array: [],obj: {_id: 28359,str: "Executive",num: 91459,array: [],obj: {_id: 28360,num: 1095,date: new Date("2018-09-05T22:35:36.593Z"),obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 28361,str: "e-markets neural",num: 4585,date: new Date("2018-09-06T19:12:28.362Z"),array: [],obj: {_id: 28362,str: "Applications",num: 47195,date: new Date("2018-09-06T19:18:56.363Z"),array: [28363,new Date("2018-09-06T12:39:44.569Z"),new Date("2018-09-06T03:24:41.819Z"),"Practical system",32828,24271,new Date("2018-09-05T23:03:44.348Z"),"mesh Pre-emptive",{_id: 28363,str: "synthesize Kip",num: 68742,date: new Date("2018-09-06T00:14:49.303Z"),array: [],obj: {_id: 28364,str: "e-tailers Orchard panel",obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 28365,str: "monitor Security SCSI",num: 20991,date: new Date("2018-09-06T18:37:36.419Z"),array: ["Interactions Mountains magnetic",{_id: 28366,str: "quantifying",num: 67128,date: new Date("2018-09-06T06:46:21.788Z"),array: [67636,10102],obj: {}},new Date("2018-09-06T01:22:35.357Z"),new Date("2018-09-05T22:48:33.468Z"),new Date("2018-09-06T16:16:08.250Z"),"sensor well-modulated standardization",[],"Wooden engineer backing up","Rustic calculating",88756,new Date("2018-09-05T21:19:45.737Z"),41017]});
    },

    function(coll) {
        return coll.insert({_id: 28367,str: "protocol responsive",num: 42221,date: new Date("2018-09-06T02:21:17.780Z"),array: [{_id: 28368,str: "compress partnerships bypass",num: 96767,date: new Date("2018-09-06T00:14:07.154Z"),array: [{_id: 28369,num: 78646,date: new Date("2018-09-06T00:00:45.058Z"),obj: {_id: 28370,str: "Sleek",num: 32091,array: [],obj: {_id: 28371,str: "Kids compressing bypassing",date: new Date("2018-09-06T03:14:11.495Z"),array: [],obj: {}}}},32536,new Date("2018-09-06T19:03:29.142Z"),"program alarm",{_id: 28372,num: 97523,date: new Date("2018-09-06T17:38:47.217Z"),array: [{_id: 28373,num: 44600,date: new Date("2018-09-05T21:38:02.563Z")},new Date("2018-09-06T11:44:29.367Z")],obj: {_id: 28374,str: "Sleek Industrial invoice",obj: {}}},new Date("2018-09-06T02:04:07.790Z"),new Date("2018-09-06T07:28:32.923Z"),62894]},"e-services",92983,[new Date("2018-09-06T04:56:29.885Z"),44031],[],"US Dollar Branding Jewelery",[75838],"Frozen Square Assistant"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28375,num: 18913,date: new Date("2018-09-06T05:49:52.296Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28376,str: "invoice",num: 80949,date: new Date("2018-09-05T22:26:43.517Z"),obj: {_id: 28377,str: "Village Home Loan Account Investment Account",date: new Date("2018-09-06T12:04:22.751Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28378,str: "Uzbekistan Sum Turkey Knolls",num: 16505,date: new Date("2018-09-05T21:53:54.741Z"),array: [1948,"Diverse",[new Date("2018-09-06T13:41:49.042Z"),[],new Date("2018-09-06T13:41:12.752Z"),new Date("2018-09-06T12:06:57.279Z"),"Security"],[42826,"Investment Account","Small Rubber Gloves Branding","Optimization Money Market Account"],29530,{_id: 28379,str: "streamline",date: new Date("2018-09-06T06:19:02.369Z"),array: [],obj: {}},new Date("2018-09-06T06:06:40.912Z"),"Jewelery methodologies"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28380,str: "Concrete Seychelles calculating",date: new Date("2018-09-06T17:43:54.283Z"),array: [{_id: 28381,date: new Date("2018-09-05T20:12:29.635Z"),array: [],obj: {}},"Forward Wall hack",41294,"Savings Account Ergonomic withdrawal",new Date("2018-09-06T11:58:36.760Z"),37534,15730,new Date("2018-09-06T16:24:29.978Z"),{_id: 28382,str: "synergy violet",num: 40701,array: []},[],["programming Personal Loan Account Roads"],new Date("2018-09-06T19:31:14.188Z"),new Date("2018-09-05T20:22:20.281Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28383,str: "Assurance",date: new Date("2018-09-06T02:20:02.079Z"),array: [new Date("2018-09-06T02:42:20.408Z"),"copying Table Movies","Metrics standardization ADP",29905,new Date("2018-09-06T13:06:47.707Z"),72684,"RAM transmitting Chair",{_id: 28384,str: "Central Branding array",num: 79061,date: new Date("2018-09-06T16:43:52.426Z"),array: [],obj: {_id: 28385,str: "Future",num: 43887,array: [new Date("2018-09-06T08:11:47.280Z")],obj: {}}},{_id: 28386,array: []},new Date("2018-09-06T08:56:36.643Z"),[72480,"Kids"],94339,"Taiwan Chair"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28387,str: "actuating overriding",num: 65975,array: ["Angola Cordoba Oro Taka",15786,{_id: 28388,str: "impactful Strategist dynamic",date: new Date("2018-09-06T12:11:47.416Z"),array: [],obj: {_id: 28389,str: "Program Hawaii",num: 2328,date: new Date("2018-09-06T07:35:13.517Z"),array: [],obj: {}}},[],"groupware",new Date("2018-09-06T02:42:39.510Z"),{_id: 28390,str: "SAS generating",num: 49735,date: new Date("2018-09-06T14:34:09.605Z")},new Date("2018-09-06T12:46:47.085Z"),90502],obj: {_id: 28391,str: "whiteboard web services",num: 38745,date: new Date("2018-09-06T01:50:37.753Z"),array: [],obj: {_id: 28392,str: "Shoal Manager Multi-lateral",num: 75982,array: [new Date("2018-09-06T08:56:18.452Z"),"Hawaii Pakistan Rupee",["bypass",["maroon",72913],{_id: 28393,date: new Date("2018-09-06T01:25:51.942Z")}],8215,95816],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28394,str: "Global",num: 90928,date: new Date("2018-09-06T02:27:27.375Z"),array: [new Date("2018-09-06T08:50:18.839Z"),55184,53201,"strategic Djibouti",new Date("2018-09-06T00:07:15.783Z"),30189,{_id: 28395,str: "disintermediate",date: new Date("2018-09-06T01:11:59.265Z"),array: [],obj: {}},new Date("2018-09-06T11:18:09.011Z")],obj: {_id: 28396,str: "Associate Plaza payment",num: 23744,array: [[{_id: 28397,str: "invoice hardware",num: 80730,date: new Date("2018-09-06T14:48:05.612Z"),array: [],obj: {}},"Nevada global",97929],80239,[],new Date("2018-09-06T03:32:19.913Z"),"Ergonomic Concrete Keyboard infrastructures Cape","extend",[{_id: 28398,str: "Lock Tuna",num: 70025,array: []},{_id: 28399,date: new Date("2018-09-06T19:24:39.908Z")}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28400,str: "feed methodology",num: 76814,date: new Date("2018-09-06T08:23:25.755Z"),array: [],obj: {_id: 28401,str: "Massachusetts",num: 94418,date: new Date("2018-09-05T22:14:47.730Z"),array: [61228,new Date("2018-09-06T08:56:16.033Z"),"circuit Ridge","Steel next generation",48922,new Date("2018-09-06T01:04:10.617Z"),"Administrator pixel",[],68346,{_id: 28402,num: 33912,array: [new Date("2018-09-06T01:39:58.403Z"),[],{_id: 28403,str: "Bedfordshire Holy See (Vatican City State) Dynamic",date: new Date("2018-09-06T17:22:06.017Z"),array: [new Date("2018-09-06T05:20:41.547Z")],obj: {}},new Date("2018-09-06T05:47:02.173Z"),2444]}],obj: {_id: 28404,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28405,str: "UAE Dirham RSS",date: new Date("2018-09-06T05:55:14.309Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28406,num: 11148,date: new Date("2018-09-05T23:15:58.558Z"),array: [{_id: 28407,str: "Buckinghamshire",num: 53797,array: [69723,new Date("2018-09-06T06:43:14.044Z")],obj: {}},"connecting mint green Triple-buffered",new Date("2018-09-06T09:08:56.376Z"),"Lakes",new Date("2018-09-06T08:04:54.355Z"),[],39361,{_id: 28408,str: "Accounts",num: 19253,date: new Date("2018-09-06T10:44:02.158Z"),obj: {}},new Date("2018-09-06T08:05:55.943Z"),"Investment Account",{_id: 28409,str: "Lek transmit",num: 40816,date: new Date("2018-09-06T16:46:32.038Z"),array: [],obj: {_id: 28410,str: "gold",date: new Date("2018-09-06T01:42:40.709Z"),array: []}},43972],obj: {_id: 28411,str: "application facilitate",num: 23982,array: [89462]}});
    },

    function(coll) {
        return coll.insert({_id: 28412,str: "Director Idaho Intranet",num: 96352,date: new Date("2018-09-05T20:30:18.016Z"),array: [17692,"focus group","Specialist",[],new Date("2018-09-06T08:27:32.514Z"),{_id: 28413,num: 87275,date: new Date("2018-09-06T18:06:39.894Z"),array: [60807],obj: {_id: 28414,str: "Bermuda Ergonomic Plastic Hat deposit",date: new Date("2018-09-06T05:19:46.672Z"),array: ["Personal Loan Account",83492,new Date("2018-09-05T20:02:48.735Z"),new Date("2018-09-05T22:55:46.238Z"),new Date("2018-09-06T06:01:24.303Z")],obj: {}}},"Universal",{_id: 28415,num: 53408,obj: {_id: 28416,str: "gold parsing Bedfordshire",num: 16407,date: new Date("2018-09-05T20:41:28.632Z"),array: []}},19680,[],new Date("2018-09-06T14:46:28.901Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28417,str: "Handcrafted Cotton Keyboard platforms",num: 23767,date: new Date("2018-09-06T07:05:41.785Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28418,str: "Agent",num: 85094,array: []});
    },

    function(coll) {
        return coll.insert({_id: 28419,str: "Wyoming Refined",num: 98030,date: new Date("2018-09-06T03:03:23.059Z"),array: [new Date("2018-09-06T04:25:20.650Z"),{_id: 28420,str: "white",date: new Date("2018-09-06T18:38:41.519Z"),array: [],obj: {}},8685,"Buckinghamshire Small Plastic Chips",[],new Date("2018-09-06T18:02:57.409Z"),new Date("2018-09-06T09:50:42.199Z"),"Producer Washington",new Date("2018-09-06T09:46:21.986Z"),"Marketing",40556,"customer loyalty Response",new Date("2018-09-05T23:49:47.323Z")],obj: {_id: 28421,str: "Operations Stravenue capacity",num: 84624,date: new Date("2018-09-06T17:13:07.218Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 28422,str: "Infrastructure Quality",date: new Date("2018-09-06T03:54:37.168Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28423,str: "responsive function",date: new Date("2018-09-05T21:28:49.704Z"),array: [],obj: {_id: 28424,str: "Forward Associate Avon",num: 9941,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28425,str: "bluetooth scalable",num: 44423,date: new Date("2018-09-06T03:22:32.023Z"),array: [1654,new Date("2018-09-06T01:09:18.519Z"),new Date("2018-09-05T22:53:12.182Z"),"calculating",new Date("2018-09-06T17:35:06.075Z"),17284,88526,"Burundi Franc web services",{_id: 28426,num: 47573,date: new Date("2018-09-06T19:45:23.474Z"),array: [],obj: {_id: 28427,str: "input syndicate",array: [],obj: {_id: 28428,str: "Moldova sensor Web",num: 21722}}},["Tasty",{_id: 28429,num: 9809,date: new Date("2018-09-06T06:19:25.044Z"),array: [{_id: 28430,str: "Guyana Shoes",num: 87301,array: [new Date("2018-09-05T21:27:01.771Z")],obj: {}},new Date("2018-09-06T03:54:38.311Z")]},13665,[]],{_id: 28431,date: new Date("2018-09-05T20:13:36.594Z"),obj: {}},[],"hard drive Hills"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28432,num: 70543,date: new Date("2018-09-06T02:42:45.813Z"),array: [],obj: {_id: 28433,str: "Bedfordshire",num: 38722,date: new Date("2018-09-06T17:51:52.524Z"),array: [new Date("2018-09-06T16:06:10.294Z"),"Iranian Rial Checking Account Executive","dynamic Naira",91141,new Date("2018-09-06T01:22:03.449Z"),new Date("2018-09-06T14:07:41.416Z"),{_id: 28434,str: "proactive Gourde US Dollar",num: 36507,array: [],obj: {}},98807,44184,[["parse"],new Date("2018-09-06T19:44:14.293Z"),[]],[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28435,str: "Money Market Account Intelligent matrix",num: 15533,date: new Date("2018-09-06T10:23:07.502Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28436,str: "bypassing Specialist",num: 30728,array: [new Date("2018-09-06T09:06:37.289Z"),"cultivate Lari ability",2613,[],14817,"capacitor ivory Kiribati",new Date("2018-09-05T20:30:20.478Z"),{_id: 28437,str: "initiatives Unbranded",num: 14677,date: new Date("2018-09-06T18:02:23.189Z"),array: [],obj: {}},new Date("2018-09-06T17:48:51.636Z"),"Indian Rupee Ngultrum plum",79835,"database",[new Date("2018-09-06T09:55:09.321Z"),44554],20304]});
    },

    function(coll) {
        return coll.insert({_id: 28438,str: "firewall",num: 98046,date: new Date("2018-09-06T19:37:51.934Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28439,str: "Savings Account",num: 93517,date: new Date("2018-09-05T21:09:13.348Z"),array: [new Date("2018-09-06T01:45:42.859Z"),33772,"Fields",40961,"synergize Berkshire",new Date("2018-09-05T21:41:40.019Z"),"Malawi","alarm Multi-tiered quantifying",{_id: 28440,str: "Avon",num: 56117,date: new Date("2018-09-06T06:03:54.856Z"),array: [51813]},{_id: 28441,num: 85644,date: new Date("2018-09-06T03:51:32.643Z"),array: [],obj: {}}],obj: {_id: 28442,str: "RSS Tennessee Identity",num: 22059,date: new Date("2018-09-06T12:42:53.505Z"),array: [[],"compressing Associate Designer",new Date("2018-09-05T23:50:15.365Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28443,str: "Avon Table",num: 87938,date: new Date("2018-09-06T14:19:51.616Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28444,str: "azure",num: 16028,date: new Date("2018-09-06T11:22:31.337Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28445,str: "Investment Account",num: 46076,date: new Date("2018-09-06T10:05:01.568Z"),array: [30398,new Date("2018-09-06T14:04:17.228Z"),"redundant Tools",new Date("2018-09-06T02:38:12.434Z"),[],62937,new Date("2018-09-06T07:38:27.410Z"),{_id: 28446,num: 31651,array: [60037,new Date("2018-09-05T22:28:20.171Z")],obj: {_id: 28447,str: "Senior Dynamic Credit Card Account",num: 25595,date: new Date("2018-09-06T01:36:04.728Z"),array: []}},84033,"Creative",{_id: 28448,str: "Table empower Handmade Frozen Soap",date: new Date("2018-09-06T04:13:24.803Z"),array: [{_id: 28449,str: "New Taiwan Dollar Buckinghamshire",date: new Date("2018-09-06T07:00:11.374Z"),array: ["auxiliary groupware Representative"],obj: {}},[]],obj: {}},new Date("2018-09-06T05:01:51.948Z"),"fresh-thinking"],obj: {_id: 28450,str: "best-of-breed",num: 2826,date: new Date("2018-09-06T03:44:48.597Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28451,str: "incremental olive",num: 30367,date: new Date("2018-09-06T10:57:52.254Z"),array: [new Date("2018-09-05T23:33:11.241Z"),"Practical Cotton Chips TCP convergence",32790,16643,new Date("2018-09-06T05:02:39.927Z"),"throughput backing up Leone",15558,[],"Orchestrator drive",81450,"Direct initiatives",new Date("2018-09-06T11:17:45.984Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28452,str: "Wooden Christmas Island",date: new Date("2018-09-06T08:13:53.646Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28453,str: "Lodge Yen Berkshire",num: 33716,date: new Date("2018-09-06T08:55:04.994Z"),array: [],obj: {_id: 28454,str: "Right-sized",num: 23694,date: new Date("2018-09-06T00:40:02.534Z"),array: ["Representative Configurable experiences",33569,new Date("2018-09-06T04:29:21.297Z"),"Illinois",new Date("2018-09-06T10:04:06.091Z"),new Date("2018-09-06T00:35:08.804Z"),4944,"synergies","Facilitator Keyboard Shirt",93174,98219],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28455,str: "JSON digital",num: 62957,date: new Date("2018-09-06T19:41:06.526Z"),array: ["Chair Shoes out-of-the-box",new Date("2018-09-05T22:31:56.142Z"),78797,34716,"static utilize Licensed",{_id: 28456,str: "Frozen",num: 20626,date: new Date("2018-09-06T17:12:28.142Z"),array: [],obj: {}},new Date("2018-09-06T12:25:54.556Z"),[new Date("2018-09-06T14:12:17.351Z"),12248,[]],new Date("2018-09-06T19:06:44.284Z"),["synthesize Namibia",{_id: 28457,date: new Date("2018-09-06T03:51:46.322Z"),array: [],obj: {_id: 28458,obj: {}}}],"collaborative payment",94763],obj: {_id: 28459,str: "invoice Central Mountain",num: 51415,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 28460,num: 2335,date: new Date("2018-09-06T11:14:42.876Z"),array: [74699,[2248,new Date("2018-09-06T14:19:08.076Z"),"monitor compelling Engineer",[],{_id: 28461,str: "Tenge Wooden",num: 17731,date: new Date("2018-09-06T04:37:15.059Z"),array: [],obj: {_id: 28462,str: "RAM",num: 18993,date: new Date("2018-09-06T02:57:30.014Z"),array: [],obj: {_id: 28463,str: "Falls",num: 82858,array: []}}}],new Date("2018-09-05T19:58:21.364Z"),{_id: 28464,str: "Forward digital",date: new Date("2018-09-06T12:56:44.157Z"),obj: {}},24911,"wireless",65780,new Date("2018-09-06T15:32:28.829Z"),11631],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28465,str: "communities",date: new Date("2018-09-05T21:36:27.923Z"),array: [18914,new Date("2018-09-05T23:19:55.315Z"),[new Date("2018-09-06T16:38:50.614Z"),"infrastructures"],"Assistant red",34748,57501,{_id: 28466,str: "Louisiana",num: 20792,date: new Date("2018-09-06T09:52:18.918Z"),array: [],obj: {}},"Branding","Health synthesize",{_id: 28467,str: "Savings Account Shirt",date: new Date("2018-09-05T22:55:50.252Z"),array: [96188]},"Ergonomic Architect Mouse",new Date("2018-09-05T22:20:59.404Z"),[]],obj: {_id: 28468,str: "HDD",num: 66950,date: new Date("2018-09-06T04:27:35.480Z"),array: [],obj: {_id: 28469,str: "Quality Frozen",num: 27080,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28470,str: "Rustic",num: 64162,date: new Date("2018-09-06T16:18:48.557Z")});
    },

    function(coll) {
        return coll.insert({_id: 28471,str: "RSS",num: 75891,date: new Date("2018-09-06T03:46:41.292Z"),array: [new Date("2018-09-06T17:54:14.608Z"),"Program copying",new Date("2018-09-06T09:29:25.969Z"),"PCI even-keeled ADP",67587,90402,{_id: 28472,str: "proactive withdrawal Interactions",num: 14704,date: new Date("2018-09-06T09:44:41.808Z"),obj: {}},11338,["program Personal Loan Account Incredible Cotton Pizza",new Date("2018-09-06T16:34:50.755Z")],[],new Date("2018-09-06T10:28:09.023Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28473,str: "e-markets",num: 7713,date: new Date("2018-09-06T14:21:32.837Z"),array: [],obj: {_id: 28474,str: "Solutions",date: new Date("2018-09-06T01:29:55.398Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 28475,str: "Table",num: 63469,date: new Date("2018-09-06T02:01:45.591Z"),array: ["turn-key programming",new Date("2018-09-06T00:55:46.926Z"),14534,{_id: 28476,date: new Date("2018-09-06T19:23:41.944Z")},[new Date("2018-09-05T20:27:06.129Z"),"National"],[],57635,68226,12447,{_id: 28477,num: 18329,date: new Date("2018-09-06T13:38:30.557Z"),array: [new Date("2018-09-06T05:17:15.730Z"),{_id: 28478,str: "protocol",num: 24230,date: new Date("2018-09-06T08:48:21.854Z"),array: [],obj: {}}],obj: {}},"FTP ROI Plastic","engage",new Date("2018-09-06T09:22:46.762Z")],obj: {_id: 28479,str: "hub",num: 17664,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28480,num: 76564,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28481,str: "indexing",num: 96161,date: new Date("2018-09-06T04:06:10.630Z"),array: [49150,67014,70886,new Date("2018-09-06T08:32:15.305Z"),"redundant Infrastructure"],obj: {_id: 28482,str: "Handmade Wooden Ball",num: 11318,date: new Date("2018-09-06T16:13:42.988Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28483,str: "Tasty",num: 17093,date: new Date("2018-09-06T11:33:58.219Z"),array: [],obj: {_id: 28484,str: "redundant",num: 58304,array: [10562,{_id: 28485,num: 31586,date: new Date("2018-09-06T15:59:25.449Z"),obj: {}},new Date("2018-09-06T12:40:01.394Z"),{_id: 28486,str: "Mill",date: new Date("2018-09-05T19:56:13.766Z"),array: [],obj: {_id: 28487,str: "connecting back-end",num: 33423,date: new Date("2018-09-06T15:18:13.604Z"),array: [[new Date("2018-09-06T03:23:53.388Z"),new Date("2018-09-05T21:28:11.494Z"),50076],"leading-edge",49618,"web-enabled Jewelery SQL",new Date("2018-09-06T00:27:54.372Z"),"Moroccan Dirham Quality supply-chains"],obj: {}}},[[new Date("2018-09-06T00:19:57.306Z"),[]],"Junction Handcrafted Steel Gloves"],24577,new Date("2018-09-06T03:20:41.015Z"),88004],obj: {_id: 28488,str: "Gorgeous Wooden Chair",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 28489,str: "invoice Investment Account COM",num: 92887,date: new Date("2018-09-06T06:28:39.750Z"),array: [new Date("2018-09-05T20:46:37.908Z"),{_id: 28490,str: "Division Chair",num: 35166,date: new Date("2018-09-06T02:10:23.995Z"),array: [],obj: {}},26253,"clicks-and-mortar system maximized","static methodologies",[new Date("2018-09-06T06:49:31.596Z"),"Generic yellow monitor"],67710,"Applications Handmade Steel Cheese",new Date("2018-09-06T00:57:23.909Z"),31319,{_id: 28491,str: "Slovenia Facilitator Ameliorated",num: 69106,date: new Date("2018-09-06T00:31:52.729Z"),array: [],obj: {_id: 28492,str: "Virginia",obj: {}}},new Date("2018-09-05T23:49:49.298Z"),"incubate virtual Director"],obj: {_id: 28493,str: "Electronics enterprise",num: 6494}});
    },

    function(coll) {
        return coll.insert({_id: 28494,str: "Pizza",num: 17193,date: new Date("2018-09-06T04:39:19.043Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 28495,str: "Pants Borders",num: 8515,date: new Date("2018-09-06T00:39:44.307Z"),obj: {_id: 28496,str: "content-based Administrator",date: new Date("2018-09-06T08:25:55.406Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28497,num: 47039,date: new Date("2018-09-06T05:05:01.262Z"),obj: {_id: 28498,str: "Plastic",num: 66942,date: new Date("2018-09-06T19:16:24.533Z"),array: ["redundant",new Date("2018-09-06T17:16:02.091Z"),8145,[],"mobile"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28499,num: 9959,date: new Date("2018-09-05T20:41:09.568Z"),array: [],obj: {_id: 28500,str: "Investor Configuration Tasty Plastic Table",num: 12189,date: new Date("2018-09-06T06:20:46.087Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28501,str: "Refined Plastic Mouse deposit Creative",num: 47830,date: new Date("2018-09-06T17:03:53.975Z"),array: [19443,[],"Steel Manor Agent",new Date("2018-09-06T13:51:32.193Z"),{_id: 28502,num: 29919,date: new Date("2018-09-06T11:48:19.435Z"),array: [],obj: {}},new Date("2018-09-06T16:26:41.376Z"),["Frozen","e-business non-volatile bluetooth",{_id: 28503,str: "Representative",num: 69208,date: new Date("2018-09-06T16:05:01.474Z"),obj: {_id: 28504,str: "Internal",date: new Date("2018-09-06T09:20:21.582Z"),array: []}}],96585,{_id: 28505,str: "ubiquitous engage",num: 69779,array: [[new Date("2018-09-06T06:49:13.327Z")],63614]},new Date("2018-09-06T00:59:05.537Z"),{_id: 28506,str: "capacitor generating scalable",date: new Date("2018-09-06T15:36:50.359Z"),array: [{_id: 28507,obj: {_id: 28508,num: 47454,date: new Date("2018-09-06T02:59:54.700Z"),array: [],obj: {}}}],obj: {}},85245,"Fresh cross-platform"],obj: {_id: 28509,num: 34053,date: new Date("2018-09-06T14:26:30.185Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 28510,str: "Gorgeous Fresh Bacon Serbian Dinar",date: new Date("2018-09-06T06:10:13.594Z"),array: [new Date("2018-09-06T02:47:50.025Z"),50634,new Date("2018-09-06T02:39:11.604Z"),22166,"Research turn-key user-facing","e-business","Movies Towels",new Date("2018-09-06T05:44:47.449Z"),"Hong Kong Principal deposit",98293,new Date("2018-09-06T05:05:48.925Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28511,str: "Representative",date: new Date("2018-09-06T11:36:31.285Z"),array: [],obj: {_id: 28512,str: "ADP Connecticut",num: 49573,date: new Date("2018-09-06T05:53:23.334Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28513,str: "content Refined",num: 71976,date: new Date("2018-09-06T17:48:15.963Z"),array: [88754,new Date("2018-09-06T04:03:44.240Z"),new Date("2018-09-06T12:54:52.537Z"),"matrix","XML",26454,new Date("2018-09-05T21:11:54.069Z"),"revolutionize Licensed Wooden Keyboard",71546,11007],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28514,str: "red real-time",num: 27229,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28515,str: "User-friendly Granite Bedfordshire",num: 35747,date: new Date("2018-09-06T00:26:51.301Z"),array: [new Date("2018-09-06T18:01:01.075Z"),"Unbranded Cotton Bike Netherlands Antillian Guilder",new Date("2018-09-06T11:04:36.734Z"),[],94558,110,new Date("2018-09-05T21:02:16.289Z"),{_id: 28516,str: "Public-key 24/7",num: 31406,date: new Date("2018-09-05T21:18:58.400Z"),array: [],obj: {}},"Baht",41788,{_id: 28517,num: 76627,date: new Date("2018-09-06T13:39:43.057Z"),obj: {_id: 28518,str: "Manager virtual",num: 70146,array: [[]]}},{_id: 28519,str: "Lead West Virginia",date: new Date("2018-09-06T11:57:14.701Z"),array: ["navigating Checking Account efficient"],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28520,str: "haptic",num: 35257,date: new Date("2018-09-05T21:40:54.139Z"),array: [],obj: {_id: 28521,str: "Berkshire port",num: 57850,date: new Date("2018-09-06T18:54:12.030Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28522,str: "HDD",num: 67505,date: new Date("2018-09-06T09:47:33.149Z"),array: [new Date("2018-09-06T00:15:13.937Z"),new Date("2018-09-06T09:57:06.393Z"),[new Date("2018-09-06T15:46:28.882Z"),{_id: 28523,date: new Date("2018-09-06T01:21:53.007Z"),array: [],obj: {}},"Credit Card Account"],"Tools Metal Reduced",77710,"Optimization",25079,new Date("2018-09-06T03:24:50.925Z"),[],"Berkshire",72804],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28524,str: "recontextualize Iceland Krona",num: 32230,date: new Date("2018-09-06T09:33:31.716Z"),array: [],obj: {_id: 28525,num: 10436,date: new Date("2018-09-06T08:46:55.579Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28526,str: "Incredible",num: 9032,date: new Date("2018-09-06T12:37:27.397Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28527,str: "lime",num: 30992,date: new Date("2018-09-06T08:44:53.564Z"),array: ["Forks Fantastic Checking Account",24405,new Date("2018-09-05T20:28:46.367Z"),43828,new Date("2018-09-06T01:43:07.544Z"),90549,"Plastic",[],13546,{_id: 28528,str: "Cambridgeshire",num: 21869,date: new Date("2018-09-06T17:08:59.899Z"),array: [],obj: {_id: 28529,num: 12566,array: ["Global Compatible",new Date("2018-09-06T10:09:34.866Z"),{_id: 28530,str: "Awesome seize",date: new Date("2018-09-06T09:07:39.801Z")}],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28531,str: "e-business green",num: 72016,date: new Date("2018-09-06T10:59:38.538Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28532,num: 79538,date: new Date("2018-09-05T23:03:49.638Z"),obj: {_id: 28533,str: "payment bricks-and-clicks knowledge base",num: 97557,date: new Date("2018-09-05T21:07:57.828Z"),array: [77713,"mobile deposit Product","West Virginia South Dakota Borders",new Date("2018-09-05T22:45:20.806Z"),75746,[],68284,[],6105,{_id: 28534,str: "Avon Yemen",date: new Date("2018-09-05T22:39:02.096Z"),array: ["Intelligent New Mexico"]},new Date("2018-09-06T11:47:12.292Z"),[],{_id: 28535,str: "1080p local Integration",num: 1394,array: [52256],obj: {_id: 28536,str: "UIC-Franc",array: []}},"lavender card"]}});
    },

    function(coll) {
        return coll.insert({_id: 28537,str: "visionary program Russian Ruble",num: 88598,date: new Date("2018-09-06T11:29:27.443Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28538,str: "Borders front-end zero defect",num: 63976,date: new Date("2018-09-06T00:52:55.105Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28539,str: "core Tuna",num: 86351,date: new Date("2018-09-06T08:36:18.340Z"),array: [new Date("2018-09-06T07:53:43.649Z"),"implement Rand",41606,24147,{_id: 28540,str: "innovate Realigned",num: 58854,date: new Date("2018-09-06T03:47:54.704Z"),array: [],obj: {}},new Date("2018-09-05T20:37:14.105Z"),{_id: 28541,date: new Date("2018-09-06T11:15:13.911Z"),obj: {}},88150,"metrics Granite Minnesota",95358,["parse",[new Date("2018-09-06T03:16:45.349Z")],"virtual bypass product",new Date("2018-09-06T01:00:43.320Z")],[]]});
    },

    function(coll) {
        return coll.insert({_id: 28542,num: 2612,array: [[],new Date("2018-09-06T07:41:52.593Z"),{_id: 28543,str: "applications",num: 36038,date: new Date("2018-09-06T02:16:19.972Z"),array: [],obj: {_id: 28544,str: "Small Soft Mouse data-warehouse",num: 19370,date: new Date("2018-09-05T23:00:01.771Z"),obj: {}}},"CSS Down-sized","bluetooth unleash",18889,53769,"bluetooth experiences bypass"],obj: {_id: 28545,str: "wireless",date: new Date("2018-09-06T18:09:05.192Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28546,str: "Communications",num: 75603,date: new Date("2018-09-06T14:37:48.954Z"),array: [[],new Date("2018-09-06T02:52:09.040Z"),{_id: 28547,num: 9982,date: new Date("2018-09-06T16:37:20.044Z"),array: [],obj: {}},new Date("2018-09-06T08:28:25.860Z"),"firewall","Palladium monitoring Versatile",20047,new Date("2018-09-06T09:30:59.610Z")],obj: {_id: 28548,str: "quantifying Unions",num: 86955,date: new Date("2018-09-05T22:00:32.238Z"),array: [12690,47999,"Auto Loan Account Checking Account",90848,"Supervisor Gorgeous Object-based"]}});
    },

    function(coll) {
        return coll.insert({_id: 28549,str: "azure cross-platform",num: 78867,date: new Date("2018-09-06T11:13:33.525Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 28550,str: "intermediate",num: 65531,array: []});
    },

    function(coll) {
        return coll.insert({_id: 28551,str: "Chair",num: 21101,date: new Date("2018-09-05T23:23:45.004Z"),obj: {_id: 28552,str: "green",num: 50784,obj: {_id: 28553,str: "Polarised Legacy Fish",num: 73048,date: new Date("2018-09-06T05:32:35.060Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28554,str: "monetize",num: 12563,array: ["invoice Oklahoma South Dakota",{_id: 28555,str: "Checking Account e-tailers",num: 92140,date: new Date("2018-09-06T12:38:03.712Z"),array: ["experiences ability",new Date("2018-09-06T11:45:15.941Z")],obj: {}},[new Date("2018-09-06T11:54:59.856Z"),new Date("2018-09-05T21:27:57.944Z"),62775,{_id: 28556,num: 85164,date: new Date("2018-09-06T16:15:02.329Z"),array: [],obj: {_id: 28557,date: new Date("2018-09-06T11:22:42.011Z"),array: []}},"web-enabled North Dakota connect"],new Date("2018-09-05T21:24:22.608Z"),55077,6624,79459,84378,"task-force 24/365 PNG",new Date("2018-09-06T11:16:45.927Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28558,str: "transform",num: 74421,date: new Date("2018-09-05T22:55:10.111Z"),array: [],obj: {_id: 28559,num: 1373,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28560,str: "Principal",num: 53893,date: new Date("2018-09-06T12:58:10.460Z"),array: [new Date("2018-09-05T20:00:53.577Z"),new Date("2018-09-06T00:01:22.764Z"),62672,"application Multi-lateral Hills",11579,[],"Fantastic Plastic Home Loan Account",58662,"SQL Paradigm Gloves",{_id: 28561,num: 74073,date: new Date("2018-09-05T22:23:29.874Z"),array: [],obj: {}},{_id: 28562,str: "workforce Distributed methodologies",num: 49525,date: new Date("2018-09-06T19:32:27.772Z"),array: [],obj: {_id: 28563,str: "Keyboard Rubber navigating",date: new Date("2018-09-06T04:59:49.889Z"),obj: {}}},new Date("2018-09-06T16:20:04.457Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28564,str: "Investor Papua New Guinea",num: 51660,date: new Date("2018-09-06T05:49:31.365Z"),array: [],obj: {_id: 28565,array: [new Date("2018-09-06T04:46:15.228Z"),"Gambia capacity Buckinghamshire","Refined redundant Grove",41980,{_id: 28566,str: "Designer",num: 51859,date: new Date("2018-09-05T22:14:53.006Z"),obj: {}},"Gorgeous Concrete Table",{_id: 28567,str: "SSL",num: 89638,date: new Date("2018-09-06T07:33:39.111Z"),array: [new Date("2018-09-05T21:52:45.294Z"),29034,"Avon Toys Frozen"],obj: {_id: 28568,str: "grey",num: 91540,date: new Date("2018-09-06T10:00:01.252Z"),array: []}},new Date("2018-09-06T10:31:39.951Z"),43213,[67927,[]],"innovative",50555],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28569,str: "program bluetooth",num: 7382,date: new Date("2018-09-06T13:14:28.273Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28570,str: "Awesome Rubber Soap",num: 72432,array: ["Investment Account methodology",new Date("2018-09-06T08:47:57.015Z"),"Intelligent global compelling",96154,"ROI",new Date("2018-09-06T19:10:31.259Z"),"connect",[],{_id: 28571,str: "program",num: 37125,date: new Date("2018-09-06T01:17:39.622Z"),array: [],obj: {_id: 28572,str: "Electronics Investment Account deposit",num: 84412,date: new Date("2018-09-06T04:20:54.494Z")}},new Date("2018-09-06T16:20:28.256Z"),[75109,35811,{_id: 28573,str: "neural",date: new Date("2018-09-06T18:44:20.539Z"),array: [],obj: {_id: 28574,date: new Date("2018-09-05T22:20:22.631Z"),array: []}}]]});
    },

    function(coll) {
        return coll.insert({_id: 28575,str: "Hong Kong Dollar Auto Loan Account",num: 76384,date: new Date("2018-09-05T22:54:02.749Z"),array: [new Date("2018-09-06T05:09:54.105Z"),new Date("2018-09-05T21:28:02.484Z"),48988,"Frozen",new Date("2018-09-06T11:11:08.389Z"),62682,10966,"Checking Account Hong Kong Dollar Multi-lateral","Ball analyzing schemas",60973,34565,"hacking",{_id: 28576,str: "Industrial Comoro Franc",num: 60510,date: new Date("2018-09-06T00:51:37.715Z"),array: [new Date("2018-09-06T16:48:57.369Z"),"Tanzanian Shilling blue US Dollar"],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28577,str: "Steel",num: 78798,date: new Date("2018-09-06T07:32:57.534Z"),array: [70465,"modular Locks",new Date("2018-09-06T02:37:47.981Z"),3211,new Date("2018-09-06T08:36:54.127Z"),new Date("2018-09-06T18:58:17.549Z"),"synergize Singapore Integration",[10749,[]],new Date("2018-09-06T05:39:16.514Z"),68925,{_id: 28578,str: "Grass-roots",num: 61971,date: new Date("2018-09-06T19:18:38.732Z"),array: ["National Identity Belize","Delaware Armenian Dram","e-markets Home Loan Account"],obj: {_id: 28579,date: new Date("2018-09-06T11:59:07.394Z"),array: [new Date("2018-09-06T17:40:46.582Z")],obj: {}}},{_id: 28580,str: "Industrial",num: 69017,array: [],obj: {_id: 28581,str: "Investment Account Sports",num: 67855,date: new Date("2018-09-05T22:13:39.381Z"),array: [],obj: { _id: 28582 }}}],obj: {_id: 28583,str: "Sports application Representative",num: 79484,date: new Date("2018-09-06T14:07:59.335Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28584,str: "THX back up salmon",num: 40891,date: new Date("2018-09-06T13:29:51.872Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28585,str: "Incredible Rubber Tuna",num: 2774,date: new Date("2018-09-06T00:04:06.503Z"),array: [57238,"Multi-channelled",[],new Date("2018-09-06T01:34:53.478Z"),"Programmable ADP CSS",58507,[],"Flats Savings Account",new Date("2018-09-05T23:10:51.586Z"),"online",{_id: 28586,num: 52376,date: new Date("2018-09-06T13:07:43.559Z"),array: [new Date("2018-09-05T22:27:34.584Z"),69029],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28587,num: 45928,date: new Date("2018-09-06T13:10:19.584Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28588,str: "Right-sized Associate invoice",num: 28911,date: new Date("2018-09-06T04:14:18.278Z"),array: [],obj: {_id: 28589,str: "Mouse back up cross-platform",num: 25878,obj: {_id: 28590,str: "out-of-the-box bypassing",num: 14210,date: new Date("2018-09-06T15:05:53.411Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28591,str: "Ergonomic Metal Chicken e-tailers",num: 648,date: new Date("2018-09-06T05:14:54.484Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28592,str: "Generic systems Devolved",num: 20383,date: new Date("2018-09-05T23:57:37.493Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28593,str: "Associate Producer",num: 31652,date: new Date("2018-09-06T06:34:47.399Z"),array: [new Date("2018-09-06T17:42:24.211Z"),new Date("2018-09-06T05:06:15.968Z"),58279,30298,"input RSS generating",new Date("2018-09-06T03:23:19.362Z"),[],"Avon","Handmade Plastic Salad",new Date("2018-09-06T07:56:01.459Z"),{_id: 28594,str: "discrete",num: 87972,date: new Date("2018-09-06T04:01:59.657Z"),array: [new Date("2018-09-06T03:27:39.163Z")],obj: {}},[],2494,"Connecticut open architecture"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28595,str: "metrics Home Micronesia",num: 53613,date: new Date("2018-09-06T04:09:27.912Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28596,str: "User-centric compressing Marshall Islands",obj: {_id: 28597,str: "value-added",num: 91336,date: new Date("2018-09-05T22:38:53.575Z"),array: [new Date("2018-09-06T18:47:28.339Z"),"Computers","secondary neural","payment Vermont",81104,new Date("2018-09-05T21:45:01.916Z"),38431,[],new Date("2018-09-06T11:32:10.738Z"),20721,"Square Serbia Response","recontextualize"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28598,str: "Small",num: 45620,array: [new Date("2018-09-05T21:41:33.316Z"),new Date("2018-09-06T13:59:12.103Z"),"panel actuating",24365,37676,[],11915,{_id: 28599,str: "SAS CSS",num: 23475,date: new Date("2018-09-06T12:40:44.470Z"),array: [],obj: {_id: 28600,date: new Date("2018-09-06T14:43:42.982Z")}},"New Hampshire Arkansas",[],"Analyst mindshare Directives"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28601,str: "Money Market Account SMS payment",num: 30456,date: new Date("2018-09-06T02:29:11.840Z"),array: ["Brand Representative",[],new Date("2018-09-06T19:20:00.986Z"),new Date("2018-09-05T21:09:42.186Z"),"JSON Lead Granite",73086,82034,76459],obj: {_id: 28602,num: 6295,date: new Date("2018-09-06T19:40:17.434Z"),array: [new Date("2018-09-06T05:08:35.501Z"),[61668,[]],"auxiliary mesh",75709,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28603,str: "Lead Shoes",num: 45291,date: new Date("2018-09-06T16:37:04.647Z"),array: [54943,91319,new Date("2018-09-06T02:39:17.751Z"),{_id: 28604,num: 14454,date: new Date("2018-09-06T04:14:38.839Z"),array: [new Date("2018-09-06T14:08:53.475Z"),new Date("2018-09-06T06:01:47.536Z")],obj: {_id: 28605,num: 78827,array: [],obj: {}}},"Money Market Account Poland","Auto Loan Account","partnerships Function-based",new Date("2018-09-06T15:47:48.887Z"),"generate orange",9149,44229,[],"client-driven Generic Lilangeni",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28606,str: "Factors Valleys yellow",num: 4446,date: new Date("2018-09-05T23:47:30.134Z"),array: [new Date("2018-09-06T15:09:20.364Z"),{_id: 28607,str: "Rand Namibia Dollar virtual",num: 41662,date: new Date("2018-09-06T01:13:51.736Z"),array: [],obj: {}},new Date("2018-09-06T08:19:27.187Z"),"visionary","interface wireless back up",59940,new Date("2018-09-05T23:58:21.101Z"),28574,44400,[{_id: 28608,num: 79148,date: new Date("2018-09-06T13:01:39.939Z"),array: [],obj: {}},"Bolivar Fuerte Squares",[]],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28609,str: "models Refined Concrete Computer extend",num: 92942,date: new Date("2018-09-06T14:11:57.818Z"),array: [new Date("2018-09-06T04:33:18.243Z"),70758,[],"Tennessee","IB innovative FTP",new Date("2018-09-06T08:04:08.421Z"),"primary",[],{_id: 28610,str: "Czech Republic mobile",num: 50013,date: new Date("2018-09-06T03:48:32.951Z"),array: [],obj: {_id: 28611,str: "withdrawal incentivize",num: 46674,obj: {}}},84513,new Date("2018-09-06T08:19:07.910Z"),new Date("2018-09-06T19:14:50.829Z"),16715],obj: {_id: 28612,str: "Computers static Organized",date: new Date("2018-09-06T04:01:51.324Z"),array: ["Extension Harbors",16301,new Date("2018-09-06T01:06:29.309Z"),[]],obj: {_id: 28613,date: new Date("2018-09-05T20:08:12.793Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 28614,str: "hack Avon Yen",num: 80056,date: new Date("2018-09-06T03:22:27.815Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28615,str: "withdrawal deposit Gloves",num: 28635,date: new Date("2018-09-06T07:44:29.136Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28616,str: "firewall paradigms",date: new Date("2018-09-06T14:23:52.213Z"),array: ["Handcrafted Books system","standardization connecting","navigate instruction set portals",new Date("2018-09-05T20:20:12.275Z"),28849,new Date("2018-09-06T11:44:56.912Z"),{_id: 28617,str: "technologies Montana",num: 93895,date: new Date("2018-09-05T22:56:44.896Z"),array: [72376,[],79752,new Date("2018-09-06T19:34:35.327Z"),77430,new Date("2018-09-05T20:48:52.675Z"),40534,"Applications"],obj: {_id: 28618,str: "reboot",num: 51232,date: new Date("2018-09-06T07:13:11.933Z"),array: [],obj: {}}},"deposit"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28619,str: "Tasty Fresh Towels Diverse e-tailers",num: 25441,date: new Date("2018-09-06T10:11:41.972Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28620,str: "Iranian Rial",num: 15787,date: new Date("2018-09-06T09:02:37.211Z"),array: [72767,"South Georgia and the South Sandwich Islands navigate","Automotive",new Date("2018-09-06T18:03:55.424Z"),new Date("2018-09-05T21:06:07.528Z"),"Personal Loan Account Identity",50973,new Date("2018-09-06T01:54:04.229Z"),{_id: 28621,str: "Neck copying",num: 71638,date: new Date("2018-09-06T05:23:55.764Z"),array: [],obj: {}},{_id: 28622,str: "Fiji Dollar Wooden",num: 75515,date: new Date("2018-09-06T07:26:11.674Z"),array: [],obj: {_id: 28623,obj: {_id: 28624,num: 41113,date: new Date("2018-09-06T06:56:51.336Z")}}},37900,[62921],"South Dakota"]});
    },

    function(coll) {
        return coll.insert({_id: 28625,str: "Tasty Rubber Tuna Plastic",num: 3333,date: new Date("2018-09-06T15:46:38.196Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28626,str: "HDD",num: 94713,date: new Date("2018-09-06T05:53:46.120Z"),obj: {_id: 28627,num: 70093,date: new Date("2018-09-06T03:02:00.957Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28628,str: "Accounts",num: 50918,date: new Date("2018-09-06T01:03:07.843Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28629,str: "Fall",num: 91763,date: new Date("2018-09-06T06:26:02.926Z"),array: [],obj: {_id: 28630,str: "Auto Loan Account",num: 53722,date: new Date("2018-09-06T08:51:18.494Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 28631,str: "Isle bandwidth Bedfordshire",num: 35473,date: new Date("2018-09-05T20:18:44.812Z"),obj: {_id: 28632,str: "Shoes Corporate Chair",num: 10570,date: new Date("2018-09-06T14:24:59.354Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28633,str: "digital",num: 22273,date: new Date("2018-09-06T05:07:22.546Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28634,str: "withdrawal vortals indexing",num: 53757,date: new Date("2018-09-05T21:39:37.489Z"),array: [{_id: 28635,str: "productize Awesome New Hampshire",num: 42881,date: new Date("2018-09-06T04:19:36.976Z"),array: [],obj: {}},new Date("2018-09-06T15:16:39.891Z"),88029,89229,[81920],"Switzerland",new Date("2018-09-05T22:22:01.724Z"),new Date("2018-09-06T18:57:07.028Z"),45694,"orange Awesome Steel Salad Frozen",84513,new Date("2018-09-06T17:40:53.196Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28636,str: "application",num: 92007,date: new Date("2018-09-05T22:48:30.346Z"),array: [[new Date("2018-09-06T14:19:45.199Z"),14678,"secondary optimal","Global","Syrian Arab Republic turn-key"],new Date("2018-09-06T11:32:28.001Z"),14009,{_id: 28637,str: "primary overriding",num: 58419,date: new Date("2018-09-06T18:38:46.440Z"),array: [],obj: {_id: 28638,str: "Cross-platform",num: 83912,date: new Date("2018-09-06T11:28:53.715Z"),obj: {}}},new Date("2018-09-06T07:52:39.626Z"),{_id: 28639,str: "Communications Niue",date: new Date("2018-09-06T07:55:33.768Z"),obj: {}},"matrix EXE",new Date("2018-09-05T21:21:10.820Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28640,str: "teal",num: 28290,date: new Date("2018-09-06T02:50:37.055Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28641,str: "communities Response Ville",num: 10801,date: new Date("2018-09-06T08:37:07.189Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28642,str: "invoice National",num: 67829,date: new Date("2018-09-06T08:31:35.975Z"),array: [32530,new Date("2018-09-06T15:49:35.041Z"),"Niue PNG",new Date("2018-09-06T11:45:51.847Z"),{_id: 28643,str: "Directives Intelligent primary",date: new Date("2018-09-06T19:24:25.284Z"),array: [85946,[],[new Date("2018-09-06T01:30:35.260Z"),new Date("2018-09-06T19:05:21.882Z"),new Date("2018-09-06T01:28:22.504Z")],440],obj: {_id: 28644,str: "cutting-edge Palladium architect",num: 84549,obj: {_id: 28645,num: 16858,array: []}}},"Architect deliverables programming",62201,"withdrawal",34542,27168],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28646,num: 48273,date: new Date("2018-09-06T10:37:38.182Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28647,str: "Alley",num: 55480,date: new Date("2018-09-06T05:09:57.993Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28648,str: "copy expedite transparent",num: 21018,date: new Date("2018-09-06T14:32:22.588Z"),array: [new Date("2018-09-06T03:29:14.533Z"),new Date("2018-09-06T16:27:49.743Z"),"Incredible",2559,["Silver Tools"],6664,"Bedfordshire",[],new Date("2018-09-06T17:21:06.040Z"),{_id: 28649,num: 38618,date: new Date("2018-09-06T12:37:23.189Z"),array: ["Practical Legacy",[]],obj: {_id: 28650,str: "Orchestrator",num: 15255,date: new Date("2018-09-06T17:04:20.793Z"),array: [],obj: {_id: 28651,obj: {}}}},"Salad New Israeli Sheqel",28040]});
    },

    function(coll) {
        return coll.insert({_id: 28652,str: "quantifying Chilean Peso Unidades de fomento Director",num: 97295,date: new Date("2018-09-06T08:05:14.627Z"),array: [new Date("2018-09-06T18:26:11.265Z"),77741,6335,"Home Loan Account deposit","Generic Plastic Computer",new Date("2018-09-06T07:32:27.152Z"),[[],"invoice connecting",57433,"Officer"],{_id: 28653,str: "Branding",num: 46365,date: new Date("2018-09-06T01:36:10.458Z"),array: ["invoice Handmade Wooden Tuna mobile",new Date("2018-09-06T05:42:39.831Z")],obj: {}},new Date("2018-09-06T09:15:03.636Z"),{_id: 28654,str: "budgetary management Money Market Account",num: 89973,date: new Date("2018-09-06T10:15:29.768Z"),array: [],obj: {_id: 28655,date: new Date("2018-09-06T01:38:06.540Z"),array: [new Date("2018-09-06T03:08:39.798Z")],obj: {_id: 28656,str: "capability",num: 13285,array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 28657,str: "Home",num: 96868,date: new Date("2018-09-06T16:20:18.678Z"),array: ["sticky e-commerce",43775,"Cheese",new Date("2018-09-06T01:37:40.446Z"),{_id: 28658,str: "Bedfordshire Home Loan Account Administrator",num: 59045,date: new Date("2018-09-06T08:59:24.793Z"),array: [],obj: {}},new Date("2018-09-06T15:06:28.835Z"),2922,58181,[],{_id: 28659,str: "payment Dynamic",num: 14540,date: new Date("2018-09-06T09:39:36.601Z"),obj: {}},17763],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28660,str: "Springs",num: 99924,date: new Date("2018-09-06T03:06:47.809Z"),array: [],obj: {_id: 28661,num: 62789,date: new Date("2018-09-06T16:28:49.891Z"),array: [new Date("2018-09-06T04:24:03.415Z"),92902,"navigating Security",35037,"Delaware",[],83161,{_id: 28662,str: "Dynamic",num: 57685,date: new Date("2018-09-05T23:46:09.672Z"),obj: {}},new Date("2018-09-06T09:37:06.149Z"),"Austria Security Nebraska",{_id: 28663,str: "solid state",num: 9022,array: [],obj: {_id: 28664,str: "calculate calculate",date: new Date("2018-09-06T12:46:46.014Z"),array: [new Date("2018-09-06T08:40:16.813Z")],obj: {}}},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 28665,str: "explicit bypass Eritrea",num: 32758,date: new Date("2018-09-06T14:47:17.550Z"),array: [],obj: {_id: 28666,str: "Platinum platforms Mongolia",date: new Date("2018-09-05T23:44:31.181Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28667,str: "bypass Buckinghamshire unleash",num: 77364,date: new Date("2018-09-06T02:56:09.865Z"),array: ["Mall Sports","platforms back-end",32292,new Date("2018-09-05T21:19:53.265Z"),39252,new Date("2018-09-06T13:46:19.316Z"),{_id: 28668,str: "Generic Rubber Fish UAE Dirham",num: 5915,date: new Date("2018-09-06T00:45:18.034Z"),obj: {}},30553,85575,new Date("2018-09-06T14:32:41.670Z"),{_id: 28669,str: "Personal Loan Account Gorgeous Concrete Shoes",num: 34220,date: new Date("2018-09-06T18:53:04.615Z"),array: [],obj: {_id: 28670,str: "Tajikistan algorithm",num: 70094,date: new Date("2018-09-06T07:54:17.865Z"),obj: {_id: 28671,array: [[],"transmitting","utilize"]}}},{_id: 28672,num: 25857,date: new Date("2018-09-06T09:28:14.316Z"),array: ["Romania",new Date("2018-09-06T14:26:53.800Z")]},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28673,str: "Gorgeous input Borders",num: 98,date: new Date("2018-09-06T12:51:14.359Z"),array: [new Date("2018-09-05T21:01:23.322Z"),94205,new Date("2018-09-06T16:31:30.117Z"),[],"Shores Producer EXE","Cambridgeshire CSS Guarani",new Date("2018-09-06T04:46:21.376Z"),new Date("2018-09-06T03:02:44.499Z"),"Music",14481,65825],obj: {_id: 28674,str: "Washington Infrastructure",num: 5777,date: new Date("2018-09-06T04:28:15.614Z"),array: [94776,84022],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28675,num: 6051,date: new Date("2018-09-06T16:53:49.237Z"),array: [{_id: 28676,str: "Technician",num: 86874,array: [],obj: {_id: 28677,str: "Multi-channelled virtual",num: 41535,date: new Date("2018-09-06T18:57:13.316Z"),array: [],obj: {}}},[new Date("2018-09-06T16:45:28.042Z")],23348,new Date("2018-09-06T18:19:04.783Z"),"program internet solution",{_id: 28678,str: "cyan Integration Personal Loan Account",num: 90951,date: new Date("2018-09-06T02:10:22.571Z"),obj: {}},66167,"User-friendly Awesome eyeballs",71916,14808,new Date("2018-09-06T09:50:04.958Z"),new Date("2018-09-06T15:36:00.603Z"),new Date("2018-09-06T04:25:16.331Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28679,str: "Concrete",num: 58631,date: new Date("2018-09-05T21:22:44.973Z"),array: [],obj: {_id: 28680,num: 80395,date: new Date("2018-09-06T18:10:04.343Z"),array: [new Date("2018-09-06T13:55:36.535Z"),36225,91558,"Outdoors Salad",{_id: 28681,str: "Corporate AGP",num: 8860,date: new Date("2018-09-05T20:14:38.380Z")},{_id: 28682,str: "Colorado Steel",array: [],obj: {_id: 28683,str: "navigating",date: new Date("2018-09-06T14:16:40.072Z"),array: [new Date("2018-09-06T19:35:38.634Z"),{_id: 28684,str: "Taka",num: 90171,date: new Date("2018-09-06T18:22:15.191Z"),array: [],obj: {}}]}},"Clothing",["auxiliary Borders web services",new Date("2018-09-06T08:38:35.054Z"),98087],{_id: 28685,num: 82042,obj: {}},[],new Date("2018-09-05T23:09:47.660Z"),"Mouse",18043]}});
    },

    function(coll) {
        return coll.insert({_id: 28686,num: 40488,array: [{_id: 28687,str: "Haiti",num: 91843,date: new Date("2018-09-06T03:36:30.481Z"),array: [new Date("2018-09-06T04:01:14.141Z"),"Beauty Bacon",9429,"SMS Group Intelligent",[]],obj: {}},new Date("2018-09-06T07:52:38.522Z"),new Date("2018-09-06T03:40:55.024Z"),62682,"Unbranded Plastic Computer Antigua and Barbuda",{_id: 28688,str: "Chief Identity",num: 6526,date: new Date("2018-09-06T10:55:55.709Z"),obj: {_id: 28689,str: "Villages contextually-based",num: 35824,date: new Date("2018-09-05T22:55:49.927Z"),array: []}},{_id: 28690,str: "Mauritius Rupee aggregate Rubber",date: new Date("2018-09-06T13:23:47.727Z"),array: [],obj: {_id: 28691,num: 89117,date: new Date("2018-09-06T00:10:21.326Z"),array: [86870,[new Date("2018-09-06T04:57:10.255Z")]],obj: {_id: 28692,num: 38798,array: [89458,"Synchronised withdrawal"]}}},{_id: 28693,str: "transmit Direct Berkshire",num: 12778,obj: {}},new Date("2018-09-06T13:11:38.934Z")],obj: {_id: 28694,date: new Date("2018-09-06T04:04:47.634Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28695,str: "Fish Towels",num: 58735,date: new Date("2018-09-06T10:33:11.745Z"),array: ["South Carolina Underpass",new Date("2018-09-06T18:53:00.608Z"),68003,new Date("2018-09-05T22:25:00.692Z"),8046,"Cambridgeshire exploit"],obj: {_id: 28696,str: "Nevada Stravenue",num: 29415,date: new Date("2018-09-06T06:01:09.223Z"),array: ["incentivize",2316,{_id: 28697,num: 92867,date: new Date("2018-09-06T17:05:00.126Z"),obj: {}},"attitude-oriented",[],new Date("2018-09-05T23:59:12.112Z"),62676,new Date("2018-09-05T21:03:56.486Z"),new Date("2018-09-06T17:20:12.936Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 28698,str: "Metal",num: 36897,date: new Date("2018-09-06T17:53:28.514Z"),array: [new Date("2018-09-06T11:31:42.331Z"),"virtual",new Date("2018-09-06T12:00:34.837Z"),84680,{_id: 28699,str: "holistic optimize",date: new Date("2018-09-05T22:19:06.144Z"),array: [],obj: {}},23161,"Wallis and Futuna Product Chips",[new Date("2018-09-05T22:38:01.376Z"),"Throughway",{_id: 28700,num: 17056,date: new Date("2018-09-06T08:25:42.914Z")},"Chair pixel",41400,72983,[]]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28701,str: "digital",num: 67417,date: new Date("2018-09-06T00:33:44.780Z"),array: [],obj: {_id: 28702,str: "Chair",num: 74376,date: new Date("2018-09-05T20:41:05.878Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 28703,str: "program",num: 7244,date: new Date("2018-09-06T00:20:04.837Z"),array: [61476,{_id: 28704,str: "deposit",num: 25939,date: new Date("2018-09-06T10:50:09.518Z"),array: []},"payment",92531,new Date("2018-09-05T23:03:43.989Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28705,str: "portal",num: 2227,date: new Date("2018-09-05T23:10:13.337Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28706,str: "maroon",num: 61525,date: new Date("2018-09-06T10:01:25.668Z"),array: [],obj: {_id: 28707,str: "Intelligent Rubber Cheese redundant Mauritius Rupee",num: 87040,date: new Date("2018-09-06T12:00:17.435Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28708,str: "Credit Card Account Cambridgeshire",num: 12390,date: new Date("2018-09-05T23:10:18.420Z"),array: ["Taka Future-proofed transmitting","auxiliary",new Date("2018-09-06T16:02:03.124Z"),[],62801,60417,{_id: 28709,str: "pricing structure Rustic Fantastic Cotton Shoes",obj: {}},"Intelligent Fresh Fish Gloves web-enabled",new Date("2018-09-05T20:17:12.850Z"),new Date("2018-09-06T09:32:26.013Z"),[{_id: 28710,str: "Administrator International",num: 97118,date: new Date("2018-09-06T18:38:02.062Z"),array: [],obj: {_id: 28711,num: 45057,date: new Date("2018-09-06T07:14:37.773Z"),array: [new Date("2018-09-06T03:20:46.452Z")],obj: {_id: 28712,str: "parsing alarm Keyboard",num: 14900,date: new Date("2018-09-06T14:50:30.350Z"),array: [[],92610,"overriding Orchestrator payment"]}}},32680],{_id: 28713,date: new Date("2018-09-05T20:01:14.949Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28714,str: "Bedfordshire Michigan alarm",num: 88957,date: new Date("2018-09-06T17:02:27.472Z"),array: [96221,"Generic interface","Frozen Architect networks",[],{_id: 28715,str: "Jewelery Maine",num: 35070,date: new Date("2018-09-05T21:24:33.697Z"),array: [],obj: {_id: 28716,str: "Interactions Strategist alarm",num: 55503,date: new Date("2018-09-05T23:05:16.784Z"),obj: {_id: 28717,str: "Communications bypassing Home Loan Account",num: 95843,date: new Date("2018-09-06T01:26:14.510Z"),array: [],obj: {}}}},new Date("2018-09-06T18:39:24.455Z"),"service-desk port",new Date("2018-09-06T05:31:39.201Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28718,str: "Clothing",date: new Date("2018-09-06T01:23:45.807Z"),array: [72307,"Dong generate District","Frozen",{_id: 28719,str: "Belarus Tasty Rubber Bike demand-driven",num: 14078,date: new Date("2018-09-06T04:51:13.407Z"),array: [],obj: {}},30821,new Date("2018-09-06T13:05:05.977Z"),new Date("2018-09-06T03:01:19.131Z"),[],new Date("2018-09-06T16:51:11.470Z"),"moratorium invoice"],obj: {_id: 28720,str: "Handcrafted Soft Hat lime back-end",num: 70011,array: [63704,new Date("2018-09-06T10:08:30.609Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 28721,str: "Generic Steel Bacon",num: 62983,date: new Date("2018-09-06T01:24:05.895Z"),array: [],obj: {_id: 28722,num: 57368,date: new Date("2018-09-06T08:42:25.938Z"),array: ["seize Data",42244,new Date("2018-09-06T09:07:13.912Z"),"Fresh Cambridgeshire",[new Date("2018-09-05T22:08:15.709Z"),{_id: 28723,str: "multi-byte",num: 13996,array: ["copying",49189,{_id: 28724,str: "index Soap violet",date: new Date("2018-09-06T05:40:32.316Z"),array: [],obj: {}}],obj: {_id: 28725,str: "alarm modular",num: 93099,date: new Date("2018-09-06T01:51:30.635Z"),obj: {}}}],[],29846,new Date("2018-09-06T10:13:17.416Z"),"hack Regional Fantastic Rubber Salad",new Date("2018-09-06T01:21:37.463Z"),16002],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28726,str: "bluetooth",num: 52311,date: new Date("2018-09-06T19:19:11.470Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28727,str: "web-readiness Ball",num: 47392,date: new Date("2018-09-06T10:50:52.642Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 28728,str: "Ergonomic platforms scalable",num: 18928,date: new Date("2018-09-06T06:14:47.911Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28729,num: 1891,date: new Date("2018-09-05T22:09:47.951Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28730,str: "Barbados",num: 49486,date: new Date("2018-09-06T00:46:42.729Z"),array: [new Date("2018-09-06T18:06:19.836Z"),"Fantastic Parkway Dalasi","Tuna Intranet",51396,"Berkshire",new Date("2018-09-06T06:43:49.867Z"),new Date("2018-09-06T00:02:18.340Z"),new Date("2018-09-05T22:58:32.875Z"),22495,{_id: 28731,str: "synergies bandwidth-monitored",date: new Date("2018-09-06T14:35:48.692Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28732,str: "Texas Direct",num: 14136,date: new Date("2018-09-06T04:48:07.900Z"),array: [[7819,{_id: 28733,str: "Soft",date: new Date("2018-09-06T04:12:54.139Z"),array: [],obj: {_id: 28734,str: "Fantastic Frozen Cheese Home",num: 25361,date: new Date("2018-09-05T23:43:18.301Z"),obj: {}}}],[37129],"help-desk","Alaska RSS",new Date("2018-09-06T00:17:58.135Z"),10954,new Date("2018-09-06T17:30:50.864Z"),new Date("2018-09-06T05:45:42.359Z"),{_id: 28735,str: "Cambridgeshire",num: 21628,array: []},"Small Fresh COM",{_id: 28736,str: "Michigan",num: 19128,array: [],obj: {}},[71577,new Date("2018-09-06T10:00:47.188Z"),new Date("2018-09-06T12:13:50.874Z")],"workforce black"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28737,str: "Analyst Lead Avon",num: 91570,date: new Date("2018-09-06T14:28:37.748Z"),array: [],obj: {_id: 28738,str: "paradigm monetize ubiquitous",num: 35708,date: new Date("2018-09-06T01:50:27.420Z"),array: ["reinvent Outdoors analyzing",new Date("2018-09-06T08:46:34.197Z"),"niches",[],76570,16357,"programming Russian Federation hacking",new Date("2018-09-05T20:12:23.475Z"),[new Date("2018-09-06T09:55:04.621Z")],2668]}});
    },

    function(coll) {
        return coll.insert({_id: 28739,str: "sensor Intelligent",num: 95812,date: new Date("2018-09-06T10:43:50.029Z"),array: [[],44698,2158,new Date("2018-09-06T00:50:28.395Z"),"payment Electronics",{_id: 28740,str: "Forward",num: 3582,date: new Date("2018-09-06T09:50:08.280Z"),array: [80929,94130,new Date("2018-09-06T02:02:52.558Z")],obj: {}},"wireless transmit","optical Grocery",3081,new Date("2018-09-05T20:19:18.681Z"),{_id: 28741,num: 83938,date: new Date("2018-09-06T04:02:23.500Z"),array: [],obj: {_id: 28742,num: 77399,obj: {_id: 28743,str: "Progressive innovative",date: new Date("2018-09-05T22:01:47.483Z"),array: [{_id: 28744,str: "Executive",num: 88757,date: new Date("2018-09-05T23:49:22.160Z")},[]]}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28745,str: "bandwidth South Georgia and the South Sandwich Islands Analyst",num: 8423,date: new Date("2018-09-06T10:04:50.743Z"),array: ["bandwidth connecting",new Date("2018-09-06T08:30:17.732Z"),20724,[],new Date("2018-09-06T04:40:10.931Z"),{_id: 28746,obj: {_id: 28747,str: "Steel",num: 62441,date: new Date("2018-09-06T11:16:43.928Z"),array: [[],34564],obj: {_id: 28748,str: "Supervisor calculating intuitive",num: 90750,date: new Date("2018-09-06T11:11:04.733Z"),array: [new Date("2018-09-06T00:56:10.072Z"),new Date("2018-09-06T19:38:19.142Z")],obj: {}}}},"Fully-configurable Maryland real-time","withdrawal Outdoors",{_id: 28749,num: 67427,date: new Date("2018-09-06T13:28:45.097Z"),array: []},73805,[25128,{_id: 28750,str: "Bedfordshire",num: 37125,array: [],obj: {}}],new Date("2018-09-06T09:25:22.225Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28751,str: "implement",num: 51139,date: new Date("2018-09-06T18:49:41.249Z"),array: [48091,{_id: 28752,str: "Steel",num: 16995},new Date("2018-09-06T01:44:12.979Z"),new Date("2018-09-05T20:08:08.868Z"),["matrix","Intelligent reciprocal cutting-edge","ability European Unit of Account 9(E.U.A.-9)"],new Date("2018-09-06T19:13:27.365Z"),97772,11183,[],77204,"optical deposit Assimilated",{_id: 28753,str: "SMTP silver cultivate",num: 86664,date: new Date("2018-09-06T09:41:12.787Z"),array: [],obj: {_id: 28754,str: "Tasty Shoes",num: 51513,obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28755,str: "Malta California online",num: 96894,date: new Date("2018-09-06T07:13:04.411Z"),array: [],obj: {_id: 28756,str: "Lead compress program",num: 29912,date: new Date("2018-09-06T19:29:26.993Z"),array: [57374,96645,"backing up Direct interface","Money Market Account info-mediaries Chair",[],new Date("2018-09-06T15:06:40.833Z"),61183,new Date("2018-09-06T07:16:01.475Z"),[],new Date("2018-09-06T15:38:43.446Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28757,str: "bluetooth transmit",num: 97043,date: new Date("2018-09-06T02:43:12.700Z"),obj: {_id: 28758,num: 94532,date: new Date("2018-09-06T09:38:13.965Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28759,str: "secured line Human",num: 36522,date: new Date("2018-09-06T13:41:33.394Z"),array: [],obj: {_id: 28760,str: "instruction set",num: 39743,date: new Date("2018-09-05T22:01:18.136Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 28761,str: "reboot",num: 23317,date: new Date("2018-09-06T13:11:48.900Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28762,str: "content",num: 59543,date: new Date("2018-09-06T11:15:20.633Z"),array: [49328,"ADP Armenian Dram",63952,"Investment Account Steel Customer-focused","Group Drives 5th generation",new Date("2018-09-06T12:55:58.810Z"),new Date("2018-09-06T11:24:01.310Z"),{_id: 28763,str: "redundant payment Designer",date: new Date("2018-09-06T12:55:06.474Z"),array: [],obj: {_id: 28764,str: "Awesome",num: 11801,date: new Date("2018-09-05T21:39:41.589Z"),obj: {_id: 28765,num: 60924,date: new Date("2018-09-06T00:56:52.434Z"),array: [],obj: {}}}},[],"Inlet compress synthesizing",{_id: 28766,str: "Wooden Mississippi SMS",num: 650,obj: {_id: 28767,array: [79275]}},new Date("2018-09-06T07:40:31.078Z"),new Date("2018-09-06T11:59:29.697Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28768,str: "Avon Director",num: 38443,date: new Date("2018-09-06T09:35:19.783Z"),array: [new Date("2018-09-06T07:10:40.548Z"),{_id: 28769,str: "mobile",num: 53095,date: new Date("2018-09-06T12:16:07.072Z"),array: [[],81716],obj: {_id: 28770,num: 39513,date: new Date("2018-09-06T03:25:48.479Z"),array: [],obj: {_id: 28771,str: "1080p Pitcairn Islands",array: []}}},"Configuration Stravenue",new Date("2018-09-06T00:48:12.617Z"),["harness Terrace"],"indexing Jamaica",62941,[],48209,84198,new Date("2018-09-06T12:52:32.807Z"),{_id: 28772,num: 861,date: new Date("2018-09-06T13:25:01.150Z")},99381],obj: {_id: 28773,str: "Intelligent magnetic",num: 55594,date: new Date("2018-09-05T22:42:58.164Z"),array: [new Date("2018-09-06T14:47:26.307Z"),"Soap Handmade",{_id: 28774,num: 39134,obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 28775,str: "Steel",num: 49209,date: new Date("2018-09-06T10:05:29.873Z"),array: ["Sausages Sharable XSS",62550,new Date("2018-09-06T03:05:32.707Z"),{_id: 28776,num: 3861,date: new Date("2018-09-06T02:52:15.387Z"),array: [],obj: {_id: 28777,str: "Illinois Health",array: [],obj: {}}},"Technician Mission transmitter","Reverse-engineered Accountability virtual",67049,new Date("2018-09-05T21:04:42.115Z"),new Date("2018-09-06T18:21:32.230Z"),{_id: 28778,str: "Fish invoice compressing",num: 16524,date: new Date("2018-09-05T22:11:14.337Z"),obj: {_id: 28779,str: "Cambridgeshire",num: 41296,date: new Date("2018-09-06T15:52:09.396Z"),array: [[],19815],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 28780,str: "quantify Plains Checking Account",num: 59072,date: new Date("2018-09-06T06:46:29.045Z"),array: [],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "num": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $substrCP: ["Polarised withdrawal",19,0] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromString: {dateString: "2018-09-05T20:35:10.438Z",format: "%u-%U-%d-%u-%U-%d-%H-%u-%L",onError: { $zip: {inputs: [[13174,'$obj.num'],[{ $dateToString: {date: { $dateToParts: {date: { $dayOfMonth: { $dateToString: { date: '$date' } } },timezone: "Europe/Isle_of_Man",iso8601: false} },timezone: "America/Caracas"} }],["deposit","Incredible Wooden Pants Money Market Account",'$obj.str'],[{ $rtrim: { input: '$str' } },"Rubber National","maximized"],[]],useLongestLength: false} },onNull: '$obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "global",v: new Date("2018-09-06T16:31:57.997Z")},{k: "deposit rich",v: '$num'},{k: "local area network Practical",v: false},{k: "Automotive",v: true}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.num'],['$obj.obj.obj.str','$obj.obj.obj.str'],["knowledge base Executive"],[true]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $multiply: [] }],{ $sqrt: 79080 }] }, _id: 0}}],

        [{$project: {a: { $range: [9,20,12] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.num'],[],[],['$obj.obj.str',"infomediaries Macedonia"]],defaults: []} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "driver fuchsia",v: 5997}]] } }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $isoWeekYear: { $dayOfWeek: { $dateFromParts: {isoWeekYear: 84419,isoWeek: { $floor: '$obj.obj.num' },isoDayOfWeek: { $log: [5383,29882] },minute: { $multiply: [] },second: { $add: [] },timezone: "EST5EDT"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transmit",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "New Jersey",v: false},{k: "deposit Kwacha Awesome Steel Bike",v: "Grocery Investment Account deposit"},{k: "e-markets",v: false},{k: "application eyeballs Florida",v: 19221}]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $hour: { $year: { $isoWeekYear: { $dayOfMonth: { $millesecond: { $dayOfWeek: { $month: { $isoDayOfWeek: { $minute: { $year: { $isoWeek: { $second: { $dateFromParts: {isoWeekYear: { $abs: 86704 },millisecond: '$obj.obj.num',timezone: "Australia/Yancowinna"} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[27831,18848],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $week: { $second: { $month: { $year: { $millesecond: { $dateToString: {date: { $isoWeek: { $dayOfMonth: { $isoWeekYear: { $hour: { $minute: '$obj.date' } } } } },format: "%G-%Y-%U-%L-%V-%G",timezone: "Africa/Porto-Novo",onNull: { $dateFromString: {dateString: "2018-09-06T19:28:19.295Z",timezone: "Asia/Istanbul"} }} } } } } } },iso8601: true} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfMonth: { $second: { $isoDayOfWeek: { $toDate: { $dayOfWeek: { $month: { $isoWeek: { $week: { $millesecond: { $dateToString: { date: { $isoDayOfWeek: { $isoDayOfWeek: new Date("2018-09-06T15:03:05.231Z") } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',82699,96967],[{ $dateToString: {date: { $millesecond: { $year: { $dateToParts: { date: { $isoWeekYear: { $dayOfMonth: { $week: { $dayOfYear: { $isoWeek: { $hour: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T06:41:42.300Z"),format: "%Y-%S-%d-%L-%Y-%H-%U-%%-%H-%u-%m",timezone: "Asia/Macao"} } } } } } } } } } } } },onNull: { $zip: {inputs: [[],['$obj.obj.str',{ $toString: { $millesecond: { $isoDayOfWeek: { $isoWeek: { $dateFromParts: {isoWeekYear: { $ceil: 84686 },isoWeek: { $exp: '$obj.num' },hour: { $indexOfArray: [{ $reverseArray: [['$obj.obj.str']] },{ $arrayToObject: [[]] },11] }} } } } } }],['$num'],[],[]],useLongestLength: true} }} },"Assurance"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],92887] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str',{ $toString: { $arrayElemAt: [['$obj.num','$obj.obj.num'],'$obj.num'] } }],in: { $mod: [34219,20631] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfWeek: { $year: { $dateToParts: {date: { $second: { $isoDayOfWeek: { $dateToString: {date: '$obj.obj.date',onNull: { $arrayToObject: [[['$obj.obj.str',"engineer Rubber repurpose"],[13897,82937,25782]]] }} } } },timezone: "Brazil/DeNoronha",iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],60426] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$date'],49891] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],46432] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "turn-key Books",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home",v: new Date("2018-09-06T01:38:57.042Z")}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'merlin',in: { $multiply: [94553,'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: { $millesecond: { $hour: new Date("2018-09-06T13:18:18.851Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: "Gorgeous convergence content",chars: "Checking Account programming"} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'ford',in: { $log: [23650,'$$ford'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],10866] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: { $concat: ["Communications","local Personal Loan Account",'$obj.str'] } },'$str'],[26577],[false,75384],['$obj.str',{ $toUpper: "Bedfordshire United Arab Emirates" }],[{ $trunc: { $cmp: [{ $month: '$obj.obj.obj.date' },{ $arrayElemAt: [[],'$obj.obj.num'] }] } },'$obj.num','$num']]] }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $dateFromParts: {year: { $abs: '$obj.num' },month: { $indexOfArray: [{ $filter: {input: [],cond: { $lte: [{ $arrayElemAt: [[{ $concat: [] }],79992] },{ $objectToArray: '$$this' }] }} },{ $trim: { input: "USB calculate USB" } }] },hour: { $indexOfArray: [{ $concatArrays: [['$obj.obj.obj.num',{ $indexOfArray: [{ $reverseArray: [['$obj.num']] },{ $arrayToObject: [[{k: "Assistant transmit Springs",v: '$obj.num'}]] },6] }],[],[{ $concat: ['$str',{ $concat: [] },"implementation",'$obj.obj.obj.str'] }]] },{ $arrayElemAt: [['$str'],64992] },5] },minute: { $exp: 88277 },second: { $add: [51338,90663,{ $floor: '$obj.obj.obj.num' }] },timezone: "Asia/Yekaterinburg"} } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $and: [{ $substrCP: ['$obj.obj.str',6,3] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],56886] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T19:20:02.186Z"),format: "%V-%G-%u-%G-%H"} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "interactive Quality",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str','$str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Object-based",'$obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Intelligent Concrete Salad",chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $subtract: [6901,'$obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $toString: { $minute: { $week: { $dayOfWeek: { $isoWeekYear: { $hour: { $second: { $dayOfWeek: { $millesecond: { $minute: { $dayOfMonth: { $hour: { $toDate: { $month: { $year: { $week: { $dateToString: {date: new Date("2018-09-06T06:12:45.075Z"),timezone: "Pacific/Palau",onNull: "Nebraska Pizza Fantastic"} } } } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.num'],in: { $ln: 59401 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.str'],['$num'],[{ $substrCP: ["invoice Station Industrial",15,3] }],[],[],[{ $dateToString: {date: { $second: { $dateFromString: {dateString: "2018-09-06T07:41:58.522Z",format: "%G-%Z-%d-%G-%M-%m-%z-%Z-%u-%H",onError: { $arrayElemAt: [[],73677] },onNull: "lavender Internal Baby"} } },timezone: "Asia/Colombo"} },'$obj.str',{ $trim: {input: "payment",chars: '$obj.obj.str'} }]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["object-oriented conglomeration firewall"],cond: { $gt: [{ $toUpper: '$obj.obj.str' },{ $dateToString: { date: new Date("2018-09-05T21:12:26.617Z") } }] }} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $rtrim: {input: "blue Corporate collaborative",chars: '$str'} } }, _id: 0}}],

        [{$project: {a: { $hour: new Date("2018-09-06T16:30:06.402Z") }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[23817,'$obj.obj.num'],41717] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T00:34:54.328Z",onError: { $arrayElemAt: [[61372,41607],'$num'] },onNull: "Rubber Tasty"} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfWeek: { $dayOfMonth: { $dayOfMonth: { $dateToString: {date: '$obj.date',format: "%S-%w-%d-%M-%G-%z"} } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToParts: { date: { $dayOfYear: { $week: { $toDate: { $toLower: "wireless client-server" } } } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $concat: ['$obj.obj.str'] },16,5] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Steel bypass Mayotte" }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',timezone: "Africa/Ceuta",onNull: "Focused Handcrafted Soft Chips Louisiana"} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $ltrim: { input: '$str' } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%G-%u-%m-%H-%V-%H-%H-%%",timezone: "America/Menominee",onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.obj.str',chars: { $toLower: "Coordinator Refined Cotton Car" }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',{ $substrCP: ['$str',6,1] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $minute: { $dayOfMonth: { $dayOfWeek: { $dayOfYear: { $hour: { $toDate: { $concatArrays: [[51563,'$obj.num'],[],["digital Multi-tiered"],[]] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',14,7] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',timezone: "America/Halifax",onNull: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[80786]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $arrayElemAt: [[],92877] } },"Angola withdrawal withdrawal"],[18494],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%M-%S-%S-%L-%w-%S-%j-%L-%M-%z-%z",timezone: "Africa/Ouagadougou",onNull: { $arrayToObject: [[]] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[12142],[],[],[{ $toLower: '$str' },"compressing Virginia withdrawal",'$str']] }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $dayOfWeek: { $millesecond: { $hour: { $millesecond: { $minute: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-05T21:16:21.433Z",format: "%u-%w-%G-%Z-%%-%%-%M"} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],42028] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],33010] }, _id: 0}}],

        [{$project: {a: { $toUpper: "one-to-one" }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T08:01:35.160Z",timezone: "America/Argentina/Jujuy",onNull: { $substrCP: ['$obj.obj.str',17,20] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Credit Card Account",v: true},{k: "technologies whiteboard",v: { $dateFromString: {dateString: "2018-09-05T20:38:04.104Z",format: "%H-%M-%d-%G-%G-%z-%V-%G-%w-%z-%Y",timezone: "Europe/Uzhgorod",onNull: { $isoWeek: { $year: { $dayOfWeek: '$obj.date' } } }} }}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "monitor interface Personal Loan Account",v: false}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $size: [[]] },'$obj.obj.num'],27033] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "models cyan",v: '$obj.obj.date'},{k: "modular",v: { $rtrim: {input: { $toLower: '$obj.obj.obj.str' },chars: "gold Future"} }}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Regional Ergonomic Fresh",chars: { $toUpper: '$str' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],[],[{ $trim: {input: '$obj.str',chars: "capacitor"} },"Money Market Account",'$obj.obj.obj.str'],[89182,'$obj.obj.num',20444]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $toUpper: "Health feed" } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $trim: {input: { $substrCP: ["Direct Industrial",19,15] },chars: "EXE"} },'$str'],['$obj.obj.num',{ $log10: '$obj.obj.num' }],[83616]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "firewall Uzbekistan",v: true},{k: "Integration Union",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $subtract: ['$obj.obj.obj.num','$num'] }],85457] }, _id: 0}}],

        [{$project: {a: { $toLower: "models Cross-group" }, _id: 0}}],

        [{$project: {a: { $hour: new Date("2018-09-06T05:52:26.734Z") }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: { $concat: ['$str','$str',"Alaska incentivize","index",{ $ltrim: { input: '$str' } }] },chars: "Home Loan Account Cayman Islands Dollar"} }],34729] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeek: { $dateToParts: { date: { $toDate: '$obj.obj.obj.date' } } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $isoWeek: { $dayOfWeek: { $dateToParts: {date: { $dayOfYear: { $dayOfMonth: { $month: { $isoWeekYear: { $week: { $minute: { $isoWeek: { $dateFromParts: {year: { $sqrt: 80662 },minute: { $divide: ['$obj.obj.num','$obj.num'] },millisecond: { $ceil: 4543 },timezone: "Singapore"} } } } } } } } },timezone: "Antarctica/Troll",iso8601: true} } } },timezone: "UCT"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $rtrim: { input: '$str' } },'$str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T16:19:24.659Z",format: "%V-%S-%G-%L-%S-%Y",onNull: { $toLower: { $ltrim: {input: { $concat: ["Orchestrator"] },chars: "redundant"} } }} } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [["Unbranded Wooden Car Licensed silver"],[],['$str',{ $toUpper: "bypass" },"grey Belgium Games"],[]] } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $toDate: { $objectToArray: '$obj.obj.obj.obj' } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["repurpose neural-net"]] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Tunnel",{ $toString: { $range: [1,12,5] } }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',45601],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Fantastic Rubber Soap Architect overriding",'$obj.obj.obj.str',{ $toString: { $toLower: '$obj.obj.str' } }]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Licensed Fresh Fish Square",chars: "Credit Card Account calculate"} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.obj.str',chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $ltrim: {input: { $trim: {input: "payment",chars: '$str'} },chars: '$obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $concat: ['$str','$obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],30697] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',9,11] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T11:39:43.884Z",timezone: "America/Thunder_Bay",onError: { $arrayToObject: [[{k: "Botswana payment",v: 30441},{k: "back up",v: '$obj.num'}]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[64159,49373],{ $ceil: '$obj.num' }] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $trim: {input: { $concat: ["turn-key migration Unbranded","Licensed Metal Soap circuit Virginia"] },chars: '$obj.str'} },"Haven"] }, _id: 0}}],

        [{$project: {a: { $concat: ["Agent",{ $substr: [{ $rtrim: {input: '$obj.obj.str',chars: '$obj.obj.obj.str'} },5,20] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],4223] }, _id: 0}}],

        [{$project: {a: { $range: [17,10,14] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toDate: { $reverseArray: [[{ $trim: {input: '$obj.obj.str',chars: { $ltrim: { input: '$obj.obj.obj.str' } }} }]] } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.str',chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfMonth: { $isoDayOfWeek: { $minute: { $minute: { $dateFromParts: {isoWeekYear: { $sqrt: '$obj.num' },isoDayOfWeek: { $abs: '$num' },hour: { $trunc: 52671 }} } } } } },format: "%d-%Y-%d-%U-%j-%m-%j-%H-%G",timezone: "Pacific/Bougainville"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[816],[],[{ $substrBytes: [{ $substrCP: ['$obj.str',19,14] },18,13] }],[41406,'$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Awesome" }, _id: 0}}],

        [{$project: {a: { $week: { $second: { $month: { $dateToParts: { date: { $isoDayOfWeek: { $toDate: { $minute: { $dayOfYear: { $isoWeekYear: new Date("2018-09-06T08:29:44.557Z") } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str','$obj.obj.obj.str',{ $trim: {input: "Denar Cambodia Ergonomic Wooden Fish",chars: "navigate Phased"} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',3,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: "Mobility" } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: '$obj.date',timezone: "Asia/Sakhalin"} }, _id: 0}}],

        [{$project: {a: { $concat: [{ $rtrim: {input: { $toLower: "internet solution Auto Loan Account Global" },chars: '$obj.obj.obj.str'} }] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToParts: {date: { $hour: { $week: { $isoWeek: { $toDate: { $rtrim: { input: "Personal Loan Account" } } } } } },iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: [{ $substrBytes: ['$str',5,14] },2,10] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $concat: [{ $toString: { $arrayToObject: [[{k: "Directives Rubber Incredible Steel Mouse",v: false}]] } },'$obj.obj.str'] },"methodologies"],cond: { $eq: [{ $isoWeek: { $dateToString: {date: new Date("2018-09-06T14:48:44.644Z"),timezone: "Europe/Podgorica"} } },{ $zip: {inputs: [[94630,61387],[],[],['$obj.obj.obj.str']],useLongestLength: true} }] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $ltrim: {input: { $rtrim: { input: '$obj.str' } },chars: "deposit"} },12,9] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeek: { $dateFromString: {dateString: "2018-09-05T22:59:16.093Z",timezone: "Africa/Johannesburg"} } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Louisiana",v: 99987}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[65117,'$obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $toLower: "Administrator Lead" },chars: { $substrCP: ['$obj.obj.obj.str',17,10] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["payment empower Michigan",19,11] },'$str',{ $toUpper: "indexing" }],54058] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $hour: { $week: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T15:31:47.434Z",timezone: "America/Cordoba",onNull: "PCI Incredible empowering"} } } } },timezone: "America/Argentina/Tucuman"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fresh redundant",v: { $ln: 29599 }},{k: "Unbranded Shoes",v: { $isoWeekYear: { $month: { $dateToString: {date: new Date("2018-09-05T23:34:10.690Z"),format: "%S-%H-%Z-%Y-%Z-%G-%m-%w-%S-%%-%H",onNull: { $map: {input: ['$obj.obj.obj.num'],as: 'jalen',in: { $add: ['$obj.num',{ $ceil: 98556 },37432,'$$jalen'] }} }} } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: { $substrBytes: ['$obj.obj.obj.str',13,13] } }],["multi-byte wireless",'$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[35583,'$obj.str'],[],[{ $dateToString: {date: new Date("2018-09-06T15:29:15.174Z"),format: "%Z-%S-%V-%L-%Y-%M"} }],[52333]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substr: ["Isle of Man relationships Finland",15,14] }],[],[1615]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Extended Frozen",{ $ltrim: {input: '$obj.str',chars: "productize"} },{ $rtrim: { input: { $toString: { $toLower: '$obj.obj.str' } } } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$str',7,20] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "online Connecticut",v: new Date("2018-09-06T09:04:57.200Z")},{k: "Jewelery SSL",v: { $substrBytes: ['$obj.obj.str',11,15] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[66136,25238,'$obj.num',{ $exp: '$obj.num' }],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',17,8] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "program",v: new Date("2018-09-06T15:02:37.022Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "mobile",v: false},{k: "Nigeria",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:28:29.277Z"),format: "%Y-%V-%d-%u-%S"} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T12:54:27.686Z",format: "%d-%u-%z-%w",onError: { $zip: {inputs: [[],[],['$obj.str']],useLongestLength: true} },onNull: { $arrayToObject: [[{k: "service-desk Books",v: "Awesome calculating"}]] }} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $second: '$obj.date' } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],49281] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Arizona Regional"],{ $add: [] }] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $hour: { $week: { $toDate: { $arrayElemAt: [[],86832] } } } } }, _id: 0}}],

        [{$project: {a: { $concat: ["open-source XSS"] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "reboot Intelligent Fresh Tuna cyan",v: '$obj.obj.num'},{k: "Upgradable Sleek Frozen Gloves",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],[],[63975,36909],['$obj.obj.num',30633,'$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfMonth: { $toDate: { $range: [0,3,9] } } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substrBytes: [{ $toUpper: "Auto Loan Account" },0,5] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: '$obj.obj.obj.str' }],64236] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Trinidad and Tobago Chief needs-based",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "SCSI parsing" } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $divide: [31043,'$obj.obj.obj.num'] },isoWeek: { $subtract: [3878,'$obj.obj.obj.num'] },hour: { $ln: 60353 },minute: { $pow: ['$obj.obj.obj.num','$num'] },second: { $mod: ['$obj.obj.num',10456] },millisecond: { $abs: '$obj.num' }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "synthesizing SAS digital",v: false},{k: "Personal Loan Account",v: "Cotton"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$str' },"FTP"],'$num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fish Practical Soft Pants",v: '$obj.obj.date'},{k: "Heights",v: new Date("2018-09-06T00:47:46.284Z")},{k: "Identity Concrete",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["JBOD Assimilated programming"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num','$obj.obj.obj.num',49463],4184] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $trim: {input: '$str',chars: "Gorgeous"} }],['$obj.obj.obj.num','$obj.obj.obj.num'],[],[],["Regional Unbranded","Multi-channelled world-class",{ $toLower: '$obj.obj.obj.str' }]] }, _id: 0}}],

        [{$project: {a: { $month: { $month: { $dateToParts: { date: { $isoDayOfWeek: { $second: { $dateToParts: { date: { $isoDayOfWeek: { $dayOfYear: { $year: { $dateFromParts: {isoWeekYear: { $exp: { $cmp: [{ $arrayElemAt: [["grow",'$str'],'$obj.obj.obj.num'] },{ $arrayElemAt: [[],75902] }] } },isoDayOfWeek: { $log: ['$obj.obj.num',73748] },hour: { $size: [[29175]] },minute: { $sqrt: 38890 },timezone: "Australia/Adelaide"} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[46467,46682]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',8,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "redundant",v: '$obj.obj.str'},{k: "application Legacy Investment Account",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $toString: { $concat: ["back up disintermediate Gloves",'$str'] } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toLower: "Ball" },"Reduced intangible Credit Card Account",'$str'],['$obj.obj.obj.num','$obj.obj.obj.num','$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: { input: "Bike" } },"solid state Program Gorgeous","mobile",'$str'],[],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toUpper: { $rtrim: { input: { $substrBytes: ["Home Loan Account",19,1] } } } },'$obj.obj.obj.str','$obj.str'],[],[],[false,new Date("2018-09-06T09:17:27.079Z")]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $year: { $dateFromParts: {year: { $ln: 65043 },month: { $exp: 26037 },day: 59295,hour: { $trunc: 26096 },second: { $indexOfArray: [{ $concatArrays: [[],[{ $toLower: '$obj.str' },'$obj.obj.str','$obj.str'],[],[false,'$obj.num']] },{ $dateToString: {date: new Date("2018-09-06T05:28:41.451Z"),format: "%z-%M-%S-%Y-%M-%V-%m-%U",onNull: { $substr: ["quantifying Ball frictionless",19,0] }} },11] },millisecond: { $log10: 87742 },timezone: "America/St_Johns"} } } }, _id: 0}}],

        [{$project: {a: { $month: { $month: { $dayOfMonth: { $dateFromParts: {year: { $pow: [48148,'$obj.obj.num'] },hour: { $floor: '$num' },minute: { $add: [] },second: { $add: [12223] },millisecond: { $exp: 8569 }} } } } }, _id: 0}}],

        [{$project: {a: { $month: { $second: { $hour: { $millesecond: { $dateToParts: {date: { $isoWeekYear: { $year: { $dateFromString: {dateString: "2018-09-06T17:05:02.865Z",format: "%L-%S-%U-%d-%u-%V-%j-%j-%H-%%",timezone: "US/Arizona",onError: { $range: [3,20,15] },onNull: { $arrayToObject: [[[],[{ $trim: { input: "web services" } }],[],[57987]]] }} } } },timezone: "Europe/Dublin",iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $ln: 34558 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[39461]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Rustic green Frozen",v: '$obj.num'}]] }, _id: 0}}],

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
