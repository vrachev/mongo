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
        return coll.insert({_id: 9378,str: "JBOD",num: 87948,date: new Date("2018-09-06T02:09:29.496Z"),obj: {_id: 9379,str: "hack Chilean Peso Unidades de fomento",num: 32697,date: new Date("2018-09-06T05:36:15.822Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9380,str: "Gloves budgetary management grey",num: 34591,date: new Date("2018-09-06T03:49:25.678Z"),array: ["Missouri",new Date("2018-09-06T16:36:30.334Z"),{_id: 9381,str: "toolset 24/365 Shoes",num: 6038,date: new Date("2018-09-06T04:56:39.211Z"),obj: {}},92840,new Date("2018-09-06T14:23:42.749Z"),"global Pants",{_id: 9382,str: "target",num: 40021,array: [new Date("2018-09-05T23:02:59.994Z"),"olive Investment Account"]},46497,41153,new Date("2018-09-06T03:08:19.314Z"),{_id: 9383,num: 76310,date: new Date("2018-09-06T07:20:04.625Z"),array: [{_id: 9384,array: [],obj: {_id: 9385,str: "Rwanda Franc Cotton copy",num: 43887,date: new Date("2018-09-06T02:49:33.903Z"),array: [new Date("2018-09-06T08:22:23.906Z")]}},"mission-critical Berkshire",new Date("2018-09-06T06:50:24.828Z"),"deploy superstructure Keyboard"],obj: {_id: 9386,str: "sensor Cheese",obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9387,str: "Sleek Steel Mouse",num: 50925,date: new Date("2018-09-06T10:26:24.981Z"),array: [[],new Date("2018-09-06T08:26:35.270Z"),"THX HDD neural-net",new Date("2018-09-06T03:58:02.220Z"),22769,"recontextualize",new Date("2018-09-06T08:19:50.422Z"),21728,"Montana",{_id: 9388,str: "Investment Account dedicated Representative",num: 97636,date: new Date("2018-09-06T09:09:17.126Z"),array: [],obj: {}},13992],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9389,str: "CSS Gorgeous Somalia",num: 29366,date: new Date("2018-09-06T02:43:48.212Z"),array: [],obj: {_id: 9390,str: "extend transmit",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9391,str: "niches Licensed Fresh Chair",num: 76380,date: new Date("2018-09-06T11:17:14.500Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9392,str: "visionary Buckinghamshire calculating",num: 95590,date: new Date("2018-09-06T14:19:09.433Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9393,str: "Borders",num: 91432,date: new Date("2018-09-06T19:29:42.201Z"),array: [[],new Date("2018-09-06T11:29:31.513Z"),84672,["virtual XSS silver",{_id: 9394,str: "web-enabled",num: 14451,date: new Date("2018-09-06T19:07:26.534Z"),obj: {}},18332,new Date("2018-09-06T14:15:12.163Z"),"Pizza Concrete payment",new Date("2018-09-05T23:37:48.279Z")],"Berkshire",85376,new Date("2018-09-06T11:43:46.261Z"),new Date("2018-09-05T19:55:41.858Z")],obj: {_id: 9395,str: "Ergonomic Cuban Peso Peso Convertible Senior",num: 89152,array: [],obj: {_id: 9396,num: 27617,date: new Date("2018-09-06T19:53:40.275Z"),array: ["data-warehouse"]}}});
    },

    function(coll) {
        return coll.insert({_id: 9397,str: "virtual incubate Program",num: 49941,date: new Date("2018-09-06T16:48:33.377Z"),array: [new Date("2018-09-05T22:43:09.857Z"),"hard drive",48414,[],{_id: 9398,str: "web-readiness Balanced",num: 86296,date: new Date("2018-09-05T23:59:23.089Z"),obj: {_id: 9399,str: "Tasty Buckinghamshire",obj: {_id: 9400,num: 76500,date: new Date("2018-09-06T00:34:21.330Z"),array: [],obj: {}}}},new Date("2018-09-05T22:26:49.657Z")]});
    },

    function(coll) {
        return coll.insert({_id: 9401,str: "Music Hat Computers",num: 91679,date: new Date("2018-09-06T00:52:21.928Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9402,str: "Highway Web",num: 26920,date: new Date("2018-09-05T22:57:07.609Z"),array: [],obj: {_id: 9403,date: new Date("2018-09-06T05:33:18.345Z"),array: [75600,"Incredible Granite Executive",new Date("2018-09-06T18:21:56.198Z"),"Lempira Clothing",new Date("2018-09-06T02:20:02.765Z"),33657,["Rustic Cotton Towels",67719,"Ville",new Date("2018-09-05T20:39:13.413Z"),[]],{_id: 9404,str: "deposit Shoes",num: 33538,date: new Date("2018-09-06T18:39:04.597Z"),array: [],obj: {}},"input",{_id: 9405,str: "Forward harness Grocery",num: 83693,date: new Date("2018-09-06T11:15:29.083Z"),array: ["reinvent grid-enabled technologies"]},76112],obj: {_id: 9406,str: "fresh-thinking Trace override",num: 21532,date: new Date("2018-09-06T03:11:23.562Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9407,num: 10789,date: new Date("2018-09-05T21:41:37.429Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 9408,str: "District schemas",num: 81857,date: new Date("2018-09-06T00:51:30.482Z"),array: [[],45367,new Date("2018-09-06T04:13:20.784Z"),"Savings Account Frozen","system copying synthesize",new Date("2018-09-06T06:43:56.660Z"),88619,"South Georgia and the South Sandwich Islands Configurable Intelligent",[new Date("2018-09-06T14:14:52.719Z"),{_id: 9409,str: "Re-engineered",num: 31212,date: new Date("2018-09-06T11:23:32.522Z"),array: [],obj: {_id: 9410,str: "1080p",num: 45593,array: [{_id: 9411,str: "Pants",num: 49808,date: new Date("2018-09-06T15:32:58.375Z"),array: [],obj: {}},[30003],38430]}},"Concrete application"],54200,new Date("2018-09-06T11:56:45.510Z"),"Small initiatives"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9412,str: "Music optimizing",date: new Date("2018-09-05T20:17:08.485Z"),array: [new Date("2018-09-05T22:54:54.157Z"),[22038,[],new Date("2018-09-06T09:38:41.520Z"),new Date("2018-09-06T17:37:40.332Z"),56707],"Home Loan Account application",new Date("2018-09-06T01:19:47.008Z"),86119,"zero tolerance visualize Computer",{_id: 9413,str: "parse infrastructures",num: 15772,date: new Date("2018-09-06T11:24:24.449Z"),obj: {}},"Computers feed",{_id: 9414,num: 34076,date: new Date("2018-09-06T18:05:17.372Z"),array: ["port",new Date("2018-09-06T14:43:20.637Z")],obj: {}},{_id: 9415,str: "Yuan Renminbi orchid panel",date: new Date("2018-09-06T15:50:31.023Z"),array: [9819],obj: {}}],obj: {_id: 9416,date: new Date("2018-09-06T06:25:08.282Z")}});
    },

    function(coll) {
        return coll.insert({_id: 9417,str: "Optimization synthesize leverage",num: 45367,date: new Date("2018-09-05T21:58:02.876Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9418,str: "Eritrea Synergistic Wyoming",num: 84304,date: new Date("2018-09-06T15:02:07.969Z"),array: [44336,29568,"Persistent dedicated Utah",[],new Date("2018-09-05T20:19:06.089Z"),new Date("2018-09-06T15:24:51.135Z"),"reboot synthesize",new Date("2018-09-06T04:00:02.153Z"),{_id: 9419,num: 84319,date: new Date("2018-09-05T23:02:02.934Z"),array: [new Date("2018-09-06T02:39:48.753Z"),51191,new Date("2018-09-06T04:35:26.349Z"),{_id: 9420,str: "recontextualize synthesize",num: 77954,date: new Date("2018-09-05T21:09:08.374Z")}],obj: {}},"compress indigo"],obj: {_id: 9421,num: 4669}});
    },

    function(coll) {
        return coll.insert({_id: 9422,str: "Small Metal Salad e-enable parallelism",num: 85773,array: [70630,new Date("2018-09-05T22:17:53.869Z"),new Date("2018-09-06T03:38:21.814Z"),"Comoros Paradigm",new Date("2018-09-06T04:21:09.737Z"),[15477,new Date("2018-09-06T16:54:29.722Z"),"North Korean Won Infrastructure complexity",[],"firewall software",{_id: 9423,str: "JSON",num: 39602,date: new Date("2018-09-06T15:12:51.653Z"),array: [],obj: {}},14313,44434],"France Music",new Date("2018-09-06T10:24:54.552Z")],obj: {_id: 9424,str: "high-level",num: 37518,date: new Date("2018-09-06T06:52:37.277Z"),array: [],obj: {_id: 9425,str: "THX Money Market Account Mayotte",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9426,str: "array Cambridgeshire Interactions",num: 56032,date: new Date("2018-09-05T21:54:36.920Z"),array: [new Date("2018-09-06T05:59:50.737Z"),"Security action-items Connecticut",new Date("2018-09-06T04:54:57.867Z"),"Future",{_id: 9427,str: "motivating",num: 97494,date: new Date("2018-09-06T08:21:30.100Z"),array: [],obj: {_id: 9428,str: "bricks-and-clicks Future-proofed 24/7",num: 61362,obj: {}}},62936,"withdrawal Seamless",7929,new Date("2018-09-06T00:35:44.421Z")]});
    },

    function(coll) {
        return coll.insert({_id: 9429,str: "model",date: new Date("2018-09-05T21:17:39.969Z"),array: ["North Dakota virtual",50145,new Date("2018-09-06T14:43:14.182Z"),97263,new Date("2018-09-06T04:19:35.540Z"),"regional",new Date("2018-09-06T14:31:14.644Z"),"Rubber neural","rich Chicken deposit",[{_id: 9430,str: "Investment Account Cambridgeshire withdrawal",num: 86193,date: new Date("2018-09-06T13:23:15.701Z"),array: [],obj: {}},4629]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9431,str: "Producer",num: 13102,date: new Date("2018-09-05T23:53:02.730Z"),array: ["national RSS",new Date("2018-09-06T02:44:00.254Z"),{_id: 9432,str: "Direct",date: new Date("2018-09-06T13:08:16.602Z"),obj: {}},80792,"synthesizing",17642,[],new Date("2018-09-06T15:48:42.200Z"),new Date("2018-09-06T04:17:02.059Z"),"communities",[],{_id: 9433,str: "holistic",num: 42440,date: new Date("2018-09-06T10:44:55.960Z"),array: [new Date("2018-09-06T13:53:56.656Z"),"EXE XML"],obj: {_id: 9434,num: 68491,date: new Date("2018-09-05T22:53:37.884Z"),obj: {_id: 9435,num: 48791,date: new Date("2018-09-06T15:32:27.357Z"),array: ["index Lake Solomon Islands Dollar",82793],obj: {}}}},46889]});
    },

    function(coll) {
        return coll.insert({_id: 9436,str: "Producer orchestrate Practical",num: 16282,date: new Date("2018-09-06T03:10:18.978Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9437,str: "Mali pink Intelligent Concrete Towels",num: 69660,date: new Date("2018-09-06T14:22:11.039Z"),array: [],obj: {_id: 9438,str: "invoice Buckinghamshire",num: 3072,date: new Date("2018-09-05T20:46:53.330Z"),array: ["Movies","copy Investment Account SMS",63242,[],{_id: 9439,str: "Program maximize",num: 52362,date: new Date("2018-09-06T10:55:12.253Z"),array: [84417,47816,new Date("2018-09-06T08:43:02.070Z")],obj: {_id: 9440,str: "Dynamic invoice",num: 26158,date: new Date("2018-09-06T02:42:51.690Z"),array: ["scale quantify payment"],obj: {}}},{_id: 9441,str: "partnerships Sleek Wooden Computer Optimization",num: 36083,array: [],obj: {}},{_id: 9442,num: 6874,date: new Date("2018-09-06T15:32:44.585Z"),obj: {_id: 9443,str: "Fresh",date: new Date("2018-09-06T19:35:40.436Z")}},new Date("2018-09-06T13:20:33.682Z"),["card"],[],new Date("2018-09-05T20:02:36.050Z"),"payment"]}});
    },

    function(coll) {
        return coll.insert({_id: 9444,str: "Investment Account infrastructure Steel",num: 5751,date: new Date("2018-09-06T02:43:45.198Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9445,str: "knowledge base",date: new Date("2018-09-06T11:16:13.647Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9446,str: "system",num: 93417,date: new Date("2018-09-06T06:45:05.987Z"),array: [{_id: 9447,str: "primary Sports Engineer",num: 53138,date: new Date("2018-09-05T21:27:17.538Z"),array: [],obj: {}},new Date("2018-09-05T22:58:03.441Z"),new Date("2018-09-06T02:33:55.791Z"),11244,"Designer",5129,"Avon Tuna",[],"enable Graphic Interface Vermont"],obj: {_id: 9448,str: "COM payment Nigeria",num: 38466,date: new Date("2018-09-06T17:13:05.182Z"),array: [],obj: {_id: 9449,str: "Refined Rubber Chips",num: 55425,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9450,str: "Kenyan Shilling Chair",num: 54522,date: new Date("2018-09-06T03:30:21.404Z"),array: [64057,34174,"Checking Account","Fresh Arkansas quantifying","Books well-modulated Handmade",94415,new Date("2018-09-05T20:27:21.989Z"),69202,[58027,new Date("2018-09-06T04:33:12.318Z"),[],"Arkansas Buckinghamshire revolutionize"],{_id: 9451,str: "Congolese Franc programming",obj: {}},new Date("2018-09-06T18:19:44.113Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9452,str: "Integrated",num: 23582,date: new Date("2018-09-06T02:12:45.666Z"),array: ["Salad",new Date("2018-09-05T21:47:54.430Z"),new Date("2018-09-06T07:55:16.008Z"),86241,55034,{_id: 9453,date: new Date("2018-09-06T12:22:47.868Z"),array: [],obj: {}},{_id: 9454,str: "Officer Home Minnesota",array: [],obj: {_id: 9455,str: "Networked",num: 35867,date: new Date("2018-09-06T05:06:06.595Z"),obj: {_id: 9456,str: "Ergonomic Steel Table plum",num: 38143,date: new Date("2018-09-06T11:12:47.846Z"),array: [new Date("2018-09-06T14:11:37.805Z"),"distributed Lari XML"],obj: {_id: 9457,str: "engineer Mall transmitting",num: 68114,date: new Date("2018-09-06T07:23:33.006Z"),array: ["Steel next-generation","connecting",66950],obj: {}}}}},[38212],"hack Berkshire",new Date("2018-09-06T19:13:56.899Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 9458,str: "Gorgeous multi-tasking Consultant",num: 66389,date: new Date("2018-09-06T15:00:08.687Z"),array: [],obj: {_id: 9459,str: "Avon Solutions Multi-tiered",num: 42688,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9460,str: "Land Concrete Networked",num: 21239,date: new Date("2018-09-06T04:20:33.752Z"),array: [],obj: {_id: 9461,str: "Tuna Zambia",date: new Date("2018-09-06T12:08:56.676Z"),array: [],obj: {_id: 9462,num: 92386,date: new Date("2018-09-06T07:40:36.133Z"),array: ["Home Greens Louisiana",26940,78444,"Generic Marketing","SAS Refined Cotton Pizza program",42827,[new Date("2018-09-06T03:18:37.840Z"),[55061]],new Date("2018-09-05T22:15:14.639Z"),{_id: 9463,num: 18068,array: [],obj: {}},new Date("2018-09-06T19:49:24.718Z"),"withdrawal Technician",[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9464,str: "azure black",num: 77429,date: new Date("2018-09-06T15:30:26.906Z"),array: [new Date("2018-09-05T23:28:36.889Z"),{_id: 9465,str: "intuitive",array: ["Cotton wireless Kids",new Date("2018-09-05T21:58:59.660Z")],obj: {}},61593,37569,"turn-key",[],new Date("2018-09-06T03:26:49.410Z"),[],42625,"Fresh optical",new Date("2018-09-06T00:18:21.224Z"),43676,"open-source efficient"]});
    },

    function(coll) {
        return coll.insert({_id: 9466,str: "Tuna",num: 52982,date: new Date("2018-09-06T08:49:29.379Z"),array: [new Date("2018-09-06T13:48:23.968Z"),new Date("2018-09-06T15:45:30.653Z"),19848,87025,new Date("2018-09-06T13:34:49.591Z"),[],{_id: 9467,str: "Martinique superstructure",num: 31017,date: new Date("2018-09-05T23:31:14.205Z"),array: [],obj: {_id: 9468,str: "convergence solid state",num: 34439,array: ["indexing Fantastic Legacy"],obj: {}}},{_id: 9469,date: new Date("2018-09-06T18:15:32.711Z"),array: ["JSON",[],new Date("2018-09-05T22:17:48.993Z")]},"Corporate","generate",582]});
    },

    function(coll) {
        return coll.insert({_id: 9470,str: "Sleek Soft Tuna",num: 22393,date: new Date("2018-09-06T13:23:16.959Z"),array: ["Innovative partnerships","THX installation",new Date("2018-09-06T01:35:22.993Z"),new Date("2018-09-06T14:14:36.290Z"),82166,"Angola",[],340,new Date("2018-09-05T20:23:03.503Z"),90960,new Date("2018-09-05T22:32:46.730Z"),30275,[]],obj: {_id: 9471,str: "Sports Handcrafted Wooden Shoes Refined Plastic Shoes",num: 47497,date: new Date("2018-09-06T14:04:07.773Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9472,str: "Incredible Cotton Cheese models",num: 73940,date: new Date("2018-09-05T23:51:27.019Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9473,str: "models",num: 98753,date: new Date("2018-09-06T12:47:59.896Z"),array: [],obj: {_id: 9474,num: 30671,array: ["e-tailers JSON",{_id: 9475,str: "Underpass",num: 38352,date: new Date("2018-09-06T04:49:05.106Z"),array: [83517,new Date("2018-09-06T18:06:21.333Z"),"generating gold",{_id: 9476,str: "Unbranded Cotton Shirt",num: 2026,date: new Date("2018-09-06T05:24:04.054Z"),array: [],obj: {}}]},29643,new Date("2018-09-06T06:56:25.100Z"),"olive Metal",91804,"Orchestrator",new Date("2018-09-06T18:26:09.288Z"),{_id: 9477,str: "Green",date: new Date("2018-09-05T21:45:04.197Z"),array: [],obj: {_id: 9478,num: 42032,date: new Date("2018-09-06T19:54:30.871Z")}},[[67997,new Date("2018-09-06T12:38:50.128Z")],{_id: 9479,str: "solid state",date: new Date("2018-09-06T06:15:57.555Z"),array: [28192,"Visionary application Electronics",[]],obj: {_id: 9480,str: "deposit overriding",num: 7087,date: new Date("2018-09-06T16:20:06.561Z"),array: [[],"override HTTP",{_id: 9481,obj: {}}]}}],new Date("2018-09-06T02:39:45.495Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9482,str: "Incredible",date: new Date("2018-09-06T05:01:24.740Z"),array: [new Date("2018-09-06T06:13:28.924Z"),new Date("2018-09-06T19:22:41.340Z"),"Mobility",new Date("2018-09-06T07:02:12.251Z"),46164,[],"Up-sized Licensed Auto Loan Account",59397,[[]],"Guam",95814,{_id: 9483,str: "Operations best-of-breed",num: 97082,date: new Date("2018-09-06T04:09:06.970Z"),array: [],obj: {}},{_id: 9484,str: "Group",num: 44043,date: new Date("2018-09-06T11:12:16.339Z"),array: ["Central Frozen",[]],obj: {_id: 9485,str: "Auto Loan Account Fantastic",num: 53454,array: []}}],obj: {_id: 9486,str: "Multi-lateral content",num: 54899,date: new Date("2018-09-06T07:57:30.199Z")}});
    },

    function(coll) {
        return coll.insert({_id: 9487,str: "dynamic",num: 60256,date: new Date("2018-09-06T00:53:53.904Z")});
    },

    function(coll) {
        return coll.insert({_id: 9488,str: "recontextualize",num: 10334,date: new Date("2018-09-06T10:43:57.967Z"),array: [],obj: {_id: 9489,str: "Regional regional Cambridgeshire",num: 30189,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9490,str: "neutral",num: 41911,date: new Date("2018-09-06T00:39:33.103Z"),array: [],obj: {_id: 9491,str: "Rustic Sleek Cotton Bacon Reverse-engineered",num: 27601,date: new Date("2018-09-06T11:06:37.240Z"),array: [new Date("2018-09-06T17:33:30.501Z"),new Date("2018-09-06T07:12:21.171Z"),"ability SAS Bike",87330,new Date("2018-09-06T07:41:53.561Z"),52165,81341,[],"Identity hybrid Credit Card Account","Granite"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9492,str: "back-end Cotton circuit",num: 40414,date: new Date("2018-09-06T04:49:25.940Z"),array: [new Date("2018-09-06T02:35:03.295Z"),3188,"user-facing Practical",71304,new Date("2018-09-06T15:48:00.296Z"),64097,"Bike compress",new Date("2018-09-06T10:07:31.685Z"),[],new Date("2018-09-06T01:53:07.360Z"),50124,[],{_id: 9493,str: "Tools",num: 94085,date: new Date("2018-09-06T02:42:52.236Z"),array: [new Date("2018-09-06T01:42:21.449Z")],obj: {_id: 9494,str: "California",date: new Date("2018-09-06T01:22:06.537Z"),array: [new Date("2018-09-05T20:22:09.791Z"),"innovative Tajikistan flexibility"],obj: {_id: 9495,num: 86062,date: new Date("2018-09-06T07:59:03.597Z"),array: [{_id: 9496,str: "Solomon Islands Dollar Inlet user-facing",num: 1113,date: new Date("2018-09-06T18:22:17.737Z"),obj: {_id: 9497,num: 98470,date: new Date("2018-09-06T06:52:08.703Z"),array: [],obj: {}}},11510,"Cambridgeshire attitude"]}}}],obj: {_id: 9498,date: new Date("2018-09-06T07:28:31.213Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9499,str: "open system Pataca Communications",num: 99802,date: new Date("2018-09-06T08:08:42.408Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9500,str: "reciprocal feed Supervisor",num: 52806,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9501,str: "multi-tasking",num: 11596,date: new Date("2018-09-06T14:48:35.581Z"),array: [],obj: {_id: 9502,str: "Garden Customer Branding",num: 97549,date: new Date("2018-09-06T10:24:49.921Z"),array: ["Generic teal","knowledge base Ergonomic eyeballs","Tennessee optical neural",44046,new Date("2018-09-05T22:37:09.805Z"),65185,"Gloves",new Date("2018-09-06T18:19:38.324Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9503,str: "5th generation Program",date: new Date("2018-09-06T05:12:18.315Z"),array: ["experiences synthesize Handcrafted",72487,70190,new Date("2018-09-06T18:41:07.502Z"),"connecting",["cross-platform"],new Date("2018-09-06T07:51:14.316Z"),42699,new Date("2018-09-06T19:00:33.458Z"),{_id: 9504,str: "Buckinghamshire Marketing",num: 6232,date: new Date("2018-09-05T21:35:35.763Z"),array: [],obj: {}},new Date("2018-09-06T10:23:14.747Z")]});
    },

    function(coll) {
        return coll.insert({_id: 9505,str: "EXE",num: 16380,date: new Date("2018-09-06T03:12:19.977Z"),array: [],obj: {_id: 9506,str: "mint green connect Specialist",num: 88569,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9507,str: "Licensed",num: 88596,date: new Date("2018-09-06T15:19:08.981Z"),array: [70014,"Architect lavender Guam",49202,"transmitter Wooden Coordinator","Concrete","Soap zero tolerance Handcrafted",new Date("2018-09-06T18:54:50.125Z"),new Date("2018-09-06T06:16:50.515Z"),new Date("2018-09-06T01:49:07.509Z")],obj: {_id: 9508,str: "Planner software",num: 65110,date: new Date("2018-09-06T05:59:07.451Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9509,num: 1434,date: new Date("2018-09-06T04:36:00.623Z"),array: ["Generic Metal Tuna",new Date("2018-09-06T10:40:45.968Z"),18308,"panel holistic",29681,[],"Handcrafted Cook Islands Pines",{_id: 9510,str: "connecting SDD",num: 45167,date: new Date("2018-09-05T23:16:49.382Z"),array: [new Date("2018-09-06T10:47:21.793Z")],obj: {}},[],35219,{_id: 9511,str: "Product Small 1080p",date: new Date("2018-09-06T17:06:35.371Z"),array: [],obj: {_id: 9512,str: "Tanzanian Shilling Honduras",num: 97571,obj: {}}},["Circles Bike",new Date("2018-09-06T08:25:12.033Z"),13834,new Date("2018-09-06T06:41:39.375Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 9513,str: "Croatian Kuna knowledge base Pike",num: 56154,date: new Date("2018-09-06T14:35:02.436Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9514,str: "Tuna",date: new Date("2018-09-06T02:25:54.095Z"),array: ["ivory parse",new Date("2018-09-06T05:07:39.853Z"),"tan Graphic Interface",36839,{_id: 9515,str: "Pants",num: 29437,array: [],obj: {_id: 9516,str: "Seamless",num: 11474,date: new Date("2018-09-06T03:54:38.954Z"),obj: {}}},57899,85977,new Date("2018-09-06T02:00:32.864Z"),20574,[{_id: 9517,str: "Cook Islands override Afghanistan",num: 88237,date: new Date("2018-09-06T10:04:37.440Z"),array: [],obj: {_id: 9518,num: 89570,date: new Date("2018-09-06T02:54:36.072Z"),array: [{_id: 9519,str: "Towels Land",num: 14682,date: new Date("2018-09-06T19:37:05.654Z"),obj: {}}],obj: {_id: 9520,str: "Montana",num: 57030,array: [new Date("2018-09-06T10:09:31.572Z"),89203,[],"Awesome","Operations Incredible Liberian Dollar"]}}}],new Date("2018-09-05T22:06:19.393Z"),[53801,"Operative",new Date("2018-09-05T20:55:19.228Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 9521,str: "Field",num: 37199,date: new Date("2018-09-05T23:34:14.431Z"),array: [73112,"Sleek","Creative",[83279,"conglomeration quantifying calculating",new Date("2018-09-06T18:01:40.711Z")],69753,new Date("2018-09-06T16:46:24.013Z"),new Date("2018-09-06T05:32:07.898Z"),{_id: 9522,str: "Lilangeni National Borders",date: new Date("2018-09-06T11:07:49.106Z"),array: [new Date("2018-09-06T02:04:41.737Z"),new Date("2018-09-06T13:43:14.263Z")],obj: {}},"Sleek Fresh Fish"]});
    },

    function(coll) {
        return coll.insert({_id: 9523,str: "interface mobile parsing",num: 54996,array: [65053,"Optimized SSL","ADP Clothing calculate",3232,new Date("2018-09-06T12:20:23.401Z"),{_id: 9524,str: "withdrawal Cordoba Oro",num: 46758,date: new Date("2018-09-06T01:22:21.374Z"),array: [82060,new Date("2018-09-06T10:54:57.651Z"),"RSS e-commerce",70132],obj: {}},{_id: 9525,str: "Borders SMTP",array: []},50323,"fresh-thinking",{_id: 9526,num: 21988,obj: {}}],obj: {_id: 9527,str: "Fantastic",num: 228,date: new Date("2018-09-06T16:51:41.911Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9528,str: "contingency fuchsia process improvement",num: 37086,date: new Date("2018-09-06T09:34:59.803Z"),array: [84638,79489,new Date("2018-09-06T15:52:02.281Z"),"teal collaborative mobile","Buckinghamshire Cape Verde Gorgeous",{_id: 9529,str: "Gorgeous Refined Metal Bike Wooden",num: 53702,date: new Date("2018-09-06T13:47:14.302Z"),array: [],obj: {}},93174,new Date("2018-09-06T19:31:39.157Z"),new Date("2018-09-05T22:07:09.349Z"),new Date("2018-09-06T17:56:35.754Z"),[{_id: 9530,str: "Bike local",num: 24950,date: new Date("2018-09-06T18:40:03.985Z"),array: ["calculate logistical Director",new Date("2018-09-06T13:42:03.040Z")],obj: {_id: 9531,str: "Rubber Analyst",array: [],obj: {}}},"Computers hacking Auto Loan Account"],"flexibility Re-contextualized invoice"]});
    },

    function(coll) {
        return coll.insert({_id: 9532,num: 92288,date: new Date("2018-09-06T05:56:06.993Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9533,str: "efficient",num: 42028,date: new Date("2018-09-06T18:22:04.667Z"),array: [],obj: {_id: 9534,str: "Licensed B2B National",num: 80741,date: new Date("2018-09-06T06:18:32.337Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9535,str: "Accounts Avon",num: 48584,date: new Date("2018-09-06T12:42:36.611Z"),array: [],obj: {_id: 9536,str: "Fantastic Steel Salad interactive",date: new Date("2018-09-06T10:21:49.965Z"),array: [],obj: {_id: 9537,str: "asynchronous white Industrial",num: 74054,date: new Date("2018-09-05T23:54:30.170Z"),array: [97931,23200,"Administrator","Computer supply-chains",new Date("2018-09-06T15:11:51.819Z"),"deposit",35099,[{_id: 9538,num: 27694,date: new Date("2018-09-06T10:26:11.079Z"),obj: {}}],{_id: 9539,str: "tangible"},new Date("2018-09-06T08:57:10.192Z"),{_id: 9540,str: "Salad",num: 50681,array: [],obj: {}},new Date("2018-09-05T21:47:40.636Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 9541,str: "feed withdrawal real-time",num: 94468,date: new Date("2018-09-06T12:11:01.082Z"),array: [],obj: {_id: 9542,date: new Date("2018-09-05T20:58:23.927Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9543,str: "Avon",num: 94255,date: new Date("2018-09-06T03:11:40.528Z"),array: [348,63636,"Keyboard",new Date("2018-09-06T00:19:32.481Z"),[],"bandwidth Investment Account quantify",new Date("2018-09-06T02:02:22.821Z"),{_id: 9544,str: "open-source",num: 85942,date: new Date("2018-09-05T20:25:34.944Z"),array: [63742],obj: {_id: 9545,date: new Date("2018-09-06T19:30:15.026Z")}},new Date("2018-09-05T21:31:04.723Z"),"granular",47063,"sticky multi-state"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9546,num: 17223,date: new Date("2018-09-05T23:20:13.630Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9547,str: "ADP",num: 43562,date: new Date("2018-09-06T08:19:59.508Z"),array: [87754,new Date("2018-09-06T11:52:59.568Z"),new Date("2018-09-06T17:14:01.027Z"),{_id: 9548,num: 30728,date: new Date("2018-09-06T00:32:01.756Z"),obj: {}},"gold solid state",5474,"generating generating Gloves",[],19975,new Date("2018-09-06T12:18:52.918Z")],obj: {_id: 9549,num: 476,date: new Date("2018-09-06T06:19:34.963Z"),array: [],obj: {_id: 9550,str: "global Puerto Rico Infrastructure",date: new Date("2018-09-06T13:36:05.279Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 9551,str: "withdrawal",num: 49643,date: new Date("2018-09-06T15:39:16.933Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9552,str: "mobile Utah Versatile",num: 97647,date: new Date("2018-09-06T02:33:34.498Z"),array: [],obj: {_id: 9553,num: 69460,date: new Date("2018-09-06T18:41:22.678Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9554,str: "Architect Toys Associate",num: 8125,date: new Date("2018-09-06T00:53:50.667Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9555,str: "Clothing Adaptive",num: 10831,array: ["Beauty",32283,"client-driven Legacy",2736,new Date("2018-09-06T14:09:57.449Z"),34523,85555,new Date("2018-09-06T05:32:25.238Z"),"hacking program","Marketing",72205,[],new Date("2018-09-05T23:14:08.836Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9556,str: "maroon infrastructure",date: new Date("2018-09-06T18:51:16.288Z"),obj: {_id: 9557,str: "Accountability",num: 22321,date: new Date("2018-09-06T04:44:43.668Z"),array: [],obj: {_id: 9558,str: "Borders Jewelery Web",num: 68968,date: new Date("2018-09-06T18:56:42.409Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9559,str: "deposit",date: new Date("2018-09-05T21:41:34.535Z"),obj: {_id: 9560,str: "networks portals",num: 42846,array: ["Intelligent Granite",7005,new Date("2018-09-06T17:00:00.592Z"),"Unbranded Fresh",28380,[],new Date("2018-09-06T09:51:27.197Z"),new Date("2018-09-05T21:54:04.444Z"),new Date("2018-09-06T01:08:18.480Z"),15410,"violet Credit Card Account",new Date("2018-09-05T20:33:38.532Z"),"Music",82556,{_id: 9561,str: "Savings Account Handcrafted Frozen Salad harness",num: 17032,date: new Date("2018-09-06T00:04:51.893Z"),array: [],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9562,num: 82430,date: new Date("2018-09-06T00:05:39.332Z"),array: [new Date("2018-09-06T05:53:12.728Z"),new Date("2018-09-06T13:43:56.092Z"),["grey","interface Credit Card Account"],[],91290,"Analyst Soft",{_id: 9563,str: "Electronics Berkshire Handcrafted",num: 73712,date: new Date("2018-09-06T16:54:20.342Z"),array: [63955,94514,new Date("2018-09-06T00:44:45.870Z"),{_id: 9564,str: "bleeding-edge magnetic Pizza",num: 15151,date: new Date("2018-09-06T16:36:06.887Z"),array: [new Date("2018-09-05T23:03:18.981Z")],obj: {}}]},{_id: 9565,str: "Incredible Frozen Table Hat Tasty Cotton Salad",date: new Date("2018-09-06T13:47:58.770Z"),array: [],obj: {_id: 9566,date: new Date("2018-09-05T22:42:35.308Z"),array: ["Senior synthesizing Principal"],obj: {_id: 9567,str: "AGP",num: 80430,obj: {}}}},new Date("2018-09-06T01:41:46.458Z"),"redefine Slovakia (Slovak Republic)",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9568,str: "Cotton Ridges Graphical User Interface",num: 93536,date: new Date("2018-09-06T02:47:42.797Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9569,str: "Somoni demand-driven transmit",num: 18353,date: new Date("2018-09-06T05:59:50.899Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9570,str: "coherent Hungary",num: 49125,date: new Date("2018-09-06T16:17:47.095Z"),array: ["back-end deposit Hat","structure",new Date("2018-09-06T02:26:29.110Z"),[],55834,new Date("2018-09-06T18:44:30.715Z"),44559,8424,{_id: 9571,str: "solid state Infrastructure Checking Account",num: 40847,date: new Date("2018-09-06T10:09:48.455Z"),array: [new Date("2018-09-06T08:11:41.772Z")],obj: {}},"Locks maximize",1812,"Frozen policy"]});
    },

    function(coll) {
        return coll.insert({_id: 9572,str: "Marketing",num: 64688,date: new Date("2018-09-06T07:21:19.872Z"),array: [],obj: {_id: 9573,str: "payment",date: new Date("2018-09-06T03:36:54.331Z"),array: [11513,new Date("2018-09-06T13:01:33.711Z"),new Date("2018-09-06T18:49:47.658Z"),678,{_id: 9574,str: "Bridge",num: 30895,obj: {_id: 9575,date: new Date("2018-09-06T07:47:56.797Z"),array: [],obj: {}}},"hierarchy Home Loan Account",new Date("2018-09-06T01:32:32.857Z"),["hack Orchestrator homogeneous",new Date("2018-09-06T18:53:31.984Z"),{_id: 9576,str: "Lebanon Texas",num: 76810,date: new Date("2018-09-06T15:22:14.900Z"),obj: {_id: 9577,date: new Date("2018-09-06T07:52:31.851Z")}},"port Intelligent explicit"],19803,{_id: 9578,str: "program Ouguiya",array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9579,str: "payment Intelligent Frozen Computer",num: 90216,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9580,str: "Washington",num: 39052,date: new Date("2018-09-06T09:38:22.889Z"),array: ["Lek",64132,"Metal Profit-focused",new Date("2018-09-06T13:14:27.385Z"),new Date("2018-09-06T00:14:40.479Z"),"Bedfordshire",2595,40510,new Date("2018-09-05T22:10:28.815Z"),[new Date("2018-09-06T15:01:11.444Z"),{_id: 9581,str: "recontextualize Chicken",num: 88686,date: new Date("2018-09-06T10:10:23.049Z"),obj: {}},82439]]});
    },

    function(coll) {
        return coll.insert({_id: 9582,str: "Utah primary plum",num: 89614,date: new Date("2018-09-05T21:44:33.410Z"),array: [],obj: {_id: 9583,num: 61547,array: [],obj: {_id: 9584,str: "robust Viaduct",date: new Date("2018-09-06T05:52:16.193Z"),array: [66085,"payment Quality-focused back-end",new Date("2018-09-06T13:26:43.213Z"),["Industrial",95663,new Date("2018-09-06T14:40:59.354Z")],{_id: 9585,str: "Salad Applications",num: 33685,date: new Date("2018-09-06T12:23:22.086Z"),array: [[],"Indonesia"],obj: {}},72879,new Date("2018-09-06T07:56:28.726Z"),new Date("2018-09-06T04:33:32.816Z"),"matrix",11328,"payment azure",[]],obj: {_id: 9586,str: "attitude-oriented",num: 23483,date: new Date("2018-09-06T13:06:42.866Z"),array: [[new Date("2018-09-06T13:23:33.869Z"),{_id: 9587,num: 86007,date: new Date("2018-09-06T10:48:05.742Z")},28563]]}}}});
    },

    function(coll) {
        return coll.insert({_id: 9588,str: "online Saint Kitts and Nevis",num: 33828,date: new Date("2018-09-06T08:56:46.089Z"),array: [[],10937,16974,"world-class Investor","Human integrated",{_id: 9589,str: "Group Fantastic Granite Salad Practical",num: 25018,date: new Date("2018-09-06T14:53:51.753Z"),array: [],obj: {_id: 9590,str: "Ridge well-modulated Usability",num: 53640,obj: {_id: 9591,str: "Salad Credit Card Account mesh",num: 15018,date: new Date("2018-09-06T10:42:03.561Z"),array: []}}},new Date("2018-09-06T18:26:30.232Z"),{_id: 9592,str: "adapter paradigms",num: 57203,date: new Date("2018-09-06T08:40:00.291Z"),array: [new Date("2018-09-06T07:54:05.891Z"),60679]},new Date("2018-09-06T05:49:26.126Z"),new Date("2018-09-06T15:29:44.153Z"),43795,"Mountains Investor",[{_id: 9593,array: [],obj: {}}],14471],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9594,str: "deposit payment Soft",num: 98031,date: new Date("2018-09-06T13:37:57.330Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9595,str: "optical payment definition",num: 66399,date: new Date("2018-09-06T01:39:19.596Z"),array: [],obj: {_id: 9596,str: "innovate",array: ["Principal value-added Ameliorated",new Date("2018-09-06T05:19:41.101Z"),76253,"1080p Communications schemas",new Date("2018-09-06T05:40:36.994Z"),52027,new Date("2018-09-06T18:48:33.493Z"),{_id: 9597,str: "Incredible Frozen Bacon",num: 91303,date: new Date("2018-09-05T23:05:10.673Z"),array: ["orchid Hat",{_id: 9598,num: 44264,date: new Date("2018-09-06T04:53:50.880Z"),array: [],obj: {}},4273]},[new Date("2018-09-06T16:59:02.733Z"),46571],55912,"bus Sri Lanka Rupee Fresh"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9599,str: "approach Practical",num: 84008,date: new Date("2018-09-06T00:03:21.909Z")});
    },

    function(coll) {
        return coll.insert({_id: 9600,num: 20298,date: new Date("2018-09-06T09:19:34.388Z"),array: [],obj: {_id: 9601,str: "New Hampshire index capacitor",num: 69105,date: new Date("2018-09-06T19:03:03.720Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9602,str: "mobile core",num: 74901,date: new Date("2018-09-06T02:38:45.544Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 9603,num: 92778,date: new Date("2018-09-05T20:39:41.686Z"),array: [],obj: {_id: 9604,str: "generate",num: 85791,date: new Date("2018-09-06T08:27:06.075Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9605,str: "Lead",num: 57153,date: new Date("2018-09-06T18:27:41.567Z"),array: [new Date("2018-09-05T22:59:43.540Z"),"Garden",new Date("2018-09-06T13:26:30.023Z"),new Date("2018-09-05T22:10:11.749Z"),69482,53435,94417,75802,"card back up Table","Locks",864,[]],obj: {_id: 9606,str: "array",num: 22186,date: new Date("2018-09-06T01:39:03.886Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9607,str: "Cove Outdoors Berkshire",num: 40244,date: new Date("2018-09-05T21:06:51.099Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 9608,str: "deposit",num: 56801,date: new Date("2018-09-06T15:20:19.770Z"),array: [],obj: {_id: 9609,str: "Keyboard Industrial Games",num: 71678,date: new Date("2018-09-06T12:11:57.150Z"),array: [94771,new Date("2018-09-06T01:00:54.838Z"),"Soap",[{_id: 9610,str: "primary Buckinghamshire Movies",date: new Date("2018-09-06T19:07:10.136Z"),array: [],obj: {}}],51433,new Date("2018-09-05T20:04:43.654Z"),"indexing Reduced","IB","Incredible Fresh Bacon technologies Checking Account",[],[49579,{_id: 9611,num: 95806},"invoice",new Date("2018-09-06T06:49:43.932Z")],{_id: 9612,str: "withdrawal Markets Practical",date: new Date("2018-09-06T06:30:16.085Z"),obj: {}},62814,new Date("2018-09-06T15:44:30.784Z")],obj: {_id: 9613,str: "Nepalese Rupee",num: 68711,date: new Date("2018-09-06T04:06:22.965Z"),array: [],obj: {_id: 9614,num: 96523,array: [new Date("2018-09-06T01:13:55.620Z")]}}}});
    },

    function(coll) {
        return coll.insert({_id: 9615,str: "Maine Central",num: 50375,date: new Date("2018-09-06T11:02:36.341Z"),array: [],obj: {_id: 9616,num: 99664,date: new Date("2018-09-06T17:46:14.849Z"),array: [37771,new Date("2018-09-06T06:55:35.370Z"),new Date("2018-09-06T16:36:38.370Z"),93353,new Date("2018-09-06T00:40:24.350Z"),"sensor",[],new Date("2018-09-06T01:20:55.170Z"),55263,"Avon"],obj: {_id: 9617,str: "Cambridgeshire Rubber",num: 9055,date: new Date("2018-09-06T11:20:41.695Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 9618,str: "hack hacking",num: 68235,date: new Date("2018-09-05T23:33:25.484Z"),array: [],obj: {_id: 9619,str: "online Utah sky blue",num: 72325,date: new Date("2018-09-06T17:03:57.164Z"),array: [[],35098,"Small Metal Ball Producer","Avon Jewelery",new Date("2018-09-06T04:28:24.171Z"),"driver Overpass bypassing",[],62966,{_id: 9620,str: "Facilitator",num: 3460,date: new Date("2018-09-06T12:00:12.569Z"),array: [59148,new Date("2018-09-06T11:46:12.076Z"),"Officer"]},new Date("2018-09-05T20:44:00.018Z")],obj: {_id: 9621,num: 34972,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9622,str: "mission-critical solutions reciprocal",num: 92356,date: new Date("2018-09-06T00:20:15.756Z"),array: [9514,"Assistant",new Date("2018-09-06T11:01:50.332Z"),"project Shirt",new Date("2018-09-06T01:15:15.580Z"),9542,90499,[new Date("2018-09-05T19:57:32.981Z"),"Assistant"],12777,{_id: 9623,str: "content FTP",num: 23869,date: new Date("2018-09-06T17:46:36.144Z"),array: [],obj: {_id: 9624,str: "Colorado",date: new Date("2018-09-05T23:55:18.949Z"),obj: {}}},[17404],"Cotton Auto Loan Account Health"],obj: {_id: 9625,num: 31664,date: new Date("2018-09-06T15:15:01.666Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9626,str: "Salad",num: 37814,date: new Date("2018-09-06T08:03:11.479Z"),array: ["transmitting pixel",new Date("2018-09-06T09:26:23.221Z"),65707,50512,{_id: 9627,str: "Cheese Bedfordshire",date: new Date("2018-09-06T01:31:10.998Z"),array: [[],{_id: 9628,str: "bluetooth",num: 22935,date: new Date("2018-09-06T06:22:47.472Z"),array: [],obj: {}},new Date("2018-09-06T11:57:14.137Z")],obj: {_id: 9629,str: "Jersey",num: 76160,obj: {}}},"Games Forward","dynamic",60262,25976],obj: {_id: 9630,str: "Auto Loan Account Ireland redundant",num: 90776,array: [new Date("2018-09-06T16:03:18.733Z"),"Small Concrete Salad orange deposit",new Date("2018-09-06T02:21:59.395Z")],obj: {_id: 9631,num: 8615,array: [{_id: 9632,num: 54185,date: new Date("2018-09-05T22:35:58.073Z"),obj: {}},67597,{_id: 9633,date: new Date("2018-09-06T10:12:25.016Z"),array: []}]}}});
    },

    function(coll) {
        return coll.insert({_id: 9634,num: 40643,date: new Date("2018-09-06T08:36:27.348Z"),array: [new Date("2018-09-06T17:37:59.808Z"),[],"model",55620,"invoice Grocery",75842,[],29212,new Date("2018-09-06T06:09:02.992Z"),new Date("2018-09-06T00:15:42.637Z"),{_id: 9635,str: "communities Buckinghamshire Practical Wooden Tuna",num: 242,date: new Date("2018-09-06T18:41:29.554Z"),array: [{_id: 9636,str: "Strategist Savings Account",array: [],obj: {}}],obj: {_id: 9637,num: 59072,date: new Date("2018-09-06T19:48:34.002Z"),obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9638,str: "Cambridgeshire regional",num: 57451,date: new Date("2018-09-06T17:00:43.777Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9639,str: "Berkshire synthesize Infrastructure",num: 44581,date: new Date("2018-09-06T14:03:28.885Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9640,str: "Prairie",num: 15675,date: new Date("2018-09-06T05:15:03.735Z"),array: ["Salad",[],10880,{_id: 9641,str: "Serbia",num: 81597,array: [new Date("2018-09-05T22:17:56.062Z"),new Date("2018-09-06T18:06:44.130Z"),new Date("2018-09-06T17:56:05.013Z"),77423,"deliver Handcrafted Cheese","Manager Checking Account JBOD"],obj: {}},[],68000,"e-commerce",new Date("2018-09-06T14:35:51.292Z"),45090,"frictionless generate projection"],obj: {_id: 9642,num: 16429,date: new Date("2018-09-06T10:23:24.626Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9643,str: "Circles Borders XML",num: 85522,date: new Date("2018-09-06T17:20:05.675Z"),array: [],obj: {_id: 9644,str: "microchip Movies Jewelery",num: 36097,date: new Date("2018-09-06T12:33:46.075Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9645,str: "teal",num: 45961,date: new Date("2018-09-06T10:39:22.593Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 9646,str: "Dalasi",num: 96146,date: new Date("2018-09-06T15:56:55.541Z"),array: ["bandwidth Singapore Dollar deposit","Rustic Surinam Dollar",new Date("2018-09-06T01:04:23.361Z"),25898,["Riel SSL",59446,[]],new Date("2018-09-06T08:41:40.409Z"),15777,new Date("2018-09-06T18:39:58.545Z"),new Date("2018-09-05T21:05:48.489Z"),"panel Personal Loan Account Drive",{_id: 9647,str: "drive SDD",date: new Date("2018-09-06T13:37:00.030Z"),array: [],obj: {_id: 9648,str: "Auto Loan Account",num: 52186,date: new Date("2018-09-06T01:24:57.942Z"),array: [19023,{_id: 9649,str: "olive integrated",num: 80227,date: new Date("2018-09-06T06:22:02.804Z"),array: [],obj: {}}],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 9650,str: "Fresh Chair Solutions",num: 90209,date: new Date("2018-09-06T10:02:40.909Z"),array: ["deposit Buckinghamshire intermediate",91468,{_id: 9651,str: "Health",date: new Date("2018-09-06T12:56:07.949Z"),obj: {}},new Date("2018-09-06T06:48:17.217Z"),7618,"user-centric orchid Sudanese Pound",3706,96058,new Date("2018-09-06T13:09:15.545Z"),new Date("2018-09-06T05:17:09.635Z"),"generate North Carolina",[[],7126],[]]});
    },

    function(coll) {
        return coll.insert({_id: 9652,str: "engage Cambridgeshire needs-based",num: 16052,date: new Date("2018-09-06T19:26:39.672Z"),array: [new Date("2018-09-06T08:16:59.496Z"),38130,"bluetooth Down-sized",26612,new Date("2018-09-06T01:28:05.577Z"),[],"Buckinghamshire",81169,{_id: 9653,str: "navigate",num: 21449,array: ["red"],obj: {_id: 9654,str: "intermediate",num: 83378,date: new Date("2018-09-06T01:30:21.952Z"),array: [],obj: {}}},{_id: 9655,date: new Date("2018-09-06T05:03:06.027Z"),array: [new Date("2018-09-06T17:17:25.438Z"),new Date("2018-09-06T13:49:01.033Z"),{_id: 9656,str: "Representative",date: new Date("2018-09-06T02:24:17.308Z"),array: ["methodical Director invoice"],obj: {_id: 9657,num: 64839,date: new Date("2018-09-06T04:20:39.866Z")}},[]],obj: {_id: 9658,str: "Avon Customer-focused capacitor",num: 66356}},"analyzing Concrete",{_id: 9659,str: "deliverables Games Borders",num: 69282,date: new Date("2018-09-06T06:46:20.979Z"),array: [],obj: {_id: 9660,num: 20922,date: new Date("2018-09-06T07:54:03.684Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9661,str: "open system",num: 85452,date: new Date("2018-09-06T04:55:43.799Z"),array: [],obj: {_id: 9662,str: "Switchable",num: 60339,date: new Date("2018-09-06T06:13:10.717Z"),array: [27776,28820,"Investment Account deposit withdrawal",new Date("2018-09-06T01:16:53.481Z"),42242,36813,{_id: 9663,num: 17634,array: [{_id: 9664,str: "Brooks extranet Senior",date: new Date("2018-09-06T05:46:16.622Z")}],obj: {}},new Date("2018-09-06T16:33:47.309Z"),[],"methodology Ball",{_id: 9665,str: "Metal",date: new Date("2018-09-05T21:06:30.580Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9666,str: "ubiquitous withdrawal",num: 74301,date: new Date("2018-09-06T15:11:06.952Z"),array: [],obj: {_id: 9667,str: "European Unit of Account 17(E.U.A.-17) Buckinghamshire",num: 84200,date: new Date("2018-09-06T11:22:04.189Z"),array: [{_id: 9668,str: "Usability",date: new Date("2018-09-06T02:08:11.313Z"),array: [71579,83399,new Date("2018-09-05T21:36:15.825Z"),"networks hack"]},[48036],[],{_id: 9669,array: [],obj: {}},"needs-based",13291,new Date("2018-09-06T01:38:05.533Z"),new Date("2018-09-06T09:30:29.058Z"),{_id: 9670,str: "impactful navigating Movies",num: 83015,date: new Date("2018-09-06T10:09:19.826Z"),obj: {}},"Personal Loan Account Cambridgeshire",new Date("2018-09-05T23:59:27.678Z"),"Bike Colombia"],obj: {_id: 9671,str: "Regional",num: 21916,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9672,str: "web services parse deposit",num: 1830,date: new Date("2018-09-06T10:29:19.307Z"),array: [26956,"Intelligent",new Date("2018-09-06T12:17:59.261Z"),["Personal Loan Account"],"New York",new Date("2018-09-06T19:22:26.077Z"),new Date("2018-09-06T19:29:28.790Z"),49167,"cyan",{_id: 9673,str: "Home Loan Account disintermediate",num: 53245,date: new Date("2018-09-06T08:43:18.777Z"),array: [],obj: {}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 9674,num: 84379,date: new Date("2018-09-06T13:35:03.187Z"),array: [89326,new Date("2018-09-06T08:08:00.721Z"),new Date("2018-09-05T21:52:50.219Z"),"website","Auto Loan Account compressing",84173,new Date("2018-09-06T12:36:26.332Z"),11331,[],{_id: 9675,str: "SQL Bacon Savings Account",num: 89591,date: new Date("2018-09-06T04:14:05.003Z"),array: ["Home Loan Account Courts Buckinghamshire",["Tools Sausages Bike",new Date("2018-09-05T23:15:39.244Z"),82434,{_id: 9676,str: "auxiliary navigating Knoll",num: 90963,date: new Date("2018-09-06T14:29:25.400Z"),obj: {_id: 9677,str: "invoice FTP Bedfordshire",num: 21493,date: new Date("2018-09-06T11:25:03.733Z"),obj: {_id: 9678,str: "Regional sticky hierarchy",date: new Date("2018-09-06T13:24:42.360Z"),array: [],obj: {}}}}]],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 9679,str: "Greenland Automotive",num: 53162,date: new Date("2018-09-06T15:10:00.903Z"),obj: {_id: 9680,str: "Rue",date: new Date("2018-09-06T04:54:45.173Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9681,str: "orchid",num: 73576,date: new Date("2018-09-05T20:07:05.365Z"),array: [34369,new Date("2018-09-06T00:18:13.212Z"),"bus Greece",new Date("2018-09-05T23:28:17.682Z"),[90161],{_id: 9682,num: 48923,date: new Date("2018-09-05T23:30:12.193Z"),array: []},58268,"Cheese Savings Account success","tan","generate Down-sized Cotton",[],new Date("2018-09-06T09:10:19.764Z")],obj: {_id: 9683,str: "Investment Account",num: 89001,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9684,str: "Internal",num: 92099,date: new Date("2018-09-06T08:27:41.663Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9685,str: "Anguilla Lock",num: 69679,date: new Date("2018-09-06T14:06:01.198Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9686,str: "Martinique drive violet",num: 43001,date: new Date("2018-09-06T03:43:23.011Z"),obj: {_id: 9687,str: "Fantastic yellow payment",num: 71952,date: new Date("2018-09-06T12:25:23.950Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9688,num: 65967,date: new Date("2018-09-06T13:21:48.202Z"),array: [40181,10442,new Date("2018-09-06T19:32:48.786Z"),[],new Date("2018-09-06T14:06:29.686Z"),"Tunnel Incredible",new Date("2018-09-06T07:39:02.813Z"),"grow ivory national","Dong",61181,["Technician Corporate",80552],{_id: 9689,str: "visionary",num: 90122,date: new Date("2018-09-06T00:15:37.293Z"),array: [[]],obj: {_id: 9690,str: "modular",date: new Date("2018-09-06T09:27:25.009Z"),obj: {}}},new Date("2018-09-05T22:20:48.319Z"),{_id: 9691,str: "indexing",num: 64560,array: [],obj: {_id: 9692,num: 17193,array: [new Date("2018-09-06T11:16:11.118Z")],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 9693,str: "Ohio SDD Practical",num: 23531,date: new Date("2018-09-06T09:05:54.862Z")});
    },

    function(coll) {
        return coll.insert({_id: 9694,str: "bluetooth",array: [[],"Maryland bypassing Buckinghamshire",new Date("2018-09-06T08:46:35.929Z"),33486,12755,new Date("2018-09-06T13:48:11.827Z"),"Practical overriding bus",11295,"Savings Account Boliviano Mvdol protocol",new Date("2018-09-06T08:15:58.443Z")],obj: {_id: 9695,str: "Clothing AGP",num: 87635,date: new Date("2018-09-06T02:59:43.994Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9696,str: "Mount Gorgeous",num: 78265,array: [37199,98316,new Date("2018-09-06T06:24:47.583Z"),{_id: 9697,str: "Creative next-generation",num: 22833,array: [new Date("2018-09-06T08:32:13.927Z")],obj: {}},new Date("2018-09-06T19:54:07.403Z"),"neural-net",new Date("2018-09-06T07:50:40.885Z"),new Date("2018-09-06T06:58:12.659Z"),[["holistic Barbados Dollar","Legacy payment Checking Account","holistic Borders Car","turn-key Tools Handmade"]],"transitional tertiary",30313,{_id: 9698,num: 24749,date: new Date("2018-09-06T00:59:08.799Z"),array: [],obj: {}},2035],obj: {_id: 9699,str: "Cuba Bolivar Fuerte Savings Account",date: new Date("2018-09-06T08:20:32.413Z"),array: [],obj: {_id: 9700,str: "Steel teal Arkansas",num: 12123,date: new Date("2018-09-05T22:07:29.240Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 9701,str: "gold copy",num: 37360,date: new Date("2018-09-06T15:54:04.239Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9702,str: "Money Market Account Maine",num: 60770,date: new Date("2018-09-06T19:31:21.391Z"),array: [new Date("2018-09-06T13:08:40.917Z"),54210,4697,"Movies",[30230,new Date("2018-09-06T18:52:18.574Z"),"Massachusetts Corporate Branding",new Date("2018-09-06T11:25:05.403Z")],[{_id: 9703,num: 7729,array: [[],"Dynamic withdrawal"],obj: {}},{_id: 9704,str: "program",num: 93236,date: new Date("2018-09-05T20:27:54.759Z"),array: [],obj: {}}],"encryption Saint Helena Pound"]});
    },

    function(coll) {
        return coll.insert({_id: 9705,num: 29203,date: new Date("2018-09-06T14:11:23.570Z"),array: [new Date("2018-09-06T10:40:20.777Z"),"Sleek Granite Cheese",35745,new Date("2018-09-05T23:22:12.003Z"),{_id: 9706,str: "Soft transmitting",num: 17297,array: [],obj: {}},52445,"Technician Specialist copy",{_id: 9707,str: "Graphical User Interface",date: new Date("2018-09-06T00:32:13.682Z"),obj: {}},[new Date("2018-09-06T03:04:19.804Z"),[29958]],36349,{_id: 9708,str: "card applications",date: new Date("2018-09-05T23:07:00.541Z"),array: []},{_id: 9709,str: "upward-trending Rustic capacity",num: 13057,date: new Date("2018-09-06T07:34:47.807Z"),array: [],obj: {_id: 9710,num: 84189,date: new Date("2018-09-06T08:50:44.519Z"),array: [new Date("2018-09-06T14:23:56.294Z"),"calculate",[new Date("2018-09-06T17:18:52.403Z")]],obj: {_id: 9711,str: "Designer navigate Connecticut",num: 27223,array: []}}},"Practical action-items"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9712,str: "Planner Sleek",date: new Date("2018-09-05T23:25:25.681Z"),array: [[],35613,["Regional",{_id: 9713,str: "Health e-business",num: 67585,array: [new Date("2018-09-05T22:02:26.636Z"),52154,25371,"IB Checking Account Engineer"],obj: {_id: 9714,str: "Interactions Adaptive metrics",num: 66882,date: new Date("2018-09-06T11:18:38.019Z"),array: [],obj: {}}}],new Date("2018-09-06T02:06:25.114Z"),"driver","background Auto Loan Account THX",new Date("2018-09-06T08:32:24.716Z"),75525,{_id: 9715,str: "generate Handmade Steel Hat Computers",num: 42913,date: new Date("2018-09-06T12:49:05.991Z"),array: []},{_id: 9716,num: 9078,date: new Date("2018-09-06T08:46:07.180Z"),array: [new Date("2018-09-05T23:24:14.671Z")],obj: {}},new Date("2018-09-06T02:41:24.686Z")],obj: {_id: 9717,str: "Lock",num: 67657,date: new Date("2018-09-06T12:20:31.839Z"),obj: {_id: 9718,str: "Agent Sleek Soft Keyboard",date: new Date("2018-09-05T22:01:32.396Z"),array: ["Fantastic",[41966,new Date("2018-09-06T06:53:20.650Z")]]}}});
    },

    function(coll) {
        return coll.insert({_id: 9719,str: "Turks and Caicos Islands",array: [],obj: {_id: 9720,str: "firmware Grocery Checking Account",num: 43842,date: new Date("2018-09-06T08:34:58.153Z"),array: [new Date("2018-09-05T23:52:10.543Z"),{_id: 9721,str: "Cambridgeshire wireless",num: 12640,date: new Date("2018-09-06T03:18:07.101Z"),array: ["Maine ADP Radial",595]},new Date("2018-09-06T07:42:01.024Z"),6080,"Cambridgeshire",59172,"Avon bypass",new Date("2018-09-06T11:48:31.505Z"),"mobile Gloves",[],{_id: 9722,str: "Small",num: 46123,date: new Date("2018-09-06T05:03:46.645Z"),array: [[],{_id: 9723,num: 51120,date: new Date("2018-09-06T19:21:12.017Z"),array: [new Date("2018-09-06T17:58:52.454Z")],obj: {}}],obj: {}},[],"application multi-tasking copying"]}});
    },

    function(coll) {
        return coll.insert({_id: 9724,str: "Awesome Fresh Pizza",num: 73206,date: new Date("2018-09-06T15:44:06.900Z"),array: [],obj: {_id: 9725,num: 73015,date: new Date("2018-09-06T02:31:50.815Z"),obj: {_id: 9726,str: "Handmade Concrete Chicken calculating discrete",num: 75023,date: new Date("2018-09-06T17:22:22.901Z"),array: [new Date("2018-09-06T00:03:40.815Z"),85611,"Graphic Interface Northern Mariana Islands",[new Date("2018-09-06T14:14:48.277Z")],60870,"Soft auxiliary THX",{_id: 9727,str: "Hawaii Industrial",date: new Date("2018-09-06T17:07:16.887Z"),array: [],obj: {_id: 9728,num: 77784,array: [],obj: {}}},new Date("2018-09-06T07:21:29.859Z"),"RSS Montserrat workforce",42796,{_id: 9729,str: "Falkland Islands Pound",num: 3031,date: new Date("2018-09-06T01:01:33.924Z")},92788,74650]}}});
    },

    function(coll) {
        return coll.insert({_id: 9730,str: "parsing paradigms knowledge user",num: 40331,date: new Date("2018-09-05T23:28:53.649Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9731,str: "Stand-alone Credit Card Account",num: 45538,array: ["Direct",{_id: 9732,str: "mesh",num: 4952,date: new Date("2018-09-06T02:32:13.867Z"),obj: {}},"Money Market Account morph",36599,10160,[],"feed Inverse",new Date("2018-09-06T05:48:02.234Z"),new Date("2018-09-05T20:01:12.204Z"),{_id: 9733,str: "Personal Loan Account",num: 68394,date: new Date("2018-09-05T23:57:40.445Z"),array: ["complexity Integrated Sleek",new Date("2018-09-06T19:18:21.093Z")],obj: {_id: 9734,num: 69626,date: new Date("2018-09-06T09:02:48.870Z"),array: []}},"Generic Concrete Keyboard Keyboard efficient",23040,45200],obj: {_id: 9735,str: "lime Sierra Leone",date: new Date("2018-09-06T13:09:27.300Z"),array: ["IB deposit",[],new Date("2018-09-06T15:23:02.287Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 9736,str: "Senior parse",num: 83266,date: new Date("2018-09-06T10:19:26.672Z"),array: [84595,[],"Knoll New Zealand invoice",new Date("2018-09-06T12:28:19.981Z"),22914,new Date("2018-09-06T06:10:02.598Z"),93258,"24/7 Credit Card Account violet",{_id: 9737,date: new Date("2018-09-06T14:15:13.753Z"),obj: {_id: 9738,str: "Dynamic Integration",num: 96542,date: new Date("2018-09-06T17:46:06.674Z"),array: ["Michigan Cambridgeshire fuchsia","Malawi blue"]}},28676,"Steel",new Date("2018-09-06T07:30:47.213Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 9739,str: "payment panel",num: 50705,obj: {_id: 9740,str: "next generation",num: 77324,date: new Date("2018-09-06T00:32:36.012Z"),array: ["Sports Guyana orchid",new Date("2018-09-05T23:13:06.773Z"),91994,21649,[],new Date("2018-09-06T18:05:43.598Z"),8655,{_id: 9741,num: 64524,date: new Date("2018-09-06T02:33:11.212Z"),array: ["Usability Garden Games",new Date("2018-09-06T11:16:15.796Z"),63741],obj: {_id: 9742,str: "cross-platform",num: 18855,date: new Date("2018-09-06T04:41:53.170Z"),obj: {}}},new Date("2018-09-06T10:45:42.510Z"),"Malawi tan bricks-and-clicks"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9743,str: "capacitor Specialist",num: 55940,date: new Date("2018-09-06T05:38:38.031Z"),array: [47331,new Date("2018-09-06T08:35:49.460Z"),"Guernsey",68078,new Date("2018-09-06T06:34:33.934Z"),[],"yellow Canadian Dollar driver"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9744,str: "Small Loop",num: 90307,date: new Date("2018-09-06T13:37:48.536Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9745,str: "hack deposit approach",num: 91141,date: new Date("2018-09-05T21:53:22.711Z"),array: [48488,{_id: 9746,str: "SMS",date: new Date("2018-09-05T20:02:21.780Z"),array: [],obj: {}},new Date("2018-09-06T10:26:33.678Z"),"Global sensor",new Date("2018-09-06T16:55:15.154Z"),86912,"protocol",[],"Roads",42191],obj: {_id: 9747,str: "definition Graphical User Interface",num: 88543,obj: {_id: 9748,str: "coherent system",num: 45018,date: new Date("2018-09-06T08:18:16.558Z"),array: [21915]}}});
    },

    function(coll) {
        return coll.insert({_id: 9749,str: "Corporate program Park",num: 86777,date: new Date("2018-09-06T16:19:13.950Z"),array: ["Avon",new Date("2018-09-06T16:19:40.487Z"),[{_id: 9750,str: "Administrator microchip real-time",num: 62593,date: new Date("2018-09-06T01:26:31.312Z"),obj: {}},new Date("2018-09-05T22:55:07.691Z"),70504,"Streamlined Fantastic Wooden Gloves",{_id: 9751,str: "Won Bedfordshire",num: 62253,date: new Date("2018-09-06T04:10:14.536Z"),array: [],obj: {_id: 9752,str: "Bedfordshire fresh-thinking forecast",num: 87489,date: new Date("2018-09-05T22:03:24.945Z"),array: [],obj: {}}}],68880,32188,"Yuan Renminbi calculate Berkshire",[new Date("2018-09-05T23:53:35.528Z"),4269,[new Date("2018-09-06T14:31:11.709Z"),{_id: 9753,array: ["bluetooth",73743]},"artificial intelligence"]],86471],obj: {_id: 9754,num: 20960,date: new Date("2018-09-06T00:08:43.742Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9755,str: "leading-edge copying",num: 2208,date: new Date("2018-09-06T06:34:04.203Z"),array: [77480,98435,"Small Concrete Soap","plum software",new Date("2018-09-06T12:03:03.335Z"),85465,new Date("2018-09-05T23:36:28.086Z"),new Date("2018-09-06T15:40:41.197Z"),46054,new Date("2018-09-06T12:17:30.406Z"),{_id: 9756,str: "International Home Loan Account",num: 57557,date: new Date("2018-09-06T11:25:28.333Z"),array: [],obj: {_id: 9757,str: "Configuration Central African Republic"}}],obj: {_id: 9758,str: "architectures payment",num: 3992,date: new Date("2018-09-06T05:47:27.155Z"),array: ["withdrawal application payment"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9759,str: "bluetooth",date: new Date("2018-09-06T10:28:44.817Z"),array: ["protocol Implementation","interfaces circuit Cyprus",62623,new Date("2018-09-06T02:26:35.594Z"),{_id: 9760,str: "Rubber Licensed",num: 92673,date: new Date("2018-09-05T20:00:52.917Z"),array: [],obj: {_id: 9761,str: "Robust granular",num: 65141,date: new Date("2018-09-06T15:41:32.556Z")}},71843,"Marketing Borders interface",{_id: 9762,str: "grey JBOD Sleek Granite Chicken",num: 47993,date: new Date("2018-09-06T10:20:49.446Z"),array: [[82587,new Date("2018-09-06T15:32:56.271Z"),99264],new Date("2018-09-06T00:27:09.096Z")],obj: {_id: 9763,num: 66826,array: [],obj: {}}},"visualize Reverse-engineered",[new Date("2018-09-06T10:05:37.475Z")],new Date("2018-09-06T14:15:13.915Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9764,str: "Unbranded Tugrik",num: 37274,date: new Date("2018-09-05T21:21:24.349Z"),obj: {_id: 9765,date: new Date("2018-09-06T06:31:55.533Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9766,str: "Refined",num: 9812,date: new Date("2018-09-05T22:38:50.256Z"),array: [new Date("2018-09-05T20:51:29.005Z"),93487,"Iceland Krona quantifying Bacon",{_id: 9767,str: "Buckinghamshire withdrawal",num: 67954,date: new Date("2018-09-05T20:33:04.888Z"),array: [],obj: {_id: 9768,str: "salmon gold driver",num: 21464,date: new Date("2018-09-06T05:33:45.673Z"),array: [],obj: {_id: 9769,str: "Benin Applications Chair",num: 16895}}},"invoice Cotton Regional",60700,new Date("2018-09-06T13:11:02.654Z"),[],"back up pixel",new Date("2018-09-05T21:44:44.326Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9770,str: "Lakes Dynamic back up",num: 37055,date: new Date("2018-09-06T04:33:08.343Z"),array: ["Borders","Plastic",68913,"out-of-the-box expedite",34304,new Date("2018-09-06T15:15:45.416Z"),66697,new Date("2018-09-06T02:00:39.155Z"),44184],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9771,str: "generate Gorgeous Concrete Chair Health",num: 60065,date: new Date("2018-09-06T02:29:01.320Z"),obj: {_id: 9772,str: "override benchmark reciprocal",num: 19979,date: new Date("2018-09-06T17:02:41.021Z"),array: [],obj: {_id: 9773,num: 79361,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 9774,str: "Handmade Frozen Chair",num: 32939,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9775,str: "compressing B2C",num: 40740,date: new Date("2018-09-06T07:12:05.957Z"),array: [[],new Date("2018-09-05T22:55:01.139Z"),{_id: 9776,str: "Facilitator global",num: 25533,array: [],obj: {_id: 9777,str: "SQL New Jersey",num: 80455,date: new Date("2018-09-06T17:14:51.211Z")}},new Date("2018-09-05T21:40:14.894Z"),6745,"New Mexico Antarctica (the territory South of 60 deg S)",94854,"Personal Loan Account Wooden","Fantastic Refined",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9778,str: "transmitting Toys",num: 19426,date: new Date("2018-09-06T04:53:24.229Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9779,str: "Shoes",num: 67112,date: new Date("2018-09-06T06:44:05.813Z"),array: [42678,[],"streamline Generic",new Date("2018-09-06T17:25:47.234Z"),"Berkshire",new Date("2018-09-06T02:38:31.637Z"),55836,85166,70091,new Date("2018-09-06T01:47:36.126Z"),{_id: 9780,str: "Function-based Plastic tan",num: 26503,date: new Date("2018-09-06T19:53:17.818Z"),array: ["Libyan Arab Jamahiriya",[],{_id: 9781,str: "calculating",num: 16552,date: new Date("2018-09-06T11:06:53.410Z"),array: ["Texas",new Date("2018-09-06T10:10:34.135Z"),new Date("2018-09-05T22:00:50.679Z"),{_id: 9782,str: "asynchronous",num: 20480,obj: {_id: 9783,str: "Division Dalasi Cedi",date: new Date("2018-09-06T12:36:10.358Z"),obj: {}}}],obj: {_id: 9784,date: new Date("2018-09-05T20:58:08.736Z"),array: []}}],obj: {}},"Refined Fresh Table white"]});
    },

    function(coll) {
        return coll.insert({_id: 9785,str: "Small Granite Mouse Strategist",num: 26697,date: new Date("2018-09-05T21:20:36.231Z"),array: [new Date("2018-09-05T20:09:44.166Z"),"bandwidth Lock",new Date("2018-09-06T09:12:07.384Z"),"JBOD",75830,"Response paradigms Forward",48906,"seize circuit Polarised",38719],obj: {_id: 9786,str: "plum solid state array",num: 27013,date: new Date("2018-09-06T12:32:09.261Z"),array: [53983,{_id: 9787,str: "capacitor",num: 55266,array: [],obj: {}},{_id: 9788,str: "Wisconsin Music",date: new Date("2018-09-06T10:06:39.560Z"),array: []}],obj: {_id: 9789,num: 33477,date: new Date("2018-09-06T19:22:02.308Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 9790,str: "collaboration",num: 78831,date: new Date("2018-09-06T04:22:01.058Z"),array: [85626,30244,"SAS Highway index","Baht redefine Cliff",907,new Date("2018-09-06T17:54:04.451Z"),"Credit Card Account",{_id: 9791,str: "teal Dynamic",num: 14034,date: new Date("2018-09-06T11:01:51.658Z"),obj: {_id: 9792,num: 80517,date: new Date("2018-09-06T15:17:14.757Z"),array: []}},"primary circuit",{_id: 9793,num: 66961,date: new Date("2018-09-06T01:02:33.841Z"),array: [],obj: {_id: 9794,str: "Bacon navigating Rubber",array: [new Date("2018-09-06T04:34:55.960Z")]}},new Date("2018-09-06T18:50:42.344Z"),5645,new Date("2018-09-05T21:00:26.680Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9795,str: "withdrawal Bermuda Auto Loan Account",num: 61749,date: new Date("2018-09-06T18:26:26.940Z"),array: ["SDD",6749,"deposit methodologies",new Date("2018-09-06T06:30:24.951Z"),"Investor",90595,5205,new Date("2018-09-06T02:40:32.039Z"),[],"program Accounts",new Date("2018-09-06T15:15:18.952Z"),98082],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9796,str: "compress",num: 91000,date: new Date("2018-09-05T20:02:06.834Z"),array: [new Date("2018-09-06T18:27:09.191Z"),new Date("2018-09-06T03:17:28.272Z"),84420,"seamless holistic",new Date("2018-09-06T17:41:22.902Z"),{_id: 9797,str: "Aruba Tasty Soft Hat",num: 10576,date: new Date("2018-09-06T11:29:29.333Z"),obj: {}},"cross-platform clicks-and-mortar",new Date("2018-09-06T11:40:42.833Z"),9104],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9798,str: "Pre-emptive",num: 22674,date: new Date("2018-09-06T19:17:57.550Z"),array: [new Date("2018-09-05T20:16:38.006Z"),new Date("2018-09-06T00:28:03.411Z"),20050,new Date("2018-09-06T15:20:22.734Z"),[{_id: 9799,num: 30394,date: new Date("2018-09-05T21:30:00.468Z"),array: [],obj: {_id: 9800,str: "Mobility Jamaican Dollar",array: [],obj: {}}},"Directives"],"Handmade Concrete Fish Soft deposit","invoice experiences",[],38626,new Date("2018-09-06T10:03:11.730Z"),"Zimbabwe Dollar programming",35311,"alliance Reduced Accountability"],obj: {_id: 9801,str: "definition cross-platform orange",num: 77893,date: new Date("2018-09-06T18:41:34.677Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9802,str: "Sleek Plastic Chair Consultant Books",num: 81064,date: new Date("2018-09-06T16:03:18.684Z"),array: [new Date("2018-09-06T18:16:33.819Z"),"neural",new Date("2018-09-05T21:10:36.584Z"),[],"violet Squares Consultant",23721,"International",new Date("2018-09-06T09:10:12.078Z"),{_id: 9803,num: 20680,date: new Date("2018-09-06T12:14:05.874Z"),array: [56292],obj: {_id: 9804,str: "Chicken",num: 44478,date: new Date("2018-09-06T10:31:29.463Z"),obj: {}}},"Accountability Credit Card Account",new Date("2018-09-06T10:35:09.072Z"),{_id: 9805,str: "Small",num: 91462,date: new Date("2018-09-06T16:24:40.028Z"),array: []},"full-range",23209]});
    },

    function(coll) {
        return coll.insert({_id: 9806,str: "National Credit Card Account",num: 91696,date: new Date("2018-09-06T19:41:55.203Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9807,str: "Handmade Wooden Ball generate",num: 49978,date: new Date("2018-09-06T03:07:53.191Z"),array: [{_id: 9808,str: "Plastic attitude",num: 18370,date: new Date("2018-09-06T03:25:38.839Z"),obj: {}},"Cambridgeshire Tugrik",{_id: 9809,num: 95265,date: new Date("2018-09-06T09:54:12.787Z"),array: []},26071,new Date("2018-09-06T11:12:10.015Z"),72255,"Synergized microchip Handmade Soft Sausages"],obj: {_id: 9810,str: "wireless",num: 23457}});
    },

    function(coll) {
        return coll.insert({_id: 9811,str: "Focused",num: 67520,date: new Date("2018-09-06T08:47:10.775Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9812,str: "Directives Wooden Incredible",num: 13311,date: new Date("2018-09-06T13:26:31.253Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9813,str: "drive Developer Tuvalu",date: new Date("2018-09-06T10:48:07.611Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9814,str: "Mandatory Forward strategy",num: 6002,date: new Date("2018-09-06T09:31:45.674Z"),array: [43527,new Date("2018-09-06T11:16:34.131Z"),"Auto Loan Account bypassing North Dakota","data-warehouse Cambridgeshire","Harbors","Handmade",[new Date("2018-09-06T04:12:46.141Z")],new Date("2018-09-06T19:31:50.761Z"),75424,"Books Computer Plastic",[],4585,new Date("2018-09-06T18:05:37.894Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9815,str: "connect Infrastructure",date: new Date("2018-09-06T04:52:27.433Z"),array: [new Date("2018-09-05T21:58:46.416Z"),[],"interface",new Date("2018-09-06T14:13:59.404Z"),33883,59304,26714,"circuit",{_id: 9816,str: "synthesizing Cordoba Oro",num: 31783,array: [],obj: {_id: 9817,str: "eyeballs Proactive",date: new Date("2018-09-06T13:40:05.971Z"),array: [["contextually-based backing up synergistic",new Date("2018-09-05T20:40:14.650Z"),{_id: 9818,str: "innovate",num: 1597,array: []},new Date("2018-09-06T17:57:35.275Z")],new Date("2018-09-06T10:13:36.719Z"),[[],91209]],obj: {}}},[],new Date("2018-09-06T14:33:12.401Z"),[{_id: 9819,num: 29819,date: new Date("2018-09-06T15:05:41.945Z"),array: [],obj: {}}]]});
    },

    function(coll) {
        return coll.insert({_id: 9820,str: "Electronics",date: new Date("2018-09-06T08:28:45.105Z"),array: [25660,"California",81791,new Date("2018-09-06T05:01:58.698Z"),[],new Date("2018-09-06T12:10:16.994Z"),{_id: 9821,num: 62737,array: [],obj: {}},new Date("2018-09-06T07:52:24.603Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9822,str: "European Unit of Account 9(E.U.A.-9) Mongolia invoice",num: 9433,date: new Date("2018-09-06T10:27:54.600Z"),array: ["Associate Investment Account",new Date("2018-09-06T05:13:42.046Z"),"Seamless Ohio",new Date("2018-09-06T05:49:32.264Z"),15418,{_id: 9823,num: 20880,array: []},"Savings Account Home Loan Account",new Date("2018-09-06T01:06:19.460Z"),{_id: 9824,str: "Profound",num: 65735,date: new Date("2018-09-06T08:47:22.949Z"),array: [],obj: {_id: 9825,str: "standardization calculate orchid",num: 10598,array: [],obj: {}}},new Date("2018-09-06T16:32:24.810Z"),[60741,new Date("2018-09-06T15:48:36.452Z"),"Gibraltar optical Quality"],59349],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9826,str: "Handcrafted",num: 50778,date: new Date("2018-09-06T08:39:56.464Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 9827,num: 83722,date: new Date("2018-09-06T05:50:12.685Z"),array: [],obj: {_id: 9828,str: "Functionality ROI mint green",num: 17913,date: new Date("2018-09-06T06:29:46.636Z"),array: [84265,"hub",new Date("2018-09-06T04:02:30.279Z"),"withdrawal Shirt",new Date("2018-09-06T17:29:15.938Z"),{_id: 9829,str: "Decentralized",date: new Date("2018-09-06T10:45:00.616Z"),array: [],obj: {_id: 9830,str: "Investment Account",num: 30926,array: [{_id: 9831,str: "Incredible Rubber Fish Fish Montana",num: 54354,date: new Date("2018-09-06T01:31:38.441Z"),array: [new Date("2018-09-06T10:57:03.534Z"),new Date("2018-09-06T15:11:06.854Z"),new Date("2018-09-06T17:12:52.881Z")],obj: {}},{_id: 9832,str: "infomediaries invoice Business-focused",num: 11976,date: new Date("2018-09-05T23:36:44.228Z")}],obj: {}}},82928,[],"violet adapter metrics",[],"discrete Streamlined"]}});
    },

    function(coll) {
        return coll.insert({_id: 9833,str: "benchmark",num: 1234,date: new Date("2018-09-06T13:05:12.270Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 9834,str: "olive Bedfordshire",num: 81526,date: new Date("2018-09-06T05:01:25.570Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9835,str: "connecting",num: 27987,array: ["Rubber",62279,new Date("2018-09-05T22:35:20.921Z"),"circuit experiences",new Date("2018-09-06T04:50:40.072Z"),"Extended",[],new Date("2018-09-06T09:41:25.539Z"),59921,{_id: 9836,str: "SMS Soft Berkshire",num: 12428,date: new Date("2018-09-05T22:18:26.588Z"),array: [47203,[new Date("2018-09-06T06:40:14.691Z"),47011],{_id: 9837,str: "program Product object-oriented",num: 28451,date: new Date("2018-09-06T01:56:47.717Z"),array: [],obj: {}},new Date("2018-09-06T03:02:09.842Z")],obj: {_id: 9838,str: "secured line",num: 51749,array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 9839,str: "sky blue Designer",num: 63245,date: new Date("2018-09-06T06:06:56.919Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9840,str: "e-services Hat Wisconsin",num: 43936,date: new Date("2018-09-06T04:18:54.098Z"),array: [],obj: {_id: 9841,str: "Checking Account port Netherlands",num: 39179,date: new Date("2018-09-06T03:11:41.386Z"),array: [48788,new Date("2018-09-06T15:20:32.259Z"),"Open-source Grove","Computers Human Licensed Rubber Chair",new Date("2018-09-06T08:16:11.893Z"),75969,["neutral Usability",new Date("2018-09-06T13:06:11.263Z"),{_id: 9842,str: "Cheese Dynamic",num: 55457,array: [],obj: {}},new Date("2018-09-06T17:43:17.770Z"),new Date("2018-09-06T16:48:17.903Z")],"invoice","Nevada invoice"],obj: {_id: 9843,str: "Forward fuchsia",num: 32925,date: new Date("2018-09-06T14:27:28.390Z"),array: ["scalable Books JBOD",[71309,{_id: 9844,str: "back-end Bike New Hampshire",num: 46211,array: [[],new Date("2018-09-06T14:52:02.987Z"),new Date("2018-09-06T05:54:00.207Z")],obj: {}}]],obj: {_id: 9845,date: new Date("2018-09-06T15:03:14.853Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 9846,str: "Versatile",num: 70994,date: new Date("2018-09-06T09:04:35.332Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9847,str: "Checking Account Assurance",num: 75646,array: [49264,"Granite Industrial",new Date("2018-09-06T14:50:19.894Z"),new Date("2018-09-05T22:55:04.423Z"),"dot-com SSL Auto Loan Account",{_id: 9848,str: "Baht cultivate",num: 61336,array: [83569,"Dynamic Cotton",98859],obj: {_id: 9849,str: "pixel THX Associate",num: 60725,date: new Date("2018-09-06T05:45:59.950Z"),array: [],obj: {_id: 9850,num: 59017,date: new Date("2018-09-06T08:17:40.320Z"),obj: {}}}},new Date("2018-09-06T00:04:29.376Z"),"Marketing firewall",new Date("2018-09-06T00:47:40.245Z"),new Date("2018-09-06T03:19:10.409Z"),82768]});
    },

    function(coll) {
        return coll.insert({_id: 9851,str: "Jamaican Dollar Diverse productivity",num: 93067,date: new Date("2018-09-06T10:18:43.904Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9852,str: "payment deposit Branding",num: 86214,date: new Date("2018-09-05T23:19:14.279Z"),array: [97631,new Date("2018-09-05T23:33:08.986Z"),new Date("2018-09-06T00:08:54.569Z"),new Date("2018-09-06T00:33:39.233Z"),72019,"Re-contextualized Tools","stable olive",41044,[{_id: 9853,str: "digital whiteboard compress",num: 94200,date: new Date("2018-09-06T01:28:54.996Z"),array: [new Date("2018-09-06T17:44:04.574Z")],obj: {}},{_id: 9854,str: "Parks",num: 94737,date: new Date("2018-09-06T01:44:11.927Z")}],"Checking Account","cross-platform azure Fantastic Granite Car",67636,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9855,str: "European Unit of Account 9(E.U.A.-9) Health Avon",num: 81292,date: new Date("2018-09-06T00:47:16.160Z"),array: [[],64605,96420,"deposit Inverse Cheese",new Date("2018-09-06T00:53:44.997Z"),"1080p",new Date("2018-09-06T18:24:34.928Z"),"Colombian Peso Unidad de Valor Real",new Date("2018-09-06T15:05:10.983Z"),{_id: 9856,str: "hack",num: 4144,date: new Date("2018-09-06T02:34:02.570Z"),array: [new Date("2018-09-06T12:39:38.869Z")],obj: {_id: 9857,str: "Legacy",num: 97383,date: new Date("2018-09-05T20:15:22.417Z"),obj: {}}},36688,"Buckinghamshire process improvement bandwidth-monitored",{_id: 9858,str: "Keyboard transmitting",num: 13180,array: []}],obj: {_id: 9859,str: "online Tasty Fantastic",date: new Date("2018-09-06T07:04:29.720Z"),obj: {_id: 9860,num: 56588,date: new Date("2018-09-06T18:17:57.954Z"),array: [[],64331,new Date("2018-09-06T06:27:04.612Z"),[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 9861,str: "innovate",num: 57363,date: new Date("2018-09-05T22:59:04.077Z"),array: ["Rustic Mountain",{_id: 9862,str: "THX HDD Moldovan Leu",num: 76523,date: new Date("2018-09-06T06:54:08.047Z"),array: [],obj: {}},["Euro"],61213,63873,71764,new Date("2018-09-06T03:22:01.759Z"),"Shoes multi-byte",[new Date("2018-09-06T01:30:10.368Z"),{_id: 9863,str: "Iraqi Dinar",num: 26494,array: []},"aggregate"],"Shoal Lao People's Democratic Republic Chair",89885,new Date("2018-09-05T20:17:00.327Z"),"Auto Loan Account New Jersey",35009],obj: {_id: 9864,str: "web-enabled global",date: new Date("2018-09-06T12:08:30.637Z"),array: [],obj: {_id: 9865,str: "Investment Account cross-platform e-commerce",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 9866,str: "Global",num: 2442,date: new Date("2018-09-06T15:47:19.828Z"),array: ["Zimbabwe withdrawal Identity",new Date("2018-09-05T22:21:26.247Z"),"Incredible",21457,[new Date("2018-09-06T18:20:40.095Z"),{_id: 9867,num: 71405,date: new Date("2018-09-05T22:00:27.457Z"),obj: {}},"multimedia cross-media"],35160,{_id: 9868,num: 28501,date: new Date("2018-09-05T23:29:59.556Z"),array: [{_id: 9869,str: "revolutionary",num: 32213,obj: {}},new Date("2018-09-06T05:38:53.969Z"),16574]},new Date("2018-09-06T00:15:22.896Z"),[],42642,new Date("2018-09-06T19:27:27.596Z"),{_id: 9870,str: "Buckinghamshire Chair Cotton",num: 11353,obj: {}},new Date("2018-09-06T03:52:14.465Z"),1709]});
    },

    function(coll) {
        return coll.insert({_id: 9871,num: 68738,date: new Date("2018-09-06T16:10:18.658Z"),array: [],obj: {_id: 9872,str: "Specialist matrices",num: 38056,date: new Date("2018-09-06T00:56:59.655Z"),array: [new Date("2018-09-06T18:04:37.265Z"),"maroon plum",{_id: 9873,num: 48483,date: new Date("2018-09-05T23:30:05.072Z")},new Date("2018-09-06T15:15:13.487Z"),70379,"envisioneer Tactics",[],{_id: 9874,str: "circuit",num: 75053,date: new Date("2018-09-06T11:59:37.681Z"),array: ["incentivize",91249],obj: {_id: 9875,date: new Date("2018-09-06T12:51:59.339Z"),array: [61215,"withdrawal",new Date("2018-09-06T19:24:56.066Z"),[14336,3650]],obj: {}}},"Inverse engage Global",new Date("2018-09-05T23:59:55.734Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 9876,str: "Delaware ivory",num: 6553,date: new Date("2018-09-05T20:00:29.117Z"),array: [],obj: {_id: 9877,num: 37621,date: new Date("2018-09-06T10:55:51.977Z"),array: ["payment",new Date("2018-09-05T23:12:12.993Z"),96166,["Handcrafted Frozen Pizza Global Director",new Date("2018-09-06T00:16:11.626Z")],{_id: 9878,str: "methodical info-mediaries invoice",num: 84415,date: new Date("2018-09-06T03:53:04.185Z"),array: [],obj: {}},61009,[new Date("2018-09-05T23:10:12.774Z")],[],"Washington Implementation",new Date("2018-09-06T15:26:03.198Z"),40536,73138,"zero administration",5680]}});
    },

    function(coll) {
        return coll.insert({_id: 9879,str: "Oregon function Response",num: 58413,date: new Date("2018-09-06T19:46:58.886Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 9880,str: "quantify",date: new Date("2018-09-06T17:53:06.940Z"),obj: {_id: 9881,str: "Small Concrete Chips",num: 22656,date: new Date("2018-09-06T17:32:43.494Z"),array: [],obj: {_id: 9882,str: "networks Investment Account",num: 61946,date: new Date("2018-09-06T05:43:29.217Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 9883,str: "Representative markets PNG",num: 20766,date: new Date("2018-09-05T22:03:26.323Z"),array: [new Date("2018-09-06T05:33:17.445Z"),"Intelligent Wooden Soap",{_id: 9884,date: new Date("2018-09-06T05:34:24.852Z"),array: [],obj: {}},"withdrawal Chair","Arizona bypassing",new Date("2018-09-06T11:07:05.414Z"),{_id: 9885,str: "best-of-breed",num: 94426,date: new Date("2018-09-06T07:17:54.979Z"),array: [3748,new Date("2018-09-05T22:03:28.055Z"),[],96107]},74175,new Date("2018-09-06T03:41:17.899Z"),[],91403],obj: {_id: 9886,str: "Garden",num: 9073,date: new Date("2018-09-06T10:56:01.898Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9887,date: new Date("2018-09-06T18:29:44.066Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9888,str: "hack system",date: new Date("2018-09-06T06:05:35.259Z"),array: [93354,25864,new Date("2018-09-06T19:36:45.173Z"),new Date("2018-09-06T19:02:47.115Z"),28347,"Wyoming transform","responsive",[],{_id: 9889,num: 41171,date: new Date("2018-09-06T06:13:03.620Z"),array: [43423,new Date("2018-09-06T08:26:00.550Z")],obj: {_id: 9890,str: "Gorgeous",num: 98517,date: new Date("2018-09-05T22:35:42.209Z"),array: [new Date("2018-09-06T00:19:04.171Z")],obj: {}}},{_id: 9891,str: "Bacon",num: 92939,date: new Date("2018-09-06T08:18:19.632Z"),obj: {}},"rich paradigms transmitting",new Date("2018-09-06T17:19:20.330Z"),"analyzer Awesome Metal Tuna"],obj: {_id: 9892,str: "bypass Nebraska pixel",date: new Date("2018-09-06T18:02:37.339Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9893,str: "front-end",date: new Date("2018-09-05T21:33:42.769Z"),array: ["extend",new Date("2018-09-06T19:47:03.467Z"),{_id: 9894,str: "payment",num: 40583,date: new Date("2018-09-05T20:39:44.064Z"),obj: {_id: 9895,str: "Bacon teal",num: 70814,date: new Date("2018-09-06T19:20:17.853Z"),array: []}},new Date("2018-09-06T16:26:22.969Z"),"firewall Forks",1429,new Date("2018-09-06T14:41:36.640Z"),63239,new Date("2018-09-06T06:08:59.000Z"),"Re-engineered Soft",[{_id: 9896,num: 73270,date: new Date("2018-09-06T05:35:59.095Z"),array: [],obj: {}}],5866]});
    },

    function(coll) {
        return coll.insert({_id: 9897,str: "bypass United Kingdom bus",num: 16490});
    },

    function(coll) {
        return coll.insert({_id: 9898,str: "Chair",num: 81552,date: new Date("2018-09-06T11:07:17.977Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9899,num: 50379,date: new Date("2018-09-05T21:46:31.011Z"),array: [],obj: {_id: 9900,str: "bypass",num: 89361,date: new Date("2018-09-05T22:21:43.385Z"),obj: {_id: 9901,str: "Chips",num: 5498,date: new Date("2018-09-06T08:36:26.136Z"),obj: {_id: 9902,str: "Outdoors",num: 95513,array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 9903,str: "Quality Multi-channelled attitude",num: 29421,date: new Date("2018-09-06T14:42:25.763Z"),array: [97581,new Date("2018-09-06T13:12:47.360Z"),75077,[],{_id: 9904,str: "Islands action-items",date: new Date("2018-09-06T07:20:59.911Z"),obj: {}},"Awesome virtual","engage",18433,new Date("2018-09-06T03:29:47.787Z"),new Date("2018-09-06T02:43:30.488Z"),76532],obj: {_id: 9905,str: "Baby",num: 16314,date: new Date("2018-09-06T04:05:28.282Z"),array: ["Massachusetts","Practical Ball Global",new Date("2018-09-06T19:41:04.647Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9906,str: "Cambridgeshire",num: 59720,date: new Date("2018-09-05T21:05:34.265Z"),array: [{_id: 9907,str: "PCI",num: 43013,array: [47899],obj: {}},"Credit Card Account card",new Date("2018-09-06T07:38:13.474Z"),"Intelligent",new Date("2018-09-06T03:15:54.296Z"),{_id: 9908,str: "Fundamental Books",num: 63859,date: new Date("2018-09-06T05:18:26.196Z"),obj: {_id: 9909,num: 21326,date: new Date("2018-09-06T07:07:51.689Z"),array: [[new Date("2018-09-06T15:03:53.597Z"),[]],[],5908]}},new Date("2018-09-06T07:43:07.166Z"),53882,"Rwanda firmware","Human integrate Parks",{_id: 9910,str: "Granite",num: 74952,date: new Date("2018-09-06T04:15:51.119Z"),array: ["Fantastic Supervisor"]},"Savings Account Cape Verde Escudo",new Date("2018-09-05T22:35:52.084Z"),[]],obj: {_id: 9911,obj: {_id: 9912,str: "Incredible bypass Gorgeous Plastic Towels",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9913,str: "solutions Soft",num: 68777,date: new Date("2018-09-06T12:25:50.015Z"),array: [new Date("2018-09-06T18:40:38.485Z"),"Electronics process improvement navigating",21446,"Chair","Ports Tasty Metal Towels","payment Macao",new Date("2018-09-06T19:31:49.756Z"),99276,{_id: 9914,str: "Money Market Account Auto Loan Account optical",num: 22014,date: new Date("2018-09-06T13:28:22.433Z"),obj: {_id: 9915,str: "ADP Gorgeous",num: 77680,date: new Date("2018-09-06T07:55:54.501Z"),array: [],obj: {}}},new Date("2018-09-06T01:50:29.636Z")]});
    },

    function(coll) {
        return coll.insert({_id: 9916,str: "deliverables Cambridgeshire",date: new Date("2018-09-05T23:54:57.183Z"),array: [55028,"maroon","local area network maroon","Savings Account",new Date("2018-09-06T17:46:28.904Z"),new Date("2018-09-06T14:22:38.070Z"),{_id: 9917,str: "Somoni RSS Assurance",num: 99550,array: [],obj: {_id: 9918,date: new Date("2018-09-06T01:10:20.003Z"),array: [42796,40429,{_id: 9919,num: 77675,array: [],obj: {}}],obj: {}}},new Date("2018-09-05T21:58:03.733Z"),15403,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9920,str: "Frozen Credit Card Account",num: 13722,date: new Date("2018-09-06T09:57:56.687Z"),obj: {_id: 9921,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9922,str: "Steel card",num: 47500,date: new Date("2018-09-06T05:05:17.071Z"),array: [new Date("2018-09-06T17:36:21.237Z"),"Industrial synthesizing",[],"deposit multi-state hybrid","Movies applications",new Date("2018-09-06T05:51:17.437Z"),new Date("2018-09-06T06:35:30.130Z"),85704],obj: {_id: 9923,str: "pixel parsing",num: 71096,date: new Date("2018-09-06T14:31:27.528Z"),array: [48495],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9924,str: "copy Refined Granite Bacon Handmade Fresh Sausages",num: 2249,date: new Date("2018-09-06T15:35:12.919Z"),array: [],obj: {_id: 9925,num: 81720,array: [{_id: 9926,str: "Handcrafted morph Wyoming",num: 79888,date: new Date("2018-09-06T00:59:40.622Z"),obj: {}},7013,"Libyan Dinar B2C",30175,new Date("2018-09-06T13:45:47.543Z"),"Fords Cloned","deposit Open-architected Sports",85947,new Date("2018-09-06T14:02:31.227Z"),{_id: 9927,num: 67695,date: new Date("2018-09-06T10:31:47.937Z"),array: [new Date("2018-09-05T20:41:37.882Z"),new Date("2018-09-06T06:43:43.216Z"),[],new Date("2018-09-05T23:22:35.742Z")]},"firewall","overriding internet solution"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9928,str: "Home Loan Account generating multi-byte",num: 12596,date: new Date("2018-09-06T14:11:24.915Z"),array: [new Date("2018-09-06T18:11:11.549Z"),"Ridge",{_id: 9929,str: "Granite Bedfordshire Balboa US Dollar",num: 35843,date: new Date("2018-09-06T14:54:00.974Z"),array: [],obj: {}},new Date("2018-09-06T01:06:59.437Z"),{_id: 9930,str: "Bacon",num: 43026,date: new Date("2018-09-06T06:27:01.901Z"),array: [],obj: {}},"value-added",69634,11015,new Date("2018-09-05T22:48:26.992Z"),new Date("2018-09-06T02:30:34.386Z"),"black coherent",23389],obj: {_id: 9931,str: "Maryland Industrial standardization"}});
    },

    function(coll) {
        return coll.insert({_id: 9932,str: "Administrator",num: 49540,date: new Date("2018-09-06T09:52:04.154Z"),array: [23261,69022,"Small Auto Loan Account backing up",new Date("2018-09-06T07:38:33.079Z"),new Date("2018-09-05T20:13:15.673Z"),"Configuration input",64084,new Date("2018-09-05T23:37:43.170Z"),[18068,[]],"Wooden copying Chair",{_id: 9933,str: "ubiquitous driver",num: 13004,date: new Date("2018-09-06T07:45:18.099Z"),obj: {}}],obj: {_id: 9934,num: 63053,date: new Date("2018-09-06T01:36:12.655Z")}});
    },

    function(coll) {
        return coll.insert({_id: 9935,num: 74586,date: new Date("2018-09-06T09:07:17.153Z"),array: [90373,new Date("2018-09-06T09:48:24.757Z"),[],"synergistic definition Analyst",25098,"Beauty even-keeled Russian Ruble",{_id: 9936,str: "redundant clear-thinking parse",date: new Date("2018-09-06T01:57:53.426Z"),obj: {}},new Date("2018-09-06T15:45:36.244Z"),"Gloves",new Date("2018-09-06T03:00:29.644Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9937,str: "National",date: new Date("2018-09-06T16:52:36.482Z"),array: [new Date("2018-09-06T01:36:18.867Z"),78068,14423,2479,"Salad Buckinghamshire",new Date("2018-09-06T04:33:11.229Z"),47622,"sticky","CSS Customer-focused Fresh",87795],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9938,str: "Bedfordshire",num: 54072,date: new Date("2018-09-05T20:54:06.099Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9939,num: 87664,date: new Date("2018-09-06T06:05:20.520Z"),array: ["Outdoors",{_id: 9940,str: "Right-sized Berkshire",date: new Date("2018-09-06T14:06:10.060Z"),array: ["Credit Card Account Swiss Franc",92674,new Date("2018-09-05T20:16:06.488Z")],obj: {_id: 9941,str: "Kansas",num: 82685,array: [],obj: {}}},"Steel multi-byte",[],45904,22299,70580,new Date("2018-09-05T22:08:52.584Z"),new Date("2018-09-05T21:26:33.832Z"),{_id: 9942,str: "digital",num: 74118,date: new Date("2018-09-06T01:05:51.038Z")},"Home Loan Account envisioneer middleware"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9943,str: "Rustic Wooden Computer",num: 45109,date: new Date("2018-09-06T14:58:39.966Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9944,str: "tan Sports",num: 47654,date: new Date("2018-09-06T01:05:20.910Z"),array: ["fuchsia primary Sao Tome and Principe",new Date("2018-09-05T22:51:20.174Z"),new Date("2018-09-06T04:21:42.984Z"),"Costa Rican Colon reboot",new Date("2018-09-06T00:57:19.839Z"),{_id: 9945,str: "ivory Personal Loan Account strategy",num: 15932,date: new Date("2018-09-06T07:37:43.163Z"),array: [16481,45166,{_id: 9946,str: "Soft Tactics Taka",num: 5673,date: new Date("2018-09-06T04:31:31.414Z"),array: [new Date("2018-09-06T11:03:43.805Z"),[],{_id: 9947,str: "supply-chains Michigan EXE",num: 42833,date: new Date("2018-09-06T05:55:33.126Z"),array: [],obj: {}},[92682]],obj: {_id: 9948,str: "Handcrafted EXE",array: [],obj: {_id: 9949,num: 81218,date: new Date("2018-09-06T03:35:42.780Z"),array: [{_id: 9950,date: new Date("2018-09-06T15:02:16.463Z")},"Andorra multi-byte payment","Avon",[],92792],obj: {}}}},[new Date("2018-09-06T09:04:44.455Z")],21080]},68710],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9951,str: "Bedfordshire",date: new Date("2018-09-06T11:40:10.089Z"),array: ["indigo Configuration alarm",34676,new Date("2018-09-06T14:34:05.290Z"),57146,"Tasty IB Licensed Plastic Gloves","XSS",new Date("2018-09-06T15:37:38.907Z"),"invoice Pennsylvania solutions",63034,{_id: 9952,str: "magenta",num: 30597,date: new Date("2018-09-06T01:27:09.860Z"),array: [],obj: {_id: 9953,str: "Avon Senior Pants",num: 35274,date: new Date("2018-09-06T10:09:06.459Z"),array: [],obj: {}}},new Date("2018-09-06T18:55:10.926Z"),new Date("2018-09-05T20:05:43.323Z")],obj: {_id: 9954,str: "Fantastic Computers portals",num: 79749,date: new Date("2018-09-06T03:57:56.931Z")}});
    },

    function(coll) {
        return coll.insert({_id: 9955,str: "Technician Hat visualize",num: 86092,date: new Date("2018-09-06T09:15:00.748Z"),array: [new Date("2018-09-05T22:30:59.222Z"),"Rustic Metal syndicate",53691,98846,new Date("2018-09-06T14:40:54.608Z"),[],{_id: 9956,str: "monitor open-source Consultant",num: 27723,date: new Date("2018-09-05T21:01:18.991Z"),array: ["monitor",new Date("2018-09-06T18:37:39.743Z"),80963],obj: {_id: 9957,str: "Savings Account Chips Future",num: 29944,date: new Date("2018-09-06T15:58:07.810Z"),array: []}},{_id: 9958,str: "high-level metrics",array: [57060,"XSS Buckinghamshire",new Date("2018-09-06T06:04:35.359Z")],obj: {}},{_id: 9959,obj: {_id: 9960,num: 92895,date: new Date("2018-09-06T06:38:41.542Z"),obj: {}}},"Ball reboot"]});
    },

    function(coll) {
        return coll.insert({_id: 9961,str: "indigo COM synthesizing",num: 97189,date: new Date("2018-09-05T20:24:02.953Z"),array: [44090,"Handcrafted","Berkshire Borders Personal Loan Account",new Date("2018-09-06T18:48:12.475Z"),new Date("2018-09-06T00:07:28.652Z"),9202,"full-range",96202,[],"HDD"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9962,str: "Kazakhstan interactive Auto Loan Account",num: 68813,date: new Date("2018-09-05T23:15:25.989Z"),array: [61578,new Date("2018-09-06T04:31:56.787Z"),{_id: 9963,str: "tan",num: 25495,date: new Date("2018-09-06T16:57:36.114Z"),array: [],obj: {}},"Belarus",9314,new Date("2018-09-06T02:30:25.250Z"),19419,new Date("2018-09-05T20:56:54.957Z"),"CSS Innovative Virginia",[],3000,21730,"firewall Wooden"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9964,str: "Russian Ruble Kansas",num: 6350,date: new Date("2018-09-06T14:22:48.158Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9965,str: "invoice optical red",num: 14575,date: new Date("2018-09-05T22:41:34.136Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9966,str: "generate",num: 22998,date: new Date("2018-09-06T08:26:04.625Z"),array: [new Date("2018-09-06T11:18:50.483Z"),13214,"Future Buckinghamshire",[],"synthesize Zimbabwe","Factors open-source conglomeration",{_id: 9967,str: "Walks Beauty",num: 1090,date: new Date("2018-09-06T10:26:49.480Z"),array: [],obj: {_id: 9968,str: "intuitive open-source hack",obj: {_id: 9969,array: [],obj: {}}}}],obj: {_id: 9970,str: "International",num: 60996,date: new Date("2018-09-06T02:06:58.905Z"),array: [],obj: {_id: 9971,str: "full-range white Mexican Peso Mexican Unidad de Inversion (UDI)",num: 26116,date: new Date("2018-09-06T06:34:23.173Z"),array: ["payment",{_id: 9972,date: new Date("2018-09-05T21:32:13.502Z"),array: []},new Date("2018-09-06T17:46:57.974Z"),35086,new Date("2018-09-06T00:14:58.670Z"),new Date("2018-09-06T16:12:42.329Z"),42095],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9973,str: "service-desk",num: 76476,date: new Date("2018-09-06T04:06:52.004Z"),array: [new Date("2018-09-06T03:55:27.204Z"),88077,"copying Checking Account",14673,new Date("2018-09-06T14:23:16.484Z"),{_id: 9974,str: "Manager",num: 53869,date: new Date("2018-09-06T03:05:59.517Z"),obj: {}},new Date("2018-09-06T05:13:19.513Z"),"index Small Frozen Bike",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9975,str: "Montana",num: 21518,date: new Date("2018-09-06T02:55:05.027Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9976,str: "Tuna",num: 25720,date: new Date("2018-09-06T16:23:02.162Z"),array: ["systems synergize Parkway",new Date("2018-09-06T18:32:32.027Z"),new Date("2018-09-06T05:53:37.568Z"),new Date("2018-09-06T03:43:09.699Z"),{_id: 9977,str: "Cotton",num: 61534,date: new Date("2018-09-06T18:01:54.981Z"),array: [],obj: {}},"expedite Automotive Trinidad and Tobago Dollar","e-business",43879,63413,[],new Date("2018-09-06T14:36:05.606Z")],obj: {_id: 9978,str: "Tugrik Pa'anga",num: 27961,date: new Date("2018-09-06T06:25:30.042Z"),array: [47854,{ _id: 9979 }],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9980,str: "Bedfordshire web-readiness",num: 54421,date: new Date("2018-09-05T21:10:39.462Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 9981,str: "Square",num: 17043,date: new Date("2018-09-06T18:30:14.936Z"),array: [],obj: {_id: 9982,str: "plum intuitive",date: new Date("2018-09-06T02:43:31.125Z"),obj: {_id: 9983,num: 35294,array: ["Lempira",51637,new Date("2018-09-06T02:00:23.045Z"),"application Bedfordshire",[],new Date("2018-09-06T17:24:27.177Z"),{_id: 9984,str: "Buckinghamshire",date: new Date("2018-09-06T04:18:02.568Z"),array: [],obj: {}},{_id: 9985,str: "synthesize Buckinghamshire",num: 79483,array: ["Iowa Extensions"],obj: {}},49568,"Supervisor embrace",new Date("2018-09-05T22:23:03.142Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 9986,str: "Granite Product Bedfordshire",num: 75046,date: new Date("2018-09-06T08:22:37.125Z"),array: [],obj: {_id: 9987,num: 17944,array: [99954,["conglomeration synthesize Rubber",new Date("2018-09-06T10:07:12.847Z")],"overriding Maine",new Date("2018-09-06T02:39:40.135Z"),83661,65931,85339,new Date("2018-09-05T23:01:46.990Z"),[{_id: 9988,date: new Date("2018-09-06T04:39:50.947Z"),array: [],obj: {_id: 9989,str: "Business-focused Philippine Peso",num: 79786,date: new Date("2018-09-05T22:50:07.610Z"),array: []}},"Dynamic programming withdrawal"],"Facilitator",24325,"explicit"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9990,str: "withdrawal",num: 68297,date: new Date("2018-09-05T20:53:28.451Z"),array: [],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "date": 1, "num": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayToObject: [[["Future Buckinghamshire",'$obj.str'],[],["Salad haptic Savings Account"],[4296,26981,'$num'],['$obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.str'],["Utah protocol"],[],[48652]],defaults: [new Date("2018-09-06T18:22:02.690Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $dateToString: {date: { $dateToString: {date: '$obj.obj.date',timezone: "Pacific/Tarawa"} },format: "%S-%U-%Y-%V-%H-%S-%L-%M-%G-%M",timezone: "Europe/Astrakhan"} }],[],[{ $substrCP: ["Credit Card Account Handcrafted Steel Hat instruction set",0,0] },{ $ltrim: { input: '$obj.obj.obj.str' } }],[],[52284]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["payment"],[54394,92453],['$obj.obj.str'],[],[],[{ $substrCP: [{ $toString: { $arrayElemAt: [["Gorgeous Frozen Pizza Reactive Checking Account",'$obj.str'],'$obj.obj.obj.num'] } },14,6] },"global deposit","Buckinghamshire parsing",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Team-oriented",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $range: [1,18] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T12:55:43.894Z",format: "%H-%d-%j-%d-%d-%G",timezone: "Pacific/Johnston"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],16624] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [51539],as: 'brennon',cond: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Dynamic Zambia dedicated"],68614] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "JBOD",v: true}]] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromParts: {year: { $subtract: [59204,'$obj.num'] },minute: { $cmp: [{ $map: {input: [],in: { $log: [22857,7241] }} },{ $arrayToObject: [[{k: "open system",v: true},{k: "focus group",v: "transmitter"},{k: "functionalities tertiary Garden",v: false}]] }] },timezone: "America/Sao_Paulo"} } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $pow: [14200,1722] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $week: { $hour: { $second: { $dateFromParts: {isoWeekYear: { $subtract: ['$obj.num',71680] },minute: 34185,millisecond: { $multiply: ['$obj.obj.obj.num'] },timezone: "Pacific/Fakaofo"} } } } } }, _id: 0}}],

        [{$project: {a: { $range: [19,20] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],63383] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfMonth: { $second: { $toDate: { $substrCP: ['$obj.obj.str',14,9] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num','$obj.obj.num',78878],18812] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $millesecond: { $dayOfWeek: { $dateFromParts: {year: { $size: [[{ $toLower: '$obj.obj.obj.str' }]] },day: '$obj.num',hour: { $ln: 78729 },second: { $mod: ['$obj.obj.obj.num',84930] },millisecond: { $cmp: [{ $toString: { $minute: { $hour: { $toDate: { $objectToArray: '$obj.obj' } } } } },{ $arrayToObject: [[[],[],[{ $substrCP: [{ $substrCP: ["Missouri Gloves RSS",16,17] },11,5] },"orange"],["Shoes Valley","TCP",'$obj.str',"e-services"]]] }] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: { input: "Developer" } }],[{ $sqrt: 73302 },'$obj.num'],[{ $substr: ["mission-critical Aruban Guilder",14,8] },"Extensions",'$obj.obj.obj.str','$obj.obj.obj.str',{ $substrBytes: ['$obj.obj.str',1,17] }],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%j-%L-%L-%z-%H-%u-%U-%%-%U"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["leverage",{ $toString: { $arrayElemAt: [[],76976] } }]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $trim: {input: '$obj.str',chars: "CFA Franc BCEAO Pound Sterling driver"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str','$obj.obj.str',{ $substr: [{ $substr: ['$str',19,20] },2,7] }],['$obj.obj.str'],[73850,'$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],["streamline",'$str'],[],[],[{ $rtrim: { input: "Georgia invoice Chilean Peso Unidades de fomento" } }],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Dominican Peso"],['$obj.obj.num'],[{ $abs: 34158 }],["Nebraska Gloves",{ $concat: [] }],[]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],33757] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[true,'$obj.obj.str'],12929] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $second: { $second: { $dateToParts: {date: new Date("2018-09-06T01:50:30.998Z"),timezone: "Asia/Samarkand"} } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$str'],[],[],[]],useLongestLength: true,defaults: [new Date("2018-09-06T09:33:46.853Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Robust",v: '$obj.obj.num'},{k: "Tasty RSS Switchable",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',12,13] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: '$obj.obj.str' },"RSS"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeekYear: { $dayOfWeek: { $dayOfWeek: { $isoDayOfWeek: { $month: { $year: { $isoWeekYear: { $year: { $week: { $year: { $second: { $toDate: { $substrCP: [{ $substr: ["virtual Direct lime",17,2] },14,7] } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "relationships Refined Kentucky",v: false},{k: "SSL harness cross-media",v: true}]] }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $month: { $year: { $isoWeek: { $isoWeekYear: { $second: { $millesecond: { $week: { $toDate: { $arrayElemAt: [[],'$obj.obj.num'] } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["clicks-and-mortar deposit Colombian Peso Unidad de Valor Real"],[],["withdrawal Gorgeous",'$str',{ $trim: {input: "Generic Metal Ball Auto Loan Account relationships",chars: { $ltrim: { input: '$obj.str' } }} }],[]],defaults: []} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: '$str',chars: { $substrBytes: [{ $toUpper: '$str' },13,16] }} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Specialist",v: "Savings Account"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["whiteboard leading-edge Assurance","copy well-modulated benchmark",{ $ltrim: { input: '$obj.str' } }],8730] }, _id: 0}}],

        [{$project: {a: { $toString: { $toLower: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $exp: 65014 },isoWeek: { $ceil: '$obj.obj.obj.num' },hour: { $abs: '$obj.num' },minute: { $log: [79041,65591] },second: { $trunc: '$obj.num' },millisecond: { $subtract: ['$obj.obj.num',{ $abs: '$num' }] }} } },format: "%d-%H-%z-%S-%H-%G-%%-%u-%%-%%-%M-%S",onNull: { $arrayElemAt: [[46721],37676] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],12233] }, _id: 0}}],

        [{$project: {a: { $toLower: { $concat: ["parsing","Bedfordshire blue Progressive",'$obj.obj.str'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["multi-tasking Quetzal Computer"],[48007,{ $floor: 94806 }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fantastic Rubber Computer cultivate",v: '$obj.obj.obj.num'},{k: "optimize",v: new Date("2018-09-05T22:52:30.628Z")}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $minute: { $isoWeek: { $dateFromParts: {isoWeekYear: { $abs: '$obj.obj.obj.num' },isoWeek: { $add: [3836] },isoDayOfWeek: { $cmp: [{ $arrayElemAt: [[],97275] },{ $second: { $isoDayOfWeek: { $month: { $dayOfYear: { $isoWeekYear: { $isoWeek: new Date("2018-09-06T17:48:05.144Z") } } } } } }] },hour: '$obj.num',millisecond: { $ln: 14131 },timezone: "America/Virgin"} } } },onNull: { $concatArrays: [["New Zealand Dollar silver",'$obj.obj.str'],[],['$obj.num'],[{ $substr: ["Innovative THX Berkshire",17,7] }],[]] }} }, _id: 0}}],

        [{$project: {a: { $range: [13,17,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: '$obj.str',chars: { $concat: [{ $substrCP: ["open-source morph Practical Soft Soap",12,3] },"Home Loan Account portals Buckinghamshire"] }} }],3562] }, _id: 0}}],

        [{$project: {a: { $toString: { $rtrim: {input: "Computers",chars: "quantifying Gloves Unbranded Fresh Pants"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],40572] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $isoWeekYear: { $isoWeek: { $dayOfWeek: { $hour: { $year: { $dayOfMonth: { $dateToParts: {date: { $week: { $second: { $month: { $dateFromString: {dateString: "2018-09-06T06:41:29.346Z",format: "%G-%H-%H-%m-%H-%z-%Z-%m-%V",onError: { $concatArrays: [['$obj.obj.obj.num',7794,6364],[],['$str',"Tools","Home Loan Account"]] }} } } } },timezone: "America/Jamaica"} } } } } } } },format: "%%-%w-%Z-%z-%w-%V-%%",onNull: { $arrayToObject: [[{k: "Handcrafted Metal Ball",v: "Mouse"},{k: "streamline driver",v: new Date("2018-09-06T13:35:36.685Z")}]] }} },'$str'],43914] }, _id: 0}}],

        [{$project: {a: { $year: { $isoDayOfWeek: { $millesecond: { $isoWeekYear: { $dayOfMonth: { $week: { $dayOfWeek: { $dateToString: {date: '$obj.obj.obj.date',format: "%j-%z-%j-%d-%H-%%-%H-%S-%u-%j-%L-%%",timezone: "America/Merida"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $toDate: { $arrayElemAt: [['$obj.num'],42044] } } }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromString: {dateString: "2018-09-06T18:10:00.284Z",timezone: "Pacific/Honolulu",onError: { $arrayElemAt: [[29480],'$obj.obj.num'] },onNull: { $arrayToObject: [[['$obj.str'],["viral Games back-end"]]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $ltrim: {input: "pixel",chars: '$obj.obj.str'} },{ $toLower: { $substrBytes: ["primary",1,20] } }],38933] }, _id: 0}}],

        [{$project: {a: { $toLower: "navigating" }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[{ $ltrim: {input: { $toString: { $arrayToObject: [[[93294,96892,66710]]] } },chars: "Functionality Ergonomic orchid"} },'$obj.str'],["transmitting"],['$obj.obj.obj.num'],[]] } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$obj.obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.str',chars: "back up"} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $and: [28323] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $dayOfMonth: { $dateToParts: {date: { $dateFromParts: {year: { $divide: [75768,96671] },month: { $size: [[]] },millisecond: { $indexOfArray: [{ $objectToArray: '$obj' },{ $arrayToObject: [[['$str',{ $dateToString: {date: '$obj.obj.date',format: "%Z-%%-%z-%%",timezone: "Antarctica/Macquarie",onNull: "monitor"} },'$obj.obj.obj.str',{ $ltrim: { input: "Bike Cross-group indigo" } }],["disintermediate Hill Overpass"],['$obj.num',63014,92707],[]]] },10] }} },timezone: "Pacific/Gambier",iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["Savings Account",0,0] }],81423] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $toString: { $week: { $toDate: { $arrayToObject: [[{k: "invoice",v: "Digitized Small Wooden Pants"}]] } } } },'$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T12:50:15.659Z"),format: "%u-%G-%%-%G-%H",timezone: "Africa/Kinshasa",onNull: "Granite Shirt"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["moratorium pink"],6418] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[6200],[{ $rtrim: { input: "override" } }],[{ $log: [66732,'$obj.obj.num'] },'$num','$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Bedfordshire transparent"],as: 'johnnie',cond: false} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $range: [2,19,9] } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $millesecond: { $month: { $dateFromParts: {isoWeekYear: { $pow: [4406,90911] },isoDayOfWeek: { $subtract: ['$obj.obj.num','$obj.obj.obj.num'] },millisecond: { $ln: 54323 }} } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [61537],in: { $subtract: ['$$this',52890] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromParts: { isoWeekYear: { $exp: '$obj.obj.num' } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[8706],[],["bandwidth",'$obj.str','$obj.str'],[],[{ $ltrim: { input: { $substr: [{ $toLower: "payment SSL Unbranded" },2,16] } } },'$obj.obj.obj.str']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],85733] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["SSL secondary bypass",3,16] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ['$str','$obj.obj.obj.str'] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $month: { $isoDayOfWeek: { $millesecond: { $dayOfYear: { $toDate: { $arrayElemAt: [["Path",'$str'],'$obj.obj.num'] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $floor: '$num' }] }, _id: 0}}],

        [{$project: {a: { $range: [19,0,20] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.obj.str',chars: "policy"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%%-%m-%Z-%Y"} }, _id: 0}}],

        [{$project: {a: { $range: [2,14,18] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Quetzal withdrawal",v: 32768}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["enable"]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $isArray: [{ $concat: [{ $substr: ["Fantastic Cambridgeshire",16,0] },"Home Loan Account"] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:17:21.380Z"),format: "%V-%S-%w-%Y-%L-%S-%m-%z-%V-%Y",timezone: "Pacific/Fiji",onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $substr: [{ $rtrim: { input: "quantify Sleek Steel Keyboard" } },9,20] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: false,defaults: ["Credit Card Account Ergonomic"]} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str',"Metal"],[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],45377] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToString: { date: new Date("2018-09-06T11:57:01.678Z") } },format: "%m-%S-%m-%H-%m-%d-%m-%%",timezone: "America/Halifax",onNull: { $arrayElemAt: [[],'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $toDate: { $toString: { $arrayElemAt: [['$obj.obj.num'],2416] } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T19:53:33.858Z",format: "%G-%G-%j-%w-%M-%G-%M"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account Ports",v: 66836}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Tasty Metal Sausages Bahraini Dinar",v: "Colorado technologies Australian Dollar"}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: false} }, _id: 0}}],

        [{$project: {a: { $concat: ["SAS Philippine Peso withdrawal",{ $ltrim: { input: "withdrawal Ergonomic Steel Chips" } },{ $trim: { input: '$obj.str' } }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Oval",v: 25447}]] }, _id: 0}}],

        [{$project: {a: { $range: [12,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[95808,'$obj.num'],["Open-source",'$str'],[4251],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.num'],['$str',"West Virginia Georgia calculating",{ $substrCP: ['$obj.str',17,7] },"B2B"],[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Configurable Fantastic Cotton Car","Optional"],75170] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Kansas",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],[],[71366]]] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromParts: {isoWeekYear: { $mod: ['$obj.obj.obj.num','$obj.num'] },millisecond: { $floor: 11928 },timezone: "Asia/Dubai"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[17577],["cross-platform",'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $minute: { $second: { $isoWeek: { $isoDayOfWeek: { $dayOfWeek: { $dayOfMonth: { $year: { $isoWeek: { $dayOfWeek: { $isoWeekYear: { $dateToParts: {date: { $dateToString: {date: '$date',timezone: "Australia/Adelaide"} },iso8601: false} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["mobile withdrawal"],cond: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[12053,60180],[],[],[{ $toLower: { $concat: ["payment Canadian Dollar Bike"] } },"maximize back up Mississippi","Games Central optical"],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: { $second: { $week: { $dateFromString: { dateString: "2018-09-06T01:20:58.061Z" } } } } } }, _id: 0}}],

        [{$project: {a: { $range: [8,11,17] }, _id: 0}}],

        [{$project: {a: { $range: [6,6,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toUpper: "GB withdrawal pixel" }],['$obj.obj.str',"Granite withdrawal"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[66002,'$obj.obj.obj.num',30266],[{ $toString: { $arrayToObject: [[{k: "Cambridgeshire bandwidth-monitored Walk",v: true},{k: "Saint Vincent and the Grenadines Tennessee users",v: { $concat: ['$str',"Fantastic Wooden Fish Alaska"] }}]] } },'$obj.obj.str','$obj.obj.obj.str'],[74617],[69075,'$num']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[7101,83871],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromParts: {year: { $divide: ['$num',{ $floor: 61067 }] },month: { $exp: '$obj.obj.obj.num' },minute: { $ln: 52901 },millisecond: { $ceil: '$obj.num' }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Unbranded Rubber Soap disintermediate",v: true},{k: "invoice value-added",v: { $trim: { input: '$obj.obj.str' } }}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "innovative Lake" }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.obj.str',{ $toLower: "cultivate Strategist" }]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $map: {input: [59287],in: { $mod: [81841,68865] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $ltrim: { input: '$str' } }],as: 'scottie',in: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str'],in: { $trunc: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $week: { $millesecond: { $second: { $hour: { $dateFromString: {dateString: "2018-09-06T11:09:57.879Z",onError: { $second: { $isoDayOfWeek: { $minute: { $dateFromParts: {year: { $ln: '$obj.num' },hour: { $abs: '$num' },minute: 51055,second: { $multiply: [49045] },timezone: "Jamaica"} } } } }} } } } } } }, _id: 0}}],

        [{$project: {a: { $range: [0,1] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "empower",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $concat: [{ $ltrim: {input: '$obj.str',chars: '$obj.obj.str'} }] },3,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $second: { $minute: { $dateFromParts: {year: { $multiply: ['$obj.obj.num',41573,'$obj.obj.obj.num'] },month: { $log10: '$obj.obj.num' },day: { $trunc: 58750 },second: { $add: [] },timezone: "Canada/Central"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],80269] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',1,5] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Latvia Director indigo",7,7] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'ellen',cond: { $not: [{ $arrayToObject: [[[true]]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Center Electronics","Product Roads"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [20,15,2] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "North Korean Won Colombian Peso Unidad de Valor Real" } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str',"generating"],as: 'darron',in: { $log10: 17880 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$num',77788],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Pants Manager Product",v: 2725},{k: "Lead",v: { $concat: [{ $substr: ["Regional",16,12] }] }},{k: "Lodge sexy",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T03:06:40.904Z"),format: "%j-%%-%%-%G-%L",timezone: "Africa/Libreville"} },'$obj.obj.str',{ $rtrim: { input: "moderator" } }],34362] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["withdrawal",{ $ltrim: { input: '$str' } }],'$num'] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "open-source attitude Towels",v: { $dateToString: {date: new Date("2018-09-06T11:38:44.748Z"),timezone: "Europe/Moscow"} }},{k: "Borders Integrated bandwidth",v: new Date("2018-09-06T18:30:00.236Z")}]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toLower: { $ltrim: { input: "program Technician" } } } }, _id: 0}}],

        [{$project: {a: { $year: { $dateToParts: { date: { $dateToParts: {date: { $dayOfMonth: { $dateFromParts: {year: { $exp: '$obj.obj.num' },day: { $pow: ['$num',77903] },hour: { $abs: '$num' },minute: { $log: [{ $size: [[43511]] },21932] },timezone: "Europe/Minsk"} } },timezone: "Etc/GMT+9",iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',timezone: "Atlantic/Azores",onNull: { $year: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T07:26:40.949Z",onError: { $arrayToObject: [[{k: "initiatives withdrawal Integration",v: new Date("2018-09-06T10:22:46.250Z")},{k: "Interactions Cambridgeshire",v: '$obj.obj.obj.num'}]] },onNull: "Rubber"} } } }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num',{ $subtract: [38606,'$num'] }],as: 'kiera',cond: { $gt: [{ $arrayElemAt: [[],'$$kiera'] },{ $second: { $dayOfWeek: { $isoWeekYear: { $week: { $dateFromParts: {isoWeekYear: { $ceil: 61161 },isoDayOfWeek: { $divide: ['$obj.num',85277] },second: { $abs: 14190 },millisecond: { $abs: '$$kiera' }} } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "budgetary management",v: 66127}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toUpper: "Table" }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[47323,13860],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[70528,'$num','$num'],29924] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T21:40:02.502Z"),timezone: "America/Bahia_Banderas"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str','$obj.str',{ $rtrim: { input: { $toUpper: "Gorgeous Frozen Chair incremental orchestrate" } } }],["red ROI COM"]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: "proactive ivory" } },'$obj.str','$obj.obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "channels Technician",chars: { $ltrim: { input: { $toUpper: '$obj.obj.obj.str' } } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Legacy Customer invoice",'$obj.str'],{ $size: [[]] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["calculate Mexican Peso Mexican Unidad de Inversion (UDI) Soap"],[{ $substr: ['$obj.obj.obj.str',17,1] },"Coordinator override Health"],['$obj.num'],[14789,333,21454,{ $subtract: ['$obj.obj.num',18191] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[5594],[{ $dateToString: {date: { $dayOfMonth: new Date("2018-09-06T11:10:49.032Z") },format: "%u-%m-%H-%w-%Y-%m-%Z-%L-%d-%L-%H"} },"Trace digital Rustic Soft Hat"],['$str',{ $toUpper: "Cambridgeshire utilisation" }],[]]] }, _id: 0}}],

        [{$project: {a: { $month: { $hour: { $dayOfYear: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [[],'$obj.num'] },{ $arrayToObject: [[{k: "explicit",v: '$num'},{k: "Synergistic haptic",v: true},{k: "Automotive",v: true}]] }] },month: { $log10: { $log10: 80933 } },day: { $sqrt: 90479 },hour: { $log: ['$obj.obj.obj.num',51617] },second: { $size: [[]] },millisecond: { $divide: [20916,'$num'] }} } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfWeek: new Date("2018-09-06T18:00:13.124Z") },onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $cmp: [{ $substrBytes: ['$obj.obj.obj.str',15,8] },{ $reverseArray: [["red Pizza heuristic"]] }] },month: { $exp: '$obj.obj.obj.num' },day: { $sqrt: 80591 },hour: { $exp: '$num' },millisecond: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Frozen",v: false}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%L-%Y-%L-%m-%w",timezone: "Antarctica/McMurdo",onNull: { $reverseArray: [['$obj.obj.obj.str',"Tools Soft Technician"]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[52964],'$num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Missouri Incredible Soft Ball maximize" } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $second: { $week: { $dayOfMonth: { $hour: { $minute: { $dayOfWeek: { $isoWeek: { $toDate: { $concat: [{ $substr: ["Automotive Licensed",2,1] },{ $toUpper: { $ltrim: { input: { $substrBytes: ["haptic Public-key",5,6] } } } },'$obj.str','$obj.obj.str'] } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: "transform Trail" }],[],[38953]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],91866] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[3945,{ $floor: '$obj.obj.obj.num' }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',{ $toString: { $rtrim: { input: "Interactions Port Credit Card Account" } } }],['$obj.obj.obj.str'],["whiteboard"]]] }, _id: 0}}],

        [{$project: {a: { $toString: { $hour: { $minute: { $millesecond: { $dayOfWeek: { $second: { $month: { $week: { $dayOfYear: { $dateFromParts: {isoWeekYear: { $subtract: [6422,'$num'] },hour: { $pow: ['$obj.num',23913] },minute: { $add: [{ $indexOfArray: [{ $reverseArray: [[60282,197,{ $trunc: '$num' }]] },{ $ltrim: {input: "Automotive maximized",chars: { $substrCP: ["Supervisor Table",6,13] }} },14] },'$num'] },second: { $multiply: [] },millisecond: { $mod: [{ $sqrt: '$num' },12118] }} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "override",v: '$obj.obj.str'},{k: "web services",v: new Date("2018-09-06T12:32:45.372Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: ["Towels Route"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "EXE firewall",v: { $toDate: { $arrayToObject: [[{k: "neutral Ameliorated",v: '$str'},{k: "circuit black",v: true}]] } }}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

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
