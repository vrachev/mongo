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
        return coll.insert({_id: 3103,str: "Pula ivory invoice",num: 64704,date: new Date("2018-09-06T18:46:59.438Z"),array: [],obj: {_id: 3104,str: "Avon",date: new Date("2018-09-06T17:05:52.354Z"),array: [new Date("2018-09-06T02:15:58.143Z"),"withdrawal Bedfordshire hacking",28609,44941,[],{_id: 3105,str: "Utah",num: 30250,date: new Date("2018-09-06T15:54:26.912Z"),obj: {_id: 3106,num: 83375,date: new Date("2018-09-06T04:58:52.778Z"),array: []}},"Liberia",new Date("2018-09-05T21:32:29.891Z"),new Date("2018-09-06T09:07:48.211Z"),75057,[],{_id: 3107,str: "copying",date: new Date("2018-09-06T04:17:15.101Z"),obj: {}},1462,"paradigms",[new Date("2018-09-05T22:28:55.546Z")]],obj: {_id: 3108,str: "Fantastic web services Cloned",num: 98298,array: [new Date("2018-09-06T15:17:16.292Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3109,str: "Specialist",num: 57681,date: new Date("2018-09-06T15:59:22.858Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3110,date: new Date("2018-09-06T03:46:38.708Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3111,str: "white back up Central",date: new Date("2018-09-06T16:53:00.327Z"),array: [57826,"Future Shirt monetize","Plastic Group",new Date("2018-09-05T23:19:59.287Z"),{_id: 3112,str: "Missouri",num: 72352,date: new Date("2018-09-06T09:53:36.948Z"),array: [],obj: {}},new Date("2018-09-06T14:08:17.696Z"),{_id: 3113,str: "Pants Pataca",num: 28113,date: new Date("2018-09-06T12:15:05.538Z"),array: [],obj: {_id: 3114,str: "North Korean Won Product Industrial",num: 91791,array: [[],97412,"Lek",new Date("2018-09-06T09:17:49.301Z"),[12027,[]],new Date("2018-09-05T22:55:46.537Z"),new Date("2018-09-06T06:24:38.913Z")]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3115,str: "schemas Direct",num: 68285,date: new Date("2018-09-06T12:37:39.766Z"),array: ["withdrawal Soft",new Date("2018-09-06T13:26:01.236Z"),new Date("2018-09-05T23:42:27.556Z"),new Date("2018-09-05T23:02:25.501Z"),59193,{_id: 3116,str: "utilisation Skyway markets",num: 54016,obj: {_id: 3117,str: "forecast exploit",num: 55749,date: new Date("2018-09-06T12:37:42.017Z"),array: [],obj: {}}},["Borders",[35580,"Fantastic",{_id: 3118,str: "reboot Courts",num: 709,date: new Date("2018-09-06T09:35:41.621Z")}]],{_id: 3119,str: "Soap",array: [],obj: {}},70453,{_id: 3120,str: "Comoro Franc HTTP Concrete",date: new Date("2018-09-06T10:42:31.894Z"),array: []},91392],obj: {_id: 3121,num: 74861,date: new Date("2018-09-06T07:57:23.409Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3122,str: "empowering",num: 99239,date: new Date("2018-09-06T16:25:53.690Z"),array: ["Engineer sensor Persistent",{_id: 3123,num: 30285,date: new Date("2018-09-06T04:00:47.769Z"),array: [],obj: {}},new Date("2018-09-06T12:28:15.256Z"),new Date("2018-09-06T06:39:39.887Z"),"transparent",43806,[],"synergistic capacity","invoice",new Date("2018-09-06T19:34:51.356Z"),85071],obj: {_id: 3124,str: "European Unit of Account 17(E.U.A.-17)",array: [1086,[68735,{_id: 3125,str: "Generic Denmark 5th generation",num: 85759,array: [],obj: {}},"bypassing Kentucky Intelligent Concrete Bike"]],obj: {_id: 3126,str: "logistical Implementation",num: 80141,date: new Date("2018-09-06T13:42:09.002Z"),obj: {_id: 3127,str: "Cambridgeshire pink",num: 86799}}}});
    },

    function(coll) {
        return coll.insert({_id: 3128,str: "Berkshire",date: new Date("2018-09-06T11:07:09.443Z"),array: ["Pants",97436,83688,new Date("2018-09-05T23:52:41.658Z"),[],{_id: 3129,num: 46349,date: new Date("2018-09-06T19:33:27.316Z"),obj: {_id: 3130,str: "Programmable CSS array",num: 48047,date: new Date("2018-09-06T19:52:27.442Z"),array: [new Date("2018-09-06T05:20:29.126Z")],obj: {_id: 3131,str: "calculating",num: 66030,array: [],obj: {}}}},[],"teal Implemented Gorgeous",86301,"invoice Metal",new Date("2018-09-06T04:16:46.784Z"),new Date("2018-09-06T08:57:20.167Z"),"Paradigm Product Handcrafted Frozen Chair"],obj: {_id: 3132,num: 39492,array: [{_id: 3133,str: "Nevada Investment Account",date: new Date("2018-09-06T08:08:33.618Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 3134,str: "redundant",num: 14106,date: new Date("2018-09-06T10:25:58.885Z"),array: [],obj: {_id: 3135,str: "Fiji Dollar deposit Administrator",num: 61538,date: new Date("2018-09-06T15:20:34.145Z"),array: [[],73211,"Home Loan Account RAM Lilangeni",new Date("2018-09-05T23:45:56.997Z"),new Date("2018-09-06T11:52:06.951Z"),"Steel Licensed Frozen Chicken","parsing Shoes",[],76347,62248,[new Date("2018-09-06T08:09:01.792Z"),"leverage New Mexico Fresh"],{_id: 3136,str: "open-source Nevada",num: 14225,date: new Date("2018-09-06T05:52:56.414Z"),array: [53234]},"Berkshire Metal"]}});
    },

    function(coll) {
        return coll.insert({_id: 3137,num: 64162,date: new Date("2018-09-06T03:56:26.902Z"),array: ["Liberia Principal hack","withdrawal JSON Electronics",98214,new Date("2018-09-06T09:10:59.164Z"),[],new Date("2018-09-06T01:24:16.364Z"),5427,new Date("2018-09-06T19:26:10.867Z"),new Date("2018-09-06T00:41:57.679Z"),new Date("2018-09-06T16:26:59.338Z")]});
    },

    function(coll) {
        return coll.insert({_id: 3138,str: "CFA Franc BEAC",num: 61463,date: new Date("2018-09-06T06:34:14.415Z"),array: [],obj: {_id: 3139,str: "Handcrafted Fresh Chair",num: 38735,date: new Date("2018-09-05T20:36:31.467Z"),array: [18402,"backing up",new Date("2018-09-06T06:12:41.743Z"),new Date("2018-09-06T19:21:16.093Z"),"array",42902,2508,[],41483]}});
    },

    function(coll) {
        return coll.insert({_id: 3140,str: "Tuna Auto Loan Account paradigms",num: 54750,date: new Date("2018-09-05T22:23:33.478Z"),array: [87497,"Tuna product",[],new Date("2018-09-06T01:57:24.824Z"),"Lead",new Date("2018-09-06T01:14:09.367Z"),{_id: 3141,num: 75586,date: new Date("2018-09-05T22:16:48.787Z"),array: [],obj: {_id: 3142,str: "matrix",date: new Date("2018-09-06T13:29:04.153Z"),array: [],obj: {}}},"Soap",new Date("2018-09-06T11:29:23.328Z"),new Date("2018-09-06T12:16:59.836Z")],obj: {_id: 3143,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3144,str: "generating Bedfordshire Soap",num: 16213,date: new Date("2018-09-06T08:26:21.799Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3145,str: "Causeway panel",num: 70217,date: new Date("2018-09-06T07:27:50.313Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3146,str: "Practical Frozen Bike User-centric",num: 81541,date: new Date("2018-09-06T14:38:57.449Z"),array: [68749,"Principal Democratic People's Republic of Korea",new Date("2018-09-06T18:46:10.424Z"),73440,73287,{_id: 3147,str: "Seamless Ameliorated",num: 84548,date: new Date("2018-09-06T14:19:44.468Z"),array: ["Cotton Berkshire",[]],obj: {}},new Date("2018-09-06T15:11:37.771Z"),[],"Steel Virginia",{_id: 3148,str: "communities",date: new Date("2018-09-06T04:58:24.099Z"),obj: {_id: 3149,num: 45393,array: []}},new Date("2018-09-06T17:31:28.925Z"),66559,{_id: 3150,str: "Gorgeous green",num: 39018,array: [new Date("2018-09-06T04:25:07.315Z")],obj: {_id: 3151,str: "Handmade New Zealand",date: new Date("2018-09-05T21:41:01.566Z"),array: ["Auto Loan Account Wooden",[]]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3152,str: "Handmade Wooden Pants",num: 67117,date: new Date("2018-09-06T11:40:51.249Z"),array: ["Kansas Supervisor Credit Card Account",new Date("2018-09-06T01:24:07.225Z"),61203,[],32123,29023,{_id: 3153,str: "Multi-lateral",date: new Date("2018-09-06T19:47:46.638Z"),obj: {_id: 3154,str: "payment COM extensible",num: 14550,array: [],obj: {}}},[new Date("2018-09-06T07:48:12.522Z"),"Rhode Island Steel monetize"],"Intelligent Plastic Fish","Toys",67452,new Date("2018-09-06T17:35:03.671Z"),new Date("2018-09-06T06:15:27.575Z")],obj: {_id: 3155,num: 60639,obj: {_id: 3156,str: "architect bi-directional",date: new Date("2018-09-06T08:43:13.074Z"),array: [{_id: 3157,num: 66362,date: new Date("2018-09-06T15:39:13.674Z"),array: [],obj: {_id: 3158,str: "Chief FTP",date: new Date("2018-09-06T09:48:18.251Z"),array: [new Date("2018-09-06T07:09:58.694Z")]}},new Date("2018-09-06T18:26:15.368Z"),[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 3159,str: "cyan explicit knowledge user",num: 73733,date: new Date("2018-09-06T02:20:06.189Z"),array: [],obj: {_id: 3160,str: "parse frictionless Cheese",date: new Date("2018-09-06T09:08:30.791Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3161,str: "South Georgia and the South Sandwich Islands French Polynesia",num: 4185,date: new Date("2018-09-06T05:25:18.842Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3162,str: "Tools Buckinghamshire",num: 15099,date: new Date("2018-09-06T15:56:39.277Z"),array: [2791,[],45145,"grey",new Date("2018-09-06T07:24:19.462Z"),new Date("2018-09-06T14:13:06.574Z"),"blue copying"],obj: {_id: 3163,str: "Rapids copy",num: 67418,array: [93384,"Small Wooden Pants JBOD Sleek Rubber Table",new Date("2018-09-06T02:21:51.436Z"),new Date("2018-09-05T21:48:02.311Z"),3171,"withdrawal Reactive program"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3164,num: 34704,date: new Date("2018-09-06T11:50:47.696Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3165,num: 74053,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3166,str: "Sleek Granite Ball",num: 45322,date: new Date("2018-09-05T22:41:59.294Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3167,str: "Direct capacitor benchmark",num: 58756,date: new Date("2018-09-05T20:09:38.216Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3168,num: 45969,array: [97983,"Borders Lane Brand",new Date("2018-09-06T17:00:41.705Z"),2231,{_id: 3169,str: "primary Berkshire",num: 79729,date: new Date("2018-09-05T21:56:03.782Z"),array: [],obj: {}},{_id: 3170,str: "virtual",num: 83530,date: new Date("2018-09-05T22:09:13.611Z"),obj: {_id: 3171,str: "Bacon China Unbranded Wooden Shirt",date: new Date("2018-09-06T05:36:50.334Z"),array: [new Date("2018-09-06T12:16:26.670Z"),[29619,{_id: 3172,str: "Square",num: 70094,date: new Date("2018-09-06T06:11:33.369Z"),array: []},25517],"e-business"],obj: {_id: 3173,str: "Alabama reboot",num: 4767,array: [],obj: {}}}},new Date("2018-09-06T16:34:46.762Z"),[[[],"Web","synthesize",new Date("2018-09-06T16:10:53.838Z")],new Date("2018-09-06T02:41:28.769Z"),"Mississippi"]]});
    },

    function(coll) {
        return coll.insert({_id: 3174,str: "Togo",num: 17920,date: new Date("2018-09-06T09:56:16.378Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3175,str: "Administrator impactful",num: 65852,date: new Date("2018-09-05T21:18:44.023Z"),array: [],obj: {_id: 3176,str: "redefine program",num: 72580}});
    },

    function(coll) {
        return coll.insert({_id: 3177,str: "mobile architect",num: 36528,date: new Date("2018-09-06T14:31:28.032Z"),array: [],obj: {_id: 3178,str: "South Carolina Missouri Handcrafted Plastic Computer",num: 18543,date: new Date("2018-09-06T17:58:07.799Z"),array: [new Date("2018-09-06T13:14:26.890Z"),"Keyboard Computers Soft",12395,[],new Date("2018-09-06T00:04:08.638Z"),new Date("2018-09-05T23:55:05.438Z"),[],{_id: 3179,num: 90019,date: new Date("2018-09-06T14:50:21.932Z"),array: [22584,{_id: 3180,str: "Grass-roots Cambridgeshire Books",num: 64705,date: new Date("2018-09-06T07:12:05.938Z"),obj: {}},new Date("2018-09-06T13:51:56.253Z"),"Operative Specialist"],obj: {}},99259,new Date("2018-09-06T13:55:17.597Z"),47966,21286],obj: {_id: 3181,num: 97474,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3182,str: "Massachusetts Personal Loan Account Soft",num: 43446,date: new Date("2018-09-05T23:06:24.876Z"),array: [],obj: {_id: 3183,str: "Saint Pierre and Miquelon",num: 89431,date: new Date("2018-09-06T04:09:39.945Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3184,date: new Date("2018-09-05T22:28:10.469Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3185,str: "Burundi Concrete",num: 34982,date: new Date("2018-09-06T13:33:45.091Z"),array: [],obj: {_id: 3186,str: "incubate",num: 67150,date: new Date("2018-09-06T03:12:22.750Z"),array: [73395,new Date("2018-09-06T00:19:32.543Z"),new Date("2018-09-06T14:31:32.877Z"),["Awesome"],"white JSON",new Date("2018-09-06T13:03:44.071Z"),68495,new Date("2018-09-06T08:41:48.545Z"),16273,{_id: 3187,str: "copying",num: 95979,date: new Date("2018-09-05T20:02:38.798Z"),array: [],obj: {}},{_id: 3188,str: "Checking Account",num: 70440,date: new Date("2018-09-06T16:29:20.631Z"),obj: {_id: 3189,str: "Quality lavender purple",date: new Date("2018-09-05T20:24:35.014Z"),array: ["Sri Lanka Rupee Gorgeous",new Date("2018-09-05T20:47:59.674Z"),[82141]],obj: {_id: 3190,num: 60671,obj: {}}}},"Savings Account Practical Steel Bike",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 3191,str: "Berkshire",num: 92992,date: new Date("2018-09-06T08:23:09.610Z"),array: [new Date("2018-09-06T01:16:43.191Z"),63576,[{_id: 3192,str: "Directives Credit Card Account deliver",num: 66932,date: new Date("2018-09-06T03:03:37.962Z"),array: [],obj: {}},31615],"Licensed override Unbranded Soft Towels",new Date("2018-09-05T22:48:44.123Z"),55994,"Michigan Latvian Lats",new Date("2018-09-06T02:03:21.424Z"),"bandwidth",13205],obj: {_id: 3193,str: "global Buckinghamshire",num: 74076,array: [],obj: {_id: 3194,date: new Date("2018-09-06T06:40:08.813Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 3195,str: "client-server",num: 44575,date: new Date("2018-09-06T08:12:14.184Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3196,str: "Sleek Soft Gloves Auto Loan Account dynamic",num: 81462,date: new Date("2018-09-06T12:32:22.199Z"),array: [79883,62019,new Date("2018-09-06T04:24:41.283Z"),"firewall Paradigm Planner",87790,"array Rubber Wooden",61898,new Date("2018-09-06T03:02:15.356Z"),new Date("2018-09-06T05:43:38.888Z"),[],new Date("2018-09-06T00:57:05.161Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3197,str: "Identity",num: 75838,date: new Date("2018-09-06T02:21:43.719Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3198,str: "Books sensor",num: 73718,date: new Date("2018-09-06T12:55:46.358Z"),array: [],obj: {_id: 3199,str: "database Associate extend",num: 9511,date: new Date("2018-09-06T06:25:10.542Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3200,str: "paradigms compressing",num: 93310,date: new Date("2018-09-06T12:15:27.466Z"),obj: {_id: 3201,str: "systems",num: 36810,date: new Date("2018-09-06T03:16:12.152Z"),array: [new Date("2018-09-06T04:29:11.031Z"),10156,95075,"solutions Fresh Small Metal Shoes","invoice","supply-chains Investment Account Refined Granite Salad",new Date("2018-09-05T21:42:20.333Z"),{_id: 3202,str: "COM Vista",date: new Date("2018-09-06T11:53:04.411Z"),array: [],obj: {}},"Rwanda Global Managed",[]],obj: {_id: 3203,str: "Berkshire Cambridgeshire",num: 19863,array: ["e-services navigating Director",40392,96188]}}});
    },

    function(coll) {
        return coll.insert({_id: 3204,str: "parse program",num: 29786,date: new Date("2018-09-05T23:27:56.648Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3205,str: "Accountability",array: [new Date("2018-09-06T15:50:44.454Z"),76044,88507,{_id: 3206,str: "AI",num: 26547,date: new Date("2018-09-06T02:16:03.104Z"),array: []},"User-friendly sensor",new Date("2018-09-06T06:03:20.901Z"),"synergistic transmitting artificial intelligence",new Date("2018-09-06T01:02:56.112Z"),17996,new Date("2018-09-06T11:26:33.396Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3207,str: "Licensed Berkshire mesh",num: 30110,date: new Date("2018-09-06T07:43:12.217Z"),array: ["capacitor Savings Account",{_id: 3208,str: "deposit TCP",num: 22560,array: [79687,new Date("2018-09-06T09:55:50.905Z"),"maroon Applications complexity",33191,new Date("2018-09-05T22:10:05.049Z"),"Guernsey Savings Account"]},{_id: 3209,num: 75623,date: new Date("2018-09-06T13:42:00.802Z"),array: [new Date("2018-09-06T15:48:13.123Z")],obj: {_id: 3210,str: "Soap plug-and-play capacitor",num: 19792,date: new Date("2018-09-05T23:14:45.003Z"),array: [63476],obj: {_id: 3211,str: "olive Haven Human",date: new Date("2018-09-06T08:11:03.492Z"),array: []}}},{_id: 3212,str: "payment",num: 55654,date: new Date("2018-09-06T02:45:28.911Z"),obj: {}},"mindshare Gorgeous",new Date("2018-09-06T00:19:59.263Z"),"Chief Investor invoice",[85510,new Date("2018-09-06T10:48:49.928Z")],16666,"Ford instruction set",91818],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3213,str: "Synchronised Coordinator",num: 39733,date: new Date("2018-09-06T06:40:00.225Z"),obj: {_id: 3214,str: "Rufiyaa transmitter hacking",num: 62306,date: new Date("2018-09-06T04:57:04.497Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3215,str: "open-source",num: 98065,date: new Date("2018-09-06T07:39:21.881Z"),array: [61112,24971,new Date("2018-09-06T15:53:49.013Z"),"Keyboard","blue Fresh",[],new Date("2018-09-06T01:55:21.668Z"),[{_id: 3216,str: "Ouguiya input mint green",num: 9928,array: [],obj: {}},new Date("2018-09-06T02:12:03.817Z"),"Refined Frozen Pizza bluetooth"],new Date("2018-09-06T10:47:06.244Z"),56608,{_id: 3217,str: "back up",num: 58654,date: new Date("2018-09-06T00:24:11.322Z"),array: ["Branding Towels",27009,new Date("2018-09-06T01:24:22.523Z")],obj: {_id: 3218,str: "visionary Plains Ergonomic Granite Cheese",num: 50976,date: new Date("2018-09-06T06:29:35.994Z"),array: [],obj: {}}},96200]});
    },

    function(coll) {
        return coll.insert({_id: 3219,str: "overriding",num: 96673,date: new Date("2018-09-06T00:07:02.320Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3220,str: "Tasty Granite Soap sky blue",num: 60433,date: new Date("2018-09-06T00:59:02.679Z"),obj: {_id: 3221,date: new Date("2018-09-06T08:30:47.380Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3222,str: "Small wireless",num: 37507,date: new Date("2018-09-06T05:52:09.835Z"),array: ["deposit Forint","Liaison teal Garden",67282,new Date("2018-09-06T17:34:37.176Z"),new Date("2018-09-06T03:24:37.703Z"),91427,new Date("2018-09-06T16:26:29.232Z"),["Unions SCSI Guarani",{_id: 3223,date: new Date("2018-09-06T02:53:23.831Z"),array: [],obj: {}},new Date("2018-09-06T13:45:13.133Z")],"payment Analyst National",{_id: 3224,str: "bricks-and-clicks",num: 87183,date: new Date("2018-09-06T19:53:52.164Z"),array: [new Date("2018-09-06T10:23:40.414Z")],obj: {}},"Home",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3225,str: "Missouri Secured",num: 95233,date: new Date("2018-09-06T16:29:09.058Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3226,str: "vertical Metal",num: 16042,date: new Date("2018-09-05T22:24:15.800Z"),array: ["Clothing",new Date("2018-09-06T02:55:40.748Z"),new Date("2018-09-06T05:42:04.912Z"),83309,"back-end",[],4998,new Date("2018-09-06T19:16:47.578Z"),49634,"Tanzania ivory Handmade Granite Tuna",11262,{_id: 3227,str: "Triple-buffered web-readiness",num: 950,date: new Date("2018-09-06T07:43:08.083Z"),array: [],obj: {_id: 3228,str: "invoice parsing Ball",num: 50829,date: new Date("2018-09-06T19:15:44.038Z"),array: [{_id: 3229,date: new Date("2018-09-06T19:50:49.272Z"),obj: {}},new Date("2018-09-06T19:15:30.983Z")],obj: {_id: 3230,str: "Uzbekistan",num: 13088,date: new Date("2018-09-06T12:59:18.851Z")}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3231,str: "initiative",num: 22911,date: new Date("2018-09-06T17:42:17.348Z"),array: [],obj: {_id: 3232,str: "compress",num: 20843,date: new Date("2018-09-06T05:40:39.343Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3233,str: "Interactions",num: 19941,date: new Date("2018-09-06T16:20:16.893Z"),array: [new Date("2018-09-06T09:12:56.435Z"),3776,new Date("2018-09-06T09:37:53.717Z"),"attitude-oriented Quality Austria","Handmade Steel Fish Plastic hard drive",new Date("2018-09-06T07:38:02.107Z"),[],"Afghani Multi-channelled",82468],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3234,str: "Arkansas Awesome",num: 77335,date: new Date("2018-09-06T05:06:14.113Z"),array: [],obj: {_id: 3235,str: "Front-line driver",num: 1212,array: ["morph wireless web services",new Date("2018-09-06T07:07:29.467Z"),[[],87568],"firewall gold",new Date("2018-09-06T04:53:02.614Z"),22542,"Chad",new Date("2018-09-06T19:00:57.432Z"),{_id: 3236,date: new Date("2018-09-06T15:36:46.985Z"),obj: {_id: 3237,str: "payment Sausages Sausages",num: 48539,date: new Date("2018-09-06T15:18:00.426Z"),array: [97801]}},"Granite input calculating","Ball Metal Customer",[],{_id: 3238,num: 31397,date: new Date("2018-09-06T12:59:59.625Z"),obj: {_id: 3239,str: "orchid Knolls",array: [],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3240,str: "Florida",num: 91835,date: new Date("2018-09-06T04:43:17.974Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3241,str: "bus",num: 5415,date: new Date("2018-09-05T23:56:38.977Z"),array: [23080,new Date("2018-09-05T21:23:56.880Z"),39592,"Home Plastic Producer","Chile Frozen Table",91088,"Salad Buckinghamshire Engineer",new Date("2018-09-06T15:52:39.646Z"),43848,{_id: 3242,str: "EXE Massachusetts Cambridgeshire",num: 49415,date: new Date("2018-09-06T03:20:16.920Z"),array: [],obj: {_id: 3243,str: "Chips Extensions",date: new Date("2018-09-06T10:35:33.830Z"),array: [],obj: {}}},70471,new Date("2018-09-06T10:04:50.771Z"),new Date("2018-09-06T06:41:38.583Z")],obj: {_id: 3244,str: "copying",num: 74405,date: new Date("2018-09-06T00:33:41.772Z"),array: [{_id: 3245,str: "HTTP Quality leverage"}],obj: {_id: 3246,num: 76388,array: ["Persistent",[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3247,str: "granular pink virtual",num: 54032,date: new Date("2018-09-06T11:55:13.932Z"),array: [new Date("2018-09-05T19:56:30.478Z"),new Date("2018-09-06T16:28:11.639Z"),74272,"Bedfordshire Representative purple",{_id: 3248,str: "Metal synthesize",num: 23452,date: new Date("2018-09-06T03:23:11.329Z"),array: [],obj: {_id: 3249,str: "Coordinator Mexico",num: 48244,date: new Date("2018-09-06T04:26:16.150Z"),array: [14635,"Streamlined Borders"],obj: {_id: 3250,num: 56646,date: new Date("2018-09-05T21:28:32.524Z")}}},[[],"neural Soft",new Date("2018-09-06T04:38:35.458Z"),new Date("2018-09-06T18:47:49.722Z")],19051,"Cambridgeshire",38638,12514,{_id: 3251,date: new Date("2018-09-06T10:15:52.185Z"),array: [],obj: {_id: 3252,num: 77750,array: [[]],obj: {}}},{_id: 3253,str: "Human feed Lead",date: new Date("2018-09-06T11:08:57.704Z")}]});
    },

    function(coll) {
        return coll.insert({_id: 3254,str: "Plastic green invoice",num: 40569,date: new Date("2018-09-06T11:57:00.042Z"),array: [69333,new Date("2018-09-06T18:44:36.271Z"),"Product Handcrafted","Generic Soft Ball ivory",99430,80238,new Date("2018-09-06T12:33:41.345Z"),"Producer Avon","Regional Program"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3255,str: "Ergonomic Human",num: 14239,date: new Date("2018-09-05T21:00:57.556Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3256,num: 89160,date: new Date("2018-09-06T12:42:41.132Z"),array: [],obj: {_id: 3257,str: "SMTP Granite",num: 22840,date: new Date("2018-09-06T05:14:09.793Z"),array: [new Date("2018-09-05T22:17:26.188Z"),92862,"JBOD",{_id: 3258,str: "stable hack Nevada",date: new Date("2018-09-06T19:04:53.656Z"),array: [new Date("2018-09-06T14:12:56.628Z"),28963],obj: {_id: 3259,num: 80703,array: [],obj: {}}},new Date("2018-09-06T00:43:43.083Z"),{_id: 3260,str: "deposit Health Guinea-Bissau",obj: {_id: 3261,str: "Planner Internal web services",date: new Date("2018-09-06T08:49:28.946Z"),array: []}},["Fresh Buckinghamshire Sports"],93777,[66546,"non-volatile Credit Card Account mobile","Customer compressing Soap"],39209,"invoice quantifying Ports",{_id: 3262,str: "South Carolina yellow",num: 91333,date: new Date("2018-09-05T23:06:34.820Z"),obj: {}},new Date("2018-09-05T20:13:33.686Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 3263,str: "next-generation",num: 49753,date: new Date("2018-09-06T15:39:04.288Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3264,str: "SSL e-services",num: 35758,date: new Date("2018-09-06T11:59:51.247Z"),array: [new Date("2018-09-05T23:28:40.458Z"),new Date("2018-09-05T21:30:39.651Z"),45572,new Date("2018-09-06T12:19:56.114Z"),"CSS",["Garden deposit"],[],"structure Oregon",new Date("2018-09-06T13:34:31.779Z"),"models",{_id: 3265,str: "visionary SDD Ireland",num: 62206,array: [72350,"Avon",{_id: 3266,str: "6th generation Soap",num: 73220,date: new Date("2018-09-06T19:30:51.600Z"),array: [88478]},{_id: 3267,num: 88937,obj: {_id: 3268,str: "Stream enable Island",date: new Date("2018-09-05T20:22:53.550Z"),array: [],obj: {}}},new Date("2018-09-06T15:10:55.322Z")],obj: {_id: 3269,obj: {_id: 3270,str: "action-items",num: 65801,date: new Date("2018-09-06T12:13:10.410Z"),array: [],obj: {_id: 3271,str: "Plastic 4th generation Granite",num: 71437,date: new Date("2018-09-06T01:21:52.501Z"),array: [80653,"backing up South Dakota"],obj: {}}}}},75150]});
    },

    function(coll) {
        return coll.insert({_id: 3272,str: "real-time",num: 89503,date: new Date("2018-09-06T11:11:20.433Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3273,num: 51693,date: new Date("2018-09-06T11:20:47.470Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3274,str: "olive Democratic People's Republic of Korea compressing",num: 82128,date: new Date("2018-09-06T04:16:28.438Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3275,str: "Row Oregon",num: 1073,date: new Date("2018-09-06T13:33:32.238Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3276,str: "Director",date: new Date("2018-09-05T21:32:49.451Z"),array: [92441,new Date("2018-09-06T19:31:06.373Z"),90222,"Licensed",new Date("2018-09-06T03:16:50.588Z"),"Common",70692,"platforms EXE Berkshire",new Date("2018-09-06T19:39:59.159Z")],obj: {_id: 3277,str: "Cambridgeshire parse",num: 20518,date: new Date("2018-09-05T22:42:53.188Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3278,str: "bypassing dedicated SSL",num: 68077,date: new Date("2018-09-06T17:16:43.379Z"),array: ["Borders",new Date("2018-09-05T22:16:18.896Z"),{_id: 3279,str: "redundant",array: ["Dong Infrastructure",[],new Date("2018-09-06T07:24:32.406Z"),46789,new Date("2018-09-06T05:21:03.461Z")],obj: {}},73533,"Movies",[],{_id: 3280,str: "Unbranded Gorgeous protocol",num: 33238,array: [],obj: {_id: 3281,num: 76412,date: new Date("2018-09-06T11:03:02.367Z")}},new Date("2018-09-06T12:52:54.506Z"),"mindshare",57859,new Date("2018-09-06T14:11:04.943Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3282,str: "Buckinghamshire",num: 94846,date: new Date("2018-09-05T21:42:39.815Z"),array: [],obj: {_id: 3283,num: 21167,date: new Date("2018-09-06T09:53:08.528Z"),array: [new Date("2018-09-06T11:50:51.754Z"),"Tasty Frozen Cheese TCP","Unbranded Metal Chair copying",new Date("2018-09-06T11:11:11.164Z"),new Date("2018-09-06T09:37:55.775Z"),50148,"Plaza connecting",{_id: 3284,str: "Configuration mint green",date: new Date("2018-09-06T05:37:49.633Z"),obj: {}},45422,{_id: 3285,num: 59121,obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 3286,str: "wireless Identity",num: 96284,date: new Date("2018-09-06T13:09:33.988Z"),obj: {_id: 3287,str: "Table",num: 43521,date: new Date("2018-09-06T06:35:22.837Z"),array: [],obj: {_id: 3288,str: "Zloty communities complexity",num: 52629,date: new Date("2018-09-06T10:51:28.928Z"),array: ["invoice compressing",new Date("2018-09-06T04:02:27.707Z"),new Date("2018-09-06T17:23:07.162Z"),43469,24092,"Groves South Dakota",13318,"Auto Loan Account","Common",{_id: 3289,str: "Faroe Islands wireless salmon",num: 53803,date: new Date("2018-09-06T15:02:58.765Z"),array: [new Date("2018-09-06T01:33:55.052Z"),"experiences Oklahoma viral"],obj: {_id: 3290,obj: {_id: 3291,str: "Plastic local area network architect",num: 8244,array: []}}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3292,str: "lime data-warehouse Rustic Granite Chicken",num: 16718,date: new Date("2018-09-06T12:09:44.490Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3293,str: "bus leverage Towels",num: 61244,date: new Date("2018-09-06T07:39:05.146Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3294,num: 26286,date: new Date("2018-09-06T12:10:39.828Z"),array: ["transform Licensed",new Date("2018-09-06T09:37:26.891Z"),85441,new Date("2018-09-06T00:44:11.426Z"),new Date("2018-09-06T08:10:22.119Z"),new Date("2018-09-06T10:55:23.461Z"),88723,["Swaziland Shirt","Namibia",{_id: 3295,str: "24/7 Profound",num: 67626,date: new Date("2018-09-06T03:57:05.777Z"),array: [],obj: {}},77669,{_id: 3296,str: "solid state sky blue",num: 26543,array: [],obj: {_id: 3297,str: "web-readiness Response Mouse",date: new Date("2018-09-06T12:35:34.431Z"),obj: {_id: 3298,num: 70510,date: new Date("2018-09-06T16:26:22.455Z"),obj: {_id: 3299,str: "Mobility invoice",num: 35821,date: new Date("2018-09-06T02:16:34.017Z"),array: []}}}},{_id: 3300,str: "Kina",num: 56586,date: new Date("2018-09-06T17:12:43.685Z"),array: []}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3301,str: "policy",num: 12053,date: new Date("2018-09-05T20:45:54.350Z"),array: [],obj: {_id: 3302,str: "core",num: 61259,date: new Date("2018-09-06T01:50:17.773Z"),array: [{_id: 3303,str: "open-source",num: 48314,date: new Date("2018-09-05T21:46:58.316Z"),array: [],obj: {}},80284,13099,{_id: 3304,num: 90480,array: [],obj: {}},"Fantastic Rubber Hat Prairie multi-byte","directional Gloves quantify",41196,47292,new Date("2018-09-06T09:50:55.017Z"),new Date("2018-09-06T03:21:49.409Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 3305,str: "Unbranded Fresh Pizza Fiji Dollar",num: 79621,date: new Date("2018-09-06T04:23:36.176Z"),obj: {_id: 3306,str: "Steel index",num: 98255,array: ["Kansas solution",53237,new Date("2018-09-06T05:42:37.753Z"),new Date("2018-09-06T05:25:28.000Z"),96241,{_id: 3307,str: "bricks-and-clicks",num: 55742,date: new Date("2018-09-06T08:02:06.020Z"),array: []},[],"Berkshire Administrator Metical",{_id: 3308,str: "Avon",date: new Date("2018-09-06T14:45:00.384Z"),array: [5239],obj: {}},new Date("2018-09-06T07:20:23.190Z"),new Date("2018-09-06T16:04:11.199Z"),{_id: 3309,num: 76575,date: new Date("2018-09-06T09:18:34.320Z"),obj: {}},93358]}});
    },

    function(coll) {
        return coll.insert({_id: 3310,str: "calculate calculating Sleek Plastic Cheese",num: 51467,array: ["GB",17171,[],new Date("2018-09-06T15:56:40.170Z"),{_id: 3311,str: "salmon",num: 30216,date: new Date("2018-09-06T09:18:15.612Z"),array: [["Pennsylvania convergence",97881,[],new Date("2018-09-05T20:19:02.813Z")]],obj: {}},52020,new Date("2018-09-06T12:53:53.641Z"),{_id: 3312,str: "Handcrafted user-facing Pre-emptive",date: new Date("2018-09-05T23:49:38.083Z"),array: []},new Date("2018-09-06T02:37:47.778Z"),"copy"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3313,num: 8501,date: new Date("2018-09-06T13:54:41.672Z"),array: [{_id: 3314,str: "invoice",array: [],obj: {}},38492,new Date("2018-09-05T22:44:25.367Z"),"Cotton compelling Bedfordshire",new Date("2018-09-06T02:00:36.716Z"),["Tennessee Awesome"],24440,[],"Configuration bluetooth",50460,new Date("2018-09-06T03:42:39.419Z"),{_id: 3315,str: "Spring Rustic",num: 75016,date: new Date("2018-09-06T14:57:28.825Z"),array: [],obj: {_id: 3316,str: "Cotton Developer",num: 36986,obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 3317,str: "driver",num: 59102,date: new Date("2018-09-06T01:57:04.774Z"),array: [97688,"out-of-the-box Representative Persevering",new Date("2018-09-06T01:06:24.082Z"),{_id: 3318,str: "array Consultant Bedfordshire",num: 1196,obj: {_id: 3319,str: "deposit",num: 14771,date: new Date("2018-09-06T01:53:41.536Z"),array: [],obj: {_id: 3320,num: 619,date: new Date("2018-09-06T04:58:43.253Z"),array: [26523,[new Date("2018-09-05T22:12:24.674Z"),60176,36230],new Date("2018-09-06T10:15:26.221Z")],obj: {}}}},"Berkshire Home Loan Account","Games Awesome Representative",[],{_id: 3321,str: "withdrawal",date: new Date("2018-09-05T21:18:07.351Z"),array: ["Incredible Rubber Towels Movies payment"]},18169,"Strategist",new Date("2018-09-05T21:53:29.107Z"),{_id: 3322,str: "Facilitator redundant Canadian Dollar",date: new Date("2018-09-06T18:07:54.245Z"),array: [],obj: {_id: 3323,num: 2743,obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3324,str: "1080p",num: 95450,date: new Date("2018-09-05T22:57:33.672Z"),obj: {_id: 3325,str: "Games Representative Wooden",num: 48879,date: new Date("2018-09-06T05:51:03.735Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3326,str: "back up New Mexico Bedfordshire",num: 69516,date: new Date("2018-09-06T18:07:51.143Z"),obj: {_id: 3327,str: "Automotive",num: 69078,date: new Date("2018-09-06T11:38:55.701Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3328,str: "Underpass pixel Mississippi",num: 77198,date: new Date("2018-09-06T18:09:09.321Z"),array: ["partnerships",22033,[],new Date("2018-09-06T02:42:53.598Z"),"Wooden Architect",46183,"Gorgeous relationships",{_id: 3329,str: "Port compressing",num: 71157,date: new Date("2018-09-06T16:22:27.387Z"),array: [],obj: {_id: 3330,str: "hack Tuna THX",num: 98608,date: new Date("2018-09-06T09:20:56.285Z"),obj: {}}},55883,new Date("2018-09-06T04:56:20.313Z"),new Date("2018-09-06T12:30:33.721Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3331,str: "SAS Home Loan Account Republic of Korea",num: 83114,date: new Date("2018-09-05T23:55:32.867Z"),array: ["turquoise","Licensed Steel Hat Investment Account",new Date("2018-09-06T13:00:40.901Z"),4950,"red Sports","Avon",[],46266,new Date("2018-09-05T23:45:09.386Z"),{_id: 3332,str: "Gorgeous ivory",date: new Date("2018-09-06T13:52:11.133Z"),array: [],obj: {}},new Date("2018-09-06T04:37:26.975Z"),88078]});
    },

    function(coll) {
        return coll.insert({_id: 3333,str: "Checking Account Bond Markets Units European Composite Unit (EURCO) Refined Rubber Bike",num: 57251,date: new Date("2018-09-06T05:20:40.916Z"),array: [new Date("2018-09-06T04:32:36.179Z"),new Date("2018-09-06T09:44:05.741Z"),71347,"Maryland calculate Avon",84773,"withdrawal",new Date("2018-09-06T00:46:03.536Z"),{_id: 3334,str: "Bridge Program Western Sahara",date: new Date("2018-09-06T12:08:28.451Z"),array: [],obj: {}},"RAM",{_id: 3335,date: new Date("2018-09-06T18:45:32.819Z")}],obj: {_id: 3336,str: "Cedi Agent",num: 50027,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3337,str: "Assurance",num: 69736,date: new Date("2018-09-06T18:58:26.617Z"),array: [],obj: {_id: 3338,date: new Date("2018-09-06T19:01:37.352Z"),array: [new Date("2018-09-06T00:48:33.887Z"),64773,"array","bluetooth Chair",new Date("2018-09-06T16:34:42.488Z"),50152,"payment Soft Branding","Grass-roots Refined Bedfordshire",new Date("2018-09-06T10:04:14.202Z"),{_id: 3339,str: "HTTP bypass",num: 61579,date: new Date("2018-09-06T07:02:50.259Z"),array: [],obj: {_id: 3340,str: "deposit Grass-roots",num: 22446,obj: {_id: 3341,str: "turn-key calculating",num: 2840,date: new Date("2018-09-06T14:24:58.914Z"),obj: {}}}},[],6928]}});
    },

    function(coll) {
        return coll.insert({_id: 3342,str: "Saint Barthelemy",num: 47561,date: new Date("2018-09-05T21:32:49.117Z"),array: [new Date("2018-09-06T07:06:16.720Z"),31550,18511,"cultivate Idaho","Estates",new Date("2018-09-06T07:14:11.015Z"),new Date("2018-09-06T19:21:59.470Z"),26653]});
    },

    function(coll) {
        return coll.insert({_id: 3343,str: "content TCP",num: 46248,date: new Date("2018-09-06T01:38:40.749Z"),array: [new Date("2018-09-06T19:31:28.362Z"),new Date("2018-09-06T09:15:46.924Z"),"USB",new Date("2018-09-06T03:10:23.413Z"),{_id: 3344,str: "Bolivar Fuerte Steel",num: 35803,date: new Date("2018-09-06T03:43:24.940Z"),array: [85841,"pixel",14346,"synthesize"],obj: {}},"Parkways",new Date("2018-09-06T17:06:42.948Z"),{_id: 3345,str: "high-level wireless Hat",num: 70795,date: new Date("2018-09-06T05:34:42.335Z"),array: [],obj: {_id: 3346,str: "methodologies",num: 39477,array: [20582,{_id: 3347,str: "white",date: new Date("2018-09-06T17:54:23.707Z")}],obj: {}}},[],"convergence"],obj: {_id: 3348,str: "tertiary Illinois bi-directional",date: new Date("2018-09-05T21:35:19.847Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3349,str: "Personal Loan Account Libyan Dinar",num: 40649,date: new Date("2018-09-06T05:06:18.638Z"),array: [],obj: {_id: 3350,str: "Function-based open architecture focus group",num: 76172,date: new Date("2018-09-06T17:08:39.407Z"),array: [65387,new Date("2018-09-06T14:18:29.582Z"),{_id: 3351,str: "Fresh",num: 70909,date: new Date("2018-09-06T13:00:40.027Z"),array: [],obj: {}},"Legacy","Incredible Savings Account",[new Date("2018-09-06T15:53:57.747Z"),new Date("2018-09-06T19:41:07.455Z"),84671,new Date("2018-09-06T07:33:51.316Z"),19697,[]],"architectures e-markets",{_id: 3352,date: new Date("2018-09-06T17:22:41.216Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3353,str: "withdrawal Home Loan Account Generic",date: new Date("2018-09-06T18:04:53.629Z"),array: [],obj: {_id: 3354,str: "strategize Licensed Metal Pants quantify",num: 28749,date: new Date("2018-09-06T14:14:36.466Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3355,str: "Accountability Assistant",num: 1982,date: new Date("2018-09-06T07:57:09.625Z"),array: ["Brand Credit Card Account Ethiopian Birr",35396,new Date("2018-09-06T16:11:02.304Z"),new Date("2018-09-06T01:44:51.707Z"),78609,[],"whiteboard",76497,new Date("2018-09-06T12:37:21.195Z"),{_id: 3356,num: 66755,date: new Date("2018-09-06T11:32:13.243Z"),array: [],obj: {}},"client-server"],obj: {_id: 3357,str: "payment program",date: new Date("2018-09-06T06:13:07.666Z"),array: [{_id: 3358,str: "B2B Chief sensor",array: [],obj: {_id: 3359,str: "Baby Orchestrator backing up",num: 93431,date: new Date("2018-09-06T15:35:57.267Z"),obj: {}}},[39390,new Date("2018-09-05T20:30:04.644Z")],18400,85262,new Date("2018-09-05T23:14:32.281Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 3360,str: "payment Plains",num: 31864,date: new Date("2018-09-06T16:11:40.810Z"),array: [24249,"Walks Fresh index","parsing Refined Rubber Soap",{_id: 3361,str: "olive",num: 20788,date: new Date("2018-09-06T10:29:22.155Z"),array: []},new Date("2018-09-06T12:45:44.919Z"),new Date("2018-09-06T19:21:13.400Z"),94732,[[new Date("2018-09-06T19:28:06.436Z"),new Date("2018-09-06T14:54:27.183Z")]],{_id: 3362,date: new Date("2018-09-06T14:43:43.442Z"),obj: {_id: 3363,num: 16611,array: [],obj: {}}},"Digitized olive interactive",77898,34845],obj: {_id: 3364,str: "Buckinghamshire",date: new Date("2018-09-06T13:52:12.123Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3365,str: "distributed Fresh SCSI",num: 62176,date: new Date("2018-09-05T22:22:18.653Z"),array: [71528,new Date("2018-09-06T19:22:46.946Z"),"Som Licensed Metal Chair",[],new Date("2018-09-06T02:03:31.281Z"),37935,[[new Date("2018-09-06T05:38:18.194Z"),"Bond Markets Units European Composite Unit (EURCO) primary Horizontal","programming networks Auto Loan Account"],61229,"Fantastic Concrete Cheese",{_id: 3366,str: "Director",num: 69742,date: new Date("2018-09-06T15:29:40.819Z"),array: [],obj: {}},new Date("2018-09-06T03:30:59.885Z"),7774],1733],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3367,str: "hardware channels",num: 95454,date: new Date("2018-09-06T02:39:23.702Z"),obj: {_id: 3368,str: "bypass Sleek withdrawal",num: 29864,date: new Date("2018-09-06T03:14:19.918Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3369,str: "Ecuador",num: 83578,date: new Date("2018-09-06T01:27:50.807Z"),array: [67886,"South Dakota Division bus",85305,"sky blue",new Date("2018-09-05T23:57:45.309Z"),new Date("2018-09-06T10:51:26.870Z"),{_id: 3370,str: "users Markets Cheese",num: 16103,date: new Date("2018-09-06T11:50:18.452Z"),array: [[],"Alaska Associate",19911],obj: {}},33460,new Date("2018-09-06T12:41:39.984Z"),"withdrawal Sleek Fresh Soap"],obj: {_id: 3371,str: "Frozen cross-media",num: 96411,date: new Date("2018-09-06T10:50:08.429Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3372,num: 46060,date: new Date("2018-09-06T09:45:14.999Z"),array: ["Borders Slovenia Steel",new Date("2018-09-06T05:46:23.253Z"),"backing up",52736,{_id: 3373,str: "ability calculating Multi-lateral",num: 52309,array: [],obj: {_id: 3374,str: "Supervisor Steel",date: new Date("2018-09-05T20:59:49.914Z"),array: [new Date("2018-09-06T08:26:18.463Z")],obj: {_id: 3375,str: "Key",num: 62312,date: new Date("2018-09-06T14:38:05.510Z")}}},3043,97095,[],"Fantastic Concrete Bacon","Re-contextualized Home Loan Account","Hong Kong benchmark",new Date("2018-09-06T05:48:59.254Z"),new Date("2018-09-05T23:18:39.307Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3376,num: 78874,date: new Date("2018-09-06T00:58:31.252Z"),array: [new Date("2018-09-06T15:20:36.471Z"),{_id: 3377,str: "invoice application",num: 85000,date: new Date("2018-09-05T22:21:27.344Z"),array: [new Date("2018-09-05T20:22:55.609Z")],obj: {}},{_id: 3378,str: "Fresh Movies mobile",num: 60604,date: new Date("2018-09-06T00:48:46.015Z"),array: [],obj: {}},"Rwanda Franc",63289,"attitude",new Date("2018-09-06T08:11:05.868Z"),74176,95247,"Granite Credit Card Account",[],[],["Games frictionless"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3379,str: "Turkmenistan Berkshire Lead",num: 76746,date: new Date("2018-09-06T03:42:12.444Z"),array: [],obj: {_id: 3380,str: "logistical JSON",num: 8401,date: new Date("2018-09-05T21:45:46.326Z"),array: ["mobile","AGP invoice",22958,90321,[],"Computer transmitting"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3381,str: "array Checking Account Berkshire",num: 33163,array: ["Comoro Franc Borders",72755,"scalable portals",73527,new Date("2018-09-06T11:58:01.246Z"),new Date("2018-09-06T15:01:10.782Z"),78178,"generating Australian Dollar",[]],obj: {_id: 3382,str: "even-keeled Buckinghamshire",num: 19670,date: new Date("2018-09-06T13:07:14.889Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3383,str: "repurpose",num: 96758,date: new Date("2018-09-06T06:31:38.297Z"),array: ["partnerships card","Chief",new Date("2018-09-06T16:46:32.177Z"),56276,23913,new Date("2018-09-05T21:56:21.705Z"),{_id: 3384,str: "Robust Utah Practical Frozen Fish",num: 82889,date: new Date("2018-09-06T18:32:48.419Z"),array: [],obj: {}},84355,"Table",60165,new Date("2018-09-06T12:56:13.066Z"),[new Date("2018-09-06T18:57:05.597Z")],"eyeballs",["Principal"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3385,str: "Investment Account Branding orchid",num: 54519,date: new Date("2018-09-06T09:26:46.402Z"),array: [],obj: {_id: 3386,str: "Internal online",num: 88646,date: new Date("2018-09-06T02:36:30.975Z"),array: ["Rand",93279,80894,new Date("2018-09-06T04:17:26.999Z"),"Personal Loan Account Bacon Progressive",[]],obj: {_id: 3387,str: "Tanzanian Shilling Forward virtual",num: 17290,date: new Date("2018-09-06T10:13:54.094Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3388,str: "Interactions Marketing",num: 6282,date: new Date("2018-09-06T08:24:36.215Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3389,str: "Tasty Cotton Bike SMTP",date: new Date("2018-09-06T00:39:04.189Z"),array: [new Date("2018-09-06T05:46:09.183Z"),"Plastic","copying Buckinghamshire",55514,[],new Date("2018-09-06T18:20:45.279Z"),new Date("2018-09-06T10:09:59.988Z"),[],62372,{_id: 3390,num: 30745,date: new Date("2018-09-06T05:20:16.636Z"),array: [55828,"Devolved Borders throughput","Car Games Unbranded Concrete Bike",{_id: 3391,str: "Executive synthesize",num: 15982,array: [9445],obj: {}}],obj: {_id: 3392,str: "Hryvnia Cambridgeshire",num: 58570,array: [],obj: {}}},62018]});
    },

    function(coll) {
        return coll.insert({_id: 3393,str: "optimal Officer Implemented",num: 73939,date: new Date("2018-09-06T00:05:01.153Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3394,str: "Route expedite",date: new Date("2018-09-05T20:29:52.833Z"),array: ["Hungary Technician",32646,"Wisconsin Soft bluetooth",new Date("2018-09-05T23:09:30.589Z"),new Date("2018-09-06T05:29:11.175Z"),83046,new Date("2018-09-05T22:09:13.193Z"),new Date("2018-09-05T23:32:46.424Z"),{_id: 3395,str: "frictionless",date: new Date("2018-09-06T02:36:59.681Z"),obj: {_id: 3396,str: "Ergonomic",num: 594,date: new Date("2018-09-06T11:57:39.049Z"),array: [],obj: {}}},"encoding Switchable",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3397,str: "Auto Loan Account plug-and-play bypass",num: 17660,date: new Date("2018-09-06T19:13:01.017Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3398,str: "Customer",num: 45743,date: new Date("2018-09-06T17:00:55.157Z"),array: [],obj: {_id: 3399,num: 83874,date: new Date("2018-09-06T19:13:12.451Z"),array: [new Date("2018-09-06T18:37:25.688Z"),97484,"Valleys","background Pizza",86726,"parsing Intelligent",{_id: 3400,str: "engage",num: 51478,date: new Date("2018-09-06T03:58:44.540Z"),array: [70961,[[],new Date("2018-09-06T16:07:00.662Z")]],obj: {}},39594,{_id: 3401,str: "XML Devolved",num: 82049,array: [],obj: {_id: 3402,str: "microchip Integrated",num: 64691,date: new Date("2018-09-06T09:53:48.045Z"),obj: {}}},"PCI Granite indexing",{_id: 3403,str: "1080p",num: 67224},new Date("2018-09-06T13:27:33.977Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3404,str: "Home Loan Account copy Metal",num: 40647,obj: {_id: 3405,str: "Investor",num: 31149,date: new Date("2018-09-06T18:22:02.116Z"),array: ["Credit Card Account","e-services",70831,"Fresh Concrete 1080p",new Date("2018-09-06T10:24:14.073Z"),5064,"bleeding-edge Bacon",new Date("2018-09-05T22:57:07.155Z"),new Date("2018-09-06T18:45:42.342Z"),[],19531,{_id: 3406,str: "actuating paradigms",num: 12635,date: new Date("2018-09-06T14:53:04.337Z"),array: [],obj: {_id: 3407,date: new Date("2018-09-05T23:03:43.977Z"),array: [new Date("2018-09-06T04:30:44.319Z"),53777,"frame olive transition"],obj: {}}},{_id: 3408,str: "index calculating",num: 13958,date: new Date("2018-09-06T19:03:46.911Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 3409,str: "Beauty Frozen turquoise",num: 89928,date: new Date("2018-09-05T20:12:50.330Z"),obj: {_id: 3410,str: "Uzbekistan",num: 38258,date: new Date("2018-09-06T14:29:47.985Z"),array: [{_id: 3411,array: [],obj: {_id: 3412,str: "Antigua and Barbuda Manager",num: 54205,date: new Date("2018-09-06T19:17:39.253Z"),obj: {_id: 3413,date: new Date("2018-09-06T16:34:07.868Z"),array: [],obj: {}}}},new Date("2018-09-06T17:32:10.995Z"),81113,new Date("2018-09-06T13:43:52.077Z"),new Date("2018-09-06T05:03:16.727Z"),"indigo multi-tasking","Bike Shoes",46983,59178,[new Date("2018-09-06T00:32:18.530Z")],{_id: 3414,str: "cross-platform",num: 4327,date: new Date("2018-09-05T23:08:02.102Z"),array: []},{_id: 3415,array: [],obj: {}},"Generic Fresh Shoes"]}});
    },

    function(coll) {
        return coll.insert({_id: 3416,str: "Awesome transitional",num: 63648,date: new Date("2018-09-05T20:48:57.224Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3417,num: 98625,date: new Date("2018-09-06T03:58:08.774Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3418,str: "extensible",num: 41720,date: new Date("2018-09-06T16:52:14.352Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3419,str: "Iran District",num: 34628,array: [new Date("2018-09-05T20:35:22.296Z"),94170,new Date("2018-09-06T19:33:17.677Z"),75900,"Borders generate Borders","Facilitator",{_id: 3420,str: "middleware ability",num: 58323,date: new Date("2018-09-06T11:14:52.241Z"),array: [[],"Soap"],obj: {_id: 3421,str: "Computers",num: 94066,obj: {}}},"Triple-buffered Response",{_id: 3422,date: new Date("2018-09-05T20:00:14.516Z"),array: [],obj: {_id: 3423,date: new Date("2018-09-06T10:45:03.294Z"),array: []}},84565]});
    },

    function(coll) {
        return coll.insert({_id: 3424,str: "invoice global THX",num: 51410,date: new Date("2018-09-06T15:42:40.292Z"),array: [new Date("2018-09-06T03:22:43.485Z"),"enable Fords Camp",new Date("2018-09-06T09:12:52.063Z"),70149,"Computer SCSI","sky blue Human Personal Loan Account",new Date("2018-09-06T18:54:29.256Z"),94910,39336,81557],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3425,str: "Nuevo Sol Fundamental",num: 80981,date: new Date("2018-09-06T03:58:29.353Z"),array: [],obj: {_id: 3426,str: "bottom-line",num: 88841,date: new Date("2018-09-06T00:04:55.996Z"),array: [87654,new Date("2018-09-06T13:37:02.330Z"),"Grenada Indian Rupee Ngultrum navigate",25064,51662,["Checking Account",new Date("2018-09-05T22:29:28.754Z"),"compress Credit Card Account back-end"],new Date("2018-09-06T01:47:15.821Z"),new Date("2018-09-06T10:21:47.731Z"),20292,[],47768,{_id: 3427,str: "Personal Loan Account Plastic",num: 99262,date: new Date("2018-09-06T06:52:59.974Z"),array: [],obj: {}}],obj: {_id: 3428,str: "panel Investment Account",num: 58263,date: new Date("2018-09-06T05:09:01.008Z"),obj: {_id: 3429,num: 98360,array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 3430,str: "Costa Rican Colon",num: 15685,date: new Date("2018-09-06T13:04:54.632Z"),array: [],obj: {_id: 3431,num: 35160,array: ["Refined Wooden Soap",new Date("2018-09-05T20:43:14.128Z"),84104,"Oman Mouse needs-based",new Date("2018-09-06T15:37:42.918Z"),97235,["Alabama SQL",{_id: 3432,str: "Lake",num: 87352,date: new Date("2018-09-06T09:45:14.722Z"),array: [{_id: 3433,num: 39300,date: new Date("2018-09-06T16:13:43.347Z"),array: []},new Date("2018-09-06T12:31:06.464Z"),47990],obj: {}}],"withdrawal","New Hampshire synthesize Generic Cotton Chicken",{_id: 3434,str: "Supervisor",num: 40073,date: new Date("2018-09-06T03:55:18.542Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3435,str: "Spring Total",num: 56801,date: new Date("2018-09-06T06:29:54.499Z"),array: ["Markets Trace Games","full-range Associate",[],{_id: 3436,str: "Netherlands Antilles compress e-tailers",date: new Date("2018-09-06T12:32:57.586Z"),array: [new Date("2018-09-06T02:24:14.370Z"),new Date("2018-09-05T20:15:58.831Z"),"Future Executive optical"],obj: {_id: 3437,num: 1419,date: new Date("2018-09-06T00:09:15.674Z"),array: [],obj: {}}},"JSON Alaska",new Date("2018-09-06T11:12:55.292Z"),68845,new Date("2018-09-06T00:27:59.764Z"),23567,10312,new Date("2018-09-06T04:00:47.085Z"),[],[[]],29438]});
    },

    function(coll) {
        return coll.insert({_id: 3438,str: "applications Berkshire",num: 86118,date: new Date("2018-09-06T15:32:18.855Z"),array: [],obj: {_id: 3439,num: 839,array: [19351,new Date("2018-09-06T08:44:55.869Z"),"Ergonomic driver Path","Future",73595,new Date("2018-09-06T13:01:45.617Z"),"Borders Unbranded Rubber Car deposit",90234,"envisioneer","South Dakota Handcrafted Cotton Pizza",new Date("2018-09-06T11:45:06.428Z"),new Date("2018-09-06T08:11:49.856Z")],obj: {_id: 3440,str: "Bacon revolutionize",date: new Date("2018-09-06T14:01:49.627Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3441,str: "SMS",num: 77298,date: new Date("2018-09-05T22:27:07.433Z"),array: [4795,6103,"payment","program",75049,"Borders",new Date("2018-09-06T08:40:21.665Z"),{_id: 3442,str: "Portugal Belgium Fresh",num: 94184,date: new Date("2018-09-05T21:41:19.106Z"),obj: {}},new Date("2018-09-06T05:08:49.453Z"),"Saudi Riyal brand",[],new Date("2018-09-06T04:20:51.947Z"),[]],obj: {_id: 3443,array: [new Date("2018-09-05T21:35:39.200Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3444,str: "mobile Lead",num: 31015,date: new Date("2018-09-06T11:48:57.784Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3445,str: "Tasty Metal Chips Stravenue Home",num: 42739,date: new Date("2018-09-05T22:27:32.151Z"),array: [],obj: {_id: 3446,str: "Orchestrator",num: 74359,date: new Date("2018-09-06T12:41:04.951Z"),array: [12966,"online best-of-breed",new Date("2018-09-06T13:28:59.575Z"),"Legacy South Georgia and the South Sandwich Islands benchmark",new Date("2018-09-06T12:08:11.783Z"),new Date("2018-09-05T21:25:51.498Z"),48599],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3447,str: "Tactics Norway",num: 97978,date: new Date("2018-09-05T21:08:37.616Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3448,str: "Customer Assurance withdrawal",num: 7333,date: new Date("2018-09-06T04:17:57.241Z"),array: [33429,new Date("2018-09-05T20:09:12.880Z"),"Inverse",new Date("2018-09-06T06:06:45.021Z"),[],8787,"hardware port",{_id: 3449,str: "maximized",num: 80667,date: new Date("2018-09-06T15:05:40.018Z"),array: [new Date("2018-09-06T15:48:35.710Z"),new Date("2018-09-06T06:35:21.349Z"),70645,49999,"value-added Central Tunisian Dinar",new Date("2018-09-06T00:48:40.131Z"),"Architect Sleek",{_id: 3450,str: "clicks-and-mortar Principal",num: 17169,date: new Date("2018-09-05T20:22:59.207Z")}],obj: {}}],obj: {_id: 3451,num: 47168,date: new Date("2018-09-05T23:21:03.044Z"),array: [new Date("2018-09-06T18:49:49.049Z")],obj: {_id: 3452,str: "Village Avon Fantastic Rubber Towels",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 3453,str: "Personal Loan Account withdrawal transmit",num: 90491,date: new Date("2018-09-06T07:42:50.911Z"),array: [[[],34456,new Date("2018-09-06T14:55:12.205Z"),59792,"Vermont Frozen",99456],{_id: 3454,str: "Incredible card Cross-group",num: 57538,date: new Date("2018-09-06T14:42:28.764Z"),obj: {_id: 3455,str: "Administrator back-end Botswana",num: 98404,date: new Date("2018-09-06T01:36:12.248Z"),array: [],obj: {_id: 3456,date: new Date("2018-09-06T13:23:52.071Z"),array: [new Date("2018-09-06T01:15:03.689Z"),"copying",[64259,new Date("2018-09-05T22:13:22.576Z"),{_id: 3457,str: "Avon actuating",num: 55396,date: new Date("2018-09-06T07:17:07.656Z"),array: [],obj: {}},{_id: 3458,num: 11680,date: new Date("2018-09-06T13:45:52.276Z"),array: [],obj: {_id: 3459,str: "indexing Intelligent metrics",num: 90939,obj: {}}}]]}}},"Small Fresh Cheese Balanced",new Date("2018-09-05T22:53:32.072Z"),new Date("2018-09-06T10:42:52.989Z"),{_id: 3460,str: "South Dakota granular multi-byte",array: []},[new Date("2018-09-06T10:42:03.718Z")],29463]});
    },

    function(coll) {
        return coll.insert({_id: 3461,str: "Awesome Tactics Czech Republic",num: 17538,date: new Date("2018-09-06T19:28:15.652Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3462,str: "SMS Ferry bleeding-edge",num: 52736,date: new Date("2018-09-06T18:56:36.244Z"),array: [10233,new Date("2018-09-05T22:47:13.991Z"),[],52633,{_id: 3463,str: "invoice",num: 43564,date: new Date("2018-09-06T11:11:03.109Z"),array: [new Date("2018-09-06T03:08:35.403Z"),"Baby Car Salad",new Date("2018-09-06T07:03:22.997Z"),"Metrics"],obj: {_id: 3464,str: "Developer",num: 37858,date: new Date("2018-09-06T05:01:10.371Z"),array: [],obj: {}}},new Date("2018-09-06T18:19:55.689Z"),[],99049,92877,"envisioneer"],obj: {_id: 3465,str: "Mali Diverse",num: 36661,date: new Date("2018-09-05T23:14:25.708Z"),obj: {_id: 3466,num: 31535,array: [[{_id: 3467,str: "calculating Fresh",num: 54950,array: [],obj: {}},"Norfolk Island quantifying white","Berkshire intranet","reboot Silver integrated"],{_id: 3468,str: "Malaysian Ringgit Gorgeous Cotton Keyboard Checking Account",date: new Date("2018-09-06T16:31:31.415Z"),array: []}],obj: { _id: 3469 }}}});
    },

    function(coll) {
        return coll.insert({_id: 3470,str: "Directives",num: 62334,date: new Date("2018-09-06T13:20:32.749Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3471,str: "Unbranded Cotton Shirt users Ethiopian Birr",num: 179,date: new Date("2018-09-06T10:30:03.914Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3472,str: "Fantastic Rubber orange",num: 53184,date: new Date("2018-09-06T19:09:15.809Z"),obj: {_id: 3473,str: "Moroccan Dirham Liaison",num: 61046,date: new Date("2018-09-06T03:46:18.689Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3474,str: "wireless Marketing",num: 38212,date: new Date("2018-09-05T21:18:43.086Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3475,str: "mobile systems",num: 38911,date: new Date("2018-09-06T16:14:41.088Z"),array: ["Personal Loan Account JSON Rand Loti",new Date("2018-09-06T18:33:41.750Z"),"Arkansas",[],24089,30927,"Group Lane",new Date("2018-09-06T19:37:19.334Z"),new Date("2018-09-06T03:33:16.705Z"),19924,new Date("2018-09-06T03:23:37.383Z"),new Date("2018-09-05T23:14:35.239Z"),"JSON"],obj: {_id: 3476,str: "Samoa Home Loan Account",date: new Date("2018-09-06T06:09:53.606Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3477,str: "killer SMS redundant",array: ["Inlet",96282,41693,"Indiana invoice",new Date("2018-09-05T21:58:53.301Z"),new Date("2018-09-06T02:23:43.062Z"),92782,new Date("2018-09-06T13:06:16.979Z"),53741,"Ridge Buckinghamshire Balanced","HDD Wallis and Futuna back up",{_id: 3478,str: "navigating Centralized Keyboard",num: 56215,array: [[new Date("2018-09-06T11:02:36.726Z"),86470,{_id: 3479,num: 86798,date: new Date("2018-09-06T15:18:50.509Z"),array: [],obj: {_id: 3480,num: 74793,date: new Date("2018-09-06T08:19:08.696Z"),obj: {}}},{_id: 3481,str: "adapter compelling",num: 36798,date: new Date("2018-09-06T18:41:46.461Z"),array: [],obj: {_id: 3482,str: "dedicated Savings Account convergence",num: 8122,array: [[],["transmit orchid Strategist"]],obj: {_id: 3483,str: "Polarised deploy Small Metal Chair",num: 92288,date: new Date("2018-09-06T04:30:29.922Z")}}}]],obj: {_id: 3484,date: new Date("2018-09-06T01:42:15.982Z"),array: [],obj: {}}},"Metal Fish grey"]});
    },

    function(coll) {
        return coll.insert({_id: 3485,str: "Crossroad fresh-thinking",date: new Date("2018-09-06T05:29:35.792Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3486,str: "relationships",num: 71122,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3487,str: "challenge content",num: 53029,date: new Date("2018-09-06T01:19:47.488Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3488,str: "ADP impactful",num: 3084,date: new Date("2018-09-05T21:22:23.906Z"),obj: {_id: 3489,str: "fuchsia Data port",num: 57123,array: [87033,"Clothing","multi-byte","synthesize ability Avon",new Date("2018-09-06T07:23:45.665Z"),47266,66860,[],{_id: 3490,date: new Date("2018-09-06T01:57:42.504Z"),array: []},new Date("2018-09-06T03:49:06.039Z"),{_id: 3491,str: "Tuvalu",num: 74793,date: new Date("2018-09-06T08:11:11.812Z"),array: [],obj: {}},41071]}});
    },

    function(coll) {
        return coll.insert({_id: 3492,str: "HDD Sleek Course",num: 22245,date: new Date("2018-09-06T10:01:27.123Z"),obj: {_id: 3493,str: "Credit Card Account initiatives",num: 65507,date: new Date("2018-09-06T10:18:26.483Z"),array: [],obj: {_id: 3494,str: "invoice Small Wooden Hat",num: 3311,date: new Date("2018-09-06T13:11:12.024Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 3495,str: "bypass",num: 35280,date: new Date("2018-09-06T04:29:10.715Z"),array: [],obj: {_id: 3496,str: "standardization",num: 97579,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3497,str: "synthesize",num: 60428,date: new Date("2018-09-06T19:07:17.079Z"),array: [84129,"Chad Home Loan Account",new Date("2018-09-06T13:16:13.920Z"),"Alaska",new Date("2018-09-05T21:13:56.037Z"),{_id: 3498,str: "benchmark Open-architected JBOD",num: 17265,date: new Date("2018-09-06T04:51:58.815Z"),array: [],obj: {_id: 3499,num: 68104,array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3500,str: "Sleek Frozen Shoes",num: 9766,date: new Date("2018-09-06T14:02:11.117Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3501,str: "withdrawal multi-state",num: 96864,date: new Date("2018-09-06T04:00:29.919Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3502,str: "Tuna enable green",num: 98496,date: new Date("2018-09-06T00:50:31.027Z"),array: ["Regional",1441,{_id: 3503,str: "Cliffs enhance",num: 41336,date: new Date("2018-09-06T13:01:03.719Z"),obj: {_id: 3504,str: "Estonia",num: 25923,date: new Date("2018-09-06T17:18:20.700Z"),array: [],obj: {}}},new Date("2018-09-06T03:49:15.501Z"),["synthesize",55647,new Date("2018-09-05T21:34:39.840Z")],new Date("2018-09-06T19:12:15.867Z"),"Ergonomic Rubber Table Handcrafted Metal Towels",new Date("2018-09-06T04:30:40.625Z"),new Date("2018-09-06T05:24:48.304Z"),70960,{_id: 3505,str: "reboot",num: 70232,array: [],obj: {}},[],1403,new Date("2018-09-05T20:30:30.302Z")]});
    },

    function(coll) {
        return coll.insert({_id: 3506,str: "maximize",num: 58253,date: new Date("2018-09-05T23:09:47.419Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3507,str: "white magenta",num: 96940,date: new Date("2018-09-06T15:09:42.385Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3508,num: 81679,date: new Date("2018-09-05T22:14:22.682Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3509,str: "experiences monitor Future-proofed",num: 64596,date: new Date("2018-09-05T23:33:17.331Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3510,str: "partnerships overriding e-tailers",num: 40289,date: new Date("2018-09-06T07:11:30.407Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3511,str: "turquoise integrate array",num: 15808,date: new Date("2018-09-06T13:28:20.995Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3512,str: "Practical Granite Towels",num: 20057,date: new Date("2018-09-06T09:58:22.634Z"),array: [],obj: {_id: 3513,str: "Yen",num: 94395,date: new Date("2018-09-06T01:24:58.407Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3514,str: "4th generation initiatives Architect",num: 55337,date: new Date("2018-09-06T00:03:48.329Z"),array: ["copy mobile Personal Loan Account","6th generation Manager structure",94500,["deposit Zimbabwe Dollar",new Date("2018-09-06T13:54:18.083Z")],[],new Date("2018-09-06T06:56:51.397Z"),new Date("2018-09-06T16:28:12.816Z"),97063,new Date("2018-09-06T01:57:56.259Z"),"Philippines Computer",86548,new Date("2018-09-06T13:12:43.779Z")],obj: {_id: 3515,str: "XML",num: 52790,date: new Date("2018-09-06T11:56:36.581Z"),array: [],obj: {_id: 3516,str: "Metal",num: 15737,date: new Date("2018-09-05T20:23:54.775Z"),obj: {_id: 3517,str: "Chips Namibia feed",date: new Date("2018-09-06T16:30:06.330Z"),array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 3518,num: 11424,date: new Date("2018-09-05T20:57:30.013Z"),array: [31404,"Handmade Soft Chicken",new Date("2018-09-06T03:37:52.549Z"),new Date("2018-09-06T02:28:57.224Z"),"maroon Paradigm Buckinghamshire","Principal Shirt Benin",[],new Date("2018-09-06T07:48:11.384Z"),{_id: 3519,str: "Auto Loan Account Checking Account",num: 66067,date: new Date("2018-09-05T23:00:23.745Z"),array: [],obj: {}},new Date("2018-09-05T20:20:16.903Z"),"Lakes HDD virtual",74126],obj: {_id: 3520,str: "Creative",num: 14913,date: new Date("2018-09-06T01:56:59.098Z"),array: ["web-enabled",93212],obj: {_id: 3521,str: "Greenland",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3522,str: "Somalia",num: 49617,date: new Date("2018-09-06T01:12:27.717Z"),array: [new Date("2018-09-06T06:17:17.599Z"),new Date("2018-09-06T01:24:55.731Z"),18741,[],37966,"Gorgeous Granite Salad 24/7","benchmark invoice generating","Checking Account",35217],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3523,str: "Incredible Plastic Pizza Auto Loan Account",num: 45658,date: new Date("2018-09-06T18:13:12.415Z"),array: [],obj: {_id: 3524,str: "multi-state Handcrafted Bedfordshire",num: 99297,date: new Date("2018-09-06T18:56:36.631Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3525,str: "Lead",num: 57260,array: []});
    },

    function(coll) {
        return coll.insert({_id: 3526,str: "Regional Practical Granite Shirt",num: 20050,date: new Date("2018-09-05T23:23:23.724Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3527,str: "Home Loan Account",num: 11683,date: new Date("2018-09-06T10:10:28.543Z"),array: [new Date("2018-09-05T22:18:40.311Z"),97766,new Date("2018-09-06T07:48:44.654Z"),"Tasty Fresh Jewelery",84455,"Solutions revolutionize",{_id: 3528,num: 76063,date: new Date("2018-09-06T01:26:29.908Z"),obj: {}},"primary Industrial",24975,new Date("2018-09-06T09:43:07.201Z"),{_id: 3529,str: "knowledge base magnetic",num: 96497,date: new Date("2018-09-05T21:08:17.997Z"),array: []},"Home Heights Object-based",[]],obj: {_id: 3530,num: 18568,array: [{_id: 3531,str: "Customer Money Market Account Money Market Account",date: new Date("2018-09-06T07:50:55.360Z"),array: [],obj: {_id: 3532,str: "Minnesota maximize Principal",date: new Date("2018-09-05T19:56:39.091Z"),obj: {_id: 3533,str: "Human",num: 84715,array: [{_id: 3534,str: "Falls red",num: 30418,date: new Date("2018-09-05T23:42:48.093Z"),array: [[new Date("2018-09-06T15:51:35.461Z")],[]]},new Date("2018-09-06T11:49:38.560Z")]}}},70996],obj: { _id: 3535 }}});
    },

    function(coll) {
        return coll.insert({_id: 3536,str: "user-centric",num: 87505,date: new Date("2018-09-06T05:41:19.549Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3537,str: "repurpose",num: 77223,date: new Date("2018-09-06T11:33:13.286Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3538,str: "matrix Practical",num: 8952,date: new Date("2018-09-06T11:40:43.884Z"),array: [],obj: {_id: 3539,num: 98331,date: new Date("2018-09-06T13:04:09.262Z"),array: ["Automotive Gorgeous orchestrate",new Date("2018-09-06T17:41:04.629Z"),70741,"Connecticut",[39940],new Date("2018-09-06T05:45:55.092Z"),{_id: 3540,str: "Tuna digital",date: new Date("2018-09-06T18:35:36.201Z"),array: [[]],obj: {}},15898,new Date("2018-09-06T15:53:12.621Z"),"motivating Identity",27046,"partnerships","bottom-line Path Beauty"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3541,str: "Graphical User Interface bottom-line Savings Account",num: 25915,array: [],obj: {_id: 3542,str: "Phased open-source",num: 89711,date: new Date("2018-09-06T13:05:28.345Z"),array: ["24/365 Home Loan Account",new Date("2018-09-06T15:59:42.851Z"),50844,{_id: 3543,str: "Alabama copying transmitting",num: 98821,date: new Date("2018-09-06T13:58:40.498Z"),array: [],obj: {}},99128,new Date("2018-09-05T22:47:32.180Z"),59857,16577,new Date("2018-09-06T07:49:23.875Z"),"matrix River Bike","Home Loan Account Beauty Credit Card Account",[new Date("2018-09-06T01:26:43.520Z"),"South Carolina Radial Bedfordshire"],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 3544,str: "Practical payment",num: 83971,date: new Date("2018-09-06T18:55:58.253Z"),array: [new Date("2018-09-06T11:15:09.691Z"),45248,[],"USB","Marketing program","virtual",94058,"Future syndicate incremental",[],new Date("2018-09-06T18:34:04.675Z"),39937,new Date("2018-09-06T11:32:53.894Z"),{_id: 3545,str: "Frozen",num: 64182,date: new Date("2018-09-06T14:56:08.750Z"),array: [],obj: {}}],obj: {_id: 3546,num: 17166,date: new Date("2018-09-06T04:44:13.439Z"),array: [{_id: 3547,str: "Face to face Gorgeous",date: new Date("2018-09-06T07:06:46.418Z"),array: [new Date("2018-09-06T10:51:51.962Z"),[{_id: 3548,num: 66579,date: new Date("2018-09-05T21:44:30.502Z"),obj: {_id: 3549,str: "Agent iterate paradigm",obj: {}}},78551]]}],obj: {_id: 3550,str: "Small payment Nepalese Rupee",num: 20237,date: new Date("2018-09-06T00:48:28.139Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 3551,str: "Finland back-end",num: 33571,date: new Date("2018-09-06T08:21:20.537Z"),array: [50686,"Tools orchestration Quality-focused","viral input Refined Frozen Hat",new Date("2018-09-05T22:06:18.036Z"),9256,73603,["bus USB Paradigm"],[],"card","Tunnel connecting Rustic",83828,{_id: 3552,str: "Suriname",num: 34406,date: new Date("2018-09-06T17:35:27.552Z"),array: [],obj: {}}],obj: {_id: 3553,str: "Generic Soft Table Balanced hack",num: 98519,date: new Date("2018-09-06T17:43:09.060Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3554,str: "neutral",num: 16134,date: new Date("2018-09-06T08:56:08.289Z"),array: ["approach Right-sized",{_id: 3555,str: "copying Beauty Madagascar",num: 65979,date: new Date("2018-09-06T06:13:32.955Z"),array: ["Specialist matrix world-class","cutting-edge"],obj: {}},56593,54540,new Date("2018-09-06T02:13:36.023Z"),[],72365,new Date("2018-09-06T01:26:13.523Z"),"deposit quantify Beauty",{_id: 3556,num: 26327,date: new Date("2018-09-05T20:06:14.718Z"),array: [],obj: {_id: 3557,str: "salmon Intranet",num: 40138,date: new Date("2018-09-06T05:46:48.558Z")}},[],new Date("2018-09-06T03:51:26.399Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3558,str: "withdrawal",num: 82518,date: new Date("2018-09-05T22:37:05.040Z"),array: [new Date("2018-09-06T08:35:27.851Z"),87156,"Synchronised calculating",new Date("2018-09-05T20:29:32.060Z"),"capacitor Concrete","Handcrafted",new Date("2018-09-06T17:03:54.199Z"),94947,74192,70344],obj: {_id: 3559,str: "monitor",num: 86271,date: new Date("2018-09-06T05:30:57.540Z"),array: [[new Date("2018-09-06T08:31:51.256Z")],[],"Roads Connecticut Denmark",{_id: 3560,str: "Azerbaijan applications",num: 61960,date: new Date("2018-09-05T20:42:40.868Z"),obj: {}},[]],obj: {_id: 3561,date: new Date("2018-09-06T05:42:52.319Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3562,str: "Rhode Island Computers",num: 78059,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3563,str: "intuitive Strategist Auto Loan Account",num: 53327,date: new Date("2018-09-06T18:47:07.286Z"),obj: {_id: 3564,str: "facilitate deposit Borders",date: new Date("2018-09-06T15:09:25.201Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3565,str: "solid state",num: 15438,date: new Date("2018-09-06T19:00:14.552Z"),array: [new Date("2018-09-06T07:23:24.674Z"),18005,new Date("2018-09-06T11:46:58.529Z"),["heuristic Paradigm Manager",40754,{_id: 3566,str: "Rustic Ergonomic content-based",num: 19869,date: new Date("2018-09-06T09:01:30.414Z"),array: ["sky blue Philippines"],obj: {_id: 3567,array: [],obj: {_id: 3568,str: "payment",num: 50635,date: new Date("2018-09-05T23:39:20.231Z"),obj: {}}}},25952,38030,59540],{_id: 3569,str: "Intelligent Florida exploit",num: 38916,date: new Date("2018-09-05T22:05:35.344Z"),array: [],obj: {}},98475,new Date("2018-09-06T01:52:44.545Z"),"back-end","Plastic Fantastic Concrete Shirt Kids"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3570,num: 27835,date: new Date("2018-09-06T09:30:08.270Z"),array: [],obj: {_id: 3571,str: "Automated digital time-frame",num: 80104,array: [["Lithuanian Litas Freeway",new Date("2018-09-05T22:33:01.605Z"),new Date("2018-09-06T14:39:52.932Z"),"needs-based",new Date("2018-09-06T07:56:01.322Z")],57457,["white Division Coves",{_id: 3572,str: "withdrawal Engineer Rand Loti",date: new Date("2018-09-05T22:37:59.189Z"),obj: {}}],new Date("2018-09-06T14:50:16.938Z"),"quantifying",78051,"Representative",{_id: 3573,str: "navigating Buckinghamshire",num: 81170,date: new Date("2018-09-06T12:30:24.903Z"),array: [],obj: {}},77008,{_id: 3574,str: "Credit Card Account",array: []}]}});
    },

    function(coll) {
        return coll.insert({_id: 3575,str: "Nevada",num: 70624,date: new Date("2018-09-05T22:39:15.324Z"),array: [],obj: {_id: 3576,str: "Principal invoice Engineer",num: 17189,date: new Date("2018-09-05T21:17:56.766Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3577,str: "Azerbaijanian Manat Orchestrator relationships",num: 46503,date: new Date("2018-09-05T23:46:21.871Z"),array: [82609,["programming"],"Director",new Date("2018-09-06T08:48:50.422Z"),96012,"quantify",new Date("2018-09-06T10:11:46.100Z"),[],{_id: 3578,str: "Ports",num: 61600,array: [],obj: {_id: 3579,date: new Date("2018-09-06T12:21:40.707Z"),array: [new Date("2018-09-05T21:38:08.940Z"),"enterprise lime sensor",{_id: 3580,str: "Steel Oklahoma",num: 57255,date: new Date("2018-09-05T20:44:44.557Z"),array: []},60696,"Rubber Handmade Steel Salad",41203,new Date("2018-09-06T05:08:13.596Z")],obj: {}}},81765],obj: {_id: 3581,num: 52193,date: new Date("2018-09-05T20:30:24.820Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3582,str: "hack",num: 94065,date: new Date("2018-09-06T02:32:03.313Z"),array: ["Investment Account programming",new Date("2018-09-06T07:35:52.435Z"),[63355,"Beauty Multi-layered pixel","actuating Product Enterprise-wide",3297,94613,{_id: 3583,str: "GB payment redundant",num: 34649,date: new Date("2018-09-06T19:51:37.611Z"),array: [],obj: {}},"revolutionize South Carolina",{_id: 3584,str: "payment homogeneous solution-oriented",num: 43186},{_id: 3585,str: "Concrete Exclusive",num: 68743,array: [],obj: {_id: 3586,num: 46797,date: new Date("2018-09-06T04:47:19.620Z"),obj: {_id: 3587,num: 30786,date: new Date("2018-09-06T03:20:38.153Z"),array: [new Date("2018-09-05T21:26:06.846Z"),new Date("2018-09-05T23:24:25.444Z")],obj: {}}}},"invoice"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3588,str: "Assistant",num: 18084,date: new Date("2018-09-06T09:27:39.619Z"),obj: {_id: 3589,str: "Ergonomic Concrete Sausages Unbranded Cotton Mouse neural",date: new Date("2018-09-06T03:35:01.324Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3590,str: "pink",num: 42312,date: new Date("2018-09-06T11:02:20.828Z"),array: [92411,[{_id: 3591,str: "feed tan Borders",num: 94932,date: new Date("2018-09-06T10:11:43.520Z"),array: [new Date("2018-09-06T17:40:15.596Z"),[],16617],obj: {_id: 3592,num: 44648,array: [],obj: {_id: 3593,str: "Tunnel Markets",num: 62186,date: new Date("2018-09-06T08:58:20.839Z"),array: []}}}],new Date("2018-09-06T14:19:05.818Z"),"Rwanda Franc Executive",new Date("2018-09-05T21:46:00.209Z"),"Sports help-desk","Gibraltar Pound CSS withdrawal",52093,[96712],{_id: 3594,date: new Date("2018-09-06T19:01:26.146Z"),obj: {}},"Networked Reverse-engineered",new Date("2018-09-06T15:38:15.023Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3595,str: "Port",num: 56694,array: [[],63483,"Hawaii",new Date("2018-09-06T07:07:12.233Z"),new Date("2018-09-06T00:25:02.215Z"),{_id: 3596,str: "Polarised overriding",date: new Date("2018-09-06T14:47:54.434Z"),array: ["Security deposit Berkshire"],obj: {}},34636,{_id: 3597,num: 4183,obj: {}},"actuating Beauty",25973,[],new Date("2018-09-05T20:53:32.513Z"),{_id: 3598,str: "Strategist",num: 78469,date: new Date("2018-09-06T16:50:04.178Z"),array: [[],46634],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 3599,str: "generate Salad",num: 82262,array: [19037,"connect e-tailers Texas",{_id: 3600,num: 55295,date: new Date("2018-09-06T06:17:56.178Z"),obj: {}},new Date("2018-09-05T20:12:22.373Z"),"Investment Account cross-platform"],obj: {_id: 3601,str: "reboot Alabama Oklahoma",num: 30176,date: new Date("2018-09-06T17:49:18.377Z"),array: [new Date("2018-09-06T12:24:33.023Z"),new Date("2018-09-05T20:39:19.206Z"),74558,57636,86493,new Date("2018-09-06T01:25:46.496Z"),"Reactive",{_id: 3602,date: new Date("2018-09-06T16:47:31.711Z"),array: []},{_id: 3603,str: "CSS Kip",num: 25425,obj: {_id: 3604,str: "Books lime back up",num: 66980,date: new Date("2018-09-06T11:20:00.343Z")}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3605,str: "generating",num: 17393,date: new Date("2018-09-06T08:16:24.499Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3606,str: "Frozen Open-source",num: 53247,date: new Date("2018-09-05T20:49:39.463Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3607,str: "infrastructures Strategist",date: new Date("2018-09-06T07:33:01.603Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3608,str: "Borders",num: 74070,date: new Date("2018-09-06T06:51:59.183Z"),array: [new Date("2018-09-06T01:39:28.454Z"),"Buckinghamshire Macao",43071,new Date("2018-09-06T12:41:03.809Z"),{_id: 3609,str: "Baby Associate transmit",num: 67143,date: new Date("2018-09-06T07:47:38.802Z"),array: [],obj: {_id: 3610,str: "benchmark Administrator",num: 56378,date: new Date("2018-09-06T05:59:59.544Z"),obj: {}}},[],14571,32741,"gold Optimization Architect","Granite bluetooth Applications","Team-oriented"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3611,str: "primary Dynamic",num: 2525,date: new Date("2018-09-06T16:59:42.311Z"),array: [new Date("2018-09-06T14:28:01.477Z"),new Date("2018-09-06T08:33:51.990Z"),new Date("2018-09-06T14:46:48.014Z"),"redundant",[],7240,72753,"SAS USB Books","South Dakota Chair","Wooden copy"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3612,str: "multi-byte matrix",num: 27934,date: new Date("2018-09-05T22:06:57.123Z"),array: [new Date("2018-09-05T23:22:43.740Z"),19099,"Rustic Plastic Ball interactive",59122,"Licensed District",new Date("2018-09-06T10:51:18.866Z"),{_id: 3613,str: "grey",num: 2388,date: new Date("2018-09-06T07:13:38.137Z"),obj: {_id: 3614,str: "cutting-edge",date: new Date("2018-09-06T10:00:00.883Z"),array: [new Date("2018-09-06T06:28:18.305Z"),71942],obj: {_id: 3615,num: 19389,array: [],obj: {_id: 3616,str: "Optimization Specialist Savings Account",date: new Date("2018-09-06T15:33:40.127Z"),array: ["wireless Synergistic",new Date("2018-09-06T06:38:26.275Z")]}}}},"Licensed Cotton Chair",[],"Sports",79426]});
    },

    function(coll) {
        return coll.insert({_id: 3617,str: "structure turn-key Practical Plastic Car",num: 73777,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3618,str: "Shoal firewall",num: 4345,array: [new Date("2018-09-06T18:44:08.305Z"),new Date("2018-09-06T07:51:59.684Z"),92754,new Date("2018-09-06T16:51:21.725Z"),"invoice West Virginia Metal",{_id: 3619,str: "transmit Avon",num: 26601,date: new Date("2018-09-06T01:41:30.646Z"),obj: {}},20259,[4177,"Mobility revolutionize Refined Frozen Computer"],94207,"Handmade Rustic Kentucky","Ohio Functionality Guernsey",new Date("2018-09-06T17:13:54.171Z")],obj: {_id: 3620,str: "navigate",num: 35421,date: new Date("2018-09-06T12:14:36.296Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3621,str: "e-commerce",num: 63654,date: new Date("2018-09-06T01:15:21.546Z"),array: [65221,[],new Date("2018-09-06T01:05:41.048Z"),"Incredible Metal Cheese",20475,[],"implementation Oregon New Mexico",{_id: 3622,str: "Avon Personal Loan Account Small Metal Pants",num: 52076,date: new Date("2018-09-06T13:16:35.270Z"),obj: {_id: 3623,date: new Date("2018-09-05T23:27:17.133Z"),array: [{_id: 3624,str: "programming Loaf",num: 4029,date: new Date("2018-09-06T08:27:03.867Z"),array: ["port microchip"],obj: {}},65176],obj: {}}},new Date("2018-09-06T15:29:15.863Z"),41076,"mindshare instruction set",4481],obj: {_id: 3625,str: "West Virginia",num: 85120,date: new Date("2018-09-06T02:14:50.063Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3626,str: "deposit",num: 9014,date: new Date("2018-09-06T17:16:30.699Z"),array: [],obj: {_id: 3627,str: "initiatives repurpose Arizona",num: 15268,date: new Date("2018-09-06T00:16:42.570Z"),array: [94370,"Wooden Bedfordshire bandwidth",new Date("2018-09-06T15:06:16.235Z"),[new Date("2018-09-06T09:19:57.427Z"),"Division Checking Account invoice",4473,"Florida Jewelery withdrawal","PNG","Director Small Money Market Account",73818],new Date("2018-09-06T09:21:18.720Z"),{_id: 3628,str: "Mobility Liberian Dollar Tenge",num: 30476,date: new Date("2018-09-06T14:18:52.294Z"),array: [],obj: {}},{_id: 3629,str: "Handcrafted Steel Tuna Creative synergize",num: 10674,date: new Date("2018-09-06T02:43:10.467Z")},[],new Date("2018-09-06T11:31:13.272Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 3630,num: 97379,date: new Date("2018-09-06T10:22:21.334Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3631,str: "Virginia",num: 61225,date: new Date("2018-09-06T11:30:56.717Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3632,str: "Frozen Costa Rica",num: 3220,date: new Date("2018-09-06T11:51:43.800Z"),array: [{_id: 3633,str: "synthesizing",date: new Date("2018-09-06T17:45:50.221Z"),array: [new Date("2018-09-06T08:33:14.737Z"),new Date("2018-09-06T11:39:23.974Z"),new Date("2018-09-06T05:48:16.617Z"),{_id: 3634,str: "orchestrate",num: 12620,obj: {}},23375,"Ohio Mountains"],obj: {_id: 3635,str: "Metal",num: 32195,date: new Date("2018-09-06T12:53:23.932Z"),obj: {}}},"Unbranded Rubber Pizza global IB","Kentucky Research",59597,93846,["Sleek Concrete Bike Savings Account"],{_id: 3636,num: 36024,array: [],obj: {_id: 3637,num: 33987,date: new Date("2018-09-05T20:14:13.450Z"),array: []}},new Date("2018-09-06T06:58:27.397Z"),"transmitting Unbranded",new Date("2018-09-06T09:00:43.884Z")]});
    },

    function(coll) {
        return coll.insert({_id: 3638,str: "National withdrawal",date: new Date("2018-09-06T08:32:24.210Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3639,str: "calculating Granite Optional",num: 4789,date: new Date("2018-09-05T23:28:00.338Z"),array: ["International",94391,[],{_id: 3640,str: "Borders Senior Kids",num: 7527,array: [],obj: {}},{_id: 3641,num: 5950,date: new Date("2018-09-06T06:44:42.936Z")},new Date("2018-09-05T22:45:12.527Z"),new Date("2018-09-05T21:59:16.083Z"),new Date("2018-09-06T12:41:09.644Z"),45707,"HTTP Architect Streets","Plastic",new Date("2018-09-06T13:29:32.823Z"),79793],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3642,str: "Points Generic Granite Table",num: 72106,date: new Date("2018-09-06T09:53:26.310Z"),array: [70660,83854,"Streets SMS",new Date("2018-09-06T19:03:49.993Z"),{_id: 3643,str: "primary Diverse responsive",num: 50079,array: ["Health","Frozen",["AI access Borders",69862,"Rustic Fresh Bacon multi-byte",new Date("2018-09-05T23:55:12.630Z")],70215],obj: {_id: 3644,str: "Developer expedite Awesome",date: new Date("2018-09-06T15:20:24.437Z"),obj: {}}},new Date("2018-09-06T00:14:05.956Z"),[],{_id: 3645,str: "mobile",num: 74927,date: new Date("2018-09-06T06:20:40.513Z"),array: [],obj: {_id: 3646,num: 61734,date: new Date("2018-09-06T06:35:39.549Z"),array: [],obj: {}}},new Date("2018-09-06T05:55:31.772Z")]});
    },

    function(coll) {
        return coll.insert({_id: 3647,str: "JBOD Cheese",num: 64529,array: [new Date("2018-09-06T05:13:28.547Z"),59480,74647,84620,"Movies","RSS pixel",new Date("2018-09-06T07:16:59.856Z"),{_id: 3648,str: "Roads",num: 53346},96856,{_id: 3649,str: "programming Investment Account",num: 11920,date: new Date("2018-09-06T18:30:26.771Z"),array: [],obj: {_id: 3650,str: "withdrawal Kids Home Loan Account",date: new Date("2018-09-06T06:39:10.789Z"),array: [],obj: {}}},new Date("2018-09-06T18:06:01.164Z"),new Date("2018-09-05T22:00:42.506Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3651,str: "PCI digital Small",num: 14087,date: new Date("2018-09-06T10:36:22.866Z"),array: ["Connecticut Fresh",49585,51169,new Date("2018-09-06T17:20:04.660Z"),{_id: 3652,str: "Morocco online navigating",date: new Date("2018-09-06T17:33:04.971Z"),array: [],obj: {_id: 3653,str: "wireless system",num: 24478,array: [31412,19359,{_id: 3654,str: "Cordoba Oro Frozen",num: 3887,date: new Date("2018-09-06T19:38:14.754Z"),obj: {}}],obj: {_id: 3655,num: 20884,date: new Date("2018-09-06T14:44:03.679Z")}}},new Date("2018-09-06T03:14:58.262Z"),new Date("2018-09-05T22:07:12.387Z"),"workforce Fantastic Granite Cheese copy",new Date("2018-09-06T12:16:31.064Z"),[],37465],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3656,str: "expedite firewall wireless",num: 64738,date: new Date("2018-09-06T11:26:45.997Z"),obj: {_id: 3657,str: "functionalities deposit Baby",num: 18235,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3658,str: "Electronics upward-trending Books",num: 71862,date: new Date("2018-09-06T11:54:51.086Z"),array: [],obj: {_id: 3659,str: "access",num: 51016,date: new Date("2018-09-06T18:42:35.461Z"),array: ["grey Rubber Future",76656,25100,{_id: 3660,str: "time-frame District",array: [],obj: {}},new Date("2018-09-06T09:07:02.644Z"),new Date("2018-09-06T18:26:35.581Z"),"Tuna","Myanmar Sleek Handcrafted Metal Chips",48837,2418]}});
    },

    function(coll) {
        return coll.insert({_id: 3661,str: "Ameliorated Plastic",num: 81500,date: new Date("2018-09-06T01:33:20.255Z"),array: [],obj: {_id: 3662,str: "withdrawal Configuration full-range",num: 72466,date: new Date("2018-09-06T00:34:34.459Z"),array: [],obj: {_id: 3663,str: "Cambridgeshire primary client-server",date: new Date("2018-09-06T02:29:17.517Z"),array: [new Date("2018-09-06T01:44:09.743Z"),12915,"Checking Account",new Date("2018-09-06T13:12:47.953Z"),new Date("2018-09-06T15:16:57.784Z"),"scalable Generic PNG",[69543,80624,{_id: 3664,num: 79644,array: [{_id: 3665,num: 43346,date: new Date("2018-09-06T02:10:15.193Z")}],obj: {}},[],"Lakes Guinea-Bissau New York"],"Alaska multi-byte red","panel initiative Andorra",[]],obj: {_id: 3666,str: "navigate Avon Wyoming",num: 58027,array: [new Date("2018-09-06T06:08:55.399Z"),41412],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 3667,str: "robust",num: 99784,array: [new Date("2018-09-06T09:19:52.740Z"),9777,new Date("2018-09-06T02:30:20.902Z"),"sexy Russian Ruble Vermont","customer loyalty Savings Account","user-facing Buckinghamshire","Communications Indiana",{_id: 3668,str: "indigo Home Loan Account user-facing",num: 43937,date: new Date("2018-09-06T03:51:39.357Z"),array: [new Date("2018-09-06T07:28:07.550Z")],obj: {}},42453,{_id: 3669,str: "Human",num: 60107,date: new Date("2018-09-06T06:04:44.923Z"),array: [],obj: {}}],obj: {_id: 3670,date: new Date("2018-09-06T17:14:11.452Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3671,str: "Sao Tome and Principe",num: 51416,date: new Date("2018-09-06T02:05:15.640Z"),array: ["algorithm",96650,"encoding transmitting Seychelles Rupee",new Date("2018-09-06T03:14:33.164Z"),32946,new Date("2018-09-06T03:17:57.006Z"),"SMS installation",new Date("2018-09-06T01:16:56.845Z"),[{_id: 3672,str: "Quetzal",date: new Date("2018-09-06T16:51:06.774Z"),array: [64036,{_id: 3673,str: "methodical",num: 26382,date: new Date("2018-09-05T23:47:18.109Z"),array: [],obj: {}},{_id: 3674,str: "Comoros Small Wooden",num: 20760,obj: {_id: 3675,date: new Date("2018-09-05T19:59:42.396Z"),array: [],obj: {_id: 3676,str: "Saint Lucia Checking Account parallelism",num: 42186,date: new Date("2018-09-06T14:12:55.431Z"),array: [],obj: {_id: 3677,num: 38737,array: [],obj: {}}}}},new Date("2018-09-06T18:58:52.089Z"),{_id: 3678,num: 66543,date: new Date("2018-09-06T17:15:03.687Z")},29097]},new Date("2018-09-05T20:38:25.539Z"),"Mauritius architectures"],47887]});
    },

    function(coll) {
        return coll.insert({_id: 3679,str: "Customer",num: 30273,array: [],obj: {_id: 3680,str: "synthesize Direct",num: 78429,date: new Date("2018-09-06T12:37:35.330Z"),obj: {_id: 3681,str: "service-desk Progressive",num: 71201,date: new Date("2018-09-06T02:58:42.949Z"),array: ["enterprise","Avon parsing Libyan Arab Jamahiriya",10571,new Date("2018-09-06T04:30:43.997Z"),52260,86444,[],new Date("2018-09-06T16:08:01.994Z"),{_id: 3682,num: 20837,date: new Date("2018-09-06T14:37:55.835Z")},65197,new Date("2018-09-06T04:05:40.635Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3683,str: "back-end",num: 60287,date: new Date("2018-09-06T00:58:20.333Z"),array: [],obj: {_id: 3684,num: 90367,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3685,str: "Checking Account",date: new Date("2018-09-06T09:06:57.402Z"),array: [],obj: {_id: 3686,str: "Music French Polynesia",num: 19162,date: new Date("2018-09-06T12:02:37.818Z"),array: ["envisioneer Borders ubiquitous",new Date("2018-09-06T13:49:47.001Z"),94629,"Berkshire Fresh challenge",new Date("2018-09-06T01:45:48.325Z"),"hierarchy Cotton",{_id: 3687,num: 87165,date: new Date("2018-09-06T17:04:42.481Z"),obj: {}},74296,new Date("2018-09-05T20:02:26.662Z"),13488,"groupware viral Handcrafted Frozen Towels",[new Date("2018-09-06T08:47:33.782Z"),[81945,{_id: 3688,num: 60365,date: new Date("2018-09-05T22:26:40.173Z"),array: [],obj: {}}],75174]]}});
    },

    function(coll) {
        return coll.insert({_id: 3689,str: "reinvent",num: 96693,date: new Date("2018-09-06T03:16:14.530Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3690,str: "turn-key",array: ["Small New Mexico",1751,95934,new Date("2018-09-06T19:17:17.765Z"),"Djibouti Cotton empowering",new Date("2018-09-06T03:40:25.272Z"),"Lead",{_id: 3691,str: "schemas",num: 71105,date: new Date("2018-09-06T18:45:55.310Z"),obj: {_id: 3692,num: 83977,date: new Date("2018-09-06T13:48:12.209Z"),array: [],obj: {_id: 3693,str: "Savings Account Moldovan Leu port",num: 48363,date: new Date("2018-09-05T23:40:50.443Z"),obj: {}}}},61552,new Date("2018-09-05T20:35:35.335Z"),[{_id: 3694,str: "sensor",num: 95586,array: [],obj: {}}],"expedite Fantastic application","Corporate",16578]});
    },

    function(coll) {
        return coll.insert({_id: 3695,str: "Coordinator withdrawal Garden",num: 42338,date: new Date("2018-09-05T23:29:15.758Z"),array: ["Central African Republic AI Sri Lanka Rupee",new Date("2018-09-06T17:51:36.551Z"),23261,new Date("2018-09-06T18:43:25.302Z"),"Enhanced",37355,{_id: 3696,str: "Facilitator leverage",date: new Date("2018-09-05T22:20:21.818Z"),array: [new Date("2018-09-06T04:50:58.009Z"),"Alaska",{_id: 3697,str: "Rustic Frozen Keyboard Greens",num: 36477,obj: {_id: 3698,num: 32881,date: new Date("2018-09-06T11:02:21.543Z"),array: [new Date("2018-09-06T11:31:38.301Z"),70297],obj: {}}},35380,new Date("2018-09-06T16:40:37.642Z"),new Date("2018-09-05T21:41:44.730Z")],obj: {}},{_id: 3699,str: "Licensed auxiliary",num: 70392,array: []},[]],obj: {_id: 3700,date: new Date("2018-09-06T12:37:52.864Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3701,str: "schemas deposit",date: new Date("2018-09-05T22:56:37.291Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3702,str: "lavender Nuevo Sol Planner",num: 35120,date: new Date("2018-09-06T10:44:55.999Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3703,str: "withdrawal panel",num: 54147,date: new Date("2018-09-05T20:31:23.046Z"),obj: {_id: 3704,num: 82973,date: new Date("2018-09-06T12:40:41.507Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3705,str: "strategic",num: 27516,array: ["Syrian Arab Republic stable software",new Date("2018-09-06T02:41:18.374Z"),76534,["Direct"],32790,{_id: 3706,str: "Cove",num: 53163,date: new Date("2018-09-06T00:18:21.318Z"),obj: {_id: 3707,str: "Wisconsin",num: 52926,date: new Date("2018-09-05T22:36:23.698Z"),array: [],obj: {_id: 3708,num: 76172,array: [],obj: {}}}},[95447,"partnerships",[]],new Date("2018-09-05T23:34:00.329Z"),new Date("2018-09-06T05:47:56.771Z"),"magnetic open-source Lari",{_id: 3709,str: "structure",num: 25065,date: new Date("2018-09-06T16:13:51.331Z")}]});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.num": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayElemAt: [['$obj.str',"navigate GB Towels"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $minute: { $hour: { $month: { $toDate: { $zip: {inputs: [[],[22505],['$obj.obj.obj.str']],useLongestLength: true} } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[81506,'$num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["Cambridgeshire",14,18] },'$obj.obj.str','$obj.obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: { $ltrim: { input: '$obj.obj.str' } } },"card Configuration parsing"],[]]] }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfWeek: { $dateToString: {date: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T07:55:08.113Z",timezone: "ROK",onError: { $arrayElemAt: [["overriding Refined"],28103] }} } },format: "%w-%d-%j-%H-%w-%V-%Z-%M-%L",timezone: "America/Guatemala"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[77847,{ $cmp: [{ $reverseArray: [[]] },{ $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.obj.obj.num'] }] }],[20778]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $sqrt: 327 },'$obj.obj.num',41816],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $rtrim: { input: '$str' } } }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.obj.str','$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeek: { $month: new Date("2018-09-06T03:16:12.591Z") } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "discrete hack robust",v: true},{k: "tan moderator e-business",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "solid state",v: false}]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $dateToParts: {date: { $dayOfMonth: { $hour: { $week: { $minute: '$obj.date' } } } },iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[5672]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["grey",'$obj.str'],as: 'era',in: { $floor: '$$era' }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[63978,{ $pow: ['$obj.obj.obj.num','$obj.obj.obj.obj.num'] }]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [15639],as: 'mckenzie',cond: { $in: [{ $arrayElemAt: [["blue Mayotte Cuban Peso Peso Convertible",'$obj.str',{ $rtrim: { input: "haptic Fantastic streamline" } }],'$obj.obj.obj.num'] },{ $reverseArray: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[30256,'$obj.num'],['$obj.obj.num',{ $cmp: [{ $isoDayOfWeek: { $minute: { $dateToParts: {date: { $dateToString: {date: { $toDate: { $hour: { $week: { $dateToParts: { date: { $minute: { $dayOfYear: { $year: { $dateFromString: {dateString: "2018-09-06T05:51:15.009Z",format: "%z-%Y-%j-%S-%U",timezone: "Europe/Dublin",onError: { $toString: { $map: {input: ["Towels Rustic Plastic Shoes Automotive"],in: { $floor: 46387 }} } }} } } } } } } } } },timezone: "Atlantic/St_Helena",onNull: '$obj.str'} },iso8601: true} } } },{ $toDate: { $arrayToObject: [[{k: "paradigm",v: 9920}]] } }] }]] }, _id: 0}}],

        [{$project: {a: { $toString: { $toUpper: "Designer Mexican Peso Mexican Unidad de Inversion (UDI)" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: { $dateToString: {date: '$obj.obj.obj.date',format: "%u-%V-%z-%j-%U-%w-%%-%L-%U-%U",timezone: "Europe/Zurich",onNull: "e-services"} } },'$obj.str',{ $substrCP: ['$obj.str',15,5] }]]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [["Hawaii Tunnel Hong Kong",{ $substrCP: ["Administrator Human Buckinghamshire",14,1] }],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',{ $ltrim: {input: '$obj.str',chars: '$str'} }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',95451],{ $divide: [{ $floor: '$num' },59920] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Field interface"],[]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $ltrim: { input: "Open-source" } },chars: "Quality Kids"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $month: { $dateToString: {date: '$obj.obj.obj.date',format: "%%-%U-%H-%Y-%Z-%Y-%V-%%",onNull: "Refined"} } },timezone: "America/St_Johns"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[43858,'$obj.obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[],[{ $substr: ["program Games Manat",11,8] },'$obj.str',{ $dateToString: {date: '$date',format: "%S-%d-%S-%U-%L-%L-%Y"} }],[],["Public-key modular",'$obj.obj.str'],[{ $log: ['$num','$obj.obj.obj.num'] }],[]]] } }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substrBytes: ['$obj.obj.str',4,10] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],78561] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[34225,'$obj.obj.obj.obj.num',8410],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[49101],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: "Future Rustic Plastic Soap" }, _id: 0}}],

        [{$project: {a: { $toLower: { $substr: ['$obj.obj.str',7,19] } }, _id: 0}}],

        [{$project: {a: { $range: [16,20,5] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $dateToString: {date: '$obj.obj.date',format: "%U-%V-%w-%j-%u-%z-%U-%j-%d-%m-%H",onNull: '$obj.obj.obj.obj.str'} },"Engineer dynamic XSS"],['$str'],['$obj.obj.obj.obj.str',"Buckinghamshire Agent"]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',8,10] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfWeek: { $week: { $isoDayOfWeek: { $year: { $dateFromParts: {year: { $log: [95063,'$obj.obj.obj.num'] },month: { $mod: [42460,32156] },hour: { $ln: 18847 },second: { $size: [['$num','$obj.obj.obj.obj.num']] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $rtrim: {input: "JBOD",chars: '$obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Checking Account bypass",v: new Date("2018-09-06T13:56:20.716Z")}]] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromString: {dateString: "2018-09-06T07:36:46.449Z",onError: { $dateToString: { date: { $dayOfYear: { $dayOfWeek: { $second: { $isoWeekYear: { $dateToString: {date: new Date("2018-09-06T01:50:41.400Z"),format: "%G-%M-%%-%Y-%z",timezone: "Etc/GMT"} } } } } } } }} } }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Gorgeous Towels" } }, _id: 0}}],

        [{$project: {a: { $year: { $hour: { $dateFromParts: {isoWeekYear: { $size: [['$obj.obj.num',new Date("2018-09-06T05:45:13.882Z")]] },isoDayOfWeek: { $add: [] },timezone: "Etc/GMT+12"} } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoDayOfWeek: { $dateFromParts: {year: { $ln: '$obj.obj.obj.num' },month: { $mod: ['$num',28305] },day: { $divide: [{ $add: ['$obj.obj.obj.obj.num',13984] },92321] },minute: { $mod: ['$num',52220] },second: { $multiply: ['$obj.obj.obj.obj.num'] },millisecond: { $subtract: [33815,{ $ceil: { $trunc: 9606 } }] }} } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substr: ["Georgia matrix",6,15] } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T04:47:25.244Z",onError: { $concatArrays: [[481,65008],["Hawaii mint green exuding",'$obj.obj.obj.str'],[]] },onNull: { $arrayElemAt: [[],69408] }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $divide: [32182,'$obj.obj.obj.num'] },isoWeek: { $divide: ['$obj.obj.obj.obj.num',93850] },isoDayOfWeek: { $add: [66076] },minute: { $subtract: [{ $subtract: ['$obj.obj.num','$obj.num'] },24714] },second: { $log: ['$obj.obj.obj.obj.num',92387] },timezone: "America/Juneau"} }, _id: 0}}],

        [{$project: {a: { $range: [13,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[24179,'$obj.obj.num',30762],['$obj.obj.date'],['$obj.str',"Personal Loan Account Incredible"],["Electronics Kina array",{ $dateToString: {date: new Date("2018-09-06T17:40:29.449Z"),timezone: "America/Indiana/Winamac"} }],[]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrCP: ["matrices haptic Dominican Peso",9,5] },"Multi-channelled Global"],as: 'abby',cond: { $or: [{ $substrBytes: ['$obj.obj.obj.obj.str',16,7] },'$obj.obj.str'] }} }, _id: 0}}],

        [{$project: {a: { $trim: { input: "orange" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "turquoise",v: false}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Bike",2,7] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $month: { $dayOfMonth: { $dayOfWeek: { $toDate: { $concatArrays: [[],['$obj.num','$obj.obj.num'],[]] } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $multiply: [36765,'$num'] },5964,'$obj.obj.obj.obj.num'],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],72373] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],{ $cmp: [{ $dateFromParts: {isoWeekYear: { $add: [83189,'$num'] },isoWeek: 41303,isoDayOfWeek: { $ln: '$obj.obj.obj.obj.num' },hour: { $divide: ['$obj.obj.obj.obj.num',50736] },minute: { $log10: 25546 },millisecond: { $sqrt: '$obj.num' },timezone: "Africa/Abidjan"} },{ $toString: new Date("2018-09-06T13:14:59.619Z") }] }] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["orchestrate Games Pants",'$obj.obj.obj.str'],[{ $dateToString: {date: { $dateFromString: {dateString: "2018-09-05T22:33:54.122Z",timezone: "Asia/Srednekolymsk",onNull: { $dateFromParts: {isoWeekYear: { $divide: ['$num',4184] },isoDayOfWeek: { $mod: ['$obj.obj.obj.num',48259] },hour: { $mod: ['$obj.obj.num','$obj.obj.obj.obj.num'] },minute: { $ln: '$obj.obj.obj.obj.num' },second: { $multiply: [21394,{ $cmp: [{ $toLower: "hacking hub" },{ $map: {input: [],in: { $ln: 92899 }} }] }] },millisecond: { $indexOfArray: [{ $filter: {input: [92618],cond: { $lt: [{ $dateToString: {date: { $isoWeek: { $month: { $toDate: { $arrayElemAt: [[],22508] } } } },format: "%d-%u-%m-%%-%H-%%-%Z-%Y-%Z"} },{ $arrayToObject: [[{k: "virtual Usability neural",v: new Date("2018-09-06T03:26:21.011Z")},{k: "SAS Metal",v: '$obj.obj.date'}]] }] }} },{ $arrayElemAt: [[{ $toString: { $arrayToObject: [[]] } },{ $toUpper: "parse Rubber Kentucky" },{ $rtrim: {input: "methodologies mobile Rand Namibia Dollar",chars: '$obj.str'} }],{ $size: [[]] }] },3,10] }} }} },format: "%z-%u-%z-%H-%L-%m",timezone: "Asia/Urumqi",onNull: "next generation"} },'$obj.obj.str'],['$obj.obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[49200,'$obj.obj.num'],41699] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Product Personal Loan Account Handcrafted"],as: 'neil',cond: { $gte: [{ $isoWeekYear: { $dayOfWeek: { $millesecond: { $minute: { $toDate: { $arrayToObject: [[[],["Berkshire Berkshire bus",'$obj.obj.str'],[],['$$neil'],[33806],[{ $floor: '$obj.num' },'$obj.obj.obj.num',58744,91513,43192],[]]] } } } } } },{ $arrayElemAt: [['$$neil',false,'$$neil',true,"EXE"],'$$neil'] }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.num','$obj.num','$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $dateToString: {date: new Date("2018-09-06T14:41:15.773Z"),format: "%d-%Y-%j-%Z-%z-%m",timezone: "Asia/Ulan_Bator",onNull: "Paradigm"} },timezone: "Africa/Bamako",onNull: { $ltrim: {input: '$obj.obj.str',chars: { $substr: ['$str',19,17] }} }} }],{ $ln: 98228 }] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: ["Future Beauty",'$obj.obj.str'] },18,10] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num'],["Hollow transparent Small","Strategist indigo analyzer"],[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],33963] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: { $dateToString: {date: { $year: { $week: { $isoDayOfWeek: { $hour: { $dateToString: {date: '$obj.obj.obj.date',onNull: { $isoWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T02:44:47.371Z",format: "%Z-%G-%Z-%Z-%d-%j-%w-%H-%M-%z-%L",timezone: "Africa/Casablanca",onError: { $arrayElemAt: [[{ $trim: {input: '$obj.str',chars: { $rtrim: { input: "protocol Accounts applications" } }} }],85255] }} } } }} } } } } },format: "%Z-%j-%H-%j",onNull: { $substrCP: ["Rustic open-source Strategist",19,2] }} }} }, _id: 0}}],

        [{$project: {a: { $month: { $month: { $dateToString: {date: new Date("2018-09-06T18:52:53.797Z"),onNull: { $concat: ["Principal",{ $toString: { $filter: {input: [],as: 'michael',cond: { $or: [{ $isoWeek: { $dateFromParts: {isoWeekYear: { $floor: { $sqrt: '$$michael' } },isoWeek: { $cmp: [{ $objectToArray: '$$michael' },{ $arrayToObject: [[]] }] },millisecond: { $log10: '$$michael' }} } },'$$michael','$$michael'] }} } }] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "human-resource Consultant Creative",v: 98989},{k: "Codes specifically reserved for testing purposes Small Metal Soap",v: '$obj.obj.date'},{k: "Granite",v: { $trim: {input: '$obj.str',chars: '$str'} }},{k: "Customer Distributed Associate",v: "generate"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $second: { $hour: '$obj.obj.date' } },format: "%L-%w-%H-%Y-%L-%z-%w-%H-%j-%z",timezone: "America/Whitehorse"} },"brand fuchsia"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Greenland hack California"],92624] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: "recontextualize Planner clicks-and-mortar",chars: '$obj.obj.str'} },{ $toLower: '$obj.obj.obj.obj.str' }],{ $size: [[{ $pow: ['$obj.obj.obj.obj.num','$obj.num'] }]] }] }, _id: 0}}],

        [{$project: {a: { $year: { $toDate: { $range: [2,15,8] } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $pow: [47116,{ $multiply: [] }] },85730],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "granular synthesize cutting-edge",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Customer Senior",v: { $dateToParts: {date: { $month: { $millesecond: { $minute: { $month: { $year: { $dateToParts: {date: { $dayOfMonth: { $week: { $second: { $second: { $week: { $hour: { $hour: { $isoWeek: new Date("2018-09-06T09:09:43.266Z") } } } } } } } },iso8601: true} } } } } } },timezone: "Pacific/Niue",iso8601: true} }},{k: "silver",v: false},{k: "Ergonomic demand-driven",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $concat: ["open-source"] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],6857] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromParts: {isoWeekYear: { $sqrt: 7951 },minute: { $trunc: 24514 },second: { $indexOfArray: [{ $filter: {input: [{ $substrBytes: ['$obj.obj.obj.str',4,4] },'$obj.obj.str',"cross-platform"],as: 'lane',cond: { $gte: [{ $objectToArray: '$obj.obj.obj' },{ $substr: [{ $concat: ["logistical client-driven"] },1,8] }] }} },{ $arrayElemAt: [['$num'],'$obj.obj.obj.obj.num'] },7] },millisecond: { $ceil: 96017 },timezone: "Pacific/Saipan"} } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $concat: ['$obj.obj.obj.str'] }],[62028,24065],[],[],[],[]],useLongestLength: false,defaults: [new Date("2018-09-06T05:52:06.112Z")]} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $lt: [{ $arrayElemAt: [[],17680] },{ $arrayToObject: [[["Buckinghamshire system-worthy content"]]] }] }} }, _id: 0}}],

        [{$project: {a: { $trim: {input: "monitor Austria Handmade",chars: { $ltrim: { input: { $rtrim: { input: '$obj.obj.obj.str' } } } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "synthesizing",v: '$obj.obj.obj.num'},{k: "Rwanda Franc dynamic European Unit of Account 9(E.U.A.-9)",v: false}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $ltrim: { input: "copying parse brand" } },'$obj.obj.obj.str'],in: { $add: [84560,'$obj.obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [{ $toString: { $year: { $dateFromParts: {isoWeekYear: { $log10: '$obj.obj.obj.obj.num' },timezone: "Europe/Warsaw"} } } }] },"Fork",{ $substrBytes: ["Cross-group green",18,6] }],69174] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Plastic" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[17986]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $indexOfArray: [{ $range: [13,14] },{ $reverseArray: [['$num',75385,'$num']] },8] }],[74341],["synthesizing",{ $toLower: "Jewelery" }]]] }, _id: 0}}],

        [{$project: {a: { $range: [14,1,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.date','$obj.obj.obj.num',"productivity Movies compressing"]],defaults: [/^extend/]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num','$obj.obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T11:40:58.759Z"),timezone: "Australia/South",onNull: { $rtrim: { input: '$obj.obj.str' } }} },{ $substr: ['$obj.obj.obj.str',6,12] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $dayOfYear: new Date("2018-09-06T19:04:42.466Z") } } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrBytes: ['$obj.obj.str',18,11] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[],["PCI"],[{ $ltrim: {input: '$obj.obj.str',chars: { $concat: [{ $ltrim: {input: { $toUpper: "Table" },chars: "Pants"} },'$obj.str',{ $substrCP: ['$str',13,17] },'$obj.obj.obj.obj.str'] }} }],["payment",'$obj.obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: '$obj.obj.date',format: "%L-%%-%u-%%-%H"} }],[55438],[],["grid-enabled benchmark Handmade Fresh Keyboard",'$obj.str','$obj.obj.str'],['$num']]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $floor: 61603 },'$num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $trim: { input: '$obj.str' } },"Lithuania View",{ $toString: { $arrayElemAt: [[{ $toUpper: "implement purple" }],'$obj.obj.num'] } }],56072] }, _id: 0}}],

        [{$project: {a: { $week: { $hour: { $dayOfWeek: { $isoWeekYear: { $dayOfYear: { $isoDayOfWeek: { $month: new Date("2018-09-06T13:38:57.513Z") } } } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toString: { $minute: { $dayOfYear: { $millesecond: { $millesecond: { $month: { $dayOfWeek: { $minute: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T03:13:33.828Z",format: "%H-%z-%S-%%-%L",onError: { $arrayToObject: [[{k: "Netherlands Antilles quantify",v: 91047}]] },onNull: { $arrayToObject: [[{k: "Tasty Frozen Salad",v: 31896},{k: "Central Savings Account Tala",v: true},{k: "Fantastic parsing",v: false}]] }} } } } } } } } } } },10,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $dateToString: {date: '$obj.obj.date',onNull: { $objectToArray: '$obj.obj.obj' }} } },"optical Keyboard plum"],75258] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Streamlined",v: '$date'},{k: "efficient Virgin Islands, British Soap",v: { $toDate: { $concatArrays: [[],[],[],["Haven Cross-group",{ $dateToString: {date: '$obj.obj.date',onNull: { $arrayToObject: [[[91418,80976],[]]] }} }]] } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',87620],[19821,40358],['$obj.obj.obj.obj.str'],["Clothing digital",{ $concat: [] },{ $toLower: '$obj.obj.obj.obj.str' },{ $dateToString: {date: '$obj.date',timezone: "Etc/GMT+12"} },'$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',61268],'$num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $toDate: { $substrCP: ["Intelligent Frozen Soap",9,1] } } }, _id: 0}}],

        [{$project: {a: { $month: new Date("2018-09-06T11:38:51.201Z") }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $dateToString: {date: { $dateFromParts: {isoWeekYear: { $trunc: 47704 },isoWeek: { $trunc: 26188 }} },format: "%V-%H-%G-%Y-%w-%G-%Z",timezone: "Libya"} },chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.str',{ $concat: ["Rustic quantify convergence","compressing object-oriented France"] }],'$obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: '$obj.obj.str' } },"24/365 Associate"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str','$obj.obj.obj.str',"time-frame convergence Zambian Kwacha"] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Shoes Auto Loan Account",'$obj.obj.obj.str'],as: 'lucas',cond: { $isArray: [{ $arrayElemAt: [[],'$$lucas'] }] }} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "optimize" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Credit Card Account",v: 43969},{k: "compressing",v: { $substr: ['$obj.str',14,2] }}]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $ltrim: {input: { $substrCP: ["Response protocol invoice",10,2] },chars: '$obj.str'} } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeek: { $dayOfMonth: { $month: { $second: { $toDate: { $toUpper: { $dateToString: { date: '$obj.date' } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["out-of-the-box connecting"],96173] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[2032],[]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromParts: {isoWeekYear: { $cmp: [{ $year: { $second: { $week: { $week: { $isoWeek: { $minute: { $dayOfMonth: { $toDate: { $map: {input: ["Fort"],in: { $exp: 81733 }} } } } } } } } } },{ $trim: { input: '$obj.obj.obj.str' } }] },isoWeek: { $log10: 60138 },hour: { $ceil: '$obj.obj.obj.obj.num' },minute: '$obj.obj.obj.obj.num',millisecond: { $divide: ['$obj.obj.num',61496] },timezone: "Antarctica/Palmer"} } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $abs: '$obj.obj.obj.obj.num' },minute: { $pow: [2213,'$obj.num'] },second: 63402,timezone: "America/Tegucigalpa"} }, _id: 0}}],

        [{$project: {a: { $toLower: "copying compelling" }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Dynamic"],['$obj.obj.obj.num',75722,57807],[]] }, _id: 0}}],

        [{$project: {a: { $week: { $toDate: { $trim: {input: "Handcrafted Wooden Computer Kyat",chars: '$str'} } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str',{ $toLower: { $toUpper: "utilize Fantastic" } },'$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Slovenia IB",v: 36057}]] }, _id: 0}}],

        [{$project: {a: { $range: [7,2,16] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $millesecond: { $dateToString: {date: new Date("2018-09-05T20:22:17.487Z"),format: "%d-%M-%j-%w-%H",timezone: "Pacific/Yap"} } },onNull: { $toString: { $arrayElemAt: [[89636],{ $sqrt: '$num' }] } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Kiribati Niue"],['$obj.obj.obj.obj.str','$obj.obj.obj.str'],[{ $mod: [98095,'$num'] },'$num'],[28030,'$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',62528],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num'],['$obj.obj.obj.str',"Steel",'$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $concat: ["Avon"] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str',{ $dateToString: {date: new Date("2018-09-06T00:24:02.624Z"),format: "%H-%L-%U-%G-%u-%L-%Z-%%",onNull: '$obj.obj.str'} }]] }, _id: 0}}],

        [{$project: {a: { $toString: { $week: { $isoWeekYear: { $second: { $dayOfMonth: { $toDate: { $concat: ["Intelligent Metal Mouse Massachusetts"] } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["6th generation",{ $trim: { input: "Nebraska budgetary management" } }]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $millesecond: { $dateFromParts: {isoWeekYear: { $trunc: '$num' },isoDayOfWeek: { $abs: '$obj.obj.num' }} } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToString: {date: '$obj.date',format: "%L-%H-%d-%L-%M-%Y-%Y-%Z-%V-%M-%H"} } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T18:47:57.037Z",timezone: "Iceland",onNull: { $arrayToObject: [[['$obj.num','$obj.obj.obj.num',64739],["Rubber","Djibouti Franc Consultant"],[{ $toUpper: { $trim: { input: '$obj.obj.obj.obj.str' } } },"red",{ $toLower: '$str' }],['$obj.str',8936],[53402,66583,{ $cmp: [{ $dateToString: { date: new Date("2018-09-06T08:36:07.804Z") } },{ $zip: { inputs: [] } }] }],[{ $substr: ["Practical",7,7] }]]] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "green",v: false},{k: "Street Bacon",v: { $dayOfWeek: { $isoWeek: { $dateToString: {date: '$obj.obj.date',format: "%M-%%-%U-%M-%S-%U-%H-%d-%H"} } } }}]] }, _id: 0}}],

        [{$project: {a: { $range: [19,2] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Rand"],[77108]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T04:52:23.773Z") } }, _id: 0}}],

        [{$project: {a: { $range: [20,14,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Valley turquoise"],69270] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toString: { $arrayToObject: [[['$str',"monitor repurpose uniform"]]] } }],[34803,'$obj.obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: '$obj.obj.str' }],[],[70858,'$obj.obj.num','$obj.obj.obj.obj.num'],['$str',"Designer primary"],[]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $dateToString: {date: '$date',format: "%Z-%V-%G-%V-%Z-%u-%G-%S-%H-%S",timezone: "Etc/GMT0",onNull: '$obj.obj.obj.str'} },10,7] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrCP: ['$obj.obj.obj.str',5,8] } }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.obj.str',chars: "Directives distributed bus"} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: {date: { $toDate: { $arrayToObject: [[[],['$obj.str','$obj.obj.obj.obj.str',"XSS"],[{ $substrBytes: [{ $trim: {input: "Tajikistan impactful monitoring",chars: "override intuitive"} },19,5] },{ $toString: { $substrCP: ['$obj.str',7,15] } }],['$obj.num'],[new Date("2018-09-06T15:34:39.251Z"),19071],[]]] } },format: "%Y-%L-%Y-%S-%Z-%L-%S-%L-%G",timezone: "Antarctica/South_Pole"} } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.obj.str'],'$obj.num'] } }, _id: 0}}],

        [{$project: {a: { $toString: { $range: [4,6] } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str',"Investment Account synthesizing Orchestrator"],[],[{ $concat: [] },{ $dateToString: {date: '$date',format: "%w-%d-%H-%m-%H-%S-%u-%u-%S",timezone: "Europe/Andorra"} }]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],[{ $concat: [{ $dateToString: {date: '$obj.date',format: "%Y-%H-%u-%j-%L",timezone: "America/Shiprock"} },"Quality Business-focused"] }]],useLongestLength: true,defaults: [false]} }, _id: 0}}],

        [{$project: {a: { $range: [13,5,10] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[82760,'$obj.obj.obj.obj.num',44043,'$obj.obj.obj.num',29035],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "intuitive Intelligent Granite Chips Corporate",v: '$obj.obj.obj.obj.str'},{k: "Strategist Wooden",v: '$obj.obj.obj.num'},{k: "Visionary",v: new Date("2018-09-06T07:06:34.265Z")}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $week: { $dayOfYear: { $dateToParts: {date: { $dayOfMonth: { $isoWeek: { $isoWeekYear: { $hour: { $isoDayOfWeek: { $second: { $millesecond: new Date("2018-09-06T15:01:20.646Z") } } } } } } },iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $concat: ["communities"] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',"Tasty"],[],[50754,68216]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $millesecond: { $dateToString: {date: '$date',format: "%j-%w-%u-%M"} } },timezone: "America/Indiana/Tell_City",onNull: { $arrayToObject: [[[{ $rtrim: {input: { $rtrim: { input: "Usability" } },chars: "silver optimal withdrawal"} },'$obj.obj.obj.obj.str'],[55836]]] }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: '$obj.obj.str' },12,15] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],98354] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.obj.obj.str',chars: { $toUpper: "override value-added ivory" }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Home",3,16] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[93789,4563],{ $ln: '$num' }] }, _id: 0}}],

        [{$project: {a: { $isoWeek: '$obj.obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.str','$obj.obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $week: { $dayOfWeek: { $dayOfYear: { $isoWeekYear: { $isoDayOfWeek: { $dayOfWeek: { $isoWeek: { $millesecond: { $dayOfMonth: { $year: { $dateFromParts: {isoWeekYear: { $multiply: ['$num'] },second: 92630,millisecond: { $ln: '$obj.obj.obj.num' }} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],31985] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["product",'$obj.obj.obj.str'],2806] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Technician Euro",chars: { $toString: { $arrayElemAt: [[40379],41854] } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Senior",v: 59791},{k: "Data infrastructures",v: new Date("2018-09-06T09:57:42.923Z")}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.obj.obj.str'],['$num',17589],['$str',"Automated invoice"]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToParts: { date: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T03:52:56.416Z",timezone: "Europe/Bucharest",onNull: { $arrayElemAt: [[8276],72786] }} } } } } }, _id: 0}}],

        [{$project: {a: { $month: { $isoDayOfWeek: { $isoWeekYear: { $dayOfMonth: { $isoWeek: { $dayOfWeek: { $millesecond: { $toDate: { $range: [18,10] } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toUpper: "input Nevada Chicken" },4,11] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$num',89962,'$num'],['$obj.obj.str'],["Monitored Mission Investor"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[63542],'$num'] }, _id: 0}}],

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
