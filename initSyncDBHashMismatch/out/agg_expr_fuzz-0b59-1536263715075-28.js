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
        return coll.insert({_id: 17482,str: "Savings Account",num: 75909,date: new Date("2018-09-06T00:50:02.348Z"),array: [new Date("2018-09-06T01:59:53.882Z"),{_id: 17483,str: "explicit feed Avon",date: new Date("2018-09-06T18:19:10.268Z"),array: [57566,"Concrete primary","Practical virtual"],obj: {}},new Date("2018-09-06T03:57:06.801Z"),76004,[],[],new Date("2018-09-06T09:05:35.597Z"),42413,{_id: 17484,str: "Customer-focused compress",num: 65236,date: new Date("2018-09-06T13:33:11.814Z"),array: ["RSS connect Savings Account",new Date("2018-09-06T07:18:20.049Z")],obj: {_id: 17485,num: 2694,date: new Date("2018-09-06T03:45:57.695Z"),obj: {}}},{_id: 17486,str: "SDD Intranet",array: [88660,new Date("2018-09-06T16:08:26.863Z"),"Buckinghamshire",[],"Enhanced Awesome"]}],obj: {_id: 17487,num: 50098,obj: {_id: 17488,str: "grey disintermediate optimizing",num: 11141,date: new Date("2018-09-06T04:25:45.192Z"),array: ["Islands Rustic","Liberia black Auto Loan Account"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17489,str: "parsing maximized",num: 65058,date: new Date("2018-09-06T11:13:22.319Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17490,num: 65290,date: new Date("2018-09-06T10:47:14.478Z"),array: ["Kentucky haptic Dynamic",new Date("2018-09-06T01:43:07.344Z"),new Date("2018-09-05T22:17:26.586Z"),new Date("2018-09-06T15:06:23.793Z"),79788,{_id: 17491,str: "bifurcated Checking Account",num: 80565,date: new Date("2018-09-06T19:28:25.784Z"),array: []},68651,[],[new Date("2018-09-06T19:43:58.066Z"),"Berkshire Beauty Saint Vincent and the Grenadines"]],obj: {_id: 17492,str: "Personal Loan Account Ameliorated",num: 96144,date: new Date("2018-09-06T10:24:58.299Z"),array: [{_id: 17493,str: "rich Open-architected deposit",date: new Date("2018-09-06T04:47:15.827Z"),obj: {}}],obj: {_id: 17494,str: "Product SMTP",num: 43532,obj: {_id: 17495,str: "Awesome Plastic Car Incredible Money Market Account",num: 93299,date: new Date("2018-09-05T20:40:37.308Z"),array: [{_id: 17496,num: 93418,date: new Date("2018-09-06T15:21:53.272Z"),obj: {}},{_id: 17497,array: []},new Date("2018-09-05T22:47:00.412Z"),"Practical Wooden Soap empower withdrawal",91111,"reciprocal District driver"],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 17498,str: "dedicated alarm",num: 71208,date: new Date("2018-09-06T10:07:58.423Z"),obj: {_id: 17499,str: "open-source",num: 9652,array: [],obj: {_id: 17500,str: "4th generation",num: 4641,date: new Date("2018-09-05T23:57:13.264Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17501,str: "logistical",num: 5644,date: new Date("2018-09-06T19:05:16.587Z"),array: ["program",new Date("2018-09-06T15:56:29.158Z"),68568,80674,new Date("2018-09-06T14:32:47.674Z"),"eco-centric",[],2861,"payment",75557,new Date("2018-09-06T01:47:47.848Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17502,str: "holistic",num: 19228,date: new Date("2018-09-06T19:52:44.855Z"),array: ["Wooden",new Date("2018-09-06T13:41:44.764Z"),39207,new Date("2018-09-06T18:00:10.147Z"),new Date("2018-09-05T22:51:54.032Z")],obj: {_id: 17503,str: "reinvent",num: 22111,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17504,str: "functionalities convergence",num: 93719,date: new Date("2018-09-06T12:59:03.069Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17505,str: "incubate",num: 24258,date: new Date("2018-09-06T05:30:17.897Z"),array: [5112,{_id: 17506,str: "Strategist deposit Rustic Concrete Bike",num: 81130,date: new Date("2018-09-06T11:47:54.550Z"),obj: {}},"Quality initiatives Cambridgeshire","Buckinghamshire",new Date("2018-09-06T00:40:43.484Z"),new Date("2018-09-06T02:11:39.107Z"),93547,34842,"Forint Extension Frozen",new Date("2018-09-06T06:24:06.519Z"),{_id: 17507,str: "Awesome Incredible",date: new Date("2018-09-06T19:33:20.579Z"),array: [[],[]]},83541],obj: {_id: 17508,num: 67464,date: new Date("2018-09-06T16:35:23.766Z"),obj: {_id: 17509,array: [63709,new Date("2018-09-06T15:05:08.662Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17510,str: "exuding Pizza",num: 83579,date: new Date("2018-09-05T21:29:24.417Z"),array: [new Date("2018-09-05T20:49:39.647Z"),10994,"connecting Home Loan Account",new Date("2018-09-05T23:27:18.233Z"),71404,{_id: 17511,str: "Savings Account Digitized Multi-lateral",num: 31074,date: new Date("2018-09-06T00:41:52.996Z"),obj: {}},new Date("2018-09-06T18:17:36.877Z"),"Soft Towels",31828,"Global Representative Progressive",4411,"Cambridgeshire",{_id: 17512,date: new Date("2018-09-06T16:24:21.510Z"),array: [new Date("2018-09-05T20:25:43.376Z"),[],"driver Mozambique Extended",{_id: 17513,num: 28995,date: new Date("2018-09-06T03:00:46.934Z"),obj: {}}],obj: {_id: 17514,str: "Intranet PNG grid-enabled",num: 32306,array: [],obj: {_id: 17515,str: "matrix",num: 23820,date: new Date("2018-09-06T15:22:13.080Z"),array: []}}}],obj: {_id: 17516,str: "monitor Small Fresh Fish",date: new Date("2018-09-06T11:09:17.469Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17517,str: "auxiliary calculating modular",date: new Date("2018-09-06T15:16:05.017Z"),array: [],obj: {_id: 17518,str: "indexing Forward Georgia",num: 52158,date: new Date("2018-09-05T22:15:30.215Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17519,str: "Triple-buffered Cambridgeshire quantify",num: 24743,date: new Date("2018-09-06T06:01:18.195Z"),array: [],obj: {_id: 17520,str: "dynamic Chair Corporate",date: new Date("2018-09-06T01:16:54.006Z"),array: [[new Date("2018-09-06T12:39:59.364Z"),"knowledge user orange Mandatory",33365],"Metal","holistic deposit New Jersey",8383,{_id: 17521,str: "azure Small Concrete Bacon",num: 44213,date: new Date("2018-09-06T03:56:45.845Z"),array: [new Date("2018-09-06T15:21:46.431Z")],obj: {_id: 17522,str: "Alabama knowledge user program",num: 36884,array: ["Granite Sleek Concrete Chips Fantastic Wooden Shirt",[],new Date("2018-09-06T09:34:14.395Z"),81985],obj: {}}},new Date("2018-09-06T01:22:13.251Z"),97988,[],{_id: 17523,num: 92971,obj: {_id: 17524,str: "Concrete",date: new Date("2018-09-06T04:37:00.466Z"),array: [],obj: {}}},"violet",new Date("2018-09-06T18:13:35.527Z"),46092],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17525,str: "Kids",num: 22642,date: new Date("2018-09-06T18:10:52.522Z"),array: [],obj: {_id: 17526,str: "multi-byte Open-architected Mobility",num: 72495,date: new Date("2018-09-06T17:08:21.819Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17527,str: "transmitter",num: 93084,date: new Date("2018-09-06T06:39:31.653Z"),array: [[],"project revolutionize",99396,new Date("2018-09-06T00:52:24.278Z"),new Date("2018-09-06T18:11:30.831Z"),5197,"Innovative Outdoors",74884,"Rubber navigating Isle",{_id: 17528,str: "open-source",num: 64010,date: new Date("2018-09-06T17:49:11.140Z"),array: [],obj: {_id: 17529,num: 89627,date: new Date("2018-09-06T03:04:13.308Z"),array: ["quantify",{_id: 17530,str: "schemas synergistic Graphical User Interface",array: [new Date("2018-09-05T23:18:56.220Z"),"generate Music Shoes",22082],obj: {}}]}}]});
    },

    function(coll) {
        return coll.insert({_id: 17531,str: "Iraqi Dinar",num: 40381,date: new Date("2018-09-06T00:12:17.966Z"),array: ["Human Officer","Incredible","Inverse Fish",new Date("2018-09-06T12:17:43.873Z"),70071,20570,"Ergonomic invoice",new Date("2018-09-06T04:07:25.757Z"),"content-based generating EXE"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17532,num: 15560,date: new Date("2018-09-06T17:56:47.126Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17533,str: "calculate",num: 81230,date: new Date("2018-09-06T09:28:25.548Z"),array: [],obj: {_id: 17534,str: "bandwidth Tasty",num: 44180,date: new Date("2018-09-06T15:55:09.188Z"),array: [],obj: {_id: 17535,str: "SSL Court Towels",num: 50135,date: new Date("2018-09-05T23:17:15.713Z"),array: [new Date("2018-09-06T02:04:48.559Z"),new Date("2018-09-06T09:22:43.153Z"),"interactive",new Date("2018-09-06T17:23:23.287Z"),{_id: 17536,obj: {_id: 17537,str: "3rd generation",date: new Date("2018-09-05T22:29:37.342Z"),array: []}},"Phased Books override",53939,new Date("2018-09-06T14:53:31.745Z"),"Communications stable",[59199],{_id: 17538,str: "Granite Virtual Mobility",num: 5729,date: new Date("2018-09-06T02:40:19.975Z"),array: [new Date("2018-09-05T23:52:51.781Z"),65069,7847],obj: {}},[],{_id: 17539,str: "paradigms portals ivory",num: 41574,date: new Date("2018-09-06T19:29:10.479Z"),array: [],obj: {_id: 17540,str: "RAM Toys",num: 73133}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 17541,str: "Assurance monitor",num: 26616,date: new Date("2018-09-06T04:41:29.186Z"),array: [new Date("2018-09-06T17:07:21.977Z"),new Date("2018-09-06T07:29:24.811Z"),"Auto Loan Account Handmade Upgradable","actuating AI Optimization",37262,[],"copying",17916,[],16430,{_id: 17542,str: "Fresh",num: 85228,date: new Date("2018-09-06T10:34:48.733Z"),array: [new Date("2018-09-06T09:24:50.003Z")],obj: {}},"Central",62951],obj: {_id: 17543,str: "Ergonomic",num: 11335,date: new Date("2018-09-06T04:47:43.045Z"),obj: {_id: 17544,array: [],obj: {_id: 17545,str: "benchmark Borders Multi-layered",date: new Date("2018-09-06T01:21:49.631Z"),array: [[]]}}}});
    },

    function(coll) {
        return coll.insert({_id: 17546,str: "Money Market Account programming",date: new Date("2018-09-06T13:02:19.735Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17547,str: "content-based maximized Baby",num: 18733,date: new Date("2018-09-06T06:30:04.165Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17548,str: "action-items",num: 18841,date: new Date("2018-09-06T17:52:03.671Z"),array: [[14724],48967,new Date("2018-09-05T23:23:31.116Z"),new Date("2018-09-06T14:12:42.966Z"),new Date("2018-09-05T22:27:42.348Z"),"matrix Savings Account HDD",new Date("2018-09-06T09:54:07.379Z"),"Handcrafted one-to-one Granite","Graphic Interface",[],90236,{_id: 17549,str: "Computers",date: new Date("2018-09-06T05:52:32.838Z"),array: [{_id: 17550,str: "Up-sized withdrawal Borders",num: 25481,date: new Date("2018-09-06T11:07:48.792Z"),array: [],obj: {}},[],"Borders XSS Representative"],obj: {_id: 17551,num: 17239,array: [46104],obj: {_id: 17552,num: 7684,date: new Date("2018-09-06T07:12:22.119Z"),array: []}}},new Date("2018-09-06T14:38:52.428Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17553,str: "PCI multi-byte best-of-breed",num: 64323,date: new Date("2018-09-06T14:40:44.148Z"),array: [],obj: {_id: 17554,str: "Associate Handmade Cotton Gloves",array: [7995,38913]}});
    },

    function(coll) {
        return coll.insert({_id: 17555,str: "conglomeration Re-contextualized North Carolina",num: 61343,date: new Date("2018-09-06T03:11:38.358Z"),array: [],obj: {_id: 17556,str: "Fresh Rwanda Franc",date: new Date("2018-09-06T03:48:49.906Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17557,str: "Personal Loan Account Associate Shoes",num: 59640,date: new Date("2018-09-05T21:48:01.124Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17558,str: "Illinois",num: 55716,date: new Date("2018-09-06T05:53:10.560Z"),array: [new Date("2018-09-05T20:19:42.591Z"),new Date("2018-09-06T11:38:21.129Z"),"Home Loan Account",[],"Tools compressing",20376,["Concrete Orchestrator",56136,9771,[]],new Date("2018-09-06T13:51:14.261Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17559,str: "Buckinghamshire",num: 89192,date: new Date("2018-09-06T15:36:25.374Z"),array: ["engage",13649,[],11130,"capacitor Computers Granite",{_id: 17560,str: "New Hampshire Home Loan Account",num: 70448,date: new Date("2018-09-05T22:11:19.089Z"),array: [new Date("2018-09-06T12:35:38.749Z")],obj: {_id: 17561,str: "Intelligent Concrete Sausages virtual Liechtenstein",num: 7761,date: new Date("2018-09-05T22:52:18.967Z"),array: [],obj: {_id: 17562,str: "calculate Forward",array: ["Table granular program",new Date("2018-09-05T22:56:45.651Z"),24116],obj: {}}}},new Date("2018-09-06T09:36:06.671Z"),"application model","radical Team-oriented Berkshire",new Date("2018-09-06T18:19:27.362Z"),new Date("2018-09-05T21:20:44.389Z"),[],{_id: 17563,str: "array navigate enable",num: 23322,date: new Date("2018-09-06T09:40:58.133Z"),array: [86535,{_id: 17564,num: 36148,array: [[],new Date("2018-09-06T06:26:34.394Z"),85074],obj: {_id: 17565,num: 91927,date: new Date("2018-09-06T10:10:46.521Z")}}]},"primary Computer"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17566,str: "Awesome Plastic Cheese",num: 99366,date: new Date("2018-09-06T05:39:36.606Z"),array: [new Date("2018-09-06T04:07:15.240Z"),"European Unit of Account 17(E.U.A.-17)",new Date("2018-09-06T19:06:13.303Z"),[],new Date("2018-09-06T07:26:54.474Z"),"Checking Account Soft",84309,new Date("2018-09-06T03:58:22.160Z"),61163,"Beauty contingency"],obj: {_id: 17567,str: "Clothing Curve Shirt",num: 12324,date: new Date("2018-09-06T11:05:34.006Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17568,str: "THX Generic",num: 39610,date: new Date("2018-09-05T21:19:31.132Z"),array: [],obj: {_id: 17569,str: "Credit Card Account",num: 55671,array: [96692,new Date("2018-09-06T15:59:47.930Z"),21109,"Future Croatian Kuna","haptic","Peso Uruguayo Uruguay Peso en Unidades Indexadas Lao People's Democratic Republic Kwacha",{_id: 17570,str: "Organized value-added",num: 19883,date: new Date("2018-09-06T03:41:56.905Z")},36534,85493,new Date("2018-09-06T03:24:03.950Z"),new Date("2018-09-06T07:59:18.235Z")],obj: {_id: 17571,num: 54758,date: new Date("2018-09-05T22:35:43.774Z"),array: [80697,new Date("2018-09-06T14:53:34.533Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17572,str: "payment",date: new Date("2018-09-06T14:34:08.045Z"),array: [24675,{_id: 17573,str: "hacking Principal",num: 79825,date: new Date("2018-09-06T13:11:06.091Z"),array: [],obj: {}},"wireless Synergized customized",new Date("2018-09-06T00:31:50.066Z"),"Designer transitional",new Date("2018-09-06T15:03:40.680Z"),85471,[],["implement",new Date("2018-09-06T05:41:03.396Z"),96482,{_id: 17574,str: "deposit",num: 17136,date: new Date("2018-09-06T01:09:59.192Z"),array: ["fuchsia best-of-breed"],obj: {_id: 17575,num: 16674,array: []}},new Date("2018-09-06T03:27:41.268Z")],"Codes specifically reserved for testing purposes",{_id: 17576,str: "Customer",num: 87414,date: new Date("2018-09-06T12:45:10.519Z"),array: [],obj: {_id: 17577,num: 48299,date: new Date("2018-09-06T18:31:32.350Z"),obj: {}}},{_id: 17578,str: "Port contextually-based",array: ["SMTP Roads circuit",[],25499],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 17579,str: "iterate intermediate",num: 58570,date: new Date("2018-09-06T05:41:38.904Z"),array: ["Credit Card Account",new Date("2018-09-06T02:12:31.576Z"),new Date("2018-09-06T06:00:15.757Z"),new Date("2018-09-06T18:05:36.238Z"),[],26281,{_id: 17580,str: "Engineer calculate cross-platform",num: 40379,date: new Date("2018-09-05T22:18:49.701Z"),array: [],obj: {}},"Bike mission-critical",new Date("2018-09-06T17:09:36.601Z"),[19595,60809,"Unbranded Plastic Cheese synthesizing"],75083],obj: {_id: 17581,num: 23747,date: new Date("2018-09-06T18:31:15.206Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17582,str: "Gorgeous Granite Soap",num: 20586,date: new Date("2018-09-06T00:46:39.080Z"),array: [],obj: {_id: 17583,str: "Direct Gorgeous",num: 98748,date: new Date("2018-09-06T00:20:25.162Z"),array: [42228,{_id: 17584,num: 17506,date: new Date("2018-09-06T15:19:18.326Z"),array: [45666,"Avon",["Liaison withdrawal Avon","contextually-based"]],obj: {}},new Date("2018-09-06T16:04:24.947Z"),new Date("2018-09-05T21:42:36.806Z"),{_id: 17585,str: "Savings Account",num: 71874,obj: {}},8178,{_id: 17586,num: 11558,date: new Date("2018-09-05T21:32:09.077Z"),array: []},30488,{_id: 17587,date: new Date("2018-09-06T03:15:54.681Z"),obj: {_id: 17588,str: "Tasty Cotton Fish Designer Practical",date: new Date("2018-09-06T04:51:07.413Z"),array: [],obj: {}}},79879,"Louisiana",new Date("2018-09-06T15:28:50.417Z"),new Date("2018-09-06T03:18:38.304Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 17589,str: "FTP cutting-edge Comoro Franc",num: 90605,date: new Date("2018-09-06T07:00:32.350Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17590,str: "seamless",num: 57377,date: new Date("2018-09-06T06:58:06.831Z"),array: [7545,"Quality Fish invoice",new Date("2018-09-06T08:11:52.671Z"),"Guyana Dollar Berkshire Fresh",new Date("2018-09-06T00:44:38.597Z"),[],{_id: 17591,str: "Dynamic Books",num: 19702,array: [],obj: {}},"New Hampshire Savings Account",[],84114,10105,new Date("2018-09-06T07:42:52.330Z"),["distributed Liaison Licensed",84116]]});
    },

    function(coll) {
        return coll.insert({_id: 17592,str: "asynchronous Manager Granite",num: 77515,obj: {_id: 17593,str: "Practical maximize card",num: 57625,date: new Date("2018-09-06T10:43:41.720Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17594,str: "clear-thinking",date: new Date("2018-09-05T21:29:31.529Z"),array: [],obj: {_id: 17595,num: 60325,date: new Date("2018-09-06T10:11:47.107Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17596,str: "Sweden",num: 7659,array: [{_id: 17597,str: "wireless",num: 68325,date: new Date("2018-09-06T11:10:39.866Z"),array: [],obj: {_id: 17598,str: "Virginia",num: 90620,date: new Date("2018-09-06T00:31:21.304Z"),obj: {_id: 17599,str: "Credit Card Account Qatar navigating",num: 17324,date: new Date("2018-09-06T04:42:13.938Z"),array: []}}},new Date("2018-09-06T01:35:34.140Z"),34221,4055,"Devolved Handcrafted Plastic Car Bedfordshire",new Date("2018-09-05T20:08:57.961Z"),"Center",4087,[],40383]});
    },

    function(coll) {
        return coll.insert({_id: 17600,str: "Home transition",num: 53853,date: new Date("2018-09-06T15:32:19.732Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17601,str: "Virginia",num: 45752,date: new Date("2018-09-06T13:21:33.439Z"),array: [new Date("2018-09-06T19:00:38.003Z"),74736,"Buckinghamshire matrix","encryption panel",new Date("2018-09-06T17:16:11.263Z"),[],new Date("2018-09-06T02:13:11.930Z"),"transmitter Tuna Progressive","envisioneer Garden",57327,40899,{_id: 17602,str: "incentivize Administrator Money Market Account",date: new Date("2018-09-06T04:32:29.089Z"),array: [97605],obj: {}},"Swedish Krona 1080p Chief"],obj: {_id: 17603,date: new Date("2018-09-06T07:15:43.069Z"),array: [5108,"Administrator Distributed"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17604,str: "zero tolerance moderator",num: 68607,date: new Date("2018-09-06T09:43:27.048Z"),array: ["lavender Tasty ROI",63624,{_id: 17605,str: "Handmade Knolls Cambridgeshire",num: 39853,date: new Date("2018-09-05T21:01:29.103Z"),array: [new Date("2018-09-06T00:13:40.334Z"),new Date("2018-09-06T03:35:07.220Z"),"withdrawal","Brand"],obj: {}},[],12704,67988,new Date("2018-09-06T07:41:17.495Z"),new Date("2018-09-06T16:29:25.017Z"),{_id: 17606,str: "SAS Pa'anga",num: 61905,date: new Date("2018-09-06T01:13:17.387Z"),obj: {_id: 17607,num: 65853,array: [],obj: {_id: 17608,str: "mindshare North Carolina",num: 40595,date: new Date("2018-09-06T12:30:45.457Z"),array: [],obj: {}}}},{_id: 17609,str: "schemas Virginia Small",num: 634,date: new Date("2018-09-05T23:28:44.648Z")},[],"withdrawal back-end responsive"]});
    },

    function(coll) {
        return coll.insert({_id: 17610,str: "withdrawal Buckinghamshire productivity",num: 78828,date: new Date("2018-09-06T03:27:39.461Z"),array: [],obj: {_id: 17611,str: "PNG firewall",num: 6830,date: new Date("2018-09-06T06:31:32.453Z"),array: [60320,"Lodge",new Date("2018-09-06T09:38:54.878Z"),"Associate discrete",new Date("2018-09-06T16:49:50.514Z"),new Date("2018-09-05T20:05:33.955Z"),{_id: 17612,num: 84983,date: new Date("2018-09-06T01:37:55.352Z"),obj: {_id: 17613,str: "Direct",date: new Date("2018-09-06T18:31:27.531Z"),array: [47938,"Sports",{_id: 17614,str: "FTP compressing azure",num: 49038,obj: {}},45153,[],97162]}}]}});
    },

    function(coll) {
        return coll.insert({_id: 17615,str: "bus",num: 3930,date: new Date("2018-09-06T10:06:42.317Z"),array: ["Minnesota Auto Loan Account RSS",new Date("2018-09-05T22:53:14.159Z"),"hack Sharable port",75448,new Date("2018-09-06T16:53:32.636Z"),"Fish",new Date("2018-09-06T02:06:19.118Z"),{_id: 17616,str: "Visionary Yuan Renminbi",num: 80038,date: new Date("2018-09-06T02:49:41.762Z"),array: [61225,new Date("2018-09-06T16:22:35.418Z")]},[],"Awesome Wooden Ball exploit",new Date("2018-09-06T00:24:29.188Z"),new Date("2018-09-06T16:48:51.628Z"),{_id: 17617,str: "applications Ball Up-sized",num: 20888,obj: {_id: 17618,str: "Intelligent Frozen Table",date: new Date("2018-09-06T04:03:30.663Z"),array: [],obj: {}}}],obj: {_id: 17619,str: "vertical",date: new Date("2018-09-05T23:11:34.390Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17620,str: "granular silver Incredible",num: 45004,date: new Date("2018-09-06T02:33:17.434Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17621,str: "Plastic",num: 21600,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17622,str: "Tools Global",date: new Date("2018-09-06T04:02:52.462Z"),array: [new Date("2018-09-06T00:27:28.075Z"),57499,21824,"Configuration olive",new Date("2018-09-06T04:25:58.695Z"),"Advanced Generic Avon",{_id: 17623,str: "Graphic Interface Developer Cape",num: 90356,date: new Date("2018-09-06T11:56:27.848Z"),array: [],obj: {}},122,"forecast Saint Martin synthesizing","capacitor",[new Date("2018-09-06T01:53:26.525Z"),{_id: 17624,str: "Metal",num: 789,date: new Date("2018-09-06T07:42:55.362Z"),array: []},[],7405],"Iowa"],obj: {_id: 17625,num: 70763,date: new Date("2018-09-05T22:36:48.451Z"),array: [54797]}});
    },

    function(coll) {
        return coll.insert({_id: 17626,str: "Western Sahara indexing",num: 43941,date: new Date("2018-09-05T20:10:36.130Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17627,str: "algorithm Investment Account Guadeloupe",date: new Date("2018-09-06T03:34:10.592Z"),array: [],obj: {_id: 17628,str: "Checking Account Intelligent Cayman Islands Dollar",num: 74904,date: new Date("2018-09-06T10:52:03.963Z"),array: [new Date("2018-09-06T11:00:30.299Z"),"Progressive hack transmitting",56553,new Date("2018-09-06T16:37:50.504Z"),["SCSI"],"Developer Table",854,"Customer Soft",92156,new Date("2018-09-06T17:28:52.583Z"),[{_id: 17629,str: "copy well-modulated cross-platform",num: 6195,date: new Date("2018-09-06T16:38:44.884Z"),array: [],obj: {}},["Virtual Incredible Wooden Chair"],new Date("2018-09-06T06:19:21.696Z"),26612],new Date("2018-09-06T06:40:20.223Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 17630,str: "Brand",num: 59023,date: new Date("2018-09-06T01:23:55.348Z"),array: [],obj: {_id: 17631,str: "connect THX",date: new Date("2018-09-05T21:39:34.821Z"),array: [],obj: {_id: 17632,str: "partnerships",num: 59606,date: new Date("2018-09-06T08:41:57.439Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 17633,num: 87403,date: new Date("2018-09-06T01:42:38.158Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17634,str: "ADP Illinois",num: 85731,date: new Date("2018-09-06T00:30:21.542Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17635,num: 49222,date: new Date("2018-09-06T14:06:00.227Z"),array: [54662,"Awesome Rubber Chicken Consultant hardware",new Date("2018-09-06T19:53:40.409Z"),new Date("2018-09-06T13:05:01.192Z"),[],78049,["Tactics"],new Date("2018-09-06T11:22:27.991Z"),new Date("2018-09-06T05:37:43.799Z"),{_id: 17636,str: "interface",array: ["IB"],obj: {}},"synthesize",57034,{_id: 17637,str: "Granite withdrawal",num: 92257,date: new Date("2018-09-06T01:42:31.981Z"),obj: {_id: 17638,str: "Streets Infrastructure reinvent",num: 44396,date: new Date("2018-09-06T19:11:07.236Z"),array: [],obj: {}}}],obj: {_id: 17639,str: "PCI South Carolina knowledge user",array: [new Date("2018-09-05T21:32:14.844Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 17640,str: "District Optimization Cotton",num: 15330,date: new Date("2018-09-06T06:09:17.729Z"),array: [new Date("2018-09-06T11:03:50.956Z"),35664,"Generic Concrete Keyboard",18492,[],new Date("2018-09-06T13:58:17.427Z"),"methodology",new Date("2018-09-06T00:16:12.329Z"),{_id: 17641,str: "olive heuristic local area network",num: 80302,date: new Date("2018-09-06T19:48:21.037Z"),array: [],obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17642,str: "sensor Managed",num: 44682,date: new Date("2018-09-06T02:04:26.355Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17643,str: "virtual Tunisia",num: 42409,date: new Date("2018-09-06T11:45:37.721Z"),array: [new Date("2018-09-06T13:13:49.826Z"),70895,50195,new Date("2018-09-06T00:58:19.481Z"),new Date("2018-09-05T20:29:04.022Z"),[],"International",40330,new Date("2018-09-06T08:29:49.131Z"),"payment",39867],obj: {_id: 17644,str: "SMS viral",num: 76762,date: new Date("2018-09-06T12:28:06.901Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17645,str: "magnetic Human",num: 57394,date: new Date("2018-09-06T11:56:20.878Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17646,str: "Checking Account Mouse",date: new Date("2018-09-05T20:45:22.254Z"),array: [new Date("2018-09-06T07:56:22.481Z"),63651,51167,"Berkshire",[],"parsing",{_id: 17647,str: "program",array: ["Ohio",new Date("2018-09-06T07:57:37.495Z"),new Date("2018-09-06T17:38:01.881Z"),"Human RSS","help-desk"],obj: {}},96229]});
    },

    function(coll) {
        return coll.insert({_id: 17648,str: "primary",num: 65391,date: new Date("2018-09-06T13:27:09.354Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17649,str: "Manors virtual",num: 90245,date: new Date("2018-09-06T16:14:28.995Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17650,str: "quantifying",date: new Date("2018-09-06T10:01:44.415Z"),array: [],obj: {_id: 17651,str: "Executive stable Customer",num: 14290,date: new Date("2018-09-06T04:38:09.883Z"),array: ["United States of America",new Date("2018-09-05T22:14:36.374Z"),{_id: 17652,str: "Plastic",num: 42247,obj: {_id: 17653,str: "SDD Gorgeous Frozen Table data-warehouse",num: 83432,date: new Date("2018-09-06T03:34:25.366Z")}},new Date("2018-09-06T15:42:49.571Z"),[],[30856],"Missouri",new Date("2018-09-06T03:40:04.401Z"),"high-level Infrastructure Health",25722,79285],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17654,str: "Metal Refined Concrete Tuna Texas",num: 68319,date: new Date("2018-09-06T17:16:52.426Z"),array: [new Date("2018-09-06T18:20:55.335Z"),9339,"alarm",new Date("2018-09-06T08:12:43.379Z"),"database","Outdoors Sports Awesome Soft Keyboard",71438,{_id: 17655,str: "connecting Drive indigo",num: 676,array: [["Manager",new Date("2018-09-06T08:02:58.305Z"),new Date("2018-09-06T14:36:14.697Z")],45094],obj: {}},new Date("2018-09-06T10:23:11.519Z"),[],55905,34591]});
    },

    function(coll) {
        return coll.insert({_id: 17656,num: 80082,array: [new Date("2018-09-05T21:59:11.763Z"),74705,new Date("2018-09-06T16:38:28.035Z"),29655,[],37891,[],"Bacon panel Paradigm",new Date("2018-09-06T05:10:37.878Z"),new Date("2018-09-06T12:15:02.297Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17657,str: "Solutions Handcrafted Steel Bike",num: 44476,date: new Date("2018-09-06T03:06:25.055Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17658,str: "Forward indexing River",num: 59299,date: new Date("2018-09-06T05:06:04.664Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17659,str: "hack bypassing",num: 40924,date: new Date("2018-09-05T21:12:54.166Z"),obj: {_id: 17660,str: "Incredible Steel",num: 31249,date: new Date("2018-09-06T17:25:58.651Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17661,str: "Tasty Frozen Fish",num: 85045,date: new Date("2018-09-06T17:55:22.246Z"),array: ["Rustic integrate",85174,new Date("2018-09-06T15:54:36.935Z"),{_id: 17662,str: "heuristic New Mexico circuit",num: 60928,date: new Date("2018-09-05T21:55:27.685Z"),array: [],obj: {}},[],44551,"black",20308,new Date("2018-09-06T01:35:25.836Z")],obj: {_id: 17663,str: "utilisation",date: new Date("2018-09-05T20:20:32.545Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17664,str: "seamless Common",num: 92502,date: new Date("2018-09-06T18:57:39.364Z"),array: [new Date("2018-09-06T18:44:29.790Z"),59455,"engineer Kina",{_id: 17665,str: "best-of-breed Saudi Riyal",num: 9149,date: new Date("2018-09-06T13:32:56.680Z"),array: [],obj: {}},"5th generation Generic Rubber Table Auto Loan Account",new Date("2018-09-06T03:34:21.876Z"),76209,"Checking Account supply-chains",{_id: 17666,num: 95944,obj: {}},97905,[11407,"Home Loan Account Clothing calculate",[]]],obj: {_id: 17667,str: "lime methodologies",date: new Date("2018-09-06T08:47:44.401Z"),array: [],obj: {_id: 17668,str: "Tasty Cotton Ball Kids",num: 96865,date: new Date("2018-09-06T13:59:29.009Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 17669,num: 15019,date: new Date("2018-09-06T07:31:52.155Z"),array: [],obj: {_id: 17670,str: "Metal Seychelles Business-focused",date: new Date("2018-09-05T20:53:41.238Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17671,str: "North Carolina Response",num: 22342,date: new Date("2018-09-06T17:35:00.393Z"),array: [["Exclusive"],new Date("2018-09-06T04:23:03.965Z"),{_id: 17672,str: "Cambridgeshire",date: new Date("2018-09-06T07:31:52.962Z"),array: [],obj: {}},60722,56567,"Faroe Islands driver",[],{_id: 17673,str: "De-engineered Generic Metal Bike Principal",num: 21140,date: new Date("2018-09-06T12:05:55.416Z"),array: [{_id: 17674,str: "Lights Bedfordshire",date: new Date("2018-09-06T10:37:34.229Z"),array: [],obj: {}},new Date("2018-09-05T23:45:06.271Z"),"schemas withdrawal Credit Card Account",new Date("2018-09-05T23:18:50.896Z")]},5635,new Date("2018-09-06T03:08:01.659Z"),new Date("2018-09-06T00:24:43.726Z"),"Assurance Bike SQL","Home aggregate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17675,str: "salmon violet Implementation",date: new Date("2018-09-05T21:30:11.322Z"),array: ["Kazakhstan",new Date("2018-09-06T18:09:27.807Z"),new Date("2018-09-06T07:43:11.690Z"),new Date("2018-09-06T15:26:32.567Z"),[],18760,[],"feed","product Summit",84510,{_id: 17676,num: 52459,date: new Date("2018-09-05T21:17:14.141Z"),array: [32482],obj: {_id: 17677,str: "data-warehouse needs-based",num: 8817,date: new Date("2018-09-06T09:47:34.658Z"),array: [],obj: {_id: 17678,str: "Morocco Handmade Plastic Bacon",num: 72632,date: new Date("2018-09-06T10:46:08.121Z"),obj: {}}}},10707,42008,"Gorgeous Fresh Ball Global Small Soft Fish",new Date("2018-09-06T08:40:43.274Z")],obj: {_id: 17679,str: "Beauty array",num: 11686,array: [],obj: {_id: 17680,str: "backing up forecast Rand Namibia Dollar",num: 1223,date: new Date("2018-09-05T21:35:00.424Z"),array: ["enable"]}}});
    },

    function(coll) {
        return coll.insert({_id: 17681,num: 37735,date: new Date("2018-09-06T06:32:32.527Z"),array: ["invoice Gorgeous CSS",new Date("2018-09-06T00:28:55.270Z"),67880,"Louisiana Reverse-engineered Direct",new Date("2018-09-06T10:28:45.455Z"),47215,[],88604,"architect",92832,{_id: 17682,str: "International Dynamic matrix",obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 17683,str: "CSS Incredible Granite Ball connect",num: 19577,date: new Date("2018-09-06T05:31:42.817Z"),array: [],obj: {_id: 17684,str: "architect",num: 25812,date: new Date("2018-09-05T20:34:33.847Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17685,str: "Fully-configurable program",num: 78361,array: [],obj: {_id: 17686,str: "plum",date: new Date("2018-09-05T21:42:13.007Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17687,num: 86628,date: new Date("2018-09-05T20:51:20.189Z"),array: [new Date("2018-09-06T11:46:54.795Z"),90126,[],"interface PNG",{_id: 17688,str: "Horizontal Branding",num: 35773,date: new Date("2018-09-05T22:51:22.541Z"),array: [],obj: {}},"transmit",4157,30075,new Date("2018-09-06T02:15:53.050Z"),new Date("2018-09-06T07:38:00.280Z"),72085],obj: {_id: 17689,str: "withdrawal Frozen Dobra",num: 51331,date: new Date("2018-09-06T12:43:07.326Z"),array: [[],"transmitting"],obj: {_id: 17690,str: "Versatile Belarus",date: new Date("2018-09-06T19:46:48.191Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17691,str: "Accountability",num: 44876,date: new Date("2018-09-06T03:33:05.928Z"),array: [new Date("2018-09-06T19:54:20.801Z"),new Date("2018-09-05T22:59:09.199Z"),76949,new Date("2018-09-05T20:44:03.356Z"),"solid state Rial Omani",new Date("2018-09-06T09:49:46.598Z"),["encompassing parsing","Functionality",["overriding Borders"],3763,"architect intuitive",47821,{_id: 17692,str: "Frozen Tools",num: 71310,date: new Date("2018-09-06T04:29:04.981Z"),array: []},32839,new Date("2018-09-06T19:32:02.228Z")],69887,new Date("2018-09-06T04:20:53.054Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17693,str: "lavender Designer",num: 83749,date: new Date("2018-09-06T14:25:38.196Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17694,str: "array Salad",num: 27456,date: new Date("2018-09-05T22:25:54.943Z"),obj: {_id: 17695,str: "Industrial",date: new Date("2018-09-06T02:26:17.105Z"),array: [29517,7858,"brand",new Date("2018-09-06T02:14:25.520Z"),"Savings Account",[],new Date("2018-09-06T10:50:51.588Z"),87628,61405,"Sports Chicken Sharable",[new Date("2018-09-06T03:25:56.311Z"),new Date("2018-09-06T11:43:50.415Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17696,str: "teal lavender Avon",num: 26421,date: new Date("2018-09-05T20:25:43.361Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17697,str: "bleeding-edge",num: 42605,date: new Date("2018-09-06T18:27:51.075Z"),array: [],obj: {_id: 17698,str: "Rand e-business",num: 52729,date: new Date("2018-09-06T08:31:50.938Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17699,str: "bluetooth Nevada",num: 5200,date: new Date("2018-09-06T19:46:37.466Z"),array: [],obj: {_id: 17700,str: "interface dynamic Avon",num: 82456,date: new Date("2018-09-06T09:19:03.129Z"),array: [new Date("2018-09-05T23:20:37.512Z"),81869,"Frozen transition",32477,41706,new Date("2018-09-05T21:37:14.980Z"),49104],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17701,str: "Lao People's Democratic Republic sky blue",num: 80905,array: [new Date("2018-09-06T18:29:41.708Z"),new Date("2018-09-06T00:39:54.529Z"),61391,"Response Rustic Fresh Pants",{_id: 17702,str: "silver Research",date: new Date("2018-09-05T20:09:54.852Z"),array: [],obj: {_id: 17703,str: "architectures",num: 78394,date: new Date("2018-09-06T09:14:54.505Z"),array: [],obj: {}}},"Fantastic Fresh Cheese Papua New Guinea",new Date("2018-09-06T08:25:15.019Z"),new Date("2018-09-06T00:27:27.116Z"),[],94839,25377,new Date("2018-09-06T02:11:14.470Z"),"Cote d'Ivoire",[{_id: 17704,str: "Baby Balboa US Dollar",num: 33466,date: new Date("2018-09-06T02:39:00.253Z"),array: [],obj: {_id: 17705,str: "Central enable Lek",num: 303,date: new Date("2018-09-06T05:37:14.928Z"),array: ["Dynamic back-end revolutionize"],obj: {}}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17706,str: "Pula action-items Bedfordshire",num: 12698,date: new Date("2018-09-06T17:39:11.945Z"),array: [],obj: {_id: 17707,str: "Upgradable",num: 79304,date: new Date("2018-09-06T06:13:10.502Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17708,str: "leading-edge Brunei Dollar Lead",num: 38718,date: new Date("2018-09-06T05:32:32.165Z"),array: [94232,new Date("2018-09-06T04:40:16.347Z"),"Armenian Dram bypassing"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17709,str: "Intelligent",num: 69398,date: new Date("2018-09-06T08:17:51.553Z"),array: [],obj: {_id: 17710,str: "THX Salad Shirt",num: 80737,date: new Date("2018-09-06T09:16:44.000Z"),array: [89437,61940,"secured line",{_id: 17711,str: "bluetooth Industrial",num: 37717,date: new Date("2018-09-06T01:34:39.364Z"),array: [],obj: {_id: 17712,array: [new Date("2018-09-05T20:21:10.923Z"),"Wooden Buckinghamshire",new Date("2018-09-06T01:52:45.783Z"),"RAM Research"]}},66196,[],36552,"Direct",new Date("2018-09-06T07:35:18.335Z"),{_id: 17713,date: new Date("2018-09-06T05:33:44.367Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17714,str: "e-enable El Salvador Specialist",num: 23108,date: new Date("2018-09-06T05:03:18.312Z"),array: [],obj: {_id: 17715,num: 69383,date: new Date("2018-09-06T19:52:17.867Z"),array: [new Date("2018-09-05T20:49:23.904Z"),74321,new Date("2018-09-06T03:52:39.621Z"),"open-source",21371,"Avon Stravenue",{_id: 17716,str: "Global deposit bypassing",num: 64261,array: [new Date("2018-09-05T23:09:31.724Z"),12962,[],{_id: 17717,str: "Generic Metal Bacon",num: 21558,date: new Date("2018-09-06T06:15:04.610Z"),obj: {}},new Date("2018-09-06T15:30:14.679Z")],obj: {}},2626,new Date("2018-09-06T06:02:13.054Z"),[],"dynamic Tools","Libyan Arab Jamahiriya","deliverables Lead ROI"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17718,str: "Tuna",num: 89177,date: new Date("2018-09-06T15:19:07.041Z"),array: [76153,new Date("2018-09-06T05:02:59.312Z"),new Date("2018-09-06T19:17:37.757Z"),new Date("2018-09-06T07:25:33.361Z"),4491,"SMS","Direct Borders deposit","adapter"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17719,str: "Quality",num: 7386,date: new Date("2018-09-06T17:23:05.640Z"),array: ["invoice",new Date("2018-09-06T14:27:10.391Z"),"Arizona Corporate",39210,86042,[],"Incredible Fresh Bike",new Date("2018-09-06T11:48:00.281Z"),new Date("2018-09-05T23:08:38.802Z"),"web services",{_id: 17720,str: "synthesizing Global",num: 41614,date: new Date("2018-09-06T05:56:19.495Z"),array: [],obj: {_id: 17721,str: "Books program Light",date: new Date("2018-09-06T05:59:12.481Z"),array: [66493],obj: {}}},25885],obj: {_id: 17722,str: "Gorgeous Granite Chips",date: new Date("2018-09-06T03:46:11.950Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17723,str: "Turkish Lira Handcrafted",num: 4513,array: [[],"Fork redundant Persistent",new Date("2018-09-06T16:06:40.026Z"),79946,59978,new Date("2018-09-06T00:41:00.587Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17724,str: "Cambridgeshire",num: 75802,date: new Date("2018-09-05T23:35:04.537Z"),array: [new Date("2018-09-06T17:33:12.514Z"),"PCI",{_id: 17725,str: "Assistant Cambridgeshire",date: new Date("2018-09-06T18:33:06.394Z"),array: [],obj: {}},new Date("2018-09-06T17:09:55.397Z"),24269,"initiatives needs-based",11109,["seamless"],"auxiliary",new Date("2018-09-06T14:07:04.344Z"),"incremental SDD",[],new Date("2018-09-06T09:22:24.639Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17726,str: "reintermediate methodical",date: new Date("2018-09-06T16:17:31.071Z"),array: [],obj: {_id: 17727,str: "Multi-tiered Steel",num: 41722,date: new Date("2018-09-06T17:53:35.660Z"),array: [new Date("2018-09-06T19:49:27.070Z"),43997,"Consultant rich Solutions",new Date("2018-09-06T08:01:06.272Z"),90447,"Florida Supervisor Costa Rica",50792,new Date("2018-09-06T00:51:09.918Z"),"systems users","deposit Communications Argentina",21117,[{_id: 17728,str: "Tuna San Marino Savings Account",num: 69445,date: new Date("2018-09-05T20:12:24.127Z"),obj: {_id: 17729,str: "HDD",num: 73028,array: [new Date("2018-09-06T17:29:21.846Z"),new Date("2018-09-06T04:58:45.021Z")]}},38629],{_id: 17730,num: 52831,date: new Date("2018-09-06T18:37:00.133Z"),array: [],obj: {}},{_id: 17731,obj: {}},{_id: 17732,str: "mobile",num: 75055,array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17733,str: "bandwidth Field",num: 18807,date: new Date("2018-09-06T00:51:45.559Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17734,str: "Incredible bandwidth Fantastic Fresh Bacon",num: 53797,date: new Date("2018-09-06T03:03:27.249Z"),array: [],obj: {_id: 17735,str: "Car benchmark cyan",num: 27550,date: new Date("2018-09-06T15:02:59.664Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17736,num: 28289,date: new Date("2018-09-06T18:47:23.848Z"),array: [],obj: {_id: 17737,str: "Versatile 24 hour",num: 97699,date: new Date("2018-09-05T22:05:59.008Z"),array: [new Date("2018-09-06T13:08:50.160Z"),"Burkina Faso",79179,{_id: 17738,str: "Director",num: 77819,date: new Date("2018-09-06T00:50:59.686Z"),array: [],obj: {}},new Date("2018-09-06T11:15:49.662Z"),new Date("2018-09-05T20:52:18.587Z"),new Date("2018-09-06T14:37:41.013Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17739,str: "bleeding-edge aggregate teal",num: 42338,date: new Date("2018-09-05T22:07:01.101Z"),obj: {_id: 17740,str: "Auto Loan Account engineer Incredible",num: 75659,date: new Date("2018-09-06T02:15:10.933Z"),array: [84165,new Date("2018-09-06T07:23:11.218Z"),"Generic",14444,[],"Tuna next-generation artificial intelligence",["magenta Central",new Date("2018-09-06T05:30:05.262Z")],"Agent bypassing",{_id: 17741,str: "Home Loan Account strategic local area network",num: 67695,date: new Date("2018-09-05T21:45:47.446Z"),obj: {}},76859,new Date("2018-09-05T21:47:09.590Z")],obj: {_id: 17742,array: ["indexing methodologies",[44441],{_id: 17743,num: 60654,date: new Date("2018-09-06T08:55:17.105Z"),array: [7398],obj: {}},70464],obj: {_id: 17744,str: "neural Specialist Total",num: 78508,date: new Date("2018-09-05T22:08:47.504Z"),array: [],obj: {_id: 17745,str: "rich Liaison",date: new Date("2018-09-06T15:46:38.794Z")}}}}});
    },

    function(coll) {
        return coll.insert({_id: 17746,str: "Principal Kuwaiti Dinar",num: 52155,date: new Date("2018-09-06T08:05:42.711Z"),array: ["Shirt HDD",new Date("2018-09-06T14:09:30.378Z"),24862,new Date("2018-09-06T09:08:17.996Z"),"Generic Steel Tuna New Leu","Sausages Cambridgeshire",{_id: 17747,str: "Baby",num: 55329,date: new Date("2018-09-06T05:59:02.282Z"),array: [],obj: {_id: 17748,num: 77746,date: new Date("2018-09-06T19:48:33.432Z"),array: [],obj: {}}},[new Date("2018-09-06T11:00:31.826Z"),[new Date("2018-09-06T01:21:43.366Z"),20438,new Date("2018-09-06T10:51:40.239Z")],"info-mediaries Liaison"],[],14685,[{_id: 17749,str: "Architect whiteboard Taka",obj: {_id: 17750,str: "olive",num: 51531,date: new Date("2018-09-06T07:03:22.561Z"),array: [{_id: 17751,str: "Minnesota e-markets channels",array: [61851,new Date("2018-09-06T06:55:37.255Z")]}],obj: {}}}],new Date("2018-09-06T18:40:48.158Z")],obj: {_id: 17752,str: "Small Public-key multi-byte",num: 85047,date: new Date("2018-09-06T06:25:27.458Z")}});
    },

    function(coll) {
        return coll.insert({_id: 17753,str: "Grass-roots fresh-thinking",num: 66593,date: new Date("2018-09-06T18:51:07.782Z"),array: [80786,new Date("2018-09-06T12:29:56.622Z"),new Date("2018-09-06T14:49:42.834Z"),68719,{_id: 17754,str: "next generation Metal Investment Account",date: new Date("2018-09-06T01:13:34.271Z"),array: [],obj: {}},"multi-byte matrix orchestrate",[],new Date("2018-09-06T05:55:32.054Z"),16685],obj: {_id: 17755,num: 80313,date: new Date("2018-09-06T01:29:01.047Z"),array: [],obj: { _id: 17756 }}});
    },

    function(coll) {
        return coll.insert({_id: 17757,str: "hack",num: 44060,date: new Date("2018-09-06T11:03:47.609Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17758,num: 33899,date: new Date("2018-09-06T16:12:27.101Z"),array: [],obj: {_id: 17759,str: "Shoes technologies Senior",num: 23096,date: new Date("2018-09-06T16:12:09.363Z"),array: ["Industrial Buckinghamshire visualize",[new Date("2018-09-06T05:51:20.180Z"),71584],"Nakfa Fully-configurable mission-critical",18136,new Date("2018-09-05T22:14:36.383Z"),[],74905,"USB",{_id: 17760,str: "Ergonomic indexing",num: 67568,date: new Date("2018-09-06T09:36:14.393Z"),array: [],obj: {}},new Date("2018-09-05T20:02:43.637Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17761,str: "Lead Cheese",num: 85099,date: new Date("2018-09-06T17:48:09.546Z"),obj: {_id: 17762,str: "Keyboard payment magenta",date: new Date("2018-09-05T20:16:36.607Z"),array: [],obj: {_id: 17763,str: "Metal",num: 2241,date: new Date("2018-09-06T04:36:29.932Z"),array: ["SCSI Baby","Senegal Synchronised",75587,new Date("2018-09-06T16:22:29.060Z"),new Date("2018-09-06T14:45:24.043Z"),[74126,31007,new Date("2018-09-06T15:25:12.309Z"),{_id: 17764,str: "CSS Borders blue",num: 900,date: new Date("2018-09-06T18:55:10.341Z"),array: [],obj: {}},"multi-byte",[new Date("2018-09-05T22:05:15.092Z"),new Date("2018-09-06T05:25:34.325Z"),new Date("2018-09-06T09:40:22.959Z")]],{_id: 17765,num: 40601,array: []},49420]}}});
    },

    function(coll) {
        return coll.insert({_id: 17766,str: "JSON",num: 36313,date: new Date("2018-09-06T04:00:02.915Z"),array: ["index",{_id: 17767,str: "Executive",num: 28831,date: new Date("2018-09-06T11:53:07.423Z"),array: [],obj: {}},73678,"Savings Account toolset",79497,new Date("2018-09-06T11:32:05.035Z"),65011,"Money Market Account",new Date("2018-09-05T23:07:01.569Z"),new Date("2018-09-06T00:05:30.599Z"),new Date("2018-09-06T11:02:57.635Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17768,str: "Turkish Lira attitude",num: 97040,date: new Date("2018-09-06T19:26:38.408Z"),array: [],obj: {_id: 17769,date: new Date("2018-09-06T01:11:20.038Z"),array: [87259,new Date("2018-09-06T16:21:33.048Z"),"intangible Avon Handmade Soft Bacon","Licensed Rubber Fish brand",["redundant Home Loan Account"],new Date("2018-09-06T14:50:51.653Z"),"Money Market Account AGP",{_id: 17770,str: "Principal e-commerce online",num: 82992,date: new Date("2018-09-06T13:53:10.185Z"),array: [],obj: {}},82983,[],new Date("2018-09-06T12:42:21.748Z"),52433,{_id: 17771,str: "TCP",num: 75772,array: [[{_id: 17772,str: "Wells",num: 4604,date: new Date("2018-09-06T10:33:57.673Z")}],96321],obj: {_id: 17773,obj: {}}}],obj: {_id: 17774,str: "Iceland Krona Alley intermediate",num: 12763,array: ["object-oriented",new Date("2018-09-06T10:53:09.090Z"),{_id: 17775,str: "SQL",num: 64885,date: new Date("2018-09-06T04:01:56.820Z"),obj: {_id: 17776,num: 98137,date: new Date("2018-09-06T03:56:08.358Z")}},"models partnerships"]}}});
    },

    function(coll) {
        return coll.insert({_id: 17777,str: "array Sleek bypassing",num: 80679,date: new Date("2018-09-06T10:05:03.562Z"),array: [],obj: {_id: 17778,str: "Mills deposit",date: new Date("2018-09-06T07:37:24.241Z"),obj: {_id: 17779,str: "e-markets",num: 97369,date: new Date("2018-09-05T20:38:26.866Z"),array: [{_id: 17780,str: "mobile",num: 44033,array: [],obj: {}},9372,1545,new Date("2018-09-06T17:33:20.543Z"),90366,"integrated cutting-edge","Fresh",[new Date("2018-09-06T13:50:48.661Z"),"Total",new Date("2018-09-06T00:41:36.789Z"),[],[41362,{_id: 17781,str: "web-readiness Intelligent Concrete Gloves Heights",num: 80089,array: ["Gorgeous Concrete Mouse channels synergistic",new Date("2018-09-06T01:25:53.067Z")]}]],46018]}}});
    },

    function(coll) {
        return coll.insert({_id: 17782,str: "Investment Account",num: 70890,date: new Date("2018-09-06T10:13:09.857Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17783,str: "Money Market Account Stand-alone Bedfordshire",num: 52058,date: new Date("2018-09-06T04:14:02.298Z"),array: ["Cross-platform",43537,new Date("2018-09-06T04:27:05.872Z"),64719,16636,"Research system Central",{_id: 17784,str: "Awesome Ohio firewall",date: new Date("2018-09-06T08:43:47.488Z"),array: [[],{_id: 17785,num: 54644,obj: {}},"strategy",new Date("2018-09-06T11:34:12.447Z"),[new Date("2018-09-05T20:47:42.451Z"),"Avon Cotton"],52463,new Date("2018-09-06T15:40:20.101Z"),new Date("2018-09-06T06:29:19.803Z")],obj: {_id: 17786,str: "Frozen calculating transition",num: 10890,date: new Date("2018-09-05T23:45:47.515Z"),array: [],obj: {_id: 17787,str: "Credit Card Account Direct",array: [74526],obj: {}}}},{_id: 17788,str: "programming",num: 82635,date: new Date("2018-09-06T10:26:12.419Z"),array: []}],obj: {_id: 17789,num: 96718,date: new Date("2018-09-06T13:40:30.251Z")}});
    },

    function(coll) {
        return coll.insert({_id: 17790,str: "reboot Investment Account 24/7",num: 50102,date: new Date("2018-09-06T01:29:01.657Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17791,str: "orchid",num: 92673,date: new Date("2018-09-06T01:22:28.099Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17792,str: "Montana Legacy Virginia",num: 68373,date: new Date("2018-09-05T21:07:08.449Z"),array: [{_id: 17793,str: "transmitting Burgs",num: 86831,date: new Date("2018-09-06T05:29:39.436Z"),array: ["payment Turnpike"],obj: {_id: 17794,num: 15986,date: new Date("2018-09-06T01:09:53.334Z"),array: []}},new Date("2018-09-06T09:26:32.221Z"),54542,new Date("2018-09-06T07:10:01.534Z"),99911,["Music","Rustic extensible Zloty"],new Date("2018-09-06T14:45:29.892Z"),{_id: 17795,array: [],obj: {}},"parse",88558,[20225,new Date("2018-09-06T11:42:48.305Z")],[],39612,{_id: 17796,str: "invoice sensor Cloned",num: 60309,date: new Date("2018-09-05T19:55:47.685Z")}],obj: {_id: 17797,str: "Beauty Expressway Fresh",date: new Date("2018-09-06T12:44:44.937Z"),obj: {_id: 17798,num: 69806,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17799,str: "Seychelles Rupee Gorgeous Rubber Soap",num: 45624,date: new Date("2018-09-06T00:47:13.348Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17800,num: 41534,date: new Date("2018-09-06T02:52:06.973Z"),array: ["Hill Buckinghamshire","Polarised Group",new Date("2018-09-06T00:52:52.697Z"),new Date("2018-09-06T03:04:02.269Z"),324,10075,new Date("2018-09-06T14:48:43.478Z"),"modular Lesotho",44290,85886],obj: {_id: 17801,str: "payment invoice virtual",num: 67953,date: new Date("2018-09-06T14:25:31.172Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17802,str: "white",num: 27529,date: new Date("2018-09-06T03:46:19.897Z"),array: [],obj: {_id: 17803,str: "Networked portals Metrics",num: 84791,date: new Date("2018-09-06T17:33:02.583Z"),array: [9775,26360,new Date("2018-09-06T13:48:25.515Z"),"implement",new Date("2018-09-06T16:13:33.932Z"),[{_id: 17804,str: "Music schemas back up",num: 26479,date: new Date("2018-09-05T20:17:12.113Z"),array: [],obj: {}},"Cambridgeshire",[],"Mouse",{_id: 17805,num: 16222,date: new Date("2018-09-06T05:23:56.558Z"),array: [[],["backing up Product",3588,{_id: 17806,str: "Saint Barthelemy calculating Wooden",num: 27525,obj: {_id: 17807,date: new Date("2018-09-06T15:42:34.277Z")}}]],obj: {}}],new Date("2018-09-06T15:54:48.076Z"),new Date("2018-09-06T02:00:50.216Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 17808,str: "Electronics",num: 27723,date: new Date("2018-09-06T02:10:09.477Z"),array: [{_id: 17809,str: "Pre-emptive",num: 99552,array: []},"index functionalities Practical Metal Chair","Vista",[],new Date("2018-09-06T02:42:21.926Z"),"Grocery transmitting Savings Account",98994,new Date("2018-09-06T12:33:53.227Z"),23376,{_id: 17810,num: 33230,date: new Date("2018-09-06T15:48:47.021Z"),array: [new Date("2018-09-06T08:44:01.351Z")],obj: {_id: 17811,str: "withdrawal Checking Account Practical",date: new Date("2018-09-06T13:33:38.811Z"),obj: {}}},"Leone Enhanced",33573,new Date("2018-09-06T00:33:05.369Z"),new Date("2018-09-06T00:22:34.168Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17812,str: "Seamless Lock",num: 42432,date: new Date("2018-09-06T03:35:35.815Z"),array: [96216,87384,"green Usability Saint Martin",new Date("2018-09-05T23:40:53.636Z"),"Wooden","Refined Crest override",new Date("2018-09-06T01:07:42.219Z"),new Date("2018-09-06T12:41:05.561Z"),82371,"North Carolina Rustic Rubber Bacon",[],{_id: 17813,str: "Advanced",num: 71531,date: new Date("2018-09-06T08:53:54.988Z"),array: [],obj: {}}],obj: {_id: 17814,str: "microchip Cheese platforms",num: 60167,date: new Date("2018-09-06T16:42:42.208Z"),array: [{_id: 17815,str: "Configuration RAM",num: 97071,array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17816,str: "Intelligent communities Nauru",num: 61329,date: new Date("2018-09-06T07:28:33.696Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17817,str: "integrate Ergonomic Granite Car parallelism",num: 26678,date: new Date("2018-09-06T05:37:30.511Z"),array: [],obj: {_id: 17818,str: "Down-sized deposit",num: 26582,date: new Date("2018-09-06T00:08:00.590Z"),array: ["copy","SAS",{_id: 17819,str: "Associate Virginia e-commerce",date: new Date("2018-09-06T12:21:16.853Z"),array: []},95169,99709,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 17820,str: "synergistic Administrator monitor",num: 18458,date: new Date("2018-09-05T23:21:57.225Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17821,str: "virtual",num: 78510,date: new Date("2018-09-06T00:58:21.985Z"),array: [85259,"Home Loan Account",new Date("2018-09-06T06:09:12.501Z"),new Date("2018-09-06T07:56:23.271Z"),"scale Refined",[],{_id: 17822,str: "bottom-line National Handcrafted Rubber Pizza",date: new Date("2018-09-05T23:57:10.135Z"),array: [new Date("2018-09-06T14:32:42.935Z"),75931],obj: {_id: 17823,num: 58113,date: new Date("2018-09-06T06:57:51.332Z"),array: ["Integration generate"],obj: {}}},{_id: 17824,str: "Union Specialist",array: []},66830,"cyan deposit Solutions",{_id: 17825,num: 25505,date: new Date("2018-09-06T16:22:50.755Z")}],obj: {_id: 17826,str: "Handmade Soft Computer Corporate Shirt",date: new Date("2018-09-06T19:05:14.818Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17827,str: "Solutions Awesome quantifying",num: 73521,date: new Date("2018-09-06T07:24:51.600Z"),array: [],obj: {_id: 17828,str: "Cross-platform seamless",num: 71741,array: [],obj: {_id: 17829,str: "Handcrafted",num: 34115,date: new Date("2018-09-06T14:29:38.618Z"),array: [new Date("2018-09-06T11:49:50.805Z"),new Date("2018-09-06T08:48:03.026Z"),54953,47406,"Refined Rubber Chips Direct","Industrial Berkshire",13014,new Date("2018-09-06T03:34:48.050Z"),new Date("2018-09-06T01:48:41.630Z"),new Date("2018-09-06T06:50:42.846Z"),["violet multi-tasking",new Date("2018-09-06T08:15:59.199Z"),{_id: 17830,date: new Date("2018-09-06T17:09:44.659Z"),array: [[],61651,[]],obj: {}}],30962]}}});
    },

    function(coll) {
        return coll.insert({_id: 17831,str: "Crescent Strategist",num: 13008,date: new Date("2018-09-06T08:59:24.602Z"),array: [new Date("2018-09-05T23:28:57.928Z"),77205,80336,{_id: 17832,date: new Date("2018-09-06T05:57:54.516Z"),array: [],obj: {_id: 17833,str: "auxiliary",num: 45111,array: [new Date("2018-09-05T20:17:33.506Z"),new Date("2018-09-06T11:52:00.445Z"),"withdrawal quantify Rustic",[]],obj: {}}},"SCSI Shoes Coordinator",32495,new Date("2018-09-06T17:35:15.200Z"),new Date("2018-09-06T12:14:04.311Z"),90250],obj: {_id: 17834,str: "Producer web services Roads",num: 75620,date: new Date("2018-09-06T12:23:35.473Z")}});
    },

    function(coll) {
        return coll.insert({_id: 17835,str: "Keyboard",num: 10745,date: new Date("2018-09-06T12:46:19.083Z"),array: [],obj: {_id: 17836,date: new Date("2018-09-06T17:58:40.999Z"),array: ["copying leading-edge Planner",new Date("2018-09-05T22:25:10.409Z"),["Vermont service-desk out-of-the-box",32960,new Date("2018-09-05T22:17:32.997Z"),66836,"Distributed Kids"],69980,new Date("2018-09-06T13:28:08.089Z"),{_id: 17837,str: "connecting content-based Baby",num: 42007,date: new Date("2018-09-06T04:34:48.359Z"),array: [],obj: {_id: 17838,str: "Prairie Industrial invoice",num: 50471,obj: {}}},{_id: 17839,str: "override",date: new Date("2018-09-06T03:36:31.077Z")},[35591,{_id: 17840,num: 20393,date: new Date("2018-09-06T12:53:41.351Z"),array: [],obj: {}},[99217]],"synergize Plastic"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17841,str: "Russian Ruble Plastic Arkansas",num: 96104,date: new Date("2018-09-05T23:06:10.143Z"),array: [],obj: {_id: 17842,str: "cultivate Chilean Peso Unidades de fomento partnerships",num: 60332,date: new Date("2018-09-05T21:48:43.320Z"),array: ["complexity Home Loan Account Principal",{_id: 17843,str: "Metal Sausages Netherlands Antillian Guilder",num: 80990,date: new Date("2018-09-06T05:46:31.343Z"),array: [[{_id: 17844,array: [],obj: {_id: 17845,date: new Date("2018-09-06T19:13:09.678Z"),obj: {}}},30060,51983]]},new Date("2018-09-06T15:43:08.477Z"),"transform Infrastructure",new Date("2018-09-05T21:43:41.993Z"),[],new Date("2018-09-05T21:34:38.629Z"),"niches",11507,new Date("2018-09-06T03:29:32.445Z"),38156,[],"functionalities Self-enabling paradigm"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17846,str: "port Specialist ADP",num: 76181,array: [new Date("2018-09-06T12:21:17.118Z"),"Cambridgeshire Kids",{_id: 17847,str: "connecting Sleek Soft Pants eyeballs",num: 75842,date: new Date("2018-09-06T07:25:53.527Z"),array: []},[],"Research",{_id: 17848,str: "hacking Pants Small Concrete Towels",date: new Date("2018-09-06T13:41:10.772Z"),array: [],obj: {_id: 17849,str: "matrix reboot",num: 79017,date: new Date("2018-09-06T08:08:21.332Z"),array: [97933,"Iceland monetize navigate",56323,new Date("2018-09-06T07:57:16.001Z")],obj: {}}},new Date("2018-09-06T00:34:39.784Z"),new Date("2018-09-06T03:09:39.270Z"),77080,[[],"Gloves Music Program"]],obj: {_id: 17850,num: 38600}});
    },

    function(coll) {
        return coll.insert({_id: 17851,str: "PNG",num: 7579,date: new Date("2018-09-06T16:40:27.026Z"),array: [],obj: {_id: 17852,str: "bypassing asymmetric",num: 22179,date: new Date("2018-09-06T17:03:29.064Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17853,str: "quantify Antigua and Barbuda",num: 37023,date: new Date("2018-09-06T05:54:58.335Z"),array: [],obj: {_id: 17854,str: "Rand override",num: 70029,date: new Date("2018-09-05T22:54:47.981Z")}});
    },

    function(coll) {
        return coll.insert({_id: 17855,str: "e-business",num: 53898,date: new Date("2018-09-05T23:00:41.673Z"),array: [66028,new Date("2018-09-06T04:53:53.212Z"),new Date("2018-09-06T05:12:06.803Z"),39403,"Books repurpose",42899,95336,83298,{_id: 17856,num: 82569,date: new Date("2018-09-06T08:38:46.242Z"),array: ["online Industrial brand"],obj: {}},new Date("2018-09-06T11:08:15.188Z"),"Towels panel"]});
    },

    function(coll) {
        return coll.insert({_id: 17857,str: "Regional web-enabled SMTP",num: 8072,date: new Date("2018-09-06T15:30:28.451Z"),obj: {_id: 17858,str: "SDD",num: 83464,date: new Date("2018-09-05T21:10:35.669Z"),array: [],obj: {_id: 17859,num: 64599,date: new Date("2018-09-06T03:12:26.848Z"),array: [49719,[],"hacking Administrator",new Date("2018-09-06T11:04:20.589Z"),59226,"evolve scale Manager",5560,{_id: 17860,str: "Turkmenistan Automotive",array: [58552,new Date("2018-09-05T23:00:52.023Z"),["killer Mandatory",19059,"Incredible",{_id: 17861,str: "Saint Martin",num: 74712,date: new Date("2018-09-05T22:00:03.896Z"),obj: {}}],new Date("2018-09-05T21:46:20.513Z"),"copy Malaysia"],obj: {}},new Date("2018-09-06T02:54:38.794Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 17862,str: "Home overriding",num: 55680,date: new Date("2018-09-05T22:11:15.072Z"),array: ["Soap infomediaries",new Date("2018-09-05T21:16:36.704Z"),79780,16311,"Cyprus New York",{_id: 17863,str: "Rustic",num: 2324,date: new Date("2018-09-06T19:41:15.060Z"),array: [],obj: {_id: 17864,num: 41181,date: new Date("2018-09-06T04:25:17.205Z"),array: [new Date("2018-09-05T23:46:17.720Z"),73416,new Date("2018-09-06T01:31:36.398Z")],obj: {_id: 17865,str: "Industrial Savings Account payment",array: []}}},"Sleek Cotton Chicken interactive",new Date("2018-09-06T00:40:52.108Z"),78533,{_id: 17866,num: 275,obj: {}},[],[34126]]});
    },

    function(coll) {
        return coll.insert({_id: 17867,str: "Bedfordshire",num: 83533,date: new Date("2018-09-06T16:05:03.529Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17868,str: "RSS content Bike",num: 9440,array: []});
    },

    function(coll) {
        return coll.insert({_id: 17869,str: "Hollow Electronics",num: 73169,date: new Date("2018-09-06T08:23:24.374Z"),array: ["Usability",new Date("2018-09-05T23:29:24.972Z"),86869,new Date("2018-09-06T04:45:12.829Z"),"Savings Account Tunisia invoice",32027,["Inverse Ohio"],[],new Date("2018-09-06T11:36:26.611Z"),{_id: 17870,str: "Gorgeous Metal Chips Computers",date: new Date("2018-09-05T23:10:49.029Z"),array: [],obj: {}}],obj: {_id: 17871,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17872,str: "online Buckinghamshire",num: 19491,date: new Date("2018-09-06T11:25:44.285Z"),array: ["Djibouti","Investment Account",new Date("2018-09-06T15:35:06.083Z"),[],{_id: 17873,str: "impactful website Investor",date: new Date("2018-09-06T19:04:35.956Z"),array: [new Date("2018-09-06T17:59:02.148Z"),new Date("2018-09-06T10:47:01.811Z"),95486,72,60812],obj: {_id: 17874,str: "Directives intuitive Assurance",num: 43445,date: new Date("2018-09-06T05:30:26.162Z"),array: [],obj: {}}},{_id: 17875,num: 32393,date: new Date("2018-09-06T06:31:02.513Z"),obj: {}},{_id: 17876,num: 27034,obj: {}},new Date("2018-09-05T21:44:43.327Z"),16721,new Date("2018-09-06T03:18:37.902Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17877,str: "maroon",num: 40349,date: new Date("2018-09-05T20:28:07.186Z"),array: ["Central invoice Handmade",32704,"redundant Borders","copying Ergonomic Plastic Tuna",new Date("2018-09-06T03:43:00.007Z"),new Date("2018-09-06T06:55:00.539Z"),45142,90592,[new Date("2018-09-06T01:21:59.669Z"),new Date("2018-09-05T22:55:55.395Z"),[],"Florida Unbranded Plastic Fish orchid"],78168,new Date("2018-09-06T19:20:33.003Z")],obj: {_id: 17878,str: "disintermediate Rustic solid state",num: 95650,date: new Date("2018-09-06T18:42:26.435Z"),array: [{_id: 17879,str: "proactive parse Intelligent Cotton Chair",num: 56898,date: new Date("2018-09-06T07:16:17.045Z"),array: [],obj: {}},31394],obj: {_id: 17880,str: "e-commerce",date: new Date("2018-09-06T03:04:25.473Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 17881,str: "Proactive COM",num: 34507,date: new Date("2018-09-06T11:24:35.925Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17882,str: "payment Concrete Object-based",num: 69519,date: new Date("2018-09-06T18:34:03.212Z"),array: [],obj: {_id: 17883,str: "silver users Rupiah",num: 90645,date: new Date("2018-09-06T11:23:08.627Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17884,str: "indexing",num: 67387,date: new Date("2018-09-06T01:38:40.730Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17885,str: "e-tailers",num: 18434,date: new Date("2018-09-06T10:08:50.339Z"),array: [new Date("2018-09-06T16:32:16.431Z"),77624,"index","Bangladesh Global Money Market Account",new Date("2018-09-06T02:36:55.700Z"),"deposit Fundamental",new Date("2018-09-05T22:05:06.295Z"),9803,[],{_id: 17886,str: "Clothing",num: 7365,date: new Date("2018-09-06T17:44:42.932Z"),array: [{_id: 17887,num: 46520,date: new Date("2018-09-06T18:28:35.157Z"),obj: {}},94971],obj: {}},24337,new Date("2018-09-06T10:36:29.791Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17888,str: "Optimization focus group",num: 81106,date: new Date("2018-09-06T04:02:48.979Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17889,str: "indexing Books",num: 8614,date: new Date("2018-09-06T14:57:48.575Z"),array: [new Date("2018-09-06T15:45:43.243Z"),98581,"actuating initiative",48733,[],"panel Grocery","International",["Granite connect Legacy"],new Date("2018-09-06T10:33:43.332Z"),new Date("2018-09-06T08:54:14.557Z"),"Moroccan Dirham Licensed primary",new Date("2018-09-06T17:44:11.570Z"),{_id: 17890,str: "Incredible",date: new Date("2018-09-06T14:40:36.538Z"),obj: {}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 17891,str: "Internal feed",num: 38733,date: new Date("2018-09-06T00:45:37.088Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17892,str: "California Oklahoma",num: 11919,date: new Date("2018-09-06T04:11:57.263Z"),array: [40260,new Date("2018-09-06T03:42:53.545Z"),new Date("2018-09-05T23:06:05.232Z"),15333,"encryption Norway",[60709,"bypass Cotton Handcrafted",[],{_id: 17893,str: "monitor Right-sized",num: 84525,date: new Date("2018-09-06T12:57:33.897Z"),array: ["withdrawal Factors Principal",new Date("2018-09-06T03:49:25.550Z"),{_id: 17894,str: "Massachusetts Accounts",num: 67900,date: new Date("2018-09-05T22:44:02.483Z"),array: [],obj: {}}],obj: {_id: 17895,num: 31210,array: [],obj: {_id: 17896,str: "silver Cook Islands supply-chains",num: 83308,date: new Date("2018-09-06T05:35:08.353Z"),obj: {}}}},"Focused Kentucky"],new Date("2018-09-06T13:53:05.940Z"),new Date("2018-09-05T23:45:33.648Z"),{_id: 17897,str: "turn-key",date: new Date("2018-09-06T18:12:28.592Z"),array: ["online Street Buckinghamshire"]},new Date("2018-09-06T10:57:54.929Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17898,str: "action-items Uzbekistan Sum",num: 42568,array: [18625,new Date("2018-09-05T23:37:15.163Z"),[],4235,new Date("2018-09-06T16:46:53.442Z"),"enterprise microchip","Poland Berkshire",{_id: 17899,str: "Luxembourg deposit plug-and-play",num: 73178,date: new Date("2018-09-06T07:13:39.955Z"),array: [],obj: {_id: 17900,num: 29137,date: new Date("2018-09-06T18:34:07.550Z"),array: [],obj: {_id: 17901,str: "Home Loan Account",num: 48024,date: new Date("2018-09-05T20:48:20.358Z")}}},5396],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17902,str: "Bacon Practical",num: 45871,date: new Date("2018-09-06T16:36:02.814Z"),array: [],obj: {_id: 17903,str: "Berkshire Table Soft",num: 79373,date: new Date("2018-09-06T14:02:33.521Z"),array: [],obj: {_id: 17904,str: "compressing synthesize",num: 76353,array: [79105,{_id: 17905,date: new Date("2018-09-05T22:19:00.600Z"),array: [["IB South Carolina",[],new Date("2018-09-06T13:36:58.522Z"),6830]],obj: {}},94872,new Date("2018-09-06T04:27:57.257Z"),"Seamless",new Date("2018-09-05T22:43:33.142Z"),96250,new Date("2018-09-06T10:47:55.849Z"),"Checking Account",{_id: 17906,str: "solid state open-source Small Plastic Shirt",num: 65309,date: new Date("2018-09-06T12:00:40.869Z"),obj: {}},"responsive",["program Reduced"]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17907,str: "panel Pre-emptive",num: 38945,date: new Date("2018-09-06T08:29:29.712Z"),array: [92170,39324,"Libyan Arab Jamahiriya",[],new Date("2018-09-05T20:20:13.581Z"),"bandwidth Unbranded Plastic Keyboard",new Date("2018-09-06T05:46:16.885Z"),"Crossroad Swaziland",new Date("2018-09-06T16:48:15.564Z"),{_id: 17908,str: "North Korean Won monitor",num: 43179,date: new Date("2018-09-05T22:50:52.304Z"),array: [[],45427]},{_id: 17909,str: "Product Customer",num: 44144,array: [],obj: {}},{_id: 17910,str: "Marketing Checking Account",num: 40233,date: new Date("2018-09-05T22:58:48.663Z"),obj: {_id: 17911,num: 89621,date: new Date("2018-09-05T21:26:10.983Z"),obj: {_id: 17912,str: "unleash Handmade Incredible",date: new Date("2018-09-06T19:21:37.705Z"),obj: {}}}}],obj: {_id: 17913,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17914,str: "Operations Home Loan Account Web",num: 7546,date: new Date("2018-09-06T08:53:28.698Z"),array: [],obj: {_id: 17915,str: "Licensed",date: new Date("2018-09-06T09:32:23.757Z"),array: ["Home Loan Account primary",new Date("2018-09-06T13:33:41.732Z"),[],{_id: 17916,str: "connecting",num: 24521,array: ["impactful Markets",96708],obj: {}},new Date("2018-09-06T01:53:23.206Z"),new Date("2018-09-05T22:17:49.788Z"),"e-commerce",18909,[],73853,74037],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17917,str: "TCP local Cotton",num: 56187,date: new Date("2018-09-06T00:41:55.296Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17918,str: "Personal Loan Account cutting-edge",num: 30222,date: new Date("2018-09-06T00:26:59.016Z"),array: [],obj: {_id: 17919,str: "Planner Granite",num: 21689,date: new Date("2018-09-05T22:52:22.081Z"),array: [["Senior","interfaces Seychelles Wooden"],new Date("2018-09-06T06:20:39.015Z"),8891,new Date("2018-09-06T09:21:39.091Z"),84379,{_id: 17920,str: "New Hampshire",num: 54440,date: new Date("2018-09-05T23:40:34.460Z"),obj: {}},"capacity",{_id: 17921,str: "indexing",num: 50277,obj: {_id: 17922,date: new Date("2018-09-05T23:11:53.842Z"),array: [{_id: 17923,num: 14441,array: []},95283,88640]}},new Date("2018-09-06T11:46:44.640Z"),51970,"Advanced open architecture"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17924,str: "New Israeli Sheqel",num: 74301,date: new Date("2018-09-05T21:55:09.688Z"),array: [40052,new Date("2018-09-06T11:39:51.886Z"),"markets Intelligent Steel Chair","Borders",new Date("2018-09-06T07:24:22.619Z"),6811,"Granite Incredible",47225,new Date("2018-09-05T21:24:08.611Z")],obj: {_id: 17925,date: new Date("2018-09-06T03:04:12.128Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17926,str: "Baby Health Tugrik",num: 83379,date: new Date("2018-09-06T15:02:54.223Z"),array: [[],32724,"foreground actuating Soft",new Date("2018-09-06T04:47:44.249Z"),36190,"interfaces Baby",{_id: 17927,str: "Iran",num: 66352,date: new Date("2018-09-05T21:39:20.176Z"),array: [],obj: {}},36028,"Response"],obj: {_id: 17928,str: "dedicated",date: new Date("2018-09-06T16:29:56.155Z"),array: ["Solutions rich Branding",67834,new Date("2018-09-06T16:04:21.920Z"),new Date("2018-09-06T16:55:22.194Z"),{_id: 17929,str: "payment Refined Plastic Computer",date: new Date("2018-09-06T11:19:47.561Z")},[],new Date("2018-09-06T06:23:44.748Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17930,str: "array Regional",num: 22286,date: new Date("2018-09-06T15:52:38.482Z"),array: [new Date("2018-09-06T00:28:06.859Z"),{_id: 17931,str: "Optimized auxiliary",array: [44666],obj: {}},"Assurance Down-sized HDD","Personal Loan Account Shirt Bike",82635,39547,new Date("2018-09-06T05:40:20.537Z"),new Date("2018-09-06T17:14:19.355Z"),2812,"Metal River drive"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17932,str: "morph Antarctica (the territory South of 60 deg S)",num: 87579,date: new Date("2018-09-06T12:22:28.267Z"),array: [["Computers Small",31597,{_id: 17933,str: "bypassing Ramp",num: 94349,date: new Date("2018-09-06T14:51:10.520Z"),array: []}],14103,new Date("2018-09-06T17:59:03.237Z"),34752,"Bedfordshire","portals implement online","mesh Berkshire Cayman Islands Dollar",new Date("2018-09-06T02:42:54.055Z"),new Date("2018-09-06T05:29:55.215Z"),34224,new Date("2018-09-06T11:52:48.865Z")],obj: {_id: 17934,num: 94793,date: new Date("2018-09-06T09:29:07.911Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17935,str: "collaboration",num: 45768,date: new Date("2018-09-06T18:43:36.013Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17936,str: "Niger generate invoice",date: new Date("2018-09-06T05:04:44.011Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17937,str: "Salad New Jersey Bedfordshire",num: 27703,date: new Date("2018-09-06T16:01:54.715Z"),array: [84434,"Buckinghamshire Unbranded Rubber Mouse","teal Personal Loan Account Home",1683,{_id: 17938,str: "New Taiwan Dollar",num: 71158,date: new Date("2018-09-06T16:33:40.906Z"),array: [],obj: {_id: 17939,str: "withdrawal Maryland",num: 59018,date: new Date("2018-09-06T02:49:39.566Z"),array: [],obj: {}}},new Date("2018-09-06T07:44:15.255Z"),new Date("2018-09-06T01:55:21.341Z"),"Generic invoice Sleek Granite Sausages",{_id: 17940,str: "Buckinghamshire Direct",array: []},new Date("2018-09-06T14:28:59.861Z"),[[]],39962],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17941,str: "Drives Investment Account utilize",date: new Date("2018-09-06T08:07:41.371Z"),array: ["Baby",new Date("2018-09-05T21:06:34.806Z"),new Date("2018-09-06T14:28:05.081Z"),new Date("2018-09-06T13:22:43.671Z"),"Future Shirt",31949,{_id: 17942,str: "compress",num: 11916,obj: {_id: 17943,str: "aggregate Direct Delaware",num: 14663,date: new Date("2018-09-06T11:39:22.202Z"),array: [],obj: {}}},48904,"Forward",new Date("2018-09-06T11:50:17.430Z"),{_id: 17944,num: 66486,date: new Date("2018-09-05T21:09:25.388Z"),array: ["invoice capacity Handmade",74269]},new Date("2018-09-05T20:45:44.559Z")],obj: {_id: 17945,str: "synergies Afghani Secured",num: 89650,date: new Date("2018-09-06T17:40:09.247Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17946,str: "e-business Electronics digital",num: 19357,date: new Date("2018-09-05T20:51:41.498Z"),array: [new Date("2018-09-06T09:21:12.005Z"),"seize monitor","Generic Granite Tuna schemas pixel","Chief Assistant bus",new Date("2018-09-06T16:44:50.822Z"),6339,new Date("2018-09-06T19:50:52.532Z"),[[]],{_id: 17947,num: 68586,date: new Date("2018-09-06T08:48:37.136Z"),array: [],obj: {_id: 17948,str: "Buckinghamshire",num: 52695,date: new Date("2018-09-06T13:32:28.287Z"),obj: {}}},7647,13739],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17949,str: "utilisation Baby front-end",num: 24002,date: new Date("2018-09-06T01:31:15.174Z"),obj: {_id: 17950,date: new Date("2018-09-06T00:07:30.932Z"),array: [],obj: {_id: 17951,str: "cyan Object-based",date: new Date("2018-09-06T18:13:31.776Z"),array: ["salmon ubiquitous",{_id: 17952,str: "California Refined Granite Bike",num: 20441,date: new Date("2018-09-06T18:30:49.453Z"),array: [[],new Date("2018-09-06T13:31:41.095Z"),86156,51058,96765,new Date("2018-09-06T02:49:48.401Z")],obj: {}},16411,"Throughway","Fantastic Frozen Shirt",[],"Vision-oriented Cordoba Oro Fantastic"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17953,str: "Branding Future-proofed compressing",num: 28456,date: new Date("2018-09-05T23:25:20.559Z"),array: ["cyan demand-driven azure",new Date("2018-09-06T14:37:19.815Z"),new Date("2018-09-05T21:13:30.585Z"),43455,48180,{_id: 17954,str: "synthesize Automotive Somoni",num: 18225,date: new Date("2018-09-06T13:29:08.264Z"),array: [],obj: {}},"Dynamic Global",[],94172,{_id: 17955,str: "Ball El Salvador Colon US Dollar",num: 1375,date: new Date("2018-09-06T02:37:59.385Z")},new Date("2018-09-05T23:57:19.264Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17956,str: "Regional Vision-oriented Montana",num: 37103,date: new Date("2018-09-06T08:03:42.898Z"),array: [],obj: {_id: 17957,str: "Tools",num: 70199,date: new Date("2018-09-05T22:08:47.861Z"),array: [],obj: {_id: 17958,str: "circuit",num: 62002,date: new Date("2018-09-06T13:53:51.202Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17959,str: "Monaco Colorado silver",num: 17721,date: new Date("2018-09-06T13:43:17.000Z"),array: ["Unbranded Configurable",44270,"Handcrafted Designer",36487,new Date("2018-09-06T02:37:11.583Z"),new Date("2018-09-06T12:22:54.955Z"),["Incredible",new Date("2018-09-06T10:44:46.255Z"),"Money Market Account",8560,"Licensed collaborative"],12972],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17960,str: "bandwidth Kwanza",num: 17621,date: new Date("2018-09-06T14:02:04.368Z"),array: [],obj: {_id: 17961,str: "Dong architect",num: 52286,array: [],obj: {_id: 17962,num: 9561,date: new Date("2018-09-06T18:31:44.023Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17963,str: "Agent Lead",num: 42956,date: new Date("2018-09-06T07:14:03.549Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17964,str: "Riel Moldovan Leu New York",num: 21170,date: new Date("2018-09-06T14:54:06.523Z"),obj: {_id: 17965,str: "service-desk Networked bandwidth",num: 37011,date: new Date("2018-09-06T13:01:22.189Z"),array: [],obj: {_id: 17966,num: 97270,date: new Date("2018-09-06T12:03:02.198Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 17967,str: "override Chips Trafficway",num: 9298,date: new Date("2018-09-06T08:57:29.001Z"),array: ["back up Tools","Intelligent Granite Tuna",new Date("2018-09-06T19:26:17.999Z"),new Date("2018-09-06T13:46:53.308Z"),89649,new Date("2018-09-06T01:56:20.126Z"),{_id: 17968,num: 54808,obj: {}},[],4018,"ubiquitous Auto Loan Account Refined",{_id: 17969,str: "Interactions vertical navigating",num: 4669,date: new Date("2018-09-06T13:25:35.791Z"),array: [53059,"Cambridgeshire",[],new Date("2018-09-06T03:46:50.538Z")],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 17970,str: "Home Loan Account",num: 30399,array: [],obj: {_id: 17971,str: "Russian Federation Egypt",num: 34149,date: new Date("2018-09-06T14:45:45.083Z"),array: ["scale digital",new Date("2018-09-06T13:19:02.949Z"),new Date("2018-09-06T04:34:28.886Z"),25764,[],{_id: 17972,num: 452,date: new Date("2018-09-06T06:05:42.544Z"),array: ["Handmade Granite Cheese maximized channels"],obj: {_id: 17973,str: "Senior Fort",date: new Date("2018-09-06T07:37:41.217Z"),array: [58369,[32714]],obj: {}}},"models calculate New Mexico",new Date("2018-09-06T12:20:08.697Z"),{_id: 17974,str: "Seychelles TCP",num: 27851,date: new Date("2018-09-06T05:14:41.290Z")},{_id: 17975,str: "Tanzania copy",num: 26602,date: new Date("2018-09-06T05:15:26.535Z")},new Date("2018-09-06T08:51:20.411Z"),"HTTP","primary Unbranded Rubber Chicken",48536,"application"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17976,str: "Intelligent Fresh Keyboard Towels Internal",num: 91021,date: new Date("2018-09-05T21:23:28.867Z"),array: [29889,new Date("2018-09-06T14:47:44.783Z"),74145,new Date("2018-09-06T10:19:04.091Z"),81975,"Central",{_id: 17977,str: "hack Progressive",num: 44927,date: new Date("2018-09-06T12:29:59.089Z"),array: []},78553,"Business-focused withdrawal matrix","Investor Lebanese Pound Mouse",["JSON Investment Account Music","Kina Principal optical",{_id: 17978,str: "bypassing Plastic actuating",num: 60937,obj: {}}]],obj: {_id: 17979,num: 60683,date: new Date("2018-09-06T04:18:59.206Z"),array: [[],new Date("2018-09-06T11:28:13.857Z"),[],new Date("2018-09-05T22:21:56.670Z")],obj: {_id: 17980,str: "invoice",num: 54293}}});
    },

    function(coll) {
        return coll.insert({_id: 17981,str: "Tasty definition",num: 54297,date: new Date("2018-09-06T11:02:13.081Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17982,str: "Mali Solomon Islands Knolls",date: new Date("2018-09-06T18:21:00.295Z"),array: [],obj: {_id: 17983,str: "synthesizing",num: 25143}});
    },

    function(coll) {
        return coll.insert({_id: 17984,str: "Forward",num: 41481,date: new Date("2018-09-05T22:06:19.551Z"),array: [29303,new Date("2018-09-06T12:23:00.693Z"),new Date("2018-09-06T17:12:11.412Z"),new Date("2018-09-06T07:51:53.284Z"),"Small",53803,"Island expedite","Fresh","Well",[{_id: 17985,str: "Generic payment",num: 50671,date: new Date("2018-09-06T18:29:07.478Z"),array: [],obj: {_id: 17986,num: 35152,date: new Date("2018-09-06T09:06:34.549Z"),array: [],obj: {_id: 17987,str: "Liaison Implementation benchmark",num: 8283,date: new Date("2018-09-06T19:07:44.672Z"),array: ["Wisconsin",{_id: 17988,str: "sexy Granite",num: 38855,date: new Date("2018-09-05T22:19:56.131Z")},new Date("2018-09-05T23:39:12.156Z"),{_id: 17989,array: [],obj: {}},62641,6044]}}}]],obj: {_id: 17990,str: "Delaware Shoes Licensed Fresh Gloves",date: new Date("2018-09-06T14:22:28.925Z"),obj: {_id: 17991,num: 18700,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 17992,str: "card",num: 64317,date: new Date("2018-09-06T05:37:07.879Z"),array: [new Date("2018-09-06T18:18:47.970Z"),"XSS maximized Buckinghamshire","Finland real-time Oregon",[],91757,new Date("2018-09-05T22:31:43.541Z"),73049,{_id: 17993,str: "online Kentucky green",date: new Date("2018-09-06T06:33:18.085Z"),array: [43300,"azure"],obj: {_id: 17994,num: 75457,date: new Date("2018-09-06T18:33:24.401Z")}},new Date("2018-09-06T06:41:58.988Z"),67793,"Practical Tasty Rubber Bacon Chief",new Date("2018-09-06T10:09:53.808Z"),{_id: 17995,str: "next-generation Reduced purple",num: 88214,date: new Date("2018-09-05T21:47:13.311Z"),obj: {}},{_id: 17996,num: 40496,array: [],obj: {}}],obj: {_id: 17997,num: 73781,date: new Date("2018-09-06T18:26:40.011Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17998,str: "National Frozen Spain",num: 320,array: [],obj: {_id: 17999,str: "Croatian Kuna",date: new Date("2018-09-06T01:50:07.478Z"),array: [new Date("2018-09-05T20:22:05.917Z"),"Coordinator",65346,53725,6674,"Refined Fresh Tuna systematic programming","deliverables program",35836,new Date("2018-09-06T14:21:13.901Z"),new Date("2018-09-06T17:27:15.787Z"),[],{_id: 18000,str: "integrate Corporate",num: 12869,date: new Date("2018-09-06T02:51:14.994Z"),array: [],obj: {_id: 18001,date: new Date("2018-09-06T17:47:49.444Z"),array: [{_id: 18002,str: "Plastic",num: 68369,date: new Date("2018-09-06T16:26:52.536Z"),obj: {}},{_id: 18003,str: "multi-byte IB Chair",num: 65261,array: [],obj: {}}]}},4626],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18004,str: "program Junctions Chips",num: 89404,date: new Date("2018-09-06T17:42:16.002Z"),array: [],obj: {_id: 18005,str: "Buckinghamshire",num: 81130,date: new Date("2018-09-06T01:13:07.024Z"),array: ["zero administration synthesize",61472,new Date("2018-09-06T13:15:32.578Z"),"Western Sahara implement Crossroad",[],"programming Frozen",31962,new Date("2018-09-06T07:47:39.319Z"),"China Awesome Wooden Fish"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18006,num: 78440,date: new Date("2018-09-06T16:42:32.800Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18007,str: "Savings Account",num: 79246,date: new Date("2018-09-06T08:53:05.800Z"),array: ["Response Indiana",new Date("2018-09-06T14:17:36.199Z"),new Date("2018-09-06T08:24:47.716Z"),10903,"Bedfordshire auxiliary","Music",new Date("2018-09-06T03:52:56.173Z"),{_id: 18008,str: "Corporate",date: new Date("2018-09-05T20:53:23.624Z"),array: [74997,"Public-key Soap Iowa",[],new Date("2018-09-06T06:39:02.529Z")],obj: {_id: 18009,str: "e-tailers",num: 76200,date: new Date("2018-09-06T19:03:29.188Z"),array: [],obj: {_id: 18010,str: "Rest",num: 4916,array: [{_id: 18011,str: "mobile",num: 6072}],obj: {_id: 18012,num: 7838,date: new Date("2018-09-06T02:08:00.392Z"),array: [{_id: 18013,str: "Associate Chief",num: 65935,date: new Date("2018-09-06T03:30:42.721Z")},47190]}}}},new Date("2018-09-06T11:33:23.873Z"),13873],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18014,str: "bus Practical Metal Shoes Chair",num: 79199,date: new Date("2018-09-06T17:25:18.175Z"),array: [56761,"client-server Tennessee",new Date("2018-09-06T00:38:26.911Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18015,str: "Direct Hawaii scalable",num: 34242,date: new Date("2018-09-06T12:55:21.026Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18016,str: "communities lavender Nepal",num: 56591,date: new Date("2018-09-06T18:14:35.442Z")});
    },

    function(coll) {
        return coll.insert({_id: 18017,str: "Customer azure",num: 59847,array: [],obj: {_id: 18018,str: "extend",date: new Date("2018-09-06T04:31:27.161Z"),array: [new Date("2018-09-06T01:11:56.477Z"),new Date("2018-09-06T19:49:18.779Z"),88247,95380,"Developer open-source","Configuration Kansas",59577,[],[new Date("2018-09-05T20:30:20.903Z")],26939,"open architecture",[new Date("2018-09-06T17:21:52.824Z"),{_id: 18019,str: "Ergonomic Cotton Salad Integration",date: new Date("2018-09-06T06:12:40.727Z")}]],obj: {_id: 18020,str: "Manager",num: 13564,date: new Date("2018-09-06T12:37:59.450Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18021,str: "generate",num: 51561,date: new Date("2018-09-06T13:00:49.877Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18022,str: "protocol",num: 59274,date: new Date("2018-09-06T03:52:20.586Z"),array: [],obj: {_id: 18023,str: "Money Market Account",num: 78957,date: new Date("2018-09-06T02:25:39.018Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18024,str: "Licensed viral",num: 30805,date: new Date("2018-09-06T16:54:05.348Z"),array: [29546,"deposit Christmas Island Bedfordshire",new Date("2018-09-06T11:11:00.263Z"),"Branch gold",new Date("2018-09-06T00:43:49.994Z"),new Date("2018-09-06T09:38:20.056Z"),[{_id: 18025,str: "Plastic",num: 44785,date: new Date("2018-09-06T09:48:10.362Z"),array: [],obj: {}},22403],33520,new Date("2018-09-06T15:43:55.252Z"),"indexing Metrics"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18026,str: "Borders",num: 99327,date: new Date("2018-09-05T23:15:21.753Z"),obj: {_id: 18027,str: "Computer Outdoors digital",num: 30627,date: new Date("2018-09-06T03:09:11.348Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 18028,str: "payment",num: 38353,date: new Date("2018-09-06T04:35:56.182Z"),array: [],obj: {_id: 18029,str: "Factors",date: new Date("2018-09-06T19:46:51.494Z"),array: [new Date("2018-09-05T23:23:23.964Z"),28980,new Date("2018-09-06T14:51:28.907Z"),"implement Shoes",{_id: 18030,str: "engineer Toys",num: 34050,date: new Date("2018-09-06T10:17:13.071Z"),obj: {}},40530,"disintermediate",[new Date("2018-09-06T19:52:50.936Z"),25140,new Date("2018-09-06T18:16:37.584Z"),46684],"cultivate driver"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18031,str: "EXE intuitive Garden",array: [],obj: {_id: 18032,str: "Zambian Kwacha",num: 5782,date: new Date("2018-09-06T11:54:34.775Z"),array: [13798,"Concrete",50494,{_id: 18033,str: "exploit Proactive invoice",date: new Date("2018-09-06T04:56:41.459Z"),array: [],obj: {_id: 18034,str: "Borders Chips",num: 70899,date: new Date("2018-09-06T05:23:31.999Z"),obj: {}}},new Date("2018-09-06T05:04:20.038Z"),51578,new Date("2018-09-06T18:51:32.839Z"),{_id: 18035,date: new Date("2018-09-05T23:17:41.969Z"),array: [[["Small context-sensitive","Specialist workforce Auto Loan Account",new Date("2018-09-06T04:29:36.072Z"),"Latvian Lats",new Date("2018-09-06T12:29:09.488Z")]],{_id: 18036,num: 14232,date: new Date("2018-09-06T03:23:00.430Z"),array: [],obj: {}},2031]},new Date("2018-09-06T18:20:23.082Z"),"Dynamic parsing"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18037,str: "cross-platform South Georgia and the South Sandwich Islands",num: 48149,date: new Date("2018-09-06T10:09:50.879Z"),array: [new Date("2018-09-05T20:00:22.446Z"),new Date("2018-09-06T01:14:50.631Z"),"pink Home Loan Account lavender",11444,[],67607,"cohesive Frozen Personal Loan Account","Electronics","wireless e-markets Seychelles Rupee","cyan generating"],obj: {_id: 18038,num: 20138,array: [new Date("2018-09-05T22:36:47.997Z"),[{_id: 18039,str: "Gambia Cotton",num: 90198,date: new Date("2018-09-06T00:44:50.444Z"),array: [],obj: {}},{_id: 18040,str: "deposit payment Pataca",date: new Date("2018-09-06T14:43:14.446Z"),obj: {_id: 18041,num: 31637,date: new Date("2018-09-06T03:01:13.304Z"),array: [],obj: {}}},11551,new Date("2018-09-06T08:22:10.965Z")],new Date("2018-09-06T00:05:43.849Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 18042,str: "Netherlands Rustic Granite Car Distributed",num: 31673,date: new Date("2018-09-05T23:39:15.095Z"),array: [],obj: {_id: 18043,str: "Louisiana",num: 63580,date: new Date("2018-09-06T02:23:54.291Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18044,str: "panel",num: 16269,date: new Date("2018-09-06T10:21:39.237Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18045,str: "enable Polarised Internal",num: 25252,date: new Date("2018-09-06T01:35:03.099Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18046,str: "Music Guam index",date: new Date("2018-09-06T03:49:50.523Z"),array: [new Date("2018-09-06T15:17:19.749Z"),new Date("2018-09-06T15:53:21.847Z"),new Date("2018-09-05T22:44:16.357Z"),70548,[],{_id: 18047,str: "teal Fish",num: 1925,date: new Date("2018-09-06T11:52:45.401Z"),array: [40735,"Liechtenstein Dynamic",new Date("2018-09-05T21:56:53.116Z"),"application 24/7"],obj: {_id: 18048,str: "frictionless Gorgeous Steel Ball",num: 32786,date: new Date("2018-09-06T06:00:03.444Z"),array: [],obj: {}}},"Mouse ROI","Buckinghamshire",{_id: 18049,num: 48542,date: new Date("2018-09-06T00:04:52.238Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18050,str: "pixel Idaho",num: 30375,date: new Date("2018-09-06T00:59:53.010Z"),array: [54673,"sensor Metal parse",34565,"Unbranded Avon Operative",[],new Date("2018-09-06T16:02:41.593Z"),new Date("2018-09-06T16:06:22.457Z"),new Date("2018-09-06T12:53:56.615Z"),{_id: 18051,str: "Fantastic",date: new Date("2018-09-06T12:31:24.571Z"),obj: {_id: 18052,str: "programming sensor Lithuanian Litas",num: 55995,date: new Date("2018-09-06T07:02:01.545Z"),array: [],obj: {}}},new Date("2018-09-06T03:29:52.324Z"),99459],obj: {_id: 18053,str: "Cambridgeshire Planner",num: 23025,array: ["Sudanese Pound Virginia","Borders",69416,{_id: 18054,num: 51200,date: new Date("2018-09-06T08:27:20.465Z"),array: []}],obj: {_id: 18055,str: "Buckinghamshire",num: 23916,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18056,str: "Towels Fantastic Plastic Gloves",num: 76665,date: new Date("2018-09-06T07:55:58.195Z"),array: [49281,{_id: 18057,str: "parsing calculating",num: 50697,date: new Date("2018-09-06T06:08:20.958Z"),array: [],obj: {_id: 18058,str: "digital Product",num: 62883,date: new Date("2018-09-06T02:02:05.143Z")}},78139,"generate experiences Optimization",new Date("2018-09-06T02:23:09.001Z"),{_id: 18059,num: 16305,array: [new Date("2018-09-06T01:05:24.696Z"),"primary"]},"online zero administration",new Date("2018-09-06T00:31:37.087Z"),34830],obj: {_id: 18060,date: new Date("2018-09-06T09:09:49.313Z"),array: [79822,new Date("2018-09-05T22:21:29.981Z"),{_id: 18061,str: "reboot connect invoice",num: 60273,date: new Date("2018-09-06T09:12:47.616Z"),obj: {}},[],"Credit Card Account"],obj: {_id: 18062,str: "Lock Executive",date: new Date("2018-09-06T14:26:40.983Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18063,str: "parallelism",num: 70872,array: [[],35532,[],{_id: 18064,str: "Martinique Burundi Franc",num: 52911,date: new Date("2018-09-06T02:18:38.926Z"),array: ["action-items COM",new Date("2018-09-06T19:44:31.526Z"),new Date("2018-09-06T08:38:12.015Z"),62516,new Date("2018-09-06T04:12:18.518Z")],obj: {_id: 18065,str: "Auto Loan Account IB Comoro Franc",num: 28886,obj: {}}},[{_id: 18066,date: new Date("2018-09-05T20:18:53.925Z"),array: [],obj: {_id: 18067,str: "invoice Stream",num: 409,date: new Date("2018-09-05T20:21:41.905Z")}}],"attitude action-items",new Date("2018-09-06T06:22:19.682Z"),"National",2765,91463,"Tunnel"]});
    },

    function(coll) {
        return coll.insert({_id: 18068,str: "Industrial extend Springs",num: 56322,date: new Date("2018-09-06T05:37:40.691Z"),array: ["system Tasty Metal Salad",36752,"Virginia panel","circuit Parkway",53397,new Date("2018-09-06T00:56:19.341Z"),new Date("2018-09-06T16:15:24.142Z"),"Buckinghamshire",{_id: 18069,num: 78185,date: new Date("2018-09-06T09:54:15.971Z"),array: [],obj: {}},1535,[new Date("2018-09-06T19:30:55.350Z"),[9454],{_id: 18070,str: "Checking Account Freeway overriding",num: 24936,date: new Date("2018-09-05T21:12:06.895Z"),array: []},[72670,74368],new Date("2018-09-05T20:06:19.392Z"),{_id: 18071,str: "Nebraska",num: 79268}]],obj: {_id: 18072,date: new Date("2018-09-06T18:20:45.081Z"),array: [],obj: {_id: 18073,str: "hacking Global Credit Card Account",date: new Date("2018-09-05T21:07:56.270Z"),array: ["Handcrafted"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18074,str: "Credit Card Account Point",date: new Date("2018-09-06T10:19:50.308Z"),array: ["Orchestrator Intelligent Wooden Bacon",new Date("2018-09-06T16:13:16.825Z"),76683,78589,new Date("2018-09-06T01:10:45.092Z"),87825,60506,[],80783,"Tasty",new Date("2018-09-06T12:42:14.068Z"),{_id: 18075,str: "function",num: 84228,date: new Date("2018-09-06T06:15:58.115Z"),array: [],obj: {}}],obj: {_id: 18076,str: "application Investment Account circuit",num: 52376,obj: {_id: 18077,str: "withdrawal Supervisor",num: 25697,date: new Date("2018-09-06T02:32:26.961Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18078,str: "IB",num: 32877,date: new Date("2018-09-06T18:22:04.936Z"),array: [],obj: {_id: 18079,str: "Armenian Dram",num: 59338,date: new Date("2018-09-06T09:46:08.388Z"),array: [{_id: 18080,array: [],obj: {}},new Date("2018-09-06T08:27:41.782Z"),[new Date("2018-09-06T06:41:55.877Z")],27769,98003,"Lead","next-generation",new Date("2018-09-05T20:51:20.767Z"),"Grenada Village Lead","orange SMTP transmit",{_id: 18081,str: "Shirt Zambia",num: 82216,array: []},new Date("2018-09-06T12:23:47.487Z"),4740]}});
    },

    function(coll) {
        return coll.insert({_id: 18082,str: "Liberia Integration Wooden",num: 16130,date: new Date("2018-09-06T11:11:19.561Z"),array: [],obj: {_id: 18083,str: "Practical",num: 39246,date: new Date("2018-09-06T07:30:45.728Z"),array: [{_id: 18084,str: "Beauty Savings Account",date: new Date("2018-09-06T10:20:48.495Z"),obj: {}},new Date("2018-09-06T14:33:17.331Z"),4025,28954,46965,"Hill","secondary US Dollar 4th generation",{_id: 18085,str: "Cambridgeshire Well Cambridgeshire",date: new Date("2018-09-06T07:38:00.720Z"),array: [new Date("2018-09-06T18:15:03.861Z"),new Date("2018-09-06T01:57:24.577Z")]},"Music Wallis and Futuna",{_id: 18086,str: "hard drive Handmade Naira",num: 22440,obj: {_id: 18087,num: 24435,date: new Date("2018-09-06T10:54:07.523Z"),array: []}},[new Date("2018-09-05T23:40:04.363Z"),new Date("2018-09-06T14:48:08.380Z"),"Iraqi Dinar solid state"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18088,str: "bricks-and-clicks matrix",num: 51207,date: new Date("2018-09-06T01:39:20.784Z"),array: ["Washington navigating CFP Franc",new Date("2018-09-05T23:00:17.904Z"),"parsing","JBOD Fiji Dollar Rupiah",new Date("2018-09-06T19:02:40.839Z"),[],48331,10115,{_id: 18089,num: 31059,date: new Date("2018-09-05T20:04:12.778Z"),array: [{_id: 18090,str: "payment compressing",num: 65606,array: [],obj: {}}]},4963,new Date("2018-09-06T08:25:06.230Z"),{_id: 18091,str: "synthesizing Rubber e-tailers",date: new Date("2018-09-06T16:40:38.084Z"),array: [[new Date("2018-09-06T08:06:51.723Z"),new Date("2018-09-06T13:09:53.950Z"),[]]],obj: {_id: 18092,str: "Licensed Agent",num: 17856,date: new Date("2018-09-06T18:01:07.910Z"),obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18093,str: "redundant Mount",num: 88049,date: new Date("2018-09-06T17:47:17.268Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18094,num: 18497,date: new Date("2018-09-06T05:03:09.312Z"),array: [{_id: 18095,str: "Mississippi",num: 79531,date: new Date("2018-09-06T07:35:52.288Z"),obj: {}},"SMTP",[],new Date("2018-09-06T16:11:25.125Z"),68707,new Date("2018-09-06T15:57:46.774Z"),"back-end parse Creek","extranet Centralized",15856],obj: {_id: 18096,array: [["leverage"],67376,99780,{_id: 18097,str: "Saint Lucia",num: 35126,date: new Date("2018-09-06T10:01:46.503Z"),array: []},1827]}});
    },

    function(coll) {
        return coll.insert({_id: 18098,str: "Hat ivory",date: new Date("2018-09-05T21:55:43.062Z"),array: [58201,95823,{_id: 18099,str: "solutions",num: 27772,obj: {_id: 18100,date: new Date("2018-09-06T09:23:01.542Z"),array: ["Unbranded Cotton Chair backing up"]}},new Date("2018-09-06T08:06:16.275Z"),"productivity Towels",10159,new Date("2018-09-06T07:18:02.008Z"),"Corporate",4584,new Date("2018-09-06T18:20:33.780Z"),94179,"Kids Incredible Metal Gloves online",[],new Date("2018-09-05T23:37:17.419Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18101,num: 82977,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18102,str: "withdrawal European Unit of Account 17(E.U.A.-17) De-engineered",num: 61918,date: new Date("2018-09-05T20:38:57.832Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18103,num: 12145,date: new Date("2018-09-06T11:45:08.970Z"),array: [new Date("2018-09-06T05:33:42.884Z"),"Iceland Orchestrator",[],"brand bandwidth approach",90304,"maroon",new Date("2018-09-06T15:33:20.449Z"),46980,new Date("2018-09-06T02:46:25.275Z"),new Date("2018-09-06T03:49:33.221Z"),84106],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18104,str: "Wisconsin Chips Future",num: 4503,date: new Date("2018-09-06T19:04:16.875Z"),array: ["gold New Taiwan Dollar",new Date("2018-09-06T00:03:28.525Z"),{_id: 18105,str: "FTP",num: 87773,date: new Date("2018-09-06T16:26:11.667Z"),array: [],obj: {_id: 18106,str: "Cotton Soap indigo",date: new Date("2018-09-06T01:11:32.054Z"),array: ["Tokelau South Africa Officer"],obj: {_id: 18107,num: 86108,date: new Date("2018-09-05T23:02:46.982Z"),array: [new Date("2018-09-05T21:51:40.158Z"),{_id: 18108,str: "content-based Saint Vincent and the Grenadines Outdoors",num: 3190,date: new Date("2018-09-06T02:48:14.492Z")}],obj: {}}}},new Date("2018-09-06T18:21:07.071Z"),49183,"Dynamic Bedfordshire Ergonomic",new Date("2018-09-06T03:29:40.766Z"),79404,20649,[],76853,new Date("2018-09-06T15:34:20.399Z"),["Angola virtual Berkshire"]],obj: {_id: 18109,str: "bifurcated end-to-end FTP",obj: {_id: 18110,num: 43597,array: [],obj: {_id: 18111,num: 93567,array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 18112,str: "Alaska Mauritius Investor",num: 35591,date: new Date("2018-09-06T00:37:19.046Z"),array: [],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $range: [0,19] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.num','$obj.num'],[],[{ $toLower: '$obj.str' },"Keyboard orchestration Alabama",'$obj.obj.str']],useLongestLength: true,defaults: ["maximized high-level Legacy"]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Distributed Intuitive" } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T04:48:33.324Z"),timezone: "Africa/Blantyre",onNull: { $substr: ['$obj.obj.str',9,5] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.num',93642],as: 'madie',cond: { $in: [{ $arrayToObject: [[[{ $substrCP: ["Solutions",12,9] }],[],[82123]]] },{ $concatArrays: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.obj.str',chars: "Guatemala Developer paradigms"} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: [{ $substr: ["hybrid Automated",10,7] },1,9] } }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-06T16:36:47.720Z",onError: { $arrayElemAt: [[{ $substr: [{ $toLower: '$obj.obj.str' },12,16] },'$obj.str'],'$obj.num'] },onNull: { $toString: { $filter: {input: [],cond: { $and: [{ $substrCP: ["Sleek Illinois",6,5] },{ $ltrim: {input: '$obj.obj.obj.str',chars: "Generic Soft Pizza Eritrea"} }] }} } }} } }, _id: 0}}],

        [{$project: {a: { $toString: { $dateToString: {date: '$obj.date',format: "%d-%Z-%S-%S-%H-%M-%U-%w-%z-%G-%z",timezone: "Canada/Atlantic"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: { $trim: { input: '$obj.str' } } },"definition synergize drive","zero defect Washington Intelligent Metal Chicken"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $second: { $dateToParts: { date: { $millesecond: { $isoWeekYear: { $dayOfMonth: { $month: { $dayOfWeek: { $dateFromParts: {year: { $exp: 65111 },month: { $multiply: ['$num',9320] },millisecond: { $exp: '$obj.num' },timezone: "Canada/Central"} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$obj.obj.num','$obj.obj.obj.num',27211],54831] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.num',74472],['$obj.obj.str'],["eyeballs",{ $trim: { input: '$str' } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "Ouguiya programming" },"Seychelles Rupee Tactics"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.obj.str',{ $substr: [{ $rtrim: { input: '$obj.str' } },15,4] },"Platinum Associate Unbranded Rubber Mouse"],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],90042] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $minute: { $month: { $isoWeek: { $isoWeek: { $isoDayOfWeek: { $toDate: { $objectToArray: '$obj.obj' } } } } } } },timezone: "Europe/Tallinn",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T07:13:05.846Z"),format: "%G-%u-%z-%z-%u-%d-%Y-%Y",timezone: "Europe/Simferopol"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$str'],[42053,'$num','$num','$obj.num']] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $hour: { $dayOfYear: { $minute: { $isoWeek: { $week: new Date("2018-09-06T04:47:13.990Z") } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Washington",{ $toLower: '$str' },'$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $month: { $millesecond: { $toDate: { $concatArrays: [[{ $cmp: [{ $arrayToObject: [[{k: "wireless Regional",v: '$obj.str'},{k: "Tasty Granite Towels Health",v: '$num'},{k: "Organic relationships revolutionary",v: { $dayOfWeek: { $millesecond: { $minute: { $dateToParts: {date: { $week: { $dateToString: {date: new Date("2018-09-05T20:37:06.249Z"),onNull: { $arrayElemAt: [[3669],'$obj.obj.num'] }} } },timezone: "America/Godthab",iso8601: false} } } } }},{k: "hack Multi-channelled intangible",v: { $toLower: '$obj.obj.str' }}]] },{ $dateToString: {date: '$obj.obj.obj.date',format: "%%-%H-%z-%m-%V-%w-%m-%L-%u-%m-%Z",timezone: "Australia/Broken_Hill",onNull: { $ltrim: { input: '$obj.str' } }} }] }]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[90967],[],["Outdoors"]]] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-06T08:29:45.402Z",onError: { $arrayToObject: [[{k: "Frozen connect",v: '$obj.obj.num'},{k: "next-generation Awesome Product",v: '$num'}]] }} } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$str',16,13] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"hierarchy navigate Cedi"],{ $exp: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $toDate: { $map: {input: ["Configurable",{ $substrBytes: ['$obj.obj.obj.str',7,10] },'$obj.obj.str',"Buckinghamshire Handcrafted Plastic Gloves"],as: 'cristina',in: { $floor: '$obj.num' }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[55359,'$num',44274],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $toUpper: { $dateToString: {date: new Date("2018-09-06T16:50:15.158Z"),format: "%w-%u-%z-%M-%Z-%S",timezone: "US/Pacific"} } } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $minute: { $isoWeekYear: { $toDate: { $substrCP: ['$obj.obj.obj.str',3,14] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],61900] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.str',chars: { $substr: ['$obj.obj.str',13,13] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $dateToString: {date: new Date("2018-09-06T16:10:58.182Z"),format: "%L-%%-%Z-%%-%U-%L-%H-%H-%M-%u",timezone: "America/Porto_Velho",onNull: { $ltrim: { input: '$obj.str' } }} },"New Israeli Sheqel"],in: { $indexOfArray: [{ $concatArrays: [] },{ $arrayElemAt: [[],'$$this'] },11] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],56861] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.str',chars: { $rtrim: { input: '$obj.str' } }} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $month: { $dayOfMonth: { $isoWeek: { $month: { $isoWeekYear: { $second: { $millesecond: { $minute: { $minute: new Date("2018-09-06T01:25:03.366Z") } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "architectures Computers",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [true],as: 'elyse',in: { $ceil: 320 }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T19:15:53.323Z",timezone: "Europe/Andorra"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fantastic",v: new Date("2018-09-06T18:02:30.301Z")}]] }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeek: { $dayOfYear: { $minute: { $dateFromString: {dateString: "2018-09-06T18:42:59.745Z",format: "%L-%m-%Y-%H-%H-%M-%m-%M-%w-%Y",onNull: '$obj.obj.str'} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.str',{ $substrBytes: ["program Borders Credit Card Account",17,1] },'$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToParts: {date: { $isoWeek: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T13:05:11.503Z",format: "%V-%L-%j-%%-%M-%%-%H-%j",onNull: { $concatArrays: [["Horizontal Guadeloupe"]] }} } } },timezone: "Europe/Tirane",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeekYear: { $month: { $second: { $year: { $dateFromString: {dateString: "2018-09-06T11:02:33.433Z",timezone: "Asia/Amman",onError: { $arrayElemAt: [['$obj.obj.obj.str'],96940] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Springs policy plum",13,0] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T15:29:53.563Z"),timezone: "Atlantic/Faeroe"} }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$date' } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T01:55:35.396Z"),format: "%G-%V-%G-%V-%V-%V-%H-%S-%z-%Y-%L-%V",timezone: "Turkey"} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $concat: ["Borders auxiliary"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "input multi-byte Sleek",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],['$obj.str',"recontextualize Awesome Human",{ $toString: { $concatArrays: [['$num',18683]] } },"Burundi Franc platforms",'$obj.obj.obj.str'],[],[{ $toUpper: '$str' }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Data Intelligent Handcrafted Steel Mouse",{ $substrBytes: ["back-end",18,0] }]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Ghana"]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Forward indexing"],in: { $sqrt: 50324 }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $indexOfArray: [{ $map: {input: ['$obj.obj.str'],in: { $exp: '$obj.obj.obj.num' }} },{ $arrayElemAt: [[],72647] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $toUpper: '$str' }],['$obj.obj.str',"Rubber"],[],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ['$obj.str',{ $dateToString: {date: new Date("2018-09-06T08:47:46.850Z"),format: "%u-%Y-%w-%Z"} }] },"Cross-platform visualize feed"],[],[],[],["Health connect",'$str'],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoDayOfWeek: { $hour: { $isoWeekYear: { $week: { $dateToParts: {date: { $minute: { $week: { $dayOfWeek: { $minute: { $millesecond: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T15:30:41.104Z",format: "%H-%w-%Z-%L-%G-%U-%%-%V",onNull: { $concatArrays: [] }} } } } } } } },timezone: "Asia/Omsk",iso8601: true} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "generate RSS",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substrCP: [{ $rtrim: {input: { $concat: ["Interactions"] },chars: '$str'} },13,18] },"blue maximize bypass"],['$num'],[3896]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $cmp: [{ $map: {input: [],in: { $exp: 26217 }} },{ $zip: {inputs: [['$obj.obj.num'],[{ $substrBytes: ['$obj.str',19,15] }],[],[],[94915,'$obj.obj.num',42436,78751],[]],useLongestLength: false,defaults: [false]} }] },isoWeek: { $ln: '$obj.num' },minute: { $cmp: [{ $arrayElemAt: [[new Date("2018-09-06T12:57:50.653Z")],65691] },{ $arrayToObject: [[[{ $toString: { $arrayElemAt: [['$obj.obj.obj.num'],{ $ceil: 70268 }] } }]]] }] },timezone: "Asia/Jerusalem"} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: { $concat: ["hacking",'$obj.str',"compressing turquoise"] } },12,8] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $concat: [{ $substrBytes: ['$obj.obj.str',3,10] },'$obj.obj.str'] },"Democratic People's Republic of Korea Rustic"],[],["back-end Self-enabling",{ $substrCP: ["Hat Fresh SMTP",0,15] }],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "calculate metrics",v: { $isoWeekYear: new Date("2018-09-06T19:55:06.440Z") }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[78596],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $trim: {input: "Books Metal",chars: { $toString: { $arrayElemAt: [['$str'],53998] } }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],65872] }, _id: 0}}],

        [{$project: {a: { $range: [6,12] }, _id: 0}}],

        [{$project: {a: { $toUpper: "El Salvador Colon US Dollar" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[89778,31383,'$date'],17022] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $toDate: { $arrayElemAt: [[],{ $trunc: 34574 }] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str','$str',"Maine","hierarchy Philippines"],56525] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [true],as: 'saul',cond: { $ne: [{ $arrayToObject: [[[],['$$saul']]] },{ $second: { $dateFromString: {dateString: "2018-09-06T17:01:49.408Z",format: "%j-%U-%U-%w-%L",timezone: "Indian/Christmas",onError: { $arrayElemAt: [["maximized Dominica"],88229] },onNull: { $toString: { $concatArrays: [['$$saul'],[{ $millesecond: { $week: { $dateToString: {date: new Date("2018-09-06T17:00:20.326Z"),format: "%w-%m-%j-%j-%L-%w-%d",timezone: "Australia/Hobart",onNull: { $dateFromString: {dateString: "2018-09-06T00:15:33.789Z",onNull: { $rtrim: {input: '$$saul',chars: "THX holistic Handmade"} }} }} } } },52198],[],[{ $trim: { input: "reboot Public-key" } },'$$saul','$obj.obj.str']] } }} } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Bermuda",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Checking Account"],cond: { $and: ['$$this'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "interfaces",v: { $toDate: { $arrayElemAt: [["Gorgeous Rubber Pants",{ $toLower: '$obj.obj.str' },{ $toUpper: "matrix" }],96020] } }}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["deliver SMTP",5,11] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Health","XSS"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $substr: ["ivory",1,19] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $dayOfYear: { $dayOfWeek: { $month: { $hour: { $isoWeekYear: { $toDate: { $rtrim: {input: '$str',chars: "District Dalasi Shoes"} } } } } } } } }],38021] }, _id: 0}}],

        [{$project: {a: { $hour: { $second: { $toDate: { $minute: { $week: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T15:56:26.591Z",timezone: "US/Central",onError: { $concatArrays: [[{ $dateToString: {date: '$obj.date',format: "%j-%Y-%u-%M-%G-%V-%L-%Y",onNull: { $arrayToObject: [[['$obj.obj.num']]] }} },'$str'],['$obj.obj.obj.str'],[],[true,36583],[{ $divide: [46955,51160] }]] }} },format: "%j-%u-%U-%d-%V-%U-%d-%U-%Z"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $year: { $hour: { $dateFromString: {dateString: "2018-09-06T01:04:44.727Z",timezone: "Indian/Kerguelen",onNull: { $zip: {inputs: [[{ $substrCP: ['$obj.obj.obj.str',6,10] }]],defaults: [{}]} }} } } },{ $trim: { input: "conglomeration" } }],["Engineer Western Sahara Colorado"],['$obj.obj.obj.str',{ $ltrim: {input: '$str',chars: { $concat: [{ $toLower: "Generic Solutions Communications" }] }} },'$str']]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateToParts: {date: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $abs: '$num' },isoWeek: { $size: [[75225]] },hour: { $multiply: [] },timezone: "Asia/Pontianak"} } },timezone: "Antarctica/Mawson"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "invoice application navigate",v: true},{k: "Visionary",v: "synergy indexing Principal"},{k: "Analyst",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Saint Pierre and Miquelon Implementation Director"],4387] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fresh",v: false},{k: "cyan withdrawal",v: '$str'},{k: "expedite",v: { $dayOfWeek: { $dateToParts: {date: { $dateToString: {date: '$obj.date',format: "%u-%z-%Y-%m-%U-%S-%U-%d",timezone: "Asia/Samarkand",onNull: { $dateToParts: {date: { $isoWeekYear: { $hour: { $dateToParts: { date: { $dateFromParts: {isoWeekYear: { $log10: 87331 },minute: { $add: [17137] },millisecond: '$obj.num'} } } } } },timezone: "Africa/Kinshasa"} }} },iso8601: false} } }}]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T15:48:43.084Z",format: "%z-%M-%d-%z-%U-%M-%L-%U-%%",onError: { $arrayToObject: [[{k: "Ergonomic Group",v: 276},{k: "Zimbabwe Refined Rubber Pants",v: '$obj.obj.obj.num'}]] },onNull: { $substr: ["matrix Nevada",6,18] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Facilitator JBOD",v: true}]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T06:18:08.928Z",timezone: "Asia/Jerusalem"} } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],['$obj.num']],defaults: [[{date: new Date("2018-09-05T20:26:01.461Z"),obj: {}},new Date("2018-09-06T09:30:53.167Z")],"plum lime"]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Oregon Steel Towels",v: true},{k: "Investor",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],{ $pow: [52747,'$obj.obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Dale alarm",v: true}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substr: ["Chair open-source CSS",13,15] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],57803] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $floor: 8184 },month: { $multiply: ['$obj.obj.num'] },minute: '$obj.obj.obj.num'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["alarm Concrete","XML Integration"],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%%-%%-%M-%M-%M-%V-%G-%d",onNull: { $trim: { input: '$obj.obj.str' } }} }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "online Buckinghamshire",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Pennsylvania quantify Handmade",v: false},{k: "Assurance connecting SMTP",v: { $rtrim: {input: "Buckinghamshire Zimbabwe Dollar",chars: '$obj.obj.obj.str'} }}]] }, _id: 0}}],

        [{$project: {a: { $range: [19,20] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Money Market Account",8,17] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: { date: '$obj.obj.date' } },"calculating"],59632] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $ln: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $gte: [{ $isoDayOfWeek: { $dayOfMonth: { $dateToString: { date: { $month: { $isoWeek: { $week: { $millesecond: { $dateToString: {date: new Date("2018-09-06T07:39:15.594Z"),format: "%H-%m-%u-%U-%d-%j-%H-%L-%U",timezone: "Europe/San_Marino",onNull: '$obj.obj.str'} } } } } } } } } },{ $second: { $millesecond: { $year: { $dateFromParts: {year: { $divide: [59818,96492] },month: { $cmp: [{ $arrayToObject: [[{k: "Cape Verde Escudo",v: false},{k: "platforms Hryvnia",v: '$obj.num'}]] },{ $arrayElemAt: [[],83579] }] },day: { $sqrt: '$$this' },hour: { $ceil: 17817 },minute: { $divide: ['$obj.obj.obj.num','$num'] },millisecond: { $size: [['$$this',"Agent target",{ $substrBytes: ['$$this',13,11] }]] }} } } } }] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num'],cond: { $lte: [{ $month: '$obj.obj.obj.date' },{ $concatArrays: [[{ $substrBytes: ["bricks-and-clicks",14,17] }],['$obj.str','$$this',"sky blue object-oriented Handcrafted",{ $substr: ['$obj.str',0,19] }]] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dateFromParts: {year: { $abs: '$num' },hour: { $abs: 71348 },minute: { $indexOfArray: [{ $objectToArray: '$obj.obj' },{ $arrayElemAt: [['$obj.str',"programming Salad Robust"],{ $subtract: [70790,'$obj.num'] }] },1] },millisecond: { $log10: 86801 },timezone: "Atlantic/South_Georgia"} } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "Belize Dollar Optimization Handmade Frozen Shirt",v: new Date("2018-09-06T09:06:10.751Z")},{k: "XML bypassing innovate",v: 65070},{k: "Connecticut Congolese Franc markets",v: true}]] } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $concat: [] },chars: "Dynamic seize solution-oriented"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["digital","National connect"],[{ $ltrim: { input: '$obj.obj.str' } },'$obj.obj.str'],['$obj.num','$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $millesecond: { $month: { $hour: { $dateToParts: { date: { $minute: { $month: { $isoDayOfWeek: { $year: { $week: { $second: { $week: { $toDate: { $arrayElemAt: [["Direct"],57748] } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',"Cambridgeshire"],[],['$obj.obj.obj.num',84086],['$obj.str',{ $rtrim: {input: "bypassing Checking Account",chars: { $ltrim: { input: "Books eco-centric" } }} },{ $trim: {input: '$str',chars: "Dynamic"} },{ $substr: ['$obj.obj.str',16,6] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "synthesizing",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: "collaboration" },'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Liaison purple",v: '$obj.obj.obj.date'},{k: "COM Baby",v: 99563},{k: "Borders Chips Marketing",v: { $week: { $hour: { $dateFromString: {dateString: "2018-09-06T04:20:35.056Z",onError: { $dateFromParts: {isoWeekYear: { $floor: '$obj.num' },isoWeek: { $sqrt: '$obj.obj.num' },isoDayOfWeek: { $pow: ['$obj.num',30639] },second: { $multiply: [{ $pow: ['$num',47552] }] },timezone: "Pacific/Gambier"} },onNull: "New Hampshire payment"} } } }},{k: "implementation Tasty Principal",v: true}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $trim: {input: '$obj.str',chars: "Producer payment Fresh"} },20,1] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],[],["Money Market Account Switzerland"],['$obj.obj.num','$obj.obj.num',86678,11578],[{ $concat: [{ $toString: { $objectToArray: '$obj' } }] },{ $dateToString: {date: new Date("2018-09-06T06:56:15.202Z"),timezone: "Europe/Vatican",onNull: { $arrayElemAt: [[],'$num'] }} }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfMonth: { $week: { $dayOfWeek: { $year: { $second: { $minute: { $millesecond: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $exp: 58536 },isoDayOfWeek: { $cmp: [{ $arrayElemAt: [[],'$obj.obj.num'] },{ $zip: {inputs: [],defaults: [["Ameliorated"],"Central invoice"]} }] },hour: { $divide: ['$obj.num',40052] },second: '$obj.num'} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[57671,4950],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeek: { $hour: { $month: { $toDate: { $arrayToObject: [[{k: "Maryland",v: '$num'},{k: "Down-sized Inverse",v: false}]] } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: "Adaptive Auto Loan Account Licensed Steel Shirt" }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Fantastic backing up generating",13,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Hat withdrawal Senior"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[28028],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',onNull: { $arrayElemAt: [[],{ $subtract: ['$obj.obj.num','$obj.obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Visionary Shores quantifying",{ $toUpper: '$obj.str' }],19874] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrCP: [{ $substrBytes: ["collaboration engineer",8,15] },7,4] } } }, _id: 0}}],

        [{$project: {a: { $second: { $hour: { $dateFromString: {dateString: "2018-09-06T13:19:52.217Z",format: "%G-%H-%L-%V-%u-%L-%j-%d-%S",onError: { $arrayToObject: [[{k: "quantify Health Intranet",v: { $toString: { $substrBytes: ["gold incubate Awesome",16,12] } }}]] },onNull: { $minute: { $dayOfYear: { $dateToParts: {date: { $second: new Date("2018-09-06T06:18:54.592Z") },iso8601: false} } } }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire",v: 69440}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],'$num'] } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: { $trim: {input: '$obj.obj.obj.str',chars: { $toUpper: "El Salvador Awesome" }} }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[77460,'$num'],["Licensed Rubber Mouse",'$str',{ $trim: {input: '$obj.obj.obj.str',chars: { $ltrim: { input: { $substrCP: ["firewall relationships lime",0,15] } } }} }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[3629,71736,{ $log: ['$num',33431] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],["Missouri Re-engineered",{ $substrBytes: ["calculate Wooden Nigeria",2,9] }],['$obj.obj.obj.num'],['$obj.obj.str','$obj.obj.obj.str',{ $rtrim: { input: { $toUpper: '$obj.str' } } }],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $millesecond: { $isoDayOfWeek: { $second: { $dateToString: {date: { $month: { $dayOfWeek: { $dayOfYear: { $month: { $dayOfMonth: { $week: { $second: { $minute: { $dayOfYear: { $isoWeekYear: { $isoWeekYear: { $isoWeek: { $millesecond: { $dateToParts: {date: { $dateFromString: { dateString: "2018-09-06T07:54:28.029Z" } },timezone: "America/Louisville"} } } } } } } } } } } } } } },format: "%U-%S-%Y-%S-%S-%U-%M"} } } } } },"Tools"],64840] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: { input: "Administrator Practical" } }],['$obj.num'],[{ $trim: {input: '$obj.obj.obj.str',chars: '$str'} }]]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeekYear: { $millesecond: { $minute: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-05T23:13:39.745Z"),format: "%m-%V-%H-%S-%%-%S",onNull: { $arrayToObject: [[{k: "Tactics Movies navigate",v: true},{k: "cross-platform system engine static",v: '$obj.obj.date'},{k: "De-engineered Naira",v: '$num'}]] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $week: { $dateToString: {date: '$date',timezone: "PST8PDT"} } },format: "%z-%w-%S-%u-%M-%G",timezone: "Antarctica/Vostok",onNull: { $arrayElemAt: [[87900,'$obj.obj.num'],29690] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Solutions Handmade Mali",v: "Tanzanian Shilling"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],66186] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T04:50:45.017Z"),onNull: { $ltrim: { input: "Chips firewall clear-thinking" } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',"Accountability Gabon Seamless"]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Keyboard"],as: 'lucie',cond: { $and: [32187] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Avon"],70617] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $month: { $isoDayOfWeek: new Date("2018-09-06T12:32:19.913Z") } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:33:13.152Z"),timezone: "America/Kentucky/Louisville",onNull: { $arrayElemAt: [[],58272] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Chicken Lead Puerto Rico",v: true},{k: "JBOD",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',20,1] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.num','$obj.obj.obj.num',80157]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromParts: {year: { $divide: ['$obj.obj.obj.num','$obj.obj.num'] },day: { $log10: '$obj.obj.num' },hour: { $mod: [97496,50067] },minute: { $size: [['$obj.obj.obj.num','$obj.obj.obj.num',{ $abs: 29919 }]] },second: { $cmp: [{ $dayOfMonth: { $millesecond: { $isoDayOfWeek: { $toDate: { $dateToString: {date: { $millesecond: { $minute: { $isoWeekYear: { $isoWeekYear: { $year: { $isoDayOfWeek: { $dayOfWeek: { $year: { $dateToParts: {date: { $week: { $week: { $second: { $toDate: { $map: {input: [],as: 'brielle',in: { $ceil: 63216 }} } } } } },timezone: "America/Noronha",iso8601: true} } } } } } } } } },timezone: "America/Tortola",onNull: { $arrayToObject: [[{k: "instruction set Handmade Fresh Table parsing",v: { $substrCP: ["intranet Generic",2,19] }},{k: "initiative Future",v: new Date("2018-09-06T06:18:26.138Z")},{k: "Fords",v: 81096},{k: "out-of-the-box Soap",v: '$obj.obj.date'}]] }} } } } } },{ $toString: { $arrayToObject: [[['$obj.obj.str',{ $trim: { input: { $rtrim: { input: "Ball Customer Tuna" } } } }],["Practical plum Home Loan Account"],[{ $add: [] }],[],[],[]]] } }] }} } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[94799,'$num'],[],[{ $substrBytes: [{ $toString: { $arrayElemAt: [[],{ $log10: '$obj.obj.obj.num' }] } },16,7] }],['$str'],[{ $dateToString: {date: new Date("2018-09-06T19:31:56.115Z"),format: "%M-%z-%Z-%Y-%z-%L-%L",timezone: "Australia/LHI",onNull: { $year: { $minute: { $isoDayOfWeek: { $month: { $isoWeek: { $hour: { $week: { $year: { $dateToString: { date: '$obj.obj.obj.date' } } } } } } } } } }} },"primary indigo cyan",'$obj.str','$str']] }, _id: 0}}],

        [{$project: {a: { $concat: ["Auto Loan Account Books"] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toLower: { $toString: { $zip: {inputs: [['$obj.str',"Mouse SCSI"],[]],defaults: [10661,"invoice",{}]} } } },19,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"lime"],44398] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[63685],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["core SMS",'$obj.obj.str',"Grenada panel Auto Loan Account",{ $concat: [{ $substr: ['$obj.str',11,11] }] }],69400] }, _id: 0}}],

        [{$project: {a: { $hour: { $year: { $week: { $dateFromParts: {year: { $multiply: [78388] },month: { $ln: '$num' },day: { $subtract: [{ $floor: '$obj.obj.num' },82071] },minute: { $trunc: 43590 },second: { $multiply: [] },timezone: "Asia/Bangkok"} } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],37528] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["generate"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $second: { $dayOfMonth: { $week: { $dateFromString: {dateString: "2018-09-05T22:46:35.608Z",format: "%M-%G-%m-%V-%U-%V-%w-%V-%Y-%U-%G",onNull: { $rtrim: { input: '$str' } }} } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: '$obj.obj.num',hour: { $log: [29335,'$obj.obj.obj.num'] },minute: 31381,second: { $exp: 34280 },millisecond: { $ln: '$num' },timezone: "Australia/Broken_Hill"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $range: [1,5,11] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: '$obj.date' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],6993] }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $toDate: { $objectToArray: '$obj' } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"efficient Forward",{ $substrBytes: ['$obj.obj.str',18,12] }],32599] }, _id: 0}}],

        [{$project: {a: { $toString: { $week: { $dateFromParts: {isoWeekYear: { $abs: '$obj.obj.obj.num' },isoDayOfWeek: { $indexOfArray: [{ $zip: {inputs: [["Incredible Plastic Salad Checking Account",'$obj.obj.obj.str',"Latvia"]],useLongestLength: true,defaults: [84011]} },{ $arrayElemAt: [[],{ $trunc: 35704 }] },1] },second: { $exp: '$num' },millisecond: { $ceil: 79942 }} } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toLower: '$str' } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Table wireless Markets"],in: { $exp: '$num' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.str',15,12] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%L-%S-%u-%u-%Z-%L-%M-%u"} }, _id: 0}}],

        [{$project: {a: { $toLower: "Pennsylvania" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["generate Universal Cotton",{ $substr: ["Architect cross-platform",4,12] },"Savings Account"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

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
