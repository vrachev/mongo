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
        return coll.insert({_id: 23900,num: 20928,date: new Date("2018-09-06T04:50:26.772Z"),array: [new Date("2018-09-06T06:55:05.425Z"),44574,"Seychelles Sleek deposit",38095,"Cambridgeshire Auto Loan Account Tasty",34703,new Date("2018-09-06T00:28:19.018Z"),"Rubber Terrace microchip","Buckinghamshire e-markets"],obj: {_id: 23901,str: "backing up",num: 34585,date: new Date("2018-09-06T10:18:15.881Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23902,str: "panel homogeneous",num: 10033,date: new Date("2018-09-06T12:25:09.037Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23903,str: "gold Producer",num: 88697,date: new Date("2018-09-06T19:35:12.134Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23904,str: "orchid Steel",num: 5583,date: new Date("2018-09-06T01:17:45.703Z"),array: ["Home Loan Account",46708,"Realigned",[],18941,7623,"calculating",new Date("2018-09-06T13:58:48.881Z"),25127,{_id: 23905,str: "Multi-tiered invoice dedicated",num: 50608,date: new Date("2018-09-06T14:36:44.047Z"),array: [],obj: {}},new Date("2018-09-05T23:48:41.253Z"),new Date("2018-09-06T08:12:38.865Z"),"back-end"],obj: {_id: 23906,str: "cohesive",num: 54690,array: [new Date("2018-09-06T05:46:43.556Z"),"functionalities"],obj: {_id: 23907,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23908,str: "matrix drive",num: 50959,date: new Date("2018-09-06T10:28:20.964Z"),array: [new Date("2018-09-06T07:17:23.797Z"),58318,"interfaces Human",["payment value-added",33632,new Date("2018-09-06T19:51:19.224Z"),{_id: 23909,str: "definition Intranet",num: 77814,array: [],obj: {}}],"Awesome Soft",[30270],new Date("2018-09-06T19:15:50.844Z"),new Date("2018-09-06T13:45:36.248Z"),38086,16050,{_id: 23910,str: "gold Manager product",num: 7365,date: new Date("2018-09-06T02:25:48.736Z"),array: [],obj: {_id: 23911,date: new Date("2018-09-05T22:14:27.637Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23912,str: "Ergonomic firewall Cambridgeshire",num: 11956,date: new Date("2018-09-06T03:18:12.682Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23913,str: "Sports",num: 33593,array: [9986,{_id: 23914,num: 75788,date: new Date("2018-09-06T04:30:32.712Z"),array: [],obj: {}},"Director Handmade Texas",new Date("2018-09-06T03:59:29.868Z"),{_id: 23915,str: "withdrawal",num: 42633,date: new Date("2018-09-06T19:05:55.651Z"),array: [["e-business ability"],new Date("2018-09-06T18:24:48.205Z"),70501]},16398,[],87548,"capacitor",83783,new Date("2018-09-06T06:48:57.599Z"),90896,7352],obj: {_id: 23916,str: "Home Loan Account",date: new Date("2018-09-05T23:50:23.236Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23917,str: "hacking tan",num: 89543,date: new Date("2018-09-06T16:50:17.987Z"),array: [],obj: {_id: 23918,str: "Research bricks-and-clicks Rand Loti",num: 19065,date: new Date("2018-09-06T10:19:23.968Z"),array: [new Date("2018-09-06T09:06:22.534Z"),68197,{_id: 23919,str: "complexity",num: 30799,date: new Date("2018-09-05T21:06:40.233Z"),obj: {}},"Latvian Lats compressing FTP","Pre-emptive",new Date("2018-09-05T21:00:06.691Z"),34840,new Date("2018-09-06T12:24:29.427Z"),88894,{_id: 23920,str: "Awesome Rubber Bike",date: new Date("2018-09-06T09:25:23.455Z"),array: [new Date("2018-09-06T04:28:45.648Z")],obj: {_id: 23921,array: [],obj: {}}},"Cloned",[],"Canyon networks"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23922,str: "Executive turquoise Tuna",num: 3477,date: new Date("2018-09-06T19:24:40.336Z"),array: [],obj: {_id: 23923,str: "View Sleek",num: 24183,date: new Date("2018-09-06T12:16:51.833Z"),obj: {_id: 23924,num: 92271,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23925,str: "24/7 Consultant",num: 78529,date: new Date("2018-09-06T18:53:15.917Z"),array: [],obj: {_id: 23926,str: "target Licensed Soft Chips Buckinghamshire",num: 65803,date: new Date("2018-09-06T10:56:33.889Z")}});
    },

    function(coll) {
        return coll.insert({_id: 23927,str: "Rustic Rubber Pizza",num: 7559,date: new Date("2018-09-06T12:05:55.865Z"),array: [],obj: {_id: 23928,str: "Unbranded mindshare",num: 96490,array: [new Date("2018-09-06T11:47:47.316Z"),{_id: 23929,str: "Minnesota Legacy Salad",array: ["Lead",18999],obj: {}},3739,new Date("2018-09-06T08:54:32.994Z"),new Date("2018-09-06T05:48:29.637Z"),[90393,"e-business","Investment Account bandwidth"],[],33078,{_id: 23930,date: new Date("2018-09-05T20:52:26.342Z"),array: []},"Internal",{_id: 23931,num: 60668,obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23932,date: new Date("2018-09-06T15:05:36.761Z"),array: [],obj: {_id: 23933,str: "Chicken",num: 67143,date: new Date("2018-09-05T20:38:05.197Z"),array: ["bandwidth",new Date("2018-09-06T08:38:41.088Z"),79541,{_id: 23934,str: "extensible Ramp Garden",num: 35266,obj: {_id: 23935,str: "neural partnerships SMS",num: 45638,date: new Date("2018-09-06T02:07:16.226Z")}},new Date("2018-09-06T13:24:50.862Z"),11399,39050,"Extensions Cambridgeshire","hacking deposit",[new Date("2018-09-05T21:42:12.726Z"),new Date("2018-09-06T09:53:52.220Z"),{_id: 23936,str: "hardware Baby",num: 3224,array: [new Date("2018-09-06T05:40:43.365Z")],obj: {_id: 23937,num: 8087,date: new Date("2018-09-05T22:52:56.151Z"),array: [],obj: {}}},"open-source Practical San Marino",{_id: 23938,str: "Soft",date: new Date("2018-09-06T00:00:49.672Z"),array: [[73645]]},82289]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23939,str: "District",num: 46036,date: new Date("2018-09-05T23:50:24.361Z"),array: [62535,new Date("2018-09-05T23:32:51.311Z"),new Date("2018-09-05T20:02:30.822Z"),"Ergonomic","Wooden Vermont",13507],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23940,str: "bifurcated whiteboard backing up",num: 50156,date: new Date("2018-09-06T18:34:39.003Z"),array: [new Date("2018-09-06T15:59:20.076Z"),32469,"Implementation Pitcairn Islands",75062,"clicks-and-mortar Administrator","invoice partnerships Sports",6392,[new Date("2018-09-06T14:20:00.412Z"),[],new Date("2018-09-06T14:20:49.690Z"),[],30530],"Open-source",{_id: 23941,num: 58593,date: new Date("2018-09-06T09:01:17.919Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23942,str: "deposit",num: 63332,date: new Date("2018-09-06T18:11:59.984Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 23943,str: "copying extend",date: new Date("2018-09-06T15:54:28.260Z"),array: ["Computers",{_id: 23944,str: "Cambridgeshire Personal Loan Account Jewelery",num: 57006,date: new Date("2018-09-06T06:01:47.359Z"),array: [],obj: {}},[],new Date("2018-09-05T22:30:19.420Z"),"architectures overriding",45747,{_id: 23945,str: "Representative Concrete",num: 37500,obj: {}},"Sports",new Date("2018-09-06T00:43:59.582Z"),new Date("2018-09-06T15:49:41.307Z"),[17965],34741,new Date("2018-09-06T16:26:06.182Z"),589]});
    },

    function(coll) {
        return coll.insert({_id: 23946,str: "Future Handcrafted Cotton Sausages",num: 91878,date: new Date("2018-09-06T07:25:36.381Z"),array: [new Date("2018-09-06T05:38:35.948Z"),[],new Date("2018-09-06T18:00:27.571Z"),"Shirt Underpass TCP","Licensed Soft Mouse",17323,{_id: 23947,str: "Danish Krone bluetooth",num: 33660,array: [],obj: {_id: 23948,str: "Global Personal Loan Account access",date: new Date("2018-09-06T12:00:30.460Z"),obj: {_id: 23949,num: 51788,date: new Date("2018-09-06T18:17:35.028Z"),obj: {}}}},{_id: 23950,str: "quantify architect Algerian Dinar",num: 53751,date: new Date("2018-09-06T08:58:26.551Z"),array: ["compressing synergies Personal Loan Account"]},[],{_id: 23951,str: "enhance Cotton",num: 19991,array: [82370,new Date("2018-09-06T14:32:03.292Z")],obj: {_id: 23952,str: "Bedfordshire Argentina Salad",date: new Date("2018-09-06T14:40:08.335Z"),obj: {}}},"Direct Developer Soft",[],new Date("2018-09-06T13:11:29.387Z"),70245]});
    },

    function(coll) {
        return coll.insert({_id: 23953,str: "transition user-centric",num: 60921,date: new Date("2018-09-06T02:30:22.731Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23954,str: "bottom-line microchip",date: new Date("2018-09-05T21:14:49.434Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23955,str: "Concrete",num: 34375,date: new Date("2018-09-06T05:42:19.253Z"),array: [46449,"Implemented calculating Supervisor",new Date("2018-09-06T09:11:57.743Z"),[],new Date("2018-09-06T04:00:57.126Z"),{_id: 23956,str: "programming",num: 93737,array: [5916],obj: {}},new Date("2018-09-06T01:11:15.786Z"),5654,[],69083,"Self-enabling","Union AI empower"]});
    },

    function(coll) {
        return coll.insert({_id: 23957,str: "Specialist bottom-line",num: 98307,date: new Date("2018-09-06T10:02:25.361Z"),array: ["Sleek Manor","synthesize",new Date("2018-09-06T00:25:25.949Z"),64020,new Date("2018-09-05T23:40:07.742Z"),new Date("2018-09-06T14:47:06.651Z"),[],"connect mission-critical Swiss Franc",[],{_id: 23958,str: "Product navigating fault-tolerant",num: 17789,date: new Date("2018-09-06T12:26:23.215Z"),array: [],obj: {_id: 23959,date: new Date("2018-09-06T14:15:29.061Z"),array: [13663,[new Date("2018-09-06T08:50:20.264Z"),{_id: 23960,str: "Programmable",num: 11472,array: [new Date("2018-09-06T03:24:39.625Z")],obj: {}}],22714,{_id: 23961,num: 64426,array: [],obj: {_id: 23962,str: "bypass payment e-tailers",date: new Date("2018-09-05T23:32:34.946Z"),obj: {}}}],obj: {}}},{_id: 23963,str: "Clothing Producer digital",date: new Date("2018-09-06T03:06:44.468Z"),array: [{_id: 23964,str: "Legacy",num: 15567,date: new Date("2018-09-06T09:02:27.783Z"),obj: {_id: 23965,num: 59397,obj: {_id: 23966,date: new Date("2018-09-05T20:07:13.551Z"),array: []}}}],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 23967,str: "Facilitator",num: 25862,date: new Date("2018-09-06T00:49:11.013Z"),array: [],obj: {_id: 23968,num: 85595,date: new Date("2018-09-06T04:36:58.569Z"),array: [21471]}});
    },

    function(coll) {
        return coll.insert({_id: 23969,str: "Corporate",num: 9627,date: new Date("2018-09-06T06:19:59.881Z"),array: ["bypassing",[],{_id: 23970,str: "Licensed Wooden Chips Investment Account District",num: 26976,array: [],obj: {}},"FTP Buckinghamshire Hong Kong Dollar",598,[86391,new Date("2018-09-05T20:58:28.910Z")],new Date("2018-09-06T03:29:36.370Z"),new Date("2018-09-06T10:02:24.992Z"),33254,[],{_id: 23971,str: "open system",num: 53562,date: new Date("2018-09-06T11:45:40.642Z"),obj: {_id: 23972,num: 24350,date: new Date("2018-09-06T08:32:39.989Z"),array: [],obj: {_id: 23973,str: "extend methodical",date: new Date("2018-09-06T02:44:52.882Z"),array: [new Date("2018-09-06T18:24:23.884Z")]}}},"Court","clear-thinking"]});
    },

    function(coll) {
        return coll.insert({_id: 23974,str: "indigo",num: 4164,array: [76291,81523,new Date("2018-09-06T00:26:06.975Z"),"Accounts Programmable","Customer Maryland",new Date("2018-09-06T11:01:17.214Z"),new Date("2018-09-06T04:35:37.342Z"),90754,new Date("2018-09-06T10:03:41.002Z"),27545,[],"Concrete",64631,new Date("2018-09-06T10:20:25.619Z")],obj: {_id: 23975,str: "innovative parallelism",num: 20464,date: new Date("2018-09-06T18:55:00.924Z"),array: [new Date("2018-09-06T12:17:12.543Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 23976,str: "actuating Licensed dedicated",num: 88335,date: new Date("2018-09-06T19:53:04.548Z"),array: [],obj: {_id: 23977,str: "Automotive bypass",num: 19756,date: new Date("2018-09-06T18:16:45.600Z"),obj: {_id: 23978,num: 79670,date: new Date("2018-09-05T22:50:52.055Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23979,str: "Fresh",num: 44637,date: new Date("2018-09-06T18:32:13.451Z"),array: [new Date("2018-09-05T22:58:14.290Z"),"Shoes Managed","Auto Loan Account Producer Producer",25766,new Date("2018-09-05T23:53:44.417Z"),12023,49221,"viral",[],{_id: 23980,str: "Tunisia Sleek cyan",num: 81180,date: new Date("2018-09-06T04:59:32.000Z"),array: [56051,[19553,new Date("2018-09-06T09:57:00.683Z")]],obj: {_id: 23981,str: "Sleek Rubber Towels",num: 24434,array: [69211,{_id: 23982,date: new Date("2018-09-06T15:20:47.382Z"),obj: {_id: 23983,str: "Small Mountain",array: [],obj: {}}},new Date("2018-09-06T02:56:33.604Z"),[]]}},"magenta",65630],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23984,str: "customer loyalty",num: 33362,array: [{_id: 23985,str: "maroon withdrawal mission-critical",num: 20224,date: new Date("2018-09-06T13:58:39.879Z"),array: ["Analyst Bacon","web-enabled"],obj: {_id: 23986,num: 99761,date: new Date("2018-09-06T12:08:27.156Z"),array: [],obj: {}}},new Date("2018-09-06T02:04:23.404Z"),new Date("2018-09-06T00:52:23.530Z"),58459,"Credit Card Account open-source Strategist",[],13912,35881,{_id: 23987,str: "Pennsylvania synthesize",obj: {}},new Date("2018-09-06T00:53:10.282Z"),"HDD AGP mint green",{_id: 23988,str: "demand-driven Toys withdrawal",date: new Date("2018-09-06T15:51:31.025Z"),array: [new Date("2018-09-06T19:36:49.229Z"),"Cambridgeshire Strategist",68435],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 23989,str: "Credit Card Account even-keeled",num: 65401,date: new Date("2018-09-06T08:51:27.598Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23990,str: "Suriname",num: 44970,date: new Date("2018-09-06T06:55:01.338Z"),array: [],obj: {_id: 23991,str: "Michigan back up Clothing",num: 83604,date: new Date("2018-09-06T11:31:39.937Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23992,str: "Practical Investment Account",date: new Date("2018-09-06T13:46:00.938Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23993,str: "olive Bedfordshire",num: 60196,date: new Date("2018-09-05T22:07:37.185Z"),array: ["deposit white Gorgeous Metal Shoes",37673,"quantify maroon Tunisian Dinar",new Date("2018-09-05T23:46:34.151Z"),69226,new Date("2018-09-06T10:09:11.429Z"),new Date("2018-09-05T23:41:27.299Z"),28077,"Credit Card Account",{_id: 23994,date: new Date("2018-09-06T14:40:36.353Z"),obj: {}},[],[]],obj: {_id: 23995,str: "parse Intelligent Concrete Cheese",num: 82831,date: new Date("2018-09-06T15:21:04.631Z"),obj: {_id: 23996,str: "Executive withdrawal",num: 70419,array: [45743]}}});
    },

    function(coll) {
        return coll.insert({_id: 23997,str: "Usability",num: 23680,date: new Date("2018-09-06T09:58:27.512Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 23998,str: "Direct",num: 24146,date: new Date("2018-09-06T02:07:18.050Z"),array: [],obj: {_id: 23999,str: "Books",date: new Date("2018-09-06T05:16:51.928Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 24000,str: "Baby",num: 70488,date: new Date("2018-09-05T22:31:15.209Z"),array: [new Date("2018-09-06T04:06:17.949Z"),[],79301,"feed Idaho Credit Card Account",92643,"grow Expanded Rufiyaa",{_id: 24001,num: 37896,date: new Date("2018-09-06T16:16:19.904Z"),array: [],obj: {_id: 24002,str: "Cotton Usability",num: 72389,array: ["Cambridgeshire",new Date("2018-09-06T12:16:12.068Z")],obj: {}}},[24175,[new Date("2018-09-06T16:42:32.109Z")],"payment cross-platform"],"Somoni",new Date("2018-09-06T10:20:56.708Z"),29959]});
    },

    function(coll) {
        return coll.insert({_id: 24003,str: "Group e-business circuit",num: 59112,date: new Date("2018-09-06T14:02:48.101Z"),array: [94539,89157,{_id: 24004,str: "deposit HDD solution",date: new Date("2018-09-06T12:47:17.096Z"),array: [new Date("2018-09-06T06:26:15.301Z"),new Date("2018-09-06T06:49:14.985Z"),"Investment Account monitor",[]],obj: {}},[],new Date("2018-09-05T23:34:05.559Z"),63049,"purple RSS Personal Loan Account",{_id: 24005,str: "gold",num: 9412,date: new Date("2018-09-06T02:31:17.959Z"),array: [],obj: {_id: 24006,num: 86069,array: ["HDD magnetic Handcrafted",[]],obj: {_id: 24007,num: 65639,array: []}}},65538,[],new Date("2018-09-06T16:35:25.397Z"),new Date("2018-09-06T06:40:12.511Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24008,num: 3342,date: new Date("2018-09-06T16:36:19.090Z"),array: [new Date("2018-09-06T07:51:47.862Z"),new Date("2018-09-05T20:53:34.058Z"),"Facilitator",{_id: 24009,num: 4776,date: new Date("2018-09-05T21:44:41.244Z"),array: [9848,"Solutions mesh",new Date("2018-09-06T02:34:17.780Z")],obj: {_id: 24010,str: "Sausages Handmade Steel Pizza haptic",num: 82285,date: new Date("2018-09-06T07:25:12.266Z"),array: [],obj: {_id: 24011,str: "Small Steel Pants Strategist Florida",date: new Date("2018-09-06T04:21:50.715Z"),array: []}}},[],60531,new Date("2018-09-06T09:28:45.163Z"),{_id: 24012,str: "Avon",date: new Date("2018-09-06T00:08:53.344Z"),array: [new Date("2018-09-06T12:22:17.028Z"),6000],obj: {}},"overriding Savings Account","explicit repurpose engage",[{_id: 24013,str: "value-added",num: 14120,array: [32196],obj: {}}],46338]});
    },

    function(coll) {
        return coll.insert({_id: 24014,str: "Lesotho Chief generating",num: 61991,date: new Date("2018-09-06T17:45:48.754Z"),array: ["Industrial Pitcairn Islands Phased",[],81974,new Date("2018-09-06T08:33:38.951Z"),new Date("2018-09-06T13:51:51.479Z"),39943,{_id: 24015,str: "solutions",num: 19654,array: [new Date("2018-09-06T04:00:12.977Z"),{_id: 24016,str: "Georgia Hong Kong",num: 81577,date: new Date("2018-09-06T15:42:09.169Z"),array: [],obj: {_id: 24017,date: new Date("2018-09-06T02:44:35.168Z"),array: ["withdrawal Sleek Cotton Mouse Practical Concrete Ball"],obj: {}}},"architect","JSON Garden"]},6281,"parse Benin Accountability",new Date("2018-09-06T14:04:28.547Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24018,str: "Leone Washington",num: 68693,date: new Date("2018-09-06T00:56:24.025Z"),array: ["Metrics Directives proactive",{_id: 24019,str: "quantify",num: 75526,array: [],obj: {}},new Date("2018-09-06T10:11:21.285Z"),25339,new Date("2018-09-06T15:48:32.733Z"),[[54433],"Yemen Functionality EXE","Computer Money Market Account"],{_id: 24020,str: "HTTP Auto Loan Account",date: new Date("2018-09-06T07:08:53.261Z"),array: [],obj: {_id: 24021,str: "conglomeration engineer",num: 49564,date: new Date("2018-09-05T20:58:03.073Z")}},17443,[],new Date("2018-09-06T07:54:41.990Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24022,str: "Corporate",num: 22015,array: [new Date("2018-09-05T22:04:46.236Z"),61546,[],{_id: 24023,num: 57853,date: new Date("2018-09-06T04:10:05.777Z"),obj: {_id: 24024,str: "Belarus Money Market Account Ouguiya",date: new Date("2018-09-06T08:07:29.422Z"),array: [],obj: {}}},"integrated RSS","Soft impactful","back up Handcrafted Tools",new Date("2018-09-06T15:14:21.413Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 24025,str: "orchestrate Home Loan Account HDD",num: 86462,date: new Date("2018-09-06T02:16:44.446Z"),array: [],obj: {_id: 24026,str: "Florida Legacy",num: 41383,date: new Date("2018-09-06T04:56:14.569Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24027,num: 989,date: new Date("2018-09-06T14:53:48.124Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24028,str: "Springs Tactics Web",num: 63808,date: new Date("2018-09-06T03:11:56.368Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 24029,str: "Lead",num: 18043,date: new Date("2018-09-05T21:52:27.043Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 24030,str: "Albania Consultant Wisconsin",num: 17287,date: new Date("2018-09-06T00:52:57.011Z"),array: ["transparent",2624,new Date("2018-09-06T08:03:30.565Z"),new Date("2018-09-06T05:40:34.919Z"),{_id: 24031,array: ["interface",[]],obj: {}},new Date("2018-09-05T23:59:06.812Z"),"wireless Devolved networks",94681,80220,97308,new Date("2018-09-05T22:13:40.393Z")]});
    },

    function(coll) {
        return coll.insert({_id: 24032,str: "cross-media 4th generation",num: 57814,date: new Date("2018-09-06T06:43:30.768Z"),array: [],obj: {_id: 24033,num: 73066,date: new Date("2018-09-06T00:04:25.902Z"),array: [{_id: 24034,str: "Applications Sleek extend",num: 92750,array: [new Date("2018-09-06T13:50:24.354Z"),new Date("2018-09-06T19:19:04.078Z"),85772]},new Date("2018-09-06T17:57:20.820Z"),"programming Keyboard","didactic Legacy Greece",32306,[],"New Mexico Car",16197]}});
    },

    function(coll) {
        return coll.insert({_id: 24035,str: "COM quantifying",num: 4053,date: new Date("2018-09-05T20:51:26.130Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24036,str: "Investor enable",num: 82394,date: new Date("2018-09-05T22:11:57.860Z"),array: [76982,65493,["back up","Baby",{_id: 24037,str: "Games granular zero defect",num: 47799,date: new Date("2018-09-06T11:39:56.084Z"),array: [new Date("2018-09-06T09:33:50.088Z")],obj: {}}],new Date("2018-09-06T10:21:38.284Z"),10817,new Date("2018-09-06T00:39:08.939Z"),[],40600,79138,new Date("2018-09-06T05:10:17.384Z"),"sensor",{_id: 24038,date: new Date("2018-09-06T16:37:27.700Z"),obj: {_id: 24039,obj: {_id: 24040,str: "programming",num: 80923,date: new Date("2018-09-05T20:05:02.914Z"),array: [],obj: {_id: 24041,str: "Kentucky",num: 94023,date: new Date("2018-09-06T12:00:12.834Z"),array: ["grey","open-source"]}}}},new Date("2018-09-06T05:44:09.928Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24042,str: "Multi-tiered Lari Hawaii",num: 5981,date: new Date("2018-09-06T16:02:52.683Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24043,str: "cultivate synthesize",num: 47185,date: new Date("2018-09-06T03:07:24.799Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24044,str: "withdrawal web-enabled",num: 48073,date: new Date("2018-09-06T17:44:11.765Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24045,str: "Home Bike input",num: 82268,date: new Date("2018-09-06T01:23:32.198Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24046,str: "bypass plug-and-play Auto Loan Account",num: 80058,date: new Date("2018-09-05T22:12:34.046Z"),array: [],obj: {_id: 24047,str: "Pula Botswana",num: 78977,date: new Date("2018-09-06T01:31:21.327Z"),array: [32896,new Date("2018-09-06T15:44:41.960Z"),[],"Rustic Wooden Ball withdrawal Malagasy Ariary",new Date("2018-09-06T07:02:11.564Z"),67220,{_id: 24048,num: 11266,obj: {_id: 24049,str: "expedite Function-based bus",date: new Date("2018-09-06T01:27:29.813Z"),array: [],obj: {}}},"invoice Computers","initiative",[[new Date("2018-09-06T05:53:42.031Z")],"Metal","Steel",91240],{_id: 24050,str: "Car synthesizing",array: [new Date("2018-09-06T02:24:39.382Z")],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24051,str: "benchmark fuchsia tangible",num: 47419,date: new Date("2018-09-06T16:40:28.504Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24052,str: "pixel markets Rubber",num: 53323,date: new Date("2018-09-06T19:35:52.775Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24053,str: "Granite Ethiopian Birr Glen",num: 54352,date: new Date("2018-09-05T20:20:06.857Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24054,str: "microchip Checking Account",num: 71939,date: new Date("2018-09-06T05:51:01.979Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24055,str: "digital",num: 15677,date: new Date("2018-09-06T03:32:21.200Z"),array: [],obj: {_id: 24056,str: "program integrated",num: 39968,date: new Date("2018-09-05T21:05:03.653Z"),array: ["Walk deposit Response",10872,"cyan Minnesota Generic Concrete Mouse",22062,new Date("2018-09-06T00:04:25.290Z"),27396,"vortals Personal Loan Account",new Date("2018-09-06T19:21:19.873Z"),[{_id: 24057,str: "cross-platform Delaware",num: 74583,date: new Date("2018-09-06T05:02:53.079Z"),obj: {}},51414,new Date("2018-09-05T21:04:49.928Z"),[{_id: 24058,num: 90538,array: [new Date("2018-09-05T23:53:38.022Z")],obj: {_id: 24059,str: "Small Concrete Soap Incredible Plastic Chair Division",num: 50199,array: [],obj: {_id: 24060,str: "Mauritius Rupee",date: new Date("2018-09-06T01:53:35.995Z"),obj: {}}}},{_id: 24061,num: 22331,date: new Date("2018-09-06T03:26:00.746Z"),array: []}],"Investment Account indexing",[],[new Date("2018-09-06T19:40:39.930Z")]],79232]}});
    },

    function(coll) {
        return coll.insert({_id: 24062,str: "Technician Checking Account Way",date: new Date("2018-09-06T14:48:08.650Z"),array: ["Boliviano Mvdol US Dollar",new Date("2018-09-06T07:41:03.729Z"),new Date("2018-09-06T19:17:45.080Z"),new Date("2018-09-06T13:32:01.669Z"),[],87652,36285,"24/7 calculating",[],[14308,{_id: 24063,str: "Ridges deposit visionary",num: 14554,array: [],obj: {}},23328,new Date("2018-09-05T21:56:18.534Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24064,str: "Bedfordshire green",num: 59354,array: [98479,52127,new Date("2018-09-06T07:34:35.400Z"),new Date("2018-09-06T02:20:50.166Z"),[],"Chief auxiliary","Republic of Korea redundant",79543,new Date("2018-09-06T12:13:56.853Z"),{_id: 24065,str: "Multi-channelled Barbados",num: 37389,date: new Date("2018-09-06T07:43:24.134Z"),array: [],obj: {}},new Date("2018-09-06T12:57:13.522Z"),"Interactions Missouri"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24066,num: 63362,date: new Date("2018-09-06T18:16:59.527Z")});
    },

    function(coll) {
        return coll.insert({_id: 24067,str: "Soft Automotive",num: 75393,date: new Date("2018-09-05T21:45:05.530Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24068,str: "Maryland Applications black",num: 79822,array: [1065,"grey back up","mint green seamless Cambridgeshire","black Fantastic Rubber Chicken",42712,56369,new Date("2018-09-06T12:07:31.835Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24069,str: "Home",num: 20034,date: new Date("2018-09-06T06:52:43.452Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 24070,num: 7149,date: new Date("2018-09-06T17:04:33.138Z"),array: [new Date("2018-09-06T09:32:40.460Z"),"index JSON Usability",new Date("2018-09-06T02:15:04.063Z"),13967,{_id: 24071,str: "Soap firewall",num: 96731,date: new Date("2018-09-06T05:56:50.771Z"),array: [],obj: {}},{_id: 24072,str: "benchmark Global",num: 94076,obj: {_id: 24073,str: "Incredible Steel Sausages bypassing",num: 8294,date: new Date("2018-09-06T15:30:52.318Z"),array: [94465],obj: {}}},{_id: 24074,str: "Handcrafted Rubber Towels Home Nevada",array: [],obj: {_id: 24075,num: 23287,date: new Date("2018-09-06T11:19:55.954Z")}},"wireless","bandwidth Nevada Rand Loti","framework",new Date("2018-09-06T07:35:00.443Z"),60536,new Date("2018-09-05T23:58:03.825Z"),{_id: 24076,str: "index Rustic calculating",date: new Date("2018-09-06T10:11:49.404Z"),obj: {_id: 24077,num: 9677,array: [[[[],"virtual optical Accountability",new Date("2018-09-06T03:36:47.146Z"),91576,73759]]],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 24078,num: 56937,date: new Date("2018-09-06T00:55:13.825Z"),array: ["panel neural SDD",{_id: 24079,str: "Checking Account Unbranded Inverse",date: new Date("2018-09-06T10:44:43.618Z"),array: [{_id: 24080,str: "wireless Auto Loan Account experiences",num: 95879,date: new Date("2018-09-06T05:26:51.179Z"),array: [],obj: {}}],obj: {_id: 24081,str: "deposit",num: 90357,date: new Date("2018-09-06T07:25:15.249Z")}},new Date("2018-09-06T03:40:53.903Z"),new Date("2018-09-06T16:45:47.826Z"),[],77230,24388,97034,[],"North Dakota","monetize","Intelligent parsing","incentivize Solutions Direct",new Date("2018-09-06T13:32:05.307Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24082,str: "Kids",num: 73841,date: new Date("2018-09-06T19:26:14.479Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24083,str: "Small Rubber Mouse",num: 28175,date: new Date("2018-09-06T06:20:08.856Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24084,str: "Savings Account Yemeni Rial",num: 81513,date: new Date("2018-09-06T10:10:58.927Z"),array: [],obj: {_id: 24085,str: "Operations",date: new Date("2018-09-06T08:53:03.618Z"),array: [new Date("2018-09-06T02:14:38.744Z"),35838,95724,84142,"Savings Account Right-sized",new Date("2018-09-06T01:28:46.164Z"),26539,"Hat","Soft",["1080p",new Date("2018-09-06T15:23:15.438Z"),new Date("2018-09-06T15:58:02.751Z"),{_id: 24086,num: 90453,date: new Date("2018-09-06T02:58:39.269Z"),array: [new Date("2018-09-05T20:56:43.237Z")],obj: {}},{_id: 24087,str: "ivory",num: 63817,date: new Date("2018-09-06T11:33:47.917Z"),array: [],obj: {_id: 24088,str: "capacitor Shoes",num: 48354,array: []}}],12959],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24089,str: "turquoise",date: new Date("2018-09-06T11:09:19.444Z"),array: ["scale",new Date("2018-09-06T05:53:13.122Z"),"relationships Grenada",new Date("2018-09-06T00:54:45.499Z"),58024,{_id: 24090,str: "HTTP input",num: 29606,date: new Date("2018-09-06T09:58:47.499Z"),array: [],obj: {}},39341,86695,"driver Lakes generate",{_id: 24091,str: "Missouri Plain",num: 11630,date: new Date("2018-09-06T00:13:22.287Z"),array: [new Date("2018-09-06T10:16:09.365Z"),["Senior turquoise index",new Date("2018-09-06T01:32:31.653Z")]],obj: {}},67179,new Date("2018-09-06T01:44:35.179Z"),[],74238],obj: {_id: 24092,num: 51916,obj: {_id: 24093,str: "Mobility",date: new Date("2018-09-06T15:17:55.206Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 24094,str: "Data",num: 22458,date: new Date("2018-09-06T05:55:47.658Z"),array: [],obj: {_id: 24095,str: "feed invoice Agent",num: 35232,date: new Date("2018-09-06T18:50:22.103Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 24096,str: "open-source conglomeration",num: 19994,date: new Date("2018-09-06T15:38:37.345Z"),array: [],obj: {_id: 24097,num: 99493,date: new Date("2018-09-06T17:35:30.947Z"),array: [],obj: {_id: 24098,str: "Forest paradigms withdrawal",obj: {_id: 24099,str: "artificial intelligence Specialist",num: 2201,date: new Date("2018-09-05T22:17:50.083Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 24100,str: "Expanded",num: 53917,date: new Date("2018-09-06T02:11:26.213Z"),array: [17185,4107,"eyeballs PNG",new Date("2018-09-06T12:10:45.400Z"),new Date("2018-09-05T20:28:46.608Z"),"Jewelery Soft Wells"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24101,str: "withdrawal parse",date: new Date("2018-09-06T17:49:16.405Z"),array: [new Date("2018-09-05T22:06:05.435Z"),74617,new Date("2018-09-06T08:43:48.578Z"),"transmit holistic Auto Loan Account","Music","brand circuit","seize",new Date("2018-09-06T12:47:17.172Z"),[],new Date("2018-09-06T08:41:52.081Z"),8955,53483],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24102,str: "Intelligent Cotton Shoes",num: 57130,date: new Date("2018-09-05T22:15:58.348Z"),array: [],obj: {_id: 24103,num: 43305,date: new Date("2018-09-05T20:34:34.891Z"),array: [51154,"SMS partnerships",new Date("2018-09-05T23:37:39.616Z"),"redundant","Soft Tactics",57456,new Date("2018-09-05T21:01:59.127Z"),17975,new Date("2018-09-06T08:43:59.376Z"),[new Date("2018-09-06T06:32:11.058Z"),92836],"Iceland Krona synthesize Consultant",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24104,str: "Key",num: 83080,date: new Date("2018-09-06T03:46:38.974Z"),array: [],obj: {_id: 24105,str: "Keyboard Chair Handmade",num: 38775,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24106,str: "tan Granite Soap",num: 29721,date: new Date("2018-09-06T06:11:11.501Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24107,str: "Indian Rupee Personal Loan Account Global",num: 77681,date: new Date("2018-09-05T20:15:38.953Z"),array: [],obj: {_id: 24108,str: "plum methodical Washington",num: 54809,array: [new Date("2018-09-05T23:58:38.281Z"),[new Date("2018-09-06T05:02:32.282Z"),40656],"repurpose National",36333,"feed",new Date("2018-09-06T10:39:53.488Z"),"hard drive Colombian Peso Unidad de Valor Real indexing",{_id: 24109,str: "FTP Handcrafted Cotton Pizza composite",array: [],obj: {_id: 24110,str: "redundant quantify",date: new Date("2018-09-06T06:21:06.101Z"),obj: {}}},new Date("2018-09-06T08:39:05.626Z"),[],{_id: 24111,str: "FTP Configurable index",num: 77443,date: new Date("2018-09-06T18:24:47.376Z"),array: [],obj: {}},"Cotton",[77422],35195]}});
    },

    function(coll) {
        return coll.insert({_id: 24112,str: "India Investment Account Keyboard",num: 6067,date: new Date("2018-09-06T05:44:22.423Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24113,num: 31942,date: new Date("2018-09-06T05:02:04.565Z"),array: [],obj: {_id: 24114,str: "withdrawal aggregate",num: 3473,date: new Date("2018-09-06T05:36:45.612Z"),array: [24102,"wireless synthesizing Puerto Rico",new Date("2018-09-06T16:55:13.103Z"),new Date("2018-09-06T13:01:10.415Z"),94327,21534,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24115,str: "Creative backing up Electronics",num: 6149,date: new Date("2018-09-06T00:25:28.486Z"),array: ["Shirt",59349,new Date("2018-09-06T04:10:06.904Z"),"infomediaries",[44328],42831,{_id: 24116,str: "Avon tangible",num: 29655,date: new Date("2018-09-05T22:56:46.931Z"),array: [],obj: {_id: 24117,str: "hack Managed Croatia",date: new Date("2018-09-06T10:46:12.233Z"),array: [],obj: {}}},new Date("2018-09-05T23:51:59.002Z"),78355,"Triple-buffered"],obj: {_id: 24118,str: "Hat Rustic Metal Bike mobile",num: 76105}});
    },

    function(coll) {
        return coll.insert({_id: 24119,num: 34009,date: new Date("2018-09-06T07:30:06.703Z"),array: [new Date("2018-09-06T02:00:02.981Z"),97387,new Date("2018-09-06T14:00:03.766Z"),89533,{_id: 24120,str: "Specialist framework navigate",num: 10010,date: new Date("2018-09-06T18:20:28.872Z"),obj: {_id: 24121,str: "Borders Wisconsin Small",num: 35391,date: new Date("2018-09-06T10:13:26.322Z"),array: [],obj: {}}},new Date("2018-09-05T23:04:09.647Z"),"Distributed conglomeration Producer","modular asynchronous",[],48960,new Date("2018-09-05T20:09:41.095Z"),{_id: 24122,str: "Visionary",date: new Date("2018-09-06T10:14:32.262Z"),array: ["Tasty Frozen Computer"],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24123,str: "Product core",num: 96706,date: new Date("2018-09-06T00:51:24.510Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24124,date: new Date("2018-09-06T16:19:29.419Z"),obj: {_id: 24125,str: "Practical Frozen Bike Credit Card Account",num: 25886,date: new Date("2018-09-05T20:32:25.193Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24126,str: "array embrace",num: 79630,date: new Date("2018-09-06T10:42:42.409Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24127,str: "FTP New Hampshire Buckinghamshire",num: 13268,date: new Date("2018-09-06T04:23:46.334Z"),array: [],obj: {_id: 24128,str: "Maldives Keyboard",num: 68754,date: new Date("2018-09-06T14:53:34.591Z"),array: [11458,"compress Planner",new Date("2018-09-06T03:35:16.189Z"),new Date("2018-09-06T16:19:31.193Z"),30746,"indexing capacitor Cross-platform",new Date("2018-09-06T13:17:12.855Z"),{_id: 24129,num: 83973,date: new Date("2018-09-06T15:34:17.773Z"),array: []},"Beauty",7276,{_id: 24130,str: "Buckinghamshire Fantastic protocol",num: 8633,date: new Date("2018-09-06T00:29:58.424Z"),obj: {}},new Date("2018-09-05T22:02:40.159Z"),"Afghani"]}});
    },

    function(coll) {
        return coll.insert({_id: 24131,str: "Applications Locks 1080p",num: 88978,date: new Date("2018-09-06T16:08:39.134Z"),array: ["invoice El Salvador Light",new Date("2018-09-06T16:40:24.832Z"),new Date("2018-09-05T20:13:30.433Z"),"system",28739,{_id: 24132,str: "Mall e-services",num: 27841,date: new Date("2018-09-06T06:53:28.057Z"),array: [],obj: {_id: 24133,str: "Refined payment Hat",num: 9001,date: new Date("2018-09-06T19:32:26.367Z"),obj: {}}},"asymmetric Strategist navigating",new Date("2018-09-06T14:23:18.966Z"),46628,new Date("2018-09-06T05:30:16.775Z"),"Generic Soft Small"],obj: {_id: 24134,str: "redundant Pass",array: [[new Date("2018-09-06T18:21:10.592Z")],99344,[88073,new Date("2018-09-06T18:51:51.649Z")],45654]}});
    },

    function(coll) {
        return coll.insert({_id: 24135,str: "orange Technician leading edge",num: 48961,date: new Date("2018-09-06T03:44:15.520Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24136,str: "intuitive Coordinator",num: 38767,array: [56284,[[],new Date("2018-09-06T02:34:18.078Z")],{_id: 24137,str: "Lead",num: 19268,date: new Date("2018-09-06T11:52:59.378Z"),array: [],obj: {_id: 24138,str: "US Dollar",num: 43433,date: new Date("2018-09-06T14:08:53.197Z"),array: ["Kina Concrete feed",90805],obj: {}}},new Date("2018-09-06T18:04:58.615Z"),31855,"Hat","payment",80658,[],new Date("2018-09-06T16:12:46.683Z"),"maximize Product",new Date("2018-09-06T12:08:21.375Z"),{_id: 24139,str: "regional syndicate",date: new Date("2018-09-06T04:22:27.898Z"),array: [],obj: {}},"Bedfordshire Steel"]});
    },

    function(coll) {
        return coll.insert({_id: 24140,str: "quantify Shirt",array: [],obj: {_id: 24141,str: "virtual THX",num: 63167,date: new Date("2018-09-06T16:07:31.885Z"),obj: {_id: 24142,num: 26976,date: new Date("2018-09-06T15:37:41.842Z"),array: [new Date("2018-09-06T16:06:48.720Z"),new Date("2018-09-06T18:13:03.561Z"),[],"Martinique Lao People's Democratic Republic Wyoming","Savings Account Credit Card Account",new Date("2018-09-06T01:44:33.438Z"),{_id: 24143,str: "optical responsive",date: new Date("2018-09-06T04:18:38.104Z"),obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 24144,str: "Practical Plastic Cheese teal generating",num: 742,date: new Date("2018-09-06T01:16:03.296Z"),array: ["Loaf",20196,50264,"Harbor hybrid","port",new Date("2018-09-06T12:07:31.311Z"),{_id: 24145,str: "Tasty Wooden Computer Lek needs-based",num: 46549,date: new Date("2018-09-06T11:54:54.081Z"),array: [],obj: {_id: 24146,str: "Awesome Wooden Fish",date: new Date("2018-09-06T01:10:40.721Z"),array: [{_id: 24147,str: "hack Applications installation",num: 56950,array: [[],new Date("2018-09-06T05:13:16.893Z")],obj: {_id: 24148,date: new Date("2018-09-06T00:48:17.536Z")}},96427]}},new Date("2018-09-06T16:05:21.301Z"),new Date("2018-09-06T08:01:19.655Z"),"fault-tolerant",new Date("2018-09-05T20:25:00.764Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24149,str: "Berkshire",num: 23377,date: new Date("2018-09-06T03:54:36.117Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24150,str: "non-volatile",num: 76878,date: new Date("2018-09-06T19:50:28.177Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24151,str: "Open-source enable",num: 40927,date: new Date("2018-09-05T20:28:39.484Z"),array: [new Date("2018-09-06T19:22:20.486Z"),"Rand program Quality-focused",new Date("2018-09-06T01:27:19.090Z"),58979,49749,"technologies array",new Date("2018-09-06T14:26:27.403Z"),"Salad back-end deposit",[]],obj: {_id: 24152,str: "bypass Consultant Handcrafted Wooden Car",num: 57416,date: new Date("2018-09-06T19:26:36.387Z"),array: [{_id: 24153,str: "yellow Developer",num: 21308,array: [43363,[],{_id: 24154,str: "Village",date: new Date("2018-09-06T12:00:35.288Z"),array: [],obj: {}},43538]},new Date("2018-09-06T01:17:16.399Z"),16956],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24155,str: "navigating Norfolk Island",num: 63889,date: new Date("2018-09-06T13:30:42.195Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24156,num: 13297,date: new Date("2018-09-06T04:52:44.518Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24157,str: "ivory",num: 61697,date: new Date("2018-09-06T11:33:13.703Z"),array: [new Date("2018-09-06T06:39:40.705Z"),33014,{_id: 24158,str: "Kentucky",date: new Date("2018-09-06T08:29:19.199Z"),array: [],obj: {_id: 24159,str: "synthesizing",num: 87619,date: new Date("2018-09-06T13:52:58.326Z"),array: []}},new Date("2018-09-06T16:55:41.018Z"),"payment Fresh RSS",14713,new Date("2018-09-06T07:45:49.443Z"),[57193],1153,new Date("2018-09-06T13:16:48.475Z"),{_id: 24160,str: "plum",num: 43675,obj: {_id: 24161,date: new Date("2018-09-06T12:58:21.788Z"),array: ["Surinam Dollar transition Incredible Fresh Salad","Gibraltar Small Rubber Cheese facilitate",new Date("2018-09-06T00:48:58.506Z")],obj: {}}},77336]});
    },

    function(coll) {
        return coll.insert({_id: 24162,str: "withdrawal",num: 775,date: new Date("2018-09-06T02:54:43.275Z"),obj: {_id: 24163,str: "Corporate B2C",date: new Date("2018-09-05T21:08:17.506Z"),array: [4649,new Date("2018-09-06T09:25:17.213Z"),"Fish Berkshire","Bedfordshire Kentucky Dale",new Date("2018-09-05T20:54:00.042Z"),55444,21798,79969,[],48792,"District"],obj: {_id: 24164,str: "Applications",num: 20731,date: new Date("2018-09-06T10:42:21.356Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 24165,str: "transmit",num: 47513,date: new Date("2018-09-05T20:39:43.481Z"),array: [],obj: {_id: 24166,num: 76997,array: [{_id: 24167,str: "compressing azure",num: 60448,date: new Date("2018-09-05T20:26:50.174Z"),array: [],obj: {}},new Date("2018-09-05T23:27:43.671Z"),27176,new Date("2018-09-05T21:23:19.526Z"),"exploit Svalbard & Jan Mayen Islands Lead",new Date("2018-09-06T08:45:23.311Z"),"Home Loan Account","Global",[],88508,new Date("2018-09-05T20:01:19.904Z"),new Date("2018-09-06T13:26:28.371Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 24168,str: "Savings Account Fish",num: 4321,date: new Date("2018-09-06T14:47:25.972Z"),array: [],obj: {_id: 24169,str: "Avon Visionary",num: 28741,date: new Date("2018-09-05T20:59:51.314Z"),array: ["paradigms Executive","Alabama Norway violet",new Date("2018-09-06T07:43:45.899Z"),new Date("2018-09-06T14:00:34.019Z"),new Date("2018-09-05T21:58:09.458Z"),47270,["AGP payment Tunisian Dinar","Legacy Handcrafted Wooden Bike",81262,new Date("2018-09-06T17:41:47.397Z"),10885],"Automotive 5th generation",{_id: 24170,str: "US Dollar",date: new Date("2018-09-06T05:29:03.943Z"),array: [],obj: {_id: 24171,num: 1964,date: new Date("2018-09-06T11:50:44.045Z"),array: [62207],obj: {}}},"Clothing",{_id: 24172,str: "Turkmenistan data-warehouse Plastic",array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24173,num: 34445,date: new Date("2018-09-06T10:52:51.509Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24174,str: "payment Bedfordshire",date: new Date("2018-09-05T21:16:44.571Z"),array: [[],"copying Unbranded B2B",37372,50806,new Date("2018-09-06T19:44:22.775Z"),83075,new Date("2018-09-06T05:58:18.635Z"),new Date("2018-09-06T13:13:30.195Z"),"Credit Card Account Cotton",[{_id: 24175,str: "Personal Loan Account",num: 80816,obj: {}},"maroon time-frame SMTP"],{_id: 24176,str: "Granite indexing",num: 60372,date: new Date("2018-09-06T17:02:58.871Z"),array: [],obj: {_id: 24177,str: "Soap",num: 22265,date: new Date("2018-09-06T08:07:52.922Z"),array: []}},"Checking Account Summit","Bedfordshire port"],obj: {_id: 24178,num: 85934,date: new Date("2018-09-06T18:14:31.605Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 24179,num: 42962,date: new Date("2018-09-06T18:47:36.215Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24180,str: "Shoes overriding",date: new Date("2018-09-06T10:49:21.474Z"),array: [],obj: {_id: 24181,num: 69458,date: new Date("2018-09-06T06:17:03.617Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24182,str: "lavender turquoise cross-media",date: new Date("2018-09-06T08:06:15.247Z"),array: ["calculating deposit Licensed",new Date("2018-09-06T11:21:46.662Z"),{_id: 24183,str: "Maine Savings Account",num: 60962,date: new Date("2018-09-05T20:53:50.144Z"),array: [],obj: {_id: 24184,str: "Supervisor Kroon Progressive",num: 10990,date: new Date("2018-09-06T02:38:22.875Z"),obj: {_id: 24185,num: 47391,date: new Date("2018-09-06T01:59:21.453Z"),array: []}}},99583,[],67572,new Date("2018-09-06T10:07:21.973Z"),{_id: 24186,str: "Group array"},"EXE",new Date("2018-09-06T03:39:54.100Z")],obj: {_id: 24187,num: 60087,date: new Date("2018-09-06T18:11:41.124Z"),array: [51165],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24188,str: "asynchronous payment schemas",num: 84995,date: new Date("2018-09-06T17:19:21.868Z"),array: [],obj: {_id: 24189,str: "teal Fish",num: 97930,date: new Date("2018-09-06T16:14:58.967Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24190,str: "cyan",num: 6515,date: new Date("2018-09-06T03:31:31.349Z"),array: [30781,"Facilitator navigating",[],{_id: 24191,num: 50994,date: new Date("2018-09-06T10:11:09.184Z"),array: [29278,"Tasty Rubber Chips RAM Togo","leverage Personal Loan Account toolset",60068,new Date("2018-09-06T02:30:09.756Z")],obj: {_id: 24192,num: 2622,date: new Date("2018-09-06T06:09:09.875Z"),array: [],obj: {_id: 24193,str: "bluetooth",obj: {}}}},"turquoise Director navigating","Cambridgeshire hack",{_id: 24194,str: "applications"},[],new Date("2018-09-06T01:55:29.377Z"),85682,new Date("2018-09-06T02:53:24.610Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24195,str: "Unbranded",num: 25985,date: new Date("2018-09-05T20:28:04.468Z"),array: [new Date("2018-09-06T12:10:28.143Z"),94585,86140,[],new Date("2018-09-06T08:45:59.913Z"),new Date("2018-09-05T22:34:14.567Z"),51272,[31162,"De-engineered",{_id: 24196,str: "Glens Norwegian Krone",num: 33768,date: new Date("2018-09-06T05:16:20.955Z"),array: [],obj: {}}],"Solutions","Licensed hack",{_id: 24197,str: "Architect",array: ["optical Team-oriented CFA Franc BCEAO",[36199,new Date("2018-09-06T10:00:57.406Z"),new Date("2018-09-05T20:40:48.782Z")]],obj: {_id: 24198,num: 96796,date: new Date("2018-09-06T02:13:38.698Z"),obj: {_id: 24199,str: "Quality Cheese Hat",num: 65283,array: []}}}],obj: {_id: 24200,num: 15212,date: new Date("2018-09-06T06:10:18.731Z"),array: [],obj: {_id: 24201,str: "withdrawal",num: 78646,date: new Date("2018-09-06T17:25:34.852Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 24202,num: 30700,date: new Date("2018-09-06T04:39:23.301Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24203,str: "transmitting payment",num: 9921,date: new Date("2018-09-06T06:57:05.067Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24204,num: 70676,date: new Date("2018-09-05T20:31:00.022Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24205,str: "Investor",date: new Date("2018-09-05T21:00:22.673Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24206,str: "azure Bike",num: 71699,date: new Date("2018-09-06T07:22:19.002Z"),array: ["parse Rustic Plastic Towels",new Date("2018-09-05T20:42:52.373Z"),59478,43034,"strategize open system Martinique",[40114],94871,{_id: 24207,num: 91824,date: new Date("2018-09-06T08:27:06.136Z"),obj: {}},new Date("2018-09-05T20:30:50.418Z"),71644,"PCI",new Date("2018-09-06T01:50:22.722Z"),"capacitor Papua New Guinea Sleek"],obj: {_id: 24208,str: "indexing",num: 42735,date: new Date("2018-09-06T05:35:16.198Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24209,str: "Uzbekistan",num: 3669,date: new Date("2018-09-06T14:25:25.721Z"),array: [{_id: 24210,str: "Architect index HTTP",num: 98874,date: new Date("2018-09-05T23:33:03.150Z"),array: []},92052,"Facilitator",[],new Date("2018-09-06T17:22:51.815Z"),"haptic systems Texas",new Date("2018-09-06T14:33:41.245Z"),new Date("2018-09-06T16:25:40.602Z"),{_id: 24211,str: "connect",num: 87859,array: [{_id: 24212,str: "Soft silver",num: 70356,array: [],obj: {_id: 24213,str: "Borders payment invoice",date: new Date("2018-09-06T00:36:20.670Z"),array: [new Date("2018-09-06T05:05:21.662Z"),"auxiliary"],obj: {_id: 24214,date: new Date("2018-09-06T02:29:17.322Z"),array: [],obj: {}}}},8981,"New Zealand Dollar plum"],obj: { _id: 24215 }},73921,{_id: 24216,str: "strategize",num: 69581,date: new Date("2018-09-06T16:49:31.574Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24217,str: "Mobility Product",num: 49221,array: [],obj: {_id: 24218,num: 50963,date: new Date("2018-09-06T18:33:00.979Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24219,str: "Product feed Jamaican Dollar",num: 83797,date: new Date("2018-09-06T09:27:56.026Z"),array: [79119,"Handmade Chicken",39524,6641,new Date("2018-09-06T15:47:10.880Z"),"Chile calculate cohesive",new Date("2018-09-06T05:27:34.869Z"),{_id: 24220,num: 40919,date: new Date("2018-09-06T13:23:44.974Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24221,str: "morph Ergonomic",num: 61425,array: [54745,47458,"application Cambridgeshire invoice",new Date("2018-09-06T14:17:24.366Z"),new Date("2018-09-05T23:23:30.243Z"),"parse payment Principal","real-time paradigms Fantastic",[],new Date("2018-09-05T22:46:05.777Z"),[],"algorithm Computers"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24222,str: "Green calculate capacity",num: 53664,date: new Date("2018-09-06T08:40:49.205Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24223,num: 253,date: new Date("2018-09-06T14:32:03.214Z"),obj: {_id: 24224,date: new Date("2018-09-06T05:43:30.567Z"),array: [new Date("2018-09-06T04:11:54.942Z"),"secondary transmitter",new Date("2018-09-05T21:55:30.973Z"),"Berkshire",5011,new Date("2018-09-06T05:50:00.008Z"),"Tools Ergonomic Fresh Towels"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24225,str: "Concrete",num: 37679,array: ["architectures capacity",new Date("2018-09-06T02:30:08.102Z"),70460,[],{_id: 24226,str: "Gorgeous paradigms United Arab Emirates",num: 31325,date: new Date("2018-09-06T15:26:39.674Z"),array: [new Date("2018-09-06T07:22:52.190Z")],obj: {_id: 24227,str: "Directives productivity Beauty",date: new Date("2018-09-06T07:21:18.587Z"),array: [],obj: {}}},48475,"matrices",49640,99092,new Date("2018-09-06T16:47:28.379Z"),76541,"turn-key bandwidth Plastic",new Date("2018-09-06T08:30:52.551Z"),new Date("2018-09-06T02:31:30.847Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24228,num: 8206,date: new Date("2018-09-05T22:13:03.430Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24229,str: "relationships",num: 36783,date: new Date("2018-09-05T22:53:15.720Z"),array: ["reinvent South Dakota","orange",new Date("2018-09-06T05:46:16.741Z"),new Date("2018-09-05T22:18:18.085Z"),{_id: 24230,date: new Date("2018-09-05T21:01:14.679Z"),array: [],obj: {_id: 24231,str: "SMS Checking Account",num: 28960,date: new Date("2018-09-06T10:01:55.779Z"),array: [],obj: {}}},27769,9530,"Diverse payment"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24232,str: "input",date: new Date("2018-09-05T22:41:55.537Z"),array: ["HDD",60757,new Date("2018-09-06T07:40:42.770Z"),new Date("2018-09-06T18:56:16.589Z"),{_id: 24233,str: "Enhanced Reactive",num: 3787,date: new Date("2018-09-06T10:13:27.467Z"),array: [],obj: {}},{_id: 24234,str: "Cambridgeshire",num: 10620,date: new Date("2018-09-06T13:25:34.654Z")},25270,"Personal Loan Account Customer Nuevo Sol",{_id: 24235,date: new Date("2018-09-06T14:32:21.215Z"),array: [],obj: {}},"bypassing","Extension Games",[new Date("2018-09-06T10:25:23.921Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24236,str: "Iraqi Dinar",num: 41413,date: new Date("2018-09-06T12:37:56.406Z"),obj: {_id: 24237,num: 5580,date: new Date("2018-09-06T05:37:20.491Z"),array: [],obj: {_id: 24238,str: "Taka Brunei Darussalam",num: 13414,date: new Date("2018-09-06T19:12:47.457Z"),array: ["Generic Fresh Keyboard Faroe Islands brand",30928,new Date("2018-09-05T22:52:46.360Z"),"back-end programming",[58706],new Date("2018-09-06T05:21:17.604Z"),[56983,new Date("2018-09-06T09:38:19.337Z"),{_id: 24239,str: "North Korean Won Ball",num: 43834,date: new Date("2018-09-05T20:32:33.335Z"),array: [],obj: {}}],"orchestration integrated New Caledonia",{_id: 24240,array: []},new Date("2018-09-06T14:49:04.931Z"),[],"Product Usability"],obj: {_id: 24241,str: "Wyoming Customer-focused moderator",num: 52836,date: new Date("2018-09-05T21:48:15.758Z"),array: ["Crescent District invoice"],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 24242,str: "Kids markets",date: new Date("2018-09-06T09:45:59.680Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24243,str: "Technician payment Soap",num: 56898,date: new Date("2018-09-06T16:30:40.299Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24244,str: "Outdoors",num: 97000,date: new Date("2018-09-06T03:57:25.262Z")});
    },

    function(coll) {
        return coll.insert({_id: 24245,str: "Sleek Steel Shirt Optimization Venezuela",num: 47920,date: new Date("2018-09-06T00:22:31.382Z"),array: [],obj: {_id: 24246,str: "bypassing",num: 82150,date: new Date("2018-09-05T21:00:10.799Z"),array: [new Date("2018-09-06T16:25:15.577Z"),40625,72226,"blue","engineer",new Date("2018-09-06T02:59:07.382Z"),"Berkshire",new Date("2018-09-06T12:20:20.941Z"),[],17681,6466,{_id: 24247,str: "Functionality",date: new Date("2018-09-05T20:28:53.401Z"),obj: {}},{_id: 24248,str: "Hawaii",num: 82219,array: [],obj: {}},"Steel","value-added Beauty workforce"]}});
    },

    function(coll) {
        return coll.insert({_id: 24249,str: "Sports",array: [56261,"Village Down-sized",new Date("2018-09-06T11:42:30.991Z"),[],1346,{_id: 24250,str: "Louisiana",num: 52487,date: new Date("2018-09-06T13:45:20.625Z"),array: [],obj: {}},"hybrid","generate web-readiness",12792,new Date("2018-09-06T13:40:30.179Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24251,str: "Seamless Won",num: 57670,date: new Date("2018-09-06T00:49:20.333Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24252,str: "Madagascar",date: new Date("2018-09-06T15:49:50.757Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24253,str: "haptic",num: 86050,date: new Date("2018-09-06T09:50:51.755Z"),array: [new Date("2018-09-05T21:52:10.114Z"),new Date("2018-09-06T05:34:19.941Z"),63699,"Borders deploy","Legacy Human",{_id: 24254,str: "turquoise",num: 20162,date: new Date("2018-09-06T10:59:47.098Z"),obj: {_id: 24255,str: "connect",num: 97623,date: new Date("2018-09-05T20:59:03.106Z"),array: [{_id: 24256,num: 65596,date: new Date("2018-09-05T19:55:50.970Z"),array: []}],obj: {}}},74766,54846,[],"Checking Account Movies",11309,8117,29382,"Incredible Integration"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24257,str: "technologies",date: new Date("2018-09-06T10:24:46.513Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24258,str: "Frozen feed",num: 52772,date: new Date("2018-09-05T22:48:48.348Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24259,num: 52304,date: new Date("2018-09-06T10:31:41.763Z"),array: [17161,new Date("2018-09-06T02:54:47.675Z"),"Front-line withdrawal Gorgeous",13476,{_id: 24260,str: "Cotton Ouguiya infrastructures",num: 13480,array: [],obj: {}},new Date("2018-09-06T09:28:08.029Z"),"Tonga Borders backing up",72932,{_id: 24261,str: "Configuration Graphic Interface",num: 15812,date: new Date("2018-09-06T16:05:40.534Z"),array: [new Date("2018-09-05T21:29:40.602Z"),[],"teal Kansas transmitter",new Date("2018-09-06T10:51:14.579Z")],obj: {_id: 24262,str: "Chips 5th generation Berkshire",num: 61259,date: new Date("2018-09-06T02:00:36.688Z"),obj: {}}},"productize Gardens"],obj: {_id: 24263,str: "Orchestrator parse New Hampshire",date: new Date("2018-09-06T11:21:27.199Z"),array: [[66438,{_id: 24264,str: "Optional Rubber encompassing",date: new Date("2018-09-06T12:26:42.206Z"),obj: {}}],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 24265,str: "AI Technician Chicken",num: 78927,date: new Date("2018-09-06T08:55:15.272Z"),array: [new Date("2018-09-06T12:01:35.185Z"),"National deposit El Salvador",new Date("2018-09-06T09:03:00.812Z"),31395,49929,new Date("2018-09-06T05:01:39.611Z"),"Switchable frictionless Synergized",49543,new Date("2018-09-06T14:49:00.949Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24266,str: "Supervisor Metal Practical Plastic Shoes",num: 58918,date: new Date("2018-09-06T00:50:29.369Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24267,str: "New Taiwan Dollar lavender American Samoa",num: 30114,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24268,str: "e-business",num: 76828,date: new Date("2018-09-06T03:44:00.817Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24269,str: "lime",num: 58925,date: new Date("2018-09-06T13:41:29.367Z"),array: [82289,82871,new Date("2018-09-06T13:27:31.324Z"),{_id: 24270,str: "encryption mint green Buckinghamshire",num: 82338,date: new Date("2018-09-05T22:18:28.362Z"),array: ["Checking Account"],obj: {_id: 24271,num: 76207,date: new Date("2018-09-06T00:21:04.115Z"),array: [],obj: {_id: 24272,str: "Markets",date: new Date("2018-09-06T06:30:31.873Z"),array: [new Date("2018-09-06T12:39:19.409Z")],obj: {}}}},{_id: 24273,num: 77700},[],"Strategist invoice Mouse","Soft Practical Frozen Table Bedfordshire",37943,20517,new Date("2018-09-06T10:17:48.753Z"),new Date("2018-09-06T17:05:59.957Z")]});
    },

    function(coll) {
        return coll.insert({_id: 24274,str: "Bacon Horizontal",date: new Date("2018-09-05T23:49:03.415Z"),array: [2346,new Date("2018-09-06T02:45:54.610Z"),"Puerto Rico Myanmar hacking","Bedfordshire empower calculate",63467,new Date("2018-09-05T20:51:26.460Z"),new Date("2018-09-06T13:46:19.741Z"),47985,"Tuna haptic",59783],obj: {_id: 24275,str: "granular deposit Ball",num: 77216,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24276,str: "tan Concrete",num: 56079,date: new Date("2018-09-05T21:45:09.879Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24277,num: 84167,date: new Date("2018-09-06T15:00:28.103Z"),array: [45209,"Accounts Money Market Account",new Date("2018-09-06T09:50:47.879Z"),new Date("2018-09-05T20:28:24.414Z"),[],{_id: 24278,str: "FTP",num: 45862,date: new Date("2018-09-06T04:48:33.330Z"),array: [],obj: {_id: 24279,str: "Personal Loan Account implement",num: 73859,date: new Date("2018-09-06T18:18:06.499Z"),array: [90020,new Date("2018-09-06T08:21:07.720Z")],obj: {}}},{_id: 24280,str: "world-class",array: ["program Research","THX Burkina Faso Berkshire",{_id: 24281,str: "vortals backing up invoice",num: 23502,obj: {_id: 24282,date: new Date("2018-09-06T18:54:45.963Z"),array: [88933,new Date("2018-09-06T06:29:02.151Z"),[]]}}],obj: {_id: 24283,num: 99825,date: new Date("2018-09-06T13:22:54.375Z")}},new Date("2018-09-06T09:44:13.866Z"),new Date("2018-09-06T01:29:07.507Z"),52037,"Lead morph",{_id: 24284,str: "Licensed Steel Chips",num: 46025,date: new Date("2018-09-06T18:45:54.901Z"),obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24285,str: "Rest Borders leverage",num: 93437,array: [88509,80940,"Open-architected metrics Rustic Soft Hat",{_id: 24286,str: "Florida payment",num: 68162,date: new Date("2018-09-06T18:21:00.779Z"),obj: {}},new Date("2018-09-06T16:41:44.150Z"),85186,"Vietnam Dynamic contingency","Investor synthesizing",new Date("2018-09-05T23:51:39.308Z"),[{_id: 24287,str: "Car",date: new Date("2018-09-06T10:02:23.113Z"),array: [],obj: {_id: 24288,str: "magenta Fresh",num: 17549,date: new Date("2018-09-06T11:31:26.496Z"),array: [[]],obj: {_id: 24289,date: new Date("2018-09-06T12:33:57.232Z")}}},20435,"Gloves","Tools orchestrate turn-key",new Date("2018-09-06T17:24:56.167Z"),72408]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24290,num: 90574,date: new Date("2018-09-06T12:02:22.905Z"),array: [new Date("2018-09-06T07:22:18.928Z"),[],new Date("2018-09-06T04:58:50.308Z"),"cross-platform Lead Chicken",57821,"navigate lime",new Date("2018-09-06T10:47:41.136Z"),84734,{_id: 24291,str: "Tasty Tactics e-business",num: 35863,date: new Date("2018-09-06T16:05:08.922Z"),array: [new Date("2018-09-06T03:17:20.553Z"),new Date("2018-09-06T18:45:50.943Z")],obj: {_id: 24292,num: 16712,date: new Date("2018-09-05T19:56:53.542Z"),obj: {_id: 24293,str: "digital Ball",array: [],obj: {_id: 24294,str: "Stand-alone Cotton Ergonomic Metal Bacon",date: new Date("2018-09-05T22:43:54.909Z"),array: [52962]}}}},65070,55247,{_id: 24295,str: "seamless",num: 33064,obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24296,str: "algorithm Mountains",num: 11281,date: new Date("2018-09-06T01:22:47.561Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 24297,str: "Toys",num: 61675,date: new Date("2018-09-06T04:27:39.998Z"),array: ["reintermediate Mouse Industrial",11797,new Date("2018-09-05T21:21:29.602Z"),"technologies real-time","incubate digital",new Date("2018-09-06T17:03:48.934Z"),{_id: 24298,str: "upward-trending",num: 98103,date: new Date("2018-09-06T10:07:45.781Z"),array: [],obj: {}},7114,new Date("2018-09-06T02:37:36.985Z"),[92057],[],{_id: 24299,str: "deliver Missouri human-resource",num: 11117,date: new Date("2018-09-06T04:41:38.386Z"),array: [],obj: {_id: 24300,str: "Port input Advanced",num: 24017,array: [13442]}}],obj: { _id: 24301 }});
    },

    function(coll) {
        return coll.insert({_id: 24302,str: "Alley",num: 17153,date: new Date("2018-09-06T09:26:39.394Z"),array: ["Handmade",new Date("2018-09-06T03:09:48.422Z"),new Date("2018-09-06T08:30:43.202Z"),"users CSS Sleek",{_id: 24303,str: "Pa'anga Fresh magnetic",num: 11633,date: new Date("2018-09-06T12:19:30.603Z"),array: [new Date("2018-09-05T22:26:33.370Z"),[],9893,41458,{_id: 24304,num: 95646,date: new Date("2018-09-06T03:57:02.834Z"),array: [["website Checking Account Managed",88265,83120]],obj: {_id: 24305,str: "Group",num: 1066,array: [],obj: {}}},new Date("2018-09-06T17:20:33.636Z")],obj: {_id: 24306,str: "auxiliary model Toys",date: new Date("2018-09-05T20:26:24.315Z"),obj: {}}},new Date("2018-09-05T21:38:47.036Z"),{_id: 24307,str: "Graphical User Interface",date: new Date("2018-09-06T13:12:26.164Z")},[],"Borders Accountability"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24308,str: "Dynamic",num: 76525,date: new Date("2018-09-06T02:19:15.924Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24309,str: "bandwidth",num: 77294,date: new Date("2018-09-06T12:50:40.564Z"),array: [],obj: {_id: 24310,num: 63574,date: new Date("2018-09-05T23:50:09.137Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24311,str: "Missouri 24/7",num: 3364,date: new Date("2018-09-05T23:18:17.389Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24312,str: "models",num: 10653,date: new Date("2018-09-06T12:55:17.307Z"),array: [new Date("2018-09-06T00:21:40.534Z"),"Savings Account Soap withdrawal",new Date("2018-09-06T11:59:55.254Z"),"transmit e-tailers",47194,[56314,new Date("2018-09-06T08:49:35.830Z"),[{_id: 24313,str: "Mobility",array: [],obj: {_id: 24314,num: 12775,date: new Date("2018-09-06T14:25:03.140Z"),array: ["4th generation",{_id: 24315,str: "Branding withdrawal",num: 9788,date: new Date("2018-09-06T13:45:47.232Z"),array: [],obj: {}},"Web intranet",63863],obj: {}}},35064]],new Date("2018-09-06T10:22:40.486Z"),21890,"Liechtenstein Tasty Shoes",new Date("2018-09-06T00:53:09.523Z"),"synergy Handmade"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24316,str: "alarm Practical",num: 77324,date: new Date("2018-09-06T02:29:09.157Z"),array: [],obj: {_id: 24317,str: "Small Frozen Keyboard",date: new Date("2018-09-06T15:59:21.046Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24318,num: 8683,date: new Date("2018-09-05T22:21:27.261Z"),array: [{_id: 24319,str: "Washington Skyway",num: 12229,date: new Date("2018-09-06T02:43:56.078Z"),array: [],obj: {}},new Date("2018-09-05T23:31:24.638Z"),"Small Soft Fish Applications Berkshire",39117,new Date("2018-09-06T14:03:18.112Z"),"Networked",new Date("2018-09-06T19:21:01.984Z"),{_id: 24320,str: "Indian Rupee Avon Home",date: new Date("2018-09-06T06:09:59.045Z"),array: [43704,"Singapore Dollar"],obj: {_id: 24321,str: "Tennessee Steel Jersey",num: 61611,date: new Date("2018-09-06T11:29:37.804Z")}},new Date("2018-09-05T23:09:54.731Z"),52262,"Stand-alone New Mexico",[[],"Engineer Unbranded brand"],43521],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24322,str: "compressing Suriname",num: 51555,date: new Date("2018-09-06T08:24:42.502Z"),obj: {_id: 24323,str: "Architect Health Supervisor",num: 39990,date: new Date("2018-09-06T12:33:43.950Z"),array: [],obj: {_id: 24324,str: "transmit standardization Assistant",num: 31005,date: new Date("2018-09-06T10:28:02.395Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 24325,str: "Practical Tools",num: 83037,date: new Date("2018-09-06T06:34:01.981Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24326,str: "EXE Pakistan",num: 84457,array: [[new Date("2018-09-06T06:15:41.853Z"),"Intranet"],56396,44610,"Directives functionalities",{_id: 24327,str: "tan",num: 47005,date: new Date("2018-09-06T01:37:21.314Z"),obj: {}},new Date("2018-09-05T23:32:19.897Z"),[],"SQL Generic Costa Rican Colon",86333,{_id: 24328,str: "deposit Facilitator Refined Fresh Car",num: 46906,date: new Date("2018-09-06T10:26:43.643Z"),array: [],obj: {_id: 24329,str: "Generic Cotton Table Unbranded invoice",date: new Date("2018-09-06T06:12:21.281Z"),array: [new Date("2018-09-06T07:20:41.948Z")]}},50223,[],55479],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24330,str: "Practical Cotton Pants HTTP",num: 96398,date: new Date("2018-09-06T16:11:38.939Z"),array: [98219,"eyeballs Fish Oklahoma",61633,24610,[],[new Date("2018-09-06T03:48:26.869Z")],new Date("2018-09-06T02:35:59.304Z"),new Date("2018-09-06T10:45:07.295Z"),33874,new Date("2018-09-06T19:18:11.317Z"),{_id: 24331,str: "Indiana eyeballs 24/7",num: 39671,date: new Date("2018-09-06T16:28:58.854Z"),obj: {}},{_id: 24332,num: 22716,date: new Date("2018-09-06T12:18:43.329Z"),array: [],obj: {_id: 24333,str: "Cotton reboot",array: [],obj: {_id: 24334,num: 408,date: new Date("2018-09-05T21:05:38.653Z"),array: ["sensor","tan Central Architect",33247],obj: {}}}},"frame"]});
    },

    function(coll) {
        return coll.insert({_id: 24335,str: "deliverables explicit Pike",num: 15345,date: new Date("2018-09-06T03:58:41.914Z"),array: [new Date("2018-09-05T23:00:11.722Z"),"productize",20746,"Dynamic","mission-critical RSS AI",83021,[],[96306,{_id: 24336,date: new Date("2018-09-06T15:39:51.433Z"),array: [new Date("2018-09-05T21:20:50.548Z")],obj: {}},new Date("2018-09-06T09:10:29.602Z")],[7350],"sky blue Human",new Date("2018-09-06T05:14:20.849Z")],obj: {_id: 24337,str: "California Jewelery",num: 82730,date: new Date("2018-09-06T05:15:51.341Z")}});
    },

    function(coll) {
        return coll.insert({_id: 24338,str: "Small Solomon Islands",num: 80798,obj: {_id: 24339,str: "morph connecting Streamlined",date: new Date("2018-09-06T05:10:18.787Z"),array: ["Minnesota",77108,[],new Date("2018-09-06T08:04:15.246Z"),new Date("2018-09-06T13:06:38.588Z"),"generate",{_id: 24340,num: 66174,date: new Date("2018-09-05T23:01:22.272Z"),array: [],obj: {_id: 24341,str: "Saint Helena Pound Business-focused benchmark",num: 95901,date: new Date("2018-09-06T00:24:36.536Z"),array: [75153,70195],obj: {}}},new Date("2018-09-06T12:09:36.065Z"),{_id: 24342,str: "Architect"},["Square Cambridgeshire",[]],71167,87854],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24343,str: "user-facing Credit Card Account Factors",num: 88447,date: new Date("2018-09-06T04:33:40.771Z"),array: [],obj: {_id: 24344,str: "Money Market Account interfaces interface",num: 75957,array: [[],new Date("2018-09-06T06:51:20.073Z"),{_id: 24345,num: 37279,array: [16290],obj: {}},new Date("2018-09-06T19:24:52.654Z"),"green French Southern Territories",new Date("2018-09-06T16:10:17.438Z"),16353,"Team-oriented Division",new Date("2018-09-06T02:45:03.282Z"),"IB",46961,"Rustic tangible",41540,"1080p Towels"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24346,str: "tan Identity",num: 26428,date: new Date("2018-09-05T21:48:18.045Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24347,str: "24/7",num: 47797,array: [new Date("2018-09-06T04:48:20.655Z"),88707,7728,new Date("2018-09-06T19:13:44.895Z"),"Shoals Fully-configurable International",new Date("2018-09-05T22:34:36.638Z"),"synthesize Engineer Licensed Metal Tuna",[{_id: 24348,str: "Supervisor Legacy",num: 429,date: new Date("2018-09-06T10:15:20.212Z"),array: [],obj: {}}],"Bedfordshire Drive Grocery",{_id: 24349,num: 88538,date: new Date("2018-09-05T23:07:28.441Z"),array: [],obj: {}},new Date("2018-09-06T17:50:20.761Z"),92769,76453,new Date("2018-09-06T19:23:01.146Z")],obj: {_id: 24350,str: "Chief",date: new Date("2018-09-06T17:39:49.322Z"),array: [[[]],{_id: 24351,str: "Computer transparent Officer",num: 63212,array: [],obj: {_id: 24352,date: new Date("2018-09-06T07:21:36.574Z"),obj: {_id: 24353,str: "grey expedite deliver",num: 86237}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 24354,str: "Frozen synergies Louisiana",num: 23826,date: new Date("2018-09-06T03:01:59.650Z"),array: [15502,"calculate",new Date("2018-09-06T08:10:51.520Z"),[],54996,"Berkshire primary",94158,new Date("2018-09-06T03:12:21.151Z"),new Date("2018-09-06T18:38:35.238Z"),{_id: 24355,str: "Practical Awesome invoice",num: 91744,date: new Date("2018-09-06T16:39:56.187Z"),array: [],obj: {_id: 24356,str: "deposit enterprise Plastic",num: 52535,date: new Date("2018-09-06T11:33:47.555Z"),array: [],obj: {_id: 24357,str: "interface Inverse",num: 40223,obj: {_id: 24358,str: "Bypass mesh",date: new Date("2018-09-06T04:26:32.836Z"),array: [new Date("2018-09-06T00:21:07.533Z")],obj: {}}}}},{_id: 24359,num: 81510,array: ["Tennessee application connecting","lavender","Kids Tasty Granite Bike turquoise"]},85140,[],new Date("2018-09-06T18:30:28.170Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24360,str: "Wyoming New Mexico maximized",num: 77024,date: new Date("2018-09-06T17:51:17.335Z"),array: [50443,new Date("2018-09-06T10:12:43.099Z"),"compress","Hat",8444,96213,"Unions circuit white",new Date("2018-09-05T20:07:18.853Z"),{_id: 24361,str: "tertiary",num: 2187,date: new Date("2018-09-05T22:07:00.389Z"),array: ["harness Alaska",92839,new Date("2018-09-06T05:33:21.835Z"),{_id: 24362,num: 94642,date: new Date("2018-09-05T22:51:43.160Z"),array: [],obj: {_id: 24363,str: "Gorgeous Frozen Shoes collaborative",num: 59660,obj: {_id: 24364,str: "back-end"}}},new Date("2018-09-06T15:27:36.847Z"),[35262]],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24365,str: "out-of-the-box Bacon",num: 83183,date: new Date("2018-09-06T06:26:59.431Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24366,str: "Ergonomic Metal Shoes Concrete",num: 84885,date: new Date("2018-09-06T00:08:01.180Z"),array: ["action-items enable Interactions","deposit","generate Auto Loan Account Home Loan Account",96343,{_id: 24367,num: 41708,date: new Date("2018-09-05T20:20:26.917Z"),obj: {_id: 24368,str: "Metal Human invoice",num: 38012,date: new Date("2018-09-06T05:12:12.098Z"),array: [],obj: {}}},8540,[],93217,"Investor Generic Wooden Car backing up",new Date("2018-09-06T16:49:27.434Z"),[new Date("2018-09-06T08:05:19.727Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24369,str: "Pizza Personal Loan Account",num: 27955,date: new Date("2018-09-06T00:59:48.523Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24370,str: "Representative Grocery",num: 33951,date: new Date("2018-09-06T11:47:37.428Z"),array: [],obj: {_id: 24371,str: "Cotton Auto Loan Account Fresh",date: new Date("2018-09-06T19:51:31.664Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 24372,num: 64011,date: new Date("2018-09-06T15:05:23.422Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24373,str: "Table",num: 86077,date: new Date("2018-09-06T05:22:34.940Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 24374,str: "Algeria",num: 91104,array: [81859,new Date("2018-09-06T14:28:35.172Z"),new Date("2018-09-05T23:25:26.657Z"),10447,"User-friendly","Tala CFA Franc BCEAO transmit",51979,95265,"secured line multi-byte Cambridgeshire",[],"Personal Loan Account expedite",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24375,str: "Personal Loan Account Sleek brand",num: 11689,date: new Date("2018-09-06T19:33:17.388Z"),array: ["Palladium EXE",[86242,[],new Date("2018-09-05T22:28:34.952Z"),"Devolved olive synthesize","Pre-emptive payment Interactions"],"Granite Legacy SSL",new Date("2018-09-06T01:16:00.588Z"),[],79445,"Fish",new Date("2018-09-06T16:58:02.315Z")],obj: {_id: 24376,str: "deliver heuristic",num: 79209,date: new Date("2018-09-06T08:11:02.311Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24377,str: "payment",num: 68682,date: new Date("2018-09-06T17:26:20.124Z"),array: [new Date("2018-09-06T08:44:58.065Z"),"Producer",20858,44165,"scale Chief",new Date("2018-09-06T14:59:39.144Z"),new Date("2018-09-06T15:37:23.593Z"),14460,[],14736,new Date("2018-09-06T08:12:32.725Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24378,str: "Congo",num: 81518,date: new Date("2018-09-06T05:02:30.996Z"),array: [],obj: {_id: 24379,str: "Internal invoice National",num: 6442,date: new Date("2018-09-06T18:55:30.979Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24380,str: "Guinea Credit Card Account",num: 71686,date: new Date("2018-09-06T09:32:43.157Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24381,str: "wireless turn-key Computers",num: 11305,date: new Date("2018-09-05T22:27:27.094Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24382,str: "innovative",array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24383,str: "back-end Strategist",num: 86779,date: new Date("2018-09-06T13:55:01.116Z"),array: [],obj: {_id: 24384,str: "Organized",num: 54933,date: new Date("2018-09-06T05:40:44.766Z"),array: [[new Date("2018-09-06T10:22:40.278Z")],49846,"Licensed Concrete Car impactful",new Date("2018-09-06T16:17:23.650Z"),new Date("2018-09-06T01:45:00.854Z"),"Causeway Future","Technician EXE",{_id: 24385,str: "Licensed Plastic Computer Division",date: new Date("2018-09-06T05:50:32.807Z"),array: [81279,{_id: 24386,str: "salmon technologies",num: 68974,date: new Date("2018-09-06T03:18:42.024Z"),array: [],obj: {}},{_id: 24387,str: "experiences plum Dynamic",num: 33622,obj: {_id: 24388,date: new Date("2018-09-05T21:34:02.201Z"),obj: {_id: 24389,str: "UIC-Franc transmitting",num: 88177,date: new Date("2018-09-06T17:43:09.713Z")}}}],obj: {}},3245,"Auto Loan Account invoice","mobile index",new Date("2018-09-06T01:14:13.098Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24390,str: "Cuban Peso Peso Convertible Outdoors",num: 31623,date: new Date("2018-09-06T16:55:30.621Z"),array: ["functionalities Toys Convertible Marks",218,14480,"Music eco-centric programming",new Date("2018-09-06T06:52:18.834Z"),new Date("2018-09-06T00:12:04.476Z"),"eyeballs transmit",11428,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24391,str: "Paradigm",num: 11049,date: new Date("2018-09-05T21:12:03.159Z"),obj: {_id: 24392,str: "Frozen Gorgeous Fresh",date: new Date("2018-09-06T01:08:40.370Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24393,str: "solutions",date: new Date("2018-09-05T20:50:40.107Z"),array: [],obj: {_id: 24394,num: 8541,date: new Date("2018-09-06T00:15:45.386Z"),array: [],obj: {_id: 24395,str: "Awesome Frozen Sausages knowledge user",num: 57776,date: new Date("2018-09-06T12:06:18.457Z"),array: ["Beauty Wyoming",3594,"Borders Specialist",48046,new Date("2018-09-06T10:47:12.336Z"),38062,{_id: 24396,str: "Australia Architect",num: 34976,array: [[new Date("2018-09-06T10:21:54.133Z")],[]],obj: {}},"Computer Handmade Granite Shirt Granite",14696,{_id: 24397,str: "project",num: 91828,date: new Date("2018-09-06T08:50:38.765Z"),array: [],obj: {}},new Date("2018-09-06T16:19:25.976Z"),{ _id: 24398 },new Date("2018-09-06T17:45:11.678Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 24399,str: "e-services",num: 34085,date: new Date("2018-09-06T00:31:15.480Z"),array: [66263,"Steel",17813,new Date("2018-09-06T13:17:58.030Z"),{_id: 24400,str: "Games markets",num: 7647,date: new Date("2018-09-06T06:39:32.264Z"),obj: {}},new Date("2018-09-06T08:53:17.051Z"),"Gorgeous indexing","Regional",new Date("2018-09-05T23:45:12.552Z"),"Global bus",85205,new Date("2018-09-06T18:19:09.410Z"),[],{_id: 24401,str: "one-to-one",num: 68354,array: [[]],obj: {_id: 24402,str: "Tunisian Dinar drive Berkshire",num: 92816,date: new Date("2018-09-06T13:23:51.579Z"),array: [],obj: {_id: 24403,date: new Date("2018-09-06T00:56:01.225Z"),array: [],obj: {_id: 24404,num: 99099,array: [new Date("2018-09-06T19:54:38.290Z")],obj: {_id: 24405,str: "Sausages Cambridgeshire Computers",date: new Date("2018-09-06T06:26:12.449Z")}}}}},33038]});
    },

    function(coll) {
        return coll.insert({_id: 24406,str: "quantify Public-key",num: 19702,array: [37690,64210,92537,66850,"Rhode Island payment Bedfordshire",new Date("2018-09-06T05:02:10.657Z"),"Avon",{_id: 24407,str: "Personal Loan Account demand-driven",num: 90375,date: new Date("2018-09-06T09:35:25.694Z"),array: [[],new Date("2018-09-06T10:51:37.089Z"),new Date("2018-09-06T12:18:04.583Z"),73230],obj: {}},"CSS Organic maximized",new Date("2018-09-05T21:42:04.701Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24408,str: "Soft",num: 66402,date: new Date("2018-09-06T14:57:49.251Z"),array: [13995,69339,[],{_id: 24409,str: "Cameroon European Unit of Account 17(E.U.A.-17)",num: 94927,date: new Date("2018-09-06T07:40:38.037Z"),array: ["Wooden Bike",[]],obj: {}},{_id: 24410,num: 27862,date: new Date("2018-09-06T10:38:49.013Z"),array: [],obj: {}},new Date("2018-09-05T23:21:14.021Z"),"monitor deposit","back up Money Market Account Cloned",24761,new Date("2018-09-06T10:58:25.434Z"),85711]});
    },

    function(coll) {
        return coll.insert({_id: 24411,str: "Cambridgeshire haptic",num: 82950,date: new Date("2018-09-06T12:41:35.747Z"),array: [[3388,new Date("2018-09-05T23:32:43.544Z")],"COM Incredible",{_id: 24412,str: "Iowa bypass",num: 94167,array: [],obj: {_id: 24413,str: "Liaison",num: 63627,date: new Date("2018-09-06T11:11:37.991Z"),array: [],obj: {_id: 24414,str: "payment",num: 79808,date: new Date("2018-09-06T03:08:38.273Z"),array: [[],new Date("2018-09-06T18:04:41.949Z")]}}},"Hawaii Buckinghamshire","lavender Administrator Configuration",85328,new Date("2018-09-06T10:57:27.138Z"),"architectures",{_id: 24415,date: new Date("2018-09-06T02:36:06.484Z"),obj: {}},57019,{_id: 24416,str: "connect Auto Loan Account",num: 30909},"Cambridgeshire Bahamas"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24417,str: "Bedfordshire Planner",num: 48685,date: new Date("2018-09-06T11:57:10.238Z"),array: ["port Computer",89576],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24418,str: "Kentucky Credit Card Account Chips",num: 31336,date: new Date("2018-09-06T18:28:20.322Z"),array: [73017,"National Street Directives",new Date("2018-09-05T21:46:56.979Z"),[],"leverage","Credit Card Account",{_id: 24419,str: "users Engineer",num: 15185,date: new Date("2018-09-06T19:17:43.035Z"),array: [new Date("2018-09-06T01:07:35.699Z"),90722],obj: {}},{_id: 24420,str: "wireless wireless",num: 59410,date: new Date("2018-09-05T21:06:57.388Z"),array: [],obj: {_id: 24421,num: 80797,array: [new Date("2018-09-06T01:28:34.022Z"),43262],obj: {}}},[],24255,88342],obj: {_id: 24422,str: "online intermediate Jewelery",date: new Date("2018-09-06T18:43:49.085Z")}});
    },

    function(coll) {
        return coll.insert({_id: 24423,str: "online whiteboard Latvian Lats",num: 29488,date: new Date("2018-09-06T03:47:30.876Z"),array: [new Date("2018-09-06T03:04:02.783Z"),[],new Date("2018-09-06T07:24:32.411Z"),new Date("2018-09-05T22:46:31.287Z"),24088,[],"intuitive",71632,new Date("2018-09-06T08:25:44.284Z"),"Fresh bi-directional compressing","Gorgeous Wooden Soap",{_id: 24424,str: "Intelligent Gourde US Dollar composite",num: 32977,date: new Date("2018-09-06T14:41:23.688Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24425,str: "Lead",num: 42810,date: new Date("2018-09-06T01:33:50.352Z"),array: ["Unbranded Metal Gloves ADP",new Date("2018-09-06T02:21:06.663Z"),"cyan",new Date("2018-09-06T02:54:53.776Z"),"next-generation Corporate",58010,new Date("2018-09-06T16:30:10.518Z"),79197,[]],obj: {_id: 24426,num: 74040,date: new Date("2018-09-06T01:59:34.262Z"),array: [64950,"Quality-focused North Dakota",[86182],[],{_id: 24427,str: "Silver",num: 86536,array: [],obj: {}},new Date("2018-09-06T13:27:38.776Z"),"Chicken"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24428,str: "Borders Personal Loan Account Haiti",num: 53071,date: new Date("2018-09-06T07:39:30.077Z"),array: ["Qatari Rial web-enabled",new Date("2018-09-05T20:06:17.673Z"),{_id: 24429,str: "Frozen District orange",date: new Date("2018-09-05T20:52:10.582Z"),array: [new Date("2018-09-06T02:59:01.618Z")],obj: {_id: 24430,str: "Auto Loan Account Developer",num: 39416,date: new Date("2018-09-06T17:24:57.406Z"),array: [],obj: {}}},27363,[],"Tools",{_id: 24431,num: 53589,date: new Date("2018-09-05T21:57:48.238Z"),obj: {_id: 24432,str: "programming",num: 17590}},[],new Date("2018-09-06T14:11:55.647Z"),83216,new Date("2018-09-06T14:32:26.628Z"),{_id: 24433,str: "Profound",array: ["Home Loan Account Executive monitor"],obj: {}},"Incredible Mouse Clothing",9228,"hacking"]});
    },

    function(coll) {
        return coll.insert({_id: 24434,str: "invoice Accountability",num: 61047,date: new Date("2018-09-06T11:35:42.374Z"),array: ["Investment Account Refined olive",{_id: 24435,num: 84887,date: new Date("2018-09-06T15:52:29.387Z")},12010,1576,new Date("2018-09-06T09:36:23.586Z"),56229,new Date("2018-09-06T16:46:17.502Z"),"Corporate HTTP Agent",new Date("2018-09-06T08:51:18.493Z"),new Date("2018-09-05T23:25:34.143Z"),[new Date("2018-09-06T10:53:21.199Z"),7344,"Summit Frozen"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24436,str: "Home Loan Account communities",num: 9518,date: new Date("2018-09-06T18:17:32.224Z"),array: [new Date("2018-09-06T04:14:01.200Z"),"Loop Intelligent",21006,"Coves Shoes",[],14424,"Gold synthesizing Agent",{_id: 24437,str: "paradigms Concrete Human",date: new Date("2018-09-05T23:21:27.894Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 24438,str: "frictionless New Leu Handcrafted Frozen Pants",num: 60086,date: new Date("2018-09-05T23:31:24.873Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24439,str: "systems Table bypass",num: 72918,date: new Date("2018-09-06T04:48:42.303Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24440,str: "Soft morph Concrete",num: 35994,array: [new Date("2018-09-06T04:35:45.179Z"),"bluetooth Agent Washington",[],{_id: 24441,str: "Generic knowledge base",date: new Date("2018-09-06T04:38:30.448Z"),array: [26675,"Concrete Vision-oriented capacitor",new Date("2018-09-06T02:10:13.963Z"),[]]},23729,"programming",78258,"Nevada Tenge",[]],obj: {_id: 24442,str: "monitoring Branding",num: 71682,date: new Date("2018-09-06T15:35:38.875Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24443,str: "Maryland bypass",num: 31469,array: [{_id: 24444,str: "Rustic Granite",date: new Date("2018-09-05T23:07:27.974Z"),obj: {_id: 24445,num: 6475,date: new Date("2018-09-05T23:43:24.401Z"),array: [],obj: {}}},"dynamic Officer projection","Vermont",new Date("2018-09-06T11:09:00.359Z"),"South Dakota Small Granite Sausages",29626,[],new Date("2018-09-06T06:26:26.436Z"),new Date("2018-09-06T16:15:20.914Z"),56347,{_id: 24446,num: 8264,date: new Date("2018-09-06T13:36:32.410Z"),array: [new Date("2018-09-06T15:06:16.002Z"),new Date("2018-09-05T22:57:33.741Z"),[],68603,{_id: 24447,num: 70062,array: [89936,69077]}],obj: {}}],obj: {_id: 24448,str: "Cotton New Jersey navigating",date: new Date("2018-09-06T19:29:17.675Z"),obj: {_id: 24449,str: "B2B port El Salvador",num: 45189,array: [{_id: 24450,str: "THX Fresh",array: []}],obj: {_id: 24451,str: "Ohio",date: new Date("2018-09-06T18:54:45.944Z"),array: [[],[44568]]}}}});
    },

    function(coll) {
        return coll.insert({_id: 24452,num: 47930,date: new Date("2018-09-06T16:02:28.600Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24453,str: "Bedfordshire",num: 30570,date: new Date("2018-09-06T15:33:12.256Z"),array: [78606,new Date("2018-09-06T04:33:41.977Z"),"Communications",new Date("2018-09-06T05:04:48.009Z"),new Date("2018-09-05T22:14:06.324Z"),"Cambridgeshire Automotive Fantastic","Money Market Account driver Wooden",new Date("2018-09-06T11:12:29.685Z"),{_id: 24454,str: "networks",num: 40992,date: new Date("2018-09-06T06:40:01.802Z"),obj: {_id: 24455,str: "Tunnel Business-focused task-force",num: 68380,date: new Date("2018-09-06T00:36:13.505Z"),array: [],obj: {_id: 24456,str: "Diverse Bike",num: 15753,date: new Date("2018-09-06T02:23:18.141Z"),array: []}}},"Liaison Producer"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24457,str: "circuit Generic",num: 59387,date: new Date("2018-09-06T12:17:19.218Z"),array: [{_id: 24458,str: "XSS Mobility",num: 94865,date: new Date("2018-09-06T16:44:18.834Z"),array: [],obj: {_id: 24459,str: "navigate customized",num: 20379,date: new Date("2018-09-06T02:15:48.481Z"),array: [new Date("2018-09-06T14:37:03.284Z"),"Lead invoice Berkshire"],obj: {}}},"incentivize Group e-commerce",57474,new Date("2018-09-05T23:19:27.445Z"),91555,58104,[],"card Money Market Account",new Date("2018-09-06T01:36:23.742Z"),[],"Baby Data",{_id: 24460,str: "Rustic",num: 38303,date: new Date("2018-09-06T00:05:14.055Z"),obj: {_id: 24461,num: 49054,date: new Date("2018-09-05T22:17:18.900Z"),array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24462,str: "Awesome Sharable Home Loan Account",num: 75031,date: new Date("2018-09-06T07:02:45.153Z"),array: [{_id: 24463,str: "Concrete Sleek",num: 96905,array: [],obj: {}},new Date("2018-09-06T09:54:47.443Z"),78684,"EXE Checking Account invoice",{_id: 24464,array: [[],10064],obj: {_id: 24465,str: "Generic Avon",num: 95031,date: new Date("2018-09-06T04:25:40.640Z"),array: [10729,new Date("2018-09-06T12:20:06.658Z")]}},"Polarised Unbranded Fresh Pants program",{_id: 24466,date: new Date("2018-09-05T21:32:43.177Z")},new Date("2018-09-06T17:54:04.440Z"),"generate Tactics","Fish Brunei Darussalam system",new Date("2018-09-06T13:42:20.320Z"),[]],obj: {_id: 24467,str: "Generic Investment Account",num: 65283,date: new Date("2018-09-06T09:18:40.708Z"),obj: {}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $second: { $isoDayOfWeek: { $minute: { $week: { $isoDayOfWeek: { $dayOfMonth: { $isoDayOfWeek: { $dayOfWeek: { $dayOfWeek: { $isoWeek: { $isoWeekYear: new Date("2018-09-06T00:04:30.972Z") } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',"Italy sensor Interactions"],[{ $toLower: '$str' }],[],[],['$str',{ $rtrim: { input: "engineer quantifying" } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Web implement parse","teal microchip Checking Account"],['$obj.str','$obj.str'],['$obj.num'],[],[],['$obj.obj.num',{ $size: [[]] }]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Gorgeous",'$obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $month: { $second: { $dateToString: {date: '$obj.date',onNull: { $isoWeekYear: { $isoWeekYear: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $map: {input: ['$obj.obj.obj.obj.str'],as: 'monserrat',in: { $ln: '$obj.obj.num' }} },{ $arrayToObject: [[[652,'$obj.obj.num','$obj.obj.obj.num'],[21966],[{ $toUpper: { $trim: {input: "best-of-breed",chars: '$str'} } }],[]]] },8] },isoWeek: { $ceil: 63061 },isoDayOfWeek: { $multiply: [] },hour: { $exp: '$num' },minute: 31147,millisecond: { $abs: '$obj.num' },timezone: "Pacific/Tahiti"} },timezone: "Etc/GMT-1",iso8601: true} } } }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[17833]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.obj.str',"Utah","Soft"]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["Peru"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],50201] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $year: { $millesecond: { $toDate: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[{k: "invoice revolutionize",v: true}]] } },"bandwidth Outdoors RAM"],15137] } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T02:49:57.089Z",format: "%H-%S-%%-%U-%V-%S-%M-%u-%L-%Z-%j-%m"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$str','$obj.str',{ $concat: ['$str'] }]]] }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfWeek: { $dayOfWeek: { $year: { $month: { $isoDayOfWeek: { $dayOfYear: { $hour: { $dateFromString: {dateString: "2018-09-06T14:26:41.101Z",onNull: { $arrayElemAt: [['$obj.obj.str'],29574] }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "ubiquitous",v: false},{k: "Oregon IB Licensed Fresh Computer",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "portals" } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $trim: {input: '$obj.obj.obj.str',chars: "visionary"} },8,8] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $exp: '$obj.obj.num' },day: { $abs: '$obj.obj.obj.num' },hour: { $sqrt: '$obj.obj.obj.num' },second: { $ln: 38707 },timezone: "America/Denver"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrCP: ["mobile calculate",12,14] },'$obj.obj.obj.obj.str',{ $toLower: "grow end-to-end" }],['$num']]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateToParts: {date: '$obj.date',iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $week: { $isoWeek: { $toDate: { $concatArrays: [['$obj.obj.num'],['$obj.obj.str',{ $substr: ["Steel",8,13] }],['$obj.str',{ $ltrim: {input: "USB Toys bypass",chars: "firewall"} }],["Strategist matrices",{ $toUpper: '$obj.obj.str' }],['$str',{ $trim: {input: '$obj.obj.str',chars: "silver green Security"} }]] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "EXE Chad",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["program"],54548] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toString: { $toUpper: { $trim: {input: '$obj.obj.obj.str',chars: "bandwidth Communications"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "cyan HDD",v: true}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $minute: { $dateFromString: {dateString: "2018-09-06T00:13:43.643Z",onNull: { $range: [12,6,20] }} } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $toString: { $ltrim: {input: "Mountain",chars: "Falls"} } },'$obj.obj.obj.str',{ $rtrim: { input: { $dateToString: {date: '$obj.obj.obj.obj.date',format: "%z-%%-%H-%z-%d-%H-%%-%m-%H-%d",onNull: { $arrayToObject: [[]] }} } } }],['$obj.obj.obj.num',40225],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deploy",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trunc: '$obj.obj.num' }],[{ $toUpper: "Liaison" },{ $toLower: { $ltrim: { input: "Forward violet" } } },'$obj.obj.obj.str'],["Public-key",'$obj.obj.obj.obj.str','$obj.obj.obj.str'],[],[45680,65693,'$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[71391],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfWeek: { $dateFromParts: {year: { $mod: ['$obj.num',68856] },month: { $trunc: 20856 },hour: { $log10: '$obj.obj.obj.num' },second: { $log: ['$obj.obj.obj.num','$obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeek: { $year: { $week: { $dateToParts: { date: { $isoDayOfWeek: { $dayOfMonth: { $year: new Date("2018-09-05T22:32:40.937Z") } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "e-tailers Awesome" },"schemas Michigan"],'$num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $year: { $isoWeek: { $dayOfYear: { $month: { $toDate: { $ltrim: {input: '$obj.obj.str',chars: "Berkshire Chips exploit"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeek: { $year: { $dayOfYear: { $month: { $toDate: { $substr: ['$obj.obj.obj.str',0,20] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Developer empowering",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],[],[{ $sqrt: '$obj.obj.obj.num' },'$obj.obj.num'],[84088,'$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoWeekYear: { $dateToParts: { date: { $minute: { $hour: { $month: { $dayOfMonth: { $millesecond: { $year: { $dateFromString: {dateString: "2018-09-06T15:04:31.943Z",timezone: "Etc/GMT+5",onNull: '$str'} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: false} }, _id: 0}}],

        [{$project: {a: { $range: [11,12] }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfYear: { $toDate: { $toUpper: '$obj.obj.obj.str' } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],54920] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.str',{ $rtrim: {input: { $toString: { $substr: ["Direct Shoal",2,7] } },chars: '$obj.str'} }],[],['$obj.obj.obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%d-%Z-%%-%L-%Z-%d-%V-%u-%H-%V-%G-%m",onNull: { $trim: { input: { $rtrim: {input: "morph",chars: '$obj.obj.str'} } } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Granite dynamic",6,3] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.str'],as: 'maybelle',cond: { $gte: [{ $dateToString: {date: '$date',format: "%Y-%z-%d-%%-%%"} },{ $arrayElemAt: [[{ $toString: { $arrayToObject: [[[],[],[{ $toUpper: "asymmetric Alley background" },"Wooden"],['$num']]] } },'$$maybelle'],24949] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',{ $trim: {input: "XSS invoice",chars: "deposit firmware schemas"} }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "index",v: false}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substr: ["Vista Fresh Web",17,18] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Sports",v: true},{k: "Switchable Intranet leverage",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Enterprise-wide Borders",v: { $rtrim: {input: '$obj.str',chars: '$str'} }}]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $subtract: ['$obj.obj.obj.num',3722] },isoWeek: { $floor: 84741 },isoDayOfWeek: { $indexOfArray: [{ $filter: {input: [{ $concat: ["quantify Savings Account Shirt",'$obj.obj.obj.obj.str',"Montserrat whiteboard"] }],as: 'mariah',cond: true} },{ $map: {input: [],in: { $trunc: { $cmp: [{ $arrayToObject: [[]] },{ $arrayElemAt: [[],'$$this'] }] } }} },5] },hour: { $exp: 46397 },second: { $ceil: 5575 },millisecond: { $pow: ['$obj.obj.num',9581] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],[57703],[],['$str'],['$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeekYear: { $isoWeek: { $minute: { $isoDayOfWeek: { $second: { $dayOfYear: { $dayOfMonth: new Date("2018-09-06T15:56:11.107Z") } } } } } } } }, _id: 0}}],

        [{$project: {a: { $range: [8,20,17] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str'],as: 'ulices',cond: { $isArray: [{ $range: [1,9,1] }] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $isoDayOfWeek: { $week: { $second: { $minute: { $minute: { $hour: { $millesecond: { $year: { $dayOfWeek: { $second: { $dateFromString: {dateString: "2018-09-06T03:14:03.947Z",format: "%Y-%M-%S-%u-%L-%m",timezone: "Europe/Lisbon",onError: { $arrayElemAt: [[],73005] }} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T05:45:18.125Z",format: "%L-%z-%S-%z-%j-%Z-%G-%Y",timezone: "Asia/Kabul",onError: { $toLower: '$obj.obj.obj.str' },onNull: { $arrayElemAt: [[],38607] }} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T00:05:33.499Z",format: "%M-%j-%Y-%w-%w-%L-%u-%H-%H-%G"} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T02:27:12.482Z",timezone: "Asia/Seoul",onError: { $objectToArray: '$obj' },onNull: '$str'} } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $exp: 45134 },month: { $log10: '$num' },minute: { $divide: [2300,'$obj.obj.num'] },second: { $log10: 18807 },millisecond: { $trunc: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $indexOfArray: [{ $range: [11,10,8] },{ $reverseArray: [['$obj.num',false,2276,'$str',true]] },15] },11705],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',7,16] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substrCP: [{ $substrBytes: [{ $toLower: '$obj.obj.str' },12,0] },7,9] }],[],[],["Auto Loan Account","Accountability"],[13852]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["Movies Cedi Refined",11,4] },'$obj.str'],76063] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["SSL compress Congolese Franc",15,19] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Mall",v: "solid state B2B"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: { $dateToString: {date: '$obj.obj.obj.obj.date',onNull: '$str'} } }],['$obj.obj.obj.num',{ $add: [] }],[],["connect Grocery"]]] }, _id: 0}}],

        [{$project: {a: { $concat: ["Sausages"] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T03:47:05.976Z",timezone: "America/Virgin",onNull: { $toUpper: '$obj.obj.obj.str' }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[44226,'$obj.num','$num',{ $sqrt: '$obj.obj.obj.num' }],['$obj.str',{ $concat: ['$obj.str'] },{ $substr: ["Chief mobile",7,1] }],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [8,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Borders Investment Account"],[{ $substrCP: ["maroon",9,20] },'$str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $substrBytes: ['$str',5,17] },chars: "Mississippi"} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [475,'$obj.num'],cond: { $gt: [{ $dayOfMonth: { $dateToString: {date: { $millesecond: { $year: { $toDate: { $arrayToObject: [[['$$this'],[]]] } } } },timezone: "US/Samoa",onNull: "Cambridgeshire Money Market Account"} } },{ $trim: { input: "Mountains" } }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.obj.str',"Chief"]] }, _id: 0}}],

        [{$project: {a: { $year: { $toDate: { $filter: {input: [68250],as: 'vincenza',cond: { $lte: [{ $substrCP: [{ $toString: { $arrayToObject: [[[66016,'$$vincenza','$obj.obj.obj.num'],["connecting Corner reboot",{ $toUpper: '$obj.obj.obj.obj.str' },'$obj.obj.str',"Fort"],[],["mindshare Pre-emptive metrics",'$$vincenza']]] } },1,8] },{ $arrayElemAt: [["Mobility"],'$obj.obj.num'] }] }} } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[27745],["Alaska Factors"],['$obj.obj.obj.str','$obj.obj.str','$str',{ $ltrim: {input: { $rtrim: {input: "Florida",chars: '$obj.obj.str'} },chars: { $substrCP: ['$obj.obj.obj.str',7,20] }} }],[{ $substrBytes: ["copying Lead",14,14] }]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Engineer",11,6] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substr: ['$obj.obj.obj.obj.str',0,20] },9,17] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Credit Card Account Plastic parsing",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num'],in: { $log10: '$obj.obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $concat: ['$str'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $month: { $minute: { $dateFromParts: {year: { $abs: '$obj.num' },month: { $pow: [93840,'$obj.num'] },day: { $log: ['$obj.obj.num','$obj.obj.obj.num'] },millisecond: { $size: [[{ $concat: [] },"Illinois solid state"]] },timezone: "MST7MDT"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["transmit",13,9] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $ceil: 36354 }],[{ $toUpper: "engineer cross-platform" },"Bedfordshire bandwidth withdrawal"],[],[],[],["Investment Account payment 4th generation",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeek: { $dayOfMonth: { $toDate: { $arrayElemAt: [[{ $substr: ["overriding",8,18] },{ $rtrim: { input: '$str' } }],'$obj.obj.num'] } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["leading-edge",{ $toLower: { $concat: [{ $substrCP: ['$obj.obj.str',2,20] },"circuit","Dong"] } },"user-centric Borders driver"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: { input: { $rtrim: {input: { $concat: ["Rubber Investment Account Unbranded Granite Table",'$str'] },chars: "synthesizing"} } } }],['$num',54400,'$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',9,1] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dateToString: {date: '$obj.obj.date',timezone: "Africa/Lusaka",onNull: "Operative"} } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: '$obj.obj.str' },"Flat"],['$obj.obj.obj.obj.str'],[{ $trunc: 84808 }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Village Towels","Lock mint green North Carolina",{ $rtrim: { input: { $concat: ['$str'] } } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $substrBytes: ["grid-enabled",1,11] },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $range: [6,18,3] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $substr: ['$obj.obj.obj.str',17,14] },19,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],98934] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["deposit Down-sized invoice"],as: 'danika',in: { $ln: 33206 }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["mission-critical",11,14] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit",v: true},{k: "microchip",v: new Date("2018-09-06T17:44:08.840Z")},{k: "Savings Account",v: 12336}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Executive",v: { $toLower: "withdrawal generating" }},{k: "content Soft Nebraska",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $millesecond: { $minute: { $minute: { $toDate: { $filter: {input: [],as: 'pauline',cond: { $lte: [{ $arrayElemAt: [["Shoes Iowa",{ $trim: {input: { $ltrim: { input: '$obj.obj.obj.obj.str' } },chars: '$obj.obj.str'} }],'$num'] },{ $arrayToObject: [[]] }] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],83626] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: 31429,second: { $cmp: [{ $concatArrays: [[{ $substr: ['$str',20,1] },"Spain deliver Sausages",{ $trim: {input: "Mexico Practical",chars: '$obj.obj.obj.obj.str'} }],['$obj.obj.obj.num',false,true],[90885],[]] },{ $range: [0,0] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[65970,'$num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.obj.str'],[],[]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateToParts: {date: { $dayOfWeek: { $month: { $dayOfYear: { $hour: { $toDate: { $dayOfYear: { $year: { $dateFromString: {dateString: "2018-09-06T09:05:11.024Z",onError: { $arrayElemAt: [[],{ $log10: 18951 }] },onNull: { $arrayToObject: [[{k: "Synchronised Liberian Dollar",v: new Date("2018-09-06T00:49:45.154Z")},{k: "Concrete data-warehouse",v: '$obj.num'}]] }} } } } } } } } },timezone: "Africa/Ndjamena",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToString: {date: '$obj.obj.obj.date',format: "%U-%%-%m-%H-%Z-%w-%S-%z-%S-%Y-%d-%L"} },format: "%V-%H-%S-%U-%z-%S",onNull: { $isoWeekYear: { $minute: { $dayOfYear: { $millesecond: { $dayOfMonth: { $dayOfMonth: { $toDate: { $arrayElemAt: [['$obj.obj.obj.num',49473],'$obj.obj.num'] } } } } } } } }} }, _id: 0}}],

        [{$project: {a: { $week: { $dateToString: { date: '$obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfWeek: { $isoDayOfWeek: { $year: { $dateFromString: {dateString: "2018-09-06T00:12:17.248Z",timezone: "America/Matamoros"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',52500,87074],6886] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[{ $trim: { input: "Handcrafted Yemeni Rial Azerbaijanian Manat" } }]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"THX full-range",{ $substrBytes: ["Fantastic Refined Steel Soap turquoise",7,18] },'$obj.obj.obj.str',{ $toUpper: "Games Borders" }],{ $mod: ['$obj.obj.num',50652] }] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [['$num',84103],9164] } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $hour: { $toDate: { $concatArrays: [[],[],[30729,'$num'],[{ $trim: { input: "reinvent Buckinghamshire" } }]] } } } }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Wooden disintermediate hard drive",v: { $ltrim: { input: { $substr: ["open system Checking Account",11,17] } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: { $toUpper: '$obj.obj.obj.obj.str' } }],49624] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $rtrim: { input: "Representative deliverables Practical" } },chars: { $ltrim: { input: '$obj.str' } }} }, _id: 0}}],

        [{$project: {a: { $range: [14,6,14] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T06:51:14.640Z"),format: "%u-%Z-%Y-%Y-%w-%M-%H-%Z-%%",timezone: "Pacific/Guam",onNull: { $arrayToObject: [[{k: "parsing",v: false},{k: "Oklahoma",v: true},{k: "Cliff Steel",v: '$num'}]] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Kentucky Sleek Florida",v: { $trim: {input: "zero administration Texas Avon",chars: '$obj.str'} }}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%S-%H-%Z-%M-%S-%M-%d-%%-%u-%z-%Z",timezone: "Africa/Tripoli",onNull: { $arrayToObject: [[['$num',12258],[98623],[],["SCSI Checking Account granular"]]] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],["Principal"],[31468],['$obj.date',40870,false]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Minnesota Seychelles Rupee",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substrBytes: ["Avon Salad",1,9] },6,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],79573] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],62280] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfMonth: { $week: { $hour: { $isoWeekYear: { $isoDayOfWeek: { $dateToString: {date: '$date',format: "%H-%m-%M-%d-%m-%M-%d-%z-%d",timezone: "Etc/UCT",onNull: { $arrayElemAt: [['$obj.str'],84442] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeek: { $dateFromString: { dateString: "2018-09-06T09:41:23.901Z" } } } }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-06T12:31:16.097Z",format: "%V-%Y-%L-%G-%m-%m-%w-%S-%j-%Z",timezone: "Europe/Warsaw"} } }, _id: 0}}],

        [{$project: {a: { $second: { $minute: { $dayOfWeek: { $isoWeek: { $week: { $dayOfWeek: { $toDate: { $concat: ["maroon e-enable payment",'$str',"connecting Savings Account"] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [[{ $concat: ['$obj.obj.str',"Fresh Alaska"] },'$obj.str'],'$num'] },{ $zip: {inputs: [[],[{ $toString: { $arrayElemAt: [[],'$obj.obj.num'] } }],[],[]],defaults: [{str: "Cheese",date: new Date("2018-09-06T05:28:02.937Z")},"deliverables Vision-oriented killer"]} }] },second: { $mod: [29755,'$obj.num'] },millisecond: { $mod: [1113,96538] }} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $dayOfYear: { $millesecond: new Date("2018-09-06T11:03:48.736Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[67781,'$num'],{ $abs: 1537 }] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $millesecond: { $month: { $dateFromParts: {isoWeekYear: { $sqrt: 8541 },isoDayOfWeek: '$obj.obj.obj.num',minute: { $ln: 30162 },millisecond: { $exp: 9430 }} } } },timezone: "Canada/Mountain"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str','$obj.obj.obj.obj.str',"alliance Ways Bedfordshire"],{ $floor: '$obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "protocol",v: true},{k: "Dynamic",v: false},{k: "paradigms Brand",v: new Date("2018-09-06T15:42:17.953Z")}]] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $range: [10,17] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrCP: ['$obj.obj.obj.str',11,14] },"Concrete program backing up"],as: 'waldo',in: { $mod: ['$$waldo','$$waldo'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',{ $ltrim: {input: "online",chars: "Automotive Savings Account"} }],['$obj.obj.num',56036,85831],['$obj.str'],['$obj.obj.str',"web-enabled",{ $rtrim: { input: { $toLower: "Home Loan Account" } } }]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $ne: [{ $arrayToObject: [[["Customer real-time wireless","alarm parse withdrawal"],['$$this'],[92266],['$obj.obj.num']]] },{ $arrayElemAt: [[88259,'$obj.obj.date'],'$$this'] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%H-%d-%j-%S",timezone: "America/Sao_Paulo",onNull: { $substrBytes: ["bandwidth Awesome knowledge user",5,14] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToParts: {date: { $year: { $isoDayOfWeek: '$date' } },timezone: "Africa/Johannesburg"} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[[{ $dateToString: {date: new Date("2018-09-06T06:59:33.619Z"),onNull: { $substr: ['$str',18,19] }} }]]] } },"white Bedfordshire USB"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateFromParts: { isoWeekYear: '$num' } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Beauty Fish 1080p",'$obj.obj.str'],86642] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: { $second: { $dateFromParts: {isoWeekYear: '$obj.obj.num',isoWeek: { $ceil: 20301 },isoDayOfWeek: { $log: ['$obj.obj.obj.num',3300] },millisecond: { $add: ['$num'] }} } },timezone: "Africa/Monrovia"} } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.str',chars: "Harbors"} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoDayOfWeek: { $dateToParts: {date: { $week: { $millesecond: { $dateFromParts: {year: { $mod: [74654,35070] },month: { $divide: [67881,'$obj.num'] }} } } },iso8601: true} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $second: { $dateToString: {date: new Date("2018-09-06T18:07:50.030Z"),timezone: "Africa/Mbabane",onNull: "Plain"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "synthesizing",v: "Avon Global"}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],80210] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],[],[{ $substrCP: [{ $concat: ['$obj.obj.obj.str',"protocol RAM"] },6,1] },{ $toString: { $substr: ["Yemeni Rial empower",3,4] } }]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Cambridgeshire" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "hack",v: "deploy Serbian Dinar Auto Loan Account"},{k: "online",v: 67132}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$str'],32998] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',6,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Falkland Islands Pound deposit synthesizing",12,10] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.obj.str',9,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',22083,'$num'],89660] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "black Colorado",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[28346],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["bypassing"],["pixel Skyway",'$obj.obj.obj.str','$obj.obj.obj.obj.str'],[{ $concat: [{ $toUpper: { $ltrim: { input: "Cross-platform" } } }] }]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.str',"functionalities"],as: 'vince',in: { $subtract: [54774,39174] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["infrastructures mint green","alarm 24/7"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',"SCSI application Intelligent Frozen Sausages"],[],[],['$num']]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromString: { dateString: "2018-09-06T09:43:11.529Z" } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[['$obj.obj.obj.str'],["Regional"]]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "National expedite",v: true},{k: "Producer",v: new Date("2018-09-06T03:08:35.783Z")}]] }, _id: 0}}],

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
