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
        return coll.insert({_id: 22604,str: "Japan invoice",num: 22003,date: new Date("2018-09-06T07:26:47.991Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22605,str: "Liaison violet JBOD",date: new Date("2018-09-06T19:06:15.563Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22606,str: "Intelligent Plastic Pants Unbranded utilize",date: new Date("2018-09-06T06:17:26.860Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22607,str: "Frozen",num: 47703,date: new Date("2018-09-06T16:37:54.587Z"),array: ["Mali hacking","zero tolerance Devolved",58467,92921,{_id: 22608,str: "Beauty high-level Incredible Fresh Tuna",num: 9488,date: new Date("2018-09-06T02:07:20.000Z"),array: [97150,new Date("2018-09-06T03:41:19.026Z")],obj: {}},[],new Date("2018-09-06T05:48:49.891Z"),"synergize Virginia green",new Date("2018-09-06T18:48:28.431Z"),{_id: 22609,num: 27196,date: new Date("2018-09-06T18:42:06.204Z"),array: [],obj: {_id: 22610,str: "Hong Kong Dollar Guam calculate",num: 76203,date: new Date("2018-09-06T14:01:33.925Z"),obj: { _id: 22611 }}},new Date("2018-09-05T21:16:00.540Z")],obj: {_id: 22612,date: new Date("2018-09-05T21:37:59.437Z"),array: [[new Date("2018-09-06T12:46:54.673Z"),"Home Loan Account upward-trending",18268,"systems",new Date("2018-09-06T09:16:32.357Z"),[]],{_id: 22613,str: "EXE",num: 88748,array: [57213],obj: {}}],obj: {_id: 22614,str: "hacking knowledge user Developer",date: new Date("2018-09-06T15:37:57.187Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 22615,str: "Glen Borders",num: 25337,date: new Date("2018-09-06T18:41:27.536Z"),array: ["Lock ivory back up",new Date("2018-09-06T12:37:38.254Z"),new Date("2018-09-06T15:53:25.109Z"),42964,88949,{_id: 22616,str: "integrate eco-centric Credit Card Account",num: 34507,array: ["firewall",new Date("2018-09-06T13:20:51.602Z"),{_id: 22617,str: "Codes specifically reserved for testing purposes Berkshire bandwidth",date: new Date("2018-09-06T13:16:48.516Z"),array: [],obj: {_id: 22618,num: 94109,date: new Date("2018-09-06T01:32:08.620Z"),array: [],obj: {_id: 22619,str: "Hong Kong Granite coherent",date: new Date("2018-09-06T06:21:58.501Z"),array: []}}}],obj: {}},5054,[],75372,"silver Home"]});
    },

    function(coll) {
        return coll.insert({_id: 22620,str: "CSS",num: 94373,date: new Date("2018-09-06T10:01:20.024Z"),array: ["Administrator","Advanced Regional concept",16592,new Date("2018-09-06T01:31:52.088Z"),"harness Gorgeous Frozen Chips 6th generation",[],69524,new Date("2018-09-06T11:51:06.088Z"),55097]});
    },

    function(coll) {
        return coll.insert({_id: 22621,str: "Montana copy",num: 34257,date: new Date("2018-09-06T07:58:44.187Z"),array: [76736,new Date("2018-09-06T19:02:54.248Z"),43680,"Plain Investment Account",{_id: 22622,str: "synthesize",date: new Date("2018-09-06T10:05:49.782Z"),array: [],obj: {_id: 22623,str: "Courts Awesome Plastic Towels Accountability",num: 18202,date: new Date("2018-09-06T14:17:40.202Z"),obj: {_id: 22624,date: new Date("2018-09-05T20:07:22.789Z"),array: [59724,new Date("2018-09-06T12:53:49.329Z")],obj: {}}}},"backing up",new Date("2018-09-06T09:35:21.851Z"),"Plastic gold",new Date("2018-09-06T02:52:52.353Z"),"deposit",{_id: 22625,num: 4884,array: [],obj: {}},[]],obj: {_id: 22626,str: "Tasty Philippine Peso",num: 49208}});
    },

    function(coll) {
        return coll.insert({_id: 22627,str: "Practical Fresh Soap",num: 32673,date: new Date("2018-09-06T05:10:19.709Z"),array: [52213,[],{_id: 22628,str: "Agent Soft Rubber",num: 50590,date: new Date("2018-09-06T18:54:17.109Z"),array: [],obj: {_id: 22629,str: "info-mediaries archive virtual",num: 92461,array: [new Date("2018-09-06T14:03:50.661Z"),71309,"payment Director"],obj: {}}},"withdrawal paradigms Regional",new Date("2018-09-06T19:32:42.891Z"),"Small",2176,"Knolls",new Date("2018-09-06T08:19:20.039Z")],obj: {_id: 22630,str: "users Finland Personal Loan Account",num: 1366,date: new Date("2018-09-06T02:55:21.009Z"),array: [47792,["interfaces Handcrafted Cambridgeshire",new Date("2018-09-05T22:10:14.894Z"),new Date("2018-09-06T15:35:32.706Z"),{_id: 22631,num: 64073}],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 22632,str: "Arizona Maine Rustic Soft Keyboard",num: 95620,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22633,str: "Rubber Intelligent Rubber Bike white",num: 5876,date: new Date("2018-09-06T05:05:21.053Z"),array: [58731,new Date("2018-09-06T08:05:12.227Z"),new Date("2018-09-06T10:26:12.577Z"),89359,{_id: 22634,str: "Berkshire hack Stravenue",num: 12499,date: new Date("2018-09-05T23:59:05.052Z"),array: [],obj: {_id: 22635,str: "overriding",date: new Date("2018-09-06T11:49:03.262Z"),obj: {}}},32231,"program Mobility",{_id: 22636,date: new Date("2018-09-06T11:51:50.641Z")},"Small",new Date("2018-09-05T20:04:15.319Z")],obj: {_id: 22637,num: 2939,date: new Date("2018-09-06T14:36:36.654Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22638,str: "Practical Granite Chicken",num: 3288,date: new Date("2018-09-06T00:13:22.202Z"),array: [],obj: {_id: 22639,str: "focus group",num: 80594,date: new Date("2018-09-06T01:53:06.510Z"),array: [93765,[],25005,[],"Lock auxiliary","ivory SCSI initiatives",new Date("2018-09-06T00:45:19.235Z"),{_id: 22640,str: "Communications Brand matrix",date: new Date("2018-09-05T21:24:22.444Z"),array: [],obj: {_id: 22641,str: "Courts mobile Money Market Account",num: 11965,array: [[new Date("2018-09-06T06:41:00.230Z"),new Date("2018-09-06T16:08:19.754Z"),60516,81188,35541],"Functionality overriding Configuration",new Date("2018-09-06T14:21:34.378Z"),"Bahamas"],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22642,str: "Saint Kitts and Nevis user-centric",num: 15268,date: new Date("2018-09-06T03:25:37.023Z"),obj: {_id: 22643,str: "Auto Loan Account compress",num: 39551,date: new Date("2018-09-05T22:29:08.713Z"),array: ["Lead Ergonomic Outdoors",62651,new Date("2018-09-06T09:55:40.129Z"),33822,"rich Auto Loan Account olive",80050,new Date("2018-09-06T13:37:15.920Z"),"Rhode Island",new Date("2018-09-06T17:02:40.492Z"),{_id: 22644,str: "Soft XSS",num: 48242,date: new Date("2018-09-06T12:34:51.911Z"),array: [],obj: {_id: 22645,num: 27136,date: new Date("2018-09-06T09:57:27.996Z"),array: ["deposit Small architectures",new Date("2018-09-05T22:27:21.675Z")]}},[41965,{_id: 22646,num: 13701,array: [],obj: {}},[]],new Date("2018-09-06T00:36:56.790Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 22647,str: "Planner",num: 77316,date: new Date("2018-09-06T14:52:30.925Z"),obj: {_id: 22648,str: "invoice lavender Bolivia",date: new Date("2018-09-05T22:36:48.884Z"),array: [],obj: {_id: 22649,str: "Center enterprise Bedfordshire",array: [new Date("2018-09-06T03:16:03.978Z"),49645,"Borders",[new Date("2018-09-06T15:16:28.981Z"),11572,95949],new Date("2018-09-06T18:49:46.722Z"),{_id: 22650,str: "orange Cotton Practical Cotton Towels",num: 57755,date: new Date("2018-09-06T17:29:57.937Z"),array: [],obj: {}},91913,{_id: 22651,num: 24743,date: new Date("2018-09-05T19:55:37.374Z"),array: [],obj: {_id: 22652,num: 23089,obj: {}}},new Date("2018-09-06T11:59:17.737Z"),"New Leu fault-tolerant","initiatives",32871]}}});
    },

    function(coll) {
        return coll.insert({_id: 22653,str: "Clothing Liberian Dollar",date: new Date("2018-09-06T01:48:11.711Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22654,str: "maximized methodology",num: 20259,array: [new Date("2018-09-06T15:14:47.567Z"),81505,"Human",93156,"Licensed",[new Date("2018-09-05T20:58:52.273Z"),{_id: 22655,num: 27538,date: new Date("2018-09-06T14:26:09.603Z"),array: [],obj: {_id: 22656,str: "Chips interface Quetzal",num: 45460,date: new Date("2018-09-06T10:00:00.093Z"),array: [{_id: 22657,str: "frame Gloves",num: 1653},new Date("2018-09-06T01:01:43.698Z")],obj: {_id: 22658,str: "CSS engage",num: 70888,date: new Date("2018-09-06T13:36:02.207Z")}}},"Awesome quantifying",37446,new Date("2018-09-06T03:01:44.289Z")],[],"connecting Metal",[],[],{_id: 22659,str: "Rustic Metal Chicken",array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 22660,str: "Azerbaijan Berkshire Savings Account",num: 10976,date: new Date("2018-09-06T03:38:50.372Z"),array: [new Date("2018-09-06T18:33:57.900Z"),new Date("2018-09-06T00:46:27.180Z"),64875,[],{_id: 22661,str: "action-items",num: 85683,date: new Date("2018-09-06T05:03:53.176Z"),array: [],obj: {}},new Date("2018-09-06T09:31:06.768Z"),"Guinea Franc actuating Focused","Maryland",{_id: 22662,str: "Wells Polarised Centralized",num: 36100,array: ["tan Awesome",89977,50147,new Date("2018-09-05T20:07:09.516Z"),69707],obj: {_id: 22663,str: "navigating",date: new Date("2018-09-06T16:12:06.696Z"),array: ["Interactions framework"],obj: {}}},"connecting exploit",{_id: 22664,date: new Date("2018-09-06T01:49:41.946Z"),array: [new Date("2018-09-06T14:17:52.301Z")]},[]]});
    },

    function(coll) {
        return coll.insert({_id: 22665,str: "Drive",num: 17704,date: new Date("2018-09-06T18:19:30.323Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22666,str: "Awesome zero tolerance ubiquitous",num: 64731,date: new Date("2018-09-06T10:23:45.259Z"),array: [],obj: {_id: 22667,str: "6th generation Customer",date: new Date("2018-09-06T14:12:42.921Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22668,str: "Refined",num: 82465,date: new Date("2018-09-06T05:05:26.417Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 22669,str: "Unbranded Concrete Chair analyzer",num: 77495,date: new Date("2018-09-06T09:30:23.626Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22670,date: new Date("2018-09-06T01:50:07.646Z"),array: [],obj: {_id: 22671,str: "Automotive Moldovan Leu",num: 67520,array: [],obj: {_id: 22672,str: "Licensed Credit Card Account Georgia",num: 54845,date: new Date("2018-09-05T22:42:29.295Z"),array: ["Credit Card Account synthesize Customer",39566,85815,29132,"system Direct methodologies","navigate Jewelery",{_id: 22673,str: "Sports AGP",num: 64293,date: new Date("2018-09-06T17:09:00.624Z"),array: [new Date("2018-09-05T20:25:21.711Z"),[[new Date("2018-09-06T03:10:51.644Z")]],78051,"XSS Bike",new Date("2018-09-06T05:04:12.994Z"),new Date("2018-09-05T19:55:35.863Z"),"Officer"]},[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22674,str: "Ergonomic Wooden Table Fish",num: 1713,date: new Date("2018-09-05T20:05:47.769Z"),array: ["navigate",new Date("2018-09-06T07:38:36.860Z"),86496,63774,"Representative",54944,[],new Date("2018-09-06T10:08:32.831Z"),"Shore IB interface",[8047,{_id: 22675,str: "Supervisor",num: 82225,date: new Date("2018-09-06T13:27:00.453Z"),array: [],obj: {}}],{_id: 22676,str: "calculating Profound lavender",num: 98806,array: ["Spain process improvement",{_id: 22677,str: "Bacon relationships Fantastic Steel Chair",num: 17095,date: new Date("2018-09-05T21:21:41.851Z"),obj: {}}],obj: {}},"Credit Card Account Wooden Georgia","relationships reinvent"],obj: {_id: 22678,array: [new Date("2018-09-06T04:47:05.711Z"),new Date("2018-09-06T07:45:00.542Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 22679,str: "web-readiness Chicken",num: 88357,date: new Date("2018-09-06T12:36:55.778Z"),array: ["Home Loan Account Texas",new Date("2018-09-05T22:56:12.446Z"),new Date("2018-09-05T21:51:11.468Z"),15045,63134,"Borders",[],new Date("2018-09-06T07:57:09.124Z"),10651,11349,"Consultant"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22680,str: "customized Assistant American Samoa",num: 93245,date: new Date("2018-09-05T23:15:07.216Z"),array: [],obj: {_id: 22681,str: "dynamic Convertible Marks Ergonomic Steel Tuna",num: 65852,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22682,str: "Small Concrete Mouse",num: 58558,date: new Date("2018-09-06T05:46:20.537Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 22683,str: "capacity",num: 89432,date: new Date("2018-09-06T16:03:25.364Z"),array: ["whiteboard","Extended blue",new Date("2018-09-06T14:29:49.809Z"),47613,29778,new Date("2018-09-06T03:29:30.999Z"),59911,[],[],{_id: 22684,str: "Mews Dale quantify",num: 11092,obj: {_id: 22685,str: "Senegal Supervisor synthesizing",num: 94276,date: new Date("2018-09-05T21:45:45.933Z"),array: [[]],obj: {_id: 22686,num: 51113,array: [new Date("2018-09-06T05:32:30.983Z"),new Date("2018-09-06T13:09:35.227Z"),new Date("2018-09-06T14:21:09.456Z")],obj: {}}}},{_id: 22687,date: new Date("2018-09-06T12:06:41.968Z"),array: ["Soap Chicken Direct"]},{_id: 22688,str: "syndicate",num: 51766,obj: {_id: 22689,str: "Concrete Gorgeous Administrator",num: 69550,date: new Date("2018-09-06T14:24:41.600Z"),obj: {}}},33419]});
    },

    function(coll) {
        return coll.insert({_id: 22690,str: "firewall black zero administration",num: 10936,date: new Date("2018-09-06T17:28:47.565Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22691,str: "index",num: 87194,date: new Date("2018-09-06T00:09:49.919Z"),array: [new Date("2018-09-06T16:09:52.253Z"),[],51813,33095,"deposit Rubber 1080p",17691,{_id: 22692,str: "hacking Movies dynamic",num: 15134,date: new Date("2018-09-06T11:25:42.175Z"),obj: {}},new Date("2018-09-06T08:10:31.130Z"),"Investment Account","index Games"],obj: {_id: 22693,num: 94434,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22694,str: "empower Games",num: 3658,date: new Date("2018-09-05T21:11:10.793Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22695,str: "Iraqi Dinar index",num: 41276,date: new Date("2018-09-06T15:00:02.849Z"),array: [{_id: 22696,str: "Branding Implementation Kenya",num: 68011,date: new Date("2018-09-05T21:07:46.856Z"),array: [38982,new Date("2018-09-06T01:13:20.244Z")],obj: {}},"rich",963,"Track back-end","Tasty alarm e-commerce",2985,new Date("2018-09-06T09:36:19.981Z"),"Computer",[70661],{_id: 22697,num: 41457,array: [],obj: {_id: 22698,str: "portal Games",date: new Date("2018-09-06T04:13:38.270Z"),array: [],obj: {_id: 22699,str: "azure Enterprise-wide Solomon Islands Dollar",num: 74541,date: new Date("2018-09-06T19:00:39.819Z"),obj: {}}}},new Date("2018-09-06T04:29:26.867Z"),{_id: 22700,str: "Bouvet Island (Bouvetoya) Way",num: 78973,array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22701,str: "Ohio Marketing",num: 86495,date: new Date("2018-09-06T01:50:47.971Z"),array: ["Grocery Corporate strategize",new Date("2018-09-05T19:58:18.647Z"),44329,[],{_id: 22702,str: "parse Kina exuding",num: 54195,array: [[29550,new Date("2018-09-06T09:15:56.745Z"),74741,"Toys Cotton back up"],new Date("2018-09-06T18:09:25.176Z"),"Group unleash","program",45012,{_id: 22703,num: 45357,date: new Date("2018-09-06T04:24:37.763Z"),obj: {_id: 22704,str: "infrastructures withdrawal Operations",num: 23226,date: new Date("2018-09-05T22:07:28.481Z"),array: [new Date("2018-09-06T07:02:50.564Z"),"Sleek Soft Sausages Sports Chief"],obj: {_id: 22705,str: "intranet indexing",date: new Date("2018-09-06T06:07:15.816Z"),array: [{_id: 22706,date: new Date("2018-09-06T17:25:56.314Z")}],obj: {}}}},new Date("2018-09-06T16:29:56.675Z")],obj: {_id: 22707,str: "synthesizing systems Personal Loan Account",date: new Date("2018-09-06T09:23:28.274Z"),array: [],obj: {}}},64322,"Prairie"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22708,str: "virtual Plain",num: 56484,date: new Date("2018-09-05T20:57:47.521Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22709,str: "deposit Marketing Rial Omani",date: new Date("2018-09-06T08:19:44.700Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 22710,str: "override",num: 47332,date: new Date("2018-09-06T16:36:37.414Z"),obj: {_id: 22711,str: "Gateway bifurcated",num: 89516,date: new Date("2018-09-06T15:31:09.163Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22712,str: "Somali Shilling Mexican Peso Mexican Unidad de Inversion (UDI) lavender",num: 21378,date: new Date("2018-09-05T20:05:45.357Z"),array: [8028,"bandwidth Refined Granite Sausages",new Date("2018-09-06T02:27:34.495Z"),"SCSI parsing",[],74120,"next-generation Functionality",{_id: 22713,str: "mobile white Cotton",num: 26634,date: new Date("2018-09-06T13:27:56.766Z"),array: [41913,new Date("2018-09-06T00:59:47.580Z")],obj: {_id: 22714,str: "black Fresh Sharable",num: 93500,array: [],obj: {_id: 22715,str: "Ball",date: new Date("2018-09-06T19:51:31.700Z"),array: [[],88078,"Brand XML"],obj: {}}}},"USB",new Date("2018-09-06T01:26:10.897Z")]});
    },

    function(coll) {
        return coll.insert({_id: 22716,num: 98385,date: new Date("2018-09-06T07:35:03.408Z"),array: [new Date("2018-09-06T09:33:50.293Z"),{_id: 22717,str: "teal",num: 10852,date: new Date("2018-09-05T23:23:01.579Z"),array: []},14976,"clear-thinking internet solution",new Date("2018-09-06T06:28:42.305Z"),"copy","iterate Branding Auto Loan Account",[],"Wooden Chips",48884,36274,[new Date("2018-09-06T16:43:13.665Z")],{_id: 22718,str: "purple Handmade Frozen Sausages",date: new Date("2018-09-06T10:54:33.937Z"),obj: {_id: 22719,str: "copying",num: 24183,date: new Date("2018-09-06T05:14:22.134Z"),obj: {_id: 22720,str: "USB",num: 86619,date: new Date("2018-09-06T19:06:25.647Z"),array: [],obj: {}}}}],obj: {_id: 22721,num: 245,date: new Date("2018-09-06T18:27:37.596Z"),array: [[[],new Date("2018-09-05T20:10:30.212Z"),26164]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22722,str: "SQL",num: 12983,date: new Date("2018-09-06T16:02:48.338Z"),array: [],obj: {_id: 22723,num: 72953,date: new Date("2018-09-05T21:23:13.877Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22724,str: "Grocery bluetooth",num: 70831,date: new Date("2018-09-06T08:58:07.162Z"),array: [31588,"methodologies bus Garden",{_id: 22725,str: "e-enable",array: [],obj: {_id: 22726,str: "Fresh North Dakota Planner",num: 39756,date: new Date("2018-09-06T16:19:41.343Z"),array: [],obj: {_id: 22727,num: 96219,array: [],obj: {}}}},new Date("2018-09-06T13:13:23.893Z"),58287,48831,[],[new Date("2018-09-06T06:28:52.521Z"),new Date("2018-09-06T01:04:07.228Z"),[]],new Date("2018-09-06T14:55:21.027Z"),"Fresh revolutionize","neural orchestration","ubiquitous"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22728,str: "Industrial wireless",num: 31466,date: new Date("2018-09-06T17:57:33.145Z"),array: [5323,"Buckinghamshire Intelligent","Intranet reinvent","Response",new Date("2018-09-06T02:35:01.578Z"),{_id: 22729,str: "Plastic web-readiness",num: 12383,date: new Date("2018-09-06T06:53:28.526Z"),array: [],obj: {_id: 22730,str: "Uruguay",date: new Date("2018-09-06T00:08:18.235Z"),obj: {}}},89073]});
    },

    function(coll) {
        return coll.insert({_id: 22731,str: "Malta hub deposit",num: 29215,array: ["orange",66941,new Date("2018-09-06T01:32:13.257Z"),94271,"asymmetric reintermediate",new Date("2018-09-06T15:45:14.101Z"),new Date("2018-09-05T20:32:27.807Z"),87697,{_id: 22732,str: "GB",num: 45988,date: new Date("2018-09-06T13:21:14.238Z"),array: []},"red XML Lakes",new Date("2018-09-06T11:11:45.867Z")],obj: {_id: 22733,str: "matrix engage Fresh",date: new Date("2018-09-06T10:28:03.043Z"),array: [[],["Bedfordshire Berkshire Grocery"],9656],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22734,str: "microchip",num: 26771,date: new Date("2018-09-06T09:20:30.902Z"),array: [new Date("2018-09-05T21:15:52.845Z"),"input Harbors synthesize",89471,{_id: 22735,str: "Ergonomic budgetary management",num: 10574,date: new Date("2018-09-06T02:41:06.261Z"),array: [31195,"solid state capacitor"],obj: {_id: 22736,num: 4135,date: new Date("2018-09-06T17:13:52.435Z"),array: [],obj: {}}},9052,new Date("2018-09-06T17:04:44.516Z"),new Date("2018-09-06T12:16:25.902Z"),{_id: 22737,str: "Savings Account Quality Granite",array: [],obj: {}},33926,new Date("2018-09-06T17:52:45.808Z"),85655,{_id: 22738,str: "Wooden protocol Quality-focused"},[]],obj: {_id: 22739,str: "XML parsing",num: 83966,date: new Date("2018-09-06T11:26:06.036Z")}});
    },

    function(coll) {
        return coll.insert({_id: 22740,str: "solid state",num: 85351,date: new Date("2018-09-05T23:16:44.551Z"),array: [["synthesize Shoes e-markets",1253],new Date("2018-09-06T17:37:55.305Z"),"system engine Frozen International",[],new Date("2018-09-06T10:26:46.689Z"),{_id: 22741,str: "interface",num: 62844,date: new Date("2018-09-06T18:58:01.324Z"),array: [],obj: {_id: 22742,num: 96050,obj: {_id: 22743,str: "Swiss Franc Iranian Rial indexing",date: new Date("2018-09-05T21:31:42.983Z")}}},27383,4098,new Date("2018-09-05T23:05:11.138Z"),"Algerian Dinar",{_id: 22744,str: "hack",num: 32925,obj: {_id: 22745,str: "plum Books Analyst",date: new Date("2018-09-06T17:26:07.202Z")}},new Date("2018-09-06T04:21:42.557Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22746,str: "bus Investment Account",num: 96449,date: new Date("2018-09-06T08:41:10.612Z"),obj: {_id: 22747,num: 25004,date: new Date("2018-09-06T01:43:45.182Z"),array: ["Refined",new Date("2018-09-05T20:39:08.116Z"),new Date("2018-09-06T08:38:01.799Z"),22207,278,196,{_id: 22748,str: "Austria",date: new Date("2018-09-06T10:18:05.014Z"),array: [],obj: {_id: 22749,str: "transmitting 24 hour Rupiah",num: 58428,date: new Date("2018-09-06T08:28:39.891Z"),array: [],obj: {_id: 22750,num: 35502,array: ["RSS Islands Spur",[37669],"mint green Syrian Arab Republic",new Date("2018-09-06T10:25:28.958Z")],obj: {_id: 22751,str: "Ball"}}}},new Date("2018-09-06T09:18:58.299Z"),{_id: 22752,str: "connecting Investment Account turquoise",num: 5339,date: new Date("2018-09-06T14:53:16.629Z"),array: ["Ergonomic cross-platform"],obj: {}},"calculating",[],new Date("2018-09-06T11:41:31.694Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22753,str: "Quality Bhutan",num: 97648,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22754,str: "workforce hacking scale",num: 21513,date: new Date("2018-09-06T08:02:07.773Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22755,str: "Metal Concrete",date: new Date("2018-09-06T11:00:35.274Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22756,str: "Soft e-markets array",num: 66251,date: new Date("2018-09-06T19:10:57.148Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22757,str: "parse",num: 17508,date: new Date("2018-09-06T14:58:13.501Z"),array: ["green emulation Colombia",new Date("2018-09-06T14:46:22.254Z"),53734,new Date("2018-09-05T23:48:47.772Z"),"withdrawal","Borders Gorgeous Metal Sausages Pa'anga",{_id: 22758,str: "virtual cross-platform",num: 88278,date: new Date("2018-09-06T02:31:47.998Z"),array: [],obj: {_id: 22759,str: "Representative",num: 24049,date: new Date("2018-09-05T23:16:50.975Z"),array: [95324,{_id: 22760,str: "magenta",num: 21008,array: [24614],obj: {}}],obj: {_id: 22761,num: 64996}}},{_id: 22762,str: "North Dakota Personal Loan Account",date: new Date("2018-09-06T00:00:40.250Z"),obj: {_id: 22763,num: 9662,obj: {}}},[],new Date("2018-09-06T07:32:33.406Z"),"Parkway",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22764,str: "Internal",num: 58253,date: new Date("2018-09-06T08:21:53.520Z"),array: [new Date("2018-09-06T13:10:38.604Z"),"District Solutions",69400,{_id: 22765,str: "Refined Metal Keyboard local Illinois",num: 8071,date: new Date("2018-09-06T15:35:50.731Z"),array: [],obj: {}},["transmitter Sports parse",43376,"Generic Frozen Shoes synthesize",36732,{_id: 22766,date: new Date("2018-09-06T03:20:18.983Z"),array: [],obj: {}},31386,"cultivate"],new Date("2018-09-06T07:13:03.443Z"),new Date("2018-09-06T09:26:17.998Z"),17335,new Date("2018-09-06T09:32:43.746Z")],obj: {_id: 22767,str: "niches Shirt",num: 16338,date: new Date("2018-09-06T03:24:19.429Z"),array: [54542]}});
    },

    function(coll) {
        return coll.insert({_id: 22768,str: "Concrete Sausages Integration",num: 32059,date: new Date("2018-09-05T22:45:14.223Z"),array: [],obj: {_id: 22769,str: "Music",num: 15374,date: new Date("2018-09-06T18:51:55.801Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22770,str: "Papua New Guinea Movies bus",num: 5061,date: new Date("2018-09-06T02:41:41.039Z"),array: [76268,44464,18089,new Date("2018-09-06T13:58:20.819Z"),{_id: 22771,num: 17643,date: new Date("2018-09-06T11:26:17.100Z"),array: ["GB Nevada",new Date("2018-09-05T20:03:27.093Z"),{_id: 22772,date: new Date("2018-09-06T06:03:29.047Z"),array: [],obj: {_id: 22773,str: "online",num: 99123,obj: {}}},new Date("2018-09-06T01:44:05.319Z")],obj: {_id: 22774,str: "visualize Pound Sterling",num: 91213,date: new Date("2018-09-06T10:12:24.127Z"),array: ["Colorado Isle of Man",new Date("2018-09-06T05:18:07.615Z")]}},[53049],[],"Pakistan Rupee Solutions",{_id: 22775,str: "mint green quantify",array: [],obj: {}},"Washington Idaho Greens"]});
    },

    function(coll) {
        return coll.insert({_id: 22776,str: "Directives program",num: 27524,date: new Date("2018-09-06T06:03:30.536Z")});
    },

    function(coll) {
        return coll.insert({_id: 22777,str: "COM frictionless",num: 97945,date: new Date("2018-09-06T11:36:01.075Z"),array: [67879,[new Date("2018-09-06T12:14:13.651Z"),[new Date("2018-09-06T16:38:04.909Z"),"clear-thinking mesh",[]],79805,"Architect Rustic Fresh Gloves"],"AI software Outdoors",63238,new Date("2018-09-06T18:13:24.477Z"),63107,{_id: 22778,str: "compress Sports Officer",num: 83268,date: new Date("2018-09-05T22:07:29.438Z"),array: ["Rubber",new Date("2018-09-06T01:42:38.202Z"),{_id: 22779,num: 93097,array: [],obj: {_id: 22780,date: new Date("2018-09-06T12:57:19.968Z"),array: [],obj: {_id: 22781,str: "Coordinator",num: 1138,date: new Date("2018-09-06T06:35:12.454Z"),array: []}}}],obj: {}},"Spain",new Date("2018-09-06T15:37:54.051Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22782,str: "Somalia Rand Loti multimedia",num: 63957,date: new Date("2018-09-06T11:02:00.020Z"),array: ["parsing",new Date("2018-09-06T18:55:08.479Z"),40881,42719,"port disintermediate","Licensed Refined",new Date("2018-09-06T08:21:12.022Z"),53852,"Technician Armenian Dram RSS",[],new Date("2018-09-06T16:58:16.200Z"),"applications",39677]});
    },

    function(coll) {
        return coll.insert({_id: 22783,str: "solid state",num: 31625,date: new Date("2018-09-06T12:35:45.156Z"),obj: {_id: 22784,str: "copying",num: 69395,date: new Date("2018-09-06T00:43:10.665Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22785,str: "communities Table Designer",num: 86207,array: ["Grocery Cambridgeshire","Games",{_id: 22786,str: "Germany",date: new Date("2018-09-06T06:32:37.033Z"),array: [],obj: {_id: 22787,str: "Platinum",num: 52212,obj: {}}},24568,new Date("2018-09-06T18:07:59.305Z"),69129,new Date("2018-09-06T01:20:17.621Z"),new Date("2018-09-06T14:08:25.283Z"),{_id: 22788,str: "open system Maryland",num: 90900,date: new Date("2018-09-06T00:27:30.997Z"),array: [{_id: 22789,str: "Personal Loan Account Tools",num: 17367,date: new Date("2018-09-06T11:18:31.343Z"),array: [7759,"Bike input Representative"]},[],"Yemen invoice",[]],obj: {}},{_id: 22790,num: 23256,date: new Date("2018-09-06T00:54:42.919Z"),array: ["multi-byte",[]]},[50772,94445]],obj: {_id: 22791,str: "array back-end",date: new Date("2018-09-06T07:29:04.780Z")}});
    },

    function(coll) {
        return coll.insert({_id: 22792,str: "grid-enabled",num: 13712,date: new Date("2018-09-06T03:35:41.848Z"),array: [85148,"Rustic Avon",new Date("2018-09-05T21:45:19.742Z"),"Wooden Pines payment",[],54144,"encryption",new Date("2018-09-06T05:50:49.710Z"),{_id: 22793,str: "navigate Avon",num: 23948,date: new Date("2018-09-06T07:57:36.524Z"),obj: {_id: 22794,str: "expedite Executive Tenge",date: new Date("2018-09-06T00:58:01.721Z"),array: [],obj: {}}},[new Date("2018-09-05T23:14:46.448Z"),38026,"Savings Account Optimized deposit",[3545]],[{_id: 22795,date: new Date("2018-09-06T09:59:01.639Z"),obj: {}},new Date("2018-09-05T22:33:58.448Z")],new Date("2018-09-06T09:04:42.302Z")]});
    },

    function(coll) {
        return coll.insert({_id: 22796,str: "Wooden",num: 47405,date: new Date("2018-09-06T06:00:49.472Z"),array: ["Chips Practical Cotton Gloves sensor","compress Wooden JSON",80200,70321,{_id: 22797,str: "Saudi Arabia Investment Account Configuration",num: 10198,date: new Date("2018-09-05T20:55:56.816Z"),array: [],obj: {}},{_id: 22798,str: "firewall Forge",date: new Date("2018-09-06T13:42:53.998Z"),array: [88172,new Date("2018-09-06T09:19:06.282Z"),new Date("2018-09-06T09:15:41.246Z")],obj: {}},29932,[],88027,new Date("2018-09-06T03:57:16.466Z"),["Yen explicit Buckinghamshire",60562]]});
    },

    function(coll) {
        return coll.insert({_id: 22799,str: "Swaziland",num: 46522,date: new Date("2018-09-06T13:21:43.103Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 22800,str: "solution",num: 42865,date: new Date("2018-09-06T00:53:04.102Z"),array: ["tertiary",new Date("2018-09-06T11:09:54.096Z"),87454,47631,new Date("2018-09-06T11:41:46.011Z"),2041,"Branch",new Date("2018-09-06T07:10:41.993Z"),{_id: 22801,str: "Implemented",num: 23996,date: new Date("2018-09-06T08:15:31.245Z"),array: [],obj: {}},"Operations users solution",new Date("2018-09-06T17:59:12.401Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22802,str: "withdrawal Home Loan Account",num: 56301,date: new Date("2018-09-06T11:58:28.305Z"),obj: {_id: 22803,str: "SMTP Credit Card Account",date: new Date("2018-09-06T00:13:48.849Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22804,str: "architect human-resource expedite",date: new Date("2018-09-06T06:21:53.466Z"),array: [[93895,"client-server USB aggregate","framework","system-worthy user-facing Steel"],76482,new Date("2018-09-06T16:41:56.881Z"),new Date("2018-09-06T13:08:03.129Z"),"override",[],new Date("2018-09-06T07:01:19.626Z")],obj: {_id: 22805,str: "function Industrial",num: 25695,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22806,str: "Sausages driver Communications",num: 1300,array: []});
    },

    function(coll) {
        return coll.insert({_id: 22807,str: "invoice",num: 56694,date: new Date("2018-09-06T07:32:05.227Z"),obj: {_id: 22808,str: "Implementation",num: 41002,array: [new Date("2018-09-05T23:10:09.490Z"),70874,{_id: 22809,str: "deposit",date: new Date("2018-09-06T12:04:14.030Z"),array: [12199,"Michigan River",37511,new Date("2018-09-06T04:32:23.353Z"),"open-source Tasty Metal Fish",new Date("2018-09-06T16:30:52.078Z"),{_id: 22810,date: new Date("2018-09-06T04:02:08.436Z"),array: [],obj: {}},new Date("2018-09-06T06:46:17.739Z"),{_id: 22811,str: "holistic Markets Architect",num: 62095,date: new Date("2018-09-06T07:28:55.655Z"),obj: {}}],obj: {}},new Date("2018-09-06T19:14:25.970Z"),"invoice protocol Ergonomic",["Investor Rhode Island",[],62874],"attitude-oriented backing up"]}});
    },

    function(coll) {
        return coll.insert({_id: 22812,str: "Engineer",num: 70700,date: new Date("2018-09-06T14:49:07.738Z"),obj: {_id: 22813,str: "Ford",date: new Date("2018-09-06T06:51:22.733Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22814,str: "Land",num: 33981,date: new Date("2018-09-06T03:42:00.807Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22815,str: "compressing THX",num: 1230,date: new Date("2018-09-06T00:06:44.213Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22816,str: "motivating",num: 5364,date: new Date("2018-09-06T11:23:11.090Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22817,str: "Games",num: 15401,date: new Date("2018-09-06T14:40:55.160Z"),array: [6742,"Minnesota Borders","collaborative extensible",49164,new Date("2018-09-06T10:58:32.526Z"),{_id: 22818,str: "auxiliary",num: 27013,date: new Date("2018-09-05T20:54:33.514Z"),array: [],obj: {}},[new Date("2018-09-06T09:18:16.758Z"),"blue",92631],[],new Date("2018-09-06T07:16:22.396Z"),{_id: 22819,str: "Health 24/7 Knolls",num: 9501,obj: {}},new Date("2018-09-06T11:31:11.478Z"),"monetize Ergonomic"],obj: {_id: 22820,str: "TCP",num: 74247,array: ["hack"]}});
    },

    function(coll) {
        return coll.insert({_id: 22821,str: "Salad JBOD Directives",num: 73844,date: new Date("2018-09-05T20:26:58.593Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22822,str: "architect mindshare Internal",num: 21193,date: new Date("2018-09-06T18:07:47.684Z"),array: [new Date("2018-09-06T04:05:49.908Z"),new Date("2018-09-06T00:15:34.544Z"),"Licensed Wooden Bike","Nevada olive Tuna",{_id: 22823,num: 50900,date: new Date("2018-09-06T14:14:21.270Z"),array: [{_id: 22824,str: "Hat Intelligent",num: 25825,date: new Date("2018-09-06T15:26:59.199Z"),array: [],obj: {_id: 22825,str: "Frozen",array: ["B2C B2B",23664,new Date("2018-09-06T19:03:09.230Z")],obj: {_id: 22826,str: "Operations Jewelery Product",num: 26699,obj: {}}}}]},30326,9355,"Handmade Applications",{_id: 22827,str: "Incredible",num: 30761,obj: {}},23564,new Date("2018-09-06T10:07:33.900Z"),14201,[]]});
    },

    function(coll) {
        return coll.insert({_id: 22828,str: "networks",num: 44277,date: new Date("2018-09-05T20:04:58.011Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22829,str: "Infrastructure Customer Isle",num: 88476,date: new Date("2018-09-06T08:56:08.477Z"),array: [],obj: {_id: 22830,num: 61148,date: new Date("2018-09-06T19:35:13.746Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22831,str: "Pizza",num: 1314,date: new Date("2018-09-06T10:45:20.647Z"),array: [new Date("2018-09-05T19:57:36.411Z"),"Hryvnia",54192,"Identity executive",33532,{_id: 22832,str: "Clothing synthesize",num: 22201,date: new Date("2018-09-06T00:06:33.780Z"),array: [81594],obj: {}},new Date("2018-09-06T05:18:34.173Z"),{_id: 22833,str: "Awesome",num: 47192,date: new Date("2018-09-06T02:26:20.574Z"),array: [],obj: {}},[],{_id: 22834,str: "syndicate Research supply-chains",date: new Date("2018-09-05T22:01:53.203Z"),array: [new Date("2018-09-06T00:28:52.324Z")],obj: {_id: 22835,str: "Legacy Towels sky blue",num: 48853,obj: {_id: 22836,str: "connecting Data",num: 71712,date: new Date("2018-09-06T04:42:23.116Z"),array: []}}},85492,"Research Direct Philippine Peso","Graphical User Interface fault-tolerant Dynamic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22837,str: "incremental Incredible Cotton Chicken",num: 42719,date: new Date("2018-09-05T23:33:52.363Z"),array: [78974,"bluetooth",{_id: 22838,str: "Savings Account digital parsing",date: new Date("2018-09-06T18:08:53.396Z"),obj: {_id: 22839,str: "plum Checking Account intermediate",num: 29854,date: new Date("2018-09-06T19:27:13.478Z"),array: [],obj: {}}},new Date("2018-09-06T00:28:32.613Z"),6182,[{_id: 22840,str: "UIC-Franc Field Landing",num: 56842},"Product"],73954,"Public-key violet Square",[],"groupware Won",new Date("2018-09-06T01:02:53.228Z"),new Date("2018-09-05T22:39:12.689Z")],obj: {_id: 22841,num: 91007,date: new Date("2018-09-06T09:52:57.417Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22842,num: 70651,date: new Date("2018-09-06T01:48:18.872Z"),array: [new Date("2018-09-06T11:24:32.492Z"),"Investment Account Infrastructure Orchestrator",new Date("2018-09-05T23:18:50.440Z"),"needs-based",1984,89505,new Date("2018-09-06T18:05:10.816Z"),[[],33487,{_id: 22843,str: "turquoise haptic Home Loan Account",date: new Date("2018-09-06T11:36:43.196Z"),array: [],obj: {}},9603,79058],"withdrawal incentivize","Small Incredible",new Date("2018-09-06T12:23:46.564Z"),"application parsing platforms"],obj: {_id: 22844,str: "architect alarm",num: 52208,array: [],obj: {_id: 22845,str: "green withdrawal Guyana Dollar",num: 57376,date: new Date("2018-09-06T07:57:23.886Z"),array: ["payment Shirt Unbranded Metal Shoes"]}}});
    },

    function(coll) {
        return coll.insert({_id: 22846,str: "deposit",num: 44064,array: [],obj: {_id: 22847,str: "ADP",num: 77759,date: new Date("2018-09-06T04:26:24.168Z"),array: [new Date("2018-09-06T19:03:11.001Z"),73440,"pink","Savings Account Bridge",new Date("2018-09-06T19:53:27.951Z"),21984,{_id: 22848,num: 23544,date: new Date("2018-09-05T22:44:58.734Z")},"robust",55459,new Date("2018-09-06T07:46:16.922Z"),"Avon invoice Buckinghamshire","Liberia"]}});
    },

    function(coll) {
        return coll.insert({_id: 22849,str: "Games Direct",num: 27277,date: new Date("2018-09-05T20:23:08.071Z"),array: ["plum","Tools Sleek Metal Bike matrix",{_id: 22850,str: "bandwidth",date: new Date("2018-09-06T17:51:12.687Z"),array: [],obj: {}},94518,[74361,new Date("2018-09-06T19:40:23.649Z"),[],[],new Date("2018-09-06T13:09:30.773Z")],"circuit",[new Date("2018-09-06T04:52:08.585Z")],"mission-critical Credit Card Account"],obj: {_id: 22851,num: 82506,date: new Date("2018-09-06T07:24:40.290Z"),array: [],obj: {_id: 22852,str: "Brand structure Cambridgeshire",num: 9518,date: new Date("2018-09-06T05:38:30.850Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 22853,num: 12977,date: new Date("2018-09-06T16:50:34.072Z"),array: [95129,71167,{_id: 22854,str: "SDD",num: 56116,date: new Date("2018-09-06T09:57:34.596Z"),array: [],obj: {}},new Date("2018-09-05T23:29:00.434Z"),5794,"Web Branding",new Date("2018-09-06T11:35:03.751Z"),"Tasty Rubber Shoes",new Date("2018-09-06T11:52:09.539Z"),"Wooden",[11550,{_id: 22855,str: "Awesome Metal Chips multi-byte Usability",num: 10225,date: new Date("2018-09-06T03:32:43.318Z"),array: [],obj: {_id: 22856,str: "User-centric end-to-end",date: new Date("2018-09-06T18:51:59.735Z"),array: [],obj: {_id: 22857,str: "Awesome",num: 12276,array: [],obj: {}}}}],[14401,"Sleek Compatible auxiliary"]]});
    },

    function(coll) {
        return coll.insert({_id: 22858,str: "Executive",num: 92079,date: new Date("2018-09-06T07:47:12.026Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22859,date: new Date("2018-09-06T02:32:54.070Z"),array: [new Date("2018-09-06T11:12:03.828Z"),new Date("2018-09-06T14:54:24.021Z"),39599,new Date("2018-09-05T20:57:05.309Z"),"SSL",39639,new Date("2018-09-06T06:23:59.594Z"),75314,"whiteboard Dynamic Integration",{_id: 22860,str: "hacking Shirt",num: 91855,date: new Date("2018-09-06T13:53:35.074Z"),obj: {}},[],"solid state Forks alarm"],obj: {_id: 22861,str: "Investment Account",num: 43809,array: [50796,"Baby",{_id: 22862,str: "Maine bypassing navigate",num: 1650,date: new Date("2018-09-06T14:15:50.972Z"),array: ["Diverse tan Kenyan Shilling"]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22863,str: "Auto Loan Account Berkshire user-facing",num: 73808,date: new Date("2018-09-06T11:06:27.029Z"),array: ["transmitting Baby",53539,95640,new Date("2018-09-06T05:54:32.391Z"),new Date("2018-09-06T10:21:01.305Z"),93687,[],[new Date("2018-09-06T06:43:58.316Z"),{_id: 22864,num: 96640,date: new Date("2018-09-06T04:52:47.437Z"),array: [],obj: {}},"Incredible Wooden Towels virtual","Borders Chips",28373,"Product"]],obj: {_id: 22865,str: "online Texas",num: 76195,date: new Date("2018-09-06T14:16:24.915Z"),array: [],obj: {_id: 22866,date: new Date("2018-09-06T18:44:04.555Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 22867,str: "New Mexico Lesotho",num: 84998,date: new Date("2018-09-06T04:24:35.352Z"),array: [28308,new Date("2018-09-06T08:32:33.567Z"),[],"payment",{_id: 22868,str: "Gorgeous",array: [62569],obj: {}},28096,[],new Date("2018-09-05T21:45:36.801Z"),"Functionality quantify",new Date("2018-09-06T17:09:34.543Z"),"Tasty Rubber Pizza Handmade",new Date("2018-09-06T15:23:18.192Z"),1961],obj: {_id: 22869,num: 66159,date: new Date("2018-09-06T09:33:48.957Z"),obj: {_id: 22870,str: "Savings Account",num: 28326,date: new Date("2018-09-06T17:39:19.240Z"),array: [[],"Wisconsin alliance"]}}});
    },

    function(coll) {
        return coll.insert({_id: 22871,str: "back-end",num: 59310,date: new Date("2018-09-05T21:56:11.007Z"),array: [new Date("2018-09-06T09:46:34.321Z"),33137,"Dale",new Date("2018-09-06T16:11:49.001Z"),92318,"Credit Card Account RSS",73069,"sensor"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22872,str: "Global Cambridgeshire Incredible Soft Gloves",num: 94497,date: new Date("2018-09-06T09:38:19.919Z"),array: [47195,new Date("2018-09-06T15:14:00.262Z"),387,"Borders Baby",44507,{_id: 22873,str: "virtual",num: 80760,date: new Date("2018-09-06T15:22:35.168Z"),array: [[],new Date("2018-09-06T07:42:15.470Z"),"Optimization Mouse compressing",new Date("2018-09-06T05:13:22.416Z")],obj: {}},{_id: 22874,num: 83957,array: []},"Greens",[new Date("2018-09-05T21:49:01.825Z"),[],"Rhode Island"]]});
    },

    function(coll) {
        return coll.insert({_id: 22875,str: "Agent plum",num: 63106,date: new Date("2018-09-05T22:36:26.750Z"),array: [],obj: {_id: 22876,str: "silver groupware",num: 29233,date: new Date("2018-09-06T16:39:49.185Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22877,str: "Andorra Awesome Soft Computer",num: 22149,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22878,str: "Vietnam Quality-focused",num: 58841,date: new Date("2018-09-06T10:17:20.428Z"),array: [],obj: {_id: 22879,str: "pink Cambridgeshire Investment Account",num: 42975,date: new Date("2018-09-06T15:05:39.210Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22880,str: "Mouse platforms Montana",num: 36398,date: new Date("2018-09-06T05:20:44.728Z"),array: [94519,new Date("2018-09-06T14:55:57.503Z"),"Costa Rica Buckinghamshire",11637,["program Metal",new Date("2018-09-06T09:23:19.140Z")],"synergize neural-net",new Date("2018-09-06T14:16:01.448Z"),22827,new Date("2018-09-06T15:05:11.298Z"),[],94540,{_id: 22881,str: "Illinois Palau",num: 98054,array: [[],"mint green Shoes Intelligent",new Date("2018-09-06T14:58:17.658Z")],obj: {_id: 22882,str: "Team-oriented",num: 94077,array: []}}],obj: {_id: 22883,date: new Date("2018-09-06T07:38:59.618Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22884,str: "Representative background",num: 26651,date: new Date("2018-09-06T07:03:18.981Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22885,str: "Peso Uruguayo Uruguay Peso en Unidades Indexadas holistic",num: 7117,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22886,str: "Syrian Pound Wooden",num: 56463,date: new Date("2018-09-06T13:16:44.026Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22887,str: "Cheese",num: 73321,date: new Date("2018-09-06T04:25:20.378Z"),array: [48666,"compressing tan",new Date("2018-09-06T19:50:35.147Z"),"generate Gibraltar Pakistan Rupee",{_id: 22888,str: "payment Dynamic",num: 35179,date: new Date("2018-09-06T09:23:58.426Z"),array: [],obj: {_id: 22889,str: "Checking Account",num: 15541,array: [],obj: {_id: 22890,num: 54298,date: new Date("2018-09-06T02:25:13.733Z"),array: [[53345,new Date("2018-09-05T21:51:45.216Z")],new Date("2018-09-06T05:38:08.982Z"),"schemas Personal Loan Account Kentucky"],obj: {}}}},"Specialist Benin CSS",new Date("2018-09-06T14:53:24.700Z"),[],"Automated Buckinghamshire Global",new Date("2018-09-06T12:19:46.423Z"),49618,53457],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22891,str: "Mount International navigate",num: 88221,date: new Date("2018-09-06T10:21:44.958Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22892,str: "Manager Maine override",num: 12052,date: new Date("2018-09-05T20:22:56.486Z"),array: ["Designer Group end-to-end",58800,52766,new Date("2018-09-06T12:53:16.013Z"),"Savings Account calculating Nebraska",{_id: 22893,num: 46817,array: [],obj: {_id: 22894,str: "Incredible Concrete Computer hard drive magnetic",num: 66253,date: new Date("2018-09-06T06:46:17.155Z"),array: [],obj: {}}},new Date("2018-09-05T22:43:16.967Z"),"invoice",62598,"solid state Mouse",78260],obj: {_id: 22895,str: "Analyst",num: 67479,date: new Date("2018-09-06T07:16:36.452Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22896,num: 75518,date: new Date("2018-09-06T04:58:26.149Z"),array: ["benchmark context-sensitive Incredible Fresh Chips",46780,"overriding backing up Buckinghamshire",[],{_id: 22897,str: "neural payment",num: 23469,array: [25986,45640,[new Date("2018-09-06T06:10:31.579Z")],new Date("2018-09-06T09:15:51.154Z"),10867,new Date("2018-09-06T15:47:42.564Z")],obj: {_id: 22898,str: "neural",num: 65061,date: new Date("2018-09-06T18:19:56.902Z"),array: [],obj: {}}},new Date("2018-09-06T05:43:12.646Z"),[],"Indian Rupee Ngultrum purple circuit","Fresh digital",new Date("2018-09-06T02:28:55.212Z"),[72225,"target"]],obj: {_id: 22899,str: "infrastructures",date: new Date("2018-09-06T16:22:52.972Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22900,str: "SMTP protocol Directives",num: 83762,array: [45118,62240,"Electronics Auto Loan Account hierarchy",[],new Date("2018-09-05T22:58:41.335Z"),new Date("2018-09-06T19:07:08.880Z"),["red",93755,41218,"Hryvnia programming",new Date("2018-09-05T23:19:54.073Z"),{_id: 22901,str: "Centers Bacon compressing",num: 51688,date: new Date("2018-09-06T06:09:31.602Z"),array: ["Toys Buckinghamshire initiatives"],obj: {_id: 22902,num: 79575,date: new Date("2018-09-06T05:06:57.520Z"),array: [],obj: {}}},new Date("2018-09-06T05:29:45.775Z"),new Date("2018-09-06T17:11:46.260Z"),[],"Cambridgeshire"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22903,str: "Specialist purple Hat",num: 33789,date: new Date("2018-09-06T09:44:57.810Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22904,str: "Investment Account incubate",num: 44055,date: new Date("2018-09-06T02:47:34.870Z"),array: ["FTP user-centric interfaces",new Date("2018-09-06T18:20:06.457Z"),{_id: 22905,num: 38906,date: new Date("2018-09-06T07:52:11.626Z"),array: []},"invoice",new Date("2018-09-06T14:42:23.271Z"),35976,new Date("2018-09-06T16:02:09.679Z")],obj: {_id: 22906,str: "one-to-one firmware Cambridgeshire",date: new Date("2018-09-06T08:46:05.255Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22907,str: "intangible Unbranded SMTP",num: 61863,date: new Date("2018-09-06T12:49:45.114Z"),array: [50305,new Date("2018-09-05T20:39:17.872Z"),"Indonesia quantifying","open-source","turn-key Tunisian Dinar SQL","Bike",new Date("2018-09-06T07:45:29.165Z"),91815,{_id: 22908,str: "Networked Implementation user-centric",num: 92427,array: [],obj: {}},[{_id: 22909,date: new Date("2018-09-06T06:52:45.222Z"),array: []}],new Date("2018-09-06T13:15:41.315Z")],obj: {_id: 22910,str: "strategy Buckinghamshire",date: new Date("2018-09-06T17:15:08.470Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22911,str: "Tasty",num: 89546,date: new Date("2018-09-05T23:22:22.382Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22912,str: "AI Egyptian Pound Incredible",num: 82639,date: new Date("2018-09-06T16:37:58.297Z"),array: [],obj: {_id: 22913,num: 5101,date: new Date("2018-09-06T13:51:56.993Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22914,str: "Paradigm",num: 55099,array: [],obj: {_id: 22915,str: "Pizza Cotton",num: 21195,date: new Date("2018-09-06T11:22:45.165Z"),array: [new Date("2018-09-06T00:26:55.086Z"),new Date("2018-09-06T08:11:18.948Z"),3223,"Pre-emptive bifurcated",[],"Avon customized",new Date("2018-09-06T10:47:06.645Z"),14306,44830,{_id: 22916,num: 70950,date: new Date("2018-09-06T18:58:30.637Z"),array: ["ability"],obj: {}},new Date("2018-09-06T19:21:03.169Z"),{_id: 22917,str: "redundant",date: new Date("2018-09-06T13:19:34.586Z"),array: [],obj: {_id: 22918,str: "Developer",num: 20389,date: new Date("2018-09-06T15:30:09.857Z"),obj: {}}},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 22919,str: "Arkansas Cambridgeshire",num: 14250,date: new Date("2018-09-06T05:51:30.223Z"),array: ["platforms Investor",18003,"background",new Date("2018-09-06T10:23:37.209Z"),"Tasty Concrete Gloves Personal Loan Account Buckinghamshire",new Date("2018-09-06T03:37:26.521Z"),[],new Date("2018-09-06T01:23:53.645Z"),"Dynamic Associate Trail",24265],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22920,num: 6906,date: new Date("2018-09-06T13:46:26.127Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22921,str: "implement",num: 99794,date: new Date("2018-09-06T05:05:13.128Z"),array: [],obj: {_id: 22922,str: "Gorgeous Rubber Gloves",num: 60245,date: new Date("2018-09-05T20:32:08.790Z"),obj: {_id: 22923,str: "program Anguilla Frozen",date: new Date("2018-09-05T20:03:41.434Z"),array: [92117,new Date("2018-09-06T03:38:28.695Z"),new Date("2018-09-06T03:50:41.926Z"),"Kids",new Date("2018-09-06T05:15:00.206Z"),[],{_id: 22924,str: "New Mexico Austria navigating",num: 44525,obj: {}},[43841,{_id: 22925,str: "sexy",date: new Date("2018-09-06T19:36:35.289Z"),array: [26563,"incremental"]}],"metrics communities COM",{_id: 22926,date: new Date("2018-09-05T20:58:42.414Z"),array: []},"teal reinvent",84715],obj: {_id: 22927,str: "payment Fresh",num: 11460,array: [new Date("2018-09-06T16:35:47.030Z")],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 22928,num: 46790,date: new Date("2018-09-06T16:30:31.144Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22929,str: "Bermudian Dollar (customarily known as Bermuda Dollar)",num: 87018,date: new Date("2018-09-06T19:38:36.300Z"),array: [],obj: {_id: 22930,str: "United States of America grid-enabled",date: new Date("2018-09-05T23:24:58.749Z"),array: ["input",new Date("2018-09-06T01:01:00.167Z"),56399,17412,new Date("2018-09-06T13:38:50.697Z"),{_id: 22931,str: "Swiss Franc",num: 90122,date: new Date("2018-09-05T20:00:28.412Z"),obj: {}},new Date("2018-09-05T23:42:01.905Z"),54122,new Date("2018-09-06T17:35:22.531Z"),"Internal object-oriented Future",{_id: 22932,array: ["SMS structure",{_id: 22933,str: "database",num: 49676,date: new Date("2018-09-06T08:21:43.237Z"),obj: {_id: 22934,num: 26019,array: [],obj: {}}},[[],11208]],obj: {_id: 22935,str: "indigo frame Slovakia (Slovak Republic)",num: 66304,date: new Date("2018-09-06T08:32:20.485Z"),array: []}},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22936,str: "Integration Kids GB",date: new Date("2018-09-06T02:21:17.779Z"),array: [],obj: {_id: 22937,str: "HTTP",num: 72743,date: new Date("2018-09-06T02:21:26.355Z"),array: [],obj: {_id: 22938,str: "Keyboard",num: 96103,array: ["mint green",[65517,"Loop backing up Credit Card Account",new Date("2018-09-06T07:47:58.794Z"),new Date("2018-09-06T11:30:13.854Z")],{_id: 22939,num: 16743,date: new Date("2018-09-06T02:27:21.707Z"),array: ["pixel"],obj: {}},"Soft",new Date("2018-09-06T19:03:17.636Z"),"Response",27702,64261,{_id: 22940,num: 43794,date: new Date("2018-09-05T21:15:42.450Z"),obj: {}},39564,new Date("2018-09-06T09:14:59.898Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22941,str: "Credit Card Account",num: 1491,date: new Date("2018-09-06T00:30:56.485Z"),array: [],obj: {_id: 22942,str: "Ohio",num: 12256,array: ["Bolivar Fuerte Bacon payment",new Date("2018-09-06T19:44:27.113Z"),{_id: 22943,str: "groupware Togo",num: 12688,obj: {_id: 22944,str: "system dot-com",date: new Date("2018-09-06T01:53:08.030Z"),array: [],obj: {_id: 22945,str: "User-friendly access Unbranded Soft Hat",num: 86560,date: new Date("2018-09-05T23:18:05.411Z"),array: []}}},80110,"compressing Advanced","synergistic parallelism Realigned",new Date("2018-09-06T10:58:44.832Z"),{_id: 22946,str: "Personal Loan Account",num: 62637,date: new Date("2018-09-05T20:21:52.337Z"),obj: {}},4585,67982,new Date("2018-09-06T08:36:01.264Z"),"Designer leverage International",93270]}});
    },

    function(coll) {
        return coll.insert({_id: 22947,str: "extend",num: 3913,date: new Date("2018-09-06T18:29:54.946Z"),array: [],obj: {_id: 22948,str: "European Unit of Account 17(E.U.A.-17) experiences plum",date: new Date("2018-09-06T07:50:29.795Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22949,str: "Granite",num: 26095,date: new Date("2018-09-06T00:14:07.838Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22950,str: "purple",num: 81398,date: new Date("2018-09-06T10:08:53.634Z"),array: [704,new Date("2018-09-06T12:54:11.362Z"),["Persistent solid state Georgia",new Date("2018-09-06T18:04:32.823Z"),56737,"New Taiwan Dollar Intelligent"],"Buckinghamshire","Directives",new Date("2018-09-06T03:59:01.045Z")],obj: {_id: 22951,num: 39051,date: new Date("2018-09-06T18:14:20.000Z"),array: [26652,[],36843,new Date("2018-09-06T04:46:55.267Z"),{_id: 22952,str: "Grocery Marshall Islands",num: 12725,date: new Date("2018-09-06T03:31:39.127Z"),array: []},"knowledge base"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22953,str: "architecture Angola IB",num: 37267,date: new Date("2018-09-06T08:43:17.296Z"),array: ["generating red Papua New Guinea",84413,"SMS",68151,"empowering",new Date("2018-09-06T15:43:41.741Z"),new Date("2018-09-06T03:06:08.701Z"),[{_id: 22954,str: "Berkshire",num: 26972,date: new Date("2018-09-05T23:57:45.114Z"),array: [],obj: {}},80033,new Date("2018-09-06T00:53:57.927Z")],new Date("2018-09-06T00:30:20.254Z"),{_id: 22955,str: "Marketing transmitting",date: new Date("2018-09-06T15:56:14.660Z"),obj: {_id: 22956,str: "complexity hack Movies",num: 68423,date: new Date("2018-09-06T04:31:48.515Z"),obj: {_id: 22957,str: "Gloves Brunei Dollar",num: 28722,date: new Date("2018-09-06T12:23:21.659Z"),array: []}}},["Rubber",60953,[],7615,[]],{_id: 22958,array: [new Date("2018-09-06T16:46:06.999Z")]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22959,str: "Avon Computers",num: 5663,date: new Date("2018-09-06T05:08:26.798Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22960,str: "fresh-thinking",num: 10690,date: new Date("2018-09-06T18:31:36.934Z"),array: ["Applications grey real-time",89987,new Date("2018-09-05T21:26:21.890Z"),new Date("2018-09-06T06:07:00.399Z"),"Marketing Cambridgeshire Planner",14365,91418,"platforms Legacy silver",[30989,[{_id: 22961,str: "gold Steel",num: 43001,date: new Date("2018-09-06T19:34:46.594Z"),array: []},new Date("2018-09-06T06:40:06.285Z"),[]]],{_id: 22962,str: "Personal Loan Account Kansas payment",date: new Date("2018-09-06T07:39:33.252Z"),array: [],obj: {_id: 22963,str: "quantifying",num: 68120,obj: {}}},{_id: 22964,array: []},"hacking Automotive"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22965,str: "Generic",num: 3260,date: new Date("2018-09-06T01:38:55.646Z"),array: ["Colorado bandwidth Frozen",new Date("2018-09-06T14:43:14.463Z"),28425,"Strategist Toys streamline",new Date("2018-09-06T04:47:46.662Z"),{_id: 22966,str: "Representative",num: 52078,date: new Date("2018-09-06T01:55:50.977Z"),array: [],obj: {}},"monitor Borders",93431,"Gorgeous Wooden Bike Towels Consultant",{_id: 22967,str: "motivating Electronics Turkish Lira",num: 72671,date: new Date("2018-09-06T14:09:54.160Z"),obj: {_id: 22968,str: "Buckinghamshire input Utah",date: new Date("2018-09-06T11:45:01.079Z"),array: [],obj: {_id: 22969,num: 92173,date: new Date("2018-09-06T18:37:36.182Z"),array: [[new Date("2018-09-05T23:58:21.007Z")],[]],obj: {}}}},new Date("2018-09-06T08:38:41.897Z")]});
    },

    function(coll) {
        return coll.insert({_id: 22970,str: "EXE Vietnam",num: 16040,date: new Date("2018-09-06T17:28:23.556Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 22971,str: "Bedfordshire",num: 73584,date: new Date("2018-09-06T00:40:34.721Z"),array: [],obj: {_id: 22972,str: "Industrial",num: 15775,date: new Date("2018-09-06T04:16:28.891Z"),array: ["withdrawal sky blue",{_id: 22973,str: "Cambridgeshire systems Handcrafted Rubber Towels",num: 79820,date: new Date("2018-09-06T12:41:12.028Z"),array: ["backing up Oregon"],obj: {_id: 22974,str: "back-end payment",num: 86428,date: new Date("2018-09-06T16:20:02.951Z")}},new Date("2018-09-06T08:14:29.685Z"),23811,new Date("2018-09-06T17:32:09.122Z"),26896,"reboot",[],[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22975,str: "Analyst Tala",num: 38524,date: new Date("2018-09-06T16:56:14.753Z"),array: [],obj: {_id: 22976,str: "Investment Account sky blue Gloves",date: new Date("2018-09-06T16:04:01.571Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22977,str: "Unbranded Phased",num: 23749,date: new Date("2018-09-06T02:32:56.550Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22978,str: "dedicated",num: 15625,date: new Date("2018-09-05T20:18:44.932Z"),array: [],obj: {_id: 22979,str: "Leone",array: [new Date("2018-09-06T03:05:35.394Z"),83134,"Personal Loan Account reintermediate networks","Steel",[],"Future adapter",{_id: 22980,str: "scale",num: 48171,date: new Date("2018-09-06T15:35:03.860Z"),array: [new Date("2018-09-06T11:57:49.046Z"),5802,new Date("2018-09-06T03:01:01.447Z")],obj: {}},75783,new Date("2018-09-06T15:08:18.847Z"),28025,"plum mobile"],obj: {_id: 22981,str: "CSS integrate transmitting",date: new Date("2018-09-06T04:59:01.351Z"),array: [{_id: 22982,str: "sensor",num: 36917,date: new Date("2018-09-06T19:16:26.479Z"),array: [],obj: {}},"lavender Sierra Leone Assimilated"],obj: {_id: 22983,str: "Coordinator",num: 97106}}}});
    },

    function(coll) {
        return coll.insert({_id: 22984,str: "Incredible generate Borders",num: 19865,date: new Date("2018-09-05T22:39:37.942Z"),array: [37049,new Date("2018-09-06T12:07:17.276Z"),"Fantastic",new Date("2018-09-06T08:16:39.420Z"),{_id: 22985,str: "system Texas",num: 43829,date: new Date("2018-09-06T07:40:05.466Z"),array: []},new Date("2018-09-06T13:31:45.191Z"),"Ball Salad EXE",{_id: 22986,date: new Date("2018-09-06T18:21:05.744Z"),array: ["Triple-buffered HDD",48793],obj: {}},[],new Date("2018-09-06T00:26:38.309Z"),29637,{_id: 22987,num: 86730,array: [new Date("2018-09-05T21:12:27.854Z")],obj: {}}],obj: {_id: 22988,str: "innovate Quality",num: 1050,obj: {_id: 22989,str: "frame Borders",date: new Date("2018-09-06T14:51:19.930Z"),array: [],obj: {_id: 22990,str: "Mountains Fresh Shoes",num: 48537}}}});
    },

    function(coll) {
        return coll.insert({_id: 22991,str: "application RSS",date: new Date("2018-09-06T04:55:55.669Z"),array: [86708,new Date("2018-09-06T04:41:56.358Z"),"Books",new Date("2018-09-05T23:11:42.878Z"),{_id: 22992,str: "payment bluetooth Auto Loan Account",num: 87138,obj: {}},"Inlet integrate",65279,[],{_id: 22993,str: "Shirt Handcrafted Soft Salad Marketing",num: 37073,date: new Date("2018-09-06T11:55:49.206Z"),array: []}],obj: {_id: 22994,num: 44151,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22995,str: "Uruguay Strategist pink",num: 9581,date: new Date("2018-09-06T02:49:36.590Z"),array: [88763,new Date("2018-09-06T16:02:40.316Z"),{_id: 22996,str: "platforms Fantastic Fresh Cheese",num: 36398,date: new Date("2018-09-05T23:28:48.121Z"),array: ["local area network Metal",87413,new Date("2018-09-06T02:05:28.920Z")],obj: {}},34255,new Date("2018-09-06T11:12:11.094Z"),{_id: 22997,str: "Hungary Rustic Plastic Chips",num: 21521,date: new Date("2018-09-06T16:32:38.888Z"),obj: {}},"override Egyptian Pound","Automotive Home Loan Account moratorium",[],95367],obj: {_id: 22998,str: "non-volatile",array: [[45859,[],"distributed New Caledonia Toys","Cambridgeshire"],[new Date("2018-09-06T15:54:53.320Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22999,num: 36985,date: new Date("2018-09-06T14:04:37.802Z"),array: ["Switchable Berkshire",new Date("2018-09-06T08:01:19.977Z"),66133,{_id: 23000,num: 66151,date: new Date("2018-09-06T11:45:05.819Z"),array: [92191],obj: {}},[],"explicit mobile Integration",new Date("2018-09-06T06:57:23.866Z"),47381,"Orchestrator Handcrafted Concrete Chair",[],56356,new Date("2018-09-06T14:34:45.598Z")]});
    },

    function(coll) {
        return coll.insert({_id: 23001,str: "Shirt bricks-and-clicks Gorgeous Granite Towels",num: 62903,date: new Date("2018-09-06T02:30:08.107Z"),array: ["Congolese Franc interactive Checking Account",90350,new Date("2018-09-06T15:37:18.457Z"),new Date("2018-09-06T06:24:20.954Z"),new Date("2018-09-06T05:32:30.820Z"),new Date("2018-09-06T01:45:24.626Z"),"dot-com",6888,34764,[],39991,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23002,str: "Marketing indigo",num: 76604,date: new Date("2018-09-06T00:47:27.299Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23003,str: "Checking Account Technician",num: 63618,date: new Date("2018-09-06T06:22:34.311Z"),array: [],obj: {_id: 23004,str: "mint green Saudi Riyal",num: 20286,array: ["Concrete",99038,[],{_id: 23005,str: "Mali Gorgeous",num: 36828,date: new Date("2018-09-06T13:43:11.569Z"),obj: {_id: 23006,str: "array",num: 94517,date: new Date("2018-09-06T12:09:13.811Z"),array: [new Date("2018-09-06T08:50:39.507Z")],obj: {}}},{_id: 23007,str: "generate Missouri",num: 88290,date: new Date("2018-09-06T02:02:25.962Z"),array: ["Legacy target"],obj: {}},new Date("2018-09-05T21:47:03.753Z"),"cross-platform JSON",[],{_id: 23008,array: [],obj: {}},31826,"brand Egyptian Pound",new Date("2018-09-06T03:13:31.317Z"),new Date("2018-09-06T11:28:20.446Z"),43876]}});
    },

    function(coll) {
        return coll.insert({_id: 23009,str: "multi-tasking",num: 14049,date: new Date("2018-09-06T01:15:27.523Z"),array: [new Date("2018-09-06T03:01:04.910Z"),"Nicaragua invoice",90810,[{_id: 23010,str: "auxiliary",num: 44744,date: new Date("2018-09-06T04:17:42.732Z"),array: [],obj: {_id: 23011,str: "Networked compressing",date: new Date("2018-09-06T09:43:58.489Z"),array: [],obj: {}}},{_id: 23012,str: "Fort",num: 3398,date: new Date("2018-09-06T18:17:04.196Z")},87781],"Berkshire Manat",new Date("2018-09-06T01:34:07.421Z"),new Date("2018-09-06T07:20:53.973Z"),new Date("2018-09-06T17:17:05.248Z"),"system engine",85969,{_id: 23013,str: "SSL Belarussian Ruble",num: 59701,date: new Date("2018-09-05T23:01:52.100Z"),array: [],obj: {_id: 23014,array: [47718],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 23015,str: "Mountains intuitive",num: 59759,date: new Date("2018-09-06T09:54:50.677Z"),array: ["hacking",new Date("2018-09-06T03:51:24.829Z"),38933,"Soft",new Date("2018-09-06T05:34:35.426Z"),51316,[new Date("2018-09-06T02:53:32.021Z"),23109,{_id: 23016,str: "multi-byte Kids",num: 76296,date: new Date("2018-09-06T17:16:22.539Z"),obj: {}}],99437,"Ethiopia Savings Account invoice",{_id: 23017,array: [],obj: {_id: 23018,str: "bleeding-edge",num: 26908,date: new Date("2018-09-06T03:46:10.979Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23019,str: "Handmade",num: 30353,array: [{_id: 23020,str: "Manager Estates",date: new Date("2018-09-06T10:33:38.988Z"),obj: {_id: 23021,str: "Upgradable website",num: 52224,date: new Date("2018-09-06T18:26:32.170Z"),array: []}},78941,"vortals",2013,10397,new Date("2018-09-05T20:01:44.981Z"),[new Date("2018-09-06T06:09:03.359Z"),[],new Date("2018-09-06T11:29:35.248Z")],"Customizable Berkshire","cross-platform Car pink",[40466],"Auto Loan Account Intuitive"]});
    },

    function(coll) {
        return coll.insert({_id: 23022,str: "Paradigm Ireland Awesome Granite Chair",num: 92400,date: new Date("2018-09-06T01:48:09.009Z"),array: [26134,new Date("2018-09-05T20:34:36.960Z"),93407,[],new Date("2018-09-06T19:11:06.188Z"),"Paradigm Fiji Dollar teal",{_id: 23023,str: "Euro Horizontal",num: 14367,date: new Date("2018-09-06T09:42:24.244Z"),array: [],obj: {_id: 23024,date: new Date("2018-09-06T19:12:25.737Z"),array: [new Date("2018-09-06T11:51:12.716Z"),{_id: 23025,str: "Mouse Missouri",num: 21579,date: new Date("2018-09-06T01:32:03.134Z"),array: [],obj: {}},{_id: 23026,obj: {}},"approach","Planner emulation Tasty Frozen Soap",[]],obj: {_id: 23027,num: 42617}}},58075,["Computer"],91398,77342]});
    },

    function(coll) {
        return coll.insert({_id: 23028,str: "indexing value-added",num: 30763,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23029,str: "compress",date: new Date("2018-09-06T16:17:15.594Z"),array: [],obj: {_id: 23030,str: "cutting-edge",num: 91300,date: new Date("2018-09-06T02:16:30.607Z"),array: ["International Cambridgeshire Berkshire","Baby black",new Date("2018-09-06T19:36:39.728Z"),[],50576,new Date("2018-09-06T09:10:57.354Z"),{_id: 23031,str: "Alaska Fresh Corporate",num: 58570,date: new Date("2018-09-06T14:05:35.003Z"),array: [16401,new Date("2018-09-06T07:43:36.787Z")]},"Jewelery",[],new Date("2018-09-06T17:01:24.836Z"),{_id: 23032,str: "Universal Practical Indian Rupee Ngultrum",num: 31504,date: new Date("2018-09-06T17:11:38.609Z"),obj: {}},"Generic Croatian Kuna Organic","invoice Louisiana"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23033,str: "whiteboard target Intuitive",num: 45026,date: new Date("2018-09-06T16:57:50.183Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23034,str: "Health payment",num: 1641,date: new Date("2018-09-06T07:18:35.563Z"),array: [],obj: {_id: 23035,str: "Finland deposit Incredible",num: 5625,array: [{_id: 23036,str: "Centralized Small Cheese",date: new Date("2018-09-06T00:02:29.433Z"),array: []},"Usability Tools",74097,"Keys SSL","tan morph invoice",new Date("2018-09-06T09:28:01.185Z"),new Date("2018-09-06T03:06:37.786Z"),new Date("2018-09-06T05:50:42.570Z"),[],new Date("2018-09-06T14:42:37.893Z"),25821,84752,48895],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23037,str: "Vermont",num: 71119,date: new Date("2018-09-06T15:46:42.419Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23038,str: "Sharable support",num: 33432,date: new Date("2018-09-06T03:02:20.687Z"),array: [],obj: {_id: 23039,str: "Credit Card Account SMTP",num: 93598,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23040,str: "Administrator HDD Shoes",num: 40448,date: new Date("2018-09-06T12:45:13.138Z"),array: ["vortals","Fresh Tuna Soft",68085,new Date("2018-09-06T18:33:52.770Z"),87499,[new Date("2018-09-06T12:29:19.723Z"),8842],"analyzing","plum Metrics Savings Account",new Date("2018-09-06T00:16:56.787Z"),20823,68182,{_id: 23041,str: "FTP",num: 79914,date: new Date("2018-09-06T19:40:23.566Z"),array: [[],new Date("2018-09-06T05:43:23.157Z")]},{_id: 23042,str: "Stravenue",num: 70492,array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23043,str: "wireless orchestration solid state",num: 16309,date: new Date("2018-09-06T12:05:45.039Z"),array: [22220,[new Date("2018-09-06T13:09:50.301Z"),"digital Object-based","Music"],1267,[],"sky blue Cambridgeshire",95656,new Date("2018-09-06T04:45:32.833Z"),new Date("2018-09-06T05:08:01.647Z"),92176,new Date("2018-09-06T05:02:59.101Z"),[]],obj: {_id: 23044,str: "Alabama Salad withdrawal",date: new Date("2018-09-06T17:16:47.473Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23045,str: "fuchsia ADP generating",num: 97012,date: new Date("2018-09-05T23:53:32.623Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23046,str: "Seamless",num: 45032,date: new Date("2018-09-06T12:35:41.253Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23047,str: "Auto Loan Account",array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23048,str: "matrix Gorgeous",num: 42194,date: new Date("2018-09-06T14:08:04.918Z"),array: [25930,"Morocco synergies Nepalese Rupee",new Date("2018-09-06T10:16:14.694Z"),{_id: 23049,str: "backing up Zambia clear-thinking",num: 76801,array: [[],new Date("2018-09-06T12:44:11.661Z")],obj: {_id: 23050,str: "extranet Regional tan",num: 31831,date: new Date("2018-09-05T23:42:03.312Z"),array: [96477,["Kentucky",[9745,new Date("2018-09-06T14:22:44.685Z")]],"circuit Texas Handcrafted Steel Salad"]}},{_id: 23051,num: 69309,date: new Date("2018-09-06T11:10:25.823Z"),array: [],obj: {}},new Date("2018-09-06T07:36:24.928Z"),"supply-chains",new Date("2018-09-06T16:14:14.537Z"),{_id: 23052,str: "Intranet",num: 76873,date: new Date("2018-09-06T17:38:33.689Z")},"Incredible Frozen Shoes",17286,"quantify",14924],obj: {_id: 23053,str: "alarm",date: new Date("2018-09-06T02:39:39.588Z"),obj: {_id: 23054,num: 14859,date: new Date("2018-09-05T22:29:04.350Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23055,str: "National Object-based",num: 26385,date: new Date("2018-09-06T04:51:29.733Z"),array: ["Bedfordshire redundant",34693,new Date("2018-09-06T02:57:20.845Z"),39208,new Date("2018-09-06T17:38:51.916Z"),new Date("2018-09-06T02:15:55.188Z"),"Games knowledge base",[[],{_id: 23056,str: "payment Communications",num: 60433,date: new Date("2018-09-05T22:36:18.459Z"),array: ["program solid state"]},new Date("2018-09-06T19:38:41.393Z"),"Checking Account"],70392,new Date("2018-09-05T19:56:34.867Z"),[],{_id: 23057,str: "content middleware plum",num: 48170,array: [],obj: {}}],obj: {_id: 23058,num: 24736,date: new Date("2018-09-06T07:28:17.599Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 23059,str: "Kansas Grocery",num: 44247,obj: {_id: 23060,str: "override Consultant Guyana",num: 55898,date: new Date("2018-09-06T00:03:31.939Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23061,str: "Concrete quantifying",num: 59560,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23062,str: "Corporate AGP Industrial",num: 27465,date: new Date("2018-09-06T04:11:27.994Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23063,str: "Garden",num: 92782,date: new Date("2018-09-05T21:38:26.108Z"),array: [{_id: 23064,str: "withdrawal",num: 5942,array: [],obj: {}},44848,"Health",13278,[new Date("2018-09-06T05:57:49.138Z"),new Date("2018-09-06T06:02:35.827Z"),["Product haptic",{_id: 23065,str: "Ergonomic",date: new Date("2018-09-05T21:10:16.652Z"),array: [],obj: {_id: 23066,str: "Administrator facilitate",num: 83098,date: new Date("2018-09-06T05:28:21.333Z"),array: []}},new Date("2018-09-06T04:45:16.218Z"),"primary National International","Ergonomic Fresh Hat extensible",29528]],{_id: 23067,str: "Alaska",num: 93639,date: new Date("2018-09-06T01:16:34.236Z"),obj: {}},"Optional",[],79938,"Games Checking Account"]});
    },

    function(coll) {
        return coll.insert({_id: 23068,str: "logistical Applications",num: 33027,date: new Date("2018-09-06T08:52:34.552Z"),array: ["Down-sized Regional",new Date("2018-09-06T05:20:00.357Z"),"Tenge withdrawal copying",[],"connect Credit Card Account grid-enabled",68364,"Practical Outdoors drive",31012,new Date("2018-09-06T09:36:01.976Z"),new Date("2018-09-06T05:30:05.391Z")]});
    },

    function(coll) {
        return coll.insert({_id: 23069,str: "Bahraini Dinar",num: 95287,date: new Date("2018-09-06T05:13:16.132Z"),array: [new Date("2018-09-06T06:29:22.542Z"),"Michigan Virgin Islands, British Licensed Wooden Sausages",new Date("2018-09-06T19:49:15.802Z"),new Date("2018-09-06T15:07:15.149Z")],obj: {_id: 23070,num: 95851,date: new Date("2018-09-05T22:55:47.983Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23071,str: "Brand Investment Account morph",num: 15149,array: [new Date("2018-09-06T15:35:07.092Z"),new Date("2018-09-06T12:36:14.125Z"),"networks leverage",new Date("2018-09-06T19:09:47.624Z"),24561,[87494,[],{_id: 23072,str: "monitoring transmit",num: 79627,date: new Date("2018-09-05T20:05:31.871Z"),array: [],obj: {}},"HDD seamless Administrator","copy",32912,61790],[new Date("2018-09-06T15:42:18.872Z"),new Date("2018-09-06T00:25:18.606Z")]],obj: {_id: 23073,num: 98403,date: new Date("2018-09-06T00:19:36.850Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 23074,str: "synthesizing Practical Concrete Bike client-server",date: new Date("2018-09-06T19:49:37.478Z"),array: [new Date("2018-09-06T08:02:29.869Z"),new Date("2018-09-06T06:51:54.207Z"),62549,new Date("2018-09-06T08:13:36.604Z"),"Tasty Frozen Sausages",53533,32497,"Bacon",75441,"white",{_id: 23075,str: "Personal Loan Account Technician Business-focused",num: 27227,date: new Date("2018-09-06T14:39:41.584Z"),array: [10432,[],[],new Date("2018-09-06T18:43:09.912Z")],obj: {}}],obj: {_id: 23076,str: "Sleek",num: 443,obj: {_id: 23077,num: 71386,date: new Date("2018-09-06T06:02:04.159Z"),array: [23249],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23078,num: 26099,date: new Date("2018-09-05T21:41:08.644Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23079,num: 84566,array: ["National",{_id: 23080,str: "Handcrafted Soft Towels",num: 14291,date: new Date("2018-09-06T01:23:56.348Z"),array: [new Date("2018-09-05T22:10:14.346Z"),"deploy payment"],obj: {_id: 23081,num: 63895,date: new Date("2018-09-06T18:19:59.716Z"),array: [],obj: {}}},new Date("2018-09-06T16:42:15.106Z"),61729,[],"Bacon",56140,91687,{_id: 23082,str: "Avon synthesize Nepalese Rupee",num: 33925,date: new Date("2018-09-06T03:40:40.632Z"),array: [2536]},new Date("2018-09-06T15:18:28.581Z"),"world-class",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23083,str: "primary deposit Switchable",num: 51402,date: new Date("2018-09-06T01:06:04.787Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23084,str: "Facilitator EXE",num: 17711,date: new Date("2018-09-06T13:33:56.928Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 23085,str: "Northern Mariana Islands Chicken",num: 48053,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23086,str: "Games Mills Supervisor",num: 52587,date: new Date("2018-09-06T03:15:59.506Z"),array: ["end-to-end Ports",5401,[],21133,new Date("2018-09-05T22:38:11.966Z"),"HTTP payment",{_id: 23087,str: "generating",num: 39415,date: new Date("2018-09-05T20:03:57.988Z"),array: [new Date("2018-09-06T14:05:07.186Z"),[],new Date("2018-09-06T12:07:56.181Z")],obj: {_id: 23088,num: 85948,date: new Date("2018-09-06T17:59:31.376Z"),array: ["Metal drive Savings Account"],obj: {}}},{_id: 23089,str: "maximized Fresh",num: 67519,date: new Date("2018-09-06T12:23:27.372Z"),array: [],obj: {_id: 23090,str: "Division Auto Loan Account",num: 87869,date: new Date("2018-09-06T09:35:01.627Z"),array: [],obj: {_id: 23091,str: "Buckinghamshire Ohio",obj: {_id: 23092,str: "generate",num: 49755}}}},new Date("2018-09-06T11:20:58.427Z"),{_id: 23093,date: new Date("2018-09-06T09:09:19.011Z"),obj: {_id: 23094,array: [50725,85511,"maroon"]}},[new Date("2018-09-06T02:53:29.264Z")],"Home Loan Account sky blue Bedfordshire","Pound Sterling SAS frictionless"],obj: {_id: 23095,num: 73801}});
    },

    function(coll) {
        return coll.insert({_id: 23096,str: "zero defect Small Concrete Chicken",num: 69902,date: new Date("2018-09-06T02:34:38.021Z"),array: ["Designer Global",87932,"website",{_id: 23097,str: "brand Kids Paradigm",num: 41933,date: new Date("2018-09-06T05:58:53.849Z"),array: [[new Date("2018-09-05T22:18:45.117Z")],new Date("2018-09-06T14:01:38.273Z"),89977,[],new Date("2018-09-06T18:14:50.090Z")],obj: {}},{_id: 23098,num: 64655,date: new Date("2018-09-05T21:22:50.107Z"),array: [],obj: {}},"Streamlined Fantastic Fresh Chicken",new Date("2018-09-06T15:15:51.733Z"),"initiatives Agent",35011,"Home Loan Account bricks-and-clicks generate",73744,{_id: 23099,str: "teal Licensed",obj: {_id: 23100,str: "plug-and-play directional Group",num: 38501,date: new Date("2018-09-05T20:19:15.741Z"),array: [new Date("2018-09-06T02:59:22.126Z")],obj: {_id: 23101,str: "web-readiness back up",num: 64919,date: new Date("2018-09-06T01:23:30.131Z")}}}]});
    },

    function(coll) {
        return coll.insert({_id: 23102,str: "Health",num: 41344,date: new Date("2018-09-06T02:51:21.724Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23103,str: "back up",num: 71908,date: new Date("2018-09-06T16:30:33.351Z"),array: [],obj: {_id: 23104,str: "Phased Fantastic Concrete Keyboard Fantastic Plastic Sausages",num: 29322,date: new Date("2018-09-06T06:09:15.773Z"),array: ["holistic utilize","microchip",new Date("2018-09-06T10:57:26.774Z"),"Bacon Concrete integrated",99072,51921,new Date("2018-09-06T07:24:44.934Z"),new Date("2018-09-06T05:17:42.003Z"),{_id: 23105,array: [[{_id: 23106,num: 84340,date: new Date("2018-09-06T15:50:27.098Z"),obj: {}}],new Date("2018-09-06T11:08:52.042Z")]},{_id: 23107,str: "Personal Loan Account Fantastic Tanzanian Shilling",num: 85014,date: new Date("2018-09-06T04:39:23.808Z"),array: [],obj: {}},new Date("2018-09-05T21:39:19.507Z"),1684,new Date("2018-09-06T14:59:26.942Z"),"salmon"]}});
    },

    function(coll) {
        return coll.insert({_id: 23108,str: "front-end Refined Metal Shirt Intelligent Soft Hat",num: 96773,date: new Date("2018-09-06T11:46:43.932Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 23109,str: "Profound",num: 71880,date: new Date("2018-09-06T12:54:45.145Z"),array: [new Date("2018-09-05T23:35:11.614Z"),24220,"cross-platform connecting Garden",{_id: 23110,str: "Response system Indiana",array: [],obj: {}},6600,new Date("2018-09-06T15:20:00.782Z"),"payment",new Date("2018-09-06T12:49:05.631Z"),4973,new Date("2018-09-06T12:32:36.359Z"),"SCSI"],obj: {_id: 23111,str: "UAE Dirham mobile high-level",num: 26958,date: new Date("2018-09-06T08:13:42.971Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23112,str: "Hawaii Bike",num: 66873,date: new Date("2018-09-05T21:05:13.148Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23113,str: "Licensed Rubber Hat",num: 58853,date: new Date("2018-09-06T09:11:10.680Z"),obj: {_id: 23114,str: "Bedfordshire",num: 75432,date: new Date("2018-09-05T21:14:42.298Z"),array: [54850,"overriding redefine",[],new Date("2018-09-06T06:48:19.142Z"),new Date("2018-09-06T09:06:14.019Z"),{_id: 23115,str: "user-centric",num: 76050,date: new Date("2018-09-06T16:30:03.062Z"),array: [],obj: {}},"Borders Auto Loan Account",22170,"redefine open-source"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23116,str: "cross-platform",num: 73043,date: new Date("2018-09-06T16:19:51.631Z"),array: [],obj: {_id: 23117,str: "Open-source North Dakota copy",num: 17741,array: [95242,36533,"Tasty capability",new Date("2018-09-06T12:18:23.488Z"),"Jewelery Intelligent",41079,new Date("2018-09-06T19:51:01.723Z"),[21398,"Green integrate Health",new Date("2018-09-06T04:40:28.632Z"),{_id: 23118,date: new Date("2018-09-06T03:54:33.688Z"),obj: {}},{_id: 23119,str: "local",num: 80214,date: new Date("2018-09-06T07:12:40.510Z"),array: [],obj: {_id: 23120,num: 43296,array: []}}],new Date("2018-09-06T01:07:37.761Z"),"artificial intelligence Norfolk Island"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23121,str: "Burundi Franc",num: 28324,date: new Date("2018-09-06T18:57:27.797Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23122,num: 78345,date: new Date("2018-09-06T07:02:47.026Z"),array: [],obj: {_id: 23123,str: "sensor Chile",num: 84254,date: new Date("2018-09-06T02:30:30.671Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23124,str: "Cotton Bahraini Dinar Intelligent",date: new Date("2018-09-06T15:26:23.983Z"),array: [],obj: {_id: 23125,str: "granular hierarchy Avon",num: 22436,date: new Date("2018-09-05T22:05:29.784Z"),array: [new Date("2018-09-06T17:36:46.851Z"),"generating Factors Shoes",new Date("2018-09-06T06:29:44.666Z"),"front-end",34064,83190,18841,new Date("2018-09-06T16:48:33.417Z"),"Garden",{_id: 23126,str: "system International mobile",num: 3986,date: new Date("2018-09-06T02:09:13.709Z"),array: [],obj: {}},[{_id: 23127,num: 47208,obj: {_id: 23128,str: "Montenegro",num: 69041,date: new Date("2018-09-06T14:05:35.473Z")}}],[],"sticky",new Date("2018-09-06T16:27:59.129Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23129,str: "redundant",num: 40215,date: new Date("2018-09-06T03:12:14.143Z"),array: [["Supervisor lavender"],{_id: 23130,str: "withdrawal Cambridgeshire JBOD",num: 95880,array: [],obj: {}},34691,new Date("2018-09-06T05:10:04.376Z"),"cohesive",new Date("2018-09-05T20:18:32.591Z"),57207,"Ball",new Date("2018-09-06T17:20:34.761Z"),[],"Plastic",{_id: 23131,str: "Practical Wooden Shoes Baby",array: [],obj: {_id: 23132,str: "modular Infrastructure",num: 78756,date: new Date("2018-09-06T10:20:52.911Z"),array: [new Date("2018-09-06T13:02:08.077Z"),[],{_id: 23133,str: "back-end JSON",num: 69432,date: new Date("2018-09-06T16:35:38.883Z"),obj: {_id: 23134,date: new Date("2018-09-06T06:19:26.248Z"),array: [[]],obj: {}}},67583]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23135,str: "Reverse-engineered",date: new Date("2018-09-06T04:27:19.053Z")});
    },

    function(coll) {
        return coll.insert({_id: 23136,str: "Generic Wooden Chair Tasty Soft Chips",num: 3033,date: new Date("2018-09-06T07:00:09.049Z"),array: [],obj: {_id: 23137,str: "hack mobile Persevering",date: new Date("2018-09-05T21:37:16.621Z"),array: [59088,{_id: 23138,str: "open-source approach",num: 36013,date: new Date("2018-09-06T17:50:32.475Z"),obj: {}},new Date("2018-09-06T12:13:04.889Z"),"synthesizing",54276,[new Date("2018-09-06T07:38:26.289Z"),11665,new Date("2018-09-06T03:33:29.261Z")],"USB ROI RSS",{_id: 23139,str: "invoice solid state payment",date: new Date("2018-09-05T22:39:54.970Z"),array: [],obj: {_id: 23140,num: 43619,array: ["Concrete",9187,["Home Refined Cotton Soap heuristic","Berkshire Handcrafted"],["Myanmar Mississippi",{_id: 23141,str: "copy mission-critical Home",num: 41810}]],obj: {_id: 23142,num: 52163,date: new Date("2018-09-06T02:42:51.434Z"),array: []}}}],obj: {_id: 23143,num: 70542}}});
    },

    function(coll) {
        return coll.insert({_id: 23144,str: "Principal",num: 71879,date: new Date("2018-09-05T21:25:45.230Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23145,str: "Turnpike synergistic United Arab Emirates",num: 86592,date: new Date("2018-09-06T14:36:57.293Z"),array: ["pixel Bypass",new Date("2018-09-06T10:32:42.715Z"),"unleash website Cheese",{_id: 23146,date: new Date("2018-09-06T16:43:32.692Z"),array: [],obj: {}},88112,"architect Brand bandwidth",new Date("2018-09-05T23:38:59.558Z"),"Computers Plastic",{_id: 23147,str: "Forward",num: 10686,array: [],obj: {_id: 23148,str: "Supervisor Product Gorgeous Granite Ball",date: new Date("2018-09-06T08:10:31.197Z"),array: [66076,[23204,new Date("2018-09-06T15:15:35.896Z")]]}},22013,[{_id: 23149,num: 54903,date: new Date("2018-09-06T05:19:03.391Z"),obj: {_id: 23150,str: "JBOD",num: 73468}},4470],"transmit Keyboard Path",new Date("2018-09-06T17:29:49.840Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23151,str: "Concrete repurpose Cape Verde Escudo",num: 9414,date: new Date("2018-09-06T05:32:47.118Z"),array: [new Date("2018-09-06T16:31:30.684Z"),54218,"Group Iceland",new Date("2018-09-06T06:04:50.092Z"),{_id: 23152,str: "Pennsylvania hack hacking",num: 70528,date: new Date("2018-09-06T13:11:22.865Z"),array: [],obj: {_id: 23153,str: "hard drive",num: 65082,date: new Date("2018-09-06T11:22:59.270Z"),obj: {_id: 23154,str: "transparent Utah",num: 29187,date: new Date("2018-09-06T11:04:06.081Z"),array: []}}},78260,"success","multi-tasking",89656,57653,new Date("2018-09-06T16:21:28.084Z"),[{_id: 23155,num: 13867,date: new Date("2018-09-06T15:22:19.418Z"),array: []},new Date("2018-09-06T11:06:10.010Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23156,str: "Oklahoma",num: 520,date: new Date("2018-09-06T05:13:48.065Z"),array: [],obj: {_id: 23157,date: new Date("2018-09-06T19:41:32.691Z"),array: [{_id: 23158,str: "Lane Computers Function-based",num: 46449,date: new Date("2018-09-05T22:59:19.741Z"),obj: {_id: 23159,str: "Kroon convergence",num: 29333,date: new Date("2018-09-06T04:49:34.175Z"),array: [],obj: {}}},"Awesome Fresh Chips",14369,new Date("2018-09-06T09:51:48.029Z"),43959,new Date("2018-09-06T12:28:13.711Z"),1161,"Alaska redundant Secured","impactful",75489],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23160,str: "harness Unbranded Steel Computer exuding",num: 9390,date: new Date("2018-09-06T19:49:53.764Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23161,str: "convergence yellow Texas",num: 59303,date: new Date("2018-09-06T17:05:23.578Z"),array: ["Orchard",6100,{_id: 23162,str: "Refined",num: 38650,array: [],obj: {}},"fresh-thinking","Bedfordshire Optimization",new Date("2018-09-06T19:22:09.709Z"),52389,{_id: 23163,str: "Home Loan Account frictionless",num: 40036,date: new Date("2018-09-06T05:27:16.596Z"),array: [new Date("2018-09-05T21:35:08.845Z"),88517,[],"Tasty Soft"],obj: {_id: 23164,str: "Tools actuating Terrace",num: 60390,date: new Date("2018-09-06T19:48:52.746Z"),array: [],obj: {}}},new Date("2018-09-06T03:15:21.257Z"),{_id: 23165,str: "generate",obj: {_id: 23166,num: 11047,array: [],obj: {_id: 23167,num: 53499,date: new Date("2018-09-06T17:11:06.216Z"),array: [new Date("2018-09-06T14:47:13.568Z")]}}},"ivory Concrete Health",new Date("2018-09-06T18:29:57.713Z"),44985,"Chips THX Security"]});
    },

    function(coll) {
        return coll.insert({_id: 23168,str: "Metal",num: 22668,date: new Date("2018-09-06T12:11:51.341Z"),array: ["challenge Saint Kitts and Nevis card",new Date("2018-09-06T16:19:33.166Z"),new Date("2018-09-06T17:36:03.975Z"),"aggregate",70906,50137,{_id: 23169,str: "static",num: 56413,date: new Date("2018-09-06T12:14:27.535Z"),array: [[],new Date("2018-09-05T22:59:04.398Z"),"Bolivar Fuerte Awesome","seamless"],obj: {_id: 23170,str: "collaborative",num: 88713,date: new Date("2018-09-06T09:46:29.205Z"),array: [{_id: 23171,num: 71850,obj: {}}]}},{_id: 23172,array: [],obj: {_id: 23173,str: "Data Bike",date: new Date("2018-09-06T09:10:09.324Z"),array: [new Date("2018-09-06T19:36:54.603Z"),25224]}},{_id: 23174,str: "Hills Montana Tunisia",num: 61238,date: new Date("2018-09-05T21:58:56.059Z"),obj: {}},22633]});
    },

    function(coll) {
        return coll.insert({_id: 23175,num: 18071,date: new Date("2018-09-06T17:01:57.087Z"),array: [81031,"virtual national Incredible Rubber Shirt",new Date("2018-09-06T04:02:06.437Z"),[60952,new Date("2018-09-06T14:02:55.636Z"),{_id: 23176,str: "magenta viral Licensed",num: 12939,date: new Date("2018-09-06T08:28:58.454Z"),array: [],obj: {}}],"hierarchy cross-platform Table",["Auto Loan Account Lead Tasty Fresh Soap"],68731,7111,"synthesizing Producer",new Date("2018-09-05T23:25:50.569Z"),{_id: 23177,str: "copy",num: 34698,date: new Date("2018-09-06T18:55:20.137Z"),obj: {_id: 23178,str: "Administrator sensor",num: 15508,obj: {}}},{_id: 23179,str: "Handmade Fresh Fish compress",date: new Date("2018-09-06T12:16:40.473Z"),array: [],obj: {_id: 23180,str: "middleware",num: 46770,date: new Date("2018-09-06T17:30:21.980Z"),array: [new Date("2018-09-06T19:10:12.698Z"),"toolset deposit"]}}]});
    },

    function(coll) {
        return coll.insert({_id: 23181,str: "Jordanian Dinar viral Optimization",date: new Date("2018-09-06T10:23:38.934Z"),array: [78612,new Date("2018-09-06T14:16:50.080Z"),34561,new Date("2018-09-06T17:27:25.544Z"),7235,{_id: 23182,num: 51157,date: new Date("2018-09-06T10:55:28.018Z"),obj: {}},[],["compressing payment background",new Date("2018-09-06T16:16:15.785Z")],{_id: 23183,str: "Accountability parse",num: 63317,date: new Date("2018-09-06T07:53:05.758Z"),array: [],obj: {_id: 23184,str: "Cotton RAM",num: 12240,date: new Date("2018-09-06T02:08:33.050Z"),array: []}},["Associate intranet",new Date("2018-09-05T21:57:15.383Z"),new Date("2018-09-06T04:56:30.599Z"),"Sleek"],"Somali Shilling Plaza"],obj: {_id: 23185,str: "SDD Gorgeous",num: 41109,array: [15025],obj: {_id: 23186,num: 84945,date: new Date("2018-09-06T18:07:44.075Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23187,str: "Technician",num: 84526,date: new Date("2018-09-06T06:03:08.270Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 23188,num: 42038,date: new Date("2018-09-06T07:01:34.600Z"),array: ["compress channels",27562,new Date("2018-09-06T09:11:44.439Z"),"maximized Representative Central",new Date("2018-09-06T08:46:33.732Z"),new Date("2018-09-06T00:01:03.758Z"),"synergistic Computers Bedfordshire",new Date("2018-09-06T04:23:20.859Z"),98280,[],"Analyst Music withdrawal"],obj: {_id: 23189,str: "Terrace",num: 42479,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23190,str: "index",num: 80663,date: new Date("2018-09-06T11:29:36.144Z"),array: [],obj: {_id: 23191,str: "withdrawal intangible",num: 12489,date: new Date("2018-09-05T22:34:19.705Z"),array: ["synthesize Fantastic Soft Chips",["holistic unleash Avon",74191,new Date("2018-09-06T00:45:36.440Z"),new Date("2018-09-06T02:56:56.115Z"),{_id: 23192,str: "Rustic Steel Chair Branding Ergonomic",num: 30808,array: [],obj: {}},49568,[],[55843],{_id: 23193,num: 28409,array: [45131,{_id: 23194,date: new Date("2018-09-05T21:01:35.496Z"),array: ["maroon",new Date("2018-09-06T02:55:58.075Z"),73501],obj: {_id: 23195,str: "withdrawal Rwanda Franc",date: new Date("2018-09-06T18:25:23.995Z"),obj: {}}}],obj: {}},"Soap"],{_id: 23196,str: "sky blue",num: 12735,date: new Date("2018-09-06T12:31:40.998Z")},[],"Visionary Georgia"]}});
    },

    function(coll) {
        return coll.insert({_id: 23197,str: "solid state Digitized",num: 88262,array: [[],new Date("2018-09-06T03:30:39.341Z"),new Date("2018-09-06T11:39:00.430Z"),"out-of-the-box New York Devolved",new Date("2018-09-06T07:48:49.394Z"),28027,6665,"yellow",new Date("2018-09-06T10:58:51.043Z"),[],{_id: 23198,str: "fuchsia payment Qatar",num: 55878,date: new Date("2018-09-06T10:23:34.363Z"),array: ["exuding"],obj: {_id: 23199,date: new Date("2018-09-06T15:58:49.533Z"),array: [],obj: {}}},31853,"Home Loan Account Avon"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23200,array: [{_id: 23201,str: "Unbranded Platinum payment",num: 43240,date: new Date("2018-09-06T08:36:32.784Z"),array: [new Date("2018-09-05T21:50:26.629Z")],obj: {_id: 23202,date: new Date("2018-09-06T10:02:58.362Z"),array: [],obj: {}}},"Intelligent Rubber Bacon demand-driven Home",38122,{_id: 23203,str: "Licensed open-source responsive",num: 784,date: new Date("2018-09-06T04:50:21.247Z")},86899,"Metal Web FTP",new Date("2018-09-06T00:45:35.725Z"),[],{_id: 23204,str: "bandwidth-monitored Configurable",date: new Date("2018-09-06T03:08:14.541Z"),array: [],obj: {_id: 23205,str: "1080p",num: 96150,date: new Date("2018-09-06T16:53:41.798Z"),array: ["auxiliary virtual bypassing",new Date("2018-09-06T17:26:21.461Z"),[]],obj: {}}},new Date("2018-09-06T09:39:35.147Z"),[],8210],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23206,str: "Brazilian Real neural Bacon",num: 92684,date: new Date("2018-09-06T05:07:35.709Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23207,str: "feed Liaison primary",date: new Date("2018-09-06T02:39:33.742Z"),array: [43673,740,{_id: 23208,str: "JSON",num: 52169,date: new Date("2018-09-06T04:15:07.146Z"),obj: {}},"Handcrafted silver incubate",new Date("2018-09-06T19:37:26.859Z"),49187,new Date("2018-09-06T01:23:58.513Z"),new Date("2018-09-06T02:15:52.108Z"),"Berkshire Developer",["generate Montana Rubber","functionalities SQL","Bedfordshire"],new Date("2018-09-06T00:50:53.943Z"),29950],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23209,str: "e-commerce web-readiness utilize",num: 8537,array: [54332,"Shoes Pitcairn Islands",new Date("2018-09-06T19:17:10.113Z"),"Senior Fresh Fresh",new Date("2018-09-06T10:53:09.407Z"),{_id: 23210,str: "Springs Refined ADP",num: 97741,date: new Date("2018-09-06T13:43:31.830Z"),obj: {}},[],85744,"Optimization",68403,"Refined Concrete Soap",{_id: 23211,num: 57544,date: new Date("2018-09-05T20:28:39.137Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 23212,str: "withdrawal",num: 76936,date: new Date("2018-09-06T15:09:34.463Z"),array: [],obj: {_id: 23213,str: "Trinidad and Tobago white Assistant",num: 30079,date: new Date("2018-09-06T15:51:59.821Z")}});
    },

    function(coll) {
        return coll.insert({_id: 23214,str: "convergence Mobility users",num: 98707,date: new Date("2018-09-06T13:48:26.696Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23215,str: "Coordinator convergence backing up",num: 30821,date: new Date("2018-09-05T20:21:57.080Z"),array: ["Handcrafted Frozen Ball service-desk Towels",59982,73872,[],new Date("2018-09-06T02:06:33.785Z"),new Date("2018-09-06T08:03:14.963Z"),9680,[],new Date("2018-09-06T09:29:54.311Z"),"Mill El Salvador Colon US Dollar payment",{_id: 23216,str: "Money Market Account Direct",date: new Date("2018-09-06T06:29:09.442Z"),array: [87838,"Berkshire deposit",{_id: 23217,num: 97958,date: new Date("2018-09-06T01:14:22.230Z"),array: ["Movies Chair cyan"],obj: {_id: 23218,str: "Refined Rubber Bike Graphic Interface 1080p",num: 60530,date: new Date("2018-09-06T13:39:03.556Z"),array: [91050,new Date("2018-09-06T08:07:56.211Z")],obj: {_id: 23219,str: "Haiti fault-tolerant online",num: 54924,obj: {}}}},57527],obj: {}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 23220,str: "Exclusive alarm mobile",num: 28222,date: new Date("2018-09-05T22:39:50.529Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23221,str: "knowledge user Ethiopian Birr",num: 63678,date: new Date("2018-09-06T10:47:21.212Z"),array: [52567,"Macao",{_id: 23222,str: "Czech Republic withdrawal",date: new Date("2018-09-06T14:56:24.260Z"),array: [],obj: {_id: 23223,str: "Savings Account Generic Soft Table",num: 94792}},new Date("2018-09-06T16:11:26.546Z"),new Date("2018-09-05T21:14:18.259Z"),8203,"protocol Borders","Computers",new Date("2018-09-06T08:08:53.929Z"),30712,[36204,{_id: 23224,str: "parsing",num: 54258,date: new Date("2018-09-06T15:50:16.616Z"),array: [],obj: {}},[60316,"withdrawal efficient vertical"],{_id: 23225,array: [new Date("2018-09-06T14:32:01.551Z")],obj: {}}],"Chief models"]});
    },

    function(coll) {
        return coll.insert({_id: 23226,str: "Practical",num: 61976,date: new Date("2018-09-06T01:48:18.671Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23227,str: "Architect Montenegro Wooden",num: 14586,array: [new Date("2018-09-06T10:36:49.547Z"),"Bedfordshire applications Rubber",{_id: 23228,str: "Wyoming Internal Awesome Granite Table",num: 74042,date: new Date("2018-09-06T13:06:27.115Z"),obj: {_id: 23229,num: 62532,date: new Date("2018-09-06T18:16:03.384Z"),array: [new Date("2018-09-06T17:20:48.833Z")],obj: {}}},"maximized Ford",[],[],"leverage",23169,"deposit",55669,46189,new Date("2018-09-05T20:27:52.329Z"),"local area network Soap",{_id: 23230,str: "deposit",num: 12034,array: [23286,new Date("2018-09-06T00:58:13.988Z")],obj: {_id: 23231,str: "Intelligent",num: 76867,date: new Date("2018-09-06T09:11:00.787Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 23232,str: "policy Centralized",num: 56171,date: new Date("2018-09-05T23:11:06.858Z"),array: [new Date("2018-09-06T04:05:52.463Z"),[],14877,"Licensed Borders European Monetary Unit (E.M.U.-6)",new Date("2018-09-06T14:14:53.505Z"),[new Date("2018-09-06T19:46:16.466Z"),"Metal","Team-oriented"],"Granite synthesizing",90417,new Date("2018-09-06T08:20:43.527Z"),new Date("2018-09-06T07:47:58.392Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23233,str: "Credit Card Account Innovative architectures",num: 23048,date: new Date("2018-09-06T07:40:32.770Z"),array: ["Personal Loan Account Stravenue",51232,"matrix",new Date("2018-09-06T13:55:17.274Z"),97727,{_id: 23234,str: "invoice",num: 25019,date: new Date("2018-09-06T01:28:06.552Z"),obj: {_id: 23235,num: 62951,array: [],obj: {}}},12959,[96218],{_id: 23236,array: [new Date("2018-09-06T15:53:06.361Z")],obj: {}},new Date("2018-09-06T13:56:52.962Z"),new Date("2018-09-06T12:13:19.533Z"),"Summit platforms",4771,new Date("2018-09-06T00:22:01.428Z")],obj: {_id: 23237,str: "Division withdrawal Upgradable",num: 47959,date: new Date("2018-09-06T11:18:08.541Z"),array: [["XML"],{_id: 23238,str: "Massachusetts",num: 5677,date: new Date("2018-09-06T04:32:30.209Z"),array: [],obj: {_id: 23239,str: "salmon",num: 88848}}],obj: {_id: 23240,date: new Date("2018-09-05T23:10:39.748Z")}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Orchestrator compressing",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$num'],["calculating Bedfordshire port",'$obj.obj.str'],[{ $dateToString: {date: new Date("2018-09-06T16:45:19.475Z"),timezone: "US/Hawaii",onNull: { $toLower: '$obj.str' }} }]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Strategist Avon",v: "Surinam Dollar Utah"},{k: "withdrawal Granite Cambridgeshire",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],[],[],[{ $substrCP: ["Tasty Metal Chips Guyana Dollar",12,18] },{ $dateToString: {date: '$date',format: "%H-%V-%G-%Z-%j"} },{ $rtrim: {input: { $trim: { input: "Central African Republic yellow" } },chars: "Tools Outdoors local area network"} },"application withdrawal",'$obj.obj.str'],['$obj.obj.obj.num','$num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],96292] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str',{ $dateToString: {date: { $isoWeek: { $dayOfWeek: { $month: { $second: { $hour: { $isoWeekYear: { $dateToParts: { date: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T03:45:35.938Z",timezone: "America/Bogota",onError: { $zip: {inputs: [['$num'],[],['$str']],defaults: [/capacitor/]} },onNull: '$obj.obj.str'} } } } } } } } } } },format: "%H-%w-%z-%d-%S-%H-%U-%w-%Y-%j-%z",timezone: "America/Santa_Isabel"} },"bifurcated"] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[['$obj.obj.str'],[58105],[],[],['$obj.num','$obj.num'],[]]] } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: ["Chicken Intuitive Adaptive",14,14] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Optimization withdrawal Fantastic",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $toLower: { $toLower: '$obj.obj.str' } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $toDate: { $arrayToObject: [[]] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "primary Garden",v: 68298},{k: "Investment Account",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "interface transmit",v: new Date("2018-09-06T01:57:08.101Z")}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'elva',in: { $exp: '$num' }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T06:59:18.390Z"),format: "%V-%V-%m-%%-%Z-%H-%w-%M",onNull: "Gloves"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$str'],["Tasty auxiliary Parkway",{ $toString: { $filter: {input: ['$obj.obj.obj.num'],as: 'austen',cond: { $isArray: [{ $week: { $toDate: { $toLower: { $toString: { $ltrim: { input: '$obj.obj.obj.obj.str' } } } } } }] }} } }],[]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Security",chars: "Wooden Swiss Franc Borders"} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: { $dateToString: {date: '$obj.obj.date',onNull: "Guyana Dollar Soft Toys"} }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $in: [{ $arrayToObject: [[{k: "Assurance Rustic Plastic Pants",v: '$$this'},{k: "4th generation",v: { $month: { $toDate: { $arrayElemAt: [["Planner"],'$$this'] } } }},{k: "protocol",v: '$$this'},{k: "Sierra Leone",v: true}]] },{ $range: [17,6,12] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[83964,15088,'$obj.num'],["Canyon Soap",{ $trim: { input: { $substr: ['$str',6,20] } } },'$str'],['$obj.obj.num',"cyan Officer deposit"],['$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.obj.obj.str',{ $dateToString: {date: '$obj.obj.obj.date',timezone: "Pacific/Port_Moresby"} },"Awesome leverage SAS"]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $size: [[]] },'$obj.obj.obj.num'],71161] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',6,3] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "feed distributed",v: '$str'},{k: "superstructure e-commerce",v: "digital payment bypass"}]] }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromString: {dateString: "2018-09-06T17:32:59.368Z",timezone: "America/Shiprock",onError: { $arrayElemAt: [[35742],{ $ceil: '$obj.obj.num' }] },onNull: "Awesome Metal Chips 1080p copying"} } }, _id: 0}}],

        [{$project: {a: { $concat: ["transparent",'$obj.str','$str'] }, _id: 0}}],

        [{$project: {a: { $toString: { $dayOfYear: { $dayOfMonth: { $isoWeekYear: { $isoDayOfWeek: { $toDate: { $arrayElemAt: [[],18666] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Director SQL Communications" }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str'],as: 'zackary',cond: { $lt: [{ $concat: ["Automotive maroon navigating",'$$zackary'] },{ $arrayToObject: [[[87482],[{ $toString: { $toLower: { $toString: { $rtrim: { input: "auxiliary Tuna" } } } } },{ $toUpper: '$str' }],[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Algerian Dinar infrastructure",{ $substrBytes: ['$obj.str',14,0] }],cond: { $and: [6722,59967] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["Cambridgeshire deliverables Compatible",{ $substr: [{ $trim: { input: '$obj.obj.str' } },6,2] },{ $substrBytes: ['$obj.obj.obj.str',7,0] }]]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $substrBytes: ['$obj.str',0,3] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Kids Texas",'$obj.obj.str'],3856] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',10,10] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "port methodology",v: { $ltrim: { input: { $substrBytes: ['$obj.obj.obj.str',0,2] } } }}]] }, _id: 0}}],

        [{$project: {a: { $range: [17,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num','$obj.obj.num'],as: 'patricia',cond: { $and: ['$obj.obj.str'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],96444] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Lebanon El Salvador Colon US Dollar"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str','$obj.str',{ $toLower: "sensor Borders Ramp" },"violet"],as: 'kim',in: { $subtract: [99648,'$num'] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T02:16:45.560Z"),onNull: '$obj.obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "synthesize withdrawal" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Streamlined",v: new Date("2018-09-06T04:15:17.072Z")},{k: "Burgs Dynamic dot-com",v: { $dayOfYear: { $isoWeekYear: '$obj.date' } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Applications",v: { $dayOfWeek: { $isoWeekYear: { $toDate: { $year: { $dateToParts: {date: { $millesecond: { $minute: { $hour: { $isoWeek: { $isoDayOfWeek: new Date("2018-09-06T15:13:34.367Z") } } } } },timezone: "Chile/Continental"} } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[48441,'$obj.obj.obj.num','$num'],[],[{ $toUpper: "Louisiana e-markets niches" },'$str','$obj.obj.obj.obj.str'],[67413]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoDayOfWeek: { $year: { $isoWeekYear: { $dateToParts: {date: { $dateFromParts: {year: { $divide: [72685,'$obj.obj.num'] },hour: { $mod: ['$obj.obj.obj.num','$obj.obj.num'] },minute: { $floor: 93338 },millisecond: { $ceil: 90890 }} },iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Vision-oriented Austria bypassing",10,4] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',17,9] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $millesecond: { $month: { $minute: { $minute: { $dayOfWeek: new Date("2018-09-05T23:16:19.273Z") } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],8978] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.obj.str',19,6] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $month: { $dateFromParts: {isoWeekYear: { $exp: 54358 },isoWeek: { $sqrt: '$num' },isoDayOfWeek: { $mod: [79863,'$obj.obj.obj.num'] },minute: { $pow: ['$obj.obj.num','$obj.obj.obj.num'] },second: { $ceil: 72690 },millisecond: { $log: ['$obj.obj.num',7963] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[66925]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toLower: "European Unit of Account 17(E.U.A.-17) platforms" },"Shoes frictionless"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[47721],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $year: { $toDate: { $arrayElemAt: [[],'$obj.num'] } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: ["application teal"] },9,13] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],18706] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Re-contextualized Avon"],80087] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[{ $dateToString: {date: { $year: { $dayOfMonth: { $second: { $dateFromString: {dateString: "2018-09-06T04:02:04.364Z",format: "%V-%Y-%Y-%L-%w",timezone: "Pacific/Easter",onNull: "asymmetric"} } } } },onNull: '$obj.str'} }],'$obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[58919],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $exp: '$obj.num' },hour: { $multiply: [34302,'$obj.obj.obj.num'] },minute: { $sqrt: { $indexOfArray: [{ $map: {input: [11709],in: { $mod: ['$obj.obj.obj.num',54439] }} },{ $toUpper: "Auto Loan Account action-items" },20] } },second: { $subtract: [68812,'$obj.obj.obj.num'] },timezone: "Asia/Chungking"} } },timezone: "Africa/Dakar",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substrCP: ['$obj.obj.obj.str',3,11] },'$obj.obj.obj.obj.str'],[],['$num']] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $cmp: [{ $arrayElemAt: [["open system Direct"],35257] },{ $concatArrays: [[],["mesh Product Cedi",{ $substrBytes: ['$obj.str',14,1] },'$obj.obj.obj.obj.str'],[{ $ltrim: {input: "Usability bypass Concrete",chars: { $trim: { input: { $toString: { $toLower: '$obj.obj.str' } } } }} }],['$num','$num',{ $abs: '$num' }]] }] },isoWeek: { $ceil: 46279 },hour: { $size: [[97082]] },millisecond: { $exp: 23316 }} },iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T19:36:26.851Z",format: "%Z-%j-%L-%z-%d-%H-%H-%H"} },timezone: "Europe/Zagreb",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoDayOfWeek: { $millesecond: { $dateToString: {date: { $toDate: { $concat: ['$obj.obj.str'] } },onNull: { $concat: ["Metal system engine Operations","pink"] }} } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "overriding portals",chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],87379] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Berkshire communities",13,6] }, _id: 0}}],

        [{$project: {a: { $toUpper: "reboot Plastic" }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$num'],cond: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handmade",v: '$num'},{k: "policy Sri Lanka",v: true},{k: "Web",v: true}]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T18:16:16.357Z",format: "%m-%S-%%-%V-%Z-%%-%G-%Z-%%-%U-%G"} }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfYear: '$date' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[74432,{ $ceil: '$obj.obj.num' },'$obj.obj.obj.num'],4731] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.num',98364,5343],in: { $pow: [83224,{ $size: [['$str']] }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str'],as: 'isai',in: { $ln: 55540 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[33434,88912,'$obj.obj.num'],{ $pow: [86216,'$obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $dayOfWeek: { $isoWeek: { $isoDayOfWeek: { $month: { $dayOfMonth: { $dayOfYear: { $millesecond: { $isoWeek: { $year: { $year: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Europe/Volgograd"} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: '$obj.str' },{ $toString: { $arrayElemAt: [['$obj.obj.obj.str'],5556] } }]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Brazilian Real auxiliary synergy"]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: { $rtrim: { input: "methodologies Bike Integration" } }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',19,6] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["PCI"],[{ $exp: '$obj.num' },26161,44652],[{ $substr: ['$obj.obj.obj.str',1,11] },'$obj.obj.obj.str',"Andorra SMS Singapore",'$obj.obj.str']],defaults: ["Senior"]} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoDayOfWeek: { $isoWeek: { $hour: { $isoDayOfWeek: { $hour: '$obj.obj.obj.date' } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Borders",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $range: [3,15,0] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.str',19,19] }, _id: 0}}],

        [{$project: {a: { $substr: ["Money Market Account",3,1] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],93204] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["systemic multi-byte"]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',15,15] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $year: '$obj.date' },format: "%w-%m-%G-%z-%z-%V-%Y-%m-%j-%S"} },{ $isoWeekYear: { $year: new Date("2018-09-06T14:52:16.488Z") } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $concat: [{ $trim: {input: "navigating plum zero defect",chars: '$obj.str'} },'$str',"Buckinghamshire Music"] }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "approach" } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $toLower: '$str' }],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["SMS deliver"],[69219]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T00:36:54.464Z"),format: "%Y-%%-%S-%j-%Z-%z-%M"} }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $ltrim: {input: '$obj.obj.obj.str',chars: { $dateToString: {date: '$obj.date',format: "%U-%V-%m-%u-%m-%j-%U-%z"} }} },chars: { $substrBytes: ['$obj.obj.obj.str',7,12] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num',87092],["Multi-lateral",{ $trim: {input: '$obj.str',chars: "capability flexibility firewall"} },"Credit Card Account",{ $ltrim: { input: '$obj.obj.obj.obj.str' } }],[{ $toLower: '$obj.obj.obj.obj.str' }],[]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfYear: { $toDate: { $range: [20,16] } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "COM" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Wooden Cotton",v: "expedite Checking Account Glens"},{k: "application",v: { $toLower: '$obj.obj.str' }}]] }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $dayOfWeek: { $year: { $dateFromParts: {isoWeekYear: { $cmp: [{ $minute: { $millesecond: { $dayOfMonth: { $dateToString: {date: { $isoWeek: { $isoWeekYear: { $toDate: { $concat: [{ $toLower: "Polarised Cambridgeshire" },{ $ltrim: { input: '$obj.obj.obj.str' } }] } } } },format: "%V-%L-%%-%L-%Z-%d-%d-%j-%S-%U",timezone: "EST",onNull: { $toLower: "Principal" }} } } } },{ $zip: {inputs: [[],["mobile visualize Assistant"],[]],useLongestLength: true,defaults: [/^Unbranded Cotton Ball|(?:Checking Accou|payme)nt|neural|HDD/]} }] },isoWeek: { $log10: '$obj.obj.num' },millisecond: { $ceil: { $size: [[]] } }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $concat: ["Response Polarised Robust",'$obj.str'] },'$obj.obj.obj.str'],76458] }, _id: 0}}],

        [{$project: {a: { $range: [5,12] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account",v: { $rtrim: { input: "Chair connect" } }},{k: "Operations",v: '$obj.obj.num'},{k: "Centralized",v: { $dateToString: {date: { $isoWeekYear: { $dateFromParts: {year: 96818,day: { $size: [['$obj.str']] },hour: { $divide: [20376,71354] },minute: { $exp: '$obj.num' },millisecond: { $sqrt: '$num' }} } },format: "%w-%G-%M-%z-%M"} }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Music",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Generic Concrete Tuna reboot Officer" }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeekYear: { $dayOfYear: { $week: { $dateFromString: {dateString: "2018-09-06T12:29:18.782Z",format: "%u-%Y-%M-%U-%L-%z",onError: { $range: [12,2,20] }} } } } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $toDate: { $toString: { $reverseArray: [[37653,16500]] } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeek: { $dayOfWeek: { $dayOfMonth: { $month: { $millesecond: { $dayOfYear: { $minute: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T07:01:25.096Z",format: "%u-%m-%u-%H",timezone: "Arctic/Longyearbyen",onNull: { $toLower: '$obj.obj.obj.str' }} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $range: [10,3] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: ["archive","Baby Product Cambridgeshire",'$obj.obj.obj.obj.str'] },18,10] }, _id: 0}}],

        [{$project: {a: { $toString: { $millesecond: { $isoDayOfWeek: { $hour: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T02:21:58.042Z",onError: { $rtrim: { input: { $concat: ['$obj.obj.str'] } } },onNull: { $ltrim: {input: '$obj.obj.str',chars: "Home Loan Account monitor"} }} },format: "%V-%z-%G-%%-%d-%M-%S-%Y",timezone: "Etc/UCT"} } } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfWeek: '$obj.obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $trim: { input: '$obj.str' } }],47543] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],43622] }, _id: 0}}],

        [{$project: {a: { $range: [18,15,9] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrCP: ['$obj.str',11,18] } }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $isoWeek: { $dayOfMonth: { $week: { $millesecond: { $dateToString: {date: '$date',timezone: "Zulu"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Representative"]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.str',{ $toUpper: '$obj.obj.obj.obj.str' }]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T08:58:07.334Z"),timezone: "Pacific/Noumea"} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T13:42:48.577Z"),timezone: "Antarctica/Vostok",onNull: { $trim: {input: { $concat: ["withdrawal","Response mindshare",'$obj.obj.obj.str'] },chars: "Ergonomic Metal Pants Cotton redefine"} }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],88820] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ['$str'] }],['$num'],["Assistant EXE Chair"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $ltrim: {input: "copy",chars: '$obj.obj.obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-05T23:28:03.599Z",onNull: { $dateToString: {date: new Date("2018-09-06T17:02:51.786Z"),format: "%m-%G-%j-%j-%%-%z-%u-%u",timezone: "America/St_Vincent"} }} } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.num',75485,32345],[],["Home Loan Account orchid","parsing"],[{ $toUpper: "syndicate" }]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toUpper: '$obj.str' },6,14] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: "Walks Auto Loan Account PNG" },{ $trim: { input: '$obj.obj.obj.str' } }],['$obj.obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $minute: { $millesecond: { $month: { $dayOfMonth: { $year: { $dateFromString: {dateString: "2018-09-06T09:31:34.224Z",format: "%z-%w-%U-%U-%j-%w-%L-%M-%j",onNull: "Rustic"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $dateToParts: {date: { $millesecond: { $week: { $dayOfYear: { $dateFromParts: {year: 88164,month: { $divide: ['$num',87994] },day: { $exp: '$obj.obj.obj.num' },minute: { $log: ['$num',6926] },second: { $log10: '$obj.obj.num' }} } } } },timezone: "America/Argentina/San_Luis",iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $toString: { $substrBytes: [{ $substr: ['$obj.obj.obj.obj.str',15,5] },11,18] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: { input: "compressing" } }],[87144,'$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $second: { $toDate: { $isoWeekYear: { $week: { $dayOfMonth: { $dayOfYear: { $isoDayOfWeek: { $year: { $second: { $month: { $hour: { $dateFromString: {dateString: "2018-09-06T19:19:40.222Z",format: "%H-%Z-%z-%u-%H-%G-%w-%G-%G-%w",timezone: "America/Dawson_Creek",onNull: { $trim: {input: '$str',chars: "Mountains Supervisor deposit"} }} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.str'],[],[],["Chief",'$obj.str',"Arkansas"]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $week: { $isoDayOfWeek: { $millesecond: { $year: { $dayOfWeek: { $second: { $dateToParts: {date: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[]] } } },timezone: "America/Mendoza",iso8601: false} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $range: [10,19] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: ["Borders Metrics",2,6] }],["Compatible Brand Communications",{ $rtrim: { input: '$obj.obj.obj.obj.str' } }],[],['$num'],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $hour: { $isoWeekYear: { $year: { $dayOfYear: { $minute: { $isoWeekYear: { $isoWeek: { $dateToParts: { date: { $dayOfMonth: { $month: { $millesecond: { $isoWeekYear: { $dateFromParts: {isoWeekYear: { $log: [69155,93684] },isoWeek: { $abs: { $cmp: [{ $dateFromParts: {isoWeekYear: { $ln: '$obj.obj.obj.num' },isoWeek: '$obj.obj.obj.num',minute: { $pow: ['$obj.num',{ $log10: { $sqrt: 13984 } }] },second: { $add: [] },timezone: "America/Louisville"} },{ $concatArrays: [["Accountability solutions Applications",'$obj.str'],[],[91642],["optical Pizza"],[]] }] } },isoDayOfWeek: { $log10: '$obj.obj.obj.num' },hour: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj' },{ $second: { $dateToParts: {date: { $hour: { $dayOfWeek: { $year: { $week: { $isoWeek: { $dayOfMonth: { $year: { $dateToString: {date: new Date("2018-09-06T17:53:49.272Z"),onNull: { $arrayToObject: [[{k: "Decentralized",v: 59314},{k: "Product Shoes bypassing",v: '$num'}]] }} } } } } } } } },timezone: "Etc/GMT-9"} } },14] },second: { $abs: { $exp: 11948 } },millisecond: { $size: [[]] },timezone: "Pacific/Efate"} } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $toDate: { $arrayElemAt: [['$obj.num'],'$obj.num'] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "optical Bedfordshire",v: "Buckinghamshire"}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $second: { $isoDayOfWeek: { $minute: { $minute: { $month: { $dayOfWeek: { $toDate: { $objectToArray: '$obj.obj' } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Hills",v: new Date("2018-09-06T13:50:43.674Z")},{k: "orchid Sausages needs-based",v: { $millesecond: { $year: { $minute: { $dayOfWeek: { $isoWeek: { $isoDayOfWeek: { $dayOfMonth: { $dayOfYear: { $dateToParts: {date: { $dateToString: { date: '$date' } },iso8601: true} } } } } } } } } }},{k: "Soap Salad",v: 20905}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["groupware panel",19,17] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $range: [3,10,10] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateFromParts: {year: { $pow: [72169,84183] },day: '$obj.obj.num',hour: { $mod: [86406,'$obj.obj.obj.num'] },second: { $add: [{ $ln: 42663 }] },millisecond: { $divide: ['$obj.obj.obj.num','$num'] },timezone: "America/Sao_Paulo"} } }, _id: 0}}],

        [{$project: {a: { $map: {input: [13956],as: 'lily',in: { $floor: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $trim: { input: "neural open system" } },chars: '$obj.obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-05T20:30:34.376Z",format: "%G-%M-%U-%S-%z"} },timezone: "Asia/Kathmandu",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "local Jewelery",v: false},{k: "Progressive convergence green",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.num'],in: { $log10: 34872 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],73694] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfWeek: { $minute: { $second: { $week: { $dayOfYear: { $isoWeek: { $second: { $isoDayOfWeek: { $dateToParts: { date: { $dateFromString: {dateString: "2018-09-06T00:26:49.053Z",format: "%L-%Z-%L-%w-%M-%m",timezone: "Asia/Qatar",onNull: '$str'} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $isoWeek: { $dateToString: {date: '$date',timezone: "America/Boise"} } },format: "%H-%S-%z-%H-%M-%z-%S-%M-%M",onNull: { $arrayElemAt: [[4235],'$num'] }} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateFromString: { dateString: "2018-09-05T21:54:01.599Z" } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Metrics"],[],[],[],[]] }, _id: 0}}],

        [{$project: {a: { $hour: { $toDate: { $month: { $dateToParts: {date: { $second: { $millesecond: { $dateToString: {date: '$obj.date',format: "%u-%H-%V-%V-%z-%Z",onNull: { $rtrim: { input: { $substrBytes: ["24/365 Credit Card Account",19,11] } } }} } } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $ltrim: {input: "Falkland Islands Pound programming",chars: '$obj.obj.obj.obj.str'} },"Cross-platform Mississippi Gorgeous"]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[13671],[{ $rtrim: { input: "Rubber Berkshire port" } },'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Incredible violet",10,9] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[47516],['$obj.obj.obj.obj.str'],[],['$obj.num']] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $millesecond: { $millesecond: { $dateToString: {date: '$obj.date',timezone: "America/Argentina/Tucuman",onNull: "Producer scalable architectures"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Multi-tiered productivity",v: "hacking"}]] }, _id: 0}}],

        [{$project: {a: { $month: { $millesecond: { $toDate: { $substrCP: ['$str',3,11] } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],18637] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayElemAt: [["Bedfordshire",{ $toUpper: '$obj.obj.obj.obj.str' }],71272] } }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $month: { $toDate: { $substrCP: ["Designer neural-net",9,11] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Product Bolivar Fuerte",v: "Cotton"},{k: "Chief Haiti Future-proofed",v: { $week: { $month: { $dateFromString: {dateString: "2018-09-06T01:01:34.696Z",onError: { $range: [11,8] },onNull: '$obj.obj.obj.obj.str'} } } }}]] }, _id: 0}}],

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
