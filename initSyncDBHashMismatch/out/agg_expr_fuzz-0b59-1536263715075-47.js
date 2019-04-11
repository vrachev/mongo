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
        return coll.insert({_id: 29393,str: "lime",num: 38109,date: new Date("2018-09-06T00:23:32.241Z"),array: ["engage system Credit Card Account",new Date("2018-09-06T12:55:59.788Z"),99986,{_id: 29394,str: "Maine Movies",num: 69517,date: new Date("2018-09-06T17:49:07.911Z"),array: ["Steel",89958,new Date("2018-09-06T04:16:54.240Z")],obj: {}},15990,new Date("2018-09-06T12:49:06.258Z"),new Date("2018-09-06T09:59:35.365Z"),77966,"Pizza index capacitor",{_id: 29395,str: "Virgin Islands, U.S.",num: 95251,obj: {}},{_id: 29396,str: "Awesome Officer",num: 6315,date: new Date("2018-09-06T11:16:53.382Z"),array: []},"Usability invoice"],obj: { _id: 29397 }});
    },

    function(coll) {
        return coll.insert({_id: 29398,str: "Cambridgeshire",num: 61808,date: new Date("2018-09-05T23:05:17.633Z"),array: ["disintermediate Turnpike transform",new Date("2018-09-06T14:17:24.699Z"),59271,27709,"RAM",new Date("2018-09-06T01:16:19.940Z"),"Product viral Paradigm","strategize driver Algeria",{_id: 29399,str: "non-volatile",num: 29635,date: new Date("2018-09-06T19:09:19.451Z"),array: [],obj: {_id: 29400,str: "tan Sleek Frozen",num: 64047,date: new Date("2018-09-06T06:16:48.370Z"),array: [2689,new Date("2018-09-06T02:47:12.123Z"),[],[93225,{_id: 29401,obj: {}},[]],27886],obj: {_id: 29402,str: "Money Market Account Tasty Steel Car",num: 59035,date: new Date("2018-09-06T08:03:58.131Z"),array: ["Personal Loan Account Unbranded Cotton Cheese Marketing",new Date("2018-09-06T09:24:01.881Z"),54830],obj: {_id: 29403,num: 52775,date: new Date("2018-09-06T08:43:06.514Z"),array: [[new Date("2018-09-06T06:54:36.274Z"),75468,"Home Loan Account"]]}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 29404,str: "redundant",num: 12691,date: new Date("2018-09-05T22:20:11.564Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29405,str: "Savings Account",num: 29866,date: new Date("2018-09-06T14:48:21.182Z"),array: [new Date("2018-09-06T16:52:29.122Z"),7667,"orchestrate transitional",[],"Associate",new Date("2018-09-06T11:38:44.487Z"),"Tuna JSON Chief",new Date("2018-09-05T22:30:02.791Z"),[{_id: 29406,str: "target",num: 62962,date: new Date("2018-09-06T06:30:27.916Z"),obj: {_id: 29407,str: "invoice back up Exclusive",date: new Date("2018-09-06T14:31:06.741Z"),array: [],obj: {}}},67735,[new Date("2018-09-05T21:42:54.943Z"),"Expanded",33232,{_id: 29408,array: [28355,[new Date("2018-09-06T10:02:37.514Z")],31620,{_id: 29409,str: "port USB",num: 51617,date: new Date("2018-09-06T18:42:31.455Z"),array: [],obj: {_id: 29410,str: "SQL clear-thinking bi-directional",num: 86196,array: []}}],obj: {}}],"online clear-thinking"]],obj: {_id: 29411,array: [23997]}});
    },

    function(coll) {
        return coll.insert({_id: 29412,str: "Hill",num: 75320,date: new Date("2018-09-06T00:50:21.948Z"),array: ["e-markets redundant",59832,new Date("2018-09-06T12:09:29.480Z"),43681,{_id: 29413,str: "Illinois",num: 65877,date: new Date("2018-09-06T00:30:37.330Z"),array: ["Virgin Islands, U.S. withdrawal",40227],obj: {}},new Date("2018-09-06T15:52:29.008Z"),34504,"solid state",[{_id: 29414,str: "Colorado Washington Indiana",array: [new Date("2018-09-06T04:40:21.242Z"),new Date("2018-09-06T12:21:23.439Z"),[],[]],obj: {_id: 29415,num: 19227,date: new Date("2018-09-06T01:33:28.354Z"),array: [],obj: {}}}],"withdrawal Officer Focused",[]]});
    },

    function(coll) {
        return coll.insert({_id: 29416,str: "sky blue",num: 71140,date: new Date("2018-09-06T10:17:52.938Z"),array: [new Date("2018-09-05T23:15:37.323Z"),"Ball Uruguay quantifying",[],{_id: 29417,str: "dynamic",date: new Date("2018-09-06T08:06:41.784Z"),array: ["extranet B2B",[],new Date("2018-09-06T07:29:44.488Z")],obj: {}},33966,"JBOD","solid state 24/365 Industrial",new Date("2018-09-05T20:32:17.224Z"),46683,79452,"instruction set violet mission-critical"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29418,str: "Checking Account Object-based sensor",num: 51756,array: [60781,"lavender synthesize Buckinghamshire",new Date("2018-09-05T19:57:30.151Z"),{_id: 29419,str: "Unbranded Rubber Tuna",num: 68343,date: new Date("2018-09-06T17:03:52.092Z"),array: [],obj: {}},"tangible","Practical Metal database",new Date("2018-09-06T18:21:16.082Z"),39212,"Response Small synthesizing","Tala Orchestrator",new Date("2018-09-06T12:24:15.724Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29420,str: "Automotive",num: 55648,date: new Date("2018-09-06T08:35:48.142Z"),array: [],obj: {_id: 29421,str: "content-based parallelism",num: 8423,date: new Date("2018-09-06T04:37:36.505Z"),array: [new Date("2018-09-06T16:15:20.685Z"),new Date("2018-09-06T01:29:05.014Z"),57820,"solid state Hat Rustic Concrete Towels",{_id: 29422,date: new Date("2018-09-06T06:59:18.300Z"),array: [68101,"Lead",{_id: 29423,str: "Pants",num: 51464,date: new Date("2018-09-06T03:46:13.090Z"),array: [[],new Date("2018-09-06T15:07:12.195Z")],obj: {_id: 29424,num: 16729,date: new Date("2018-09-06T08:35:41.551Z")}}],obj: {}},82944,90021,new Date("2018-09-06T16:17:23.218Z"),new Date("2018-09-06T07:35:07.267Z"),[],"Operations Investment Account",["Buckinghamshire sky blue",82814]],obj: {_id: 29425,str: "Kansas Human transition",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29426,str: "mobile",num: 43580,date: new Date("2018-09-05T23:31:22.729Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29427,str: "application Response",num: 50760,date: new Date("2018-09-06T19:14:17.896Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29428,str: "visionary",num: 40705,date: new Date("2018-09-06T00:46:16.789Z"),array: [],obj: {_id: 29429,str: "content-based next generation Borders",num: 32509,date: new Date("2018-09-06T11:36:28.798Z"),array: [72276,37810,[new Date("2018-09-06T17:41:51.041Z")],"end-to-end",new Date("2018-09-06T09:30:13.691Z"),"Investment Account","Guarani incremental Tunisian Dinar",new Date("2018-09-06T05:29:53.210Z"),14028,88263,{_id: 29430,str: "background Steel Soap",num: 37591,obj: {}},{_id: 29431,str: "Riel",num: 93731,array: []},{_id: 29432,str: "Toys",num: 89259}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29433,str: "web-enabled program Berkshire",num: 66077,date: new Date("2018-09-05T21:56:40.166Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29434,str: "Israel",num: 4554,date: new Date("2018-09-05T22:52:29.334Z"),array: [],obj: {_id: 29435,str: "Global lime distributed",num: 76924,array: [15690,new Date("2018-09-06T04:37:32.633Z"),new Date("2018-09-06T01:56:13.956Z"),"withdrawal Jewelery",[],{_id: 29436,str: "evolve extranet",num: 5372,date: new Date("2018-09-06T19:02:27.611Z"),array: []},82961,"Fantastic Granite Pants",19828,{_id: 29437,date: new Date("2018-09-06T13:13:18.472Z"),obj: {}},"expedite Frozen Moroccan Dirham"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29438,str: "Colombian Peso Unidad de Valor Real Associate generate",num: 59529,date: new Date("2018-09-06T17:28:34.016Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29439,num: 49705,date: new Date("2018-09-06T08:29:05.242Z"),array: [new Date("2018-09-06T17:35:10.336Z"),"invoice reintermediate Nevada",new Date("2018-09-06T19:29:27.752Z"),94542,39247,new Date("2018-09-06T05:24:29.731Z"),67205,"Sleek Soft Keyboard mint green",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29440,str: "Granite North Dakota Cuba",num: 61076,date: new Date("2018-09-06T16:37:15.697Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29441,str: "Computer",num: 77211,date: new Date("2018-09-06T15:45:56.361Z"),array: [new Date("2018-09-06T08:49:17.558Z"),{_id: 29442,str: "quantify",num: 39532,date: new Date("2018-09-06T09:49:59.682Z"),obj: {}},18645,"technologies Taiwan Costa Rican Colon",new Date("2018-09-06T07:45:42.836Z"),new Date("2018-09-05T23:33:03.829Z"),13735,"cross-platform",{_id: 29443,str: "Expanded knowledge base recontextualize",num: 92470,date: new Date("2018-09-06T18:53:11.978Z"),array: [],obj: {_id: 29444,str: "budgetary management Kids",num: 66756,date: new Date("2018-09-06T00:53:44.788Z"),obj: {}}},"cross-platform",38424],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29445,str: "Awesome",num: 19988,date: new Date("2018-09-06T14:18:27.259Z"),array: ["Planner",96903,"red",new Date("2018-09-06T15:03:37.595Z"),"Engineer maximize",new Date("2018-09-05T21:32:41.178Z"),85903,[{_id: 29446,str: "Managed",num: 70577,date: new Date("2018-09-06T15:57:16.433Z"),array: []},new Date("2018-09-05T20:49:25.034Z"),[]],new Date("2018-09-06T01:48:32.458Z"),new Date("2018-09-06T13:03:51.201Z"),[35139],"Salad"],obj: {_id: 29447,num: 93533,date: new Date("2018-09-06T11:49:48.651Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29448,str: "systematic",num: 5924,date: new Date("2018-09-06T16:17:50.898Z"),array: [68416,new Date("2018-09-06T00:46:48.032Z"),"transitional","Licensed",88366,new Date("2018-09-05T22:26:47.757Z"),"Mobility",56475,{_id: 29449,str: "Handmade Concrete Computer",num: 58648,date: new Date("2018-09-06T18:14:31.112Z"),array: [new Date("2018-09-06T16:40:59.122Z"),"back-end Plaza",25953],obj: {_id: 29450,str: "lime",num: 4812,date: new Date("2018-09-06T07:06:59.794Z"),array: [],obj: {}}},[{_id: 29451,str: "USB",num: 37209,array: [],obj: {}},new Date("2018-09-06T13:21:27.547Z")],["Handcrafted access communities",new Date("2018-09-06T06:12:47.029Z")],[]]});
    },

    function(coll) {
        return coll.insert({_id: 29452,str: "front-end TCP payment",num: 52202,date: new Date("2018-09-06T11:15:28.530Z"),array: [new Date("2018-09-06T07:12:56.487Z"),new Date("2018-09-06T12:10:37.035Z"),"synergize National Uzbekistan",99211,new Date("2018-09-06T17:13:27.479Z"),26047,34970,{_id: 29453,str: "Savings Account",num: 34685,date: new Date("2018-09-06T04:00:06.899Z"),obj: {_id: 29454,str: "Handcrafted Executive Cambridgeshire",num: 46200,date: new Date("2018-09-06T07:03:24.558Z"),array: [],obj: {}}},"European Monetary Unit (E.M.U.-6)",[],"Director",{_id: 29455,str: "Canada Handmade back-end",array: [89761,4414,[[]]],obj: {}},64705],obj: {_id: 29456,date: new Date("2018-09-06T18:33:24.265Z"),array: [new Date("2018-09-06T02:15:02.636Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 29457,str: "syndicate index Jewelery",num: 10354,date: new Date("2018-09-06T00:05:49.134Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29458,str: "Object-based Legacy reboot",num: 75392,date: new Date("2018-09-06T12:42:17.995Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29459,str: "HTTP Bike",num: 71041,date: new Date("2018-09-06T08:38:41.059Z"),array: [],obj: {_id: 29460,str: "Iowa Vermont",num: 43549,date: new Date("2018-09-06T10:59:08.161Z"),obj: {_id: 29461,num: 53949,array: [new Date("2018-09-06T03:29:00.808Z"),"Customizable Shoes Customer",{_id: 29462,str: "benchmark",date: new Date("2018-09-06T10:59:02.910Z"),array: [],obj: {}},76990,90831,new Date("2018-09-06T12:03:38.981Z"),"withdrawal",[],"1080p utilize Exclusive","SDD",[new Date("2018-09-06T07:00:20.096Z"),new Date("2018-09-06T14:12:27.224Z")]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29463,str: "clicks-and-mortar communities Dynamic",num: 70139,date: new Date("2018-09-06T12:45:04.213Z"),array: [new Date("2018-09-06T12:57:32.725Z"),new Date("2018-09-06T14:00:41.928Z"),71884,new Date("2018-09-06T07:23:28.535Z"),"Stream",{_id: 29464,str: "Handmade Concrete Mouse Dynamic",num: 28913,date: new Date("2018-09-06T10:37:28.967Z"),array: [13939,87635,90921],obj: {}},[],{_id: 29465,str: "Grocery Car enable",num: 44381,array: ["Keyboard content-based architecture","Uruguay",new Date("2018-09-06T11:57:44.613Z"),"solutions Rhode Island"],obj: {_id: 29466,num: 92190,obj: {_id: 29467,num: 55320,obj: {}}}},new Date("2018-09-06T12:35:24.644Z"),{_id: 29468,str: "Soap",date: new Date("2018-09-06T04:52:28.897Z")},[],25342]});
    },

    function(coll) {
        return coll.insert({_id: 29469,str: "Tuna",num: 85826,date: new Date("2018-09-05T22:46:47.353Z"),array: [23901,47362,new Date("2018-09-05T22:28:45.703Z"),"recontextualize Forward Incredible Metal Chicken","open-source visionary",new Date("2018-09-06T07:10:19.642Z"),new Date("2018-09-06T04:00:08.962Z"),93244,new Date("2018-09-06T12:44:57.887Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29470,str: "copying Ergonomic user-centric",num: 29091,date: new Date("2018-09-06T19:17:40.515Z"),array: [],obj: {_id: 29471,str: "Ball",num: 82959,date: new Date("2018-09-06T00:49:07.153Z"),array: [94153,"Decentralized","Direct",36714,{_id: 29472,num: 12830,obj: {}},new Date("2018-09-06T16:34:01.075Z"),[],new Date("2018-09-06T00:57:19.419Z"),56235],obj: {_id: 29473,str: "Assimilated monetize transmitter",num: 34508,array: [48067,new Date("2018-09-06T02:15:10.909Z"),new Date("2018-09-06T10:13:34.456Z"),[],"Yemeni Rial"],obj: {_id: 29474,str: "Montenegro Balboa US Dollar convergence",date: new Date("2018-09-06T17:58:22.697Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 29475,str: "deposit",num: 31532,date: new Date("2018-09-05T20:37:09.161Z"),array: ["New Mexico",new Date("2018-09-06T06:39:01.640Z"),58771,[],"Customer-focused withdrawal",[],new Date("2018-09-06T04:32:31.141Z"),{_id: 29476,str: "grey Auto Loan Account",date: new Date("2018-09-05T21:31:14.655Z"),array: [new Date("2018-09-06T15:54:37.709Z")],obj: {}},"Administrator",19393],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29477,str: "Future Danish Krone",num: 56254,date: new Date("2018-09-06T06:15:52.621Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29478,str: "payment Liaison",num: 59634,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29479,str: "functionalities Table",num: 64,array: [{_id: 29480,str: "Handmade Wooden Cheese object-oriented overriding",date: new Date("2018-09-06T17:34:28.692Z"),array: [],obj: {}},[],30440,new Date("2018-09-05T23:56:48.667Z"),"Incredible Mandatory THX",new Date("2018-09-06T18:20:14.783Z"),{_id: 29481,num: 26062,date: new Date("2018-09-06T08:13:52.819Z"),array: [],obj: {_id: 29482,str: "hard drive",num: 47987,date: new Date("2018-09-06T14:08:18.736Z"),array: [[]],obj: {_id: 29483,num: 46473,date: new Date("2018-09-05T23:46:56.555Z"),obj: {}}}},new Date("2018-09-06T17:23:24.413Z"),"hub Incredible Wooden Ball",31049,["Switchable",new Date("2018-09-06T14:01:26.674Z"),27664]],obj: {_id: 29484,str: "Port"}});
    },

    function(coll) {
        return coll.insert({_id: 29485,str: "Vermont",num: 25988,date: new Date("2018-09-06T00:24:32.546Z"),array: [new Date("2018-09-06T11:00:40.556Z"),48020,{_id: 29486,str: "Human Generic",num: 95865,date: new Date("2018-09-06T04:17:20.183Z"),obj: {_id: 29487,num: 28574,array: [new Date("2018-09-06T15:24:15.088Z"),"Small Wooden Chips Mississippi strategy",36885],obj: {}}},99578,["compressing XSS Investor"],{_id: 29488,str: "success cyan orchestration",num: 67457,date: new Date("2018-09-06T14:45:15.766Z"),array: [],obj: {_id: 29489,str: "Movies",num: 7904,date: new Date("2018-09-06T00:51:38.613Z"),array: [],obj: {_id: 29490,str: "yellow SCSI matrix",date: new Date("2018-09-06T10:39:30.894Z")}}},"reboot",new Date("2018-09-05T22:13:40.965Z"),[],61581,new Date("2018-09-05T21:00:42.924Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29491,str: "Chicken",num: 98777,date: new Date("2018-09-06T17:16:46.433Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29492,str: "Planner teal program",num: 22693,date: new Date("2018-09-05T22:03:59.791Z"),obj: {_id: 29493,date: new Date("2018-09-06T14:17:26.286Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29494,str: "Automotive",num: 13076,date: new Date("2018-09-06T03:15:02.970Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29495,str: "Assistant Coordinator",num: 19525,date: new Date("2018-09-06T01:45:41.736Z"),array: [new Date("2018-09-06T05:14:55.015Z"),new Date("2018-09-06T11:30:48.205Z"),new Date("2018-09-06T07:05:08.470Z"),23592,"Parks Rubber",[94036,95133,new Date("2018-09-06T18:05:24.156Z")],{_id: 29496,str: "HDD",num: 2683,date: new Date("2018-09-06T19:44:27.565Z"),array: [],obj: {_id: 29497,str: "Concrete Bermudian Dollar (customarily known as Bermuda Dollar) Connecticut",num: 39043,date: new Date("2018-09-06T16:39:27.973Z"),array: [],obj: {_id: 29498,date: new Date("2018-09-06T13:53:07.833Z"),array: ["Generic Soft Pants","online grow Puerto Rico"],obj: {_id: 29499,str: "Ergonomic Sao Tome and Principe",date: new Date("2018-09-06T04:15:50.615Z"),array: [new Date("2018-09-06T06:56:49.956Z"),{_id: 29500,num: 65458,obj: {}},[],[]]}}}},"Pike Libyan Dinar",{_id: 29501,num: 94760,obj: {}},{_id: 29502,str: "Checking Account Games",num: 87680,array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29503,str: "Handcrafted Metal Norway",num: 58616,date: new Date("2018-09-06T00:07:19.700Z"),array: ["Berkshire invoice",[],new Date("2018-09-06T12:17:53.009Z"),85280,new Date("2018-09-06T10:57:13.597Z"),{_id: 29504,str: "Yuan Renminbi Jamaican Dollar Technician",num: 71678,date: new Date("2018-09-06T09:25:17.713Z"),obj: {_id: 29505,str: "pink Computer override",date: new Date("2018-09-06T18:42:22.671Z"),array: [],obj: {}}},14428,["Yen",58771,97991,new Date("2018-09-06T07:10:43.070Z"),"Vista",{_id: 29506,str: "quantifying quantifying Integration",num: 37734,array: [21733],obj: {}}]],obj: {_id: 29507,num: 33160,date: new Date("2018-09-06T11:21:13.837Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29508,str: "synthesizing",num: 16196,date: new Date("2018-09-06T13:21:43.931Z"),array: [],obj: {_id: 29509,str: "Dominica parsing Small",num: 63012,date: new Date("2018-09-06T09:34:41.673Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29510,str: "calculating optical input",num: 72513,date: new Date("2018-09-06T13:32:54.443Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29511,str: "Global Clothing",num: 30642,date: new Date("2018-09-06T01:31:27.430Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29512,str: "Cambridgeshire Vision-oriented Bulgarian Lev",num: 46858,date: new Date("2018-09-06T08:50:21.349Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29513,str: "online Liechtenstein copy",date: new Date("2018-09-06T10:50:46.167Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29514,str: "Configuration",num: 49221,date: new Date("2018-09-06T16:26:45.717Z"),array: [36781,"extend Grocery port",new Date("2018-09-06T12:03:54.292Z"),new Date("2018-09-05T22:32:59.383Z"),90362,new Date("2018-09-06T11:46:12.446Z"),{_id: 29515,str: "Mouse aggregate",num: 73314,array: [[],14021,{_id: 29516,str: "schemas",date: new Date("2018-09-05T23:39:46.682Z"),array: [],obj: {_id: 29517,str: "Montana capability",date: new Date("2018-09-06T13:15:59.290Z"),array: [],obj: {_id: 29518,str: "overriding Buckinghamshire",num: 69628,date: new Date("2018-09-06T06:58:54.454Z"),obj: {}}}}],obj: {_id: 29519,num: 81101,array: ["Data",60043,[{_id: 29520,str: "iterate Ohio system",num: 15767,date: new Date("2018-09-05T21:07:44.907Z")},"Aruba instruction set",75291],new Date("2018-09-06T12:15:20.045Z")],obj: {}}},10824,{_id: 29521,date: new Date("2018-09-06T16:19:36.306Z"),array: []},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29522,str: "reintermediate Ball demand-driven",num: 52402,date: new Date("2018-09-06T06:46:28.818Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29523,str: "Mexico Florida back-end",num: 42581,date: new Date("2018-09-06T00:30:27.085Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29524,str: "Silver Lebanon Associate",num: 87982,date: new Date("2018-09-05T20:36:37.958Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29525,str: "CSS Legacy",num: 7951,date: new Date("2018-09-06T17:32:06.903Z"),array: ["flexibility",new Date("2018-09-05T21:57:43.832Z"),["back-end"],25282,{_id: 29526,str: "Oregon Somali Shilling",num: 57968,date: new Date("2018-09-05T23:56:24.059Z"),array: [],obj: {_id: 29527,num: 107,date: new Date("2018-09-06T16:06:21.798Z"),obj: {}}},10281,6577,[],new Date("2018-09-06T02:55:46.362Z"),"extranet SDD Buckinghamshire",7218],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29528,str: "Steel",num: 63796,date: new Date("2018-09-06T06:15:36.504Z"),array: [],obj: {_id: 29529,str: "Soft South Africa Chips",date: new Date("2018-09-06T03:59:25.793Z"),array: [new Date("2018-09-06T02:17:50.162Z"),87283,"Ergonomic firewall",66166,["Handmade International",new Date("2018-09-05T23:07:04.518Z"),new Date("2018-09-06T05:59:07.551Z"),"synergistic Hungary",{_id: 29530,str: "Human Harbor Health",num: 72326,array: [],obj: {}},[8747]],[],"Lebanon Applications Chair",{_id: 29531,str: "Key",num: 28968}],obj: {_id: 29532,num: 66174,date: new Date("2018-09-06T19:10:12.788Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29533,str: "Analyst Rustic Metal Chicken whiteboard",num: 98890,date: new Date("2018-09-06T14:39:01.086Z"),array: [86234,new Date("2018-09-06T18:12:17.594Z"),{_id: 29534,str: "Rubber Bedfordshire Investor",num: 91433,date: new Date("2018-09-06T19:34:12.631Z"),array: [],obj: {}},"Arkansas",[],new Date("2018-09-06T15:38:12.298Z"),new Date("2018-09-06T00:34:46.166Z"),["Assistant schemas quantifying",26024],new Date("2018-09-06T10:04:22.527Z"),50523,"3rd generation Designer Rustic","Practical Berkshire architectures"],obj: {_id: 29535,num: 15704,date: new Date("2018-09-06T07:26:19.899Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 29536,str: "Intelligent",date: new Date("2018-09-05T22:11:00.973Z"),obj: {_id: 29537,str: "indexing Savings Account back up",num: 5652,date: new Date("2018-09-05T21:18:39.559Z"),array: ["Shoes","Practical Wooden Chair Investor Steel",[],{_id: 29538,num: 57902,date: new Date("2018-09-05T21:59:18.368Z"),array: [],obj: {_id: 29539,str: "Human Idaho",num: 47625,date: new Date("2018-09-06T09:16:05.752Z"),array: [],obj: {}}},new Date("2018-09-06T07:47:42.759Z"),"Kids 3rd generation array",98219,62528,"Forward Lake"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29540,str: "payment synergy parse",num: 67032,date: new Date("2018-09-06T02:35:06.732Z"),array: [new Date("2018-09-05T22:49:11.415Z"),97867,"Outdoors",5672,"Fresh Chief matrix",[8596,new Date("2018-09-06T11:02:51.824Z"),new Date("2018-09-06T06:53:17.564Z"),7708],{_id: 29541,str: "killer Tasty",num: 35279,date: new Date("2018-09-05T22:14:28.343Z"),array: [],obj: {}},"generate"],obj: {_id: 29542,str: "gold Specialist",num: 97272,date: new Date("2018-09-06T02:57:31.063Z"),obj: {_id: 29543,str: "transmitting mobile input",num: 2029,date: new Date("2018-09-06T03:43:51.921Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29544,str: "Research Optimization eyeballs",date: new Date("2018-09-06T00:05:43.749Z"),array: [new Date("2018-09-06T13:59:23.649Z"),83522,"Concrete",71485,{_id: 29545,num: 1575,date: new Date("2018-09-06T19:05:46.175Z"),array: [],obj: {}},[],"sexy system-worthy Sports",new Date("2018-09-06T05:33:39.239Z"),new Date("2018-09-06T16:00:28.631Z"),27681,22992],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29546,str: "Robust",num: 40027,date: new Date("2018-09-06T13:30:58.211Z")});
    },

    function(coll) {
        return coll.insert({_id: 29547,str: "withdrawal web-readiness national",num: 37389,array: [81097,"system programming",new Date("2018-09-06T03:08:19.200Z"),new Date("2018-09-06T10:54:23.089Z"),"driver payment",[],{_id: 29548,str: "heuristic",num: 51211,date: new Date("2018-09-06T08:09:31.609Z"),array: [75085],obj: {}},new Date("2018-09-06T19:34:48.965Z"),"intuitive"],obj: {_id: 29549,str: "Awesome Plastic Gloves yellow",num: 83638,obj: {_id: 29550,num: 47348,date: new Date("2018-09-06T07:29:43.951Z"),array: [new Date("2018-09-06T19:08:09.861Z"),"Chips Fantastic PCI",2748,76586],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29551,str: "Sleek",num: 88049,date: new Date("2018-09-06T15:49:22.786Z"),obj: {_id: 29552,num: 37318,date: new Date("2018-09-06T13:50:18.419Z"),array: [],obj: {_id: 29553,str: "global Comoros",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29554,str: "RSS Cotton",num: 92442,date: new Date("2018-09-06T02:12:19.893Z"),array: [70301,new Date("2018-09-06T16:30:08.435Z"),"Automotive integrate"],obj: {_id: 29555,str: "Customer-focused",date: new Date("2018-09-06T08:30:21.176Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 29556,str: "PNG Personal Loan Account Mobility",date: new Date("2018-09-06T04:46:35.335Z"),array: [new Date("2018-09-06T07:46:01.210Z"),{_id: 29557,str: "Ergonomic Health Vision-oriented",num: 41776,array: [],obj: {_id: 29558,str: "encryption deploy",num: 15882,date: new Date("2018-09-06T14:34:57.772Z"),array: [new Date("2018-09-06T18:20:39.615Z"),50294,[],"Brand Identity",[]]}},"Accounts deposit THX",5209,"Accountability throughput Savings Account",[],"Gorgeous Rubber Bike action-items Steel","Incredible Rubber Salad redundant Ergonomic Steel Shirt",62348,new Date("2018-09-06T15:01:12.835Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29559,str: "Sleek Rubber Keyboard synthesizing Bike",num: 40339,date: new Date("2018-09-06T14:32:37.412Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29560,date: new Date("2018-09-05T20:56:51.143Z"),array: [39054,new Date("2018-09-06T15:34:01.516Z"),"Tugrik",86671,"Shirt",new Date("2018-09-06T09:29:37.370Z"),"teal","neural Guam Cotton",new Date("2018-09-06T19:40:59.169Z"),{_id: 29561,str: "parsing calculating",num: 53139,date: new Date("2018-09-06T15:16:56.082Z"),array: [new Date("2018-09-06T06:58:09.173Z")],obj: {_id: 29562,str: "XML plug-and-play Home",num: 53193,date: new Date("2018-09-06T13:43:59.329Z"),array: [],obj: {}}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29563,str: "Steel",num: 82571,date: new Date("2018-09-06T03:26:05.732Z"),array: [38667,91460,new Date("2018-09-06T09:11:47.304Z"),"alarm Croatia",new Date("2018-09-06T17:48:23.302Z"),"Auto Loan Account methodology",["architectures"],2716,70182,"Berkshire Mission Idaho","optical",46202,{_id: 29564,str: "info-mediaries systems",num: 21770,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 29565,str: "communities",num: 33473,array: [new Date("2018-09-06T18:24:59.827Z"),"Fundamental",90250,"deposit",[new Date("2018-09-06T02:15:45.967Z")],62271,"application Agent","Lead bypassing",new Date("2018-09-05T22:25:10.495Z"),86208]});
    },

    function(coll) {
        return coll.insert({_id: 29566,str: "invoice",num: 53824,date: new Date("2018-09-06T13:46:24.013Z"),array: [81397,"Checking Account Lodge Chief",22770,[],new Date("2018-09-06T05:30:13.628Z"),"Intranet Chips",new Date("2018-09-06T02:36:11.760Z"),new Date("2018-09-06T06:22:09.923Z"),{_id: 29567,str: "TCP networks North Korean Won",num: 8441,date: new Date("2018-09-06T06:35:35.192Z"),array: ["withdrawal"],obj: {}},59648,"interactive Computer",new Date("2018-09-06T05:40:45.144Z")],obj: {_id: 29568,str: "olive Tuna schemas",num: 89809,date: new Date("2018-09-06T00:48:27.292Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29569,date: new Date("2018-09-06T04:35:55.712Z"),array: ["hard drive Cheese",99392,new Date("2018-09-06T06:04:11.759Z"),new Date("2018-09-06T16:37:20.383Z"),"white e-commerce","Home",[99046,new Date("2018-09-06T06:29:05.581Z"),60409],{_id: 29570,str: "Pants",num: 45876,date: new Date("2018-09-06T10:37:37.498Z"),obj: {}},52576,new Date("2018-09-06T19:34:48.512Z"),89453],obj: {_id: 29571,str: "overriding Operations",num: 31849,date: new Date("2018-09-06T11:20:58.204Z"),array: [],obj: {_id: 29572,str: "Bike Concrete",num: 52703,array: [],obj: {_id: 29573,str: "communities Estonia Palladium",num: 48320,date: new Date("2018-09-06T18:57:30.973Z"),array: [{_id: 29574,str: "Dynamic program",num: 91605,date: new Date("2018-09-06T07:34:40.520Z")}],obj: {_id: 29575,date: new Date("2018-09-06T19:42:11.699Z"),array: [{_id: 29576,str: "Nigeria",num: 28791,obj: {}},"Borders Norwegian Krone",{_id: 29577,str: "Ways Tuvalu viral",num: 81667},[]]}}}}});
    },

    function(coll) {
        return coll.insert({_id: 29578,str: "partnerships Directives",date: new Date("2018-09-05T23:10:03.351Z"),array: [[],new Date("2018-09-06T17:30:48.093Z"),new Date("2018-09-06T07:07:44.705Z"),[new Date("2018-09-06T02:20:45.483Z"),"Adaptive leverage Auto Loan Account",42003,{_id: 29579,num: 32876,date: new Date("2018-09-06T02:32:48.815Z"),array: [59223]},{_id: 29580,str: "disintermediate",num: 22011,array: [],obj: {_id: 29581,str: "Berkshire",num: 99900,date: new Date("2018-09-05T23:20:32.049Z"),array: [new Date("2018-09-05T21:10:09.841Z")],obj: {}}},"Ergonomic Rubber Chicken Central overriding",83469,31048],"Garden",new Date("2018-09-06T06:38:12.866Z"),{_id: 29582,str: "Tunnel",num: 29254,date: new Date("2018-09-06T01:24:56.651Z"),obj: {_id: 29583,num: 18051,date: new Date("2018-09-05T21:13:21.681Z"),obj: {_id: 29584,str: "global",num: 59857}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29585,str: "Regional strategy",num: 30373,date: new Date("2018-09-06T00:59:11.537Z"),array: [],obj: {_id: 29586,str: "card",num: 85140,date: new Date("2018-09-05T20:36:30.871Z"),array: ["extend",new Date("2018-09-06T10:33:23.009Z"),{_id: 29587,num: 44802,array: [new Date("2018-09-05T23:35:47.398Z"),["orange Agent Common",94736],new Date("2018-09-06T07:36:12.218Z")],obj: {}},52129,"parse bypass content-based",95143,83543,"syndicate Checking Account Tactics","deposit",new Date("2018-09-05T23:30:25.965Z"),[]],obj: {_id: 29588,str: "e-tailers",num: 38209,array: [],obj: {_id: 29589,str: "Metal feed",date: new Date("2018-09-06T13:04:13.529Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 29590,str: "deposit Cambridgeshire",num: 89046,date: new Date("2018-09-06T19:15:34.684Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29591,str: "matrix Ergonomic Steel Keyboard hub",date: new Date("2018-09-06T01:16:24.774Z"),array: [21288,{_id: 29592,str: "Data Garden Human",num: 82455,date: new Date("2018-09-06T10:19:26.328Z"),array: [],obj: {_id: 29593,str: "Czech Koruna best-of-breed Licensed",num: 46343,date: new Date("2018-09-06T09:13:18.029Z"),array: ["parse",new Date("2018-09-06T04:58:26.606Z"),{_id: 29594,num: 89277,date: new Date("2018-09-06T05:45:03.059Z"),array: [],obj: {}}],obj: {_id: 29595,str: "silver Massachusetts Ramp",num: 14372,array: [5933,new Date("2018-09-05T23:35:41.616Z")],obj: {}}}},"Soap Cotton Refined Granite Pants",new Date("2018-09-06T17:44:36.891Z"),41833,52523,new Date("2018-09-05T22:42:51.623Z"),[5265],"Chair white",[],new Date("2018-09-06T01:54:31.660Z"),new Date("2018-09-06T02:41:46.623Z")],obj: {_id: 29596,str: "Ohio",date: new Date("2018-09-06T19:34:03.265Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29597,str: "online Botswana",num: 11105,date: new Date("2018-09-06T05:15:30.604Z"),array: [],obj: {_id: 29598,str: "local Music",num: 63576,date: new Date("2018-09-05T22:24:26.212Z"),array: ["black",new Date("2018-09-06T03:50:09.037Z"),"neural SCSI",80268,{_id: 29599,num: 80515,array: [],obj: {}},80235,{_id: 29600,str: "EXE",date: new Date("2018-09-06T07:28:00.324Z")},new Date("2018-09-06T15:37:02.037Z"),[96356,80278],"JBOD dynamic",new Date("2018-09-06T18:54:12.325Z"),"programming Forges"],obj: {_id: 29601,num: 20130,date: new Date("2018-09-06T11:13:00.070Z"),array: [],obj: {_id: 29602,str: "online Hollow Montana",num: 8506,array: [new Date("2018-09-06T13:12:06.054Z"),new Date("2018-09-06T03:21:04.163Z"),[]],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 29603,str: "zero administration knowledge base navigating",num: 99706,array: [new Date("2018-09-06T10:46:08.533Z"),"magenta content-based Small Granite Shirt",new Date("2018-09-06T04:16:20.113Z"),{_id: 29604,str: "feed users",num: 98777,date: new Date("2018-09-06T00:28:31.358Z"),array: [],obj: {_id: 29605,num: 3481,date: new Date("2018-09-06T17:53:51.096Z"),array: [],obj: {_id: 29606,str: "Unbranded Steel Gloves",num: 82092,date: new Date("2018-09-06T13:24:48.914Z"),obj: {_id: 29607,str: "Ball metrics deposit",date: new Date("2018-09-05T20:14:27.065Z"),array: []}}}},30420,"Uganda Shilling Bedfordshire",new Date("2018-09-06T02:14:52.981Z"),"Forward FTP THX",90228,new Date("2018-09-05T20:37:10.301Z")]});
    },

    function(coll) {
        return coll.insert({_id: 29608,str: "protocol",num: 80071,date: new Date("2018-09-06T11:23:06.787Z"),array: [45111,[81033,{_id: 29609,str: "Senior deliverables",date: new Date("2018-09-05T21:03:22.327Z"),array: [],obj: {}}],79526,"intranet Future","Refined Berkshire",new Date("2018-09-05T20:05:31.950Z"),new Date("2018-09-06T08:47:27.594Z"),{_id: 29610,num: 10879,date: new Date("2018-09-06T18:27:26.865Z"),array: [],obj: {}},new Date("2018-09-05T19:55:59.388Z"),"Jewelery orchid",new Date("2018-09-05T21:12:28.538Z"),new Date("2018-09-06T02:40:05.247Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29611,str: "Associate",num: 44597,date: new Date("2018-09-06T07:00:04.726Z"),array: ["functionalities",new Date("2018-09-06T05:07:12.132Z"),18125,[],82653,{_id: 29612,str: "reintermediate users Field",num: 61909,array: [{_id: 29613,str: "optical Fish overriding",num: 17752,date: new Date("2018-09-06T09:11:43.437Z"),obj: {}},new Date("2018-09-06T10:20:53.420Z"),2830]},96541,{_id: 29614,str: "Indian Rupee",num: 24863,date: new Date("2018-09-05T23:23:20.688Z"),array: [],obj: {}},new Date("2018-09-06T02:13:15.120Z"),new Date("2018-09-06T09:05:40.579Z"),50555],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29615,num: 69799,date: new Date("2018-09-06T18:49:10.264Z"),array: [new Date("2018-09-06T00:42:30.783Z"),"Investment Account International Credit Card Account","Wisconsin",70378,new Date("2018-09-06T14:15:54.511Z"),77036,"niches Savings Account 1080p",67474,"Generic",26937,{_id: 29616,str: "core vortals",num: 37759,array: [],obj: {}},new Date("2018-09-06T02:10:31.329Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29617,num: 77319,date: new Date("2018-09-06T17:36:22.443Z"),array: [76523,{_id: 29618,str: "AGP Plastic Avon",array: [],obj: {_id: 29619,str: "calculate front-end relationships",num: 35582,date: new Date("2018-09-06T08:15:30.226Z"),array: [],obj: {_id: 29620,str: "user-centric",num: 69926,date: new Date("2018-09-06T11:27:37.007Z"),obj: {}}}},new Date("2018-09-05T22:02:59.569Z"),"Polarised","Bedfordshire Pitcairn Islands",[[34890,new Date("2018-09-06T05:17:13.236Z")],"redundant District hack",24874,"hacking Circle",new Date("2018-09-06T06:14:49.510Z")],{_id: 29621,num: 48485,date: new Date("2018-09-05T23:58:53.651Z"),array: [],obj: {}},"Baby scale",[]]});
    },

    function(coll) {
        return coll.insert({_id: 29622,str: "Refined",num: 48236,date: new Date("2018-09-06T17:21:47.447Z"),array: ["Accounts sensor Usability",new Date("2018-09-06T18:34:00.128Z"),11507,35813,"Fundamental matrix","copy real-time",new Date("2018-09-06T10:31:24.528Z"),new Date("2018-09-06T06:13:02.332Z"),[]],obj: {_id: 29623,date: new Date("2018-09-06T08:06:08.004Z"),array: [],obj: {_id: 29624,str: "Fantastic Cotton Computer",num: 720,date: new Date("2018-09-06T17:47:15.858Z"),array: [{_id: 29625,str: "Jewelery utilisation haptic"},"extend",17748,new Date("2018-09-06T07:31:25.873Z"),"Savings Account Usability"]}}});
    },

    function(coll) {
        return coll.insert({_id: 29626,str: "Norfolk Island SSL",num: 73603,date: new Date("2018-09-05T22:26:59.587Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29627,str: "Bahrain Inlet",num: 85813,date: new Date("2018-09-06T10:23:28.956Z"),array: [],obj: {_id: 29628,str: "bus Concrete",num: 39850,date: new Date("2018-09-06T18:11:07.741Z"),array: [40365,[],56067,{_id: 29629,str: "Personal Loan Account",num: 6999,date: new Date("2018-09-06T18:44:36.330Z"),array: [[],"Data Ergonomic Cotton Pizza",new Date("2018-09-06T19:35:31.070Z"),{_id: 29630,num: 52144,date: new Date("2018-09-06T03:52:18.974Z"),obj: {_id: 29631,num: 74868,array: []}},new Date("2018-09-06T00:39:29.024Z")],obj: {}},"ADP withdrawal",66824,new Date("2018-09-06T17:33:21.423Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29632,str: "Soft Shoes",num: 17586,date: new Date("2018-09-05T23:35:28.309Z"),array: ["Checking Account Berkshire South Carolina","next generation web-enabled payment",new Date("2018-09-05T23:54:18.265Z"),"Analyst Syrian Arab Republic",21994,"Pakistan Data Security",new Date("2018-09-06T12:27:34.927Z"),[],68014,51632,{_id: 29633,str: "New Mexico fresh-thinking",date: new Date("2018-09-06T17:59:02.876Z"),array: [new Date("2018-09-06T10:54:32.988Z"),[]],obj: {}},35599],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29634,str: "service-desk Ohio New Jersey",num: 73021,date: new Date("2018-09-06T19:51:04.820Z"),array: [],obj: {_id: 29635,num: 92646,date: new Date("2018-09-06T07:55:51.034Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29636,str: "Cotton",num: 21988,date: new Date("2018-09-06T10:58:14.860Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29637,str: "Cross-platform card Enterprise-wide",date: new Date("2018-09-06T07:35:31.844Z"),array: [],obj: {_id: 29638,array: ["transitional",97889,new Date("2018-09-06T17:52:42.871Z"),37721,[],{_id: 29639,str: "transition override",num: 93055,date: new Date("2018-09-06T10:30:45.639Z"),array: ["Sleek Soft Computer",15567,{_id: 29640,str: "bricks-and-clicks",num: 61571,date: new Date("2018-09-06T16:07:41.788Z"),array: [new Date("2018-09-06T08:51:03.914Z")]},"Home Loan Account Rial Omani Proactive"],obj: {}},new Date("2018-09-06T13:44:51.289Z"),[],48206,new Date("2018-09-06T05:01:44.712Z"),"aggregate Health Tennessee",new Date("2018-09-05T23:52:25.766Z")],obj: {_id: 29641,num: 10940,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 29642,str: "Internal eco-centric",num: 16033,date: new Date("2018-09-06T15:39:23.158Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29643,str: "Accountability brand",num: 95636,date: new Date("2018-09-06T12:49:43.877Z"),array: [7294,new Date("2018-09-06T06:36:14.501Z"),new Date("2018-09-06T09:45:35.153Z"),"Architect",[],"North Carolina viral Tasty Wooden Salad",26678,{_id: 29644,str: "vertical",num: 6340,date: new Date("2018-09-06T14:58:55.342Z"),obj: {}},new Date("2018-09-06T15:00:03.035Z"),83925,{_id: 29645,str: "quantifying",num: 78920,array: ["Supervisor"],obj: {_id: 29646,num: 7340,date: new Date("2018-09-06T10:14:00.578Z"),array: [],obj: {_id: 29647,str: "Wooden",num: 5875,obj: {_id: 29648,date: new Date("2018-09-06T06:53:06.341Z"),array: [[]]}}}},"Directives","Springs hub deposit",new Date("2018-09-05T23:43:06.482Z"),{_id: 29649,date: new Date("2018-09-06T19:47:55.324Z"),array: [],obj: {_id: 29650,str: "TCP",num: 14578,array: [81416],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 29651,str: "Avon redefine",num: 89351,date: new Date("2018-09-06T06:41:32.931Z"),array: [new Date("2018-09-06T15:58:43.209Z"),35846,"bandwidth orchid Row",12907,new Date("2018-09-06T02:19:30.543Z"),7373,[new Date("2018-09-06T08:49:39.262Z"),{_id: 29652,str: "Direct yellow",num: 26784,date: new Date("2018-09-06T13:09:34.554Z"),obj: {}},"Assurance HDD Licensed Plastic Table"],{_id: 29653,str: "methodology",num: 11964,date: new Date("2018-09-06T10:24:48.774Z"),array: [],obj: {_id: 29654,date: new Date("2018-09-06T03:30:49.697Z"),array: [14847,[]],obj: {}}},"incremental Planner Buckinghamshire",21840,[]]});
    },

    function(coll) {
        return coll.insert({_id: 29655,str: "Fiji Dollar",num: 7047,date: new Date("2018-09-05T21:33:16.003Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29656,str: "supply-chains Metical",num: 89300,date: new Date("2018-09-06T03:07:40.369Z"),array: [30028,"bleeding-edge","Cambridgeshire enable National",new Date("2018-09-06T14:20:29.791Z"),3897,[],25975,new Date("2018-09-06T06:34:39.320Z"),new Date("2018-09-06T03:15:39.453Z"),new Date("2018-09-05T21:34:00.797Z"),"redundant Garden high-level",[new Date("2018-09-06T18:34:34.795Z"),{_id: 29657,str: "local area network B2C",num: 47963,date: new Date("2018-09-05T22:29:13.734Z"),array: [],obj: {}}],{_id: 29658,str: "contextually-based",num: 6101,date: new Date("2018-09-06T19:25:06.056Z"),array: ["fuchsia responsive",[39110],new Date("2018-09-06T10:40:50.404Z")],obj: {_id: 29659,num: 96975,obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 29660,str: "viral",date: new Date("2018-09-06T18:48:41.578Z"),array: [new Date("2018-09-05T20:22:28.875Z"),"withdrawal Cotton Automotive",new Date("2018-09-06T19:46:19.650Z"),new Date("2018-09-06T13:19:05.641Z"),"Pre-emptive Plastic",48806,69948,"reboot",[],18422,[],22294,{_id: 29661,str: "sensor",num: 98042,date: new Date("2018-09-06T15:47:53.603Z"),obj: {_id: 29662,num: 93448,array: [],obj: {_id: 29663,str: "experiences Berkshire Congolese Franc",num: 82894,date: new Date("2018-09-06T07:41:06.949Z"),array: ["withdrawal Tala Frozen"],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 29664,str: "Gorgeous Soft Chicken Vista mission-critical",num: 48191,date: new Date("2018-09-05T22:50:02.468Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29665,num: 66161,date: new Date("2018-09-06T09:08:58.206Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29666,str: "AGP info-mediaries help-desk",num: 71287,date: new Date("2018-09-06T15:03:09.760Z"),array: [26043,new Date("2018-09-06T12:17:46.122Z"),new Date("2018-09-06T19:01:39.314Z"),"Philippines",["wireless driver",new Date("2018-09-06T00:27:43.824Z"),89986],"Frozen",95127,[],{_id: 29667,str: "Pass",num: 36684,date: new Date("2018-09-06T18:07:00.058Z"),array: [60182,"invoice SSL",new Date("2018-09-05T23:16:56.158Z")],obj: {}},"Supervisor Grocery"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29668,str: "synergies",num: 58858,date: new Date("2018-09-06T15:09:41.390Z"),array: [],obj: {_id: 29669,num: 66462,date: new Date("2018-09-05T21:10:39.952Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29670,str: "Baby",num: 98919,date: new Date("2018-09-06T14:33:53.243Z"),obj: {_id: 29671,date: new Date("2018-09-06T16:03:43.693Z"),array: ["paradigm International hub",new Date("2018-09-05T22:00:57.694Z"),42882,new Date("2018-09-06T14:13:22.101Z"),37847,{_id: 29672,str: "killer",num: 1772,array: ["azure Rustic black",62629,94618],obj: {_id: 29673,str: "cyan",num: 51807,date: new Date("2018-09-06T10:45:44.017Z"),array: [],obj: {}}},"superstructure Programmable Brand",[],{_id: 29674,date: new Date("2018-09-06T13:59:12.031Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 29675,str: "Auto Loan Account",num: 68673,date: new Date("2018-09-06T08:06:44.213Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29676,num: 49512,date: new Date("2018-09-06T07:26:27.367Z"),array: [[],66723,[],{_id: 29677,str: "Fantastic Uzbekistan port",date: new Date("2018-09-06T10:59:42.580Z"),array: [79551,new Date("2018-09-06T03:30:16.678Z")],obj: {}},"programming Berkshire generate",new Date("2018-09-05T21:35:21.066Z"),32657,{_id: 29678,str: "data-warehouse Auto Loan Account override",num: 81065,date: new Date("2018-09-05T20:50:47.291Z"),array: [],obj: {_id: 29679,str: "Re-engineered synergistic Future",num: 83051,date: new Date("2018-09-06T12:19:50.036Z"),array: [new Date("2018-09-06T16:03:47.383Z"),new Date("2018-09-06T19:13:37.852Z")]}},"markets",{_id: 29680,str: "Generic Metal Sausages Chips",num: 92030,array: [],obj: {}},"Bacon",11801,"Supervisor withdrawal"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29681,str: "Response Shirt lime",num: 32700,date: new Date("2018-09-06T05:39:12.374Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29682,str: "Investment Account",num: 37453,date: new Date("2018-09-06T16:36:39.545Z"),obj: {_id: 29683,str: "Multi-lateral index",num: 69680,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 29684,str: "Berkshire",num: 17977,date: new Date("2018-09-06T08:10:05.062Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29685,str: "application",num: 28435,date: new Date("2018-09-06T16:14:34.886Z"),array: [66152,13872,new Date("2018-09-06T03:50:55.458Z"),"disintermediate Organized","Colombia embrace indexing",new Date("2018-09-06T02:02:58.142Z"),41173,new Date("2018-09-06T15:37:19.622Z"),{_id: 29686,str: "virtual",array: [],obj: {_id: 29687,num: 61262,date: new Date("2018-09-06T07:52:08.678Z"),array: [],obj: {}}},"Ergonomic"]});
    },

    function(coll) {
        return coll.insert({_id: 29688,str: "Ergonomic",num: 67869,date: new Date("2018-09-05T23:01:04.450Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29689,str: "Western Sahara black",num: 5450,date: new Date("2018-09-05T22:46:58.888Z"),array: [58460,17538,57035,new Date("2018-09-06T17:28:32.021Z"),{_id: 29690,str: "disintermediate",num: 28880,date: new Date("2018-09-06T18:49:19.073Z"),array: []},["Wyoming Mississippi",new Date("2018-09-05T23:45:07.787Z"),{_id: 29691,str: "markets Small Soft Mouse Re-contextualized",date: new Date("2018-09-06T00:41:44.550Z"),array: [53036,new Date("2018-09-05T21:53:28.131Z"),"Intelligent Frozen Pants",{_id: 29692,str: "Optimized compress",num: 71962,date: new Date("2018-09-06T18:21:07.158Z"),obj: {}}],obj: {}}],new Date("2018-09-06T06:52:34.537Z"),[],"Shoes Kids",new Date("2018-09-06T11:38:19.471Z"),new Date("2018-09-06T03:52:10.374Z")],obj: {_id: 29693,num: 55505,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29694,str: "Trinidad and Tobago Dollar firewall port",num: 76498,date: new Date("2018-09-06T04:47:40.234Z"),obj: {_id: 29695,str: "Granite Operations payment",num: 87261,date: new Date("2018-09-06T09:51:55.767Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29696,str: "Investor Research",num: 20548,date: new Date("2018-09-06T05:12:05.238Z"),array: [],obj: {_id: 29697,str: "mobile infrastructures",num: 87445,date: new Date("2018-09-05T20:54:48.725Z"),array: [[],new Date("2018-09-06T19:18:46.534Z"),{_id: 29698,str: "granular",date: new Date("2018-09-06T02:18:35.936Z"),array: [12990,new Date("2018-09-06T19:28:46.749Z"),17748,42970],obj: {_id: 29699,str: "Auto Loan Account microchip",num: 31556,date: new Date("2018-09-06T15:44:56.673Z"),array: [],obj: {}}},"matrix methodologies teal","metrics",new Date("2018-09-06T10:29:08.354Z"),"3rd generation methodical back up",[new Date("2018-09-06T07:56:59.764Z")],6273]}});
    },

    function(coll) {
        return coll.insert({_id: 29700,str: "Strategist UAE Dirham",num: 41866,date: new Date("2018-09-06T11:23:41.643Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29701,str: "Massachusetts Honduras Sleek",num: 2552,date: new Date("2018-09-06T16:00:01.477Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29702,str: "Bedfordshire alarm plum",num: 19483,date: new Date("2018-09-06T19:22:10.794Z"),array: [90759,85609,new Date("2018-09-06T02:41:30.337Z"),"backing up pricing structure",34929,9911,"content","Wooden Money Market Account Kuwaiti Dinar","Arkansas",new Date("2018-09-06T09:03:40.459Z"),{_id: 29703,str: "Exclusive",date: new Date("2018-09-06T04:16:45.359Z"),array: [],obj: {_id: 29704,str: "bandwidth-monitored Designer",num: 59975,date: new Date("2018-09-05T21:19:14.893Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29705,str: "rich Alabama Cliff",num: 63212,date: new Date("2018-09-06T06:58:52.414Z"),array: ["neural Marketing",new Date("2018-09-06T06:02:31.072Z"),92410,[[]],{_id: 29706,str: "Secured EXE installation",num: 59466,date: new Date("2018-09-06T16:02:49.642Z"),array: [],obj: {_id: 29707,num: 13266,date: new Date("2018-09-06T07:10:31.466Z"),array: []}},"experiences",new Date("2018-09-06T14:32:00.200Z"),[],32197,"back up","Shoes Small Cotton Fish Awesome"],obj: {_id: 29708,str: "model Sleek hard drive",num: 38005,date: new Date("2018-09-06T16:34:26.389Z"),array: [{_id: 29709,str: "software functionalities",num: 94334,date: new Date("2018-09-06T18:56:30.428Z"),array: []},new Date("2018-09-06T11:51:51.825Z"),50362,new Date("2018-09-06T04:35:15.821Z"),83909],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29710,str: "deliverables Steel",num: 67492,date: new Date("2018-09-06T13:34:54.477Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29711,str: "Malawi",num: 36345,array: [{_id: 29712,str: "parsing",num: 27733,date: new Date("2018-09-05T20:57:37.774Z"),array: []},"optical Bedfordshire","hacking Home Intelligent Fresh Gloves","Granite monitor",74352,new Date("2018-09-06T14:17:16.422Z"),[new Date("2018-09-06T19:30:29.867Z"),14388,"Planner Incredible process improvement",40628],61484,new Date("2018-09-05T23:26:39.067Z")],obj: {_id: 29713,str: "Agent",num: 95043,date: new Date("2018-09-06T04:20:31.199Z"),obj: {_id: 29714,str: "calculating deposit",date: new Date("2018-09-05T22:50:50.391Z"),array: [new Date("2018-09-06T08:13:19.438Z"),67695,{_id: 29715,str: "Global deposit Gorgeous Soft Bike",num: 14764,date: new Date("2018-09-06T19:30:28.796Z"),array: [],obj: {}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29716,str: "Central",num: 53349,date: new Date("2018-09-06T04:41:54.759Z"),array: [],obj: {_id: 29717,str: "override Extended Swedish Krona",num: 65239,date: new Date("2018-09-05T22:40:48.610Z"),array: ["transmitting",new Date("2018-09-06T02:44:34.521Z"),"Ergonomic",[52275,79180,{_id: 29718,str: "Auto Loan Account optical Virginia",num: 92208,date: new Date("2018-09-06T04:14:58.883Z"),array: []}],"Planner Games",{_id: 29719,date: new Date("2018-09-06T04:59:41.188Z"),array: [],obj: {}},79953,new Date("2018-09-06T07:02:50.092Z"),{_id: 29720,str: "Frozen bandwidth-monitored Buckinghamshire",date: new Date("2018-09-06T16:37:00.051Z")},"Credit Card Account Intelligent Frozen Soap",new Date("2018-09-06T02:22:35.910Z"),new Date("2018-09-06T13:25:33.671Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 29721,str: "Buckinghamshire",num: 44764,date: new Date("2018-09-06T17:42:54.700Z"),array: ["lavender","Corporate",new Date("2018-09-06T14:49:01.123Z"),36278,["Honduras",95404,new Date("2018-09-06T17:30:15.708Z")],{_id: 29722,str: "cultivate",num: 7265,date: new Date("2018-09-06T04:54:03.456Z"),array: [],obj: {}},new Date("2018-09-06T06:46:38.231Z"),81295,75405,new Date("2018-09-06T18:03:51.243Z"),"withdrawal Armenian Dram District"],obj: {_id: 29723,num: 6139,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29724,str: "District",num: 35125,date: new Date("2018-09-06T11:14:55.717Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29725,str: "Credit Card Account Assistant Walks",num: 56451,date: new Date("2018-09-06T18:39:55.190Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29726,str: "San Marino JBOD",num: 39829,date: new Date("2018-09-05T20:59:34.502Z"),array: [],obj: {_id: 29727,num: 58546,date: new Date("2018-09-06T03:44:36.322Z"),array: [new Date("2018-09-06T04:13:53.510Z"),"Extensions Generic Rubber Bike",{_id: 29728,num: 88950,array: ["Interactions morph",40727],obj: {}},new Date("2018-09-06T19:23:31.764Z"),{_id: 29729,str: "Cove",date: new Date("2018-09-06T13:04:44.672Z"),array: [],obj: {_id: 29730,str: "channels bi-directional online",num: 74599,date: new Date("2018-09-06T09:19:01.407Z"),obj: {}}},5876,97232,"deposit Norfolk Island",new Date("2018-09-05T21:57:26.131Z"),[],{_id: 29731,str: "vortals Wyoming Northern Mariana Islands",date: new Date("2018-09-05T20:33:53.518Z")},new Date("2018-09-06T18:49:00.359Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29732,str: "Health Prairie",num: 65159,date: new Date("2018-09-06T03:57:53.585Z"),array: ["Wall transmitting",["Personal Loan Account Cambridgeshire",new Date("2018-09-06T17:59:36.563Z")],34791,{_id: 29733,str: "CSS Wall SCSI",num: 5123,array: []},26954,new Date("2018-09-06T05:40:01.366Z"),"Albania maroon Generic",68622,"Intelligent Oklahoma",25945,new Date("2018-09-06T12:55:07.153Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29734,num: 47343,date: new Date("2018-09-06T13:06:59.589Z"),array: [45225,new Date("2018-09-06T07:05:03.924Z"),new Date("2018-09-06T04:22:36.755Z"),6789,"compressing XML",{_id: 29735,str: "orange Dynamic Borders",date: new Date("2018-09-06T16:25:48.007Z"),array: [],obj: {}},"JSON impactful bluetooth",38605],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29736,str: "e-tailers",num: 33742,date: new Date("2018-09-06T00:41:17.513Z"),array: [],obj: {_id: 29737,str: "Fantastic Granite Pizza leverage",num: 48484,date: new Date("2018-09-06T11:57:20.077Z"),array: [8125,81629,new Date("2018-09-06T05:04:29.008Z"),"Avon deliverables Operations",new Date("2018-09-06T06:17:39.109Z"),2592,new Date("2018-09-06T03:36:34.259Z"),"monitor metrics","yellow",{_id: 29738,num: 42470,obj: {_id: 29739,str: "productize Tasty",date: new Date("2018-09-06T06:58:19.846Z"),array: []}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29740,str: "payment infomediaries",num: 14957,date: new Date("2018-09-06T10:52:46.156Z"),array: [{_id: 29741,str: "Games e-tailers",num: 88927,date: new Date("2018-09-05T22:05:23.401Z"),obj: {_id: 29742,str: "Cedi",array: []}},new Date("2018-09-06T03:09:17.555Z"),51526,"Steel",{_id: 29743,str: "Cloned matrix redundant",num: 42094,date: new Date("2018-09-06T14:51:05.482Z"),array: [[{_id: 29744,str: "Checking Account portal Creative",num: 97623,date: new Date("2018-09-05T22:58:40.438Z"),array: [],obj: {}},"teal","1080p",47385],new Date("2018-09-06T08:15:38.746Z"),7669,new Date("2018-09-06T16:38:14.587Z")]},[],{_id: 29745,array: []},[48590],new Date("2018-09-06T15:06:02.696Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29746,str: "card Port",num: 90570,date: new Date("2018-09-06T09:41:22.679Z"),array: [19990,51730,{_id: 29747,str: "deposit e-enable",num: 69179,date: new Date("2018-09-06T07:48:16.444Z"),array: []},"deposit deliver metrics","solid state markets Berkshire",new Date("2018-09-06T08:17:11.922Z"),{_id: 29748,str: "Saudi Riyal South Dakota Hat",num: 45851,array: [],obj: {}},68774,new Date("2018-09-06T15:54:37.282Z")],obj: {_id: 29749,str: "Intelligent",array: [["wireless web services",new Date("2018-09-06T09:43:44.839Z"),new Date("2018-09-06T15:37:01.025Z")],[],59417]}});
    },

    function(coll) {
        return coll.insert({_id: 29750,str: "generate",num: 50909,date: new Date("2018-09-06T07:18:58.932Z"),array: ["productize THX SAS","optical",27609,new Date("2018-09-06T00:14:59.376Z"),71895,"Program Incredible Concrete Bacon Cross-group",28989,"PNG","Cambridgeshire Money Market Account HDD",32754,{_id: 29751,str: "De-engineered target Liaison",date: new Date("2018-09-06T06:31:36.110Z"),array: [{_id: 29752,num: 58529,date: new Date("2018-09-06T10:03:03.458Z"),array: []},[],new Date("2018-09-06T00:25:51.612Z")],obj: {_id: 29753,str: "system engine Steel",num: 8760,obj: {_id: 29754,str: "Home Loan Account",num: 43864,date: new Date("2018-09-06T18:33:38.958Z"),array: ["South Dakota Assistant incentivize",new Date("2018-09-06T17:40:15.389Z"),[new Date("2018-09-06T14:24:51.575Z"),new Date("2018-09-06T17:54:12.860Z")]],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 29755,str: "Nakfa optimize digital",num: 31563,array: [49325,[],new Date("2018-09-06T18:37:41.817Z"),new Date("2018-09-06T08:00:16.259Z"),30640,"customer loyalty Generic Steel Pizza Directives",22394,{_id: 29756,num: 62709,date: new Date("2018-09-06T11:31:44.526Z"),array: [],obj: {_id: 29757,str: "matrix New Hampshire Trafficway",date: new Date("2018-09-06T06:12:16.158Z"),obj: {}}},new Date("2018-09-05T22:03:38.315Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29758,num: 48997,date: new Date("2018-09-05T20:28:51.988Z"),array: [],obj: {_id: 29759,str: "Soft Land one-to-one",date: new Date("2018-09-06T19:19:06.556Z"),array: ["green project Movies","toolset Electronics",new Date("2018-09-05T23:51:19.971Z"),new Date("2018-09-06T05:01:22.411Z"),32869,95209,[],"Self-enabling",new Date("2018-09-05T23:30:21.844Z"),[67322],26967,{_id: 29760,str: "Buckinghamshire Riel red",num: 35605,array: [],obj: {}},50737],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29761,str: "Brand Lake",num: 15686,date: new Date("2018-09-06T05:03:18.352Z"),array: ["Practical Concrete Towels Generic Cotton Bike",33472,new Date("2018-09-05T23:25:28.819Z"),35965,[],{_id: 29762,str: "Incredible",date: new Date("2018-09-06T06:10:29.566Z"),array: [],obj: {}},new Date("2018-09-06T02:33:56.134Z"),"parse algorithm innovative","Lari Designer",new Date("2018-09-06T14:58:21.729Z"),"analyzing",new Date("2018-09-06T02:26:17.885Z")],obj: {_id: 29763,str: "Re-contextualized cross-platform",num: 57768,date: new Date("2018-09-06T05:08:20.788Z"),array: [],obj: {_id: 29764,str: "Unbranded Cotton Computer metrics",num: 45471,date: new Date("2018-09-06T04:23:40.674Z"),array: [{_id: 29765,num: 41761,date: new Date("2018-09-05T21:44:14.902Z"),obj: {}},{_id: 29766,num: 49366,array: []},"copy Regional",[[[],6252]]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29767,str: "Games forecast",num: 74274,date: new Date("2018-09-06T01:50:28.287Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29768,str: "grow",num: 64737,date: new Date("2018-09-06T05:17:10.943Z"),array: [43758,"Personal Loan Account Direct",{_id: 29769,str: "system",date: new Date("2018-09-06T14:00:56.191Z"),array: []},{_id: 29770,str: "synthesize",num: 24814,date: new Date("2018-09-06T19:10:52.845Z"),array: [75613],obj: {_id: 29771,str: "Plastic Solutions",num: 20655,obj: {}}},new Date("2018-09-05T20:06:04.051Z"),[],{_id: 29772,str: "Pakistan Rupee experiences Florida",date: new Date("2018-09-05T20:02:52.676Z"),obj: {}},"New Jersey Steel",new Date("2018-09-06T01:37:11.308Z"),new Date("2018-09-06T03:07:23.737Z"),10538,new Date("2018-09-06T16:55:34.234Z")]});
    },

    function(coll) {
        return coll.insert({_id: 29773,str: "whiteboard",num: 60693,date: new Date("2018-09-06T03:14:40.990Z"),array: [new Date("2018-09-05T22:29:08.149Z"),"communities Manager","Oklahoma Assistant definition",{_id: 29774,date: new Date("2018-09-06T18:17:24.082Z"),obj: {}},56576,"morph",new Date("2018-09-06T02:42:55.223Z"),68318,"Small Cotton Shoes Analyst virtual",new Date("2018-09-06T07:18:12.974Z"),[],new Date("2018-09-06T18:21:15.866Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29775,str: "Frozen Avon Personal Loan Account",num: 33088,date: new Date("2018-09-06T19:44:14.115Z"),array: [3109,new Date("2018-09-06T19:00:42.308Z"),"empowering transmitter systems",71811,new Date("2018-09-05T23:21:29.014Z"),"Kentucky",new Date("2018-09-06T12:08:33.603Z"),74743,"PNG grey",24119],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29776,num: 44281,date: new Date("2018-09-06T02:51:05.691Z"),array: [],obj: {_id: 29777,str: "overriding",num: 3045,date: new Date("2018-09-06T06:12:55.195Z"),array: ["pink Books",[],"application Metrics",65775,87584,"Salad",new Date("2018-09-05T22:24:46.238Z"),new Date("2018-09-06T16:51:10.374Z"),new Date("2018-09-06T04:31:46.601Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29778,str: "payment",num: 16767,date: new Date("2018-09-06T07:45:40.835Z"),array: [],obj: {_id: 29779,str: "bleeding-edge",date: new Date("2018-09-06T05:40:08.718Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29780,str: "transmitting National",num: 9927,date: new Date("2018-09-06T06:23:40.288Z"),array: [new Date("2018-09-06T07:36:44.065Z"),new Date("2018-09-05T21:05:38.453Z"),{_id: 29781,str: "application",num: 65536,date: new Date("2018-09-06T16:29:54.091Z"),array: ["Incredible monitor",50600,"Granite Hat Architect",88488],obj: {}},2740,"Gloves",[],new Date("2018-09-06T03:57:58.035Z"),new Date("2018-09-06T01:35:17.197Z")],obj: {_id: 29782,str: "Buckinghamshire",num: 79011,date: new Date("2018-09-05T22:05:25.020Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29783,num: 24152,date: new Date("2018-09-06T06:04:49.135Z"),array: ["Falls","Switchable",new Date("2018-09-06T09:53:34.263Z"),"open-source Liaison",new Date("2018-09-06T16:22:46.502Z"),new Date("2018-09-05T23:05:57.816Z"),{_id: 29784,str: "Small Auto Loan Account Arizona",date: new Date("2018-09-05T22:43:02.533Z"),array: [],obj: {}},22107],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29785,str: "bypass",num: 49838,date: new Date("2018-09-06T15:16:50.856Z"),array: [13177,new Date("2018-09-06T19:54:10.965Z"),new Date("2018-09-06T04:28:02.259Z"),"neutral",64946,["Table Handmade"],[],18391,new Date("2018-09-06T13:47:13.917Z"),{_id: 29786,str: "transmit Intelligent Concrete Computer",date: new Date("2018-09-05T20:09:39.809Z")},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29787,str: "Planner",num: 2559,array: [84136,new Date("2018-09-06T01:10:59.734Z"),"networks multi-byte","Auto Loan Account Tuvalu",new Date("2018-09-06T11:44:04.713Z"),"Research analyzer Analyst",new Date("2018-09-05T22:55:33.857Z"),58368,new Date("2018-09-06T11:56:38.649Z"),{_id: 29788,str: "azure",num: 66588,array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29789,str: "Music responsive",num: 78668,date: new Date("2018-09-06T03:04:49.699Z"),array: [64675,"Unbranded","technologies calculating",new Date("2018-09-06T17:54:27.901Z"),13111,"Dynamic",[[],new Date("2018-09-06T15:45:30.453Z")],78984,{_id: 29790,str: "Sleek interfaces payment",num: 63175,array: [],obj: {_id: 29791,str: "multi-byte Avon",num: 82252,date: new Date("2018-09-06T07:31:43.603Z"),array: [],obj: {}}},"Clothing",[new Date("2018-09-06T18:20:28.921Z"),41301,{_id: 29792,str: "Awesome facilitate Checking Account",num: 8402,date: new Date("2018-09-06T00:36:00.984Z"),obj: {}},{_id: 29793,str: "deposit AGP",date: new Date("2018-09-06T09:58:38.976Z"),array: []}],{_id: 29794,num: 59777,date: new Date("2018-09-06T13:45:06.700Z"),obj: {_id: 29795,num: 75905,array: [83062,new Date("2018-09-06T11:08:27.228Z")],obj: {}}},new Date("2018-09-05T22:01:36.983Z")]});
    },

    function(coll) {
        return coll.insert({_id: 29796,num: 69523,date: new Date("2018-09-06T11:33:17.023Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29797,str: "viral Computer Lead",date: new Date("2018-09-06T09:44:31.383Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29798,str: "invoice deposit Table",num: 79251,date: new Date("2018-09-05T21:41:47.670Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29799,str: "Unbranded Metal Car",num: 90122,date: new Date("2018-09-05T23:43:52.385Z"),array: [],obj: {_id: 29800,str: "Customer",num: 94125,array: [60063,new Date("2018-09-05T23:49:08.670Z"),99412,[],"benchmark Cuban Peso Peso Convertible COM","Money Market Account",new Date("2018-09-06T09:42:39.655Z"),new Date("2018-09-06T02:05:39.808Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29801,num: 49223,date: new Date("2018-09-06T09:43:24.249Z"),array: [81654,"Liberian Dollar primary Accounts","Legacy Markets",new Date("2018-09-06T19:20:32.868Z"),25707,new Date("2018-09-06T04:00:02.090Z"),45787],obj: {_id: 29802,str: "Avon Keyboard",num: 8484,date: new Date("2018-09-06T09:57:48.887Z"),array: [],obj: {_id: 29803,str: "Borders exploit",num: 90878,date: new Date("2018-09-06T03:19:15.192Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 29804,str: "distributed ADP Orchestrator",num: 35308,date: new Date("2018-09-06T12:38:48.886Z"),array: [],obj: {_id: 29805,str: "Implementation e-enable",num: 29617,date: new Date("2018-09-05T23:49:03.873Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29806,str: "Hat Cotton",num: 35409,date: new Date("2018-09-06T03:50:10.606Z"),array: [],obj: {_id: 29807,str: "Club Borders Regional",num: 441,date: new Date("2018-09-06T09:04:58.962Z"),array: [new Date("2018-09-06T12:44:09.523Z"),"Savings Account Assistant Engineer",new Date("2018-09-06T14:48:52.426Z"),59916,{_id: 29808,str: "Streamlined",num: 18761,date: new Date("2018-09-06T04:45:54.273Z"),array: []},[[9526,"index",new Date("2018-09-06T01:12:07.899Z")]],new Date("2018-09-05T21:16:16.381Z"),"Home Loan Account Rubber Fish","Fresh Analyst",[70922],[],{_id: 29809,str: "deposit heuristic generate",num: 42561,array: [],obj: {}},"GB Progressive Customizable",19690],obj: {_id: 29810,str: "Pakistan Rupee Belarussian Ruble",num: 18607,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29811,str: "Brook New York",num: 72521,date: new Date("2018-09-05T21:18:42.650Z"),array: [10922,"SCSI",44598,4819,[new Date("2018-09-05T23:41:01.560Z"),new Date("2018-09-06T06:15:43.339Z")],new Date("2018-09-06T03:57:47.269Z"),"payment Technician","Coordinator",new Date("2018-09-06T19:10:17.700Z"),{_id: 29812,str: "Ergonomic Cotton Shirt",num: 39545,date: new Date("2018-09-06T14:57:07.552Z"),obj: {_id: 29813,str: "Zloty firewall Missouri",num: 67823,date: new Date("2018-09-06T16:43:30.883Z"),array: [],obj: {}}},{_id: 29814,str: "Metal Central African Republic",num: 5092,array: [],obj: {}},"cross-platform indexing azure","hack methodical strategic",64291]});
    },

    function(coll) {
        return coll.insert({_id: 29815,str: "Outdoors New Taiwan Dollar",num: 21220,date: new Date("2018-09-05T22:38:24.545Z"),array: [],obj: {_id: 29816,str: "Ball",num: 33569,date: new Date("2018-09-06T12:44:57.585Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29817,str: "quantify Generic Frozen Mouse",date: new Date("2018-09-06T18:11:17.595Z"),array: [44347,68309,new Date("2018-09-06T05:49:18.515Z"),new Date("2018-09-06T01:00:23.792Z"),"Anguilla Soft Swaziland",new Date("2018-09-06T18:27:44.042Z"),"Arkansas eco-centric benchmark",47605,{_id: 29818,str: "Industrial Extended",array: [],obj: {}}],obj: {_id: 29819,str: "Directives white",num: 30737,date: new Date("2018-09-06T01:34:37.148Z"),array: ["Plaza Colorado withdrawal",28952,[],"Refined Sleek",new Date("2018-09-05T20:15:05.790Z"),new Date("2018-09-05T20:40:10.505Z")],obj: {_id: 29820,num: 20304,date: new Date("2018-09-06T17:40:15.210Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 29821,str: "connect Hollow Integration",num: 57508,date: new Date("2018-09-06T15:14:53.854Z"),array: [{_id: 29822,str: "Soap productize Division",date: new Date("2018-09-06T17:04:49.249Z"),array: []},47307,95459,new Date("2018-09-05T22:48:53.271Z"),64508,[],"Dynamic",new Date("2018-09-05T20:58:12.903Z"),["Grocery Auto Loan Account"],{_id: 29823,str: "web-enabled Auto Loan Account flexibility",num: 57085,date: new Date("2018-09-06T13:23:21.593Z"),array: [],obj: {}},new Date("2018-09-05T20:38:29.817Z"),74968],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29824,str: "salmon",num: 70587,date: new Date("2018-09-06T05:57:03.639Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29825,str: "digital knowledge base action-items",num: 66539,date: new Date("2018-09-06T16:07:44.618Z"),array: [new Date("2018-09-06T12:30:54.631Z"),"Executive","Rubber Avon Cheese",61739,27588,[],20238,new Date("2018-09-06T11:30:03.709Z")],obj: {_id: 29826,str: "River withdrawal",num: 34936,array: [["multi-byte Seamless",51224,"Virginia",96530,new Date("2018-09-05T20:50:13.410Z")],{_id: 29827,str: "empowering Delaware",num: 78790,date: new Date("2018-09-06T19:15:45.313Z"),array: [],obj: {}},new Date("2018-09-06T08:27:53.200Z"),"extend Kuwaiti Dinar"]}});
    },

    function(coll) {
        return coll.insert({_id: 29828,str: "methodology",num: 90732,date: new Date("2018-09-06T15:06:31.601Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29829,str: "Frozen Afghani",date: new Date("2018-09-05T23:42:27.942Z"),array: [],obj: {_id: 29830,str: "Security",num: 82987,date: new Date("2018-09-06T09:07:58.974Z"),array: [new Date("2018-09-06T07:32:28.157Z"),"core",57334,new Date("2018-09-05T21:21:53.549Z"),97926,"Niue connecting",25626,"bi-directional GB",{_id: 29831,str: "payment Investor",num: 34347,array: ["Gorgeous Concrete Tuna global invoice",new Date("2018-09-06T01:54:00.949Z"),87278],obj: {}},[],new Date("2018-09-06T00:59:48.865Z"),new Date("2018-09-06T11:51:41.921Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29832,str: "JBOD",num: 36331,date: new Date("2018-09-06T04:06:20.980Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29833,str: "Operations",num: 69735,date: new Date("2018-09-06T14:58:03.494Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29834,str: "Focused Massachusetts",num: 83850,date: new Date("2018-09-06T03:24:33.241Z"),obj: {_id: 29835,str: "compressing Innovative Liaison",num: 19752,date: new Date("2018-09-06T01:09:39.671Z"),array: [],obj: {_id: 29836,num: 86092,date: new Date("2018-09-06T19:00:34.439Z"),array: [],obj: {_id: 29837,str: "Secured vortals Shirt",num: 3839,date: new Date("2018-09-06T05:08:39.595Z"),array: ["Costa Rican Colon Designer Afghani",new Date("2018-09-06T14:58:47.067Z"),91406,"Tuna","enterprise",[new Date("2018-09-06T11:29:50.515Z"),{_id: 29838,str: "Iranian Rial calculate Cotton",date: new Date("2018-09-05T20:01:23.238Z"),array: [],obj: {}},48301,[]],"Incredible Executive Assimilated",{_id: 29839,num: 54243,date: new Date("2018-09-06T07:45:29.655Z")},new Date("2018-09-06T06:56:23.095Z"),19376]}}}});
    },

    function(coll) {
        return coll.insert({_id: 29840,str: "Incredible Metal Chicken Cordoba Oro",num: 43707,date: new Date("2018-09-05T23:03:43.128Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29841,str: "Web",num: 53191,date: new Date("2018-09-06T16:52:01.581Z"),array: [29255,new Date("2018-09-06T02:43:18.686Z"),{_id: 29842,str: "Principal",num: 55109,date: new Date("2018-09-06T02:03:46.835Z"),array: [],obj: {_id: 29843,str: "primary Buckinghamshire knowledge user",num: 68572,date: new Date("2018-09-06T01:22:01.287Z"),array: ["Wyoming"]}},2509,"database Berkshire","Investment Account Product European Monetary Unit (E.M.U.-6)",new Date("2018-09-06T03:50:35.458Z"),72960,14271,{_id: 29844,str: "Nevada Buckinghamshire executive",date: new Date("2018-09-06T03:36:17.717Z"),array: [],obj: {_id: 29845,num: 15873,date: new Date("2018-09-06T10:13:26.355Z"),array: [],obj: {_id: 29846,str: "seamless iterate",date: new Date("2018-09-06T01:10:56.863Z")}}}]});
    },

    function(coll) {
        return coll.insert({_id: 29847,str: "neutral Frozen",num: 4492,date: new Date("2018-09-06T02:41:51.055Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29848,str: "engineer Kuwaiti Dinar",date: new Date("2018-09-06T05:05:17.285Z"),array: ["Legacy e-tailers Directives",81436,[],new Date("2018-09-06T01:53:26.599Z"),new Date("2018-09-06T02:44:56.162Z"),{_id: 29849,str: "grey Extended pricing structure",num: 5918,date: new Date("2018-09-06T02:32:41.477Z"),array: [new Date("2018-09-05T22:40:17.815Z"),"XML Polarised",74626,"Lesotho Dynamic National"],obj: {}},21255,"Granite Director",[],{_id: 29850,str: "Metal payment enhance",num: 87233,array: [],obj: {_id: 29851,str: "Prairie",num: 53773,date: new Date("2018-09-06T17:44:57.347Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29852,str: "Cotton Ball",num: 15338,date: new Date("2018-09-06T04:04:33.538Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29853,str: "Marketing",num: 19504,date: new Date("2018-09-06T10:00:14.734Z"),array: [],obj: {_id: 29854,str: "synthesizing Soft Buckinghamshire",num: 92284,array: [new Date("2018-09-05T21:03:45.416Z"),"generate",15025,"Refined Frozen Bike networks Chicken",new Date("2018-09-06T17:52:53.213Z"),new Date("2018-09-05T20:28:54.736Z"),56380,{_id: 29855,str: "bottom-line",num: 81609,date: new Date("2018-09-06T12:46:47.946Z"),array: [10788,"Grocery"],obj: {_id: 29856,str: "back up",date: new Date("2018-09-06T14:20:35.603Z")}},[],{_id: 29857,num: 35275,date: new Date("2018-09-06T17:43:26.729Z"),array: [],obj: {}},79820,{_id: 29858,str: "input Generic firewall",num: 45977,array: [new Date("2018-09-06T03:54:06.942Z"),["Credit Card Account multi-byte"]]},"Wooden enable Berkshire"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29859,str: "analyzing distributed matrix",num: 27133,obj: {_id: 29860,str: "Money Market Account Kansas",num: 32497,date: new Date("2018-09-05T23:57:32.802Z"),array: [],obj: {_id: 29861,num: 16622,date: new Date("2018-09-06T09:57:22.016Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 29862,str: "incubate grey",num: 4426,date: new Date("2018-09-05T23:46:26.629Z"),array: [86259,13797,"protocol",new Date("2018-09-06T01:23:05.447Z"),[],"salmon",new Date("2018-09-06T11:23:21.512Z"),new Date("2018-09-06T11:00:25.174Z"),{_id: 29863,str: "Azerbaijanian Manat Colorado",num: 14584,date: new Date("2018-09-06T10:55:03.556Z"),obj: {}},"transition",{_id: 29864,str: "Danish Krone Sleek Rubber Computer",num: 82586,array: [664,2741]},new Date("2018-09-05T20:51:05.058Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29865,str: "payment calculating Rubber",num: 94634,date: new Date("2018-09-06T16:50:40.582Z"),array: [],obj: {_id: 29866,str: "Syrian Pound Strategist SSL",num: 68908,obj: {_id: 29867,str: "B2B",num: 31214,date: new Date("2018-09-06T07:29:24.220Z"),array: [new Date("2018-09-06T19:03:22.450Z"),"payment e-business",new Date("2018-09-06T14:01:21.669Z"),16417,[51405,"input vortals"],"deposit Face to face Program","payment","matrices Strategist",new Date("2018-09-06T10:52:04.796Z"),94434,[80399],{_id: 29868,str: "Technician Checking Account Brand",num: 92414,date: new Date("2018-09-06T08:33:24.883Z"),obj: {}},{_id: 29869,str: "Small Metal Pants",date: new Date("2018-09-06T07:49:59.936Z"),array: []}]}}});
    },

    function(coll) {
        return coll.insert({_id: 29870,str: "Down-sized",num: 19364,date: new Date("2018-09-05T21:43:29.259Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29871,str: "Integration",num: 80761,date: new Date("2018-09-06T02:39:22.718Z"),array: ["revolutionize Kiribati",new Date("2018-09-06T02:26:29.730Z"),"withdrawal","Investment Account Games Steel","invoice Texas",new Date("2018-09-06T17:42:52.732Z"),13958,91297,18208],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29872,num: 18993,date: new Date("2018-09-05T23:02:30.373Z"),array: [new Date("2018-09-06T08:12:51.809Z"),[],[{_id: 29873,str: "Auto Loan Account sensor Investment Account",num: 88427,date: new Date("2018-09-06T06:17:50.531Z"),array: ["Maine Pines intuitive"],obj: {_id: 29874,str: "Falkland Islands Pound sexy Corner",num: 90346,date: new Date("2018-09-05T22:49:33.846Z"),array: [99253,78404],obj: {}}},new Date("2018-09-06T17:31:31.651Z"),46758],[],"cross-platform Unions",86349,new Date("2018-09-06T16:04:27.265Z"),{_id: 29875,num: 43097,date: new Date("2018-09-06T10:48:45.215Z"),array: []},"bus withdrawal compress",22109],obj: {_id: 29876,str: "Bacon copying",date: new Date("2018-09-06T09:49:11.557Z"),array: [new Date("2018-09-06T16:05:16.774Z"),10244]}});
    },

    function(coll) {
        return coll.insert({_id: 29877,str: "Programmable Grenada Games",num: 11174,date: new Date("2018-09-06T10:27:34.613Z"),array: [new Date("2018-09-06T14:51:49.781Z"),{_id: 29878,num: 27778,date: new Date("2018-09-06T05:35:34.490Z"),array: [],obj: {}},67758,new Date("2018-09-06T07:48:56.111Z"),"Home Loan Account quantify",new Date("2018-09-06T01:11:32.285Z"),new Date("2018-09-05T23:10:48.692Z"),32017,[{_id: 29879,num: 71089,array: []},"navigating Fresh transmitting",{_id: 29880,str: "multi-byte Coordinator",num: 71952,date: new Date("2018-09-06T01:33:22.893Z"),obj: {_id: 29881,str: "capacitor RAM haptic",num: 88009,date: new Date("2018-09-06T09:07:04.041Z"),obj: {}}}],"Specialist optical",{_id: 29882,date: new Date("2018-09-06T13:28:20.124Z"),array: []},18238],obj: {_id: 29883,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29884,str: "benchmark Bedfordshire Trail",num: 93711,date: new Date("2018-09-05T21:43:00.248Z"),array: [97872,new Date("2018-09-06T03:20:48.113Z"),7150,"Refined",[],new Date("2018-09-06T12:24:22.593Z"),16299,"Concrete deposit Profound","Health mint green",{_id: 29885,str: "Colorado sensor Licensed",num: 64196,date: new Date("2018-09-06T06:33:28.114Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29886,str: "generating portals",num: 39564,date: new Date("2018-09-06T11:27:01.768Z"),array: [],obj: {_id: 29887,str: "Cambridgeshire Central contextually-based",num: 62627,date: new Date("2018-09-06T09:02:14.125Z"),array: [new Date("2018-09-06T00:59:26.613Z"),"viral Sleek",{_id: 29888,date: new Date("2018-09-06T18:36:36.826Z"),obj: {_id: 29889,str: "Terrace",date: new Date("2018-09-06T05:37:31.334Z")}},new Date("2018-09-06T06:20:49.768Z"),{_id: 29890,str: "Georgia JSON Administrator",num: 33056,array: [],obj: {}},new Date("2018-09-06T11:56:58.240Z"),new Date("2018-09-06T14:38:30.468Z"),67625,"Montana Spain program"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29891,str: "killer",num: 44395,date: new Date("2018-09-06T05:59:45.616Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29892,date: new Date("2018-09-06T19:11:36.549Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29893,str: "Ergonomic Rubber Chicken Generic Tennessee",num: 97094,date: new Date("2018-09-06T10:13:33.462Z"),array: [66295,new Date("2018-09-06T10:12:03.032Z"),"Michigan",new Date("2018-09-06T16:25:05.507Z"),87954,"Savings Account",new Date("2018-09-06T14:06:13.498Z"),34605,32079,"card",57576,{_id: 29894,str: "Licensed South Dakota Integrated",num: 90793,date: new Date("2018-09-06T07:50:59.597Z"),array: [],obj: {_id: 29895,num: 82773,date: new Date("2018-09-06T19:27:49.881Z"),array: [[{_id: 29896,str: "non-volatile Croatian Kuna tan",date: new Date("2018-09-06T13:14:56.889Z"),array: [],obj: {}}],"Configuration FTP mindshare"],obj: {}}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 29897,str: "Generic Concrete Shirt",num: 70612,date: new Date("2018-09-05T23:06:35.916Z"),array: [],obj: {_id: 29898,str: "robust bandwidth",num: 72313,date: new Date("2018-09-05T22:09:49.481Z"),array: [[[{_id: 29899,str: "Clothing",num: 63872,date: new Date("2018-09-06T16:42:03.231Z"),array: [],obj: {_id: 29900,str: "Yen Producer Wooden",date: new Date("2018-09-06T02:36:41.988Z")}},"asynchronous"],3898,{_id: 29901,num: 45143,date: new Date("2018-09-06T05:23:07.797Z"),array: [new Date("2018-09-06T18:50:58.375Z")]},new Date("2018-09-06T03:00:02.275Z"),new Date("2018-09-06T18:38:36.438Z")],50770,[],"Station Specialist",21052,new Date("2018-09-06T12:02:42.037Z"),"maroon","concept",new Date("2018-09-06T03:07:01.333Z"),60292,37845],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29902,str: "generating Plastic drive",num: 30854,date: new Date("2018-09-06T10:49:47.874Z"),array: [new Date("2018-09-06T10:59:01.975Z"),{_id: 29903,str: "RAM",num: 10635,date: new Date("2018-09-06T04:21:25.722Z"),array: [],obj: {}},58084,"bandwidth Indiana port",[new Date("2018-09-06T11:36:31.056Z")],[],"withdrawal withdrawal",2286,10571,"quantifying implement",52849,new Date("2018-09-06T09:44:55.253Z"),"Shoes",{_id: 29904,date: new Date("2018-09-05T22:15:05.313Z"),array: ["Movies out-of-the-box","Gorgeous Investment Account cross-platform"]}],obj: {_id: 29905,str: "Personal Loan Account",num: 2524,date: new Date("2018-09-06T06:31:48.821Z"),array: [new Date("2018-09-06T17:57:00.806Z")],obj: {_id: 29906,str: "Berkshire Home payment",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29907,str: "Administrator Belize Dollar",num: 59355,date: new Date("2018-09-06T15:15:24.319Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29908,str: "Keyboard",num: 51976,date: new Date("2018-09-06T06:00:52.528Z"),array: [{_id: 29909,str: "frame",num: 72751,date: new Date("2018-09-06T07:19:14.475Z"),array: [new Date("2018-09-06T06:35:45.145Z"),36517],obj: {}},"digital","Internal Colombian Peso Unidad de Valor Real hacking","Fantastic","cutting-edge seize",[],new Date("2018-09-06T15:34:11.299Z"),"Senior Intelligent Liaison",35336,[],76563],obj: {_id: 29910,str: "compressing",num: 506,date: new Date("2018-09-06T16:32:05.200Z"),array: [{_id: 29911,str: "Junction",num: 13177}],obj: {_id: 29912,str: "Fresh",num: 59879,date: new Date("2018-09-06T10:34:07.330Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29913,num: 4670,date: new Date("2018-09-06T06:43:25.165Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29914,str: "olive Corporate",num: 94829,date: new Date("2018-09-06T17:32:51.871Z"),array: [81928,28871,new Date("2018-09-06T08:23:23.696Z"),new Date("2018-09-05T23:42:20.810Z"),new Date("2018-09-06T04:00:35.472Z"),["Engineer",new Date("2018-09-05T21:01:31.124Z"),"Savings Account",16081],"Mayotte",55802,new Date("2018-09-05T22:48:38.190Z"),{_id: 29915,str: "payment Corporate Pizza",num: 27386,array: []}],obj: {_id: 29916,str: "Cambridgeshire Handmade",date: new Date("2018-09-06T17:59:34.843Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 29917,str: "interface bus Pa'anga",num: 37469,date: new Date("2018-09-06T06:32:01.021Z"),array: ["directional",new Date("2018-09-06T00:53:42.079Z"),{_id: 29918,str: "Rustic Granite Cheese",num: 31785,date: new Date("2018-09-06T13:11:16.736Z"),array: [],obj: {}},{_id: 29919,str: "Team-oriented Granite Monaco",num: 62761,array: [],obj: {_id: 29920,str: "synergies tan infomediaries",num: 42821,date: new Date("2018-09-06T16:13:05.105Z"),obj: {}}},"Synergistic redundant",95640,11746,new Date("2018-09-05T23:28:40.571Z"),["input tan","B2C Frozen",new Date("2018-09-06T17:29:24.608Z")],4512,73240,[]]});
    },

    function(coll) {
        return coll.insert({_id: 29921,str: "tan Computers Coordinator",num: 90872,date: new Date("2018-09-06T13:01:41.571Z"),array: [{_id: 29922,str: "Unbranded Lithuanian Litas Generic Soft Hat",num: 13366,date: new Date("2018-09-06T17:17:26.026Z"),array: [],obj: {}},new Date("2018-09-06T02:12:21.443Z"),new Date("2018-09-06T12:49:12.426Z"),8296,"archive Unbranded Metal Cheese",new Date("2018-09-06T18:48:24.734Z"),"Versatile lime",2512,new Date("2018-09-06T18:38:35.062Z"),26118],obj: {_id: 29923,str: "Identity Producer Generic Metal Tuna",num: 59789,date: new Date("2018-09-06T13:03:12.790Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29924,str: "circuit Cambridgeshire Bedfordshire",num: 17934,date: new Date("2018-09-06T07:33:43.377Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29925,str: "Points",num: 86263,date: new Date("2018-09-06T16:43:42.997Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29926,num: 9555,date: new Date("2018-09-06T15:06:20.984Z"),array: ["Haven capacitor",79255,new Date("2018-09-06T09:15:08.867Z"),[],45435,{_id: 29927,str: "matrix",num: 83778,date: new Date("2018-09-06T19:44:52.590Z"),array: [],obj: {}},new Date("2018-09-06T16:15:29.841Z"),"Analyst Grocery",[71896],7290,new Date("2018-09-06T05:19:46.943Z")],obj: {_id: 29928,str: "Advanced transmit",num: 74696,obj: {_id: 29929,str: "Tasty Wooden Keyboard New Mexico",date: new Date("2018-09-06T07:02:27.618Z"),array: [],obj: {_id: 29930,str: "Consultant Reactive compress",num: 64373,date: new Date("2018-09-06T03:08:41.964Z"),array: [new Date("2018-09-06T06:05:31.252Z"),new Date("2018-09-05T21:58:32.914Z"),{_id: 29931,num: 17772,date: new Date("2018-09-06T14:22:53.192Z")},"Awesome Cotton Chips"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 29932,str: "capacitor transmitting Chief",num: 90064,date: new Date("2018-09-05T23:15:17.396Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29933,str: "Pants Groves Practical Concrete Cheese",date: new Date("2018-09-06T19:00:15.579Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29934,str: "deposit streamline",date: new Date("2018-09-05T20:05:01.462Z"),array: [],obj: {_id: 29935,str: "deposit Automotive Gorgeous",num: 47734,date: new Date("2018-09-05T23:40:03.860Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29936,str: "withdrawal",num: 44202,array: [],obj: {_id: 29937,str: "Oklahoma mission-critical",num: 93779,date: new Date("2018-09-06T07:04:05.678Z"),array: [new Date("2018-09-06T00:11:39.676Z"),89847,48044,"microchip","optical Unbranded calculate",[],{_id: 29938,num: 27724,date: new Date("2018-09-06T14:10:00.839Z"),array: [22516,new Date("2018-09-06T18:06:01.628Z"),{_id: 29939,date: new Date("2018-09-05T22:33:47.781Z"),array: ["Branding Handcrafted Rubber Chair",[],43028,{_id: 29940,num: 40755,array: [],obj: {}},85168],obj: {}}],obj: {_id: 29941,str: "Plains",num: 38820,date: new Date("2018-09-06T15:54:16.696Z"),obj: {}}},new Date("2018-09-06T06:21:45.208Z"),new Date("2018-09-06T01:28:22.227Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 29942,str: "Pakistan Operations Borders",num: 44330,date: new Date("2018-09-06T10:47:12.324Z"),array: [],obj: {_id: 29943,str: "National Centralized",array: [],obj: {_id: 29944,str: "Ford Guinea Franc",num: 3536,date: new Date("2018-09-06T05:35:53.825Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29945,str: "system Intranet Namibia",num: 92883,array: ["full-range South Carolina",{_id: 29946,str: "primary program",date: new Date("2018-09-06T04:01:17.488Z"),array: ["Sports"],obj: {}},5706,new Date("2018-09-06T19:02:36.837Z"),new Date("2018-09-06T12:11:21.834Z"),"deposit Cheese Mississippi",73133,new Date("2018-09-06T13:37:15.219Z"),[new Date("2018-09-06T02:15:01.738Z"),93071,new Date("2018-09-06T12:26:37.844Z"),"Hong Kong Designer"],"Open-source",[]]});
    },

    function(coll) {
        return coll.insert({_id: 29947,str: "Checking Account",num: 80768,date: new Date("2018-09-06T03:44:48.363Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29948,num: 55945,date: new Date("2018-09-06T14:18:50.435Z"),array: [new Date("2018-09-06T18:27:59.966Z"),73660,{_id: 29949,str: "application Fish",num: 24586,date: new Date("2018-09-06T02:41:16.659Z"),array: [42832,20459,"Solomon Islands"],obj: {}},"Senior Incredible Rubber Shoes",new Date("2018-09-06T04:26:25.375Z"),"enterprise Florida",new Date("2018-09-06T11:28:52.690Z"),new Date("2018-09-06T19:24:20.878Z"),"Borders","Philippine Peso Auto Loan Account Licensed Rubber Cheese"],obj: {_id: 29950,str: "Tuna sticky",num: 80096,date: new Date("2018-09-06T13:37:48.232Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29951,str: "Liaison hacking national",num: 38997,date: new Date("2018-09-06T01:15:01.450Z"),array: [],obj: {_id: 29952,str: "programming Product",num: 59001,date: new Date("2018-09-06T16:57:18.317Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29953,str: "Granite microchip",num: 62039,date: new Date("2018-09-06T14:26:07.514Z"),array: [99606,new Date("2018-09-06T06:08:27.815Z"),new Date("2018-09-06T15:39:17.632Z"),51172,{_id: 29954,str: "Steel turn-key Cheese",num: 62873,date: new Date("2018-09-06T18:36:55.119Z"),obj: {_id: 29955,str: "bluetooth platforms"}},"Chief","input",[],17911,84427,"e-markets teal wireless",new Date("2018-09-06T16:29:47.881Z"),{_id: 29956,num: 29549,date: new Date("2018-09-06T01:22:40.110Z"),array: [[]],obj: {}},[]],obj: {_id: 29957,str: "disintermediate",date: new Date("2018-09-06T12:49:47.522Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29958,str: "Auto Loan Account",num: 99398,date: new Date("2018-09-06T18:30:57.983Z"),array: [],obj: {_id: 29959,str: "front-end eyeballs port",num: 86607,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29960,str: "orchid Intelligent Wooden Bacon Money Market Account",num: 62389,date: new Date("2018-09-05T19:58:47.801Z"),array: [23958,"Arizona transmitting",66716,new Date("2018-09-06T11:00:32.091Z"),[],new Date("2018-09-06T17:01:49.511Z"),{_id: 29961,str: "Computers channels",num: 91319,array: ["Identity Bacon Isle",new Date("2018-09-06T14:10:58.169Z"),[]],obj: {}},67550,81209,{_id: 29962,str: "CFA Franc BEAC",num: 53048,date: new Date("2018-09-06T07:23:46.887Z"),array: [],obj: {_id: 29963,str: "Bedfordshire Interactions visualize",num: 25743,date: new Date("2018-09-06T04:58:26.030Z"),array: [],obj: {}}},[35459,"deposit Utah Auto Loan Account"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29964,str: "Granite utilize",num: 6818,date: new Date("2018-09-06T12:35:30.750Z"),array: ["e-enable productize",new Date("2018-09-06T11:00:15.644Z"),8944,1890,"Lao People's Democratic Republic Credit Card Account architectures",new Date("2018-09-06T16:52:04.893Z"),"PCI fuchsia index","Ethiopian Birr deploy",[],[new Date("2018-09-06T18:34:25.315Z"),{_id: 29965,str: "haptic Planner",date: new Date("2018-09-05T22:49:54.715Z"),array: [],obj: {_id: 29966,num: 66445,date: new Date("2018-09-06T11:46:35.919Z"),array: [],obj: {}}},new Date("2018-09-05T23:55:50.253Z")],25932,76541,"cyan back-end Senior"],obj: {_id: 29967,str: "Syrian Pound e-markets New York",num: 27643}});
    },

    function(coll) {
        return coll.insert({_id: 29968,str: "monitor deposit",num: 44511,date: new Date("2018-09-06T18:32:16.751Z"),array: [],obj: {_id: 29969,num: 1684,date: new Date("2018-09-06T07:47:39.168Z"),array: [79118,16346,"unleash program","matrix South Georgia and the South Sandwich Islands",new Date("2018-09-06T06:42:07.641Z"),[],new Date("2018-09-06T08:04:19.052Z"),"redundant",new Date("2018-09-05T23:22:50.549Z"),10606,"Exclusive Interactions"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29970,str: "Auto Loan Account Utah Fantastic Concrete Soap",num: 15178,date: new Date("2018-09-06T15:41:12.679Z"),array: ["Group monetize",26689,new Date("2018-09-06T14:49:02.541Z"),new Date("2018-09-06T08:07:35.870Z"),new Date("2018-09-05T20:03:49.189Z"),[],"Multi-layered Manager Bedfordshire","Massachusetts","Principal",52594,81545,new Date("2018-09-06T10:30:19.641Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29971,str: "intermediate copy seize",num: 13844,date: new Date("2018-09-05T23:46:02.728Z")});
    },

    function(coll) {
        return coll.insert({_id: 29972,str: "Belarussian Ruble Strategist",num: 36624,date: new Date("2018-09-05T21:05:09.000Z"),array: [],obj: {_id: 29973,num: 50663,date: new Date("2018-09-06T16:53:40.129Z"),array: ["indigo partnerships Intelligent",32104,new Date("2018-09-06T10:40:07.468Z"),"Alabama",3375,"Dominican Peso Quality Western Sahara",[],new Date("2018-09-06T19:42:09.339Z"),98199,["Valley connecting International",new Date("2018-09-05T22:46:59.063Z")],{_id: 29974,str: "Licensed Granite Keyboard",num: 79131,date: new Date("2018-09-06T16:14:04.258Z"),array: [],obj: {_id: 29975,num: 40162}},new Date("2018-09-05T22:06:45.429Z"),"Hungary Bedfordshire",new Date("2018-09-06T00:18:27.257Z"),84388],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29976,str: "Devolved engineer",num: 12161,array: [32441,1617,new Date("2018-09-06T16:56:48.237Z"),"Tasty",new Date("2018-09-05T21:47:25.110Z"),9542,[],"bandwidth","Guyana microchip",new Date("2018-09-06T07:54:19.234Z"),["Steel Maryland Technician",new Date("2018-09-06T11:01:59.932Z"),"array Principal 4th generation"]],obj: {_id: 29977,str: "Security instruction set Dynamic",date: new Date("2018-09-06T07:04:55.783Z"),array: [],obj: {_id: 29978,str: "Tasty Wooden Keyboard",num: 535,date: new Date("2018-09-06T10:04:09.095Z"),array: [],obj: {_id: 29979,date: new Date("2018-09-06T06:46:16.968Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 29980,str: "digital Liberian Dollar",num: 77503,date: new Date("2018-09-06T08:32:52.913Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29981,str: "users Facilitator",num: 43328,date: new Date("2018-09-06T05:36:25.223Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29982,str: "disintermediate capacitor Directives",num: 18586,date: new Date("2018-09-06T10:30:53.131Z"),array: [new Date("2018-09-06T04:55:37.010Z"),23901,{_id: 29983,str: "invoice Avon",num: 24104,date: new Date("2018-09-05T22:29:08.678Z"),obj: {}},[],"copy New Taiwan Dollar EXE",48500,{_id: 29984,str: "Montana Tasty Granite Chair",num: 1968,date: new Date("2018-09-05T22:38:16.271Z"),array: [],obj: {}},45224,new Date("2018-09-05T21:56:57.717Z"),"Savings Account","Frozen",[]],obj: {_id: 29985,str: "pricing structure",date: new Date("2018-09-06T18:18:02.197Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29986,num: 65231,date: new Date("2018-09-06T09:43:07.861Z"),array: [new Date("2018-09-06T14:56:08.759Z"),"Kansas indigo",97045,{_id: 29987,str: "payment programming",num: 52492,date: new Date("2018-09-06T00:54:10.841Z"),array: [],obj: {}},new Date("2018-09-05T20:47:13.283Z"),2134,{_id: 29988,str: "Steel",num: 62912,date: new Date("2018-09-06T17:05:39.697Z"),array: [],obj: {_id: 29989,str: "Hawaii Borders front-end",num: 32499,date: new Date("2018-09-06T00:09:48.830Z"),array: [22428,"Missouri HTTP",new Date("2018-09-06T07:51:01.104Z"),[]]}},["Philippine Peso Open-architected didactic",78919,new Date("2018-09-06T05:20:27.394Z")],47560,"Industrial Salad Stand-alone"]});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.str": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.str',6,8] }],41421] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Movies",{ $toString: { $substrBytes: [{ $concat: ['$obj.str',"sky blue","sensor Tasty orchestrate"] },11,0] } }],79852] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[56399],{ $pow: ['$num',63898] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $millesecond: { $year: { $toDate: { $arrayElemAt: [[{ $substr: ['$str',9,18] }],'$obj.num'] } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromString: {dateString: "2018-09-05T21:53:41.383Z",format: "%U-%H-%z-%u-%d-%z-%G-%Y-%M",onError: { $range: [15,7,7] },onNull: { $arrayToObject: [[]] }} } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: {date: '$obj.date',format: "%M-%M-%V-%j",onNull: { $arrayElemAt: [["Coordinator Indonesia",{ $trim: { input: { $substrBytes: ["invoice intranet",5,10] } } },{ $substrCP: ["Forward recontextualize Future",18,15] },"Implementation client-driven Fork"],64632] }} } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Pike zero administration Fresh",{ $toUpper: '$obj.str' },"Soft"],cond: { $gt: [{ $week: { $dateFromParts: {isoWeekYear: { $exp: 25818 },hour: { $log10: 74172 },minute: { $abs: '$obj.num' },second: { $multiply: [] },millisecond: { $floor: 78963 },timezone: "US/Indiana-Starke"} } },{ $arrayElemAt: [[],'$num'] }] }} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $range: [15,17] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.obj.str',15,13] },"bricks-and-clicks capability Berkshire"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: { input: "client-server" } }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromParts: {year: { $trunc: 14592 },day: { $ln: { $sqrt: 31970 } },second: { $cmp: [{ $arrayElemAt: [['$obj.obj.str'],9442] },{ $arrayToObject: [[[],['$obj.obj.num','$obj.obj.num'],[],[96611,4124]]] }] },millisecond: { $trunc: '$num' },timezone: "Asia/Shanghai"} } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'howard',cond: { $ne: [{ $arrayElemAt: [[],24351] },{ $concatArrays: [[],[94575,'$obj.obj.obj.num',7036],["primary Investment Account"],['$$howard']] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "leverage",v: { $indexOfArray: [{ $range: [9,14,4] },{ $filter: {input: ['$str'],cond: { $or: [] }} },6,3] }},{k: "plum Cambridgeshire",v: "Money Market Account Upgradable"}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "synthesizing Savings Account Lead" }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrBytes: ['$str',8,11] }] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $toUpper: "FTP mobile Awesome Granite Chicken" } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.str',chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $year: { $hour: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $exp: '$obj.num' },hour: { $cmp: [{ $arrayElemAt: [[],67267] },{ $zip: {inputs: [['$obj.num',83688],['$obj.obj.str','$obj.str'],[{ $substr: ['$str',17,16] },"Rustic"]],defaults: ["generating",[]]} }] },minute: { $indexOfArray: [{ $concatArrays: [] },{ $arrayElemAt: [[{ $rtrim: { input: "Generic Agent Security" } }],'$obj.obj.obj.num'] },12,4] }} },timezone: "America/Dawson",iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "bandwidth Car",chars: "panel Philippines Beauty"} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfWeek: { $dateToParts: {date: { $dayOfMonth: { $dayOfWeek: { $isoDayOfWeek: { $dayOfMonth: '$obj.obj.date' } } } },timezone: "America/Argentina/Salta"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["pixel",{ $substrBytes: ["withdrawal Web Applications",11,7] }],['$num','$obj.num',12293]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Metal Fantastic Cotton Chicken parse"]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.str',chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $concat: ["Forward Wooden web services",{ $substrCP: ['$obj.obj.str',1,20] }] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $ceil: 17145 },'$num'],[],[{ $substr: ["Generic",6,0] }],['$obj.obj.str',{ $toString: { $substrCP: [{ $toLower: { $rtrim: { input: '$obj.str' } } },5,16] } },'$str']],useLongestLength: false,defaults: [{ array: [[/transmitter|Cyprus/],65863,[]] },new Date("2018-09-06T13:47:45.463Z")]} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],95903] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',9,2] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.num'],[],["Investment Account interface","XSS Marshall Islands"]],defaults: ["copying Front-line solutions"]} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: {date: { $isoWeekYear: { $year: { $dateFromString: {dateString: "2018-09-05T21:42:39.507Z",timezone: "Australia/Yancowinna",onError: { $arrayToObject: [[{k: "Refined Plastic Sausages",v: '$date'}]] }} } } },timezone: "Asia/Aqtau",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromString: {dateString: "2018-09-06T05:49:54.220Z",timezone: "Africa/Nouakchott"} } }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',12,12] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T10:30:50.759Z",timezone: "Europe/Istanbul",onError: { $objectToArray: '$obj.obj.obj.obj' },onNull: { $dateToString: {date: { $dateToParts: {date: { $dateFromParts: {year: { $exp: '$obj.num' },month: { $pow: [27814,12777] },hour: { $log10: '$num' },millisecond: { $log10: '$obj.num' }} },timezone: "Africa/Ndjamena",iso8601: true} },format: "%L-%%-%M-%%-%%-%G-%m-%w-%L-%G-%w",onNull: '$obj.str'} }} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "copy",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoDayOfWeek: { $toDate: { $toString: { $isoWeek: { $millesecond: { $isoWeekYear: { $dayOfWeek: { $isoDayOfWeek: { $isoWeekYear: { $week: { $dateToString: {date: new Date("2018-09-05T22:29:06.905Z"),format: "%u-%G-%M-%Y",timezone: "Africa/Asmara"} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $minute: { $second: { $isoWeek: { $millesecond: { $month: { $dateToParts: {date: { $month: { $isoWeekYear: { $dateToString: {date: { $dayOfYear: { $isoDayOfWeek: { $second: '$obj.obj.date' } } },format: "%H-%z-%m-%H-%Y-%z-%u-%z-%m-%S-%V-%V",onNull: { $rtrim: {input: { $substrCP: ["generating grid-enabled",3,13] },chars: { $ltrim: { input: '$obj.obj.obj.str' } }} }} } } },timezone: "America/Santo_Domingo"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $month: { $millesecond: { $dayOfWeek: { $month: { $dateToParts: {date: { $second: { $isoDayOfWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T09:24:58.453Z",format: "%z-%w-%w-%S-%z-%Z-%H-%M",onError: { $range: [3,8,10] }} } } } },iso8601: false} } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toUpper: "leverage Bahamian Dollar Checking Account" },9,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: {input: "grow Plastic Dynamic",chars: { $substrBytes: ['$obj.obj.obj.str',10,3] }} },{ $dateToString: {date: { $hour: { $second: { $month: '$obj.date' } } },format: "%H-%Z-%w-%L-%S-%M-%H-%u-%u",timezone: "America/Argentina/Mendoza"} }],["Wooden Gorgeous Granite Mouse"],['$obj.num'],["Re-engineered"]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str',{ $toLower: "compressing Borders Automotive" }],cond: { $ne: [{ $arrayToObject: [[[]]] },{ $arrayToObject: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%%-%Y-%w-%u-%Y-%H"} }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',15,7] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T00:28:59.890Z",onError: { $objectToArray: '$obj' },onNull: { $arrayToObject: [[{k: "Steel Web",v: { $isoWeekYear: { $month: { $hour: { $isoDayOfWeek: { $week: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T07:44:10.396Z",onNull: { $dateToString: {date: { $minute: { $dateFromParts: {isoWeekYear: { $divide: [89846,'$num'] },isoWeek: { $abs: '$num' },minute: { $exp: '$obj.obj.num' },second: { $ceil: 51391 },millisecond: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $reverseArray: [['$obj.obj.str']] },9] },timezone: "America/Argentina/San_Luis"} } },format: "%G-%Y-%%-%z-%V-%Z-%d-%S-%d-%U-%M",timezone: "America/Argentina/Rio_Gallegos"} }} } } } } } } }}]] }} }, _id: 0}}],

        [{$project: {a: { $substr: ["Program Lakes magenta",13,18] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $ltrim: {input: "Soap Minnesota",chars: '$obj.obj.str'} },2,12] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromString: {dateString: "2018-09-06T06:22:13.851Z",format: "%S-%d-%%-%%-%Y-%w-%M",onNull: "Buckinghamshire RAM parsing"} } }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handcrafted Fresh Ball",v: { $substrBytes: ["compressing red",18,11] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[61703,14968,30993],[],["Small Plastic Chips bluetooth"],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: { $dateToString: {date: '$obj.date',format: "%j-%G-%Y-%j-%m-%G-%U-%u",timezone: "Africa/Casablanca",onNull: '$obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.obj.str',17,19] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: "Fantastic Steel Table application" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $dateToString: {date: { $dayOfYear: { $year: { $isoWeekYear: { $dateToString: {date: { $dayOfWeek: { $week: '$date' } },onNull: "Cambridgeshire"} } } } },format: "%m-%m-%M-%z-%Y-%z-%w-%m-%w",onNull: "Human"} }],as: 'viva',cond: { $gt: [{ $toString: { $objectToArray: '$obj.obj.obj.obj' } },{ $arrayToObject: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "tangible Borders Automotive",v: false}]] }, _id: 0}}],

        [{$project: {a: { $week: { $minute: { $dateToString: {date: new Date("2018-09-06T10:38:49.145Z"),timezone: "Europe/Sarajevo",onNull: { $arrayElemAt: [['$obj.obj.obj.str',"Games national"],'$obj.obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ['$obj.obj.str'] },"matrix"],93563] }, _id: 0}}],

        [{$project: {a: { $range: [3,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],["Fantastic vertical",'$obj.str'],[{ $exp: '$obj.obj.obj.num' }]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "SAS Unbranded Wooden Soap Health",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $toDate: { $arrayElemAt: [[],'$obj.obj.obj.num'] } },onNull: { $reverseArray: [[75697,95982,'$obj.num','$obj.obj.obj.num']] }} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T23:30:50.836Z",timezone: "Zulu",onError: { $arrayToObject: [[{k: "deliverables web-enabled Coordinator",v: 11679}]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],13399] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $hour: { $minute: { $dateFromParts: {year: { $divide: ['$obj.obj.obj.num',62934] },month: { $ln: 72369 },minute: { $mod: [{ $indexOfArray: [{ $zip: {inputs: [['$obj.str',{ $trim: {input: "Plastic Buckinghamshire",chars: "Nebraska e-tailers"} }],[],[88548],['$obj.num',45679],['$obj.str','$obj.str']],useLongestLength: true} },{ $range: [20,16] },12] },'$num'] },second: { $floor: { $cmp: [{ $toUpper: { $ltrim: { input: { $concat: [{ $rtrim: {input: '$obj.obj.obj.str',chars: { $toUpper: { $toLower: "initiatives e-commerce" } }} },"multi-tasking convergence Investment Account"] } } } },{ $arrayElemAt: [["auxiliary Avon",{ $dateToString: { date: '$date' } }],'$num'] }] } },timezone: "Chile/Continental"} } } } }, _id: 0}}],

        [{$project: {a: { $month: { $second: { $dayOfWeek: { $month: { $isoWeekYear: { $isoDayOfWeek: { $millesecond: { $isoDayOfWeek: { $week: new Date("2018-09-05T23:21:06.781Z") } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $trunc: 14620 },minute: { $add: [{ $log: [11981,'$obj.obj.num'] },'$obj.obj.obj.num',74790] },millisecond: { $subtract: ['$obj.obj.num','$obj.obj.obj.num'] },timezone: "America/Argentina/San_Luis"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[43328],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[58486],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $second: { $month: { $month: { $dayOfWeek: { $dayOfMonth: { $dayOfMonth: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T16:49:43.845Z",onError: { $toString: { $arrayElemAt: [[],'$obj.obj.num'] } }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfWeek: { $toDate: { $arrayToObject: [[["Savings Account Forward","convergence"],[{ $toString: { $arrayElemAt: [[],58772] } },'$obj.str'],['$obj.obj.obj.num'],[new Date("2018-09-05T20:27:18.251Z"),'$str'],['$obj.obj.obj.num','$obj.num']]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $toString: { $zip: {inputs: [[{ $substr: [{ $ltrim: {input: '$obj.str',chars: { $substrBytes: ["Computer pixel",6,4] }} },8,1] },'$obj.obj.str'],[]],useLongestLength: true} } },'$str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Integration",v: '$str'},{k: "CFA Franc BEAC Implementation Som",v: 58845}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $multiply: ['$$this'] }} }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "global payment",v: new Date("2018-09-06T01:39:28.474Z")},{k: "24/7",v: false},{k: "intermediate infomediaries backing up",v: false}]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Movies didactic",v: true},{k: "Tasty HTTP Sports",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $month: { $dateToParts: {date: { $isoDayOfWeek: { $dateToParts: {date: { $month: { $dateFromString: {dateString: "2018-09-06T06:47:14.313Z",format: "%m-%S-%w-%d-%H-%G-%j-%u-%U-%m",timezone: "Antarctica/Casey"} } },timezone: "Africa/Asmera"} } },timezone: "Pacific/Kiritimati",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[569,'$obj.obj.obj.num'],68130] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fantastic Music",v: 91555},{k: "connecting",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromString: {dateString: "2018-09-06T01:37:16.897Z",format: "%z-%Y-%d-%M-%Z-%G-%H"} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T22:45:44.787Z"),timezone: "Africa/Johannesburg",onNull: { $second: { $year: { $isoWeekYear: { $week: { $isoWeekYear: { $dayOfWeek: { $toDate: { $dateToString: {date: { $dateToParts: {date: { $isoWeek: { $millesecond: { $month: { $dayOfYear: { $dayOfMonth: { $isoWeekYear: { $hour: { $dateToString: {date: new Date("2018-09-06T08:43:35.876Z"),format: "%Y-%w-%V-%u-%Y-%m-%U-%m-%S"} } } } } } } } },iso8601: false} },onNull: { $filter: {input: [{ $toLower: "Georgia Alabama" }],as: 'eloy',cond: { $gt: [{ $arrayToObject: [[]] },{ $arrayElemAt: [[],'$obj.num'] }] }} }} } } } } } } } }} }, _id: 0}}],

        [{$project: {a: { $year: { $isoWeekYear: { $minute: { $dayOfMonth: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-05T23:20:51.837Z"),format: "%d-%S-%z-%M-%H-%Y-%L",timezone: "Africa/Kampala"} } } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeekYear: { $month: { $year: { $hour: { $toDate: { $arrayElemAt: [['$obj.obj.num','$obj.num'],68418] } } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.obj.str',chars: "hierarchy"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.str',{ $toLower: '$obj.obj.str' },{ $rtrim: { input: "synergistic navigate" } }],["channels Kuwaiti Dinar monitoring"],[71179],[]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: '$num',minute: { $sqrt: 9454 },second: { $floor: 74450 },timezone: "Pacific/Marquesas"} }, _id: 0}}],

        [{$project: {a: { $range: [19,7] }, _id: 0}}],

        [{$project: {a: { $toString: { $map: {input: [{ $dateToString: {date: '$obj.date',format: "%S-%U-%w-%u-%%-%U-%Z-%u-%L-%Y-%U-%U",timezone: "Pacific/Funafuti"} },'$str',{ $substr: ['$str',12,2] }],in: { $sqrt: 88684 }} } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: {date: { $millesecond: { $minute: { $isoWeek: { $dateToString: {date: { $dayOfWeek: { $month: { $week: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T05:14:24.261Z",format: "%%-%S-%G-%G-%%-%V-%j",timezone: "Asia/Macau",onError: { $objectToArray: '$obj.obj.obj.obj' },onNull: { $arrayToObject: [[['$obj.obj.str'],['$obj.obj.num',39339,'$obj.obj.num',59587,40013],[],["navigating"]]] }} } } } } },format: "%j-%G-%Z-%z-%%-%%-%%"} } } } },timezone: "Asia/Shanghai",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $second: { $dayOfMonth: { $hour: '$obj.obj.date' } } },iso8601: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $toString: { $arrayElemAt: [["Games","El Salvador Colon US Dollar Cotton"],'$obj.obj.num'] } },chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $hour: { $millesecond: { $month: { $year: { $dateFromString: {dateString: "2018-09-05T23:20:05.047Z",format: "%d-%V-%m-%z-%m-%V-%u-%Y-%H-%m",onNull: { $arrayElemAt: [["Assistant"],'$obj.obj.obj.num'] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $ltrim: {input: "Central transition Gorgeous",chars: '$str'} },4,2] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["networks Indian Rupee feed",{ $rtrim: {input: '$obj.obj.obj.str',chars: "Virgin Islands, U.S. Movies"} },{ $concat: [{ $toString: { $arrayToObject: [[[68567],[],[],[]]] } },"Practical Steel Chair Reactive benchmark"] }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"client-driven"],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $trunc: 67258 },81116],cond: { $in: [{ $dayOfYear: { $isoWeek: { $dateFromParts: {isoWeekYear: { $subtract: ['$$this','$obj.obj.obj.num'] },isoWeek: { $multiply: [] },hour: { $add: [] },minute: { $ceil: '$$this' },timezone: "Europe/Volgograd"} } } },{ $range: [9,10,20] }] }} }, _id: 0}}],

        [{$project: {a: { $trim: { input: "connecting" } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $trim: { input: { $toString: { $hour: { $year: { $dateToParts: { date: { $dateFromString: {dateString: "2018-09-06T07:49:55.871Z",format: "%z-%G-%%-%H-%G-%V-%%-%G",onError: { $concat: ["deposit"] },onNull: { $toLower: '$str' }} } } } } } } } },chars: "viral"} }, _id: 0}}],

        [{$project: {a: { $toString: { $toLower: { $substr: ['$obj.str',15,15] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $log10: 46641 }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $year: { $toDate: { $arrayElemAt: [[{ $toLower: "Metrics Liaison Naira" }],79565] } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str'],[51874,'$obj.obj.obj.num'],['$obj.obj.num',{ $pow: [47577,'$num'] }],["redundant",{ $toString: { $arrayToObject: [[[],[]]] } }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $month: new Date("2018-09-06T19:17:09.745Z") } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrCP: ['$str',6,12] }],["navigate"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "digital azure Human",v: true},{k: "turquoise JBOD complexity",v: "value-added"},{k: "Incredible Cotton Tuna leverage",v: { $dateFromParts: {isoWeekYear: { $sqrt: 49181 },isoWeek: { $indexOfArray: [{ $range: [6,20,0] },{ $substrCP: [{ $substrBytes: [{ $toString: { $arrayElemAt: [['$obj.obj.obj.num',27256],'$num'] } },19,7] },1,7] },16] },hour: { $indexOfArray: [{ $reverseArray: [[]] },{ $arrayToObject: [[{k: "Greens New Jersey",v: false}]] },7] },second: 58699,millisecond: { $floor: 64027 }} }}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'candida',cond: { $not: [{ $arrayToObject: [[{k: "Extended",v: false},{k: "International",v: new Date("2018-09-06T05:14:57.608Z")}]] }] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[24389]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $dateToString: {date: { $week: { $isoDayOfWeek: { $dateFromString: { dateString: "2018-09-06T05:12:58.220Z" } } } },format: "%U-%Z-%z-%u-%j-%U-%S",timezone: "Asia/Kathmandu",onNull: { $substrBytes: ['$obj.str',8,20] }} } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Yemen Bedfordshire compressing"],as: 'daija',in: { $divide: ['$obj.obj.obj.num','$$daija'] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: { $dateToString: {date: { $second: { $dateFromString: {dateString: "2018-09-06T08:18:32.475Z",timezone: "Etc/Zulu",onNull: '$obj.obj.str'} } },format: "%d-%U-%L-%z-%j-%w",timezone: "Europe/Brussels",onNull: { $arrayToObject: [[{k: "Cambridgeshire",v: '$obj.obj.obj.date'},{k: "open-source Ameliorated",v: "cutting-edge infomediaries Factors"},{k: "Credit Card Account",v: true}]] }} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $subtract: ['$obj.num',67157] }],["SDD primary connect"],[],[95147,17927,'$obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $ltrim: { input: { $substrCP: ['$obj.obj.str',14,19] } } },9,3] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $second: { $isoDayOfWeek: { $isoDayOfWeek: { $isoWeekYear: { $hour: { $year: { $dateToString: {date: new Date("2018-09-06T03:23:02.786Z"),format: "%M-%w-%m-%Z-%H-%U-%Z",timezone: "Canada/Yukon"} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: "bypassing feed" }],[],[],[],["Health RAM","District Auto Loan Account"],[{ $substrCP: ['$obj.obj.str',3,2] },'$obj.obj.str',{ $trim: {input: '$obj.obj.obj.str',chars: "Forward"} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $substrBytes: [{ $ltrim: {input: "Plastic",chars: '$str'} },7,18] },chars: "multi-byte Spurs"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayElemAt: [['$obj.obj.num'],29221] } },"lime East Caribbean Dollar",{ $toString: { $arrayToObject: [[[],['$obj.obj.str'],['$obj.obj.num','$date'],[]]] } }],57079] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["Tonga",6,18] }],29161] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num'],as: 'werner',in: { $divide: [49352,{ $pow: ['$num',84463] }] }} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfWeek: { $millesecond: { $dayOfMonth: { $isoDayOfWeek: { $week: { $isoWeek: { $hour: { $second: new Date("2018-09-06T05:24:43.328Z") } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',24451],[{ $toUpper: '$obj.obj.str' }],['$obj.num',42437,3136]]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Credit Card Account Parks",4,4] }, _id: 0}}],

        [{$project: {a: { $range: [12,14] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $substrBytes: ['$str',14,18] },chars: { $rtrim: { input: { $toString: { $arrayElemAt: [[],'$num'] } } } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfMonth: { $hour: { $dayOfYear: { $millesecond: { $minute: { $toDate: { $arrayElemAt: [[],'$obj.obj.obj.num'] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: { $concat: [{ $toString: { $arrayToObject: [[{k: "SCSI Focused Licensed",v: "plug-and-play Representative"},{k: "red",v: { $size: [['$obj.str',"Ball mission-critical"]] }},{k: "Soap haptic",v: '$str'}]] } },'$obj.str','$str'] } },"Steel"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $concatArrays: [[],[false],['$obj.str',"calculating","haptic payment Administrator",{ $substrCP: [{ $toString: { $arrayElemAt: [[],'$obj.num'] } },5,4] }],[11481,'$obj.num'],['$obj.obj.num',19103,'$num']] } }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeekYear: { $millesecond: { $dayOfYear: { $toDate: { $substr: ['$obj.obj.str',6,3] } } } } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateToParts: {date: { $isoWeekYear: { $second: { $isoDayOfWeek: { $month: { $hour: { $dateFromString: {dateString: "2018-09-06T17:36:53.860Z",onNull: '$str'} } } } } } },timezone: "Pacific/Midway"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[{k: "payment",v: false},{k: "sky blue Integration",v: '$str'}]] } }],83784] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: ["blue Lithuanian Litas"] },3,3] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $lte: [{ $substrBytes: ["Customer",7,15] },{ $arrayToObject: [[{k: "disintermediate",v: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T05:53:48.232Z"),format: "%j-%Z-%%-%V-%m-%u-%G-%m-%z-%z-%Y-%m",timezone: "Asia/Sakhalin"} } }},{k: "Human",v: { $toString: { $arrayElemAt: [[{ $ltrim: {input: '$obj.obj.str',chars: "Arizona payment Bedfordshire"} },'$$this',{ $substrCP: [{ $toLower: "Solutions Metrics" },17,19] },'$$this'],66702] } }}]] }] }} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T05:40:19.998Z",onError: { $arrayToObject: [[['$obj.num'],[],[]]] }} } } }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromParts: {year: { $abs: '$num' },month: { $divide: [94576,{ $multiply: [] }] },minute: { $mod: [59413,'$obj.num'] },second: { $indexOfArray: [{ $concatArrays: [[{ $toString: { $zip: {inputs: [['$obj.obj.obj.num'],[10051]],useLongestLength: true} } },'$obj.str',"maximized"],[],["groupware Hollow"],[],['$obj.obj.obj.num',10292,{ $pow: [68939,'$num'] }],['$obj.str',"hard drive mindshare firewall"]] },{ $arrayElemAt: [[true],97545] },14] },timezone: "Asia/Vladivostok"} } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $toDate: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $add: [] },isoDayOfWeek: { $exp: 92359 },hour: { $floor: 61349 },minute: { $trunc: '$obj.obj.num' },second: { $subtract: ['$num',20040] },millisecond: { $pow: [4614,'$num'] }} } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.num','$num'],in: { $mod: ['$$this',47163] }} }, _id: 0}}],

        [{$project: {a: { $month: { $dateToParts: {date: { $week: { $isoWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-05T21:24:52.474Z",format: "%j-%u-%S-%m-%H-%G-%Z-%j-%M-%u-%%-%m",onError: { $arrayElemAt: [['$obj.obj.obj.num'],15712] },onNull: { $arrayToObject: [[[],[]]] }} } } } },timezone: "Asia/Hovd"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "protocol lavender benchmark" },{ $concat: ["web services Beauty"] }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],83039] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[],[13152]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateFromParts: {year: { $floor: 2325 },month: { $abs: '$obj.obj.obj.num' },day: { $mod: [6660,'$obj.num'] },hour: { $add: [40655,'$obj.obj.obj.num'] },millisecond: { $indexOfArray: [{ $concatArrays: [['$obj.obj.obj.num'],["connecting transition"],[]] },{ $filter: {input: [],as: 'arden',cond: { $and: [] }} },13,4] },timezone: "America/Toronto"} },timezone: "Africa/Lusaka"} }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $minute: { $second: { $isoWeek: { $toDate: { $reverseArray: [["New York SDD","optical reciprocal",{ $toUpper: { $substrCP: [{ $substrCP: [{ $ltrim: {input: '$obj.str',chars: '$obj.obj.str'} },2,16] },14,17] } }]] } } } } } } }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: "Representative"} }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',1,4] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $log: [84931,'$obj.num'] },day: { $size: [['$obj.obj.obj.str',{ $toString: { $arrayToObject: [[{k: "Taiwan Engineer Division",v: '$obj.obj.obj.str'}]] } }]] },hour: 89327,millisecond: { $add: [] },timezone: "America/St_Johns"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$num'],27092] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfYear: { $isoDayOfWeek: { $week: { $minute: { $isoDayOfWeek: '$date' } } } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $millesecond: { $dateFromParts: {year: { $mod: ['$obj.obj.obj.num',29747] },hour: { $floor: '$obj.obj.obj.num' },minute: { $log: [79127,86245] }} } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromParts: {year: { $mod: [17461,63208] },day: { $cmp: [{ $concat: [{ $ltrim: {input: '$obj.obj.str',chars: "Generic"} },{ $dateToString: {date: new Date("2018-09-05T23:59:05.063Z"),format: "%G-%u-%d-%w"} }] },{ $concatArrays: [[{ $toLower: '$obj.str' },"input"],[84739,'$obj.obj.num'],[],[{ $trim: { input: '$obj.obj.obj.str' } },'$str'],['$obj.obj.num',6621]] }] },minute: { $subtract: ['$obj.num',{ $trunc: 10963 }] },millisecond: { $mod: [{ $abs: '$num' },{ $cmp: [{ $arrayToObject: [[{k: "Denmark modular connecting",v: true}]] },{ $arrayToObject: [[[],[],['$obj.obj.str',"USB Metal","Leone Shoes"],[false]]] }] }] },timezone: "Europe/Oslo"} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T07:36:52.004Z",timezone: "Antarctica/Davis",onError: { $map: {input: [34815],as: 'trevor',in: { $exp: 62712 }} },onNull: "programming multi-byte matrix"} } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToParts: { date: { $dayOfYear: { $isoWeekYear: { $isoWeek: { $millesecond: { $hour: { $hour: { $year: { $dateFromString: {dateString: "2018-09-06T13:07:51.022Z",onError: { $rtrim: { input: "Wisconsin International" } },onNull: { $toUpper: '$str' }} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],47706] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toLower: "Fantastic Wisconsin" },{ $toUpper: '$obj.obj.obj.str' }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "panel morph Virginia",v: "Granite model facilitate"},{k: "SDR",v: '$obj.obj.date'},{k: "Berkshire Qatari Rial",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Avon application",v: '$obj.obj.obj.date'},{k: "online wireless grey",v: "withdrawal"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[61554],'$num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $month: { $week: { $hour: { $dayOfYear: { $dayOfMonth: { $dateToParts: {date: { $hour: { $week: { $dayOfWeek: { $month: { $toDate: { $arrayToObject: [[['$str']]] } } } } } },timezone: "Etc/Greenwich",iso8601: true} } } } } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-05T21:38:56.420Z",format: "%u-%M-%d-%z-%H-%u",timezone: "America/St_Lucia",onError: { $isoWeekYear: { $isoWeekYear: { $second: { $millesecond: { $week: { $isoWeek: { $dayOfWeek: { $dayOfWeek: { $isoDayOfWeek: { $toDate: { $arrayElemAt: [["Fish software New Hampshire",{ $ltrim: { input: '$str' } }],'$num'] } } } } } } } } } } },onNull: "optical optimize"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],39352] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',9,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["calculating",{ $rtrim: {input: '$obj.str',chars: "Pakistan Rupee Thailand"} }],[{ $toLower: "Falkland Islands Pound Money Market Account Tools" }],['$obj.obj.obj.num'],['$obj.obj.num',68681],[54457,52011,{ $ln: 33989 }],[]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $toLower: '$obj.obj.obj.str' } } }, _id: 0}}],

        [{$project: {a: { $toLower: { $trim: {input: '$str',chars: "Awesome"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["web-enabled Inlet",8,18] },'$obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $trim: {input: '$obj.obj.str',chars: "Fantastic"} },4,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: [{ $ltrim: { input: '$str' } },15,18] },"black Turnpike transmit"],'$num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Incredible Arizona" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],89467] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $toUpper: "content asynchronous" },"calculate Berkshire Soap"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$obj.str' }],32854] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num',94777],['$obj.obj.str',{ $ltrim: {input: { $substr: ["Games SAS Practical Rubber Table",19,20] },chars: "Belize Granite parallelism"} },'$obj.obj.obj.str'],[],[53806,'$obj.obj.num'],['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-05T23:01:20.059Z",onError: { $arrayToObject: [[{k: "supply-chains transparent South Carolina",v: '$obj.num'},{k: "Producer AI",v: { $rtrim: {input: { $ltrim: {input: { $substrCP: ["indexing Supervisor generate",15,12] },chars: '$obj.obj.str'} },chars: '$obj.str'} }},{k: "Forward Gorgeous",v: 50013}]] }} } } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $rtrim: { input: { $toLower: "synergize reboot Persistent" } } },16,5] }, _id: 0}}],

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
