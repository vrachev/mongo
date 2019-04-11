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
        return coll.insert({_id: 29990,str: "6th generation Highway payment",num: 88579,date: new Date("2018-09-06T14:58:20.253Z"),array: [86372,new Date("2018-09-06T02:11:24.069Z"),new Date("2018-09-06T18:15:18.571Z"),71494,42117,[],{_id: 29991,str: "Personal Loan Account virtual",num: 84500,date: new Date("2018-09-06T16:00:46.595Z"),array: ["XML Automotive array","Savings Account Oregon Associate","Berkshire best-of-breed withdrawal",83326],obj: {_id: 29992,str: "interface Supervisor",num: 83610,date: new Date("2018-09-06T19:30:04.941Z"),obj: {}}},new Date("2018-09-06T17:11:07.536Z"),"International",[]],obj: {_id: 29993,num: 72230,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 29994,str: "Pants",num: 15176,date: new Date("2018-09-06T10:43:57.275Z"),array: [66133,new Date("2018-09-06T13:41:22.557Z"),"web-enabled leverage expedite","Supervisor fuchsia firewall",6528,["Kentucky overriding"],53662,new Date("2018-09-06T01:30:22.089Z"),new Date("2018-09-06T06:57:34.699Z"),32109,{_id: 29995,str: "United States Minor Outlying Islands Direct",num: 75841,date: new Date("2018-09-06T04:00:07.097Z"),array: [],obj: {}},[new Date("2018-09-06T04:44:54.290Z"),{_id: 29996,str: "array Wooden Clothing",date: new Date("2018-09-06T18:18:25.076Z"),array: [],obj: {_id: 29997,str: "Books",obj: {_id: 29998,date: new Date("2018-09-06T06:02:54.855Z")}}},new Date("2018-09-05T20:05:39.296Z"),{_id: 29999,str: "protocol Auto Loan Account blue",num: 96328,array: ["neural"],obj: {_id: 30000,str: "red",num: 48395,date: new Date("2018-09-06T16:47:55.293Z")}},32459]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30001,str: "real-time Frozen",num: 20057,date: new Date("2018-09-06T04:50:44.928Z"),array: [],obj: {_id: 30002,str: "Circle Intelligent",date: new Date("2018-09-06T10:49:30.347Z"),array: [new Date("2018-09-06T16:41:05.310Z"),96196,new Date("2018-09-05T23:45:37.122Z"),"Bedfordshire",new Date("2018-09-05T21:46:18.694Z"),[],78358,{_id: 30003,str: "Steel Utah Auto Loan Account",num: 21707,array: [],obj: {_id: 30004,date: new Date("2018-09-05T22:55:16.546Z"),array: ["Practical Granite Pants program Technician",{_id: 30005,str: "synthesizing",num: 90612,date: new Date("2018-09-06T04:18:33.357Z"),array: [new Date("2018-09-06T13:49:22.415Z")],obj: {_id: 30006,num: 17316,obj: {_id: 30007,num: 57993,date: new Date("2018-09-06T12:55:03.999Z"),obj: {}}}},{_id: 30008,str: "generating transmitter Technician",num: 70975,date: new Date("2018-09-05T20:15:11.058Z"),obj: {_id: 30009,date: new Date("2018-09-05T23:29:34.861Z"),array: [{_id: 30010,num: 57894,date: new Date("2018-09-06T08:39:45.757Z")}],obj: {}}}]}},1456,new Date("2018-09-05T20:18:31.633Z"),"matrix payment Home Loan Account",82238]}});
    },

    function(coll) {
        return coll.insert({_id: 30011,str: "Unbranded Metal",num: 54033,date: new Date("2018-09-06T07:00:12.616Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30012,str: "monitor JBOD",num: 4828,date: new Date("2018-09-05T22:23:29.485Z"),array: ["Intranet",56974,new Date("2018-09-06T04:39:33.347Z"),75119,"Computers",new Date("2018-09-06T15:37:16.381Z"),new Date("2018-09-05T22:22:31.387Z"),[],["Via Checking Account cohesive",82268,{_id: 30013,num: 68084,date: new Date("2018-09-06T13:13:00.783Z"),array: [],obj: {_id: 30014,str: "channels",date: new Date("2018-09-06T01:35:19.767Z"),array: [{_id: 30015,str: "invoice",array: ["Iowa Senior synergies",new Date("2018-09-06T04:15:29.450Z")],obj: {}}],obj: {_id: 30016,str: "New Israeli Sheqel Avon",num: 31346,date: new Date("2018-09-05T22:56:55.904Z"),array: []}}},"Director"],88880],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30017,str: "Mobility Cotton",num: 67796,date: new Date("2018-09-06T16:57:16.484Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30018,str: "override",num: 60971,date: new Date("2018-09-05T22:12:43.213Z"),array: [],obj: {_id: 30019,str: "content-based Steel Gorgeous Fresh Shoes",num: 62964,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30020,str: "payment Small Steel Tuna Ports",num: 15955,date: new Date("2018-09-06T04:54:06.355Z"),array: ["Cambridgeshire Corporate Gorgeous",new Date("2018-09-06T05:13:30.373Z"),79416,new Date("2018-09-06T17:16:51.574Z"),"primary Handmade","Sleek Frozen Mouse",{_id: 30021,str: "platforms",num: 44745,date: new Date("2018-09-06T13:11:49.220Z"),array: [[34018,"Soft Baht neural"],{_id: 30022,str: "bus Bedfordshire",date: new Date("2018-09-06T04:18:22.601Z"),array: [],obj: {_id: 30023,str: "24/365 Steel",num: 85365,date: new Date("2018-09-06T12:52:01.224Z"),array: [],obj: {}}},[]],obj: {}},new Date("2018-09-06T09:22:07.365Z"),17337,[],81036]});
    },

    function(coll) {
        return coll.insert({_id: 30024,str: "optical",num: 37833,date: new Date("2018-09-06T09:14:14.032Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30025,str: "Bedfordshire e-tailers Fresh",num: 43923,date: new Date("2018-09-06T17:30:19.472Z"),array: [new Date("2018-09-06T07:41:42.082Z"),40334,{_id: 30026,str: "panel Incredible Fresh Gloves Right-sized",num: 98522,date: new Date("2018-09-05T20:06:56.572Z"),array: ["matrix Frozen"],obj: {}},"Cheese Engineer",3051,68221,new Date("2018-09-06T15:05:43.117Z"),[],{_id: 30027,num: 93207,array: [],obj: {_id: 30028,str: "deposit Unbranded Granite Bike",date: new Date("2018-09-06T17:41:27.307Z"),array: [],obj: {_id: 30029,str: "Enhanced",date: new Date("2018-09-05T23:09:59.561Z"),obj: {}}}},["white"],new Date("2018-09-06T05:50:22.911Z"),55785,new Date("2018-09-06T04:10:04.719Z"),"copying attitude Road","budgetary management system-worthy"]});
    },

    function(coll) {
        return coll.insert({_id: 30030,str: "seize Rustic Steel Bike",num: 19998,date: new Date("2018-09-05T21:02:27.621Z"),array: [78091,new Date("2018-09-06T18:10:54.444Z"),16098,{_id: 30031,str: "e-markets Data",num: 15912,date: new Date("2018-09-06T00:52:50.137Z"),array: [],obj: {_id: 30032,str: "instruction set Gloves open-source",date: new Date("2018-09-06T14:45:34.157Z"),array: [],obj: {}}},"e-business",new Date("2018-09-06T08:05:34.121Z"),[new Date("2018-09-06T19:21:02.671Z"),"Baby",41449,new Date("2018-09-06T13:35:31.240Z"),85486,new Date("2018-09-06T12:46:04.792Z"),[38848,"redundant Computers"],{_id: 30033,num: 33693,date: new Date("2018-09-06T18:48:59.511Z")},"Practical Metal Car Connecticut"]],obj: {_id: 30034,str: "deposit",num: 22642,array: ["solid state Universal"],obj: {_id: 30035,str: "interfaces",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30036,str: "Baby",num: 65428,date: new Date("2018-09-05T23:18:51.980Z"),array: [new Date("2018-09-06T16:50:02.147Z"),[],38343,55857,new Date("2018-09-06T15:05:01.389Z"),40551,new Date("2018-09-06T08:18:54.872Z"),"proactive driver"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30037,str: "Fort Research multi-byte",num: 39341,date: new Date("2018-09-06T06:42:54.864Z"),array: [new Date("2018-09-06T10:25:10.064Z"),[67014,new Date("2018-09-06T03:24:47.163Z"),"Handcrafted","Games override",[]],"engineer optical",new Date("2018-09-06T02:35:24.892Z"),67130,"Square RAM",{_id: 30038,str: "Grocery",num: 59181,date: new Date("2018-09-06T12:56:33.667Z"),array: [],obj: {}},new Date("2018-09-06T16:33:03.026Z"),"dot-com Cotton parsing"],obj: {_id: 30039,str: "Cameroon Chief",num: 33352,date: new Date("2018-09-06T03:33:12.777Z")}});
    },

    function(coll) {
        return coll.insert({_id: 30040,num: 22206,date: new Date("2018-09-06T06:34:31.629Z"),array: [],obj: {_id: 30041,str: "programming gold",num: 86011,date: new Date("2018-09-06T02:23:11.520Z"),array: [14670,{_id: 30042,str: "Keyboard user-centric Awesome Soft Chair",num: 77151,date: new Date("2018-09-06T02:26:33.813Z"),array: [33639,"matrix",new Date("2018-09-06T12:38:12.543Z"),"high-level"],obj: {_id: 30043,str: "Fresh Rubber Ergonomic",obj: {}}},new Date("2018-09-05T22:35:31.923Z"),38889,[],"FTP",new Date("2018-09-06T05:18:09.458Z"),"responsive",{_id: 30044,str: "Nigeria Credit Card Account"},89086],obj: {_id: 30045,str: "Granite Rand",num: 35368,date: new Date("2018-09-06T05:15:13.701Z"),array: ["Frozen payment USB",[],new Date("2018-09-06T02:44:29.586Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 30046,str: "compressing",num: 42881,date: new Date("2018-09-06T18:01:54.199Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30047,str: "Quality driver Incredible Metal Cheese",num: 46330,date: new Date("2018-09-06T03:32:48.762Z"),array: [],obj: {_id: 30048,str: "Utah",num: 22574,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30049,str: "multi-byte hacking Human",num: 70941,array: [{_id: 30050,str: "Handmade Frozen Ball",date: new Date("2018-09-06T12:21:33.901Z"),array: [],obj: {_id: 30051,str: "Fresh TCP calculating",num: 87820,date: new Date("2018-09-06T09:48:45.511Z"),array: [2153,"program Unbranded XSS",new Date("2018-09-06T04:50:28.942Z")],obj: {_id: 30052,str: "world-class multimedia synergistic",num: 21011,date: new Date("2018-09-06T08:02:14.836Z"),obj: {}}}},"Investment Account","Bike Chad Antigua and Barbuda",[new Date("2018-09-06T08:55:24.964Z"),88802,4026,{_id: 30053,str: "synthesize gold",date: new Date("2018-09-06T03:37:09.870Z"),array: [84941],obj: {_id: 30054,num: 78738}}],new Date("2018-09-06T10:21:24.563Z"),[[]],new Date("2018-09-06T11:01:00.021Z"),new Date("2018-09-05T20:13:03.416Z"),"Shoes",52932,{_id: 30055,str: "Concrete Falls strategize",date: new Date("2018-09-06T02:55:52.834Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 30056,num: 55957,date: new Date("2018-09-06T06:10:04.731Z"),array: [],obj: {_id: 30057,str: "complexity concept Universal",date: new Date("2018-09-05T23:49:01.717Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30058,str: "port Wooden Mobility",num: 74646,date: new Date("2018-09-06T02:33:45.323Z"),array: [],obj: {_id: 30059,str: "optical",num: 83112,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30060,str: "revolutionize",num: 34773,date: new Date("2018-09-06T11:10:16.903Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30061,str: "Granite",date: new Date("2018-09-05T22:31:21.715Z"),array: [],obj: {_id: 30062,str: "hacking Kids",num: 82503,array: [50315,18468,{_id: 30063,str: "focus group",num: 27720,date: new Date("2018-09-06T08:32:54.813Z"),obj: {_id: 30064,str: "Branding Identity",num: 25275,date: new Date("2018-09-05T21:35:13.598Z"),array: ["Unbranded Frozen Shirt",new Date("2018-09-06T14:59:19.628Z"),new Date("2018-09-06T19:36:43.658Z")],obj: {}}},[],"bandwidth needs-based",4684,{_id: 30065,str: "Marketing",num: 7971,date: new Date("2018-09-06T12:03:03.742Z"),array: ["seamless logistical"],obj: {}},new Date("2018-09-06T06:34:49.020Z"),[],["Islands JSON"],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 30066,str: "interactive International functionalities",num: 49635,date: new Date("2018-09-06T15:11:41.040Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30067,num: 76418,date: new Date("2018-09-06T03:07:21.511Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30068,str: "invoice Flats",array: [75559,new Date("2018-09-06T11:14:15.674Z"),new Date("2018-09-06T18:16:23.575Z"),881,[],"Dalasi","Facilitator synergies",{_id: 30069,str: "Configuration generate",num: 5400,date: new Date("2018-09-06T17:28:34.282Z"),array: [],obj: {_id: 30070,str: "Way streamline",num: 99360,date: new Date("2018-09-06T12:50:02.570Z"),array: [99784,"deliver ADP evolve"],obj: {_id: 30071,str: "info-mediaries Division",num: 88069,date: new Date("2018-09-06T15:28:54.344Z"),array: []}}},new Date("2018-09-05T23:44:47.687Z"),new Date("2018-09-05T21:12:10.986Z"),24195,"models Sleek"],obj: {_id: 30072,num: 25167,date: new Date("2018-09-06T16:38:16.953Z"),array: [{_id: 30073,str: "interactive Clothing",num: 78657,array: [[31614,"withdrawal dedicated"]],obj: {}},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 30074,str: "schemas Electronics transmitting",num: 9924,date: new Date("2018-09-06T05:26:07.175Z"),array: [new Date("2018-09-06T11:55:45.627Z"),new Date("2018-09-06T00:11:11.704Z"),[{_id: 30075,str: "SMTP internet solution Administrator",num: 45870,date: new Date("2018-09-06T12:00:19.822Z")}],1589,"Kroon fault-tolerant",29991,new Date("2018-09-06T12:42:07.797Z"),70403,{_id: 30076,str: "mobile synthesize",num: 15863,obj: {}},"quantifying Cambridgeshire firewall","optical",55076,"frictionless integrate process improvement"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30077,str: "Codes specifically reserved for testing purposes wireless",num: 43740,date: new Date("2018-09-06T11:16:03.175Z"),obj: {_id: 30078,str: "Customer-focused Money Market Account Causeway",num: 90591,date: new Date("2018-09-06T07:11:34.091Z"),array: ["maximized drive Colorado",new Date("2018-09-06T02:07:23.444Z"),"Generic Soft Bacon Money Market Account",54449,[98171,new Date("2018-09-06T18:00:38.448Z")],16084,new Date("2018-09-06T03:40:58.428Z"),{_id: 30079,str: "communities invoice",num: 14710,array: [],obj: {}},"system-worthy Small Plastic Fish Small",33242],obj: {_id: 30080,num: 76108,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30081,str: "Home Loan Account",num: 90544,date: new Date("2018-09-05T21:19:41.619Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30082,str: "metrics deposit",num: 40803,date: new Date("2018-09-05T20:43:15.322Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30083,str: "Palladium superstructure",num: 67869,date: new Date("2018-09-06T18:58:56.660Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30084,str: "Baby Credit Card Account framework",num: 42143,date: new Date("2018-09-05T20:36:48.649Z"),array: [new Date("2018-09-06T10:24:09.025Z"),{_id: 30085,str: "grid-enabled Creative",num: 39280,date: new Date("2018-09-06T11:32:38.034Z"),array: [88697,[4617,new Date("2018-09-06T12:20:44.916Z")],[],96797],obj: {_id: 30086,str: "navigating bifurcated",num: 10104,obj: {_id: 30087,date: new Date("2018-09-06T16:03:31.560Z"),obj: {}}}},63720,"Borders SDD","circuit transparent port",new Date("2018-09-06T02:35:01.627Z"),new Date("2018-09-05T23:20:04.204Z"),"capacitor back up",[],{_id: 30088,str: "robust",num: 5516,date: new Date("2018-09-05T21:12:45.969Z"),array: [],obj: {}},"Frozen Stream",13349]});
    },

    function(coll) {
        return coll.insert({_id: 30089,str: "Fantastic Grocery content-based",num: 26681,date: new Date("2018-09-06T01:54:32.404Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30090,str: "Books Chicken",num: 75929,date: new Date("2018-09-05T21:19:17.000Z"),array: ["Awesome Martinique",80164,"haptic Ball",24770,{_id: 30091,str: "program Versatile invoice",num: 38367,date: new Date("2018-09-06T10:05:54.969Z"),array: [new Date("2018-09-06T18:28:14.565Z"),{_id: 30092,array: [],obj: {}},new Date("2018-09-05T21:21:00.169Z"),[{_id: 30093,str: "channels Home Loan Account Ecuador",date: new Date("2018-09-06T03:41:21.508Z"),array: [],obj: {_id: 30094,num: 2945,obj: {_id: 30095,str: "optical Squares",num: 84403,date: new Date("2018-09-06T13:59:09.458Z")}}},new Date("2018-09-06T01:58:53.412Z"),"View Park"],"Bacon connect",new Date("2018-09-06T13:28:09.694Z"),["Home Loan Account PNG discrete"]],obj: {}},53434,18745,[]],obj: {_id: 30096,num: 84322,date: new Date("2018-09-06T18:19:52.980Z"),array: [[new Date("2018-09-06T04:07:44.829Z"),{_id: 30097,str: "redundant",num: 46208,date: new Date("2018-09-06T08:36:35.739Z"),array: [],obj: {_id: 30098,str: "XML"}},new Date("2018-09-06T08:00:06.177Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 30099,str: "Incredible Analyst",num: 97889,date: new Date("2018-09-06T15:40:53.237Z"),obj: {_id: 30100,str: "Avon",num: 9711,date: new Date("2018-09-06T04:20:40.946Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30101,str: "Frozen Implementation",num: 11975,date: new Date("2018-09-06T17:57:34.615Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30102,str: "Baby",num: 7403,date: new Date("2018-09-06T03:04:35.941Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30103,str: "Metal Executive",num: 3588,date: new Date("2018-09-05T22:40:36.681Z"),obj: {_id: 30104,str: "synthesizing",num: 24057,array: [new Date("2018-09-06T18:22:19.570Z"),79643,51815,{_id: 30105,array: [new Date("2018-09-06T04:34:54.232Z"),"Unbranded Kroon","Personal Loan Account Specialist",56782],obj: {_id: 30106,str: "Data",num: 86369,date: new Date("2018-09-06T00:51:32.744Z"),obj: {_id: 30107,str: "content Turnpike",date: new Date("2018-09-06T03:21:17.806Z"),array: [[],new Date("2018-09-06T15:59:17.355Z")]}}},new Date("2018-09-06T16:18:59.055Z"),"Planner Village",new Date("2018-09-06T12:48:52.984Z"),[],{_id: 30108,str: "Illinois",num: 36323,array: []},34161,"Engineer","virtual"]}});
    },

    function(coll) {
        return coll.insert({_id: 30109,str: "Uganda Shilling Polarised",num: 19006,date: new Date("2018-09-06T17:38:22.917Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30110,str: "Rwanda",date: new Date("2018-09-06T05:43:05.053Z"),array: [],obj: {_id: 30111,num: 73568,date: new Date("2018-09-06T16:42:11.154Z"),array: ["Chief",88349,new Date("2018-09-06T00:00:18.551Z"),"Austria Berkshire"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30112,num: 92293,date: new Date("2018-09-06T02:40:23.132Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30113,str: "input sensor Virgin Islands, U.S.",date: new Date("2018-09-06T10:23:11.982Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30114,str: "Mission JSON collaborative",num: 53440,date: new Date("2018-09-06T10:06:23.716Z"),array: ["Personal Loan Account Equatorial Guinea",new Date("2018-09-06T01:03:35.206Z"),"Virginia",[{_id: 30115,str: "SDD auxiliary Administrator",num: 23729,date: new Date("2018-09-06T07:15:25.917Z"),array: [new Date("2018-09-06T06:53:46.426Z"),88840,"Brunei Dollar"],obj: {_id: 30116,str: "Plaza",num: 29004,date: new Date("2018-09-06T19:46:00.581Z"),array: [82415]}},"Centers generating"],"Architect payment",59515,99482,new Date("2018-09-06T09:56:49.239Z"),[],[],{_id: 30117,str: "South Carolina Designer SSL",date: new Date("2018-09-06T15:55:12.955Z"),obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30118,str: "mission-critical IB Vista",num: 17651,date: new Date("2018-09-06T00:38:19.281Z"),array: ["sensor initiatives National","Libyan Dinar firewall Reverse-engineered",new Date("2018-09-06T15:28:57.482Z"),27723,69113,new Date("2018-09-06T03:45:04.019Z"),[new Date("2018-09-06T06:41:55.086Z")],new Date("2018-09-06T18:12:08.416Z"),"bluetooth","compress withdrawal Home",{_id: 30119,str: "index Bedfordshire Fresh",num: 88913,date: new Date("2018-09-05T21:42:06.920Z"),array: [],obj: {_id: 30120,str: "Zimbabwe Human",date: new Date("2018-09-06T11:25:47.438Z"),array: [],obj: {_id: 30121,str: "Gorgeous Metal Shirt Soft Response",num: 35204,date: new Date("2018-09-06T13:07:43.184Z"),obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 30122,num: 50638,date: new Date("2018-09-06T18:20:40.264Z"),array: [],obj: {_id: 30123,str: "back up parsing flexibility",date: new Date("2018-09-06T08:01:30.024Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30124,str: "Licensed Dynamic",num: 21532,date: new Date("2018-09-06T15:18:50.194Z"),array: [new Date("2018-09-06T18:40:28.873Z"),"extend protocol",new Date("2018-09-06T12:16:08.972Z"),64273,[72079,"experiences French Guiana Granite",26972],new Date("2018-09-06T03:58:42.358Z"),{_id: 30125,num: 23902,date: new Date("2018-09-06T06:42:23.806Z"),array: [],obj: {_id: 30126,date: new Date("2018-09-05T20:31:23.864Z"),array: ["Borders virtual",[]],obj: {_id: 30127,str: "Sleek Soft Fish Licensed Rubber Chair wireless",num: 97506,date: new Date("2018-09-06T08:56:01.853Z"),array: [[]],obj: {_id: 30128,str: "interfaces",num: 57741,obj: {}}}}},"Handcrafted redundant Money Market Account",{_id: 30129,str: "deposit deposit",num: 10093,array: [new Date("2018-09-06T09:18:38.810Z"),"incentivize",95659,{_id: 30130,str: "Steel",num: 15152,date: new Date("2018-09-05T21:48:19.540Z"),array: []},79052]},65287,new Date("2018-09-06T02:26:39.702Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30131,str: "solutions",num: 63499,date: new Date("2018-09-05T23:15:01.332Z"),array: [],obj: {_id: 30132,num: 24157,date: new Date("2018-09-05T23:36:43.002Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30133,str: "Assimilated transitional Cambridgeshire",num: 51525,date: new Date("2018-09-06T16:36:22.445Z"),array: [26060,63868,new Date("2018-09-06T00:51:30.474Z"),"Gorgeous Metal Salad",new Date("2018-09-06T12:25:28.843Z"),[],[29843,"Shoes"],81912,new Date("2018-09-06T05:39:20.119Z"),new Date("2018-09-06T07:35:51.929Z"),{_id: 30134,str: "Personal Loan Account",num: 84608,date: new Date("2018-09-06T11:35:37.009Z"),array: [],obj: {}},{_id: 30135,num: 72463,array: [],obj: {_id: 30136,str: "New Mexico withdrawal Rue",num: 79143,date: new Date("2018-09-06T09:08:17.784Z"),array: ["Automotive Australian Dollar Land",25949],obj: {_id: 30137,date: new Date("2018-09-06T04:42:09.863Z"),array: [new Date("2018-09-06T04:58:42.554Z")],obj: {}}}},"optical Alabama",46059]});
    },

    function(coll) {
        return coll.insert({_id: 30138,str: "payment platforms",num: 70477,date: new Date("2018-09-06T16:33:28.199Z"),array: [],obj: {_id: 30139,str: "Fantastic Metal Salad Jewelery Denar",num: 35782,date: new Date("2018-09-06T10:58:43.670Z"),array: [new Date("2018-09-06T11:11:44.994Z"),87519,[],"Connecticut deploy mobile",new Date("2018-09-06T06:50:11.691Z"),17624,99197,new Date("2018-09-05T21:37:02.937Z"),{_id: 30140,str: "eco-centric Ergonomic payment"},[22482],"Small Rubber Chair monitor Cape","enterprise Metrics"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30141,str: "Small Plastic Shirt Principal mesh",num: 39380,date: new Date("2018-09-06T09:05:29.111Z"),array: [{_id: 30142,str: "scale",num: 51081,date: new Date("2018-09-05T19:55:56.660Z"),array: [],obj: {_id: 30143,str: "Checking Account Credit Card Account digital",array: [75065,"methodology withdrawal Practical Steel Bacon"],obj: {}}},new Date("2018-09-06T08:49:28.103Z"),"orchid solid state",new Date("2018-09-05T20:08:50.255Z"),"Principal",92747,33443,new Date("2018-09-06T10:41:31.570Z"),["Credit Card Account Planner dynamic",[],28628],"solutions",new Date("2018-09-06T05:34:17.983Z"),{_id: 30144,date: new Date("2018-09-06T00:33:44.890Z"),obj: {_id: 30145,str: "violet",num: 79343,date: new Date("2018-09-06T06:49:10.708Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30146,num: 88111,date: new Date("2018-09-06T03:30:23.734Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30147,str: "multi-byte Moldovan Leu Buckinghamshire",num: 37265,date: new Date("2018-09-06T13:30:12.211Z"),array: [],obj: {_id: 30148,str: "info-mediaries SQL",num: 64260,date: new Date("2018-09-05T23:18:32.023Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30149,str: "radical Berkshire invoice",num: 44578,date: new Date("2018-09-06T02:23:52.798Z"),array: [new Date("2018-09-05T20:59:03.360Z"),{_id: 30150,str: "capacitor Incredible Money Market Account",num: 90718,date: new Date("2018-09-06T15:12:11.861Z"),array: []},new Date("2018-09-06T04:10:17.390Z"),29055,"Wooden array Bedfordshire",97494,[],"deliver Facilitator",{_id: 30151,date: new Date("2018-09-06T17:44:26.744Z"),array: [],obj: {_id: 30152,str: "Rustic Granite Shirt Frozen redundant",num: 52963,array: [[],"Personal Loan Account"],obj: {_id: 30153,str: "Rustic",date: new Date("2018-09-06T14:56:25.748Z"),obj: {}}}},"Delaware Convertible Marks",92412,new Date("2018-09-06T05:35:44.085Z"),"Freeway Refined",5547],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30154,str: "scale Borders info-mediaries",date: new Date("2018-09-05T23:18:29.744Z"),array: [],obj: {_id: 30155,str: "mesh HDD",num: 52526,date: new Date("2018-09-06T06:29:35.900Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30156,str: "Crossing",num: 29993,date: new Date("2018-09-06T00:37:19.801Z"),array: ["monetize time-frame RAM",70558,"Metrics",new Date("2018-09-06T14:53:04.309Z"),new Date("2018-09-06T11:13:40.086Z"),54463,new Date("2018-09-06T17:02:59.624Z"),"Cape Verde",{_id: 30157,str: "Liaison",num: 49205,date: new Date("2018-09-05T20:27:00.052Z"),array: [],obj: {_id: 30158,str: "Health",num: 36477,date: new Date("2018-09-06T06:22:55.915Z"),array: ["Interactions",65976],obj: {_id: 30159,num: 98586,date: new Date("2018-09-06T06:22:35.143Z"),array: [new Date("2018-09-06T05:54:26.898Z"),new Date("2018-09-06T17:44:52.286Z")]}}},{_id: 30160,str: "access turn-key",obj: {}},{_id: 30161,str: "Rustic Steel Chicken",num: 29501,array: []},73929,[],"invoice copying"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30162,str: "Wisconsin Incredible Plastic Chips",num: 34660,date: new Date("2018-09-05T21:43:17.276Z")});
    },

    function(coll) {
        return coll.insert({_id: 30163,str: "Corporate Berkshire",num: 97774,date: new Date("2018-09-06T02:48:24.019Z"),array: [],obj: {_id: 30164,str: "COM indexing Jersey",num: 98238,date: new Date("2018-09-06T13:54:20.976Z"),array: [94274,new Date("2018-09-06T01:16:44.346Z"),12108,"Georgia withdrawal FTP",17186,{_id: 30165,str: "Health Plains",num: 56167,array: ["Synergistic innovate",new Date("2018-09-06T12:44:35.063Z"),new Date("2018-09-06T06:24:12.382Z"),{_id: 30166,date: new Date("2018-09-06T12:01:33.487Z"),obj: {_id: 30167,str: "Keys payment regional",num: 44112,obj: {_id: 30168,str: "Awesome Rubber Table RSS",date: new Date("2018-09-05T21:48:27.991Z"),array: [],obj: {}}}}]},88807,new Date("2018-09-06T15:02:54.597Z"),new Date("2018-09-06T08:07:54.496Z"),[],"SAS didactic",{_id: 30169,num: 85369,date: new Date("2018-09-06T01:39:47.776Z"),array: [[new Date("2018-09-05T20:46:28.732Z"),"Baby"],"compressing lime",[]]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30170,str: "frictionless",num: 65500,date: new Date("2018-09-06T18:59:40.735Z"),array: [84678,"Brazil Arizona Supervisor",new Date("2018-09-06T09:44:41.473Z"),"Profound",[],new Date("2018-09-06T03:39:38.022Z"),new Date("2018-09-06T15:54:12.170Z"),11991,"New Jersey Senior",42823,"Vermont Chile optical",{_id: 30171,str: "Assurance Corporate",num: 11874,date: new Date("2018-09-06T14:12:26.447Z"),array: [],obj: {}},69719,[87732]],obj: {_id: 30172,str: "Avon target",date: new Date("2018-09-06T19:07:06.479Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30173,str: "Tasty Concrete Cheese standardization Checking Account",num: 48602,date: new Date("2018-09-06T19:17:52.205Z"),array: [new Date("2018-09-06T09:30:10.966Z"),"Division",new Date("2018-09-06T14:40:13.950Z"),18411,[],51188,[],new Date("2018-09-06T17:32:14.539Z"),"card deposit Metal",[{_id: 30174,num: 21048,date: new Date("2018-09-06T03:15:10.260Z"),array: ["Functionality Awesome Chicken",11996],obj: {_id: 30175,str: "California parsing",array: ["IB"],obj: {}}},{_id: 30176,str: "Bedfordshire",num: 34946,array: [],obj: {}},"Outdoors methodical SQL",{_id: 30177,date: new Date("2018-09-06T07:59:55.407Z"),obj: {}}],new Date("2018-09-06T10:26:12.746Z")]});
    },

    function(coll) {
        return coll.insert({_id: 30178,str: "Salad Movies Awesome",num: 78803,date: new Date("2018-09-06T12:45:53.094Z"),array: ["synthesizing",new Date("2018-09-06T10:02:29.146Z"),"Director leverage",57006,new Date("2018-09-06T18:01:13.844Z"),"deposit",[],22619,73000,{_id: 30179,str: "Industrial Sausages",date: new Date("2018-09-06T09:43:36.258Z"),array: [],obj: {}},{_id: 30180,str: "Burg users",num: 92785,array: [new Date("2018-09-05T21:16:37.809Z"),39417,[]],obj: {}},new Date("2018-09-06T02:12:09.499Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30181,str: "Rustic Cotton Soap deposit matrices",num: 56654,date: new Date("2018-09-06T19:12:19.541Z"),array: [56319,48930,"methodologies bottom-line compressing",{_id: 30182,num: 77548,date: new Date("2018-09-06T07:57:47.975Z"),array: [],obj: {_id: 30183,str: "Estonia",num: 29054,array: ["synthesize",new Date("2018-09-06T10:28:13.754Z"),new Date("2018-09-06T17:34:21.099Z"),[1764,new Date("2018-09-06T04:59:20.728Z")]],obj: {_id: 30184,str: "South Dakota Plains",date: new Date("2018-09-06T14:39:32.654Z"),array: [],obj: {}}}},[],"copying Investment Account Phased",{_id: 30185,date: new Date("2018-09-06T02:56:54.147Z"),array: []},52225,new Date("2018-09-06T12:23:22.056Z"),{_id: 30186,str: "Granite",num: 86867,date: new Date("2018-09-06T14:55:08.976Z"),array: [{_id: 30187,str: "turn-key streamline",num: 3565,date: new Date("2018-09-05T21:39:54.171Z"),array: [new Date("2018-09-06T07:49:24.545Z")],obj: {_id: 30188,str: "Handmade Metal Bacon",date: new Date("2018-09-06T09:06:54.020Z"),obj: {}}},[]]},new Date("2018-09-06T01:30:46.014Z")]});
    },

    function(coll) {
        return coll.insert({_id: 30189,str: "wireless",num: 65560,date: new Date("2018-09-06T18:20:50.518Z"),array: [50583,new Date("2018-09-05T23:30:08.757Z"),"ADP secured line","seize",87076,new Date("2018-09-06T16:31:37.654Z"),23102,new Date("2018-09-06T07:55:17.750Z"),"Home Loan Account cross-media","Intranet"],obj: {_id: 30190,str: "Web feed",num: 5472,date: new Date("2018-09-06T15:49:36.922Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30191,str: "extend Platinum Awesome",num: 28095,date: new Date("2018-09-06T00:12:04.626Z"),array: [],obj: {_id: 30192,str: "Sleek Rubber Bike",date: new Date("2018-09-06T18:53:37.103Z"),array: ["Walk",5691,new Date("2018-09-06T11:38:47.428Z"),new Date("2018-09-06T09:06:22.798Z"),new Date("2018-09-06T02:31:59.640Z"),"target Pizza","redundant",new Date("2018-09-06T15:40:17.439Z"),62705,{_id: 30193,num: 42742,date: new Date("2018-09-06T04:02:00.674Z"),array: [{_id: 30194,str: "Lilangeni multi-byte",date: new Date("2018-09-06T17:27:33.583Z"),array: [],obj: {}},60267]},"Forward","Metal Analyst"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30195,str: "mesh",num: 78096,date: new Date("2018-09-06T09:13:39.371Z"),obj: {_id: 30196,str: "optimizing synthesizing Bedfordshire",num: 66306,date: new Date("2018-09-06T10:31:58.071Z"),array: [],obj: {_id: 30197,num: 75186,array: [{_id: 30198,str: "Connecticut Savings Account",date: new Date("2018-09-06T12:46:30.931Z"),array: []},"Court protocol",new Date("2018-09-06T13:39:30.024Z"),83562,{_id: 30199,str: "paradigms Executive eyeballs",date: new Date("2018-09-05T23:17:12.347Z"),array: [new Date("2018-09-05T21:37:42.145Z")],obj: {}},59675,["Summit Regional",[46414,{_id: 30200,str: "Plaza enterprise hierarchy",num: 84254,obj: {_id: 30201,num: 64429,date: new Date("2018-09-05T22:59:00.345Z"),array: []}},[]],new Date("2018-09-06T07:55:59.049Z"),{_id: 30202,str: "open-source",date: new Date("2018-09-05T20:28:06.218Z"),obj: {_id: 30203,num: 16527,date: new Date("2018-09-06T11:02:01.933Z"),array: [51906,{_id: 30204,str: "deposit",array: [75850],obj: {}}],obj: {}}}],"Buckinghamshire programming matrix",7398,92342,new Date("2018-09-06T07:52:19.618Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 30205,str: "pixel Computers",num: 42831,date: new Date("2018-09-06T14:10:34.248Z"),array: [],obj: {_id: 30206,str: "convergence connecting tan",date: new Date("2018-09-05T21:22:59.185Z"),array: [77253,56183,new Date("2018-09-06T05:01:31.618Z"),"Ethiopian Birr Computer Pants",{_id: 30207,str: "installation Developer executive",num: 8347,date: new Date("2018-09-06T09:42:04.859Z"),array: [],obj: {_id: 30208,num: 16127,array: [90688,"seize bluetooth Sausages"],obj: {}}},new Date("2018-09-06T18:50:29.352Z"),new Date("2018-09-06T08:34:11.743Z"),"Buckinghamshire",42293,[{_id: 30209,str: "Triple-buffered Dynamic",date: new Date("2018-09-06T17:39:28.831Z"),obj: {}}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30210,str: "Cross-platform",num: 18355,date: new Date("2018-09-06T12:47:20.683Z"),array: [27119,"deliver Hong Kong Rustic Wooden Tuna","incentivize customer loyalty redundant",55630,new Date("2018-09-05T22:27:33.372Z"),80524,{_id: 30211,str: "alliance sensor",num: 78116,date: new Date("2018-09-06T13:15:19.263Z"),array: [new Date("2018-09-06T00:48:58.150Z")],obj: {}},{_id: 30212,num: 51214,array: [new Date("2018-09-06T15:08:54.241Z")]},"systems Auto Loan Account Small","Marketing Burg synthesize",{_id: 30213,str: "back-end SQL Clothing",num: 92530,date: new Date("2018-09-06T12:28:14.591Z"),obj: {_id: 30214,date: new Date("2018-09-06T11:35:19.368Z"),array: [],obj: {}}}],obj: {_id: 30215,array: [],obj: {_id: 30216,str: "invoice Central deploy",date: new Date("2018-09-06T09:14:23.267Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 30217,num: 86502,array: [53121,new Date("2018-09-06T02:35:58.401Z"),"Svalbard & Jan Mayen Islands Buckinghamshire","Consultant technologies Central",{_id: 30218,str: "Congolese Franc",num: 50980,date: new Date("2018-09-05T23:40:31.450Z"),array: [81929,"Personal Loan Account Representative Buckinghamshire",[],new Date("2018-09-06T05:15:15.930Z")],obj: {}},new Date("2018-09-06T08:03:52.088Z"),9398,[],[78947],"sensor Markets Cheese",{_id: 30219,str: "partnerships",num: 20029,date: new Date("2018-09-06T17:24:26.358Z"),array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 30220,str: "extend Metal",date: new Date("2018-09-06T04:29:41.756Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30221,str: "paradigms",num: 26138,date: new Date("2018-09-06T00:01:38.708Z"),array: [62618,new Date("2018-09-06T11:45:41.172Z"),new Date("2018-09-06T09:02:58.697Z"),new Date("2018-09-06T02:22:39.045Z"),"Inlet","Tasty SMS","Louisiana Lithuania",[],98343,65718,{_id: 30222,str: "web services Rustic web-enabled",num: 19387,obj: {}},{_id: 30223,str: "Ameliorated Summit",num: 54509,date: new Date("2018-09-06T00:24:36.602Z"),array: [{_id: 30224,str: "Auto Loan Account",num: 29747,obj: {_id: 30225,str: "tan",num: 26893,date: new Date("2018-09-06T12:54:17.081Z"),array: [new Date("2018-09-06T18:15:14.833Z")],obj: {}}}],obj: {_id: 30226,num: 90727,date: new Date("2018-09-06T01:38:28.918Z"),array: []}},new Date("2018-09-05T22:19:34.418Z"),[]],obj: {_id: 30227,str: "Sports e-tailers Islands",date: new Date("2018-09-05T21:04:42.529Z")}});
    },

    function(coll) {
        return coll.insert({_id: 30228,str: "transmitting Iceland JSON",num: 92658,date: new Date("2018-09-06T06:05:51.137Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30229,str: "instruction set",num: 8248,date: new Date("2018-09-05T21:29:48.249Z"),array: [{_id: 30230,num: 8185,date: new Date("2018-09-06T13:42:05.398Z"),array: [],obj: {}},new Date("2018-09-06T00:28:47.950Z"),89644,69805,28033,"index Concrete programming",new Date("2018-09-06T15:30:46.751Z"),[],"optical Checking Account"],obj: {_id: 30231,str: "system Shoes",date: new Date("2018-09-06T11:47:19.154Z"),array: [new Date("2018-09-06T01:04:31.411Z"),{_id: 30232,str: "Personal Loan Account transmit",num: 3110,date: new Date("2018-09-06T19:51:33.692Z"),array: [],obj: {}},13783],obj: {_id: 30233,array: ["pixel",21875,[],new Date("2018-09-06T02:48:36.898Z"),{_id: 30234,str: "bypass envisioneer needs-based",num: 33528,array: [["Organic hacking"],"HDD"],obj: {_id: 30235,date: new Date("2018-09-06T10:17:42.099Z"),array: []}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30236,str: "Avon",num: 72810,date: new Date("2018-09-06T14:17:31.348Z"),array: [[],65492,57458,"world-class users maroon",new Date("2018-09-05T22:49:50.648Z"),new Date("2018-09-05T21:11:20.531Z"),["product","synergize",new Date("2018-09-06T03:02:23.712Z"),56270,81912,87564,[new Date("2018-09-06T00:27:08.412Z")]],new Date("2018-09-06T12:25:05.895Z"),{_id: 30237,num: 95667,date: new Date("2018-09-05T23:42:56.143Z"),array: [],obj: {_id: 30238,str: "Home Internal Mouse",date: new Date("2018-09-06T10:37:34.846Z"),obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30239,str: "encoding revolutionize",num: 17213,date: new Date("2018-09-06T19:30:58.192Z"),array: [],obj: {_id: 30240,str: "local",num: 40173,array: ["forecast",98583,13970,new Date("2018-09-06T14:09:59.286Z"),new Date("2018-09-06T07:42:29.783Z"),"deposit Enhanced alarm","Investment Account expedite",new Date("2018-09-06T03:29:12.375Z"),"withdrawal rich",{_id: 30241,str: "Developer Hat",num: 53325,date: new Date("2018-09-06T15:36:06.198Z"),obj: {}},25533,"HTTP",{_id: 30242,num: 82277,date: new Date("2018-09-06T12:01:04.766Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 30243,str: "help-desk",num: 42277,date: new Date("2018-09-06T01:47:13.618Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30244,str: "Jewelery end-to-end Lek",num: 86914,array: [86636,new Date("2018-09-06T02:30:24.004Z"),"application client-server Tennessee",[1328,"Sleek Home",{_id: 30245,str: "synthesizing Crossroad auxiliary",num: 58753,date: new Date("2018-09-06T04:33:50.000Z"),array: [new Date("2018-09-05T21:16:12.979Z"),[],4227],obj: {_id: 30246,num: 29450,array: []}},new Date("2018-09-06T13:56:13.430Z"),54336,"COM"],new Date("2018-09-06T10:43:18.190Z"),22722]});
    },

    function(coll) {
        return coll.insert({_id: 30247,str: "Kenya",num: 3633,date: new Date("2018-09-05T21:34:16.741Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30248,str: "neural",num: 17923,date: new Date("2018-09-06T09:40:06.373Z"),array: ["Credit Card Account Specialist",new Date("2018-09-06T13:46:20.972Z"),95483],obj: {_id: 30249,str: "dedicated",num: 37212,date: new Date("2018-09-06T03:12:51.273Z"),array: ["rich Chair Georgia",new Date("2018-09-06T08:33:22.751Z"),{_id: 30250,date: new Date("2018-09-06T12:56:43.384Z"),array: [],obj: {_id: 30251,str: "Creative Auto Loan Account real-time",num: 42575,date: new Date("2018-09-05T23:45:31.914Z"),array: []}},67359,[99334,["back up","Buckinghamshire pink",new Date("2018-09-05T22:23:38.239Z")],1794],new Date("2018-09-06T09:31:35.209Z"),46998,"Chips",new Date("2018-09-06T04:21:16.481Z"),{_id: 30252,num: 27718,date: new Date("2018-09-05T20:42:26.084Z"),obj: {}},"knowledge user Mouse Avon",[{_id: 30253,str: "niches capacitor cyan",date: new Date("2018-09-05T23:10:22.932Z"),array: []}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30254,str: "COM",num: 54792,date: new Date("2018-09-06T16:04:23.617Z"),array: [],obj: {_id: 30255,num: 43061,date: new Date("2018-09-06T18:08:08.356Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30256,num: 36511,date: new Date("2018-09-06T14:33:38.546Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30257,str: "Future",num: 46488,date: new Date("2018-09-06T09:32:38.631Z"),array: [new Date("2018-09-06T11:31:14.919Z"),new Date("2018-09-06T10:26:45.084Z"),48994,84317,{_id: 30258,num: 49662,date: new Date("2018-09-06T00:15:37.428Z"),array: ["Security",[30674],"override Berkshire auxiliary","Lebanese Pound cross-platform",[],new Date("2018-09-05T22:55:55.849Z"),new Date("2018-09-06T05:31:26.414Z"),new Date("2018-09-06T13:12:31.357Z")],obj: {}},[],68929,42238],obj: {_id: 30259,str: "copy Cambridgeshire",array: [{_id: 30260,str: "Data panel Forks",date: new Date("2018-09-06T03:27:35.377Z")}],obj: {_id: 30261,num: 51121,date: new Date("2018-09-05T22:51:00.814Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 30262,str: "Radial",num: 58519,date: new Date("2018-09-06T07:34:45.933Z"),array: [99909,{_id: 30263,str: "cross-platform Object-based",num: 94097,date: new Date("2018-09-06T05:56:27.099Z"),array: [new Date("2018-09-05T22:40:49.913Z"),new Date("2018-09-05T20:49:48.924Z"),"Codes specifically reserved for testing purposes COM",new Date("2018-09-06T00:02:38.557Z")],obj: {}},68401,"Reactive Savings Account","withdrawal application",[],48865,87713,"Vermont",{_id: 30264,str: "incubate",obj: {}},"copy Jewelery"],obj: {_id: 30265,num: 43296,date: new Date("2018-09-06T16:12:53.884Z"),obj: {_id: 30266,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 30267,str: "Marketing Books revolutionary",num: 68375,date: new Date("2018-09-05T20:59:56.512Z"),array: [],obj: {_id: 30268,str: "utilisation markets",num: 32449,date: new Date("2018-09-06T04:19:59.656Z"),array: [new Date("2018-09-06T14:47:54.547Z"),new Date("2018-09-06T01:18:08.839Z"),"paradigm Generic",[],new Date("2018-09-06T05:52:30.039Z"),65784,35700,"Money Market Account Pula",96282,new Date("2018-09-06T16:54:14.217Z"),"Automotive copy Infrastructure"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30269,str: "transmitting Interactions synthesizing",num: 83650,date: new Date("2018-09-06T04:55:52.310Z"),array: [[],"Rupiah SMTP Computer","Libyan Dinar connect Rustic Wooden Pants",new Date("2018-09-06T17:09:26.236Z"),17790],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30270,str: "payment",date: new Date("2018-09-06T12:27:35.598Z"),array: ["Practical Steel Computer Flats",13344,new Date("2018-09-06T14:33:59.659Z"),new Date("2018-09-06T10:36:01.805Z"),"Avon Incredible Home Loan Account",new Date("2018-09-06T01:11:46.962Z"),{_id: 30271,str: "program",num: 70818,date: new Date("2018-09-06T12:56:08.136Z"),array: [32261,[],"optimize world-class",new Date("2018-09-06T19:34:03.919Z"),58193,{_id: 30272,str: "Customer",date: new Date("2018-09-06T00:15:40.927Z"),array: [[37050,"payment"]],obj: {}},{_id: 30273,num: 19152,date: new Date("2018-09-06T12:08:30.259Z"),obj: {}},92628],obj: {_id: 30274,str: "parsing e-business",num: 46410,array: [[]],obj: {_id: 30275,date: new Date("2018-09-06T06:04:48.037Z"),array: [],obj: {_id: 30276,str: "Representative JSON",num: 76968}}}},"Buckinghamshire"]});
    },

    function(coll) {
        return coll.insert({_id: 30277,str: "Guinea harness",num: 86270,date: new Date("2018-09-06T11:08:45.382Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30278,str: "Beauty e-services functionalities",num: 19617,date: new Date("2018-09-06T18:44:29.694Z"),obj: {_id: 30279,date: new Date("2018-09-06T11:22:43.642Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30280,str: "withdrawal",num: 33160,date: new Date("2018-09-06T11:56:12.028Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30281,str: "JSON",num: 84381,date: new Date("2018-09-06T01:22:06.463Z"),array: [],obj: {_id: 30282,str: "program",num: 49312,date: new Date("2018-09-06T00:08:12.572Z"),array: [{_id: 30283,num: 55508,date: new Date("2018-09-06T00:32:07.961Z"),array: [new Date("2018-09-06T18:11:20.306Z")]},"Function-based Wooden Buckinghamshire",new Date("2018-09-06T10:08:25.491Z"),"schemas bypassing technologies",45936,{_id: 30284,num: 98408,date: new Date("2018-09-06T04:49:08.343Z"),array: ["matrix"],obj: {}},68720,[],71904,69340,{_id: 30285,str: "orchid channels",array: [],obj: {_id: 30286,str: "New Mexico Bedfordshire",obj: {_id: 30287,str: "monetize",num: 17795,date: new Date("2018-09-06T09:37:49.052Z")}}},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30288,str: "Maine overriding",num: 38624,date: new Date("2018-09-06T03:41:02.812Z"),array: ["proactive",new Date("2018-09-06T11:21:55.532Z"),"Web",new Date("2018-09-06T07:32:45.880Z"),12579,[],41970,[{_id: 30289,str: "El Salvador Colon US Dollar encoding Operations",num: 93508,date: new Date("2018-09-06T12:04:39.953Z"),obj: {_id: 30290,str: "Fantastic Soft Soap Generic",num: 74805,date: new Date("2018-09-06T08:05:21.465Z"),array: [],obj: {_id: 30291,str: "Grass-roots Supervisor bypassing",num: 65563,date: new Date("2018-09-06T03:40:20.604Z"),array: [],obj: {}}}},57866,"Expanded XML",new Date("2018-09-06T12:15:46.597Z"),{_id: 30292,str: "Ferry France Team-oriented",date: new Date("2018-09-06T16:06:27.874Z"),array: [5361]}],43082,new Date("2018-09-06T04:45:26.340Z"),"clear-thinking",81683]});
    },

    function(coll) {
        return coll.insert({_id: 30293,str: "haptic Granite",num: 4274,date: new Date("2018-09-06T19:05:45.992Z"),array: ["distributed portal",58438,new Date("2018-09-06T10:30:05.888Z"),"Qatari Rial Tasty Plastic Fish Frozen",new Date("2018-09-06T07:32:02.164Z"),{_id: 30294,str: "data-warehouse invoice",num: 29840,date: new Date("2018-09-05T21:15:54.919Z"),array: [],obj: {_id: 30295,str: "Visionary bluetooth",num: 53842,date: new Date("2018-09-06T15:16:45.297Z"),obj: {_id: 30296,str: "Cambridgeshire",array: [],obj: {}}}},new Date("2018-09-06T10:34:42.782Z")]});
    },

    function(coll) {
        return coll.insert({_id: 30297,str: "port",num: 10451,date: new Date("2018-09-06T05:56:42.757Z"),array: [],obj: {_id: 30298,str: "Chilean Peso Unidades de fomento tertiary",num: 36130,date: new Date("2018-09-06T07:02:25.263Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30299,str: "maroon redundant",num: 62972,array: [new Date("2018-09-06T09:42:15.667Z"),new Date("2018-09-05T23:28:04.172Z"),84740,"Liaison","panel navigate","Gorgeous",73166,91654,{_id: 30300,str: "Plastic Extended",num: 23274,date: new Date("2018-09-06T15:53:09.060Z"),obj: {}},[new Date("2018-09-05T20:31:46.242Z"),58125,[]],new Date("2018-09-06T18:43:03.346Z"),{_id: 30301,num: 15426,date: new Date("2018-09-05T23:55:04.902Z"),obj: {}},{_id: 30302,str: "Electronics",num: 58078,date: new Date("2018-09-06T18:30:37.209Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30303,str: "human-resource architecture Supervisor",num: 72998,date: new Date("2018-09-06T13:30:11.766Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30304,str: "withdrawal Handmade one-to-one",num: 75907,date: new Date("2018-09-06T11:02:51.888Z"),array: [["Credit Card Account Tennessee Meadows"],new Date("2018-09-06T18:16:48.101Z"),{_id: 30305,str: "experiences Tasty Seamless",date: new Date("2018-09-06T16:41:28.947Z"),array: [new Date("2018-09-06T05:06:42.526Z"),70455,52249],obj: {_id: 30306,str: "Handmade Wooden Mouse",num: 63335,date: new Date("2018-09-06T02:29:46.216Z"),obj: {}}},new Date("2018-09-06T15:48:42.356Z"),{_id: 30307,num: 55619,array: [],obj: {_id: 30308,obj: {}}},48234,"Electronics","bus",[],new Date("2018-09-06T18:42:26.149Z"),"RSS"],obj: {_id: 30309,str: "fuchsia RSS",num: 83967,date: new Date("2018-09-06T16:05:49.163Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30310,str: "program copy",num: 69913,array: [],obj: {_id: 30311,str: "infrastructures",num: 55563,date: new Date("2018-09-06T11:51:20.948Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30312,str: "Quality-focused",num: 27577,date: new Date("2018-09-05T23:01:37.705Z"),array: [],obj: {_id: 30313,str: "El Salvador Colon US Dollar",num: 35755,date: new Date("2018-09-06T08:56:29.464Z"),array: [74410,new Date("2018-09-06T13:50:42.530Z"),new Date("2018-09-06T19:53:52.347Z"),"input Marketing",69576,"Optimized",[[],new Date("2018-09-06T09:51:39.989Z"),73067,{_id: 30314,array: [],obj: {_id: 30315,str: "recontextualize FTP Cotton",num: 87462,date: new Date("2018-09-06T00:05:41.407Z"),obj: {}}},"Fantastic",[{_id: 30316,str: "Practical Soft Pants",num: 21285,date: new Date("2018-09-05T22:59:30.769Z"),array: []},59562]],{_id: 30317,str: "infrastructures value-added",num: 59452,date: new Date("2018-09-06T07:23:15.950Z"),array: ["open-source withdrawal Checking Account","paradigms Interactions",[{_id: 30318,obj: {}}]],obj: {_id: 30319,str: "auxiliary exuding protocol",array: [new Date("2018-09-06T10:04:56.714Z")]}},new Date("2018-09-06T10:23:30.539Z"),{_id: 30320,num: 34764,array: [],obj: {}}],obj: {_id: 30321,str: "Brand Graphic Interface Pines",date: new Date("2018-09-06T13:50:30.493Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 30322,str: "Home Loan Account Ports",num: 14700,date: new Date("2018-09-06T02:37:19.331Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30323,str: "FTP",num: 89914,date: new Date("2018-09-06T11:03:38.807Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30324,str: "Investment Account",num: 20260,date: new Date("2018-09-06T05:12:18.289Z"),array: ["Chips Pizza Health",new Date("2018-09-06T11:34:08.294Z"),new Date("2018-09-06T04:34:35.447Z"),[12747,3911],"Auto Loan Account empower",{_id: 30325,str: "Home Loan Account utilize",num: 93984,date: new Date("2018-09-06T04:35:34.860Z"),array: [],obj: {_id: 30326,num: 81498,date: new Date("2018-09-06T14:30:53.282Z"),array: [25385],obj: {_id: 30327,str: "Electronics"}}},new Date("2018-09-06T05:32:21.149Z"),30446,"AGP Soap input",[],"Tactics connecting",new Date("2018-09-06T12:07:40.007Z"),61756],obj: {_id: 30328,str: "haptic",num: 57985,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30329,obj: {_id: 30330,str: "withdrawal",num: 90031,date: new Date("2018-09-06T00:02:50.838Z"),array: [new Date("2018-09-05T23:51:04.189Z"),3744,27699,"calculate Operations","Berkshire Bermudian Dollar (customarily known as Bermuda Dollar)",new Date("2018-09-06T08:54:54.868Z"),new Date("2018-09-06T05:26:30.318Z"),[],81209,"Liberia","white",new Date("2018-09-05T20:29:00.600Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30331,str: "Plain",date: new Date("2018-09-06T08:40:31.982Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30332,str: "Designer",num: 71514,date: new Date("2018-09-05T22:02:37.839Z"),array: [{_id: 30333,str: "copying",num: 15204,array: ["Handmade Soft Pizza grow",new Date("2018-09-06T10:51:22.124Z"),"Frozen parse bandwidth"],obj: {}},new Date("2018-09-05T22:06:47.726Z"),79665,36821,new Date("2018-09-06T09:32:07.984Z"),{_id: 30334,str: "Rue Rhode Island",obj: {}},[],23240,new Date("2018-09-06T18:13:45.618Z"),"Money Market Account scale intranet"],obj: {_id: 30335,str: "Kids Computers XML",num: 32356,date: new Date("2018-09-06T18:55:31.784Z"),array: [],obj: {_id: 30336,str: "RAM",num: 87497,date: new Date("2018-09-06T16:27:04.568Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30337,str: "distributed",num: 82905,date: new Date("2018-09-06T09:26:06.762Z"),array: [],obj: {_id: 30338,str: "Georgia",num: 73040,date: new Date("2018-09-06T09:10:16.287Z"),array: ["Sleek Fresh Pants zero tolerance indigo",18330,[98410,new Date("2018-09-06T16:06:26.009Z"),"e-enable",{_id: 30339,str: "index solution-oriented Implementation",num: 95179,date: new Date("2018-09-06T00:50:40.117Z"),array: [],obj: {}},"Nebraska virtual Checking Account","bypassing",new Date("2018-09-06T06:54:17.043Z")],"Developer",{_id: 30340,str: "maroon",date: new Date("2018-09-06T07:54:46.570Z")},69201,new Date("2018-09-06T15:36:30.110Z"),[51579],new Date("2018-09-06T08:58:13.503Z"),{_id: 30341,num: 6836,date: new Date("2018-09-06T15:40:09.979Z"),array: [],obj: {_id: 30342,str: "Refined",array: [],obj: {}}},"Malagasy Ariary Specialist"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30343,str: "back-end Soft",num: 96105,array: ["Madagascar Specialist circuit",new Date("2018-09-06T03:24:23.614Z"),"indigo Circle Bedfordshire",[27217,[],[]],24735,{_id: 30344,date: new Date("2018-09-06T08:13:03.066Z"),array: [new Date("2018-09-06T11:16:06.822Z")],obj: {}},new Date("2018-09-06T02:17:57.687Z"),69325,{_id: 30345,str: "Indiana Loop Director",num: 85598,date: new Date("2018-09-05T22:58:31.836Z"),array: [],obj: {}},"Egyptian Pound capacitor Refined Metal Car",new Date("2018-09-06T12:47:26.267Z"),new Date("2018-09-05T22:53:52.070Z")],obj: {_id: 30346,str: "International Cotton",num: 26284,date: new Date("2018-09-06T01:57:40.262Z"),array: ["Executive","Architect"]}});
    },

    function(coll) {
        return coll.insert({_id: 30347,str: "brand",num: 35999,date: new Date("2018-09-06T11:54:02.378Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30348,num: 11406,array: [],obj: {_id: 30349,str: "benchmark Centralized",num: 24443,date: new Date("2018-09-06T19:11:35.508Z"),obj: {_id: 30350,str: "withdrawal Fantastic Frozen Fish",num: 75933,array: [21106,new Date("2018-09-06T11:41:23.747Z"),new Date("2018-09-05T21:27:12.864Z"),93825,"Sleek",["portal Strategist",new Date("2018-09-06T05:16:22.671Z"),"Computer invoice Lebanese Pound",new Date("2018-09-06T17:14:22.133Z")],"maroon communities Diverse",7236,{_id: 30351,str: "web-enabled",date: new Date("2018-09-06T02:20:37.208Z"),array: [],obj: {_id: 30352,str: "French Southern Territories Pants Credit Card Account",num: 26617,array: []}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 30353,str: "Tools",date: new Date("2018-09-06T13:56:01.276Z"),array: [],obj: {_id: 30354,str: "Assurance system",num: 67927,date: new Date("2018-09-06T11:50:04.829Z"),array: ["Frozen solid state",68832,new Date("2018-09-06T16:37:50.598Z"),57612,["Automated Direct embrace",new Date("2018-09-05T21:59:08.945Z"),{_id: 30355,str: "withdrawal",num: 18142,date: new Date("2018-09-06T17:10:57.384Z"),array: [],obj: {}},{_id: 30356,str: "Engineer",num: 16809,date: new Date("2018-09-06T08:31:40.324Z"),array: [16833,new Date("2018-09-06T07:57:06.812Z"),99702,"CSS",{_id: 30357,date: new Date("2018-09-05T21:55:56.009Z"),array: [],obj: {_id: 30358,str: "Liechtenstein Networked withdrawal",num: 57004,obj: {_id: 30359,num: 59139}}}]}],17398],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30360,str: "Direct",num: 75747,date: new Date("2018-09-05T23:44:18.254Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30361,str: "client-driven Avon digital",num: 62227,date: new Date("2018-09-06T04:14:13.457Z"),array: [36558,91793,"optical service-desk",new Date("2018-09-06T15:00:27.202Z"),25687,"New Mexico XSS Fish",80863,new Date("2018-09-06T11:14:23.148Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30362,str: "Gorgeous Sports",date: new Date("2018-09-06T04:41:53.578Z"),array: ["Principal bleeding-edge",new Date("2018-09-06T05:42:29.475Z"),86829,"European Unit of Account 9(E.U.A.-9)",65442,{_id: 30363,num: 38778,array: [],obj: {_id: 30364,str: "Direct payment Fully-configurable",num: 98399,date: new Date("2018-09-06T09:42:27.953Z"),array: [],obj: {}}},[],[new Date("2018-09-06T02:18:33.114Z"),85632,"dedicated","Rustic Cotton Keyboard Intelligent"],{_id: 30365,str: "Solutions",num: 76623,date: new Date("2018-09-06T15:25:51.138Z")},{_id: 30366,num: 32213,array: [new Date("2018-09-06T11:28:10.807Z"),31962],obj: {_id: 30367,str: "frictionless Function-based",num: 51525,obj: {}}}],obj: {_id: 30368,str: "Kids",num: 58449,date: new Date("2018-09-06T01:11:01.375Z"),array: [new Date("2018-09-06T09:46:57.115Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 30369,str: "Licensed Frozen Shirt",num: 64217,date: new Date("2018-09-06T12:22:12.459Z"),array: ["multimedia innovative",new Date("2018-09-06T00:33:43.604Z"),[],47353,12302,"generate Buckinghamshire Incredible","generating","application",8652,new Date("2018-09-06T01:20:30.764Z")],obj: {_id: 30370,str: "JBOD virtual Rubber",num: 45809,date: new Date("2018-09-06T07:28:38.390Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30371,str: "neutral override",num: 93592,array: [],obj: {_id: 30372,str: "Cambridgeshire payment",num: 99277,date: new Date("2018-09-06T14:40:20.997Z"),array: [[8736,"North Dakota"],new Date("2018-09-06T08:44:08.676Z"),"turquoise tangible","invoice indigo",81960,19730,new Date("2018-09-06T11:49:43.384Z"),{_id: 30373,num: 79048,date: new Date("2018-09-06T06:49:08.439Z"),obj: {}},[[],new Date("2018-09-06T15:40:25.840Z")],41266,new Date("2018-09-05T20:01:53.521Z"),"Croatia Borders"],obj: {_id: 30374,str: "Toys",date: new Date("2018-09-06T18:10:46.436Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 30375,str: "Toys Belarus Viaduct",num: 889,date: new Date("2018-09-06T09:40:42.861Z"),array: ["Buckinghamshire",48595,"Diverse Pitcairn Islands navigating",{_id: 30376,num: 69329,date: new Date("2018-09-06T12:57:19.613Z"),array: [],obj: {}},new Date("2018-09-06T17:08:07.963Z"),new Date("2018-09-06T14:34:52.069Z"),[],17004,"Arkansas Incredible Cotton Gloves Rand Namibia Dollar",new Date("2018-09-06T17:12:18.394Z"),[[],{_id: 30377,str: "Oklahoma",num: 82982,date: new Date("2018-09-06T00:23:06.218Z"),array: [77126],obj: {}},new Date("2018-09-06T15:55:40.486Z"),new Date("2018-09-06T01:02:29.490Z"),["Cape Verde Japan Granite"],85900]]});
    },

    function(coll) {
        return coll.insert({_id: 30378,str: "Investor Saudi Riyal Texas",num: 7709,date: new Date("2018-09-06T01:44:39.347Z"),array: [],obj: {_id: 30379,num: 99162,date: new Date("2018-09-06T14:32:49.100Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30380,str: "IB open-source",num: 66250,date: new Date("2018-09-06T05:21:41.787Z"),array: [{_id: 30381,str: "platforms",num: 28450,date: new Date("2018-09-06T05:50:19.409Z"),array: [],obj: {}},47672,new Date("2018-09-06T17:59:06.446Z"),"envisioneer Checking Account",30024,new Date("2018-09-06T13:18:13.778Z"),new Date("2018-09-06T14:37:15.273Z"),"Garden Direct matrices",42072,"Auto Loan Account Specialist program",[],{_id: 30382,num: 41570,date: new Date("2018-09-06T12:44:21.071Z"),array: [[{_id: 30383,str: "Bedfordshire",num: 87158,array: [74134,"Optimization",[],new Date("2018-09-05T23:20:34.269Z"),{_id: 30384,num: 68426,date: new Date("2018-09-06T13:23:13.943Z"),array: [new Date("2018-09-06T18:25:09.777Z"),new Date("2018-09-06T14:36:25.084Z")],obj: {_id: 30385,str: "protocol",date: new Date("2018-09-06T09:57:17.626Z")}},[],"SAS program communities"],obj: {_id: 30386,str: "convergence program Avon",array: []}}],"Avon Investment Account Rubber"],obj: {_id: 30387,date: new Date("2018-09-06T10:47:12.920Z"),obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30388,str: "Cotton ADP",num: 33882,date: new Date("2018-09-06T01:45:52.226Z"),array: ["USB New Hampshire Avon",new Date("2018-09-06T11:25:29.138Z"),"Spain auxiliary Canadian Dollar",[],10080,21370,new Date("2018-09-06T12:35:29.288Z"),"teal B2B",1170,[],new Date("2018-09-06T07:54:25.747Z")],obj: {_id: 30389,str: "Configuration firewall",num: 68749,date: new Date("2018-09-06T02:25:04.242Z"),array: ["Plastic",{_id: 30390,str: "website infrastructures",num: 74635,date: new Date("2018-09-06T17:41:07.478Z"),array: [],obj: {}}],obj: {_id: 30391,str: "Qatari Rial",num: 33689,date: new Date("2018-09-06T05:42:12.042Z"),array: [[new Date("2018-09-06T13:25:57.308Z"),new Date("2018-09-06T19:28:11.791Z")],81533,{ _id: 30392 }],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30393,str: "viral PCI partnerships",num: 55975,date: new Date("2018-09-06T11:22:40.471Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30394,str: "Concrete mindshare teal",num: 48869,date: new Date("2018-09-06T00:36:07.244Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30395,str: "hack",date: new Date("2018-09-06T08:14:53.828Z"),array: [30688,new Date("2018-09-06T02:17:23.597Z"),"out-of-the-box",35556,new Date("2018-09-06T00:44:44.684Z"),"Bike",new Date("2018-09-05T23:53:25.518Z"),new Date("2018-09-06T04:48:20.635Z"),new Date("2018-09-06T00:52:13.076Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30396,str: "Rubber channels",num: 41112,date: new Date("2018-09-05T21:18:07.886Z"),array: [new Date("2018-09-06T00:10:58.987Z"),90350,{_id: 30397,str: "content SQL",num: 78258,array: ["Anguilla Cambridgeshire Steel","Architect Human Refined Frozen Chair"],obj: {_id: 30398,str: "Cedi",date: new Date("2018-09-06T18:16:01.473Z"),obj: {}}},2308,{_id: 30399,str: "Drive Money Market Account",num: 7306,date: new Date("2018-09-06T01:17:55.515Z"),array: []},new Date("2018-09-06T00:37:19.232Z"),{_id: 30400,str: "intangible synergy",num: 82231,array: [],obj: {_id: 30401,num: 86908,date: new Date("2018-09-06T13:26:00.895Z"),array: [],obj: {}}},new Date("2018-09-06T09:55:39.808Z"),new Date("2018-09-05T21:00:15.714Z"),[],6971,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30402,str: "Compatible",num: 41790,date: new Date("2018-09-05T20:14:28.621Z"),array: ["visualize alliance",80478,{_id: 30403,str: "Customer Cross-group forecast",num: 87494,date: new Date("2018-09-06T15:28:13.542Z"),array: [],obj: {_id: 30404,str: "deposit",date: new Date("2018-09-06T05:45:56.725Z"),obj: {}}},new Date("2018-09-06T19:24:11.385Z"),"Uganda Shilling Team-oriented","red architect",new Date("2018-09-05T21:43:01.734Z"),25477,new Date("2018-09-06T03:41:44.946Z"),{_id: 30405,num: 12141,date: new Date("2018-09-06T14:47:42.582Z"),obj: {}},[77674,"ADP SQL",new Date("2018-09-05T22:55:48.933Z")],44722],obj: {_id: 30406,str: "American Samoa channels Representative",num: 95703,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30407,str: "plum Cross-platform port",num: 55277,date: new Date("2018-09-06T17:40:06.691Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30408,str: "Euro orchestrate Operations",num: 20784,date: new Date("2018-09-06T03:08:54.983Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30409,str: "Ports Applications",num: 29352,date: new Date("2018-09-06T01:09:51.843Z"),array: [10626,{_id: 30410,str: "generate",num: 23458,date: new Date("2018-09-06T15:27:20.436Z"),array: ["metrics Fish sky blue","Ergonomic Metal Pizza tan",[]],obj: {_id: 30411,str: "holistic Bedfordshire",num: 12067,date: new Date("2018-09-06T00:51:56.143Z"),array: [new Date("2018-09-06T09:26:10.753Z"),"Borders navigating Shore"]}},34608,85116,new Date("2018-09-06T17:26:10.808Z"),{_id: 30412,obj: {}},"invoice",[],{_id: 30413,str: "efficient Netherlands Antilles Oregon",num: 57159,date: new Date("2018-09-06T07:30:10.649Z"),array: [],obj: {}},1917,new Date("2018-09-06T14:33:01.333Z"),new Date("2018-09-06T04:23:35.684Z"),{_id: 30414,str: "Bedfordshire",date: new Date("2018-09-05T21:46:54.136Z"),array: [new Date("2018-09-06T11:25:15.761Z"),new Date("2018-09-06T00:50:04.314Z"),35984],obj: {_id: 30415,array: [],obj: {_id: 30416,str: "Tasty panel Innovative",num: 1800,date: new Date("2018-09-05T21:44:08.058Z"),array: []}}}]});
    },

    function(coll) {
        return coll.insert({_id: 30417,str: "motivating generate Mississippi",num: 86780,date: new Date("2018-09-06T11:33:26.972Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30418,str: "deposit SCSI",num: 13128,array: [],obj: {_id: 30419,str: "Plastic Usability",num: 43615,date: new Date("2018-09-06T17:29:29.501Z"),obj: {_id: 30420,str: "South Carolina lavender Data",date: new Date("2018-09-06T13:33:42.608Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30421,str: "reintermediate Response Ergonomic Frozen Cheese",num: 27627,date: new Date("2018-09-06T13:07:15.176Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30422,str: "Persevering Checking Account",num: 47447,date: new Date("2018-09-05T23:59:18.496Z"),array: [28236,new Date("2018-09-05T21:17:40.581Z"),"Forward parse Corner",{_id: 30423,str: "bandwidth",num: 30536,date: new Date("2018-09-06T07:01:51.246Z"),array: [],obj: {}},15927,new Date("2018-09-06T12:51:22.516Z"),new Date("2018-09-06T12:26:37.077Z"),"Hong Kong Dollar Port","transmitter Officer",55061],obj: {_id: 30424,num: 52504,date: new Date("2018-09-05T20:28:38.804Z"),array: [],obj: {_id: 30425,str: "Tasty Fresh Sausages Bolivar Fuerte",num: 78747,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30426,str: "Architect",num: 22726,date: new Date("2018-09-06T00:11:23.186Z"),array: [new Date("2018-09-05T22:59:29.910Z"),63443,"Oklahoma Gorgeous",22781,new Date("2018-09-06T05:00:42.152Z"),"Handcrafted Concrete Chips",[],"Corporate",new Date("2018-09-06T06:39:07.659Z"),[]],obj: {_id: 30427,num: 96596,date: new Date("2018-09-06T16:46:57.438Z"),array: [],obj: {_id: 30428,str: "card deposit Investment Account",num: 14600,date: new Date("2018-09-06T04:17:07.017Z"),array: [{_id: 30429,str: "productize",date: new Date("2018-09-06T10:06:11.226Z"),obj: {}},"Republic of Korea turquoise feed",new Date("2018-09-06T18:30:49.944Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 30430,str: "Gorgeous Fresh Soap",num: 78892,date: new Date("2018-09-06T11:23:41.742Z"),array: [new Date("2018-09-06T00:19:31.489Z"),28780,92579,new Date("2018-09-06T19:53:44.190Z"),[],"Auto Loan Account reintermediate Cuban Peso Peso Convertible",new Date("2018-09-06T09:59:15.806Z"),"yellow Avon SQL",{_id: 30431,num: 22998,array: [3438,28123],obj: {}},"Analyst matrix",{_id: 30432,str: "generate",date: new Date("2018-09-06T17:13:41.017Z"),array: [],obj: {}},13477,"Tennessee",new Date("2018-09-06T17:40:26.703Z")]});
    },

    function(coll) {
        return coll.insert({_id: 30433,str: "turn-key Personal Loan Account",num: 98350,date: new Date("2018-09-06T02:49:04.144Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30434,str: "Christmas Island index HDD",num: 99197,date: new Date("2018-09-06T15:10:39.549Z"),array: [74416,"applications",new Date("2018-09-06T05:53:36.692Z"),"Ball",new Date("2018-09-05T21:33:51.921Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 30435,str: "black input",num: 73863,date: new Date("2018-09-06T05:44:23.675Z"),array: ["Licensed engage Netherlands Antillian Guilder",new Date("2018-09-06T01:41:28.612Z"),11425,[],82723,30935,"quantifying Incredible",new Date("2018-09-06T13:21:09.729Z"),{_id: 30436,str: "extensible Massachusetts",num: 61886,date: new Date("2018-09-06T03:29:08.890Z"),array: [92291,"Facilitator complexity Moroccan Dirham"],obj: {_id: 30437,str: "neural neutral matrix",num: 76377,date: new Date("2018-09-06T07:59:32.361Z"),array: [],obj: {}}},83421,"Oregon"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30438,str: "Oval Tasty Steel Table Fish",num: 56165,date: new Date("2018-09-06T12:12:00.915Z"),array: [new Date("2018-09-06T04:42:20.457Z"),33619,40673,1544,{_id: 30439,str: "Auto Loan Account Rial Omani",array: [],obj: {_id: 30440,str: "Polarised",num: 16863,date: new Date("2018-09-06T10:43:15.199Z"),array: ["Concrete","Libyan Dinar Practical Fresh Pants"],obj: {}}},new Date("2018-09-06T10:49:19.573Z"),"enhance Rubber",[],[new Date("2018-09-06T17:07:36.957Z")],{_id: 30441,str: "Planner",num: 72343,date: new Date("2018-09-06T10:51:30.025Z"),obj: {}},new Date("2018-09-06T18:04:41.336Z"),44815,{_id: 30442,num: 94458,date: new Date("2018-09-06T10:55:57.342Z"),array: []},new Date("2018-09-06T17:06:56.686Z")],obj: {_id: 30443,str: "lime Cotton Tasty Steel Pants",num: 76486,date: new Date("2018-09-06T09:57:07.811Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30444,str: "clicks-and-mortar Organized",date: new Date("2018-09-05T21:53:23.428Z"),array: ["Ball attitude-oriented",223,new Date("2018-09-06T09:47:19.900Z"),"client-server","parsing",new Date("2018-09-06T07:07:33.714Z"),[],new Date("2018-09-06T07:23:13.578Z"),{_id: 30445,str: "Sleek Wooden Fish Frozen",num: 42442,date: new Date("2018-09-06T02:41:03.752Z"),obj: {}},14209,[new Date("2018-09-06T08:43:48.295Z")],39552],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30446,str: "generate asymmetric Producer",num: 38789,date: new Date("2018-09-06T00:59:23.472Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30447,num: 42724,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30448,num: 542,date: new Date("2018-09-05T23:49:24.560Z"),array: [],obj: {_id: 30449,str: "Multi-lateral Health",num: 63941,date: new Date("2018-09-06T10:01:28.824Z"),array: ["TCP Practical Steel Car hard drive",89242,new Date("2018-09-06T01:07:42.660Z"),new Date("2018-09-06T03:23:14.646Z"),86156,"Fantastic","navigating Fantastic Dale",[82467],{_id: 30450,str: "transmitting Seamless neural",num: 92922,array: [],obj: {}},{_id: 30451,num: 47047,date: new Date("2018-09-06T15:15:33.037Z"),array: [],obj: {_id: 30452,str: "South Georgia and the South Sandwich Islands",date: new Date("2018-09-06T00:08:56.735Z"),array: [],obj: {_id: 30453,str: "contingency Investor"}}},new Date("2018-09-06T16:56:32.619Z"),{_id: 30454,date: new Date("2018-09-06T16:30:19.304Z")},[],"software migration Liaison"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30455,str: "Consultant copy Operations",num: 13306,date: new Date("2018-09-05T23:43:12.063Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30456,str: "Unbranded Fresh Table interface",num: 89365,date: new Date("2018-09-06T19:50:54.454Z"),array: [88403,new Date("2018-09-05T22:22:53.140Z"),new Date("2018-09-06T12:32:18.379Z"),"navigate circuit silver",new Date("2018-09-06T04:05:21.560Z"),[],{_id: 30457,str: "haptic Orchestrator",num: 47704,date: new Date("2018-09-06T08:40:11.549Z"),array: ["copying Facilitator Ameliorated",37863,18465,"microchip Estates EXE"],obj: {}},"Handmade embrace Switchable",32573,{_id: 30458,date: new Date("2018-09-06T19:16:33.974Z"),array: [new Date("2018-09-06T16:06:08.840Z"),new Date("2018-09-06T13:57:18.212Z")],obj: {_id: 30459,num: 28426,date: new Date("2018-09-05T20:21:41.701Z"),obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30460,str: "withdrawal compress Direct",num: 7502,array: ["Representative Wells","Engineer Towels",new Date("2018-09-06T06:28:56.677Z"),58289,52785,53339,new Date("2018-09-06T05:28:23.117Z"),"content Oman AGP",14953,new Date("2018-09-06T05:20:28.447Z"),[],new Date("2018-09-06T11:36:04.013Z")]});
    },

    function(coll) {
        return coll.insert({_id: 30461,str: "payment",num: 94927,date: new Date("2018-09-06T16:20:55.965Z"),array: [94894,38441,53078,"experiences",[],"Designer withdrawal Advanced",new Date("2018-09-06T16:02:42.643Z"),35645,"driver back up Neck",{_id: 30462,str: "maximize",num: 99225,date: new Date("2018-09-06T14:06:23.343Z"),array: [new Date("2018-09-06T10:26:11.449Z")]},new Date("2018-09-06T11:24:03.192Z"),{_id: 30463,str: "Steel",num: 84450,date: new Date("2018-09-06T00:21:32.369Z"),array: [],obj: {_id: 30464,num: 74263,date: new Date("2018-09-06T06:37:59.916Z"),obj: {}}},"Music Automotive application"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30465,str: "Orchestrator",num: 61761,date: new Date("2018-09-06T09:21:19.101Z"),array: ["protocol EXE",new Date("2018-09-06T18:32:38.671Z"),58542,[],new Date("2018-09-06T07:58:05.653Z"),{_id: 30466,str: "Persevering Refined Granite Mouse methodical",num: 34637,date: new Date("2018-09-06T17:36:08.782Z"),obj: {_id: 30467,str: "quantifying",date: new Date("2018-09-06T07:46:07.322Z"),array: [new Date("2018-09-06T03:25:28.861Z")],obj: {_id: 30468,str: "Drive Junctions",num: 71603,obj: {}}}},"Balboa US Dollar white","Gorgeous systemic well-modulated",31850,[],49885,[55166,{_id: 30469,num: 48254,date: new Date("2018-09-06T15:23:06.547Z"),array: []}],"backing up panel Shirt",{_id: 30470,date: new Date("2018-09-06T04:27:58.466Z"),array: [new Date("2018-09-06T04:12:55.372Z")]}]});
    },

    function(coll) {
        return coll.insert({_id: 30471,str: "cyan back-end Automated",date: new Date("2018-09-06T16:50:00.163Z"),array: [{_id: 30472,str: "Baby",num: 49985,date: new Date("2018-09-06T00:22:25.803Z"),array: []},{_id: 30473,str: "Rubber magenta",num: 98622,date: new Date("2018-09-06T11:51:36.191Z"),array: [],obj: {_id: 30474,num: 19302,date: new Date("2018-09-05T23:08:17.977Z"),array: [],obj: {}}},"ivory Indiana",new Date("2018-09-06T06:42:26.090Z"),"Car Connecticut",45337,11160,39079],obj: {_id: 30475,str: "web-enabled Plastic",num: 57193,obj: {_id: 30476,date: new Date("2018-09-06T10:46:34.335Z"),array: [new Date("2018-09-06T03:30:56.173Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 30477,str: "plum SQL Cambridgeshire",num: 42037,date: new Date("2018-09-06T12:47:48.344Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30478,str: "generating Books copying",num: 18548,date: new Date("2018-09-06T13:28:54.508Z"),array: [new Date("2018-09-06T10:33:46.584Z"),"Associate Money Market Account",18380,61837,{_id: 30479,date: new Date("2018-09-06T11:07:59.248Z"),array: [],obj: {_id: 30480,str: "Credit Card Account Palladium Sharable",num: 84214,date: new Date("2018-09-06T17:26:10.863Z"),array: [],obj: {}}},new Date("2018-09-06T15:34:44.025Z"),45650,"Buckinghamshire encompassing quantify",{_id: 30481,str: "USB Optimization transition",num: 94160,date: new Date("2018-09-05T21:05:38.769Z"),array: []},{_id: 30482,obj: {}},[],[new Date("2018-09-06T11:21:08.524Z"),new Date("2018-09-06T15:33:28.586Z")]],obj: {_id: 30483,str: "Outdoors Strategist connecting",num: 56769,date: new Date("2018-09-06T11:24:08.823Z"),array: ["compressing",12600]}});
    },

    function(coll) {
        return coll.insert({_id: 30484,str: "navigating Jewelery Future",num: 84329,date: new Date("2018-09-06T04:29:14.474Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30485,str: "override synergies",num: 42304,date: new Date("2018-09-06T06:22:33.217Z"),array: ["Trinidad and Tobago Specialist Security",56814,new Date("2018-09-06T17:25:49.256Z"),{_id: 30486,str: "Expressway ADP bi-directional",num: 94627,array: [],obj: {_id: 30487,num: 43150,date: new Date("2018-09-06T18:39:24.542Z"),array: ["Dynamic action-items",[{_id: 30488,str: "optimizing",num: 8658,date: new Date("2018-09-06T07:36:31.876Z"),array: [],obj: {_id: 30489,str: "Automotive Expanded",date: new Date("2018-09-06T05:45:03.442Z"),array: [new Date("2018-09-06T13:59:44.295Z")],obj: {}}},new Date("2018-09-05T21:34:21.258Z")],"Keyboard Honduras",56708,18821],obj: {}}},10917,{_id: 30490,str: "optimizing",date: new Date("2018-09-06T05:18:34.217Z")},new Date("2018-09-06T13:28:01.890Z"),[],"bypass Tajikistan compressing","Square",new Date("2018-09-06T05:20:08.000Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30491,str: "Handcrafted architecture",num: 95861,date: new Date("2018-09-06T05:47:12.038Z"),array: [],obj: {_id: 30492,str: "orchid",num: 22685,date: new Date("2018-09-06T06:37:28.755Z"),array: [11244,new Date("2018-09-05T20:27:03.095Z"),"dot-com","Generic Metal Gloves",new Date("2018-09-06T12:23:24.542Z"),66764,41931,71626,["Supervisor portals Auto Loan Account"],42044,3947]}});
    },

    function(coll) {
        return coll.insert({_id: 30493,str: "transmitter",num: 96883,date: new Date("2018-09-06T06:22:29.761Z"),array: [],obj: {_id: 30494,str: "Handcrafted HDD Analyst",date: new Date("2018-09-06T11:32:25.585Z")}});
    },

    function(coll) {
        return coll.insert({_id: 30495,str: "Borders",num: 15301,date: new Date("2018-09-06T05:47:12.693Z"),array: ["Auto Loan Account",new Date("2018-09-06T13:45:30.023Z"),66292,"Regional",new Date("2018-09-05T21:29:52.822Z"),54611,"navigate",70433],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30496,str: "IB",num: 5168,date: new Date("2018-09-05T20:17:34.127Z"),array: [],obj: {_id: 30497,num: 21541,array: ["wireless eyeballs silver","Glens",{_id: 30498,str: "New Zealand Dollar",date: new Date("2018-09-06T02:22:13.685Z"),array: [95594,36260,[]]},[new Date("2018-09-06T19:00:24.826Z")],new Date("2018-09-06T04:44:02.121Z"),{_id: 30499,str: "Data e-business Gorgeous Concrete Cheese",array: [],obj: {}},"Devolved Fantastic Lead","Intelligent North Carolina",90038,{_id: 30500,str: "Customer Sausages Paradigm",num: 51709,date: new Date("2018-09-06T17:23:01.066Z"),obj: {_id: 30501,date: new Date("2018-09-06T12:11:24.882Z"),obj: {}}},76626,new Date("2018-09-06T17:40:10.617Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30502,str: "Direct Cotton Group",num: 56561,date: new Date("2018-09-06T17:39:57.846Z"),array: [86627,new Date("2018-09-05T20:49:36.083Z"),"Generic Plastic Computer",24955,{_id: 30503,str: "Plastic Incredible",num: 59381,date: new Date("2018-09-06T18:14:33.793Z"),array: [28252],obj: {_id: 30504,str: "deposit Central",date: new Date("2018-09-06T13:31:20.686Z"),array: ["technologies Strategist connecting",new Date("2018-09-06T12:21:47.912Z"),[]]}},"deliverables white Engineer",new Date("2018-09-06T08:54:58.203Z"),new Date("2018-09-06T07:30:17.160Z"),{_id: 30505,num: 35312,array: [],obj: {_id: 30506,str: "Direct",array: [],obj: {_id: 30507,num: 20300,date: new Date("2018-09-06T12:18:45.828Z")}}},60481,"Jewelery generate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30508,str: "Corporate online",num: 44330,date: new Date("2018-09-06T07:15:43.048Z"),array: [],obj: {_id: 30509,str: "payment",num: 70929,date: new Date("2018-09-06T03:43:04.903Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30510,str: "analyzer",num: 52102,date: new Date("2018-09-05T21:48:22.203Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30511,str: "optical channels New Jersey",num: 97741,date: new Date("2018-09-05T22:51:12.323Z"),array: ["Interactions",new Date("2018-09-06T01:25:17.141Z"),16078,74383,"Wooden Optimized","hack",{_id: 30512,num: 28623,date: new Date("2018-09-06T11:59:28.227Z"),array: [[],55619,new Date("2018-09-06T07:42:21.415Z"),new Date("2018-09-06T03:21:05.230Z"),66199,{_id: 30513,str: "SQL Principal Ergonomic Cotton Salad",num: 8147,date: new Date("2018-09-06T15:00:09.909Z"),array: [51882,[[]],"Syrian Pound bluetooth"],obj: {}},"Consultant"],obj: {_id: 30514,str: "Incredible Concrete Bacon transmitting",date: new Date("2018-09-06T10:17:10.799Z"),array: [],obj: {_id: 30515,num: 17615,array: []}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30516,str: "reboot Garden",num: 83623,date: new Date("2018-09-06T02:14:56.733Z"),obj: {_id: 30517,str: "Enterprise-wide Rubber Pataca",num: 39362,date: new Date("2018-09-05T22:15:36.679Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30518,str: "Villages virtual Cambridgeshire",num: 92721,date: new Date("2018-09-05T20:00:51.816Z"),array: [],obj: {_id: 30519,str: "convergence Alabama",num: 60268,date: new Date("2018-09-06T02:25:22.807Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30520,str: "Universal",date: new Date("2018-09-06T05:24:13.345Z"),array: [],obj: {_id: 30521,num: 87829,date: new Date("2018-09-06T12:28:33.204Z"),array: ["capacity blue",new Date("2018-09-06T10:52:14.430Z"),65327,new Date("2018-09-05T23:38:34.778Z"),new Date("2018-09-06T07:16:20.684Z"),[],57541,new Date("2018-09-06T01:22:39.852Z"),"COM alarm",7174,"reboot Direct Barbados",new Date("2018-09-06T18:19:45.466Z")],obj: {_id: 30522,num: 30949,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30523,str: "compress CFP Franc",num: 72372,date: new Date("2018-09-06T18:54:34.437Z"),array: ["vortals Trinidad and Tobago",89996,new Date("2018-09-06T00:58:05.462Z")],obj: {_id: 30524,str: "copying hard drive Games",num: 98648,date: new Date("2018-09-06T17:51:36.100Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30525,str: "Shoes",num: 5893,date: new Date("2018-09-06T07:28:33.412Z"),array: ["Puerto Rico South Carolina",24510,new Date("2018-09-06T07:41:47.223Z"),[87261,"Bike impactful visualize","Legacy programming Principal",new Date("2018-09-06T14:45:39.385Z"),{_id: 30526,str: "JSON Global New Jersey",date: new Date("2018-09-05T22:20:11.288Z"),array: [],obj: {}}],11145,new Date("2018-09-06T09:23:07.904Z"),"Villages Trinidad and Tobago Dollar Devolved",{_id: 30527,str: "program Malaysia Garden",num: 29130,array: [[{_id: 30528,num: 44135,date: new Date("2018-09-06T05:09:54.880Z"),obj: {_id: 30529,str: "protocol navigating navigate",date: new Date("2018-09-06T01:19:40.890Z"),array: []}},new Date("2018-09-06T00:39:19.639Z")]],obj: {}},{_id: 30530,date: new Date("2018-09-06T06:13:31.753Z"),obj: {}},[],76286]});
    },

    function(coll) {
        return coll.insert({_id: 30531,str: "AI",num: 29362,date: new Date("2018-09-06T15:41:12.246Z"),array: [new Date("2018-09-05T21:42:37.279Z"),27672,"Human Ergonomic Borders","Rhode Island Qatari Rial","Expanded hack","Directives Costa Rica logistical","Directives blue reintermediate",{_id: 30532,str: "Manager cross-platform",num: 46995,date: new Date("2018-09-05T23:39:22.143Z"),array: [],obj: {}}],obj: {_id: 30533,str: "Awesome Wooden Mouse Principal",array: [47927,new Date("2018-09-06T01:07:42.647Z"),82997],obj: {_id: 30534,num: 29381,date: new Date("2018-09-06T00:11:32.776Z"),array: [new Date("2018-09-06T04:35:31.160Z"),new Date("2018-09-06T02:38:04.789Z"),[]],obj: {_id: 30535,str: "Fantastic",array: [{_id: 30536,str: "Grocery",num: 89146,date: new Date("2018-09-06T05:21:00.445Z")}]}}}});
    },

    function(coll) {
        return coll.insert({_id: 30537,str: "Regional transmitting",num: 98440,date: new Date("2018-09-06T05:50:29.453Z"),array: [],obj: {_id: 30538,str: "relationships Soap",num: 20195,date: new Date("2018-09-06T06:34:43.868Z"),array: ["bandwidth Investor Public-key","throughput",23964,new Date("2018-09-05T20:38:19.520Z"),30503,new Date("2018-09-06T01:03:26.603Z"),new Date("2018-09-06T16:08:10.054Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30539,str: "Horizontal synergize",num: 67029,date: new Date("2018-09-06T19:30:19.630Z"),array: [],obj: {_id: 30540,num: 53092,date: new Date("2018-09-05T22:40:24.848Z"),array: [{_id: 30541,str: "orchestrate",num: 65852,date: new Date("2018-09-06T03:24:25.300Z"),obj: {_id: 30542,str: "methodical cyan",num: 64123,date: new Date("2018-09-06T02:15:26.577Z"),array: [],obj: {}}},99128,"Fantastic Fresh Table cross-platform",new Date("2018-09-06T10:21:22.308Z"),"paradigms Tanzania Investment Account",17143,"THX online",[new Date("2018-09-06T04:23:05.844Z"),66491,45373,9049,new Date("2018-09-06T14:56:11.462Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 30543,str: "Brand Dynamic",num: 42140,array: [{_id: 30544,num: 86918,date: new Date("2018-09-06T09:23:30.925Z"),array: [],obj: {}},new Date("2018-09-06T08:45:21.444Z"),49561,9303,["systematic 1080p",[]],new Date("2018-09-05T20:16:02.460Z"),new Date("2018-09-05T22:57:06.168Z"),14623,"South Dakota",41013,"Research",[],"collaborative alarm Dynamic",8412,{_id: 30545,str: "hard drive",date: new Date("2018-09-06T06:26:02.633Z"),array: [],obj: {_id: 30546,str: "solutions sexy Bedfordshire",num: 47365,array: [new Date("2018-09-06T03:27:03.876Z")]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30547,str: "SCSI",num: 65379,array: ["Berkshire policy zero administration",new Date("2018-09-06T10:45:21.381Z"),new Date("2018-09-06T02:50:43.961Z"),new Date("2018-09-06T06:02:02.778Z"),70866,"Beauty users e-business",{_id: 30548,str: "Sleek deposit",num: 5026,date: new Date("2018-09-06T12:20:08.867Z"),array: [[{_id: 30549,str: "Pakistan",num: 31559,date: new Date("2018-09-05T22:21:26.159Z"),obj: {}},55031,new Date("2018-09-06T08:34:37.627Z")],"parsing Vermont","Internal SSL empowering"]},23479,"Infrastructure Inverse",[]]});
    },

    function(coll) {
        return coll.insert({_id: 30550,num: 30774,date: new Date("2018-09-05T20:21:05.907Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30551,str: "Forward",num: 75476,date: new Date("2018-09-06T17:53:51.478Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30552,num: 31214,date: new Date("2018-09-06T17:04:37.959Z"),array: [],obj: {_id: 30553,str: "override reciprocal",date: new Date("2018-09-06T05:32:56.474Z"),array: [],obj: {_id: 30554,str: "bluetooth Forward process improvement",num: 34948,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30555,str: "Home Loan Account",num: 41012,date: new Date("2018-09-06T13:23:56.710Z"),array: [],obj: {_id: 30556,str: "sky blue Berkshire",date: new Date("2018-09-06T00:36:54.851Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30557,str: "Unbranded Metal Table",num: 31106,date: new Date("2018-09-05T23:56:15.829Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30558,str: "ADP Utah",num: 82574,date: new Date("2018-09-06T15:34:20.034Z"),array: [new Date("2018-09-06T07:32:05.076Z"),"uniform Operations","calculate",69054,new Date("2018-09-06T17:40:56.243Z"),"Berkshire cross-platform",{_id: 30559,str: "Intelligent",num: 3437,array: [],obj: {}},31389,"optimize Malagasy Ariary Direct",[],29271]});
    },

    function(coll) {
        return coll.insert({_id: 30560,str: "Accounts Borders B2B",num: 77494,date: new Date("2018-09-06T06:12:33.018Z"),array: [93206,"withdrawal revolutionize","approach",92484,new Date("2018-09-06T10:05:28.533Z"),"Station",new Date("2018-09-06T04:00:15.360Z"),25737,75406,["cross-media Wooden Facilitator",[]],new Date("2018-09-06T05:32:40.033Z"),new Date("2018-09-05T23:29:59.652Z")],obj: {_id: 30561,str: "web services THX Savings Account",date: new Date("2018-09-05T20:53:21.023Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30562,str: "Rubber global lime",date: new Date("2018-09-06T02:37:42.209Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30563,str: "Avon deposit monitor",num: 85194,date: new Date("2018-09-06T07:36:29.538Z"),array: [new Date("2018-09-06T15:07:32.603Z"),[],new Date("2018-09-06T14:24:31.357Z"),[47093],38657,{_id: 30564,str: "solid state value-added Intelligent",num: 33627,array: [48761],obj: {}},"Cotton Chief synthesizing","Internal Avon IB",{_id: 30565,str: "zero tolerance",date: new Date("2018-09-06T08:28:31.731Z"),array: []},new Date("2018-09-05T20:44:13.699Z"),"EXE Ukraine indexing",{_id: 30566,num: 2508,date: new Date("2018-09-06T19:39:33.344Z"),obj: {_id: 30567,str: "Mountains Incredible",date: new Date("2018-09-06T17:36:48.715Z"),obj: {_id: 30568,str: "Monitored",num: 28993,array: [new Date("2018-09-06T01:41:08.957Z"),24532],obj: {}}}},"Human",48696],obj: {_id: 30569,date: new Date("2018-09-06T12:17:14.351Z")}});
    },

    function(coll) {
        return coll.insert({_id: 30570,str: "Benin Sleek Cotton Pizza",num: 221,date: new Date("2018-09-06T09:25:08.164Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30571,str: "Ergonomic bypass Investor",num: 57239,date: new Date("2018-09-06T15:58:02.579Z"),array: [],obj: {_id: 30572,num: 38668,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30573,str: "strategic",num: 27344,date: new Date("2018-09-05T20:27:21.053Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30574,str: "networks Intelligent Concrete Pizza front-end",num: 23515,date: new Date("2018-09-06T09:11:13.127Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30575,date: new Date("2018-09-06T00:52:54.918Z"),array: ["Industrial Gloves",new Date("2018-09-06T07:53:41.209Z"),"program",new Date("2018-09-06T00:32:18.319Z"),[],55845,new Date("2018-09-06T08:05:01.535Z"),{_id: 30576,str: "Cheese",num: 86307,array: [{_id: 30577,str: "PNG Land Wyoming",num: 11356,date: new Date("2018-09-06T13:01:01.088Z"),array: [],obj: {}},8505,[new Date("2018-09-06T01:40:36.006Z"),[]],33574,"Internal copying Re-engineered"],obj: {}},"SMS"]});
    },

    function(coll) {
        return coll.insert({_id: 30578,str: "Tennessee Bedfordshire Accountability",num: 44949,date: new Date("2018-09-05T21:54:59.053Z"),array: ["CSS sky blue Front-line",3627,new Date("2018-09-05T23:29:36.698Z"),"SQL",45524,new Date("2018-09-06T07:34:12.303Z"),new Date("2018-09-06T09:50:36.810Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30579,str: "Engineer bandwidth",num: 13823,date: new Date("2018-09-06T08:13:11.033Z"),obj: {_id: 30580,str: "Bacon Licensed Frozen Chicken",date: new Date("2018-09-06T12:20:19.795Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30581,str: "Re-contextualized",num: 51895,date: new Date("2018-09-06T09:27:07.999Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30582,str: "Wooden Vietnam",num: 16703,date: new Date("2018-09-06T07:51:35.280Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30583,str: "Cotton Wooden",num: 70268,date: new Date("2018-09-06T03:30:26.525Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30584,str: "Washington Personal Loan Account Avon",num: 4097,date: new Date("2018-09-06T02:28:05.644Z"),array: [],obj: {_id: 30585,str: "Liaison Arizona",num: 60182,date: new Date("2018-09-06T15:59:59.120Z"),array: [new Date("2018-09-06T06:53:22.358Z"),86872,"maximize",new Date("2018-09-06T18:30:38.212Z"),"Benin Computer",{_id: 30586,str: "Albania",num: 93441,array: [],obj: {}},new Date("2018-09-06T03:28:53.318Z"),new Date("2018-09-06T04:13:34.800Z"),"modular",94092,12669,{_id: 30587,str: "transmit",array: [77256,{_id: 30588,date: new Date("2018-09-06T16:26:52.999Z"),array: ["deploy",[]],obj: {}}],obj: {}}],obj: {_id: 30589,num: 68897,date: new Date("2018-09-06T00:05:41.807Z"),obj: { _id: 30590 }}}});
    },

    function(coll) {
        return coll.insert({_id: 30591,str: "Togo Movies",num: 62421,date: new Date("2018-09-06T14:52:36.314Z"),array: [59707,"program",["Costa Rica Forint Pound Sterling",new Date("2018-09-06T16:06:26.793Z")],97014,72692,62601,["Chicken Berkshire"],"Fantastic solutions Cambridgeshire",new Date("2018-09-06T01:33:19.954Z"),"Garden partnerships",44869,[{_id: 30592,num: 58152,date: new Date("2018-09-06T17:20:59.951Z"),array: [],obj: {_id: 30593,str: "Officer",date: new Date("2018-09-06T16:07:31.404Z"),obj: {}}},new Date("2018-09-06T03:28:01.504Z"),new Date("2018-09-06T16:32:07.740Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 30594,str: "indexing",num: 40406,date: new Date("2018-09-06T18:55:43.522Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30595,str: "interface",num: 46836,date: new Date("2018-09-06T10:02:24.114Z"),array: ["Parkway",64746,new Date("2018-09-05T20:22:18.725Z"),"Tuna convergence",new Date("2018-09-06T14:51:45.166Z"),"Chair pink",59019,new Date("2018-09-06T12:25:16.962Z"),{_id: 30596,num: 31734,date: new Date("2018-09-06T03:09:51.844Z"),array: [],obj: {_id: 30597,str: "Corporate magenta",num: 20245,array: ["Shoal"],obj: {_id: 30598,str: "card generate Gorgeous",date: new Date("2018-09-06T15:15:15.696Z"),obj: {_id: 30599,str: "cutting-edge",num: 47655,array: [],obj: {}}}}},{_id: 30600,str: "microchip Administrator",num: 17429,date: new Date("2018-09-06T12:59:37.065Z")},new Date("2018-09-06T11:28:24.134Z"),[new Date("2018-09-06T09:51:58.889Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 30601,str: "platforms 1080p Incredible",num: 28037,date: new Date("2018-09-06T12:21:25.653Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30602,str: "HDD multimedia",num: 81932,date: new Date("2018-09-06T07:02:43.129Z"),array: [],obj: {_id: 30603,str: "Flats grey",num: 23479,date: new Date("2018-09-06T08:15:14.971Z"),array: [new Date("2018-09-06T19:05:57.353Z"),74845,[],new Date("2018-09-06T00:00:50.882Z"),85729,new Date("2018-09-06T06:34:33.444Z"),"input Graphical User Interface networks","withdrawal","whiteboard programming Turnpike",{_id: 30604,str: "3rd generation Rest",num: 78848,date: new Date("2018-09-06T07:55:55.208Z"),array: [[34077],95842,"Personal Loan Account dot-com",new Date("2018-09-06T00:17:28.425Z")],obj: {}},new Date("2018-09-06T16:43:17.516Z"),new Date("2018-09-06T03:24:54.904Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30605,str: "circuit",num: 62006,date: new Date("2018-09-06T06:28:49.623Z"),array: [],obj: {_id: 30606,date: new Date("2018-09-06T09:47:13.626Z"),array: ["Minnesota International","withdrawal",52509,new Date("2018-09-05T20:43:35.963Z"),new Date("2018-09-06T05:20:20.940Z"),"indigo Chair",21108,"copy Front-line navigating"]}});
    },

    function(coll) {
        return coll.insert({_id: 30607,str: "withdrawal synthesize Refined",num: 43710,date: new Date("2018-09-06T04:57:06.607Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30608,str: "convergence virtual",num: 58236,date: new Date("2018-09-06T11:30:39.580Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30609,str: "Table EXE",num: 20773,date: new Date("2018-09-06T15:25:33.918Z"),array: [85379,new Date("2018-09-06T15:56:18.640Z"),"Shoes bluetooth Uganda Shilling",{_id: 30610,str: "Producer Movies Personal Loan Account",num: 61031,date: new Date("2018-09-06T12:32:43.214Z"),array: [],obj: {_id: 30611,num: 8491,date: new Date("2018-09-06T16:27:11.316Z"),array: [],obj: {}}},"Right-sized",53182,"Personal Loan Account",{_id: 30612,obj: {}},90343,8934,new Date("2018-09-05T23:13:01.780Z"),new Date("2018-09-05T22:19:46.491Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30613,str: "Louisiana Handcrafted",num: 19457,date: new Date("2018-09-06T06:18:42.061Z"),obj: {_id: 30614,str: "CSS",date: new Date("2018-09-05T22:32:28.058Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30615,str: "Yuan Renminbi invoice Ameliorated",num: 61650,date: new Date("2018-09-06T09:15:53.998Z"),array: [88435,"Virginia Phased",new Date("2018-09-05T20:43:13.843Z"),"Shore",{_id: 30616,str: "AGP Handmade Rubber Shirt Dominican Peso",num: 6386,date: new Date("2018-09-05T21:22:56.754Z"),array: [54448],obj: {_id: 30617,str: "impactful Bike",date: new Date("2018-09-06T05:26:12.077Z"),array: [],obj: {}}},[new Date("2018-09-05T22:07:18.421Z"),"Soft Configurable",new Date("2018-09-06T08:39:40.881Z")],79593,51609,new Date("2018-09-06T16:05:28.852Z"),["Innovative"],[],{_id: 30618,num: 30926,array: [],obj: {_id: 30619,str: "invoice",num: 90655,date: new Date("2018-09-06T02:53:45.938Z"),obj: {_id: 30620,str: "Toys parse",num: 45437,date: new Date("2018-09-06T14:56:30.393Z"),array: [],obj: {_id: 30621,str: "transmit benchmark",date: new Date("2018-09-06T12:46:42.691Z")}}}},{_id: 30622,num: 5614,date: new Date("2018-09-06T04:23:02.788Z"),array: [new Date("2018-09-06T11:55:27.723Z"),new Date("2018-09-06T06:40:20.156Z"),"end-to-end"],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 30623,str: "Practical uniform",num: 60981,date: new Date("2018-09-06T06:30:04.057Z"),array: ["Azerbaijanian Manat monitoring Serbia","invoice white navigate",70882,19700,"Myanmar Self-enabling",new Date("2018-09-06T11:02:55.902Z"),new Date("2018-09-06T16:22:09.971Z"),{_id: 30624,str: "Robust",num: 84896,date: new Date("2018-09-06T11:25:09.909Z"),array: [[],38569],obj: {_id: 30625,str: "Operations",date: new Date("2018-09-06T04:00:48.927Z"),array: []}},[],new Date("2018-09-06T02:00:53.044Z"),74410],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30626,str: "Auto Loan Account",num: 30570,date: new Date("2018-09-06T08:26:54.699Z"),array: [new Date("2018-09-06T15:12:56.926Z"),new Date("2018-09-06T09:52:59.534Z"),81413,"black",{_id: 30627,str: "HTTP Oregon",num: 18127,date: new Date("2018-09-06T08:05:45.038Z"),array: [new Date("2018-09-06T14:29:53.440Z"),"Lithuania",[],48929,"Senior",35795]},32095],obj: {_id: 30628,date: new Date("2018-09-05T21:24:12.034Z"),array: [],obj: {_id: 30629,str: "Functionality",num: 8379}}});
    },

    function(coll) {
        return coll.insert({_id: 30630,str: "Buckinghamshire open-source primary",num: 11639,date: new Date("2018-09-06T17:59:43.840Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30631,str: "quantify",num: 75259,date: new Date("2018-09-06T14:19:32.405Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30632,str: "Buckinghamshire",num: 5137,date: new Date("2018-09-06T15:50:29.936Z"),array: [],obj: {_id: 30633,str: "Iran programming Codes specifically reserved for testing purposes",num: 74520,date: new Date("2018-09-06T08:02:42.437Z"),array: [],obj: {}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $minute: { $dateToString: {date: '$date',timezone: "Etc/UTC",onNull: { $arrayToObject: [[{k: "neural-net",v: new Date("2018-09-06T07:28:31.804Z")}]] }} } }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.str',chars: "back-end Jordan"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.str'],["generate HTTP solutions"],["Tanzania disintermediate Malaysia"],['$obj.obj.num','$num']]] }, _id: 0}}],

        [{$project: {a: { $minute: { $toDate: { $dateFromString: {dateString: "2018-09-06T17:00:38.580Z",timezone: "America/Ensenada",onError: { $second: new Date("2018-09-06T16:54:11.422Z") }} } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoDayOfWeek: { $dateToParts: { date: { $dayOfMonth: { $isoWeekYear: { $isoWeek: { $isoWeekYear: { $year: new Date("2018-09-05T21:12:01.433Z") } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substr: ["Direct",19,3] } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToString: {date: '$obj.date',format: "%%-%Y-%U-%S-%Y-%m"} },timezone: "America/Caracas",onNull: { $toLower: "Chicken feed" }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',3,10] }, _id: 0}}],

        [{$project: {a: { $week: { $hour: { $millesecond: { $dateFromParts: {year: { $ceil: '$obj.obj.obj.obj.num' },month: { $cmp: [{ $ltrim: { input: '$obj.obj.str' } },{ $arrayToObject: [[[],[21660],["Buckinghamshire",'$obj.obj.obj.str'],["throughput customer loyalty"],[15906]]] }] },hour: { $ceil: '$obj.num' },minute: { $cmp: [{ $dateToString: {date: { $isoDayOfWeek: { $hour: { $dayOfMonth: { $isoWeek: { $dayOfMonth: '$obj.date' } } } } },format: "%%-%G-%G-%L-%H-%U",timezone: "Africa/Juba",onNull: { $arrayElemAt: [[{ $substrBytes: ["transmit",17,8] },new Date("2018-09-06T08:26:40.023Z"),{ $trim: { input: { $toString: { $objectToArray: '$obj' } } } }],'$num'] }} },{ $arrayToObject: [[[],[{ $concat: [] },'$obj.str','$str']]] }] },second: { $size: [[]] },timezone: "Pacific/Guadalcanal"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$obj.num'],95304] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num'],[],[{ $substrBytes: ['$str',19,8] },"Licensed"],["frame best-of-breed"],[{ $trunc: 94987 },'$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $substrCP: ["violet Home",18,10] },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Planner" } }, _id: 0}}],

        [{$project: {a: { $second: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T00:15:35.026Z"),format: "%u-%j-%%-%z-%Z-%V-%U-%M",timezone: "America/Managua",onNull: { $substrCP: [{ $toUpper: { $concat: [{ $toString: { $trim: { input: "Avon Small Global" } } },"Lead Fresh",'$str',"withdrawal","Tools Virgin Islands, U.S.",'$obj.str','$obj.str'] } },16,19] }} } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $hour: { $second: { $dayOfYear: { $week: { $year: new Date("2018-09-06T10:58:38.053Z") } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substrCP: ["Intranet Path monetize",8,18] } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfYear: { $second: { $second: { $dayOfYear: { $toDate: { $range: [8,15] } } } } } },format: "%j-%S-%z-%U-%w",timezone: "Asia/Srednekolymsk",onNull: { $arrayElemAt: [[{ $dateToString: {date: '$date',format: "%w-%m-%G-%u-%%-%G-%H-%Z-%j-%G"} }],78693] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Developer" } }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfMonth: { $dateFromString: { dateString: "2018-09-06T08:45:33.990Z" } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Integration IB pixel",v: new Date("2018-09-06T05:14:15.776Z")},{k: "auxiliary one-to-one",v: true},{k: "Incredible Fresh Sausages Factors experiences",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $concat: [{ $ltrim: {input: "Agent Tanzanian Shilling digital",chars: "Refined Concrete Bike United Kingdom Senior"} },{ $toString: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }] },"Cotton end-to-end Granite",'$obj.obj.obj.str'],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["optimize Baby Licensed Rubber Hat","Gorgeous Wooden Mouse Jewelery"],[7218],[],[],['$num']] }, _id: 0}}],

        [{$project: {a: { $range: [11,19,6] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Refined Fresh Pizza Dalasi Licensed Metal Table","Tuna"]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[58367,'$obj.obj.obj.obj.num'],[],['$str',"open-source"],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'marquis',cond: { $isArray: [{ $arrayElemAt: [[],'$num'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',1,10] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $minute: { $dateFromParts: {year: { $abs: 67588 },day: { $log10: '$obj.obj.num' },minute: { $exp: 8084 },second: { $log: ['$obj.num','$obj.obj.obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[73815],['$str',{ $toString: { $reverseArray: [[]] } }],['$num','$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $range: [13,5,5] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $hour: { $hour: { $year: { $isoDayOfWeek: { $dayOfMonth: { $dayOfYear: { $dayOfWeek: { $year: { $dateFromString: {dateString: "2018-09-06T13:29:48.948Z",format: "%j-%%-%H-%j-%M-%S-%z-%U-%%-%L-%S"} } } } } } } } } },timezone: "Africa/Douala",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str'],cond: { $eq: [{ $arrayToObject: [[{k: "copy infomediaries",v: 90133},{k: "bypass",v: true},{k: "Generic Plastic Gloves service-desk",v: { $ltrim: { input: '$$this' } }}]] },{ $trim: {input: { $substrBytes: [{ $substr: ["productivity cross-media",11,10] },8,19] },chars: { $trim: {input: "Steel Product",chars: '$str'} }} }] }} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $toString: { $zip: { inputs: [["Unions",'$obj.obj.obj.str'],[],[{ $substrBytes: ['$obj.str',4,20] },'$obj.obj.obj.str',"Intelligent"],[{ $dateToString: {date: new Date("2018-09-06T17:25:53.762Z"),onNull: { $arrayToObject: [[[27036,73991]]] }} },true,'$obj.obj.num'],['$obj.obj.obj.str'],[]] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[6165],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str']]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $hour: { $millesecond: { $dayOfWeek: { $dateToParts: { date: { $dateFromString: {dateString: "2018-09-05T19:56:19.025Z",timezone: "Canada/Mountain",onNull: { $toString: { $isoWeek: { $isoDayOfWeek: '$obj.obj.obj.date' } } }} } } } } } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfMonth: { $month: { $hour: new Date("2018-09-06T16:28:36.228Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $exp: 19617 },72402],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ['$str',{ $substr: ['$obj.obj.obj.str',17,3] }] }],[{ $cmp: [{ $arrayToObject: [[["deposit compress generate"],["matrix"],[]]] },{ $arrayElemAt: [['$obj.obj.obj.num'],7853] }] }]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T09:08:24.027Z"),onNull: { $rtrim: { input: '$obj.obj.str' } }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $not: [{ $arrayToObject: [[[15180],[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $toUpper: "backing up open-source Generic Concrete Pizza" }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.obj.date',timezone: "America/North_Dakota/Beulah",onNull: { $arrayToObject: [[{k: "enable",v: '$obj.obj.obj.num'}]] }} }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $substrBytes: [{ $dateToString: {date: new Date("2018-09-06T18:39:08.235Z"),format: "%S-%U-%w-%S-%d-%d-%z-%u-%m"} },9,8] },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.obj.num','$num'],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfYear: { $minute: { $year: { $isoWeek: { $dayOfWeek: new Date("2018-09-06T04:38:31.484Z") } } } } } }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfWeek: { $minute: { $isoDayOfWeek: { $month: { $dayOfYear: { $dateToParts: { date: { $year: { $dateFromParts: {isoWeekYear: { $abs: '$obj.num' },minute: { $mod: ['$obj.obj.obj.obj.num','$num'] },second: { $sqrt: { $indexOfArray: [{ $range: [17,17,18] },{ $toLower: '$obj.obj.obj.str' },13] } },millisecond: { $pow: [54474,38578] }} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["circuit Bike","Andorra"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[5201,'$obj.num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $trim: {input: { $substr: ["deposit Ergonomic",9,0] },chars: { $substrCP: ["SMTP",2,5] }} }],72198] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["Savings Account Rwanda Franc Home Loan Account",{ $substr: ['$str',3,1] }],['$num','$obj.obj.obj.str'],["Avon","Bosnia and Herzegovina SQL Auto Loan Account"],['$obj.obj.num',97494,84429]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],14723] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Home Loan Account sensor",{ $substrCP: ["Central Parks",2,19] },'$obj.obj.str'],as: 'estel',cond: { $eq: [{ $arrayToObject: [[{k: "local",v: { $week: { $dateToParts: { date: { $dayOfMonth: { $second: { $week: { $isoWeek: { $toDate: { $concat: [{ $trim: {input: { $toString: { $arrayElemAt: [['$obj.obj.num','$$estel'],'$$estel'] } },chars: '$$estel'} }] } } } } } } } } }}]] },{ $dateToParts: {date: { $minute: { $dayOfYear: { $dateToString: {date: new Date("2018-09-06T04:04:59.311Z"),format: "%d-%S-%M-%U-%V-%L-%w",timezone: "Etc/GMT-2"} } } },timezone: "Indian/Mauritius",iso8601: false} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Djibouti Franc Orchestrator Soap"],[29683,12661]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[53270,false],20242] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Serbia wireless",v: '$obj.str'},{k: "incentivize e-business Grocery",v: '$obj.date'},{k: "deposit Tasty Frozen Shirt",v: 72962}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num',9403],98687] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromParts: {isoWeekYear: 62304,isoDayOfWeek: { $sqrt: 54763 }} } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$str'],as: 'dane',cond: false} }, _id: 0}}],

        [{$project: {a: { $toDate: { $toString: { $arrayToObject: [[{k: "indexing Total",v: '$obj.obj.num'}]] } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.str',chars: { $rtrim: {input: "Shirt deposit Credit Card Account",chars: "parse Frozen"} }} }, _id: 0}}],

        [{$project: {a: { $minute: { $year: { $dateFromString: {dateString: "2018-09-06T01:01:18.375Z",onError: { $arrayElemAt: [[],'$obj.obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.obj.str',chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [99388],in: { $ln: 71451 }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[2922,'$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "AI throughput",chars: { $dateToString: {date: '$date',timezone: "America/Regina"} }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: true} }, _id: 0}}],

        [{$project: {a: { $range: [6,6] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Usability SDD" } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],defaults: [[{},76867,"applications plum"]]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',75434,50269],{ $subtract: ['$obj.obj.obj.num',{ $exp: '$obj.obj.obj.obj.num' }] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],78286] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],[],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'kaleb',cond: { $lt: [{ $arrayToObject: [[['$$kaleb','$$kaleb',"end-to-end"],['$obj.obj.num','$$kaleb'],[{ $substrCP: [{ $substrBytes: ["system engine",2,17] },1,5] },'$obj.obj.obj.str']]] },{ $reverseArray: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num',68768,'$obj.obj.obj.num'],['$obj.obj.obj.str',"Money Market Account Garden"],[{ $substrCP: [{ $trim: {input: '$str',chars: "Communications Shirt"} },4,14] }],['$str',"hack","Checking Account payment",'$obj.obj.str',{ $dateToString: {date: new Date("2018-09-06T01:35:17.368Z"),format: "%z-%M-%w-%z-%U-%G-%j-%V-%M-%m-%u",timezone: "Australia/Yancowinna"} }],[88509,'$obj.obj.obj.obj.date'],[88713]]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[],[58082,98975]]] } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: '$obj.obj.date',timezone: "Asia/Kolkata",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "data-warehouse Metal Sri Lanka" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $week: { $dayOfWeek: '$obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $concat: ["Plastic Indian Rupee Ngultrum"] },"Metal firmware"],99334] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[22249],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toString: { $millesecond: { $isoWeekYear: { $millesecond: { $toDate: { $arrayElemAt: [['$obj.obj.obj.str'],57238] } } } } } },2,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Open-source Costa Rica communities",v: "Handmade Personal Loan Account Tasty Soft Shirt"},{k: "array Tonga",v: '$obj.obj.obj.num'},{k: "input synergies leverage",v: false}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $minute: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T03:45:18.400Z",onError: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] },onNull: { $ltrim: {input: "CSS cultivate",chars: { $rtrim: { input: { $toLower: '$obj.str' } } }} }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Keyboard Rustic Cotton Pants Cambridgeshire",{ $ltrim: { input: '$obj.str' } }],{ $floor: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],58820] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $ln: 10298 }} }, _id: 0}}],

        [{$project: {a: { $toString: { $filter: {input: ["Mayotte quantifying Handmade Plastic Table"],as: 'vicenta',cond: { $isArray: [{ $concatArrays: [['$obj.num'],[],[{ $substrBytes: ['$obj.obj.str',0,16] }],[]] }] }} } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $substrBytes: ["1080p cross-platform",14,15] }]] }, _id: 0}}],

        [{$project: {a: { $concat: ["deposit yellow Human","New Hampshire Borders Human"] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $second: { $isoWeek: '$date' } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],[],['$obj.num',3150],['$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "grow Practical Soft Bacon",v: false}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrCP: ["sky blue",19,0] }] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[26443,32252,'$obj.obj.obj.num'],69041] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-06T03:27:49.712Z",timezone: "Asia/Makassar",onError: { $arrayToObject: [[{k: "Grocery Kenyan Shilling Organized",v: "Liaison"}]] }} } }, _id: 0}}],

        [{$project: {a: { $substr: ["Well",20,11] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Generic",'$obj.obj.str'],[{ $toUpper: '$obj.obj.obj.str' },{ $ltrim: {input: '$str',chars: '$obj.str'} }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToString: { date: new Date("2018-09-06T15:56:13.138Z") } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[90971]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfMonth: { $second: { $dateToString: {date: { $month: { $toDate: { $hour: { $week: { $second: { $dateFromString: {dateString: "2018-09-06T04:54:40.681Z",format: "%Y-%Y-%z-%j-%u-%%-%S",timezone: "Asia/Dushanbe",onError: { $arrayToObject: [[["Books"],['$obj.num','$obj.obj.num',70542],[{ $ltrim: { input: { $substr: ['$obj.obj.obj.str',15,3] } } },"wireless"]]] },onNull: { $concat: ['$str','$obj.str'] }} } } } } } },format: "%u-%G-%S-%L-%%",onNull: "Associate deliverables"} } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "asynchronous" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Optimization calculating",v: new Date("2018-09-06T01:55:54.780Z")},{k: "Refined Specialist",v: { $substrBytes: ["withdrawal",18,18] }}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "bus" }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str'],cond: { $eq: [{ $map: {input: [],in: { $log10: 28265 }} },{ $rtrim: { input: { $substrBytes: ["teal",15,14] } } }] }} }, _id: 0}}],

        [{$project: {a: { $toUpper: "Cheese alliance uniform" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],58346] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toLower: "payment" }, _id: 0}}],

        [{$project: {a: { $year: { $isoDayOfWeek: { $dayOfMonth: { $minute: { $dateToString: {date: '$obj.obj.date',format: "%j-%u-%M-%V-%m-%H-%S-%G-%U-%j-%u",timezone: "Asia/Calcutta"} } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["New Taiwan Dollar revolutionary Generic",17,5] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToString: { date: { $dayOfWeek: new Date("2018-09-06T13:57:12.650Z") } } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: { $isoDayOfWeek: { $year: new Date("2018-09-06T04:40:31.796Z") } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',{ $ceil: 20759 }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Investment Account",v: new Date("2018-09-06T16:32:02.647Z")},{k: "clear-thinking Internal",v: 38111},{k: "withdrawal SSL",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ['$obj.str'] },'$str',{ $substr: ["TCP web-readiness",19,6] }],16096] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $toDate: { $dayOfMonth: { $toDate: { $objectToArray: '$obj' } } } },format: "%Z-%L-%z-%%-%V-%G-%d-%u-%j-%Z-%%-%j",timezone: "America/Grenada",onNull: "input"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $filter: {input: ['$obj.obj.obj.str'],as: 'dawn',cond: { $isArray: [{ $trim: {input: '$str',chars: "Paradigm"} }] }} } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num'],in: { $exp: 78905 }} }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "orchestrate",v: { $dateFromParts: {year: { $trunc: { $mod: [73558,'$num'] } },day: { $ceil: 16466 },hour: { $pow: ['$obj.num',19219] },second: { $floor: '$num' },timezone: "Asia/Jakarta"} }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Djibouti Franc",v: 25367},{k: "Agent",v: "analyzer Checking Account"}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeek: { $dayOfMonth: { $millesecond: { $isoDayOfWeek: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T00:11:37.316Z",onError: { $arrayElemAt: [[],'$obj.obj.num'] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[['$num'],[58783],[66648,68895,25811],[],[{ $ltrim: { input: "Coordinator Outdoors" } },"streamline"]]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Uzbekistan Sum online",{ $toLower: '$obj.obj.obj.str' },{ $toUpper: { $substrCP: ["South Dakota Corporate Pizza",2,1] } }],[],[{ $add: [] },60818,'$obj.num'],['$obj.str','$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T20:49:42.224Z",format: "%V-%L-%Z-%U-%z-%Y-%%-%u",timezone: "Africa/Djibouti"} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $lte: [{ $arrayElemAt: [[{ $substrBytes: ["Switchable hybrid Mobility",15,11] },{ $substr: ['$obj.obj.obj.str',7,17] },'$$this'],{ $pow: ['$num',9810] }] },{ $arrayToObject: [[['$obj.num'],[],['$obj.obj.obj.str'],['$$this',23968],[],[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substrCP: ['$obj.obj.obj.str',9,9] },"green",{ $substrBytes: ['$str',5,11] }],[{ $mod: [12239,'$num'] }],[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toLower: "Guinea lime" } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],80742] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[67598],[],[{ $rtrim: { input: "olive database" } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [{ $dateToString: {date: { $dateFromParts: {year: { $subtract: [{ $divide: ['$obj.num',92954] },39260] },month: 26814,day: { $log: [32094,'$obj.obj.obj.obj.num'] },hour: { $divide: [4950,7562] },millisecond: { $size: [[]] }} },timezone: "Asia/Dhaka",onNull: { $arrayToObject: [[{k: "deposit Dynamic",v: '$obj.obj.num'},{k: "purple calculate Fantastic Concrete Sausages",v: '$obj.obj.obj.obj.num'},{k: "salmon EXE",v: false}]] }} }] },{ $substrBytes: ['$obj.str',14,9] }],{ $subtract: [46976,{ $divide: ['$obj.num','$obj.obj.num'] }] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Kansas input invoice",v: true}]] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromString: {dateString: "2018-09-06T04:33:06.684Z",timezone: "Europe/London"} } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T08:50:19.354Z",onNull: { $toString: { $toString: { $arrayElemAt: [['$obj.obj.obj.num','$obj.obj.num'],56444] } } }} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $year: { $month: { $toDate: { $range: [1,17,3] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num',93856,'$obj.obj.num'],as: 'aurelio',in: { $mod: [63315,'$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $size: [[]] },isoDayOfWeek: { $sqrt: 94131 },hour: { $ceil: 68722 },second: { $ln: '$obj.obj.obj.num' },timezone: "America/Inuvik"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["withdrawal Awesome Frozen",17,10] },'$str',{ $toString: { $substr: ['$str',8,15] } }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["function San Marino Turkmenistan"],81669] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',13,3] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Savings Account initiatives",v: new Date("2018-09-06T03:13:30.968Z")},{k: "Baby explicit",v: 68903}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "copying payment Solutions",v: { $week: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T14:36:55.814Z",timezone: "Atlantic/Faeroe",onError: { $arrayElemAt: [['$obj.obj.str',{ $substr: ["open-source synergize",8,17] }],81336] }} } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Practical Personal Loan Account",v: true}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $trim: {input: "modular copy Concrete",chars: "Forint Soap"} }, _id: 0}}],

        [{$project: {a: { $year: { $hour: '$date' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toString: { $concatArrays: [[],[13157,29726,'$obj.num'],["auxiliary white",{ $rtrim: { input: '$obj.str' } },{ $dateToString: {date: new Date("2018-09-05T19:55:45.525Z"),timezone: "Africa/Asmera",onNull: { $arrayElemAt: [[],'$num'] }} }]] } }],['$date'],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "calculating",v: 15079},{k: "Swiss Franc",v: new Date("2018-09-06T06:13:45.249Z")}]] } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "User-friendly empower Architect",chars: { $dateToString: {date: new Date("2018-09-06T12:00:25.462Z"),timezone: "America/Guadeloupe"} }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $indexOfArray: [{ $objectToArray: '$obj' },{ $arrayToObject: [[["New Mexico",{ $concat: ['$obj.obj.obj.str'] }],[{ $substr: ["Rustic Steel Bacon out-of-the-box",16,0] }],[true,false]]] },14] }] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[26507]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[52740,{ $log10: 72457 },'$obj.obj.obj.num','$obj.obj.obj.obj.num',27069],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $gte: [{ $isoDayOfWeek: { $dayOfWeek: { $dateToParts: {date: { $week: { $minute: { $dateToString: { date: { $toDate: { $arrayToObject: [[{k: "reboot Strategist Savings Account",v: "customized"},{k: "impactful Tennessee navigating",v: 23141}]] } } } } } },iso8601: true} } } },{ $concat: [{ $dateToString: {date: new Date("2018-09-05T21:27:17.741Z"),timezone: "US/Pacific-New",onNull: { $isoWeekYear: { $dayOfMonth: { $second: { $isoWeek: { $dateToParts: { date: { $dateToString: {date: '$obj.obj.obj.obj.date',timezone: "Africa/Asmara",onNull: "didactic"} } } } } } } }} }] }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'roosevelt',in: { $ln: 37229 }} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T05:13:00.082Z",format: "%w-%U-%U-%V-%j-%%-%d",onError: { $trim: {input: "IB relationships",chars: { $substrCP: ['$obj.obj.str',17,17] }} }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'maya',in: { $ln: 59110 }} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: "incubate"} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $not: [{ $toUpper: { $substr: [{ $substrBytes: ["XSS Bike",11,19] },3,9] } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],73437] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "holistic navigate strategize",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["leading-edge payment",{ $dateToString: {date: { $toDate: { $arrayToObject: [[[88845,44771],[],[{ $dateToString: {date: '$obj.obj.obj.obj.date',format: "%Z-%V-%Z-%%-%M-%G",timezone: "Australia/Queensland",onNull: { $ltrim: {input: '$obj.obj.str',chars: "copy"} }} },{ $substrBytes: [{ $toUpper: "indigo Agent" },3,13] }]]] } },format: "%w-%Z-%Y-%L",timezone: "Australia/Melbourne",onNull: "Pants"} }],39528] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',"payment"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account",v: true}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$str',{ $substrBytes: [{ $toLower: '$obj.str' },17,9] }],as: 'clotilde',cond: { $in: [{ $arrayElemAt: [[],{ $sqrt: '$$clotilde' }] },{ $zip: {inputs: [["transmitting process improvement"],[32294],["Refined Granite Chair compressing",{ $substrBytes: ['$obj.str',16,6] },"Hill",'$str','$$clotilde'],["Avon",{ $ltrim: { input: { $concat: ['$$clotilde'] } } }],['$$clotilde']],useLongestLength: false,defaults: [{ array: [] }]} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["Tasty Soft Gloves Comoros back-end",3,15] }],'$obj.obj.num'] }, _id: 0}}],

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
