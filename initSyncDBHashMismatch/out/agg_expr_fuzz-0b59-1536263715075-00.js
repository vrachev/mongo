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
        return coll.insert({_id: 0,str: "real-time installation out-of-the-box",num: 56970,date: new Date("2018-09-05T23:51:44.479Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1,num: 37752,date: new Date("2018-09-06T08:54:21.198Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2,date: new Date("2018-09-06T08:54:50.378Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3,str: "Rustic Outdoors",num: 95480,date: new Date("2018-09-06T08:28:37.178Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4,str: "Ergonomic Frozen Towels",num: 24544,date: new Date("2018-09-06T03:33:33.427Z"),array: [5645,90468,{_id: 5,num: 45228,date: new Date("2018-09-06T04:28:32.922Z"),array: [new Date("2018-09-06T02:44:15.506Z"),{_id: 6,str: "Louisiana Frozen",num: 85123,array: []},new Date("2018-09-06T15:39:35.060Z")],obj: {}},"Pula","Florida",new Date("2018-09-06T15:32:31.052Z"),new Date("2018-09-05T20:02:38.309Z"),"back-end",25970,84435],obj: {_id: 7,str: "end-to-end",date: new Date("2018-09-06T06:57:21.605Z"),obj: {_id: 8,str: "New Jersey Direct",num: 35160,date: new Date("2018-09-06T01:52:38.766Z"),array: [["Mississippi Borders",[],"ROI",new Date("2018-09-06T05:18:20.672Z"),[],59563]],obj: {_id: 9,str: "Ball Checking Account",date: new Date("2018-09-06T09:08:02.418Z"),array: [new Date("2018-09-06T12:34:47.748Z"),[],{_id: 10,str: "Checking Account Ford",num: 27821,date: new Date("2018-09-06T11:59:55.376Z"),obj: {}}]}}}});
    },

    function(coll) {
        return coll.insert({_id: 11,str: "Orchestrator",num: 55564,date: new Date("2018-09-05T22:03:33.304Z"),array: [],obj: {_id: 12,str: "Creative Intelligent",num: 20647,date: new Date("2018-09-06T17:19:05.007Z"),array: [83403,{_id: 13,str: "Division next generation",date: new Date("2018-09-06T09:22:37.294Z"),obj: {_id: 14,str: "Configuration",num: 92240,date: new Date("2018-09-06T02:05:09.239Z"),obj: {_id: 15,str: "Direct Yemen",array: [],obj: {}}}},58936,new Date("2018-09-05T21:30:19.129Z"),"Wooden radical Paraguay",49885,new Date("2018-09-06T09:01:36.838Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16,num: 83595,date: new Date("2018-09-06T10:29:43.798Z"),array: ["Home Loan Account Grocery Colombian Peso Unidad de Valor Real",new Date("2018-09-06T03:37:39.942Z"),new Date("2018-09-06T05:47:06.757Z"),4290,40146,[]],obj: {_id: 17,str: "clicks-and-mortar Turkey transmitter",num: 9913,date: new Date("2018-09-06T08:17:33.020Z"),array: [],obj: {_id: 18,str: "Common",num: 88234,date: new Date("2018-09-06T09:25:09.297Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19,str: "Gloves Savings Account",num: 65134,array: [new Date("2018-09-06T16:08:39.141Z"),79161,"Small",54815,8598,{_id: 20,str: "Zimbabwe Dollar",num: 11127,date: new Date("2018-09-06T12:53:35.077Z"),array: [{_id: 21,str: "indexing hard drive National",num: 22254,date: new Date("2018-09-06T00:25:19.499Z"),array: [],obj: {_id: 22,num: 52240,date: new Date("2018-09-06T04:25:25.960Z"),obj: {_id: 23,str: "Rand Loti",date: new Date("2018-09-06T06:36:33.919Z"),obj: {}}}},new Date("2018-09-06T00:42:07.403Z"),new Date("2018-09-06T17:51:59.299Z"),"Trail Rustic Iowa"]},[],new Date("2018-09-05T22:28:29.704Z"),new Date("2018-09-06T02:48:40.911Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24,str: "neural system",num: 67676,date: new Date("2018-09-06T19:07:51.141Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25,str: "Summit needs-based",num: 80017,date: new Date("2018-09-06T02:42:08.224Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 26,str: "Personal Loan Account",date: new Date("2018-09-05T21:43:04.891Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27,str: "Borders dedicated collaborative",num: 62918,date: new Date("2018-09-05T20:57:57.811Z"),array: [],obj: {_id: 28,str: "mesh Crossroad",num: 40812,date: new Date("2018-09-06T10:10:49.733Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29,str: "Netherlands Antillian Guilder",num: 65599,date: new Date("2018-09-05T20:51:56.746Z"),array: [new Date("2018-09-06T05:31:59.185Z"),"Program Unbranded Circle",95077,72233,{_id: 30,num: 42706,obj: {}},new Date("2018-09-06T11:38:39.022Z"),"Hat",{_id: 31,str: "Steel",date: new Date("2018-09-06T14:28:43.846Z"),array: [[new Date("2018-09-06T03:08:22.452Z"),19972],"Garden"]},[],[],92634,[]],obj: {_id: 32,str: "seize Infrastructure",num: 54278,date: new Date("2018-09-06T07:35:58.450Z"),array: [new Date("2018-09-06T18:00:00.176Z"),new Date("2018-09-06T10:25:32.173Z"),[]],obj: {_id: 33,str: "streamline",array: ["Kuwait Shoes","Cotton frictionless"],obj: {_id: 34,num: 47102,date: new Date("2018-09-06T19:30:09.145Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 35,str: "Principal",num: 2758,date: new Date("2018-09-05T22:17:05.394Z"),array: [91126,["multi-tasking toolset invoice"],new Date("2018-09-06T15:39:05.592Z"),new Date("2018-09-05T20:39:42.245Z"),{_id: 36,str: "end-to-end Forest orchid",num: 46296,date: new Date("2018-09-06T17:46:09.319Z"),obj: {_id: 37,str: "Parkway Generic Soft Hat channels",array: [],obj: {}}},90126,new Date("2018-09-06T15:10:37.773Z"),"tan Concrete",31745,"Officer Chips Intelligent",new Date("2018-09-06T14:53:47.155Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 38,str: "Table indigo",num: 37012,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 39,str: "aggregate optimize Marketing",num: 8515,date: new Date("2018-09-06T06:36:31.290Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 40,str: "Extensions payment granular",num: 47319,date: new Date("2018-09-06T19:03:32.036Z"),array: [new Date("2018-09-06T11:17:30.533Z"),{_id: 41,str: "XSS Pizza 24 hour",date: new Date("2018-09-06T00:19:40.624Z"),array: [],obj: {_id: 42,num: 91892}},new Date("2018-09-06T15:06:58.728Z"),88606,new Date("2018-09-06T02:02:25.383Z"),"Small Plastic Table",86882,"Mews Investment Account RSS",new Date("2018-09-06T16:39:22.748Z"),"International Keys Designer",41746],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 43,str: "Cote d'Ivoire",num: 38280,date: new Date("2018-09-06T00:02:13.866Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 44,str: "deposit Advanced",num: 23153,date: new Date("2018-09-06T16:28:57.668Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 45,num: 81298,date: new Date("2018-09-06T19:24:09.295Z"),array: [],obj: {_id: 46,num: 59938,date: new Date("2018-09-06T01:43:10.127Z"),array: [{_id: 47,str: "Kwanza Avon",obj: {}},["Buckinghamshire withdrawal Liaison",21845,{_id: 48,str: "Beauty Street intuitive",num: 4089,date: new Date("2018-09-06T01:32:46.053Z"),array: [new Date("2018-09-06T09:05:58.468Z"),new Date("2018-09-06T06:20:47.692Z")],obj: {_id: 49,str: "monitor Personal Loan Account",num: 52440,array: [],obj: {}}}],18177,new Date("2018-09-06T19:14:31.819Z"),"revolutionize invoice",39587,new Date("2018-09-06T19:37:51.637Z"),21367,"Virtual Chicken","harness",{_id: 50,str: "California analyzing Implementation",num: 33788,date: new Date("2018-09-05T20:28:39.311Z"),array: [],obj: {_id: 51,str: "Gorgeous Gardens",date: new Date("2018-09-06T06:58:07.385Z"),array: ["technologies Plaza Refined"]}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 52,str: "De-engineered Books",num: 1662,date: new Date("2018-09-06T09:58:11.023Z"),array: [65282,"Pine",new Date("2018-09-05T22:26:32.969Z"),new Date("2018-09-06T02:29:07.624Z"),80055,new Date("2018-09-06T05:36:39.464Z"),"regional",[],new Date("2018-09-06T12:33:01.095Z"),[[],{_id: 53,str: "Intelligent Fresh Towels interactive",num: 58433,array: ["Plastic",[47160,new Date("2018-09-06T08:59:59.312Z"),{_id: 54,str: "Grenada",num: 53113,date: new Date("2018-09-06T02:44:20.862Z"),array: [],obj: {}},32149]]},"Refined auxiliary National","port synergize"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 55,str: "payment Lead",num: 71900,date: new Date("2018-09-06T11:59:54.080Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 56,str: "cutting-edge Vietnam",num: 26889,date: new Date("2018-09-05T22:44:07.434Z"),array: [],obj: {_id: 57,str: "Incredible Soft Shoes Club",num: 62417,date: new Date("2018-09-06T04:15:59.717Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 58,str: "Global Nicaragua Music",num: 24079,date: new Date("2018-09-06T01:02:58.185Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 59,str: "Kentucky disintermediate Reduced",date: new Date("2018-09-06T12:32:21.725Z"),array: [],obj: {_id: 60,str: "content firewall",num: 98320,date: new Date("2018-09-06T14:48:15.727Z"),array: ["Ergonomic",37206,new Date("2018-09-06T06:22:54.284Z"),18370,[],{_id: 61,str: "Synergized Metal",date: new Date("2018-09-06T11:55:54.655Z"),array: [29806],obj: {_id: 62,date: new Date("2018-09-05T20:41:06.997Z")}},94435,["driver Virgin Islands, U.S.","Frozen reintermediate"],"orchestration Dynamic Albania",{_id: 63,str: "Turkmenistan",num: 30620,date: new Date("2018-09-06T06:38:15.806Z"),array: [new Date("2018-09-06T01:48:16.859Z"),new Date("2018-09-06T11:50:37.903Z"),15878,new Date("2018-09-06T03:12:31.069Z"),[]],obj: {}},"USB",new Date("2018-09-06T15:20:02.104Z")],obj: {_id: 64,str: "Communications array",num: 55147,array: [],obj: {_id: 65,str: "synthesizing Generic Cotton Ball Auto Loan Account",num: 395,array: [{_id: 66,num: 7675,date: new Date("2018-09-06T09:50:50.453Z"),obj: {_id: 67,date: new Date("2018-09-06T18:14:05.491Z")}}]}}}});
    },

    function(coll) {
        return coll.insert({_id: 68,str: "unleash success monitor",num: 37209,date: new Date("2018-09-06T05:35:43.548Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 69,str: "synthesize transmitting",date: new Date("2018-09-06T12:48:56.714Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 70,str: "Directives",num: 93462,date: new Date("2018-09-06T09:31:58.642Z"),array: [new Date("2018-09-06T18:13:06.186Z"),"Tools",36507,[],new Date("2018-09-06T18:04:24.029Z"),{_id: 71,str: "Practical Fresh Table SAS",num: 91499,date: new Date("2018-09-06T15:56:25.081Z"),array: [],obj: {_id: 72,str: "product",date: new Date("2018-09-05T22:46:23.350Z"),array: []}},70475,new Date("2018-09-06T16:03:08.804Z"),{_id: 73,str: "withdrawal Buckinghamshire",num: 81635,array: [new Date("2018-09-06T12:46:22.852Z")],obj: {}},8329,"Car Future"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 74,str: "index",num: 37409,date: new Date("2018-09-06T10:33:59.250Z"),array: [new Date("2018-09-06T00:39:44.339Z"),37622,new Date("2018-09-06T05:58:52.225Z"),[],14283,"Idaho port Legacy","calculate Architect","Associate models",{_id: 75,str: "tan Australia",date: new Date("2018-09-06T17:46:30.016Z"),array: [new Date("2018-09-06T04:56:49.691Z"),13323],obj: {}},[],{_id: 76,str: "reintermediate Auto Loan Account programming",num: 74106,date: new Date("2018-09-06T06:54:16.298Z"),array: [],obj: {_id: 77,num: 33172,date: new Date("2018-09-05T20:21:28.301Z"),obj: {_id: 78,str: "back-end Sleek",num: 32343,date: new Date("2018-09-06T11:22:19.149Z"),array: [new Date("2018-09-06T03:59:10.403Z"),"Liaison parse",{_id: 79,str: "visualize",num: 52529,date: new Date("2018-09-05T20:18:46.170Z"),array: [[],"partnerships"],obj: {}},"Papua New Guinea"]}}},5281],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 80,str: "Borders",num: 7115,date: new Date("2018-09-06T09:04:26.648Z"),array: ["unleash Plaza navigate",new Date("2018-09-06T05:04:03.498Z"),"Cook Islands Small ADP",46555,9872,"withdrawal Internal",88369,new Date("2018-09-05T21:41:13.008Z"),new Date("2018-09-06T13:25:04.242Z"),{_id: 81,str: "Integrated",num: 97899,date: new Date("2018-09-06T14:58:59.128Z"),array: [],obj: {}},{_id: 82,num: 29047,date: new Date("2018-09-06T06:35:40.481Z"),array: []},[]],obj: {_id: 83,str: "HDD Russian Ruble",num: 69656,date: new Date("2018-09-06T16:17:36.512Z"),array: [{_id: 84,str: "deposit withdrawal Ford",date: new Date("2018-09-06T00:22:11.862Z"),obj: {_id: 85,date: new Date("2018-09-06T17:05:06.130Z"),array: [],obj: {_id: 86,str: "Granite invoice",num: 2811,array: [new Date("2018-09-06T08:43:52.878Z")],obj: {}}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 87,str: "Home end-to-end systems",num: 17992,date: new Date("2018-09-05T22:36:24.092Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 88,str: "invoice",num: 89729,array: [],obj: {_id: 89,num: 36497,date: new Date("2018-09-06T11:37:16.522Z"),array: ["Tala","withdrawal",70299,new Date("2018-09-06T12:27:20.156Z"),[[],new Date("2018-09-05T23:22:46.219Z"),19467,[{_id: 90,str: "Vision-oriented Garden",date: new Date("2018-09-06T02:23:39.020Z")},"Virtual",{_id: 91,str: "application",num: 44147,date: new Date("2018-09-05T23:45:05.763Z"),array: [],obj: {}}],23599,"Keyboard empowering Illinois",new Date("2018-09-06T12:36:25.242Z")]],obj: {_id: 92,str: "installation Checking Account",array: [{_id: 93,str: "partnerships Wooden Buckinghamshire",num: 77410,date: new Date("2018-09-05T23:01:52.181Z"),array: [],obj: {_id: 94,num: 38388,date: new Date("2018-09-05T22:24:38.419Z"),obj: {}}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 95,str: "Re-engineered",num: 8475,date: new Date("2018-09-06T04:47:41.204Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 96,str: "hack",num: 28656,date: new Date("2018-09-06T03:30:24.964Z"),array: ["hard drive",28824,"content payment","open architecture Berkshire mint green",new Date("2018-09-06T07:04:23.993Z"),[52367,{_id: 97,str: "Multi-layered",num: 48249,date: new Date("2018-09-06T14:05:02.704Z"),array: [],obj: {_id: 98,str: "Indiana Lead",num: 71033,date: new Date("2018-09-06T16:32:46.311Z"),obj: {}}},56835,"multimedia"],new Date("2018-09-05T21:54:04.516Z"),[],new Date("2018-09-06T07:39:31.102Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 99,str: "hacking De-engineered",num: 31,date: new Date("2018-09-06T12:29:13.711Z"),array: [10576,new Date("2018-09-05T21:29:34.499Z"),new Date("2018-09-06T09:43:07.877Z"),"Grass-roots Investment Account",{_id: 100,str: "monitor transmitting",num: 20453,date: new Date("2018-09-06T18:27:35.502Z"),array: [],obj: {_id: 101,str: "Accountability",num: 86123,date: new Date("2018-09-06T15:01:04.214Z"),obj: {}}},73164,[],"Steel Small Frozen Tuna",[new Date("2018-09-06T14:21:28.481Z"),{_id: 102,num: 15643,array: [],obj: {}},86167,26312,"overriding generate",["Seamless",new Date("2018-09-05T20:14:11.937Z")]],81539,new Date("2018-09-06T17:39:05.592Z")]});
    },

    function(coll) {
        return coll.insert({_id: 103,str: "green",num: 87795,date: new Date("2018-09-06T13:21:44.386Z"),array: [],obj: {_id: 104,str: "Industrial HTTP technologies",date: new Date("2018-09-06T07:47:31.321Z"),array: [75294,new Date("2018-09-05T20:40:07.041Z"),[],"context-sensitive override","Pizza e-commerce SQL",new Date("2018-09-05T22:39:39.650Z"),new Date("2018-09-06T09:06:38.655Z"),{_id: 105,str: "Argentine Peso Toys",num: 73440,date: new Date("2018-09-06T14:15:55.695Z"),array: [16046,new Date("2018-09-06T02:22:10.407Z"),{_id: 106,str: "CFP Franc Licensed",num: 35909,date: new Date("2018-09-05T21:54:40.110Z"),obj: {}},"interfaces"],obj: {}},77762,"Mouse interactive Investor"],obj: {_id: 107,str: "Shoes Jewelery Handcrafted",num: 82691,array: [],obj: {_id: 108,num: 77936,date: new Date("2018-09-06T12:02:54.574Z"),array: [["models Switzerland application"],40240]}}}});
    },

    function(coll) {
        return coll.insert({_id: 109,str: "bi-directional Bedfordshire",num: 26555,date: new Date("2018-09-06T10:18:11.038Z"),array: [82972,[],new Date("2018-09-06T12:13:25.083Z"),34763,"e-markets Louisiana Legacy",new Date("2018-09-06T00:15:59.304Z"),{_id: 110,num: 65020,date: new Date("2018-09-06T13:40:26.663Z"),array: [],obj: {}},"Personal Loan Account metrics",{_id: 111,str: "Vision-oriented reboot Avon",num: 86629,date: new Date("2018-09-06T07:37:50.450Z"),obj: {}},32722,"optimal communities hard drive",new Date("2018-09-06T09:27:31.995Z")],obj: {_id: 112,str: "Plastic Liechtenstein",array: [{_id: 113,date: new Date("2018-09-06T07:17:14.301Z"),array: []},23955]}});
    },

    function(coll) {
        return coll.insert({_id: 114,str: "Auto Loan Account Right-sized",num: 63684,date: new Date("2018-09-06T00:05:38.643Z"),array: [],obj: {_id: 115,str: "Hat Incredible EXE",date: new Date("2018-09-05T23:47:26.380Z"),array: [new Date("2018-09-05T23:56:02.663Z"),new Date("2018-09-05T23:08:06.120Z"),new Date("2018-09-06T09:45:21.746Z"),"Avon Spurs","mission-critical Corporate Integrated",39454,[new Date("2018-09-06T08:23:59.597Z"),new Date("2018-09-05T21:04:00.671Z"),{_id: 116,str: "Refined Granite Mouse",num: 31021,date: new Date("2018-09-06T05:59:57.713Z"),array: ["Dynamic Administrator methodology",72690,44542,new Date("2018-09-06T15:54:16.945Z")],obj: {}}],90067,"Russian Ruble",{_id: 117,num: 74005,array: [64036],obj: {_id: 118,str: "Officer",num: 76556,obj: {_id: 119,num: 63568,array: []}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 120,str: "transmit Assistant Small",num: 60325,date: new Date("2018-09-05T21:13:14.752Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 121,num: 72332,date: new Date("2018-09-05T20:03:08.798Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 122,str: "Tennessee compelling users",num: 10418,date: new Date("2018-09-06T15:30:54.688Z"),array: [21547,[],new Date("2018-09-06T14:24:53.865Z"),"infrastructures",16099,"payment",new Date("2018-09-06T18:00:16.931Z"),"European Unit of Account 17(E.U.A.-17) SMTP white",58739,{_id: 123,str: "deposit Antarctica (the territory South of 60 deg S)",num: 54304,date: new Date("2018-09-06T02:50:15.247Z"),array: [],obj: {_id: 124,str: "deposit",date: new Date("2018-09-06T02:42:27.966Z"),array: [86232,new Date("2018-09-06T11:26:55.217Z")]}},[],[]]});
    },

    function(coll) {
        return coll.insert({_id: 125,str: "Sausages Shoes",num: 73416,array: [],obj: {_id: 126,str: "client-server",num: 45350,date: new Date("2018-09-06T08:53:22.146Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 127,str: "Checking Account",num: 52718,date: new Date("2018-09-06T18:45:21.645Z"),array: [69008,new Date("2018-09-06T10:10:55.692Z"),"web-enabled Soft",17886,new Date("2018-09-06T07:04:39.973Z"),"feed deposit incubate","Graphic Interface adapter",{_id: 128,num: 17569,date: new Date("2018-09-05T22:24:12.250Z"),array: [41751,"Movies"],obj: {}},new Date("2018-09-06T19:41:18.006Z"),{_id: 129,str: "Baby matrix",array: [],obj: {}},[],new Date("2018-09-06T09:34:36.569Z")],obj: {_id: 130,str: "Director",num: 56928,date: new Date("2018-09-06T03:31:33.279Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 131,str: "Cheese",num: 48535,date: new Date("2018-09-06T03:04:53.570Z"),array: [new Date("2018-09-06T08:34:00.537Z"),81064,"heuristic",{_id: 132,str: "Computer clicks-and-mortar",num: 95033,date: new Date("2018-09-06T04:31:19.391Z"),array: [],obj: {}},"Home Loan Account","leading edge Markets COM",18360,{_id: 133,num: 24448,date: new Date("2018-09-06T19:08:04.533Z"),array: [],obj: {}},"Illinois cultivate parse",37816,"seize Wooden",new Date("2018-09-06T13:59:58.577Z")],obj: {_id: 134,str: "Kiribati efficient Personal Loan Account",num: 93335,date: new Date("2018-09-05T20:16:10.085Z")}});
    },

    function(coll) {
        return coll.insert({_id: 135,str: "e-services multi-byte",num: 56857,date: new Date("2018-09-06T16:35:22.325Z"),array: [97191,56980,"Comoro Franc dynamic",73211,new Date("2018-09-06T11:46:35.170Z"),{_id: 136,num: 72949,date: new Date("2018-09-05T20:19:22.220Z"),array: [],obj: {_id: 137,num: 60925,date: new Date("2018-09-06T10:12:34.044Z"),obj: {}}},"quantifying Soap",[{_id: 138,str: "1080p Fresh",num: 1872,date: new Date("2018-09-06T14:37:42.927Z"),array: [],obj: {}},new Date("2018-09-06T08:56:45.378Z"),"Buckinghamshire",68024],new Date("2018-09-05T21:05:17.887Z"),40957,"Auto Loan Account Awesome"],obj: {_id: 139,str: "capacitor infrastructures"}});
    },

    function(coll) {
        return coll.insert({_id: 140,str: "Executive Ball",num: 70541,date: new Date("2018-09-06T13:30:15.255Z"),array: [[],"Car fuchsia Bermudian Dollar (customarily known as Bermuda Dollar)",new Date("2018-09-05T23:41:06.581Z"),81654,{_id: 141,str: "framework",num: 39228,date: new Date("2018-09-06T18:09:16.464Z"),array: [],obj: {_id: 142,str: "hacking",num: 44562,date: new Date("2018-09-06T14:15:12.842Z"),array: []}},"structure Global Strategist",84035,new Date("2018-09-05T21:42:05.597Z"),14797,"ubiquitous",25997,new Date("2018-09-06T00:14:20.909Z")],obj: {_id: 143,array: [["Crossroad",new Date("2018-09-05T20:00:32.816Z")]],obj: {_id: 144,str: "red synergies Consultant",num: 39960,date: new Date("2018-09-05T21:48:14.830Z"),array: [{_id: 145,date: new Date("2018-09-06T02:18:21.184Z"),array: [],obj: {}},new Date("2018-09-06T13:27:07.742Z"),new Date("2018-09-06T14:55:29.810Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 146,str: "Checking Account",num: 91630,date: new Date("2018-09-06T08:55:24.706Z"),array: [new Date("2018-09-05T23:59:07.926Z"),[],95622,"Directives multi-byte",48180,new Date("2018-09-05T21:22:35.361Z"),77133,"open architecture",new Date("2018-09-06T15:53:11.152Z"),"revolutionary","virtual deposit",[]],obj: {_id: 147,str: "Virgin Islands, British Multi-layered Bahraini Dinar",num: 59527,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 148,str: "Tasty Cotton Bike Bedfordshire Intelligent",num: 90564,date: new Date("2018-09-06T18:39:23.570Z"),array: [new Date("2018-09-06T10:19:04.159Z"),new Date("2018-09-06T16:52:46.960Z"),88653,"payment auxiliary indigo","monitor",new Date("2018-09-06T17:41:02.192Z"),new Date("2018-09-06T10:54:25.339Z"),[],"International"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 149,str: "content system engine",num: 36790,date: new Date("2018-09-06T17:45:06.742Z"),array: [87351,new Date("2018-09-06T03:32:12.466Z"),"Puerto Rico Bahrain",new Date("2018-09-05T21:33:24.397Z"),"North Carolina","Cambridgeshire",[new Date("2018-09-06T05:34:19.334Z")],2425,new Date("2018-09-06T13:56:30.660Z"),[],{_id: 150,str: "wireless mobile",num: 65456,array: [87005],obj: {}},{_id: 151,str: "Money Market Account Orchestrator Shirt",num: 39633,date: new Date("2018-09-05T20:46:32.332Z"),obj: {_id: 152,str: "bluetooth",array: [],obj: {_id: 153,num: 42845,date: new Date("2018-09-06T16:28:14.601Z"),obj: {_id: 154,str: "strategic",num: 11540,obj: {_id: 155,str: "overriding",date: new Date("2018-09-06T01:31:07.000Z"),array: []}}}}},55451,new Date("2018-09-06T01:16:31.559Z")]});
    },

    function(coll) {
        return coll.insert({_id: 156,str: "quantifying program Integrated",num: 73561,date: new Date("2018-09-06T14:03:07.920Z"),array: [26971,"knowledge base",[],new Date("2018-09-06T06:51:12.611Z"),42064,[],new Date("2018-09-06T06:46:08.388Z"),"Handmade Wooden Mouse alarm","protocol",83174,{_id: 157,num: 64332,date: new Date("2018-09-06T04:44:16.985Z"),obj: {}}],obj: {_id: 158,str: "Bedfordshire XML Maryland",num: 22740,array: [{_id: 159,str: "Buckinghamshire didactic Australian Dollar",num: 21876,array: []},new Date("2018-09-06T05:58:34.057Z"),46793,new Date("2018-09-06T07:13:16.493Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 160,str: "synergize",num: 43116,date: new Date("2018-09-06T12:54:46.656Z"),array: [60165,"Haven",new Date("2018-09-06T05:57:40.223Z"),new Date("2018-09-06T11:03:52.568Z"),"non-volatile Generic",12816,[new Date("2018-09-06T04:19:25.100Z"),26935],{_id: 161,str: "Senior cyan Intelligent",num: 81560,date: new Date("2018-09-06T06:19:18.833Z"),array: [],obj: {_id: 162,str: "initiatives approach Hat",num: 28180,date: new Date("2018-09-05T23:57:48.897Z"),array: [{_id: 163,num: 78212,date: new Date("2018-09-06T00:34:59.831Z"),obj: {}},81458,"Fresh incentivize"],obj: {}}},"Product generate Stravenue",69277,new Date("2018-09-06T19:21:15.474Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 164,str: "Executive Senior",num: 69016,date: new Date("2018-09-06T03:30:26.443Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 165,str: "neural",date: new Date("2018-09-06T04:34:50.665Z"),array: [new Date("2018-09-06T07:10:41.803Z"),48388,2032,"Oklahoma Metrics",54450,{_id: 166,str: "Credit Card Account programming paradigms",num: 14633,date: new Date("2018-09-06T10:12:47.716Z"),array: [new Date("2018-09-06T12:51:20.492Z")],obj: {}},"Metal multi-state","deliver",[],[],["Gloves navigate Loop",22945,new Date("2018-09-06T15:39:38.567Z"),new Date("2018-09-06T05:19:57.177Z")]],obj: {_id: 167,num: 12722,date: new Date("2018-09-06T16:37:06.156Z"),array: [new Date("2018-09-06T07:24:17.210Z"),{_id: 168,num: 53183,array: []}],obj: {_id: 169,str: "Cotton",date: new Date("2018-09-06T15:52:20.912Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 170,str: "mindshare FTP online",num: 7440,date: new Date("2018-09-06T01:24:11.880Z"),array: [new Date("2018-09-05T21:04:12.076Z"),"indexing",18711,[],"green Principal invoice",new Date("2018-09-06T10:25:35.686Z"),{_id: 171,str: "Cambridgeshire Pants",num: 89073,date: new Date("2018-09-06T06:37:13.540Z"),array: [18501],obj: {_id: 172,num: 5470,date: new Date("2018-09-06T07:44:22.803Z"),obj: {}}},"Junctions quantify Washington",34230,42955,new Date("2018-09-06T04:14:12.212Z"),"redefine",new Date("2018-09-05T22:43:00.279Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 173,str: "Ergonomic bleeding-edge",num: 96307,date: new Date("2018-09-05T21:33:27.164Z"),array: [],obj: {_id: 174,str: "contextually-based",num: 2934,date: new Date("2018-09-06T14:58:25.207Z"),array: [],obj: {_id: 175,num: 79183,date: new Date("2018-09-06T13:00:15.617Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 176,str: "payment",num: 77658,date: new Date("2018-09-06T16:22:11.299Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 177,str: "parsing",num: 70128,date: new Date("2018-09-06T12:47:40.388Z"),array: [],obj: {_id: 178,str: "navigate Mississippi",num: 27402,date: new Date("2018-09-06T07:47:58.628Z"),array: [new Date("2018-09-06T08:52:21.861Z"),32826,new Date("2018-09-06T05:10:39.966Z"),22242,"Villages Kentucky",{_id: 179,num: 96258,date: new Date("2018-09-06T05:59:24.831Z"),obj: {}},{_id: 180,str: "indexing",array: ["data-warehouse","Cotton",[{_id: 181,str: "Handcrafted Flats",num: 24758,date: new Date("2018-09-06T01:35:06.959Z"),obj: {_id: 182,array: [[],"Orchestrator Checking Account Total"]}},new Date("2018-09-06T02:28:09.234Z")],new Date("2018-09-06T04:10:29.375Z"),new Date("2018-09-06T19:40:09.910Z")],obj: {}},90728,77544,{_id: 183,str: "Home",num: 38968,array: []}],obj: {_id: 184,date: new Date("2018-09-06T03:31:07.516Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 185,str: "Cedi Avon",num: 33056,date: new Date("2018-09-06T08:34:46.545Z"),array: [],obj: {_id: 186,str: "Generic fresh-thinking",num: 51245,date: new Date("2018-09-06T10:05:18.610Z"),array: [new Date("2018-09-06T09:16:52.391Z"),{_id: 187,str: "deposit",num: 34064,date: new Date("2018-09-06T13:01:50.449Z"),array: [15238]},667,"pixel navigating",[[91798,{_id: 188,str: "backing up",num: 22506,obj: {}},"Generic Plastic Computer Berkshire"]],80618,[],new Date("2018-09-06T15:05:25.849Z"),"Cedi",new Date("2018-09-05T21:20:13.305Z"),new Date("2018-09-06T19:46:37.523Z"),"generate",new Date("2018-09-06T13:22:00.309Z")],obj: {_id: 189,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 190,str: "Gorgeous Granite Shirt",num: 46931,date: new Date("2018-09-06T19:49:24.000Z"),array: [],obj: {_id: 191,str: "North Carolina Checking Account",date: new Date("2018-09-06T11:36:09.517Z"),array: ["Brazilian Real",96690,new Date("2018-09-06T02:41:29.277Z"),18504,"Shoes",78883,{_id: 192,num: 61471,date: new Date("2018-09-06T00:29:26.213Z"),array: []},new Date("2018-09-06T00:03:43.698Z"),27485,new Date("2018-09-05T20:51:51.694Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 193,str: "viral Stand-alone",num: 64534,array: [99159,"Louisiana navigate","web-enabled",21051,{_id: 194,str: "Awesome",num: 73914,date: new Date("2018-09-06T12:08:33.297Z"),array: [new Date("2018-09-06T11:39:42.201Z"),new Date("2018-09-06T03:15:34.954Z"),new Date("2018-09-06T18:20:59.018Z"),"Illinois Bedfordshire transform",{_id: 195,str: "Sleek Plastic Tuna Trace",num: 79544,date: new Date("2018-09-06T03:35:33.021Z"),array: [],obj: {}}],obj: {_id: 196,str: "e-tailers innovate",date: new Date("2018-09-06T11:45:21.030Z"),obj: {}}},[],23289,83543]});
    },

    function(coll) {
        return coll.insert({_id: 197,str: "payment generate",num: 93079,date: new Date("2018-09-06T13:39:38.136Z"),array: [],obj: {_id: 198,str: "Saint Pierre and Miquelon Alaska",num: 24518,date: new Date("2018-09-06T01:31:21.567Z"),array: [3967,[],92813,"withdrawal Ball",new Date("2018-09-06T15:38:46.404Z"),new Date("2018-09-06T01:54:11.549Z"),"Cotton Ergonomic Steel Sausages",15839,[{_id: 199,num: 73137,array: [],obj: {}},new Date("2018-09-06T01:30:14.562Z"),"Computer",15111,[new Date("2018-09-05T20:24:53.174Z"),"Virginia analyzing"]]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 200,str: "Grass-roots auxiliary",num: 25490,date: new Date("2018-09-06T12:47:32.702Z"),array: [],obj: {_id: 201,str: "Orchestrator Gorgeous Frozen Towels Chair",num: 49256,date: new Date("2018-09-06T04:29:03.005Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 202,str: "cultivate",num: 38208,date: new Date("2018-09-06T19:20:59.283Z"),obj: {_id: 203,str: "neural",num: 72970,date: new Date("2018-09-06T09:39:18.832Z"),array: ["viral Global Functionality",new Date("2018-09-06T14:19:54.446Z"),"XML multi-tasking dedicated","USB Street Interactions",27539,{_id: 204,num: 40912,date: new Date("2018-09-05T23:44:39.866Z"),array: [],obj: {}},66673,new Date("2018-09-06T17:22:03.472Z"),"Myanmar Berkshire",new Date("2018-09-06T03:34:27.608Z"),70625],obj: {_id: 205,str: "transmit",date: new Date("2018-09-06T18:11:36.201Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 206,str: "Music Chief",num: 86720,date: new Date("2018-09-06T17:30:51.534Z"),array: [new Date("2018-09-05T23:36:49.839Z"),new Date("2018-09-06T03:47:35.533Z"),"Hat XML",new Date("2018-09-05T23:24:48.555Z"),new Date("2018-09-06T14:08:26.464Z"),22481,"microchip Cuba",11334,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 207,str: "Savings Account killer Syrian Pound",num: 63668,array: [],obj: {_id: 208,str: "Cambodia Plastic Chips",num: 74347,date: new Date("2018-09-06T11:28:22.107Z"),array: ["relationships Refined Cotton Tuna Directives",new Date("2018-09-06T09:12:11.292Z"),new Date("2018-09-06T16:55:31.314Z"),{_id: 209,str: "Metal purple Rubber",num: 60204,date: new Date("2018-09-05T20:22:46.246Z"),array: [4300],obj: {}},60634,"monetize withdrawal teal",new Date("2018-09-06T04:24:44.949Z"),11518,{_id: 210,num: 59155,date: new Date("2018-09-06T14:07:15.506Z"),array: [],obj: {}},15645]}});
    },

    function(coll) {
        return coll.insert({_id: 211,str: "systems",num: 50503,date: new Date("2018-09-06T05:32:31.897Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 212,str: "Bedfordshire zero tolerance",num: 18825,date: new Date("2018-09-06T02:27:27.320Z"),obj: {_id: 213,str: "Colorado",num: 69516,date: new Date("2018-09-06T12:20:55.703Z"),array: ["Balanced initiatives web-enabled",new Date("2018-09-06T11:55:26.985Z"),new Date("2018-09-06T01:51:44.571Z"),[{_id: 214,array: []}],47315,"Developer Berkshire Idaho",17177,new Date("2018-09-06T19:40:36.620Z"),"Bacon","Solutions innovative",new Date("2018-09-06T14:00:27.552Z"),14612,"virtual"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 215,num: 75791,date: new Date("2018-09-05T22:01:07.276Z"),obj: {_id: 216,str: "cross-platform Liaison multi-byte",num: 249,date: new Date("2018-09-06T12:59:35.541Z"),array: [84675,8007,new Date("2018-09-06T03:39:28.477Z"),"China Branding",new Date("2018-09-05T22:11:44.102Z"),[93242,74137,"withdrawal Singapore Dollar dynamic","AI",{_id: 217,str: "Pizza Congolese Franc",num: 5260,date: new Date("2018-09-06T11:22:59.018Z"),array: [],obj: {}}],"extranet bluetooth",{_id: 218,str: "virtual Re-engineered",num: 98645,array: []},"override"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 219,str: "syndicate Maryland HTTP",num: 23677,array: ["users","back up cross-media",new Date("2018-09-06T02:43:48.072Z"),new Date("2018-09-06T02:38:29.030Z"),26905,{_id: 220,str: "Indiana connect Central",num: 51370,date: new Date("2018-09-05T22:15:43.800Z"),array: ["Principal",{_id: 221,str: "Monitored Borders",num: 4892,date: new Date("2018-09-06T16:23:38.789Z"),obj: {}},new Date("2018-09-06T10:40:55.932Z"),"Platinum",new Date("2018-09-06T12:36:46.073Z")],obj: {}},{_id: 222,str: "Granite matrix",date: new Date("2018-09-06T19:24:08.616Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 223,str: "Practical Wooden Computer calculating Internal",num: 40544,date: new Date("2018-09-06T11:59:17.739Z"),array: ["Tasty",new Date("2018-09-06T15:33:31.401Z"),[],"Avon sky blue quantifying",{_id: 224,str: "Afghani open system",num: 77581,date: new Date("2018-09-06T03:12:25.901Z"),array: [],obj: {_id: 225,str: "Nakfa Frozen",num: 33397,date: new Date("2018-09-06T13:51:21.343Z"),array: [[43912,[],new Date("2018-09-05T20:39:03.621Z")],"back-end SCSI Cambridgeshire","Balanced Handmade Frozen Bacon"]}},58510,"quantifying Small Cotton Bike",new Date("2018-09-05T21:50:07.002Z"),9588,{_id: 226,date: new Date("2018-09-06T13:04:06.664Z"),array: [],obj: {_id: 227,str: "non-volatile matrix Awesome Soft Chips",num: 36489,array: ["seamless"],obj: {}}}],obj: {_id: 228,num: 48625,date: new Date("2018-09-06T03:01:25.522Z"),obj: {_id: 229,str: "Fantastic Steel Shirt compress Up-sized",date: new Date("2018-09-06T13:28:03.369Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 230,str: "Cambridgeshire",num: 53536,array: [[],26771,{_id: 231,str: "mindshare virtual",num: 66082,date: new Date("2018-09-06T06:22:29.183Z"),array: [],obj: {}},new Date("2018-09-06T08:14:55.130Z"),new Date("2018-09-06T00:00:37.989Z"),"Product Gorgeous",new Date("2018-09-06T00:33:32.060Z"),"indigo alliance Tools",[7487],46397,2160,{_id: 232,num: 80604,date: new Date("2018-09-06T18:13:09.148Z"),array: []},"attitude-oriented online Refined Soft Table",{_id: 233,str: "Chief",date: new Date("2018-09-06T06:07:38.706Z"),array: ["clicks-and-mortar",40301],obj: {_id: 234,num: 80703,date: new Date("2018-09-06T18:45:53.176Z"),array: [[],new Date("2018-09-06T15:48:13.058Z"),new Date("2018-09-06T04:10:09.083Z")],obj: {_id: 235,str: "Regional Key"}}},"Stream"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 236,str: "foreground",num: 82026,date: new Date("2018-09-06T04:54:52.685Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 237,str: "Books",num: 46336,date: new Date("2018-09-06T10:03:00.892Z"),obj: {_id: 238,str: "Cross-group teal",num: 18125,array: [[],new Date("2018-09-06T04:55:39.239Z"),"Producer",new Date("2018-09-06T15:35:51.327Z"),"Slovenia plum",80462,76970,84928,{_id: 239,str: "Health",num: 27126,date: new Date("2018-09-06T19:34:35.992Z"),array: [],obj: {}},"bypass Metal methodologies",14597],obj: {_id: 240,str: "firewall synthesize Towels",num: 44261,date: new Date("2018-09-06T05:07:43.599Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 241,str: "clear-thinking",num: 76483,date: new Date("2018-09-06T11:12:17.033Z"),array: [96027,"Pass",new Date("2018-09-05T20:01:20.003Z"),[new Date("2018-09-06T09:13:44.264Z"),"Money Market Account Bacon",[],"Borders"],84288,"withdrawal web-readiness","Nevada convergence",new Date("2018-09-06T19:40:13.878Z"),[],42355,[]],obj: {_id: 242,str: "Intelligent Steel Table Associate",num: 81363,date: new Date("2018-09-06T04:24:33.371Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 243,str: "Orchestrator",num: 66637,date: new Date("2018-09-06T15:29:47.701Z"),obj: {_id: 244,str: "Indian Rupee technologies capacitor",num: 42707,date: new Date("2018-09-06T05:56:03.596Z"),array: [],obj: {_id: 245,str: "Buckinghamshire Investor content",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 246,str: "Borders District monitor",num: 77931,date: new Date("2018-09-06T16:45:01.222Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 247,str: "sensor Human",num: 46911,date: new Date("2018-09-06T09:35:08.744Z"),array: ["panel",new Date("2018-09-06T18:45:18.478Z"),68154,[],{_id: 248,str: "Architect Savings Account optical",num: 50401,date: new Date("2018-09-06T10:38:12.622Z"),array: ["array Outdoors",new Date("2018-09-06T10:51:19.414Z"),{_id: 249,str: "Sierra Leone Soap",num: 59825,date: new Date("2018-09-05T22:27:10.690Z"),obj: {_id: 250,date: new Date("2018-09-06T03:43:58.364Z"),array: []}}],obj: {}},new Date("2018-09-06T11:00:18.711Z"),37676,new Date("2018-09-06T18:21:24.445Z"),"monetize Salad Awesome Steel Sausages",92124,45055,74721],obj: {_id: 251,str: "Auto Loan Account Home Administrator",num: 61319}});
    },

    function(coll) {
        return coll.insert({_id: 252,str: "cross-platform quantifying FTP",num: 75592,date: new Date("2018-09-06T03:40:15.798Z"),array: [[28080,"Configuration Exclusive","benchmark system Anguilla","Assurance New Jersey",new Date("2018-09-06T07:16:56.866Z"),81215,8639],new Date("2018-09-06T05:01:37.026Z"),{_id: 253,str: "programming",num: 64358,date: new Date("2018-09-06T03:19:14.066Z"),array: [],obj: {}},59353,"Pennsylvania",[]],obj: {_id: 254,num: 374,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 255,str: "Kansas Designer",num: 40871,date: new Date("2018-09-06T05:10:25.181Z"),array: [34703,"Specialist matrix capability",[],new Date("2018-09-06T19:27:21.270Z"),"Developer fuchsia",38945,"Guarani"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 256,str: "Bosnia and Herzegovina AGP",num: 1002,date: new Date("2018-09-06T02:08:52.362Z"),array: ["eco-centric mobile Group","Dynamic Internal Rustic","Re-engineered Frozen Tasty",12420,new Date("2018-09-06T06:29:52.799Z"),new Date("2018-09-06T15:45:22.708Z"),47474,37503,38847,new Date("2018-09-06T01:52:09.498Z"),{_id: 257,str: "RAM",date: new Date("2018-09-06T00:44:15.644Z"),array: []},[new Date("2018-09-06T14:37:56.944Z"),{_id: 258,str: "Synergized Unbranded Steel Bike",num: 49011,date: new Date("2018-09-06T10:59:00.919Z"),obj: {_id: 259,num: 5884,array: [new Date("2018-09-06T13:00:47.510Z")],obj: {}}}],"USB e-commerce encoding",[]],obj: {_id: 260,str: "deposit",num: 48176,date: new Date("2018-09-06T08:54:35.990Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 261,str: "Personal Loan Account",num: 5396,date: new Date("2018-09-06T00:32:13.434Z"),array: [new Date("2018-09-06T18:43:55.442Z"),94135,"mint green",new Date("2018-09-06T09:27:14.400Z"),"directional deliver",new Date("2018-09-06T15:06:10.007Z"),"Licensed Frozen Table",65340,4779],obj: {_id: 262,str: "web services Licensed Fresh Cheese",num: 94554,date: new Date("2018-09-05T23:13:53.304Z"),array: [],obj: {_id: 263,str: "Beauty HTTP Syrian Arab Republic",date: new Date("2018-09-06T00:54:03.139Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 264,str: "Awesome Metal Keyboard redefine",num: 89122,array: [new Date("2018-09-06T02:12:50.740Z"),44688,"scale Nebraska Incredible",{_id: 265,str: "quantify Customizable",num: 23368,date: new Date("2018-09-06T01:49:39.453Z"),array: [new Date("2018-09-06T14:37:38.455Z"),45223],obj: {}},[],"New York utilisation",22211,[],"Investment Account pricing structure quantifying",new Date("2018-09-06T18:59:34.900Z"),87595],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 266,str: "Extended Soap deposit",num: 60424,date: new Date("2018-09-06T05:07:30.422Z"),array: ["Lane deposit",new Date("2018-09-05T22:10:23.723Z"),new Date("2018-09-06T06:48:23.710Z"),new Date("2018-09-05T20:20:35.320Z"),"Product solid state",19456,88874,54975,"Engineer Minnesota","Buckinghamshire Licensed index",["capability Handmade Frozen Tuna transmitting",[new Date("2018-09-06T07:56:44.183Z"),{_id: 267,str: "Investment Account mobile",num: 17378,date: new Date("2018-09-06T09:39:53.623Z"),array: [],obj: {}}]],40420],obj: {_id: 268,str: "Movies",num: 2069,date: new Date("2018-09-05T21:02:37.718Z"),obj: {_id: 269,str: "Somoni Industrial focus group",date: new Date("2018-09-06T09:03:07.764Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 270,str: "parsing",num: 1460,date: new Date("2018-09-06T12:19:18.686Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 271,str: "green calculate",num: 72963,date: new Date("2018-09-06T06:24:57.500Z"),array: ["Salad",15696,new Date("2018-09-05T20:34:22.416Z"),"Mountains",new Date("2018-09-06T00:47:14.914Z"),"actuating",new Date("2018-09-05T23:00:54.020Z"),new Date("2018-09-06T07:28:11.336Z"),{_id: 272,str: "Garden Versatile e-markets",num: 97680,date: new Date("2018-09-06T15:40:35.107Z"),array: [],obj: {}},11365,[],94252,52534,39339],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 273,str: "Sausages analyzer",num: 60371,date: new Date("2018-09-06T17:04:23.368Z"),array: [],obj: {_id: 274,str: "killer compress virtual",num: 40071,date: new Date("2018-09-06T14:40:29.145Z"),array: ["Metal",{_id: 275,str: "system haptic",num: 53072,date: new Date("2018-09-06T12:27:01.276Z"),array: [new Date("2018-09-05T21:47:53.359Z"),"Buckinghamshire Viaduct Bedfordshire",[76058],{_id: 276,str: "payment Dynamic Gorgeous",num: 29119,array: [],obj: {}},new Date("2018-09-06T13:36:06.783Z")]},new Date("2018-09-06T16:01:30.328Z"),"Chicken",4005,56604,[],new Date("2018-09-06T03:28:02.947Z"),"Utah port"],obj: {_id: 277,num: 56223,array: [],obj: {_id: 278,str: "Bedfordshire pixel Stand-alone",num: 62641,date: new Date("2018-09-06T01:54:38.347Z"),obj: {_id: 279,num: 78557}}}}});
    },

    function(coll) {
        return coll.insert({_id: 280,str: "Buckinghamshire harness Analyst",num: 65240,date: new Date("2018-09-06T09:08:03.909Z"),array: [],obj: {_id: 281,str: "solutions Sao Tome and Principe",num: 26513,date: new Date("2018-09-05T21:34:07.563Z"),array: [new Date("2018-09-06T00:26:00.290Z"),new Date("2018-09-05T20:27:11.879Z"),99879,"cohesive",{_id: 282,num: 52277,date: new Date("2018-09-06T13:48:38.105Z"),array: ["Small Granite Sausages Health Supervisor",34678,"Licensed Investment Account","Cambridgeshire Dynamic Parks",95094,new Date("2018-09-06T11:49:49.093Z")],obj: {_id: 283,str: "tan Re-contextualized",num: 87741,date: new Date("2018-09-06T09:43:03.206Z"),array: []}},new Date("2018-09-05T21:58:57.721Z"),"Monitored background Movies"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 284,str: "South Africa",num: 80302,array: [[],{_id: 285,str: "firewall Technician",num: 27492,date: new Date("2018-09-06T09:37:29.641Z"),array: ["Granite extranet Indiana",new Date("2018-09-06T08:01:40.181Z"),"incubate Grocery",86991],obj: {_id: 286,str: "program Wyoming",num: 99313,date: new Date("2018-09-06T07:22:40.702Z"),array: [],obj: {}}},new Date("2018-09-06T06:43:08.546Z"),"wireless convergence Venezuela",[],70164,94151,69916,[new Date("2018-09-06T06:54:25.509Z")],13346],obj: {_id: 287,str: "hacking open architecture",num: 55549,date: new Date("2018-09-06T08:49:39.625Z"),array: [],obj: {_id: 288,str: "Team-oriented",num: 3739,array: [[49071,new Date("2018-09-06T17:44:13.511Z")]]}}});
    },

    function(coll) {
        return coll.insert({_id: 289,str: "Concrete",num: 21180,array: [],obj: {_id: 290,str: "wireless capacity matrix",date: new Date("2018-09-06T07:57:37.301Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 291,str: "Small",num: 89632,date: new Date("2018-09-05T22:13:47.680Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 292,str: "sky blue SQL calculating",num: 65455,date: new Date("2018-09-06T05:35:00.189Z"),array: [],obj: {_id: 293,str: "Personal Loan Account",num: 59581,date: new Date("2018-09-06T16:25:12.765Z"),array: [new Date("2018-09-06T12:55:48.544Z"),31704,{_id: 294,str: "Towels Philippines",date: new Date("2018-09-06T07:34:39.595Z"),array: [],obj: {}},"human-resource",[78019,new Date("2018-09-06T05:03:02.330Z"),["feed Vermont gold",46353],new Date("2018-09-05T21:06:04.389Z"),8845,"initiatives"],"Planner",new Date("2018-09-06T19:35:31.600Z"),44792,[new Date("2018-09-06T08:51:09.364Z")],79136]}});
    },

    function(coll) {
        return coll.insert({_id: 295,str: "fresh-thinking wireless",num: 87037,date: new Date("2018-09-06T14:45:21.706Z"),array: [],obj: {_id: 296,str: "Directives Specialist",num: 94871,date: new Date("2018-09-05T21:08:33.532Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 297,str: "revolutionize withdrawal",num: 61483,date: new Date("2018-09-06T10:52:46.241Z"),array: [3273,"Gloves zero administration","Credit Card Account Chief HTTP",new Date("2018-09-06T13:07:21.551Z"),18949,new Date("2018-09-06T02:15:44.653Z"),"Connecticut feed",new Date("2018-09-06T17:13:21.192Z"),{_id: 298,num: 87825,date: new Date("2018-09-06T03:06:22.099Z"),array: [],obj: {}},new Date("2018-09-06T16:22:19.623Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 299,str: "moratorium Montserrat Home",num: 37891,date: new Date("2018-09-06T04:52:31.657Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 300,str: "Outdoors",num: 56154,date: new Date("2018-09-06T19:13:22.348Z"),array: [],obj: {_id: 301,str: "circuit Fantastic",num: 23474,date: new Date("2018-09-06T12:48:47.363Z"),array: [61682,"payment",new Date("2018-09-06T19:29:44.886Z"),25160,"matrix 4th generation grey",{_id: 302,num: 56938,date: new Date("2018-09-06T15:22:18.317Z"),array: [[],new Date("2018-09-05T22:44:48.708Z")],obj: {}},"Central Rupiah",[],new Date("2018-09-06T16:38:40.297Z"),{_id: 303,num: 75160,date: new Date("2018-09-06T03:27:42.509Z"),array: [],obj: {}},{_id: 304,str: "Borders back-end connect",num: 30912,date: new Date("2018-09-06T05:40:53.558Z"),obj: {_id: 305,array: [80685,56664],obj: {_id: 306,str: "Keyboard",obj: {}}}},{_id: 307,str: "interface"}]}});
    },

    function(coll) {
        return coll.insert({_id: 308,str: "Devolved",num: 84206,date: new Date("2018-09-05T20:20:06.394Z"),array: [14699,64141,"Integration reinvent paradigms","New Hampshire website",new Date("2018-09-06T02:14:06.195Z"),53030,4620,"Legacy Beauty Auto Loan Account",new Date("2018-09-06T19:10:22.314Z"),[[{_id: 309,str: "transitional optimize Philippines",num: 63654,date: new Date("2018-09-06T03:21:00.899Z"),array: [],obj: {}},new Date("2018-09-06T05:35:55.859Z")],"Money Market Account Corporate Oklahoma",{_id: 310,str: "Turkish Lira Music",date: new Date("2018-09-06T12:08:11.748Z"),array: [],obj: {_id: 311,num: 30228,date: new Date("2018-09-05T21:02:04.264Z"),array: []}}],"azure multi-byte",new Date("2018-09-06T01:59:10.584Z")]});
    },

    function(coll) {
        return coll.insert({_id: 312,str: "Toys Customer",num: 32287,date: new Date("2018-09-06T06:13:54.439Z"),array: [],obj: {_id: 313,str: "revolutionary Music",date: new Date("2018-09-06T12:29:55.020Z"),array: ["Intelligent Fresh Sausages",new Date("2018-09-06T05:26:08.193Z"),94958,86096,42138,"Mobility Field Small Metal Chair",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 314,str: "enterprise Data Latvia",num: 89314,date: new Date("2018-09-06T12:11:19.950Z"),array: [],obj: {_id: 315,str: "RSS implement Directives",num: 72786,date: new Date("2018-09-06T12:26:08.244Z"),array: [87907,new Date("2018-09-06T00:44:23.751Z"),new Date("2018-09-05T21:11:09.082Z"),23158,"e-markets Kentucky Garden",{_id: 316,num: 45023,obj: {}},"open-source upward-trending Georgia",[],"Soap Handmade",12122],obj: {_id: 317,str: "teal Response",date: new Date("2018-09-06T05:42:59.903Z"),array: ["reciprocal invoice RAM",new Date("2018-09-06T00:59:22.991Z"),94566],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 318,str: "dot-com matrix Chips",num: 22069,date: new Date("2018-09-06T06:32:19.038Z"),obj: {_id: 319,num: 21891,date: new Date("2018-09-06T04:20:18.692Z"),array: ["contingency","RSS",new Date("2018-09-06T12:58:08.523Z"),99188,"invoice applications Walks",{_id: 320,num: 67102,date: new Date("2018-09-06T17:47:48.533Z"),array: [],obj: {}},[[],49538,91248,new Date("2018-09-06T13:54:50.183Z"),{_id: 321,str: "invoice Latvian Lats",num: 41667,date: new Date("2018-09-06T08:24:13.705Z"),array: [],obj: {_id: 322,str: "ROI Assurance",obj: {_id: 323,str: "Tools Open-source object-oriented",date: new Date("2018-09-06T10:12:39.050Z"),array: [92448,29824],obj: {_id: 324,str: "Fantastic Plastic Hat",num: 61180,date: new Date("2018-09-05T22:59:31.433Z"),array: [new Date("2018-09-06T19:53:23.902Z"),{_id: 325,obj: {}},new Date("2018-09-06T01:35:11.685Z")]}}}}],"Rhode Island",new Date("2018-09-06T07:46:59.849Z"),new Date("2018-09-06T07:37:13.263Z"),"even-keeled FTP invoice"]}});
    },

    function(coll) {
        return coll.insert({_id: 326,str: "azure",num: 67726,date: new Date("2018-09-06T18:19:42.117Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 327,str: "Station relationships Internal",num: 32966,date: new Date("2018-09-06T09:46:01.096Z"),array: [],obj: {_id: 328,str: "deposit reboot",num: 11004,date: new Date("2018-09-05T20:38:54.703Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 329,str: "Mississippi hacking Small Metal Pants",num: 97312,date: new Date("2018-09-06T03:17:27.088Z"),array: [34793,new Date("2018-09-06T04:40:41.014Z"),"parse",new Date("2018-09-06T11:31:41.128Z"),new Date("2018-09-06T04:11:41.293Z"),15712,"Savings Account","Personal Loan Account Soft",{_id: 330,obj: {}},13924,"Metrics intuitive panel"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 331,str: "Fantastic Granite Hat compressing",num: 17709,date: new Date("2018-09-06T09:45:58.334Z"),array: ["Berkshire",82568,{_id: 332,str: "Director Fish Luxembourg",num: 60523,date: new Date("2018-09-06T05:52:04.997Z"),array: [new Date("2018-09-06T04:45:16.132Z"),{_id: 333,str: "Group Summit Unbranded Rubber Salad",num: 96079,date: new Date("2018-09-06T10:01:17.998Z"),array: ["Chips","Borders lime Practical",new Date("2018-09-06T09:58:44.559Z")]},new Date("2018-09-06T05:02:49.252Z")],obj: {_id: 334,str: "calculate Producer",num: 49558,date: new Date("2018-09-06T03:28:26.850Z"),obj: {}}},"Plastic Sausages Games",12779,{_id: 335,str: "Credit Card Account JSON Grocery",date: new Date("2018-09-06T00:19:48.500Z"),obj: {_id: 336,num: 2267,array: [],obj: {}}},[],new Date("2018-09-06T01:35:13.965Z"),84181,{_id: 337,date: new Date("2018-09-06T14:47:30.252Z"),array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 338,num: 18959,date: new Date("2018-09-05T21:50:37.891Z"),array: [new Date("2018-09-06T06:03:53.580Z"),"Beauty",[23726,75666,"Idaho Kina Lead",97259,{_id: 339,str: "holistic Fiji Dollar",num: 55491,date: new Date("2018-09-06T16:30:34.176Z"),obj: {}}],"synthesizing Garden Avon",[]]});
    },

    function(coll) {
        return coll.insert({_id: 340,str: "evolve deliverables",num: 5675,date: new Date("2018-09-06T15:02:15.945Z"),array: [28882,27711,"Fantastic",new Date("2018-09-06T07:55:55.140Z"),new Date("2018-09-06T12:25:35.589Z"),"Clothing Synergistic Turnpike",new Date("2018-09-06T08:28:47.153Z"),"solutions knowledge user GB",86037,[],{_id: 341,str: "Plastic invoice Cameroon",num: 14131,date: new Date("2018-09-06T02:02:55.202Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 342,str: "copy pricing structure",num: 49911,date: new Date("2018-09-06T11:32:03.537Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 343,str: "Guyana Dollar",num: 97395,date: new Date("2018-09-06T04:41:10.464Z"),array: [new Date("2018-09-05T22:36:12.141Z"),"content Avon",90572,"user-facing",[],61123,["Jewelery",["multi-byte Creative plum",new Date("2018-09-05T22:49:19.441Z"),68137,[]],new Date("2018-09-06T04:10:27.030Z"),{_id: 344,num: 17952,date: new Date("2018-09-06T08:46:16.149Z"),array: [],obj: {}}],"THX Berkshire Plaza",39836,new Date("2018-09-05T21:10:32.918Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 345,str: "Turkmenistan",num: 52902,date: new Date("2018-09-06T16:49:36.605Z"),array: ["reboot","bypass SDD",15235,77887,new Date("2018-09-06T13:05:21.517Z"),4048,new Date("2018-09-06T03:26:49.664Z"),[],80337],obj: {_id: 346,str: "Bermudian Dollar (customarily known as Bermuda Dollar)",num: 72498,date: new Date("2018-09-06T08:18:10.299Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 347,str: "Handmade Directives Architect",num: 12073,date: new Date("2018-09-05T19:56:34.513Z"),array: [],obj: {_id: 348,str: "Refined",array: [37551,"Rubber Myanmar",new Date("2018-09-06T12:50:44.348Z"),new Date("2018-09-05T20:31:19.820Z"),new Date("2018-09-06T13:34:04.208Z"),new Date("2018-09-06T18:21:21.478Z"),92970,["array extend",["Avon Parkway"]],new Date("2018-09-05T23:35:17.815Z"),1702,new Date("2018-09-06T08:16:12.883Z"),"architecture",{_id: 349,str: "Texas Identity engage",date: new Date("2018-09-06T08:02:33.180Z"),array: []}],obj: {_id: 350,str: "Consultant back-end",num: 91012,date: new Date("2018-09-06T18:48:39.688Z"),obj: {_id: 351,date: new Date("2018-09-06T12:36:37.015Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 352,str: "Operations Kansas HTTP",num: 5381,date: new Date("2018-09-06T05:21:52.147Z"),array: [{_id: 353,str: "index",num: 12137,obj: {_id: 354,date: new Date("2018-09-06T06:15:43.883Z"),array: [],obj: {}}},["Concrete Movies District"],new Date("2018-09-06T06:55:48.007Z"),19682,[],63920,78407,69207,"red Concrete deposit",new Date("2018-09-06T01:37:09.158Z"),new Date("2018-09-06T07:42:17.208Z"),{ _id: 355 },"Rustic Plastic Chicken mobile feed",55477]});
    },

    function(coll) {
        return coll.insert({_id: 356,num: 513,date: new Date("2018-09-06T02:55:23.024Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 357,num: 37245,date: new Date("2018-09-06T00:55:29.604Z"),array: [],obj: {_id: 358,str: "Sports Practical",num: 10140,date: new Date("2018-09-06T04:30:17.472Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 359,str: "Agent AGP Designer",num: 52982,date: new Date("2018-09-06T06:30:49.477Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 360,str: "Division",num: 87021,date: new Date("2018-09-06T09:51:45.079Z"),array: [new Date("2018-09-06T10:38:25.059Z"),{_id: 361,str: "Rubber models orchid",num: 34236,date: new Date("2018-09-05T20:05:03.656Z"),obj: {}},30276,17306,"approach orchid",[new Date("2018-09-06T02:46:18.413Z"),"Tennessee online",[new Date("2018-09-06T06:51:47.963Z")],{_id: 362,str: "Fish",date: new Date("2018-09-06T09:39:29.288Z"),array: [],obj: {_id: 363,num: 18308,array: [89052],obj: {_id: 364,num: 43825,date: new Date("2018-09-06T15:50:20.424Z"),obj: {_id: 365,num: 83317,array: []}}}}],"policy impactful",63513,"aggregate Personal Loan Account",{_id: 366,str: "Jewelery 24/7",num: 82681,obj: {}},"Investment Account functionalities"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 367,str: "Turnpike purple",num: 78475,date: new Date("2018-09-06T08:51:41.613Z"),array: [new Date("2018-09-06T18:10:42.256Z"),28656,31068,new Date("2018-09-05T22:23:25.999Z"),"Avon",57888,"TCP",{_id: 368,str: "users Nebraska",date: new Date("2018-09-06T18:52:47.994Z"),array: [],obj: {_id: 369,str: "Coordinator",num: 68363,date: new Date("2018-09-06T06:30:28.960Z"),array: [[92436],new Date("2018-09-05T21:00:22.376Z")],obj: {}}},"complexity","Legacy Australia","high-level",new Date("2018-09-05T22:57:10.503Z"),{_id: 370,str: "RSS Brunei Dollar",num: 69790,date: new Date("2018-09-06T00:49:45.411Z"),array: [["next generation Forks green"],18684],obj: {_id: 371,num: 88401,array: []}},[]],obj: {_id: 372,str: "Colombia Fantastic",date: new Date("2018-09-06T08:44:19.112Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 373,str: "1080p matrix Frozen",num: 86484,date: new Date("2018-09-06T08:40:33.026Z"),array: [new Date("2018-09-06T09:17:03.620Z"),"USB Health",new Date("2018-09-06T03:50:38.912Z"),"Avon Illinois",66704,"bypass",[62500,"Facilitator",new Date("2018-09-06T19:52:23.554Z"),[],{_id: 374,str: "EXE Steel",num: 16593,date: new Date("2018-09-06T05:23:34.232Z"),array: ["PNG",48511],obj: {}}],15439,[]],obj: {_id: 375,str: "Sausages Liaison navigating",num: 27229,date: new Date("2018-09-06T00:20:13.906Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 376,str: "withdrawal Designer",num: 16225,date: new Date("2018-09-06T17:47:41.061Z"),array: [new Date("2018-09-06T12:24:48.853Z"),"Tasty Frozen Pants Fall",68382,{_id: 377,str: "panel wireless",num: 65387,date: new Date("2018-09-06T04:27:40.020Z"),array: [],obj: {_id: 378,str: "Creative",obj: {}}},16361,{_id: 379,str: "Liaison Fresh capacitor",num: 50950,date: new Date("2018-09-06T16:25:34.224Z"),obj: {}},[new Date("2018-09-06T10:21:03.346Z"),"even-keeled Gorgeous Wooden Bacon Cyprus"],"Home Accountability deposit","blue",31078,new Date("2018-09-06T05:05:36.895Z"),new Date("2018-09-06T09:33:56.455Z"),60995],obj: {_id: 380,num: 65798,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 381,date: new Date("2018-09-06T12:31:43.025Z"),array: [25880,"Haven Liechtenstein withdrawal",new Date("2018-09-06T03:34:38.943Z"),new Date("2018-09-06T08:33:52.438Z"),"fuchsia",[{_id: 382,str: "Configuration",num: 23448,date: new Date("2018-09-06T06:08:06.721Z"),array: [],obj: {_id: 383,str: "Planner",num: 27590,obj: {_id: 384,str: "Mill",num: 35311,date: new Date("2018-09-06T18:16:14.658Z"),array: []}}},47903],4113,[],16447,[new Date("2018-09-06T19:04:53.165Z"),new Date("2018-09-05T22:24:12.923Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 385,str: "1080p Shores",num: 53918,date: new Date("2018-09-05T21:18:26.085Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 386,str: "plug-and-play Handcrafted Plastic Bacon",num: 60704,date: new Date("2018-09-05T21:54:12.966Z"),array: ["connect HTTP","Licensed",47342,new Date("2018-09-05T20:09:24.910Z"),74062,new Date("2018-09-06T12:19:44.453Z"),[{_id: 387,str: "Generic Frozen Shirt protocol",num: 29488,date: new Date("2018-09-06T01:03:42.458Z"),array: [],obj: {_id: 388,str: "AGP compressing Refined Steel Pizza",date: new Date("2018-09-06T02:28:40.531Z"),array: []}},new Date("2018-09-06T08:35:19.113Z")],"wireless turquoise",32128,[new Date("2018-09-06T08:50:38.460Z")],"Fresh Savings Account","circuit FTP quantify",{_id: 389,str: "e-markets",num: 46451,array: [],obj: {_id: 390,str: "Administrator client-driven composite",num: 729,date: new Date("2018-09-06T06:29:02.928Z"),obj: {_id: 391,array: [[],{_id: 392,num: 24847,array: [{_id: 393,str: "auxiliary",date: new Date("2018-09-06T13:53:35.078Z"),array: []}],obj: {}},53596],obj: {_id: 394,str: "Wooden back up",num: 22124,obj: {}}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 395,str: "Computers parse",num: 96511,date: new Date("2018-09-06T16:30:30.241Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 396,str: "orchestration clicks-and-mortar",num: 71058,date: new Date("2018-09-05T22:07:10.805Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 397,str: "user-centric Pennsylvania primary",num: 45457,date: new Date("2018-09-06T00:02:01.118Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 398,str: "overriding",num: 62925,date: new Date("2018-09-06T11:19:01.976Z"),array: [new Date("2018-09-06T12:29:52.883Z"),59556,"connect non-volatile","Investment Account New York Credit Card Account","bottom-line",{_id: 399,str: "clicks-and-mortar e-tailers Ridge",num: 18457,array: []},67927,new Date("2018-09-06T05:36:55.688Z"),"Tunisian Dinar azure archive","contextually-based pixel Berkshire",[new Date("2018-09-06T18:40:58.336Z"),{_id: 400,str: "interfaces Baby",date: new Date("2018-09-06T07:50:01.299Z"),array: [],obj: {}},24801,new Date("2018-09-06T14:02:22.512Z")]],obj: {_id: 401,num: 63197,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 402,str: "Investor",num: 71425,array: [],obj: {_id: 403,date: new Date("2018-09-06T08:13:21.389Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 404,str: "plug-and-play brand",num: 10943,array: [],obj: {_id: 405,str: "Vision-oriented",num: 14846,date: new Date("2018-09-06T14:21:54.512Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 406,num: 85839,date: new Date("2018-09-06T15:15:34.325Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 407,str: "Cambridgeshire primary Cliffs",num: 84599,date: new Date("2018-09-06T04:19:32.645Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 408,str: "impactful Delaware",num: 37861,date: new Date("2018-09-06T08:21:42.673Z"),array: [35750,new Date("2018-09-06T04:42:37.355Z"),new Date("2018-09-06T13:33:54.647Z"),new Date("2018-09-06T01:24:50.296Z"),"virtual Gourde US Dollar","enterprise back-end Malaysia",[[],{_id: 409,str: "Grocery Human Motorway",num: 36542,date: new Date("2018-09-06T03:28:38.673Z"),array: [72569,"Brand auxiliary",new Date("2018-09-06T16:49:06.983Z"),{_id: 410,num: 99976,date: new Date("2018-09-06T16:03:20.631Z"),array: [[]],obj: {_id: 411,str: "architect South Carolina Versatile",date: new Date("2018-09-06T19:43:49.614Z"),array: [],obj: {_id: 412,str: "mission-critical",num: 27634,date: new Date("2018-09-06T11:39:55.522Z"),obj: {}}}}]}],new Date("2018-09-06T07:39:16.169Z"),new Date("2018-09-06T05:22:58.880Z"),3399,29749,"Fantastic encryption"]});
    },

    function(coll) {
        return coll.insert({_id: 413,str: "Chair",num: 93515,date: new Date("2018-09-06T19:27:51.331Z"),array: [],obj: {_id: 414,str: "Designer",num: 76421,date: new Date("2018-09-06T17:16:28.507Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 415,str: "Grocery User-centric Web",num: 89610,date: new Date("2018-09-05T23:25:54.723Z"),array: [],obj: {_id: 416,str: "Chips Borders",num: 50431,date: new Date("2018-09-06T01:45:11.301Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 417,str: "Refined",num: 44808,array: [],obj: {_id: 418,num: 69351,date: new Date("2018-09-06T04:55:09.746Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 419,str: "North Dakota AGP Burkina Faso",num: 88130,date: new Date("2018-09-06T09:34:52.625Z"),array: [new Date("2018-09-06T08:21:35.437Z"),"Automotive",new Date("2018-09-06T06:14:26.907Z"),50980,{_id: 420,str: "Personal Loan Account",num: 33404,date: new Date("2018-09-06T16:08:55.356Z"),array: [],obj: {}},"Rubber Soap",{_id: 421,str: "Mississippi virtual",num: 45776,date: new Date("2018-09-06T19:52:36.777Z"),array: [],obj: {_id: 422,str: "users",array: [],obj: {_id: 423,num: 44831,array: [],obj: {}}}},"Direct",3813,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 424,str: "deposit systems clicks-and-mortar",num: 21861,date: new Date("2018-09-06T05:26:40.942Z"),array: [8987,new Date("2018-09-06T19:34:20.554Z"),new Date("2018-09-06T00:38:43.753Z"),21175,{_id: 425,str: "whiteboard overriding",num: 96886,date: new Date("2018-09-06T17:49:02.622Z"),array: [new Date("2018-09-05T20:06:31.846Z"),new Date("2018-09-06T17:27:25.661Z"),{_id: 426,num: 90803,array: [],obj: {_id: 427,str: "Customer",date: new Date("2018-09-06T00:19:45.413Z"),array: ["index","array","invoice"]}}],obj: {}},"clear-thinking Codes specifically reserved for testing purposes pink",{_id: 428,str: "Rubber",num: 48065,array: [56678],obj: {}},[],44382,83430,[[],new Date("2018-09-06T11:30:51.258Z")],[]],obj: {_id: 429,str: "Hryvnia",date: new Date("2018-09-06T00:54:00.596Z")}});
    },

    function(coll) {
        return coll.insert({_id: 430,str: "hierarchy",num: 82901,date: new Date("2018-09-06T06:39:03.855Z"),array: [new Date("2018-09-06T01:16:56.413Z"),93640,"pixel blue vortals",new Date("2018-09-06T17:02:53.817Z")]});
    },

    function(coll) {
        return coll.insert({_id: 431,num: 2510,date: new Date("2018-09-06T11:54:26.951Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 432,str: "Handcrafted Frozen Shoes Bahrain rich",num: 74334,date: new Date("2018-09-06T09:49:09.704Z"),array: [4699,48283,{_id: 433,str: "Response Bike out-of-the-box",num: 31862,array: [],obj: {}},2502,"Technician Grove",{_id: 434,str: "Nigeria Lithuanian Litas Plaza",num: 30188,date: new Date("2018-09-06T09:34:55.040Z"),obj: {_id: 435,str: "Administrator",date: new Date("2018-09-06T11:06:26.373Z"),array: ["Buckinghamshire","invoice"]}},new Date("2018-09-06T01:16:15.526Z"),new Date("2018-09-06T00:42:16.378Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 436,str: "Indian Rupee Ngultrum Industrial payment",num: 93655,date: new Date("2018-09-05T21:17:37.588Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 437,str: "Producer",num: 62940,date: new Date("2018-09-06T14:02:37.917Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 438,str: "Business-focused SCSI sky blue",num: 88401,date: new Date("2018-09-06T09:52:28.064Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 439,str: "Bahraini Dinar",num: 10575,date: new Date("2018-09-06T09:24:24.261Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 440,str: "infrastructures auxiliary",num: 59565,date: new Date("2018-09-06T10:37:25.243Z"),array: [],obj: {_id: 441,str: "olive",num: 69563,date: new Date("2018-09-05T22:23:32.808Z"),array: [22468,5152,new Date("2018-09-06T01:04:57.178Z"),new Date("2018-09-06T10:54:02.358Z"),"Home Brunei Dollar synergize","bypass",{_id: 442,str: "Bike",array: [],obj: {}},new Date("2018-09-05T21:59:23.952Z"),87165,[],"hardware North Dakota"],obj: {_id: 443,num: 2634,date: new Date("2018-09-06T07:57:29.110Z"),array: ["firmware",[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 444,str: "Ecuador Customizable Strategist",num: 16036,date: new Date("2018-09-06T16:43:58.373Z"),array: [],obj: {_id: 445,str: "content core",num: 80270,date: new Date("2018-09-06T04:00:50.601Z"),array: ["Cheese hack Swedish Krona","Investment Account Brand",new Date("2018-09-06T09:03:12.705Z"),new Date("2018-09-06T19:09:40.668Z"),new Date("2018-09-06T08:16:46.316Z"),61344,61070,1400,["Avon Denar Practical","parse Consultant",80392],{_id: 446,str: "Tennessee Wooden",num: 4103,date: new Date("2018-09-06T06:11:40.934Z"),obj: {_id: 447,num: 6179,date: new Date("2018-09-05T22:54:54.811Z"),array: [new Date("2018-09-06T17:10:27.277Z")],obj: {_id: 448,array: [],obj: {}}}},26075,7941],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 449,str: "digital",num: 10259,date: new Date("2018-09-06T12:05:00.054Z"),obj: {_id: 450,str: "reboot",num: 52676,date: new Date("2018-09-05T21:30:31.628Z"),array: [new Date("2018-09-05T21:20:39.647Z"),"extensible Florida",[new Date("2018-09-06T11:05:51.418Z"),"knowledge user Small Steel Shirt"],96325,2677,4782,new Date("2018-09-06T18:42:39.235Z"),{_id: 451,num: 64808,date: new Date("2018-09-06T03:08:48.442Z"),obj: {}},new Date("2018-09-06T10:01:46.400Z"),7361,12635,"Consultant quantifying e-enable","Wooden Computers"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 452,str: "Liaison",num: 43680,date: new Date("2018-09-06T01:25:46.484Z"),array: [new Date("2018-09-06T01:25:03.216Z"),"Buckinghamshire","Rustic Frozen Bike",22843,new Date("2018-09-06T18:25:56.599Z"),new Date("2018-09-06T17:10:52.597Z"),new Date("2018-09-06T01:41:46.955Z"),56359,"Regional",[[],new Date("2018-09-06T19:24:31.275Z")],{_id: 453,str: "Representative",num: 23112,date: new Date("2018-09-06T09:22:59.897Z"),array: [],obj: {_id: 454,str: "AI Incredible",num: 96798,date: new Date("2018-09-05T22:16:25.308Z"),obj: {}}},22014],obj: {_id: 455,str: "Denmark",num: 32484,date: new Date("2018-09-05T20:29:08.358Z"),array: ["HDD portals envisioneer",11164,{_id: 456,str: "Clothing",num: 2304,date: new Date("2018-09-06T12:43:22.552Z"),array: [[{_id: 457,num: 6277,date: new Date("2018-09-06T15:50:20.716Z"),array: [],obj: {}}],"one-to-one"],obj: { _id: 458 }},30320]}});
    },

    function(coll) {
        return coll.insert({_id: 459,num: 62987,date: new Date("2018-09-05T20:14:54.350Z"),array: [new Date("2018-09-06T19:02:39.211Z"),86126,[],new Date("2018-09-06T09:35:45.798Z"),"Compatible Strategist enable",[],new Date("2018-09-06T16:46:33.306Z"),new Date("2018-09-06T09:34:47.916Z"),"Books",33732,"International South Dakota Rustic Rubber Sausages"],obj: {_id: 460,str: "strategic Investment Account orchestrate",num: 70118,date: new Date("2018-09-06T07:17:34.086Z"),array: [79884],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 461,str: "SAS streamline throughput",num: 61555,date: new Date("2018-09-06T18:44:58.850Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 462,str: "online Strategist California",num: 10497,date: new Date("2018-09-05T20:30:45.711Z"),array: [30060,"Checking Account back up",new Date("2018-09-06T10:28:54.840Z"),"Handmade Soft Keyboard forecast Pre-emptive",new Date("2018-09-06T14:12:02.870Z"),83141,new Date("2018-09-06T03:16:47.488Z"),{_id: 463,str: "indigo client-server",date: new Date("2018-09-06T14:23:17.899Z"),array: ["Money Market Account",10040],obj: {_id: 464,str: "Accounts time-frame",num: 43766,date: new Date("2018-09-05T21:21:19.667Z"),array: [new Date("2018-09-06T08:20:51.705Z")]}},{_id: 465,str: "open-source",num: 46274},"copying",[],23208],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 466,str: "Cheese Internal",num: 2518,date: new Date("2018-09-06T02:01:08.940Z"),array: [],obj: {_id: 467,str: "demand-driven Producer Unbranded Granite Chips",num: 85637,date: new Date("2018-09-06T03:17:45.895Z"),array: [new Date("2018-09-05T22:59:34.826Z"),19068,"Practical",73921,"Colorado Home",new Date("2018-09-05T22:04:21.555Z"),["Planner override",17297],"Kids calculating",[],44189,new Date("2018-09-06T02:47:04.149Z"),new Date("2018-09-05T23:00:33.575Z")],obj: {_id: 468,num: 18256,date: new Date("2018-09-06T00:51:38.880Z"),array: [{_id: 469,num: 12597,date: new Date("2018-09-06T18:18:19.757Z"),array: [],obj: {_id: 470,str: "copy USB Tasty",obj: {}}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 471,str: "Greece",num: 86888,date: new Date("2018-09-06T15:51:16.870Z"),array: [],obj: {_id: 472,str: "Frozen convergence",num: 19904,date: new Date("2018-09-06T04:11:26.942Z"),array: ["quantify sensor",new Date("2018-09-05T23:12:58.107Z"),{_id: 473,str: "Polarised violet Soft",num: 61205,date: new Date("2018-09-06T11:07:19.803Z"),array: [27352],obj: {_id: 474,str: "invoice Intelligent SDD",num: 64515,array: [21014,"Specialist Salad",{_id: 475,str: "invoice",date: new Date("2018-09-06T02:52:32.419Z"),obj: {}}]}},"intuitive Associate violet",new Date("2018-09-06T16:01:37.851Z"),new Date("2018-09-06T16:43:45.761Z"),{_id: 476,str: "deploy SAS EXE",num: 72021,array: [],obj: {}},[],[],"Washington Manager Thailand",4725,93473],obj: {_id: 477,array: [[3713,"dynamic"],88623],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 478,str: "infomediaries Borders",num: 75870,date: new Date("2018-09-06T19:20:18.355Z"),array: [[],"Chief bluetooth Avon",18469,48252,new Date("2018-09-05T23:27:34.750Z"),"24/365 Creek",{_id: 479,str: "National deliverables",array: [],obj: {_id: 480,str: "hack teal",num: 80555,date: new Date("2018-09-06T04:41:52.324Z"),array: [new Date("2018-09-06T12:25:31.325Z")],obj: {_id: 481,str: "card navigating navigate",num: 23222,date: new Date("2018-09-06T18:41:34.781Z"),obj: {}}}},30745,97487,"Senior"]});
    },

    function(coll) {
        return coll.insert({_id: 482,str: "Automated",num: 94155,date: new Date("2018-09-05T20:41:57.900Z"),array: [],obj: {_id: 483,str: "Checking Account Estonia",num: 37889,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 484,str: "disintermediate Steel Rustic",num: 23219,date: new Date("2018-09-06T17:13:37.547Z"),array: ["Jordanian Dinar analyzing",new Date("2018-09-06T10:15:02.736Z"),"Cotton Home Loan Account",[],12490,new Date("2018-09-06T17:03:08.702Z"),[],66486,"streamline frictionless","Credit Card Account",{_id: 485,str: "Investor radical",num: 2041,date: new Date("2018-09-05T21:30:44.696Z"),obj: {_id: 486,str: "capacitor Surinam Dollar",num: 72146,date: new Date("2018-09-06T11:47:58.351Z"),array: [],obj: {}}},new Date("2018-09-06T19:28:37.454Z"),49154],obj: {_id: 487,array: [{_id: 488,str: "calculating",num: 22860,array: [80408,"Bedfordshire artificial intelligence Bike"],obj: {_id: 489,str: "Tasty Soft Pizza",num: 75689,date: new Date("2018-09-06T09:34:54.091Z"),array: [],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 490,str: "Plain",num: 57168,array: [],obj: {_id: 491,str: "Legacy Data",num: 90281,date: new Date("2018-09-05T21:52:59.511Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 492,str: "Cambridgeshire virtual Direct",num: 86625,date: new Date("2018-09-06T14:45:12.320Z"),array: [],obj: {_id: 493,str: "Developer",num: 66230,date: new Date("2018-09-06T19:30:47.224Z"),array: ["Indian Rupee",new Date("2018-09-06T19:04:39.228Z"),31886,17180,76215,"Euro",2229,"connect Oklahoma uniform",new Date("2018-09-06T02:22:11.000Z"),"Skyway Manager",new Date("2018-09-06T13:38:32.645Z"),{_id: 494,str: "Representative",num: 68621,array: [[],26730,92044],obj: {}}],obj: {_id: 495,str: "e-commerce Legacy",date: new Date("2018-09-06T17:39:27.692Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 496,str: "Cotton deliverables Bangladesh",num: 12883,date: new Date("2018-09-06T11:37:36.422Z"),array: ["copy transmitting back-end",new Date("2018-09-06T04:13:36.021Z"),new Date("2018-09-06T16:06:40.723Z"),[],72651,89930,[[],"Advanced bluetooth Colombia",new Date("2018-09-06T02:40:59.805Z"),27035],new Date("2018-09-06T10:41:58.324Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 497,str: "monitor",date: new Date("2018-09-05T20:50:30.931Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 498,str: "North Dakota Forest PCI",num: 10764,array: [59361,new Date("2018-09-06T11:19:00.233Z"),[24307],66719,"Cambridgeshire Cambridgeshire",new Date("2018-09-06T17:01:46.993Z"),new Date("2018-09-05T23:45:13.176Z"),"backing up Analyst","Handcrafted Fresh Sausages",71868,60041,"withdrawal cross-platform AI"],obj: {_id: 499,str: "Avon",num: 1616,date: new Date("2018-09-06T13:39:32.780Z"),array: [],obj: {_id: 500,str: "time-frame 1080p",num: 46692,date: new Date("2018-09-05T20:04:33.888Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 501,str: "mobile Egypt",num: 71644,array: [{_id: 502,str: "Multi-channelled",num: 79190,date: new Date("2018-09-06T08:04:40.432Z"),array: [58445,new Date("2018-09-06T10:21:29.733Z")],obj: {}},"tan virtual",[],17545,23948,new Date("2018-09-06T13:13:05.637Z"),"Mouse index",{_id: 503,str: "protocol Markets Rue",date: new Date("2018-09-06T11:16:52.991Z"),array: [],obj: {_id: 504,str: "Granite",num: 28721,date: new Date("2018-09-06T17:58:15.159Z"),obj: {_id: 505,str: "Visionary disintermediate conglomeration",num: 67528,obj: {}}}},new Date("2018-09-06T06:42:14.606Z"),{_id: 506,str: "strategize",num: 94529,date: new Date("2018-09-06T19:53:24.440Z"),obj: {}},"Burundi Franc deliverables Pakistan Rupee",new Date("2018-09-06T10:27:11.490Z"),"payment",35744],obj: {_id: 507,str: "Grocery Practical Cotton Hat Assistant",num: 17506,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 508,str: "Director whiteboard",num: 80452,date: new Date("2018-09-05T23:08:58.906Z"),array: [],obj: {_id: 509,str: "green Court",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 510,num: 46450,date: new Date("2018-09-06T11:41:39.854Z"),obj: {_id: 511,str: "Money Market Account",num: 49887,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 512,str: "Squares Jordanian Dinar",num: 5708,date: new Date("2018-09-05T21:01:32.928Z"),array: [],obj: {_id: 513,str: "Chicken clicks-and-mortar Awesome",num: 99284,date: new Date("2018-09-06T10:06:02.003Z"),array: [new Date("2018-09-05T21:07:21.199Z"),new Date("2018-09-05T22:00:26.412Z"),"Tasty schemas Granite",{_id: 514,str: "Personal Loan Account Granite",date: new Date("2018-09-06T05:02:08.054Z"),obj: {}},23124,24,"purple Liberian Dollar",{_id: 515,str: "Rustic",num: 35375,array: []},new Date("2018-09-06T07:18:36.014Z"),48575,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 516,str: "Future",num: 1370,date: new Date("2018-09-06T10:02:03.181Z"),array: [],obj: {_id: 517,num: 47790,date: new Date("2018-09-06T13:45:19.829Z"),array: [60886,"Future Executive Buckinghamshire",new Date("2018-09-05T22:19:22.815Z"),[],"hack haptic cohesive",new Date("2018-09-06T17:17:16.273Z"),"FTP",[11126,91970,new Date("2018-09-06T03:53:59.168Z"),new Date("2018-09-06T12:12:15.565Z")],{_id: 518,str: "Licensed Supervisor",num: 99413,date: new Date("2018-09-06T09:36:18.256Z")},new Date("2018-09-06T04:24:52.990Z"),{_id: 519,str: "firmware deposit SCSI",num: 62257,date: new Date("2018-09-06T05:34:45.276Z"),array: [],obj: {}}],obj: {_id: 520,str: "alliance",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 521,str: "back up reboot Saint Helena Pound",num: 42546,date: new Date("2018-09-06T17:42:45.788Z"),array: [],obj: {_id: 522,str: "Shoes extranet Baby",num: 64923,date: new Date("2018-09-06T19:29:07.288Z")}});
    },

    function(coll) {
        return coll.insert({_id: 523,str: "proactive",num: 83101,date: new Date("2018-09-06T19:17:47.455Z"),array: [],obj: {_id: 524,str: "24/365",num: 73724,date: new Date("2018-09-06T02:29:25.253Z"),array: [],obj: {_id: 525,str: "Auto Loan Account",num: 80582,array: [new Date("2018-09-06T04:25:24.672Z"),98100,"Bermudian Dollar (customarily known as Bermuda Dollar) Mongolia",30999,"Movies",new Date("2018-09-06T01:04:16.724Z"),"Saint Helena",new Date("2018-09-06T11:00:22.402Z"),43552,[{_id: 526,str: "Rustic Metal Soap Multi-layered Generic",date: new Date("2018-09-06T16:38:34.455Z")},{_id: 527,date: new Date("2018-09-06T19:54:34.019Z"),array: []},"Nigeria Montana","Cambridgeshire"],10733],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 528,str: "deposit Small Rubber Bike Cotton",num: 29977,date: new Date("2018-09-06T04:16:57.096Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 529,str: "Jordanian Dinar",num: 36558,date: new Date("2018-09-05T23:48:49.994Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 530,str: "SMTP",num: 76119,date: new Date("2018-09-06T06:11:42.866Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 531,num: 10460,date: new Date("2018-09-06T17:09:30.845Z"),array: [{_id: 532,str: "foreground Credit Card Account",num: 88850,date: new Date("2018-09-06T01:59:55.421Z"),obj: {}},new Date("2018-09-06T03:57:53.901Z"),27381,45453,new Date("2018-09-06T05:35:55.797Z"),"neural-net invoice",[],new Date("2018-09-06T02:17:47.539Z"),"Developer",[{_id: 533,str: "Director needs-based",num: 44367,date: new Date("2018-09-06T01:02:49.371Z"),array: [new Date("2018-09-05T20:24:45.845Z"),81711,"mobile reboot structure",[86190,new Date("2018-09-06T14:21:39.530Z")],76798,27466],obj: {_id: 534,str: "attitude-oriented",array: [],obj: {}}},{_id: 535,str: "partnerships Shoes",num: 23282,array: [],obj: {_id: 536,str: "deposit optical",num: 4715,date: new Date("2018-09-06T01:01:17.011Z"),array: []}},"Gorgeous Fresh Bacon"]]});
    },

    function(coll) {
        return coll.insert({_id: 537,str: "Personal Loan Account Progressive",num: 74432,date: new Date("2018-09-06T10:44:51.895Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 538,str: "parse Handcrafted",num: 8146,date: new Date("2018-09-06T15:05:21.899Z"),array: [],obj: {_id: 539,str: "backing up synthesizing impactful",num: 94115,date: new Date("2018-09-06T08:01:21.539Z"),array: ["Organic North Dakota Bedfordshire",new Date("2018-09-06T18:26:31.391Z"),32492,new Date("2018-09-06T15:44:24.307Z"),20396,new Date("2018-09-05T23:19:57.105Z"),33105,{_id: 540,str: "PNG",num: 12359,array: []},"Lebanese Pound Ergonomic Metal Cheese",new Date("2018-09-06T19:19:14.883Z"),"Soft Views"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 541,str: "cross-platform",date: new Date("2018-09-06T12:04:55.004Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 542,str: "Program Movies Cambridgeshire",num: 60350,date: new Date("2018-09-06T16:43:54.899Z"),array: [new Date("2018-09-06T07:58:23.214Z"),new Date("2018-09-06T15:02:00.855Z"),[],"markets Garden","morph withdrawal SMS",{_id: 543,str: "payment",num: 92045,date: new Date("2018-09-06T11:41:50.618Z"),array: [],obj: {_id: 544,str: "integrated Soft",num: 14081,obj: {_id: 545,num: 61576,date: new Date("2018-09-06T10:39:30.886Z"),array: [3249,46718,"withdrawal Granite parallelism",[]],obj: {_id: 546,num: 16750,date: new Date("2018-09-06T18:16:44.283Z"),array: [new Date("2018-09-06T08:36:56.877Z")]}}}},{_id: 547,str: "focus group",date: new Date("2018-09-06T16:12:40.832Z"),obj: {_id: 548,array: [new Date("2018-09-06T01:04:33.450Z"),2510],obj: {}}},"fuchsia Configuration Small Concrete Chicken",47984,98832,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 549,str: "digital",num: 61650,date: new Date("2018-09-06T03:17:51.520Z"),array: ["North Dakota Chile",new Date("2018-09-06T15:33:10.306Z"),86954,"Sleek Steel Chicken",new Date("2018-09-05T22:05:22.004Z"),new Date("2018-09-06T18:19:58.519Z"),"transmitting",64681,[],"Representative","Alley Gibraltar",52023],obj: {_id: 550,str: "Pakistan Rupee firewall turquoise",num: 28811,date: new Date("2018-09-06T08:01:25.596Z"),array: [[new Date("2018-09-06T04:01:26.303Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 551,str: "Avon Nebraska bus",num: 10222,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 552,str: "frictionless Concrete",num: 99140,date: new Date("2018-09-06T06:05:55.994Z"),array: [new Date("2018-09-06T10:14:05.008Z"),73747,"Intelligent Fresh Research",new Date("2018-09-05T19:59:43.641Z"),new Date("2018-09-06T08:49:01.162Z"),[{_id: 553,str: "invoice Checking Account",num: 75450,date: new Date("2018-09-06T18:03:04.235Z"),array: [],obj: {_id: 554,str: "Practical Cotton e-business",num: 93412,date: new Date("2018-09-06T01:14:41.042Z"),array: [],obj: {}}}],"solid state object-oriented",[[],"leverage Forward"],new Date("2018-09-06T03:28:05.034Z"),80350,{_id: 555,array: [65199,"even-keeled Lilangeni grey","indigo Somali Shilling",12765,{_id: 556,str: "Licensed Fresh Cheese radical"}],obj: {_id: 557,str: "Bacon",obj: {}}},"evolve invoice transmitter"]});
    },

    function(coll) {
        return coll.insert({_id: 558,str: "Granite back up",num: 26834,date: new Date("2018-09-05T20:11:04.460Z"),array: [40965,"scale Haiti",18000,29714,["Soft whiteboard Granite","Health Practical National"],"Representative optimize PNG",new Date("2018-09-06T14:00:12.829Z"),new Date("2018-09-05T21:05:22.445Z"),43931,new Date("2018-09-06T07:13:30.179Z")],obj: {_id: 559,str: "Engineer ADP",num: 99721,date: new Date("2018-09-05T22:53:01.929Z"),array: [{_id: 560,str: "program",date: new Date("2018-09-06T19:14:21.351Z"),array: [],obj: {}},[],{_id: 561,str: "instruction set Illinois",num: 8989,array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 562,str: "Won program sexy",num: 9636,date: new Date("2018-09-05T20:02:10.018Z"),array: [94118,23508,"Home Loan Account Borders","Rand",32138,{_id: 563,str: "capability",num: 87770,date: new Date("2018-09-05T21:07:07.561Z"),array: [52896,"Practical Lead",new Date("2018-09-06T16:09:43.415Z"),[{_id: 564,date: new Date("2018-09-06T14:29:47.952Z"),array: [],obj: {_id: 565,str: "Dynamic Granite",num: 13673,date: new Date("2018-09-06T04:48:53.222Z"),array: []}}],"architectures customer loyalty transition",new Date("2018-09-06T08:07:06.185Z"),["invoice value-added Personal Loan Account"],32405,"COM optimal",new Date("2018-09-06T02:17:42.473Z")],obj: {}},new Date("2018-09-06T12:08:56.578Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 566,str: "Beauty Vermont",num: 72364,date: new Date("2018-09-06T14:57:02.653Z"),array: [],obj: {_id: 567,str: "indexing",num: 28975,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 568,str: "Alabama Ferry Intelligent Plastic Hat",num: 91967,date: new Date("2018-09-06T10:45:49.077Z"),array: ["strategic",14020,new Date("2018-09-06T01:47:53.077Z"),[new Date("2018-09-05T22:12:00.861Z"),{_id: 569,str: "indexing",num: 85691,date: new Date("2018-09-06T08:15:12.165Z"),array: [71196,89744,"deposit",{_id: 570,str: "paradigms Personal Loan Account Keyboard",num: 74938,date: new Date("2018-09-06T09:39:40.252Z"),obj: {}},new Date("2018-09-05T20:03:36.006Z"),new Date("2018-09-06T12:35:23.597Z")],obj: {}},"Tasty Steel Computer",36450],"Pataca",{_id: 571,str: "system",array: []},[],[],[]],obj: {_id: 572,num: 446,array: [28765],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 573,str: "copy",num: 64375,date: new Date("2018-09-05T23:52:43.629Z"),array: [[40556,"Danish Krone Functionality Coordinator"],new Date("2018-09-06T11:58:59.308Z"),73883,[new Date("2018-09-06T11:45:12.057Z"),"Tasty Soft Pizza Refined Soft Computer Timor-Leste"],{_id: 574,str: "Practical Plastic Pants",num: 23257,date: new Date("2018-09-05T23:34:34.545Z"),array: [],obj: {}},{_id: 575,num: 61395,array: []},8284,"parallelism Sharable blue",new Date("2018-09-06T16:25:46.395Z"),new Date("2018-09-06T11:27:50.955Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 576,num: 18127,date: new Date("2018-09-06T08:28:17.235Z"),array: [{_id: 577,str: "Technician SMTP Sleek",num: 80485,date: new Date("2018-09-06T03:16:15.464Z"),array: ["Sports Tools",new Date("2018-09-06T05:27:41.348Z"),53496,96494]},68470,new Date("2018-09-06T16:12:24.322Z"),"Security Manager index",new Date("2018-09-06T08:26:53.585Z"),"Metal"],obj: {_id: 578,str: "embrace Movies backing up",num: 55210,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 579,str: "Niger",num: 3517,date: new Date("2018-09-06T11:51:09.484Z"),array: [new Date("2018-09-06T19:26:45.298Z"),97372,93575,"coherent South Dakota Kina","Reactive Quality-focused",{_id: 580,str: "quantify portal alarm",num: 19155,date: new Date("2018-09-06T13:18:23.555Z"),array: [],obj: {_id: 581,str: "Dobra",num: 95085,date: new Date("2018-09-06T14:19:33.227Z"),obj: {}}},new Date("2018-09-05T21:12:49.943Z"),[new Date("2018-09-06T07:32:28.529Z")],51161,44720],obj: {_id: 582,str: "capacitor hacking Officer",date: new Date("2018-09-06T09:22:38.425Z"),array: [new Date("2018-09-06T03:08:44.124Z"),"matrix Director Assistant"],obj: {_id: 583,str: "Generic compress content-based",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 584,str: "scalable",num: 48140,date: new Date("2018-09-06T12:49:48.714Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 585,str: "Maldives Proactive Brand",num: 59530,date: new Date("2018-09-06T14:08:55.140Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 586,date: new Date("2018-09-06T07:27:05.622Z"),array: [29623,"channels",36370,new Date("2018-09-06T16:52:42.706Z"),{_id: 587,str: "HTTP supply-chains",num: 14449,date: new Date("2018-09-06T16:36:56.363Z"),array: [new Date("2018-09-06T03:35:47.580Z"),53520,{_id: 588,num: 97531,date: new Date("2018-09-05T22:00:14.933Z"),obj: {_id: 589,str: "Industrial",num: 53817,date: new Date("2018-09-06T12:02:12.340Z"),obj: {}}}],obj: {}},"invoice Overpass frictionless",[]],obj: {_id: 590,array: ["Fully-configurable Research",new Date("2018-09-05T23:05:46.935Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 591,str: "Borders",num: 18273,date: new Date("2018-09-06T15:35:30.201Z"),array: ["COM",33403,[],new Date("2018-09-06T18:04:03.080Z"),"Tools",new Date("2018-09-05T22:42:16.299Z"),1557,new Date("2018-09-06T02:55:43.848Z"),new Date("2018-09-06T16:26:01.854Z")],obj: {_id: 592,str: "Plastic Realigned",num: 63928,date: new Date("2018-09-06T16:09:04.041Z"),array: [{_id: 593,str: "back up Home Loan Account",num: 29837,date: new Date("2018-09-05T20:32:44.514Z"),array: [{_id: 594,obj: {}},92239],obj: {}},"Iran collaborative",new Date("2018-09-06T16:56:22.526Z"),"Associate",{_id: 595,str: "initiative",array: []},[94473],"Awesome Steel Tuna infomediaries"],obj: {_id: 596,num: 48001,date: new Date("2018-09-06T16:54:21.348Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 597,str: "Managed",num: 18979,date: new Date("2018-09-06T09:02:12.856Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 598,str: "Plastic",num: 50476,date: new Date("2018-09-06T00:35:40.401Z"),array: [],obj: {_id: 599,str: "Fantastic Rubber Tuna back-end",num: 29128,array: [{_id: 600,num: 61451,date: new Date("2018-09-06T06:15:13.183Z"),array: [],obj: {}},92403,"bus yellow Palestinian Territory",{_id: 601,str: "Granite sensor",date: new Date("2018-09-06T10:17:59.902Z"),obj: {}},"driver virtual non-volatile",[new Date("2018-09-05T22:01:17.644Z"),new Date("2018-09-06T03:53:18.477Z"),51544,93163],99350,"transform Unbranded Wooden Chicken AGP","Russian Ruble Plastic"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 602,str: "program Forges",num: 95410,date: new Date("2018-09-06T16:24:30.571Z"),obj: {_id: 603,str: "online",num: 72311,date: new Date("2018-09-05T22:41:44.340Z"),array: ["Stream programming demand-driven",58205,new Date("2018-09-06T19:29:32.083Z"),51658,"orange",new Date("2018-09-06T09:55:13.012Z"),"Re-contextualized 4th generation",[82319],[],"synthesizing circuit navigate"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 604,num: 5034,array: [62231,"brand Pizza",new Date("2018-09-06T13:58:16.019Z"),new Date("2018-09-06T11:50:59.055Z"),new Date("2018-09-06T06:25:53.966Z"),new Date("2018-09-05T21:36:37.055Z"),"indigo Keys",72984,[]],obj: {_id: 605,str: "zero administration Innovative",num: 3909,date: new Date("2018-09-06T03:08:10.463Z"),array: [new Date("2018-09-05T22:37:42.695Z"),{_id: 606,str: "Checking Account",num: 90785,date: new Date("2018-09-06T11:30:34.944Z"),array: [],obj: {_id: 607,str: "Marketing Taka",num: 53758,date: new Date("2018-09-06T13:31:42.185Z"),obj: {}}},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 608,str: "Home",num: 7979,date: new Date("2018-09-06T00:52:05.125Z"),array: [],obj: {_id: 609,str: "Cliff back-end deposit",num: 79521,date: new Date("2018-09-06T09:30:58.819Z"),array: [new Date("2018-09-06T00:37:56.260Z"),"Representative",93669,"leading edge",new Date("2018-09-06T16:53:45.882Z"),"Hong Kong Danish Krone circuit",16809,"Washington grid-enabled",[{_id: 610,str: "Somali Shilling Monaco",num: 89506,date: new Date("2018-09-06T07:53:21.945Z"),array: [],obj: {}}],new Date("2018-09-05T23:58:27.441Z"),"projection",new Date("2018-09-06T05:27:45.184Z"),new Date("2018-09-05T23:18:19.705Z")],obj: {_id: 611,date: new Date("2018-09-06T13:05:58.398Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 612,str: "Algerian Dinar",num: 21940,date: new Date("2018-09-05T20:51:07.901Z"),array: [],obj: {_id: 613,array: [[],91722,26817,{_id: 614,num: 6073,date: new Date("2018-09-05T21:07:07.468Z"),obj: {}},25367,new Date("2018-09-06T16:57:09.991Z"),new Date("2018-09-05T21:49:46.097Z"),"interface Investment Account",new Date("2018-09-06T02:33:41.559Z")],obj: {_id: 615,str: "European Unit of Account 9(E.U.A.-9)",date: new Date("2018-09-05T23:26:57.788Z"),array: ["transmitter exuding",{_id: 616,str: "focus group transition",num: 28642,date: new Date("2018-09-06T18:11:20.492Z"),obj: {}},39751]}}});
    },

    function(coll) {
        return coll.insert({_id: 617,str: "Mobility Secured",num: 81645,date: new Date("2018-09-06T12:16:18.663Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 618,str: "maroon",num: 27169,date: new Date("2018-09-05T22:36:30.937Z"),array: [new Date("2018-09-06T06:08:07.938Z"),65465,96659,{_id: 619,str: "Rustic Steel Salad Supervisor Mauritius",num: 5587,array: [new Date("2018-09-06T04:18:33.521Z")],obj: {_id: 620,str: "navigate Auto Loan Account",num: 89998,array: [],obj: {_id: 621,str: "Open-architected",num: 70102,obj: {}}}},"International","Buckinghamshire withdrawal","generate bandwidth Sports",[16273,"magenta expedite olive",new Date("2018-09-06T17:36:02.217Z"),{_id: 622,num: 18412,date: new Date("2018-09-06T08:38:59.450Z")}],66321,{_id: 623,date: new Date("2018-09-06T01:15:51.353Z"),array: [],obj: {}},{_id: 624,str: "Cotton Chief",date: new Date("2018-09-06T19:04:38.496Z"),array: [],obj: {}},71703,[new Date("2018-09-06T12:46:27.022Z")]],obj: {_id: 625,str: "IB",date: new Date("2018-09-06T11:07:34.823Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 626,str: "Dynamic Frozen target",array: [new Date("2018-09-06T11:33:37.781Z"),40972,"Saint Martin invoice Practical",new Date("2018-09-06T17:49:29.117Z"),"Surinam Dollar",76555,new Date("2018-09-06T05:35:26.377Z"),"yellow client-server","RAM Bahraini Dinar",new Date("2018-09-06T00:17:26.675Z"),"array",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 627,num: 9624,date: new Date("2018-09-05T19:59:00.858Z"),array: [16300,new Date("2018-09-06T05:29:15.247Z"),["West Virginia Regional quantifying"],"PNG","Somoni contextually-based Executive","Sudanese Pound moratorium Open-source",{_id: 628,str: "Cambridgeshire",num: 97332,date: new Date("2018-09-05T21:08:37.522Z"),array: [],obj: {_id: 629,str: "indexing Colorado",num: 40843,date: new Date("2018-09-06T14:44:50.710Z"),array: [],obj: {}}},25663,new Date("2018-09-06T13:15:59.752Z"),26899,{_id: 630,str: "capacitor",num: 4591,obj: {}},new Date("2018-09-06T09:42:01.597Z")]});
    },

    function(coll) {
        return coll.insert({_id: 631,num: 671,date: new Date("2018-09-05T22:26:59.137Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 632,str: "support generate",num: 54371,date: new Date("2018-09-06T08:01:26.634Z"),array: [new Date("2018-09-06T08:44:39.358Z"),"backing up",86594,"tertiary Digitized Bacon",new Date("2018-09-05T21:37:25.504Z"),69593,"purple Chair Money Market Account",69240,"Auto Loan Account",{_id: 633,str: "SDR Games",num: 98834,date: new Date("2018-09-06T07:44:12.380Z"),array: [],obj: {}},"Industrial Monaco",1593],obj: {_id: 634,str: "bandwidth morph",array: [[],{_id: 635,str: "bypassing Papua New Guinea deposit",num: 76759,date: new Date("2018-09-06T19:50:35.957Z"),obj: {}},19600,87358]}});
    },

    function(coll) {
        return coll.insert({_id: 636,str: "dedicated orchestration",num: 93078,date: new Date("2018-09-06T06:43:06.125Z"),obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": 1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.obj.str": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["United Kingdom parsing","Chips Parks Money Market Account"],[{ $toString: { $toString: { $arrayElemAt: [[],'$obj.num'] } } },'$str']]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $toString: { $map: {input: ['$obj.num'],in: { $subtract: [33359,'$obj.obj.num'] }} } },"Executive Grocery Fish"],[],['$obj.str',"Mountains Analyst"],['$obj.obj.str',{ $ltrim: {input: "Accounts Director",chars: "Investment Account ADP"} },'$obj.str']] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $isoDayOfWeek: { $week: { $dateFromString: {dateString: "2018-09-06T19:28:10.672Z",onNull: "visualize ivory"} } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $millesecond: { $toDate: { $second: { $isoWeekYear: new Date("2018-09-06T09:33:41.312Z") } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $hour: { $month: { $second: { $month: { $dayOfYear: { $year: { $millesecond: { $dateFromString: {dateString: "2018-09-06T10:36:13.430Z",format: "%Y-%m-%w-%Y-%V-%m-%w-%U-%S",onError: { $arrayToObject: [[{k: "New Israeli Sheqel deposit",v: true},{k: "Cambridgeshire innovative",v: { $week: { $year: new Date("2018-09-06T07:32:53.226Z") } }}]] },onNull: "coherent Creek Designer"} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $concat: ["neural"] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $second: { $dateToString: {date: { $millesecond: { $year: '$obj.obj.date' } },format: "%S-%U-%w-%j",onNull: '$obj.obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],59288] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [] },'$obj.obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $month: { $dayOfYear: { $year: { $minute: { $isoDayOfWeek: { $dateToParts: {date: { $toDate: { $arrayToObject: [[["deposit Saint Pierre and Miquelon",'$str',{ $dateToString: { date: '$obj.date' } },'$str'],[],["Tuna Investment Account Granite"]]] } },timezone: "America/Godthab",iso8601: false} } } } } } } }, _id: 0}}],

        [{$project: {a: { $second: '$obj.date' }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToString: {date: '$obj.obj.date',timezone: "GMT0",onNull: { $rtrim: {input: "alarm Square",chars: '$obj.str'} }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T13:06:08.085Z",format: "%S-%S-%S-%S-%w-%U-%%-%U",onNull: "Lebanon TCP"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $week: { $dateToParts: {date: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T01:45:47.062Z",format: "%H-%G-%H-%m-%H-%%-%%-%j-%V-%d-%Z-%z"} } },timezone: "America/Lima",iso8601: true} } },timezone: "Africa/Porto-Novo"} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],87137] } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str'],[],[],["Delaware"]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfYear: { $month: { $isoDayOfWeek: { $week: { $toDate: { $range: [11,2] } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substr: ["monetize",3,7] },{ $toLower: "Toys Intranet" }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["compress scalable"],[],['$obj.obj.obj.num','$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Front-line",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $week: { $isoDayOfWeek: new Date("2018-09-06T17:19:54.606Z") } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],54588] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $ceil: 23501 }] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toLower: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],35322] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%%-%j-%U-%Y-%m",timezone: "Asia/Ulaanbaatar",onNull: { $arrayElemAt: [['$num',{ $ceil: '$obj.obj.num' },'$obj.obj.obj.num'],{ $sqrt: '$obj.num' }] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[91998],81227] }, _id: 0}}],

        [{$project: {a: { $range: [19,1] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: ["silver",12,16] },"Oman Crescent Tunnel",'$obj.str'],['$obj.obj.num',29781],[],[{ $trim: {input: "Michigan Key Prairie",chars: '$obj.str'} },"Hills migration Industrial"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeekYear: { $isoWeek: { $dayOfMonth: { $second: { $millesecond: { $second: new Date("2018-09-06T09:07:21.119Z") } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Refined Frozen Table driver program",'$obj.obj.str'],[],["Turnpike web-readiness Incredible"],[{ $substrCP: ["deposit green program",19,14] },'$str',{ $ltrim: {input: { $dateToString: {date: '$date',format: "%M-%L-%z-%u-%j-%z-%%-%H-%d",onNull: '$str'} },chars: '$str'} }]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[71713],240] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: { $isoDayOfWeek: { $dateToParts: { date: { $dateFromString: { dateString: "2018-09-06T10:46:13.313Z" } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[90378],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [16,12] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: { input: { $toLower: "Home Loan Account Metal" } } },'$obj.obj.obj.obj.str'],[],['$obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[30957,'$obj.num','$obj.obj.obj.num'],[{ $rtrim: {input: '$str',chars: '$obj.obj.obj.str'} }],[false,13609,{ $month: { $hour: { $hour: { $dayOfMonth: { $isoWeek: { $toDate: { $reverseArray: [[]] } } } } } } },'$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeek: { $isoWeekYear: { $second: { $dayOfWeek: { $hour: { $hour: { $dayOfYear: { $week: { $millesecond: { $dayOfMonth: { $dateFromParts: {year: { $floor: 28109 },day: { $ceil: '$obj.obj.obj.num' },minute: { $cmp: [{ $map: {input: ['$str'],in: { $floor: 79211 }} },{ $objectToArray: '$obj.obj.obj' }] },timezone: "Asia/Jayapura"} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',timezone: "Atlantic/St_Helena",onNull: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[54735,'$obj.obj.obj.num',55195,'$obj.obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str'],cond: { $eq: [{ $rtrim: {input: { $dateToString: {date: new Date("2018-09-06T01:30:27.486Z"),format: "%Z-%V-%d-%j-%Y-%V",timezone: "America/Maceio"} },chars: { $trim: {input: "solid state",chars: "China"} }} },{ $arrayElemAt: [[{ $add: ['$obj.num','$$this',73844,69207] },39554],{ $multiply: [] }] }] }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $mod: [50430,'$obj.obj.obj.num'] },month: { $divide: [{ $indexOfArray: [{ $zip: { inputs: [[],[]] } },{ $arrayElemAt: [['$obj.obj.obj.obj.str'],49644] },13] },'$obj.obj.num'] },day: { $multiply: [{ $sqrt: { $ln: '$obj.obj.obj.num' } },'$obj.obj.obj.num'] },hour: { $log: [39032,'$obj.num'] },minute: 73673,second: { $divide: [{ $exp: '$num' },62879] },millisecond: { $ceil: { $ln: 10344 } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"compressing withdrawal",{ $substr: [{ $substrCP: ["cohesive",19,5] },10,10] }],{ $cmp: [{ $arrayToObject: [[{k: "Health Fresh hardware",v: true},{k: "quantify Shore Delaware",v: { $month: { $dateFromParts: {year: { $abs: '$obj.obj.obj.num' },month: { $multiply: ['$num',23096] },minute: { $ln: 97300 },timezone: "Asia/Hebron"} } }},{k: "Customer array Steel",v: { $substr: ["exuding action-items",19,13] }}]] },{ $filter: {input: ['$obj.obj.obj.str',"Legacy"],as: 'rosalee',cond: { $gt: [{ $isoWeek: { $isoWeekYear: { $dateFromParts: {isoWeekYear: { $size: [[]] },isoWeek: 22075,isoDayOfWeek: { $subtract: ['$$rosalee',29053] },hour: { $sqrt: 12812 },second: { $trunc: '$$rosalee' },millisecond: { $abs: 86420 }} } } },{ $isoWeek: { $toDate: { $arrayElemAt: [['$$rosalee',{ $ceil: '$$rosalee' }],{ $subtract: [24410,'$obj.obj.num'] }] } } }] }} }] }] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $dateToString: {date: new Date("2018-09-06T05:23:02.453Z"),format: "%u-%L-%z-%j-%V-%%-%u-%d-%w",onNull: "Maine Alaska"} },'$obj.obj.obj.str','$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[['$obj.obj.num',11669],[10563,'$num'],['$obj.obj.obj.obj.str'],["index"]]] } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Frozen Bolivar Fuerte firmware"],in: { $exp: 19350 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $concat: ["compress digital",'$obj.obj.obj.obj.str'] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[23106,'$obj.obj.obj.num'],[],['$str'],["Ball",'$obj.str'],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Regional partnerships",20,13] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [["invoice system feed",{ $concat: ['$obj.obj.obj.obj.str'] }],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfYear: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T14:24:44.155Z",format: "%L-%z-%%-%z-%Y-%Z-%u-%u-%M",timezone: "Etc/GMT+12",onError: { $map: {input: [75979,{ $trunc: '$obj.num' }],in: { $mod: [20481,{ $ceil: '$obj.num' }] }} },onNull: '$obj.str'} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],42179] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrCP: ['$str',1,18] },'$str'],as: 'jannie',in: { $floor: '$num' }} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $second: { $minute: { $isoWeek: new Date("2018-09-06T01:48:11.208Z") } } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "Corporate Christmas Island payment",v: '$obj.num'}]] } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $dayOfYear: { $dayOfYear: { $hour: { $year: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T00:33:13.575Z",format: "%Y-%G-%Y-%Z-%u-%S-%Z-%w-%j",onNull: '$str'} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[45081],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "reboot Arizona",v: { $isoDayOfWeek: { $toDate: { $arrayElemAt: [[],'$obj.num'] } } }},{k: "compress",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Chicken front-end Consultant" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["white"],44898] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Checking Account compressing",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[62228],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "black Circle",v: { $minute: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T17:45:58.610Z",format: "%U-%z-%d-%H-%d-%Y-%w-%U-%d-%z",timezone: "Indian/Mauritius"} } } }},{k: "infomediaries Antigua and Barbuda models",v: "Cambridgeshire non-volatile web-enabled"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[],['$obj.obj.obj.num'],["strategize Executive",{ $ltrim: { input: '$str' } }],["Buckinghamshire Bedfordshire Madagascar","Saint Helena Pound",'$obj.obj.obj.obj.str'],[],[],[]]] } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],['$obj.str',"Industrial","redundant Lithuanian Litas invoice","clear-thinking",{ $toLower: { $substrCP: ['$str',14,19] } }],['$str',{ $ltrim: { input: "Bacon Money Market Account" } }],['$obj.obj.num',36362],[19310,'$obj.num',{ $ceil: 11570 }],[]] } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T02:23:48.336Z",timezone: "America/Indiana/Indianapolis"} }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $year: { $dayOfMonth: { $minute: { $hour: { $isoDayOfWeek: { $dateToParts: {date: { $toDate: { $arrayToObject: [[{k: "Sports Spring Personal Loan Account",v: { $isoWeek: { $month: { $isoWeekYear: { $year: new Date("2018-09-06T11:47:09.329Z") } } } }}]] } },timezone: "Asia/Ho_Chi_Minh"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateFromParts: {year: { $mod: [61988,'$obj.num'] },minute: '$obj.obj.num',millisecond: { $log: [59701,39571] },timezone: "Eire"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],64124] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "envisioneer Officer indexing",v: 79833}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $concat: ["Car"] }],28898] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Distributed envisioneer",v: false},{k: "Rand Loti",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str'],['$obj.obj.num','$num','$num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Accounts wireless Uganda",v: new Date("2018-09-06T17:48:04.335Z")},{k: "Liaison",v: true},{k: "Customer-focused alarm copy",v: "Montana copying"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Analyst Ergonomic Freeway",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $concat: ["functionalities Unbranded Plastic Computer",{ $rtrim: { input: "online" } }] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $divide: [24625,'$obj.obj.num'] },isoWeek: { $pow: [2137,'$obj.obj.num'] },minute: { $size: [['$obj.obj.num',{ $multiply: [] },31764]] },millisecond: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Forward auxiliary"],'$num'] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[85896,82137],['$obj.obj.obj.obj.str'],[],["Ergonomic Granite Fish invoice",'$obj.str','$obj.str'],["deposit"],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [14,19,1] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrCP: ['$obj.obj.obj.obj.str',17,8] },"deposit Avon deposit"],[],[35002,'$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToString: {date: '$date',format: "%w-%V-%m-%S-%d-%w-%U-%H-%j",onNull: { $toLower: "cross-media Tokelau disintermediate" }} } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $minute: { $week: { $second: { $toDate: { $ltrim: {input: '$obj.obj.obj.obj.str',chars: "XSS Unbranded Steel Salad Pakistan"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["Tactics dynamic",2,6] }],{ $size: [[]] }] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toUpper: "platforms" },14,20] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeekYear: { $isoWeekYear: { $second: { $dateToString: {date: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $reverseArray: [[{ $rtrim: { input: '$obj.obj.obj.obj.str' } }]] },{ $arrayToObject: [[['$obj.obj.obj.num',2863],[],[]]] }] },isoWeek: { $trunc: { $floor: 24150 } },isoDayOfWeek: { $log: ['$obj.obj.obj.num','$obj.num'] },hour: { $ceil: 81087 },minute: { $pow: ['$obj.num',{ $exp: '$obj.num' }] },timezone: "America/Denver"} },onNull: { $arrayElemAt: [[{ $dateToString: {date: '$obj.date',onNull: "Granite"} },"Plastic"],'$obj.num'] }} } } } } }, _id: 0}}],

        [{$project: {a: { $range: [8,11,19] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toLower: { $toUpper: "model Functionality Fish" } },4,2] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $rtrim: { input: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Mexico/General",onNull: "RAM Cambridgeshire Accountability"} } } }]]] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Kids Pula Leone",{ $substr: ['$obj.obj.obj.obj.str',14,1] },'$obj.obj.obj.obj.date',new Date("2018-09-06T03:24:46.377Z")],38044] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.str'],[],["navigating","National evolve",'$obj.obj.obj.str',"Handmade Plastic Shoes South Georgia and the South Sandwich Islands"]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $lt: [{ $arrayElemAt: [[],'$obj.num'] },{ $year: { $dateToString: {date: '$$this',format: "%H-%L-%V-%M-%j-%u",timezone: "America/Mendoza",onNull: '$$this'} } }] }} }, _id: 0}}],

        [{$project: {a: { $substr: ["purple invoice",5,16] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$num','$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "value-added",v: false},{k: "Wallis and Futuna",v: '$str'},{k: "Malaysia",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromParts: {year: { $pow: [{ $divide: ['$obj.num',69720] },65447] },month: { $subtract: [14416,'$obj.obj.num'] },hour: { $floor: '$obj.obj.num' },timezone: "America/St_Kitts"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["utilize",{ $ltrim: { input: '$str' } },{ $rtrim: {input: { $toLower: { $toString: { $toUpper: '$obj.obj.obj.str' } } },chars: '$obj.obj.str'} }],42366] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.str',chars: { $dateToString: {date: '$date',format: "%S-%L-%G-%d-%L-%d",timezone: "Canada/Mountain",onNull: { $reverseArray: [[]] }} }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "5th generation",v: true},{k: "Towels Robust generate",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[84231,'$obj.obj.obj.num','$obj.obj.obj.num','$obj.obj.num'],66889] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],86290] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',46100],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substrBytes: ["maximize",5,1] }],[],[],[{ $toLower: { $toString: { $isoWeek: { $dateToParts: {date: { $minute: { $hour: { $second: { $isoWeek: { $dayOfYear: { $dateToString: {date: '$obj.obj.date',timezone: "Europe/Samara"} } } } } } },timezone: "America/Argentina/Catamarca",iso8601: false} } } } },'$str',"monitoring JSON Generic Concrete Sausages"]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: "Summit programming" } },"wireless optimize Table",'$str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $substrCP: ["green best-of-breed",13,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["New Mexico Sausages",{ $substrBytes: [{ $toLower: '$obj.obj.obj.str' },17,15] }],98395] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],72739] }, _id: 0}}],

        [{$project: {a: { $concat: ["projection Pizza",{ $ltrim: {input: "SMS",chars: '$obj.obj.str'} },"Focused"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "cultivate Savings Account Armenian Dram",v: false},{k: "User-centric Networked heuristic",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T00:48:00.434Z"),timezone: "Pacific/Pohnpei",onNull: "Direct Personal Loan Account morph"} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bluetooth Personal Loan Account",v: { $rtrim: {input: { $trim: { input: '$str' } },chars: "synthesize Rustic yellow"} }},{k: "input",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[49207],["Soft",'$obj.obj.obj.obj.str',{ $ltrim: {input: '$obj.str',chars: { $substrCP: ['$obj.obj.obj.str',10,1] }} },'$obj.obj.obj.obj.str'],['$num',{ $floor: 68034 }],['$str']]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substrBytes: ['$str',0,15] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',27895],97953] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],50292] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],15336] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: new Date("2018-09-06T04:07:58.939Z"),timezone: "Asia/Aqtobe",onNull: { $arrayElemAt: [[],'$num'] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str','$obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: '$obj.obj.obj.obj.date',format: "%M-%j-%u-%L",onNull: '$obj.obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T17:45:28.153Z",timezone: "America/Indiana/Marengo"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["Manager",12,6] }],10835] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[[],[{ $toLower: "applications metrics" }],[],[12660,'$obj.num'],['$str','$obj.obj.obj.obj.str',"hardware input Home"]]] } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $log: [75744,'$obj.obj.obj.num'] },'$num'],in: { $exp: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],61499] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: { $toLower: { $toLower: '$obj.obj.obj.obj.str' } } },{ $ltrim: {input: "generate",chars: '$obj.obj.obj.str'} }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $dayOfWeek: { $isoDayOfWeek: { $minute: { $minute: { $dateFromParts: {year: { $ceil: 28802 },hour: { $floor: '$obj.num' },millisecond: { $mod: [59020,49291] },timezone: "Asia/Khandyga"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[92037,47915,{ $abs: '$obj.num' }],['$obj.obj.obj.str',{ $toString: { $toLower: "Mexico portals Direct" } }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],6321] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Managed",'$obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $week: { $dateToString: {date: new Date("2018-09-06T03:42:17.794Z"),format: "%d-%w-%u-%Z-%L-%S-%w-%U-%Z-%V",timezone: "Australia/Adelaide",onNull: { $dateToString: {date: { $minute: { $millesecond: { $dayOfYear: '$date' } } },format: "%m-%d-%j-%S-%u",onNull: "Bedfordshire Planner"} }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $trim: { input: '$obj.obj.str' } },chars: "transmit GB Accountability"} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrBytes: [{ $toUpper: '$obj.obj.obj.str' },14,10] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "task-force",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[13025,'$num']]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',1,3] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',"monetize"],20360] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Senegal archive backing up"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Common",v: new Date("2018-09-06T00:30:17.483Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.str'],[],["incubate"]]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T00:46:58.381Z",timezone: "Brazil/West",onError: { $reverseArray: [['$obj.num']] },onNull: "Generic Granite Bike online"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.date'],'$num'] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $toLower: "Bacon Iranian Rial" },'$obj.obj.str','$str',{ $substr: ["Dynamic wireless",4,3] }] }, _id: 0}}],

        [{$project: {a: { $toUpper: "open-source Coves Toys" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Integration redundant",v: 3460}]] }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfMonth: { $isoDayOfWeek: { $dayOfYear: new Date("2018-09-06T15:26:07.615Z") } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $millesecond: { $second: { $dateFromParts: {year: { $mod: ['$obj.obj.num',23992] },hour: { $size: [[{ $rtrim: {input: "1080p backing up Ball",chars: { $substr: ["Ergonomic Granite Fish Virgin Islands, British",13,17] }} },{ $toString: { $year: { $isoDayOfWeek: new Date("2018-09-06T01:45:30.297Z") } } }]] },minute: { $subtract: ['$obj.obj.obj.num',{ $mod: [73293,'$obj.num'] }] },millisecond: { $indexOfArray: [{ $concatArrays: [['$obj.num'],[],[]] },{ $arrayElemAt: [["Union",'$obj.str'],91727] },10,4] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "connecting maximize Street",v: true},{k: "Dam Cambridgeshire Nebraska",v: "Kids Frozen"}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substr: [{ $toLower: "Bedfordshire Frozen" },8,2] } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $hour: { $isoWeek: { $month: { $second: { $dateFromString: {dateString: "2018-09-05T23:47:36.202Z",format: "%H-%S-%G-%d-%Z-%U-%u",onError: { $arrayElemAt: [[73199],8488] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: { $isoWeekYear: { $year: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T15:08:17.678Z",format: "%z-%z-%u-%U-%Z-%%",timezone: "America/Scoresbysund",onNull: { $toString: { $arrayToObject: [[]] } }} },timezone: "America/Boise"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $divide: ['$obj.num',44414] }],["transmit",{ $toString: { $ltrim: { input: "monitor" } } },'$str'],['$obj.str'],["Drive Ergonomic blue",'$obj.obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T15:40:11.431Z"),timezone: "Pacific/Chuuk",onNull: { $arrayElemAt: [['$obj.obj.num',44642,701],'$num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.obj.obj.str'],65460] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toLower: '$str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ["24/365 whiteboard",'$obj.str',{ $dateToString: { date: new Date("2018-09-06T07:50:54.928Z") } }] }],[],["Locks"],['$obj.obj.num',54010],[],[21761,'$num','$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: { input: "SQL next-generation Up-sized" } }],[94554,'$num',92745,{ $log: ['$num','$obj.num'] }],['$obj.obj.obj.obj.str','$obj.obj.obj.str'],[49136],['$num','$num'],["Shoes magenta synergize"]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'horace',in: { $ceil: 71458 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[99183],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $minute: { $millesecond: { $dayOfYear: { $dateFromString: {dateString: "2018-09-05T20:01:08.562Z",onError: { $arrayElemAt: [['$str'],40664] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "installation local",v: true},{k: "Berkshire ability",v: { $substrBytes: ['$obj.obj.str',9,1] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[63243,'$obj.obj.num'],['$num',15572],[{ $dateToString: {date: '$obj.obj.obj.date',format: "%d-%m-%M-%Y-%V-%S-%G-%Z-%G-%V-%z"} },'$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Practical Washington","Concrete AGP web-readiness"],68327] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',9,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substr: ['$str',15,12] }],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Coordinator","Licensed Frozen Pants",{ $toLower: '$obj.obj.obj.obj.str' }],['$str'],[{ $substrCP: ['$obj.obj.obj.obj.str',11,14] },{ $dateToString: {date: new Date("2018-09-06T01:08:09.346Z"),format: "%%-%d-%Z-%Y-%%-%d-%S",timezone: "America/Lima"} },{ $rtrim: { input: "Internal hacking bluetooth" } }]]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $week: { $dayOfWeek: { $minute: { $dateFromString: {dateString: "2018-09-06T07:31:36.908Z",format: "%L-%H-%Y-%M-%M-%j",timezone: "Africa/Lome",onError: { $arrayElemAt: [["compress Granite Mouse",'$str',{ $dateToString: {date: { $toDate: { $arrayToObject: [[{k: "1080p sticky Plastic",v: true}]] } },onNull: '$obj.str'} }],99478] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["wireless","synthesize Investment Account Gloves"],'$num'] }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $isoWeek: { $week: { $dayOfWeek: { $dateToString: { date: '$obj.date' } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["XSS"],[]]] }, _id: 0}}],

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
