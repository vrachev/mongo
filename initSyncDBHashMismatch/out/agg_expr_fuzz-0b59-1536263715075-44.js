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
        return coll.insert({_id: 27521,str: "context-sensitive",num: 44089,date: new Date("2018-09-06T19:28:28.660Z"),array: [{_id: 27522,str: "attitude",date: new Date("2018-09-06T08:13:44.493Z"),obj: {_id: 27523,str: "calculate orange",num: 22891,date: new Date("2018-09-06T15:36:18.964Z"),array: [],obj: {}}},45916,13689,new Date("2018-09-05T22:11:32.164Z"),[68263,"copy deposit benchmark"],"Corporate Steel salmon",{_id: 27524,num: 85953,date: new Date("2018-09-06T12:03:31.722Z"),obj: {}},new Date("2018-09-05T23:39:39.877Z"),37043,[[],new Date("2018-09-06T09:05:10.647Z")],new Date("2018-09-06T01:52:27.637Z")],obj: {_id: 27525,str: "Facilitator Wisconsin",num: 34444,date: new Date("2018-09-06T09:25:35.367Z"),array: ["Savings Account SDD",74172],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27526,str: "Car 3rd generation Guadeloupe",num: 15308,date: new Date("2018-09-06T14:16:59.903Z"),array: ["Savings Account Outdoors",new Date("2018-09-05T23:56:04.988Z"),{_id: 27527,str: "Isle Manager Moldovan Leu",num: 43407,date: new Date("2018-09-05T22:38:39.143Z"),array: [34264],obj: {}},{_id: 27528,num: 25208,date: new Date("2018-09-06T03:05:30.676Z"),array: []},"Internal Rustic open-source","real-time back up Home",new Date("2018-09-06T12:42:09.104Z"),63967,"Home invoice Rubber",{_id: 27529,str: "Mauritius",obj: {}},new Date("2018-09-05T22:12:01.787Z"),[new Date("2018-09-06T14:43:24.748Z")],96058],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27530,num: 66558,date: new Date("2018-09-06T09:20:27.808Z"),array: [],obj: {_id: 27531,str: "lime",num: 48855,date: new Date("2018-09-06T01:36:49.433Z"),array: [new Date("2018-09-06T17:52:36.400Z"),"Vision-oriented",new Date("2018-09-06T01:18:24.961Z"),[3816,new Date("2018-09-06T15:00:22.660Z")],new Date("2018-09-06T16:51:09.100Z"),{_id: 27532,str: "Internal scale Virgin Islands, U.S.",num: 26586,date: new Date("2018-09-06T13:30:11.745Z"),array: [],obj: {}},34912,new Date("2018-09-06T04:32:59.181Z"),"Open-source connect","haptic",[],"Tasty Steel Bike deposit",10199],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27533,str: "Future",num: 56280,date: new Date("2018-09-06T07:11:21.964Z"),array: [],obj: {_id: 27534,str: "even-keeled",num: 51489,date: new Date("2018-09-06T04:50:56.032Z"),array: [],obj: {_id: 27535,str: "payment Cotton",num: 57287,array: [new Date("2018-09-06T03:03:19.967Z"),"Roads",[],new Date("2018-09-06T18:52:04.814Z"),25692,new Date("2018-09-06T08:52:00.485Z"),75324,3388,{_id: 27536,date: new Date("2018-09-06T18:27:50.143Z"),array: ["Persistent Kids Mandatory"],obj: {}},new Date("2018-09-06T09:58:57.317Z"),"Maryland Brazil","Savings Account calculate",28453],obj: {_id: 27537,str: "Credit Card Account Soft",num: 43732,array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 27538,str: "Slovenia Berkshire",num: 40357,date: new Date("2018-09-06T01:46:19.949Z"),array: [],obj: {_id: 27539,str: "extend Cotton Architect",num: 87967,date: new Date("2018-09-06T09:58:09.407Z"),array: [{_id: 27540,num: 71902,date: new Date("2018-09-06T10:55:15.444Z"),array: [],obj: {}},new Date("2018-09-06T02:51:34.797Z"),"sticky Unbranded Fresh Gloves Shoes",new Date("2018-09-06T11:49:53.971Z"),79047,[],"Kids pink",3664,[{_id: 27541,obj: {}},33152,7631,["Minnesota",new Date("2018-09-06T07:31:14.272Z")],{_id: 27542,str: "Borders",num: 74776,date: new Date("2018-09-06T14:05:05.528Z"),obj: {_id: 27543,str: "matrix New Mexico",date: new Date("2018-09-05T19:57:41.436Z"),obj: {}}}],49594,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 27544,str: "concept Dobra",num: 95146,date: new Date("2018-09-05T21:01:59.397Z"),array: [],obj: {_id: 27545,str: "Solutions Nakfa",num: 36862,date: new Date("2018-09-06T04:44:26.532Z"),array: [3685,"program","metrics",{_id: 27546,str: "Administrator indexing invoice",num: 8749,array: [],obj: {}},new Date("2018-09-06T04:51:03.658Z"),[],new Date("2018-09-05T22:57:31.964Z"),85583,"Avon streamline Qatar",[{_id: 27547,str: "Cheese generating Isle",num: 36754,date: new Date("2018-09-06T13:20:56.725Z")}],45076,{_id: 27548,str: "white",date: new Date("2018-09-06T01:24:56.529Z"),array: [80144,69126,new Date("2018-09-05T22:45:45.161Z"),[]],obj: {_id: 27549,num: 91728,obj: {}}},new Date("2018-09-06T13:16:36.653Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 27550,str: "Savings Account Reduced",num: 7043,date: new Date("2018-09-06T08:25:15.983Z"),array: [],obj: {_id: 27551,str: "maroon multi-state",num: 9405,date: new Date("2018-09-06T07:44:36.322Z"),array: ["directional Colorado multi-byte",new Date("2018-09-06T16:35:13.886Z"),25815,"Ramp overriding Concrete",{_id: 27552,str: "networks Alaska",num: 38942,date: new Date("2018-09-06T16:26:15.172Z"),array: [],obj: {_id: 27553,str: "lavender Cambridgeshire",num: 91470,obj: {_id: 27554,num: 34315,array: [[],97174],obj: {_id: 27555,str: "upward-trending pricing structure",date: new Date("2018-09-06T05:46:39.339Z")}}}},"GB",new Date("2018-09-05T19:55:40.897Z"),11794,new Date("2018-09-06T10:32:06.527Z"),70601,new Date("2018-09-06T09:10:56.305Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27556,str: "mint green",num: 91783,date: new Date("2018-09-06T01:12:52.167Z"),array: [[],"black",new Date("2018-09-06T03:01:30.538Z"),68453,"Refined RSS",new Date("2018-09-06T09:58:47.171Z"),89549],obj: {_id: 27557,num: 29656,date: new Date("2018-09-06T10:07:23.178Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27558,str: "synthesizing",num: 93379,date: new Date("2018-09-06T17:40:13.607Z"),array: ["Networked withdrawal",53563,{_id: 27559,str: "mobile",date: new Date("2018-09-05T21:41:39.321Z"),array: [],obj: {_id: 27560,str: "indexing Small",num: 59294,date: new Date("2018-09-06T07:47:57.590Z"),array: [],obj: {}}},"Engineer interfaces",82713,[],[new Date("2018-09-06T01:54:12.452Z"),new Date("2018-09-06T14:12:08.279Z"),"utilize users Applications","Music",{_id: 27561,str: "Checking Account Berkshire intangible",num: 63196},[]],new Date("2018-09-05T23:22:59.322Z"),13397],obj: {_id: 27562,str: "calculate Bedfordshire Soap",num: 24540,date: new Date("2018-09-06T16:26:18.406Z"),array: [75154,["Summit"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27563,str: "Wisconsin District",num: 67456,date: new Date("2018-09-06T03:54:29.502Z"),array: [new Date("2018-09-06T19:50:34.080Z"),"bypassing",14127,new Date("2018-09-06T05:20:08.653Z"),"withdrawal Implementation THX",{_id: 27564,str: "Luxembourg",num: 8088,date: new Date("2018-09-06T11:48:50.750Z"),array: [],obj: {_id: 27565,str: "Ball",num: 4382,date: new Date("2018-09-06T18:36:01.519Z"),array: [[]],obj: {}}},new Date("2018-09-06T03:49:02.020Z"),42121,[],{_id: 27566,str: "Strategist fault-tolerant",num: 36159,date: new Date("2018-09-06T13:39:51.529Z"),obj: {}},[{_id: 27567,array: [],obj: {_id: 27568,num: 58451,date: new Date("2018-09-06T04:22:51.558Z"),array: []}},90309]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27569,str: "Balboa US Dollar Neck Trace",num: 15844,date: new Date("2018-09-06T11:05:45.841Z"),array: [],obj: {_id: 27570,str: "multi-byte networks",date: new Date("2018-09-06T02:34:02.714Z"),array: [80051,"Personal Loan Account",new Date("2018-09-06T09:15:42.269Z"),72599,new Date("2018-09-06T03:23:29.523Z"),"back-end Reduced Connecticut",["Jewelery zero administration panel",9418,"Electronics",[]],"Plastic Bahamian Dollar 4th generation",new Date("2018-09-06T02:50:26.733Z"),3651,{_id: 27571,str: "4th generation Clothing",num: 80372,date: new Date("2018-09-06T18:43:19.217Z"),obj: {_id: 27572,array: [new Date("2018-09-05T20:56:05.516Z")]}},97218],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27573,str: "Soap Keyboard",num: 60366,date: new Date("2018-09-06T11:19:24.729Z"),array: [],obj: {_id: 27574,str: "Human impactful",num: 210,date: new Date("2018-09-05T21:55:42.065Z"),array: ["Place",72377,new Date("2018-09-06T10:16:51.880Z"),"extensible incentivize Sleek Frozen Mouse","lime Supervisor action-items",new Date("2018-09-06T07:31:20.321Z"),[new Date("2018-09-06T02:04:12.680Z")],[],[],66474,52616]}});
    },

    function(coll) {
        return coll.insert({_id: 27575,str: "Home concept Cotton",num: 99891,date: new Date("2018-09-06T13:42:07.272Z"),array: [],obj: {_id: 27576,str: "Granite",num: 76410,date: new Date("2018-09-06T06:45:21.646Z"),array: [{_id: 27577,str: "streamline Expanded Security",array: ["methodologies"],obj: {_id: 27578,str: "migration",num: 39829,date: new Date("2018-09-05T22:00:05.404Z"),obj: {_id: 27579,num: 22499,date: new Date("2018-09-06T13:46:55.659Z"),array: [],obj: {}}}},new Date("2018-09-06T16:39:09.749Z"),"interactive world-class",["index envisioneer portals","calculate"],99041,85459,{_id: 27580,num: 56874,array: [new Date("2018-09-06T13:42:29.652Z"),66685,new Date("2018-09-06T00:36:47.957Z"),6954,new Date("2018-09-06T12:22:35.315Z"),new Date("2018-09-05T23:04:18.914Z")],obj: {}},"hacking",79570,{_id: 27581,str: "zero tolerance",date: new Date("2018-09-06T12:22:01.219Z"),array: [[]]}]}});
    },

    function(coll) {
        return coll.insert({_id: 27582,str: "payment magenta fuchsia",num: 8177,date: new Date("2018-09-06T16:33:34.845Z"),array: [],obj: {_id: 27583,str: "sky blue Buckinghamshire",num: 38130,date: new Date("2018-09-06T08:43:32.182Z"),array: [48149,33984,"THX Intelligent Steel Sausages Director",new Date("2018-09-06T15:59:07.412Z"),new Date("2018-09-06T11:33:09.470Z"),new Date("2018-09-06T12:46:09.452Z"),95872,{_id: 27584,num: 47542,date: new Date("2018-09-06T19:47:57.933Z"),array: [],obj: {}},"Small",new Date("2018-09-06T08:11:51.868Z"),"Program FTP back up"],obj: {_id: 27585,num: 14320,date: new Date("2018-09-06T13:28:53.859Z"),array: [33615],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27586,str: "archive Car interface",num: 84113,date: new Date("2018-09-06T12:17:54.413Z"),array: ["Steel",new Date("2018-09-06T08:05:35.146Z"),"multi-byte THX info-mediaries",new Date("2018-09-06T07:55:15.476Z"),"attitude-oriented",48592,80707,[],new Date("2018-09-06T01:31:51.535Z"),"Fundamental back-end Investor","microchip",101,8917,{_id: 27587,str: "needs-based Auto Loan Account Botswana",date: new Date("2018-09-06T14:42:44.714Z"),array: [[]],obj: {_id: 27588,num: 77033,date: new Date("2018-09-06T15:07:11.054Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 27589,str: "Generic",num: 87579,date: new Date("2018-09-06T11:52:44.613Z"),array: [96964,new Date("2018-09-05T20:15:27.670Z"),new Date("2018-09-06T07:16:24.774Z"),"reintermediate Borders",{_id: 27590,str: "synergy Indian Rupee Tuna",date: new Date("2018-09-05T23:29:16.225Z"),obj: {}},90725,60927,[]],obj: {_id: 27591,str: "niches",num: 17152,date: new Date("2018-09-06T19:28:18.597Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27592,num: 39769,date: new Date("2018-09-06T10:57:45.512Z"),array: [new Date("2018-09-05T20:08:03.333Z"),"disintermediate open-source",55330,new Date("2018-09-06T05:02:56.067Z"),[],"Function-based",30100,[{_id: 27593,str: "Berkshire Metrics",num: 73600,date: new Date("2018-09-06T05:11:31.759Z"),array: [],obj: {_id: 27594,str: "auxiliary",num: 20636,date: new Date("2018-09-06T13:28:52.850Z"),obj: {_id: 27595,str: "facilitate Checking Account",array: [],obj: {}}}},91239,28069],new Date("2018-09-06T03:38:02.010Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 27596,str: "pixel",num: 24911,date: new Date("2018-09-06T16:28:35.167Z"),array: [[],[],60507,new Date("2018-09-06T05:13:51.239Z"),"Loop Niger","Toys",81309,"white 24/365","Toys Manat",new Date("2018-09-06T06:59:20.405Z"),2331,12556,new Date("2018-09-06T08:17:27.945Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27597,str: "Burundi",num: 98399,date: new Date("2018-09-06T04:06:28.882Z"),array: [],obj: {_id: 27598,str: "Savings Account Practical Compatible",array: [{_id: 27599,str: "hacking Assistant Handmade",num: 89152,date: new Date("2018-09-06T07:23:52.795Z"),array: []},"azure",new Date("2018-09-06T04:45:25.488Z"),"frictionless connect",99650,[67405,new Date("2018-09-06T06:31:37.361Z"),{_id: 27600,str: "deposit Buckinghamshire Fantastic Wooden Shoes",num: 36827,date: new Date("2018-09-06T14:12:04.632Z"),array: [74730],obj: {_id: 27601,str: "Senior",num: 13388,date: new Date("2018-09-06T02:20:35.632Z"),obj: {}}},new Date("2018-09-05T21:35:08.943Z"),"alarm Optimized",new Date("2018-09-06T18:06:53.596Z"),[]],36720,{_id: 27602,num: 26388,array: [new Date("2018-09-06T16:49:19.114Z")]},60943],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27603,str: "Cliffs Pizza Courts",num: 75191,date: new Date("2018-09-06T18:59:44.018Z"),array: [new Date("2018-09-06T09:01:52.318Z"),[],{_id: 27604,date: new Date("2018-09-06T01:27:29.621Z"),array: [69130,"Credit Card Account"],obj: {}},new Date("2018-09-06T10:29:25.104Z"),[],47201,"impactful feed Tasty",{_id: 27605,str: "parse Avon",date: new Date("2018-09-06T10:36:05.916Z"),obj: {_id: 27606,str: "Kids quantify Costa Rican Colon",array: []}},new Date("2018-09-06T13:49:50.352Z"),{_id: 27607,obj: {_id: 27608,str: "Awesome back-end",num: 46337,date: new Date("2018-09-06T13:24:02.739Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 27609,str: "TCP Zimbabwe Dollar",num: 87666,date: new Date("2018-09-06T15:27:49.911Z"),array: [new Date("2018-09-06T03:04:10.552Z"),new Date("2018-09-06T05:12:48.128Z"),80090,40501,{_id: 27610,str: "Platinum action-items Investment Account",num: 74938,date: new Date("2018-09-06T06:21:21.640Z"),array: [{_id: 27611,num: 19239,date: new Date("2018-09-05T21:47:30.587Z"),array: []},new Date("2018-09-06T03:24:47.273Z"),12647],obj: {}},"Lao People's Democratic Republic","Pre-emptive","functionalities challenge Program",93577,"neural Fantastic Fresh Gloves Credit Card Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27612,str: "Communications bypassing deposit",num: 44171,date: new Date("2018-09-06T10:31:28.399Z"),array: [],obj: {_id: 27613,str: "Global",num: 43385,date: new Date("2018-09-06T06:08:12.228Z"),array: [new Date("2018-09-06T17:42:43.584Z"),70183,new Date("2018-09-06T01:48:37.917Z"),"eyeballs Vermont",22588,25675,new Date("2018-09-06T00:51:18.829Z"),new Date("2018-09-06T08:10:05.793Z"),{_id: 27614,array: ["Product bypass",[],"Motorway Future",new Date("2018-09-06T09:50:20.965Z"),{_id: 27615,str: "International generate Officer",num: 96200,date: new Date("2018-09-06T01:23:41.172Z"),obj: {_id: 27616,str: "Mississippi Specialist",num: 11683,date: new Date("2018-09-06T10:40:53.358Z"),array: ["deploy","Avon Soft",["secondary holistic input"]]}}],obj: {_id: 27617,num: 6032,array: [],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 27618,str: "Oregon Cotton Facilitator",num: 7509,date: new Date("2018-09-06T08:29:27.361Z"),array: [],obj: {_id: 27619,str: "system leverage withdrawal",date: new Date("2018-09-06T14:08:51.061Z"),array: ["European Monetary Unit (E.M.U.-6)",59119,new Date("2018-09-06T17:23:15.087Z"),"Dynamic",new Date("2018-09-06T11:27:58.053Z"),"azure Money Market Account program","haptic Stand-alone",{_id: 27620,str: "Street synthesize",num: 97373,date: new Date("2018-09-06T14:17:00.010Z"),array: [new Date("2018-09-06T00:44:41.353Z"),[72434]],obj: {_id: 27621,num: 66403,date: new Date("2018-09-06T00:56:48.259Z")}},10951,new Date("2018-09-06T07:07:26.460Z"),[],{_id: 27622,str: "Wyoming",array: []},55452,new Date("2018-09-06T15:56:54.508Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 27623,str: "hacking Handcrafted optimal",num: 43297,date: new Date("2018-09-06T13:15:46.892Z"),array: [12131,{_id: 27624,str: "Fresh wireless Rustic",num: 297,array: [60234],obj: {_id: 27625,str: "Buckinghamshire Borders",num: 18509,array: []}},new Date("2018-09-05T22:10:34.466Z"),"transparent",new Date("2018-09-06T10:20:30.924Z"),[],"Avon Sudanese Pound",new Date("2018-09-06T07:01:13.558Z"),{_id: 27626,num: 20069,date: new Date("2018-09-05T23:23:20.892Z"),obj: {}},{_id: 27627,str: "Small Soft Salad Tuna monitor",date: new Date("2018-09-06T02:42:42.535Z"),array: [55808,"Licensed",new Date("2018-09-06T06:42:12.880Z"),"Buckinghamshire"],obj: {_id: 27628,num: 1667,date: new Date("2018-09-06T06:49:21.191Z"),array: []}},16290,"Sports"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27629,str: "Consultant Lao People's Democratic Republic Innovative",num: 73825,date: new Date("2018-09-05T21:28:40.655Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27630,str: "Car",num: 55531,date: new Date("2018-09-06T05:46:21.719Z"),array: ["indexing Research",17676,new Date("2018-09-05T21:23:19.619Z"),new Date("2018-09-06T01:31:05.208Z"),"Face to face payment leading edge","Corporate Small",new Date("2018-09-06T00:26:25.140Z"),64510,[],{_id: 27631,str: "JSON Compatible Berkshire",date: new Date("2018-09-05T20:26:27.125Z"),array: [],obj: {}},96018,{_id: 27632,str: "secondary Fantastic Rubber Fish hack",num: 38680,date: new Date("2018-09-06T17:11:22.418Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27633,str: "calculate",num: 74094,date: new Date("2018-09-06T00:31:54.103Z"),array: [84173,"Beauty Latvia Riel",new Date("2018-09-06T15:59:06.041Z"),"invoice Shirt",new Date("2018-09-06T06:33:24.726Z"),new Date("2018-09-06T10:15:32.146Z"),40332,"Tugrik Developer Park","Handcrafted synthesize",{_id: 27634,str: "deposit Producer auxiliary",num: 74516,date: new Date("2018-09-05T23:06:43.834Z"),array: [],obj: {_id: 27635,str: "collaborative connect RAM",num: 65704,array: [{_id: 27636,str: "models Marketing",date: new Date("2018-09-06T17:43:25.258Z"),array: [],obj: {}},{_id: 27637,num: 4850,date: new Date("2018-09-06T00:12:48.550Z"),obj: {_id: 27638,str: "Liaison",num: 20871,date: new Date("2018-09-06T05:15:37.752Z"),array: [],obj: {}}}],obj: {}}},38690,13384]});
    },

    function(coll) {
        return coll.insert({_id: 27639,str: "focus group",date: new Date("2018-09-06T16:49:21.028Z"),array: [],obj: {_id: 27640,str: "Springs Ecuador Keyboard",num: 62040,date: new Date("2018-09-06T15:02:38.117Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27641,str: "Bedfordshire supply-chains",num: 53989,date: new Date("2018-09-06T05:40:58.455Z"),obj: {_id: 27642,str: "generate high-level",num: 71606,date: new Date("2018-09-06T16:49:12.136Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27643,str: "applications Plastic",num: 8236,date: new Date("2018-09-06T03:26:16.454Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27644,str: "withdrawal Roads Specialist",num: 96696,date: new Date("2018-09-05T21:47:11.797Z"),array: [new Date("2018-09-05T21:51:33.633Z"),81902,new Date("2018-09-06T17:13:16.176Z"),["productize Sleek Metal Shoes"],{_id: 27645,str: "AI user-centric",num: 28123,array: [26392,21543],obj: {_id: 27646,str: "disintermediate",date: new Date("2018-09-05T22:14:53.088Z"),array: [],obj: {}}},new Date("2018-09-06T04:41:39.844Z"),["Savings Account Turnpike District",{_id: 27647,num: 95146,date: new Date("2018-09-06T14:15:28.058Z"),array: [],obj: {_id: 27648,num: 8303,date: new Date("2018-09-06T04:06:24.624Z"),array: []}},"Liaison Legacy New Hampshire"],new Date("2018-09-06T00:00:17.612Z"),[],90562,new Date("2018-09-06T01:44:11.048Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27649,str: "Implementation compress analyzer",num: 98639,date: new Date("2018-09-06T06:01:16.689Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27650,str: "withdrawal",num: 26743,date: new Date("2018-09-06T09:58:18.983Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27651,str: "bluetooth",num: 50252,date: new Date("2018-09-06T19:29:01.217Z"),array: [19746,new Date("2018-09-06T18:20:27.867Z"),4693,{_id: 27652,str: "HDD Rue Distributed",num: 63556,date: new Date("2018-09-05T22:35:26.338Z"),array: []},"Bacon","Berkshire",new Date("2018-09-06T00:01:21.314Z"),{_id: 27653,str: "Oklahoma",num: 2705,date: new Date("2018-09-05T20:11:03.130Z"),array: [],obj: {}},"Croatian Kuna European Unit of Account 9(E.U.A.-9) wireless",63685,[new Date("2018-09-06T07:27:03.815Z"),77074],"port Zambian Kwacha"],obj: {_id: 27654,num: 24700,date: new Date("2018-09-06T08:38:32.260Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27655,num: 39729,date: new Date("2018-09-06T15:20:58.073Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27656,str: "local area network extend needs-based",num: 91337,date: new Date("2018-09-06T05:35:17.704Z"),array: ["iterate incubate Cambridgeshire",37264,[],new Date("2018-09-06T01:05:39.603Z"),new Date("2018-09-06T13:54:07.638Z"),"content",new Date("2018-09-05T20:13:20.731Z"),{_id: 27657,str: "array Practical Steel Gloves Frozen",array: [],obj: {_id: 27658,str: "backing up Unbranded Swiss Franc",num: 37044,date: new Date("2018-09-06T16:46:22.436Z"),array: [81517],obj: {}}},new Date("2018-09-06T16:47:27.234Z"),32535,"Granite Saint Barthelemy indexing",75354,[],[]],obj: {_id: 27659,str: "Orchestrator Cotton Producer",num: 39726,date: new Date("2018-09-06T09:26:14.828Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27660,str: "seize function generating",num: 13784,date: new Date("2018-09-06T18:50:30.007Z"),array: [new Date("2018-09-05T22:01:53.440Z"),{_id: 27661,str: "Unbranded Concrete Computer",date: new Date("2018-09-06T11:15:29.631Z"),array: [],obj: {_id: 27662,str: "parsing Incredible Fresh Fish invoice",num: 20955,date: new Date("2018-09-06T09:45:57.732Z"),array: [[]],obj: {}}},"Frozen",94819,36948,"Indiana",47191,"Markets circuit",new Date("2018-09-06T15:57:57.182Z"),new Date("2018-09-06T06:24:17.939Z"),new Date("2018-09-06T09:12:59.433Z"),"blue",{_id: 27663,str: "relationships Borders",num: 3196,date: new Date("2018-09-06T17:00:00.561Z"),obj: {_id: 27664,date: new Date("2018-09-05T21:57:45.465Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 27665,str: "online teal Rand Loti",num: 76444,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27666,str: "Fresh Slovenia toolset",num: 75726,date: new Date("2018-09-06T03:24:57.781Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27667,str: "Argentine Peso firewall withdrawal",num: 4527,array: ["synthesize capacitor overriding",57907,75848,new Date("2018-09-06T04:19:29.515Z"),new Date("2018-09-06T17:46:52.567Z"),new Date("2018-09-05T23:11:56.319Z"),"feed",[new Date("2018-09-06T10:59:21.135Z"),{_id: 27668,date: new Date("2018-09-06T11:19:14.234Z"),obj: {}}],"feed",[],56165,{_id: 27669,str: "wireless",date: new Date("2018-09-06T11:51:55.385Z"),array: ["Intelligent Wooden Shoes payment",new Date("2018-09-06T07:27:25.973Z")],obj: {_id: 27670,str: "web-readiness Small ROI",num: 46782,date: new Date("2018-09-06T00:15:11.742Z"),array: [],obj: {_id: 27671,str: "Holy See (Vatican City State)",num: 47289,date: new Date("2018-09-06T13:06:02.866Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 27672,str: "Money Market Account",num: 93815,date: new Date("2018-09-06T01:22:56.304Z"),array: ["3rd generation Indiana Principal",new Date("2018-09-06T06:26:25.752Z"),60811,new Date("2018-09-06T09:17:08.261Z"),"Loaf",88280],obj: {_id: 27673,str: "turquoise",num: 33969,date: new Date("2018-09-05T22:10:03.630Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27674,str: "International HDD Dynamic",num: 2912,date: new Date("2018-09-06T17:16:33.888Z"),array: [],obj: {_id: 27675,str: "Cambridgeshire platforms SDD",num: 35577,date: new Date("2018-09-05T20:10:53.910Z"),array: [[],11871,15192,51055,new Date("2018-09-06T13:39:58.522Z"),{_id: 27676,str: "EXE",num: 82227,date: new Date("2018-09-05T22:34:22.875Z"),array: ["deposit New Zealand Fantastic",new Date("2018-09-05T22:21:22.399Z"),"hacking Spur monitoring",18942],obj: {}},new Date("2018-09-06T07:35:49.896Z"),"Bosnia and Herzegovina Quetzal","quantifying",[new Date("2018-09-06T13:13:53.775Z"),{_id: 27677,str: "Corporate violet",array: [],obj: {}}],69424]}});
    },

    function(coll) {
        return coll.insert({_id: 27678,str: "compress",num: 89145,date: new Date("2018-09-06T02:08:38.657Z"),array: [],obj: {_id: 27679,str: "International Liberian Dollar",num: 87416,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27680,str: "withdrawal",num: 10879,date: new Date("2018-09-05T21:05:15.253Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27681,str: "Dynamic",num: 20315,date: new Date("2018-09-06T11:31:08.984Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27682,str: "encoding Berkshire Home",num: 93766,date: new Date("2018-09-06T15:19:05.553Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27683,str: "maroon",num: 71724,array: ["implementation",26551,"Investment Account Web high-level","transitional application Credit Card Account",new Date("2018-09-06T03:02:13.186Z"),new Date("2018-09-05T21:04:17.691Z"),new Date("2018-09-06T02:53:05.319Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27684,num: 44141,date: new Date("2018-09-06T12:48:51.465Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27685,str: "iterate haptic",num: 84807,date: new Date("2018-09-06T01:17:31.608Z"),array: [new Date("2018-09-06T10:18:15.140Z"),new Date("2018-09-06T06:09:36.252Z"),"Spring convergence haptic","Practical compressing",{_id: 27686,str: "Wooden Hawaii JBOD",date: new Date("2018-09-05T21:35:22.343Z"),array: [[],{_id: 27687,num: 93572,date: new Date("2018-09-06T03:08:33.909Z"),array: [],obj: {}},835,"Future",{_id: 27688,num: 48651,date: new Date("2018-09-06T03:26:44.454Z"),array: []}],obj: {_id: 27689,str: "leading edge synthesize Rustic Granite Mouse",num: 2143,array: [99698],obj: {}}},new Date("2018-09-06T17:43:19.183Z"),83660,[],new Date("2018-09-06T09:08:15.525Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27690,str: "impactful SCSI",num: 85377,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27691,str: "Generic",date: new Date("2018-09-06T05:20:47.163Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27692,str: "Internal Persevering",num: 64733,date: new Date("2018-09-06T09:06:45.993Z"),array: [],obj: {_id: 27693,str: "matrix users",num: 93518,date: new Date("2018-09-06T03:53:07.035Z"),array: [["Germany Algerian Dinar definition",new Date("2018-09-06T18:30:00.817Z")],55375,"Gorgeous Wooden Pants asynchronous","Auto Loan Account",{_id: 27694,num: 7489,array: [],obj: {}},[new Date("2018-09-06T08:20:50.227Z")],new Date("2018-09-06T15:36:40.778Z"),new Date("2018-09-06T01:51:00.091Z"),new Date("2018-09-05T20:30:09.474Z"),"Adaptive",85062,{_id: 27695,str: "Gloves",num: 9318,obj: {_id: 27696,str: "neural",num: 57013,date: new Date("2018-09-06T00:55:11.796Z"),obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 27697,str: "Fantastic Wooden Ball",num: 44908,date: new Date("2018-09-06T01:41:49.029Z"),array: [new Date("2018-09-06T00:11:39.083Z"),62846,new Date("2018-09-06T05:21:33.281Z"),"Quality firewall synthesize","Money Market Account B2C","Branch","Unbranded Concrete Cheese disintermediate Estonia",new Date("2018-09-06T18:02:48.060Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27698,str: "Norwegian Krone",num: 19901,date: new Date("2018-09-06T01:01:37.250Z"),array: [[],[],83296,new Date("2018-09-06T04:31:01.701Z"),"Car Infrastructure purple","open architecture motivating",new Date("2018-09-06T15:26:09.022Z"),70704,{_id: 27699,num: 25845,date: new Date("2018-09-06T04:03:58.268Z"),array: ["evolve CFP Franc"],obj: {}},"Kansas Granite"],obj: {_id: 27700,str: "RAM Bosnia and Herzegovina",num: 67067,date: new Date("2018-09-06T02:32:49.677Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27701,str: "asymmetric Division",num: 22170,date: new Date("2018-09-06T07:34:30.862Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27702,str: "Intelligent Metal Salad Wall",num: 60068,date: new Date("2018-09-05T23:53:26.090Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27703,str: "bypassing",date: new Date("2018-09-06T08:47:51.559Z"),array: [39766,86554,"Games",new Date("2018-09-06T16:52:49.548Z"),"RSS Refined Plastic Pants",21824,"circuit Dynamic",new Date("2018-09-06T17:24:52.875Z"),89832,[],{_id: 27704,str: "Savings Account Libyan Arab Jamahiriya hard drive",array: ["Supervisor Rustic Cotton Fish",{_id: 27705,str: "Wisconsin",num: 46469,date: new Date("2018-09-05T21:29:40.268Z"),array: [],obj: {_id: 27706,num: 17835,date: new Date("2018-09-05T22:03:56.085Z"),obj: {}}},{_id: 27707,str: "e-commerce Shirt",num: 50064,date: new Date("2018-09-06T15:37:45.964Z"),array: [40149],obj: {_id: 27708,num: 54430,date: new Date("2018-09-05T23:35:46.824Z"),obj: {_id: 27709,str: "GB Unbranded infomediaries",obj: {}}}}]},"Money Market Account back up Brazilian Real",new Date("2018-09-05T22:43:07.285Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27710,num: 84037,date: new Date("2018-09-06T07:58:38.063Z"),array: ["quantify incentivize",36656,[],new Date("2018-09-06T02:20:25.240Z"),"cohesive Front-line",new Date("2018-09-06T06:17:38.976Z"),43212,57120,{_id: 27711,str: "XML",num: 95250,date: new Date("2018-09-06T14:39:30.775Z"),array: [],obj: {_id: 27712,str: "transmitter",num: 62421,date: new Date("2018-09-06T08:10:44.721Z"),array: [],obj: {}}},"Paraguay Rapid","Organic",33692,new Date("2018-09-05T22:06:02.488Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27713,str: "Personal Loan Account Spring",date: new Date("2018-09-06T12:08:40.082Z"),array: [],obj: {_id: 27714,str: "Frozen bleeding-edge models",num: 4207,array: [4381,"Parks",67108,new Date("2018-09-06T18:43:35.096Z"),"drive",{_id: 27715,str: "array Refined Metal Mouse CFP Franc",num: 73035,date: new Date("2018-09-06T09:50:05.855Z"),array: []},24226,new Date("2018-09-05T23:08:35.375Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27716,str: "e-markets Fords calculating",num: 70314,date: new Date("2018-09-06T06:09:59.244Z"),array: ["Ergonomic Checking Account IB",[],{_id: 27717,str: "Handmade Djibouti Franc",num: 45373,date: new Date("2018-09-06T09:46:26.380Z"),array: [],obj: {_id: 27718,str: "Consultant capacity",num: 8841,date: new Date("2018-09-06T08:31:35.554Z"),array: [],obj: {}}},new Date("2018-09-06T13:44:04.514Z"),48983,57263,new Date("2018-09-06T18:36:20.656Z"),"Liechtenstein architectures synergistic",new Date("2018-09-06T14:02:24.105Z"),"Division Facilitator Open-source",38018,[]],obj: {_id: 27719,str: "Stravenue",array: ["access","PCI Personal Loan Account"]}});
    },

    function(coll) {
        return coll.insert({_id: 27720,num: 78606,date: new Date("2018-09-06T12:00:19.539Z"),array: [95788,88553,[],61834,{_id: 27721,str: "Triple-buffered functionalities fuchsia",num: 50650,date: new Date("2018-09-06T10:25:56.351Z"),array: [new Date("2018-09-06T17:21:12.571Z")],obj: {}},"Salad",new Date("2018-09-06T14:24:43.418Z"),"Villages Flat","transmit XML New Zealand",{_id: 27722,str: "Intelligent mesh",num: 11410,array: [],obj: {_id: 27723,str: "auxiliary Cotton context-sensitive",num: 43205,date: new Date("2018-09-06T00:03:22.760Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27724,num: 79173,date: new Date("2018-09-05T22:47:21.693Z"),array: ["Jamaica Small deposit",78613,new Date("2018-09-06T13:48:08.882Z"),2803,{_id: 27725,str: "bus Kentucky supply-chains",num: 23376,date: new Date("2018-09-05T20:49:49.045Z"),array: ["functionalities",[]],obj: {_id: 27726,str: "extensible Cambridgeshire Gibraltar",num: 34445,date: new Date("2018-09-06T05:36:03.233Z"),array: [new Date("2018-09-06T10:40:49.142Z"),{_id: 27727,str: "Unbranded Rubber Sausages flexibility",num: 88466,array: [28713,new Date("2018-09-06T09:36:56.545Z"),"Maldives",47061],obj: {_id: 27728,date: new Date("2018-09-06T08:29:29.503Z")}}],obj: {}}},[],[],87692,new Date("2018-09-06T17:53:45.434Z"),new Date("2018-09-06T00:01:17.748Z"),["Gorgeous Metal Computer"]],obj: {_id: 27729,str: "Highway Central",num: 76060}});
    },

    function(coll) {
        return coll.insert({_id: 27730,str: "24/7 integrated Switzerland",num: 75415,date: new Date("2018-09-06T15:50:13.206Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27731,num: 1557,date: new Date("2018-09-06T05:38:11.434Z"),array: [33402,new Date("2018-09-06T17:25:55.889Z"),new Date("2018-09-06T04:09:51.057Z"),50226,"indexing pink"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27732,str: "AGP",num: 60979,date: new Date("2018-09-06T17:52:15.322Z"),array: [],obj: {_id: 27733,str: "bandwidth COM Oval",date: new Date("2018-09-06T10:22:23.984Z"),array: [new Date("2018-09-06T11:24:05.454Z"),"logistical XSS",59245,6611,new Date("2018-09-06T18:20:39.475Z"),"system gold deliverables",["drive"],new Date("2018-09-06T18:41:27.547Z"),96771,new Date("2018-09-06T08:13:07.654Z"),[],{_id: 27734,str: "B2B monitoring Practical",array: ["turquoise green",new Date("2018-09-06T19:35:46.406Z")],obj: {}},62332,{_id: 27735,str: "Money Market Account Dynamic",num: 89787,date: new Date("2018-09-06T14:09:57.836Z"),array: [],obj: {}},1771],obj: {_id: 27736,num: 54016,date: new Date("2018-09-06T15:50:17.961Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 27737,str: "plug-and-play Beauty invoice",num: 65025,array: [68288,new Date("2018-09-06T01:34:03.373Z"),17495,"coherent Configuration Rustic Concrete Shoes",new Date("2018-09-06T07:32:25.546Z"),{_id: 27738,str: "THX Rhode Island",num: 52512,date: new Date("2018-09-06T06:13:06.984Z"),array: [],obj: {}},"Maryland",{_id: 27739,str: "Frozen",date: new Date("2018-09-06T12:11:45.877Z"),obj: {}},"backing up",[new Date("2018-09-05T23:06:56.562Z"),14310],new Date("2018-09-06T04:38:59.729Z")],obj: {_id: 27740,num: 19466,date: new Date("2018-09-06T05:25:21.631Z"),array: [],obj: {_id: 27741,str: "Montana New Mexico",num: 78494,array: ["Shoes pink navigate",[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27742,str: "Monitored",num: 72739,date: new Date("2018-09-06T13:11:56.443Z"),array: [84227,[new Date("2018-09-05T21:31:56.964Z")],"attitude",new Date("2018-09-05T20:57:49.363Z"),4432,new Date("2018-09-06T10:02:42.166Z"),"Baby","Northern Mariana Islands",40499,new Date("2018-09-06T05:38:36.446Z"),[],{_id: 27743,str: "enterprise",num: 87467,date: new Date("2018-09-06T19:32:59.311Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27744,str: "invoice",num: 50341,date: new Date("2018-09-06T01:42:39.161Z"),array: [35624,"Rand Namibia Dollar",[],new Date("2018-09-06T16:09:40.294Z"),"implement",85860,new Date("2018-09-06T08:43:41.922Z"),new Date("2018-09-05T22:53:06.792Z"),20732],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27745,str: "pink functionalities",num: 74021,date: new Date("2018-09-05T22:23:32.051Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27746,str: "empower action-items",num: 28026,date: new Date("2018-09-06T07:51:49.797Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27747,str: "Function-based strategy",num: 71122,date: new Date("2018-09-06T08:15:04.797Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27748,str: "Berkshire Computer Credit Card Account",date: new Date("2018-09-06T15:25:07.583Z"),obj: {_id: 27749,num: 30233,date: new Date("2018-09-06T12:17:23.852Z"),array: [new Date("2018-09-06T09:58:12.208Z"),28320,47336,new Date("2018-09-06T13:55:06.487Z"),[{_id: 27750,str: "back-end Practical",num: 44297,date: new Date("2018-09-06T01:16:14.013Z"),array: ["Utah"]}],"parsing wireless",new Date("2018-09-06T18:48:39.704Z"),10293,new Date("2018-09-06T17:14:00.169Z"),"engineer implement","USB",87912,new Date("2018-09-05T23:31:01.294Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27751,str: "Handmade technologies Bedfordshire",num: 95329,date: new Date("2018-09-06T10:16:10.207Z"),array: [76777,"strategize Assurance",[98925,new Date("2018-09-06T05:25:16.317Z"),{_id: 27752,str: "ROI",num: 32916,date: new Date("2018-09-06T13:17:53.355Z"),array: [],obj: {_id: 27753,str: "Licensed Cotton Fish neutral",date: new Date("2018-09-06T10:24:34.543Z"),array: [{_id: 27754,str: "SSL Distributed",obj: {_id: 27755,num: 23456,date: new Date("2018-09-06T10:45:24.005Z"),array: [],obj: {}}},"withdrawal"],obj: {}}},new Date("2018-09-06T11:21:23.271Z")],56552,new Date("2018-09-06T02:59:45.999Z"),new Date("2018-09-06T15:34:43.086Z"),"coherent Practical Wooden Table Optimization",46387,{_id: 27756,str: "optical Outdoors",num: 63951,date: new Date("2018-09-05T23:12:39.562Z"),array: [60249,"Home compressing parse"]},"Pizza New Jersey Savings Account"]});
    },

    function(coll) {
        return coll.insert({_id: 27757,str: "Response",num: 36550,date: new Date("2018-09-06T10:25:25.148Z"),array: [83673,"Buckinghamshire PNG Handmade",17627,new Date("2018-09-06T14:38:37.445Z"),50280,"deliver",{_id: 27758,str: "Berkshire multi-byte Investor",num: 56723,date: new Date("2018-09-06T12:43:37.935Z"),array: [],obj: {_id: 27759,str: "workforce Chair Mill",array: [],obj: {}}},{_id: 27760,num: 254,date: new Date("2018-09-06T16:53:37.840Z"),array: ["Wyoming Mobility Enterprise-wide"]},new Date("2018-09-06T11:05:12.665Z"),new Date("2018-09-06T01:17:39.423Z"),{_id: 27761,str: "Baht",num: 63080,array: [[],[new Date("2018-09-06T02:59:38.884Z")],{_id: 27762,str: "HDD Pound Sterling",num: 12695,date: new Date("2018-09-06T16:57:29.613Z"),obj: {}},84316,36227,"Handcrafted Steel Mouse"],obj: {_id: 27763,str: "integrated Cliff Rustic",date: new Date("2018-09-06T03:56:11.359Z")}}],obj: {_id: 27764,num: 18194,date: new Date("2018-09-06T15:52:03.846Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27765,str: "visualize",num: 12371,date: new Date("2018-09-05T20:53:02.357Z"),array: [new Date("2018-09-05T23:20:14.413Z"),["asymmetric optical online",59718,{_id: 27766,str: "New Hampshire Rubber",num: 10376,date: new Date("2018-09-06T11:05:41.959Z"),obj: {_id: 27767,date: new Date("2018-09-06T00:09:33.468Z"),array: [],obj: {}}},"Security Generic Cotton Chips"],new Date("2018-09-06T10:19:46.017Z"),77352,"Re-contextualized Ohio",33501,"black Arizona",50301,[],new Date("2018-09-06T00:43:52.834Z"),{_id: 27768,str: "cutting-edge Sleek Hungary",num: 96203,array: [],obj: {_id: 27769,num: 40835,date: new Date("2018-09-06T05:42:08.398Z"),array: ["Wyoming",71171],obj: {_id: 27770,str: "Accountability",num: 20895}}}],obj: {_id: 27771,str: "Research value-added",num: 34028,date: new Date("2018-09-06T08:41:26.104Z")}});
    },

    function(coll) {
        return coll.insert({_id: 27772,str: "SDD",num: 80908,date: new Date("2018-09-06T03:14:06.031Z"),array: [],obj: {_id: 27773,str: "Yuan Renminbi Metal",date: new Date("2018-09-06T11:57:36.812Z"),array: [new Date("2018-09-06T10:48:23.522Z"),new Date("2018-09-05T20:31:24.016Z"),"calculating grey Salad",new Date("2018-09-06T02:13:49.589Z"),"Mobility",{_id: 27774,str: "Customer-focused",num: 34169,date: new Date("2018-09-06T17:27:32.315Z"),array: [6636,{_id: 27775,num: 80324,obj: {_id: 27776,str: "indigo Belize Dale",num: 87803,date: new Date("2018-09-06T06:51:03.901Z"),array: [new Date("2018-09-06T13:55:08.458Z"),"Personal Loan Account Drives Web",60796,"Corporate",6364],obj: {_id: 27777,str: "American Samoa monitoring",num: 67973,date: new Date("2018-09-06T11:26:45.083Z"),obj: {}}}},[]],obj: {}},54304,[new Date("2018-09-06T04:19:39.473Z"),"24/7"],new Date("2018-09-06T04:49:14.519Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 27778,str: "Gambia Manor Tajikistan",num: 72278,date: new Date("2018-09-06T08:12:53.510Z"),array: [],obj: {_id: 27779,str: "International",num: 5100,date: new Date("2018-09-06T16:19:42.343Z"),array: [82485,"EXE Won Frozen",new Date("2018-09-06T03:34:03.501Z"),76431,"Turkmenistan",84089,"metrics",new Date("2018-09-06T10:48:06.536Z"),new Date("2018-09-06T05:27:35.776Z"),"Malagasy Ariary bus connect",new Date("2018-09-06T06:37:54.396Z"),96172,"actuating"],obj: {_id: 27780,num: 65321,date: new Date("2018-09-06T08:01:08.188Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27781,num: 79748,date: new Date("2018-09-06T18:11:06.518Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27782,str: "Rand Loti Gloves",num: 33366,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27783,str: "internet solution access",num: 96113,date: new Date("2018-09-06T03:32:40.164Z"),array: ["hard drive Personal Loan Account Upgradable",new Date("2018-09-06T11:14:10.846Z"),new Date("2018-09-06T03:38:35.360Z"),63568,[],[{_id: 27784,str: "Investment Account Consultant",date: new Date("2018-09-06T09:35:46.484Z"),array: [],obj: {}},"Refined Steel Salad indexing Integration"],"real-time connect",29016,44149,{_id: 27785,str: "override",num: 94686,array: [],obj: {_id: 27786,num: 30246,date: new Date("2018-09-05T21:12:38.717Z"),array: [new Date("2018-09-06T02:33:56.319Z")],obj: {}}},new Date("2018-09-06T10:03:59.913Z"),{_id: 27787,date: new Date("2018-09-06T02:37:52.908Z")},"Unbranded Fantastic Concrete Bacon"],obj: {_id: 27788,str: "Borders optimize green",num: 52053,obj: {_id: 27789,str: "Concrete calculating",array: [new Date("2018-09-06T14:54:01.466Z"),[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 27790,str: "analyzer Towels upward-trending",num: 13195,date: new Date("2018-09-06T05:55:45.440Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27791,num: 91495,date: new Date("2018-09-06T06:50:03.783Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27792,str: "Centers New York",date: new Date("2018-09-06T10:44:16.927Z"),array: [5640,{_id: 27793,str: "Program",num: 18081,date: new Date("2018-09-06T12:21:37.626Z"),array: [new Date("2018-09-06T07:08:45.207Z"),88576,"quantify Response Buckinghamshire",69879,{_id: 27794,str: "Circle",num: 39837,date: new Date("2018-09-06T06:00:04.117Z"),obj: {_id: 27795,str: "Sleek Iowa methodologies",num: 42795,date: new Date("2018-09-06T01:56:20.667Z"),array: [],obj: {}}},new Date("2018-09-06T05:55:50.172Z"),"South Dakota Practical Steel Hat"]},36078,"Forward","maroon",77599,"Avon encoding",new Date("2018-09-06T07:19:20.243Z"),{_id: 27796,num: 32417,date: new Date("2018-09-06T01:48:20.483Z"),obj: {}}],obj: {_id: 27797,obj: {_id: 27798,str: "Palladium",num: 5320,date: new Date("2018-09-06T08:03:38.431Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 27799,str: "Outdoors hack",date: new Date("2018-09-06T19:13:01.353Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27800,str: "El Salvador Colon US Dollar AGP",num: 26716,date: new Date("2018-09-06T06:41:02.860Z"),array: ["lavender","Interactions Quality Intelligent Fresh Bike",30256,"United States of America Cheese supply-chains",{_id: 27801,str: "core",num: 4745,date: new Date("2018-09-06T10:44:56.626Z"),array: [new Date("2018-09-06T14:24:33.922Z")],obj: {}},new Date("2018-09-06T09:36:45.032Z"),new Date("2018-09-05T20:44:29.088Z"),[20402,"Hills Plastic calculate"],new Date("2018-09-06T12:30:01.001Z"),10774,9697,[],"Up-sized"],obj: {_id: 27802,num: 30778,date: new Date("2018-09-06T03:39:14.609Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27803,str: "Intelligent",num: 15302,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27804,str: "override seamless",date: new Date("2018-09-06T04:37:00.875Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27805,str: "vortals hack silver",date: new Date("2018-09-06T00:39:57.525Z"),array: [97517,61767,"PNG Brand Oregon",new Date("2018-09-06T19:36:58.004Z"),new Date("2018-09-05T21:56:58.606Z"),"regional",6202,60849,new Date("2018-09-06T13:18:45.983Z")],obj: {_id: 27806,num: 85350,date: new Date("2018-09-06T15:43:12.853Z"),array: [],obj: {_id: 27807,str: "turquoise magenta grey",num: 45917,date: new Date("2018-09-05T22:19:19.621Z"),array: ["Cocos (Keeling) Islands best-of-breed","Avon Credit Card Account",{_id: 27808,str: "frictionless metrics",num: 47173,obj: {_id: 27809,str: "Iran",num: 86516,date: new Date("2018-09-05T23:59:29.577Z"),array: [[new Date("2018-09-05T20:11:40.444Z"),{_id: 27810,str: "Industrial",num: 3890,date: new Date("2018-09-06T10:35:46.306Z"),array: ["Credit Card Account International virtual"]}],[],{_id: 27811,num: 95622,date: new Date("2018-09-06T15:07:09.621Z")},[],{_id: 27812,str: "Garden",num: 98813,array: [],obj: {}}],obj: {}}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27813,str: "interactive embrace",date: new Date("2018-09-06T16:00:21.962Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27814,str: "Quality Tactics Personal Loan Account",num: 27047,date: new Date("2018-09-06T02:50:14.980Z"),array: ["Michigan National",55898,11928,{_id: 27815,str: "Rustic Wooden Ball white Intelligent Frozen Keyboard",num: 95960,date: new Date("2018-09-06T08:58:17.130Z"),obj: {}},[new Date("2018-09-06T01:17:42.636Z"),"Handmade"],[],new Date("2018-09-05T22:27:15.804Z"),{_id: 27816,num: 20167,date: new Date("2018-09-06T00:11:22.291Z"),array: []},[[],"digital mint green Small Metal Keyboard",29608,"Cove"]]});
    },

    function(coll) {
        return coll.insert({_id: 27817,str: "Gloves Belarus",num: 68163,date: new Date("2018-09-06T09:41:56.944Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27818,str: "Music transitional",num: 6463,date: new Date("2018-09-06T02:10:03.537Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27819,str: "Jewelery Common",date: new Date("2018-09-05T21:01:29.710Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27820,str: "Handcrafted Gambia Tasty",num: 89771,array: [43130,"invoice",new Date("2018-09-06T14:06:08.448Z"),{_id: 27821,str: "engineer New Caledonia",num: 77183,date: new Date("2018-09-06T16:25:12.145Z"),obj: {_id: 27822,str: "transmit Georgia",num: 82531,date: new Date("2018-09-06T10:26:00.012Z"),array: [],obj: {}}},new Date("2018-09-06T01:10:49.024Z"),30942,1652,new Date("2018-09-06T13:43:16.270Z"),[[]],"Cotton model","circuit Senior"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27823,str: "panel",num: 32830,date: new Date("2018-09-06T03:36:24.975Z"),array: [94714,81541,new Date("2018-09-06T18:09:13.334Z"),new Date("2018-09-06T16:51:10.153Z"),"Buckinghamshire Facilitator invoice","Awesome Granite Gloves New Jersey",{_id: 27824,num: 80033,date: new Date("2018-09-06T11:18:44.790Z"),array: [new Date("2018-09-05T23:45:49.605Z"),new Date("2018-09-06T19:06:28.045Z"),[],[],96126],obj: {_id: 27825,str: "Administrator Home Loan Account",num: 34138,date: new Date("2018-09-05T22:32:45.428Z"),array: ["grey Shoes",72941]}},33369,{_id: 27826,str: "matrices indexing Station",date: new Date("2018-09-06T01:33:00.168Z"),array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 27827,num: 3135,date: new Date("2018-09-06T06:23:43.590Z"),obj: {_id: 27828,str: "Graphical User Interface",num: 98967,date: new Date("2018-09-06T12:33:53.616Z"),array: ["leading-edge withdrawal Connecticut",54925,new Date("2018-09-05T21:21:44.617Z"),new Date("2018-09-06T06:25:31.142Z"),new Date("2018-09-06T14:58:12.676Z"),new Date("2018-09-05T23:37:39.277Z"),"Trinidad and Tobago Dollar Web systems",[],"Soft Chair Greenland",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27829,str: "virtual 24/7",num: 86586,array: [],obj: {_id: 27830,str: "Liaison",num: 72975,date: new Date("2018-09-06T10:05:44.886Z"),array: [[],new Date("2018-09-06T16:47:14.899Z"),new Date("2018-09-06T08:52:37.240Z"),69834,"Colorado","next generation Home Loan Account",new Date("2018-09-06T14:23:14.866Z"),44782],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27831,str: "Personal Loan Account",date: new Date("2018-09-06T15:57:31.177Z"),array: [new Date("2018-09-06T06:13:27.947Z"),new Date("2018-09-05T23:10:07.047Z"),"info-mediaries primary Computer",3672,84331,"zero administration Azerbaijan",36348,[],[{_id: 27832,str: "Gorgeous Frozen Salad",num: 8361,date: new Date("2018-09-06T18:52:21.123Z"),array: [new Date("2018-09-06T14:08:59.892Z")],obj: {}},new Date("2018-09-06T19:50:29.008Z"),"Cotton Programmable"],86867,"secondary",77167,new Date("2018-09-06T06:12:54.987Z")],obj: {_id: 27833,str: "budgetary management iterate Cambridgeshire",num: 51101,date: new Date("2018-09-06T05:57:42.491Z"),array: [],obj: {_id: 27834,str: "Dynamic value-added"}}});
    },

    function(coll) {
        return coll.insert({_id: 27835,str: "cross-media",num: 93582,array: ["transmit task-force",{_id: 27836,num: 10326,date: new Date("2018-09-05T23:06:22.838Z"),array: [],obj: {_id: 27837,str: "integrate Assurance",num: 43688,array: [],obj: {_id: 27838,date: new Date("2018-09-06T02:55:06.278Z")}}},"Frozen high-level synthesize",new Date("2018-09-05T23:30:51.299Z"),42005,"Investor Dynamic Business-focused",78127,new Date("2018-09-06T14:06:36.538Z"),{_id: 27839,str: "payment",date: new Date("2018-09-06T08:19:41.441Z"),array: [],obj: {_id: 27840,str: "systemic Program",num: 74166,obj: {}}},new Date("2018-09-06T04:10:12.072Z"),[[]]]});
    },

    function(coll) {
        return coll.insert({_id: 27841,str: "help-desk",num: 52981,date: new Date("2018-09-06T13:17:26.242Z"),array: [],obj: {_id: 27842,num: 49227,date: new Date("2018-09-06T17:09:22.973Z"),array: ["HTTP transition SMS",{_id: 27843,num: 98996,date: new Date("2018-09-06T16:47:08.210Z"),array: [95394,91209,new Date("2018-09-06T09:41:12.798Z")],obj: {}},new Date("2018-09-06T00:57:45.067Z"),new Date("2018-09-06T15:13:19.672Z"),"killer Gorgeous Frozen Sausages Borders",[],"migration",{_id: 27844,str: "primary Baby",array: [],obj: {}},83618,41593,"bypassing Liaison schemas",[]],obj: {_id: 27845,str: "Small Metal Hat Ergonomic deposit",array: [72143,"turquoise Direct",new Date("2018-09-06T06:53:23.893Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 27846,str: "system",num: 41887,date: new Date("2018-09-06T14:04:37.848Z"),array: [48016,new Date("2018-09-06T00:56:30.919Z"),"Garden challenge Salad",86088,"Costa Rican Colon","black Passage",new Date("2018-09-06T10:28:21.499Z"),24068,52566,86142,{_id: 27847,str: "Assistant",num: 72748,array: [],obj: {_id: 27848,str: "Jewelery Soap Oklahoma",num: 77562,date: new Date("2018-09-06T04:28:59.671Z"),obj: {}}},new Date("2018-09-05T20:49:30.384Z"),new Date("2018-09-05T23:41:47.434Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27849,str: "Gorgeous Metal Sausages Organic",num: 41731,array: ["Auto Loan Account","SMTP Mississippi",new Date("2018-09-06T19:44:57.096Z"),"Gloves Philippine Peso",37554,89759,new Date("2018-09-06T01:38:14.130Z"),new Date("2018-09-05T23:08:18.487Z"),[7914],new Date("2018-09-06T06:46:10.942Z"),62886],obj: {_id: 27850,str: "artificial intelligence",num: 58215,date: new Date("2018-09-05T23:22:05.279Z"),array: [],obj: {_id: 27851,str: "Road integrate Kentucky",num: 90722,date: new Date("2018-09-05T20:19:14.482Z"),array: [[[],new Date("2018-09-06T04:34:28.090Z")],"channels withdrawal Supervisor",17996,{_id: 27852,num: 79718,date: new Date("2018-09-06T04:31:22.220Z"),obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 27853,str: "IB EXE",num: 16234,date: new Date("2018-09-05T21:26:10.808Z"),array: [],obj: {_id: 27854,str: "navigate",num: 66472,date: new Date("2018-09-06T06:33:11.417Z"),array: [55345,"backing up bluetooth Heard Island and McDonald Islands",95265,new Date("2018-09-05T22:04:41.270Z"),"aggregate","next-generation compressing infomediaries",45076,new Date("2018-09-06T11:17:36.385Z"),{_id: 27855,str: "proactive firewall",num: 86775,array: [],obj: {_id: 27856,str: "back up",date: new Date("2018-09-06T14:14:05.392Z"),array: [{_id: 27857,num: 28602,date: new Date("2018-09-06T09:58:08.926Z"),array: ["Sudan"],obj: {_id: 27858,array: [],obj: {}}},new Date("2018-09-06T17:52:18.021Z")]}},["productize GB",{_id: 27859,num: 2406,date: new Date("2018-09-05T22:21:55.458Z")},new Date("2018-09-06T12:41:47.577Z"),new Date("2018-09-06T08:49:54.860Z"),86125,new Date("2018-09-06T19:02:00.087Z"),{_id: 27860,str: "Cheese Licensed",num: 62859,array: [],obj: {}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 27861,str: "Marketing Metal panel",num: 88478,date: new Date("2018-09-05T23:19:23.016Z"),array: [new Date("2018-09-05T22:35:19.842Z"),new Date("2018-09-05T23:55:14.124Z"),"Money Market Account","maximized Practical Plastic Sausages back-end",{_id: 27862,str: "engineer",date: new Date("2018-09-05T21:09:59.853Z"),array: [],obj: {_id: 27863,str: "Roads circuit Personal Loan Account",num: 39882,date: new Date("2018-09-06T08:44:32.503Z"),obj: {}}},"North Dakota interface",53433,91452,new Date("2018-09-06T15:19:24.133Z"),77605,[{_id: 27864,str: "United Kingdom Unbranded",num: 34417,array: []},new Date("2018-09-05T23:32:21.658Z"),89231],new Date("2018-09-06T18:41:00.000Z"),"real-time Cambodia"],obj: {_id: 27865,date: new Date("2018-09-06T16:23:18.917Z"),array: [{_id: 27866,str: "Fresh Tasty",num: 40688,array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27867,str: "Pakistan initiatives",num: 72227,array: ["Granite Executive alarm",new Date("2018-09-06T04:41:57.005Z"),"needs-based","Berkshire Dam",4095,new Date("2018-09-05T23:36:46.986Z"),{_id: 27868,str: "Communications maroon Optional",date: new Date("2018-09-06T00:27:35.603Z"),array: [],obj: {_id: 27869,str: "Supervisor methodology tan",num: 2700,date: new Date("2018-09-06T13:11:05.222Z"),array: [],obj: {}}},"Holy See (Vatican City State) iterate Liaison",{_id: 27870,str: "Toys Graphic Interface Applications",num: 96574,date: new Date("2018-09-05T21:10:39.245Z"),array: [28076],obj: {_id: 27871,num: 53557,obj: {_id: 27872,str: "protocol Manager mission-critical",date: new Date("2018-09-06T11:38:17.761Z")}}},32836]});
    },

    function(coll) {
        return coll.insert({_id: 27873,str: "mission-critical Ghana",num: 27480,date: new Date("2018-09-06T11:16:55.479Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27874,str: "adapter",num: 41650,date: new Date("2018-09-06T04:50:31.406Z"),array: [],obj: {_id: 27875,str: "Practical Plastic Fish Marketing Personal Loan Account",num: 36007,date: new Date("2018-09-05T20:18:39.026Z"),array: [new Date("2018-09-06T18:35:42.924Z"),46393,"Triple-buffered Home Loan Account Illinois",new Date("2018-09-06T18:38:58.175Z"),"override embrace","Computer generate","dynamic architect Plain",{_id: 27876,num: 4462,obj: {_id: 27877,str: "Beauty Representative bi-directional",num: 28502,date: new Date("2018-09-06T13:03:11.317Z"),array: []}},new Date("2018-09-05T23:47:06.042Z"),52384],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27878,str: "Avon",date: new Date("2018-09-06T06:46:51.047Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27879,str: "Home",num: 82414,date: new Date("2018-09-05T20:22:22.538Z"),array: ["clicks-and-mortar",[new Date("2018-09-06T14:30:42.097Z"),87510],"hard drive","bandwidth-monitored",{_id: 27880,str: "Supervisor discrete",num: 18483,date: new Date("2018-09-06T17:54:51.357Z"),array: [],obj: {}},12165,"Incredible",new Date("2018-09-06T13:26:42.696Z"),new Date("2018-09-06T19:05:32.167Z"),["standardization",new Date("2018-09-06T03:54:32.741Z")],20633,48186,{_id: 27881,num: 57420,date: new Date("2018-09-06T07:50:26.708Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27882,str: "Mississippi microchip Robust",num: 92573,date: new Date("2018-09-06T16:08:55.407Z"),array: [new Date("2018-09-06T19:39:37.470Z"),"pixel Home Loan Account",new Date("2018-09-05T20:34:15.440Z"),"Health Director",47473,"green compress Jewelery",[],32794,{_id: 27883,str: "Plain",num: 63759,date: new Date("2018-09-06T13:38:35.634Z"),obj: {}},46915,"Zimbabwe Credit Card Account"],obj: {_id: 27884,str: "Walk Plastic Serbia",array: [],obj: {_id: 27885,num: 31629,date: new Date("2018-09-06T15:41:37.091Z"),array: [new Date("2018-09-06T16:21:44.461Z"),[43613,new Date("2018-09-06T04:52:49.026Z")],[new Date("2018-09-06T08:52:19.977Z"),{_id: 27886,str: "e-commerce",num: 94235,date: new Date("2018-09-06T09:11:55.636Z")},{_id: 27887,str: "deposit EXE",date: new Date("2018-09-06T04:23:32.583Z"),obj: {}}]],obj: {_id: 27888,str: "Land",num: 59251,date: new Date("2018-09-06T08:15:52.676Z"),array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 27889,str: "Montana Tuna",num: 44267,date: new Date("2018-09-06T09:36:36.944Z"),array: [],obj: {_id: 27890,str: "world-class Configuration Kwacha",num: 39961,date: new Date("2018-09-06T06:08:01.388Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27891,str: "blue",num: 50846,array: ["bandwidth",20378,new Date("2018-09-06T13:50:44.664Z"),{_id: 27892,str: "Rustic Metal Hat Customer-focused core",num: 12560,date: new Date("2018-09-06T07:27:30.325Z"),array: [],obj: {_id: 27893,str: "pink",num: 38803,date: new Date("2018-09-06T06:39:11.663Z"),array: [],obj: {}}},84716,3799,[new Date("2018-09-06T04:13:26.005Z"),"Refined Optimized",new Date("2018-09-06T09:32:57.849Z")],"infrastructures Executive","supply-chains matrix invoice",new Date("2018-09-05T21:58:49.813Z"),24408],obj: {_id: 27894,str: "end-to-end Bacon Iowa",date: new Date("2018-09-06T04:37:43.454Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27895,str: "Small Soft",num: 84613,date: new Date("2018-09-06T08:29:16.159Z"),array: [],obj: {_id: 27896,str: "purple Ranch",num: 70737,date: new Date("2018-09-05T20:47:01.835Z"),array: [46956,new Date("2018-09-06T07:58:20.229Z"),{_id: 27897,str: "Future back-end Web",num: 5808,array: [],obj: {}},"Kiribati",new Date("2018-09-05T20:51:11.746Z"),33141,"architect",13934,new Date("2018-09-06T19:05:12.087Z"),["compelling productize Granite"],"Gorgeous Wooden Shoes Incredible Fresh Keyboard",[{_id: 27898,str: "extranet",num: 63983,date: new Date("2018-09-06T15:08:37.804Z"),obj: {}}],new Date("2018-09-06T11:58:20.416Z"),57902],obj: {_id: 27899,date: new Date("2018-09-06T03:45:52.341Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27900,str: "Missouri Dynamic Toys",num: 97485,date: new Date("2018-09-06T02:48:38.863Z"),array: [],obj: {_id: 27901,str: "Soft RAM"}});
    },

    function(coll) {
        return coll.insert({_id: 27902,str: "B2B",num: 67276,date: new Date("2018-09-06T07:10:46.326Z"),array: [39419,"interfaces",new Date("2018-09-06T04:27:29.566Z"),new Date("2018-09-06T03:32:48.943Z"),"supply-chains","programming Face to face port",new Date("2018-09-06T04:16:19.976Z"),"override",new Date("2018-09-06T02:14:05.946Z"),new Date("2018-09-06T09:17:40.261Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27903,str: "mobile",num: 46375,date: new Date("2018-09-06T15:40:49.731Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27904,str: "superstructure Spur",num: 95184,date: new Date("2018-09-05T22:16:33.874Z"),array: [{_id: 27905,str: "conglomeration",num: 80763,date: new Date("2018-09-06T17:58:47.954Z"),array: []},new Date("2018-09-06T17:47:29.510Z"),"Handcrafted multi-state",72673,"bandwidth Metal",[89459],"motivating Small Metal Cheese",{_id: 27906,str: "transmitter",num: 65561,date: new Date("2018-09-06T01:35:39.256Z"),array: [new Date("2018-09-06T01:45:12.108Z"),69464],obj: {}},"Reactive Officer",new Date("2018-09-06T17:06:18.307Z"),[],[],{_id: 27907,num: 25404,array: [],obj: {}},new Date("2018-09-06T11:33:55.602Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27908,str: "Investment Account pixel",num: 9860,date: new Date("2018-09-06T02:42:06.368Z"),array: ["Movies Lead",new Date("2018-09-05T23:14:43.057Z"),52586,"Down-sized",new Date("2018-09-06T13:08:52.869Z"),[],15778,"mindshare invoice",[],{_id: 27909,str: "transmitting Product",num: 67244,date: new Date("2018-09-06T08:20:20.898Z"),obj: {}},new Date("2018-09-06T13:21:24.436Z")],obj: {_id: 27910,str: "Row deposit",date: new Date("2018-09-06T11:09:36.254Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27911,str: "calculate",num: 58717,date: new Date("2018-09-06T14:27:12.455Z"),array: [new Date("2018-09-06T17:45:47.141Z"),30758,"Home Loan Account Infrastructure Egypt","Eritrea Bedfordshire","Checking Account success",{_id: 27912,array: []},new Date("2018-09-06T07:30:36.458Z"),"RSS Secured ivory",new Date("2018-09-06T13:33:09.037Z"),[]],obj: {_id: 27913,str: "wireless",num: 23475,date: new Date("2018-09-06T15:39:49.588Z"),array: [57026,[78703,{_id: 27914,str: "Security SAS",num: 8945,date: new Date("2018-09-06T06:32:56.114Z"),obj: {_id: 27915,str: "Checking Account cross-media Poland",num: 1934,date: new Date("2018-09-06T10:25:17.467Z"),array: [],obj: {}}},[]]]}});
    },

    function(coll) {
        return coll.insert({_id: 27916,str: "Automated Borders Soft",num: 45525,date: new Date("2018-09-05T20:31:08.660Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27917,str: "Auto Loan Account Berkshire",num: 11622,date: new Date("2018-09-06T11:03:49.013Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27918,str: "invoice Solutions",date: new Date("2018-09-05T22:14:41.282Z"),array: [new Date("2018-09-05T22:12:07.696Z"),"maroon array",85366,9208,24648,{_id: 27919,num: 12662,date: new Date("2018-09-05T22:35:18.631Z"),array: [],obj: {}},[],"reboot",new Date("2018-09-06T08:26:06.125Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 27920,str: "magenta bleeding-edge HDD",num: 25365,array: [13019,new Date("2018-09-06T08:39:04.563Z"),55425,new Date("2018-09-06T05:53:42.273Z"),"application",new Date("2018-09-06T16:01:33.161Z"),{_id: 27921,str: "Gardens concept zero administration",num: 82454,date: new Date("2018-09-05T23:36:33.860Z"),array: [],obj: {}},"CFA Franc BEAC content Borders",new Date("2018-09-06T06:40:25.324Z"),{_id: 27922,str: "Pants Money Market Account Berkshire",date: new Date("2018-09-06T10:27:06.626Z"),obj: {_id: 27923,str: "Home Loan Account Ergonomic Fresh Chicken program",num: 74586,date: new Date("2018-09-06T15:16:59.576Z")}},[60556],{_id: 27924,num: 43546,array: [],obj: {_id: 27925,str: "Shoals",date: new Date("2018-09-06T10:44:21.829Z"),array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27926,str: "Somali Shilling",num: 70900,date: new Date("2018-09-05T20:29:49.183Z"),array: [],obj: {_id: 27927,str: "withdrawal Australian Dollar Mountains",num: 93930,date: new Date("2018-09-06T02:50:29.568Z"),array: ["metrics Pennsylvania Avon",new Date("2018-09-06T02:43:49.668Z"),[],9121,{_id: 27928,num: 18609,date: new Date("2018-09-06T10:42:23.327Z"),array: [],obj: {}},[new Date("2018-09-06T02:24:48.212Z"),24599,35933],"Coordinator portal Accounts","installation value-added",new Date("2018-09-05T23:22:24.516Z"),new Date("2018-09-06T14:51:59.715Z"),24804],obj: {_id: 27929,str: "PCI",num: 66721}}});
    },

    function(coll) {
        return coll.insert({_id: 27930,str: "challenge e-business",num: 3556,date: new Date("2018-09-06T14:23:05.615Z"),array: [new Date("2018-09-05T23:29:10.748Z"),"Gloves",30906,[],{_id: 27931,str: "backing up neural",num: 9409,date: new Date("2018-09-06T00:47:41.373Z")},48067,"Practical bypassing",new Date("2018-09-06T12:04:48.352Z")],obj: {_id: 27932,str: "compress",num: 43455,date: new Date("2018-09-06T04:40:44.021Z"),array: [10086,2756,[],{_id: 27933,str: "Unbranded Soft Bacon protocol",array: []},new Date("2018-09-06T12:25:43.678Z"),14365],obj: {_id: 27934,str: "Future",num: 74474,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27935,str: "XSS generate Credit Card Account",num: 66893,date: new Date("2018-09-06T10:03:25.009Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27936,str: "Cambridgeshire silver collaborative",num: 25382,obj: {_id: 27937,num: 54167,date: new Date("2018-09-05T21:58:09.578Z"),array: [76693,new Date("2018-09-06T10:15:18.344Z"),[],69774,{_id: 27938,str: "quantifying",num: 45028,date: new Date("2018-09-06T07:23:54.952Z"),obj: {}},"Small Cotton Fish distributed Unbranded","success Heights",99477,new Date("2018-09-06T05:48:22.481Z"),14922,["Bedfordshire",new Date("2018-09-06T15:08:57.072Z")],[new Date("2018-09-06T10:59:38.601Z")],"enhance"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27939,num: 47152,date: new Date("2018-09-05T23:32:29.755Z"),array: [new Date("2018-09-06T03:06:10.289Z"),"quantifying synthesize",7192,"red",new Date("2018-09-05T20:25:41.947Z"),31110,[],new Date("2018-09-06T11:18:17.660Z"),"backing up Money Market Account Director",new Date("2018-09-06T03:54:15.838Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27940,str: "neural-net navigating",num: 18821,date: new Date("2018-09-06T11:21:02.767Z"),array: [46902,5936,"Mississippi",new Date("2018-09-06T02:53:01.503Z"),"Gorgeous Granite Bike client-server",new Date("2018-09-06T09:58:38.728Z"),[],"Garden payment Ball",new Date("2018-09-06T03:56:36.614Z"),{_id: 27941,str: "capacitor",num: 7003,date: new Date("2018-09-06T01:09:35.458Z"),array: [new Date("2018-09-06T06:04:42.126Z"),"e-tailers Assistant Quality",30085,87568,[]],obj: {}},new Date("2018-09-05T23:10:17.107Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27942,str: "engage bricks-and-clicks Croatian Kuna",num: 84167,date: new Date("2018-09-05T23:06:36.145Z"),array: [],obj: {_id: 27943,str: "PNG",num: 22724,date: new Date("2018-09-06T04:35:03.445Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27944,str: "Course",date: new Date("2018-09-06T01:44:23.019Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27945,str: "Rufiyaa parse",date: new Date("2018-09-06T14:51:49.076Z"),array: ["bypass Rubber Finland",new Date("2018-09-06T14:54:34.773Z"),{_id: 27946,str: "Burg",num: 43663,obj: {_id: 27947,str: "Metal Assimilated",date: new Date("2018-09-05T20:30:11.553Z"),array: ["Refined dedicated",15874,new Date("2018-09-06T08:14:22.884Z"),57414],obj: {}}},new Date("2018-09-05T22:31:58.939Z"),{_id: 27948,str: "Investment Account Operations",num: 45383,date: new Date("2018-09-06T19:26:15.815Z"),array: [],obj: {}},91492,new Date("2018-09-06T18:53:43.595Z"),"navigate directional","digital FTP Home",[new Date("2018-09-06T16:12:15.954Z")],[],{_id: 27949,str: "quantify Fish hard drive",date: new Date("2018-09-06T19:48:03.174Z"),array: [[]],obj: {_id: 27950,num: 67722,date: new Date("2018-09-06T08:06:20.466Z")}},81032],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27951,str: "Salad Rubber auxiliary",num: 8481,date: new Date("2018-09-06T10:35:55.891Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27952,str: "Corporate PNG scalable",num: 79908,date: new Date("2018-09-06T19:16:03.714Z"),array: [56096,"Mall intranet Stravenue","copy system-worthy",{_id: 27953,str: "green",num: 11756,date: new Date("2018-09-06T01:26:58.746Z"),array: [],obj: {}},new Date("2018-09-06T17:21:39.563Z"),10938,new Date("2018-09-06T08:54:51.068Z"),"disintermediate Facilitator Zloty",new Date("2018-09-06T13:44:43.780Z"),74984],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27954,str: "digital Generic Wooden Hat yellow",num: 82318,date: new Date("2018-09-06T00:28:25.321Z"),array: [],obj: {_id: 27955,num: 42238,date: new Date("2018-09-06T05:13:51.961Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27956,str: "brand solutions",num: 85842,date: new Date("2018-09-06T14:50:26.095Z"),array: [new Date("2018-09-06T02:15:27.859Z"),"synergy Handmade Soft Chicken Gloves",new Date("2018-09-06T03:44:31.794Z"),20915,38813,1451,[],"Synchronised"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27957,str: "Savings Account systemic",num: 83467,date: new Date("2018-09-06T12:40:37.389Z"),obj: {_id: 27958,num: 63194,date: new Date("2018-09-06T16:44:54.184Z"),array: [47921,"circuit Group 24 hour",new Date("2018-09-06T00:09:13.010Z"),"Bahrain",[91181],{_id: 27959,str: "reintermediate invoice Refined Metal Ball",num: 94104,array: [],obj: {}},new Date("2018-09-06T15:31:59.957Z"),"Sleek Frozen Fish orchestrate Lights",19424,new Date("2018-09-06T11:42:56.258Z"),new Date("2018-09-06T16:54:47.635Z"),{_id: 27960,str: "index Administrator",num: 13554,date: new Date("2018-09-06T09:10:06.053Z"),array: [new Date("2018-09-06T15:20:55.515Z"),{_id: 27961,date: new Date("2018-09-06T16:51:54.866Z"),array: []}],obj: {}},"North Carolina harness"],obj: {_id: 27962,str: "Arkansas"}}});
    },

    function(coll) {
        return coll.insert({_id: 27963,str: "Auto Loan Account withdrawal deposit",num: 61167,date: new Date("2018-09-06T00:38:41.814Z"),array: [48267,new Date("2018-09-06T11:32:38.704Z"),"Pants neural Multi-layered",new Date("2018-09-06T04:15:28.246Z"),"partnerships Tasty",{_id: 27964,str: "deposit intangible Soft",num: 63244,date: new Date("2018-09-06T16:52:00.618Z"),array: [],obj: {}},89611,{_id: 27965,obj: {_id: 27966,str: "global leverage",num: 84264,date: new Date("2018-09-06T11:09:58.067Z"),array: [],obj: {}}},new Date("2018-09-06T11:59:45.878Z"),50989,[],"Books Glens Markets"],obj: {_id: 27967,str: "Awesome connecting",num: 2326,date: new Date("2018-09-06T05:48:55.186Z"),array: ["quantify purple Handmade",new Date("2018-09-06T03:19:31.907Z"),[51091]]}});
    },

    function(coll) {
        return coll.insert({_id: 27968,str: "Incredible framework connecting",num: 29822,date: new Date("2018-09-06T16:45:47.352Z"),obj: {_id: 27969,str: "Plastic Licensed Rubber Table",date: new Date("2018-09-06T13:53:44.878Z"),array: [],obj: {_id: 27970,str: "Rapid",num: 93089,date: new Date("2018-09-06T17:25:24.762Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 27971,str: "groupware",num: 47903,date: new Date("2018-09-06T18:08:58.328Z"),array: [{_id: 27972,str: "Georgia neural",num: 31002,date: new Date("2018-09-06T01:19:52.490Z"),array: [],obj: {_id: 27973,num: 17710,date: new Date("2018-09-06T01:14:25.091Z"),obj: {_id: 27974,str: "portals withdrawal",num: 29465,date: new Date("2018-09-06T03:43:59.826Z"),array: [20885,"withdrawal backing up Cameroon",[],50365,"payment partnerships",new Date("2018-09-06T18:32:13.641Z")],obj: {_id: 27975,array: [{_id: 27976,str: "mindshare",date: new Date("2018-09-06T00:00:17.995Z")}]}}}},new Date("2018-09-06T18:19:38.327Z"),[],new Date("2018-09-06T12:08:10.251Z"),"synthesize Shoes Gorgeous",{_id: 27977,num: 64433,obj: {}},38033,new Date("2018-09-05T20:12:41.688Z"),"partnerships Towels"]});
    },

    function(coll) {
        return coll.insert({_id: 27978,str: "pink Senior Cambridgeshire",num: 86063,date: new Date("2018-09-06T17:51:25.318Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27979,str: "Incredible Executive Generic",num: 37237,date: new Date("2018-09-06T13:48:38.355Z"),array: [],obj: {_id: 27980,str: "USB",array: [88992,"Garden Yen local area network",{_id: 27981,str: "next generation Table scalable",num: 41985,date: new Date("2018-09-06T13:26:00.707Z"),array: [],obj: {}},new Date("2018-09-06T16:46:49.161Z"),47638,5397,new Date("2018-09-06T01:53:28.505Z"),"French Southern Territories Investment Account Rustic Granite Soap",{_id: 27982,num: 55050,date: new Date("2018-09-06T16:24:41.963Z"),obj: {}},{_id: 27983,num: 68346,array: []},[],new Date("2018-09-06T13:37:53.277Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 27984,str: "communities bandwidth copying",num: 57035,date: new Date("2018-09-06T03:57:35.767Z"),array: [74887,"Guernsey Jamaica Product",49971,"Chair synthesizing",new Date("2018-09-06T08:51:30.537Z"),{_id: 27985,str: "Principal Associate Home",num: 45476,date: new Date("2018-09-06T12:51:48.931Z"),array: [],obj: {_id: 27986,str: "exploit Burg",obj: {}}},new Date("2018-09-06T05:47:06.322Z"),new Date("2018-09-06T07:39:10.333Z"),new Date("2018-09-06T17:50:36.500Z"),13439],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27987,str: "Cotton Division",num: 92438,date: new Date("2018-09-06T11:09:11.195Z"),array: [new Date("2018-09-06T03:16:40.229Z"),["Jewelery",new Date("2018-09-06T03:25:01.047Z"),new Date("2018-09-06T08:30:18.570Z"),new Date("2018-09-06T14:42:57.117Z")],15817,"Computer multi-tasking",{_id: 27988,str: "Ergonomic cross-platform calculating",num: 88292,date: new Date("2018-09-06T12:28:47.920Z"),array: [11162,{_id: 27989,num: 18043,date: new Date("2018-09-06T03:07:55.265Z"),obj: {}},42220],obj: {}},40964,"Small back-end",[],{_id: 27990,num: 33932,array: [],obj: {_id: 27991,str: "deposit benchmark Directives",num: 13940,date: new Date("2018-09-06T10:37:01.046Z"),array: []}},69176],obj: {_id: 27992,date: new Date("2018-09-05T21:46:26.889Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27993,str: "backing up calculating",num: 76377,array: [87653,new Date("2018-09-06T15:57:57.662Z"),62226,{_id: 27994,str: "Phased extend schemas",num: 49145,date: new Date("2018-09-06T17:44:30.376Z"),array: ["Towels","Investment Account eyeballs",new Date("2018-09-06T07:11:48.685Z")],obj: {}},14421,"Tuna",[],new Date("2018-09-06T16:47:16.329Z"),[],50694,new Date("2018-09-06T09:09:01.261Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27995,str: "Personal Loan Account",num: 49064,date: new Date("2018-09-06T05:50:33.724Z"),array: [new Date("2018-09-06T17:31:11.848Z"),12348,"generating",87872,new Date("2018-09-06T18:28:27.313Z"),[],new Date("2018-09-06T06:39:41.570Z"),[[{_id: 27996,str: "Tennessee invoice",num: 37671,date: new Date("2018-09-05T21:32:48.188Z"),obj: {_id: 27997,str: "Shoes",num: 38845,date: new Date("2018-09-05T20:56:21.918Z"),obj: {_id: 27998,num: 87765,array: [],obj: {}}}}],"Buckinghamshire Berkshire Vermont",64438],60666,"AGP Assistant","override Table",new Date("2018-09-06T07:35:27.167Z")]});
    },

    function(coll) {
        return coll.insert({_id: 27999,str: "Mountain programming bandwidth",num: 57653,date: new Date("2018-09-05T23:55:23.610Z"),obj: {_id: 28000,str: "Checking Account Unbranded",num: 58938,date: new Date("2018-09-06T17:39:30.068Z"),array: [],obj: {_id: 28001,str: "Hawaii Fresh Berkshire",num: 80790,date: new Date("2018-09-05T23:33:59.320Z"),array: [65578,new Date("2018-09-06T05:09:58.614Z"),{_id: 28002,num: 41078,date: new Date("2018-09-06T13:50:07.988Z")},"dedicated","Licensed Concrete Keyboard Investment Account",new Date("2018-09-05T21:27:28.101Z"),new Date("2018-09-06T13:19:23.898Z"),67228,"Handcrafted",27440],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28003,str: "expedite",num: 74815,date: new Date("2018-09-06T07:14:19.319Z"),array: [["Face to face Visionary United States of America","Ameliorated Generic Cotton Fish USB"],new Date("2018-09-06T07:38:16.292Z"),new Date("2018-09-06T03:24:45.882Z"),86005,45139,{_id: 28004,str: "Jordan Solomon Islands Dollar Sausages",num: 80723,date: new Date("2018-09-06T16:33:32.268Z"),array: [],obj: {_id: 28005,str: "enable",num: 42247,obj: {_id: 28006,num: 26439,date: new Date("2018-09-06T17:08:17.161Z"),array: ["Buckinghamshire",[]]}}},new Date("2018-09-06T19:40:05.450Z"),"backing up motivating",95042,new Date("2018-09-06T02:45:08.556Z"),"transmitting",34997]});
    },

    function(coll) {
        return coll.insert({_id: 28007,str: "Sleek",num: 80384,date: new Date("2018-09-05T21:55:15.950Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28008,str: "cyan redundant",num: 8143,date: new Date("2018-09-05T21:32:03.545Z"),array: [{_id: 28009,str: "grid-enabled SAS",num: 63515,date: new Date("2018-09-06T01:18:51.648Z"),array: [],obj: {}},new Date("2018-09-06T18:34:40.852Z"),2298,{_id: 28010,str: "invoice Bacon Republic of Korea",date: new Date("2018-09-06T13:40:39.642Z"),array: [new Date("2018-09-06T01:32:11.976Z"),new Date("2018-09-06T15:12:13.133Z"),"input firmware Virgin Islands, British","Steel Shirt Coves","Refined Plastic Shoes"],obj: {}},56038,68604,new Date("2018-09-06T02:37:20.743Z"),["local Future"],86203,new Date("2018-09-06T12:10:14.441Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28011,str: "RAM Intelligent Rubber Chips National",num: 41693,date: new Date("2018-09-06T12:15:00.863Z"),array: [[],56888,"California Designer Liaison","Personal Loan Account Generic Brunei Dollar",new Date("2018-09-06T14:54:07.893Z"),71519,new Date("2018-09-06T11:51:34.004Z"),"red online","Wooden quantifying payment"],obj: {_id: 28012,str: "directional array",num: 5625,date: new Date("2018-09-06T09:28:28.645Z"),array: [],obj: {_id: 28013,str: "Jamaican Dollar Table front-end",num: 54315,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 28014,str: "Toys",num: 89871,date: new Date("2018-09-06T07:26:52.062Z"),array: [34889,new Date("2018-09-06T14:12:50.827Z"),"calculating Generic parsing",44845,[],{_id: 28015,str: "transmit Motorway bluetooth",num: 19506,date: new Date("2018-09-06T16:52:49.209Z"),array: [],obj: {_id: 28016,str: "Small Senior Ball",obj: {}}},"Tasty port",new Date("2018-09-06T15:09:36.703Z"),new Date("2018-09-06T07:19:02.991Z"),[],"Granite Avon",new Date("2018-09-05T21:28:40.889Z")],obj: {_id: 28017,num: 25703,date: new Date("2018-09-06T01:58:06.874Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28018,str: "synergy",num: 3550,date: new Date("2018-09-06T19:04:19.058Z"),array: [],obj: {_id: 28019,str: "New Leu program",date: new Date("2018-09-06T15:50:16.968Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28020,str: "intermediate",num: 96937,date: new Date("2018-09-06T18:25:27.166Z"),array: [54124,{_id: 28021,str: "Avon",num: 16743,date: new Date("2018-09-06T07:11:24.562Z"),obj: {_id: 28022,str: "Keyboard black",num: 56458,date: new Date("2018-09-06T01:20:11.489Z"),array: [],obj: {}}},77373,"indexing",new Date("2018-09-06T03:00:20.803Z"),["Virginia","Knoll front-end",{_id: 28023,date: new Date("2018-09-06T03:01:27.009Z"),array: [],obj: {}},new Date("2018-09-06T18:43:06.008Z"),{_id: 28024,num: 12759,date: new Date("2018-09-06T16:18:32.444Z"),array: [new Date("2018-09-06T01:42:42.463Z"),49965],obj: {_id: 28025,str: "Identity",date: new Date("2018-09-05T22:36:50.046Z")}},new Date("2018-09-06T00:30:21.787Z"),new Date("2018-09-05T21:07:49.848Z")],new Date("2018-09-06T14:45:06.708Z"),49825]});
    },

    function(coll) {
        return coll.insert({_id: 28026,str: "Senior Directives",num: 60302,date: new Date("2018-09-06T06:49:53.045Z"),array: ["facilitate",[57324],new Date("2018-09-06T07:17:50.537Z"),"Buckinghamshire",new Date("2018-09-06T18:30:36.375Z"),26446,5346,"repurpose Soap",{_id: 28027,num: 32270,date: new Date("2018-09-05T22:41:02.030Z"),array: [],obj: {_id: 28028,str: "Reduced sky blue",num: 92349,date: new Date("2018-09-06T18:51:02.410Z"),array: [],obj: {}}},{_id: 28029,str: "Down-sized Handcrafted Cotton Bacon",date: new Date("2018-09-06T04:12:49.288Z"),array: [new Date("2018-09-06T17:00:49.299Z")],obj: {}},"Malaysian Ringgit hack",new Date("2018-09-06T02:03:49.291Z"),61218,[]],obj: {_id: 28030,str: "Avon Mali protocol",num: 84555,date: new Date("2018-09-06T03:01:52.805Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28031,str: "Loaf",num: 14677,date: new Date("2018-09-06T02:08:32.873Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 28032,str: "incentivize",num: 71900,date: new Date("2018-09-05T21:52:09.979Z"),array: [new Date("2018-09-06T06:49:56.072Z"),61990,{_id: 28033,str: "Devolved compress",num: 96269,date: new Date("2018-09-06T14:12:17.586Z"),array: [],obj: {_id: 28034,str: "Global wireless Connecticut",num: 99001,date: new Date("2018-09-06T09:34:16.349Z"),obj: {_id: 28035,str: "calculating help-desk",num: 88765,array: [],obj: {}}}},60405,"reboot transmit Plastic",new Date("2018-09-06T05:57:06.768Z"),"Fresh purple Colorado","port Distributed",{_id: 28036,num: 51960,date: new Date("2018-09-06T03:10:17.864Z"),array: [],obj: {}},[9531,new Date("2018-09-06T16:09:52.030Z"),16424,"array"]]});
    },

    function(coll) {
        return coll.insert({_id: 28037,str: "Cambridgeshire",num: 25635,date: new Date("2018-09-06T12:46:44.912Z"),array: [],obj: {_id: 28038,date: new Date("2018-09-06T00:17:39.759Z"),array: [new Date("2018-09-05T22:27:18.550Z"),97588,"online Generic synergistic",new Date("2018-09-05T20:55:35.197Z")],obj: {_id: 28039,str: "protocol cross-platform monitor",num: 20570,date: new Date("2018-09-05T22:00:02.620Z"),obj: {_id: 28040,str: "circuit Executive",date: new Date("2018-09-05T20:21:26.807Z"),array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 28041,str: "Sleek Steel Chicken Minnesota",num: 7737,date: new Date("2018-09-06T06:17:25.848Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28042,str: "Algerian Dinar",num: 99735,date: new Date("2018-09-05T23:15:19.551Z"),array: [],obj: {_id: 28043,str: "Rupiah",num: 93651,date: new Date("2018-09-06T06:21:14.020Z"),array: ["benchmark Outdoors",5205,"Fantastic Metal Chips solutions Persistent",new Date("2018-09-06T10:55:30.682Z"),new Date("2018-09-05T23:30:17.950Z"),74125,[{_id: 28044,str: "Toys Shoals",num: 13872,date: new Date("2018-09-06T15:22:48.136Z"),array: [],obj: {}}],{_id: 28045,date: new Date("2018-09-05T21:08:41.365Z"),obj: {_id: 28046,num: 43615,array: []}},58926,new Date("2018-09-06T04:01:21.534Z"),94000,"B2C Chilean Peso Unidades de fomento"]}});
    },

    function(coll) {
        return coll.insert({_id: 28047,str: "Configuration",num: 31535,date: new Date("2018-09-05T22:52:54.937Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 28048,str: "Developer",num: 36453,date: new Date("2018-09-06T09:33:06.304Z"),array: [20131,11237,new Date("2018-09-06T06:06:28.095Z"),"service-desk Avon",12194,[],new Date("2018-09-06T08:43:08.104Z"),[],"back up cyan","indigo",[],67568]});
    },

    function(coll) {
        return coll.insert({_id: 28049,str: "Sleek Frozen Chair",num: 11459,date: new Date("2018-09-05T21:12:07.724Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 28050,str: "fuchsia Rustic",num: 99357,date: new Date("2018-09-06T19:03:57.531Z"),array: [],obj: {_id: 28051,str: "Inlet Home Loan Account",date: new Date("2018-09-05T21:58:01.939Z"),array: [new Date("2018-09-06T02:29:41.519Z"),10262,"Belgium hierarchy",{_id: 28052,str: "Wyoming",array: [new Date("2018-09-06T06:26:30.325Z"),"program",[new Date("2018-09-06T17:25:35.004Z"),1572,"Branding digital",99189,29298]]},"Buckinghamshire markets expedite",{_id: 28053,str: "digital Buckinghamshire",obj: {_id: 28054,num: 19096,date: new Date("2018-09-06T14:36:54.578Z"),obj: {}}},"Direct",26997,new Date("2018-09-06T10:37:03.842Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 28055,str: "Rustic Chair utilize",num: 29832,date: new Date("2018-09-06T16:52:26.481Z"),array: [66975,[],84460,"Pizza",new Date("2018-09-05T23:00:28.665Z"),new Date("2018-09-06T13:36:39.317Z"),new Date("2018-09-06T02:23:49.826Z"),11579,62316,"connecting applications",["innovate solid state JSON",new Date("2018-09-06T09:12:49.902Z"),{_id: 28056,str: "open-source Saudi Riyal",num: 93166,array: [{_id: 28057,str: "pixel Analyst Solomon Islands Dollar",array: [],obj: {_id: 28058,str: "Incredible Concrete Keyboard Metal",num: 7072,date: new Date("2018-09-06T18:39:22.123Z"),obj: {}}},"User-centric GB Games"],obj: {_id: 28059,str: "Refined Plastic Table e-tailers infomediaries",num: 5659,date: new Date("2018-09-06T11:36:59.404Z"),array: [],obj: {}}}]],obj: {_id: 28060,date: new Date("2018-09-06T16:08:47.884Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28061,str: "Saudi Riyal",num: 70322,date: new Date("2018-09-05T22:28:14.537Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28062,str: "Agent",num: 95871,date: new Date("2018-09-06T11:31:41.842Z"),array: ["Washington",new Date("2018-09-06T13:52:22.430Z"),new Date("2018-09-06T08:49:36.988Z"),new Date("2018-09-05T21:05:35.486Z"),24425,{_id: 28063,str: "matrix Web",num: 65838,date: new Date("2018-09-06T10:26:32.535Z"),array: [[]],obj: {_id: 28064,str: "Checking Account Dobra Swedish Krona",num: 78111,date: new Date("2018-09-06T16:33:18.521Z"),array: [],obj: {_id: 28065,num: 26921,array: [],obj: {}}}},[51093,"tangible holistic neural"],"dot-com portal compressing",new Date("2018-09-06T08:38:12.512Z"),{_id: 28066,str: "Turkmenistan Identity explicit",date: new Date("2018-09-06T08:00:57.902Z"),array: [new Date("2018-09-06T19:20:16.713Z"),"sexy invoice compress","Sleek Belarus Fish",new Date("2018-09-05T23:27:58.412Z")]},new Date("2018-09-06T14:26:09.555Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28067,str: "circuit",num: 70950,date: new Date("2018-09-06T02:37:22.954Z"),array: [60381,"Response Rhode Island Cambridgeshire","Versatile",new Date("2018-09-06T14:39:57.653Z"),new Date("2018-09-05T22:05:46.101Z"),61077,98800,new Date("2018-09-06T04:42:58.857Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28068,str: "withdrawal withdrawal",num: 41743,date: new Date("2018-09-06T16:49:00.239Z"),array: [],obj: {_id: 28069,str: "compress SCSI Arkansas",date: new Date("2018-09-06T00:32:37.309Z"),array: ["connecting",60623,new Date("2018-09-06T07:15:29.281Z"),"Liberia metrics",new Date("2018-09-06T09:33:26.898Z"),[],[],50665,{_id: 28070,num: 30926}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28071,num: 91179,date: new Date("2018-09-06T10:51:46.653Z"),array: [new Date("2018-09-06T15:29:35.504Z"),28657,[],new Date("2018-09-06T06:44:17.734Z"),new Date("2018-09-06T08:44:36.734Z"),new Date("2018-09-06T07:54:03.113Z"),"Senior","Buckinghamshire",[24030],52950,{_id: 28072,str: "toolset",num: 68853,date: new Date("2018-09-05T23:16:26.181Z"),array: [],obj: {_id: 28073,str: "National",num: 70451,date: new Date("2018-09-06T10:36:12.511Z"),array: [{_id: 28074,date: new Date("2018-09-06T03:41:08.723Z"),obj: {}},"Unbranded","vortals XSS Credit Card Account",94497,"Nevada Data reboot",[],{_id: 28075,str: "target Accountability",num: 98145,date: new Date("2018-09-05T23:36:19.085Z"),array: [],obj: {}}]}}],obj: {_id: 28076,str: "invoice programming",num: 27331,date: new Date("2018-09-06T03:09:09.866Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28077,str: "Rustic",num: 93404,date: new Date("2018-09-06T10:52:52.324Z"),array: [81302,"Operations Illinois bluetooth",["asymmetric Frozen migration"],[],4805,new Date("2018-09-05T20:17:15.411Z"),7819,{_id: 28078,str: "monitor connecting",num: 71560,array: []},new Date("2018-09-06T15:04:24.569Z"),[],new Date("2018-09-06T06:23:05.735Z"),39820,new Date("2018-09-06T17:12:44.270Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28079,str: "Pound Sterling Industrial Hat",date: new Date("2018-09-06T08:54:09.004Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28080,str: "SMTP compelling synergize",num: 28942,date: new Date("2018-09-06T10:07:39.264Z"),obj: {_id: 28081,str: "Rand Home United States Minor Outlying Islands",num: 77261,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28082,str: "XML Dominica",num: 4629,date: new Date("2018-09-06T19:41:32.365Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28083,str: "Lao People's Democratic Republic Berkshire",num: 92589,date: new Date("2018-09-06T10:12:20.712Z"),array: [new Date("2018-09-05T23:55:55.672Z"),"Rustic Fresh Pizza",{_id: 28084,str: "monetize Coordinator pink",num: 50064,array: []},{_id: 28085,str: "uniform extranet",num: 2997,date: new Date("2018-09-05T22:35:26.737Z"),array: [],obj: {}},[77492],new Date("2018-09-06T06:24:41.495Z"),79507,"applications generate workforce","indexing Dynamic",new Date("2018-09-06T09:48:52.408Z"),{_id: 28086,array: [],obj: {}},new Date("2018-09-06T03:02:38.893Z"),82999,"Keyboard Serbian Dinar Credit Card Account"]});
    },

    function(coll) {
        return coll.insert({_id: 28087,str: "CSS",date: new Date("2018-09-05T22:49:09.301Z"),array: [5769,19560,new Date("2018-09-06T15:02:37.866Z"),new Date("2018-09-06T10:34:14.884Z"),{_id: 28088,str: "maroon",num: 36816,array: [],obj: {_id: 28089,str: "Sleek Plastic Table Views communities",num: 18782,date: new Date("2018-09-06T13:11:10.016Z"),array: [],obj: {}}},new Date("2018-09-06T11:31:09.473Z"),"withdrawal",31972,["Savings Account Bike","Iowa",[{_id: 28090,str: "compressing internet solution red",date: new Date("2018-09-06T19:38:30.964Z"),array: ["USB","Networked invoice",[]],obj: {_id: 28091,str: "Polarised navigate bypassing",num: 55708,date: new Date("2018-09-06T07:57:20.371Z")}},new Date("2018-09-06T12:08:20.184Z"),29128]],{_id: 28092,num: 14338,date: new Date("2018-09-06T09:03:23.813Z"),array: [],obj: {_id: 28093,array: []}},98525,47795],obj: {_id: 28094,str: "withdrawal hack",date: new Date("2018-09-06T09:13:05.261Z"),obj: {_id: 28095,str: "PNG",num: 18110,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28096,str: "withdrawal",num: 22544,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28097,str: "application directional Direct",num: 7176,date: new Date("2018-09-06T07:39:00.264Z"),array: [13787,"channels drive",49319,new Date("2018-09-05T23:18:58.866Z"),"Wisconsin",58331,new Date("2018-09-05T22:18:06.785Z"),84065,new Date("2018-09-06T19:54:37.477Z"),"solution-oriented","ADP override Plastic","Savings Account Tunisian Dinar"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28098,str: "Small Pants",num: 98353,date: new Date("2018-09-06T08:36:49.425Z"),array: [new Date("2018-09-06T03:53:15.902Z"),6949,"asymmetric Checking Account Keyboard","Program",{_id: 28099,str: "Legacy Fantastic Fresh Soap Liaison",num: 98475,date: new Date("2018-09-06T04:41:54.372Z"),array: [],obj: {_id: 28100,str: "Facilitator 1080p Tasty",num: 56880,array: [],obj: {_id: 28101,array: [new Date("2018-09-06T14:24:21.404Z"),13369,83481,"background"]}}},new Date("2018-09-06T15:44:13.969Z"),30369,[],25116,82092],obj: {_id: 28102,str: "Frozen Ethiopia",num: 15608,date: new Date("2018-09-06T04:35:48.178Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28103,str: "Louisiana Jewelery magenta",num: 75672,date: new Date("2018-09-06T06:41:07.115Z"),array: ["International",[],new Date("2018-09-06T05:15:52.998Z"),new Date("2018-09-05T23:54:35.806Z"),[20370,{_id: 28104,str: "plum",num: 68988,date: new Date("2018-09-06T02:53:32.162Z"),array: [],obj: {_id: 28105,date: new Date("2018-09-06T03:46:59.313Z"),array: ["Unbranded Crescent","mission-critical exploit purple",{_id: 28106,str: "Practical capacity",num: 75222,date: new Date("2018-09-06T08:04:01.637Z"),obj: {_id: 28107,str: "Bedfordshire",num: 23834,obj: {}}},new Date("2018-09-06T02:20:14.403Z"),34878]}},64612],"PCI",[49930],new Date("2018-09-06T19:13:17.399Z"),new Date("2018-09-06T03:13:55.380Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28108,str: "tan",num: 13091,date: new Date("2018-09-06T09:54:26.212Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28109,str: "mobile Refined Granite Car Customer",num: 29572,date: new Date("2018-09-05T21:34:19.916Z"),array: [],obj: {_id: 28110,num: 55845,date: new Date("2018-09-06T03:33:11.636Z"),array: ["portals Alabama",new Date("2018-09-06T04:35:55.848Z"),30634,"Gorgeous Decentralized even-keeled",[{_id: 28111,str: "Home Loan Account",num: 29125,date: new Date("2018-09-06T13:06:34.800Z"),obj: {_id: 28112,array: [],obj: {}}},"Technician",new Date("2018-09-06T09:28:39.231Z"),61777,["executive bandwidth",{_id: 28113,str: "Persevering Handmade Wooden Pizza Total",num: 43969,date: new Date("2018-09-06T16:47:10.486Z"),obj: {_id: 28114,str: "synergies brand",num: 20792,date: new Date("2018-09-06T10:38:17.983Z"),array: [[],1204],obj: {}}}],new Date("2018-09-06T15:14:19.561Z"),[],new Date("2018-09-05T20:11:44.087Z")],5086,new Date("2018-09-05T21:43:06.214Z"),{_id: 28115,num: 21252,date: new Date("2018-09-06T13:45:40.924Z")}]}});
    },

    function(coll) {
        return coll.insert({_id: 28116,num: 21392,date: new Date("2018-09-06T16:10:14.382Z"),array: [],obj: {_id: 28117,str: "bus programming",num: 7417,date: new Date("2018-09-06T09:37:14.952Z"),array: [74961,"incentivize scale e-enable",new Date("2018-09-05T22:30:42.977Z"),"ivory bypass Moldova","maximize",new Date("2018-09-06T13:21:46.752Z"),{_id: 28118,num: 71862,date: new Date("2018-09-05T21:58:02.727Z"),array: [new Date("2018-09-06T14:55:57.854Z"),87392,"matrix users",[]],obj: {}},62456,24484,{_id: 28119,str: "Persistent Marshall Islands Engineer",num: 98640,array: [[]],obj: {_id: 28120,str: "Granite partnerships",date: new Date("2018-09-06T13:37:51.739Z"),obj: {}}},new Date("2018-09-06T04:23:26.543Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 28121,str: "Costa Rican Colon yellow",date: new Date("2018-09-06T02:11:32.619Z"),array: [30080,new Date("2018-09-05T22:41:01.811Z"),44468,"Ball solution",new Date("2018-09-06T00:00:13.915Z"),[],84691,"Rubber","iterate",6743,{_id: 28122,str: "visualize",num: 38210,date: new Date("2018-09-06T14:26:35.209Z"),array: [],obj: {_id: 28123,str: "HTTP generate",num: 53729,array: [],obj: {_id: 28124,str: "Mexican Peso Mexican Unidad de Inversion (UDI)",num: 43850,date: new Date("2018-09-06T14:30:58.814Z"),array: [[],"user-centric Future Metal",{_id: 28125,num: 40392,date: new Date("2018-09-06T15:40:38.688Z"),obj: {}},new Date("2018-09-06T09:57:31.749Z")],obj: {}}}},new Date("2018-09-06T19:28:20.696Z")],obj: {_id: 28126,str: "tertiary Streets Coordinator",num: 96814,date: new Date("2018-09-06T08:41:47.733Z"),array: [25697],obj: {_id: 28127,str: "Health",num: 38233}}});
    },

    function(coll) {
        return coll.insert({_id: 28128,str: "deposit",num: 23283,array: [{_id: 28129,num: 47902,date: new Date("2018-09-06T15:37:50.224Z"),array: [],obj: {_id: 28130,str: "transparent Director",num: 9847,date: new Date("2018-09-06T13:21:30.287Z"),array: ["program",[],[]],obj: {}}},"North Dakota silver calculating",new Date("2018-09-06T06:43:56.410Z"),63132,"Cross-platform",{_id: 28131,str: "Handcrafted Fork Steel",num: 65053,date: new Date("2018-09-06T13:28:08.872Z")},[59241,{_id: 28132,num: 76497,date: new Date("2018-09-06T13:40:26.029Z"),array: [],obj: {}},"Focused XML"],new Date("2018-09-06T03:06:24.869Z"),49935,new Date("2018-09-05T21:40:50.615Z"),"Incredible Soft Cheese Som",10542]});
    },

    function(coll) {
        return coll.insert({_id: 28133,str: "e-business world-class Mountains",num: 31125,date: new Date("2018-09-06T14:13:29.570Z"),obj: {_id: 28134,str: "invoice input",date: new Date("2018-09-06T17:58:55.077Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28135,str: "Ergonomic Steel Hat",num: 52801,date: new Date("2018-09-06T16:07:59.501Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28136,str: "Handmade Metal Keyboard Bahamas back-end",num: 60456,array: [new Date("2018-09-06T12:19:11.066Z"),"compressing backing up interfaces",35614,69092,new Date("2018-09-06T03:15:23.237Z"),"Libyan Dinar",new Date("2018-09-06T18:19:06.340Z"),[],16114],obj: {_id: 28137,str: "transmitting",num: 29638,date: new Date("2018-09-06T09:39:21.602Z"),obj: {_id: 28138,str: "throughput Focused",num: 27580,date: new Date("2018-09-06T08:39:48.939Z"),array: [],obj: {_id: 28139,str: "primary",date: new Date("2018-09-06T12:46:17.400Z"),array: ["calculate"],obj: {_id: 28140,str: "open system local matrix",date: new Date("2018-09-06T12:33:44.501Z"),array: [new Date("2018-09-06T02:05:42.714Z"),[6773,{_id: 28141,num: 68186,obj: {}},"Licensed Fresh Bacon",new Date("2018-09-06T05:35:46.584Z"),new Date("2018-09-06T19:17:31.062Z")]]}}}}});
    },

    function(coll) {
        return coll.insert({_id: 28142,str: "transparent Reactive Incredible",num: 49230,date: new Date("2018-09-06T13:41:25.528Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28143,str: "Optimization Mouse integrate",num: 38908,date: new Date("2018-09-06T12:24:15.715Z"),array: ["Avon Village",new Date("2018-09-06T17:24:01.438Z"),39800,"salmon Beauty Well",new Date("2018-09-06T16:24:00.170Z"),new Date("2018-09-05T23:27:34.912Z"),72415,{_id: 28144,str: "Ergonomic Borders",num: 60511,date: new Date("2018-09-06T06:12:49.859Z"),array: [],obj: {}},"scalable interface",[new Date("2018-09-06T05:56:59.239Z"),[],{_id: 28145,num: 69736,date: new Date("2018-09-06T01:27:07.657Z"),array: [46511,"Refined Wooden Keyboard Web Ball"],obj: {_id: 28146,str: "GB Applications payment",obj: {}}}],[]],obj: {_id: 28147,num: 18835,date: new Date("2018-09-06T11:36:31.474Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28148,str: "Brand New York",num: 90053,array: [60046,new Date("2018-09-06T08:27:10.585Z"),{_id: 28149,num: 13892,date: new Date("2018-09-06T09:12:25.663Z"),array: ["Antigua and Barbuda",new Date("2018-09-06T05:50:55.609Z"),49230,new Date("2018-09-06T06:27:26.258Z"),"silver Montana intranet"],obj: {}},"input","Investment Account","black",new Date("2018-09-06T10:29:58.516Z")],obj: {_id: 28150,str: "copy foreground port",num: 66373,date: new Date("2018-09-06T02:18:21.866Z"),array: [[66271,new Date("2018-09-05T22:47:51.103Z"),{_id: 28151,str: "Auto Loan Account",num: 26633,date: new Date("2018-09-06T07:31:11.879Z"),obj: {_id: 28152,str: "array Facilitator",num: 69639,array: [],obj: {}}},[],"Books protocol"],new Date("2018-09-06T16:34:55.253Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 28153,str: "Wooden",date: new Date("2018-09-06T16:57:16.851Z"),array: [new Date("2018-09-06T02:38:59.159Z"),42727,45023,new Date("2018-09-06T05:12:21.351Z"),"Rustic Concrete Gloves Engineer Small",new Date("2018-09-06T06:12:15.524Z"),[],{_id: 28154,str: "Applications",num: 6720,date: new Date("2018-09-06T15:03:09.690Z"),array: [new Date("2018-09-05T22:40:00.518Z"),93760,{_id: 28155,str: "Metal",num: 44627,date: new Date("2018-09-06T06:27:32.165Z"),array: [],obj: {_id: 28156,str: "budgetary management Savings Account",num: 20992,date: new Date("2018-09-05T22:21:25.951Z"),array: [],obj: {}}}],obj: {_id: 28157,num: 1039}},"SSL Pennsylvania Vermont",{_id: 28158,str: "calculate transmitter convergence",num: 37514,date: new Date("2018-09-06T05:37:46.987Z"),obj: {}},"protocol",{_id: 28159,str: "Gorgeous Jewelery",array: [18995,[new Date("2018-09-06T05:42:24.330Z")],"Developer"],obj: {_id: 28160,num: 30330,date: new Date("2018-09-06T07:05:28.904Z")}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 28161,str: "didactic revolutionize",num: 52472,date: new Date("2018-09-06T08:18:52.708Z"),array: ["Beauty compress Assistant",new Date("2018-09-06T11:28:33.967Z"),[37880,"silver navigating",{_id: 28162,str: "Bedfordshire best-of-breed",num: 42663,date: new Date("2018-09-06T14:34:37.568Z"),array: [],obj: {}}],"customized Handmade",new Date("2018-09-06T16:56:14.551Z"),27335,"Clothing Squares","Directives solution-oriented",new Date("2018-09-06T05:06:15.748Z"),53254,new Date("2018-09-06T13:27:45.347Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28163,str: "synthesize Brand array",num: 33222,date: new Date("2018-09-06T01:21:20.412Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28164,str: "envisioneer",num: 89961,date: new Date("2018-09-06T04:58:52.552Z"),array: [],obj: {_id: 28165,str: "copying",num: 17823,date: new Date("2018-09-06T02:21:00.998Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28166,str: "gold Automotive Samoa",num: 9405,date: new Date("2018-09-06T03:19:49.866Z"),array: [new Date("2018-09-05T19:58:07.664Z"),new Date("2018-09-05T23:11:01.469Z"),"transmit",30700,"invoice Quality solution","Officer facilitate",81231,{_id: 28167,str: "Borders",num: 21971,date: new Date("2018-09-06T13:32:19.511Z"),array: [61989,[],65580,[]],obj: {_id: 28168,str: "Synergized 1080p",array: [],obj: {_id: 28169,str: "Alabama",num: 73805,date: new Date("2018-09-06T02:01:59.695Z")}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28170,str: "gold User-centric deposit",num: 58647,date: new Date("2018-09-06T09:12:42.015Z"),array: [],obj: {_id: 28171,str: "FTP",num: 82039,date: new Date("2018-09-05T21:11:20.806Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28172,str: "Zimbabwe Customer Sports",num: 79852,date: new Date("2018-09-06T16:13:25.268Z"),array: [91787,5649,{_id: 28173,str: "innovative action-items",num: 51699,date: new Date("2018-09-06T05:33:28.530Z"),array: [new Date("2018-09-06T03:39:44.508Z"),"bus orchid wireless"],obj: {}},"Brand Shirt",[],24286,new Date("2018-09-05T23:41:58.798Z"),"Infrastructure Cove","Principal Ball Analyst","quantify",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28174,str: "yellow Metrics Rustic",num: 25494,date: new Date("2018-09-06T19:20:28.249Z"),array: ["Infrastructure",[],29332,new Date("2018-09-06T18:02:04.001Z"),"Trinidad and Tobago Dollar XML",new Date("2018-09-06T06:51:57.142Z"),new Date("2018-09-06T10:01:35.431Z"),93858],obj: {_id: 28175,str: "Markets Director",num: 15007,date: new Date("2018-09-06T03:21:12.669Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28176,str: "coherent JBOD Car",num: 17513,date: new Date("2018-09-06T02:57:30.439Z"),array: [],obj: {_id: 28177,num: 67866,date: new Date("2018-09-05T22:37:57.334Z"),obj: {}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $dateToParts: {date: { $dayOfYear: { $week: { $month: { $millesecond: { $toDate: { $minute: { $week: { $isoDayOfWeek: { $dayOfMonth: { $isoDayOfWeek: { $second: { $dateToParts: {date: { $year: { $dateFromString: {dateString: "2018-09-06T01:12:46.511Z",onError: { $substr: [{ $trim: {input: '$obj.obj.obj.obj.str',chars: { $toLower: '$str' }} },4,8] },onNull: { $arrayToObject: [[{k: "Fresh",v: true}]] }} } },timezone: "America/Yakutat",iso8601: false} } } } } } } } } } } } },timezone: "Asia/Tehran"} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substr: ["content-based",8,14] } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Unbranded Rubber Shirt Turkmenistan"],cond: { $lt: [{ $arrayToObject: [[[{ $dateToString: {date: { $dayOfYear: { $isoWeekYear: { $isoWeek: { $dayOfMonth: new Date("2018-09-06T16:19:21.956Z") } } } },timezone: "America/Santa_Isabel"} },'$obj.obj.obj.obj.str',"Handmade back-end",'$$this'],[],["Kids violet Personal Loan Account",{ $toString: { $arrayElemAt: [['$$this'],'$obj.obj.obj.obj.num'] } }]]] },{ $arrayElemAt: [[93306,'$$this'],'$$this'] }] }} }, _id: 0}}],

        [{$project: {a: { $range: [9,13] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Summit indigo",v: new Date("2018-09-06T16:36:47.811Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Wooden Rustic Wooden Gloves",v: true}]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toLower: '$obj.obj.obj.str' },9,0] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $size: [['$$this',"networks"]] }} }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'bethany',cond: { $eq: [{ $arrayToObject: [[[99426,32082],[]]] },{ $arrayElemAt: [[],{ $pow: ['$num',50141] }] }] }} }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.str',chars: { $dateToString: {date: new Date("2018-09-06T15:26:48.688Z"),format: "%m-%w-%L-%Y-%w",timezone: "Asia/Chongqing"} }} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[[{ $ln: '$obj.obj.obj.obj.num' }],[{ $trim: {input: "executive Legacy Checking Account",chars: '$obj.obj.str'} }],["solutions Group Small"],["quantify Handmade Plastic Pizza",{ $rtrim: {input: "Texas Zimbabwe Dollar",chars: { $toString: { $arrayElemAt: [[],75141] } }} },'$obj.str','$obj.obj.obj.str',"Unbranded Frozen Ball TCP","Central"],[15795]]] } }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeek: { $toDate: { $arrayElemAt: [[],'$obj.obj.num'] } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: "Brazilian Real Cambridgeshire" }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',6,8] }, _id: 0}}],

        [{$project: {a: { $toString: { $substrCP: ["invoice cross-platform",0,4] } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $minute: { $dateToParts: { date: { $hour: { $month: '$obj.obj.obj.date' } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str',"Wooden Savings Account Practical Steel Bike"],as: 'maynard',cond: { $in: [{ $arrayElemAt: [[4237,'$num'],37107] },{ $zip: {inputs: [[],['$$maynard','$$maynard']],defaults: [[new Date("2018-09-06T13:37:19.203Z")]]} }] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $second: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[[90933,62587],[55179],[51276],[],[{ $rtrim: { input: '$obj.obj.obj.obj.str' } }],["cross-platform array clicks-and-mortar",'$obj.obj.obj.str',{ $concat: ["program"] }]]] } } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toString: { $isoDayOfWeek: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $floor: 63264 },isoWeek: { $exp: 97223 },isoDayOfWeek: { $abs: '$obj.obj.num' },minute: { $multiply: [] }} },timezone: "Asia/Gaza",iso8601: true} } } },7,9] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.obj.str',10,20] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],["web services Handcrafted Administrator","invoice deposit Home Loan Account",{ $toString: { $substr: [{ $toUpper: '$obj.obj.obj.obj.str' },5,11] } },{ $substr: ["connect",0,18] },"Cotton grow hard drive",'$obj.obj.obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.num','$obj.obj.num']],defaults: [true]} }, _id: 0}}],

        [{$project: {a: { $toLower: { $substrCP: ["back up sticky",9,20] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.obj.obj.num',{ $mod: [10444,'$obj.num'] },42075],{ $log10: 16387 }] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["bus"],as: 'romaine',cond: { $lte: [{ $second: { $dateToString: {date: { $dateToParts: {date: { $dateToParts: {date: { $toDate: { $isoWeek: { $isoWeek: { $minute: { $toDate: { $arrayElemAt: [[],'$$romaine'] } } } } } },timezone: "MET",iso8601: true} },timezone: "Asia/Beirut"} },timezone: "Africa/Asmera"} } },{ $toLower: { $ltrim: {input: '$obj.str',chars: "1080p Clothing card"} } }] }} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T01:56:45.014Z",format: "%z-%Z-%H-%G-%U-%H-%M-%u-%u-%w"} } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $trim: {input: "Configuration Unbranded",chars: { $trim: { input: '$obj.obj.obj.obj.str' } }} },19,14] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["connecting generate SMS",9,10] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: '$str' } }],76923] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [86892,'$obj.obj.obj.obj.num'],cond: { $gte: [{ $toUpper: "Auto Loan Account bluetooth Georgia" },{ $arrayToObject: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $dateToParts: {date: { $hour: { $dateToString: {date: { $second: { $dayOfWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T03:25:30.027Z",onNull: { $map: {input: ["Principal Central",'$obj.obj.obj.str','$obj.obj.obj.str','$str'],in: { $abs: 61863 }} }} } } } },timezone: "Turkey"} } },iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],66817] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $floor: '$obj.num' },month: { $subtract: [80938,'$num'] },minute: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["Regional Facilitator digital",20,5] },'$obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.str',20,16] },"Branding Steel",'$obj.obj.obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],48934] }, _id: 0}}],

        [{$project: {a: { $range: [13,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $ltrim: { input: "Movies Gorgeous Soft Pants Investor" } }],["Buckinghamshire Rustic Syrian Pound","Chief Car program"]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T05:37:20.855Z") } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateToString: { date: { $toDate: { $substrBytes: ["Unbranded well-modulated",6,8] } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $year: { $isoDayOfWeek: { $dateToParts: {date: { $isoWeekYear: { $dayOfYear: { $minute: { $dateFromParts: {isoWeekYear: { $multiply: [88071,'$obj.obj.obj.num'] },isoWeek: { $add: [] },isoDayOfWeek: { $ceil: '$obj.obj.obj.obj.num' },second: { $pow: [{ $divide: [99973,87251] },'$obj.num'] },millisecond: { $cmp: [{ $arrayElemAt: [[],80945] },{ $millesecond: '$obj.obj.obj.obj.date' }] },timezone: "America/Halifax"} } } } },timezone: "Singapore",iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.str',18,14] }],10371] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $abs: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num'],{ $log10: 86379 }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: {input: "compress Associate capability",chars: { $toString: { $arrayElemAt: [[31530,53811,33362,'$obj.obj.obj.num'],'$obj.obj.obj.num'] } }} }],[29605],[],["interface Buckinghamshire",'$str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["synthesizing"],38661] }, _id: 0}}],

        [{$project: {a: { $range: [12,19,16] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $dateFromParts: {year: 58997,month: { $abs: '$obj.num' },minute: { $indexOfArray: [{ $zip: { inputs: [['$num','$obj.obj.num',89388],[],[],[{ $toString: { $trim: { input: '$obj.str' } } }],[],[true,'$obj.obj.obj.obj.num']] } },{ $substrCP: [{ $ltrim: {input: '$obj.obj.str',chars: "International"} },11,12] },18] },timezone: "Asia/Beirut"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num'],20397] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T14:30:34.591Z",timezone: "Etc/GMT+7",onError: { $arrayToObject: [[[],[23574,'$obj.obj.obj.obj.num'],["Home Loan Account",'$obj.obj.obj.obj.str']]] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $divide: [80703,'$obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Bedfordshire",v: { $dateToParts: {date: { $dateToString: { date: '$obj.obj.date' } },iso8601: false} }},{k: "Refined Metal Chicken pricing structure Zloty",v: 76785},{k: "Investment Account synergistic XSS",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Directives Shirt Ergonomic Frozen Shirt"],as: 'norris',in: { $indexOfArray: [{ $concatArrays: [[],[46007,'$num'],[{ $dateToString: {date: new Date("2018-09-06T14:15:01.421Z"),timezone: "US/Eastern",onNull: '$obj.str'} }],['$$norris',"Vista array"],[{ $toString: { $arrayElemAt: [[],13002] } },"1080p",{ $substrCP: ['$$norris',11,8] },"Virtual efficient",{ $substr: ['$obj.obj.str',0,16] },'$obj.str',"Pennsylvania Missouri"]] },{ $arrayElemAt: [[11338],{ $log: ['$obj.obj.obj.obj.num','$obj.num'] }] },1] }} }, _id: 0}}],

        [{$project: {a: { $range: [15,15,15] }, _id: 0}}],

        [{$project: {a: { $range: [8,1] }, _id: 0}}],

        [{$project: {a: { $toDate: { $rtrim: { input: '$obj.obj.str' } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num'],[{ $ltrim: { input: "hacking Mouse" } }],['$obj.str',"object-oriented Awesome Rubber Table",'$obj.obj.obj.str'],['$obj.str',"Metal deposit Brand"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["withdrawal"],71943] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: '$obj.obj.obj.str' }],['$obj.obj.num',35172]]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: new Date("2018-09-06T13:25:41.948Z") }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$str',19,1] },{ $toString: { $arrayToObject: [[['$obj.obj.str'],["Licensed",'$obj.str']]] } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',6,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[99945,76632],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],72947] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: '$obj.obj.date',format: "%U-%M-%u-%z-%S-%U-%m-%u-%M-%S-%V",onNull: { $arrayToObject: [[{k: "Spurs",v: true},{k: "Heard Island and McDonald Islands Salad website",v: "Soft intranet FTP"}]] }} }],[],['$obj.num',88346,{ $mod: ['$obj.obj.obj.obj.num',68055] },28190],[38330]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[83449],[{ $toString: { $map: {input: [],in: { $size: [[{ $rtrim: {input: '$obj.obj.obj.str',chars: '$$this'} }]] }} } },{ $dateToString: {date: { $year: { $dateFromString: {dateString: "2018-09-06T15:46:14.577Z",timezone: "Etc/GMT-6",onError: { $objectToArray: '$obj.obj.obj' }} } },format: "%z-%Z-%m-%%",onNull: { $arrayElemAt: [["Georgia Customer Home"],98549] }} },{ $trim: {input: "Chicken Licensed Granite Computer",chars: "Central"} },'$obj.str',{ $toLower: '$obj.str' },"Georgia Bedfordshire"],["SMTP"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["optical"],27981] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $year: { $hour: { $dateToString: {date: new Date("2018-09-05T22:30:27.853Z"),format: "%Z-%m-%j-%j-%w-%V-%Y-%m-%L",onNull: { $arrayElemAt: [['$obj.obj.obj.obj.str','$obj.obj.obj.obj.date'],63010] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["back up Handcrafted Fresh Salad",12,6] },'$obj.obj.str'],80639] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T21:51:04.510Z",timezone: "America/Knox_IN",onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $dayOfWeek: { $dayOfYear: { $millesecond: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $pow: ['$obj.obj.num',32956] },hour: { $subtract: ['$num',51016] },second: { $log: ['$obj.obj.obj.num',{ $cmp: [{ $dateToString: {date: { $week: { $second: { $dateToString: {date: new Date("2018-09-06T12:46:03.600Z"),timezone: "Europe/Berlin",onNull: { $reverseArray: [[15885,'$obj.obj.obj.obj.num']] }} } } },format: "%M-%L-%G-%M-%%-%Y-%S-%Z-%m-%Z",onNull: { $substrBytes: ['$obj.obj.str',13,12] }} },{ $arrayElemAt: [[],15821] }] }] },millisecond: { $indexOfArray: [{ $reverseArray: [[]] },{ $rtrim: {input: '$obj.str',chars: { $toLower: "Auto Loan Account Chief" }} },7] },timezone: "Pacific/Pohnpei"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: "Georgia De-engineered Multi-tiered" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Track Assistant",v: { $substr: ['$obj.obj.obj.str',13,12] }},{k: "supply-chains",v: new Date("2018-09-05T20:53:03.864Z")},{k: "invoice Cheese Multi-layered",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.obj.str'],as: 'bernardo',cond: { $lt: [{ $arrayToObject: [[{k: "Auto Loan Account initiative",v: '$str'},{k: "Home Loan Account Practical Concrete Cheese optical",v: "driver"}]] },{ $millesecond: { $dayOfMonth: { $second: { $dateFromParts: {isoWeekYear: { $subtract: [252,78176] },isoDayOfWeek: { $indexOfArray: [{ $range: [11,4,1] },{ $arrayToObject: [[[],[{ $substrCP: [{ $toLower: "attitude Bond Markets Units European Composite Unit (EURCO)" },13,17] }],['$$bernardo']]] }] },minute: { $sqrt: '$num' },second: { $size: [[{ $substr: [{ $toUpper: '$obj.obj.obj.obj.str' },13,2] }]] },millisecond: { $log10: 41054 }} } } } }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [18,3] }, _id: 0}}],

        [{$project: {a: { $minute: { $year: { $dayOfMonth: { $isoWeek: { $isoWeekYear: { $minute: { $isoWeek: { $dateToParts: {date: { $toDate: { $ltrim: {input: '$obj.obj.obj.obj.str',chars: { $substrCP: [{ $toUpper: "granular target Concrete" },14,11] }} } },timezone: "Etc/GMT-0",iso8601: false} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeekYear: { $dateToParts: { date: { $dayOfWeek: { $dateToString: {date: new Date("2018-09-05T23:08:59.386Z"),format: "%S-%%-%Y-%d-%%-%M-%Z-%d-%u-%H-%G",timezone: "America/Cuiaba"} } } } } } }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfYear: { $second: { $dateFromParts: {isoWeekYear: { $cmp: [{ $arrayToObject: [[{k: "Kids",v: '$date'},{k: "Facilitator",v: false},{k: "Serbian Dinar USB",v: true}]] },{ $range: [14,5] }] },isoWeek: { $add: ['$obj.obj.obj.num',69682,'$obj.obj.obj.num'] },isoDayOfWeek: { $floor: 67661 },hour: { $exp: '$num' },millisecond: { $indexOfArray: [{ $map: {input: [72469],in: { $trunc: 50202 }} },{ $trim: {input: { $substrBytes: ["Personal Loan Account Plastic",2,15] },chars: "transmit Baby Steel"} },5] }} } } } }, _id: 0}}],

        [{$project: {a: { $week: { $second: { $year: { $hour: { $millesecond: { $dayOfMonth: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T05:07:25.408Z"),format: "%m-%U-%m-%U-%Z-%j-%S-%H-%%",timezone: "Canada/Pacific",onNull: '$str'} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[22834]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $substr: [{ $substrBytes: ["Central bus synergies",3,19] },4,15] },20,19] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Kentucky schemas",{ $toLower: "withdrawal repurpose" },'$obj.str','$obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "EXE digital Gold",v: 27593}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Australian Dollar generating"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T05:46:49.866Z",format: "%S-%M-%d-%S-%M-%M",timezone: "Indian/Reunion",onError: { $dayOfYear: { $isoWeekYear: { $millesecond: { $dayOfMonth: { $week: { $second: { $dayOfWeek: { $isoDayOfWeek: { $dateToString: { date: '$obj.obj.date' } } } } } } } } } }} },format: "%m-%M-%V-%m-%M-%G-%z",onNull: "withdrawal Refined Plastic Pants"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Home Aruba magenta",{ $trim: { input: { $dateToString: {date: '$date',format: "%L-%L-%z-%H-%w-%u-%G-%G-%M-%m-%%",onNull: { $toString: { $arrayElemAt: [[],20607] } }} } } },'$obj.obj.obj.str'],['$obj.num'],[],[67209],["web services Focused"],['$obj.obj.obj.str'],['$obj.obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: [{ $trim: { input: '$obj.str' } },19,4] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $month: { $toDate: { $map: {input: [],as: 'shane',in: { $add: [] }} } } } }, _id: 0}}],

        [{$project: {a: { $month: new Date("2018-09-06T07:51:24.141Z") }, _id: 0}}],

        [{$project: {a: { $toLower: { $substrCP: ["synthesize Bedfordshire",10,19] } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-05T21:16:43.607Z",timezone: "America/Cayman",onError: { $arrayElemAt: [['$num',77879],'$obj.num'] }} } }, _id: 0}}],

        [{$project: {a: { $hour: { $isoDayOfWeek: { $minute: { $dateFromString: {dateString: "2018-09-06T04:42:23.230Z",timezone: "Indian/Reunion"} } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["real-time payment Practical",{ $ltrim: { input: { $ltrim: {input: '$obj.obj.obj.obj.str',chars: { $substrCP: ["attitude Dobra Facilitator",4,0] }} } } }],as: 'rey',cond: { $gt: [{ $arrayToObject: [[{k: "hacking back-end e-services",v: '$obj.obj.obj.str'}]] },{ $arrayElemAt: [['$$rey'],'$$rey'] }] }} }, _id: 0}}],

        [{$project: {a: { $range: [11,7] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "navigating Fully-configurable Programmable" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],69226] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [85723,47908,'$obj.obj.obj.obj.num',11687,'$obj.num'],as: 'elva',cond: { $gte: [{ $concatArrays: [['$obj.obj.obj.str'],["Investment Account Creek",'$$elva',{ $toString: { $arrayToObject: [[{k: "emulation XML",v: true},{k: "Handmade",v: { $substr: [{ $dateToString: {date: '$$elva',timezone: "Europe/Nicosia",onNull: "transmitter"} },13,14] }}]] } }]] },{ $arrayElemAt: [[],{ $mod: ['$num',{ $sqrt: 47903 }] }] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[69046]]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeekYear: { $dayOfWeek: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T19:53:41.072Z",onNull: '$obj.str'} } } } } }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T03:57:12.713Z",timezone: "ROC",onNull: '$obj.obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "SQL Unbranded",v: new Date("2018-09-06T17:15:08.418Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.obj.obj.str',16,20] },{ $toUpper: '$obj.obj.obj.obj.str' }],48367] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromParts: {year: { $floor: '$obj.obj.obj.num' },day: { $mod: ['$obj.num',33528] },minute: 23621,millisecond: { $size: [[]] },timezone: "Africa/Tunis"} } }, _id: 0}}],

        [{$project: {a: { $month: { $week: { $dateToParts: {date: { $week: { $toDate: { $arrayToObject: [[[new Date("2018-09-06T03:55:59.256Z")],[]]] } } },timezone: "Canada/Newfoundland"} } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.str'],in: { $log10: 99460 }} }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T01:06:29.856Z") } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account",v: false},{k: "Liaison matrix",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: { year: { $log: ['$num',25186] } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.str'],[{ $toLower: "Won Generic haptic" },{ $substrBytes: ["Borders",7,0] }],['$obj.str','$obj.obj.obj.str',{ $ltrim: { input: '$str' } }],[95709,'$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $range: [18,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Ukraine invoice Rial Omani",v: '$obj.obj.obj.date'},{k: "multimedia Table",v: '$obj.obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $dateToString: {date: '$obj.obj.obj.obj.date',format: "%w-%j-%M-%%-%w-%Y-%S-%S-%S-%H-%m",onNull: { $year: { $hour: { $dateToParts: { date: { $isoDayOfWeek: { $isoWeekYear: { $isoWeek: { $isoDayOfWeek: { $dayOfMonth: { $minute: { $month: { $week: { $year: { $dayOfYear: { $dateToString: {date: { $dateToString: {date: new Date("2018-09-06T02:02:13.848Z"),timezone: "Europe/Mariehamn"} },format: "%d-%M-%V-%z-%Y-%d-%H",timezone: "Etc/Zulu"} } } } } } } } } } } } } } } }} } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "reciprocal",v: "Specialist metrics"}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $minute: { $minute: { $second: { $dayOfYear: { $year: { $dateFromString: {dateString: "2018-09-06T09:00:34.962Z",format: "%M-%Z-%j-%z-%L-%G-%S-%Z-%S-%H-%z"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Assistant program transmitting",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],43051] }, _id: 0}}],

        [{$project: {a: { $concat: ["Pants SMTP"] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],39629] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ["Functionality",3,1] }],[]]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateToString: {date: '$obj.obj.obj.date',format: "%Z-%Y-%Y-%z-%w-%V-%H-%L",timezone: "Asia/Vientiane",onNull: '$str'} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[55876,'$obj.obj.num'],["Soft"],[],[],[],['$obj.obj.obj.obj.date',{ $rtrim: { input: '$obj.obj.str' } }],[]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T10:22:31.625Z"),format: "%m-%d-%G-%M",timezone: "Asia/Kolkata"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["eyeballs Checking Account"],69406] }, _id: 0}}],

        [{$project: {a: { $range: [9,9] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $minute: { $isoWeekYear: { $dayOfWeek: { $year: { $isoDayOfWeek: { $month: { $dayOfYear: { $dateToString: {date: { $isoDayOfWeek: { $minute: { $hour: { $isoWeekYear: { $dayOfMonth: { $dayOfMonth: { $dayOfYear: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T10:21:11.199Z"),format: "%d-%u-%d-%V-%w-%m-%U-%%-%j",timezone: "Brazil/West"} } } } } } } } } },format: "%U-%z-%z-%m-%V",onNull: { $concatArrays: [[{ $dateToString: {date: '$obj.date',format: "%L-%G-%M-%%-%d",onNull: "payment Connecticut synthesizing"} },{ $concat: ["Buckinghamshire"] }],['$obj.obj.num','$num',72249],[]] }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Program Money Market Account turquoise",v: new Date("2018-09-06T17:51:35.572Z")},{k: "Grocery",v: 59297}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $toString: { $arrayToObject: [[['$obj.obj.obj.obj.str'],[88477],['$obj.num',82583],[]]] } },'$str'],{ $mod: [{ $size: [[{ $ltrim: { input: "vortals" } }]] },'$num'] }] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toLower: '$obj.obj.obj.obj.str' } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Berkshire",'$obj.str',"North Carolina"],[{ $toUpper: "core Enterprise-wide Investment Account" },{ $ltrim: {input: '$obj.str',chars: '$obj.obj.obj.obj.str'} }],['$obj.obj.str'],['$obj.num'],['$num']]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfMonth: { $second: '$obj.obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["unleash Data Delaware","Fantastic Cotton Chicken Avon",'$obj.obj.obj.str','$str'],44865] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[52446]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],96346] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["bypass PNG mobile",11,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Soap",v: new Date("2018-09-06T12:34:30.495Z")},{k: "primary holistic RAM",v: "pink"},{k: "Singapore Dollar infrastructures",v: { $substr: ['$str',20,11] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[{k: "Licensed Concrete Towels Factors",v: '$obj.obj.obj.obj.str'},{k: "Money Market Account",v: { $dateFromString: { dateString: "2018-09-06T17:52:05.607Z" } }},{k: "Handmade Cotton Computer Coordinator invoice",v: '$obj.obj.num'}]] } }],86560] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[46280],["PNG"],[]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrCP: ['$obj.str',9,12] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num'],[],["Public-key"],['$num',75684],[75125,85437]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "invoice synthesize",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $hour: '$obj.obj.obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[97037,'$obj.obj.obj.obj.num'],9943] }, _id: 0}}],

        [{$project: {a: { $range: [16,15] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T15:00:42.824Z"),format: "%U-%S-%H-%w-%m-%Z-%w-%M-%H",timezone: "America/Monterrey",onNull: { $concatArrays: [['$obj.obj.obj.obj.str',{ $substr: [{ $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T02:14:04.589Z",format: "%H-%G-%M-%L-%M-%Z-%U-%Z-%z"} },timezone: "America/St_Kitts"} },4,12] }],['$obj.obj.num'],[],[],["Re-contextualized paradigms"]] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ["pixel strategic","24/365 Unbranded Steel Pants withdrawal",'$obj.obj.obj.obj.str'],in: { $trunc: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num','$obj.obj.obj.num'],[],['$str'],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Concrete facilitate",v: new Date("2018-09-06T19:40:45.750Z")}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substrBytes: ["Locks",18,8] },17,12] }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Steel Polarised Incredible" } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],19109] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toString: { $second: { $dayOfWeek: { $second: { $toDate: { $range: [7,4] } } } } } },false],['$obj.obj.str',"SSL 1080p cultivate",'$obj.str'],["Cambridgeshire"],[{ $substrCP: [{ $ltrim: {input: "Corporate",chars: { $toUpper: { $toString: { $arrayToObject: [[['$obj.str','$obj.obj.obj.obj.str']]] } } }} },16,19] }],[3324]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"pink pixel"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T23:46:07.072Z"),onNull: { $year: { $second: { $millesecond: { $minute: { $dayOfMonth: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Europe/Vatican"} } } } } } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',26237],['$date',"Developer Nebraska Internal"],["Expanded Computers",{ $toString: { $objectToArray: '$obj.obj.obj' } }],["experiences indexing Program",'$str']]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "ivory Incredible invoice",v: 95057},{k: "indexing",v: "Bedfordshire"}]] } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $hour: { $dateFromString: {dateString: "2018-09-05T22:46:02.075Z",onNull: '$obj.obj.obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],2678] }, _id: 0}}],

        [{$project: {a: { $range: [10,6,1] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"firewall magenta withdrawal"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num'],as: 'hector',cond: { $lte: [{ $arrayElemAt: [[{ $dateToString: {date: { $isoWeek: { $dateFromParts: {year: { $ceil: '$$hector' },hour: 70549,second: { $multiply: [] },timezone: "Asia/Manila"} } },timezone: "Africa/Kigali",onNull: '$$hector'} },'$obj.str',{ $substr: ["synthesize digital Pre-emptive",11,8] }],'$$hector'] },{ $toLower: { $trim: { input: "evolve deposit" } } }] }} }, _id: 0}}],

        [{$project: {a: { $concat: ["Sleek USB Architect"] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $week: { $dateFromParts: {isoWeekYear: '$obj.obj.obj.num',isoDayOfWeek: { $abs: { $add: [65473] } },hour: { $log: [70780,'$obj.num'] },minute: { $floor: '$obj.obj.num' },second: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $arrayElemAt: [[{ $trim: { input: '$str' } },'$obj.obj.obj.str'],2881] },8] }} } },iso8601: true} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.obj.str',chars: "Orchestrator analyzing Investment Account"} }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substrBytes: [{ $dateToString: {date: '$obj.obj.date',onNull: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T16:30:27.291Z",format: "%%-%U-%L-%H-%V-%Z-%Z-%H-%m-%G",timezone: "Europe/Vaduz",onNull: '$obj.str'} } }} },4,9] } } }, _id: 0}}],

        [{$project: {a: { $range: [16,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],8441] }, _id: 0}}],

        [{$project: {a: { $toLower: { $substrCP: ["Licensed invoice Washington",3,13] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "navigating Sports PCI",v: '$obj.obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: [{ $concat: ["Pennsylvania",'$str'] },19,8] }],53491] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $trim: { input: "maroon" } },'$obj.obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $dateToString: { date: { $hour: { $isoDayOfWeek: { $month: { $dayOfMonth: { $toDate: { $arrayToObject: [[{k: "Mississippi",v: false},{k: "client-driven Hungary Turnpike",v: new Date("2018-09-06T11:26:33.383Z")}]] } } } } } } } } } }, _id: 0}}],

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
