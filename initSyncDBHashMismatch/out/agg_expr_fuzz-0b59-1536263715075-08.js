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
        return coll.insert({_id: 4951,str: "system repurpose Small",date: new Date("2018-09-06T06:07:38.835Z"),array: [new Date("2018-09-06T00:41:55.661Z"),new Date("2018-09-06T14:58:25.009Z"),"incentivize Agent",35649,new Date("2018-09-05T22:31:15.439Z"),new Date("2018-09-06T03:12:16.231Z"),["Optimized orchid",34010],{_id: 4952,str: "Handcrafted Steel Sausages Fork",num: 72597,date: new Date("2018-09-06T14:14:52.483Z"),array: [],obj: {_id: 4953,str: "sky blue",num: 54152,date: new Date("2018-09-06T03:09:48.196Z"),array: [[]],obj: {_id: 4954,str: "Fantastic Health",num: 4324,obj: {}}}},53204,[],35418,"dynamic Sleek","synergy hacking"],obj: {_id: 4955,array: [56910,83606]}});
    },

    function(coll) {
        return coll.insert({_id: 4956,str: "feed card",num: 1881,date: new Date("2018-09-06T19:54:51.652Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4957,str: "Health Kids",num: 99410,date: new Date("2018-09-06T17:35:52.473Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4958,num: 42917,date: new Date("2018-09-06T02:12:42.792Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4959,str: "transmitter metrics",num: 44408,array: [{_id: 4960,num: 79522,date: new Date("2018-09-06T06:11:05.547Z"),array: [56043,"Car invoice application"],obj: {_id: 4961,str: "Ouguiya",obj: {_id: 4962,str: "orange enable hacking",num: 97789,date: new Date("2018-09-06T10:50:29.772Z"),array: [],obj: {}}}},68130,new Date("2018-09-06T16:20:45.250Z"),new Date("2018-09-06T08:55:59.074Z"),"Cross-platform moratorium Operative","Unbranded",new Date("2018-09-06T15:11:13.659Z"),new Date("2018-09-06T10:32:54.531Z"),"Home HDD"],obj: {_id: 4963,str: "Producer",num: 63172,date: new Date("2018-09-06T14:42:18.074Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4964,str: "yellow productivity",num: 30689,date: new Date("2018-09-06T09:32:44.706Z"),array: ["mobile AI 1080p",new Date("2018-09-06T00:10:04.754Z"),18864,"digital Home",new Date("2018-09-06T02:24:05.275Z"),[],new Date("2018-09-06T00:43:15.351Z"),[],{_id: 4965,str: "alarm",num: 3384,date: new Date("2018-09-06T07:53:42.892Z"),array: [new Date("2018-09-06T17:40:10.184Z"),75833,20240,86918,"Handmade Mayotte"],obj: {_id: 4966,num: 17099,date: new Date("2018-09-06T01:34:05.336Z"),array: [[new Date("2018-09-06T19:08:11.970Z"),new Date("2018-09-05T23:41:00.474Z"),"human-resource connecting tan"]],obj: {}}},{_id: 4967,str: "Forward",array: [58102,{_id: 4968,str: "programming visionary",num: 37084}],obj: {_id: 4969,date: new Date("2018-09-06T09:34:47.490Z"),array: ["Avon"],obj: {_id: 4970,str: "Designer",date: new Date("2018-09-06T19:36:40.337Z")}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4971,str: "Valleys program Concrete",num: 59452,date: new Date("2018-09-06T15:20:23.466Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4972,str: "withdrawal Avon",num: 8094,date: new Date("2018-09-06T18:00:48.530Z"),array: [64404,"Berkshire",13984,new Date("2018-09-06T16:28:16.978Z"),1176,20379,"web-readiness bus e-business",new Date("2018-09-06T01:48:58.751Z"),"quantifying",[]],obj: {_id: 4973,str: "next-generation interface Tasty Frozen Chair",num: 93279,date: new Date("2018-09-06T11:07:45.400Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4974,str: "firewall firewall",num: 84052,date: new Date("2018-09-06T18:44:06.575Z"),array: [new Date("2018-09-06T05:39:54.742Z"),"redundant",new Date("2018-09-06T08:15:46.702Z"),"HDD",92047,64591,7857,[],new Date("2018-09-06T04:17:06.230Z"),new Date("2018-09-06T17:58:54.259Z"),[],{_id: 4975,num: 70507,date: new Date("2018-09-06T00:35:39.656Z"),array: [{_id: 4976,str: "Optimization Connecticut",num: 99732,date: new Date("2018-09-06T18:14:21.120Z"),array: [],obj: {}}],obj: {}},"envisioneer capacitor"],obj: {_id: 4977,array: [61489,[],new Date("2018-09-06T19:53:19.610Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4978,str: "reboot Unbranded Rubber Chicken deliverables",num: 41058,date: new Date("2018-09-06T03:07:50.454Z"),array: ["Sleek Plastic Gloves",43156,"Mouse systemic Manager",new Date("2018-09-06T17:03:01.610Z"),{_id: 4979,str: "supply-chains copying Kids",num: 46034,date: new Date("2018-09-05T20:27:42.585Z"),array: [],obj: {_id: 4980,str: "Incredible Concrete Bike Ergonomic Steel Ball middleware",num: 15100,date: new Date("2018-09-06T12:55:26.200Z")}},43141,"functionalities structure Checking Account",34926,new Date("2018-09-06T13:16:57.555Z"),{_id: 4981,array: [],obj: {_id: 4982,str: "Shoes Cross-platform Centralized",num: 56478,date: new Date("2018-09-06T02:54:02.761Z"),array: [new Date("2018-09-06T16:40:26.185Z"),new Date("2018-09-06T02:27:46.008Z"),[{_id: 4983,num: 97238,array: []}]],obj: {}}},[51484,[],"Ergonomic Plastic Salad empower programming",new Date("2018-09-06T12:48:31.252Z"),{_id: 4984,str: "multi-byte intuitive",date: new Date("2018-09-06T19:45:09.645Z"),obj: {}}]],obj: {_id: 4985,str: "yellow Luxembourg",num: 26114,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4986,str: "User-centric Automotive",num: 82580,date: new Date("2018-09-06T03:58:40.962Z"),array: ["EXE",67336,new Date("2018-09-06T02:23:57.801Z"),"interfaces grey South Dakota",new Date("2018-09-06T13:33:24.642Z"),[{_id: 4987,str: "Personal Loan Account transmit",num: 55188,obj: {}},"web services"],{_id: 4988,str: "quantify",num: 63386,date: new Date("2018-09-06T12:09:40.581Z"),array: [],obj: {_id: 4989,str: "4th generation",num: 93253,date: new Date("2018-09-06T08:11:11.715Z"),array: [],obj: {}}},new Date("2018-09-06T04:36:24.965Z"),80747,44222,[]],obj: {_id: 4990,date: new Date("2018-09-06T07:49:04.295Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 4991,str: "background firewall",num: 39460,date: new Date("2018-09-05T22:23:57.874Z"),array: [31961,new Date("2018-09-05T21:48:01.322Z"),"Buckinghamshire","applications","Direct Buckinghamshire",new Date("2018-09-05T20:30:39.400Z"),82938,[],{_id: 4992,str: "Unbranded Metal Hat transition convergence",date: new Date("2018-09-06T03:55:02.185Z"),array: [],obj: {_id: 4993,num: 3622,date: new Date("2018-09-06T13:31:11.172Z"),obj: {}}},[new Date("2018-09-06T04:13:15.013Z"),3526],"data-warehouse Supervisor deposit","back-end users matrix",new Date("2018-09-06T02:03:48.899Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4994,str: "International generate haptic",num: 42970,array: [4498,48770,"Frozen Brand bypass","overriding Assimilated Strategist",new Date("2018-09-06T17:41:17.449Z"),new Date("2018-09-06T07:42:25.171Z"),[],[],{_id: 4995,str: "Books",num: 11074,date: new Date("2018-09-06T10:23:00.842Z"),array: [{_id: 4996,str: "copy",num: 86594,date: new Date("2018-09-05T23:22:16.816Z"),obj: {}},"embrace Practical Cotton Computer"],obj: {_id: 4997,str: "convergence",date: new Date("2018-09-06T19:16:44.510Z"),array: [{_id: 4998,str: "Connecticut Intelligent Granite Ball",date: new Date("2018-09-06T06:23:13.915Z"),array: [],obj: {}},"Mission withdrawal Customer"],obj: {_id: 4999,num: 61601,array: []}}},new Date("2018-09-06T09:01:49.332Z"),"Philippines XSS Russian Federation",9498,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5000,str: "e-tailers Bedfordshire Egyptian Pound",num: 12260,date: new Date("2018-09-06T18:37:44.542Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5001,str: "Central applications",num: 6200,date: new Date("2018-09-06T09:11:23.641Z"),array: [40313,new Date("2018-09-06T00:04:49.459Z"),new Date("2018-09-06T01:28:46.038Z"),"system engine systems synthesize",[],"Investment Account indexing SCSI",{_id: 5002,str: "Hong Kong Dollar Djibouti Franc application",num: 24540,date: new Date("2018-09-06T17:09:52.129Z"),array: [],obj: {_id: 5003,str: "Synergized Small Movies",num: 80044,date: new Date("2018-09-06T15:24:42.979Z"),array: [],obj: {}}},34886,31052,76222,"incentivize"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5004,str: "static transmitting violet",date: new Date("2018-09-06T12:52:48.919Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5005,str: "parallelism bluetooth Infrastructure",date: new Date("2018-09-06T15:21:48.807Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5006,num: 12896,date: new Date("2018-09-06T12:30:12.490Z"),array: [new Date("2018-09-06T00:30:11.613Z"),"Investor secured line primary",92901,80107,49431,"Sleek Soft Shoes",[new Date("2018-09-06T02:09:01.389Z"),new Date("2018-09-06T10:41:44.966Z"),{_id: 5007,str: "Wisconsin Future",num: 48190,date: new Date("2018-09-06T14:54:49.932Z"),array: [],obj: {_id: 5008,str: "leverage Tasty Berkshire",num: 7446,date: new Date("2018-09-06T06:49:59.355Z"),array: [],obj: {_id: 5009,str: "Data system",date: new Date("2018-09-06T16:41:31.216Z"),array: []}}},"Washington Money Market Account"],12282,{_id: 5010,str: "Equatorial Guinea product Generic",num: 76520,array: [],obj: {}},new Date("2018-09-06T14:56:46.171Z"),[new Date("2018-09-05T21:22:13.397Z"),"Garden Coordinator innovative"]]});
    },

    function(coll) {
        return coll.insert({_id: 5011,str: "synthesize Equatorial Guinea Administrator",num: 48408,date: new Date("2018-09-06T19:54:23.551Z"),array: [[],78703,"Haiti facilitate",new Date("2018-09-06T05:57:23.910Z"),{_id: 5012,str: "Licensed Distributed",num: 94813,date: new Date("2018-09-06T05:17:28.295Z"),array: [],obj: {}},new Date("2018-09-06T07:51:52.522Z"),"one-to-one Orchestrator Tools",94349,23271,"enterprise",[new Date("2018-09-06T09:24:35.035Z")],new Date("2018-09-06T11:27:38.683Z"),{_id: 5013,num: 81109,array: [],obj: {}}],obj: {_id: 5014,str: "Towels",num: 53414,date: new Date("2018-09-06T18:20:27.045Z"),obj: {_id: 5015,str: "uniform Wooden",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 5016,str: "SCSI",num: 40835,date: new Date("2018-09-06T19:16:51.762Z"),array: [[],new Date("2018-09-06T08:43:16.118Z"),new Date("2018-09-06T11:06:36.799Z"),62211,21160,"reboot Arkansas",new Date("2018-09-06T18:47:18.496Z"),65792,"needs-based Svalbard & Jan Mayen Islands copying","orange",[],"Expanded","benchmark"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5017,num: 3715,date: new Date("2018-09-06T09:21:09.110Z"),array: [],obj: {_id: 5018,str: "Keys Auto Loan Account",num: 78927,date: new Date("2018-09-06T18:26:49.121Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5019,str: "port",num: 7472,date: new Date("2018-09-06T04:35:05.898Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5020,str: "time-frame",num: 11166,date: new Date("2018-09-06T08:26:07.092Z"),array: [new Date("2018-09-06T02:53:24.579Z"),new Date("2018-09-05T21:45:49.667Z"),28472,"Frozen",17895,"Rupiah",[],78327,"copy exploit Chips",85181,"HDD Central"],obj: {_id: 5021,num: 78169,date: new Date("2018-09-06T02:55:42.995Z"),array: [new Date("2018-09-06T11:56:57.693Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5022,str: "next-generation redundant",date: new Date("2018-09-06T07:42:14.975Z"),array: [new Date("2018-09-06T18:46:15.202Z"),75362,[new Date("2018-09-06T14:21:12.049Z"),20488,{_id: 5023,str: "driver Handmade Plastic Gloves disintermediate",num: 54252,array: [],obj: {_id: 5024,str: "Practical Steel Salad withdrawal Frozen",date: new Date("2018-09-06T06:45:37.266Z"),array: []}}],"mission-critical Books",23666,37293,"SDD Visionary",58765,23027],obj: {_id: 5025,str: "microchip",num: 51419,date: new Date("2018-09-06T10:49:15.525Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5026,str: "orchid Plastic RSS",num: 34358,date: new Date("2018-09-06T01:56:34.493Z"),array: [new Date("2018-09-06T16:51:05.447Z"),"Fantastic Fantastic",75010,"multi-state",12547,new Date("2018-09-06T00:38:43.937Z"),[],81512,{_id: 5027,str: "reinvent Team-oriented calculating",num: 10521,date: new Date("2018-09-06T04:06:26.363Z"),array: [65789],obj: {}},new Date("2018-09-06T04:39:36.904Z"),"solution","neural",new Date("2018-09-06T09:02:11.383Z")],obj: {_id: 5028,str: "Cedi",date: new Date("2018-09-06T03:42:53.775Z"),array: [[{_id: 5029,str: "Rubber hacking online",num: 63054,date: new Date("2018-09-06T07:30:30.711Z"),array: [["Refined deposit"]],obj: {}},new Date("2018-09-06T06:29:54.481Z"),"Canadian Dollar Bedfordshire"],98350]}});
    },

    function(coll) {
        return coll.insert({_id: 5030,str: "incubate experiences",num: 12623,date: new Date("2018-09-06T14:50:34.135Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5031,str: "Rustic Skyway",num: 18127,date: new Date("2018-09-05T22:40:57.386Z"),array: [new Date("2018-09-06T05:00:46.121Z"),"Awesome Steel Hat Avon Consultant",96581,[],89942,new Date("2018-09-06T07:23:28.262Z"),{_id: 5032,num: 92799,date: new Date("2018-09-06T00:47:37.620Z"),array: [],obj: {}},"efficient impactful",35418],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5033,str: "optical Ergonomic Plastic Fish optical",num: 57830,date: new Date("2018-09-06T05:32:47.447Z"),array: [new Date("2018-09-06T00:09:57.722Z"),53942,new Date("2018-09-06T10:10:09.353Z"),{_id: 5034,str: "Executive Berkshire",num: 92449,array: [],obj: {}},"Paradigm repurpose XSS",46553,new Date("2018-09-06T10:24:58.834Z"),[6437],"Norwegian Krone Syrian Arab Republic",{_id: 5035,str: "Metrics",num: 31742,date: new Date("2018-09-06T15:33:36.283Z")},"Mayotte","Music Kroon"],obj: {_id: 5036,num: 10438,date: new Date("2018-09-05T20:10:55.955Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5037,str: "panel compress",num: 48174,date: new Date("2018-09-06T14:46:17.830Z"),array: [[],"invoice SMTP Oklahoma",new Date("2018-09-05T21:08:24.900Z"),54721,65969,new Date("2018-09-06T01:43:21.455Z"),"purple French Polynesia",36196,19172,"Village SMS",new Date("2018-09-06T11:07:08.938Z")],obj: {_id: 5038,str: "functionalities",num: 64779,date: new Date("2018-09-06T08:51:16.182Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5039,str: "Quality paradigms",num: 44048,array: [],obj: {_id: 5040,str: "Senior",num: 24186,date: new Date("2018-09-06T09:14:33.042Z"),array: [new Date("2018-09-06T15:15:14.643Z"),new Date("2018-09-06T10:37:05.814Z"),"Zambian Kwacha",72768,{_id: 5041,str: "connect Savings Account",date: new Date("2018-09-06T17:34:53.071Z"),array: [],obj: {}},"whiteboard","strategic multi-byte",67195,[new Date("2018-09-06T05:30:30.727Z")],"Assurance Tanzania Forint",[new Date("2018-09-06T07:13:11.686Z"),{_id: 5042,str: "input Ergonomic Metal Fish framework",num: 72063,date: new Date("2018-09-06T11:15:45.030Z"),obj: {}},62991,93042,{_id: 5043,num: 40268,date: new Date("2018-09-06T07:34:39.232Z"),array: []}]]}});
    },

    function(coll) {
        return coll.insert({_id: 5044,str: "Rubber Netherlands Antilles Persevering",num: 27024,date: new Date("2018-09-05T23:01:59.335Z"),array: ["haptic index open-source",new Date("2018-09-06T06:16:48.158Z"),60720,[new Date("2018-09-06T02:28:25.627Z"),"Plastic",65352,{_id: 5045,num: 75968,date: new Date("2018-09-06T01:41:15.594Z"),obj: {}}],"enhance array",[],"copying Mandatory Cheese",new Date("2018-09-06T17:48:14.760Z"),50457,new Date("2018-09-06T01:50:39.695Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5046,str: "Concrete pixel",num: 62336,date: new Date("2018-09-06T17:19:47.872Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5047,str: "connecting",num: 26079,date: new Date("2018-09-06T19:52:50.414Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5048,str: "Corporate",num: 17368,date: new Date("2018-09-06T04:55:33.397Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5049,str: "dedicated payment Rhode Island",num: 69460,date: new Date("2018-09-06T11:54:40.889Z"),array: [],obj: {_id: 5050,num: 77704,date: new Date("2018-09-06T10:54:32.472Z"),array: [new Date("2018-09-06T12:23:28.752Z"),"drive",new Date("2018-09-05T21:13:52.880Z"),1395,"Manor Borders",91937,29668,new Date("2018-09-06T04:30:09.301Z"),[79532,"1080p Rustic",52431],{_id: 5051,str: "Solutions Regional Fantastic",num: 55637,date: new Date("2018-09-05T23:55:00.646Z"),array: [],obj: {}},57420,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5052,str: "Planner even-keeled",num: 88876,date: new Date("2018-09-06T15:22:36.294Z"),array: [new Date("2018-09-06T09:59:42.996Z"),new Date("2018-09-06T09:08:31.573Z"),75950,new Date("2018-09-06T10:45:05.473Z"),76342,["Awesome Frozen Tuna Oregon",{_id: 5053,str: "analyzing",num: 76595,array: [],obj: {_id: 5054,str: "Credit Card Account",date: new Date("2018-09-06T19:37:47.244Z"),array: []}}],48753,[],"Facilitator unleash Ergonomic",{_id: 5055,date: new Date("2018-09-06T16:06:54.575Z"),array: [],obj: {}},"Switchable",98141,["AI"]],obj: {_id: 5056,str: "Ball",num: 54726,date: new Date("2018-09-05T22:44:13.751Z"),array: [77928,{_id: 5057,num: 36862,obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5058,str: "Identity Implementation",num: 25364,date: new Date("2018-09-06T00:53:06.539Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5059,num: 36815,date: new Date("2018-09-06T14:13:35.916Z"),array: [],obj: {_id: 5060,str: "Marshall Islands",num: 62112,date: new Date("2018-09-06T11:01:01.467Z"),array: ["discrete",new Date("2018-09-05T20:00:47.258Z"),8143,[],"user-centric innovative",88089,25069,new Date("2018-09-06T14:06:28.311Z"),"Bulgaria",["Savings Account Fantastic Bike",{_id: 5061,str: "input regional",num: 15555,date: new Date("2018-09-05T21:57:18.026Z")},8007]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5062,str: "Wooden actuating synergistic",num: 19664,array: ["Accountability",new Date("2018-09-06T06:00:50.344Z"),60397,70028,"Generic Rubber Pants Unbranded Fresh Bike",{_id: 5063,str: "Baby calculating Florida",date: new Date("2018-09-06T19:52:30.010Z"),array: [],obj: {_id: 5064,str: "Congolese Franc",num: 35022,date: new Date("2018-09-05T21:32:54.255Z"),array: [[{_id: 5065,str: "bandwidth Rustic Fresh Car",num: 79123,date: new Date("2018-09-06T00:56:23.926Z"),obj: {_id: 5066,str: "Fresh payment Rustic",num: 90540,date: new Date("2018-09-06T04:10:19.095Z")}},90853,new Date("2018-09-06T15:15:18.072Z")],"Point Rustic input",[],new Date("2018-09-06T03:15:41.103Z")]}},{_id: 5067,array: [new Date("2018-09-06T10:25:38.592Z")],obj: {}},["Berkshire",52685,new Date("2018-09-06T01:33:42.546Z")],[],49834]});
    },

    function(coll) {
        return coll.insert({_id: 5068,str: "Ergonomic withdrawal Phased",num: 49730,date: new Date("2018-09-06T12:55:49.231Z"),array: [new Date("2018-09-05T21:29:49.677Z"),"Highway","repurpose",5806,[],new Date("2018-09-06T08:15:57.685Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5069,str: "USB Wells",num: 32061,date: new Date("2018-09-06T03:21:09.918Z"),array: [[new Date("2018-09-06T17:10:35.870Z"),77389,{_id: 5070,str: "Angola Keyboard",num: 99376,date: new Date("2018-09-06T10:43:09.503Z"),array: [],obj: {_id: 5071,array: [],obj: {}}}],"Wisconsin Upgradable",39025,new Date("2018-09-06T10:56:12.856Z"),"JBOD",["Hat"],50911,new Date("2018-09-05T22:19:30.507Z"),{_id: 5072,str: "1080p",num: 27712,date: new Date("2018-09-06T14:54:40.728Z"),obj: {_id: 5073,str: "evolve",date: new Date("2018-09-06T00:47:51.180Z"),array: [92194,new Date("2018-09-06T09:57:14.443Z")],obj: {_id: 5074,str: "sky blue",num: 35014,date: new Date("2018-09-06T17:52:14.392Z"),array: []}}},[39699,[]],"utilize quantify multi-byte"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5075,str: "Gorgeous",num: 2440,date: new Date("2018-09-06T00:06:38.447Z"),array: [["Fully-configurable Saudi Riyal capacitor",{_id: 5076,str: "Fully-configurable Georgia",num: 90274,date: new Date("2018-09-06T14:28:00.766Z"),array: [],obj: {}}],87309,new Date("2018-09-06T11:08:54.722Z"),"red Pre-emptive",[68746,new Date("2018-09-05T20:28:03.936Z"),{_id: 5077,str: "frictionless Future",obj: {_id: 5078,num: 44708,date: new Date("2018-09-06T09:23:17.046Z"),array: [new Date("2018-09-06T11:49:40.368Z")],obj: {}}},"Movies bypass Reverse-engineered",72017],new Date("2018-09-06T10:01:42.551Z"),72851,"optimize",53551,{_id: 5079,num: 29135,date: new Date("2018-09-05T21:49:30.854Z"),obj: {_id: 5080,num: 61193,date: new Date("2018-09-06T02:23:18.826Z"),array: [],obj: {_id: 5081,num: 50590,array: []}}},{_id: 5082,str: "user-centric Soft",num: 70852,date: new Date("2018-09-05T20:43:37.054Z")}]});
    },

    function(coll) {
        return coll.insert({_id: 5083,str: "Generic Plastic Table Tasty",num: 21062,date: new Date("2018-09-06T10:27:58.062Z"),array: [96405,{_id: 5084,str: "transmit",num: 98299,date: new Date("2018-09-06T19:03:19.825Z"),obj: {_id: 5085,str: "cultivate",date: new Date("2018-09-06T08:53:34.174Z"),array: ["payment invoice Architect",25851,"PCI Baht"],obj: {_id: 5086,num: 92948,date: new Date("2018-09-06T17:37:16.560Z"),array: [],obj: {_id: 5087,str: "help-desk",num: 75338,date: new Date("2018-09-06T03:55:38.850Z")}}}},14779,[],"Nebraska Shoes",new Date("2018-09-06T07:33:33.993Z"),4155,new Date("2018-09-06T12:24:09.212Z"),"best-of-breed flexibility sexy",new Date("2018-09-06T13:34:05.980Z"),27648]});
    },

    function(coll) {
        return coll.insert({_id: 5088,str: "Sleek Frozen Gloves",num: 69523,date: new Date("2018-09-06T14:16:08.416Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5089,str: "Frozen",num: 28319,date: new Date("2018-09-06T10:31:30.797Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5090,str: "Architect Bedfordshire",num: 18586,date: new Date("2018-09-06T09:15:49.454Z"),array: [new Date("2018-09-06T05:41:28.617Z"),"Checking Account",new Date("2018-09-06T07:14:38.121Z"),68100,"Kids Jewelery HTTP",[],"system withdrawal JBOD",{_id: 5091,str: "Plastic",num: 13763,date: new Date("2018-09-06T03:38:43.847Z"),obj: {_id: 5092,str: "web-enabled workforce",num: 75582,date: new Date("2018-09-05T23:09:50.819Z"),array: [],obj: {}}},"Forward 24/7"],obj: {_id: 5093,str: "Tuna program",num: 11007,date: new Date("2018-09-05T20:21:39.086Z")}});
    },

    function(coll) {
        return coll.insert({_id: 5094,str: "SDD HDD Unbranded Fresh Cheese",num: 29150,date: new Date("2018-09-06T19:13:50.005Z"),array: [],obj: {_id: 5095,str: "CSS world-class Incredible Plastic Bacon",num: 49661,date: new Date("2018-09-06T16:58:55.627Z"),array: ["Fords",[],"project",25796,8371,{_id: 5096,date: new Date("2018-09-06T00:38:47.564Z"),array: [new Date("2018-09-06T19:44:57.751Z"),"HTTP Home Loan Account",{_id: 5097,str: "Business-focused Senior Views",array: [new Date("2018-09-06T03:43:13.647Z"),70272]}],obj: {}},[new Date("2018-09-06T07:32:57.071Z"),new Date("2018-09-06T12:36:43.691Z"),[[]],80735,new Date("2018-09-06T14:56:42.167Z")],"online","Borders",[5288,{_id: 5098,str: "De-engineered Cambridgeshire Senior",num: 73947,date: new Date("2018-09-06T17:03:40.832Z"),array: [],obj: {}}],"Unbranded Cambridgeshire Botswana"]}});
    },

    function(coll) {
        return coll.insert({_id: 5099,str: "value-added Consultant",num: 97729,date: new Date("2018-09-06T01:12:53.155Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5100,str: "Technician",num: 88710,date: new Date("2018-09-06T16:21:52.413Z"),array: [],obj: {_id: 5101,str: "benchmark",date: new Date("2018-09-06T06:40:33.562Z"),array: [new Date("2018-09-06T03:54:31.880Z"),"Hills application",[new Date("2018-09-06T07:04:53.219Z"),63807,82404,{_id: 5102,str: "Granite interactive",num: 71823,date: new Date("2018-09-05T23:56:46.471Z"),array: [],obj: {}},new Date("2018-09-06T16:42:14.839Z")],["deliver payment","Singapore Dollar input Industrial",{_id: 5103,str: "Metal payment Frozen",num: 22317,date: new Date("2018-09-06T14:59:30.276Z"),array: [],obj: {}}],{_id: 5104,num: 4339,obj: {_id: 5105,num: 7007,array: ["grey Brand Small Steel Pizza"]}},"facilitate optical",85182,new Date("2018-09-06T01:42:08.656Z"),7106],obj: {_id: 5106,str: "AI compressing B2C",date: new Date("2018-09-06T10:16:00.380Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5107,str: "hard drive e-services capacity",num: 88053,array: [50953,37917,["Maine Avon",new Date("2018-09-06T04:44:20.826Z"),"User-friendly","Metal"],64515,{_id: 5108,str: "Coordinator Small Avon",num: 47968,date: new Date("2018-09-05T20:22:31.316Z"),array: [],obj: {_id: 5109,str: "South Carolina grow adapter",num: 49254,date: new Date("2018-09-06T00:15:02.248Z"),array: [],obj: {}}},new Date("2018-09-06T19:16:24.239Z"),new Date("2018-09-06T10:06:40.308Z"),{_id: 5110,num: 34225,date: new Date("2018-09-06T09:37:40.211Z")},"Arizona deliverables","Handcrafted Concrete Pizza",[[78697,62661]],53356,{_id: 5111,str: "Accountability Shirt Hong Kong Dollar",date: new Date("2018-09-06T02:49:00.541Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 5112,str: "Consultant",num: 9391,date: new Date("2018-09-06T14:24:00.714Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5113,str: "indigo Cotton Investment Account",num: 28779,date: new Date("2018-09-06T17:19:19.026Z"),obj: {_id: 5114,str: "Utah",num: 69805,array: [23765,new Date("2018-09-06T18:22:49.676Z"),56650,[],"benchmark",new Date("2018-09-06T06:17:19.061Z"),"circuit","Practical Soft Hat architect programming",new Date("2018-09-06T07:36:26.750Z"),55353],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5115,str: "Planner Bulgaria Arkansas",num: 70445,date: new Date("2018-09-06T13:46:19.911Z"),array: [{_id: 5116,str: "Chile deliverables",num: 60970,obj: {_id: 5117,num: 20853,date: new Date("2018-09-06T12:11:07.029Z"),array: [new Date("2018-09-05T20:08:05.800Z")],obj: {_id: 5118,str: "Licensed Wooden Shoes",num: 45425,array: ["Plaza exploit",65521],obj: {}}}},new Date("2018-09-06T01:07:12.379Z"),[],"Object-based Personal Loan Account",3268,new Date("2018-09-06T16:40:24.875Z"),[],29591,"Iraq","turquoise Pennsylvania","next-generation",new Date("2018-09-06T05:11:27.303Z")]});
    },

    function(coll) {
        return coll.insert({_id: 5119,str: "Ergonomic violet indexing",num: 96993,date: new Date("2018-09-05T20:21:42.398Z"),array: [new Date("2018-09-05T23:03:10.729Z"),new Date("2018-09-06T17:52:22.604Z"),30134,55562,"indexing Markets",{_id: 5120,str: "withdrawal web-readiness Cambridgeshire",num: 82977,date: new Date("2018-09-06T13:30:42.477Z"),array: [],obj: {_id: 5121,str: "Credit Card Account Balboa US Dollar",num: 18462,date: new Date("2018-09-06T00:32:24.032Z"),obj: {}}},25312,"Tuna sticky","payment Inverse",[66004,[],new Date("2018-09-06T02:57:29.875Z")],[],["Fantastic Plastic Ball Gloves Pizza"]],obj: {_id: 5122,str: "Sports product",array: [568,{_id: 5123,num: 85472,date: new Date("2018-09-06T18:35:22.314Z"),array: [],obj: {_id: 5124,str: "Trail Versatile Cotton",num: 2886,date: new Date("2018-09-06T12:34:14.788Z"),array: []}}]}});
    },

    function(coll) {
        return coll.insert({_id: 5125,num: 49503,date: new Date("2018-09-06T12:23:51.291Z"),array: [87132,"non-volatile Kentucky hack",new Date("2018-09-06T00:33:23.402Z"),new Date("2018-09-06T06:34:29.775Z"),"neural Fantastic Plastic Hat Credit Card Account",{_id: 5126,str: "Computer",num: 76933,array: [],obj: {_id: 5127,str: "Licensed Rubber Shirt"}},"Avon programming",38748,new Date("2018-09-05T22:01:28.376Z"),25601,[new Date("2018-09-06T04:26:13.917Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 5128,str: "International",num: 48148,date: new Date("2018-09-06T17:34:39.723Z"),array: [],obj: {_id: 5129,str: "asymmetric Infrastructure salmon",num: 93590,date: new Date("2018-09-06T17:51:49.985Z"),array: [[new Date("2018-09-06T17:51:24.413Z"),68770,new Date("2018-09-06T02:01:38.585Z"),"Kuwait Personal Loan Account Bedfordshire",50144],"Books","GB",new Date("2018-09-06T02:33:04.394Z"),{_id: 5130,num: 10798,date: new Date("2018-09-06T14:56:37.533Z"),array: [],obj: {_id: 5131,str: "reciprocal unleash optical",array: [1694,new Date("2018-09-06T00:00:41.946Z")],obj: {}}},"Fords e-commerce",{_id: 5132,num: 1069,date: new Date("2018-09-06T04:38:11.511Z"),array: [[]],obj: {}},new Date("2018-09-06T05:55:03.527Z"),90053]}});
    },

    function(coll) {
        return coll.insert({_id: 5133,str: "index",date: new Date("2018-09-06T08:16:32.185Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5134,num: 10914,date: new Date("2018-09-06T17:09:58.969Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5135,str: "New Hampshire Soft Handmade Metal Chips",num: 46498,date: new Date("2018-09-06T10:40:25.017Z"),array: [61441,"Indian Rupee Ngultrum",77317,[new Date("2018-09-06T16:14:31.283Z"),new Date("2018-09-06T19:22:56.039Z"),[]],"Uzbekistan",new Date("2018-09-06T10:59:44.544Z"),{_id: 5136,str: "Gloves synthesizing copying",num: 16279,date: new Date("2018-09-06T10:38:48.687Z"),array: []},92505,new Date("2018-09-05T20:01:06.813Z"),56064,"Colombian Peso Unidad de Valor Real"],obj: {_id: 5137,str: "dynamic Strategist",num: 74264,date: new Date("2018-09-06T12:13:29.250Z"),array: [{_id: 5138,num: 27149,array: [],obj: {_id: 5139,str: "Officer Saint Kitts and Nevis back up",num: 94595,obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5140,str: "Shoes",num: 35336,date: new Date("2018-09-06T08:48:55.628Z"),array: [5189,new Date("2018-09-06T10:41:18.118Z"),"mobile Personal Loan Account Nakfa",[29182,{_id: 5141,str: "Colorado",date: new Date("2018-09-06T06:09:52.875Z"),obj: {_id: 5142,num: 99788,date: new Date("2018-09-06T06:47:16.630Z"),array: [],obj: {}}},new Date("2018-09-06T14:40:09.300Z"),78514],new Date("2018-09-06T09:37:28.540Z"),"New Jersey SSL Tactics",[],54934,{_id: 5143,str: "Virginia Argentina",num: 58149,array: [18347,"Interactions bandwidth"],obj: {}},{_id: 5144,str: "navigating Intranet Checking Account",num: 68277,date: new Date("2018-09-06T17:11:55.209Z"),array: [],obj: {_id: 5145,str: "white Zloty viral",num: 38634,date: new Date("2018-09-06T11:36:17.224Z"),array: ["copy",new Date("2018-09-06T03:40:03.301Z")],obj: {_id: 5146,num: 85199,array: []}}},"generate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5147,num: 91107,date: new Date("2018-09-05T20:27:52.606Z"),array: ["Steel Keyboard",[],new Date("2018-09-06T08:47:35.661Z"),new Date("2018-09-06T03:14:35.316Z"),"definition",55231,new Date("2018-09-06T01:22:17.271Z"),"Refined input Iceland",45466,78077,"Unbranded",{_id: 5148,str: "South Dakota",date: new Date("2018-09-06T18:49:29.087Z"),array: ["Global Somali Shilling International"],obj: {}},[],new Date("2018-09-06T06:57:06.394Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5149,str: "Functionality RAM Consultant",num: 96165,array: [new Date("2018-09-06T08:51:54.968Z"),"auxiliary",62810,60416,{_id: 5150,str: "copying Legacy action-items",num: 64243,date: new Date("2018-09-06T00:22:32.854Z"),array: [],obj: {}}],obj: {_id: 5151,str: "protocol Riel",num: 63116,date: new Date("2018-09-06T11:02:13.197Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5152,str: "back-end",num: 98294,date: new Date("2018-09-06T06:17:37.053Z"),array: [5164,10586,"Forward",22409,new Date("2018-09-06T18:03:02.338Z"),"blue Automotive",new Date("2018-09-06T19:47:04.859Z"),"Fresh",[],new Date("2018-09-06T12:52:58.937Z")],obj: {_id: 5153,str: "Rubber",num: 17975,date: new Date("2018-09-06T15:05:28.125Z"),array: ["Branding",{_id: 5154,str: "ROI Associate",num: 19764,array: [],obj: {_id: 5155,str: "adapter",num: 95558,date: new Date("2018-09-05T20:15:54.945Z"),array: [[]],obj: {}}},new Date("2018-09-06T05:55:29.778Z"),new Date("2018-09-06T13:54:15.954Z"),{_id: 5156,str: "mission-critical Movies high-level",date: new Date("2018-09-06T09:27:52.880Z"),obj: {}},"transition Concrete"]}});
    },

    function(coll) {
        return coll.insert({_id: 5157,str: "Fresh",num: 54843,date: new Date("2018-09-06T06:40:08.079Z"),array: [new Date("2018-09-06T19:30:26.946Z"),24365,"Optimized",new Date("2018-09-06T18:36:55.057Z"),new Date("2018-09-06T16:08:38.673Z"),[51855,"bandwidth",415,["Senior"]],46487,"Officer Valleys Connecticut",{_id: 5158,str: "Hawaii monetize matrix",num: 12253,date: new Date("2018-09-06T09:42:34.629Z"),array: [],obj: {_id: 5159,date: new Date("2018-09-06T02:20:35.175Z"),array: [],obj: {_id: 5160,str: "Manager Producer card",date: new Date("2018-09-05T20:46:16.471Z"),obj: {}}}},[56553],new Date("2018-09-06T09:34:49.126Z"),new Date("2018-09-06T00:47:38.184Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5161,str: "definition Health",num: 83115,date: new Date("2018-09-06T03:49:45.945Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5162,str: "Corporate",num: 21524,date: new Date("2018-09-06T05:47:00.138Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5163,str: "Hat",num: 21199,date: new Date("2018-09-06T18:23:27.888Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5164,str: "XML architect Stand-alone",num: 61765,date: new Date("2018-09-06T08:28:46.436Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5165,str: "Generic CSS Buckinghamshire",num: 29923,date: new Date("2018-09-05T21:49:07.262Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5166,str: "Wyoming",num: 60424,date: new Date("2018-09-06T00:01:44.917Z"),array: [],obj: {_id: 5167,str: "synthesize SCSI Computer",num: 24769,date: new Date("2018-09-05T23:40:14.485Z"),array: [new Date("2018-09-06T12:56:42.615Z"),[],new Date("2018-09-06T12:22:13.853Z"),"Representative International",new Date("2018-09-06T09:55:21.378Z"),78854,"leading edge Table Engineer",83963,["Intelligent Steel Pants solid state project"],62888,"calculating Dynamic Concrete"]}});
    },

    function(coll) {
        return coll.insert({_id: 5168,str: "neural-net Lesotho Strategist",num: 65673,date: new Date("2018-09-05T21:58:44.022Z"),array: [],obj: {_id: 5169,str: "Investment Account Books",num: 37056,date: new Date("2018-09-06T08:43:03.669Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5170,str: "facilitate",num: 1391,date: new Date("2018-09-05T20:39:54.664Z"),array: [58778,new Date("2018-09-06T04:53:14.397Z"),[],{_id: 5171,num: 85428,date: new Date("2018-09-05T20:58:58.751Z"),obj: {_id: 5172,str: "deposit",num: 5853,date: new Date("2018-09-06T11:07:19.403Z"),array: [9398],obj: {}}},"Ergonomic Arizona","Vista Pizza",new Date("2018-09-06T11:30:12.863Z"),"Rustic Frozen Chair front-end payment",50012,"calculate cross-platform",[],new Date("2018-09-06T14:56:09.494Z"),new Date("2018-09-06T17:06:10.945Z"),{_id: 5173,str: "XSS dynamic access",date: new Date("2018-09-06T04:58:56.008Z"),obj: {_id: 5174,str: "green",num: 81227,date: new Date("2018-09-06T12:04:50.294Z"),obj: {}}}],obj: {_id: 5175,str: "Rustic Granite Ball Internal composite",num: 41447,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5176,str: "indexing quantifying",num: 15361,array: [],obj: {_id: 5177,str: "Cheese backing up",num: 57361,date: new Date("2018-09-06T10:03:15.467Z"),array: [34336,new Date("2018-09-06T08:17:33.493Z"),95050,"COM software program",[82248,new Date("2018-09-06T17:00:46.452Z"),"olive Canyon hacking","program Sausages"],new Date("2018-09-06T10:57:10.921Z"),16165,{_id: 5178,str: "Director Cliff Keyboard",num: 92644,date: new Date("2018-09-06T18:15:16.388Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 5179,str: "bandwidth",num: 923,date: new Date("2018-09-06T02:28:43.214Z"),array: ["Legacy Configuration innovative",new Date("2018-09-06T09:36:02.390Z"),new Date("2018-09-06T04:06:27.940Z"),{_id: 5180,str: "motivating actuating supply-chains",num: 40241,date: new Date("2018-09-06T12:50:39.031Z"),array: [],obj: {_id: 5181,num: 21737,date: new Date("2018-09-06T16:46:15.761Z"),array: [],obj: {}}},11202,new Date("2018-09-06T12:51:17.289Z"),"Shirt digital",new Date("2018-09-05T23:56:39.040Z"),["indigo Ethiopia International",{_id: 5182,str: "reintermediate",date: new Date("2018-09-06T06:30:48.658Z"),obj: {}},[72351,99536,"Intranet parsing",54319]]]});
    },

    function(coll) {
        return coll.insert({_id: 5183,str: "invoice niches",num: 83981,date: new Date("2018-09-06T00:09:46.475Z"),array: [],obj: {_id: 5184,str: "Hills protocol copy",num: 53990,date: new Date("2018-09-06T05:19:18.337Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5185,str: "Orchestrator Buckinghamshire",num: 32513,date: new Date("2018-09-06T01:17:27.108Z"),array: [],obj: {_id: 5186,str: "Officer RAM",num: 12096,date: new Date("2018-09-05T21:38:50.571Z"),array: [],obj: {_id: 5187,str: "South Carolina Rustic Grass-roots",num: 21504,date: new Date("2018-09-06T13:08:25.648Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5188,str: "Incredible installation",num: 9306,date: new Date("2018-09-05T20:58:09.266Z"),array: [30286,17540,new Date("2018-09-06T13:30:15.188Z"),new Date("2018-09-06T17:09:46.081Z"),[],new Date("2018-09-06T11:55:07.931Z"),"East Caribbean Dollar Bedfordshire",86754,{_id: 5189,str: "ubiquitous Checking Account",num: 46770,date: new Date("2018-09-05T23:47:43.958Z"),array: [],obj: {}},"Lead Small Plastic Keyboard haptic",{_id: 5190,str: "Unbranded Wooden Soap",num: 10503,date: new Date("2018-09-06T10:45:25.094Z"),array: [{_id: 5191,str: "Soft standardization deposit",obj: {_id: 5192,date: new Date("2018-09-06T12:54:26.332Z"),array: [43381,new Date("2018-09-06T14:56:38.396Z"),[new Date("2018-09-06T04:07:01.949Z"),28357],"Assurance Avon indexing"],obj: {_id: 5193,num: 41692,date: new Date("2018-09-06T07:06:39.766Z"),array: [],obj: {_id: 5194,str: "SCSI",num: 76312,date: new Date("2018-09-06T06:40:26.901Z"),array: [],obj: {_id: 5195,str: "calculate"}}}}}],obj: {_id: 5196,str: "Auto Loan Account Investment Account Arizona",num: 33312,obj: {}}},{_id: 5197,num: 70393},[]]});
    },

    function(coll) {
        return coll.insert({_id: 5198,str: "Oklahoma",num: 60420,date: new Date("2018-09-06T00:12:19.067Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5199,str: "RSS hacking pricing structure",num: 32524,date: new Date("2018-09-05T22:26:20.918Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5200,str: "Licensed Steel Shirt New Jersey",num: 93898,date: new Date("2018-09-06T15:14:58.417Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5201,str: "Mountain",num: 67079,date: new Date("2018-09-06T14:29:37.829Z"),array: ["Engineer hack",new Date("2018-09-06T08:17:21.859Z"),98106,"olive",[],45608,"overriding Granite",16147,new Date("2018-09-06T04:30:38.120Z"),83945],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5202,str: "homogeneous plug-and-play Concrete",num: 44115,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5203,str: "Idaho",num: 92273,date: new Date("2018-09-06T02:01:45.964Z"),array: ["Saint Lucia Granite",64380,new Date("2018-09-06T15:02:33.521Z"),new Date("2018-09-06T08:28:33.521Z"),17132],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5204,str: "COM",num: 24718,date: new Date("2018-09-06T07:10:03.478Z"),array: [new Date("2018-09-06T07:17:00.976Z"),"Profound Rubber","methodologies French Southern Territories",49099,new Date("2018-09-06T02:10:03.933Z"),58468,"United States Minor Outlying Islands",[],new Date("2018-09-06T01:43:11.603Z"),62003,new Date("2018-09-05T22:06:52.031Z"),[new Date("2018-09-06T00:51:51.997Z")],93745],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5205,str: "Idaho Auto Loan Account North Carolina",num: 27939,date: new Date("2018-09-06T14:14:27.618Z"),array: [new Date("2018-09-06T11:10:31.042Z"),77788,new Date("2018-09-06T08:29:09.843Z"),new Date("2018-09-06T15:58:15.180Z"),"Chicken Gambia purple","back-end","cultivate Savings Account parallelism",8688,86412,{_id: 5206,str: "Shoes grid-enabled Wooden",num: 28700,date: new Date("2018-09-06T00:22:57.422Z"),array: ["TCP","relationships navigate Pa'anga"],obj: {}},[],new Date("2018-09-06T19:29:35.983Z"),["Myanmar solution Sports"],[]],obj: {_id: 5207,str: "sensor Pennsylvania",num: 76439,date: new Date("2018-09-06T15:44:22.336Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5208,str: "copying Refined Fresh Shoes Borders",num: 51637,date: new Date("2018-09-06T05:47:52.090Z"),array: ["generating interfaces metrics","South Africa Rupiah cross-platform",{_id: 5209,num: 5834,array: [],obj: {_id: 5210,str: "Corporate Functionality Gorgeous",obj: {}}},new Date("2018-09-06T12:43:29.241Z"),{_id: 5211,str: "withdrawal Berkshire European Unit of Account 9(E.U.A.-9)",num: 31280,date: new Date("2018-09-05T21:12:48.341Z"),array: [[],new Date("2018-09-06T05:32:53.692Z"),new Date("2018-09-06T02:55:33.649Z")],obj: {}},[],54022,77694,"Mauritania maximize Lock",34999,{_id: 5212,str: "PCI Strategist CFA Franc BCEAO",date: new Date("2018-09-06T09:18:08.935Z"),array: []}],obj: {_id: 5213,num: 81264,date: new Date("2018-09-05T22:42:52.082Z"),array: ["New Jersey",new Date("2018-09-05T23:12:26.735Z")],obj: {_id: 5214,str: "Future",obj: {_id: 5215,str: "European Unit of Account 17(E.U.A.-17)",num: 66225,date: new Date("2018-09-06T13:34:43.763Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 5216,num: 6259,date: new Date("2018-09-06T03:09:56.547Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5217,str: "cross-platform",num: 70324,date: new Date("2018-09-06T18:09:54.795Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5218,str: "Awesome Small intranet",num: 7594,date: new Date("2018-09-05T23:37:19.470Z"),array: [new Date("2018-09-06T06:20:44.948Z"),"cyan monetize",71838,{_id: 5219,str: "Aruban Guilder",num: 97476,date: new Date("2018-09-06T09:53:57.078Z"),array: [],obj: {_id: 5220,str: "enterprise",date: new Date("2018-09-06T10:44:50.906Z"),array: [],obj: {}}},"Metal Djibouti",new Date("2018-09-06T14:41:41.790Z"),65146,"Comoro Franc XSS",64184,new Date("2018-09-06T01:05:11.906Z")]});
    },

    function(coll) {
        return coll.insert({_id: 5221,str: "mobile Handcrafted Fresh Sausages",num: 40935,date: new Date("2018-09-06T13:58:15.234Z"),array: [],obj: {_id: 5222,num: 90912,date: new Date("2018-09-06T15:55:41.760Z"),array: [21747,"Designer Sri Lanka Rupee Table",new Date("2018-09-06T04:30:22.620Z"),86714,new Date("2018-09-06T05:11:24.692Z"),[],new Date("2018-09-05T20:25:36.924Z"),22989,"Vatu Universal","Integrated Hollow",new Date("2018-09-06T11:16:25.619Z"),62155,{_id: 5223,str: "Checking Account reboot",num: 404,date: new Date("2018-09-06T14:59:28.525Z"),array: [],obj: {_id: 5224,str: "Granite invoice initiatives",date: new Date("2018-09-05T23:39:01.448Z"),array: [new Date("2018-09-06T09:38:20.888Z"),"Malagasy Ariary Program SQL"]}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5225,str: "generate",num: 7062,date: new Date("2018-09-06T18:18:52.625Z"),array: [{_id: 5226,str: "architectures",num: 60664,date: new Date("2018-09-06T06:58:39.000Z"),array: [],obj: {_id: 5227,str: "Plastic Generic",date: new Date("2018-09-06T08:48:25.566Z"),array: [new Date("2018-09-06T06:40:23.681Z"),"platforms Concrete"],obj: {}}},"compress Heard Island and McDonald Islands mobile",22686,77791,{_id: 5228,num: 39027,array: [],obj: {}},new Date("2018-09-06T01:40:53.468Z"),35476,76250,84876,new Date("2018-09-06T18:18:20.719Z"),[],"Frozen","portals RSS"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5229,str: "SAS Colorado",num: 89053,date: new Date("2018-09-06T19:21:56.877Z"),array: [new Date("2018-09-05T20:35:04.986Z"),11088,[35463],"Refined Metal Cheese holistic",new Date("2018-09-05T23:43:18.123Z"),"mission-critical Identity",{_id: 5230,array: [],obj: {_id: 5231,str: "Senior Refined",num: 96069,obj: {}}},new Date("2018-09-06T15:27:48.466Z"),"Mall Soft",[],1604,{_id: 5232,str: "neural redundant",num: 9720,date: new Date("2018-09-05T22:55:25.809Z"),array: [79755],obj: {_id: 5233,str: "bus withdrawal",num: 84120,date: new Date("2018-09-06T16:18:38.483Z"),array: [],obj: {}}},new Date("2018-09-05T20:39:34.574Z")],obj: {_id: 5234,num: 1612,date: new Date("2018-09-05T21:04:05.114Z"),array: [new Date("2018-09-06T17:20:05.848Z"),"plum compressing",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 5235,num: 24960,date: new Date("2018-09-06T04:22:16.038Z")});
    },

    function(coll) {
        return coll.insert({_id: 5236,str: "Intelligent Metal Car PNG",num: 50259,date: new Date("2018-09-06T10:00:21.298Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5237,str: "Germany",num: 20534,date: new Date("2018-09-05T23:22:57.263Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5238,num: 60486,date: new Date("2018-09-06T12:03:33.804Z"),array: [44966,"Awesome Steel Fish",new Date("2018-09-06T00:39:52.798Z"),"hack",[],79961,new Date("2018-09-06T00:59:23.122Z"),[],new Date("2018-09-06T07:41:11.453Z"),[],14806,25877,74082,"Auto Loan Account Credit Card Account"]});
    },

    function(coll) {
        return coll.insert({_id: 5239,str: "reboot maroon",date: new Date("2018-09-06T08:01:25.466Z"),array: [],obj: {_id: 5240,num: 14221,date: new Date("2018-09-06T15:09:14.242Z")}});
    },

    function(coll) {
        return coll.insert({_id: 5241,str: "copy Secured",num: 6377,array: [new Date("2018-09-06T02:29:52.802Z"),"empower online",{_id: 5242,str: "Internal facilitate Louisiana",num: 56695,date: new Date("2018-09-06T00:34:30.322Z"),array: [],obj: {_id: 5243,str: "Rubber pixel",num: 80173,date: new Date("2018-09-05T21:42:52.169Z"),array: ["Jersey",85355,82861,new Date("2018-09-06T04:14:35.776Z"),new Date("2018-09-06T01:27:02.640Z"),["Kansas",[],"Awesome Plastic Car Handcrafted Granite Chips Mountain",32880]],obj: {_id: 5244,str: "EXE"}}},"override Yemen Communications",new Date("2018-09-05T23:42:42.211Z"),"ability Divide Fork",[],40469],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5245,str: "ADP Creative Credit Card Account",num: 89197,date: new Date("2018-09-06T00:19:25.659Z"),array: [new Date("2018-09-05T22:26:45.294Z"),new Date("2018-09-06T04:58:42.418Z"),79806,{_id: 5246,str: "Awesome Granite Developer",num: 72507,date: new Date("2018-09-06T18:06:58.983Z"),array: [new Date("2018-09-06T12:48:02.310Z")],obj: {_id: 5247,num: 5136,date: new Date("2018-09-06T16:42:58.128Z"),array: [],obj: {}}},19605,"transmitting hacking","synergize","Berkshire Viaduct virtual","COM New Mexico",37327,{_id: 5248,str: "invoice hard drive",num: 6054,date: new Date("2018-09-06T17:05:45.946Z"),obj: {}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 5249,str: "directional mint green",num: 43890,date: new Date("2018-09-05T20:23:12.318Z"),array: [47330,["action-items connecting"],new Date("2018-09-06T05:09:56.735Z"),49788,"quantify Borders","Roads Plaza",new Date("2018-09-06T09:40:26.340Z"),62199,34549,"ivory Horizontal",{_id: 5250,str: "pink",num: 70747,date: new Date("2018-09-06T00:26:55.807Z"),array: [],obj: {_id: 5251,str: "Infrastructure overriding",num: 85592,date: new Date("2018-09-05T21:42:35.225Z"),array: [39727],obj: {}}},{_id: 5252,num: 76024,obj: {_id: 5253,str: "programming Central",date: new Date("2018-09-06T02:07:16.010Z"),obj: {}}},{_id: 5254,num: 77795,array: [],obj: { _id: 5255 }}]});
    },

    function(coll) {
        return coll.insert({_id: 5256,str: "Games",num: 14707,date: new Date("2018-09-06T19:06:49.094Z"),array: [],obj: {_id: 5257,str: "Pants",num: 53211,date: new Date("2018-09-05T22:28:29.237Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5258,str: "deposit",num: 93430,date: new Date("2018-09-06T12:32:53.022Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5259,str: "Nepalese Rupee British Indian Ocean Territory (Chagos Archipelago) Tasty",num: 84026,date: new Date("2018-09-06T14:22:26.952Z"),array: [13899,"knowledge base",{_id: 5260,str: "Savings Account Human wireless",num: 83869,date: new Date("2018-09-06T16:47:06.761Z"),array: [],obj: {}},new Date("2018-09-06T04:31:57.060Z"),new Date("2018-09-06T09:26:08.851Z"),"Profound Director"]});
    },

    function(coll) {
        return coll.insert({_id: 5261,str: "Consultant Tasty Soft Pants Grass-roots",num: 37531,date: new Date("2018-09-06T11:11:04.803Z"),array: [32365,new Date("2018-09-06T02:20:04.221Z"),"Corporate Aruba",63427,[],new Date("2018-09-06T01:01:01.646Z"),{_id: 5262,str: "back up",date: new Date("2018-09-06T07:03:25.228Z"),array: ["Manager Plaza Fresh",new Date("2018-09-06T03:57:31.270Z"),[new Date("2018-09-06T05:52:45.081Z")],87590],obj: {}},99494,"program",new Date("2018-09-06T12:18:42.968Z"),[],new Date("2018-09-06T08:23:22.659Z")],obj: {_id: 5263,str: "SAS Checking Account context-sensitive",date: new Date("2018-09-06T04:25:10.102Z"),array: [{_id: 5264,num: 23016,array: [],obj: {_id: 5265,str: "schemas Colorado",num: 51346,date: new Date("2018-09-05T21:41:08.759Z"),obj: {}}}],obj: {_id: 5266,str: "Computers",date: new Date("2018-09-06T07:05:44.793Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5267,str: "program haptic ROI",num: 27445,date: new Date("2018-09-06T02:52:14.619Z"),array: [19060,[],new Date("2018-09-06T12:18:35.836Z"),"Baby Home Loan Account Future",new Date("2018-09-06T10:41:08.280Z"),"engineer Licensed Granite Car navigate",{_id: 5268,str: "transparent bi-directional bypassing",num: 87967,date: new Date("2018-09-06T14:19:52.824Z"),obj: {}},30518,"Liaison wireless",new Date("2018-09-06T08:37:45.096Z")],obj: {_id: 5269,num: 15355,date: new Date("2018-09-06T15:34:03.754Z"),array: [],obj: {_id: 5270,str: "radical mobile niches",num: 56745,date: new Date("2018-09-06T01:32:00.108Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 5271,str: "PNG system",num: 80842,date: new Date("2018-09-06T15:31:59.587Z"),array: ["Avon red","deposit",[[]],22709,new Date("2018-09-06T01:08:12.809Z"),new Date("2018-09-06T05:46:59.770Z"),"Bedfordshire world-class clicks-and-mortar",{_id: 5272,str: "Skyway Tactics Auto Loan Account",num: 71160,date: new Date("2018-09-06T19:40:59.656Z"),array: ["plum"],obj: {_id: 5273,str: "Money Market Account bi-directional",num: 13652,array: [new Date("2018-09-06T08:16:31.140Z"),88738],obj: {_id: 5274,num: 13361,date: new Date("2018-09-05T22:45:54.819Z"),array: []}}},{_id: 5275,str: "Louisiana Orchestrator Gorgeous Frozen Chicken",num: 68086,date: new Date("2018-09-06T02:40:38.729Z"),obj: {}},new Date("2018-09-06T10:19:43.121Z"),new Date("2018-09-06T01:19:22.194Z"),38164,81460,28813]});
    },

    function(coll) {
        return coll.insert({_id: 5276,str: "Human",num: 38453,date: new Date("2018-09-05T21:26:27.312Z"),array: [new Date("2018-09-06T15:43:40.077Z"),new Date("2018-09-05T21:22:14.103Z"),32356,"Metal",[[41917,3791]],"interfaces Ergonomic","Incredible Fresh Shirt Progressive",new Date("2018-09-06T10:44:53.479Z"),[],{_id: 5277,str: "Delaware",num: 12198,date: new Date("2018-09-06T18:53:11.723Z"),array: [],obj: {_id: 5278,str: "calculating Directives",array: [],obj: {}}},{_id: 5279,str: "Iowa quantifying bi-directional",array: [],obj: {}},"visualize port",new Date("2018-09-06T03:54:24.904Z")],obj: {_id: 5280,str: "out-of-the-box",num: 70947,date: new Date("2018-09-06T07:25:13.922Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5281,str: "Tugrik Burundi",num: 18407,date: new Date("2018-09-06T12:23:25.732Z"),array: [new Date("2018-09-06T12:39:49.855Z"),"Berkshire Dynamic","cross-platform innovate calculate",70204,new Date("2018-09-06T00:02:41.525Z"),{_id: 5282,str: "Euro well-modulated Pizza",num: 92698,obj: {_id: 5283,num: 19128,date: new Date("2018-09-05T21:12:56.039Z"),array: [],obj: {}}},94601,new Date("2018-09-06T00:25:48.653Z"),"Rubber Seamless Legacy"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5284,str: "neural",num: 1275,array: ["web-enabled Crescent Refined Wooden Sausages",38827,"contingency Steel compress",{_id: 5285,num: 89934,date: new Date("2018-09-06T16:59:04.944Z"),array: [],obj: {_id: 5286,date: new Date("2018-09-06T13:26:28.021Z"),array: [],obj: {_id: 5287,str: "Auto Loan Account Upgradable",num: 79385,date: new Date("2018-09-06T02:21:59.441Z")}}},43741,[],326,new Date("2018-09-06T01:13:58.685Z")],obj: {_id: 5288,str: "Beauty synthesize Ergonomic",array: [new Date("2018-09-05T20:17:16.236Z"),new Date("2018-09-06T09:21:02.160Z"),"Awesome Steel Chair Cotton",{_id: 5289,str: "purple Falkland Islands Pound",num: 73013,array: [{_id: 5290,str: "RSS Rest wireless",num: 83206,date: new Date("2018-09-06T16:52:25.541Z"),obj: {}}],obj: {}},"Refined SMTP",new Date("2018-09-06T04:34:40.344Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 5291,str: "Checking Account Sleek Frozen Shirt Cayman Islands",num: 11270,date: new Date("2018-09-06T18:06:15.753Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5292,str: "Generic",num: 46355,date: new Date("2018-09-06T12:38:50.947Z"),array: [new Date("2018-09-06T01:11:48.766Z"),new Date("2018-09-05T21:43:43.312Z"),"Soap withdrawal",new Date("2018-09-06T09:14:13.980Z"),{_id: 5293,str: "Intelligent Paradigm",date: new Date("2018-09-06T18:10:12.610Z"),array: []},10910],obj: {_id: 5294,str: "Malagasy Ariary",num: 84205,date: new Date("2018-09-06T10:20:12.855Z"),array: [],obj: {_id: 5295,num: 13980,date: new Date("2018-09-06T17:03:54.648Z"),array: [new Date("2018-09-05T23:54:07.373Z"),[53527,{_id: 5296,str: "withdrawal Idaho Avon",num: 23084,array: [],obj: {}},"Steel"],19819,"Moldova magenta",new Date("2018-09-06T15:13:00.658Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 5297,str: "Ball Assimilated North Korean Won",num: 42817,date: new Date("2018-09-05T22:58:11.767Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5298,str: "invoice",num: 64123,date: new Date("2018-09-06T13:27:06.290Z"),array: ["Borders back-end",74866,54312,new Date("2018-09-06T03:30:54.023Z"),{_id: 5299,str: "New Hampshire Right-sized haptic",num: 7468,array: [],obj: {_id: 5300,str: "Versatile",num: 59720,date: new Date("2018-09-06T03:27:29.341Z"),obj: {_id: 5301,num: 64670,array: ["Unbranded Cotton Salad black"],obj: {}}}},new Date("2018-09-06T11:12:08.173Z"),[76042],[],"Cambridgeshire Bike Bedfordshire",new Date("2018-09-06T09:18:37.216Z"),{_id: 5302,str: "generating SCSI program",num: 33408,date: new Date("2018-09-06T14:44:44.409Z"),array: [],obj: {_id: 5303,date: new Date("2018-09-06T12:10:05.075Z")}},"impactful synergies",[],new Date("2018-09-06T07:54:09.157Z"),31405],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5304,str: "Program Concrete Savings Account",num: 20192,date: new Date("2018-09-05T21:22:12.298Z"),array: [new Date("2018-09-06T17:04:12.367Z"),36963,"SMTP",61667,"Tasty Fresh Soap",new Date("2018-09-06T12:44:47.191Z"),73526,{_id: 5305,num: 36011,date: new Date("2018-09-06T12:54:30.732Z"),array: [87099,new Date("2018-09-06T19:37:44.639Z")],obj: {}},new Date("2018-09-06T04:59:48.358Z"),"azure","Multi-tiered Industrial Credit Card Account"],obj: {_id: 5306,str: "Soft feed Programmable",num: 61184,date: new Date("2018-09-06T03:04:31.867Z"),array: ["input Cotton",new Date("2018-09-06T14:53:27.988Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5307,str: "Creative sensor Mobility",num: 26564,date: new Date("2018-09-06T05:21:54.526Z"),obj: {_id: 5308,date: new Date("2018-09-06T18:38:10.275Z"),array: [92948,new Date("2018-09-06T17:55:04.286Z"),[new Date("2018-09-06T19:15:38.181Z"),"Borders generate",98253,new Date("2018-09-06T03:41:59.171Z")],{_id: 5309,str: "synergistic",num: 86000,date: new Date("2018-09-06T19:21:42.836Z"),array: [],obj: {}},"Extended Handmade Soft Hat",{_id: 5310,num: 21046,date: new Date("2018-09-06T14:45:55.818Z"),array: [{_id: 5311,str: "approach Reactive whiteboard",num: 53041,array: []},98219,"Fresh",3789],obj: {}},"Health Architect",[],[],"transparent Table"],obj: {_id: 5312,str: "functionalities",num: 96399,date: new Date("2018-09-05T22:58:08.533Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5313,str: "Bahrain strategize Money Market Account",num: 91718,array: [],obj: {_id: 5314,str: "transmit",num: 34516,date: new Date("2018-09-06T14:37:03.226Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5315,str: "Bedfordshire",num: 53059,date: new Date("2018-09-06T06:39:44.961Z"),array: [],obj: {_id: 5316,str: "Alley SSL Officer",num: 62515,date: new Date("2018-09-06T00:27:10.700Z"),array: ["metrics program Concrete",[],{_id: 5317,str: "world-class Crossing Realigned",array: ["homogeneous",new Date("2018-09-06T15:16:34.689Z"),"Soap",58104,97961],obj: {_id: 5318,str: "Azerbaijanian Manat quantifying Triple-buffered",num: 58444,date: new Date("2018-09-06T14:51:39.737Z")}},23560,new Date("2018-09-06T03:14:51.428Z"),34015,{_id: 5319,num: 22531,array: []},new Date("2018-09-06T16:51:39.472Z"),new Date("2018-09-06T16:02:55.422Z"),40397],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5320,num: 79327,date: new Date("2018-09-06T00:04:57.341Z"),array: [new Date("2018-09-06T14:43:32.120Z"),89635,71329,"Cotton transmitting","Fish Mouse",34102,"neural",new Date("2018-09-06T11:15:38.221Z"),[]],obj: {_id: 5321,str: "Executive Bike Strategist",num: 24621,date: new Date("2018-09-05T23:03:19.015Z"),array: [new Date("2018-09-06T08:28:50.492Z"),"Coordinator demand-driven",[new Date("2018-09-06T11:10:57.327Z"),{_id: 5322,str: "hacking Uganda technologies",num: 73065,date: new Date("2018-09-06T10:46:04.215Z"),array: [],obj: {}}],98881,927]}});
    },

    function(coll) {
        return coll.insert({_id: 5323,str: "orange Checking Account",num: 73776,date: new Date("2018-09-05T20:44:53.023Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5324,str: "Rubber port PCI",num: 34297,date: new Date("2018-09-06T17:25:08.368Z"),array: [],obj: {_id: 5325,str: "Identity Viaduct FTP",num: 24792,date: new Date("2018-09-06T08:27:37.927Z"),array: [84522,new Date("2018-09-06T12:33:42.403Z"),"Handmade Cotton Tuna Sleek Granite Mouse adapter",new Date("2018-09-06T19:33:23.212Z"),["salmon Health Identity",[],new Date("2018-09-06T09:11:11.300Z")],{_id: 5326,str: "initiatives protocol",num: 24245,date: new Date("2018-09-06T03:02:16.418Z"),array: [new Date("2018-09-05T23:46:36.830Z")],obj: {}},"auxiliary holistic",{_id: 5327,str: "capacitor Barbados",num: 85958},{_id: 5328,str: "Metal Assistant",num: 80950,date: new Date("2018-09-05T22:16:55.425Z")},34179,68343,[54610,"convergence reinvent Pennsylvania",20685,"Customer"]],obj: {_id: 5329,date: new Date("2018-09-06T05:51:04.530Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5330,num: 97797,date: new Date("2018-09-06T18:13:20.016Z"),array: [new Date("2018-09-05T21:47:43.272Z"),"bypassing","International matrix",84551,{_id: 5331,num: 78066,array: [],obj: {_id: 5332,str: "interactive index Indiana",date: new Date("2018-09-06T16:49:15.567Z"),array: [],obj: {}}},[],"Chips Handcrafted Investment Account",new Date("2018-09-06T10:43:14.338Z"),28550,new Date("2018-09-06T12:15:11.739Z"),new Date("2018-09-06T12:54:59.266Z"),{_id: 5333,str: "hack cross-platform",num: 55034,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 5334,str: "optical",num: 2657,date: new Date("2018-09-06T19:01:32.206Z"),array: [[new Date("2018-09-06T16:05:11.985Z")],"Handcrafted Soft Bacon infrastructures National",96072,new Date("2018-09-06T04:07:47.245Z"),16665,{_id: 5335,str: "calculate",num: 62005,array: [],obj: {_id: 5336,array: [],obj: {}}},"background application",42284,["monitor Handmade",new Date("2018-09-06T12:21:02.120Z")],48808,new Date("2018-09-06T00:48:00.656Z"),"optical",{_id: 5337,num: 48392,date: new Date("2018-09-05T19:57:10.700Z"),array: [],obj: {_id: 5338,date: new Date("2018-09-06T10:33:01.723Z"),array: []}},[new Date("2018-09-06T19:40:13.866Z"),{_id: 5339,str: "Music Sleek Steel Keyboard",num: 92973,date: new Date("2018-09-06T09:03:34.618Z"),array: ["Frozen strategic",new Date("2018-09-06T14:34:29.717Z")],obj: {}},66906]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5340,str: "Car Future",num: 58955,date: new Date("2018-09-06T13:56:00.662Z"),array: ["Czech Koruna",new Date("2018-09-06T06:04:53.838Z"),new Date("2018-09-06T06:04:05.390Z"),"Generic Soft Pizza",57230,28264,{_id: 5341,str: "Ergonomic application",num: 55544,date: new Date("2018-09-06T04:34:24.731Z"),array: [],obj: {}},80671,["payment e-business",new Date("2018-09-06T05:40:19.229Z"),"calculating users black",12254,new Date("2018-09-06T19:10:57.659Z"),new Date("2018-09-06T19:41:49.060Z"),[{_id: 5342,str: "multi-byte RAM",date: new Date("2018-09-06T12:29:19.967Z"),obj: {_id: 5343,date: new Date("2018-09-06T00:22:40.539Z"),array: []}}]]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5344,str: "Manager open-source",num: 76699,date: new Date("2018-09-06T18:51:45.269Z"),array: ["open-source",new Date("2018-09-06T03:14:53.701Z"),46467,"budgetary management Consultant Wyoming",[],9024,"compress",90920,new Date("2018-09-06T09:18:59.129Z"),{_id: 5345,str: "Jewelery",num: 7111,date: new Date("2018-09-06T03:58:47.668Z"),array: [52377],obj: {_id: 5346,str: "Product Iran",num: 43249,date: new Date("2018-09-05T22:42:53.125Z"),array: [new Date("2018-09-05T21:49:05.066Z"),89657,new Date("2018-09-06T02:42:16.139Z"),"Oklahoma zero tolerance copy"],obj: {}}},{_id: 5347,date: new Date("2018-09-06T09:32:02.057Z"),obj: {_id: 5348,str: "Cambridgeshire Marketing",array: []}}]});
    },

    function(coll) {
        return coll.insert({_id: 5349,str: "Garden reboot Incredible",num: 57464,date: new Date("2018-09-06T10:58:36.495Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5350,str: "input New Hampshire",num: 68696,date: new Date("2018-09-06T17:04:07.333Z"),array: [],obj: {_id: 5351,num: 87545,date: new Date("2018-09-06T01:40:31.050Z"),array: [],obj: {_id: 5352,str: "Grocery Small Wooden Ball Steel",date: new Date("2018-09-06T09:20:30.277Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5353,str: "back up",num: 68237,date: new Date("2018-09-06T17:52:59.205Z"),array: [],obj: {_id: 5354,num: 61799,date: new Date("2018-09-06T06:32:28.650Z"),array: [new Date("2018-09-06T05:35:39.348Z"),"green",9849,"application",new Date("2018-09-06T14:47:06.519Z"),new Date("2018-09-06T17:47:55.200Z"),{_id: 5355,str: "internet solution Future",num: 12289,date: new Date("2018-09-06T14:58:00.472Z"),array: [35041,new Date("2018-09-06T19:53:52.069Z")]},new Date("2018-09-06T16:11:17.442Z"),"approach",59519,[],new Date("2018-09-06T09:52:03.484Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 5356,str: "Chips",num: 66005,date: new Date("2018-09-06T00:54:17.271Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5357,str: "Extension",num: 38532,date: new Date("2018-09-06T04:11:08.042Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5358,str: "AI optimizing Car",num: 70622,array: [new Date("2018-09-05T22:34:57.910Z"),new Date("2018-09-06T15:02:28.326Z"),87374,"reboot Manors Credit Card Account",{_id: 5359,str: "CFA Franc BEAC Kids",num: 41792,date: new Date("2018-09-06T12:35:32.681Z"),array: [52299,"Facilitator Dynamic","Streamlined Philippines alarm",52219],obj: {}},new Date("2018-09-06T10:29:11.777Z"),[],"Pre-emptive Organized payment",63397,new Date("2018-09-06T14:10:51.332Z"),{_id: 5360,date: new Date("2018-09-06T16:16:49.146Z"),array: [[],89415],obj: {_id: 5361,str: "radical wireless port",num: 86123,date: new Date("2018-09-06T11:44:18.252Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 5362,str: "Checking Account Health Arizona",num: 36128,date: new Date("2018-09-06T19:45:03.914Z"),array: [],obj: {_id: 5363,num: 46140,date: new Date("2018-09-06T07:04:54.730Z"),array: [new Date("2018-09-06T14:46:20.816Z"),"teal Division","Lead Delaware",[[],[],27114,46359],new Date("2018-09-06T19:05:46.193Z"),"Uganda navigate calculate",18452,new Date("2018-09-05T20:46:30.779Z"),{_id: 5364,str: "local area network Georgia",num: 32089,array: [],obj: {}},"Switchable monitor infomediaries",new Date("2018-09-06T10:56:39.691Z"),[42025]]}});
    },

    function(coll) {
        return coll.insert({_id: 5365,str: "Manager input",num: 6034,date: new Date("2018-09-05T22:30:05.807Z"),array: ["generate Handcrafted Frozen Fish Sausages",new Date("2018-09-05T22:39:02.514Z"),new Date("2018-09-05T22:14:14.219Z"),"transmitting",{_id: 5366,str: "deliverables Dynamic calculate",num: 87795,date: new Date("2018-09-06T16:19:47.669Z"),array: [],obj: {}},99672,28339,"Concrete Bedfordshire",97434,45779,[[]]],obj: {_id: 5367,str: "Utah copy matrix",num: 68729,date: new Date("2018-09-06T17:24:03.159Z"),array: ["Director",265,new Date("2018-09-06T03:06:58.768Z"),{_id: 5368,str: "invoice",num: 61137,date: new Date("2018-09-06T19:12:14.021Z"),array: [[],{_id: 5369,date: new Date("2018-09-05T20:54:03.893Z"),obj: {_id: 5370,date: new Date("2018-09-06T09:49:24.766Z"),array: [],obj: {}}}],obj: {_id: 5371,str: "Row Hat",num: 60042,date: new Date("2018-09-06T14:17:06.649Z"),array: [new Date("2018-09-06T09:19:18.649Z"),"redundant XML Iraqi Dinar",{ _id: 5372 }],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 5373,str: "Money Market Account",num: 27820,date: new Date("2018-09-06T08:55:45.207Z"),array: [new Date("2018-09-06T01:19:45.484Z"),66916,new Date("2018-09-06T13:26:45.299Z"),41632,25420,"invoice Granite",new Date("2018-09-06T19:36:53.869Z"),"open-source Fundamental initiatives",[],{_id: 5374,str: "withdrawal",num: 66427,date: new Date("2018-09-05T23:12:27.402Z"),array: [],obj: {_id: 5375,str: "Licensed zero administration",num: 22768,array: [3136,"Path"]}},[new Date("2018-09-06T02:46:31.473Z")],{_id: 5376,str: "Haiti",date: new Date("2018-09-06T09:14:48.882Z"),array: [24311,{_id: 5377,date: new Date("2018-09-06T18:01:44.111Z"),obj: {}},86688],obj: {_id: 5378,str: "Montana Balanced"}},new Date("2018-09-05T21:32:16.789Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5379,str: "online contingency synergies",num: 79152,date: new Date("2018-09-06T06:54:30.840Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5380,str: "digital",num: 89923,date: new Date("2018-09-06T12:03:09.695Z"),array: [53564,new Date("2018-09-06T04:48:26.734Z"),new Date("2018-09-06T05:28:41.360Z"),new Date("2018-09-06T07:40:51.001Z"),30320,78043,74415,"Faroe Islands process improvement circuit",new Date("2018-09-06T19:39:38.321Z"),"mobile payment workforce","Sao Tome and Principe transmit"],obj: {_id: 5381,str: "SCSI Savings Account Tools",num: 12077,date: new Date("2018-09-06T09:59:10.731Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5382,str: "Administrator scalable",num: 91072,date: new Date("2018-09-06T17:38:22.634Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5383,str: "Developer Small",num: 2375,date: new Date("2018-09-06T14:16:50.639Z"),array: [13713,[],"initiatives",88623,[],new Date("2018-09-06T13:29:22.955Z"),"hacking bypass",new Date("2018-09-06T14:43:25.453Z"),{_id: 5384,str: "Soft",num: 65777,date: new Date("2018-09-06T19:52:43.681Z"),array: ["Factors",{_id: 5385,str: "Guarani",date: new Date("2018-09-06T06:44:38.930Z"),array: [21719,[],new Date("2018-09-06T10:16:48.033Z")],obj: {}},new Date("2018-09-06T01:18:38.652Z"),[16601,"Colorado"],"Kentucky"],obj: {}}],obj: {_id: 5386,num: 88583,array: [{_id: 5387,str: "invoice",num: 73427,obj: {_id: 5388,date: new Date("2018-09-06T03:05:54.034Z"),array: [{_id: 5389,num: 18758,obj: {_id: 5390,str: "Assistant magnetic",num: 19386,date: new Date("2018-09-06T09:30:45.499Z"),array: []}},56654,[],86996]}}]}});
    },

    function(coll) {
        return coll.insert({_id: 5391,str: "wireless Alabama",num: 88818,array: [],obj: {_id: 5392,str: "Internal Arizona",num: 10188,date: new Date("2018-09-06T18:06:44.346Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5393,str: "Designer Movies",num: 25847,date: new Date("2018-09-05T22:33:42.310Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5394,str: "Metal",num: 3544,date: new Date("2018-09-06T18:35:10.221Z"),array: [{_id: 5395,str: "XSS Solutions",num: 79991,array: [],obj: {}},82928,new Date("2018-09-06T15:09:58.129Z"),new Date("2018-09-06T16:31:08.969Z"),"hierarchy Viaduct Bike",[],"deposit Ameliorated",84384,{_id: 5396,num: 62911,date: new Date("2018-09-06T05:51:30.760Z"),obj: {}},"Re-engineered Sleek Frozen Chair Ville",new Date("2018-09-05T21:01:11.962Z"),new Date("2018-09-06T13:14:29.483Z"),[]],obj: {_id: 5397,str: "District",num: 18553,date: new Date("2018-09-06T01:15:55.498Z"),array: [86879,"Small Steel Shoes Legacy vortals",89754,"Money Market Account integrate multi-byte"]}});
    },

    function(coll) {
        return coll.insert({_id: 5398,str: "hack deliver Identity",num: 62392,date: new Date("2018-09-05T20:26:04.627Z"),array: [],obj: {_id: 5399,str: "Guyana Dollar hacking silver",num: 49164,date: new Date("2018-09-06T05:01:13.598Z"),array: [new Date("2018-09-06T06:58:16.986Z"),"Checking Account Pennsylvania knowledge user",41760,44444,"Money Market Account communities","Home Loan Account Mobility Extensions",new Date("2018-09-06T06:22:43.447Z"),"Russian Federation",new Date("2018-09-06T12:06:23.606Z"),{_id: 5400,num: 18693,date: new Date("2018-09-06T06:00:28.168Z"),array: []},58834],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5401,str: "functionalities",num: 12473,date: new Date("2018-09-06T01:50:05.288Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5402,str: "Guinea Franc",num: 18756,date: new Date("2018-09-05T20:18:34.631Z"),array: [new Date("2018-09-06T10:44:54.847Z"),{_id: 5403,str: "Directives Refined Rubber Pizza",num: 74687,date: new Date("2018-09-06T00:34:05.067Z"),obj: {_id: 5404,num: 85872,date: new Date("2018-09-06T01:08:34.756Z"),array: [],obj: {}}},63686,"Graphical User Interface",46898,{_id: 5405,num: 77070,date: new Date("2018-09-06T16:28:23.929Z"),array: [],obj: {_id: 5406,str: "global",num: 4742,date: new Date("2018-09-05T22:11:47.871Z"),array: ["3rd generation Iran parallelism",8391]}},"Soft GB",new Date("2018-09-06T10:12:56.854Z"),"Australian Dollar actuating Bike","ubiquitous hub",{_id: 5407,str: "backing up",num: 61660,array: [[],66505,[]],obj: {}},new Date("2018-09-06T05:23:51.552Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5408,str: "orchid Tasty",num: 90251,date: new Date("2018-09-05T21:23:24.255Z"),array: [],obj: {_id: 5409,str: "Berkshire",date: new Date("2018-09-06T00:28:12.709Z"),array: [],obj: {_id: 5410,str: "driver copy Sharable",num: 23283,date: new Date("2018-09-06T02:53:39.900Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5411,str: "Supervisor override Cotton",num: 51342,date: new Date("2018-09-06T17:50:29.981Z"),array: [64636,new Date("2018-09-06T08:14:00.733Z"),84239,new Date("2018-09-06T08:03:38.730Z"),"navigating syndicate Berkshire",new Date("2018-09-06T06:15:48.107Z"),"lavender Fish",{_id: 5412,str: "Borders",num: 99786,array: [],obj: {}},84981]});
    },

    function(coll) {
        return coll.insert({_id: 5413,str: "Forward Alabama",num: 20061,date: new Date("2018-09-05T21:00:56.030Z"),array: [37474,77391,"Money Market Account parsing",new Date("2018-09-05T19:56:35.354Z"),75537,82132,"Unbranded",new Date("2018-09-06T00:57:56.751Z"),{_id: 5414,str: "Concrete Specialist interactive",num: 62777,array: [90381,new Date("2018-09-05T23:28:11.139Z")],obj: {}},{_id: 5415,str: "Home Loan Account",num: 62482,date: new Date("2018-09-06T16:12:42.240Z"),array: []},"deposit Administrator",{_id: 5416,str: "Marketing Unbranded",num: 91075,date: new Date("2018-09-06T02:09:43.642Z"),obj: {}},{_id: 5417,str: "ubiquitous Maine reinvent",array: []},[new Date("2018-09-06T06:38:36.759Z")]],obj: {_id: 5418,num: 82485,date: new Date("2018-09-06T07:19:51.125Z"),array: [],obj: {_id: 5419,num: 55435,obj: {_id: 5420,str: "capacitor paradigms microchip",num: 89210,date: new Date("2018-09-06T02:32:08.379Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 5421,str: "Garden",num: 26076,date: new Date("2018-09-05T21:14:07.898Z"),array: [],obj: {_id: 5422,str: "technologies International South Carolina",num: 72323,date: new Date("2018-09-06T11:54:18.810Z"),array: [{_id: 5423,num: 59734,date: new Date("2018-09-06T03:40:00.902Z"),array: [],obj: {_id: 5424,str: "Tunisian Dinar",num: 17665,array: [new Date("2018-09-06T18:54:19.100Z"),"Hat",["sky blue"],53227,"Run quantify"],obj: {}}},new Date("2018-09-06T12:11:38.615Z"),2354,79716,new Date("2018-09-06T03:57:06.909Z"),"Ergonomic actuating",90960,[],new Date("2018-09-06T08:18:40.675Z"),"connecting content"]}});
    },

    function(coll) {
        return coll.insert({_id: 5425,str: "Germany Steel online",num: 398,date: new Date("2018-09-06T08:58:38.556Z"),array: [],obj: {_id: 5426,str: "capacitor Refined Steel Fish",num: 7,date: new Date("2018-09-06T06:12:24.686Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5427,str: "utilize",num: 3444,date: new Date("2018-09-06T11:08:27.710Z"),array: [new Date("2018-09-06T05:32:43.592Z"),{_id: 5428,str: "frictionless",num: 62447,date: new Date("2018-09-06T18:27:38.578Z"),array: ["Auto Loan Account embrace",{_id: 5429,str: "fuchsia Jewelery",array: [],obj: {}},new Date("2018-09-06T07:56:58.445Z"),1698],obj: {_id: 5430,date: new Date("2018-09-06T07:53:18.832Z"),obj: {}}},"Realigned orchestration",84643,60742,[new Date("2018-09-06T02:08:27.754Z"),new Date("2018-09-06T12:34:51.050Z")],"Switchable",[],63453,new Date("2018-09-05T21:51:42.893Z")]});
    },

    function(coll) {
        return coll.insert({_id: 5431,str: "strategize olive",num: 84827,date: new Date("2018-09-06T09:43:18.801Z"),array: [[],new Date("2018-09-06T14:45:48.121Z"),57464,91725,"Sierra Leone Tactics Taka",[99063,new Date("2018-09-06T03:18:46.844Z"),new Date("2018-09-05T20:46:58.016Z")],"Fantastic Soft Soap Afghani","Customer Savings Account transparent",new Date("2018-09-06T13:01:11.030Z"),89351,{_id: 5432,str: "Ameliorated Cook Islands Engineer",num: 53731,date: new Date("2018-09-06T06:28:29.368Z"),array: [],obj: {_id: 5433,str: "payment connecting",num: 63583,date: new Date("2018-09-06T17:07:59.906Z"),array: ["Incredible",new Date("2018-09-05T20:22:23.451Z")],obj: {_id: 5434,date: new Date("2018-09-06T10:31:14.708Z"),array: [],obj: {}}}}],obj: {_id: 5435,str: "Saint Martin Nevada",num: 64859}});
    },

    function(coll) {
        return coll.insert({_id: 5436,str: "Global",num: 6571,date: new Date("2018-09-05T20:15:46.825Z"),array: ["Oklahoma programming",88587,"Home Kiribati",new Date("2018-09-05T22:51:04.182Z"),"green Gardens","utilize Fresh","deposit redundant Utah",new Date("2018-09-06T14:40:49.605Z"),{_id: 5437,num: 1482,date: new Date("2018-09-06T19:48:09.194Z"),array: [new Date("2018-09-06T02:42:59.321Z"),[],[],15007,77205,"navigating Credit Card Account"],obj: {}},{_id: 5438,num: 30563,date: new Date("2018-09-06T02:13:57.259Z"),obj: {_id: 5439,num: 12930,array: [20108,[]],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 5440,str: "Architect sticky",num: 86282,date: new Date("2018-09-06T19:13:40.561Z")});
    },

    function(coll) {
        return coll.insert({_id: 5441,str: "Austria deposit",num: 79231,date: new Date("2018-09-05T20:24:15.265Z"),array: ["Customer Mobility copying",new Date("2018-09-06T11:44:47.249Z"),{_id: 5442,str: "Associate Optional",num: 93821,date: new Date("2018-09-05T23:27:02.500Z"),array: [83116,38321,6570,new Date("2018-09-06T09:47:24.688Z")],obj: {}},"Bedfordshire Adaptive","Tools Ergonomic Fresh Computer",[{_id: 5443,str: "calculating",num: 66845,date: new Date("2018-09-06T13:10:46.731Z"),obj: {_id: 5444,str: "Reunion",num: 32912,array: []}},"Bedfordshire Cape"],[],new Date("2018-09-06T03:15:21.797Z"),{_id: 5445,str: "matrix",date: new Date("2018-09-06T08:12:12.060Z"),array: [new Date("2018-09-06T01:06:26.424Z"),new Date("2018-09-06T12:14:55.850Z")],obj: {}},70177,57643],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5446,str: "local area network feed",num: 89853,date: new Date("2018-09-06T17:32:02.986Z"),array: [new Date("2018-09-06T17:50:25.228Z"),"RAM",new Date("2018-09-06T13:16:26.912Z"),41959,"system Executive",new Date("2018-09-06T02:59:59.974Z"),"Checking Account Small Steel Car",24421,new Date("2018-09-06T11:30:37.635Z")],obj: {_id: 5447,str: "leading edge override",num: 53398,date: new Date("2018-09-06T17:47:31.698Z"),array: ["teal"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5448,str: "primary even-keeled Shirt",date: new Date("2018-09-06T04:16:53.405Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5449,str: "Awesome CSS PCI",num: 73671,date: new Date("2018-09-06T08:28:49.916Z"),array: ["Product synthesizing Handcrafted Rubber Gloves",79804,new Date("2018-09-06T18:22:08.986Z"),40590,new Date("2018-09-06T01:03:43.660Z"),"Checking Account",24274],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5450,str: "Automotive backing up SQL",num: 32229,date: new Date("2018-09-06T13:49:09.685Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5451,str: "invoice Savings Account models",num: 63346,date: new Date("2018-09-06T19:38:35.303Z"),array: [98542,new Date("2018-09-06T12:59:25.772Z"),"web-enabled",{_id: 5452,str: "Borders customized USB",num: 15601,date: new Date("2018-09-06T13:13:58.982Z"),array: [],obj: {}},"sticky embrace Global","Awesome User-centric",{_id: 5453,num: 18624,array: [new Date("2018-09-06T18:09:30.823Z"),new Date("2018-09-06T19:49:26.523Z")],obj: {_id: 5454,num: 97791,date: new Date("2018-09-06T01:43:13.943Z")}},{_id: 5455,str: "Baby Planner",date: new Date("2018-09-06T06:33:44.941Z"),obj: {_id: 5456,str: "Rand Loti Reactive",num: 58771}},9293,new Date("2018-09-06T13:05:03.086Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5457,str: "Walk Squares",num: 1448,date: new Date("2018-09-05T22:36:04.457Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5458,str: "Director",num: 87580,date: new Date("2018-09-06T04:51:20.129Z"),array: [55080,[],new Date("2018-09-06T03:10:43.128Z"),"Jordan",new Date("2018-09-06T17:22:50.655Z"),99985,"Buckinghamshire Plastic",47454,{_id: 5459,str: "Shoals Wooden architect",num: 63190,date: new Date("2018-09-06T10:00:06.362Z"),array: ["empower District",3367],obj: {_id: 5460,date: new Date("2018-09-06T14:57:28.388Z"),array: []}},"iterate program",new Date("2018-09-06T01:08:32.320Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5461,str: "SQL copy",num: 61137,date: new Date("2018-09-06T16:55:09.593Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5462,str: "plug-and-play matrix Investment Account",num: 52485,date: new Date("2018-09-06T04:16:58.992Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5463,str: "payment B2B",num: 87540,date: new Date("2018-09-06T06:36:48.861Z"),array: [42999,19685,2029,{_id: 5464,str: "viral Metal",num: 91642,date: new Date("2018-09-06T06:48:19.305Z"),array: [],obj: {_id: 5465,str: "Upgradable Codes specifically reserved for testing purposes invoice",num: 32279,array: [],obj: {}}},"connect networks",new Date("2018-09-06T13:34:29.027Z"),new Date("2018-09-05T23:06:16.114Z"),"XML Borders orchestrate"]});
    },

    function(coll) {
        return coll.insert({_id: 5466,str: "Gorgeous integrated",num: 22944,date: new Date("2018-09-06T00:38:06.476Z"),array: [],obj: {_id: 5467,str: "Developer",num: 98087,date: new Date("2018-09-06T16:23:53.931Z"),array: [new Date("2018-09-05T20:45:59.184Z"),"Forward neural value-added",68547,[87260,"Chicken Branding",new Date("2018-09-06T07:59:00.142Z")],new Date("2018-09-06T02:54:56.210Z"),new Date("2018-09-06T14:15:06.598Z"),12079,{_id: 5468,str: "scalable",num: 5632,date: new Date("2018-09-06T08:09:07.864Z"),array: [],obj: {}},"moratorium Checking Account Corporate",41822]}});
    },

    function(coll) {
        return coll.insert({_id: 5469,str: "Licensed",num: 59156,date: new Date("2018-09-06T17:02:44.882Z"),array: [new Date("2018-09-06T07:49:59.492Z"),"circuit Buckinghamshire","Inverse Response",69314,[91916],[],{_id: 5470,str: "definition JBOD",num: 90104,date: new Date("2018-09-06T07:48:19.517Z")},{_id: 5471,str: "Money Market Account",num: 46459,date: new Date("2018-09-06T17:52:40.502Z"),array: [],obj: {_id: 5472,str: "complexity",date: new Date("2018-09-06T18:29:26.637Z"),array: [new Date("2018-09-06T04:23:33.644Z")],obj: {}}},94123,new Date("2018-09-06T18:30:04.580Z"),"Buckinghamshire disintermediate Sausages",20880],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5473,str: "efficient Kina",num: 32103,date: new Date("2018-09-05T21:48:36.541Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5474,str: "static Ergonomic Investment Account",num: 27849,date: new Date("2018-09-05T20:22:24.990Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5475,str: "Corner",num: 33132,date: new Date("2018-09-06T19:33:26.970Z"),array: [86707,"Massachusetts Persistent","Secured",new Date("2018-09-06T06:00:29.237Z"),new Date("2018-09-06T19:18:19.863Z"),{_id: 5476,str: "e-enable Awesome Rubber Pizza portals",num: 17664,date: new Date("2018-09-06T06:45:01.470Z"),array: [],obj: {_id: 5477,str: "quantify COM Soft",num: 20837,date: new Date("2018-09-06T18:55:31.624Z"),array: [],obj: {_id: 5478,date: new Date("2018-09-06T00:02:52.467Z"),array: [],obj: {}}}},[63005],1059,[],{_id: 5479,str: "cross-media",num: 10944,array: ["Mission yellow cross-platform",new Date("2018-09-06T16:37:30.780Z"),new Date("2018-09-06T01:21:49.341Z")],obj: {}},["Forest"],"protocol Cambridgeshire Via"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5480,str: "Handcrafted",num: 69283,array: [],obj: {_id: 5481,str: "copy",num: 34638,date: new Date("2018-09-05T23:21:36.445Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5482,str: "program Berkshire generating",num: 85837,date: new Date("2018-09-06T14:17:43.617Z"),array: ["Fish Keyboard","Car Gorgeous Turnpike",new Date("2018-09-05T23:35:09.839Z"),"Ethiopia",{_id: 5483,str: "invoice PCI",date: new Date("2018-09-06T05:26:14.511Z"),obj: {}},2739,10629,"Cambridgeshire Cambridgeshire",[],new Date("2018-09-06T17:32:17.156Z"),76515,91724,{_id: 5484,str: "protocol JSON GB",num: 64576,array: [],obj: {_id: 5485,str: "system-worthy function Uzbekistan",num: 57032,date: new Date("2018-09-06T05:23:16.653Z"),array: [[]],obj: {_id: 5486,str: "Fantastic projection Chair",num: 66781,date: new Date("2018-09-05T20:57:39.570Z"),array: [{_id: 5487,obj: {_id: 5488,date: new Date("2018-09-06T07:38:38.965Z"),array: ["Representative Soft Cambridgeshire",new Date("2018-09-05T22:44:09.264Z")]}},60163]}}},84908],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5489,str: "Tactics",num: 83756,date: new Date("2018-09-06T00:14:28.275Z"),array: [],obj: {_id: 5490,str: "Gorgeous microchip",num: 72263,date: new Date("2018-09-06T13:17:47.315Z"),array: [new Date("2018-09-06T00:49:45.641Z"),"array",40602,"Buckinghamshire Buckinghamshire","panel index",23511,"Analyst"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5491,str: "Tennessee SMS",num: 24431,date: new Date("2018-09-06T17:21:10.944Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5492,str: "Kuwait",num: 75079,date: new Date("2018-09-06T15:37:38.027Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5493,num: 4690,date: new Date("2018-09-06T04:56:53.938Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5494,str: "Avon quantifying",num: 35282,date: new Date("2018-09-06T06:23:21.083Z"),array: [{_id: 5495,str: "ability compress Administrator",num: 44186,date: new Date("2018-09-06T13:10:55.708Z"),array: [],obj: {_id: 5496,str: "programming Games Tennessee",num: 61490,date: new Date("2018-09-06T01:10:58.577Z"),array: [{_id: 5497,str: "New Leu New Jersey",date: new Date("2018-09-06T01:33:50.922Z")}],obj: {}}},"New Zealand SMTP hack",36391,67948,new Date("2018-09-06T02:46:10.309Z"),[],[],"Berkshire",{_id: 5498,str: "motivating sky blue convergence",num: 30955,obj: {_id: 5499,str: "orange Concrete",date: new Date("2018-09-06T17:17:17.111Z"),array: [41291,13598,new Date("2018-09-06T03:35:42.945Z"),"vertical SDD help-desk"]}},new Date("2018-09-05T23:01:06.804Z"),[],"bleeding-edge e-markets"],obj: {_id: 5500,array: ["transmitting dynamic"]}});
    },

    function(coll) {
        return coll.insert({_id: 5501,str: "Refined deposit",num: 85142,date: new Date("2018-09-06T05:37:49.555Z"),array: [new Date("2018-09-05T21:21:02.419Z"),"Money Market Account",{_id: 5502,num: 28023,date: new Date("2018-09-05T22:48:02.325Z"),array: [],obj: {_id: 5503,str: "fresh-thinking",num: 5847,date: new Date("2018-09-06T15:51:23.497Z"),array: [new Date("2018-09-06T11:43:56.147Z")],obj: {}}},"SDR Manager","Wooden Liaison Credit Card Account",32251,85935,new Date("2018-09-06T06:22:44.935Z"),"Tennessee",[],new Date("2018-09-06T09:00:36.977Z"),new Date("2018-09-05T21:30:39.571Z")],obj: {_id: 5504,str: "Car",num: 2380,array: [17131,{_id: 5505,str: "Central invoice Stravenue",date: new Date("2018-09-06T18:51:26.341Z"),obj: {}},[],"Alaska open-source Keys",new Date("2018-09-06T17:22:14.737Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 5506,str: "calculating",num: 4316,date: new Date("2018-09-06T18:48:50.563Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5507,num: 8576,date: new Date("2018-09-06T18:49:29.063Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5508,str: "Rustic Plastic Fish XSS",num: 97273,array: [],obj: {_id: 5509,str: "District interfaces",num: 72044,date: new Date("2018-09-05T21:58:14.185Z"),array: ["Route Arizona cyan",70917,{_id: 5510,num: 69206,date: new Date("2018-09-06T15:43:30.745Z"),array: [72324],obj: {}},"Qatari Rial Public-key","JSON Metical fault-tolerant",new Date("2018-09-05T20:15:27.614Z"),new Date("2018-09-06T03:01:13.003Z"),84198,[],[new Date("2018-09-06T06:32:46.389Z"),new Date("2018-09-05T22:23:26.552Z")],{_id: 5511,str: "Unbranded Soft Salad",date: new Date("2018-09-06T17:50:19.294Z"),array: [],obj: {}},53902,"JSON hub Coordinator"],obj: {_id: 5512,str: "Maryland",num: 83246,date: new Date("2018-09-05T20:29:39.019Z"),obj: {_id: 5513,str: "generating",num: 13078,array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 5514,str: "system-worthy Bedfordshire",num: 79061,date: new Date("2018-09-06T15:42:26.607Z"),array: [new Date("2018-09-06T13:12:55.395Z"),new Date("2018-09-05T20:20:59.863Z"),[22281,"revolutionize web services"],{_id: 5515,str: "orchestrate local",num: 87539,date: new Date("2018-09-05T21:45:15.662Z"),array: [71986],obj: {}},"sensor capacitor Cotton",{_id: 5516,str: "grey product redundant",num: 83934,date: new Date("2018-09-06T11:15:35.087Z"),array: ["Home Loan Account Corporate",78965,[],"action-items Universal"],obj: {_id: 5517,date: new Date("2018-09-06T03:28:17.425Z"),obj: {_id: 5518,str: "Tactics input Incredible",num: 90795,date: new Date("2018-09-06T05:19:01.899Z"),array: []}}},46716,new Date("2018-09-06T14:29:30.524Z"),new Date("2018-09-06T04:32:57.967Z"),379,74325,[],[]]});
    },

    function(coll) {
        return coll.insert({_id: 5519,str: "Checking Account payment",date: new Date("2018-09-05T22:32:44.657Z"),array: [],obj: {_id: 5520,str: "solid state",num: 3907,date: new Date("2018-09-05T20:29:39.010Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5521,num: 60071,date: new Date("2018-09-06T01:33:58.057Z"),array: [],obj: {_id: 5522,str: "Branch Home Loan Account gold",date: new Date("2018-09-06T13:51:54.120Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5523,num: 40407,date: new Date("2018-09-06T19:51:36.536Z"),array: ["Object-based repurpose",46058,new Date("2018-09-05T21:09:11.705Z"),new Date("2018-09-06T10:52:06.649Z"),new Date("2018-09-06T04:44:33.595Z"),45833,15030,{_id: 5524,str: "green primary",num: 84979,array: [],obj: {_id: 5525,str: "GB compressing",num: 40363,date: new Date("2018-09-06T12:30:07.172Z"),array: [],obj: {}}},{_id: 5526,str: "Ergonomic Rubber Shirt",num: 93972,date: new Date("2018-09-06T17:05:38.757Z"),array: ["Handmade orchestrate"],obj: {_id: 5527,str: "mint green deposit",num: 51209,date: new Date("2018-09-05T22:26:27.446Z")}},"withdrawal next-generation",[],"Manager back-end"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5528,str: "New York Division",num: 30034,array: [77834,60866,new Date("2018-09-05T19:56:54.921Z"),new Date("2018-09-06T17:53:46.288Z"),new Date("2018-09-06T10:46:11.684Z"),new Date("2018-09-06T12:36:24.584Z"),new Date("2018-09-06T10:20:50.268Z"),[],"Handcrafted Frozen Chicken process improvement","Sausages Practical Concrete Chips",53470,"Wooden Fish",{_id: 5529,str: "user-centric GB",num: 87709,date: new Date("2018-09-06T17:45:03.333Z"),array: [],obj: {}},53663],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5530,str: "Licensed",num: 78428,date: new Date("2018-09-06T13:50:08.689Z"),array: [],obj: {_id: 5531,str: "channels bleeding-edge Web",date: new Date("2018-09-05T23:15:32.839Z"),array: [],obj: {_id: 5532,num: 14847,date: new Date("2018-09-06T08:52:11.142Z"),array: [new Date("2018-09-06T16:52:34.894Z"),"New Hampshire",66630,new Date("2018-09-06T12:06:21.724Z"),[new Date("2018-09-06T13:27:07.306Z"),"Panama withdrawal Rustic Soft Chips"],{_id: 5533,str: "Coordinator firewall",num: 81221,array: [],obj: {}},"Chief",14055,"e-commerce",new Date("2018-09-06T08:43:52.086Z"),65955,"gold whiteboard"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5534,str: "driver Borders",num: 63595,array: ["stable","feed Thailand","sensor quantifying Awesome Plastic Chips",new Date("2018-09-06T12:02:04.508Z"),new Date("2018-09-06T12:15:50.406Z"),91856,"Plastic",20466,new Date("2018-09-06T07:15:59.190Z"),73945,[],{_id: 5535,num: 62699,array: [new Date("2018-09-06T14:05:22.595Z")],obj: {_id: 5536,str: "Kentucky",num: 44766,date: new Date("2018-09-06T10:48:24.693Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5537,str: "Jewelery",num: 53917,date: new Date("2018-09-06T10:07:51.771Z"),array: ["B2C Kids",93608,[],new Date("2018-09-06T18:32:28.656Z"),9324,new Date("2018-09-05T23:22:14.271Z"),"Bahraini Dinar Checking Account",80859,"Soft"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5538,num: 36072,date: new Date("2018-09-05T22:37:43.245Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5539,str: "Awesome Fresh Bacon",num: 45877,date: new Date("2018-09-06T05:35:39.731Z"),array: [new Date("2018-09-06T06:52:23.812Z"),{_id: 5540,str: "GB",date: new Date("2018-09-06T08:22:14.372Z"),array: [],obj: {_id: 5541,str: "Soap",num: 82994,date: new Date("2018-09-06T12:53:31.662Z"),array: ["Awesome Fresh Hat Sleek","emulation Berkshire"],obj: {_id: 5542,num: 59286,obj: {}}}},{_id: 5543,str: "Fully-configurable program",num: 66950,date: new Date("2018-09-06T10:49:13.444Z"),array: [],obj: {}},1325,50422,61851,"Dynamic",[new Date("2018-09-06T10:10:52.382Z"),new Date("2018-09-06T18:15:15.071Z")],84165,new Date("2018-09-06T00:05:34.202Z"),"Avon",60935]});
    },

    function(coll) {
        return coll.insert({_id: 5544,str: "Credit Card Account turn-key Principal",num: 73475,date: new Date("2018-09-05T22:52:58.176Z")});
    },

    function(coll) {
        return coll.insert({_id: 5545,str: "Ergonomic",num: 70470,date: new Date("2018-09-06T17:24:41.769Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5546,str: "Metal deposit",num: 98201,date: new Date("2018-09-05T20:01:06.927Z"),obj: {_id: 5547,str: "open-source Steel distributed",num: 28887,date: new Date("2018-09-06T09:14:36.639Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5548,str: "Tools Ergonomic e-markets",num: 55538,date: new Date("2018-09-06T07:15:08.319Z"),array: [new Date("2018-09-06T07:14:13.344Z"),83917,50149,"workforce input","magenta Interactions GB",new Date("2018-09-06T00:28:30.559Z"),"Bedfordshire","Michigan bypassing ROI",80144,91585,new Date("2018-09-06T14:51:40.984Z"),{_id: 5549,str: "Assimilated",num: 39913,date: new Date("2018-09-06T10:17:43.694Z"),array: [],obj: {_id: 5550,array: [[{_id: 5551,str: "Intelligent Metal Bike",num: 6915,date: new Date("2018-09-06T02:35:50.720Z"),array: []}]],obj: {_id: 5552,str: "Mexico Swaziland Avon",array: [new Date("2018-09-06T17:27:23.975Z")],obj: {}}}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5553,str: "Computer content",num: 2162,date: new Date("2018-09-05T23:59:08.343Z"),array: [{_id: 5554,str: "firewall Designer Tools",num: 4667,date: new Date("2018-09-06T04:05:46.983Z"),array: [new Date("2018-09-06T02:50:10.829Z"),[],72888,"cohesive",{_id: 5555,str: "Intelligent Metal Computer",num: 74927,date: new Date("2018-09-06T13:50:01.242Z"),obj: {}},98679],obj: {_id: 5556,date: new Date("2018-09-06T19:27:59.682Z"),array: []}},{_id: 5557,str: "Handcrafted Steel Cheese enterprise",array: [],obj: {_id: 5558,num: 52878,date: new Date("2018-09-06T19:18:11.948Z"),array: [],obj: {_id: 5559,str: "Tasty Legacy",num: 16646,array: ["24 hour",59824,50638,"California Shoes"]}}},[33548],new Date("2018-09-06T04:19:18.223Z"),53073,new Date("2018-09-06T04:38:17.376Z"),new Date("2018-09-06T07:51:33.517Z"),["haptic Refined Plastic Car",new Date("2018-09-06T00:05:49.765Z")],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5560,str: "Multi-layered Granite Incredible",num: 11332,array: [[],"synthesizing Malagasy Ariary Implementation",40739,"programming Motorway",57366,["ability grow",[]],{_id: 5561,str: "Group International",num: 70065,date: new Date("2018-09-06T03:04:18.451Z"),array: [41219],obj: {}},new Date("2018-09-06T04:26:02.467Z"),17146,new Date("2018-09-06T04:18:49.073Z"),new Date("2018-09-06T05:22:54.909Z")],obj: {_id: 5562,str: "Virtual calculate",num: 3992,array: [],obj: {_id: 5563,date: new Date("2018-09-06T00:36:29.433Z"),array: [new Date("2018-09-06T03:43:45.160Z"),{_id: 5564,str: "Moldovan Leu Towels",num: 41649,date: new Date("2018-09-06T02:22:39.770Z")},"Regional",new Date("2018-09-06T05:16:52.413Z"),[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 5565,str: "synthesize bandwidth",num: 90860,date: new Date("2018-09-06T19:19:34.021Z"),array: [],obj: {_id: 5566,num: 16255,date: new Date("2018-09-06T06:48:03.764Z"),array: [],obj: {_id: 5567,str: "context-sensitive e-services ubiquitous",date: new Date("2018-09-06T16:36:47.043Z"),array: ["protocol RSS",67740,new Date("2018-09-06T05:18:24.932Z"),{_id: 5568,str: "synthesize invoice",num: 10526,array: ["synthesizing copying",new Date("2018-09-06T03:50:03.481Z"),88681],obj: {}},[],new Date("2018-09-06T10:33:30.700Z"),"Home Loan Account","EXE Incredible",{_id: 5569,str: "Ohio",num: 98537,date: new Date("2018-09-06T05:01:08.441Z"),obj: {_id: 5570,str: "enable payment Views",num: 80235,date: new Date("2018-09-06T08:37:40.136Z"),array: ["Senior",new Date("2018-09-06T14:13:47.504Z"),[],{_id: 5571,str: "evolve Optimization Bolivia",array: [{_id: 5572,num: 29784,array: [10958],obj: {}}]},[]],obj: {}}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 5573,str: "Rubber cultivate Mongolia",num: 414,date: new Date("2018-09-06T03:22:08.581Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5574,str: "Markets Guinea Franc cross-platform",num: 26037,date: new Date("2018-09-05T20:00:41.307Z"),array: ["green Salad Dobra","Producer",92438,new Date("2018-09-05T22:04:39.435Z"),new Date("2018-09-06T19:35:45.292Z"),25237,"Gorgeous Wooden Towels",new Date("2018-09-05T20:30:20.917Z"),{_id: 5575,str: "Steel",num: 46499,date: new Date("2018-09-05T21:30:23.961Z"),array: [],obj: {_id: 5576,date: new Date("2018-09-06T04:51:14.312Z"),array: [],obj: {_id: 5577,str: "Wisconsin",array: [{_id: 5578,str: "real-time",num: 44926,date: new Date("2018-09-06T18:44:50.271Z"),obj: {_id: 5579,str: "Developer",num: 23892,date: new Date("2018-09-06T12:23:21.368Z"),array: [43093,new Date("2018-09-06T00:30:30.079Z")]}},[],"solid state",{_id: 5580,num: 85586,obj: {}}],obj: {_id: 5581,str: "generate",num: 57078,date: new Date("2018-09-06T01:42:56.967Z")}}}},[],{_id: 5582,str: "Savings Account copying",num: 11911,date: new Date("2018-09-06T00:51:06.182Z"),array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 5583,str: "Chad tertiary",num: 82456,date: new Date("2018-09-06T03:48:14.435Z")});
    },

    function(coll) {
        return coll.insert({_id: 5584,str: "bluetooth",date: new Date("2018-09-06T01:32:34.395Z"),array: ["Accounts",86716,36965,[new Date("2018-09-06T15:00:37.820Z"),new Date("2018-09-05T23:42:05.385Z")],{_id: 5585,str: "District Pula",num: 26631,date: new Date("2018-09-06T06:53:19.996Z"),array: [],obj: {}},"sensor revolutionize Iowa",new Date("2018-09-06T05:12:45.202Z"),[new Date("2018-09-06T07:34:08.336Z")],{_id: 5586,num: 103,date: new Date("2018-09-06T19:54:19.078Z"),array: [],obj: {}},92348,"1080p SQL invoice","Crossroad",47987,[]],obj: {_id: 5587,str: "sensor e-enable",num: 13959,date: new Date("2018-09-06T16:43:21.676Z")}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.num": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayElemAt: [[15473,'$obj.num'],53312] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[28748,'$num'],["invoice",{ $rtrim: { input: { $toLower: "Executive" } } }],[],['$obj.obj.obj.obj.str',{ $ltrim: { input: { $substrBytes: ["monitor Luxembourg",13,6] } } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Internal invoice",'$obj.str'],[58157],[{ $rtrim: { input: '$obj.str' } }]]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: { $isoWeekYear: { $year: { $month: { $second: { $hour: { $year: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T00:02:57.192Z"),format: "%z-%V-%z-%S-%G-%H",timezone: "Australia/Darwin",onNull: { $range: [18,0,9] }} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$str',{ $rtrim: { input: { $toLower: "monetize Proactive Communications" } } },"analyzer"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',{ $substrCP: ["District Specialist Applications",18,13] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["XSS Gorgeous Fresh Car Baby"],48315] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $dayOfWeek: { $isoWeek: { $dayOfYear: { $toDate: { $concat: [{ $toString: { $arrayElemAt: [["Shirt zero defect"],'$obj.obj.obj.num'] } },'$obj.obj.obj.str',"Buckinghamshire architecture"] } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],12674] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["alarm"],8775] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T20:29:28.952Z",timezone: "America/Los_Angeles",onError: { $substr: [{ $trim: { input: { $substr: ['$obj.str',14,20] } } },8,17] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[89653,'$num'],60117] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ["HTTP transmit Sudanese Pound",'$obj.obj.obj.obj.str'] },"microchip Alabama"],[{ $toUpper: '$obj.obj.str' }],['$obj.num','$obj.obj.obj.num'],['$obj.obj.obj.str','$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeek: { $dateFromParts: { year: { $ceil: 18949 } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Handcrafted Cotton Soap Malaysian Ringgit standardization",'$obj.obj.obj.str'],{ $mod: ['$obj.obj.obj.num','$obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.obj.str',1,17] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [94483,'$num',{ $ceil: '$obj.obj.obj.num' }],cond: true} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T14:06:09.480Z",format: "%V-%M-%S-%u-%j-%z-%V-%%-%L-%S-%L",onError: { $filter: {input: [],as: 'amalia',cond: { $lt: [{ $arrayElemAt: [[{ $substrBytes: ["synergize bus",2,8] },{ $rtrim: {input: "deposit Operations",chars: '$$amalia'} },'$$amalia','$str'],93114] },{ $arrayElemAt: [[{ $toLower: '$$amalia' }],{ $ln: '$num' }] }] }} },onNull: "recontextualize paradigms B2C"} }, _id: 0}}],

        [{$project: {a: { $second: '$obj.date' }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: { $concat: ["Home Loan Account compress tan","orchid deposit"] }} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $hour: { $toDate: { $range: [3,18] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "hack Research",v: 31464}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',{ $sqrt: 92078 },66686,'$obj.num'],[],[60286],[{ $substr: ['$obj.obj.obj.str',20,2] }]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $week: { $isoDayOfWeek: { $year: { $hour: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T01:19:39.960Z",onNull: { $rtrim: { input: '$obj.obj.str' } }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],["invoice Paradigm Direct"],['$obj.obj.obj.num'],["synergies Paradigm logistical",{ $toUpper: { $toLower: '$obj.obj.str' } },"Music Car driver"]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $millesecond: { $second: { $dateFromString: { dateString: "2018-09-06T05:26:27.013Z" } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T13:43:07.730Z",onError: { $concatArrays: [] },onNull: "backing up Chief"} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Plastic executive",13,18] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: [{ $concat: ["Orchestrator programming",{ $toString: { $isoDayOfWeek: { $week: { $dateFromString: {dateString: "2018-09-06T11:03:10.186Z",timezone: "Europe/Stockholm"} } } } }] },17,16] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.str'],[82904]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$obj.obj.str' }],44190] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoDayOfWeek: { $minute: { $dateFromParts: {isoWeekYear: { $trunc: '$obj.num' },isoDayOfWeek: { $exp: '$num' },hour: { $cmp: [{ $month: { $dayOfYear: '$obj.date' } },{ $arrayElemAt: [["Money Market Account",{ $trim: { input: '$obj.obj.str' } },{ $toString: { $arrayElemAt: [[],'$obj.num'] } }],49938] }] },minute: { $subtract: [7686,71303] },second: { $multiply: [14007] },timezone: "America/Detroit"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],98228] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.date'],46377] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.str'],[72820,481],[{ $trim: { input: "ROI models Automotive" } },"Rubber Music",'$obj.obj.obj.obj.str','$obj.obj.obj.obj.str'],[{ $ltrim: {input: '$str',chars: "Legacy"} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[85214],96135] }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeekYear: { $millesecond: { $dateToParts: { date: { $isoWeekYear: { $isoWeek: { $dayOfMonth: { $month: { $toDate: { $substrBytes: ['$obj.obj.str',0,7] } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["gold",6,18] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromParts: {year: { $ln: 61296 },month: { $pow: ['$obj.num','$obj.obj.num'] },hour: { $multiply: [35302,'$num'] },minute: { $subtract: [29542,'$num'] },millisecond: { $subtract: ['$obj.num',{ $indexOfArray: [{ $range: [5,0,20] },{ $arrayElemAt: [['$obj.obj.obj.str'],42971] },20] }] },timezone: "Pacific/Tarawa"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Tactics Usability Multi-lateral",v: new Date("2018-09-06T07:24:39.323Z")},{k: "Wooden Ohio",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "JSON Ohio" },'$obj.obj.obj.str'],5245] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Organic",2,11] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Gibraltar Pound orchid",'$obj.num','$obj.num'],62842] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "cyan Auto Loan Account Texas",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $add: [] }],["Cameroon"],[{ $dateToString: {date: new Date("2018-09-06T13:53:31.402Z"),format: "%L-%w-%V-%Z-%L-%j-%U-%j-%G-%L-%Y",timezone: "Pacific/Fakaofo",onNull: { $month: { $toDate: { $arrayToObject: [[{k: "stable navigate Beauty",v: false},{k: "product bandwidth Infrastructure",v: new Date("2018-09-06T14:50:19.974Z")},{k: "auxiliary",v: '$obj.obj.obj.date'}]] } } }} }],[],[1809],[]]] }, _id: 0}}],

        [{$project: {a: { $week: new Date("2018-09-06T19:46:08.310Z") }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$str',{ $toLower: "Trace" },"Orchestrator Fantastic Concrete Ball alarm",{ $rtrim: {input: '$obj.obj.str',chars: { $substr: ['$obj.obj.obj.obj.str',18,8] }} }],[],[{ $trim: { input: "UIC-Franc Inlet Soft" } }],['$obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: '$obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $toLower: { $ltrim: { input: { $toString: { $substrCP: ["Run compressing",7,18] } } } } }] }, _id: 0}}],

        [{$project: {a: { $year: { $week: { $hour: '$date' } } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrCP: ["Delaware Planner synthesizing",5,16] } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: '$$this'} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'angelita',in: { $trunc: 15742 }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Tasty Rubber Ball Car Fresh",9,20] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["generate morph",13,5] }, _id: 0}}],

        [{$project: {a: { $second: { $toDate: { $arrayToObject: [[{k: "Savings Account eco-centric metrics",v: '$date'}]] } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T10:19:36.760Z",format: "%z-%L-%w-%Z-%G-%H-%U-%u-%S-%S",onNull: '$obj.str'} } }, _id: 0}}],

        [{$project: {a: { $toString: { $isoDayOfWeek: { $minute: { $isoWeek: { $isoDayOfWeek: { $second: { $dayOfMonth: { $dateToString: {date: { $dateFromParts: {year: { $add: ['$obj.obj.obj.num',{ $floor: '$obj.obj.obj.num' },73014,66627] },month: 91697,day: { $size: [["parse"]] },hour: { $size: [[]] },millisecond: { $subtract: [{ $sqrt: { $multiply: [] } },'$num'] },timezone: "America/New_York"} },timezone: "Europe/Ulyanovsk"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $range: [4,19] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $substrBytes: ['$obj.obj.obj.str',12,15] },9,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: "Garden Technician" }],['$obj.obj.num',68623],["users Bhutan Borders","Timor-Leste quantifying"],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $week: { $second: { $toDate: { $arrayToObject: [[]] } } } },timezone: "Asia/Calcutta"} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $year: { $minute: { $month: { $dayOfWeek: { $second: { $dateFromString: {dateString: "2018-09-05T22:58:59.635Z",onNull: { $arrayElemAt: [["Officer circuit system"],'$num'] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "quantify",v: true}]] }, _id: 0}}],

        [{$project: {a: { $month: { $second: { $dayOfWeek: { $hour: { $dayOfWeek: { $dateFromParts: {year: { $ln: '$num' },day: { $divide: [31311,'$obj.obj.obj.num'] },second: { $abs: 58106 }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Officer"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T12:09:21.457Z",format: "%M-%j-%U-%u-%Y-%L-%S-%V-%j",timezone: "Brazil/East",onNull: { $arrayToObject: [[[],['$obj.obj.obj.str']]] }} },format: "%w-%m-%U-%d-%j-%w-%w-%G-%S-%M-%Z-%Z",timezone: "America/Campo_Grande"} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $isoDayOfWeek: { $hour: { $dayOfYear: { $toDate: { $substrCP: ['$obj.obj.obj.str',10,9] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.str',16,17] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $substrBytes: ["Intelligent Granite Lead",7,9] } },{ $trim: { input: '$obj.str' } },"Tasty"]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $rtrim: { input: "lavender Investor Illinois" } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Rubber Lead",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Street Compatible methodology",{ $rtrim: { input: "Assurance" } }],82756] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "6th generation",v: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T10:46:21.640Z",format: "%Z-%z-%j-%V-%V",timezone: "Europe/Vienna",onError: { $arrayElemAt: [[{ $divide: [81029,'$obj.obj.obj.num'] },20311,'$num'],44290] }} } }}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [91282],as: 'alexie',in: { $pow: [6176,'$$alexie'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],['$obj.obj.obj.str'],['$obj.obj.num',2464]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $millesecond: { $dateFromString: {dateString: "2018-09-05T22:34:30.573Z",onNull: { $arrayElemAt: [[],'$obj.obj.obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'fay',cond: { $in: [{ $map: {input: [],in: { $mod: [96919,{ $divide: [24586,'$obj.obj.obj.num'] }] }} },{ $concatArrays: [['$$fay',36774],["enhance transmitting",{ $rtrim: { input: '$obj.obj.obj.obj.str' } },"connecting redefine Russian Federation"],[],['$$fay',{ $toUpper: { $trim: { input: '$str' } } },"quantify"]] }] }} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit Guernsey Nevada",v: 59173}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toString: { $trim: {input: "sky blue Ridges",chars: '$str'} } }],in: { $log10: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "dedicated Personal Loan Account attitude",v: 89033},{k: "Borders",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["Awesome Concrete Shoes innovate"],[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Massachusetts system",v: '$num'},{k: "B2C SMTP Cotton",v: new Date("2018-09-06T14:55:27.584Z")},{k: "Markets",v: 53823}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$str',8,13] },"Handmade"],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $year: { $isoWeekYear: { $dateToString: { date: '$obj.obj.obj.date' } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T22:55:32.295Z",timezone: "America/Goose_Bay"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Sleek Concrete Tuna",{ $rtrim: { input: '$obj.str' } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["IB Refined"],62540] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Jordanian Dinar",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Future calculating Money Market Account",{ $concat: ['$obj.str',{ $substrBytes: ['$obj.obj.str',17,1] },'$obj.obj.str',{ $trim: {input: '$str',chars: "mesh"} }] }],as: 'dewayne',cond: { $or: ['$$dewayne'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[47271],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[55896,true],'$obj.num'] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $isoWeekYear: { $dateFromParts: {year: { $pow: ['$obj.obj.num',26542] },second: '$num',millisecond: { $log10: '$obj.num' },timezone: "Pacific/Kosrae"} } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfWeek: '$obj.obj.obj.date' },onNull: { $reverseArray: [['$obj.obj.obj.obj.str']] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',{ $dateToString: {date: '$obj.obj.date',onNull: { $toString: { $range: [15,11,19] } }} },'$obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [39897],as: 'joaquin',cond: { $lt: [{ $dateToString: {date: new Date("2018-09-06T14:36:45.984Z"),format: "%w-%%-%S-%L-%%-%M-%Y-%u-%S-%U",onNull: { $millesecond: { $second: { $dayOfYear: { $dayOfWeek: { $dateToString: {date: { $isoWeekYear: { $hour: { $toDate: { $arrayElemAt: [["Auto Loan Account indexing Lead",{ $rtrim: { input: "HTTP synthesize full-range" } },"Incredible North Korean Won"],'$obj.obj.num'] } } } },timezone: "America/Nipigon",onNull: '$obj.obj.obj.str'} } } } } }} },{ $year: { $year: { $dateToParts: {date: { $minute: { $isoDayOfWeek: { $isoWeekYear: { $minute: { $isoWeek: { $dayOfYear: { $isoWeekYear: { $dayOfMonth: { $dateFromString: { dateString: "2018-09-06T14:49:02.797Z" } } } } } } } } } },timezone: "Australia/Victoria",iso8601: true} } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "composite Enterprise-wide",v: false},{k: "Kentucky tan",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "disintermediate haptic Human",v: '$obj.num'},{k: "Chair analyzer Bike",v: { $dateToString: {date: '$obj.date',onNull: { $filter: {input: ['$obj.obj.num',{ $floor: 65955 }],cond: { $ne: [{ $dayOfYear: { $dateFromParts: {isoWeekYear: { $ceil: 93226 },minute: { $ln: '$obj.num' },millisecond: { $log10: '$num' },timezone: "Antarctica/Mawson"} } },{ $arrayElemAt: [[],72453] }] }} }} }}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $toDate: { $arrayElemAt: [[{ $toLower: "Rapids Arizona FTP" },{ $ltrim: { input: '$str' } }],55041] } },format: "%M-%j-%M-%L-%V-%V-%G-%H-%L-%Z-%%",timezone: "America/Costa_Rica",onNull: { $reverseArray: [['$num']] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str'],as: 'jude',cond: { $not: [{ $arrayToObject: [[{k: "navigate exuding application",v: '$$jude'},{k: "District generating Representative",v: false},{k: "Tasty Fresh Bacon",v: "Polarised Kuwaiti Dinar"}]] }] }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',7,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["monitoring",'$obj.obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T02:53:48.174Z",onError: { $trim: {input: '$obj.obj.str',chars: "Cayman Islands Dollar"} }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],['$obj.obj.obj.str','$obj.obj.obj.str',{ $rtrim: {input: "generate",chars: '$obj.obj.str'} }],[69184,69904]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToParts: { date: { $hour: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T12:46:20.241Z",format: "%z-%S-%z-%V",timezone: "Asia/Pyongyang",onError: { $arrayElemAt: [[{ $substr: [{ $dateToString: {date: '$obj.obj.date',onNull: { $arrayToObject: [[{k: "conglomeration Quality wireless",v: true}]] }} },1,3] }],'$obj.obj.obj.num'] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoDayOfWeek: { $dateToString: {date: '$obj.date',format: "%u-%j-%L-%Z-%u-%V-%L",timezone: "Europe/Andorra"} } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $rtrim: {input: '$obj.str',chars: "Soft French Polynesia"} },5,0] }, _id: 0}}],

        [{$project: {a: { $week: { $minute: { $isoDayOfWeek: '$obj.obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $zip: {inputs: [['$obj.obj.str',"transmitting Toys"]],useLongestLength: false,defaults: [[],{ num: 59867 }]} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.obj.obj.str',{ $toString: { $toLower: { $toUpper: '$obj.obj.obj.str' } } },{ $substrCP: ["synthesize SMTP invoice",0,9] }],[],["Supervisor"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Illinois Synergized payment",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $dateToString: {date: new Date("2018-09-05T23:17:05.232Z"),timezone: "America/La_Paz"} } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoDayOfWeek: { $toDate: { $dateToParts: {date: { $dateToString: {date: { $year: new Date("2018-09-06T19:15:38.963Z") },onNull: { $arrayToObject: [[{k: "HDD action-items Walks",v: '$obj.obj.obj.num'}]] }} },timezone: "Europe/Saratov"} } } } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $substrCP: ['$obj.obj.str',13,14] },13,10] }, _id: 0}}],

        [{$project: {a: { $second: { $week: { $minute: { $toDate: { $isoWeekYear: { $month: { $dateFromString: {dateString: "2018-09-05T23:25:35.787Z",timezone: "Europe/Rome",onError: { $rtrim: {input: "grey Manager",chars: '$obj.obj.obj.obj.str'} }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $zip: {inputs: [[],[72190,56229]],useLongestLength: false,defaults: [{},[9762,true]]} } }, _id: 0}}],

        [{$project: {a: { $range: [19,5,19] }, _id: 0}}],

        [{$project: {a: { $toDate: { $substrCP: ['$obj.str',3,3] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"North Carolina","navigate"],'$num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Bedfordshire",v: 70766}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'eliezer',in: { $sqrt: 17800 }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.num'],in: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: '$str' } },'$str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substr: ['$str',13,14] } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $objectToArray: '$obj.obj' } }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toLower: { $rtrim: {input: '$str',chars: '$obj.str'} } },{ $toString: { $arrayElemAt: [[],56845] } }],as: 'hope',in: { $ceil: '$num' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.date',false],[{ $toLower: "Turnpike" },'$str'],['$obj.num',35407],[],["override blue Customizable","Idaho scale"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num','$obj.obj.num',19379],[],[{ $trim: {input: "virtual Licensed Frozen Car",chars: { $dateToString: {date: '$obj.date',timezone: "Asia/Kashgar",onNull: { $dateFromParts: {isoWeekYear: { $exp: '$num' },minute: { $indexOfArray: [{ $reverseArray: [['$obj.obj.str','$str','$obj.obj.obj.str']] },{ $arrayElemAt: [[],66242] },18] },second: { $mod: [18481,17436] }} }} }} }],[],["Rustic Plastic Mouse flexibility Sleek",{ $substrCP: ["matrix enhance",5,16] }],['$obj.str',"Sleek compressing",{ $concat: [{ $dateToString: {date: { $toDate: { $substrCP: ['$obj.obj.str',1,5] } },format: "%G-%d-%Z-%L-%Z-%j-%m-%m"} }] },"Web reboot"],['$obj.obj.obj.str','$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ['$obj.obj.str',9,4] }],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [0,20] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfYear: { $second: { $minute: { $month: { $hour: { $millesecond: { $toDate: { $zip: {inputs: [[]],useLongestLength: false,defaults: [12605]} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $millesecond: { $second: { $year: { $dateToString: {date: new Date("2018-09-06T03:04:21.512Z"),format: "%j-%S-%U-%L",timezone: "Asia/Seoul"} } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $ltrim: {input: "application",chars: '$str'} } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'donna',cond: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],['$obj.obj.obj.str','$obj.str',"Maine Frozen"],[],[45047,'$obj.obj.num','$obj.obj.num','$obj.obj.num'],[{ $concat: [{ $substrBytes: ['$obj.obj.str',19,20] },"generating magenta"] }],[{ $toUpper: "Developer" }],[]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeekYear: { $dayOfMonth: { $isoWeekYear: { $toDate: { $arrayElemAt: [[{ $toString: { $arrayElemAt: [[47160,{ $exp: 50385 }],'$num'] } }],'$obj.num'] } } } } } }, _id: 0}}],

        [{$project: {a: { $substr: ["Brand",2,13] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Bridge"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'linda',cond: { $lt: [{ $month: { $isoWeek: { $hour: { $month: { $isoWeekYear: { $dateToString: {date: { $dateFromString: { dateString: "2018-09-06T16:19:02.731Z" } },format: "%G-%L-%S-%V-%Y",onNull: { $ltrim: { input: "Persistent Quality Graphic Interface" } }} } } } } } },{ $arrayElemAt: [['$obj.obj.obj.str'],84547] }] }} }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toUpper: "Gorgeous" },8,2] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["generate Paraguay"],["Internal Intelligent",{ $trim: { input: '$obj.obj.str' } }],["Small Concrete Bike"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrBytes: ['$obj.str',2,15] }],as: 'duncan',in: { $abs: 78451 }} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $year: { $dateToString: {date: { $dateToParts: { date: { $dateToParts: {date: { $second: { $isoWeekYear: { $millesecond: { $dateFromParts: {year: { $floor: '$obj.obj.num' },month: { $size: [['$obj.obj.str',"Savings Account Berkshire"]] },hour: { $log10: 55743 },second: { $multiply: ['$num',57155] },timezone: "Africa/Maputo"} } } } },iso8601: true} } } },timezone: "Asia/Famagusta"} } } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substrBytes: ["hack Greenland Auto Loan Account",6,1] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[87766],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],['$obj.obj.str'],[],[{ $rtrim: {input: "Fresh",chars: "bluetooth Costa Rica"} }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.str',"programming e-services recontextualize"]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$str']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',7,17] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Industrial system Tasty Concrete Table" } }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Towels front-end" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["Expressway Rwanda Franc Florida",14,0] }],46095] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: "Associate" },'$obj.obj.obj.obj.str'],[8808,'$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $range: [16,8,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Borders SSL",v: 71476},{k: "support",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $minute: { $dayOfWeek: { $dateToString: {date: '$obj.obj.date',timezone: "Asia/Pyongyang"} } } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.obj.str',17,9] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["cross-platform Granite online",12,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transmitter invoice AI",v: { $trim: { input: "Virginia" } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "XSS Chair" },'$obj.obj.obj.obj.str',"Handcrafted Soft Keyboard"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Handmade Concrete Shoes",3,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromParts: {isoWeekYear: { $pow: [67775,'$obj.obj.num'] },hour: { $ceil: 43565 },minute: { $floor: '$num' },millisecond: { $multiply: [] }} } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfWeek: { $dateToParts: {date: { $week: { $month: { $isoWeekYear: { $dateToString: {date: '$obj.obj.obj.date',format: "%m-%M-%w-%M-%Z-%L-%m-%U-%M-%M-%H-%U"} } } } },timezone: "Africa/Bujumbura"} } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[],['$obj.obj.obj.str',{ $toUpper: { $rtrim: {input: { $substrBytes: ["Central",0,20] },chars: "RAM SQL superstructure"} } }],['$obj.obj.str','$obj.str']]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $isoDayOfWeek: { $dayOfMonth: { $minute: new Date("2018-09-06T05:35:45.569Z") } } },timezone: "Canada/Mountain",onNull: "Bedfordshire"} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["input Officer"]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.obj.str','$obj.str'],[],["Keyboard Practical transition"],['$obj.obj.obj.num',8862],[]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $concat: ["International hub synthesize",{ $toString: { $ltrim: {input: "District Garden",chars: '$obj.obj.str'} } },'$obj.str'] },"Open-source Ergonomic",{ $dateToString: {date: '$obj.obj.date',timezone: "Europe/Oslo"} }],in: { $floor: 51005 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[62349,{ $multiply: [46342] }],["gold",{ $ltrim: {input: '$obj.obj.obj.str',chars: "magenta"} }],[],[41006,'$obj.num',13207,'$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $dateToString: {date: { $dateToParts: {date: { $dayOfMonth: { $year: '$obj.date' } },timezone: "America/Indiana/Vevay"} },timezone: "Africa/Conakry",onNull: { $arrayElemAt: [[],'$num'] }} },'$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["invoice rich Sports"]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toLower: { $concat: ["Illinois Knolls Optimization",'$obj.obj.obj.str',{ $toString: { $arrayElemAt: [[71292,55326],'$num'] } }] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[],[84652]]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoDayOfWeek: { $year: { $dateFromString: {dateString: "2018-09-06T19:26:17.703Z",format: "%M-%Z-%u-%L-%w-%L-%L-%w"} } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

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
