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
        return coll.insert({_id: 11858,str: "Baby Division",num: 53440,date: new Date("2018-09-06T01:27:54.214Z"),array: [69343,new Date("2018-09-06T00:46:58.913Z"),46220,new Date("2018-09-06T11:48:48.474Z"),"frictionless Consultant","Intelligent",{_id: 11859,str: "Rustic Agent Cambridgeshire",date: new Date("2018-09-05T23:03:12.420Z"),array: [],obj: {}},new Date("2018-09-06T08:47:30.792Z"),"Branding GB","generate",new Date("2018-09-05T23:00:14.714Z")],obj: {_id: 11860,str: "payment Falkland Islands (Malvinas) Buckinghamshire",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11861,str: "Divide HDD multi-byte",num: 8981,date: new Date("2018-09-05T21:45:33.480Z"),array: ["array Sausages",180,new Date("2018-09-06T19:47:55.606Z"),new Date("2018-09-06T13:18:05.790Z"),"withdrawal",[{_id: 11862,str: "neural SCSI",num: 50563,date: new Date("2018-09-06T17:01:54.991Z"),obj: {}},88309,"deposit",new Date("2018-09-05T20:57:07.199Z"),new Date("2018-09-06T15:03:52.695Z"),65725],92959],obj: {_id: 11863,str: "purple Checking Account open-source",num: 32611,date: new Date("2018-09-05T23:59:45.041Z"),array: [],obj: {_id: 11864,str: "Executive Proactive",date: new Date("2018-09-06T04:26:29.337Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 11865,num: 62498,date: new Date("2018-09-06T09:42:00.942Z"),array: ["Investor",new Date("2018-09-06T17:34:16.728Z"),98817,["Engineer Open-architected infomediaries"],{_id: 11866,str: "Marketing",num: 11145,date: new Date("2018-09-05T22:08:55.848Z"),array: [],obj: {}},new Date("2018-09-06T03:42:41.457Z"),81166,"Lead solution",50999,{_id: 11867,str: "Consultant",num: 58701,date: new Date("2018-09-05T20:09:48.298Z"),array: [],obj: {_id: 11868,str: "Table",array: [{_id: 11869,date: new Date("2018-09-05T23:01:21.525Z"),array: [],obj: {_id: 11870,str: "neural-net",num: 45469,date: new Date("2018-09-06T01:58:35.043Z"),obj: {}}},["lime"]]}},"Ergonomic Bypass",new Date("2018-09-06T04:41:11.716Z"),72201]});
    },

    function(coll) {
        return coll.insert({_id: 11871,num: 13971,date: new Date("2018-09-06T03:12:40.447Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11872,str: "Licensed",num: 19779,date: new Date("2018-09-06T09:34:57.835Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11873,str: "capacitor",num: 65495,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11874,str: "revolutionize",num: 20602,date: new Date("2018-09-06T01:23:12.751Z"),array: [new Date("2018-09-06T03:44:30.849Z"),73294,new Date("2018-09-06T17:06:08.915Z"),new Date("2018-09-06T19:46:18.204Z"),"indexing",{_id: 11875,str: "Cook Islands backing up payment",num: 33659,date: new Date("2018-09-05T22:52:50.214Z"),array: [],obj: {_id: 11876,str: "application",num: 37376,date: new Date("2018-09-06T12:09:44.718Z"),obj: {_id: 11877,str: "transmitting reboot",array: [78362,[new Date("2018-09-06T19:35:00.920Z")],"Pennsylvania Small Steel Keyboard",[]],obj: {}}}},{_id: 11878,str: "Club product",num: 74914,date: new Date("2018-09-06T08:48:17.892Z"),obj: {}},48010,new Date("2018-09-05T21:48:33.615Z"),{_id: 11879,str: "emulation",num: 81442,date: new Date("2018-09-06T19:44:17.579Z"),array: [],obj: {}},{_id: 11880,array: ["synergize"],obj: {_id: 11881,array: [{_id: 11882,str: "USB Checking Account Iowa"},72085],obj: {}}},95079],obj: {_id: 11883,str: "Health",num: 38476,date: new Date("2018-09-06T08:34:48.624Z")}});
    },

    function(coll) {
        return coll.insert({_id: 11884,str: "Electronics Orchestrator groupware",num: 41465,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11885,num: 64537,date: new Date("2018-09-06T06:15:04.941Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11886,str: "solid state Executive",num: 46656,date: new Date("2018-09-06T08:19:19.891Z"),array: [new Date("2018-09-06T17:58:45.320Z"),new Date("2018-09-06T06:00:10.780Z"),"Profound","Concrete Berkshire","Divide quantify Data",69296,26322,[49658],new Date("2018-09-05T20:18:17.617Z"),"Bedfordshire",[]],obj: {_id: 11887,str: "deposit Baby",num: 89259,date: new Date("2018-09-05T22:43:22.573Z"),array: [{_id: 11888,str: "Shoes Armenia",date: new Date("2018-09-06T16:29:50.167Z"),obj: {}},96673,[],[]],obj: {_id: 11889,num: 22464,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 11890,str: "Berkshire invoice",num: 24396,date: new Date("2018-09-06T14:41:54.183Z"),array: [],obj: {_id: 11891,str: "one-to-one",num: 33654,date: new Date("2018-09-06T12:29:47.440Z"),array: [new Date("2018-09-05T22:24:42.731Z"),"Gorgeous Concrete Fish","Accountability Pants bluetooth",new Date("2018-09-06T03:20:01.059Z"),[],76631,87726,[new Date("2018-09-06T14:28:23.309Z"),"payment Chair",{_id: 11892,date: new Date("2018-09-06T05:18:29.959Z"),array: [84570]}],"dynamic payment",new Date("2018-09-06T00:24:27.073Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11893,str: "Wisconsin quantify",num: 81221,date: new Date("2018-09-06T16:02:27.406Z"),array: [6462,new Date("2018-09-06T11:28:07.813Z"),"Computers",32846,new Date("2018-09-06T12:17:06.462Z"),23730,{_id: 11894,num: 69894,date: new Date("2018-09-05T22:02:26.415Z")},new Date("2018-09-06T19:51:47.781Z"),"Wooden Organic",{_id: 11895,num: 2499,date: new Date("2018-09-05T23:43:59.666Z"),array: [["needs-based",[]],new Date("2018-09-05T23:32:07.647Z"),48998,new Date("2018-09-06T09:10:20.747Z")],obj: {}},"Cheese",new Date("2018-09-06T02:40:22.042Z")],obj: {_id: 11896,str: "front-end",num: 27006,obj: {_id: 11897,str: "Home Loan Account tan",num: 94823,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11898,str: "PCI Denmark",num: 55314,date: new Date("2018-09-06T10:06:47.432Z"),array: ["Legacy Division Handcrafted Plastic Car",[],new Date("2018-09-06T04:01:03.190Z"),new Date("2018-09-06T19:08:54.954Z"),"ROI ivory",11420,[],"TCP",new Date("2018-09-06T08:05:43.044Z"),4671],obj: {_id: 11899,str: "enable Bacon",num: 26004,date: new Date("2018-09-06T00:21:31.101Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11900,str: "Producer web-readiness program",num: 25705,date: new Date("2018-09-06T05:24:35.398Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11901,str: "Refined Frozen Chair",num: 17542,date: new Date("2018-09-05T21:07:36.868Z"),array: [61419,68420,"Checking Account partnerships","leading edge Palladium",new Date("2018-09-06T02:22:33.940Z"),"Manager",[],[92448],new Date("2018-09-05T20:08:31.330Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11902,str: "Towels Director",num: 78523,date: new Date("2018-09-06T17:54:52.080Z"),array: ["Wooden",14589,[],new Date("2018-09-06T14:10:00.806Z"),new Date("2018-09-06T08:13:52.871Z"),93156,43665,["systems Automotive ADP",[],{_id: 11903,str: "markets",obj: {}},{_id: 11904,str: "payment violet",num: 38894,date: new Date("2018-09-05T23:23:25.576Z"),array: [new Date("2018-09-06T07:57:27.460Z"),"deposit web-enabled HDD",new Date("2018-09-06T04:46:02.395Z"),new Date("2018-09-06T15:13:17.194Z")],obj: {_id: 11905,str: "markets Circles synthesize",num: 37454,date: new Date("2018-09-05T20:34:33.150Z"),obj: {_id: 11906,str: "payment vortals dedicated",num: 7284,date: new Date("2018-09-06T09:55:20.447Z"),array: []}}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11907,str: "array Metrics Harbors",num: 55431,date: new Date("2018-09-06T19:51:11.868Z"),array: ["Togo copy","Bahamas Bedfordshire Usability",[],68188,79714,new Date("2018-09-06T08:30:32.535Z"),"Gambia Refined Convertible Marks",4983,{_id: 11908,str: "Awesome Home",date: new Date("2018-09-06T18:17:31.042Z"),array: [],obj: {}},{_id: 11909,str: "Jersey deposit",date: new Date("2018-09-05T21:56:05.753Z"),array: [[50874],62953],obj: {_id: 11910,str: "deposit",num: 96863,date: new Date("2018-09-06T13:20:55.487Z"),array: []}},new Date("2018-09-06T05:45:24.387Z"),"Cambridgeshire Quality-focused"]});
    },

    function(coll) {
        return coll.insert({_id: 11911,str: "Refined Granite Car",date: new Date("2018-09-05T22:06:51.039Z"),array: [new Date("2018-09-06T19:49:25.940Z"),"Dynamic",64118,272,new Date("2018-09-06T13:27:40.175Z"),44128,"Chicken Lead Costa Rica",{_id: 11912,str: "Tuna Savings Account",num: 98869,array: [],obj: {_id: 11913,num: 63070,date: new Date("2018-09-06T19:26:45.748Z"),array: [[],new Date("2018-09-06T09:36:53.696Z"),19649],obj: {_id: 11914,str: "parsing Metal enhance",num: 23677,date: new Date("2018-09-06T14:06:57.646Z"),array: ["virtual",49955],obj: {}}}},{_id: 11915,str: "optical Jewelery dot-com",num: 34495,date: new Date("2018-09-06T07:13:05.097Z"),obj: {_id: 11916,str: "program Knoll protocol",num: 22119,date: new Date("2018-09-06T17:06:28.836Z")}},"withdrawal Configurable"]});
    },

    function(coll) {
        return coll.insert({_id: 11917,str: "productivity SSL reinvent",num: 58375,date: new Date("2018-09-06T02:15:06.062Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11918,num: 67611,date: new Date("2018-09-06T07:58:19.334Z"),array: [],obj: {_id: 11919,str: "Senior GB Pizza",num: 52120,date: new Date("2018-09-06T16:13:48.408Z"),array: ["cross-platform",70665,{_id: 11920,str: "Honduras interactive intuitive",num: 6044,date: new Date("2018-09-06T13:06:36.276Z"),array: [26392,new Date("2018-09-06T09:36:38.661Z"),"quantify PCI Upgradable",36294,16060,{_id: 11921,date: new Date("2018-09-05T20:20:58.435Z"),array: [],obj: {}}]},"interactive IB Checking Account",{_id: 11922,str: "Awesome",num: 26917,obj: {_id: 11923,num: 23307,obj: {}}},new Date("2018-09-06T12:20:24.872Z"),new Date("2018-09-06T09:25:09.542Z"),new Date("2018-09-06T00:36:05.187Z"),new Date("2018-09-06T17:45:31.189Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 11924,str: "Tools Iowa Global",num: 17645,date: new Date("2018-09-06T15:46:09.075Z"),array: [new Date("2018-09-06T04:07:48.478Z"),"Montserrat",{_id: 11925,str: "turquoise orchestrate",num: 86021,date: new Date("2018-09-05T20:46:22.913Z"),array: [],obj: {}},new Date("2018-09-05T20:48:59.947Z"),"Rubber gold Communications",[86119,6944],"Borders circuit",new Date("2018-09-06T15:33:01.167Z"),new Date("2018-09-06T12:10:42.744Z"),{_id: 11926,num: 33166,date: new Date("2018-09-06T15:07:47.055Z"),array: [76903,"Consultant Producer explicit",new Date("2018-09-05T21:56:44.724Z"),"Croatian Kuna executive full-range"],obj: {_id: 11927,str: "Cambridgeshire Savings Account",num: 85411,array: [],obj: {_id: 11928,str: "Incredible asynchronous Alabama",num: 76903,array: ["well-modulated Buckinghamshire",[]]}}},"Borders"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11929,str: "Glen",num: 97411,date: new Date("2018-09-06T18:34:09.014Z"),array: [32307,"enterprise",new Date("2018-09-06T14:52:53.766Z"),61675,new Date("2018-09-06T08:46:53.376Z"),7480,{_id: 11930,str: "challenge",date: new Date("2018-09-06T15:17:44.881Z"),obj: {_id: 11931,str: "payment benchmark",num: 65262,date: new Date("2018-09-06T17:36:58.125Z"),array: [],obj: {}}},new Date("2018-09-06T01:55:10.419Z"),[new Date("2018-09-05T21:57:15.081Z"),"paradigms Hryvnia",55548,4696,"indexing Borders","Horizontal Refined Granite Shoes Pants"]]});
    },

    function(coll) {
        return coll.insert({_id: 11932,str: "Central Sleek Forks",num: 21304,date: new Date("2018-09-06T14:51:28.383Z"),array: [],obj: {_id: 11933,str: "Optimization Silver Steel",num: 3011,array: [["multi-byte","Mouse Andorra",new Date("2018-09-06T03:27:31.421Z")],[],"Car strategize",15908,{_id: 11934,str: "payment",num: 38051,date: new Date("2018-09-06T04:37:04.528Z"),array: [],obj: {}},new Date("2018-09-06T12:50:06.157Z"),{_id: 11935,str: "deposit Tasty payment",num: 86100,date: new Date("2018-09-06T01:08:30.146Z"),array: [66160,57911]},[],55722,"Checking Account",new Date("2018-09-06T13:08:28.715Z")],obj: {_id: 11936,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11937,str: "compressing Mouse Falkland Islands (Malvinas)",num: 66078,date: new Date("2018-09-06T12:00:50.966Z"),array: [{_id: 11938,str: "technologies Web Future-proofed",num: 88973,date: new Date("2018-09-06T12:38:24.452Z"),array: [1907,31351,new Date("2018-09-05T21:50:32.343Z"),new Date("2018-09-06T18:00:05.578Z")],obj: {}},{_id: 11939,obj: {_id: 11940,str: "convergence e-commerce",num: 43516,obj: {}}},"Tasty Practical Granite Fish Buckinghamshire",[],"plug-and-play functionalities",new Date("2018-09-06T05:00:30.642Z"),new Date("2018-09-06T19:01:19.190Z"),77209,[],{_id: 11941,str: "Specialist plug-and-play",num: 47625,date: new Date("2018-09-06T02:01:01.121Z"),array: [[],new Date("2018-09-06T08:37:50.485Z"),new Date("2018-09-06T02:44:57.341Z"),"Lake transform Metal",53478],obj: {_id: 11942,str: "Palladium maximize",date: new Date("2018-09-06T18:08:15.181Z"),array: ["multi-byte"],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 11943,str: "Kwanza",num: 37743,date: new Date("2018-09-06T07:32:19.890Z"),array: [69157,"value-added bypassing Shirt",63146,new Date("2018-09-06T11:11:34.835Z"),new Date("2018-09-06T04:46:37.897Z"),"Distributed","invoice harness",{_id: 11944,date: new Date("2018-09-06T02:09:05.276Z"),array: []},{_id: 11945,str: "Awesome Fresh Chips Pennsylvania revolutionize",num: 65945,obj: {_id: 11946,num: 55988,date: new Date("2018-09-06T03:45:00.907Z"),array: [],obj: {_id: 11947,str: "value-added",num: 96289,obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11948,str: "e-tailers",num: 83322,date: new Date("2018-09-05T21:23:14.903Z"),array: [],obj: {_id: 11949,str: "Executive",num: 32682,date: new Date("2018-09-06T02:33:35.495Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11950,str: "Ergonomic Fresh Bike",num: 52020,date: new Date("2018-09-05T22:05:52.770Z"),array: ["Cheese Chicken",new Date("2018-09-06T10:25:38.505Z"),66049,"Rand neural-net",new Date("2018-09-06T02:08:06.187Z"),new Date("2018-09-06T19:02:04.899Z"),"Cambridgeshire deposit solid state",[],new Date("2018-09-06T08:21:06.419Z"),68317,"Fantastic",30923,77450],obj: {_id: 11951,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11952,str: "Handcrafted deposit",num: 27454,date: new Date("2018-09-06T06:36:34.127Z"),array: [new Date("2018-09-06T07:29:52.773Z"),"Bedfordshire Avon",48552,{_id: 11953,str: "SAS Soft",num: 11342,date: new Date("2018-09-06T12:43:26.061Z"),array: [],obj: {}},"Gibraltar Pound multi-byte Home",99266,"platforms",{_id: 11954,str: "real-time",num: 94044,obj: {}},40181],obj: {_id: 11955,str: "analyzing",date: new Date("2018-09-06T15:37:28.010Z"),obj: {_id: 11956,date: new Date("2018-09-05T23:58:41.507Z"),array: [98057,[],new Date("2018-09-05T20:22:59.431Z"),new Date("2018-09-05T21:03:09.248Z"),new Date("2018-09-06T11:14:52.720Z")],obj: {_id: 11957,num: 68187,date: new Date("2018-09-06T16:33:17.339Z"),array: [["innovate connecting"],"Outdoors"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 11958,num: 89988,date: new Date("2018-09-06T19:09:13.800Z"),array: [],obj: {_id: 11959,num: 66837,date: new Date("2018-09-05T22:57:10.978Z"),array: [new Date("2018-09-06T14:08:11.351Z"),76245,["Gold SMTP",21103,{_id: 11960,str: "Unbranded Concrete Soap bypass District",num: 81438,date: new Date("2018-09-06T07:17:56.996Z"),array: [],obj: {}},"Small Plastic Towels"],68430,"transmitting Identity synthesizing",new Date("2018-09-06T14:41:42.175Z"),new Date("2018-09-06T02:30:31.072Z"),"Refined Frozen Towels"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11961,str: "CSS compelling",num: 82030,date: new Date("2018-09-06T11:03:00.100Z"),array: [new Date("2018-09-06T08:36:44.290Z"),{_id: 11962,str: "discrete",num: 31655,date: new Date("2018-09-06T08:15:00.302Z"),array: [],obj: {}},"Chair Assistant",84478,new Date("2018-09-06T19:30:10.408Z"),96779,"Gorgeous Soft Table Accountability","Ergonomic Toys","invoice"],obj: {_id: 11963,num: 64056,date: new Date("2018-09-06T09:50:58.437Z"),array: ["parse back up",new Date("2018-09-05T21:59:31.119Z"),43005,[new Date("2018-09-06T12:55:35.183Z"),"recontextualize",new Date("2018-09-06T19:46:10.781Z")],[],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 11964,str: "compress",num: 98067,date: new Date("2018-09-06T11:48:22.439Z"),array: ["program",[],"Product Licensed",32926,31863,new Date("2018-09-06T13:34:52.102Z"),new Date("2018-09-06T12:39:29.118Z"),"Comoros Operative Gorgeous",38859,new Date("2018-09-06T01:43:27.502Z"),71090,"Chips Zimbabwe Dollar",new Date("2018-09-06T13:55:19.724Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11965,str: "Forint",num: 792,date: new Date("2018-09-05T20:28:22.024Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11966,str: "Extensions connecting",date: new Date("2018-09-06T18:09:02.387Z"),array: [35993,new Date("2018-09-06T04:01:54.985Z"),new Date("2018-09-05T20:21:46.942Z"),"haptic Investment Account action-items",new Date("2018-09-06T04:36:17.489Z"),1597,{_id: 11967,str: "River cohesive Granite",num: 93918,date: new Date("2018-09-06T09:57:12.683Z"),array: [],obj: {_id: 11968,str: "Sleek Direct optical",num: 92862,date: new Date("2018-09-06T11:43:20.592Z"),array: []}},"Music Wyoming",[],[],new Date("2018-09-06T13:00:45.058Z"),"Liaison"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11969,str: "Codes specifically reserved for testing purposes implement",num: 90403,date: new Date("2018-09-05T21:37:48.887Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11970,str: "US Dollar",num: 28014,date: new Date("2018-09-06T03:35:46.101Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11971,str: "Soft Sleek Checking Account",num: 96202,date: new Date("2018-09-06T19:26:27.067Z"),array: [41768,{_id: 11972,str: "Metal",num: 3088,date: new Date("2018-09-06T14:06:26.087Z"),array: [new Date("2018-09-05T20:27:29.345Z")],obj: {_id: 11973,str: "local Rest Singapore",date: new Date("2018-09-06T13:48:42.523Z"),array: []}},"Senior Gorgeous",new Date("2018-09-06T00:03:25.552Z"),96246,"Libyan Arab Jamahiriya",75614,47210,{_id: 11974,str: "Seychelles Tasty Steel Fish convergence",num: 93742},"magenta indigo",[],"Practical Soft Shoes Station",31505],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11975,num: 49159,date: new Date("2018-09-06T02:01:42.052Z"),array: ["Plastic Security Factors","Cambridgeshire invoice Garden",72794,"pink",59866,63018,new Date("2018-09-06T06:29:55.988Z"),new Date("2018-09-06T13:47:19.347Z"),new Date("2018-09-06T03:39:15.957Z"),{_id: 11976,str: "Concrete back up",num: 87302,date: new Date("2018-09-06T16:16:31.185Z"),array: [81752,{_id: 11977,num: 22607,date: new Date("2018-09-06T14:52:15.467Z"),array: [],obj: {_id: 11978,str: "customer loyalty",date: new Date("2018-09-06T05:31:11.189Z"),obj: {}}},new Date("2018-09-06T08:36:04.212Z")],obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11979,str: "Dynamic invoice",num: 85357,date: new Date("2018-09-06T09:25:28.467Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11980,num: 41140,date: new Date("2018-09-06T10:43:56.901Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11981,str: "transform Ball",date: new Date("2018-09-06T19:13:13.699Z"),array: [{_id: 11982,str: "extranet",num: 10149,date: new Date("2018-09-06T17:01:50.253Z"),array: [],obj: {}},53600,new Date("2018-09-06T10:56:53.464Z"),new Date("2018-09-05T20:14:43.745Z"),"array index","Somali Shilling Electronics",71594,[new Date("2018-09-06T16:01:37.254Z"),{_id: 11983,date: new Date("2018-09-05T22:28:19.376Z"),array: []},"mint green"],new Date("2018-09-06T08:10:10.995Z"),23338,[]],obj: {_id: 11984,str: "Salad",num: 92848,date: new Date("2018-09-06T19:25:24.975Z")}});
    },

    function(coll) {
        return coll.insert({_id: 11985,str: "Checking Account District virtual",num: 39912,date: new Date("2018-09-05T21:44:42.538Z"),array: [92365,new Date("2018-09-06T10:00:13.991Z"),"indexing","hack withdrawal front-end","Cambridgeshire South Carolina Global",19335,73951,"projection Clothing",97147,[new Date("2018-09-06T13:46:14.287Z"),53650,{_id: 11986,str: "Steel Solomon Islands Dollar",num: 40295,date: new Date("2018-09-06T08:01:28.152Z"),array: [],obj: {_id: 11987,str: "CSS instruction set Awesome Rubber Pants",num: 12401,array: [],obj: {}}},"TCP SDD",new Date("2018-09-06T00:54:56.025Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11988,str: "Plastic Ridge",num: 64333,date: new Date("2018-09-06T14:39:59.164Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11989,str: "South Dakota Money Market Account",num: 14300,array: [],obj: {_id: 11990,str: "lime Virgin Islands, U.S. Branding",date: new Date("2018-09-05T22:43:54.659Z"),array: [74910,new Date("2018-09-06T11:43:33.276Z"),72539,new Date("2018-09-05T21:30:24.739Z"),"Springs bandwidth",85456,"Accounts deposit",[],new Date("2018-09-06T03:35:38.740Z"),{_id: 11991,str: "withdrawal payment",num: 26548,date: new Date("2018-09-05T21:49:24.677Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11992,str: "deposit backing up Grocery",num: 8181,date: new Date("2018-09-06T00:09:35.227Z"),array: [new Date("2018-09-06T09:04:16.098Z"),71133,"strategize matrix sensor",[[],"Product","Coordinator visionary"],new Date("2018-09-06T14:55:16.697Z"),59935,new Date("2018-09-05T22:32:46.270Z"),17386,[],"Architect Strategist",55410],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11993,str: "silver",num: 14828,date: new Date("2018-09-06T04:56:11.128Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11994,str: "communities Response Unions",num: 23762,array: [{_id: 11995,str: "Mobility",num: 57099,date: new Date("2018-09-06T08:38:46.310Z"),array: [],obj: {_id: 11996,str: "incentivize Generic Fresh Table Egyptian Pound",num: 19496,date: new Date("2018-09-06T05:38:53.539Z"),array: [],obj: {}}},"Steel Practical Soft Pizza Engineer",21698,new Date("2018-09-06T15:53:48.593Z"),{_id: 11997,date: new Date("2018-09-06T09:23:58.514Z"),obj: {}},{_id: 11998,str: "payment",num: 3101,date: new Date("2018-09-06T04:26:19.837Z"),array: [new Date("2018-09-06T06:12:25.564Z"),69757,84275,"Cambridgeshire"]},[],"Bedfordshire",new Date("2018-09-06T10:44:57.633Z"),"primary installation","clear-thinking",{_id: 11999,array: [[]]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12000,str: "Direct digital",num: 7255,date: new Date("2018-09-06T15:04:47.382Z"),obj: {_id: 12001,str: "Guatemala Tools bluetooth",date: new Date("2018-09-06T19:09:35.655Z"),array: [90515,new Date("2018-09-05T21:37:50.471Z"),new Date("2018-09-06T18:34:19.748Z"),"Sausages plum microchip",["Sports Refined program",new Date("2018-09-06T05:29:27.000Z"),82862,91143,new Date("2018-09-06T15:51:49.389Z"),{_id: 12002,num: 1461,date: new Date("2018-09-06T05:38:07.390Z"),array: [[53045,{_id: 12003,str: "Gorgeous Shoes",num: 15878,date: new Date("2018-09-05T21:45:19.363Z"),array: []},[],"Music"],[],"knowledge base",[]],obj: {_id: 12004,num: 82693,array: [{_id: 12005,num: 65395,date: new Date("2018-09-06T11:30:28.817Z"),array: [],obj: {}}]}}],{_id: 12006,str: "Rubber",num: 80782,date: new Date("2018-09-06T17:55:55.189Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12007,str: "withdrawal Steel Ethiopia",num: 21039,date: new Date("2018-09-06T04:35:53.491Z"),array: ["solutions","black Tuvalu",new Date("2018-09-06T10:53:06.662Z"),70977,{_id: 12008,str: "Fish",num: 86653,date: new Date("2018-09-05T22:06:14.842Z"),array: [],obj: {_id: 12009,str: "Cheese",array: [new Date("2018-09-06T00:43:10.352Z"),"COM Practical Horizontal","bus Health payment",47591],obj: {}}},new Date("2018-09-05T23:07:48.872Z"),new Date("2018-09-06T12:22:53.005Z"),{_id: 12010,str: "Gorgeous Rubber Mouse",num: 46146,date: new Date("2018-09-06T14:35:46.896Z"),obj: {}},new Date("2018-09-06T17:22:34.265Z"),66680,44147]});
    },

    function(coll) {
        return coll.insert({_id: 12011,str: "application coherent",num: 86139,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12012,num: 82397,date: new Date("2018-09-06T04:28:27.971Z"),array: ["Auto Loan Account Borders",new Date("2018-09-06T09:47:28.805Z"),5977,[],[],98200,"neural-net asymmetric Court","Refined Concrete Bike Handcrafted Cotton Ball",new Date("2018-09-06T06:05:28.063Z"),new Date("2018-09-05T22:50:14.341Z"),93681,26216],obj: {_id: 12013,str: "Product",num: 1745,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12014,str: "AI Berkshire",date: new Date("2018-09-06T07:53:42.868Z"),array: [new Date("2018-09-06T15:46:33.921Z"),39224,"non-volatile Mississippi","Multi-layered Avon Netherlands",new Date("2018-09-06T09:31:52.769Z"),22143,{_id: 12015,num: 17238,date: new Date("2018-09-06T06:41:03.276Z"),obj: {_id: 12016,str: "Borders virtual Industrial",num: 58201,date: new Date("2018-09-06T05:25:27.852Z"),array: [],obj: {}}},3880,new Date("2018-09-06T04:52:31.714Z")],obj: {_id: 12017,str: "Orchestrator Massachusetts deposit",num: 69215,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12018,str: "West Virginia aggregate",date: new Date("2018-09-06T10:37:05.172Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12019,str: "harness methodology Shoes",num: 63761,date: new Date("2018-09-06T12:27:01.599Z"),array: [],obj: {_id: 12020,str: "project",num: 45750,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12021,str: "synthesize Credit Card Account Engineer",num: 29074,date: new Date("2018-09-06T00:09:53.254Z"),array: [new Date("2018-09-06T14:39:38.971Z"),66463,94282,{_id: 12022,str: "Ball models",num: 46382,date: new Date("2018-09-06T12:49:33.051Z"),array: [[],new Date("2018-09-06T19:30:35.373Z"),"New Zealand"],obj: {_id: 12023,str: "dynamic Avon",num: 19423,date: new Date("2018-09-06T14:11:01.702Z"),array: [],obj: {_id: 12024,date: new Date("2018-09-06T12:56:25.860Z"),array: []}}},new Date("2018-09-06T04:23:59.103Z"),{_id: 12025,str: "Senior parse",num: 30937,date: new Date("2018-09-06T03:06:38.805Z"),obj: {}},"productize Tasty Rubber Bacon",76534,new Date("2018-09-06T13:48:27.635Z"),"composite",58292],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12026,str: "deposit Uganda Shilling Savings Account",num: 57181,date: new Date("2018-09-06T06:59:48.112Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12027,num: 25551,date: new Date("2018-09-05T21:15:44.108Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12028,str: "Shoes",num: 90771,date: new Date("2018-09-06T11:43:05.540Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12029,str: "View",num: 16593,date: new Date("2018-09-06T19:39:15.986Z"),array: [],obj: {_id: 12030,str: "Handmade Rubber Pizza Developer",num: 87679,date: new Date("2018-09-06T14:17:47.667Z")}});
    },

    function(coll) {
        return coll.insert({_id: 12031,str: "bypassing strategize Handcrafted Frozen Sausages",num: 34779,date: new Date("2018-09-06T03:01:26.753Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12032,str: "European Monetary Unit (E.M.U.-6) Bedfordshire",num: 38664,date: new Date("2018-09-06T00:32:39.038Z"),array: [{_id: 12033,str: "parsing Generic Metal Mouse",num: 24802,date: new Date("2018-09-05T20:26:37.792Z"),array: [97790,"black",new Date("2018-09-06T04:57:19.012Z")],obj: {}},new Date("2018-09-06T04:24:05.479Z"),{_id: 12034,num: 78073,date: new Date("2018-09-06T08:09:23.370Z"),array: [],obj: {}},["Metal Small Fresh Car Licensed Fresh Bike",13169],[],96185,new Date("2018-09-06T16:36:42.556Z"),[{_id: 12035,str: "indexing",date: new Date("2018-09-06T06:17:37.485Z"),obj: {_id: 12036,str: "Fresh full-range Agent",num: 45424,array: []}}],"Practical Soft Ball Garden Granite",new Date("2018-09-06T00:34:02.881Z"),41735,"mindshare Public-key"]});
    },

    function(coll) {
        return coll.insert({_id: 12037,str: "calculating",num: 29810,date: new Date("2018-09-06T02:58:49.411Z"),array: [],obj: {_id: 12038,str: "Armenian Dram",num: 12632,date: new Date("2018-09-06T05:27:24.483Z"),array: [],obj: {_id: 12039,str: "Ball",num: 78654,array: [49200,"Future Kentucky",34709,[],new Date("2018-09-05T21:09:07.158Z"),"invoice",{_id: 12040,str: "Court",date: new Date("2018-09-06T11:50:50.368Z"),obj: {}},{_id: 12041,str: "pixel Saudi Riyal",num: 20801,date: new Date("2018-09-05T20:13:40.362Z"),array: [3591,new Date("2018-09-06T04:48:41.274Z")],obj: {_id: 12042,date: new Date("2018-09-06T16:18:57.473Z"),obj: {}}},new Date("2018-09-06T12:08:56.116Z"),"Minnesota modular tan",["HDD Central dynamic"]]}}});
    },

    function(coll) {
        return coll.insert({_id: 12043,str: "District",num: 60504,date: new Date("2018-09-06T01:43:00.099Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12044,str: "interface Mission",num: 7903,date: new Date("2018-09-06T03:54:42.235Z"),array: [[],new Date("2018-09-05T21:31:56.314Z"),[],48788,"Representative Handmade Metal Chicken",new Date("2018-09-06T01:37:24.036Z"),{_id: 12045,str: "one-to-one",num: 97392,date: new Date("2018-09-06T19:04:09.717Z"),array: [],obj: {_id: 12046,num: 72751,array: [],obj: {}}},3636,"Senior copying Credit Card Account",new Date("2018-09-06T08:31:35.843Z"),"driver value-added",18642,40665]});
    },

    function(coll) {
        return coll.insert({_id: 12047,str: "architecture Practical Directives",num: 78344,date: new Date("2018-09-06T00:06:35.282Z"),array: [new Date("2018-09-05T20:29:33.041Z"),25639,"Enhanced next-generation",66180,11686,{_id: 12048,str: "Automotive navigate",num: 26177,date: new Date("2018-09-06T06:17:31.548Z"),array: [],obj: {_id: 12049,str: "1080p",num: 19368,date: new Date("2018-09-06T18:07:09.510Z"),array: [],obj: {}}},"wireless Facilitator back-end",[new Date("2018-09-06T10:35:36.149Z"),[],"overriding leading-edge systems"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12050,str: "Liechtenstein bandwidth-monitored",num: 61837,date: new Date("2018-09-05T23:23:30.714Z"),obj: {_id: 12051,str: "Berkshire Small Fresh Chips",date: new Date("2018-09-05T21:25:52.907Z"),array: [98509,"plug-and-play circuit",new Date("2018-09-06T15:46:52.204Z"),"innovative Health ADP",45337,new Date("2018-09-06T16:22:17.697Z"),[],{_id: 12052,num: 39768,date: new Date("2018-09-06T02:21:09.066Z"),obj: {_id: 12053,str: "compressing",num: 18023,date: new Date("2018-09-06T13:09:48.834Z"),array: ["Cape Verde Escudo synthesizing",new Date("2018-09-06T10:34:23.096Z"),{_id: 12054,num: 21126,array: [],obj: {}},{_id: 12055,date: new Date("2018-09-06T12:06:18.892Z"),array: ["portals radical Self-enabling"]}],obj: {}}},"Singapore Dollar",new Date("2018-09-06T09:58:13.767Z"),86171],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12056,num: 89760,date: new Date("2018-09-06T01:43:11.787Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12057,str: "parsing",num: 50904,date: new Date("2018-09-06T18:36:46.197Z"),array: [[],51586,new Date("2018-09-05T21:53:49.145Z"),[],"Automated",new Date("2018-09-06T09:56:04.488Z"),42760,62860,{_id: 12058,num: 25522,date: new Date("2018-09-06T17:56:58.362Z"),array: ["Slovakia (Slovak Republic)"],obj: {_id: 12059,str: "SCSI full-range iterate",num: 78767,date: new Date("2018-09-05T21:24:28.839Z"),obj: {_id: 12060,str: "Branding granular back-end",num: 32220,array: [new Date("2018-09-06T05:09:44.665Z"),new Date("2018-09-06T17:52:11.444Z"),"Quality",{_id: 12061,num: 60663,array: []},new Date("2018-09-06T08:07:38.344Z")],obj: {}}}},{_id: 12062,str: "deposit",num: 42453,obj: {_id: 12063,str: "whiteboard",num: 77074,date: new Date("2018-09-05T19:55:43.597Z"),array: ["JBOD SMS XML"],obj: {}}},41072]});
    },

    function(coll) {
        return coll.insert({_id: 12064,str: "Home Loan Account bypassing",num: 59894});
    },

    function(coll) {
        return coll.insert({_id: 12065,str: "Configurable calculating Stand-alone",num: 962,date: new Date("2018-09-06T14:18:41.446Z"),array: [new Date("2018-09-06T00:29:06.508Z"),60939,{_id: 12066,str: "generating Handcrafted Steel Pizza",num: 23850,date: new Date("2018-09-06T08:37:49.545Z"),array: [],obj: {}},{_id: 12067,str: "Computer",num: 18214,array: [],obj: {_id: 12068,str: "driver",num: 11145,array: [[],new Date("2018-09-06T11:38:13.813Z"),"virtual cyan panel",27737,new Date("2018-09-06T07:59:10.091Z")],obj: {_id: 12069,str: "Avon Utah compress",num: 96922,date: new Date("2018-09-06T16:36:16.420Z"),obj: {}}}},["transparent monitoring Uzbekistan Sum"],94614,{_id: 12070,date: new Date("2018-09-06T06:36:54.331Z"),array: [],obj: {_id: 12071,date: new Date("2018-09-06T03:39:10.876Z")}},new Date("2018-09-06T08:40:45.361Z"),[],79345,"Global Music",[{_id: 12072,str: "Personal Loan Account Neck foreground",num: 67082,obj: {}}]]});
    },

    function(coll) {
        return coll.insert({_id: 12073,str: "national Manager",num: 79124,date: new Date("2018-09-06T10:40:23.213Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12074,str: "Kentucky enterprise Savings Account",num: 69404,date: new Date("2018-09-06T05:57:44.879Z"),array: [],obj: {_id: 12075,str: "mobile",date: new Date("2018-09-06T01:16:46.304Z"),array: [],obj: {_id: 12076,num: 81914,date: new Date("2018-09-05T20:25:13.942Z"),array: [new Date("2018-09-06T00:15:54.461Z"),"hard drive Forward",new Date("2018-09-05T22:50:30.771Z"),"sensor Baby Brunei Darussalam",{_id: 12077,str: "Chair",num: 10219,array: [60963,47210,new Date("2018-09-06T02:26:02.031Z")]},new Date("2018-09-06T14:45:48.467Z"),"azure",["Borders",[46722]],56002,"Soft Intelligent deploy",{_id: 12078,num: 55842,date: new Date("2018-09-06T13:10:14.119Z"),array: [[],{_id: 12079,date: new Date("2018-09-06T10:24:02.541Z"),obj: {}},{_id: 12080,str: "blue fuchsia",num: 49572,date: new Date("2018-09-06T11:59:32.431Z"),array: [[]],obj: {}}]},new Date("2018-09-05T20:23:55.177Z")],obj: {_id: 12081,num: 83435,array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 12082,str: "bricks-and-clicks",num: 32382,date: new Date("2018-09-05T20:51:46.745Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12083,num: 22512,date: new Date("2018-09-06T16:49:50.658Z"),array: [],obj: {_id: 12084,str: "bleeding-edge Fantastic Frozen Ball",date: new Date("2018-09-05T23:04:51.868Z"),array: [63395,new Date("2018-09-06T12:11:22.720Z"),{_id: 12085,str: "Nebraska",num: 25262,date: new Date("2018-09-05T22:50:11.502Z"),array: [],obj: {}},10428,"synthesizing","Versatile Tunnel Handcrafted Steel Hat","Implemented Personal Loan Account",67218,new Date("2018-09-06T18:32:12.404Z"),[{_id: 12086,str: "Chief Botswana holistic",num: 82523,date: new Date("2018-09-06T19:44:56.414Z"),array: [],obj: {}}],new Date("2018-09-06T07:56:56.712Z"),27511,"application Profound turquoise"]}});
    },

    function(coll) {
        return coll.insert({_id: 12087,str: "Handmade Wooden Shirt",num: 56161,date: new Date("2018-09-06T09:40:43.850Z"),array: [],obj: {_id: 12088,str: "Networked Lead",num: 38623,date: new Date("2018-09-06T15:40:59.564Z"),array: ["eyeballs Metal Nepal",new Date("2018-09-06T09:44:06.661Z"),new Date("2018-09-06T08:08:26.452Z"),21034,[],"explicit red Fantastic Wooden Cheese","Unbranded Iranian Rial Personal Loan Account",new Date("2018-09-06T13:22:14.109Z"),"Tools Granite Assurance","Garden Bedfordshire user-facing",[],46293,new Date("2018-09-06T15:34:15.800Z"),50373],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12089,str: "Functionality Tuna B2C",num: 71395,date: new Date("2018-09-06T13:05:16.443Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12090,num: 88104,date: new Date("2018-09-06T10:54:17.921Z"),array: ["Factors",new Date("2018-09-06T00:51:52.170Z"),67910,new Date("2018-09-06T06:15:47.233Z"),{_id: 12091,str: "Bulgaria",num: 52318,date: new Date("2018-09-06T10:25:11.634Z"),array: [[],new Date("2018-09-06T07:32:51.595Z"),97859],obj: {}},"Architect Baby",[],new Date("2018-09-06T00:53:24.328Z"),30099,"Digitized United Arab Emirates moderator"],obj: {_id: 12092,str: "bypassing Cuban Peso Peso Convertible",num: 42756,date: new Date("2018-09-06T12:31:09.973Z")}});
    },

    function(coll) {
        return coll.insert({_id: 12093,str: "bluetooth",num: 2437,date: new Date("2018-09-06T04:47:02.179Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12094,str: "New Leu Djibouti Franc Rustic Frozen Ball",num: 1323,date: new Date("2018-09-06T02:47:58.578Z"),array: [],obj: {_id: 12095,str: "hacking payment Response",num: 70699,date: new Date("2018-09-06T05:50:15.946Z"),obj: {_id: 12096,str: "withdrawal Michigan",num: 7816,date: new Date("2018-09-06T01:09:14.501Z"),array: [63003,"Cheese Handcrafted Fresh Pizza",new Date("2018-09-06T17:13:06.066Z"),80058,new Date("2018-09-06T08:04:31.695Z"),new Date("2018-09-06T01:22:59.932Z"),29862,"service-desk Phased Analyst",[],"Automotive Fresh Shoes",new Date("2018-09-06T10:47:51.441Z"),"24/7 Music archive",{_id: 12097,str: "compress",date: new Date("2018-09-06T12:41:05.725Z"),array: [[],{_id: 12098,num: 71518,date: new Date("2018-09-06T14:57:33.602Z"),array: [[]]}]}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12099,str: "withdrawal Intelligent Frozen Shirt Legacy",num: 11104,date: new Date("2018-09-05T22:16:38.883Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12100,str: "tangible Buckinghamshire",num: 75720,date: new Date("2018-09-06T08:52:37.666Z"),array: [42980,"wireless Swiss Franc",["Borders Shoes",new Date("2018-09-06T15:52:51.195Z"),66449,{_id: 12101,num: 73093,date: new Date("2018-09-06T11:33:12.311Z"),array: [new Date("2018-09-06T03:52:02.235Z")],obj: {}},85861,13873],new Date("2018-09-06T16:52:23.717Z"),new Date("2018-09-06T07:01:52.372Z"),"mint green programming maroon","Buckinghamshire Clothing Grass-roots"],obj: {_id: 12102,str: "Florida Books Island",num: 73998,date: new Date("2018-09-06T03:40:26.736Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12103,str: "front-end deploy",num: 72404,date: new Date("2018-09-06T02:12:52.128Z"),array: [],obj: {_id: 12104,str: "Investment Account",date: new Date("2018-09-06T01:35:38.821Z"),array: [74993,{_id: 12105,num: 95090,date: new Date("2018-09-06T11:05:55.944Z"),array: [[new Date("2018-09-06T09:54:08.003Z"),["Bolivia",38745],new Date("2018-09-06T07:18:28.939Z")],12808,"Incredible Fresh Mouse",new Date("2018-09-06T01:11:24.211Z"),new Date("2018-09-06T16:18:22.873Z"),{_id: 12106,str: "Marketing Shoes",num: 55038,date: new Date("2018-09-06T15:30:30.386Z"),obj: {}}],obj: {}},[],"circuit Rubber",48588,new Date("2018-09-06T03:37:33.185Z"),"target Incredible Borders",{_id: 12107,str: "Rustic productize",num: 47758,array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 12108,str: "microchip SSL",num: 2250,date: new Date("2018-09-06T17:11:42.065Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12109,str: "forecast",num: 19295,date: new Date("2018-09-06T03:55:22.114Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12110,str: "Georgia Bacon",num: 75048,date: new Date("2018-09-05T21:43:16.331Z"),array: [86931,[],"calculate back-end Computers",17386,new Date("2018-09-05T21:51:23.408Z"),new Date("2018-09-05T20:37:36.462Z"),{_id: 12111,str: "Kentucky payment transmitting",date: new Date("2018-09-05T20:47:35.893Z")},new Date("2018-09-06T13:43:46.486Z"),"Handmade Frozen Table wireless Investor","global Human Home Loan Account",{_id: 12112,str: "cyan",num: 48430,date: new Date("2018-09-06T02:06:25.259Z"),array: [],obj: {_id: 12113,num: 47012,date: new Date("2018-09-06T01:53:41.839Z"),array: ["Credit Card Account Ergonomic Steel Chicken"],obj: {_id: 12114,num: 55230,date: new Date("2018-09-06T15:37:20.428Z"),array: [],obj: {}}}},63237]});
    },

    function(coll) {
        return coll.insert({_id: 12115,str: "Car e-business",num: 37533,date: new Date("2018-09-05T22:33:42.574Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12116,str: "Beauty",num: 13226,date: new Date("2018-09-06T15:45:22.743Z"),array: [new Date("2018-09-06T11:42:02.975Z"),55518,new Date("2018-09-06T11:54:23.314Z"),"Table withdrawal generate","Administrator",22177,[{_id: 12117,str: "payment",num: 8635,date: new Date("2018-09-06T16:08:27.819Z"),array: ["purple Ergonomic Wooden Chips",{_id: 12118,str: "Rand Namibia Dollar China",num: 49172,date: new Date("2018-09-06T10:20:23.594Z"),array: [],obj: {}},64564,new Date("2018-09-06T13:17:45.619Z")],obj: {_id: 12119,str: "Kansas composite Unbranded Concrete Car",num: 25725,array: [],obj: {_id: 12120,str: "Comoro Franc",num: 26120,date: new Date("2018-09-06T09:10:58.955Z"),array: [],obj: {}}}},48960,new Date("2018-09-06T17:09:37.565Z"),"Usability Metal",[],new Date("2018-09-06T10:45:43.274Z")]],obj: { _id: 12121 }});
    },

    function(coll) {
        return coll.insert({_id: 12122,str: "Lead Refined Concrete Chicken motivating",date: new Date("2018-09-06T14:09:14.690Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12123,num: 27150,date: new Date("2018-09-06T17:17:56.524Z"),array: [],obj: {_id: 12124,str: "blue",num: 9639,date: new Date("2018-09-06T10:55:34.346Z"),array: [new Date("2018-09-06T01:30:37.189Z"),new Date("2018-09-06T13:50:40.038Z"),84448,[68561,"Unions Oklahoma Tactics",new Date("2018-09-06T09:07:15.470Z")],new Date("2018-09-06T19:53:52.763Z"),"transmitting SAS deposit",57208,{_id: 12125,str: "evolve",num: 74996,date: new Date("2018-09-05T21:04:07.895Z"),array: ["Borders 1080p Garden",{_id: 12126,str: "Personal Loan Account",array: [],obj: {}},["Direct"]],obj: {_id: 12127,str: "Borders",num: 34869,date: new Date("2018-09-05T21:15:57.395Z")}},new Date("2018-09-06T08:37:49.188Z"),new Date("2018-09-06T12:20:33.470Z"),{_id: 12128,str: "Shoes vertical Beauty",date: new Date("2018-09-06T02:33:11.916Z"),array: [95822,49038,[],"supply-chains"],obj: {}}],obj: {_id: 12129,str: "granular",num: 69050,date: new Date("2018-09-06T06:25:04.174Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12130,str: "online",num: 36499,date: new Date("2018-09-06T16:55:01.203Z"),array: [37075,new Date("2018-09-05T21:41:56.271Z"),29055,"Developer",{_id: 12131,str: "De-engineered interface Lead",num: 59496,date: new Date("2018-09-06T00:25:23.110Z"),array: [],obj: {}},{_id: 12132,str: "Car compressing",num: 24541,date: new Date("2018-09-06T14:44:30.674Z"),obj: {_id: 12133,num: 63960,date: new Date("2018-09-06T00:26:37.093Z"),array: [new Date("2018-09-06T08:11:22.174Z"),["Rubber"],new Date("2018-09-06T15:23:40.898Z"),new Date("2018-09-06T00:39:43.241Z")],obj: {}}},64377,"Handcrafted"],obj: {_id: 12134,str: "Assurance Cordoba Oro Row",date: new Date("2018-09-06T07:26:59.125Z")}});
    },

    function(coll) {
        return coll.insert({_id: 12135,str: "content-based",num: 88503,date: new Date("2018-09-06T04:26:11.860Z"),array: [new Date("2018-09-06T10:40:27.506Z"),43616,63886,new Date("2018-09-06T02:24:43.286Z"),new Date("2018-09-05T21:46:05.492Z"),[],"Games",71307]});
    },

    function(coll) {
        return coll.insert({_id: 12136,str: "bypassing Turkish Lira Niger",num: 98601,date: new Date("2018-09-06T05:26:41.974Z"),array: [],obj: {_id: 12137,str: "Lao People's Democratic Republic",num: 4025,date: new Date("2018-09-06T09:26:05.574Z"),array: [],obj: {_id: 12138,num: 81582,date: new Date("2018-09-06T15:16:15.359Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12139,str: "Designer",num: 12168,date: new Date("2018-09-06T02:19:47.955Z"),array: [40200,"reciprocal Credit Card Account Granite",new Date("2018-09-05T22:11:45.011Z"),3892,new Date("2018-09-05T23:50:55.569Z"),[],new Date("2018-09-06T07:21:18.362Z"),"overriding copy Cheese",74591,{_id: 12140,str: "synergies TCP",num: 36542,date: new Date("2018-09-06T04:08:53.884Z"),array: [],obj: {_id: 12141,str: "Borders Human",num: 59180,date: new Date("2018-09-06T04:30:54.569Z"),array: [92209,{_id: 12142,num: 28890,date: new Date("2018-09-06T06:05:43.636Z"),obj: {}}],obj: {}}},{_id: 12143,date: new Date("2018-09-06T07:57:16.563Z"),array: []},{_id: 12144,num: 12597}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12145,str: "user-facing",num: 94183,date: new Date("2018-09-05T23:53:41.893Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12146,str: "Tactics",num: 90586,date: new Date("2018-09-05T21:26:23.309Z"),array: [54312,"Generic azure Handmade",new Date("2018-09-06T17:47:39.372Z"),24354,new Date("2018-09-06T13:20:12.449Z"),[],{_id: 12147,str: "coherent Refined Plastic Hat",date: new Date("2018-09-06T00:20:24.783Z"),array: [["maximize fault-tolerant infomediaries",new Date("2018-09-06T13:30:09.120Z"),98028,"Singapore Dollar"],"Small Montana Investor"],obj: {_id: 12148,str: "compress Tasty",num: 70888,date: new Date("2018-09-06T10:13:06.216Z"),array: []}},new Date("2018-09-05T22:06:00.025Z"),{_id: 12149,num: 92791,array: [new Date("2018-09-05T23:34:26.079Z"),"connect invoice"],obj: {}},[96114],10563],obj: {_id: 12150,num: 87216,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12151,str: "Buckinghamshire West Virginia payment",num: 47123,date: new Date("2018-09-06T17:05:44.652Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12152,str: "Executive",date: new Date("2018-09-06T12:22:29.246Z"),array: [],obj: {_id: 12153,str: "hack",num: 54921,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12154,str: "Uganda Shilling Generic Frozen Shoes",date: new Date("2018-09-05T23:36:05.925Z"),array: [28805,"calculating",new Date("2018-09-06T15:29:26.933Z"),"Pizza cross-platform",3988,[20401,{_id: 12155,num: 5283,date: new Date("2018-09-06T09:15:56.203Z"),array: [],obj: {}}],"Jamaica Rubber",new Date("2018-09-05T19:58:50.605Z"),new Date("2018-09-05T21:28:01.785Z"),new Date("2018-09-05T23:18:56.284Z"),"Auto Loan Account"],obj: {_id: 12156,str: "firewall Distributed National",num: 19329,array: [84747,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 12157,date: new Date("2018-09-06T18:40:15.970Z"),array: ["Rustic Maryland cross-platform",63573,new Date("2018-09-06T07:19:14.176Z"),7932,45360,{_id: 12158,str: "definition Buckinghamshire Direct",num: 63391,date: new Date("2018-09-06T19:32:31.845Z"),array: [],obj: {}},new Date("2018-09-06T06:33:14.643Z"),"Engineer Oklahoma",[],"systems online",new Date("2018-09-06T16:36:56.817Z"),38146],obj: {_id: 12159,str: "THX",num: 45155,date: new Date("2018-09-06T01:20:27.309Z"),array: [[new Date("2018-09-06T13:40:59.810Z")],{_id: 12160,str: "invoice Gorgeous",date: new Date("2018-09-06T09:39:02.388Z"),array: [],obj: {}},"invoice District"],obj: {_id: 12161,str: "Louisiana hacking index",num: 34053,date: new Date("2018-09-06T04:13:13.972Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 12162,str: "lime THX Trinidad and Tobago Dollar",num: 33143,date: new Date("2018-09-06T16:16:30.379Z"),array: [new Date("2018-09-06T13:29:19.194Z"),"Home Dynamic",["Administrator Chips",new Date("2018-09-06T19:18:19.392Z"),"Towels Branding Jordan"],19473,{_id: 12163,str: "web-enabled Road",num: 70586,date: new Date("2018-09-06T15:08:31.221Z"),array: [new Date("2018-09-06T01:40:20.939Z"),new Date("2018-09-05T20:33:43.569Z")],obj: {_id: 12164,str: "recontextualize e-enable e-business",num: 97832,date: new Date("2018-09-05T21:24:36.135Z"),array: [73647,new Date("2018-09-06T00:17:15.578Z")],obj: {}}},{_id: 12165,date: new Date("2018-09-06T07:46:56.982Z"),obj: {_id: 12166,str: "Rustic Cotton Pizza",array: []}},[],63900,83258,{_id: 12167,num: 57250,date: new Date("2018-09-06T05:22:28.118Z"),array: []},39023]});
    },

    function(coll) {
        return coll.insert({_id: 12168,str: "calculate",num: 43266,date: new Date("2018-09-06T07:28:48.853Z"),array: [75940,"Fully-configurable",new Date("2018-09-06T10:13:55.566Z"),new Date("2018-09-06T01:40:56.849Z"),58245,"experiences Gloves Cotton",new Date("2018-09-06T04:18:56.524Z"),79197,"Somali Shilling",83572,{_id: 12169,str: "azure",num: 67238,obj: {_id: 12170,str: "bandwidth-monitored pink",num: 8206,date: new Date("2018-09-06T05:55:04.727Z"),obj: {_id: 12171,str: "turn-key maximized",num: 98100,date: new Date("2018-09-05T22:28:05.348Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 12172,num: 86311,date: new Date("2018-09-06T13:30:05.090Z"),array: ["Dynamic",new Date("2018-09-06T09:22:57.642Z"),19118,{_id: 12173,str: "copying",num: 49003,date: new Date("2018-09-06T04:53:49.820Z"),array: [new Date("2018-09-06T00:22:46.322Z")],obj: {_id: 12174,str: "Car Fresh",date: new Date("2018-09-05T23:33:59.318Z"),obj: {_id: 12175,str: "salmon convergence Handmade",num: 10247,date: new Date("2018-09-06T09:12:03.546Z"),array: [],obj: {}}}},[],[56006],"Tonga","reinvent next-generation Incredible Granite Pizza",new Date("2018-09-06T05:24:31.292Z"),"Avon lime Ergonomic",new Date("2018-09-06T07:06:43.048Z"),"Ball e-markets",98733,21134,{_id: 12176,str: "Checking Account",num: 71981,array: [],obj: { _id: 12177 }}],obj: {_id: 12178,date: new Date("2018-09-06T13:51:38.780Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12179,str: "Agent seize Bacon",num: 8708,date: new Date("2018-09-06T14:07:26.430Z"),obj: {_id: 12180,str: "tan",date: new Date("2018-09-06T02:03:11.545Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12181,str: "hard drive",num: 33084,date: new Date("2018-09-05T20:31:27.929Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12182,str: "relationships incremental purple",num: 61160,date: new Date("2018-09-06T11:43:41.027Z"),array: ["e-business",new Date("2018-09-06T10:48:01.260Z"),"Sausages microchip Indian Rupee","Legacy Bedfordshire",new Date("2018-09-06T04:44:20.508Z"),6220,new Date("2018-09-06T04:00:55.548Z"),19193,[],{_id: 12183,str: "morph approach",num: 11823,date: new Date("2018-09-06T16:57:20.539Z"),array: [new Date("2018-09-06T12:50:38.461Z"),8597,71613],obj: {}}],obj: {_id: 12184,str: "Buckinghamshire wireless",num: 92875,date: new Date("2018-09-06T07:48:27.369Z"),array: [],obj: { _id: 12185 }}});
    },

    function(coll) {
        return coll.insert({_id: 12186,str: "Directives digital",num: 20450,date: new Date("2018-09-06T07:50:49.043Z"),array: [new Date("2018-09-06T13:56:09.861Z"),58562,"foreground Soft",39684,"system",[],"back up Program Principal","SCSI",new Date("2018-09-06T14:05:42.912Z"),[],19205],obj: {_id: 12187,str: "Place",date: new Date("2018-09-06T12:21:55.188Z"),array: [new Date("2018-09-05T21:11:37.636Z"),{_id: 12188,str: "generate Personal Loan Account Rustic",num: 97376,array: [],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12189,str: "connect",num: 95927,date: new Date("2018-09-06T13:46:28.593Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12190,str: "Indiana holistic Granite",num: 30462,array: [new Date("2018-09-06T07:49:36.611Z"),84484,"challenge",99505,[],[{_id: 12191,str: "Outdoors Coves",num: 59422,date: new Date("2018-09-06T13:02:26.087Z"),array: [],obj: {}},"Markets policy Reduced"],new Date("2018-09-06T19:42:46.881Z"),28318,"Ridges Designer firewall",new Date("2018-09-06T15:35:34.962Z"),new Date("2018-09-06T09:40:40.422Z"),{_id: 12192,str: "Solutions Hawaii District",num: 71068,date: new Date("2018-09-06T14:07:29.497Z"),array: [],obj: {_id: 12193,num: 90044,array: [],obj: {}}},62825],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12194,num: 85929,date: new Date("2018-09-06T17:26:34.608Z"),array: [],obj: {_id: 12195,str: "3rd generation South Dakota",num: 69037,date: new Date("2018-09-06T13:05:46.482Z"),array: [new Date("2018-09-06T06:16:34.485Z"),31801,"Rapid","end-to-end Plastic Personal Loan Account",62138,74633,"ROI Sports",[],{_id: 12196,str: "cohesive Cyprus exploit",num: 52729,array: [new Date("2018-09-06T18:47:48.944Z")]},{_id: 12197,str: "Refined",num: 69856,date: new Date("2018-09-06T05:07:49.999Z"),array: [{_id: 12198,str: "exploit Missouri quantifying",num: 94037,date: new Date("2018-09-06T19:33:01.502Z"),obj: {}},new Date("2018-09-06T10:00:31.641Z"),new Date("2018-09-06T10:08:48.189Z")],obj: {_id: 12199,str: "Cuban Peso Peso Convertible strategy",num: 63505,date: new Date("2018-09-05T20:43:37.428Z"),array: [],obj: {}}},8884,["Bike",40843,75752]],obj: {_id: 12200,date: new Date("2018-09-06T14:38:48.081Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12201,str: "Internal Ergonomic Buckinghamshire",num: 58569,date: new Date("2018-09-06T13:57:05.457Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12202,str: "invoice",num: 39076,date: new Date("2018-09-06T06:51:14.135Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12203,str: "Sports",num: 15172,date: new Date("2018-09-06T09:36:03.889Z"),array: [],obj: {_id: 12204,str: "iterate New Hampshire",num: 17258,date: new Date("2018-09-06T07:50:24.678Z"),array: ["AI",83008,new Date("2018-09-06T16:30:52.562Z"),new Date("2018-09-06T05:55:04.532Z"),8113,{_id: 12205,array: [],obj: {_id: 12206,str: "USB",num: 35331,array: [],obj: {}}},new Date("2018-09-06T09:39:34.728Z"),74025,[],"Fantastic",new Date("2018-09-06T17:17:01.026Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 12207,str: "quantify",num: 90154,date: new Date("2018-09-06T00:11:52.059Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12208,str: "Soft Legacy Orchestrator",num: 13128,date: new Date("2018-09-06T05:07:57.437Z"),array: [new Date("2018-09-06T18:47:40.019Z"),"action-items Sleek Metal Shoes Dynamic",new Date("2018-09-05T21:17:30.817Z"),47510,new Date("2018-09-06T15:25:41.089Z"),20152,88545,1283,{_id: 12209,str: "iterate Kentucky",num: 76779,date: new Date("2018-09-06T02:47:56.751Z"),array: [],obj: {}},72477,"Visionary applications","Data",new Date("2018-09-06T01:47:34.563Z"),99285],obj: {_id: 12210,num: 51314,date: new Date("2018-09-05T20:35:35.578Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12211,str: "withdrawal online hack",num: 90473,date: new Date("2018-09-06T13:56:11.417Z"),array: [[],"Global",94294,new Date("2018-09-05T22:48:49.435Z"),new Date("2018-09-06T12:37:02.138Z"),new Date("2018-09-06T06:33:23.456Z"),{_id: 12212,str: "synthesizing Berkshire quantify",num: 89713,array: [{_id: 12213,str: "Generic",num: 45875,date: new Date("2018-09-06T14:22:45.484Z"),array: [],obj: {}},"teal"],obj: {}},[75295],[],"pixel Cayman Islands Dollar",59423,new Date("2018-09-06T07:14:38.442Z"),{_id: 12214,str: "invoice Direct Steel",num: 67342,date: new Date("2018-09-06T12:19:45.398Z"),array: [],obj: {_id: 12215,num: 42374}},29317],obj: {_id: 12216,date: new Date("2018-09-06T12:32:21.572Z"),array: [new Date("2018-09-06T13:13:57.427Z"),"Angola Roads Chief"]}});
    },

    function(coll) {
        return coll.insert({_id: 12217,str: "calculating Borders strategic",date: new Date("2018-09-05T23:15:05.094Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12218,str: "Small Rubber Sausages silver",array: [new Date("2018-09-06T16:36:00.972Z"),78021,[],{_id: 12219,str: "niches Awesome",num: 65227,date: new Date("2018-09-06T02:20:37.976Z"),array: [],obj: {}},"Distributed","Shoes Rubber",new Date("2018-09-05T21:40:49.750Z"),88752,"client-driven index",new Date("2018-09-06T11:10:31.038Z"),{_id: 12220,str: "4th generation Outdoors",num: 76216,date: new Date("2018-09-06T06:58:24.546Z"),obj: {_id: 12221,date: new Date("2018-09-06T04:53:57.308Z"),array: ["Handmade Frozen"]}},79111,42103,new Date("2018-09-05T23:00:35.676Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12222,str: "generating Decentralized",num: 47164,date: new Date("2018-09-06T19:37:29.442Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12223,str: "Ergonomic Tools",date: new Date("2018-09-06T17:11:48.619Z"),array: [35869,new Date("2018-09-06T10:25:14.476Z"),"Buckinghamshire Human Money Market Account",[],new Date("2018-09-06T11:46:54.856Z"),37163,76676,{_id: 12224,str: "Gorgeous microchip Secured",num: 60108,date: new Date("2018-09-06T08:50:25.482Z"),array: [],obj: {_id: 12225,str: "Operations Turkish Lira neural",num: 11977,obj: {}}},new Date("2018-09-06T14:19:41.634Z"),"parsing Investor Electronics",[],93174]});
    },

    function(coll) {
        return coll.insert({_id: 12226,str: "holistic paradigms function",num: 97089,date: new Date("2018-09-06T19:53:38.633Z"),array: [],obj: {_id: 12227,str: "web services Web Fantastic",num: 90464,date: new Date("2018-09-05T21:59:51.598Z"),array: [new Date("2018-09-05T21:03:39.105Z"),36424,new Date("2018-09-05T21:09:30.009Z"),73693,new Date("2018-09-06T11:15:50.281Z"),{_id: 12228,str: "connect Bedfordshire Seychelles",num: 97425,array: [new Date("2018-09-06T03:50:04.683Z"),22187],obj: {}},"SSL generating cross-platform","killer Central Communications",91023,[{_id: 12229,str: "Avon generate virtual",date: new Date("2018-09-06T10:21:08.235Z"),array: ["Operative",[]],obj: {_id: 12230,str: "Refined Granite Fish success Cheese",num: 45971,date: new Date("2018-09-06T14:50:05.603Z"),obj: {_id: 12231,str: "monetize SDD",date: new Date("2018-09-06T02:58:59.112Z"),array: [],obj: {}}}},{ _id: 12232 }],"withdrawal Gorgeous Rubber Mouse",new Date("2018-09-06T08:57:40.149Z"),{_id: 12233,num: 66699,date: new Date("2018-09-06T04:00:25.445Z"),array: [new Date("2018-09-06T13:20:29.049Z"),24219]},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 12234,num: 77193,date: new Date("2018-09-06T00:29:40.360Z"),array: ["complexity",72913,[],new Date("2018-09-06T13:03:21.263Z"),40640,new Date("2018-09-06T15:19:11.862Z"),new Date("2018-09-06T00:55:42.993Z"),36791],obj: {_id: 12235,str: "generating",num: 18533,date: new Date("2018-09-06T04:34:57.837Z"),array: [81974,{_id: 12236,str: "card digital",date: new Date("2018-09-06T14:23:04.632Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 12237,str: "parsing Soap Liberia",num: 25279,date: new Date("2018-09-06T02:32:22.992Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 12238,num: 42041,date: new Date("2018-09-06T07:38:07.509Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12239,str: "Baby",num: 58940,date: new Date("2018-09-06T07:13:53.421Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12240,str: "Fresh",num: 30479,date: new Date("2018-09-06T18:22:15.681Z"),array: [{_id: 12241,str: "multi-tasking Configuration Advanced",num: 56824,date: new Date("2018-09-05T23:57:39.170Z"),array: [],obj: {_id: 12242,str: "Soft",date: new Date("2018-09-05T22:59:41.714Z"),array: []}},"Pitcairn Islands Home Loan Account Inverse",50026,61249,[13026,new Date("2018-09-06T11:40:20.991Z"),new Date("2018-09-06T06:25:30.462Z"),"transmitter Administrator",{_id: 12243,str: "context-sensitive integrate",num: 30300,date: new Date("2018-09-06T02:47:52.274Z"),array: [],obj: {}}],new Date("2018-09-06T00:42:39.953Z"),new Date("2018-09-06T03:51:57.724Z"),"Borders Guinea Franc generating"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12244,num: 26064,date: new Date("2018-09-06T07:24:56.383Z"),array: [],obj: {_id: 12245,str: "Neck Euro Comoros",num: 68522,date: new Date("2018-09-06T14:11:59.571Z"),array: [new Date("2018-09-06T11:01:49.163Z"),"deposit",new Date("2018-09-06T12:12:40.257Z"),"withdrawal Refined Plastic Tuna",76775,13012,{_id: 12246,str: "bypassing",num: 74860,array: [new Date("2018-09-06T04:21:15.142Z"),{_id: 12247,str: "applications Saint Lucia Cambridgeshire",date: new Date("2018-09-06T08:39:59.741Z"),array: [],obj: {}},[63259]],obj: {}},"Cambridgeshire attitude-oriented",["time-frame open-source",new Date("2018-09-06T05:17:01.203Z"),[],new Date("2018-09-06T14:41:59.410Z"),"Computers back up"]],obj: {_id: 12248,str: "Gorgeous Wooden Shirt Berkshire transitional",num: 74478,array: [45540]}}});
    },

    function(coll) {
        return coll.insert({_id: 12249,str: "Tanzanian Shilling coherent",num: 5541,date: new Date("2018-09-05T23:51:02.734Z"),array: [],obj: {_id: 12250,str: "Handmade Granite Mouse Buckinghamshire",num: 32498,date: new Date("2018-09-06T11:19:41.553Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12251,str: "stable Gorgeous",num: 52093,obj: {_id: 12252,str: "deposit Program",date: new Date("2018-09-06T13:13:43.700Z"),array: ["override",[20365,new Date("2018-09-05T20:27:46.300Z"),42883],"New Taiwan Dollar",new Date("2018-09-06T00:44:49.971Z"),{_id: 12253,num: 23863,date: new Date("2018-09-05T20:45:40.657Z"),array: [],obj: {_id: 12254,str: "Gloves",num: 91785,date: new Date("2018-09-06T15:59:04.976Z"),array: [],obj: {}}},{_id: 12255,num: 37620,date: new Date("2018-09-06T01:08:52.286Z"),array: [],obj: {}},"Incredible Fresh Bike Station",new Date("2018-09-05T20:46:09.746Z"),50103,19020,[[30874,new Date("2018-09-06T14:16:55.242Z")]]]}});
    },

    function(coll) {
        return coll.insert({_id: 12256,str: "Turkish Lira",num: 54162,date: new Date("2018-09-05T21:23:05.280Z"),array: [{_id: 12257,str: "withdrawal Comoros Manager",num: 64883,date: new Date("2018-09-06T13:42:25.495Z"),array: [],obj: {_id: 12258,str: "Handmade",num: 55448,date: new Date("2018-09-06T08:19:27.683Z"),array: [],obj: {_id: 12259,date: new Date("2018-09-06T17:39:33.721Z"),obj: {}}}},new Date("2018-09-05T22:25:11.288Z"),"internet solution",7809,[new Date("2018-09-06T12:32:22.225Z")],"niches Angola Metal",new Date("2018-09-05T22:37:31.447Z"),57766,"Iowa full-range",new Date("2018-09-06T08:31:32.468Z"),{_id: 12260,date: new Date("2018-09-06T05:48:23.422Z"),obj: {}},"internet solution"]});
    },

    function(coll) {
        return coll.insert({_id: 12261,str: "Sports Guinea Franc",num: 15123,date: new Date("2018-09-05T22:41:20.130Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12262,str: "AGP",num: 64420,date: new Date("2018-09-06T06:50:08.350Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12263,str: "back up Bulgarian Lev Cheese",num: 53976,date: new Date("2018-09-06T07:08:08.201Z"),array: [],obj: {_id: 12264,str: "violet Rustic Concrete Bike fuchsia",num: 94432,date: new Date("2018-09-06T15:14:24.945Z"),array: [76363,new Date("2018-09-06T09:09:12.899Z"),[new Date("2018-09-06T06:36:38.711Z")],"Alley",new Date("2018-09-06T00:51:16.337Z"),new Date("2018-09-05T20:44:23.039Z"),46786,"Dale Paradigm Syrian Pound","Direct Cayman Islands",{_id: 12265,str: "Games incremental Shirt",num: 44658,date: new Date("2018-09-06T16:26:49.474Z"),array: [],obj: {}},"overriding"]}});
    },

    function(coll) {
        return coll.insert({_id: 12266,str: "USB",num: 65969,array: ["Engineer","harness",90684,30965,71392,[],"deposit success",new Date("2018-09-06T02:57:45.046Z"),new Date("2018-09-06T05:28:34.372Z"),{_id: 12267,str: "benchmark Stream",num: 94135,date: new Date("2018-09-06T18:19:46.480Z"),array: [new Date("2018-09-06T11:39:58.494Z")],obj: {}},"Books Cotton"],obj: {_id: 12268,str: "Global European Unit of Account 9(E.U.A.-9) Burundi",num: 35624,date: new Date("2018-09-06T19:35:29.599Z")}});
    },

    function(coll) {
        return coll.insert({_id: 12269,num: 83093,date: new Date("2018-09-06T03:47:14.295Z"),array: [new Date("2018-09-06T07:17:03.485Z"),15111,new Date("2018-09-06T19:30:59.821Z"),64802,"motivating","Bedfordshire Louisiana interface",new Date("2018-09-06T14:12:40.272Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12270,str: "digital",num: 50801,date: new Date("2018-09-06T06:58:16.064Z"),array: ["Reduced mint green calculating",45166,"violet","Metal",new Date("2018-09-06T04:30:18.432Z"),[],15685,[{_id: 12271,str: "Investor deposit XSS",num: 65807,date: new Date("2018-09-05T23:57:23.933Z"),array: [],obj: {}},42040],"Shoes",new Date("2018-09-06T10:18:18.437Z"),new Date("2018-09-05T23:22:53.967Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12272,str: "Indian Rupee 1080p Chair",num: 76864,date: new Date("2018-09-06T08:06:56.928Z"),array: ["Club",[],{_id: 12273,str: "Martinique efficient Product",num: 24906,date: new Date("2018-09-06T16:56:27.100Z"),array: [],obj: {_id: 12274,str: "navigate optical Rustic",date: new Date("2018-09-06T16:16:06.587Z"),array: [],obj: {}}},95815,"quantifying JSON protocol",new Date("2018-09-06T18:53:58.965Z"),["XML"],"Awesome Concrete Car",new Date("2018-09-06T16:59:58.646Z"),12387,{_id: 12275,str: "panel Ferry Gorgeous",num: 5087,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 12276,str: "Borders Denar",num: 99960,date: new Date("2018-09-06T19:03:53.714Z"),array: ["Focused primary",{_id: 12277,str: "Metal invoice",num: 6777,date: new Date("2018-09-06T12:58:45.909Z"),array: [51074,"Gorgeous Frozen Bacon"],obj: {_id: 12278,str: "Wyoming",num: 92522,date: new Date("2018-09-05T21:28:37.054Z"),array: [],obj: {_id: 12279,num: 99471,date: new Date("2018-09-06T08:01:03.643Z"),array: [],obj: {}}}},new Date("2018-09-06T16:36:57.682Z"),10577,{_id: 12280,str: "Assistant",num: 49781,date: new Date("2018-09-06T17:01:33.235Z"),obj: {}},new Date("2018-09-06T17:26:17.661Z"),new Date("2018-09-06T04:03:00.761Z"),new Date("2018-09-06T08:17:20.637Z"),"bluetooth Taiwan optical",11111,"mobile enable",[],138]});
    },

    function(coll) {
        return coll.insert({_id: 12281,str: "quantify Avon Bedfordshire",num: 76005,date: new Date("2018-09-06T16:03:49.351Z"),array: [new Date("2018-09-06T15:08:23.936Z"),{_id: 12282,str: "SSL transform",num: 19343,date: new Date("2018-09-06T07:47:54.392Z"),array: ["Shore Architect compress",{_id: 12283,str: "Money Market Account invoice",array: [],obj: {}}],obj: {}},new Date("2018-09-06T15:06:08.004Z"),81870,82303,[],71571,new Date("2018-09-06T17:00:53.961Z"),"Health",97048,new Date("2018-09-06T02:50:35.532Z"),"compressing Checking Account","Station"]});
    },

    function(coll) {
        return coll.insert({_id: 12284,str: "Branding",num: 90026,date: new Date("2018-09-06T06:02:02.575Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12285,str: "Credit Card Account hierarchy",num: 63789,date: new Date("2018-09-06T10:35:21.291Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12286,str: "neural",num: 49895,date: new Date("2018-09-06T05:10:53.626Z"),array: [{_id: 12287,str: "Usability orange",num: 16159,array: [],obj: {}},"framework Square bandwidth",new Date("2018-09-06T15:02:03.805Z"),"Focused South Dakota EXE",786,new Date("2018-09-06T13:57:12.318Z"),"Kids withdrawal",50040,33675,new Date("2018-09-05T22:15:56.256Z"),["infomediaries"],new Date("2018-09-06T00:57:30.999Z"),[]],obj: {_id: 12288,str: "leading-edge",num: 26772,date: new Date("2018-09-06T05:39:32.282Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12289,str: "enhance",date: new Date("2018-09-06T17:27:50.132Z"),array: [],obj: {_id: 12290,str: "South Georgia and the South Sandwich Islands transmit parse",num: 76886,date: new Date("2018-09-06T16:26:49.244Z"),array: ["customized",99677,new Date("2018-09-05T23:47:20.339Z"),new Date("2018-09-05T22:54:04.451Z"),{_id: 12291,num: 52020,date: new Date("2018-09-06T02:01:11.849Z"),array: [],obj: {}},33155,"Incredible 1080p green",{_id: 12292,num: 29374,date: new Date("2018-09-06T11:14:39.893Z"),array: [[]],obj: {}},"encompassing port",[new Date("2018-09-06T00:46:13.263Z")],new Date("2018-09-06T11:01:23.354Z"),85768,[["generate Coves"],1549,15453]],obj: {_id: 12293,str: "Bedfordshire"}}});
    },

    function(coll) {
        return coll.insert({_id: 12294,str: "Hat Borders Liaison",num: 55919,date: new Date("2018-09-06T16:15:31.687Z"),array: [],obj: {_id: 12295,str: "back-end niches bluetooth",num: 99497,array: [new Date("2018-09-05T22:54:00.080Z"),"Tenge HTTP",3660,77135,new Date("2018-09-06T07:39:28.057Z"),{_id: 12296,date: new Date("2018-09-06T13:36:43.865Z"),array: [new Date("2018-09-06T16:27:49.985Z"),"Personal Loan Account Virtual",[]]},2713,14726,54983,"intranet Total",{_id: 12297,str: "Dynamic index",num: 99690,array: []}],obj: {_id: 12298,str: "Directives China",num: 91164,date: new Date("2018-09-06T12:35:56.863Z"),obj: {_id: 12299,str: "methodologies",date: new Date("2018-09-06T10:14:50.768Z"),array: [new Date("2018-09-06T05:33:06.304Z"),"Swedish Krona",new Date("2018-09-05T22:40:58.550Z")],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 12300,str: "Minnesota feed",num: 39874,date: new Date("2018-09-06T05:22:12.311Z"),array: ["customer loyalty","Agent",new Date("2018-09-06T01:07:25.018Z"),"Turkish Lira quantifying","orchestrate iterate Bedfordshire",[[89952,35988,58129,31073,52391]],{_id: 12301,str: "withdrawal wireless",num: 39379,array: [],obj: {}},new Date("2018-09-05T20:32:10.516Z"),new Date("2018-09-05T20:52:24.668Z"),"Licensed synthesizing Singapore Dollar",{_id: 12302,date: new Date("2018-09-06T15:07:10.947Z"),obj: {_id: 12303,str: "Licensed Cotton Pants Group",num: 74846,array: []}}],obj: {_id: 12304,num: 11669,date: new Date("2018-09-06T02:49:47.394Z"),array: [],obj: {_id: 12305,str: "Oregon",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12306,str: "Panama",num: 56655,date: new Date("2018-09-06T07:54:31.797Z"),array: [95573,new Date("2018-09-06T07:20:49.060Z"),new Date("2018-09-06T12:45:32.178Z"),{_id: 12307,str: "Metal Jewelery input",num: 74772,date: new Date("2018-09-06T14:43:53.236Z"),array: []},20706,"regional Oklahoma Inlet",new Date("2018-09-05T22:33:03.068Z"),"Frozen Florida process improvement",new Date("2018-09-06T04:37:35.833Z"),[new Date("2018-09-05T23:11:01.406Z"),[],"El Salvador"],{_id: 12308,array: [],obj: {_id: 12309,str: "Small hard drive solution",num: 83371,date: new Date("2018-09-06T17:10:13.430Z"),obj: {_id: 12310,num: 90099,date: new Date("2018-09-06T13:43:47.380Z"),array: [321,"Ergonomic Concrete Chips Director"],obj: {}}}},{_id: 12311,str: "strategic Graphical User Interface transmit",date: new Date("2018-09-06T08:45:04.877Z"),array: ["withdrawal TCP",70510],obj: {_id: 12312,str: "Colorado Sports ivory"}}]});
    },

    function(coll) {
        return coll.insert({_id: 12313,str: "networks niches transmitting",num: 19437,date: new Date("2018-09-06T13:20:50.493Z"),obj: {_id: 12314,str: "Bedfordshire",num: 539,array: [],obj: {_id: 12315,str: "Unbranded Pennsylvania global",num: 43749,date: new Date("2018-09-06T19:50:14.356Z"),array: ["Berkshire","Chicken",[],54261,{_id: 12316,str: "indexing HTTP wireless",num: 73382,date: new Date("2018-09-05T22:06:14.039Z"),array: [new Date("2018-09-06T12:23:32.453Z")],obj: {}},54695,48096,"Street",new Date("2018-09-05T20:35:24.432Z"),"Comoro Franc COM Gloves",new Date("2018-09-06T02:37:22.936Z")],obj: {_id: 12317,date: new Date("2018-09-06T04:31:22.971Z"),array: [new Date("2018-09-06T09:39:39.688Z")]}}}});
    },

    function(coll) {
        return coll.insert({_id: 12318,str: "mission-critical Virgin Islands, U.S.",num: 98964,date: new Date("2018-09-06T17:55:27.427Z"),array: [],obj: {_id: 12319,str: "Bedfordshire Savings Account",num: 91829,date: new Date("2018-09-06T09:22:09.840Z"),obj: {_id: 12320,str: "calculating",num: 93821,date: new Date("2018-09-06T10:03:18.870Z"),array: ["methodical Small Rubber Hat circuit",97375,new Date("2018-09-06T19:20:08.243Z"),new Date("2018-09-06T01:59:27.206Z"),new Date("2018-09-06T03:20:11.682Z"),"ROI",65843,{_id: 12321,date: new Date("2018-09-06T14:54:01.890Z"),obj: {_id: 12322,str: "viral Path",num: 43514,array: [],obj: {_id: 12323,str: "European Unit of Account 9(E.U.A.-9) transmitting",num: 61056,array: []}}},"transparent",{_id: 12324,date: new Date("2018-09-06T02:12:08.267Z")},[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12325,str: "quantifying",num: 26491,date: new Date("2018-09-05T22:50:09.479Z"),array: [],obj: {_id: 12326,str: "parsing",num: 87204,date: new Date("2018-09-06T12:48:15.375Z"),array: [new Date("2018-09-06T01:02:13.289Z"),"deposit",{_id: 12327,str: "Aruba copy Personal Loan Account",num: 81611,date: new Date("2018-09-06T04:35:12.336Z"),array: [],obj: {_id: 12328,date: new Date("2018-09-06T16:53:53.008Z"),array: [4131],obj: {_id: 12329,str: "Sleek Steel Keyboard",num: 58588,obj: {}}}},72808,"cross-platform Sleek quantify",new Date("2018-09-06T10:20:04.352Z"),12126,{_id: 12330,str: "driver",array: [],obj: {_id: 12331,num: 87346,array: [new Date("2018-09-06T15:34:09.493Z")]}},[],"Profit-focused killer","optimize",[],{_id: 12332,str: "Savings Account",date: new Date("2018-09-06T08:18:29.426Z")}]}});
    },

    function(coll) {
        return coll.insert({_id: 12333,str: "driver Netherlands Ways",num: 86126,date: new Date("2018-09-06T17:43:12.039Z"),array: [{_id: 12334,str: "orchestrate",num: 48835,date: new Date("2018-09-05T20:24:35.469Z"),array: ["sky blue microchip Central",new Date("2018-09-06T01:14:09.780Z"),"digital"],obj: {_id: 12335,date: new Date("2018-09-06T12:35:32.182Z"),array: [56271,96907],obj: {}}},new Date("2018-09-06T19:11:37.973Z"),"withdrawal circuit primary",[],{_id: 12336,str: "Creative",num: 23004,array: [],obj: {_id: 12337,num: 1776,date: new Date("2018-09-05T23:23:05.405Z")}},83647,new Date("2018-09-05T20:15:08.817Z"),"Central",[[15189,62405],[]],new Date("2018-09-06T04:13:56.231Z"),{_id: 12338,num: 44630,array: [],obj: {}},"protocol COM instruction set"]});
    },

    function(coll) {
        return coll.insert({_id: 12339,str: "Indiana",num: 74711,date: new Date("2018-09-06T08:12:49.002Z"),array: [],obj: {_id: 12340,str: "bluetooth",num: 30382,date: new Date("2018-09-06T09:13:52.156Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12341,str: "Chair",num: 39580,date: new Date("2018-09-06T13:25:13.593Z"),array: [new Date("2018-09-06T01:45:48.995Z"),[],"Legacy Chief Generic Granite Keyboard",15775,new Date("2018-09-06T10:04:12.909Z"),{_id: 12342,str: "Reduced knowledge base",num: 38360,date: new Date("2018-09-06T10:38:57.386Z"),array: ["Baby",93228],obj: {_id: 12343,str: "Chief quantifying Cyprus",num: 45792,array: []}},81188,"Steel Unbranded Product",65202,[{_id: 12344,date: new Date("2018-09-06T08:26:19.562Z"),array: [],obj: {}}],new Date("2018-09-05T20:25:35.086Z"),51669],obj: {_id: 12345,str: "streamline relationships",num: 28452,date: new Date("2018-09-06T15:11:52.329Z"),array: [{_id: 12346,date: new Date("2018-09-06T01:13:42.493Z"),obj: {_id: 12347,str: "Metrics",date: new Date("2018-09-06T07:57:48.949Z"),array: [],obj: {}}},new Date("2018-09-06T19:33:03.192Z"),"Borders implement","sky blue"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12348,str: "Somalia",num: 4115,date: new Date("2018-09-06T10:35:19.923Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12349,str: "Berkshire",num: 50044,date: new Date("2018-09-06T17:08:19.602Z"),array: [],obj: {_id: 12350,str: "Metal Lead",date: new Date("2018-09-06T01:40:21.020Z"),array: [48249,new Date("2018-09-06T06:25:17.750Z"),65974,"Generic","TCP",83186,"Unbranded Concrete Chips online",{_id: 12351,str: "indexing generating sticky",obj: {_id: 12352,num: 31428,array: [],obj: {}}},new Date("2018-09-06T19:18:31.689Z"),[{_id: 12353,str: "Utah",num: 21498,array: [{_id: 12354,num: 45968,date: new Date("2018-09-06T00:48:22.268Z"),array: [],obj: {_id: 12355,str: "Jewelery",date: new Date("2018-09-06T15:23:41.492Z")}},6841,"parsing portals"],obj: {}},new Date("2018-09-06T07:23:38.449Z"),new Date("2018-09-06T17:55:54.531Z")],"Taka attitude-oriented Berkshire",new Date("2018-09-06T04:27:04.614Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 12356,str: "Integrated Handcrafted Granite Soap Aruban Guilder",num: 44382,array: [69468,"Ergonomic data-warehouse maroon",{_id: 12357,num: 97956,date: new Date("2018-09-05T22:23:08.216Z"),array: [],obj: {}},{_id: 12358,str: "Buckinghamshire Cliff reinvent",num: 50857,date: new Date("2018-09-06T09:09:24.430Z"),array: [{_id: 12359,str: "Officer invoice",date: new Date("2018-09-05T23:28:23.903Z"),obj: {}},new Date("2018-09-06T06:54:29.935Z")],obj: {_id: 12360,num: 40310,date: new Date("2018-09-06T05:41:34.102Z"),array: [],obj: {}}},new Date("2018-09-06T11:59:51.500Z"),"multi-byte Phased",99635,"primary Computer",[18279,"Kids Bedfordshire reboot",80734],[],"Rhode Island deliver"],obj: { _id: 12361 }});
    },

    function(coll) {
        return coll.insert({_id: 12362,str: "ADP synthesize Georgia",obj: {_id: 12363,num: 53956,date: new Date("2018-09-06T06:41:51.085Z"),array: ["Configuration Money Market Account",71421,"best-of-breed Maryland Buckinghamshire",new Date("2018-09-06T07:12:24.124Z"),new Date("2018-09-06T15:39:03.813Z"),new Date("2018-09-05T20:02:53.484Z"),73773,new Date("2018-09-05T20:27:19.857Z"),[],"communities Meadow",{_id: 12364,str: "encompassing",num: 84719,date: new Date("2018-09-06T17:27:36.053Z"),array: [],obj: {_id: 12365,str: "Future-proofed back up Usability",num: 15826,array: [[new Date("2018-09-06T10:30:11.258Z"),75763,new Date("2018-09-05T21:53:09.190Z"),["payment incentivize"],{_id: 12366,str: "Christmas Island tertiary",array: [],obj: {}}],"RSS West Virginia deposit"],obj: {}}},39149,{_id: 12367,str: "Afghanistan Vietnam Toys",num: 88597,date: new Date("2018-09-06T06:51:08.448Z"),array: []}]}});
    },

    function(coll) {
        return coll.insert({_id: 12368,str: "Concrete",num: 50649,date: new Date("2018-09-05T21:39:16.557Z"),array: [],obj: {_id: 12369,str: "bypassing Cotton",num: 51358,date: new Date("2018-09-06T11:32:48.821Z"),array: [new Date("2018-09-06T05:28:47.886Z"),new Date("2018-09-06T18:58:32.971Z"),31266,"Ergonomic Soft Cheese Lead wireless",[],46433,"capacity engage","Implemented Kentucky Legacy",[new Date("2018-09-06T14:57:00.513Z"),"gold"],new Date("2018-09-05T23:20:00.763Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12370,str: "interface Rubber payment",num: 85163,date: new Date("2018-09-06T08:39:36.677Z"),array: [[],new Date("2018-09-06T06:04:38.475Z"),{_id: 12371,num: 69454,date: new Date("2018-09-06T04:41:13.095Z"),array: [],obj: {_id: 12372,num: 70649,date: new Date("2018-09-06T02:09:58.397Z"),array: [58895,new Date("2018-09-06T13:17:44.911Z"),29136,"Usability Oklahoma",[],49684,["Investment Account"],"encompassing Interactions",6754,new Date("2018-09-06T14:07:32.382Z")],obj: {_id: 12373,str: "local Triple-buffered",date: new Date("2018-09-06T00:35:01.978Z"),array: [],obj: {}}}},"Borders National Developer",{_id: 12374,str: "Shoals Reduced end-to-end",num: 71317}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12375,str: "index",num: 79668,date: new Date("2018-09-06T16:20:16.941Z"),array: [],obj: {_id: 12376,str: "redundant",num: 51690,date: new Date("2018-09-06T13:58:36.506Z")}});
    },

    function(coll) {
        return coll.insert({_id: 12377,str: "Pizza Borders",num: 85787,date: new Date("2018-09-05T21:05:13.946Z"),array: [29934,new Date("2018-09-05T21:30:46.501Z"),"Facilitator morph Multi-lateral",[],new Date("2018-09-05T23:10:11.557Z"),81620,"dynamic","Consultant Industrial invoice",47523,new Date("2018-09-06T17:41:24.444Z"),new Date("2018-09-06T02:53:03.195Z"),{_id: 12378,str: "mindshare",num: 63763,array: [],obj: {_id: 12379,str: "facilitate",date: new Date("2018-09-06T14:12:45.636Z"),array: [{_id: 12380,str: "ability Credit Card Account Fantastic Cotton Keyboard",num: 41853,date: new Date("2018-09-06T12:29:40.487Z"),array: []}],obj: {}}},["Borders"],"Hat User-centric",{_id: 12381,num: 71494,date: new Date("2018-09-06T14:44:38.295Z"),array: [],obj: {_id: 12382,str: "RAM Libyan Arab Jamahiriya overriding",num: 68794,date: new Date("2018-09-06T01:52:15.669Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 12383,str: "Grocery",num: 91497,date: new Date("2018-09-05T20:29:17.607Z"),array: [54989,"analyzer Turkish Lira",94876,new Date("2018-09-06T04:49:46.356Z"),"Unbranded primary Money Market Account",44926,new Date("2018-09-06T02:35:34.302Z"),new Date("2018-09-06T02:48:51.100Z"),{_id: 12384,str: "Refined Soft Tuna ivory",num: 67690,array: [],obj: {_id: 12385,str: "Jewelery",date: new Date("2018-09-06T19:21:23.906Z"),obj: {_id: 12386,num: 70911,date: new Date("2018-09-06T13:29:21.601Z"),array: []}}},[],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12387,str: "New Mexico",num: 63345,date: new Date("2018-09-06T06:41:16.010Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12388,str: "Product Berkshire Awesome Steel Car",num: 85269,date: new Date("2018-09-05T21:39:59.228Z"),array: ["Drive web-enabled","transition Gorgeous",new Date("2018-09-05T22:16:46.467Z"),19185,"Forward Handcrafted Plastic Shoes",50195,"Rapid Berkshire",new Date("2018-09-06T00:08:17.577Z"),new Date("2018-09-06T11:34:43.460Z")],obj: {_id: 12389,num: 45559,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12390,num: 71180,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12391,str: "navigating Awesome",num: 67933,date: new Date("2018-09-06T01:07:21.186Z"),array: [],obj: {_id: 12392,num: 44470,array: ["Avon Checking Account Factors","Soft synergize",new Date("2018-09-06T15:17:11.261Z"),86968,54429,"Dynamic PNG transmitting",49457,new Date("2018-09-06T12:13:14.248Z"),77455,"real-time paradigms"],obj: {_id: 12393,num: 34359,date: new Date("2018-09-06T09:52:15.813Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 12394,str: "navigate relationships ADP",num: 65953,date: new Date("2018-09-06T04:08:35.915Z"),array: [33387,new Date("2018-09-06T02:03:50.920Z"),42786,"enterprise sexy","monitoring",[],new Date("2018-09-06T13:50:32.610Z"),new Date("2018-09-05T20:43:39.769Z"),"capability",1086,"COM",30801,{_id: 12395,str: "Directives",num: 66370,date: new Date("2018-09-05T22:50:25.660Z"),array: [],obj: {_id: 12396,str: "Tasty gold",date: new Date("2018-09-06T10:28:37.572Z"),array: [new Date("2018-09-05T21:54:30.085Z"),{_id: 12397,str: "Refined Fresh Computer Identity",num: 42070,date: new Date("2018-09-06T01:07:55.388Z"),array: [],obj: {}}],obj: {_id: 12398,num: 81320,array: ["feed vortals"]}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12399,str: "Oregon Cambridgeshire virtual",num: 24396,date: new Date("2018-09-06T19:47:21.203Z"),array: [],obj: {_id: 12400,str: "Credit Card Account Car",num: 23734,date: new Date("2018-09-06T02:37:01.421Z"),array: [26475,14149,new Date("2018-09-06T03:46:02.063Z"),"turquoise B2B",new Date("2018-09-06T00:09:30.367Z"),new Date("2018-09-06T14:23:49.880Z"),new Date("2018-09-06T04:19:57.989Z"),{_id: 12401,str: "Polarised uniform",date: new Date("2018-09-06T18:19:03.532Z"),array: [],obj: {}},19745,41163]}});
    },

    function(coll) {
        return coll.insert({_id: 12402,str: "invoice architectures",num: 39844,array: [],obj: {_id: 12403,str: "multi-byte",num: 3039,date: new Date("2018-09-06T14:36:37.845Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12404,str: "Dynamic Steel",num: 14454,date: new Date("2018-09-06T14:31:29.327Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12405,str: "vertical Books",num: 13617,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12406,str: "Plains Practical Cotton Soap Saint Kitts and Nevis",num: 92504,date: new Date("2018-09-06T09:37:58.021Z"),array: ["Towels Toys",new Date("2018-09-06T05:16:25.512Z"),[],new Date("2018-09-06T01:31:15.053Z"),67668,"Home Loan Account Fully-configurable Borders",41552,"Human clear-thinking Music","Home Loan Account","Small Security",{_id: 12407,str: "Dominican Peso",num: 28395,date: new Date("2018-09-06T04:07:15.494Z"),array: [13453,30701,new Date("2018-09-06T15:36:17.796Z")],obj: {}}],obj: {_id: 12408,str: "reboot",num: 82596,date: new Date("2018-09-06T02:18:47.812Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12409,str: "maximize blue generate",num: 13276,date: new Date("2018-09-06T12:04:53.839Z"),array: [[],75537,[new Date("2018-09-06T08:02:00.750Z")],"1080p",{_id: 12410,str: "cultivate application",num: 86450,date: new Date("2018-09-05T21:57:09.220Z"),array: [new Date("2018-09-06T14:08:51.443Z"),new Date("2018-09-06T10:56:07.380Z"),70042],obj: {_id: 12411,str: "Tools",date: new Date("2018-09-06T07:53:05.294Z"),array: [],obj: {}}},"Crest",53509,{_id: 12412,str: "scalable",num: 20500,date: new Date("2018-09-06T04:13:38.979Z"),array: [],obj: {}},67040,{_id: 12413,str: "secondary",num: 9172,array: [56192,new Date("2018-09-06T03:29:38.342Z")]},"synthesize"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12414,str: "Tenge",date: new Date("2018-09-06T10:01:21.245Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 12415,str: "XSS",num: 46215,date: new Date("2018-09-06T16:55:50.666Z"),obj: {_id: 12416,str: "Personal Loan Account Front-line Coordinator",num: 10423,date: new Date("2018-09-05T20:25:37.849Z"),obj: {_id: 12417,str: "copying",num: 16186,array: [51236,"Checking Account circuit indexing",new Date("2018-09-06T08:38:20.004Z"),42579,new Date("2018-09-06T04:42:57.901Z"),{_id: 12418,str: "input Refined Steel Soap grey",date: new Date("2018-09-06T05:12:57.854Z"),array: [],obj: {}},["compressing",new Date("2018-09-05T19:59:32.984Z"),67192,[],{_id: 12419,num: 40335,date: new Date("2018-09-06T18:46:05.288Z"),array: [83391],obj: {}},["optical"]],"Georgia Cambridgeshire",13205,new Date("2018-09-06T18:01:18.180Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 12420,str: "Alabama",date: new Date("2018-09-06T14:31:04.045Z"),array: [new Date("2018-09-05T21:49:05.361Z"),32486,"transmitter",new Date("2018-09-06T09:03:19.835Z"),new Date("2018-09-06T03:46:53.891Z"),94815,[],35796,new Date("2018-09-06T08:55:04.613Z"),"Coves",{_id: 12421,str: "Rustic Plastic Tuna Kansas",num: 86877,date: new Date("2018-09-06T16:01:33.619Z"),obj: {_id: 12422,str: "Portugal",num: 35106,date: new Date("2018-09-06T19:29:37.577Z"),array: [[],"AGP","Intelligent Metal Chair"],obj: {}}},{_id: 12423,str: "Gloves Pennsylvania",num: 63040,array: [95910]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12424,str: "Division",num: 78800,date: new Date("2018-09-06T01:17:07.037Z"),array: ["Money Market Account Venezuela Handmade Rubber Keyboard","Mouse",new Date("2018-09-06T17:08:03.762Z"),new Date("2018-09-05T23:42:08.924Z"),{_id: 12425,str: "Steel regional",num: 95342,date: new Date("2018-09-06T10:23:34.248Z"),array: [],obj: {_id: 12426,str: "wireless Regional",num: 74054,obj: {}}},[],88374,72845,[44967,"Direct",42945,new Date("2018-09-06T15:43:12.767Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12427,str: "Accounts models",num: 73949,date: new Date("2018-09-06T18:00:44.922Z"),obj: {_id: 12428,num: 13592,date: new Date("2018-09-06T11:50:58.752Z"),array: [],obj: {_id: 12429,str: "stable",num: 53082,date: new Date("2018-09-06T17:51:49.953Z"),array: [[{_id: 12430,str: "morph Generic Concrete Hat",num: 73238,array: [],obj: {}},new Date("2018-09-06T04:20:35.970Z"),"Credit Card Account",new Date("2018-09-06T16:20:47.040Z"),76659],"Handcrafted Usability",[{_id: 12431,str: "Thailand",date: new Date("2018-09-06T10:43:26.438Z"),array: [24582,"brand"],obj: {}}],new Date("2018-09-06T04:38:27.157Z"),2820,new Date("2018-09-06T18:28:24.396Z"),[],"zero tolerance driver Syrian Pound",new Date("2018-09-06T06:45:57.302Z"),63978]}}});
    },

    function(coll) {
        return coll.insert({_id: 12432,str: "hard drive wireless FTP",num: 921,date: new Date("2018-09-05T20:15:06.281Z"),array: ["Mayotte",new Date("2018-09-06T01:26:05.340Z"),"Computer intranet",new Date("2018-09-06T12:00:38.482Z"),65783,[],"high-level",new Date("2018-09-05T21:33:59.766Z"),new Date("2018-09-06T08:52:48.848Z"),31261,23867,15430,48005,{_id: 12433,str: "Tunisian Dinar",num: 4537,date: new Date("2018-09-05T20:07:09.110Z"),array: ["Planner"],obj: {}}],obj: {_id: 12434,str: "Applications",date: new Date("2018-09-06T02:22:43.504Z")}});
    },

    function(coll) {
        return coll.insert({_id: 12435,str: "strategic customized facilitate",num: 84168,date: new Date("2018-09-06T14:50:59.926Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12436,str: "Fantastic Plastic Pants Representative Colorado",num: 40451,date: new Date("2018-09-06T04:30:29.686Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12437,str: "Movies Avon Georgia",num: 3083,array: [["Facilitator Representative",new Date("2018-09-06T07:49:06.860Z")],70025,"action-items Planner Unbranded Plastic Cheese","Gorgeous Home Loan Account",{_id: 12438,str: "Jewelery",num: 29615,date: new Date("2018-09-06T07:33:44.207Z"),obj: {}},"Home Loan Account",25553,[],new Date("2018-09-06T04:58:49.319Z"),{_id: 12439,str: "South Africa Holy See (Vatican City State)",num: 61749,date: new Date("2018-09-06T11:47:19.590Z")},"deposit online Ethiopia",53213],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12440,str: "Buckinghamshire Sleek Steel Sausages calculating",num: 50250,date: new Date("2018-09-06T11:17:08.936Z"),array: ["Enhanced synthesize",60189,["Liechtenstein",new Date("2018-09-05T21:54:03.289Z")],[],43456,37003,new Date("2018-09-06T08:31:39.226Z"),new Date("2018-09-06T18:10:58.558Z"),new Date("2018-09-06T19:23:15.301Z"),"Michigan Chicken backing up",{_id: 12441,str: "Metal",num: 55211,date: new Date("2018-09-06T00:14:45.401Z"),array: [[],{_id: 12442,num: 17505,obj: {_id: 12443,str: "Future",date: new Date("2018-09-06T06:34:56.776Z"),obj: {}}}],obj: {_id: 12444,num: 33076,date: new Date("2018-09-06T13:07:17.971Z"),array: []}},new Date("2018-09-06T18:06:30.790Z")],obj: {_id: 12445,str: "haptic",num: 72958,array: [[]]}});
    },

    function(coll) {
        return coll.insert({_id: 12446,str: "Ergonomic feed",num: 79978,date: new Date("2018-09-06T13:45:06.300Z"),array: [52989,"Montserrat cross-platform",new Date("2018-09-06T15:29:40.062Z"),"Borders local",46183,new Date("2018-09-05T23:30:51.941Z"),[],77406,"Shoes",[new Date("2018-09-06T14:50:38.871Z"),{_id: 12447,num: 49604,array: [],obj: {}},"SMTP"],{_id: 12448,num: 72233,date: new Date("2018-09-06T00:29:27.284Z"),array: [],obj: {_id: 12449,str: "Computer",num: 73554,date: new Date("2018-09-06T12:20:16.579Z"),obj: {_id: 12450,str: "array next generation",num: 53085,obj: {_id: 12451,str: "bus sexy",date: new Date("2018-09-06T13:46:25.494Z"),obj: {}}}}},"SAS Developer",new Date("2018-09-05T20:52:00.239Z")]});
    },

    function(coll) {
        return coll.insert({_id: 12452,str: "info-mediaries Practical Buckinghamshire",num: 84667,date: new Date("2018-09-06T06:16:06.683Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12453,num: 46303,array: [56481,"Mongolia Fantastic",85722,41552,{_id: 12454,str: "RAM",date: new Date("2018-09-06T07:04:50.106Z"),array: [],obj: {_id: 12455,str: "Mill",num: 47756,date: new Date("2018-09-06T19:48:04.335Z"),array: [new Date("2018-09-06T19:35:01.881Z")]}},"Home Loan Account",new Date("2018-09-06T09:16:27.674Z"),new Date("2018-09-06T03:56:26.444Z"),{_id: 12456,str: "Steel Towels withdrawal",num: 92875,date: new Date("2018-09-06T07:09:27.568Z"),obj: {}},[],"Awesome",new Date("2018-09-06T17:52:43.515Z")]});
    },

    function(coll) {
        return coll.insert({_id: 12457,str: "Rubber sensor throughput",num: 77045,date: new Date("2018-09-05T23:49:54.437Z"),array: ["deposit Developer alarm",15708,[],new Date("2018-09-06T10:23:57.428Z"),50764,new Date("2018-09-05T22:45:21.601Z"),{_id: 12458,str: "system engine Human",num: 44402,array: [],obj: {}},"harness","Pizza ability structure",49536,new Date("2018-09-06T07:00:48.194Z"),30515,"global"],obj: {_id: 12459,str: "Wooden Principal",num: 75661,date: new Date("2018-09-06T00:06:23.601Z"),obj: {_id: 12460,str: "utilize index integrate",num: 83501,date: new Date("2018-09-06T12:16:18.030Z"),array: [{_id: 12461,num: 84902,date: new Date("2018-09-06T11:53:22.004Z"),array: [[new Date("2018-09-05T23:14:59.578Z"),{_id: 12462,date: new Date("2018-09-06T00:45:31.704Z"),obj: {}},"XSS card"],new Date("2018-09-06T03:22:33.143Z"),[]]}]}}});
    },

    function(coll) {
        return coll.insert({_id: 12463,str: "Pula calculate orchid",date: new Date("2018-09-06T16:18:30.631Z"),array: ["Coordinator",82493,"Kwanza transmitter Wooden",97419,{_id: 12464,num: 93635,date: new Date("2018-09-06T01:02:13.657Z"),array: [],obj: {}},[new Date("2018-09-06T05:50:56.299Z"),{_id: 12465,str: "matrix Avon Architect",num: 70667},{_id: 12466,str: "dynamic foreground",num: 3367,date: new Date("2018-09-06T02:13:05.219Z"),array: [],obj: {_id: 12467,str: "Regional Bhutan",num: 65515,date: new Date("2018-09-05T22:20:00.919Z"),array: [35306,58615,new Date("2018-09-06T13:46:31.750Z")],obj: {_id: 12468,str: "hacking Generic Belarussian Ruble",num: 45575,array: [],obj: {_id: 12469,str: "SMS",date: new Date("2018-09-06T14:51:04.869Z"),array: []}}}}],new Date("2018-09-06T07:23:14.074Z"),new Date("2018-09-06T06:47:35.392Z"),"Pizza","Bedfordshire",11794,[{_id: 12470,obj: {}}]]});
    },

    function(coll) {
        return coll.insert({_id: 12471,str: "Architect vertical",num: 97241,date: new Date("2018-09-05T20:43:34.881Z"),array: [],obj: {_id: 12472,str: "monetize Digitized",num: 47586,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12473,str: "system navigate Steel",num: 64536,date: new Date("2018-09-06T06:59:16.544Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12474,str: "port",num: 70235,date: new Date("2018-09-06T00:49:09.783Z"),array: ["Manor Practical complexity",new Date("2018-09-06T02:09:03.673Z"),"full-range Nicaragua neutral",21943,"engage Fresh array",new Date("2018-09-06T09:43:15.313Z"),"bypassing implement",{_id: 12475,str: "microchip access redundant",date: new Date("2018-09-06T09:15:55.037Z"),array: [],obj: {_id: 12476,str: "lavender",num: 47390,array: [{_id: 12477,num: 51521,date: new Date("2018-09-06T02:59:55.962Z"),obj: {}}],obj: {}}},92134,[new Date("2018-09-06T05:49:30.171Z")],new Date("2018-09-06T18:58:29.850Z"),[],73315,86366]});
    },

    function(coll) {
        return coll.insert({_id: 12478,str: "Handmade Concrete Shirt",num: 18651,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12479,str: "payment monetize capacity",num: 11971,date: new Date("2018-09-06T06:19:27.639Z"),array: [],obj: {_id: 12480,str: "Granite",num: 2658,date: new Date("2018-09-06T02:40:04.394Z"),array: [58877,{_id: 12481,date: new Date("2018-09-06T19:07:26.897Z"),array: [15616,{_id: 12482,num: 70054,date: new Date("2018-09-06T06:14:21.017Z"),array: [],obj: {_id: 12483,str: "executive installation Strategist",num: 66642,obj: {}}},"International Jewelery explicit"],obj: {}},"payment","Fish encryption Awesome Wooden Gloves",new Date("2018-09-06T17:48:51.208Z"),new Date("2018-09-06T11:28:34.337Z"),new Date("2018-09-06T01:18:30.603Z"),98456,[],{_id: 12484,str: "redundant Brand",num: 54859,date: new Date("2018-09-05T21:01:06.994Z"),obj: { _id: 12485 }}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12486,str: "calculate",num: 84421,date: new Date("2018-09-05T21:29:14.216Z"),array: [],obj: {_id: 12487,str: "Cambridgeshire",num: 84861,date: new Date("2018-09-06T04:07:16.585Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12488,str: "Future",num: 74822,date: new Date("2018-09-06T14:52:35.392Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12489,str: "Heard Island and McDonald Islands Bedfordshire",num: 13492,date: new Date("2018-09-06T13:35:24.609Z"),array: ["New York Fantastic",new Date("2018-09-06T04:26:50.671Z"),[],"Factors Baby projection",84487,new Date("2018-09-06T14:18:41.424Z"),89932,new Date("2018-09-06T17:46:18.927Z"),"Corporate out-of-the-box",{_id: 12490,str: "solutions North Korean Won",array: [new Date("2018-09-06T01:39:40.237Z"),{_id: 12491,str: "Chips Tasty",num: 3142,date: new Date("2018-09-06T13:54:26.924Z"),array: []}],obj: {}},"global",{_id: 12492,str: "Incredible one-to-one",num: 97257,obj: {}},29576,45909],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12493,str: "input Texas",num: 2668,date: new Date("2018-09-06T15:02:14.033Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12494,str: "El Salvador Colon US Dollar world-class",num: 4633,date: new Date("2018-09-06T09:39:11.719Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12495,str: "extend Palestinian Territory Bedfordshire",num: 41523,date: new Date("2018-09-06T10:01:31.128Z"),array: [],obj: {_id: 12496,str: "parse",num: 6886,date: new Date("2018-09-06T05:38:46.053Z"),array: [],obj: {_id: 12497,str: "parallelism Awesome Cotton Keyboard Realigned",date: new Date("2018-09-05T21:31:42.012Z"),array: [29072,new Date("2018-09-05T20:42:15.649Z"),"deposit card",["PCI e-services Web"],"transmit",{_id: 12498,num: 70128,date: new Date("2018-09-06T12:21:44.759Z"),array: []},{_id: 12499,num: 1295,array: [84896,new Date("2018-09-06T16:00:15.779Z")]},577,new Date("2018-09-05T22:33:00.504Z"),"Hungary Practical Cotton Salad",[12798,{_id: 12500,date: new Date("2018-09-06T09:38:35.201Z"),obj: {}},65200]],obj: {_id: 12501,str: "standardization Generic",obj: {_id: 12502,str: "Turnpike compress copy",num: 60963,date: new Date("2018-09-05T22:41:42.261Z"),array: [],obj: {}}}}}});
    },

    function(coll) {
        return coll.insert({_id: 12503,num: 13811,date: new Date("2018-09-06T02:41:32.565Z"),array: [],obj: {_id: 12504,str: "program Hungary",num: 57730,date: new Date("2018-09-06T05:10:13.193Z"),array: [{_id: 12505,str: "Mouse",num: 25859,date: new Date("2018-09-05T21:15:02.344Z"),array: [],obj: {_id: 12506,str: "homogeneous Cotton invoice",num: 96593,obj: {}}},new Date("2018-09-06T14:01:59.206Z"),14622,"Orchestrator reciprocal",new Date("2018-09-06T15:08:24.178Z"),"Multi-tiered Progressive",77354,new Date("2018-09-05T19:58:56.035Z"),"South Georgia and the South Sandwich Islands",["Salad Handmade",new Date("2018-09-05T22:59:32.371Z"),{_id: 12507,str: "sensor index",date: new Date("2018-09-06T04:16:49.081Z"),array: [],obj: {}}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12508,str: "Soft auxiliary",num: 65677,date: new Date("2018-09-06T10:13:05.760Z"),array: [40576,new Date("2018-09-06T06:50:59.939Z"),{_id: 12509,str: "wireless Integration",num: 15947,date: new Date("2018-09-06T09:37:15.932Z"),array: [],obj: {_id: 12510,str: "Indiana local area network Licensed Rubber Shoes",num: 40382,array: []}},93726,new Date("2018-09-06T08:45:00.489Z"),"1080p generate","productivity",new Date("2018-09-05T22:36:16.682Z"),[{_id: 12511,str: "indigo azure",num: 13102,date: new Date("2018-09-06T00:31:09.549Z"),array: ["Small Metal Cheese models",51071,new Date("2018-09-06T11:05:22.355Z")],obj: {_id: 12512,str: "unleash port Personal Loan Account",date: new Date("2018-09-06T17:26:30.976Z"),obj: {_id: 12513,str: "Frozen Manager",array: [],obj: {_id: 12514,num: 27940,date: new Date("2018-09-06T14:49:29.863Z"),obj: {}}}}},["Kids",{_id: 12515,array: []}],22511,68699],"Buckinghamshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12516,str: "Incredible Plastic Tuna",num: 68700,date: new Date("2018-09-06T11:04:39.582Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 12517,str: "index",num: 72563,date: new Date("2018-09-06T09:51:51.738Z"),array: [63785,new Date("2018-09-05T22:38:51.240Z"),"portals",new Date("2018-09-06T13:00:35.185Z"),new Date("2018-09-06T01:29:39.937Z"),{_id: 12518,str: "hacking didactic Holy See (Vatican City State)",num: 71451,date: new Date("2018-09-06T02:10:33.576Z"),array: [[],"Cambridgeshire plug-and-play"],obj: {_id: 12519,str: "Checking Account Reactive",num: 27811,date: new Date("2018-09-06T17:08:56.324Z"),obj: {}}},76037,45417,new Date("2018-09-06T07:56:31.443Z"),[],new Date("2018-09-06T03:57:19.316Z"),"Quality","Salad Consultant Human"],obj: {_id: 12520,array: ["Incredible Producer Cotton",2071],obj: {_id: 12521,str: "Program",num: 32235,date: new Date("2018-09-06T15:25:58.299Z")}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $dateFromString: { dateString: "2018-09-05T21:55:40.117Z" } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.obj.num']],useLongestLength: false,defaults: [[]]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[30645],[{ $substr: ["e-enable",5,11] },'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Strategist",v: new Date("2018-09-06T12:30:34.290Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["bypassing programming"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeekYear: { $dayOfYear: { $isoDayOfWeek: { $hour: { $month: { $toDate: { $reverseArray: [[]] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Cambodia virtual Generic Soft Mouse",20,8] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["granular",13,10] }],87718] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Toys Freeway"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $dateToString: {date: new Date("2018-09-06T16:36:27.338Z"),format: "%M-%m-%S-%L-%m-%U",timezone: "Etc/GMT0"} } }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bi-directional",v: true},{k: "pink bypassing Cheese",v: false}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $second: '$obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Cyprus" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Bedfordshire Cotton Monaco",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num','$obj.obj.num',88566],55542] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],85517] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Investment Account intranet Global",v: { $substrCP: ["back up Mouse",1,3] }},{k: "Practical Plastic Shoes",v: '$obj.obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $concat: [{ $substr: ['$str',13,2] },'$str'] },chars: "gold virtual Security"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Chilean Peso Unidades de fomento Ergonomic Cotton Salad Investment Account",chars: { $substr: ['$obj.obj.obj.obj.str',8,19] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.str',"Granite"],[{ $substrCP: ["secondary",8,20] }],[]]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[64207],45172] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toDate: { $month: { $dateFromString: {dateString: "2018-09-05T23:45:11.295Z",format: "%G-%M-%d-%U-%j-%%-%Z-%G-%w-%j",onNull: "Gloves Unbranded Granite"} } } }, _id: 0}}],

        [{$project: {a: { $minute: { $year: { $isoDayOfWeek: { $dayOfMonth: { $hour: { $hour: { $month: { $dateFromString: {dateString: "2018-09-05T20:07:43.661Z",format: "%z-%M-%U-%%-%U-%G-%m",timezone: "Asia/Macau"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[10474],['$str'],[{ $substr: ['$obj.str',8,18] },{ $trim: {input: "Small Metal Sausages moratorium Rubber",chars: { $toString: { $substr: ["Streamlined",0,8] } }} },"Ethiopian Birr Tennessee"],['$obj.obj.obj.obj.str','$obj.obj.obj.str'],[],['$obj.obj.obj.obj.num'],[false]],useLongestLength: true,defaults: [[new Date("2018-09-06T17:31:29.657Z")]]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Florida Generic Plastic Table Bedfordshire"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],93795] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $second: { $dateToString: {date: new Date("2018-09-06T18:34:58.575Z"),format: "%U-%G-%M-%z-%G",onNull: { $arrayToObject: [[{k: "disintermediate Berkshire Home",v: { $trunc: 79162 }}]] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',{ $rtrim: {input: "Liaison",chars: "Cyprus Handcrafted Frozen Bike"} }],97290] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num','$obj.obj.num'],94155] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "compressing service-desk Sleek Wooden Soap",v: { $trim: { input: "web-readiness Director systems" } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: {input: '$obj.str',chars: '$obj.obj.obj.str'} },{ $concat: [{ $ltrim: { input: "port" } },"Timor-Leste Refined","solid state"] }],["overriding overriding",'$obj.obj.obj.obj.str'],['$obj.obj.obj.obj.num',76410],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',"vortals e-tailers Hawaii"],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num',98057],[],[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T11:42:38.836Z",timezone: "Africa/Brazzaville",onError: { $toString: { $arrayToObject: [[[],[25221,'$num'],[]]] } }} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromString: {dateString: "2018-09-05T22:12:21.637Z",onError: { $arrayElemAt: [[{ $concat: [{ $trim: { input: "Buckinghamshire Danish Krone payment" } },'$obj.obj.obj.obj.str'] }],'$obj.obj.obj.num'] },onNull: '$obj.obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "optical connecting",v: { $second: { $year: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T13:51:22.854Z",format: "%d-%Y-%L-%j-%z-%w-%V-%d-%w-%z-%u"} } } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $reverseArray: [[]] } }],[],['$obj.obj.obj.obj.num'],[],[{ $toUpper: "Legacy" },new Date("2018-09-05T21:13:26.606Z")],[]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToString: {date: new Date("2018-09-05T21:10:13.021Z"),onNull: { $dateToString: {date: { $year: { $dayOfWeek: { $dateToString: {date: new Date("2018-09-06T11:42:52.444Z"),format: "%H-%H-%U-%S-%j-%V",timezone: "America/Indiana/Marengo",onNull: { $map: {input: [],as: 'jabari',in: { $floor: '$$jabari' }} }} } } },timezone: "America/Araguaina",onNull: "cohesive lavender"} }} } }, _id: 0}}],

        [{$project: {a: { $substr: ["quantify",1,6] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["software convergence"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $trim: {input: '$obj.obj.str',chars: "IB"} },"Berkshire Web payment"],cond: { $gt: [{ $arrayToObject: [[]] },{ $reverseArray: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T07:56:37.396Z"),format: "%Z-%%-%L-%u-%L-%G-%z-%V",onNull: '$str'} },'$obj.str'],1136] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[]] } }, _id: 0}}],

        [{$project: {a: { $trim: { input: "connecting Leone Northern Mariana Islands" } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Salad lavender Executive",{ $toLower: '$obj.obj.obj.obj.str' }]] }, _id: 0}}],

        [{$project: {a: { $range: [15,18,14] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.str',{ $toUpper: "interface Ergonomic" }],['$obj.obj.obj.obj.num'],[93481,28680],["Oklahoma"],[33256,'$obj.obj.num','$obj.obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "turquoise",v: true},{k: "Dynamic",v: "discrete array Borders"}]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $hour: { $dateFromString: {dateString: "2018-09-06T05:17:43.101Z",onNull: { $arrayToObject: [[[],['$obj.obj.str'],[]]] }} } },timezone: "America/Barbados"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],90937] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [["SQL zero administration"],79838] },{ $toLower: { $toUpper: '$obj.obj.str' } }] },day: { $ceil: 21829 },hour: { $ln: '$obj.obj.obj.obj.num' },second: '$num'} }, _id: 0}}],

        [{$project: {a: { $range: [15,8] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "generate Cambridgeshire COM",v: false}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toUpper: "quantifying" },11,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[91040],3169] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],35408] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $or: ['$str'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "copying",v: 22417},{k: "exploit Industrial tertiary",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num'],as: 'dixie',cond: { $and: [] }} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeekYear: { $dateToParts: {date: new Date("2018-09-06T08:34:25.377Z"),timezone: "Pacific/Port_Moresby",iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],65194] }, _id: 0}}],

        [{$project: {a: { $toLower: { $dateToString: { date: '$date' } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[],['$obj.obj.num'],[{ $substr: ["Cambridgeshire Architect",19,12] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],94911] }, _id: 0}}],

        [{$project: {a: { $range: [1,19] }, _id: 0}}],

        [{$project: {a: { $concat: ["Liberia copy Liberia"] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Arizona",20,0] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],99953] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Dam Industrial",chars: '$obj.obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeek: { $second: { $dateToString: {date: { $year: { $dayOfWeek: new Date("2018-09-06T16:05:46.579Z") } },format: "%M-%H-%Z-%u-%m-%Y-%Y-%w-%w-%j-%H-%V",timezone: "Etc/GMT-1",onNull: { $substrCP: ["Awesome Soft Tuna transmitting website",12,2] }} } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $toDate: { $arrayToObject: [[]] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Cheese Rubber"],50043] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "azure Sports Cotton",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["index matrix",'$obj.obj.obj.obj.str',{ $toString: { $dayOfWeek: { $year: { $week: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T03:03:28.149Z",format: "%V-%Z-%d-%V-%d-%Z-%%"} } } } } } }],69158] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'myra',cond: { $gt: [{ $substrCP: ['$obj.obj.str',18,15] },{ $dayOfWeek: { $second: { $dateToParts: {date: { $isoWeekYear: { $week: new Date("2018-09-06T07:56:49.097Z") } },iso8601: true} } } }] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "quantifying Cambridgeshire Synchronised",chars: "JBOD Cotton envisioneer"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],84437] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.obj.num',88169],["enable"],[],[],['$obj.obj.str','$obj.obj.str'],[]],defaults: [[80088],/Credit Card Account|disintermediate|intranet|Fish/,["Kazakhstan Pizza Cambridgeshire","Fords"],{}]} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.num',52137],[9180,29979]],useLongestLength: true,defaults: ["Borders reboot"]} }, _id: 0}}],

        [{$project: {a: { $concat: ["Associate",{ $substr: ["Multi-channelled",3,19] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],['$num',81453],[]]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $isoWeekYear: { $toDate: '$obj.obj.obj.date' } } } }, _id: 0}}],

        [{$project: {a: { $range: [20,12,13] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Intelligent",{ $ltrim: {input: '$obj.obj.obj.str',chars: '$obj.str'} },{ $toUpper: "Agent" }],in: { $mod: [68610,'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],{ $size: [['$obj.num',{ $add: [13570] },'$obj.obj.num']] }] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: '$date',timezone: "Europe/Luxembourg"} }, _id: 0}}],

        [{$project: {a: { $toUpper: "info-mediaries 1080p" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Soft Savings Account Future",{ $rtrim: { input: '$obj.obj.obj.obj.str' } }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',50697,'$obj.num'],49342] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $mod: ['$obj.obj.num',60909] },isoWeek: { $sqrt: '$num' },isoDayOfWeek: { $add: [28242,44407,{ $add: [] }] },minute: { $exp: '$num' },second: { $indexOfArray: [{ $concatArrays: [["Program programming","bypassing"],['$obj.obj.obj.str']] },{ $concatArrays: [[67062,'$obj.obj.num'],[],[{ $concat: [] },"programming"]] },9] },millisecond: '$obj.obj.obj.obj.num'} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromString: {dateString: "2018-09-05T23:16:39.446Z",timezone: "Indian/Maldives",onError: { $zip: {inputs: [['$obj.obj.str'],[],['$num']],useLongestLength: true} }} } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T02:23:40.769Z",format: "%U-%M-%L-%Y-%M",timezone: "Australia/Hobart",onNull: { $arrayElemAt: [[{ $substr: ['$obj.obj.obj.obj.str',1,11] },'$obj.obj.obj.obj.str','$obj.str',"RSS"],'$obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: "Dynamic",chars: '$obj.obj.obj.str'} },{ $substrCP: ['$obj.obj.obj.obj.str',18,19] },"British Indian Ocean Territory (Chagos Archipelago)"],77335] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str','$obj.str',"Ridges EXE driver"],74760] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $trim: {input: '$obj.obj.str',chars: "systematic programming Unions"} },11,14] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toUpper: '$obj.obj.str' }],in: { $ceil: 22772 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $second: { $week: { $isoDayOfWeek: { $year: { $toDate: { $isoWeek: { $minute: { $week: { $millesecond: { $dayOfYear: { $year: { $isoWeek: { $month: { $dateFromParts: {isoWeekYear: { $abs: 8002 },minute: { $add: ['$obj.obj.obj.obj.num'] },timezone: "Asia/Barnaul"} } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $week: { $dayOfWeek: { $millesecond: { $dateFromString: {dateString: "2018-09-06T08:53:45.450Z",format: "%S-%%-%m-%m-%L-%S",timezone: "Asia/Aqtau"} } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Credit Card Account",'$obj.obj.obj.str'],["dynamic digital Computers",{ $substrBytes: [{ $ltrim: { input: '$obj.obj.str' } },20,0] },'$obj.obj.str'],[],['$num'],['$obj.obj.obj.num',32762,'$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],98494] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "synergize",v: new Date("2018-09-06T01:41:50.136Z")},{k: "quantifying Azerbaijanian Manat",v: "technologies"}]] }, _id: 0}}],

        [{$project: {a: { $range: [3,9,6] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substr: ["Associate plum",18,4] }] }, _id: 0}}],

        [{$project: {a: { $minute: '$date' }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T22:55:20.016Z",timezone: "Africa/Timbuktu"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $month: { $dayOfYear: { $isoWeek: { $dateToString: {date: '$obj.date',format: "%H-%M-%z-%H-%m-%d"} } } } },timezone: "Etc/UTC"} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoDayOfWeek: { $dayOfYear: new Date("2018-09-06T13:42:21.707Z") } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$num'],58380] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[97508],1574] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transmitting Unbranded Investor",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $week: { $isoWeek: { $dateToParts: {date: { $hour: { $isoWeekYear: { $isoDayOfWeek: { $millesecond: { $hour: { $toDate: { $dateFromString: {dateString: "2018-09-06T01:14:21.768Z",format: "%M-%m-%V-%u-%Y-%z-%u-%%",timezone: "America/Argentina/Mendoza",onError: { $arrayToObject: [[{k: "supply-chains Incredible Granite Chicken",v: '$obj.str'}]] }} } } } } } } },iso8601: false} } } } }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Orchestrator XSS",'$obj.obj.obj.obj.str'],[],['$obj.obj.num','$obj.obj.obj.num',13903],[{ $add: [] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Awesome Frozen Mouse",v: 72346}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.obj.str',12,20] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[]] }, _id: 0}}],

        [{$project: {a: { $toString: { $dayOfYear: { $dateToString: { date: new Date("2018-09-06T16:50:43.764Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],79930] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $toLower: '$obj.obj.obj.str' },"Corporate",'$str'],33921] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $year: { $dayOfMonth: { $dayOfWeek: { $isoDayOfWeek: { $dateToString: {date: { $toDate: { $arrayToObject: [[]] } },timezone: "America/Lima",onNull: "dynamic technologies"} } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $week: { $year: { $toDate: { $arrayElemAt: [[],'$num'] } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "neural",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Intelligent",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "interface" }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $substr: [{ $toUpper: "silver" },2,12] },11,17] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $toLower: "generating" },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Customer",chars: "Dynamic Pass"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],['$obj.obj.obj.obj.str'],[49513,76134,'$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T15:05:18.327Z"),format: "%j-%z-%Y-%M-%Y-%H",timezone: "Indian/Christmas"} }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $isoWeekYear: { $isoWeekYear: { $dayOfMonth: { $dateToString: {date: '$obj.obj.obj.date',timezone: "America/Noronha"} } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T03:50:39.637Z",format: "%z-%S-%H-%d-%Y-%S-%%-%z-%w-%S",timezone: "Atlantic/Stanley",onError: { $substr: ['$obj.obj.obj.str',11,8] },onNull: { $ltrim: {input: { $toString: { $arrayToObject: [[["Credit Card Account Investor",{ $concat: ["hacking"] },"experiences"],['$num',17720],['$obj.obj.str','$obj.str'],[94080],['$obj.obj.str',"Montana"]]] } },chars: { $toLower: { $concat: [] } }} }} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["needs-based"],[],['$obj.obj.num',{ $pow: [54017,{ $add: [] }] }]]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $ltrim: {input: "monitor Granite Dominican Peso",chars: '$str'} } } }, _id: 0}}],

        [{$project: {a: { $range: [8,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Indiana",v: true}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfMonth: { $hour: { $dateFromString: {dateString: "2018-09-06T05:01:46.521Z",format: "%u-%j-%H-%u-%H-%d-%V-%m-%H-%d",onNull: { $toString: { $dayOfMonth: { $year: { $dateFromString: {dateString: "2018-09-06T08:25:56.070Z",timezone: "Europe/Vienna",onError: { $arrayToObject: [[['$obj.obj.str','$obj.obj.obj.obj.str'],["Fork Borders white"],[17228],[false],[]]] }} } } } }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["synthesizing",{ $ltrim: { input: { $substr: ['$obj.obj.obj.str',19,20] } } }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handcrafted",v: '$obj.obj.obj.obj.str'},{k: "solutions withdrawal",v: new Date("2018-09-06T14:43:37.476Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["navigate Danish Krone",'$str'],[8569],[{ $ltrim: {input: "1080p",chars: { $trim: { input: { $substr: ["Agent Buckinghamshire",20,17] } } }} }]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $add: ['$obj.obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T07:07:31.309Z"),timezone: "America/Indiana/Petersburg"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Grocery Table",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',19,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "compressing e-markets payment",v: '$num'},{k: "Ways product Avon",v: { $dateToString: {date: { $isoWeek: { $dateToParts: {date: { $isoDayOfWeek: { $dayOfYear: { $dayOfWeek: { $millesecond: { $hour: { $dateToParts: { date: { $minute: { $isoWeekYear: { $month: { $isoWeek: { $minute: { $isoWeekYear: { $year: { $dateFromParts: {year: { $sqrt: 87374 },month: { $cmp: [{ $arrayToObject: [[{k: "Unbranded back-end",v: true},{k: "Throughway",v: { $dayOfYear: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $log: [{ $abs: '$obj.num' },'$obj.obj.num'] },isoWeek: 25252,second: { $multiply: ['$obj.obj.num',22409] },timezone: "Africa/Douala"} } } }}]] },{ $range: [10,18,19] }] },minute: { $size: [[{ $trim: {input: "invoice Up-sized Steel",chars: "Communications"} }]] }} } } } } } } } } } } } } } } },timezone: "Antarctica/Macquarie",iso8601: false} } },format: "%H-%S-%Y-%S-%L",timezone: "Asia/Tomsk",onNull: { $arrayElemAt: [["Coordinator Refined Frozen Shirt transmit",'$obj.obj.obj.str','$obj.str','$obj.obj.obj.obj.str'],'$num'] }} }}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T14:24:09.318Z"),timezone: "Libya",onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Spain IB Ergonomic Granite Bacon"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[14416,{ $subtract: [25376,'$obj.obj.num'] },'$num'],['$obj.str',"European Unit of Account 17(E.U.A.-17) Consultant demand-driven",'$obj.str',{ $toUpper: "Chicken fresh-thinking RAM" }],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.num',70413],["bypassing auxiliary Cotton"],[{ $toUpper: "Intelligent Industrial Plastic" },'$obj.obj.obj.str',{ $rtrim: {input: '$obj.str',chars: '$obj.obj.obj.str'} }]],useLongestLength: true,defaults: [/Jewelery|Manager/,false]} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.str'],["microchip Licensed Fresh Car"],['$obj.obj.str',{ $substrBytes: ["Delaware navigating",0,12] },"Small Plastic Pizza implementation Small Fresh Fish",{ $toLower: { $substr: ["Nakfa Money Market Account Applications",17,13] } },{ $rtrim: { input: "seamless National Research" } }]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Handcrafted Bedfordshire",17,0] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],3045] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',0,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],62579] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "Tennessee transmitting Interactions",v: new Date("2018-09-06T04:18:56.449Z")}]] } }, _id: 0}}],

        [{$project: {a: { $toUpper: "withdrawal" }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfMonth: { $second: { $isoWeekYear: { $week: { $dateFromParts: {isoWeekYear: { $exp: '$obj.num' },isoWeek: 53691} } } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [['$obj.obj.str',"system Nigeria Persevering",{ $dateToString: { date: { $millesecond: { $dateFromParts: {year: { $cmp: [{ $substr: [{ $trim: {input: "Legacy out-of-the-box",chars: { $toLower: '$obj.str' }} },14,15] },{ $zip: {inputs: [[{ $concat: ["circuit Graphical User Interface Buckinghamshire"] }],[],['$obj.obj.obj.num',41131,'$obj.num']],useLongestLength: false} }] },millisecond: { $subtract: ['$obj.obj.obj.obj.num',35470] }} } } } }],34526] } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toString: { $substrCP: [{ $concat: ['$str',"Practical Rubber Computer interfaces"] },1,19] } },13,8] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $minute: { $isoWeekYear: { $year: { $dateToParts: {date: { $dayOfWeek: { $second: { $millesecond: { $month: { $month: { $isoDayOfWeek: { $week: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T06:45:37.736Z",timezone: "Etc/Greenwich"} } } } } } } } } },iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["Orchestrator Legacy Granite",5,20] },{ $toString: { $ltrim: {input: "Borders Iceland Refined Rubber Hat",chars: '$obj.obj.obj.str'} } }],4254] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num',47952],as: 'anjali',cond: { $lte: [{ $reverseArray: [["array Ball"]] },{ $arrayToObject: [[['$obj.obj.str',"teal optical"],['$str'],[77794],[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Table",{ $trim: { input: '$str' } }],["Triple-buffered Borders Views"],[91706,12679,'$obj.obj.obj.obj.num',{ $log: [{ $cmp: [{ $rtrim: {input: { $concat: [] },chars: '$obj.obj.obj.str'} },{ $arrayElemAt: [[],'$num'] }] },'$num'] }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "needs-based deposit",v: '$obj.str'},{k: "Cheese Suriname",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $hour: { $month: { $year: { $dayOfMonth: new Date("2018-09-06T13:34:46.908Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Personal Loan Account SQL Grocery",'$str',{ $ltrim: { input: '$obj.obj.obj.str' } }],[{ $toUpper: "systemic" }]]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "implement",v: { $ltrim: {input: "platforms",chars: '$obj.obj.obj.str'} }}]] } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.obj.num'],as: 'monte',cond: { $lt: [{ $isoDayOfWeek: { $second: { $dateToParts: {date: { $year: { $dayOfMonth: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T08:18:17.736Z",timezone: "America/Hermosillo",onError: { $arrayToObject: [[{k: "Forward payment",v: '$obj.obj.obj.str'},{k: "mindshare",v: "Squares Granite AI"}]] }} } } } },timezone: "Australia/LHI"} } } },{ $toString: { $toString: { $dateToParts: {date: { $month: { $millesecond: { $isoWeekYear: { $isoWeek: { $dateFromParts: {year: { $cmp: [{ $objectToArray: '$$monte' },{ $dayOfYear: { $month: { $year: { $isoDayOfWeek: { $dateToString: {date: '$obj.date',format: "%L-%H-%L-%w-%Y-%Z-%m-%H-%Z-%H-%M"} } } } } }] },day: { $mod: ['$obj.obj.obj.num',{ $ln: 32117 }] },hour: { $size: [[{ $toLower: { $ltrim: {input: '$$monte',chars: { $substr: ['$obj.str',3,13] }} } }]] },millisecond: { $log10: 70715 }} } } } } },timezone: "Etc/UTC",iso8601: true} } } }] }} }, _id: 0}}],

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
