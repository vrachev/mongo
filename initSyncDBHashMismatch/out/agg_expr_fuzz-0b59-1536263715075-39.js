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
        return coll.insert({_id: 24468,str: "USB",num: 37859,date: new Date("2018-09-06T09:39:29.888Z"),array: [],obj: {_id: 24469,str: "Games Advanced",date: new Date("2018-09-06T04:09:17.957Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24470,str: "markets PCI Avon",num: 98309,date: new Date("2018-09-06T08:31:39.234Z"),obj: {_id: 24471,str: "Avon Handcrafted",num: 97650,date: new Date("2018-09-06T02:31:41.035Z"),array: [],obj: {_id: 24472,str: "Licensed Soft Keyboard Checking Account",num: 34846,date: new Date("2018-09-05T20:10:03.119Z"),array: [25595,new Date("2018-09-05T23:37:52.163Z"),"Cambridgeshire",[],60656,[{_id: 24473,date: new Date("2018-09-06T19:49:56.058Z"),array: [new Date("2018-09-06T13:51:53.113Z"),"Rapid transmit","Lead Antigua and Barbuda Product",{_id: 24474,num: 8222}],obj: {_id: 24475,str: "Bond Markets Units European Composite Unit (EURCO)",array: []}}],{_id: 24476,str: "Beauty",date: new Date("2018-09-06T13:36:21.906Z"),array: [74870,86541],obj: {}},"intangible Division Refined Granite Bike",new Date("2018-09-06T15:32:47.054Z"),new Date("2018-09-06T00:24:03.097Z"),"Investor",[],[new Date("2018-09-06T06:26:03.911Z")]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 24477,str: "Sausages Ergonomic software",num: 29789,array: [],obj: {_id: 24478,str: "SQL auxiliary Program",num: 48986,date: new Date("2018-09-06T06:03:25.819Z"),array: [new Date("2018-09-06T08:19:40.307Z"),62354,"Electronics Greens ivory",{_id: 24479,str: "orchestrate TCP Kansas",num: 96487,date: new Date("2018-09-05T23:32:22.955Z"),array: [new Date("2018-09-06T01:31:18.287Z"),"frame Handmade",54440],obj: {}},{_id: 24480,str: "content communities transparent",num: 37574,obj: {}},59714,"purple International",[],93267,{_id: 24481,date: new Date("2018-09-06T19:03:31.604Z"),array: [],obj: {_id: 24482,str: "red hacking",num: 54587}},new Date("2018-09-06T02:21:03.262Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 24483,str: "United States of America",num: 44668,date: new Date("2018-09-06T08:43:53.421Z"),obj: {_id: 24484,str: "Handcrafted Wooden Bike",date: new Date("2018-09-06T11:29:14.879Z"),array: [93393,new Date("2018-09-06T19:50:59.861Z"),"Steel mission-critical forecast",new Date("2018-09-05T21:42:50.010Z"),[{_id: 24485,str: "actuating",num: 9645,date: new Date("2018-09-06T17:54:15.757Z"),obj: {}}],new Date("2018-09-06T08:07:24.170Z"),69702,[],29928,"Fantastic COM support","Handmade Granite Shirt","Handcrafted quantify visionary"],obj: {_id: 24486,num: 55787,date: new Date("2018-09-06T02:16:55.108Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 24487,str: "Metal driver orchid",num: 67085,date: new Date("2018-09-06T11:24:05.616Z"),array: [97842,new Date("2018-09-05T23:31:02.426Z"),80933,56167,"application Generic technologies",new Date("2018-09-05T20:47:16.188Z"),new Date("2018-09-06T15:55:38.398Z"),new Date("2018-09-05T21:49:24.528Z"),[],{_id: 24488,str: "Circles Bahamas Metal",num: 83466,date: new Date("2018-09-06T02:04:25.330Z"),array: [],obj: {_id: 24489,str: "Ball online",date: new Date("2018-09-06T05:58:58.499Z"),obj: {}}},[],"Fantastic deposit invoice",3112],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24490,str: "COM niches",num: 49726,date: new Date("2018-09-06T08:35:58.695Z"),array: [],obj: {_id: 24491,num: 33955,date: new Date("2018-09-06T05:22:42.906Z"),obj: {_id: 24492,num: 59355,obj: {_id: 24493,str: "programming",array: [new Date("2018-09-06T16:56:27.388Z"),{_id: 24494,str: "complexity",num: 90501,array: []},76383,66569,59257,{_id: 24495,str: "streamline Kroon",date: new Date("2018-09-06T19:11:00.713Z"),array: [],obj: {}},"Buckinghamshire synthesizing",new Date("2018-09-06T03:21:16.984Z"),"approach","North Carolina plum Product",new Date("2018-09-06T19:30:23.740Z"),"Rustic",63977],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 24496,str: "scalable Euro",num: 28153,date: new Date("2018-09-05T20:55:10.411Z"),array: ["wireless Vermont","Connecticut navigating 24/7","Handcrafted magnetic",82150,25211,new Date("2018-09-06T08:27:10.959Z"),{_id: 24497,str: "Global",date: new Date("2018-09-05T20:03:14.207Z"),array: [],obj: {_id: 24498,num: 77580,date: new Date("2018-09-06T01:37:42.662Z"),obj: {}}},{_id: 24499,str: "virtual Springs Estonia",num: 52479,array: [new Date("2018-09-06T13:57:44.159Z")],obj: {_id: 24500,str: "indexing Granite solution",num: 81253,date: new Date("2018-09-06T14:07:06.408Z"),array: []}},new Date("2018-09-06T09:09:30.607Z"),68680,"Auto Loan Account Awesome",[],new Date("2018-09-06T07:01:57.260Z")],obj: {_id: 24501,str: "internet solution Guatemala",date: new Date("2018-09-06T04:09:32.759Z"),obj: {_id: 24502,str: "attitude",num: 93508,date: new Date("2018-09-06T00:42:53.892Z"),array: ["compress",21035]}}});
    },

    function(coll) {
        return coll.insert({_id: 24503,str: "Investment Account",date: new Date("2018-09-06T03:52:25.263Z"),array: [30065,"Palladium",new Date("2018-09-06T13:27:57.032Z"),{_id: 24504,str: "solid state Small",num: 47650,date: new Date("2018-09-05T23:54:09.064Z"),obj: {}},new Date("2018-09-06T06:12:17.271Z"),"collaborative methodical",7651,{_id: 24505,str: "programming",num: 23241,date: new Date("2018-09-05T20:29:02.431Z"),obj: {_id: 24506,str: "redundant North Carolina Pizza",num: 67632,date: new Date("2018-09-06T04:00:51.900Z"),array: [],obj: {_id: 24507,array: []}}},41778,87709,new Date("2018-09-06T00:41:49.664Z")],obj: {_id: 24508,num: 70320,date: new Date("2018-09-06T01:59:10.602Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24509,str: "AI",num: 7261,date: new Date("2018-09-06T03:51:49.432Z"),array: [],obj: {_id: 24510,num: 10418,date: new Date("2018-09-06T09:58:03.821Z"),obj: {_id: 24511,str: "Cheese",date: new Date("2018-09-06T10:45:56.982Z"),array: [46019,39339,"interactive Missouri","Auto Loan Account Intelligent Plastic Bike North Dakota",new Date("2018-09-06T12:19:42.573Z"),"Handmade Cotton Chips",1249,new Date("2018-09-05T20:12:49.442Z"),new Date("2018-09-06T14:45:44.510Z"),new Date("2018-09-06T02:52:50.592Z"),[{_id: 24512,num: 94702,date: new Date("2018-09-06T08:48:04.742Z"),array: [[]],obj: {_id: 24513,str: "Computers 24 hour payment",num: 68917,date: new Date("2018-09-05T22:11:44.391Z"),array: [],obj: {}}},{_id: 24514,array: [],obj: {}},[],"Director SCSI"]]}}});
    },

    function(coll) {
        return coll.insert({_id: 24515,str: "Personal Loan Account",num: 48600,date: new Date("2018-09-06T15:03:45.433Z"),array: [new Date("2018-09-06T14:24:46.061Z"),new Date("2018-09-06T17:06:54.403Z"),"local Universal Optional",new Date("2018-09-05T20:34:45.835Z"),"SMS teal",52111,new Date("2018-09-06T02:05:55.332Z"),new Date("2018-09-06T12:09:40.779Z"),[],39530,new Date("2018-09-06T00:13:27.860Z")],obj: {_id: 24516,str: "compressing withdrawal",num: 26134,date: new Date("2018-09-06T12:17:50.578Z"),array: [],obj: {_id: 24517,str: "back-end reboot",date: new Date("2018-09-06T09:35:07.692Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 24518,str: "Security North Korean Won",num: 3944,date: new Date("2018-09-06T04:38:43.145Z"),array: ["Dynamic Granite Director","virtual web-enabled Managed","Unbranded efficient",new Date("2018-09-06T06:53:54.200Z"),53543,"Mobility dot-com Games",9738,{_id: 24519,str: "engineer applications",date: new Date("2018-09-06T09:13:45.556Z"),array: [],obj: {_id: 24520,str: "lime Borders",date: new Date("2018-09-06T03:12:48.565Z"),array: [],obj: {}}},"program Bedfordshire",new Date("2018-09-06T19:01:10.530Z"),66343]});
    },

    function(coll) {
        return coll.insert({_id: 24521,str: "solid state Beauty",num: 41856,date: new Date("2018-09-05T21:30:30.989Z"),obj: {_id: 24522,str: "payment Human incremental",num: 85711,date: new Date("2018-09-06T16:33:53.054Z"),array: ["Synergized generating",52648,"sky blue",new Date("2018-09-06T11:45:19.537Z"),{_id: 24523,num: 69936,date: new Date("2018-09-06T02:21:36.307Z"),obj: {_id: 24524,str: "dot-com",num: 5024,array: [],obj: {_id: 24525,str: "Liaison",num: 24177,array: [],obj: {}}}},17552,98619,new Date("2018-09-06T19:44:56.159Z"),"Bouvet Island (Bouvetoya) matrix Devolved",["system-worthy Buckinghamshire card","global GB",new Date("2018-09-05T21:22:30.925Z")],59479],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24526,date: new Date("2018-09-06T18:00:52.007Z"),array: [new Date("2018-09-06T00:49:52.672Z"),new Date("2018-09-06T18:22:24.455Z"),20233,83933,"hacking Concrete","Personal Loan Account e-markets TCP","hack",new Date("2018-09-06T10:09:36.512Z"),3681,[]],obj: {_id: 24527,str: "knowledge user dedicated disintermediate",num: 29202,date: new Date("2018-09-06T10:21:36.923Z"),array: [{_id: 24528,str: "integrated",num: 30892,array: ["Handcrafted Global copy",[],{_id: 24529,str: "National",num: 92925,date: new Date("2018-09-06T06:07:05.134Z")},57445,[42312,new Date("2018-09-06T07:48:45.802Z")]],obj: {}},new Date("2018-09-06T08:01:03.457Z"),76542,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24530,num: 65394,date: new Date("2018-09-06T08:27:33.212Z"),array: ["orchid connect","holistic","National",3416,new Date("2018-09-06T17:24:28.822Z"),[[],"Hat system-worthy",new Date("2018-09-06T01:11:15.198Z"),[]],{_id: 24531,str: "Berkshire Fresh exploit",num: 55768,date: new Date("2018-09-06T14:02:17.662Z"),array: [],obj: {}},44812,new Date("2018-09-05T23:48:00.244Z"),{_id: 24532,num: 76408,date: new Date("2018-09-06T05:37:21.832Z"),array: [],obj: {_id: 24533,str: "Money Market Account expedite programming",array: [{_id: 24534,str: "envisioneer recontextualize",date: new Date("2018-09-05T20:54:53.237Z"),array: [new Date("2018-09-06T02:18:59.450Z")]},57413,[]],obj: {}}},94085],obj: {_id: 24535,str: "open-source budgetary management"}});
    },

    function(coll) {
        return coll.insert({_id: 24536,str: "connecting",num: 60570,date: new Date("2018-09-06T08:14:31.793Z"),array: [],obj: {_id: 24537,num: 45697,array: [new Date("2018-09-06T07:27:06.192Z"),22819,"Fish Division primary",66088,new Date("2018-09-06T14:11:35.147Z"),"Sleek",new Date("2018-09-05T22:31:40.108Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 24538,str: "Suriname Gorgeous lime",num: 51838,date: new Date("2018-09-06T00:04:21.181Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 24539,str: "Officer",num: 82962,date: new Date("2018-09-06T17:12:56.009Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24540,str: "Savings Account Product Avon",num: 2758,date: new Date("2018-09-06T03:49:59.656Z"),array: [new Date("2018-09-06T03:24:27.413Z"),69448,new Date("2018-09-05T21:03:24.714Z"),65482,"Response","invoice Bacon","Quetzal",new Date("2018-09-06T19:19:00.974Z"),{_id: 24541,str: "reboot",date: new Date("2018-09-06T05:17:37.375Z"),obj: {}}],obj: {_id: 24542,str: "Bacon",num: 99646,date: new Date("2018-09-06T17:47:17.044Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24543,str: "Borders",num: 16507,date: new Date("2018-09-06T17:31:24.565Z"),array: [53793,62377,"Senior",new Date("2018-09-06T08:00:40.101Z"),{_id: 24544,str: "Mission input",array: [],obj: {_id: 24545,str: "Mississippi Health Implementation",num: 51960,date: new Date("2018-09-06T19:13:19.595Z")}},["Pants Grocery",{_id: 24546,num: 57110,date: new Date("2018-09-05T22:03:38.002Z"),array: [],obj: {}},new Date("2018-09-05T23:55:04.098Z"),92128],[],new Date("2018-09-06T14:03:02.863Z"),"Steel Music",new Date("2018-09-06T11:50:01.855Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24547,str: "ability back-end",num: 35900,date: new Date("2018-09-06T09:06:36.993Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24548,str: "empower Strategist",num: 75031,date: new Date("2018-09-06T02:49:50.214Z"),array: [new Date("2018-09-06T12:07:27.950Z"),new Date("2018-09-06T09:05:38.585Z"),"Product",81070,"Incredible Metal Shoes Small Granite Computer",95607,new Date("2018-09-06T03:30:29.152Z"),18658,{_id: 24549,str: "index non-volatile coherent",array: [],obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24550,str: "infomediaries Vermont transmit",num: 57666,date: new Date("2018-09-06T03:30:37.523Z"),array: [new Date("2018-09-05T23:28:49.316Z"),66466,"open architecture bluetooth Gorgeous Plastic Soap",34713,{_id: 24551,str: "Cambridgeshire users",num: 3872,array: [],obj: {}},"Credit Card Account Palau",94151,new Date("2018-09-06T00:11:13.004Z"),"Credit Card Account Tasty Wooden Tuna","logistical Arkansas",49858,"Administrator Cheese TCP",97296],obj: {_id: 24552,str: "deploy Computers",date: new Date("2018-09-06T13:16:00.878Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 24553,str: "plum",num: 82557,date: new Date("2018-09-06T09:50:54.999Z"),array: [],obj: {_id: 24554,str: "Saudi Riyal ROI synergies",num: 88294,date: new Date("2018-09-05T21:10:30.782Z"),array: [new Date("2018-09-06T12:13:21.891Z"),"navigating",37018,new Date("2018-09-06T09:08:18.409Z"),28957,92839,"Personal Loan Account Bacon Pants","Plastic Avon Zloty",[{_id: 24555,str: "COM",num: 82625,date: new Date("2018-09-06T11:31:21.797Z"),obj: {}},{_id: 24556,str: "payment Motorway",num: 37771,date: new Date("2018-09-06T04:27:13.601Z"),array: [99786],obj: {_id: 24557,num: 72665,array: [],obj: {}}}],new Date("2018-09-06T07:06:25.832Z"),47103,new Date("2018-09-06T02:16:48.410Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 24558,num: 69901,date: new Date("2018-09-06T01:58:09.807Z"),obj: {_id: 24559,str: "bluetooth Sao Tome and Principe Engineer",num: 1453,date: new Date("2018-09-06T07:59:23.595Z"),array: [new Date("2018-09-06T14:44:02.752Z"),7709,"deploy",new Date("2018-09-06T12:08:55.191Z"),"SMS Corporate","Human Cambridgeshire",[],{_id: 24560,str: "circuit Rubber",num: 15709,date: new Date("2018-09-06T05:34:07.727Z"),array: [],obj: {}},96146,new Date("2018-09-05T23:57:12.113Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24561,str: "virtual",num: 21399,date: new Date("2018-09-06T12:47:38.924Z"),array: [new Date("2018-09-06T09:52:38.585Z"),"New Zealand",new Date("2018-09-05T23:34:16.164Z"),5457,[],[66684],"Bedfordshire invoice impactful","Denmark",{_id: 24562,str: "Movies deposit",date: new Date("2018-09-06T01:41:46.403Z"),array: [],obj: {}},new Date("2018-09-06T05:48:05.075Z"),"Dominican Peso product static",{_id: 24563,num: 13653,obj: {_id: 24564,str: "open-source Center parse",num: 13186,date: new Date("2018-09-06T18:33:30.730Z"),obj: {_id: 24565,str: "Sausages recontextualize",num: 54211,date: new Date("2018-09-06T12:13:15.216Z"),array: []}}},new Date("2018-09-06T14:09:48.399Z")]});
    },

    function(coll) {
        return coll.insert({_id: 24566,str: "e-commerce program invoice",num: 14352,date: new Date("2018-09-06T06:12:32.010Z"),array: [],obj: {_id: 24567,num: 42427,date: new Date("2018-09-06T14:50:12.924Z"),array: [new Date("2018-09-05T23:54:02.780Z"),46201,"Fiji Checking Account",99670,24807,"Maryland Cambridgeshire",new Date("2018-09-06T00:09:18.853Z"),["Keys bandwidth",58619,"Causeway Hollow",new Date("2018-09-06T16:36:06.598Z"),{_id: 24568,str: "invoice productize even-keeled",date: new Date("2018-09-06T02:51:25.758Z"),array: [73654],obj: {_id: 24569,num: 30856,date: new Date("2018-09-06T15:26:27.450Z")}},{_id: 24570,str: "Falkland Islands Pound eyeballs Intelligent Steel Keyboard",array: [],obj: {}}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24571,num: 27112,date: new Date("2018-09-06T16:11:29.163Z")});
    },

    function(coll) {
        return coll.insert({_id: 24572,date: new Date("2018-09-06T03:09:42.692Z"),array: [],obj: {_id: 24573,str: "Unbranded",num: 1915,date: new Date("2018-09-05T19:59:17.030Z"),array: [new Date("2018-09-06T16:29:19.590Z"),51437,"Auto Loan Account",new Date("2018-09-06T13:41:37.417Z"),"online Small","Implementation",3295,[52962],{_id: 24574,str: "Chair asymmetric",num: 97907,date: new Date("2018-09-06T03:40:05.959Z"),obj: {_id: 24575,num: 16788,date: new Date("2018-09-06T05:36:27.208Z"),array: ["programming",new Date("2018-09-06T04:04:35.216Z")],obj: {_id: 24576,str: "Unbranded Jewelery",num: 50401,array: [],obj: {}}}},68248,{_id: 24577,str: "copy",num: 87449},new Date("2018-09-06T11:32:54.653Z"),{_id: 24578,str: "Future Iranian Rial",num: 52732,date: new Date("2018-09-05T20:46:42.182Z"),obj: {_id: 24579,array: []}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24580,str: "Chief",num: 68962,date: new Date("2018-09-05T22:32:37.741Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24581,str: "HDD Towels",num: 37300,date: new Date("2018-09-05T20:32:22.517Z"),array: [5171,71118,"Buckinghamshire monitor RAM",new Date("2018-09-06T14:38:01.184Z"),"Northern Mariana Islands Generic Plastic Bike","reinvent Universal Licensed Wooden Car",new Date("2018-09-06T15:33:10.464Z"),{_id: 24582,str: "connect",num: 39191,date: new Date("2018-09-06T00:49:38.425Z"),obj: {}},new Date("2018-09-06T13:25:37.851Z"),61248,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24583,str: "bluetooth parse",num: 91509,date: new Date("2018-09-06T18:59:07.546Z"),array: [95809,{_id: 24584,str: "Florida e-commerce Cambridgeshire",num: 11025,date: new Date("2018-09-05T20:18:51.376Z"),array: [],obj: {_id: 24585,num: 22217,date: new Date("2018-09-06T03:24:33.449Z"),array: [new Date("2018-09-06T01:13:55.417Z"),"Universal",[]],obj: {}}},19948,new Date("2018-09-06T06:26:01.178Z"),"models",new Date("2018-09-05T21:57:31.444Z"),["Games RSS"],"input",new Date("2018-09-06T15:53:00.199Z"),44327,57448],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24586,str: "Practical Cotton Cheese Squares",num: 79264,array: [[],new Date("2018-09-06T00:10:55.164Z"),26561,"Forward","Gorgeous Frozen Shoes neural Towels",77442,[new Date("2018-09-06T05:18:54.245Z"),{_id: 24587,str: "Avon",num: 78290,date: new Date("2018-09-06T17:47:02.043Z"),array: [77468],obj: {_id: 24588,date: new Date("2018-09-06T00:55:39.069Z"),array: ["Naira Planner green",new Date("2018-09-06T18:42:20.486Z"),{_id: 24589,str: "card grey yellow",num: 7240,array: [],obj: {_id: 24590,str: "Pants",num: 43525,date: new Date("2018-09-06T03:13:31.324Z"),array: [],obj: {_id: 24591,date: new Date("2018-09-06T00:23:05.571Z")}}},["Arizona Slovakia (Slovak Republic) black"]],obj: {_id: 24592,str: "Global revolutionary"}}},new Date("2018-09-06T19:18:34.191Z")],[],"Corners override Health",87683]});
    },

    function(coll) {
        return coll.insert({_id: 24593,str: "motivating efficient",date: new Date("2018-09-06T19:05:20.568Z")});
    },

    function(coll) {
        return coll.insert({_id: 24594,str: "Oklahoma user-centric Ergonomic Steel Gloves",num: 16395,date: new Date("2018-09-06T18:54:17.420Z"),array: [new Date("2018-09-06T04:50:52.174Z"),new Date("2018-09-05T22:26:54.675Z"),"Ohio",26409,36732,[new Date("2018-09-06T08:51:02.472Z")],"JBOD visionary Clothing","instruction set",26397,93975,98876,{_id: 24595,str: "sky blue synergy Canadian Dollar",num: 35427,array: [],obj: {}},{_id: 24596,str: "firewall Berkshire",num: 84249,date: new Date("2018-09-06T15:24:25.360Z"),array: [],obj: {_id: 24597,str: "open-source plum",num: 1840,date: new Date("2018-09-06T15:15:22.484Z"),array: [],obj: {}}},[new Date("2018-09-05T21:57:05.488Z"),[]]],obj: {_id: 24598,num: 73571,array: ["Baby","Tuvalu Fantastic"],obj: {_id: 24599,num: 12454,date: new Date("2018-09-06T09:41:27.268Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 24600,str: "Solutions",num: 84126,date: new Date("2018-09-05T20:30:11.862Z"),array: ["Norway",18457,64516,"primary Israel",11440,"evolve",new Date("2018-09-06T13:31:46.765Z"),new Date("2018-09-06T19:17:18.943Z"),new Date("2018-09-06T07:45:59.833Z"),90618],obj: {_id: 24601,str: "Gorgeous Concrete Chips portals reboot",date: new Date("2018-09-06T13:31:59.703Z"),array: [],obj: {_id: 24602,str: "solid state",num: 37193,date: new Date("2018-09-06T01:26:14.655Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 24603,str: "Checking Account clicks-and-mortar",num: 3028,date: new Date("2018-09-06T04:40:46.876Z"),array: [new Date("2018-09-06T07:27:44.066Z"),"Gorgeous Fantastic payment",{_id: 24604,str: "bypass Granite scale",num: 40193,date: new Date("2018-09-06T09:09:26.191Z"),array: [10732,60132,new Date("2018-09-06T09:31:27.861Z"),"input Investment Account compressing",new Date("2018-09-06T06:58:22.296Z"),56146,84229],obj: {}},[],[],"payment deposit",{_id: 24605,str: "Pre-emptive",num: 83877,date: new Date("2018-09-06T05:43:14.644Z"),array: [new Date("2018-09-05T20:44:21.272Z")],obj: {}},85146],obj: {_id: 24606,str: "action-items",num: 26838,date: new Date("2018-09-06T03:32:14.705Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 24607,str: "Optional",num: 91564,date: new Date("2018-09-06T08:22:51.622Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24608,str: "Falkland Islands Pound Assistant",num: 52891,date: new Date("2018-09-06T17:18:14.768Z"),array: [60103,76304,new Date("2018-09-06T04:46:00.402Z"),[],"Run Nuevo Sol Money Market Account",53689,new Date("2018-09-05T20:39:38.562Z"),[],"Savings Account Fresh virtual","payment attitude-oriented"],obj: {_id: 24609,str: "Data",num: 81535,date: new Date("2018-09-06T04:20:40.480Z")}});
    },

    function(coll) {
        return coll.insert({_id: 24610,str: "Optimization quantify Avon",num: 8403,date: new Date("2018-09-06T18:55:19.986Z"),array: [],obj: {_id: 24611,str: "client-driven Car",num: 34255,date: new Date("2018-09-06T00:03:44.390Z"),array: ["Leone Afghani Buckinghamshire",{_id: 24612,str: "Money Market Account RAM hack",num: 36657,array: [],obj: {}},"Clothing",63853,new Date("2018-09-06T07:04:47.831Z"),"Ergonomic Frozen Hat",26928,3363]}});
    },

    function(coll) {
        return coll.insert({_id: 24613,str: "transitional interface ADP",num: 77780,date: new Date("2018-09-06T07:26:46.121Z"),array: [new Date("2018-09-05T23:47:58.148Z"),"Credit Card Account",49835,77577,new Date("2018-09-06T03:36:58.355Z"),"Computer",new Date("2018-09-05T23:37:00.590Z"),{_id: 24614,str: "dot-com",num: 56005,date: new Date("2018-09-06T05:34:15.631Z"),array: [],obj: {_id: 24615,str: "Falkland Islands (Malvinas) Facilitator generate",date: new Date("2018-09-06T00:50:07.875Z"),array: [70018,new Date("2018-09-06T14:20:59.177Z"),["Self-enabling",{_id: 24616,str: "morph",num: 50541,date: new Date("2018-09-06T18:07:29.101Z"),array: [],obj: {}},98542,{_id: 24617,str: "Gorgeous Metal Cheese violet project",num: 42084,array: [],obj: {}}],new Date("2018-09-06T10:41:38.454Z")],obj: {_id: 24618,str: "Interactions Locks",num: 20367,date: new Date("2018-09-06T16:50:50.897Z")}}}]});
    },

    function(coll) {
        return coll.insert({_id: 24619,num: 79474,date: new Date("2018-09-06T13:58:56.556Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24620,str: "methodologies",num: 31437,date: new Date("2018-09-06T10:36:04.338Z"),array: [99270,"orange withdrawal",new Date("2018-09-06T16:56:35.180Z"),"Naira circuit",33166,new Date("2018-09-06T17:41:08.393Z"),"Handcrafted Steel Chair e-business Toys",new Date("2018-09-05T21:48:36.385Z"),[{_id: 24621,str: "overriding",date: new Date("2018-09-06T17:18:52.338Z"),array: [],obj: {_id: 24622,str: "United Kingdom schemas Soft",num: 1719,array: [],obj: {}}},new Date("2018-09-06T08:00:19.001Z"),"Green synthesize"],[],34643,63781,{_id: 24623,num: 60035,obj: {_id: 24624,str: "leading edge Chief Rubber",num: 16345,date: new Date("2018-09-06T14:58:48.761Z"),array: [86991]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24625,str: "Analyst input Generic",num: 59211,date: new Date("2018-09-06T07:35:13.875Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24626,str: "invoice Cambridgeshire",num: 12797,date: new Date("2018-09-05T21:39:06.380Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24627,str: "payment global Avon",num: 32454,date: new Date("2018-09-06T13:23:00.663Z"),array: ["silver",new Date("2018-09-06T10:16:09.426Z"),new Date("2018-09-06T04:53:45.140Z"),"Executive Kwacha scale",new Date("2018-09-06T06:06:10.171Z"),53436,[],11440,44685,29536,{_id: 24628,str: "invoice Architect",num: 67730,date: new Date("2018-09-06T00:10:32.958Z"),array: [],obj: {_id: 24629,str: "Ergonomic",date: new Date("2018-09-06T03:09:57.154Z"),array: [[{_id: 24630,str: "Intelligent index Checking Account",num: 88246,array: [],obj: {}},new Date("2018-09-05T20:49:41.149Z"),69869]],obj: {_id: 24631,str: "maximize Forward Uganda Shilling",num: 77117,date: new Date("2018-09-06T06:59:04.607Z")}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24632,str: "24/365",num: 26711,date: new Date("2018-09-06T07:13:07.007Z"),array: [],obj: {_id: 24633,str: "redefine",num: 43781,date: new Date("2018-09-06T03:52:04.492Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24634,str: "Chicken",num: 50334,date: new Date("2018-09-06T11:28:29.921Z"),array: ["transmitter",new Date("2018-09-06T10:52:28.680Z"),86751,new Date("2018-09-06T14:26:52.113Z"),new Date("2018-09-06T16:23:36.471Z"),"auxiliary",29324,7060,[],32601,"Regional olive"],obj: {_id: 24635,str: "Fresh copy",num: 54020,date: new Date("2018-09-06T14:28:56.271Z"),array: [{_id: 24636,str: "global transparent",num: 86316,date: new Date("2018-09-06T17:30:59.569Z"),array: [],obj: {}},[33468,"Parkways orchid Music"],new Date("2018-09-05T22:13:14.176Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24637,str: "Bangladesh Configurable",num: 71050,date: new Date("2018-09-06T12:44:02.426Z"),array: [new Date("2018-09-06T02:22:51.841Z"),"Pizza payment",new Date("2018-09-06T00:32:35.465Z"),new Date("2018-09-06T09:58:55.118Z"),[],"reboot Chair",78250,28581,{_id: 24638,str: "initiatives Kansas program",num: 2548,date: new Date("2018-09-06T04:54:40.212Z"),array: [67787],obj: {_id: 24639,date: new Date("2018-09-06T04:43:50.384Z"),obj: {_id: 24640,str: "Montenegro Bacon",num: 8071,date: new Date("2018-09-05T22:49:38.971Z"),array: [],obj: {}}}},new Date("2018-09-06T17:38:14.174Z"),[{_id: 24641,str: "South Dakota Coordinator",array: [],obj: {_id: 24642,str: "alarm Refined Granite Cheese",num: 42524,date: new Date("2018-09-06T06:28:30.073Z"),array: ["Handcrafted Steel Chips",["American Samoa"],{_id: 24643,num: 43522}]}}],[],84927,new Date("2018-09-06T12:30:28.158Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24644,str: "communities European Monetary Unit (E.M.U.-6) Handmade Plastic Tuna",num: 65959,date: new Date("2018-09-05T23:57:50.836Z"),array: [4467,"emulation",6109,new Date("2018-09-06T06:33:07.565Z"),{_id: 24645,str: "middleware",num: 46906,date: new Date("2018-09-06T04:45:50.706Z"),obj: {_id: 24646,str: "Seychelles Rupee",num: 19317,date: new Date("2018-09-06T14:17:49.752Z"),array: [[],new Date("2018-09-06T18:16:22.177Z"),47955,"Bedfordshire"]}},new Date("2018-09-06T12:36:47.938Z"),new Date("2018-09-06T13:38:18.526Z")],obj: {_id: 24647,str: "front-end Computers Small",num: 98503,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 24648,str: "Group",num: 23368,date: new Date("2018-09-05T20:02:02.762Z"),array: ["auxiliary Stravenue back-end",22974,"Auto Loan Account grid-enabled",13608,[],new Date("2018-09-06T10:09:36.491Z"),new Date("2018-09-06T02:14:16.895Z"),"Tasty Wooden Towels deliverables",{_id: 24649,num: 33253,array: [[]],obj: {_id: 24650,str: "Bacon Gorgeous Mississippi",num: 76888,date: new Date("2018-09-05T22:35:02.070Z"),array: [{_id: 24651,str: "backing up",date: new Date("2018-09-06T08:16:34.307Z"),obj: {}}],obj: {_id: 24652,str: "Decentralized Avon Refined Frozen Car",num: 99664,date: new Date("2018-09-06T09:26:47.781Z"),array: [],obj: {_id: 24653,str: "hub orange compress",num: 48419,array: [],obj: {}}}}},new Date("2018-09-06T02:33:49.375Z"),"Garden Intelligent",79241,14142,new Date("2018-09-06T05:22:34.910Z")]});
    },

    function(coll) {
        return coll.insert({_id: 24654,str: "ivory",num: 46612,obj: {_id: 24655,str: "web services Islands",num: 6692,date: new Date("2018-09-06T16:10:24.619Z"),array: ["fault-tolerant",new Date("2018-09-06T17:16:02.467Z"),{_id: 24656,str: "Chips interface Fish",num: 12625,date: new Date("2018-09-06T02:47:14.549Z"),array: [],obj: {}},"success red","Honduras real-time","Circles",new Date("2018-09-06T13:18:35.185Z"),5865,{_id: 24657,num: 62624,date: new Date("2018-09-06T06:05:52.446Z"),array: [],obj: {}},90936,new Date("2018-09-05T23:34:52.378Z"),new Date("2018-09-06T19:07:19.012Z"),46259],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24658,str: "Sleek",num: 90756,date: new Date("2018-09-06T17:05:37.872Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24659,str: "supply-chains haptic",num: 48850,date: new Date("2018-09-05T22:53:14.255Z")});
    },

    function(coll) {
        return coll.insert({_id: 24660,num: 50202,date: new Date("2018-09-06T17:49:05.010Z")});
    },

    function(coll) {
        return coll.insert({_id: 24661,str: "application Gardens",num: 37989,date: new Date("2018-09-06T04:18:38.687Z"),array: [],obj: {_id: 24662,num: 99248,array: ["Managed teal target","Human Diverse",[],14288,new Date("2018-09-05T23:25:56.773Z"),new Date("2018-09-06T13:59:18.323Z"),19359,new Date("2018-09-06T00:28:31.968Z"),"turn-key strategy Designer",new Date("2018-09-06T11:50:48.108Z"),["Salad"],76487,36947,{_id: 24663,str: "Health Mongolia",num: 52675,date: new Date("2018-09-06T12:42:25.044Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 24664,str: "Engineer empowering Grenada",num: 49491,date: new Date("2018-09-06T07:15:51.988Z"),array: [],obj: {_id: 24665,num: 41541,date: new Date("2018-09-06T02:18:16.397Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24666,num: 92936,date: new Date("2018-09-06T19:36:43.158Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24667,str: "Sports Oklahoma clicks-and-mortar",date: new Date("2018-09-06T05:05:14.824Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24668,str: "array Branding 24 hour",num: 15394,date: new Date("2018-09-06T13:07:00.316Z"),array: [{_id: 24669,num: 42682,date: new Date("2018-09-06T10:32:41.765Z"),array: []},64490,93739,76029,"Chief Colorado Toys",{_id: 24670,str: "matrix",num: 32451,array: [new Date("2018-09-06T11:36:14.883Z"),{_id: 24671,str: "Minnesota open-source monitor",num: 83221,obj: {_id: 24672,str: "extranet Incredible Metal Shoes",date: new Date("2018-09-06T11:30:45.260Z"),obj: {}}},"Borders",new Date("2018-09-06T09:32:13.997Z"),"Small Metal Mouse Hawaii Cotton"],obj: {}},[],[]],obj: {_id: 24673,str: "synthesizing Savings Account",date: new Date("2018-09-06T11:55:31.294Z"),obj: {_id: 24674,array: [new Date("2018-09-06T18:51:06.833Z"),3216,new Date("2018-09-06T01:40:40.940Z"),"Credit Card Account Analyst Outdoors"]}}});
    },

    function(coll) {
        return coll.insert({_id: 24675,date: new Date("2018-09-06T09:01:33.606Z"),array: [],obj: {_id: 24676,str: "Naira Gloves Nebraska",num: 74246,date: new Date("2018-09-06T04:23:56.438Z"),array: [{_id: 24677,str: "Focused",num: 49953,date: new Date("2018-09-06T11:49:37.343Z"),array: ["protocol black"]},88284,"Peso Uruguayo Uruguay Peso en Unidades Indexadas",11897,56067,[[new Date("2018-09-06T00:41:12.569Z")],new Date("2018-09-05T22:14:51.943Z"),"Consultant Intelligent","Branding Plastic"],new Date("2018-09-06T11:21:32.883Z"),new Date("2018-09-06T03:30:28.724Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24678,str: "Extensions Hat parsing",date: new Date("2018-09-05T21:04:17.781Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24679,str: "Concrete",num: 93521,date: new Date("2018-09-06T04:51:38.952Z"),array: ["Niger Analyst","Plastic",new Date("2018-09-06T08:19:09.438Z"),[],"systems monitor",95192,44493,["Bedfordshire hardware",new Date("2018-09-06T14:06:01.487Z"),38985,new Date("2018-09-06T06:26:48.214Z")],"Avon",new Date("2018-09-06T04:54:15.169Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24680,str: "Cotton",num: 9616,date: new Date("2018-09-06T01:44:49.737Z"),array: [new Date("2018-09-05T23:06:56.903Z"),"Home Loan Account deposit",28263,24223,new Date("2018-09-06T00:43:23.260Z"),new Date("2018-09-06T01:24:11.199Z"),55679,{_id: 24681,num: 18958,date: new Date("2018-09-06T06:17:49.585Z"),array: [],obj: {_id: 24682,str: "Supervisor facilitate",date: new Date("2018-09-06T08:52:12.855Z"),array: [77075,"bottom-line Electronics",57020]}},["Seamless","Licensed"],{_id: 24683,str: "technologies system",num: 58138,array: [],obj: {}},{_id: 24684,str: "quantifying Grocery e-markets",num: 90511,date: new Date("2018-09-05T21:19:28.286Z"),obj: {_id: 24685,str: "invoice Integration violet",num: 4065,date: new Date("2018-09-06T01:47:50.366Z"),array: ["Quality matrix Accounts",[]],obj: {_id: 24686,obj: {_id: 24687,str: "Mills",num: 73564,array: [{_id: 24688,obj: {}}]}}}},"invoice back-end"]});
    },

    function(coll) {
        return coll.insert({_id: 24689,str: "deliverables PNG portals",num: 90092,date: new Date("2018-09-05T20:14:34.163Z"),array: ["Response Direct",38241,85125,[],"synergistic protocol",new Date("2018-09-05T21:53:03.225Z"),new Date("2018-09-06T14:52:33.865Z"),new Date("2018-09-06T07:37:45.916Z"),24840],obj: {_id: 24690,str: "Agent Tools Tasty",num: 75777,date: new Date("2018-09-06T01:04:06.595Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24691,str: "El Salvador",num: 6693,date: new Date("2018-09-06T03:30:19.555Z"),array: [15216,74548,"Awesome Dynamic",64827,new Date("2018-09-06T12:42:57.952Z"),"Home Loan Account Qatar",new Date("2018-09-06T11:13:42.279Z"),{_id: 24692,str: "Gorgeous Wooden Shoes",num: 51636,date: new Date("2018-09-06T06:42:43.469Z"),array: [],obj: {_id: 24693,num: 71973,array: [],obj: {_id: 24694,str: "Monaco optimize",date: new Date("2018-09-06T13:45:03.448Z"),array: ["application Steel Designer"]}}},new Date("2018-09-06T02:25:58.191Z"),74297,new Date("2018-09-06T19:35:52.975Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24695,str: "Lead Soap",num: 55900,date: new Date("2018-09-06T18:52:31.520Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24696,str: "Niger metrics",num: 26948,date: new Date("2018-09-06T04:45:38.498Z"),array: ["Investment Account",21482,19875,25020,[],3777,new Date("2018-09-06T02:13:43.303Z"),new Date("2018-09-06T08:01:51.961Z"),[],"Music SSL Romania","index FTP SMS",new Date("2018-09-05T23:07:14.597Z")],obj: {_id: 24697,num: 85239,date: new Date("2018-09-06T17:12:33.927Z"),array: [10331,{_id: 24698,str: "Developer",obj: {}}],obj: {_id: 24699,str: "optimize pink",date: new Date("2018-09-06T05:45:54.071Z"),array: [],obj: {_id: 24700,str: "enable orchestration",num: 11591,array: [31090,new Date("2018-09-06T17:06:16.735Z")],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 24701,str: "partnerships RAM",num: 90515,array: [],obj: {_id: 24702,num: 16116,date: new Date("2018-09-06T01:55:10.110Z"),obj: {_id: 24703,str: "interfaces intuitive",num: 20133,array: ["clicks-and-mortar Netherlands Small Metal Table",78019,new Date("2018-09-05T22:58:52.631Z"),[],new Date("2018-09-06T07:14:13.020Z"),new Date("2018-09-06T03:45:44.536Z"),{_id: 24704,str: "budgetary management",array: [new Date("2018-09-06T04:06:36.423Z"),"Ports",84634],obj: {}},{_id: 24705,str: "Intelligent Rubber Shoes feed Pants",num: 7648,date: new Date("2018-09-06T10:44:07.907Z"),array: []},728,[new Date("2018-09-06T15:43:10.289Z"),57984,[]]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 24706,str: "partnerships indexing hack",num: 70234,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24707,str: "Czech Koruna internet solution",num: 65534,date: new Date("2018-09-06T04:28:50.556Z"),array: [new Date("2018-09-06T10:25:48.295Z"),"Brand Sausages lime",[],46912],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24708,num: 88237,date: new Date("2018-09-05T22:38:41.517Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24709,str: "Representative",num: 36058,date: new Date("2018-09-06T02:22:11.432Z"),array: ["withdrawal User-centric morph",18508,93230,new Date("2018-09-06T13:39:04.472Z"),"Rubber",14381,new Date("2018-09-06T08:30:26.785Z"),new Date("2018-09-06T16:23:26.359Z"),64830,new Date("2018-09-06T06:58:50.786Z"),79367,"withdrawal"],obj: {_id: 24710,str: "payment",num: 72475,date: new Date("2018-09-06T11:35:49.747Z"),array: [{_id: 24711,num: 90320,date: new Date("2018-09-05T20:31:23.263Z"),obj: {}},new Date("2018-09-06T10:45:08.673Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24712,str: "robust sky blue Handcrafted",num: 89554,date: new Date("2018-09-06T15:07:11.123Z"),array: [new Date("2018-09-06T09:31:26.814Z"),new Date("2018-09-06T03:27:25.958Z"),"back-end pixel",{_id: 24713,str: "Senior solid state Cedi",num: 34555,date: new Date("2018-09-06T03:31:18.352Z"),array: [],obj: {_id: 24714,str: "Buckinghamshire deposit",num: 24261,date: new Date("2018-09-06T11:13:49.042Z"),obj: {_id: 24715,str: "Morocco parse",num: 91895,array: [{_id: 24716,date: new Date("2018-09-06T18:14:47.783Z"),array: [75586],obj: {_id: 24717,array: []}},38686,"Plains","zero tolerance",{_id: 24718,num: 37943,date: new Date("2018-09-06T14:20:19.366Z"),array: [97814]},new Date("2018-09-06T18:47:13.145Z")],obj: {}}}},[],"Berkshire",59960,[],new Date("2018-09-06T15:13:00.812Z"),[],"RAM reciprocal"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24719,str: "Avon",num: 99973,date: new Date("2018-09-06T04:50:45.383Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 24720,str: "Small Frozen Pants Sports Cambridgeshire",num: 91299,date: new Date("2018-09-06T08:40:00.044Z"),array: ["dot-com architect",{_id: 24721,str: "Configuration De-engineered",num: 76477,array: [],obj: {}},60820,42368,new Date("2018-09-06T18:42:12.382Z"),"B2C Sleek Tajikistan",new Date("2018-09-05T23:57:37.762Z"),"Computer",5804,"Rubber Metal Serbian Dinar",new Date("2018-09-06T05:18:16.029Z")],obj: {_id: 24722,str: "Future",num: 77635,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24723,str: "Executive",num: 18626,date: new Date("2018-09-06T09:34:44.199Z"),array: ["quantifying Group Generic","revolutionary","Representative Sleek Steel Fish yellow",82849,new Date("2018-09-06T00:36:04.489Z"),new Date("2018-09-06T05:41:58.115Z"),new Date("2018-09-06T09:41:16.814Z"),[30877,{_id: 24724,str: "Cedi",num: 80365,date: new Date("2018-09-06T02:04:03.892Z"),array: [],obj: {_id: 24725,num: 67570,obj: {_id: 24726,num: 22656,date: new Date("2018-09-06T00:15:40.878Z"),array: []}}},1891,"Handcrafted Concrete Towels Soft",[[{_id: 24727,str: "Belize Court Intelligent Granite Chicken",date: new Date("2018-09-06T04:50:10.121Z"),obj: {}}],70520],19332,new Date("2018-09-06T02:34:54.267Z"),[34415]]],obj: {_id: 24728,num: 6981,date: new Date("2018-09-06T14:17:31.606Z")}});
    },

    function(coll) {
        return coll.insert({_id: 24729,str: "task-force",num: 70075,date: new Date("2018-09-06T00:41:52.312Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24730,str: "calculating reboot strategic",num: 96472,date: new Date("2018-09-06T18:57:22.735Z"),array: [new Date("2018-09-06T00:28:25.228Z"),34953,"Facilitator driver","Alabama","context-sensitive Leone database",new Date("2018-09-06T16:39:31.818Z"),new Date("2018-09-06T00:00:02.226Z"),80433,[],new Date("2018-09-06T14:15:12.627Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24731,str: "Sports",num: 68774,date: new Date("2018-09-06T07:45:26.047Z"),array: ["PCI",50238,new Date("2018-09-06T07:13:12.152Z"),{_id: 24732,str: "Unbranded",num: 78632,date: new Date("2018-09-05T21:13:12.327Z"),array: [],obj: {_id: 24733,str: "Interactions",num: 76735,date: new Date("2018-09-06T12:06:00.728Z"),array: [17971,{_id: 24734,str: "virtual Optimized generate",obj: {_id: 24735,str: "Associate Cotton Common",num: 81663,date: new Date("2018-09-06T08:40:26.467Z"),array: [],obj: {}}},81447,[],64893,[],new Date("2018-09-06T06:29:35.330Z")]}},"Administrator zero administration",new Date("2018-09-06T11:45:05.032Z"),"eco-centric Strategist",57863],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24736,str: "core cross-media",num: 7595,date: new Date("2018-09-06T05:04:39.980Z"),array: [],obj: {_id: 24737,str: "Checking Account Gloves",num: 18909,date: new Date("2018-09-06T09:37:04.862Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24738,str: "Buckinghamshire help-desk",num: 82488,date: new Date("2018-09-06T03:57:10.808Z"),array: [{_id: 24739,num: 95113,date: new Date("2018-09-06T17:20:49.352Z"),array: [[],56619,"Visionary functionalities Illinois",new Date("2018-09-05T22:31:50.480Z"),"Beauty 24/7",new Date("2018-09-06T14:47:17.251Z"),"Planner"],obj: {_id: 24740,str: "Tasty Plastic Hat",num: 26186,array: [],obj: {}}},{_id: 24741,str: "collaborative architectures",date: new Date("2018-09-06T19:17:08.465Z"),obj: {_id: 24742,str: "Tools asynchronous",obj: {}}},28747,"connect revolutionary",40711,new Date("2018-09-06T03:13:22.044Z")]});
    },

    function(coll) {
        return coll.insert({_id: 24743,str: "alliance engineer",num: 98639,date: new Date("2018-09-06T07:15:38.723Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24744,str: "Borders array",num: 16777,date: new Date("2018-09-06T11:37:46.262Z"),array: ["supply-chains innovate",[],33720,new Date("2018-09-05T20:17:44.948Z"),18810,"whiteboard Cambridgeshire",68071,new Date("2018-09-06T15:12:10.927Z"),[{_id: 24745,num: 65094,date: new Date("2018-09-06T10:43:17.956Z"),obj: {_id: 24746,str: "Hawaii",num: 85707,date: new Date("2018-09-06T05:01:31.423Z"),array: [],obj: {_id: 24747,array: [{_id: 24748,num: 50022,date: new Date("2018-09-05T20:22:14.615Z"),obj: {}},6898,{_id: 24749,str: "Kentucky Missouri"},new Date("2018-09-06T11:00:48.992Z")],obj: {_id: 24750,str: "Checking Account",date: new Date("2018-09-06T05:07:05.077Z"),array: [],obj: {}}}}},85944]]});
    },

    function(coll) {
        return coll.insert({_id: 24751,str: "blue Polarised Pines",num: 40771,array: [79613,new Date("2018-09-06T10:12:08.047Z"),28187,new Date("2018-09-06T14:49:43.259Z"),"Pula",{_id: 24752,str: "withdrawal Associate",num: 53571,date: new Date("2018-09-06T16:34:34.127Z")},"lime Crescent","withdrawal",new Date("2018-09-06T14:15:42.357Z"),{_id: 24753,num: 88221,date: new Date("2018-09-06T10:28:38.510Z"),array: [],obj: {_id: 24754,str: "e-markets Cambridgeshire cross-platform",num: 4269,date: new Date("2018-09-06T04:49:07.964Z"),array: [],obj: {_id: 24755,str: "Concrete SQL",num: 69944,date: new Date("2018-09-06T16:47:49.071Z"),array: [25507,84576],obj: {}}}},new Date("2018-09-06T11:41:52.276Z"),"Washington firewall Rhode Island",{_id: 24756,str: "Credit Card Account extranet ivory",date: new Date("2018-09-06T13:14:37.681Z"),array: [["primary"],[],new Date("2018-09-05T22:13:33.179Z")],obj: {_id: 24757,num: 19404,obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 24758,str: "connect Tennessee bluetooth",num: 55413,date: new Date("2018-09-06T17:46:00.392Z"),array: [new Date("2018-09-06T07:55:18.945Z"),"Human Product",37882,"Falkland Islands Pound transmit Bedfordshire","Vermont",new Date("2018-09-06T00:05:11.806Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24759,str: "Louisiana capacitor Outdoors",num: 12532,date: new Date("2018-09-06T11:15:01.640Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24760,str: "Personal Loan Account bandwidth",num: 68939,date: new Date("2018-09-06T09:37:39.416Z"),array: [new Date("2018-09-06T12:40:58.919Z"),40167,"Technician Turkish Lira Movies","alarm",29139,{_id: 24761,str: "Generic Rubber Chips",num: 3571,array: []},50173,40008,"green Ridge compress",new Date("2018-09-05T20:29:42.852Z"),19534,[],{_id: 24762,str: "deposit parsing Bedfordshire",num: 34647,date: new Date("2018-09-06T18:08:50.569Z"),array: [],obj: {_id: 24763,date: new Date("2018-09-06T06:42:44.132Z"),obj: {}}}],obj: {_id: 24764,str: "models deposit Rubber",num: 47441,date: new Date("2018-09-06T00:27:16.876Z"),array: [new Date("2018-09-05T20:55:31.684Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24765,str: "Ergonomic Wooden Shoes Silver override",num: 55543,date: new Date("2018-09-06T11:33:24.306Z"),array: [],obj: {_id: 24766,num: 57461,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24767,num: 47580,date: new Date("2018-09-05T21:37:11.951Z"),array: [99984,new Date("2018-09-06T11:58:37.698Z"),"project Bacon redundant",new Date("2018-09-06T06:41:27.739Z"),91013,55015,"modular unleash Re-contextualized",{_id: 24768,str: "Forward iterate Principal",date: new Date("2018-09-05T22:23:48.480Z"),array: [72027,{_id: 24769,str: "green",num: 42498,date: new Date("2018-09-06T17:13:41.373Z"),array: ["Plastic",new Date("2018-09-06T11:23:35.236Z"),[]],obj: {_id: 24770,str: "synergistic",num: 44491,date: new Date("2018-09-06T15:29:15.799Z"),array: [],obj: {_id: 24771,str: "sky blue Games",num: 68959,obj: {}}}}]},new Date("2018-09-06T19:43:29.797Z"),{_id: 24772,str: "alarm Chief users",num: 60654,date: new Date("2018-09-06T07:03:14.419Z"),array: [new Date("2018-09-05T21:51:18.907Z")]},"SCSI convergence"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24773,str: "facilitate PNG Games",num: 4815,date: new Date("2018-09-06T14:59:05.215Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24774,str: "Self-enabling Fantastic Response",num: 36790,date: new Date("2018-09-06T17:18:33.797Z"),array: ["Strategist",71157,56326,35984,29278,[],new Date("2018-09-05T23:42:07.129Z"),new Date("2018-09-06T04:17:58.205Z"),{_id: 24775,str: "Licensed Buckinghamshire",date: new Date("2018-09-05T22:15:12.226Z"),obj: {_id: 24776,str: "Concrete Sausages pixel",num: 20743,array: ["Communications Auto Loan Account Quality-focused",{_id: 24777,num: 17062,date: new Date("2018-09-06T11:21:21.410Z"),array: [],obj: {_id: 24778,str: "Auto Loan Account Chief Center",date: new Date("2018-09-06T07:57:07.597Z"),obj: {}}},"evolve Frozen"]}},85546,new Date("2018-09-05T21:16:56.525Z")]});
    },

    function(coll) {
        return coll.insert({_id: 24779,str: "protocol Wooden",num: 85961,date: new Date("2018-09-05T21:46:07.443Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24780,str: "National Peru discrete",num: 94993,date: new Date("2018-09-05T23:20:02.306Z"),array: [],obj: {_id: 24781,str: "Chips Oregon",num: 6166,date: new Date("2018-09-06T16:07:56.035Z"),array: [],obj: {_id: 24782,num: 16373,date: new Date("2018-09-06T12:32:09.771Z"),array: ["global cross-platform",new Date("2018-09-06T07:21:15.207Z"),["Cambridgeshire",11907,"override reboot Gloves"],82777,new Date("2018-09-06T11:19:00.880Z"),{_id: 24783,num: 39543,date: new Date("2018-09-06T14:08:34.546Z"),obj: {}},10939,new Date("2018-09-06T12:26:41.192Z"),{_id: 24784,str: "Sleek Soft Pizza Illinois",num: 81986,date: new Date("2018-09-06T13:15:44.193Z"),array: ["Corporate"]},69615,new Date("2018-09-06T07:44:24.078Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 24785,str: "Practical Metal Towels",num: 7769,date: new Date("2018-09-06T05:30:06.629Z"),array: ["Ergonomic Cambridgeshire Keyboard",new Date("2018-09-06T10:37:30.271Z"),69690,"cross-platform Product",[{_id: 24786,str: "synthesizing",num: 9659,date: new Date("2018-09-05T22:51:23.734Z"),array: [],obj: {_id: 24787,str: "Unions",date: new Date("2018-09-06T10:48:00.886Z"),array: [],obj: {}}},"Officer",{_id: 24788,num: 9634,date: new Date("2018-09-06T03:45:26.723Z"),array: [],obj: {}},[92504]],new Date("2018-09-06T19:04:52.040Z"),new Date("2018-09-06T00:58:39.080Z"),new Date("2018-09-06T03:28:35.286Z"),"disintermediate New York leverage",46543,{_id: 24789,num: 66355,date: new Date("2018-09-06T02:03:17.247Z")},"Isle Forward Markets"],obj: {_id: 24790,str: "Unbranded Guam foreground",num: 24644,array: [],obj: {_id: 24791,array: [new Date("2018-09-06T09:44:58.017Z"),[new Date("2018-09-06T01:17:54.497Z"),new Date("2018-09-06T10:04:56.345Z"),80473,"solutions Garden"],70717]}}});
    },

    function(coll) {
        return coll.insert({_id: 24792,str: "Croatian Kuna back up calculate",num: 96694,date: new Date("2018-09-06T03:59:26.889Z"),array: [],obj: {_id: 24793,str: "cyan",num: 7639,date: new Date("2018-09-06T16:44:38.607Z"),array: [59942,new Date("2018-09-06T11:19:25.991Z"),59649,["lavender compressing Oklahoma","Awesome Fresh Pizza"],"harness Hawaii",new Date("2018-09-06T06:43:10.263Z"),new Date("2018-09-05T21:51:41.589Z"),new Date("2018-09-06T09:08:12.056Z"),44103],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24794,str: "Division",num: 2886,date: new Date("2018-09-05T23:57:58.435Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 24795,str: "monetize Hat teal",num: 11968,date: new Date("2018-09-06T17:46:15.297Z"),array: ["Fantastic Rubber Chicken parse",51284,new Date("2018-09-05T20:15:58.625Z"),"Ergonomic Granite Bacon Fresh",91148,82673,88918,new Date("2018-09-06T11:25:40.768Z"),new Date("2018-09-06T08:25:19.260Z")],obj: {_id: 24796,num: 25957,date: new Date("2018-09-06T07:58:40.382Z"),array: [[],new Date("2018-09-06T13:17:33.308Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24797,str: "Interactions",num: 89078,date: new Date("2018-09-06T10:02:48.458Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24798,str: "deposit",array: [],obj: {_id: 24799,str: "Mall Representative Harbor",num: 7146,date: new Date("2018-09-06T11:52:22.183Z"),array: [new Date("2018-09-06T02:16:16.626Z"),"Uzbekistan scale Manager",81204,{_id: 24800,str: "Configuration",num: 36967,date: new Date("2018-09-06T02:32:59.933Z"),obj: {_id: 24801,num: 79771,date: new Date("2018-09-05T22:27:28.712Z"),obj: {_id: 24802,str: "Gloves",num: 34232,date: new Date("2018-09-06T02:48:22.557Z"),array: []}}},"alarm",new Date("2018-09-06T09:15:04.234Z"),55072,"niches",38395,[new Date("2018-09-06T04:29:19.775Z")],"cross-platform"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24803,str: "synthesize Refined Steel Mouse",num: 22348,date: new Date("2018-09-06T07:33:35.896Z"),array: [69087,new Date("2018-09-05T23:39:48.822Z"),"Borders",{_id: 24804,str: "Chair Rwanda",num: 5940,date: new Date("2018-09-05T23:11:42.317Z")},38552,"Cotton COM lime",931,new Date("2018-09-05T21:06:23.514Z"),{_id: 24805,str: "Engineer",num: 90016,date: new Date("2018-09-05T22:58:53.892Z"),array: [],obj: {}},"Tennessee",new Date("2018-09-06T17:32:19.877Z"),new Date("2018-09-06T16:05:17.058Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24806,str: "leading-edge",num: 87708,date: new Date("2018-09-06T02:46:23.016Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24807,str: "payment technologies Buckinghamshire",num: 68942,date: new Date("2018-09-06T06:32:40.808Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24808,str: "Rwanda Franc Granite SAS",num: 99922,date: new Date("2018-09-06T00:27:52.642Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24809,str: "Cambridgeshire bandwidth-monitored",num: 37042,date: new Date("2018-09-06T00:40:40.699Z"),array: ["calculate firmware",[],49989,[],"bandwidth",new Date("2018-09-06T19:11:28.658Z"),60051,new Date("2018-09-06T13:02:43.186Z"),27250,83618,"Plaza Operations magenta",new Date("2018-09-06T04:19:02.968Z")],obj: {_id: 24810,str: "Shirt Libyan Arab Jamahiriya",num: 13099,date: new Date("2018-09-06T18:09:47.049Z"),array: [{_id: 24811,str: "Enhanced",date: new Date("2018-09-06T00:19:04.012Z"),array: [],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24812,num: 94834,date: new Date("2018-09-06T09:36:04.533Z"),array: ["web-enabled success",61126,"Station Global Intelligent","needs-based override navigate",{_id: 24813,str: "synthesize International Fish",date: new Date("2018-09-06T08:51:35.625Z"),array: [],obj: {}},35548,new Date("2018-09-06T04:55:27.694Z"),new Date("2018-09-06T00:35:43.618Z"),[]],obj: {_id: 24814,str: "Salad",num: 47749,date: new Date("2018-09-05T22:52:53.141Z")}});
    },

    function(coll) {
        return coll.insert({_id: 24815,str: "Handmade",num: 13176,date: new Date("2018-09-06T00:37:53.286Z"),array: [new Date("2018-09-06T09:38:58.623Z"),95,"COM bandwidth capacitor",new Date("2018-09-06T01:40:38.722Z"),"overriding International Representative",19348,{_id: 24816,str: "Nepal technologies Plastic",array: [[],[],"Shirt"],obj: {}},2893,new Date("2018-09-06T00:43:49.958Z"),"France"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24817,str: "Republic of Korea Salad",num: 61734,date: new Date("2018-09-06T14:14:44.040Z"),array: ["knowledge user","executive payment",new Date("2018-09-06T09:00:11.197Z"),new Date("2018-09-06T15:04:26.236Z"),74606,33770,41591,new Date("2018-09-05T22:41:24.347Z"),[],{_id: 24818,str: "Nevada",num: 34967,date: new Date("2018-09-06T14:19:42.963Z"),array: [],obj: {_id: 24819,str: "experiences mission-critical innovate",date: new Date("2018-09-06T12:43:56.294Z"),obj: {_id: 24820,str: "invoice",date: new Date("2018-09-06T04:30:53.358Z"),array: [],obj: {}}}},3820,"protocol Chair Tuna"]});
    },

    function(coll) {
        return coll.insert({_id: 24821,str: "Practical",num: 73754,date: new Date("2018-09-06T03:16:44.871Z"),array: [new Date("2018-09-05T22:14:07.572Z"),48295,"Florida","Home Loan Account Uganda Shilling Rustic",31118,85354]});
    },

    function(coll) {
        return coll.insert({_id: 24822,str: "invoice",num: 18040,date: new Date("2018-09-06T08:20:15.296Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24823,str: "PCI",num: 15371,date: new Date("2018-09-06T17:49:59.210Z"),array: [53904,new Date("2018-09-06T03:10:32.453Z"),22052,"Front-line",21257,"Ball",new Date("2018-09-06T01:04:32.679Z"),{_id: 24824,num: 1232,date: new Date("2018-09-05T21:02:49.510Z"),array: [29089],obj: {_id: 24825,str: "connect Metrics",date: new Date("2018-09-06T11:31:08.203Z")}},"bluetooth invoice",{_id: 24826,str: "Unbranded Concrete Computer Pants Awesome",num: 69565,date: new Date("2018-09-05T23:29:05.991Z"),array: [],obj: {}},new Date("2018-09-06T07:54:17.878Z"),"Dynamic",[85431]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24827,str: "Avon product",num: 10377,date: new Date("2018-09-06T17:25:47.903Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24828,str: "Berkshire Reverse-engineered Iowa",num: 86419,date: new Date("2018-09-06T08:44:51.755Z"),array: [new Date("2018-09-06T03:25:06.377Z"),51722,71553,new Date("2018-09-05T22:05:07.221Z"),new Date("2018-09-06T16:51:34.331Z"),25695,"Granite Peru Hat",{_id: 24829,num: 33484,obj: {}},"maroon generate bypassing"],obj: {_id: 24830,str: "Brand web-enabled",num: 62333,date: new Date("2018-09-06T16:37:41.946Z"),array: [2315,[],"tangible Borders approach","dedicated Antarctica (the territory South of 60 deg S) Virtual",new Date("2018-09-06T18:42:18.626Z")],obj: {_id: 24831,str: "Movies",num: 19632,date: new Date("2018-09-06T17:34:03.089Z"),array: [[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 24832,str: "compressing invoice",num: 15148,date: new Date("2018-09-06T15:25:11.757Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24833,str: "Wooden Incredible intuitive",date: new Date("2018-09-06T04:56:35.308Z"),array: ["Corporate JSON",new Date("2018-09-06T05:24:01.045Z"),new Date("2018-09-06T00:45:17.420Z"),97093,67946,[],"Buckinghamshire blue European Unit of Account 9(E.U.A.-9)",[{_id: 24834,array: [],obj: {_id: 24835,str: "Beauty Web transmitting",num: 75841,date: new Date("2018-09-06T18:32:31.999Z"),array: [new Date("2018-09-06T07:53:28.973Z")],obj: {}}},84957],"synthesizing",{_id: 24836,str: "bypass Fish",num: 48321,date: new Date("2018-09-06T00:05:56.836Z"),array: [],obj: {}},"Steel Samoa disintermediate","generate purple redundant"],obj: {_id: 24837,str: "Dam e-markets",num: 14116,date: new Date("2018-09-05T21:58:20.732Z"),array: [new Date("2018-09-06T09:48:09.219Z"),{_id: 24838,str: "Assimilated",date: new Date("2018-09-06T08:10:38.370Z"),obj: {_id: 24839,num: 21436}}]}});
    },

    function(coll) {
        return coll.insert({_id: 24840,str: "Guinea-Bissau Rustic Personal Loan Account",num: 16496,date: new Date("2018-09-06T05:35:20.967Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24841,str: "wireless visualize Distributed",num: 15856,array: [new Date("2018-09-06T03:35:32.792Z"),50583,[],69143,"Virtual",new Date("2018-09-05T21:11:09.952Z"),[],"algorithm",56680,{_id: 24842,str: "collaboration Accountability",num: 788,date: new Date("2018-09-06T04:45:16.446Z"),array: ["Money Market Account","bypassing"],obj: {}},new Date("2018-09-06T02:12:39.054Z")],obj: {_id: 24843,str: "HDD PCI ROI",num: 69406,date: new Date("2018-09-05T21:55:59.185Z")}});
    },

    function(coll) {
        return coll.insert({_id: 24844,num: 9161,date: new Date("2018-09-06T12:20:45.604Z"),array: [[],35931,"Shoes",44150,new Date("2018-09-06T14:51:54.994Z"),{_id: 24845,str: "Integrated deposit modular",num: 51617,array: [[new Date("2018-09-06T00:15:42.188Z"),{_id: 24846,date: new Date("2018-09-06T10:32:05.807Z"),array: [],obj: {_id: 24847,str: "Program",num: 66875,date: new Date("2018-09-06T16:51:25.268Z"),array: [],obj: {_id: 24848,str: "array Chicken parsing",num: 23344,obj: {}}}},"Bedfordshire",48431],[[],"Creek"]]},new Date("2018-09-06T12:17:18.139Z"),"facilitate",new Date("2018-09-06T08:29:43.608Z"),18705],obj: {_id: 24849,str: "infrastructure Central Connecticut",date: new Date("2018-09-06T14:27:36.097Z"),array: ["Balanced Optimization quantify","redundant Avon Incredible Plastic Tuna"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24850,str: "Slovenia",num: 8433,date: new Date("2018-09-05T20:07:54.471Z"),array: [new Date("2018-09-05T20:13:47.165Z"),"Washington alarm","Multi-lateral Granite",20111,"Landing",{_id: 24851,str: "Electronics",num: 70986,date: new Date("2018-09-06T17:25:18.850Z"),obj: {_id: 24852,str: "Orchestrator",num: 60758,date: new Date("2018-09-06T19:03:17.076Z"),array: [],obj: {}}},[],new Date("2018-09-05T22:35:48.503Z"),50602,98173,new Date("2018-09-06T14:36:24.585Z"),{_id: 24853,str: "Credit Card Account",date: new Date("2018-09-06T10:41:38.746Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24854,str: "Clothing",num: 20095,date: new Date("2018-09-06T08:06:12.221Z"),array: [],obj: {_id: 24855,str: "SQL",date: new Date("2018-09-06T01:27:16.901Z"),array: [new Date("2018-09-06T16:09:55.164Z"),new Date("2018-09-06T18:37:52.351Z"),"GB Communications",73552,"Refined",[],52051,63558,{_id: 24856,str: "navigating",num: 70196,obj: {}},new Date("2018-09-05T21:01:26.180Z"),92745,{_id: 24857,str: "Buckinghamshire grid-enabled",num: 74225,obj: {}},new Date("2018-09-06T01:33:25.370Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 24858,date: new Date("2018-09-06T18:50:31.647Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24859,str: "AGP Seamless task-force",num: 27710,date: new Date("2018-09-06T05:56:41.329Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 24860,str: "Supervisor",num: 38458,date: new Date("2018-09-05T21:04:24.513Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24861,str: "Lodge connect",date: new Date("2018-09-06T19:51:48.001Z"),array: [93710,"multi-byte",new Date("2018-09-06T17:46:56.485Z"),21350,"Regional Product",[],["input",new Date("2018-09-06T19:41:14.502Z")],[{_id: 24862,str: "Unbranded streamline",num: 50379,date: new Date("2018-09-06T12:54:54.514Z"),array: [],obj: {}},new Date("2018-09-06T19:05:14.643Z")],[],93102,66291,"Cheese",94987,{_id: 24863,num: 11616,date: new Date("2018-09-06T10:16:53.728Z"),obj: {_id: 24864,str: "killer Future",num: 49550,date: new Date("2018-09-06T14:29:13.955Z"),array: [{_id: 24865,str: "Fresh",num: 48519,obj: {}}]}}]});
    },

    function(coll) {
        return coll.insert({_id: 24866,str: "Forward Officer best-of-breed",num: 42092,date: new Date("2018-09-06T02:51:18.858Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24867,str: "redundant",num: 22193,date: new Date("2018-09-06T01:18:23.125Z"),array: [new Date("2018-09-06T13:08:44.091Z"),[{_id: 24868,str: "Comoros Accountability",num: 39374,date: new Date("2018-09-06T04:58:52.872Z"),obj: {_id: 24869,str: "Plastic eco-centric Internal",num: 88336,date: new Date("2018-09-06T17:48:00.273Z"),array: [],obj: {_id: 24870,str: "Denar Rubber",num: 37993,array: []}}},"COM",99186,new Date("2018-09-06T14:00:59.896Z"),new Date("2018-09-06T17:54:38.462Z")],new Date("2018-09-06T01:34:56.992Z"),76854,36457,"Shirt",29953,{_id: 24871,str: "maroon Shirt Unbranded",date: new Date("2018-09-06T12:33:05.735Z"),array: ["Corporate Salad","Incredible Plastic Shoes Granite Saint Helena Pound",{_id: 24872,num: 14019,date: new Date("2018-09-06T05:53:15.815Z"),obj: {}}]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24873,str: "systems sexy convergence",num: 35425,date: new Date("2018-09-06T10:56:59.353Z"),array: [],obj: {_id: 24874,num: 78057,array: [75472,95455,new Date("2018-09-06T03:44:00.791Z"),new Date("2018-09-06T01:43:28.554Z"),{_id: 24875,num: 99086,date: new Date("2018-09-05T21:48:14.964Z"),array: [{_id: 24876,str: "Marketing",num: 15264,date: new Date("2018-09-06T00:22:10.705Z"),array: [],obj: {}},new Date("2018-09-06T04:04:59.970Z"),"Virginia pixel orchestrate"]},"Beauty Senior",65629,[],"indigo e-commerce","Gorgeous salmon"]}});
    },

    function(coll) {
        return coll.insert({_id: 24877,str: "Wooden Denmark Personal Loan Account",date: new Date("2018-09-06T13:42:54.963Z"),array: [16266,"Generic Cotton Ball Singapore Squares",[],new Date("2018-09-05T20:51:57.019Z"),{_id: 24878,str: "Decentralized",num: 66088,date: new Date("2018-09-06T01:23:07.119Z"),obj: {_id: 24879,str: "Technician budgetary management",num: 66895,date: new Date("2018-09-05T23:13:02.061Z"),array: [],obj: {_id: 24880,str: "ROI Credit Card Account",num: 18943,date: new Date("2018-09-06T07:19:20.630Z"),array: []}}},new Date("2018-09-06T00:56:35.851Z"),18415,"Gorgeous Cotton Hat Benin",new Date("2018-09-06T03:50:40.589Z"),[{_id: 24881,str: "Rustic Soft Sausages microchip Extension",num: 57653,obj: {}},43641,"program redefine Generic Soft Table",[[new Date("2018-09-06T12:08:57.659Z"),new Date("2018-09-05T21:58:16.922Z")],"Customizable parsing pink"],69390,{_id: 24882,num: 5323,date: new Date("2018-09-06T10:25:33.382Z")}]]});
    },

    function(coll) {
        return coll.insert({_id: 24883,str: "Berkshire",num: 79210,date: new Date("2018-09-06T03:45:17.497Z"),obj: {_id: 24884,str: "Mountain",num: 81674,date: new Date("2018-09-06T05:24:42.913Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24885,str: "Branding viral Maryland",date: new Date("2018-09-05T23:31:38.115Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24886,str: "Producer Lead Forward",date: new Date("2018-09-05T23:49:48.548Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24887,str: "Direct Agent",num: 23723,date: new Date("2018-09-06T12:18:23.148Z"),array: [69802,"index New Zealand Dollar",new Date("2018-09-06T02:18:34.634Z"),72789,[],new Date("2018-09-06T19:07:10.434Z"),new Date("2018-09-06T06:21:10.018Z"),79326,new Date("2018-09-06T14:05:22.988Z"),{_id: 24888,str: "out-of-the-box turquoise",num: 15032,array: [],obj: {}},"program Investment Account Savings Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24889,str: "New York",num: 93145,date: new Date("2018-09-06T04:25:45.265Z"),array: [[],21384,new Date("2018-09-06T05:41:39.629Z"),"transparent Street intangible","GB cross-platform",66815,new Date("2018-09-06T08:03:59.370Z"),{_id: 24890,str: "Generic Fresh Computer",num: 12568,date: new Date("2018-09-06T13:45:09.980Z"),array: [5703,new Date("2018-09-06T04:56:39.322Z"),54286,"Generic Metal Chair synergize Functionality"],obj: {_id: 24891,str: "Security overriding",num: 78686,date: new Date("2018-09-05T21:20:27.222Z"),array: [new Date("2018-09-06T14:50:03.880Z")],obj: {_id: 24892,date: new Date("2018-09-06T12:49:01.796Z"),obj: {}}}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24893,str: "Directives Health Handmade Plastic Tuna",num: 93320,date: new Date("2018-09-05T20:39:04.464Z"),array: [],obj: {_id: 24894,str: "HTTP",num: 53960,date: new Date("2018-09-06T14:26:37.179Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24895,str: "Chicken",num: 49170,date: new Date("2018-09-06T18:00:03.077Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24896,str: "Gloves invoice task-force",num: 88704,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24897,str: "Swaziland optical",num: 7945,date: new Date("2018-09-06T16:38:11.747Z"),array: [new Date("2018-09-06T01:21:07.206Z"),"Drive core Optional",17676,["monitor Garden","Station","neural Throughway",new Date("2018-09-05T21:15:46.696Z")],[],12776,{_id: 24898,str: "firewall",date: new Date("2018-09-05T23:00:14.223Z"),array: [],obj: {_id: 24899,str: "Bacon Seamless",num: 38028,array: [],obj: {}}},new Date("2018-09-06T06:49:34.294Z"),new Date("2018-09-06T07:27:59.098Z"),49421,[]],obj: {_id: 24900,str: "Arkansas Wyoming driver",num: 46247,array: [99273,new Date("2018-09-06T13:29:38.348Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24901,str: "upward-trending Buckinghamshire",num: 30804,date: new Date("2018-09-06T16:55:09.196Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24902,str: "Soft",num: 2373,date: new Date("2018-09-06T17:54:18.931Z"),array: [3217,{_id: 24903,str: "infrastructure circuit Chair",num: 68124,array: [],obj: {}},"orange Intelligent Steel Chips 24 hour",new Date("2018-09-05T22:07:53.620Z"),new Date("2018-09-06T05:05:49.589Z"),90183,"Automotive Rustic Metal Sausages Berkshire",["Platinum Alabama action-items"],73208,[],{_id: 24904,str: "schemas Avon invoice",date: new Date("2018-09-06T17:26:52.196Z")},32493,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24905,str: "paradigms Concrete",num: 9563,date: new Date("2018-09-06T06:27:13.195Z"),array: [4935,"generate","monitor",new Date("2018-09-06T08:52:38.402Z"),[],new Date("2018-09-06T18:53:16.520Z"),new Date("2018-09-06T05:41:31.145Z"),"holistic",{_id: 24906,str: "Communications",date: new Date("2018-09-05T22:55:55.677Z"),obj: {_id: 24907,str: "alarm International Nebraska",array: [77026,83933],obj: {}}},"XSS Corporate Rustic Rubber Chair",{_id: 24908,num: 22035,date: new Date("2018-09-05T22:37:09.756Z"),array: [[],new Date("2018-09-06T05:33:24.079Z"),18955],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 24909,str: "Practical Concrete Bike cross-platform Summit",num: 94155,date: new Date("2018-09-06T14:10:43.796Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24910,str: "payment Cotton firewall",num: 62411,date: new Date("2018-09-05T22:24:37.353Z"),array: [92378,{_id: 24911,date: new Date("2018-09-06T05:03:22.893Z"),array: [[],"Berkshire",new Date("2018-09-06T14:36:31.732Z")],obj: {}},{_id: 24912,str: "Rustic Metal Chicken infomediaries Concrete",num: 6479,date: new Date("2018-09-06T19:31:49.612Z"),array: [],obj: {}},"Wooden pixel dedicated",new Date("2018-09-06T13:47:55.069Z"),19647,"alliance transmitting leading-edge",[39037,new Date("2018-09-06T13:28:02.889Z")],72500,"invoice Table",[],new Date("2018-09-05T23:02:55.765Z"),"standardization"],obj: {_id: 24913,str: "Associate",num: 97615,date: new Date("2018-09-06T04:57:31.201Z")}});
    },

    function(coll) {
        return coll.insert({_id: 24914,str: "mint green Awesome revolutionize",date: new Date("2018-09-06T18:08:06.093Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24915,str: "multi-byte Kyat",date: new Date("2018-09-06T00:11:26.534Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24916,str: "high-level bluetooth secured line",num: 78033,date: new Date("2018-09-06T01:08:48.715Z"),array: ["Shoes",new Date("2018-09-06T15:58:21.521Z"),"calculate",24970,new Date("2018-09-06T15:50:49.237Z"),"Grass-roots demand-driven Niger",16213,{_id: 24917,str: "Chips",num: 95824,date: new Date("2018-09-06T11:39:26.302Z"),array: [94211,[],[]],obj: {}},new Date("2018-09-06T16:03:50.630Z"),new Date("2018-09-06T01:27:20.127Z"),"brand Colorado utilize"]});
    },

    function(coll) {
        return coll.insert({_id: 24918,str: "index repurpose",num: 92706,date: new Date("2018-09-06T01:15:01.312Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24919,str: "Fantastic Gloves",num: 88143,date: new Date("2018-09-06T05:51:06.395Z"),array: ["connecting",26063,new Date("2018-09-06T00:17:35.456Z"),"Liaison Soap invoice",79346,new Date("2018-09-06T02:40:47.178Z"),"District",{_id: 24920,num: 51957,date: new Date("2018-09-06T05:27:31.524Z"),array: [],obj: {_id: 24921,str: "Music Guyana",num: 59852,date: new Date("2018-09-06T13:44:59.174Z"),array: [{_id: 24922,str: "Incredible Fish Hat",num: 22709},new Date("2018-09-05T22:38:40.381Z")],obj: {}}},"Electronics Computer",82385,[],17967],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24923,str: "synthesizing",num: 45184,date: new Date("2018-09-06T04:37:54.841Z"),array: [new Date("2018-09-06T18:12:27.641Z"),"utilisation",29452,"Cambridgeshire Arizona",36869,new Date("2018-09-06T18:00:09.723Z"),new Date("2018-09-06T12:36:58.007Z"),new Date("2018-09-06T14:52:28.062Z"),2367,new Date("2018-09-06T17:07:52.180Z"),{_id: 24924,str: "mesh invoice",num: 56267,date: new Date("2018-09-06T09:40:32.222Z"),array: [74411,"Movies mint green Designer"],obj: {}},"UAE Dirham Pizza invoice"]});
    },

    function(coll) {
        return coll.insert({_id: 24925,num: 25109,date: new Date("2018-09-06T10:47:01.617Z"),array: [[],new Date("2018-09-06T05:01:19.905Z"),"Canadian Dollar",53126,new Date("2018-09-06T13:51:53.224Z"),911,new Date("2018-09-06T00:52:12.857Z"),7628,"THX Granite B2B",[],{_id: 24926,str: "Fantastic Steel Car bypass",num: 44461,date: new Date("2018-09-05T22:09:29.150Z"),array: [[]],obj: {}},"hardware Awesome Cotton Tuna"]});
    },

    function(coll) {
        return coll.insert({_id: 24927,str: "Incredible success",date: new Date("2018-09-06T17:06:42.422Z"),array: [new Date("2018-09-05T23:17:16.190Z"),78863,51344,82720,17281,"Awesome Jewelery SAS","invoice copy Central African Republic",{_id: 24928,str: "neural USB haptic",num: 72248,date: new Date("2018-09-06T03:19:42.142Z"),obj: {_id: 24929,str: "connecting",array: [[],new Date("2018-09-05T21:47:20.110Z"),new Date("2018-09-05T23:44:57.988Z"),new Date("2018-09-06T13:21:13.747Z")],obj: {}}},"quantifying Summit","interface",55536],obj: {_id: 24930,num: 80245,date: new Date("2018-09-06T07:48:57.783Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24931,num: 56847,date: new Date("2018-09-05T21:26:59.980Z"),array: [5997,"Legacy Administrator",87307,new Date("2018-09-06T09:53:04.040Z"),{_id: 24932,str: "Auto Loan Account Table",num: 57094,date: new Date("2018-09-06T07:15:44.496Z"),array: [],obj: {_id: 24933,str: "Strategist",num: 57725,date: new Date("2018-09-05T19:55:56.943Z"),array: [],obj: {}}},"deposit","Hawaii local",new Date("2018-09-06T13:27:45.716Z"),[70283],[],[],new Date("2018-09-06T02:41:03.840Z"),"Pizza parse Customer"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24934,str: "Orchestrator Shoes",num: 64879,date: new Date("2018-09-06T00:01:33.822Z"),array: [new Date("2018-09-05T20:57:59.395Z"),11884,89799,"needs-based USB Internal",[],new Date("2018-09-06T08:51:51.112Z"),"hack help-desk Intelligent Metal Chips",{_id: 24935,str: "Savings Account",num: 34268,date: new Date("2018-09-06T14:39:47.769Z"),array: [85755,"Qatari Rial overriding","multi-byte"],obj: {}},12773,[],new Date("2018-09-06T14:00:21.609Z")]});
    },

    function(coll) {
        return coll.insert({_id: 24936,str: "Home Loan Account",num: 43413,date: new Date("2018-09-06T16:03:18.769Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24937,str: "Awesome SMTP",num: 36122,date: new Date("2018-09-06T19:15:18.901Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24938,str: "salmon Avon Directives",num: 1187,date: new Date("2018-09-06T13:13:49.682Z"),array: [],obj: {_id: 24939,str: "Metal",num: 4579,date: new Date("2018-09-06T05:06:38.674Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24940,str: "Intelligent Soft Soap grow",num: 16120,date: new Date("2018-09-06T17:12:01.201Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24941,str: "yellow",num: 19794,date: new Date("2018-09-06T11:15:16.635Z"),array: [9290,["Buckinghamshire",65708,new Date("2018-09-06T10:44:57.053Z"),"matrices",new Date("2018-09-06T19:42:48.935Z"),new Date("2018-09-06T01:09:37.409Z"),{_id: 24942,str: "Jewelery wireless",num: 27775,date: new Date("2018-09-06T09:08:30.518Z"),array: []},29348,"Rustic",{_id: 24943,str: "internet solution",num: 73722,date: new Date("2018-09-06T01:10:50.828Z"),array: [new Date("2018-09-06T09:01:25.502Z"),31854,77739],obj: {_id: 24944,num: 38634,array: [],obj: {_id: 24945,str: "modular",date: new Date("2018-09-06T11:49:29.486Z"),obj: {}}}}],"quantify FTP",{_id: 24946,num: 90360,date: new Date("2018-09-06T14:06:39.417Z"),array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 24947,str: "Licensed optimize Virgin Islands, British",num: 65310,date: new Date("2018-09-06T01:41:19.763Z"),array: ["Crest infrastructure",32117,71342,{_id: 24948,str: "iterate primary De-engineered",num: 65664,date: new Date("2018-09-06T01:52:17.655Z"),array: [],obj: {}},71001,new Date("2018-09-06T07:26:18.071Z"),new Date("2018-09-06T11:38:44.106Z"),"Savings Account",[new Date("2018-09-06T13:47:47.217Z")],new Date("2018-09-06T01:12:51.148Z"),[]],obj: {_id: 24949,str: "invoice",num: 46230,date: new Date("2018-09-05T22:59:23.392Z")}});
    },

    function(coll) {
        return coll.insert({_id: 24950,num: 44552,date: new Date("2018-09-06T13:08:47.937Z"),obj: {_id: 24951,num: 13344,date: new Date("2018-09-06T15:59:36.741Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24952,str: "Checking Account Maryland Licensed",date: new Date("2018-09-06T09:22:14.175Z"),array: [new Date("2018-09-06T02:40:28.649Z"),57338,new Date("2018-09-06T12:21:56.606Z"),"deposit Granite Lakes","Awesome Dynamic",18335,new Date("2018-09-06T04:45:38.748Z"),[],1173,[],"Direct olive",{_id: 24953,str: "Wooden",num: 53911,array: ["hard drive Keyboard","action-items"],obj: {_id: 24954,num: 83955,date: new Date("2018-09-06T11:03:57.488Z"),obj: {_id: 24955,str: "hard drive Metal",num: 33866,date: new Date("2018-09-06T03:55:29.296Z"),array: [],obj: {_id: 24956,num: 88612}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 24957,num: 963,array: [97780,"Handmade Cotton Gloves middleware","SMS Pataca Cordoba Oro",92380,14465,new Date("2018-09-06T04:36:16.613Z"),{_id: 24958,str: "firewall Jewelery",num: 15517,date: new Date("2018-09-06T03:48:32.522Z"),array: [],obj: {}},new Date("2018-09-06T10:25:33.732Z"),new Date("2018-09-06T01:34:55.497Z"),63237,"Nepalese Rupee optimal",36121],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24959,str: "Investment Account Gorgeous",num: 87978,date: new Date("2018-09-05T21:23:53.557Z"),array: [],obj: {_id: 24960,str: "Metrics neural Cambridgeshire",num: 66994,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24961,str: "payment Alabama",num: 7591,date: new Date("2018-09-06T04:48:23.766Z"),array: [20376,"Iceland",new Date("2018-09-06T10:07:50.269Z"),{_id: 24962,str: "Oval CSS",num: 95177,date: new Date("2018-09-06T07:29:03.694Z"),array: [],obj: {}},new Date("2018-09-06T11:40:42.223Z"),[61568,[],"synthesizing Sleek Balboa US Dollar","Borders",{_id: 24963,str: "virtual Netherlands Antillian Guilder",num: 96936,date: new Date("2018-09-06T17:19:00.833Z"),array: []}],28978,38159,new Date("2018-09-06T16:05:25.842Z")]});
    },

    function(coll) {
        return coll.insert({_id: 24964,str: "1080p Village Pennsylvania",num: 67344,date: new Date("2018-09-06T16:38:26.801Z"),array: [[36359,"Pre-emptive"],"facilitate Fresh",new Date("2018-09-06T00:17:52.245Z"),6668,new Date("2018-09-06T08:55:33.118Z"),{_id: 24965,str: "Planner Tasty initiative",num: 96954,date: new Date("2018-09-06T17:55:32.156Z"),array: []},[],"Investment Account Orchestrator gold",new Date("2018-09-05T20:43:35.233Z"),[39138,"transparent Metal deliver"],new Date("2018-09-06T15:56:01.493Z"),93552],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24966,str: "Consultant Chair transmit",date: new Date("2018-09-06T10:59:12.200Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24967,str: "Home Loan Account customer loyalty Savings Account",num: 93661,date: new Date("2018-09-06T06:48:04.103Z"),array: [],obj: {_id: 24968,str: "Personal Loan Account",num: 61910,date: new Date("2018-09-06T19:17:07.991Z"),obj: {_id: 24969,str: "Customer Developer customized",num: 82543,date: new Date("2018-09-06T15:46:48.645Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 24970,str: "Program deposit",date: new Date("2018-09-06T17:58:16.085Z"),array: [],obj: {_id: 24971,str: "Rubber",num: 15989,date: new Date("2018-09-06T09:17:19.544Z"),array: [new Date("2018-09-06T07:04:27.978Z"),86363,new Date("2018-09-06T02:34:00.002Z"),83343,80190,"Tactics bandwidth generate",{_id: 24972,str: "Product Avon optimize",num: 70683,date: new Date("2018-09-06T18:11:07.645Z"),array: [new Date("2018-09-06T19:13:40.441Z"),30881,new Date("2018-09-06T16:16:33.604Z"),"pixel firewall"]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 24973,str: "Tasty lavender",num: 28250,date: new Date("2018-09-06T16:41:37.027Z"),array: [35777,"override Paradigm functionalities","Utah",new Date("2018-09-06T18:59:37.833Z"),new Date("2018-09-06T19:23:09.398Z"),"circuit pricing structure",[],["Connecticut Spur tan","Supervisor Rufiyaa Planner"],96263,41998,new Date("2018-09-06T15:06:27.053Z"),{_id: 24974,str: "virtual",num: 26172,array: [],obj: {_id: 24975,str: "deposit",num: 42960,date: new Date("2018-09-05T21:41:49.414Z"),array: [],obj: {_id: 24976,str: "Shoes",num: 24186,date: new Date("2018-09-06T19:13:47.774Z"),obj: {}}}},new Date("2018-09-06T09:19:23.795Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24977,str: "e-business",num: 65997,date: new Date("2018-09-06T05:16:44.144Z"),array: [new Date("2018-09-06T07:14:01.906Z"),{_id: 24978,str: "executive withdrawal Loop",num: 39627,date: new Date("2018-09-06T06:21:10.222Z"),array: [],obj: {_id: 24979,str: "Cross-group cross-platform",num: 10771,date: new Date("2018-09-06T04:21:42.049Z"),obj: {_id: 24980,str: "frictionless",num: 92349,array: []}}},"Security B2C Seamless",98082,new Date("2018-09-06T07:23:36.906Z"),"empowering Personal Loan Account Nauru",[93052],59648,"Cotton Fantastic",{_id: 24981,num: 20672,array: [24154,"payment port"]},new Date("2018-09-06T12:54:24.049Z"),[new Date("2018-09-06T16:06:58.481Z"),"Chair Wooden Bulgarian Lev"],new Date("2018-09-05T23:23:43.638Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24982,str: "Kansas",num: 37338,date: new Date("2018-09-06T14:33:22.264Z"),array: [],obj: {_id: 24983,str: "repurpose cross-media",num: 24693,date: new Date("2018-09-06T19:13:43.038Z"),array: [new Date("2018-09-06T17:33:31.365Z"),72694,{_id: 24984,str: "bleeding-edge portal fresh-thinking",num: 59119,date: new Date("2018-09-06T12:30:44.580Z"),array: [],obj: {}},{_id: 24985,num: 66761,date: new Date("2018-09-05T21:14:36.914Z"),obj: {_id: 24986,str: "technologies Savings Account Handcrafted",num: 96183,date: new Date("2018-09-06T07:09:34.760Z"),array: [51333,"Unbranded Granite Chips even-keeled black","Generic",59028,"alarm Chile"]}},new Date("2018-09-06T07:32:09.001Z"),[],new Date("2018-09-06T05:35:06.909Z"),"Research"]}});
    },

    function(coll) {
        return coll.insert({_id: 24987,str: "Practical Mouse",num: 8230,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 24988,str: "Nuevo Sol",num: 91254,date: new Date("2018-09-06T17:46:15.788Z"),array: [27630,new Date("2018-09-06T11:41:37.840Z"),"system engine Circles communities",[],2729,{_id: 24989,str: "proactive seamless Berkshire",num: 81881,date: new Date("2018-09-06T07:38:44.119Z"),array: [[new Date("2018-09-06T07:51:53.290Z")],18453,"Toys Falls dynamic",new Date("2018-09-06T09:58:58.662Z")],obj: {}},new Date("2018-09-06T06:54:13.584Z"),62179,new Date("2018-09-06T13:49:02.367Z")]});
    },

    function(coll) {
        return coll.insert({_id: 24990,str: "THX invoice",num: 12633,date: new Date("2018-09-06T09:58:42.798Z"),array: ["Uzbekistan Sum Rustic Metal Fish",8688,new Date("2018-09-06T10:49:39.705Z"),new Date("2018-09-06T14:51:14.061Z"),[],78391,{_id: 24991,str: "Practical maroon",num: 3509,date: new Date("2018-09-05T20:15:15.089Z"),array: [30189],obj: {}},{_id: 24992,num: 13640,date: new Date("2018-09-06T06:37:08.745Z"),array: []},[],new Date("2018-09-05T20:37:38.150Z"),[],11153],obj: {_id: 24993,str: "Cheese Wooden El Salvador",num: 34267,date: new Date("2018-09-06T11:24:34.275Z"),array: [new Date("2018-09-06T07:11:51.084Z"),20003],obj: {_id: 24994,str: "Programmable compressing Jewelery",obj: {_id: 24995,str: "flexibility",date: new Date("2018-09-05T21:54:30.599Z"),array: ["program"],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 24996,str: "Cambridgeshire maximize",num: 9434,date: new Date("2018-09-06T12:28:16.702Z"),array: ["Handmade Rubber Keyboard input Legacy","cohesive",9412,[],new Date("2018-09-05T23:14:47.562Z"),new Date("2018-09-05T21:01:55.176Z"),80342,[],{_id: 24997,str: "Usability online Dominican Peso",num: 28962,array: [[{_id: 24998,str: "implement matrix Intelligent Steel Towels",num: 82805,date: new Date("2018-09-06T17:49:14.410Z"),array: [],obj: {}}],68252,63970,new Date("2018-09-06T14:44:24.782Z"),new Date("2018-09-06T06:01:06.813Z")],obj: {_id: 24999,num: 2640,date: new Date("2018-09-06T08:13:41.810Z"),array: []}}],obj: {_id: 25000,date: new Date("2018-09-06T07:50:10.655Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25001,str: "Port",num: 47053,date: new Date("2018-09-06T05:36:44.473Z"),array: [{_id: 25002,str: "Fresh Soap",num: 10977,date: new Date("2018-09-05T23:26:06.494Z"),array: ["Rwanda visualize",new Date("2018-09-05T21:21:26.327Z")],obj: {}},{_id: 25003,date: new Date("2018-09-06T02:36:21.836Z"),array: [],obj: {_id: 25004,str: "Wooden reboot Interactions",num: 62175}},new Date("2018-09-06T13:17:50.973Z"),"back-end Streamlined",new Date("2018-09-05T23:46:41.977Z"),52855,{_id: 25005,str: "lavender panel",num: 81935,date: new Date("2018-09-06T01:58:38.399Z"),array: [],obj: {}},"Toys Inlet convergence",58874,new Date("2018-09-06T04:28:00.915Z"),"RAM",19704,[],[]],obj: {_id: 25006,str: "networks Electronics Decentralized",array: [new Date("2018-09-06T07:29:21.793Z"),51492,"Intranet withdrawal"],obj: {_id: 25007,str: "JSON Intelligent Soft Hat invoice",num: 37460,date: new Date("2018-09-05T23:35:54.490Z"),array: [],obj: {_id: 25008,date: new Date("2018-09-05T23:11:30.741Z"),array: ["interface solid state Ergonomic Wooden Chair"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 25009,num: 59670,date: new Date("2018-09-06T19:45:47.920Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25010,str: "Administrator",num: 30868,array: [new Date("2018-09-06T10:55:54.364Z"),"Borders Malagasy Ariary",64621,new Date("2018-09-06T07:47:27.332Z"),68167,[new Date("2018-09-06T16:44:34.381Z"),"Factors Money Market Account"],[],"Quality-focused Frozen Gorgeous","optimal",{_id: 25011,str: "service-desk Wisconsin",num: 91315,date: new Date("2018-09-06T04:20:48.610Z"),array: [64910],obj: {_id: 25012,num: 27563,date: new Date("2018-09-06T19:13:56.088Z"),array: [],obj: {_id: 25013,num: 56953,date: new Date("2018-09-06T17:06:54.413Z"),array: []}}},67858,{_id: 25014,str: "Street Missouri",num: 89773,date: new Date("2018-09-06T02:19:18.028Z")},"infomediaries seamless"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25015,str: "bypassing mobile",num: 14995,date: new Date("2018-09-06T15:06:05.535Z"),array: [new Date("2018-09-05T22:25:40.188Z"),"Cambridgeshire",70174,{_id: 25016,str: "reintermediate Alaska quantifying",num: 39604,date: new Date("2018-09-06T17:07:10.472Z"),array: [],obj: {_id: 25017,str: "FTP",num: 33650,date: new Date("2018-09-06T18:56:50.774Z"),array: [new Date("2018-09-06T03:55:24.864Z"),"deposit Metrics",48541],obj: {_id: 25018,str: "bandwidth open-source",date: new Date("2018-09-06T14:16:39.684Z"),array: [],obj: {}}}},new Date("2018-09-06T09:13:52.667Z"),{_id: 25019,num: 70812},"Intelligent communities",41268,["array invoice"],[],37540],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25020,str: "Regional Sleek invoice",num: 49094,date: new Date("2018-09-06T12:51:52.496Z"),array: [],obj: {_id: 25021,str: "payment",num: 6029,date: new Date("2018-09-06T03:54:49.808Z"),array: [42311,85912,"District programming",["teal"],new Date("2018-09-06T06:02:47.017Z"),new Date("2018-09-06T11:48:24.000Z"),new Date("2018-09-06T00:35:56.571Z"),"sexy back-end Fantastic Wooden Fish","enable",{_id: 25022,str: "card",num: 98002,obj: {}},{_id: 25023,str: "invoice",date: new Date("2018-09-06T05:10:43.841Z"),array: [],obj: {_id: 25024,num: 75680,array: [79845,new Date("2018-09-05T20:14:12.911Z"),new Date("2018-09-06T19:30:47.848Z")]}}],obj: {_id: 25025,num: 66052,date: new Date("2018-09-06T19:37:42.470Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25026,str: "bandwidth-monitored",num: 19431,date: new Date("2018-09-06T18:46:24.390Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25027,str: "Paradigm quantifying",num: 4829,date: new Date("2018-09-06T01:05:37.648Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25028,str: "Uruguay online",num: 6846,date: new Date("2018-09-06T17:24:14.840Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25029,str: "Intelligent",num: 28373,date: new Date("2018-09-06T12:23:15.068Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25030,str: "orange system",num: 15179,date: new Date("2018-09-06T01:06:03.979Z"),array: [],obj: {_id: 25031,str: "Pants Paradigm seize",num: 58527,date: new Date("2018-09-06T11:22:51.581Z"),array: [new Date("2018-09-05T23:44:05.828Z"),new Date("2018-09-06T18:23:32.704Z"),36877,"calculating",22897,"compress Syrian Arab Republic Berkshire",["Chicken end-to-end Rubber",{_id: 25032,num: 80707,date: new Date("2018-09-06T12:01:24.293Z"),array: [],obj: {}},new Date("2018-09-06T10:16:14.199Z")],new Date("2018-09-06T06:51:11.483Z"),39872,{_id: 25033,str: "Home Sleek Granite Gloves",num: 63689,date: new Date("2018-09-06T15:25:44.517Z"),obj: {}},["context-sensitive mint green Ergonomic",{_id: 25034,str: "invoice Vietnam Unbranded Metal Chicken",array: []},"Soft Jordan"]]}});
    },

    function(coll) {
        return coll.insert({_id: 25035,str: "Borders Avon firewall",num: 71561,date: new Date("2018-09-05T22:35:09.202Z"),array: [50825,[[],31406,"Berkshire interactive"],96057,new Date("2018-09-06T04:03:34.448Z"),"Mall",new Date("2018-09-06T06:51:15.100Z"),new Date("2018-09-06T19:38:58.724Z"),"Data North Dakota",83588,[new Date("2018-09-05T23:01:19.334Z"),23520,"Savings Account"],new Date("2018-09-06T08:08:14.299Z"),{_id: 25036,str: "THX Computer",num: 40684,date: new Date("2018-09-06T05:49:51.600Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 25037,str: "New Mexico",num: 15885,date: new Date("2018-09-06T10:46:20.012Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25038,str: "payment mobile integrate",num: 90477,date: new Date("2018-09-06T08:57:29.723Z"),array: [],obj: {_id: 25039,str: "withdrawal",num: 40932,date: new Date("2018-09-06T01:36:01.389Z"),obj: {_id: 25040,str: "Licensed Cotton Bacon Coordinator Sleek",num: 66838,date: new Date("2018-09-06T04:39:25.803Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 25041,str: "Kroon",date: new Date("2018-09-06T04:47:23.863Z"),array: [],obj: {_id: 25042,num: 95224,array: [],obj: {_id: 25043,str: "Buckinghamshire",num: 62986,date: new Date("2018-09-06T11:33:03.242Z"),array: [new Date("2018-09-06T07:38:27.659Z"),24009,"seamless auxiliary XSS",new Date("2018-09-06T15:44:45.577Z"),19194,{_id: 25044,str: "Savings Account",num: 25144,date: new Date("2018-09-06T04:10:48.801Z"),array: ["well-modulated Rustic Home",46669,[{_id: 25045,str: "Keyboard Taiwan white",num: 86546,date: new Date("2018-09-05T22:15:34.143Z"),obj: {}},new Date("2018-09-06T07:53:35.026Z")],["overriding"],{_id: 25046,num: 75855,date: new Date("2018-09-06T05:10:48.822Z"),obj: {_id: 25047,str: "structure Pre-emptive",date: new Date("2018-09-06T19:40:23.565Z")}},new Date("2018-09-05T22:38:30.688Z"),[]],obj: {}},82048],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25048,str: "sticky orchid hacking",date: new Date("2018-09-05T21:21:54.231Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25049,str: "technologies Ergonomic",num: 7726,date: new Date("2018-09-06T17:36:23.456Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25050,str: "connecting synthesizing Handcrafted Wooden Shoes",num: 86503,date: new Date("2018-09-06T07:47:49.092Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25051,str: "District Jewelery capability",array: [new Date("2018-09-06T11:48:51.963Z"),{_id: 25052,str: "transmit Beauty",num: 22795,date: new Date("2018-09-06T00:37:04.930Z"),obj: {_id: 25053,str: "Tools Frozen",num: 16580,date: new Date("2018-09-06T08:56:01.318Z"),array: [],obj: {}}},93996,64250,"Outdoors Cayman Islands",{_id: 25054,str: "Maryland embrace Operations",num: 30005,date: new Date("2018-09-05T22:46:35.976Z"),array: [],obj: {_id: 25055,num: 30191,date: new Date("2018-09-06T16:23:06.140Z"),obj: {}}},new Date("2018-09-06T10:57:14.753Z"),18862,new Date("2018-09-06T00:00:27.922Z"),"reboot","Function-based capability",[],new Date("2018-09-06T19:07:47.884Z")],obj: {_id: 25056,str: "Gloves one-to-one",num: 19770,array: [[74535,{_id: 25057,date: new Date("2018-09-06T16:54:30.685Z")},57459],{_id: 25058,num: 22078,date: new Date("2018-09-05T21:34:30.140Z"),array: [],obj: {_id: 25059,str: "purple e-tailers Serbia",num: 23643,date: new Date("2018-09-05T20:42:44.893Z")}}]}});
    },

    function(coll) {
        return coll.insert({_id: 25060,str: "Toys Supervisor",num: 25037,date: new Date("2018-09-06T16:13:49.811Z")});
    },

    function(coll) {
        return coll.insert({_id: 25061,str: "Wooden Customer-focused",num: 60974,date: new Date("2018-09-06T06:28:24.847Z"),array: ["Corners bus",{_id: 25062,str: "best-of-breed Chips",date: new Date("2018-09-06T02:38:52.512Z"),array: [],obj: {}},58996,[[]],52481,new Date("2018-09-06T10:14:29.680Z"),{_id: 25063,str: "standardization hack",num: 11979,date: new Date("2018-09-05T20:55:10.147Z"),obj: {}},"withdrawal","Versatile Gorgeous FTP",new Date("2018-09-06T14:00:41.300Z"),new Date("2018-09-06T19:14:08.725Z")]});
    },

    function(coll) {
        return coll.insert({_id: 25064,str: "Optimization access Cuba",num: 62720,date: new Date("2018-09-06T13:12:08.601Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25065,str: "Alabama Chair",num: 84506,date: new Date("2018-09-05T20:38:04.171Z"),array: [new Date("2018-09-05T22:16:15.544Z"),"Delaware","salmon Grocery",60566,{_id: 25066,num: 97931,date: new Date("2018-09-06T15:33:48.116Z"),array: [38684,[],93776,new Date("2018-09-06T03:10:56.512Z")],obj: {_id: 25067,str: "disintermediate Cambridgeshire",num: 429,date: new Date("2018-09-05T20:29:15.298Z"),array: ["visualize"],obj: {}}},{_id: 25068,str: "User-centric Investment Account",num: 10823,date: new Date("2018-09-06T01:14:00.483Z"),obj: {}},"driver SAS",new Date("2018-09-06T00:33:42.401Z"),26359,new Date("2018-09-06T13:03:22.727Z"),{_id: 25069,str: "West Virginia US Dollar",num: 76836,date: new Date("2018-09-06T15:37:32.880Z"),array: [],obj: {_id: 25070,array: [12217,new Date("2018-09-06T07:44:16.280Z"),new Date("2018-09-06T10:19:10.308Z"),[]]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25071,str: "emulation Licensed Concrete Mouse",num: 46266,date: new Date("2018-09-06T11:05:29.494Z"),array: ["Rubber orchid",new Date("2018-09-06T12:13:38.685Z"),new Date("2018-09-06T18:32:15.107Z"),64785,68996,"Saint Martin Consultant SCSI",{_id: 25072,num: 38142,date: new Date("2018-09-06T07:32:14.583Z"),array: [new Date("2018-09-06T13:55:25.746Z"),[]],obj: {_id: 25073,str: "reboot Sleek",num: 8716,array: []}},[50856,[]],"Principal bi-directional",new Date("2018-09-06T05:32:17.527Z"),"transform Ranch",[{_id: 25074,str: "Incredible",date: new Date("2018-09-06T08:48:27.853Z"),array: [],obj: {}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25075,str: "Legacy solid state Kentucky",date: new Date("2018-09-06T04:24:13.392Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25076,str: "Developer Bike Corporate",num: 16030,date: new Date("2018-09-06T07:11:24.955Z"),array: [],obj: {_id: 25077,str: "Granite Bike Savings Account",num: 91248,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25078,str: "Balboa US Dollar Team-oriented Toys",num: 84089,date: new Date("2018-09-05T19:55:44.026Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25079,num: 28587,date: new Date("2018-09-06T12:33:11.636Z"),array: [new Date("2018-09-06T18:37:18.650Z"),"Secured Dynamic",["Fantastic"],{_id: 25080,str: "Soft",num: 37738,date: new Date("2018-09-06T12:55:11.361Z"),array: [7918,new Date("2018-09-06T14:25:59.155Z")],obj: {_id: 25081,str: "reinvent Place Unbranded",num: 63735,date: new Date("2018-09-06T04:25:34.890Z"),array: [],obj: {}}},84525,"innovative Jamaican Dollar incubate","invoice",28708,[{_id: 25082,str: "Movies white",num: 44523,obj: {}},new Date("2018-09-06T00:13:15.357Z")],"radical Technician Money Market Account",[]],obj: {_id: 25083,date: new Date("2018-09-06T00:25:47.773Z")}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.num": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $map: {input: ["engineer portals",{ $substrBytes: ['$obj.str',20,18] }],as: 'garrett',in: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $minute: { $dateFromParts: {isoWeekYear: { $add: [] },isoWeek: { $floor: '$obj.num' },hour: { $sqrt: '$obj.obj.obj.num' },second: { $log10: '$obj.obj.num' },millisecond: { $indexOfArray: [{ $concatArrays: [[9638,26892],["Concrete Applications Future"],[]] },{ $toLower: "Proactive" },3] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"azure",{ $substr: ["Total transitional Burundi Franc",17,5] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Cambridgeshire mint green" } }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Kroon hacking" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],[],["Liaison white",{ $substr: ['$obj.obj.str',14,10] }],[{ $substrCP: ['$obj.obj.obj.str',7,15] },{ $substrBytes: ["Internal",12,14] }],[]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[true]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Awesome Cotton Towels SQL paradigm" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],34230] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Delaware",v: "Gorgeous Fresh Hat"},{k: "markets Saint Vincent and the Grenadines",v: true},{k: "zero administration Rand Loti Branch",v: false}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $ltrim: {input: '$obj.obj.obj.str',chars: "RAM"} } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],[79430,70689],['$date',96826]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[57938],['$obj.str'],[14468,24421,'$num']],useLongestLength: false,defaults: [/Shirt|azure/]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Leone",v: new Date("2018-09-05T21:29:52.766Z")},{k: "functionalities invoice",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num','$num',46037],77427] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str',{ $rtrim: { input: '$obj.obj.str' } }]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$num','$obj.obj.num'],['$obj.str'],[63187],[{ $toString: { $arrayElemAt: [[],{ $log10: 58732 }] } },{ $substr: ['$obj.obj.str',5,4] },"morph Berkshire"]],useLongestLength: true,defaults: []} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: { $dateToString: {date: '$obj.obj.date',format: "%M-%Y-%U-%Y-%%-%w",timezone: "Asia/Kabul",onNull: { $arrayToObject: [[[],[3917],["Function-based transmitting"],[{ $second: '$date' },'$str']]] }} } } }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $second: { $dateToString: {date: { $week: { $month: { $second: { $year: { $dateToParts: {date: { $dayOfMonth: { $toDate: { $dayOfYear: { $week: { $hour: { $hour: { $isoWeekYear: { $dateFromParts: {year: { $log: [32912,64401] },hour: { $mod: [26315,'$obj.obj.obj.num'] }} } } } } } } } },timezone: "America/Guatemala"} } } } } },timezone: "Asia/Qyzylorda"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],88191] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],11340] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["projection Generic",8,11] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeek: { $week: { $dateToParts: { date: { $dateToParts: {date: { $dateToString: {date: { $millesecond: { $minute: { $month: { $dayOfMonth: { $millesecond: { $dateToString: {date: '$date',format: "%M-%w-%Z-%U-%%-%m-%G-%G-%d-%M-%G"} } } } } } },timezone: "America/Chicago",onNull: { $arrayElemAt: [[],'$obj.num'] }} },iso8601: false} } } } } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: "XSS Borders" } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.str'],cond: { $and: ['$obj.obj.num',34214] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Bhutan deposit core"],[{ $substrCP: ["back-end",9,19] },"withdrawal",'$obj.str'],[],[{ $toUpper: "end-to-end Associate" },{ $substrBytes: [{ $substrCP: ['$str',11,0] },4,11] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: { $toLower: '$str' } }],[34610],[{ $concat: [] },"Sports","stable Facilitator Tasty Fresh Chair",'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $year: { $second: { $year: { $dateToString: {date: new Date("2018-09-06T00:51:06.834Z"),format: "%M-%L-%z-%H-%Y-%Y-%u-%G",timezone: "America/Godthab",onNull: { $arrayElemAt: [[],'$obj.num'] }} } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $hour: { $dateFromString: {dateString: "2018-09-05T21:53:07.953Z",format: "%Y-%L-%U-%m-%u-%S-%G-%L",timezone: "Asia/Riyadh",onError: { $filter: {input: [],cond: { $eq: [{ $arrayElemAt: [[],76610] },{ $substr: [{ $rtrim: {input: "schemas Bedfordshire",chars: '$$this'} },7,5] }] }} },onNull: { $arrayToObject: [[[{ $trim: {input: '$obj.obj.str',chars: '$str'} },'$num'],[71566,'$obj.obj.obj.num','$obj.obj.obj.num',{ $ceil: 10503 }],["Plastic Concrete"],[],[]]] }} } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T17:44:39.736Z"),format: "%S-%Z-%M-%G-%U-%u-%M-%m-%S-%V-%L-%z",timezone: "Asia/Ho_Chi_Minh",onNull: { $trim: { input: '$obj.obj.obj.str' } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Identity backing up Georgia",v: false},{k: "Cross-platform maroon Ergonomic",v: 53397}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toUpper: { $ltrim: {input: "Expanded optical",chars: '$obj.obj.str'} } }],[true],[91041,'$obj.obj.num','$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',0,12] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrBytes: ['$obj.obj.obj.str',15,11] },{ $substrBytes: ["benchmark Lari Granite",18,7] },"Shoes"],in: { $log10: 50805 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[{ $concat: ['$obj.obj.str'] },{ $toLower: "Manager" }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: "Toys South Carolina Communications" }]]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Intelligent Concrete Fish",chars: { $substrBytes: [{ $toString: { $ltrim: {input: '$obj.str',chars: '$obj.obj.str'} } },20,13] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["feed"],37142] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[46174]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],79268] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "methodologies overriding Savings Account",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',"relationships Handcrafted"] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$str'],as: 'zechariah',cond: { $isArray: [{ $dateFromParts: {year: { $mod: ['$obj.obj.obj.num',16045] },month: { $exp: 1413 },minute: { $subtract: ['$$zechariah','$$zechariah'] },timezone: "Etc/GMT-10"} }] }} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $toDate: { $dateToString: { date: new Date("2018-09-06T05:43:05.848Z") } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrCP: ['$obj.obj.obj.str',14,20] }],in: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Customer violet",v: '$str'},{k: "Investor hierarchy feed",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],70729] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[95719,'$num'],56047] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Games Innovative",14,14] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.str',{ $toLower: { $ltrim: {input: { $toString: { $concat: [] } },chars: "Tools Marketing"} } }],[96236,65812,'$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $second: { $hour: { $millesecond: { $year: { $isoDayOfWeek: { $dayOfYear: { $isoDayOfWeek: { $year: { $minute: { $second: { $dateToString: {date: new Date("2018-09-06T06:17:49.902Z"),timezone: "America/Pangnirtung"} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],{ $sqrt: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToString: { date: { $isoWeekYear: { $dayOfMonth: { $dateToParts: {date: { $dateToParts: {date: { $dateToString: {date: { $second: { $dayOfYear: { $dayOfWeek: { $month: { $dateFromParts: {year: { $exp: '$num' },hour: { $log: [60715,16266] },second: { $ln: '$num' }} } } } } },format: "%j-%V-%H-%w-%G"} },timezone: "America/Anguilla",iso8601: true} },timezone: "America/St_Barthelemy",iso8601: false} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["deposit"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Intranet programming",v: '$obj.num'},{k: "index Supervisor",v: { $substrBytes: ['$obj.obj.obj.str',12,12] }}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toString: { $reverseArray: [[]] } }],as: 'arvilla',in: { $size: [['$$arvilla','$$arvilla']] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[13502],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $sqrt: 25882 }] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $minute: { $dateToParts: {date: { $dayOfYear: { $year: { $toDate: { $arrayElemAt: [[],65753] } } } },iso8601: true} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "user-centric Kids Keyboard",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $second: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $size: [[12983,'$obj.obj.obj.num']] },isoWeek: { $ln: 46767 },isoDayOfWeek: { $add: [12584,'$obj.obj.obj.num','$obj.obj.num'] },minute: { $log10: '$obj.obj.num' }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $indexOfArray: [{ $reverseArray: [[{ $toUpper: "viral Borders card" }]] },{ $concatArrays: [[{ $toUpper: '$str' },"Realigned Facilitator"],[51792,'$obj.num'],[],[],[],['$obj.obj.obj.str']] }] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $dateToParts: {date: { $week: { $second: { $dayOfWeek: { $year: { $second: { $month: { $dayOfWeek: new Date("2018-09-06T07:06:31.076Z") } } } } } } },iso8601: false} },'$obj.obj.obj.num'],[33920],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',17,6] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Officer scalable",'$obj.obj.str',"Buckinghamshire Table"],[],[],[10828,96546],["hub",{ $substrBytes: ['$str',10,16] },'$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Metrics Metal Centralized",{ $concat: [{ $toString: { $dateToString: { date: new Date("2018-09-06T02:33:41.364Z") } } }] },'$obj.str',{ $concat: ['$obj.str'] }],{ $sqrt: 4261 }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],30167] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [89346],as: 'margaretta',cond: { $lt: [{ $week: { $dateFromString: {dateString: "2018-09-06T06:43:01.548Z",format: "%G-%S-%u-%u-%H-%%-%d-%j"} } },{ $arrayToObject: [[['$$margaretta'],["bus Tasty Plastic Ball human-resource","Dalasi",{ $dateToString: {date: '$obj.date',timezone: "Australia/NSW"} }],[],[],[91511,'$$margaretta',48934,{ $cmp: [{ $substrBytes: [{ $substrCP: ['$obj.obj.obj.str',10,19] },7,15] },{ $reverseArray: [[]] }] },'$$margaretta','$obj.num']]] }] }} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromParts: {year: { $pow: [68212,'$obj.obj.obj.num'] },month: { $ln: 58785 },day: '$num',millisecond: { $pow: ['$num',99312] }} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $second: { $isoDayOfWeek: { $week: { $week: { $dayOfYear: { $dayOfYear: { $isoWeek: { $dayOfWeek: { $toDate: { $arrayToObject: [[['$obj.str'],[{ $dateToString: {date: new Date("2018-09-05T20:49:40.900Z"),format: "%j-%m-%w-%u-%G-%L-%L-%U-%%"} },{ $concat: [] },"New Mexico"],[],[],[93501]]] } } } } } } } } } },timezone: "America/Anguilla"} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrBytes: ["Digitized quantify Berkshire",1,12] } } }, _id: 0}}],

        [{$project: {a: { $toString: { $ltrim: {input: { $trim: {input: '$obj.obj.obj.str',chars: "Gibraltar generate"} },chars: { $toUpper: "Island Division Home Loan Account" }} } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-05T22:30:24.496Z",timezone: "America/Moncton",onNull: { $ltrim: {input: '$obj.obj.obj.str',chars: { $concat: ["Vermont",'$obj.obj.str'] }} }} } } }, _id: 0}}],

        [{$project: {a: { $trim: {input: "functionalities Applications withdrawal",chars: { $substrBytes: ["Oklahoma Programmable Small",14,4] }} }, _id: 0}}],

        [{$project: {a: { $minute: { $month: { $hour: { $dayOfYear: { $second: { $week: { $month: { $toDate: { $arrayToObject: [[[],[76238,'$num'],[],["Up-sized Licensed"]]] } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["deposit Future Agent"],['$obj.obj.num',35510,46665],['$obj.obj.obj.num'],["Cambodia",{ $toString: { $zip: {inputs: [],useLongestLength: true,defaults: [new Date("2018-09-06T00:09:02.600Z"),"Berkshire"]} } }],[{ $concat: [] }],[82371,2226,{ $mod: [{ $trunc: '$obj.obj.obj.num' },'$obj.obj.obj.num'] }]] }, _id: 0}}],

        [{$project: {a: { $toLower: "synthesize Human" }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Credit Card Account",chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $toUpper: '$obj.obj.obj.str' },chars: "Reunion rich"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T14:59:51.527Z"),format: "%V-%S-%V-%U-%H-%j",timezone: "Europe/Jersey",onNull: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-05T21:33:46.706Z",format: "%u-%G-%z-%j",timezone: "America/Argentina/La_Rioja",onError: { $dateToString: {date: '$date',format: "%M-%L-%w-%w-%G-%S-%m-%L-%d-%w-%G-%z",timezone: "America/Goose_Bay",onNull: { $concatArrays: [] }} },onNull: { $toLower: { $concat: ['$obj.str',"haptic"] } }} } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "port",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [50198],as: 'garrick',in: { $subtract: [8176,'$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Yen Universal" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToParts: {date: { $month: { $dateFromParts: {isoWeekYear: { $floor: 10954 },isoWeek: 49004,minute: { $exp: '$obj.obj.obj.num' },millisecond: { $log: ['$obj.num',{ $abs: '$obj.obj.obj.num' }] }} } },iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[81475],[{ $dateToString: {date: new Date("2018-09-06T02:40:49.578Z"),timezone: "Asia/Kuala_Lumpur"} },"Designer Monaco Monaco","Facilitator"],['$obj.str',"West Virginia ADP"],['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $year: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [["cross-platform cross-platform Bacon"],'$obj.obj.obj.num'] },{ $arrayToObject: [[{k: "optical target Wooden",v: '$obj.obj.obj.date'},{k: "Regional",v: 84493},{k: "West Virginia",v: true},{k: "architect knowledge base partnerships",v: new Date("2018-09-06T08:37:06.945Z")}]] }] },hour: { $log: [{ $indexOfArray: [{ $map: {input: ['$obj.str',{ $dateToString: {date: { $dateToString: {date: new Date("2018-09-06T02:40:57.825Z"),format: "%M-%m-%w-%U-%U-%V-%U-%Y-%w-%L-%d"} },timezone: "Indian/Antananarivo"} },'$obj.str'],in: { $divide: ['$obj.num',65698] }} },{ $arrayToObject: [[{k: "bypass Nuevo Sol Nebraska",v: { $isoWeek: { $dayOfMonth: { $dayOfYear: { $year: { $dayOfMonth: { $dateToString: {date: '$date',timezone: "Europe/Rome",onNull: '$obj.obj.str'} } } } } } }}]] },2,11] },'$obj.obj.obj.num'] },minute: { $ln: 82755 },second: { $log10: 36126 },timezone: "America/Tegucigalpa"} } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',4,12] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: ["Terrace New York bypass",{ $trim: { input: '$obj.str' } },'$obj.str'] },3,6] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toLower: "Borders impactful JSON" },6,9] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $concat: ['$obj.obj.obj.str','$obj.obj.obj.str','$str'] },"circuit"],in: { $ln: 83601 }} }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromString: { dateString: "2018-09-06T14:05:31.493Z" } } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.str',"compress blue","Indiana fault-tolerant Keyboard"],in: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',18,8] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Pizza invoice Metal"],64422] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToParts: { date: { $year: { $dateFromString: {dateString: "2018-09-06T12:26:39.122Z",format: "%S-%m-%H-%L-%w-%G-%d",timezone: "Asia/Tashkent",onNull: { $arrayElemAt: [[{ $ltrim: {input: '$obj.str',chars: '$str'} },"Central driver"],42278] }} } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Club" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],50442] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [["1080p"],[],['$obj.obj.str','$obj.obj.str']] } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'weldon',cond: { $gt: [{ $arrayToObject: [[{k: "Sleek",v: { $dateFromString: {dateString: "2018-09-05T23:53:15.805Z",format: "%z-%S-%S-%%-%H-%j-%d-%S-%%",timezone: "US/Pacific-New",onNull: '$$weldon'} }}]] },{ $arrayToObject: [[[{ $dateToString: {date: new Date("2018-09-06T12:48:55.876Z"),format: "%Y-%M-%w-%U-%%-%%-%Y-%w-%j-%G-%%-%V",onNull: "deposit"} },{ $toString: { $rtrim: { input: "distributed" } } },{ $toLower: '$$weldon' }],['$obj.obj.str','$$weldon']]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "utilize",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str',"compress Gloves District"],[],[],[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],97533] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "incremental",v: { $abs: 38750 }},{k: "Soap",v: new Date("2018-09-06T10:01:05.984Z")},{k: "Refined Plastic Shoes",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: { $toLower: '$str' } } },"payment Savings Account Indonesia",{ $dateToString: {date: { $dayOfMonth: { $isoDayOfWeek: { $month: { $isoWeekYear: { $dateFromParts: {year: { $pow: ['$obj.obj.obj.num',58676] },hour: { $mod: ['$obj.num',60245] },minute: 27522,second: { $size: [["Sri Lanka COM"]] },millisecond: { $indexOfArray: [{ $range: [4,14] },{ $second: { $dateToParts: {date: { $week: { $dayOfYear: { $minute: { $minute: { $dateFromParts: {isoWeekYear: { $log10: 11173 },millisecond: { $exp: { $floor: '$obj.obj.num' } },timezone: "America/Fort_Nelson"} } } } } },timezone: "Africa/Juba",iso8601: true} } },11] }} } } } } },onNull: '$str'} }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Credit Card Account structure initiatives"],cond: { $eq: [{ $arrayToObject: [[[15151,'$obj.obj.obj.num','$$this'],[{ $substrCP: ["Quetzal Assimilated",2,10] },'$str',{ $substrBytes: ["District Liechtenstein",20,9] }],[],[24821]]] },{ $arrayElemAt: [[],{ $size: [['$$this','$obj.obj.obj.str']] }] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Senegal Regional",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "generate fresh-thinking",v: { $dayOfYear: { $month: { $dayOfWeek: { $minute: { $second: { $year: { $dateFromParts: {isoWeekYear: { $cmp: [{ $map: {input: [3038],as: 'reuben',in: { $exp: 68161 }} },{ $objectToArray: '$obj.obj.obj' }] },isoDayOfWeek: { $ln: '$obj.obj.obj.num' },second: { $exp: '$num' },timezone: "America/Costa_Rica"} } } } } } } }},{k: "Automotive",v: "website unleash Front-line"}]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $second: { $isoWeekYear: { $month: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $floor: 52149 },isoWeek: '$num',hour: { $divide: ['$obj.obj.obj.num',52444] },minute: { $log: [80387,{ $log: ['$obj.obj.num','$obj.num'] }] },second: { $ceil: '$obj.num' },millisecond: { $indexOfArray: [{ $concatArrays: [['$obj.obj.obj.str'],[{ $toString: { $arrayElemAt: [[41337,18213,74132],{ $multiply: [] }] } },"Checking Account"],['$obj.obj.num'],[{ $toLower: { $ltrim: {input: "Health",chars: '$obj.obj.str'} } }],[]] },{ $toLower: '$obj.str' }] }} },timezone: "America/Lima",iso8601: false} } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$str',16,6] }, _id: 0}}],

        [{$project: {a: { $minute: { $year: { $hour: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T01:32:19.932Z",timezone: "Africa/Accra",onError: { $arrayToObject: [[{k: "Overpass Cheese bandwidth",v: '$obj.num'}]] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["adapter incentivize",'$obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $month: { $dayOfMonth: { $minute: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T07:10:37.186Z",format: "%d-%S-%M-%H-%Z-%H-%V-%d-%m"} } } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'amelie',in: { $divide: ['$$amelie',5760] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.num',{ $ln: 97142 }],[45633],[{ $trim: {input: "Jewelery Refined Agent",chars: '$obj.obj.obj.str'} }],["Personal Loan Account"]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Beauty Lebanon",v: { $log: [84852,{ $add: ['$obj.obj.num','$obj.num',85299] }] }}]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $toString: { $hour: { $dateFromParts: {year: { $ceil: '$obj.obj.obj.num' },day: { $subtract: ['$obj.obj.obj.num','$num'] },millisecond: 88725} } } },'$str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "fault-tolerant",v: { $exp: 15940 }},{k: "Administrator",v: '$obj.obj.str'},{k: "Vanuatu Colombian Peso Unidad de Valor Real",v: 36454},{k: "customer loyalty intangible hybrid",v: "Georgia"},{k: "Brand",v: true}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.str'],as: 'abagail',cond: { $ne: [{ $arrayToObject: [[[{ $toString: { $arrayElemAt: [[],867] } }],['$$abagail','$$abagail']]] },{ $arrayToObject: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $isArray: [{ $arrayToObject: [[{k: "Movies Division",v: 44255}]] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T04:52:03.272Z"),format: "%z-%L-%S-%w-%Z-%M-%%-%Z-%U",timezone: "Africa/Juba"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "GB Ergonomic" }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Computer Garden withdrawal",v: { $dateToString: {date: new Date("2018-09-05T21:42:17.441Z"),timezone: "Asia/Hovd"} }},{k: "Quetzal 1080p",v: true}]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[{ $trim: {input: "Dong",chars: '$str'} },"Chair SMS panel",{ $rtrim: {input: "Money Market Account",chars: '$obj.obj.str'} }],[16649],[],[],[],["Garden Steel Up-sized"],['$obj.obj.str',{ $substr: [{ $substrCP: [{ $concat: [] },20,3] },0,11] }]] } }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $ltrim: {input: { $substrBytes: [{ $toString: { $toString: { $arrayToObject: [[['$obj.num','$num'],[23351,'$obj.num'],[51455,{ $divide: ['$obj.obj.obj.num',85667] },75723],['$str']]] } } },19,5] },chars: "deposit interactive Face to face"} },{ $substrBytes: ["Rufiyaa programming",9,3] }],in: { $floor: 7665 }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],34625] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "whiteboard",v: true},{k: "functionalities Bermuda",v: '$obj.num'},{k: "Branch calculate turquoise",v: new Date("2018-09-06T19:26:01.315Z")}]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $minute: { $dateFromString: {dateString: "2018-09-05T23:24:01.628Z",format: "%U-%Y-%L-%w-%V-%S-%m-%L-%w-%Z",timezone: "Pacific/Wallis",onError: { $toUpper: { $ltrim: {input: '$obj.str',chars: "lime"} } }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["transmitting Specialist repurpose"],51341] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $toString: { $dateToString: { date: { $dateFromString: {dateString: "2018-09-06T02:29:05.206Z",format: "%j-%V-%Y-%S-%u-%j-%M-%j-%U-%M",timezone: "Asia/Irkutsk",onError: { $filter: {input: ["Keyboard",{ $toLower: "Synergized" },"generate JSON","program seize expedite"],as: 'verner',cond: { $isArray: [{ $arrayElemAt: [['$$verner'],51937] }] }} }} } } } }],['$obj.obj.num',77991,{ $log10: '$obj.obj.num' }],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $minute: { $year: { $dayOfMonth: { $dateToString: {date: { $second: { $dayOfYear: { $isoWeek: { $dateToParts: { date: { $dateFromString: {dateString: "2018-09-06T16:51:15.627Z",onError: { $arrayElemAt: [[],{ $size: [["quantifying panel IB","Plastic Jewelery Sleek",{ $ltrim: {input: '$obj.obj.obj.str',chars: "bypass Pennsylvania Chair"} }]] }] }} } } } } } },timezone: "America/Ojinaga",onNull: { $dateToParts: {date: { $dayOfYear: { $dateToString: {date: new Date("2018-09-06T15:26:57.849Z"),format: "%u-%z-%w-%w-%U-%j-%u-%H-%Z-%z-%S",onNull: "Wisconsin Electronics"} } },timezone: "Pacific/Chuuk",iso8601: true} }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T18:46:04.064Z"),format: "%%-%H-%M-%z-%Z-%m-%m",timezone: "Europe/Tallinn"} }],88099] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',19,18] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',20,10] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $toLower: '$obj.obj.str' } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'ansel',in: { $cmp: [{ $arrayToObject: [[{k: "port",v: false}]] },{ $substrCP: ['$$ansel',3,1] }] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $substrCP: [{ $rtrim: { input: "info-mediaries logistical" } },3,11] },'$str','$obj.obj.str'],[{ $trim: {input: '$str',chars: "orchestrate"} }],["magenta Norway"]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],['$obj.obj.obj.str'],[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T04:24:59.943Z") } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $month: { $month: { $dateToString: {date: '$obj.date',format: "%m-%H-%m-%Z-%L-%Y",timezone: "Iran"} } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $zip: {inputs: [[],[],[{ $substr: ['$obj.obj.str',4,12] }],[36648]],useLongestLength: true,defaults: [true,"multi-byte Assistant copying",49957]} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: '$obj.obj.date',format: "%u-%L-%m-%L-%H-%d-%S",timezone: "Asia/Singapore",onNull: { $second: { $dayOfWeek: { $millesecond: { $hour: { $dateFromString: {dateString: "2018-09-06T16:21:54.347Z",timezone: "Europe/Jersey",onNull: { $arrayToObject: [[{k: "functionalities",v: '$obj.obj.obj.num'}]] }} } } } } }} },'$obj.str'],[70057,4190,2644],['$obj.obj.obj.str'],[{ $substrBytes: ["Wooden seize invoice",11,14] }]]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrCP: ['$str',15,18] },"Coordinator Iowa Facilitator",'$obj.obj.str',"Surinam Dollar structure South Carolina",{ $toUpper: { $toLower: "Streamlined" } }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[83624],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',16644],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[53541,46531]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "USB Rapid Cotton" } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["South Dakota gold Mississippi"],[39753],['$obj.num'],[],[]],useLongestLength: false,defaults: [/Azerbaijanian Manat|quantifying|foreground|bypassing/]} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["aggregate Direct Handmade"]] }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfMonth: { $dayOfWeek: new Date("2018-09-05T23:59:28.627Z") } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfWeek: { $week: { $dateToParts: {date: { $minute: { $isoDayOfWeek: new Date("2018-09-06T11:18:34.275Z") } },timezone: "Africa/El_Aaiun",iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],{ $cmp: [{ $second: { $hour: { $dayOfYear: { $dateToParts: {date: { $dayOfYear: { $toDate: { $objectToArray: '$obj' } } },iso8601: false} } } } },{ $arrayElemAt: [['$obj.obj.str'],40230] }] }] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $substrCP: ['$obj.str',18,2] },chars: "Robust connect"} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $toDate: { $arrayElemAt: [[{ $trim: {input: "synergistic Afghani connect",chars: "Nebraska"} }],67101] } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["web services",13,17] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str',"SSL"]] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToParts: {date: { $dayOfYear: { $second: { $dateToString: {date: new Date("2018-09-06T00:07:04.113Z"),format: "%H-%G-%Y-%d-%z-%S-%d-%%-%U-%M",onNull: '$obj.str'} } } },iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.obj.str',chars: { $substr: ["Strategist",5,20] }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $substrCP: ["Kids Rand Namibia Dollar",9,3] },15,10] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toString: { $dayOfMonth: { $minute: { $dateFromString: {dateString: "2018-09-06T08:37:55.103Z",format: "%H-%u-%U-%z-%u-%u",timezone: "America/Nome",onNull: '$str'} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Ergonomic Metrics",v: 44433}]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.obj.str'],[{ $toString: { $isoWeek: { $dayOfMonth: { $dayOfYear: { $dateFromParts: {year: { $cmp: [{ $arrayToObject: [[{k: "channels Dynamic auxiliary",v: true},{k: "Kids Baby Cambridgeshire",v: '$num'}]] },{ $dateFromParts: {isoWeekYear: { $add: [] },isoWeek: { $pow: ['$obj.obj.obj.num',55718] },isoDayOfWeek: { $multiply: [87714] },minute: '$obj.obj.num',second: { $abs: { $sqrt: 37694 } },timezone: "GMT"} }] },minute: '$num',timezone: "Africa/Conakry"} } } } } },{ $rtrim: { input: "panel" } }],['$num'],[]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Horizontal","Borders Central"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',{ $substrCP: ['$str',6,1] }],{ $mod: [50220,'$obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: '$obj.date',format: "%G-%Y-%U-%H-%L-%d-%%-%L-%j-%z",timezone: "MET"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ["Seychelles Rupee","Chief solid state Checking Account","copy transmitting indexing"] },'$obj.obj.obj.str','$obj.obj.str'],7118] }, _id: 0}}],

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
