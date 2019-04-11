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
        return coll.insert({_id: 16835,str: "Sleek Steel Hat Programmable",num: 28199,date: new Date("2018-09-06T01:46:28.910Z"),array: [],obj: {_id: 16836,num: 44293,date: new Date("2018-09-06T10:39:20.451Z"),array: [{_id: 16837,str: "Personal Loan Account task-force",array: [],obj: {}},"Codes specifically reserved for testing purposes solid state Small Concrete Fish","Euro",new Date("2018-09-06T19:26:04.952Z"),[],4042,61015,new Date("2018-09-06T13:11:53.890Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16838,str: "Cheese",num: 43944,date: new Date("2018-09-05T23:01:55.146Z"),array: [new Date("2018-09-06T05:30:59.979Z"),65137,"Persevering",39065,new Date("2018-09-06T17:40:27.667Z"),{_id: 16839,str: "Mall",date: new Date("2018-09-06T03:27:10.310Z"),array: [],obj: {}},{_id: 16840,str: "Rubber",date: new Date("2018-09-06T07:05:43.911Z"),obj: {_id: 16841,str: "calculate optical e-commerce",num: 41794,array: ["SSL",96127],obj: {}}},new Date("2018-09-06T03:06:35.421Z"),"complexity"]});
    },

    function(coll) {
        return coll.insert({_id: 16842,str: "Ohio",num: 90371,date: new Date("2018-09-06T19:23:08.170Z"),array: [],obj: {_id: 16843,str: "Communications encoding",date: new Date("2018-09-06T12:54:48.215Z"),obj: {_id: 16844,str: "program Solutions RAM",num: 45972,date: new Date("2018-09-06T01:46:54.845Z"),array: [29457,new Date("2018-09-06T08:25:38.078Z"),72968,"synthesize",new Date("2018-09-06T18:07:26.696Z"),new Date("2018-09-06T10:57:52.803Z"),"Factors CFP Franc",new Date("2018-09-06T13:39:50.343Z"),"cultivate","Latvian Lats Maryland Chief"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16845,str: "New Jersey silver",num: 90593,date: new Date("2018-09-06T12:28:48.999Z"),array: [71604,37068,8242,[new Date("2018-09-06T09:31:28.539Z"),[]],"Hryvnia",new Date("2018-09-06T15:47:05.122Z"),"encoding Massachusetts",new Date("2018-09-05T22:23:44.572Z"),{_id: 16846,str: "maximize well-modulated",num: 33517,date: new Date("2018-09-05T23:35:28.147Z"),array: [],obj: {}},"quantify",{_id: 16847,str: "Handmade Intranet Polarised",date: new Date("2018-09-06T12:56:56.433Z"),obj: {_id: 16848,num: 51148,date: new Date("2018-09-06T08:15:44.779Z"),obj: {}}}],obj: {_id: 16849,str: "Malaysian Ringgit partnerships FTP",num: 67900,date: new Date("2018-09-06T15:49:24.931Z"),array: [],obj: {_id: 16850,str: "payment Technician",num: 25238,array: [26536,new Date("2018-09-06T19:35:27.735Z"),{_id: 16851,num: 84388,date: new Date("2018-09-06T02:18:20.567Z"),array: [new Date("2018-09-06T02:18:29.035Z")]},new Date("2018-09-05T21:00:12.662Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 16852,str: "bricks-and-clicks",num: 6344,date: new Date("2018-09-05T23:38:31.652Z")});
    },

    function(coll) {
        return coll.insert({_id: 16853,str: "virtual Senior Cambridgeshire",num: 43723,date: new Date("2018-09-06T14:21:05.468Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16854,num: 64168,date: new Date("2018-09-06T15:43:17.437Z"),array: [new Date("2018-09-06T08:30:01.372Z"),59992,"Home","circuit methodologies Computers",new Date("2018-09-06T03:18:15.765Z"),{_id: 16855,num: 60372,date: new Date("2018-09-05T23:56:55.136Z"),array: [],obj: {_id: 16856,str: "Pakistan Rupee withdrawal reciprocal",num: 97539,array: [new Date("2018-09-06T03:58:55.575Z"),"Global Soap monitoring",new Date("2018-09-06T06:54:05.897Z"),[]],obj: {}}},19195,71265]});
    },

    function(coll) {
        return coll.insert({_id: 16857,str: "Investment Account",num: 24324,date: new Date("2018-09-06T04:35:24.552Z"),array: [],obj: {_id: 16858,str: "Money Market Account",num: 51362,date: new Date("2018-09-06T19:46:26.250Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 16859,str: "Health Cuban Peso Peso Convertible",obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16860,str: "Handcrafted Practical",num: 73552,date: new Date("2018-09-05T21:26:45.540Z"),array: ["markets Michigan e-enable",new Date("2018-09-06T15:23:20.222Z"),"Wallis and Futuna Dynamic",[89538,new Date("2018-09-06T05:47:53.003Z"),new Date("2018-09-06T17:43:51.640Z"),68958],{_id: 16861,num: 16386,date: new Date("2018-09-06T05:33:26.472Z"),array: [],obj: {}},new Date("2018-09-06T06:49:26.556Z"),{_id: 16862,str: "Cambridgeshire invoice systems",array: [],obj: {}},[],41467,"Direct Fresh"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16863,str: "cultivate Liaison",num: 28302,date: new Date("2018-09-06T12:56:17.969Z"),obj: {_id: 16864,str: "hard drive Fantastic Metal Gloves",num: 31130,date: new Date("2018-09-06T02:56:25.028Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16865,str: "bi-directional index",num: 19643,array: [21242,new Date("2018-09-06T18:34:32.266Z"),[new Date("2018-09-06T04:37:20.273Z"),89040,[],"navigating Intelligent Cotton Ball"],"moderator Honduras",{_id: 16866,str: "didactic Grocery Brand",num: 71098,date: new Date("2018-09-05T22:11:38.310Z"),array: [],obj: {_id: 16867,date: new Date("2018-09-06T06:44:42.481Z"),array: [],obj: {}}},[{_id: 16868,str: "Industrial panel",num: 19220,date: new Date("2018-09-06T09:12:42.031Z"),obj: {_id: 16869,str: "enterprise Home Park",num: 51344}},"tan copy Cambridgeshire",{_id: 16870,str: "Forges Lao People's Democratic Republic ivory",date: new Date("2018-09-06T14:23:42.254Z"),array: ["e-business"],obj: {}},44707],74395,new Date("2018-09-06T12:53:27.558Z"),new Date("2018-09-06T11:51:41.509Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16871,str: "moderator",num: 26965,date: new Date("2018-09-06T04:58:40.287Z"),array: [["Bedfordshire",new Date("2018-09-06T00:23:31.662Z"),35705],51649,new Date("2018-09-06T13:07:17.162Z"),70388,[],"Configuration heuristic Generic",new Date("2018-09-05T23:29:40.939Z"),{_id: 16872,str: "quantifying Borders coherent",num: 45943,array: ["Outdoors incentivize Baht",new Date("2018-09-06T10:33:51.370Z"),{_id: 16873,num: 8062,date: new Date("2018-09-06T18:48:10.252Z"),obj: {_id: 16874,str: "Infrastructure Investment Account withdrawal",date: new Date("2018-09-06T00:47:54.502Z"),array: []}}],obj: {}},4802,new Date("2018-09-06T07:43:11.362Z"),81882],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16875,str: "Berkshire",date: new Date("2018-09-06T03:54:14.653Z"),array: [{_id: 16876,str: "Turkmenistan",num: 9315,date: new Date("2018-09-05T21:46:24.403Z"),array: [],obj: {_id: 16877,str: "Cuba",num: 34394,date: new Date("2018-09-05T23:09:53.976Z"),array: ["throughput Aruban Guilder"],obj: {_id: 16878,str: "Ergonomic Frozen Chips",num: 64776,date: new Date("2018-09-06T17:50:23.615Z"),array: [33454],obj: {_id: 16879,str: "Savings Account",num: 37731}}}},71203,"synergize Costa Rica",new Date("2018-09-06T04:23:03.100Z"),75477,23396,[],new Date("2018-09-06T03:53:09.036Z"),new Date("2018-09-05T21:05:47.443Z"),[],{_id: 16880,array: [50776,new Date("2018-09-06T00:22:08.975Z"),[],"Future-proofed Practical Steel Chair Argentine Peso"],obj: {}},new Date("2018-09-06T06:00:42.587Z"),"plum Customer"],obj: {_id: 16881,num: 80258,date: new Date("2018-09-06T17:00:34.828Z")}});
    },

    function(coll) {
        return coll.insert({_id: 16882,num: 70315,date: new Date("2018-09-05T20:52:50.477Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16883,str: "Balboa US Dollar Berkshire",date: new Date("2018-09-06T06:57:39.101Z"),array: [],obj: {_id: 16884,num: 84295,array: [],obj: {_id: 16885,str: "Producer RSS driver",num: 86578,date: new Date("2018-09-06T01:25:17.728Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 16886,str: "Dynamic",num: 97700,date: new Date("2018-09-06T19:51:02.300Z"),array: [new Date("2018-09-06T10:37:42.246Z"),"sensor Incredible",new Date("2018-09-06T01:57:10.245Z"),"blue e-commerce",32814,72466,53841,new Date("2018-09-06T13:01:31.280Z"),"Steel",{_id: 16887,str: "cross-media transmitter",date: new Date("2018-09-06T04:56:07.816Z"),array: [79803,new Date("2018-09-06T08:15:52.649Z"),[],{_id: 16888,str: "Auto Loan Account",num: 97715,obj: {_id: 16889,str: "circuit invoice",obj: {}}}],obj: {_id: 16890,num: 13464,date: new Date("2018-09-06T16:54:40.056Z"),array: [],obj: {_id: 16891,str: "Tunisian Dinar dedicated",num: 50490,date: new Date("2018-09-06T08:11:45.276Z"),array: ["Lead overriding Open-source"]}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16892,str: "back up Berkshire",num: 54351,date: new Date("2018-09-06T15:14:46.287Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16893,str: "application Cotton virtual",num: 81475,date: new Date("2018-09-06T18:23:54.546Z"),array: [85188,"mint green Assistant Way",new Date("2018-09-06T15:24:34.197Z"),"Principal",88432,new Date("2018-09-06T13:43:02.749Z"),{_id: 16894,num: 48142,date: new Date("2018-09-06T15:57:46.771Z"),array: [],obj: {_id: 16895,str: "optimize plug-and-play applications",num: 5208,date: new Date("2018-09-06T07:19:07.144Z"),array: [62135,"Diverse",new Date("2018-09-06T07:01:17.936Z"),[86064,47278],{_id: 16896,str: "cross-platform",date: new Date("2018-09-06T11:43:30.133Z"),array: [],obj: {_id: 16897,str: "Walks Avon",num: 49020,date: new Date("2018-09-06T07:10:26.709Z")}}],obj: {_id: 16898,str: "Beauty",array: [new Date("2018-09-05T21:31:52.288Z"),{_id: 16899,str: "Refined haptic",obj: {}}]}}},[]],obj: {_id: 16900,num: 26447,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16901,str: "engineer Health",num: 53989,date: new Date("2018-09-05T21:54:10.065Z"),obj: {_id: 16902,str: "mindshare Kentucky Peru",date: new Date("2018-09-06T17:46:45.233Z"),array: [],obj: {_id: 16903,str: "payment Auto Loan Account",num: 26982,date: new Date("2018-09-06T09:40:24.907Z"),array: [{_id: 16904,str: "Wyoming dot-com",num: 30952,date: new Date("2018-09-06T13:23:07.392Z"),array: [],obj: {}},53707,new Date("2018-09-06T03:07:55.614Z"),"extensible",27692,[[],{_id: 16905,num: 50840,date: new Date("2018-09-06T14:10:41.574Z"),array: [],obj: {}},new Date("2018-09-06T01:55:37.511Z")],new Date("2018-09-06T18:44:27.406Z"),"mobile capability","Louisiana",{_id: 16906,str: "Frozen bypass",num: 24664,array: [71097,"systems Cross-platform Borders",new Date("2018-09-06T00:09:51.986Z"),{_id: 16907,str: "supply-chains Personal Loan Account",date: new Date("2018-09-06T12:16:57.396Z"),array: []}]},new Date("2018-09-06T04:32:27.915Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16908,str: "input",num: 91253,date: new Date("2018-09-06T19:45:57.337Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16909,str: "Rustic Rubber Table",num: 96360,date: new Date("2018-09-06T08:29:51.896Z"),array: [["Advanced strategize","Awesome","copy"],new Date("2018-09-06T16:48:42.768Z"),81219,47237,63797,{_id: 16910,str: "Clothing Azerbaijanian Manat Steel",date: new Date("2018-09-06T07:50:42.679Z"),array: [new Date("2018-09-05T20:16:15.321Z"),{_id: 16911,num: 52079,array: [],obj: {_id: 16912,str: "Gorgeous Metal Gloves Managed Adaptive",num: 57021,date: new Date("2018-09-06T02:26:39.916Z"),array: [],obj: {}}},13341,[new Date("2018-09-06T01:00:00.428Z")],{_id: 16913,str: "Kansas",date: new Date("2018-09-06T11:16:23.075Z"),array: [],obj: {}}],obj: {}},"Product","Streets 24/365",new Date("2018-09-06T00:26:47.324Z"),new Date("2018-09-06T17:38:10.079Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 16914,str: "deposit",num: 50060,date: new Date("2018-09-06T14:36:04.850Z"),array: [],obj: {_id: 16915,str: "District microchip",date: new Date("2018-09-06T05:01:17.311Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16916,str: "SCSI Tasty Granite Pants",num: 52678,date: new Date("2018-09-05T23:48:13.661Z"),array: [new Date("2018-09-05T21:40:49.936Z"),new Date("2018-09-06T06:49:43.343Z"),"convergence Response",{_id: 16917,str: "feed feed",num: 9258,date: new Date("2018-09-05T22:09:33.136Z"),obj: {}},"Skyway Officer",44708,new Date("2018-09-06T09:55:05.711Z"),43518,"Senior architect Liaison",{_id: 16918,num: 82989,date: new Date("2018-09-05T23:17:35.967Z"),array: ["Stand-alone index alarm",44840,[]],obj: {}},84349],obj: {_id: 16919,str: "transmitter connecting",date: new Date("2018-09-06T14:15:48.448Z"),array: [[],"Configurable Orchestrator neural",new Date("2018-09-06T02:12:09.239Z"),new Date("2018-09-05T20:59:30.765Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16920,str: "Refined Liaison redundant",num: 83333,date: new Date("2018-09-06T10:56:25.360Z"),array: [],obj: {_id: 16921,str: "Avon 3rd generation Executive",num: 32458,date: new Date("2018-09-06T07:41:08.429Z"),array: [],obj: {_id: 16922,date: new Date("2018-09-06T08:50:48.298Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16923,str: "pixel generate Human",num: 18269,date: new Date("2018-09-06T03:23:42.013Z"),array: [96056,"encryption Refined Dale",[],62048,new Date("2018-09-06T06:34:27.957Z"),"hack transmitter",new Date("2018-09-06T17:10:13.882Z"),32162,{_id: 16924,str: "monitor Garden",num: 77823,date: new Date("2018-09-06T01:48:28.536Z"),array: [{_id: 16925,str: "alarm navigate",num: 78004,date: new Date("2018-09-06T04:39:16.201Z"),array: [new Date("2018-09-06T17:31:02.060Z")],obj: {_id: 16926,num: 98262,date: new Date("2018-09-05T22:41:56.952Z"),array: [],obj: {}}}],obj: {}},[16037,new Date("2018-09-06T19:06:16.680Z")],new Date("2018-09-06T08:09:45.162Z"),"Flats Intelligent",22540,new Date("2018-09-06T12:16:19.535Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16927,str: "maximize SDR",num: 1735,date: new Date("2018-09-06T04:15:20.268Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16928,str: "systems",num: 79167,date: new Date("2018-09-06T03:45:48.388Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16929,str: "systems Coordinator",num: 91076,date: new Date("2018-09-06T17:22:31.181Z"),array: [27524,{_id: 16930,str: "Small Games",num: 69588,obj: {_id: 16931,str: "Sleek Cotton Bike aggregate Internal",num: 64922,date: new Date("2018-09-06T18:28:31.875Z"),array: []}},"Granite Fort Locks",new Date("2018-09-06T17:23:17.320Z"),new Date("2018-09-06T05:15:00.638Z"),[],{_id: 16932,str: "synthesizing portals",array: [],obj: {}},[],"Fantastic Soft Chair",new Date("2018-09-06T06:37:54.092Z")],obj: {_id: 16933,num: 88000,date: new Date("2018-09-06T09:50:49.647Z"),obj: {_id: 16934,str: "navigating JBOD",num: 23993,date: new Date("2018-09-06T18:15:05.516Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 16935,str: "Buckinghamshire",num: 97622,date: new Date("2018-09-06T02:01:21.255Z"),array: [],obj: {_id: 16936,str: "eyeballs ivory",num: 7387,date: new Date("2018-09-06T00:03:50.087Z"),array: [],obj: {_id: 16937,str: "Computers hack",date: new Date("2018-09-06T07:15:13.022Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 16938,str: "Rue virtual",num: 1465,date: new Date("2018-09-06T11:19:45.873Z")});
    },

    function(coll) {
        return coll.insert({_id: 16939,str: "payment Plastic",num: 96307,date: new Date("2018-09-06T04:20:58.819Z"),array: [],obj: {_id: 16940,str: "Metrics Mississippi reboot",num: 80746,date: new Date("2018-09-06T19:25:52.093Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 16941,str: "Wisconsin Home Loan Account synergies",num: 52040,date: new Date("2018-09-06T08:14:32.662Z"),array: [],obj: {_id: 16942,str: "B2C Boliviano Mvdol Personal Loan Account",num: 72412,date: new Date("2018-09-05T20:46:14.329Z"),array: [new Date("2018-09-06T19:24:04.342Z"),48589,"Fresh",84320,{_id: 16943,str: "Kids Integration",num: 34067,date: new Date("2018-09-06T17:54:03.330Z"),array: [[78325],"Estonia"],obj: {}},new Date("2018-09-06T00:38:59.472Z"),"National lime",[],"azure Fish",27264,{_id: 16944,str: "reboot index",array: []},new Date("2018-09-06T03:41:51.404Z"),"Mongolia"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16945,str: "Rwanda Franc cross-platform Checking Account",num: 77820,array: ["Practical",56912,56373,{_id: 16946,str: "back up CFA Franc BEAC connect",num: 72267,date: new Date("2018-09-06T12:31:34.204Z"),array: [],obj: {_id: 16947,str: "Future",date: new Date("2018-09-06T07:42:55.501Z"),array: [new Date("2018-09-06T07:22:37.471Z")],obj: {_id: 16948,str: "Versatile Functionality",num: 36746,date: new Date("2018-09-06T04:38:37.034Z"),array: [],obj: {}}}},99006,new Date("2018-09-06T05:34:40.020Z"),[new Date("2018-09-06T03:02:51.178Z"),"Handmade",{_id: 16949,str: "Operations",num: 41050,obj: {}},new Date("2018-09-05T20:00:44.431Z"),"Incredible Soft Shirt payment"],[],[],"compress conglomeration",new Date("2018-09-06T16:53:43.283Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16950,str: "overriding",num: 88597,date: new Date("2018-09-06T19:38:06.719Z"),array: [],obj: {_id: 16951,str: "implement Architect",num: 88641,date: new Date("2018-09-05T21:40:20.257Z"),array: [new Date("2018-09-06T01:38:42.807Z"),38709,15492,53411,"azure Practical Plastic Sausages Maine",["matrix lime supply-chains",new Date("2018-09-06T11:03:02.716Z")],new Date("2018-09-06T11:44:40.315Z"),["data-warehouse Sharable Belize Dollar",new Date("2018-09-06T19:09:46.482Z")],"Crossing GB",{_id: 16952,str: "Unbranded Centralized",num: 70745,obj: {}},{_id: 16953,str: "Tasty Fantastic Intranet",date: new Date("2018-09-06T09:53:09.552Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 16954,str: "Small methodology EXE",num: 86734,date: new Date("2018-09-06T17:45:06.273Z"),array: [new Date("2018-09-06T10:38:24.290Z"),"Auto Loan Account Division real-time",68567,new Date("2018-09-06T05:31:47.734Z"),67853,new Date("2018-09-06T00:27:26.498Z"),"matrix",new Date("2018-09-05T21:31:20.700Z"),[],"Principal Suriname","Public-key",83961]});
    },

    function(coll) {
        return coll.insert({_id: 16955,str: "British Indian Ocean Territory (Chagos Archipelago) Intelligent",num: 72572,date: new Date("2018-09-05T20:51:39.270Z"),array: [new Date("2018-09-06T14:16:49.885Z"),[],new Date("2018-09-05T20:17:22.335Z"),52192,["Turkish Lira bypassing moderator",{_id: 16956,str: "Ohio",date: new Date("2018-09-05T23:38:45.942Z"),array: [new Date("2018-09-05T22:31:25.333Z")],obj: {}},{_id: 16957,num: 24057,date: new Date("2018-09-06T12:31:11.989Z"),array: [],obj: {}},25325,new Date("2018-09-06T00:15:08.174Z"),new Date("2018-09-06T09:38:00.558Z"),{_id: 16958,str: "Oval e-services Pizza",num: 94051,date: new Date("2018-09-06T04:45:17.162Z")}],"TCP",12215,"Assistant Avon",new Date("2018-09-05T23:03:27.387Z"),"Home next-generation Consultant"]});
    },

    function(coll) {
        return coll.insert({_id: 16959,str: "ubiquitous Mountains",num: 13082,date: new Date("2018-09-06T05:32:55.209Z"),array: ["Operations",98954,new Date("2018-09-05T20:41:02.727Z"),128,"driver Tasty Markets",[19546,new Date("2018-09-06T04:43:57.910Z"),{_id: 16960,date: new Date("2018-09-06T11:39:13.657Z"),array: [],obj: {_id: 16961,str: "Toys",num: 10722,array: [new Date("2018-09-06T12:29:39.711Z")],obj: {}}},[]],"Clothing",{_id: 16962,str: "Home Holy See (Vatican City State)",num: 6138,date: new Date("2018-09-06T12:03:46.020Z")},"Facilitator cross-platform Auto Loan Account",81342,new Date("2018-09-06T01:38:59.659Z"),"visionary",[{_id: 16963,str: "bandwidth",array: [],obj: {}}]],obj: {_id: 16964,num: 23551,date: new Date("2018-09-05T20:53:35.110Z")}});
    },

    function(coll) {
        return coll.insert({_id: 16965,str: "Steel Creative",num: 60465,date: new Date("2018-09-05T21:40:56.408Z"),array: [5016,new Date("2018-09-06T01:02:17.107Z"),89226,"Shirt",new Date("2018-09-06T15:17:02.730Z"),new Date("2018-09-06T19:27:39.749Z"),"matrix payment",[],83959,[],61093,new Date("2018-09-06T18:25:46.791Z"),"enable",31092],obj: {_id: 16966,str: "payment structure",num: 13614,date: new Date("2018-09-06T16:56:24.713Z"),array: [new Date("2018-09-06T03:22:30.632Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16967,str: "GB",date: new Date("2018-09-06T04:15:20.222Z"),array: [],obj: {_id: 16968,str: "Tuna Multi-layered",date: new Date("2018-09-06T02:15:21.754Z"),array: [new Date("2018-09-06T03:08:27.492Z"),"program Hat invoice","revolutionary Maryland Tactics",78843,{_id: 16969,str: "Associate asymmetric",num: 87237,date: new Date("2018-09-06T01:36:25.391Z"),array: [new Date("2018-09-06T03:17:05.402Z"),{_id: 16970,num: 64751,obj: {}},[],new Date("2018-09-06T18:23:06.724Z"),91422,[new Date("2018-09-06T05:27:38.737Z")],"Avon pixel"],obj: {}},72302,"Plastic explicit white"]}});
    },

    function(coll) {
        return coll.insert({_id: 16971,str: "intuitive Metal PNG",num: 48442,date: new Date("2018-09-05T22:10:00.568Z"),obj: {_id: 16972,str: "copy Metal Isle",num: 51710,date: new Date("2018-09-06T09:47:29.063Z"),array: [],obj: {_id: 16973,num: 5919,array: [new Date("2018-09-06T11:01:50.626Z"),"protocol leverage",52,new Date("2018-09-05T21:32:07.152Z"),{_id: 16974,str: "eyeballs bus collaborative",date: new Date("2018-09-05T23:53:42.727Z"),array: [new Date("2018-09-05T21:58:53.558Z"),{_id: 16975,str: "extranet Hawaii",num: 52429,date: new Date("2018-09-06T03:08:10.663Z"),array: [[],new Date("2018-09-06T15:46:13.097Z"),[],56867],obj: {}},"Future",77802],obj: {}},new Date("2018-09-05T22:15:32.425Z"),"redundant National","ADP payment Brazilian Real",91014,{_id: 16976,date: new Date("2018-09-05T23:59:27.857Z"),obj: {_id: 16977,date: new Date("2018-09-06T06:51:36.352Z")}},"ivory reboot","Borders Burkina Faso"],obj: {_id: 16978,str: "Fantastic Rubber Shirt web-readiness",num: 78465,array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 16979,str: "De-engineered Refined Frozen Chips Buckinghamshire",num: 95174,date: new Date("2018-09-06T09:06:08.513Z"),array: [],obj: {_id: 16980,str: "Central",num: 88679,date: new Date("2018-09-06T19:43:36.884Z"),array: ["Handcrafted Plastic Hat Borders transmit","multi-byte bluetooth",new Date("2018-09-05T19:57:17.367Z"),new Date("2018-09-06T02:42:47.153Z"),84330,new Date("2018-09-05T20:22:38.681Z"),{_id: 16981,num: 92855,date: new Date("2018-09-06T07:08:20.910Z"),array: [],obj: {}},[21251],77974,["Dynamic","Comoro Franc next-generation Awesome",{_id: 16982,str: "generating",num: 16050,date: new Date("2018-09-06T10:05:13.498Z"),array: [],obj: {_id: 16983,num: 70608,array: [],obj: {}}}],{_id: 16984,str: "stable Iowa Ohio",date: new Date("2018-09-06T04:48:12.234Z")},new Date("2018-09-06T03:29:19.450Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16985,str: "Bhutan Zambian Kwacha",num: 30015,date: new Date("2018-09-05T21:50:29.268Z"),array: [],obj: {_id: 16986,str: "Ball architect",num: 91177,array: [new Date("2018-09-06T18:01:35.523Z"),89143,"XSS Checking Account",new Date("2018-09-05T20:00:46.749Z"),[],"structure Fresh Manager","neural parse Practical",56797,new Date("2018-09-06T04:17:12.313Z"),new Date("2018-09-05T23:55:20.413Z"),5737],obj: {_id: 16987,str: "back-end",num: 3096,date: new Date("2018-09-06T04:18:46.647Z"),array: [new Date("2018-09-06T04:40:00.995Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16988,str: "Peso Uruguayo Uruguay Peso en Unidades Indexadas Regional Ergonomic Frozen Soap",num: 51585,date: new Date("2018-09-05T19:57:22.040Z"),array: [],obj: {_id: 16989,str: "Divide connecting methodical",num: 77201,date: new Date("2018-09-06T19:53:06.853Z"),array: [60402,79797,new Date("2018-09-06T02:39:02.664Z"),["Practical Fresh Gloves"],"virtual",new Date("2018-09-05T20:20:19.441Z"),"Som",{_id: 16990,str: "Cambridgeshire Refined",num: 63102,date: new Date("2018-09-06T06:21:32.865Z"),array: [],obj: {_id: 16991,str: "primary",date: new Date("2018-09-06T08:28:32.852Z")}},new Date("2018-09-06T11:53:48.620Z"),{_id: 16992,str: "Computers Nakfa",num: 7316,array: [],obj: {_id: 16993,num: 22942,date: new Date("2018-09-06T14:12:47.503Z"),array: [77821,21348,new Date("2018-09-05T20:51:08.745Z"),"Program",new Date("2018-09-05T20:34:12.615Z")],obj: {}}},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16994,str: "Rustic Rubber Car",num: 53738,date: new Date("2018-09-06T06:42:17.414Z"),array: [],obj: {_id: 16995,str: "program Cross-group",date: new Date("2018-09-06T05:48:48.299Z"),array: [21785,new Date("2018-09-05T20:38:01.889Z"),"Lead",new Date("2018-09-05T23:28:50.785Z"),9725,"Electronics Colombian Peso Unidad de Valor Real Mountains",{_id: 16996,num: 24151,date: new Date("2018-09-05T23:48:17.399Z"),obj: {}},53718,{_id: 16997,str: "white Home Loan Account",array: [[],"bandwidth",51165,new Date("2018-09-06T02:04:53.323Z")]}],obj: {_id: 16998,str: "Wooden transmitting channels",array: [{_id: 16999,num: 26134,date: new Date("2018-09-06T00:41:39.871Z"),array: [],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 17000,str: "composite overriding",num: 12445,date: new Date("2018-09-05T22:22:03.047Z"),array: [],obj: {_id: 17001,str: "solid state",num: 33281,date: new Date("2018-09-06T12:54:28.938Z"),array: [new Date("2018-09-06T09:13:39.084Z"),43947,21624,"Rustic Frozen Gloves",57140,{_id: 17002,str: "Clothing",obj: {}},["paradigm turquoise Pizza"],{_id: 17003,date: new Date("2018-09-06T14:34:37.884Z"),array: [],obj: {}},{_id: 17004,str: "alarm",num: 49928,date: new Date("2018-09-06T17:05:16.310Z"),array: [19191]},new Date("2018-09-06T15:43:59.430Z"),new Date("2018-09-06T00:45:51.783Z"),"THX Hat payment","portals PCI Granite"]}});
    },

    function(coll) {
        return coll.insert({_id: 17005,str: "Checking Account",num: 29032,date: new Date("2018-09-06T01:05:25.404Z"),array: [[],17842,34671,64482,new Date("2018-09-06T02:46:57.188Z"),"connect","plum","service-desk Gloves",new Date("2018-09-06T00:14:42.186Z"),46046,new Date("2018-09-06T06:03:36.468Z"),{_id: 17006,str: "Small Plastic Hat Cross-platform",date: new Date("2018-09-06T07:06:32.887Z"),array: [{_id: 17007,str: "Tokelau Organic Car",num: 89772,date: new Date("2018-09-05T22:26:53.416Z"),obj: {_id: 17008,str: "Administrator hierarchy Buckinghamshire",num: 18043,date: new Date("2018-09-05T20:48:38.629Z"),array: []}},[["online models",new Date("2018-09-06T10:46:16.675Z")],new Date("2018-09-06T06:30:08.602Z")],"analyzing Denar Jewelery","grow"]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17009,str: "Singapore redundant",num: 7241,date: new Date("2018-09-06T08:06:47.125Z"),array: [],obj: {_id: 17010,num: 48308,date: new Date("2018-09-06T19:48:58.875Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17011,str: "Adaptive compelling",num: 20294,date: new Date("2018-09-06T11:44:46.811Z"),array: ["Avon Avon blue",new Date("2018-09-06T08:29:11.314Z"),38089,[],"integrated El Salvador Colon US Dollar Cambridgeshire","models action-items",45324,6683,new Date("2018-09-06T17:57:21.504Z"),new Date("2018-09-06T16:07:20.694Z"),{_id: 17012,str: "Consultant",num: 67991,array: [new Date("2018-09-06T08:44:33.028Z"),"implement payment open-source"],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17013,str: "generate",num: 91665,date: new Date("2018-09-06T04:56:54.169Z"),obj: {_id: 17014,str: "revolutionary",num: 8411,date: new Date("2018-09-06T17:15:05.577Z"),array: [new Date("2018-09-06T19:38:40.609Z"),"orchid Tennessee",[],13707,[],35595,"sensor copying transform",new Date("2018-09-06T02:53:33.013Z"),"cohesive",97669],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17015,str: "Hat Intranet Engineer",num: 26816,date: new Date("2018-09-05T20:08:53.776Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17016,str: "experiences generating",num: 55124,date: new Date("2018-09-06T04:57:59.032Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17017,str: "maroon",num: 13340,date: new Date("2018-09-06T01:18:40.606Z"),array: [new Date("2018-09-06T18:06:02.489Z"),new Date("2018-09-05T23:53:09.809Z"),new Date("2018-09-06T11:48:09.517Z"),[],3004,new Date("2018-09-05T20:49:05.924Z"),"firewall online",[[],4745,"benchmark Home Loan Account Refined Fresh Pizza",55222,new Date("2018-09-06T19:16:39.100Z"),"Divide",{_id: 17018,str: "Developer Security",num: 57747,date: new Date("2018-09-06T07:47:16.818Z"),array: [],obj: {_id: 17019,num: 12483,date: new Date("2018-09-06T03:31:57.621Z"),array: [{_id: 17020,num: 71030,date: new Date("2018-09-06T15:31:44.272Z"),obj: {}}]}}]]});
    },

    function(coll) {
        return coll.insert({_id: 17021,str: "Investment Account Central Buckinghamshire",num: 17053,date: new Date("2018-09-06T01:11:22.938Z"),array: [],obj: {_id: 17022,str: "web services Fresh Alley",num: 99989,date: new Date("2018-09-06T02:03:25.051Z"),array: [78764,"web-readiness Tactics benchmark",[],59198,new Date("2018-09-06T07:40:42.802Z"),new Date("2018-09-05T20:36:04.472Z"),new Date("2018-09-06T11:56:49.558Z"),"Officer","Zloty Hat",{_id: 17023,str: "methodical Open-architected",num: 46540,date: new Date("2018-09-06T14:37:31.570Z"),obj: {}},[[new Date("2018-09-05T22:02:44.015Z")]],78806,{_id: 17024,num: 92516,array: [],obj: {_id: 17025,date: new Date("2018-09-05T20:36:12.556Z"),obj: {}}},"pixel Kenyan Shilling"]}});
    },

    function(coll) {
        return coll.insert({_id: 17026,str: "mobile encoding",num: 51736,date: new Date("2018-09-06T09:35:32.582Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17027,str: "Outdoors online Borders",num: 95127,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17028,str: "Virginia HTTP",num: 86390,date: new Date("2018-09-06T10:34:26.694Z"),array: [new Date("2018-09-06T16:48:21.784Z"),[],"Sports port bypassing",16081,["core"],44281,new Date("2018-09-05T20:25:51.679Z"),{_id: 17029,num: 3495,date: new Date("2018-09-06T03:14:46.198Z"),obj: {_id: 17030,str: "sticky CSS overriding",date: new Date("2018-09-06T15:53:30.964Z"),array: [new Date("2018-09-06T12:48:02.827Z"),"focus group Nebraska application",57519]}},"motivating",{_id: 17031,str: "morph synthesize",num: 57979,array: [{_id: 17032,str: "bypass quantifying",num: 28417,date: new Date("2018-09-06T19:29:54.870Z"),array: [[],{_id: 17033,str: "deposit Saint Vincent and the Grenadines",num: 99360,obj: {_id: 17034,num: 84478,date: new Date("2018-09-06T02:24:30.945Z")}},"solution open-source"],obj: {_id: 17035,str: "knowledge user Incredible Steel Car",array: [],obj: {_id: 17036,str: "Savings Account",num: 65850,array: [],obj: {}}}},new Date("2018-09-05T21:33:40.750Z")],obj: {}},97543,43769]});
    },

    function(coll) {
        return coll.insert({_id: 17037,str: "bluetooth supply-chains Customer",date: new Date("2018-09-05T23:36:39.518Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17038,str: "leverage Electronics",date: new Date("2018-09-06T04:27:54.768Z"),array: [],obj: {_id: 17039,num: 54526,date: new Date("2018-09-06T16:34:39.196Z"),array: [83697,"Directives","Shoes Fantastic",new Date("2018-09-06T17:54:47.605Z"),90008,new Date("2018-09-06T11:10:44.268Z"),new Date("2018-09-05T22:29:17.767Z"),{_id: 17040,str: "PNG Handmade Metal Chair",num: 2978,date: new Date("2018-09-05T22:48:28.096Z"),array: [95382,["models back up",[]],40174,new Date("2018-09-06T02:30:16.966Z"),"Personal Loan Account"],obj: {}},51745,{_id: 17041,str: "Fundamental",num: 4070,obj: {_id: 17042,str: "Wooden Consultant schemas",num: 67663,date: new Date("2018-09-06T08:14:53.054Z"),array: [],obj: {_id: 17043,date: new Date("2018-09-06T00:29:27.850Z"),obj: {}}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 17044,str: "Illinois",num: 78426,date: new Date("2018-09-06T03:58:09.731Z"),array: ["violet protocol multi-byte",new Date("2018-09-06T02:12:10.096Z"),"Corporate architecture",70627,94068,"Corporate portals",8511],obj: {_id: 17045,str: "users neural",date: new Date("2018-09-06T19:38:47.944Z")}});
    },

    function(coll) {
        return coll.insert({_id: 17046,str: "Burundi quantify hack",num: 65890,date: new Date("2018-09-06T08:21:00.724Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17047,str: "FTP Customer",num: 17146,date: new Date("2018-09-06T06:12:52.225Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17048,str: "gold index reboot",num: 43315,date: new Date("2018-09-06T15:35:42.204Z"),array: [81861,"innovative Iowa redundant","Zimbabwe Dollar tan Soap",new Date("2018-09-06T09:22:56.319Z"),{_id: 17049,str: "Versatile azure",date: new Date("2018-09-05T21:35:19.116Z"),obj: {}},"generating deliverables",new Date("2018-09-06T18:50:25.281Z"),"Wall",22690,new Date("2018-09-06T13:30:35.934Z"),[],54978,new Date("2018-09-06T06:14:56.844Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17050,str: "background Web Communications",num: 48287,date: new Date("2018-09-06T15:00:09.114Z"),obj: {_id: 17051,str: "Cameroon asymmetric",num: 30454,date: new Date("2018-09-06T12:55:57.501Z"),array: [69593,"whiteboard","strategic Personal Loan Account engage",new Date("2018-09-06T09:42:15.351Z"),[new Date("2018-09-06T12:03:29.579Z"),{_id: 17052,str: "invoice Handcrafted",num: 32538,date: new Date("2018-09-06T00:41:46.062Z"),obj: {}},new Date("2018-09-06T09:12:22.231Z"),40689],{_id: 17053,str: "olive",num: 12386,array: [],obj: {}},"knowledge user",25947,{_id: 17054,date: new Date("2018-09-06T03:03:17.953Z"),array: []},{_id: 17055,str: "Alabama",num: 43676,array: []},[26783],"Manors Avon Brunei Dollar"],obj: {_id: 17056,date: new Date("2018-09-06T17:33:28.976Z"),array: [15839,"Architect primary",new Date("2018-09-06T09:54:36.067Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 17057,str: "Forint frictionless",num: 65921,date: new Date("2018-09-06T04:43:20.714Z"),obj: {_id: 17058,num: 15753,date: new Date("2018-09-06T17:52:26.351Z"),array: [new Date("2018-09-05T22:11:37.888Z"),new Date("2018-09-06T18:52:34.087Z"),"partnerships","Switchable Iceland online",44576,{_id: 17059,str: "Identity salmon Fresh",num: 8720,array: [],obj: {_id: 17060,str: "Outdoors",num: 87422,date: new Date("2018-09-06T01:31:22.354Z"),array: []}},{_id: 17061,str: "Senior mint green compress",date: new Date("2018-09-06T04:31:33.135Z"),array: [new Date("2018-09-06T16:30:53.491Z")],obj: {}},60578,"Ergonomic",new Date("2018-09-06T19:22:51.862Z"),{_id: 17062,str: "quantifying",num: 83438,date: new Date("2018-09-06T04:19:40.254Z"),array: [],obj: {}},{_id: 17063,str: "Investor Concrete 1080p",num: 9650,date: new Date("2018-09-06T07:06:10.208Z")},64006],obj: {_id: 17064,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17065,str: "distributed discrete Ohio",num: 36244,date: new Date("2018-09-06T14:31:19.558Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17066,str: "Multi-lateral",date: new Date("2018-09-06T13:40:17.589Z"),array: [{_id: 17067,str: "Toys East Caribbean Dollar Massachusetts",num: 15949,date: new Date("2018-09-06T12:55:01.516Z"),array: []},69973,[],new Date("2018-09-06T02:35:18.010Z"),{_id: 17068,str: "Handcrafted Plastic Hat",num: 52199,date: new Date("2018-09-05T19:56:49.901Z"),array: [],obj: {_id: 17069,str: "AGP",num: 65525,date: new Date("2018-09-06T08:07:03.157Z"),array: ["Credit Card Account Industrial",new Date("2018-09-06T04:03:51.023Z"),new Date("2018-09-06T00:49:34.974Z"),41835,7347,"Incredible Cotton Chips",new Date("2018-09-06T06:09:19.237Z"),[]],obj: {}}},"Money Market Account Handmade"],obj: {_id: 17070,array: [48037,"Unbranded Granite Soap HDD panel",new Date("2018-09-06T00:23:28.161Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 17071,num: 17783,date: new Date("2018-09-06T14:33:40.194Z"),array: ["Granite networks transmitting",90683,new Date("2018-09-06T16:49:31.823Z"),"Cambridgeshire violet leading edge",new Date("2018-09-06T17:42:50.463Z"),{_id: 17072,str: "solutions Connecticut",num: 31943,date: new Date("2018-09-05T23:52:51.180Z"),obj: {_id: 17073,str: "relationships Customer help-desk",num: 87237,date: new Date("2018-09-06T02:49:48.366Z"),array: [new Date("2018-09-06T10:34:31.974Z"),[]],obj: {}}},"yellow Cotton",new Date("2018-09-06T18:58:59.212Z"),40059,41302,"back-end Creative Sleek Wooden Towels",{_id: 17074,str: "Soft AGP",date: new Date("2018-09-06T02:01:07.264Z"),array: ["Avon Officer",87152,"Toys Electronics e-enable",[]]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17075,str: "Barbados Dollar strategize incentivize",num: 10018,date: new Date("2018-09-06T14:10:21.901Z"),obj: {_id: 17076,date: new Date("2018-09-06T11:05:42.602Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17077,str: "Keyboard Hat",num: 95881,date: new Date("2018-09-06T06:53:37.807Z"),array: ["indexing invoice",48675,new Date("2018-09-05T21:22:15.809Z"),{_id: 17078,str: "communities",num: 5711,date: new Date("2018-09-06T07:47:26.103Z"),array: [new Date("2018-09-06T04:40:39.687Z")],obj: {_id: 17079,str: "overriding unleash",date: new Date("2018-09-06T00:18:48.987Z"),array: [],obj: {}}},new Date("2018-09-06T14:36:49.819Z"),["primary client-server",51193],"transmitting extranet",647,"Louisiana",[],{_id: 17080,str: "mindshare",num: 81819,date: new Date("2018-09-06T15:05:08.965Z"),obj: {}},[{_id: 17081,num: 90719,date: new Date("2018-09-06T08:39:03.817Z")},85574,29838,"Points Denar cross-platform"]],obj: {_id: 17082,num: 44767,date: new Date("2018-09-05T22:59:25.612Z")}});
    },

    function(coll) {
        return coll.insert({_id: 17083,str: "Assistant Adaptive Keys",num: 48219,date: new Date("2018-09-06T14:52:29.218Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17084,str: "Bahraini Dinar",num: 83686,date: new Date("2018-09-06T11:58:03.761Z"),array: [99515,"virtual Avon tan","Bulgarian Lev Baby data-warehouse",[],new Date("2018-09-06T16:06:02.796Z"),"Practical Shirt Checking Account",new Date("2018-09-05T20:11:23.916Z"),{_id: 17085,str: "Computer Product",num: 89067,obj: {_id: 17086,str: "Fresh Fields Architect",num: 99182,date: new Date("2018-09-05T22:58:47.937Z"),array: [new Date("2018-09-06T12:32:39.292Z"),37449],obj: {}}},80757,{_id: 17087,date: new Date("2018-09-06T11:41:30.306Z"),array: [],obj: {}},{_id: 17088,str: "Shirt",num: 57353,date: new Date("2018-09-06T09:29:23.105Z"),array: [],obj: {}}],obj: {_id: 17089,str: "Gold"}});
    },

    function(coll) {
        return coll.insert({_id: 17090,str: "front-end Bike Falls",num: 15425,date: new Date("2018-09-06T16:52:11.917Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17091,str: "Multi-channelled",num: 35613,date: new Date("2018-09-06T12:28:22.681Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17092,str: "Plains deposit",num: 43006,date: new Date("2018-09-06T00:27:10.228Z"),array: [82498,[],new Date("2018-09-06T02:50:55.327Z"),"Berkshire Brooks Gloves",83704,93134,new Date("2018-09-06T19:34:22.549Z"),new Date("2018-09-06T02:13:00.900Z"),new Date("2018-09-06T13:50:02.603Z"),["Incredible Granite Mouse Grocery Wyoming"],"Baby"],obj: {_id: 17093,str: "microchip",num: 61052,date: new Date("2018-09-06T02:31:18.623Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17094,str: "reboot metrics",date: new Date("2018-09-05T21:56:14.837Z"),obj: {_id: 17095,num: 62866,date: new Date("2018-09-06T09:50:22.544Z"),array: [],obj: {_id: 17096,str: "supply-chains Assistant Corporate",num: 32609,date: new Date("2018-09-06T10:06:06.477Z"),obj: {_id: 17097,array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 17098,str: "e-services",num: 3707,date: new Date("2018-09-06T08:35:56.214Z"),array: [],obj: {_id: 17099,str: "reinvent program teal",num: 47270,date: new Date("2018-09-06T15:36:25.673Z"),array: [],obj: {_id: 17100,str: "paradigms",num: 29905,date: new Date("2018-09-06T10:44:54.339Z"),array: ["transform",75292,"virtual",96346,6838,new Date("2018-09-06T12:07:54.337Z"),new Date("2018-09-06T04:59:57.972Z"),"Monaco quantifying Auto Loan Account","tan withdrawal synergistic",new Date("2018-09-06T00:59:56.586Z"),new Date("2018-09-06T04:07:24.456Z"),new Date("2018-09-06T07:59:07.040Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 17101,str: "Savings Account Cambridgeshire",num: 45859,date: new Date("2018-09-06T17:53:31.619Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17102,str: "Gloves SCSI Small",num: 17706,date: new Date("2018-09-05T21:35:12.377Z"),array: [new Date("2018-09-06T04:32:55.214Z"),[],55389,new Date("2018-09-06T13:27:38.893Z"),29710,new Date("2018-09-06T11:46:06.663Z"),{_id: 17103,num: 31762,date: new Date("2018-09-06T02:11:15.374Z"),obj: {}},"Vietnam Chicken national",4199,"input CSS","Tactics",new Date("2018-09-06T14:30:01.382Z"),[]],obj: {_id: 17104,str: "mint green",num: 30634,date: new Date("2018-09-05T22:49:50.711Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17105,str: "Guarani Cotton",num: 36400,date: new Date("2018-09-06T09:00:44.887Z"),array: [],obj: {_id: 17106,num: 84355,date: new Date("2018-09-06T19:36:56.409Z"),array: [63197,"Sports Soft Marshall Islands",new Date("2018-09-06T04:01:54.249Z"),17982,38261,{_id: 17107,str: "overriding",num: 22445,date: new Date("2018-09-06T10:57:31.710Z"),obj: {}},new Date("2018-09-06T11:01:39.821Z"),"Trace Granite",3166,"parse",new Date("2018-09-06T19:41:07.270Z"),"reboot"],obj: {_id: 17108,str: "quantify Fresh customer loyalty",date: new Date("2018-09-06T16:19:51.359Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17109,str: "unleash Practical Steel Shoes",num: 51815,date: new Date("2018-09-05T20:50:05.374Z"),array: [new Date("2018-09-06T15:29:35.296Z"),"Quality",52451,new Date("2018-09-06T09:55:49.178Z"),21608,{_id: 17110,str: "deploy customized Serbian Dinar",num: 45938,obj: {}},"technologies B2C","digital RAM",[],13796,18744,new Date("2018-09-06T02:45:12.329Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17111,str: "Handmade FTP Analyst",num: 17456,date: new Date("2018-09-06T13:21:48.221Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17112,str: "Borders copying Oklahoma",num: 52557,date: new Date("2018-09-06T11:06:25.006Z"),array: [[],new Date("2018-09-06T19:02:03.909Z"),40721,47195,new Date("2018-09-06T19:47:57.727Z"),"parsing New Zealand New Leu",new Date("2018-09-06T18:11:32.534Z"),new Date("2018-09-06T06:48:17.663Z"),"utilize generating",18233,"Ergonomic Chair",35364,{_id: 17113,str: "transmitter Home Loan Account Togo",num: 79354,date: new Date("2018-09-05T21:11:07.799Z"),obj: {_id: 17114,num: 90562,obj: {}}},new Date("2018-09-06T12:08:13.899Z"),{_id: 17115,str: "West Virginia Consultant firewall",date: new Date("2018-09-06T04:36:24.080Z"),array: [],obj: {_id: 17116,num: 57154,date: new Date("2018-09-06T06:10:55.365Z"),array: [{_id: 17117,num: 97691,array: ["Fantastic Rubber Pants Wall Money Market Account"]}]}}]});
    },

    function(coll) {
        return coll.insert({_id: 17118,str: "Direct",num: 41817,date: new Date("2018-09-05T23:48:22.984Z"),array: [[],new Date("2018-09-06T18:41:43.514Z"),"well-modulated"],obj: {_id: 17119,str: "viral",num: 3686,date: new Date("2018-09-06T18:19:18.732Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17120,str: "Andorra",num: 83063,date: new Date("2018-09-06T06:28:21.285Z"),array: ["bleeding-edge Denar",42771,"Object-based empower",70984,new Date("2018-09-06T09:57:18.874Z"),new Date("2018-09-06T15:54:26.495Z"),94711,{_id: 17121,str: "infomediaries Music pricing structure",num: 98198,date: new Date("2018-09-06T06:23:53.883Z"),obj: {_id: 17122,str: "Metal",num: 23057}},56648,["redundant Home Loan Account Minnesota",[new Date("2018-09-06T04:30:42.530Z")],new Date("2018-09-06T01:51:41.529Z"),"Corporate architecture",[]],{_id: 17123,str: "platforms",num: 59195,date: new Date("2018-09-06T18:41:17.246Z"),array: [new Date("2018-09-06T09:24:51.777Z"),{_id: 17124,str: "Movies",array: [],obj: {_id: 17125,num: 23326,array: [],obj: {}}}]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17126,str: "Trace global Granite",num: 45326,date: new Date("2018-09-06T18:00:10.618Z"),array: [],obj: {_id: 17127,str: "Connecticut Supervisor",num: 6320,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17128,str: "Incredible Assistant",num: 6815,date: new Date("2018-09-06T10:40:49.087Z"),array: ["framework",new Date("2018-09-06T03:13:31.996Z"),8142,{_id: 17129,str: "enhance Table",num: 89369,date: new Date("2018-09-06T15:05:13.977Z"),array: [],obj: {_id: 17130,num: 72525,date: new Date("2018-09-06T18:38:05.596Z"),array: [{_id: 17131,str: "Small Licensed",array: [new Date("2018-09-06T12:46:45.826Z"),"deposit",92670,63079],obj: {}}],obj: {}}},72172,"synergize ADP",[],"Senior Credit Card Account reboot",new Date("2018-09-06T10:49:55.335Z"),new Date("2018-09-06T04:39:39.482Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17132,str: "Optimized",num: 19607,array: [],obj: {_id: 17133,num: 99032,date: new Date("2018-09-06T18:24:03.012Z"),array: [[],new Date("2018-09-05T21:20:30.493Z"),60086,"Armenian Dram transmit",{_id: 17134,str: "Cocos (Keeling) Islands",num: 66987,date: new Date("2018-09-06T12:15:53.852Z"),array: [],obj: {_id: 17135,str: "Stand-alone Fantastic Turkey",num: 86816,date: new Date("2018-09-06T15:13:37.718Z")}},33655,new Date("2018-09-06T04:35:32.710Z"),"Ergonomic Cotton Hat",new Date("2018-09-06T18:30:45.345Z")],obj: {_id: 17136,str: "program transmit",date: new Date("2018-09-06T09:55:29.556Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17137,str: "Personal Loan Account Administrator",num: 73880,date: new Date("2018-09-06T15:43:48.026Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17138,str: "hacking",num: 59914,date: new Date("2018-09-06T01:25:36.821Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17139,str: "innovate",num: 74192,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17140,str: "Afghani integrated indexing",num: 76352,date: new Date("2018-09-06T16:12:51.483Z"),array: ["Direct Rustic","Refined Metal Ball Practical Metal Hat Plastic",new Date("2018-09-06T14:46:27.382Z"),"IB multimedia",new Date("2018-09-06T04:51:20.144Z"),{_id: 17141,str: "Computers",num: 31614,date: new Date("2018-09-06T08:21:20.893Z"),array: [new Date("2018-09-06T00:21:58.465Z"),7696],obj: {}},new Date("2018-09-06T07:47:06.803Z"),[],52663,26690,14380],obj: {_id: 17142,str: "Savings Account Granite",num: 31005,array: [new Date("2018-09-06T10:50:35.841Z")],obj: {_id: 17143,num: 16027,date: new Date("2018-09-06T07:34:32.844Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 17144,str: "logistical",num: 62683,date: new Date("2018-09-06T06:35:42.392Z"),array: [97811,"Berkshire Arizona static",new Date("2018-09-05T22:01:37.663Z"),72769,[],new Date("2018-09-06T01:55:45.288Z"),"deposit Money Market Account Consultant",new Date("2018-09-06T07:21:22.479Z"),"Towels input",59855,[78920,{_id: 17145,str: "strategize Developer",num: 43665,date: new Date("2018-09-06T12:53:46.184Z"),obj: {}},60996,{_id: 17146,str: "hack",num: 37888,date: new Date("2018-09-05T23:30:17.212Z"),array: [],obj: {_id: 17147,str: "mission-critical Lebanese Pound programming",date: new Date("2018-09-05T22:55:40.904Z"),obj: {_id: 17148,num: 10892,array: [[[{_id: 17149,array: [],obj: {_id: 17150,str: "Specialist Checking Account haptic",num: 90333,date: new Date("2018-09-05T23:20:20.327Z"),array: ["Buckinghamshire North Dakota",new Date("2018-09-06T07:04:32.054Z")]}},"Parks International"]]]}}}],new Date("2018-09-06T15:08:37.768Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17151,str: "Outdoors workforce Licensed Steel Hat",num: 50960,date: new Date("2018-09-06T13:03:48.003Z"),array: [new Date("2018-09-06T08:26:53.195Z"),new Date("2018-09-06T10:09:42.809Z"),58640,"solution invoice",[],9963,"Research","local area network HDD gold","Berkshire Orchestrator",33269],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17152,str: "Associate New Hampshire",num: 74530,date: new Date("2018-09-06T06:03:51.540Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17153,str: "turquoise",num: 94273,date: new Date("2018-09-06T01:25:19.784Z"),array: [91247,{_id: 17154,str: "Personal Loan Account Ergonomic",num: 28472,date: new Date("2018-09-06T04:24:05.347Z"),array: [],obj: {}},new Date("2018-09-06T08:22:13.733Z"),[],"transmit"]});
    },

    function(coll) {
        return coll.insert({_id: 17155,num: 75826,date: new Date("2018-09-06T16:53:25.663Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17156,str: "navigate THX",num: 88200,date: new Date("2018-09-06T05:12:31.925Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17157,str: "National",num: 84144,date: new Date("2018-09-06T07:45:58.790Z"),array: [{_id: 17158,date: new Date("2018-09-06T03:17:52.288Z"),array: [],obj: {}},"e-commerce Rustic Kenyan Shilling","Garden Handmade",27673,new Date("2018-09-06T16:19:11.444Z"),"regional",new Date("2018-09-05T20:57:33.138Z"),[],64179,new Date("2018-09-06T05:14:06.786Z")],obj: {_id: 17159,str: "Awesome quantifying Agent",date: new Date("2018-09-06T19:47:12.751Z"),array: ["parse"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17160,str: "networks transmit Pizza",num: 14009,date: new Date("2018-09-06T02:42:53.439Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17161,str: "Handcrafted invoice",num: 82553,date: new Date("2018-09-06T15:44:23.739Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17162,str: "withdrawal",num: 85684,date: new Date("2018-09-05T21:34:49.161Z"),array: [{_id: 17163,str: "3rd generation Decentralized",num: 51873,date: new Date("2018-09-06T13:07:00.057Z"),array: [],obj: {_id: 17164,array: [],obj: {}}},19561,{_id: 17165,str: "Jewelery Arizona",num: 23038,date: new Date("2018-09-06T02:43:24.409Z"),array: [],obj: {}},new Date("2018-09-06T02:53:32.072Z"),27384,"Clothing Function-based",new Date("2018-09-05T21:37:10.495Z"),"Czech Koruna",{_id: 17166,str: "encryption productize",date: new Date("2018-09-06T03:38:09.501Z"),obj: {}},new Date("2018-09-06T05:17:39.721Z")],obj: {_id: 17167,str: "TCP Pants deposit",num: 1564,date: new Date("2018-09-06T11:10:36.436Z"),array: [new Date("2018-09-06T09:15:09.543Z"),33231,{_id: 17168,array: [{_id: 17169,num: 19665,obj: {_id: 17170,num: 16401,date: new Date("2018-09-06T17:40:46.603Z")}},"Vermont"],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 17171,str: "Borders Central",num: 87879,date: new Date("2018-09-06T10:41:10.172Z"),array: [8989,new Date("2018-09-06T10:40:31.933Z"),{_id: 17172,str: "Ball",num: 20114,date: new Date("2018-09-06T17:12:26.476Z"),obj: {}},95432,new Date("2018-09-06T11:51:33.093Z"),new Date("2018-09-06T10:43:57.518Z"),"SDD Integration",[],new Date("2018-09-06T15:43:53.420Z"),[],"Northern Mariana Islands Accountability"],obj: {_id: 17173,str: "JBOD",array: ["Shoes auxiliary Assistant",12902,"Enhanced digital indexing",53105]}});
    },

    function(coll) {
        return coll.insert({_id: 17174,num: 90472,date: new Date("2018-09-05T20:37:22.338Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17175,str: "Generic Tasty Lane",num: 52165,date: new Date("2018-09-06T14:33:33.378Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17176,str: "Borders",num: 38456,date: new Date("2018-09-06T19:17:44.295Z"),array: [],obj: {_id: 17177,str: "Creative",num: 25723,date: new Date("2018-09-05T23:11:26.263Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17178,str: "Bedfordshire",num: 76917,date: new Date("2018-09-06T12:38:03.593Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17179,str: "Louisiana Buckinghamshire Refined",num: 12327,date: new Date("2018-09-06T16:24:03.189Z"),obj: {_id: 17180,num: 46387,date: new Date("2018-09-06T19:28:18.550Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17181,str: "User-centric efficient alarm",num: 55122,date: new Date("2018-09-06T11:28:25.456Z"),array: [2551,new Date("2018-09-06T16:35:38.700Z"),{_id: 17182,str: "Savings Account Personal Loan Account blue",num: 47837,date: new Date("2018-09-06T19:50:15.597Z"),array: [],obj: {}},"bypassing",[],"Licensed Concrete Chair",new Date("2018-09-06T17:19:19.940Z"),[new Date("2018-09-06T12:19:45.445Z")],new Date("2018-09-06T15:27:03.561Z"),29475,39539],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17183,str: "logistical copy Pa'anga",num: 69639,date: new Date("2018-09-05T21:37:41.685Z"),obj: {_id: 17184,str: "Shoes Shoes",num: 53079,date: new Date("2018-09-06T07:14:29.414Z"),array: ["interactive navigating interactive",79978,new Date("2018-09-06T06:46:50.408Z"),52046,new Date("2018-09-06T05:44:47.209Z"),"parse Intelligent Frozen Fish South Dakota",{_id: 17185,str: "Flats Optimization",num: 9617,array: []},new Date("2018-09-05T20:33:28.541Z"),36867,"Consultant Usability optical",new Date("2018-09-06T08:36:25.394Z"),20025,[{_id: 17186,date: new Date("2018-09-06T06:47:40.085Z"),array: [],obj: {}},[66730,"niches Massachusetts"]]],obj: {_id: 17187,num: 17523,date: new Date("2018-09-06T00:38:59.844Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17188,str: "calculating",num: 78704,date: new Date("2018-09-06T07:38:23.294Z"),array: [new Date("2018-09-06T00:44:44.860Z"),23797,new Date("2018-09-06T07:24:08.992Z"),11392,new Date("2018-09-06T00:17:55.955Z"),"intuitive Fantastic Wooden Pants Mouse",{_id: 17189,str: "Incredible Cotton Cheese Games RSS",num: 43207,date: new Date("2018-09-06T07:26:58.769Z"),array: [],obj: {}},"Dobra protocol Mouse",44600,{_id: 17190,str: "harness Hawaii Agent",date: new Date("2018-09-06T09:51:57.566Z"),array: [new Date("2018-09-06T01:41:14.296Z")],obj: {}},new Date("2018-09-06T03:29:33.278Z"),"systems Congolese Franc Seamless"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17191,str: "Georgia",num: 23044,date: new Date("2018-09-06T10:00:06.858Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17192,str: "Canadian Dollar",num: 36043,date: new Date("2018-09-06T12:38:49.299Z"),array: [],obj: {_id: 17193,str: "COM",num: 3015,date: new Date("2018-09-06T05:17:10.083Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17194,str: "North Dakota client-driven Montana",num: 44134,date: new Date("2018-09-05T20:44:39.735Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17195,str: "Fantastic Soft Fish alarm",num: 61227,date: new Date("2018-09-06T00:12:03.350Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17196,str: "CSS Checking Account",num: 67824,date: new Date("2018-09-06T01:36:28.903Z"),array: [],obj: {_id: 17197,str: "protocol Technician",num: 38912,date: new Date("2018-09-05T20:11:26.252Z"),array: [{_id: 17198,str: "Frozen",date: new Date("2018-09-06T11:37:39.709Z")},75344,{ _id: 17199 },new Date("2018-09-06T04:07:00.263Z"),new Date("2018-09-06T02:54:37.156Z"),"B2C",61087,"deposit Mall Estonia",new Date("2018-09-05T22:24:52.974Z"),new Date("2018-09-06T04:16:27.592Z"),"Arkansas",72621],obj: {_id: 17200,str: "Beauty",num: 32183,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17201,str: "Communications Metical",num: 40281,date: new Date("2018-09-06T17:50:24.734Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17202,str: "Gardens Home Loan Account Credit Card Account",num: 85815,date: new Date("2018-09-06T15:15:30.783Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17203,str: "service-desk platforms Berkshire",num: 47823,date: new Date("2018-09-06T10:17:25.851Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17204,str: "deposit payment",num: 48563,date: new Date("2018-09-06T09:50:13.291Z"),array: [new Date("2018-09-06T00:29:13.020Z"),"Rhode Island Soft Representative","process improvement Virginia invoice",30549,32355,new Date("2018-09-06T00:44:36.390Z"),72568,{_id: 17205,str: "Money Market Account",num: 91364,date: new Date("2018-09-06T15:48:29.462Z"),obj: {}},{_id: 17206,str: "Awesome Lilangeni",num: 54526,date: new Date("2018-09-06T15:11:10.087Z"),array: []},{_id: 17207,str: "multi-byte Fresh Officer",num: 1009,obj: {_id: 17208,date: new Date("2018-09-06T09:35:12.901Z"),array: [[],new Date("2018-09-06T11:49:49.872Z")],obj: {_id: 17209,str: "Djibouti Franc invoice digital",num: 10215,array: ["Markets Tasty Cotton Gloves",new Date("2018-09-06T11:01:08.632Z"),"Auto Loan Account payment payment",[],9312],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 17210,str: "Director Identity",num: 81420,date: new Date("2018-09-05T21:11:56.863Z"),array: ["overriding",new Date("2018-09-05T22:03:34.949Z"),new Date("2018-09-06T08:07:43.141Z"),"challenge",new Date("2018-09-06T03:15:10.845Z"),60768,new Date("2018-09-06T05:58:01.348Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17211,str: "Executive Computers",num: 20029,date: new Date("2018-09-06T04:54:35.392Z"),array: ["yellow Cotton bypassing",41656,new Date("2018-09-06T09:49:14.480Z"),98509,{_id: 17212,str: "heuristic Rustic",array: [{_id: 17213,str: "firewall",num: 97399,date: new Date("2018-09-06T03:27:30.382Z"),array: [],obj: {_id: 17214,str: "client-server Serbian Dinar Credit Card Account",date: new Date("2018-09-06T07:12:57.273Z"),array: ["Solutions bandwidth Station"],obj: {}}},"Berkshire quantify"],obj: {_id: 17215,num: 12961,date: new Date("2018-09-06T12:50:08.254Z")}},32020,new Date("2018-09-06T12:10:51.905Z"),"user-facing regional Accountability",new Date("2018-09-06T14:52:16.417Z"),97777,"Customer-focused Branding Refined Rubber Computer",new Date("2018-09-06T00:57:12.371Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17216,str: "Czech Koruna",num: 80152,date: new Date("2018-09-06T18:43:07.876Z"),array: ["connect Direct Fantastic Fresh Soap",39314,[],new Date("2018-09-06T13:02:09.819Z"),"deploy digital indexing",new Date("2018-09-06T00:26:43.072Z"),{_id: 17217,str: "backing up Communications Functionality",num: 58650,array: [20390,[],27688,89379],obj: {_id: 17218,num: 60804,date: new Date("2018-09-06T15:50:45.436Z"),array: [],obj: {}}},[]],obj: {_id: 17219,num: 46243,date: new Date("2018-09-06T18:42:44.782Z"),array: [new Date("2018-09-06T18:37:08.026Z"),"Credit Card Account","Cotton","Wooden world-class","Producer Alaska"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17220,str: "Reverse-engineered Usability invoice",num: 9014,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17221,num: 48345,array: [],obj: {_id: 17222,str: "program Unbranded Concrete Pants",date: new Date("2018-09-06T18:17:28.135Z"),array: [],obj: {_id: 17223,str: "Tools capacitor facilitate",num: 48341,array: [[],16722,new Date("2018-09-06T08:26:47.044Z"),"Bangladesh parse",48221,new Date("2018-09-06T04:35:31.735Z"),"deploy Cotton","Optimized Saint Pierre and Miquelon",[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17224,str: "needs-based",num: 27002,date: new Date("2018-09-06T13:24:17.681Z"),array: [new Date("2018-09-06T01:07:23.356Z"),21341,"brand Division","4th generation Central Proactive",new Date("2018-09-05T21:27:54.532Z"),[],{_id: 17225,str: "indigo AI compelling",num: 24896,date: new Date("2018-09-06T15:01:58.252Z"),obj: {}},new Date("2018-09-06T01:47:00.249Z"),new Date("2018-09-06T01:02:00.593Z"),15191],obj: {_id: 17226,num: 53070,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17227,str: "Senior Antarctica (the territory South of 60 deg S)",date: new Date("2018-09-06T04:52:12.871Z"),obj: {_id: 17228,str: "withdrawal driver generate",num: 19409,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17229,str: "Cambridgeshire Frozen",num: 38630,date: new Date("2018-09-06T04:00:31.307Z"),array: [],obj: {_id: 17230,str: "Afghani",num: 26940,date: new Date("2018-09-06T06:01:12.772Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17231,str: "Mountain payment",num: 65653,date: new Date("2018-09-06T07:19:52.916Z"),array: [],obj: {_id: 17232,str: "fresh-thinking Liaison navigating",num: 76338,date: new Date("2018-09-06T12:12:47.425Z"),array: ["multi-state red Armenia",26393,new Date("2018-09-05T23:16:41.860Z"),82283,"Drive",new Date("2018-09-05T22:04:42.557Z"),[],new Date("2018-09-06T07:00:01.752Z"),21648,new Date("2018-09-06T09:29:17.958Z"),{_id: 17233,str: "Small",array: ["emulation"]},new Date("2018-09-06T03:57:55.756Z"),97402,{_id: 17234,str: "bandwidth Puerto Rico Borders",num: 10259,date: new Date("2018-09-05T22:08:35.016Z"),array: [],obj: {_id: 17235,date: new Date("2018-09-06T12:55:15.835Z"),obj: {}}},{_id: 17236,str: "stable",date: new Date("2018-09-06T13:20:58.380Z"),obj: {_id: 17237,str: "Dynamic SSL",num: 47371,array: ["Grocery Washington"],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17238,str: "Investment Account",num: 68064,array: [40476,[66348,"New Jersey ubiquitous hack",59446,new Date("2018-09-06T08:23:17.284Z")],21053,"Health Money Market Account","firewall Forward Practical",new Date("2018-09-06T10:26:19.257Z"),[new Date("2018-09-06T03:59:08.852Z"),"compelling",{_id: 17239,num: 78459,date: new Date("2018-09-06T10:21:58.255Z"),array: [],obj: {_id: 17240,str: "National connecting",num: 13040,date: new Date("2018-09-06T12:00:03.385Z"),obj: {}}}],new Date("2018-09-06T07:33:03.456Z"),{_id: 17241,str: "sensor Mexican Peso Mexican Unidad de Inversion (UDI) neural-net",date: new Date("2018-09-06T11:13:22.283Z"),obj: {_id: 17242,num: 37090,date: new Date("2018-09-06T06:15:56.381Z"),array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17243,str: "Checking Account",num: 67797,date: new Date("2018-09-06T07:34:45.534Z"),array: ["payment","Unbranded","invoice parsing",new Date("2018-09-06T04:31:37.619Z"),31116,new Date("2018-09-06T10:52:13.755Z"),new Date("2018-09-06T10:14:13.040Z"),66273,{_id: 17244,str: "bandwidth transmitting program",num: 15450,date: new Date("2018-09-06T07:07:54.289Z"),array: [],obj: {_id: 17245,str: "Sausages e-commerce circuit",num: 73656,date: new Date("2018-09-06T06:20:07.997Z"),array: [69011,"Iraq Generic Steel Keyboard"],obj: {}}},[]],obj: {_id: 17246,str: "program",array: [35419,"e-enable Iraqi Dinar Licensed",[21485,{_id: 17247,str: "Cambridgeshire",num: 98605,date: new Date("2018-09-06T10:37:37.860Z"),array: []}],[new Date("2018-09-05T22:22:47.330Z")],{_id: 17248,num: 63689,obj: {_id: 17249,str: "Freeway Rustic",num: 46773,date: new Date("2018-09-06T10:14:02.476Z"),array: []}}]}});
    },

    function(coll) {
        return coll.insert({_id: 17250,str: "payment Planner Rustic",num: 32167,date: new Date("2018-09-06T01:50:21.324Z"),array: [],obj: {_id: 17251,str: "Mexico Alaska ADP",num: 77969,array: [93764,21724,"Configuration Minnesota Consultant",[new Date("2018-09-05T20:16:05.299Z"),{_id: 17252,str: "world-class firewall",num: 40584,date: new Date("2018-09-06T02:35:04.050Z"),array: [7009],obj: {}},new Date("2018-09-06T05:47:01.111Z"),[]],"B2C schemas","optical Mouse",new Date("2018-09-06T19:04:22.155Z"),"Iranian Rial Mandatory","withdrawal global"]}});
    },

    function(coll) {
        return coll.insert({_id: 17253,str: "New Jersey Generic Agent",num: 89800,date: new Date("2018-09-06T17:41:07.892Z"),obj: {_id: 17254,str: "alliance payment",num: 28706,array: [new Date("2018-09-05T20:19:09.475Z"),"Concrete Sri Lanka Rupee",new Date("2018-09-06T17:47:55.685Z"),new Date("2018-09-06T04:48:48.251Z"),{_id: 17255,str: "Gloves brand",num: 46644,date: new Date("2018-09-06T07:49:35.324Z"),array: [],obj: {}},new Date("2018-09-06T07:39:01.485Z"),"experiences 6th generation","deploy bypassing",77169,{_id: 17256,str: "Devolved Mountains",date: new Date("2018-09-06T10:02:47.629Z")},73768,93938,35629]}});
    },

    function(coll) {
        return coll.insert({_id: 17257,num: 20760,date: new Date("2018-09-06T19:12:06.821Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17258,str: "Consultant",num: 35873,date: new Date("2018-09-06T04:11:47.682Z"),array: [],obj: {_id: 17259,str: "Devolved Ergonomic withdrawal",num: 63763,date: new Date("2018-09-06T13:14:55.674Z"),array: [30082,44180,[{_id: 17260,num: 58877,date: new Date("2018-09-06T06:40:52.800Z"),array: [],obj: {}},"generating",new Date("2018-09-06T05:11:18.969Z"),"Buckinghamshire Savings Account",new Date("2018-09-06T06:50:04.652Z")],{_id: 17261,str: "analyzer Clothing Alaska",num: 86771},10559,[67264],"Group",new Date("2018-09-06T09:39:14.284Z"),"Vision-oriented Uzbekistan Sum",new Date("2018-09-06T19:48:53.341Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17262,str: "Concrete",num: 79347,date: new Date("2018-09-06T00:15:50.618Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17263,str: "Bacon Handmade Frozen Computer artificial intelligence",array: [new Date("2018-09-05T20:21:44.231Z"),"aggregate supply-chains",90020,93124,new Date("2018-09-06T14:32:18.943Z"),{_id: 17264,str: "Pizza Benin withdrawal",num: 69292,date: new Date("2018-09-06T12:07:49.100Z"),array: []},new Date("2018-09-05T23:14:04.465Z"),"model Virginia",new Date("2018-09-05T20:40:42.575Z")],obj: {_id: 17265,num: 74403,date: new Date("2018-09-05T21:55:00.604Z"),obj: {_id: 17266,str: "multi-state Generic task-force",num: 76594,date: new Date("2018-09-06T04:58:21.117Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17267,str: "Regional",num: 11611,date: new Date("2018-09-06T06:25:56.144Z"),array: [],obj: {_id: 17268,num: 30979,array: [25783,80051,new Date("2018-09-05T20:20:57.232Z"),"distributed transform",new Date("2018-09-06T10:40:37.092Z"),"Fantastic Rubber Salad Alaska New Jersey",{_id: 17269,str: "Singapore Dollar Green Table",num: 91876,date: new Date("2018-09-06T06:22:25.490Z"),obj: {}},"Corners logistical open-source",84985,new Date("2018-09-06T14:25:20.655Z"),{_id: 17270,str: "Global Home Loan Account",num: 8535,date: new Date("2018-09-06T00:34:45.933Z"),array: [{_id: 17271,date: new Date("2018-09-06T11:06:47.201Z")}],obj: {_id: 17272,str: "Ergonomic Wooden Mouse Personal Loan Account",array: [],obj: {_id: 17273,str: "payment Graphic Interface Planner",date: new Date("2018-09-05T23:22:19.073Z"),obj: {}}}},[new Date("2018-09-06T05:08:29.060Z"),[]],["Tasty Rand Loti visualize"]]}});
    },

    function(coll) {
        return coll.insert({_id: 17274,str: "virtual",num: 25992,date: new Date("2018-09-06T03:41:02.432Z"),array: [21093,"Dynamic","white quantifying Incredible Soft Bike",new Date("2018-09-06T03:43:31.436Z"),new Date("2018-09-05T23:49:38.308Z"),35190,16095,{_id: 17275,str: "User-centric",date: new Date("2018-09-06T03:20:40.896Z"),array: [new Date("2018-09-06T02:10:42.338Z"),41682,new Date("2018-09-06T04:24:47.995Z")]},"1080p","optimize"],obj: {_id: 17276,str: "North Dakota Sleek",num: 37389,date: new Date("2018-09-06T03:18:29.476Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17277,str: "Rustic connecting",num: 50897,date: new Date("2018-09-06T07:39:21.268Z"),array: [{_id: 17278,num: 47693,date: new Date("2018-09-05T22:09:28.396Z"),array: [40073,"Automotive"],obj: {_id: 17279,str: "generate",num: 52719,array: ["Lithuanian Litas Outdoors"],obj: {}}},50370,new Date("2018-09-06T16:58:06.936Z"),"Pitcairn Islands Gorgeous parsing",new Date("2018-09-06T08:10:34.269Z"),{_id: 17280,str: "Legacy",num: 6376,array: []},[],new Date("2018-09-06T16:36:01.715Z"),new Date("2018-09-06T14:20:52.785Z"),{_id: 17281,str: "Plastic Madagascar program",num: 54990,date: new Date("2018-09-05T20:24:17.716Z"),array: [42563,"Assistant Investment Account",new Date("2018-09-06T09:14:48.111Z")],obj: {_id: 17282,num: 91223,date: new Date("2018-09-06T04:57:57.347Z"),array: [],obj: {_id: 17283,str: "Avon"}}},[new Date("2018-09-06T00:26:07.724Z")],73108]});
    },

    function(coll) {
        return coll.insert({_id: 17284,str: "card mobile array",date: new Date("2018-09-06T12:58:45.457Z"),array: [4028,new Date("2018-09-06T17:40:15.250Z"),new Date("2018-09-06T19:16:21.369Z"),"HTTP",75677,new Date("2018-09-06T17:55:23.829Z"),{_id: 17285,str: "interface harness",num: 15688,date: new Date("2018-09-06T09:37:43.654Z"),array: ["auxiliary incremental Fantastic Cotton Tuna","calculating Developer leverage",new Date("2018-09-06T06:45:36.092Z"),10969,"adapter",{_id: 17286,str: "Orchestrator Intelligent Cotton Table",num: 95818,date: new Date("2018-09-05T23:57:20.915Z"),obj: {}}],obj: {_id: 17287,str: "methodical vertical 24/365",num: 764,date: new Date("2018-09-06T03:40:21.980Z"),array: []}},{_id: 17288,num: 66809,array: [],obj: {_id: 17289,date: new Date("2018-09-06T18:13:19.239Z"),array: [],obj: {}}},"Exclusive Borders"]});
    },

    function(coll) {
        return coll.insert({_id: 17290,str: "Senior viral",num: 37638,date: new Date("2018-09-05T21:50:32.114Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17291,str: "orchestrate",num: 31039,date: new Date("2018-09-06T00:04:55.876Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17292,str: "Table",num: 76022,date: new Date("2018-09-06T18:19:41.922Z"),array: [71104,{_id: 17293,str: "TCP",num: 29952,date: new Date("2018-09-06T03:31:59.802Z"),array: [24097],obj: {}},96440,new Date("2018-09-05T21:23:31.736Z"),"monetize Meadow",new Date("2018-09-05T20:06:41.587Z"),68596,"Michigan","solutions",new Date("2018-09-06T18:15:42.092Z"),82221],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17294,str: "Executive benchmark B2C",num: 95743,date: new Date("2018-09-06T05:25:34.854Z"),array: [],obj: {_id: 17295,str: "invoice bypassing",num: 82163,date: new Date("2018-09-06T03:40:37.832Z"),array: [65988,{_id: 17296,array: ["online channels ivory",new Date("2018-09-05T21:04:32.295Z"),12622,new Date("2018-09-06T16:23:06.836Z"),44031,new Date("2018-09-06T17:16:38.425Z")],obj: {_id: 17297,str: "Synchronised Steel Soap",num: 93532,date: new Date("2018-09-05T21:04:10.574Z"),array: []}},["Brand"],2139,{_id: 17298,str: "User-friendly",num: 26574,date: new Date("2018-09-06T16:46:00.574Z"),obj: {}},[],"Manager",{_id: 17299,str: "Manager invoice Avon",num: 85102,date: new Date("2018-09-06T06:58:37.800Z"),obj: {}}],obj: {_id: 17300,str: "content driver"}}});
    },

    function(coll) {
        return coll.insert({_id: 17301,str: "Jewelery",num: 71107,obj: {_id: 17302,str: "Ergonomic",num: 2528,date: new Date("2018-09-06T06:18:08.152Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17303,str: "withdrawal parsing",num: 43306,date: new Date("2018-09-06T03:36:31.157Z"),array: [],obj: {_id: 17304,str: "Kids redundant Games",date: new Date("2018-09-06T05:08:27.991Z"),array: [79239,new Date("2018-09-06T01:10:38.863Z"),"Global auxiliary end-to-end",{_id: 17305,str: "extranet Savings Account",num: 50037,array: [new Date("2018-09-06T10:01:47.915Z")]},new Date("2018-09-06T12:46:36.373Z"),"pink Awesome Plastic Chips",70600,"connect Books 24/365",new Date("2018-09-06T06:12:29.399Z"),{_id: 17306,num: 5011,date: new Date("2018-09-06T06:16:40.151Z"),array: [],obj: {}},73638],obj: {_id: 17307,str: "Gibraltar Pound",num: 49354,date: new Date("2018-09-06T18:28:58.585Z"),array: ["Cheese Steel","Sierra Leone","Games open-source salmon",[]],obj: {_id: 17308,str: "feed Research",num: 4370,date: new Date("2018-09-06T07:12:50.374Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 17309,str: "Manager mobile",num: 12664,date: new Date("2018-09-06T13:35:23.030Z"),array: [72083,"synergies Fresh backing up","Refined Wooden Bike Fresh Central",8552,new Date("2018-09-06T10:41:30.184Z"),[new Date("2018-09-06T03:01:41.147Z")],"Ghana program",74907,"driver Liechtenstein",7273,{_id: 17310,date: new Date("2018-09-06T17:32:21.586Z"),array: [],obj: {_id: 17311,str: "Agent",num: 27001,array: [],obj: {_id: 17312,num: 79598,date: new Date("2018-09-06T07:20:51.283Z"),obj: {}}}},new Date("2018-09-06T13:28:27.706Z"),new Date("2018-09-06T10:22:15.564Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17313,num: 11969,date: new Date("2018-09-06T17:20:28.821Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17314,str: "Generic Persistent",num: 49360,date: new Date("2018-09-06T07:57:21.972Z"),array: ["bus transmitter Branding",new Date("2018-09-05T19:56:48.524Z"),91170,new Date("2018-09-06T16:35:20.451Z"),60329,new Date("2018-09-06T03:26:50.810Z"),79299,[{_id: 17315,str: "compressing transmitter",num: 80769,date: new Date("2018-09-06T07:32:04.299Z"),array: [],obj: {}}],"Shirt",new Date("2018-09-06T02:17:14.919Z"),"Licensed","Ergonomic IB"],obj: {_id: 17316,str: "demand-driven Vision-oriented",date: new Date("2018-09-06T11:12:20.282Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17317,str: "Analyst monitor Home",num: 47563,date: new Date("2018-09-06T05:18:16.343Z"),array: [],obj: {_id: 17318,str: "e-markets",num: 54889,date: new Date("2018-09-05T22:53:31.451Z"),array: [26037,new Date("2018-09-06T00:16:35.261Z"),"artificial intelligence Customer",67757,new Date("2018-09-06T19:34:14.984Z"),"human-resource",new Date("2018-09-06T15:34:35.006Z"),new Date("2018-09-06T00:49:13.156Z")],obj: {_id: 17319,str: "e-business invoice",date: new Date("2018-09-06T01:13:44.644Z"),array: [72804,[],{_id: 17320,array: [],obj: {}},"user-centric",{_id: 17321,str: "Peru compress",num: 99703,date: new Date("2018-09-06T02:31:13.110Z")}],obj: {_id: 17322,num: 76032,date: new Date("2018-09-06T14:00:25.360Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 17323,str: "Rustic",num: 1780,date: new Date("2018-09-05T22:39:25.205Z"),obj: {_id: 17324,str: "Germany Buckinghamshire Sao Tome and Principe",num: 92565,date: new Date("2018-09-06T13:52:14.377Z"),array: [{_id: 17325,str: "Robust",num: 88454,date: new Date("2018-09-05T23:01:42.703Z"),array: [new Date("2018-09-06T08:08:37.614Z"),new Date("2018-09-05T20:06:51.781Z")],obj: {}},48713,"Papua New Guinea Steel synergies",[],new Date("2018-09-06T07:59:06.824Z"),"Gold",29621,82103,new Date("2018-09-06T12:43:06.930Z"),[78399],{_id: 17326,date: new Date("2018-09-06T12:16:57.358Z"),obj: {_id: 17327,num: 57479,array: []}},"Guarani","Rubber"],obj: {_id: 17328,str: "Assistant",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 17329,str: "parse",num: 52406,date: new Date("2018-09-06T15:25:45.811Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17330,str: "monitor deliver Usability",num: 92531,date: new Date("2018-09-06T03:15:27.666Z"),array: [new Date("2018-09-06T16:21:48.739Z"),new Date("2018-09-06T18:42:50.646Z"),74456,new Date("2018-09-05T22:53:46.506Z"),"Paradigm deliver program","e-business",32917,"Springs Automotive",78798,[],"Kwacha Pitcairn Islands Connecticut",new Date("2018-09-06T05:10:48.310Z")],obj: {_id: 17331,str: "Architect",num: 14445,date: new Date("2018-09-05T22:58:34.911Z"),array: [{_id: 17332,str: "Kentucky Developer Roads",num: 43574,array: [new Date("2018-09-06T06:13:32.558Z"),"composite",[]],obj: {}},{_id: 17333,str: "neural",num: 67258,date: new Date("2018-09-06T04:35:34.682Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 17334,str: "Streamlined invoice",num: 47562,date: new Date("2018-09-05T21:26:08.958Z"),array: [new Date("2018-09-06T09:33:22.996Z"),"next-generation hard drive integrate",76581,[],new Date("2018-09-06T03:45:44.260Z"),[{_id: 17335,str: "Plastic",num: 70979,date: new Date("2018-09-05T23:34:49.621Z"),array: [],obj: {}},{_id: 17336,str: "withdrawal",num: 52412,date: new Date("2018-09-06T19:35:55.375Z"),obj: {}},[],new Date("2018-09-06T01:52:44.831Z")],"gold withdrawal Bedfordshire",51486,82367]});
    },

    function(coll) {
        return coll.insert({_id: 17337,str: "Generic",num: 77026,date: new Date("2018-09-06T15:49:43.413Z"),array: [new Date("2018-09-06T03:10:51.896Z"),"orange Metal",{_id: 17338,str: "Ergonomic Wooden",num: 83236,array: [],obj: {_id: 17339,num: 61799,date: new Date("2018-09-06T05:11:38.763Z"),array: [93447,23470],obj: {}}},46649,new Date("2018-09-06T08:41:12.697Z"),[],new Date("2018-09-06T03:48:20.632Z"),"Orchard Iceland Krona","Concrete Kansas",new Date("2018-09-06T02:43:22.554Z"),{_id: 17340,str: "Intelligent Steel Table haptic",num: 60126,date: new Date("2018-09-06T09:02:51.700Z"),obj: {_id: 17341,str: "primary Security",array: [59109,{_id: 17342,date: new Date("2018-09-05T23:35:22.770Z"),array: [new Date("2018-09-06T03:39:31.720Z")],obj: {}}]}},[],61992],obj: {_id: 17343,str: "red Summit bypassing",num: 67590,array: ["integrated connect e-business","Human Kansas Small Granite Soap"]}});
    },

    function(coll) {
        return coll.insert({_id: 17344,str: "Clothing",num: 57389,date: new Date("2018-09-06T03:21:46.999Z"),array: [84246,55605,{_id: 17345,str: "Leone withdrawal Bedfordshire",date: new Date("2018-09-05T22:06:12.345Z"),array: [],obj: {}},new Date("2018-09-06T01:24:45.441Z"),new Date("2018-09-06T02:40:09.537Z"),{_id: 17346,str: "Ergonomic SAS",num: 75753,date: new Date("2018-09-06T19:52:29.673Z"),obj: {_id: 17347,str: "Pants Marketing Savings Account",obj: {_id: 17348,num: 40143,date: new Date("2018-09-05T22:11:18.943Z"),array: [new Date("2018-09-06T03:47:07.619Z"),"Factors Configurable Toys"]}}},"transitional",51723,"Architect white impactful",[],"Universal Intelligent"],obj: {_id: 17349,str: "Handmade Steel Mouse Delaware invoice",num: 85063,array: [3462,new Date("2018-09-06T11:53:11.350Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 17350,str: "hybrid Business-focused Rustic Granite Gloves",num: 11634,date: new Date("2018-09-06T08:35:43.948Z"),array: [new Date("2018-09-06T17:44:08.976Z"),52916,"Cotton Computers","Assistant firewall auxiliary","superstructure solid state withdrawal",["Utah web-readiness Intuitive"],"back-end Colorado pixel",43482,{_id: 17351,str: "metrics program Czech Koruna",num: 33,date: new Date("2018-09-06T17:24:22.657Z"),array: [],obj: {_id: 17352,str: "index Internal teal",num: 3607,date: new Date("2018-09-06T11:13:51.661Z"),array: [],obj: {}}},new Date("2018-09-06T11:45:12.733Z"),64193,new Date("2018-09-05T23:49:42.283Z"),{_id: 17353,num: 41709,obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17354,str: "digital",num: 24431,date: new Date("2018-09-06T19:34:14.941Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17355,str: "Money Market Account e-commerce",num: 81103,date: new Date("2018-09-06T15:33:07.558Z"),array: [80857,new Date("2018-09-06T18:51:00.359Z"),11442,new Date("2018-09-05T23:27:16.746Z"),25435,"Representative","Tactics",14815,[],[],new Date("2018-09-06T04:58:01.576Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17356,str: "Future",num: 83234,date: new Date("2018-09-06T14:11:19.303Z"),array: [],obj: {_id: 17357,str: "Engineer repurpose Developer",date: new Date("2018-09-06T01:15:55.515Z"),array: [{_id: 17358,num: 9274,date: new Date("2018-09-06T13:59:38.883Z"),obj: {_id: 17359,str: "motivating matrix",date: new Date("2018-09-06T15:59:22.072Z"),array: [],obj: {}}},5086,new Date("2018-09-06T09:31:37.747Z"),"HTTP Cheese Plastic",[new Date("2018-09-06T07:07:00.196Z"),"Grocery Central"],"Square one-to-one",new Date("2018-09-06T17:01:01.400Z"),"Israel RSS plum",81177,{_id: 17360,date: new Date("2018-09-06T01:14:40.916Z"),array: []},[65602],"Incredible Granite Chips",92678]}});
    },

    function(coll) {
        return coll.insert({_id: 17361,str: "Guernsey Sleek",date: new Date("2018-09-06T05:33:57.426Z"),array: [new Date("2018-09-06T00:02:07.292Z"),37076,[new Date("2018-09-06T05:01:47.943Z")],"FTP",new Date("2018-09-06T03:41:17.205Z"),"Keyboard Regional",{_id: 17362,num: 45217,date: new Date("2018-09-06T07:11:22.821Z"),array: [],obj: {_id: 17363,num: 81279,date: new Date("2018-09-06T19:22:52.540Z"),array: [],obj: {}}},34888,"connect",68625,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17364,str: "orchid override",num: 25349,date: new Date("2018-09-06T14:01:00.184Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17365,str: "backing up",num: 55951,date: new Date("2018-09-06T00:54:22.443Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17366,str: "neural",num: 55022,date: new Date("2018-09-06T19:22:41.439Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17367,str: "turquoise",num: 76347,date: new Date("2018-09-06T06:13:06.327Z"),array: [],obj: {_id: 17368,str: "Balanced navigating Inverse",num: 17382,date: new Date("2018-09-06T11:57:39.940Z"),array: [],obj: {_id: 17369,str: "Colorado",date: new Date("2018-09-06T12:33:50.949Z"),array: [new Date("2018-09-06T09:53:31.228Z"),53170,"orchid COM",27040,[94632,new Date("2018-09-06T13:47:22.364Z")],new Date("2018-09-06T18:22:24.931Z"),"Refined Frozen Bike",new Date("2018-09-06T06:56:58.579Z"),[],{_id: 17370,num: 25345,date: new Date("2018-09-06T12:35:19.013Z"),obj: {}},"User-friendly"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17371,num: 63716,array: [],obj: {_id: 17372,str: "mindshare Chips",date: new Date("2018-09-06T18:40:35.022Z"),array: [48623,"generating salmon extend",new Date("2018-09-06T04:38:45.250Z"),new Date("2018-09-06T09:37:40.789Z"),87327,new Date("2018-09-06T09:31:35.534Z"),12675,"index",[],[new Date("2018-09-06T16:52:18.975Z"),"Adaptive deliverables"],new Date("2018-09-05T22:51:38.398Z"),[],{_id: 17373,str: "Maine",num: 99346,date: new Date("2018-09-05T22:25:38.265Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 17374,str: "Mountains",num: 21516,date: new Date("2018-09-06T03:30:30.570Z"),array: [new Date("2018-09-06T02:15:41.660Z"),65695,"architecture mobile Liaison",55261,"Afghanistan Awesome Frozen Chips Pizza",new Date("2018-09-06T11:25:41.580Z"),[],29899,"standardization",new Date("2018-09-06T09:45:01.442Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17375,str: "program",num: 36237,date: new Date("2018-09-06T06:32:50.470Z"),array: [31194,"CSS invoice",{_id: 17376,num: 8607,array: [],obj: {}},72339],obj: {_id: 17377,str: "Indiana invoice array",num: 7416,date: new Date("2018-09-06T19:00:32.976Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17378,str: "Lek",num: 15981,date: new Date("2018-09-05T20:47:35.686Z"),array: [15187,new Date("2018-09-06T17:01:10.206Z"),[],new Date("2018-09-05T22:44:00.019Z"),24596,new Date("2018-09-06T04:33:19.595Z"),"wireless",88226,"synthesizing",15586,"overriding Infrastructure protocol","Diverse",{_id: 17379,str: "1080p",num: 34500,date: new Date("2018-09-05T21:01:00.805Z"),array: [],obj: {_id: 17380,array: [],obj: {_id: 17381,str: "Cotton",num: 20256,date: new Date("2018-09-06T18:37:48.787Z"),obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17382,str: "motivating",num: 98556,date: new Date("2018-09-06T16:51:36.451Z"),array: [new Date("2018-09-06T07:18:56.500Z"),12757,[],[],"indexing Developer","schemas",new Date("2018-09-05T20:16:18.781Z"),new Date("2018-09-06T04:02:26.633Z"),new Date("2018-09-06T10:40:13.697Z"),"multi-byte"],obj: {_id: 17383,date: new Date("2018-09-06T00:04:53.959Z"),array: [93945,67202,78796,{_id: 17384,str: "FTP Global Money Market Account",num: 83230,date: new Date("2018-09-05T23:41:30.569Z"),array: []},"didactic"]}});
    },

    function(coll) {
        return coll.insert({_id: 17385,str: "firewall Keyboard Directives",num: 40382,date: new Date("2018-09-06T13:30:00.686Z"),array: [34514,new Date("2018-09-05T21:33:11.473Z"),64499,"Identity Industrial Regional","New Hampshire",new Date("2018-09-06T16:52:25.243Z"),"innovate",new Date("2018-09-05T20:23:40.013Z"),46402,{_id: 17386,str: "Operations",num: 65773,date: new Date("2018-09-05T23:47:57.637Z"),array: [],obj: {}},"Frozen Indiana"],obj: {_id: 17387,num: 79770,date: new Date("2018-09-06T05:46:14.006Z"),array: [new Date("2018-09-06T16:51:33.942Z"),[],{_id: 17388,str: "Progressive",num: 17374,array: [86616],obj: {_id: 17389,str: "technologies Brand",date: new Date("2018-09-06T08:00:03.839Z"),array: ["Garden generate Programmable"],obj: {_id: 17390,str: "EXE Robust override",num: 31136}}},[],{_id: 17391,date: new Date("2018-09-06T15:23:03.457Z")}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17392,str: "quantifying Dynamic Customer",num: 32062,date: new Date("2018-09-06T04:32:07.393Z"),array: [],obj: {_id: 17393,str: "green Kenya capacitor",num: 71807,date: new Date("2018-09-05T22:52:53.113Z"),array: [96115,"RSS","redefine",new Date("2018-09-06T06:05:38.981Z"),{_id: 17394,str: "stable hacking Forest",date: new Date("2018-09-06T11:23:35.915Z"),array: [new Date("2018-09-06T04:19:43.613Z"),{_id: 17395,num: 92766,date: new Date("2018-09-06T18:29:10.259Z"),obj: {_id: 17396,str: "convergence",num: 21974,obj: {_id: 17397,str: "Malaysian Ringgit global",obj: {}}}},"overriding cross-platform"],obj: {_id: 17398,date: new Date("2018-09-06T08:11:28.061Z"),array: [new Date("2018-09-06T10:32:07.524Z"),12976]}},"invoice Chief",[60755,[],{_id: 17399,str: "JSON",num: 98536,date: new Date("2018-09-06T08:33:52.679Z"),obj: {}},[]],new Date("2018-09-06T02:47:39.506Z"),[],7553,"leverage"]}});
    },

    function(coll) {
        return coll.insert({_id: 17400,str: "Rustic infomediaries redundant",num: 39300,array: [new Date("2018-09-06T04:37:52.355Z"),"engineer",46959,66272,"Massachusetts Checking Account bandwidth",new Date("2018-09-06T09:55:10.015Z"),26717,{_id: 17401,str: "web-enabled invoice Jersey",num: 32117,date: new Date("2018-09-06T11:41:45.340Z"),array: [],obj: {_id: 17402,str: "deliverables",num: 38200,date: new Date("2018-09-05T21:23:46.964Z"),obj: {_id: 17403,str: "Pants",num: 25102,date: new Date("2018-09-06T01:28:56.155Z"),array: [],obj: {}}}},new Date("2018-09-06T08:17:41.576Z"),[{_id: 17404,str: "Kyrgyz Republic withdrawal",num: 89551,date: new Date("2018-09-06T14:01:34.160Z"),array: ["Keyboard Salad Towels",[]]},{_id: 17405,num: 42404,obj: {}},new Date("2018-09-06T02:30:49.450Z"),"District"],"feed Berkshire Granite",new Date("2018-09-06T17:04:22.833Z")]});
    },

    function(coll) {
        return coll.insert({_id: 17406,str: "Walks Liaison",num: 44531,date: new Date("2018-09-05T20:08:43.646Z"),array: [],obj: {_id: 17407,num: 33928,date: new Date("2018-09-06T03:04:58.184Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17408,num: 53583,date: new Date("2018-09-05T22:27:07.356Z"),array: [],obj: {_id: 17409,str: "SCSI Ball",num: 51859,date: new Date("2018-09-06T16:20:07.949Z"),array: [81164,new Date("2018-09-06T14:44:23.162Z"),[],new Date("2018-09-06T05:36:35.608Z"),[],new Date("2018-09-06T12:33:23.312Z"),new Date("2018-09-06T02:10:46.605Z"),"withdrawal Egyptian Pound invoice","Crossing Berkshire open-source",40503,1041],obj: {_id: 17410,str: "Producer matrix",num: 29807,date: new Date("2018-09-06T16:09:11.032Z"),array: [{_id: 17411,str: "Lithuania Soap",date: new Date("2018-09-06T16:14:25.193Z"),array: [{_id: 17412,str: "mobile Money Market Account",num: 77491,obj: {_id: 17413,str: "Personal Loan Account Designer evolve"}},"Toys",881],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 17414,num: 55677,date: new Date("2018-09-06T06:40:32.941Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17415,num: 28325,date: new Date("2018-09-06T00:09:19.723Z"),array: [[],new Date("2018-09-06T18:34:28.011Z"),"user-centric XML",{_id: 17416,str: "River calculating Customer",num: 80602,array: [],obj: {}},70623,new Date("2018-09-06T18:06:13.874Z"),98180,61070,"sensor","Garden online"]});
    },

    function(coll) {
        return coll.insert({_id: 17417,str: "District Representative",date: new Date("2018-09-06T14:46:33.010Z"),array: ["Ramp multi-byte deposit",29413,"Point Diverse","deposit",new Date("2018-09-06T01:14:00.175Z"),new Date("2018-09-05T23:08:37.424Z"),new Date("2018-09-06T09:52:55.808Z"),[new Date("2018-09-06T16:05:52.893Z"),77902],31401,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17418,str: "maroon Digitized disintermediate",num: 97203,date: new Date("2018-09-05T20:10:56.960Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17419,str: "circuit Pizza synthesizing",num: 97109,date: new Date("2018-09-06T08:36:06.262Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17420,str: "Wallis and Futuna Won Quality-focused",num: 71833,date: new Date("2018-09-05T23:56:13.149Z"),array: [],obj: {_id: 17421,str: "virtual mobile Incredible",date: new Date("2018-09-05T21:42:19.894Z"),array: [{_id: 17422,num: 5737,date: new Date("2018-09-06T00:15:16.680Z"),array: [],obj: {}},42614,new Date("2018-09-05T22:22:09.487Z"),"solid state",new Date("2018-09-06T05:35:20.366Z"),57001,new Date("2018-09-05T22:07:01.280Z"),"New Hampshire back-end",[new Date("2018-09-06T09:51:45.747Z"),[],new Date("2018-09-06T07:28:04.007Z")],"Solutions","Kids card Chile"],obj: {_id: 17423,num: 32384,date: new Date("2018-09-06T19:20:21.871Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 17424,str: "Tanzanian Shilling navigate",num: 53592,date: new Date("2018-09-06T18:46:15.572Z"),array: ["Cheese Serbian Dinar","microchip",59775,{_id: 17425,str: "Baby e-business override",num: 1432,date: new Date("2018-09-06T17:05:19.654Z"),array: []},883,58619,{_id: 17426,str: "e-tailers hack",date: new Date("2018-09-06T08:15:29.717Z"),array: [],obj: {_id: 17427,str: "experiences Liechtenstein",num: 6101,date: new Date("2018-09-06T10:26:18.195Z"),array: [],obj: {}}},99267,43649,new Date("2018-09-06T06:35:02.193Z")],obj: {_id: 17428,num: 29604,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17429,str: "modular ivory",num: 67013,date: new Date("2018-09-06T10:07:19.898Z"),array: ["payment relationships Money Market Account",48699,48503,"Interactions web-readiness",new Date("2018-09-06T17:06:52.664Z"),new Date("2018-09-06T14:09:47.429Z"),new Date("2018-09-06T06:59:25.567Z"),74112],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17430,str: "Auto Loan Account Identity Gambia",num: 73365,array: ["copy aggregate programming",69110,new Date("2018-09-06T15:46:58.908Z"),26553,{_id: 17431,str: "Associate",num: 15045,date: new Date("2018-09-06T04:29:56.731Z"),array: []},new Date("2018-09-05T22:03:33.181Z"),81457,"Parks","Accounts invoice solutions",12919],obj: {_id: 17432,str: "Car Ergonomic Rubber Salad",date: new Date("2018-09-06T00:19:30.924Z"),obj: {_id: 17433,num: 64451,date: new Date("2018-09-05T22:50:24.767Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17434,str: "synthesize monitoring deposit",num: 86437,obj: {_id: 17435,str: "Borders navigating",num: 65046,date: new Date("2018-09-06T10:57:12.249Z"),array: ["Station Namibia","ability",new Date("2018-09-06T16:36:09.366Z"),11248,new Date("2018-09-06T17:47:24.644Z"),"Row viral",21064,51874,new Date("2018-09-06T13:15:54.730Z"),21958,{_id: 17436,str: "Gorgeous Steel Pants",num: 30304,date: new Date("2018-09-06T01:15:18.379Z"),array: [],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17437,num: 45719,date: new Date("2018-09-06T08:24:25.951Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17438,str: "world-class",num: 60343,date: new Date("2018-09-06T03:29:22.100Z"),array: [new Date("2018-09-06T05:21:01.345Z"),6052,"SSL",22145,new Date("2018-09-06T08:58:03.814Z"),new Date("2018-09-06T06:54:00.173Z"),[]],obj: {_id: 17439,str: "Bahamas monitor",date: new Date("2018-09-06T13:49:18.129Z"),array: [52065,"Grove compressing",new Date("2018-09-06T02:54:43.823Z"),70221,66997,{_id: 17440,date: new Date("2018-09-06T16:50:01.990Z"),obj: {_id: 17441,str: "Rapids synthesize",num: 11917}}],obj: {_id: 17442,str: "disintermediate",num: 10426,date: new Date("2018-09-06T18:27:01.877Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 17443,str: "Licensed",num: 25100,date: new Date("2018-09-06T08:44:33.908Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17444,str: "deploy Shoes",num: 34936,date: new Date("2018-09-06T07:19:01.243Z"),array: [{_id: 17445,num: 85156,date: new Date("2018-09-06T06:47:56.726Z"),array: [],obj: {_id: 17446,num: 13841,array: [],obj: {}}},59975,"SDR Falkland Islands Pound Enterprise-wide",13842,{_id: 17447,str: "Isle eyeballs even-keeled",num: 33194,date: new Date("2018-09-06T10:53:24.827Z"),array: [new Date("2018-09-06T12:38:41.340Z")],obj: {}},19452,"fuchsia",{_id: 17448,str: "incubate",date: new Date("2018-09-05T21:16:03.247Z")},new Date("2018-09-06T19:30:45.347Z"),[],new Date("2018-09-06T11:25:50.680Z"),67483,new Date("2018-09-06T08:53:09.082Z")],obj: {_id: 17449,str: "Licensed Metal Ball Solutions Refined",num: 56227,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17450,str: "standardization",num: 44303,date: new Date("2018-09-06T18:29:10.638Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17451,str: "interface",num: 69734,date: new Date("2018-09-06T18:17:40.183Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17452,str: "input enhance Saint Martin",num: 14377,array: [],obj: {_id: 17453,str: "transmitting",num: 96655,date: new Date("2018-09-06T16:40:13.551Z"),array: ["alarm optical Gorgeous Metal Cheese",86842,"COM",58688,59722,new Date("2018-09-06T06:55:05.781Z"),[],{_id: 17454,str: "matrix Myanmar",date: new Date("2018-09-06T04:09:58.921Z"),array: ["cutting-edge paradigms","Cambridgeshire Bedfordshire",[new Date("2018-09-06T01:34:35.248Z"),new Date("2018-09-05T21:50:28.554Z")]],obj: {_id: 17455,num: 16068,date: new Date("2018-09-06T15:26:25.613Z"),obj: {}}},new Date("2018-09-06T06:38:56.586Z"),{_id: 17456,str: "panel Uzbekistan",num: 39667,array: []},new Date("2018-09-06T12:28:19.046Z"),"Open-source"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17457,str: "capacity Wooden Borders",num: 90910,date: new Date("2018-09-06T15:11:44.326Z"),array: [],obj: {_id: 17458,num: 85095,date: new Date("2018-09-06T00:27:27.610Z"),obj: {_id: 17459,str: "Handcrafted Wooden Keyboard",num: 77108,date: new Date("2018-09-06T18:26:37.513Z"),array: [22125,83792,new Date("2018-09-06T04:59:50.840Z"),"needs-based","Outdoors TCP",["architectures B2C Facilitator",14589,new Date("2018-09-06T12:56:30.968Z"),{_id: 17460,str: "revolutionary index Village",array: []}],new Date("2018-09-06T17:36:49.206Z"),[99195,{_id: 17461,num: 90529,date: new Date("2018-09-06T11:32:06.269Z"),array: [],obj: {}},81474],new Date("2018-09-05T21:13:46.405Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 17462,str: "District parsing",date: new Date("2018-09-06T10:25:18.730Z"),array: ["Berkshire",59474,new Date("2018-09-05T20:42:14.987Z"),{_id: 17463,str: "program",num: 25531,date: new Date("2018-09-06T11:15:09.445Z"),array: [],obj: {}},new Date("2018-09-06T00:59:49.207Z"),"Direct Optional",18200,"orchestrate payment",{_id: 17464,num: 35614,obj: {_id: 17465,str: "Berkshire",date: new Date("2018-09-06T10:03:10.679Z"),array: ["Rubber North Dakota lavender"],obj: {_id: 17466,str: "payment Cambridgeshire",num: 95539,date: new Date("2018-09-06T19:06:03.753Z"),array: [],obj: {}}}},21428,[33505,["Credit Card Account"],new Date("2018-09-06T14:23:56.381Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 17467,str: "Sharable efficient",num: 52237,date: new Date("2018-09-06T08:20:32.548Z"),array: [new Date("2018-09-06T03:08:04.612Z"),"payment Analyst context-sensitive",new Date("2018-09-06T06:57:47.988Z"),306,[],new Date("2018-09-06T06:51:28.797Z"),1440,{_id: 17468,str: "Chilean Peso Unidades de fomento Iranian Rial RAM",num: 9024,date: new Date("2018-09-06T11:58:56.650Z"),array: [],obj: {}},"Islands","Australian Dollar"],obj: {_id: 17469,str: "withdrawal Chief orchid",num: 6764,obj: {_id: 17470,num: 9081,date: new Date("2018-09-05T23:24:35.468Z"),array: [[],{_id: 17471,array: [69041]},new Date("2018-09-06T02:46:08.982Z"),66910,"composite Car Tuna"],obj: {_id: 17472,str: "Computers Belize Sleek Granite Pizza",num: 49461,date: new Date("2018-09-06T00:06:33.416Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 17473,str: "Cocos (Keeling) Islands Licensed Fresh Ball",num: 749,date: new Date("2018-09-06T15:45:44.123Z"),array: [],obj: {_id: 17474,str: "Direct Infrastructure",num: 37866,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 17475,str: "calculate Turnpike",num: 51574,date: new Date("2018-09-06T10:55:28.420Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 17476,str: "Profound Pants",num: 88259,date: new Date("2018-09-06T00:11:49.344Z"),array: [],obj: {_id: 17477,str: "Representative indexing Sharable",num: 23431,date: new Date("2018-09-06T04:22:30.454Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 17478,str: "Program Buckinghamshire withdrawal",num: 3612,date: new Date("2018-09-06T14:40:06.040Z"),array: [35061,new Date("2018-09-06T09:18:35.535Z"),[],new Date("2018-09-06T02:52:03.748Z"),"sensor",{_id: 17479,str: "quantifying",num: 45237,date: new Date("2018-09-05T21:11:52.308Z"),array: [],obj: {}},new Date("2018-09-05T20:21:07.850Z"),[],"hub optical embrace"],obj: {_id: 17480,str: "coherent Generic",num: 98888,date: new Date("2018-09-06T04:13:48.038Z"),array: [],obj: {_id: 17481,str: "capacitor ROI Sausages",date: new Date("2018-09-06T05:52:03.664Z"),array: []}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["XML Savings Account"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $toDate: { $arrayElemAt: [[{ $substrBytes: ["Small Wooden Pants redundant",19,15] }],'$num'] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $ltrim: { input: { $substrCP: ['$obj.obj.obj.str',2,1] } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T09:39:00.420Z",timezone: "Africa/Bujumbura",onError: { $arrayElemAt: [[25070,{ $log: [54205,'$obj.obj.obj.num'] },'$obj.num'],49951] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ["empower IB Licensed Concrete Car",{ $trim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.str'} },"brand mobile"] },"deposit Antigua and Barbuda"],99959] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',17,20] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $multiply: [] },hour: { $multiply: [37303] },second: { $mod: ['$num','$obj.num'] },millisecond: { $indexOfArray: [{ $reverseArray: [[]] },{ $isoWeek: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T17:27:18.819Z"),timezone: "Europe/Oslo",onNull: { $substrCP: ['$obj.obj.obj.str',5,7] }} } } },13] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-05T21:10:17.423Z"),format: "%u-%%-%d-%S"} }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["bypass orchid",65166],['$obj.obj.obj.num'],['$obj.obj.str',{ $substr: ['$str',18,20] }],[{ $substrBytes: ["sensor Virtual maximize",4,0] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "navigating Garden Bedfordshire" }],'$num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T17:55:00.914Z",timezone: "Africa/Sao_Tome",onError: { $arrayToObject: [[{k: "North Carolina Neck",v: 44179},{k: "24/7 Rustic Metal Car Tasty Steel Soap",v: { $dayOfYear: { $year: { $month: { $dateToString: {date: '$obj.obj.obj.date',onNull: "Maryland"} } } } }}]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num','$obj.num'],97524] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],'$obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.str',{ $toString: { $month: { $toDate: { $trim: {input: "Table red mint green",chars: '$obj.str'} } } } }],['$obj.obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Small interactive",v: true},{k: "strategize Function-based Planner",v: { $toDate: { $arrayElemAt: [[],'$num'] } }}]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $concat: [{ $substr: [{ $dateToString: {date: '$obj.obj.obj.date',format: "%V-%u-%S-%j-%j-%L-%S-%L-%S-%V"} },7,17] }] } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],31512] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str',"Forint help-desk",{ $substrBytes: ["Assurance",8,0] }],as: 'jasmin',in: { $multiply: [49586] }} }, _id: 0}}],

        [{$project: {a: { $range: [6,2,7] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $minute: '$date' },timezone: "Etc/GMT-14",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["infrastructures Gateway Corporate","Orchestrator Rubber",{ $substrCP: ['$obj.obj.str',6,15] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $month: { $dateToString: {date: { $dayOfYear: { $minute: { $isoDayOfWeek: { $isoWeekYear: { $dayOfWeek: { $hour: { $week: { $second: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $subtract: ['$num',45785] },isoWeek: { $pow: [77115,'$num'] },second: { $log: [{ $size: [['$obj.num','$obj.obj.obj.num',60735,'$obj.obj.obj.num']] },32119] },millisecond: { $pow: ['$obj.obj.obj.num',{ $abs: '$obj.obj.obj.num' }] },timezone: "Pacific/Noumea"} },timezone: "Asia/Ujung_Pandang"} } } } } } } } } },format: "%w-%Z-%S-%G-%H-%U-%u-%%-%d-%u",onNull: { $second: { $millesecond: { $second: { $dayOfMonth: { $dateToParts: { date: { $dateFromString: {dateString: "2018-09-05T20:24:22.806Z",onError: { $arrayToObject: [[['$obj.obj.str',{ $toUpper: '$obj.obj.str' }],[],[68144]]] }} } } } } } } }} } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[86119,'$num',60564],["Sleek Steel Shoes Awesome moderator",{ $ltrim: {input: { $toString: { $ltrim: {input: '$obj.obj.str',chars: '$obj.obj.obj.str'} } },chars: "Money Market Account"} },{ $trim: { input: '$obj.obj.obj.str' } }]]] } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toUpper: "parsing Rubber" },8,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Nevada Credit Card Account",v: "Road Credit Card Account Key"}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $minute: { $dayOfYear: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $add: [] },isoDayOfWeek: { $indexOfArray: [{ $range: [13,10,3] },{ $dateFromString: {dateString: "2018-09-06T15:57:29.344Z",format: "%Z-%V-%j-%S-%j-%V-%m",onError: { $filter: {input: [],as: 'karlee',cond: { $not: [{ $arrayToObject: [[['$$karlee',{ $floor: '$obj.num' }],[{ $substrBytes: ["Cocos (Keeling) Islands Refined Plastic Sausages ROI",13,0] }],['$$karlee',{ $toUpper: '$obj.str' }],[4481],[28716]]] }] }} },onNull: { $arrayElemAt: [[28732,'$num',52887],'$obj.num'] }} },20,19] },hour: '$obj.obj.num',minute: { $exp: 41828 },second: { $mod: ['$obj.obj.obj.num',33318] }} },timezone: "Etc/Greenwich"} } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $year: { $hour: '$obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $substrBytes: [{ $substrBytes: ['$obj.obj.str',15,7] },12,11] },15,1] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $dayOfYear: '$obj.obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[5277],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $second: { $millesecond: { $dayOfMonth: { $isoWeek: { $month: { $minute: { $dateFromString: { dateString: "2018-09-06T13:25:00.989Z" } } } } } } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Saudi Riyal" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "lavender",v: '$obj.obj.date'},{k: "connect",v: false}]] }, _id: 0}}],

        [{$project: {a: { $week: { $year: { $dateFromParts: {year: { $subtract: [1379,32512] },day: { $ln: '$obj.num' },hour: { $cmp: [{ $arrayElemAt: [['$obj.obj.num','$obj.obj.obj.num'],'$obj.num'] },{ $trim: {input: '$obj.str',chars: '$obj.obj.str'} }] },minute: { $ceil: '$obj.num' },millisecond: { $trunc: '$obj.obj.num' },timezone: "Pacific/Galapagos"} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $ltrim: {input: { $toUpper: "Handcrafted program" },chars: { $rtrim: { input: '$obj.str' } }} }],cond: { $lte: [{ $dayOfYear: { $year: { $dateFromString: {dateString: "2018-09-06T12:24:06.636Z",onError: { $isoWeekYear: { $millesecond: { $week: { $dateFromParts: {isoWeekYear: { $ceil: '$$this' },isoWeek: { $floor: 99588 },second: { $abs: '$obj.obj.obj.num' },millisecond: { $exp: 46321 }} } } } },onNull: { $arrayToObject: [[['$$this']]] }} } } },{ $concatArrays: [[],['$obj.str','$obj.str'],[38603,'$$this'],[]] }] }} }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',13,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T04:06:20.007Z",format: "%Y-%j-%%-%H",timezone: "Pacific/Chatham",onError: { $isoDayOfWeek: { $week: { $minute: { $dateFromString: {dateString: "2018-09-06T13:10:00.469Z",onNull: { $arrayElemAt: [['$obj.obj.str'],21671] }} } } } },onNull: { $trim: { input: "Bike" } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "Christmas Island Group stable" }],69398] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $ltrim: {input: "harness",chars: '$str'} },"olive ADP","responsive"],[],[{ $toUpper: '$obj.obj.str' }],[],[38843]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Generic Frozen Pants Small revolutionary",v: 70548}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num'],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [["Roads"],28522] } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Clothing Montana brand" } }, _id: 0}}],

        [{$project: {a: { $range: [15,8,11] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $second: { $year: { $second: { $toDate: { $ltrim: { input: '$obj.obj.str' } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Orchestrator",chars: "sky blue Handmade Steel Computer override"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Intelligent Cotton Hat",v: { $concat: [] }},{k: "interactive",v: 95541}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"object-oriented",{ $toLower: "Group sexy Architect" },"virtual"],87476] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Sleek Soft Table Games redundant" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Factors protocol"],[],[{ $substrBytes: ['$str',14,1] },{ $toString: { $year: { $isoDayOfWeek: { $second: { $month: { $isoWeekYear: { $isoDayOfWeek: { $hour: { $week: { $isoWeek: { $dayOfYear: { $dayOfMonth: { $isoWeekYear: { $isoDayOfWeek: { $dayOfYear: new Date("2018-09-06T14:00:19.358Z") } } } } } } } } } } } } } } },'$str'],[],[42717]]] }, _id: 0}}],

        [{$project: {a: { $week: { $hour: { $dayOfYear: { $isoDayOfWeek: { $dayOfWeek: { $isoWeekYear: { $year: { $millesecond: { $toDate: { $objectToArray: '$obj.obj' } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $minute: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T19:22:54.231Z",timezone: "Asia/Pyongyang",onError: { $arrayToObject: [[{k: "extend",v: 81082},{k: "Jewelery",v: '$date'},{k: "Fantastic Plastic Towels bluetooth Gorgeous",v: '$obj.obj.obj.str'}]] },onNull: { $substrCP: [{ $rtrim: { input: "Strategist" } },17,4] }} },iso8601: true} } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',3,11] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Group" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],50431] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $concat: ['$str',{ $substr: ["Toys connecting optical",2,5] }] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $trim: { input: '$obj.obj.str' } },17,11] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $week: { $dateToParts: {date: { $isoWeek: { $isoWeekYear: { $isoWeek: { $minute: { $dateFromString: {dateString: "2018-09-06T11:14:07.799Z",format: "%V-%d-%Z-%m-%Y-%z-%m",timezone: "America/Cayman"} } } } } },iso8601: false} } },timezone: "America/Swift_Current",onNull: { $arrayToObject: [[]] }} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromString: {dateString: "2018-09-06T05:38:33.353Z",format: "%w-%S-%%-%U-%U-%G-%G-%L-%j",timezone: "Asia/Novosibirsk",onNull: "International International payment"} } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T07:46:39.220Z",format: "%d-%d-%H-%U-%M-%d-%S-%j-%Y"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],[65224],[],['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "iterate",v: false}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $multiply: ['$$this'] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.num',89473],as: 'thalia',in: { $size: [[]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',{ $log: [2551,'$obj.num'] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $substr: ["Belize Dollar Platinum Metal",19,9] }],[],[],['$num'],['$obj.str','$str',"Personal Loan Account synthesizing","cohesive Hryvnia neutral",'$obj.obj.str']],useLongestLength: true,defaults: [84254]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',33896],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Pizza copying Awesome Metal Keyboard"],74932] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',{ $dateToString: {date: '$date',format: "%L-%z-%z-%%-%d-%m-%V-%d-%m-%V",onNull: { $rtrim: { input: "Plastic" } }} },'$str'],["ADP deposit firewall"],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $ltrim: { input: '$obj.obj.str' } }],[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%Z-%m-%%-%S-%U-%G-%u-%j-%j-%Z",timezone: "Africa/Porto-Novo"} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $add: [65575,'$obj.obj.obj.num'] },isoWeek: { $ln: 22307 },hour: { $log: ['$obj.obj.obj.num',63309] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$str',"Chief"],[],[{ $toLower: "Home Loan Account intangible" }],['$obj.obj.obj.str',{ $ltrim: { input: '$obj.obj.str' } },{ $ltrim: {input: "optimize",chars: "port Handmade"} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Uganda Generic",v: true}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num',41424,80008],as: 'brett',cond: { $gt: [{ $substrCP: [{ $toUpper: '$$brett' },5,0] },new Date("2018-09-06T14:15:00.208Z")] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Generic Soft Hat Practical hacking",15,12] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $week: { $dayOfWeek: { $isoDayOfWeek: { $isoWeekYear: { $dayOfYear: { $week: { $dateFromString: {dateString: "2018-09-06T15:16:42.861Z",format: "%M-%M-%G-%m-%H-%z-%d",timezone: "Africa/Malabo",onError: { $substrCP: ["Jamaican Dollar",1,20] },onNull: { $toLower: { $toString: { $arrayElemAt: [[],44135] } } }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $millesecond: { $dateFromString: {dateString: "2018-09-06T11:11:51.080Z",format: "%V-%%-%V-%S-%M-%u-%H-%m-%V-%m-%H",timezone: "US/Arizona",onNull: '$obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "Gorgeous calculate digital",v: false},{k: "Grass-roots whiteboard Developer",v: '$date'}]] } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $hour: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T19:51:06.012Z",timezone: "Asia/Dushanbe",onNull: "hard drive enterprise"} } } } }, _id: 0}}],

        [{$project: {a: { $year: { $month: { $isoWeekYear: { $minute: { $dateToParts: { date: { $minute: { $dateToString: {date: new Date("2018-09-05T22:03:28.885Z"),timezone: "Africa/Malabo"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "compressing enhance",v: 42811}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Hat Fish",'$obj.obj.str',{ $toLower: '$obj.obj.str' }],'$num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $concatArrays: [["Electronics Costa Rican Colon",'$obj.str'],[26304],['$obj.obj.obj.num','$num',69701],[]] } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],["frame",{ $ltrim: {input: { $substr: ['$obj.str',19,19] },chars: '$str'} },{ $dateToString: {date: { $hour: { $isoWeekYear: { $month: { $dateFromParts: {isoWeekYear: { $pow: ['$obj.obj.num',11462] },isoDayOfWeek: { $abs: 27681 },hour: { $exp: '$num' },minute: { $indexOfArray: [{ $range: [20,12] },{ $arrayToObject: [[["TCP",'$obj.obj.str',"New Hampshire sensor"],[]]] },9] },second: { $divide: [18170,29053] },millisecond: { $indexOfArray: [{ $reverseArray: [['$num']] },{ $arrayElemAt: [[],{ $log: [{ $ceil: 83177 },'$obj.obj.num'] }] },15] },timezone: "America/Boise"} } } } },format: "%G-%z-%%-%Z-%%-%Z-%V-%G-%%-%G-%S-%H",timezone: "Asia/Amman"} }],["purple"],[]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $multiply: [] },month: { $log: [69405,'$num'] },hour: { $pow: [28345,'$obj.num'] },minute: { $size: [[{ $toLower: '$obj.obj.obj.str' },"Baby"]] },timezone: "America/St_Kitts"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["panel",'$obj.str',{ $substr: ["payment feed auxiliary",4,14] }],in: { $trunc: 28307 }} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T08:21:54.293Z",onError: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [['$obj.str',"Usability bypass mint green"],70908] },{ $filter: {input: [],cond: { $ne: [{ $map: {input: [{ $add: [] },'$num'],in: { $mod: [3745,{ $exp: { $subtract: [42805,'$$this'] } }] }} },{ $arrayToObject: [[[],[{ $substr: ["Serbian Dinar Salad Small",0,2] }],[89792,'$obj.obj.obj.num'],[]]] }] }} }] },hour: { $sqrt: '$obj.num' },minute: { $subtract: [20547,'$obj.obj.obj.num'] },second: { $abs: 9506 },millisecond: { $abs: '$obj.num' },timezone: "Africa/Algiers"} }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$num',21743]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $year: { $minute: { $dateToParts: {date: { $month: { $hour: { $minute: { $isoWeek: { $second: { $dayOfWeek: { $isoDayOfWeek: { $dateToString: {date: { $week: { $month: { $dateFromParts: {isoWeekYear: { $divide: [3513,'$num'] },isoWeek: { $size: [[]] },isoDayOfWeek: { $abs: '$obj.obj.obj.num' },hour: { $abs: '$obj.num' },minute: { $log: [{ $sqrt: 58718 },58293] },second: { $mod: [88531,'$obj.obj.obj.num'] },millisecond: { $pow: [{ $multiply: [86481,59406,'$obj.obj.obj.num',{ $ln: { $mod: [{ $subtract: [56860,'$obj.num'] },88957] } },26617] },'$obj.num'] },timezone: "Asia/Magadan"} } } },onNull: { $concatArrays: [['$obj.obj.obj.str'],[],["Applications"],[{ $trim: { input: { $toUpper: '$str' } } },"Arizona"],[{ $ceil: '$obj.obj.obj.num' },new Date("2018-09-06T15:05:18.945Z"),'$obj.obj.obj.str','$obj.obj.obj.str'],['$obj.obj.num']] }} } } } } } } } },timezone: "America/Phoenix"} } } } }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toString: { $arrayToObject: [[{k: "Games",v: '$obj.obj.str'},{k: "Unbranded incubate infomediaries",v: { $isoDayOfWeek: { $isoWeek: { $toDate: { $dayOfMonth: { $dateToParts: { date: { $year: { $dayOfWeek: { $isoWeekYear: { $dayOfWeek: { $millesecond: { $year: new Date("2018-09-06T13:04:48.518Z") } } } } } } } } } } } }},{k: "Home Loan Account core cutting-edge",v: { $dayOfMonth: { $month: { $hour: { $second: { $second: { $dayOfWeek: { $hour: { $isoWeekYear: { $dayOfYear: { $dayOfMonth: { $toDate: { $arrayElemAt: [['$str',{ $substrCP: ['$str',11,9] },"reciprocal Operations Shoes"],43121] } } } } } } } } } } } }}]] } },chars: "Tennessee Concrete"} }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromParts: {year: { $cmp: [{ $dayOfYear: { $isoWeekYear: { $dateToParts: {date: { $second: { $week: { $toDate: { $arrayElemAt: [['$num',63126],'$num'] } } } },iso8601: false} } } },{ $arrayElemAt: [[{ $concat: [{ $concat: ["Intelligent Handmade Fresh Cheese models",'$str','$obj.str'] }] },{ $dateToString: {date: { $dayOfWeek: { $hour: { $dateToString: {date: '$obj.obj.date',timezone: "Israel",onNull: { $substrCP: ['$str',4,1] }} } } },format: "%w-%%-%m-%G-%j-%G-%V-%L-%%",timezone: "Africa/Asmara"} }],77502] }] },month: { $floor: '$obj.obj.num' },minute: 48946,second: { $size: [['$obj.obj.obj.str',"Sleek Handmade Soft Bacon"]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "hard drive",v: '$obj.num'},{k: "Gorgeous hacking",v: { $dayOfWeek: { $hour: { $isoWeekYear: { $isoDayOfWeek: { $second: { $dateFromParts: {isoWeekYear: { $add: [] },isoWeek: { $log: [86717,'$obj.num'] },isoDayOfWeek: { $mod: [89668,'$num'] },hour: { $ceil: 13146 },millisecond: { $ln: { $exp: '$obj.obj.obj.num' } }} } } } } } }},{k: "Refined Soft Fish",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["withdrawal"],[],[{ $ltrim: { input: '$obj.obj.str' } },"back-end Licensed",'$obj.str'],['$obj.obj.num',27509,51717],[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["Developer",19,9] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $substrCP: ['$obj.obj.str',9,13] },"UAE Dirham challenge",{ $toLower: { $concat: ["reboot",'$str'] } },'$str'],[{ $trim: {input: "Customizable Buckinghamshire Licensed",chars: '$str'} }]],useLongestLength: true,defaults: [/^experiences/,new Date("2018-09-06T12:51:05.855Z"),85570]} }, _id: 0}}],

        [{$project: {a: { $map: {input: ["turquoise Applications"],as: 'anya',in: { $sqrt: '$obj.obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["haptic mindshare",'$obj.obj.obj.str'],51068] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $dateToString: {date: '$obj.date',format: "%L-%S-%V-%%-%j-%S-%V-%S-%S",timezone: "Pacific/Truk",onNull: '$str'} },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "connect relationships",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $substrBytes: ['$obj.obj.str',18,20] },{ $substr: ["Creative",11,18] }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $toLower: "programming SSL" },"Assistant New Mexico withdrawal"],'$num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[12539],[],['$obj.str',{ $ltrim: { input: "Credit Card Account" } }]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $rtrim: {input: '$str',chars: "Rustic transmitting New Taiwan Dollar"} } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $toDate: { $rtrim: { input: '$obj.obj.str' } } } }, _id: 0}}],

        [{$project: {a: { $month: { $toDate: { $arrayToObject: [[{k: "HDD",v: true}]] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Mandatory Savings Account Australian Dollar"],['$str',{ $substrCP: ["budgetary management Brand Danish Krone",15,10] },'$obj.obj.str',"Intelligent Soft Pizza Wooden"],[],['$obj.obj.str'],['$num',31083]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $subtract: ['$obj.obj.obj.num','$obj.obj.num'] },isoWeek: { $cmp: [{ $objectToArray: '$obj.obj.obj' },{ $toUpper: '$obj.str' }] },isoDayOfWeek: { $mod: ['$num',32607] },minute: { $indexOfArray: [{ $map: {input: [],in: { $pow: [77905,11128] }} },{ $arrayElemAt: [['$num',47009],{ $exp: '$obj.num' }] },19] }} },timezone: "Europe/Astrakhan",iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str',{ $toString: { $range: [13,1,17] } }],as: 'calista',in: 64951} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Extensions Factors back up"]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $pow: [56144,59435] },hour: { $log10: '$obj.obj.obj.num' },minute: { $floor: '$obj.obj.num' },second: { $multiply: [] },timezone: "America/Kralendijk"} }, _id: 0}}],

        [{$project: {a: { $range: [10,16,12] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$str',{ $trim: {input: "Automotive",chars: '$obj.str'} }],cond: { $eq: [{ $filter: {input: [],as: 'gerald',cond: { $gte: [{ $arrayElemAt: [[],'$$this'] },{ $isoWeek: { $dateFromString: {dateString: "2018-09-06T11:34:16.455Z",onError: { $substrCP: [{ $ltrim: {input: { $trim: { input: "parsing circuit aggregate" } },chars: "Frozen"} },20,10] },onNull: '$$gerald'} } }] }} },{ $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $pow: [{ $multiply: ['$$this'] },66742] },isoWeek: { $indexOfArray: [{ $concatArrays: [['$obj.str',"secured line Borders input"],['$$this'],[],["Checking Account"],[59170,6888,'$$this'],['$$this','$$this']] },{ $arrayElemAt: [[false,new Date("2018-09-06T04:55:24.094Z")],74305] },13] },hour: { $add: [] }} },timezone: "Africa/Ceuta"} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[39382,69335],[{ $dateToString: {date: { $week: { $year: { $year: { $dateToString: {date: new Date("2018-09-06T19:12:49.544Z"),format: "%Y-%Y-%H-%S-%S",timezone: "Africa/Kampala",onNull: { $trim: {input: '$str',chars: "leading-edge"} }} } } } },onNull: { $substrCP: ['$str',13,4] }} }],[],[{ $substr: ["Steel Outdoors calculate",17,19] },"Assimilated vortals Chief",{ $trim: {input: { $substrBytes: ['$obj.str',7,14] },chars: "Zimbabwe Dollar Branch Kids"} },'$obj.obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Home Equatorial Guinea bandwidth"],cond: { $ne: [{ $arrayElemAt: [[],46443] },{ $arrayToObject: [[{k: "Swiss Franc",v: '$$this'}]] }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num',91549,96836],in: { $size: [["Unbranded Frozen Computer"]] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.str',chars: { $substr: ["holistic National",7,19] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $toUpper: '$obj.str' },{ $toString: { $dayOfWeek: { $minute: { $isoDayOfWeek: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T16:08:38.020Z",format: "%M-%d-%U-%S-%m-%Z",timezone: "America/Indiana/Vevay",onError: { $concat: ["web services Mouse Rand","deposit array revolutionary"] }} } } } } } },"Direct SMS"],42313] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: { input: "SAS" } },'$obj.obj.obj.str'],[15494,60686,'$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: '$obj.num',isoWeek: { $size: [["Moldova",'$obj.obj.str']] },isoDayOfWeek: { $exp: 37862 },minute: { $sqrt: 92930 },second: { $subtract: [7481,'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["lime Automotive",{ $toUpper: "Belgium ADP projection" },{ $substrCP: ['$str',16,3] }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T17:50:58.757Z"),format: "%G-%V-%G-%G-%j-%w-%M-%%-%j-%Y-%%-%m"} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $rtrim: {input: '$obj.obj.str',chars: "Tasty Granite Bacon Bedfordshire"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire Balboa US Dollar",v: new Date("2018-09-06T09:34:37.439Z")},{k: "Nebraska extend Global",v: false}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num'],in: { $cmp: [{ $arrayElemAt: [[],88434] },{ $dayOfYear: { $dateToString: {date: '$obj.date',format: "%j-%Y-%u-%G-%%-%u-%Z-%S-%V-%m",timezone: "Australia/Hobart"} } }] }} }, _id: 0}}],

        [{$project: {a: { $substr: ["Automotive",18,10] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[12198,'$obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str',{ $substrCP: ['$str',6,14] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[94314,3045],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',5,17] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],57576] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T20:24:28.795Z",timezone: "America/St_Johns"} }, _id: 0}}],

        [{$project: {a: { $toLower: { $toUpper: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $second: { $dayOfMonth: { $dayOfWeek: { $week: { $toDate: { $arrayElemAt: [["Licensed Soft Shoes Tasty real-time"],52833] } } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'dannie',cond: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],21824] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',1,1] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$str',"Rustic",{ $substrBytes: ['$obj.obj.obj.str',0,18] }]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $concat: [{ $ltrim: {input: '$obj.obj.obj.str',chars: "Bedfordshire multi-byte withdrawal"} }] },chars: "New Jersey Health"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Garden",{ $dateToString: {date: { $dateToString: { date: new Date("2018-09-05T21:23:01.967Z") } },format: "%H-%u-%%-%u-%w-%U-%L-%H-%M-%G-%S-%L",onNull: { $dateFromParts: {year: { $cmp: [{ $dayOfWeek: { $millesecond: { $millesecond: { $isoWeek: { $dateToString: { date: '$obj.obj.obj.date' } } } } } },{ $range: [1,17] }] },month: { $multiply: ['$obj.obj.obj.num',69583] },day: '$num',hour: { $sqrt: 24730 },second: { $pow: [58869,1440] },millisecond: { $log: [{ $ceil: 90305 },'$num'] },timezone: "America/Phoenix"} }} },{ $substrBytes: ['$obj.str',14,11] },'$obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T18:17:49.990Z"),format: "%u-%G-%%-%u-%Y-%m-%V-%M-%H",timezone: "Europe/Vatican"} }],{ $sqrt: 31452 }] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $map: {input: [13500],as: 'ruben',in: { $size: [[81584,'$$ruben',32383]] }} }, _id: 0}}],

        [{$project: {a: { $range: [7,15,18] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $substrBytes: ['$str',1,0] },"Toys Accountability"],[],["withdrawal payment invoice","facilitate Nevada Licensed Steel Bike"]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],52010] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substrCP: ["Optimization Canadian Dollar",19,9] } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfMonth: { $dayOfMonth: { $minute: { $isoDayOfWeek: { $hour: { $dateToString: {date: { $dayOfYear: { $second: { $month: { $dateToString: {date: '$obj.date',format: "%M-%L-%V-%%-%H-%M-%G-%z-%M-%Z-%H",timezone: "Canada/Saskatchewan"} } } } },onNull: '$str'} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[{ $dayOfWeek: { $isoWeek: { $week: { $dateToString: {date: new Date("2018-09-05T20:54:00.472Z"),timezone: "Europe/Tallinn",onNull: { $arrayToObject: [[[34135],['$obj.obj.obj.str'],[{ $toLower: "Refined pricing structure New Jersey" }],["proactive",{ $toString: { $toUpper: '$str' } }]]] }} } } } }],[],[],[{ $concat: [] },"compress primary"]] } }, _id: 0}}],

        [{$project: {a: { $toString: { $year: { $isoWeekYear: { $second: { $hour: { $isoDayOfWeek: { $week: new Date("2018-09-06T11:21:51.762Z") } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.obj.obj.num'],[],['$obj.obj.obj.num'],['$obj.date'],[],['$obj.obj.obj.str','$obj.obj.str',"impactful Small"]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $trim: {input: { $toUpper: { $ltrim: {input: '$obj.obj.str',chars: "Research Corporate"} } },chars: '$obj.obj.str'} },1,3] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $substrCP: ["SCSI turquoise sexy",6,0] } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Cambridgeshire Open-architected",'$obj.obj.str'],as: 'fabiola',cond: { $lt: [{ $isoDayOfWeek: { $toDate: { $arrayToObject: [[['$$fabiola','$obj.obj.str'],[],[],[7980,'$obj.num']]] } } },{ $dayOfMonth: { $minute: { $dateFromParts: {isoWeekYear: { $multiply: [] },isoDayOfWeek: { $pow: [{ $indexOfArray: [{ $reverseArray: [[]] },{ $concatArrays: [['$obj.obj.num'],[]] },1,19] },92826] },hour: { $floor: '$$fabiola' },minute: 18347,millisecond: { $ln: '$$fabiola' }} } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Brand",v: '$obj.date'},{k: "synthesize",v: "Auto Loan Account Buckinghamshire"}]] }, _id: 0}}],

        [{$project: {a: { $week: { $isoDayOfWeek: { $dateFromParts: {year: { $size: [[89455]] },month: { $log: ['$num','$obj.obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'eliezer',cond: { $lte: [{ $zip: { inputs: [[],['$str',"Michigan",{ $toUpper: "definition invoice" }],['$$eliezer'],[44607,{ $dayOfYear: { $second: { $isoDayOfWeek: { $hour: { $year: '$obj.obj.date' } } } } }],["enable",'$obj.str']] } },{ $dateToString: {date: { $dayOfWeek: { $minute: { $millesecond: { $dateFromParts: { year: { $trunc: '$$eliezer' } } } } } },format: "%U-%V-%m-%u-%L",onNull: '$str'} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],[{ $toString: { $second: { $dateFromString: {dateString: "2018-09-06T12:40:15.706Z",timezone: "Canada/Mountain",onNull: { $objectToArray: '$obj.obj' }} } } }],['$obj.obj.obj.str',"Generic white multi-tasking"],[],["Cotton card",{ $dateToString: {date: '$obj.obj.obj.date',format: "%L-%M-%Y-%%-%j-%V-%z-%m-%L"} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: "ability copy" },'$obj.str'],["Metrics",'$obj.obj.obj.str',"web services"],[]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "pixel local area network" }, _id: 0}}],

        [{$project: {a: { $range: [12,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toLower: '$obj.obj.str' }],['$str',{ $dateToString: { date: '$date' } }],['$num']]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["SCSI copy program",{ $toLower: '$obj.str' }]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["withdrawal",{ $substr: [{ $toLower: '$obj.obj.str' },2,7] }],as: 'elisha',in: { $log10: '$$elisha' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "success",v: { $toUpper: '$obj.obj.str' }},{k: "Arkansas Solutions",v: 44423},{k: "compress",v: { $dayOfWeek: { $millesecond: { $dateToString: {date: '$obj.date',timezone: "EST",onNull: { $arrayElemAt: [['$obj.str','$obj.obj.obj.str',{ $rtrim: {input: "ability Small Granite Computer",chars: '$str'} },{ $substr: ["challenge Rustic Frozen Cheese real-time",19,11] }],'$obj.obj.num'] }} } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handmade Steel Table Garden",v: 68465}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[14491,'$obj.obj.num'],['$str','$obj.str'],[{ $trim: {input: "Minnesota",chars: '$obj.obj.obj.str'} }],[]],useLongestLength: false,defaults: []} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],52807] }, _id: 0}}],

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
