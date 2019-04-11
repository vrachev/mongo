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
        return coll.insert({_id: 8140,str: "connect synergy",num: 60481,date: new Date("2018-09-05T23:29:08.051Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8141,str: "redefine",num: 3891,date: new Date("2018-09-06T11:05:20.539Z"),array: [],obj: {_id: 8142,str: "Incredible interfaces",num: 86490,date: new Date("2018-09-06T11:29:55.731Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 8143,str: "Kids Tuna Liaison",num: 12898,date: new Date("2018-09-06T06:20:24.898Z"),array: [],obj: {_id: 8144,str: "Health",num: 55196,date: new Date("2018-09-06T04:03:19.230Z"),array: [[],"cultivate",new Date("2018-09-06T12:00:13.194Z"),80243,"Massachusetts Specialist back up",new Date("2018-09-05T22:40:29.623Z"),{_id: 8145,str: "framework Central",num: 87744,date: new Date("2018-09-06T07:34:38.208Z"),obj: {_id: 8146,str: "invoice SMTP matrix",date: new Date("2018-09-05T20:28:19.082Z"),array: [new Date("2018-09-06T14:31:57.048Z")]}},"high-level white Soft",21073,"Pennsylvania",11301,"Mississippi",[94140,21329,new Date("2018-09-06T00:18:32.061Z"),{_id: 8147,num: 66520,date: new Date("2018-09-06T03:47:44.384Z"),array: [[]]}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8148,str: "Business-focused Pound Sterling Infrastructure",num: 5725,date: new Date("2018-09-06T02:14:15.924Z"),array: [],obj: {_id: 8149,str: "Cheese Mississippi",date: new Date("2018-09-06T02:43:59.094Z"),obj: {_id: 8150,str: "Licensed Plastic Towels array invoice",num: 10373,date: new Date("2018-09-06T00:33:30.589Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8151,str: "Generic Concrete Sausages Directives",date: new Date("2018-09-06T12:49:01.696Z"),array: [new Date("2018-09-06T03:33:41.197Z"),63028,new Date("2018-09-06T14:09:43.628Z"),"Bulgaria copying",new Date("2018-09-06T12:02:33.877Z"),"Ohio","architecture Locks Consultant",[],[new Date("2018-09-06T07:34:41.924Z"),67066],new Date("2018-09-06T10:29:48.995Z"),20186],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8152,str: "Corporate Idaho",date: new Date("2018-09-06T03:59:28.984Z"),array: [32144,"Concrete neural-net",30421,64905,new Date("2018-09-06T15:43:38.427Z"),new Date("2018-09-06T08:20:48.961Z"),52355,[],[],6135,new Date("2018-09-06T17:52:37.418Z"),"Lempira"],obj: {_id: 8153,str: "Intelligent Wooden Soap e-business Operations",num: 45556,array: ["turquoise infrastructure Handcrafted",new Date("2018-09-06T14:16:22.865Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8154,str: "Unbranded Chips Idaho",array: [],obj: {_id: 8155,num: 62934,date: new Date("2018-09-06T09:18:36.058Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8156,str: "Granite Unbranded Personal Loan Account",num: 11068,date: new Date("2018-09-06T05:13:07.079Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8157,str: "compressing",num: 15815,date: new Date("2018-09-06T04:49:12.730Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8158,str: "interface TCP European Unit of Account 9(E.U.A.-9)",num: 44783,array: [["Visionary"],new Date("2018-09-06T18:23:12.907Z"),11444,61508,"Namibia Minnesota",new Date("2018-09-06T15:04:31.970Z"),{_id: 8159,num: 81404,date: new Date("2018-09-06T12:37:08.027Z"),array: [],obj: {}},"Incredible Cotton Car Engineer",74642,new Date("2018-09-06T01:57:06.066Z"),new Date("2018-09-06T00:07:45.953Z"),"proactive","Human",58459],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8160,str: "Expressway",num: 5780,date: new Date("2018-09-06T17:18:23.909Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8161,str: "sticky deposit executive",num: 81025,date: new Date("2018-09-06T01:50:36.816Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8162,str: "Coordinator",num: 80406,date: new Date("2018-09-05T22:41:38.159Z"),array: [[],new Date("2018-09-06T11:36:26.789Z"),new Date("2018-09-06T00:23:30.724Z"),new Date("2018-09-06T03:55:42.242Z"),{_id: 8163,str: "neural",num: 41997,date: new Date("2018-09-05T20:27:39.896Z"),array: [],obj: {}},27915,"Dynamic Guadeloupe",{_id: 8164,str: "focus group incremental Books",num: 9813,array: [46751,"Global Industrial",{_id: 8165,str: "functionalities Concrete Steel",num: 19711,date: new Date("2018-09-06T14:22:40.495Z"),array: ["Forges haptic time-frame",new Date("2018-09-06T13:13:10.222Z")],obj: {}},"withdrawal Object-based",59816],obj: {_id: 8166,num: 26670,array: [],obj: {}}},[],23934]});
    },

    function(coll) {
        return coll.insert({_id: 8167,str: "Senegal",num: 15081,date: new Date("2018-09-06T16:44:27.549Z"),array: [78049,"quantifying Health Sleek Fresh Sausages",new Date("2018-09-06T05:52:39.659Z"),{_id: 8168,str: "Mobility turquoise fuchsia",num: 19900,date: new Date("2018-09-06T03:50:14.640Z"),obj: {}},25330,new Date("2018-09-06T12:50:02.752Z"),97756,"Intelligent",[],{_id: 8169,str: "leverage reboot",date: new Date("2018-09-06T16:19:56.910Z"),array: [85463,new Date("2018-09-06T09:21:18.475Z"),["Jewelery"],"digital withdrawal",new Date("2018-09-06T18:47:00.775Z")],obj: {_id: 8170,num: 11211,date: new Date("2018-09-06T05:35:18.938Z")}}]});
    },

    function(coll) {
        return coll.insert({_id: 8171,str: "bandwidth",num: 57025,date: new Date("2018-09-06T00:36:22.133Z"),array: [],obj: {_id: 8172,str: "matrix Fresh morph",num: 76437,array: [new Date("2018-09-06T00:26:49.871Z"),"Vietnam",64234,16992,68593,new Date("2018-09-06T12:47:16.590Z"),new Date("2018-09-06T15:29:40.822Z"),"Plains",["initiatives",{_id: 8173,str: "Jewelery Wooden",date: new Date("2018-09-06T01:36:20.138Z"),array: [new Date("2018-09-06T10:08:11.949Z"),"Gloves"],obj: {}},new Date("2018-09-06T00:59:08.739Z"),7729,{_id: 8174,str: "Minnesota Generic Soft Salad",num: 5296,date: new Date("2018-09-06T06:01:42.629Z"),array: [new Date("2018-09-06T08:22:25.598Z")],obj: {_id: 8175,num: 63737,date: new Date("2018-09-06T04:17:50.904Z")}}],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 8176,str: "auxiliary Garden coherent",num: 21609,date: new Date("2018-09-06T06:30:14.070Z"),array: ["GB",82026,{_id: 8177,str: "Applications array",num: 56838,date: new Date("2018-09-06T04:47:36.734Z"),array: [],obj: {_id: 8178,num: 22853,date: new Date("2018-09-05T23:30:12.324Z"),array: [new Date("2018-09-05T21:15:44.290Z"),"indexing Knoll connecting",new Date("2018-09-06T11:53:04.351Z"),[23218]],obj: {}}},"metrics Sleek generating",new Date("2018-09-06T07:13:25.133Z"),new Date("2018-09-06T10:29:46.145Z"),{_id: 8179,str: "feed Networked Horizontal",date: new Date("2018-09-06T10:42:35.436Z"),array: [],obj: {}},{_id: 8180,num: 11918,obj: {_id: 8181,str: "array data-warehouse",date: new Date("2018-09-06T15:05:49.745Z")}},"Divide",new Date("2018-09-06T13:17:44.679Z"),{_id: 8182,str: "Personal Loan Account Auto Loan Account generating",date: new Date("2018-09-06T14:19:54.331Z"),array: [],obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8183,str: "workforce",num: 58960,date: new Date("2018-09-06T17:12:07.455Z"),array: [new Date("2018-09-06T19:36:31.856Z"),91633,"knowledge base","Soft back up payment",95015,[],new Date("2018-09-06T13:04:04.249Z"),{_id: 8184,num: 7702,date: new Date("2018-09-06T19:24:54.814Z"),array: ["Investment Account"],obj: {}},{_id: 8185,num: 20104,date: new Date("2018-09-06T07:23:26.977Z"),array: [],obj: {}},new Date("2018-09-06T07:18:14.851Z"),55817,"Borders Practical",[]],obj: {_id: 8186,str: "Group"}});
    },

    function(coll) {
        return coll.insert({_id: 8187,str: "Managed Home Loan Account Toys",num: 86994,date: new Date("2018-09-06T18:25:17.105Z"),array: ["deposit productize","paradigm Avon Horizontal",{_id: 8188,str: "Triple-buffered Central",num: 48166,date: new Date("2018-09-06T17:34:15.991Z"),array: [27200,new Date("2018-09-06T02:17:16.847Z"),"disintermediate Computer",7787],obj: {_id: 8189,str: "incentivize",date: new Date("2018-09-06T00:00:39.448Z"),array: [],obj: {_id: 8190,str: "synergistic",num: 9883,date: new Date("2018-09-05T20:18:57.907Z"),array: [new Date("2018-09-05T23:24:28.958Z"),83714,new Date("2018-09-06T01:56:54.279Z"),"Internal back-end",new Date("2018-09-06T13:24:59.368Z")],obj: {}}}},31594,"olive initiatives Metal",[],53220,"Soft open-source",92102,{_id: 8191,num: 27548,array: [[]]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8192,str: "e-commerce",num: 1074,date: new Date("2018-09-06T10:13:15.487Z"),obj: {_id: 8193,str: "Home Loan Account turn-key Square",num: 76244,array: [],obj: {_id: 8194,num: 56404,array: [{_id: 8195,num: 12769,date: new Date("2018-09-06T04:27:03.035Z"),array: ["Madagascar"],obj: {_id: 8196,str: "Tajikistan Credit Card Account Internal",num: 26094,date: new Date("2018-09-06T12:02:41.588Z"),obj: {}}},"Intuitive",19143,new Date("2018-09-05T23:15:27.784Z"),new Date("2018-09-06T15:47:04.751Z"),"niches",{_id: 8197,str: "Puerto Rico Massachusetts",num: 14911,date: new Date("2018-09-06T12:37:54.409Z"),array: []},[new Date("2018-09-06T01:54:28.336Z")],9626,"Executive Unbranded Fresh Shirt Profound",8270,[],66276,57586,{_id: 8198,str: "reboot Licensed Ball",num: 55683,array: [[],new Date("2018-09-06T18:13:27.382Z")],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 8199,str: "Automotive",num: 72181,date: new Date("2018-09-06T16:01:37.019Z"),array: [],obj: {_id: 8200,str: "attitude Graphical User Interface",date: new Date("2018-09-06T15:31:38.257Z"),array: ["Computer open-source Generic",[98871,new Date("2018-09-06T09:13:02.847Z")],5189,97193,new Date("2018-09-05T20:31:12.316Z"),88743,{_id: 8201,str: "Shoes XSS",num: 37722,date: new Date("2018-09-06T03:29:51.623Z"),array: [],obj: {}},["Coordinator Orchestrator"],89989,"Texas asymmetric Technician","e-commerce AGP",new Date("2018-09-05T21:14:18.895Z"),{_id: 8202,num: 29721,array: []}],obj: {_id: 8203,str: "Orchestrator Uzbekistan",num: 89788,obj: {_id: 8204,obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 8205,str: "Iowa connecting",num: 88816,date: new Date("2018-09-06T14:55:14.499Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8206,str: "Personal Loan Account cyan Multi-channelled",num: 26044,date: new Date("2018-09-06T19:06:41.945Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8207,num: 45764,date: new Date("2018-09-05T21:35:05.991Z"),array: [],obj: {_id: 8208,str: "instruction set",date: new Date("2018-09-06T07:07:57.843Z"),array: ["syndicate Developer Plastic",new Date("2018-09-05T20:11:51.603Z"),new Date("2018-09-06T02:46:34.346Z"),53856,new Date("2018-09-06T06:56:10.403Z"),30066,"Arizona",[["web-enabled"]],33528,54505,"e-enable","Austria",[],[]],obj: {_id: 8209,str: "web-readiness haptic Principal",num: 29578,date: new Date("2018-09-06T05:54:08.978Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8210,str: "architecture Intuitive",num: 90280,date: new Date("2018-09-06T00:36:08.427Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8211,str: "Progressive withdrawal Applications",num: 17307,date: new Date("2018-09-06T08:36:39.622Z"),array: ["Persevering Checking Account",73524,23140,{_id: 8212,str: "overriding",date: new Date("2018-09-06T00:55:56.773Z"),array: [new Date("2018-09-06T12:21:51.811Z"),new Date("2018-09-05T20:38:31.927Z")]},["Customer"],new Date("2018-09-06T09:06:18.806Z"),[],[],new Date("2018-09-06T02:13:44.345Z"),"Liaison",{_id: 8213,str: "Optimized",num: 80149,array: [56172,80678],obj: {}},"Soap deposit",["mission-critical compressing transmit"]],obj: {_id: 8214,date: new Date("2018-09-06T09:48:46.520Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8215,num: 71008,array: ["synergistic transparent customized",new Date("2018-09-06T15:18:52.819Z"),11077,[],"bandwidth Belize Chair",[{_id: 8216,str: "Functionality Ouguiya e-business",num: 97112,date: new Date("2018-09-06T14:24:10.012Z"),array: [],obj: {}},new Date("2018-09-05T20:19:00.135Z"),30967,"niches policy Program",[new Date("2018-09-06T07:32:37.360Z"),7751,new Date("2018-09-06T10:01:26.520Z")],"Dynamic port South Dakota",51045],16268]});
    },

    function(coll) {
        return coll.insert({_id: 8217,num: 80203,date: new Date("2018-09-06T06:30:21.324Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8218,str: "scale Jordan",date: new Date("2018-09-06T18:59:10.412Z"),array: ["Computer Representative challenge","overriding",72923,new Date("2018-09-06T09:04:51.401Z"),"Cotton",new Date("2018-09-06T15:59:08.117Z"),8517,57452,new Date("2018-09-06T10:28:10.351Z"),new Date("2018-09-06T12:31:53.959Z")],obj: {_id: 8219,str: "invoice SMTP US Dollar",num: 31922,date: new Date("2018-09-06T02:21:21.757Z"),array: [],obj: {_id: 8220,str: "De-engineered Lilangeni stable",num: 84578,date: new Date("2018-09-06T12:54:32.596Z"),array: ["Chair Exclusive incubate"]}}});
    },

    function(coll) {
        return coll.insert({_id: 8221,str: "calculate",date: new Date("2018-09-05T22:58:18.030Z"),array: [new Date("2018-09-06T19:24:06.940Z"),80684,92587,"bypassing invoice",new Date("2018-09-06T00:26:19.715Z"),"experiences end-to-end lavender","Automotive",{_id: 8222,num: 63309,date: new Date("2018-09-05T20:33:27.560Z"),array: []}],obj: {_id: 8223,str: "Sao Tome and Principe transform",num: 36191,date: new Date("2018-09-05T22:18:38.771Z"),array: [95342,"Licensed Steel Chair Table Realigned",48215,new Date("2018-09-06T10:15:48.648Z"),[],[{_id: 8224,str: "distributed Stand-alone",date: new Date("2018-09-06T13:08:49.100Z"),array: [],obj: {}},new Date("2018-09-06T19:01:44.585Z"),13440,"bypass Health"]],obj: {_id: 8225,str: "compress bypassing",num: 43734,date: new Date("2018-09-05T22:28:18.765Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8226,str: "Profound",num: 52133,date: new Date("2018-09-06T04:39:45.582Z"),array: ["navigate PNG",77369,"User-centric AI",47419,new Date("2018-09-05T21:16:26.084Z"),33312,90833,{_id: 8227,str: "Developer Mouse discrete",date: new Date("2018-09-06T14:34:47.619Z"),array: [],obj: {}},new Date("2018-09-06T11:04:50.243Z"),"Cambridgeshire sensor",[new Date("2018-09-06T08:42:22.682Z")],new Date("2018-09-06T06:56:18.279Z"),"Sports Bahamas sky blue",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8228,str: "Personal Loan Account Savings Account",num: 23760,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8229,str: "Beauty",num: 75449,date: new Date("2018-09-06T13:28:46.847Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8230,str: "Unbranded Wooden Gloves",num: 76446,date: new Date("2018-09-06T08:37:55.366Z"),array: [5789,new Date("2018-09-06T08:10:19.090Z"),new Date("2018-09-05T22:46:25.642Z"),"Avon New Hampshire Granite",45436,[],new Date("2018-09-05T22:32:17.160Z"),new Date("2018-09-06T10:39:39.409Z"),"Chips","Fresh Borders transitional"],obj: {_id: 8231,str: "yellow",num: 55911,date: new Date("2018-09-06T11:50:11.735Z"),array: [{_id: 8232,str: "dynamic synthesizing",num: 1346,date: new Date("2018-09-06T01:16:58.222Z"),array: [],obj: {}},37585],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8233,str: "Legacy transmit",num: 65363,date: new Date("2018-09-06T00:04:26.829Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8234,str: "haptic",num: 2571,date: new Date("2018-09-06T18:27:06.058Z"),array: ["Optional",23901,{_id: 8235,str: "Buckinghamshire secured line",num: 18518,date: new Date("2018-09-05T22:30:16.215Z"),array: [],obj: {}},new Date("2018-09-06T02:31:01.078Z"),[],31650,"reboot",new Date("2018-09-06T01:17:43.312Z"),new Date("2018-09-06T02:18:31.740Z"),[],57958,["Money Market Account"],[new Date("2018-09-06T15:59:05.637Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 8236,str: "scalable engineer maximized",num: 34539,date: new Date("2018-09-06T05:58:07.165Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8237,str: "Louisiana Sleek",num: 81022,date: new Date("2018-09-06T11:36:40.207Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8238,date: new Date("2018-09-06T09:28:09.983Z"),obj: {_id: 8239,str: "Analyst alarm",num: 37944,date: new Date("2018-09-06T05:34:44.454Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8240,str: "red mission-critical Green",num: 32311,date: new Date("2018-09-06T03:42:02.589Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8241,str: "Avon",num: 30959,date: new Date("2018-09-06T05:40:04.675Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8242,str: "Shirt",num: 5001,date: new Date("2018-09-06T17:18:12.297Z"),array: ["reintermediate optical back up",17545,new Date("2018-09-06T18:32:50.239Z"),new Date("2018-09-06T06:10:25.975Z"),"Unbranded microchip alarm",92172,{_id: 8243,str: "innovate",num: 55428,date: new Date("2018-09-06T17:46:38.685Z"),array: [],obj: {}},new Date("2018-09-06T15:36:40.548Z")]});
    },

    function(coll) {
        return coll.insert({_id: 8244,str: "Architect",num: 30531,date: new Date("2018-09-06T05:23:23.091Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 8245,str: "synthesizing invoice",num: 27167,date: new Date("2018-09-06T16:13:06.210Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8246,str: "hacking PCI Alaska",num: 96271,date: new Date("2018-09-06T02:08:59.352Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8247,str: "Consultant",num: 3904,date: new Date("2018-09-06T13:08:10.245Z"),obj: {_id: 8248,str: "South Africa back-end",num: 23885,date: new Date("2018-09-06T19:11:26.725Z"),array: [new Date("2018-09-06T07:08:26.612Z"),{_id: 8249,str: "connect recontextualize",num: 35082,date: new Date("2018-09-06T11:43:58.518Z"),array: [new Date("2018-09-06T01:01:39.682Z"),new Date("2018-09-05T22:40:03.834Z")]},28758,new Date("2018-09-06T13:54:45.650Z"),"Health copying",[],{_id: 8250,date: new Date("2018-09-06T15:11:43.808Z"),array: ["Regional Bedfordshire"],obj: {_id: 8251,num: 17570,array: [],obj: {}}},"bluetooth",[],"array deposit",998,22748],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8252,str: "reboot",num: 13029,date: new Date("2018-09-05T23:32:57.153Z"),array: [],obj: {_id: 8253,str: "De-engineered bandwidth",num: 76753,date: new Date("2018-09-06T14:20:19.280Z"),array: ["Harbors Checking Account",new Date("2018-09-06T18:18:39.064Z"),{_id: 8254,str: "Gardens Overpass Unbranded Plastic Pants",num: 49661,date: new Date("2018-09-06T13:58:32.480Z"),array: [53013,[],51664,new Date("2018-09-06T04:53:05.305Z"),new Date("2018-09-06T08:42:49.895Z")],obj: {}},new Date("2018-09-05T20:59:50.676Z"),"solutions seize","neural Czech Koruna"]}});
    },

    function(coll) {
        return coll.insert({_id: 8255,str: "Buckinghamshire world-class",num: 27874,date: new Date("2018-09-06T02:48:33.599Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8256,str: "Oman",num: 47359,date: new Date("2018-09-06T18:30:10.499Z"),array: [25143,92822,new Date("2018-09-05T21:26:32.486Z"),new Date("2018-09-06T15:04:15.647Z"),"neutral bandwidth deposit",new Date("2018-09-05T21:32:09.121Z"),"EXE Alabama Object-based",{_id: 8257,str: "Maryland Implementation fuchsia",num: 17741,date: new Date("2018-09-06T08:54:06.537Z"),obj: {_id: 8258,num: 18686,array: []}},{_id: 8259,str: "Cheese Cambridgeshire",date: new Date("2018-09-05T22:25:44.962Z"),obj: {}},99950,new Date("2018-09-06T08:51:20.333Z"),65247],obj: {_id: 8260,str: "cross-media Organized",num: 45626,date: new Date("2018-09-06T08:09:06.110Z"),array: ["programming e-markets Saudi Arabia"]}});
    },

    function(coll) {
        return coll.insert({_id: 8261,str: "monitor Delaware",num: 26470,date: new Date("2018-09-06T08:29:11.980Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8262,str: "paradigms",num: 95129,date: new Date("2018-09-06T05:44:42.781Z"),array: [],obj: {_id: 8263,str: "Rustic Metal Shoes Response",date: new Date("2018-09-06T11:09:03.914Z"),array: [26589,[46588,new Date("2018-09-06T12:40:19.580Z"),new Date("2018-09-06T12:56:47.087Z")],"Tasty",new Date("2018-09-06T07:03:44.473Z"),"Gorgeous Cotton Salad synergistic Lights",new Date("2018-09-06T02:37:54.880Z"),"parsing Jersey Directives",[12698,[new Date("2018-09-06T18:04:51.647Z")],96446],"GB",[],{_id: 8264,str: "Money Market Account",num: 73165,date: new Date("2018-09-06T18:31:58.866Z"),array: [],obj: {}},{_id: 8265,obj: {}},"USB pink repurpose"]}});
    },

    function(coll) {
        return coll.insert({_id: 8266,str: "Table",num: 59925,date: new Date("2018-09-05T22:19:36.894Z"),obj: {_id: 8267,str: "digital Guinea Franc bandwidth",num: 8936,date: new Date("2018-09-06T04:46:20.092Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 8268,str: "reboot evolve",date: new Date("2018-09-06T04:13:13.715Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8269,str: "violet withdrawal",num: 51688,date: new Date("2018-09-05T23:47:08.690Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8270,str: "Books Sports Intelligent Steel Shoes",num: 53113,date: new Date("2018-09-05T20:32:36.031Z"),array: [new Date("2018-09-06T00:07:02.021Z"),{_id: 8271,str: "Credit Card Account",num: 41330,date: new Date("2018-09-05T20:02:06.878Z"),array: ["Investor"],obj: {_id: 8272,str: "Games e-commerce Granite",num: 40708,date: new Date("2018-09-06T19:30:14.539Z"),array: [],obj: {}}},65026,85614,"pink lavender innovative",[],new Date("2018-09-06T02:18:46.561Z"),13646,"local area network bus","calculating",new Date("2018-09-06T15:54:42.674Z"),68117],obj: {_id: 8273,str: "Bedfordshire",num: 62639,array: [{_id: 8274,str: "Profound FTP EXE"},{_id: 8275,str: "repurpose",num: 17057}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8276,str: "morph calculating Architect",num: 30076,date: new Date("2018-09-06T04:41:14.852Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8277,num: 43917,date: new Date("2018-09-06T09:40:38.481Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8278,str: "deposit",date: new Date("2018-09-06T00:03:25.641Z"),array: ["Fantastic",{_id: 8279,str: "Accounts",num: 92107,date: new Date("2018-09-06T04:27:20.444Z"),array: [],obj: {_id: 8280,num: 67340,date: new Date("2018-09-06T10:29:24.670Z"),obj: {_id: 8281,str: "Mississippi indexing",num: 11366,array: [],obj: {}}}},new Date("2018-09-06T02:56:58.861Z"),"open-source Granite tan",{_id: 8282,num: 60682,date: new Date("2018-09-05T20:25:07.765Z"),array: [[],new Date("2018-09-06T18:08:38.878Z"),70771,"Steel Music Kina",[],new Date("2018-09-06T17:21:46.855Z"),41327],obj: {_id: 8283,num: 62723,array: [],obj: {_id: 8284,str: "Virginia applications Saint Helena Pound",date: new Date("2018-09-06T08:40:08.354Z")}}},73115,"South Carolina Refined full-range",new Date("2018-09-06T02:24:22.610Z"),new Date("2018-09-05T21:10:47.675Z"),75689]});
    },

    function(coll) {
        return coll.insert({_id: 8285,str: "withdrawal",num: 80301,date: new Date("2018-09-06T17:42:37.370Z"),array: [],obj: {_id: 8286,str: "Unbranded purple",num: 34301,date: new Date("2018-09-06T06:49:06.005Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8287,str: "orchid programming",num: 16017,date: new Date("2018-09-06T10:34:33.009Z"),array: [new Date("2018-09-06T17:30:09.112Z"),[],new Date("2018-09-06T01:15:56.599Z"),[new Date("2018-09-06T06:44:16.456Z"),68075],"Accounts black",30918,"synthesize Awesome Ergonomic","navigate calculating",9900,"online hardware",{_id: 8288,str: "panel Branding",num: 90303,date: new Date("2018-09-05T20:38:48.727Z"),obj: {_id: 8289,str: "payment",num: 10029,array: [],obj: {}}},{_id: 8290,date: new Date("2018-09-06T15:08:23.460Z"),array: [],obj: {_id: 8291,str: "multi-byte",num: 267,date: new Date("2018-09-06T08:12:17.618Z"),array: [],obj: {}}},"hierarchy"]});
    },

    function(coll) {
        return coll.insert({_id: 8292,str: "Kids",num: 20482,date: new Date("2018-09-06T10:12:37.977Z"),array: [],obj: {_id: 8293,str: "San Marino sky blue Brand",num: 26168,date: new Date("2018-09-06T18:01:43.696Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 8294,str: "Handmade killer",date: new Date("2018-09-06T03:36:53.850Z"),array: [new Date("2018-09-06T08:40:15.398Z"),44562,new Date("2018-09-06T04:39:12.417Z"),"Hawaii",93176,["Ohio",new Date("2018-09-05T21:23:17.742Z"),{_id: 8295,str: "compressing paradigms Total",num: 54027,date: new Date("2018-09-06T00:46:45.605Z"),array: []},"Industrial architectures Central",90247],"maximize",14251,59958,{_id: 8296,num: 4594,array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8297,str: "Falkland Islands (Malvinas)",num: 96161,date: new Date("2018-09-06T13:53:46.442Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8298,num: 35809,date: new Date("2018-09-05T23:27:41.357Z"),obj: {_id: 8299,str: "hacking",num: 29541,date: new Date("2018-09-06T17:36:40.688Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8300,str: "Incredible",num: 86130,date: new Date("2018-09-06T14:47:45.947Z"),array: [[],18553,"Incredible",new Date("2018-09-06T15:30:09.150Z"),new Date("2018-09-06T05:19:50.156Z"),"Tools",{_id: 8301,str: "transmit Functionality",num: 56795,date: new Date("2018-09-06T19:04:28.805Z"),array: [],obj: {_id: 8302,str: "maroon Investor Jewelery",num: 95317,date: new Date("2018-09-06T19:42:34.739Z"),array: [58592,[]],obj: {_id: 8303,str: "Chair Gorgeous Cotton Soap Intelligent",num: 99177,array: [],obj: {}}}},90561,new Date("2018-09-06T07:07:56.345Z"),new Date("2018-09-06T18:53:38.417Z"),"override","primary",16286],obj: {_id: 8304,num: 91479,date: new Date("2018-09-05T22:01:17.801Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8305,str: "dot-com homogeneous primary",num: 87008,date: new Date("2018-09-06T16:39:01.556Z"),array: ["Administrator ADP sensor",[new Date("2018-09-05T22:13:30.932Z"),9963,new Date("2018-09-05T22:34:43.769Z")],7133,[],{_id: 8306,str: "policy",num: 11955,date: new Date("2018-09-06T12:41:55.739Z"),obj: {_id: 8307,str: "override",num: 1400,date: new Date("2018-09-06T13:52:40.079Z"),array: [],obj: {}}},"Intelligent Fresh Chips Multi-channelled",{_id: 8308,num: 80964,date: new Date("2018-09-06T17:04:00.369Z"),array: ["engineer mission-critical IB",new Date("2018-09-06T18:46:10.133Z"),91566,73046,"index Tasty Cotton Pizza withdrawal"],obj: {_id: 8309,str: "Electronics Rustic",obj: {}}},[],{_id: 8310,num: 34352,date: new Date("2018-09-06T14:16:16.984Z"),array: [[]],obj: {_id: 8311,str: "Small",num: 39023,date: new Date("2018-09-06T11:14:27.674Z"),array: [new Date("2018-09-06T19:36:43.519Z"),new Date("2018-09-05T22:22:38.054Z")]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8312,str: "Fresh bandwidth",num: 63486,date: new Date("2018-09-06T17:36:05.397Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8313,str: "Chicken",num: 52855,date: new Date("2018-09-06T04:19:40.869Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8314,str: "Berkshire transitional",num: 47116,date: new Date("2018-09-06T01:33:26.086Z"),array: [new Date("2018-09-06T14:01:29.024Z"),1210,"Australian Dollar Tunnel","framework",{_id: 8315,str: "Buckinghamshire Technician",num: 16305,date: new Date("2018-09-06T07:12:41.776Z"),array: [],obj: {}},new Date("2018-09-05T20:41:24.541Z"),[],"interface",new Date("2018-09-06T18:28:44.713Z"),new Date("2018-09-06T04:05:36.867Z"),38518,[41258]]});
    },

    function(coll) {
        return coll.insert({_id: 8316,str: "Developer",num: 99261,date: new Date("2018-09-06T02:40:10.269Z"),array: [[],"gold",new Date("2018-09-05T20:25:53.211Z"),10762,new Date("2018-09-06T10:28:49.015Z"),"generate ADP cross-platform",[84424],"Ergonomic withdrawal Table",37204,"composite Unbranded Rubber Table lavender",{_id: 8317,num: 3499,date: new Date("2018-09-06T06:41:36.251Z"),array: [],obj: {_id: 8318,str: "National Ford",num: 38191,date: new Date("2018-09-05T21:30:55.396Z"),array: [new Date("2018-09-06T04:20:35.962Z"),"Handmade Plastic Gloves firewall",{_id: 8319,obj: {}},new Date("2018-09-06T12:35:55.165Z")],obj: {}}}],obj: {_id: 8320,str: "strategic",num: 59452,array: [new Date("2018-09-06T08:16:37.227Z"),[],56836]}});
    },

    function(coll) {
        return coll.insert({_id: 8321,num: 24383,date: new Date("2018-09-06T18:02:25.215Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8322,str: "microchip software",num: 75121,date: new Date("2018-09-06T04:58:36.643Z")});
    },

    function(coll) {
        return coll.insert({_id: 8323,str: "end-to-end Licensed Frozen Gloves",num: 82837,date: new Date("2018-09-06T08:32:14.697Z"),array: [42171,new Date("2018-09-06T08:24:57.261Z"),{_id: 8324,str: "Designer",num: 84961,date: new Date("2018-09-06T15:38:36.185Z"),array: [],obj: {_id: 8325,str: "Games Future",num: 51902,date: new Date("2018-09-06T02:04:10.138Z"),obj: {}}},45467,[],81634]});
    },

    function(coll) {
        return coll.insert({_id: 8326,str: "Profound front-end",num: 44692,array: [],obj: {_id: 8327,num: 23303,date: new Date("2018-09-06T03:35:03.063Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8328,str: "Quality-focused",num: 98307,date: new Date("2018-09-06T13:24:10.700Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8329,str: "Shirt Borders Brunei Dollar",num: 85315,date: new Date("2018-09-06T13:10:34.874Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8330,str: "withdrawal Producer optimize",num: 33012,date: new Date("2018-09-06T11:45:51.245Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 8331,str: "frame California Practical",num: 16348,array: ["Brunei Dollar Division",88740,"Auto Loan Account Facilitator",95730,new Date("2018-09-05T23:56:13.388Z"),new Date("2018-09-05T19:58:38.635Z"),{_id: 8332,str: "viral Steel Directives",num: 64120,date: new Date("2018-09-05T20:44:41.884Z"),array: [new Date("2018-09-06T00:05:38.565Z")]},29602,new Date("2018-09-06T10:11:11.659Z"),{_id: 8333,str: "deliverables",num: 27758,date: new Date("2018-09-06T03:43:59.992Z"),array: [],obj: {_id: 8334,str: "Interactions Mobility",num: 68687,date: new Date("2018-09-06T12:10:35.496Z"),array: ["navigating Planner Self-enabling",99858],obj: {}}},[],"programming",{_id: 8335,num: 17927,date: new Date("2018-09-06T08:04:52.824Z"),obj: {_id: 8336,date: new Date("2018-09-06T07:11:36.590Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 8337,str: "Checking Account",num: 48727,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8338,str: "Managed invoice",num: 29029,date: new Date("2018-09-06T02:16:30.021Z"),array: [63365,"infrastructure THX",new Date("2018-09-05T23:42:56.725Z"),87738,[],63017,"Borders"],obj: {_id: 8339,str: "bandwidth",date: new Date("2018-09-05T22:46:44.115Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8340,str: "generating",num: 36217,array: [89611,{_id: 8341,str: "incubate channels",num: 53550,date: new Date("2018-09-06T14:21:11.916Z"),array: []},"Greenland",new Date("2018-09-06T07:37:52.319Z"),"Fully-configurable Personal Loan Account",new Date("2018-09-06T00:39:52.825Z"),75748,46849,[],new Date("2018-09-06T02:35:49.312Z"),new Date("2018-09-05T23:08:03.229Z")],obj: {_id: 8342,str: "B2C auxiliary Washington",num: 99736,date: new Date("2018-09-05T20:51:55.967Z"),array: [{_id: 8343,date: new Date("2018-09-06T15:16:03.043Z"),obj: {}},"Licensed Granite Towels"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8344,str: "Refined Granite Computer",array: [],obj: {_id: 8345,str: "Optional Chicken",num: 63614,date: new Date("2018-09-06T04:19:16.051Z"),array: [71906,46728,"UIC-Franc revolutionary Western Sahara",new Date("2018-09-05T22:09:37.340Z"),89659,[],"Analyst Bedfordshire","structure SMTP program",{_id: 8346,str: "transmit programming exuding",num: 3629,array: [47953,{_id: 8347,str: "Sausages",date: new Date("2018-09-06T00:26:56.700Z"),array: [],obj: {}}],obj: {_id: 8348,str: "foreground",num: 12437,date: new Date("2018-09-06T10:57:51.320Z"),obj: {_id: 8349,num: 41847,date: new Date("2018-09-05T23:55:21.833Z"),array: [new Date("2018-09-06T08:53:35.668Z"),69135,"dynamic"]}}},new Date("2018-09-06T02:22:10.100Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8350,str: "Buckinghamshire Shirt",num: 49484,date: new Date("2018-09-06T01:23:22.458Z"),array: ["azure Bahraini Dinar","morph",new Date("2018-09-05T21:23:59.177Z"),79521,[],"Fantastic Borders models",25415,new Date("2018-09-06T07:17:55.309Z"),"invoice end-to-end",17598,{_id: 8351,str: "Auto Loan Account",num: 50236,array: [new Date("2018-09-06T05:56:07.923Z"),[29774,76165,{_id: 8352,num: 42972,date: new Date("2018-09-06T12:26:24.012Z"),array: [],obj: {_id: 8353,date: new Date("2018-09-06T15:48:34.835Z"),obj: {_id: 8354,str: "interactive",num: 2494}}}]],obj: {}},new Date("2018-09-06T12:41:46.219Z")]});
    },

    function(coll) {
        return coll.insert({_id: 8355,str: "Principal blue",num: 45220,date: new Date("2018-09-05T22:04:12.406Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8356,str: "bandwidth infrastructures ADP",num: 89997,date: new Date("2018-09-06T03:09:54.813Z"),array: [new Date("2018-09-06T19:33:43.537Z"),"Handmade Rubber Bike matrix","indexing Chicken Auto Loan Account",22150,new Date("2018-09-06T14:16:37.737Z"),"Tennessee Central",30996,43387,new Date("2018-09-06T05:09:49.302Z"),36005,[],[{_id: 8357,str: "microchip systemic",date: new Date("2018-09-06T07:36:07.636Z"),array: [],obj: {}},"PCI Principal"],{_id: 8358,str: "bypassing Plastic",num: 55857,date: new Date("2018-09-06T15:12:33.717Z"),array: [[]],obj: {_id: 8359,num: 65855,date: new Date("2018-09-05T21:38:44.012Z"),array: ["withdrawal THX"]}}],obj: {_id: 8360,str: "navigating systems",num: 32183,date: new Date("2018-09-06T01:19:19.813Z")}});
    },

    function(coll) {
        return coll.insert({_id: 8361,str: "Multi-lateral Norwegian Krone",num: 36970,date: new Date("2018-09-05T19:57:01.247Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8362,str: "Quetzal New York Handmade Concrete Ball",date: new Date("2018-09-06T02:23:39.264Z"),array: [],obj: {_id: 8363,str: "Arizona Kyrgyz Republic composite",num: 79635,date: new Date("2018-09-06T12:25:04.746Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8364,num: 68546,array: [74240,new Date("2018-09-06T15:16:37.404Z"),29350,new Date("2018-09-06T17:20:39.570Z"),{_id: 8365,str: "calculating United Kingdom cross-platform",num: 47940,date: new Date("2018-09-05T23:09:05.318Z"),array: [],obj: {_id: 8366,str: "Credit Card Account Israel indexing",num: 91838,date: new Date("2018-09-06T15:16:04.871Z"),array: [],obj: {_id: 8367,str: "Cambridgeshire migration",num: 47207,array: [new Date("2018-09-05T21:48:44.108Z"),{_id: 8368,str: "auxiliary sticky",date: new Date("2018-09-06T07:57:20.054Z"),obj: {_id: 8369,num: 80724,obj: {}}}]}}},"Iowa relationships",62868,"foreground JBOD Fields","networks European Unit of Account 17(E.U.A.-17)",[],"Sports"]});
    },

    function(coll) {
        return coll.insert({_id: 8370,str: "Keyboard Digitized",num: 75989,date: new Date("2018-09-06T19:39:34.145Z"),array: [49370,new Date("2018-09-06T09:13:25.886Z"),[],"Managed",76972,new Date("2018-09-06T11:24:37.464Z"),"Rustic gold modular",["schemas"],14316,21686,new Date("2018-09-06T00:11:31.519Z"),{_id: 8371,str: "Cambridgeshire",num: 21634,date: new Date("2018-09-06T07:11:02.377Z"),array: [],obj: {_id: 8372,str: "Consultant Forward",date: new Date("2018-09-06T12:21:31.863Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8373,str: "bypassing Plastic adapter",num: 78899,date: new Date("2018-09-06T00:53:29.194Z"),array: ["Chief",new Date("2018-09-06T09:02:18.687Z"),40761,52121,"Orchestrator Licensed Cotton Mouse",69019,"Incredible analyzing Architect",new Date("2018-09-06T17:07:19.977Z")],obj: {_id: 8374,str: "Licensed",num: 81513,array: [],obj: {_id: 8375,str: "PNG",num: 68892,date: new Date("2018-09-06T13:56:05.530Z"),array: [[],new Date("2018-09-06T13:13:41.181Z"),"Orchestrator composite",[3296,"Salad",{_id: 8376,date: new Date("2018-09-06T12:01:21.905Z"),array: [],obj: {}}],28518,{_id: 8377,num: 16214,date: new Date("2018-09-06T09:30:28.004Z"),array: [new Date("2018-09-06T06:04:11.889Z")],obj: {_id: 8378,str: "Program Operations Generic Wooden Cheese",date: new Date("2018-09-06T16:41:42.935Z")}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 8379,str: "haptic River",num: 59399,date: new Date("2018-09-05T23:37:46.159Z"),array: ["Nebraska Dynamic Buckinghamshire",new Date("2018-09-06T15:06:14.741Z"),5884,new Date("2018-09-06T03:43:38.681Z"),24832,new Date("2018-09-06T18:30:24.951Z"),37706,"dynamic Regional","SAS vortals",97293],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8380,str: "Maryland",num: 68097,date: new Date("2018-09-06T00:20:53.717Z"),array: [],obj: {_id: 8381,str: "Cotton copy",num: 39596,date: new Date("2018-09-06T01:54:27.497Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8382,str: "TCP niches Music",num: 39947,date: new Date("2018-09-06T08:12:03.647Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8383,str: "Fish hacking",num: 68091,date: new Date("2018-09-05T20:06:54.475Z"),array: [],obj: {_id: 8384,str: "Steel",num: 61083,date: new Date("2018-09-06T09:37:43.519Z"),obj: {_id: 8385,str: "Borders robust Checking Account",num: 72507,date: new Date("2018-09-05T20:10:04.701Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8386,str: "Cambridgeshire transition Computers",num: 72780,date: new Date("2018-09-06T06:22:04.807Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8387,str: "Personal Loan Account portals",num: 21637,date: new Date("2018-09-06T08:37:29.778Z"),array: [{_id: 8388,str: "sky blue global",num: 30115,date: new Date("2018-09-06T03:37:30.526Z"),array: [],obj: {}},99627,new Date("2018-09-06T12:23:56.457Z"),"Grocery Jewelery",62930,new Date("2018-09-06T10:06:23.494Z"),70971,["Garden firewall mint green",new Date("2018-09-06T00:12:33.413Z"),"withdrawal","neutral Lead"],new Date("2018-09-06T19:35:33.121Z"),{_id: 8389,str: "Representative Lead",num: 51853,date: new Date("2018-09-06T14:48:08.878Z"),array: [],obj: {}},99720,"Checking Account Savings Account Berkshire"],obj: {_id: 8390,str: "Technician niches Chips",date: new Date("2018-09-06T17:36:30.699Z"),array: [],obj: {_id: 8391,num: 69374,date: new Date("2018-09-06T16:29:34.202Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 8392,num: 26901,date: new Date("2018-09-06T10:21:07.934Z"),array: [43732,"intuitive dot-com Practical",new Date("2018-09-05T22:22:52.962Z"),new Date("2018-09-06T19:11:00.175Z"),"parsing",42825,"Cambridgeshire Credit Card Account Mississippi",{_id: 8393,str: "Sudan Steel",date: new Date("2018-09-06T04:15:18.289Z"),array: [new Date("2018-09-06T03:27:36.154Z")],obj: {}},"engage Bedfordshire",[],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8394,str: "schemas Soft Somoni",date: new Date("2018-09-06T10:35:13.677Z"),array: [new Date("2018-09-06T07:44:08.933Z"),"Bedfordshire",new Date("2018-09-06T15:42:44.945Z"),"ADP",94419,"dynamic",36081,new Date("2018-09-06T05:55:58.571Z"),{_id: 8395,str: "Algeria",num: 33301,date: new Date("2018-09-06T07:41:00.587Z"),array: []},new Date("2018-09-06T07:23:24.128Z"),"4th generation array Sleek Soft Bike",25693,new Date("2018-09-05T22:15:31.169Z"),"mobile reintermediate Divide"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8396,str: "deposit Principal",num: 97051,array: [new Date("2018-09-06T06:05:55.367Z"),new Date("2018-09-05T21:26:24.204Z"),"Customizable Specialist",60898,62891,[],29027,"panel Ethiopian Birr",{_id: 8397,str: "Northern Mariana Islands",num: 4870,obj: {_id: 8398,str: "Auto Loan Account",num: 61821,date: new Date("2018-09-06T01:16:42.716Z"),array: ["Auto Loan Account maximized"],obj: {}}},"RSS",new Date("2018-09-06T04:07:08.369Z")],obj: {_id: 8399,num: 99778,date: new Date("2018-09-05T22:40:51.346Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8400,str: "JSON cutting-edge",num: 57317,date: new Date("2018-09-06T09:37:20.159Z"),array: [98828,new Date("2018-09-06T12:50:06.779Z"),[],"Table","New Caledonia",74386,new Date("2018-09-06T10:49:20.463Z"),{_id: 8401,str: "Connecticut Ball",num: 24189,date: new Date("2018-09-06T07:27:04.883Z"),array: [{_id: 8402,str: "Djibouti Small Metal Shirt Electronics",num: 73679,date: new Date("2018-09-05T22:13:13.960Z"),array: [],obj: {}},new Date("2018-09-06T19:26:47.882Z"),"Money Market Account deposit",new Date("2018-09-06T16:16:19.619Z"),{_id: 8403,str: "Handmade Rubber Chips",num: 13205,obj: {_id: 8404,str: "Response Sausages card",num: 94334,obj: {_id: 8405,date: new Date("2018-09-05T23:35:33.284Z"),array: [70536]}}}]},new Date("2018-09-06T13:10:30.193Z"),"Gibraltar Pound bleeding-edge Rhode Island",{_id: 8406,str: "Bedfordshire",array: [4329,{_id: 8407,num: 40173,array: [],obj: {}},[]]}]});
    },

    function(coll) {
        return coll.insert({_id: 8408,num: 19580,date: new Date("2018-09-06T15:23:19.954Z"),array: [],obj: {_id: 8409,str: "Steel",date: new Date("2018-09-06T16:56:35.532Z"),array: [new Date("2018-09-06T07:30:39.146Z"),{_id: 8410,str: "cyan Designer",num: 96818,date: new Date("2018-09-06T03:27:20.767Z"),obj: {_id: 8411,str: "Direct",num: 70521,array: ["24/7","even-keeled benchmark",52701,"Extended Florida",[]],obj: {_id: 8412,num: 51679,date: new Date("2018-09-06T05:32:38.687Z"),array: [],obj: {}}}},97315,new Date("2018-09-06T05:55:29.095Z"),new Date("2018-09-06T17:09:35.675Z"),[48167,"magnetic calculating",{_id: 8413,str: "UAE Dirham GB",date: new Date("2018-09-06T04:05:11.202Z"),obj: {}}],[99074],[new Date("2018-09-06T17:37:16.204Z"),16806,{_id: 8414,str: "payment Chile quantifying",num: 80003,array: [97953]}],new Date("2018-09-06T09:20:48.649Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 8415,str: "card",num: 58689,date: new Date("2018-09-06T03:09:38.018Z"),array: [{_id: 8416,str: "Home Loan Account sensor Communications",num: 71859,array: [88992],obj: {_id: 8417,str: "Checking Account unleash auxiliary",num: 23394,date: new Date("2018-09-06T11:37:56.908Z"),array: [],obj: {_id: 8418,num: 22264,date: new Date("2018-09-06T01:27:15.383Z")}}},"transmitting Hollow Canada","San Marino National clicks-and-mortar",new Date("2018-09-06T06:14:29.526Z"),new Date("2018-09-06T02:20:09.233Z"),21968,["Intuitive HDD Keyboard"],new Date("2018-09-06T06:05:02.100Z"),43384,new Date("2018-09-05T23:24:24.620Z"),{_id: 8419,array: [],obj: {}},[],"Generic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8420,str: "mindshare",num: 87691,date: new Date("2018-09-06T07:43:07.419Z"),array: [[60840,"SMTP withdrawal Luxembourg",new Date("2018-09-06T12:13:59.253Z"),52917,"bleeding-edge Trinidad and Tobago"],new Date("2018-09-06T13:41:37.981Z"),99050,32924,89503,"Generic Plastic Towels",{_id: 8421,num: 98141,date: new Date("2018-09-06T13:58:53.578Z"),array: [],obj: {}},[[]],new Date("2018-09-06T13:14:59.662Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8422,str: "Liaison",num: 84665,date: new Date("2018-09-06T06:32:24.395Z"),array: [[],7050,new Date("2018-09-06T04:55:46.691Z"),36863,{_id: 8423,str: "local area network harness",num: 31228,date: new Date("2018-09-05T21:01:05.034Z"),array: [],obj: {}},[],new Date("2018-09-06T09:34:39.147Z"),"Guinea Franc Quality-focused",{_id: 8424,str: "Florida Plastic",num: 96222,date: new Date("2018-09-06T06:39:13.095Z"),array: []},"Generic Viaduct collaborative",{_id: 8425,num: 1097,date: new Date("2018-09-06T02:31:59.451Z"),array: [[[8364,52507,"Personal Loan Account"],new Date("2018-09-06T19:48:11.315Z")]],obj: {_id: 8426,str: "orchestrate Technician",num: 97476,array: [],obj: {_id: 8427,str: "array",num: 19878,date: new Date("2018-09-06T17:04:00.662Z"),obj: {}}}},new Date("2018-09-06T08:45:19.460Z")]});
    },

    function(coll) {
        return coll.insert({_id: 8428,num: 63912,date: new Date("2018-09-06T01:43:58.704Z"),array: [68182,new Date("2018-09-06T09:37:08.817Z"),49011,new Date("2018-09-05T20:21:08.335Z"),87802,42745,{_id: 8429,str: "Creative",array: []},"infrastructures Utah turquoise","Fresh mint green",{_id: 8430,str: "Virginia Lead",num: 3893,date: new Date("2018-09-06T02:26:27.235Z"),array: [new Date("2018-09-06T13:50:18.692Z")],obj: {_id: 8431,str: "Wooden Fields",num: 87004,date: new Date("2018-09-06T12:33:21.742Z"),array: [23382],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8432,str: "attitude adapter empower",num: 2527,array: [],obj: {_id: 8433,num: 24872,date: new Date("2018-09-06T19:38:48.093Z"),array: [],obj: {_id: 8434,str: "Wisconsin Shoes",date: new Date("2018-09-06T12:11:48.924Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8435,num: 70398,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8436,str: "Unbranded Wooden Tuna Steel Switchable",num: 898,date: new Date("2018-09-06T16:25:38.760Z"),array: [42842,{_id: 8437,str: "24 hour",num: 41486,date: new Date("2018-09-06T17:04:53.407Z"),array: ["Architect deposit"],obj: {}},79164,new Date("2018-09-06T05:16:02.945Z"),new Date("2018-09-06T03:32:23.883Z"),[],"Iowa architectures Realigned",12353,[],new Date("2018-09-06T11:34:36.562Z"),"mobile","GB system engine firewall",new Date("2018-09-06T02:29:36.693Z")],obj: {_id: 8438,num: 5922,obj: {_id: 8439,str: "Multi-tiered AI green",array: [],obj: {_id: 8440,str: "Associate Taiwan",num: 3576,date: new Date("2018-09-06T06:38:00.893Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 8441,str: "channels Gorgeous Interactions",num: 89083,date: new Date("2018-09-06T18:58:45.268Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8442,str: "Producer",num: 5963,date: new Date("2018-09-06T03:40:22.378Z"),array: [],obj: {_id: 8443,num: 84086,date: new Date("2018-09-06T00:57:39.974Z"),array: [new Date("2018-09-05T20:40:01.497Z"),"intermediate","Cambridgeshire",{_id: 8444,str: "Fresh Cotton",date: new Date("2018-09-06T07:36:32.006Z"),array: [new Date("2018-09-06T08:09:18.339Z"),84747,"Program"],obj: {}},[],93150,new Date("2018-09-05T22:10:29.834Z"),"Views protocol",new Date("2018-09-06T10:45:19.850Z"),51650,[[10656,{_id: 8445,str: "Leone repurpose firewall",date: new Date("2018-09-06T03:21:47.562Z")},58883]],[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8446,str: "Supervisor",num: 8808,date: new Date("2018-09-06T06:46:02.091Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8447,num: 70974,date: new Date("2018-09-06T06:36:32.526Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8448,str: "Forward CSS",num: 72167,date: new Date("2018-09-06T01:31:05.745Z"),obj: {_id: 8449,str: "Checking Account Trail",num: 73859,date: new Date("2018-09-06T11:23:27.533Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8450,str: "metrics",num: 82035,date: new Date("2018-09-06T09:46:15.801Z"),array: [],obj: {_id: 8451,str: "alarm Inverse unleash",date: new Date("2018-09-06T14:12:13.220Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8452,str: "Soft neural-net",num: 57480,date: new Date("2018-09-06T05:35:54.520Z"),array: [],obj: {_id: 8453,str: "alarm global Libyan Dinar",num: 46426,date: new Date("2018-09-06T11:17:37.838Z"),array: [31340,new Date("2018-09-06T14:01:49.896Z"),[],"multi-byte",new Date("2018-09-06T06:34:00.057Z"),[76089,"Computer HTTP",new Date("2018-09-06T12:19:12.960Z"),"silver Beauty"],16827,37566,45453,new Date("2018-09-06T06:50:36.794Z"),new Date("2018-09-06T01:24:48.241Z"),{_id: 8454,date: new Date("2018-09-06T01:49:36.211Z"),obj: {}}],obj: {_id: 8455,str: "Re-engineered",num: 84138,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8456,str: "Awesome Metal Bacon transmitting impactful",num: 45263,date: new Date("2018-09-06T13:58:34.852Z"),array: [new Date("2018-09-05T23:05:35.127Z"),"Fresh Configuration Integration",[30693,new Date("2018-09-06T15:00:48.492Z"),89526],"concept",new Date("2018-09-06T03:14:55.456Z"),17003,"disintermediate",{_id: 8457,str: "Checking Account",num: 55387,date: new Date("2018-09-06T13:16:15.578Z"),array: [54545,[],[]],obj: {_id: 8458,str: "array solid state bandwidth",obj: {}}},{_id: 8459,str: "Australian Dollar UIC-Franc",num: 40511,date: new Date("2018-09-06T14:41:47.861Z"),array: [],obj: {_id: 8460,str: "incentivize Stream programming",num: 4077,date: new Date("2018-09-06T11:24:14.632Z")}}]});
    },

    function(coll) {
        return coll.insert({_id: 8461,str: "transmit Chair Lek",num: 392,date: new Date("2018-09-06T09:16:03.629Z"),array: [83510,"card enterprise Buckinghamshire",new Date("2018-09-06T19:30:36.493Z"),new Date("2018-09-06T16:38:53.947Z"),"Chair",79403,"cyan National",new Date("2018-09-06T12:11:38.332Z"),{_id: 8462,str: "JSON",num: 1438,date: new Date("2018-09-06T05:31:31.159Z"),array: [11841,new Date("2018-09-06T16:21:43.081Z"),new Date("2018-09-05T22:39:11.545Z")],obj: {}}],obj: {_id: 8463,date: new Date("2018-09-06T13:31:57.377Z")}});
    },

    function(coll) {
        return coll.insert({_id: 8464,str: "rich Small Frozen Towels superstructure",num: 61241,date: new Date("2018-09-05T23:09:17.582Z"),array: [[new Date("2018-09-06T19:08:17.541Z"),new Date("2018-09-06T17:38:05.248Z"),57096],{_id: 8465,num: 69726,date: new Date("2018-09-06T07:13:41.531Z"),array: [],obj: {}},{_id: 8466,str: "Chair Hollow",num: 42108,date: new Date("2018-09-06T15:00:28.011Z"),array: [],obj: {_id: 8467,str: "Keyboard",num: 34630,date: new Date("2018-09-06T13:40:11.693Z"),array: [],obj: {_id: 8468,str: "Technician RAM",date: new Date("2018-09-06T18:13:10.421Z"),obj: {_id: 8469,num: 96996,date: new Date("2018-09-06T07:19:25.877Z"),array: ["interactive Hat Handmade Cotton Ball"]}}}},"Cuban Peso Peso Convertible Principal index",9078,new Date("2018-09-06T01:28:13.534Z"),{_id: 8470,str: "withdrawal",num: 78771,array: []},23545,40229,"Orchestrator",new Date("2018-09-06T08:25:20.665Z"),98210]});
    },

    function(coll) {
        return coll.insert({_id: 8471,str: "Romania Security architectures",num: 30351,date: new Date("2018-09-06T18:57:10.909Z"),array: ["Borders SMTP",new Date("2018-09-06T16:09:11.648Z"),{_id: 8472,str: "scale Cambridgeshire",num: 11449,date: new Date("2018-09-05T23:22:48.763Z"),array: [],obj: {_id: 8473,str: "program",num: 58151,date: new Date("2018-09-06T12:52:29.908Z"),array: [],obj: {_id: 8474,num: 53459,date: new Date("2018-09-05T23:10:02.553Z"),array: [new Date("2018-09-06T01:32:06.558Z"),59488,"deliverables","GB Garden Assistant"],obj: {}}}},{_id: 8475,str: "Division Personal Loan Account",num: 27243,date: new Date("2018-09-06T04:06:40.382Z"),array: [new Date("2018-09-06T02:32:56.050Z"),75170,16970],obj: {}},new Date("2018-09-06T19:39:01.799Z"),16397,[],15741,new Date("2018-09-06T09:26:17.881Z"),"Bedfordshire Armenia"],obj: {_id: 8476,num: 31686}});
    },

    function(coll) {
        return coll.insert({_id: 8477,str: "Rand",num: 70749,date: new Date("2018-09-06T17:12:57.206Z"),array: [new Date("2018-09-06T19:04:37.854Z"),"turn-key",59600,70706,new Date("2018-09-06T02:43:40.960Z"),{_id: 8478,date: new Date("2018-09-05T23:11:23.437Z"),obj: {_id: 8479,str: "Borders invoice",num: 47343,array: [],obj: {_id: 8480,str: "Parkway",array: []}}},89596,77705,new Date("2018-09-06T10:31:35.953Z"),[],"Refined Euro Fresh"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8481,str: "Consultant",array: ["Stand-alone Bike Russian Ruble",63121,{_id: 8482,str: "innovate quantifying",num: 15015,date: new Date("2018-09-06T12:29:09.584Z"),array: [],obj: {}},new Date("2018-09-06T07:55:55.493Z"),new Date("2018-09-06T13:53:38.025Z"),89601,75413,"Personal Loan Account Research",69059,[{_id: 8483,str: "Metal",num: 97392,date: new Date("2018-09-06T00:21:31.923Z"),obj: {_id: 8484,str: "Chief",num: 52561,date: new Date("2018-09-06T07:58:21.560Z"),array: [],obj: {_id: 8485,str: "payment Computer transform",num: 1729,array: []}}},new Date("2018-09-06T04:59:48.358Z"),new Date("2018-09-06T15:44:18.652Z"),"bypass"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8486,str: "Future holistic deposit",num: 28029,date: new Date("2018-09-06T07:48:02.134Z"),array: [],obj: {_id: 8487,num: 15935,date: new Date("2018-09-05T20:19:49.619Z"),array: [new Date("2018-09-05T22:29:49.988Z"),{_id: 8488,str: "Bedfordshire",num: 13888,obj: {}},26444,"cyan",58466,"virtual Books Tunnel"]}});
    },

    function(coll) {
        return coll.insert({_id: 8489,str: "Wisconsin Iowa",num: 68413,date: new Date("2018-09-06T00:25:30.036Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8490,str: "indigo Soap",date: new Date("2018-09-06T00:41:43.627Z"),array: [99719,11678,new Date("2018-09-06T16:25:06.358Z"),new Date("2018-09-06T08:05:49.033Z"),[],"blue Security bluetooth",{_id: 8491,num: 82618,date: new Date("2018-09-06T06:31:37.514Z"),array: [{_id: 8492,str: "firmware",num: 13461,date: new Date("2018-09-06T11:10:14.654Z"),obj: {_id: 8493,str: "Pizza",num: 67534,date: new Date("2018-09-06T19:32:04.083Z"),array: []}},"deposit deposit",new Date("2018-09-05T20:54:21.159Z")],obj: {}},27574,[32378],new Date("2018-09-06T10:44:47.865Z"),74314],obj: {_id: 8494,num: 28919,date: new Date("2018-09-05T20:06:52.408Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8495,num: 75955,date: new Date("2018-09-06T13:18:53.465Z"),array: [new Date("2018-09-06T11:06:11.811Z"),60152,"Soft Concrete Albania",new Date("2018-09-05T21:51:06.419Z"),"backing up salmon",new Date("2018-09-06T04:01:35.742Z"),2180,61228,new Date("2018-09-06T18:46:16.206Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8496,str: "Personal Loan Account application",date: new Date("2018-09-06T01:00:19.065Z"),array: [],obj: {_id: 8497,str: "Bike SAS Group",num: 44849,array: ["New Jersey payment","Licensed Chilean Peso Unidades de fomento",new Date("2018-09-06T12:53:59.938Z"),"SSL Nepal Small",[],[new Date("2018-09-05T20:28:10.470Z"),{_id: 8498,num: 64887,date: new Date("2018-09-05T22:47:04.464Z"),obj: {}},5062,94067,43750,"payment Gorgeous Cotton Soap copy",10661,"PCI Liaison withdrawal"],new Date("2018-09-06T10:36:45.475Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8499,str: "backing up",num: 19902,date: new Date("2018-09-06T01:27:52.074Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8500,str: "SMS Paraguay Engineer",num: 35268,date: new Date("2018-09-05T21:02:42.472Z"),array: ["deposit Keyboard motivating",new Date("2018-09-06T05:57:44.680Z"),new Date("2018-09-06T04:43:18.089Z"),"driver implement 24/7",[],80812,{_id: 8501,str: "hacking",num: 26369,date: new Date("2018-09-06T17:49:45.605Z"),array: [],obj: {_id: 8502,str: "Wyoming deploy turquoise",array: [70402,"deposit system synergize",39565,"Avon neural Cambridgeshire",{_id: 8503,str: "deposit matrix Borders",num: 89965,date: new Date("2018-09-06T07:18:49.334Z"),obj: {_id: 8504,num: 2862,date: new Date("2018-09-06T04:16:28.125Z"),array: [40611,{_id: 8505,num: 48164,date: new Date("2018-09-06T01:59:06.712Z"),array: [],obj: {_id: 8506,num: 20957,date: new Date("2018-09-06T13:47:21.564Z"),obj: {_id: 8507,str: "24/365",array: [new Date("2018-09-06T02:34:50.911Z"),[]]}}},[]]}},new Date("2018-09-06T08:35:40.919Z"),new Date("2018-09-06T17:01:48.519Z")],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8508,str: "generate Car",num: 11115,date: new Date("2018-09-06T11:22:05.750Z"),array: [{_id: 8509,str: "Automotive customized structure",num: 80265,date: new Date("2018-09-06T16:54:41.716Z"),obj: {_id: 8510,str: "Creative",num: 76147,array: [25990],obj: {_id: 8511,date: new Date("2018-09-06T05:24:43.365Z"),array: []}}},53982,"Senior Hungary Chicken",new Date("2018-09-05T22:01:51.531Z"),"Cambridgeshire Grove next generation","core TCP value-added",[],new Date("2018-09-06T00:53:19.623Z"),new Date("2018-09-06T01:17:05.037Z"),"olive connect intuitive",{_id: 8512,str: "purple",date: new Date("2018-09-06T07:26:47.975Z"),array: [new Date("2018-09-06T07:00:31.795Z"),84873],obj: {}},"Front-line",42801]});
    },

    function(coll) {
        return coll.insert({_id: 8513,str: "Designer monitoring",num: 69572,date: new Date("2018-09-06T11:22:35.804Z"),array: [5087,new Date("2018-09-06T08:13:59.819Z"),"Unbranded grey",[],"calculating scalable","synthesizing payment lavender",new Date("2018-09-06T12:13:40.002Z"),{_id: 8514,str: "Checking Account Factors Pants",num: 9884,array: [],obj: {}},[],94214,new Date("2018-09-05T20:31:01.569Z")]});
    },

    function(coll) {
        return coll.insert({_id: 8515,str: "driver",num: 60287,date: new Date("2018-09-06T11:45:48.557Z"),array: [],obj: {_id: 8516,str: "Bedfordshire Architect",num: 6502,date: new Date("2018-09-05T23:06:37.359Z"),array: [[],71811,"Bedfordshire global",new Date("2018-09-06T14:52:01.836Z"),{_id: 8517,str: "Towels orchid",num: 31079,array: [],obj: {_id: 8518,date: new Date("2018-09-06T15:37:30.119Z"),array: [new Date("2018-09-06T03:41:05.403Z")],obj: {}}},"invoice Forint Palau",new Date("2018-09-06T16:18:56.524Z"),25733,"Tasty Soft Gloves Multi-channelled Industrial",["1080p",new Date("2018-09-05T23:05:45.229Z")],61651]}});
    },

    function(coll) {
        return coll.insert({_id: 8519,str: "Dominican Republic sensor Metal",num: 88553,date: new Date("2018-09-05T21:51:42.605Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8520,str: "yellow open-source",num: 46994,date: new Date("2018-09-06T15:48:38.919Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8521,num: 21202,date: new Date("2018-09-06T07:45:17.759Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8522,str: "Baby",num: 37570,date: new Date("2018-09-05T19:57:30.780Z"),array: ["SMS","calculate",4039,65252,new Date("2018-09-06T02:24:26.131Z"),new Date("2018-09-06T13:42:25.303Z"),98626,"transition",[],new Date("2018-09-06T19:20:04.044Z"),[],"Handmade Metal Ball Won product"]});
    },

    function(coll) {
        return coll.insert({_id: 8523,str: "Granite panel",num: 73935,date: new Date("2018-09-06T10:58:48.864Z"),array: [],obj: {_id: 8524,num: 83954,date: new Date("2018-09-06T08:46:40.569Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8525,num: 1559,date: new Date("2018-09-06T04:22:17.090Z"),array: [new Date("2018-09-06T15:55:51.137Z"),"Credit Card Account Producer",{_id: 8526,str: "grey",num: 1659,date: new Date("2018-09-06T06:32:09.235Z"),array: [41850],obj: {_id: 8527,str: "Rustic Soft Pants Maldives Personal Loan Account",array: []}},[],"Fresh",new Date("2018-09-05T22:13:39.987Z"),9080,[],{_id: 8528,str: "Visionary Operations",num: 60350,array: [87288,new Date("2018-09-06T14:08:35.595Z"),17598],obj: {}},95908,new Date("2018-09-05T21:05:14.066Z"),"payment","Investment Account navigate monitor"],obj: {_id: 8529,str: "wireless Accountability bleeding-edge",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8530,str: "Courts",num: 82003,date: new Date("2018-09-05T21:59:22.743Z"),array: ["Dynamic content",[new Date("2018-09-06T00:48:29.739Z"),94256,11730,new Date("2018-09-06T11:00:35.351Z")],"Texas pink Garden",new Date("2018-09-06T11:35:35.065Z"),"Garden Tenge",[],{_id: 8531,str: "dynamic Plastic Chicken",num: 99211,date: new Date("2018-09-06T02:37:32.069Z"),array: [],obj: {}},"input system",[{_id: 8532,num: 32523,date: new Date("2018-09-05T20:42:07.043Z"),array: [],obj: {}}],91140,new Date("2018-09-06T08:18:34.108Z")]});
    },

    function(coll) {
        return coll.insert({_id: 8533,str: "3rd generation",num: 87998,date: new Date("2018-09-06T03:23:30.681Z"),array: [],obj: {_id: 8534,num: 28494,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 8535,str: "Music Metal",num: 86873,date: new Date("2018-09-05T19:58:51.816Z"),array: [{_id: 8536,num: 78091,date: new Date("2018-09-06T09:32:26.616Z"),obj: {_id: 8537,str: "Books",date: new Date("2018-09-05T22:53:21.778Z"),array: [20088],obj: {_id: 8538,str: "Human Money Market Account e-enable",num: 42253,array: [],obj: {}}}},"Small Steel Chicken Vatu","Chips input wireless",new Date("2018-09-06T12:58:03.013Z"),new Date("2018-09-06T12:32:43.654Z"),99564,94473,[],new Date("2018-09-06T08:34:17.743Z"),"panel Maryland",{_id: 8539,str: "HDD",num: 73324,date: new Date("2018-09-05T21:08:26.780Z"),array: [],obj: {_id: 8540,str: "optical US Dollar",num: 49323,date: new Date("2018-09-06T09:30:19.601Z"),array: [2843,new Date("2018-09-06T14:52:49.698Z"),"Delaware",["SMTP Somali Shilling Streets"],new Date("2018-09-06T16:28:21.242Z")]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8541,str: "Developer",num: 6788,date: new Date("2018-09-06T09:50:41.396Z"),array: [],obj: {_id: 8542,num: 81580,date: new Date("2018-09-06T19:52:56.727Z"),array: [new Date("2018-09-06T09:37:38.844Z"),new Date("2018-09-06T14:41:26.734Z"),{_id: 8543,str: "Music purple Cambridgeshire",num: 93526,date: new Date("2018-09-05T20:20:32.754Z"),array: [44764,"Spur synthesize New York",new Date("2018-09-06T07:30:24.311Z"),[41293]],obj: {}},"blue index Face to face",new Date("2018-09-06T13:40:20.866Z"),55077,[],new Date("2018-09-06T09:08:17.685Z"),42551,73551,"Chips"],obj: {_id: 8544,str: "bleeding-edge Technician",num: 95810,date: new Date("2018-09-06T17:32:22.970Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8545,str: "Mountain",num: 98679,array: []});
    },

    function(coll) {
        return coll.insert({_id: 8546,str: "virtual",num: 34503,date: new Date("2018-09-06T16:25:58.258Z"),obj: {_id: 8547,num: 91475,date: new Date("2018-09-06T17:45:23.896Z"),array: ["integrated silver Planner",new Date("2018-09-06T00:52:25.006Z"),52585,"Bedfordshire",new Date("2018-09-06T03:03:17.508Z"),new Date("2018-09-06T00:07:12.802Z"),31101,{_id: 8548,str: "transmitter primary",num: 7237,date: new Date("2018-09-06T01:37:21.754Z"),array: [],obj: {}},"scalable Home Computers",[{_id: 8549,str: "Kids index Paradigm",num: 66202,date: new Date("2018-09-06T14:53:33.323Z"),obj: {_id: 8550,str: "lavender",array: [new Date("2018-09-06T01:25:58.295Z")]}}],"4th generation",39542,"Mississippi Borders"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8551,str: "infrastructures Gorgeous Concrete Computer",num: 40714,date: new Date("2018-09-05T23:35:08.664Z"),array: [9952,new Date("2018-09-06T10:13:42.580Z"),"Plastic optical","Handmade Iowa",new Date("2018-09-06T03:52:28.283Z"),{_id: 8552,str: "Engineer Canadian Dollar Salad",num: 43288,date: new Date("2018-09-05T20:39:50.938Z"),array: [],obj: {}},83216,[],16372,new Date("2018-09-06T00:39:48.816Z"),83188,new Date("2018-09-05T23:52:28.009Z")]});
    },

    function(coll) {
        return coll.insert({_id: 8553,str: "Pula maroon",num: 85565,date: new Date("2018-09-06T10:24:11.824Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8554,str: "niches Buckinghamshire markets",date: new Date("2018-09-06T07:54:19.119Z"),array: [44140,new Date("2018-09-06T11:32:22.055Z"),new Date("2018-09-06T07:56:04.509Z"),["infrastructures Frozen",new Date("2018-09-06T17:00:13.063Z"),79369,[],"calculate Awesome Frozen Pants tan"],{_id: 8555,str: "Plastic",num: 54538,date: new Date("2018-09-06T00:34:53.221Z"),array: [],obj: {_id: 8556,num: 237,date: new Date("2018-09-06T14:49:11.413Z"),array: []}},{_id: 8557,str: "magenta Strategist",num: 34685,obj: {}},19414,42485,"responsive Rustic Concrete Salad",87320,{_id: 8558,num: 93491,array: [new Date("2018-09-06T04:15:12.887Z")]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8559,str: "Borders",num: 50035,date: new Date("2018-09-05T22:27:52.680Z"),array: [80903,"Falls Dynamic","Checking Account New Mexico Plastic",new Date("2018-09-06T07:28:49.164Z"),"productivity Unbranded Steel Shoes",{_id: 8560,str: "matrix Secured",date: new Date("2018-09-06T17:45:49.039Z"),array: [new Date("2018-09-06T04:00:22.966Z")],obj: {_id: 8561,num: 53185,date: new Date("2018-09-06T08:39:33.147Z"),array: []}},[[],95362],[],79015,82614,"Berkshire Gloves Landing",55561,{_id: 8562,str: "Tasty Armenian Dram",num: 7284,obj: {_id: 8563,str: "transmitting",date: new Date("2018-09-05T21:25:21.395Z"),array: []}},new Date("2018-09-06T07:15:30.762Z"),new Date("2018-09-06T00:48:57.907Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8564,str: "deposit Small",num: 65662,date: new Date("2018-09-06T15:52:30.989Z"),array: [53505,76191,new Date("2018-09-06T07:16:41.474Z"),"extensible infrastructures","model visualize",new Date("2018-09-06T19:11:38.011Z"),[],80982,new Date("2018-09-06T07:13:17.491Z"),[],{_id: 8565,str: "solutions",num: 5845,date: new Date("2018-09-05T20:18:17.561Z"),array: ["Wooden SCSI",{_id: 8566,str: "solid state Bedfordshire panel",num: 87104,date: new Date("2018-09-06T09:07:40.680Z"),array: ["Investment Account Hawaii",new Date("2018-09-06T02:15:52.756Z"),79495],obj: {_id: 8567,str: "gold RAM",array: [[]]}}],obj: {}}],obj: {_id: 8568,num: 70369,date: new Date("2018-09-06T07:48:13.804Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 8569,str: "Intelligent Intelligent",num: 51336,date: new Date("2018-09-06T11:34:46.047Z"),array: ["killer Identity",37670,"Virginia Granite",new Date("2018-09-05T21:59:01.303Z"),new Date("2018-09-06T01:32:34.708Z"),{_id: 8570,str: "Lead capacitor",num: 74257,date: new Date("2018-09-06T15:44:39.766Z"),array: [],obj: {}},"China optical open-source",71729,[],50178,98384,[]]});
    },

    function(coll) {
        return coll.insert({_id: 8571,num: 6857,date: new Date("2018-09-06T10:32:57.211Z"),array: ["Green Marketing",27270,"Highway",new Date("2018-09-06T06:46:11.704Z"),new Date("2018-09-05T20:09:42.625Z"),[37309,"Shoes PNG","knowledge user Incredible Soft Tuna Rustic Wooden Computer"],new Date("2018-09-06T05:14:20.822Z"),{_id: 8572,date: new Date("2018-09-06T04:07:41.896Z"),array: [35902],obj: {_id: 8573,str: "calculate Buckinghamshire Louisiana",num: 46504,array: [],obj: {_id: 8574,str: "card back-end",num: 69436,date: new Date("2018-09-06T04:21:30.503Z")}}},{_id: 8575,str: "auxiliary",num: 88245,date: new Date("2018-09-06T07:56:34.920Z"),obj: {}},{_id: 8576,str: "back up",num: 94587,date: new Date("2018-09-06T06:10:43.178Z"),array: []},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8577,num: 5071,date: new Date("2018-09-06T07:17:12.350Z"),array: [43368,[],"HDD UIC-Franc",new Date("2018-09-06T08:18:12.889Z"),new Date("2018-09-06T03:51:47.281Z"),new Date("2018-09-06T11:10:36.954Z"),{_id: 8578,str: "District Strategist",date: new Date("2018-09-06T01:05:50.240Z"),array: [],obj: {_id: 8579,str: "payment purple Direct",num: 92296,date: new Date("2018-09-06T16:01:54.205Z"),array: [[]],obj: { _id: 8580 }}},22122,"Fantastic Armenia dynamic",new Date("2018-09-06T06:16:40.195Z"),20026,{_id: 8581,str: "Consultant hard drive",num: 33428,date: new Date("2018-09-06T04:39:01.835Z"),array: []}],obj: {_id: 8582,str: "payment portals",num: 91976,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8583,str: "Sausages Progressive Cambridgeshire",num: 56402,date: new Date("2018-09-06T14:35:30.707Z"),array: [],obj: {_id: 8584,str: "Minnesota",num: 39701,date: new Date("2018-09-06T04:20:58.333Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8585,str: "Rustic Israel",num: 13139,date: new Date("2018-09-06T09:54:21.655Z"),array: [92894,66002,[{_id: 8586,date: new Date("2018-09-05T20:36:21.511Z"),array: [],obj: {}},"Tajikistan Wooden Configuration",93420,new Date("2018-09-06T03:31:24.373Z"),new Date("2018-09-06T15:15:02.844Z")],82372,[]],obj: {_id: 8587,str: "Licensed",num: 59426,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8588,str: "Facilitator whiteboard",date: new Date("2018-09-06T06:46:41.848Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 8589,num: 32226,date: new Date("2018-09-05T21:23:02.608Z"),array: [new Date("2018-09-06T17:53:02.668Z"),5765,27909,"Home Loan Account",new Date("2018-09-05T23:45:51.687Z"),95040,[],{_id: 8590,str: "Rustic Granite Tuna Branding",array: [],obj: {}},[],new Date("2018-09-06T16:55:29.143Z"),"website input",new Date("2018-09-06T11:32:31.966Z")],obj: {_id: 8591,str: "withdrawal",obj: {_id: 8592,str: "open architecture",num: 23030,date: new Date("2018-09-05T21:10:12.936Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8593,str: "array convergence payment",date: new Date("2018-09-06T06:51:23.124Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8594,str: "Auto Loan Account",num: 39361,date: new Date("2018-09-06T05:00:01.275Z"),array: [],obj: {_id: 8595,str: "functionalities Designer Rustic Concrete Chips",num: 2325,date: new Date("2018-09-06T05:08:06.011Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8596,str: "gold",num: 51229,date: new Date("2018-09-06T11:48:36.104Z"),array: [],obj: {_id: 8597,num: 86839,date: new Date("2018-09-06T18:29:45.999Z"),array: [],obj: {_id: 8598,str: "PCI Factors",date: new Date("2018-09-06T02:39:07.459Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8599,str: "SAS Falls expedite",num: 20277,date: new Date("2018-09-06T15:27:39.688Z"),array: [85967,new Date("2018-09-06T12:51:52.699Z"),6410,new Date("2018-09-06T00:10:13.524Z"),"Borders",{_id: 8600,str: "Circle Synergized Berkshire",num: 17368,array: [],obj: {}},6655,{_id: 8601,str: "Corporate Money Market Account",date: new Date("2018-09-06T01:05:10.126Z"),obj: {_id: 8602,str: "Borders Unbranded Fresh Keyboard",num: 25337,date: new Date("2018-09-06T17:24:06.640Z"),array: ["AGP initiative circuit"],obj: {_id: 8603,obj: {_id: 8604,str: "paradigm",num: 71121,date: new Date("2018-09-06T07:12:28.387Z"),array: []}}}},new Date("2018-09-06T18:41:54.339Z"),[],41672,new Date("2018-09-06T19:17:11.244Z"),"Nauru"],obj: {_id: 8605,num: 78229,date: new Date("2018-09-06T19:24:50.927Z"),array: ["one-to-one Groves",{_id: 8606,str: "Senior Rustic Concrete Fish",num: 67801,obj: {}},6874]}});
    },

    function(coll) {
        return coll.insert({_id: 8607,str: "Accounts",num: 53211,date: new Date("2018-09-06T10:44:21.444Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8608,str: "Electronics",num: 13647,array: [],obj: {_id: 8609,str: "Sierra Leone copy",num: 12548,date: new Date("2018-09-06T10:49:37.292Z"),array: [new Date("2018-09-05T20:03:02.809Z"),"International Cape Verde Escudo Keyboard",new Date("2018-09-06T07:04:30.324Z"),57316,"Awesome Personal Loan Account granular",91685,new Date("2018-09-05T23:23:20.361Z"),"Borders Buckinghamshire",new Date("2018-09-06T02:38:33.310Z"),new Date("2018-09-06T16:39:47.016Z"),39201,{_id: 8610,str: "black synergize",num: 59585,date: new Date("2018-09-06T13:26:42.450Z"),array: [],obj: {}},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 8611,str: "Investment Account Handmade",num: 63743,date: new Date("2018-09-06T15:11:04.162Z"),array: [],obj: {_id: 8612,str: "connecting",date: new Date("2018-09-06T13:03:05.456Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8613,num: 61122,date: new Date("2018-09-06T04:59:26.149Z"),array: [],obj: {_id: 8614,str: "Implementation",num: 30147,date: new Date("2018-09-06T04:09:24.071Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8615,num: 84584,date: new Date("2018-09-06T11:14:08.781Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8616,str: "client-server Checking Account",num: 41963,date: new Date("2018-09-06T05:40:27.006Z"),array: [new Date("2018-09-06T12:27:43.276Z"),"deposit",39434,new Date("2018-09-06T16:45:31.863Z"),new Date("2018-09-06T11:32:41.104Z"),new Date("2018-09-06T04:01:55.526Z"),60076,"Georgia Chair",["quantify",{_id: 8617,str: "orange Creative",num: 64704,date: new Date("2018-09-06T06:13:48.074Z"),array: [24032],obj: {_id: 8618,num: 40622,date: new Date("2018-09-06T00:15:47.793Z"),obj: {_id: 8619,num: 36007,date: new Date("2018-09-06T15:21:34.066Z"),array: []}}}],25641,"Intelligent deposit Chicken",52108,{_id: 8620,str: "driver",date: new Date("2018-09-06T12:17:09.224Z"),array: ["Armenian Dram Optimization",{_id: 8621,date: new Date("2018-09-06T17:20:55.787Z"),obj: {}},"Ohio Bacon"]},{_id: 8622,str: "Fantastic Palladium",num: 89782,obj: {_id: 8623,str: "Incredible Concrete Table Views",num: 63758,obj: {_id: 8624,str: "Consultant Forint",array: [],obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8625,str: "Personal Loan Account",date: new Date("2018-09-06T05:33:55.563Z"),array: [68964,58452,"Savings Account Maryland",new Date("2018-09-06T09:08:11.754Z"),{_id: 8626,str: "AGP",num: 88524,date: new Date("2018-09-05T22:02:53.830Z"),array: [],obj: {}},{_id: 8627,num: 6589,date: new Date("2018-09-06T13:54:03.867Z"),array: [81252],obj: {}},new Date("2018-09-06T07:49:50.190Z"),new Date("2018-09-05T23:02:40.596Z"),"Shirt","Idaho Buckinghamshire",37959,[],"Springs USB","pixel Brazilian Real bypassing"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8628,str: "Checking Account interface Belarus",num: 36889,date: new Date("2018-09-06T11:07:17.061Z"),array: [74897,{_id: 8629,date: new Date("2018-09-06T18:49:16.089Z"),obj: {}},31076,"card matrix",new Date("2018-09-06T08:22:59.234Z"),"Hat",new Date("2018-09-06T11:24:32.386Z"),94970,"strategy Clothing Intelligent Concrete Mouse"],obj: {_id: 8630,str: "Mountain engineer interfaces",num: 743,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8631,str: "blue navigate",num: 93213,date: new Date("2018-09-05T23:52:02.314Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8632,str: "Licensed",num: 10418,date: new Date("2018-09-06T07:45:30.240Z"),array: [],obj: {_id: 8633,str: "Shoes multi-byte",date: new Date("2018-09-05T20:37:15.260Z"),array: ["Montana Checking Account",[],[],47446,new Date("2018-09-06T12:20:43.721Z"),{_id: 8634,str: "Unions Gateway",num: 10358,array: ["Licensed Soft Computer"],obj: {}},58724,"Program Rapids Adaptive",38425,new Date("2018-09-06T15:13:55.175Z"),37246,new Date("2018-09-05T23:21:10.287Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 8635,str: "input utilize attitude-oriented",num: 77091,array: [],obj: {_id: 8636,str: "Home Loan Account Iranian Rial District",num: 20656,date: new Date("2018-09-06T04:26:09.556Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 8637,str: "Avon",num: 86907,date: new Date("2018-09-06T10:54:39.683Z"),array: ["Handmade Connecticut synthesize",30724,92889,new Date("2018-09-06T17:54:35.269Z"),{_id: 8638,num: 17018,date: new Date("2018-09-06T05:31:50.937Z"),array: [],obj: {_id: 8639,str: "Configuration Run",obj: {}}},"Factors",46732,new Date("2018-09-06T03:53:33.183Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8640,str: "Delaware Credit Card Account",num: 26299,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8641,str: "Taiwan Regional Falkland Islands Pound",num: 64348,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8642,str: "e-business paradigms Tunnel",num: 31631,date: new Date("2018-09-06T06:44:33.643Z"),array: [],obj: {_id: 8643,str: "intuitive Music",num: 94603,date: new Date("2018-09-06T09:53:41.754Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8644,str: "Incredible Metal Pants Rustic Plastic Computer",num: 54169,date: new Date("2018-09-06T03:27:28.130Z"),array: [],obj: {_id: 8645,str: "Secured",num: 29912,date: new Date("2018-09-06T19:24:31.315Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8646,str: "Shoes",num: 61817,array: [94375,30007,new Date("2018-09-06T12:47:30.404Z"),38380,"Connecticut Unbranded Wooden Car",1021,new Date("2018-09-06T16:10:51.117Z"),new Date("2018-09-06T05:07:50.887Z"),"intangible auxiliary turn-key",[{_id: 8647,str: "Soft non-volatile",num: 99353,date: new Date("2018-09-06T09:03:14.598Z"),array: [],obj: {}}],"Tunnel",[],{_id: 8648,num: 66532,date: new Date("2018-09-06T08:40:48.106Z"),array: [65266,84106,"Centralized Awesome Soft Bike regional"],obj: {_id: 8649,str: "Intelligent Tanzanian Shilling",date: new Date("2018-09-05T23:18:43.226Z"),array: [{_id: 8650,str: "PNG Kina",num: 79017,obj: {}},[]],obj: {_id: 8651,str: "Norwegian Krone Isle moratorium",num: 78143,date: new Date("2018-09-06T06:16:20.589Z"),array: []}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8652,str: "transparent parse",num: 58030,date: new Date("2018-09-06T18:01:14.929Z"),obj: {_id: 8653,str: "Checking Account",num: 44871,date: new Date("2018-09-05T21:20:55.033Z"),array: [],obj: {_id: 8654,num: 56761,date: new Date("2018-09-06T17:44:45.154Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 8655,str: "unleash Metal",num: 65923,array: [43540,[],new Date("2018-09-06T11:20:41.808Z"),17537,"override innovative Handmade Plastic Gloves","Forward Books",{_id: 8656,str: "archive",num: 69797,date: new Date("2018-09-06T04:50:58.834Z"),array: [],obj: {_id: 8657,str: "grey New Jersey Representative",num: 25262,date: new Date("2018-09-05T23:03:20.101Z"),array: [new Date("2018-09-06T03:42:12.881Z"),new Date("2018-09-06T18:02:19.053Z"),19778,27241,"Netherlands Antillian Guilder leverage Outdoors"],obj: {_id: 8658,num: 1561,date: new Date("2018-09-06T13:07:15.784Z"),array: [[{_id: 8659,num: 91991,array: []}],"invoice",{_id: 8660,str: "Uzbekistan generate",obj: {_id: 8661,str: "Designer Open-source",num: 16882,date: new Date("2018-09-06T15:27:52.894Z"),obj: {}}},86634,{_id: 8662,date: new Date("2018-09-05T22:20:40.453Z"),array: ["Borders Borders Greenland"],obj: { _id: 8663 }}],obj: {}}}},new Date("2018-09-06T06:52:20.926Z"),new Date("2018-09-06T08:37:13.479Z"),22985]});
    },

    function(coll) {
        return coll.insert({_id: 8664,str: "Data Rapids",num: 647,date: new Date("2018-09-06T05:23:16.752Z"),array: [8753,"Incredible Soft Soap Bedfordshire CSS",{_id: 8665,str: "withdrawal",num: 2629,date: new Date("2018-09-06T05:54:27.209Z"),array: [],obj: {}},76101,23136,new Date("2018-09-06T05:02:14.582Z"),new Date("2018-09-06T03:38:34.580Z"),["contextually-based Steel Agent",{_id: 8666,num: 32152,obj: {}},new Date("2018-09-06T10:39:36.684Z")],"reintermediate AI circuit","SMS",[]],obj: {_id: 8667,num: 14545,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 8668,num: 18043,date: new Date("2018-09-06T16:42:05.264Z"),array: [],obj: {_id: 8669,str: "haptic Generic",num: 77299,date: new Date("2018-09-05T22:24:43.417Z"),array: [93548,[],{_id: 8670,num: 17359,date: new Date("2018-09-06T13:31:54.951Z"),array: ["Port",new Date("2018-09-06T00:00:37.921Z"),"Moldova deposit",14629]},new Date("2018-09-06T09:37:21.530Z"),49555,25219,"Soft Mauritania hacking",new Date("2018-09-06T09:20:40.506Z"),43203,"Engineer",{_id: 8671,str: "forecast Product",obj: {}},new Date("2018-09-06T19:29:46.812Z")],obj: {_id: 8672,str: "connect Savings Account",num: 40003,date: new Date("2018-09-06T05:01:23.227Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8673,str: "USB",num: 31247,date: new Date("2018-09-06T17:57:07.395Z"),array: ["bluetooth Architect",50540,85883,18704,new Date("2018-09-06T04:15:00.359Z"),"Personal Loan Account multi-tasking Refined Rubber Pants",new Date("2018-09-06T12:44:57.168Z"),{_id: 8674,str: "Tasty Metal Chair Manager Incredible",num: 1118,date: new Date("2018-09-06T01:12:28.659Z"),array: ["Australian Dollar Security","neutral pink navigating"],obj: {_id: 8675,str: "foreground HDD Direct",num: 37073,array: [],obj: {_id: 8676,str: "project deposit",num: 37909,date: new Date("2018-09-05T22:42:18.709Z"),array: [],obj: {}}}},{_id: 8677,str: "interfaces",obj: {}},new Date("2018-09-06T05:41:52.066Z")]});
    },

    function(coll) {
        return coll.insert({_id: 8678,str: "Green",num: 32400,date: new Date("2018-09-06T17:02:18.966Z"),array: [18405,"product unleash Cyprus",[],"Orchestrator Pound Sterling",{_id: 8679,date: new Date("2018-09-05T21:52:19.090Z"),array: ["back-end",[],77253],obj: {_id: 8680,str: "Handcrafted Fresh Bacon Bermuda",num: 75635,date: new Date("2018-09-06T16:35:27.817Z"),obj: {}}},new Date("2018-09-06T16:11:24.615Z"),new Date("2018-09-05T23:49:20.609Z"),{_id: 8681,num: 11710,array: [],obj: {_id: 8682,str: "Inverse Grove",date: new Date("2018-09-06T04:19:08.790Z"),array: []}},24289,new Date("2018-09-06T08:00:54.050Z"),[{_id: 8683,str: "redundant",num: 4935,date: new Date("2018-09-06T16:00:52.633Z"),obj: {}}]]});
    },

    function(coll) {
        return coll.insert({_id: 8684,str: "Fiji Dollar Analyst reboot",num: 696,date: new Date("2018-09-06T17:34:41.148Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8685,str: "orchestration turquoise",num: 20598,date: new Date("2018-09-06T19:49:10.428Z"),array: ["online",new Date("2018-09-06T17:04:06.175Z"),"Tasty e-tailers",new Date("2018-09-06T13:41:01.907Z"),{_id: 8686,str: "Handcrafted",num: 7814,date: new Date("2018-09-06T11:04:39.717Z"),array: [],obj: {}},new Date("2018-09-06T09:15:13.068Z"),18115,{_id: 8687,str: "viral Palladium deposit",num: 68091,date: new Date("2018-09-06T05:22:50.992Z"),obj: {}},83516,[97811,[],"AI deposit"],new Date("2018-09-05T22:48:41.403Z"),49859],obj: {_id: 8688,str: "cultivate Dam Sleek",num: 52250,date: new Date("2018-09-06T08:17:18.823Z")}});
    },

    function(coll) {
        return coll.insert({_id: 8689,str: "firewall",num: 48176,date: new Date("2018-09-06T02:16:16.395Z"),array: [{_id: 8690,str: "Lari software",num: 78828,array: [],obj: {_id: 8691,date: new Date("2018-09-06T00:59:16.625Z"),array: [],obj: {}}},new Date("2018-09-06T18:09:56.643Z"),"microchip payment","Plastic Steel Division",new Date("2018-09-05T21:22:18.041Z"),365,50010,20303,[],[{_id: 8692,str: "olive Tugrik",date: new Date("2018-09-06T14:21:44.634Z"),obj: {}},93071],new Date("2018-09-06T18:28:28.959Z"),"Nevada SQL"],obj: {_id: 8693,str: "ROI",num: 41447,array: [97726,"Bike"],obj: {_id: 8694,num: 41918,date: new Date("2018-09-06T13:59:32.433Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8695,str: "Cotton",date: new Date("2018-09-06T15:29:56.357Z"),array: [40515,{_id: 8696,str: "withdrawal",num: 12062,date: new Date("2018-09-06T14:03:31.076Z"),array: [],obj: {_id: 8697,num: 95916,date: new Date("2018-09-06T05:10:27.138Z"),array: []}},67884,new Date("2018-09-05T20:48:36.423Z"),"neural Metal Steel","extend Regional function",2185,new Date("2018-09-05T23:56:32.882Z"),{_id: 8698,str: "Credit Card Account Sudanese Pound deposit",num: 29328,date: new Date("2018-09-06T09:20:25.399Z"),obj: {}},new Date("2018-09-05T21:00:10.460Z"),"Front-line Synchronised Dynamic",new Date("2018-09-06T16:07:03.018Z"),[39141],[]],obj: {_id: 8699,str: "Granite empower",date: new Date("2018-09-06T07:12:46.501Z"),array: [{_id: 8700,str: "toolset",obj: {_id: 8701,str: "proactive",num: 86044,date: new Date("2018-09-06T10:32:11.138Z"),array: [],obj: {}}},71397]}});
    },

    function(coll) {
        return coll.insert({_id: 8702,str: "bandwidth Borders",num: 34610,date: new Date("2018-09-06T19:20:28.144Z"),array: [],obj: {_id: 8703,num: 94573,date: new Date("2018-09-06T02:55:13.096Z"),array: ["Auto Loan Account",new Date("2018-09-06T08:53:07.882Z"),"orchid",10676,87213,96426,54441,{_id: 8704,str: "Costa Rica Bedfordshire web-enabled",num: 34713}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8705,str: "Salad",num: 19070,date: new Date("2018-09-06T09:13:12.657Z"),obj: {_id: 8706,str: "Afghani",num: 29323,date: new Date("2018-09-06T14:47:30.208Z"),array: [42059,"transmitting FTP Table",8605,new Date("2018-09-06T13:11:14.367Z"),{_id: 8707,str: "Director Nevada",num: 15440,array: [],obj: {}},"Kentucky",15595,{_id: 8708,str: "connect",num: 85535,date: new Date("2018-09-05T22:17:26.310Z"),obj: {}},new Date("2018-09-06T10:51:48.208Z"),["South Dakota zero defect",new Date("2018-09-06T05:57:48.339Z"),64288],[],new Date("2018-09-06T18:22:44.529Z")],obj: {_id: 8709,str: "Outdoors connect",array: [{_id: 8710,str: "Tasty Human Trail",num: 21970,date: new Date("2018-09-06T03:05:22.781Z")}],obj: {_id: 8711,date: new Date("2018-09-06T11:04:58.740Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 8712,str: "one-to-one solid state",num: 88408,array: [9111,"Money Market Account Awesome Concrete Mouse","Inlet Group navigate",96887,new Date("2018-09-06T18:31:35.787Z"),new Date("2018-09-06T07:04:51.014Z"),69659,75054,{_id: 8713,str: "copy optical",num: 11416,date: new Date("2018-09-06T10:55:18.411Z"),obj: {}},47585,{_id: 8714,str: "sexy",date: new Date("2018-09-05T21:11:48.682Z"),array: ["Savings Account Intelligent Frozen Bacon bluetooth","Metrics functionalities partnerships",[]],obj: {}}],obj: {_id: 8715,str: "Architect Cotton green",num: 62139,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 8716,str: "Fresh Borders Palestinian Territory",num: 86222,date: new Date("2018-09-06T05:38:52.954Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8717,str: "Fantastic Granite Soap Administrator Toys",num: 76423,date: new Date("2018-09-06T06:53:58.304Z"),array: [89083,[],"generate Bedfordshire","Delaware compressing",new Date("2018-09-06T03:14:07.305Z"),{_id: 8718,str: "project cohesive",num: 18384,date: new Date("2018-09-06T07:49:34.429Z"),obj: {_id: 8719,str: "synthesizing Awesome",num: 18257,date: new Date("2018-09-05T22:53:12.681Z"),array: [],obj: {}}},81513,"Avon encryption",new Date("2018-09-06T17:41:02.514Z"),new Date("2018-09-06T01:44:18.203Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8720,str: "Table New Caledonia",num: 13202,date: new Date("2018-09-06T05:11:33.165Z"),array: [32654,new Date("2018-09-06T01:14:56.257Z"),new Date("2018-09-06T15:50:16.072Z"),[],"Pula Fresh","navigating Awesome Ergonomic Soft Pants",22974,new Date("2018-09-05T22:20:10.677Z"),"cyan",99238,{_id: 8721,str: "Ukraine Sleek Steel Chair International",num: 63212,date: new Date("2018-09-06T01:22:08.053Z"),obj: {}},86896]});
    },

    function(coll) {
        return coll.insert({_id: 8722,num: 21800,date: new Date("2018-09-06T04:51:48.870Z"),array: [],obj: {_id: 8723,str: "Metal RSS optical",num: 69894,date: new Date("2018-09-06T18:15:05.684Z"),array: ["extend",new Date("2018-09-06T04:34:12.973Z"),new Date("2018-09-06T13:32:26.340Z"),32902,51247,{_id: 8724,str: "Borders Crossing wireless",num: 90497,date: new Date("2018-09-05T19:56:59.026Z"),array: [],obj: {}},17603,"Gorgeous Kansas","teal Liaison",new Date("2018-09-05T22:06:50.123Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8725,num: 42634,array: [],obj: {_id: 8726,num: 75896,date: new Date("2018-09-06T08:28:27.361Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8727,str: "convergence quantify impactful",num: 51572,date: new Date("2018-09-06T13:49:31.637Z"),array: ["withdrawal",new Date("2018-09-06T12:54:03.347Z"),79443,{_id: 8728,str: "morph PNG",num: 47533,date: new Date("2018-09-06T15:59:55.996Z"),array: [],obj: {}},"plug-and-play",[],[{_id: 8729,str: "Division",num: 88785,date: new Date("2018-09-06T17:00:09.540Z"),array: [],obj: {_id: 8730,str: "Administrator",num: 95229,obj: {_id: 8731,date: new Date("2018-09-05T22:11:58.876Z"),array: [],obj: { _id: 8732 }}}},77992,new Date("2018-09-06T17:31:14.629Z"),new Date("2018-09-06T16:53:35.797Z"),89660],"bypassing",new Date("2018-09-06T06:53:09.316Z"),44905]});
    },

    function(coll) {
        return coll.insert({_id: 8733,str: "Handmade",num: 79041,date: new Date("2018-09-05T21:23:24.195Z"),array: [],obj: {_id: 8734,num: 27944,date: new Date("2018-09-05T20:46:01.241Z"),array: [],obj: {_id: 8735,date: new Date("2018-09-06T03:34:25.445Z"),array: [93598,"Cambridgeshire monetize","Generic Soft Tuna",new Date("2018-09-05T21:36:19.376Z"),"Mews B2C",45748,"neural",new Date("2018-09-06T16:58:46.736Z"),10839,{_id: 8736,str: "Sleek Steel Cheese",num: 13704,array: [],obj: {}}],obj: {_id: 8737,str: "emulation invoice knowledge user",num: 5898,date: new Date("2018-09-06T13:10:29.006Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 8738,str: "Small Licensed",num: 16435,date: new Date("2018-09-06T04:29:41.998Z"),array: [new Date("2018-09-06T19:17:35.635Z"),"Unbranded Savings Account",[],31677,new Date("2018-09-06T04:20:45.311Z"),"PCI GB","Executive",{_id: 8739,str: "Accountability",date: new Date("2018-09-06T00:37:16.632Z"),array: [84560,10120,[new Date("2018-09-05T20:32:15.585Z"),{_id: 8740,str: "Forks Auto Loan Account Ball",num: 31573,date: new Date("2018-09-06T07:30:19.039Z"),array: [],obj: {_id: 8741,str: "Generic Brunei Dollar",num: 9875,date: new Date("2018-09-06T06:04:08.766Z"),obj: {}}}],99805,new Date("2018-09-06T18:11:56.848Z")],obj: {}},{_id: 8742,num: 7356,date: new Date("2018-09-05T22:39:52.416Z")},"Awesome Cotton Mouse black"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8743,str: "plug-and-play",num: 34415,date: new Date("2018-09-06T15:08:08.773Z"),array: [80250,new Date("2018-09-06T12:38:59.177Z"),{_id: 8744,str: "B2C",num: 86687,date: new Date("2018-09-06T12:13:43.772Z"),array: [new Date("2018-09-06T16:28:16.818Z"),"definition Practical optical"],obj: {}},"Philippine Peso",79185,{_id: 8745,str: "Florida",num: 23589,date: new Date("2018-09-05T23:39:13.093Z"),array: []},[],"SQL",new Date("2018-09-06T15:41:00.649Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8746,str: "synergistic Manager",num: 14175,date: new Date("2018-09-06T01:32:46.975Z"),array: [{_id: 8747,str: "Fantastic IB Research",num: 52497,date: new Date("2018-09-05T19:59:49.251Z"),array: [],obj: {_id: 8748,str: "sky blue",num: 32974,date: new Date("2018-09-06T00:59:30.275Z"),array: [],obj: {}}},new Date("2018-09-06T06:14:48.306Z"),"Usability","Internal mint green","Rubber",new Date("2018-09-05T21:55:13.113Z"),95639,["Oval Cambridgeshire",39326,10032],new Date("2018-09-06T15:51:46.465Z"),new Date("2018-09-06T02:30:36.557Z"),{_id: 8749,str: "Optimization grey",num: 91896,date: new Date("2018-09-06T02:45:19.531Z"),obj: {_id: 8750,num: 93790,array: [77437,"capacitor Senior"]}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8751,str: "Illinois",num: 9859,date: new Date("2018-09-06T19:20:48.848Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8752,str: "Incredible Steel Table Reverse-engineered",num: 21882,date: new Date("2018-09-06T18:16:23.616Z"),array: [4697,"SSL empowering quantify","visionary Concrete",24591,new Date("2018-09-05T20:57:47.372Z"),new Date("2018-09-06T17:33:05.352Z"),"Ergonomic Rubber Shoes",10612,new Date("2018-09-06T06:52:05.168Z"),[],"application",95229,{_id: 8753,str: "New Israeli Sheqel Gold copying",num: 1439,date: new Date("2018-09-06T02:27:08.822Z"),array: [],obj: {_id: 8754,str: "impactful",num: 81181,date: new Date("2018-09-05T21:43:59.435Z"),array: [new Date("2018-09-06T08:20:43.492Z"),71448],obj: {_id: 8755,array: []}}}],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $dateToString: {date: { $minute: { $second: { $minute: { $dateFromString: {dateString: "2018-09-06T04:41:01.764Z",timezone: "Africa/Kampala",onNull: { $arrayToObject: [[{k: "Garden Granite",v: true},{k: "deposit Sausages",v: { $substrBytes: ['$obj.obj.obj.obj.str',0,13] }}]] }} } } } },format: "%S-%S-%j-%M-%Z",timezone: "America/Tegucigalpa"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["THX"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',timezone: "America/Halifax"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%V-%m-%Y-%G-%S-%m",timezone: "Africa/Kinshasa",onNull: { $filter: {input: ['$obj.obj.num'],cond: { $not: [{ $arrayElemAt: [[true,'$$this'],'$obj.obj.obj.num'] }] }} }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.num','$num',69557]],defaults: [new Date("2018-09-05T23:49:45.068Z")]} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str'],in: { $subtract: [67082,54775] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Gorgeous Granite Computer indexing Mount"]] }, _id: 0}}],

        [{$project: {a: { $hour: { $year: { $minute: { $dateToString: {date: '$obj.obj.obj.date',onNull: { $toString: { $arrayElemAt: [[],'$obj.num'] } }} } } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $second: { $hour: new Date("2018-09-06T03:01:19.164Z") } } }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfWeek: { $isoDayOfWeek: { $dayOfYear: { $second: { $isoWeekYear: { $isoDayOfWeek: { $isoWeek: { $year: { $hour: { $dateFromString: {dateString: "2018-09-05T21:34:43.586Z",onError: { $toString: { $range: [1,20,17] } }} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],{ $ln: 63910 }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$str',{ $dateToString: {date: { $dateToString: {date: '$obj.obj.obj.date',timezone: "America/Regina",onNull: { $arrayElemAt: [[38839,'$num'],{ $cmp: [{ $reverseArray: [[]] },{ $dayOfYear: { $month: { $dayOfWeek: new Date("2018-09-06T15:23:09.994Z") } } }] }] }} },format: "%L-%w-%%-%u-%z-%L-%m-%Z-%M-%L-%V-%Y",timezone: "Asia/Aqtau"} }],[]]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $abs: '$num' },isoWeek: { $size: [["Direct"]] },isoDayOfWeek: { $add: [] },minute: { $ln: 90097 },millisecond: { $log: ['$obj.obj.obj.num','$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $substr: ["iterate",11,7] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.obj.str',5,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',"deposit",'$obj.obj.obj.str'],[],['$obj.obj.num'],[75559]]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substr: ["infomediaries Consultant",0,13] },18,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],90554] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[34400,'$obj.obj.num'],[],[{ $trim: { input: '$obj.str' } }],["Data","visualize Tasty open-source",'$obj.obj.obj.obj.str',"Incredible Facilitator","Investment Account Virgin Islands, British"]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $week: { $isoDayOfWeek: { $second: { $isoWeek: { $minute: '$obj.date' } } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $minute: { $dayOfYear: { $isoWeek: { $dateToString: { date: new Date("2018-09-06T06:59:11.022Z") } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Idaho Outdoors",v: 74364},{k: "Directives",v: '$num'},{k: "EXE Awesome XML",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $second: { $millesecond: { $toDate: { $toLower: '$obj.obj.str' } } } }, _id: 0}}],

        [{$project: {a: { $month: { $second: { $toDate: { $filter: {input: [{ $dateToString: {date: { $dateFromString: {dateString: "2018-09-05T23:24:20.921Z",timezone: "Africa/Ouagadougou",onNull: { $map: {input: [30886],as: 'edmund',in: { $cmp: [{ $arrayElemAt: [['$obj.obj.obj.str','$$edmund'],'$$edmund'] },{ $hour: { $week: { $year: { $year: { $dayOfMonth: { $week: { $dateFromString: {dateString: "2018-09-06T12:57:01.540Z",timezone: "GMT0",onError: { $filter: {input: ['$obj.obj.num','$obj.obj.obj.num'],as: 'janis',cond: { $not: [{ $arrayElemAt: [["Barbados",{ $toString: { $arrayToObject: [[[],[]]] } }],48430] }] }} },onNull: { $concat: ["Saint Helena leverage",'$obj.obj.str'] }} } } } } } } }] }} }} },format: "%V-%Y-%Y-%m-%w-%w-%U-%w-%%-%L-%w-%U",onNull: { $toLower: { $substr: ['$obj.obj.str',5,18] } }} },{ $ltrim: { input: "Global Savings Account bleeding-edge" } }],cond: { $eq: [{ $arrayToObject: [[{k: "Handcrafted Concrete Pizza Monitored knowledge user",v: { $floor: '$obj.obj.num' }},{k: "Berkshire",v: true}]] },{ $concat: ["Station Shoes navigating",{ $substrBytes: ['$$this',0,12] },"Car",'$$this'] }] }} } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.str',chars: '$obj.obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[24438,48185,'$obj.obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$num'],["online functionalities",'$obj.obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],52704] }, _id: 0}}],

        [{$project: {a: { $millesecond: new Date("2018-09-06T13:49:17.236Z") }, _id: 0}}],

        [{$project: {a: { $second: { $minute: { $dayOfMonth: { $dateToString: {date: { $millesecond: { $dateFromParts: {isoWeekYear: { $ceil: 37906 },isoWeek: { $pow: ['$obj.obj.obj.num','$obj.obj.num'] },isoDayOfWeek: { $pow: [94581,'$num'] },second: { $ln: 35869 }} } },onNull: { $substrCP: [{ $toUpper: '$obj.str' },10,10] }} } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',11,13] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.num',99736,'$obj.obj.num'],[59372],["Missouri Avon",{ $toString: { $substrBytes: ["Checking Account",5,19] } }],['$obj.obj.str',{ $toLower: "neural" }]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.obj.obj.num',12833,76074]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "hierarchy Cyprus",v: false},{k: "index Outdoors payment",v: '$obj.obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toString: { $arrayElemAt: [[],3573] } } } }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $toDate: { $zip: {inputs: [[],["Saint Helena Pound architectures Developer"],[]],useLongestLength: false} } } } }, _id: 0}}],

        [{$project: {a: { $year: { $isoWeekYear: { $second: { $dateFromParts: {year: { $multiply: [23097,35707] },month: '$obj.obj.obj.num',day: { $log10: 73344 },timezone: "Europe/Minsk"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.str',{ $toLower: "budgetary management" }],[4808,'$num'],['$obj.obj.str'],['$obj.num','$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num'],[],[66133,'$num']]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[36572]] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: { date: new Date("2018-09-06T13:52:30.644Z") } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateToParts: { date: { $isoWeek: { $millesecond: { $isoDayOfWeek: { $week: { $month: { $month: '$date' } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Yemeni Rial",{ $toString: { $arrayToObject: [[{k: "compressing",v: true},{k: "Bhutan Junction",v: true}]] } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $rtrim: { input: "systematic Facilitator" } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["demand-driven"],[],[],[{ $dateToString: {date: new Date("2018-09-05T21:13:52.316Z"),format: "%H-%z-%M-%U-%d-%%-%%-%U-%L-%w-%d-%V",timezone: "Etc/UCT",onNull: "Concrete models"} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: '$str',chars: '$str'} },{ $toString: { $toUpper: '$obj.str' } }],93711] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Unbranded override function",v: 75196},{k: "Buckinghamshire Inlet Lead",v: false}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["port calculate",4,19] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $ceil: { $mod: [11781,'$obj.num'] } }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Sleek Union",v: new Date("2018-09-06T18:04:50.314Z")},{k: "cyan dedicated",v: false}]] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: new Date("2018-09-06T13:21:35.012Z"),timezone: "Australia/Eucla"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $substrCP: ['$obj.obj.obj.str',17,10] }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: [{ $substr: ["Israel Extended",16,16] },3,7] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toLower: "neural-net calculating" },12,1] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',87510],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "multi-byte Direct",v: { $substr: ["whiteboard",17,6] }},{k: "Tasty Cotton Pizza",v: { $dayOfYear: { $year: { $dateToString: {date: '$obj.date',format: "%S-%j-%V-%m-%w",onNull: "invoice Small Wooden Pizza payment"} } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Prairie Jordanian Dinar hard drive"],4197] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[24390]] } }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toUpper: "navigating Colombia Fall" },chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T18:29:42.023Z"),format: "%M-%w-%S-%S-%Y-%L-%M",onNull: { $substrBytes: [{ $toLower: "Forward web services" },20,4] }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.str',chars: { $substrCP: [{ $toUpper: "multi-byte" },9,19] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["sensor driver salmon"],50119] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Soft proactive Qatari Rial",v: true}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',55353],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "transmit Practical" }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Saint Helena Pound",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.num'],[{ $trim: { input: '$obj.obj.str' } }]],useLongestLength: true,defaults: [80707]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num',69433],[],[{ $trim: { input: '$str' } },{ $toString: { $dayOfMonth: { $dayOfMonth: { $year: { $month: '$obj.obj.date' } } } } }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$str'],['$obj.str',{ $toUpper: "invoice" },"Gabon"],['$obj.obj.str',{ $substr: [{ $dateToString: { date: new Date("2018-09-06T12:37:40.995Z") } },12,9] },"SDD Gorgeous"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],64558] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $rtrim: {input: "Reactive viral",chars: { $substrBytes: ['$obj.obj.str',18,4] }} },'$str'],in: { $floor: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],71774] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Technician Nebraska bypassing",chars: "Lodge Analyst"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$str' }],22665] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $substrCP: ["one-to-one vortals",15,8] }]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',11,2] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',18,7] }, _id: 0}}],

        [{$project: {a: { $toLower: { $substrCP: ["HTTP Mayotte",10,15] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["compressing JSON",{ $dateToString: {date: { $hour: { $year: { $isoWeekYear: { $dayOfYear: { $isoWeek: { $week: { $isoDayOfWeek: { $hour: { $dateToString: {date: { $isoWeekYear: { $month: '$obj.obj.obj.date' } },format: "%L-%w-%V-%M-%%",onNull: { $arrayElemAt: [[99892],28680] }} } } } } } } } } },format: "%Y-%u-%U-%G-%S-%j-%j",timezone: "Asia/Jayapura",onNull: { $trim: {input: '$obj.str',chars: "dot-com sensor protocol"} }} }],[],['$str','$obj.obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[{ $toUpper: "connect indexing Small Soft Cheese" },'$str'],'$obj.num'] } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $concat: [] } }, _id: 0}}],

        [{$project: {a: { $second: { $second: { $dateToString: {date: { $dayOfYear: { $millesecond: '$obj.date' } },timezone: "Asia/Katmandu"} } } }, _id: 0}}],

        [{$project: {a: { $range: [17,16] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$str',"Shoes Fantastic enterprise",{ $dateToString: {date: new Date("2018-09-06T18:14:10.225Z"),format: "%j-%V-%Y-%L-%z-%u-%M-%z-%m",timezone: "Africa/Bangui"} }]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $toString: { $toLower: { $rtrim: {input: '$obj.obj.obj.obj.str',chars: "override pink Florida"} } } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.obj.obj.str',chars: "ivory"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],95387] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["repurpose Awesome even-keeled",{ $toLower: '$obj.obj.obj.obj.str' }],13611] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:03:10.902Z"),format: "%w-%Z-%L-%V-%w-%d",onNull: { $arrayToObject: [[{k: "blue",v: true}]] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Checking Account",'$obj.obj.obj.obj.str'],cond: { $in: [{ $millesecond: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T08:54:57.229Z",format: "%G-%H-%L-%M-%M-%M-%z-%M-%S-%m-%w",onError: { $arrayToObject: [[[],[17314],[{ $ltrim: {input: { $toLower: { $concat: ["Ohio Automotive enterprise",{ $ltrim: { input: '$$this' } },"Future infrastructure deploy"] } },chars: { $toString: { $ltrim: { input: "Bedfordshire cross-platform" } } }} }],[],['$obj.obj.obj.obj.str'],[]]] }} } } },{ $reverseArray: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrCP: ['$str',8,6] },"Kina","logistical Devolved"],as: 'dayton',in: 21940} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToString: {date: { $month: { $dayOfWeek: { $isoDayOfWeek: { $dayOfMonth: { $dateToParts: {date: new Date("2018-09-06T12:28:47.750Z"),timezone: "America/Panama"} } } } } },format: "%Y-%u-%Z-%w-%G-%w-%U",timezone: "America/Danmarkshavn",onNull: { $millesecond: { $dateToParts: {date: { $week: new Date("2018-09-06T15:46:10.538Z") },iso8601: true} } }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Toys Interactions"],[{ $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T02:51:14.934Z",timezone: "Europe/Gibraltar"} },format: "%u-%j-%d-%z-%L-%z-%z"} },"rich"],[{ $ltrim: {input: '$obj.obj.obj.obj.str',chars: "Bedfordshire"} }],['$obj.obj.obj.num'],[78857]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],4101] }, _id: 0}}],

        [{$project: {a: { $toUpper: "plum Steel Consultant" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[27047],["rich monitor Public-key"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.obj.obj.obj.str',0,14] },"real-time discrete"],45540] }, _id: 0}}],

        [{$project: {a: { $map: {input: [76483,'$obj.obj.obj.num'],in: { $subtract: ['$obj.obj.obj.num',{ $trunc: 1952 }] }} }, _id: 0}}],

        [{$project: {a: { $year: { $minute: { $dayOfMonth: { $second: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T16:06:04.500Z",format: "%u-%%-%w-%Z-%u-%m-%Z-%V-%Z",onError: { $arrayElemAt: [[],49638] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[91757]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire disintermediate",v: 60494},{k: "relationships",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateFromParts: {year: { $log: ['$obj.obj.obj.num',12086] },month: { $divide: ['$obj.obj.num',4946] },minute: { $size: [[{ $ltrim: { input: "cutting-edge e-commerce Buckinghamshire" } },"Paradigm Ways Unbranded",{ $dateToString: {date: '$obj.obj.date',onNull: '$obj.obj.obj.str'} }]] },second: { $pow: [48409,{ $abs: 10312 }] },millisecond: { $floor: { $indexOfArray: [{ $range: [14,16] },{ $objectToArray: '$obj.obj.obj.obj' },11] } },timezone: "Europe/Podgorica"} } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $hour: { $dayOfWeek: { $dateFromParts: {year: { $subtract: [84970,61741] },month: { $abs: '$obj.num' },day: { $multiply: ['$obj.num',37421,'$obj.obj.obj.num'] },second: { $subtract: [{ $log: ['$obj.obj.obj.num',24779] },51615] },timezone: "Zulu"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Falls Refined Buckinghamshire",v: new Date("2018-09-05T23:08:56.487Z")}]] }, _id: 0}}],

        [{$project: {a: { $range: [4,15,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Incredible",v: new Date("2018-09-06T13:51:42.369Z")},{k: "systemic Practical",v: { $toUpper: '$obj.obj.obj.str' }}]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $toString: { $toDate: { $reverseArray: [[]] } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [false,'$num'],cond: { $or: ['$obj.obj.obj.date','$$this'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.str',{ $ltrim: {input: { $toString: { $dayOfWeek: { $dayOfYear: { $month: { $hour: { $week: { $dayOfMonth: { $year: { $toDate: { $arrayElemAt: [[32861],'$obj.obj.num'] } } } } } } } } } },chars: '$str'} }]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $toString: { $arrayElemAt: [[{ $substrBytes: [{ $rtrim: {input: '$obj.str',chars: "card Plain"} },9,17] },'$obj.str',"JBOD cross-media Auto Loan Account"],42588] } }],["compressing",{ $month: { $isoWeek: { $isoWeekYear: { $toDate: { $toUpper: { $substrCP: ['$obj.obj.obj.str',2,19] } } } } } }],['$obj.obj.obj.num',38666,95082],[],[]] }, _id: 0}}],

        [{$project: {a: { $range: [2,5,3] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $trim: {input: "copy Liaison Groves",chars: "Intelligent context-sensitive Sports"} }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Tools Center",'$obj.obj.obj.str'],13824] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $millesecond: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T15:01:39.873Z",format: "%G-%m-%m-%z-%u",timezone: "Mexico/BajaSur",onError: { $toDate: { $toUpper: '$obj.str' } }} } } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $second: { $dayOfMonth: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T08:03:59.774Z"),format: "%Y-%m-%U-%Y",timezone: "Etc/GMT-8"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "grow",v: new Date("2018-09-06T19:43:42.769Z")},{k: "SMTP",v: '$obj.obj.obj.num'},{k: "facilitate Multi-tiered",v: false}]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[[86144],[],[{ $substrBytes: ['$obj.obj.str',19,6] }],["Awesome program dynamic",'$obj.str']]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Books",v: "Intelligent"},{k: "Intelligent Cambridgeshire",v: new Date("2018-09-05T22:26:04.664Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toString: { $range: [4,19,11] } },"green"]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%V-%U-%V-%j-%u-%w-%%-%V-%M-%j-%G",timezone: "Portugal"} }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: { date: '$date' } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',11,15] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["copy Court",15,18] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],41129] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.obj.str',18,16] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-05T21:03:29.744Z",format: "%U-%j-%Z-%Y-%L-%Y-%Y-%z-%m-%M",timezone: "Etc/GMT+7"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str','$obj.str','$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ceil: 48799 }],'$num'] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.obj.obj.str',chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $map: {input: [],in: '$$this'} } }],[89434,'$obj.obj.num'],[],['$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[80234,47649,'$obj.obj.obj.num'],['$str',{ $toUpper: '$obj.obj.obj.obj.str' }],[{ $substrCP: ["Incredible European Unit of Account 17(E.U.A.-17)",15,11] },'$str']],defaults: [new Date("2018-09-06T09:25:57.001Z"),new Date("2018-09-06T19:22:27.675Z"),{ obj: {} }]} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $isoWeekYear: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T08:34:57.910Z"),format: "%V-%H-%m-%M-%w-%j"} } } } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $dayOfWeek: { $dayOfMonth: { $year: { $dateFromParts: {isoWeekYear: { $trunc: 20950 },isoWeek: { $exp: '$obj.obj.obj.num' },isoDayOfWeek: { $subtract: [51361,'$obj.obj.num'] },millisecond: { $log10: '$num' },timezone: "America/Paramaribo"} } } } } },"Avon"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Money Market Account Manager"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $zip: {inputs: [],useLongestLength: true,defaults: ["Refined Granite Computer digital"]} } }, _id: 0}}],

        [{$project: {a: { $range: [18,18,17] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.obj.str',{ $toUpper: "Bike algorithm Avon" },'$obj.obj.obj.str',"Kip"],cond: { $lt: [{ $arrayToObject: [[['$obj.obj.obj.num',13397],[{ $ltrim: {input: '$obj.obj.obj.obj.str',chars: '$$this'} }],[]]] },{ $concatArrays: [[{ $substrCP: [{ $substrBytes: ["program Ergonomic Soft Pants",8,3] },5,13] }],["Kentucky Awesome",{ $toString: { $zip: {inputs: [[false],[],[]],defaults: [22586]} } }],['$$this',45594]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Avon Ergonomic Frozen Chips fault-tolerant",v: { $year: { $dateFromParts: {isoWeekYear: { $log: [51273,'$num'] },isoWeek: { $cmp: [{ $zip: {inputs: [[],[44959],[],[{ $rtrim: {input: { $substrCP: ["expedite Books",8,11] },chars: "Causeway synergistic Associate"} },'$obj.obj.str',"SCSI lime Brazil"]],defaults: [/^mint green|Bridge|Ohio/,51102]} },{ $map: {input: [],as: 'jeanne',in: { $sqrt: 9591 }} }] },isoDayOfWeek: { $mod: ['$obj.obj.obj.num','$num'] },second: { $indexOfArray: [{ $range: [2,14,16] },{ $dayOfYear: { $minute: { $dayOfWeek: { $minute: { $dateToParts: {date: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T06:14:47.881Z",format: "%%-%z-%w-%d-%G-%M-%u-%m-%d-%U-%d",onNull: { $toString: { $arrayToObject: [[{k: "Knolls Clothing deposit",v: false},{k: "Oregon",v: '$obj.obj.num'}]] } }} } },timezone: "Australia/North",iso8601: true} } } } } },18,5] },millisecond: { $trunc: 1241 },timezone: "Pacific/Rarotonga"} } }}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T17:13:34.753Z",timezone: "America/Indiana/Knox"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Zambian Kwacha Chair intuitive",'$obj.str',{ $rtrim: {input: "Agent",chars: '$obj.obj.str'} }],34573] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: {date: '$obj.obj.obj.date',format: "%m-%d-%G-%u-%z-%L-%U-%w-%U"} } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $floor: '$obj.num' },month: { $mod: [68581,'$obj.obj.obj.num'] },hour: { $add: ['$obj.obj.obj.num',71150] },minute: { $divide: [21461,77936] },second: { $abs: 20072 },millisecond: { $indexOfArray: [{ $objectToArray: '$obj.obj' },{ $arrayElemAt: [[{ $substr: ['$obj.obj.obj.str',10,9] }],48290] },4] },timezone: "Etc/GMT-9"} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toLower: { $concat: ["matrix reboot discrete",'$obj.obj.obj.obj.str'] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $second: { $year: { $month: { $minute: { $month: { $isoWeek: { $week: { $minute: { $millesecond: { $dateFromString: {dateString: "2018-09-06T12:10:30.730Z",format: "%G-%d-%L-%Y-%U-%V-%V-%V-%S"} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Silver Groves",v: false},{k: "Engineer",v: { $toString: { $arrayElemAt: [[],'$obj.obj.num'] } }}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: ['$obj.obj.obj.obj.str',7,3] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["THX Togo challenge",{ $toString: { $arrayElemAt: [[],{ $log: [92431,'$num'] }] } },'$obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $hour: { $minute: { $dayOfMonth: { $dateToParts: { date: { $dateFromString: {dateString: "2018-09-06T07:00:17.416Z",format: "%%-%U-%d-%u-%z-%%-%Z-%%-%Z-%L-%Z",timezone: "Jamaica",onError: { $toLower: "Alaska Facilitator didactic" },onNull: { $zip: { inputs: [[],[{ $toLower: "Handcrafted" }],['$obj.str',"Pants plum Coordinator",'$obj.obj.str',{ $dateToString: {date: new Date("2018-09-06T14:15:07.591Z"),timezone: "Europe/Vatican"} }],['$obj.obj.obj.str']] } }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeekYear: { $millesecond: { $isoWeekYear: { $millesecond: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $mod: ['$obj.obj.num',23372] },isoWeek: { $cmp: [{ $objectToArray: '$obj.obj' },{ $dateToParts: {date: { $hour: { $toDate: { $arrayToObject: [[{k: "program",v: '$obj.obj.str'}]] } } },timezone: "Asia/Novosibirsk"} }] },hour: { $log10: '$num' },minute: { $ceil: 83810 },second: { $abs: '$obj.obj.obj.num' },millisecond: { $trunc: 15357 },timezone: "America/Guayaquil"} },timezone: "Kwajalein"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[46554],92741] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["harness exploit"],as: 'cyrus',cond: { $in: [{ $substrCP: ['$$cyrus',8,1] },{ $filter: {input: [],cond: { $ne: [{ $arrayElemAt: [[{ $toUpper: "Estates scale Automotive" }],'$num'] },{ $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T06:24:08.675Z",onError: { $arrayToObject: [[{k: "Ameliorated SMTP transmitter",v: '$$this'}]] }} } }] }} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],61393] }, _id: 0}}],

        [{$project: {a: { $week: { $minute: { $isoWeek: { $dateToString: { date: { $isoWeekYear: { $dateToParts: {date: { $second: { $dayOfMonth: { $month: { $dateToString: {date: new Date("2018-09-06T17:57:07.275Z"),format: "%G-%Y-%Y-%w-%u-%d-%U-%m-%Y"} } } } },timezone: "Australia/Victoria",iso8601: false} } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $minute: { $second: { $year: { $millesecond: { $millesecond: { $dateToString: {date: '$obj.date',onNull: { $arrayToObject: [[{k: "Customizable",v: { $rtrim: {input: "application Handmade",chars: '$obj.obj.obj.str'} }},{k: "infrastructure bluetooth",v: "Group e-business"}]] }} } } } } } },iso8601: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],10723] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $exp: 85873 },isoWeek: { $cmp: [{ $reverseArray: [['$str']] },{ $arrayToObject: [[[{ $indexOfArray: [{ $range: [20,18] },{ $zip: {inputs: [["schemas Designer Rhode Island",{ $toString: { $dateToString: {date: '$date',format: "%V-%S-%U-%M-%%-%L-%%-%L-%U-%M-%z",timezone: "Pacific/Tahiti"} } }],[92577,'$obj.num','$obj.obj.obj.num']],defaults: [[{},/^Handcrafted Steel Pizza|programming/]]} },7] },73816,{ $floor: '$obj.obj.obj.num' },'$obj.obj.num'],["Integrated Forward",'$obj.obj.obj.obj.str'],[true,false,'$obj.obj.num']]] }] },isoDayOfWeek: { $size: [[{ $substrCP: [{ $substrCP: ['$obj.obj.obj.str',2,17] },11,3] },"Stream Tasty Granite Chair Avon"]] },minute: { $abs: { $log: [32980,'$num'] } },millisecond: { $trunc: 48782 }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $concat: ["Fantastic Frozen Tuna system"] },chars: { $toString: { $arrayToObject: [[{k: "Netherlands Antilles Multi-tiered",v: '$obj.obj.date'}]] } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: '$obj.str' },"synthesize Forward SDD",'$obj.obj.obj.str'],[49234],[{ $rtrim: { input: "Burundi Franc Steel" } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Shoals International",{ $toLower: '$obj.obj.obj.obj.str' }],["cross-platform",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],71411] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toLower: "Indian Rupee Ngultrum compelling" },chars: "plum"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "port e-services",v: new Date("2018-09-06T08:12:08.222Z")},{k: "target Administrator",v: 56674}]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "Svalbard & Jan Mayen Islands Rubber",v: false},{k: "TCP",v: "Roads partnerships Steel"},{k: "Rubber lime",v: { $dayOfYear: { $month: { $hour: { $isoWeekYear: { $dateFromParts: {year: '$obj.num',day: { $add: [51834] },hour: { $divide: ['$num',85798] },minute: { $subtract: ['$obj.obj.num','$obj.num'] },timezone: "Pacific/Marquesas"} } } } } }}]] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[89972,'$num'],29910] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[73452,53527,'$num']],useLongestLength: true,defaults: [/parsing|Avon/]} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrBytes: ["evolve",11,13] }],in: { $sqrt: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],26248] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.num'],13467] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeek: { $millesecond: { $millesecond: { $minute: { $isoDayOfWeek: { $dayOfMonth: { $dayOfMonth: { $second: '$obj.date' } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["reciprocal virtual",'$obj.str'],in: { $size: [[]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Incredible",{ $concat: ['$obj.obj.obj.obj.str'] }],'$num'] }, _id: 0}}],

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
