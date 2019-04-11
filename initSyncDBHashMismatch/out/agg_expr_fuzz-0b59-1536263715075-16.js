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
        return coll.insert({_id: 9991,str: "Hat Belize withdrawal",num: 38508,date: new Date("2018-09-06T09:51:43.274Z"),array: ["override users","EXE Credit Card Account override","Concrete cultivate neural",new Date("2018-09-06T13:25:59.534Z"),81787,{_id: 9992,str: "Table Haven adapter",array: [],obj: {}},16465,"Island",32879],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9993,str: "Licensed Cotton Chips Chicken",date: new Date("2018-09-05T21:32:04.052Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9994,num: 56727,date: new Date("2018-09-06T05:01:47.927Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9995,str: "Concrete SMTP",num: 7184,date: new Date("2018-09-06T18:55:52.674Z"),array: [49682,"deploy",["AI bus",16987,new Date("2018-09-05T21:47:14.894Z"),"Mount Shoes"],36840,82330,new Date("2018-09-06T07:07:14.815Z"),"clicks-and-mortar Bike lavender",65676,{_id: 9996,str: "optical copying Ohio",num: 48228,date: new Date("2018-09-06T11:32:31.747Z"),array: [[],new Date("2018-09-06T08:04:08.680Z")],obj: {_id: 9997,str: "Hungary Consultant",date: new Date("2018-09-05T23:55:31.386Z"),array: [],obj: {}}}],obj: {_id: 9998,date: new Date("2018-09-05T22:34:24.187Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9999,str: "Concrete Senior value-added",num: 82001,date: new Date("2018-09-06T12:59:21.332Z"),array: [new Date("2018-09-05T23:50:14.014Z"),40272,25048,"schemas hack Granite","holistic Inverse","microchip","online",{_id: 10000,str: "feed Concrete well-modulated",num: 49065,date: new Date("2018-09-06T12:58:21.836Z"),array: []},new Date("2018-09-06T13:35:18.433Z"),"Rubber Officer web-enabled",[]],obj: {_id: 10001,str: "deposit Belarussian Ruble Grenada",array: [[],new Date("2018-09-06T10:11:03.505Z"),99393,16012],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10002,str: "e-commerce Soap Cheese",num: 95138,date: new Date("2018-09-06T16:48:49.219Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10003,str: "Track Connecticut Networked",num: 18280,date: new Date("2018-09-06T07:10:03.967Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10004,str: "grey",num: 74108,date: new Date("2018-09-05T22:47:55.837Z"),array: [new Date("2018-09-06T16:24:20.328Z"),30427,"Montana","Handcrafted Metal Pizza Credit Card Account","Serbian Dinar synergistic Italy",66274,{_id: 10005,str: "Serbian Dinar capacitor",num: 15807,date: new Date("2018-09-05T21:44:12.584Z")},"Ergonomic Fresh Gloves withdrawal",{_id: 10006,str: "quantify Chicken online",num: 17265,date: new Date("2018-09-06T10:14:29.476Z"),array: [],obj: {}},new Date("2018-09-06T12:35:16.339Z"),new Date("2018-09-06T00:13:20.653Z")],obj: {_id: 10007,num: 89590,array: [[]]}});
    },

    function(coll) {
        return coll.insert({_id: 10008,str: "gold",num: 26766,date: new Date("2018-09-06T15:05:44.235Z"),obj: {_id: 10009,str: "New York Implementation",num: 1973,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10010,str: "neural collaboration Web",num: 62451,date: new Date("2018-09-06T03:55:10.369Z"),array: [],obj: {_id: 10011,num: 45134,date: new Date("2018-09-06T00:44:51.388Z"),array: [new Date("2018-09-06T10:53:41.269Z"),new Date("2018-09-05T20:34:57.448Z"),"orchestrate District","Tools AI Tala","systems copying Technician",12096,{_id: 10012,str: "digital",num: 50363,date: new Date("2018-09-06T08:32:49.146Z"),array: [],obj: {_id: 10013,str: "Analyst virtual",num: 49672,date: new Date("2018-09-06T04:47:56.724Z"),array: [],obj: {}}},new Date("2018-09-05T21:34:08.061Z"),[{_id: 10014,str: "interface white",obj: {}}],[],"hacking",31686],obj: {_id: 10015,str: "Incredible TCP",array: [96455,new Date("2018-09-06T15:59:28.111Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 10016,str: "TCP",num: 11612,date: new Date("2018-09-06T01:56:26.702Z"),array: [],obj: {_id: 10017,str: "auxiliary",array: [new Date("2018-09-06T01:32:41.930Z"),71340,new Date("2018-09-05T22:58:23.563Z"),[new Date("2018-09-06T13:16:45.796Z"),98817,{_id: 10018,str: "invoice Shirt",num: 56701,date: new Date("2018-09-06T16:24:58.292Z"),array: [46575],obj: {_id: 10019,str: "plug-and-play fuchsia Multi-lateral",num: 65028,array: [],obj: {}}},"Ergonomic Steel Gloves"],new Date("2018-09-05T22:05:02.831Z"),"project Branding niches",{_id: 10020,date: new Date("2018-09-06T08:37:01.601Z")},1215,"Incredible","circuit partnerships Steel"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10021,num: 75623,date: new Date("2018-09-06T07:03:32.713Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10022,str: "Turkmenistan",num: 37578,date: new Date("2018-09-06T07:07:28.549Z"),array: [],obj: {_id: 10023,str: "Towels Namibia",num: 42024,date: new Date("2018-09-06T13:18:01.746Z"),array: [new Date("2018-09-06T09:34:06.357Z"),62876,"Drive overriding","Ball Plastic",99706,78641,new Date("2018-09-05T23:29:29.952Z"),[[]],"Stream Borders Facilitator",{_id: 10024,str: "Borders driver",num: 96493,date: new Date("2018-09-06T00:13:01.872Z"),obj: {}},{_id: 10025,str: "responsive FTP visualize",num: 57369,array: [[],new Date("2018-09-06T17:07:01.964Z"),67637]},[],new Date("2018-09-06T07:53:37.673Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10026,str: "digital Awesome Concrete Pizza",num: 39381,date: new Date("2018-09-06T15:40:27.031Z"),array: ["Western Sahara application",{_id: 10027,str: "Alabama",num: 29937,date: new Date("2018-09-06T08:24:47.592Z"),array: [],obj: {}},new Date("2018-09-06T00:58:49.266Z"),61018,1177,93186,"Wooden SMS","Salad","Bulgaria Dynamic",new Date("2018-09-06T13:25:33.428Z"),[],[new Date("2018-09-06T04:43:01.864Z"),"Direct SMTP"]],obj: {_id: 10028,str: "envisioneer SMTP flexibility",num: 25085,date: new Date("2018-09-06T03:39:15.301Z"),array: [[new Date("2018-09-05T22:14:51.410Z"),new Date("2018-09-06T14:28:53.204Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10029,str: "input",num: 49967,date: new Date("2018-09-06T12:02:15.509Z"),array: [],obj: {_id: 10030,str: "magenta",date: new Date("2018-09-05T22:45:18.575Z"),array: [["District","Frozen Ameliorated Innovative",23297,43232],new Date("2018-09-06T14:02:51.868Z"),new Date("2018-09-06T10:46:24.400Z"),{_id: 10031,str: "Moldova metrics end-to-end",num: 17288,date: new Date("2018-09-06T19:54:16.865Z"),array: []},61713,[],new Date("2018-09-06T03:32:23.981Z"),"indigo Savings Account Checking Account",{_id: 10032,str: "HTTP back up",num: 57420,date: new Date("2018-09-06T19:23:55.298Z"),array: [40433,new Date("2018-09-06T13:48:36.468Z")],obj: {_id: 10033,str: "JBOD Generic Frozen Shoes",num: 76835,obj: {}}},"Awesome Soft Sausages Generic"]}});
    },

    function(coll) {
        return coll.insert({_id: 10034,str: "Gloves Zimbabwe Optional",num: 66909,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10035,str: "connect New Taiwan Dollar Buckinghamshire",num: 82558,date: new Date("2018-09-06T07:57:49.931Z"),array: ["Vista Lead",new Date("2018-09-06T05:20:37.184Z"),53978,new Date("2018-09-06T13:05:24.677Z"),"salmon",{_id: 10036,num: 89,date: new Date("2018-09-06T15:34:27.086Z"),array: [],obj: {_id: 10037,str: "Digitized architectures",num: 26366,date: new Date("2018-09-06T02:16:34.759Z"),array: [],obj: {_id: 10038,str: "Borders matrix Practical Metal Shoes",num: 60409,array: [],obj: {}}}},42495,["Path red",47002,new Date("2018-09-06T12:18:32.163Z")],new Date("2018-09-06T13:07:14.568Z"),"Managed Avon"]});
    },

    function(coll) {
        return coll.insert({_id: 10039,str: "quantifying Clothing action-items",num: 83824,date: new Date("2018-09-06T03:16:56.291Z"),array: [new Date("2018-09-06T14:03:27.521Z"),30967,"Versatile",new Date("2018-09-06T09:30:01.355Z"),"pixel Pound Sterling Auto Loan Account",85126,new Date("2018-09-06T15:05:46.603Z"),82870,new Date("2018-09-06T18:46:53.345Z"),{_id: 10040,str: "redundant Shoes cross-platform",num: 31368,array: [],obj: {}},["Dam Handcrafted Plastic Pizza Knolls"],[]],obj: {_id: 10041,str: "back-end intuitive Credit Card Account",num: 45274,date: new Date("2018-09-06T00:04:12.642Z"),array: ["Rubber mobile",new Date("2018-09-06T17:26:09.688Z"),14696,96907],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10042,num: 44406,date: new Date("2018-09-06T19:35:09.872Z"),array: [new Date("2018-09-06T14:24:03.404Z"),48031,56824,new Date("2018-09-06T09:34:55.045Z"),"withdrawal Savings Account Cambridgeshire","Small Granite Shoes","circuit migration",82026,40036,{_id: 10043,str: "bricks-and-clicks",num: 24154,array: [],obj: {_id: 10044,str: "teal",num: 9168,date: new Date("2018-09-06T04:00:52.764Z"),array: []}},[[],{_id: 10045,str: "Handcrafted Executive",num: 57111,date: new Date("2018-09-06T13:00:13.684Z"),array: [new Date("2018-09-06T00:28:47.055Z"),{_id: 10046,str: "Tasty Cotton Fish Auto Loan Account",array: [81918,"bifurcated"],obj: {_id: 10047,str: "Rubber client-driven",date: new Date("2018-09-06T12:39:02.511Z"),array: [],obj: {}}},new Date("2018-09-06T14:32:54.029Z"),[[]]],obj: {_id: 10048,num: 39135}}],"regional Self-enabling"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10049,str: "Rand",num: 6485,date: new Date("2018-09-06T11:19:51.943Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10050,str: "yellow budgetary management",num: 37573,date: new Date("2018-09-06T10:47:00.300Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10051,str: "Industrial Group Decentralized",num: 55712,date: new Date("2018-09-06T01:23:27.852Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10052,str: "Pants Tools",num: 79992,date: new Date("2018-09-06T16:58:12.452Z"),array: [new Date("2018-09-06T12:39:35.751Z"),[],new Date("2018-09-06T09:14:56.079Z"),["Ville system","niches open-source",new Date("2018-09-06T09:18:22.924Z"),45079,10216,new Date("2018-09-06T01:04:21.215Z")],{_id: 10053,num: 81625,date: new Date("2018-09-06T10:45:48.433Z"),array: [],obj: {}},{_id: 10054,str: "monetize Soft Crossing",date: new Date("2018-09-06T04:55:45.218Z"),array: [],obj: {}},82308,{_id: 10055,str: "Facilitator Global solid state",num: 12502,date: new Date("2018-09-06T08:43:10.062Z"),array: [["transitional facilitate intuitive",39503,"Greens Games"],{_id: 10056,str: "Rustic Concrete Soap",num: 50960,array: [["Senior back up",97255]],obj: {_id: 10057,date: new Date("2018-09-05T22:23:08.032Z"),obj: {_id: 10058,str: "Table",num: 87007,obj: {}}}}]},new Date("2018-09-06T00:05:54.478Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10059,str: "Fantastic",num: 63951,date: new Date("2018-09-05T20:44:47.920Z"),array: [new Date("2018-09-06T10:41:16.596Z"),"Tennessee",69184,"Chief Home Loan Account Gloves",47355,34969,[],{_id: 10060,str: "Wooden",array: [new Date("2018-09-06T06:51:48.438Z"),{_id: 10061,str: "Engineer",num: 9262,date: new Date("2018-09-06T12:52:09.432Z"),array: [],obj: {_id: 10062,str: "generate Public-key Tunisian Dinar",date: new Date("2018-09-06T10:32:06.924Z"),obj: {}}},"Avon",new Date("2018-09-06T01:54:09.593Z"),[],new Date("2018-09-06T10:46:08.475Z"),new Date("2018-09-06T13:40:10.187Z"),"Rial Omani Investor Baht"]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10063,str: "Bedfordshire",num: 15541,date: new Date("2018-09-06T15:47:18.347Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10064,str: "architectures Refined",num: 7342,date: new Date("2018-09-06T01:58:28.953Z"),array: [],obj: {_id: 10065,str: "Operative Credit Card Account",num: 78833,date: new Date("2018-09-06T10:37:52.630Z"),array: [13644,"Rustic Plastic Cheese",new Date("2018-09-06T02:49:50.597Z"),18525,"Somoni",[],"architecture ADP Agent",34153,new Date("2018-09-05T20:01:26.211Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 10066,str: "multi-state Regional back-end",num: 8848,date: new Date("2018-09-06T08:13:24.988Z"),array: [6068,new Date("2018-09-06T13:28:17.429Z"),"cultivate",44864,{_id: 10067,num: 74076,date: new Date("2018-09-05T21:04:48.459Z"),array: [new Date("2018-09-06T16:59:47.399Z"),[{_id: 10068,str: "synthesizing",date: new Date("2018-09-06T00:33:08.931Z"),array: [],obj: {}},"Tennessee Regional",24023],47900],obj: {}},[],[new Date("2018-09-06T18:54:34.533Z")],"Communications networks","Island artificial intelligence Fundamental",64918],obj: {_id: 10069,str: "cross-platform Kids Home",num: 19684,array: [],obj: {_id: 10070,date: new Date("2018-09-06T01:03:37.332Z"),array: ["Outdoors","Tenge Future deposit",[new Date("2018-09-06T01:03:01.928Z"),27221],{_id: 10071,str: "COM calculating",num: 11994,date: new Date("2018-09-05T23:32:47.857Z"),array: [new Date("2018-09-05T21:22:45.785Z")]}]}}});
    },

    function(coll) {
        return coll.insert({_id: 10072,str: "B2B",num: 66698,date: new Date("2018-09-06T08:03:19.894Z"),array: [88288,new Date("2018-09-05T19:58:17.174Z"),8909,new Date("2018-09-06T11:29:38.954Z"),"Plastic monetize Reduced",new Date("2018-09-05T22:12:08.185Z"),[],"radical compressing",{_id: 10073,str: "Wooden blue",num: 51394,date: new Date("2018-09-06T00:58:02.443Z"),array: [88182],obj: {}},new Date("2018-09-06T10:42:11.163Z"),["wireless groupware"],{_id: 10074,num: 19895,date: new Date("2018-09-06T11:37:43.720Z"),array: [],obj: {_id: 10075,array: ["Technician system New Mexico",60428,23817],obj: {_id: 10076,str: "metrics didactic SSL",num: 53187,date: new Date("2018-09-05T23:34:35.479Z"),array: [],obj: {_id: 10077,str: "hacking",num: 14411,array: [],obj: {_id: 10078,str: "web-enabled Soft Product",date: new Date("2018-09-06T12:26:22.640Z")}}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 10079,str: "Personal Loan Account",num: 95892,date: new Date("2018-09-06T08:34:55.724Z"),array: [47351,"Credit Card Account",21278,new Date("2018-09-06T08:14:05.392Z"),[],[new Date("2018-09-05T22:40:59.225Z"),"Outdoors Credit Card Account"],new Date("2018-09-06T18:21:24.837Z"),{_id: 10080,str: "software COM",num: 74595,date: new Date("2018-09-06T19:15:42.730Z"),array: [],obj: {_id: 10081,str: "Licensed Steel Towels implement utilisation",num: 54920,date: new Date("2018-09-06T08:58:33.776Z"),array: [],obj: {_id: 10082,num: 63101,date: new Date("2018-09-06T12:13:03.170Z"),obj: {}}}},["Realigned Jewelery"],50092,32870,{_id: 10083,str: "back-end HDD",num: 95751,date: new Date("2018-09-06T05:35:19.776Z"),array: ["cross-platform"]},new Date("2018-09-06T10:35:08.985Z"),{_id: 10084,str: "Hawaii",date: new Date("2018-09-06T10:58:20.494Z")},[]],obj: {_id: 10085,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 10086,str: "Guinea",num: 40863,date: new Date("2018-09-06T03:00:20.495Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10087,str: "haptic",num: 68419,date: new Date("2018-09-06T12:36:50.970Z"),array: [],obj: {_id: 10088,str: "Intelligent Digitized Licensed Frozen Hat",num: 51057,date: new Date("2018-09-05T21:06:01.537Z"),array: ["deploy e-services Tennessee",new Date("2018-09-06T09:02:43.009Z"),new Date("2018-09-06T00:43:03.383Z"),14413,[],[],91257],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10089,str: "Bike",num: 67106,date: new Date("2018-09-06T11:27:29.594Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10090,date: new Date("2018-09-05T20:43:28.515Z"),array: ["Ohio Ergonomic Granite Ball",70432,new Date("2018-09-06T17:03:45.877Z"),"User-centric Vista wireless",52761,43235,99315,"Rustic Cotton Car Sharable"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10091,str: "Coordinator withdrawal",num: 93384,date: new Date("2018-09-06T18:42:33.084Z"),array: [41952,"Republic of Korea Buckinghamshire",75841,new Date("2018-09-06T08:27:06.640Z"),"navigate Ball Small Steel Keyboard",31424,{_id: 10092,str: "Bedfordshire Table Iceland Krona",num: 20937,date: new Date("2018-09-06T09:32:36.397Z"),array: [],obj: {_id: 10093,str: "Optimization Checking Account JBOD",array: [[],new Date("2018-09-06T08:05:34.214Z")],obj: {_id: 10094,str: "compelling",date: new Date("2018-09-06T19:37:46.094Z"),array: [],obj: {}}}},"Courts markets",new Date("2018-09-06T11:40:14.055Z"),"Vanuatu moderator"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10095,str: "TCP Ergonomic",date: new Date("2018-09-06T12:21:50.735Z"),array: [90541,"paradigm",11675,new Date("2018-09-05T22:48:49.009Z"),new Date("2018-09-06T10:14:13.994Z"),"mobile Borders","Beauty Dong enable",{_id: 10096,num: 15198,array: []},new Date("2018-09-05T23:40:05.941Z"),new Date("2018-09-06T11:08:45.137Z"),"Licensed Concrete Towels",91157,512],obj: {_id: 10097,str: "transmitting",num: 23842,date: new Date("2018-09-06T10:59:26.114Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10098,str: "system",num: 90238,date: new Date("2018-09-06T08:59:48.214Z"),array: [{_id: 10099,str: "Handmade",num: 68586,date: new Date("2018-09-06T11:54:28.141Z"),array: [39738,"FTP turquoise mindshare"],obj: {_id: 10100,array: [11929,new Date("2018-09-06T02:38:25.943Z")]}},new Date("2018-09-06T19:49:33.141Z"),[],12839,[],"generating","convergence",new Date("2018-09-06T14:48:22.855Z"),{_id: 10101,num: 20124,date: new Date("2018-09-06T02:06:49.168Z"),array: [],obj: {}},"Vision-oriented primary",33383,{_id: 10102,str: "Ball",date: new Date("2018-09-06T10:14:05.084Z"),array: [new Date("2018-09-06T10:09:25.060Z"),[]]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10103,str: "object-oriented",num: 33577,date: new Date("2018-09-06T14:44:38.121Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10104,str: "Moroccan Dirham gold",num: 64037,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10105,num: 56847,date: new Date("2018-09-06T11:34:39.628Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10106,str: "District",num: 6505,date: new Date("2018-09-06T12:06:46.701Z")});
    },

    function(coll) {
        return coll.insert({_id: 10107,str: "dot-com",num: 17732,date: new Date("2018-09-06T16:34:00.749Z"),array: [30707,new Date("2018-09-06T11:38:50.111Z"),"Russian Federation deposit holistic",[new Date("2018-09-06T12:11:03.153Z")],56587,"Refined Steel Sausages",21856,34870,{_id: 10108,str: "Alabama Shoes",date: new Date("2018-09-06T02:16:08.366Z"),array: [],obj: {_id: 10109,str: "Sleek Cotton Chips Specialist",obj: {}}},new Date("2018-09-06T04:34:06.041Z"),new Date("2018-09-06T16:32:43.025Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10110,str: "orange payment",num: 13919,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10111,str: "systems Manager",num: 62109,date: new Date("2018-09-06T12:41:15.377Z"),array: [],obj: {_id: 10112,date: new Date("2018-09-05T23:13:30.837Z"),array: [37927,new Date("2018-09-06T14:10:06.058Z"),new Date("2018-09-06T09:57:29.462Z"),"generate grid-enabled Fresh","synthesize 1080p Generic",[31860,"Creative Incredible Fresh Pants International",20999,"Ergonomic",{_id: 10113,str: "Coordinator Gabon",num: 43119,date: new Date("2018-09-06T14:27:55.661Z"),array: [],obj: {_id: 10114,num: 63036,date: new Date("2018-09-06T17:15:31.161Z"),array: [{_id: 10115,str: "Oregon deposit Corporate",num: 76445}],obj: {}}},new Date("2018-09-05T20:02:29.597Z"),{_id: 10116,str: "demand-driven",num: 56065,date: new Date("2018-09-06T12:47:52.462Z"),array: []},"Soft"],84030],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10117,str: "hybrid",num: 19562,date: new Date("2018-09-06T18:45:54.900Z"),array: [],obj: {_id: 10118,num: 61417,array: ["maroon static Small",95970,52108,new Date("2018-09-05T21:33:19.792Z"),new Date("2018-09-06T04:12:49.455Z"),"B2C",[{_id: 10119,str: "frictionless Lane",date: new Date("2018-09-05T21:19:41.845Z"),array: [[],new Date("2018-09-06T04:06:14.762Z"),48307,"redundant quantifying"],obj: {_id: 10120,str: "Awesome Steel Pizza Direct",num: 4649,date: new Date("2018-09-05T22:22:18.908Z"),obj: {_id: 10121,array: [8462]}}},"ivory Rustic",new Date("2018-09-06T05:55:22.170Z"),"partnerships Run Ports",new Date("2018-09-06T01:55:35.551Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10122,str: "Illinois",num: 73940,date: new Date("2018-09-06T18:12:06.834Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10123,str: "invoice",num: 34966,date: new Date("2018-09-06T14:52:28.167Z"),array: [{_id: 10124,num: 35021,array: []},new Date("2018-09-06T04:27:32.247Z"),"hacking Brand Isle","Auto Loan Account Cambridgeshire Corporate","Branch invoice Legacy",{_id: 10125,str: "back-end",num: 64159,date: new Date("2018-09-06T15:20:56.219Z"),array: [],obj: {_id: 10126,str: "Chief pixel 1080p",num: 76826,date: new Date("2018-09-06T09:30:06.498Z"),obj: {}}},[20298,new Date("2018-09-06T13:12:12.179Z"),32537],[],49135,"solution-oriented implement",11103,new Date("2018-09-06T00:58:17.703Z"),{_id: 10127,date: new Date("2018-09-06T04:50:31.720Z"),obj: {_id: 10128,num: 38649,array: [[]],obj: {_id: 10129,str: "Bike",num: 26344,date: new Date("2018-09-06T17:30:22.685Z")}}}],obj: {_id: 10130,num: 32514,array: [{_id: 10131,str: "Product Steel",date: new Date("2018-09-06T10:47:57.034Z"),array: [],obj: {_id: 10132,str: "Baby deposit",array: [49209,new Date("2018-09-06T15:01:53.935Z")]}}]}});
    },

    function(coll) {
        return coll.insert({_id: 10133,str: "harness",num: 66941,date: new Date("2018-09-05T20:58:31.042Z"),array: [],obj: {_id: 10134,str: "Squares",num: 40047,date: new Date("2018-09-06T02:16:18.623Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10135,str: "Personal Loan Account",num: 52373,array: [28428,"Rwanda transmitter",new Date("2018-09-05T22:41:02.055Z"),{_id: 10136,str: "SMTP",num: 90491,date: new Date("2018-09-06T08:22:19.216Z"),obj: {}},"Gorgeous Plastic Bacon Mill Mouse","PCI enable",{_id: 10137,str: "Vermont Persevering",num: 47811,date: new Date("2018-09-06T01:30:43.544Z"),array: [],obj: {}},new Date("2018-09-06T00:41:48.410Z"),new Date("2018-09-06T02:46:29.485Z"),98658]});
    },

    function(coll) {
        return coll.insert({_id: 10138,str: "Berkshire Rustic sensor",num: 16748,date: new Date("2018-09-06T16:08:30.435Z"),array: [{_id: 10139,str: "orchestrate Plastic",date: new Date("2018-09-06T01:09:12.127Z"),obj: {}},92122,"Tasty Armenian Dram",{_id: 10140,date: new Date("2018-09-06T19:52:07.034Z"),array: [new Date("2018-09-06T16:15:48.558Z")],obj: {}},[67663,"distributed plum mint green",[],13488,new Date("2018-09-06T12:13:04.727Z"),new Date("2018-09-06T16:14:47.608Z")],new Date("2018-09-06T11:08:28.194Z"),{_id: 10141,str: "withdrawal",num: 40515,date: new Date("2018-09-06T00:28:32.343Z"),array: []},16460,[],22480,[]]});
    },

    function(coll) {
        return coll.insert({_id: 10142,str: "Bedfordshire",num: 26380,date: new Date("2018-09-06T12:58:22.478Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10143,str: "Health",num: 56858,date: new Date("2018-09-06T08:39:07.552Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10144,str: "Specialist",num: 15258,date: new Date("2018-09-06T06:44:36.072Z"),array: [],obj: {_id: 10145,num: 33740,date: new Date("2018-09-05T20:32:19.063Z"),array: [new Date("2018-09-06T05:46:22.099Z"),73123,81609,"Home Re-contextualized",new Date("2018-09-06T00:15:31.960Z"),44899,new Date("2018-09-06T10:31:44.801Z"),[[],"dot-com","Security Frozen","monitoring COM",{_id: 10146,str: "Sports Alaska",num: 93018,date: new Date("2018-09-05T22:51:40.266Z"),array: [],obj: {_id: 10147,str: "withdrawal override models",num: 24399,obj: {}}},new Date("2018-09-06T00:44:06.852Z")],{_id: 10148,str: "CFP Franc Place",date: new Date("2018-09-06T05:21:27.812Z"),array: [25927]}],obj: {_id: 10149,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 10150,str: "cyan",num: 20878,date: new Date("2018-09-06T12:05:38.980Z"),array: [29387,new Date("2018-09-06T10:34:02.467Z"),"Intelligent Tasty Metal Towels Intelligent Concrete Chips",new Date("2018-09-06T07:19:55.264Z"),71131,[],{_id: 10151,str: "Investment Account bandwidth users",num: 18899,date: new Date("2018-09-06T06:11:23.215Z"),array: ["Incredible generating",new Date("2018-09-06T18:56:24.959Z")],obj: {_id: 10152,str: "synergies",num: 66446,date: new Date("2018-09-06T11:21:50.879Z"),array: [],obj: {}}},36055,new Date("2018-09-06T10:16:24.361Z"),["Berkshire Cloned",80738],"ivory HDD deposit",{_id: 10153,str: "Way",date: new Date("2018-09-05T21:17:31.393Z"),array: ["Croatia",{_id: 10154,num: 28353},new Date("2018-09-05T23:55:30.982Z")],obj: {}}],obj: {_id: 10155,str: "Jewelery Up-sized",num: 38225,date: new Date("2018-09-06T03:46:36.485Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 10156,str: "Solomon Islands Dollar",num: 6218,date: new Date("2018-09-05T22:28:57.480Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10157,str: "synthesize cross-platform Analyst",num: 79662,date: new Date("2018-09-06T18:26:35.500Z"),array: [],obj: {_id: 10158,str: "monetize Orchestrator deposit",num: 72693,date: new Date("2018-09-06T00:57:37.408Z"),array: ["HDD Engineer",new Date("2018-09-06T12:43:13.906Z"),11792,"orange",new Date("2018-09-06T01:51:04.663Z"),{_id: 10159,num: 2521,date: new Date("2018-09-06T01:01:17.537Z"),obj: {}},54565,"parsing",new Date("2018-09-06T04:08:46.819Z"),12746],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10160,str: "Center payment Fantastic",num: 80948,date: new Date("2018-09-05T21:01:04.030Z"),array: [82021,{_id: 10161,str: "Seychelles Rupee Fields transmitting",num: 93907,date: new Date("2018-09-06T12:20:19.097Z"),array: [],obj: {}},"Cambridgeshire card Sleek Rubber Gloves",new Date("2018-09-05T20:36:21.528Z"),"zero administration didactic","Fantastic Concrete Chicken program",94270,new Date("2018-09-06T15:58:09.333Z"),"synergize",41673,new Date("2018-09-05T22:26:50.356Z")],obj: {_id: 10162,str: "Nuevo Sol",date: new Date("2018-09-05T21:33:02.403Z")}});
    },

    function(coll) {
        return coll.insert({_id: 10163,str: "program communities",num: 46355,date: new Date("2018-09-06T14:13:43.721Z"),array: [],obj: {_id: 10164,str: "hack",num: 84899,date: new Date("2018-09-05T22:05:08.948Z"),array: [new Date("2018-09-06T04:01:42.213Z"),90342,12500,"Director Borders Markets",36271,"Summit silver",new Date("2018-09-06T01:22:13.671Z"),25152,"Tools sensor Outdoors",[new Date("2018-09-05T22:40:23.641Z"),new Date("2018-09-06T01:42:05.471Z")],{_id: 10165,str: "vertical",num: 94793,date: new Date("2018-09-05T20:15:23.587Z"),obj: {_id: 10166,num: 519,date: new Date("2018-09-05T23:43:48.451Z"),array: []}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10167,str: "Ridges",num: 64809,date: new Date("2018-09-06T01:51:57.349Z"),array: [54735,"payment Gorgeous optical","Awesome Steel Salad Well transmitting",new Date("2018-09-06T05:58:18.886Z"),{_id: 10168,str: "Handcrafted Lodge e-business",num: 7574,date: new Date("2018-09-06T08:01:33.609Z"),array: ["Comoros",[]],obj: {}},61936,new Date("2018-09-06T08:48:06.401Z"),{_id: 10169,str: "Pakistan North Carolina",num: 93647,array: [],obj: {}},"Montana",new Date("2018-09-06T06:43:42.079Z"),63073,new Date("2018-09-06T09:13:14.257Z"),{_id: 10170,str: "unleash",num: 18926}],obj: {_id: 10171,str: "Swaziland bypass process improvement",num: 94885,date: new Date("2018-09-06T09:42:19.819Z"),array: ["azure"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10172,str: "SMTP deposit magnetic",num: 3055,date: new Date("2018-09-06T01:19:08.323Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10173,str: "overriding Technician connect",num: 37159,date: new Date("2018-09-06T04:51:57.055Z"),array: [],obj: {_id: 10174,str: "needs-based",num: 62900,date: new Date("2018-09-06T05:27:30.681Z"),array: ["rich benchmark",new Date("2018-09-06T08:01:11.132Z"),"Intelligent",86764,61878,{_id: 10175,str: "Incredible Wooden Salad even-keeled Ball",num: 86900,obj: {}},new Date("2018-09-05T22:38:26.181Z"),{_id: 10176,str: "Pants Future index",num: 73999},78711,new Date("2018-09-06T19:49:26.850Z"),"incubate relationships Streamlined"],obj: {_id: 10177,str: "Solutions",date: new Date("2018-09-05T22:03:04.147Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 10178,str: "azure",num: 99627,date: new Date("2018-09-06T06:02:11.892Z"),array: ["yellow methodologies","cultivate calculating",74040,"Bike",new Date("2018-09-06T17:42:18.700Z"),{_id: 10179,str: "calculating Pizza",num: 9410,date: new Date("2018-09-06T00:54:07.917Z"),obj: {}},"Customizable Kroon",new Date("2018-09-06T15:31:22.947Z"),94128,2487,82286],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10180,str: "neutral array",array: ["Handmade Pa'anga Berkshire","web services",new Date("2018-09-06T00:15:29.655Z"),"web-enabled",73024,new Date("2018-09-06T01:50:12.807Z"),29003,{_id: 10181,str: "Nuevo Sol Clothing Awesome",num: 13282,date: new Date("2018-09-06T07:57:36.319Z"),array: [36106,new Date("2018-09-05T20:43:52.708Z")],obj: {}},2166,new Date("2018-09-06T03:19:38.415Z"),{_id: 10182,str: "Metrics extensible Awesome",num: 72185,date: new Date("2018-09-06T15:40:56.114Z"),obj: {_id: 10183,str: "payment Credit Card Account",num: 56420,date: new Date("2018-09-05T20:03:48.738Z"),array: [],obj: {}}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10184,str: "Small Licensed Steel Car",num: 9654,date: new Date("2018-09-06T09:29:20.570Z"),array: ["Berkshire Pizza Nevada",[],63411,55481,[new Date("2018-09-06T07:43:28.084Z")],{_id: 10185,str: "backing up",num: 49764,date: new Date("2018-09-06T10:15:05.914Z"),array: [],obj: {}},33487,new Date("2018-09-05T22:42:44.595Z"),"Multi-layered Refined Soft Fish Massachusetts",[],{_id: 10186,str: "Re-engineered optimize index",num: 61111,date: new Date("2018-09-05T21:37:26.725Z"),obj: {_id: 10187,str: "UIC-Franc withdrawal Public-key",date: new Date("2018-09-06T08:39:52.282Z"),array: [new Date("2018-09-06T02:02:03.516Z"),[],"microchip Plastic forecast"]}}]});
    },

    function(coll) {
        return coll.insert({_id: 10188,str: "Plastic Cuban Peso Peso Convertible",num: 55660,date: new Date("2018-09-06T12:33:52.573Z"),array: [new Date("2018-09-06T11:58:01.817Z"),"Pants Alaska",new Date("2018-09-06T05:35:04.913Z"),29255,65677,[],new Date("2018-09-06T07:37:46.657Z"),"unleash JSON generate","vortals National mobile",new Date("2018-09-06T02:48:42.445Z"),[],{_id: 10189,num: 17799,date: new Date("2018-09-06T12:04:14.760Z"),array: [],obj: {_id: 10190,str: "Integration hierarchy",num: 35333,date: new Date("2018-09-05T22:17:33.812Z"),array: [],obj: {_id: 10191,str: "De-engineered",num: 48617,date: new Date("2018-09-06T19:02:07.159Z"),array: [49314,17060,{_id: 10192,str: "Forward",date: new Date("2018-09-06T08:38:29.601Z"),array: ["indexing Idaho","Metal Montenegro Planner"],obj: {_id: 10193,num: 19221,date: new Date("2018-09-06T13:34:27.612Z")}}],obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10194,str: "Shoes",num: 66906,date: new Date("2018-09-05T21:17:42.627Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10195,num: 21275,date: new Date("2018-09-05T21:00:27.043Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10196,str: "alliance",num: 57591,date: new Date("2018-09-06T09:54:08.498Z"),array: [19484,"maximized Representative Personal Loan Account",new Date("2018-09-06T07:42:03.944Z"),new Date("2018-09-06T13:03:46.291Z"),"middleware calculating",[],"Engineer Investment Account Forward",69821,"Rustic",new Date("2018-09-06T02:09:38.447Z"),{_id: 10197,str: "Home Loan Account Fresh Plain",num: 71229,date: new Date("2018-09-06T15:52:18.621Z"),array: [],obj: {_id: 10198,str: "sky blue",date: new Date("2018-09-05T21:30:55.158Z"),array: [85564,new Date("2018-09-06T12:22:38.265Z"),[]],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10199,str: "Practical concept mobile",num: 67996,date: new Date("2018-09-05T21:53:22.977Z"),array: [{_id: 10200,str: "Chief",num: 64210,array: [],obj: {_id: 10201,num: 23680,date: new Date("2018-09-06T07:58:00.827Z"),array: [],obj: {}}},88743,23044,"Towels Shoes Pennsylvania",new Date("2018-09-06T07:58:03.100Z"),"withdrawal Soft cross-platform",new Date("2018-09-05T22:49:39.653Z"),10047,[],"Practical Direct",new Date("2018-09-06T16:31:14.053Z")]});
    },

    function(coll) {
        return coll.insert({_id: 10202,str: "haptic Steel",num: 42312,date: new Date("2018-09-06T04:48:27.265Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10203,str: "withdrawal",num: 55288,date: new Date("2018-09-06T09:17:47.231Z"),obj: {_id: 10204,str: "explicit",num: 17284,array: ["Multi-tiered Berkshire",new Date("2018-09-06T09:39:07.454Z"),[],"lavender Incredible Rubber Computer invoice",2526,13769,{_id: 10205,str: "Shoes Outdoors",date: new Date("2018-09-06T11:04:42.408Z"),array: [],obj: {_id: 10206,str: "Mill port",num: 36418,date: new Date("2018-09-05T22:40:51.690Z")}},"override",new Date("2018-09-06T07:38:52.767Z"),[{_id: 10207,date: new Date("2018-09-06T08:49:22.086Z"),array: [],obj: {}}],"Saint Martin"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10208,num: 32763,date: new Date("2018-09-06T13:16:58.088Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 10209,str: "New Mexico Gold",num: 80839,date: new Date("2018-09-05T21:33:13.745Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10210,str: "Pakistan",num: 26380,date: new Date("2018-09-06T10:35:49.116Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10211,str: "Money Market Account Borders",num: 4497,date: new Date("2018-09-06T04:08:10.757Z"),array: [{_id: 10212,str: "Research",date: new Date("2018-09-06T02:55:16.917Z"),array: [],obj: {}},new Date("2018-09-06T10:25:24.105Z"),new Date("2018-09-05T22:05:44.193Z"),"Incredible Frozen Computer scalable",new Date("2018-09-06T16:45:05.316Z"),"ability metrics","Road seize",new Date("2018-09-06T17:24:16.634Z"),18902,10202,{_id: 10213,num: 78948},new Date("2018-09-06T09:31:29.109Z")],obj: {_id: 10214,str: "withdrawal",num: 14662,date: new Date("2018-09-06T01:36:15.890Z"),array: [],obj: {_id: 10215,str: "Practical Fresh Chair Handmade aggregate",date: new Date("2018-09-06T17:28:05.000Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10216,str: "withdrawal 24/7 mobile",num: 85629,date: new Date("2018-09-06T14:41:32.557Z"),array: [new Date("2018-09-06T19:01:27.326Z"),62374,12369,new Date("2018-09-06T16:57:16.745Z"),new Date("2018-09-06T07:45:26.988Z"),"distributed","Egypt Pizza","motivating Human Lead",{_id: 10217,str: "Saudi Riyal",num: 44942,date: new Date("2018-09-06T03:42:14.669Z"),array: [],obj: {}},{_id: 10218,str: "Auto Loan Account Buckinghamshire",num: 35946,date: new Date("2018-09-06T15:03:55.493Z"),array: [],obj: {}},"Nepalese Rupee Cambridgeshire",93471,88865,new Date("2018-09-06T17:48:57.021Z")],obj: {_id: 10219,num: 85884,date: new Date("2018-09-06T00:15:08.400Z"),array: [[new Date("2018-09-06T11:04:38.478Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 10220,str: "Implementation",num: 82908,date: new Date("2018-09-05T23:19:29.472Z"),array: [new Date("2018-09-06T13:44:07.530Z"),77026,58519,new Date("2018-09-05T23:51:15.742Z"),"Finland Concrete",22147,"District systems strategize",12047,new Date("2018-09-06T04:30:45.154Z"),{_id: 10221,num: 64773,date: new Date("2018-09-05T21:04:40.702Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10222,str: "hard drive benchmark",num: 60131,array: ["Cambridgeshire innovate Money Market Account",new Date("2018-09-06T11:30:31.041Z"),[],new Date("2018-09-05T21:19:33.841Z"),67456,{_id: 10223,str: "Money Market Account infrastructure Business-focused",num: 49415,date: new Date("2018-09-06T03:19:12.954Z"),obj: {_id: 10224,str: "Communications Arizona killer",num: 32230,date: new Date("2018-09-06T08:12:38.271Z"),array: [],obj: {_id: 10225,date: new Date("2018-09-06T04:36:15.321Z"),array: [56530,"experiences",new Date("2018-09-06T02:15:24.100Z"),91144,17005,"Organized interface"]}}},"Communications",[],new Date("2018-09-06T15:15:32.727Z"),{_id: 10226,str: "Unbranded Wooden Gloves overriding",num: 72327,array: [],obj: {_id: 10227,array: [{_id: 10228,str: "Jewelery",num: 37133,date: new Date("2018-09-06T07:56:05.701Z"),obj: {}}],obj: {}}},"Health payment"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10229,str: "artificial intelligence",num: 82978,date: new Date("2018-09-06T08:31:49.468Z"),array: [{_id: 10230,str: "Hawaii Direct",date: new Date("2018-09-06T15:59:10.001Z"),array: [new Date("2018-09-06T17:56:57.883Z"),new Date("2018-09-06T15:58:12.731Z"),new Date("2018-09-06T13:11:37.114Z"),9503,"Home Loan Account leverage Total"],obj: {}},{_id: 10231,str: "bypassing knowledge user Crossing",num: 26989,date: new Date("2018-09-06T04:40:20.555Z"),array: []},27258,90969,97747,"Direct FTP",6896,"Berkshire quantifying matrix",[],new Date("2018-09-06T19:48:18.270Z")],obj: {_id: 10232,num: 1105,date: new Date("2018-09-06T16:17:01.100Z"),obj: {_id: 10233,str: "Shirt",num: 72021,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10234,str: "hack transmitter Fantastic Frozen Keyboard",num: 57520,date: new Date("2018-09-06T14:17:23.248Z"),array: [],obj: {_id: 10235,num: 72454,date: new Date("2018-09-06T02:20:22.997Z"),array: [72188,"Zimbabwe Regional SCSI",{_id: 10236,str: "withdrawal",num: 9335,date: new Date("2018-09-06T16:38:54.538Z"),array: [new Date("2018-09-06T17:00:22.856Z"),[76617],new Date("2018-09-06T05:02:44.800Z")],obj: {}},88916,new Date("2018-09-06T07:55:42.545Z"),{_id: 10237,str: "synergies Bike microchip",date: new Date("2018-09-06T17:33:36.814Z"),obj: {_id: 10238,num: 63294}},"Frozen neural-net",48569,"red"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10239,str: "Concrete feed",num: 71815,date: new Date("2018-09-05T22:04:08.140Z"),obj: {_id: 10240,str: "Liaison",num: 14810,date: new Date("2018-09-06T18:16:48.418Z"),array: ["Avon",new Date("2018-09-06T18:21:31.262Z"),410,31061,"Soft","Ergonomic Internal brand",[],{_id: 10241,str: "Facilitator website",num: 49577,date: new Date("2018-09-06T16:20:48.001Z"),array: [92231,"generating zero administration",10853,new Date("2018-09-06T06:34:13.646Z"),new Date("2018-09-06T19:36:45.054Z")],obj: {}},88720,{_id: 10242,str: "payment Jewelery",date: new Date("2018-09-06T06:48:54.733Z"),array: [],obj: {}}],obj: {_id: 10243,num: 32391,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10244,str: "connect Spring",num: 53248,obj: {_id: 10245,str: "schemas magenta",num: 52395,date: new Date("2018-09-06T08:12:38.038Z"),array: ["contingency PCI Gorgeous",new Date("2018-09-05T22:30:24.420Z"),33998,"architectures",[],new Date("2018-09-06T02:14:40.418Z"),{_id: 10246,str: "Borders Steel Sausages",num: 41244,date: new Date("2018-09-06T08:33:20.739Z")},44050,"navigating Home Loan Account Path",new Date("2018-09-06T14:12:22.155Z"),{_id: 10247,str: "gold",array: [62101]},"North Dakota Tanzanian Shilling Falkland Islands (Malvinas)",new Date("2018-09-05T22:31:27.667Z"),[21689]]}});
    },

    function(coll) {
        return coll.insert({_id: 10248,str: "Brunei Darussalam system",num: 2827,date: new Date("2018-09-05T20:25:37.134Z"),array: ["Money Market Account Accounts Soap",new Date("2018-09-05T22:24:28.368Z"),[],[],"monitor","Credit Card Account Berkshire Managed","regional withdrawal ivory",71225],obj: {_id: 10249,str: "North Carolina Handmade Djibouti Franc",num: 93312,date: new Date("2018-09-06T00:07:27.730Z"),array: [{_id: 10250,str: "JBOD Small",num: 29828,date: new Date("2018-09-06T15:07:10.155Z"),array: [88002,[],{_id: 10251,str: "Tunnel disintermediate",obj: {_id: 10252,date: new Date("2018-09-06T03:02:54.668Z"),obj: {}}}],obj: {}},new Date("2018-09-06T18:32:50.567Z"),new Date("2018-09-06T10:27:10.325Z"),59825]}});
    },

    function(coll) {
        return coll.insert({_id: 10253,str: "Maine solid state",num: 30553,date: new Date("2018-09-06T07:07:06.229Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10254,str: "Outdoors Inlet Global",num: 72793,date: new Date("2018-09-06T09:08:59.438Z"),array: [new Date("2018-09-06T11:03:22.614Z"),[new Date("2018-09-05T23:13:46.608Z"),70614,"copy gold","interface connecting Keyboard","hard drive"],"transmitter Beauty compress",new Date("2018-09-06T05:02:36.563Z"),48460,new Date("2018-09-06T01:07:57.412Z"),new Date("2018-09-06T01:21:23.703Z"),[],96026,62853],obj: {_id: 10255,str: "Books",num: 80063,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10256,str: "invoice",num: 60895,date: new Date("2018-09-06T09:00:51.378Z"),array: [71949,new Date("2018-09-06T04:31:09.924Z"),"Advanced index",new Date("2018-09-06T13:57:43.450Z"),[37727,74479,new Date("2018-09-06T01:26:35.335Z"),new Date("2018-09-06T14:12:24.107Z"),"Money Market Account",new Date("2018-09-06T16:57:30.922Z")],{_id: 10257,str: "Incredible",num: 95072,date: new Date("2018-09-05T21:57:36.496Z"),obj: {}},[],{_id: 10258,date: new Date("2018-09-06T09:16:40.267Z"),array: ["deposit Advanced navigating"]},81067,"Direct Congolese Franc pixel",1543],obj: {_id: 10259,str: "Sharable Handcrafted Steel Car",num: 69452,date: new Date("2018-09-06T12:41:39.956Z"),array: [{_id: 10260,str: "Computers Crossing Concrete",num: 1864,date: new Date("2018-09-06T14:46:15.586Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 10261,num: 28057,date: new Date("2018-09-06T16:36:22.617Z"),array: [14404,new Date("2018-09-06T09:44:50.071Z"),"New Taiwan Dollar","Fantastic",new Date("2018-09-06T05:08:50.208Z"),{_id: 10262,str: "productize",num: 55041,date: new Date("2018-09-05T21:48:14.984Z"),array: [3634],obj: {}},[[],new Date("2018-09-05T20:16:19.364Z")],new Date("2018-09-06T14:13:59.263Z"),"orange",new Date("2018-09-06T06:17:34.103Z"),45095,"wireless",[60146],64827],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10263,str: "Fantastic Practical",num: 32071,date: new Date("2018-09-05T23:56:33.081Z"),array: [],obj: {_id: 10264,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10265,str: "Applications Unbranded Fresh Ball Representative",num: 13907,date: new Date("2018-09-06T09:38:41.812Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10266,str: "back-end mobile Principal",num: 34233,date: new Date("2018-09-06T00:31:48.151Z"),array: [74703,"Operative Leone",{_id: 10267,num: 40282,date: new Date("2018-09-06T07:47:47.158Z"),array: [new Date("2018-09-06T00:08:32.093Z"),new Date("2018-09-06T03:50:51.652Z"),"Outdoors indexing"],obj: {_id: 10268,str: "Corporate connecting",num: 74580,date: new Date("2018-09-06T05:38:34.932Z"),array: []}},97207,"program mindshare",new Date("2018-09-05T20:10:58.508Z"),[57587,98431],{_id: 10269,str: "Producer",num: 8618,obj: {_id: 10270,str: "Identity",date: new Date("2018-09-05T20:21:40.459Z"),array: [],obj: {_id: 10271,array: []}}},75786]});
    },

    function(coll) {
        return coll.insert({_id: 10272,str: "Officer PNG",num: 84938,array: [17162,new Date("2018-09-06T02:41:41.325Z"),"Skyway",[],"attitude array",new Date("2018-09-06T03:06:18.494Z"),new Date("2018-09-06T00:41:06.748Z"),48468,{_id: 10273,str: "Technician Brand bypassing",num: 44294,date: new Date("2018-09-05T23:33:56.779Z"),array: [],obj: {}},{_id: 10274,str: "synergies",num: 32495,date: new Date("2018-09-06T03:18:21.992Z"),obj: {}},new Date("2018-09-06T03:19:25.306Z"),[76082],"Automotive optical"]});
    },

    function(coll) {
        return coll.insert({_id: 10275,str: "solid state Personal Loan Account Awesome Rubber Chair",num: 52767,date: new Date("2018-09-06T09:11:05.750Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10276,str: "Computer Chicken New Hampshire",num: 42279,date: new Date("2018-09-06T06:31:50.174Z"),array: ["teal Licensed Steel Fish",56983,new Date("2018-09-06T18:22:26.132Z"),"Plastic Developer",[],"yellow Table Dam",34779,"Pike virtual port",new Date("2018-09-06T16:39:58.819Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10277,str: "Persevering Licensed multimedia",date: new Date("2018-09-06T10:10:08.942Z"),array: ["policy 1080p indexing",new Date("2018-09-06T17:35:08.974Z"),{_id: 10278,str: "lime Investor Martinique",num: 83486,date: new Date("2018-09-05T22:48:48.372Z"),array: [29910,[],48186,new Date("2018-09-05T21:08:22.113Z"),"middleware 1080p USB",new Date("2018-09-06T10:04:51.469Z")],obj: {_id: 10279,str: "synthesizing",num: 51883,obj: {}}},[],{_id: 10280,num: 83509,array: [4774],obj: {}},new Date("2018-09-06T13:07:33.204Z"),{_id: 10281,str: "Practical",num: 37440,date: new Date("2018-09-06T14:40:14.168Z"),obj: {_id: 10282,num: 41815,date: new Date("2018-09-06T15:03:03.865Z"),array: [],obj: {}}},new Date("2018-09-05T20:01:09.737Z")]});
    },

    function(coll) {
        return coll.insert({_id: 10283,str: "Liaison Investment Account",num: 88016,date: new Date("2018-09-06T09:55:20.163Z"),array: [new Date("2018-09-06T10:23:36.031Z"),29794,[],"bandwidth-monitored Credit Card Account",70603,97538,new Date("2018-09-05T23:09:24.206Z"),"Incredible Rubber Mouse orchestrate","Buckinghamshire Configurable Regional",53516,40867],obj: {_id: 10284,str: "magnetic demand-driven",date: new Date("2018-09-05T22:02:47.107Z"),array: [],obj: {_id: 10285,str: "morph",num: 38726,date: new Date("2018-09-05T21:24:02.415Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 10286,str: "Forest Optimization",num: 89952,date: new Date("2018-09-06T00:21:39.622Z"),array: ["invoice",new Date("2018-09-06T18:02:48.052Z"),23481,"Personal Loan Account Senior"]});
    },

    function(coll) {
        return coll.insert({_id: 10287,str: "Salad real-time quantify",num: 9758,date: new Date("2018-09-05T20:01:51.191Z"),array: ["1080p Checking Account",[92264,"hardware Bosnia and Herzegovina Fantastic Plastic Fish"],new Date("2018-09-05T21:51:37.715Z"),70914,{_id: 10288,num: 8746,date: new Date("2018-09-05T23:02:02.789Z"),array: [],obj: {_id: 10289,str: "best-of-breed",array: [new Date("2018-09-06T02:53:15.410Z")]}},98027,{_id: 10290,str: "Rustic Forks Table",num: 55316,date: new Date("2018-09-06T13:02:03.536Z"),array: ["Ball applications asymmetric",90499,new Date("2018-09-06T15:19:00.659Z")],obj: {_id: 10291,num: 76378,obj: {}}},[],"Practical",{_id: 10292,str: "Producer deposit",num: 90312,date: new Date("2018-09-06T15:31:01.627Z"),obj: {_id: 10293,str: "Swiss Franc",num: 53384,date: new Date("2018-09-06T10:55:06.416Z"),array: [new Date("2018-09-06T10:06:41.021Z"),{_id: 10294,date: new Date("2018-09-06T02:11:55.030Z"),obj: {}},"Investment Account",{_id: 10295,str: "Credit Card Account",date: new Date("2018-09-06T07:38:44.582Z"),array: []},5628],obj: {}}},[],new Date("2018-09-06T00:28:00.108Z"),new Date("2018-09-06T09:43:53.597Z"),44798]});
    },

    function(coll) {
        return coll.insert({_id: 10296,str: "PCI",num: 57048,date: new Date("2018-09-06T10:32:45.596Z"),array: [90536,"Security Cotton",60522,"Research protocol",{_id: 10297,str: "Maryland Checking Account bluetooth",num: 55706,obj: {_id: 10298,str: "calculating Fantastic",num: 18624,date: new Date("2018-09-06T08:09:55.087Z"),obj: {}}},new Date("2018-09-05T20:45:05.561Z")],obj: {_id: 10299,str: "Berkshire Haiti Health",num: 46845,date: new Date("2018-09-06T06:43:12.710Z"),array: [[],48227,{_id: 10300,date: new Date("2018-09-06T04:50:00.064Z"),array: [],obj: {_id: 10301,num: 84650,date: new Date("2018-09-06T08:02:52.096Z"),array: ["interface Cambridgeshire Incredible",new Date("2018-09-06T10:17:11.630Z"),{_id: 10302,array: [],obj: {}}]}},"black Garden Incredible Metal Bike","AGP Senior ability",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 10303,num: 35932,date: new Date("2018-09-06T00:43:07.374Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10304,str: "auxiliary Manager Licensed Rubber Keyboard",num: 43607,date: new Date("2018-09-06T08:46:50.768Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10305,str: "Auto Loan Account",num: 57268,date: new Date("2018-09-06T03:16:07.280Z"),array: [new Date("2018-09-06T04:53:35.716Z"),"Outdoors",43040,12293,new Date("2018-09-06T08:34:09.780Z"),new Date("2018-09-06T19:19:25.963Z"),[],new Date("2018-09-05T21:48:14.150Z"),{_id: 10306,str: "Hills overriding EXE",num: 28483,date: new Date("2018-09-06T05:46:40.958Z"),array: [],obj: {_id: 10307,num: 51456,date: new Date("2018-09-06T17:28:59.263Z"),obj: {}}},"deposit Cambridgeshire Markets"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10308,str: "Awesome Concrete Chair B2B Consultant",num: 27575,date: new Date("2018-09-05T21:18:30.948Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10309,str: "redundant",num: 80417,array: []});
    },

    function(coll) {
        return coll.insert({_id: 10310,num: 33817,date: new Date("2018-09-06T14:41:06.708Z"),array: [],obj: {_id: 10311,str: "one-to-one Sausages black",num: 15740,date: new Date("2018-09-06T09:38:21.759Z"),array: [{_id: 10312,str: "New Mexico ADP Tuvalu",num: 17309,obj: {}},new Date("2018-09-06T13:24:02.932Z"),81161,new Date("2018-09-06T13:49:48.141Z"),"Mexican Peso Mexican Unidad de Inversion (UDI)","Licensed Plastic Table compelling",46524,[{_id: 10313,str: "District Granite",num: 29314,array: [],obj: {}}],new Date("2018-09-06T08:36:25.529Z"),[39750,32267],new Date("2018-09-06T13:59:04.723Z"),["partnerships Canadian Dollar Creative"],new Date("2018-09-05T22:01:46.467Z")],obj: {_id: 10314,str: "Product Wyoming",date: new Date("2018-09-06T04:51:43.576Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 10315,str: "Kids whiteboard Intelligent",num: 97681,obj: {_id: 10316,str: "deposit hacking Reverse-engineered",num: 51372,date: new Date("2018-09-06T08:26:25.250Z"),obj: {_id: 10317,str: "Buckinghamshire withdrawal",num: 85858,date: new Date("2018-09-06T18:04:22.447Z"),array: [new Date("2018-09-06T14:47:42.738Z"),26710,"Synergized out-of-the-box Lead",4779,"portals initiatives card",57496,new Date("2018-09-05T20:34:29.515Z"),[],"open-source","Tools",new Date("2018-09-05T23:17:25.717Z"),89272,new Date("2018-09-06T05:54:05.100Z")],obj: {_id: 10318,num: 18834,date: new Date("2018-09-06T15:07:09.557Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 10319,str: "navigate Refined Rubber Gloves Persevering",num: 62941,date: new Date("2018-09-06T14:11:15.234Z"),array: [],obj: {_id: 10320,str: "application",num: 43137,date: new Date("2018-09-06T04:20:23.905Z"),array: [new Date("2018-09-06T04:43:17.660Z"),new Date("2018-09-06T14:22:54.830Z"),60459,"Court open-source best-of-breed",{_id: 10321,date: new Date("2018-09-06T13:13:25.121Z"),array: []},1206,"Soft",[],new Date("2018-09-05T23:23:31.832Z"),{_id: 10322,str: "revolutionize Architect solid state",num: 75471,date: new Date("2018-09-05T20:08:21.721Z"),array: [[95730],"Vermont"]},{_id: 10323,num: 93312,obj: {_id: 10324,str: "Money Market Account",obj: {}}},[],95661,new Date("2018-09-06T02:09:14.652Z")],obj: {_id: 10325,num: 1641,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10326,str: "Ridge Saudi Riyal analyzing",num: 18086,date: new Date("2018-09-06T12:38:29.594Z"),obj: {_id: 10327,str: "hierarchy",num: 30368,date: new Date("2018-09-05T23:04:17.596Z"),array: ["Borders Delaware Architect",new Date("2018-09-06T01:18:00.627Z"),68287,{_id: 10328,str: "Flats e-business application",num: 12739,date: new Date("2018-09-06T04:20:04.715Z"),array: [],obj: {}},76993,56379,"Cheese",[],{_id: 10329,num: 64215,date: new Date("2018-09-06T11:59:09.216Z"),array: ["Rustic Metal Tuna",new Date("2018-09-06T01:25:09.976Z")],obj: {_id: 10330,str: "back up cross-media",date: new Date("2018-09-06T16:30:03.870Z"),obj: {}}},"Mouse Pa'anga methodology",new Date("2018-09-05T21:46:01.781Z"),new Date("2018-09-06T02:04:12.398Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 10331,str: "Auto Loan Account",num: 26259,date: new Date("2018-09-06T04:37:51.018Z"),array: ["unleash plum Small",new Date("2018-09-06T02:03:25.329Z"),"gold",{_id: 10332,str: "Divide Croatia superstructure",num: 86067,array: [],obj: {}},new Date("2018-09-06T14:00:12.767Z"),new Date("2018-09-06T04:14:51.015Z"),98428,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10333,str: "Practical Rubber Table ADP Drive",date: new Date("2018-09-05T23:57:12.374Z"),array: [85721,"Health",new Date("2018-09-06T03:20:57.422Z"),{_id: 10334,str: "withdrawal bandwidth Kentucky",num: 63324,date: new Date("2018-09-06T11:11:36.767Z"),array: [49286,{_id: 10335,str: "Stravenue",num: 18724,array: [],obj: {_id: 10336,str: "Manager Massachusetts success",num: 67760,date: new Date("2018-09-06T03:29:47.793Z"),array: [],obj: {}}},["plum e-services Factors","Games artificial intelligence"],new Date("2018-09-06T15:32:24.531Z")],obj: {_id: 10337,num: 17482,date: new Date("2018-09-06T14:17:11.904Z")}},19066,new Date("2018-09-06T01:14:45.720Z"),"Tenge",new Date("2018-09-06T08:17:04.502Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10338,str: "Chief harness",num: 99828,date: new Date("2018-09-06T11:48:38.725Z"),array: [8490,33424,37581,"District","mindshare",new Date("2018-09-06T05:25:07.605Z"),{_id: 10339,num: 14230,date: new Date("2018-09-05T23:42:45.783Z"),obj: {}},{_id: 10340,str: "bi-directional",num: 73742,date: new Date("2018-09-06T01:30:23.937Z"),array: []},[],"Croatian Kuna Granite",new Date("2018-09-06T12:11:16.925Z"),31260],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10341,num: 68381,date: new Date("2018-09-06T00:29:31.204Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10342,str: "Manat",num: 22624,date: new Date("2018-09-06T03:35:32.975Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10343,str: "Jersey",num: 79381,date: new Date("2018-09-06T13:38:48.656Z"),array: [new Date("2018-09-06T05:09:38.413Z"),"navigate Switzerland",{_id: 10344,str: "copying Savings Account Regional",num: 84816,date: new Date("2018-09-06T07:44:31.389Z"),array: [],obj: {}},[40336],990,"productivity auxiliary",new Date("2018-09-06T01:08:05.054Z"),new Date("2018-09-06T03:45:21.538Z"),"SDD Soap metrics",{_id: 10345,str: "Money Market Account",date: new Date("2018-09-06T10:31:09.198Z"),array: [33551],obj: {_id: 10346,str: "Keyboard",obj: {_id: 10347,str: "Unbranded Fresh Shoes payment red",num: 69878}}},"Intuitive",[],new Date("2018-09-06T12:35:34.199Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10348,str: "niches SCSI",num: 28197,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10349,num: 19180,date: new Date("2018-09-06T00:32:44.422Z"),array: [],obj: {_id: 10350,str: "New Mexico",num: 99980,date: new Date("2018-09-05T20:01:21.154Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10351,str: "Concrete Jersey",num: 99290,date: new Date("2018-09-06T08:02:53.960Z"),array: [new Date("2018-09-06T14:21:11.366Z"),new Date("2018-09-06T00:45:42.110Z"),"firewall",new Date("2018-09-06T16:32:31.594Z"),{_id: 10352,num: 31194,date: new Date("2018-09-05T21:17:34.067Z"),array: [],obj: {_id: 10353,str: "COM Cambridgeshire local area network",num: 19793,array: [53519,"client-driven Specialist Ohio",97958,59655]}},"Paraguay Analyst pixel","generating Tasty",[],{_id: 10354,str: "back-end backing up",date: new Date("2018-09-06T10:33:43.070Z"),array: [{_id: 10355,str: "Quality-focused Wall",obj: {}},"Concrete"],obj: {}}],obj: {_id: 10356,str: "Identity",num: 32522,date: new Date("2018-09-06T00:32:17.791Z")}});
    },

    function(coll) {
        return coll.insert({_id: 10357,str: "Cambridgeshire Internal Missouri",num: 48588,date: new Date("2018-09-06T00:03:56.180Z"),array: [],obj: {_id: 10358,str: "Groves Generic Granite Car",num: 36941,date: new Date("2018-09-06T13:12:55.742Z"),array: ["Nevada blue",{_id: 10359,str: "Tasty Fresh Chips",num: 39286,date: new Date("2018-09-06T17:05:15.878Z"),obj: {}},[],8668,50752,new Date("2018-09-06T14:04:09.176Z"),34478,new Date("2018-09-06T06:03:53.022Z"),"networks",92530,new Date("2018-09-06T06:34:00.125Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10360,str: "Steel digital",num: 98093,date: new Date("2018-09-06T08:08:58.907Z"),array: [],obj: {_id: 10361,num: 41950,date: new Date("2018-09-06T10:09:36.800Z"),array: ["Shoes Direct",new Date("2018-09-06T00:18:40.147Z"),{_id: 10362,num: 78491,date: new Date("2018-09-06T08:36:18.799Z"),array: [],obj: {_id: 10363,date: new Date("2018-09-06T04:34:30.709Z"),array: [15366,"impactful index",60574],obj: {}}},new Date("2018-09-06T07:46:24.496Z"),new Date("2018-09-06T16:36:06.781Z"),"Sri Lanka Rupee secured line",[],[],48278,{_id: 10364,str: "Maryland Product",obj: {}},9438],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10365,str: "plum index",num: 87106,date: new Date("2018-09-05T21:18:56.845Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10366,str: "Dynamic Metrics",num: 69949,date: new Date("2018-09-06T12:33:21.507Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10367,str: "Pizza",num: 8472,date: new Date("2018-09-06T14:45:01.693Z"),array: [[],63701,53287,new Date("2018-09-06T10:09:02.013Z"),85144,"Lead maximize withdrawal","Savings Account Oregon fuchsia",{_id: 10368,str: "transition Antarctica (the territory South of 60 deg S) matrix",num: 79416,date: new Date("2018-09-06T07:36:59.127Z"),array: ["complexity invoice"],obj: {_id: 10369,num: 39078,date: new Date("2018-09-06T09:22:11.826Z"),array: [],obj: {}}},new Date("2018-09-05T22:55:27.782Z"),"Delaware Alley Pennsylvania",new Date("2018-09-06T08:02:18.091Z"),24641],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10370,str: "scale",num: 93658,array: [19981,new Date("2018-09-06T12:09:50.228Z"),"sky blue","action-items Lead pixel",new Date("2018-09-06T12:06:40.352Z"),43606,new Date("2018-09-06T09:45:34.955Z"),new Date("2018-09-06T00:06:11.780Z"),48443,[],[],new Date("2018-09-06T04:29:38.599Z"),37207],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10371,str: "24/7 Unbranded Cotton Bacon array",num: 76338,date: new Date("2018-09-05T22:07:35.249Z"),obj: {_id: 10372,str: "Berkshire parse",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 10373,num: 33943,date: new Date("2018-09-06T15:30:17.491Z"),array: ["Concrete deposit Soft",new Date("2018-09-06T15:38:17.244Z"),"Mountains",15560,31575,"Incredible online","platforms",new Date("2018-09-06T02:29:30.932Z"),new Date("2018-09-06T13:31:32.061Z"),[[],22529,new Date("2018-09-06T05:07:40.504Z")],41829,"circuit"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10374,str: "deposit",num: 6911,date: new Date("2018-09-06T02:07:30.529Z"),array: [],obj: {_id: 10375,str: "Stand-alone Identity transition",num: 93942,date: new Date("2018-09-06T06:11:59.099Z"),array: ["magenta",{_id: 10376,str: "tertiary Nebraska",num: 30268,date: new Date("2018-09-06T07:19:05.112Z"),array: [new Date("2018-09-06T00:03:13.118Z"),new Date("2018-09-06T00:55:48.556Z")],obj: {_id: 10377,array: [],obj: {}}},new Date("2018-09-06T19:37:49.008Z"),"compressing",6023,[],7266,[],"Turnpike bandwidth Assimilated","COM online Guadeloupe",{_id: 10378,str: "client-driven auxiliary",date: new Date("2018-09-06T07:07:02.619Z"),obj: {}},"Sleek Belarussian Ruble",21058,[[new Date("2018-09-06T18:27:22.656Z")]]]}});
    },

    function(coll) {
        return coll.insert({_id: 10379,num: 33590,date: new Date("2018-09-06T02:53:40.485Z"),obj: {_id: 10380,str: "Strategist",date: new Date("2018-09-06T01:01:30.094Z"),array: ["Forks Practical Investment Account",97659,58222,[],{_id: 10381,str: "protocol Liberian Dollar",num: 66728,date: new Date("2018-09-06T05:53:35.804Z"),array: [],obj: {}},new Date("2018-09-06T03:48:40.282Z"),"solid state","Small Metal Bike"]}});
    },

    function(coll) {
        return coll.insert({_id: 10382,str: "Borders",num: 65959,date: new Date("2018-09-06T14:13:05.414Z"),array: [],obj: {_id: 10383,str: "Avon partnerships",date: new Date("2018-09-06T03:24:28.759Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10384,str: "primary portals",num: 17168,date: new Date("2018-09-06T00:47:18.080Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10385,str: "Administrator Iraq",num: 57964,date: new Date("2018-09-06T06:23:21.209Z"),array: [new Date("2018-09-05T22:36:07.705Z"),62358,"Ford",[],{_id: 10386,num: 23948,obj: {_id: 10387,str: "Martinique Cambridgeshire bluetooth",num: 6861,date: new Date("2018-09-05T22:31:45.929Z"),array: []}},"Yuan Renminbi Home Loan Account Checking Account",new Date("2018-09-06T01:25:28.647Z"),66794,[{_id: 10388,date: new Date("2018-09-06T04:48:15.573Z"),array: [new Date("2018-09-06T15:55:05.693Z"),"human-resource Optimization"],obj: {}},74876,14919,new Date("2018-09-05T20:08:51.969Z"),[]],94540],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10389,str: "Marketing",num: 2686,date: new Date("2018-09-06T00:04:33.988Z"),array: ["Research Cove",new Date("2018-09-06T06:11:37.746Z"),[],new Date("2018-09-06T08:19:42.433Z"),62792,{_id: 10390,num: 37186,date: new Date("2018-09-06T02:09:05.406Z"),array: [[],52807,69763,"bypassing Fantastic","invoice invoice",new Date("2018-09-06T03:51:33.518Z")],obj: {_id: 10391,str: "artificial intelligence",num: 85627,date: new Date("2018-09-05T20:09:26.316Z"),array: [],obj: {}}},"neural",40022,new Date("2018-09-06T17:20:29.325Z"),{_id: 10392,str: "Awesome Concrete Gloves open system Chicken",array: [{_id: 10393,str: "RSS driver",date: new Date("2018-09-06T19:04:13.025Z"),array: [],obj: {}}]},{_id: 10394,str: "Practical neutral Principal",num: 39824,obj: {_id: 10395,date: new Date("2018-09-06T11:31:30.795Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 10396,str: "FTP",num: 43680,date: new Date("2018-09-06T02:57:27.560Z"),array: ["Texas",new Date("2018-09-06T02:21:34.405Z"),81761,new Date("2018-09-06T07:40:21.331Z"),{_id: 10397,str: "compressing",date: new Date("2018-09-06T03:36:03.855Z"),array: [],obj: {_id: 10398,str: "Fresh program",num: 21636,date: new Date("2018-09-06T00:35:42.013Z"),array: [],obj: {}}},"Auto Loan Account protocol Designer",new Date("2018-09-06T12:37:47.608Z"),"overriding Tala",new Date("2018-09-05T21:06:00.358Z"),[4483,"Small",86796,new Date("2018-09-06T02:56:49.892Z"),"Architect fresh-thinking feed"],[],"e-business extend Division",{_id: 10399,num: 88261,date: new Date("2018-09-06T04:06:10.421Z"),obj: {_id: 10400,num: 30780,array: [49841]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10401,num: 22190,date: new Date("2018-09-06T02:13:53.437Z"),array: ["system-worthy Chips",97083,62996,98481,new Date("2018-09-06T15:54:17.741Z"),"lime architectures",new Date("2018-09-06T03:30:53.556Z"),34875,{_id: 10402,str: "Licensed",num: 62909,date: new Date("2018-09-06T02:29:10.470Z"),array: [],obj: {}},28821,new Date("2018-09-06T03:28:53.645Z"),new Date("2018-09-06T12:18:49.404Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10403,str: "cross-platform Netherlands Mouse",num: 69176,date: new Date("2018-09-06T09:43:06.282Z"),array: [new Date("2018-09-06T02:05:52.827Z"),[],"Unions Bedfordshire",new Date("2018-09-06T02:55:22.672Z"),[],new Date("2018-09-06T03:24:51.746Z"),{_id: 10404,str: "world-class programming Solutions",num: 94923,date: new Date("2018-09-06T11:04:39.619Z"),array: [62864,31436,"Consultant Libyan Dinar"]},[],new Date("2018-09-05T20:11:54.462Z"),{_id: 10405,str: "orchestrate Research empower",num: 68605,date: new Date("2018-09-06T16:49:22.767Z"),obj: {_id: 10406,date: new Date("2018-09-06T05:42:30.863Z"),array: [36279,64967,"upward-trending Mandatory incentivize"],obj: {}}}],obj: {_id: 10407,str: "Intelligent Metal Soap Identity",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10408,str: "Chicken parse compressing",num: 74932,date: new Date("2018-09-05T23:31:08.340Z"),array: [31942,"Incredible",new Date("2018-09-06T13:36:34.645Z"),new Date("2018-09-06T06:09:57.353Z"),new Date("2018-09-06T17:18:14.063Z"),9721,{_id: 10409,str: "North Dakota",num: 45931,date: new Date("2018-09-06T12:43:02.543Z"),array: [],obj: {}},"Fish supply-chains",35007,10797,"Pound Sterling Kids",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10410,str: "Future-proofed Mauritius South Carolina",num: 94807,date: new Date("2018-09-06T08:04:06.060Z"),array: [],obj: {_id: 10411,str: "Mississippi",num: 85292,date: new Date("2018-09-06T07:57:41.595Z"),array: [[],1191,341,22105,"Car cross-platform Checking Account",new Date("2018-09-06T01:22:28.084Z"),"District quantifying Mobility",new Date("2018-09-06T11:52:20.114Z"),new Date("2018-09-06T17:01:56.091Z"),{_id: 10412,str: "web-readiness parsing",obj: {}},new Date("2018-09-05T23:17:31.417Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10413,str: "Baby",num: 61837,date: new Date("2018-09-06T17:15:52.050Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10414,str: "plug-and-play bricks-and-clicks Buckinghamshire",num: 13572,date: new Date("2018-09-06T08:51:17.382Z"),array: [59537,new Date("2018-09-06T18:59:08.879Z"),57856,new Date("2018-09-06T12:09:05.780Z"),new Date("2018-09-06T02:59:53.677Z"),"Strategist driver","Polarised Mississippi Grocery","EXE generate","Handmade Concrete Table optimal Industrial",{_id: 10415,str: "Toys",date: new Date("2018-09-06T11:36:41.880Z"),array: [[92121,{_id: 10416,str: "Awesome Fresh Chicken",num: 83613,date: new Date("2018-09-06T15:54:29.522Z"),array: [],obj: {_id: 10417,str: "Dynamic firewall parsing",date: new Date("2018-09-06T15:52:52.246Z"),array: []}},[],51474,{_id: 10418,str: "Chief Cambridgeshire Functionality",num: 36113,obj: {}},{_id: 10419,str: "quantifying fuchsia Pakistan Rupee",num: 59809,date: new Date("2018-09-06T04:48:34.394Z"),array: [],obj: {_id: 10420,num: 10724,date: new Date("2018-09-06T00:27:04.712Z"),obj: {_id: 10421,num: 2888,date: new Date("2018-09-06T05:37:23.035Z")}}}],64696],obj: {}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 10422,str: "Awesome",date: new Date("2018-09-05T23:36:43.337Z"),array: [],obj: {_id: 10423,str: "Chicken",num: 49601,date: new Date("2018-09-06T18:48:55.028Z"),array: [{_id: 10424,num: 7241,obj: {}},"quantify Nigeria",[],new Date("2018-09-06T02:26:05.994Z"),{_id: 10425,str: "Salad system engine",num: 5106,date: new Date("2018-09-06T11:32:40.819Z"),array: [28491],obj: {}},11043,new Date("2018-09-06T18:48:05.755Z"),new Date("2018-09-06T15:08:13.465Z"),"Idaho interface",[],43804]}});
    },

    function(coll) {
        return coll.insert({_id: 10426,str: "Electronics",num: 85261,date: new Date("2018-09-06T18:00:05.652Z"),array: [],obj: {_id: 10427,date: new Date("2018-09-05T22:19:07.209Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10428,str: "program",date: new Date("2018-09-06T00:49:04.606Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10429,str: "Rustic Silver",num: 29502,date: new Date("2018-09-06T15:57:33.298Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10430,num: 37652,date: new Date("2018-09-06T09:37:53.145Z"),array: [],obj: {_id: 10431,str: "Generic convergence Gorgeous",num: 13210,date: new Date("2018-09-06T07:32:15.511Z"),array: [],obj: {_id: 10432,str: "Croatian Kuna Tasty Frozen Pizza",num: 78152}}});
    },

    function(coll) {
        return coll.insert({_id: 10433,num: 12674,date: new Date("2018-09-06T04:26:01.187Z"),array: [],obj: {_id: 10434,str: "compressing",num: 34874,date: new Date("2018-09-06T19:20:39.364Z"),array: [{_id: 10435,str: "backing up",num: 38622,date: new Date("2018-09-06T19:31:54.087Z"),array: [new Date("2018-09-06T15:11:18.936Z"),["Sharable overriding JSON"],"Frozen"],obj: {_id: 10436,str: "exuding",array: [79864,92802,new Date("2018-09-06T14:57:04.737Z")],obj: {}}},{_id: 10437,num: 22101,date: new Date("2018-09-06T00:02:09.987Z")},new Date("2018-09-06T16:51:22.843Z"),"Metal olive",31259,"Supervisor forecast Cayman Islands Dollar",[],22189,{_id: 10438,str: "Granite",num: 57961,date: new Date("2018-09-06T11:49:58.042Z"),obj: {}},new Date("2018-09-06T17:51:25.729Z"),"Home Loan Account"],obj: {_id: 10439,str: "Realigned analyzer Credit Card Account",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 10440,str: "copy New Taiwan Dollar Shirt",num: 69387,date: new Date("2018-09-06T02:50:45.628Z"),array: [],obj: {_id: 10441,str: "haptic 1080p",num: 14990,date: new Date("2018-09-06T04:05:15.765Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10442,str: "withdrawal invoice architect",num: 92852,date: new Date("2018-09-06T02:48:59.890Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10443,str: "indigo metrics value-added",date: new Date("2018-09-06T10:36:58.677Z"),array: [52899,53528,"facilitate bluetooth aggregate",new Date("2018-09-06T15:15:43.896Z"),"Rubber needs-based",new Date("2018-09-06T06:24:32.735Z"),new Date("2018-09-06T00:36:03.808Z"),12489,[],{_id: 10444,str: "Officer Auto Loan Account Pataca",num: 77796,date: new Date("2018-09-06T02:33:06.248Z"),array: [91216,"Borders",[],new Date("2018-09-06T15:11:29.097Z"),{_id: 10445,str: "incentivize Personal Loan Account Licensed Frozen Keyboard",date: new Date("2018-09-06T04:14:25.809Z"),obj: {_id: 10446,num: 23272,date: new Date("2018-09-05T21:10:28.468Z"),array: ["engage"],obj: {_id: 10447,str: "Berkshire payment Practical Fresh Bike",num: 27145,obj: {_id: 10448,str: "Ergonomic payment Borders",num: 80645,date: new Date("2018-09-06T17:42:43.001Z"),array: []}}}},{_id: 10449,num: 76735,date: new Date("2018-09-06T16:40:22.250Z"),array: [26077],obj: {}}],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 10450,str: "executive infrastructures",num: 18567,date: new Date("2018-09-06T03:52:34.556Z"),array: [80237,new Date("2018-09-06T14:46:16.682Z"),"Stravenue Product",new Date("2018-09-06T04:14:27.212Z"),{_id: 10451,num: 34711,obj: {_id: 10452,str: "Mayotte",date: new Date("2018-09-06T06:27:47.485Z"),array: ["eyeballs Executive partnerships","secondary Tasty Cotton Shoes Identity",new Date("2018-09-06T16:37:28.064Z"),15712,new Date("2018-09-06T07:29:10.495Z"),"Books Tasty primary"],obj: {}}},"invoice Chair",[],69795]});
    },

    function(coll) {
        return coll.insert({_id: 10453,num: 93001,array: [36496,"Dalasi Chicken migration",15363,new Date("2018-09-05T22:45:28.801Z"),{_id: 10454,str: "engineer analyzing connecting",num: 77896,date: new Date("2018-09-06T08:02:43.137Z"),array: [],obj: {}},"Montana regional",[],"monetize",[31279,new Date("2018-09-06T07:12:49.230Z")],new Date("2018-09-06T11:47:05.018Z"),["Grocery Electronics parse",{_id: 10455,num: 58638,date: new Date("2018-09-06T04:13:50.154Z"),array: [],obj: {}},new Date("2018-09-06T15:46:21.895Z"),"Rubber",new Date("2018-09-06T14:31:13.170Z")],new Date("2018-09-05T23:10:44.354Z")],obj: {_id: 10456,str: "system Synergistic Poland",num: 59211,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10457,str: "Bacon",num: 97913,date: new Date("2018-09-06T04:41:32.491Z"),array: [[],30982,69499,"embrace implement",19365,new Date("2018-09-05T22:50:50.210Z"),new Date("2018-09-05T21:13:18.476Z"),"Wooden impactful Borders",[]],obj: {_id: 10458,str: "Fiji Wisconsin",num: 51679,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10459,str: "payment Face to face niches",num: 21022,date: new Date("2018-09-06T13:38:11.925Z"),array: [["azure relationships PNG","Checking Account",new Date("2018-09-06T16:32:30.673Z"),81190],{_id: 10460,str: "best-of-breed",date: new Date("2018-09-06T01:44:41.154Z"),array: [],obj: {_id: 10461,str: "synergistic",num: 81301,date: new Date("2018-09-06T12:53:30.174Z"),array: [new Date("2018-09-05T20:36:31.375Z"),5331,29108],obj: {}}},{_id: 10462,str: "Rustic Steel Ball",num: 98265,date: new Date("2018-09-06T11:22:05.076Z"),obj: {_id: 10463,str: "front-end FTP bandwidth",num: 7401}},new Date("2018-09-05T22:36:50.303Z"),"Analyst standardization Quality","Mayotte Gloves",[],new Date("2018-09-06T03:13:35.801Z"),new Date("2018-09-05T21:34:22.614Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10464,num: 7948,date: new Date("2018-09-06T04:05:46.119Z"),array: [90417,new Date("2018-09-06T14:56:57.782Z"),new Date("2018-09-06T12:45:27.618Z"),94534,"Rubber systematic e-commerce","China Namibia",[new Date("2018-09-06T03:14:31.962Z")],{_id: 10465,str: "leading-edge",num: 77010,array: [33046,new Date("2018-09-06T04:55:09.403Z"),{_id: 10466,num: 8536,date: new Date("2018-09-06T15:55:52.440Z"),obj: {_id: 10467,str: "Fish",date: new Date("2018-09-06T16:32:47.263Z"),array: [],obj: {}}},92409,new Date("2018-09-06T17:11:34.797Z")],obj: {_id: 10468,str: "Manor Maine",date: new Date("2018-09-06T00:22:37.888Z"),array: []}},[],26751,new Date("2018-09-06T13:49:00.961Z")]});
    },

    function(coll) {
        return coll.insert({_id: 10469,str: "bi-directional Clothing Soap",num: 53686,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10470,str: "Handmade teal",num: 28146,date: new Date("2018-09-05T20:23:21.199Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10471,str: "Agent deploy New York",num: 78480,date: new Date("2018-09-06T12:44:09.212Z"),obj: {_id: 10472,str: "Agent",num: 39693,date: new Date("2018-09-06T18:35:52.469Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 10473,str: "Ergonomic",num: 52891,array: [],obj: {_id: 10474,num: 52573,date: new Date("2018-09-06T13:38:19.331Z"),array: [24858,new Date("2018-09-05T22:53:33.272Z"),["standardization Harbors maroon","Strategist Checking Account Awesome Soft Hat",new Date("2018-09-06T06:38:17.628Z"),{_id: 10475,str: "synergistic",num: 55063,date: new Date("2018-09-05T20:48:39.999Z"),array: [],obj: {}}],78266,new Date("2018-09-06T09:43:06.615Z"),new Date("2018-09-06T10:17:15.677Z"),"back-end Sleek Architect",95182,{_id: 10476,str: "best-of-breed",date: new Date("2018-09-05T20:35:47.660Z"),array: [37465,46785],obj: {}},new Date("2018-09-06T00:03:00.868Z")],obj: {_id: 10477,str: "South Carolina Visionary Analyst",num: 74676}}});
    },

    function(coll) {
        return coll.insert({_id: 10478,str: "implement Intelligent Rubber Shoes Checking Account",date: new Date("2018-09-06T13:36:19.186Z"),array: [],obj: {_id: 10479,str: "leading-edge",num: 41081,date: new Date("2018-09-06T04:38:07.018Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10480,str: "Saint Martin",num: 60868,array: [new Date("2018-09-05T20:14:43.673Z"),{_id: 10481,str: "Honduras",num: 4547,date: new Date("2018-09-06T19:52:51.011Z"),array: [],obj: {}},55153,{_id: 10482,str: "JSON Soap Computer",date: new Date("2018-09-05T21:51:12.920Z"),array: ["deploy",40599]},[52452,"District composite"],"alarm Integrated",new Date("2018-09-06T08:49:41.122Z"),[39359],"clicks-and-mortar",84754,"Missouri Games violet",new Date("2018-09-06T11:45:06.664Z"),80350,new Date("2018-09-06T01:07:23.536Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10483,num: 31936,date: new Date("2018-09-06T02:54:36.656Z"),array: ["green Metal Colorado",61551,88776,[new Date("2018-09-06T03:43:38.373Z"),"challenge",new Date("2018-09-05T20:50:58.426Z")],"best-of-breed Corners",25176,"adapter Forward Views",{_id: 10484,str: "Grocery",num: 41076,date: new Date("2018-09-06T10:20:36.372Z"),array: [89331],obj: {}},new Date("2018-09-05T20:24:54.771Z"),new Date("2018-09-06T11:14:48.271Z"),{_id: 10485,str: "calculating Practical violet",num: 72736,array: [[],[],11078],obj: {_id: 10486,str: "cultivate quantify",date: new Date("2018-09-06T16:57:19.302Z"),obj: {}}},"Polarised",65173]});
    },

    function(coll) {
        return coll.insert({_id: 10487,str: "Iraqi Dinar",num: 88162,date: new Date("2018-09-06T00:28:16.303Z"),array: ["cyan",new Date("2018-09-06T17:16:29.763Z"),new Date("2018-09-06T12:43:45.151Z"),"Intelligent",[39267,new Date("2018-09-06T13:15:17.425Z"),"Baby"],90609,14371,["dot-com FTP",{_id: 10488,str: "Orchestrator",num: 95719,date: new Date("2018-09-06T07:53:21.612Z"),array: [],obj: {_id: 10489,str: "Reverse-engineered microchip Fresh",num: 13465,date: new Date("2018-09-06T03:18:15.549Z"),array: [],obj: {}}}],{_id: 10490,num: 76952,array: [new Date("2018-09-06T16:14:54.166Z"),{_id: 10491,str: "Assurance Yen",date: new Date("2018-09-06T18:01:08.640Z"),array: [],obj: {}}]},new Date("2018-09-06T15:48:48.192Z")]});
    },

    function(coll) {
        return coll.insert({_id: 10492,str: "workforce",num: 30421,date: new Date("2018-09-06T13:59:53.266Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10493,str: "copying Bedfordshire",num: 7177,date: new Date("2018-09-06T04:34:03.303Z"),array: ["Implemented grey visionary","focus group",new Date("2018-09-05T20:15:38.347Z"),new Date("2018-09-05T20:58:08.912Z"),19552,{_id: 10494,str: "Progressive Brand",date: new Date("2018-09-06T00:41:25.965Z")},new Date("2018-09-06T04:47:52.555Z"),84142,[]],obj: {_id: 10495,num: 87165,date: new Date("2018-09-06T18:27:02.210Z"),array: [[],[],[18722,"withdrawal Associate circuit"],65999,"Gloves"],obj: {_id: 10496,str: "blue Unbranded",date: new Date("2018-09-05T20:34:28.677Z"),array: [new Date("2018-09-06T15:51:12.548Z"),57419,new Date("2018-09-06T09:55:28.995Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10497,str: "local Maine Outdoors",num: 17022,date: new Date("2018-09-05T21:45:43.562Z"),array: [],obj: {_id: 10498,str: "pink Administrator",array: [[new Date("2018-09-06T09:33:53.644Z"),new Date("2018-09-06T17:48:06.494Z"),{_id: 10499,num: 74106,date: new Date("2018-09-06T13:54:01.310Z"),array: [],obj: {_id: 10500,num: 84246,date: new Date("2018-09-05T23:49:31.035Z")}},new Date("2018-09-06T07:26:04.846Z"),89360],"Keyboard",28747,"deposit Virgin Islands, U.S.","Cambridgeshire recontextualize",13197,14922,{_id: 10501,str: "Borders",num: 65609,date: new Date("2018-09-06T03:44:30.448Z"),array: [],obj: {_id: 10502,str: "Louisiana Granite",num: 33763,date: new Date("2018-09-06T18:58:09.814Z"),array: [{_id: 10503,str: "Bahraini Dinar Cheese Kids",num: 50286,date: new Date("2018-09-06T03:26:09.159Z"),array: [[22644,new Date("2018-09-06T02:17:02.799Z")],[],"Practical Concrete Towels"]}],obj: {}}},{_id: 10504,obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 10505,num: 90931,date: new Date("2018-09-06T10:44:53.913Z"),array: [new Date("2018-09-06T04:24:09.708Z"),new Date("2018-09-06T18:52:09.129Z"),82150,new Date("2018-09-06T11:14:59.811Z"),"Practical Soft Chair Home Loan Account primary",52896,358,[76617,79586,{_id: 10506,str: "Grocery",num: 89965,date: new Date("2018-09-06T09:47:49.741Z"),array: [],obj: {}},"deposit logistical Algeria",62435],"Monitored e-commerce","bypassing implement"]});
    },

    function(coll) {
        return coll.insert({_id: 10507,str: "Estates",num: 70440,date: new Date("2018-09-06T03:21:18.835Z"),array: [],obj: {_id: 10508,str: "Malaysia upward-trending",num: 1228,array: [5279,85716,new Date("2018-09-06T17:36:44.906Z"),"zero administration",3886,{_id: 10509,str: "networks Soft Money Market Account",num: 91384,date: new Date("2018-09-06T19:48:01.954Z"),obj: {}},new Date("2018-09-06T00:57:41.874Z"),"Chair digital transition",{_id: 10510,num: 20032,date: new Date("2018-09-05T21:46:52.262Z")}],obj: {_id: 10511,array: ["Path",[],"Ecuador",new Date("2018-09-06T11:49:43.106Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 10512,str: "Rubber Ergonomic protocol",num: 99176,date: new Date("2018-09-06T07:19:07.148Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 10513,str: "Health navigating",num: 46978,date: new Date("2018-09-06T14:38:53.941Z"),array: [],obj: {_id: 10514,str: "SCSI Coordinator",num: 82941,date: new Date("2018-09-06T12:00:35.526Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10515,str: "silver Customizable Metal",num: 63795,date: new Date("2018-09-05T22:05:15.675Z"),array: [],obj: {_id: 10516,str: "e-markets",num: 45365,date: new Date("2018-09-06T08:41:39.537Z"),array: [[],[94795,85839,[]],{_id: 10517,str: "Buckinghamshire Health system",date: new Date("2018-09-06T06:10:56.575Z"),array: [new Date("2018-09-06T02:24:03.723Z"),new Date("2018-09-06T06:48:27.109Z"),"De-engineered"],obj: {_id: 10518,str: "Colorado cross-platform copying",num: 35457,array: [],obj: {_id: 10519,str: "synthesize Borders Applications",obj: {_id: 10520,num: 26643,date: new Date("2018-09-06T09:03:36.817Z"),array: ["e-markets platforms","Mexican Peso Mexican Unidad de Inversion (UDI)",["Guyana Cliffs"],{_id: 10521,str: "Savings Account",num: 38758,obj: {}}]}}}},3375,88923,new Date("2018-09-06T01:39:39.130Z"),new Date("2018-09-06T16:39:44.851Z"),29304,"encryption Bike transitional"]}});
    },

    function(coll) {
        return coll.insert({_id: 10522,str: "seamless",num: 10680,date: new Date("2018-09-05T23:30:55.254Z"),array: [new Date("2018-09-06T18:55:19.789Z"),95843,new Date("2018-09-06T19:09:30.914Z"),"Road Clothing Buckinghamshire","cross-platform Communications Gourde US Dollar",49207,[],{_id: 10523,str: "Reactive",num: 17959,date: new Date("2018-09-06T19:01:18.225Z"),array: [2410],obj: {}},new Date("2018-09-06T11:05:05.653Z"),84351,"Customer",14130,new Date("2018-09-06T12:42:54.399Z"),"Operations"],obj: {_id: 10524,str: "envisioneer",num: 76197,date: new Date("2018-09-06T19:00:04.405Z"),array: [[],{_id: 10525,str: "International",num: 73439,date: new Date("2018-09-06T15:27:32.225Z"),array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10526,str: "B2C",num: 40287,date: new Date("2018-09-06T16:30:54.874Z"),array: [new Date("2018-09-06T12:46:19.892Z"),new Date("2018-09-06T09:47:39.252Z"),[],25643,"demand-driven COM Fundamental","alarm Coordinator Agent",{_id: 10527,str: "Mobility Mississippi",date: new Date("2018-09-06T16:54:30.733Z"),array: [],obj: {_id: 10528,str: "SMTP Buckinghamshire Investment Account",num: 41876,date: new Date("2018-09-06T18:25:21.742Z"),array: [],obj: {_id: 10529,num: 22757,array: [21099,"back-end portal",50086],obj: {}}}},60356,59002,new Date("2018-09-06T05:20:23.859Z"),"Frozen front-end"]});
    },

    function(coll) {
        return coll.insert({_id: 10530,str: "Horizontal",num: 63212,date: new Date("2018-09-06T13:17:11.390Z"),array: [],obj: {_id: 10531,str: "override",num: 8475,date: new Date("2018-09-06T04:18:13.598Z"),array: ["magnetic","platforms Principal","Data metrics",7290,[11113,84994,new Date("2018-09-06T19:33:31.676Z")],33310,{_id: 10532,str: "gold",num: 39585,array: [],obj: {}},new Date("2018-09-05T20:42:31.205Z"),"solid state",new Date("2018-09-06T01:44:03.164Z"),3797,[]],obj: {_id: 10533,str: "Borders calculating",num: 25573,date: new Date("2018-09-06T00:51:58.541Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 10534,str: "incremental back up",date: new Date("2018-09-06T05:08:25.283Z"),array: [12852,new Date("2018-09-06T19:44:51.949Z"),"Guinea-Bissau invoice",81653,[],"Representative",{_id: 10535,str: "haptic",num: 6866,date: new Date("2018-09-05T23:28:41.972Z"),array: ["azure",new Date("2018-09-06T13:06:40.705Z"),new Date("2018-09-06T14:41:27.392Z"),[]],obj: {}},new Date("2018-09-05T23:37:36.931Z"),new Date("2018-09-06T14:08:26.404Z"),new Date("2018-09-06T08:04:30.691Z"),73423],obj: {_id: 10536,num: 32613,date: new Date("2018-09-06T16:58:50.231Z"),obj: {_id: 10537,str: "Sleek",num: 56080,date: new Date("2018-09-06T01:57:28.591Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10538,str: "Fantastic Rubber Hat Cambridgeshire",num: 96564,date: new Date("2018-09-06T10:09:18.553Z"),array: [new Date("2018-09-06T17:29:25.226Z"),"actuating web-readiness",new Date("2018-09-06T16:07:19.039Z"),"primary Kenya",new Date("2018-09-06T08:17:17.639Z"),"Bedfordshire",60824,new Date("2018-09-05T21:59:06.880Z"),new Date("2018-09-06T07:32:28.548Z"),99354,[59931]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10539,str: "global strategize",num: 58100,date: new Date("2018-09-05T22:48:17.095Z"),array: [95826,new Date("2018-09-06T18:45:27.688Z"),["haptic",12064,new Date("2018-09-06T07:28:17.698Z"),{_id: 10540,str: "Books Representative",date: new Date("2018-09-06T12:35:15.774Z"),array: [38423],obj: {}},"matrix Maine open-source"],{_id: 10541,str: "Investment Account Russian Federation",num: 96967,array: [new Date("2018-09-05T23:00:47.419Z"),43454,[],"quantifying Bedfordshire high-level"],obj: {}},46349,new Date("2018-09-06T12:43:14.836Z"),"invoice Integration",new Date("2018-09-05T21:10:39.616Z"),15591,new Date("2018-09-06T03:00:52.219Z")],obj: {_id: 10542,str: "Division Soap Multi-lateral",num: 99724,array: [],obj: {_id: 10543,num: 12792,date: new Date("2018-09-06T00:40:58.757Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 10544,str: "panel Republic of Korea overriding",num: 95193,date: new Date("2018-09-06T11:02:04.510Z"),array: [],obj: {_id: 10545,str: "Bike violet",num: 9128,date: new Date("2018-09-06T03:24:47.478Z"),array: ["Martinique Sports knowledge user",new Date("2018-09-06T06:53:52.227Z"),90664,[],"withdrawal",47834],obj: {_id: 10546,str: "Soap cyan",num: 80132,array: [new Date("2018-09-06T00:36:45.954Z"),{_id: 10547,num: 45751,date: new Date("2018-09-06T11:27:16.493Z"),array: [],obj: {}},90578,"solutions Texas",{_id: 10548,str: "Generic",num: 36394,date: new Date("2018-09-06T13:46:37.633Z")}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10549,str: "Point",num: 19912,date: new Date("2018-09-05T22:53:03.914Z"),array: ["neural-net",new Date("2018-09-06T02:40:16.094Z"),new Date("2018-09-06T08:51:55.828Z"),80167,[],new Date("2018-09-05T19:56:52.541Z"),"synergies Practical Enhanced",35471,{_id: 10550,str: "generating Producer Handcrafted",num: 17974,date: new Date("2018-09-06T15:36:21.920Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 10551,str: "auxiliary",num: 63460,date: new Date("2018-09-05T22:56:39.421Z"),array: [82784,"1080p parse Investment Account","navigating Refined Savings Account",new Date("2018-09-05T21:59:51.990Z"),53024,"Licensed multi-byte Distributed",74961,new Date("2018-09-06T06:57:08.396Z"),new Date("2018-09-06T13:19:25.245Z")],obj: {_id: 10552,str: "Data indexing customized",date: new Date("2018-09-06T14:17:21.514Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10553,str: "mint green",num: 13114,date: new Date("2018-09-06T10:44:49.518Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10554,str: "Cambridgeshire Refined Steel Table Jewelery",date: new Date("2018-09-06T11:59:41.900Z"),array: [new Date("2018-09-06T08:26:23.224Z"),87961,"Research Bedfordshire","Licensed calculating neural",45961,new Date("2018-09-05T22:31:10.099Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10555,str: "index",num: 20577,date: new Date("2018-09-06T09:15:11.267Z"),array: ["compress utilisation Lempira",new Date("2018-09-05T23:12:40.516Z"),88607,[],95783,{_id: 10556,str: "North Carolina connect",num: 1568,date: new Date("2018-09-06T17:47:13.501Z"),obj: {_id: 10557,array: ["back-end Networked Small",new Date("2018-09-05T21:27:56.418Z")]}},45870,"Metal",{_id: 10558,str: "content Security",num: 61702,date: new Date("2018-09-06T13:15:19.770Z"),obj: {_id: 10559,num: 35985,array: []}},87038,new Date("2018-09-06T16:28:01.398Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10560,str: "Rustic Rubber Bacon circuit",date: new Date("2018-09-06T19:45:55.888Z"),array: [42470,new Date("2018-09-06T19:09:28.540Z"),new Date("2018-09-06T05:45:17.695Z"),new Date("2018-09-06T19:39:53.894Z"),"Assimilated red deliver","aggregate","Avon Music",59166,[],"functionalities Cloned bypassing",13767,{_id: 10561,str: "Berkshire Kwanza Unbranded Cotton Fish",num: 52619,date: new Date("2018-09-06T04:35:21.854Z"),array: [],obj: {}},12453],obj: {_id: 10562,str: "Buckinghamshire Avon",num: 62443,date: new Date("2018-09-06T15:49:21.209Z"),array: [new Date("2018-09-05T22:34:45.746Z"),8791],obj: {_id: 10563,num: 40384,date: new Date("2018-09-06T04:53:54.860Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 10564,str: "Cambridgeshire reboot",date: new Date("2018-09-06T01:52:35.723Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 10565,str: "Incredible Fresh Towels North Carolina",num: 1874,date: new Date("2018-09-06T02:04:11.574Z"),array: [new Date("2018-09-05T20:49:29.667Z"),new Date("2018-09-06T08:58:11.076Z"),{_id: 10566,str: "users",num: 86644,date: new Date("2018-09-05T21:45:57.480Z"),array: [],obj: {}},"Handmade Wooden Ball SQL",new Date("2018-09-05T22:51:52.359Z"),79356,"Facilitator UIC-Franc Gorgeous",59575]});
    },

    function(coll) {
        return coll.insert({_id: 10567,str: "Refined Cotton Chips",num: 55625,date: new Date("2018-09-05T23:03:36.058Z"),array: [93268,"quantifying",93701,new Date("2018-09-06T03:53:35.635Z"),"dynamic Principal Toys",new Date("2018-09-06T10:12:37.008Z"),new Date("2018-09-06T15:37:57.145Z"),[[],{_id: 10568,num: 68667,date: new Date("2018-09-05T23:10:01.499Z"),obj: {}},{_id: 10569,str: "core primary Ergonomic Fresh Mouse"}],21582,"architect","collaboration Advanced",new Date("2018-09-06T09:46:31.283Z")],obj: {_id: 10570,num: 39112,date: new Date("2018-09-06T12:42:38.134Z"),array: [],obj: {_id: 10571,str: "compressing payment Avon",num: 48013,date: new Date("2018-09-06T16:10:01.075Z"),array: [],obj: {_id: 10572,str: "primary Home Loan Account",num: 52746,array: [],obj: {_id: 10573,str: "Handcrafted Metal Bacon Michigan cross-platform",array: [30201,"bluetooth"],obj: {}}}}}});
    },

    function(coll) {
        return coll.insert({_id: 10574,str: "Checking Account Colorado",num: 5005,date: new Date("2018-09-06T14:12:40.942Z"),array: [new Date("2018-09-06T07:31:31.152Z"),9555,new Date("2018-09-06T00:12:08.851Z"),[],"override Outdoors",new Date("2018-09-06T13:30:41.512Z"),91444,new Date("2018-09-06T07:23:22.039Z"),"Papua New Guinea",{_id: 10575,num: 25894,array: [],obj: {}},58554,96159,"Savings Account","parsing Industrial",{_id: 10576,str: "disintermediate Avon Borders",num: 87771,date: new Date("2018-09-06T18:29:49.209Z"),array: [new Date("2018-09-06T01:07:21.186Z")],obj: {_id: 10577,str: "Codes specifically reserved for testing purposes",num: 13624,date: new Date("2018-09-05T21:44:11.291Z"),array: [[]],obj: {_id: 10578,str: "e-enable redundant Computers",num: 66276,date: new Date("2018-09-06T11:20:45.564Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 10579,str: "Fort best-of-breed application",num: 31615,obj: {_id: 10580,str: "copying Latvian Lats invoice",num: 47711,date: new Date("2018-09-06T01:44:08.316Z"),array: [],obj: {_id: 10581,str: "hacking",num: 32527,date: new Date("2018-09-05T21:08:34.654Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10582,str: "JSON channels Investor",num: 65706,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10583,str: "generate Stream",num: 2983,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10584,str: "magenta Computers",num: 25171,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10585,str: "gold Dynamic",num: 25582,date: new Date("2018-09-06T07:13:37.146Z"),array: ["moderator wireless Group",new Date("2018-09-06T00:20:14.445Z"),new Date("2018-09-06T13:27:34.387Z"),"Movies bypass Ball",65515,[29460,new Date("2018-09-06T06:36:19.037Z"),new Date("2018-09-06T04:34:43.266Z")],{_id: 10586,str: "copying AI",num: 16459,date: new Date("2018-09-06T05:54:30.798Z"),array: [],obj: {_id: 10587,str: "Balanced magenta programming",num: 90257,date: new Date("2018-09-06T13:07:36.987Z"),obj: {}}},91704,new Date("2018-09-06T01:24:04.555Z"),"magenta",{_id: 10588,str: "reintermediate",date: new Date("2018-09-06T00:16:25.357Z"),array: [],obj: {}},[],new Date("2018-09-06T03:09:47.638Z"),"web-readiness"],obj: {_id: 10589,num: 38529}});
    },

    function(coll) {
        return coll.insert({_id: 10590,str: "Florida Auto Loan Account Applications",num: 16399,date: new Date("2018-09-06T15:58:18.679Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10591,str: "Usability Palladium",num: 470,date: new Date("2018-09-06T02:47:19.642Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10592,str: "best-of-breed payment Awesome Cotton Hat",num: 23581,date: new Date("2018-09-06T16:11:51.798Z"),array: [],obj: {_id: 10593,str: "vortals connecting",num: 31416,date: new Date("2018-09-06T19:35:05.294Z"),array: [new Date("2018-09-05T23:47:47.579Z"),"Buckinghamshire transmitting",new Date("2018-09-06T13:58:51.601Z"),71346,"Small Bedfordshire",8647,["Road Portugal Belarussian Ruble",20084,30491,new Date("2018-09-06T01:48:46.830Z")],[],{_id: 10594,str: "Incredible",num: 30802,date: new Date("2018-09-06T15:30:32.337Z"),obj: {}}],obj: {_id: 10595,array: [35998,"Savings Account"],obj: {_id: 10596,num: 69870,date: new Date("2018-09-06T06:23:12.927Z"),array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 10597,num: 63683,array: [69218,new Date("2018-09-05T23:26:18.745Z"),{_id: 10598,str: "Oklahoma Small Cotton Keyboard",num: 33588,date: new Date("2018-09-06T19:52:28.490Z"),obj: {_id: 10599,str: "viral Reunion Credit Card Account",date: new Date("2018-09-06T17:08:53.568Z"),obj: {}}},"Ferry",21162,["Concrete Future",new Date("2018-09-06T02:19:21.375Z")],[],{_id: 10600,num: 95261,date: new Date("2018-09-06T07:02:16.677Z"),array: ["Reunion monitor Money Market Account"],obj: {_id: 10601,str: "Iceland Krona Auto Loan Account aggregate",date: new Date("2018-09-06T03:13:15.363Z"),array: [],obj: {}}},32839,new Date("2018-09-06T12:11:22.403Z"),"ADP","optical"]});
    },

    function(coll) {
        return coll.insert({_id: 10602,str: "communities vortals Dynamic",num: 95732,date: new Date("2018-09-06T15:41:52.464Z"),array: [new Date("2018-09-06T18:00:14.216Z"),"leverage haptic Money Market Account","Tuvalu",21042,new Date("2018-09-06T14:29:36.314Z"),"Quality teal SAS",{_id: 10603,str: "deposit Buckinghamshire Small Soft Chips",date: new Date("2018-09-06T02:35:46.828Z"),array: [],obj: {}},{_id: 10604,num: 66946,date: new Date("2018-09-06T13:29:24.119Z"),array: [],obj: {_id: 10605,num: 46727,date: new Date("2018-09-06T00:51:15.365Z"),array: [[]],obj: {_id: 10606,str: "Indiana compressing",array: [new Date("2018-09-06T14:08:41.297Z")]}}},4505,"mesh withdrawal generating",new Date("2018-09-06T13:47:25.513Z"),{_id: 10607,str: "implement yellow Italy",date: new Date("2018-09-05T20:45:10.912Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 10608,str: "connecting drive",num: 18991,date: new Date("2018-09-06T19:49:33.814Z"),obj: {_id: 10609,str: "Fish",num: 10194,date: new Date("2018-09-06T16:06:43.086Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10610,num: 49834,date: new Date("2018-09-06T00:51:03.096Z"),array: [],obj: {_id: 10611,str: "expedite",num: 90193,date: new Date("2018-09-06T16:22:34.006Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10612,str: "indexing Usability",num: 65873,date: new Date("2018-09-06T01:43:25.503Z"),array: [],obj: {_id: 10613,str: "Courts models Granite",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10614,str: "Yen Incredible Cotton Chair Infrastructure",num: 53986,date: new Date("2018-09-06T13:22:09.310Z"),array: [],obj: {_id: 10615,str: "silver Agent",num: 68729,date: new Date("2018-09-06T15:15:21.448Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10616,str: "Implementation blue",num: 52018,date: new Date("2018-09-06T07:29:37.526Z"),obj: {_id: 10617,str: "blue",num: 41757,date: new Date("2018-09-06T06:54:53.104Z"),array: [91428,new Date("2018-09-06T03:55:57.849Z"),"object-oriented Health","Nicaragua Automotive",{_id: 10618,num: 21689,date: new Date("2018-09-06T11:49:15.435Z"),array: [[],new Date("2018-09-06T15:23:15.508Z"),36456,new Date("2018-09-06T05:38:25.097Z")],obj: {_id: 10619,str: "real-time Home Loan Account",array: [{_id: 10620,str: "Computers streamline THX",num: 96703,date: new Date("2018-09-05T22:08:11.621Z"),obj: {}}],obj: {_id: 10621,date: new Date("2018-09-06T18:19:36.458Z"),obj: {}}}},{_id: 10622,str: "card",array: ["maximized Consultant",1053]},[],new Date("2018-09-06T03:04:28.558Z"),46841,93278,new Date("2018-09-06T07:56:48.824Z"),"AGP"]}});
    },

    function(coll) {
        return coll.insert({_id: 10623,str: "Bridge strategize tan",num: 42315,date: new Date("2018-09-06T19:36:50.568Z"),array: ["Tools Circle",new Date("2018-09-06T19:13:08.742Z"),new Date("2018-09-06T06:04:19.977Z"),"withdrawal expedite","Cambridgeshire",80500,new Date("2018-09-06T19:16:20.988Z"),"Seychelles Rupee Tasty",{_id: 10624,str: "Ergonomic",num: 89989,date: new Date("2018-09-06T09:13:51.198Z"),obj: {_id: 10625,num: 35468,date: new Date("2018-09-06T14:25:31.419Z"),array: [],obj: {}}},{_id: 10626,date: new Date("2018-09-06T02:41:50.174Z"),array: [],obj: {}},new Date("2018-09-05T21:29:11.367Z"),[new Date("2018-09-06T08:02:04.865Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 10627,str: "payment",num: 77401,date: new Date("2018-09-06T08:48:55.376Z"),array: [],obj: {_id: 10628,str: "Automotive",array: [98666,70667,new Date("2018-09-05T20:01:21.189Z"),67584,{_id: 10629,str: "Distributed HTTP redefine",date: new Date("2018-09-06T16:28:39.313Z"),obj: {_id: 10630,str: "supply-chains",num: 69242,date: new Date("2018-09-06T04:47:25.735Z"),obj: {}}},new Date("2018-09-06T01:36:09.411Z"),"Executive Convertible Marks",new Date("2018-09-05T20:12:47.070Z"),[],"Horizontal Home Loan Account Facilitator",[],"virtual SSL",96277]}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $toString: { $map: {input: [],as: 'rosendo',in: { $indexOfArray: [{ $concatArrays: [] },{ $concat: ['$obj.str'] },0,5] }} } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.obj.str'],in: { $floor: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "quantifying",v: new Date("2018-09-06T19:53:42.583Z")},{k: "Re-engineered synergistic engage",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.num',2235,'$obj.obj.obj.num',66868],[{ $concat: ["Cambridgeshire Checking Account"] },{ $toUpper: { $trim: { input: '$obj.obj.obj.obj.str' } } },"JBOD",'$str',{ $substrCP: ['$str',19,18] }],[],[55868],['$num']]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T11:20:34.811Z"),format: "%G-%H-%m-%m-%m-%M",onNull: { $toLower: '$obj.obj.obj.obj.str' }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[86908,'$obj.obj.num','$obj.obj.num'],[],[],[{ $substrCP: ['$obj.str',2,3] }],[],[]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "process improvement payment haptic",chars: "Data bleeding-edge reinvent"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["synthesize",15,4] }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.num','$obj.num',29060],as: 'waino',cond: { $gt: [{ $arrayElemAt: [[],'$$waino'] },{ $trim: {input: '$str',chars: "New York Wooden indigo"} }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $isoDayOfWeek: { $isoWeekYear: { $toDate: { $arrayToObject: [[[],['$obj.obj.obj.str'],["North Dakota Creek Andorra"],[]]] } } } },format: "%m-%M-%w-%G-%H-%H-%H-%Z-%Z-%S-%M-%S",timezone: "Europe/Belfast"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Direct asymmetric",v: { $add: [] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "fuchsia Gloves Function-based",v: "Missouri Grocery recontextualize"}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Palladium deposit Pizza",{ $substrCP: [{ $concat: ['$obj.obj.str'] },10,16] },{ $dateToString: {date: '$obj.date',format: "%U-%u-%U-%S-%U-%M-%w-%u-%S",timezone: "America/Atikokan"} },'$obj.str'],[25373,80779],["partnerships","auxiliary Markets Intelligent"]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $toUpper: "Keys" }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Function-based"]] }, _id: 0}}],

        [{$project: {a: { $year: { $hour: { $isoDayOfWeek: { $second: { $isoDayOfWeek: { $isoWeekYear: { $dateToString: { date: { $isoWeek: { $millesecond: { $week: { $dateToParts: {date: { $dayOfMonth: { $minute: { $isoWeek: { $dateFromParts: {isoWeekYear: { $divide: [{ $exp: 60092 },52404] },isoWeek: { $ln: '$obj.obj.obj.obj.num' },isoDayOfWeek: { $mod: ['$obj.obj.num','$obj.obj.obj.obj.num'] },hour: { $sqrt: 63006 },second: { $pow: ['$num',89976] }} } } } },timezone: "America/Montevideo",iso8601: true} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $range: [15,12,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $dateToString: {date: new Date("2018-09-06T05:24:31.195Z"),timezone: "US/East-Indiana",onNull: '$obj.obj.str'} }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $minute: { $dateFromString: {dateString: "2018-09-06T14:24:47.818Z",onNull: { $substrCP: ["Manager Table",16,3] }} } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$num'],['$obj.obj.obj.obj.str',"solid state"],['$obj.obj.obj.obj.num',69478],['$obj.obj.obj.obj.str',{ $rtrim: {input: "Garden hacking logistical",chars: '$obj.obj.obj.obj.str'} }]],defaults: [{obj: {},array: []}]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Practical Plastic Chicken","Credit Card Account asymmetric"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $pow: ['$$this',75513] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["SQL",'$obj.obj.obj.str'],86720] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],49404] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],[12472],[false],['$obj.str']] } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'katheryn',cond: true} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Dynamic Pizza Data" } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Executive" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[29727,'$obj.obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],75152] } }, _id: 0}}],

        [{$project: {a: { $range: [15,3,10] }, _id: 0}}],

        [{$project: {a: { $toString: { $concatArrays: [[false,2483],['$num','$obj.obj.obj.num'],['$obj.obj.obj.obj.num',true]] } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T04:06:07.777Z"),timezone: "Canada/Saskatchewan",onNull: '$obj.obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.str'],[],['$obj.obj.num',42752]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeekYear: { $isoDayOfWeek: { $second: { $toDate: { $objectToArray: '$obj.obj.obj.obj' } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T00:28:50.535Z",timezone: "Asia/Kathmandu",onNull: { $arrayToObject: [[['$obj.obj.obj.obj.num'],[],['$obj.obj.obj.str'],[{ $ltrim: {input: { $toLower: "Buckinghamshire Architect" },chars: { $substrBytes: ["incentivize User-friendly",0,0] }} },'$obj.obj.obj.str'],[]]] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%U-%Z-%j-%Y-%m-%w-%w-%M-%m-%u",timezone: "America/Eirunepe"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',"Plastic Martinique"],{ $subtract: [85626,'$obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $dateToString: { date: { $dayOfWeek: { $dateFromParts: {year: { $indexOfArray: [{ $map: {input: ["indigo Ramp",'$obj.str',"Avon AGP"],as: 'jeffery',in: { $floor: 77045 }} },{ $arrayElemAt: [[28870],'$obj.num'] },11] },month: '$obj.obj.obj.num',minute: { $exp: { $ln: 94713 } },second: { $log10: 74266 },millisecond: { $ceil: '$num' },timezone: "Australia/Darwin"} } } } },0,15] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'alene',cond: { $lt: [{ $arrayElemAt: [['$obj.obj.num'],10771] },{ $reverseArray: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["quantify metrics solution-oriented",'$obj.obj.obj.str',"card"],[{ $ltrim: {input: { $substrCP: ['$obj.str',3,20] },chars: "innovate UAE Dirham"} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "back-end Texas Cloned",v: true}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $week: { $dateToParts: { date: { $year: { $dayOfWeek: { $dateFromParts: {year: { $abs: 33230 },second: { $add: [] },timezone: "America/Winnipeg"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "protocol back up Sports" } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfMonth: { $second: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T19:12:35.169Z",format: "%%-%V-%H-%%-%S-%H-%H-%M",timezone: "Pacific/Marquesas",onError: { $reverseArray: [[]] }} } } } },timezone: "America/Argentina/Rio_Gallegos",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromParts: {isoWeekYear: { $add: [] },isoDayOfWeek: { $sqrt: '$obj.obj.obj.num' },hour: 548,minute: { $add: [95109,'$obj.obj.obj.num'] },second: { $sqrt: { $floor: '$num' } }} } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "fuchsia Bedfordshire utilisation",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Developer",v: true},{k: "Chips Tasty Metal Chicken Supervisor",v: '$str'},{k: "deposit ivory",v: new Date("2018-09-06T10:07:44.344Z")}]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T18:54:40.794Z",format: "%G-%j-%z-%u-%G-%Y-%z"} } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["plum",'$str'],in: { $mod: ['$$this','$$this'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[8454],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrCP: ['$obj.obj.str',11,16] }],[],[47358],["Checking Account Saudi Riyal","relationships Republic of Korea"]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["pink redundant"]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[{ $rtrim: {input: '$str',chars: '$obj.str'} },"Cayman Islands Dollar parse Agent"],[],[],["adapter Pre-emptive","Dynamic unleash"]] } }, _id: 0}}],

        [{$project: {a: { $toLower: "deposit Officer Compatible" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $rtrim: { input: { $concat: [] } } }],["Checking Account"],["Intelligent SSL","Saint Helena Pound Producer",'$obj.obj.obj.str'],['$obj.obj.obj.obj.num',64712],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$str','$obj.obj.obj.str'],["models pixel"],["Tunnel systematic platforms"]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $toDate: { $substr: ['$obj.obj.obj.str',12,0] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$date','$obj.obj.obj.obj.num',{ $millesecond: { $minute: { $month: { $month: { $dateFromString: {dateString: "2018-09-06T01:30:26.992Z",format: "%m-%j-%%-%w-%z-%L-%Z-%L-%j",onError: { $arrayToObject: [[{k: "bandwidth Circles Concrete",v: true},{k: "input Shirt",v: '$obj.obj.obj.obj.str'}]] }} } } } } }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $week: { $dateToString: {date: { $dayOfWeek: { $second: { $dayOfWeek: { $dayOfWeek: { $dayOfYear: { $dateFromParts: {year: { $exp: 46772 },minute: { $cmp: [{ $range: [13,10,8] },{ $minute: { $dayOfMonth: { $week: { $isoWeekYear: { $toDate: { $arrayToObject: [[{k: "schemas 6th generation",v: { $dateToParts: { date: { $second: { $isoWeek: { $isoWeek: { $week: { $toDate: { $trim: { input: { $substr: ['$obj.obj.obj.str',15,6] } } } } } } } } } }}]] } } } } } }] },second: { $ceil: '$obj.num' },millisecond: { $pow: [39598,35867] },timezone: "Asia/Ust-Nera"} } } } } } },format: "%H-%L-%d-%U-%m-%S-%H-%S-%S-%H"} } } } }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromString: {dateString: "2018-09-05T22:21:59.632Z",onError: { $arrayElemAt: [[],66523] }} } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[75465,'$obj.obj.obj.num'],[{ $abs: 19132 },'$obj.obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [["Open-architected"],['$obj.obj.obj.obj.str'],[],[75661]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num',27331],['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [13,17,5] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $toDate: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.obj.obj.obj.num'] } },timezone: "America/Creston"} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Forward" } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $year: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T03:16:11.632Z",format: "%w-%V-%L-%m-%L-%%-%z-%U-%m-%U",onError: { $arrayToObject: [[["Investor Zloty Dynamic"]]] },onNull: { $arrayElemAt: [[],13865] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["optical productize"],{ $size: [[]] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Utah",{ $toUpper: '$obj.obj.obj.obj.str' }],'$num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $toLower: { $concat: ['$obj.obj.obj.obj.str'] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Paradigm"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],40243] } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $isArray: [{ $week: { $isoWeek: { $second: { $hour: { $dateToParts: {date: { $isoWeekYear: { $dayOfMonth: { $dayOfYear: { $week: { $dayOfWeek: { $millesecond: { $year: { $dayOfYear: { $dateToParts: {date: '$$this',timezone: "Israel",iso8601: false} } } } } } } } } },timezone: "Africa/Niamey",iso8601: true} } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handcrafted Cotton Car Bike paradigms",v: { $substr: ['$obj.str',4,14] }},{k: "port Awesome Cotton Tuna AI",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $indexOfArray: [{ $map: {input: [],in: { $subtract: ['$obj.obj.num',89981] }} },{ $concatArrays: [[{ $toLower: "FTP" },{ $toUpper: "Buckinghamshire Idaho" }],['$obj.obj.obj.obj.str',"Russian Ruble Kroon convergence",{ $trim: { input: '$obj.obj.str' } }],[87074,'$num','$obj.obj.obj.obj.num']] }] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: "aggregate" } },'$obj.obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromString: {dateString: "2018-09-06T00:44:45.842Z",onNull: "payment"} } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T19:38:13.224Z",format: "%L-%H-%G-%Y-%U",onNull: { $dateToString: {date: '$obj.obj.date',format: "%j-%H-%M-%S-%S-%H-%L-%%-%Y",timezone: "Iran"} }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'jade',in: { $multiply: [61823,31458] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $trim: {input: "Books Generic Rubber Fish Sports",chars: '$str'} },"Representative Outdoors"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Home Loan Account calculate"],{ $exp: '$num' }] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str'],in: { $mod: ['$$this',{ $add: [] }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ["standardization"],in: { $log10: '$num' }} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrCP: ["Jamaica Tasty Cotton Towels Salad",9,20] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["violet networks"],[],[{ $rtrim: {input: '$obj.str',chars: { $substrCP: [{ $concat: ["lavender"] },0,6] }} }],['$obj.obj.obj.date']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],82377] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $substrCP: ["Multi-channelled proactive",6,8] }],97483] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Distributed Cambridgeshire"],['$obj.obj.obj.str','$str'],['$obj.str','$obj.obj.obj.obj.str']],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "haptic Public-key",v: 60594},{k: "Palestinian Territory Orchestrator zero defect",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $year: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T16:33:02.692Z",timezone: "Pacific/Saipan",onError: { $toString: { $arrayElemAt: [[{ $rtrim: {input: '$obj.str',chars: { $ltrim: { input: '$obj.obj.obj.str' } }} },"impactful Facilitator",'$obj.str'],'$obj.obj.num'] } }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["COM Concrete Minnesota",{ $rtrim: {input: '$obj.str',chars: { $toLower: '$obj.obj.str' }} }],[],['$obj.obj.str'],[{ $substr: ["Investor Stravenue open system",4,2] },"National Cambridgeshire"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $mod: [64936,'$num'] }] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Qatari Rial Gorgeous",v: { $size: [['$obj.obj.obj.str','$obj.str']] }},{k: "Auto Loan Account",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $rtrim: {input: "virtual alarm",chars: '$obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["Group"],[],[4883,98677,'$obj.obj.obj.obj.num'],['$num','$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $toLower: "bypassing Greenland Fresh" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $year: { $minute: { $dateFromString: {dateString: "2018-09-06T10:31:56.028Z",timezone: "Etc/GMT0",onNull: { $zip: {inputs: [[],['$obj.obj.obj.str'],["Hungary Buckinghamshire Electronics",'$str',{ $toString: { $arrayElemAt: [[],44154] } }],['$obj.obj.num','$obj.obj.obj.obj.num']],useLongestLength: true,defaults: [82978,false,/Rial Omani/]} }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.num',3355],cond: { $ne: [{ $arrayToObject: [[{k: "Unbranded",v: '$obj.obj.obj.obj.num'},{k: "exploit",v: '$obj.obj.obj.obj.date'}]] },{ $arrayElemAt: [[52285,'$obj.obj.obj.num',{ $log: [{ $subtract: [91567,'$$this'] },61495] }],'$$this'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $rtrim: {input: { $substr: ["Camp Rubber Guarani",13,5] },chars: "Soft Mobility orchestrate"} }],["teal Luxembourg",{ $ltrim: { input: { $ltrim: { input: '$obj.obj.str' } } } }],['$obj.obj.str','$str',"rich"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Uzbekistan Sum Enhanced reboot",v: "emulation Generic"},{k: "Fantastic Rubber Shoes",v: 86145}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.str',1,4] },"Fresh",{ $toString: { $dateFromString: {dateString: "2018-09-06T18:49:12.725Z",timezone: "America/North_Dakota/Center",onNull: { $toString: { $substr: ['$obj.obj.str',19,2] } }} } }],{ $multiply: ['$obj.obj.obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',79203],[],['$obj.obj.str'],[21737,'$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "payment Rubber Tugrik",v: '$obj.obj.obj.str'},{k: "Arizona Lakes",v: '$date'}]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str','$obj.obj.str','$obj.obj.obj.obj.str'],80600] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.obj.str',10,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "ability Dalasi protocol",v: 67811}]] }, _id: 0}}],

        [{$project: {a: { $range: [7,10] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[72607,'$num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Cross-group Designer wireless","XML"],76856] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Public-key Mall Security",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $rtrim: {input: "Awesome Frozen",chars: "bandwidth Tunnel Swiss Franc"} }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[81871],[]]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $add: ['$obj.num','$num'] },month: { $subtract: ['$obj.obj.obj.num',70862] },hour: 77971,second: { $ln: { $exp: 65042 } },millisecond: { $size: [['$str']] },timezone: "Indian/Mayotte"} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $toUpper: '$obj.obj.str' } } }, _id: 0}}],

        [{$project: {a: { $second: { $hour: { $week: { $toDate: { $substr: [{ $toLower: '$obj.str' },6,6] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "deposit" },"plug-and-play"],65651] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $millesecond: { $month: { $minute: { $dateFromParts: {isoWeekYear: { $cmp: [{ $zip: {inputs: [[],[{ $concat: ['$obj.obj.str'] }],[],[]],useLongestLength: false} },{ $arrayToObject: [[[true],[],[]]] }] },millisecond: { $log: ['$num','$obj.num'] },timezone: "Universal"} } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toLower: "benchmark" },7,4] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Beauty red functionalities",v: "Central"}]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-05T20:01:24.745Z",timezone: "Etc/GMT-1",onError: { $dateToString: {date: '$obj.obj.obj.date',format: "%G-%w-%u-%V-%u-%L-%G-%d-%V-%z",timezone: "GMT+0"} },onNull: '$str'} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[31902,'$obj.obj.obj.num'],51507] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.obj.str',8,7] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeek: { $dayOfMonth: { $month: { $minute: { $toDate: { $arrayElemAt: [[18377],'$obj.obj.obj.obj.num'] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: '$obj.date' }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str',{ $substrBytes: [{ $substr: ["coherent Gorgeous Cotton Bike Jewelery",12,13] },16,16] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "software Profit-focused proactive",v: true},{k: "Freeway",v: new Date("2018-09-06T09:19:07.898Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "orchid Brand Car",v: true},{k: "Small Granite Chair",v: '$num'},{k: "granular Licensed Steel Tuna",v: { $minute: { $dateToParts: { date: { $isoDayOfWeek: { $second: { $isoDayOfWeek: { $dateToParts: {date: { $dateToString: {date: new Date("2018-09-06T18:07:24.522Z"),timezone: "America/Santiago",onNull: { $dayOfWeek: { $isoWeekYear: { $dayOfWeek: { $dayOfYear: { $dateFromParts: {isoWeekYear: { $pow: [11670,{ $mod: [2568,13661] }] },minute: { $multiply: ['$num'] }} } } } } }} },timezone: "Etc/Zulu",iso8601: true} } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T08:38:49.358Z"),format: "%H-%j-%m-%m-%G-%%-%w",timezone: "Asia/Tokyo"} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $dateToParts: { date: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T00:51:32.489Z",timezone: "America/Creston",onError: { $toUpper: '$obj.obj.obj.str' },onNull: { $arrayElemAt: [[{ $rtrim: { input: '$obj.obj.obj.obj.str' } }],'$num'] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeek: { $toDate: { $arrayElemAt: [[],{ $exp: '$obj.obj.obj.obj.num' }] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Licensed Granite Shoes Chicken Nauru",v: { $substr: ['$obj.obj.obj.obj.str',17,12] }},{k: "Unbranded Concrete Table Infrastructure New Mexico",v: false},{k: "payment",v: "Officer Chips"}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $rtrim: {input: { $toString: { $isoWeek: { $second: { $dayOfWeek: { $millesecond: { $dateFromString: {dateString: "2018-09-06T15:36:23.102Z",format: "%U-%Y-%w-%H-%u-%S-%V",timezone: "Asia/Macao",onError: { $arrayElemAt: [[],94353] }} } } } } } },chars: "Grocery Soft Avon"} },'$str'],cond: { $and: [53079,'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[79782,'$obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],10411] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Baby",v: false},{k: "Beauty copy",v: { $toLower: '$obj.str' }},{k: "Buckinghamshire",v: 8173},{k: "Union Ergonomic global",v: "functionalities Refined e-commerce"}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["iterate SQL feed",13,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[false,new Date("2018-09-05T22:42:51.135Z"),'$obj.obj.obj.str'],80868] }, _id: 0}}],

        [{$project: {a: { $toLower: "Producer Brand Kids" }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[19909,6035],['$num',88641,{ $add: [] }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $mod: [25366,'$obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [11,5] }, _id: 0}}],

        [{$project: {a: { $toString: { $toDate: { $reverseArray: [['$obj.obj.obj.obj.str']] } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Granite"],[84500],['$obj.obj.obj.str',"Avon",'$obj.str']],defaults: [31877,/Handcrafted/]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Connecticut Fresh Paradigm",v: true}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',"Brand neural"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $ltrim: {input: '$obj.obj.str',chars: '$obj.str'} },{ $rtrim: { input: "Oklahoma" } }],as: 'fanny',cond: { $isArray: [{ $arrayElemAt: [[25225],'$obj.obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: '$str' } }],19466] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $rtrim: { input: "Bedfordshire" } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num'],80070] }, _id: 0}}],

        [{$project: {a: { $hour: { $minute: { $week: { $dateToParts: {date: { $millesecond: { $dateFromParts: {year: { $ceil: '$obj.obj.obj.num' },day: { $ceil: 50884 },hour: { $multiply: [] },minute: { $size: [[{ $substr: ['$obj.obj.str',1,4] }]] },millisecond: { $log: [{ $exp: '$obj.obj.obj.obj.num' },44793] },timezone: "America/Porto_Velho"} } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToParts: { date: { $dayOfYear: { $dateFromParts: {isoWeekYear: '$obj.obj.num',isoWeek: { $mod: [45356,'$obj.obj.num'] },isoDayOfWeek: { $add: [] },hour: { $pow: [90596,{ $trunc: '$num' }] },millisecond: { $ln: 96225 }} } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $month: { $millesecond: { $year: { $dayOfYear: { $dateToString: {date: new Date("2018-09-06T11:21:58.782Z"),timezone: "Europe/Andorra",onNull: "fuchsia"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Wall neural",v: false},{k: "Music haptic invoice",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Senior Avon",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $year: { $dateToParts: { date: { $dateToString: {date: new Date("2018-09-06T14:10:30.576Z"),timezone: "Etc/Greenwich"} } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $dateToString: {date: new Date("2018-09-05T20:36:07.818Z"),format: "%Z-%L-%z-%L",timezone: "Pacific/Port_Moresby"} },chars: "Money Market Account Planner"} }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromString: {dateString: "2018-09-06T18:46:34.466Z",format: "%S-%Y-%j-%H-%V",onError: { $arrayElemAt: [["Loop",{ $ltrim: {input: '$obj.obj.str',chars: { $concat: ['$str','$obj.obj.str'] }} }],{ $mod: [75011,67413] }] },onNull: { $arrayToObject: [[[],[{ $substr: [{ $toLower: "moratorium" },13,6] },{ $dateToString: {date: { $hour: { $isoWeek: { $minute: { $dateFromString: {dateString: "2018-09-05T21:03:03.083Z",timezone: "GB-Eire",onNull: '$obj.obj.obj.str'} } } } },format: "%m-%u-%U-%S-%L-%w-%U-%U-%Y",timezone: "America/Argentina/San_Luis",onNull: { $map: {input: ['$obj.num','$obj.obj.obj.obj.num'],as: 'garfield',in: { $ln: 10546 }} }} }],["Unbranded Frozen Sausages Alabama"]]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',"matrices"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Persistent driver",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Ball Fresh"],[{ $toLower: { $toLower: "vortals" } }]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num'],['$str'],['$obj.obj.str',{ $substrCP: [{ $trim: {input: "Steel",chars: "archive"} },1,20] },{ $rtrim: { input: "Practical" } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "RAM",v: 32774},{k: "Garden envisioneer Architect",v: false},{k: "deposit",v: { $isoWeek: { $dateFromParts: {isoWeekYear: { $log10: '$obj.obj.obj.num' },isoWeek: { $abs: '$obj.obj.obj.num' },isoDayOfWeek: { $mod: [10461,'$obj.num'] },hour: { $log: [2678,{ $divide: ['$num',{ $subtract: ['$num','$obj.obj.obj.obj.num'] }] }] },second: { $indexOfArray: [{ $filter: {input: [],cond: { $gt: [{ $toUpper: { $substr: ["driver",3,16] } },{ $arrayToObject: [[{k: "engineer Fresh",v: new Date("2018-09-06T12:10:57.049Z")}]] }] }} },{ $dateFromParts: {year: { $log10: 41821 },minute: { $divide: [5194,5565] }} },7] },millisecond: { $pow: ['$obj.obj.obj.num','$obj.obj.obj.obj.num'] },timezone: "Asia/Saigon"} } }}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $millesecond: { $hour: { $dayOfYear: { $dateFromParts: {isoWeekYear: { $mod: [8320,'$obj.num'] },isoDayOfWeek: { $log: ['$num',41778] },hour: { $log10: 6213 },second: { $size: [[]] },timezone: "Asia/Dili"} } } } } }, _id: 0}}],

        [{$project: {a: { $month: { $isoDayOfWeek: { $hour: '$obj.obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: [{ $substrCP: ['$obj.obj.obj.obj.str',12,13] },9,15] },{ $substrBytes: ["Associate Automated Awesome",20,5] }],[],[]]] }, _id: 0}}],

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
