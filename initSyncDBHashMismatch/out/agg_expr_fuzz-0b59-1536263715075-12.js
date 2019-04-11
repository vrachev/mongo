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
        return coll.insert({_id: 7504,str: "Handcrafted",num: 6040,date: new Date("2018-09-06T18:59:27.127Z"),array: ["Internal Cuban Peso Peso Convertible",95853,[],{_id: 7505,str: "Frozen cross-platform portal",num: 96497,date: new Date("2018-09-06T06:41:57.134Z"),array: [],obj: {}},"fuchsia Cambridgeshire",new Date("2018-09-06T05:45:42.040Z"),new Date("2018-09-06T19:10:18.182Z"),27876,[new Date("2018-09-06T15:14:18.340Z")],{_id: 7506,date: new Date("2018-09-06T16:22:09.387Z"),obj: {_id: 7507,str: "Principal",num: 84651,date: new Date("2018-09-06T08:44:00.963Z"),array: [12942],obj: {_id: 7508,str: "Small Handmade Rubber Fish Hawaii",num: 11791,array: [],obj: {_id: 7509,date: new Date("2018-09-06T04:45:46.969Z"),array: [17258,"Berkshire Practical Steel Tuna CFP Franc",[],"Mauritius Rupee",[]]}}}},new Date("2018-09-06T04:14:19.838Z"),"Direct"],obj: { _id: 7510 }});
    },

    function(coll) {
        return coll.insert({_id: 7511,num: 15956,array: [42625,"Kyrgyz Republic","Metal Assistant generating",5991,new Date("2018-09-06T13:25:46.311Z"),50532,[10461],"architect Norway Specialist",{_id: 7512,str: "Savings Account Savings Account turquoise",num: 56580,date: new Date("2018-09-06T16:58:23.286Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7513,str: "Berkshire",num: 72410,date: new Date("2018-09-05T23:25:50.787Z"),obj: {_id: 7514,str: "next generation Avon input",date: new Date("2018-09-06T01:30:57.703Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7515,str: "Manager Car",num: 44661,date: new Date("2018-09-06T00:51:17.234Z"),array: [],obj: {_id: 7516,str: "ROI AI Borders",num: 32952,date: new Date("2018-09-06T03:22:03.941Z"),array: [69345,[],new Date("2018-09-06T16:20:28.821Z"),"relationships Data",["Product overriding Lithuanian Litas",new Date("2018-09-06T03:56:13.356Z"),97],new Date("2018-09-05T22:21:23.674Z"),"maroon",[],86075,"payment Saint Vincent and the Grenadines pixel",48566],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7517,str: "overriding Cambridgeshire",num: 73707,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7518,str: "Islands SAS",num: 47226,array: [86876,new Date("2018-09-06T08:41:37.938Z"),"programming index Strategist",68335,93531,"Car Licensed",new Date("2018-09-06T15:47:41.187Z"),[new Date("2018-09-05T20:00:20.869Z"),"Dalasi",new Date("2018-09-06T01:47:06.258Z"),new Date("2018-09-06T01:34:47.336Z")]],obj: {_id: 7519,num: 39920,date: new Date("2018-09-05T21:21:26.689Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7520,str: "yellow sensor invoice",num: 59912,date: new Date("2018-09-06T02:06:06.016Z"),array: ["transmit","Causeway",new Date("2018-09-06T10:36:58.576Z"),85252,new Date("2018-09-06T12:13:24.868Z"),new Date("2018-09-06T19:44:34.183Z"),[90342,[],{_id: 7521,str: "Practical Steel Yuan Renminbi",num: 49981,date: new Date("2018-09-06T07:48:08.218Z"),obj: {_id: 7522,str: "success",num: 84564,date: new Date("2018-09-06T19:10:14.307Z"),array: [],obj: {}}},"protocol"]],obj: {_id: 7523,str: "open-source Sausages Handcrafted Concrete Cheese",date: new Date("2018-09-05T21:30:10.321Z"),array: [new Date("2018-09-06T17:30:34.301Z"),"Handmade Steel Keyboard invoice well-modulated",new Date("2018-09-06T12:07:20.707Z"),{_id: 7524,num: 25221,date: new Date("2018-09-06T14:13:59.646Z"),array: [{_id: 7525,str: "Hawaii"}],obj: {}},[],50605,[],"programming"],obj: {_id: 7526,str: "AI frictionless hack",date: new Date("2018-09-06T16:43:17.886Z"),array: [17836],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7527,str: "Granite",num: 27818,date: new Date("2018-09-06T15:41:38.629Z"),array: ["Oregon",15020,23701,[],new Date("2018-09-06T07:38:12.015Z"),new Date("2018-09-06T11:52:48.826Z"),"optical solid state XSS","Oklahoma",76301,new Date("2018-09-06T01:29:40.224Z"),[4641]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7528,num: 48671,date: new Date("2018-09-06T02:50:01.049Z"),array: ["Small",new Date("2018-09-06T08:47:11.140Z"),10301,5472,"South Dakota",{_id: 7529,num: 31417,array: [],obj: {}},new Date("2018-09-06T17:26:46.665Z"),"e-services Awesome",{_id: 7530,str: "Paradigm Passage scalable",num: 26465,date: new Date("2018-09-06T11:01:29.055Z"),array: [[new Date("2018-09-06T18:28:25.402Z"),"Books"],58987,new Date("2018-09-05T21:07:57.182Z"),{_id: 7531,str: "Buckinghamshire bypass program",obj: {_id: 7532,num: 34280,date: new Date("2018-09-06T14:36:23.668Z"),array: ["Berkshire"],obj: {}}},[]],obj: {_id: 7533,str: "Savings Account",date: new Date("2018-09-05T21:13:57.283Z"),array: [],obj: {_id: 7534,str: "scale"}}},33996,7944]});
    },

    function(coll) {
        return coll.insert({_id: 7535,str: "technologies",date: new Date("2018-09-05T20:39:48.986Z"),array: [new Date("2018-09-06T14:46:06.108Z"),{_id: 7536,num: 12764,date: new Date("2018-09-06T15:08:41.709Z"),array: [],obj: {}},38664,["Robust Fresh Villages","Gorgeous XML",new Date("2018-09-05T20:07:36.310Z")],[],25952,48928,new Date("2018-09-06T14:08:51.585Z"),"functionalities overriding",new Date("2018-09-06T06:52:39.146Z"),[],[],new Date("2018-09-06T14:05:25.258Z"),53607],obj: {_id: 7537,str: "multimedia orchestration deposit",num: 16265,date: new Date("2018-09-06T03:42:20.165Z")}});
    },

    function(coll) {
        return coll.insert({_id: 7538,num: 56633,date: new Date("2018-09-06T04:38:46.242Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7539,str: "website open-source",num: 87399,date: new Date("2018-09-06T05:49:00.223Z"),array: [84796,"Buckinghamshire Pants",[{_id: 7540,str: "alarm Car",num: 85393,array: [new Date("2018-09-06T03:37:40.600Z")],obj: {_id: 7541,str: "Adaptive Berkshire Progressive",num: 56360,date: new Date("2018-09-06T03:39:22.048Z"),array: [new Date("2018-09-06T09:44:47.963Z")],obj: {_id: 7542,str: "Mayotte",num: 21157,date: new Date("2018-09-06T02:27:27.918Z"),obj: {}}}},91941],"Car Synchronised",{_id: 7543,date: new Date("2018-09-06T01:38:22.131Z"),array: [],obj: {}},new Date("2018-09-06T02:52:29.461Z"),new Date("2018-09-06T00:31:50.211Z"),"attitude Money Market Account",[],23056,999,"Director FTP wireless",{ _id: 7544 },new Date("2018-09-06T06:10:19.982Z"),"Intranet"],obj: {_id: 7545,str: "Svalbard & Jan Mayen Islands",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7546,str: "Oregon Home Loan Account methodical",num: 86778,date: new Date("2018-09-06T09:21:15.554Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7547,str: "capacitor Azerbaijan Home Loan Account",num: 10443,date: new Date("2018-09-06T16:49:13.657Z"),array: [new Date("2018-09-05T21:10:31.554Z"),"whiteboard deposit",29193,62986,new Date("2018-09-06T08:53:37.784Z"),"bifurcated mobile",73658,[new Date("2018-09-05T22:01:09.496Z"),"compressing Centralized"],{_id: 7548,str: "payment SAS Bedfordshire",num: 22197,array: [],obj: {}},"Regional Checking Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7549,str: "application Refined",num: 34471,date: new Date("2018-09-06T09:56:33.946Z"),array: [],obj: {_id: 7550,str: "Flat Assistant",num: 88818,date: new Date("2018-09-06T07:01:13.128Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7551,str: "indigo content Cross-group",date: new Date("2018-09-06T02:52:34.818Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7552,str: "engineer",num: 3195,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7553,str: "parsing input",num: 42828,date: new Date("2018-09-06T10:26:39.779Z"),array: ["indexing Fresh deposit",new Date("2018-09-06T18:57:34.168Z"),48869,[],{_id: 7554,str: "Personal Loan Account",num: 80327,date: new Date("2018-09-06T09:30:26.317Z"),array: [73228],obj: {_id: 7555,str: "GB",num: 98003,date: new Date("2018-09-05T21:40:56.996Z"),array: [],obj: {_id: 7556,array: [new Date("2018-09-05T20:30:23.441Z")],obj: {}}}},new Date("2018-09-06T02:55:23.307Z"),"capability Vietnam","Borders","Auto Loan Account multi-byte SMTP",49811,41341,new Date("2018-09-06T00:38:00.482Z"),58878,new Date("2018-09-06T10:24:07.791Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7557,str: "Montserrat Tasty Rubber Sausages auxiliary",num: 37359,date: new Date("2018-09-06T08:12:23.874Z"),array: [],obj: {_id: 7558,str: "holistic Salad",num: 32480,date: new Date("2018-09-06T19:07:15.686Z"),array: [],obj: {_id: 7559,str: "Garden strategize",num: 7953,array: [22904,"sensor tan Licensed Granite Pizza",new Date("2018-09-06T12:58:54.485Z"),"neural",42550,new Date("2018-09-05T20:33:36.121Z"),"Senior",[25100,{_id: 7560,str: "Keyboard",date: new Date("2018-09-06T11:22:21.160Z"),array: [],obj: {}},86162,[new Date("2018-09-06T18:46:21.966Z"),"quantifying neural-net India"],"Sports Global Manager"],[],"interactive Berkshire",12847,{_id: 7561,obj: {_id: 7562,num: 48753,date: new Date("2018-09-06T11:01:27.397Z")}}],obj: {_id: 7563,num: 87719,date: new Date("2018-09-06T06:34:05.715Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 7564,str: "Pizza Handmade Granite Bacon indexing",num: 23828,date: new Date("2018-09-05T23:12:58.969Z"),array: ["copying Metal Croatia",new Date("2018-09-06T18:05:28.870Z"),[1085,new Date("2018-09-05T23:30:31.425Z"),{_id: 7565,str: "Wooden quantify",date: new Date("2018-09-06T19:42:01.335Z"),array: [],obj: {_id: 7566,num: 36993,date: new Date("2018-09-06T02:16:56.860Z"),array: [],obj: {}}},new Date("2018-09-06T10:49:55.476Z"),[6555,85599],"Paraguay synthesize Locks",[]],{_id: 7567,str: "Beauty",num: 13808,date: new Date("2018-09-05T23:03:28.974Z"),array: ["Borders Practical User-centric","Loop Principal Grocery"],obj: {}},new Date("2018-09-05T23:31:19.036Z"),"Cambridgeshire",new Date("2018-09-06T08:00:18.427Z")],obj: {_id: 7568,str: "New Israeli Sheqel",num: 50444,date: new Date("2018-09-06T19:53:44.896Z")}});
    },

    function(coll) {
        return coll.insert({_id: 7569,str: "Nauru withdrawal",num: 7763,date: new Date("2018-09-06T12:23:28.702Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7570,str: "Intelligent Concrete Shoes Markets",num: 66582,date: new Date("2018-09-06T18:11:58.079Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7571,str: "impactful",num: 68764,date: new Date("2018-09-06T01:11:35.237Z"),array: [],obj: {_id: 7572,str: "Home Loan Account",num: 83899,date: new Date("2018-09-06T11:13:42.552Z"),obj: {_id: 7573,num: 54972,date: new Date("2018-09-06T14:12:01.774Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7574,str: "navigate Checking Account open-source",num: 61123,date: new Date("2018-09-06T07:28:58.083Z"),array: [25962,"markets transmit",{_id: 7575,str: "Checking Account",num: 32728,array: [],obj: {_id: 7576,str: "hard drive",num: 75398,date: new Date("2018-09-06T03:33:45.965Z"),array: [],obj: {_id: 7577,num: 15503,date: new Date("2018-09-06T08:47:26.993Z"),array: [],obj: {}}}},"Rial Omani invoice",new Date("2018-09-06T01:51:46.495Z"),[70524,[62759],93722],new Date("2018-09-06T12:47:52.362Z"),new Date("2018-09-05T19:55:56.788Z"),[],"Producer fuchsia Small Steel Bacon","Phased Flats interface",new Date("2018-09-06T18:15:59.945Z")]});
    },

    function(coll) {
        return coll.insert({_id: 7578,num: 96990,date: new Date("2018-09-06T07:40:35.893Z"),array: [new Date("2018-09-06T19:46:10.210Z"),"frame",new Date("2018-09-06T19:25:47.316Z"),"innovate",46141,{_id: 7579,str: "Metrics seize",num: 89084,date: new Date("2018-09-05T21:27:35.748Z"),array: ["synthesize Gabon",new Date("2018-09-06T18:57:39.549Z"),new Date("2018-09-06T10:09:41.801Z"),30600],obj: {_id: 7580,str: "impactful Handcrafted Concrete",num: 76553,date: new Date("2018-09-06T03:15:08.289Z"),array: [],obj: {}}},{_id: 7581,num: 56347,array: [],obj: {_id: 7582,num: 30880,obj: {}}},39828,91043,64499,[],[65710]],obj: {_id: 7583,str: "Investment Account distributed",date: new Date("2018-09-05T22:35:06.044Z"),array: [{_id: 7584,num: 84942,date: new Date("2018-09-06T10:45:56.514Z")},{_id: 7585,str: "Cambridgeshire connecting Lebanon",date: new Date("2018-09-06T01:14:33.856Z"),array: []},"Metal silver"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7586,str: "Moldovan Leu parsing",num: 32583,date: new Date("2018-09-05T22:33:39.035Z"),array: ["Mouse Coordinator User-friendly",69634,new Date("2018-09-06T11:10:21.918Z"),new Date("2018-09-06T07:43:07.076Z"),[],76374,"backing up mobile Bahamas",77983,"Intranet",new Date("2018-09-06T06:24:26.268Z"),{_id: 7587,str: "override paradigm Nebraska",num: 23684,date: new Date("2018-09-05T23:38:55.680Z"),obj: {}},42561],obj: {_id: 7588,str: "Tasty Steel Sausages",num: 91417,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7589,str: "PCI compressing",num: 45039,date: new Date("2018-09-06T06:40:35.732Z"),array: [],obj: {_id: 7590,str: "info-mediaries Divide primary",num: 39400,date: new Date("2018-09-06T09:14:01.444Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7591,str: "Producer program",num: 89345,date: new Date("2018-09-06T17:56:03.424Z"),array: [new Date("2018-09-06T18:54:24.253Z"),"Incredible Frozen Chair Fantastic Rubber Shirt",595,93427,new Date("2018-09-06T10:55:41.764Z"),"Games invoice Credit Card Account",new Date("2018-09-06T05:45:09.415Z"),40533,{_id: 7592,str: "next-generation",num: 6495,date: new Date("2018-09-06T03:46:28.570Z"),array: ["North Carolina auxiliary"],obj: {_id: 7593,num: 71904,date: new Date("2018-09-06T03:15:10.242Z"),array: [],obj: {}}},[],"withdrawal Sausages",45719,{_id: 7594,str: "Profit-focused program reboot",num: 99615,date: new Date("2018-09-06T19:24:24.196Z"),array: [85082],obj: {}},[new Date("2018-09-06T08:45:49.600Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7595,str: "Baby Cambridgeshire",num: 63321,date: new Date("2018-09-06T07:29:19.651Z"),array: [64091,"system Salad",new Date("2018-09-06T10:27:49.115Z"),88540,34023,"capacitor convergence","Ergonomic",["Trafficway"],{_id: 7596,str: "Delaware Portugal",num: 15600,date: new Date("2018-09-06T09:49:46.685Z"),array: [],obj: {}},new Date("2018-09-06T17:25:53.575Z"),{_id: 7597,obj: {_id: 7598,str: "Assistant generating Missouri",num: 45163,date: new Date("2018-09-06T12:12:06.361Z"),array: [95749,new Date("2018-09-06T12:48:00.546Z"),new Date("2018-09-06T19:43:48.544Z"),{_id: 7599,date: new Date("2018-09-06T01:25:14.668Z"),array: [],obj: {_id: 7600,str: "Vista",num: 2645,obj: {}}}]}},[]],obj: {_id: 7601,num: 99999,date: new Date("2018-09-06T00:11:52.576Z"),array: [[new Date("2018-09-06T04:21:17.898Z")],{_id: 7602,str: "Books invoice Inlet",array: []},10575,new Date("2018-09-06T14:47:06.801Z")],obj: {_id: 7603,str: "bandwidth 24 hour Berkshire",date: new Date("2018-09-06T15:02:04.900Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 7604,str: "Savings Account",date: new Date("2018-09-06T17:07:59.169Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7605,str: "Incredible",num: 64473,date: new Date("2018-09-06T06:47:18.174Z"),array: [],obj: {_id: 7606,str: "technologies architectures Intelligent Concrete Towels",date: new Date("2018-09-06T09:49:42.482Z"),array: [],obj: {_id: 7607,num: 34180,date: new Date("2018-09-05T22:56:28.171Z"),array: [],obj: {_id: 7608,num: 20731,date: new Date("2018-09-05T20:54:14.157Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 7609,str: "Borders invoice protocol",num: 86768,date: new Date("2018-09-06T16:26:09.690Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7610,str: "Cambridgeshire",num: 99830,date: new Date("2018-09-06T00:22:13.227Z"),array: ["Principal","haptic Steel",[new Date("2018-09-06T11:44:45.928Z"),{_id: 7611,str: "Generic e-business",num: 16843,date: new Date("2018-09-06T08:48:26.868Z"),array: [],obj: {_id: 7612,str: "visionary",date: new Date("2018-09-06T19:48:22.127Z"),array: [49305],obj: { _id: 7613 }}}],{_id: 7614,num: 1339,array: [],obj: {}},new Date("2018-09-06T02:52:28.938Z"),55354,"Station Rubber invoice",78233,80351,{_id: 7615,str: "card",date: new Date("2018-09-05T23:36:42.598Z"),array: [new Date("2018-09-06T07:41:25.798Z"),new Date("2018-09-06T04:57:56.946Z"),27473,"Multi-channelled Rupiah invoice"],obj: {_id: 7616,num: 65994,obj: {}}},new Date("2018-09-06T17:40:45.012Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 7617,str: "Bedfordshire XSS",num: 22225,date: new Date("2018-09-06T18:46:58.543Z"),array: [97647,54589,new Date("2018-09-05T22:16:02.800Z"),"Granite Checking Account",93707,new Date("2018-09-06T03:05:43.452Z"),new Date("2018-09-06T13:58:51.093Z"),{_id: 7618,str: "moratorium",num: 65506,date: new Date("2018-09-06T09:04:06.893Z"),obj: {_id: 7619,str: "synthesize",num: 76465,date: new Date("2018-09-06T06:42:02.878Z"),array: []}},[25721],{_id: 7620,array: [],obj: {_id: 7621,num: 11579,date: new Date("2018-09-06T07:14:28.994Z")}},[],"core Function-based","Architect Cambridgeshire initiative",{_id: 7622,str: "service-desk Sharable",num: 44189,array: [new Date("2018-09-06T10:53:33.951Z")],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7623,str: "bypass Isle Streets",num: 45995,date: new Date("2018-09-06T06:46:52.235Z"),array: [],obj: {_id: 7624,str: "Applications array parsing",date: new Date("2018-09-06T19:26:56.371Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7625,str: "Tasty Orchestrator Avon",num: 99272,date: new Date("2018-09-06T04:11:09.381Z"),array: [],obj: {_id: 7626,str: "instruction set reboot",num: 79850,date: new Date("2018-09-06T09:59:14.139Z"),array: [35908,"Marketing Cotton",42148,{_id: 7627,str: "Automotive compressing Algerian Dinar",num: 94221,date: new Date("2018-09-06T04:30:26.446Z"),array: [],obj: {}},44582,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 7628,str: "white violet",date: new Date("2018-09-05T23:54:14.325Z"),array: [],obj: {_id: 7629,str: "input black Avon",num: 5811,date: new Date("2018-09-05T23:41:41.898Z"),array: [new Date("2018-09-06T04:08:06.468Z"),new Date("2018-09-06T02:09:54.960Z"),"middleware",31123,new Date("2018-09-06T13:44:00.535Z"),58170,"Factors"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7630,str: "Small Plastic Hat",num: 30866,date: new Date("2018-09-06T07:44:35.088Z"),array: [[],new Date("2018-09-06T14:18:56.145Z"),new Date("2018-09-06T14:52:33.960Z"),new Date("2018-09-06T09:21:38.411Z"),92530,"Barbados Dollar SMTP metrics",53826,55584,"Isle architectures Avon",new Date("2018-09-06T07:31:53.775Z"),"portals","Designer Kansas"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7631,str: "attitude Wooden",num: 21265,date: new Date("2018-09-06T19:07:35.150Z"),array: [],obj: {_id: 7632,num: 1605,date: new Date("2018-09-06T05:53:09.245Z"),array: [new Date("2018-09-06T00:15:11.727Z"),"Movies back up withdrawal",new Date("2018-09-06T16:49:22.041Z"),{_id: 7633,str: "Road pixel drive",date: new Date("2018-09-06T13:31:32.774Z")},new Date("2018-09-05T22:34:39.984Z"),{_id: 7634,str: "wireless backing up",num: 92884,date: new Date("2018-09-05T23:50:17.790Z"),array: ["Steel Kenya functionalities"],obj: {}},"Awesome",13643,new Date("2018-09-05T23:16:55.490Z"),47836,"Crossing mint green European Monetary Unit (E.M.U.-6)"]}});
    },

    function(coll) {
        return coll.insert({_id: 7635,str: "Auto Loan Account Andorra",num: 9134,date: new Date("2018-09-06T06:39:53.929Z"),array: ["Flats","payment","National",new Date("2018-09-06T01:02:27.496Z"),68980,new Date("2018-09-06T10:56:39.521Z"),52018,"ADP",[],{_id: 7636,str: "teal Handcrafted Steel Chicken",num: 85072,date: new Date("2018-09-06T11:17:32.671Z"),array: [new Date("2018-09-06T12:45:24.668Z"),new Date("2018-09-06T04:29:20.205Z")],obj: {}},42854,new Date("2018-09-06T14:30:45.183Z"),[12391,[],{_id: 7637,str: "Practical innovate Incredible Cotton Soap",array: [],obj: {}}]],obj: {_id: 7638,num: 59406,date: new Date("2018-09-05T20:37:55.185Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7639,str: "North Korean Won panel",num: 39606,date: new Date("2018-09-06T19:14:16.538Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7640,str: "parsing National Locks",num: 44729,date: new Date("2018-09-06T19:13:13.770Z"),array: [44830,new Date("2018-09-05T21:38:35.345Z"),new Date("2018-09-06T17:56:40.666Z"),"service-desk",new Date("2018-09-06T18:32:45.330Z"),[]],obj: {_id: 7641,str: "Frozen",num: 95930,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7642,str: "dot-com Soap",num: 46884,date: new Date("2018-09-06T08:12:30.298Z")});
    },

    function(coll) {
        return coll.insert({_id: 7643,str: "calculating Mouse",num: 14775,date: new Date("2018-09-06T11:41:29.718Z"),obj: {_id: 7644,str: "Technician Silver",num: 24496,date: new Date("2018-09-06T03:30:22.094Z"),array: [],obj: {_id: 7645,num: 87949,date: new Date("2018-09-06T12:28:47.778Z"),array: [{_id: 7646,date: new Date("2018-09-06T05:42:25.119Z"),array: ["Shirt flexibility Ports"]},new Date("2018-09-05T21:57:00.939Z"),10236,"Burg Business-focused",new Date("2018-09-06T17:43:30.957Z"),"Ports Fundamental",new Date("2018-09-06T13:04:01.708Z"),20514,8627,79524,526,"Music",[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7647,str: "protocol",num: 12507,date: new Date("2018-09-06T15:56:25.037Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7648,str: "Senegal",num: 45534,date: new Date("2018-09-06T12:58:13.627Z"),array: [new Date("2018-09-06T18:17:18.661Z"),"communities Incredible Executive",30986,{_id: 7649,str: "Pizza Spur Granite",date: new Date("2018-09-06T19:46:32.457Z"),array: [],obj: {}},83018,new Date("2018-09-05T23:17:13.700Z"),"grey","Mill microchip Texas",["Home Loan Account View Music"],6083,37427,"ADP",new Date("2018-09-05T21:14:51.280Z")],obj: {_id: 7650,str: "bandwidth",num: 73659,array: [69098,"Knolls Station Bike",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7651,str: "drive leading-edge generate",num: 58982,date: new Date("2018-09-06T11:12:35.680Z"),array: [9945,"Manat transmitter",79949,new Date("2018-09-06T00:32:48.998Z"),"transmitter Internal Green","Guadeloupe Industrial Outdoors",4425,new Date("2018-09-06T10:07:37.435Z")],obj: {_id: 7652,str: "Hryvnia Bike withdrawal",num: 81125,date: new Date("2018-09-06T15:44:07.816Z"),array: [],obj: {_id: 7653,str: "hack",date: new Date("2018-09-05T21:36:27.745Z"),array: [[],new Date("2018-09-06T07:57:07.216Z"),[55322,"Exclusive Ball platforms",{_id: 7654,str: "Fiji Dollar Open-architected",array: [{_id: 7655,num: 3376,date: new Date("2018-09-06T10:54:51.700Z"),array: [],obj: {_id: 7656,num: 23870,date: new Date("2018-09-06T05:41:41.664Z"),obj: {}}}],obj: {}},{_id: 7657,str: "Product",num: 38485,date: new Date("2018-09-06T06:24:29.521Z")},new Date("2018-09-06T05:18:51.335Z"),"incremental"],"Berkshire"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7658,str: "Specialist Investment Account JBOD",num: 35931,array: ["Handmade","scale Gibraltar Nevada",new Date("2018-09-06T00:48:07.199Z"),87933,"Cambridgeshire Oklahoma AGP",37103,88290],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7659,str: "Tuna",num: 27469,date: new Date("2018-09-06T01:32:07.555Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7660,str: "Cambridgeshire Turkmenistan",num: 86936,date: new Date("2018-09-06T11:24:00.514Z"),array: [58434,9930,new Date("2018-09-05T21:11:44.392Z"),"transmit Refined Fresh Pants parse",new Date("2018-09-06T16:15:41.971Z"),[],new Date("2018-09-06T16:37:03.498Z"),19712,"payment",28246,new Date("2018-09-06T06:04:17.444Z"),{_id: 7661,str: "Shoes Run Investment Account",num: 6636,date: new Date("2018-09-05T21:47:20.893Z"),array: [{_id: 7662,str: "National Bhutan Savings Account",num: 81869,date: new Date("2018-09-06T05:28:42.522Z"),array: [{_id: 7663,str: "Chief",num: 5487,date: new Date("2018-09-06T14:55:46.889Z"),array: [],obj: {}},"quantify","Consultant"],obj: {_id: 7664,str: "Aruba",date: new Date("2018-09-06T15:17:02.274Z")}},new Date("2018-09-06T12:32:04.031Z")],obj: {_id: 7665,num: 27235,date: new Date("2018-09-06T07:31:36.073Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 7666,str: "Money Market Account",date: new Date("2018-09-06T08:05:02.268Z"),array: [{_id: 7667,str: "relationships applications Armenian Dram",num: 2812,date: new Date("2018-09-06T07:37:37.472Z"),array: [],obj: {_id: 7668,str: "Thailand",num: 94774,date: new Date("2018-09-06T08:06:20.898Z"),obj: {}}},[],"cyan Producer","Metal Music",{_id: 7669,num: 76896,array: [new Date("2018-09-06T00:29:15.432Z"),49065,"Home Loan Account",new Date("2018-09-06T02:22:11.367Z"),"compressing Phased",88289,new Date("2018-09-06T14:12:49.430Z")]},[[]],"synthesize Jewelery Puerto Rico"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7670,str: "lime",date: new Date("2018-09-05T23:04:00.826Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7671,str: "generate",num: 48353,date: new Date("2018-09-06T12:11:15.604Z"),array: [new Date("2018-09-05T20:37:39.991Z"),71627,"purple engage intuitive","quantify metrics","invoice gold Handmade",7221,[],new Date("2018-09-06T06:55:24.520Z"),new Date("2018-09-06T16:40:58.725Z"),65110,new Date("2018-09-06T17:16:40.108Z")]});
    },

    function(coll) {
        return coll.insert({_id: 7672,str: "Manager Sports Granite",num: 15924,date: new Date("2018-09-06T03:52:52.523Z"),array: [new Date("2018-09-06T02:54:14.025Z"),"Croatian Kuna multi-byte","connecting Personal Loan Account Bedfordshire",65816,42628,"Practical",new Date("2018-09-06T04:22:29.868Z"),new Date("2018-09-06T09:01:24.016Z"),new Date("2018-09-06T11:00:56.414Z"),[],{_id: 7673,date: new Date("2018-09-06T03:17:15.896Z"),array: [],obj: {_id: 7674,str: "Horizontal Tools",num: 39763,obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 7675,str: "Associate Team-oriented",num: 86779,array: [new Date("2018-09-05T23:23:17.311Z"),"FTP payment pricing structure",new Date("2018-09-06T06:08:42.560Z"),22117,"parse Salad Pass",27701,35064,[],{_id: 7676,str: "Cheese Computers teal",num: 87063,date: new Date("2018-09-06T02:30:51.769Z"),obj: {}},"Glen analyzing",54981],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7677,str: "Borders UIC-Franc",num: 22109,date: new Date("2018-09-06T16:44:03.824Z"),array: [new Date("2018-09-06T09:09:22.483Z"),"Village Ergonomic Metal Chips","mobile compressing firewall",new Date("2018-09-06T12:37:18.529Z"),70194,63844,"IB collaboration user-centric",new Date("2018-09-06T19:16:45.206Z"),7255,new Date("2018-09-06T01:25:57.208Z"),14225],obj: {_id: 7678,str: "Berkshire",num: 55306,date: new Date("2018-09-06T06:19:56.506Z"),array: [{_id: 7679,str: "attitude-oriented Practical",num: 62832,array: []},{_id: 7680,num: 7314,obj: {}},33070,new Date("2018-09-06T09:18:28.218Z")],obj: {_id: 7681,str: "Borders",num: 34994,date: new Date("2018-09-06T11:15:40.319Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 7682,str: "Factors contextually-based",num: 64220,date: new Date("2018-09-06T11:00:01.396Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7683,str: "Mission Adaptive firewall",num: 78833,date: new Date("2018-09-06T13:34:21.656Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7684,str: "e-business Licensed sensor",num: 89734,date: new Date("2018-09-05T20:02:26.921Z"),array: [new Date("2018-09-06T05:51:07.463Z"),"Applications",{_id: 7685,str: "migration Vision-oriented optical",num: 46939,date: new Date("2018-09-06T06:07:54.293Z"),array: [],obj: {_id: 7686,str: "Total",num: 14605,date: new Date("2018-09-05T21:10:19.075Z"),array: ["Practical"],obj: {_id: 7687,str: "connect",array: [],obj: {}}}},5870,89066,81707,[80079],[],new Date("2018-09-06T13:58:05.925Z"),"Self-enabling SQL","application Gorgeous",{_id: 7688,str: "Creative Home Home Loan Account",date: new Date("2018-09-06T18:03:48.760Z"),obj: {}},[],19516],obj: {_id: 7689,str: "Nebraska Optional Assurance",num: 83371}});
    },

    function(coll) {
        return coll.insert({_id: 7690,str: "overriding",num: 65403,date: new Date("2018-09-06T11:42:17.000Z"),array: ["indigo supply-chains deliverables",51406,new Date("2018-09-06T01:04:04.607Z"),{_id: 7691,str: "Dynamic bypass",num: 55575,date: new Date("2018-09-06T19:53:36.760Z"),array: [new Date("2018-09-06T10:51:02.167Z")],obj: {_id: 7692,num: 6878,array: [],obj: {_id: 7693,str: "plum Plastic",num: 73574,date: new Date("2018-09-06T03:54:19.236Z"),array: ["Vista"]}}},4997,49248,"systems Pass compress",26085,new Date("2018-09-06T11:08:10.348Z"),"Cotton Handcrafted Plastic Tuna Personal Loan Account",new Date("2018-09-06T17:43:19.036Z")],obj: {_id: 7694,num: 37886,date: new Date("2018-09-06T12:33:42.245Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7695,str: "Barbados Dollar initiative",num: 85875,date: new Date("2018-09-06T19:48:03.829Z"),array: ["Silver Investment Account",42674,"Computers",51082,"Legacy",34458,26282,"turn-key Tools",new Date("2018-09-05T23:02:47.350Z"),[78515],{_id: 7696,str: "enterprise Spurs Beauty",num: 35875,array: [],obj: {}},{_id: 7697,str: "Personal Loan Account e-enable Granite",date: new Date("2018-09-05T22:47:16.906Z"),array: [[new Date("2018-09-06T02:36:51.515Z")],{_id: 7698,num: 52551,date: new Date("2018-09-06T12:24:52.191Z"),array: [],obj: {_id: 7699,str: "Granite FTP orchid",num: 70579,obj: {_id: 7700,num: 33476,date: new Date("2018-09-06T15:02:24.166Z"),array: [new Date("2018-09-06T03:51:17.157Z"),new Date("2018-09-06T01:42:00.749Z")]}}},16698],obj: {_id: 7701,str: "hacking Pass",date: new Date("2018-09-06T00:30:15.345Z"),array: [],obj: {}}},"green"]});
    },

    function(coll) {
        return coll.insert({_id: 7702,str: "Chips JSON",num: 68020,date: new Date("2018-09-06T14:13:28.095Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7703,str: "deposit",num: 17113,date: new Date("2018-09-05T21:58:14.729Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7704,str: "Public-key",num: 19596,array: [{_id: 7705,str: "copying magnetic Rwanda Franc",num: 87325,date: new Date("2018-09-06T11:01:01.599Z"),array: [15540,"Berkshire","stable",80148],obj: {}},{_id: 7706,obj: {}},new Date("2018-09-06T04:55:49.105Z"),new Date("2018-09-06T16:25:51.412Z"),10616,"Plains",new Date("2018-09-06T01:07:08.779Z"),6628,new Date("2018-09-06T09:18:41.816Z"),[],53770],obj: {_id: 7707,str: "Agent South Georgia and the South Sandwich Islands next-generation",num: 62721,date: new Date("2018-09-06T06:32:47.530Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7708,str: "Codes specifically reserved for testing purposes",num: 32083,date: new Date("2018-09-06T11:21:20.839Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7709,str: "driver",date: new Date("2018-09-06T01:00:40.320Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7710,str: "bypass reinvent",num: 48296,date: new Date("2018-09-06T13:36:51.886Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7711,str: "Unbranded",num: 5971,array: ["Grocery Shirt transparent",{_id: 7712,str: "FTP function Multi-lateral",num: 12255,date: new Date("2018-09-06T16:58:52.670Z"),array: [80695],obj: {}},12278,new Date("2018-09-05T22:47:32.009Z"),new Date("2018-09-05T21:16:59.459Z"),{_id: 7713,num: 60194,date: new Date("2018-09-06T08:15:53.413Z"),obj: {_id: 7714,str: "Auto Loan Account Regional",num: 39885,date: new Date("2018-09-06T11:30:00.350Z"),obj: {_id: 7715,num: 74077,date: new Date("2018-09-06T11:20:05.081Z"),array: [],obj: {}}}},[],8059,49035,"Kentucky Developer",new Date("2018-09-06T19:32:34.723Z"),new Date("2018-09-06T10:26:28.955Z"),"Auto Loan Account synthesizing Iranian Rial","Forward"]});
    },

    function(coll) {
        return coll.insert({_id: 7716,str: "Buckinghamshire Refined",num: 48310,date: new Date("2018-09-05T23:28:44.545Z"),array: [66877,"contextually-based solutions",new Date("2018-09-06T00:58:16.818Z"),27663,new Date("2018-09-06T13:28:14.337Z"),new Date("2018-09-06T02:24:01.994Z"),97569,["Djibouti Franc Rustic"],"National copying","HTTP",29054,{_id: 7717,str: "clear-thinking Salad extend",num: 39360,array: [new Date("2018-09-05T21:32:51.803Z")],obj: {}},{_id: 7718,num: 85861,date: new Date("2018-09-06T07:47:17.255Z"),array: [],obj: {}},[]],obj: {_id: 7719,str: "quantifying intuitive",num: 5024,date: new Date("2018-09-06T16:35:25.704Z"),obj: {_id: 7720,str: "magenta Chief challenge",num: 33898,date: new Date("2018-09-06T17:40:23.140Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7721,str: "connect",num: 32054,date: new Date("2018-09-06T07:57:38.106Z"),array: [{_id: 7722,str: "Rustic",num: 4441,date: new Date("2018-09-06T03:32:04.817Z"),obj: {_id: 7723,str: "Metal Horizontal Executive",num: 10914,date: new Date("2018-09-06T03:05:47.786Z"),array: [],obj: {_id: 7724,str: "De-engineered deposit Turkmenistan",num: 49252,date: new Date("2018-09-06T12:02:56.937Z"),array: [],obj: {}}}},53061,"Programmable Gorgeous",new Date("2018-09-06T14:09:59.442Z"),{_id: 7725,str: "Track Gorgeous Plastic Mouse",num: 10413,date: new Date("2018-09-06T19:02:52.015Z"),array: ["executive drive"]},["invoice",new Date("2018-09-06T06:19:40.789Z")],51607,[[],"Generic Metal Cheese Bedfordshire",98389],"Stream input","quantify Chicken",new Date("2018-09-06T02:46:33.337Z")]});
    },

    function(coll) {
        return coll.insert({_id: 7726,str: "Jewelery",num: 90816,date: new Date("2018-09-06T16:19:55.229Z"),array: [[],68124,new Date("2018-09-06T01:10:38.001Z"),18184,new Date("2018-09-06T12:42:49.613Z"),598,"Facilitator deposit Fantastic Rubber Salad",new Date("2018-09-06T06:31:31.045Z"),new Date("2018-09-06T04:04:09.203Z"),"methodologies",{_id: 7727,str: "payment azure interface",num: 14685,date: new Date("2018-09-06T06:12:49.284Z"),obj: {_id: 7728,str: "Buckinghamshire success Nepalese Rupee",num: 80567,date: new Date("2018-09-06T05:35:44.099Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7729,str: "Industrial",num: 73495,date: new Date("2018-09-06T12:06:48.035Z"),obj: {_id: 7730,num: 30168,date: new Date("2018-09-06T16:08:04.516Z"),array: ["Agent","cultivate Keyboard",30580,new Date("2018-09-06T02:51:31.587Z"),[],89612,{_id: 7731,str: "Integration Organized",num: 83159,array: [12265],obj: {_id: 7732,str: "parsing initiative",date: new Date("2018-09-06T04:15:07.845Z"),array: []}},new Date("2018-09-06T16:24:43.724Z"),{_id: 7733,str: "value-added USB TCP",date: new Date("2018-09-06T06:30:18.492Z"),obj: {}},new Date("2018-09-06T03:00:49.415Z"),"overriding Avon Practical"]}});
    },

    function(coll) {
        return coll.insert({_id: 7734,str: "Rustic",array: [12054,new Date("2018-09-05T23:44:31.021Z"),new Date("2018-09-06T05:42:40.564Z"),"orchid",{_id: 7735,str: "Handcrafted connect",num: 45716,date: new Date("2018-09-06T10:15:02.402Z"),obj: {_id: 7736,str: "Mobility Home Loan Account Sleek",num: 1779,date: new Date("2018-09-06T08:29:53.174Z"),array: ["Automotive"],obj: {_id: 7737,num: 94088,date: new Date("2018-09-05T22:56:19.869Z"),array: [],obj: {}}}},"Wisconsin",93767,new Date("2018-09-06T16:20:15.107Z"),{_id: 7738,str: "navigate",num: 29595,array: []},new Date("2018-09-06T16:23:46.135Z"),[79818],"mobile generate",new Date("2018-09-06T08:38:07.641Z")]});
    },

    function(coll) {
        return coll.insert({_id: 7739,str: "Gorgeous Wooden Salad Ergonomic Fresh Salad",num: 36265,date: new Date("2018-09-06T13:50:07.685Z"),obj: {_id: 7740,str: "Fantastic Plastic Shirt",num: 11203,date: new Date("2018-09-06T13:44:30.461Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7741,str: "Table generate",num: 99674,date: new Date("2018-09-05T20:36:21.861Z"),array: ["neural JBOD reintermediate",74671,new Date("2018-09-05T23:23:15.307Z"),5210,"web-readiness Rustic Concrete Mouse deliverables",[],[],"robust Aruban Guilder",{_id: 7742,str: "Liaison",num: 91982,date: new Date("2018-09-06T15:49:42.904Z"),array: [new Date("2018-09-06T17:45:20.714Z"),"quantifying Freeway",new Date("2018-09-06T03:02:43.864Z"),"hard drive"],obj: {_id: 7743,str: "cyan 1080p",date: new Date("2018-09-05T23:51:42.743Z"),array: [new Date("2018-09-06T01:38:16.036Z"),2752],obj: {}}},43895,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7744,str: "transmit parsing",num: 84064,date: new Date("2018-09-06T19:09:33.627Z"),array: [],obj: {_id: 7745,str: "bypassing",num: 85784,date: new Date("2018-09-06T05:16:43.504Z"),array: ["Group","Intelligent Wooden Bike Accounts",43904,new Date("2018-09-06T05:18:17.999Z"),new Date("2018-09-06T12:19:32.865Z"),[],new Date("2018-09-06T18:32:16.662Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7746,str: "Communications Myanmar deposit",num: 57014,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7747,str: "Tuna back-end",num: 96856,date: new Date("2018-09-05T22:40:44.018Z"),array: [{_id: 7748,str: "infomediaries",num: 14428,date: new Date("2018-09-06T05:10:44.030Z"),array: [82030,74916],obj: {_id: 7749,str: "Home Loan Account",num: 3337,array: []}},"knowledge user Coordinator",new Date("2018-09-06T11:24:44.618Z"),{_id: 7750,date: new Date("2018-09-05T23:46:55.899Z"),array: [new Date("2018-09-06T17:05:43.055Z"),[],new Date("2018-09-06T04:23:42.179Z")],obj: {_id: 7751,str: "Missouri",num: 46480,date: new Date("2018-09-05T23:22:02.482Z"),obj: {}}},"Sleek Metrics",[],new Date("2018-09-06T16:53:27.668Z"),38708,"Iowa online",{_id: 7752,str: "parsing",num: 36856,array: [],obj: {_id: 7753,date: new Date("2018-09-06T05:26:54.854Z"),array: []}},["Home"],"Industrial"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7754,str: "Tanzanian Shilling Soft",num: 42561,date: new Date("2018-09-06T12:22:43.615Z"),array: ["USB withdrawal",92094,new Date("2018-09-06T14:25:13.430Z"),new Date("2018-09-06T17:47:45.365Z"),44991,7712,"olive",{_id: 7755,str: "Consultant CFA Franc BCEAO PNG",num: 85472,date: new Date("2018-09-06T06:42:38.437Z"),array: [[68128,[]]],obj: {}},74720,"niches Books",[{_id: 7756,str: "recontextualize Human Self-enabling",num: 86776,date: new Date("2018-09-05T23:01:35.695Z"),obj: {_id: 7757,num: 33148,array: [],obj: {_id: 7758,str: "Sao Tome and Principe Organic",num: 10827,date: new Date("2018-09-06T06:18:10.283Z"),obj: {}}}}],59608,new Date("2018-09-06T08:02:02.020Z"),{_id: 7759,date: new Date("2018-09-06T16:32:15.902Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 7760,str: "Intranet neural methodology",num: 44212,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7761,str: "Small Plastic Fish",num: 9548,date: new Date("2018-09-06T01:58:09.467Z"),array: [new Date("2018-09-06T02:45:42.722Z"),[],71092,5809,"Corporate Toys",54272,new Date("2018-09-06T00:44:27.360Z"),new Date("2018-09-06T12:16:34.618Z"),"Practical",{_id: 7762,str: "application Response",date: new Date("2018-09-06T19:29:52.565Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7763,str: "Paradigm context-sensitive",num: 77846,array: [],obj: {_id: 7764,num: 50758,array: ["matrix Customer",new Date("2018-09-05T21:16:25.984Z"),[],"systems functionalities synthesize","capacitor overriding",3223,new Date("2018-09-06T16:06:42.621Z"),{_id: 7765,str: "Bedfordshire Functionality evolve",num: 40083,date: new Date("2018-09-05T21:36:56.176Z"),array: []},49492],obj: {_id: 7766,str: "monitor experiences Way",num: 55455,date: new Date("2018-09-06T12:28:50.363Z"),array: [new Date("2018-09-06T08:58:54.080Z"),{_id: 7767,str: "Idaho Rustic Rubber Chair Borders",num: 35246,date: new Date("2018-09-06T08:15:05.677Z"),array: [],obj: {}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7768,str: "Bacon Architect",num: 17320,date: new Date("2018-09-06T11:34:35.670Z"),array: [74283,new Date("2018-09-06T09:34:02.228Z"),"Hong Kong","Kansas Bahamian Dollar European Monetary Unit (E.M.U.-6)",38016,{_id: 7769,num: 5864,obj: {_id: 7770,str: "Underpass deposit Digitized",num: 57627,date: new Date("2018-09-06T02:05:16.229Z"),array: ["optical",{_id: 7771,str: "architecture Pass Grocery",num: 43208,date: new Date("2018-09-06T16:01:07.406Z"),array: [],obj: {}}]}},new Date("2018-09-06T12:15:30.038Z"),{_id: 7772,num: 69979,date: new Date("2018-09-06T08:08:16.504Z"),array: [],obj: {_id: 7773,str: "transmitting e-tailers Steel",obj: {_id: 7774,str: "e-services index Exclusive",array: [],obj: {}}}},new Date("2018-09-06T08:50:30.626Z"),"website",new Date("2018-09-06T02:59:22.825Z"),[],11258]});
    },

    function(coll) {
        return coll.insert({_id: 7775,str: "Liaison",num: 67820,date: new Date("2018-09-06T09:00:32.922Z"),array: [new Date("2018-09-06T18:45:18.237Z"),[],92749,"Automated auxiliary","SCSI Brand Steel","Cotton users",29606,91391,new Date("2018-09-06T02:27:23.191Z"),{_id: 7776,str: "Union Tasty",num: 97960,date: new Date("2018-09-06T02:55:50.614Z"),obj: {}},[]],obj: {_id: 7777,str: "Licensed Plastic Ball Dynamic",num: 23457,date: new Date("2018-09-06T06:16:19.161Z"),array: ["Legacy",{_id: 7778,array: []},"virtual New Mexico",{_id: 7779,str: "SQL infrastructures invoice",num: 12250,date: new Date("2018-09-06T13:27:52.132Z"),array: [{_id: 7780,str: "Personal Loan Account silver",num: 76287,array: [],obj: {_id: 7781,str: "Cambridgeshire Customizable",num: 93523,date: new Date("2018-09-06T18:37:30.121Z")}}]},"Books Manager Avon"],obj: {_id: 7782,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7783,str: "driver transparent RAM",num: 74499,date: new Date("2018-09-05T21:42:23.751Z"),array: [[],6199,new Date("2018-09-06T03:53:01.516Z"),93256,new Date("2018-09-06T18:13:17.248Z"),"gold USB"],obj: {_id: 7784,str: "Identity Credit Card Account Shores",num: 78963,date: new Date("2018-09-05T21:04:40.788Z"),obj: {_id: 7785,num: 35230,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7786,str: "program Frozen",num: 66395,array: ["capacitor disintermediate",92163,new Date("2018-09-05T21:27:29.385Z"),{_id: 7787,str: "Incredible Plastic Ball",num: 80684,date: new Date("2018-09-05T23:22:47.623Z"),array: [],obj: {_id: 7788,num: 37897,date: new Date("2018-09-06T05:56:55.609Z"),array: [],obj: {_id: 7789,str: "impactful Credit Card Account Lane",num: 49761,date: new Date("2018-09-06T14:33:47.301Z"),obj: {}}}},16116,[],"Steel",new Date("2018-09-06T13:07:28.245Z"),{_id: 7790,num: 80976,date: new Date("2018-09-06T06:46:38.537Z"),obj: {_id: 7791,str: "Quetzal Granite",array: []}},new Date("2018-09-06T16:19:55.244Z"),10354,14167]});
    },

    function(coll) {
        return coll.insert({_id: 7792,str: "killer Creek Specialist",num: 89735,date: new Date("2018-09-06T14:13:33.930Z"),array: [{_id: 7793,str: "European Monetary Unit (E.M.U.-6) Angola",num: 74148,date: new Date("2018-09-06T00:58:18.816Z"),array: [],obj: {}},[],new Date("2018-09-06T04:40:17.054Z"),"reboot",15468,"Wallis and Futuna deposit systems",new Date("2018-09-06T05:22:53.954Z"),"knowledge user syndicate",[],{_id: 7794,num: 41248,date: new Date("2018-09-06T12:37:02.620Z"),array: [new Date("2018-09-06T01:03:42.704Z"),"Auto Loan Account Investment Account","Berkshire Business-focused payment"],obj: {_id: 7795,str: "Barbados Movies",num: 7145,date: new Date("2018-09-06T17:43:59.501Z"),array: [84346,[]],obj: {}}},57702]});
    },

    function(coll) {
        return coll.insert({_id: 7796,str: "Human payment National",num: 19002,date: new Date("2018-09-05T23:12:12.071Z"),array: ["Rubber","Colorado Fish",86557,{_id: 7797,str: "actuating Ergonomic",num: 56945,date: new Date("2018-09-06T15:49:33.351Z"),array: [],obj: {}},new Date("2018-09-06T00:59:24.719Z"),new Date("2018-09-06T02:47:04.844Z"),64390,12111,{_id: 7798,str: "Investment Account",num: 23036,date: new Date("2018-09-06T01:33:13.761Z"),array: [[],new Date("2018-09-06T02:34:44.027Z")],obj: {}},[],"superstructure","neural application",{_id: 7799,array: []},19621],obj: {_id: 7800,str: "matrices",date: new Date("2018-09-06T04:05:19.623Z"),obj: {_id: 7801,date: new Date("2018-09-06T19:16:41.911Z"),array: [new Date("2018-09-06T14:56:02.319Z"),[94295],"Concrete Kuwaiti Dinar convergence"]}}});
    },

    function(coll) {
        return coll.insert({_id: 7802,str: "eco-centric Credit Card Account Credit Card Account",num: 10208,date: new Date("2018-09-05T22:22:34.494Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7803,str: "Marketing Trinidad and Tobago Dollar Bedfordshire",num: 39660,date: new Date("2018-09-06T16:40:21.265Z"),array: [new Date("2018-09-06T01:21:50.216Z"),59101,69465,"Strategist Incredible Cotton Shirt compress","Tuna target Tasty",new Date("2018-09-06T05:09:51.626Z"),new Date("2018-09-05T23:07:02.695Z"),{_id: 7804,str: "red",date: new Date("2018-09-05T23:37:51.925Z"),array: [],obj: {}},"Berkshire Bacon",99203,"B2C Home Loan Account Investment Account"]});
    },

    function(coll) {
        return coll.insert({_id: 7805,str: "communities",num: 77099,date: new Date("2018-09-06T09:24:33.892Z"),array: [],obj: {_id: 7806,str: "Australian Dollar Chief",num: 68099,date: new Date("2018-09-06T19:22:47.822Z"),array: ["Response",new Date("2018-09-05T21:03:17.326Z"),36917,"South Dakota",["pink Home Response"],new Date("2018-09-06T13:26:49.167Z"),59082,15415,6137,{_id: 7807,num: 58037,array: ["Reactive"],obj: {}},[[],new Date("2018-09-06T19:09:31.496Z")],[]],obj: {_id: 7808,date: new Date("2018-09-06T17:39:14.505Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7809,str: "Table",num: 8392,date: new Date("2018-09-06T12:32:18.710Z"),array: [],obj: {_id: 7810,str: "Producer IB",num: 99105,date: new Date("2018-09-06T16:15:07.914Z"),array: [new Date("2018-09-05T21:49:15.026Z"),8819,new Date("2018-09-06T05:51:27.134Z"),23138,"View payment",new Date("2018-09-06T14:18:01.730Z"),new Date("2018-09-06T16:15:41.066Z"),97136,"Synergistic HTTP"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7811,str: "leverage Metal Configurable",num: 28704,date: new Date("2018-09-06T08:40:07.767Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7812,str: "monitor withdrawal",num: 94373,date: new Date("2018-09-06T00:13:26.581Z"),array: [],obj: {_id: 7813,str: "feed",num: 33733,date: new Date("2018-09-06T07:30:50.431Z"),array: [81496,new Date("2018-09-06T14:14:36.727Z"),3510,"optical applications Metrics",{_id: 7814,str: "innovative Direct Cheese",num: 53390,array: [],obj: {_id: 7815,date: new Date("2018-09-05T21:07:12.424Z"),array: []}},new Date("2018-09-06T10:48:55.057Z"),new Date("2018-09-06T10:39:18.490Z"),"New Jersey","teal",{_id: 7816,num: 47658,date: new Date("2018-09-06T07:42:26.561Z"),array: []},new Date("2018-09-06T00:14:17.506Z"),90001,54387],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7817,str: "Sleek withdrawal capacity",num: 23926,date: new Date("2018-09-06T10:44:11.604Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7818,str: "Handmade",date: new Date("2018-09-06T05:31:19.651Z"),array: [],obj: {_id: 7819,str: "program",num: 47127,date: new Date("2018-09-06T19:18:59.006Z"),array: [new Date("2018-09-06T16:43:02.370Z"),"cutting-edge Turks and Caicos Islands Comoro Franc","blue firewall",52706,"Supervisor",{_id: 7820,str: "Garden action-items",num: 34743,date: new Date("2018-09-06T08:29:48.561Z")},[94631,[],"Avon",15918],new Date("2018-09-06T04:19:33.643Z"),"Cotton revolutionary"],obj: {_id: 7821,num: 67529,array: ["port Credit Card Account Oklahoma",new Date("2018-09-06T08:57:32.825Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7822,str: "Salad Dynamic",num: 94780,date: new Date("2018-09-06T10:20:14.960Z"),array: [25334,[],new Date("2018-09-06T13:07:39.322Z"),14221,"neural Cambridgeshire turquoise",new Date("2018-09-05T23:58:24.666Z"),[],68932],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7823,str: "withdrawal",num: 60454,date: new Date("2018-09-06T14:19:13.601Z"),array: ["quantify",89080,new Date("2018-09-06T18:40:22.304Z"),{_id: 7824,str: "Costa Rican Colon Cotton Producer",date: new Date("2018-09-06T19:17:00.129Z"),array: [],obj: {_id: 7825,str: "Chilean Peso Unidades de fomento viral invoice",num: 23404,date: new Date("2018-09-06T06:33:20.030Z"),array: [],obj: {}}},["Pennsylvania",10673,new Date("2018-09-06T07:05:45.516Z"),{_id: 7826,num: 94960}],99937,[84509,new Date("2018-09-06T02:42:20.136Z"),"input Intelligent Home Loan Account"],"Wyoming",83471],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7827,str: "Handcrafted Plastic Cheese",num: 5251,date: new Date("2018-09-06T18:22:10.745Z"),array: [67567,{_id: 7828,str: "Curve",num: 25263,date: new Date("2018-09-06T03:40:50.603Z"),array: [new Date("2018-09-06T10:58:38.384Z"),"white Divide",new Date("2018-09-06T12:37:06.484Z"),[],"monitor Rand Namibia Dollar",new Date("2018-09-06T19:45:31.525Z"),"next-generation Table",{_id: 7829,str: "lime",num: 3796,date: new Date("2018-09-06T17:19:41.832Z"),obj: {_id: 7830,num: 58930,obj: {_id: 7831,str: "wireless",num: 27011,array: [{_id: 7832,str: "Ergonomic Plastic Chicken calculating",date: new Date("2018-09-06T06:42:20.970Z"),obj: {}}]}}},new Date("2018-09-06T11:44:57.210Z"),7933,[]],obj: {_id: 7833,date: new Date("2018-09-05T20:45:37.299Z"),array: [],obj: {_id: 7834,array: [],obj: {}}}},"fresh-thinking",78183,"withdrawal partnerships",54587]});
    },

    function(coll) {
        return coll.insert({_id: 7835,str: "ROI real-time",num: 1269,date: new Date("2018-09-05T20:31:04.310Z"),array: [new Date("2018-09-06T15:02:04.139Z"),"Armenia Fields Handmade Frozen Gloves",38464,"world-class Shoes Home Loan Account",{_id: 7836,str: "auxiliary Solutions",date: new Date("2018-09-05T19:56:35.948Z"),array: [],obj: {}},29910,[new Date("2018-09-06T12:54:41.844Z"),44302],"Tanzanian Shilling convergence",[],"Field",new Date("2018-09-06T00:05:20.132Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7837,str: "RAM workforce withdrawal",num: 75192,date: new Date("2018-09-06T14:52:31.459Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7838,str: "Common",num: 98376,date: new Date("2018-09-06T19:33:48.461Z"),array: [],obj: {_id: 7839,str: "South Dakota plug-and-play methodologies",num: 31043,date: new Date("2018-09-06T08:21:29.504Z"),array: [1601,"niches Tactics extensible",47056,61368,"turquoise Lebanon",{_id: 7840,array: [],obj: {}},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7841,str: "orange expedite",num: 69289,date: new Date("2018-09-06T15:41:35.812Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7842,str: "system Front-line",num: 12366,date: new Date("2018-09-06T04:36:04.697Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7843,str: "functionalities Monaco",num: 28073,date: new Date("2018-09-06T03:34:12.000Z"),array: [],obj: {_id: 7844,str: "olive",date: new Date("2018-09-06T10:16:49.369Z")}});
    },

    function(coll) {
        return coll.insert({_id: 7845,str: "e-markets",num: 60535,date: new Date("2018-09-06T02:52:05.431Z"),array: [91082,66137,new Date("2018-09-06T17:50:41.038Z"),81668,"leading-edge"],obj: {_id: 7846,date: new Date("2018-09-06T17:06:33.300Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7847,str: "action-items invoice synergies",date: new Date("2018-09-06T01:48:12.995Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7848,str: "virtual user-centric",num: 9319,date: new Date("2018-09-06T04:31:50.411Z"),array: [55000,new Date("2018-09-06T06:03:34.593Z"),new Date("2018-09-05T19:57:23.062Z"),[33715,new Date("2018-09-06T11:42:51.752Z"),new Date("2018-09-06T15:12:52.124Z"),{_id: 7849,str: "Dobra SAS Security",num: 20691,date: new Date("2018-09-06T10:04:43.992Z"),array: [],obj: {}},"payment"],42404,"Personal Loan Account Bedfordshire Coordinator","Land Brand",[]]});
    },

    function(coll) {
        return coll.insert({_id: 7850,num: 94131,date: new Date("2018-09-06T19:38:15.684Z"),array: [],obj: {_id: 7851,str: "azure backing up Mali",date: new Date("2018-09-06T13:28:53.126Z"),array: ["Avon even-keeled Money Market Account","Innovative Analyst",33640,new Date("2018-09-06T19:40:39.077Z"),"hacking Beauty",{_id: 7852,str: "workforce San Marino",num: 17371,date: new Date("2018-09-06T02:34:10.487Z"),array: [],obj: {}},[61186,new Date("2018-09-06T12:26:02.031Z"),new Date("2018-09-06T03:24:14.283Z"),{_id: 7853,str: "Savings Account",num: 93405,date: new Date("2018-09-06T18:38:37.938Z"),obj: {_id: 7854,str: "Solutions",date: new Date("2018-09-05T21:32:43.248Z")}}],new Date("2018-09-05T20:44:44.744Z"),98491,{_id: 7855,num: 75690,array: [],obj: {_id: 7856,date: new Date("2018-09-06T05:58:09.740Z")}},[27344,new Date("2018-09-06T14:00:26.501Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7857,str: "Home",num: 72079,date: new Date("2018-09-06T12:55:33.150Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7858,str: "Granite",num: 79674,date: new Date("2018-09-06T13:54:38.259Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7859,str: "Managed Rubber",num: 47907,date: new Date("2018-09-05T20:10:35.502Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7860,str: "system",num: 47027,date: new Date("2018-09-05T21:41:14.305Z"),array: ["Bedfordshire Borders copying",{_id: 7861,str: "HDD",num: 25166,date: new Date("2018-09-06T03:30:02.059Z"),array: [new Date("2018-09-06T04:18:00.295Z"),"synthesizing Home deposit",14387],obj: {_id: 7862,str: "invoice",num: 80281,date: new Date("2018-09-06T14:58:14.589Z"),array: [],obj: {}}},[98947,new Date("2018-09-06T12:18:56.289Z")],"Shirt B2B Lithuanian Litas",39050,{_id: 7863,str: "Turkish Lira Checking Account",date: new Date("2018-09-06T02:56:39.914Z"),obj: {_id: 7864,num: 5074,obj: {}}},new Date("2018-09-06T12:21:07.187Z"),[],{_id: 7865,str: "cross-platform Hat deposit",array: [],obj: {}},82464,"Checking Account firewall open architecture"]});
    },

    function(coll) {
        return coll.insert({_id: 7866,str: "turquoise Money Market Account",num: 11958,date: new Date("2018-09-05T23:15:59.793Z"),array: [],obj: {_id: 7867,str: "Internal program generating",num: 37758,date: new Date("2018-09-06T16:23:50.309Z"),array: [80055,new Date("2018-09-06T02:04:27.807Z"),"homogeneous",new Date("2018-09-06T06:04:04.977Z"),new Date("2018-09-06T02:09:24.327Z"),"compress Applications Representative",[],4153,"website digital array","integrated",{_id: 7868,str: "Concrete 6th generation",date: new Date("2018-09-05T22:06:30.809Z"),array: [],obj: {}},42979],obj: {_id: 7869,str: "Synergistic Manager Wooden",num: 4474,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 7870,str: "Strategist",num: 36214,date: new Date("2018-09-06T02:27:35.692Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7871,str: "data-warehouse COM mobile",num: 11503,date: new Date("2018-09-06T14:30:11.532Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7872,str: "Strategist",num: 12925,date: new Date("2018-09-06T11:07:42.388Z"),array: [],obj: {_id: 7873,str: "Directives Avon Isle",num: 17912,date: new Date("2018-09-06T05:58:03.181Z"),array: ["Handmade disintermediate",4615,15026,{_id: 7874,num: 3335,date: new Date("2018-09-06T00:21:41.790Z"),array: [],obj: {}},new Date("2018-09-06T19:22:51.626Z"),99970,"Operations",new Date("2018-09-06T17:54:42.644Z"),"generating",28642,"Frozen Azerbaijan",{_id: 7875,str: "haptic Sausages",date: new Date("2018-09-05T21:38:48.505Z"),array: [[new Date("2018-09-06T14:23:59.702Z"),[],"Virtual SSL",new Date("2018-09-06T11:52:21.902Z")]],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7876,str: "Functionality",num: 14703,date: new Date("2018-09-06T08:47:59.821Z"),array: [30184,48813,"e-business New Hampshire hub",new Date("2018-09-06T01:08:56.270Z"),{_id: 7877,str: "digital",date: new Date("2018-09-05T21:48:37.593Z"),array: [],obj: {}},"Money Market Account green",[],"Configuration Buckinghamshire invoice",{_id: 7878,str: "Small Plastic Bike Specialist Consultant",num: 34399,obj: {}},23558,new Date("2018-09-05T22:38:53.740Z")],obj: {_id: 7879,str: "Incredible Computers digital",date: new Date("2018-09-06T19:40:41.967Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7880,str: "open-source Club",date: new Date("2018-09-06T10:10:19.363Z"),array: [],obj: {_id: 7881,num: 79767,date: new Date("2018-09-06T11:53:20.427Z"),array: ["Granite Chips","Station Rubber Communications",new Date("2018-09-06T11:42:50.121Z"),{_id: 7882,str: "recontextualize quantify Object-based",num: 7291,date: new Date("2018-09-06T09:08:18.002Z"),obj: {_id: 7883,str: "Unbranded Wooden Computer",num: 96105,date: new Date("2018-09-06T01:54:37.295Z"),obj: {}}},17092,new Date("2018-09-06T13:34:00.663Z"),85145,"Hat Overpass California",["orange",new Date("2018-09-06T12:42:42.974Z")],[[],34731],33701,{_id: 7884,str: "mint green solutions Berkshire",array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 7885,num: 29457,array: [new Date("2018-09-06T10:38:21.657Z"),"Small copying quantifying",new Date("2018-09-06T16:36:14.107Z"),52188,[],{_id: 7886,str: "AI Curve",num: 44787,date: new Date("2018-09-06T08:49:41.360Z"),array: ["Squares Dale"],obj: {_id: 7887,str: "Persevering Grocery",num: 45120,date: new Date("2018-09-06T11:37:46.964Z"),obj: {_id: 7888,str: "Mountain",date: new Date("2018-09-06T11:20:12.328Z"),array: [],obj: {}}}},"reinvent",2837,[{_id: 7889,num: 66135,date: new Date("2018-09-05T20:02:57.898Z"),obj: {}},86960],[],new Date("2018-09-06T15:04:11.057Z"),new Date("2018-09-05T21:03:21.277Z"),33833]});
    },

    function(coll) {
        return coll.insert({_id: 7890,str: "Bedfordshire Developer",num: 34694,date: new Date("2018-09-06T15:14:32.868Z"),array: [],obj: {_id: 7891,str: "24/7 CFA Franc BEAC mobile",date: new Date("2018-09-06T01:50:21.517Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7892,str: "transition",num: 5337,date: new Date("2018-09-05T20:31:16.971Z"),array: ["front-end Motorway Consultant",{_id: 7893,str: "Frozen Borders strategize",num: 76109,date: new Date("2018-09-06T01:18:43.351Z"),array: ["invoice Borders invoice"],obj: {_id: 7894,str: "Unbranded Illinois Fantastic",array: [],obj: {}}},new Date("2018-09-06T13:00:19.051Z"),47978,4250,new Date("2018-09-06T11:57:25.978Z"),new Date("2018-09-06T11:23:50.948Z"),51732,"SCSI Compatible index",[],[],43242],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7895,str: "card Pula",num: 10701,date: new Date("2018-09-06T12:59:07.664Z"),obj: {_id: 7896,num: 76617,date: new Date("2018-09-06T02:02:53.105Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7897,str: "Cotton plum Credit Card Account",num: 39415,date: new Date("2018-09-06T03:37:14.863Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7898,str: "Generic",num: 40815,date: new Date("2018-09-05T23:54:49.072Z"),array: [],obj: {_id: 7899,str: "invoice Assistant virtual",date: new Date("2018-09-06T13:45:05.771Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 7900,num: 85370,date: new Date("2018-09-06T02:23:27.335Z"),array: [],obj: {_id: 7901,str: "firewall",num: 6287,date: new Date("2018-09-06T04:22:15.085Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7902,num: 90744,array: [53011,new Date("2018-09-06T06:29:49.280Z"),new Date("2018-09-05T20:07:48.033Z"),new Date("2018-09-05T20:20:02.041Z"),"tan",85729,"Clothing",{_id: 7903,str: "Sleek Steel Bacon benchmark",num: 69743,date: new Date("2018-09-06T08:42:37.192Z"),array: [],obj: {_id: 7904,str: "architecture Frozen motivating",num: 48351,date: new Date("2018-09-05T21:01:11.277Z"),array: [new Date("2018-09-06T16:14:19.051Z")],obj: {}}},new Date("2018-09-06T08:35:45.894Z"),2487,"bricks-and-clicks Guernsey"],obj: {_id: 7905,num: 52058,date: new Date("2018-09-06T19:36:48.567Z")}});
    },

    function(coll) {
        return coll.insert({_id: 7906,str: "quantifying Cambridgeshire Freeway",num: 6099,date: new Date("2018-09-06T01:56:22.849Z"),array: [15146,new Date("2018-09-05T21:17:18.868Z"),new Date("2018-09-06T03:28:46.843Z"),50006,new Date("2018-09-05T23:40:43.544Z"),"stable Virginia invoice",1983,"Developer plum Steel",{_id: 7907,str: "Granite Liaison Manager",num: 67703,obj: {}},{_id: 7908,date: new Date("2018-09-05T21:58:08.421Z"),array: [],obj: {}},"auxiliary matrix",[[]],{_id: 7909,str: "New Jersey invoice",date: new Date("2018-09-06T07:04:04.703Z"),array: ["Wooden Auto Loan Account"]},new Date("2018-09-06T19:48:47.765Z"),[new Date("2018-09-05T21:30:20.736Z"),new Date("2018-09-06T15:05:26.467Z")]],obj: {_id: 7910,str: "Producer",num: 96732,date: new Date("2018-09-06T18:11:57.521Z"),array: [],obj: {_id: 7911,num: 78107,date: new Date("2018-09-06T07:16:14.656Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 7912,str: "quantifying",num: 97675,date: new Date("2018-09-06T08:49:46.679Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7913,num: 5622,date: new Date("2018-09-06T02:34:11.654Z"),obj: {_id: 7914,str: "Buckinghamshire",date: new Date("2018-09-06T02:00:48.374Z"),array: ["Berkshire Berkshire",[],47878,"Bermuda",new Date("2018-09-05T23:48:12.509Z"),new Date("2018-09-06T09:58:10.140Z"),"parsing",1609,new Date("2018-09-06T13:37:24.258Z"),{_id: 7915,str: "generating Turkey",num: 92118,date: new Date("2018-09-06T04:33:31.114Z"),array: [],obj: {}},{_id: 7916,str: "Face to face",num: 36766,array: []},60658,"Cheese Jordanian Dinar PCI",92707],obj: {_id: 7917,num: 6664,date: new Date("2018-09-06T02:02:48.935Z"),array: [74167],obj: {_id: 7918,str: "transitional withdrawal Automotive",date: new Date("2018-09-06T06:44:18.487Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 7919,str: "withdrawal integrate",num: 87545,date: new Date("2018-09-06T01:06:54.454Z"),array: [new Date("2018-09-06T12:27:07.724Z"),new Date("2018-09-06T00:29:19.032Z"),new Date("2018-09-06T10:27:25.465Z"),["National","pricing structure"],{_id: 7920,str: "Graphic Interface Group Executive",num: 47898,date: new Date("2018-09-06T11:11:56.136Z"),array: [],obj: {_id: 7921,num: 28908,array: [72869,64936],obj: {_id: 7922,str: "Keyboard applications definition",num: 93385,array: [{_id: 7923,str: "circuit expedite human-resource",num: 54782,date: new Date("2018-09-06T08:19:44.403Z"),obj: {}},new Date("2018-09-06T11:18:21.157Z")],obj: {_id: 7924,str: "Cambridgeshire Refined",date: new Date("2018-09-06T11:48:49.360Z")}}}},[],10619,"California",13680,[],{_id: 7925,num: 56935,date: new Date("2018-09-06T12:49:24.433Z")}],obj: {_id: 7926,num: 88955,array: [new Date("2018-09-06T07:01:48.793Z"),"ADP",18619,{_id: 7927,str: "Berkshire Investment Account"}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7928,str: "Garden Beauty bypassing",num: 29790,date: new Date("2018-09-06T02:59:22.354Z"),array: [new Date("2018-09-06T05:24:17.614Z"),{_id: 7929,str: "Assurance connecting withdrawal",num: 29923,date: new Date("2018-09-06T12:47:17.611Z"),array: [],obj: {_id: 7930,num: 30412,date: new Date("2018-09-06T11:43:29.603Z"),array: [34874,"invoice Fantastic Soft Bacon"],obj: {}}},"optical paradigms deposit",new Date("2018-09-06T07:45:36.739Z"),[],46500,"silver logistical",new Date("2018-09-06T16:41:12.838Z"),{_id: 7931,str: "expedite",date: new Date("2018-09-05T20:20:48.795Z"),obj: {_id: 7932,str: "withdrawal",num: 82276}},26301,new Date("2018-09-06T08:57:20.945Z"),new Date("2018-09-05T20:03:55.836Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7933,str: "Tactics Fantastic Technician",num: 83974,date: new Date("2018-09-06T08:19:04.563Z"),array: [],obj: {_id: 7934,str: "Personal Loan Account Refined Architect",num: 15194,date: new Date("2018-09-06T07:08:09.732Z"),obj: {_id: 7935,str: "Berkshire Oklahoma",date: new Date("2018-09-06T13:59:32.983Z"),array: ["deposit Alaska Toys",27164,new Date("2018-09-05T21:28:54.075Z"),{_id: 7936,str: "bluetooth leading-edge JBOD",num: 46199,array: [],obj: {}},26247,"Pants redundant","PNG","functionalities",[],25094,new Date("2018-09-06T02:35:33.432Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 7937,str: "Terrace",date: new Date("2018-09-06T19:50:56.716Z"),array: [39726,70141,"Auto Loan Account",new Date("2018-09-06T04:33:51.549Z"),{_id: 7938,str: "Specialist",num: 62841,date: new Date("2018-09-06T01:24:56.021Z"),obj: {}},99254],obj: {_id: 7939,str: "adapter",num: 53722,date: new Date("2018-09-06T08:09:26.503Z"),array: [5540,"paradigms Internal auxiliary",new Date("2018-09-06T07:30:43.611Z"),["end-to-end Rand Namibia Dollar Facilitator","Kentucky driver installation",{_id: 7940,str: "Soft Chief",num: 71566,date: new Date("2018-09-06T09:11:41.056Z"),array: []}],new Date("2018-09-06T07:38:28.059Z"),85764],obj: {_id: 7941,num: 22256,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7942,str: "Internal",num: 50109,date: new Date("2018-09-06T09:33:29.067Z"),array: [[],new Date("2018-09-06T00:34:26.044Z"),61013,"clicks-and-mortar Direct",40690,new Date("2018-09-06T03:25:26.741Z"),new Date("2018-09-06T09:22:32.246Z"),{_id: 7943,str: "Small",num: 18170,date: new Date("2018-09-06T08:28:28.582Z"),array: [],obj: {}},"program JSON","cyan program","port",{_id: 7944,str: "Global Refined Frozen Chips",num: 17246,date: new Date("2018-09-06T03:15:11.325Z"),array: [{_id: 7945,str: "even-keeled Wooden",num: 11887,date: new Date("2018-09-06T07:28:05.586Z"),array: [[]]},"Cambridgeshire",34295]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7946,str: "input attitude-oriented front-end",num: 62209,date: new Date("2018-09-06T02:29:39.195Z"),array: [],obj: {_id: 7947,str: "Dynamic proactive",num: 35933,date: new Date("2018-09-05T23:19:50.460Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7948,str: "cross-platform architecture Chair",num: 62313,date: new Date("2018-09-06T16:49:16.487Z"),array: [],obj: {_id: 7949,str: "calculate parallelism",num: 1633,array: [85210,[new Date("2018-09-05T22:02:56.906Z")],{_id: 7950,num: 39472,date: new Date("2018-09-05T21:26:20.625Z"),array: [new Date("2018-09-05T23:39:17.864Z")],obj: {_id: 7951,str: "Buckinghamshire Tasty Plastic Mouse",num: 12722,date: new Date("2018-09-06T07:03:26.289Z"),obj: {}}},4217,new Date("2018-09-05T21:11:11.527Z"),{_id: 7952,str: "Baby wireless",date: new Date("2018-09-06T15:34:47.679Z"),array: [],obj: {}},"Progressive Buckinghamshire",35149,32993,"next-generation 1080p invoice",new Date("2018-09-05T20:11:32.376Z"),new Date("2018-09-05T21:15:18.069Z"),"Bedfordshire"],obj: {_id: 7953,str: "Virgin Islands, U.S. bus high-level",num: 33232,date: new Date("2018-09-06T11:47:04.909Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 7954,str: "Implementation",num: 99177,date: new Date("2018-09-06T00:10:36.780Z"),array: [],obj: {_id: 7955,str: "Triple-buffered primary",num: 41249,date: new Date("2018-09-06T12:17:25.482Z"),array: [[95382,12873],new Date("2018-09-06T15:58:01.791Z"),"circuit Divide","SDD calculate grow","Senior Virginia Cheese",84581,new Date("2018-09-06T04:01:45.988Z"),{_id: 7956,str: "Cambridgeshire portal SDD",num: 57285,date: new Date("2018-09-06T15:38:29.620Z"),obj: {}},new Date("2018-09-05T20:30:02.731Z"),new Date("2018-09-06T15:08:12.425Z"),"Concrete USB",[new Date("2018-09-06T10:31:05.539Z"),"compelling deposit payment",67840]],obj: {_id: 7957,date: new Date("2018-09-06T05:05:16.172Z"),obj: {_id: 7958,str: "cross-platform Accountability",array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 7959,str: "invoice",num: 52347,date: new Date("2018-09-06T00:51:15.245Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7960,str: "connecting blue",num: 4724,date: new Date("2018-09-06T05:20:38.493Z"),array: [],obj: {_id: 7961,str: "Accountability Open-architected",date: new Date("2018-09-05T23:52:00.506Z"),array: [[],"French Polynesia New Hampshire",55681,new Date("2018-09-06T03:08:14.128Z"),new Date("2018-09-06T03:57:18.077Z"),{_id: 7962,str: "Iraqi Dinar",num: 19030,array: [],obj: {}},"Incredible Human",10155,1869,18909,{_id: 7963,str: "backing up magenta",num: 40166,array: ["streamline global ADP"]},"web services Open-source Refined Granite Hat",["connecting protocol",63871,new Date("2018-09-06T18:39:15.628Z")],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 7964,str: "Inverse Salad Ergonomic",num: 8587,date: new Date("2018-09-06T07:24:25.129Z"),array: [new Date("2018-09-05T22:36:30.990Z"),{_id: 7965,str: "Land",date: new Date("2018-09-06T06:27:45.650Z"),array: [],obj: {_id: 7966,str: "Engineer attitude-oriented",num: 84611,date: new Date("2018-09-06T11:22:56.529Z"),array: [48788,"Ergonomic Granite Car JSON executive"],obj: {}}},32998,"Branch New Leu Associate",new Date("2018-09-06T15:15:13.206Z"),{_id: 7967,str: "deposit wireless Kina",num: 16838,array: []},"wireless",45096,new Date("2018-09-06T05:23:33.766Z"),["Direct Avon",new Date("2018-09-06T02:53:51.328Z")],"Buckinghamshire Chair",70349]});
    },

    function(coll) {
        return coll.insert({_id: 7968,str: "optical Lake",date: new Date("2018-09-06T14:15:50.319Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 7969,str: "Michigan Synergized",num: 33322,array: [66975,"Orchestrator Officer bandwidth","unleash user-facing",98683,[],new Date("2018-09-05T20:58:29.251Z"),95711],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7970,num: 99519,date: new Date("2018-09-06T14:40:39.098Z"),array: ["application function",24180,"District Checking Account","Refined Granite Towels Wooden motivating",new Date("2018-09-06T06:01:38.671Z"),"e-tailers",9795,new Date("2018-09-06T09:59:31.626Z"),[],new Date("2018-09-06T10:12:07.143Z"),new Date("2018-09-05T23:52:27.303Z"),77781,new Date("2018-09-06T10:00:34.248Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7971,str: "Boliviano Mvdol",num: 96531,date: new Date("2018-09-05T20:47:00.518Z"),array: [new Date("2018-09-06T10:03:17.593Z"),"purple",52852,54219,84205,new Date("2018-09-06T15:29:40.815Z"),[],25518,new Date("2018-09-06T08:01:44.676Z"),"wireless Auto Loan Account Berkshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7972,str: "Credit Card Account",num: 61312,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7973,num: 54124,date: new Date("2018-09-06T06:23:01.985Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 7974,str: "CFA Franc BCEAO",num: 31195,date: new Date("2018-09-06T01:43:37.254Z"),array: [new Date("2018-09-06T11:33:54.639Z"),67922,[],"strategic RAM",new Date("2018-09-06T19:06:58.186Z"),"users Shoes Sports",new Date("2018-09-06T17:28:35.712Z"),52724,89935,{_id: 7975,str: "groupware Regional",num: 92486,date: new Date("2018-09-06T05:59:35.472Z"),obj: {}},{_id: 7976,str: "Officer Malaysia",num: 18421,date: new Date("2018-09-06T06:28:32.285Z"),array: [],obj: {_id: 7977,num: 20402,date: new Date("2018-09-06T12:37:06.747Z"),array: [],obj: {_id: 7978,str: "Hill",num: 22832,obj: {_id: 7979,str: "solid state",num: 43643,date: new Date("2018-09-06T07:56:22.290Z"),array: [],obj: {}}}}},[11624],["hard drive Israel Lithuania",34940],{_id: 7980,str: "turn-key azure",array: [new Date("2018-09-06T04:50:51.655Z"),new Date("2018-09-06T04:50:20.797Z"),"International"],obj: {}},new Date("2018-09-06T10:59:33.825Z"),"innovative AGP Bacon"]});
    },

    function(coll) {
        return coll.insert({_id: 7981,str: "Team-oriented value-added",num: 29820,date: new Date("2018-09-06T12:22:03.993Z"),obj: {_id: 7982,str: "SCSI",num: 8662,date: new Date("2018-09-06T18:20:14.559Z"),array: [6633,new Date("2018-09-06T18:08:52.773Z"),91246,"aggregate Front-line haptic",68482,[],"Rupiah AGP Borders",new Date("2018-09-06T01:34:06.417Z"),new Date("2018-09-05T22:11:09.992Z"),{_id: 7983,str: "Music system",date: new Date("2018-09-06T15:23:47.764Z"),array: [[new Date("2018-09-06T14:56:35.000Z")],new Date("2018-09-06T07:00:02.960Z"),"bandwidth Kenya Rubber"],obj: {}},7050]}});
    },

    function(coll) {
        return coll.insert({_id: 7984,str: "Towels synthesize AGP",num: 87344,date: new Date("2018-09-06T00:48:40.202Z"),array: [new Date("2018-09-06T00:54:04.909Z"),"Borders Practical Frozen Bacon scale",["mindshare French Guiana Reactive",{_id: 7985,str: "yellow benchmark",num: 42271,date: new Date("2018-09-06T16:25:30.231Z"),array: [],obj: {}}],19741,36781,new Date("2018-09-06T00:38:14.501Z"),[{_id: 7986,str: "Accounts",num: 27291,date: new Date("2018-09-06T12:57:41.474Z"),array: [],obj: {_id: 7987,str: "encompassing Investment Account",num: 37553,date: new Date("2018-09-06T08:22:48.948Z"),array: [],obj: {_id: 7988,num: 52046,obj: {_id: 7989,str: "Bedfordshire Intelligent Unbranded Frozen Chicken",date: new Date("2018-09-06T00:36:06.796Z"),obj: {}}}}}],"secured line",49088,29632,"Central",new Date("2018-09-05T21:41:44.140Z")]});
    },

    function(coll) {
        return coll.insert({_id: 7990,str: "Licensed",num: 32986,date: new Date("2018-09-06T00:55:08.025Z"),array: [],obj: {_id: 7991,num: 60646,date: new Date("2018-09-05T23:29:07.341Z"),array: [new Date("2018-09-06T00:32:43.115Z"),"metrics harness Gourde US Dollar",91287,[],"payment Generic Steel Shoes synergistic",61520,74245,[],"Tasty Cotton Keyboard Cape Verde Borders",new Date("2018-09-06T04:56:28.395Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7992,str: "programming Home Loan Account",num: 61920,date: new Date("2018-09-05T21:38:58.948Z"),array: [new Date("2018-09-06T15:01:49.818Z"),27969,new Date("2018-09-05T21:39:05.356Z"),{_id: 7993,str: "Handcrafted Soft Chicken Mouse",num: 89284,date: new Date("2018-09-06T00:04:46.512Z"),array: [],obj: {}},"plum",[],[],97446,new Date("2018-09-06T01:13:36.353Z"),10117,"Toys panel navigating"],obj: {_id: 7994,str: "Belarus Checking Account Soft",num: 22924,date: new Date("2018-09-06T12:57:56.176Z"),array: ["benchmark e-business deposit",new Date("2018-09-06T09:20:58.749Z"),new Date("2018-09-06T12:39:39.105Z"),14508],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 7995,str: "architectures Markets website",num: 59038,date: new Date("2018-09-06T06:50:22.917Z"),array: [[],new Date("2018-09-06T07:14:24.568Z"),new Date("2018-09-06T13:50:48.380Z"),7034,new Date("2018-09-05T23:05:42.432Z"),"overriding blue","bluetooth",{_id: 7996,num: 74440,array: [16581],obj: {_id: 7997,str: "Personal Loan Account Officer",num: 19337,date: new Date("2018-09-05T23:04:25.206Z"),array: [{_id: 7998,str: "Forward Branding",num: 5963,date: new Date("2018-09-06T07:37:44.306Z"),obj: {_id: 7999,str: "Keyboard mission-critical Branding",date: new Date("2018-09-06T01:44:00.546Z"),array: ["Agent supply-chains incubate",82871],obj: {}}},new Date("2018-09-06T15:37:51.093Z")]}},[new Date("2018-09-06T00:45:08.765Z")],68513,"withdrawal",95025],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8000,str: "redundant Money Market Account Awesome",num: 18721,date: new Date("2018-09-06T05:52:42.788Z"),obj: {_id: 8001,str: "Italy Money Market Account Buckinghamshire",num: 18129,date: new Date("2018-09-05T20:56:01.302Z"),array: ["maximize vertical productize","microchip",{_id: 8002,num: 2027,date: new Date("2018-09-05T20:03:51.731Z"),array: [],obj: {_id: 8003,str: "Bedfordshire",array: [51668]}},{_id: 8004,str: "Unbranded Wooden Pants",date: new Date("2018-09-06T07:22:22.652Z"),array: [],obj: {_id: 8005,str: "payment Rustic",num: 24510,date: new Date("2018-09-06T19:17:53.633Z"),array: [new Date("2018-09-06T00:36:39.063Z"),new Date("2018-09-06T00:01:29.285Z")],obj: {}}},new Date("2018-09-05T20:12:45.055Z"),14560,"Refined navigate",[],18710,new Date("2018-09-05T23:45:40.446Z"),[],17760],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8006,str: "application Investment Account American Samoa",num: 3523,date: new Date("2018-09-06T04:11:20.778Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8007,num: 34203,date: new Date("2018-09-06T17:42:36.476Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8008,num: 67463,date: new Date("2018-09-06T10:04:49.692Z"),array: [96261,{_id: 8009,str: "Designer National Granite",num: 94102,array: [],obj: {}},new Date("2018-09-05T23:56:58.522Z"),[],{_id: 8010,str: "Handcrafted Concrete Chair",num: 27354,date: new Date("2018-09-06T18:16:04.743Z"),array: ["Fresh",13577,new Date("2018-09-05T22:40:48.493Z"),[new Date("2018-09-06T11:31:59.797Z"),new Date("2018-09-06T11:38:29.430Z"),"navigate Orchestrator"],new Date("2018-09-06T04:21:38.738Z"),{_id: 8011,str: "auxiliary Bedfordshire",num: 62815,date: new Date("2018-09-06T12:45:04.449Z"),array: [],obj: {}},"Integration Louisiana Metal",new Date("2018-09-05T23:12:30.411Z"),[78693,"deposit",["Investment Account Steel",87495]]]}],obj: {_id: 8012,str: "Louisiana front-end",num: 66255,date: new Date("2018-09-05T21:21:55.545Z"),obj: {_id: 8013,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 8014,str: "Direct override Salad",num: 78345,date: new Date("2018-09-06T01:03:51.094Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8015,str: "interface whiteboard",num: 58818,date: new Date("2018-09-05T21:43:41.648Z"),obj: {_id: 8016,str: "generating Direct AI",num: 76656,date: new Date("2018-09-06T02:47:33.506Z"),array: [],obj: {_id: 8017,str: "Congo Robust 6th generation",num: 62031,date: new Date("2018-09-05T20:46:34.424Z"),array: [42458,{_id: 8018,str: "robust hard drive",date: new Date("2018-09-06T04:49:00.021Z"),array: [],obj: {}},"Auto Loan Account programming","array alarm haptic","Fresh Global",[new Date("2018-09-06T14:45:29.625Z"),"optimize Cotton attitude",56962],56428,new Date("2018-09-06T00:24:14.927Z"),{_id: 8019,array: [new Date("2018-09-06T07:42:16.585Z"),[73498,new Date("2018-09-06T09:06:01.257Z")],15792,"card",new Date("2018-09-06T12:04:51.807Z")]},{_id: 8020,num: 98032,date: new Date("2018-09-06T04:51:47.233Z"),array: [],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 8021,str: "hacking",date: new Date("2018-09-06T12:27:47.595Z"),array: [],obj: {_id: 8022,str: "1080p strategy withdrawal",array: [new Date("2018-09-06T01:45:20.308Z"),new Date("2018-09-05T21:20:48.593Z"),"wireless Tennessee",15299,93826,"national Hawaii Communications",[],{_id: 8023,str: "Avon Auto Loan Account Handcrafted",num: 79375,obj: {_id: 8024,str: "blue Guinea Franc",num: 91984,date: new Date("2018-09-06T05:14:59.226Z"),array: [],obj: {}}}],obj: {_id: 8025,num: 81732,date: new Date("2018-09-05T20:45:52.322Z"),array: ["Unbranded Fresh Shoes"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8026,str: "function Salad Maine",num: 65438,date: new Date("2018-09-05T23:05:09.265Z"),array: [96168,[59102,[],22429,"compressing RAM Personal Loan Account",new Date("2018-09-06T12:20:28.730Z")],"collaborative","reboot",45424,63485,new Date("2018-09-06T10:36:25.280Z"),{_id: 8027,str: "withdrawal",num: 34417,date: new Date("2018-09-06T07:15:40.472Z"),array: [{_id: 8028,str: "CFA Franc BEAC Personal Loan Account",array: [],obj: {_id: 8029,str: "impactful orange",num: 19452,date: new Date("2018-09-06T06:38:16.812Z"),array: [new Date("2018-09-06T01:33:30.990Z")]}}],obj: {_id: 8030,str: "Sleek Soft Chair Leone Hat",num: 63661,date: new Date("2018-09-06T02:13:14.507Z"),obj: {_id: 8031,num: 30435}}},new Date("2018-09-06T13:32:13.709Z"),[921,new Date("2018-09-06T19:38:19.412Z"),{_id: 8032,num: 50000,date: new Date("2018-09-06T15:10:09.514Z"),array: ["Kids Configuration Bedfordshire"]}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8033,str: "initiatives reciprocal HTTP",num: 22086,date: new Date("2018-09-05T20:37:14.126Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8034,str: "Industrial methodology",num: 41823,date: new Date("2018-09-06T01:30:11.945Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 8035,str: "XSS",num: 98358,date: new Date("2018-09-05T21:54:52.193Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8036,str: "intermediate PCI Berkshire",date: new Date("2018-09-06T00:50:26.439Z"),array: [158,{_id: 8037,str: "capacitor plum e-enable",num: 65211,date: new Date("2018-09-06T08:02:10.751Z"),array: [],obj: {}},25074,"mesh Sleek Frozen Car",new Date("2018-09-06T18:40:37.639Z"),[],new Date("2018-09-05T20:27:33.887Z"),new Date("2018-09-06T00:21:35.231Z")]});
    },

    function(coll) {
        return coll.insert({_id: 8038,str: "Developer District",num: 252,date: new Date("2018-09-05T20:16:52.860Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8039,str: "Supervisor Investment Account",date: new Date("2018-09-06T05:32:37.728Z"),array: [79949,new Date("2018-09-05T21:27:10.336Z"),"Tasty Frozen Soap",77642,new Date("2018-09-06T00:50:03.690Z"),"District Mauritius Rupee hack","Solutions Human",[],86368,"Shoes",new Date("2018-09-06T14:02:14.318Z"),new Date("2018-09-05T23:17:57.264Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8040,str: "repurpose Granite indexing",num: 61989,date: new Date("2018-09-05T20:20:16.830Z"),array: [],obj: {_id: 8041,str: "port",date: new Date("2018-09-06T01:36:20.011Z"),array: [16786,90559,new Date("2018-09-06T17:01:19.947Z"),{_id: 8042,str: "extend",num: 2834,array: [new Date("2018-09-06T17:00:17.340Z"),"portal Metrics",new Date("2018-09-05T20:59:25.861Z"),"Generic Fresh Fish Christmas Island"],obj: {_id: 8043,str: "Credit Card Account USB Bedfordshire",num: 27674,array: [],obj: {}}},[],[]],obj: {_id: 8044,date: new Date("2018-09-05T21:40:33.808Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8045,str: "sky blue",date: new Date("2018-09-06T00:19:16.126Z"),array: [new Date("2018-09-05T19:58:01.465Z"),[],85229,"Checking Account",79426,"Direct Steel"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8046,str: "Soft",num: 91034,date: new Date("2018-09-06T07:41:21.938Z"),array: ["systems Route Awesome Plastic Cheese",new Date("2018-09-06T05:31:53.284Z"),[],"Infrastructure Handcrafted SQL","methodology hacking Forward",23082,{_id: 8047,num: 33572,array: ["Grocery Toys indexing"],obj: {}},new Date("2018-09-06T09:09:50.045Z"),84152],obj: {_id: 8048,str: "Rubber global withdrawal",num: 10966,date: new Date("2018-09-06T14:31:13.734Z"),array: [],obj: {_id: 8049,str: "Handcrafted Plastic Tuna withdrawal Plastic",num: 76555,date: new Date("2018-09-06T09:39:03.952Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 8050,str: "Granite",date: new Date("2018-09-06T11:08:49.725Z"),array: ["copying deposit","Multi-lateral Fish",20748,{_id: 8051,str: "analyzer JSON",num: 85004,date: new Date("2018-09-06T14:20:15.262Z"),array: [],obj: {_id: 8052,num: 22941,date: new Date("2018-09-05T23:26:39.978Z")}},"withdrawal monetize Georgia",new Date("2018-09-06T10:25:30.331Z"),[],"Bacon",33923],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8053,num: 1254,date: new Date("2018-09-06T08:38:37.997Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8054,str: "Chief bluetooth application",num: 78224,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8055,str: "Strategist",date: new Date("2018-09-06T11:49:14.212Z"),array: ["Refined 1080p",30511,26844,{_id: 8056,str: "pixel",num: 35346,date: new Date("2018-09-06T08:41:53.519Z"),array: [88228,new Date("2018-09-06T12:30:16.472Z"),{_id: 8057,num: 35477,obj: {_id: 8058,str: "Malagasy Ariary multi-byte Creative",num: 93254,date: new Date("2018-09-06T17:04:00.989Z"),array: [],obj: {_id: 8059,date: new Date("2018-09-06T07:22:27.581Z"),array: [],obj: {}}}},64920]},new Date("2018-09-06T04:02:23.153Z"),new Date("2018-09-06T03:17:48.140Z"),"programming TCP",new Date("2018-09-06T12:10:18.485Z"),[81712],"magenta bricks-and-clicks Buckinghamshire",[],{_id: 8060,str: "Tala",num: 30835,array: []}],obj: {_id: 8061,num: 54060,array: [new Date("2018-09-06T01:56:58.553Z"),75836,24252]}});
    },

    function(coll) {
        return coll.insert({_id: 8062,str: "Operations vertical",num: 22890,date: new Date("2018-09-06T02:55:19.535Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8063,str: "Frozen turquoise Extended",num: 54775,date: new Date("2018-09-06T01:34:20.510Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8064,str: "indexing Wooden",date: new Date("2018-09-06T17:41:34.964Z"),array: [{_id: 8065,str: "bifurcated contextually-based Books",num: 39616,date: new Date("2018-09-06T18:07:55.715Z"),array: [],obj: {_id: 8066,str: "Investment Account",num: 87978,date: new Date("2018-09-06T17:33:10.796Z"),obj: {_id: 8067,str: "Soft leverage digital",num: 98774,date: new Date("2018-09-06T00:18:36.954Z"),array: [],obj: {_id: 8068,str: "e-services",num: 5724,array: ["solid state cross-media",11080,29280,new Date("2018-09-06T00:06:51.107Z"),new Date("2018-09-06T18:48:57.999Z")]}}}},"RAM optical Club",[71442,16637,"Paradigm",new Date("2018-09-06T04:43:35.328Z")],"connecting",new Date("2018-09-06T06:21:45.363Z"),{_id: 8069,obj: {}},[],{_id: 8070,num: 39536},"aggregate portals Internal"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8071,str: "virtual",num: 26644,date: new Date("2018-09-06T00:45:19.568Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8072,str: "index salmon",num: 29102,date: new Date("2018-09-06T15:14:16.325Z"),array: [],obj: {_id: 8073,str: "THX Practical Fresh Pants withdrawal",num: 10964,date: new Date("2018-09-06T12:18:19.826Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8074,str: "Group overriding Bacon",num: 34381,date: new Date("2018-09-06T11:16:23.851Z"),array: [{_id: 8075,num: 9673,date: new Date("2018-09-06T05:24:46.404Z"),array: [[new Date("2018-09-06T02:33:59.845Z"),new Date("2018-09-06T01:01:09.828Z")]],obj: {_id: 8076,str: "pink",num: 92850,date: new Date("2018-09-06T03:40:54.006Z"),obj: {}}},44766,29554,[],"Tasty Granite Fish","Minnesota Orchestrator Aruban Guilder",new Date("2018-09-06T18:40:34.369Z"),"Trafficway Connecticut Ergonomic Frozen Keyboard","SAS THX",33800,"sensor Identity",{_id: 8077,num: 21741,array: []}],obj: {_id: 8078,str: "Generic Soft Ball",num: 83768,date: new Date("2018-09-06T00:00:25.426Z"),array: [],obj: {_id: 8079,str: "primary Denmark",array: [[],75823,14423,new Date("2018-09-06T07:15:27.985Z"),"transmitting"],obj: {_id: 8080,num: 23062}}}});
    },

    function(coll) {
        return coll.insert({_id: 8081,str: "Camp Integration indexing",num: 36702,date: new Date("2018-09-06T16:27:53.659Z"),array: [],obj: {_id: 8082,str: "Adaptive wireless deposit",num: 70826,date: new Date("2018-09-06T19:45:58.795Z"),array: ["generate portals",new Date("2018-09-06T01:12:47.655Z"),"withdrawal","Intelligent Cotton Towels",new Date("2018-09-06T06:56:16.747Z"),[72889,{_id: 8083,str: "brand",num: 31617,array: [],obj: {_id: 8084,date: new Date("2018-09-06T15:21:17.271Z"),array: [],obj: {_id: 8085,str: "card",date: new Date("2018-09-05T20:38:40.327Z"),array: [],obj: {}}}}],92055,27365,{_id: 8086,str: "Usability",num: 15040},["Saudi Arabia fuchsia Dynamic"],new Date("2018-09-06T05:30:46.948Z"),new Date("2018-09-06T16:45:55.500Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8087,str: "actuating Accounts",num: 2478,date: new Date("2018-09-06T10:16:11.460Z"),array: [new Date("2018-09-05T21:40:11.176Z"),"tertiary hybrid",56856,"Avon","static real-time Congolese Franc",54560,new Date("2018-09-06T04:32:34.199Z"),53388],obj: {_id: 8088,str: "actuating customized",num: 62471,date: new Date("2018-09-06T02:15:01.645Z"),array: [],obj: {_id: 8089,str: "Tasty impactful Home Loan Account",obj: {_id: 8090,str: "Aruba",array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 8091,str: "silver Bond Markets Units European Composite Unit (EURCO) customized",num: 76497,date: new Date("2018-09-06T16:16:55.986Z")});
    },

    function(coll) {
        return coll.insert({_id: 8092,str: "Manager Concrete",num: 58567,date: new Date("2018-09-06T12:33:38.557Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8093,str: "Assurance Vermont South Dakota",num: 60555,date: new Date("2018-09-06T17:50:00.565Z"),array: [new Date("2018-09-05T23:15:12.524Z"),4073,"relationships","IB","supply-chains protocol SSL",[],36324,"Agent Sleek Steel Car",{_id: 8094,num: 21757,date: new Date("2018-09-06T06:53:25.761Z"),array: [58620],obj: {_id: 8095,str: "Granite navigating Berkshire",num: 21750,date: new Date("2018-09-06T05:07:35.075Z"),obj: {_id: 8096,str: "Indonesia",num: 99918}}},[],new Date("2018-09-06T11:04:01.639Z"),{_id: 8097,num: 41666,date: new Date("2018-09-06T18:08:06.969Z"),array: [],obj: {}},{_id: 8098,str: "tan Developer navigating",date: new Date("2018-09-06T18:05:58.451Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8099,str: "Awesome Operations",num: 47441,date: new Date("2018-09-05T20:07:15.613Z"),array: [{_id: 8100,num: 90466,date: new Date("2018-09-06T16:25:15.270Z"),array: [],obj: {}},79527,new Date("2018-09-06T13:46:40.105Z"),"Arkansas",{_id: 8101,str: "bypass Personal Loan Account",array: [],obj: {_id: 8102,str: "schemas",date: new Date("2018-09-06T14:11:26.972Z"),array: [],obj: {_id: 8103,str: "copying Personal Loan Account",num: 75337,date: new Date("2018-09-06T13:14:07.997Z")}}},"red",new Date("2018-09-05T20:31:04.959Z"),["Green",98259,new Date("2018-09-06T10:20:44.407Z")],new Date("2018-09-06T19:39:06.226Z"),"empower Berkshire Hungary",65130,[new Date("2018-09-06T12:51:45.516Z"),44187]],obj: {_id: 8104,str: "e-business",num: 17347,array: [new Date("2018-09-06T12:15:07.945Z"),[{_id: 8105,num: 18540,date: new Date("2018-09-05T23:14:49.533Z"),array: [[]]},70073]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8106,str: "lime",num: 62041,date: new Date("2018-09-05T23:00:27.550Z"),array: [new Date("2018-09-06T05:29:10.991Z"),{_id: 8107,str: "back up Spur",num: 61194,date: new Date("2018-09-06T02:04:16.383Z"),array: [],obj: {_id: 8108,obj: {_id: 8109,str: "application Grocery",num: 38401,date: new Date("2018-09-06T05:17:57.805Z"),obj: {}}}},new Date("2018-09-06T18:55:11.944Z"),new Date("2018-09-06T03:30:20.807Z"),"Licensed SSL",72466,"Kids",57880,63558,24409],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8110,str: "digital JSON Avon",num: 40701,array: [new Date("2018-09-06T19:51:36.236Z"),"wireless",new Date("2018-09-06T04:28:39.071Z"),[],457,"invoice",7172,[{_id: 8111,str: "deposit",num: 32648,date: new Date("2018-09-05T23:05:44.747Z"),array: [],obj: {}},45232,61344,new Date("2018-09-06T03:42:52.170Z")],33780,{_id: 8112,str: "Refined Soft Computer Rustic Steel Shirt",num: 70678,date: new Date("2018-09-06T17:58:00.018Z"),array: [],obj: {_id: 8113,str: "infomediaries",date: new Date("2018-09-06T14:30:18.914Z"),obj: {_id: 8114,num: 10300,date: new Date("2018-09-06T17:10:14.118Z")}}},{_id: 8115,str: "CSS array",num: 22633,array: ["HTTP Small uniform"],obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8116,str: "quantify deposit Optimization",num: 92545,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8117,str: "Fresh Compatible",num: 1998,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8118,str: "interactive West Virginia",num: 43217,date: new Date("2018-09-05T22:25:41.515Z"),obj: {_id: 8119,num: 93871,date: new Date("2018-09-05T21:04:58.339Z"),array: [],obj: {_id: 8120,array: [new Date("2018-09-06T17:39:40.761Z"),{_id: 8121,str: "support index",num: 80972,array: [],obj: {}},new Date("2018-09-06T06:46:26.212Z"),"Soft",[new Date("2018-09-06T14:46:40.304Z")],87815,"connecting Division",39134,new Date("2018-09-06T18:52:30.469Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 8122,str: "calculate Intelligent Fresh Pants Kansas",num: 32127,date: new Date("2018-09-06T19:28:32.414Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8123,num: 60071,date: new Date("2018-09-06T15:57:56.115Z"),array: [4653,"Money Market Account transmitting Markets",new Date("2018-09-06T17:53:00.913Z"),"Administrator Director Salad",new Date("2018-09-06T19:00:31.282Z"),97265,{_id: 8124,str: "connect Cheese",num: 74453,date: new Date("2018-09-06T10:04:23.194Z"),array: [new Date("2018-09-06T19:36:31.475Z"),[],["cross-platform Greens",15206],{_id: 8125,str: "time-frame",num: 39964,array: [12906,"hacking",new Date("2018-09-06T19:54:59.210Z")],obj: {}},"deposit Investor Games",new Date("2018-09-06T12:30:59.217Z")],obj: {_id: 8126,str: "RAM",date: new Date("2018-09-06T10:19:17.334Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 8127,str: "Avon eyeballs Michigan",num: 43502,date: new Date("2018-09-06T01:56:38.736Z"),array: [36975,new Date("2018-09-06T07:02:32.138Z"),"Synergized multi-byte",new Date("2018-09-06T19:23:55.519Z"),70013,"Mauritania cyan Tasty",42166,79225,[],[],new Date("2018-09-06T15:12:43.561Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8128,str: "Malta De-engineered",date: new Date("2018-09-05T21:26:53.774Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8129,str: "Bond Markets Units European Composite Unit (EURCO) radical Credit Card Account",num: 59428,date: new Date("2018-09-06T18:48:59.098Z"),array: [],obj: {_id: 8130,num: 27328,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8131,num: 60866,date: new Date("2018-09-06T19:02:03.009Z"),array: [],obj: {_id: 8132,str: "JBOD Fantastic Granite Soap cultivate",num: 45987,date: new Date("2018-09-05T23:44:02.613Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8133,str: "Chicken Crest",date: new Date("2018-09-06T02:11:03.270Z"),array: [96434,new Date("2018-09-05T20:28:31.369Z"),"hacking Handmade Metal Shoes",14794,[],"Technician",new Date("2018-09-06T07:44:11.863Z"),new Date("2018-09-06T02:58:52.638Z"),"North Dakota Wyoming Games","District Mozambique",[],46483],obj: {_id: 8134,str: "quantifying users",num: 56668,date: new Date("2018-09-06T00:34:08.376Z"),array: [{_id: 8135,str: "Division French Guiana",num: 33820,date: new Date("2018-09-06T19:13:50.931Z"),obj: {}},{_id: 8136,str: "blue",num: 85449,date: new Date("2018-09-06T10:07:57.330Z"),array: [9165,new Date("2018-09-06T16:20:37.891Z")]},"Borders modular",{_id: 8137,num: 63772,array: [1814],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 8138,num: 43482,date: new Date("2018-09-06T05:09:35.951Z"),array: [15289,"United Arab Emirates Manors","Pizza quantifying International",7891,50321,"payment Lek",new Date("2018-09-06T13:06:47.950Z"),[],4106],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8139,str: "Operations Indiana",num: 45370,date: new Date("2018-09-06T02:07:07.553Z"),array: []});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.str": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $week: { $week: { $dateFromString: {dateString: "2018-09-06T18:45:03.076Z",format: "%m-%u-%U-%%-%m-%Y-%U-%j-%z",timezone: "Asia/Kuwait"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],{ $cmp: [{ $arrayToObject: [[["Cedi plum",{ $ltrim: { input: "Plastic Face to face Center" } }],[],[{ $rtrim: { input: { $substrBytes: ['$obj.obj.obj.str',0,3] } } },{ $substrBytes: ['$obj.str',10,11] },"Money Market Account web services","Fords Frozen multi-byte"]]] },{ $arrayElemAt: [[],'$obj.obj.num'] }] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "AGP magenta",v: 54938}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'candelario',cond: { $isArray: [{ $arrayElemAt: [['$$candelario'],12972] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ['$obj.obj.obj.str',15,4] },"panel Awesome Rubber Car Hawaii",{ $substrCP: [{ $substr: ["Generic",1,2] },14,2] }],[42955,'$obj.num','$obj.obj.num'],['$str',"embrace Product"],[{ $toLower: '$obj.obj.obj.str' },"Frozen"],[]]] }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeekYear: { $millesecond: { $isoWeekYear: { $isoDayOfWeek: { $toDate: { $arrayElemAt: [["Plastic circuit Indiana","white compress"],'$num'] } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfYear: { $minute: { $hour: { $toDate: { $arrayToObject: [[{k: "Automotive",v: 5959},{k: "visualize global",v: { $concat: [{ $dateToString: {date: '$date',format: "%U-%d-%z-%j-%M-%G-%%-%Z-%U-%m",timezone: "Pacific/Majuro",onNull: { $arrayElemAt: [['$obj.str'],29841] }} }] }}]] } } } } },timezone: "Asia/Thimbu",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfMonth: { $hour: { $dateToString: {date: '$obj.obj.obj.date',format: "%M-%u-%V-%S-%S-%Y-%M-%u-%u-%u-%z-%Y",timezone: "Asia/Riyadh"} } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "viral 3rd generation" } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $log: ['$obj.obj.obj.num','$obj.obj.obj.num'] },isoDayOfWeek: { $abs: 36843 },hour: { $exp: 14976 },minute: { $pow: [61960,'$obj.obj.obj.num'] },second: { $ceil: { $log10: { $ceil: '$obj.num' } } },millisecond: { $sqrt: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substrCP: [{ $rtrim: { input: '$obj.obj.str' } },15,4] } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[false,'$obj.obj.date',{ $dateToParts: {date: { $millesecond: { $toDate: { $filter: {input: [],as: 'jevon',cond: { $ne: [{ $arrayToObject: [[['$$jevon']]] },{ $dayOfWeek: { $hour: { $dateToParts: { date: { $week: { $dateToParts: {date: { $month: { $minute: '$$jevon' } },timezone: "Africa/Khartoum",iso8601: true} } } } } } }] }} } } },iso8601: false} },"HDD"]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T02:56:59.025Z",format: "%L-%L-%G-%d",onNull: "open system port"} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToParts: {date: { $dayOfMonth: { $dayOfYear: { $second: { $isoWeekYear: { $dateToParts: {date: { $dayOfYear: { $dateFromParts: {year: { $ceil: '$obj.num' },hour: { $abs: '$num' },minute: { $cmp: [{ $dayOfMonth: { $week: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T17:18:51.153Z"),timezone: "America/Thule",onNull: "web-readiness Wooden"} } } } },{ $arrayToObject: [[[],["project",'$obj.obj.obj.str'],[{ $toUpper: { $trim: { input: "Health application" } } }],['$num',89368],[]]] }] },second: { $floor: 51915 },millisecond: { $abs: 80176 }} } },iso8601: false} } } } } },timezone: "America/Resolute"} } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $rtrim: { input: { $substrCP: ['$str',18,0] } } }]],defaults: ["PCI Coordinator",false]} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["solid state Integration",{ $trim: {input: '$obj.obj.obj.str',chars: "Forward Fresh Jamaican Dollar"} }],[{ $ltrim: { input: { $substr: ['$obj.str',2,0] } } },"generating Exclusive Djibouti Franc"],[],[{ $rtrim: { input: "New York virtual Public-key" } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["homogeneous bluetooth"]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "contextually-based circuit",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $multiply: ['$$this'] }} }, _id: 0}}],

        [{$project: {a: { $toLower: "Iranian Rial radical monetize" }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $isoDayOfWeek: '$obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Well Towels",v: '$obj.obj.str'},{k: "Coordinator mobile salmon",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[60098,'$obj.obj.num',770],50197] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $ltrim: {input: "connecting",chars: '$obj.obj.obj.str'} }],35194] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Buckinghamshire coherent Canadian Dollar",v: { $toLower: '$obj.obj.obj.str' }}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str',{ $substrCP: ["override synthesize Fantastic Granite Bacon",14,3] }],as: 'max',in: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.str',0,18] }],64440] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str'] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],[{ $concat: ['$obj.str','$obj.obj.obj.str'] }],[],["Solutions Markets"],["Generic Soft Shoes non-volatile",{ $substrCP: ['$obj.obj.str',20,4] },{ $substr: ["Wooden Directives Facilitator",9,13] },{ $trim: { input: "brand reinvent" } }],[71378,'$num','$obj.num'],['$obj.obj.num',53966,{ $subtract: ['$num',{ $pow: [66325,'$obj.obj.num'] }] }]] } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["users",10,8] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],99591] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Solutions applications",chars: "Internal evolve"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',75938,'$num'],{ $log10: 18108 }] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toLower: "Wooden copying Identity" },5,18] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[61604,true,'$obj.num',{ $trim: {input: "program",chars: '$obj.obj.str'} }],21905] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.str',{ $substrBytes: ['$obj.obj.obj.str',12,13] },'$obj.str'],["Bulgarian Lev"],["Vista bandwidth Timor-Leste",'$obj.obj.str'],['$obj.num','$obj.num'],[66599]],defaults: ["program"]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $multiply: [65723] },'$obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[],[18332]]] } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],[],['$obj.num','$num'],["programming",{ $dateToString: { date: new Date("2018-09-06T00:25:18.902Z") } }],[53985,62499],['$obj.num',{ $pow: ['$obj.num','$obj.obj.obj.num'] },22083],["wireless SDD Maine"]] } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[{ $substr: ["Car",20,7] },{ $toUpper: "invoice circuit Principal" },'$obj.obj.str'],86399] } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'lonie',cond: { $gte: [{ $substrBytes: ["maroon",17,4] },{ $arrayElemAt: [['$obj.obj.obj.str'],'$obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToParts: {date: { $dayOfYear: { $dayOfWeek: { $dayOfYear: { $dayOfMonth: { $millesecond: { $dateFromParts: { isoWeekYear: 43394 } } } } } } },timezone: "Brazil/Acre",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Bedfordshire software invoice",chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Intelligent","Fresh"],[{ $rtrim: {input: "action-items",chars: "Bedfordshire"} }],[73980],[],[]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Lead algorithm Belarussian Ruble",'$obj.obj.str'],as: 'linnie',in: { $size: [[]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $substrBytes: ["transmit",12,17] }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Garden web-enabled",{ $concat: ['$str','$str',{ $toUpper: '$obj.obj.obj.str' }] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: '$obj.obj.obj.str' } }],13682] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T16:21:22.797Z",format: "%U-%z-%u-%m-%w",timezone: "Brazil/Acre"} }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handmade South Dakota",v: 96069}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: '$obj.obj.obj.date',format: "%Z-%m-%U-%Z-%Z",onNull: "Auto Loan Account envisioneer"} }],[],['$str',"applications Cambridgeshire driver"],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.num',94490],['$str','$obj.obj.str'],[82015,'$obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Cotton pixel"],[],[44905,16220,'$obj.num','$num'],['$obj.str'],[{ $substrBytes: [{ $dateToString: {date: '$obj.obj.obj.date',format: "%L-%j-%H-%V-%M-%m-%%-%j-%M-%Y-%d-%z",timezone: "Atlantic/South_Georgia"} },20,16] }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],90263] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[]],defaults: ["THX clear-thinking",[{},[false,new Date("2018-09-06T15:19:56.063Z"),false]]]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],85848] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[30740,'$num',68848],[],[]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $trim: { input: "Money Market Account Salad orchestrate" } },6,1] }, _id: 0}}],

        [{$project: {a: { $hour: { $year: { $month: { $isoWeekYear: { $millesecond: { $dateToParts: {date: { $toDate: { $dateFromString: {dateString: "2018-09-05T22:35:31.303Z",timezone: "Etc/GMT-7",onError: { $range: [19,12] },onNull: '$str'} } },iso8601: false} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[],[],['$num',2684],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $year: { $isoWeek: new Date("2018-09-06T03:11:21.897Z") } } }, _id: 0}}],

        [{$project: {a: { $week: { $dateToParts: {date: { $minute: { $dayOfMonth: { $month: { $second: { $millesecond: { $dayOfMonth: { $millesecond: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $multiply: [84185] },timezone: "Europe/Astrakhan"} } } } } } } } } },iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[5817],8634] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $month: { $millesecond: { $dateToString: {date: new Date("2018-09-06T11:35:27.304Z"),timezone: "Africa/Tunis",onNull: { $filter: {input: ["National Ball neural",{ $ltrim: { input: "Branding" } },'$obj.str'],cond: { $eq: [{ $substrBytes: ['$obj.str',15,18] },{ $minute: { $isoDayOfWeek: { $dayOfYear: { $dateToParts: {date: { $dateToParts: {date: { $year: { $minute: { $dateToString: {date: new Date("2018-09-06T10:33:55.913Z"),format: "%H-%Z-%j-%u-%G-%u-%H-%%-%Z-%Y",timezone: "Australia/LHI"} } } },iso8601: false} },iso8601: true} } } } }] }} }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Checking Account",v: new Date("2018-09-06T17:29:40.160Z")},{k: "efficient Money Market Account",v: false}]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $year: { $hour: { $isoWeek: { $dateFromParts: {isoWeekYear: { $floor: 14877 },millisecond: { $subtract: ['$obj.num','$num'] },timezone: "America/Dominica"} } } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',16,3] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%u-%j-%Y-%G-%M-%Z-%d-%U-%Y-%Z",timezone: "Asia/Tomsk"} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["software Creek",{ $substr: [{ $substrBytes: [{ $dateToString: {date: '$date',format: "%M-%%-%H-%V-%L-%m-%M-%V-%H-%M-%U-%M",timezone: "Europe/Kirov",onNull: '$str'} },7,9] },17,10] }]] }, _id: 0}}],

        [{$project: {a: { $minute: { $millesecond: { $dayOfYear: { $dateToParts: {date: { $dateToString: {date: { $dayOfWeek: { $toDate: { $arrayToObject: [[[],['$obj.str',"Cape Verde Escudo hack El Salvador"],[],['$obj.num']]] } } },format: "%V-%S-%u-%d-%G",timezone: "America/Maceio",onNull: { $toString: '$obj.obj.obj.date' }} },timezone: "Etc/GMT-12"} } } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: { $toDate: { $dayOfMonth: '$date' } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Refined Steel Salad Mall" } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: { $dateToString: {date: new Date("2018-09-06T02:30:20.654Z"),timezone: "Asia/Macau"} } },0,7] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T17:04:52.333Z",onError: { $isoWeek: { $month: { $isoWeekYear: { $isoDayOfWeek: { $dateFromParts: {year: { $multiply: [] },day: { $log10: '$obj.num' },minute: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $substr: ['$obj.str',14,15] }] },second: { $pow: [50090,73597] },timezone: "Indian/Mayotte"} } } } } }} }, _id: 0}}],

        [{$project: {a: { $month: { $dateToParts: {date: { $dateToString: {date: { $minute: { $second: { $dateFromParts: {year: { $divide: [45212,'$num'] },day: { $pow: [18768,'$obj.obj.num'] }} } } },timezone: "America/Toronto",onNull: '$obj.obj.str'} },timezone: "Europe/Stockholm",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],['$num'],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "seize Brazil",v: new Date("2018-09-06T00:26:04.340Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Interactions morph"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["back up Marketing"],[99732,'$obj.obj.obj.num',73626]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',9,7] }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Wooden back-end deliver" } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.obj.num'],['$str'],[],[{ $rtrim: {input: '$str',chars: { $ltrim: { input: "Chicken Avon" } }} },"Coordinator"],[58540,21860],[]] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: ["Ball"] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'lavon',cond: { $and: ['$num'] }} }, _id: 0}}],

        [{$project: {a: { $toUpper: "solid state Oregon Garden" }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $isArray: [{ $ltrim: {input: { $concat: ['$obj.obj.obj.str','$$this'] },chars: "bypass user-facing Wisconsin"} }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[20219,'$obj.num']] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'ola',in: { $size: [['$$ola']] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: ['$obj.obj.obj.str',4,16] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Borders Bacon override",v: "Factors Cambridgeshire Metal"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',{ $trim: {input: { $toUpper: '$obj.str' },chars: "hardware"} }],[],[],["Nevada value-added",'$str',{ $substrCP: [{ $ltrim: { input: '$obj.obj.str' } },10,3] }],["vertical withdrawal back up"],['$obj.obj.obj.num','$num',92505]]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $second: { $isoDayOfWeek: { $millesecond: { $year: { $isoWeekYear: { $isoDayOfWeek: { $hour: { $dateToString: {date: new Date("2018-09-06T17:13:42.223Z"),format: "%L-%V-%d-%z-%w-%S-%Y-%L"} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "Somoni",v: { $substrCP: ['$str',17,13] }},{k: "Developer platforms Gourde US Dollar",v: '$date'}]] } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "software" } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: false,defaults: ["transmitter",[],[true],34014]} }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromParts: {year: { $mod: [7908,'$obj.obj.obj.num'] },month: { $log10: '$obj.obj.obj.num' },hour: { $cmp: [{ $substr: ["Networked",4,6] },{ $arrayToObject: [[{k: "ADP Estate synergistic",v: '$obj.date'}]] }] },minute: { $sqrt: 79914 },second: { $log: [28944,'$obj.num'] },millisecond: { $multiply: [] },timezone: "Europe/Mariehamn"} } }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Wyoming",chars: "engineer capability Jamaica"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Berkshire seamless Senior"],'$num'] }, _id: 0}}],

        [{$project: {a: { $substr: ["Investment Account",2,15] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: {date: { $isoDayOfWeek: { $hour: { $dateFromParts: {isoWeekYear: { $add: [] },isoWeek: { $cmp: [{ $map: {input: ['$str'],in: { $multiply: [] }} },{ $year: { $second: { $month: new Date("2018-09-06T14:07:25.410Z") } } }] },minute: '$num',second: { $pow: [71219,17220] },millisecond: { $multiply: [74006] },timezone: "Japan"} } } },timezone: "Etc/GMT-11",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $year: { $isoWeekYear: { $dayOfWeek: { $millesecond: { $second: { $dateToString: { date: '$date' } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str','$obj.obj.str','$obj.obj.obj.str'],[],[{ $trim: {input: "cross-platform withdrawal red",chars: '$obj.str'} }],["Developer","Gorgeous"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Up-sized Savings Account"],83956] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: "Intranet",chars: { $concat: [] }} },'$obj.str','$obj.str',"1080p"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Grass-roots 1080p Djibouti"],21495] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Delaware",v: '$obj.obj.obj.num'},{k: "hack USB gold",v: new Date("2018-09-06T08:27:21.708Z")},{k: "Investment Account",v: 14171}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $concat: ["Syrian Pound matrix"] },chars: { $trim: { input: "transmitting" } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $arrayElemAt: [[],{ $log: [76095,'$obj.obj.obj.num'] }] } }],[]]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $week: { $dayOfWeek: { $isoWeek: { $isoWeekYear: { $toDate: { $arrayElemAt: [['$obj.obj.num'],82294] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[93022],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',{ $ln: 44267 },41343,43141],{ $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $ltrim: {input: "Operative",chars: '$str'} },10,20] }] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.str',{ $dateToString: {date: '$obj.date',format: "%M-%Z-%S-%H-%m",timezone: "Atlantic/St_Helena",onNull: { $concat: ["Savings Account","platforms"] }} },'$str'],[],[new Date("2018-09-06T05:01:18.088Z"),false],[{ $trim: {input: { $trim: {input: '$str',chars: "initiative"} },chars: '$obj.obj.obj.str'} },'$obj.obj.obj.str'],['$str']],useLongestLength: false,defaults: [{str: "Awesome",date: new Date("2018-09-06T05:07:32.810Z")}]} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $lte: [{ $substrBytes: ['$obj.obj.obj.str',3,15] },{ $range: [8,3] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handmade Frozen Soap Decentralized",v: { $year: { $year: { $dateFromParts: {isoWeekYear: { $ln: 872 },isoWeek: { $exp: 86814 },isoDayOfWeek: '$obj.num',hour: { $log: [86322,'$num'] },timezone: "Asia/Ulaanbaatar"} } } }}]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substrBytes: ['$obj.obj.obj.str',12,12] },14,9] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $log10: '$obj.num' },month: { $exp: 39150 },day: { $size: [['$num','$obj.obj.obj.num']] },hour: { $subtract: [67408,11068] },minute: { $floor: '$obj.obj.num' },second: { $ln: 77446 },millisecond: { $exp: '$obj.num' },timezone: "Asia/Krasnoyarsk"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $minute: { $toDate: { $arrayToObject: [[{k: "Extension Automotive Computers",v: "interactive"},{k: "viral violet",v: true}]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Malagasy Ariary payment",v: "integrate Fantastic invoice"}]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $minute: { $toDate: { $reverseArray: [["auxiliary"]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$obj.obj.str',1,14] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: "Refined Pennsylvania parse",chars: '$obj.str'} }],5253] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[53069],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Armenia programming Supervisor",chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $dateToString: {date: '$obj.obj.date',format: "%Y-%Z-%S-%L-%M-%d-%G-%d-%G-%u-%z"} }],[],[],[{ $ltrim: {input: { $substrCP: ['$obj.str',9,0] },chars: "Rustic Metal Tuna"} }],['$obj.obj.num']],useLongestLength: false,defaults: []} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',57825],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Loop"],in: { $sqrt: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[[{ $substr: ['$obj.str',3,9] }],[]]] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],30350] }, _id: 0}}],

        [{$project: {a: { $map: {input: [63352],as: 'russell',in: { $ln: 35064 }} }, _id: 0}}],

        [{$project: {a: { $toString: { $filter: {input: [{ $substrCP: ['$obj.str',4,8] },'$str'],as: 'gunner',cond: { $eq: [{ $reverseArray: [[{ $ltrim: {input: "Global architectures",chars: "metrics payment"} },"productize",{ $trim: { input: '$$gunner' } }]] },{ $dayOfMonth: { $millesecond: { $toDate: { $arrayElemAt: [[{ $exp: 48267 },'$$gunner','$obj.obj.obj.num'],27559] } } } }] }} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',onNull: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'nettie',cond: { $in: [{ $rtrim: { input: { $substrCP: [{ $trim: {input: { $concat: ["Credit Card Account feed Lead",'$$nettie',"Savings Account Lao People's Democratic Republic copying",{ $toUpper: { $substrCP: ['$$nettie',9,11] } }] },chars: '$$nettie'} },2,14] } } },{ $range: [18,11,18] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',timezone: "Etc/GMT0",onNull: "Hong Kong mobile"} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Rustic Plastic Soap",chars: { $toLower: { $trim: { input: { $ltrim: {input: '$str',chars: { $substr: ["invoice indexing",2,1] }} } } } }} }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',1,18] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str','$obj.str',"hard drive support"]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $rtrim: { input: { $ltrim: {input: '$obj.obj.obj.str',chars: "User-centric Coordinator"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateFromString: { dateString: "2018-09-06T01:56:40.977Z" } },format: "%j-%U-%%-%z-%m-%w-%Y-%Y-%j"} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: "Engineer" },4,13] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $week: { $isoWeek: new Date("2018-09-05T23:59:57.510Z") } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[24346],26135] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $concat: ['$obj.str'] },2,16] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],[{ $dateToString: {date: { $isoDayOfWeek: { $isoWeekYear: { $dayOfMonth: { $dateToParts: {date: { $millesecond: { $dateFromString: {dateString: "2018-09-05T22:20:36.700Z",format: "%j-%w-%V-%V-%w-%U",onError: { $arrayElemAt: [['$obj.obj.num'],'$obj.obj.num'] },onNull: '$str'} } },timezone: "Europe/Vaduz"} } } } },timezone: "Pacific/Truk"} },{ $toLower: "Lead" }],[],[],["synthesize",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[],[],['$obj.str']]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["revolutionary Lari",{ $toUpper: '$str' }],['$str'],['$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.str','$str'],[{ $ltrim: {input: { $toUpper: "Kids Auto Loan Account" },chars: "Web"} }],['$num'],['$obj.obj.obj.num',41413,41886,74072]]] }, _id: 0}}],

        [{$project: {a: { $range: [8,1,11] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Soft Representative TCP",{ $dateToString: {date: new Date("2018-09-06T10:50:41.022Z"),format: "%j-%Y-%d-%S-%G-%j"} }],63559] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: '$$this'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[64305],['$num',61070,'$obj.obj.obj.num'],[],["Associate indexing National"]]] }, _id: 0}}],

        [{$project: {a: { $substr: ["Berkshire Borders",18,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[68604],'$num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Denmark",chars: "navigate online"} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $add: [] },isoWeek: { $exp: 3310 },isoDayOfWeek: { $sqrt: 25304 },hour: { $log10: '$obj.num' },minute: { $size: [[]] },second: { $floor: '$num' },millisecond: { $ceil: 20773 },timezone: "America/Godthab"} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$num',71527],'$obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Philippine Peso Metrics maroon","scalable"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.str',0,18] }],2137] }, _id: 0}}],

        [{$project: {a: { $week: { $minute: { $isoWeekYear: { $dayOfMonth: { $dayOfMonth: { $dayOfYear: new Date("2018-09-06T11:25:42.934Z") } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrBytes: ["Indiana Diverse",11,6] }],as: 'zaria',cond: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit Soft monetize",v: "Corporate ivory"},{k: "Refined Steel Pants Tuna",v: false},{k: "enhance Innovative payment",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T09:19:45.161Z",format: "%H-%V-%S-%m-%U-%Z-%z",onError: { $zip: { inputs: [["EXE Garden"],[],['$obj.obj.str']] } }} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeek: { $second: '$date' } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Research Pitcairn Islands dedicated"],97121] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toUpper: "JSON 3rd generation Cotton" },13,13] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Future",v: { $isoWeekYear: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T14:56:13.532Z",onNull: { $substr: [{ $toString: { $toDate: { $arrayElemAt: [['$num'],46731] } } },8,17] }} } } }}]] }, _id: 0}}],

        [{$project: {a: { $hour: { $month: { $minute: { $isoWeek: { $dateToParts: {date: { $dayOfMonth: { $isoDayOfWeek: { $dayOfMonth: { $hour: { $month: { $year: { $dayOfYear: { $toDate: { $arrayToObject: [[{k: "optimize",v: 77533},{k: "invoice Internal Tonga",v: '$obj.num'},{k: "Avon capacitor",v: new Date("2018-09-06T02:54:16.469Z")}]] } } } } } } } } },iso8601: false} } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.str',"Practical Soft Bacon Tools",{ $substrBytes: [{ $substr: ['$obj.str',14,1] },10,16] }],[79542,'$obj.obj.num',54105],[],[]],useLongestLength: true,defaults: [50102,"solid state system Uzbekistan Sum",{ array: [/Money Market Account|distributed|Directives|invoice|payment/] }]} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str','$str',"Jewelery","dynamic Tools"],cond: { $and: [] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfMonth: { $isoWeek: { $hour: { $month: { $dateFromParts: {isoWeekYear: { $add: [49849,54400] },isoDayOfWeek: { $abs: '$obj.obj.obj.num' },hour: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $arrayElemAt: [[],'$obj.num'] }] },minute: { $log10: 76479 },second: { $floor: '$obj.obj.num' },millisecond: { $multiply: [] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[{ $substrBytes: [{ $substrCP: [{ $substrBytes: ["Associate Supervisor Forward",20,17] },20,15] },1,1] }],'$obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[61488],83843] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfWeek: { $dayOfMonth: { $dateToParts: {date: { $isoWeek: { $toDate: { $arrayToObject: [[[{ $substr: ["West Virginia",5,4] }],['$obj.obj.obj.num'],["open-source JSON"],['$obj.obj.obj.num',98149],[]]] } } },timezone: "America/Mazatlan",iso8601: false} } } } }, _id: 0}}],

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
