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
        return coll.insert({_id: 28781,str: "Refined Concrete Hat Tuna Money Market Account",num: 72520,date: new Date("2018-09-06T15:28:29.293Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28782,str: "Factors Specialist Applications",num: 14449,date: new Date("2018-09-06T06:44:22.227Z"),array: [new Date("2018-09-06T15:55:50.163Z"),new Date("2018-09-06T06:35:57.084Z"),40606,new Date("2018-09-06T14:00:32.089Z"),[],79586,"granular Rubber online","magenta Soft deliverables",new Date("2018-09-05T20:49:34.488Z"),33815],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28783,str: "action-items",date: new Date("2018-09-05T20:28:04.685Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28784,str: "clicks-and-mortar reboot",num: 56239,date: new Date("2018-09-06T06:51:50.846Z"),array: [new Date("2018-09-05T22:02:59.372Z"),new Date("2018-09-06T18:21:09.446Z"),"Berkshire Business-focused",61439,"Avon Practical Cotton Computer",{_id: 28785,str: "Optimized Greens Generic",date: new Date("2018-09-06T13:50:17.637Z"),array: [],obj: {}},"Planner",new Date("2018-09-05T22:00:31.947Z"),32855,[new Date("2018-09-06T03:07:34.180Z"),new Date("2018-09-06T10:25:47.467Z")],56077,50379],obj: {_id: 28786,str: "morph Legacy",num: 74549,date: new Date("2018-09-06T14:41:39.798Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28787,str: "Infrastructure invoice",num: 13957,date: new Date("2018-09-06T11:39:53.081Z"),array: [],obj: {_id: 28788,str: "input",num: 34274,date: new Date("2018-09-05T20:21:19.061Z"),obj: {_id: 28789,date: new Date("2018-09-06T07:24:04.428Z"),array: [new Date("2018-09-06T04:49:28.061Z"),78757,"revolutionize Zloty interfaces",new Date("2018-09-06T19:28:41.088Z"),[new Date("2018-09-06T17:32:13.767Z"),"Sleek Fresh Salad Bedfordshire",[]],90428,29941,"Cotton plum",{_id: 28790,str: "Valley",num: 81390,date: new Date("2018-09-06T10:30:19.378Z"),array: [],obj: {_id: 28791,str: "El Salvador Frozen systemic",array: [14905]}},58400,{_id: 28792,str: "Global Delaware",num: 62408,obj: {}},new Date("2018-09-06T16:13:56.265Z"),"deposit"]}}});
    },

    function(coll) {
        return coll.insert({_id: 28793,str: "Credit Card Account Health",date: new Date("2018-09-06T19:31:00.652Z"),array: ["Security",{_id: 28794,str: "Circle",num: 63422,date: new Date("2018-09-06T17:34:50.542Z"),array: [],obj: {}},14284,"California French Polynesia",new Date("2018-09-06T06:29:41.747Z"),17665,"Lempira copying Avon",{_id: 28795,str: "demand-driven content-based Checking Account",num: 66445,date: new Date("2018-09-05T21:44:38.953Z"),array: ["expedite framework",[],{_id: 28796,str: "deliver",num: 83711,date: new Date("2018-09-06T17:51:03.016Z"),array: [new Date("2018-09-05T21:30:49.213Z"),73090],obj: {}}]},[],new Date("2018-09-06T02:45:55.386Z"),17465,new Date("2018-09-06T10:32:01.707Z"),"coherent IB"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28797,str: "SCSI",num: 12899,array: []});
    },

    function(coll) {
        return coll.insert({_id: 28798,str: "User-friendly intermediate",num: 90478,date: new Date("2018-09-06T07:37:17.241Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28799,str: "Automotive Kids Home Loan Account",num: 57702,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28800,str: "Loop Kids ivory",num: 23358,date: new Date("2018-09-06T08:39:38.093Z"),obj: {_id: 28801,num: 60490,date: new Date("2018-09-06T08:17:24.632Z"),array: [],obj: {_id: 28802,str: "auxiliary",num: 81811,date: new Date("2018-09-06T15:42:32.324Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28803,str: "COM",num: 20606,date: new Date("2018-09-06T12:08:57.831Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28804,str: "evolve Credit Card Account",num: 28025,date: new Date("2018-09-06T16:07:19.210Z"),array: [],obj: {_id: 28805,str: "Corporate",num: 53672,date: new Date("2018-09-06T19:38:20.673Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28806,str: "content-based payment",num: 13741,date: new Date("2018-09-06T17:31:27.605Z"),array: [new Date("2018-09-05T20:40:49.623Z"),new Date("2018-09-06T06:05:14.140Z"),33140,"dynamic",[{_id: 28807,str: "Future",date: new Date("2018-09-05T21:58:00.743Z"),obj: {_id: 28808,str: "ADP",num: 96924,array: [],obj: {}}},"system Tools",new Date("2018-09-06T08:27:29.262Z")],96005,new Date("2018-09-06T16:15:33.297Z"),"Usability distributed Quetzal",68992,85021,78685,"grow"],obj: {_id: 28809,str: "bypassing",num: 63339,date: new Date("2018-09-06T06:35:08.641Z"),array: [[],{_id: 28810,num: 87883,date: new Date("2018-09-06T16:49:44.072Z"),array: [],obj: {_id: 28811,str: "Intelligent internet solution",array: []}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28812,num: 84176,date: new Date("2018-09-06T00:23:53.209Z"),array: [new Date("2018-09-06T01:52:47.543Z"),32729,"Egyptian Pound Lights Senior","online Exclusive",[],95654,"Keyboard","Kwacha",[new Date("2018-09-06T12:16:13.502Z"),new Date("2018-09-06T13:59:36.987Z"),{_id: 28813,str: "Tasty Plastic task-force",num: 75890,array: [],obj: {_id: 28814,str: "Bedfordshire Money Market Account payment",num: 36203,date: new Date("2018-09-05T21:56:49.135Z"),array: [],obj: {}}}],20691,12523],obj: {_id: 28815,str: "Azerbaijanian Manat target",date: new Date("2018-09-05T19:58:38.594Z"),array: [new Date("2018-09-06T15:07:57.935Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28816,str: "Savings Account white",num: 78420,date: new Date("2018-09-06T13:29:45.064Z"),array: [],obj: {_id: 28817,str: "Mouse IB Expressway",num: 81811,date: new Date("2018-09-06T09:43:36.007Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 28818,str: "Samoa Analyst Island",date: new Date("2018-09-06T07:25:45.906Z"),array: [2664,"Shoes Uganda Shilling","wireless Bedfordshire Monitored",new Date("2018-09-06T07:20:34.635Z"),new Date("2018-09-05T20:39:26.109Z"),new Date("2018-09-06T18:06:44.354Z"),"connect out-of-the-box",new Date("2018-09-05T23:30:18.527Z")],obj: {_id: 28819,num: 82749,array: [],obj: {_id: 28820,str: "Credit Card Account",num: 40314,date: new Date("2018-09-06T10:47:27.398Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28821,str: "input Cambridgeshire",num: 32742,date: new Date("2018-09-06T09:38:36.298Z"),array: ["Personal Loan Account",95351,new Date("2018-09-06T08:19:22.475Z"),[],new Date("2018-09-06T05:15:40.587Z"),new Date("2018-09-06T16:50:56.650Z"),"Island",93883,{_id: 28822,str: "Borders",num: 87505,array: [],obj: {}},new Date("2018-09-06T01:01:43.380Z")],obj: {_id: 28823,str: "relationships",date: new Date("2018-09-06T09:03:57.813Z"),obj: {_id: 28824,str: "Kids Granite",date: new Date("2018-09-06T17:21:56.637Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28825,str: "Mouse Tunnel",date: new Date("2018-09-05T20:04:22.384Z"),array: ["implementation Codes specifically reserved for testing purposes",new Date("2018-09-06T17:23:02.444Z"),[5059,96240],{_id: 28826,str: "Customer enterprise",num: 47454,date: new Date("2018-09-06T02:10:28.006Z"),obj: {_id: 28827,str: "Connecticut alarm",num: 90574,date: new Date("2018-09-06T02:50:20.582Z"),array: [],obj: {}}},4055,new Date("2018-09-06T03:39:48.026Z"),"parallelism","back up firewall",74540,new Date("2018-09-06T08:21:45.838Z"),new Date("2018-09-06T11:29:22.916Z")],obj: {_id: 28828,num: 74344,date: new Date("2018-09-06T08:59:40.060Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28829,str: "Alabama Refined Factors",num: 26904,date: new Date("2018-09-06T16:18:22.565Z"),array: ["Licensed",49627,new Date("2018-09-06T05:11:02.745Z"),[new Date("2018-09-06T08:50:54.987Z"),new Date("2018-09-06T01:06:26.311Z"),"Incredible Concrete Keyboard salmon Face to face",36370],new Date("2018-09-06T09:59:08.122Z"),49569,new Date("2018-09-06T17:34:11.543Z"),{_id: 28830,num: 20030,date: new Date("2018-09-06T04:16:55.705Z"),array: [],obj: {_id: 28831,date: new Date("2018-09-06T03:14:58.827Z"),obj: {_id: 28832,str: "Representative auxiliary FTP",array: [],obj: {}}}},"Administrator",86967,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28833,str: "hacking Grass-roots",num: 98027,date: new Date("2018-09-06T04:36:59.162Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28834,str: "COM bifurcated backing up",num: 10239,date: new Date("2018-09-06T04:42:07.641Z"),array: [],obj: {_id: 28835,str: "invoice Checking Account",num: 93811,date: new Date("2018-09-06T04:21:42.360Z"),array: ["Locks ADP Ergonomic","enable",new Date("2018-09-06T08:26:19.811Z"),{_id: 28836,num: 54918,array: [65686],obj: {}},new Date("2018-09-06T16:33:18.169Z"),"Course Rustic Home",81305,new Date("2018-09-06T18:28:43.762Z"),{_id: 28837,date: new Date("2018-09-06T02:04:58.875Z"),array: []},"Implementation",{_id: 28838,str: "Officer Home Loan Account",num: 86339,date: new Date("2018-09-06T01:05:40.486Z"),obj: {_id: 28839,str: "hacking program",array: [[],"neural"]}}],obj: {_id: 28840,str: "bifurcated Saint Helena input",num: 63128,date: new Date("2018-09-06T07:30:45.271Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28841,str: "Locks New York bypassing",num: 46862,date: new Date("2018-09-06T05:04:04.706Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28842,str: "California 6th generation Triple-buffered",num: 34860,date: new Date("2018-09-05T22:06:51.002Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28843,str: "Well",num: 63580,date: new Date("2018-09-06T03:52:23.369Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28844,str: "indexing cultivate e-business",num: 53204,date: new Date("2018-09-06T19:14:13.785Z"),array: [new Date("2018-09-05T20:05:32.951Z"),{_id: 28845,str: "Manager",num: 95276,date: new Date("2018-09-05T23:39:40.907Z"),array: [97525,"Handcrafted Frozen Ball methodical deliverables",{_id: 28846,str: "deposit Director",num: 40836,date: new Date("2018-09-06T10:55:44.450Z"),obj: {_id: 28847,date: new Date("2018-09-06T07:32:18.129Z"),array: [],obj: {}}}],obj: {}},72134,"system",34524,6309,new Date("2018-09-06T12:30:40.102Z"),"bandwidth transmitter Diverse",new Date("2018-09-05T20:26:39.510Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28848,num: 49295,date: new Date("2018-09-06T01:07:43.618Z"),array: [47444,"plum methodologies",42136,{_id: 28849,str: "pricing structure neutral Austria",num: 41680,date: new Date("2018-09-05T22:03:21.311Z"),array: [new Date("2018-09-06T15:52:05.247Z"),[],"generating Poland","zero administration HTTP Ball"],obj: {_id: 28850,str: "Bedfordshire",num: 41792,date: new Date("2018-09-06T13:58:22.139Z"),array: [],obj: {_id: 28851,str: "Costa Rican Colon channels",array: []}}},93079,"Usability matrix Practical",new Date("2018-09-06T07:52:55.195Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28852,str: "Executive North Carolina",num: 57713,date: new Date("2018-09-05T20:56:05.331Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28853,str: "Spring",num: 79178,date: new Date("2018-09-05T22:18:53.181Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28854,str: "Borders",num: 18342,date: new Date("2018-09-06T12:13:41.066Z"),array: ["Branch Corporate",new Date("2018-09-05T23:15:37.237Z"),92258,{_id: 28855,str: "Plastic Integration Missouri",num: 37454,date: new Date("2018-09-06T02:04:01.742Z"),array: [],obj: {_id: 28856,str: "Cotton holistic Run",num: 64431,date: new Date("2018-09-06T01:45:48.879Z"),array: [],obj: {_id: 28857,num: 19311,date: new Date("2018-09-06T13:56:30.031Z"),obj: {}}}},new Date("2018-09-06T19:09:02.489Z"),41939,"compressing",2474,"moratorium",[],new Date("2018-09-06T02:21:07.782Z")]});
    },

    function(coll) {
        return coll.insert({_id: 28858,str: "Chief Officer",num: 80126,date: new Date("2018-09-06T13:05:51.127Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28859,str: "Mobility",num: 78470,date: new Date("2018-09-06T18:31:04.128Z"),array: [],obj: {_id: 28860,str: "mobile needs-based experiences",num: 55357,date: new Date("2018-09-06T02:23:31.370Z"),array: [[{_id: 28861,str: "Cambridgeshire deposit Incredible",num: 12299,array: [],obj: {_id: 28862,date: new Date("2018-09-06T10:06:36.650Z"),array: [1671,"generating explicit haptic",new Date("2018-09-06T16:37:55.006Z"),"Refined RAM transmit",new Date("2018-09-06T17:24:05.785Z"),new Date("2018-09-06T11:46:43.878Z"),new Date("2018-09-06T18:30:11.790Z"),92563]}},77339,"unleash","Implemented Small innovative"],new Date("2018-09-06T14:43:26.280Z"),93575,{_id: 28863,str: "Money Market Account Mali",date: new Date("2018-09-06T04:53:24.265Z"),obj: {}},"indexing azure Kuwait"],obj: {_id: 28864,str: "Optimization",num: 9688,date: new Date("2018-09-05T22:14:36.533Z"),array: [71955,{_id: 28865,str: "Human",num: 7206},[],85967],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28866,str: "Program",num: 14783,date: new Date("2018-09-06T15:20:59.613Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28867,str: "orchid Bedfordshire",num: 59396,date: new Date("2018-09-06T13:27:48.353Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28868,str: "reboot",num: 56247,date: new Date("2018-09-06T07:52:01.233Z"),array: [],obj: {_id: 28869,str: "Sausages Investment Account purple",num: 84540,date: new Date("2018-09-05T23:26:44.968Z"),array: [new Date("2018-09-05T22:00:07.233Z"),3138,"Ball",new Date("2018-09-06T17:09:52.173Z"),new Date("2018-09-06T14:15:12.795Z"),{_id: 28870,str: "Salad USB Distributed",num: 42613,array: [],obj: {}},"Rand Loti Handmade Granite Hat Minnesota",93271,92179,new Date("2018-09-06T19:46:31.163Z"),"Fantastic Cotton Fish transition ivory",[[53667],{_id: 28871,date: new Date("2018-09-06T11:20:48.157Z"),obj: {_id: 28872,str: "Consultant",num: 4604,date: new Date("2018-09-06T12:52:28.841Z"),obj: {}}},"Investment Account value-added","SDD Product PNG"]]}});
    },

    function(coll) {
        return coll.insert({_id: 28873,num: 14281,date: new Date("2018-09-05T22:24:34.620Z"),array: [new Date("2018-09-06T10:07:33.732Z"),new Date("2018-09-06T09:18:52.635Z"),"Coordinator withdrawal","primary sensor Shoes","primary Tactics supply-chains",54684,57356,6799,{_id: 28874,str: "Configuration Intelligent Metal Tuna",num: 49279,date: new Date("2018-09-06T15:12:35.118Z"),array: [],obj: {}},{_id: 28875,str: "Borders platforms",num: 28629,array: [new Date("2018-09-06T18:24:56.120Z"),{_id: 28876,str: "Squares Steel compress",date: new Date("2018-09-05T20:06:46.450Z"),array: [],obj: {}}],obj: {}},[new Date("2018-09-05T21:37:57.421Z"),53904],52873,[]]});
    },

    function(coll) {
        return coll.insert({_id: 28877,str: "Liaison program Pizza",num: 38018,date: new Date("2018-09-06T13:03:08.139Z"),array: [{_id: 28878,str: "Grove Car",date: new Date("2018-09-06T08:45:34.729Z"),array: [],obj: {}},new Date("2018-09-06T02:09:08.013Z"),new Date("2018-09-05T20:42:11.932Z"),"reboot well-modulated","primary",93040,57209,{_id: 28879,str: "utilisation",num: 2425,date: new Date("2018-09-06T03:05:05.127Z"),array: [[],[],45443],obj: {}},"Hat","multi-tasking compressing",new Date("2018-09-06T01:08:57.005Z"),26115]});
    },

    function(coll) {
        return coll.insert({_id: 28880,str: "primary olive Danish Krone",num: 89575,array: [],obj: {_id: 28881,str: "Metal National solutions",date: new Date("2018-09-06T00:47:51.069Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28882,str: "Grass-roots infomediaries Fresh",num: 81676,date: new Date("2018-09-06T06:54:34.457Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28883,str: "knowledge base SQL",num: 41309,date: new Date("2018-09-05T23:01:19.396Z"),array: [],obj: {_id: 28884,str: "generate Gabon microchip",date: new Date("2018-09-06T13:55:48.113Z"),array: [new Date("2018-09-06T16:45:04.213Z"),"Licensed Tasty",71460,new Date("2018-09-06T01:50:47.533Z"),[],53848,"Meadows","hacking ADP matrix","knowledge user",72789,{_id: 28885,num: 77943,date: new Date("2018-09-06T05:59:53.951Z"),array: [new Date("2018-09-06T04:48:51.822Z"),{_id: 28886,str: "Sausages global",num: 84605,date: new Date("2018-09-05T20:59:02.926Z"),array: []},784,new Date("2018-09-05T20:22:40.750Z"),"Quality IB Electronics"],obj: {_id: 28887,str: "Senior",num: 6853,array: [new Date("2018-09-06T19:50:19.850Z"),86904]}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28888,str: "Estonia sensor",num: 81306,date: new Date("2018-09-06T01:24:26.625Z"),obj: {_id: 28889,str: "intuitive partnerships Ports",num: 81973,date: new Date("2018-09-06T13:33:25.439Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28890,str: "encoding Associate Table",date: new Date("2018-09-06T09:01:57.960Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28891,str: "Lead invoice",num: 69669,date: new Date("2018-09-06T09:50:42.400Z"),array: [[new Date("2018-09-06T07:13:15.798Z"),"Utah impactful International",46063,new Date("2018-09-06T00:41:17.343Z"),"Pre-emptive"],new Date("2018-09-06T13:42:08.799Z"),69062,[],{_id: 28892,str: "Manager silver fuchsia",num: 16065,date: new Date("2018-09-06T15:57:32.604Z"),array: ["Berkshire emulation"],obj: {}},57665,95212,{_id: 28893,str: "incubate next generation",num: 14180,obj: {}},"alarm",[new Date("2018-09-06T03:19:17.292Z"),18985]],obj: {_id: 28894,str: "experiences",num: 99610,obj: {_id: 28895,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 28896,str: "Tuvalu",num: 32792,date: new Date("2018-09-05T21:15:43.125Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28897,num: 66756,date: new Date("2018-09-06T09:14:52.106Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28898,date: new Date("2018-09-06T14:57:20.452Z"),array: ["North Carolina Rustic",new Date("2018-09-06T19:32:57.260Z"),75205,37636,new Date("2018-09-06T13:04:50.782Z"),"Developer",{_id: 28899,str: "Clothing",num: 57403,date: new Date("2018-09-06T08:19:53.892Z"),array: ["local synthesize compress",[99168,"Usability Austria"],new Date("2018-09-06T04:07:35.753Z"),19710],obj: {}},new Date("2018-09-05T22:49:38.259Z"),76343,"Chief generating"]});
    },

    function(coll) {
        return coll.insert({_id: 28900,str: "Assimilated",num: 66967,date: new Date("2018-09-06T02:17:47.044Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28901,str: "Myanmar",num: 67457,date: new Date("2018-09-06T05:56:39.122Z"),array: ["Specialist Crescent Kip","Kentucky",9100,new Date("2018-09-06T11:21:52.944Z"),"index solid state",{_id: 28902,str: "Operations Steel Rubber",num: 23170,date: new Date("2018-09-06T04:38:06.363Z"),array: [],obj: {}},"Run architectures","real-time",[83128],3797,new Date("2018-09-06T01:19:49.159Z"),{_id: 28903,date: new Date("2018-09-06T13:07:56.061Z"),obj: {_id: 28904,str: "maroon Money Market Account",num: 32232,date: new Date("2018-09-06T02:18:21.274Z"),array: []}}]});
    },

    function(coll) {
        return coll.insert({_id: 28905,str: "lavender",num: 99422,date: new Date("2018-09-05T20:55:05.903Z"),array: [29237,"red Handcrafted Wooden Table AI",new Date("2018-09-06T19:32:07.203Z"),new Date("2018-09-05T21:59:24.012Z"),"West Virginia Directives Practical",{_id: 28906,str: "Checking Account Investment Account bifurcated",num: 42832,date: new Date("2018-09-06T10:34:34.668Z"),array: [],obj: {_id: 28907,num: 98074,date: new Date("2018-09-06T03:44:09.211Z"),obj: {}}},new Date("2018-09-06T11:04:13.590Z"),[],69367],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28908,str: "transmitting infomediaries Rustic Granite Bacon",num: 31422,date: new Date("2018-09-06T02:08:29.145Z"),array: ["Rubber",48872,new Date("2018-09-05T23:54:07.034Z"),"Health",new Date("2018-09-06T12:40:02.981Z"),{_id: 28909,str: "Licensed Metal Towels Response",num: 86139,date: new Date("2018-09-06T18:27:01.862Z"),array: [],obj: {_id: 28910,str: "Global",num: 26957,array: [17567],obj: {}}},"Falls monitor","content-based system multi-byte",new Date("2018-09-06T08:01:03.633Z"),2451,{_id: 28911,str: "Swaziland explicit",num: 31643,date: new Date("2018-09-05T23:58:00.097Z"),array: [],obj: {_id: 28912,num: 63804,array: ["Viaduct Bermudian Dollar (customarily known as Bermuda Dollar)",[[],new Date("2018-09-06T06:04:12.274Z"),"Generic Steel Chair",{_id: 28913,str: "Bermudian Dollar (customarily known as Bermuda Dollar) Internal invoice"},[64723]],new Date("2018-09-06T08:45:02.894Z")],obj: {_id: 28914,str: "monitor port Connecticut",date: new Date("2018-09-05T20:52:45.313Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 28915,str: "Ergonomic Cotton Table Brand challenge",num: 88257,date: new Date("2018-09-06T07:55:41.208Z"),array: [92475,"multi-byte Pizza Corporate","haptic",new Date("2018-09-06T06:37:47.475Z"),[4485],[new Date("2018-09-06T01:52:23.108Z"),{_id: 28916,str: "navigating multi-state Corporate",num: 52857,date: new Date("2018-09-06T08:53:08.921Z"),array: [],obj: {}}],new Date("2018-09-06T10:46:53.567Z"),{_id: 28917,str: "Forward Fresh monitor",obj: {_id: 28918,num: 51655,date: new Date("2018-09-06T16:28:34.460Z"),obj: {}}},new Date("2018-09-06T04:51:27.142Z"),new Date("2018-09-06T17:34:19.328Z"),"Usability Massachusetts Plastic","Administrator"]});
    },

    function(coll) {
        return coll.insert({_id: 28919,str: "Avon Computer Avon",num: 1992,date: new Date("2018-09-06T06:25:15.301Z"),obj: {_id: 28920,str: "solution",num: 73848,date: new Date("2018-09-06T10:08:00.244Z"),array: [{_id: 28921,str: "Intelligent Concrete Mouse",num: 97131,date: new Date("2018-09-06T12:30:26.172Z"),array: [],obj: {}},"grid-enabled Table Intranet",["executive Orchestrator Garden"],[new Date("2018-09-06T18:32:13.156Z")],56216,3381,new Date("2018-09-06T09:17:08.298Z"),"Cambridgeshire",86728,11707,94871,{_id: 28922,str: "North Carolina neural Re-contextualized",date: new Date("2018-09-05T21:45:02.213Z"),array: [],obj: {_id: 28923,str: "Investment Account Trinidad and Tobago Dollar",num: 33152,array: []}},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28924,str: "Avon Tasty",num: 59697,date: new Date("2018-09-05T22:47:16.264Z"),array: ["Bacon sticky Ohio","Iraq Checking Account",new Date("2018-09-06T06:30:07.144Z"),[new Date("2018-09-06T02:37:55.757Z"),34614,76421,[]],{_id: 28925,num: 20052,date: new Date("2018-09-05T23:09:14.567Z"),array: [[]],obj: {}},{_id: 28926,str: "Landing PCI architectures",array: [90487,"withdrawal",new Date("2018-09-06T19:52:41.274Z"),30690],obj: {_id: 28927,str: "Usability Incredible Plastic Towels Investment Account",date: new Date("2018-09-06T15:10:59.382Z"),array: [],obj: {_id: 28928,num: 37425,date: new Date("2018-09-06T02:46:48.249Z"),obj: {_id: 28929,str: "productize Summit",num: 78436}}}},new Date("2018-09-06T10:02:52.217Z"),[],"quantify",{_id: 28930,str: "Wisconsin synthesize",array: [[]]},new Date("2018-09-06T08:06:33.930Z")],obj: {_id: 28931,str: "withdrawal Analyst synergies",num: 80346,date: new Date("2018-09-06T18:39:37.269Z"),obj: {_id: 28932,str: "Shoes",num: 88563,date: new Date("2018-09-05T20:31:13.616Z"),array: [92600,65078],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28933,str: "Savings Account Investment Account optical",num: 47203,date: new Date("2018-09-06T05:07:54.334Z"),array: [],obj: {_id: 28934,str: "Colorado",num: 21452,date: new Date("2018-09-06T00:44:01.841Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28935,str: "bypass embrace payment",num: 91259,date: new Date("2018-09-06T11:55:36.018Z"),array: [new Date("2018-09-06T19:13:40.892Z"),[65555,"virtual",35102,new Date("2018-09-06T09:10:42.885Z")],4052,[],new Date("2018-09-06T06:35:02.186Z"),new Date("2018-09-06T09:41:17.561Z"),new Date("2018-09-06T14:56:21.869Z"),new Date("2018-09-06T03:22:11.490Z"),[]],obj: {_id: 28936,num: 99013,date: new Date("2018-09-06T14:49:24.015Z"),obj: {_id: 28937,str: "upward-trending integrate Soap",num: 46706,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 28938,str: "24/365 Ohio",num: 80556,date: new Date("2018-09-05T23:39:40.897Z"),array: ["local payment",[new Date("2018-09-05T20:23:37.117Z")],new Date("2018-09-06T05:49:28.668Z"),new Date("2018-09-06T09:30:46.409Z"),{_id: 28939,str: "internet solution",num: 70015,array: [],obj: {}},67645,59078,"syndicate 24 hour",43623,"solution sticky",53318,64220],obj: {_id: 28940,str: "Music systems",num: 31823,array: [52563,new Date("2018-09-06T02:51:08.633Z"),"invoice Beauty"]}});
    },

    function(coll) {
        return coll.insert({_id: 28941,num: 29264,date: new Date("2018-09-06T13:56:29.909Z"),array: [30357,new Date("2018-09-06T07:59:26.429Z"),46220,new Date("2018-09-06T07:19:45.787Z"),"Computer",{_id: 28942,str: "Tasty Steel Salad AGP",num: 93960,date: new Date("2018-09-06T08:56:57.899Z"),array: [{_id: 28943,num: 66975,date: new Date("2018-09-06T19:25:38.626Z"),array: [],obj: {}}]},"payment application Cambridgeshire",37026,new Date("2018-09-05T21:02:43.078Z"),new Date("2018-09-06T13:55:29.331Z"),94241,"Isle Strategist","United States Minor Outlying Islands Route open-source"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28944,str: "Credit Card Account explicit",num: 58222,array: ["Corner","Shoes",90583,new Date("2018-09-06T15:21:38.112Z"),[],new Date("2018-09-05T23:29:48.278Z"),61215,"Practical plug-and-play",new Date("2018-09-06T12:54:02.846Z"),[{_id: 28945,str: "Music Car B2B",date: new Date("2018-09-05T20:42:32.832Z")},[],70293]],obj: {_id: 28946,str: "reboot",num: 93314,date: new Date("2018-09-06T17:34:10.837Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28947,str: "West Virginia",num: 15425,date: new Date("2018-09-06T19:11:57.082Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28948,str: "Brunei Dollar",num: 74874,date: new Date("2018-09-06T14:00:46.633Z"),obj: {_id: 28949,num: 82279,date: new Date("2018-09-06T04:46:36.596Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28950,num: 88208,date: new Date("2018-09-06T18:09:23.512Z"),array: ["grey Intelligent",new Date("2018-09-06T14:32:16.935Z"),42714,new Date("2018-09-06T07:33:19.336Z"),new Date("2018-09-06T12:04:07.540Z"),[],{_id: 28951,str: "systems Gorgeous Granite Fish Future",date: new Date("2018-09-06T03:23:24.197Z"),array: [],obj: {}}],obj: {_id: 28952,str: "Developer",num: 46599,date: new Date("2018-09-06T09:42:32.717Z"),array: [{_id: 28953,str: "Configuration Bike Licensed Soft Table",num: 25618,date: new Date("2018-09-05T23:45:31.485Z"),array: [],obj: {_id: 28954,obj: {}}},70589,"pixel",32829,"Practical Concrete Tuna Avon calculating","Wooden",{_id: 28955,str: "capability",num: 71208,date: new Date("2018-09-05T23:14:02.184Z"),array: [],obj: {_id: 28956,str: "bus"}}],obj: {_id: 28957,str: "withdrawal",num: 54580,date: new Date("2018-09-06T18:41:40.221Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 28958,str: "Bike salmon Human",num: 16429,array: [new Date("2018-09-06T17:36:20.414Z"),{_id: 28959,str: "attitude web-readiness",num: 53246,date: new Date("2018-09-06T15:28:21.115Z"),array: [44996,"Regional Computers",[],new Date("2018-09-06T08:28:55.941Z")],obj: {}},"Unbranded Wooden Salad",[{_id: 28960,str: "mission-critical",num: 64542,date: new Date("2018-09-06T15:29:37.499Z"),array: [],obj: {_id: 28961,date: new Date("2018-09-06T05:38:12.150Z"),array: ["utilisation",new Date("2018-09-06T09:13:08.676Z"),84749,54024],obj: {}}},40417,new Date("2018-09-06T02:01:02.271Z")],[],[],{_id: 28962,str: "indexing",num: 12008,array: ["Facilitator convergence"],obj: {_id: 28963,str: "Configuration systemic back up",num: 19811,date: new Date("2018-09-06T11:51:44.421Z"),obj: {}}},{_id: 28964,num: 1977,date: new Date("2018-09-06T13:02:30.528Z")},71801]});
    },

    function(coll) {
        return coll.insert({_id: 28965,str: "analyzer Field",num: 46986,date: new Date("2018-09-06T06:47:43.215Z"),array: ["Avon Profit-focused unleash",86909,"Kip integrate",21850,new Date("2018-09-06T06:03:34.431Z"),new Date("2018-09-06T11:08:29.412Z"),[],85564,[],new Date("2018-09-06T07:30:35.661Z"),"deposit grow"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28966,str: "Technician",num: 23917,date: new Date("2018-09-05T21:27:20.075Z"),array: [],obj: {_id: 28967,num: 11339,date: new Date("2018-09-05T20:20:22.985Z"),array: ["Plastic deliver Cambodia",[],new Date("2018-09-06T06:58:03.595Z"),[40998],{_id: 28968,str: "Unbranded",array: [27182],obj: {}},new Date("2018-09-05T20:22:19.232Z"),87416,38130,92164,[],"e-commerce Investment Account","Courts hacking Multi-channelled",new Date("2018-09-05T20:22:16.884Z"),{_id: 28969,str: "synergy",num: 72465,date: new Date("2018-09-06T07:48:47.847Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 28970,str: "Colorado",num: 71653,date: new Date("2018-09-06T03:32:25.187Z"),array: [],obj: {_id: 28971,str: "Congo",num: 91249,date: new Date("2018-09-06T13:55:26.500Z")}});
    },

    function(coll) {
        return coll.insert({_id: 28972,str: "redundant",num: 62547,date: new Date("2018-09-06T10:24:46.131Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28973,str: "card",date: new Date("2018-09-05T23:33:31.028Z"),array: ["Generic Ergonomic Plastic Soap array",24757,86286,"Borders Product",new Date("2018-09-06T19:37:52.463Z"),[],"Awesome Cotton Mouse matrix",new Date("2018-09-05T20:26:12.505Z"),78671,"well-modulated Ergonomic bypass",new Date("2018-09-06T18:12:11.540Z"),8801,59905],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28974,str: "Plastic payment Automated",num: 83540,date: new Date("2018-09-06T10:17:02.068Z"),array: [{_id: 28975,str: "e-tailers Intelligent",num: 82722,date: new Date("2018-09-06T06:23:20.602Z"),array: [85577,"withdrawal invoice","Steel Concrete"],obj: {_id: 28976,str: "virtual Georgia",num: 36402,date: new Date("2018-09-06T11:15:03.551Z"),array: []}},new Date("2018-09-05T22:08:20.068Z"),42402,5716,new Date("2018-09-06T03:48:40.344Z"),new Date("2018-09-06T12:48:13.715Z"),"Wisconsin brand",[],[{_id: 28977,str: "Nauru interfaces Internal",num: 31073,array: []},{_id: 28978,str: "solid state",num: 90390,date: new Date("2018-09-06T03:42:05.742Z"),obj: {}}],new Date("2018-09-06T15:21:07.054Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28979,str: "Investment Account",num: 60091,date: new Date("2018-09-06T17:29:04.505Z"),array: ["Table payment",new Date("2018-09-06T08:08:03.979Z"),new Date("2018-09-06T19:53:54.187Z"),50067,"iterate bus Intelligent",[]],obj: {_id: 28980,str: "benchmark multi-byte monitoring",num: 62664,array: [30443,["Heights optical Practical",17610,{_id: 28981,str: "Distributed",num: 68318,date: new Date("2018-09-06T04:23:27.016Z"),obj: {_id: 28982,str: "Harbor Algeria Knolls",date: new Date("2018-09-06T15:43:07.549Z"),array: []}}],"Mouse Ohio",{_id: 28983,str: "Cyprus Refined Frozen Gloves",num: 39896,array: []},"Director Business-focused","Quality"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28984,str: "Trafficway Marketing",num: 72493,date: new Date("2018-09-06T12:42:38.343Z"),array: [],obj: {_id: 28985,str: "Movies Automotive",num: 72842,date: new Date("2018-09-06T09:05:36.795Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 28986,str: "Lead",num: 22640,date: new Date("2018-09-06T16:10:44.243Z"),array: [new Date("2018-09-05T23:52:32.913Z"),new Date("2018-09-06T01:43:07.554Z"),"Borders transmitting auxiliary",new Date("2018-09-06T17:01:49.855Z"),20085,"intermediate interface","Principal",34957,[],{_id: 28987,str: "sky blue Arizona",date: new Date("2018-09-06T15:35:58.775Z"),array: [],obj: {}},{_id: 28988,str: "violet",num: 47795,date: new Date("2018-09-06T19:54:45.537Z"),array: [],obj: {_id: 28989,str: "Liaison Architect Central African Republic",array: [98462,36050,30997],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 28990,str: "Plastic",num: 88323,date: new Date("2018-09-06T12:19:47.396Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28991,str: "metrics",num: 13437,date: new Date("2018-09-05T23:42:56.182Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 28992,str: "Computer discrete",num: 30358,array: [],obj: {_id: 28993,str: "purple",num: 99934,date: new Date("2018-09-06T09:39:47.687Z"),array: [72011,"lavender eyeballs",new Date("2018-09-06T12:40:03.156Z"),new Date("2018-09-05T21:47:38.068Z"),{_id: 28994,str: "Home Public-key Israel",date: new Date("2018-09-06T07:34:27.289Z"),array: [],obj: {}},69368,"Reverse-engineered transparent Buckinghamshire",new Date("2018-09-06T00:53:07.787Z"),"Cotton"],obj: {_id: 28995,str: "Tunnel sensor",num: 93739,date: new Date("2018-09-05T23:59:33.673Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 28996,str: "Chair Markets",num: 72143,date: new Date("2018-09-06T16:25:21.025Z"),array: [{_id: 28997,str: "Configuration Marketing",num: 56954,date: new Date("2018-09-06T16:31:41.790Z"),array: [{_id: 28998,array: ["Handcrafted Rubber Computer Marketing",77696,new Date("2018-09-06T07:24:01.287Z"),[],"5th generation Central Administrator",20645],obj: {}},"Networked evolve high-level",91682],obj: {_id: 28999,str: "Configurable Michigan cross-platform",num: 7942,date: new Date("2018-09-06T07:03:19.987Z"),array: [new Date("2018-09-06T08:42:10.102Z"),86003],obj: {}}},new Date("2018-09-06T15:11:15.368Z"),"functionalities value-added Global",[],{_id: 29000,str: "Mission",date: new Date("2018-09-06T16:08:15.349Z"),obj: {_id: 29001,num: 25880,date: new Date("2018-09-06T17:11:17.307Z")}},"Frozen Music",new Date("2018-09-06T14:15:36.054Z"),{_id: 29002,str: "Investment Account Designer",num: 76515,array: [],obj: {}}],obj: {_id: 29003,date: new Date("2018-09-06T09:21:28.709Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29004,str: "Anguilla Berkshire",num: 10635,date: new Date("2018-09-06T14:14:48.511Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29005,str: "motivating Sausages",date: new Date("2018-09-06T07:09:55.539Z"),array: [new Date("2018-09-06T12:36:56.637Z"),new Date("2018-09-06T15:57:53.501Z"),{_id: 29006,str: "focus group",num: 32891,date: new Date("2018-09-06T01:33:26.601Z"),array: [68102],obj: {_id: 29007,str: "Mississippi",num: 45783,date: new Date("2018-09-05T21:21:39.335Z"),obj: {}}},16563,"Handcrafted Fresh Ball","connecting","synthesize Buckinghamshire navigating",new Date("2018-09-06T19:15:37.960Z"),[],[new Date("2018-09-06T06:08:34.289Z")],{_id: 29008,num: 52541,date: new Date("2018-09-05T22:42:04.540Z"),array: []},68501,[],new Date("2018-09-05T23:05:40.935Z")],obj: {_id: 29009,str: "multimedia",date: new Date("2018-09-06T00:30:04.272Z"),array: [],obj: {_id: 29010,str: "virtual ROI",num: 44928,obj: {_id: 29011,array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 29012,str: "Island District Direct",num: 20707,date: new Date("2018-09-06T17:19:44.231Z"),array: [],obj: {_id: 29013,num: 97966,date: new Date("2018-09-05T20:18:35.678Z"),array: [],obj: {_id: 29014,str: "JSON Computers",date: new Date("2018-09-06T14:40:19.368Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29015,str: "Optional",num: 3936,date: new Date("2018-09-05T20:14:06.007Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29016,str: "olive Salad",num: 58741,date: new Date("2018-09-06T12:46:58.542Z"),array: ["back-end interactive",new Date("2018-09-06T15:24:22.894Z"),42827,new Date("2018-09-06T07:02:46.820Z"),"compelling Progressive",77850,[],"interfaces",47098,"deposit",{_id: 29017,str: "User-centric dynamic",date: new Date("2018-09-06T03:04:29.400Z"),obj: {}},61263],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29018,str: "Metrics",array: [new Date("2018-09-06T06:22:50.600Z"),new Date("2018-09-06T16:04:24.424Z"),"Chief",30496,{_id: 29019,str: "seize",num: 87582,date: new Date("2018-09-05T21:16:13.894Z"),array: [],obj: {_id: 29020,date: new Date("2018-09-06T14:03:54.674Z"),array: [],obj: {}}},"Organic Metal Licensed","Innovative Fresh",59121,[],new Date("2018-09-06T01:47:12.778Z"),82511],obj: {_id: 29021,num: 39899,date: new Date("2018-09-06T18:09:24.841Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 29022,str: "SMTP payment New Israeli Sheqel",num: 48594,date: new Date("2018-09-06T17:12:09.991Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29023,str: "installation Shoes primary",num: 16710,date: new Date("2018-09-06T08:21:04.429Z"),array: [30561,"capability",78998,"Bedfordshire firewall Vietnam",new Date("2018-09-05T22:20:08.383Z"),[{_id: 29024,str: "Cambridgeshire Centralized",date: new Date("2018-09-06T17:48:40.979Z"),array: []},new Date("2018-09-06T15:09:03.538Z"),new Date("2018-09-06T08:49:26.895Z")],"RAM",50627,66628,{_id: 29025,str: "hacking",num: 10593,date: new Date("2018-09-06T15:06:12.068Z"),array: [],obj: {}},"expedite platforms",["Bike SCSI Tuna",34894],new Date("2018-09-06T13:38:46.647Z")],obj: {_id: 29026,str: "Landing compressing",num: 55854,date: new Date("2018-09-06T12:46:26.585Z"),array: [],obj: {_id: 29027,num: 14297}}});
    },

    function(coll) {
        return coll.insert({_id: 29028,num: 96663,date: new Date("2018-09-06T18:33:30.647Z"),array: [],obj: {_id: 29029,str: "Licensed",num: 71369,date: new Date("2018-09-06T18:12:34.897Z"),array: [new Date("2018-09-05T23:24:09.152Z"),56298,"cutting-edge complexity scale","Handmade Fantastic Rubber Chips navigating",76650,new Date("2018-09-05T21:41:56.371Z"),{_id: 29030,str: "relationships",date: new Date("2018-09-06T14:44:39.154Z"),array: [[],new Date("2018-09-06T15:10:21.833Z"),60632,"invoice Bedfordshire"],obj: {}},69877,"Kuwait Wooden","View",30775],obj: {_id: 29031,str: "open-source",num: 58713,date: new Date("2018-09-06T14:24:51.666Z"),obj: {_id: 29032,str: "United States Minor Outlying Islands",num: 7782,array: [[],[]]}}}});
    },

    function(coll) {
        return coll.insert({_id: 29033,str: "bypassing Germany Assurance",num: 48379,date: new Date("2018-09-06T00:26:04.170Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29034,str: "Berkshire",num: 50299,date: new Date("2018-09-06T08:12:43.116Z"),array: [],obj: {_id: 29035,str: "Pa'anga Solomon Islands Dollar Avon",num: 97890,date: new Date("2018-09-06T03:44:45.485Z"),array: [new Date("2018-09-05T22:37:18.048Z"),[34030],"Dynamic",[],"Tools pink National",new Date("2018-09-05T23:45:23.695Z"),15798,40874,"Steel Garden",86288,22024,{_id: 29036,num: 9129,date: new Date("2018-09-05T23:48:51.866Z"),array: [],obj: {}},"programming",new Date("2018-09-05T21:33:47.475Z")],obj: {_id: 29037,num: 68875,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29038,str: "Tasty",num: 55221,date: new Date("2018-09-05T21:42:56.738Z"),array: [61661,new Date("2018-09-06T08:42:07.498Z"),new Date("2018-09-06T17:45:06.647Z"),[],"e-markets transmit",63455,[95946,{_id: 29039,str: "Wooden tangible Court",num: 98638,date: new Date("2018-09-06T08:09:54.030Z"),obj: {_id: 29040,str: "web-readiness",array: [],obj: {}}}],new Date("2018-09-06T16:15:54.766Z"),"Soft blue",{_id: 29041,num: 20961,date: new Date("2018-09-05T21:50:37.209Z"),obj: {}},"blue",new Date("2018-09-05T23:07:28.347Z"),new Date("2018-09-06T09:53:22.591Z")],obj: {_id: 29042,str: "back up attitude-oriented Distributed",num: 53417,date: new Date("2018-09-06T13:50:03.499Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 29043,str: "Mississippi",num: 84378,date: new Date("2018-09-06T14:02:35.626Z"),array: [82575,[],"initiative","standardization",new Date("2018-09-05T23:00:35.384Z"),new Date("2018-09-06T16:53:49.025Z"),new Date("2018-09-06T17:18:59.969Z"),{_id: 29044,str: "plum bandwidth Gorgeous Rubber Gloves",num: 53446,date: new Date("2018-09-06T09:15:03.039Z"),obj: {_id: 29045,num: 24820,obj: {}}},{_id: 29046,str: "input",num: 95625,date: new Date("2018-09-06T17:24:18.532Z"),array: [],obj: {}},"implement Web neutral",92548,new Date("2018-09-06T05:43:13.185Z")]});
    },

    function(coll) {
        return coll.insert({_id: 29047,str: "Montana HTTP synthesize",num: 56812,date: new Date("2018-09-06T13:48:52.305Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29048,num: 21774,date: new Date("2018-09-06T10:34:39.129Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29049,str: "Washington utilisation TCP",num: 41362,date: new Date("2018-09-06T00:54:10.850Z"),obj: {_id: 29050,num: 19337,date: new Date("2018-09-06T00:24:21.624Z"),array: ["Rhode Island fault-tolerant","deposit Human streamline",new Date("2018-09-06T02:39:35.090Z"),70655,59407,"structure",new Date("2018-09-05T23:43:35.266Z"),{_id: 29051,str: "Lesotho Alaska",date: new Date("2018-09-05T23:05:46.074Z"),array: []},new Date("2018-09-06T11:24:56.427Z"),[{_id: 29052,str: "Customizable",num: 22857,date: new Date("2018-09-06T02:16:39.702Z"),array: [],obj: {_id: 29053,str: "technologies Jersey",num: 71671,date: new Date("2018-09-05T21:00:31.464Z"),array: [new Date("2018-09-06T02:59:46.121Z"),[]],obj: {}}},28135,27244,"deliver firewall"],{_id: 29054,str: "input innovative",num: 23155,array: [{_id: 29055,array: [],obj: {}},91843],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 29056,str: "array",array: ["Pennsylvania Bedfordshire",95800,{_id: 29057,str: "deposit budgetary management invoice",num: 26752,date: new Date("2018-09-05T21:09:30.308Z"),array: [],obj: {_id: 29058,str: "bypassing Buckinghamshire",num: 38434,date: new Date("2018-09-06T03:36:57.785Z"),array: [],obj: {_id: 29059,num: 48366,date: new Date("2018-09-06T13:31:22.099Z"),array: []}}},61494,new Date("2018-09-06T18:45:41.483Z"),10715,new Date("2018-09-06T12:39:30.637Z"),["e-services Missouri",new Date("2018-09-05T23:54:25.446Z"),{_id: 29060,str: "Tugrik primary",num: 80314,array: []},"Sausages","programming gold",43420,"program"]],obj: {_id: 29061,str: "Avon Infrastructure calculate",date: new Date("2018-09-06T09:12:39.126Z"),array: [98921,[],new Date("2018-09-06T11:18:03.159Z"),"fault-tolerant"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29062,str: "North Dakota",num: 73467,date: new Date("2018-09-06T09:53:35.734Z"),obj: {_id: 29063,num: 7492,date: new Date("2018-09-06T09:17:56.679Z"),array: [new Date("2018-09-06T19:04:56.523Z"),42625,"Program eyeballs compress",{_id: 29064,str: "Optional Solomon Islands Dollar",num: 61534,date: new Date("2018-09-06T17:08:14.481Z"),array: [],obj: {_id: 29065,str: "Serbia",num: 91277,array: []}},98782,"connecting",new Date("2018-09-06T19:44:34.046Z"),73858],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29066,str: "system",num: 69838,date: new Date("2018-09-05T22:30:39.257Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29067,str: "niches Ergonomic",num: 52456,date: new Date("2018-09-06T11:58:33.485Z"),array: [new Date("2018-09-06T16:50:38.417Z"),"Chicken",[],80058,94330,new Date("2018-09-06T09:14:00.703Z"),new Date("2018-09-06T16:11:30.268Z"),"Latvia Home Loan Account",[],{_id: 29068,str: "Industrial infrastructures national",num: 64117,obj: {}}],obj: {_id: 29069,date: new Date("2018-09-06T18:43:32.799Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29070,str: "high-level Plastic hack",num: 23212,date: new Date("2018-09-06T13:21:14.595Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29071,str: "Soft",num: 42453,array: ["copying",37176,new Date("2018-09-05T20:05:55.160Z"),"Unbranded Rubber Pants pink visionary",new Date("2018-09-06T17:11:12.459Z"),88476,"navigating Handcrafted Soft Computer",[17949,{_id: 29072,str: "Investor Future",num: 90267,date: new Date("2018-09-05T23:11:10.111Z"),array: [],obj: {_id: 29073,num: 1480,date: new Date("2018-09-05T21:52:52.344Z"),array: [],obj: {}}},new Date("2018-09-06T13:48:36.712Z"),"Plastic Representative synthesizing","enhance cross-platform Handmade",80895],{_id: 29074,str: "real-time XSS repurpose",num: 40016,obj: {_id: 29075,str: "SMTP Refined Steel Chips",date: new Date("2018-09-06T03:26:04.387Z")}},{_id: 29076,str: "bus",date: new Date("2018-09-06T11:45:23.961Z"),array: [[],new Date("2018-09-06T19:24:20.795Z")]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29077,str: "frictionless Lodge invoice",num: 27800,date: new Date("2018-09-06T13:45:45.684Z"),array: ["Buckinghamshire whiteboard Cotton",new Date("2018-09-06T17:42:36.499Z"),3264,52660,"fuchsia",new Date("2018-09-06T00:43:38.723Z"),64866,[],"budgetary management","local 1080p",{_id: 29078,str: "Total",num: 48681,array: [],obj: {_id: 29079,str: "teal web-enabled Leone",num: 21788,date: new Date("2018-09-06T16:01:52.278Z"),obj: {}}},36757],obj: {_id: 29080,date: new Date("2018-09-06T13:34:16.360Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29081,str: "morph",num: 81882,date: new Date("2018-09-06T10:38:57.656Z"),array: ["productize Polarised","input Sports","Assurance",43669,75640,{_id: 29082,num: 72526,date: new Date("2018-09-06T02:09:07.813Z"),array: [{_id: 29083,str: "Handcrafted Concrete Tuna back-end FTP",num: 14568,date: new Date("2018-09-06T04:54:25.113Z"),array: [],obj: {}},{_id: 29084,str: "Arkansas mint green",obj: {_id: 29085,str: "solution XML",num: 60250,date: new Date("2018-09-05T21:38:49.359Z"),array: [new Date("2018-09-06T09:28:56.465Z"),new Date("2018-09-06T07:06:57.106Z")]}}],obj: {}},new Date("2018-09-06T19:32:10.881Z"),65519,[],new Date("2018-09-06T15:13:23.059Z"),[75254,new Date("2018-09-05T21:35:04.238Z")]],obj: {_id: 29086,str: "Health National",obj: {_id: 29087,num: 11873,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 29088,str: "Norfolk Island Illinois",num: 66960,array: [],obj: {_id: 29089,str: "Handmade Granite Gloves",num: 59547,date: new Date("2018-09-06T14:36:28.480Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29090,str: "1080p",num: 12755,date: new Date("2018-09-06T00:32:27.863Z"),array: ["real-time",{_id: 29091,str: "Savings Account Bacon generating",num: 38945,array: [85671,new Date("2018-09-06T02:00:48.834Z"),"Malaysia Mobility parsing"],obj: {}},new Date("2018-09-05T22:35:07.966Z"),85593,new Date("2018-09-06T06:04:50.635Z"),"Personal Loan Account","input Customer",[8493],28377,"multi-byte hack",87335,14259,new Date("2018-09-06T17:01:23.315Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29092,str: "Spur access blue",num: 2595,date: new Date("2018-09-06T10:51:24.671Z"),array: [35620,{_id: 29093,str: "Timor-Leste",num: 27714,date: new Date("2018-09-05T20:20:00.228Z"),array: ["Marketing Metal synthesize",36022,"Granite",new Date("2018-09-06T11:32:04.021Z")],obj: {}},[],new Date("2018-09-06T08:13:24.195Z"),"strategic","Costa Rican Colon Unbranded",new Date("2018-09-06T06:03:55.060Z"),new Date("2018-09-06T04:23:43.682Z")],obj: {_id: 29094,str: "clicks-and-mortar",date: new Date("2018-09-05T22:08:49.846Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29095,num: 67992,date: new Date("2018-09-06T17:57:38.925Z"),array: ["Small Developer",[],new Date("2018-09-06T14:59:26.681Z"),["payment Personal Loan Account transmitter"],[new Date("2018-09-06T10:03:24.095Z")],{_id: 29096,str: "solutions mesh Turkmenistan",num: 81759,date: new Date("2018-09-06T02:02:44.695Z"),array: [],obj: {}},65325,{_id: 29097,str: "Sports",num: 21959,array: ["copy hub Mobility",74894],obj: {_id: 29098,str: "Swiss Franc Baby",num: 98322,date: new Date("2018-09-05T21:34:29.152Z"),obj: {_id: 29099,str: "Personal Loan Account",num: 22780,date: new Date("2018-09-06T17:24:18.668Z"),array: [],obj: {}}}},new Date("2018-09-06T06:04:59.636Z"),new Date("2018-09-06T19:14:55.170Z"),1810,1527],obj: {_id: 29100,str: "Coordinator",date: new Date("2018-09-06T13:19:26.273Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29101,str: "Sports Chicken Brand",num: 53980,date: new Date("2018-09-06T16:19:44.606Z"),array: [],obj: {_id: 29102,str: "Personal Loan Account",num: 34000,date: new Date("2018-09-06T00:41:25.391Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29103,str: "Tasty Shoes",num: 56215,date: new Date("2018-09-06T11:24:22.274Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29104,str: "Virginia grey Avon",num: 5715,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29105,str: "facilitate applications Incredible Wooden Shirt",num: 98345,date: new Date("2018-09-06T08:46:19.437Z"),array: ["Greens Liaison invoice",29938,new Date("2018-09-06T18:01:00.777Z"),83931,new Date("2018-09-06T02:24:15.034Z"),[],"Key hacking Internal",79393,[],"Granite Personal Loan Account",new Date("2018-09-05T20:45:14.767Z"),new Date("2018-09-05T23:00:48.128Z"),4791],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29106,num: 4044,date: new Date("2018-09-06T00:48:05.677Z"),array: [[],47556,"Dynamic Upgradable","backing up web services",{_id: 29107,str: "Arizona Codes specifically reserved for testing purposes",num: 33911,date: new Date("2018-09-06T17:54:51.306Z"),array: [72972,"United Kingdom metrics alarm"],obj: {}},{_id: 29108,str: "payment Concrete",num: 42996,date: new Date("2018-09-05T22:17:14.874Z"),array: [29718,new Date("2018-09-06T02:16:47.147Z")],obj: {}},new Date("2018-09-06T02:07:18.928Z"),69341,[],"Chair",{_id: 29109,num: 67185,obj: {_id: 29110,num: 18409,date: new Date("2018-09-06T17:14:55.883Z"),array: [new Date("2018-09-05T22:03:48.293Z"),[]]}},[]],obj: {_id: 29111,num: 77123,date: new Date("2018-09-06T14:30:07.198Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29112,num: 9554,array: [78183,new Date("2018-09-06T16:51:32.939Z"),"bypassing Small Sports",[new Date("2018-09-06T05:03:48.691Z"),8825,40134,84623,"intranet",[],new Date("2018-09-06T19:15:26.397Z"),new Date("2018-09-06T03:53:48.730Z")],"demand-driven overriding matrix","Berkshire Incredible Plastic Car Legacy"]});
    },

    function(coll) {
        return coll.insert({_id: 29113,str: "Home Loan Account e-services",num: 84138,date: new Date("2018-09-06T10:11:19.693Z"),array: [],obj: {_id: 29114,str: "Synergistic migration responsive",num: 76785,date: new Date("2018-09-06T01:35:26.378Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29115,str: "repurpose Nevada",array: ["Finland haptic monetize","Future complexity",28857,[],new Date("2018-09-06T16:33:09.018Z"),"Bedfordshire Cambridgeshire",new Date("2018-09-06T16:12:48.178Z"),"Developer Savings Account",{_id: 29116,str: "killer Buckinghamshire Jersey",num: 9697,date: new Date("2018-09-06T10:29:22.923Z"),array: [],obj: {_id: 29117,str: "Home Loan Account Automotive Sausages",num: 65624,date: new Date("2018-09-06T18:22:38.366Z"),array: [[{_id: 29118,str: "navigate Ergonomic",num: 16402,date: new Date("2018-09-05T20:46:06.717Z"),array: [new Date("2018-09-06T08:48:12.810Z"),55931,59369],obj: {}}]]}},new Date("2018-09-06T17:46:23.990Z"),[],[],new Date("2018-09-06T04:44:04.467Z"),new Date("2018-09-06T09:43:14.911Z"),69403],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29119,str: "vertical generating invoice",num: 47079,array: [85970,14810,[],new Date("2018-09-06T17:08:40.183Z"),"Data Sleek Rubber Sausages bypass",{_id: 29120,num: 59918,date: new Date("2018-09-05T20:39:59.994Z"),obj: {}},new Date("2018-09-06T17:06:35.598Z"),new Date("2018-09-06T07:58:19.974Z"),"driver digital","Savings Account",new Date("2018-09-05T23:25:48.720Z"),[],96844,85186,[new Date("2018-09-06T08:05:20.194Z")]],obj: {_id: 29121,str: "port orchestration Practical Granite Shoes",date: new Date("2018-09-06T05:38:23.581Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29122,str: "vertical Plastic reboot",num: 44942,date: new Date("2018-09-06T08:12:27.119Z"),array: [60004,[],72748,[],[["Dynamic"],new Date("2018-09-06T17:59:04.493Z"),"card Applications",21281,"Malaysian Ringgit Forges",new Date("2018-09-06T16:05:31.096Z")],{_id: 29123,str: "Money Market Account Street knowledge user",num: 21418,date: new Date("2018-09-06T18:51:53.824Z"),obj: {_id: 29124,str: "mobile",array: [],obj: {}}},["Generic Pennsylvania","Refined pixel invoice",{_id: 29125,num: 92777,date: new Date("2018-09-06T03:49:21.222Z"),obj: {}}],new Date("2018-09-06T09:35:25.670Z"),22564]});
    },

    function(coll) {
        return coll.insert({_id: 29126,date: new Date("2018-09-06T10:02:47.747Z"),obj: {_id: 29127,str: "Curve",num: 80191,date: new Date("2018-09-05T21:11:31.886Z"),array: [{_id: 29128,str: "Washington",num: 8786,array: [[]],obj: {}},new Date("2018-09-06T10:51:20.497Z"),"monetize",17186,"SDD user-facing",83997,46555,{_id: 29129,str: "Pizza Automotive connecting",num: 46034,date: new Date("2018-09-06T04:05:11.723Z"),array: [],obj: {_id: 29130,date: new Date("2018-09-05T22:27:45.087Z"),obj: {}}},54524,new Date("2018-09-06T05:30:24.486Z"),"Checking Account Vermont Central",[new Date("2018-09-06T16:44:44.255Z"),new Date("2018-09-06T10:00:35.540Z"),"Electronics"],"Music Forward Soap",[],28118]}});
    },

    function(coll) {
        return coll.insert({_id: 29131,str: "Grocery",num: 88690,date: new Date("2018-09-06T00:05:53.969Z"),array: [new Date("2018-09-06T03:28:11.115Z"),"transmitting Borders",new Date("2018-09-06T11:37:58.546Z"),[],"Frozen generating",18452,20525,85704,{_id: 29132,str: "pink Strategist",array: [68495],obj: {_id: 29133,str: "B2C real-time Bike",date: new Date("2018-09-06T05:28:47.281Z"),array: [],obj: {}}},["holistic Director",new Date("2018-09-06T03:01:29.520Z"),"software"],73361],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29134,str: "override",num: 66427,date: new Date("2018-09-06T01:20:14.718Z"),array: [],obj: {_id: 29135,str: "Djibouti mint green Loaf",num: 40748,array: [new Date("2018-09-06T16:24:18.621Z"),new Date("2018-09-06T10:31:11.194Z"),"Technician haptic Buckinghamshire",new Date("2018-09-06T10:38:59.489Z"),{_id: 29136,str: "Vision-oriented Saint Vincent and the Grenadines",num: 33349,date: new Date("2018-09-06T13:00:57.108Z"),obj: {}},"Kwanza",{_id: 29137,str: "Money Market Account",date: new Date("2018-09-06T08:00:23.503Z"),array: [59834],obj: {_id: 29138,str: "synthesize Connecticut",num: 84514,array: ["Awesome Granite Pizza Borders e-business"],obj: {_id: 29139,num: 33242,array: []}}},25730,{_id: 29140,str: "teal",date: new Date("2018-09-06T15:34:42.407Z"),array: []},70346,new Date("2018-09-05T22:40:36.300Z"),25659,[],[{_id: 29141,num: 10644,obj: {}},"hub Shirt calculating",58876]]}});
    },

    function(coll) {
        return coll.insert({_id: 29142,str: "monitoring Frozen",num: 35200,date: new Date("2018-09-06T11:29:26.459Z"),array: [36581,new Date("2018-09-06T13:54:34.815Z"),new Date("2018-09-05T21:07:02.784Z"),49798,"payment",new Date("2018-09-06T16:44:26.003Z"),55752,{_id: 29143,str: "Dalasi applications Personal Loan Account",num: 2675,date: new Date("2018-09-05T20:56:28.638Z"),array: [],obj: {_id: 29144,str: "Faroe Islands",num: 36354,obj: {}}},{_id: 29145,num: 20805,date: new Date("2018-09-05T23:55:00.058Z"),obj: {_id: 29146,str: "Tennessee",date: new Date("2018-09-06T09:58:50.377Z"),array: []}},["1080p zero defect","Kids connecting Planner"],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29147,str: "Metal",num: 75823,date: new Date("2018-09-06T08:29:10.452Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29148,str: "Turkmenistan monitoring",num: 34600,date: new Date("2018-09-06T02:25:16.458Z"),array: [new Date("2018-09-06T02:08:11.882Z"),[],"Customer neural deposit","Fantastic Plastic Pizza",43504,"Cambridgeshire",35112,"24/7 Intelligent Plastic Gloves",42699,25651,86240,new Date("2018-09-06T01:35:16.580Z"),{_id: 29149,str: "Prairie",num: 31756,date: new Date("2018-09-06T16:47:30.863Z"),array: [],obj: {_id: 29150,str: "Refined Multi-tiered",num: 88479,date: new Date("2018-09-06T06:54:50.544Z"),obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29151,str: "South Carolina Lock",num: 70429,date: new Date("2018-09-06T17:56:50.929Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29152,str: "Health",num: 64182,date: new Date("2018-09-05T22:56:18.920Z"),array: [new Date("2018-09-06T09:02:30.079Z"),"alarm",[],"frictionless",73676,"Table hack",new Date("2018-09-06T04:10:58.363Z"),59137,{_id: 29153,str: "Maine Concrete",num: 4265,date: new Date("2018-09-06T07:17:24.081Z"),array: [],obj: {_id: 29154,str: "bandwidth quantifying",array: [19124,new Date("2018-09-06T14:35:06.571Z"),74209,"Consultant unleash",[["impactful synergies",[]]],new Date("2018-09-06T18:28:09.679Z")],obj: {}}},{_id: 29155,num: 80446,date: new Date("2018-09-06T04:50:55.464Z"),array: [],obj: {}}],obj: {_id: 29156,num: 88519,date: new Date("2018-09-06T16:56:10.453Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29157,str: "Metal Metal",num: 51254,date: new Date("2018-09-06T03:03:45.163Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29158,str: "system engine executive",num: 11055,date: new Date("2018-09-06T18:50:50.544Z"),array: [96477,"Austria",new Date("2018-09-05T22:39:23.773Z"),new Date("2018-09-06T06:19:23.254Z"),[],{_id: 29159,str: "Buckinghamshire Awesome",num: 18186,date: new Date("2018-09-06T05:14:14.911Z"),obj: {}},"calculate",[]],obj: {_id: 29160,str: "scalable action-items",num: 84562,date: new Date("2018-09-06T00:26:21.556Z"),array: [{_id: 29161,num: 92058,array: [new Date("2018-09-05T22:50:54.996Z"),new Date("2018-09-06T13:43:35.900Z")],obj: {}},92076,80282,37785]}});
    },

    function(coll) {
        return coll.insert({_id: 29162,str: "dot-com protocol",num: 59841,date: new Date("2018-09-06T19:51:40.119Z"),array: [9483,new Date("2018-09-06T02:24:53.967Z"),new Date("2018-09-06T15:02:29.469Z"),"Sleek Soft Chair back-end Assurance","copying Engineer",new Date("2018-09-06T11:28:14.780Z"),"Ball",18928,"Garden drive Indiana",42177,new Date("2018-09-05T21:53:52.883Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29163,num: 66010,date: new Date("2018-09-06T18:41:48.850Z"),array: [new Date("2018-09-06T07:51:21.523Z"),56937,"Soft",{_id: 29164,str: "deliverables Executive bifurcated",num: 5115,date: new Date("2018-09-06T13:25:29.523Z"),obj: {_id: 29165,num: 9080,date: new Date("2018-09-06T06:01:05.250Z"),array: [],obj: {}}},35220,97706,"e-business Assistant navigate"],obj: {_id: 29166,str: "Gorgeous navigating morph",num: 6262,date: new Date("2018-09-06T17:34:24.123Z"),array: [new Date("2018-09-05T22:15:00.842Z"),"functionalities Mobility",[],[],new Date("2018-09-06T15:44:37.185Z"),"XSS Pizza"],obj: {_id: 29167,str: "Dynamic",date: new Date("2018-09-06T19:44:03.658Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29168,str: "Extended Frozen",num: 86185,date: new Date("2018-09-06T08:42:37.285Z"),array: ["Alaska JSON","incentivize",new Date("2018-09-06T07:24:34.988Z"),"hard drive",{_id: 29169,str: "Rustic Plastic",num: 39859,date: new Date("2018-09-06T15:18:43.965Z"),obj: {}},36297,{_id: 29170,str: "invoice",num: 49415,date: new Date("2018-09-06T01:09:43.679Z"),array: [],obj: {_id: 29171,num: 76701,date: new Date("2018-09-06T18:17:14.582Z")}},new Date("2018-09-06T01:26:20.881Z"),new Date("2018-09-06T11:34:12.780Z"),[45916,[],87902,"payment motivating",47304],new Date("2018-09-06T10:07:47.091Z")],obj: {_id: 29172,str: "Concrete Maldives Pataca",num: 75562,date: new Date("2018-09-06T07:32:14.233Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29173,str: "Future",num: 83597,date: new Date("2018-09-06T03:02:50.689Z"),array: [new Date("2018-09-05T22:09:52.767Z"),"Cambridgeshire relationships Shoals",52627,new Date("2018-09-06T09:47:56.134Z"),new Date("2018-09-05T23:22:47.138Z"),24474,new Date("2018-09-06T07:47:32.556Z"),"copying focus group Fish",[[],12601],61033,96312,{_id: 29174,str: "moderator quantifying haptic",date: new Date("2018-09-06T08:54:05.127Z"),array: ["mobile",new Date("2018-09-06T13:01:48.402Z")],obj: {}}],obj: {_id: 29175,str: "Congolese Franc Iraqi Dinar Lakes",num: 36734,date: new Date("2018-09-06T17:57:33.239Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 29176,num: 35625,date: new Date("2018-09-06T06:49:35.657Z"),array: [69514,{_id: 29177,str: "lavender IB Bacon",date: new Date("2018-09-06T13:23:34.716Z"),obj: {_id: 29178,str: "Internal solid state reboot",num: 7430,date: new Date("2018-09-06T08:47:25.950Z"),array: [],obj: {_id: 29179,str: "Universal",num: 67402,date: new Date("2018-09-06T09:31:11.285Z"),array: [],obj: {}}}},new Date("2018-09-05T23:37:32.624Z"),"Incredible Metal Mouse",36876,new Date("2018-09-06T13:15:29.769Z"),41001],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29180,str: "redundant European Unit of Account 9(E.U.A.-9)",date: new Date("2018-09-06T08:47:27.783Z"),array: ["architectures Iraq program",new Date("2018-09-06T12:47:17.162Z"),25967,"architect",[],20767,new Date("2018-09-06T10:22:51.188Z"),new Date("2018-09-06T07:39:26.738Z"),{_id: 29181,str: "Metrics alarm Quality-focused",num: 9019,date: new Date("2018-09-06T15:52:27.976Z"),array: [],obj: {}},"Direct Direct generate",new Date("2018-09-06T05:39:15.373Z"),new Date("2018-09-06T06:26:45.290Z")],obj: {_id: 29182,str: "array",num: 83917,array: [37095,"intuitive Borders"]}});
    },

    function(coll) {
        return coll.insert({_id: 29183,str: "Polarised haptic Baby",num: 9082,date: new Date("2018-09-06T02:00:37.191Z"),array: [57251,new Date("2018-09-06T16:40:00.549Z"),{_id: 29184,num: 31631,date: new Date("2018-09-05T23:55:35.206Z"),array: [],obj: {}},[new Date("2018-09-06T04:11:46.212Z"),"Islands invoice open-source",[new Date("2018-09-06T09:57:30.311Z")],"Salad"],41747,"array Profit-focused",36154,22472,"enhance Borders"],obj: {_id: 29185,str: "Pizza",num: 47057,date: new Date("2018-09-06T11:26:13.611Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29186,str: "Prairie Refined Rubber Bacon mindshare",num: 33203,date: new Date("2018-09-06T08:10:10.667Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29187,str: "invoice Maine",num: 72203,date: new Date("2018-09-05T22:38:42.965Z"),array: [[],"solution Licensed",90858,new Date("2018-09-06T01:11:45.718Z"),"synthesizing Shoes",702,83004,new Date("2018-09-05T22:02:17.973Z"),new Date("2018-09-06T19:25:34.908Z"),new Date("2018-09-06T07:03:38.900Z")]});
    },

    function(coll) {
        return coll.insert({_id: 29188,str: "Dynamic calculating Triple-buffered",num: 36301,date: new Date("2018-09-05T20:26:36.820Z"),array: ["Circle primary Missouri",new Date("2018-09-05T23:12:43.152Z"),{_id: 29189,num: 57085,date: new Date("2018-09-05T21:45:46.126Z"),obj: {}},85091,"Borders","bypass",{_id: 29190,str: "Plastic Chips purple",num: 75348,obj: {_id: 29191,str: "overriding Engineer experiences",num: 3044,date: new Date("2018-09-06T19:39:02.904Z"),array: [],obj: {_id: 29192,str: "Analyst",num: 37844,array: []}}},90980,new Date("2018-09-06T12:07:34.745Z"),"Home hacking",24926],obj: {_id: 29193,num: 92782,date: new Date("2018-09-06T00:03:41.757Z"),array: [],obj: {_id: 29194,str: "Salad Lari Generic",date: new Date("2018-09-06T05:01:38.042Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 29195,str: "Automotive",num: 77737,date: new Date("2018-09-05T20:50:20.164Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29196,str: "Illinois",num: 81117,date: new Date("2018-09-06T08:44:35.233Z"),obj: {_id: 29197,str: "SMTP",date: new Date("2018-09-06T18:47:08.355Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29198,str: "Games Infrastructure",num: 58123,date: new Date("2018-09-06T12:03:28.078Z"),array: [new Date("2018-09-06T02:12:29.813Z"),"bandwidth",new Date("2018-09-06T15:40:38.788Z"),[{_id: 29199,str: "moratorium",num: 46418,date: new Date("2018-09-05T21:34:52.888Z"),array: [],obj: {}},65378,"Wooden",97211],66137,"Quality-focused",69687,new Date("2018-09-06T04:38:11.518Z"),[new Date("2018-09-06T18:31:37.057Z"),{_id: 29200,num: 57730,obj: {}}],"Dynamic Keyboard"]});
    },

    function(coll) {
        return coll.insert({_id: 29201,str: "Antarctica (the territory South of 60 deg S) Forward eyeballs",num: 69403,date: new Date("2018-09-05T22:23:52.673Z"),array: ["Utah archive transmitter",new Date("2018-09-06T04:49:34.881Z"),55119,new Date("2018-09-06T07:57:24.112Z"),"e-enable Intelligent Metal Chips expedite",[],"indigo Borders backing up"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29202,str: "invoice",num: 77009,date: new Date("2018-09-06T02:21:49.039Z"),array: [],obj: {_id: 29203,str: "Bouvet Island (Bouvetoya) Innovative",num: 35891,date: new Date("2018-09-05T23:21:37.593Z"),array: [40943,98697,new Date("2018-09-05T20:46:43.199Z"),new Date("2018-09-06T07:35:03.340Z"),57366,"transmit","invoice Refined Cotton Keyboard bluetooth",{_id: 29204,num: 71044,array: [66901],obj: {}},new Date("2018-09-06T00:14:18.086Z"),"cross-platform",{_id: 29205,str: "Rustic Fresh Table enable",num: 57009,date: new Date("2018-09-06T11:37:28.778Z"),obj: {}},[]],obj: {_id: 29206,num: 65188,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 29207,str: "best-of-breed",num: 71627,date: new Date("2018-09-06T09:22:12.278Z"),array: [93474,"Practical foreground","system 24/365"],obj: {_id: 29208,str: "Malaysian Ringgit",num: 52164,date: new Date("2018-09-06T09:14:46.135Z"),array: [{_id: 29209,str: "Towels Armenian Dram",num: 63593,array: []},14915,new Date("2018-09-06T00:13:44.333Z"),[new Date("2018-09-06T15:55:13.967Z"),30088,"Berkshire Soft Borders",{_id: 29210,str: "Intelligent invoice virtual",date: new Date("2018-09-06T11:06:33.438Z"),obj: {_id: 29211,num: 3723,date: new Date("2018-09-05T21:50:20.031Z"),obj: {_id: 29212,str: "synergize panel Manager",num: 40732,date: new Date("2018-09-06T09:42:31.102Z"),array: [],obj: {}}}},new Date("2018-09-06T17:22:58.601Z")],{_id: 29213,num: 36586,date: new Date("2018-09-06T17:38:59.143Z"),array: [],obj: {_id: 29214,array: [],obj: {}}},new Date("2018-09-06T00:34:21.091Z"),80522,[new Date("2018-09-05T21:46:29.135Z")],68012]}});
    },

    function(coll) {
        return coll.insert({_id: 29215,str: "Refined Unbranded",num: 19558,date: new Date("2018-09-06T03:11:09.730Z"),array: [],obj: {_id: 29216,str: "New Leu Kroon Small",num: 80479,date: new Date("2018-09-05T20:33:50.297Z"),array: [new Date("2018-09-06T14:16:54.259Z"),25334,"navigate Palladium",81139,new Date("2018-09-06T10:50:44.451Z"),"seize Louisiana Texas",new Date("2018-09-05T20:38:29.074Z"),["Officer"],new Date("2018-09-06T04:39:41.184Z"),{_id: 29217,str: "digital Mount",num: 13283,date: new Date("2018-09-06T03:28:54.508Z"),array: [],obj: {_id: 29218,str: "Innovative Handcrafted Ohio",num: 58297,date: new Date("2018-09-06T01:14:32.365Z"),obj: {}}},"6th generation throughput",64533,[["Identity"],new Date("2018-09-05T20:17:53.092Z")],"Wooden",new Date("2018-09-06T08:34:48.987Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29219,str: "EXE Product",num: 70084,date: new Date("2018-09-06T00:24:13.601Z"),array: [55960,"Gorgeous",new Date("2018-09-06T08:25:23.074Z"),13719,new Date("2018-09-06T01:28:13.567Z"),45619,new Date("2018-09-06T02:20:46.408Z"),"Soft deposit",new Date("2018-09-06T05:29:24.355Z"),"Bedfordshire Practical Borders"]});
    },

    function(coll) {
        return coll.insert({_id: 29220,str: "Chips",num: 29718,date: new Date("2018-09-06T00:10:50.735Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29221,str: "tertiary open-source upward-trending",num: 88292,date: new Date("2018-09-06T07:20:18.126Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29222,str: "indigo Credit Card Account Games",num: 17063,date: new Date("2018-09-06T16:52:00.231Z"),array: [["Gorgeous Steel Chips",16286,new Date("2018-09-06T04:16:50.778Z")],new Date("2018-09-06T03:06:43.555Z"),new Date("2018-09-06T09:52:22.067Z"),30491,new Date("2018-09-06T07:51:06.372Z"),{_id: 29223,str: "Groves transmitting Soft",num: 54044,date: new Date("2018-09-06T14:15:07.561Z"),array: [18350]},"bypassing calculate Web",{_id: 29224,str: "orchid Borders",num: 67895,obj: {}},"Guinea-Bissau Personal Loan Account paradigms","Stravenue",15751],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29225,str: "Personal Loan Account applications Music",num: 8421,date: new Date("2018-09-06T07:16:14.865Z"),array: [33560,{_id: 29226,str: "transmit",num: 86850,date: new Date("2018-09-06T06:06:05.474Z"),obj: {_id: 29227,str: "PCI",num: 32456,array: [],obj: {}}},"engineer indigo Customer",new Date("2018-09-05T21:43:10.850Z"),"hard drive Senior",new Date("2018-09-06T15:16:00.400Z"),76634,86776,new Date("2018-09-06T00:22:41.421Z"),new Date("2018-09-06T16:13:01.400Z")]});
    },

    function(coll) {
        return coll.insert({_id: 29228,str: "reboot Fresh bluetooth",num: 82005,date: new Date("2018-09-06T18:27:19.339Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29229,str: "Supervisor Global",num: 95915,date: new Date("2018-09-06T00:09:24.813Z"),array: [],obj: {_id: 29230,num: 34647,date: new Date("2018-09-06T11:29:59.131Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29231,str: "Refined Plastic Shirt Supervisor",num: 67291,date: new Date("2018-09-06T14:56:38.300Z"),array: [34582,"e-commerce",new Date("2018-09-06T16:44:46.804Z"),20634,"Tasty Cotton Handmade Frozen Chicken",23796,["virtual next-generation Frozen"],85245,new Date("2018-09-05T21:38:27.750Z"),[],"Small",{_id: 29232,str: "paradigms National Licensed",num: 20266,date: new Date("2018-09-06T10:10:15.777Z"),array: []},new Date("2018-09-05T20:05:59.945Z")],obj: {_id: 29233,str: "target invoice",num: 68775,date: new Date("2018-09-06T13:01:36.969Z"),array: [{_id: 29234,num: 66523,obj: {_id: 29235,str: "Unbranded",num: 58363,date: new Date("2018-09-06T01:44:04.813Z"),array: [],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29236,str: "Somoni Sausages synthesizing",date: new Date("2018-09-05T23:07:45.001Z"),array: [],obj: {_id: 29237,num: 30269,date: new Date("2018-09-06T14:08:57.654Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29238,str: "motivating pixel",num: 38930,date: new Date("2018-09-05T23:20:07.675Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29239,str: "Generic Valleys quantify",num: 89571,date: new Date("2018-09-06T10:27:30.190Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29240,str: "Plains",num: 16012,date: new Date("2018-09-06T08:12:49.756Z"),array: ["Utah",64351,8010,[],new Date("2018-09-06T03:21:50.680Z"),{_id: 29241,str: "bottom-line",num: 34381,date: new Date("2018-09-05T20:09:38.037Z"),array: [],obj: {}},"Plastic",new Date("2018-09-06T12:09:18.433Z")],obj: {_id: 29242,str: "incubate Forint",num: 98904,date: new Date("2018-09-05T23:54:00.352Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29243,str: "Analyst",num: 53844,date: new Date("2018-09-06T16:17:13.146Z"),array: [34811,"Generic Rubber Computer",64336,new Date("2018-09-06T13:49:41.756Z"),new Date("2018-09-06T03:03:35.084Z"),"IB",{_id: 29244,str: "payment",num: 7013,date: new Date("2018-09-05T22:26:57.092Z"),array: [],obj: {}},93191,new Date("2018-09-06T13:59:52.767Z")]});
    },

    function(coll) {
        return coll.insert({_id: 29245,str: "Assurance program",num: 50284,date: new Date("2018-09-05T20:04:36.936Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29246,str: "models Shoes Corporate",num: 5975,date: new Date("2018-09-06T00:40:44.952Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29247,str: "User-friendly",num: 94650,date: new Date("2018-09-06T06:17:02.956Z"),array: [],obj: {_id: 29248,num: 82691,date: new Date("2018-09-06T13:45:18.133Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29249,str: "gold Books collaborative",num: 79935,date: new Date("2018-09-06T15:47:26.697Z"),array: ["AGP",52729,new Date("2018-09-06T02:32:51.247Z"),new Date("2018-09-06T00:25:52.786Z"),[],68968,"Ergonomic Granite Hat Kuwait",{_id: 29250,str: "Steel tan Berkshire",num: 38926,date: new Date("2018-09-05T22:34:19.668Z"),array: [],obj: {_id: 29251,date: new Date("2018-09-05T21:22:22.137Z"),obj: {_id: 29252,str: "Practical Kids Chief",num: 28332,date: new Date("2018-09-06T05:55:41.257Z"),array: ["Nevada"]}}},new Date("2018-09-06T15:37:06.383Z"),22926,"Director",new Date("2018-09-06T17:30:53.822Z"),{_id: 29253,num: 96678,array: [68619],obj: {}},new Date("2018-09-06T08:26:18.520Z")]});
    },

    function(coll) {
        return coll.insert({_id: 29254,num: 80183,date: new Date("2018-09-05T23:38:53.922Z"),array: ["olive",[],19339,5370,"Money Market Account communities",new Date("2018-09-06T16:46:09.767Z"),"Awesome",new Date("2018-09-06T10:02:39.561Z"),{_id: 29255,str: "Digitized Forward Steel",num: 39263,date: new Date("2018-09-06T13:31:15.489Z"),obj: {_id: 29256,str: "system-worthy iterate",date: new Date("2018-09-06T19:35:49.487Z"),obj: {}}},[new Date("2018-09-05T20:52:46.731Z"),{_id: 29257,str: "web-readiness",num: 64861,date: new Date("2018-09-06T01:01:38.009Z"),array: [new Date("2018-09-06T04:41:46.409Z")],obj: {_id: 29258,str: "incremental",array: [],obj: {}}},"extensible Up-sized concept"]]});
    },

    function(coll) {
        return coll.insert({_id: 29259,str: "virtual pink project",num: 70829,date: new Date("2018-09-06T04:37:52.764Z"),array: [new Date("2018-09-06T05:25:21.288Z"),"Computers",87621,"application Italy Money Market Account",{_id: 29260,str: "Credit Card Account time-frame",num: 15122,date: new Date("2018-09-06T08:17:39.918Z"),array: [],obj: {}},new Date("2018-09-05T20:51:06.477Z"),new Date("2018-09-06T06:32:22.411Z"),62071,60664,"infrastructures CSS",new Date("2018-09-06T09:24:00.929Z"),["Optimized"]],obj: {_id: 29261,str: "Rustic",num: 18983,date: new Date("2018-09-06T09:35:43.747Z"),array: [28976,"connecting"],obj: {_id: 29262,num: 4204,obj: {_id: 29263,str: "mission-critical withdrawal",date: new Date("2018-09-06T08:50:53.895Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 29264,str: "Cape Industrial",date: new Date("2018-09-06T03:16:56.407Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29265,str: "Home Loan Account Director Buckinghamshire",num: 31225,date: new Date("2018-09-06T01:24:35.967Z"),array: [new Date("2018-09-06T17:42:23.325Z"),19589,20079,{_id: 29266,date: new Date("2018-09-06T12:55:37.531Z"),array: [],obj: {}},new Date("2018-09-06T17:02:42.911Z"),["USB Refined backing up",new Date("2018-09-05T23:54:37.135Z"),"repurpose Face to face Operations",{_id: 29267,str: "Berkshire",num: 67553,date: new Date("2018-09-06T07:27:22.358Z"),array: []},38409,[51594,{_id: 29268,str: "Implementation New Zealand",num: 49089,date: new Date("2018-09-06T00:09:39.426Z"),array: [],obj: {}}],"Digitized"],"Factors Danish Krone"],obj: {_id: 29269,num: 44884,date: new Date("2018-09-06T12:31:03.239Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29270,str: "invoice sexy Investment Account",num: 60533,date: new Date("2018-09-06T12:40:41.159Z"),array: [new Date("2018-09-06T13:32:38.422Z"),72932,"users Squares","AGP Granite",[],new Date("2018-09-06T18:56:39.545Z"),{_id: 29271,str: "Tasty Concrete Salad",num: 51045,array: [46942,[],"redundant Manager intuitive"],obj: {_id: 29272,num: 19067,array: [new Date("2018-09-06T14:43:45.462Z")],obj: {}}},new Date("2018-09-06T16:51:55.389Z"),2589,{_id: 29273,str: "Assistant Upgradable Mission",num: 75647,date: new Date("2018-09-06T19:25:28.446Z")},new Date("2018-09-06T02:25:35.141Z")],obj: {_id: 29274,str: "e-business",date: new Date("2018-09-06T04:10:13.722Z"),array: [],obj: {_id: 29275,date: new Date("2018-09-06T03:42:24.022Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 29276,str: "Advanced Shoes",num: 78879,date: new Date("2018-09-06T15:28:27.592Z"),array: [],obj: {_id: 29277,str: "Handcrafted",num: 60919,date: new Date("2018-09-06T05:07:25.482Z"),array: [new Date("2018-09-06T00:46:14.862Z"),30568,new Date("2018-09-06T07:48:04.550Z"),"program adapter Awesome Concrete Keyboard",new Date("2018-09-06T07:29:53.461Z"),[51068,"redefine Radial Checking Account",{_id: 29278,str: "Handcrafted Steel",num: 26808,date: new Date("2018-09-05T20:24:54.974Z"),obj: {}},"Factors",7433],49514,["Grocery"],[{_id: 29279,str: "indexing",date: new Date("2018-09-06T07:25:03.755Z"),array: []},[79721,new Date("2018-09-05T21:53:53.177Z")]],"Idaho",new Date("2018-09-06T12:41:44.457Z")],obj: {_id: 29280,str: "navigate",num: 48439,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 29281,str: "user-facing Implementation Club",num: 47779,date: new Date("2018-09-06T05:51:19.946Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29282,date: new Date("2018-09-06T19:15:53.861Z")});
    },

    function(coll) {
        return coll.insert({_id: 29283,str: "maroon bandwidth-monitored Human",num: 70027,date: new Date("2018-09-06T06:32:48.585Z"),array: [],obj: {_id: 29284,str: "Chicken",num: 40750,date: new Date("2018-09-05T20:36:50.102Z"),array: [new Date("2018-09-06T10:44:15.115Z"),"Central Tools Table",new Date("2018-09-06T06:08:28.468Z"),new Date("2018-09-06T06:43:04.511Z"),[new Date("2018-09-06T00:17:36.860Z"),{_id: 29285,str: "SMS mint green cross-platform",num: 7244,date: new Date("2018-09-06T13:15:27.876Z"),array: [],obj: {_id: 29286,str: "hacking",num: 50380,date: new Date("2018-09-06T04:38:36.531Z"),array: ["Consultant Awesome distributed",29465,"Colorado Technician"],obj: {}}},98274],[],"purple",29240,new Date("2018-09-06T05:24:21.272Z"),61485],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29287,str: "black Connecticut haptic",num: 56801,date: new Date("2018-09-05T23:54:26.393Z"),array: [],obj: {_id: 29288,str: "Ergonomic frame Towels",num: 6613,date: new Date("2018-09-06T18:56:00.665Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29289,num: 79510,date: new Date("2018-09-06T00:17:25.865Z"),array: [],obj: {_id: 29290,str: "Electronics compress Executive",num: 64114,array: [],obj: {_id: 29291,str: "Gloves",num: 72674,date: new Date("2018-09-05T23:12:26.913Z"),array: [["tan",new Date("2018-09-06T10:13:42.758Z"),new Date("2018-09-06T16:53:35.430Z"),77950,"transmitter Metal"],new Date("2018-09-05T23:01:22.109Z"),[{_id: 29292,str: "navigating Lodge",num: 18715,date: new Date("2018-09-06T13:36:04.273Z"),array: [],obj: {}},new Date("2018-09-06T09:58:40.749Z")],"Cambridgeshire Ergonomic",13599,61785,[48605,"Fantastic Steel Chips",{_id: 29293,num: 67085,date: new Date("2018-09-06T07:49:18.267Z")}],"JSON Afghani artificial intelligence",{_id: 29294,str: "haptic optimize",date: new Date("2018-09-06T10:36:36.223Z"),obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 29295,str: "time-frame Tasty Cotton Table",num: 11450,date: new Date("2018-09-05T21:52:51.025Z"),array: [39129,new Date("2018-09-06T06:43:47.875Z"),new Date("2018-09-06T01:18:36.970Z"),"visionary invoice",new Date("2018-09-06T11:31:26.058Z"),38853,new Date("2018-09-06T00:07:10.513Z"),7241,new Date("2018-09-06T05:58:27.466Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29296,str: "applications Graphic Interface",num: 86673,array: ["Wooden","calculate Direct",new Date("2018-09-06T11:47:41.354Z"),"Up-sized",13466,17923,"even-keeled Steel brand",new Date("2018-09-06T03:33:26.683Z"),new Date("2018-09-05T22:03:21.064Z"),[],new Date("2018-09-06T15:49:59.221Z"),{_id: 29297,str: "Jewelery Hong Kong",num: 45801,date: new Date("2018-09-06T17:16:58.310Z"),array: [new Date("2018-09-06T03:13:40.436Z"),49601],obj: {}},"synthesizing Unbranded"],obj: {_id: 29298,str: "communities",num: 9626,date: new Date("2018-09-06T10:39:12.271Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29299,str: "Alaska",date: new Date("2018-09-06T18:10:38.216Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29300,str: "Intranet International Engineer",num: 95665,date: new Date("2018-09-05T21:57:44.805Z"),array: [[],90017,{_id: 29301,str: "Handmade invoice",num: 68266,date: new Date("2018-09-06T06:02:12.218Z"),array: []},"Roads distributed matrix",65761,65244,new Date("2018-09-06T11:12:01.702Z"),new Date("2018-09-06T18:31:02.413Z"),"HTTP",new Date("2018-09-06T15:01:35.009Z"),"payment Views",[89361,{_id: 29302,str: "interfaces calculating Rustic Soft Shirt",num: 44420,date: new Date("2018-09-06T06:17:46.964Z"),obj: {}}]]});
    },

    function(coll) {
        return coll.insert({_id: 29303,str: "Operative",num: 51885,date: new Date("2018-09-06T12:30:49.762Z"),array: ["Meadow array sky blue",new Date("2018-09-06T19:37:22.467Z"),new Date("2018-09-06T07:05:44.240Z"),238,{_id: 29304,str: "bluetooth radical Saint Helena Pound",array: [],obj: {_id: 29305,str: "Bedfordshire",num: 99362,obj: {}}},[],47296,new Date("2018-09-05T23:18:13.093Z"),[62309,"Belize Dollar generate framework"],new Date("2018-09-06T16:52:34.746Z"),"Berkshire deposit",new Date("2018-09-06T09:36:06.196Z"),66702],obj: {_id: 29306,num: 35046,date: new Date("2018-09-06T08:06:46.430Z"),array: ["composite","web-enabled grey Handmade Wooden Salad",{_id: 29307,num: 30446,date: new Date("2018-09-06T12:08:15.634Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 29308,str: "Ameliorated quantifying",num: 76866,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29309,str: "Bahrain technologies",num: 93308,date: new Date("2018-09-06T11:32:37.900Z"),array: [new Date("2018-09-06T01:19:41.980Z"),56466,new Date("2018-09-06T01:01:08.644Z"),"compelling convergence",new Date("2018-09-06T06:50:04.799Z"),[],"United States Minor Outlying Islands","Planner",87687,33145],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29310,num: 98609,date: new Date("2018-09-05T22:39:22.356Z"),array: [],obj: {_id: 29311,str: "Berkshire",num: 99655,date: new Date("2018-09-06T00:15:27.497Z"),array: [12130,21306,new Date("2018-09-06T11:54:28.712Z"),"reboot","open-source Generic Concrete Soap",[new Date("2018-09-06T12:11:01.227Z"),"niches"],{_id: 29312,str: "GB",num: 87520,date: new Date("2018-09-06T17:03:57.120Z"),obj: {_id: 29313,num: 98149,array: []}},new Date("2018-09-05T22:09:45.894Z"),["Arizona"],17631,new Date("2018-09-06T19:11:51.495Z"),45706],obj: {_id: 29314,str: "Auto Loan Account",num: 96585,array: [50594,new Date("2018-09-06T12:45:46.838Z"),76487],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 29315,str: "demand-driven real-time",num: 19260,date: new Date("2018-09-05T21:43:11.263Z"),array: [[new Date("2018-09-06T07:25:57.084Z"),94998],60318,27641,new Date("2018-09-06T11:07:31.066Z"),"Montenegro",{_id: 29316,str: "Home Loan Account",num: 14176,array: [new Date("2018-09-06T11:39:45.180Z"),[],"Louisiana IB Credit Card Account","disintermediate"],obj: {_id: 29317,num: 21953,date: new Date("2018-09-06T01:00:34.419Z"),array: [],obj: {}}},"Garden Arizona",{_id: 29318,num: 3444,date: new Date("2018-09-06T07:38:13.120Z"),array: []},"Soft wireless parse",new Date("2018-09-06T03:19:08.324Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29319,str: "parse Lead",num: 1401,date: new Date("2018-09-05T23:48:59.155Z"),array: ["Comoro Franc Incredible Ergonomic",new Date("2018-09-06T13:26:41.952Z"),25056,"AGP",53119,new Date("2018-09-05T20:15:23.769Z"),{_id: 29320,str: "Manager",num: 37210,array: [],obj: {_id: 29321,str: "Practical Steel Shirt Cross-group",num: 41007,date: new Date("2018-09-05T21:30:38.557Z"),array: [],obj: {_id: 29322,date: new Date("2018-09-06T13:01:22.733Z"),obj: {}}}},new Date("2018-09-06T17:13:02.130Z"),61897],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29323,str: "bypassing Executive backing up",num: 85195,date: new Date("2018-09-05T20:38:57.561Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29324,str: "Enterprise-wide Gorgeous Frozen Computer",num: 10347,date: new Date("2018-09-06T17:04:35.604Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29325,str: "asymmetric Argentine Peso Tasty Cotton Gloves",num: 89983,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29326,num: 61925,date: new Date("2018-09-06T14:43:28.493Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29327,str: "Sleek Concrete Pants Soap",num: 80657,array: ["customized Alaska",new Date("2018-09-06T10:20:10.452Z"),"Turkish Lira FTP",new Date("2018-09-06T14:06:55.808Z"),6130,{_id: 29328,num: 52901,date: new Date("2018-09-06T06:15:21.631Z"),array: [],obj: {}},new Date("2018-09-06T03:45:28.797Z"),24801,new Date("2018-09-06T16:14:31.570Z"),{_id: 29329,str: "Cross-platform",date: new Date("2018-09-06T00:58:37.154Z"),obj: {_id: 29330,str: "one-to-one",date: new Date("2018-09-06T03:26:03.533Z"),array: [[]],obj: {}}},86788,"open-source generating Senior","sexy Games"],obj: {_id: 29331,str: "Tajikistan Auto Loan Account",num: 23854,date: new Date("2018-09-06T15:59:02.502Z")}});
    },

    function(coll) {
        return coll.insert({_id: 29332,str: "Concrete",num: 98077,date: new Date("2018-09-05T21:54:35.010Z"),array: ["Wooden",new Date("2018-09-06T00:03:56.401Z"),[{_id: 29333,str: "Handmade Cotton Cheese streamline paradigm",date: new Date("2018-09-06T02:13:54.264Z"),array: [],obj: {}}],{_id: 29334,num: 93628,obj: {_id: 29335,str: "Direct high-level paradigms",array: [],obj: {_id: 29336,str: "monitor Sausages Keyboard",num: 10052,date: new Date("2018-09-05T22:07:54.872Z"),array: [85090,68512]}}},[],"Garden","Savings Account scale",84297,new Date("2018-09-06T18:57:58.704Z"),new Date("2018-09-06T04:22:03.805Z"),10232,{_id: 29337,str: "Lead",date: new Date("2018-09-06T10:58:25.720Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29338,str: "local area network",num: 68680,date: new Date("2018-09-06T13:28:02.768Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29339,str: "Sleek Cotton Table Credit Card Account Small",num: 42239,date: new Date("2018-09-06T19:41:22.366Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29340,str: "XML task-force",num: 7269,date: new Date("2018-09-06T18:22:59.900Z"),array: [74342,"Barbados Personal Loan Account 4th generation",84330,new Date("2018-09-06T02:11:45.904Z"),[],{_id: 29341,str: "XSS cross-media",num: 51363,date: new Date("2018-09-06T10:47:29.335Z"),array: [],obj: {}},new Date("2018-09-06T10:11:41.935Z"),{_id: 29342,str: "Ergonomic Steel Fish methodical",num: 78898,date: new Date("2018-09-06T14:16:13.326Z"),obj: {_id: 29343,num: 48891,array: [new Date("2018-09-06T16:31:04.535Z"),[],"transmit Dynamic whiteboard"],obj: {}}},{_id: 29344,str: "bandwidth",array: [{_id: 29345,num: 89929,date: new Date("2018-09-06T10:33:21.063Z")}],obj: {_id: 29346,str: "Maryland Personal Loan Account",num: 69535,obj: {}}},26414,"transmitting Riel",78316],obj: {_id: 29347,str: "Wells Internal",num: 42767,date: new Date("2018-09-06T10:50:44.914Z"),array: [new Date("2018-09-06T02:32:17.939Z"),new Date("2018-09-06T18:51:38.273Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 29348,str: "Ergonomic",num: 2989,date: new Date("2018-09-06T18:54:24.650Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29349,str: "Beauty Maryland Ergonomic Fresh Car",num: 52981,date: new Date("2018-09-06T15:37:35.534Z"),array: [new Date("2018-09-06T02:39:10.096Z"),"Configuration multi-tasking generate",[{_id: 29350,num: 6685,date: new Date("2018-09-06T08:05:25.350Z"),array: [],obj: {_id: 29351,str: "Texas olive purple",date: new Date("2018-09-05T20:01:15.108Z"),obj: {}}},"circuit Soft Central"],3286,new Date("2018-09-06T19:08:00.936Z"),{_id: 29352,str: "reintermediate",num: 99551,array: [41007,"application"],obj: {}},[],{_id: 29353,str: "Principal Refined Granite Bike RAM",date: new Date("2018-09-05T22:15:01.427Z")},new Date("2018-09-06T19:14:43.903Z"),{_id: 29354,num: 22949,array: [],obj: {_id: 29355,num: 37117,date: new Date("2018-09-06T17:43:27.146Z")}},"connecting",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29356,str: "model",num: 17028,date: new Date("2018-09-06T04:26:00.764Z"),array: [],obj: {_id: 29357,str: "connecting protocol",num: 99494,date: new Date("2018-09-06T17:11:09.257Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29358,str: "Licensed Frozen",num: 18482,date: new Date("2018-09-06T02:00:09.932Z"),array: [new Date("2018-09-06T17:15:00.687Z"),"azure Wooden",75331,55445,"bypassing invoice",[],"withdrawal",{_id: 29359,str: "red",num: 15175,array: [new Date("2018-09-06T06:01:53.083Z")]},new Date("2018-09-06T12:38:12.320Z"),{_id: 29360,str: "partnerships invoice",date: new Date("2018-09-06T06:54:48.263Z"),array: ["viral Executive Shirt",81968],obj: {}},[],new Date("2018-09-06T11:49:14.904Z")]});
    },

    function(coll) {
        return coll.insert({_id: 29361,str: "invoice payment",num: 50400,date: new Date("2018-09-06T03:58:36.667Z"),array: [],obj: {_id: 29362,str: "Wyoming Games reinvent",num: 62432,array: ["online",new Date("2018-09-05T23:57:23.284Z"),79061,"Cayman Islands Dollar channels",new Date("2018-09-06T02:09:45.380Z"),"invoice",84989,new Date("2018-09-06T09:04:44.275Z"),new Date("2018-09-06T10:55:55.472Z"),"Mount","matrix",{_id: 29363,date: new Date("2018-09-06T10:08:36.341Z"),array: [],obj: {}},{_id: 29364,str: "firewall Jewelery",num: 73865,date: new Date("2018-09-06T00:20:49.422Z"),obj: {}}],obj: {_id: 29365,str: "Implementation El Salvador Colon US Dollar",num: 85074,date: new Date("2018-09-06T14:04:13.962Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 29366,str: "Lock Investment Account Guyana Dollar",num: 77899,date: new Date("2018-09-06T07:43:00.765Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29367,str: "Cambridgeshire",num: 51330,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29368,str: "white Chair convergence",num: 88873,date: new Date("2018-09-06T01:08:56.714Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 29369,str: "Nebraska",num: 63353,date: new Date("2018-09-06T05:17:25.646Z"),array: [new Date("2018-09-06T08:42:11.462Z"),"hard drive",85981,"Forward Wallis and Futuna bus",new Date("2018-09-06T00:29:52.394Z"),{_id: 29370,str: "Metal Industrial haptic",num: 31959,date: new Date("2018-09-06T00:15:11.566Z"),array: [],obj: {_id: 29371,str: "application Mills Bedfordshire",num: 4199,date: new Date("2018-09-06T11:03:55.613Z"),array: [74138],obj: {}}},new Date("2018-09-05T20:42:15.841Z"),new Date("2018-09-05T23:28:53.438Z"),{_id: 29372,num: 23060,array: []},7551,[{_id: 29373,str: "Table encoding",num: 90525},64142]]});
    },

    function(coll) {
        return coll.insert({_id: 29374,str: "bandwidth Virginia Incredible",num: 12226,date: new Date("2018-09-06T12:14:44.286Z"),array: [],obj: {_id: 29375,str: "Object-based wireless",num: 5434,array: ["Idaho Engineer","Pakistan Rupee neural",{_id: 29376,str: "deposit B2C Savings Account",date: new Date("2018-09-06T09:34:10.875Z"),array: [64626],obj: {}},5211,new Date("2018-09-06T03:38:38.183Z"),"e-commerce Incredible Concrete Chicken Automotive",new Date("2018-09-06T17:58:07.744Z"),[],5501,[],new Date("2018-09-06T16:51:57.488Z"),90461,"Heard Island and McDonald Islands Gloves local",{_id: 29377,num: 21579,obj: {_id: 29378,num: 5727,date: new Date("2018-09-06T17:04:58.970Z"),obj: {_id: 29379,str: "Accounts",num: 50338,array: [83152,new Date("2018-09-06T14:07:47.517Z"),73634]}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 29380,str: "virtual Sleek invoice",num: 73418,date: new Date("2018-09-06T02:33:52.615Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 29381,str: "Drive e-commerce demand-driven",num: 92060,date: new Date("2018-09-06T01:36:05.479Z"),array: ["function Keyboard",[],96445,new Date("2018-09-06T03:07:03.762Z"),"Toys generate Realigned",2962,new Date("2018-09-05T23:14:46.559Z"),[],36330,new Date("2018-09-06T08:16:07.148Z"),{_id: 29382,str: "Bermudian Dollar (customarily known as Bermuda Dollar) Cotton Investment Account",num: 74338,date: new Date("2018-09-06T14:32:02.237Z"),array: [{_id: 29383,str: "Unions",date: new Date("2018-09-06T01:32:12.438Z"),array: [[],18475],obj: {_id: 29384,str: "Steel zero tolerance Bacon",num: 14143,date: new Date("2018-09-06T00:53:33.189Z"),obj: {}}}],obj: {_id: 29385,num: 80059,date: new Date("2018-09-06T05:05:25.972Z"),array: []}}],obj: {_id: 29386,str: "Steel human-resource Burkina Faso",num: 96194,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 29387,num: 38992,date: new Date("2018-09-06T09:10:52.519Z"),array: [37738,"Compatible",98682,"Auto Loan Account gold PCI",new Date("2018-09-06T02:41:54.720Z"),[],new Date("2018-09-06T03:31:55.678Z"),42831,"multimedia","Salad"],obj: {_id: 29388,str: "Hong Kong Dollar local",num: 24605,date: new Date("2018-09-05T23:46:07.360Z"),obj: {_id: 29389,str: "Savings Account Usability optimal",date: new Date("2018-09-06T14:35:04.867Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 29390,str: "interfaces Mouse",num: 78988,date: new Date("2018-09-06T02:04:03.522Z"),array: [{_id: 29391,str: "EXE",num: 41052,date: new Date("2018-09-06T01:54:51.986Z"),array: [],obj: {_id: 29392,date: new Date("2018-09-06T00:30:09.228Z"),array: [],obj: {}}},"Inverse Implementation methodical",79107,84634,[],[new Date("2018-09-06T08:48:58.110Z")],"real-time Shirt",new Date("2018-09-06T06:55:45.844Z"),new Date("2018-09-06T11:52:51.919Z"),17108,"Senior Refined Steel Hat",new Date("2018-09-06T06:59:37.642Z")],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "num": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.str": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayElemAt: [[74707,'$obj.obj.num',60078],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $range: [10,12] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Oregon",chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Checking Account Buckinghamshire Operations",v: true}]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',11,16] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["De-engineered Berkshire",14,0] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.str'],as: 'reuben',cond: { $gt: [{ $arrayToObject: [[{k: "withdrawal",v: '$obj.obj.num'}]] },{ $arrayElemAt: [[24907],'$obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Generic Metal Car e-enable Cocos (Keeling) Islands",v: 92048}]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToString: {date: '$obj.obj.date',timezone: "Europe/Oslo"} } }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromString: {dateString: "2018-09-06T08:50:31.023Z",onError: { $arrayToObject: [[{k: "Unbranded Wooden Chips Automotive",v: '$obj.num'}]] },onNull: "1080p"} } }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "wireless Rubber optical",v: "application PNG"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $zip: {inputs: [['$obj.num','$obj.obj.num'],['$obj.obj.str'],[],[]],defaults: [{},false,38717]} } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $toLower: "Car Ball Baby" }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Wooden Multi-layered withdrawal" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',35289,'$obj.num'],{ $multiply: ['$num',12917] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: { date: '$obj.obj.date' } }],17448] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],24704] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num'],['$str',"Colorado Applications Investment Account"],[{ $toString: { $arrayElemAt: [[],98821] } },"Tugrik"],[false,'$num']]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: "Gorgeous National Savings Account" },'$obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $concat: ['$str',{ $concat: ["secured line Vermont Tasty Cotton Pizza"] }] },chars: "Fantastic"} }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeekYear: { $toDate: { $arrayElemAt: [[{ $rtrim: { input: { $toUpper: '$str' } } },{ $trim: {input: "Checking Account Computer",chars: "seize upward-trending"} }],'$obj.obj.num'] } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["connecting",'$obj.obj.str',{ $toString: { $arrayElemAt: [[],'$obj.num'] } }],29463] }, _id: 0}}],

        [{$project: {a: { $toString: { $dayOfWeek: { $dayOfMonth: { $second: { $month: { $dateFromParts: {year: { $sqrt: 31147 },day: { $ceil: 8059 },millisecond: { $exp: '$obj.obj.obj.num' }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: { input: '$str' } },"bluetooth Avon Sleek"],[],[],[{ $substr: [{ $toUpper: '$obj.obj.str' },16,4] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],46400] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $toLower: '$str' } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["payment primary magenta",14,7] },'$obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $ltrim: {input: { $concat: ["online SDD"] },chars: '$obj.obj.str'} },9,11] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "auxiliary syndicate",v: false}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [73543],in: { $log10: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toLower: '$str' } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num'],as: 'german',in: { $log10: '$$german' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[34893],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "programming installation",v: { $second: { $isoDayOfWeek: { $week: { $month: { $week: { $isoWeek: { $dateToParts: {date: { $isoWeek: { $minute: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [[],'$obj.obj.num'] },{ $dateFromString: {dateString: "2018-09-06T10:57:15.219Z",timezone: "Africa/Lusaka"} }] },day: { $log: ['$obj.obj.obj.num',56662] },hour: { $cmp: [{ $concatArrays: [[],['$obj.obj.obj.num'],["Administrator"],[{ $concat: [{ $rtrim: {input: '$obj.obj.obj.str',chars: '$str'} }] },"transmitter",{ $concat: [] }],['$obj.obj.str',"white Generic auxiliary"],['$num',69208],[]] },{ $toUpper: "synergistic protocol" }] },second: { $ln: 21823 }} } } },timezone: "Africa/Blantyre"} } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToString: { date: new Date("2018-09-06T14:29:43.038Z") } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Sudanese Pound static",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],19710] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toUpper: "Ergonomic Plastic Chicken" },20,12] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.obj.obj.str']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: "programming" } },"Handcrafted Fresh Chicken"],16272] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home",v: true}]] }, _id: 0}}],

        [{$project: {a: { $week: { $toDate: { $toString: { $arrayToObject: [[{k: "Gateway Synergized payment",v: "interfaces Cambridgeshire Moldovan Leu"}]] } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $year: { $dayOfYear: { $hour: new Date("2018-09-06T13:13:13.216Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "Kansas" }],21430] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',1,2] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',6,18] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $concat: [] },{ $rtrim: { input: "Paradigm adapter ability" } }]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str',{ $substrCP: [{ $ltrim: {input: "interface Industrial",chars: { $toString: { $isoDayOfWeek: { $second: { $dateToParts: {date: { $week: { $isoDayOfWeek: { $minute: { $dateFromString: {dateString: "2018-09-06T13:26:58.370Z",format: "%U-%G-%Z-%%-%S-%H-%L-%j-%S",timezone: "Europe/Helsinki",onError: { $arrayToObject: [[['$obj.obj.str'],[53157,{ $add: [] }],['$num']]] }} } } } },timezone: "Asia/Almaty"} } } } }} },5,0] },"Car magenta"],as: 'herminia',cond: { $lt: [{ $toUpper: '$$herminia' },{ $hour: { $isoWeekYear: { $dayOfWeek: { $toDate: { $filter: {input: [93193,'$$herminia'],as: 'trevion',cond: { $and: [] }} } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T07:57:17.910Z",onError: { $toUpper: "Generic Metal Bike" },onNull: { $toLower: "index Steel feed" }} } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Small"],[68121,29407]],defaults: [/B(?:uckinghamshire|orders)|Table/]} }, _id: 0}}],

        [{$project: {a: { $week: { $year: { $dateFromString: {dateString: "2018-09-06T02:24:48.457Z",timezone: "America/Rainy_River"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["primary Future parsing",'$obj.obj.obj.str'],['$obj.obj.num',{ $indexOfArray: [{ $range: [19,11] },{ $year: { $isoDayOfWeek: { $dayOfWeek: { $month: { $minute: { $dayOfWeek: { $dateToParts: {date: { $millesecond: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [[{ $toLower: '$obj.obj.str' },"Books systems"],38966] },{ $toDate: { $zip: {inputs: [[],[]],defaults: [51222,true]} } }] },day: { $log: [93684,'$obj.obj.obj.num'] },hour: { $add: [46190,44714,'$obj.obj.obj.num'] },second: { $ceil: 50911 },millisecond: { $ln: { $exp: 60493 } },timezone: "Pacific/Norfolk"} } },iso8601: false} } } } } } } },20,16] }],[]]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T23:05:20.316Z",timezone: "America/Campo_Grande",onError: { $toUpper: "Supervisor Jewelery" }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num',20470],as: 'maryam',in: { $divide: ['$obj.obj.num',26517] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'abbigail',in: { $subtract: [84103,'$$abbigail'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $ltrim: {input: { $substrCP: ["leading edge Synergized",5,8] },chars: "Tasty"} },'$str','$obj.obj.str'],[70283,'$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoDayOfWeek: { $millesecond: { $second: { $minute: { $week: { $dateFromString: {dateString: "2018-09-06T09:43:13.210Z",format: "%G-%V-%d-%M-%m",onNull: "Streets"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["circuit Sports Auto Loan Account","technologies convergence",'$obj.obj.str'],[{ $substrCP: ['$obj.obj.str',11,7] }],[],[{ $trim: {input: '$obj.obj.obj.str',chars: "payment invoice Metal"} },{ $ltrim: {input: '$obj.obj.obj.str',chars: '$obj.str'} },'$obj.obj.obj.str',{ $toUpper: "metrics compressing" },"Mauritius Rupee Handcrafted eyeballs"],[],[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Idaho Developer",{ $trim: {input: '$obj.str',chars: { $concat: ["digital District",'$obj.obj.obj.str',{ $toUpper: { $toLower: '$obj.obj.str' } }] }} }],["1080p Kansas"],['$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: '$obj.obj.str' }],13301] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],53144] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $size: [["French Southern Territories"]] }],69999] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[32635,"Markets"],[],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $size: [[{ $trim: {input: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Africa/Conakry",onNull: '$obj.str'} },chars: "Expanded Refined Health"} },'$obj.obj.obj.str']] },month: { $exp: 83596 },day: { $indexOfArray: [{ $concatArrays: [[],['$num',52875],[],[]] },{ $dateToString: {date: new Date("2018-09-06T03:53:59.225Z"),timezone: "America/La_Paz"} },12] },hour: { $divide: ['$obj.num',61711] },millisecond: { $floor: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $range: [14,16] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],["Auto Loan Account"],[{ $indexOfArray: [{ $reverseArray: [[]] },{ $arrayToObject: [[[78311],["Streets Kentucky",{ $substrBytes: [{ $concat: ['$obj.obj.str','$obj.obj.str'] },4,11] },{ $toUpper: "hardware Clothing SMS" }],[{ $substrBytes: ['$obj.obj.str',9,5] }]]] },2] }]] } }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfWeek: { $dayOfMonth: { $dateToParts: {date: { $hour: { $dayOfMonth: { $isoWeek: { $hour: { $minute: { $isoWeekYear: { $minute: { $dateFromParts: {year: { $cmp: [{ $isoDayOfWeek: { $toDate: { $filter: {input: ['$obj.num',90103],cond: { $or: [] }} } } },{ $arrayElemAt: [[],42492] }] },month: { $abs: 16599 },day: { $multiply: [{ $subtract: ['$obj.obj.num','$obj.obj.obj.num'] }] },timezone: "Africa/Bamako"} } } } } } } } },timezone: "Pacific/Niue"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],4457] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: { $substrBytes: ["Rue concept generating",11,6] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str'],as: 'maxwell',in: { $mod: ['$obj.obj.obj.num',72388] }} }, _id: 0}}],

        [{$project: {a: { $concat: [{ $ltrim: { input: "Investment Account Spring" } }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $add: [72180] }],[],["Regional Coordinator extensible"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["frictionless Consultant Sausages","Granite Kip","mobile metrics"],[],[{ $toString: { $arrayElemAt: [['$num','$obj.obj.num'],'$obj.obj.num'] } },'$str'],[50536],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Home Loan Account reciprocal"],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [10,13] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToString: {date: new Date("2018-09-06T14:08:39.090Z"),format: "%d-%m-%j-%Y-%d-%L-%Y-%Z-%m"} },timezone: "Asia/Hebron"} }, _id: 0}}],

        [{$project: {a: { $toString: { $isoDayOfWeek: { $dateToParts: { date: { $isoWeek: { $second: { $isoWeek: { $week: { $minute: { $dayOfMonth: { $toDate: { $millesecond: { $dateToString: {date: '$obj.date',format: "%Z-%%-%U-%G-%z-%u-%m-%j-%%",timezone: "Asia/Krasnoyarsk"} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "extend PCI",v: new Date("2018-09-06T09:04:04.169Z")}]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $minute: { $isoDayOfWeek: { $minute: { $dateToParts: {date: { $week: { $dayOfWeek: { $hour: { $second: { $dayOfYear: { $millesecond: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T19:19:14.613Z",timezone: "America/Curacao",onNull: { $arrayToObject: [[["syndicate Armenia Configuration"],['$obj.num']]] }} } } } } } } } },iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $concat: ["sensor"] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $concat: [{ $toLower: "indexing" },'$obj.obj.str'] },5,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Senior reinvent Kwanza","hack New Mexico Incredible Rubber Chicken"],[],['$obj.str'],[{ $toLower: { $ltrim: { input: "Agent driver Buckinghamshire" } } }]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num'],as: 'bailee',cond: { $gte: [{ $arrayElemAt: [['$$bailee','$date',"bypass"],18397] },{ $dayOfYear: { $dayOfWeek: { $month: { $week: { $dateToString: {date: { $month: { $dateFromString: {dateString: "2018-09-06T05:09:07.452Z",format: "%G-%H-%M-%V-%%-%m-%H-%d-%j",onError: { $arrayToObject: [[[],[{ $substr: [{ $substrCP: [{ $substrBytes: [{ $concat: ['$str'] },9,2] },15,7] },19,16] },"scalable"],[],[86798,'$num',{ $ceil: 6152 }]]] }} } },timezone: "America/St_Thomas"} } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],54409] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[59323],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],34651] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Generic Wooden Cheese payment",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfWeek: { $dayOfMonth: { $isoWeek: new Date("2018-09-05T22:56:04.187Z") } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[{k: "COM payment transition",v: '$obj.obj.obj.num'},{k: "British Indian Ocean Territory (Chagos Archipelago) adapter Salad",v: false},{k: "Web",v: "bypass infrastructure"}]] } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: '$obj.obj.str',chars: { $trim: {input: '$obj.str',chars: "Credit Card Account cross-platform ADP"} }} },{ $ltrim: { input: "Chips Consultant Pass" } },"West Virginia bandwidth incentivize"],39628] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: { $substr: ['$obj.obj.obj.str',11,3] } }],87146] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: { date: { $dateToString: {date: '$obj.date',timezone: "MST7MDT",onNull: '$obj.obj.obj.str'} } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $toDate: { $arrayElemAt: [[],36758] } } }, _id: 0}}],

        [{$project: {a: { $toString: { $isoDayOfWeek: { $toDate: { $hour: { $isoWeekYear: { $millesecond: { $second: { $isoWeekYear: { $dateToString: {date: '$obj.obj.obj.date',onNull: { $filter: {input: [],as: 'griffin',cond: { $gte: [{ $arrayToObject: [[{k: "Shirt Barbados Dollar",v: { $add: [49537] }},{k: "Course solid state",v: 75408}]] },{ $toUpper: { $toUpper: '$$griffin' } }] }} }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: { input: "Clothing Investment Account" } },'$obj.str'],['$obj.str',"microchip Intelligent Wooden Cheese"],["Cambridgeshire",'$obj.obj.str'],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[36453]] }, _id: 0}}],

        [{$project: {a: { $range: [18,4,12] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "middleware Orchestrator Facilitator",v: "Flat leading-edge"}]] }, _id: 0}}],

        [{$project: {a: { $concat: ["Unbranded Cambridgeshire Frozen"] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Frozen Rustic Cotton Cheese San Marino" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[{k: "Analyst",v: false}]] } }],54177] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toUpper: { $substrCP: ['$obj.str',17,19] } },16,19] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: '$str' } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$obj.date' } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[93472,'$obj.obj.num']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%w-%L-%V-%L-%L-%Z-%Y-%m-%Y-%U",timezone: "America/Maceio",onNull: "Analyst"} }, _id: 0}}],

        [{$project: {a: { $range: [5,9] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Gloves Pataca Investor",v: { $substrBytes: ['$obj.str',17,3] }},{k: "Monitored Home Global",v: '$obj.obj.obj.num'},{k: "alarm",v: false}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "grey Digitized Human" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "silver backing up",chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: "compressing" } },'$obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: { $millesecond: { $dateToString: {date: '$obj.date',format: "%w-%L-%V-%S-%Z",onNull: { $second: { $isoWeekYear: { $dayOfMonth: new Date("2018-09-06T04:04:28.495Z") } } }} } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $toDate: { $toString: { $range: [11,19,19] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',{ $substrBytes: [{ $substr: ["Savings Account Pitcairn Islands evolve",5,15] },8,13] }],[]]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',6,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Bedfordshire",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $rtrim: { input: "Won Avon" } },17,15] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $toDate: { $arrayToObject: [[[{ $divide: [23957,49141] },81573,88331]]] } },timezone: "Pacific/Majuro"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',"Concrete compelling Consultant",'$obj.str'],["virtual next generation Handmade Metal Bacon"],['$num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[38385],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $reverseArray: [[]] } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeek: { $isoDayOfWeek: { $dateToParts: { date: { $isoWeekYear: { $week: { $year: { $second: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T10:09:21.513Z",format: "%Z-%%-%G-%m",timezone: "America/North_Dakota/New_Salem",onNull: { $arrayToObject: [[{k: "Administrator",v: "Generic Fresh Hat"},{k: "motivating mission-critical auxiliary",v: '$obj.date'},{k: "online",v: '$obj.obj.obj.str'}]] }} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',{ $toLower: "deposit Executive Usability" }],[60628,'$obj.obj.num'],[{ $subtract: [{ $cmp: [{ $reverseArray: [["Ohio paradigms conglomeration",'$obj.str']] },{ $arrayToObject: [[{k: "Incredible Hat",v: true},{k: "quantify mindshare",v: '$obj.obj.obj.date'}]] }] },'$obj.obj.num'] }],[95605]]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $toString: { $year: { $dateToParts: {date: { $second: { $isoDayOfWeek: { $year: { $dateToParts: { date: { $hour: { $dayOfYear: { $week: { $dateFromParts: {isoWeekYear: { $ln: '$obj.obj.obj.num' },second: { $abs: 27775 },timezone: "Canada/Eastern"} } } } } } } } } },timezone: "Indian/Antananarivo"} } } }] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromParts: {year: '$obj.obj.num',day: { $multiply: [74800,{ $log: [33480,'$num'] },'$num',89633] },hour: { $ceil: '$obj.obj.obj.num' },second: { $trunc: 98135 },millisecond: { $cmp: [{ $arrayToObject: [[{k: "Music XSS",v: true}]] },{ $objectToArray: '$obj.obj.obj' }] }} } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'delbert',in: { $sqrt: '$obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: new Date("2018-09-06T18:06:03.208Z"),format: "%m-%G-%S-%z-%L-%L-%Y-%V",timezone: "America/Rosario",onNull: { $trim: { input: "Coordinator COM Bedfordshire" } }} },{ $rtrim: {input: '$obj.obj.obj.str',chars: { $rtrim: { input: "Research generating" } }} }],['$str'],[],['$obj.num',91460],[44109]]] }, _id: 0}}],

        [{$project: {a: { $toString: { $reverseArray: [['$obj.str',"silver"]] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $minute: { $hour: { $dayOfMonth: { $year: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $log10: '$obj.obj.num' },isoWeek: { $cmp: [{ $arrayToObject: [[{k: "Orchestrator SMTP out-of-the-box",v: '$obj.obj.obj.date'},{k: "Group",v: new Date("2018-09-06T15:36:42.318Z")},{k: "Grocery fault-tolerant efficient",v: true}]] },{ $arrayElemAt: [["override Reverse-engineered"],9941] }] },hour: { $divide: ['$obj.num','$obj.obj.num'] },minute: { $indexOfArray: [{ $reverseArray: [['$str']] },{ $range: [6,13,19] },8,15] },timezone: "Pacific/Samoa"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],44624] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[38473,'$obj.obj.obj.num','$obj.obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $filter: {input: ['$obj.obj.str'],cond: { $eq: [{ $year: { $dateToParts: {date: { $millesecond: { $second: { $dayOfWeek: { $hour: { $isoWeekYear: { $second: { $minute: { $dayOfMonth: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T01:25:20.738Z",timezone: "Pacific/Marquesas",onError: { $arrayElemAt: [[],5238] }} },iso8601: false} } } } } } } } } },timezone: "Pacific/Marquesas",iso8601: false} } },{ $range: [7,9] }] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: "eyeballs connect Brand" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $substrBytes: ['$obj.str',12,18] },"relationships overriding","driver"],[{ $dateToString: { date: { $second: { $dayOfMonth: { $millesecond: { $dateFromString: {dateString: "2018-09-06T05:49:43.111Z",onError: { $arrayElemAt: [['$num'],37721] }} } } } } } }],[],[],[98902,'$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $hour: { $millesecond: { $second: { $year: { $minute: { $millesecond: { $month: { $dayOfYear: { $dateToParts: {date: { $toDate: { $toString: { $toLower: "Cotton Intelligent Soft Chair front-end" } } },timezone: "US/Pacific"} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $substrCP: [{ $concat: [] },0,1] }],[51608],['$obj.obj.obj.str',"CFA Franc BEAC"]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $exp: 52972 },hour: { $sqrt: 21945 },timezone: "Africa/Kinshasa"} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $second: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T09:17:33.677Z"),timezone: "Antarctica/Mawson"} } } },timezone: "Europe/Belgrade"} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $millesecond: { $hour: { $dateToString: { date: { $dayOfWeek: { $dayOfMonth: { $isoWeekYear: { $second: { $toDate: { $arrayElemAt: [[],9393] } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $rtrim: {input: "Guam",chars: '$obj.obj.str'} },{ $substr: ['$obj.str',12,19] }],["Pants Vision-oriented Legacy"],[],[{ $log10: 35275 }]],defaults: ["quantifying Refined Granite Pants",new Date("2018-09-06T03:13:19.250Z")]} }, _id: 0}}],

        [{$project: {a: { $range: [9,16,20] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ["Hryvnia Monaco",15,13] },"Plastic program"],[51865,'$obj.obj.num','$obj.obj.obj.num'],[{ $concat: ['$obj.obj.str'] },{ $ltrim: { input: '$obj.obj.obj.str' } },'$str',{ $trim: {input: '$obj.str',chars: { $trim: {input: "Kroon",chars: '$obj.obj.str'} }} }],[],['$obj.obj.obj.num',34065],[{ $abs: 77657 }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Movies",{ $substrCP: ['$obj.obj.obj.str',6,2] },"expedite"],66150] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Etc/GMT-4",onNull: { $range: [1,14,19] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $multiply: ['$obj.obj.obj.num'] },day: { $size: [[]] },minute: { $ln: '$obj.obj.num' },millisecond: { $pow: [7934,{ $mod: ['$obj.obj.num',96659] }] }} }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeekYear: { $minute: { $dayOfMonth: { $week: { $hour: { $millesecond: { $dayOfYear: { $isoWeek: { $dayOfMonth: { $isoDayOfWeek: new Date("2018-09-06T13:33:26.347Z") } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromParts: {year: { $size: [['$str']] },month: { $multiply: ['$num'] },day: { $multiply: [] },hour: { $pow: [92993,44733] },millisecond: { $trunc: 69746 }} } }, _id: 0}}],

        [{$project: {a: { $range: [7,2,12] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Chicken navigate ability"],cond: { $lte: [{ $toString: { $arrayElemAt: [[],'$$this'] } },{ $month: { $dateToString: {date: '$$this',timezone: "Europe/Vilnius"} } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',8,1] }, _id: 0}}],

        [{$project: {a: { $range: [13,5] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "copying architectures integrate",chars: { $toUpper: "Advanced Communications Savings Account" }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["systemic"]] }, _id: 0}}],

        [{$project: {a: { $toString: { $substr: [{ $trim: {input: "Handmade Granite Table RAM CFP Franc",chars: "Shoes COM Car"} },11,1] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.str','$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfMonth: { $dateToString: {date: { $isoWeek: { $toDate: { $arrayToObject: [[{k: "repurpose",v: new Date("2018-09-06T02:01:30.012Z")}]] } } },format: "%m-%w-%Z-%S",onNull: { $range: [7,1] }} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num','$num'],66331] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $substr: ["Total overriding",0,0] },'$obj.obj.str'],[{ $toString: { $reverseArray: [[]] } },"Cuba North Carolina Engineer"],['$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[52773,517],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.str',chars: "fuchsia Movies"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[99862,'$obj.num','$num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $dateToString: {date: new Date("2018-09-06T04:10:04.725Z"),format: "%Z-%L-%%-%M-%H",onNull: '$obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T22:13:09.647Z"),onNull: { $year: { $second: { $minute: { $dayOfMonth: { $isoWeek: { $dateFromString: {dateString: "2018-09-05T22:07:27.387Z",timezone: "Asia/Hebron"} } } } } } }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',3,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',54198,64709],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $millesecond: { $year: { $dateToString: {date: '$obj.obj.obj.date',format: "%Y-%Y-%H-%w-%w-%G-%Z-%w-%U-%Y",onNull: { $toLower: "online killer" }} } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $millesecond: { $dateToString: {date: { $dateFromParts: {year: '$num',month: { $ceil: '$obj.obj.num' },second: { $log10: 4002 }} },format: "%Z-%Z-%z-%d",timezone: "America/Detroit"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $second: { $dayOfYear: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $floor: '$obj.obj.obj.num' },minute: { $add: [36952] },second: { $indexOfArray: [{ $map: {input: [],as: 'austyn',in: { $add: [] }} },{ $ltrim: { input: { $toLower: { $substrBytes: ["primary tan haptic",20,8] } } } },5] }} } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfYear: { $dateFromParts: {isoWeekYear: { $ceil: 4546 },isoWeek: { $trunc: '$num' },hour: { $mod: ['$obj.obj.obj.num',{ $size: [[]] }] },minute: { $log10: { $subtract: [53261,'$obj.num'] } },second: { $multiply: [45964] },millisecond: { $divide: ['$num','$num'] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.obj.str'],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],22368] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Assurance",v: false},{k: "CSS interfaces",v: '$obj.obj.date'},{k: "Berkshire",v: true}]] }, _id: 0}}],

        [{$project: {a: { $range: [19,19] }, _id: 0}}],

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
