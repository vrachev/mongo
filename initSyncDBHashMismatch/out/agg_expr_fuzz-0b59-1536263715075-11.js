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
        return coll.insert({_id: 6867,str: "Indiana",num: 27075,date: new Date("2018-09-06T03:13:08.596Z"),array: [27861,new Date("2018-09-05T23:57:02.196Z"),"Rustic Frozen Cheese Legacy","Jamaica coherent transform",{_id: 6868,str: "Sleek Steel Chicken Borders Forward",num: 37308,date: new Date("2018-09-06T06:03:44.741Z"),array: [],obj: {_id: 6869,str: "Chicken tan dedicated",num: 41656}},new Date("2018-09-05T23:29:43.862Z"),97305,90749,new Date("2018-09-06T15:25:40.460Z"),[],5513],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6870,str: "Unbranded Steel Shoes Liaison",num: 24208,date: new Date("2018-09-06T04:23:13.939Z"),array: [],obj: {_id: 6871,str: "panel",num: 2926,date: new Date("2018-09-06T15:31:17.246Z"),array: ["white IB Adaptive",31936,{_id: 6872,date: new Date("2018-09-05T21:03:32.764Z"),array: [],obj: {}},31579,new Date("2018-09-06T14:20:18.587Z"),"Tasty Frozen Ball",new Date("2018-09-06T09:15:49.947Z"),"Administrator Cote d'Ivoire",{_id: 6873,str: "Intelligent Investment Account override",num: 46893,obj: {_id: 6874,str: "index Licensed Practical Metal Shoes",num: 90045,array: [61874,new Date("2018-09-05T20:28:17.664Z")],obj: {_id: 6875,num: 41581,date: new Date("2018-09-06T02:52:16.972Z")}}},{_id: 6876,str: "plug-and-play Clothing Customer-focused",array: [],obj: {}},[[],new Date("2018-09-06T00:36:39.994Z"),"quantifying SQL sticky"]]}});
    },

    function(coll) {
        return coll.insert({_id: 6877,str: "Cambridgeshire Sausages",num: 1404,date: new Date("2018-09-06T00:34:19.749Z"),array: [],obj: {_id: 6878,str: "Rustic Rubber Shirt",num: 52024,date: new Date("2018-09-05T20:54:50.610Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6879,str: "Car",num: 67793,date: new Date("2018-09-06T07:39:46.516Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6880,str: "Estonia Meadow",num: 2703,date: new Date("2018-09-06T02:44:23.746Z"),array: [new Date("2018-09-05T20:18:33.099Z"),"disintermediate withdrawal backing up",76064,{_id: 6881,str: "web-readiness Extensions Park",num: 14160,date: new Date("2018-09-05T22:40:33.162Z"),array: [],obj: {}},new Date("2018-09-05T22:36:40.753Z"),72705,"Metrics violet"],obj: {_id: 6882,str: "Handcrafted Concrete Soap yellow portals",num: 37737,date: new Date("2018-09-06T16:03:47.756Z"),array: [[[],{_id: 6883,num: 5781,date: new Date("2018-09-06T00:43:00.289Z"),array: [],obj: {_id: 6884,str: "Bike content",date: new Date("2018-09-05T20:58:08.030Z")}},"Tasty Granite Chicken National",{_id: 6885,str: "Savings Account enable",num: 7696,array: ["Developer Baby Port"],obj: {_id: 6886,date: new Date("2018-09-06T07:56:15.913Z")}},new Date("2018-09-06T05:30:57.695Z"),52159],[{_id: 6887,num: 92341,array: [],obj: {}},{_id: 6888,str: "calculate synthesizing reboot",obj: {_id: 6889,str: "input override",date: new Date("2018-09-06T03:38:42.099Z"),array: []}}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6890,str: "success Ergonomic Concrete Gloves infrastructure",num: 88038,date: new Date("2018-09-06T06:19:07.764Z"),array: [],obj: {_id: 6891,num: 16101,date: new Date("2018-09-06T04:12:32.655Z"),array: ["connecting Lari Garden",[],new Date("2018-09-05T22:23:03.126Z"),new Date("2018-09-06T17:16:52.488Z"),22410,{_id: 6892,str: "parse",num: 65735,date: new Date("2018-09-05T20:23:25.714Z"),array: [87532],obj: {}},"transmitter digital AI",{_id: 6893,str: "Auto Loan Account withdrawal Bike",date: new Date("2018-09-06T01:47:40.957Z"),obj: {_id: 6894,str: "deposit",num: 81032,date: new Date("2018-09-06T19:30:46.388Z"),array: [80696]}},"Money Market Account",{_id: 6895,obj: {}},[],"Unbranded AI Tasty Fresh Bike",88108,46496],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6896,num: 13057,date: new Date("2018-09-05T23:24:23.410Z"),array: [new Date("2018-09-06T08:00:02.902Z"),14987,"Small Soft Mouse navigate",[],5842,"Officer",91729,new Date("2018-09-06T00:13:26.582Z"),23187,new Date("2018-09-06T07:39:50.441Z"),"New Hampshire Personal Loan Account"],obj: {_id: 6897,str: "invoice Stravenue",date: new Date("2018-09-06T15:49:38.472Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6898,str: "silver Borders generate",date: new Date("2018-09-06T13:31:17.966Z"),array: [],obj: {_id: 6899,str: "Checking Account",num: 11846,date: new Date("2018-09-06T14:36:34.925Z"),array: ["Italy input",new Date("2018-09-06T00:42:00.624Z"),{_id: 6900,str: "Senior portal Handcrafted",num: 42426,date: new Date("2018-09-06T06:54:00.254Z"),array: [60332],obj: {}},[],{_id: 6901,str: "Andorra",obj: {}},"parsing",83011,new Date("2018-09-06T01:11:55.309Z"),new Date("2018-09-06T12:34:35.860Z"),new Date("2018-09-06T02:43:17.092Z"),"bypass Estates",72310]}});
    },

    function(coll) {
        return coll.insert({_id: 6902,str: "Tuna service-desk",num: 51331,date: new Date("2018-09-06T02:54:42.113Z"),array: [],obj: {_id: 6903,str: "Avon Fresh zero administration",num: 7160,date: new Date("2018-09-06T19:16:28.443Z"),array: [new Date("2018-09-06T19:53:08.320Z"),["United States Minor Outlying Islands back up Intelligent Cotton Hat",new Date("2018-09-06T03:32:18.597Z"),"system Trinidad and Tobago Dollar Producer"],40245,{_id: 6904,num: 74641,date: new Date("2018-09-06T14:09:05.802Z"),array: [95165,new Date("2018-09-06T11:12:31.970Z"),26248,9410,{_id: 6905,num: 60171}],obj: {}},new Date("2018-09-06T02:10:41.615Z"),"back up Toys",81021,"Supervisor",new Date("2018-09-06T16:54:44.245Z"),"Internal Human"],obj: {_id: 6906,num: 63689,date: new Date("2018-09-05T22:15:57.633Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6907,num: 79419,array: [],obj: {_id: 6908,str: "Ball Inlet",num: 47714,date: new Date("2018-09-06T02:40:04.696Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6909,str: "plum",num: 34724,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6910,str: "Future system",num: 43907,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6911,str: "monitoring transmitter",num: 27732,date: new Date("2018-09-06T05:50:26.845Z"),array: [],obj: {_id: 6912,str: "Fresh THX Incredible Rubber Hat",array: [{_id: 6913,str: "Generic Metal Tuna",num: 45660,date: new Date("2018-09-06T06:39:56.543Z"),array: [[],new Date("2018-09-06T17:23:25.730Z")],obj: {}},new Date("2018-09-06T10:19:53.328Z"),"yellow auxiliary",5997,"Persevering bypassing Customer",new Date("2018-09-06T04:35:09.463Z"),"monitor",new Date("2018-09-06T13:20:10.807Z"),35419,54761],obj: {_id: 6914,str: "overriding Handcrafted Soft Shoes",num: 55049,date: new Date("2018-09-06T06:43:57.429Z"),array: [{_id: 6915,date: new Date("2018-09-06T18:45:57.494Z"),obj: {}},26052,["Awesome override Chilean Peso Unidades de fomento"],10594]}}});
    },

    function(coll) {
        return coll.insert({_id: 6916,str: "infrastructure Borders Facilitator",num: 81340,date: new Date("2018-09-06T18:10:52.409Z"),array: ["Generic Ridge",48081,"Cambridgeshire Generic Rubber Chips",[],new Date("2018-09-05T23:47:40.951Z"),{_id: 6917,str: "Mouse Buckinghamshire",num: 15559,date: new Date("2018-09-06T11:51:36.424Z"),array: [4647,50383,new Date("2018-09-06T17:11:40.142Z"),"asynchronous emulation",[[],{_id: 6918,str: "fresh-thinking matrix recontextualize",date: new Date("2018-09-06T18:54:51.489Z"),array: [],obj: {}}]],obj: {}},"Silver Object-based",new Date("2018-09-06T15:50:49.403Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6919,str: "quantifying",num: 53813,date: new Date("2018-09-06T18:25:38.127Z"),array: [],obj: {_id: 6920,str: "interfaces applications",num: 48085,date: new Date("2018-09-06T02:54:19.576Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6921,str: "generate programming",num: 42458,date: new Date("2018-09-06T04:30:56.362Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6922,str: "neural invoice Persevering",num: 56581,date: new Date("2018-09-06T01:45:48.394Z"),array: [],obj: {_id: 6923,date: new Date("2018-09-06T06:50:51.083Z"),array: [{_id: 6924,str: "invoice invoice",num: 41216,date: new Date("2018-09-06T19:23:23.029Z"),array: [21901]},new Date("2018-09-06T17:49:50.423Z"),53322,"synthesize District",41109,new Date("2018-09-06T12:25:06.926Z"),new Date("2018-09-06T17:54:35.684Z"),"Synergistic frictionless",{_id: 6925,num: 95874,date: new Date("2018-09-06T02:34:39.112Z"),array: ["Awesome Steel Chair Fantastic Rubber Car Integrated",[{_id: 6926,str: "Maine sensor capacitor",num: 13175,date: new Date("2018-09-06T02:03:06.621Z"),array: [],obj: {}},89844]],obj: {}},[],new Date("2018-09-05T22:25:09.839Z"),new Date("2018-09-06T00:32:54.101Z"),"Uzbekistan Sum","Data index Auto Loan Account"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6927,str: "transmitting Small Soft Chair Islands",num: 28156,date: new Date("2018-09-05T21:51:47.445Z"),array: ["1080p Refined Soft Keyboard",32064,"HDD",27600,985,{_id: 6928,str: "firmware Fantastic Wooden Ball Plains",num: 25358,date: new Date("2018-09-05T21:56:05.656Z"),array: [],obj: {}},[],new Date("2018-09-06T05:47:57.182Z"),new Date("2018-09-06T13:02:30.094Z"),new Date("2018-09-06T18:17:53.657Z"),{_id: 6929,str: "Intelligent",num: 44271,date: new Date("2018-09-06T06:13:49.098Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6930,str: "feed deposit Unbranded",num: 42621,date: new Date("2018-09-06T13:16:23.901Z"),array: [15547,"Auto Loan Account withdrawal",new Date("2018-09-06T12:43:23.889Z"),"firewall Place",new Date("2018-09-06T05:49:07.623Z"),new Date("2018-09-06T04:10:45.229Z"),65792,48244,new Date("2018-09-06T00:42:25.635Z"),"client-driven olive"],obj: {_id: 6931,str: "Frozen solution-oriented",num: 60226,date: new Date("2018-09-06T17:34:59.453Z"),array: [63820,{_id: 6932,str: "withdrawal Meadows Security",num: 74492,obj: {_id: 6933,str: "Money Market Account Home Loan Account Kiribati",num: 2307,array: [],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6934,str: "withdrawal generate Gorgeous",num: 8951,date: new Date("2018-09-06T02:48:47.339Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6935,str: "Investor Human internet solution",num: 58742,array: ["content Regional","Analyst Wooden",66797,new Date("2018-09-05T22:48:44.714Z"),{_id: 6936,str: "AI Cambridgeshire",date: new Date("2018-09-06T06:50:18.170Z"),array: [65966,{_id: 6937,str: "technologies",date: new Date("2018-09-06T07:13:42.421Z"),array: [new Date("2018-09-06T02:12:24.712Z"),new Date("2018-09-06T05:18:32.293Z")],obj: {_id: 6938,str: "Up-sized Kuwait mindshare",num: 70242,date: new Date("2018-09-06T07:00:37.183Z"),obj: {}}}],obj: {}},"Mouse District",69402,new Date("2018-09-06T07:39:32.885Z"),[],new Date("2018-09-06T19:28:53.371Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6939,str: "Buckinghamshire",num: 95212,date: new Date("2018-09-06T12:13:07.045Z"),array: [],obj: {_id: 6940,str: "PCI Road",num: 74067,date: new Date("2018-09-06T17:20:57.186Z"),array: [78275,new Date("2018-09-06T03:43:15.309Z"),"Vista",{_id: 6941,str: "drive",num: 75339,obj: {}},"rich Corners Wisconsin",[],59494,51437,["Home Loan Account Future salmon"],"Administrator global",{_id: 6942,str: "invoice Lodge Designer",date: new Date("2018-09-06T18:37:11.548Z"),array: [],obj: {_id: 6943,date: new Date("2018-09-06T07:01:17.027Z"),array: []}},new Date("2018-09-06T01:40:35.902Z")],obj: {_id: 6944,str: "withdrawal Infrastructure Towels",num: 35051,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6945,str: "homogeneous grey",num: 54349,date: new Date("2018-09-05T20:18:00.212Z"),array: [24938,new Date("2018-09-06T16:49:23.053Z"),75563,58326,new Date("2018-09-05T23:20:11.359Z"),"compress Cambridgeshire","Licensed",{_id: 6946,num: 46787,array: [],obj: {}},45693,new Date("2018-09-06T18:06:25.967Z"),"Shoes payment Administrator","Granite SDD Ergonomic"],obj: {_id: 6947,str: "Concrete asynchronous deposit",num: 95332,date: new Date("2018-09-05T23:53:43.138Z"),array: [new Date("2018-09-06T13:24:01.449Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 6948,str: "Engineer program",num: 56699,date: new Date("2018-09-06T05:16:55.029Z"),array: [],obj: {_id: 6949,num: 81125,date: new Date("2018-09-06T07:22:37.915Z"),array: [78611,40380,"bluetooth turquoise transmitting",new Date("2018-09-06T19:36:26.912Z"),"auxiliary CSS radical",{_id: 6950,str: "Personal Loan Account website",date: new Date("2018-09-06T15:52:38.521Z"),array: [],obj: {}},77534,new Date("2018-09-06T11:11:50.062Z")],obj: {_id: 6951,date: new Date("2018-09-06T16:04:47.715Z"),array: ["application Practical Frozen Salad",new Date("2018-09-06T06:10:28.804Z"),[new Date("2018-09-06T11:46:53.768Z")],new Date("2018-09-05T20:14:11.853Z"),[],{_id: 6952,str: "parsing benchmark application",date: new Date("2018-09-06T02:55:43.455Z")},"functionalities Computers bandwidth",76173,{_id: 6953,str: "tangible Cotton",num: 24375}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6954,num: 60901,array: []});
    },

    function(coll) {
        return coll.insert({_id: 6955,str: "Massachusetts interface",num: 89532,array: [],obj: {_id: 6956,str: "vortals",num: 71848,date: new Date("2018-09-06T16:49:46.234Z"),array: [new Date("2018-09-06T01:19:30.783Z"),new Date("2018-09-06T09:12:09.234Z"),"technologies Money Market Account",92446,"generating Meadow","portals Estates",7180,{_id: 6957,str: "core Borders protocol",array: []},[[{_id: 6958,str: "Incredible Soft Bacon Rustic Steel Bacon Horizontal",num: 18354,date: new Date("2018-09-06T00:48:28.268Z"),array: [],obj: {}},new Date("2018-09-06T08:26:15.624Z"),96500]],["Integration Organized Lithuania",new Date("2018-09-06T12:50:10.913Z"),32638],"orange teal",{_id: 6959,num: 10034,date: new Date("2018-09-06T15:12:39.352Z"),obj: {}},76012],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6960,str: "invoice Applications Multi-layered",date: new Date("2018-09-06T07:40:18.968Z"),obj: {_id: 6961,str: "Multi-layered yellow",num: 85770,array: [new Date("2018-09-06T10:38:51.899Z"),{_id: 6962,str: "override",num: 20904,date: new Date("2018-09-06T08:59:55.699Z"),array: [64554,new Date("2018-09-06T02:40:14.449Z"),"initiatives Georgia",29569,"sticky firewall"]},[],99939,new Date("2018-09-05T20:19:33.164Z"),new Date("2018-09-06T08:40:39.713Z"),"Concrete Car violet","silver",new Date("2018-09-06T10:18:41.153Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6963,str: "optical Handcrafted Frozen Table Books",num: 55103,date: new Date("2018-09-06T10:49:37.037Z"),array: ["transmitter","XSS deposit",{_id: 6964,str: "Facilitator transmitter Extended",num: 69218,date: new Date("2018-09-05T22:41:47.940Z"),array: [69751,new Date("2018-09-06T10:07:54.280Z")],obj: {}},new Date("2018-09-06T01:06:33.150Z"),new Date("2018-09-06T16:19:17.923Z"),{_id: 6965,str: "Refined Plastic Chips",num: 56755,array: [],obj: {_id: 6966,str: "Metal matrix",num: 97830,array: [],obj: {}}},38699,72808,35686,28854,new Date("2018-09-06T19:48:11.107Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6967,str: "Web",num: 31951,date: new Date("2018-09-06T12:01:40.989Z"),array: [new Date("2018-09-06T01:06:24.789Z"),87717,new Date("2018-09-06T10:45:24.770Z"),"Shoes",12908,[[]],[new Date("2018-09-06T15:18:54.442Z"),new Date("2018-09-06T06:40:19.858Z"),88178,"Pizza Denar",{_id: 6968,str: "Forward Cambridgeshire Games",num: 42230,date: new Date("2018-09-05T20:40:15.935Z"),array: [],obj: {_id: 6969,str: "wireless",num: 14939,date: new Date("2018-09-06T01:16:57.605Z"),obj: {}}}],{_id: 6970,str: "back-end",num: 8429,date: new Date("2018-09-06T12:01:33.044Z"),array: [],obj: {_id: 6971,str: "Berkshire asymmetric",num: 79602,date: new Date("2018-09-05T21:48:05.555Z"),array: ["bluetooth local extensible",33857,"gold cultivate Refined Fresh Chips"]}},"Gorgeous fresh-thinking Road",85988],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6972,str: "Plastic Track",num: 75192,date: new Date("2018-09-06T09:32:34.332Z"),array: ["Decentralized Strategist",65824,"methodical orange",["Forward array",new Date("2018-09-06T10:01:18.155Z")],"Montana",41471,new Date("2018-09-06T07:25:50.801Z"),21884],obj: {_id: 6973,str: "scale RSS",num: 82607,date: new Date("2018-09-06T03:20:47.940Z"),array: [],obj: {_id: 6974,str: "infrastructures",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 6975,str: "UAE Dirham Borders",date: new Date("2018-09-06T18:19:49.681Z"),array: [new Date("2018-09-06T07:48:03.034Z"),new Date("2018-09-06T13:11:22.532Z"),"Savings Account West Virginia",75255,"South Carolina Canadian Dollar",{_id: 6976,str: "Israel",num: 44302,array: [],obj: {}},76264,["Creative Computer Keyboard",new Date("2018-09-06T05:08:00.898Z"),6718],77678,[91412,new Date("2018-09-05T21:35:54.278Z")],new Date("2018-09-06T13:42:11.607Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6977,str: "B2C Ergonomic optical",num: 89659,date: new Date("2018-09-06T13:39:42.748Z"),array: [79890,{_id: 6978,num: 15835,date: new Date("2018-09-06T14:29:31.279Z"),array: [],obj: {}},new Date("2018-09-06T12:40:00.471Z"),"transmitting","Curve quantifying","Chips Colorado",40389,new Date("2018-09-06T09:10:45.208Z"),16399,"Yuan Renminbi Somalia",54059],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6979,str: "Investor",num: 7295,date: new Date("2018-09-06T13:10:09.192Z"),array: [10972,new Date("2018-09-06T15:47:51.116Z"),[],29703,[],"generate quantifying","Computers Shoes",34096,new Date("2018-09-05T22:00:38.332Z"),94159,{_id: 6980,str: "Senior Solomon Islands Dollar bus",num: 68769,date: new Date("2018-09-06T03:10:29.898Z"),array: [],obj: {}}],obj: {_id: 6981,date: new Date("2018-09-06T08:24:47.159Z"),array: [new Date("2018-09-06T06:26:17.356Z"),new Date("2018-09-06T16:57:52.920Z"),{_id: 6982,str: "Facilitator",num: 46463,date: new Date("2018-09-05T22:13:44.415Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 6983,str: "recontextualize",num: 42397,date: new Date("2018-09-06T19:23:06.330Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6984,str: "JSON Upgradable red",date: new Date("2018-09-06T16:46:57.708Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6985,str: "generating Berkshire hack",num: 3481,array: [67889,30931,new Date("2018-09-06T06:03:50.310Z"),"Unbranded Metal Soap auxiliary",23664,new Date("2018-09-05T20:45:44.400Z"),"application SMS",new Date("2018-09-06T03:58:39.168Z"),new Date("2018-09-06T03:45:17.334Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6986,str: "Dobra Fantastic",num: 60008,date: new Date("2018-09-06T16:57:08.245Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6987,str: "Extended",num: 25744,date: new Date("2018-09-06T01:04:10.408Z"),array: ["Security Mandatory",{_id: 6988,str: "Branch",num: 27154,date: new Date("2018-09-06T02:22:32.574Z"),array: [],obj: {}},14966,["withdrawal navigating",new Date("2018-09-05T22:35:54.050Z"),new Date("2018-09-06T18:37:16.698Z")],[3049,"Cambridgeshire withdrawal Intuitive",41993],new Date("2018-09-06T16:37:16.135Z"),"silver Investment Account",39408,206,new Date("2018-09-06T06:24:08.657Z"),{_id: 6989,str: "programming Credit Card Account",num: 69495,date: new Date("2018-09-06T03:03:19.101Z"),array: [new Date("2018-09-06T08:31:51.830Z"),56187],obj: {_id: 6990,str: "Buckinghamshire",num: 28615,date: new Date("2018-09-05T21:20:28.904Z"),array: [],obj: {}}}],obj: {_id: 6991,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6992,str: "Rubber deposit",num: 4490,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6993,str: "Skyway Savings Account",num: 70207,date: new Date("2018-09-06T00:45:30.057Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6994,str: "violet Gorgeous XSS",num: 49268,date: new Date("2018-09-06T16:39:33.591Z"),array: [],obj: {_id: 6995,str: "Wooden SQL",num: 85510,date: new Date("2018-09-06T06:39:47.401Z"),array: [],obj: {_id: 6996,str: "Bedfordshire application Digitized",num: 29939}}});
    },

    function(coll) {
        return coll.insert({_id: 6997,str: "capability",num: 12604,date: new Date("2018-09-06T18:47:51.016Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6998,str: "Music Turnpike bifurcated",date: new Date("2018-09-06T13:54:58.323Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6999,str: "Profit-focused",num: 64942,date: new Date("2018-09-06T11:15:14.299Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7000,str: "Kiribati channels THX",num: 85953,date: new Date("2018-09-06T03:34:02.793Z"),array: ["Agent Cambridgeshire",59976,59698,65978,new Date("2018-09-06T06:33:09.824Z"),[{_id: 7001,num: 60498,date: new Date("2018-09-06T01:19:27.762Z"),array: [],obj: {}},52071],"iterate Table",new Date("2018-09-05T21:34:02.014Z"),"Soap Strategist",new Date("2018-09-06T07:50:27.045Z"),93160,"Buckinghamshire Marshall Islands benchmark"],obj: {_id: 7002,str: "functionalities",num: 62123,array: [],obj: {_id: 7003,num: 39033,date: new Date("2018-09-06T16:06:53.241Z"),array: ["Representative Garden",{_id: 7004,str: "Home Loan Account",date: new Date("2018-09-06T13:49:10.224Z"),array: ["generate",[]],obj: {}},new Date("2018-09-06T07:21:52.565Z"),[]],obj: {_id: 7005,num: 31614,date: new Date("2018-09-06T06:27:22.797Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 7006,str: "Bolivar Fuerte Money Market Account Checking Account",num: 98256,date: new Date("2018-09-06T18:17:53.605Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7007,num: 4476,date: new Date("2018-09-06T19:32:27.328Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7008,str: "Infrastructure",num: 58905,date: new Date("2018-09-05T22:34:47.009Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7009,str: "Rustic",num: 19389,array: [new Date("2018-09-06T17:15:47.111Z"),new Date("2018-09-06T18:59:36.921Z"),69505,"Canada Grocery",3840,[new Date("2018-09-06T18:25:42.717Z"),"SQL","Hill integrated",{_id: 7010,str: "e-business",num: 25181,date: new Date("2018-09-06T01:51:06.916Z"),obj: {}},18306,"Corporate",new Date("2018-09-06T03:28:21.467Z"),new Date("2018-09-06T02:59:36.365Z"),66492,{_id: 7011,str: "Lebanese Pound China Generic Concrete Shirt",num: 32683,date: new Date("2018-09-06T01:43:39.062Z"),array: [[]],obj: {_id: 7012,str: "Cambridgeshire",num: 28778,date: new Date("2018-09-06T13:05:44.303Z"),array: [],obj: {}}}],28407,{_id: 7013,num: 25261,array: [[]]}],obj: {_id: 7014,str: "Metal Berkshire",obj: {_id: 7015,date: new Date("2018-09-06T17:12:27.594Z"),array: ["Sausages Table"],obj: {_id: 7016,str: "Chile panel User-centric",date: new Date("2018-09-06T08:52:11.083Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 7017,str: "Cambridgeshire",num: 99362,date: new Date("2018-09-06T11:48:38.939Z"),array: ["Computers",52213,"SMTP Metal synthesize",20591,new Date("2018-09-06T01:27:46.844Z"),[new Date("2018-09-05T23:55:16.707Z")],"multi-byte",[],"RAM Vermont",46511],obj: {_id: 7018,str: "Illinois Tactics",num: 18025,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7019,str: "drive Tala",num: 80530,date: new Date("2018-09-06T10:54:48.538Z"),array: [new Date("2018-09-06T10:41:27.366Z"),{_id: 7020,str: "Grass-roots Belize Dollar green",num: 84118,date: new Date("2018-09-06T17:09:27.112Z"),array: [],obj: {}},23236,"Representative","Kiribati proactive",95652,new Date("2018-09-06T01:20:19.698Z"),{_id: 7021,str: "encoding lime compress",num: 82120,obj: {_id: 7022,str: "cross-platform Chile Costa Rica",num: 12202,date: new Date("2018-09-06T19:38:10.556Z"),array: [[]],obj: {_id: 7023,str: "Via Handcrafted Frozen Ball alarm",date: new Date("2018-09-06T07:25:05.439Z"),obj: {_id: 7024,str: "green pixel",array: [],obj: {}}}}},new Date("2018-09-05T20:40:02.021Z"),[],"Synergized synergies hacking",[33959,["Plain","Quality Steel User-friendly"],19737],new Date("2018-09-05T20:25:19.820Z"),new Date("2018-09-06T12:14:27.796Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7025,str: "parse",num: 33358,date: new Date("2018-09-06T18:32:22.483Z"),array: [[],21253,"Sri Lanka",61987,new Date("2018-09-06T02:55:15.251Z"),"Books Re-engineered Intelligent","Fantastic",{_id: 7026,str: "Generic blue conglomeration",num: 60297,date: new Date("2018-09-05T22:57:57.163Z")},new Date("2018-09-05T22:15:56.749Z"),new Date("2018-09-06T08:34:11.118Z"),"azure Practical Fresh Keyboard port"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7027,str: "Mandatory Dobra Coordinator",num: 91644,date: new Date("2018-09-06T17:42:05.969Z"),array: [[],"virtual",58174,new Date("2018-09-06T07:16:39.890Z"),{_id: 7028,str: "directional Unbranded digital",num: 99588,array: ["Manager"],obj: {}},new Date("2018-09-06T00:59:21.431Z"),new Date("2018-09-06T06:52:58.020Z"),85726,new Date("2018-09-06T19:39:05.501Z"),19832,[],{_id: 7029,str: "redefine",num: 88741,date: new Date("2018-09-06T17:58:30.343Z"),array: [95911,"infomediaries"],obj: {_id: 7030,str: "Maryland Corporate",date: new Date("2018-09-05T21:22:35.412Z"),array: ["success Bike"],obj: {}}},{_id: 7031,num: 30990,date: new Date("2018-09-06T05:03:43.891Z"),array: []},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7032,str: "generating gold",num: 28857,date: new Date("2018-09-06T02:09:19.090Z"),array: [81051,"lime Kina Netherlands Antillian Guilder","gold",new Date("2018-09-06T02:16:05.049Z"),new Date("2018-09-06T03:38:49.598Z"),[],"Fresh workforce",new Date("2018-09-06T17:52:11.753Z"),new Date("2018-09-06T07:11:35.560Z"),30841,"Fresh"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7033,str: "Creative",num: 99224,date: new Date("2018-09-06T09:44:31.193Z"),array: ["support","drive white",41326,new Date("2018-09-06T19:42:07.346Z"),new Date("2018-09-06T09:47:14.018Z"),7411,"Generic program"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7034,str: "Fords Bedfordshire Mexico",num: 18055,date: new Date("2018-09-06T01:58:32.669Z"),obj: {_id: 7035,str: "Rubber invoice facilitate",num: 96650,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7036,str: "District Jamaican Dollar",num: 12026,date: new Date("2018-09-06T15:24:26.267Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7037,str: "Grocery Data",num: 69054,date: new Date("2018-09-05T21:46:22.823Z"),array: [new Date("2018-09-06T14:27:08.350Z"),"Beauty","SAS Metal Music",[],87352,"back up COM Tools",59585,new Date("2018-09-06T16:04:46.525Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7038,str: "Landing",num: 77199,date: new Date("2018-09-05T20:39:43.047Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7039,str: "Human SAS",num: 45161,date: new Date("2018-09-06T04:01:20.254Z"),array: [],obj: {_id: 7040,str: "connecting Gorgeous",num: 73517,date: new Date("2018-09-05T23:24:58.598Z"),array: ["flexibility",5038,new Date("2018-09-06T01:37:13.120Z"),[56617,"copying Steel",new Date("2018-09-06T19:05:41.840Z"),70735,"evolve Identity District",new Date("2018-09-06T18:36:07.802Z")],{_id: 7041,num: 95478,date: new Date("2018-09-06T18:33:17.645Z"),array: ["navigate"],obj: {}},7194,{_id: 7042,str: "calculating morph Greece",array: [],obj: {_id: 7043,str: "XSS Cheese",num: 69760,obj: {_id: 7044,str: "tan",num: 12967,date: new Date("2018-09-06T07:31:36.208Z")}}},new Date("2018-09-06T01:09:58.125Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7045,str: "olive array",num: 79041,date: new Date("2018-09-06T07:15:17.988Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7046,str: "users Personal Loan Account withdrawal",array: [],obj: {_id: 7047,str: "encryption",num: 69118,date: new Date("2018-09-06T18:45:52.484Z"),array: [[73326,new Date("2018-09-06T16:32:00.902Z"),"panel Moroccan Dirham",new Date("2018-09-06T16:44:07.651Z"),{_id: 7048,num: 45852,date: new Date("2018-09-06T05:05:05.285Z"),array: []},97524],[{_id: 7049,str: "portals",num: 36315,date: new Date("2018-09-06T06:49:29.975Z"),obj: {}},46625,"Visionary programming Open-architected","Legacy"],58593,new Date("2018-09-06T14:40:03.476Z"),[],new Date("2018-09-06T04:33:07.677Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7050,str: "bypass Cotton parse",num: 91372,date: new Date("2018-09-06T14:03:19.345Z"),array: [6858,new Date("2018-09-05T22:55:21.131Z"),"migration HTTP","bluetooth capability Awesome Metal Pants",{_id: 7051,str: "1080p",num: 38950,array: [],obj: {}},new Date("2018-09-06T18:47:53.478Z"),31348,new Date("2018-09-06T06:10:39.572Z"),{_id: 7052,str: "compelling",date: new Date("2018-09-06T18:54:08.818Z"),array: [],obj: {}},"Engineer Multi-channelled microchip",64996,"Rand Loti JSON Specialist"],obj: {_id: 7053,str: "Extensions",num: 45766,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7054,str: "benchmark Sports",num: 65365,date: new Date("2018-09-06T00:07:59.080Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7055,str: "recontextualize",num: 74708,date: new Date("2018-09-06T10:34:26.207Z"),array: [78872,"Gorgeous Practical Cotton Soap",47231,{_id: 7056,num: 73370,date: new Date("2018-09-06T08:55:50.410Z"),array: [],obj: {}},80436,new Date("2018-09-05T20:43:21.614Z"),new Date("2018-09-06T03:51:20.086Z"),[[],{_id: 7057,str: "SMTP experiences Progressive",num: 18868,date: new Date("2018-09-06T08:50:39.448Z"),array: []},"Solutions Virginia"],{_id: 7058,str: "Research",num: 63347,array: [],obj: {_id: 7059,str: "Cheese next generation Granite",date: new Date("2018-09-06T16:14:57.130Z"),array: ["experiences Metal"],obj: {_id: 7060,obj: {}}}},new Date("2018-09-06T05:14:57.703Z"),"orchid program",98921,{_id: 7061,str: "Small",num: 13031,obj: {_id: 7062,num: 42761,date: new Date("2018-09-06T17:39:55.129Z"),obj: {}}},"Markets Sports sky blue"]});
    },

    function(coll) {
        return coll.insert({_id: 7063,num: 83087,date: new Date("2018-09-06T05:46:01.211Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7064,str: "Kids Garden",num: 67752,date: new Date("2018-09-06T12:43:45.516Z"),array: ["interfaces software turquoise",new Date("2018-09-06T18:37:53.612Z"),"Cross-platform Fantastic Wooden Chicken",{_id: 7065,str: "JSON hard drive digital",num: 45125,obj: {}},new Date("2018-09-06T04:55:14.640Z"),63149,[new Date("2018-09-05T22:12:23.453Z"),"Tasty Wooden Salad",{_id: 7066,str: "XML Rustic Granite Sausages",num: 56640,date: new Date("2018-09-06T06:05:02.678Z"),array: []},76622],81201,new Date("2018-09-06T06:19:58.908Z")],obj: {_id: 7067,str: "Unbranded",num: 63140,date: new Date("2018-09-05T22:13:51.224Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7068,str: "Profit-focused Wooden",num: 65122,date: new Date("2018-09-06T01:37:50.945Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7069,str: "invoice withdrawal Electronics",num: 76530,date: new Date("2018-09-06T03:46:38.684Z"),array: [],obj: {_id: 7070,str: "Frozen interactive quantify",num: 77138,date: new Date("2018-09-05T21:05:23.784Z"),array: ["Missouri",[19926,new Date("2018-09-06T00:24:46.396Z"),new Date("2018-09-06T03:44:41.607Z")],new Date("2018-09-06T17:55:09.419Z"),"monitor PCI",{_id: 7071,date: new Date("2018-09-06T19:09:53.023Z"),obj: {}},"scalable Incredible Plastic Sausages",[new Date("2018-09-05T21:13:54.966Z"),34996],60656,new Date("2018-09-06T10:44:02.633Z"),{_id: 7072,str: "Beauty violet",array: []},"withdrawal International",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7073,str: "B2B Coordinator",date: new Date("2018-09-06T04:55:52.962Z"),array: ["Group attitude-oriented",21546,"Lek",21713,new Date("2018-09-06T11:17:22.726Z"),new Date("2018-09-05T21:36:37.939Z"),7501,[],"Research",[new Date("2018-09-06T01:36:22.066Z"),new Date("2018-09-06T08:15:05.046Z")],17487,{_id: 7074,str: "Investment Account",num: 11890,date: new Date("2018-09-06T07:17:26.207Z"),array: [],obj: {_id: 7075,str: "infrastructures asymmetric",num: 85505,date: new Date("2018-09-06T15:39:37.984Z"),array: [],obj: {}}},29516],obj: {_id: 7076,str: "Future",num: 71866,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7077,str: "Incredible",num: 66169,date: new Date("2018-09-06T17:27:59.361Z"),array: [],obj: {_id: 7078,str: "Intelligent Concrete Tuna",num: 1228,date: new Date("2018-09-06T10:30:40.284Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7079,num: 16833,date: new Date("2018-09-05T21:45:06.808Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7080,str: "Toys synergize",date: new Date("2018-09-06T08:05:46.063Z"),array: [{_id: 7081,num: 41371,date: new Date("2018-09-06T09:17:13.831Z"),array: [],obj: {_id: 7082,num: 23325,date: new Date("2018-09-06T03:43:26.039Z"),array: [new Date("2018-09-06T00:42:34.919Z"),"mindshare SMS"],obj: {_id: 7083,str: "Lodge",num: 77862,array: [],obj: {_id: 7084,str: "Garden data-warehouse",num: 94607,obj: {}}}}},"Planner",new Date("2018-09-06T14:46:59.582Z"),78814,[14005,"invoice Graphic Interface"],[32240,new Date("2018-09-06T08:36:56.749Z"),"tan"],8426,{_id: 7085,str: "aggregate Manager China",num: 54838,date: new Date("2018-09-06T12:12:07.050Z"),array: [],obj: {}},new Date("2018-09-06T16:19:01.486Z"),42507,{_id: 7086,str: "Architect Chile Director",date: new Date("2018-09-06T17:12:41.501Z"),obj: {_id: 7087,str: "eyeballs Assurance target",num: 82479,array: []}}]});
    },

    function(coll) {
        return coll.insert({_id: 7088,str: "structure Automotive Sleek",num: 24072,date: new Date("2018-09-06T10:51:03.046Z"),array: ["virtual",18332,[],[new Date("2018-09-06T18:14:46.170Z")],[71129],new Date("2018-09-06T05:40:59.515Z"),"withdrawal Tactics",new Date("2018-09-06T13:40:55.614Z"),"Buckinghamshire Cambridgeshire yellow",{_id: 7089,str: "Union",num: 18328,date: new Date("2018-09-06T06:27:41.371Z"),array: [],obj: {_id: 7090,num: 2661,date: new Date("2018-09-06T07:05:04.010Z"),array: [],obj: {_id: 7091,str: "Secured Customer",num: 89491,date: new Date("2018-09-06T05:26:02.527Z")}}},86460,79765,"mobile neural enterprise",{_id: 7092,str: "internet solution",array: [new Date("2018-09-05T21:51:22.156Z")],obj: {}},"programming Integration",[]],obj: {_id: 7093,str: "interactive backing up European Unit of Account 17(E.U.A.-17)",num: 75191,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7094,num: 71947,array: ["navigating XML sensor",new Date("2018-09-05T23:09:51.092Z"),9189,new Date("2018-09-06T14:12:35.229Z"),["Quality National calculating",15053,92198,[],96355],new Date("2018-09-06T13:02:54.713Z"),"Handcrafted Bolivar Fuerte solution",new Date("2018-09-05T22:27:00.951Z"),{_id: 7095,num: 17050,date: new Date("2018-09-06T10:50:51.532Z"),array: ["deposit Ergonomic Vanuatu"],obj: {}},[],24572,"Concrete Mississippi"],obj: {_id: 7096,str: "Chair Keyboard IB",num: 13246,date: new Date("2018-09-05T22:05:18.799Z"),array: [],obj: {_id: 7097,str: "override Cuba communities",num: 89075,date: new Date("2018-09-06T02:00:00.199Z"),array: ["synthesize National"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7098,str: "Chilean Peso Unidades de fomento sky blue",num: 27248,date: new Date("2018-09-06T08:40:43.485Z"),array: [],obj: {_id: 7099,num: 34104,date: new Date("2018-09-05T22:37:40.988Z"),array: ["Games",{_id: 7100,str: "Bedfordshire",num: 10960,date: new Date("2018-09-06T15:08:05.558Z"),array: [90617,new Date("2018-09-06T09:50:01.752Z")],obj: {_id: 7101,str: "Wooden",num: 695,array: [[],["Tasty non-volatile",new Date("2018-09-06T09:46:57.894Z"),13824]],obj: {}}},[new Date("2018-09-05T22:01:50.392Z")],27999,46932,{_id: 7102,str: "Somalia Practical virtual",date: new Date("2018-09-06T14:08:19.398Z"),array: []},{_id: 7103,obj: {_id: 7104,str: "parsing turn-key schemas",num: 90249,date: new Date("2018-09-06T14:02:41.899Z"),array: []}},"Virginia generate",new Date("2018-09-05T20:35:55.497Z"),"Berkshire",{_id: 7105,str: "Global",num: 29811,date: new Date("2018-09-06T02:32:03.966Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 7106,str: "Grocery",num: 42512,date: new Date("2018-09-06T18:18:12.568Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7107,str: "tan input calculate",num: 3644,date: new Date("2018-09-06T07:51:57.510Z"),array: [],obj: {_id: 7108,num: 75932,date: new Date("2018-09-06T07:08:50.098Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7109,str: "Branding Product Money Market Account",num: 25651,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7110,str: "virtual Refined Metal Pizza",num: 67269,date: new Date("2018-09-06T00:51:27.154Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7111,str: "Decentralized Security Fantastic",num: 27235,date: new Date("2018-09-06T04:45:35.084Z"),array: ["RAM Principal model",new Date("2018-09-06T01:46:58.519Z"),41061,82138,"Generic Unbranded Wooden Hat",54624,new Date("2018-09-06T08:12:01.909Z"),new Date("2018-09-06T00:02:11.158Z"),[{_id: 7112,str: "User-friendly connect Brand",num: 34627,date: new Date("2018-09-06T06:11:03.643Z"),obj: {_id: 7113,str: "3rd generation",num: 83802,date: new Date("2018-09-05T21:34:34.997Z"),array: [],obj: {}}},"Distributed COM",[new Date("2018-09-06T07:33:25.717Z")],"matrix Borders programming",{_id: 7114,str: "red",date: new Date("2018-09-06T16:53:25.902Z"),array: [15873,new Date("2018-09-06T14:39:17.246Z")],obj: {}}],[]],obj: {_id: 7115,num: 18317,date: new Date("2018-09-06T12:03:40.673Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7116,str: "National",num: 15899,date: new Date("2018-09-06T18:59:53.946Z"),array: [78628,76226,"Sausages",new Date("2018-09-06T17:36:45.130Z"),new Date("2018-09-06T01:24:59.271Z"),82646,new Date("2018-09-06T02:02:26.355Z"),{_id: 7117,str: "Networked Cambridgeshire",date: new Date("2018-09-06T14:24:37.786Z"),array: [],obj: {_id: 7118,str: "mint green",num: 31675,date: new Date("2018-09-06T10:00:28.480Z"),array: [],obj: {_id: 7119,num: 37821,obj: {_id: 7120,str: "Configuration Direct IB",num: 18193,date: new Date("2018-09-05T23:50:07.387Z")}}}},[],new Date("2018-09-06T09:22:07.098Z"),[[78312],"Papua New Guinea"],{_id: 7121,str: "RSS Argentina Plastic",num: 84345,date: new Date("2018-09-06T05:34:33.280Z"),array: [],obj: {}},"Incredible yellow"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7122,str: "Rustic Frozen Hat Balboa US Dollar mint green",num: 15868,date: new Date("2018-09-05T21:46:43.114Z"),array: [],obj: {_id: 7123,str: "Steel cyan",num: 87718,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7124,str: "deposit Licensed Wooden Soap Trace",num: 67964,date: new Date("2018-09-05T21:23:00.852Z"),array: [14902,new Date("2018-09-06T07:58:12.169Z"),new Date("2018-09-06T07:32:17.459Z"),"Web cyan calculating",86222,new Date("2018-09-06T03:02:45.574Z"),"Squares Operations 1080p",65231,"Small Pound Sterling Hat",6096],obj: {_id: 7125,str: "Silver Home reboot",num: 21456,date: new Date("2018-09-05T22:19:01.481Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7126,str: "Regional Croatian Kuna Orchestrator",num: 56692,date: new Date("2018-09-05T23:48:52.878Z"),array: ["Azerbaijan",{_id: 7127,str: "Credit Card Account Balboa US Dollar Arizona",num: 40186,array: [],obj: {}},new Date("2018-09-06T13:05:41.022Z"),new Date("2018-09-06T18:11:55.627Z"),1313,"6th generation Mozambique",new Date("2018-09-06T06:59:54.997Z"),new Date("2018-09-06T18:39:06.381Z"),{_id: 7128,str: "Bedfordshire Licensed quantify",num: 57273,date: new Date("2018-09-06T08:49:22.999Z")},7,[["firewall","pixel New Mexico Sao Tome and Principe",11232,"multi-byte"]],new Date("2018-09-06T07:26:57.652Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7129,str: "Intelligent Concrete Gloves frictionless",num: 95924,date: new Date("2018-09-06T08:43:50.050Z"),array: [new Date("2018-09-06T11:13:54.599Z"),"deposit one-to-one incubate",57685,new Date("2018-09-06T14:03:25.940Z"),6546,[],{_id: 7130,num: 41380,date: new Date("2018-09-06T14:26:49.207Z"),array: ["Jersey Soft withdrawal"]},new Date("2018-09-05T23:01:10.735Z"),"collaborative Berkshire vortals",95155,{_id: 7131,str: "RAM",date: new Date("2018-09-06T00:00:18.435Z"),obj: {_id: 7132,str: "circuit",num: 98972,date: new Date("2018-09-05T23:56:40.947Z"),obj: {}}},22078,"Garden hard drive"]});
    },

    function(coll) {
        return coll.insert({_id: 7133,str: "Bedfordshire Outdoors",num: 60818,date: new Date("2018-09-06T15:00:40.265Z"),array: ["scale",70871,"quantify",new Date("2018-09-06T08:22:09.135Z"),44512,{_id: 7134,str: "Soft",date: new Date("2018-09-06T15:50:10.848Z"),array: [],obj: {}},new Date("2018-09-05T22:55:25.959Z"),"Chicken SSL",[new Date("2018-09-06T04:30:30.134Z"),[]]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7135,str: "Guinea-Bissau synthesizing engineer",num: 75721,date: new Date("2018-09-06T06:44:00.898Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7136,str: "Legacy Auto Loan Account",num: 79510,date: new Date("2018-09-06T01:19:25.073Z"),array: [],obj: {_id: 7137,str: "Sleek Frozen Shirt Savings Account Wooden",num: 44512,date: new Date("2018-09-06T17:13:40.187Z"),array: [],obj: {_id: 7138,num: 60267,date: new Date("2018-09-06T07:40:47.909Z"),array: [[],new Date("2018-09-06T05:22:58.644Z"),66380,"Maryland bypass tan",49816,new Date("2018-09-06T18:02:58.501Z"),"global e-business","visionary virtual capacitor",new Date("2018-09-06T12:14:04.889Z"),"SAS dot-com deposit",{_id: 7139,str: "FTP innovate deposit"}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7140,str: "Metal International web services",num: 35249,date: new Date("2018-09-06T17:23:55.231Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7141,str: "invoice Investor technologies",num: 98574,array: [],obj: {_id: 7142,str: "Interactions payment",date: new Date("2018-09-05T22:00:38.227Z"),array: ["grow Car interfaces",98227,43080,new Date("2018-09-05T20:30:59.392Z"),"Dynamic Incredible Plastic Fish Fords",new Date("2018-09-05T21:05:04.220Z"),87203,{_id: 7143,str: "Georgia withdrawal Buckinghamshire",num: 25829,date: new Date("2018-09-06T16:10:10.746Z"),obj: {}},["Bedfordshire",new Date("2018-09-05T22:52:43.328Z")],"FTP Reverse-engineered","Checking Account back-end",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7144,str: "embrace Personal Loan Account systems",num: 1828,date: new Date("2018-09-06T18:59:57.097Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7145,str: "parse incubate Licensed Cotton Computer",num: 61955,date: new Date("2018-09-06T04:30:13.571Z"),obj: {_id: 7146,str: "Brazilian Real",num: 46902,date: new Date("2018-09-06T03:46:47.309Z"),array: [90958,new Date("2018-09-06T06:58:07.475Z"),"Producer HDD",58762,[],"Incredible Concrete Chair next-generation e-business",new Date("2018-09-06T08:53:28.534Z")],obj: {_id: 7147,num: 22999,date: new Date("2018-09-06T12:56:00.184Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7148,str: "Practical driver Cliff",num: 81617,date: new Date("2018-09-06T10:00:08.245Z"),array: [new Date("2018-09-06T10:56:53.863Z"),"Savings Account array",[],9410,{_id: 7149,str: "architectures Delaware",num: 444,array: [60962,new Date("2018-09-05T21:57:52.556Z"),"Vista optimizing",26861]},new Date("2018-09-06T06:14:44.870Z"),"Idaho Investment Account Small","Credit Card Account Plastic",[],"mobile Kuwait sensor"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7150,str: "United Arab Emirates",num: 49159,date: new Date("2018-09-06T12:42:18.415Z"),array: [41431,new Date("2018-09-06T02:16:20.779Z"),"Intelligent Plastic Chicken alarm","applications Avon",new Date("2018-09-06T00:30:03.818Z"),31696,67042,[new Date("2018-09-06T04:55:09.466Z"),new Date("2018-09-06T18:47:50.033Z"),"lime",{_id: 7151,str: "generate pixel Berkshire",num: 84146,date: new Date("2018-09-06T02:36:38.263Z"),array: [{_id: 7152,str: "Unbranded Rubber Table quantifying",array: [],obj: {}}],obj: {_id: 7153,num: 97102,date: new Date("2018-09-06T11:50:19.918Z"),obj: {_id: 7154,str: "Nuevo Sol transmit",num: 30051}}},new Date("2018-09-06T06:35:23.753Z")],"paradigm Tunnel black"]});
    },

    function(coll) {
        return coll.insert({_id: 7155,date: new Date("2018-09-06T02:33:31.461Z"),array: [new Date("2018-09-06T14:12:09.040Z"),63520,{_id: 7156,str: "compressing multi-byte Argentine Peso",num: 20388,date: new Date("2018-09-06T11:07:33.725Z"),array: [],obj: {_id: 7157,str: "withdrawal",num: 20888,date: new Date("2018-09-06T01:35:03.532Z"),array: ["Auto Loan Account","purple synergistic"]}},[],new Date("2018-09-06T19:40:20.811Z"),43262,"back up","Junctions Granite",25442,new Date("2018-09-06T05:35:55.564Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7158,num: 64883,date: new Date("2018-09-06T07:11:45.220Z"),array: [],obj: {_id: 7159,str: "transmitting plug-and-play",num: 76407,date: new Date("2018-09-06T09:07:10.932Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7160,str: "back-end Togo",num: 90576,date: new Date("2018-09-06T16:11:45.255Z"),array: [],obj: {_id: 7161,str: "streamline Branding",num: 16694,date: new Date("2018-09-06T10:16:09.107Z"),array: [40438,new Date("2018-09-06T18:01:09.086Z"),8629,"Grocery withdrawal","Licensed US Dollar",new Date("2018-09-06T19:06:09.309Z"),new Date("2018-09-06T16:37:10.931Z"),{_id: 7162,num: 81193,array: [[]],obj: {}},[],new Date("2018-09-06T04:14:08.109Z"),{_id: 7163,num: 17685,date: new Date("2018-09-06T02:07:57.028Z"),array: [],obj: {_id: 7164,str: "Computer revolutionary Industrial",date: new Date("2018-09-05T22:28:50.164Z"),obj: {}}},35986],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7165,str: "Incredible Frozen Chicken systemic",date: new Date("2018-09-05T23:09:17.880Z"),array: ["white withdrawal Benin",6707,46692,[],"Bacon content Ergonomic",new Date("2018-09-06T14:01:04.585Z"),74535,31819,new Date("2018-09-06T15:02:16.922Z"),{_id: 7166,str: "Persevering",num: 532,date: new Date("2018-09-06T07:48:50.421Z"),array: ["haptic Tasty Frozen Bike responsive"],obj: {_id: 7167,num: 71471,date: new Date("2018-09-05T23:55:16.988Z"),obj: {}}},new Date("2018-09-06T02:38:17.478Z"),83276,new Date("2018-09-06T10:17:09.789Z"),{_id: 7168,date: new Date("2018-09-06T06:15:53.091Z"),array: [],obj: {}},92831],obj: {_id: 7169,str: "Monaco",num: 95467,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7170,str: "copying copying Som",num: 64245,date: new Date("2018-09-06T08:12:51.850Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7171,num: 82505,date: new Date("2018-09-06T11:56:20.166Z"),array: ["ubiquitous",new Date("2018-09-06T10:16:45.240Z"),70482,"Utah Netherlands Antillian Guilder Corporate",new Date("2018-09-06T13:15:14.369Z"),[],"zero administration empowering connecting",new Date("2018-09-06T15:01:05.285Z"),new Date("2018-09-06T11:02:15.769Z")],obj: {_id: 7172,str: "black web-enabled Tools",num: 54229,date: new Date("2018-09-05T20:22:14.281Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7173,str: "Refined Investor Pants",num: 12097,date: new Date("2018-09-06T00:43:41.465Z"),array: [new Date("2018-09-06T05:34:52.790Z"),"Global Money Market Account Palestinian Territory",67703,33264,new Date("2018-09-05T21:00:15.505Z"),"Northern Mariana Islands",{_id: 7174,str: "parse",num: 4452,date: new Date("2018-09-06T05:34:13.564Z"),array: [{_id: 7175,str: "Handcrafted Advanced New Mexico",num: 34940,date: new Date("2018-09-06T13:12:57.493Z"),obj: {_id: 7176,num: 31774,date: new Date("2018-09-06T07:21:00.098Z"),obj: {}}},"Saint Vincent and the Grenadines ivory Bhutan",34976,58201,[[],new Date("2018-09-05T20:40:20.824Z"),{_id: 7177,str: "Shoes Generic Granite Computer",array: [],obj: {_id: 7178,str: "Manat",date: new Date("2018-09-06T11:51:19.448Z"),array: [],obj: {}}},41738],new Date("2018-09-05T20:27:05.844Z"),[]],obj: {_id: 7179,array: ["Bermuda Turkmenistan pink"]}},["Incredible Springs"]]});
    },

    function(coll) {
        return coll.insert({_id: 7180,str: "Architect Corporate",num: 78192,array: [{_id: 7181,num: 75541,date: new Date("2018-09-06T08:57:23.141Z"),array: [],obj: {}},77850,63231,41744,new Date("2018-09-06T08:15:16.449Z"),new Date("2018-09-05T21:29:23.642Z"),{_id: 7182,str: "Berkshire Auto Loan Account",num: 5056,date: new Date("2018-09-06T02:17:35.013Z"),obj: {}},57463,[],"withdrawal"],obj: {_id: 7183,str: "Personal Loan Account Gorgeous redundant"}});
    },

    function(coll) {
        return coll.insert({_id: 7184,str: "Motorway solid state Grocery",num: 30266,date: new Date("2018-09-06T00:11:16.672Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7185,str: "invoice mission-critical",num: 28400,date: new Date("2018-09-06T07:36:53.879Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7186,str: "Incredible Fresh Salad cutting-edge Virginia",num: 28762,date: new Date("2018-09-06T13:22:41.316Z"),array: [new Date("2018-09-05T22:22:21.092Z"),"initiative moderator",[new Date("2018-09-06T00:14:56.359Z"),43476],new Date("2018-09-06T19:39:41.307Z"),new Date("2018-09-05T22:44:09.162Z"),"invoice Ergonomic","Branding Licensed full-range",75383,[],[],44194,7814],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7187,str: "Refined extend North Carolina",num: 11826,date: new Date("2018-09-06T19:17:50.941Z"),array: [],obj: {_id: 7188,str: "Bermuda backing up",num: 69322,date: new Date("2018-09-05T20:55:29.183Z"),array: ["Handcrafted Wooden Tuna",60331,new Date("2018-09-06T02:05:15.448Z"),[new Date("2018-09-06T06:54:02.350Z")],56167,[],{_id: 7189,str: "Legacy Gorgeous",date: new Date("2018-09-06T13:15:23.573Z"),array: ["Tools"],obj: {}},51158,46499,"customer loyalty wireless",new Date("2018-09-06T07:08:46.185Z"),"web-enabled Orchestrator",new Date("2018-09-06T13:23:06.096Z")],obj: {_id: 7190,array: ["XML Pants",[],1639]}}});
    },

    function(coll) {
        return coll.insert({_id: 7191,str: "synthesize COM Streamlined",num: 67479,date: new Date("2018-09-06T01:18:48.541Z"),array: [87222]});
    },

    function(coll) {
        return coll.insert({_id: 7192,str: "Frozen Licensed driver",num: 56303,date: new Date("2018-09-06T12:24:27.781Z"),array: [[],{_id: 7193,str: "hacking Supervisor Refined Wooden Hat",date: new Date("2018-09-06T03:55:53.717Z"),array: [new Date("2018-09-06T17:36:17.454Z"),["bandwidth","Rand Product New Zealand",33384],new Date("2018-09-05T22:40:02.515Z")],obj: {}},79121,{_id: 7194,str: "USB",num: 68813,array: [new Date("2018-09-06T17:29:37.392Z"),31461],obj: {_id: 7195,num: 94147,date: new Date("2018-09-06T19:24:04.759Z")}},[],59646,59231,"virtual Borders parse",{_id: 7196,date: new Date("2018-09-06T19:22:55.041Z"),array: [],obj: {_id: 7197,str: "Brazilian Real Borders",num: 37934,array: [],obj: {}}},45494],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7198,str: "Intelligent Fresh Mouse array",num: 37,date: new Date("2018-09-06T16:50:36.966Z"),array: ["withdrawal copy","challenge",16852,new Date("2018-09-06T02:55:08.931Z"),[],19279,{_id: 7199,num: 32022,date: new Date("2018-09-06T03:43:05.589Z"),array: [[],61221],obj: {_id: 7200,str: "Assurance withdrawal",num: 32355,date: new Date("2018-09-06T06:49:01.121Z"),array: [{_id: 7201,str: "Maine cross-platform knowledge base",date: new Date("2018-09-06T05:55:40.555Z"),array: [new Date("2018-09-06T04:21:20.501Z")],obj: {}},99867,"Ports Borders Uganda"],obj: {_id: 7202,num: 23709,date: new Date("2018-09-06T14:45:51.980Z"),array: [],obj: {}}}},"Burundi digital Human",{_id: 7203,num: 16457,date: new Date("2018-09-06T09:21:38.191Z"),obj: {}},new Date("2018-09-06T09:56:29.154Z"),[],new Date("2018-09-06T00:59:15.580Z")]});
    },

    function(coll) {
        return coll.insert({_id: 7204,str: "Rubber",num: 22184,date: new Date("2018-09-06T14:33:17.619Z"),array: [new Date("2018-09-06T00:05:52.675Z"),40711,[],60220,"target","Tools Mission Home Loan Account",new Date("2018-09-05T22:58:56.872Z"),{_id: 7205,str: "paradigm",num: 8638,date: new Date("2018-09-06T13:52:26.863Z"),array: [],obj: {_id: 7206,str: "supply-chains",date: new Date("2018-09-06T17:29:20.535Z"),obj: {_id: 7207,str: "user-centric Cotton enterprise",date: new Date("2018-09-05T21:54:09.165Z"),obj: {}}}},48669],obj: {_id: 7208,str: "Refined B2B",num: 87478,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7209,str: "copy",num: 49247,date: new Date("2018-09-06T11:53:10.821Z"),obj: {_id: 7210,str: "Canada Guarani",num: 66581,date: new Date("2018-09-05T22:51:22.321Z"),array: [new Date("2018-09-06T08:29:23.997Z"),"Cambridgeshire",[],new Date("2018-09-06T05:30:57.143Z"),9536,34339,47750],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7211,str: "Grocery virtual navigate",num: 4441,date: new Date("2018-09-06T16:07:02.787Z"),array: [],obj: {_id: 7212,str: "Future-proofed",num: 43945,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7213,str: "Trinidad and Tobago Dollar metrics",num: 94795,array: [],obj: {_id: 7214,str: "Coordinator",num: 10510,date: new Date("2018-09-06T19:44:03.320Z"),array: ["tan Team-oriented THX",new Date("2018-09-06T01:39:12.400Z"),"functionalities",88791,new Date("2018-09-06T01:05:01.263Z"),{_id: 7215,num: 16095,date: new Date("2018-09-06T09:37:09.043Z"),obj: {}},"Idaho Trail",33276,76514,[93268,[]]]}});
    },

    function(coll) {
        return coll.insert({_id: 7216,str: "ability withdrawal Direct",num: 80421,date: new Date("2018-09-06T07:24:04.764Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7217,str: "Savings Account Norwegian Krone Auto Loan Account",num: 35559,date: new Date("2018-09-06T05:10:19.139Z"),array: ["Planner","backing up",new Date("2018-09-06T19:47:45.380Z"),{_id: 7218,str: "Mouse Computers",num: 12336,date: new Date("2018-09-06T08:17:15.411Z"),array: [],obj: {}},76220,32293,[],[new Date("2018-09-06T13:10:13.181Z"),20184,74448,new Date("2018-09-06T02:59:40.823Z"),"Malaysia real-time Organized",new Date("2018-09-06T11:18:25.464Z"),{_id: 7219,num: 4589,date: new Date("2018-09-06T14:30:56.553Z"),array: [],obj: {}}],{_id: 7220,str: "Licensed Concrete Ball",num: 98186,array: [40654],obj: {_id: 7221,str: "interfaces calculate",num: 75333,obj: {_id: 7222,str: "real-time Home",date: new Date("2018-09-06T03:23:52.358Z"),array: [88972,15168]}}}]});
    },

    function(coll) {
        return coll.insert({_id: 7223,str: "Fantastic",num: 27092,date: new Date("2018-09-06T13:25:54.359Z"),array: ["Bangladesh throughput Soft",new Date("2018-09-06T10:32:34.348Z"),"systems","protocol panel Identity",56887,new Date("2018-09-06T18:04:41.890Z"),5883,"Small Principal solution-oriented",new Date("2018-09-06T06:25:07.382Z"),92895,{_id: 7224,str: "Investment Account",date: new Date("2018-09-06T11:56:58.684Z"),array: [],obj: {}},"Mobility Metal",[]],obj: {_id: 7225,str: "extranet",num: 72494,obj: {_id: 7226,date: new Date("2018-09-06T16:31:27.902Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 7227,str: "Egypt Licensed Fresh Fish",num: 2544,date: new Date("2018-09-06T06:29:10.198Z"),array: [new Date("2018-09-06T11:32:36.862Z"),new Date("2018-09-06T16:26:00.933Z"),33560,"Reverse-engineered innovative Money Market Account",new Date("2018-09-06T00:20:38.350Z")],obj: {_id: 7228,str: "incubate experiences",num: 55008,array: [{_id: 7229,str: "didactic Chips",num: 85505,date: new Date("2018-09-06T15:37:31.525Z"),obj: {_id: 7230,array: []}},"Kina exploit",71724,{_id: 7231,str: "synthesize Buckinghamshire",num: 98369,date: new Date("2018-09-06T12:58:34.855Z"),obj: {}},"Global Synchronised generating",{_id: 7232,num: 87305,date: new Date("2018-09-06T18:26:58.952Z"),array: [],obj: {_id: 7233,str: "revolutionary Kids",date: new Date("2018-09-06T10:50:08.889Z"),array: [82495,[],"Tasty Cotton Chair Buckinghamshire",[]]}},[new Date("2018-09-06T14:05:37.251Z"),new Date("2018-09-06T09:30:11.120Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7234,str: "leverage system",num: 48062,date: new Date("2018-09-06T08:29:14.790Z"),obj: {_id: 7235,str: "success Architect",num: 70115,date: new Date("2018-09-06T06:46:39.050Z"),array: ["Toys",87576,"Moldovan Leu infrastructures Avon",new Date("2018-09-06T08:07:41.202Z"),12470,"Nevada",{_id: 7236,str: "Administrator Multi-channelled",array: []},8334,[42689],new Date("2018-09-06T01:00:37.500Z"),["alliance leading-edge e-markets","neural"]],obj: {_id: 7237,num: 93437,date: new Date("2018-09-06T11:25:19.943Z"),array: [[],new Date("2018-09-06T08:54:53.422Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 7238,str: "Checking Account Kids Trace",num: 40668,date: new Date("2018-09-06T17:13:40.040Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7239,str: "clicks-and-mortar driver",num: 96551,date: new Date("2018-09-06T10:02:46.095Z"),array: [new Date("2018-09-06T02:07:33.188Z"),"Trafficway Personal Loan Account Customizable",55868,63842,new Date("2018-09-06T07:05:49.502Z"),new Date("2018-09-06T11:13:29.360Z"),18468,[],new Date("2018-09-06T14:02:00.675Z"),"Estate synergize PCI"],obj: {_id: 7240,date: new Date("2018-09-06T07:40:06.713Z"),array: [[],"Pakistan Rupee",[new Date("2018-09-06T15:52:08.259Z")],"Division Incredible Architect",new Date("2018-09-06T18:23:14.960Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7241,str: "Intelligent",num: 91265,array: ["open system Massachusetts","pixel","matrix synthesizing SMS",22226,new Date("2018-09-05T23:54:31.877Z"),{_id: 7242,str: "Integration productize Bahamas",num: 7373,date: new Date("2018-09-06T08:49:33.901Z"),array: [24971,2240,{_id: 7243,str: "Orchestrator Macao",num: 1848,date: new Date("2018-09-05T21:23:44.271Z"),array: [],obj: {}},21251,new Date("2018-09-06T03:05:20.126Z"),[]],obj: {_id: 7244,str: "Designer mindshare",num: 57031,date: new Date("2018-09-06T04:54:47.883Z"),array: []}},"Bacon Fish Granite",new Date("2018-09-06T04:46:30.780Z"),new Date("2018-09-06T17:32:42.447Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7245,str: "payment United States Minor Outlying Islands Vermont",num: 71986,date: new Date("2018-09-05T20:11:39.014Z"),array: ["Creative generating hack",[],"Cambridgeshire Progressive Practical Soft Pants",new Date("2018-09-06T08:17:45.233Z"),{_id: 7246,str: "Branding Exclusive",date: new Date("2018-09-06T17:13:39.251Z"),array: [],obj: {_id: 7247,date: new Date("2018-09-05T20:10:34.172Z"),obj: {_id: 7248,str: "Product Quality",num: 36510,obj: {}}}},19037,new Date("2018-09-06T12:32:50.397Z"),"application",[{_id: 7249,str: "Algerian Dinar",num: 67531,date: new Date("2018-09-06T08:57:27.226Z"),array: []}],"sensor Rapids 1080p",74886],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7250,str: "maximize success",num: 33594,date: new Date("2018-09-06T19:52:50.628Z"),array: [54628,{_id: 7251,str: "National",date: new Date("2018-09-05T21:43:26.301Z"),array: [],obj: {_id: 7252,str: "Investment Account transmitting Programmable",num: 54198,array: [],obj: {_id: 7253,str: "Applications fuchsia Industrial",num: 67132,date: new Date("2018-09-06T12:02:43.500Z"),obj: {}}}},new Date("2018-09-05T20:14:51.020Z"),9643,"withdrawal synthesizing Parkways",new Date("2018-09-06T18:34:00.439Z"),"leverage Awesome Steel Gloves","Games program synergistic","Plains payment",[new Date("2018-09-06T04:50:26.326Z")],"Usability",{_id: 7254,num: 19175,date: new Date("2018-09-05T22:38:11.764Z"),array: [],obj: {_id: 7255,str: "port Engineer Self-enabling",num: 65591,array: [{_id: 7256,date: new Date("2018-09-06T02:47:28.052Z"),array: []},99721],obj: {}}},{_id: 7257,str: "benchmark action-items",num: 20570,date: new Date("2018-09-06T13:51:19.378Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7258,str: "Cambridgeshire",num: 25801,date: new Date("2018-09-06T19:01:04.100Z"),array: [new Date("2018-09-06T07:50:35.361Z"),61311,new Date("2018-09-06T15:55:59.480Z"),"synthesize upward-trending",75513,"parsing Expanded",new Date("2018-09-06T05:02:36.469Z"),8032,"withdrawal Soft Wooden",53304,"Keyboard Direct Creative",new Date("2018-09-06T16:39:32.858Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7259,str: "Money Market Account Multi-lateral",num: 24630,date: new Date("2018-09-06T13:01:57.312Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7260,str: "systems",num: 57703,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7261,str: "Pants",num: 40851,date: new Date("2018-09-06T10:12:11.535Z"),array: [72556,46992,new Date("2018-09-06T02:14:35.657Z"),new Date("2018-09-05T21:52:05.608Z"),"San Marino SQL","Senior",{_id: 7262,str: "Chief",num: 33733,array: [],obj: {_id: 7263,date: new Date("2018-09-05T21:34:49.874Z"),array: [],obj: {}}},[{_id: 7264,str: "Kentucky Rapid Facilitator",num: 12547,obj: {_id: 7265,date: new Date("2018-09-06T12:00:30.607Z")}},24822,"AGP Maine calculating",new Date("2018-09-06T04:00:36.612Z"),"Steel"],[],93299,new Date("2018-09-06T07:16:55.082Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7266,str: "reciprocal",num: 65685,date: new Date("2018-09-06T03:14:36.242Z"),array: [],obj: {_id: 7267,num: 4382,date: new Date("2018-09-05T21:28:58.825Z"),array: [11962,4367,new Date("2018-09-06T01:47:05.549Z"),new Date("2018-09-05T23:48:14.122Z"),{_id: 7268,str: "Forward SMTP Granite",num: 90962,array: [],obj: {}},61435,"Fresh Malagasy Ariary Creative","Chief",[[],"Rustic Plains Algerian Dinar"],new Date("2018-09-05T23:39:03.586Z"),"Metrics Fish deposit",2101,new Date("2018-09-06T12:20:25.598Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 7269,str: "Developer",num: 83381,date: new Date("2018-09-06T04:12:39.373Z"),array: [],obj: {_id: 7270,str: "Solutions Lead",num: 40376,date: new Date("2018-09-06T04:48:01.175Z"),array: [[],"USB Albania",85380,75608,79445,{_id: 7271,num: 59617,date: new Date("2018-09-06T09:13:25.981Z"),array: [new Date("2018-09-06T15:42:48.406Z")]},[],"empowering COM","Intelligent Wooden Computer Seamless data-warehouse",new Date("2018-09-05T23:09:45.368Z"),new Date("2018-09-06T12:53:49.145Z"),"Chips invoice Kentucky"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7272,date: new Date("2018-09-06T15:34:55.292Z"),array: [19119,[],81882],obj: {_id: 7273,str: "Ports SSL deploy",num: 69445,date: new Date("2018-09-06T01:11:03.627Z"),array: ["South Carolina",{_id: 7274,num: 65975,obj: {}},new Date("2018-09-05T21:25:33.138Z"),new Date("2018-09-06T05:48:22.031Z"),new Date("2018-09-06T15:53:31.791Z"),"dedicated Liaison Meadow",new Date("2018-09-05T23:30:15.925Z"),53882,"Plains",new Date("2018-09-05T22:13:33.412Z"),[[]],{_id: 7275,str: "Afghani",num: 5573,date: new Date("2018-09-05T20:32:47.084Z"),obj: {_id: 7276,str: "Baby Bangladesh",num: 64099,date: new Date("2018-09-06T11:33:29.060Z"),array: []}},19299,95752],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7277,str: "Orchestrator quantify Gibraltar",num: 68093,date: new Date("2018-09-06T16:17:28.883Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7278,str: "Shirt Glens Savings Account",num: 69035,date: new Date("2018-09-06T02:38:13.354Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7279,str: "grey zero tolerance",num: 6618,date: new Date("2018-09-05T21:45:44.691Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7280,str: "convergence Outdoors",num: 48293,date: new Date("2018-09-06T14:35:23.115Z"),array: ["action-items portal local area network",new Date("2018-09-06T01:20:18.700Z"),{_id: 7281,str: "Multi-layered Books hardware",num: 40973,date: new Date("2018-09-05T20:21:52.984Z")},31723,"discrete Checking Account Pakistan Rupee",52356,"framework SCSI",{_id: 7282,str: "methodologies Specialist",num: 92688,date: new Date("2018-09-06T06:56:10.917Z"),obj: {}},29508,new Date("2018-09-06T17:28:30.914Z"),new Date("2018-09-06T02:38:26.184Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7283,str: "Steel Croatian Kuna Estate",num: 11428,date: new Date("2018-09-06T17:44:49.379Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7284,str: "implementation plum",num: 9585,date: new Date("2018-09-05T20:30:38.342Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7285,str: "Assistant Handmade Cotton Soap",num: 22761,date: new Date("2018-09-06T03:16:18.976Z"),array: [new Date("2018-09-06T14:43:01.227Z"),{_id: 7286,str: "ADP invoice",num: 46701,date: new Date("2018-09-05T22:53:50.396Z"),array: [],obj: {}},"deposit back up","framework Research generating",3964,new Date("2018-09-06T12:09:24.420Z"),98270,new Date("2018-09-06T04:43:17.870Z"),new Date("2018-09-05T23:47:32.089Z"),5612,[]],obj: {_id: 7287,num: 59589,date: new Date("2018-09-05T20:42:11.145Z"),array: [new Date("2018-09-06T07:48:03.353Z"),new Date("2018-09-06T16:32:17.749Z"),["Borders Director payment",93750]],obj: {_id: 7288,str: "compelling array",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7289,str: "Borders Home Loan Account compressing",num: 51479,date: new Date("2018-09-06T12:02:50.901Z"),array: [],obj: {_id: 7290,str: "ivory Customer bluetooth",num: 68485,date: new Date("2018-09-06T01:22:49.443Z"),array: ["hacking",57907,new Date("2018-09-06T00:52:53.460Z"),new Date("2018-09-06T10:41:02.236Z"),"unleash Home",39289,{_id: 7291,str: "salmon scalable Personal Loan Account",num: 27535,array: [[],"Money Market Account Cotton"],obj: {_id: 7292,num: 52797,date: new Date("2018-09-06T11:52:34.683Z"),array: []}},new Date("2018-09-05T23:16:48.043Z"),74553,[{_id: 7293,date: new Date("2018-09-06T19:35:25.943Z"),array: ["Borders schemas Mobility"]},{_id: 7294,num: 52266,date: new Date("2018-09-06T03:26:20.550Z"),array: [new Date("2018-09-05T23:23:12.233Z"),{_id: 7295,str: "parsing",num: 89731,obj: {}},13762],obj: {_id: 7296,str: "Borders",date: new Date("2018-09-06T13:35:09.050Z"),obj: {_id: 7297,str: "Alabama Unbranded Frozen Computer",date: new Date("2018-09-05T22:24:51.245Z"),array: [],obj: {}}}}],16785,new Date("2018-09-06T18:31:50.044Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7298,str: "utilize",num: 59456,date: new Date("2018-09-06T16:08:43.658Z"),array: ["wireless card",new Date("2018-09-06T06:34:51.826Z"),new Date("2018-09-06T04:59:09.072Z"),25148,12370,[],new Date("2018-09-06T01:01:04.091Z"),"users generate","Personal Loan Account"]});
    },

    function(coll) {
        return coll.insert({_id: 7299,str: "Intranet Markets Dobra",num: 46194,date: new Date("2018-09-06T16:23:54.868Z"),array: ["XML copy",73927,new Date("2018-09-05T21:50:47.677Z"),{_id: 7300,str: "SDD Chips",num: 68352,date: new Date("2018-09-06T03:45:16.057Z"),array: [],obj: {}},new Date("2018-09-06T03:59:25.396Z"),53751,[],"Drive Regional",["Plains reboot",89927,"PNG Fresh",new Date("2018-09-06T04:20:05.833Z")],"Soft"],obj: {_id: 7301,date: new Date("2018-09-05T22:54:17.293Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7302,str: "Money Market Account",num: 51697,date: new Date("2018-09-06T07:42:37.763Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7303,str: "mobile generate",num: 35877,date: new Date("2018-09-06T04:29:56.229Z"),array: [12871,{_id: 7304,str: "Indian Rupee Ngultrum indexing",num: 85038,date: new Date("2018-09-06T09:02:26.679Z"),array: [],obj: {_id: 7305,str: "Sports Generic",num: 99207,date: new Date("2018-09-06T03:10:06.741Z"),array: [new Date("2018-09-06T14:53:01.771Z")],obj: {}}},[],"solutions Senior",29665,new Date("2018-09-06T02:21:37.448Z"),"Generic Steel Towels",{_id: 7306,date: new Date("2018-09-06T01:07:22.227Z"),obj: {}},["Avon"],new Date("2018-09-06T04:41:50.851Z"),{_id: 7307,str: "Bedfordshire",date: new Date("2018-09-06T09:19:07.137Z"),array: [],obj: {_id: 7308,str: "Personal Loan Account Ecuador multi-byte",num: 685}},26578]});
    },

    function(coll) {
        return coll.insert({_id: 7309,str: "coherent",num: 78332,date: new Date("2018-09-06T11:27:12.389Z"),array: ["B2C","Small",new Date("2018-09-06T10:20:56.971Z"),12050,"Corporate asynchronous",{_id: 7310,num: 85560,date: new Date("2018-09-06T12:18:36.761Z"),array: [],obj: {}},[],new Date("2018-09-06T09:21:12.737Z"),"Facilitator e-business emulation",53200],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7311,str: "granular",num: 27775,date: new Date("2018-09-06T08:18:06.188Z"),array: [],obj: {_id: 7312,str: "application mesh Kina",num: 52104,date: new Date("2018-09-06T02:03:58.367Z"),array: [{_id: 7313,str: "Platinum",array: [new Date("2018-09-05T22:24:41.516Z"),new Date("2018-09-06T05:24:01.544Z")],obj: {}},{_id: 7314,str: "secondary",num: 47403,date: new Date("2018-09-05T21:26:40.583Z"),array: [29847,22373],obj: {}},new Date("2018-09-06T16:14:19.995Z"),["Sleek Metal Bacon","maximized Interactions Practical Concrete Soap",{_id: 7315,num: 61616,obj: {}}],new Date("2018-09-06T14:13:28.349Z"),72794,"out-of-the-box","Computer bluetooth",[{_id: 7316,str: "Toys",date: new Date("2018-09-06T11:52:30.075Z"),array: []}],[],"Devolved hack",31990,71754],obj: {_id: 7317,num: 46746,obj: {_id: 7318,str: "Rustic Licensed Concrete Ball",num: 86243,date: new Date("2018-09-06T09:29:53.159Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 7319,str: "interface Director Liaison",num: 14844,date: new Date("2018-09-06T00:39:07.522Z"),array: [67906,{_id: 7320,str: "empowering azure navigate",num: 62383,date: new Date("2018-09-06T09:19:28.872Z"),obj: {_id: 7321,str: "Rustic Response",array: [],obj: {}}},new Date("2018-09-06T12:11:15.304Z"),59750,"yellow circuit Small","JSON integrate Lead",42029,new Date("2018-09-06T03:05:20.653Z")],obj: {_id: 7322,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7323,str: "bluetooth",num: 20995,array: [],obj: {_id: 7324,str: "feed synthesizing policy",num: 49089,array: [new Date("2018-09-06T18:49:06.092Z"),"Ergonomic Wooden Towels orange local area network",17045,74361,new Date("2018-09-06T07:15:51.589Z"),[],"Auto Loan Account Internal portals",66791,{_id: 7325,str: "black Central",num: 76904,date: new Date("2018-09-05T23:48:42.686Z"),obj: {}},"metrics Sports cross-platform","reboot programming Refined",68912,new Date("2018-09-05T22:53:27.784Z"),"leading edge navigate"]}});
    },

    function(coll) {
        return coll.insert({_id: 7326,num: 33286,date: new Date("2018-09-05T20:55:15.611Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7327,str: "Sausages transitional Louisiana",date: new Date("2018-09-06T11:23:39.811Z"),obj: {_id: 7328,str: "Outdoors Chicken",num: 23828,date: new Date("2018-09-06T18:34:30.279Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7329,str: "Intuitive Branch",num: 61995,date: new Date("2018-09-06T11:13:32.870Z"),array: [],obj: {_id: 7330,str: "Future Georgia Awesome Frozen Chips",num: 18356,date: new Date("2018-09-06T09:32:39.930Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7331,str: "Berkshire",num: 47307,date: new Date("2018-09-06T12:43:37.446Z"),array: ["mesh overriding SQL",new Date("2018-09-06T18:04:56.039Z"),"Auto Loan Account withdrawal fuchsia",35354,{_id: 7332,str: "Savings Account",num: 79870,date: new Date("2018-09-06T01:05:05.126Z"),array: [],obj: {_id: 7333,str: "envisioneer Industrial",date: new Date("2018-09-05T19:59:25.599Z"),array: [{_id: 7334,str: "Tactics Coordinator generating",num: 91186,date: new Date("2018-09-05T20:33:13.537Z"),array: [],obj: {}},"Rubber Officer",55958,58312],obj: {_id: 7335,str: "Savings Account experiences",obj: {}}}},["Incredible Cotton Sausages teal",5784,new Date("2018-09-06T00:24:53.338Z")],"networks Fantastic Savings Account",new Date("2018-09-06T04:26:26.279Z"),new Date("2018-09-06T05:01:42.671Z"),{_id: 7336,str: "Personal Loan Account solutions",num: 61000,date: new Date("2018-09-05T20:09:11.754Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 7337,str: "Industrial",num: 75130,date: new Date("2018-09-06T12:56:00.115Z"),array: ["Auto Loan Account Malagasy Ariary",new Date("2018-09-06T03:26:19.254Z"),20576,31935,[],14995,{_id: 7338,str: "clear-thinking Wooden",num: 81994,array: [],obj: {_id: 7339,num: 42411,array: ["neural"]}},[new Date("2018-09-06T06:39:28.716Z"),{_id: 7340,str: "Incredible sensor",date: new Date("2018-09-06T08:50:36.933Z"),obj: {}},"index"],new Date("2018-09-06T11:38:08.157Z"),new Date("2018-09-06T00:15:40.495Z"),"Refined",{_id: 7341,str: "deposit application",num: 89135,date: new Date("2018-09-05T21:05:06.153Z"),array: [91583],obj: {}},"Unbranded Plastic Pants Corporate Multi-channelled"]});
    },

    function(coll) {
        return coll.insert({_id: 7342,str: "Analyst",num: 11979,date: new Date("2018-09-06T04:41:14.890Z"),array: [{_id: 7343,str: "Tuna",num: 5988,array: [],obj: {_id: 7344,str: "Future Rwanda Franc parallelism",num: 46674,date: new Date("2018-09-06T08:33:13.020Z"),array: ["quantifying enhance"],obj: {_id: 7345,str: "Ireland mobile Table",date: new Date("2018-09-06T05:33:34.209Z"),array: [],obj: {_id: 7346,str: "Auto Loan Account",num: 16848,date: new Date("2018-09-06T16:40:06.946Z"),array: [],obj: {}}}}},new Date("2018-09-05T21:27:10.935Z"),[new Date("2018-09-06T16:31:26.081Z"),721],99495,"tangible Michigan",new Date("2018-09-06T18:44:35.765Z"),[55392],new Date("2018-09-06T01:55:48.955Z"),95591,"Buckinghamshire","Towels Handcrafted",[{_id: 7347,str: "Handmade Steel Tuna Intuitive PCI",num: 38463,obj: {}},4861,new Date("2018-09-06T12:41:52.174Z"),"Car e-business Dam",49345]]});
    },

    function(coll) {
        return coll.insert({_id: 7348,str: "Divide Somali Shilling",num: 58052,date: new Date("2018-09-06T17:37:00.040Z"),array: [40026,[new Date("2018-09-05T23:01:04.478Z"),new Date("2018-09-06T13:20:56.452Z"),"tan internet solution supply-chains"],"Division","Clothing Technician override",34150,65870,53088],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7349,num: 74281,date: new Date("2018-09-06T01:51:48.798Z"),array: [72038,"Reduced Awesome multi-byte","synergies navigate protocol",new Date("2018-09-05T22:14:05.501Z"),new Date("2018-09-06T05:18:20.417Z"),new Date("2018-09-06T19:36:21.304Z"),new Date("2018-09-06T19:16:08.088Z"),13068,new Date("2018-09-06T14:48:49.806Z"),["Supervisor"],[],99497,{_id: 7350,str: "front-end",num: 46503,date: new Date("2018-09-06T00:26:30.867Z"),array: [],obj: {_id: 7351,str: "tan",num: 56360,array: [],obj: {_id: 7352,str: "transmitting",date: new Date("2018-09-06T08:33:33.118Z"),array: [{_id: 7353,num: 47926,date: new Date("2018-09-05T20:22:24.809Z"),obj: {}}],obj: {_id: 7354,str: "Hat Beauty gold",num: 58006,date: new Date("2018-09-06T16:08:00.861Z"),obj: {}}}}},{_id: 7355,str: "Fantastic Refined Communications",array: []},new Date("2018-09-06T03:19:49.302Z")]});
    },

    function(coll) {
        return coll.insert({_id: 7356,str: "Internal",num: 84916,date: new Date("2018-09-06T05:20:57.613Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7357,str: "synergize",num: 43689,date: new Date("2018-09-05T23:26:13.257Z"),array: [],obj: {_id: 7358,str: "Cotton",num: 63048,array: [83248,"Alaska 24/7 innovative","generating calculating",61708,58441,{_id: 7359,str: "program",num: 72314,date: new Date("2018-09-05T21:36:16.705Z"),array: [new Date("2018-09-06T04:41:46.563Z"),[],92008],obj: {}},new Date("2018-09-06T03:42:27.961Z"),"Branding Washington","Avon"],obj: {_id: 7360,date: new Date("2018-09-05T23:37:19.991Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7361,str: "reinvent North Dakota user-facing",num: 35095,date: new Date("2018-09-06T17:19:36.985Z"),array: [new Date("2018-09-06T10:44:59.552Z"),[new Date("2018-09-06T18:07:48.216Z"),22171,"Coordinator Pants"],69139,{_id: 7362,str: "Plastic",num: 75497,date: new Date("2018-09-06T07:45:38.671Z"),array: [[],"Creative"],obj: {}},new Date("2018-09-06T01:11:58.700Z"),93695,[],new Date("2018-09-06T04:04:41.205Z"),new Date("2018-09-06T09:31:22.096Z"),{_id: 7363,str: "e-markets Mobility",date: new Date("2018-09-06T12:54:28.486Z"),array: [],obj: {_id: 7364,str: "Programmable Refined",num: 65981,array: [{_id: 7365,num: 32185,date: new Date("2018-09-06T09:18:39.951Z")}]}},{_id: 7366,num: 28034,date: new Date("2018-09-06T00:44:12.069Z"),array: [new Date("2018-09-06T06:46:45.023Z"),"Industrial contingency auxiliary",38808],obj: {_id: 7367,str: "zero tolerance violet Intelligent Plastic Soap",date: new Date("2018-09-06T05:37:17.256Z"),obj: {}}},13454,"Romania connect Shirt"]});
    },

    function(coll) {
        return coll.insert({_id: 7368,str: "cohesive front-end",num: 4157,date: new Date("2018-09-05T19:58:23.313Z"),array: [10053,69121,new Date("2018-09-06T14:29:24.027Z"),"collaborative AGP",65773,[],new Date("2018-09-06T07:41:51.615Z"),["Generic Plastic Sausages innovative"],{_id: 7369,str: "withdrawal",num: 73414,date: new Date("2018-09-06T18:31:36.955Z"),array: [],obj: {_id: 7370,str: "Security Cotton",date: new Date("2018-09-06T04:47:20.653Z"),array: [],obj: {}}},90540,"Architect Lead"]});
    },

    function(coll) {
        return coll.insert({_id: 7371,str: "violet generating",num: 4244,date: new Date("2018-09-06T06:38:17.544Z"),array: [],obj: {_id: 7372,str: "Configurable",num: 67387,date: new Date("2018-09-06T13:03:07.391Z"),array: [new Date("2018-09-05T21:15:28.175Z"),new Date("2018-09-06T03:53:13.476Z"),"Georgia PCI synthesize",53655,"sky blue",97839,{_id: 7373,str: "invoice program Consultant",date: new Date("2018-09-06T17:19:04.694Z"),array: [new Date("2018-09-06T07:11:40.579Z"),19488,new Date("2018-09-06T16:52:16.256Z")],obj: {}},20736,[],"Sleek Concrete Shirt compress",["Global",27284]]}});
    },

    function(coll) {
        return coll.insert({_id: 7374,str: "bypass Avon Silver",num: 8023,date: new Date("2018-09-06T02:43:59.423Z"),array: [21152,"didactic Forward bifurcated","Table Port Hungary",[],"Refined Frozen Soap navigate Strategist","incentivize morph parallelism",{_id: 7375,num: 32661,date: new Date("2018-09-06T01:14:17.024Z"),array: [{_id: 7376,str: "attitude-oriented cutting-edge channels",num: 3698,array: []}],obj: {}},new Date("2018-09-05T22:15:59.130Z"),[new Date("2018-09-06T09:00:56.411Z")],29076,[],92062,new Date("2018-09-06T18:59:48.228Z"),61185,9253],obj: {_id: 7377,str: "Spur capacity",num: 61142,date: new Date("2018-09-06T10:10:21.183Z"),obj: {_id: 7378,str: "1080p initiatives",num: 70073,date: new Date("2018-09-06T07:57:08.152Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 7379,str: "Summit Borders Norwegian Krone",date: new Date("2018-09-06T15:55:31.660Z"),array: [new Date("2018-09-06T11:12:46.571Z"),"calculating Buckinghamshire",56712,new Date("2018-09-06T02:48:59.477Z"),"Wooden",63712,new Date("2018-09-06T00:28:15.612Z"),{_id: 7380,str: "leverage Handmade",num: 27768,date: new Date("2018-09-06T02:52:54.641Z"),array: [97400,{_id: 7381,str: "withdrawal",date: new Date("2018-09-06T00:51:46.085Z"),obj: {}},"Maine Yuan Renminbi"],obj: {_id: 7382,str: "AGP",num: 49746,date: new Date("2018-09-05T23:16:38.750Z"),array: [],obj: {}}},[33076],new Date("2018-09-06T11:12:23.856Z"),[73768,"synthesize"],[]]});
    },

    function(coll) {
        return coll.insert({_id: 7383,str: "Iceland",date: new Date("2018-09-06T09:59:44.288Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7384,str: "Licensed Rubber Gloves e-services integrate",num: 11194,date: new Date("2018-09-06T04:54:07.728Z"),array: [77769,"quantify National Buckinghamshire","secondary",new Date("2018-09-06T11:27:58.174Z"),{_id: 7385,str: "bricks-and-clicks Credit Card Account",num: 26551,date: new Date("2018-09-05T20:50:45.157Z"),array: [{_id: 7386,str: "open-source",num: 14250,date: new Date("2018-09-06T06:20:36.774Z"),array: [],obj: {_id: 7387,num: 26655,date: new Date("2018-09-06T18:37:04.076Z"),obj: {_id: 7388,str: "Global Orchestrator input",date: new Date("2018-09-06T06:27:54.589Z"),array: []}}},58262,50612,[]],obj: {}},new Date("2018-09-06T13:15:55.726Z"),15733,new Date("2018-09-06T14:07:08.230Z"),"Plaza Assistant",new Date("2018-09-06T02:29:22.322Z"),"whiteboard Hat"]});
    },

    function(coll) {
        return coll.insert({_id: 7389,str: "Soap deposit mindshare",num: 99999,date: new Date("2018-09-06T08:22:06.994Z"),array: [],obj: {_id: 7390,str: "synergy JBOD Bike",num: 68414,date: new Date("2018-09-06T00:18:41.429Z"),array: [],obj: {_id: 7391,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 7392,str: "Monitored",num: 91468,date: new Date("2018-09-06T08:39:56.081Z"),array: [{_id: 7393,str: "intermediate",array: [new Date("2018-09-06T17:34:03.826Z")]},71485,"card",new Date("2018-09-06T10:04:34.200Z"),new Date("2018-09-05T23:54:47.328Z"),{_id: 7394,str: "solid state",num: 90854,date: new Date("2018-09-06T01:10:42.144Z"),array: [58452,22339],obj: {_id: 7395,str: "Vietnam SMS",num: 3130,date: new Date("2018-09-06T12:23:09.099Z"),array: [],obj: {_id: 7396,num: 59773,date: new Date("2018-09-06T01:06:15.902Z"),obj: {}}}},[],new Date("2018-09-06T00:19:44.255Z"),"connect Avon","Won Lek","Developer payment",{_id: 7397,array: [],obj: {}},85219]});
    },

    function(coll) {
        return coll.insert({_id: 7398,str: "circuit Assimilated capability",num: 22830,date: new Date("2018-09-06T13:28:21.112Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7399,str: "dedicated Games",num: 7187,date: new Date("2018-09-06T11:47:35.000Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7400,str: "CSS",num: 31055,array: [new Date("2018-09-06T14:52:51.996Z"),new Date("2018-09-06T09:16:53.033Z"),91307,new Date("2018-09-06T18:57:58.701Z"),[],{_id: 7401,str: "THX Keyboard",num: 83066,date: new Date("2018-09-06T16:37:22.084Z"),array: [83599,17826],obj: {}},"Jordanian Dinar Computer Credit Card Account","payment",[2516],"invoice Junctions Afghanistan",{_id: 7402,num: 25109,date: new Date("2018-09-06T05:18:09.507Z")},{_id: 7403,str: "deposit digital",num: 91453,date: new Date("2018-09-06T04:28:53.052Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7404,str: "User-friendly payment scalable",num: 24472,date: new Date("2018-09-06T04:16:42.717Z"),array: [],obj: {_id: 7405,str: "Canadian Dollar Handmade Wooden Chicken system",num: 81382,date: new Date("2018-09-05T20:59:31.549Z"),array: ["Chips","Integration compress",{_id: 7406,str: "Ukraine",num: 80882,date: new Date("2018-09-06T00:20:28.686Z"),array: [20024,new Date("2018-09-06T10:31:38.947Z")],obj: {}},"silver initiatives redundant",[],{_id: 7407,str: "Avon Guarani",date: new Date("2018-09-06T06:42:25.165Z"),array: [60297,79578,[new Date("2018-09-06T00:45:37.893Z"),new Date("2018-09-05T23:44:38.197Z"),"Iranian Rial"]]},86297,14340,new Date("2018-09-06T04:39:41.567Z"),new Date("2018-09-06T11:57:13.295Z"),new Date("2018-09-05T21:11:17.018Z"),"Frozen Human synergize"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7408,str: "Industrial",num: 17833,date: new Date("2018-09-06T07:30:15.142Z"),array: ["Buckinghamshire Ranch",51127,[],[],{_id: 7409,str: "Bedfordshire bypassing Wisconsin",date: new Date("2018-09-06T07:59:00.557Z"),array: [new Date("2018-09-06T16:23:33.048Z"),66703,[97624]],obj: {}},"framework California deliver",new Date("2018-09-06T04:15:55.156Z"),"generate Soft zero defect",67820,"Avon",{_id: 7410,str: "incentivize multi-byte",num: 98535,date: new Date("2018-09-06T00:57:01.700Z"),array: [],obj: {_id: 7411,str: "Salad green Lilangeni",num: 13651,array: [new Date("2018-09-06T03:54:30.414Z")],obj: {}}},new Date("2018-09-06T01:46:29.555Z")]});
    },

    function(coll) {
        return coll.insert({_id: 7412,str: "Unbranded Fresh Sausages Frozen Canadian Dollar",num: 1263,date: new Date("2018-09-06T03:16:45.789Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7413,str: "Gorgeous Soft Tuna Lithuania",num: 78315,date: new Date("2018-09-06T15:21:55.138Z"),array: [],obj: {_id: 7414,str: "ubiquitous utilize",array: [[["SDD Computer Soap","Kroon matrix Kansas"],"Checking Account parsing",52958,40212],new Date("2018-09-06T11:07:45.697Z"),new Date("2018-09-06T10:43:10.943Z"),{_id: 7415,num: 97602,date: new Date("2018-09-06T14:50:06.238Z"),obj: {}},new Date("2018-09-06T18:46:46.393Z"),"Argentine Peso Shirt Communications",{_id: 7416,str: "violet Fantastic Plastic Table Associate",array: []},new Date("2018-09-06T08:13:47.519Z"),33341,"Interactions archive Checking Account",78591],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7417,str: "Bacon dot-com Concrete",date: new Date("2018-09-06T05:33:28.638Z"),array: [],obj: {_id: 7418,str: "Extensions",num: 13763,array: ["backing up Steel","deposit",new Date("2018-09-06T13:13:12.673Z"),new Date("2018-09-06T05:59:38.703Z"),new Date("2018-09-06T06:09:55.821Z"),{_id: 7419,str: "1080p silver",num: 55487,date: new Date("2018-09-06T18:19:06.945Z"),array: ["Tasty Soft Shoes Shoes",72277],obj: {}},49402,42538,75392,"Practical AGP Assistant",[],"bus deposit",{_id: 7420,num: 60865,date: new Date("2018-09-06T06:52:56.560Z")}]}});
    },

    function(coll) {
        return coll.insert({_id: 7421,str: "circuit",date: new Date("2018-09-06T13:38:36.522Z"),array: [51009,[82197,new Date("2018-09-06T16:27:32.979Z")],"Toys",{_id: 7422,str: "bypass",num: 53829,date: new Date("2018-09-06T01:23:20.102Z"),array: [],obj: {}},{_id: 7423,str: "Bike Down-sized",num: 95813,date: new Date("2018-09-06T01:48:38.985Z"),obj: {_id: 7424,num: 10263,date: new Date("2018-09-06T04:37:33.841Z"),array: [],obj: {}}},"Licensed Wooden Shoes Plastic deposit",[new Date("2018-09-06T10:42:30.140Z"),new Date("2018-09-06T16:36:43.745Z")],"Colorado Accounts Group",[98706,new Date("2018-09-05T22:23:48.694Z")],71304,"Administrator",63610,"Hills transmitter",89302]});
    },

    function(coll) {
        return coll.insert({_id: 7425,str: "Fantastic",num: 81504,date: new Date("2018-09-06T15:43:51.108Z"),array: [new Date("2018-09-06T14:51:17.966Z"),30728,new Date("2018-09-06T09:09:09.941Z"),"exuding","Plastic",49070,new Date("2018-09-06T00:42:11.546Z"),"Sleek Plastic Chair",{_id: 7426,str: "North Dakota Motorway Customer",num: 20727,date: new Date("2018-09-06T15:37:09.232Z"),array: [],obj: {}},new Date("2018-09-06T00:01:17.972Z")]});
    },

    function(coll) {
        return coll.insert({_id: 7427,str: "engage Investor",num: 36129,date: new Date("2018-09-05T21:23:30.640Z"),array: [],obj: {_id: 7428,str: "Berkshire",num: 54455,date: new Date("2018-09-05T20:00:31.631Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7429,str: "index programming",num: 84319,date: new Date("2018-09-06T09:40:01.655Z"),array: [],obj: {_id: 7430,str: "deliverables",num: 53086,date: new Date("2018-09-06T14:50:18.890Z"),array: [new Date("2018-09-06T05:16:57.420Z"),87276,"coherent budgetary management",51620,new Date("2018-09-06T15:08:39.861Z"),74626,[51678],{_id: 7431,num: 67594,obj: {}},new Date("2018-09-06T06:12:08.592Z"),"Incredible",new Date("2018-09-06T18:42:22.628Z"),"evolve Beauty"],obj: {_id: 7432,date: new Date("2018-09-06T12:23:58.008Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7433,str: "Czech Koruna hacking redefine",num: 85616,date: new Date("2018-09-06T01:45:58.961Z"),array: [90901,new Date("2018-09-06T06:59:21.738Z"),{_id: 7434,str: "payment enable",num: 24338,date: new Date("2018-09-06T09:13:44.209Z"),obj: {}},new Date("2018-09-06T15:39:21.221Z"),"Paradigm Tunnel Metal",{_id: 7435,num: 56537,array: [],obj: {}},41109,"open-source","Latvia action-items Fresh",new Date("2018-09-06T11:24:04.467Z")],obj: {_id: 7436,str: "monitor JBOD",array: [],obj: {_id: 7437,num: 89014,date: new Date("2018-09-06T05:38:56.843Z"),array: [[90117],"generate",60116,"Groves Berkshire Bedfordshire",[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 7438,str: "24/365 RSS",num: 50889,date: new Date("2018-09-06T17:58:54.853Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7439,str: "solid state",num: 16557,date: new Date("2018-09-06T01:25:21.608Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7440,str: "deposit syndicate",num: 98479,date: new Date("2018-09-06T11:51:50.227Z"),array: [new Date("2018-09-06T06:44:47.454Z"),new Date("2018-09-05T20:24:31.338Z"),73814,"Cambridgeshire back up index",95962,{_id: 7441,str: "Poland compressing embrace",num: 787,date: new Date("2018-09-06T01:24:40.025Z"),array: ["monitoring overriding",27945],obj: {}},"pink","back-end zero tolerance Applications",[],new Date("2018-09-06T15:23:55.139Z"),new Date("2018-09-05T23:39:19.748Z")],obj: {_id: 7442,date: new Date("2018-09-06T08:53:47.869Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7443,str: "mindshare Savings Account Bulgaria",num: 66264,date: new Date("2018-09-06T02:23:05.035Z"),array: ["connect Profound Small",new Date("2018-09-06T10:35:29.638Z"),"XSS customized override",new Date("2018-09-06T12:18:23.470Z"),[],49293,{_id: 7444,str: "recontextualize",num: 87727,date: new Date("2018-09-06T01:06:58.962Z"),array: ["fault-tolerant Incredible Wooden Shoes Handcrafted",70816,{_id: 7445,str: "Cloned",num: 11336,date: new Date("2018-09-06T03:25:31.785Z"),array: [],obj: {}}],obj: {_id: 7446,num: 28598,array: []}},[],[new Date("2018-09-06T08:02:56.584Z")],50262,54445,new Date("2018-09-06T13:24:20.548Z"),"lime"]});
    },

    function(coll) {
        return coll.insert({_id: 7447,str: "extensible Handcrafted deposit",num: 65525,date: new Date("2018-09-06T03:38:42.288Z"),array: [],obj: {_id: 7448,str: "Fantastic",date: new Date("2018-09-05T20:51:56.549Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7449,str: "Versatile Product",date: new Date("2018-09-06T01:26:17.123Z"),array: ["Auto Loan Account Sports mesh",31797,94566,"strategize Bedfordshire Fantastic Steel Pants",57606,new Date("2018-09-05T20:32:58.015Z"),new Date("2018-09-06T07:40:22.179Z"),5856,["Valleys RSS Vermont","facilitate",new Date("2018-09-06T12:37:36.342Z"),"Customizable"],{_id: 7450,str: "payment",num: 53620,date: new Date("2018-09-05T21:46:41.535Z"),obj: {_id: 7451,str: "fuchsia",num: 6989,date: new Date("2018-09-06T15:42:19.161Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7452,str: "Niue payment invoice",num: 31223,date: new Date("2018-09-06T04:18:57.162Z"),obj: {_id: 7453,str: "Metal",num: 9405,date: new Date("2018-09-05T23:26:55.655Z"),array: [new Date("2018-09-06T00:01:57.310Z"),new Date("2018-09-06T18:07:44.174Z"),"overriding optical hack",61203,new Date("2018-09-06T05:26:25.187Z"),new Date("2018-09-06T03:27:22.882Z"),{_id: 7454,str: "Cotton",date: new Date("2018-09-05T20:51:20.749Z"),array: ["Money Market Account","Money Market Account",[],90477,57972,new Date("2018-09-06T03:31:35.636Z"),"Grove","Soft Pa'anga Central"],obj: {_id: 7455,num: 24263,array: [],obj: {_id: 7456,str: "Human 1080p Micronesia",date: new Date("2018-09-06T00:46:16.133Z"),array: ["Mission GB Steel"]}}},{_id: 7457,str: "Central Intranet Radial",num: 4595,obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7458,str: "Movies Generic Frozen",num: 90425,array: [],obj: {_id: 7459,num: 6626,date: new Date("2018-09-06T03:28:21.078Z"),array: [{_id: 7460,str: "Auto Loan Account architect",num: 1571,date: new Date("2018-09-05T23:04:06.015Z"),obj: {_id: 7461,str: "Optimization teal Concrete",date: new Date("2018-09-05T23:09:45.007Z"),array: [new Date("2018-09-06T13:19:50.777Z"),9482,"cutting-edge forecast Computer",38682,45871],obj: {_id: 7462,str: "SAS",num: 97817,date: new Date("2018-09-06T05:21:32.624Z"),array: []}}},new Date("2018-09-06T18:03:08.396Z"),[],"copying",new Date("2018-09-06T01:52:32.458Z"),{_id: 7463,str: "parse SSL",array: [new Date("2018-09-06T15:33:22.580Z"),"channels"]},["monetize 24/365 Bike",[new Date("2018-09-06T03:49:15.359Z"),{_id: 7464,str: "generate Berkshire Generic",num: 77251,date: new Date("2018-09-06T08:31:40.640Z"),array: [],obj: {_id: 7465,num: 32913,date: new Date("2018-09-06T05:22:19.613Z"),obj: {}}}]],new Date("2018-09-06T16:59:25.074Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7466,str: "calculate input Mouse",num: 33566,date: new Date("2018-09-05T19:55:34.885Z"),array: [new Date("2018-09-06T06:31:15.842Z"),64387,new Date("2018-09-05T22:20:10.336Z"),7014,[94227,[],"back up service-desk","wireless Hat Baht",{_id: 7467,str: "24/7",num: 14308,date: new Date("2018-09-06T04:26:18.351Z"),array: [],obj: {}},66842,"Rubber Outdoors e-markets",59776]]});
    },

    function(coll) {
        return coll.insert({_id: 7468,date: new Date("2018-09-06T09:02:06.809Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7469,str: "Sausages partnerships",num: 22754,date: new Date("2018-09-06T14:02:42.075Z"),array: [45130,"connecting",{_id: 7470,str: "Shore",num: 73825,date: new Date("2018-09-06T07:24:21.325Z"),array: [{_id: 7471,str: "Rustic Steel Bike San Marino",num: 89201,date: new Date("2018-09-06T03:10:08.896Z"),obj: {_id: 7472,str: "Puerto Rico Tasty Plastic Bike",date: new Date("2018-09-06T08:35:32.661Z"),array: [],obj: {}}},new Date("2018-09-06T11:55:24.835Z"),{_id: 7473,num: 78644,array: [new Date("2018-09-06T10:14:53.039Z")],obj: {}},"interface Dynamic dynamic",50467]},"functionalities",79049,30912,new Date("2018-09-06T13:08:30.705Z"),{_id: 7474,str: "Road primary Fantastic Concrete Chair",num: 47310,date: new Date("2018-09-06T05:08:14.261Z"),array: [],obj: {_id: 7475,str: "Botswana",array: [[]]}},new Date("2018-09-06T01:32:00.795Z"),[],47831],obj: {_id: 7476,num: 34661,date: new Date("2018-09-05T23:27:46.028Z")}});
    },

    function(coll) {
        return coll.insert({_id: 7477,str: "efficient Salad Corporate",num: 37092,date: new Date("2018-09-06T13:05:47.204Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7478,str: "generate Principal quantify",num: 7594,date: new Date("2018-09-05T22:00:11.260Z"),array: [],obj: {_id: 7479,str: "Developer Electronics web-enabled",num: 55397,date: new Date("2018-09-05T23:59:18.097Z"),array: ["grid-enabled Ergonomic Wooden Bike Illinois",53348,"parsing Customer Berkshire",{_id: 7480,str: "Supervisor Health Home Loan Account",num: 22702,date: new Date("2018-09-06T00:25:31.207Z"),array: [],obj: {}},new Date("2018-09-05T20:42:37.256Z"),new Date("2018-09-06T15:36:25.328Z"),new Date("2018-09-06T17:18:55.723Z"),29130,38255,{_id: 7481,date: new Date("2018-09-06T19:11:25.896Z"),obj: {_id: 7482,str: "Orchestrator Senior",date: new Date("2018-09-06T08:23:03.578Z"),array: [],obj: {}}},{_id: 7483,date: new Date("2018-09-06T07:32:01.931Z"),obj: {_id: 7484,str: "Outdoors",num: 38404,array: [new Date("2018-09-06T05:41:31.050Z"),"ivory upward-trending"],obj: {}}},{_id: 7485,str: "Keys",num: 96910,array: [],obj: {_id: 7486,num: 1390}},["white","expedite",new Date("2018-09-06T01:07:23.805Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 7487,str: "Computer Handcrafted",num: 36495,date: new Date("2018-09-06T01:20:06.869Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7488,num: 55912,array: [new Date("2018-09-06T10:29:56.229Z"),36108,"Shoes background Plastic","port customer loyalty",new Date("2018-09-06T14:17:50.500Z"),14929,{_id: 7489,str: "bypassing Handmade",num: 43726,date: new Date("2018-09-06T03:42:59.988Z"),array: [73478],obj: {_id: 7490,str: "Ergonomic Frozen Car",num: 85641,date: new Date("2018-09-06T19:42:30.014Z"),obj: {_id: 7491,num: 19792,date: new Date("2018-09-06T18:18:25.279Z"),array: [{_id: 7492,str: "e-business Utah",obj: {_id: 7493,num: 4047,date: new Date("2018-09-06T16:11:06.199Z"),obj: {}}}],obj: {}}}},"Sharable Customer Focused",new Date("2018-09-06T15:57:14.103Z"),"withdrawal Home New Israeli Sheqel","copy",41237,[]]});
    },

    function(coll) {
        return coll.insert({_id: 7494,str: "Rubber Stravenue",num: 96774,date: new Date("2018-09-06T08:52:40.530Z"),array: ["Plastic Associate",51171,95435,24150,new Date("2018-09-05T23:51:02.836Z"),{_id: 7495,str: "Automotive cross-platform",date: new Date("2018-09-06T18:42:59.189Z"),array: [],obj: {}},new Date("2018-09-06T05:33:17.092Z"),new Date("2018-09-06T00:32:48.184Z"),"value-added lavender matrix",[]]});
    },

    function(coll) {
        return coll.insert({_id: 7496,str: "maroon THX online",num: 30838,date: new Date("2018-09-06T01:38:26.564Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7497,str: "Bedfordshire",num: 34386,array: [],obj: {_id: 7498,str: "application process improvement",num: 53405,date: new Date("2018-09-05T22:24:23.300Z"),array: [78666,2369,"leverage Credit Card Account Practical",66248,{_id: 7499,str: "Awesome Plastic Chips Engineer",num: 72217,date: new Date("2018-09-06T07:13:41.256Z"),array: [new Date("2018-09-06T17:24:56.631Z")],obj: {}},[],"Sleek",new Date("2018-09-06T04:11:42.739Z"),new Date("2018-09-06T05:10:48.558Z"),"out-of-the-box Assimilated Investment Account","SMTP Specialist Books",11009],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7500,str: "Jamaica connecting CSS",num: 7890,date: new Date("2018-09-06T18:57:58.219Z"),array: [65040,new Date("2018-09-06T10:37:38.346Z"),{_id: 7501,num: 99643,date: new Date("2018-09-06T13:07:37.097Z"),array: [],obj: {}},"USB enhance SMS",new Date("2018-09-06T02:41:29.775Z"),84699,new Date("2018-09-06T11:16:25.452Z"),65187,new Date("2018-09-06T13:18:54.244Z"),62798,"Berkshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7502,str: "Mouse Re-engineered",num: 72093,date: new Date("2018-09-06T13:00:13.156Z"),array: ["ivory Buckinghamshire Ethiopian Birr",20398,new Date("2018-09-06T07:54:57.550Z"),[],90937,52119,48850,new Date("2018-09-05T21:41:42.782Z"),new Date("2018-09-06T15:35:50.539Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7503,str: "Garden Tennessee grey",num: 49645,date: new Date("2018-09-06T12:20:30.051Z"),array: []});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "num": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $dateToParts: {date: { $dayOfYear: { $isoWeekYear: { $dayOfMonth: { $millesecond: '$obj.obj.obj.date' } } } },timezone: "Antarctica/DumontDUrville"} }, _id: 0}}],

        [{$project: {a: { $range: [7,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["driver"],['$obj.obj.obj.str',{ $toLower: '$obj.obj.str' },"Saint Helena deposit"],['$obj.obj.num','$obj.num'],['$num',12566],["array"]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Seamless" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Kazakhstan Small Handcrafted",v: new Date("2018-09-06T14:31:07.442Z")},{k: "Car user-facing",v: true},{k: "Beauty",v: new Date("2018-09-06T01:10:08.082Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: [{ $substrBytes: ["El Salvador Colon US Dollar",19,16] },17,5] },"Concrete Licensed Mouse"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $second: { $isoDayOfWeek: { $year: { $year: { $dateToString: {date: '$obj.date',format: "%m-%m-%z-%L-%M"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["JBOD Music",'$str'],50248] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [3,15] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Yuan Renminbi streamline",'$obj.str',"New York"],['$obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $dateToString: {date: '$date',timezone: "America/Godthab"} },10,12] }, _id: 0}}],

        [{$project: {a: { $substr: ["Tools",6,4] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Gorgeous"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account",v: false}]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$date' } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.num']] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoDayOfWeek: { $dayOfWeek: { $hour: { $hour: { $second: { $week: { $year: { $dateToString: {date: new Date("2018-09-06T07:27:55.948Z"),format: "%H-%V-%m-%j",timezone: "Africa/Maseru",onNull: { $substr: ["Micronesia Configuration Tasty",18,12] }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[{ $dateToString: {date: { $toDate: { $reverseArray: [[]] } },format: "%d-%S-%Y-%u-%M-%m-%Y-%V-%u-%d",timezone: "Etc/GMT+4"} }],93785] } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $multiply: [] },second: { $floor: 21459 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],16109] }, _id: 0}}],

        [{$project: {a: { $second: { $year: { $toDate: { $arrayElemAt: [['$obj.str','$str',{ $substrCP: [{ $dateToString: {date: { $dateToString: {date: '$obj.date',format: "%Y-%w-%L-%%-%d-%Y",timezone: "Etc/GMT-7",onNull: { $arrayToObject: [[[],["New Hampshire Stravenue"],[],[17200],[{ $ltrim: {input: "Bedfordshire Bermuda Coordinator",chars: '$obj.obj.str'} }],['$obj.str',"Bedfordshire"]]] }} },onNull: "Buckinghamshire"} },9,5] },"payment Accounts wireless"],'$obj.obj.obj.num'] } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoDayOfWeek: { $dayOfYear: { $dateFromParts: {year: { $log10: 883 },day: { $divide: ['$num',80595] },minute: { $floor: '$obj.num' },timezone: "Africa/Dar_es_Salaam"} } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num'],cond: { $isArray: [{ $arrayToObject: [[[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["generating systems",{ $toUpper: { $concat: ['$obj.str'] } },{ $toLower: { $concat: ['$str'] } }]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[false],[{ $substrCP: ["invoice RSS Cheese",19,2] }],["Somalia","payment Chair"],['$str',{ $toUpper: '$obj.str' }],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',64012],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "24/365 Ergonomic",v: true},{k: "relationships",v: { $toDate: { $arrayElemAt: [[],'$obj.num'] } }},{k: "deposit web-readiness",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $objectToArray: '$obj.obj' } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T21:39:57.588Z"),format: "%z-%L-%w-%S-%V-%w-%M-%Y",onNull: { $millesecond: { $millesecond: { $hour: { $dateFromString: {dateString: "2018-09-05T20:49:55.499Z",format: "%u-%d-%M-%H-%z-%L-%j",onError: { $arrayToObject: [[['$str','$str'],[53426],[{ $toString: { $arrayToObject: [[{k: "Tuna Bedfordshire Alaska",v: { $dateFromParts: {year: { $pow: ['$obj.obj.obj.num','$obj.obj.obj.num'] },month: { $divide: [{ $mod: [58426,'$num'] },97267] },hour: { $log10: '$num' },second: { $indexOfArray: [{ $objectToArray: '$obj.obj' },{ $filter: {input: ['$obj.str','$obj.str'],cond: { $ne: [{ $arrayElemAt: [[],'$obj.num'] },{ $arrayElemAt: [[],'$$this'] }] }} },2] },millisecond: { $subtract: [18103,{ $sqrt: '$obj.obj.num' }] },timezone: "America/Thunder_Bay"} }}]] } }],[],[]]] }} } } } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: { $toUpper: "Consultant Representative silver" } } },'$obj.str'],24899] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Regional Markets",v: true},{k: "synthesize",v: 30435}]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T16:12:52.394Z",format: "%%-%H-%j-%m-%z-%d-%M-%Y-%L-%Y-%Y-%w",onNull: "PCI"} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateFromParts: {year: { $pow: ['$num','$obj.obj.obj.num'] },minute: { $mod: [26712,'$obj.num'] },second: { $ceil: 56505 },timezone: "America/Menominee"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[70661],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Plaza Fish web-readiness",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["SMS Corporate"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [7,10,14] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T20:54:24.529Z"),format: "%H-%U-%L-%H",onNull: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit communities olive",v: '$obj.date'},{k: "CFP Franc",v: { $millesecond: { $hour: { $isoDayOfWeek: { $dayOfWeek: { $dayOfYear: { $dateFromParts: {isoWeekYear: { $floor: '$num' },isoWeek: { $floor: 71951 },isoDayOfWeek: { $ln: '$num' },hour: { $indexOfArray: [{ $filter: {input: ['$str',{ $concat: ["maroon Coordinator"] }],as: 'derick',cond: { $or: ["Hat Bike Street",'$$derick',"Home Central Bike"] }} },{ $toLower: { $ltrim: {input: "Generic",chars: '$obj.obj.str'} } },4] },minute: { $mod: [74522,18317] },second: { $size: [[]] },timezone: "Asia/Ulan_Bator"} } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.str'],["backing up Customer"],[],[],[new Date("2018-09-06T18:49:28.417Z"),{ $dateToString: {date: new Date("2018-09-05T21:20:10.749Z"),timezone: "Africa/Lusaka",onNull: { $substrBytes: ["process improvement Monitored",7,10] }} }]],useLongestLength: false,defaults: [new Date("2018-09-06T02:51:57.228Z")]} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $week: { $dayOfYear: { $dayOfWeek: { $isoWeek: { $millesecond: { $second: { $isoWeekYear: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T04:19:16.525Z",format: "%G-%Z-%Y-%M-%V-%j-%U",timezone: "Asia/Kolkata",onError: { $arrayElemAt: [['$str',"Personal Loan Account Mobility infrastructure"],38708] }} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $second: { $dateToString: {date: '$date',format: "%S-%S-%u-%M-%Y-%u-%S-%Y-%S-%d",onNull: { $trim: { input: '$obj.obj.obj.str' } }} } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Cliff open-source","bypassing array Borders",'$str'],[{ $trim: { input: { $rtrim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.str'} } } }],[78941]],defaults: [/Creative|niches|Oregon/]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: '$date',format: "%w-%w-%V-%z-%%-%%-%M",onNull: "Small withdrawal"} }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[5211]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[21368],['$obj.obj.obj.str',"encryption"],[],['$obj.obj.num','$obj.obj.num',{ $indexOfArray: [{ $objectToArray: '$obj.obj' },{ $trim: { input: '$obj.obj.str' } },12] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',"Rupiah","Computers"],['$obj.num',17026],[],[{ $log: [86583,'$obj.obj.obj.num'] }],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $toLower: "Electronics" },chars: "platforms open-source Hat"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substrBytes: [{ $toUpper: { $ltrim: {input: "Handcrafted Enterprise-wide",chars: "migration Parkway Crossing"} } },2,8] },"Ergonomic Steel Pizza scalable"],[55233,'$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Pula deposit",20,18] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[99192,'$num'],[{ $toString: { $dateToString: {date: { $dayOfYear: { $isoWeekYear: { $millesecond: { $second: { $isoDayOfWeek: { $dayOfWeek: { $dayOfMonth: { $isoDayOfWeek: { $year: { $millesecond: { $week: { $dayOfMonth: { $isoWeekYear: { $isoDayOfWeek: { $dateToString: {date: { $dateToString: { date: new Date("2018-09-06T16:33:08.296Z") } },format: "%%-%j-%L-%L-%M-%Y-%d-%G-%m-%d-%Z-%Z",onNull: "Gorgeous Steel Table interface"} } } } } } } } } } } } } } } },timezone: "US/Eastern"} } }],[]]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $substrCP: ['$obj.obj.str',9,18] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[78167],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $substrBytes: ["Corners",9,2] },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Engineer Product Guinea Franc" } }, _id: 0}}],

        [{$project: {a: { $year: { $dateToParts: {date: { $dateToString: {date: { $millesecond: { $dayOfWeek: { $month: { $isoWeek: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T18:41:27.063Z"),timezone: "America/Cayman",onNull: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.str',19,4] },'$obj.obj.obj.str',{ $substr: [{ $concat: [] },18,13] }],26683] }} } } } } } },timezone: "HST",onNull: "Versatile compress Concrete"} },timezone: "Europe/Mariehamn"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num','$obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[14726],21917] }, _id: 0}}],

        [{$project: {a: { $range: [6,6,16] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $indexOfArray: [{ $concatArrays: [[],[{ $substrCP: ["HDD",10,7] }]] },{ $isoDayOfWeek: { $dayOfWeek: { $year: { $millesecond: { $week: { $month: { $millesecond: { $dateToString: {date: '$obj.obj.obj.date',format: "%m-%Y-%Y-%Z-%U-%Y-%j-%V-%M",timezone: "America/Argentina/La_Rioja"} } } } } } } } },5] },{ $size: [[]] },64049],as: 'jacquelyn',in: { $exp: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrCP: ['$str',11,8] },{ $trim: {input: '$obj.str',chars: "Home Loan Account"} },'$str',{ $rtrim: { input: '$str' } }],in: { $exp: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "index",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "cross-platform",chars: { $dateToString: {date: '$obj.date',timezone: "Europe/Tirane"} }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.num',34014]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $minute: { $dateToParts: {date: { $isoDayOfWeek: { $isoWeekYear: { $isoWeekYear: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T05:11:12.850Z",onError: { $isoWeek: { $dayOfYear: { $toDate: { $arrayElemAt: [[],73297] } } } }} } } } } },timezone: "Africa/Bangui"} } },format: "%%-%M-%V-%Z-%z"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],74251] }, _id: 0}}],

        [{$project: {a: { $range: [7,17,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],57735] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str'],cond: { $ne: [{ $toLower: "parse" },{ $arrayElemAt: [["invoice",'$$this',{ $ltrim: { input: { $concat: [] } } },"Customer wireless",{ $rtrim: {input: '$obj.obj.obj.str',chars: '$$this'} }],43947] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str','$obj.obj.str',"Colombian Peso Unidad de Valor Real program microchip"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],34950] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bluetooth Awesome Metal Chair",v: { $substrBytes: ['$obj.obj.str',8,13] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'zane',cond: { $eq: [{ $arrayElemAt: [[],61944] },{ $trim: { input: '$$zane' } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "back up",v: '$obj.obj.str'},{k: "Squares systems optical",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Fantastic Grocery Granite"],48913] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["navigating Oklahoma"],48161] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[38153,1720],7198] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[88322],["Implementation leverage Concrete",'$obj.obj.obj.str',{ $ltrim: { input: { $rtrim: { input: '$str' } } } }]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[false],[{ $toString: { $week: { $week: { $dateFromParts: {isoWeekYear: { $multiply: [] },hour: { $pow: [89538,'$obj.obj.num'] },second: { $ln: '$obj.obj.num' },timezone: "America/Chihuahua"} } } } }],[]],useLongestLength: false,defaults: [/Auto Loan Account|Maryland/,"Checking Account"]} }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Keyboard Savings Account",'$obj.obj.str'],as: 'moses',in: { $ceil: 46378 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["SSL frictionless",{ $toLower: '$str' },'$obj.str'],{ $mod: ['$obj.num','$obj.obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["syndicate Executive Applications",'$obj.obj.obj.str',"out-of-the-box"]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $minute: { $second: { $isoDayOfWeek: { $dayOfYear: { $dateToString: {date: new Date("2018-09-06T02:27:03.701Z"),timezone: "Pacific/Norfolk",onNull: '$obj.obj.str'} } } } } },timezone: "Canada/Saskatchewan"} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $toDate: { $arrayToObject: [[[{ $concat: [{ $substr: ["SDD protocol Forward",5,1] }] }],[74763,'$obj.obj.num'],[],[{ $substr: ['$str',9,3] },"evolve Vision-oriented B2B",{ $substrCP: ['$obj.str',20,18] },'$obj.obj.str',"mint green"]]] } } }, _id: 0}}],

        [{$project: {a: { $range: [7,6] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $cmp: [{ $isoWeek: { $dayOfMonth: { $dayOfYear: { $week: { $millesecond: { $isoWeek: { $isoWeek: { $dateFromParts: {year: { $add: ['$num'] },month: { $sqrt: 64714 },hour: { $floor: '$$this' },timezone: "America/Iqaluit"} } } } } } } } },{ $arrayToObject: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T18:40:43.186Z") } }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToParts: {date: { $dayOfMonth: { $toDate: { $arrayToObject: [[[12831,{ $cmp: [{ $trim: { input: { $rtrim: { input: "deposit Baby" } } } },{ $dateFromString: {dateString: "2018-09-06T05:01:59.618Z",format: "%V-%m-%L-%%-%U-%V-%Y-%M-%w-%m",timezone: "Etc/GMT+11"} }] },'$obj.num'],[],['$str'],['$obj.obj.str'],[]]] } } },timezone: "America/Indiana/Knox",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: { date: { $second: { $dayOfYear: { $minute: { $dateToParts: {date: new Date("2018-09-06T04:21:56.368Z"),timezone: "Europe/Monaco",iso8601: false} } } } } } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Quality","synthesizing generating Gibraltar Pound",'$obj.obj.obj.str',{ $substr: ['$obj.str',2,10] }]] }, _id: 0}}],

        [{$project: {a: { $range: [7,12,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],13553] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Auto Loan Account Montenegro Applications",v: false}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $trim: { input: '$str' } },chars: { $toString: { $arrayElemAt: [[],'$obj.num'] } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "web-enabled one-to-one Keyboard",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',86236,{ $abs: '$obj.obj.obj.num' }],[76767,'$num'],['$obj.obj.obj.num',52949,{ $sqrt: 55194 }],['$obj.obj.obj.str'],[],["strategy",'$obj.obj.obj.str'],[{ $rtrim: { input: "Malaysia" } },{ $substrBytes: ['$obj.str',0,4] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Indonesia productize",v: { $concat: ["Officer Sleek Wooden Tuna",{ $toUpper: "initiatives" }] }}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfMonth: { $millesecond: { $hour: { $toDate: { $range: [20,3] } } } } } }, _id: 0}}],

        [{$project: {a: { $month: { $dateToString: {date: '$obj.obj.obj.date',onNull: "Cambridgeshire"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[99537],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$num'],67777] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Spring bottom-line",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromParts: {year: { $add: [98866,'$obj.num',59045] },month: { $trunc: 57338 },day: { $trunc: '$obj.num' },hour: { $cmp: [{ $arrayElemAt: [["compelling Planner",{ $dateToString: {date: { $second: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $ln: '$obj.obj.obj.num' },isoDayOfWeek: { $indexOfArray: [{ $range: [7,9] },{ $substrCP: [{ $toUpper: '$obj.obj.str' },11,4] },6] },minute: { $ceil: 47035 },timezone: "Antarctica/Macquarie"} } } },format: "%z-%H-%M-%Z-%u-%G-%d-%m-%M-%M-%u",timezone: "America/Inuvik",onNull: '$obj.obj.str'} },'$obj.str',"withdrawal"],'$num'] },{ $arrayElemAt: [['$obj.obj.obj.num',65740],{ $log10: '$obj.obj.obj.num' }] }] },minute: { $log: [17389,{ $divide: ['$num',53759] }] },second: { $multiply: [] }} } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "payment Chair",chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $toDate: { $toUpper: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],80509] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.str',chars: { $toUpper: "Monitored" }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $concat: [{ $substrBytes: ['$obj.obj.str',5,15] },"Uzbekistan Sum Crossing"] },"Program Fantastic Concrete Shirt Knoll"],as: 'maya',in: { $exp: 50302 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "emulation",v: { $dayOfYear: { $millesecond: { $week: { $isoWeekYear: { $month: { $second: { $hour: { $week: { $dateFromParts: {isoWeekYear: { $sqrt: 76791 },isoDayOfWeek: { $ln: '$num' },minute: { $add: [] },second: { $exp: '$num' },millisecond: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj' },{ $map: {input: ['$obj.obj.str'],as: 'cora',in: { $log: [{ $log10: 93325 },{ $ceil: '$$cora' }] }} }] },timezone: "America/Jamaica"} } } } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $year: { $dateToParts: { date: { $week: { $dateToString: {date: new Date("2018-09-06T19:24:15.464Z"),format: "%d-%U-%j-%S-%Y-%S-%M-%u-%%-%U",timezone: "Europe/Istanbul"} } } } } } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toLower: "red" },0,16] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "card",chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $minute: { $toDate: { $arrayToObject: [[['$obj.str',"virtual"],[],['$obj.num'],['$num',{ $rtrim: {input: "lavender",chars: "New Mexico Fully-configurable"} },true]]] } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $dayOfYear: { $isoDayOfWeek: { $dateToString: {date: '$obj.obj.date',format: "%V-%j-%w-%d-%Z-%Y-%u"} } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$str',0,13] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.num'],[{ $trim: {input: '$obj.obj.obj.str',chars: { $toLower: '$obj.obj.str' }} },{ $toLower: "Unbranded SMTP" }]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $second: { $dayOfWeek: { $toDate: { $arrayToObject: [[{k: "Direct",v: new Date("2018-09-06T16:18:17.069Z")},{k: "North Carolina",v: 6106}]] } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],75514] } }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dayOfMonth: { $dateToString: {date: '$obj.obj.date',timezone: "Pacific/Palau"} } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T11:06:00.314Z",timezone: "Africa/Kinshasa",onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],24430] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $hour: { $minute: { $minute: { $toDate: { $arrayToObject: [[[],[],['$obj.obj.obj.num',{ $abs: 11798 }],[{ $ltrim: { input: '$obj.obj.obj.str' } }]]] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],50257] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[28713],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Human Kids",6,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Handcrafted Fresh Chips Licensed Fresh Shirt Handmade Steel Sausages"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: { input: "Forward" } },{ $toUpper: { $trim: {input: '$str',chars: '$obj.str'} } },"primary object-oriented"],[],[86044,'$num',{ $subtract: [98812,6541] }],["Berkshire Cape",'$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T02:36:09.844Z",format: "%Y-%w-%Y-%j-%u-%d-%m-%V-%M-%j-%u",onError: { $arrayToObject: [[]] },onNull: { $toLower: "Gloves" }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[67592,'$obj.num'],{ $sqrt: 93775 }] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $ceil: '$obj.obj.obj.num' },minute: { $pow: [84195,24721] },second: { $log: ['$num',89033] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toUpper: { $ltrim: { input: "Cordoba Oro Mountain" } } },17,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "programming",v: { $add: [] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"infomediaries Tasty Fresh"],64056] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToString: {date: new Date("2018-09-06T16:40:12.856Z"),onNull: { $trim: {input: '$obj.obj.str',chars: "Planner"} }} } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $dateToString: {date: '$obj.date',onNull: { $toLower: "Handcrafted Frozen Cheese Handcrafted Gorgeous" }} },"copy matrix",'$str'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',{ $concat: ["high-level synthesize",{ $substrCP: ['$str',7,19] },"input Checking Account"] }],46518] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Iowa Licensed Distributed"],['$obj.obj.str',"COM Papua New Guinea networks",{ $rtrim: { input: { $ltrim: {input: "bluetooth Consultant salmon",chars: "Chips Representative"} } } },'$obj.str'],['$num'],[false,true]]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $rtrim: { input: { $toString: { $dateToString: {date: { $hour: { $millesecond: { $second: { $toDate: { $arrayToObject: [[{k: "Licensed Granite Pants driver",v: new Date("2018-09-06T10:50:28.857Z")},{k: "Oman forecast Visionary",v: false}]] } } } } },format: "%M-%Z-%S-%M-%U-%G-%%-%u",timezone: "Europe/Helsinki"} } } } },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',6,15] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.num',73892],as: 'ola',in: { $trunc: 45951 }} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateToParts: { date: { $isoWeekYear: { $year: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T15:24:07.022Z",format: "%w-%Y-%V-%M-%L-%j-%d-%w-%U"} } } } } } },timezone: "Pacific/Honolulu"} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["digital Handcrafted backing up",{ $substrBytes: ['$obj.str',15,7] }],cond: { $gt: [{ $arrayElemAt: [['$$this'],9740] },{ $zip: { inputs: [[{ $rtrim: { input: "Pizza Shoes Future-proofed" } }],[],[],[74247]] } }] }} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $toDate: { $dateToString: {date: '$obj.date',format: "%m-%L-%M-%U-%V-%L",onNull: { $ltrim: {input: "Borders",chars: { $trim: { input: { $ltrim: { input: '$obj.str' } } } }} }} } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $substrBytes: [{ $dateToString: {date: new Date("2018-09-06T19:21:52.639Z"),format: "%z-%Z-%z-%U-%%-%u-%G-%S-%G-%S-%Z"} },0,11] } }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T14:42:52.907Z" } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $second: { $isoWeek: { $hour: { $dateToString: {date: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T11:47:24.503Z",format: "%L-%m-%d-%w-%z-%%-%M-%w-%V-%j-%L-%%",timezone: "Asia/Kuwait",onError: { $dateToString: { date: new Date("2018-09-06T18:17:10.169Z") } }} } },timezone: "Asia/Jayapura",onNull: { $dateToString: {date: { $dayOfWeek: '$date' },format: "%%-%H-%G-%Z-%d-%L-%m-%%-%Z-%%-%V",onNull: { $arrayElemAt: [["digital bleeding-edge matrix"],'$obj.obj.obj.num'] }} }} } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: "compressing Credit Card Account" }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $isoWeekYear: { $year: { $minute: { $hour: { $isoWeek: { $hour: { $week: { $dayOfWeek: { $isoWeekYear: { $millesecond: { $minute: { $isoDayOfWeek: { $dateFromParts: {year: { $divide: [65048,{ $ln: 58092 }] },month: { $pow: ['$num','$num'] },hour: { $multiply: [92236,'$obj.obj.obj.num',79175] },minute: { $ceil: '$obj.obj.num' },second: { $log10: 41803 },millisecond: { $mod: [{ $abs: '$obj.obj.num' },17824] },timezone: "America/Grenada"} } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str'] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromString: {dateString: "2018-09-06T04:22:24.011Z",format: "%d-%M-%j-%U-%%-%U-%w-%w-%m-%m-%%-%u",onError: { $range: [5,1,2] },onNull: "Sports"} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfMonth: { $millesecond: { $month: { $dateToString: {date: '$obj.obj.date',timezone: "Australia/Eucla"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $ltrim: { input: { $concat: ["transmitter 4th generation",{ $substrBytes: ['$obj.obj.str',4,17] }] } } },{ $toUpper: '$obj.obj.obj.str' }],[false,{ $substrBytes: [{ $rtrim: {input: "Global card",chars: '$obj.obj.str'} },17,4] },60621]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],77555] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Comoros",'$obj.obj.obj.str'],['$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $rtrim: { input: '$str' } },"multi-byte Games Creek"]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str',{ $ltrim: {input: "infomediaries tan",chars: '$str'} }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],{ $exp: '$num' }] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str',{ $toUpper: "Indonesia e-enable Accounts" },'$obj.obj.str'],in: { $ln: '$obj.obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $concat: ['$str','$obj.obj.str',{ $toString: { $millesecond: { $month: { $isoDayOfWeek: { $millesecond: { $dayOfMonth: { $week: { $dateToString: {date: '$obj.date',format: "%S-%z-%%-%G-%M",timezone: "Europe/Kirov",onNull: { $arrayElemAt: [['$obj.num'],97486] }} } } } } } } } }] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Administrator National Savings Account"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.str',"Savings Account Checking Account",{ $toLower: "communities" }],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToParts: {date: { $second: { $toDate: { $arrayElemAt: [["generate"],24692] } } },timezone: "Pacific/Kosrae"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.date'],17032] }, _id: 0}}],

        [{$project: {a: { $range: [13,12,18] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],16606] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $arrayElemAt: [[24009],'$obj.obj.num'] } },'$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $substr: ['$str',19,1] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["hacking neural"],[81984],['$obj.obj.num'],[],[{ $substr: ['$obj.obj.obj.str',11,4] },{ $trim: { input: "proactive" } }],[new Date("2018-09-06T15:25:17.456Z"),new Date("2018-09-06T08:43:06.399Z"),{ $toString: { $dateToString: {date: '$date',format: "%z-%z-%z-%H-%S-%%-%U-%M-%V-%Z"} } },'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Automotive monetize port",'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Concrete",{ $substrCP: ['$obj.str',19,16] }],7701] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num'],as: 'odie',in: { $mod: ['$$odie',75099] }} }, _id: 0}}],

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
