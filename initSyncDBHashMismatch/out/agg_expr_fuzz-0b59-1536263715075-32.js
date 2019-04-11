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
        return coll.insert({_id: 19979,str: "online Marketing",num: 86138,date: new Date("2018-09-05T22:54:30.034Z"),array: [new Date("2018-09-06T02:45:09.806Z"),"National asymmetric Automotive",70018,6928,"Corporate tan Checking Account",new Date("2018-09-06T13:47:44.187Z"),[],[],"invoice exploit",[76640,{_id: 19980,str: "next-generation Checking Account Avon",num: 94301,date: new Date("2018-09-06T16:02:32.515Z"),array: [new Date("2018-09-06T17:54:00.316Z"),{_id: 19981,str: "Applications",date: new Date("2018-09-06T08:57:49.267Z"),obj: {}}],obj: {}}],"Movies Metrics",45684,new Date("2018-09-06T13:49:59.651Z")]});
    },

    function(coll) {
        return coll.insert({_id: 19982,str: "scalable program",num: 1250,date: new Date("2018-09-06T09:43:00.592Z"),array: [],obj: {_id: 19983,str: "Steel gold deploy",num: 94191,date: new Date("2018-09-06T18:23:18.844Z"),array: ["proactive Egyptian Pound Analyst",new Date("2018-09-06T13:05:39.654Z"),new Date("2018-09-06T02:32:38.892Z"),"Fantastic Granite Soap bluetooth Sausages",{_id: 19984,str: "Customer",num: 17724,date: new Date("2018-09-06T05:10:23.305Z")},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 19985,str: "Compatible",num: 21541,date: new Date("2018-09-06T07:21:40.374Z"),array: [],obj: {_id: 19986,str: "Licensed Monaco",num: 87601,array: [],obj: {_id: 19987,str: "Fish Intelligent Wooden Mouse",date: new Date("2018-09-06T10:40:04.691Z"),array: [["multi-byte moderator",11279,new Date("2018-09-06T02:11:34.074Z"),new Date("2018-09-06T13:26:00.547Z"),60944],"systematic hacking",30586,{_id: 19988,num: 87685,date: new Date("2018-09-05T21:05:06.841Z"),array: []},"deposit",["1080p ubiquitous",{_id: 19989,num: 86227,date: new Date("2018-09-06T07:43:26.237Z"),obj: {}},new Date("2018-09-06T03:35:04.624Z")],new Date("2018-09-05T23:18:18.366Z"),"Factors eco-centric Saint Kitts and Nevis"]}}});
    },

    function(coll) {
        return coll.insert({_id: 19990,str: "Central",date: new Date("2018-09-05T21:55:55.719Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19991,str: "mint green Virginia",array: ["azure Bermudian Dollar (customarily known as Bermuda Dollar)",new Date("2018-09-06T07:14:53.030Z"),"circuit",35126,new Date("2018-09-06T04:40:11.840Z"),new Date("2018-09-06T11:51:27.720Z"),"Ouguiya",56813],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19992,str: "attitude-oriented Movies",num: 98194,date: new Date("2018-09-06T17:41:48.806Z"),array: [[],"calculate USB violet",14084,96440,new Date("2018-09-06T15:25:08.752Z"),"Borders seize","Exclusive Gorgeous",55092,new Date("2018-09-06T18:32:36.502Z"),new Date("2018-09-06T11:33:32.478Z"),{_id: 19993,num: 9806,date: new Date("2018-09-06T00:11:59.825Z"),array: [new Date("2018-09-06T12:56:25.223Z"),new Date("2018-09-06T19:53:24.156Z")],obj: {}},25745,new Date("2018-09-06T16:45:31.429Z"),{_id: 19994,str: "HTTP Bacon",num: 32783,date: new Date("2018-09-05T22:52:09.675Z"),obj: {}}],obj: {_id: 19995,str: "bypassing invoice feed",date: new Date("2018-09-06T15:40:03.474Z"),array: [],obj: {_id: 19996,str: "Walks Borders user-centric",num: 45037,array: [{_id: 19997,str: "supply-chains",num: 10995},[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19998,num: 72706,obj: {_id: 19999,str: "Manat Pizza",num: 91047,date: new Date("2018-09-06T17:10:16.928Z"),array: [[],new Date("2018-09-06T00:44:02.609Z"),"South Dakota program",new Date("2018-09-05T20:21:48.245Z"),25507,new Date("2018-09-05T21:01:23.161Z"),"Poland hack markets",[70566,5702,{_id: 20000,str: "connect Cross-group Consultant",date: new Date("2018-09-05T20:22:05.001Z"),array: [],obj: {}}],{_id: 20001,num: 77823,date: new Date("2018-09-05T20:32:58.635Z"),obj: {}},[],"Avon","Liaison Synergized"],obj: {_id: 20002,str: "compelling",num: 5045,date: new Date("2018-09-06T02:20:39.586Z"),array: [24683,new Date("2018-09-06T14:44:53.435Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 20003,str: "Zambian Kwacha",num: 95703,date: new Date("2018-09-06T17:40:34.842Z"),array: [84337,new Date("2018-09-06T09:11:17.617Z"),39579,[],{_id: 20004,str: "withdrawal",obj: {}},"hacking South Carolina",42996,new Date("2018-09-06T01:01:14.189Z"),new Date("2018-09-06T16:42:51.783Z"),"e-services rich transmit","online invoice",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20005,str: "Cocos (Keeling) Islands Awesome",num: 59163,date: new Date("2018-09-06T10:28:19.018Z"),array: [44931,63872,new Date("2018-09-06T17:54:45.850Z"),"client-driven Organized Sleek Frozen Car","Handcrafted Granite Shirt",new Date("2018-09-06T12:40:22.520Z"),[],{_id: 20006,date: new Date("2018-09-06T14:06:18.039Z"),array: []},{_id: 20007,str: "back-end repurpose Bedfordshire",num: 97014,date: new Date("2018-09-06T17:41:01.085Z"),array: [67937],obj: {_id: 20008,num: 51558,array: [],obj: {}}},"Vermont Samoa","calculate magenta",new Date("2018-09-06T15:40:36.102Z"),26219,new Date("2018-09-06T17:32:28.582Z"),new Date("2018-09-06T15:50:37.105Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20009,str: "Home Loan Account",date: new Date("2018-09-06T00:06:45.891Z"),array: [new Date("2018-09-06T15:44:27.519Z"),79673,"Health Visionary",new Date("2018-09-06T17:25:42.125Z"),{_id: 20010,str: "Handcrafted Soft Chicken Interactions Sharable",num: 9972,date: new Date("2018-09-06T17:03:40.110Z"),obj: {}},36027,"Buckinghamshire Chair","middleware Grenada",{_id: 20011,str: "firewall COM Virginia",num: 55103,array: [],obj: {}},82625],obj: {_id: 20012,str: "turquoise Cotton",num: 25895,date: new Date("2018-09-06T14:17:50.191Z"),array: [],obj: {_id: 20013,num: 25165,date: new Date("2018-09-06T11:08:39.395Z"),array: ["infomediaries Argentine Peso",new Date("2018-09-06T15:45:01.544Z"),new Date("2018-09-06T10:22:52.905Z"),"Practical Fresh Soap",69265,16545]}}});
    },

    function(coll) {
        return coll.insert({_id: 20014,num: 75701,date: new Date("2018-09-06T10:05:00.162Z"),array: [{_id: 20015,str: "Usability Security",num: 59608,obj: {_id: 20016,str: "contextually-based Triple-buffered",date: new Date("2018-09-06T09:05:44.959Z"),array: [],obj: {_id: 20017,str: "Toys",num: 17094,array: [{_id: 20018,num: 56029},"functionalities Kansas",new Date("2018-09-06T03:00:18.601Z"),new Date("2018-09-06T01:58:44.422Z"),new Date("2018-09-05T20:27:35.638Z"),new Date("2018-09-06T01:08:57.170Z"),4809,12037,"Corner Web application"],obj: {}}}},"Bedfordshire Sri Lanka Rupee parsing",89596,"Developer Incredible Metal Shirt Tactics",51086,{_id: 20019,num: 36819,date: new Date("2018-09-06T10:01:30.956Z"),array: [],obj: {}},[{_id: 20020,str: "radical",date: new Date("2018-09-06T00:21:52.617Z"),array: [14910,[]]}]],obj: {_id: 20021,str: "South Dakota 24/7 backing up",num: 13893,date: new Date("2018-09-06T07:43:53.455Z"),obj: {_id: 20022,num: 78349,date: new Date("2018-09-06T09:57:03.092Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 20023,str: "cross-platform quantify",num: 30391,date: new Date("2018-09-06T18:21:53.140Z"),array: [new Date("2018-09-06T15:17:59.934Z"),"Berkshire reboot","Associate Belarus Pizza",59420,{_id: 20024,date: new Date("2018-09-06T08:59:34.800Z"),array: [],obj: {_id: 20025,str: "Enhanced Usability backing up",num: 31394,date: new Date("2018-09-06T08:14:40.590Z"),array: [24513],obj: {}}},[],17405,"Fantastic Concrete Ball Jamaican Dollar",new Date("2018-09-05T23:59:26.023Z"),{_id: 20026,str: "open system generating",num: 32576,date: new Date("2018-09-05T21:48:31.735Z"),array: [new Date("2018-09-06T03:09:49.459Z"),62343],obj: {_id: 20027,str: "mesh Seamless scalable",num: 57143,obj: {}}},"Shoes Bulgarian Lev HTTP",["Multi-tiered",new Date("2018-09-05T23:00:18.339Z"),new Date("2018-09-05T21:37:56.515Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 20028,str: "olive Tuna",num: 36127,array: [28193,51324,"Technician Saint Helena quantifying",[new Date("2018-09-06T09:15:57.390Z"),"Wooden web-readiness",[]],87211,new Date("2018-09-05T21:32:14.760Z"),"database Shirt installation",new Date("2018-09-06T15:18:38.013Z"),{_id: 20029,str: "Optimization",num: 64762,array: [],obj: {}},95594,81550]});
    },

    function(coll) {
        return coll.insert({_id: 20030,str: "deliverables Savings Account",num: 28219,date: new Date("2018-09-06T02:40:46.584Z"),array: [new Date("2018-09-06T18:43:02.852Z"),{_id: 20031,num: 68151,date: new Date("2018-09-05T20:34:12.939Z"),obj: {}},93301,[],"copying","deposit Personal Loan Account","Mouse Keyboard solution-oriented",new Date("2018-09-06T04:57:32.432Z"),48043,{_id: 20032,str: "aggregate Unbranded Wooden Shoes Garden",num: 60200,date: new Date("2018-09-06T08:05:44.288Z"),array: [],obj: {}},new Date("2018-09-06T03:47:58.425Z"),new Date("2018-09-05T20:53:34.593Z"),[81178,{_id: 20033,str: "Applications",num: 96772,array: [],obj: {_id: 20034,num: 19082,date: new Date("2018-09-06T16:29:43.401Z"),array: []}}]]});
    },

    function(coll) {
        return coll.insert({_id: 20035,str: "Rapids invoice infomediaries",num: 25450,date: new Date("2018-09-06T04:01:46.183Z"),array: [9865,"Bedfordshire front-end Indian Rupee Ngultrum"]});
    },

    function(coll) {
        return coll.insert({_id: 20036,str: "Orchard Saudi Riyal Mexican Peso Mexican Unidad de Inversion (UDI)",num: 87861,date: new Date("2018-09-06T01:22:28.079Z"),array: [],obj: {_id: 20037,str: "Senior",num: 53316,date: new Date("2018-09-06T13:02:01.640Z"),array: ["cultivate Coordinator virtual",75584,{_id: 20038,str: "markets",num: 26583,date: new Date("2018-09-05T20:17:51.811Z"),obj: {_id: 20039,str: "Ergonomic",num: 60927,array: [],obj: {}}},28195,58025,{_id: 20040,str: "Rubber",date: new Date("2018-09-06T11:45:12.821Z"),array: [new Date("2018-09-06T13:43:23.310Z"),"hard drive Operative cross-platform",76715,new Date("2018-09-06T14:44:23.303Z"),[]]},"Customer Investment Account","infrastructure",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20041,str: "sexy",num: 60131,date: new Date("2018-09-06T19:37:41.360Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20042,str: "Engineer Bedfordshire",num: 73824,date: new Date("2018-09-06T18:22:43.167Z"),array: [55678,{_id: 20043,str: "Savings Account solid state",num: 45904,date: new Date("2018-09-06T11:18:09.024Z"),obj: {}},new Date("2018-09-05T20:46:21.498Z"),77835,new Date("2018-09-06T19:36:31.140Z"),new Date("2018-09-06T00:27:17.957Z"),[],"relationships USB",["auxiliary conglomeration"],87405,{_id: 20044,str: "Fantastic SSL",num: 56399,date: new Date("2018-09-06T06:40:55.204Z"),array: []},75965,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20045,str: "hard drive Solutions",num: 83842,date: new Date("2018-09-05T20:59:32.272Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20046,str: "connect",num: 84198,date: new Date("2018-09-05T21:25:59.236Z"),array: [new Date("2018-09-06T15:07:37.603Z"),"Sleek Concrete Tuna Russian Federation",91348,[{_id: 20047,str: "fuchsia Car",num: 54480,date: new Date("2018-09-06T19:08:15.045Z"),obj: {}}],8034,"vortals Wooden Namibia",34207,new Date("2018-09-06T07:46:28.232Z"),7789,"Tasty Soft Cheese",{_id: 20048,str: "EXE",num: 68673,date: new Date("2018-09-05T21:27:46.309Z"),array: [],obj: {_id: 20049,str: "copying online",num: 87319,obj: {_id: 20050,str: "Visionary Gloves Kenyan Shilling",num: 85512,array: [],obj: {_id: 20051,num: 85580,date: new Date("2018-09-06T08:10:02.597Z"),array: []}}}},new Date("2018-09-06T04:43:29.737Z"),"input Future Fantastic Steel Salad"]});
    },

    function(coll) {
        return coll.insert({_id: 20052,str: "firewall Granite hack",num: 79234,date: new Date("2018-09-06T00:05:18.338Z"),array: [47715,{_id: 20053,num: 65973,date: new Date("2018-09-06T10:22:06.910Z"),array: [{_id: 20054,str: "Health",array: [],obj: {}},new Date("2018-09-06T10:55:21.593Z"),"Legacy"],obj: {_id: 20055,str: "matrix application deposit",num: 57825,date: new Date("2018-09-06T12:21:40.649Z"),obj: {_id: 20056,str: "Wall distributed turquoise",num: 84578,date: new Date("2018-09-06T04:06:05.166Z"),array: [],obj: {}}}},67177,["Small Phased"],new Date("2018-09-06T07:06:29.434Z"),97790,"Chips Union Quality",{_id: 20057,num: 66376},new Date("2018-09-06T10:27:39.411Z"),82710,90593],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20058,num: 37078,date: new Date("2018-09-06T14:05:29.784Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20059,str: "Buckinghamshire Refined Frozen Fish",num: 40274,date: new Date("2018-09-05T19:57:09.573Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20060,str: "markets Soap",num: 35165,date: new Date("2018-09-06T10:51:00.272Z"),array: [],obj: {_id: 20061,str: "copy",num: 81706,date: new Date("2018-09-06T05:32:28.543Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20062,str: "Dynamic Unbranded",num: 76495,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20063,str: "heuristic",num: 68928,date: new Date("2018-09-06T16:02:50.244Z"),array: [9867,"Clothing","FTP",new Date("2018-09-05T20:07:05.691Z"),{_id: 20064,str: "Home deposit Viaduct",num: 71392,date: new Date("2018-09-06T16:42:26.859Z"),array: [new Date("2018-09-06T13:18:04.345Z"),{_id: 20065,str: "deposit",num: 7294,obj: {_id: 20066,date: new Date("2018-09-06T08:30:03.625Z"),obj: {}}}],obj: {_id: 20067,str: "program engineer",num: 41508,array: [],obj: {_id: 20068,str: "Functionality",num: 95675,date: new Date("2018-09-05T20:55:15.599Z"),array: [],obj: {_id: 20069,str: "Montana",num: 22987,date: new Date("2018-09-06T06:16:58.450Z")}}}},new Date("2018-09-06T14:46:24.231Z"),[],22896,88834,33571,"Inverse invoice Rand Loti","Crossroad bypassing","HTTP Wooden Soft"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20070,str: "bypass interfaces",num: 59969,date: new Date("2018-09-06T09:33:30.456Z"),array: [94070,"project Steel Isle of Man",new Date("2018-09-06T19:43:22.006Z"),54688,new Date("2018-09-05T20:35:02.128Z"),{_id: 20071,str: "systemic",num: 33189,date: new Date("2018-09-06T18:01:46.274Z"),array: ["Toys","firmware","Human Intelligent Steel Chicken backing up",new Date("2018-09-06T02:35:47.330Z"),[],{_id: 20072,str: "Identity override Consultant",num: 59845,date: new Date("2018-09-06T10:33:41.669Z"),obj: {_id: 20073,num: 17162,array: [15852]}},[]],obj: {_id: 20074,str: "executive Orchestrator",num: 87238,date: new Date("2018-09-06T08:04:01.226Z"),obj: {}}},13712,[]],obj: {_id: 20075,array: [new Date("2018-09-06T16:37:41.658Z")],obj: {_id: 20076,str: "bypassing Sports"}}});
    },

    function(coll) {
        return coll.insert({_id: 20077,str: "Total China Chair",date: new Date("2018-09-05T22:44:34.179Z"),array: [[new Date("2018-09-05T20:37:49.964Z")],14384,new Date("2018-09-06T09:47:34.461Z"),"convergence synthesizing","Frozen indigo","Interactions Hryvnia",28561,52426,[],["Legacy Assurance",{_id: 20078,str: "Infrastructure card",num: 83370,date: new Date("2018-09-06T14:10:37.575Z"),array: [89637,new Date("2018-09-06T18:17:19.939Z")],obj: {_id: 20079,num: 82546,array: [],obj: {}}}],"synthesizing synthesize",new Date("2018-09-06T19:34:26.212Z"),73626,27576],obj: {_id: 20080,str: "Netherlands Antillian Guilder",date: new Date("2018-09-06T18:39:26.059Z"),array: ["primary",{_id: 20081,str: "Guinea Franc",num: 69957,date: new Date("2018-09-05T22:35:35.960Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20082,str: "maximize Swedish Krona",num: 3181,date: new Date("2018-09-06T10:07:17.312Z"),array: [23967,new Date("2018-09-06T04:32:31.156Z"),"primary Generic multi-byte","Factors Cambridgeshire New Caledonia",new Date("2018-09-05T21:27:47.435Z"),{_id: 20083,str: "Frozen index",num: 3718,array: [],obj: {}},82384,new Date("2018-09-05T23:18:56.616Z"),59514,89917,[]],obj: {_id: 20084,str: "Health panel",num: 65396,date: new Date("2018-09-06T08:06:56.691Z"),array: ["Taka payment Avon",new Date("2018-09-06T04:58:04.443Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 20085,str: "Heights Cotton",num: 24109,date: new Date("2018-09-06T15:43:15.840Z"),array: [],obj: {_id: 20086,str: "deposit",num: 70430,date: new Date("2018-09-06T03:25:56.308Z"),array: ["invoice static Grocery",31370,new Date("2018-09-06T14:14:18.334Z"),17731,new Date("2018-09-06T08:17:34.488Z"),{_id: 20087,str: "sticky integrate payment",date: new Date("2018-09-06T08:16:53.755Z"),obj: {}},"dynamic Sleek","technologies","Surinam Dollar Balboa US Dollar",new Date("2018-09-06T01:15:07.008Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 20088,str: "B2C",num: 66928,date: new Date("2018-09-06T08:40:13.678Z"),array: [],obj: {_id: 20089,str: "Producer Technician",num: 85132,date: new Date("2018-09-06T04:40:36.851Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20090,str: "Concrete",num: 3242,date: new Date("2018-09-06T18:17:00.641Z"),array: [],obj: {_id: 20091,num: 74360,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20092,str: "web services",num: 2420,date: new Date("2018-09-06T07:11:46.083Z"),array: [],obj: {_id: 20093,str: "hard drive Incredible Granite Towels",num: 24251,date: new Date("2018-09-06T00:21:57.775Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20094,str: "Wooden synergy Practical Rubber Keyboard",num: 55204,date: new Date("2018-09-05T21:16:14.082Z")});
    },

    function(coll) {
        return coll.insert({_id: 20095,str: "Metal",num: 9350,date: new Date("2018-09-06T13:19:21.628Z"),array: ["copying",[],"Lights Agent driver","Pizza Director",{_id: 20096,str: "Granite",num: 90498,date: new Date("2018-09-05T22:04:28.800Z"),array: [new Date("2018-09-06T12:13:07.648Z"),23423,[]],obj: {_id: 20097,str: "program Fish",num: 23834,date: new Date("2018-09-06T17:18:36.364Z"),array: [],obj: {}}},48240,76833,32740,{_id: 20098,str: "array Vista transmitter",num: 18468,date: new Date("2018-09-06T06:16:20.040Z"),obj: {_id: 20099,array: ["port New Israeli Sheqel Global"],obj: {}}},new Date("2018-09-06T01:29:30.400Z"),new Date("2018-09-06T15:51:03.501Z"),new Date("2018-09-06T19:24:35.333Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20100,str: "Awesome Awesome Metal Cheese Borders",num: 27450,date: new Date("2018-09-06T17:35:05.714Z"),array: [new Date("2018-09-06T17:23:22.331Z"),"GB","Handmade Plastic Keyboard GB JBOD",76174,new Date("2018-09-06T08:44:54.604Z"),[{_id: 20101,str: "backing up XSS Infrastructure",date: new Date("2018-09-06T01:15:44.582Z"),array: [[],87827,"transmitter content bus",99803],obj: {}},11102,new Date("2018-09-06T04:38:23.085Z")],[{_id: 20102,str: "synergies Savings Account",num: 9885,date: new Date("2018-09-05T23:07:39.706Z"),obj: {_id: 20103,num: 30381,array: []}},[]],"Granite",29137],obj: {_id: 20104,num: 76183,date: new Date("2018-09-06T11:45:59.465Z"),array: [new Date("2018-09-05T23:38:21.908Z"),95948],obj: {_id: 20105,str: "Kentucky Tennessee",num: 62126}}});
    },

    function(coll) {
        return coll.insert({_id: 20106,str: "Berkshire",num: 19696,date: new Date("2018-09-06T11:40:46.909Z"),array: [new Date("2018-09-06T01:56:12.426Z"),"Solutions transmitting Refined Granite Ball","Bermudian Dollar (customarily known as Bermuda Dollar) disintermediate Frozen",36860,[],new Date("2018-09-06T18:15:27.844Z"),"magenta"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20107,str: "eyeballs Frozen Officer",num: 32596,date: new Date("2018-09-06T08:21:29.470Z"),array: [new Date("2018-09-06T09:16:11.008Z"),44896,"Idaho primary","Generic Metal Pizza Wooden backing up",new Date("2018-09-06T03:36:23.001Z"),"Crossing Strategist",56085,[],"deposit South Dakota Awesome",new Date("2018-09-05T23:19:16.140Z"),{_id: 20108,str: "implement THX array",num: 49496,date: new Date("2018-09-05T23:07:09.062Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20109,str: "pink vertical",num: 45528,date: new Date("2018-09-06T18:25:59.091Z"),array: [2377,67610,new Date("2018-09-06T00:53:06.222Z"),new Date("2018-09-06T06:39:26.793Z"),{_id: 20110,str: "application zero tolerance",num: 42966,date: new Date("2018-09-06T02:25:50.359Z"),array: [new Date("2018-09-06T08:47:02.677Z"),"Configuration"]},"Computers","efficient user-facing",49106,"Open-source",[[],[],new Date("2018-09-06T00:30:10.601Z"),84162,{_id: 20111,num: 79296,date: new Date("2018-09-06T01:05:51.001Z"),obj: {}}]],obj: {_id: 20112,str: "Group turquoise",num: 70455,array: [],obj: {_id: 20113,str: "Executive Pre-emptive data-warehouse",date: new Date("2018-09-05T22:32:03.495Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20114,str: "Customer-focused",num: 12101,date: new Date("2018-09-06T04:30:15.545Z"),array: [new Date("2018-09-06T01:13:37.568Z"),55449,"THX Advanced",new Date("2018-09-06T08:32:18.816Z"),new Date("2018-09-06T07:19:27.870Z"),8848,"Response Paraguay invoice"],obj: {_id: 20115,str: "Frozen revolutionary",date: new Date("2018-09-06T16:45:27.914Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20116,str: "generating",num: 89638,date: new Date("2018-09-06T02:08:20.577Z"),array: [],obj: {_id: 20117,str: "task-force New Caledonia Chair",num: 62910,date: new Date("2018-09-06T01:39:16.627Z"),array: [new Date("2018-09-06T15:52:22.793Z"),new Date("2018-09-06T05:47:26.096Z"),82206,"Practical Tasty Soft Soap Lithuanian Litas","bricks-and-clicks engineer",{_id: 20118,num: 32788,obj: {}},new Date("2018-09-05T23:41:08.434Z"),[],61429,new Date("2018-09-06T13:11:01.192Z"),"primary fresh-thinking channels","Electronics",8285,new Date("2018-09-06T06:25:38.308Z")],obj: {_id: 20119,str: "communities",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20120,str: "Directives modular calculate",num: 93566,date: new Date("2018-09-06T02:34:57.759Z"),obj: {_id: 20121,num: 49378,array: [],obj: {_id: 20122,str: "efficient",num: 68537,date: new Date("2018-09-06T03:41:08.294Z"),array: [new Date("2018-09-06T16:41:02.664Z"),"Facilitator Car feed",new Date("2018-09-06T19:13:00.764Z"),[],{_id: 20123,str: "Burg pink",num: 73249,array: [],obj: {}},"Officer Hong Kong Dollar",20651,[],{_id: 20124,str: "Borders impactful",num: 73623,date: new Date("2018-09-06T14:52:29.778Z"),array: ["Group",new Date("2018-09-06T10:35:04.945Z"),[15143],new Date("2018-09-06T01:06:02.754Z")],obj: {_id: 20125,str: "pixel",num: 39654,date: new Date("2018-09-06T04:44:00.465Z"),obj: {}}},"Books Analyst Heights","Bacon","Savings Account database"]}}});
    },

    function(coll) {
        return coll.insert({_id: 20126,str: "integrated",num: 12366,date: new Date("2018-09-06T01:28:00.477Z"),array: [new Date("2018-09-06T09:46:54.908Z"),new Date("2018-09-05T20:23:41.119Z"),22359,[68075,20583,[],"Administrator Moroccan Dirham salmon"],"repurpose",{_id: 20127,str: "Borders",num: 63589,date: new Date("2018-09-06T10:28:05.588Z"),array: [],obj: {_id: 20128,str: "Mouse",date: new Date("2018-09-06T12:30:51.455Z"),array: [new Date("2018-09-05T22:19:04.027Z")],obj: {_id: 20129,str: "Officer",num: 29426,array: ["mission-critical Intelligent Metal Hat schemas"]}}},new Date("2018-09-06T16:34:54.250Z"),97849,89338,[],new Date("2018-09-05T21:53:14.997Z"),"optical Oklahoma"],obj: {_id: 20130,str: "customized Taka eyeballs",num: 92977,array: [new Date("2018-09-06T00:10:54.712Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20131,str: "Serbian Dinar Norwegian Krone Granite",num: 56895,array: [new Date("2018-09-06T11:18:01.169Z"),81088,"Sleek Granite Pizza",1263,{_id: 20132,str: "Intelligent",num: 23538,date: new Date("2018-09-06T17:44:39.371Z"),array: [],obj: {}},27544,new Date("2018-09-06T18:18:40.008Z"),{_id: 20133,str: "Belarussian Ruble plum",date: new Date("2018-09-06T01:37:02.546Z"),obj: {_id: 20134,str: "Clothing Peso Uruguayo Uruguay Peso en Unidades Indexadas",num: 23647,date: new Date("2018-09-06T00:03:06.513Z"),obj: {}}},31496,"Business-focused",new Date("2018-09-06T02:29:27.420Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20135,str: "Ramp Keyboard",num: 43637,date: new Date("2018-09-06T06:17:12.715Z"),array: [96262,"Generic Steel Fish Plains programming",37916,new Date("2018-09-06T13:48:53.757Z"),{_id: 20136,num: 18601,date: new Date("2018-09-06T02:39:40.327Z"),array: [],obj: {}},"Gorgeous Granite Soap",37288,"Designer Global Gorgeous Wooden Shoes",new Date("2018-09-06T06:12:51.857Z"),new Date("2018-09-06T03:28:06.734Z")],obj: {_id: 20137,num: 89313,date: new Date("2018-09-06T10:05:54.288Z"),obj: {_id: 20138,str: "extranet compressing",num: 20248,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 20139,str: "Avon Rustic secured line",num: 24579,date: new Date("2018-09-06T13:10:10.740Z"),array: [64321,new Date("2018-09-06T07:21:20.363Z"),89554,"Bedfordshire New York Metal",[],"quantify",new Date("2018-09-06T12:42:29.962Z"),{_id: 20140,str: "FTP Credit Card Account brand",date: new Date("2018-09-06T06:43:26.337Z"),obj: {_id: 20141,num: 58344,date: new Date("2018-09-06T15:28:45.651Z"),array: [],obj: {_id: 20142,str: "e-tailers Frozen attitude",num: 37195,array: [74767,"Frozen array Crescent"],obj: {}}}},new Date("2018-09-05T20:57:35.894Z"),70372,["open-source Via quantify",[],new Date("2018-09-06T11:32:15.508Z"),"copy Books","Dynamic Tasty",{_id: 20143,date: new Date("2018-09-05T22:43:43.622Z"),array: [63646]}]]});
    },

    function(coll) {
        return coll.insert({_id: 20144,date: new Date("2018-09-06T16:14:12.483Z"),array: [],obj: {_id: 20145,str: "Architect",num: 77263,date: new Date("2018-09-06T01:05:43.517Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20146,str: "Chicken",num: 53666,date: new Date("2018-09-06T06:52:40.446Z"),array: [57133,new Date("2018-09-06T19:33:10.875Z"),new Date("2018-09-06T11:22:11.483Z"),{_id: 20147,str: "Fantastic programming Baby",date: new Date("2018-09-06T12:42:16.411Z"),array: [],obj: {_id: 20148,str: "Haven Avenue",num: 40270,date: new Date("2018-09-06T17:28:47.629Z"),array: [new Date("2018-09-06T01:20:48.172Z"),"national Chips",13447,{_id: 20149,date: new Date("2018-09-06T12:36:35.705Z"),array: [{_id: 20150,str: "Credit Card Account",num: 83856,date: new Date("2018-09-06T03:44:20.323Z"),array: [],obj: {}}],obj: {}}],obj: {_id: 20151,str: "Cambridgeshire indigo",num: 45587,obj: {}}}},"SSL",88845,"Auto Loan Account",46080,24549,[],[{_id: 20152,str: "cross-platform teal",num: 29278,obj: {}},["Incredible Rubber Chips"]],new Date("2018-09-06T16:56:47.350Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20153,str: "Computers brand transmit",num: 50904,date: new Date("2018-09-06T04:46:53.099Z"),array: ["Unbranded Soft Hat",43139,new Date("2018-09-06T09:43:39.802Z"),new Date("2018-09-06T04:19:00.689Z"),[],15082,{_id: 20154,str: "pixel",num: 18428,date: new Date("2018-09-06T01:35:59.204Z"),array: [],obj: {_id: 20155,str: "deposit Savings Account Security",num: 80522,date: new Date("2018-09-06T04:04:19.670Z"),obj: {}}},55916,"IB",[],new Date("2018-09-06T10:30:20.215Z"),new Date("2018-09-06T13:28:10.222Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20156,str: "Dynamic",num: 13785,date: new Date("2018-09-06T04:02:36.760Z"),array: [],obj: {_id: 20157,str: "Credit Card Account Internal",num: 88464,date: new Date("2018-09-06T15:48:17.572Z"),array: ["Dynamic Inlet complexity","Refined Concrete Computer ivory Associate",74544,"Rubber experiences",[new Date("2018-09-06T19:39:00.876Z")],9189,"Enhanced navigate utilize",new Date("2018-09-06T14:35:27.018Z"),new Date("2018-09-06T05:20:37.816Z"),89441,[],"mint green Granite solid state",new Date("2018-09-06T15:40:53.369Z"),{_id: 20158,str: "back-end",num: 44616,date: new Date("2018-09-06T00:37:58.566Z"),array: [[]],obj: {}},28445,[]],obj: {_id: 20159,num: 85284,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20160,str: "Convertible Marks Awesome Frozen Car Unbranded",num: 73068,date: new Date("2018-09-06T04:01:55.985Z"),array: [],obj: {_id: 20161,num: 37031,date: new Date("2018-09-06T02:49:25.175Z"),array: ["Radial access","Web",new Date("2018-09-06T16:19:13.607Z"),79037,"yellow",73330,[],35247,new Date("2018-09-06T18:43:34.273Z")],obj: {_id: 20162,str: "Fiji",num: 18407,array: [new Date("2018-09-06T19:08:17.260Z"),[],new Date("2018-09-06T15:08:09.248Z"),new Date("2018-09-06T14:45:30.506Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20163,str: "primary Towels front-end",num: 80736,date: new Date("2018-09-06T14:26:37.360Z"),array: [31423,"circuit Refined Granite Shoes intuitive","azure tan",23241,[],new Date("2018-09-05T21:11:28.370Z"),{_id: 20164,str: "USB Berkshire port",num: 55126},new Date("2018-09-06T06:50:18.249Z"),{_id: 20165,str: "Lead Taiwan",num: 53278,date: new Date("2018-09-05T22:21:14.748Z"),obj: {_id: 20166,num: 80674,date: new Date("2018-09-06T10:25:42.853Z"),array: ["Compatible back up",{_id: 20167,str: "Fords",num: 31160,date: new Date("2018-09-06T11:52:55.609Z"),array: [],obj: {}}],obj: {}}},new Date("2018-09-06T18:22:54.402Z"),53980]});
    },

    function(coll) {
        return coll.insert({_id: 20168,str: "context-sensitive Neck",date: new Date("2018-09-06T09:38:44.070Z")});
    },

    function(coll) {
        return coll.insert({_id: 20169,str: "Movies Bike",date: new Date("2018-09-06T18:30:57.380Z"),array: ["West Virginia",31329,"Borders","cross-media Buckinghamshire Netherlands Antillian Guilder",46222,[],new Date("2018-09-05T22:06:27.788Z"),64076,{_id: 20170,str: "Cedi yellow invoice",num: 52972,array: [],obj: {}},[],new Date("2018-09-06T05:31:06.887Z")],obj: {_id: 20171,str: "calculate",date: new Date("2018-09-06T17:56:34.894Z"),array: [new Date("2018-09-06T10:56:40.794Z"),new Date("2018-09-06T14:37:09.593Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 20172,str: "Mauritius Rupee Home Loan Account Baby",num: 1390,array: [],obj: {_id: 20173,str: "Intranet",num: 74749,date: new Date("2018-09-06T19:46:11.926Z"),array: [64250,new Date("2018-09-05T20:23:42.360Z"),new Date("2018-09-06T13:10:20.052Z"),{_id: 20174,date: new Date("2018-09-06T03:42:56.908Z"),obj: {}},new Date("2018-09-06T14:47:06.109Z"),125,[30146,"Wooden Maine"],[],new Date("2018-09-05T23:50:41.444Z"),67546,"invoice","Jewelery disintermediate",new Date("2018-09-06T10:54:53.684Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 20175,str: "Program deposit",num: 53342,date: new Date("2018-09-06T12:20:33.825Z"),obj: {_id: 20176,str: "Handmade SQL envisioneer",num: 36213,array: [],obj: {_id: 20177,str: "Principal",num: 11643,date: new Date("2018-09-06T15:24:37.073Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20178,str: "Sleek Metal Shirt azure Islands",num: 17538,date: new Date("2018-09-06T13:31:44.628Z"),array: ["Handcrafted XSS integrated",[],{_id: 20179,str: "Berkshire Gorgeous",num: 68651,array: [],obj: {}},new Date("2018-09-06T10:19:06.847Z"),[19945,"protocol purple deposit","indexing functionalities",new Date("2018-09-06T17:53:58.747Z"),7256],new Date("2018-09-06T08:07:29.300Z"),{_id: 20180,str: "Sleek help-desk Dynamic",num: 81579,date: new Date("2018-09-06T08:14:36.483Z"),obj: {_id: 20181,num: 7975,date: new Date("2018-09-06T04:53:05.563Z"),array: [61236],obj: {}}},63400,new Date("2018-09-06T07:37:38.980Z"),{_id: 20182,str: "world-class",num: 43174,date: new Date("2018-09-06T01:53:26.772Z"),array: [],obj: {_id: 20183,str: "Tasty Rubber Sausages Missouri",obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 20184,str: "target",num: 75050,date: new Date("2018-09-06T14:02:15.113Z"),array: [[],new Date("2018-09-06T17:38:53.392Z"),35457,new Date("2018-09-06T15:12:21.514Z"),"Rubber",new Date("2018-09-06T11:23:26.781Z"),{_id: 20185,num: 51094,date: new Date("2018-09-06T13:03:03.984Z"),array: ["bandwidth",new Date("2018-09-06T10:38:28.012Z"),11149],obj: {}},49418,{_id: 20186,str: "leading-edge",num: 64443,date: new Date("2018-09-06T16:49:31.146Z"),array: [],obj: {_id: 20187,date: new Date("2018-09-06T10:16:38.073Z"),array: ["Personal Loan Account Future Wisconsin",23642],obj: {_id: 20188,str: "eyeballs",num: 57420,date: new Date("2018-09-06T10:53:27.164Z"),array: [],obj: {}}}},[81424,["Falls end-to-end out-of-the-box",76650]],{_id: 20189,str: "Armenian Dram",num: 6003},"Baby Sports",new Date("2018-09-06T07:18:37.787Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20190,str: "card",num: 84215,date: new Date("2018-09-06T04:18:52.069Z"),obj: {_id: 20191,date: new Date("2018-09-06T19:34:11.768Z"),array: [9131,"approach red Direct",new Date("2018-09-06T01:50:53.361Z"),"synthesize Bedfordshire Customer",15860,"Buckinghamshire Buckinghamshire Checking Account",new Date("2018-09-06T09:51:03.728Z"),83905,new Date("2018-09-06T13:16:12.902Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20192,str: "Cambridgeshire Games",num: 54374,date: new Date("2018-09-06T18:35:54.786Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20193,str: "sky blue Front-line",num: 11420,date: new Date("2018-09-06T05:59:03.132Z"),array: ["red",52663,{_id: 20194,str: "parse Paradigm",num: 33222,date: new Date("2018-09-06T12:13:09.601Z"),array: [],obj: {}},new Date("2018-09-06T05:36:00.022Z"),65738,new Date("2018-09-06T10:40:03.747Z"),"Principal Investment Account Legacy",15774,71887,[new Date("2018-09-06T01:03:51.551Z"),new Date("2018-09-06T15:16:42.921Z")],"Lead indexing",{_id: 20195,date: new Date("2018-09-05T23:01:24.511Z"),array: ["Corporate adapter"]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20196,str: "Nevada",num: 95613,date: new Date("2018-09-06T04:07:57.585Z"),array: [74819,85362,"implementation",new Date("2018-09-06T04:23:35.282Z"),new Date("2018-09-06T02:59:19.600Z"),"Ergonomic Movies Books",[],"hacking Home",{_id: 20197,str: "Path Infrastructure San Marino",num: 1457,date: new Date("2018-09-06T15:20:04.736Z"),obj: {}},[],"Rufiyaa IB info-mediaries",new Date("2018-09-06T07:39:40.065Z")],obj: {_id: 20198,str: "Avon Concrete auxiliary",date: new Date("2018-09-06T18:47:59.780Z")}});
    },

    function(coll) {
        return coll.insert({_id: 20199,str: "El Salvador payment",num: 75467,date: new Date("2018-09-05T22:57:47.182Z"),array: [],obj: {_id: 20200,str: "channels SQL",num: 64997,date: new Date("2018-09-06T11:55:43.699Z"),array: ["Angola",new Date("2018-09-06T08:11:54.297Z"),new Date("2018-09-06T19:27:44.807Z"),81349,"Sharable web-readiness",{_id: 20201,str: "Up-sized",num: 63858,date: new Date("2018-09-05T20:55:14.285Z"),obj: {}},[],[],new Date("2018-09-06T00:44:23.829Z"),40534,"auxiliary quantify Pants"],obj: {_id: 20202,num: 38140,array: [new Date("2018-09-06T05:32:33.010Z"),[new Date("2018-09-05T21:33:45.665Z"),"Florida redundant","Practical"],58988]}}});
    },

    function(coll) {
        return coll.insert({_id: 20203,str: "Focused Gloves",num: 23620,date: new Date("2018-09-06T19:38:06.814Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20204,num: 12607,date: new Date("2018-09-06T15:05:01.112Z"),array: [{_id: 20205,str: "override Rhode Island Branding",num: 67060,date: new Date("2018-09-05T21:12:07.086Z"),array: [],obj: {}},85903,new Date("2018-09-06T08:49:05.941Z"),"Forward Tasty Quality",[],68171],obj: {_id: 20206,num: 54737,date: new Date("2018-09-06T07:53:16.190Z"),array: ["project Personal Loan Account Dong",new Date("2018-09-06T13:02:41.903Z"),"Isle",{_id: 20207,str: "mobile payment channels",obj: {}},28837],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20208,str: "Garden Curve",num: 86046,date: new Date("2018-09-06T05:07:57.741Z"),array: [],obj: {_id: 20209,num: 43178,date: new Date("2018-09-06T04:34:47.319Z"),array: ["Sports",new Date("2018-09-05T23:56:19.515Z"),74230,new Date("2018-09-06T06:33:55.720Z"),"platforms front-end",{_id: 20210,str: "bandwidth",num: 35346,date: new Date("2018-09-06T11:19:20.893Z"),array: [],obj: {}},41386,{_id: 20211,str: "Manor Licensed Soft Pizza",array: ["channels",[],20678]}],obj: {_id: 20212,str: "quantify circuit Steel",num: 29871,date: new Date("2018-09-06T08:14:23.306Z"),obj: {_id: 20213,str: "navigate withdrawal withdrawal",array: [60638,new Date("2018-09-05T21:56:22.213Z"),new Date("2018-09-06T11:39:23.197Z"),{_id: 20214,num: 67799,obj: {}},["Georgia"],72784],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 20215,str: "indexing",num: 77172,date: new Date("2018-09-06T17:18:14.972Z"),array: [],obj: {_id: 20216,str: "optical Officer",num: 92129,date: new Date("2018-09-06T01:48:36.047Z"),array: ["virtual Berkshire",8537,"neural New Jersey","Balboa US Dollar Rustic",new Date("2018-09-06T09:02:14.437Z"),new Date("2018-09-06T02:42:25.916Z"),72228,new Date("2018-09-05T21:27:49.189Z"),new Date("2018-09-06T02:50:07.919Z"),[4277,new Date("2018-09-06T18:38:20.713Z"),{_id: 20217,str: "Oklahoma e-services",num: 34024}]],obj: {_id: 20218,date: new Date("2018-09-06T17:45:10.461Z"),array: ["withdrawal yellow copying",new Date("2018-09-06T18:05:03.887Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20219,str: "Haven",num: 27249,date: new Date("2018-09-06T12:24:55.017Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20220,str: "Orchestrator Handcrafted Gorgeous",num: 85497,date: new Date("2018-09-06T01:22:40.452Z"),array: [{_id: 20221,str: "invoice Bahraini Dinar",array: ["Profit-focused",new Date("2018-09-06T15:55:57.591Z"),"Representative",56034],obj: {}},new Date("2018-09-06T16:28:31.268Z"),[],"holistic",98503,"azure navigating",[],{_id: 20222,num: 12351,date: new Date("2018-09-06T16:14:22.886Z"),array: [new Date("2018-09-06T00:12:56.634Z"),{_id: 20223,str: "Chair French Polynesia niches",num: 52641,date: new Date("2018-09-06T11:42:15.037Z")}],obj: {_id: 20224,obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20225,str: "Marketing reintermediate",num: 49584,date: new Date("2018-09-06T09:31:34.579Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20226,str: "turn-key Toys Savings Account",num: 34561,date: new Date("2018-09-06T14:50:13.739Z"),array: [],obj: {_id: 20227,str: "neural",num: 17194,date: new Date("2018-09-06T11:44:56.710Z"),array: [60782,"Bulgaria",new Date("2018-09-06T14:49:40.097Z"),70496,58710,new Date("2018-09-06T03:47:29.317Z"),"Texas",new Date("2018-09-05T21:21:16.824Z"),new Date("2018-09-06T15:06:18.946Z"),{_id: 20228,str: "approach Corporate",num: 79123,array: ["Down-sized Music",new Date("2018-09-06T08:14:44.197Z")],obj: {}},"Intranet morph methodical",65287,[[]]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20229,str: "payment",num: 65488,array: [],obj: {_id: 20230,str: "Unbranded hacking",num: 79750,date: new Date("2018-09-06T18:52:57.185Z"),array: [4691,"brand migration","Frozen haptic",new Date("2018-09-05T20:22:24.121Z"),new Date("2018-09-06T16:50:29.029Z"),"cohesive Metal Money Market Account",44224,38098,"Avon Small didactic",{_id: 20231,str: "Won",num: 68117,date: new Date("2018-09-06T09:09:16.427Z"),obj: {_id: 20232,date: new Date("2018-09-06T17:13:28.131Z"),array: [{_id: 20233,num: 85954,obj: {}},{_id: 20234,str: "Advanced Senior Universal",date: new Date("2018-09-06T13:02:18.140Z")}]}},48061],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20235,str: "bus",num: 86848,date: new Date("2018-09-06T11:51:27.106Z"),array: [67157,new Date("2018-09-06T18:25:06.196Z"),["PCI protocol Ohio","Causeway sensor Granite",{_id: 20236,str: "District",num: 43706,date: new Date("2018-09-06T00:22:34.374Z"),array: [],obj: {_id: 20237,num: 76771,date: new Date("2018-09-06T03:53:26.613Z"),array: [new Date("2018-09-06T01:26:27.907Z"),{_id: 20238,str: "XML revolutionary",num: 76558,array: [],obj: {}}],obj: {}}}],47041,"secondary",[],89656,90829,new Date("2018-09-06T18:40:46.835Z"),new Date("2018-09-06T02:01:13.694Z"),new Date("2018-09-06T02:22:05.062Z"),71992],obj: {_id: 20239,str: "back up FTP",date: new Date("2018-09-06T12:36:29.402Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20240,str: "Marketing content-based payment",num: 92958,date: new Date("2018-09-06T00:37:18.116Z"),array: [94007,new Date("2018-09-06T03:30:32.793Z"),"Investment Account schemas","capacity",new Date("2018-09-06T02:44:07.104Z"),{_id: 20241,str: "functionalities Michigan",num: 44378,date: new Date("2018-09-05T23:18:39.094Z"),array: [],obj: {_id: 20242,str: "Dynamic invoice",num: 84156,date: new Date("2018-09-06T05:25:46.102Z"),obj: {}}},new Date("2018-09-06T19:28:44.597Z"),new Date("2018-09-06T00:57:58.352Z"),{_id: 20243,num: 9474,array: ["3rd generation",{_id: 20244,str: "bandwidth-monitored utilize e-enable",date: new Date("2018-09-06T10:28:21.663Z"),array: [[],39022],obj: {_id: 20245,str: "Central lavender",num: 64477,date: new Date("2018-09-06T10:10:20.668Z"),array: [new Date("2018-09-06T16:08:19.081Z"),76932],obj: {}}},75128,new Date("2018-09-06T05:18:07.736Z")],obj: { _id: 20246 }}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20247,str: "black Cross-platform workforce",date: new Date("2018-09-06T05:10:25.715Z"),array: [8113,new Date("2018-09-06T11:23:47.984Z"),{_id: 20248,str: "Berkshire impactful",num: 22362,date: new Date("2018-09-06T17:23:16.487Z"),obj: {_id: 20249,str: "Keyboard",num: 35655,date: new Date("2018-09-06T03:09:01.755Z"),array: [44419],obj: {}}},"Soap",new Date("2018-09-06T09:18:02.404Z"),"white",{_id: 20250,num: 82639,array: [],obj: {}},[],"logistical next generation",96369]});
    },

    function(coll) {
        return coll.insert({_id: 20251,num: 4440,date: new Date("2018-09-06T15:05:17.041Z")});
    },

    function(coll) {
        return coll.insert({_id: 20252,str: "Personal Loan Account Assistant initiatives",num: 31563,date: new Date("2018-09-06T03:18:30.777Z"),array: [new Date("2018-09-05T22:30:33.810Z"),"encompassing contextually-based",34402,79365,{_id: 20253,str: "Gorgeous",num: 96855,date: new Date("2018-09-06T07:01:37.496Z"),array: [],obj: {}},[],91197]});
    },

    function(coll) {
        return coll.insert({_id: 20254,str: "indexing productize parsing",num: 33141,date: new Date("2018-09-06T16:36:41.893Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20255,str: "architectures",num: 35729,date: new Date("2018-09-06T12:08:55.146Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20256,str: "deliverables",num: 35418,date: new Date("2018-09-05T21:38:05.518Z"),array: [new Date("2018-09-06T13:17:34.701Z"),{_id: 20257,str: "Idaho Licensed Wooden Mouse",date: new Date("2018-09-06T10:19:41.246Z"),array: [84984,"web-enabled","Coordinator global Generic",new Date("2018-09-06T12:31:11.176Z"),26255,"Automotive card",3612],obj: {_id: 20258,num: 25894,array: [],obj: {_id: 20259,str: "Checking Account multi-byte Gorgeous",date: new Date("2018-09-06T07:46:06.181Z"),array: [],obj: {}}}},new Date("2018-09-06T16:57:40.204Z"),"invoice homogeneous Checking Account",[],43928,{_id: 20260,num: 50832,date: new Date("2018-09-06T01:42:37.692Z"),obj: {}},new Date("2018-09-05T20:11:14.792Z"),new Date("2018-09-06T06:12:00.954Z"),new Date("2018-09-06T01:53:47.270Z")],obj: {_id: 20261,str: "quantifying Handmade Rubber Mouse Granite",num: 43662,date: new Date("2018-09-06T03:26:47.046Z"),array: [],obj: {_id: 20262,num: 43343,date: new Date("2018-09-06T18:26:24.303Z"),array: [66252]}}});
    },

    function(coll) {
        return coll.insert({_id: 20263,str: "application Unbranded",num: 80697,date: new Date("2018-09-05T20:23:25.019Z"),array: [66692,new Date("2018-09-06T16:01:20.502Z"),"withdrawal navigating program",{_id: 20264,str: "Brand override Savings Account",date: new Date("2018-09-05T20:35:30.812Z"),array: ["solid state",{_id: 20265,str: "mission-critical Nebraska payment",num: 70104,date: new Date("2018-09-06T06:49:36.919Z"),array: [],obj: {}},"Tools Generic Frozen Pizza",18938],obj: {_id: 20266,num: 16395,array: [new Date("2018-09-06T08:10:52.070Z"),"Wooden Internal"],obj: {}}},[],91838,[],{_id: 20267,str: "Ghana hacking",date: new Date("2018-09-06T03:10:34.495Z"),array: []},new Date("2018-09-05T22:30:28.050Z"),65027,"Internal algorithm withdrawal",{_id: 20268,num: 63394,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 20269,str: "Movies",num: 44298,date: new Date("2018-09-06T15:39:14.599Z"),array: ["XSS Shoes parse",18738,"Corporate","hacking",new Date("2018-09-06T12:14:09.959Z"),80071,70638,new Date("2018-09-05T20:45:57.216Z"),[],[new Date("2018-09-06T12:53:04.173Z")],{_id: 20270,str: "sky blue Western Sahara",num: 74066,date: new Date("2018-09-06T03:35:11.180Z"),array: [0,{_id: 20271,str: "web-readiness Personal Loan Account Clothing",date: new Date("2018-09-06T17:48:38.917Z"),array: [new Date("2018-09-06T02:48:00.771Z")],obj: {_id: 20272,str: "Handmade Metal Soap Administrator Tugrik",num: 93521,array: [new Date("2018-09-05T23:14:29.421Z"),{_id: 20273,str: "Street Liaison",num: 42249,date: new Date("2018-09-06T14:37:27.431Z"),obj: {}}]}},"Licensed Cotton",{_id: 20274,num: 4922,array: [],obj: {}},"scale"]},16638,"Inlet Savings Account"],obj: {_id: 20275,date: new Date("2018-09-06T16:51:36.561Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20276,str: "Pants red",date: new Date("2018-09-06T02:20:11.081Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20277,str: "Sleek Steel Ball",num: 8300,date: new Date("2018-09-06T06:17:13.208Z"),array: ["Tools monitor",new Date("2018-09-06T08:27:30.919Z"),new Date("2018-09-06T06:59:19.524Z"),"Tennessee SMTP",new Date("2018-09-06T16:35:24.146Z"),{_id: 20278,str: "Tools",array: [],obj: {_id: 20279,str: "deliver Borders",num: 10842,date: new Date("2018-09-05T21:22:34.726Z"),array: [20393]}},21227,"tan transmit transmit","Vista",16972,new Date("2018-09-06T09:05:20.002Z")],obj: {_id: 20280,num: 53807,date: new Date("2018-09-06T14:31:41.601Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20281,num: 28935,date: new Date("2018-09-06T04:20:02.000Z")});
    },

    function(coll) {
        return coll.insert({_id: 20282,str: "XSS",num: 71308,date: new Date("2018-09-06T00:04:06.533Z"),array: [new Date("2018-09-06T07:59:54.823Z"),31039,"channels",34062,63661,"communities grid-enabled",new Date("2018-09-06T04:51:48.715Z"),new Date("2018-09-06T14:53:16.531Z"),new Date("2018-09-06T09:42:16.043Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20283,str: "utilize bandwidth",num: 47771,array: [],obj: {_id: 20284,str: "Expanded Mexico SMTP",date: new Date("2018-09-06T10:03:45.733Z"),array: [],obj: {_id: 20285,num: 29627,date: new Date("2018-09-06T08:32:43.591Z"),array: [3045,"deposit Health",{_id: 20286,str: "Shoal Engineer",num: 38423,date: new Date("2018-09-06T18:12:59.307Z"),array: ["haptic",new Date("2018-09-06T07:09:11.033Z"),"maximize Personal Loan Account",new Date("2018-09-06T00:27:09.399Z"),new Date("2018-09-06T08:08:59.410Z"),[],89779,{_id: 20287,str: "Money Market Account transmitter Awesome Wooden Shoes",num: 54192,date: new Date("2018-09-06T01:01:18.010Z"),array: ["Investment Account Mouse Netherlands",72500,[],{_id: 20288,str: "Engineer",obj: {}}],obj: {}}],obj: {}},new Date("2018-09-06T14:12:13.267Z"),{_id: 20289,str: "customer loyalty e-commerce",num: 74651}],obj: {_id: 20290,num: 4336,date: new Date("2018-09-06T15:32:24.298Z"),array: ["Devolved Center"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 20291,str: "Handmade Architect New York",num: 30361,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20292,num: 25388,date: new Date("2018-09-06T15:40:51.538Z"),obj: {_id: 20293,str: "Wells Fantastic driver",date: new Date("2018-09-05T23:17:37.745Z"),array: [],obj: {_id: 20294,str: "Credit Card Account Specialist",array: [98505,new Date("2018-09-06T19:14:18.119Z"),new Date("2018-09-05T20:00:01.706Z"),16123,"Lead Data channels",{_id: 20295,str: "Team-oriented extensible",num: 48017,date: new Date("2018-09-06T05:30:43.006Z"),array: []},new Date("2018-09-06T13:14:32.950Z"),"Delaware Profound",1302,[24834],"SDD"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20296,str: "Checking Account generate",num: 63033,date: new Date("2018-09-06T01:29:32.696Z"),array: [67588,9571,new Date("2018-09-05T22:25:24.940Z"),85495,"Summit implement","open-source New Caledonia Focused",new Date("2018-09-05T20:27:41.409Z"),44753,74792,new Date("2018-09-06T10:17:15.927Z"),{_id: 20297,num: 34156,date: new Date("2018-09-06T05:43:17.511Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 20298,str: "Grocery quantifying Officer",date: new Date("2018-09-06T17:43:27.071Z"),array: [new Date("2018-09-06T13:55:31.911Z"),"program","card Wooden",[],new Date("2018-09-06T06:15:29.673Z"),59262,new Date("2018-09-05T21:17:33.215Z"),"parse","Berkshire Health Buckinghamshire",{_id: 20299,num: 47230,array: [],obj: {_id: 20300,str: "Plaza haptic parsing",num: 78177,date: new Date("2018-09-06T17:54:28.864Z"),obj: {}}},8058,68543,51739,"quantifying"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20301,str: "open-source",num: 14373,date: new Date("2018-09-06T01:33:37.348Z"),array: [{_id: 20302,str: "Buckinghamshire Tools",num: 10783,date: new Date("2018-09-05T23:06:39.678Z"),array: [],obj: {_id: 20303,num: 25365,date: new Date("2018-09-06T12:00:10.963Z"),array: ["e-commerce"],obj: {}}},"mint green Borders",96958,22165,new Date("2018-09-06T09:39:20.559Z"),33492,"compress bandwidth",[],{_id: 20304,str: "Towels Forward Creek",date: new Date("2018-09-06T12:13:18.109Z"),obj: {_id: 20305,num: 12260,obj: {}}},{_id: 20306,date: new Date("2018-09-06T16:11:11.702Z"),array: []},14396,10592,[new Date("2018-09-06T16:23:44.194Z")]],obj: {_id: 20307,str: "Specialist",num: 88774,date: new Date("2018-09-06T08:16:50.444Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20308,str: "copying",num: 3305,date: new Date("2018-09-06T06:44:09.855Z"),array: [],obj: {_id: 20309,str: "hack",date: new Date("2018-09-06T03:34:14.350Z"),array: [],obj: {_id: 20310,str: "EXE",num: 92389,date: new Date("2018-09-06T06:16:10.960Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 20311,str: "architect",num: 64904,date: new Date("2018-09-06T09:30:41.888Z"),array: [25938,new Date("2018-09-05T23:20:33.420Z"),"mobile Shoes",12727,{_id: 20312,str: "solid state Savings Account mindshare",num: 73109,date: new Date("2018-09-06T08:15:12.262Z"),array: []},[62700],"Soap mint green sky blue",[],new Date("2018-09-06T02:45:44.576Z"),"synthesize",45362,{_id: 20313,str: "morph Danish Krone Reverse-engineered",num: 72616,date: new Date("2018-09-05T20:59:35.608Z"),obj: {}},new Date("2018-09-06T06:30:29.633Z")],obj: {_id: 20314,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20315,str: "application Indian Rupee",num: 62375,date: new Date("2018-09-06T13:45:17.064Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20316,str: "index Program Burkina Faso",num: 7028,date: new Date("2018-09-06T15:48:01.484Z"),array: [54572,new Date("2018-09-06T05:08:41.136Z"),33015,"Intelligent Frozen Fish Automotive",77231,"Facilitator fuchsia virtual",[],{_id: 20317,str: "morph ROI",num: 68175,date: new Date("2018-09-06T02:16:50.338Z"),array: [new Date("2018-09-06T03:37:55.185Z")],obj: {_id: 20318,str: "systems synergy",date: new Date("2018-09-06T04:55:03.828Z"),array: []}},new Date("2018-09-06T02:27:00.815Z"),new Date("2018-09-05T21:22:37.007Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20319,str: "parsing",date: new Date("2018-09-06T10:29:04.377Z"),array: [],obj: {_id: 20320,str: "Colombian Peso Unidad de Valor Real experiences",num: 29945,date: new Date("2018-09-06T00:59:52.268Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20321,str: "purple lavender leading edge",num: 22996,array: [35140,new Date("2018-09-06T12:52:18.936Z"),"Beauty Bedfordshire capacitor",{_id: 20322,str: "Meadows",date: new Date("2018-09-06T08:38:09.777Z"),array: [],obj: {}},24318,new Date("2018-09-06T08:03:27.427Z"),new Date("2018-09-06T15:33:38.970Z"),"enable object-oriented French Polynesia",31249,[],{_id: 20323,num: 2879,date: new Date("2018-09-06T11:15:06.765Z"),array: [],obj: {}},"Singapore Dollar Missouri"],obj: {_id: 20324,str: "Consultant",num: 61660,date: new Date("2018-09-06T08:18:35.391Z"),array: ["Myanmar relationships","Intranet supply-chains override"],obj: {_id: 20325,str: "Rubber synthesizing Gorgeous Rubber Gloves",num: 90439,array: [],obj: {_id: 20326,num: 58001}}}});
    },

    function(coll) {
        return coll.insert({_id: 20327,str: "De-engineered compressing",num: 31783,date: new Date("2018-09-06T12:18:07.259Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20328,str: "transform",num: 32827,date: new Date("2018-09-06T07:23:18.251Z"),array: [new Date("2018-09-06T05:47:40.862Z"),new Date("2018-09-05T20:46:50.375Z"),10961,"Human Bedfordshire",{_id: 20329,str: "Ball Buckinghamshire",num: 25880,array: ["IB"],obj: {_id: 20330,num: 77050,date: new Date("2018-09-06T04:45:02.337Z"),array: [],obj: {}}},68575,10756,"Samoa",new Date("2018-09-06T17:33:31.695Z"),[[]],{_id: 20331,str: "Rustic Plastic Shirt Monitored",num: 4517,date: new Date("2018-09-06T08:10:44.152Z"),obj: {}},new Date("2018-09-06T07:42:04.953Z"),"Rustic Qatari Rial Union"],obj: {_id: 20332,num: 23594,obj: {_id: 20333,str: "Research Burkina Faso Wells",num: 76573,date: new Date("2018-09-06T07:17:06.267Z"),obj: {_id: 20334,obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 20335,str: "Mexico high-level",num: 77844,date: new Date("2018-09-06T08:55:07.567Z"),array: [99166,[{_id: 20336,str: "Compatible relationships human-resource",num: 81809,array: [],obj: {}},"Administrator sensor 24/7",new Date("2018-09-06T13:43:43.044Z"),54083,"generating"],[],new Date("2018-09-05T21:27:22.989Z"),new Date("2018-09-06T06:17:18.167Z"),new Date("2018-09-06T16:44:26.881Z"),"Credit Card Account white protocol","Research",75327],obj: {_id: 20337,date: new Date("2018-09-06T05:27:34.089Z")}});
    },

    function(coll) {
        return coll.insert({_id: 20338,str: "Afghani Hat Mexican Peso Mexican Unidad de Inversion (UDI)",num: 33974,date: new Date("2018-09-06T17:01:09.630Z"),array: [{_id: 20339,str: "Auto Loan Account human-resource networks",num: 83042,date: new Date("2018-09-06T07:01:18.218Z"),array: [],obj: {}},48512,new Date("2018-09-06T11:59:09.872Z"),"matrix Coordinator Mandatory",[new Date("2018-09-06T19:55:13.991Z"),42553],"Rand",53418,{_id: 20340,str: "exploit transmitter",num: 63964,date: new Date("2018-09-06T12:39:18.865Z"),obj: {_id: 20341,str: "SAS Cross-group",num: 76630,array: [{_id: 20342,num: 6828,date: new Date("2018-09-06T17:47:43.236Z"),array: []}],obj: {}}},new Date("2018-09-06T00:36:10.701Z"),[13862],"online Marketing",[],new Date("2018-09-06T17:18:30.681Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20343,date: new Date("2018-09-06T12:20:38.357Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20344,str: "synergy Chair",num: 29566,date: new Date("2018-09-06T10:00:58.246Z"),array: [57063,87115,60722,new Date("2018-09-06T12:28:04.545Z"),new Date("2018-09-06T06:01:33.253Z"),"Hungary contextually-based New Mexico","Cambridgeshire Uganda Gorgeous",new Date("2018-09-06T18:15:29.062Z"),{_id: 20345,str: "networks",num: 81284,date: new Date("2018-09-06T10:56:48.557Z"),array: [],obj: {_id: 20346,str: "Buckinghamshire Concrete",num: 93773,array: []}},"hierarchy Consultant",[new Date("2018-09-06T14:04:06.743Z"),59126,{_id: 20347,str: "Computers Representative",num: 44976,date: new Date("2018-09-06T10:44:52.009Z"),array: [],obj: {}},new Date("2018-09-06T14:05:03.783Z")]],obj: {_id: 20348,date: new Date("2018-09-06T19:14:21.259Z")}});
    },

    function(coll) {
        return coll.insert({_id: 20349,str: "Frozen",num: 53085,date: new Date("2018-09-06T05:54:50.061Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20350,str: "bypass Checking Account",num: 36730,date: new Date("2018-09-06T17:10:00.374Z"),array: [],obj: {_id: 20351,str: "online Bedfordshire",num: 35931,array: [new Date("2018-09-06T03:57:20.078Z"),new Date("2018-09-06T17:35:33.831Z"),33171,62266,"asynchronous","Chicken Maryland Investment Account",[],"networks",{_id: 20352,str: "Producer Bedfordshire Clothing",num: 98828,date: new Date("2018-09-05T23:27:57.019Z"),array: [96483]},new Date("2018-09-06T11:47:47.504Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20353,str: "challenge withdrawal Analyst",num: 91208,date: new Date("2018-09-05T22:33:45.437Z"),array: ["Credit Card Account",new Date("2018-09-06T02:23:46.755Z"),30948,{_id: 20354,str: "Customer Refined Wooden Table Cotton",date: new Date("2018-09-06T16:27:22.847Z"),array: [],obj: {_id: 20355,str: "e-enable solid state Personal Loan Account",num: 66759,array: [[]],obj: {}}},new Date("2018-09-06T06:42:20.568Z"),36005,"Texas Locks deploy",new Date("2018-09-06T01:42:17.218Z"),33586,new Date("2018-09-05T20:56:56.091Z"),39481],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20356,str: "Table",num: 60596,date: new Date("2018-09-06T14:50:35.376Z"),array: [24495,"models withdrawal extensible",new Date("2018-09-06T04:15:12.176Z"),"bandwidth-monitored",[],11261,"artificial intelligence",20573,{_id: 20357,str: "Dynamic",num: 65056,date: new Date("2018-09-06T13:06:48.213Z"),array: [new Date("2018-09-05T23:20:50.389Z"),new Date("2018-09-06T14:17:49.861Z")],obj: {}},{_id: 20358,str: "Intelligent Island",date: new Date("2018-09-06T07:08:47.781Z"),obj: {_id: 20359,str: "Plains Rustic Concrete Tuna Producer",num: 2912,date: new Date("2018-09-05T21:42:02.932Z"),array: [],obj: {}}},51876,{_id: 20360,str: "Coordinator firewall Ohio",num: 64194},new Date("2018-09-06T14:08:33.207Z"),"copy process improvement"],obj: {_id: 20361,num: 98491,date: new Date("2018-09-05T21:24:22.790Z"),array: ["responsive Harbor Cambridgeshire"],obj: {_id: 20362,str: "Beauty payment Gorgeous Steel Cheese",num: 60266,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20363,str: "Communications quantifying",date: new Date("2018-09-06T18:16:08.219Z"),array: [],obj: {_id: 20364,str: "programming application Cotton",num: 27779,date: new Date("2018-09-06T12:41:22.825Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20365,str: "Movies Small",num: 74413,date: new Date("2018-09-06T08:39:26.413Z"),array: [],obj: {_id: 20366,str: "blue drive",num: 95779,date: new Date("2018-09-06T04:42:27.504Z"),array: [new Date("2018-09-06T18:14:52.166Z"),14481,"Money Market Account India",new Date("2018-09-06T17:15:42.633Z"),3692,"hub leverage Solomon Islands Dollar","seamless generate moratorium",[[65037]],"Unbranded",{_id: 20367,str: "incentivize protocol",num: 74869,date: new Date("2018-09-06T15:02:01.794Z"),array: [],obj: {}},[new Date("2018-09-05T21:08:23.661Z"),new Date("2018-09-06T03:20:56.784Z")],"Agent",{_id: 20368,num: 37748,date: new Date("2018-09-06T07:08:57.994Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 20369,str: "transmitter Tasty Mississippi",date: new Date("2018-09-06T03:25:28.537Z"),array: [48728,"Advanced","bandwidth killer",{_id: 20370,num: 35337,date: new Date("2018-09-06T10:30:35.755Z"),array: [],obj: {_id: 20371,str: "matrices withdrawal Infrastructure",num: 22114,date: new Date("2018-09-06T08:00:11.468Z"),array: [95409,new Date("2018-09-06T08:26:24.560Z"),[]]}},new Date("2018-09-06T11:16:29.161Z"),[],"5th generation",new Date("2018-09-06T07:40:15.009Z"),new Date("2018-09-05T22:53:15.408Z"),{_id: 20372,str: "salmon 24/7 Tasty Frozen Car",num: 21496,date: new Date("2018-09-06T13:00:37.860Z"),array: [],obj: {}}],obj: {_id: 20373,str: "Cambridgeshire Health",num: 64824,date: new Date("2018-09-06T17:16:25.144Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20374,str: "parsing parse",num: 1025,date: new Date("2018-09-06T05:54:13.354Z"),array: [],obj: {_id: 20375,str: "Pants Rustic Plastic Hat",num: 23788,date: new Date("2018-09-06T18:39:29.885Z"),array: [new Date("2018-09-06T03:38:32.607Z"),"envisioneer Checking Account",30664,32594,"expedite Analyst",new Date("2018-09-06T01:48:54.824Z"),new Date("2018-09-06T12:44:34.773Z"),[new Date("2018-09-06T07:19:35.154Z"),"Intranet",99412,{_id: 20376,str: "Distributed",num: 67357,array: [],obj: {_id: 20377,str: "Buckinghamshire card",num: 16066,date: new Date("2018-09-06T03:56:52.495Z"),array: [{_id: 20378,str: "withdrawal",num: 14749,obj: {}}],obj: {}}},"dynamic markets",[]],73247,new Date("2018-09-05T21:25:20.740Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 20379,str: "solid state Customizable",num: 7411,date: new Date("2018-09-06T17:57:51.295Z"),array: [41635,"innovative",[],new Date("2018-09-06T06:22:53.161Z"),"withdrawal standardization",{_id: 20380,str: "bluetooth web-enabled Specialist",date: new Date("2018-09-06T03:34:14.050Z"),array: [],obj: {_id: 20381,num: 11361,date: new Date("2018-09-06T04:15:14.458Z"),array: [],obj: {}}},new Date("2018-09-06T14:56:26.269Z"),new Date("2018-09-06T04:53:44.806Z"),38521,99932,"Upgradable"]});
    },

    function(coll) {
        return coll.insert({_id: 20382,str: "digital",num: 32252,date: new Date("2018-09-06T13:33:48.541Z"),array: ["Intelligent Cotton Shoes Michigan online",[],13000,new Date("2018-09-06T12:29:05.337Z"),new Date("2018-09-06T19:27:26.108Z"),{_id: 20383,str: "Fresh",num: 29477,date: new Date("2018-09-06T12:19:54.237Z"),array: ["Soap Connecticut Incredible"],obj: {}},59624,"Developer Unbranded Plastic Hat","Road microchip",13685,new Date("2018-09-06T13:59:53.467Z"),[],41282,[new Date("2018-09-06T12:09:17.143Z")]],obj: {_id: 20384,num: 63166,date: new Date("2018-09-06T18:28:15.146Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20385,num: 21335,date: new Date("2018-09-06T14:14:04.210Z"),array: [new Date("2018-09-06T06:54:47.502Z"),31505,67251,{_id: 20386,str: "Steel TCP Generic",num: 33390,date: new Date("2018-09-06T11:59:26.880Z"),array: [],obj: {}},"Solutions",new Date("2018-09-06T12:40:40.394Z"),{_id: 20387,str: "matrix",date: new Date("2018-09-06T15:26:38.565Z"),obj: {_id: 20388,num: 32419,date: new Date("2018-09-06T09:22:10.440Z"),array: [],obj: {_id: 20389,str: "Gorgeous transmitting Small"}}},89064,[new Date("2018-09-06T07:29:41.724Z"),"Beauty Vermont"],60445,85386,"open-source Orchestrator"],obj: {_id: 20390,str: "deposit Communications mission-critical",num: 15061,array: ["process improvement methodologies payment"],obj: {_id: 20391,str: "enable Home Bolivar Fuerte",num: 3777,date: new Date("2018-09-06T00:01:57.121Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 20392,str: "disintermediate Profit-focused",num: 14912,date: new Date("2018-09-05T22:34:49.875Z"),array: [],obj: {_id: 20393,str: "withdrawal",num: 63220,date: new Date("2018-09-06T17:23:13.977Z"),array: [99244,"Angola Outdoors toolset",46948,new Date("2018-09-06T12:40:19.582Z"),new Date("2018-09-06T14:35:13.100Z"),"Pakistan Licensed",[new Date("2018-09-06T06:44:51.071Z"),99922,{_id: 20394,str: "Cross-group",date: new Date("2018-09-06T18:35:16.520Z"),array: [],obj: {}},new Date("2018-09-06T01:17:59.978Z"),2628],"Baby",77861],obj: {_id: 20395,str: "scale",num: 82103,date: new Date("2018-09-06T19:54:07.934Z"),array: [{_id: 20396,num: 69206,date: new Date("2018-09-06T14:32:39.328Z"),array: ["Hryvnia Incredible",new Date("2018-09-06T09:10:19.096Z")],obj: {_id: 20397,num: 3726}},[],["Avon"],{_id: 20398,str: "Metal local area network Sharable",obj: {}},89134],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20399,str: "Unbranded Concrete Keyboard User-friendly fuchsia",num: 86736,date: new Date("2018-09-06T10:45:59.773Z"),array: [{_id: 20400,str: "microchip bus",num: 60440,date: new Date("2018-09-06T03:10:41.534Z"),array: [],obj: {}},new Date("2018-09-05T22:05:19.708Z"),"Cambridgeshire 1080p",[new Date("2018-09-05T22:39:22.199Z"),12785,"Mobility synergistic",[],"Fully-configurable support",43551,new Date("2018-09-06T02:39:56.543Z"),53779,{_id: 20401,str: "Facilitator XSS",num: 45030,array: [],obj: {}}],new Date("2018-09-06T04:04:44.043Z"),new Date("2018-09-06T13:14:23.220Z"),{_id: 20402,str: "programming redefine",num: 39549,date: new Date("2018-09-05T22:29:59.322Z"),array: [[]]},37416],obj: {_id: 20403,obj: {_id: 20404,date: new Date("2018-09-06T07:19:21.147Z"),array: [{_id: 20405,str: "copy hack",date: new Date("2018-09-06T06:46:39.780Z"),array: [],obj: {}}],obj: {_id: 20406,str: "withdrawal Delaware",num: 976,obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 20407,num: 99140,date: new Date("2018-09-06T15:28:48.236Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20408,str: "SMTP",num: 57937,date: new Date("2018-09-06T17:08:05.410Z"),array: ["Rubber overriding Plastic",new Date("2018-09-05T19:55:53.023Z"),{_id: 20409,str: "Lead",num: 24489,date: new Date("2018-09-05T22:39:28.678Z"),array: [],obj: {}},60063,2237,"Saudi Riyal Plastic",new Date("2018-09-06T18:39:26.855Z"),new Date("2018-09-05T21:31:41.665Z"),78362,[],new Date("2018-09-05T20:33:20.272Z"),{_id: 20410,str: "Mexico",num: 16491,array: [25017]},{_id: 20411,num: 59106,array: ["Granite",[new Date("2018-09-06T18:41:06.658Z")],[],"Tennessee",{_id: 20412,str: "monitor reboot",num: 39602,date: new Date("2018-09-06T19:07:57.885Z"),obj: {_id: 20413,str: "Configurable",date: new Date("2018-09-06T18:11:44.478Z"),obj: {}}},34856],obj: {_id: 20414,date: new Date("2018-09-06T14:07:23.199Z")}}],obj: {_id: 20415,str: "Buckinghamshire Grocery AGP",num: 78715,date: new Date("2018-09-06T01:31:22.403Z"),array: [],obj: {_id: 20416,num: 13978,date: new Date("2018-09-06T05:16:46.588Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20417,str: "Dynamic Group payment",num: 59659,date: new Date("2018-09-06T12:01:41.580Z"),array: ["Factors forecast","Won",48806,new Date("2018-09-05T22:43:30.677Z"),"Infrastructure Fantastic Granite Bike violet",new Date("2018-09-06T11:49:19.704Z"),{_id: 20418,str: "monitor Multi-lateral",date: new Date("2018-09-05T23:18:29.311Z"),array: [],obj: {}},82371,39678,{_id: 20419,str: "Fort",num: 93471,date: new Date("2018-09-06T15:13:23.635Z")},[new Date("2018-09-06T18:38:41.197Z"),{_id: 20420,str: "RAM",array: [],obj: {}}],new Date("2018-09-06T03:43:22.547Z"),"Ouguiya Rand Namibia Dollar",new Date("2018-09-05T23:46:48.961Z"),[19467]]});
    },

    function(coll) {
        return coll.insert({_id: 20421,str: "scale deposit Beauty",num: 34008,date: new Date("2018-09-06T03:32:40.827Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20422,str: "Car",num: 19118,array: [],obj: {_id: 20423,str: "Engineer",num: 52440,date: new Date("2018-09-06T14:22:44.769Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20424,str: "Practical",num: 39389,date: new Date("2018-09-06T03:01:53.928Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 20425,str: "Computers",num: 49841,date: new Date("2018-09-05T21:30:42.454Z"),array: [new Date("2018-09-06T16:30:32.995Z"),91167,[],97091,"parsing","Pants Rustic Streamlined",67436,new Date("2018-09-06T12:58:17.243Z"),"silver content",{_id: 20426,str: "Wyoming",num: 33984,date: new Date("2018-09-06T10:12:26.781Z"),obj: {}},"International",{_id: 20427,num: 1378,date: new Date("2018-09-05T21:49:38.031Z"),array: []}],obj: {_id: 20428,date: new Date("2018-09-06T06:13:20.074Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20429,str: "TCP interfaces",num: 64215,array: [22158,new Date("2018-09-06T02:46:46.273Z"),"French Polynesia",new Date("2018-09-06T03:06:31.588Z"),"THX transmitting",["drive Arizona",new Date("2018-09-06T06:57:14.813Z"),45260],{_id: 20430,str: "invoice",num: 56472,date: new Date("2018-09-06T10:43:00.709Z"),array: [[],[],61458,"backing up Rubber",93197],obj: {_id: 20431,str: "Outdoors orchestrate Computer",num: 29394,date: new Date("2018-09-06T02:46:31.034Z"),obj: {}}},"Car implementation input",[]],obj: {_id: 20432,num: 18868,date: new Date("2018-09-05T22:55:01.971Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20433,num: 29541,date: new Date("2018-09-06T17:42:52.441Z"),array: [],obj: {_id: 20434,str: "Concrete Home Loan Account cross-platform",num: 80261,date: new Date("2018-09-06T05:37:08.579Z"),array: [[],{_id: 20435,str: "transmitter",num: 11008,date: new Date("2018-09-05T23:34:33.029Z"),array: [],obj: {}},"attitude-oriented",{_id: 20436,str: "SSL",num: 93741},"Egypt Sleek Mauritania",47563,new Date("2018-09-06T13:48:23.870Z"),new Date("2018-09-06T19:50:47.107Z"),82896,44915],obj: {_id: 20437,str: "override markets",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20438,str: "Ranch Generic Soft Soap Accountability",num: 50550,date: new Date("2018-09-06T04:25:46.099Z"),obj: {_id: 20439,str: "Intelligent Berkshire Sports",num: 47969,date: new Date("2018-09-06T05:26:33.065Z"),array: [new Date("2018-09-06T03:35:11.280Z"),21047,"system Handmade Granite Table Designer",67629,84695,"Music Kids",new Date("2018-09-06T17:21:30.210Z"),new Date("2018-09-06T14:33:21.028Z"),new Date("2018-09-06T14:45:19.750Z"),[],28464,"SMTP"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20440,str: "ADP Granite",num: 95573,date: new Date("2018-09-06T04:00:17.063Z"),array: ["Pizza Solutions",{_id: 20441,str: "IB microchip Auto Loan Account",num: 91557,date: new Date("2018-09-06T14:21:44.702Z"),array: [],obj: {_id: 20442,str: "portal flexibility Missouri",num: 29489,array: [new Date("2018-09-06T06:12:39.571Z"),"empower withdrawal portals",64099,"productize withdrawal"],obj: {}}},"Cotton Aruba",43897,830,new Date("2018-09-06T10:46:13.641Z"),53745,new Date("2018-09-06T09:21:24.837Z"),66890,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20443,num: 59251,date: new Date("2018-09-06T18:48:05.704Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20444,str: "Program",num: 75553,date: new Date("2018-09-05T22:58:39.795Z"),array: [new Date("2018-09-06T18:31:22.752Z"),"index",new Date("2018-09-06T13:52:18.707Z"),9319,28731,new Date("2018-09-06T08:35:46.924Z"),[],{_id: 20445,str: "Oregon",num: 68801,date: new Date("2018-09-05T23:15:04.284Z"),array: [{_id: 20446,str: "Soft Centers programming",num: 37181,date: new Date("2018-09-06T04:57:54.004Z"),array: [],obj: {_id: 20447,str: "XSS",date: new Date("2018-09-06T12:30:54.054Z"),obj: {}}},81696,"Representative Future world-class",{_id: 20448,num: 15482,obj: {_id: 20449,num: 74117,date: new Date("2018-09-06T14:02:59.956Z"),array: ["withdrawal Mouse Avon",new Date("2018-09-06T00:54:59.264Z")]}},50744,[{_id: 20450,str: "Liberia Division Direct",num: 425,obj: {}}],{_id: 20451,array: []}]},new Date("2018-09-06T05:14:13.528Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20452,str: "PCI",num: 12190,date: new Date("2018-09-05T22:24:11.941Z"),array: ["Research",95322,new Date("2018-09-06T18:15:11.944Z"),"mobile",559,58406,63268,new Date("2018-09-06T07:39:19.773Z"),"Rustic orchid","invoice",{_id: 20453,str: "backing up Division contextually-based",num: 70352,date: new Date("2018-09-06T03:40:37.725Z"),array: [],obj: {_id: 20454,str: "SCSI Home Loan Account Fantastic Concrete Bike",num: 17740,date: new Date("2018-09-06T09:36:46.765Z"),array: ["maroon Buckinghamshire HTTP",[],{_id: 20455,str: "navigating Cotton",obj: {}},31970,"Drives bus",new Date("2018-09-06T06:31:21.577Z")],obj: {_id: 20456,date: new Date("2018-09-06T07:09:18.371Z"),array: [],obj: {}}}}],obj: {_id: 20457,num: 35717,array: [{_id: 20458,str: "Virgin Islands, British",num: 48203,date: new Date("2018-09-06T11:50:00.174Z"),array: []},new Date("2018-09-06T09:55:09.348Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20459,str: "Cotton Incredible magnetic",num: 49825,date: new Date("2018-09-06T08:11:53.553Z"),array: [],obj: {_id: 20460,str: "Cambridgeshire",num: 81072,date: new Date("2018-09-06T14:48:11.972Z"),array: [21944,"Jewelery Squares middleware",new Date("2018-09-05T21:28:00.285Z"),"encoding Metrics",new Date("2018-09-05T22:17:56.342Z"),36087,new Date("2018-09-06T00:02:07.140Z"),17679,[],44426,"Bike Czech Republic","Small panel"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20461,str: "green",num: 12314,date: new Date("2018-09-06T05:43:06.686Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20462,str: "Paradigm auxiliary",num: 48884,date: new Date("2018-09-06T04:14:56.380Z"),array: [{_id: 20463,str: "Creative copy Generic Steel Ball",num: 89973,date: new Date("2018-09-06T12:25:06.979Z"),array: [],obj: {}},"technologies Soft",92161,new Date("2018-09-05T20:48:21.565Z"),"Implementation",69156,[],new Date("2018-09-06T12:07:31.276Z"),"bus"],obj: {_id: 20464,str: "B2B Practical",num: 47599,date: new Date("2018-09-06T18:41:50.258Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20465,str: "Movies hacking THX",num: 45296,date: new Date("2018-09-06T17:12:56.669Z"),array: ["AGP Keyboard",new Date("2018-09-06T07:14:52.293Z"),new Date("2018-09-05T23:48:51.333Z"),"plug-and-play Pre-emptive deposit",{_id: 20466,str: "Home circuit",date: new Date("2018-09-06T07:52:39.617Z"),obj: {_id: 20467,str: "Regional brand payment",num: 13444,date: new Date("2018-09-06T13:28:34.177Z"),array: [],obj: {}}},60550,54874,new Date("2018-09-06T15:24:37.632Z"),"transmitting",[],[86727]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20468,str: "protocol",num: 18131,date: new Date("2018-09-06T06:32:37.806Z"),array: [],obj: {_id: 20469,str: "Guam Group array",num: 43212,array: [new Date("2018-09-06T03:22:02.059Z"),new Date("2018-09-06T08:56:10.198Z"),"Soap","Games",57246,"Kids moratorium next-generation",[new Date("2018-09-05T23:16:18.284Z")],{_id: 20470,num: 3043,date: new Date("2018-09-06T01:57:17.745Z"),array: [],obj: {}},50476,81928,{_id: 20471,str: "Awesome Tanzanian Shilling executive",date: new Date("2018-09-06T19:05:42.650Z"),array: [],obj: {}},"lime Locks",[new Date("2018-09-06T07:03:18.535Z")],{_id: 20472,str: "Bacon Concrete International",num: 58672,date: new Date("2018-09-06T04:32:07.562Z"),obj: {_id: 20473,num: 82220,array: [[]]}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20474,str: "SMS Plastic wireless",date: new Date("2018-09-06T01:48:38.871Z"),array: ["Chief Rustic Direct",47929,96677,new Date("2018-09-06T09:51:33.411Z"),53285,new Date("2018-09-05T20:21:45.655Z"),"connecting","Books",68615,"indigo",{_id: 20475,str: "Home Loan Account Auto Loan Account De-engineered",num: 75257,date: new Date("2018-09-06T00:50:52.632Z"),array: [],obj: {}},"port Rubber Licensed","Lempira array"],obj: {_id: 20476,str: "disintermediate Court",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20477,str: "back up Technician PNG",num: 66779,date: new Date("2018-09-06T15:45:45.040Z"),array: ["whiteboard Keyboard",5179,99428,"Assistant Manager best-of-breed",new Date("2018-09-06T01:11:48.003Z"),new Date("2018-09-06T12:56:36.866Z"),new Date("2018-09-06T09:30:30.439Z"),new Date("2018-09-06T11:07:40.947Z"),"Outdoors",3085,66500],obj: {_id: 20478,str: "Intelligent Soft Computer",num: 61307,date: new Date("2018-09-06T00:00:55.795Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20479,str: "program Tactics",num: 41169,date: new Date("2018-09-06T02:41:47.783Z"),array: ["Refined THX attitude",new Date("2018-09-06T19:34:51.727Z"),45565,{_id: 20480,str: "PNG",date: new Date("2018-09-06T05:00:18.894Z"),array: [],obj: {}},[],42964,new Date("2018-09-06T11:11:27.320Z"),"Personal Loan Account Fantastic Cotton Tuna","tan",{_id: 20481,str: "Credit Card Account connecting Generic",num: 66943,date: new Date("2018-09-06T10:09:29.589Z")},new Date("2018-09-06T17:14:58.192Z"),27720,"Future circuit"],obj: {_id: 20482,str: "Rustic action-items application",num: 82654,date: new Date("2018-09-06T13:01:56.302Z"),obj: {_id: 20483,num: 38730,array: [88671,new Date("2018-09-06T00:49:41.369Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20484,str: "compressing multimedia",num: 40912,array: [],obj: {_id: 20485,str: "Marketing invoice",num: 57953,date: new Date("2018-09-06T05:45:21.510Z"),array: ["systematic",new Date("2018-09-05T22:06:30.642Z"),67303,new Date("2018-09-05T20:09:54.956Z"),{_id: 20486,str: "payment",num: 23091,date: new Date("2018-09-06T18:23:37.900Z"),array: [],obj: {_id: 20487,date: new Date("2018-09-06T14:52:29.665Z"),array: [51540],obj: {}}},"Philippine Peso virtual",70914,"navigating Intranet Personal Loan Account",{_id: 20488,str: "Gorgeous Granite Shoes",num: 13073,date: new Date("2018-09-06T03:00:46.943Z"),obj: {}},new Date("2018-09-06T19:37:11.950Z"),"Plain Street Configuration",[],94987,new Date("2018-09-06T13:27:48.046Z"),[new Date("2018-09-06T08:58:21.245Z")]],obj: {_id: 20489,str: "neural scalable",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 20490,str: "Ball",num: 97518,date: new Date("2018-09-06T13:57:49.296Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20491,num: 14927,date: new Date("2018-09-06T00:54:16.547Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20492,str: "e-services Polarised upward-trending",num: 76307,date: new Date("2018-09-06T05:15:39.102Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 20493,str: "Mouse",num: 36055,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20494,str: "turquoise",date: new Date("2018-09-05T20:55:19.999Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20495,str: "Global Quetzal",num: 72748,date: new Date("2018-09-05T22:33:00.674Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20496,num: 45461,date: new Date("2018-09-05T20:24:46.312Z"),array: [new Date("2018-09-06T17:46:40.694Z"),new Date("2018-09-05T20:42:09.640Z"),97186,"invoice cross-platform Internal",[],"Swedish Krona Concrete",new Date("2018-09-06T08:34:11.664Z"),"payment"],obj: {_id: 20497,str: "Global Computer",num: 53375,date: new Date("2018-09-06T03:07:38.088Z"),array: [],obj: {_id: 20498,str: "driver deliver grey",num: 13518,date: new Date("2018-09-06T04:44:53.503Z"),array: [2118,96559,["Triple-buffered port turn-key","capability Music lavender"],{_id: 20499,str: "compress Kazakhstan",num: 90547,array: []},{_id: 20500,str: "upward-trending",num: 13035,date: new Date("2018-09-06T03:52:56.249Z")}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20501,str: "collaborative Generic Fantastic",num: 25215,date: new Date("2018-09-06T00:05:51.170Z"),array: [],obj: {_id: 20502,str: "deposit",num: 29636,date: new Date("2018-09-06T03:10:16.136Z"),obj: {_id: 20503,str: "eyeballs Bedfordshire primary",num: 56134,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 20504,str: "Forks online",num: 29217,date: new Date("2018-09-06T09:07:15.890Z"),array: [],obj: {_id: 20505,str: "Public-key Montana Checking Account",num: 81082,date: new Date("2018-09-06T14:48:57.984Z"),array: [],obj: {_id: 20506,str: "invoice index transmitter",num: 50937,array: ["object-oriented",{_id: 20507,date: new Date("2018-09-06T07:09:10.910Z")},new Date("2018-09-06T00:26:00.088Z"),new Date("2018-09-06T13:09:26.494Z"),"synergies Cheese Soft",91129,new Date("2018-09-06T04:04:02.408Z"),[{_id: 20508,str: "Forward Grocery COM",num: 86627,date: new Date("2018-09-06T02:00:42.934Z"),array: []},[18444]],[],7781,new Date("2018-09-06T19:00:31.553Z"),"approach"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20509,str: "parse Programmable firmware",num: 41217,date: new Date("2018-09-06T17:58:55.238Z"),array: [],obj: {_id: 20510,str: "Planner deliver secondary",num: 92499,date: new Date("2018-09-05T21:03:20.825Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20511,str: "magenta Concrete",num: 74049,date: new Date("2018-09-06T10:51:23.744Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20512,str: "fresh-thinking Alaska generate",num: 80319,date: new Date("2018-09-06T02:51:28.216Z"),obj: {_id: 20513,str: "help-desk",num: 63510,date: new Date("2018-09-06T08:02:50.588Z"),array: ["payment Business-focused",new Date("2018-09-06T18:53:07.442Z"),"Chips",4094,new Date("2018-09-06T14:24:07.557Z"),76557,[],new Date("2018-09-06T10:26:39.360Z"),{_id: 20514,str: "compressing Toys Auto Loan Account",date: new Date("2018-09-06T06:55:53.869Z"),array: ["Multi-layered Quality copying"],obj: {}},48707,"killer Synergistic Branding",{_id: 20515,date: new Date("2018-09-05T22:29:36.889Z"),array: [],obj: {_id: 20516,str: "Japan compressing Bike",num: 8349,obj: {_id: 20517,num: 67720,obj: {}}}},[],23833],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20518,str: "Investment Account leverage Administrator",num: 2192,date: new Date("2018-09-05T22:32:18.441Z"),array: ["payment",2264,new Date("2018-09-06T00:33:09.116Z"),36028,new Date("2018-09-06T05:56:35.819Z"),[],[],"Minnesota",91521,new Date("2018-09-06T15:13:37.683Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20519,str: "program Intelligent Steel Table",num: 20920,date: new Date("2018-09-06T07:37:32.416Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20520,str: "deposit CSS",num: 54176,date: new Date("2018-09-06T19:05:52.440Z"),array: [],obj: {_id: 20521,str: "Saint Helena Pound",num: 98687,date: new Date("2018-09-06T12:10:20.969Z"),array: [[],"optical Sausages","Mobility",71539,new Date("2018-09-06T09:22:04.790Z"),[39896],{_id: 20522,num: 37267,array: [],obj: {_id: 20523,str: "clicks-and-mortar",date: new Date("2018-09-06T02:10:49.301Z"),array: []}},"Total",new Date("2018-09-06T01:33:44.362Z"),["transmitting De-engineered Designer",90110],"Corporate hacking",new Date("2018-09-06T18:21:10.766Z"),[new Date("2018-09-06T10:02:34.944Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20524,str: "Table",num: 80902,date: new Date("2018-09-06T01:17:51.174Z"),array: [],obj: {_id: 20525,str: "Tanzanian Shilling Kansas convergence",num: 88370,date: new Date("2018-09-05T23:17:17.245Z")}});
    },

    function(coll) {
        return coll.insert({_id: 20526,num: 2674,date: new Date("2018-09-06T11:19:51.657Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20527,str: "optimal",num: 66727,date: new Date("2018-09-06T06:35:38.075Z"),obj: {_id: 20528,str: "Checking Account Industrial Loop",num: 70550,date: new Date("2018-09-06T17:50:32.189Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20529,str: "Car Ohio",num: 20958,date: new Date("2018-09-06T17:29:04.830Z"),array: [],obj: {_id: 20530,str: "Granite bus",num: 83221,date: new Date("2018-09-06T12:51:46.607Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20531,num: 62714,date: new Date("2018-09-06T04:21:57.891Z"),array: [],obj: {_id: 20532,str: "Generic Saudi Riyal",num: 49506,date: new Date("2018-09-05T20:41:24.694Z"),array: [6808,new Date("2018-09-06T19:27:53.980Z"),"Planner","Forward","Checking Account Principal",{_id: 20533,str: "New York recontextualize",num: 34616,date: new Date("2018-09-06T18:29:55.866Z"),obj: {}},new Date("2018-09-06T09:08:57.160Z"),78025,new Date("2018-09-06T15:29:39.605Z"),[85940],new Date("2018-09-06T16:21:49.574Z"),16863,"Architect Algerian Dinar Investment Account"],obj: {_id: 20534,str: "Fantastic Granite Computer facilitate Analyst",date: new Date("2018-09-06T00:39:56.547Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20535,str: "turquoise Handcrafted system",num: 31646,date: new Date("2018-09-06T11:13:13.039Z"),array: [new Date("2018-09-05T23:37:33.628Z"),[],new Date("2018-09-06T16:54:14.170Z"),74785,"Jewelery Manager payment",80283,"Configuration payment",76062,{_id: 20536,num: 76159,date: new Date("2018-09-06T18:53:31.082Z"),array: [[],{_id: 20537,num: 23139,date: new Date("2018-09-06T15:22:46.412Z"),array: [new Date("2018-09-06T02:47:28.498Z")],obj: {_id: 20538,num: 66013,obj: {_id: 20539,str: "quantifying Boliviano Mvdol",date: new Date("2018-09-06T01:26:30.921Z"),obj: {}}}}],obj: {_id: 20540,num: 35957,date: new Date("2018-09-06T18:36:15.861Z"),array: []}},{_id: 20541,str: "payment District",num: 38737,array: [new Date("2018-09-06T06:35:55.959Z")]},1801,"deposit Accounts Gorgeous Concrete Tuna","system action-items"]});
    },

    function(coll) {
        return coll.insert({_id: 20542,str: "Forward Ergonomic Frozen Chicken connect",num: 28454,date: new Date("2018-09-06T16:45:38.601Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 20543,str: "black",num: 92580,date: new Date("2018-09-06T07:43:39.338Z"),array: [[],76863,new Date("2018-09-06T11:28:52.450Z"),new Date("2018-09-06T17:55:00.200Z"),"Rustic engineer",[new Date("2018-09-05T23:28:07.712Z")],34446,{_id: 20544,str: "orchid GB",num: 33253,date: new Date("2018-09-06T19:46:03.248Z"),array: [36049,"efficient customized tan"],obj: {_id: 20545,str: "primary regional Anguilla",date: new Date("2018-09-06T18:26:51.687Z"),array: []}},"e-markets intranet",new Date("2018-09-06T13:24:56.859Z"),58633,"innovative navigating plum","IB Guyana Dollar initiatives"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20546,str: "copying Refined Rubber Chicken ADP",num: 52386,date: new Date("2018-09-06T07:59:12.470Z"),array: [{_id: 20547,num: 52249},new Date("2018-09-06T18:54:25.047Z"),"Checking Account Down-sized applications",new Date("2018-09-05T20:45:53.775Z"),new Date("2018-09-06T16:42:29.607Z"),"Fresh mindshare",85324,96215,{_id: 20548,str: "Mobility",num: 20997,date: new Date("2018-09-06T16:20:40.000Z"),array: [],obj: {_id: 20549,str: "rich",num: 19445,date: new Date("2018-09-06T05:31:29.808Z"),array: [[],new Date("2018-09-05T21:35:48.666Z"),new Date("2018-09-06T00:05:06.705Z")],obj: {}}}],obj: {_id: 20550,str: "moratorium",date: new Date("2018-09-06T00:10:33.896Z"),array: [36548,66328,{_id: 20551,array: []},["indexing"],"bandwidth input"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20552,str: "solid state",num: 70087,date: new Date("2018-09-06T05:22:35.888Z"),obj: {_id: 20553,str: "Silver Steel wireless",num: 91226,date: new Date("2018-09-05T23:11:24.842Z"),array: [],obj: {_id: 20554,num: 2276,date: new Date("2018-09-06T16:21:15.437Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20555,date: new Date("2018-09-06T05:56:23.110Z"),array: ["Handmade Steel Hat",new Date("2018-09-06T19:22:40.656Z"),97092,new Date("2018-09-06T08:05:14.119Z"),[new Date("2018-09-05T20:20:09.932Z")],"Bedfordshire payment Sausages",35495,56647,5658,"Investment Account",{_id: 20556,str: "compress",num: 4853,date: new Date("2018-09-06T07:11:15.393Z"),array: [{_id: 20557,str: "solid state",num: 35533,date: new Date("2018-09-06T11:56:15.854Z"),obj: {}},new Date("2018-09-06T01:40:34.369Z")],obj: {_id: 20558,str: "Sleek Chicken multi-state",num: 41898,date: new Date("2018-09-06T14:47:30.216Z"),array: []}},{_id: 20559,str: "Som Bacon Bedfordshire",num: 70439,date: new Date("2018-09-06T07:37:34.253Z"),array: [],obj: {}}],obj: {_id: 20560,str: "Incredible Concrete Hat",num: 649,date: new Date("2018-09-05T20:14:03.405Z")}});
    },

    function(coll) {
        return coll.insert({_id: 20561,str: "Garden GB generate",date: new Date("2018-09-06T03:58:36.804Z"),obj: {_id: 20562,str: "Quality",num: 80074,date: new Date("2018-09-06T19:00:26.144Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20563,str: "Metal",num: 59769,date: new Date("2018-09-05T21:59:24.414Z"),array: ["matrix Gibraltar",new Date("2018-09-06T09:25:53.793Z"),6693,new Date("2018-09-06T19:37:19.466Z"),"Fresh",31140,{_id: 20564,str: "Auto Loan Account Director",num: 10391,date: new Date("2018-09-06T07:28:47.599Z"),array: [],obj: {_id: 20565,str: "communities",num: 16620,array: [],obj: {}}},90405,[],new Date("2018-09-06T09:05:36.449Z"),[{_id: 20566,str: "Cedi",num: 12518,date: new Date("2018-09-05T20:58:12.647Z"),obj: {}},"bifurcated Shoes local area network","Chief Garden"],new Date("2018-09-05T22:35:17.882Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20567,str: "New Leu Spurs transmitter",num: 60459,date: new Date("2018-09-06T12:59:47.832Z"),array: [],obj: {_id: 20568,str: "compress Director",num: 1632,date: new Date("2018-09-05T21:52:34.900Z"),array: [15399,"Borders",new Date("2018-09-06T11:36:08.685Z"),32354,{_id: 20569,str: "Small Rubber Mouse circuit hacking",obj: {_id: 20570,num: 70994,date: new Date("2018-09-06T10:06:35.872Z"),array: [],obj: {}}},new Date("2018-09-06T16:32:16.007Z"),"visualize Synergistic Customer",new Date("2018-09-06T10:08:13.754Z"),42105,[],{_id: 20571,date: new Date("2018-09-06T08:40:19.038Z"),array: ["Outdoors USB open system",["real-time sky blue Strategist"]],obj: {}},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 20572,str: "target Gateway XSS",num: 85256,date: new Date("2018-09-05T22:27:46.345Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20573,str: "parsing maximize Liaison",num: 65156,date: new Date("2018-09-06T03:59:06.221Z"),array: [],obj: {_id: 20574,str: "Fresh bluetooth parsing",date: new Date("2018-09-06T02:13:47.705Z"),array: ["azure Sausages",new Date("2018-09-06T01:37:06.294Z"),{_id: 20575,str: "Borders Sports model",num: 85688,obj: {_id: 20576,array: []}},new Date("2018-09-06T00:42:52.237Z"),"quantify cutting-edge",52067,[55788,new Date("2018-09-06T18:40:24.503Z"),[52725,"Berkshire Forward Crest"]],"e-services quantifying Fantastic",new Date("2018-09-05T23:37:35.317Z"),new Date("2018-09-06T16:38:00.220Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20577,str: "homogeneous",num: 62143,date: new Date("2018-09-06T14:21:25.701Z"),array: [26936,79884,[new Date("2018-09-06T17:15:26.725Z")],new Date("2018-09-06T03:27:02.375Z"),"Outdoors Fish Garden","redundant",{_id: 20578,str: "extranet",num: 53219,date: new Date("2018-09-06T16:25:58.621Z"),array: [],obj: {}},[],"transform orchid",new Date("2018-09-06T03:33:33.608Z"),new Date("2018-09-06T10:24:48.243Z")],obj: {_id: 20579,str: "Dale scale Computers",num: 16585,date: new Date("2018-09-06T11:21:58.639Z"),array: [43141],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20580,str: "Morocco Beauty",num: 58472,date: new Date("2018-09-05T20:18:09.089Z"),array: [],obj: {_id: 20581,str: "architect",num: 56451,date: new Date("2018-09-06T01:10:53.163Z"),array: [],obj: {_id: 20582,str: "Honduras",num: 18076,date: new Date("2018-09-06T16:28:57.487Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20583,str: "deposit",date: new Date("2018-09-06T00:38:57.609Z"),array: [new Date("2018-09-06T07:54:42.694Z"),49895,"virtual Car brand","haptic Ergonomic Frozen Gloves",[new Date("2018-09-06T00:08:51.375Z"),[],58309],{_id: 20584,str: "Human mobile Configuration",num: 64023,date: new Date("2018-09-06T05:44:32.014Z"),array: [new Date("2018-09-05T20:39:25.253Z"),"hard drive product"],obj: {_id: 20585,str: "International Michigan Representative",num: 50830,date: new Date("2018-09-06T18:50:02.243Z"),array: [43242],obj: {}}},{_id: 20586,str: "port withdrawal Strategist",num: 58584,date: new Date("2018-09-06T03:35:53.564Z")},new Date("2018-09-06T11:03:47.726Z"),"Pizza",[],92654,{_id: 20587,num: 56444,array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20588,str: "Kentucky",num: 93741,date: new Date("2018-09-06T17:44:01.007Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20589,str: "portal Shirt transmit",num: 20941,date: new Date("2018-09-06T11:49:04.564Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20590,str: "Refined Plastic Hat Reunion Viaduct",num: 46040,date: new Date("2018-09-05T20:27:05.727Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20591,str: "Ports Sausages",num: 14488,date: new Date("2018-09-05T23:07:33.167Z"),array: [new Date("2018-09-06T15:51:17.424Z"),{_id: 20592,obj: {_id: 20593,str: "Virgin Islands, U.S. Mountains mobile",num: 60215,array: [],obj: {}}},51149,{_id: 20594,str: "PCI",num: 57244,date: new Date("2018-09-06T16:15:40.554Z"),array: [98004,"Handcrafted Steel Ball Yemeni Rial alarm","optical Home Loan Account mobile","deploy AGP bleeding-edge"],obj: {_id: 20595,str: "Generic Tuvalu",num: 35018,array: [],obj: {}}},new Date("2018-09-06T04:19:24.467Z"),[[],"out-of-the-box"],new Date("2018-09-06T17:01:07.130Z"),new Date("2018-09-05T22:32:54.191Z"),52235,89902,["parsing Handcrafted generate"],49636],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20596,date: new Date("2018-09-06T14:04:53.849Z"),array: [new Date("2018-09-06T04:37:42.586Z"),50832,"Extension complexity",["Minnesota Concrete",61747],new Date("2018-09-05T23:26:44.385Z"),12208,new Date("2018-09-06T02:06:59.986Z"),{_id: 20597,str: "compressing bus Moldovan Leu",num: 96456,date: new Date("2018-09-06T13:02:47.037Z"),array: [],obj: {}},"PNG",[25123,new Date("2018-09-06T19:23:05.360Z"),[[],{_id: 20598,str: "Cheese Quality",num: 52007,date: new Date("2018-09-06T03:53:36.029Z"),obj: {_id: 20599,str: "Legacy logistical",date: new Date("2018-09-05T23:02:02.692Z"),array: [],obj: {_id: 20600,str: "Chicken lavender",num: 61870,array: []}}}]],new Date("2018-09-06T18:57:58.360Z"),{_id: 20601,str: "indexing mission-critical",num: 82412,obj: {_id: 20602,date: new Date("2018-09-06T17:19:29.549Z"),array: ["Cambridgeshire",92876],obj: {}}},{_id: 20603,str: "Small",num: 69142,array: [new Date("2018-09-05T23:17:27.377Z"),"methodical"],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 20604,str: "Assurance",num: 93319,date: new Date("2018-09-06T02:44:20.359Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 20605,str: "Handcrafted Soft Soap New Mexico",num: 30818,date: new Date("2018-09-06T17:56:34.205Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20606,num: 27704,date: new Date("2018-09-06T18:58:15.976Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20607,str: "Credit Card Account Jewelery Central",num: 88469,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20608,str: "green",num: 15330,date: new Date("2018-09-06T05:05:54.261Z"),array: ["River",[new Date("2018-09-06T16:34:30.763Z"),98318],new Date("2018-09-06T14:14:21.220Z"),99510,"stable Gibraltar",{_id: 20609,num: 52955,date: new Date("2018-09-06T02:36:40.594Z"),array: [],obj: {}},"Avon synthesize Customer-focused","SDD content Fantastic Steel Bike",93086,new Date("2018-09-06T15:46:50.443Z"),57128]});
    },

    function(coll) {
        return coll.insert({_id: 20610,num: 23757,date: new Date("2018-09-06T02:11:16.648Z"),array: [20648,new Date("2018-09-05T23:31:21.383Z"),"Awesome Plastic Table hacking",57222,new Date("2018-09-06T02:39:00.414Z"),"Georgia",{_id: 20611,str: "lavender Borders",date: new Date("2018-09-05T23:20:45.515Z"),array: [[],76981,"Checking Account",[[],new Date("2018-09-06T00:36:29.009Z"),17026,{_id: 20612,str: "FTP PNG",num: 94879,array: [],obj: {}}]],obj: {}},new Date("2018-09-06T12:36:44.375Z"),{_id: 20613,str: "vertical invoice",num: 70715,date: new Date("2018-09-06T14:21:50.779Z"),array: ["Guarani Dynamic hub",42362]},88118],obj: {_id: 20614,str: "Incredible Frozen Pants Home",num: 49814,date: new Date("2018-09-06T00:02:18.535Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20615,num: 98394,date: new Date("2018-09-06T11:56:33.218Z"),array: [94944,new Date("2018-09-06T05:09:37.508Z"),"Equatorial Guinea","withdrawal Cambridgeshire",new Date("2018-09-05T23:20:26.314Z"),27940,[new Date("2018-09-06T14:10:40.802Z")],[],["Baby","Monaco",[],new Date("2018-09-06T10:27:25.948Z"),43360,{_id: 20616,str: "Union",date: new Date("2018-09-06T09:49:36.017Z"),array: [],obj: {}}],{_id: 20617,str: "SSL grey",num: 25075,array: []}],obj: {_id: 20618,num: 66732,date: new Date("2018-09-06T02:42:32.940Z"),array: [new Date("2018-09-06T12:13:50.904Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20619,str: "cross-media contingency",num: 37319,date: new Date("2018-09-05T21:48:25.591Z"),array: [[],new Date("2018-09-06T03:14:14.106Z"),1426,"Island Harbor",4877,"deposit Oregon Division",{_id: 20620,str: "Virginia",num: 6736,date: new Date("2018-09-06T11:25:42.910Z"),array: [],obj: {_id: 20621,str: "Digitized Licensed Investment Account",num: 82557,array: [new Date("2018-09-06T08:42:24.776Z")]}},97208,84745,"port Tanzanian Shilling",new Date("2018-09-05T23:40:23.655Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20622,str: "Integration",num: 86008,date: new Date("2018-09-06T06:20:06.993Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20623,num: 92733,date: new Date("2018-09-06T02:15:08.046Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20624,str: "wireless white B2B",num: 4809,date: new Date("2018-09-06T13:12:39.343Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20625,str: "Music",num: 11332,array: [new Date("2018-09-06T00:20:35.226Z"),"Tasty Steel Fish",24027,"Washington zero tolerance productize",{_id: 20626,str: "digital Ghana Investment Account",num: 26494,date: new Date("2018-09-06T01:27:00.604Z"),array: [93904,[],62945,[{_id: 20627,num: 26882,date: new Date("2018-09-06T09:26:33.323Z"),array: [],obj: {}},new Date("2018-09-06T12:08:01.605Z")],"bottom-line Credit Card Account",new Date("2018-09-06T18:54:37.063Z")],obj: {}},new Date("2018-09-06T06:29:20.179Z"),57288,{_id: 20628,str: "Auto Loan Account IB",num: 87335}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20629,str: "redundant optical",num: 14039,date: new Date("2018-09-06T12:27:35.672Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20630,str: "Gabon",num: 97216,date: new Date("2018-09-06T11:44:24.614Z"),array: [],obj: {_id: 20631,str: "JSON product primary",num: 78428,date: new Date("2018-09-06T00:11:47.137Z"),array: ["back-end application",10965,50445,new Date("2018-09-06T01:58:50.791Z"),"5th generation Rubber",10354,"forecast Small",new Date("2018-09-06T13:02:56.209Z")],obj: {_id: 20632,array: [[],new Date("2018-09-06T08:13:49.118Z"),["budgetary management Towels Automotive","connecting Chicken bypass",new Date("2018-09-06T02:55:26.376Z")],new Date("2018-09-05T22:00:00.056Z")],obj: {_id: 20633,str: "matrix",num: 11387,date: new Date("2018-09-06T14:23:15.953Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 20634,num: 36427,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20635,str: "Chips",date: new Date("2018-09-06T01:09:21.951Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 20636,str: "Generic Fresh Bacon",num: 24534,date: new Date("2018-09-06T04:50:18.649Z"),array: ["Ball","Germany","Concrete clear-thinking Dynamic",27481,new Date("2018-09-06T10:06:39.463Z"),[],"Isle Frozen",{_id: 20637,num: 78903,array: [new Date("2018-09-06T03:28:58.413Z"),new Date("2018-09-06T11:40:51.601Z"),64335,54469],obj: {_id: 20638,str: "Tasty Re-engineered demand-driven",num: 32495,date: new Date("2018-09-06T19:13:39.171Z"),array: [],obj: {_id: 20639,str: "Fantastic Metal Chips",num: 85809,date: new Date("2018-09-06T10:25:49.836Z")}}},{_id: 20640,str: "Analyst Berkshire",num: 54734,date: new Date("2018-09-06T04:18:08.703Z"),obj: {_id: 20641,str: "Borders Handcrafted generating",obj: {}}},"teal systemic reboot",[],5139],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20642,str: "withdrawal Awesome Frozen Gloves Agent",num: 9557,date: new Date("2018-09-06T06:03:12.631Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20643,str: "SSL Gloves",num: 50886});
    },

    function(coll) {
        return coll.insert({_id: 20644,str: "Sleek Wooden Car",num: 81150,array: [new Date("2018-09-06T07:29:56.762Z"),new Date("2018-09-06T13:40:48.640Z"),"Savings Account multimedia",new Date("2018-09-06T08:10:04.370Z"),38072,{_id: 20645,str: "Licensed Lock quantify",num: 54724,date: new Date("2018-09-06T04:52:05.857Z"),array: ["Response overriding"],obj: {_id: 20646,num: 31545,date: new Date("2018-09-06T03:26:58.619Z"),obj: {}}},83707,new Date("2018-09-06T04:47:48.215Z"),{_id: 20647,str: "digital",date: new Date("2018-09-06T15:17:26.437Z"),array: [[],"Cambridgeshire Rhode Island",16034,10458],obj: {_id: 20648,num: 50468,date: new Date("2018-09-06T05:26:56.597Z"),array: []}},"Rustic Fresh Hat bleeding-edge viral",83582,"value-added generating"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20649,str: "methodical Kuwait payment",num: 82882,date: new Date("2018-09-06T06:21:04.204Z"),array: [],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.num": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.num": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $map: {input: ["Decentralized"],as: 'guiseppe',in: { $divide: ['$$guiseppe','$num'] }} }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[{ $rtrim: {input: '$str',chars: "Cheese"} },'$obj.obj.obj.str'],88864] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Seychelles Rupee solution-oriented",v: false},{k: "Central firewall Movies",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "object-oriented Falkland Islands Pound",v: new Date("2018-09-06T13:40:27.363Z")}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["schemas Generic Frozen Table"]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [93728,9811,{ $ceil: '$obj.num' }],as: 'kole',cond: { $in: [{ $arrayToObject: [[{k: "leverage programming",v: '$obj.obj.date'}]] },{ $concatArrays: [[],["Polarised",'$str'],[],[],['$obj.obj.num']] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],6454] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$obj.str',17,11] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $concat: [{ $toString: { $arrayElemAt: [["Practical",{ $substrCP: ['$obj.obj.obj.str',10,11] },'$obj.obj.obj.str',"transmitter Crescent"],'$obj.obj.obj.num'] } }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $year: { $isoDayOfWeek: { $month: { $dayOfWeek: { $hour: { $week: { $second: { $dayOfMonth: { $dayOfWeek: { $isoWeek: { $dayOfYear: { $dateToString: {date: { $dateFromParts: {year: { $subtract: ['$num',43257] },day: { $mod: ['$obj.num',87024] },second: { $size: [[]] }} },format: "%V-%H-%m-%L",timezone: "Pacific/Chatham",onNull: "seize Specialist wireless"} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num',91416],in: { $floor: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T01:09:23.579Z",format: "%m-%%-%u-%j-%L-%L-%U-%M-%u-%z-%j"} } }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $isoWeekYear: { $year: { $millesecond: { $dateToParts: {date: { $dayOfWeek: { $month: { $minute: { $dateFromParts: {year: { $divide: [51610,29216] },day: { $abs: '$obj.obj.obj.num' },second: { $pow: [39367,50649] },timezone: "Europe/Belgrade"} } } } },iso8601: true} } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $divide: ['$num',89454] },isoWeek: { $exp: '$num' },isoDayOfWeek: { $sqrt: 84454 },hour: '$obj.num',millisecond: { $ceil: 56022 },timezone: "Antarctica/Rothera"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: '$str',chars: "transparent Gloves"} }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $isoDayOfWeek: { $minute: { $dayOfMonth: { $week: { $dateFromString: {dateString: "2018-09-06T10:07:49.893Z",format: "%L-%j-%G-%m-%H-%U-%Z",timezone: "Asia/Tomsk",onError: { $map: {input: ['$obj.num'],in: 16270} }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: '$str' } }],81794] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Gorgeous Wooden Hat programming Concrete",v: { $dayOfYear: { $month: { $isoWeek: { $isoDayOfWeek: { $hour: { $toDate: { $arrayElemAt: [['$obj.num',24372],11588] } } } } } } }},{k: "HDD",v: "Cayman Islands"},{k: "Licensed Rubber Towels Iran Investor",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $subtract: [81438,'$num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],58361] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[71628],31870] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],["Money Market Account Facilitator",{ $rtrim: { input: '$obj.obj.obj.str' } },'$obj.str'],['$obj.obj.num'],[],[69964,'$obj.obj.obj.num'],[]] } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "tangible Home Loan Account",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Senior Rhode Island",v: false},{k: "Avon open-source France",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num',63307,'$obj.obj.obj.num'],[{ $substrBytes: ['$obj.obj.str',17,17] },'$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $hour: { $second: { $isoWeek: { $dateToString: { date: new Date("2018-09-06T11:30:46.276Z") } } } } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $dateToString: { date: { $millesecond: { $dateFromString: {dateString: "2018-09-06T00:31:43.889Z",timezone: "US/Hawaii",onError: { $range: [2,12,9] },onNull: '$obj.obj.str'} } } } },"Avon Direct Falkland Islands (Malvinas)",'$obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toLower: '$obj.obj.str' },chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dayOfWeek: { $year: { $dateToParts: {date: { $month: { $isoWeekYear: { $isoDayOfWeek: { $dateToString: {date: '$obj.date',format: "%Z-%%-%V-%d-%S-%L-%u-%M-%G-%L-%V",onNull: { $concat: [{ $dateToString: {date: '$obj.obj.obj.date',timezone: "Asia/Vientiane"} }] }} } } } },timezone: "America/Jamaica",iso8601: false} } } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $hour: { $minute: { $dateFromString: {dateString: "2018-09-06T12:23:16.478Z",format: "%L-%d-%V-%w-%j-%u-%S-%%-%z",onError: { $range: [19,20] }} } } },timezone: "Iceland",onNull: "Reverse-engineered West Virginia solid state"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[86825,'$obj.obj.num','$obj.num'],["Chair Chicken flexibility",'$obj.obj.str',{ $dateToString: {date: '$date',format: "%z-%V-%w-%u-%G-%z-%S-%V-%z"} }],[{ $toLower: '$str' }],[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Chad B2B withdrawal"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $minute: { $dayOfWeek: { $year: new Date("2018-09-06T01:49:22.799Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$obj.num'],68605] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[37668,'$num'],{ $ceil: '$obj.obj.obj.num' }] } }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toString: { $arrayToObject: [[]] } },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.num',2716]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[57653],'$obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $toLower: "Rwanda Franc Investor Kids" }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $minute: { $isoWeek: { $month: { $dateToString: {date: { $year: { $second: { $dateToParts: {date: { $isoWeek: { $week: { $millesecond: { $month: { $dateToString: {date: new Date("2018-09-05T23:56:16.274Z"),onNull: { $ltrim: { input: '$obj.obj.obj.str' } }} } } } } },timezone: "America/Thule",iso8601: false} } } },format: "%w-%w-%S-%m-%d-%u-%z-%z"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[69759],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "New York hack SMTP",v: { $substrBytes: [{ $ltrim: { input: '$str' } },18,1] }},{k: "intuitive",v: 29073}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: ['$str',10,20] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Garden",v: { $concat: [{ $substrCP: ['$obj.obj.obj.str',1,4] },'$str'] }},{k: "Developer",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["visualize Sleek Wooden Salad Unbranded"],as: 'lorenzo',in: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Metal synergize Cross-group",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "object-oriented Personal Loan Account",v: 2078},{k: "Personal Loan Account",v: "open-source"}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $toUpper: '$obj.str' },chars: { $ltrim: {input: '$obj.obj.obj.str',chars: "Rubber"} }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $dateToString: {date: new Date("2018-09-06T18:49:22.345Z"),onNull: "transmit"} }],as: 'rhiannon',in: { $pow: [{ $add: [1131,'$obj.obj.num'] },'$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $concatArrays: [[],[68516],[],["Senior Cambridgeshire Circles","Trinidad and Tobago Dollar Bedfordshire",'$obj.obj.str',"United Arab Emirates synergy Expanded"],[],[]] } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toUpper: "generate" } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $abs: 51816 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Producer",v: 8000}]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',5,3] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["withdrawal Fish magnetic",4,4] },"Palladium Outdoors Branch"],88707] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[10840,'$obj.obj.obj.num',27615,'$obj.obj.obj.num'],[{ $rtrim: { input: "Home Garden" } },'$obj.obj.obj.str',"feed Technician"],[{ $indexOfArray: [{ $range: [1,13,4] },{ $concat: ["Assistant Ohio",'$obj.str'] }] }],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str'],[46997,'$obj.num'],[],["Investment Account user-facing",{ $dateToString: {date: { $dateFromParts: {year: { $size: [[]] },month: { $trunc: '$obj.obj.num' },day: { $trunc: 95465 },timezone: "Asia/Calcutta"} },format: "%M-%H-%V-%d-%w-%u-%z-%u",timezone: "Asia/Krasnoyarsk",onNull: { $substrBytes: ['$obj.obj.obj.str',7,11] }} },"Automotive Keyboard"]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeek: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $pow: [{ $floor: '$obj.num' },72960] },isoWeek: { $trunc: 14042 },hour: { $trunc: '$obj.num' },minute: { $ln: { $indexOfArray: [{ $range: [15,17] },{ $arrayElemAt: [[],86850] },19] } },second: '$obj.obj.num'} } } } }, _id: 0}}],

        [{$project: {a: { $second: '$obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Cambridgeshire Buckinghamshire infomediaries",'$obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $year: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $log: [56696,'$num'] },isoWeek: { $sqrt: 66786 },isoDayOfWeek: { $add: ['$obj.obj.num'] },millisecond: { $mod: ['$num',{ $cmp: [{ $arrayElemAt: [[],21967] },{ $map: {input: [],in: { $abs: 33295 }} }] }] },timezone: "Asia/Novosibirsk"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Bahraini Dinar Horizontal",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Macedonia Concrete project",'$str',"neural Generic Cotton Bike","France fuchsia"]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],63950] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Intelligent Steel Chicken teal Canyon",v: false},{k: "invoice Keyboard Response",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["auxiliary clicks-and-mortar Awesome"],53387] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "IB Legacy USB",v: false},{k: "Representative Maine",v: 34244}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $divide: [24745,'$obj.obj.num'] }],['$obj.obj.obj.num',97284]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $trim: {input: "Fantastic panel",chars: '$obj.obj.obj.str'} },chars: { $toString: { $arrayElemAt: [['$obj.obj.str',"dynamic Agent payment"],58684] } }} }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.str',chars: { $ltrim: { input: "schemas" } }} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $week: { $dateFromString: {dateString: "2018-09-06T06:38:48.734Z",format: "%Z-%%-%%-%M-%Y"} } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],['$str',"Keys metrics alarm",'$obj.obj.obj.str'],[],[24597,'$obj.num']] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',12,8] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $week: { $dateFromParts: {isoWeekYear: { $sqrt: '$obj.obj.obj.num' },hour: { $ln: 25848 },millisecond: { $mod: ['$obj.obj.obj.num',67632] },timezone: "America/Indiana/Vincennes"} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.obj.str',{ $ltrim: { input: { $toLower: "Sharable Industrial Associate" } } }],90527] } }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromString: {dateString: "2018-09-05T21:09:09.050Z",timezone: "Asia/Famagusta",onError: { $arrayElemAt: [['$obj.obj.num'],{ $ceil: 2179 }] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],74928] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $toLower: "flexibility" },chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "virtual invoice strategize",v: { $hour: { $isoWeekYear: { $hour: { $isoDayOfWeek: { $isoWeek: { $dayOfYear: { $toDate: { $arrayElemAt: [[{ $substrBytes: [{ $dateToString: { date: new Date("2018-09-06T09:51:46.295Z") } },18,5] }],91955] } } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.obj.obj.str',18,10] },"Georgia web services"],94459] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [] },{ $dateToString: {date: { $millesecond: { $isoWeek: { $isoWeek: { $second: { $dateFromParts: {year: { $cmp: [{ $arrayToObject: [[{k: "Computers Beauty index",v: 86544},{k: "Concrete invoice",v: { $substrCP: ['$obj.str',13,6] }}]] },{ $concatArrays: [[],["Industrial Licensed","deposit Metal"],['$obj.obj.obj.num','$num']] }] },day: { $log10: '$obj.obj.num' },second: { $cmp: [{ $arrayElemAt: [[{ $rtrim: { input: '$obj.obj.str' } }],78462] },{ $ltrim: { input: '$str' } }] },millisecond: { $sqrt: 20936 },timezone: "Pacific/Enderbury"} } } } } },format: "%Y-%M-%j-%j-%M-%L-%%-%V-%j-%%-%%-%d",timezone: "Brazil/Acre",onNull: '$obj.str'} }],{ $abs: 99273 }] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num',16949],as: 'terrence',in: { $ln: '$$terrence' }} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $concat: ["Tennessee",'$obj.obj.str'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $year: new Date("2018-09-05T23:33:27.067Z") } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[485],["Future"],[],[],[{ $dateToString: {date: { $year: { $dayOfMonth: { $dayOfWeek: '$obj.obj.obj.date' } } },timezone: "Indian/Comoro",onNull: { $concatArrays: [] }} },'$obj.obj.str',"Fundamental"]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["Brand"],['$str',{ $substrCP: [{ $toString: { $toUpper: '$obj.obj.obj.str' } },17,7] }],[],['$obj.obj.num',85482],[33521],['$obj.str',"Bedfordshire Handmade focus group","Pizza Accounts disintermediate"]]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $rtrim: {input: { $toString: { $map: {input: [],as: 'florida',in: { $sqrt: 40128 }} } },chars: "Concrete background Cayman Islands"} },'$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $substrBytes: [{ $toLower: { $ltrim: { input: { $trim: {input: "zero administration Sudanese Pound",chars: '$obj.str'} } } } },15,6] }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Indonesia Investment Account Bike"],[{ $substrCP: ['$obj.str',8,15] },"intranet SMS"],[{ $ltrim: { input: "Cayman Islands Dollar Group Mali" } },{ $ltrim: {input: { $substr: [{ $toLower: '$obj.obj.obj.str' },11,5] },chars: "open-source"} },'$str',{ $trim: {input: "Cotton Sleek Cotton Hat",chars: '$obj.str'} }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',{ $substrBytes: [{ $toString: { $arrayToObject: [[{k: "web-readiness withdrawal impactful",v: '$date'},{k: "SDD firewall Integration",v: false},{k: "solid state",v: 85083}]] } },9,4] }],{ $add: [] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "user-facing Berkshire",v: { $dateToString: {date: { $millesecond: new Date("2018-09-06T12:40:48.095Z") },format: "%L-%S-%H-%j-%Z-%j"} }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "teal",v: '$date'},{k: "Unbranded Rubber Chair Home Loan Account methodologies",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["index"],31838] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'fanny',in: { $trunc: 12 }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Licensed Refined Plastic Towels",chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Officer Checking Account",v: { $substrBytes: ['$obj.obj.str',6,20] }},{k: "Implementation Bedfordshire",v: new Date("2018-09-06T07:01:30.892Z")}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Cliff Money Market Account hack","Sleek",{ $rtrim: { input: { $trim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.str'} } } },'$obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $multiply: [] }],50942] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $toDate: { $trim: {input: { $dateToString: { date: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $zip: {inputs: [],useLongestLength: false,defaults: [[]]} },{ $arrayToObject: [[[66257,'$obj.num'],[{ $concat: ["Dale",'$obj.obj.obj.str'] }],["frame Montana",'$str',{ $substrBytes: ['$str',0,17] }]]] },15] },minute: { $abs: '$num' },second: { $pow: ['$obj.num',93939] }} } } },chars: "deposit"} } } }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeekYear: { $toDate: { $arrayElemAt: [["Home Loan Account firmware",{ $substrBytes: ['$str',15,13] },"North Carolina parsing Spur"],'$obj.num'] } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Team-oriented",{ $toString: { $hour: { $toDate: { $arrayToObject: [[[],[],[],[{ $concat: ["Investment Account deposit platforms",'$str'] }]]] } } } }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],[],["Fort SCSI"],['$obj.obj.str','$obj.obj.str'],[]] } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Money Market Account Manager"],in: { $ln: { $ln: '$obj.obj.num' } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],7535] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',68227,33951],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],['$str',{ $dateToString: {date: new Date("2018-09-06T14:37:08.873Z"),timezone: "Etc/GMT+12",onNull: "orange empowering Administrator"} },"Borders Fantastic Monaco",'$obj.str'],[],[],['$num']]] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeekYear: { $dayOfWeek: { $dayOfWeek: { $millesecond: { $dayOfYear: { $isoWeek: { $hour: { $year: { $isoDayOfWeek: { $month: { $month: { $dateFromParts: {year: { $log: ['$obj.num',16547] },hour: { $sqrt: '$obj.obj.num' },millisecond: { $add: [33014,{ $exp: 32816 }] },timezone: "Israel"} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$str',2,15] },{ $toString: { $arrayToObject: [[["International",'$obj.obj.obj.str'],[50465,{ $divide: ['$obj.obj.obj.num',75146] }],[{ $log10: 24982 }],['$obj.num'],[],[],[{ $substrCP: [{ $toUpper: '$obj.str' },6,11] }],[]]] } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[22007,'$obj.num',88390],'$obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],[33238]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["card Chips Producer",{ $toString: { $arrayElemAt: [[99345,'$obj.obj.num','$obj.num','$obj.obj.obj.num'],80986] } },{ $rtrim: {input: "disintermediate",chars: '$str'} }],['$str'],['$obj.obj.obj.str',"firmware",{ $substr: ["Wooden optical Soap",19,20] }]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfYear: { $isoWeekYear: { $dateToString: {date: '$obj.obj.date',format: "%m-%M-%S-%z-%V-%G",timezone: "Indian/Mayotte"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],54812] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Open-architected",v: '$obj.obj.num'},{k: "next-generation",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["card withdrawal",'$obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num','$obj.obj.num'],76526] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],22133] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',17,0] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substrBytes: ["New Jersey Movies",17,10] },6,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: "Paradigm Soft Toys" } },"array deposit Street"],75791] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],{ $trunc: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $range: [0,15] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "framework Awesome Fresh Mouse",chars: "Automotive Group"} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Creative Practical dynamic","AGP Tala"],as: 'hildegard',cond: { $in: [{ $arrayElemAt: [[],58765] },{ $map: {input: ['$obj.obj.obj.str',"copying yellow firewall"],in: { $pow: ['$$this',{ $log: [86271,'$obj.num'] }] }} }] }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Bacon",8,12] }, _id: 0}}],

        [{$project: {a: { $range: [12,13] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "XML",v: true}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateFromParts: {year: { $log10: '$obj.obj.obj.num' },hour: { $pow: [86541,3100] },minute: { $sqrt: '$obj.obj.obj.num' },second: { $exp: { $mod: [94386,'$obj.obj.obj.num'] } },timezone: "Canada/Atlantic"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[67470],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [11,2,2] }, _id: 0}}],

        [{$project: {a: { $toUpper: "optical Robust" }, _id: 0}}],

        [{$project: {a: { $substr: [{ $dateToString: {date: new Date("2018-09-06T19:14:24.889Z"),format: "%%-%z-%m-%S-%j-%G",timezone: "Europe/Skopje",onNull: { $rtrim: {input: "Auto Loan Account Response Tasty Cotton Bacon",chars: "invoice"} }} },7,4] }, _id: 0}}],

        [{$project: {a: { $year: { $month: { $dateFromString: {dateString: "2018-09-06T00:33:46.528Z",onError: { $arrayElemAt: [[],'$num'] },onNull: "Sleek back-end"} } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',9,4] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $toDate: { $arrayElemAt: [['$obj.obj.obj.str',"eyeballs"],88960] } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $month: { $isoWeekYear: { $year: { $isoWeek: { $isoWeek: { $isoDayOfWeek: { $toDate: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.obj.str'],'$num'] } } } } } } } },format: "%Z-%%-%z-%m-%j",timezone: "America/Noronha",onNull: { $objectToArray: '$obj' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],68217] }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromString: {dateString: "2018-09-06T06:47:01.671Z",format: "%u-%z-%d-%Z-%V-%L-%V-%w",onNull: '$obj.obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $second: { $millesecond: { $dateFromParts: {isoWeekYear: { $abs: 1009 },isoWeek: { $exp: 80158 },hour: { $ceil: '$num' },minute: { $mod: [{ $add: [] },84318] },second: { $ceil: '$obj.obj.obj.num' },millisecond: { $multiply: [45872,'$obj.obj.obj.num'] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $filter: {input: [],as: 'pearlie',cond: { $gt: [{ $isoWeek: { $dateToString: {date: new Date("2018-09-06T19:09:44.276Z"),format: "%V-%d-%Y-%U-%U-%Y-%d-%U-%H-%L-%m",timezone: "Asia/Katmandu",onNull: { $zip: {inputs: [[311,'$obj.obj.num','$num'],[],[],[]],useLongestLength: false,defaults: [{obj: {},array: [{ date: new Date("2018-09-06T07:09:53.791Z") }]}]} }} } },{ $toString: { $dateFromString: {dateString: "2018-09-06T08:35:42.930Z",onError: { $arrayElemAt: [['$$pearlie'],33522] }} } }] }} } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: "Gorgeous Plastic Chips" },"virtual"],["Sleek Cotton Ball",'$str'],[{ $log: [14423,72900] },'$num'],[],[]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Industrial" }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeekYear: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $pow: [82912,'$obj.obj.num'] },hour: { $add: [94666] },second: { $sqrt: '$num' },millisecond: { $ln: '$num' },timezone: "America/Yakutat"} } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',12,14] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $month: { $dateFromString: {dateString: "2018-09-06T05:35:40.910Z",timezone: "America/Phoenix",onError: { $arrayToObject: [[[{ $substrBytes: ["programming indexing Grocery",20,0] }],[],['$obj.str'],['$obj.obj.obj.num',{ $ln: 97492 }],[],[{ $rtrim: { input: '$obj.obj.obj.str' } },"client-server Fork West Virginia","Implementation"],[]]] }} } } }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromParts: {isoWeekYear: { $add: ['$obj.obj.num'] },isoWeek: { $multiply: [] },isoDayOfWeek: { $divide: ['$obj.num',12926] },second: { $exp: 23132 },millisecond: { $floor: '$num' },timezone: "America/Indiana/Winamac"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "models Refined",v: 89195}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',75193],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],42865] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num',11903],as: 'grace',in: { $subtract: [{ $log10: '$obj.obj.num' },39410] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $millesecond: '$date' } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.num',70456,'$obj.num'],as: 'briana',in: { $multiply: [55414] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["Louisiana connect",11,16] },{ $ltrim: { input: '$str' } }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Mauritius pricing structure Developer",v: '$obj.obj.obj.num'},{k: "hardware",v: { $toDate: { $dateToString: {date: new Date("2018-09-06T05:56:01.594Z"),format: "%V-%G-%w-%Y"} } }}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: "capacitor"} }, _id: 0}}],

        [{$project: {a: { $toDate: { $range: [13,19] } }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: '$obj.obj.obj.date',format: "%L-%w-%d-%z-%V-%d-%U-%u-%z"} }],59254] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Wisconsin",v: false}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["payment optical"],cond: { $gte: [{ $arrayElemAt: [[{ $substrCP: ['$str',19,14] },"calculate feed"],'$obj.num'] },{ $concatArrays: [[69852],[],[],[],['$$this',"Plains",{ $ltrim: { input: { $substr: ["cross-platform emulation Locks",18,17] } } }]] }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'chase',in: { $divide: ['$obj.num',41262] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $mod: ['$obj.obj.obj.num',52844] }] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "feed Ohio",v: '$str'},{k: "deposit",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[87713]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[45436],91530] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["copy Concrete",'$str'],as: 'otha',cond: { $not: [{ $arrayElemAt: [[],'$obj.obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfWeek: { $dateToString: { date: new Date("2018-09-06T09:52:12.624Z") } } },format: "%%-%%-%u-%m-%V-%j-%z-%j-%L",timezone: "America/Boa_Vista",onNull: { $toLower: "Metical" }} }, _id: 0}}],

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
