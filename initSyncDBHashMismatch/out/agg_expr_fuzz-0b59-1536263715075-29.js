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
        return coll.insert({_id: 18113,str: "Borders microchip directional",num: 27147,date: new Date("2018-09-06T07:38:03.088Z"),array: [4071,["Small Rubber Cheese"],new Date("2018-09-06T09:58:21.130Z"),new Date("2018-09-05T23:30:03.123Z"),90938,"Licensed Tuna",72076,new Date("2018-09-06T13:43:50.563Z"),"copy",new Date("2018-09-06T09:48:32.873Z"),{_id: 18114,str: "networks tan payment",date: new Date("2018-09-06T11:14:38.735Z"),array: [],obj: {_id: 18115,str: "system Computers",num: 29778,date: new Date("2018-09-06T06:40:10.781Z"),array: [],obj: {}}},[]],obj: {_id: 18116,num: 39801,date: new Date("2018-09-06T16:35:21.164Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18117,str: "deploy User-centric",num: 26298,date: new Date("2018-09-06T05:17:31.267Z"),obj: {_id: 18118,num: 60012,date: new Date("2018-09-06T17:12:38.154Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18119,str: "Cheese",num: 61853,date: new Date("2018-09-06T09:56:52.853Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18120,str: "input Granite North Dakota",num: 35293,date: new Date("2018-09-06T03:45:44.597Z"),array: ["Minnesota",new Date("2018-09-06T18:15:33.488Z"),"Cloned Officer",35528,new Date("2018-09-05T20:57:47.697Z"),"Rustic connect Virginia",{_id: 18121,date: new Date("2018-09-06T03:11:06.083Z"),array: [],obj: {}},new Date("2018-09-06T16:52:49.854Z"),"Right-sized",76482,new Date("2018-09-06T17:11:23.827Z")],obj: {_id: 18122,str: "input Group New Jersey",num: 84335,date: new Date("2018-09-05T19:55:32.299Z")}});
    },

    function(coll) {
        return coll.insert({_id: 18123,str: "lime",num: 92033,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18124,str: "Manager redundant",num: 84066,date: new Date("2018-09-06T03:46:58.586Z"),obj: {_id: 18125,str: "Computer Handmade Cheese",num: 55344,array: [new Date("2018-09-05T22:14:06.614Z"),new Date("2018-09-06T12:35:23.865Z"),23660,"optimize",89544,["bus Optimized",[],new Date("2018-09-06T15:36:56.813Z"),65446]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18126,str: "Auto Loan Account e-tailers",num: 62501,date: new Date("2018-09-06T06:56:34.986Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18127,str: "dynamic needs-based virtual",num: 36640,date: new Date("2018-09-06T11:01:12.951Z"),array: [],obj: {_id: 18128,str: "port",num: 60916,date: new Date("2018-09-06T12:43:11.256Z"),array: [96103,"mission-critical applications",54365,new Date("2018-09-06T10:32:50.140Z"),"copying integrated Buckinghamshire",{_id: 18129,str: "cross-platform",num: 60610,date: new Date("2018-09-06T14:27:18.239Z"),obj: {}},[[],new Date("2018-09-05T21:50:51.500Z"),new Date("2018-09-06T04:55:01.914Z")],"reciprocal Home turquoise"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18130,str: "real-time",num: 52744,date: new Date("2018-09-05T22:44:58.289Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18131,str: "Saudi Riyal",num: 68183,date: new Date("2018-09-06T15:02:04.664Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18132,str: "sticky",num: 49166,date: new Date("2018-09-06T05:22:20.494Z"),array: ["Credit Card Account",48071,new Date("2018-09-06T01:53:36.102Z"),56582,25888,["program EXE Beauty",40872,{_id: 18133,num: 80686}],new Date("2018-09-06T19:03:01.856Z"),"non-volatile COM deposit",[],new Date("2018-09-06T17:49:58.069Z"),[],"Hat",18652],obj: {_id: 18134,str: "Greece Identity overriding",num: 37263,date: new Date("2018-09-06T05:41:04.145Z"),array: [{_id: 18135,date: new Date("2018-09-05T20:04:13.803Z"),array: [new Date("2018-09-06T10:08:48.648Z")],obj: {}},[]],obj: {_id: 18136,num: 57991,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18137,str: "channels Wooden Unbranded Soft Cheese",num: 37408,date: new Date("2018-09-06T14:54:27.876Z"),array: [],obj: {_id: 18138,str: "Borders bandwidth",num: 53039,date: new Date("2018-09-06T19:03:53.455Z"),array: [new Date("2018-09-06T18:15:58.677Z"),new Date("2018-09-06T18:53:38.998Z"),{_id: 18139,str: "Minnesota AGP",num: 5261,date: new Date("2018-09-06T16:42:59.135Z"),array: [],obj: {}},"Square optical",[new Date("2018-09-06T17:58:48.425Z"),99303,48179,96739],new Date("2018-09-06T19:38:16.295Z"),new Date("2018-09-06T19:35:44.704Z"),"initiative Sports monetize",95754,81584,["bluetooth user-centric"],{_id: 18140,str: "Saint Kitts and Nevis",date: new Date("2018-09-06T03:46:25.542Z"),array: []}]}});
    },

    function(coll) {
        return coll.insert({_id: 18141,str: "Multi-tiered",num: 78118,date: new Date("2018-09-06T14:29:21.153Z"),array: [1136,"Cotton payment copy","Architect",new Date("2018-09-06T14:32:49.661Z"),59723,49160,new Date("2018-09-06T11:25:28.123Z"),new Date("2018-09-06T00:16:25.967Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18142,str: "productize payment Burg",num: 1435,date: new Date("2018-09-06T01:25:40.312Z"),array: [41096,[57773,{_id: 18143,str: "synthesize Money Market Account Chips",num: 90273,date: new Date("2018-09-06T00:29:24.011Z"),array: ["backing up Moldovan Leu",[],new Date("2018-09-06T17:34:20.331Z")],obj: {}}],{_id: 18144,str: "Illinois compressing South Carolina",array: [7606,"Handmade bluetooth"]},new Date("2018-09-06T06:23:31.620Z"),new Date("2018-09-06T19:03:09.660Z"),"seize",2519,new Date("2018-09-06T17:47:40.019Z"),"Customer Data",new Date("2018-09-06T14:29:19.924Z"),"AI hacking"],obj: {_id: 18145,num: 67300,date: new Date("2018-09-06T17:59:07.072Z"),array: [],obj: {_id: 18146,str: "Oklahoma Berkshire",num: 44575,date: new Date("2018-09-06T05:28:20.195Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 18147,str: "Fantastic pink",num: 95232,date: new Date("2018-09-06T05:25:30.324Z"),array: [],obj: {_id: 18148,str: "Shoes",date: new Date("2018-09-06T06:56:43.595Z"),array: [],obj: {_id: 18149,str: "Product Analyst 24/7",date: new Date("2018-09-06T19:16:32.712Z"),array: [89509,"Cambridgeshire functionalities","Regional empowering 24/7",{_id: 18150,str: "revolutionize Directives SMS",num: 5567,date: new Date("2018-09-05T21:19:24.547Z"),obj: {}},new Date("2018-09-06T11:56:55.790Z"),new Date("2018-09-06T12:21:09.566Z"),8176,"monitor enhance yellow",new Date("2018-09-05T21:50:19.706Z"),{_id: 18151,str: "Sports bandwidth",num: 73073,array: [[{_id: 18152,num: 44796,date: new Date("2018-09-06T03:27:19.355Z"),array: []}],34901,10920],obj: {_id: 18153,num: 81956}},"Cambridgeshire Representative solid state",new Date("2018-09-06T06:41:49.674Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 18154,str: "teal",num: 76961,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18155,str: "Practical strategic Home Loan Account",num: 27601,date: new Date("2018-09-05T21:11:59.689Z"),array: [],obj: {_id: 18156,str: "Personal Loan Account Communications",num: 64602,date: new Date("2018-09-06T13:43:39.880Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18157,str: "Investor out-of-the-box",num: 42281,date: new Date("2018-09-06T17:50:08.701Z"),array: [],obj: {_id: 18158,str: "function Pennsylvania",num: 86144,date: new Date("2018-09-05T21:23:54.458Z"),array: [],obj: {_id: 18159,str: "Wooden Producer Forest",num: 45797,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 18160,str: "Outdoors Guyana Dollar Personal Loan Account",num: 63492,date: new Date("2018-09-06T02:01:13.681Z"),array: [],obj: {_id: 18161,num: 50441,date: new Date("2018-09-06T00:38:51.162Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18162,str: "Bedfordshire neural Division",num: 85823,array: ["Assistant leading-edge architectures",69448,"Texas Strategist",new Date("2018-09-06T16:25:15.495Z"),[],48501,{_id: 18163,num: 15974,date: new Date("2018-09-05T20:23:09.759Z"),array: [],obj: {_id: 18164,str: "auxiliary Handcrafted",num: 46922,date: new Date("2018-09-06T11:39:23.919Z"),obj: {}}},new Date("2018-09-06T10:10:47.743Z"),[],"Virgin Islands, U.S. Electronics Ameliorated"]});
    },

    function(coll) {
        return coll.insert({_id: 18165,str: "Bolivar Fuerte San Marino Forward",num: 83180,date: new Date("2018-09-06T17:44:24.553Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18166,str: "Program",num: 24804,date: new Date("2018-09-06T13:16:17.458Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18167,str: "Boliviano Mvdol GB pricing structure",num: 2042,date: new Date("2018-09-06T03:06:40.320Z"),array: [new Date("2018-09-06T19:46:40.871Z"),{_id: 18168,str: "Security",num: 55599,date: new Date("2018-09-06T07:07:12.380Z"),array: [],obj: {_id: 18169,date: new Date("2018-09-06T15:04:39.730Z"),array: [],obj: {}}},75202,"ivory",new Date("2018-09-06T05:31:50.331Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18170,str: "hacking Intelligent human-resource",num: 69201,date: new Date("2018-09-06T03:42:39.649Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18171,str: "pricing structure",num: 30525,date: new Date("2018-09-06T05:40:28.430Z"),array: [38725,48745,"systemic payment Developer",{_id: 18172,str: "Total Facilitator bus",num: 85563,date: new Date("2018-09-06T19:43:38.388Z"),obj: {_id: 18173,str: "Expanded",date: new Date("2018-09-06T16:54:04.564Z"),obj: {_id: 18174,num: 52364,date: new Date("2018-09-05T21:36:12.340Z"),array: [],obj: {}}}},59940,"calculating",[[],new Date("2018-09-06T09:11:12.181Z"),new Date("2018-09-06T18:45:16.269Z"),"transition",[],new Date("2018-09-06T17:56:30.129Z")],46126,{_id: 18175,array: [new Date("2018-09-06T18:11:07.190Z"),"Rustic withdrawal"],obj: {_id: 18176,num: 7053,date: new Date("2018-09-06T01:11:24.443Z"),array: []}}]});
    },

    function(coll) {
        return coll.insert({_id: 18177,str: "infrastructures toolset",date: new Date("2018-09-06T13:49:49.748Z"),array: ["index invoice",new Date("2018-09-06T02:59:04.079Z"),new Date("2018-09-06T14:40:09.500Z"),45479,59722,"redundant leverage Syrian Arab Republic",{_id: 18178,str: "Principal Synchronised Coordinator",num: 14571,date: new Date("2018-09-06T06:41:59.577Z"),obj: {_id: 18179,str: "HTTP South Carolina",num: 53249,date: new Date("2018-09-06T09:29:44.170Z"),array: [],obj: {}}},{_id: 18180,num: 81380,obj: {}},new Date("2018-09-06T03:17:13.909Z"),[new Date("2018-09-06T00:58:33.691Z")],15425,["copy open-source"],"Manager strategy Cambridgeshire",58257,"District"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18181,str: "Dong Small",num: 4431,date: new Date("2018-09-06T16:15:16.375Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18182,str: "Iranian Rial payment Bypass",num: 645,date: new Date("2018-09-05T23:45:24.927Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18183,str: "mobile",num: 46267,date: new Date("2018-09-06T09:51:16.504Z"),array: [],obj: {_id: 18184,str: "bluetooth microchip Garden",num: 13438,date: new Date("2018-09-06T18:00:44.609Z"),obj: {_id: 18185,str: "bandwidth Dynamic",num: 67537,date: new Date("2018-09-06T03:21:27.995Z"),array: ["mobile customer loyalty web services",78938,52252,[],"Handcrafted Soft Pizza invoice Cambridgeshire","drive application Station",new Date("2018-09-06T13:08:43.460Z"),20621,new Date("2018-09-06T14:02:52.967Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 18186,str: "Personal Loan Account Cambridgeshire",num: 17116,date: new Date("2018-09-06T18:40:12.796Z"),array: ["British Indian Ocean Territory (Chagos Archipelago)",5847,22356,new Date("2018-09-06T08:24:40.958Z"),new Date("2018-09-06T04:16:12.908Z"),{_id: 18187,str: "Rustic Connecticut",num: 12931,date: new Date("2018-09-05T22:50:02.372Z"),array: [],obj: {_id: 18188,str: "Customer-focused transmit HDD",date: new Date("2018-09-06T15:38:19.795Z"),array: [new Date("2018-09-06T16:54:10.864Z"),new Date("2018-09-06T04:09:30.182Z"),96464]}},"Ergonomic Wooden Salad Assurance violet","cultivate indexing withdrawal",[],{_id: 18189,num: 66639,array: ["Cheese hacking mesh","Credit Card Account",{_id: 18190,str: "FTP navigating Alaska",num: 74707,date: new Date("2018-09-06T16:25:58.534Z"),array: ["deposit Interactions neural",new Date("2018-09-06T07:15:44.432Z")],obj: {}},new Date("2018-09-06T15:36:02.742Z")],obj: {}},30129],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18191,str: "transparent azure",num: 22439,date: new Date("2018-09-06T11:18:13.962Z"),array: [new Date("2018-09-05T20:36:06.828Z"),new Date("2018-09-06T07:41:59.593Z"),52782,75283,{_id: 18192,str: "application application Tennessee",num: 74517,date: new Date("2018-09-06T01:38:56.432Z"),array: []},new Date("2018-09-06T11:47:40.415Z"),"Pants","Usability Idaho Kyrgyz Republic",new Date("2018-09-06T09:23:57.793Z"),33730,"indexing Saint Vincent and the Grenadines Personal Loan Account",[],["support Sports Bedfordshire",98770,new Date("2018-09-06T18:56:29.539Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18193,str: "migration",num: 52490,date: new Date("2018-09-06T00:05:28.599Z"),array: ["SSL",78559,97106,new Date("2018-09-06T16:24:25.024Z"),"e-markets plug-and-play Strategist",66088,"parsing Montana Shoes",{_id: 18194,str: "Legacy withdrawal",num: 172,date: new Date("2018-09-06T00:35:31.126Z"),array: [],obj: {}},[],new Date("2018-09-05T22:22:48.243Z")],obj: {_id: 18195,num: 4250,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18196,str: "Kansas Cambridgeshire",date: new Date("2018-09-06T14:45:29.582Z"),array: ["COM","payment 24/7 hardware",new Date("2018-09-06T18:07:13.548Z"),99668,"wireless",new Date("2018-09-05T23:55:00.460Z"),new Date("2018-09-06T00:28:20.737Z"),20188,"cutting-edge",{_id: 18197,str: "gold Towels",num: 22283,date: new Date("2018-09-06T03:00:56.173Z"),array: [],obj: {_id: 18198,num: 78990,date: new Date("2018-09-06T04:56:10.892Z"),obj: {}}},{_id: 18199,str: "Bedfordshire mobile",num: 68747,date: new Date("2018-09-06T19:22:37.034Z"),array: []},new Date("2018-09-06T17:50:45.790Z"),11392]});
    },

    function(coll) {
        return coll.insert({_id: 18200,str: "Lead application eyeballs",num: 20115,date: new Date("2018-09-05T22:11:11.795Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18201,str: "human-resource",date: new Date("2018-09-06T13:22:13.718Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18202,str: "payment",num: 21445,date: new Date("2018-09-06T03:43:39.703Z"),array: [new Date("2018-09-06T04:20:51.204Z"),"Mobility Credit Card Account",{_id: 18203,str: "Grocery Baby Buckinghamshire",num: 81764,date: new Date("2018-09-06T19:26:32.399Z"),array: [new Date("2018-09-06T09:17:01.282Z"),[]],obj: {_id: 18204,str: "Engineer",date: new Date("2018-09-06T18:02:02.032Z"),obj: {}}},"core Intelligent Steel Mouse",11338,[],6515,{_id: 18205,num: 72358,date: new Date("2018-09-06T12:45:14.878Z"),obj: {}},42055,99009,"Bedfordshire",45667,81132,"Regional circuit National"]});
    },

    function(coll) {
        return coll.insert({_id: 18206,str: "haptic Plastic best-of-breed",num: 78379,date: new Date("2018-09-06T15:46:48.503Z"),array: [96716,new Date("2018-09-06T11:38:31.560Z"),new Date("2018-09-06T14:47:39.177Z"),"systems","magenta",1180,"Borders synthesizing",92860,new Date("2018-09-06T02:13:01.248Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18207,str: "Clothing coherent",num: 98868,date: new Date("2018-09-06T06:42:02.558Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18208,str: "transmitting turquoise",num: 65131,date: new Date("2018-09-06T17:41:32.795Z"),array: ["1080p initiatives",new Date("2018-09-06T03:03:43.277Z"),new Date("2018-09-06T00:42:47.074Z"),[],new Date("2018-09-06T03:44:04.803Z"),6613,"generate payment Investment Account","application Open-source New Mexico"],obj: {_id: 18209,str: "Toys",num: 81424,date: new Date("2018-09-06T11:10:27.254Z"),array: [84111,43693,[new Date("2018-09-06T16:32:19.592Z"),{_id: 18210,str: "XSS methodologies",date: new Date("2018-09-06T14:29:04.371Z"),array: [],obj: {_id: 18211,str: "ability",num: 46796,date: new Date("2018-09-06T04:36:58.347Z"),obj: {}}},35170]],obj: {_id: 18212,str: "Liberian Dollar",num: 37801,date: new Date("2018-09-06T19:29:32.402Z"),array: [new Date("2018-09-06T09:06:34.298Z"),{_id: 18213,array: []},22969],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18214,str: "Trinidad and Tobago",num: 62354,date: new Date("2018-09-05T23:09:08.075Z"),array: [new Date("2018-09-05T23:55:34.318Z"),"Rustic Soft Soap Home Loan Account","Cambridgeshire",540,new Date("2018-09-06T13:50:44.873Z"),[],{_id: 18215,str: "Towels Estates",num: 52256,date: new Date("2018-09-06T07:49:30.457Z"),obj: {_id: 18216,str: "Avon",date: new Date("2018-09-06T13:29:05.370Z"),array: ["Beauty open-source"],obj: {}}},new Date("2018-09-05T20:23:40.414Z"),97055,[],56384,new Date("2018-09-06T14:54:34.552Z"),[67587,"Wooden Towels workforce"]],obj: {_id: 18217,num: 67996,array: [],obj: {_id: 18218,str: "South Dakota Mexico",date: new Date("2018-09-06T16:05:48.244Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 18219,str: "Usability invoice Tools",num: 83731,date: new Date("2018-09-06T12:19:55.205Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18220,str: "Indian Rupee",num: 42922,date: new Date("2018-09-06T15:59:18.738Z"),array: ["whiteboard orange",new Date("2018-09-05T20:21:06.251Z"),new Date("2018-09-06T08:32:49.491Z"),16401,"online Shoes",36930,"International",[],60320,[],{_id: 18221,str: "copying",num: 82600,date: new Date("2018-09-05T21:18:12.786Z"),array: [],obj: {_id: 18222,str: "Wooden",num: 81290,date: new Date("2018-09-06T08:21:29.711Z"),array: [new Date("2018-09-06T14:00:23.409Z")]}},{_id: 18223,str: "visualize invoice TCP",date: new Date("2018-09-06T18:07:53.459Z"),array: [[]],obj: {}},new Date("2018-09-06T12:23:49.453Z"),"azure Web Refined Cotton Car",new Date("2018-09-05T21:28:48.950Z"),23643],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18224,str: "Union Intuitive",num: 27242,date: new Date("2018-09-06T19:53:56.950Z"),array: [],obj: {_id: 18225,str: "Road",num: 98947,date: new Date("2018-09-06T16:30:44.492Z"),array: [new Date("2018-09-06T00:57:17.409Z"),14684,[new Date("2018-09-06T06:31:31.120Z")],[],"Configuration Uzbekistan Sum",{_id: 18226,str: "orchid Credit Card Account",num: 92598,date: new Date("2018-09-06T13:53:08.836Z")},"mindshare Sleek Soft Table Bedfordshire",50152,new Date("2018-09-06T13:12:54.716Z"),"discrete","Corporate microchip","Ergonomic"],obj: {_id: 18227,str: "Assistant",date: new Date("2018-09-06T01:36:00.935Z"),array: [88518,92551],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18228,str: "Buckinghamshire multimedia",num: 48541,date: new Date("2018-09-06T15:37:34.450Z"),array: [31297,83586,new Date("2018-09-05T21:11:11.685Z"),new Date("2018-09-06T18:25:18.883Z"),[],new Date("2018-09-06T02:33:30.442Z"),"mobile","B2B deposit",19891,[],{_id: 18229,str: "Fish Panama",num: 1869,date: new Date("2018-09-05T23:36:07.063Z"),array: [53183,"bypassing","tan"],obj: {}},{_id: 18230,str: "Ergonomic Plastic Shirt Borders",date: new Date("2018-09-05T21:42:31.984Z"),obj: {_id: 18231,num: 5741,array: ["Coordinator Cotton",10795],obj: {_id: 18232,str: "convergence deposit",num: 61035,date: new Date("2018-09-06T14:12:59.800Z")}}},{_id: 18233,date: new Date("2018-09-06T15:28:14.625Z"),array: ["Nebraska"]}]});
    },

    function(coll) {
        return coll.insert({_id: 18234,str: "monitor transmit",num: 97392,date: new Date("2018-09-06T16:47:27.954Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18235,str: "Accounts",num: 65281,date: new Date("2018-09-06T06:14:41.500Z"),array: [],obj: {_id: 18236,num: 47322,date: new Date("2018-09-06T10:11:44.607Z"),array: ["frictionless Director invoice","XSS",7714,96979,"Borders clear-thinking",18548,new Date("2018-09-06T06:05:30.729Z"),new Date("2018-09-06T18:41:07.603Z"),[8856],new Date("2018-09-06T09:57:01.015Z"),"Solomon Islands"],obj: {_id: 18237,str: "Arizona",num: 68611,date: new Date("2018-09-06T13:19:04.359Z"),array: [{_id: 18238,date: new Date("2018-09-06T08:30:28.293Z"),array: [],obj: {_id: 18239,str: "Bedfordshire Virginia",date: new Date("2018-09-06T11:37:29.586Z"),array: []}},51466,{_id: 18240,str: "Metal Chips",num: 82366,date: new Date("2018-09-06T06:01:19.945Z"),obj: {}},[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18241,str: "Marketing XSS RSS",num: 78595,date: new Date("2018-09-06T08:47:47.083Z"),array: [],obj: {_id: 18242,str: "Investment Account",num: 14034,date: new Date("2018-09-06T05:02:01.764Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18243,str: "Fantastic Cotton Ball mint green",num: 80632,date: new Date("2018-09-06T04:05:05.185Z"),array: [new Date("2018-09-06T13:13:36.321Z"),"application",[{_id: 18244,str: "Zimbabwe",num: 87083,date: new Date("2018-09-06T17:48:30.306Z"),array: [],obj: {_id: 18245,str: "haptic",date: new Date("2018-09-06T14:36:59.876Z"),obj: {}}},51890,5479],"Dam infomediaries",new Date("2018-09-06T15:07:26.108Z"),new Date("2018-09-05T21:44:43.572Z"),27528,{_id: 18246,str: "purple Buckinghamshire Auto Loan Account",num: 26088,date: new Date("2018-09-06T10:41:20.964Z"),array: [],obj: {}},{_id: 18247,str: "hacking Dalasi",date: new Date("2018-09-06T15:17:08.207Z"),array: [],obj: {_id: 18248,num: 44192}},"hacking HDD Wooden",{_id: 18249,num: 44048,obj: {}}],obj: { _id: 18250 }});
    },

    function(coll) {
        return coll.insert({_id: 18251,str: "eyeballs Alaska Maryland",num: 20157,date: new Date("2018-09-06T13:35:39.182Z"),array: [65205,"payment",["Investment Account",new Date("2018-09-05T20:59:50.323Z")],33201,"North Dakota strategize Metal",new Date("2018-09-06T13:09:38.335Z"),"ROI Frozen customized",77991,new Date("2018-09-06T08:22:46.312Z"),[],[],15072]});
    },

    function(coll) {
        return coll.insert({_id: 18252,str: "lavender",num: 18203,date: new Date("2018-09-05T20:46:57.136Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18253,str: "SMS Wooden Steel",num: 43012,array: [95938,new Date("2018-09-06T14:06:53.916Z"),"interface Cambridgeshire Mandatory",69149,"Representative visionary",new Date("2018-09-06T06:49:51.527Z"),"Avon one-to-one Home",{_id: 18254,str: "Credit Card Account Washington Cross-group",num: 2876,date: new Date("2018-09-06T03:18:50.274Z"),array: []},{_id: 18255,str: "Pass Cambridgeshire neural",num: 114,date: new Date("2018-09-06T18:59:41.531Z"),array: [new Date("2018-09-06T02:14:11.171Z")],obj: {}},[],{_id: 18256,num: 68112,date: new Date("2018-09-06T16:19:12.853Z"),array: [[],14899,new Date("2018-09-06T03:21:58.653Z")],obj: {_id: 18257,num: 90314,date: new Date("2018-09-06T19:03:42.709Z"),array: []}},"Kids",new Date("2018-09-06T06:55:35.333Z"),54662],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18258,num: 98840,date: new Date("2018-09-06T13:38:28.924Z"),array: [35840,new Date("2018-09-06T07:56:06.647Z"),"Albania","Sri Lanka",87029,31394,40754,new Date("2018-09-06T16:30:25.152Z"),new Date("2018-09-06T11:48:04.754Z"),new Date("2018-09-06T01:17:58.413Z"),new Date("2018-09-06T09:56:23.335Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18259,str: "Connecticut Brooks pixel",num: 55903,date: new Date("2018-09-06T07:58:45.357Z"),array: [19064,"invoice optical circuit","Home Loan Account Investor",{_id: 18260,str: "Computer back up",num: 82186,date: new Date("2018-09-06T17:09:50.749Z"),array: [],obj: {_id: 18261,num: 74654,date: new Date("2018-09-06T08:37:59.636Z"),obj: {}}},new Date("2018-09-06T06:24:08.099Z"),[],new Date("2018-09-06T04:30:14.397Z"),95974,"Sweden",new Date("2018-09-06T08:46:41.792Z"),27855,new Date("2018-09-05T22:32:35.321Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18262,str: "structure",num: 98439,date: new Date("2018-09-06T10:43:07.968Z"),array: [59037,"Technician",72473,"Mount synthesizing",new Date("2018-09-06T17:15:14.592Z"),new Date("2018-09-06T13:59:43.668Z"),[],new Date("2018-09-06T15:29:55.006Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18263,str: "Tasty Soft Hat Representative Somali Shilling",num: 91551,date: new Date("2018-09-06T03:43:05.645Z"),array: [new Date("2018-09-06T04:32:51.021Z"),"exuding Costa Rica Electronics",new Date("2018-09-06T12:28:49.455Z"),52476,{_id: 18264,num: 13360,date: new Date("2018-09-06T09:55:28.785Z"),array: [],obj: {}},"Central",47068,"Shoes circuit program",[],71445,new Date("2018-09-06T01:56:07.143Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18265,str: "XML",num: 56337,date: new Date("2018-09-05T22:43:13.834Z"),array: [],obj: {_id: 18266,str: "systems hacking",num: 76862,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18267,str: "action-items disintermediate",num: 47318,date: new Date("2018-09-05T20:33:12.573Z"),array: [],obj: {_id: 18268,num: 26147,date: new Date("2018-09-06T13:52:04.004Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18269,str: "Unbranded Frozen Towels French Guiana",num: 98388,date: new Date("2018-09-06T03:50:05.268Z"),array: [new Date("2018-09-06T05:13:15.502Z"),new Date("2018-09-06T18:09:13.971Z"),88471,"Anguilla Australia",47028,"invoice Brand","Steel Forward","Salad data-warehouse",{_id: 18270,str: "Investment Account implement system",num: 97842,array: ["Convertible Marks",new Date("2018-09-06T02:47:08.911Z"),[],{_id: 18271,str: "Highway",date: new Date("2018-09-06T13:47:21.286Z"),array: [],obj: {_id: 18272,str: "withdrawal digital invoice",num: 15691,date: new Date("2018-09-05T21:49:53.920Z"),obj: {_id: 18273,num: 50507,date: new Date("2018-09-06T08:06:11.754Z")}}}]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18274,str: "system Minnesota framework",num: 17198,date: new Date("2018-09-06T18:13:38.320Z"),array: ["Administrator Handcrafted",new Date("2018-09-06T07:34:23.882Z"),44131,new Date("2018-09-06T15:31:17.144Z"),"Gorgeous Rubber Sausages Legacy Response","Liaison",new Date("2018-09-06T07:55:42.063Z"),45299,[],"payment compressing Kansas"],obj: {_id: 18275,str: "Illinois",num: 62555,date: new Date("2018-09-06T13:25:50.901Z"),array: [{_id: 18276,str: "solid state Bike",num: 57420,date: new Date("2018-09-06T04:26:06.530Z"),array: [],obj: {}},68665,{_id: 18277,str: "Agent methodologies Frozen",num: 29981,obj: {}},new Date("2018-09-06T06:30:28.010Z"),"connecting"]}});
    },

    function(coll) {
        return coll.insert({_id: 18278,str: "Saint Helena",num: 82259,date: new Date("2018-09-06T05:28:29.543Z"),array: [new Date("2018-09-06T16:43:18.023Z"),new Date("2018-09-06T13:18:46.974Z"),new Date("2018-09-05T22:01:04.449Z")],obj: {_id: 18279,str: "Serbian Dinar",num: 1183,date: new Date("2018-09-05T20:51:09.741Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 18280,str: "deposit",date: new Date("2018-09-06T00:16:31.053Z"),array: ["circuit asymmetric Analyst",59151,new Date("2018-09-06T04:58:36.986Z"),new Date("2018-09-06T19:36:23.701Z"),44894,"Interactions Accounts salmon",[],{_id: 18281,str: "digital",num: 88065,date: new Date("2018-09-06T03:34:18.888Z"),obj: {_id: 18282,str: "Sausages",num: 36801,array: [{_id: 18283,str: "interface",num: 3125,date: new Date("2018-09-06T05:18:36.669Z"),array: [],obj: {}}]}},29417,[],{_id: 18284,num: 36789,array: ["forecast Supervisor",{_id: 18285,num: 9971,date: new Date("2018-09-06T15:01:31.688Z"),obj: {_id: 18286,str: "Tanzania Alabama District",date: new Date("2018-09-06T13:58:25.607Z"),array: []}}],obj: {_id: 18287,str: "open-source",array: [56105,[new Date("2018-09-06T16:14:22.548Z"),"back up redefine strategize"]],obj: {_id: 18288,date: new Date("2018-09-06T10:09:18.156Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 18289,str: "redundant",num: 72401,date: new Date("2018-09-06T18:39:44.341Z"),array: [new Date("2018-09-06T11:59:12.063Z"),new Date("2018-09-05T22:59:00.365Z"),"Money Market Account firewall",88513,27989,new Date("2018-09-06T01:35:57.359Z"),"Borders transmit violet",{_id: 18290,str: "Ergonomic",num: 13075,date: new Date("2018-09-06T05:49:20.622Z"),array: []},"Drive Chips"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18291,str: "Incredible Concrete Shirt back-end",num: 87313,date: new Date("2018-09-06T09:34:50.769Z"),obj: {_id: 18292,array: [{_id: 18293,str: "transmit",num: 65550,date: new Date("2018-09-06T15:01:13.958Z"),array: [],obj: {_id: 18294,str: "process improvement",num: 90202,date: new Date("2018-09-06T16:45:47.595Z"),array: [],obj: {_id: 18295,str: "methodical Buckinghamshire Data",num: 93929,date: new Date("2018-09-06T05:35:31.054Z"),array: ["synergy Credit Card Account",54303,new Date("2018-09-06T09:44:06.053Z"),"firmware Investment Account"],obj: {}}}},15941,{_id: 18296,num: 85004,date: new Date("2018-09-06T14:55:37.086Z"),array: []},"Dynamic Administrator",99513,22500,new Date("2018-09-06T13:39:29.813Z"),34037,{_id: 18297,str: "indexing Buckinghamshire",array: [[{_id: 18298,str: "Soft Buckinghamshire",num: 87832,date: new Date("2018-09-06T00:52:21.448Z"),obj: {_id: 18299,date: new Date("2018-09-06T17:14:13.581Z")}}],"New Mexico"],obj: {}},[],[[],new Date("2018-09-05T20:15:52.850Z"),"Cambridgeshire transmit"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18300,str: "Cambridgeshire",num: 77443,date: new Date("2018-09-06T16:47:54.910Z"),array: [],obj: {_id: 18301,str: "Buckinghamshire software scale",date: new Date("2018-09-06T17:01:41.905Z"),array: [98621,"Fantastic Soft Table Response","Supervisor digital",new Date("2018-09-06T07:13:07.808Z"),{_id: 18302,str: "Kansas Upgradable",array: [[],new Date("2018-09-06T07:01:59.131Z")]},47219,84651,"Quality-focused discrete Licensed Soft Computer",53128,new Date("2018-09-05T20:56:59.991Z"),"copy withdrawal plug-and-play",[54757,[]]],obj: {_id: 18303,str: "Yemeni Rial initiatives Associate",num: 21999,date: new Date("2018-09-06T18:56:52.304Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18304,str: "Palestinian Territory Solomon Islands Shirt",num: 34088,date: new Date("2018-09-06T13:56:58.311Z"),array: [new Date("2018-09-06T02:11:47.503Z"),13781,"Ergonomic interfaces index",["Incredible Soft Hat",new Date("2018-09-06T00:27:01.467Z"),15071,"wireless",15859],{_id: 18305,str: "panel payment",num: 17595,date: new Date("2018-09-06T06:20:30.189Z"),array: ["Corporate Motorway Tools"],obj: {_id: 18306,str: "Taiwan Refined Checking Account",num: 11002,date: new Date("2018-09-05T23:10:31.801Z"),array: [],obj: {}}},new Date("2018-09-05T22:51:46.860Z"),[],23850],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18307,str: "supply-chains initiative",num: 24572,date: new Date("2018-09-06T07:56:44.698Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18308,str: "facilitate",num: 84858,date: new Date("2018-09-06T14:03:10.916Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18309,num: 35583,date: new Date("2018-09-06T12:43:24.198Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18310,str: "analyzer Liaison integrate",num: 46543,date: new Date("2018-09-06T03:43:18.651Z"),array: [],obj: {_id: 18311,str: "1080p Intelligent Metal Cheese e-markets",num: 60886,date: new Date("2018-09-05T21:56:44.241Z"),array: [new Date("2018-09-06T11:04:18.076Z"),"local area network grey",91021,"local area network",15722,new Date("2018-09-06T17:47:54.571Z"),"Assurance Practical Fresh Salad Chips",[{_id: 18312,str: "Sleek Rubber Bacon best-of-breed",num: 25873,date: new Date("2018-09-06T10:07:21.684Z")}],[{_id: 18313,str: "synthesize Senior",num: 33341,date: new Date("2018-09-06T06:14:20.717Z"),array: [],obj: {_id: 18314,num: 78771,date: new Date("2018-09-06T03:56:38.219Z"),array: []}},new Date("2018-09-06T14:18:09.416Z"),{_id: 18315,str: "Equatorial Guinea non-volatile",array: [{_id: 18316,num: 43950,obj: {}}],obj: {}}],[],new Date("2018-09-06T01:05:57.263Z"),[38321,"system XML bypass",97768,new Date("2018-09-06T09:18:35.926Z")]],obj: {_id: 18317,date: new Date("2018-09-06T14:18:25.498Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18318,str: "exploit intranet standardization",num: 35484,date: new Date("2018-09-06T07:14:44.736Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18319,str: "Keyboard Arizona",num: 75316,date: new Date("2018-09-06T01:08:49.296Z"),array: ["Games parse",87375,{_id: 18320,str: "Marketing connect",num: 8929,array: [],obj: {}},[48966,"Gorgeous Concrete Chicken maximized B2C",new Date("2018-09-06T16:26:36.326Z"),27921,new Date("2018-09-06T07:03:14.114Z"),43719,"hack","orchid incubate Handcrafted"],new Date("2018-09-06T02:35:58.567Z"),18226],obj: {_id: 18321,str: "indexing",num: 49549,date: new Date("2018-09-06T09:12:39.134Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18322,str: "global compress brand",num: 29773,date: new Date("2018-09-06T04:03:10.737Z"),array: [[],{_id: 18323,str: "Sleek Cotton Car Producer",num: 10587,date: new Date("2018-09-06T08:01:09.401Z"),array: [new Date("2018-09-06T16:20:05.644Z"),new Date("2018-09-06T01:45:03.484Z")],obj: {_id: 18324,str: "Club Customer USB",date: new Date("2018-09-06T12:35:58.386Z"),obj: {}}},45066,"Engineer service-desk",3879,new Date("2018-09-06T14:21:28.721Z"),"Buckinghamshire Streamlined Seychelles Rupee",9139,15,new Date("2018-09-06T06:56:11.909Z"),{_id: 18325,num: 25788,obj: {}},"HTTP rich"]});
    },

    function(coll) {
        return coll.insert({_id: 18326,num: 17468,date: new Date("2018-09-06T09:36:05.912Z"),array: [],obj: {_id: 18327,str: "View driver",num: 53321,date: new Date("2018-09-06T03:23:04.357Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18328,str: "Creative",num: 31580,date: new Date("2018-09-06T05:35:09.824Z"),array: [new Date("2018-09-06T18:03:45.212Z"),3173,"driver",new Date("2018-09-06T09:16:25.855Z"),25666,99216,new Date("2018-09-06T11:22:36.929Z"),{_id: 18329,str: "Switzerland District Regional",num: 73027,date: new Date("2018-09-06T11:54:16.813Z"),array: [],obj: {}},345]});
    },

    function(coll) {
        return coll.insert({_id: 18330,str: "calculating Licensed Frozen Chicken",num: 3630,array: [87664,74137,{_id: 18331,str: "Re-engineered",date: new Date("2018-09-06T02:41:27.987Z"),array: [],obj: {}},new Date("2018-09-06T19:54:55.255Z"),34576,"Dynamic","needs-based",89082,new Date("2018-09-06T05:38:19.958Z"),36011,"tan De-engineered",new Date("2018-09-06T01:37:05.882Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18332,str: "Cedi Clothing optical",num: 33963,date: new Date("2018-09-06T02:08:07.551Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18333,str: "copy yellow Oregon",date: new Date("2018-09-06T04:26:10.778Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18334,str: "US Dollar",num: 74934,date: new Date("2018-09-06T09:24:52.779Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18335,str: "interfaces Personal Loan Account Fiji Dollar",num: 39329,date: new Date("2018-09-06T08:35:30.661Z"),array: [],obj: {_id: 18336,str: "backing up",date: new Date("2018-09-06T03:53:25.904Z"),obj: {_id: 18337,num: 77397,date: new Date("2018-09-06T19:06:00.133Z"),array: ["Intelligent"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18338,str: "Realigned",num: 81286,date: new Date("2018-09-06T17:57:31.404Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18339,str: "Credit Card Account yellow",num: 92654,date: new Date("2018-09-06T17:49:31.519Z"),array: [],obj: {_id: 18340,str: "Tools Money Market Account invoice",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18341,str: "Practical Soft Chips",num: 78314,date: new Date("2018-09-06T13:31:28.098Z"),array: [],obj: {_id: 18342,str: "Cliff Parkway system",num: 59295,date: new Date("2018-09-06T10:33:23.568Z"),array: [41228,new Date("2018-09-06T00:31:55.583Z"),new Date("2018-09-05T20:26:54.737Z"),"Orchestrator deposit Michigan",21532,"paradigms 24/7",69407,"compress","Books Fiji",{_id: 18343,str: "action-items plum",num: 39661,date: new Date("2018-09-06T18:06:45.272Z"),array: [60658],obj: {}},new Date("2018-09-05T20:31:00.483Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 18344,str: "rich",date: new Date("2018-09-05T21:49:12.661Z"),array: [],obj: {_id: 18345,str: "4th generation",array: [11419,14337,new Date("2018-09-06T19:00:55.143Z"),new Date("2018-09-06T04:43:07.929Z"),"even-keeled",{_id: 18346,num: 56428},"Response","programming bandwidth Customer-focused",{_id: 18347,str: "Chips interactive",num: 4158,date: new Date("2018-09-06T06:43:41.435Z"),array: [],obj: {_id: 18348,str: "multi-byte Sleek Granite Shirt",num: 91977,date: new Date("2018-09-06T02:47:34.883Z"),array: [[{_id: 18349,num: 14919,date: new Date("2018-09-06T09:58:37.656Z"),obj: {_id: 18350,str: "innovative",num: 35246,date: new Date("2018-09-06T01:58:06.835Z"),array: [71433],obj: {}}},[],"International Refined Wooden Soap models",66331],new Date("2018-09-06T10:58:01.025Z")],obj: {}}},new Date("2018-09-06T08:02:00.460Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 18351,str: "XML",num: 42558,array: [],obj: {_id: 18352,str: "Steel 1080p",num: 71942,date: new Date("2018-09-06T10:31:40.250Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18353,str: "Generic Fresh Bacon",num: 33179,date: new Date("2018-09-06T08:27:49.026Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18354,str: "California",num: 68051,date: new Date("2018-09-06T13:54:27.246Z"),array: [],obj: {_id: 18355,str: "Central",num: 13194,date: new Date("2018-09-06T00:21:33.395Z"),array: [[],"Unbranded bypass solid state",new Date("2018-09-06T06:19:46.644Z"),"Cambridgeshire",67501,[],"Knoll non-volatile one-to-one",new Date("2018-09-06T06:11:58.030Z"),new Date("2018-09-05T20:08:38.646Z"),96029,"frictionless Grocery",{_id: 18356,num: 77972,date: new Date("2018-09-06T17:18:25.075Z"),array: [],obj: {}},new Date("2018-09-06T16:41:52.591Z")],obj: {_id: 18357,str: "stable reciprocal",date: new Date("2018-09-06T03:28:25.589Z"),array: [{_id: 18358,str: "Minnesota Berkshire flexibility",num: 90110,date: new Date("2018-09-06T03:33:12.273Z"),obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 18359,str: "Plaza",num: 63033,date: new Date("2018-09-06T01:23:57.970Z"),array: [36409,"primary Facilitator","vortals bypassing schemas",new Date("2018-09-06T06:45:05.933Z"),new Date("2018-09-05T22:20:11.583Z")],obj: {_id: 18360,str: "HDD",date: new Date("2018-09-06T16:15:50.222Z"),array: [],obj: {_id: 18361,str: "overriding",date: new Date("2018-09-06T15:31:31.480Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 18362,str: "calculating Rustic",num: 43286,date: new Date("2018-09-06T01:19:45.923Z"),array: [new Date("2018-09-06T17:44:12.471Z"),"programming Central African Republic",56998,"Global",93085,59440,new Date("2018-09-06T03:29:46.048Z"),"solutions Metal Incredible","alarm Chips Bedfordshire",[],"Automotive",86014],obj: {_id: 18363,str: "Savings Account",num: 36455,date: new Date("2018-09-06T13:33:03.435Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18364,str: "Lights",num: 88604,date: new Date("2018-09-06T19:44:26.412Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18365,str: "parsing New Mexico",num: 36936,date: new Date("2018-09-06T19:01:13.073Z"),array: [],obj: {_id: 18366,str: "port neural infomediaries",num: 47993,date: new Date("2018-09-06T02:08:24.720Z"),array: [16611,"uniform Licensed Soft Hat Tuna",new Date("2018-09-06T17:21:07.874Z"),"Small Plastic Fish Fundamental",1578,[],{_id: 18367,str: "bandwidth",num: 90856,obj: {_id: 18368,date: new Date("2018-09-06T14:22:18.072Z"),array: [],obj: {}}},"Fish",new Date("2018-09-06T18:11:59.751Z"),new Date("2018-09-06T11:47:07.916Z"),97330],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18369,str: "Saint Martin matrix",date: new Date("2018-09-06T13:58:34.560Z"),obj: {_id: 18370,str: "Bedfordshire",num: 90793,date: new Date("2018-09-06T08:49:12.280Z"),array: [52235,new Date("2018-09-05T20:27:37.893Z"),"Movies composite Borders","Utah",new Date("2018-09-06T01:15:36.098Z"),"back-end Security feed",31672,{_id: 18371,str: "metrics Refined",num: 32130,array: []},"index info-mediaries",[52054,new Date("2018-09-05T21:27:25.094Z"),"strategic","definition AGP Industrial",{_id: 18372,num: 79327,date: new Date("2018-09-06T18:29:14.457Z"),array: [[]],obj: {}},54383,{_id: 18373,str: "Awesome supply-chains Lead",num: 7989,array: [],obj: {_id: 18374,str: "Intranet Mauritius Rupee Assurance",num: 62406,date: new Date("2018-09-06T09:52:30.405Z"),array: [],obj: {}}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 18375,str: "Sleek Metal Chair Villages Bacon",date: new Date("2018-09-06T02:16:47.070Z"),array: [86521,"deposit",94022,"withdrawal Investor",new Date("2018-09-06T03:50:47.334Z"),new Date("2018-09-06T10:26:00.531Z"),["Central Technician",{_id: 18376,str: "cross-platform Honduras",num: 48122,array: [],obj: {_id: 18377,str: "Brazilian Real lime",num: 14182,date: new Date("2018-09-06T12:37:14.468Z"),array: []}},1807,new Date("2018-09-06T16:37:22.827Z"),91641],[]],obj: {_id: 18378,str: "transmitter repurpose",num: 27123,date: new Date("2018-09-06T13:49:58.823Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18379,str: "Cheese",num: 86469,obj: {_id: 18380,str: "recontextualize Hawaii",num: 10201,date: new Date("2018-09-06T19:41:45.283Z"),array: [40946,["withdrawal neutral grey",10163,new Date("2018-09-06T09:29:25.201Z"),"International olive Quality"],24308,new Date("2018-09-06T12:57:32.307Z"),{_id: 18381,date: new Date("2018-09-06T19:15:45.747Z"),array: [],obj: {}},[],"Direct Key Cliffs",new Date("2018-09-05T21:07:20.739Z"),{_id: 18382,num: 10828,date: new Date("2018-09-06T04:33:49.920Z"),array: [new Date("2018-09-06T13:51:31.965Z"),36972],obj: {_id: 18383,str: "connecting Security",num: 58840,date: new Date("2018-09-06T04:42:47.846Z"),obj: {}}},"Senior",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 18384,str: "Books solid state Borders",num: 40403,array: [98886,40597,{_id: 18385,str: "frictionless optical Awesome Plastic Sausages",date: new Date("2018-09-06T04:20:53.178Z"),array: [new Date("2018-09-06T06:48:29.001Z"),new Date("2018-09-05T22:39:53.122Z"),new Date("2018-09-06T07:54:37.630Z"),"Refined Steel Computer","Facilitator maximize","Tunisian Dinar Granite teal"],obj: {_id: 18386,str: "Unbranded azure",num: 72664,date: new Date("2018-09-05T21:25:21.064Z"),array: [],obj: {}}},[],[],75171,{_id: 18387,str: "Unbranded Cotton Sausages",num: 99151,date: new Date("2018-09-06T05:37:26.150Z"),obj: {_id: 18388,num: 51426,date: new Date("2018-09-05T20:14:46.431Z"),array: [],obj: {_id: 18389,str: "solution content-based",num: 85552}}},{_id: 18390,str: "compress purple non-volatile",num: 93217,date: new Date("2018-09-06T19:20:11.777Z"),obj: {}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 18391,str: "Manager",num: 28318,date: new Date("2018-09-06T01:46:09.577Z"),array: [91500,new Date("2018-09-06T04:50:29.481Z"),"metrics morph",[41467,new Date("2018-09-06T04:24:07.052Z"),new Date("2018-09-06T02:47:32.486Z"),"content Engineer"],"PNG","Awesome Customer TCP",{_id: 18392,str: "quantifying parsing",num: 93349,date: new Date("2018-09-06T04:50:03.676Z"),array: [],obj: {}},{_id: 18393,str: "Credit Card Account open system",num: 60125},33748,"Jewelery Tunisian Dinar ROI"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18394,str: "Computers copy Legacy",num: 93886,date: new Date("2018-09-05T21:34:53.550Z"),array: [],obj: {_id: 18395,str: "protocol payment",num: 31627,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18396,str: "Shoes Home Loan Account",num: 99237,date: new Date("2018-09-06T07:27:30.908Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18397,str: "connect",num: 33093,date: new Date("2018-09-06T17:40:27.627Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18398,str: "AGP Security",date: new Date("2018-09-06T08:28:48.100Z"),array: [new Date("2018-09-06T18:00:57.399Z"),"productivity","Borders XSS","connect",66338,[],91280,new Date("2018-09-06T02:41:15.511Z"),new Date("2018-09-06T09:44:00.518Z"),"distributed Rustic Tools"],obj: {_id: 18399,str: "cross-platform",num: 25290,date: new Date("2018-09-06T10:17:12.377Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18400,str: "Credit Card Account hacking",num: 71420,date: new Date("2018-09-06T14:18:24.797Z"),array: [],obj: {_id: 18401,str: "Games Lead Frozen",num: 89764,date: new Date("2018-09-06T00:58:01.853Z"),array: ["Personal Loan Account Fiji Dollar Wooden",new Date("2018-09-06T18:48:45.662Z"),"Illinois",5065,51920,new Date("2018-09-06T03:54:54.462Z"),42049,{_id: 18402,str: "primary",num: 17519,array: [],obj: {}},"utilize","Credit Card Account",83794,{_id: 18403,date: new Date("2018-09-06T02:10:25.292Z"),array: [new Date("2018-09-06T17:17:58.384Z"),[],new Date("2018-09-06T00:38:45.568Z")],obj: {_id: 18404,str: "Sweden",num: 18299}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18405,str: "copying Lilangeni transition",num: 33964,date: new Date("2018-09-06T02:00:08.141Z"),array: [17900,"Soap Generic Plastic Chips",52686,"EXE",48904,new Date("2018-09-06T07:11:34.006Z"),[],[],"disintermediate ubiquitous",{_id: 18406,str: "quantify Director service-desk",num: 50008,date: new Date("2018-09-05T22:02:32.961Z"),array: []},new Date("2018-09-06T14:24:56.079Z"),{_id: 18407,str: "Palau users",array: [new Date("2018-09-06T19:43:16.363Z"),17859,new Date("2018-09-06T13:18:17.060Z")],obj: {_id: 18408,str: "North Carolina Gorgeous Plastic Chair",num: 4943,date: new Date("2018-09-06T11:17:56.348Z"),array: [],obj: {_id: 18409,num: 64015,obj: {}}}},[[{ _id: 18410 }],"Infrastructure User-centric"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18411,str: "capacitor Meadows",num: 55849,date: new Date("2018-09-06T13:06:00.757Z"),array: [13809,new Date("2018-09-05T20:21:12.349Z"),"calculate Granite zero tolerance",new Date("2018-09-06T00:40:33.084Z"),"Books Isle",53899,{_id: 18412,str: "Buckinghamshire program",num: 74330,date: new Date("2018-09-06T07:37:29.025Z"),array: [],obj: {_id: 18413,str: "open-source wireless",num: 98199,date: new Date("2018-09-06T14:22:10.682Z"),obj: {_id: 18414,num: 62548,array: [],obj: {}}}},"strategy Rustic Plastic Pants",new Date("2018-09-05T20:43:28.431Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18415,num: 77197,date: new Date("2018-09-05T23:47:18.979Z"),array: ["Coordinator",38508,"online",75600,{_id: 18416,num: 83998,array: [],obj: {_id: 18417,str: "Industrial protocol Ergonomic",num: 84498,date: new Date("2018-09-05T20:23:34.069Z"),array: []}},new Date("2018-09-06T08:13:17.188Z"),new Date("2018-09-06T07:56:44.087Z"),new Date("2018-09-06T10:41:20.089Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 18418,str: "bricks-and-clicks",num: 23532,date: new Date("2018-09-06T02:06:02.703Z"),array: [new Date("2018-09-05T20:52:19.913Z"),[],"port Montana",45070,{_id: 18419,str: "Fantastic Fresh Ball Frozen",num: 89385,date: new Date("2018-09-06T01:23:35.254Z"),array: [],obj: {_id: 18420,str: "Forges innovate Lakes",date: new Date("2018-09-05T22:07:29.974Z"),array: ["Enterprise-wide",46720,[]],obj: {}}},new Date("2018-09-06T08:01:17.752Z"),"Ball",new Date("2018-09-06T10:36:30.264Z"),[],53247,"Gorgeous withdrawal"],obj: {_id: 18421,num: 72006}});
    },

    function(coll) {
        return coll.insert({_id: 18422,str: "Bedfordshire intermediate Bedfordshire",num: 74538,date: new Date("2018-09-06T11:03:11.715Z"),array: [],obj: {_id: 18423,str: "green Tools",num: 69711,date: new Date("2018-09-06T07:56:29.983Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18424,str: "Investor Wooden",num: 84338,date: new Date("2018-09-06T19:47:01.096Z"),array: [],obj: {_id: 18425,str: "Home Loan Account Soap Sudanese Pound",date: new Date("2018-09-06T17:53:30.165Z"),array: ["TCP Fantastic Plastic Salad",[new Date("2018-09-06T10:38:41.403Z")],92469,"Regional",{_id: 18426,str: "Direct",num: 13958,obj: {}},"Monaco",new Date("2018-09-06T12:36:33.028Z"),82938,[],new Date("2018-09-05T21:46:24.194Z"),new Date("2018-09-05T23:52:17.630Z"),54499]}});
    },

    function(coll) {
        return coll.insert({_id: 18427,str: "Orchestrator",num: 76939,date: new Date("2018-09-05T23:48:35.977Z"),array: ["Bedfordshire Guarani Orchard",76684,new Date("2018-09-06T02:48:16.489Z"),"Operations stable",new Date("2018-09-06T00:28:17.590Z"),31496,new Date("2018-09-06T11:08:20.399Z"),"payment",{_id: 18428,str: "bypass Intelligent B2B",num: 45233,array: [new Date("2018-09-06T00:02:35.430Z"),{_id: 18429,str: "Identity generate intranet",date: new Date("2018-09-06T11:01:11.974Z"),array: [21015],obj: {}},23190,[],new Date("2018-09-06T18:11:45.492Z"),{_id: 18430,str: "Global International bluetooth",num: 486,date: new Date("2018-09-06T12:27:19.568Z"),array: [74208]}],obj: {}},"JSON sky blue"]});
    },

    function(coll) {
        return coll.insert({_id: 18431,str: "South Carolina Shoes",num: 67588,date: new Date("2018-09-05T23:02:57.769Z"),array: [],obj: {_id: 18432,str: "sensor",num: 54259,date: new Date("2018-09-06T09:29:38.034Z"),array: [new Date("2018-09-06T03:23:44.822Z"),"empower firmware Seamless",26734,new Date("2018-09-06T07:53:22.493Z"),79398,"Reunion","red",[new Date("2018-09-06T03:26:27.955Z"),{_id: 18433,num: 81694,date: new Date("2018-09-06T19:36:58.380Z"),array: ["quantify",{_id: 18434,str: "Unbranded Rubber Pizza"}],obj: {}},new Date("2018-09-06T02:46:45.191Z"),new Date("2018-09-06T16:06:57.527Z"),{_id: 18435,str: "SAS copy port",date: new Date("2018-09-06T15:33:20.791Z"),array: [],obj: {_id: 18436,str: "transitional",num: 47156,obj: {_id: 18437,str: "Table",num: 64906,date: new Date("2018-09-06T08:27:53.611Z"),obj: {}}}}],50391,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18438,str: "cyan Berkshire",num: 81107,date: new Date("2018-09-05T20:39:15.033Z"),array: ["multimedia initiatives",15071,"implementation Avon",95282,{_id: 18439,str: "deposit Ball input",num: 28316,date: new Date("2018-09-06T08:16:05.140Z"),array: [],obj: {}},"Metal AGP Pizza",{_id: 18440,str: "experiences",date: new Date("2018-09-06T19:51:01.282Z"),array: []},{_id: 18441,str: "networks",obj: {_id: 18442,num: 9425,date: new Date("2018-09-06T00:23:47.872Z"),array: [new Date("2018-09-05T21:11:25.915Z")],obj: { _id: 18443 }}},new Date("2018-09-06T19:26:30.651Z"),[84828],"Interactions",50953,new Date("2018-09-06T06:48:23.977Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 18444,num: 69234,date: new Date("2018-09-06T13:06:02.162Z"),array: [],obj: {_id: 18445,str: "local local",num: 48733,array: [new Date("2018-09-06T18:21:34.972Z"),63104,5469,new Date("2018-09-06T11:17:53.756Z"),{_id: 18446,str: "deliverables",num: 98139,date: new Date("2018-09-06T06:40:23.223Z"),array: [],obj: {_id: 18447,str: "Virtual",date: new Date("2018-09-06T15:48:49.747Z"),array: [],obj: {}}},"New Hampshire Future Dam",31883,"port",new Date("2018-09-06T01:56:23.974Z"),"calculating Oklahoma Palestinian Territory",["Infrastructure calculating card",[{_id: 18448,str: "open system",num: 3141,date: new Date("2018-09-05T21:43:20.705Z"),obj: {_id: 18449,date: new Date("2018-09-06T07:56:41.982Z")}}],[]],new Date("2018-09-06T00:28:08.114Z"),44412],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18450,str: "RAM",num: 51058,date: new Date("2018-09-06T18:37:40.924Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18451,str: "CSS",num: 78839,date: new Date("2018-09-05T21:28:29.875Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18452,str: "implement",num: 21896,date: new Date("2018-09-06T10:13:57.337Z"),array: [{_id: 18453,str: "withdrawal mint green Kids",date: new Date("2018-09-05T22:27:20.414Z"),array: [],obj: {_id: 18454,str: "feed withdrawal Unbranded Metal Cheese",num: 91530,date: new Date("2018-09-05T20:11:48.400Z"),array: [new Date("2018-09-06T09:11:00.846Z"),"Zambia back up panel",36110,13529,new Date("2018-09-06T05:20:31.503Z"),[]],obj: {}}},new Date("2018-09-06T01:51:53.188Z"),new Date("2018-09-06T06:54:26.243Z"),"Corporate",[],9357,new Date("2018-09-06T13:49:46.687Z"),"Fantastic Steel Keyboard","leading edge"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18455,str: "Missouri SQL Organized",num: 71578,array: [new Date("2018-09-06T01:24:28.419Z"),"virtual sticky Metal","dynamic Fantastic",new Date("2018-09-06T05:23:14.414Z"),{_id: 18456,str: "Colombia Liaison Mouse",num: 66173,date: new Date("2018-09-06T03:18:05.329Z"),array: [],obj: {}},new Date("2018-09-06T18:57:03.953Z"),99728,37645,29557,new Date("2018-09-06T05:49:12.933Z")],obj: {_id: 18457,num: 47032,date: new Date("2018-09-06T18:36:04.479Z"),array: ["partnerships Auto Loan Account",{_id: 18458,str: "Technician Centralized",date: new Date("2018-09-06T09:42:52.616Z"),array: [],obj: {_id: 18459,str: "heuristic Concrete Orchestrator",num: 49698,date: new Date("2018-09-06T12:22:42.904Z"),array: []}},[15250,"Small Cotton Hat Brand system-worthy","Coordinator Distributed",new Date("2018-09-06T18:56:55.124Z"),{_id: 18460,str: "Integration client-driven",num: 99225,array: []},[47256]]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18461,str: "Rubber Cambridgeshire",num: 88156,date: new Date("2018-09-06T06:28:37.975Z"),array: [],obj: {_id: 18462,num: 27141,date: new Date("2018-09-05T21:59:41.230Z"),array: [new Date("2018-09-06T08:42:38.197Z"),1510,{_id: 18463,str: "Enhanced Architect leverage",num: 37416,date: new Date("2018-09-05T22:16:08.057Z"),obj: {}},{_id: 18464,num: 522,date: new Date("2018-09-06T18:35:01.398Z"),array: [],obj: {_id: 18465,str: "enhance Outdoors content-based",num: 58951,date: new Date("2018-09-06T18:54:11.118Z"),array: ["deliverables e-commerce","overriding Concrete"],obj: {}}},67628,47491,[new Date("2018-09-06T16:00:27.523Z"),[],"protocol"],new Date("2018-09-06T04:57:59.465Z"),"Latvia SMS",82635,{_id: 18466,array: [[],{_id: 18467,str: "Squares deposit"}]},"port driver"]}});
    },

    function(coll) {
        return coll.insert({_id: 18468,str: "Bedfordshire Money Market Account",num: 53869,date: new Date("2018-09-06T13:14:32.827Z"),array: [],obj: {_id: 18469,str: "Persevering",num: 15865,date: new Date("2018-09-06T00:16:34.678Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18470,str: "Data virtual PCI",num: 55467,date: new Date("2018-09-06T14:33:52.987Z"),array: ["program GB",92156,"Hawaii neural",[],{_id: 18471,str: "Concrete",date: new Date("2018-09-06T14:56:23.272Z"),array: [],obj: {_id: 18472,str: "Ergonomic Soft Hat Vanuatu Soft",num: 55490,array: [],obj: {}}},48475,"cross-platform",{_id: 18473,num: 101,date: new Date("2018-09-06T14:16:40.491Z"),array: [new Date("2018-09-06T08:30:07.168Z"),60254],obj: {_id: 18474,str: "Alabama ivory",num: 70202,date: new Date("2018-09-06T07:26:28.305Z"),array: [75414,new Date("2018-09-05T20:22:14.004Z")]}},new Date("2018-09-06T15:17:06.078Z"),"red virtual",[57334,new Date("2018-09-06T08:26:36.641Z"),51816]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18475,num: 68058,date: new Date("2018-09-05T21:14:25.195Z"),array: [36704,["bricks-and-clicks Steel Legacy",[new Date("2018-09-05T21:10:53.886Z"),"Intuitive bypassing"]],new Date("2018-09-06T05:03:38.397Z"),"benchmark",90646,[76871],{_id: 18476,str: "Kuwaiti Dinar",array: [new Date("2018-09-06T11:48:47.493Z"),"channels budgetary management",new Date("2018-09-06T00:49:25.369Z"),59115,"Chief Consultant",new Date("2018-09-06T15:27:47.825Z")],obj: {_id: 18477,str: "granular invoice",num: 56363,date: new Date("2018-09-06T18:21:02.082Z"),obj: {}}},{_id: 18478,date: new Date("2018-09-06T11:48:17.269Z"),array: [],obj: {}},{_id: 18479,str: "Cambridgeshire Shoes Kroon",num: 9339,date: new Date("2018-09-05T21:41:15.175Z"),array: [],obj: {_id: 18480,str: "Fish parsing Money Market Account",num: 90571,array: [21510,{_id: 18481,str: "Cambridgeshire",array: []}],obj: {}}},91513]});
    },

    function(coll) {
        return coll.insert({_id: 18482,str: "Industrial Tasty Inverse",num: 53710,date: new Date("2018-09-06T11:33:34.574Z"),array: ["leverage",12125,66704,"Hat mesh alarm",new Date("2018-09-06T02:33:56.448Z"),"communities",new Date("2018-09-06T16:56:51.656Z"),94583,[],{_id: 18483,str: "Intranet South Carolina Representative",num: 28559,date: new Date("2018-09-06T13:41:30.170Z"),array: [new Date("2018-09-06T01:25:32.243Z"),[64327],[new Date("2018-09-06T10:33:12.843Z")],new Date("2018-09-06T01:52:34.672Z"),{_id: 18484,str: "Concrete Ergonomic Concrete Bacon",date: new Date("2018-09-06T14:20:42.549Z"),array: [],obj: {_id: 18485,str: "Money Market Account",num: 19710,date: new Date("2018-09-06T08:46:19.533Z"),array: [],obj: {_id: 18486,num: 45730,date: new Date("2018-09-06T05:03:24.631Z"),obj: {}}}},new Date("2018-09-06T14:15:26.593Z")],obj: {_id: 18487,date: new Date("2018-09-06T14:03:31.851Z"),obj: {_id: 18488,str: "Research Georgia Quality",num: 22438}}},"Officer Fundamental"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18489,str: "Ghana solid state North Dakota",num: 33381,date: new Date("2018-09-06T19:50:07.785Z"),array: [],obj: {_id: 18490,str: "Intelligent Steel Bacon Sleek",num: 74831,date: new Date("2018-09-05T20:08:07.012Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18491,str: "application FTP",num: 13077,date: new Date("2018-09-06T09:57:06.066Z"),array: ["Officer Awesome Granite Table",76482,[],84343,new Date("2018-09-06T11:55:26.962Z"),new Date("2018-09-06T09:40:36.211Z"),{_id: 18492,str: "withdrawal Auto Loan Account",num: 46129,array: ["Sleek Vatu",new Date("2018-09-06T02:55:47.038Z"),21714]},[],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18493,str: "Global",num: 48707,date: new Date("2018-09-06T05:06:42.587Z"),array: [],obj: {_id: 18494,num: 85839,date: new Date("2018-09-06T04:56:32.813Z"),array: ["Infrastructure web services",5185,new Date("2018-09-06T00:16:10.848Z"),"Iceland Krona",new Date("2018-09-06T14:27:01.802Z"),78871,[],14172,new Date("2018-09-06T14:32:22.752Z"),{_id: 18495,str: "recontextualize UAE Dirham solid state",num: 44474,date: new Date("2018-09-06T15:05:00.379Z"),array: [{_id: 18496,str: "Tools",num: 53964,date: new Date("2018-09-06T16:45:10.993Z"),array: [new Date("2018-09-06T02:41:50.954Z"),["Fantastic Plastic Gloves"]],obj: {}},2858,[],[],"Fresh transitional payment"],obj: {}},73642],obj: {_id: 18497,num: 26403,date: new Date("2018-09-06T00:07:11.457Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18498,str: "UAE Dirham",num: 82347,date: new Date("2018-09-06T04:53:29.527Z"),array: [],obj: {_id: 18499,str: "Sausages Fields calculate",num: 78085,date: new Date("2018-09-06T11:56:28.202Z"),array: ["Table web-readiness Tenge",58565,28385,"yellow payment","Well",{_id: 18500,str: "maximized Gorgeous brand",date: new Date("2018-09-06T12:05:26.179Z"),array: [new Date("2018-09-06T05:16:03.760Z"),new Date("2018-09-06T15:56:39.074Z"),new Date("2018-09-06T10:35:02.022Z")],obj: {}},[],"withdrawal matrix",{_id: 18501,str: "Frozen",num: 49024,date: new Date("2018-09-06T16:55:47.496Z"),array: [17655,97246,"teal",new Date("2018-09-05T20:51:55.111Z")]},{_id: 18502,num: 26244,date: new Date("2018-09-06T11:21:33.119Z"),array: [],obj: {}},[["1080p"]]],obj: {_id: 18503,num: 89757,date: new Date("2018-09-05T20:44:43.211Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 18504,str: "wireless",num: 96557,date: new Date("2018-09-05T21:52:41.518Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18505,str: "wireless Colombian Peso Unidad de Valor Real",num: 65133,date: new Date("2018-09-06T02:50:49.545Z"),array: [{_id: 18506,str: "GB",num: 25429,array: [],obj: {}},"Concrete",25735,24405,new Date("2018-09-06T00:12:56.424Z"),"Incredible Cotton Pizza Lake",[7597,"Zimbabwe Dollar intranet","Principal extend index",41823,new Date("2018-09-06T02:04:45.866Z")],[],"transition Solutions multi-byte",new Date("2018-09-06T02:40:58.795Z"),7004],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18507,str: "reboot Fantastic",num: 50565,date: new Date("2018-09-06T11:51:38.627Z"),array: [26773,new Date("2018-09-06T09:26:22.441Z"),66425,"FTP Plastic",[{_id: 18508,str: "synthesize",num: 22298,date: new Date("2018-09-06T02:28:30.932Z"),obj: {}},{_id: 18509,str: "index revolutionary",num: 65535,date: new Date("2018-09-05T21:59:50.408Z"),array: ["backing up Solutions"],obj: {_id: 18510,str: "quantify Palladium",num: 44984,array: [],obj: {_id: 18511,str: "Dynamic",array: [],obj: {}}}},new Date("2018-09-06T14:29:25.880Z")],64384,74067,85204,"Rwanda Franc Algerian Dinar SMS",{_id: 18512,date: new Date("2018-09-05T20:10:48.236Z"),obj: {}},[83430,new Date("2018-09-06T17:30:59.781Z"),{_id: 18513,str: "interface",num: 31269,date: new Date("2018-09-06T13:17:28.266Z"),array: [],obj: {}},93348,new Date("2018-09-06T02:50:45.825Z"),"teal"]],obj: {_id: 18514,array: ["Fantastic Granite Chips Incredible Concrete Keyboard"]}});
    },

    function(coll) {
        return coll.insert({_id: 18515,str: "compressing",num: 48117,date: new Date("2018-09-06T11:53:13.561Z"),array: [new Date("2018-09-06T03:11:59.098Z"),{_id: 18516,str: "redundant",date: new Date("2018-09-06T03:31:24.549Z"),array: [],obj: {}},{_id: 18517,num: 59400,date: new Date("2018-09-06T17:58:49.170Z"),array: ["withdrawal",45785,[],15730],obj: {_id: 18518,str: "Concrete infrastructures",num: 98417,obj: {}}},"De-engineered RAM",new Date("2018-09-06T10:07:18.814Z"),"Personal Loan Account vertical Chair","Fantastic",{_id: 18519,str: "stable",date: new Date("2018-09-06T04:21:46.595Z"),obj: {_id: 18520,num: 38478,date: new Date("2018-09-06T17:54:59.216Z"),array: [new Date("2018-09-06T09:43:26.120Z")]}},"Rustic Jamaican Dollar pink"]});
    },

    function(coll) {
        return coll.insert({_id: 18521,str: "Avon value-added",num: 2779,date: new Date("2018-09-06T09:28:34.379Z"),array: ["hierarchy disintermediate Generic Cotton Soap",new Date("2018-09-06T06:16:16.754Z"),{_id: 18522,str: "Solutions Georgia Incredible",num: 28666,date: new Date("2018-09-06T02:20:33.198Z"),array: [],obj: {}},86395,[],19125,new Date("2018-09-06T17:11:44.332Z"),"Legacy Investment Account","Multi-lateral",new Date("2018-09-06T08:17:48.017Z"),78168,"neural"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18523,str: "Generic",num: 77729,array: [89022,"eyeballs disintermediate Tasty Concrete Gloves",new Date("2018-09-06T11:09:06.717Z"),new Date("2018-09-06T08:41:31.488Z"),"grey yellow architecture",95851,"sensor",new Date("2018-09-05T20:04:11.479Z"),25939,68491,new Date("2018-09-05T20:40:59.494Z"),[],"Assistant Hat"],obj: {_id: 18524,str: "Shirt",num: 57225,date: new Date("2018-09-06T02:03:12.354Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18525,str: "Optimization Auto Loan Account",num: 63038,date: new Date("2018-09-05T21:05:00.660Z"),array: [],obj: {_id: 18526,str: "Functionality",date: new Date("2018-09-06T14:37:43.395Z"),array: [new Date("2018-09-06T17:36:03.421Z"),3210,"Identity compelling",new Date("2018-09-06T09:17:13.008Z"),"Operations","Rustic Plastic Gloves",[],[],{_id: 18527,str: "input",num: 14098,obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18528,str: "azure Avon",num: 40978,date: new Date("2018-09-06T19:34:38.364Z"),array: [],obj: {_id: 18529,str: "International",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18530,str: "COM",array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18531,str: "Ergonomic",num: 7835,date: new Date("2018-09-06T10:56:04.828Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18532,str: "Bacon auxiliary",num: 85697,date: new Date("2018-09-06T00:00:38.437Z"),array: [86942,32862,"Berkshire online",new Date("2018-09-06T03:01:23.704Z"),"unleash RAM",{_id: 18533,str: "XSS generating Beauty",num: 91912,date: new Date("2018-09-06T07:27:28.061Z"),obj: {_id: 18534,str: "Philippines",date: new Date("2018-09-05T23:12:48.315Z"),array: [35902]}},"object-oriented collaborative Andorra",new Date("2018-09-06T07:30:33.999Z"),new Date("2018-09-06T13:24:20.037Z"),68358,new Date("2018-09-06T00:08:52.937Z"),new Date("2018-09-06T08:54:49.652Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18535,str: "Devolved",num: 78624,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18536,str: "copy invoice e-tailers",num: 13403,date: new Date("2018-09-06T15:01:18.136Z"),array: [],obj: {_id: 18537,str: "Money Market Account emulation tan",num: 25999,date: new Date("2018-09-06T10:58:44.644Z"),array: [new Date("2018-09-06T14:53:14.892Z"),new Date("2018-09-06T10:03:15.983Z"),[],new Date("2018-09-06T11:14:04.534Z"),"experiences haptic Iceland Krona",10954,new Date("2018-09-06T08:28:08.010Z"),6384,"CSS Mouse technologies",98705,{_id: 18538,str: "Tasty Granite Chicken",num: 58830,array: [16138,{_id: 18539,str: "Chips Indonesia connect",date: new Date("2018-09-06T10:44:49.842Z"),array: [[],{_id: 18540,num: 74454,date: new Date("2018-09-06T08:42:12.868Z"),array: [],obj: {}},"Buckinghamshire red","override Berkshire Yemeni Rial"]}],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18541,str: "Facilitator Prairie",num: 64615,date: new Date("2018-09-06T11:03:53.955Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18542,num: 77607,date: new Date("2018-09-06T10:24:36.426Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18543,str: "web-enabled hacking PCI",date: new Date("2018-09-06T11:03:27.862Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18544,str: "synthesize Supervisor",obj: {_id: 18545,num: 54202,date: new Date("2018-09-06T07:44:11.658Z"),array: [new Date("2018-09-05T22:50:45.083Z"),"Steel",9736,26171,new Date("2018-09-06T10:26:49.211Z"),{_id: 18546,str: "Sleek Wooden Bacon sexy Kenya",num: 28852,date: new Date("2018-09-06T09:43:29.194Z"),obj: {_id: 18547,str: "SQL",num: 84690,date: new Date("2018-09-06T12:09:18.779Z"),array: []}},"Belize Dollar",[new Date("2018-09-05T21:14:45.087Z"),99316,new Date("2018-09-06T09:20:47.589Z")],new Date("2018-09-06T17:13:49.257Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 18548,str: "Auto Loan Account",num: 67441,date: new Date("2018-09-05T21:21:43.341Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18549,str: "Books",num: 30126,date: new Date("2018-09-06T12:58:51.163Z"),array: ["Front-line Cambridgeshire",33773,{_id: 18550,num: 764,date: new Date("2018-09-06T13:09:22.344Z"),array: ["Utah silver",new Date("2018-09-06T01:14:07.668Z"),91951],obj: {}},new Date("2018-09-06T16:37:08.819Z"),[],"AI payment",[],new Date("2018-09-06T02:05:10.783Z"),[new Date("2018-09-05T21:02:27.950Z")],65871,{_id: 18551,str: "visualize invoice back-end",date: new Date("2018-09-06T02:09:37.265Z"),array: ["Liaison Palladium cross-platform","engineer Mills",58348,[],new Date("2018-09-06T15:00:29.807Z")],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 18552,str: "deposit Corporate",num: 82733,date: new Date("2018-09-06T04:07:18.848Z"),array: ["USB Direct executive",19230,56988,new Date("2018-09-05T21:01:55.972Z"),85268,99153,new Date("2018-09-06T14:32:41.848Z"),"rich system Health",[],new Date("2018-09-06T18:49:08.017Z")],obj: {_id: 18553,str: "infomediaries Table",num: 35828,date: new Date("2018-09-06T07:36:57.435Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18554,str: "Games back up",num: 81996,date: new Date("2018-09-06T06:00:24.247Z"),array: [new Date("2018-09-06T08:22:01.526Z"),66319,{_id: 18555,str: "interactive",num: 48147,date: new Date("2018-09-06T02:22:05.398Z"),array: [],obj: {}},{_id: 18556,str: "dynamic",num: 31287,date: new Date("2018-09-06T18:26:40.352Z"),array: [new Date("2018-09-06T01:46:07.148Z"),32770,99767],obj: {}},"Chips","Architect",95857,[],new Date("2018-09-05T23:20:58.502Z")],obj: {_id: 18557,str: "Indiana Mobility 24/7",num: 63965}});
    },

    function(coll) {
        return coll.insert({_id: 18558,str: "Shoes copying",num: 94699,array: [],obj: {_id: 18559,str: "Harbor Ball syndicate",num: 8000,date: new Date("2018-09-06T16:52:05.780Z"),obj: {_id: 18560,str: "Bike efficient Handmade Plastic Chair",num: 53210,date: new Date("2018-09-06T05:36:33.780Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 18561,num: 50882,date: new Date("2018-09-06T04:12:13.450Z"),array: [new Date("2018-09-06T18:02:35.954Z"),[],87969,79556,"solutions Avon initiatives",86934,"Argentine Peso Chair",{_id: 18562,str: "Dynamic Consultant",num: 75589,date: new Date("2018-09-05T20:27:14.625Z"),array: [],obj: {}},"mesh Buckinghamshire",6161,{_id: 18563,str: "Gabon",date: new Date("2018-09-06T05:33:08.364Z"),array: [new Date("2018-09-06T09:26:43.487Z")],obj: {_id: 18564,str: "Tasty Steel Cheese withdrawal",num: 60648,date: new Date("2018-09-05T20:08:13.507Z"),obj: {_id: 18565,str: "Licensed Run",array: ["Tajikistan Alabama"]}}}]});
    },

    function(coll) {
        return coll.insert({_id: 18566,str: "optimize invoice",num: 20758,date: new Date("2018-09-05T22:23:49.374Z"),obj: {_id: 18567,str: "Sleek",num: 12162,array: [new Date("2018-09-06T05:27:40.215Z"),12151,"input Wooden",7629,"homogeneous Buckinghamshire","flexibility",41030,new Date("2018-09-06T19:25:42.334Z"),"USB",[],{_id: 18568,num: 98523,date: new Date("2018-09-06T07:55:55.031Z"),array: [],obj: {_id: 18569,str: "virtual Harbors Home Loan Account",num: 36916,date: new Date("2018-09-06T02:15:16.732Z"),array: []}},[new Date("2018-09-06T16:41:37.875Z"),{_id: 18570,str: "copy Industrial",array: [new Date("2018-09-06T11:14:46.720Z")],obj: {}}],"Money Market Account Platinum"]}});
    },

    function(coll) {
        return coll.insert({_id: 18571,str: "Borders Synergistic",num: 6693,date: new Date("2018-09-06T09:42:11.888Z"),array: [new Date("2018-09-06T03:05:41.811Z"),{_id: 18572,str: "feed auxiliary Money Market Account",num: 1875,date: new Date("2018-09-06T03:47:08.124Z"),array: ["Borders"],obj: {_id: 18573,str: "directional panel Ways",num: 97671,date: new Date("2018-09-06T04:50:57.131Z"),array: [],obj: {_id: 18574,str: "CSS Maldives",num: 29978,date: new Date("2018-09-06T09:39:14.505Z"),obj: {}}}},"Chair Vermont connect",13103,new Date("2018-09-05T21:11:12.403Z"),"Oman",[],[],71369,"streamline",{_id: 18575,array: [new Date("2018-09-06T05:18:55.571Z"),53840,"Sharable neutral Health",{_id: 18576,array: [new Date("2018-09-06T09:43:01.148Z"),new Date("2018-09-06T02:48:59.882Z")]}],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 18577,str: "Engineer mission-critical",num: 28644,date: new Date("2018-09-06T09:06:06.959Z"),array: [],obj: {_id: 18578,str: "withdrawal Incredible Fresh Shoes",num: 82186,date: new Date("2018-09-06T09:53:41.876Z"),array: [41005,new Date("2018-09-06T19:39:56.551Z"),28459,"ivory",[],"maximize Washington",{_id: 18579,str: "seamless Buckinghamshire",num: 40354,array: [],obj: {_id: 18580,str: "zero administration cross-platform experiences",num: 6105,date: new Date("2018-09-06T02:41:15.024Z"),obj: {}}},"Intelligent Frozen",new Date("2018-09-06T19:32:00.285Z"),new Date("2018-09-05T20:42:11.605Z"),{_id: 18581,num: 70759,date: new Date("2018-09-06T12:57:21.979Z"),array: [63692,new Date("2018-09-06T10:37:57.007Z"),17491],obj: {}},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 18582,str: "Toys turquoise SMS",num: 12663,date: new Date("2018-09-06T03:10:37.721Z"),array: [{_id: 18583,str: "Sleek Fresh Concrete",num: 54280,date: new Date("2018-09-05T22:29:08.173Z"),array: [],obj: {}},new Date("2018-09-05T22:40:58.821Z"),{_id: 18584,str: "Tasty Borders",num: 44812},40231,34410,"Phased","Ergonomic Rubber Shirt Flat overriding","Pike West Virginia",new Date("2018-09-05T21:48:54.635Z")],obj: {_id: 18585,num: 99988,date: new Date("2018-09-06T12:25:04.925Z"),array: [33992],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18586,str: "Licensed Gorgeous Plastic Bike hard drive",num: 94816,date: new Date("2018-09-06T15:27:40.997Z"),array: [30338,"Underpass Auto Loan Account",new Date("2018-09-06T15:58:31.091Z"),33191,new Date("2018-09-06T15:58:49.070Z"),53340,"Intelligent",32157,"Chicken"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18587,num: 35016,date: new Date("2018-09-06T01:08:06.435Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18588,str: "copy 6th generation markets",num: 24405,date: new Date("2018-09-06T08:00:01.635Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18589,str: "indexing Lilangeni Communications",num: 86345,date: new Date("2018-09-06T04:19:33.480Z"),array: ["Berkshire invoice",new Date("2018-09-06T10:09:09.026Z"),new Date("2018-09-05T21:59:10.754Z"),25538,71761,new Date("2018-09-06T04:16:42.083Z"),"Technician bus"],obj: {_id: 18590,str: "Trail",date: new Date("2018-09-05T22:54:47.919Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18591,str: "Cambridgeshire New Jersey optimizing",num: 57649,date: new Date("2018-09-06T15:16:46.160Z"),array: [new Date("2018-09-06T12:41:32.206Z"),20592,"coherent attitude-oriented innovative","firewall",[],"SMTP",new Date("2018-09-06T14:09:05.171Z"),[],"Equatorial Guinea withdrawal",54553,{_id: 18592,str: "Peso Uruguayo Uruguay Peso en Unidades Indexadas black Direct",num: 83096,date: new Date("2018-09-06T14:32:37.665Z"),array: [],obj: {}},new Date("2018-09-05T23:52:51.137Z"),1894],obj: {_id: 18593,str: "Place Jersey",num: 73616,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18594,str: "Toys Streets",num: 32116,date: new Date("2018-09-06T17:01:28.281Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18595,str: "regional",num: 88301,date: new Date("2018-09-05T21:39:25.216Z"),array: [new Date("2018-09-06T01:02:36.588Z"),"global Designer",[{_id: 18596,num: 31846,date: new Date("2018-09-06T03:35:47.741Z"),obj: {_id: 18597,str: "SQL Tugrik Green",date: new Date("2018-09-06T15:11:16.066Z"),array: [],obj: {}}},new Date("2018-09-06T07:08:05.086Z")],"Licensed",60732,96950,new Date("2018-09-06T11:44:42.614Z"),[32666,35942,"synthesize systematic"],{_id: 18598,str: "generate COM payment",num: 18540,array: [],obj: {_id: 18599,str: "Metrics Practical Steel Ball",num: 72472,array: []}},new Date("2018-09-05T22:55:29.947Z"),79221,{_id: 18600,str: "Plastic SCSI",num: 38332,date: new Date("2018-09-06T05:40:49.368Z"),array: [[],"open-source"],obj: {}}],obj: {_id: 18601,num: 19657,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 18602,str: "dynamic benchmark teal",num: 10804,date: new Date("2018-09-06T08:12:17.289Z"),array: [89218,{_id: 18603,str: "program Island",num: 46422,array: ["back-end IB",new Date("2018-09-06T10:05:49.521Z"),"Credit Card Account"],obj: {_id: 18604,str: "Handmade global",num: 7760,date: new Date("2018-09-06T08:28:26.994Z"),array: [],obj: {}}},new Date("2018-09-06T18:26:46.709Z"),67065,24584,"AI Greece",new Date("2018-09-06T18:06:53.870Z")],obj: {_id: 18605,str: "PNG eco-centric",num: 92755,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18606,str: "Parkway",num: 61220,date: new Date("2018-09-06T08:11:32.251Z"),array: [],obj: {_id: 18607,str: "AI Frozen",num: 416,date: new Date("2018-09-06T07:14:17.946Z"),array: [39797,new Date("2018-09-06T07:25:35.606Z"),"Personal Loan Account payment",new Date("2018-09-06T09:22:20.032Z"),74251,"purple IB",{_id: 18608,str: "structure Plastic",num: 22665,array: [new Date("2018-09-06T11:07:37.369Z"),65043,"Intelligent Plastic Ball Fantastic Rubber Computer Fantastic Cotton Car",[]],obj: {_id: 18609,str: "toolset Balanced Cambridgeshire",date: new Date("2018-09-06T08:17:27.380Z"),obj: {}}},41679,{_id: 18610,date: new Date("2018-09-06T07:06:44.492Z"),array: [{_id: 18611,str: "Ohio vertical",num: 66240,obj: {}}],obj: {_id: 18612,str: "functionalities cyan",num: 24603,date: new Date("2018-09-06T13:47:48.771Z"),array: ["virtual Savings Account Health"]}}]}});
    },

    function(coll) {
        return coll.insert({_id: 18613,str: "Malagasy Ariary Frozen",num: 16574,array: [21264,4695,new Date("2018-09-06T15:29:31.124Z"),"Senior Dynamic",new Date("2018-09-06T14:57:52.529Z"),"Intranet Intelligent Wooden Salad Auto Loan Account","Intelligent Granite Tuna",{_id: 18614,str: "Credit Card Account",num: 67000,date: new Date("2018-09-06T09:11:04.868Z"),array: [],obj: {_id: 18615,str: "Fantastic Borders",date: new Date("2018-09-06T13:49:04.933Z"),array: [],obj: {}}},new Date("2018-09-06T06:06:04.034Z"),74336,{_id: 18616,date: new Date("2018-09-06T19:09:07.430Z"),obj: {_id: 18617,str: "Bedfordshire Credit Card Account",num: 55998,array: [],obj: {}}},"Cotton wireless",new Date("2018-09-06T01:10:58.773Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18618,str: "Face to face parse Ethiopian Birr",num: 20535,array: [],obj: {_id: 18619,str: "generating Locks green",num: 6997,date: new Date("2018-09-06T02:02:53.710Z"),array: ["Assurance Health primary",{_id: 18620,num: 68150,date: new Date("2018-09-06T07:37:26.304Z"),array: [93973],obj: {_id: 18621,str: "Checking Account Berkshire",num: 90114,date: new Date("2018-09-06T12:53:02.059Z"),array: [new Date("2018-09-06T02:36:30.701Z"),"Unbranded protocol",new Date("2018-09-06T17:09:03.195Z"),"Fantastic vortals Car",{_id: 18622,str: "invoice invoice Decentralized",num: 3714,date: new Date("2018-09-06T14:18:18.296Z"),array: [],obj: {}}]}},[],new Date("2018-09-06T15:49:15.605Z"),26262,"Steel","invoice Shoes withdrawal",[new Date("2018-09-05T22:11:18.309Z")],41214,{_id: 18623,str: "Awesome Tasty Granite Keyboard",date: new Date("2018-09-06T19:39:52.912Z")},"Agent"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18624,str: "redundant",num: 95559,date: new Date("2018-09-06T19:07:06.514Z"),array: [],obj: {_id: 18625,str: "Brunei Darussalam copying USB",num: 60212,date: new Date("2018-09-06T15:28:09.504Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18626,num: 98545,date: new Date("2018-09-06T16:49:38.727Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18627,str: "solid state budgetary management Sudanese Pound",num: 7556,date: new Date("2018-09-06T13:06:57.575Z"),array: [],obj: {_id: 18628,str: "teal black expedite",date: new Date("2018-09-06T12:10:07.426Z"),array: ["backing up Libyan Dinar Future",new Date("2018-09-06T10:31:12.430Z"),22189,new Date("2018-09-06T01:50:05.547Z"),"well-modulated parsing mint green",[],new Date("2018-09-06T05:49:19.464Z"),35420,["Home Loan Account",new Date("2018-09-06T05:19:33.183Z"),{_id: 18629,str: "Central Creative Generic",num: 52212,date: new Date("2018-09-06T15:15:59.862Z"),array: [],obj: {}},{_id: 18630,str: "Small Granite Cheese value-added Mobility",num: 86716,date: new Date("2018-09-06T08:46:49.427Z"),obj: {}}],"real-time overriding Customer"],obj: {_id: 18631,str: "copying",num: 35813,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18632,str: "cyan hacking Berkshire",num: 72329,date: new Date("2018-09-06T04:10:20.333Z"),array: [new Date("2018-09-06T17:53:52.852Z"),"deposit",{_id: 18633,str: "Handmade Rubber Table transmit quantify",num: 83584,obj: {_id: 18634,str: "fuchsia Corporate protocol",num: 65782,date: new Date("2018-09-06T18:47:05.667Z"),obj: {_id: 18635,str: "Balanced Burundi Books",num: 51391,date: new Date("2018-09-05T20:14:23.186Z"),array: []}}},new Date("2018-09-06T19:53:19.063Z"),34296,33194,"integrated Rhode Island invoice",54659,[new Date("2018-09-06T02:26:30.399Z"),{_id: 18636,str: "Technician Parkway Generic Metal Soap",array: [],obj: {}}],18132,{_id: 18637,num: 98004,date: new Date("2018-09-06T03:39:44.183Z"),array: [[],21806,"quantify Beauty"],obj: {_id: 18638,date: new Date("2018-09-06T03:52:13.004Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 18639,str: "utilisation cross-platform",num: 53569,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18640,str: "primary",num: 47672,date: new Date("2018-09-06T04:02:06.573Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18641,str: "Bike Bedfordshire",num: 41349,date: new Date("2018-09-06T06:39:46.056Z"),array: ["Unbranded Borders Streamlined","Chief Unbranded Metal Ball",new Date("2018-09-06T04:05:40.446Z"),[],{_id: 18642,str: "Licensed generating",num: 80339,date: new Date("2018-09-06T02:46:25.812Z"),array: [{_id: 18643,str: "primary Democratic People's Republic of Korea",num: 63964,date: new Date("2018-09-06T01:29:59.671Z"),array: [],obj: {_id: 18644,date: new Date("2018-09-06T01:22:23.318Z"),array: [],obj: {}}},2466,new Date("2018-09-06T03:47:52.870Z"),"B2C US Dollar"]},62248,[50463],[],"Accounts deposit","monitor TCP plum",89230],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18645,str: "International Buckinghamshire",num: 96509,date: new Date("2018-09-06T02:19:16.168Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18646,str: "bottom-line Grocery",num: 65729,date: new Date("2018-09-06T04:56:00.618Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18647,str: "budgetary management cutting-edge",num: 56293,date: new Date("2018-09-06T03:25:19.438Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18648,str: "blue Islands",num: 8412,date: new Date("2018-09-06T05:35:17.327Z"),obj: {_id: 18649,str: "Small Hawaii payment",num: 56498,date: new Date("2018-09-06T06:30:53.534Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18650,str: "Codes specifically reserved for testing purposes",num: 71553,date: new Date("2018-09-06T13:35:50.378Z"),array: [81111,4686,"holistic SAS",new Date("2018-09-06T10:32:41.138Z"),[],new Date("2018-09-05T23:52:15.969Z"),new Date("2018-09-06T09:21:08.274Z"),new Date("2018-09-06T11:22:00.618Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18651,str: "Dominican Republic Gorgeous Soft Mouse Versatile",num: 56256,date: new Date("2018-09-06T01:32:20.199Z"),array: [],obj: {_id: 18652,str: "Cotton Licensed Fresh Ball Maine",date: new Date("2018-09-06T04:58:02.199Z"),array: [59895,"technologies Sleek Metal Bacon data-warehouse","Place Borders Cotton",{_id: 18653,str: "Customer 3rd generation",num: 56832,date: new Date("2018-09-05T21:57:41.209Z"),array: [new Date("2018-09-05T22:45:16.370Z"),new Date("2018-09-06T02:12:21.606Z"),11506,"quantify Central turn-key",[]],obj: {}},new Date("2018-09-06T10:54:01.650Z"),"productivity Games mint green",{_id: 18654,str: "Indiana Savings Account National",num: 81397,date: new Date("2018-09-05T20:21:57.315Z"),obj: {_id: 18655,str: "backing up Peru",num: 87663,obj: {}}},65741,[],{_id: 18656,str: "Mouse",date: new Date("2018-09-06T12:48:24.025Z"),array: [],obj: {_id: 18657,num: 2045,array: [19867]}}]}});
    },

    function(coll) {
        return coll.insert({_id: 18658,str: "Fantastic",num: 61825,date: new Date("2018-09-06T17:14:26.016Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18659,str: "Checking Account",num: 79645,date: new Date("2018-09-06T01:23:53.042Z"),array: [],obj: {_id: 18660,str: "Canadian Dollar Netherlands Antillian Guilder Computers",num: 29699,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18661,str: "Station Small Concrete Tuna Future",num: 42659,date: new Date("2018-09-06T03:30:57.514Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18662,str: "orchestration Security",num: 44139,date: new Date("2018-09-06T01:47:09.670Z"),array: [new Date("2018-09-06T05:59:01.188Z"),new Date("2018-09-06T03:51:09.285Z"),new Date("2018-09-06T18:05:50.995Z"),[],52477,{_id: 18663,array: ["channels Accounts","mindshare"],obj: {}},1442,[],"Cote d'Ivoire Reverse-engineered","clicks-and-mortar",new Date("2018-09-06T14:35:50.180Z"),68548,62447,new Date("2018-09-06T04:34:55.610Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18664,str: "National mint green",num: 58050,date: new Date("2018-09-06T12:03:47.363Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18665,str: "robust Home Loan Account",num: 1514,date: new Date("2018-09-06T17:06:57.411Z"),array: ["applications Intelligent Frozen Hat",69497,new Date("2018-09-05T22:03:02.012Z"),80800,85790,new Date("2018-09-05T21:32:04.300Z")],obj: {_id: 18666,date: new Date("2018-09-06T12:46:52.675Z"),array: [],obj: {_id: 18667,str: "circuit",num: 24014,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 18668,str: "North Carolina Practical Plastic Bacon",date: new Date("2018-09-06T14:19:01.908Z"),array: [],obj: {_id: 18669,str: "Cloned",num: 21566,array: [new Date("2018-09-06T08:00:10.165Z"),37051,63724,{_id: 18670,str: "Table",num: 92978,date: new Date("2018-09-06T08:08:56.322Z"),obj: {_id: 18671,str: "Factors",num: 55665,date: new Date("2018-09-05T20:21:55.923Z"),array: [],obj: {}}},new Date("2018-09-06T11:29:17.848Z"),"Practical Soft Pants Multi-layered",[],[new Date("2018-09-06T16:09:16.360Z"),new Date("2018-09-06T06:28:56.343Z"),"Metal web-enabled"],new Date("2018-09-05T23:50:16.900Z"),"Soft",{_id: 18672,date: new Date("2018-09-06T03:28:31.362Z"),array: ["Ergonomic Soft Pants",15077]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18673,str: "Tasty Frozen Shoes",date: new Date("2018-09-05T22:59:23.796Z"),array: [new Date("2018-09-06T12:59:01.196Z"),65444,"expedite Licensed Wooden Mouse",{_id: 18674,str: "Kwanza",num: 32430,date: new Date("2018-09-05T21:13:47.567Z"),array: [],obj: {_id: 18675,num: 51137,date: new Date("2018-09-06T01:29:14.827Z"),obj: {}}},new Date("2018-09-06T01:59:50.384Z"),"web-enabled payment",57474,{_id: 18676,str: "PCI",num: 68730,array: [],obj: {}},"Steel Sleek Metal Soap",[new Date("2018-09-06T13:50:57.279Z"),new Date("2018-09-06T05:14:41.168Z")],new Date("2018-09-06T12:42:08.675Z"),"SDD",{_id: 18677,str: "mission-critical Solomon Islands Dollar",num: 37158,date: new Date("2018-09-06T05:32:01.022Z"),array: []}],obj: {_id: 18678,str: "overriding",obj: {_id: 18679,num: 53419,date: new Date("2018-09-06T11:14:43.122Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 18680,str: "emulation quantifying Administrator",num: 93753,date: new Date("2018-09-05T21:15:28.816Z"),array: [],obj: {_id: 18681,str: "quantify Pizza Handmade",num: 33740,date: new Date("2018-09-06T16:55:21.946Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18682,num: 44856,date: new Date("2018-09-06T17:50:00.413Z"),array: [new Date("2018-09-06T10:11:39.425Z"),{_id: 18683,str: "Handmade Fresh Computer Investment Account Wooden",num: 69014,date: new Date("2018-09-06T00:16:16.627Z"),array: [],obj: {_id: 18684,str: "optimal Concrete",num: 87447,date: new Date("2018-09-06T01:10:53.159Z"),array: [],obj: {}}},new Date("2018-09-05T23:36:31.483Z"),64527,"Luxembourg Mouse Generic",{_id: 18685,str: "withdrawal Assistant Mongolia",num: 66218,date: new Date("2018-09-06T09:31:48.972Z"),obj: {_id: 18686,date: new Date("2018-09-06T04:20:41.421Z"),array: [{_id: 18687,str: "bypass New Israeli Sheqel Cliff",num: 95596,date: new Date("2018-09-06T19:40:46.066Z"),array: [],obj: {}},"haptic digital",35670,36261]}},81552,new Date("2018-09-05T21:18:09.735Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18688,str: "Som",num: 19799,date: new Date("2018-09-06T17:52:05.992Z"),array: [],obj: {_id: 18689,str: "teal",num: 10231,date: new Date("2018-09-06T18:45:40.531Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18690,str: "Concrete",num: 55879,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18691,str: "Handcrafted Granite Computer Awesome",num: 1308,date: new Date("2018-09-06T19:32:23.027Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 18692,num: 13817,date: new Date("2018-09-05T21:48:01.723Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18693,str: "transmitting Circles",date: new Date("2018-09-05T21:15:49.084Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18694,str: "Ball",num: 14970,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18695,str: "Bedfordshire",num: 8982,date: new Date("2018-09-06T00:05:08.669Z"),array: [new Date("2018-09-05T21:30:41.949Z"),96406,new Date("2018-09-06T17:38:52.614Z"),"Officer Intelligent","Liaison",new Date("2018-09-06T09:38:25.106Z"),"Senior Organic",{_id: 18696,str: "Ergonomic Cotton Towels",num: 37966,date: new Date("2018-09-06T07:22:10.148Z"),obj: { _id: 18697 }},[],{_id: 18698,str: "overriding",num: 27855,date: new Date("2018-09-05T21:31:41.793Z"),array: [],obj: {_id: 18699,num: 42402,date: new Date("2018-09-06T17:44:23.679Z"),array: [90700,94565,[[]],"Ergonomic Fresh Pizza compress Gorgeous"],obj: {}}},{_id: 18700,str: "Granite payment eco-centric",num: 11853,array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18701,str: "Bedfordshire",num: 92081,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18702,str: "Grocery Colorado",num: 44628,date: new Date("2018-09-05T23:00:20.543Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18703,str: "Yuan Renminbi Infrastructure cross-platform",date: new Date("2018-09-05T21:06:16.803Z"),array: [new Date("2018-09-05T20:51:23.549Z"),new Date("2018-09-06T01:14:06.763Z"),"Avon Data",99435,"streamline zero administration Czech Koruna","Isle Extension",{_id: 18704,str: "auxiliary monitoring",num: 9313,date: new Date("2018-09-06T03:25:16.913Z"),array: [],obj: {}},15022,92633,48804],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 18705,str: "multi-byte Ouguiya",date: new Date("2018-09-06T10:44:32.708Z"),array: ["Garden indigo global",62053,"repurpose B2B Cambridgeshire",97655,28110,new Date("2018-09-06T08:35:55.615Z"),["Awesome Wooden",new Date("2018-09-06T08:06:08.354Z"),[],61967],{_id: 18706,str: "Computer magenta demand-driven",num: 85914,date: new Date("2018-09-06T14:47:13.425Z"),array: [],obj: {_id: 18707,str: "Sausages",num: 52582,date: new Date("2018-09-06T08:58:47.603Z"),array: ["platforms initiative"],obj: {}}},10277,new Date("2018-09-05T20:09:20.727Z"),new Date("2018-09-06T10:27:44.249Z")]});
    },

    function(coll) {
        return coll.insert({_id: 18708,str: "Djibouti Franc Cambridgeshire web-readiness",num: 64957,date: new Date("2018-09-06T15:16:10.913Z"),array: [],obj: {_id: 18709,str: "TCP innovate",num: 87313,array: ["Internal Slovakia (Slovak Republic) composite",21305,"repurpose Avon",[],new Date("2018-09-06T00:30:14.418Z"),73232,41981,"New Hampshire Optimized Liberian Dollar",new Date("2018-09-06T11:09:51.313Z"),"program violet Beauty",new Date("2018-09-06T17:30:08.416Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18710,str: "IB facilitate",num: 40664,date: new Date("2018-09-06T00:37:18.464Z"),array: ["transitional Pizza scalable",new Date("2018-09-05T22:05:01.339Z"),new Date("2018-09-06T19:33:03.106Z"),13929,71166,"morph",new Date("2018-09-06T09:23:51.656Z"),"indexing tangible",[21849,new Date("2018-09-06T09:15:06.158Z"),"withdrawal mesh"],new Date("2018-09-06T11:30:00.630Z")],obj: {_id: 18711,str: "Ergonomic Metal Ball",num: 35476,array: [{_id: 18712,str: "neural Toys",date: new Date("2018-09-06T02:54:28.809Z"),array: [],obj: {_id: 18713,str: "Bedfordshire plug-and-play",num: 14210,date: new Date("2018-09-06T04:21:53.963Z"),array: [66435,90551,"Solutions Frozen Shirt",[]],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 18714,str: "Auto Loan Account payment Avenue",num: 37709,date: new Date("2018-09-05T22:18:06.079Z"),array: [98129,new Date("2018-09-06T10:44:50.088Z"),14379,48586,new Date("2018-09-06T04:20:22.707Z"),"redundant Executive copy","Computers","infrastructures Implemented",38152,"Investor",new Date("2018-09-06T08:21:26.278Z")],obj: {_id: 18715,str: "application",num: 66314,date: new Date("2018-09-06T05:00:45.080Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18716,str: "parse",num: 91124,array: [],obj: {_id: 18717,str: "Baby Director",num: 88310,date: new Date("2018-09-06T11:03:39.733Z"),array: ["revolutionize FTP generate",{_id: 18718,str: "Checking Account",num: 23917,date: new Date("2018-09-06T16:54:10.795Z"),obj: {}},64502,new Date("2018-09-06T10:02:45.181Z"),[],new Date("2018-09-05T20:38:02.325Z"),"national",{_id: 18719,date: new Date("2018-09-06T08:36:05.068Z"),array: [[],[],"black incentivize firewall"],obj: {_id: 18720,num: 61672,date: new Date("2018-09-06T10:05:50.329Z"),array: [new Date("2018-09-06T04:07:59.963Z")]}},97629,{_id: 18721,str: "Hat Licensed Frozen Shoes Congolese Franc",date: new Date("2018-09-06T03:15:04.605Z"),array: [],obj: {_id: 18722,num: 99676,array: [new Date("2018-09-06T04:14:41.484Z")],obj: {_id: 18723,str: "experiences",num: 93383,date: new Date("2018-09-06T04:18:08.338Z")}}},4531,90095],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 18724,str: "tan",num: 88314,date: new Date("2018-09-06T00:55:11.976Z"),array: [],obj: {_id: 18725,str: "convergence",num: 77406,date: new Date("2018-09-06T04:36:59.386Z"),array: [new Date("2018-09-06T10:45:02.009Z"),93360,96562,"Architect",new Date("2018-09-06T14:49:24.558Z"),new Date("2018-09-06T04:30:19.502Z"),{_id: 18726,array: ["Meadows reboot",37369,"Shoes Refined Executive"],obj: {}},{_id: 18727,str: "protocol silver",num: 85479,date: new Date("2018-09-06T15:04:07.772Z"),array: [],obj: {_id: 18728,num: 49436,date: new Date("2018-09-06T12:42:25.066Z"),array: [70936],obj: {}}},[],new Date("2018-09-05T21:17:29.455Z"),{_id: 18729,str: "deposit solid state back-end",date: new Date("2018-09-06T02:29:33.815Z"),obj: {}},{_id: 18730,str: "architect encoding Garden",num: 14364,date: new Date("2018-09-06T04:37:18.535Z")},"salmon productivity Branding"],obj: {_id: 18731,num: 59115}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $log: [52598,'$obj.obj.num'] },hour: { $size: [[]] },millisecond: { $divide: [6562,'$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Personal Loan Account",v: true}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateFromParts: {isoWeekYear: { $abs: '$obj.num' },hour: { $add: ['$obj.obj.num'] },minute: { $divide: [98274,153] },second: { $subtract: [82654,'$num'] },millisecond: { $sqrt: '$obj.obj.obj.num' }} } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["SCSI",14,9] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.str',chars: "Awesome Cotton Towels New Taiwan Dollar synergies"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "mobile",v: { $toUpper: '$obj.obj.str' }},{k: "Operations clear-thinking",v: '$str'},{k: "hybrid",v: { $dateToParts: { date: { $dateFromParts: {year: { $ln: '$num' },day: 67534,hour: { $subtract: ['$obj.num','$obj.num'] },minute: { $log10: '$obj.num' },millisecond: { $log10: 90718 }} } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.str','$str'],[{ $toLower: "Salad 1080p distributed" }],[]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $or: ["monetize Mississippi",'$obj.obj.str',{ $trim: {input: "Wooden Stream Grass-roots",chars: { $rtrim: { input: '$str' } }} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "protocol transmitter Rest",v: new Date("2018-09-06T14:45:55.953Z")}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',14,2] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $month: { $year: { $isoWeek: { $hour: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $floor: 98653 },isoDayOfWeek: { $trunc: 17242 }} } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Money Market Account ivory back-end",'$obj.str'],[{ $rtrim: {input: { $toLower: '$obj.obj.obj.str' },chars: "Personal Loan Account SCSI Sri Lanka Rupee"} },"Tasty"]] }, _id: 0}}],

        [{$project: {a: { $range: [20,5,4] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Licensed Granite Cheese back-end"],80370] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',2,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayElemAt: [["compressing"],10826] } },'$obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[true,'$obj.num'],74892] }, _id: 0}}],

        [{$project: {a: { $second: { $dateToString: {date: { $isoWeek: { $minute: { $hour: new Date("2018-09-06T09:52:22.440Z") } } },format: "%%-%G-%w-%V"} } }, _id: 0}}],

        [{$project: {a: { $year: { $month: { $minute: { $dayOfYear: { $minute: { $dateToString: {date: new Date("2018-09-06T16:42:25.531Z"),timezone: "US/Central"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.str'],cond: { $not: [{ $arrayToObject: [[['$$this',6144,25075],['$$this'],["Argentine Peso Sleek Steel Towels Myanmar"],[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.num']] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromParts: {year: { $indexOfArray: [{ $map: {input: [],in: { $pow: [71931,'$num'] }} },{ $arrayElemAt: [['$obj.str'],41586] },6,6] },month: { $ln: '$num' },hour: { $ceil: { $abs: 96305 } }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Cambridgeshire Intelligent",{ $concat: ['$obj.str'] }],67083] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[75035],[{ $substrCP: ["TCP JBOD Customer",10,0] }]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Product",'$str',{ $dateToString: {date: '$obj.date',format: "%Y-%M-%M-%z-%M-%j",timezone: "America/Sitka",onNull: '$obj.str'} },"Minnesota synthesizing Branding"]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "reboot",chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%u-%S-%Z-%H-%M-%u-%u",timezone: "Pacific/Marquesas",onNull: { $concat: [{ $trim: { input: '$str' } },"Cheese paradigms"] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ['$obj.obj.obj.str'] },{ $substr: ["De-engineered",13,12] }],79994] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Point markets"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeekYear: { $year: { $week: { $dateToString: {date: '$obj.obj.date',timezone: "America/Indiana/Marengo",onNull: "Awesome Cheese Advanced"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T05:45:38.438Z"),format: "%S-%L-%u-%Y-%Z-%m-%%-%U-%w-%d-%m-%j",timezone: "Europe/Sofia",onNull: { $objectToArray: '$obj.obj.obj' }} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "brand orchid Rupiah",v: 21657},{k: "Estonia withdrawal",v: true},{k: "drive bottom-line",v: '$obj.num'}]] } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: false,defaults: [/interface|content|digital/]} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfMonth: { $hour: { $hour: { $dateFromParts: {isoWeekYear: { $pow: ['$obj.num',87393] },isoDayOfWeek: { $ln: 41696 },hour: { $log: ['$obj.obj.obj.num',{ $trunc: '$obj.obj.num' }] },minute: { $exp: '$obj.num' },second: { $log10: 71596 },timezone: "America/Belem"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],81076] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["strategic","Savings Account",{ $dateToString: { date: new Date("2018-09-06T06:49:51.270Z") } }],20707] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $week: { $month: { $dateToString: {date: '$date',timezone: "Asia/Tbilisi"} } } },format: "%%-%H-%z-%S-%M-%u-%w-%z-%Y-%Z-%M",timezone: "Pacific/Tarawa"} }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfMonth: { $isoDayOfWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T00:39:41.912Z",timezone: "America/Montevideo",onError: { $month: { $toDate: { $toLower: '$obj.obj.str' } } }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],9581] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handmade Sleek gold",v: "Cotton Bond Markets Units European Composite Unit (EURCO)"},{k: "coherent hack copy",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],['$obj.obj.str',"Cambridgeshire Brooks"],["Car Lights",'$obj.str',{ $ltrim: {input: "gold Tasty Wooden Gloves",chars: { $toString: { $millesecond: { $toDate: { $arrayElemAt: [[{ $rtrim: { input: '$obj.str' } },{ $substrBytes: ['$obj.str',3,9] }],'$obj.obj.obj.num'] } } } }} }]],useLongestLength: false,defaults: [[76530,/I(?:ntelligent Wooden Gloves|B)|calculating/]]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bi-directional",v: false},{k: "Refined Granite Cheese",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Wooden circuit",chars: { $rtrim: { input: { $concat: ['$obj.obj.obj.str'] } } }} }, _id: 0}}],

        [{$project: {a: { $range: [17,5,16] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["User-friendly quantify",{ $dateToString: {date: { $minute: { $month: { $dateFromParts: {isoWeekYear: { $floor: '$obj.obj.num' },isoWeek: { $size: [[{ $substrCP: ["USB Managed Facilitator",14,3] },{ $dateToString: { date: new Date("2018-09-06T09:50:43.165Z") } }]] },isoDayOfWeek: { $log10: '$num' },hour: { $ceil: 98962 }} } } },timezone: "Africa/Dakar",onNull: { $zip: {inputs: [[76386],[],[],[],[]],defaults: [19571,true]} }} }],11145] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.str',chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeek: { $isoDayOfWeek: { $hour: { $dateToParts: { date: { $year: { $minute: { $dayOfMonth: { $month: { $isoWeekYear: { $isoWeek: { $dateToString: {date: { $millesecond: { $dateFromString: {dateString: "2018-09-06T17:40:26.547Z",format: "%%-%V-%U-%m",onError: { $arrayToObject: [[['$obj.obj.obj.str',{ $substr: ['$obj.str',14,13] },{ $dateToString: {date: new Date("2018-09-06T15:51:23.328Z"),timezone: "Africa/Harare"} }],[{ $toUpper: '$obj.obj.obj.str' },"RSS Namibia Intelligent Wooden Car"],[],[84439]]] },onNull: "Cotton"} } },format: "%G-%z-%V-%L",timezone: "Africa/Porto-Novo"} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],17478] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num',95309],['$obj.obj.num',97310],[]] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T04:43:05.354Z",timezone: "America/Guatemala"} } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',3,17] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toString: { $toString: { $dateFromString: {dateString: "2018-09-06T04:03:27.237Z",format: "%V-%L-%M-%H-%u-%G",onError: { $dayOfWeek: { $month: { $year: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T17:57:00.646Z",timezone: "Etc/GMT+7",onNull: '$obj.obj.obj.str'} } } } } }} } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $substrBytes: ['$obj.obj.str',12,11] }],[],[],[7082,49402,'$num'],['$obj.str']],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $week: { $second: { $isoDayOfWeek: { $millesecond: { $isoWeek: { $hour: { $dateFromString: {dateString: "2018-09-06T10:41:32.560Z",format: "%u-%Z-%m-%z-%H-%%-%H-%j-%w-%d",timezone: "Asia/Hong_Kong"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',onNull: { $range: [2,2] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "input red",v: false}]] }, _id: 0}}],

        [{$project: {a: { $hour: { $year: { $dateFromString: {dateString: "2018-09-06T15:47:48.609Z",format: "%%-%w-%j-%d",timezone: "Pacific/Guadalcanal",onError: { $dateToString: {date: new Date("2018-09-06T00:27:24.280Z"),timezone: "Asia/Chungking",onNull: "Avon sky blue radical"} }} } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $week: { $minute: { $isoWeekYear: { $second: { $toDate: { $arrayToObject: [[[],[37185]]] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[69596,42453],3986] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Marketing Mobility",v: new Date("2018-09-06T18:03:04.034Z")},{k: "Internal",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ["Buckinghamshire",18,15] },'$obj.obj.obj.str'],[],['$str'],["generate deposit"],['$obj.obj.obj.num',47994],[{ $add: [61510,52619] },52342],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],["Electronics best-of-breed",{ $substrBytes: [{ $ltrim: {input: "Group channels",chars: "infrastructures"} },18,6] }]]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[["monitor Wisconsin",'$obj.obj.str'],[],[],['$obj.num'],["Metal Cambridgeshire salmon",'$obj.str','$obj.obj.obj.str']]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],72710] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [62397,'$obj.num',23248],as: 'edmund',cond: { $not: [{ $arrayElemAt: [[{ $concat: ['$str'] }],'$obj.obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str',"United Kingdom generating"]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $millesecond: { $month: { $dateFromString: {dateString: "2018-09-05T22:39:31.601Z",timezone: "Asia/Ust-Nera"} } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Computers British Indian Ocean Territory (Chagos Archipelago)",v: "SCSI"}]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $dateToParts: { date: { $isoWeekYear: { $isoWeekYear: { $hour: { $isoWeek: { $week: { $dayOfWeek: { $toDate: { $objectToArray: '$obj.obj.obj' } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],37984] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num',{ $sqrt: '$obj.obj.num' }],[],[{ $substr: [{ $ltrim: { input: "wireless Alaska Frozen" } },11,9] }],['$obj.str',{ $dateToString: { date: '$obj.obj.date' } }]]] }, _id: 0}}],

        [{$project: {a: { $concat: ["Cotton Practical Rubber Shirt Metal",{ $toString: { $dayOfMonth: { $millesecond: { $dateToParts: {date: { $hour: { $week: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T15:54:25.471Z",timezone: "America/Sitka",onError: { $filter: {input: [],as: 'madison',cond: { $gte: [{ $hour: { $minute: { $dateToString: {date: '$$madison',format: "%G-%S-%m-%m-%Z",onNull: { $month: { $minute: { $millesecond: { $dayOfWeek: { $toDate: { $arrayElemAt: [['$obj.obj.obj.str'],81054] } } } } } }} } } },{ $arrayToObject: [[[{ $toLower: { $substrBytes: ['$$madison',15,17] } }],['$$madison'],["Mozambique",'$str',"Wooden"],[{ $ltrim: {input: '$$madison',chars: { $substrCP: ["Malaysia Sleek interactive",5,12] }} }],['$$madison']]] }] }} },onNull: '$str'} } } } },timezone: "America/Paramaribo"} } } } },"National discrete Licensed"] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [17,9] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Metal Tunnel",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.str',chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $minute: { $dateFromString: {dateString: "2018-09-06T19:20:16.636Z",format: "%j-%U-%z-%S-%Z-%G-%j-%%",timezone: "Asia/Damascus",onNull: '$obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $hour: { $month: { $toDate: { $arrayElemAt: [['$obj.obj.num'],90445] } } } } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[{ $dateToString: {date: '$obj.obj.date',format: "%G-%%-%m-%Y-%G-%j-%H-%w-%m-%G-%G",timezone: "America/Ensenada",onNull: { $arrayElemAt: [[],1609] }} },{ $substrBytes: [{ $concat: ["Incredible Cotton Pizza",'$obj.str'] },8,7] },"Customer"],["Refined Wooden Salad Generic"],[{ $dayOfWeek: { $dayOfYear: { $second: { $minute: { $dayOfYear: { $isoWeek: { $dateToString: {date: { $month: { $dateFromParts: {year: { $exp: 33108 },month: { $size: [['$obj.obj.obj.num',23251]] },day: { $divide: ['$obj.obj.obj.num','$obj.num'] },hour: { $subtract: ['$obj.obj.num',{ $exp: 78488 }] },minute: { $multiply: [{ $subtract: [59563,'$obj.obj.obj.num'] }] },second: { $sqrt: { $cmp: [{ $substrBytes: ['$obj.obj.str',20,9] },{ $range: [0,9,20] }] } },millisecond: { $log: ['$num',86109] }} } },timezone: "US/Mountain"} } } } } } } }]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeek: { $dateToParts: {date: { $isoWeek: { $year: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T13:36:13.332Z",onError: { $arrayToObject: [[{k: "leverage Harbors stable",v: true},{k: "haptic Berkshire Unions",v: "Customer GB Tools"}]] }} } } } },timezone: "Asia/Ashgabat",iso8601: true} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "North Dakota JSON",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $concat: [] },{ $dateToString: {date: '$obj.obj.date',format: "%j-%U-%u-%z-%j-%j-%Z-%Z",timezone: "America/Porto_Acre",onNull: { $arrayElemAt: [["Kids local area network",'$obj.obj.str',"Home Loan Account Savings Account"],'$num'] }} }]],useLongestLength: true,defaults: []} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Ohio",v: 729},{k: "SSL Principal driver",v: "Trail"},{k: "iterate",v: new Date("2018-09-06T03:51:13.230Z")},{k: "Tasty Fresh",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $substr: [{ $trim: { input: '$str' } },18,6] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $toDate: { $map: {input: [],as: 'kara',in: { $log10: '$$kara' }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',"invoice Hong Kong Dollar"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[],["Fresh Corners",'$obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [34200],cond: { $ne: [{ $isoWeekYear: { $millesecond: { $isoWeekYear: { $dateFromParts: {isoWeekYear: { $cmp: [{ $arrayElemAt: [["Falkland Islands (Malvinas)"],'$$this'] },{ $arrayElemAt: [[97636,'$$this','$num'],{ $sqrt: 40160 }] }] },isoDayOfWeek: { $floor: '$obj.num' },minute: { $floor: 1340 },second: { $multiply: [] }} } } } },{ $substrBytes: [{ $concat: ["e-services multimedia",'$obj.str','$obj.obj.obj.str',{ $substrCP: ['$str',16,2] }] },6,20] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Factors Tasty Metal Bike",{ $trim: { input: '$obj.obj.str' } }],84643] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [73509],as: 'casey',cond: { $gt: [{ $arrayToObject: [[["holistic Unbranded Frozen Shirt"],['$obj.obj.num','$$casey',33912],[{ $trim: { input: { $substrBytes: ['$str',16,8] } } }]]] },{ $arrayToObject: [[[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[1928]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dayOfMonth: { $second: { $dayOfYear: { $hour: { $isoDayOfWeek: { $dateToParts: { date: { $dayOfWeek: { $dayOfYear: { $hour: { $week: { $toDate: { $arrayElemAt: [[],66455] } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%H-%L-%d-%u-%m-%m-%j-%j-%z",onNull: "Frozen Burkina Faso"} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Music" } }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $substr: ["Toys Automotive Stravenue",17,13] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $concatArrays: [[76547,'$obj.num'],[],[],[{ $substrCP: ['$obj.str',18,8] },"Pizza Home Loan Account"],[{ $trim: {input: '$str',chars: "tan backing up"} }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],42141] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Generic web-enabled",{ $substrCP: [{ $dateToString: {date: new Date("2018-09-06T01:06:58.708Z"),format: "%u-%U-%Y-%w-%w"} },16,17] },'$str'],cond: { $isArray: [{ $concatArrays: [[60952],[],['$obj.str','$obj.obj.obj.str','$$this'],[]] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T22:47:33.874Z"),format: "%d-%d-%d-%V-%Z-%S",onNull: "Fresh Metal"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Chief South Dakota",v: true},{k: "digital dynamic high-level",v: new Date("2018-09-06T19:46:52.633Z")},{k: "Architect Awesome success",v: "District interactive Human"}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str'],as: 'broderick',in: { $size: [[70275]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Handmade Cotton Tuna withdrawal Functionality"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $rtrim: { input: { $dateToString: { date: '$obj.obj.obj.date' } } } }],[83678,62351],[],[],[],['$obj.obj.num',21360,49487],["programming Afghani Specialist",{ $toString: { $arrayToObject: [[{k: "Operative hacking",v: '$obj.obj.obj.str'}]] } }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],19674] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Computer web services",'$obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $millesecond: { $dayOfMonth: { $second: { $dateFromParts: {isoWeekYear: { $log: ['$obj.num',33152] },isoWeek: { $divide: ['$num',92546] },hour: { $log10: 82527 },minute: { $abs: 29425 },millisecond: { $indexOfArray: [{ $objectToArray: '$obj' },{ $arrayElemAt: [['$num'],64157] },19] }} } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["productize"],as: 'shanel',cond: { $gte: [{ $arrayToObject: [[[{ $ltrim: {input: '$obj.obj.obj.str',chars: { $substrBytes: ["Accountability",2,15] }} }],[],['$obj.num']]] },{ $arrayElemAt: [[17512,93897,'$obj.obj.obj.num'],'$num'] }] }} }, _id: 0}}],

        [{$project: {a: { $year: { $isoWeek: { $dateToParts: { date: { $hour: new Date("2018-09-06T10:31:07.335Z") } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Intelligent Steel Computer Wooden",v: false},{k: "deposit firewall",v: 91673}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[14373,30604],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: { dateString: "2018-09-06T02:36:02.509Z" } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Arkansas",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[46459,37295],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],35961] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.str'],in: { $abs: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["e-markets",{ $dateToString: {date: new Date("2018-09-06T05:13:01.851Z"),timezone: "Europe/Ljubljana"} }],[{ $millesecond: { $isoWeekYear: { $week: { $millesecond: { $dayOfWeek: { $dateToString: {date: '$obj.date',format: "%w-%S-%j-%u-%U-%U-%V-%L-%H-%m"} } } } } } }],['$obj.obj.obj.num'],['$str',"Buckinghamshire",{ $ltrim: { input: { $substrBytes: [{ $substrCP: ['$obj.obj.obj.str',2,1] },2,15] } } }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $concat: [{ $ltrim: { input: { $substrCP: ["algorithm auxiliary",12,16] } } },"lime",'$obj.str',"Kansas"] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $week: { $millesecond: { $year: { $week: { $toDate: { $arrayElemAt: [[false,new Date("2018-09-05T21:24:34.061Z"),{ $toLower: { $rtrim: { input: "District action-items hybrid" } } }],38894] } } } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Enhanced monitoring",2,1] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateToString: {date: '$date',onNull: { $arrayElemAt: [[],{ $abs: '$num' }] }} } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $hour: '$date' } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$str'],[{ $concat: [] },'$str'],[{ $exp: 10350 }],[6600],[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[55015,'$num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "capacitor",v: false}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: "copy payment" },"turquoise"],['$obj.obj.num'],["Handmade Rubber Sausages Interactions Personal Loan Account",'$str'],[],[44263]] }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromParts: {isoWeekYear: { $add: ['$obj.obj.num'] },isoWeek: { $ln: 89496 },hour: { $abs: '$obj.obj.num' },minute: { $log10: 81024 },timezone: "America/Cancun"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[89079,10121,{ $ceil: 35522 }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "Avon",v: true},{k: "Gloves Engineer",v: new Date("2018-09-06T13:45:24.540Z")},{k: "e-business invoice",v: '$obj.obj.obj.num'}]] } }, _id: 0}}],

        [{$project: {a: { $substr: ["Communications",12,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $millesecond: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Asia/Istanbul"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',70028],["Home Loan Account"],['$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],23138] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Streamlined",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "IB Idaho",v: new Date("2018-09-06T05:19:27.795Z")},{k: "24/365 Fantastic",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'thalia',in: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[85076],23945] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num',20337],cond: { $in: [{ $arrayToObject: [[['$$this'],['$$this','$$this','$$this',"system bandwidth-monitored Secured"],[],[]]] },{ $zip: {inputs: [[],[],[{ $rtrim: {input: "Tuna",chars: { $ltrim: { input: '$$this' } }} },"Baht online Handcrafted Steel Chicken",{ $substrCP: ['$obj.obj.obj.str',20,6] }]],useLongestLength: false,defaults: [new Date("2018-09-06T03:31:23.607Z"),68327]} }] }} }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfYear: { $dateToParts: {date: { $isoWeek: { $isoDayOfWeek: { $hour: { $toDate: { $arrayToObject: [[["CSS Borders"],['$num']]] } } } } },timezone: "America/Detroit"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',17,2] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoDayOfWeek: { $dateToParts: {date: { $hour: { $dayOfWeek: { $minute: { $millesecond: { $isoWeek: '$obj.obj.obj.date' } } } } },timezone: "US/Aleutian"} } } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [] } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $month: { $year: { $minute: { $dateFromParts: {year: { $multiply: ['$obj.obj.num','$num',{ $sqrt: 9681 }] },day: { $indexOfArray: [{ $map: {input: [],in: { $add: [57998] }} },{ $substr: ['$obj.obj.obj.str',9,12] },15] },hour: { $add: [] },timezone: "America/Matamoros"} } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',onNull: { $concatArrays: [["Frozen Burundi Franc"]] }} }, _id: 0}}],

        [{$project: {a: { $toString: { $dateToString: {date: '$obj.obj.obj.date',format: "%S-%G-%m-%d-%%-%Y-%z-%%-%H-%L-%j",onNull: { $dayOfMonth: { $millesecond: { $dateToString: {date: new Date("2018-09-06T19:07:07.026Z"),timezone: "America/Yakutat"} } } }} } }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: { dateString: "2018-09-06T09:22:27.006Z" } } }, _id: 0}}],

        [{$project: {a: { $range: [7,5] }, _id: 0}}],

        [{$project: {a: { $toLower: { $concat: ['$obj.str'] } }, _id: 0}}],

        [{$project: {a: { $range: [12,19] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeekYear: { $dateToParts: {date: new Date("2018-09-06T19:21:11.429Z"),timezone: "Europe/Isle_of_Man"} } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.num'],["payment Small Cotton Bike",'$obj.obj.obj.str'],[],[{ $toLower: '$obj.obj.obj.str' },{ $substr: [{ $substrCP: ["mindshare",12,3] },7,2] }]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfYear: { $minute: { $toDate: { $arrayToObject: [[{k: "Refined Rubber Soap conglomeration Customer",v: true}]] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'michel',cond: { $gt: [{ $arrayToObject: [[{k: "cross-platform blue lavender",v: { $hour: { $isoDayOfWeek: { $dayOfWeek: { $dayOfWeek: { $dateFromParts: {year: { $pow: ['$$michel','$$michel'] },day: { $indexOfArray: [{ $range: [18,4,17] },{ $dateToString: {date: new Date("2018-09-06T03:26:48.033Z"),timezone: "Africa/Dakar"} },16,17] },millisecond: { $add: [] }} } } } } }}]] },{ $isoWeek: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T10:54:47.289Z",format: "%H-%w-%V-%%",timezone: "Asia/Ulaanbaatar",onNull: { $arrayElemAt: [[{ $toUpper: { $toLower: "Berkshire incremental" } },"Generic",{ $substrBytes: [{ $toString: { $arrayElemAt: [['$str',"Eritrea FTP"],16449] } },16,7] }],41455] }} },iso8601: true} } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],17181] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T00:13:05.852Z",format: "%Z-%u-%M-%S-%m",timezone: "Australia/Canberra",onError: { $reverseArray: [['$obj.obj.obj.num']] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Highway Auto Loan Account",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[35438],{ $sqrt: '$obj.num' }] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toLower: '$str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[1908,68319],[],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [19,14,9] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [60003],cond: { $isArray: [{ $substrBytes: [{ $substrCP: ['$obj.str',9,9] },19,13] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',timezone: "America/Yakutat",onNull: { $substrBytes: ["Streamlined Savings Account Georgia",15,5] }} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $substr: ["Health global",18,3] } } }, _id: 0}}],

        [{$project: {a: { $concat: ["schemas Industrial copying",{ $substrBytes: [{ $toString: { $arrayElemAt: [["algorithm Kids channels",'$obj.obj.obj.str',{ $trim: {input: "Intranet holistic",chars: "Berkshire algorithm"} },'$str'],13046] } },3,3] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[43392],8791] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],51823] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: "Fantastic Rubber Towels" } }],59408] }, _id: 0}}],

        [{$project: {a: { $range: [10,4] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $add: [] },month: { $abs: 33628 },day: { $exp: 27584 },millisecond: { $trunc: '$obj.obj.num' }} }, _id: 0}}],

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
