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
        return coll.insert({_id: 18732,str: "Maryland",num: 33784,date: new Date("2018-09-06T00:18:33.389Z"),array: [[],84631,new Date("2018-09-06T01:39:27.476Z"),"purple Tactics invoice","users","Tools Fish",new Date("2018-09-06T17:49:10.373Z"),new Date("2018-09-06T13:07:57.074Z"),91348,[],new Date("2018-09-06T04:29:02.144Z"),"innovative Web"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18733,str: "3rd generation monetize",num: 39664,date: new Date("2018-09-06T06:01:06.224Z"),obj: {_id: 18734,str: "Fantastic Wooden Bike",num: 26658,date: new Date("2018-09-06T18:11:10.338Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18735,str: "facilitate Customer-focused Technician",num: 12618,date: new Date("2018-09-06T01:57:09.194Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18736,str: "Virginia Armenian Dram",num: 72117,date: new Date("2018-09-06T18:14:15.928Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18737,str: "transmitting SMS input",num: 27158,date: new Date("2018-09-06T09:03:22.694Z"),array: [new Date("2018-09-05T21:05:27.905Z"),13128,85901,{_id: 18738,num: 55758,date: new Date("2018-09-05T22:04:48.983Z"),obj: {}},new Date("2018-09-06T09:36:25.474Z"),"Brook SMTP Kwanza","Serbia",new Date("2018-09-06T09:55:34.686Z"),"compressing wireless",79067,"Extensions Credit Card Account","card Steel experiences"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18739,str: "parsing Planner Intranet",num: 80110,date: new Date("2018-09-06T03:31:36.305Z"),array: ["parallelism fuchsia",new Date("2018-09-05T22:40:35.588Z"),89587,"client-driven",[],new Date("2018-09-06T05:36:18.487Z"),new Date("2018-09-06T12:43:00.396Z"),70432,99411,{_id: 18740,str: "Executive end-to-end",num: 8430,date: new Date("2018-09-06T03:30:53.452Z"),array: [new Date("2018-09-06T08:00:18.565Z")],obj: {_id: 18741,str: "Intelligent Granite Pants Tools",num: 23838,date: new Date("2018-09-06T05:19:24.180Z"),array: [],obj: {}}}],obj: {_id: 18742,str: "Sleek Granite Sausages program",num: 19503,date: new Date("2018-09-06T05:44:25.941Z")}});
    },

    function(coll) {
        return coll.insert({_id: 18743,str: "Frozen turquoise Kentucky",num: 79847,date: new Date("2018-09-06T02:15:28.782Z"),array: [{_id: 18744,date: new Date("2018-09-06T06:33:17.403Z"),array: [],obj: {}},new Date("2018-09-06T04:49:09.467Z"),36525,new Date("2018-09-06T10:15:01.174Z"),"Granite Extended Tasty",67765,5572,56191,"utilize Small quantifying",new Date("2018-09-06T10:03:02.264Z")],obj: {_id: 18745,str: "Toys payment back-end",array: [{_id: 18746,str: "Rubber",num: 65236,date: new Date("2018-09-05T21:19:55.046Z"),obj: {_id: 18747,str: "Cheese",num: 7432,date: new Date("2018-09-05T22:41:37.536Z"),array: []}},new Date("2018-09-06T05:41:33.597Z"),[],"feed",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18748,str: "Lesotho neural-net Product",date: new Date("2018-09-06T13:13:37.005Z"),array: [],obj: {_id: 18749,str: "backing up iterate",num: 3573,date: new Date("2018-09-06T16:45:37.128Z"),array: ["tan","Indonesia Analyst North Dakota",37097,new Date("2018-09-06T16:39:10.700Z"),65399,{_id: 18750,str: "Practical Frozen Gloves Concrete",num: 52447},54142,new Date("2018-09-06T02:55:18.396Z"),"transparent schemas Mount",new Date("2018-09-06T06:37:21.580Z"),new Date("2018-09-06T12:51:09.629Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 18751,str: "Avon Corporate",num: 82017,date: new Date("2018-09-05T20:11:57.973Z"),array: [new Date("2018-09-06T17:14:34.373Z"),[],82073,31291,{_id: 18752,date: new Date("2018-09-06T08:14:36.968Z"),array: ["olive streamline","Direct interactive",new Date("2018-09-05T20:19:00.376Z"),new Date("2018-09-06T06:16:44.169Z")],obj: {}},"View Specialist",[],new Date("2018-09-06T06:32:33.722Z"),[7859,"artificial intelligence"]]});
    },

    function(coll) {
        return coll.insert({_id: 18753,num: 68661,date: new Date("2018-09-06T00:30:43.491Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18754,str: "Wisconsin overriding",num: 82034,array: [[],new Date("2018-09-06T02:57:03.913Z"),34982,"hack",{_id: 18755,str: "Plains Cotton",num: 45622,date: new Date("2018-09-05T22:31:39.320Z"),obj: {_id: 18756,str: "Books maroon",num: 5995,date: new Date("2018-09-06T13:29:51.006Z"),array: [new Date("2018-09-05T22:15:41.572Z"),61523,96305],obj: {}}},{_id: 18757,str: "Gorgeous withdrawal virtual",num: 31335,date: new Date("2018-09-06T19:50:40.648Z"),array: [new Date("2018-09-06T03:40:45.446Z"),"generating Metrics Neck"],obj: {_id: 18758,obj: {}}},80558,"copying",new Date("2018-09-06T09:29:11.817Z"),"Savings Account",new Date("2018-09-06T15:48:17.525Z"),{_id: 18759,str: "virtual IB Chair",num: 35061,date: new Date("2018-09-06T17:19:59.031Z")}],obj: {_id: 18760,str: "North Carolina Rustic Wooden Ball Developer",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 18761,str: "Operative",num: 53403,date: new Date("2018-09-06T13:44:00.711Z"),array: ["Intelligent Concrete Chair motivating Wooden",12147,[],new Date("2018-09-06T03:10:53.844Z"),"Awesome",44584,17255,"parsing",96320,new Date("2018-09-05T23:57:12.586Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18762,str: "Chief Dam implement",num: 94296,date: new Date("2018-09-06T04:02:47.630Z"),array: ["Oregon",77979,"SMTP",new Date("2018-09-06T13:59:01.717Z"),new Date("2018-09-06T02:08:22.078Z"),new Date("2018-09-06T18:58:53.142Z"),new Date("2018-09-06T16:00:04.714Z"),"Investor Visionary",{_id: 18763,str: "backing up client-server calculate",num: 91527,date: new Date("2018-09-05T23:57:14.403Z"),obj: {_id: 18764,str: "Steel",num: 26753,date: new Date("2018-09-06T00:28:57.091Z"),array: [],obj: {_id: 18765,num: 28392,array: ["Handcrafted Fresh Hat Home deposit",57847],obj: {}}}},new Date("2018-09-06T08:01:02.468Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18766,str: "supply-chains Corporate",num: 73382,date: new Date("2018-09-05T21:08:50.104Z"),array: [84686,new Date("2018-09-05T20:16:55.945Z"),15378,[],new Date("2018-09-06T00:33:06.816Z"),"programming Self-enabling Seamless","back up Fantastic Cotton Pants",{_id: 18767,str: "redefine",num: 34099,date: new Date("2018-09-06T15:18:43.558Z"),array: [46369,new Date("2018-09-06T03:06:25.068Z"),"parsing withdrawal definition"],obj: {}},{_id: 18768,str: "hack Parks internet solution",num: 19776,date: new Date("2018-09-05T20:35:53.559Z"),obj: {_id: 18769,date: new Date("2018-09-06T01:27:15.608Z"),array: []}},new Date("2018-09-06T03:12:57.364Z"),new Date("2018-09-06T10:43:15.003Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18770,str: "Rand Namibia Dollar override",num: 9157,date: new Date("2018-09-06T05:42:13.179Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18771,str: "deposit",num: 44160,date: new Date("2018-09-05T23:59:48.369Z"),array: [new Date("2018-09-06T06:11:47.953Z"),24537,"enhance Human",new Date("2018-09-06T09:49:48.377Z"),58149,new Date("2018-09-06T10:49:18.783Z"),11368,23123,88456,"PNG Solomon Islands Dollar Fresh"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18772,str: "Intelligent Frozen Sausages invoice",num: 50341,date: new Date("2018-09-06T18:33:44.374Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18773,str: "Fantastic synthesize",date: new Date("2018-09-05T23:31:27.925Z"),array: ["orange","initiatives Chicken",new Date("2018-09-06T09:50:54.262Z"),new Date("2018-09-06T19:27:32.254Z"),{_id: 18774,str: "Pitcairn Islands",num: 51002,array: [],obj: {}},40684,85804,new Date("2018-09-06T05:01:28.624Z"),new Date("2018-09-05T21:14:27.163Z"),[],7660,"Shirt"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18775,str: "supply-chains PNG web-readiness",num: 20492,date: new Date("2018-09-06T03:26:44.782Z"),array: ["discrete","Strategist algorithm",[],new Date("2018-09-05T23:56:40.168Z"),{_id: 18776,str: "knowledge user sticky Awesome Cotton Mouse",num: 16523,date: new Date("2018-09-05T19:55:35.935Z"),array: ["Home Loan Account"],obj: {}},8475,new Date("2018-09-05T20:09:55.117Z"),"Wooden Bedfordshire mint green",35241,new Date("2018-09-06T01:59:12.743Z"),{_id: 18777,date: new Date("2018-09-06T13:56:06.085Z"),array: ["Car",17490,[]],obj: {}},new Date("2018-09-05T21:01:13.344Z"),[38403,[]]],obj: {_id: 18778,num: 46791,date: new Date("2018-09-06T04:51:01.129Z"),obj: {_id: 18779,str: "ability",num: 31905,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18780,str: "Avon synergize Lane",num: 17258,date: new Date("2018-09-06T10:03:56.452Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18781,str: "discrete Cambridgeshire",num: 42162,date: new Date("2018-09-06T11:32:42.202Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18782,str: "Incredible intranet productize",num: 80745,date: new Date("2018-09-06T05:57:37.045Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18783,str: "Soap Frozen collaboration",num: 50562,date: new Date("2018-09-05T22:17:38.544Z"),array: [new Date("2018-09-06T11:19:38.784Z"),64547,[59122,"SDD",new Date("2018-09-06T01:05:28.781Z")],"algorithm","Incredible back-end Money Market Account",new Date("2018-09-06T14:49:45.842Z"),20468,[],[21326,new Date("2018-09-06T10:08:28.337Z")],{_id: 18784,str: "Human purple Fall",num: 74652,date: new Date("2018-09-06T14:18:36.766Z"),array: [],obj: {_id: 18785,str: "transmit Digitized",num: 28247,date: new Date("2018-09-06T08:54:42.619Z"),array: [{_id: 18786,num: 95862,date: new Date("2018-09-06T11:59:29.586Z"),array: []}],obj: {}}},[]],obj: {_id: 18787,str: "Plastic disintermediate Checking Account"}});
    },

    function(coll) {
        return coll.insert({_id: 18788,str: "Group",num: 87779,date: new Date("2018-09-06T06:20:49.765Z"),array: [],obj: {_id: 18789,str: "virtual San Marino Handmade",num: 30814,date: new Date("2018-09-06T08:42:01.262Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 18790,num: 78682,date: new Date("2018-09-06T03:35:18.003Z"),array: [],obj: {_id: 18791,str: "deposit Pizza Club",num: 90814,date: new Date("2018-09-06T05:02:29.539Z"),array: [95564,3000,new Date("2018-09-06T14:21:06.221Z"),35570,{_id: 18792,str: "reboot",num: 69310,date: new Date("2018-09-06T18:38:09.610Z"),array: ["Saint Barthelemy Ball Arkansas",new Date("2018-09-06T13:06:35.065Z")],obj: {}},"Internal",[],new Date("2018-09-06T09:41:51.719Z"),new Date("2018-09-06T00:30:17.941Z"),7584,"protocol","American Samoa e-services feed"],obj: {_id: 18793,str: "local bluetooth",num: 42931}}});
    },

    function(coll) {
        return coll.insert({_id: 18794,str: "supply-chains Assistant Extended",num: 31858,date: new Date("2018-09-06T13:58:58.742Z"),array: [new Date("2018-09-05T23:18:40.107Z"),{_id: 18795,num: 7473,date: new Date("2018-09-06T19:15:17.336Z"),array: [],obj: {_id: 18796,str: "optimize Orchestrator",num: 96423,date: new Date("2018-09-06T07:45:03.815Z"),array: ["Organized teal",15513,45,new Date("2018-09-06T03:50:47.799Z")],obj: {}}},new Date("2018-09-06T02:53:48.681Z"),[],"Fort Ameliorated Arizona",new Date("2018-09-06T18:10:35.730Z"),37208,"multi-byte",55089,48645,new Date("2018-09-06T18:10:52.979Z"),[],"Personal Loan Account Egypt Research"]});
    },

    function(coll) {
        return coll.insert({_id: 18797,str: "transmitter",num: 36605,date: new Date("2018-09-06T15:22:13.318Z"),array: [new Date("2018-09-05T23:09:39.114Z"),"Branding Tennessee Fundamental",65688,[],71381,new Date("2018-09-06T13:41:42.814Z"),"Sleek primary",new Date("2018-09-06T18:04:51.873Z"),{_id: 18798,num: 11248,date: new Date("2018-09-06T02:33:52.208Z"),array: [],obj: {}},[{_id: 18799,str: "vertical Supervisor",num: 20988,array: [],obj: {_id: 18800,str: "Cotton hacking user-centric",date: new Date("2018-09-06T03:54:59.192Z"),array: [72907,"optical Shoes protocol","New Hampshire Incredible Frozen Pizza"],obj: {_id: 18801,num: 68831,array: []}}}],57949,new Date("2018-09-06T09:09:38.816Z"),58507],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18802,str: "Sausages",num: 2614,date: new Date("2018-09-05T20:14:26.216Z"),array: [],obj: {_id: 18803,str: "value-added Cotton auxiliary",num: 22298,date: new Date("2018-09-06T04:15:49.806Z"),array: [79000,new Date("2018-09-06T02:19:18.739Z"),{_id: 18804,date: new Date("2018-09-06T01:27:09.583Z"),obj: {}},"Pizza Cloned",new Date("2018-09-05T23:04:10.037Z"),new Date("2018-09-06T01:31:26.688Z"),"Producer deposit Metal",47117,24163,"North Carolina","content-based"],obj: {_id: 18805,str: "Intelligent Plastic Gloves time-frame",num: 32207,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18806,str: "Home Loan Account Fresh Garden",num: 76597,date: new Date("2018-09-06T05:06:43.479Z"),array: [],obj: {_id: 18807,str: "synthesize interfaces",num: 14004,date: new Date("2018-09-06T00:00:59.341Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18808,str: "silver",date: new Date("2018-09-06T12:45:23.788Z"),array: [36025,"Fresh bus",25389,new Date("2018-09-06T00:35:47.909Z"),new Date("2018-09-05T21:02:52.353Z"),[],93476,"Outdoors Industrial compress","Borders",new Date("2018-09-06T10:09:33.780Z"),{_id: 18809,str: "Alaska Sports",num: 39169,date: new Date("2018-09-06T14:32:40.871Z"),array: [],obj: {_id: 18810,str: "cyan",num: 22834,date: new Date("2018-09-05T19:58:07.941Z"),obj: {}}},{_id: 18811,num: 87303,date: new Date("2018-09-06T15:01:05.278Z"),array: [],obj: {_id: 18812,str: "Checking Account",num: 5750,date: new Date("2018-09-05T22:46:54.038Z"),array: [new Date("2018-09-06T19:31:10.215Z")],obj: {}}},[8267,"THX",[{_id: 18813,str: "frictionless",num: 88928,obj: {}}]],56153]});
    },

    function(coll) {
        return coll.insert({_id: 18814,str: "markets",num: 3978,date: new Date("2018-09-06T18:37:28.787Z"),array: [13311,14697,new Date("2018-09-05T23:20:15.777Z"),"invoice",[],"Wooden","invoice SDR architectures",new Date("2018-09-06T06:48:25.924Z"),"Manor Buckinghamshire",45943],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18815,str: "TCP Avon Rustic Rubber Shoes",num: 1559,date: new Date("2018-09-06T13:01:28.559Z"),array: [new Date("2018-09-06T00:42:00.828Z"),[],17241,5461,new Date("2018-09-06T06:32:35.667Z"),"Pa'anga e-business Personal Loan Account","Multi-lateral",{_id: 18816,str: "Forward Illinois Multi-tiered",num: 72853,date: new Date("2018-09-06T19:12:45.934Z"),array: [{_id: 18817,date: new Date("2018-09-06T03:46:41.632Z"),array: [new Date("2018-09-06T13:19:25.407Z"),"B2C Gorgeous Wooden Keyboard Progressive","e-tailers UIC-Franc Micronesia"],obj: {}}],obj: {}},95903,new Date("2018-09-06T09:00:29.769Z"),[],69733],obj: {_id: 18818,str: "transmitting visionary Handmade Metal Bike",num: 60673,date: new Date("2018-09-06T01:41:02.003Z"),array: [77350,["frictionless",new Date("2018-09-06T14:25:56.370Z")],{_id: 18819,num: 77503,date: new Date("2018-09-06T06:44:28.157Z"),obj: {_id: 18820,str: "web-readiness Director synthesize",num: 69215,obj: {_id: 18821,num: 66034,date: new Date("2018-09-06T09:00:18.167Z")}}}],obj: {_id: 18822,str: "Rubber",num: 93155,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18823,str: "Concrete applications Metrics",num: 48915,date: new Date("2018-09-06T04:23:46.897Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18824,str: "Soft Electronics Music",num: 41423,date: new Date("2018-09-06T02:21:05.730Z"),array: [2185,new Date("2018-09-06T15:24:42.891Z"),new Date("2018-09-06T09:10:42.064Z"),new Date("2018-09-06T05:09:31.256Z"),{_id: 18825,str: "Car e-services quantifying",num: 92212,date: new Date("2018-09-06T12:38:15.885Z"),array: []},"Frozen Chief interface",new Date("2018-09-06T08:12:09.539Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18826,str: "Dynamic",num: 10985,date: new Date("2018-09-06T03:34:55.362Z"),array: ["Palestinian Territory",new Date("2018-09-06T13:56:14.318Z"),55788,{_id: 18827,num: 95078,date: new Date("2018-09-06T12:57:16.095Z"),array: [],obj: {_id: 18828,str: "Industrial program New Mexico",array: [],obj: {}}},new Date("2018-09-06T18:53:16.969Z"),"Forward Inverse upward-trending",83399,243,new Date("2018-09-06T17:08:22.351Z"),43013]});
    },

    function(coll) {
        return coll.insert({_id: 18829,str: "Sudanese Pound SMTP",num: 77367,date: new Date("2018-09-06T16:03:07.628Z"),array: ["disintermediate Movies","Functionality magenta",[new Date("2018-09-06T18:17:49.482Z"),{_id: 18830,str: "payment",date: new Date("2018-09-06T18:57:22.150Z"),array: [63230],obj: {_id: 18831,str: "Down-sized",num: 35865,obj: {_id: 18832,num: 99226,date: new Date("2018-09-06T18:45:16.879Z"),array: [],obj: {}}}}],{_id: 18833,str: "Borders Licensed",num: 71665,date: new Date("2018-09-06T17:23:32.989Z")},"overriding back up hybrid",[],new Date("2018-09-06T04:06:22.618Z"),54683,73798,11391,new Date("2018-09-05T23:56:13.825Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18834,str: "analyzing Consultant",num: 6187,date: new Date("2018-09-06T18:53:06.633Z"),array: [new Date("2018-09-06T18:41:14.250Z"),new Date("2018-09-06T13:19:39.109Z"),31030,"expedite vertical",{_id: 18835,str: "Brazilian Real Centralized",num: 60704,date: new Date("2018-09-06T08:25:11.741Z"),array: [],obj: {_id: 18836,str: "Hat parsing Sleek",date: new Date("2018-09-06T03:50:06.650Z"),obj: {}}},"Brook monitor",12969,83795,["Balanced"],"JSON",{_id: 18837,str: "Cotton brand",num: 79541,array: []},new Date("2018-09-05T23:13:00.440Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18838,str: "Human Aruban Guilder",array: [],obj: {_id: 18839,str: "utilisation",num: 6216,date: new Date("2018-09-05T21:31:41.411Z"),array: [52158,new Date("2018-09-05T22:24:27.884Z"),"Small redundant generate",[3147,{_id: 18840,str: "Engineer wireless",num: 77550,date: new Date("2018-09-06T00:26:47.750Z"),array: [],obj: {}},50634],"Italy Sleek Rubber Soap architectures","Checking Account",[new Date("2018-09-05T22:51:20.223Z"),new Date("2018-09-06T14:50:21.396Z"),"cross-platform deposit",42692,{_id: 18841,num: 85633,date: new Date("2018-09-06T07:03:26.440Z"),array: [],obj: {_id: 18842,str: "Shoes withdrawal Handmade",num: 68952,date: new Date("2018-09-06T16:31:40.206Z")}},613],[new Date("2018-09-05T21:51:47.927Z"),91151],"matrix"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18843,str: "Land Cambridgeshire",num: 95753,date: new Date("2018-09-06T11:24:01.343Z"),array: [[],39067,"Dynamic","Associate vortals EXE",99782,"invoice channels Home",new Date("2018-09-05T20:46:30.224Z"),67288,new Date("2018-09-06T12:39:51.668Z"),"Savings Account back-end"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18844,str: "array Sharable",num: 80636,date: new Date("2018-09-06T19:27:08.278Z"),array: [new Date("2018-09-06T19:21:17.759Z"),new Date("2018-09-06T02:59:33.720Z"),[91834],"Money Market Account payment","payment",58952,{_id: 18845,str: "Granite",num: 60404,date: new Date("2018-09-06T02:04:55.056Z"),obj: {}},new Date("2018-09-06T06:09:51.482Z"),45294,"alarm matrix",new Date("2018-09-06T02:56:35.834Z"),new Date("2018-09-06T18:07:42.319Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18846,num: 88712,date: new Date("2018-09-06T15:54:27.923Z"),array: [],obj: {_id: 18847,str: "expedite Internal Total",num: 60701,date: new Date("2018-09-05T21:21:09.417Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 18848,str: "lavender Fantastic Metal Cheese",date: new Date("2018-09-06T02:11:19.497Z"),array: [],obj: {_id: 18849,str: "navigate morph Technician",num: 19042,date: new Date("2018-09-06T02:39:28.268Z"),array: ["Orchestrator payment",{_id: 18850,str: "Interactions program Costa Rican Colon",num: 26717,array: []},63108,new Date("2018-09-06T07:29:30.378Z"),"navigate Bacon","holistic","Savings Account deposit payment",new Date("2018-09-06T12:42:40.214Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18851,str: "CFA Franc BEAC mesh Officer",num: 90077,date: new Date("2018-09-05T20:45:10.263Z"),array: [],obj: {_id: 18852,str: "Developer Parks transmit",num: 43615,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 18853,str: "JSON Valley",num: 69160,date: new Date("2018-09-06T19:48:29.511Z"),array: ["cyan Tactics",new Date("2018-09-06T06:40:17.870Z"),"bluetooth program",new Date("2018-09-06T06:32:13.725Z"),"Extended",{_id: 18854,str: "United States Minor Outlying Islands",num: 28417,date: new Date("2018-09-06T01:10:53.444Z"),array: [],obj: {_id: 18855,num: 94492,date: new Date("2018-09-06T09:37:10.338Z"),array: [],obj: {}}},37044,71868,new Date("2018-09-06T14:47:42.487Z"),37048,new Date("2018-09-05T23:32:30.017Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18856,str: "Spring Lead Phased",num: 79004,date: new Date("2018-09-06T19:54:42.692Z"),array: ["Senior","Squares Liechtenstein violet","Incredible Soft Chips Plastic",new Date("2018-09-06T04:26:13.084Z"),20088,[],59761,new Date("2018-09-06T19:53:43.836Z"),new Date("2018-09-05T23:35:34.796Z"),58693],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18857,str: "Supervisor Ameliorated",num: 28535,date: new Date("2018-09-06T01:35:02.533Z"),array: [new Date("2018-09-05T23:39:15.988Z"),new Date("2018-09-06T18:12:29.936Z"),"plug-and-play Handmade Wooden Gloves FTP",32412,[80460,"Director",21054],{_id: 18858,str: "complexity Avon driver",num: 32779,date: new Date("2018-09-06T10:40:50.395Z"),array: ["Codes specifically reserved for testing purposes Intelligent Steel Chicken Licensed Fresh Chips",new Date("2018-09-06T05:06:40.765Z"),"Product hard drive",new Date("2018-09-06T01:14:16.344Z")],obj: {}},new Date("2018-09-06T08:49:44.907Z"),"Internal Incredible Applications",4955],obj: {_id: 18859,str: "card United Arab Emirates Fresh",num: 51364,date: new Date("2018-09-06T15:02:45.875Z")}});
    },

    function(coll) {
        return coll.insert({_id: 18860,str: "Indian Rupee purple",num: 26616,date: new Date("2018-09-06T09:33:16.464Z"),array: [],obj: {_id: 18861,str: "Legacy Forint port",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18862,str: "JSON Brand",num: 88106,date: new Date("2018-09-05T22:28:02.595Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18863,str: "Upgradable open architecture multi-byte",date: new Date("2018-09-06T11:53:38.273Z"),array: [],obj: {_id: 18864,str: "Saint Helena Pound North Dakota",num: 79465,date: new Date("2018-09-06T09:22:47.101Z"),array: [new Date("2018-09-06T18:40:41.864Z"),[24262,53174,"Angola"],new Date("2018-09-06T04:37:05.462Z"),"Cotton calculating",[93782,{_id: 18865,str: "Electronics Avon RAM",num: 67113,date: new Date("2018-09-06T00:11:22.562Z"),array: [],obj: {}},"Valley"],{_id: 18866,str: "enable",num: 63368,date: new Date("2018-09-06T16:59:50.549Z"),obj: {}},"needs-based Research Practical","Factors applications",new Date("2018-09-06T04:51:57.912Z"),[],{_id: 18867,num: 76660,date: new Date("2018-09-06T09:01:55.758Z"),array: []},new Date("2018-09-06T04:03:26.850Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 18868,str: "back-end payment",num: 20977,date: new Date("2018-09-06T00:21:13.060Z"),array: [64913,new Date("2018-09-06T06:44:08.291Z"),new Date("2018-09-06T04:05:04.627Z"),"Berkshire Kids","Malagasy Ariary","sky blue deposit",{_id: 18869,str: "Nepal COM Investor",num: 50545,date: new Date("2018-09-05T21:14:15.734Z"),array: [],obj: {_id: 18870,num: 64766,date: new Date("2018-09-06T08:30:18.872Z")}},[],18785],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18871,num: 67367,date: new Date("2018-09-06T07:20:45.340Z"),array: ["program port",35538,new Date("2018-09-06T18:33:40.642Z"),[new Date("2018-09-05T21:03:43.953Z"),99255],new Date("2018-09-06T13:30:28.545Z"),"Estates",86376,"Marketing Holy See (Vatican City State)","pink",{_id: 18872,str: "RSS",num: 56171,date: new Date("2018-09-06T06:20:18.576Z"),array: [48457],obj: {_id: 18873,str: "Chair optimizing copy",num: 69540,date: new Date("2018-09-06T08:17:41.609Z"),obj: {_id: 18874,str: "Fords methodology Intelligent Metal Table",array: [],obj: {}}}},{_id: 18875,str: "digital microchip",obj: {_id: 18876,num: 59596,date: new Date("2018-09-06T02:19:05.067Z"),array: []}},22141,"Missouri Checking Account Visionary",new Date("2018-09-06T05:53:29.451Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18877,str: "East Caribbean Dollar Steel Chicken",num: 21456,date: new Date("2018-09-06T11:39:04.562Z"),array: [95326,new Date("2018-09-06T05:07:10.655Z"),"Nepal",new Date("2018-09-06T03:46:00.737Z"),86647,72342,"neural",new Date("2018-09-06T08:00:26.420Z"),{_id: 18878,num: 23480,date: new Date("2018-09-06T00:02:48.361Z"),array: [],obj: {_id: 18879,str: "Chair",date: new Date("2018-09-06T02:15:03.335Z"),array: ["Rustic Soft Fish Toys fuchsia",80240,{_id: 18880,num: 27745,date: new Date("2018-09-06T18:32:45.364Z"),obj: {_id: 18881,str: "Advanced Accounts algorithm"}},[]],obj: {_id: 18882,num: 50497,date: new Date("2018-09-06T10:27:05.009Z"),array: []}}},new Date("2018-09-05T23:32:44.056Z"),new Date("2018-09-06T01:20:42.829Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18883,str: "Pants",num: 9070,date: new Date("2018-09-06T02:22:27.231Z"),array: [],obj: {_id: 18884,str: "Savings Account",num: 26286,date: new Date("2018-09-06T04:42:03.690Z"),array: ["Officer Cambridgeshire","Rubber Human",93942,92771,[new Date("2018-09-06T12:01:42.681Z"),{_id: 18885,array: [new Date("2018-09-05T23:24:12.703Z")]},new Date("2018-09-06T02:54:36.750Z"),new Date("2018-09-06T05:40:04.221Z"),{_id: 18886,str: "target",num: 81134,array: [],obj: {}}],[],"Persevering functionalities Unbranded Cotton Fish",36106,"deposit Investment Account",new Date("2018-09-06T06:47:08.208Z")],obj: {_id: 18887,str: "Home Loan Account Ergonomic Handcrafted Frozen Hat",num: 65105,date: new Date("2018-09-06T04:37:04.970Z"),array: [40683],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18888,str: "reboot",num: 65679,date: new Date("2018-09-06T15:53:46.540Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18889,str: "Soft compress",num: 4148,date: new Date("2018-09-05T21:16:14.771Z"),array: [82790,44291,"Unbranded Steel Computer Data",new Date("2018-09-06T09:14:30.065Z"),new Date("2018-09-05T22:43:48.635Z"),"engineer Investment Account fuchsia",{_id: 18890,str: "sensor Denar",num: 6031,date: new Date("2018-09-06T16:26:26.958Z"),array: [],obj: {_id: 18891,str: "pixel Garden",num: 8065,date: new Date("2018-09-06T01:23:42.087Z"),array: [new Date("2018-09-06T00:29:28.894Z"),[{_id: 18892,num: 28834,obj: {}},"Refined Plastic Chicken"],[],"Honduras Concrete lime"]}},{_id: 18893,str: "Metal",date: new Date("2018-09-06T01:34:49.234Z"),array: [{_id: 18894,num: 6167,obj: {}},96384,6947,16527],obj: {_id: 18895,num: 27196,date: new Date("2018-09-05T20:24:43.124Z"),array: []}},new Date("2018-09-06T07:57:19.492Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18896,str: "harness Savings Account Avon",num: 32474,array: [],obj: {_id: 18897,str: "Ergonomic Savings Account Planner",num: 16852,date: new Date("2018-09-05T22:03:59.820Z"),array: [32986,[],"Handmade Wooden Chips bandwidth",new Date("2018-09-06T03:28:51.164Z"),61951,"productivity",[],new Date("2018-09-05T21:39:10.537Z"),{_id: 18898,num: 37182,date: new Date("2018-09-06T19:05:31.331Z"),array: [92306],obj: {}},{_id: 18899,str: "Investment Account",num: 50649,date: new Date("2018-09-06T11:54:40.273Z")},new Date("2018-09-06T02:38:32.289Z"),"Gloves microchip",{_id: 18900,str: "USB application Ferry",date: new Date("2018-09-06T19:44:12.889Z"),array: [],obj: {_id: 18901,num: 26507,obj: {}}},"cross-platform"],obj: {_id: 18902,str: "1080p",date: new Date("2018-09-06T15:01:23.664Z"),array: [{_id: 18903,str: "transmit",date: new Date("2018-09-06T19:28:27.503Z"),array: []}],obj: {_id: 18904,str: "Maine Designer",date: new Date("2018-09-06T08:51:36.916Z"),array: [29271,new Date("2018-09-06T08:54:27.013Z"),"Orchestrator Customer Keyboard"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 18905,str: "deploy SSL Cambridgeshire",date: new Date("2018-09-06T12:12:00.035Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18906,str: "interfaces feed Product",num: 1356,date: new Date("2018-09-06T12:41:54.825Z"),array: [[],new Date("2018-09-05T21:32:11.115Z"),new Date("2018-09-05T22:45:50.203Z"),89538,{_id: 18907,str: "Future-proofed Principal matrices",num: 42047,date: new Date("2018-09-06T06:32:22.984Z"),array: [],obj: {_id: 18908,str: "Licensed Metal Towels Borders calculate",date: new Date("2018-09-05T23:02:32.963Z"),obj: {}}},new Date("2018-09-06T04:38:06.552Z"),"heuristic navigating",{_id: 18909,num: 46300,date: new Date("2018-09-06T12:35:04.961Z"),array: ["Clothing Cloned",new Date("2018-09-05T20:23:51.852Z"),66095],obj: {_id: 18910,str: "Bacon vortals",num: 35670,array: ["analyzing",43848,"deposit program"]}},new Date("2018-09-06T05:54:24.273Z"),[],90961,{_id: 18911,obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18912,str: "Incredible",num: 46755,date: new Date("2018-09-06T02:27:48.285Z"),obj: {_id: 18913,str: "Rufiyaa Avon",num: 98478,date: new Date("2018-09-06T17:54:16.491Z"),array: [{_id: 18914,str: "monitor Mouse encompassing",num: 44953,array: [],obj: {_id: 18915,num: 74215,date: new Date("2018-09-06T16:34:20.403Z"),array: [],obj: {}}},"Architect invoice",new Date("2018-09-06T07:00:09.215Z"),new Date("2018-09-06T00:51:53.017Z"),60380,"District",[new Date("2018-09-06T19:09:03.396Z"),16284,55996,new Date("2018-09-06T13:47:34.414Z"),"Supervisor mobile"],"Borders Lead open-source",new Date("2018-09-06T05:38:21.363Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18916,str: "system-worthy transmitting",num: 94409,date: new Date("2018-09-06T19:01:54.455Z"),array: [],obj: {_id: 18917,str: "solution Avon",num: 70876,array: [75860,new Date("2018-09-06T04:20:55.434Z"),new Date("2018-09-05T19:59:52.962Z"),"asymmetric Consultant gold",new Date("2018-09-06T03:48:34.514Z"),"Frozen Berkshire Concrete",{_id: 18918,str: "Rustic Soft Fish Money Market Account",num: 98711,date: new Date("2018-09-06T17:22:55.090Z"),array: [new Date("2018-09-05T21:49:59.622Z")],obj: {_id: 18919,str: "Shoes New Mexico",date: new Date("2018-09-06T02:40:48.638Z"),array: []}},"compress",46065,[79388,[],{_id: 18920,str: "Books",num: 9630,date: new Date("2018-09-05T21:00:18.373Z"),array: [],obj: {}}],[],[]],obj: {_id: 18921,date: new Date("2018-09-06T19:03:08.699Z"),array: ["SDD"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18922,num: 63735,date: new Date("2018-09-05T21:46:06.438Z"),array: [],obj: {_id: 18923,str: "synergize red USB",date: new Date("2018-09-05T20:33:39.696Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18924,str: "Tasty protocol",num: 99882,date: new Date("2018-09-06T11:31:08.638Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18925,str: "fault-tolerant",num: 3266,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18926,str: "Savings Account",num: 21283,date: new Date("2018-09-06T01:07:34.379Z"),obj: {_id: 18927,num: 55473,array: [],obj: {_id: 18928,str: "Handmade",date: new Date("2018-09-05T20:28:42.707Z"),array: [64903,54112,{_id: 18929,str: "Principal benchmark",date: new Date("2018-09-06T06:06:23.383Z"),array: [new Date("2018-09-06T12:29:27.614Z"),"Pizza primary back up",[]]},1368,new Date("2018-09-06T15:29:38.282Z"),"Intelligent Wooden Tuna architecture help-desk",{_id: 18930,num: 9287,date: new Date("2018-09-06T07:02:43.364Z")},"invoice",[],new Date("2018-09-06T13:25:51.840Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18931,str: "Personal Loan Account maroon multimedia",num: 5328,date: new Date("2018-09-06T02:04:41.076Z"),array: [[],"Vision-oriented Canada",new Date("2018-09-06T07:10:22.679Z"),80970,new Date("2018-09-06T10:42:44.575Z"),new Date("2018-09-06T15:42:10.567Z"),77335,{_id: 18932,num: 46380,date: new Date("2018-09-06T19:03:08.465Z"),array: [],obj: {}},12890,"morph"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18933,str: "Global",num: 61877,date: new Date("2018-09-06T00:58:15.058Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18934,str: "turquoise Garden",date: new Date("2018-09-06T05:12:11.307Z"),array: [[],29151,new Date("2018-09-06T05:03:19.437Z"),new Date("2018-09-05T22:47:41.613Z"),"tan Brand Liberian Dollar","Savings Account Money Market Account",[],40157],obj: {_id: 18935,str: "optimize",num: 51046,date: new Date("2018-09-06T09:46:20.469Z"),array: ["yellow Oval",70193,{_id: 18936,str: "harness Mouse",num: 35034,date: new Date("2018-09-06T07:42:39.616Z"),array: [],obj: {}},new Date("2018-09-05T23:12:54.177Z"),"copy optimizing Strategist"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18937,str: "markets",num: 46821,date: new Date("2018-09-06T16:06:51.296Z"),array: [],obj: {_id: 18938,num: 71534,date: new Date("2018-09-06T00:53:27.121Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18939,str: "Cotton Innovative",num: 99912,date: new Date("2018-09-06T09:39:58.120Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18940,str: "Metal Wooden",date: new Date("2018-09-06T10:40:32.563Z"),array: [],obj: {_id: 18941,str: "Home",num: 34341,date: new Date("2018-09-05T22:56:41.540Z"),array: ["lavender enhance New York",28535,new Date("2018-09-06T12:45:05.967Z"),new Date("2018-09-06T14:12:27.988Z"),"HTTP secured line",{_id: 18942,num: 14621,date: new Date("2018-09-06T03:59:22.703Z")},new Date("2018-09-06T01:44:20.186Z"),6980,"Gloves compelling Forward",[5565,[],new Date("2018-09-06T00:56:30.354Z"),41642,new Date("2018-09-06T14:54:21.105Z"),"SMTP Barbados"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18943,num: 14793,date: new Date("2018-09-06T04:38:32.403Z"),array: ["Andorra Lead Coordinator",new Date("2018-09-06T15:15:49.103Z"),27636,"system Indiana",97691,new Date("2018-09-05T20:59:13.386Z"),59377,{_id: 18944,str: "Fresh",num: 50151,date: new Date("2018-09-06T13:58:13.444Z"),array: [],obj: {_id: 18945,date: new Date("2018-09-06T15:16:49.265Z"),array: [],obj: {_id: 18946,str: "mobile driver",num: 72042,date: new Date("2018-09-06T17:11:20.407Z")}}},"approach Garden","Investment Account",[new Date("2018-09-06T19:29:35.155Z"),"Markets Money Market Account Costa Rican Colon",{_id: 18947,num: 72374,array: [],obj: {}}],34371],obj: {_id: 18948,str: "cross-platform Bedfordshire New York",num: 71252,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18949,str: "asymmetric",num: 35115,date: new Date("2018-09-05T20:23:13.991Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18950,str: "generating Bedfordshire",num: 52867,date: new Date("2018-09-06T15:06:42.617Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18951,str: "lavender",date: new Date("2018-09-06T06:20:45.000Z"),array: [],obj: {_id: 18952,num: 41109,array: [57494,"withdrawal",new Date("2018-09-06T00:42:12.373Z"),[new Date("2018-09-05T20:34:35.587Z"),"Rustic"],"Fantastic Cotton Chicken",new Date("2018-09-06T13:56:43.576Z"),27589,new Date("2018-09-06T16:05:55.168Z"),{_id: 18953,num: 76176,date: new Date("2018-09-05T20:25:54.632Z"),array: [[],73006],obj: {}},"hacking CSS","Turkey",[],71980],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18954,str: "override",num: 96396,date: new Date("2018-09-06T03:22:23.162Z"),array: ["feed Intelligent system",91941,new Date("2018-09-06T19:45:02.242Z"),"Kuwaiti Dinar website",{_id: 18955,str: "RSS fault-tolerant enable",num: 73064,date: new Date("2018-09-06T05:42:13.559Z"),array: [],obj: {_id: 18956,str: "Pizza PNG Dynamic",num: 94911,array: [new Date("2018-09-05T20:32:01.863Z"),new Date("2018-09-05T21:23:26.812Z")]}},new Date("2018-09-06T02:22:11.135Z"),15518,"input JBOD",[43961,{_id: 18957,num: 3571,date: new Date("2018-09-06T11:36:34.732Z"),obj: {_id: 18958,str: "Future",array: [[],new Date("2018-09-06T04:46:42.487Z"),{_id: 18959,str: "Credit Card Account Chicken Savings Account",date: new Date("2018-09-06T19:13:07.862Z"),obj: {}},"generating Credit Card Account Azerbaijan"]}}],32223],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18960,str: "cyan",num: 67990,date: new Date("2018-09-06T02:45:30.155Z"),array: [new Date("2018-09-06T14:43:33.683Z"),54988,"EXE Tasty Ergonomic",7370,"Outdoors circuit","customized",24425,new Date("2018-09-06T16:25:38.379Z"),new Date("2018-09-06T00:36:40.821Z"),new Date("2018-09-06T08:47:02.727Z"),{_id: 18961,str: "Pines Liaison",num: 33288,date: new Date("2018-09-06T10:12:47.726Z"),array: [],obj: {_id: 18962,str: "Credit Card Account Awesome Ergonomic Fresh Chair",num: 82598,date: new Date("2018-09-06T16:21:53.197Z"),array: []}},new Date("2018-09-06T09:45:22.247Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18963,str: "Idaho",num: 803,date: new Date("2018-09-06T06:24:46.104Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18964,str: "synthesize",num: 34173,date: new Date("2018-09-06T11:02:56.106Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18965,str: "mission-critical value-added seamless",num: 70751,date: new Date("2018-09-05T22:03:50.855Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18966,str: "primary",num: 65552,date: new Date("2018-09-06T03:37:24.957Z"),array: [],obj: {_id: 18967,num: 77564,date: new Date("2018-09-06T16:39:26.543Z"),array: [["supply-chains violet payment",new Date("2018-09-06T18:42:28.742Z"),new Date("2018-09-06T16:08:05.582Z"),94338,"SCSI back up",96440],54137,{_id: 18968,str: "Chief indigo",num: 78676,date: new Date("2018-09-06T01:09:35.839Z"),obj: {}},"Checking Account Baby",new Date("2018-09-06T15:43:03.732Z"),[],89037,"Fantastic Springs"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18969,str: "Saint Vincent and the Grenadines virtual",num: 23523,date: new Date("2018-09-06T01:04:14.820Z"),array: [],obj: {_id: 18970,num: 54051,date: new Date("2018-09-06T08:37:40.072Z"),array: [{_id: 18971,str: "navigate",date: new Date("2018-09-06T09:43:47.877Z"),array: [],obj: {_id: 18972,str: "hard drive client-server black",num: 77585,obj: {}}},"Serbia deposit Chief","Rustic Cotton Shirt",[new Date("2018-09-06T03:26:01.743Z"),33294,1680,"Tools Developer Human"],[],84516,33582,new Date("2018-09-06T15:37:58.422Z"),60734,"parse TCP"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18973,str: "National application",num: 33389,date: new Date("2018-09-06T04:09:03.723Z"),array: [new Date("2018-09-06T19:41:03.809Z"),30598,new Date("2018-09-06T02:59:32.430Z"),12280,"Alabama streamline",new Date("2018-09-06T17:58:16.973Z"),[5642],"Customizable Buckinghamshire",new Date("2018-09-05T22:28:43.386Z"),65015,new Date("2018-09-06T17:21:59.600Z"),{_id: 18974,str: "bandwidth",num: 42654,date: new Date("2018-09-06T09:04:10.903Z"),array: [],obj: {}}],obj: {_id: 18975,str: "deposit Analyst back up",num: 66568,date: new Date("2018-09-06T04:11:29.292Z"),array: [{_id: 18976,date: new Date("2018-09-06T08:54:03.107Z"),array: [],obj: {}},92297,"Orchestrator Intuitive","Legacy Money Market Account"]}});
    },

    function(coll) {
        return coll.insert({_id: 18977,str: "haptic Bike disintermediate",num: 37111,date: new Date("2018-09-06T11:44:05.408Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18978,str: "connecting",num: 5607,date: new Date("2018-09-06T07:04:03.263Z"),array: [],obj: {_id: 18979,str: "Agent withdrawal quantify",num: 77480}});
    },

    function(coll) {
        return coll.insert({_id: 18980,str: "application Dynamic New Hampshire",num: 56683,date: new Date("2018-09-05T20:44:57.654Z"),array: [9594,{_id: 18981,str: "Indiana",num: 31998,date: new Date("2018-09-06T10:12:26.197Z"),obj: {_id: 18982,str: "card",date: new Date("2018-09-06T10:42:14.991Z"),obj: {_id: 18983,num: 77275,array: [46071,"Gorgeous Cotton Shirt","Analyst Concrete Reverse-engineered"],obj: {}}}},[],[new Date("2018-09-06T16:42:04.303Z")],new Date("2018-09-06T01:12:42.718Z"),new Date("2018-09-06T06:20:03.996Z"),{_id: 18984,str: "Knolls",num: 13531,date: new Date("2018-09-06T14:26:08.353Z"),array: [],obj: {}},46995,97455],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18985,str: "intermediate microchip",num: 66831,date: new Date("2018-09-06T07:52:11.972Z"),array: [42894,"Strategist Checking Account",new Date("2018-09-06T18:05:07.992Z"),21102,new Date("2018-09-06T15:12:24.396Z"),77095,new Date("2018-09-06T01:14:55.210Z"),{_id: 18986,str: "Borders PCI",num: 45324,array: [],obj: {}},new Date("2018-09-06T13:35:15.583Z"),["6th generation quantifying"],{_id: 18987,str: "e-tailers",num: 87693,date: new Date("2018-09-06T15:11:30.715Z"),obj: {_id: 18988,date: new Date("2018-09-06T19:04:12.612Z"),array: ["Egypt",[],new Date("2018-09-06T08:20:32.403Z")]}},"Organic Handcrafted Frozen Soap lavender","azure Tactics",10128],obj: {_id: 18989,str: "Seamless Pants payment",num: 65429,date: new Date("2018-09-06T16:25:36.505Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 18990,num: 61394,array: []});
    },

    function(coll) {
        return coll.insert({_id: 18991,str: "International Team-oriented",num: 51535,date: new Date("2018-09-06T11:06:22.145Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18992,str: "indigo Unbranded support",date: new Date("2018-09-05T19:57:39.990Z"),array: ["Tasty Concrete Pants hybrid Auto Loan Account",44203,"deposit",new Date("2018-09-06T09:08:30.328Z"),[],25668,new Date("2018-09-06T17:10:40.386Z"),{_id: 18993,str: "disintermediate",num: 62590,array: [],obj: {}},new Date("2018-09-05T22:16:26.330Z"),["back up",{_id: 18994,str: "scalable Incredible Rubber Sausages transmitter",num: 49169,date: new Date("2018-09-06T03:25:10.799Z"),array: []}]],obj: {_id: 18995,num: 88160,date: new Date("2018-09-06T13:30:33.342Z"),array: [3995,[],new Date("2018-09-06T12:14:43.046Z"),86873],obj: {_id: 18996,str: "Belgium Intranet",date: new Date("2018-09-06T15:10:48.008Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 18997,str: "port generating",num: 83308,date: new Date("2018-09-05T21:12:41.969Z"),array: [{_id: 18998,str: "Romania Indonesia local",num: 3662,obj: {}},"clicks-and-mortar Data",[],"virtual",15700,new Date("2018-09-06T00:16:09.431Z"),new Date("2018-09-06T11:43:12.155Z"),new Date("2018-09-06T11:42:24.756Z"),"distributed virtual","Washington definition",[],75460,[]]});
    },

    function(coll) {
        return coll.insert({_id: 18999,str: "Reactive",num: 58046,date: new Date("2018-09-06T02:40:53.558Z"),array: ["help-desk",new Date("2018-09-06T08:48:38.551Z"),new Date("2018-09-06T06:41:04.090Z"),20675,[],new Date("2018-09-06T03:27:00.796Z"),6405,{_id: 19000,num: 72435,array: [new Date("2018-09-06T16:17:38.453Z")],obj: {_id: 19001,str: "Personal Loan Account",num: 72047,obj: {}}},{_id: 19002,num: 81134,date: new Date("2018-09-06T05:34:51.967Z"),obj: {_id: 19003,str: "Awesome Steel Chicken",array: []}},"turquoise application","sensor Accountability Louisiana",new Date("2018-09-05T20:31:17.671Z"),59763,"connect Progressive Western Sahara",84735],obj: {_id: 19004,str: "parse RSS technologies",date: new Date("2018-09-06T04:45:19.322Z"),array: [[],new Date("2018-09-06T01:54:23.453Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 19005,str: "interface",num: 42385,date: new Date("2018-09-06T05:19:57.271Z"),array: [],obj: {_id: 19006,str: "Intelligent Cotton Shirt Buckinghamshire",num: 5717,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19007,str: "Berkshire",num: 61355,date: new Date("2018-09-06T03:33:44.654Z"),array: [],obj: {_id: 19008,str: "innovative",num: 94839,array: ["Personal Loan Account",55210,"Innovative THX Reduced",new Date("2018-09-06T19:06:02.724Z"),new Date("2018-09-06T12:16:14.988Z"),{_id: 19009,str: "Handcrafted Plastic Sausages Computers invoice",num: 90341,date: new Date("2018-09-06T13:44:37.570Z"),array: []},29001,{_id: 19010,str: "front-end",num: 98154,date: new Date("2018-09-06T08:12:47.213Z"),array: ["Books",[21403,new Date("2018-09-06T03:27:12.148Z")],new Date("2018-09-06T02:11:46.629Z"),"Branding hack alarm",[]],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19011,num: 39938,array: [88581,{_id: 19012,str: "Fresh driver",num: 47891,date: new Date("2018-09-06T02:06:16.332Z"),array: ["Awesome"],obj: {}},new Date("2018-09-06T19:49:36.791Z"),51728,new Date("2018-09-05T22:07:10.605Z"),"initiative South Dakota","Lead Chair Plains",new Date("2018-09-06T07:59:09.554Z"),"calculating",82448,64647,[[],{_id: 19013,str: "Grenada",num: 62793,date: new Date("2018-09-06T16:23:52.039Z"),array: [],obj: {_id: 19014,date: new Date("2018-09-06T05:32:54.156Z"),obj: {_id: 19015,str: "AI",num: 25789,array: [1955,new Date("2018-09-06T15:31:33.916Z"),"Administrator Grocery"]}}},95066],[]],obj: {_id: 19016,str: "transparent",date: new Date("2018-09-05T21:38:19.898Z")}});
    },

    function(coll) {
        return coll.insert({_id: 19017,str: "leading edge",num: 22076,date: new Date("2018-09-06T16:57:22.783Z"),array: [new Date("2018-09-06T05:46:29.126Z"),[],"Isle of Man Nebraska Communications",new Date("2018-09-06T15:27:22.258Z"),"customer loyalty",new Date("2018-09-06T13:06:00.842Z"),28756,{_id: 19018,str: "Research",date: new Date("2018-09-05T22:33:29.789Z"),array: [],obj: {_id: 19019,str: "Rand Loti withdrawal",date: new Date("2018-09-06T07:15:18.137Z"),array: [82888,[],59378],obj: {}}},"Assurance","Paradigm Denmark"]});
    },

    function(coll) {
        return coll.insert({_id: 19020,str: "redefine quantify local",num: 83625,date: new Date("2018-09-06T14:10:05.895Z"),array: [[],new Date("2018-09-05T20:20:14.966Z"),"Borders neural",67377,5195,{_id: 19021,str: "functionalities Savings Account stable",num: 72829,date: new Date("2018-09-06T01:31:08.048Z"),array: ["integrate Facilitator"],obj: {}},"orchid Web Face to face",new Date("2018-09-06T00:33:07.909Z"),"Berkshire hierarchy",{_id: 19022,str: "Home Loan Account calculate",num: 12636,date: new Date("2018-09-06T14:06:57.962Z"),array: [[],34455],obj: {_id: 19023,str: "parsing",num: 76234,obj: {}}},5432,{_id: 19024,str: "Music clear-thinking",date: new Date("2018-09-06T16:15:53.638Z"),array: [],obj: {_id: 19025,num: 82480,array: [new Date("2018-09-05T21:43:39.010Z")]}},new Date("2018-09-06T10:46:39.812Z"),"Senior"]});
    },

    function(coll) {
        return coll.insert({_id: 19026,str: "Cambridgeshire Towels",num: 87112,date: new Date("2018-09-06T13:48:33.532Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19027,str: "TCP",num: 72455,array: []});
    },

    function(coll) {
        return coll.insert({_id: 19028,str: "Buckinghamshire",num: 47846,date: new Date("2018-09-05T20:46:49.666Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19029,str: "Toys Borders",num: 98422,date: new Date("2018-09-06T10:37:00.642Z"),array: [],obj: {_id: 19030,str: "paradigms Sleek Frozen Hat lavender",num: 3873,date: new Date("2018-09-06T07:59:28.931Z"),array: ["orchestration mission-critical","repurpose Soft",new Date("2018-09-06T15:32:54.745Z"),97306,["solid state Savings Account Rhode Island",17962,"parsing Turnpike Cambridgeshire"],91310,new Date("2018-09-06T02:17:22.080Z"),{_id: 19031,str: "program mindshare port",num: 27961,date: new Date("2018-09-06T13:20:15.780Z"),array: [new Date("2018-09-06T03:34:43.725Z"),[88885,40872]],obj: {}},{_id: 19032,str: "customer loyalty synthesize Cambridgeshire",num: 60294,date: new Date("2018-09-06T18:37:06.914Z"),obj: {}},new Date("2018-09-06T16:45:32.124Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 19033,str: "Profound Turnpike enable",num: 29798,date: new Date("2018-09-06T09:44:10.352Z"),array: [1464,"Hat",new Date("2018-09-05T22:23:03.272Z"),new Date("2018-09-06T19:02:45.842Z"),"Keyboard web-readiness CSS",57556,89144,46907,[new Date("2018-09-06T01:45:30.736Z")],13872,"artificial intelligence compressing",{_id: 19034,str: "process improvement pixel",num: 80212,array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19035,str: "content lime",num: 46678,date: new Date("2018-09-06T04:38:38.348Z"),array: [new Date("2018-09-06T15:35:54.118Z"),new Date("2018-09-06T03:19:49.147Z"),34118,"mission-critical Administrator",new Date("2018-09-06T11:27:05.464Z"),[91980,8281,"Customer",new Date("2018-09-06T10:58:38.929Z"),{_id: 19036,str: "parsing Inverse",num: 80630,date: new Date("2018-09-06T12:39:28.156Z"),array: [],obj: {}},"Lempira Compatible",59334,"El Salvador"]]});
    },

    function(coll) {
        return coll.insert({_id: 19037,str: "Kids black",num: 45124,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19038,str: "Utah grey deposit",num: 76533,date: new Date("2018-09-06T08:13:15.411Z"),array: [],obj: {_id: 19039,str: "HTTP withdrawal syndicate",num: 35677,date: new Date("2018-09-06T09:03:16.413Z")}});
    },

    function(coll) {
        return coll.insert({_id: 19040,str: "clear-thinking Checking Account",num: 1306,date: new Date("2018-09-06T11:52:33.414Z"),array: [],obj: {_id: 19041,str: "Walks driver Incredible",obj: {_id: 19042,str: "Infrastructure metrics Strategist",num: 6328,array: [new Date("2018-09-06T18:08:24.249Z"),"transform Personal Loan Account integrate",79079,new Date("2018-09-05T20:42:55.862Z"),41798,{_id: 19043,date: new Date("2018-09-06T05:11:38.087Z"),array: [],obj: {}},"Soft Nuevo Sol",new Date("2018-09-06T16:49:27.587Z"),2881],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19044,str: "Cambridgeshire",num: 47205,date: new Date("2018-09-06T12:50:30.015Z"),array: [{_id: 19045,num: 60680,date: new Date("2018-09-05T23:13:00.800Z"),array: []},39707,"Reverse-engineered",new Date("2018-09-06T09:06:21.915Z"),new Date("2018-09-06T11:02:48.854Z"),new Date("2018-09-06T02:22:20.020Z"),55061,{_id: 19046,str: "overriding Practical Investment Account",num: 32361,array: [],obj: {}},"Checking Account Bike transmitting"],obj: {_id: 19047,str: "Intelligent exuding bandwidth",num: 51675,date: new Date("2018-09-06T06:45:53.969Z"),array: ["South Carolina",new Date("2018-09-05T20:41:02.218Z"),["unleash Beauty"],29691,{_id: 19048,str: "Maine payment",date: new Date("2018-09-06T14:04:12.661Z"),obj: {_id: 19049,num: 96946,date: new Date("2018-09-06T01:37:13.636Z"),obj: {_id: 19050,str: "wireless Uruguay instruction set",num: 67976,date: new Date("2018-09-06T18:53:03.763Z"),array: [new Date("2018-09-06T06:56:48.356Z"),[]],obj: {_id: 19051,str: "driver deposit fault-tolerant",date: new Date("2018-09-05T23:37:04.796Z")}}}},"Planner Switchable",[10942],{_id: 19052,str: "24/7 Computer Borders",num: 3421,array: [],obj: {}},72804]}});
    },

    function(coll) {
        return coll.insert({_id: 19053,str: "Plastic",num: 47026,date: new Date("2018-09-06T14:06:52.182Z"),array: [],obj: {_id: 19054,str: "maximized Summit",num: 27461,date: new Date("2018-09-05T23:04:48.609Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19055,num: 3450,date: new Date("2018-09-06T04:31:38.383Z"),array: [],obj: {_id: 19056,str: "Grass-roots Glen",num: 6818,date: new Date("2018-09-06T03:58:06.043Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19057,num: 20632,date: new Date("2018-09-06T02:04:58.991Z"),array: ["internet solution","open-source azure dynamic",[new Date("2018-09-05T23:15:11.679Z"),new Date("2018-09-06T07:04:23.563Z")],new Date("2018-09-06T14:13:18.323Z"),66049,20794,{_id: 19058,str: "Grocery recontextualize",num: 33727,date: new Date("2018-09-05T22:23:49.187Z"),array: [],obj: {_id: 19059,str: "RSS",num: 93334,date: new Date("2018-09-06T10:49:21.850Z"),obj: {}}},[],new Date("2018-09-05T23:12:58.197Z"),"Administrator",[],new Date("2018-09-06T15:01:58.411Z"),{_id: 19060,str: "Security",array: [99642,new Date("2018-09-06T11:42:24.667Z")],obj: {_id: 19061,str: "user-facing Kip Quality",num: 99991,date: new Date("2018-09-06T08:57:15.694Z"),array: [],obj: {}}}],obj: {_id: 19062,str: "virtual out-of-the-box Shoes",num: 75975,date: new Date("2018-09-06T03:40:41.407Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19063,str: "methodologies Metal",num: 18546,date: new Date("2018-09-06T02:58:21.848Z"),array: [new Date("2018-09-05T23:39:03.124Z"),91150,"Avon Credit Card Account Ergonomic Granite Tuna","time-frame bus Reverse-engineered","enhance invoice",[],90695,new Date("2018-09-06T02:55:39.979Z"),new Date("2018-09-06T08:16:22.628Z"),{_id: 19064,str: "Uganda Shilling Moroccan Dirham",date: new Date("2018-09-06T07:20:45.842Z"),array: [[71207]],obj: {}},27316,"Research customized","Investor"],obj: {_id: 19065,num: 12762,array: [],obj: {_id: 19066,str: "Forks",num: 5337,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 19067,num: 39848,date: new Date("2018-09-06T12:54:06.223Z"),array: ["Georgia",40944,new Date("2018-09-06T05:27:27.623Z"),38844,12602,new Date("2018-09-06T03:42:04.722Z"),50576,"Berkshire",60144,{_id: 19068,str: "Branch",num: 64791,date: new Date("2018-09-06T04:57:21.408Z"),obj: {}},new Date("2018-09-06T19:36:41.090Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19069,str: "solid state Plastic Fields",num: 34976,date: new Date("2018-09-06T02:54:55.978Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19070,str: "best-of-breed logistical pricing structure",num: 73851,date: new Date("2018-09-05T20:45:59.489Z"),array: [],obj: {_id: 19071,str: "Island",num: 27925,date: new Date("2018-09-06T12:06:00.844Z"),array: ["Analyst",99266,{_id: 19072,str: "Qatar Credit Card Account teal",num: 77361,date: new Date("2018-09-05T23:08:29.669Z"),array: [],obj: {_id: 19073,num: 69712,date: new Date("2018-09-05T21:17:28.001Z"),obj: {}}},new Date("2018-09-06T08:24:37.246Z"),new Date("2018-09-05T21:21:09.633Z"),"Ways primary",32095,new Date("2018-09-06T17:56:05.158Z"),"modular Handcrafted 24/7",71379,"firewall Georgia",new Date("2018-09-05T20:30:50.667Z"),"plug-and-play"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19074,num: 63685,date: new Date("2018-09-06T19:33:53.830Z"),array: [80876,"Personal Loan Account turn-key Salad","Home Loan Account Unbranded Concrete Soap 24/365",new Date("2018-09-06T12:38:18.941Z"),"Movies Security",new Date("2018-09-05T22:46:56.748Z"),new Date("2018-09-06T14:09:07.990Z"),53425,99896,[{_id: 19075,str: "Analyst",num: 73116,date: new Date("2018-09-06T00:35:11.995Z"),array: [],obj: {_id: 19076,str: "Enhanced Russian Federation",num: 6576,date: new Date("2018-09-06T02:45:22.747Z"),obj: {}}}],{_id: 19077,num: 64508,array: [],obj: {}},19261,{_id: 19078,str: "Automotive Automotive Brazilian Real",array: [],obj: {}},"Bedfordshire Causeway infomediaries"],obj: {_id: 19079,num: 29384,array: [new Date("2018-09-06T12:27:23.667Z"),["Avon Licensed Granite Gloves Checking Account"]]}});
    },

    function(coll) {
        return coll.insert({_id: 19080,str: "JSON Germany Strategist",num: 44434,date: new Date("2018-09-06T17:14:59.727Z"),array: [new Date("2018-09-05T20:36:24.051Z"),"Texas",91082,"Cotton Jewelery Accounts",{_id: 19081,str: "hard drive Arkansas",num: 57171,date: new Date("2018-09-06T10:08:42.814Z"),array: [],obj: {}},new Date("2018-09-06T02:56:25.320Z"),{_id: 19082,array: [],obj: {_id: 19083,str: "Gloves",num: 39816,date: new Date("2018-09-05T21:08:37.786Z"),array: [37734]}},new Date("2018-09-06T17:49:10.081Z"),{_id: 19084,date: new Date("2018-09-06T11:47:17.859Z"),array: [],obj: {}},new Date("2018-09-06T12:28:54.873Z")],obj: {_id: 19085,str: "Concrete",num: 57502,date: new Date("2018-09-06T07:08:36.618Z"),array: [[],5371,["transform Tuna",31971,"incremental"],"payment hacking Port"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19086,str: "Spring Cotton",date: new Date("2018-09-06T14:55:01.246Z"),array: [],obj: {_id: 19087,str: "Fantastic Fresh Mouse Jordanian Dinar",num: 55104,date: new Date("2018-09-06T03:04:55.393Z"),obj: {_id: 19088,str: "mission-critical Locks quantifying",num: 47334,date: new Date("2018-09-06T12:26:05.015Z"),array: ["payment",new Date("2018-09-06T13:18:52.378Z"),[[]],9069,new Date("2018-09-06T13:55:30.477Z"),"Fantastic Fresh Hat connecting",new Date("2018-09-06T00:11:53.174Z"),28520,[{_id: 19089,str: "payment",num: 75479,array: [],obj: {_id: 19090,str: "scalable Idaho",num: 96811}},"District",58965],"Quality-focused",25016,new Date("2018-09-06T15:44:18.788Z"),{_id: 19091,num: 46154,date: new Date("2018-09-06T17:28:05.728Z"),array: [84728,new Date("2018-09-06T17:24:06.488Z")],obj: {_id: 19092,num: 55036,date: new Date("2018-09-06T07:54:59.875Z")}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19093,str: "Coordinator interfaces Marketing",num: 10826,date: new Date("2018-09-05T20:11:54.965Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19094,str: "Garden quantify",num: 15936,date: new Date("2018-09-05T22:56:22.672Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19095,str: "Saint Helena streamline",num: 75022,date: new Date("2018-09-06T11:04:59.721Z"),array: [],obj: {_id: 19096,str: "action-items bypassing",num: 51214,date: new Date("2018-09-06T09:48:20.510Z"),array: [new Date("2018-09-06T14:15:47.678Z"),[],37057,9237,"Hawaii Cliff",97689,"Factors Books",new Date("2018-09-06T03:05:45.695Z"),[{_id: 19097,num: 41423,array: [],obj: {_id: 19098,str: "Baby",num: 86590,date: new Date("2018-09-06T16:18:04.772Z"),array: [new Date("2018-09-06T13:41:04.221Z"),"Tanzania flexibility",57135,new Date("2018-09-05T20:06:01.744Z")],obj: {}}},new Date("2018-09-06T03:21:32.590Z")],[],44368],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19099,str: "copying Cambridgeshire Refined Metal Computer",num: 66719,date: new Date("2018-09-05T20:21:52.520Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19100,str: "France Tuna Brook",num: 53636,array: ["Technician multi-byte Mouse",{_id: 19101,str: "incentivize New York",num: 33458,date: new Date("2018-09-06T10:37:29.022Z"),array: [],obj: {}},39683,new Date("2018-09-06T01:31:29.539Z"),new Date("2018-09-06T19:25:30.771Z"),89235,new Date("2018-09-06T09:44:53.754Z"),"Handmade Cotton Ball tan Court","users Small Granite Bike software",new Date("2018-09-06T09:59:25.634Z"),"RAM",{_id: 19102,str: "Granite",date: new Date("2018-09-06T08:03:51.968Z"),obj: {_id: 19103,str: "Web Engineer navigating",num: 89690,date: new Date("2018-09-06T18:35:06.275Z"),array: [],obj: {_id: 19104,num: 81889,date: new Date("2018-09-06T07:42:15.693Z")}}},16805]});
    },

    function(coll) {
        return coll.insert({_id: 19105,str: "Egyptian Pound action-items",num: 75406,date: new Date("2018-09-06T01:25:55.221Z"),array: [new Date("2018-09-06T09:34:25.349Z"),"Unbranded",{_id: 19106,num: 51990,date: new Date("2018-09-06T01:58:47.271Z"),obj: {_id: 19107,str: "deposit Grocery",num: 93180,date: new Date("2018-09-06T07:39:23.864Z")}},99982,"Up-sized",new Date("2018-09-06T19:24:29.735Z"),9445,{_id: 19108,num: 89539,array: [],obj: {}},"Front-line interfaces",37019],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19109,str: "interactive Dynamic Pennsylvania",num: 15348,date: new Date("2018-09-06T02:05:04.954Z"),array: [],obj: {_id: 19110,str: "visionary Virtual",num: 88322,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 19111,str: "Fully-configurable Chicken deposit",num: 88031,date: new Date("2018-09-06T04:45:11.830Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19112,num: 63968,date: new Date("2018-09-06T12:10:22.905Z"),array: [new Date("2018-09-06T02:23:13.100Z"),49654,[],"Gorgeous Cotton Bike",73691,[new Date("2018-09-05T21:01:11.367Z"),"HDD Security",40182],"Baht vortals multi-byte",new Date("2018-09-06T19:40:55.182Z"),[],{_id: 19113,str: "Graphical User Interface",date: new Date("2018-09-06T11:48:01.094Z"),array: [],obj: {}},77384],obj: {_id: 19114,str: "invoice client-server",num: 66585,obj: {_id: 19115,str: "evolve",num: 69811,date: new Date("2018-09-06T06:05:51.468Z"),array: [],obj: {_id: 19116,str: "process improvement bandwidth-monitored",num: 26200,date: new Date("2018-09-06T08:11:29.683Z"),array: ["Delaware Lead GB",new Date("2018-09-06T11:32:42.742Z"),{_id: 19117,str: "Brazil",date: new Date("2018-09-06T12:37:56.076Z"),array: [],obj: {}}]}}}});
    },

    function(coll) {
        return coll.insert({_id: 19118,str: "navigating",num: 75968,date: new Date("2018-09-06T00:08:21.335Z"),array: [new Date("2018-09-06T06:48:44.045Z"),87318,new Date("2018-09-06T09:45:19.920Z"),"navigating sensor",16401,53874,"e-services Handcrafted",new Date("2018-09-06T00:49:13.235Z"),{_id: 19119,num: 209,date: new Date("2018-09-05T22:40:37.894Z"),obj: {_id: 19120,str: "Salad capacity SDD",num: 99889,date: new Date("2018-09-06T05:18:35.560Z"),array: [74145,new Date("2018-09-06T15:05:22.970Z"),[]],obj: {_id: 19121,str: "Sleek",num: 56557,date: new Date("2018-09-06T09:41:48.701Z"),obj: {}}}},{_id: 19122,str: "Strategist Tasty",num: 56773,date: new Date("2018-09-06T04:25:41.024Z"),array: ["eyeballs Assurance Hong Kong",52665,[]],obj: {}},7717]});
    },

    function(coll) {
        return coll.insert({_id: 19123,str: "Awesome",num: 10770,date: new Date("2018-09-06T18:48:33.674Z"),array: [97986,"Investor context-sensitive",new Date("2018-09-06T10:09:03.977Z"),{_id: 19124,str: "Centralized",num: 12760,date: new Date("2018-09-06T03:18:04.954Z"),array: [],obj: {}},73850,"SSL"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19125,str: "Bhutan scale",num: 85049,date: new Date("2018-09-06T16:53:30.515Z"),array: [],obj: {_id: 19126,str: "Fish override United Kingdom",num: 29078,date: new Date("2018-09-06T08:35:37.492Z"),array: ["architectures","North Carolina",new Date("2018-09-06T14:42:05.939Z"),60555,"Trinidad and Tobago Dollar Russian Federation",31554,new Date("2018-09-06T03:31:18.706Z"),"Cambridgeshire Assurance",26148,new Date("2018-09-05T22:04:03.935Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19127,str: "Baby",num: 4249,date: new Date("2018-09-06T06:53:25.707Z"),obj: {_id: 19128,str: "collaboration turn-key",date: new Date("2018-09-06T02:30:24.012Z"),obj: {_id: 19129,num: 42319,array: [new Date("2018-09-06T12:38:40.962Z"),[{_id: 19130,str: "multi-byte",date: new Date("2018-09-06T12:38:31.304Z"),array: [],obj: {}},92824,new Date("2018-09-06T14:33:55.136Z"),"mission-critical 24/7","wireless","Generic Metal Mouse"],"New Mexico Berkshire Finland",61936,42628,{_id: 19131,str: "Drives",num: 26033,date: new Date("2018-09-05T21:12:23.038Z"),array: [],obj: {}},new Date("2018-09-06T17:14:02.745Z"),38992,96285,new Date("2018-09-06T10:18:10.754Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19132,str: "deliver",num: 34252,date: new Date("2018-09-06T05:52:04.100Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19133,str: "parse",num: 50749,date: new Date("2018-09-06T13:00:48.541Z"),obj: {_id: 19134,str: "Chips neural",num: 97487,date: new Date("2018-09-06T12:58:54.640Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19135,str: "utilisation Handcrafted access",date: new Date("2018-09-06T03:52:03.399Z"),array: [],obj: {_id: 19136,num: 85742,date: new Date("2018-09-06T10:19:49.421Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19137,str: "Generic Books",num: 79167,date: new Date("2018-09-06T02:30:38.386Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19138,str: "Alabama",num: 64421,array: ["Handcrafted","Squares Metal",61913,new Date("2018-09-06T17:36:24.968Z"),[],25060,new Date("2018-09-05T21:49:06.745Z"),{_id: 19139,str: "efficient",num: 14778,date: new Date("2018-09-05T23:31:26.867Z"),array: ["index"],obj: {_id: 19140,str: "override Brunei Dollar Israel",num: 1781,date: new Date("2018-09-06T05:36:56.913Z"),obj: {}}},[],new Date("2018-09-06T17:11:31.522Z"),17193,72379],obj: {_id: 19141,str: "e-tailers Metal",date: new Date("2018-09-05T21:03:15.004Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 19142,str: "Car Ergonomic Handmade Cotton Pizza",date: new Date("2018-09-06T00:11:33.480Z"),array: ["Soft Investor Corner",13276,new Date("2018-09-06T00:21:46.866Z"),"Savings Account copying sticky","deposit Chair",new Date("2018-09-06T01:30:24.638Z"),85792,new Date("2018-09-06T15:09:00.634Z"),35842,{_id: 19143,num: 99907,date: new Date("2018-09-06T04:06:17.004Z"),array: [[]],obj: {_id: 19144,num: 38572,date: new Date("2018-09-06T04:28:48.236Z"),array: [],obj: {_id: 19145,str: "Customer Kiribati",num: 6033,array: []}}},{_id: 19146,str: "array Team-oriented Metal",num: 18691,date: new Date("2018-09-06T00:07:52.971Z"),array: [35239]},79457],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19147,num: 21371,date: new Date("2018-09-06T13:22:14.159Z"),array: [],obj: {_id: 19148,str: "reciprocal",num: 57153,date: new Date("2018-09-06T18:30:30.321Z"),array: [new Date("2018-09-06T05:02:28.775Z"),{_id: 19149,str: "Algerian Dinar",num: 79304,date: new Date("2018-09-06T07:38:41.275Z"),obj: {_id: 19150,str: "Overpass",num: 60466,array: []}},new Date("2018-09-06T10:08:47.867Z"),"Awesome",7610,"Grocery parse Hollow",48168,"Money Market Account",63996,{_id: 19151,array: [[],"Clothing",67674,new Date("2018-09-06T09:03:45.432Z")],obj: {}},[new Date("2018-09-05T23:39:16.975Z")],{_id: 19152,str: "Fiji Dollar",num: 99687,date: new Date("2018-09-06T13:36:10.093Z"),array: []}],obj: {_id: 19153,date: new Date("2018-09-06T00:48:35.874Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19154,str: "radical",num: 61473,date: new Date("2018-09-05T20:35:15.477Z"),array: [],obj: {_id: 19155,str: "Rubber zero tolerance card",num: 82671,date: new Date("2018-09-05T20:49:55.853Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19156,str: "Investment Account Regional",date: new Date("2018-09-06T12:10:45.325Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19157,str: "Ethiopia Gloves Jewelery",num: 60283,date: new Date("2018-09-06T19:41:13.706Z"),array: [89392,"ROI Managed","Unbranded Wooden Ball",{_id: 19158,str: "Path Functionality",num: 91798,date: new Date("2018-09-06T17:06:47.832Z"),obj: {}},new Date("2018-09-06T19:11:22.820Z"),"Denar",new Date("2018-09-06T00:38:49.674Z"),68360,new Date("2018-09-06T02:19:17.640Z")],obj: {_id: 19159,str: "generate e-commerce",num: 215,date: new Date("2018-09-06T11:57:46.654Z"),array: [],obj: {_id: 19160,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19161,str: "program Cotton",num: 81599,date: new Date("2018-09-06T05:00:48.324Z"),array: [42113,new Date("2018-09-06T06:22:11.444Z"),"niches",{_id: 19162,str: "robust Serbian Dinar calculate",num: 21172,date: new Date("2018-09-05T20:18:36.058Z"),array: [],obj: {_id: 19163,num: 18302,date: new Date("2018-09-06T06:32:05.214Z"),array: [],obj: {_id: 19164,obj: {_id: 19165,str: "Money Market Account",num: 43436,date: new Date("2018-09-06T12:39:07.242Z"),obj: {}}}}},"withdrawal Soft Soft",62393,new Date("2018-09-06T18:40:26.871Z"),"hard drive copying generate",new Date("2018-09-05T23:46:38.736Z"),[new Date("2018-09-06T07:38:13.027Z"),92809,{_id: 19166,str: "overriding",num: 21983,date: new Date("2018-09-05T21:06:46.537Z"),array: [],obj: {}}],{_id: 19167,str: "input EXE",array: [],obj: {}},"Checking Account Cambridgeshire Granite",34424,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19168,str: "Consultant Chicken",num: 19973,date: new Date("2018-09-06T01:04:35.844Z"),array: [],obj: {_id: 19169,str: "Cross-group",num: 84294,array: [99104,1135,"Bedfordshire",new Date("2018-09-06T00:49:58.871Z"),"Multi-lateral array","Sleek Concrete Towels vortals",{_id: 19170,str: "SSL Cape Verde Escudo",num: 74378,date: new Date("2018-09-06T13:52:38.127Z"),obj: {_id: 19171,str: "Corners withdrawal Macao",num: 71176,date: new Date("2018-09-06T06:33:49.032Z"),array: [],obj: {_id: 19172,num: 8787,date: new Date("2018-09-06T09:30:06.624Z"),array: [],obj: {}}}},52782,new Date("2018-09-06T00:44:16.827Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 19173,str: "e-commerce infrastructures",num: 97364,date: new Date("2018-09-05T23:52:35.656Z"),array: [],obj: {_id: 19174,str: "overriding International",num: 81960,date: new Date("2018-09-06T02:31:42.639Z"),array: ["Awesome Rubber Cheese Wooden Unbranded",new Date("2018-09-06T00:36:45.941Z"),"AGP",new Date("2018-09-06T14:55:45.082Z"),41806,84605,{_id: 19175,str: "Practical",num: 81346,date: new Date("2018-09-06T05:53:07.456Z"),array: [],obj: {}},"eco-centric","Tajikistan orchid Armenia",new Date("2018-09-05T20:59:47.913Z"),new Date("2018-09-06T12:01:08.807Z"),95071,[60295],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 19176,str: "Uruguay multi-byte Ramp",num: 98112,date: new Date("2018-09-05T21:34:28.764Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19177,str: "system",date: new Date("2018-09-06T15:42:03.452Z"),array: [[],"index Steel",{_id: 19178,str: "Home Loan Account Ouguiya",num: 2753,date: new Date("2018-09-05T20:13:43.581Z"),obj: {_id: 19179,str: "Refined",date: new Date("2018-09-06T18:07:27.674Z"),array: []}},"Uzbekistan Sum Small Plastic Pants",87462,97498,"alarm RSS Wooden"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19180,str: "Nakfa redundant website",num: 65595,date: new Date("2018-09-05T22:58:12.038Z"),array: [new Date("2018-09-06T04:07:35.788Z"),88316,"engineer","compress payment",new Date("2018-09-06T15:28:15.536Z"),{_id: 19181,str: "Cambridgeshire",num: 76298,array: ["Chicken Indian Rupee Ford"]},"RAM",new Date("2018-09-06T11:02:49.238Z"),74501,new Date("2018-09-06T08:10:23.786Z"),16341,{_id: 19182,num: 55824,date: new Date("2018-09-06T19:12:24.197Z"),array: [],obj: {}},44804],obj: {_id: 19183,str: "virtual Trail",num: 99760,date: new Date("2018-09-05T20:03:46.099Z"),array: [],obj: {_id: 19184,str: "monitor AI Michigan",array: [],obj: {_id: 19185,date: new Date("2018-09-05T22:05:14.019Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 19186,str: "bleeding-edge hack",num: 22926,date: new Date("2018-09-06T13:47:38.343Z"),array: [],obj: {_id: 19187,str: "system Kids Developer",date: new Date("2018-09-06T16:31:37.448Z"),array: [["Buckinghamshire Wall","content Home Loan Account cross-platform"],60618,new Date("2018-09-06T03:17:20.784Z"),"gold Monitored",new Date("2018-09-06T11:28:39.207Z"),{_id: 19188,str: "copy Hawaii",num: 47019,array: [new Date("2018-09-06T05:26:53.036Z"),{_id: 19189,date: new Date("2018-09-06T10:30:24.517Z"),array: [],obj: {}}]},36903,60419,[],49436,new Date("2018-09-06T16:30:34.543Z"),"Highway Stand-alone"],obj: {_id: 19190,str: "real-time",num: 56019,date: new Date("2018-09-06T12:05:39.259Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19191,str: "Incredible",num: 94799,date: new Date("2018-09-06T00:04:13.571Z"),array: [["overriding","CSS Home Loan Account"],new Date("2018-09-05T22:22:33.700Z"),90113,new Date("2018-09-06T07:42:21.724Z"),"Synergistic",{_id: 19192,str: "productivity Enterprise-wide",num: 20629,date: new Date("2018-09-06T12:56:44.335Z"),obj: {}},"optical","vertical",94988,new Date("2018-09-06T09:11:57.632Z"),77934,{_id: 19193,str: "Health",num: 55444,date: new Date("2018-09-06T17:02:03.788Z"),array: [],obj: {}}],obj: {_id: 19194,num: 95551,date: new Date("2018-09-06T01:52:54.767Z"),array: [[],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 19195,str: "Prairie Guam",num: 31884,date: new Date("2018-09-06T07:42:56.781Z"),array: [new Date("2018-09-06T02:03:45.393Z"),new Date("2018-09-06T18:01:59.402Z"),new Date("2018-09-05T21:13:46.570Z"),71770,19203,"Berkshire",70165,"deposit","enhance incentivize",{_id: 19196,str: "SMTP strategize Bedfordshire",num: 29982,date: new Date("2018-09-06T09:27:08.390Z")},[],24242,[]],obj: {_id: 19197,str: "maximized technologies",array: ["connecting",70452,24485],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19198,str: "Metrics feed",num: 47850,date: new Date("2018-09-06T06:48:58.577Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19199,num: 98577,date: new Date("2018-09-06T07:31:50.412Z"),array: [new Date("2018-09-05T20:57:26.010Z"),48194,"RAM","Philippine Peso Small",{_id: 19200,str: "cultivate channels matrix",num: 47788,date: new Date("2018-09-05T23:48:41.535Z"),array: [new Date("2018-09-06T14:23:45.817Z"),27134,new Date("2018-09-06T11:15:31.296Z"),[],"Movies",55748],obj: {}},[],10250,new Date("2018-09-05T20:03:27.356Z")]});
    },

    function(coll) {
        return coll.insert({_id: 19201,str: "Sports Burgs CFP Franc",num: 23775,date: new Date("2018-09-06T09:08:53.096Z"),array: [],obj: {_id: 19202,str: "Utah Liaison",num: 18128,date: new Date("2018-09-06T19:06:57.374Z"),array: [new Date("2018-09-06T06:19:10.661Z"),"Global",new Date("2018-09-06T15:52:31.835Z"),2572,36887,"Internal Investor","invoice",new Date("2018-09-05T21:33:06.942Z"),9201,43918,{_id: 19203,num: 5547,date: new Date("2018-09-06T03:39:48.705Z"),array: ["viral"],obj: {_id: 19204,str: "Chair Security",num: 52249,date: new Date("2018-09-06T05:05:29.748Z"),obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19205,str: "AI Cheese Beauty",num: 82035,date: new Date("2018-09-06T12:57:36.236Z"),array: [],obj: {_id: 19206,str: "human-resource Central AI",num: 65039,date: new Date("2018-09-06T12:28:57.564Z"),array: [new Date("2018-09-06T08:36:40.321Z"),new Date("2018-09-06T05:58:15.054Z"),"Fish silver",2704,40978,new Date("2018-09-06T12:48:45.962Z"),"Mississippi",{_id: 19207,str: "Berkshire",date: new Date("2018-09-06T19:50:46.800Z"),array: [[new Date("2018-09-05T23:29:27.907Z"),29155],63956,"Tennessee synthesizing Human",{_id: 19208,str: "Cotton COM stable",num: 23676,date: new Date("2018-09-06T16:16:16.669Z"),array: [],obj: {}},[]],obj: {_id: 19209,num: 140,obj: {}}},"front-end Licensed"]}});
    },

    function(coll) {
        return coll.insert({_id: 19210,str: "Cambridgeshire",num: 88665,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19211,num: 52785,date: new Date("2018-09-05T19:58:42.090Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19212,str: "synthesize Plastic",num: 40502,date: new Date("2018-09-06T07:44:55.567Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19213,str: "morph",date: new Date("2018-09-06T15:30:30.187Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19214,str: "help-desk Auto Loan Account JSON",date: new Date("2018-09-05T23:09:01.665Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19215,str: "exuding Forest",num: 17667,date: new Date("2018-09-06T03:05:20.347Z"),array: [],obj: {_id: 19216,num: 9308,date: new Date("2018-09-05T22:53:25.526Z"),array: [79476,new Date("2018-09-05T21:46:06.961Z"),"Alabama 1080p",new Date("2018-09-06T03:35:31.279Z"),74957,[],"deposit Jersey matrix",new Date("2018-09-06T18:21:02.235Z"),new Date("2018-09-06T15:01:09.482Z"),"real-time payment panel"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19217,str: "open-source Aruban Guilder unleash",num: 78165,date: new Date("2018-09-06T07:05:00.442Z"),array: [],obj: {_id: 19218,str: "haptic",num: 94949,date: new Date("2018-09-06T05:58:35.404Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19219,str: "Savings Account optimizing synthesizing",num: 59519,date: new Date("2018-09-06T04:21:34.385Z"),obj: {_id: 19220,str: "Shoes",date: new Date("2018-09-06T00:27:48.284Z"),array: ["Washington Ireland",13102,new Date("2018-09-06T01:43:48.852Z"),4207,59252,"Bolivia","Hollow",new Date("2018-09-06T09:15:18.323Z"),{_id: 19221,str: "Unbranded Avon Architect",num: 31902,date: new Date("2018-09-06T03:10:02.750Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 19222,str: "Guyana Dollar",num: 80187,date: new Date("2018-09-06T14:02:22.636Z"),array: [new Date("2018-09-06T09:20:07.286Z"),[],"sky blue feed local",58244,[{_id: 19223,num: 73802,date: new Date("2018-09-06T17:49:33.060Z"),array: [],obj: {}},{_id: 19224,str: "UIC-Franc Gorgeous Granite Pizza Music",obj: {_id: 19225,str: "Future Fiji Dollar initiatives",num: 96100,date: new Date("2018-09-06T14:58:14.859Z"),array: [51292],obj: {}}},new Date("2018-09-06T05:28:23.239Z")],new Date("2018-09-05T22:01:15.790Z"),"Legacy",new Date("2018-09-06T06:57:52.522Z"),36318,"Chief","Visionary",new Date("2018-09-06T02:54:04.074Z"),{_id: 19226,str: "Analyst implement protocol",num: 4341,array: [],obj: {_id: 19227,num: 82496,date: new Date("2018-09-06T02:02:56.689Z")}}]});
    },

    function(coll) {
        return coll.insert({_id: 19228,str: "Chief core Tuna",date: new Date("2018-09-06T15:19:50.828Z"),array: ["Refined Cotton Shoes",4026,new Date("2018-09-05T22:37:45.853Z"),"attitude-oriented Handmade virtual",new Date("2018-09-06T00:12:49.765Z"),"Incredible Cotton Pants bypassing leading-edge",new Date("2018-09-06T00:39:29.294Z"),[],2652,67455],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19229,str: "executive Generic Rubber Soap Bike",num: 35246,date: new Date("2018-09-06T03:57:25.703Z"),array: [],obj: {_id: 19230,str: "capacitor",num: 87377,date: new Date("2018-09-06T07:34:40.419Z"),array: [83998,"Soft",new Date("2018-09-06T04:38:30.326Z"),"tan CSS Lao People's Democratic Republic",86459,["Supervisor Hat methodology",new Date("2018-09-06T08:32:43.857Z"),new Date("2018-09-06T10:33:47.068Z"),{_id: 19231,num: 93057,date: new Date("2018-09-06T02:17:02.269Z"),array: []},{_id: 19232,str: "upward-trending withdrawal",num: 15440,date: new Date("2018-09-06T02:34:13.906Z"),obj: {}}],[14115,"Director",new Date("2018-09-06T16:55:17.671Z")],"calculate Czech Republic"],obj: {_id: 19233,str: "Planner",date: new Date("2018-09-06T00:33:00.096Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19234,num: 81834,date: new Date("2018-09-06T15:39:38.697Z"),array: [new Date("2018-09-05T22:06:07.880Z"),"Granite",{_id: 19235,str: "intranet programming",num: 72868,date: new Date("2018-09-06T06:41:49.123Z"),array: []},86528,new Date("2018-09-06T00:34:10.408Z"),28685,[],new Date("2018-09-06T19:16:11.402Z"),"compelling Road Small Wooden Pants",new Date("2018-09-06T08:59:31.656Z"),{_id: 19236,str: "Terrace Fantastic Cotton Chicken Creative",num: 50675,date: new Date("2018-09-06T09:35:26.988Z"),array: [],obj: {}},83864],obj: {_id: 19237,date: new Date("2018-09-06T02:01:15.141Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19238,str: "Ferry sensor",num: 43533,date: new Date("2018-09-06T11:48:32.119Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19239,str: "enterprise Metal olive",num: 91822,date: new Date("2018-09-06T02:45:31.259Z"),array: ["Tunnel 24/7",41609,"Handcrafted Wooden Keyboard Island",{_id: 19240,str: "static sensor Electronics",num: 24712,date: new Date("2018-09-06T11:09:49.035Z"),array: [],obj: {}},{_id: 19241,str: "FTP Poland Tuna",num: 20346,array: []},new Date("2018-09-06T04:48:03.227Z"),68145,23618,new Date("2018-09-06T14:51:59.672Z"),[],53477],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19242,str: "concept back-end",array: [82994,"JBOD",new Date("2018-09-05T21:47:42.879Z"),{_id: 19243,str: "Dynamic Prairie",date: new Date("2018-09-06T03:56:22.647Z"),array: [],obj: {}},[],"proactive bottom-line Home Loan Account",85449,{_id: 19244,num: 70819,date: new Date("2018-09-06T17:19:46.185Z"),array: [11212],obj: {_id: 19245,str: "Assurance content even-keeled",num: 68259,date: new Date("2018-09-06T01:14:31.705Z"),obj: {_id: 19246,str: "SQL Cheese",num: 4727,date: new Date("2018-09-06T09:48:50.546Z"),array: [96773,[],new Date("2018-09-06T12:06:14.063Z"),{_id: 19247,str: "turquoise eco-centric",num: 48686,date: new Date("2018-09-05T21:34:04.540Z"),array: []}],obj: {}}}},new Date("2018-09-06T00:16:37.021Z"),new Date("2018-09-06T19:30:43.692Z"),"Creative Cameroon Turnpike","leading-edge",75946],obj: {_id: 19248,str: "generating expedite"}});
    },

    function(coll) {
        return coll.insert({_id: 19249,str: "whiteboard migration Configurable",num: 21943,date: new Date("2018-09-06T04:10:56.618Z"),array: ["azure vortals Awesome",new Date("2018-09-06T11:20:27.404Z"),44238,new Date("2018-09-06T11:07:14.298Z"),new Date("2018-09-05T20:12:37.890Z"),"Toys architectures monetize",14652,[89936],[],"benchmark synthesizing global",new Date("2018-09-06T15:42:27.072Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19250,num: 64077,date: new Date("2018-09-06T12:16:19.297Z"),array: [new Date("2018-09-05T22:31:08.507Z"),59060,"optimize",38369,new Date("2018-09-05T21:43:27.858Z"),"FTP",{_id: 19251,str: "parsing invoice integrated",num: 81874,date: new Date("2018-09-06T00:18:22.584Z")},"Markets Fantastic Fresh Chair",{_id: 19252,num: 55018,date: new Date("2018-09-06T09:14:52.052Z"),array: [],obj: {_id: 19253,str: "Harbor compressing Ramp",num: 92508,array: [new Date("2018-09-06T14:23:56.807Z")],obj: {_id: 19254,str: "Chair bypassing Malawi",date: new Date("2018-09-05T23:01:09.438Z"),array: [],obj: {}}}},new Date("2018-09-06T11:51:14.205Z"),[30563,{_id: 19255,str: "product Crossroad",array: [],obj: {}}],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19256,str: "Chief Specialist",num: 96083,date: new Date("2018-09-06T02:45:52.713Z"),array: [new Date("2018-09-05T22:18:36.879Z"),58141,"Producer Swiss Franc SQL",54801,new Date("2018-09-06T19:07:47.337Z"),"transmitting","Creative Sports Avon",new Date("2018-09-06T04:19:25.751Z"),new Date("2018-09-06T13:40:25.328Z"),53404,[93665],"COM Tasty Steel Soap",{_id: 19257,num: 34604,date: new Date("2018-09-06T01:29:33.926Z"),array: [],obj: {}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 19258,str: "Mission",num: 19733,date: new Date("2018-09-06T17:51:24.216Z"),array: [191,new Date("2018-09-06T04:57:35.467Z"),new Date("2018-09-06T03:28:24.681Z"),[[],"Streamlined"],new Date("2018-09-06T08:52:21.024Z"),"microchip Costa Rican Colon",{_id: 19259,str: "program",num: 26535,date: new Date("2018-09-06T16:52:20.252Z"),array: [52478,new Date("2018-09-06T12:21:37.060Z"),new Date("2018-09-06T07:04:00.901Z"),"Guarani",new Date("2018-09-06T17:20:57.628Z"),"Bedfordshire"],obj: {_id: 19260,date: new Date("2018-09-05T21:48:04.445Z"),obj: {}}},{_id: 19261,str: "Estate methodologies clear-thinking",num: 71862,date: new Date("2018-09-05T21:48:28.380Z"),obj: {}},54269,53068],obj: {_id: 19262,str: "Pants",array: [],obj: {_id: 19263,str: "Unbranded Steel Keyboard incentivize virtual",num: 40373,date: new Date("2018-09-06T07:16:21.873Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 19264,str: "internet solution recontextualize International",num: 53966,date: new Date("2018-09-06T13:14:49.013Z"),obj: {_id: 19265,str: "Home infomediaries",date: new Date("2018-09-06T18:30:15.443Z"),array: [new Date("2018-09-06T13:31:56.331Z"),90888,"Director plum",{_id: 19266,str: "connecting",num: 33400,date: new Date("2018-09-06T10:38:40.801Z"),obj: {}},54036,"Incredible synthesize",new Date("2018-09-06T15:29:51.290Z"),3570,[],[],"Forks"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19267,str: "Bulgarian Lev Decentralized neural",num: 21585,date: new Date("2018-09-06T03:23:19.316Z"),array: [],obj: {_id: 19268,str: "Borders",num: 89173,date: new Date("2018-09-05T20:23:26.893Z"),array: ["Programmable Malaysian Ringgit Adaptive",54593,new Date("2018-09-06T16:51:04.318Z"),[],new Date("2018-09-06T15:43:40.016Z"),{_id: 19269,str: "Markets multi-byte",array: [],obj: {}},"Kyat","out-of-the-box black Oregon",new Date("2018-09-06T03:04:59.220Z"),75065,73512,{_id: 19270,num: 53351,date: new Date("2018-09-05T22:31:25.604Z")},56825,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19271,str: "empowering invoice bypassing",num: 69853,date: new Date("2018-09-05T20:18:17.755Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19272,str: "Forge",num: 23916,date: new Date("2018-09-06T04:09:57.991Z"),array: [new Date("2018-09-06T00:16:03.364Z"),{_id: 19273,str: "teal",num: 81072,obj: {}},"Paradigm",{_id: 19274,str: "Stand-alone",num: 63014,date: new Date("2018-09-06T13:20:24.561Z"),array: [59518,new Date("2018-09-06T15:17:15.018Z"),10985],obj: {_id: 19275,num: 55921,date: new Date("2018-09-06T03:48:33.828Z"),array: [],obj: {}}},"Incredible monitor",20505,49512,"parsing","Philippines",new Date("2018-09-06T19:11:50.076Z"),[21800]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19276,str: "Synchronised client-server connecting",num: 36165,date: new Date("2018-09-06T02:59:09.091Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19277,str: "leading edge",num: 30613,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19278,str: "instruction set reboot auxiliary",num: 32091,date: new Date("2018-09-06T02:26:29.556Z"),array: [],obj: {_id: 19279,str: "front-end composite Togo",date: new Date("2018-09-06T11:01:54.910Z"),array: [],obj: {_id: 19280,str: "Rustic Future-proofed Kuwaiti Dinar",num: 33884,date: new Date("2018-09-06T03:49:18.083Z"),array: [[85826,"withdrawal deposit web-readiness",new Date("2018-09-06T06:04:30.676Z"),{_id: 19281,str: "overriding",num: 20792,obj: {}},"Refined"],new Date("2018-09-06T15:08:37.804Z"),88007,84595,50480,"benchmark Baby",50299,new Date("2018-09-06T01:05:50.676Z"),{_id: 19282,num: 89151,array: [new Date("2018-09-06T02:58:44.543Z")],obj: {}},new Date("2018-09-06T15:03:25.192Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 19283,num: 9306,date: new Date("2018-09-05T22:27:32.880Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19284,str: "EXE Direct RSS",num: 54644,date: new Date("2018-09-06T18:38:18.180Z"),array: [73958,new Date("2018-09-06T12:15:42.111Z"),41036,"Jordanian Dinar bleeding-edge",12896,{_id: 19285,num: 71724,date: new Date("2018-09-06T15:37:22.230Z"),array: ["scalable"],obj: {_id: 19286,str: "Shirt Paradigm Rustic",num: 41354,array: [],obj: {}}},60491,"West Virginia",new Date("2018-09-05T21:54:25.450Z"),[],{_id: 19287,str: "zero defect",date: new Date("2018-09-06T19:05:21.315Z"),array: [new Date("2018-09-06T13:06:54.344Z"),{_id: 19288,str: "Sleek Fresh Towels Gorgeous",date: new Date("2018-09-06T09:05:05.921Z")},new Date("2018-09-06T01:11:46.634Z")],obj: {_id: 19289,num: 2923,array: []}},"azure",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19290,str: "program deposit",num: 53613,date: new Date("2018-09-05T23:37:20.981Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19291,str: "olive",num: 99676,date: new Date("2018-09-05T23:34:31.209Z"),array: [new Date("2018-09-05T23:41:17.765Z"),"Supervisor New Jersey",{_id: 19292,str: "Delaware panel bluetooth",num: 85032,date: new Date("2018-09-06T19:47:56.342Z"),array: [new Date("2018-09-06T15:51:28.533Z"),5117,91624,[],"Gardens Poland Customer",new Date("2018-09-06T10:46:24.801Z"),80869,"array",{_id: 19293,date: new Date("2018-09-06T19:08:01.545Z"),obj: {_id: 19294,str: "Metal impactful",num: 11850,obj: {_id: 19295,str: "Belgium Universal Borders",num: 57122,array: []}}},"generating"],obj: {}},["Orchard cutting-edge",new Date("2018-09-06T12:52:42.477Z")],39955,36891],obj: {_id: 19296,num: 90850,date: new Date("2018-09-06T02:49:16.532Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19297,num: 43293,date: new Date("2018-09-06T11:23:42.281Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19298,str: "program PCI",num: 32608,date: new Date("2018-09-06T15:50:19.668Z"),array: [],obj: {_id: 19299,str: "Accountability Ball",num: 62289,date: new Date("2018-09-06T15:20:41.695Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19300,str: "Borders feed Arkansas",num: 47890,date: new Date("2018-09-06T06:53:35.525Z"),array: [],obj: {_id: 19301,str: "Assurance Computer Director",num: 85025,date: new Date("2018-09-06T18:53:14.088Z"),array: [new Date("2018-09-06T19:22:39.380Z"),19868,"Director Plastic Awesome Frozen Soap",[new Date("2018-09-06T15:10:44.153Z"),new Date("2018-09-06T06:33:24.540Z"),"Granite Auto Loan Account"],10812,[],44506,"logistical copying Multi-tiered","Refined Cotton Towels",new Date("2018-09-06T12:54:26.043Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 19302,str: "Saint Pierre and Miquelon Toys holistic",num: 5023,date: new Date("2018-09-06T01:50:03.987Z"),array: [58542,85399,["AI Alley"],{_id: 19303,str: "yellow",num: 53098,date: new Date("2018-09-06T03:36:05.066Z"),array: []},{_id: 19304,num: 15678,date: new Date("2018-09-06T09:10:40.432Z"),obj: {_id: 19305,str: "invoice gold Small",num: 22053,date: new Date("2018-09-06T03:37:39.458Z"),array: ["Health"],obj: {}}},[],new Date("2018-09-06T07:11:51.429Z"),14125,new Date("2018-09-06T10:53:20.130Z"),new Date("2018-09-06T13:53:53.816Z"),new Date("2018-09-06T03:21:07.337Z"),[]],obj: {_id: 19306,str: "invoice Intelligent Rubber Hat navigating",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 19307,str: "firewall bandwidth quantifying",num: 65585,date: new Date("2018-09-06T00:06:30.529Z"),array: [44686,new Date("2018-09-06T18:36:59.905Z"),[],new Date("2018-09-05T21:10:28.515Z"),"bluetooth pink reboot",28447,31114,new Date("2018-09-05T22:58:33.141Z"),{_id: 19308,num: 88911,array: ["orchid Trace",77204,"Health"],obj: {_id: 19309,str: "backing up",date: new Date("2018-09-06T16:37:14.666Z"),array: [new Date("2018-09-06T03:29:31.674Z")],obj: {}}},[],73589],obj: {_id: 19310,str: "reboot",num: 58838,date: new Date("2018-09-05T22:40:44.596Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19311,str: "Stravenue Rustic Handcrafted",num: 33831,date: new Date("2018-09-05T23:56:08.784Z"),array: [],obj: {_id: 19312,str: "Secured project",num: 36508,date: new Date("2018-09-06T01:29:22.109Z"),array: [63181,37126,new Date("2018-09-06T15:55:22.078Z"),3822,"1080p Ball",new Date("2018-09-06T11:24:27.053Z"),"engage"]}});
    },

    function(coll) {
        return coll.insert({_id: 19313,str: "Reactive Fantastic auxiliary",num: 82453,date: new Date("2018-09-05T20:58:05.308Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19314,str: "Intelligent",num: 1489,date: new Date("2018-09-06T06:19:42.404Z"),array: [17777,new Date("2018-09-06T15:20:12.040Z"),75523,"Configurable parse",new Date("2018-09-05T20:34:34.423Z"),new Date("2018-09-06T03:13:15.872Z"),14562,["primary interactive fuchsia"],"Multi-channelled",35802,"Mouse"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19315,str: "Senior",num: 70647,date: new Date("2018-09-06T06:55:23.915Z"),array: ["ROI",new Date("2018-09-06T04:59:08.835Z"),"XSS",36453,"infomediaries Tanzanian Shilling",new Date("2018-09-06T11:43:28.647Z"),29734,[],10150,67210,{_id: 19316,str: "Borders Antarctica (the territory South of 60 deg S)",num: 21959,date: new Date("2018-09-06T16:00:08.836Z"),array: [],obj: {}},[{_id: 19317,date: new Date("2018-09-06T04:27:40.418Z"),array: [],obj: {_id: 19318,str: "override Philippine Peso",num: 16306,obj: {_id: 19319,str: "Metal copying Salad",num: 35265,date: new Date("2018-09-06T03:08:31.224Z"),obj: {_id: 19320,num: 25971,date: new Date("2018-09-06T00:19:28.048Z"),array: [new Date("2018-09-06T03:15:23.706Z"),"protocol Senior","Ports viral generating"]}}}}],[]]});
    },

    function(coll) {
        return coll.insert({_id: 19321,str: "web-enabled implementation",num: 98528,date: new Date("2018-09-05T22:15:17.675Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19322,str: "Oregon",num: 69633,date: new Date("2018-09-06T15:42:36.882Z"),obj: {_id: 19323,str: "Fish Small Soft Chips Dynamic",num: 63651,date: new Date("2018-09-06T06:48:07.862Z"),array: [75440,new Date("2018-09-05T23:57:06.683Z"),"Investment Account Sweden Handcrafted Fresh Chips",new Date("2018-09-05T23:41:35.374Z"),"Connecticut strategize Refined",86815,[],new Date("2018-09-05T23:23:49.823Z"),98523,"Customer collaborative Intelligent Frozen Shirt"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19324,str: "Officer Generic Steel",num: 99559,date: new Date("2018-09-05T23:08:00.084Z"),array: [],obj: {_id: 19325,str: "neural Manager",num: 11929,date: new Date("2018-09-06T16:32:07.138Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19326,str: "Ethiopian Birr Lilangeni",num: 38333,date: new Date("2018-09-06T12:31:34.273Z"),array: [new Date("2018-09-06T12:42:06.802Z"),["orchestrate",new Date("2018-09-05T22:41:44.166Z")],10940,23595,{_id: 19327,str: "Health homogeneous Auto Loan Account",num: 15266,array: [new Date("2018-09-06T15:48:34.842Z"),"orchestration"],obj: {}},82355,"applications",new Date("2018-09-06T02:28:31.471Z"),{_id: 19328,num: 22349,date: new Date("2018-09-06T11:55:46.448Z"),array: []},"client-driven application",[],13478,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19329,str: "Kazakhstan Georgia Awesome",num: 26453,date: new Date("2018-09-06T00:04:44.441Z"),array: [],obj: {_id: 19330,str: "Executive Denmark",date: new Date("2018-09-06T09:42:54.426Z"),array: [31585,80820,new Date("2018-09-05T20:02:19.389Z"),"Louisiana Unbranded",{_id: 19331,num: 61733,date: new Date("2018-09-05T23:59:06.266Z"),array: []},["calculating Nuevo Sol Mobility","Cheese generating"],26941,[new Date("2018-09-06T00:39:38.805Z"),new Date("2018-09-06T01:55:53.002Z")],new Date("2018-09-06T00:48:22.885Z"),{_id: 19332,str: "Borders",num: 87286,array: [71075,{_id: 19333,str: "world-class Michigan",num: 50546,date: new Date("2018-09-06T00:00:35.045Z"),array: [],obj: {}}],obj: {_id: 19334,str: "deposit instruction set JSON",num: 52280,date: new Date("2018-09-05T23:42:11.446Z"),obj: {_id: 19335,str: "Port Manor",obj: {}}}},"Soft"]}});
    },

    function(coll) {
        return coll.insert({_id: 19336,str: "Lead proactive Developer",num: 43598,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19337,str: "Organized",num: 22941,date: new Date("2018-09-06T19:03:54.466Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19338,str: "whiteboard Credit Card Account navigate",num: 26242,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19339,str: "1080p Wisconsin",num: 26558,date: new Date("2018-09-06T04:01:30.651Z"),array: [new Date("2018-09-06T16:21:20.098Z"),"transmit",63925,49829,90321,38657,"Investor",[],"plum generate Outdoors","Human"],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $month: { $dateToParts: {date: { $hour: { $dateToString: {date: { $week: { $dayOfYear: { $dateFromParts: {year: { $indexOfArray: [{ $concatArrays: [] },{ $toUpper: "Fantastic Checking Account sensor" },0] },day: { $sqrt: 12386 },hour: { $indexOfArray: [{ $objectToArray: '$obj' },{ $arrayElemAt: [[],'$num'] },0] },minute: 99888,second: { $ln: 18799 },millisecond: { $pow: ['$obj.obj.num','$obj.obj.num'] },timezone: "Africa/Tunis"} } } },format: "%%-%Z-%u-%U-%U-%V-%U"} } },timezone: "Asia/Seoul"} } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $toString: { $filter: {input: [],as: 'jane',cond: { $ne: [{ $range: [8,16,6] },{ $filter: {input: [],as: 'athena',cond: { $gt: [{ $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T05:11:40.163Z",timezone: "America/Argentina/Jujuy"} } },{ $isoWeekYear: { $year: { $minute: { $week: { $dateToParts: { date: { $second: { $millesecond: { $month: { $month: new Date("2018-09-06T17:43:49.398Z") } } } } } } } } } }] }} }] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',"black Avon"],[33375,'$num'],['$str'],[{ $week: { $isoWeek: { $dayOfMonth: { $hour: { $isoDayOfWeek: { $dayOfMonth: { $dayOfWeek: { $minute: { $dayOfYear: { $dayOfYear: { $minute: new Date("2018-09-06T04:48:59.607Z") } } } } } } } } } } },'$num'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'alia',in: { $log: [80812,'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $dateToParts: { date: { $month: { $dayOfYear: { $hour: { $dateFromParts: {isoWeekYear: { $subtract: ['$num',60566] },isoWeek: { $floor: 87343 },isoDayOfWeek: { $ln: '$obj.num' },second: { $exp: '$obj.obj.obj.num' },timezone: "Poland"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],[],[]],defaults: [99298,["New Hampshire",{obj: { str: "port global Strategist" },array: [new Date("2018-09-06T00:27:22.435Z")],num: 76071},/Handmade Plastic Shoes|whiteboard|Division/]]} }, _id: 0}}],

        [{$project: {a: { $range: [4,18,7] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',18,7] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $trim: { input: '$obj.obj.str' } },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],[{ $dateToString: {date: { $isoWeekYear: { $dateToString: {date: '$date',format: "%U-%z-%d-%Y-%L-%z",timezone: "Antarctica/Mawson"} } },onNull: { $ltrim: {input: { $substr: ["transitional Avon Wyoming",7,20] },chars: "payment generating"} }} },'$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[]],defaults: [[{},"Outdoors Utah",true],new Date("2018-09-06T07:11:42.007Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Checking Account",v: { $toLower: '$obj.obj.obj.str' }},{k: "success Algeria motivating",v: new Date("2018-09-06T19:10:59.552Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "program bluetooth",v: { $year: { $dayOfYear: '$obj.obj.obj.date' } }}]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.obj.str',{ $substrCP: [{ $toUpper: '$str' },0,18] },'$obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $second: { $dateFromParts: {year: { $multiply: [] },second: { $trunc: '$obj.num' },millisecond: { $size: [[]] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Sleek bleeding-edge"],63054] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],[{ $ltrim: { input: { $dateToString: {date: '$obj.obj.date',format: "%w-%H-%U-%Y-%z-%%-%L-%M-%H-%w-%j-%U",timezone: "America/Whitehorse"} } } },"Bermudian Dollar (customarily known as Bermuda Dollar)",'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Greece Missouri Buckinghamshire",v: true},{k: "Metrics",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "channels complexity",v: new Date("2018-09-06T07:17:13.542Z")},{k: "Sausages Borders Kwacha",v: false}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Unbranded Plastic Sausages Awesome",3,19] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfYear: { $millesecond: { $dateToString: {date: { $isoDayOfWeek: { $dayOfWeek: { $toDate: { $zip: {inputs: [['$obj.obj.str'],[],[],['$obj.str']],useLongestLength: false} } } } },format: "%Z-%G-%V-%j-%Z-%u-%d-%L-%V-%S-%j"} } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [27902],as: 'sylvester',cond: { $not: [{ $trim: { input: "payment Cambridgeshire" } }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.obj.date',timezone: "Europe/Warsaw"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:48:53.175Z"),onNull: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Lempira Brand",v: { $dateToParts: {date: { $dayOfWeek: { $isoDayOfWeek: { $second: { $minute: { $isoWeekYear: new Date("2018-09-06T03:44:56.392Z") } } } } },timezone: "NZ-CHAT"} }},{k: "scale Intranet",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Soft array"],{ $ceil: 7767 }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: { input: { $ltrim: { input: '$obj.str' } } } }],[],['$num'],[],["withdrawal",{ $toLower: "redundant withdrawal Bike" },"Berkshire eco-centric"],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $trim: {input: '$obj.obj.obj.str',chars: "Libyan Dinar generate brand"} }]] }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $toDate: { $arrayToObject: [[{k: "Security back-end",v: true},{k: "Agent Metal",v: { $ltrim: {input: { $substr: ["Rubber",13,8] },chars: '$obj.obj.str'} }},{k: "Investor access Stream",v: { $dateToParts: {date: { $isoWeek: { $year: { $dateToParts: {date: new Date("2018-09-06T18:28:18.441Z"),timezone: "Etc/GMT+0"} } } },timezone: "Europe/Isle_of_Man",iso8601: true} }}]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',46628],[true,true,'$date',true],[{ $substrCP: ["Shoal Iowa Texas",9,9] }],['$obj.obj.obj.num'],[],['$str',{ $toLower: "Rustic Soft Table" }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$num',94865],{ $trunc: '$num' }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrCP: ['$obj.obj.obj.obj.str',12,9] }],[],[],['$obj.num'],['$str',"interactive Washington Nevada","Rustic implement static",'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: '$obj.obj.str' },6,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Trinidad and Tobago",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num','$obj.num'],39133] }, _id: 0}}],

        [{$project: {a: { $toLower: "Bedfordshire Rufiyaa local area network" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],6981] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',8,2] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num',43539],[{ $rtrim: {input: { $ltrim: { input: '$obj.obj.str' } },chars: '$obj.str'} },"invoice invoice"],[{ $dateToString: {date: new Date("2018-09-06T01:36:34.180Z"),format: "%Z-%L-%m-%u-%V-%m-%G",onNull: { $objectToArray: '$obj' }} },'$obj.obj.str',"Electronics Toys"],["interactive Developer"],[58971,'$num','$num']]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[37417,'$num'],[{ $dateToString: {date: new Date("2018-09-06T09:58:36.397Z"),onNull: { $arrayElemAt: [["Designer"],35797] }} },'$obj.obj.obj.obj.str',"communities Savings Account"],[{ $toLower: '$obj.obj.obj.str' }],['$obj.obj.num']] } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $ltrim: {input: '$obj.obj.str',chars: '$obj.obj.obj.obj.str'} }],["Kazakhstan niches zero defect"],[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],85749] }, _id: 0}}],

        [{$project: {a: { $substr: ["Bedfordshire Corporate SSL",15,16] }, _id: 0}}],

        [{$project: {a: { $year: { $second: { $millesecond: { $toDate: { $substr: ["Benin South Dakota Ridges",3,2] } } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $minute: { $hour: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-05T23:50:43.032Z",timezone: "Indian/Chagos"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],29308] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Frozen",v: false}]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $rtrim: {input: "Functionality payment invoice",chars: { $toString: { $arrayElemAt: [[],79717] } }} },3,13] }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeek: { $isoWeek: { $dayOfYear: '$date' } } } }, _id: 0}}],

        [{$project: {a: { $trim: {input: "web services primary",chars: { $toString: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }} }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',15,4] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["auxiliary"],['$obj.obj.str'],['$obj.num',1587]] }, _id: 0}}],

        [{$project: {a: { $year: { $isoDayOfWeek: { $second: { $dateToString: {date: { $isoWeekYear: { $minute: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $mod: [83544,10453] },isoDayOfWeek: { $trunc: '$obj.obj.num' }} } } } },timezone: "Europe/Kaliningrad",onNull: { $concat: ["interfaces Dong withdrawal"] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $minute: { $toDate: { $substrBytes: ["calculate Rand",0,13] } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str',{ $trim: {input: '$str',chars: '$obj.obj.str'} }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Sharable Savings Account Program",v: '$obj.obj.obj.obj.date'},{k: "Supervisor Brunei Dollar",v: '$obj.obj.obj.date'},{k: "Kids Credit Card Account Iranian Rial",v: true}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["even-keeled Internal"],[],[],['$obj.obj.obj.str',"primary",{ $rtrim: { input: '$obj.obj.obj.str' } }],[],['$obj.obj.obj.num',54954]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "panel Buckinghamshire",v: { $substrCP: ['$obj.obj.str',18,16] }},{k: "Prairie mobile",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Avon",{ $concat: ['$str'] },"Buckinghamshire Borders"],[],[],[42251,49690]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],['$obj.obj.str'],[{ $dateToString: {date: { $month: { $dateToParts: {date: { $dateToString: {date: new Date("2018-09-06T12:18:14.055Z"),timezone: "Etc/GMT-11"} },timezone: "Africa/Djibouti"} } },format: "%M-%Z-%G-%d-%V-%G-%S-%V-%U-%m-%%",onNull: "Dalasi Practical Metal Bike violet"} }],['$obj.num',38616]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Bedfordshire Place",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["multi-tasking Steel Bedfordshire",{ $toLower: { $concat: ["Tuna Small"] } }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["Steel Clothing Fresh",19,7] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.obj.str'],cond: { $gte: [{ $year: { $month: { $dateFromParts: {isoWeekYear: { $trunc: '$$this' },isoWeek: { $ceil: 39956 },isoDayOfWeek: { $abs: 46033 },hour: { $multiply: [] },minute: { $floor: '$$this' },timezone: "America/Noronha"} } } },{ $arrayElemAt: [[],'$obj.obj.obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[5586,'$obj.obj.num',48872],35105] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num'],[],[74688],[{ $dateToString: { date: new Date("2018-09-06T17:31:43.604Z") } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Croatian Kuna efficient redundant",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $pow: ['$obj.obj.num',62853] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Savings Account withdrawal interface"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],{ $ln: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',14126],20816] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: {input: '$obj.str',chars: '$obj.str'} },"Burgs Bridge"],57565] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$str',11,15] },'$obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: { $dayOfYear: { $dayOfMonth: { $isoWeekYear: '$obj.obj.obj.obj.date' } } },onNull: '$obj.date'} }],[],[],["success payment Agent",'$obj.obj.str','$obj.obj.str',{ $concat: [{ $toString: { $dateToParts: { date: { $month: { $isoDayOfWeek: { $minute: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: '$num',isoDayOfWeek: { $trunc: 83809 },hour: { $ln: '$obj.obj.num' },second: { $floor: 9046 },millisecond: { $multiply: [69750] }} },timezone: "Etc/Greenwich"} } } } } } } },"SMTP Massachusetts"] }]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T10:46:08.738Z"),format: "%w-%Z-%L-%%-%z-%w-%S-%U-%u",onNull: "Representative"} }, _id: 0}}],

        [{$project: {a: { $month: { $year: { $week: { $isoWeek: { $second: { $toDate: { $arrayElemAt: [[],31475] } } } } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[],["bypassing Money Market Account Timor-Leste","Group Facilitator"],['$obj.str',{ $rtrim: { input: { $ltrim: {input: "Executive Row Tuna",chars: { $substrCP: ['$str',20,5] }} } } },'$obj.obj.str'],[]]] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["technologies array Gloves",{ $toLower: "compressing" },{ $substrCP: ["Manager XSS",7,2] }]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfYear: { $dateFromString: {dateString: "2018-09-05T20:20:56.737Z",format: "%S-%U-%u-%Y-%V-%Y",onError: { $range: [3,12,5] }} } },timezone: "Canada/Newfoundland",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],69924] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',14,8] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str','$obj.obj.obj.str'],34327] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $substr: [{ $dateToString: { date: '$obj.date' } },0,19] }],[31563],[],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "methodologies Guadeloupe Trace",v: new Date("2018-09-06T15:28:33.197Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["initiatives Multi-tiered"]]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $toDate: { $arrayElemAt: [["Fresh gold Kids"],'$num'] } },iso8601: true} }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.obj.str',1,3] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: "grey lime Intelligent Granite Bike"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Computers programming"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$num',17116]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $isoDayOfWeek: { $dateFromParts: {year: { $floor: 43151 },month: { $log10: { $abs: 93590 } },day: '$obj.obj.num',minute: { $trunc: '$obj.obj.obj.num' },second: { $sqrt: 60697 }} } },format: "%z-%S-%L-%z-%j-%Y-%Y-%Z-%Y-%m-%M-%L"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[76567],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $hour: { $isoWeekYear: { $millesecond: { $toDate: { $substr: ['$obj.str',7,13] } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[709],["turquoise Summit payment"],['$num',75713],[],['$obj.obj.num',60052,{ $divide: ['$obj.num',84891] }]]] }, _id: 0}}],

        [{$project: {a: { $month: { $hour: { $week: { $dateFromString: {dateString: "2018-09-05T21:36:26.494Z",timezone: "America/Argentina/La_Rioja",onError: { $arrayToObject: [[]] }} } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $rtrim: {input: '$obj.obj.obj.str',chars: { $dateToString: {date: '$date',onNull: { $reverseArray: [[]] }} }} },"compressing navigating Future"],as: 'gail',in: { $mod: [97737,77011] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["overriding Nuevo Sol"],cond: { $not: [{ $arrayElemAt: [[33560],'$$this'] }] }} }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substr: ["quantify connecting Frozen",0,7] }] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',"Savings Account dynamic transmit",{ $substrCP: ['$obj.str',4,13] }] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],[57441,{ $add: [] },75501,{ $floor: '$obj.obj.num' }],[],['$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],72519] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $hour: { $millesecond: { $dayOfMonth: { $year: '$obj.obj.obj.date' } } } },timezone: "US/Michigan"} }, _id: 0}}],

        [{$project: {a: { $hour: { $isoDayOfWeek: { $dateToString: {date: { $dateToString: {date: { $dayOfMonth: { $second: { $isoDayOfWeek: { $minute: { $dayOfYear: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T15:24:09.613Z",onNull: '$obj.obj.obj.str'} } } } } } } },format: "%m-%%-%m-%G-%w",timezone: "Indian/Kerguelen"} },onNull: { $arrayToObject: [[{k: "innovate salmon panel",v: "cross-platform RSS"},{k: "Director Utah Bedfordshire",v: true}]] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],27783] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $minute: { $dateToString: {date: '$date',format: "%S-%m-%Z-%w-%Z-%j-%m-%L-%%-%z-%U",onNull: '$obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["New Mexico hack",{ $trim: { input: { $rtrim: {input: '$obj.obj.str',chars: "systems hard drive"} } } }],in: { $size: [['$obj.obj.obj.num']] }} }, _id: 0}}],

        [{$project: {a: { $concat: ["PCI",{ $substrBytes: ["out-of-the-box",7,7] }] }, _id: 0}}],

        [{$project: {a: { $second: { $millesecond: { $month: { $year: { $minute: { $dateFromParts: {isoWeekYear: { $log: ['$obj.obj.obj.num',35331] },isoWeek: { $indexOfArray: [{ $map: {input: ['$obj.obj.obj.obj.str'],as: 'era',in: { $multiply: [97655] }} },{ $arrayElemAt: [[],'$num'] },19] },minute: { $sqrt: '$obj.obj.num' },millisecond: { $subtract: ['$obj.obj.obj.num',{ $cmp: [{ $arrayElemAt: [['$obj.obj.str','$obj.obj.obj.obj.str'],40603] },{ $toUpper: { $trim: { input: "Village" } } }] }] },timezone: "Africa/Lusaka"} } } } } } }, _id: 0}}],

        [{$project: {a: { $concat: ["Ethiopia capacitor Western Sahara",{ $concat: ["Refined",'$obj.obj.str'] },{ $trim: {input: '$obj.obj.str',chars: "Money Market Account"} }] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substrCP: [{ $substrBytes: ["Gorgeous",20,6] },15,7] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: '$date',format: "%j-%L-%j-%d-%S-%w-%U"} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Toys applications"],[],[28532],[{ $substr: [{ $substr: ["Hawaii Electronics input",5,10] },6,20] }],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToParts: {date: { $hour: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T10:00:06.445Z",onError: { $zip: {inputs: [['$obj.obj.obj.num',24341],["reboot coherent"],[],[{ $rtrim: {input: '$obj.obj.str',chars: "deposit methodology"} },"real-time"],['$str',"bluetooth New Israeli Sheqel Sleek",{ $toString: { $arrayToObject: [[{k: "Assimilated",v: { $trim: { input: { $substrCP: [{ $toLower: "Producer" },9,18] } } }}]] } },'$obj.obj.str']],defaults: [[{}],true]} },onNull: '$obj.obj.obj.obj.str'} } } },timezone: "Indian/Maldives",iso8601: false} },format: "%L-%j-%j-%G"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Jamaica Squares Colombian Peso Unidad de Valor Real",v: false},{k: "Dynamic generating",v: new Date("2018-09-06T16:24:22.374Z")},{k: "Data",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [27370],as: 'lula',in: { $log: [82834,{ $floor: 39612 }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Street"],62111] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Metal compressing",'$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $second: { $dayOfMonth: { $toDate: { $arrayToObject: [[["embrace wireless",{ $ltrim: { input: '$obj.obj.str' } },"ubiquitous Chicken",'$obj.str'],[],['$obj.num',92792,35425],[98880]]] } } } } }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toLower: "Vatu optical" },chars: { $toLower: '$obj.obj.str' }} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeek: { $millesecond: { $millesecond: { $isoWeekYear: { $week: { $hour: { $second: { $week: { $year: { $dateToParts: {date: { $month: { $dayOfYear: { $second: { $dateFromParts: {year: { $subtract: [16939,'$num'] },month: { $mod: [76203,'$obj.obj.num'] },day: { $exp: 60120 },hour: { $subtract: ['$obj.obj.num','$obj.obj.num'] },minute: { $add: [33796] },millisecond: { $multiply: [] },timezone: "America/Monterrey"} } } } },iso8601: true} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfWeek: { $week: { $year: { $dateToString: {date: '$obj.obj.obj.obj.date',format: "%Y-%w-%V-%Y-%d-%z-%Y-%Z-%w-%%-%U",onNull: { $substrBytes: ['$obj.obj.obj.obj.str',16,16] }} } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $floor: '$num' },isoWeek: { $log: [68750,'$num'] },isoDayOfWeek: { $abs: { $ceil: '$num' } },hour: { $size: [[{ $toLower: "Somoni" }]] },minute: { $divide: [72425,'$obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toString: { $arrayElemAt: [['$obj.obj.obj.num','$obj.obj.num',42131],'$obj.obj.obj.num'] } },10,4] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',"virtual Row"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["invoice",20,9] }],2815] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "indexing Borders leading edge",v: '$obj.obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $millesecond: { $minute: { $week: { $millesecond: { $year: { $month: { $dayOfYear: '$date' } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Beauty",v: 86341}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "port withdrawal generating",v: true},{k: "Tasty web-readiness",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $concat: ["virtual monitor transmitter",'$obj.str'] }, _id: 0}}],

        [{$project: {a: { $concat: ["Generic Concrete Chair"] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $second: { $minute: { $dayOfYear: { $dayOfWeek: { $dateToParts: {date: { $year: { $month: { $week: { $dateToString: { date: new Date("2018-09-06T15:22:14.412Z") } } } } },timezone: "Etc/GMT-10"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $dateToParts: {date: { $dayOfMonth: { $month: { $minute: { $dateFromParts: {isoWeekYear: { $add: ['$obj.num',56480] },isoWeek: { $divide: ['$obj.obj.obj.num',90322] },isoDayOfWeek: { $ln: 17126 },hour: { $pow: ['$obj.obj.num',3347] },minute: { $mod: [{ $size: [[]] },94377] }} } } } },timezone: "Africa/Libreville"} },onNull: '$obj.obj.obj.obj.str'} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$str' },'$str',"Usability Analyst"],11888] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoDayOfWeek: { $isoWeekYear: { $second: { $dayOfMonth: { $dayOfMonth: { $millesecond: { $year: { $dateFromString: {dateString: "2018-09-06T09:45:06.089Z",onError: { $map: {input: [],as: 'gloria',in: { $add: [] }} }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Movies",v: new Date("2018-09-06T15:43:54.426Z")},{k: "Administrator",v: false}]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $sqrt: 50983 },isoWeek: { $cmp: [{ $arrayElemAt: [[{ $toString: { $objectToArray: '$obj.obj.obj' } }],55531] },{ $arrayElemAt: [[],'$num'] }] },second: { $pow: [33641,'$obj.obj.obj.num'] },millisecond: { $size: [['$obj.obj.obj.obj.str',"Kwanza Automotive",{ $trim: { input: '$obj.obj.obj.obj.str' } },{ $rtrim: {input: "markets",chars: '$obj.obj.str'} }]] },timezone: "Asia/Hebron"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["model generating Internal",'$obj.obj.obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $week: { $millesecond: { $dateToString: {date: { $dateToString: {date: { $dayOfMonth: { $month: { $isoWeek: { $isoDayOfWeek: { $dayOfWeek: { $dayOfYear: { $isoDayOfWeek: { $dayOfWeek: { $year: { $hour: { $dayOfMonth: { $minute: { $second: { $dayOfWeek: { $dayOfYear: { $isoWeekYear: { $week: { $dayOfWeek: { $toDate: { $substrBytes: ['$obj.obj.str',18,9] } } } } } } } } } } } } } } } } } } } },onNull: { $arrayElemAt: [['$obj.obj.num',14442,67697],'$num'] }} },format: "%m-%m-%H-%G-%H-%w-%U-%%",timezone: "Europe/Volgograd"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["COM"],58622] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account Home Loan Account",v: '$obj.obj.obj.obj.str'},{k: "functionalities integrate",v: 55538},{k: "New York port Keys",v: new Date("2018-09-05T20:16:16.158Z")}]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfMonth: { $millesecond: { $week: { $isoWeekYear: { $minute: { $second: { $isoWeek: { $dateToString: { date: { $dateFromParts: {isoWeekYear: { $multiply: ['$obj.obj.obj.num','$obj.obj.obj.num'] },isoWeek: 12260,second: { $sqrt: { $log10: { $abs: '$obj.num' } } }} } } } } } } } } } },timezone: "America/Cuiaba"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num',{ $trunc: 2762 },62875],in: 84953} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $substrCP: [{ $trim: {input: { $trim: { input: "one-to-one Sausages navigating" } },chars: '$obj.str'} },13,14] } },"array lavender"],['$obj.str'],[66199,99935,'$obj.num'],[false,25413,new Date("2018-09-06T13:27:17.960Z")]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T16:28:34.137Z"),format: "%%-%z-%m-%w",timezone: "Pacific/Saipan",onNull: { $arrayElemAt: [['$obj.obj.obj.str',"invoice Future"],'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Frozen"],46263] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $millesecond: { $dayOfWeek: { $isoWeekYear: { $minute: { $year: { $dateToParts: {date: { $isoWeek: { $toDate: { $month: { $second: new Date("2018-09-06T02:03:34.281Z") } } } },iso8601: true} } } } } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: '$obj.obj.obj.date',format: "%%-%M-%L-%m-%d-%d"} } }, _id: 0}}],

        [{$project: {a: { $toLower: "aggregate Granite Refined Frozen Pizza" }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num'],cond: { $lt: [{ $arrayElemAt: [[{ $toString: { $map: {input: ['$$this',66931],as: 'ricky',in: { $indexOfArray: [{ $range: [9,13] },{ $minute: new Date("2018-09-06T01:56:52.941Z") },5] }} } },"Hawaii"],'$obj.obj.num'] },{ $objectToArray: '$$this' }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],1829] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeek: { $dateToParts: {date: { $isoWeekYear: { $dayOfYear: { $toDate: { $arrayToObject: [[['$obj.obj.num',30119,'$obj.obj.obj.num',5820],[],[],["Salad Texas Gorgeous",'$obj.str'],['$obj.obj.obj.str',{ $toString: { $arrayToObject: [[{k: "Money Market Account",v: true}]] } }]]] } } } },timezone: "Antarctica/DumontDUrville",iso8601: true} } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $log: [38898,42555] }] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $log10: 95329 }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "mobile EXE",v: new Date("2018-09-06T01:47:49.800Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "backing up olive calculating",v: new Date("2018-09-06T03:34:57.843Z")},{k: "PCI",v: { $substrBytes: ["deposit",7,0] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeekYear: { $isoWeek: { $dayOfYear: { $dateFromString: {dateString: "2018-09-05T20:35:40.299Z",format: "%Y-%Y-%%-%w",timezone: "Navajo",onNull: { $arrayToObject: [[[],[{ $toString: { $arrayElemAt: [[63979],62405] } }]]] }} } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[85646],[],[],['$obj.obj.str',{ $concat: ["Checking Account Money Market Account","FTP Rustic Rubber Car Hollow",{ $substrCP: [{ $dateToString: {date: '$obj.date',format: "%Y-%M-%S-%u-%d-%G-%U-%u-%%-%H-%H-%d",timezone: "Europe/San_Marino",onNull: { $arrayElemAt: [["Arizona",'$obj.obj.str'],31000] }} },11,1] }] }],['$obj.obj.obj.num',{ $floor: 64160 }]]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $pow: [29231,'$obj.obj.obj.num'] },isoDayOfWeek: { $mod: [36355,'$obj.obj.obj.num'] },second: { $floor: '$obj.num' }} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeek: { $week: { $dateFromParts: {year: { $sqrt: 62185 },day: { $ceil: '$obj.obj.obj.num' },hour: { $multiply: [] },second: { $exp: '$obj.obj.obj.num' },millisecond: { $pow: ['$obj.obj.obj.num',26202] },timezone: "Jamaica"} } } } }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: { $dayOfMonth: { $dayOfWeek: { $isoDayOfWeek: { $isoDayOfWeek: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-05T20:35:44.380Z",format: "%w-%S-%H-%j-%d-%z-%U-%V-%z-%d-%U-%z",onError: { $arrayToObject: [[{k: "redundant",v: true}]] },onNull: { $toString: { $arrayToObject: [[{k: "wireless Walks",v: new Date("2018-09-06T06:25:24.542Z")}]] } }} } } } } } },timezone: "Etc/GMT",onNull: "Ohio South Carolina"} } }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $dateToString: {date: new Date("2018-09-06T17:03:42.714Z"),timezone: "America/Montreal"} },7,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[99988],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: { $concat: [{ $rtrim: {input: "enhance",chars: '$obj.obj.obj.str'} },{ $toUpper: "Fantastic Cotton Table firewall" }] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: '$str' },{ $substrBytes: ["Licensed",15,12] }],[],[],['$obj.obj.str'],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[91811,'$num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],40428] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T14:12:03.022Z",format: "%Z-%d-%w-%S-%S-%H-%z-%%",timezone: "PST8PDT",onNull: '$obj.obj.obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $dateToString: {date: new Date("2018-09-06T07:53:31.923Z"),timezone: "US/East-Indiana",onNull: "orange Kansas Micronesia"} }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num','$obj.num',87175],["capacitor"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["withdrawal white",'$obj.str'],93411] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [['$num'],39931] } }, _id: 0}}],

        [{$project: {a: { $concat: ["ADP Lari Tugrik"] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["matrix Granite copy",20,13] }],6976] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T07:34:39.234Z",timezone: "America/Argentina/Rio_Gallegos"} } } }, _id: 0}}],

        [{$project: {a: { $month: { $toDate: { $toString: { $dayOfMonth: { $millesecond: { $minute: { $hour: { $week: { $dateFromString: {dateString: "2018-09-06T13:24:11.980Z",format: "%z-%d-%d-%H-%w-%U-%z-%S-%%-%j",onNull: "enable Future rich"} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "leverage capacitor",v: true}]] }, _id: 0}}],

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
