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
        return coll.insert({_id: 21299,str: "open-source Personal Loan Account copying",num: 88258,date: new Date("2018-09-06T02:46:33.407Z"),array: [4475,"artificial intelligence",new Date("2018-09-06T06:26:55.383Z"),96222,21446,"Reactive e-tailers",new Date("2018-09-05T21:28:19.862Z"),new Date("2018-09-06T07:20:06.646Z"),"withdrawal",{_id: 21300,num: 62555,date: new Date("2018-09-06T00:34:01.790Z"),array: ["Forges harness Florida"],obj: {_id: 21301,str: "Sleek Unbranded",num: 37884,array: [[],"platforms Practical Frozen Keyboard Tennessee"],obj: {_id: 21302,str: "FTP",array: [],obj: {_id: 21303,str: "copy",num: 10811,date: new Date("2018-09-05T22:13:28.942Z"),array: []}}}},new Date("2018-09-06T07:55:40.940Z"),[{_id: 21304,num: 68255,date: new Date("2018-09-06T04:31:02.565Z")}],{_id: 21305,str: "Savings Account",date: new Date("2018-09-06T03:51:37.763Z"),obj: {_id: 21306,num: 8131,obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21307,str: "Buckinghamshire Maryland Small Concrete Mouse",num: 73095,date: new Date("2018-09-06T19:36:22.746Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21308,str: "Metal",num: 73977,date: new Date("2018-09-06T05:15:55.500Z"),array: ["Regional Cotton","Frozen withdrawal multi-byte",58136,10281,new Date("2018-09-06T19:27:34.060Z"),49298,{_id: 21309,num: 26283,date: new Date("2018-09-06T08:39:29.314Z"),array: [],obj: {}},new Date("2018-09-06T06:43:49.282Z"),"Expanded Organic",59671,{_id: 21310,str: "Investment Account Auto Loan Account hard drive",num: 71837,date: new Date("2018-09-06T08:04:40.591Z"),array: [],obj: {_id: 21311,str: "Handmade Granite Bacon Egyptian Pound",num: 85558,obj: {_id: 21312,str: "engineer paradigms Games"}}},13850,[]]});
    },

    function(coll) {
        return coll.insert({_id: 21313,str: "local",num: 58054,array: ["experiences",new Date("2018-09-05T22:32:24.748Z"),77688,38236,[],new Date("2018-09-06T04:22:27.125Z"),3373,new Date("2018-09-06T06:32:50.865Z"),{_id: 21314,str: "Mauritius Rupee Chips",num: 78367,array: [],obj: {_id: 21315,str: "scalable attitude-oriented",date: new Date("2018-09-06T11:50:42.055Z"),array: [],obj: {_id: 21316,num: 70125,date: new Date("2018-09-06T11:40:18.596Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 21317,str: "Credit Card Account Practical",num: 66788,date: new Date("2018-09-06T04:25:20.338Z"),array: [],obj: {_id: 21318,str: "synergistic",num: 4641,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21319,str: "Towels",num: 33066,date: new Date("2018-09-05T21:50:33.724Z"),array: [],obj: {_id: 21320,date: new Date("2018-09-06T08:39:00.246Z"),array: [new Date("2018-09-06T08:38:11.997Z"),4569,"Sleek Granite Cheese microchip",new Date("2018-09-05T20:46:03.208Z"),23441,"Assurance lime utilize","Oman",new Date("2018-09-06T10:15:00.563Z"),42861,"copy card",{_id: 21321,str: "Bedfordshire Fiji Tennessee",num: 43754,date: new Date("2018-09-05T23:41:24.702Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 21322,str: "EXE",num: 9602,date: new Date("2018-09-06T07:05:57.773Z"),array: [],obj: {_id: 21323,str: "Investment Account leading edge",date: new Date("2018-09-05T20:17:25.477Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21324,str: "Rustic Granite Mouse Buckinghamshire",num: 63074,date: new Date("2018-09-06T16:20:51.663Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21325,str: "infomediaries Fantastic Incredible Concrete Pizza",num: 34584,date: new Date("2018-09-06T06:41:05.851Z"),array: ["convergence Jamaican Dollar Delaware",new Date("2018-09-05T20:37:11.667Z"),"distributed Movies user-centric",new Date("2018-09-06T01:05:07.917Z"),90336,58783,{_id: 21326,num: 44675,date: new Date("2018-09-06T12:06:48.501Z"),array: [{_id: 21327,str: "infomediaries",num: 1930,date: new Date("2018-09-06T06:45:01.454Z"),array: [],obj: {_id: 21328,str: "Strategist Investor Metrics",num: 27912,date: new Date("2018-09-06T04:06:19.351Z"),array: [],obj: {}}},[],new Date("2018-09-06T18:46:35.953Z"),22581],obj: {}},new Date("2018-09-06T10:49:29.103Z"),new Date("2018-09-06T17:08:29.269Z"),new Date("2018-09-06T02:14:47.203Z"),"orchestrate Chief"],obj: {_id: 21329,num: 13446,date: new Date("2018-09-06T15:09:21.084Z")}});
    },

    function(coll) {
        return coll.insert({_id: 21330,str: "online",num: 11145,date: new Date("2018-09-06T10:16:55.835Z"),array: [23078,new Date("2018-09-06T06:01:59.526Z"),"Bedfordshire","Vision-oriented Sleek portals","Soap Brooks","PCI compressing Intelligent Soft Salad",51191,{_id: 21331,str: "deposit Tuna Soft",num: 38208,date: new Date("2018-09-06T02:31:16.344Z"),array: [[],[44907,"Bolivia Avon","approach Central",46594]],obj: {}},86879],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21332,str: "Metal infrastructures",num: 89513,date: new Date("2018-09-06T10:24:34.691Z"),array: [],obj: {_id: 21333,str: "teal",num: 9010,date: new Date("2018-09-06T04:11:20.535Z"),array: [39031,[62541],{_id: 21334,str: "XSS Principal",num: 65968,date: new Date("2018-09-06T16:15:42.195Z"),obj: {}},"Sleek Frozen Sausages Malaysia",9673,new Date("2018-09-06T18:45:09.904Z"),"schemas",new Date("2018-09-06T17:50:56.652Z"),"program capacitor",12393,new Date("2018-09-06T13:33:55.328Z"),{_id: 21335,str: "Land",num: 65536},new Date("2018-09-05T22:02:17.874Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 21336,str: "Savings Account US Dollar",num: 72467,date: new Date("2018-09-06T14:38:10.927Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21337,str: "Decentralized",num: 77618,date: new Date("2018-09-05T21:52:54.160Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21338,str: "Organized workforce",num: 90230,date: new Date("2018-09-06T09:07:00.373Z"),array: [70190,new Date("2018-09-06T09:43:37.479Z"),"Automotive plum",{_id: 21339,str: "Grocery Cambridgeshire",num: 57382,array: [29339],obj: {}},32632,"Incredible extend Investment Account",new Date("2018-09-06T03:47:54.295Z"),60454,new Date("2018-09-06T08:41:51.884Z"),"China",[],[],"Associate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21340,str: "azure Business-focused Nebraska",num: 90611,date: new Date("2018-09-06T13:53:07.485Z"),array: [],obj: {_id: 21341,str: "Focused digital",num: 12589,date: new Date("2018-09-06T00:34:35.984Z"),array: [],obj: {_id: 21342,num: 56003}}});
    },

    function(coll) {
        return coll.insert({_id: 21343,str: "Central",num: 99573,date: new Date("2018-09-06T06:24:43.339Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21344,str: "Minnesota Security",num: 92515,date: new Date("2018-09-06T19:23:20.727Z"),obj: {_id: 21345,date: new Date("2018-09-06T08:13:35.449Z"),array: [{_id: 21346,str: "transmitter",num: 56361,date: new Date("2018-09-06T16:58:44.871Z"),array: [],obj: {}},new Date("2018-09-06T14:07:38.871Z"),"Regional","Tasty Concrete Pants Orchestrator",[],21101,new Date("2018-09-06T01:46:47.931Z"),"transmitting partnerships",{_id: 21347,str: "discrete",num: 3443,array: [new Date("2018-09-06T01:26:06.212Z")]},73873,"connect",86456],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21348,str: "impactful",num: 85766,date: new Date("2018-09-06T09:34:05.221Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21349,str: "National bluetooth invoice",num: 1459,date: new Date("2018-09-06T19:45:04.884Z"),array: ["bricks-and-clicks productivity Producer",97011,"EXE Avon Accountability",new Date("2018-09-06T17:43:24.101Z"),"methodical",54937,new Date("2018-09-06T17:25:58.196Z"),80820,new Date("2018-09-06T04:34:06.083Z"),35474,new Date("2018-09-06T19:17:22.021Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 21350,str: "Unbranded",num: 50772,date: new Date("2018-09-06T11:35:36.864Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21351,str: "Electronics Bedfordshire",num: 36475,date: new Date("2018-09-05T20:57:36.500Z"),array: [],obj: {_id: 21352,str: "Dominican Peso Auto Loan Account",num: 31554,date: new Date("2018-09-06T16:26:04.745Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21353,str: "Assistant transmitting withdrawal",num: 7553,date: new Date("2018-09-06T15:00:11.474Z"),array: ["panel",41499,{_id: 21354,str: "Identity Rhode Island Pataca",num: 87480,date: new Date("2018-09-06T02:59:10.782Z"),array: [],obj: {_id: 21355,num: 74717,date: new Date("2018-09-06T19:09:42.996Z"),array: [new Date("2018-09-06T15:57:44.436Z"),new Date("2018-09-06T17:43:49.729Z"),"Berkshire Associate deploy","Fantastic Metal Chair",new Date("2018-09-06T09:19:38.736Z")],obj: {}}},41303,"Algerian Dinar East Caribbean Dollar 1080p",new Date("2018-09-06T19:15:16.842Z"),{_id: 21356,num: 34888,array: ["Assistant Gloves",new Date("2018-09-06T07:50:40.961Z")]},41475],obj: {_id: 21357,num: 29137,date: new Date("2018-09-05T21:59:57.964Z"),obj: {_id: 21358,str: "firewall Officer",date: new Date("2018-09-06T08:08:31.875Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21359,str: "connect Guinea",num: 44253,date: new Date("2018-09-05T22:02:46.754Z"),array: [62803,new Date("2018-09-06T00:41:16.477Z"),new Date("2018-09-05T23:14:53.015Z"),"Metrics Creek e-business",67393,26829,[],new Date("2018-09-06T06:12:48.064Z"),"infrastructures","Realigned Analyst",{_id: 21360,str: "Kids invoice Re-engineered",num: 99876,date: new Date("2018-09-06T15:06:53.576Z"),array: [],obj: {}}],obj: {_id: 21361,num: 53518,array: [],obj: {_id: 21362,str: "project Cambridgeshire wireless",num: 92883,date: new Date("2018-09-05T20:14:45.292Z"),array: [[],{_id: 21363,num: 28907,array: ["Global Money Market Account"],obj: {}},"invoice throughput Minnesota"]}}});
    },

    function(coll) {
        return coll.insert({_id: 21364,str: "Investment Account Zloty",num: 65909,date: new Date("2018-09-05T22:43:05.020Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21365,str: "Sports Electronics",num: 72773,date: new Date("2018-09-06T15:53:08.129Z"),array: [new Date("2018-09-06T11:21:21.880Z"),{_id: 21366,str: "interfaces Intelligent",num: 66496,date: new Date("2018-09-06T15:02:31.349Z"),array: [],obj: {_id: 21367,num: 65800,date: new Date("2018-09-06T12:24:57.907Z"),array: [],obj: {}}},"synergize Fantastic Fresh Mouse",98294,4064,89953,"solid state",["auxiliary","Intelligent Re-contextualized",new Date("2018-09-06T04:05:32.058Z"),{_id: 21368,str: "Object-based",obj: {_id: 21369,str: "bus Rhode Island Sausages",num: 21981,array: [],obj: {_id: 21370,str: "IB matrix extensible",date: new Date("2018-09-06T03:01:39.943Z"),array: [67004],obj: {}}}},[new Date("2018-09-06T18:38:58.544Z"),"North Carolina Technician extensible"],[new Date("2018-09-05T19:58:58.393Z")]],new Date("2018-09-06T14:36:32.688Z"),{_id: 21371,num: 77659,date: new Date("2018-09-06T16:46:29.259Z")},66340],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21372,str: "Intelligent",num: 56141,array: [],obj: {_id: 21373,str: "Borders Cotton",num: 77142,date: new Date("2018-09-06T01:51:15.884Z"),array: ["transmitting",28181,new Date("2018-09-06T06:20:01.426Z"),29264,81498,"collaborative Sao Tome and Principe","override synthesizing Data",new Date("2018-09-06T14:24:48.649Z"),{_id: 21374,str: "Spain",date: new Date("2018-09-06T05:35:59.251Z"),array: ["Corporate pink",new Date("2018-09-06T05:54:22.910Z"),32788,new Date("2018-09-05T21:27:25.974Z"),[],new Date("2018-09-06T06:57:23.222Z")],obj: {}}],obj: {_id: 21375,num: 26677,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 21376,str: "archive Lithuanian Litas UAE Dirham",num: 91516,date: new Date("2018-09-06T05:42:00.424Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21377,str: "Refined Metal Bike Operations",num: 17403,date: new Date("2018-09-06T16:12:35.560Z"),obj: {_id: 21378,str: "Credit Card Account Phased Music",num: 60484,date: new Date("2018-09-06T05:28:37.545Z"),array: ["Tuna e-tailers seize","utilize bandwidth cultivate","Buckinghamshire bandwidth even-keeled",43067,{_id: 21379,str: "executive Savings Account",array: [],obj: {}},new Date("2018-09-06T08:59:50.949Z"),[new Date("2018-09-06T09:53:51.968Z"),[],79262,new Date("2018-09-06T08:03:44.477Z"),new Date("2018-09-06T15:43:15.742Z")],58227],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21380,str: "Integrated Ergonomic Granite Bike architecture",num: 71711,date: new Date("2018-09-06T17:18:37.261Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21381,str: "Technician",num: 77841,date: new Date("2018-09-06T00:37:31.509Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21382,str: "UIC-Franc primary",num: 143,date: new Date("2018-09-06T06:41:17.871Z"),array: ["Meadow withdrawal Incredible",new Date("2018-09-05T20:14:25.617Z"),{_id: 21383,str: "leading edge",num: 65348,array: [new Date("2018-09-06T01:50:45.773Z"),{_id: 21384,str: "Keyboard",num: 25448,date: new Date("2018-09-06T00:59:42.045Z"),array: []}],obj: {}},[],33408,87159,49075,"users","Tasty Wooden Pizza Isle",[new Date("2018-09-05T21:18:57.047Z")],{_id: 21385,str: "connect",num: 63536,date: new Date("2018-09-06T14:56:48.940Z"),array: [new Date("2018-09-06T18:07:53.455Z"),12192],obj: {}},47724,9085],obj: {_id: 21386,num: 27066,date: new Date("2018-09-06T02:11:06.212Z"),obj: {_id: 21387,date: new Date("2018-09-06T02:48:49.239Z"),obj: {_id: 21388,str: "Synchronised",num: 98996,array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 21389,str: "Trace Auto Loan Account",date: new Date("2018-09-06T02:41:28.263Z"),array: [27820,new Date("2018-09-06T01:08:20.605Z"),[],[],7781,"Avon"],obj: {_id: 21390,str: "Lao People's Democratic Republic user-centric",num: 36928,date: new Date("2018-09-05T20:32:21.480Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21391,str: "eyeballs",num: 28197,date: new Date("2018-09-05T21:14:43.488Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21392,str: "grey",num: 47687,date: new Date("2018-09-06T09:18:22.828Z"),array: [69325,52401,new Date("2018-09-06T08:40:10.795Z"),new Date("2018-09-06T01:11:02.252Z"),"Pula","Agent Tactics paradigms","Cotton flexibility",new Date("2018-09-06T18:20:09.002Z"),[]],obj: {_id: 21393,str: "Technician impactful Bahamian Dollar",num: 68291,date: new Date("2018-09-06T13:41:50.739Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21394,str: "Handmade Cotton Bacon",num: 94593,date: new Date("2018-09-06T02:07:29.031Z"),array: ["green world-class secondary",2327,new Date("2018-09-06T09:39:46.964Z"),95075,"pixel teal HDD",new Date("2018-09-05T20:36:44.599Z"),{_id: 21395,str: "Industrial Cambridgeshire",num: 33953,date: new Date("2018-09-06T01:44:42.816Z"),obj: {}},{_id: 21396,num: 26233,date: new Date("2018-09-06T05:00:01.004Z"),array: [],obj: {}},new Date("2018-09-06T03:56:52.563Z"),new Date("2018-09-05T20:46:18.148Z"),[],"best-of-breed",[13912],61125]});
    },

    function(coll) {
        return coll.insert({_id: 21397,str: "Internal invoice Row",num: 26371,date: new Date("2018-09-06T12:08:29.864Z"),array: [],obj: {_id: 21398,str: "New Zealand Dollar",num: 47497,array: [89751,new Date("2018-09-06T10:49:23.491Z"),"Investment Account Focused optimal",new Date("2018-09-05T21:45:40.551Z"),[],76784,{_id: 21399,str: "extend",num: 80233,date: new Date("2018-09-06T05:55:13.254Z")},"Decentralized Cotton",new Date("2018-09-05T21:17:55.163Z"),[new Date("2018-09-06T14:56:44.281Z")],new Date("2018-09-06T01:31:25.997Z"),"clear-thinking sensor","Awesome zero defect Mexican Peso Mexican Unidad de Inversion (UDI)"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21400,str: "mission-critical",num: 64637,array: [2814,[],"CFP Franc",{_id: 21401,num: 70993,date: new Date("2018-09-06T09:14:26.992Z"),array: [45444],obj: {}},68836,new Date("2018-09-05T21:29:09.615Z"),"Garden",81238,{_id: 21402,str: "Associate redundant",num: 65244,date: new Date("2018-09-06T04:26:43.821Z"),array: [new Date("2018-09-06T14:20:12.292Z"),"Moldovan Leu Administrator"],obj: {}},new Date("2018-09-06T06:24:24.155Z"),66333,27438],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21403,str: "initiatives",num: 35706,date: new Date("2018-09-06T02:53:47.430Z"),array: [59099,"Licensed",{_id: 21404,str: "compress Metal Cambridgeshire",num: 34990,date: new Date("2018-09-06T08:41:42.588Z"),array: [],obj: {_id: 21405,str: "Armenian Dram Indian Rupee",num: 16233,date: new Date("2018-09-06T00:04:49.950Z"),array: [],obj: {_id: 21406,str: "hack",num: 6937,date: new Date("2018-09-05T23:59:47.192Z"),array: [new Date("2018-09-05T21:10:54.685Z")]}}},75962,[],56439,16036,new Date("2018-09-06T05:07:15.315Z"),[],"success","Clothing Guernsey bluetooth",new Date("2018-09-06T13:27:09.129Z"),"Data Digitized",{_id: 21407,num: 75498,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 21408,str: "Crest European Unit of Account 17(E.U.A.-17) US Dollar",num: 87994,date: new Date("2018-09-06T04:33:15.949Z"),array: [],obj: {_id: 21409,num: 54450,array: [4469,"Cheese",new Date("2018-09-06T03:30:34.476Z"),{_id: 21410,str: "Principal",date: new Date("2018-09-05T23:22:58.544Z"),array: [],obj: {_id: 21411,str: "New York copy",date: new Date("2018-09-06T08:30:59.688Z"),obj: {_id: 21412,str: "24 hour sensor Coordinator",num: 40396,array: [],obj: {}}}},64419,new Date("2018-09-05T20:25:03.904Z"),"Rustic Fresh Pants",28735,new Date("2018-09-05T22:54:11.314Z"),68492,[["Tuna markets",new Date("2018-09-06T16:05:51.744Z"),[]]],new Date("2018-09-06T17:49:41.443Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 21413,str: "reciprocal",num: 45766,date: new Date("2018-09-06T10:21:12.080Z"),array: [76973,79903,35724,"Avon envisioneer",new Date("2018-09-06T14:58:40.901Z"),"system Shoes",{_id: 21414,str: "Direct",num: 35193,date: new Date("2018-09-06T04:54:21.485Z"),array: [],obj: {}},"full-range Money Market Account Steel",new Date("2018-09-05T20:48:23.142Z"),"Decentralized",new Date("2018-09-06T10:23:47.679Z"),{_id: 21415,num: 60604,date: new Date("2018-09-06T09:30:30.449Z"),array: [],obj: {}},"Trinidad and Tobago"]});
    },

    function(coll) {
        return coll.insert({_id: 21416,str: "Infrastructure",date: new Date("2018-09-05T22:38:45.911Z"),array: [new Date("2018-09-06T12:38:05.056Z"),"Electronics Pizza Small",27595,"Virtual",96450,new Date("2018-09-06T12:12:22.147Z"),{_id: 21417,str: "Practical Rubber Pants",num: 74561,array: []},"Handcrafted feed Tala",[]],obj: {_id: 21418,num: 43805,array: [[33905],new Date("2018-09-06T13:40:12.968Z"),{_id: 21419,str: "payment Tuna",date: new Date("2018-09-06T01:31:40.686Z"),array: [],obj: {_id: 21420,str: "Unbranded Home Loan Account Fish",num: 41575,date: new Date("2018-09-06T10:10:41.201Z"),array: [],obj: {_id: 21421,str: "Human Cheese",num: 71497,date: new Date("2018-09-05T23:19:45.723Z")}}},new Date("2018-09-06T03:44:04.914Z"),[],new Date("2018-09-06T08:26:14.891Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21422,str: "violet Canada",num: 91753,date: new Date("2018-09-06T09:07:09.674Z"),array: [],obj: {_id: 21423,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21424,str: "Global Grass-roots Berkshire",num: 81890,date: new Date("2018-09-05T21:40:17.356Z"),array: [90201,new Date("2018-09-06T01:30:56.172Z"),"Tasty",new Date("2018-09-05T21:53:25.047Z"),15686,"Bike alarm",new Date("2018-09-05T20:46:30.087Z"),91938,new Date("2018-09-06T18:43:12.410Z"),"Vermont Factors",new Date("2018-09-05T22:43:13.478Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 21425,str: "action-items",date: new Date("2018-09-06T01:34:51.888Z"),array: ["e-services Generic",89437,57189,new Date("2018-09-06T06:24:22.761Z"),{_id: 21426,str: "Fundamental",num: 49791,date: new Date("2018-09-06T17:35:08.318Z"),array: [],obj: {}},[],1807,new Date("2018-09-06T16:09:25.990Z"),new Date("2018-09-05T20:33:27.569Z"),"convergence Devolved"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21427,str: "bus dynamic Home",num: 30588,date: new Date("2018-09-06T01:55:58.126Z"),array: [{_id: 21428,str: "Group bottom-line",num: 32475,date: new Date("2018-09-06T10:47:14.953Z"),array: [],obj: {_id: 21429,date: new Date("2018-09-05T21:58:17.047Z"),obj: {}}},new Date("2018-09-06T14:34:30.757Z"),new Date("2018-09-06T05:16:49.014Z"),"Executive Security Small Steel Mouse",6321,42712,"Small middleware Consultant",{_id: 21430,str: "bus",date: new Date("2018-09-05T22:40:16.556Z"),array: []},new Date("2018-09-06T05:02:56.475Z")]});
    },

    function(coll) {
        return coll.insert({_id: 21431,str: "toolset payment ADP",num: 68214,date: new Date("2018-09-05T22:17:14.886Z"),obj: {_id: 21432,date: new Date("2018-09-06T18:49:09.165Z"),array: [new Date("2018-09-06T00:07:44.965Z"),"deposit Outdoors Saudi Riyal",79182,new Date("2018-09-06T11:21:30.605Z"),24112,"redundant Investment Account",23161,"neural Gorgeous Steel Shirt",["TCP product","turquoise Lempira Visionary",[]],"card"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21433,str: "next-generation",num: 66689,date: new Date("2018-09-06T09:06:27.472Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21434,str: "Bouvet Island (Bouvetoya) Investment Account",num: 51175,date: new Date("2018-09-05T23:29:52.630Z"),array: [[82267],new Date("2018-09-06T19:42:14.692Z"),"Investment Account quantify",new Date("2018-09-06T18:32:38.620Z"),"Polarised e-commerce","3rd generation",21563,4977,new Date("2018-09-06T11:16:34.072Z"),{_id: 21435,str: "pricing structure Decentralized Savings Account",num: 10425,array: [],obj: {_id: 21436,str: "Synergistic overriding foreground",num: 6321,date: new Date("2018-09-06T08:24:01.299Z"),array: [],obj: {_id: 21437,date: new Date("2018-09-05T21:45:58.623Z"),array: [],obj: {_id: 21438,str: "Refined",num: 5525}}}},{_id: 21439,num: 30514,date: new Date("2018-09-06T07:44:28.233Z"),obj: {}},"website Albania",71919]});
    },

    function(coll) {
        return coll.insert({_id: 21440,str: "radical",num: 8289,date: new Date("2018-09-06T04:00:36.296Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21441,str: "driver",num: 63900,date: new Date("2018-09-06T17:30:44.074Z"),array: [],obj: {_id: 21442,str: "Sports bluetooth",num: 97362,date: new Date("2018-09-06T08:54:05.086Z"),array: [{_id: 21443,num: 14031,date: new Date("2018-09-06T17:09:16.071Z"),array: []},new Date("2018-09-05T23:41:19.449Z"),new Date("2018-09-06T11:12:43.689Z"),48674,"online",{_id: 21444,str: "Data superstructure",date: new Date("2018-09-06T15:08:03.247Z"),array: [new Date("2018-09-06T01:02:30.118Z"),"withdrawal",74723,20104,54417,[{_id: 21445,str: "SQL technologies Cambridgeshire",num: 29060,obj: {_id: 21446,str: "Roads primary",num: 38769,date: new Date("2018-09-06T09:57:11.235Z"),array: [],obj: {_id: 21447,obj: {}}}},"Fantastic Concrete Bacon"]]},[],"Rustic Granite Soap Guyana Panama",new Date("2018-09-06T05:51:48.335Z")],obj: {_id: 21448,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 21449,str: "Grocery bricks-and-clicks",num: 29276,date: new Date("2018-09-06T06:44:22.955Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21450,str: "Upgradable Concrete Gabon",num: 79921,date: new Date("2018-09-06T01:10:25.512Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21451,str: "Synchronised",date: new Date("2018-09-06T06:58:44.776Z"),array: [],obj: {_id: 21452,num: 16388,date: new Date("2018-09-05T23:55:23.582Z"),array: [55145,[],44073,["Metal","communities synthesizing Refined",{_id: 21453,str: "calculating Marketing",num: 14372,date: new Date("2018-09-06T05:44:26.657Z")},new Date("2018-09-06T13:54:19.522Z")],new Date("2018-09-06T07:42:23.264Z"),"Turnpike Architect SAS","whiteboard",89481,{_id: 21454,str: "Kids",array: [],obj: {_id: 21455,str: "azure ADP",num: 34070,date: new Date("2018-09-06T19:42:42.804Z"),obj: {}}},[{_id: 21456,str: "experiences bi-directional Communications",num: 40821,date: new Date("2018-09-06T00:16:16.299Z"),array: []}],new Date("2018-09-05T23:03:29.771Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21457,str: "quantifying Savings Account",num: 91827,date: new Date("2018-09-06T14:05:41.290Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21458,str: "Savings Account Games",num: 60775,date: new Date("2018-09-06T09:30:16.750Z"),array: [],obj: {_id: 21459,str: "Assistant Rustic Frozen Bacon",date: new Date("2018-09-06T00:58:21.857Z"),array: [new Date("2018-09-06T14:23:54.108Z"),"Personal Loan Account",new Date("2018-09-06T02:01:08.773Z"),new Date("2018-09-05T22:46:49.898Z"),new Date("2018-09-06T09:26:16.638Z"),{_id: 21460,str: "Buckinghamshire",num: 96338,date: new Date("2018-09-06T06:30:03.430Z"),array: [],obj: {_id: 21461,str: "Gorgeous bypass",date: new Date("2018-09-06T18:13:53.011Z"),obj: {}}},["SQL",[{_id: 21462,num: 92026,array: [],obj: {}}]],7947,47434,5806,"Investor"]}});
    },

    function(coll) {
        return coll.insert({_id: 21463,num: 4074,date: new Date("2018-09-06T01:56:21.936Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21464,str: "Maryland Buckinghamshire feed",num: 35794,date: new Date("2018-09-06T15:44:48.009Z"),array: [new Date("2018-09-06T17:31:17.193Z"),"matrix hacking",79481,"Savings Account","cross-platform interface",24595,new Date("2018-09-06T05:23:47.950Z"),2292,new Date("2018-09-06T04:03:51.740Z"),new Date("2018-09-06T09:13:22.974Z"),{_id: 21465,str: "Sausages analyzing violet",num: 32906,date: new Date("2018-09-05T20:03:19.351Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21466,str: "optimal",num: 39063,date: new Date("2018-09-06T00:24:12.134Z"),array: ["azure strategy",new Date("2018-09-05T20:54:38.036Z"),new Date("2018-09-06T00:07:47.731Z"),26887,new Date("2018-09-05T20:50:24.731Z"),"deposit cross-platform client-driven","Place bluetooth monitor",47543,"array Estate",93559],obj: {_id: 21467,num: 39072,date: new Date("2018-09-06T17:30:52.641Z"),array: [],obj: {_id: 21468,str: "Fish Bike Applications",num: 59879,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21469,num: 97426,date: new Date("2018-09-05T21:14:45.266Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21470,str: "CSS",num: 35621,date: new Date("2018-09-06T18:58:15.387Z"),obj: {_id: 21471,num: 79320,date: new Date("2018-09-06T08:22:34.236Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21472,str: "Montana Rwanda Franc",num: 58390,date: new Date("2018-09-06T12:21:17.716Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21473,str: "1080p Pines",num: 26547,array: [],obj: {_id: 21474,date: new Date("2018-09-06T15:36:09.445Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21475,str: "SDD",num: 35079,date: new Date("2018-09-05T22:10:57.241Z"),array: [19665,new Date("2018-09-06T02:33:43.143Z"),new Date("2018-09-06T05:40:33.288Z"),"infomediaries Metal",new Date("2018-09-06T07:15:38.103Z"),"ADP",[],9347,64876,{_id: 21476,num: 54447,date: new Date("2018-09-06T00:07:24.071Z"),array: [],obj: {_id: 21477,str: "deposit Handcrafted Rubber Fish",num: 47745,array: [24946],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21478,str: "wireless optimize",num: 83824,date: new Date("2018-09-05T20:35:47.392Z"),array: [73321,new Date("2018-09-06T15:45:40.787Z"),{_id: 21479,str: "Savings Account",date: new Date("2018-09-06T11:18:42.552Z"),obj: {}},[49382],"TCP Home Moldovan Leu","user-centric Factors Cedi",64224,new Date("2018-09-06T11:28:22.070Z"),39040,new Date("2018-09-06T03:57:17.561Z"),87736,new Date("2018-09-05T22:59:14.839Z"),"open-source",[]],obj: {_id: 21480,str: "value-added bandwidth parse",num: 60729,date: new Date("2018-09-06T03:52:34.199Z"),array: [],obj: {_id: 21481,num: 66036,array: [{_id: 21482,str: "asymmetric Outdoors",num: 49958,date: new Date("2018-09-06T08:08:12.969Z"),array: [],obj: {}},["Guernsey program"]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21483,str: "Handmade bypass",num: 84697,date: new Date("2018-09-05T21:03:02.933Z"),array: [new Date("2018-09-06T12:07:08.640Z"),"back-end",91076,[],14013,"North Carolina Unbranded Steel Tuna","toolset payment",new Date("2018-09-05T23:43:58.834Z"),new Date("2018-09-06T11:41:45.720Z"),{_id: 21484,str: "Czech Koruna ROI",num: 74015,date: new Date("2018-09-06T03:49:33.653Z"),array: [],obj: {_id: 21485,str: "Internal",num: 84480}},"Rubber invoice reboot"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21486,str: "approach ubiquitous Health",num: 23845,date: new Date("2018-09-06T19:42:51.794Z"),array: [{_id: 21487,str: "Fantastic",num: 95078,date: new Date("2018-09-06T10:31:38.049Z"),array: [],obj: {}},"quantifying","payment",new Date("2018-09-06T01:58:59.735Z"),"Generic Frozen Fish repurpose",{_id: 21488,str: "Configuration",date: new Date("2018-09-06T09:10:57.130Z"),array: [],obj: {}},new Date("2018-09-06T00:49:51.213Z"),66272,new Date("2018-09-05T21:30:54.335Z"),28286,95665,[new Date("2018-09-06T09:12:02.015Z"),18852,new Date("2018-09-06T15:10:36.076Z")],"Plastic Music synthesize"]});
    },

    function(coll) {
        return coll.insert({_id: 21489,str: "Solutions overriding Plastic",num: 87468,date: new Date("2018-09-05T21:30:07.681Z"),array: [new Date("2018-09-06T10:42:14.502Z"),[38426,"Manat Cotton synthesizing"],69297,new Date("2018-09-06T12:26:16.564Z"),{_id: 21490,num: 56944,date: new Date("2018-09-05T22:18:50.777Z"),array: [{_id: 21491,str: "back up Practical Wooden Car",date: new Date("2018-09-05T20:32:55.099Z"),obj: {}},new Date("2018-09-06T15:16:40.583Z")],obj: {}},"Human","Public-key Cambridgeshire Loaf","Bedfordshire enable",81898,48612,300,new Date("2018-09-06T17:03:14.328Z")],obj: {_id: 21492,str: "24/7 SAS grey",date: new Date("2018-09-06T04:18:41.590Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21493,str: "Cedi",num: 13332,date: new Date("2018-09-06T15:21:19.182Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21494,num: 13474,date: new Date("2018-09-06T06:34:33.013Z"),array: [],obj: {_id: 21495,str: "Bike Movies Creative",date: new Date("2018-09-05T21:37:06.406Z"),array: [5799,new Date("2018-09-06T14:08:17.541Z"),8569,39427,"AGP Triple-buffered",new Date("2018-09-06T15:40:20.970Z"),[],"deliverables Marshall Islands","Developer parsing",{_id: 21496,str: "Handcrafted Steel Pizza",num: 94210,date: new Date("2018-09-06T03:55:43.799Z"),array: [[]],obj: {}},{_id: 21497,str: "capacitor Baby",obj: {_id: 21498,str: "Gabon content-based contextually-based",num: 1158,date: new Date("2018-09-06T05:35:41.850Z"),obj: {_id: 21499,str: "Tuna Cuba",num: 81209,date: new Date("2018-09-05T21:22:33.167Z"),array: []}}},new Date("2018-09-05T20:53:30.688Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 21500,str: "Borders",num: 29161,date: new Date("2018-09-06T03:19:05.864Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21501,str: "incentivize",num: 70543,date: new Date("2018-09-06T17:46:40.575Z"),array: ["interfaces",new Date("2018-09-06T06:12:11.375Z"),27887,311,95471,"Configuration SDD responsive",new Date("2018-09-06T01:10:25.982Z"),{_id: 21502,num: 76215,date: new Date("2018-09-06T06:23:59.391Z"),array: []},new Date("2018-09-06T08:23:49.185Z"),"foreground",[new Date("2018-09-05T22:32:24.043Z"),[],{_id: 21503,str: "Groves Checking Account parsing",date: new Date("2018-09-06T06:26:56.921Z"),array: [],obj: {_id: 21504,num: 86820,array: [],obj: {_id: 21505,str: "Direct empower",date: new Date("2018-09-06T08:30:00.007Z")}}},23044,"back-end",58115,new Date("2018-09-05T21:48:47.717Z"),[70203]]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21506,num: 53174,array: [new Date("2018-09-06T05:58:46.711Z"),84933,"Granite",42712,new Date("2018-09-06T08:19:37.866Z"),35769,[],["transparent bypassing","Berkshire deposit Springs","program Sausages back-end",new Date("2018-09-06T13:14:45.975Z")],15474,new Date("2018-09-06T06:04:26.329Z"),{_id: 21507,str: "Coordinator Idaho Gorgeous",num: 90611,date: new Date("2018-09-06T06:33:05.722Z"),array: [],obj: {_id: 21508,str: "violet",num: 2908,date: new Date("2018-09-06T16:19:55.016Z"),array: ["Berkshire"],obj: {}}},56765,92790]});
    },

    function(coll) {
        return coll.insert({_id: 21509,str: "bandwidth",num: 50383,array: [],obj: {_id: 21510,num: 10708,date: new Date("2018-09-06T05:41:15.234Z"),array: [new Date("2018-09-06T13:49:33.025Z"),81375,"forecast Computers","Lesotho disintermediate","Boliviano Mvdol","deploy e-business",11667,new Date("2018-09-06T11:21:56.231Z"),58053,{_id: 21511,date: new Date("2018-09-06T01:30:34.418Z"),array: ["matrices bypassing instruction set"],obj: {}},new Date("2018-09-06T17:36:52.396Z"),91039,[{_id: 21512,str: "open-source",date: new Date("2018-09-05T21:51:30.255Z"),array: [],obj: {}}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21513,str: "4th generation Garden",num: 62360,date: new Date("2018-09-06T07:17:25.300Z"),array: [34984,[],"SMS Profit-focused leading edge",{_id: 21514,str: "mint green Borders",num: 58032,date: new Date("2018-09-06T06:29:26.090Z"),obj: {_id: 21515,str: "Prairie Brazilian Real",date: new Date("2018-09-06T06:06:18.447Z"),obj: {}}},"invoice calculate",new Date("2018-09-06T04:34:39.877Z"),new Date("2018-09-06T05:46:27.132Z"),new Date("2018-09-06T10:39:46.617Z"),[],[],[],"optimize system",{_id: 21516,str: "Auto Loan Account",num: 70363,date: new Date("2018-09-06T17:05:53.685Z"),array: [61055]},new Date("2018-09-06T15:48:32.785Z"),{_id: 21517,date: new Date("2018-09-05T23:51:10.634Z"),array: [48573],obj: {}}],obj: {_id: 21518,str: "Multi-lateral transition",num: 77825,date: new Date("2018-09-06T18:11:11.073Z"),array: ["Coordinator"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21519,str: "Mauritania Uganda Shilling function",num: 10927,date: new Date("2018-09-06T07:09:58.805Z"),array: [[],81492,"Gorgeous scale",new Date("2018-09-06T10:36:50.937Z"),"Connecticut Refined",{_id: 21520,str: "Movies National",array: [],obj: {}},85064,new Date("2018-09-06T14:08:15.251Z"),"Fully-configurable Progressive",new Date("2018-09-06T00:39:33.010Z"),"Practical Rubber Hat"],obj: {_id: 21521,str: "Vermont deposit",num: 16541,date: new Date("2018-09-06T13:07:36.469Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21522,str: "Borders Manager",num: 11503,date: new Date("2018-09-06T15:02:42.299Z"),array: [[],"Berkshire",new Date("2018-09-06T16:12:20.751Z"),28442,"harness Direct Credit Card Account",64352,new Date("2018-09-06T18:48:14.255Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21523,str: "benchmark methodology",num: 10354,date: new Date("2018-09-06T12:32:16.115Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21524,str: "Lead",num: 55399,date: new Date("2018-09-06T15:11:42.550Z"),obj: {_id: 21525,str: "blue clicks-and-mortar payment",num: 38403,date: new Date("2018-09-06T06:27:43.250Z"),array: [[],"Auto Loan Account Rustic Automotive",new Date("2018-09-06T08:18:19.139Z"),"Somoni tangible",45478,84643,"connecting Supervisor",[{_id: 21526,str: "redefine enterprise value-added",num: 67358,date: new Date("2018-09-06T15:32:42.371Z"),array: [],obj: {_id: 21527,str: "Central Villages Florida",num: 47638,date: new Date("2018-09-06T05:29:05.944Z"),array: [],obj: {_id: 21528,str: "calculating",num: 41275,array: [],obj: {}}}},new Date("2018-09-05T22:19:23.809Z"),{_id: 21529,date: new Date("2018-09-06T07:30:21.848Z"),array: [new Date("2018-09-06T18:44:41.859Z"),69439,"Sports program attitude"]}],new Date("2018-09-06T18:21:02.443Z"),new Date("2018-09-06T19:32:00.688Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 21530,str: "Mongolia",num: 1455,array: [new Date("2018-09-06T06:46:26.944Z"),[85868,new Date("2018-09-06T12:04:29.009Z"),new Date("2018-09-06T17:03:55.046Z")],"Personal Loan Account high-level Savings Account",{_id: 21531,str: "microchip",num: 77261,date: new Date("2018-09-06T14:07:40.245Z"),array: [],obj: {_id: 21532,str: "haptic Island",num: 20158,date: new Date("2018-09-05T21:16:02.892Z"),array: [],obj: {_id: 21533,date: new Date("2018-09-06T08:20:03.472Z"),obj: {}}}},"web-enabled end-to-end Manors",["Intelligent programming",1285,{_id: 21534,str: "applications Chair",num: 58828,date: new Date("2018-09-05T23:22:12.565Z")}],new Date("2018-09-06T09:44:22.201Z"),"invoice Ranch","Kentucky",41285],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21535,str: "digital",num: 40608,date: new Date("2018-09-05T20:00:00.351Z"),array: ["interface Fiji leading-edge",22079,"Monitored",{_id: 21536,str: "Toys",num: 20045,date: new Date("2018-09-06T12:00:57.871Z"),array: [],obj: {}},new Date("2018-09-06T03:49:58.521Z"),"navigating",53970,"navigate",new Date("2018-09-06T18:07:08.991Z"),6986],obj: {_id: 21537,str: "matrix",date: new Date("2018-09-06T15:33:58.967Z"),array: [new Date("2018-09-06T13:32:10.841Z"),82437,new Date("2018-09-06T11:41:22.559Z"),29537,new Date("2018-09-06T06:37:01.785Z")],obj: {_id: 21538,num: 50784,date: new Date("2018-09-06T00:22:51.046Z"),obj: {_id: 21539,num: 80697}}}});
    },

    function(coll) {
        return coll.insert({_id: 21540,str: "Plaza e-business",num: 84141,date: new Date("2018-09-06T02:45:59.475Z"),array: [66455,{_id: 21541,str: "Home",num: 47941,date: new Date("2018-09-06T07:16:54.544Z"),obj: {}},new Date("2018-09-05T22:28:40.715Z"),[new Date("2018-09-05T22:44:52.225Z"),"grow Sao Tome and Principe RAM","Throughway brand Saint Kitts and Nevis"],new Date("2018-09-06T15:10:24.435Z"),new Date("2018-09-06T15:14:30.383Z"),72127,"transmitter exploit",[62531],61407,{_id: 21542,num: 24227,date: new Date("2018-09-06T09:48:37.635Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21543,str: "Namibia withdrawal Program",num: 72452,date: new Date("2018-09-06T01:14:47.984Z"),array: [],obj: {_id: 21544,str: "De-engineered",num: 16926,date: new Date("2018-09-06T15:27:09.458Z"),array: ["local Orchestrator violet",new Date("2018-09-06T04:47:30.265Z"),91337,{_id: 21545,str: "Generic Cotton Bike productivity",num: 82291,obj: {}},new Date("2018-09-05T20:54:10.477Z"),new Date("2018-09-06T14:48:18.274Z"),{_id: 21546,str: "Investment Account",num: 22554,date: new Date("2018-09-06T00:42:26.136Z"),array: []},["Shoes Identity web-enabled",99225,{_id: 21547,num: 55072,date: new Date("2018-09-06T08:00:57.225Z"),array: [2295],obj: {_id: 21548,str: "viral stable",date: new Date("2018-09-06T16:29:18.184Z"),array: []}},new Date("2018-09-06T09:32:20.540Z")],80248,"Ball"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21549,str: "Sleek",num: 95641,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21550,str: "SSL Wooden Sleek Soft Pants",num: 89004,date: new Date("2018-09-06T07:44:17.505Z"),array: [],obj: {_id: 21551,num: 55536,date: new Date("2018-09-06T17:33:57.879Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21552,str: "instruction set",date: new Date("2018-09-06T06:27:14.830Z"),array: [74387,{_id: 21553,num: 44289,date: new Date("2018-09-06T04:30:53.146Z"),array: [98917,"Drive",46967,new Date("2018-09-06T10:25:41.775Z"),new Date("2018-09-06T10:04:33.372Z")],obj: {_id: 21554,str: "Metal Security PNG",num: 51160,date: new Date("2018-09-06T16:04:17.735Z"),obj: {}}},[59232],new Date("2018-09-05T21:38:13.684Z"),"generating Gorgeous Granite Bike scale","deposit",[{_id: 21555,str: "methodical wireless Beauty",array: [],obj: {_id: 21556,num: 2485,date: new Date("2018-09-06T00:14:24.640Z"),obj: {_id: 21557,str: "lavender tertiary feed",num: 58994,date: new Date("2018-09-06T06:51:52.359Z"),array: []}}},[],73784],{_id: 21558,array: [91118]},"HTTP world-class Macao",{_id: 21559,str: "Borders Checking Account",num: 53633,obj: {_id: 21560,date: new Date("2018-09-06T06:09:45.167Z"),array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21561,str: "Avon Savings Account Tasty Cotton Towels",num: 15864,date: new Date("2018-09-05T22:11:44.646Z"),array: [],obj: {_id: 21562,num: 35224,date: new Date("2018-09-06T13:02:55.061Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21563,str: "Plastic Liberia neural",num: 16330,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21564,str: "Congolese Franc South Carolina deposit",date: new Date("2018-09-06T07:11:32.574Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21565,str: "envisioneer",date: new Date("2018-09-06T18:21:03.811Z"),array: ["Health deposit",new Date("2018-09-06T04:17:12.232Z"),"compressing French Polynesia",new Date("2018-09-06T07:31:54.021Z"),79770,[],{_id: 21566,str: "SDD",num: 82563,array: [],obj: {_id: 21567,str: "Customer",num: 40552,date: new Date("2018-09-06T09:13:42.980Z"),array: [],obj: {_id: 21568,str: "transmitter",num: 53149,date: new Date("2018-09-06T06:20:09.837Z"),array: [32833,new Date("2018-09-06T03:01:58.461Z"),22033,63190,"Home Human","China"],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 21569,str: "B2C",num: 5408,date: new Date("2018-09-06T09:52:03.882Z"),array: [],obj: {_id: 21570,str: "optical",num: 44679,array: [new Date("2018-09-06T01:17:51.450Z"),5395,"Cheese Locks Rand Loti",{_id: 21571,str: "Buckinghamshire payment",date: new Date("2018-09-06T16:38:53.850Z"),obj: {}},27959,["Isle",{_id: 21572,str: "red",num: 13945,date: new Date("2018-09-06T08:19:45.674Z")},new Date("2018-09-06T08:57:12.609Z")],[],new Date("2018-09-06T19:36:54.742Z"),new Date("2018-09-06T17:08:12.015Z"),new Date("2018-09-06T07:22:44.826Z"),[new Date("2018-09-06T04:46:52.508Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 21573,str: "approach",num: 55613,array: []});
    },

    function(coll) {
        return coll.insert({_id: 21574,str: "Sports sensor",num: 56554,date: new Date("2018-09-05T21:05:06.576Z"),array: [91656,49130,"Marshall Islands",new Date("2018-09-06T12:35:04.156Z"),80257,"Maryland Security","Iowa cross-platform",new Date("2018-09-06T16:55:00.630Z"),69089,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21575,str: "ROI Legacy Ecuador",num: 34423,date: new Date("2018-09-06T06:41:33.984Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21576,str: "Clothing Specialist Metal",num: 24309,date: new Date("2018-09-06T00:58:49.569Z"),array: ["hacking",new Date("2018-09-06T10:43:03.945Z"),{_id: 21577,str: "Qatari Rial",num: 97684,date: new Date("2018-09-06T10:31:15.406Z"),array: ["blue Auto Loan Account Convertible Marks","turquoise",new Date("2018-09-06T00:19:19.633Z")],obj: {}},[],51047,new Date("2018-09-06T00:16:56.757Z"),[{_id: 21578,str: "Washington Buckinghamshire transmitting",num: 83446,obj: {_id: 21579,str: "implement deposit",date: new Date("2018-09-06T00:45:12.563Z"),array: [],obj: {_id: 21580,num: 37033,date: new Date("2018-09-06T13:30:46.903Z"),array: [],obj: {_id: 21581,str: "connect Stream Automotive",num: 81501,date: new Date("2018-09-06T13:59:15.524Z")}}}},{_id: 21582,str: "navigate user-centric Visionary",num: 51740}],13548,54044]});
    },

    function(coll) {
        return coll.insert({_id: 21583,str: "ivory Garden Borders",date: new Date("2018-09-05T23:23:29.722Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21584,str: "Rwanda Franc Indiana Global",num: 10893,date: new Date("2018-09-06T18:04:25.494Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21585,str: "Identity back-end",num: 43429,date: new Date("2018-09-05T22:12:49.523Z"),array: [new Date("2018-09-06T04:23:27.294Z"),{_id: 21586,num: 46405,array: [],obj: {}},14752,"XML protocol",{_id: 21587,str: "SQL Sports paradigms",array: [],obj: {}},62587,75932,new Date("2018-09-06T17:48:21.973Z"),54053,"Investment Account drive",["convergence","grey Kids",new Date("2018-09-05T23:32:03.089Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 21588,str: "Creative salmon red",num: 15144,date: new Date("2018-09-05T23:03:54.042Z"),array: [],obj: {_id: 21589,str: "multi-byte",date: new Date("2018-09-06T16:19:50.722Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21590,str: "homogeneous magnetic bleeding-edge",num: 91889,date: new Date("2018-09-06T00:39:56.084Z"),array: [46248,"Licensed Steel Shirt Kansas payment",new Date("2018-09-06T16:02:45.086Z"),"ubiquitous THX PNG",new Date("2018-09-06T00:16:44.367Z"),[66027,{_id: 21591,str: "red Knoll Plastic",num: 11919,date: new Date("2018-09-05T23:32:45.364Z"),obj: {}},99765,new Date("2018-09-05T20:26:22.881Z"),"cross-platform Turkey",new Date("2018-09-06T16:14:58.506Z"),"Micronesia",{_id: 21592,str: "analyzing New Zealand Dollar",num: 52792,date: new Date("2018-09-06T12:17:39.794Z"),array: [],obj: {}}],1051],obj: {_id: 21593,date: new Date("2018-09-06T17:43:19.152Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21594,str: "Stand-alone Investor reinvent",num: 44400,date: new Date("2018-09-06T09:38:42.071Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21595,str: "regional IB",num: 4453,date: new Date("2018-09-06T19:38:48.129Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21596,str: "cross-media transition cross-platform",date: new Date("2018-09-06T17:49:51.378Z"),array: [new Date("2018-09-06T04:15:03.644Z"),"Central out-of-the-box","synergistic bandwidth Applications",[],35881,new Date("2018-09-06T01:23:26.517Z"),84398,new Date("2018-09-06T11:57:39.318Z"),53383,new Date("2018-09-06T12:44:46.695Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21597,str: "backing up primary upward-trending",num: 57328,date: new Date("2018-09-06T03:59:09.131Z"),array: [30996,"alarm Markets","Chief",new Date("2018-09-06T12:22:30.014Z"),"Keyboard",new Date("2018-09-05T22:28:19.148Z"),13285,32797,[],new Date("2018-09-05T23:23:59.044Z"),"holistic Uganda Shilling",{_id: 21598,str: "Directives AGP",num: 77602,date: new Date("2018-09-06T10:05:49.563Z"),array: [{_id: 21599,num: 46777,date: new Date("2018-09-05T20:12:03.309Z"),array: [23037,new Date("2018-09-06T14:46:31.349Z")],obj: {_id: 21600,str: "pink",num: 79452,date: new Date("2018-09-05T21:31:33.159Z")}}],obj: {}}],obj: {_id: 21601,str: "zero tolerance",num: 42305,date: new Date("2018-09-06T11:34:19.990Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 21602,num: 7499,date: new Date("2018-09-06T13:42:17.479Z"),array: [new Date("2018-09-06T03:42:22.859Z"),64637,"firewall Kentucky Wall",24093,"neural Focused Gorgeous",{_id: 21603,num: 83360,array: [],obj: {_id: 21604,str: "Fantastic Cotton Soap methodical",date: new Date("2018-09-06T15:57:00.939Z"),array: [],obj: {_id: 21605,str: "Home",num: 8573}}},"card quantify quantifying",{_id: 21606,str: "Shirt Mobility",num: 4872,date: new Date("2018-09-06T04:28:32.759Z"),array: [],obj: {}},66034,new Date("2018-09-06T03:35:05.990Z"),[new Date("2018-09-05T23:01:53.756Z")],[]]});
    },

    function(coll) {
        return coll.insert({_id: 21607,str: "Colombian Peso Unidad de Valor Real deposit",date: new Date("2018-09-05T23:38:57.311Z"),array: [],obj: {_id: 21608,num: 44454,date: new Date("2018-09-05T21:44:50.075Z"),array: [[58774],"Avon",new Date("2018-09-06T09:06:36.508Z"),"intuitive withdrawal drive",9631,new Date("2018-09-06T09:03:48.601Z"),new Date("2018-09-06T09:29:58.891Z"),{_id: 21609,num: 36649,date: new Date("2018-09-06T04:02:11.118Z"),array: [],obj: {}},"User-centric",{_id: 21610,str: "National",num: 67757,date: new Date("2018-09-06T05:46:51.150Z"),obj: {}},32052,[16987,new Date("2018-09-06T05:05:39.049Z")]],obj: {_id: 21611,str: "Internal",num: 43558,date: new Date("2018-09-06T05:03:52.567Z"),array: ["Falkland Islands Pound Investment Account Oregon",new Date("2018-09-06T01:35:02.589Z"),6989],obj: {_id: 21612,str: "Electronics",num: 73658}}}});
    },

    function(coll) {
        return coll.insert({_id: 21613,str: "generate",num: 65493,date: new Date("2018-09-06T08:47:53.614Z"),array: ["e-markets index","Factors 1080p",11024,new Date("2018-09-06T15:27:26.634Z"),35103,[],{_id: 21614,str: "e-markets Ergonomic Cotton Chips",num: 14015,date: new Date("2018-09-06T11:03:39.942Z"),obj: {}},new Date("2018-09-06T13:04:15.609Z"),["SCSI Cloned"],84762,[],29209],obj: {_id: 21615,str: "capacitor 24 hour Indian Rupee Ngultrum",date: new Date("2018-09-06T02:17:11.676Z"),array: ["Somali Shilling",new Date("2018-09-06T14:06:37.825Z"),{_id: 21616,num: 74736,date: new Date("2018-09-06T12:23:11.462Z"),obj: {_id: 21617,num: 35199,array: ["Refined Seychelles Rupee Belize",[],53897]}}],obj: {_id: 21618,num: 77904,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 21619,str: "Direct Belize Road",num: 10245,array: [],obj: {_id: 21620,num: 21661,date: new Date("2018-09-06T12:44:34.869Z"),array: [new Date("2018-09-06T09:39:14.163Z"),"next-generation infomediaries",73849,["RAM foreground Jamaican Dollar",[],91270,"Communications Palestinian Territory Rubber"],new Date("2018-09-06T02:27:52.985Z"),9023,[new Date("2018-09-06T12:59:28.225Z")],"Agent panel encoding",{_id: 21621,str: "responsive Legacy",date: new Date("2018-09-05T21:20:41.966Z"),obj: {}},{_id: 21622,num: 88254,array: [],obj: {}},{_id: 21623,str: "Chicken Director microchip",num: 39871,date: new Date("2018-09-06T06:31:55.402Z"),array: []},{_id: 21624,str: "Trace synthesizing",num: 97692,date: new Date("2018-09-06T04:46:29.164Z"),obj: {}},[new Date("2018-09-05T23:08:19.572Z")]],obj: {_id: 21625,str: "Buckinghamshire Chips back up",date: new Date("2018-09-06T12:56:47.386Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21626,str: "cross-platform",num: 74516,date: new Date("2018-09-06T00:19:18.315Z"),array: [87540,new Date("2018-09-06T12:29:50.913Z"),45294,{_id: 21627,str: "Lithuanian Litas Configuration disintermediate",num: 78475,date: new Date("2018-09-06T00:08:27.582Z"),array: [],obj: {_id: 21628,str: "Unbranded Cotton Chips 24/7",date: new Date("2018-09-06T05:20:13.088Z"),array: ["pink","payment Marketing"],obj: {_id: 21629,str: "Intranet Beauty Electronics",date: new Date("2018-09-06T15:26:28.050Z"),array: [],obj: {}}}},new Date("2018-09-06T09:23:36.756Z"),{_id: 21630,num: 5521},[new Date("2018-09-06T09:53:54.318Z"),87071],[],"intangible auxiliary",new Date("2018-09-05T22:52:03.805Z"),{_id: 21631,num: 80912,date: new Date("2018-09-06T04:08:39.059Z"),array: [[]],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 21632,str: "Mouse",num: 87679,date: new Date("2018-09-06T12:27:09.161Z")});
    },

    function(coll) {
        return coll.insert({_id: 21633,str: "Cotton",num: 17117,date: new Date("2018-09-06T14:32:16.243Z"),array: [[],new Date("2018-09-06T13:56:55.545Z"),"Aruba executive",10754,"Washington composite matrix","Handmade seamless",new Date("2018-09-06T04:34:53.214Z"),61288,70285,new Date("2018-09-05T21:29:29.015Z"),94802,{_id: 21634,str: "Ohio bandwidth",num: 62857,array: [{_id: 21635,str: "Cambridgeshire Rustic Granite Table",num: 24574,date: new Date("2018-09-05T20:44:55.552Z"),array: [],obj: {}}],obj: {}}],obj: {_id: 21636,str: "exploit Squares",num: 72706,date: new Date("2018-09-06T09:06:52.548Z"),obj: {_id: 21637,str: "Incredible Fantastic Granite Chair",date: new Date("2018-09-06T11:32:02.667Z"),array: [[new Date("2018-09-06T19:17:58.634Z"),{_id: 21638,date: new Date("2018-09-06T00:07:35.116Z"),array: [],obj: {_id: 21639,str: "Sierra Leone",num: 48943,date: new Date("2018-09-06T03:24:09.851Z"),obj: {}}},"compress",new Date("2018-09-05T20:55:42.721Z")],50124,"Planner teal"]}}});
    },

    function(coll) {
        return coll.insert({_id: 21640,str: "Concrete",num: 28411,date: new Date("2018-09-06T03:22:28.276Z"),array: [new Date("2018-09-06T01:50:23.485Z"),"Tajikistan",{_id: 21641,str: "tan composite digital",num: 42210,date: new Date("2018-09-06T01:59:38.111Z"),array: [],obj: {_id: 21642,str: "synthesizing",date: new Date("2018-09-06T00:51:06.661Z"),array: [],obj: {_id: 21643,num: 58017,date: new Date("2018-09-06T00:16:47.655Z"),obj: {}}}},52173,48724,[],68763,"calculating Concrete out-of-the-box",new Date("2018-09-06T13:28:28.921Z"),"Personal Loan Account program Kids",36141,[]]});
    },

    function(coll) {
        return coll.insert({_id: 21644,str: "Reactive",num: 87113,date: new Date("2018-09-06T16:15:42.922Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21645,str: "Developer connecting system engine",num: 58983,date: new Date("2018-09-06T02:53:08.521Z"),array: ["cyan Refined",new Date("2018-09-06T17:15:29.172Z"),[],"hard drive",new Date("2018-09-06T11:43:05.462Z"),{_id: 21646,str: "back up generate solid state",num: 505,date: new Date("2018-09-05T22:52:09.814Z"),obj: {}},30005,"capacitor port",87115,new Date("2018-09-06T15:59:48.258Z"),69431,72735],obj: {_id: 21647,str: "JSON dynamic Product",date: new Date("2018-09-06T16:53:21.664Z"),array: [[],{_id: 21648,str: "Chips",num: 78298,array: [56331],obj: {}},new Date("2018-09-06T10:35:35.151Z"),"Handcrafted Concrete Ball"],obj: {_id: 21649,num: 17783,date: new Date("2018-09-06T12:26:54.268Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21650,str: "Junctions reboot Summit",num: 97314,date: new Date("2018-09-06T17:44:25.902Z"),array: [64020,"protocol impactful attitude-oriented","Car override",new Date("2018-09-06T00:33:06.051Z"),new Date("2018-09-06T02:05:08.040Z"),{_id: 21651,str: "New Taiwan Dollar Borders Creek",num: 93728,date: new Date("2018-09-06T13:26:29.005Z"),array: [23162,47708]},[],new Date("2018-09-06T01:19:20.225Z"),{_id: 21652,array: ["Exclusive Electronics"],obj: {_id: 21653,str: "neural Outdoors Frozen",num: 53215,date: new Date("2018-09-05T20:21:03.577Z"),array: [[],new Date("2018-09-06T07:59:47.160Z"),7365,52991,[]],obj: {_id: 21654,str: "Human",num: 33081,date: new Date("2018-09-05T22:16:25.801Z"),obj: {_id: 21655,num: 85588,obj: {}}}}},new Date("2018-09-05T20:52:58.109Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 21656,str: "Computer neural cultivate",num: 60609,date: new Date("2018-09-05T23:23:01.062Z"),array: [],obj: {_id: 21657,str: "disintermediate Architect Total",date: new Date("2018-09-05T21:58:18.237Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21658,str: "Proactive Wooden",num: 76986,date: new Date("2018-09-06T02:03:44.155Z"),obj: {_id: 21659,str: "quantifying Mobility Handcrafted Rubber Pants",array: [],obj: {_id: 21660,str: "solid state copying",num: 62453,date: new Date("2018-09-06T02:03:52.620Z"),array: [],obj: {_id: 21661,str: "Norway Dong",date: new Date("2018-09-06T14:30:16.815Z"),array: [81005,"Ohio",19237,"Virtual Corporate","Wooden Savings Account Concrete",new Date("2018-09-05T23:37:57.214Z"),11219,94111,"application",new Date("2018-09-06T00:59:16.884Z"),[{_id: 21662,str: "hacking distributed Branch",num: 18693,date: new Date("2018-09-05T20:59:10.124Z"),array: [[new Date("2018-09-05T20:02:04.387Z")]],obj: {}},new Date("2018-09-05T20:25:45.146Z")],["channels panel recontextualize",{_id: 21663,num: 54606,date: new Date("2018-09-06T17:19:22.500Z")},31195],93724,new Date("2018-09-06T16:08:19.837Z")]}}}});
    },

    function(coll) {
        return coll.insert({_id: 21664,str: "Clothing",num: 85808,date: new Date("2018-09-06T13:41:29.720Z"),array: [],obj: {_id: 21665,str: "optical Fresh Ethiopian Birr",num: 58419,date: new Date("2018-09-06T18:14:23.704Z"),array: [17657,new Date("2018-09-06T11:04:45.557Z"),new Date("2018-09-06T02:15:38.225Z"),new Date("2018-09-06T06:47:00.496Z")],obj: {_id: 21666,str: "French Southern Territories",num: 15919,date: new Date("2018-09-06T14:09:04.613Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 21667,str: "methodology",num: 11214,date: new Date("2018-09-06T12:25:53.146Z"),array: [85211,new Date("2018-09-05T23:44:33.649Z"),"haptic",[],76327,74539,new Date("2018-09-06T04:22:11.410Z"),"Central African Republic",["Camp Metrics Multi-lateral"],"copy Associate",{_id: 21668,str: "wireless Sports Public-key",num: 48398,date: new Date("2018-09-06T19:08:18.648Z"),array: [74925,new Date("2018-09-06T03:28:42.276Z"),new Date("2018-09-06T15:05:08.569Z"),"Personal Loan Account Czech Republic"],obj: {}}],obj: {_id: 21669,str: "Borders",num: 44763,date: new Date("2018-09-06T01:47:40.320Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21670,str: "SDD RSS",num: 95318,date: new Date("2018-09-06T11:12:30.666Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21671,str: "Bedfordshire Cotton",num: 19075,array: [21214,"Money Market Account",{_id: 21672,str: "innovate Fully-configurable",num: 47245,date: new Date("2018-09-06T08:36:03.488Z"),obj: {_id: 21673,num: 98093,date: new Date("2018-09-06T06:53:56.901Z"),array: [],obj: {_id: 21674,str: "Advanced Administrator",num: 10014,date: new Date("2018-09-06T17:25:21.682Z"),array: ["web-readiness",new Date("2018-09-06T14:56:48.574Z")],obj: {}}}},new Date("2018-09-06T02:21:14.161Z"),26291,25418,[[],new Date("2018-09-05T21:33:52.404Z"),"generate revolutionize Concrete",[],87615],"Credit Card Account bluetooth Brunei Dollar",72155],obj: {_id: 21675,str: "RSS paradigms",num: 79317,date: new Date("2018-09-06T10:45:17.525Z"),array: [[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21676,str: "Creative Colombian Peso Unidad de Valor Real",num: 90020,date: new Date("2018-09-06T06:51:25.921Z"),array: ["Frozen Louisiana Forward",new Date("2018-09-06T07:16:07.927Z"),new Date("2018-09-06T11:14:39.685Z"),"Arkansas web-readiness Shirt",45113,[],{_id: 21677,str: "Auto Loan Account Timor-Leste extranet",num: 68265,date: new Date("2018-09-05T22:59:39.002Z"),array: [new Date("2018-09-06T13:01:42.872Z"),[{_id: 21678,str: "SDD content-based",num: 13106,date: new Date("2018-09-06T14:32:09.396Z"),array: [],obj: {_id: 21679,str: "Towels",num: 69273,obj: {_id: 21680,str: "best-of-breed Rustic Frozen Fish",date: new Date("2018-09-06T06:28:06.171Z"),array: [],obj: {}}}},"olive",59683]]},new Date("2018-09-06T06:12:03.674Z"),[],9819,"Granite Licensed Steel Chair"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21681,str: "object-oriented Beauty Credit Card Account",num: 43023,date: new Date("2018-09-05T21:54:54.437Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21682,str: "convergence Architect Credit Card Account",num: 45470,array: [],obj: {_id: 21683,str: "Soft El Salvador",num: 94002,date: new Date("2018-09-06T01:31:37.615Z")}});
    },

    function(coll) {
        return coll.insert({_id: 21684,str: "payment pink",num: 25523,date: new Date("2018-09-05T23:06:34.590Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21685,str: "Developer",num: 8539,date: new Date("2018-09-05T22:28:33.174Z"),array: [new Date("2018-09-06T03:17:18.527Z"),[],[new Date("2018-09-06T04:46:09.692Z")],88233,new Date("2018-09-06T15:03:07.461Z"),84726,11715,"matrix payment Executive",[],{_id: 21686,num: 78402,obj: {}},"synthesize"],obj: {_id: 21687,str: "Bedfordshire",num: 41306,date: new Date("2018-09-06T09:27:51.232Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21688,str: "Savings Account Lead",num: 79650,date: new Date("2018-09-06T01:59:23.131Z"),array: ["Personal Loan Account",{_id: 21689,str: "Legacy e-business Savings Account",num: 80704,date: new Date("2018-09-06T08:21:22.657Z"),obj: {_id: 21690,str: "Optional Music Creative",num: 77609,date: new Date("2018-09-06T03:31:46.776Z"),obj: {_id: 21691,str: "Supervisor",num: 67658,date: new Date("2018-09-06T01:11:08.696Z"),array: [[]],obj: {}}}},30652,"bypass Ergonomic Intuitive",new Date("2018-09-06T02:47:30.621Z"),"SMS",5758,52446,new Date("2018-09-05T23:16:39.595Z"),[3533,new Date("2018-09-06T18:02:54.047Z")],{_id: 21692,array: []},{_id: 21693,num: 83019,date: new Date("2018-09-06T16:37:22.807Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21694,str: "open-source matrix Diverse",num: 27857,date: new Date("2018-09-06T19:46:14.220Z"),array: [],obj: {_id: 21695,str: "Clothing",num: 19396,array: [new Date("2018-09-06T01:38:21.644Z"),57213,new Date("2018-09-06T17:42:18.268Z"),80194,new Date("2018-09-06T08:06:00.540Z"),"mobile red",32125,new Date("2018-09-06T00:32:11.863Z"),{_id: 21696,str: "Interactions feed",num: 11269,date: new Date("2018-09-06T13:56:20.520Z"),obj: {}},"Devolved Towels",12125,[[]],"Colorado Money Market Account Home",new Date("2018-09-06T07:49:25.547Z")],obj: {_id: 21697,date: new Date("2018-09-06T13:18:34.586Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21698,str: "Personal Loan Account Bedfordshire time-frame",num: 31220,date: new Date("2018-09-06T02:13:30.914Z"),array: [95595,new Date("2018-09-06T05:48:41.315Z"),{_id: 21699,str: "Strategist",num: 60640,date: new Date("2018-09-06T05:04:20.736Z"),array: [new Date("2018-09-06T04:04:23.989Z"),"Enterprise-wide",75465,"Berkshire Colombia","next generation Sleek Metal Chips",new Date("2018-09-06T02:37:41.776Z")],obj: {_id: 21700,str: "Argentina override",date: new Date("2018-09-06T00:20:33.250Z"),array: [],obj: {}}},new Date("2018-09-06T07:19:02.541Z"),95129,93427,60634,"Handcrafted Licensed Soft Ball end-to-end",[]]});
    },

    function(coll) {
        return coll.insert({_id: 21701,str: "Pizza Station",num: 55577,date: new Date("2018-09-06T09:30:47.143Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21702,str: "feed",num: 47280,date: new Date("2018-09-06T15:22:37.790Z"),array: [54563,37587,61382,"copying Niue",new Date("2018-09-05T20:00:59.873Z"),{_id: 21703,str: "Forint Avon",num: 87688,date: new Date("2018-09-05T22:34:02.641Z"),array: [],obj: {}},"solid state Gardens Fresh",new Date("2018-09-06T17:00:35.627Z"),"gold payment","French Polynesia","pixel Communications payment"],obj: {_id: 21704,str: "Tools Skyway interfaces",num: 83052,date: new Date("2018-09-06T02:02:31.469Z"),array: [[5832],[],85909,new Date("2018-09-06T13:12:05.336Z"),99927]}});
    },

    function(coll) {
        return coll.insert({_id: 21705,str: "Accounts",num: 59362,date: new Date("2018-09-06T18:10:30.465Z"),array: ["users",{_id: 21706,str: "Dynamic",num: 51269,date: new Date("2018-09-06T18:43:59.422Z"),array: [],obj: {}},new Date("2018-09-06T01:43:22.156Z"),"Officer global",new Date("2018-09-06T11:10:34.798Z"),30131],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21707,str: "overriding",num: 46551,date: new Date("2018-09-06T10:58:00.517Z"),array: ["Senior",new Date("2018-09-06T04:32:22.584Z"),95252,{_id: 21708,str: "e-services attitude-oriented Licensed Wooden Tuna",num: 6104,date: new Date("2018-09-06T09:40:49.622Z"),array: [],obj: {}},45141,new Date("2018-09-06T17:23:30.339Z"),new Date("2018-09-06T08:12:22.691Z"),{_id: 21709,str: "bypassing Isle card",num: 84523,array: [],obj: {}},new Date("2018-09-06T04:27:25.643Z"),"system Shoes Applications",["Pass monitor Libyan Arab Jamahiriya"],85771,new Date("2018-09-06T01:30:59.600Z")],obj: {_id: 21710,date: new Date("2018-09-06T19:20:10.306Z"),array: [[[]],{_id: 21711,str: "wireless Graphical User Interface Pants",date: new Date("2018-09-06T01:27:57.457Z")},43287,{_id: 21712,num: 63050,date: new Date("2018-09-06T18:01:09.592Z"),array: [[]],obj: {}}],obj: {_id: 21713,str: "Bahraini Dinar transmitting copying",date: new Date("2018-09-06T12:45:03.578Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 21714,str: "enhance Shirt Granite",num: 19302,date: new Date("2018-09-06T00:21:58.203Z"),array: [],obj: {_id: 21715,str: "Refined Sharable markets",num: 90387,date: new Date("2018-09-06T02:23:11.029Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21716,str: "ivory Universal auxiliary",num: 38458,date: new Date("2018-09-06T16:40:53.333Z"),array: ["deposit",new Date("2018-09-06T09:08:33.265Z"),"driver Personal Loan Account",33621,new Date("2018-09-06T05:56:56.609Z"),"invoice Ports transmitting",new Date("2018-09-06T12:55:17.090Z"),[]],obj: {_id: 21717,str: "executive Orchestrator",date: new Date("2018-09-06T11:20:19.779Z"),array: [54854,47284,"Ford","grid-enabled Chips Innovative",{_id: 21718,str: "Metrics holistic",num: 56022,date: new Date("2018-09-06T19:24:47.131Z"),array: ["Customer"],obj: {}},new Date("2018-09-06T10:43:35.984Z"),84991]}});
    },

    function(coll) {
        return coll.insert({_id: 21719,str: "Outdoors",num: 9231,date: new Date("2018-09-06T10:36:42.618Z"),array: [],obj: {_id: 21720,str: "Investment Account Junction",num: 43213,date: new Date("2018-09-06T05:29:29.252Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 21721,str: "Tasty",num: 87391,date: new Date("2018-09-06T15:17:31.317Z"),array: [19618,new Date("2018-09-05T21:16:43.630Z"),"silver Quality Haiti",new Date("2018-09-06T06:22:16.843Z"),59523,{_id: 21722,str: "payment users",num: 51708,array: [],obj: {_id: 21723,str: "Estate",num: 66690,date: new Date("2018-09-06T00:40:44.626Z"),obj: {}}},new Date("2018-09-06T16:59:02.663Z"),["olive auxiliary contextually-based",new Date("2018-09-06T04:43:49.545Z"),"Indiana"],{_id: 21724,num: 54711,date: new Date("2018-09-06T18:26:27.549Z"),array: []},39215],obj: {_id: 21725,str: "schemas",date: new Date("2018-09-06T05:39:19.047Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21726,str: "visualize Consultant Niger",num: 6964,date: new Date("2018-09-05T22:36:21.897Z"),array: [42713,"monetize Tala","West Virginia Berkshire",new Date("2018-09-06T18:20:03.971Z"),{_id: 21727,num: 49850,date: new Date("2018-09-05T23:07:20.488Z"),array: [],obj: {_id: 21728,str: "North Dakota Mozambique Compatible",num: 86192,date: new Date("2018-09-06T11:25:43.032Z"),array: [],obj: {}}},new Date("2018-09-06T15:09:59.209Z"),"Utah compressing",72814,[],new Date("2018-09-06T19:33:39.702Z")],obj: {_id: 21729,str: "Rubber Practical",num: 54735,date: new Date("2018-09-06T06:19:37.697Z")}});
    },

    function(coll) {
        return coll.insert({_id: 21730,str: "Licensed Tanzanian Shilling",num: 94259,date: new Date("2018-09-06T10:44:22.703Z"),array: ["schemas Handmade Concrete Cheese Coordinator",new Date("2018-09-06T17:56:09.581Z"),67588,"conglomeration extensible",{_id: 21731,str: "payment",num: 20736,date: new Date("2018-09-06T00:33:24.137Z"),array: [],obj: {}},60778,[],new Date("2018-09-06T17:00:43.472Z"),34736,new Date("2018-09-05T21:56:12.794Z")],obj: {_id: 21732,str: "virtual",num: 80159,date: new Date("2018-09-06T10:45:15.019Z"),array: ["Incredible",{_id: 21733,array: [],obj: {_id: 21734,num: 92000,array: [[new Date("2018-09-06T19:10:38.169Z")],"bypassing Implementation",49596]}},1900,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21735,str: "teal Tactics",num: 57101,date: new Date("2018-09-06T18:35:30.987Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21736,str: "input",num: 33519,date: new Date("2018-09-06T03:52:49.504Z"),array: ["Squares hacking revolutionize",new Date("2018-09-06T00:50:02.264Z"),31116,84858,78175,new Date("2018-09-05T22:25:05.537Z"),[],"systemic Handmade Rubber","Assurance"],obj: {_id: 21737,str: "parsing",num: 60391,array: [new Date("2018-09-06T11:56:59.180Z"),"hacking Metal Dynamic",18225,"digital modular",[new Date("2018-09-06T01:12:30.784Z")],"Cambridgeshire"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21738,str: "Berkshire Regional support",num: 8867,date: new Date("2018-09-05T23:46:56.953Z"),array: [75534,79566,"withdrawal Berkshire USB",11611,new Date("2018-09-06T08:26:26.974Z"),new Date("2018-09-05T22:24:53.299Z"),new Date("2018-09-05T22:58:33.930Z"),[],"Berkshire GB"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21739,str: "Rhode Island bandwidth olive",num: 88311,date: new Date("2018-09-06T15:02:33.757Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21740,str: "Ball",num: 11403,date: new Date("2018-09-06T19:19:28.782Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21741,str: "Checking Account capacitor lavender",num: 2810,date: new Date("2018-09-06T15:04:26.282Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21742,str: "Auto Loan Account Unbranded El Salvador",num: 26939,date: new Date("2018-09-05T22:18:09.682Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21743,str: "deposit",num: 52291,array: [],obj: {_id: 21744,str: "1080p productize Pizza",num: 70742,date: new Date("2018-09-06T03:32:56.941Z"),obj: {_id: 21745,str: "real-time Principal",date: new Date("2018-09-06T07:42:38.321Z"),array: [80277,{_id: 21746,str: "Fiji Dollar",num: 96590,obj: {}},53117,52569,"program invoice Avon",new Date("2018-09-06T14:15:41.422Z"),"Unbranded Nebraska",new Date("2018-09-06T04:46:46.573Z"),"Movies Granite Bedfordshire"],obj: {_id: 21747,str: "Tasty Cotton Computer bluetooth",num: 47416,date: new Date("2018-09-06T15:21:22.083Z"),array: [{_id: 21748,array: []},["Chicken Multi-tiered",new Date("2018-09-06T17:46:01.899Z")],[],"Chief programming"],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 21749,str: "deposit",num: 99271,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21750,str: "Down-sized Czech Republic Baby",num: 44756,date: new Date("2018-09-06T05:54:50.426Z"),array: ["IB Pula",new Date("2018-09-06T11:15:32.946Z"),"array impactful Nebraska",42974,[],new Date("2018-09-05T22:08:05.619Z"),new Date("2018-09-05T22:43:19.789Z"),[{_id: 21751,date: new Date("2018-09-06T12:16:05.945Z"),array: [],obj: {}},"withdrawal",65665,"Beauty Tactics",58796,{_id: 21752,str: "Configuration protocol extend",num: 73043,date: new Date("2018-09-06T06:18:18.932Z"),array: [73433,new Date("2018-09-06T17:42:51.852Z"),new Date("2018-09-05T23:35:00.999Z")],obj: {_id: 21753,str: "killer Jersey Island",date: new Date("2018-09-05T23:57:50.076Z"),obj: {_id: 21754,num: 73331,array: []}}}],["Strategist embrace"],[new Date("2018-09-06T03:16:44.581Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21755,str: "Assistant synthesizing",num: 86890,date: new Date("2018-09-06T16:10:56.393Z"),array: [new Date("2018-09-06T12:49:19.812Z"),"Money Market Account Home Loan Account",77723,new Date("2018-09-06T18:43:15.114Z"),{_id: 21756,str: "Gorgeous Rubber Cheese Brazil",date: new Date("2018-09-05T20:52:09.619Z"),array: [],obj: {}},55984,[],{_id: 21757,str: "Computers Senior Incredible Fresh Chips",num: 74361,date: new Date("2018-09-06T16:56:38.517Z"),array: [["wireless"],"mission-critical Rubber",[],69945],obj: {_id: 21758,str: "Connecticut cross-platform New Taiwan Dollar",num: 90120,array: [new Date("2018-09-06T12:46:40.066Z"),"foreground open-source"],obj: {_id: 21759,num: 57752,date: new Date("2018-09-06T14:28:29.314Z")}}},new Date("2018-09-06T05:39:25.359Z"),62694,new Date("2018-09-06T05:59:18.913Z"),new Date("2018-09-05T20:22:30.557Z")],obj: {_id: 21760,date: new Date("2018-09-06T10:35:54.833Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 21761,str: "Forward driver",num: 8230,date: new Date("2018-09-06T17:11:44.888Z"),array: ["exuding Saint Vincent and the Grenadines Skyway",new Date("2018-09-06T19:24:00.021Z"),39053,new Date("2018-09-06T04:04:43.365Z"),"synthesize Unbranded initiatives","Ergonomic Wooden Table moderator",[],[],91425,42451,37074,82678],obj: {_id: 21762,num: 29357,date: new Date("2018-09-06T08:35:43.928Z"),array: [],obj: {_id: 21763,str: "interface Guyana Dollar Music",num: 50848,date: new Date("2018-09-06T07:29:36.286Z"),array: ["Bedfordshire purple",{_id: 21764,str: "Human gold",array: [new Date("2018-09-06T11:51:58.128Z"),{_id: 21765,obj: {_id: 21766,str: "recontextualize tan primary",num: 50516,date: new Date("2018-09-05T22:48:27.921Z"),obj: {}}},[new Date("2018-09-06T13:14:32.489Z"),new Date("2018-09-06T12:37:25.135Z")],{_id: 21767,num: 21448,date: new Date("2018-09-06T03:50:20.210Z"),array: [],obj: {}},new Date("2018-09-05T21:07:29.337Z")]}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21768,str: "Rand Namibia Dollar Tunnel",num: 82567,date: new Date("2018-09-06T15:40:01.870Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21769,str: "bus",num: 17931,date: new Date("2018-09-06T03:46:12.202Z"),array: [],obj: {_id: 21770,num: 99620,array: [new Date("2018-09-05T21:28:53.517Z"),97869,new Date("2018-09-06T15:36:00.137Z"),44901,"tan Minnesota",{_id: 21771,str: "navigate Mauritius Rupee payment",date: new Date("2018-09-06T10:51:49.922Z"),obj: {}},47216,new Date("2018-09-06T15:21:35.707Z"),"morph bluetooth","Steel","Creek gold",new Date("2018-09-06T06:42:45.603Z"),20610]}});
    },

    function(coll) {
        return coll.insert({_id: 21772,str: "digital",num: 28000,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21773,str: "Hat Drive",num: 40719,date: new Date("2018-09-06T08:07:53.098Z"),array: [],obj: {_id: 21774,str: "primary",num: 96092,date: new Date("2018-09-06T16:36:49.094Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21775,num: 61372,date: new Date("2018-09-06T14:26:22.226Z"),array: ["Checking Account Web","Chad Somali Shilling digital",new Date("2018-09-06T06:05:03.338Z"),new Date("2018-09-06T10:52:44.270Z"),6706,[],{_id: 21776,str: "leading-edge enhance Object-based",num: 83781,date: new Date("2018-09-06T12:19:49.632Z"),array: [{_id: 21777,str: "payment override Computers",num: 53234,date: new Date("2018-09-06T04:09:53.601Z"),array: [{_id: 21778,str: "optimize Mouse Robust",array: [],obj: {_id: 21779,str: "Implementation Practical Fresh Pizza",num: 63394,array: [],obj: {}}},"Investment Account Music Engineer",19404,51892,new Date("2018-09-06T15:48:26.580Z")],obj: {_id: 21780,str: "Ways override Intelligent Metal Pants",num: 59383,date: new Date("2018-09-06T11:46:47.220Z"),obj: {}}}]},41372,{_id: 21781,str: "systematic Savings Account",obj: {_id: 21782,date: new Date("2018-09-06T16:05:36.701Z"),obj: {}}},[],{_id: 21783,num: 19499,array: [11120]}],obj: {_id: 21784,num: 55645,date: new Date("2018-09-05T23:59:46.729Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 21785,str: "Human Money Market Account Implemented",num: 91034,date: new Date("2018-09-06T05:36:33.164Z"),array: ["bypass","matrix AI",44537,82813,new Date("2018-09-05T21:14:05.763Z"),[],new Date("2018-09-06T17:17:34.522Z"),64042,{_id: 21786,str: "Digitized Refined Rubber Towels",num: 47544,date: new Date("2018-09-06T01:19:08.415Z"),array: [],obj: {}},new Date("2018-09-06T13:42:41.723Z"),[new Date("2018-09-06T16:40:12.027Z"),{_id: 21787,str: "mission-critical",num: 95555,date: new Date("2018-09-06T08:12:17.766Z"),array: ["card"],obj: {_id: 21788,num: 74999,date: new Date("2018-09-06T15:42:58.346Z"),obj: {}}}],60411,"yellow Solutions world-class"]});
    },

    function(coll) {
        return coll.insert({_id: 21789,num: 82239,date: new Date("2018-09-06T05:06:58.629Z"),array: [41319,"1080p sky blue Louisiana",new Date("2018-09-05T22:21:15.702Z"),93389,new Date("2018-09-06T05:26:52.943Z"),[],"Director Drives Beauty","syndicate Baht Romania",59356,new Date("2018-09-06T16:15:56.675Z"),{_id: 21790,str: "backing up Senior",num: 77150,date: new Date("2018-09-06T06:53:58.654Z"),array: [],obj: {_id: 21791,str: "Nepal",num: 46494,array: [9181,new Date("2018-09-05T20:14:11.408Z"),27572,18158,[]],obj: {}}}],obj: {_id: 21792,str: "Dynamic Palladium model",num: 53425,date: new Date("2018-09-06T07:48:40.172Z")}});
    },

    function(coll) {
        return coll.insert({_id: 21793,str: "Fish Towels envisioneer",num: 41526,date: new Date("2018-09-06T07:12:49.506Z"),array: [32667,8289,[],7663,"revolutionize Money Market Account",new Date("2018-09-06T03:30:33.829Z"),new Date("2018-09-06T02:17:37.918Z")],obj: {_id: 21794,str: "experiences",num: 55199,array: [[],"Fork",new Date("2018-09-06T16:02:48.062Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 21795,str: "initiatives",num: 22428,date: new Date("2018-09-06T07:39:35.134Z"),array: [new Date("2018-09-06T12:42:29.318Z"),"applications Peso Uruguayo Uruguay Peso en Unidades Indexadas",new Date("2018-09-06T13:54:41.285Z"),88939,new Date("2018-09-06T14:55:23.426Z"),[],"mindshare regional","Analyst","solid state","Buckinghamshire Technician Loaf",new Date("2018-09-05T22:30:12.389Z")],obj: {_id: 21796,str: "Personal Loan Account",num: 84186,date: new Date("2018-09-06T01:48:21.217Z")}});
    },

    function(coll) {
        return coll.insert({_id: 21797,str: "Solutions Customer synthesize",num: 98391,date: new Date("2018-09-06T02:51:26.036Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21798,str: "Savings Account",num: 9010,date: new Date("2018-09-05T21:33:33.096Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21799,str: "bypass communities Montana",num: 51024,date: new Date("2018-09-06T10:42:55.850Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21800,str: "white",num: 24243,date: new Date("2018-09-06T04:58:01.032Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21801,str: "invoice Bermuda",num: 58899,date: new Date("2018-09-06T01:03:05.937Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21802,str: "Checking Account",num: 17074,date: new Date("2018-09-06T03:48:41.822Z"),array: [60403,70040,"multimedia card",new Date("2018-09-06T11:59:51.040Z"),"24/7 invoice Handmade",[78738,[],{_id: 21803,str: "Investment Account",num: 70840,date: new Date("2018-09-06T00:05:19.135Z"),array: [],obj: {_id: 21804,str: "collaborative Plastic XML",date: new Date("2018-09-06T00:07:14.796Z"),array: [],obj: {_id: 21805,str: "generate purple",num: 74499,array: [29857,new Date("2018-09-05T22:52:23.768Z"),new Date("2018-09-06T04:12:04.883Z")],obj: {}}}},[new Date("2018-09-05T22:17:59.071Z"),new Date("2018-09-06T01:08:16.255Z"),"generate"]],27574,new Date("2018-09-06T02:26:32.926Z"),{_id: 21806,num: 46704,date: new Date("2018-09-06T12:00:47.405Z"),obj: {}},"Granite"]});
    },

    function(coll) {
        return coll.insert({_id: 21807,str: "application",num: 21377,date: new Date("2018-09-05T23:43:29.400Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21808,str: "solid state Car explicit",num: 60664,date: new Date("2018-09-06T15:41:52.233Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21809,str: "matrix connecting user-centric",num: 8093,date: new Date("2018-09-06T13:58:32.058Z"),array: [new Date("2018-09-06T01:45:07.429Z"),"Russian Ruble",new Date("2018-09-06T05:17:38.438Z"),"Sports Savings Account",97619,{_id: 21810,str: "Avon Innovative",num: 10404,array: [],obj: {}},[[56895],91055,new Date("2018-09-06T18:24:15.702Z"),48802,"New Israeli Sheqel rich",new Date("2018-09-06T05:20:00.449Z")],82925],obj: {_id: 21811,num: 39726,date: new Date("2018-09-06T16:50:22.891Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 21812,str: "Licensed Plastic Towels",num: 27345,array: [29750,new Date("2018-09-06T07:08:56.622Z"),[],new Date("2018-09-06T00:51:02.215Z"),67996,"reinvent Frozen","Ergonomic transition",32063,new Date("2018-09-06T16:16:50.552Z"),1701,"Customer-focused",{_id: 21813,str: "HTTP Buckinghamshire Group",num: 37686,date: new Date("2018-09-06T12:37:43.696Z"),array: [[new Date("2018-09-05T22:26:30.392Z"),[],"Greece cyan","Rubber Manors",55039],26051],obj: {_id: 21814,num: 55119,date: new Date("2018-09-06T09:43:44.328Z"),array: [],obj: {}}}],obj: {_id: 21815,str: "generate calculate Administrator",num: 16062,date: new Date("2018-09-06T18:33:47.278Z"),array: [new Date("2018-09-06T15:54:04.982Z"),{_id: 21816,str: "generate",num: 64546,date: new Date("2018-09-06T02:03:26.599Z"),obj: {_id: 21817,date: new Date("2018-09-06T06:08:32.278Z")}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21818,str: "Developer matrices",num: 21408,date: new Date("2018-09-06T16:55:03.395Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21819,str: "Home Loan Account Granite Shoes",num: 30908,date: new Date("2018-09-05T19:56:46.444Z"),array: [],obj: {_id: 21820,num: 28154,date: new Date("2018-09-06T15:06:08.884Z"),array: ["payment",new Date("2018-09-06T18:53:49.049Z"),82352,{_id: 21821,str: "Keyboard Jewelery Cambridgeshire",num: 84089,date: new Date("2018-09-05T23:00:05.373Z"),array: [{_id: 21822,str: "yellow access Communications",num: 92161,date: new Date("2018-09-06T17:23:46.690Z"),obj: {}},"International mobile Handcrafted","Refined Designer",16273],obj: { _id: 21823 }},new Date("2018-09-06T05:59:44.327Z"),new Date("2018-09-06T19:51:37.485Z"),85125,new Date("2018-09-06T14:00:07.415Z"),78210,"Personal Loan Account",new Date("2018-09-06T19:28:43.421Z"),"Libyan Dinar ubiquitous"]}});
    },

    function(coll) {
        return coll.insert({_id: 21824,str: "neural-net",num: 90074,date: new Date("2018-09-06T14:08:04.984Z"),array: [68270,"Officer XSS overriding",new Date("2018-09-06T06:58:03.745Z"),"protocol","Cambridgeshire generate",new Date("2018-09-06T11:15:11.885Z"),new Date("2018-09-06T00:55:33.458Z"),[],63136,new Date("2018-09-06T14:17:03.983Z"),{_id: 21825,str: "Plastic",num: 74161,date: new Date("2018-09-06T11:37:37.076Z"),array: [98984,new Date("2018-09-06T03:12:28.912Z"),"Function-based"],obj: {}},{_id: 21826,str: "Associate Awesome",num: 41979,date: new Date("2018-09-06T04:00:45.520Z"),obj: {_id: 21827,str: "Shoes Solutions deposit",date: new Date("2018-09-05T20:22:04.970Z"),array: [[]]}}],obj: {_id: 21828,str: "Guarani Fields",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21829,str: "generate",num: 83049,date: new Date("2018-09-06T01:02:53.037Z"),array: ["Beauty","Upgradable","Intranet sexy generate",new Date("2018-09-06T13:35:08.668Z"),62408,new Date("2018-09-06T10:40:07.979Z"),{_id: 21830,num: 89932,array: []},"Centralized Angola",1108,new Date("2018-09-06T02:56:47.923Z"),89004,64963],obj: {_id: 21831,str: "Refined Fresh Salad",num: 42237,date: new Date("2018-09-06T00:14:16.570Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21832,str: "Manager",num: 55845,date: new Date("2018-09-06T14:26:43.480Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21833,str: "system",num: 1086,date: new Date("2018-09-06T16:59:28.422Z"),array: ["Investment Account",new Date("2018-09-05T22:45:14.791Z"),46913,"Buckinghamshire red",{_id: 21834,str: "Strategist Auto Loan Account",num: 80373,date: new Date("2018-09-06T13:30:30.296Z"),obj: {}},"override",12707,[],38331,{_id: 21835,num: 634,date: new Date("2018-09-06T18:03:35.860Z"),array: [[]],obj: {_id: 21836,str: "SDD National",num: 84771,array: []}},{_id: 21837,str: "technologies Avon",num: 53221,date: new Date("2018-09-06T10:10:57.100Z"),array: [new Date("2018-09-06T08:44:31.658Z"),5635,"South Dakota Berkshire Rustic"],obj: {_id: 21838,date: new Date("2018-09-06T03:20:33.351Z"),array: [new Date("2018-09-06T09:14:14.704Z"),new Date("2018-09-05T22:20:05.908Z")]}},58284,new Date("2018-09-06T07:21:55.245Z"),"Hat"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21839,str: "Generic connecting Oklahoma",date: new Date("2018-09-06T07:56:31.177Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21840,str: "Knoll partnerships Forks",num: 48892,date: new Date("2018-09-06T12:26:57.667Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21841,str: "application",num: 31230,date: new Date("2018-09-05T22:11:01.893Z"),array: [],obj: {_id: 21842,str: "Home Loan Account",num: 75095,date: new Date("2018-09-05T19:59:04.911Z"),array: [8229,65230,"magenta",{_id: 21843,str: "Colorado",num: 21196,date: new Date("2018-09-06T13:05:43.861Z"),array: [],obj: {}},new Date("2018-09-06T17:49:35.535Z"),"gold Credit Card Account Orchestrator",new Date("2018-09-06T11:27:09.042Z"),53878,77479,"Awesome Wooden Table"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21844,str: "zero administration global SMTP",num: 91508,date: new Date("2018-09-06T03:52:48.907Z"),array: [new Date("2018-09-06T03:25:42.058Z"),"Andorra",50664,new Date("2018-09-05T21:17:59.430Z"),{_id: 21845,str: "digital solid state Bike",num: 19956,date: new Date("2018-09-05T20:55:26.834Z"),array: []},new Date("2018-09-06T05:27:50.364Z"),{_id: 21846,str: "Auto Loan Account architect vertical",num: 92193,date: new Date("2018-09-06T06:57:38.074Z"),array: [],obj: {_id: 21847,str: "cross-platform Table",obj: {_id: 21848,str: "Granite lime",num: 41533,array: [new Date("2018-09-06T19:49:59.123Z"),"bottom-line Nevada",new Date("2018-09-06T15:02:58.507Z"),54339,79083],obj: {}}}},50991],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21849,str: "quantifying orchid",num: 56514,date: new Date("2018-09-06T06:21:41.025Z"),array: [new Date("2018-09-06T03:12:42.829Z"),"Turkish Lira",[20329,new Date("2018-09-06T01:45:31.132Z"),{_id: 21850,str: "Generic Soft Cheese Cambridgeshire",num: 20123,date: new Date("2018-09-06T12:40:51.747Z"),array: [],obj: {}},new Date("2018-09-05T22:23:18.407Z"),"Chicken Spain port",6471],"Roads dedicated vertical",60328,"Granite","ADP transition","District Fantastic Greenland"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21851,str: "Consultant Buckinghamshire cutting-edge",num: 45630,date: new Date("2018-09-06T06:52:43.705Z"),array: [],obj: {_id: 21852,num: 28773,date: new Date("2018-09-05T23:48:51.643Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21853,str: "input support disintermediate",num: 58877,date: new Date("2018-09-06T13:51:58.080Z"),array: ["Fresh",new Date("2018-09-06T09:41:52.441Z"),58785,46071,"Gold 1080p",{_id: 21854,str: "Hungary Mali e-business",date: new Date("2018-09-06T11:48:11.222Z"),array: ["Indiana olive back up",3524,{_id: 21855,num: 85089,date: new Date("2018-09-06T09:43:45.733Z"),array: [],obj: {}},new Date("2018-09-06T13:31:30.842Z"),"Avon Home Loan Account",new Date("2018-09-06T19:12:24.984Z"),[],new Date("2018-09-06T16:33:20.701Z")],obj: {}},[],new Date("2018-09-06T03:53:42.185Z")]});
    },

    function(coll) {
        return coll.insert({_id: 21856,str: "red lavender",num: 6428,date: new Date("2018-09-06T11:43:20.768Z"),array: [new Date("2018-09-06T15:31:01.182Z"),[],53681,new Date("2018-09-06T17:34:33.179Z"),53387,{_id: 21857,str: "bandwidth",num: 88059,date: new Date("2018-09-06T12:31:54.826Z"),array: [],obj: {_id: 21858,str: "Swedish Krona IB",num: 73899,date: new Date("2018-09-06T04:52:14.013Z"),array: [],obj: {}}},"withdrawal synergistic",["moratorium Investment Account paradigm"],99595,97353,new Date("2018-09-05T22:00:47.217Z"),"Customer","cultivate service-desk"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21859,str: "Awesome Brunei Darussalam software",num: 43035,date: new Date("2018-09-06T01:46:02.292Z"),array: [new Date("2018-09-05T20:25:07.495Z"),"customized Mouse",61851,new Date("2018-09-06T07:44:39.276Z"),56909,"leverage transmit"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21860,str: "action-items Handcrafted Landing",num: 3143,date: new Date("2018-09-06T02:03:15.137Z"),array: ["Licensed Associate",new Date("2018-09-06T08:53:59.868Z"),55617,new Date("2018-09-06T16:51:57.203Z"),["Dynamic Practical",96854,84714],[],{_id: 21861,str: "Synergized South Dakota",num: 3356,date: new Date("2018-09-06T00:14:27.539Z"),array: [{_id: 21862,num: 35075,date: new Date("2018-09-06T06:18:15.638Z")},99158,new Date("2018-09-05T22:21:33.564Z")],obj: {_id: 21863,num: 45668,date: new Date("2018-09-06T01:28:20.375Z"),array: [],obj: {_id: 21864,str: "Vatu",date: new Date("2018-09-06T18:38:18.091Z"),array: [new Date("2018-09-06T17:00:54.478Z"),"Personal Loan Account Soft",{_id: 21865,str: "communities",array: [],obj: {}}],obj: {_id: 21866,date: new Date("2018-09-06T01:00:47.923Z")}}}},new Date("2018-09-06T13:49:01.680Z"),[],"1080p"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21867,str: "Savings Account",num: 16519,date: new Date("2018-09-06T08:09:47.462Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21868,str: "implementation Mobility Auto Loan Account",num: 71895,date: new Date("2018-09-06T12:22:33.381Z"),array: [new Date("2018-09-06T03:51:57.193Z"),"Table real-time Virginia",{_id: 21869,str: "Multi-lateral conglomeration Junctions",num: 35128,date: new Date("2018-09-06T11:02:22.413Z"),array: [],obj: {_id: 21870,str: "Kenyan Shilling Tasty Fresh Shirt sensor",num: 19370,date: new Date("2018-09-06T02:45:12.562Z"),array: ["Hawaii"],obj: {}}},new Date("2018-09-06T07:19:05.855Z"),[],78374,[],81710,"Steel Won","Inverse","Global interfaces Wooden",new Date("2018-09-06T06:36:14.282Z"),new Date("2018-09-06T13:58:43.098Z")]});
    },

    function(coll) {
        return coll.insert({_id: 21871,str: "Tasty Wooden Shirt Product",num: 88118,date: new Date("2018-09-06T03:09:02.524Z"),array: [],obj: {_id: 21872,str: "Adaptive monitoring",num: 81948,array: [new Date("2018-09-06T07:41:49.528Z"),67041,"online",new Date("2018-09-06T18:01:15.762Z"),"experiences red","logistical",50593,83089,[25659],new Date("2018-09-06T17:54:07.586Z"),[],new Date("2018-09-06T03:52:06.388Z"),{_id: 21873,date: new Date("2018-09-06T00:12:46.534Z"),obj: {}}],obj: {_id: 21874,str: "online Solutions",num: 80257,date: new Date("2018-09-06T02:32:11.165Z"),array: [new Date("2018-09-06T01:59:54.280Z"),{_id: 21875,num: 45923,date: new Date("2018-09-06T07:32:09.792Z"),array: [],obj: {}},"North Carolina primary"],obj: {_id: 21876,str: "high-level convergence framework",num: 6168,date: new Date("2018-09-06T11:45:50.366Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 21877,str: "transmitting salmon",num: 5655,date: new Date("2018-09-06T07:44:59.712Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21878,str: "neural Armenia",num: 15123,date: new Date("2018-09-06T19:40:48.922Z"),array: ["Borders reboot",new Date("2018-09-06T06:44:51.654Z"),"innovate Refined Frozen Chair Handcrafted Plastic Pants",48154,{_id: 21879,num: 49145,date: new Date("2018-09-06T04:57:49.943Z"),array: [new Date("2018-09-06T16:09:57.284Z"),new Date("2018-09-06T08:11:12.444Z"),382],obj: {}},6287,{_id: 21880,str: "connecting primary e-markets",num: 28651,date: new Date("2018-09-06T11:15:54.953Z"),array: [],obj: {}},[],55314,{_id: 21881,str: "wireless real-time input",num: 80925,date: new Date("2018-09-06T10:28:08.236Z"),array: ["digital Avon attitude",new Date("2018-09-06T11:39:38.367Z")],obj: {_id: 21882,str: "Hong Kong",num: 36556}}],obj: {_id: 21883,date: new Date("2018-09-06T12:55:14.645Z"),array: [[],33772,7003],obj: {_id: 21884,str: "Granite",num: 66302,date: new Date("2018-09-06T07:24:03.553Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 21885,str: "green compressing Unbranded",num: 44981,date: new Date("2018-09-05T23:03:45.955Z"),array: [21338,new Date("2018-09-06T04:26:45.507Z"),new Date("2018-09-06T01:50:48.343Z"),new Date("2018-09-06T14:33:18.365Z"),"feed mission-critical Liaison",45816,"Tactics",[],[],new Date("2018-09-06T18:30:47.279Z"),97379,{_id: 21886,str: "moderator Home Loan Account input",date: new Date("2018-09-06T14:05:49.160Z"),array: ["efficient Borders"],obj: {_id: 21887,num: 48996,date: new Date("2018-09-06T05:25:56.431Z"),obj: {_id: 21888,str: "Baby Wooden",date: new Date("2018-09-06T05:01:18.124Z"),array: [],obj: {}}}},"Cove throughput Division",74402]});
    },

    function(coll) {
        return coll.insert({_id: 21889,str: "best-of-breed grey methodologies",num: 96288,date: new Date("2018-09-06T17:55:03.735Z"),array: [9149,new Date("2018-09-06T10:13:54.793Z"),{_id: 21890,num: 7453,obj: {}},"customized moderator",new Date("2018-09-06T00:48:31.103Z"),74023,10089,{_id: 21891,str: "Up-sized bluetooth",num: 49219,date: new Date("2018-09-05T22:16:08.094Z"),array: [56083,"Sleek Soft Cheese",new Date("2018-09-06T13:53:15.226Z"),"Strategist Handmade Metal Sausages",new Date("2018-09-06T17:26:19.729Z")]},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21892,str: "payment Frozen",num: 67999,date: new Date("2018-09-05T23:24:58.746Z"),array: [13186,new Date("2018-09-06T08:00:24.720Z"),56681,new Date("2018-09-06T12:36:20.616Z"),new Date("2018-09-06T12:22:20.264Z")],obj: {_id: 21893,str: "morph maximize",num: 61608,date: new Date("2018-09-05T21:44:44.223Z"),array: [[],55232,"Guadeloupe interactive",{_id: 21894,str: "mindshare",num: 68293,date: new Date("2018-09-05T22:59:39.318Z"),obj: {_id: 21895,num: 58506,date: new Date("2018-09-05T22:02:51.893Z"),array: ["Handmade Granite Chicken"],obj: {}}},new Date("2018-09-06T13:32:10.621Z"),{_id: 21896,str: "encompassing",date: new Date("2018-09-06T16:39:02.359Z"),array: [],obj: {_id: 21897,str: "Awesome"}},"Dynamic",[],new Date("2018-09-06T04:53:01.974Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21898,str: "intranet architect",num: 67729,date: new Date("2018-09-06T16:54:32.594Z"),array: [79555,new Date("2018-09-06T02:42:43.858Z"),"solid state Sleek pixel","bus",69033,[],{_id: 21899,str: "program Idaho",num: 83137,array: [15625,53859],obj: {_id: 21900,str: "hacking national Branch",date: new Date("2018-09-06T15:03:27.824Z"),array: ["Designer zero defect Soft","grow Interactions Central"]}},new Date("2018-09-05T21:39:06.139Z"),[],new Date("2018-09-06T05:46:48.009Z"),new Date("2018-09-06T10:42:23.982Z"),{_id: 21901,str: "Music Supervisor",num: 14393,date: new Date("2018-09-06T18:42:05.615Z"),obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21902,str: "Practical Metal Sausages Avenue withdrawal",num: 35252,date: new Date("2018-09-06T08:18:11.476Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21903,str: "Credit Card Account",num: 63768,array: [],obj: {_id: 21904,str: "Indiana",date: new Date("2018-09-06T04:00:06.124Z"),obj: {_id: 21905,num: 13637,date: new Date("2018-09-06T13:31:10.751Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21906,str: "Shoes Money Market Account",num: 93402,date: new Date("2018-09-06T06:36:01.317Z"),array: [],obj: {_id: 21907,str: "deposit",num: 12006,date: new Date("2018-09-06T09:41:47.490Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21908,str: "Plastic",num: 34292,date: new Date("2018-09-06T00:24:17.060Z"),array: [],obj: {_id: 21909,str: "maroon",num: 1441,date: new Date("2018-09-06T04:04:05.238Z"),array: [41796,"Pants Avon","Nigeria",new Date("2018-09-06T08:43:55.828Z"),new Date("2018-09-06T00:05:01.549Z"),new Date("2018-09-06T10:34:04.300Z"),{_id: 21910,num: 70548,date: new Date("2018-09-06T16:32:35.869Z"),array: [{_id: 21911,str: "Markets Money Market Account payment",num: 60002,date: new Date("2018-09-06T09:41:56.762Z"),obj: {}},["platforms Business-focused invoice",35347,"black"],8857,new Date("2018-09-06T17:55:18.126Z")]},[],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 21912,str: "platforms next generation Corporate",num: 88345,date: new Date("2018-09-06T16:48:43.636Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21913,date: new Date("2018-09-06T00:01:24.938Z"),obj: {_id: 21914,str: "Handcrafted Fresh Pants Diverse violet",num: 93738,date: new Date("2018-09-06T09:11:55.101Z"),array: []}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayToObject: [[[96209],[{ $trim: { input: "Cambridgeshire Brooks Borders" } },'$obj.obj.obj.str'],[],[{ $concat: [] },"web-readiness",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Union Human Multi-layered",v: { $ln: '$num' }},{k: "sticky",v: new Date("2018-09-06T04:28:03.056Z")},{k: "Kansas driver schemas",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',19,19] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $ltrim: {input: { $concat: ['$obj.obj.obj.str','$obj.obj.str'] },chars: "Hat withdrawal bluetooth"} }],['$num'],[],["Money Market Account Tanzanian Shilling web-enabled","Iceland Krona Berkshire"],[]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.str',chars: "wireless back-end input"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "niches Home Loan Account",v: true},{k: "forecast",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $dateFromParts: {isoWeekYear: { $ceil: 19810 },hour: { $ln: '$obj.obj.num' },minute: { $size: [[]] },millisecond: { $mod: ['$obj.obj.num',67530] }} },format: "%%-%w-%z-%H",timezone: "Etc/GMT+10",onNull: { $substr: ["Road",0,13] }} }],60895] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',27511,{ $pow: ['$obj.num','$obj.num'] },61220],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"vertical"],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $month: { $millesecond: { $hour: { $dayOfWeek: { $year: { $dayOfYear: { $dayOfWeek: { $second: { $dateFromString: {dateString: "2018-09-06T18:09:22.530Z",format: "%j-%w-%G-%Z-%G-%j-%%-%M-%Y",timezone: "Turkey",onNull: '$obj.obj.str'} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $millesecond: { $hour: { $week: { $isoDayOfWeek: { $isoWeekYear: { $second: { $toDate: { $filter: {input: ['$str',{ $substr: ["Object-based Stravenue",18,8] }],as: 'percy',cond: true} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $substrCP: ["silver Leone 1080p",19,9] },6,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Buckinghamshire Fresh",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Avon Concrete","compressing"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[36856],55849] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',7,16] }, _id: 0}}],

        [{$project: {a: { $range: [7,8,5] }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfMonth: { $dayOfWeek: { $dayOfYear: { $second: { $hour: { $dateFromString: {dateString: "2018-09-06T06:43:11.882Z",onError: { $filter: {input: ["demand-driven Borders Sleek",{ $rtrim: {input: '$str',chars: { $toLower: '$obj.str' }} }],as: 'kelley',cond: { $in: [{ $arrayElemAt: [['$num',77403,71203],{ $size: [["Drive indexing Checking Account",'$obj.obj.obj.str',{ $toUpper: '$obj.str' },"payment Granite Savings Account"]] }] },{ $zip: {inputs: [[],[{ $toString: { $arrayToObject: [[[],['$obj.num'],['$obj.obj.str',{ $trim: { input: "Licensed Fresh Soap port Web" } },'$obj.obj.obj.str'],[]]] } },{ $substr: ['$obj.obj.obj.str',16,2] }],[]],useLongestLength: true} }] }} },onNull: { $substrBytes: ["application feed",10,16] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $second: { $toDate: { $arrayToObject: [[{k: "customized collaboration reinvent",v: 37673}]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "multi-state Bahamas",v: '$obj.obj.obj.num'},{k: "interfaces",v: true}]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T15:50:56.231Z",timezone: "US/Pacific",onNull: { $objectToArray: '$obj.obj.obj' }} } },timezone: "America/Cancun",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toUpper: "Coordinator Home Loan Account Lead" } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $month: { $dateToString: {date: { $dateToString: {date: '$obj.date',timezone: "Europe/Podgorica"} },format: "%j-%L-%Y-%z-%U-%z-%u-%V-%z-%U-%H"} } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',20,5] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',8,6] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Human Saint Kitts and Nevis card",{ $toUpper: { $toString: { $trim: { input: { $substr: ["Rustic",10,18] } } } } }],14991] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'herta',cond: { $lt: [{ $dateFromParts: {isoWeekYear: { $cmp: [{ $arrayElemAt: [[80094],15179] },{ $arrayToObject: [[{k: "Analyst application executive",v: true}]] }] },isoWeek: { $log10: '$$herta' },isoDayOfWeek: { $subtract: [28619,'$$herta'] },minute: { $exp: '$$herta' },millisecond: { $trunc: 43937 },timezone: "Australia/Perth"} },{ $dateToString: {date: new Date("2018-09-06T15:30:28.204Z"),format: "%d-%H-%z-%G-%S",onNull: "dynamic digital coherent"} }] }} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T15:25:56.529Z",timezone: "Etc/GMT+11",onNull: { $concat: ['$obj.obj.str'] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[94761],['$obj.str'],['$obj.obj.num',57386],[{ $ltrim: { input: '$str' } },"infrastructure",'$obj.obj.num']],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Alabama Specialist generating",v: '$num'},{k: "Shirt",v: true}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.num',45994,'$obj.obj.num'],cond: true} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[62870],[]],defaults: [80782]} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $second: { $isoDayOfWeek: { $dayOfWeek: { $dayOfYear: { $year: { $hour: { $isoWeekYear: { $dateToParts: {date: { $dateToString: {date: new Date("2018-09-06T18:17:29.214Z"),format: "%d-%L-%S-%H-%u-%H-%u-%Y-%z-%j-%Z-%j",timezone: "Pacific/Fakaofo",onNull: { $arrayToObject: [[{k: "XML compressing North Carolina",v: false}]] }} },iso8601: false} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str',"withdrawal",{ $toLower: '$str' },"New Jersey Gloves Buckinghamshire"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Consultant Music withdrawal",v: false}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toString: { $arrayToObject: [[["invoice users"],[],[{ $multiply: [] }]]] } }],[35883],['$str',{ $trim: {input: { $substr: ['$obj.str',13,17] },chars: "Iowa"} }],[],[]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',12,20] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $dayOfMonth: { $toDate: { $range: [15,3,11] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[55793,'$obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],54493] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',30143],97640] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["composite white Savings Account",20,10] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Lilangeni Cotton",v: 85700},{k: "Solutions Colorado",v: new Date("2018-09-06T08:39:19.212Z")}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrCP: [{ $ltrim: {input: "Rustic",chars: "Small Cotton Chips grid-enabled Handcrafted"} },9,13] },'$obj.obj.obj.str',"benchmark fuchsia"],as: 'antwon',cond: { $in: [{ $arrayToObject: [[{k: "hack",v: new Date("2018-09-06T19:30:51.037Z")}]] },{ $concatArrays: [[{ $trim: { input: '$obj.obj.obj.str' } },"virtual Buckinghamshire"],[{ $concat: [] },'$$antwon'],[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[56544,65282],[{ $toString: { $range: [0,18] } },'$obj.str',{ $substr: ["South Dakota Nebraska AI",4,7] }],["eco-centric compressing"],[],["haptic ADP"]]] }, _id: 0}}],

        [{$project: {a: { $second: { $dateToParts: {date: { $hour: { $dateToString: { date: '$obj.obj.obj.date' } } },timezone: "Pacific/Easter"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: ['$obj.obj.str',8,13] },"Florida"],[],[],[{ $rtrim: {input: "intranet Analyst Grass-roots",chars: '$obj.str'} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $toDate: { $arrayToObject: [[['$str'],["Credit Card Account virtual dot-com"],[{ $toLower: '$obj.obj.obj.str' },"pink Bedfordshire visualize"],[]]] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "back up Pitcairn Islands Shirt",v: new Date("2018-09-06T14:39:53.598Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[71210,'$obj.obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T01:17:53.522Z"),format: "%U-%%-%H-%V-%Z-%M-%U-%Z-%L-%m",timezone: "America/Argentina/Buenos_Aires"} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: new Date("2018-09-05T22:16:10.761Z") }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'alexander',in: { $multiply: [17619] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $isoWeek: { $dayOfWeek: { $dayOfYear: { $dateToParts: {date: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $objectToArray: '$obj' },{ $objectToArray: '$obj' }] },isoDayOfWeek: { $multiply: ['$obj.obj.obj.num','$obj.obj.obj.num'] },hour: { $add: [] },second: { $log10: 25866 },timezone: "America/Mazatlan"} } },iso8601: true} } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],[68212,'$num']] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: ["Technician Frozen Fiji",19,10] }],['$obj.obj.obj.num'],[],['$str',{ $toUpper: "Designer Practical Frozen Pizza" },{ $toString: { $map: {input: [90218,'$obj.obj.num',90296,{ $abs: 26117 }],as: 'garrick',in: { $size: [[true]] }} } },'$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $year: { $isoDayOfWeek: { $dateToString: { date: '$obj.obj.date' } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $month: { $dayOfMonth: { $dayOfYear: { $isoWeek: { $dayOfWeek: { $second: { $millesecond: { $dateFromParts: { isoWeekYear: { $add: [] } } } } } } } } } },format: "%L-%M-%d-%G-%M-%V-%m-%z-%d-%G-%%-%d",timezone: "Asia/Vladivostok"} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[1949,'$obj.num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $map: {input: [{ $trim: { input: { $dateToString: {date: new Date("2018-09-06T06:15:08.340Z"),format: "%m-%L-%Y-%Y-%V-%M",timezone: "Atlantic/St_Helena"} } } },'$obj.str'],as: 'vada',in: { $pow: [53614,'$obj.num'] }} } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeek: { $millesecond: { $minute: { $dateFromString: {dateString: "2018-09-06T09:17:57.454Z",format: "%j-%%-%U-%M-%L",onError: { $substr: ["Cuba world-class haptic",12,8] },onNull: "Guarani Drive superstructure"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],87819] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',16,9] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: { $dateFromParts: {year: { $exp: '$num' },hour: { $log: ['$obj.num',30064] },second: { $log: ['$obj.obj.obj.num',5166] }} } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateToString: {date: new Date("2018-09-06T16:33:04.636Z"),format: "%G-%U-%%-%M",timezone: "America/Indiana/Winamac"} },timezone: "Antarctica/Casey",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["functionalities XML e-markets",12,20] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',{ $ltrim: {input: "Paraguay",chars: '$obj.obj.str'} }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [2,18] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[32831,82984],['$obj.obj.obj.num'],["recontextualize"]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[]] } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "purple leverage",v: '$obj.num'},{k: "neural backing up Hat",v: "Highway"}]] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],58802] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"Pizza Program"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [18,16,6] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],{ $log10: 94178 }] } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toUpper: { $toLower: '$obj.obj.obj.str' } },20,9] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num',44524],['$str']]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[91027,'$obj.obj.obj.num',50338,'$num'],['$str'],['$obj.num'],[],['$str',"Sleek Plastic Sausages payment pink",{ $rtrim: { input: { $toString: { $arrayElemAt: [[],35013] } } } }]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',17,10] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["empowering Handmade",{ $substr: [{ $ltrim: {input: { $substrBytes: ['$obj.obj.obj.str',18,15] },chars: '$str'} },13,9] },"Planner Eritrea Handcrafted Granite Pizza",'$obj.obj.obj.str'],34490] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substr: ['$obj.obj.obj.str',10,2] } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Steel",'$obj.obj.str'],cond: { $in: [{ $arrayElemAt: [[5601,4986,'$$this'],{ $ceil: 32689 }] },{ $concatArrays: [[],[],["Avon mint green"],['$str']] }] }} }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T02:36:03.386Z",timezone: "America/Indiana/Petersburg",onError: { $arrayElemAt: [['$num'],'$obj.obj.num'] },onNull: { $concatArrays: [[{ $toUpper: "Concrete Bosnia and Herzegovina" },'$obj.str'],["Architect",true,new Date("2018-09-06T14:48:34.437Z")],[],[]] }} }, _id: 0}}],

        [{$project: {a: { $concat: ["revolutionary"] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfMonth: { $isoWeekYear: { $month: { $toDate: { $rtrim: {input: "Direct Synergistic",chars: { $substrCP: ['$obj.obj.obj.str',15,19] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],53285] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Burg Alaska",v: 16706}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',16,19] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toUpper: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $toString: { $filter: {input: [],cond: { $gt: [{ $arrayToObject: [[[62180],['$obj.num',{ $trunc: 82992 },'$num']]] },{ $arrayElemAt: [['$obj.num',{ $indexOfArray: [{ $range: [20,18,14] },{ $dateFromParts: {isoWeekYear: { $log: [29297,62592] },second: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $map: {input: [],in: { $cmp: [{ $toLower: '$obj.obj.str' },{ $concat: ["transmitter Fresh withdrawal"] }] }} }] },timezone: "Asia/Sakhalin"} },6] }],{ $log10: '$obj.obj.obj.num' }] }] }} } } }],66237] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[38264],['$obj.obj.str',{ $substr: ["Health Nepal fault-tolerant",15,20] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.str',10,9] },'$str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["aggregate ivory applications"],['$num',89430,'$obj.num'],[],[],[71418]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],88694] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toUpper: '$str' }],[16188],[],['$obj.obj.obj.num','$obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str','$obj.obj.str'],as: 'roosevelt',in: { $size: [[]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],51069] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateToParts: {date: { $week: { $millesecond: { $second: { $year: { $dayOfMonth: { $second: { $hour: { $dayOfYear: { $isoWeek: { $dateFromParts: {isoWeekYear: { $exp: 85713 },isoWeek: { $log: ['$num','$obj.num'] },minute: { $sqrt: '$num' },millisecond: 61872} } } } } } } } } } },iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "Handcrafted Frozen Hat blue" },{ $toUpper: '$obj.obj.obj.str' }],49504] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeek: { $dayOfWeek: { $dayOfMonth: { $toDate: { $dateToString: { date: { $dateFromParts: {year: { $sqrt: '$obj.num' },month: { $size: [['$str',{ $trim: { input: "Corporate transmitting Tactics" } }]] },day: { $cmp: [{ $millesecond: { $dateFromString: {dateString: "2018-09-05T23:24:44.001Z",format: "%m-%Y-%H-%j-%u-%Y-%z-%U-%Z-%G-%j",timezone: "America/Regina",onNull: { $dateFromString: {dateString: "2018-09-06T19:29:52.914Z",format: "%V-%Z-%j-%m-%m-%L-%Z-%G-%U-%S-%Z",timezone: "America/Rosario",onNull: { $substrCP: ['$obj.obj.str',4,16] }} }} } },{ $map: {input: ['$obj.obj.str'],as: 'ayana',in: { $abs: '$obj.num' }} }] },second: { $pow: [93073,83825] },millisecond: '$obj.obj.num',timezone: "Etc/GMT+2"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $mod: ['$obj.num',85545] },isoDayOfWeek: { $floor: { $floor: 49315 } },hour: { $add: ['$obj.num','$obj.num','$obj.obj.obj.num'] },timezone: "Pacific/Auckland"} },timezone: "America/Ojinaga",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeekYear: { $isoWeek: { $hour: { $year: { $minute: { $toDate: { $arrayElemAt: [[],5566] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["withdrawal Assistant"]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "parsing Money Market Account",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Table Practical cyan",v: '$date'},{k: "protocol Grocery connecting",v: new Date("2018-09-06T04:04:21.125Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[64549],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Reverse-engineered copy Personal Loan Account",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toUpper: "South Carolina" },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: new Date("2018-09-06T19:54:59.797Z") }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "District",v: { $dateFromParts: {isoWeekYear: { $trunc: '$obj.obj.num' },second: { $mod: ['$obj.obj.num',23474] },millisecond: { $size: [["program SMTP"]] },timezone: "Asia/Qatar"} }},{k: "lavender Wooden encompassing",v: "Drives"}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Movies Plastic" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],57878] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $concat: [{ $substrBytes: ["Forward",9,0] },'$obj.obj.str','$obj.str'] }],cond: { $or: ["knowledge base Towels"] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Agent Congolese Franc",{ $trim: { input: { $dateToString: {date: '$obj.obj.date',format: "%w-%G-%M-%m-%H-%V-%L-%Y-%H",timezone: "Pacific/Wallis",onNull: '$obj.str'} } } }],[{ $substrCP: ['$obj.obj.str',13,1] },false],["robust"],[{ $toUpper: '$obj.obj.str' },"Computers Heights",{ $rtrim: {input: "backing up utilize",chars: { $toUpper: "Pa'anga program Swiss Franc" }} }],[34926,'$num']]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $second: { $year: { $isoWeek: { $dayOfMonth: { $month: { $minute: { $millesecond: { $isoDayOfWeek: { $isoDayOfWeek: { $week: { $isoWeek: { $dateFromParts: {isoWeekYear: { $abs: '$obj.num' },isoWeek: { $pow: [19568,1582] },hour: { $size: [['$str']] },millisecond: { $exp: '$num' }} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.str'],['$obj.num'],["Frozen extend mint green","online Accountability",{ $toLower: { $ltrim: { input: '$str' } } },"Toys Wisconsin",{ $toString: { $toString: { $arrayToObject: [[[]]] } } }],[new Date("2018-09-05T20:21:15.554Z")],[],["payment Practical Frozen Tuna Cotton"]],defaults: [[{ date: new Date("2018-09-06T19:38:16.681Z") },74883,"Metal superstructure",false]]} }, _id: 0}}],

        [{$project: {a: { $second: { $year: { $dayOfMonth: { $isoDayOfWeek: { $isoWeek: { $toDate: { $arrayToObject: [[[{ $dateToString: { date: '$obj.obj.obj.date' } }],['$obj.obj.str',{ $trim: {input: "Auto Loan Account Forward morph",chars: '$str'} },{ $concat: ["demand-driven Robust Buckinghamshire",'$obj.obj.str'] }],[],[89446],[]]] } } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$str',"backing up Intuitive"],['$num'],["Industrial Burgs infomediaries"],['$obj.obj.str',{ $toLower: { $dateToString: {date: new Date("2018-09-06T04:52:20.192Z"),format: "%G-%u-%H-%Y-%z-%m-%Z-%Z-%Y-%U",timezone: "Eire"} } }]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromParts: {isoWeekYear: { $sqrt: '$obj.obj.num' },isoWeek: { $trunc: 71286 },isoDayOfWeek: { $trunc: '$obj.obj.obj.num' },minute: { $abs: 6859 },second: { $ln: 30918 },timezone: "America/Nome"} } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $rtrim: { input: "users Internal Cheese" } }],[]] }, _id: 0}}],

        [{$project: {a: { $range: [20,9] }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $dateFromParts: {year: { $divide: [28196,'$obj.obj.obj.num'] },hour: { $sqrt: '$obj.obj.obj.num' },timezone: "Antarctica/Palmer"} } } }, _id: 0}}],

        [{$project: {a: { $range: [17,11] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[47922,'$obj.obj.obj.num',96910],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Iceland bypassing Dynamic",{ $substr: [{ $toLower: "paradigms" },3,11] }],as: 'orland',cond: { $and: [] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[80400],[{ $substrCP: ['$obj.obj.obj.str',12,2] }],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str','$obj.obj.str'],[],['$obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',onNull: "Central Triple-buffered"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Metrics index","Mobility applications Investment Account",'$obj.str'],44484] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "circuit",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["24/7 bypass turquoise",0,2] },'$obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toString: { $arrayToObject: [[['$str',"compelling withdrawal copying"],["evolve"]]] } },19,14] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T12:14:31.316Z"),timezone: "Asia/Jerusalem",onNull: { $objectToArray: '$obj.obj' }} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $second: { $week: { $isoWeek: { $millesecond: { $isoWeek: { $isoWeekYear: { $hour: { $isoWeekYear: { $millesecond: { $millesecond: { $dateToParts: {date: { $isoDayOfWeek: { $dayOfYear: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Europe/Podgorica"} } } },timezone: "America/Monterrey"} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromParts: {year: { $subtract: [22691,44702] },month: { $mod: ['$obj.obj.obj.num','$obj.obj.obj.num'] },hour: '$obj.num',minute: { $multiply: [] },timezone: "Africa/Abidjan"} } }, _id: 0}}],

        [{$project: {a: { $minute: { $week: { $dayOfYear: { $isoWeekYear: { $dayOfYear: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T01:28:19.495Z",format: "%M-%G-%L-%S-%j-%Z-%u-%U-%M-%L",onError: { $reverseArray: [["reciprocal auxiliary",'$obj.obj.str',"Distributed Streamlined"]] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],99198] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeek: { $isoWeekYear: { $hour: { $minute: { $minute: { $hour: { $month: { $dayOfWeek: { $isoWeekYear: { $dayOfYear: { $week: { $dateToString: { date: new Date("2018-09-05T23:56:17.979Z") } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],24494] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Balanced Vanuatu Regional",v: { $week: { $dateToParts: {date: { $year: '$obj.obj.date' },iso8601: true} } }}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfYear: { $isoWeek: { $dateToParts: {date: { $dayOfMonth: { $hour: { $toDate: { $arrayElemAt: [[],'$obj.obj.obj.num'] } } } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.obj.obj.num'],19333] } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.obj.str',"Small matrix"],[],[false,"digital Cambridgeshire Refined Steel Computer",false,{ $dayOfMonth: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T00:33:29.187Z",format: "%d-%U-%H-%u-%U-%M-%S-%Y",timezone: "America/Toronto",onError: { $arrayElemAt: [[{ $ltrim: { input: { $substrCP: ['$str',1,13] } } }],15273] },onNull: '$obj.obj.str'} },iso8601: false} } }],[{ $toLower: '$obj.str' },"Uruguay integrate back-end"]],useLongestLength: false,defaults: [true]} }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-05T21:09:43.603Z"),format: "%L-%M-%j-%j-%j-%w-%j-%w-%z-%d-%d-%j",timezone: "Etc/GMT-5",onNull: "Denmark"} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromParts: {isoWeekYear: { $pow: [94355,'$obj.obj.obj.num'] },timezone: "America/Los_Angeles"} } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $concat: ["Slovakia (Slovak Republic)",'$obj.obj.str'] },{ $trim: { input: { $substr: ['$str',17,8] } } },"Credit Card Account"],[],['$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfMonth: { $dayOfWeek: { $isoWeek: { $dateToParts: { date: { $dayOfMonth: { $isoWeekYear: { $week: { $dateFromParts: {isoWeekYear: { $size: [["Ranch compress"]] },isoWeek: { $ceil: 38675 },hour: { $pow: ['$obj.obj.num','$num'] },minute: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $range: [17,0] },11] },millisecond: { $mod: [{ $exp: 76471 },'$obj.num'] },timezone: "Asia/Baku"} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T15:11:45.990Z",format: "%Z-%m-%%-%u-%M",timezone: "Canada/Yukon",onError: { $filter: {input: ["reboot Kentucky Engineer"],as: 'otho',cond: { $and: [] }} }} }, _id: 0}}],

        [{$project: {a: { $month: { $minute: { $dateFromParts: {isoWeekYear: { $trunc: '$obj.obj.num' },isoWeek: { $add: [] },isoDayOfWeek: { $abs: '$obj.num' },minute: { $indexOfArray: [{ $range: [2,13,19] },{ $arrayToObject: [[[{ $toUpper: '$obj.obj.obj.str' }],[{ $cmp: ['$obj.obj.obj.date',{ $arrayElemAt: [['$obj.num'],82899] }] },'$obj.num','$obj.obj.num'],[]]] },20] },second: { $log: [80793,90705] },millisecond: { $cmp: [{ $substr: [{ $rtrim: { input: { $trim: { input: "solution programming" } } } },19,10] },{ $arrayElemAt: [['$obj.obj.date',true,'$obj.str','$obj.str'],40858] }] },timezone: "America/St_Lucia"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toString: { $arrayToObject: [[{k: "Movies National",v: '$obj.obj.str'}]] } },{ $ltrim: { input: "Practical" } }],['$num',54128],['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $minute: new Date("2018-09-06T18:53:31.550Z") }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num',65005,'$obj.obj.num'],as: 'colby',in: { $exp: 99078 }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toUpper: '$str' },3,8] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"Clothing Lead Chief",'$obj.obj.str',"Chicken"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Assimilated",v: { $indexOfArray: [{ $zip: {inputs: [[]],defaults: [{}]} },{ $isoDayOfWeek: { $dayOfWeek: { $dayOfWeek: { $dateFromParts: {year: { $subtract: [7727,61128] },month: { $pow: ['$obj.obj.num','$obj.num'] },day: { $ln: 68956 },minute: '$num',millisecond: { $log: ['$obj.obj.obj.num','$obj.obj.obj.num'] },timezone: "America/Panama"} } } } },14] }}]] }, _id: 0}}],

        [{$project: {a: { $year: { $isoWeek: { $dateFromParts: {year: { $size: [[]] },month: { $add: [] },hour: { $divide: ['$obj.obj.num','$obj.num'] },second: { $add: [] },millisecond: { $log: [{ $abs: 3709 },'$obj.obj.obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Delaware Turnpike"],in: { $indexOfArray: [{ $range: [15,11,4] },{ $isoWeekYear: { $isoWeek: { $toDate: { $substrBytes: [{ $rtrim: {input: '$obj.str',chars: '$obj.obj.obj.str'} },13,19] } } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $dateToString: { date: { $dateFromString: {dateString: "2018-09-06T13:19:38.149Z",format: "%m-%Z-%m-%H-%U-%Z-%Z-%Z",timezone: "America/Eirunepe",onError: { $arrayElemAt: [[],34929] },onNull: { $hour: { $isoWeekYear: { $week: { $toDate: { $arrayElemAt: [[],{ $sqrt: '$obj.obj.obj.num' }] } } } } }} } } }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $year: { $dayOfWeek: { $isoDayOfWeek: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T11:16:20.357Z",timezone: "America/Louisville",onError: { $zip: {inputs: [[],["convergence Customer-focused"],[{ $rtrim: {input: '$obj.obj.obj.str',chars: "Bahamian Dollar plum"} },'$obj.obj.str']],useLongestLength: true} },onNull: "repurpose redefine Route"} } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: true,defaults: [true,new Date("2018-09-05T20:20:30.505Z"),["parsing"]]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[14854],'$num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[[{ $rtrim: { input: "Saint Martin" } },"Integration e-business"],[],[],[],[48240,'$num'],[]]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Developer sky blue optical",v: 25715}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Credit Card Account platforms back up"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Trace supply-chains",0,4] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[33084],[{ $substrBytes: ['$obj.str',20,10] }],[],['$str',"Alabama Vista withdrawal","Creative deposit"]]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T07:52:50.328Z",timezone: "America/Denver",onNull: { $toUpper: "synthesizing backing up" }} } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $divide: [8657,'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromString: {dateString: "2018-09-06T05:31:33.177Z",format: "%V-%H-%G-%Z-%H-%m-%m"} } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["explicit Forks relationships",4,15] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfWeek: { $minute: { $isoWeek: { $dateToString: {date: { $millesecond: { $toDate: { $dateToString: { date: '$date' } } } },format: "%H-%j-%u-%d-%u-%G-%u-%G-%u",timezone: "Antarctica/DumontDUrville",onNull: "Investment Account whiteboard firewall"} } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Fields Texas" } }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $trim: {input: { $substrBytes: ["deposit XSS Virginia",9,3] },chars: { $substrCP: ["Ergonomic Borders",1,4] }} }],in: { $exp: 33217 }} }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toString: { $range: [3,13] } },11,18] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.str'],["Corporate Avon","invoice metrics"]]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Central" }, _id: 0}}],

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
