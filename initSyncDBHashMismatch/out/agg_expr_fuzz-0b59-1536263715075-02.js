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
        return coll.insert({_id: 1274,str: "reboot",num: 12222,date: new Date("2018-09-06T03:28:09.023Z"),array: ["Norway","orange",77081,{_id: 1275,str: "redundant",num: 80401,date: new Date("2018-09-06T17:50:13.562Z"),array: [],obj: {}},[new Date("2018-09-06T13:34:06.437Z")],"dynamic Facilitator",{_id: 1276,str: "Swaziland Home Loan Account",date: new Date("2018-09-06T15:53:07.506Z"),array: [],obj: {_id: 1277,str: "Money Market Account motivating Mall",num: 27484,date: new Date("2018-09-06T12:01:33.130Z"),obj: {}}},91971,new Date("2018-09-06T11:07:44.234Z"),93029,[],{_id: 1278,num: 66203,array: ["Tasty",new Date("2018-09-06T02:18:00.512Z")],obj: {_id: 1279,num: 99676,date: new Date("2018-09-06T00:34:18.878Z"),array: []}},67081],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1280,str: "AGP model",num: 94848,array: [],obj: {_id: 1281,str: "AGP Specialist",num: 49439,date: new Date("2018-09-06T03:11:54.403Z"),array: [new Date("2018-09-06T13:42:34.575Z"),[],292,"Berkshire Unbranded",new Date("2018-09-06T06:07:07.511Z"),"programming Practical Rubber Car needs-based",new Date("2018-09-06T16:57:02.386Z"),"target",{_id: 1282,num: 90225,date: new Date("2018-09-05T22:22:56.484Z"),array: [],obj: {}},new Date("2018-09-06T17:20:38.223Z"),{_id: 1283,date: new Date("2018-09-06T16:47:02.791Z"),array: [{_id: 1284,str: "Gorgeous Concrete Tuna olive",obj: {_id: 1285,str: "transmitter",date: new Date("2018-09-06T13:18:49.411Z"),array: []}}],obj: {_id: 1286,str: "Sleek Plastic Cheese Practical",num: 23163,date: new Date("2018-09-06T19:24:18.816Z")}},{_id: 1287,num: 53915,date: new Date("2018-09-06T06:02:10.069Z"),obj: {}},16192],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1288,str: "Virginia conglomeration",num: 87829,array: [],obj: {_id: 1289,str: "Bike Shoal",num: 27198,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1290,str: "deposit lime",num: 91364,date: new Date("2018-09-05T20:19:04.466Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1291,str: "National",num: 27323,date: new Date("2018-09-06T18:41:49.560Z"),array: [[],new Date("2018-09-06T06:09:00.129Z"),7823,"Ergonomic Fresh Tuna",{_id: 1292,num: 11242,date: new Date("2018-09-06T15:59:45.343Z"),array: [new Date("2018-09-06T04:50:41.271Z"),45815,"Toys",new Date("2018-09-06T05:36:58.065Z"),"Dynamic Madagascar array",89778,5495]},[new Date("2018-09-06T18:53:12.267Z")],"deliverables Ergonomic 4th generation",{_id: 1293,str: "Delaware Somalia next generation",date: new Date("2018-09-06T19:17:16.038Z"),array: [],obj: {}}],obj: {_id: 1294,str: "tan Rial Omani",num: 37796,date: new Date("2018-09-06T05:33:56.036Z"),array: [9622,"payment",new Date("2018-09-06T07:36:47.663Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1295,str: "iterate Rwanda",num: 95996,date: new Date("2018-09-06T05:11:49.956Z"),array: [[],"Front-line","copy",new Date("2018-09-06T15:52:26.355Z"),new Date("2018-09-06T00:49:11.326Z"),{_id: 1296,str: "GB",num: 8397,date: new Date("2018-09-06T03:12:39.659Z"),array: [],obj: {}},"Saint Vincent and the Grenadines"],obj: {_id: 1297,str: "Nepalese Rupee",num: 51662,date: new Date("2018-09-06T11:18:49.007Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1298,str: "Legacy",num: 42947,date: new Date("2018-09-05T22:29:09.575Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1299,str: "users",num: 91511,date: new Date("2018-09-05T22:04:58.156Z"),obj: {_id: 1300,num: 36473,date: new Date("2018-09-05T23:32:48.311Z"),array: [new Date("2018-09-06T00:05:42.536Z"),"Guernsey Small Concrete Cheese tertiary",46469,{_id: 1301,str: "monitor Direct Data",num: 72785,array: [92717,[],31005,88572,"copy California dot-com"],obj: {_id: 1302,num: 1859,date: new Date("2018-09-06T13:47:35.893Z"),array: [],obj: {}}},"Hills Engineer withdrawal",{_id: 1303,str: "yellow",date: new Date("2018-09-06T17:05:26.671Z")},new Date("2018-09-05T23:26:24.247Z")],obj: {_id: 1304,str: "Manager open-source deposit",num: 23617,date: new Date("2018-09-05T23:34:19.672Z"),array: [new Date("2018-09-06T05:08:41.522Z"),"Yemen Plaza","Djibouti Franc withdrawal"]}}});
    },

    function(coll) {
        return coll.insert({_id: 1305,num: 29617,date: new Date("2018-09-06T02:07:28.557Z"),array: ["Groves paradigms",new Date("2018-09-06T03:02:53.056Z"),73799,new Date("2018-09-06T04:15:43.479Z"),{_id: 1306,str: "South Georgia and the South Sandwich Islands copy deposit",num: 76615,date: new Date("2018-09-06T18:17:27.764Z"),array: [],obj: {_id: 1307,str: "wireless hard drive",num: 94556,array: [new Date("2018-09-06T04:40:19.995Z"),"Clothing"],obj: {}}},"architect bypassing",85841,[],60681,{_id: 1308,str: "collaborative calculate Auto Loan Account",date: new Date("2018-09-06T00:49:58.346Z"),array: [],obj: {}},new Date("2018-09-05T20:44:21.447Z"),"Azerbaijan drive transmitter"]});
    },

    function(coll) {
        return coll.insert({_id: 1309,num: 37721,obj: {_id: 1310,str: "Frozen",num: 68293,date: new Date("2018-09-05T21:02:39.463Z"),array: ["Indian Rupee Ngultrum copying","Berkshire",new Date("2018-09-06T18:41:58.400Z"),new Date("2018-09-06T16:09:10.610Z"),2214,[],36173,98179,[new Date("2018-09-06T16:57:11.497Z"),"CSS maximized",[],"Avon content bypass",{_id: 1311,str: "parse",num: 16829,date: new Date("2018-09-05T21:04:58.858Z"),array: [],obj: {}},[{_id: 1312,str: "backing up",num: 89851,array: [new Date("2018-09-05T22:22:37.583Z")]},76940,17156]]],obj: {_id: 1313,str: "Electronics",num: 15597}}});
    },

    function(coll) {
        return coll.insert({_id: 1314,str: "Right-sized RSS invoice",num: 73486,date: new Date("2018-09-06T16:24:28.274Z"),array: [new Date("2018-09-06T19:26:37.893Z"),new Date("2018-09-06T02:21:30.401Z"),86751,91425,["Estate extranet Money Market Account"],46550,new Date("2018-09-06T17:17:47.740Z"),55532,"Awesome",{_id: 1315,str: "Investment Account",num: 6845,date: new Date("2018-09-06T18:23:36.372Z"),array: [],obj: {_id: 1316,str: "distributed wireless Rufiyaa",num: 8713,array: []}},"Communications Analyst Wooden","Small deploy"],obj: {_id: 1317,date: new Date("2018-09-06T14:25:14.771Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1318,str: "implement",num: 79102,date: new Date("2018-09-06T19:30:20.031Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1319,str: "invoice Games",num: 41502,date: new Date("2018-09-06T13:08:58.800Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1320,num: 79572,date: new Date("2018-09-06T07:58:59.392Z"),array: [new Date("2018-09-05T22:00:18.870Z"),{_id: 1321,str: "visualize Chair",num: 71261,date: new Date("2018-09-06T10:36:39.276Z"),array: ["Grocery"],obj: {_id: 1322,str: "Industrial Granite",array: [],obj: {}}},[49456,65792,{_id: 1323,str: "Portugal backing up Stream",num: 2814,date: new Date("2018-09-06T04:21:10.591Z")},new Date("2018-09-06T00:31:06.887Z"),new Date("2018-09-05T19:58:11.484Z")],"invoice web services Extended",new Date("2018-09-06T06:38:08.043Z"),13752,28494,"invoice Licensed",new Date("2018-09-06T19:18:57.849Z"),"interface success",[],{_id: 1324,str: "Universal panel Plastic",num: 19205,date: new Date("2018-09-06T16:07:41.180Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1325,str: "Cotton monitor",num: 83730,date: new Date("2018-09-06T19:02:16.142Z"),array: [],obj: {_id: 1326,str: "Borders workforce Home Loan Account",num: 45094,date: new Date("2018-09-06T06:54:12.429Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1327,str: "RAM pixel",date: new Date("2018-09-05T21:12:52.543Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1328,str: "Mill",num: 47435,date: new Date("2018-09-06T11:12:17.393Z"),array: [new Date("2018-09-06T17:25:03.687Z"),61235,"solid state",new Date("2018-09-06T19:45:01.079Z"),"concept Automated bypass",2423,new Date("2018-09-06T13:17:23.658Z"),82923,[],[],{_id: 1329,num: 23736,date: new Date("2018-09-06T16:10:49.364Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1330,str: "distributed",num: 53574,date: new Date("2018-09-06T17:40:58.241Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1331,str: "experiences",num: 82215,date: new Date("2018-09-05T20:58:36.351Z"),obj: {_id: 1332,str: "back-end Officer",date: new Date("2018-09-05T21:06:36.668Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1333,str: "California",num: 88804,date: new Date("2018-09-05T20:52:58.362Z"),array: [],obj: {_id: 1334,str: "Representative interface Music",num: 31146,date: new Date("2018-09-06T13:37:15.937Z"),array: [{_id: 1335,num: 59530,date: new Date("2018-09-06T06:10:01.532Z"),array: [new Date("2018-09-05T23:18:43.384Z"),"Soap",1429,"Generic Concrete Mouse transmitting",67187,[],[],37853],obj: {}},new Date("2018-09-05T22:17:05.864Z"),{_id: 1336,str: "XSS Wooden seize",array: [new Date("2018-09-06T02:58:32.830Z"),"expedite",21106,[{_id: 1337,str: "generate budgetary management Designer",date: new Date("2018-09-06T11:07:44.810Z"),obj: {}}],new Date("2018-09-06T00:10:41.386Z")],obj: {_id: 1338,str: "vortals",num: 56327,date: new Date("2018-09-06T01:21:17.460Z"),array: []}},"Seychelles platforms","Soft",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 1339,str: "Locks",date: new Date("2018-09-06T09:08:02.236Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1340,str: "Intelligent Frozen Keyboard Research logistical",num: 56608,array: ["Ecuador attitude-oriented Flats",85767,new Date("2018-09-06T03:26:36.685Z"),[19651,[],{_id: 1341,num: 46467,date: new Date("2018-09-06T08:51:18.564Z"),obj: {_id: 1342,str: "Brazilian Real dedicated Keys",num: 96213,date: new Date("2018-09-06T06:06:23.524Z"),array: [],obj: {}}}],62457,{_id: 1343,str: "infrastructures multimedia",num: 51655,date: new Date("2018-09-06T18:52:29.907Z"),array: [],obj: {_id: 1344,str: "Home Loan Account Utah",date: new Date("2018-09-06T18:50:27.546Z")}},36852,"AGP","Devolved quantify",new Date("2018-09-06T17:53:22.086Z"),new Date("2018-09-06T01:41:42.743Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1345,str: "Checking Account Oregon Baby",num: 99408,array: [new Date("2018-09-05T23:49:35.089Z"),"Generic","transmit Books infrastructures","Metal",20301,"interface",38625,[new Date("2018-09-06T11:57:29.638Z")],new Date("2018-09-06T11:54:44.100Z"),new Date("2018-09-06T07:05:52.341Z"),3498,1921,{_id: 1346,str: "Pizza Belize Dollar Uzbekistan",num: 92588,date: new Date("2018-09-06T07:11:49.972Z"),array: [],obj: {}}],obj: {_id: 1347,num: 97106,date: new Date("2018-09-06T15:03:16.819Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1348,str: "Adaptive Naira",num: 85247,date: new Date("2018-09-06T09:27:30.538Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1349,str: "open system",num: 32454,date: new Date("2018-09-06T04:41:47.832Z"),array: ["indexing","turquoise Checking Account Solutions","experiences",new Date("2018-09-06T15:35:28.487Z"),[47779],[],{_id: 1350,str: "Avon Incredible bricks-and-clicks",num: 42732,date: new Date("2018-09-06T09:06:54.584Z"),obj: {}},9598,new Date("2018-09-06T03:29:42.000Z"),new Date("2018-09-06T13:37:19.207Z"),"deposit framework Hawaii",new Date("2018-09-06T16:11:55.329Z"),"analyzing SSL"],obj: {_id: 1351,num: 23295,date: new Date("2018-09-06T03:35:33.252Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1352,str: "Summit parsing wireless",num: 5558,date: new Date("2018-09-06T16:56:35.935Z"),array: [12673,new Date("2018-09-06T17:18:57.499Z"),"panel Web",new Date("2018-09-06T12:01:37.668Z"),"payment standardization indexing",25844,62942,new Date("2018-09-06T05:41:46.606Z"),"override sensor",[],9085],obj: {_id: 1353,str: "Rustic",num: 85143,date: new Date("2018-09-06T19:46:33.104Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1354,str: "Chair IB Awesome",num: 42635,date: new Date("2018-09-06T19:00:12.546Z"),array: ["SMS",17010,"embrace GB Streamlined",new Date("2018-09-06T09:10:38.007Z"),[],"interfaces",new Date("2018-09-05T23:55:00.916Z"),29427,21943],obj: {_id: 1355,str: "target Wooden even-keeled",num: 55196,date: new Date("2018-09-06T07:46:18.063Z"),array: [{_id: 1356,str: "Bermudian Dollar (customarily known as Bermuda Dollar) gold",num: 36154,date: new Date("2018-09-06T10:37:05.726Z"),array: [],obj: {}},new Date("2018-09-06T00:52:06.001Z"),25052,{_id: 1357,num: 90184,date: new Date("2018-09-05T22:27:53.915Z"),obj: {_id: 1358,str: "wireless",array: [[new Date("2018-09-05T21:03:30.795Z"),new Date("2018-09-06T13:17:25.669Z"),new Date("2018-09-06T14:08:44.394Z"),"optical"],"Mount",[61308,{_id: 1359,array: [],obj: {}}]]}},"Tools"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1360,str: "Metal Keyboard",num: 2415,date: new Date("2018-09-05T20:24:27.683Z"),array: [new Date("2018-09-06T18:22:29.646Z"),16127,[],91931,new Date("2018-09-06T05:09:16.512Z"),"transmitting driver Indonesia","Lights Iowa modular",new Date("2018-09-06T02:59:05.803Z"),80628,{_id: 1361,str: "deposit",num: 52228,date: new Date("2018-09-05T21:03:54.050Z"),obj: {}},"Alaska Bedfordshire National",{_id: 1362,str: "Unbranded Checking Account Home Loan Account",date: new Date("2018-09-06T18:31:30.358Z"),obj: {}}],obj: {_id: 1363,num: 31440,date: new Date("2018-09-06T08:54:00.152Z"),array: [11764]}});
    },

    function(coll) {
        return coll.insert({_id: 1364,str: "Oregon Checking Account Inlet",num: 21617,array: [new Date("2018-09-06T02:38:40.418Z"),36062,"quantify input interfaces",{_id: 1365,str: "cross-media Berkshire",num: 92832,date: new Date("2018-09-05T23:45:34.037Z"),array: [91598,new Date("2018-09-06T07:58:12.659Z"),26096,new Date("2018-09-06T16:03:36.888Z"),new Date("2018-09-06T14:04:35.996Z")]},14105,"payment Planner Planner",80151,"Integration","redundant ivory Towels"],obj: {_id: 1366,num: 46647,array: [],obj: {_id: 1367,str: "Norfolk Island content",date: new Date("2018-09-05T22:27:57.976Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 1368,str: "radical European Monetary Unit (E.M.U.-6)",num: 99167,date: new Date("2018-09-06T08:53:28.274Z"),array: [79516,"expedite Keyboard",{_id: 1369,str: "Frozen invoice",num: 52307,date: new Date("2018-09-06T16:16:10.452Z"),array: [73610],obj: {_id: 1370,str: "Group wireless Shirt",obj: {}}},new Date("2018-09-06T06:30:41.775Z"),"orchid indigo",new Date("2018-09-06T18:12:55.045Z"),{_id: 1371,str: "paradigms frame frictionless",num: 27191,date: new Date("2018-09-06T07:09:36.944Z"),array: [],obj: {}},new Date("2018-09-06T17:36:52.662Z"),"Avon",[23491,[]],{_id: 1372,num: 17018,date: new Date("2018-09-06T02:54:36.237Z"),array: [],obj: {_id: 1373,str: "gold synthesizing Small",array: [],obj: {_id: 1374,num: 51744,date: new Date("2018-09-05T21:10:17.316Z")}}},"violet"],obj: {_id: 1375,num: 76349,date: new Date("2018-09-06T17:48:12.574Z")}});
    },

    function(coll) {
        return coll.insert({_id: 1376,str: "deposit Forward",num: 61978,date: new Date("2018-09-06T03:52:16.324Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1377,str: "Generic Plastic Chicken Savings Account",num: 98464,date: new Date("2018-09-06T06:49:13.511Z"),array: [new Date("2018-09-06T17:06:26.835Z"),"uniform Hong Kong Dollar Soft",4180,new Date("2018-09-06T06:17:50.702Z"),55227,"withdrawal Salad",new Date("2018-09-06T13:00:59.735Z"),{_id: 1378,num: 31817,date: new Date("2018-09-05T23:56:42.090Z"),array: [],obj: {}},"Cambridgeshire Creek Checking Account",[],"real-time",61948,new Date("2018-09-06T10:51:38.839Z"),{_id: 1379,str: "matrix client-driven",num: 86822,date: new Date("2018-09-06T01:16:57.891Z"),obj: {_id: 1380,str: "monitor",date: new Date("2018-09-05T21:08:11.091Z"),array: ["primary system"],obj: {_id: 1381,str: "Investment Account",num: 57888,date: new Date("2018-09-06T18:33:59.070Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 1382,str: "Investment Account Factors Metrics",num: 20965,date: new Date("2018-09-06T16:01:07.661Z"),array: [],obj: {_id: 1383,str: "Car Representative",num: 19586,date: new Date("2018-09-06T12:05:35.394Z"),obj: {_id: 1384,num: 65355,date: new Date("2018-09-06T12:09:30.987Z"),array: [new Date("2018-09-06T12:55:45.221Z"),48150,{_id: 1385,str: "Licensed",array: [new Date("2018-09-06T16:40:39.925Z"),"Personal Loan Account",new Date("2018-09-06T04:48:18.751Z"),"revolutionize Awesome"],obj: {}},"service-desk",{_id: 1386,str: "back-end Senior COM",date: new Date("2018-09-06T15:22:34.647Z"),array: []},new Date("2018-09-06T04:21:57.481Z"),{_id: 1387,str: "transmitting Credit Card Account Business-focused",num: 30239,date: new Date("2018-09-06T00:20:52.308Z"),array: [],obj: {}},54606,[new Date("2018-09-06T18:36:30.790Z"),[86239,99053]]],obj: {_id: 1388,str: "eco-centric channels",num: 36702,date: new Date("2018-09-05T21:09:43.355Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 1389,num: 68643,date: new Date("2018-09-05T20:49:58.645Z"),array: ["Paraguay Car local area network",new Date("2018-09-06T00:01:26.353Z"),82117,new Date("2018-09-06T18:31:10.732Z"),"HTTP client-driven",{_id: 1390,str: "Savings Account",num: 52975,date: new Date("2018-09-06T02:20:38.313Z"),array: [],obj: {}},"Checking Account",new Date("2018-09-06T13:15:52.081Z"),49383,{_id: 1391,str: "utilize Bedfordshire Associate",num: 82612,date: new Date("2018-09-05T20:23:26.270Z"),obj: {_id: 1392,str: "Kenya Berkshire",date: new Date("2018-09-06T17:19:40.743Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1393,str: "Auto Loan Account optimize",num: 81753,date: new Date("2018-09-06T01:36:29.729Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1394,str: "Tasty",num: 22344,date: new Date("2018-09-06T11:33:16.473Z"),array: ["innovate",{_id: 1395,str: "digital niches Kroon",num: 93837,date: new Date("2018-09-05T22:38:35.760Z"),array: [new Date("2018-09-06T14:56:10.786Z")],obj: {_id: 1396,str: "Officer Incredible Niger",date: new Date("2018-09-05T23:16:11.158Z"),array: [11941,"mobile",240,"Rhode Island"]}},new Date("2018-09-06T06:25:06.450Z"),41987,new Date("2018-09-06T14:19:42.404Z"),new Date("2018-09-06T17:22:27.556Z"),"Mountains Specialist redundant",{_id: 1397,str: "Planner Cove service-desk",num: 40816,date: new Date("2018-09-06T04:37:23.058Z"),array: [],obj: {}},{_id: 1398,num: 23315,obj: {}},[],97673,87106,{_id: 1399,obj: {_id: 1400,str: "sticky Architect",num: 21132,date: new Date("2018-09-06T05:54:46.506Z"),array: [],obj: {_id: 1401,num: 42682,date: new Date("2018-09-06T12:17:43.888Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 1402,str: "mindshare system orange",num: 84168,date: new Date("2018-09-06T18:03:18.649Z"),array: [{_id: 1403,num: 8717,date: new Date("2018-09-06T16:37:51.075Z"),array: [69849,"Developer CSS violet"],obj: {}},new Date("2018-09-06T15:54:39.964Z"),[],{_id: 1404,str: "drive",num: 85393,date: new Date("2018-09-06T01:53:14.285Z"),obj: {_id: 1405,str: "deliverables",date: new Date("2018-09-06T05:17:35.381Z"),array: [],obj: {}}},"Direct maroon SCSI",new Date("2018-09-06T07:19:14.520Z"),new Date("2018-09-06T05:41:19.923Z"),13255,new Date("2018-09-05T22:23:32.093Z"),new Date("2018-09-06T06:54:10.983Z"),42378,"Cambridgeshire Credit Card Account asymmetric"]});
    },

    function(coll) {
        return coll.insert({_id: 1406,str: "Plastic",num: 8292,date: new Date("2018-09-06T19:40:53.961Z"),array: [{_id: 1407,str: "Plastic Berkshire scalable",num: 32528,date: new Date("2018-09-05T22:54:53.404Z"),array: [],obj: {_id: 1408,str: "copying Officer Computer",num: 82290,date: new Date("2018-09-05T21:25:27.423Z"),obj: {_id: 1409,num: 78278,array: [new Date("2018-09-06T01:43:01.134Z")],obj: {}}}},70249,87678,"olive Rustic optical",new Date("2018-09-06T02:00:09.173Z"),"Accounts Regional","Enterprise-wide secondary mint green",{_id: 1410,str: "Rustic",num: 13112,date: new Date("2018-09-06T03:42:20.830Z"),array: [{_id: 1411,str: "disintermediate Steel"}]},"Refined",99438,"Arkansas",[]],obj: {_id: 1412,str: "action-items",date: new Date("2018-09-05T20:17:09.827Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1413,str: "District Dynamic",num: 35903,date: new Date("2018-09-06T07:01:47.095Z"),array: [27329,89395,{_id: 1414,str: "e-enable matrix",num: 22908,array: []},new Date("2018-09-06T05:08:02.318Z"),[],"Keyboard Iceland Personal Loan Account","Rhode Island West Virginia algorithm",new Date("2018-09-06T12:42:07.728Z"),[55664,61592],"Licensed Soft Bike",new Date("2018-09-06T14:40:24.872Z"),"matrix Cambridgeshire user-centric"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1415,str: "Credit Card Account",num: 14003,array: [],obj: {_id: 1416,str: "sensor utilize Principal",date: new Date("2018-09-06T08:38:03.256Z"),array: [75212,new Date("2018-09-06T01:58:16.069Z"),"Directives navigating",37391,[],new Date("2018-09-05T22:54:52.047Z"),"Cambridgeshire transmitting","Personal Loan Account strategy Iran",43055,new Date("2018-09-06T04:49:58.423Z"),{_id: 1417,num: 9106,date: new Date("2018-09-06T06:52:16.337Z"),array: [new Date("2018-09-06T19:00:47.191Z"),"content Factors"],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1418,str: "pixel",num: 1745,date: new Date("2018-09-06T08:08:14.279Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1419,str: "Cameroon",num: 47944,date: new Date("2018-09-06T05:07:49.332Z"),array: [],obj: {_id: 1420,str: "Danish Krone",num: 67031,date: new Date("2018-09-06T15:34:15.778Z"),array: [new Date("2018-09-06T07:38:41.868Z"),"withdrawal COM",79807,46730,{_id: 1421,num: 74242},new Date("2018-09-06T15:47:53.622Z"),[[],"RAM Communications"],"Rhode Island mint green concept",new Date("2018-09-06T03:11:33.264Z"),[],"Flat",94815,new Date("2018-09-06T02:08:34.679Z"),{_id: 1422,num: 15650,date: new Date("2018-09-05T22:52:25.435Z"),array: [{_id: 1423,str: "Germany",date: new Date("2018-09-06T12:33:16.636Z"),array: ["Berkshire optical Savings Account"],obj: {}},7771],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 1424,str: "Motorway Customizable generating",num: 74362,date: new Date("2018-09-06T18:36:26.684Z"),array: [],obj: {_id: 1425,str: "Rubber Security optimizing",num: 1378,obj: {_id: 1426,str: "Awesome",date: new Date("2018-09-06T09:36:10.969Z"),array: [66474,"Svalbard & Jan Mayen Islands New Taiwan Dollar",{_id: 1427,date: new Date("2018-09-06T07:16:33.575Z"),array: ["panel scalable Movies"]},[],52431,314,35620,new Date("2018-09-06T09:33:03.450Z"),new Date("2018-09-06T02:54:12.257Z"),56137,new Date("2018-09-06T02:16:16.822Z"),new Date("2018-09-05T22:22:00.140Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 1428,num: 33366,date: new Date("2018-09-06T12:10:30.017Z"),array: [new Date("2018-09-06T02:12:59.033Z"),6992,[],"portals hard drive Producer",[],88574,new Date("2018-09-06T19:53:19.078Z"),new Date("2018-09-06T15:48:04.290Z"),"withdrawal Sleek Granite Hat program","Home Loan Account",new Date("2018-09-06T03:00:42.920Z"),24014,[new Date("2018-09-06T11:57:55.112Z")]],obj: {_id: 1429,str: "interface invoice",num: 83937,date: new Date("2018-09-06T14:48:42.520Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1430,str: "Australian Dollar",num: 35501,date: new Date("2018-09-05T22:11:50.384Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1431,str: "streamline Personal Loan Account",num: 42340,date: new Date("2018-09-06T02:52:25.423Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1432,str: "vortals Path maroon",num: 20641,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1433,str: "Officer relationships intangible",num: 57009,date: new Date("2018-09-05T21:12:30.230Z"),array: ["Dynamic Algerian Dinar",{_id: 1434,num: 67925,date: new Date("2018-09-05T20:27:27.549Z"),obj: {_id: 1435,str: "application Intelligent Granite Chicken North Dakota",date: new Date("2018-09-06T01:54:15.449Z"),array: []}},"Baht",76072,new Date("2018-09-05T21:04:54.279Z"),449,new Date("2018-09-05T20:23:22.641Z"),{_id: 1436,str: "Global",date: new Date("2018-09-06T06:26:36.611Z"),array: [new Date("2018-09-06T08:59:18.889Z")],obj: {_id: 1437,str: "Identity lavender",num: 92495,array: [],obj: {}}},62708,96962,[18711,"Factors firewall"],new Date("2018-09-06T10:04:06.435Z"),{_id: 1438,str: "Kwacha",date: new Date("2018-09-06T09:45:04.413Z"),array: [[],"innovate panel Handcrafted Frozen Car",new Date("2018-09-06T08:19:16.688Z"),new Date("2018-09-06T10:33:56.928Z")],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1439,num: 75161,array: [{_id: 1440,str: "Regional",num: 51409,array: [8602,"back-end optimal lime",66845],obj: {}},new Date("2018-09-06T11:32:04.260Z"),35188,"coherent Centralized",new Date("2018-09-06T04:32:41.302Z"),[],75567,new Date("2018-09-06T17:56:02.316Z"),"Refined Wooden Shirt",{_id: 1441,str: "Practical Concrete Chips hack Switchable",num: 33728,date: new Date("2018-09-06T01:06:50.473Z"),obj: {_id: 1442,date: new Date("2018-09-06T14:27:21.043Z")}},{_id: 1443,str: "lavender back-end Branding",num: 58733,date: new Date("2018-09-06T18:50:41.821Z"),array: [],obj: {_id: 1444,str: "Quality",num: 30169,date: new Date("2018-09-06T02:04:45.661Z")}},new Date("2018-09-05T20:50:50.750Z")],obj: {_id: 1445,str: "Concrete",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1446,str: "quantify",num: 30709,date: new Date("2018-09-06T17:31:10.319Z"),obj: {_id: 1447,str: "Sharable",num: 26979,date: new Date("2018-09-06T18:02:05.081Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1448,str: "Berkshire Technician",num: 284,date: new Date("2018-09-05T23:49:56.244Z"),array: ["Unbranded Wooden Chicken Salad European Unit of Account 9(E.U.A.-9)",new Date("2018-09-06T10:40:15.381Z"),64464,[75204],new Date("2018-09-06T02:10:02.039Z"),31275,73338,"Metal Chad","Music Corporate",{_id: 1449,str: "Markets Micronesia web-enabled",date: new Date("2018-09-06T04:32:24.742Z"),obj: {}},[],new Date("2018-09-06T18:45:57.279Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1450,str: "Personal Loan Account",date: new Date("2018-09-06T01:39:38.991Z"),array: [51601,new Date("2018-09-06T14:11:50.116Z"),51864,{_id: 1451,str: "Auto Loan Account Massachusetts object-oriented",num: 89661,array: []},"Group",new Date("2018-09-06T02:31:22.389Z"),new Date("2018-09-06T17:12:16.499Z"),64523,[],new Date("2018-09-06T05:28:20.361Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1452,str: "haptic protocol USB",num: 80647,date: new Date("2018-09-06T03:32:59.921Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1453,str: "Sausages Avon Enterprise-wide",num: 6199,date: new Date("2018-09-05T20:58:31.140Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1454,str: "sky blue sensor",num: 36190,date: new Date("2018-09-06T19:29:31.803Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1455,str: "Tasty Soft Table",num: 95351,date: new Date("2018-09-05T20:34:43.064Z"),array: [44080,"Investment Account",new Date("2018-09-06T07:08:59.870Z"),"reboot JBOD Baby",new Date("2018-09-06T09:55:57.769Z"),[],95677,{_id: 1456,str: "bypass",num: 57801,date: new Date("2018-09-06T06:51:39.387Z"),array: []},13418,new Date("2018-09-06T17:01:06.951Z"),"generate Berkshire Small"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1457,str: "leading edge white",num: 59760,date: new Date("2018-09-06T02:48:05.405Z"),obj: {_id: 1458,str: "supply-chains Sleek Frozen Gloves",num: 50194,date: new Date("2018-09-06T07:23:33.066Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1459,str: "Ergonomic",num: 65979,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1460,str: "Oregon Security Cyprus",num: 64351,date: new Date("2018-09-06T04:31:50.265Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1461,str: "Rand Namibia Dollar",num: 60096,date: new Date("2018-09-06T02:42:04.349Z"),array: [],obj: {_id: 1462,str: "reintermediate mindshare customized",num: 30312,date: new Date("2018-09-06T05:27:50.246Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1463,str: "Money Market Account system",num: 71726,date: new Date("2018-09-06T06:10:55.439Z"),array: [new Date("2018-09-06T17:25:21.011Z"),64417,[new Date("2018-09-06T19:46:34.275Z")],76844,new Date("2018-09-06T17:14:10.824Z"),"Investor Licensed Metal Chicken",90267,new Date("2018-09-06T03:43:14.589Z"),86962,"Movies monitor Division",new Date("2018-09-06T09:28:14.717Z")]});
    },

    function(coll) {
        return coll.insert({_id: 1464,str: "optimizing salmon Cayman Islands",num: 9161,date: new Date("2018-09-06T04:33:24.671Z"),array: [new Date("2018-09-06T05:46:21.175Z"),"Organic Synergistic SMTP",[],30834,{_id: 1465,str: "calculate Strategist bus",num: 31461,date: new Date("2018-09-06T01:11:56.095Z"),array: []},"Refined Concrete Bacon port payment",2222,new Date("2018-09-06T02:45:12.988Z"),{_id: 1466,str: "SAS",num: 97710,date: new Date("2018-09-06T15:11:56.018Z"),array: [19502,"SSL Cambridgeshire"],obj: {_id: 1467,num: 80049,date: new Date("2018-09-06T12:02:42.175Z"),array: [],obj: {_id: 1468,str: "mint green Shores Solutions",obj: {_id: 1469,str: "dot-com",date: new Date("2018-09-06T08:16:05.641Z"),array: [new Date("2018-09-05T21:40:41.464Z"),{_id: 1470,num: 52301,date: new Date("2018-09-06T18:22:16.033Z"),obj: {}},[new Date("2018-09-06T02:55:47.593Z"),new Date("2018-09-06T10:39:17.489Z")],65120,[]],obj: {}}}}}],obj: {_id: 1471,str: "redundant Kwanza initiative",num: 21164,array: ["Bedfordshire Brunei Dollar green",90600,"Berkshire Small"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1472,num: 94028,date: new Date("2018-09-06T13:55:15.080Z"),array: [new Date("2018-09-06T07:02:43.568Z"),[],68027,new Date("2018-09-06T16:15:56.047Z"),new Date("2018-09-06T12:05:03.504Z"),31419,[]],obj: {_id: 1473,str: "card JBOD Idaho",num: 57136,date: new Date("2018-09-06T11:53:54.958Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1474,str: "Functionality",num: 13853,date: new Date("2018-09-06T18:45:27.003Z"),array: [24686,5971,"integrate Synergized",28941,new Date("2018-09-06T14:22:57.100Z"),new Date("2018-09-05T22:06:57.030Z"),[new Date("2018-09-06T02:48:40.854Z")],new Date("2018-09-06T15:43:42.060Z"),[],"invoice",{_id: 1475,str: "Soap Strategist",num: 35889,date: new Date("2018-09-05T23:34:11.997Z"),array: [79518,new Date("2018-09-06T04:50:56.862Z"),"transparent markets paradigm",97487],obj: {}}],obj: {_id: 1476,str: "system-worthy",num: 34875,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1477,str: "Brand Refined",num: 54761,date: new Date("2018-09-06T12:02:47.760Z"),array: [85378,34710,new Date("2018-09-06T05:59:56.891Z"),"Pitcairn Islands",new Date("2018-09-06T06:10:55.258Z"),"Bulgarian Lev Optional Beauty",13463,"drive",[[],"array invoice"],[],14453,"primary",37758],obj: {_id: 1478,str: "transmitting Intelligent Cotton Pizza Director",num: 68780,date: new Date("2018-09-06T04:19:04.726Z"),array: [{_id: 1479,str: "motivating array system",num: 59044,date: new Date("2018-09-06T17:25:27.217Z"),array: [],obj: {_id: 1480,num: 10277,date: new Date("2018-09-05T22:10:31.849Z"),array: [{_id: 1481,str: "Vermont bottom-line Ameliorated",num: 92938,obj: {}}],obj: {}}}],obj: {_id: 1482,str: "methodologies Horizontal reciprocal",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 1483,str: "back up iterate",num: 24017,array: [],obj: {_id: 1484,str: "Fresh",num: 405,date: new Date("2018-09-06T06:45:14.967Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1485,str: "engage Quality",num: 47484,date: new Date("2018-09-06T18:36:50.132Z"),array: [],obj: {_id: 1486,str: "parsing",date: new Date("2018-09-05T21:27:11.551Z"),array: [],obj: {_id: 1487,num: 87234,date: new Date("2018-09-06T03:44:45.878Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 1488,str: "Cambridgeshire",num: 24557,date: new Date("2018-09-06T09:48:02.198Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1489,num: 28669,date: new Date("2018-09-05T20:06:35.596Z"),array: [new Date("2018-09-06T06:10:45.826Z"),13318,{_id: 1490,str: "Architect European Unit of Account 9(E.U.A.-9)",num: 40556,date: new Date("2018-09-05T22:40:12.693Z"),obj: {_id: 1491,str: "migration wireless software",array: [[],48870,new Date("2018-09-06T07:29:47.958Z"),15852],obj: {_id: 1492,str: "redundant overriding",num: 78209,array: [],obj: {_id: 1493,date: new Date("2018-09-06T15:38:58.953Z")}}}},"transmit",["Gambia Plastic"],"Metal disintermediate",new Date("2018-09-06T02:12:10.987Z"),new Date("2018-09-06T08:35:04.605Z"),"parsing","Developer",{_id: 1494,str: "Tuna",num: 41574,date: new Date("2018-09-06T08:54:35.452Z"),array: [29963,new Date("2018-09-06T06:21:40.790Z"),{_id: 1495,str: "Intelligent 1080p deposit",num: 80799,date: new Date("2018-09-06T08:42:43.114Z"),array: [new Date("2018-09-06T13:53:19.953Z"),97939,"Persevering"]}],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1496,str: "Outdoors",num: 12138,date: new Date("2018-09-05T21:42:51.600Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1497,str: "innovative Money Market Account",num: 30019,array: []});
    },

    function(coll) {
        return coll.insert({_id: 1498,str: "capacity CFA Franc BCEAO",num: 41057,date: new Date("2018-09-06T15:10:27.552Z"),obj: {_id: 1499,str: "Personal Loan Account",num: 60076,date: new Date("2018-09-06T08:00:28.873Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1500,str: "port convergence transform",num: 86564,date: new Date("2018-09-06T04:15:22.660Z"),array: [],obj: {_id: 1501,str: "withdrawal Unbranded",num: 40643,date: new Date("2018-09-06T03:22:09.438Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1502,str: "calculate Money Market Account",num: 68180,date: new Date("2018-09-06T08:11:29.937Z"),array: [],obj: {_id: 1503,str: "Auto Loan Account Rubber Meadows",num: 29796,date: new Date("2018-09-06T10:43:03.444Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1504,str: "bus vortals IB",num: 9939,date: new Date("2018-09-06T08:01:32.313Z"),array: ["architectures Practical Frozen Sausages vertical",new Date("2018-09-06T00:58:45.922Z"),[],"override",99353,"Chief Borders",23865,new Date("2018-09-06T12:52:30.871Z"),"facilitate Gambia Facilitator",new Date("2018-09-06T11:02:40.890Z"),new Date("2018-09-06T06:21:54.145Z"),80854,new Date("2018-09-06T16:44:39.301Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1505,str: "Berkshire Solomon Islands Dollar Massachusetts",num: 3285,date: new Date("2018-09-06T03:53:39.846Z"),array: [new Date("2018-09-06T08:10:20.531Z"),{_id: 1506,str: "success",num: 67848,date: new Date("2018-09-05T21:27:10.319Z"),array: [],obj: {_id: 1507,str: "e-commerce",num: 59496,obj: {_id: 1508,str: "parse",date: new Date("2018-09-06T03:13:47.623Z"),array: [],obj: {}}}},80665,new Date("2018-09-05T22:26:05.548Z"),82171,{_id: 1509,str: "Pants",date: new Date("2018-09-06T17:22:37.974Z"),array: ["payment out-of-the-box","expedite Kids viral"],obj: {}},97383,new Date("2018-09-06T03:16:22.661Z"),new Date("2018-09-06T13:40:36.586Z"),["infrastructures Sports"]],obj: {_id: 1510,str: "Toys",num: 64852,date: new Date("2018-09-05T20:21:47.904Z"),obj: {_id: 1511,date: new Date("2018-09-06T03:37:22.539Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 1512,str: "Engineer interfaces",num: 60286,date: new Date("2018-09-06T00:32:41.189Z"),array: [],obj: {_id: 1513,str: "Nigeria",num: 61361,date: new Date("2018-09-06T13:11:56.485Z"),array: [[],new Date("2018-09-06T16:34:01.064Z"),"uniform Freeway",95987,new Date("2018-09-06T05:22:02.472Z"),"Tools",84557,{_id: 1514,num: 37488,date: new Date("2018-09-06T15:31:49.271Z"),array: [],obj: {}},new Date("2018-09-05T20:33:21.130Z"),46641,["frame"],30094]}});
    },

    function(coll) {
        return coll.insert({_id: 1515,str: "parse Human",num: 38246,date: new Date("2018-09-05T21:05:47.712Z"),array: [10910,"Manor",20862,"Green Checking Account",new Date("2018-09-06T11:06:04.841Z"),{_id: 1516,str: "Pass Washington",num: 11682,date: new Date("2018-09-06T10:05:00.912Z"),array: [],obj: {}},new Date("2018-09-06T19:30:46.874Z"),"Granite Nevada deposit",[{_id: 1517,str: "challenge Enhanced firewall",num: 82051,array: [],obj: {_id: 1518,num: 1817,date: new Date("2018-09-05T20:24:37.442Z"),obj: {_id: 1519,str: "North Korean Won",array: [],obj: {}}}},new Date("2018-09-06T19:04:13.832Z"),new Date("2018-09-06T06:16:52.251Z"),35303],78715]});
    },

    function(coll) {
        return coll.insert({_id: 1520,str: "interfaces Home Loan Account Lane",num: 54171,date: new Date("2018-09-05T23:03:28.230Z"),array: [],obj: {_id: 1521,str: "neural",num: 69298,date: new Date("2018-09-06T02:53:54.205Z"),obj: {_id: 1522,num: 26194,date: new Date("2018-09-06T04:04:56.753Z"),array: [new Date("2018-09-06T04:17:10.962Z"),new Date("2018-09-06T15:02:49.973Z"),"Assurance Corporate yellow",new Date("2018-09-06T04:47:26.109Z"),new Date("2018-09-05T20:09:27.693Z"),"transition discrete",2966,{_id: 1523,num: 24255,date: new Date("2018-09-06T16:25:28.599Z"),array: [],obj: {}},10833,[{_id: 1524,str: "radical",array: [40263,4688,"Pants","EXE withdrawal"],obj: {}},94170],[[],{_id: 1525,str: "Representative",num: 15285,date: new Date("2018-09-06T07:59:49.296Z"),array: [[{_id: 1526,str: "compressing",array: []}],new Date("2018-09-05T20:00:54.351Z"),{_id: 1527,str: "Soft copying Frozen"},"Money Market Account"]}]],obj: {_id: 1528,str: "capacitor",num: 39305,obj: {_id: 1529,num: 94789,date: new Date("2018-09-06T06:43:39.618Z")}}}}});
    },

    function(coll) {
        return coll.insert({_id: 1530,str: "Games Front-line Home Loan Account",num: 72451,array: [],obj: {_id: 1531,str: "Optimized Borders",num: 44503,date: new Date("2018-09-05T20:00:58.939Z"),array: ["grid-enabled Computers Plastic",64864,"Public-key","primary orchestrate white",24933,{_id: 1532,str: "Money Market Account",num: 75519,date: new Date("2018-09-06T09:53:19.248Z"),obj: {}},[new Date("2018-09-06T06:00:09.606Z"),new Date("2018-09-06T05:13:40.195Z"),new Date("2018-09-05T23:32:14.754Z"),57735,new Date("2018-09-06T08:41:50.169Z"),89261],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 1533,str: "haptic",date: new Date("2018-09-06T04:44:07.091Z"),array: [7674,99652,new Date("2018-09-06T06:25:30.127Z"),new Date("2018-09-06T17:54:01.288Z"),75846,new Date("2018-09-06T11:34:14.794Z"),"deploy",[],{_id: 1534,str: "Rupiah portals Personal Loan Account",num: 81832,date: new Date("2018-09-06T03:06:12.962Z"),obj: {}},{_id: 1535,str: "French Guiana payment",num: 89947,date: new Date("2018-09-06T06:58:22.756Z"),array: ["Awesome Keys withdrawal",93514],obj: {_id: 1536,num: 8640,date: new Date("2018-09-06T09:45:21.660Z"),array: [],obj: {_id: 1537,num: 63208,date: new Date("2018-09-06T00:00:47.954Z"),array: []}}},"International"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1538,str: "paradigm Fresh",num: 21719,date: new Date("2018-09-06T19:21:38.942Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1539,str: "Facilitator Falkland Islands Pound Concrete",num: 53276,date: new Date("2018-09-06T07:29:31.780Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1540,str: "open-source bandwidth",num: 11283,date: new Date("2018-09-06T02:56:04.111Z"),array: [],obj: {_id: 1541,str: "driver",num: 48444,date: new Date("2018-09-06T07:00:20.431Z"),array: [62276,96424,[[],new Date("2018-09-06T00:51:14.507Z"),"Checking Account",new Date("2018-09-06T16:50:44.888Z"),new Date("2018-09-06T08:55:00.155Z")],"Paradigm Decentralized",{_id: 1542,str: "web services Cotton",num: 14404,array: [39212,"bandwidth quantifying recontextualize"],obj: {_id: 1543,str: "cross-platform turquoise",num: 77551,date: new Date("2018-09-06T06:38:07.729Z"),array: []}},55725,new Date("2018-09-06T00:41:19.636Z"),{_id: 1544,str: "Frozen olive Towels",array: []},"Samoa brand",{_id: 1545,num: 21882,obj: {}},[93133,{_id: 1546,str: "Incredible panel",num: 12348,date: new Date("2018-09-06T14:27:54.000Z"),obj: {}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 1547,str: "Tactics Bedfordshire synthesizing",num: 35958,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1548,str: "Chair white Codes specifically reserved for testing purposes",num: 75364,date: new Date("2018-09-06T14:56:20.568Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1549,str: "Home Loan Account platforms Sleek Steel Bacon",num: 11656,date: new Date("2018-09-06T10:20:19.529Z"),array: ["Analyst customized morph",new Date("2018-09-06T01:03:37.398Z"),[],33124,"Producer Kansas Small",2545,"Handcrafted Avon"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1550,str: "Tasty Granite Salad Bedfordshire Practical Granite Computer",num: 58838,date: new Date("2018-09-05T19:58:19.064Z"),array: ["reintermediate",[],{_id: 1551,str: "Rubber Illinois proactive",date: new Date("2018-09-06T19:06:57.393Z"),obj: {_id: 1552,str: "web-readiness Realigned",num: 54073,date: new Date("2018-09-06T15:55:30.696Z"),array: []}},"Mobility North Korean Won",new Date("2018-09-06T09:45:09.210Z"),3016,new Date("2018-09-06T14:48:00.969Z"),"discrete connect",[81019,77508,"Borders",new Date("2018-09-06T03:47:29.448Z")],{_id: 1553,str: "Qatar",num: 26102,obj: {_id: 1554,str: "clicks-and-mortar Canyon system",num: 28305,date: new Date("2018-09-06T02:13:28.665Z"),array: []}},"infrastructures enable",{_id: 1555,num: 16904,array: [new Date("2018-09-06T11:16:42.966Z"),new Date("2018-09-06T03:39:26.536Z")],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1556,num: 92752,date: new Date("2018-09-05T21:48:03.771Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1557,str: "Right-sized",num: 23757,date: new Date("2018-09-06T04:49:47.507Z"),array: ["Web","Ville","Martinique Money Market Account protocol",[],new Date("2018-09-06T16:09:19.159Z"),new Date("2018-09-06T11:41:19.612Z"),35202,{_id: 1558,str: "Berkshire",num: 41966,date: new Date("2018-09-05T20:48:29.553Z"),array: [],obj: {}},{_id: 1559,str: "XML Handcrafted Cotton Car redundant",num: 17906,date: new Date("2018-09-06T05:38:27.571Z"),array: [new Date("2018-09-06T00:09:51.780Z")],obj: {_id: 1560,str: "Switzerland transition Open-source",num: 90625,obj: {}}},93729,new Date("2018-09-06T18:26:48.601Z"),76895,["Usability matrix",new Date("2018-09-06T04:17:10.085Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 1561,num: 68235,date: new Date("2018-09-06T14:59:01.424Z"),array: [],obj: {_id: 1562,str: "Division",num: 78895,date: new Date("2018-09-05T22:25:08.953Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1563,str: "Enhanced Savings Account",num: 9382,date: new Date("2018-09-06T06:44:17.386Z"),array: [80319,41179,new Date("2018-09-06T08:49:34.223Z"),new Date("2018-09-06T18:18:05.705Z"),"transmit Handcrafted Frozen Cheese",new Date("2018-09-05T21:56:35.567Z"),new Date("2018-09-05T22:43:35.263Z"),new Date("2018-09-06T09:02:51.925Z"),{_id: 1564,num: 16512,date: new Date("2018-09-06T13:17:59.252Z"),array: [],obj: {}},"Graphic Interface sensor",59651,72162],obj: {_id: 1565,str: "Borders Money Market Account",date: new Date("2018-09-06T18:57:55.609Z")}});
    },

    function(coll) {
        return coll.insert({_id: 1566,str: "service-desk",num: 52930,date: new Date("2018-09-06T19:31:20.347Z"),array: [],obj: {_id: 1567,str: "multi-byte heuristic Avon",num: 82152,date: new Date("2018-09-06T01:25:56.379Z"),array: ["ROI Borders Generic",new Date("2018-09-06T04:38:10.646Z"),new Date("2018-09-06T00:08:42.323Z"),new Date("2018-09-06T19:10:58.706Z"),22860,{_id: 1568,str: "feed compressing Generic Metal Bike",obj: {}},"AGP","Delaware"]}});
    },

    function(coll) {
        return coll.insert({_id: 1569,str: "microchip methodology JBOD",num: 57280,date: new Date("2018-09-06T03:28:52.859Z"),array: [{_id: 1570,str: "solution-oriented Communications Savings Account",num: 3337,date: new Date("2018-09-06T15:18:42.864Z"),obj: {}},83991,44230,"program analyzer",new Date("2018-09-06T03:31:06.652Z"),"morph Tools PCI",new Date("2018-09-06T18:54:19.544Z"),70502,new Date("2018-09-06T00:34:59.014Z"),{_id: 1571,date: new Date("2018-09-05T21:22:21.127Z"),array: [[],new Date("2018-09-06T06:22:54.990Z")],obj: {_id: 1572,num: 33292,date: new Date("2018-09-06T15:14:19.344Z"),array: []}},["core bricks-and-clicks",46483]],obj: {_id: 1573,str: "compressing Operative Supervisor",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1574,str: "web-readiness Shores revolutionize",num: 61507,date: new Date("2018-09-06T13:48:33.851Z"),array: ["Small Regional Chips","Personal Loan Account Wisconsin",new Date("2018-09-06T15:30:26.037Z"),86827,59746,56695,{_id: 1575,str: "Small",num: 50829,date: new Date("2018-09-06T03:12:07.979Z"),obj: {}},new Date("2018-09-06T18:59:10.470Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1576,str: "generate calculate",num: 50689,date: new Date("2018-09-06T11:51:22.418Z"),array: [new Date("2018-09-06T02:33:40.449Z"),"benchmark Investment Account",82311,"Swiss Franc PCI",13886,48299,7847,"District Armenia",new Date("2018-09-06T06:42:22.036Z"),"reinvent Guinea-Bissau",[],new Date("2018-09-05T23:51:56.597Z"),{_id: 1577,str: "Refined Glen",num: 66094,obj: {}}],obj: {_id: 1578,str: "focus group overriding programming",num: 57220,date: new Date("2018-09-06T13:24:04.476Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1579,str: "deposit Digitized connect",num: 70417,date: new Date("2018-09-05T23:44:36.280Z"),array: [new Date("2018-09-06T03:09:07.075Z"),"Tasty Small Principal",62696,{_id: 1580,num: 15275,date: new Date("2018-09-06T11:46:06.310Z"),obj: {}},new Date("2018-09-06T03:33:56.310Z"),91876,"regional PNG optimal",[],new Date("2018-09-06T08:07:11.895Z"),["Money Market Account","Cameroon Shoes",12425],68093],obj: {_id: 1581,str: "1080p Principal Forint",num: 17145,array: [],obj: {_id: 1582,str: "quantifying",array: [50506,"salmon Implemented Niger"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 1583,str: "SQL Awesome Rubber Hat Functionality",date: new Date("2018-09-06T02:16:54.987Z"),array: [57777,new Date("2018-09-06T13:37:13.807Z"),new Date("2018-09-06T17:27:41.153Z"),52584,95421,"Quality","North Dakota plug-and-play copy","Research Cheese",{_id: 1584,str: "Investment Account",num: 26397,date: new Date("2018-09-06T17:58:04.471Z"),array: [],obj: {_id: 1585,str: "XSS users encoding",num: 55107,date: new Date("2018-09-06T08:25:15.940Z"),array: ["networks Groves",[71820,new Date("2018-09-06T09:54:45.997Z")]],obj: {_id: 1586,str: "azure open system",num: 22935,date: new Date("2018-09-06T07:58:37.644Z"),obj: {}}}},"Music South Dakota"]});
    },

    function(coll) {
        return coll.insert({_id: 1587,str: "Representative Supervisor",num: 22486,date: new Date("2018-09-06T13:21:47.881Z"),array: [new Date("2018-09-06T17:49:46.771Z"),74052,3129,{_id: 1588,str: "morph Concrete",num: 17482,date: new Date("2018-09-06T07:43:30.063Z"),array: [],obj: {}},new Date("2018-09-06T07:41:16.056Z"),{_id: 1589,str: "Liechtenstein",num: 25298,array: [],obj: {}},99299,new Date("2018-09-06T06:35:59.142Z"),"ivory 24/365 gold",new Date("2018-09-05T20:46:02.257Z")],obj: {_id: 1590,str: "attitude Sleek Facilitator",date: new Date("2018-09-06T06:21:25.930Z"),array: [],obj: { _id: 1591 }}});
    },

    function(coll) {
        return coll.insert({_id: 1592,str: "methodologies",num: 51750,date: new Date("2018-09-06T11:20:38.348Z"),array: ["card Steel 6th generation",new Date("2018-09-06T12:42:35.798Z"),41903,25123,new Date("2018-09-06T01:22:47.433Z"),"National New York Practical Granite Chicken",new Date("2018-09-06T03:18:14.226Z"),69279],obj: {_id: 1593,str: "Soft",num: 5932,date: new Date("2018-09-06T03:00:37.072Z"),array: [],obj: {_id: 1594,date: new Date("2018-09-06T04:34:21.427Z"),array: ["reboot",[],{_id: 1595,str: "Graphic Interface Checking Account program",num: 50072,array: []},[],"Personal Loan Account PNG",new Date("2018-09-05T22:50:50.504Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 1596,str: "Tunisian Dinar Refined Lodge",num: 3957,date: new Date("2018-09-06T12:11:21.903Z"),array: [new Date("2018-09-06T14:16:36.058Z"),75354,"Direct 1080p",new Date("2018-09-06T07:22:37.164Z"),{_id: 1597,str: "Team-oriented",num: 61013,date: new Date("2018-09-06T13:57:06.297Z"),array: [],obj: {_id: 1598,str: "Avenue bypass Handcrafted",num: 51187,date: new Date("2018-09-06T02:36:44.811Z"),obj: {_id: 1599,str: "interactive",num: 19077,array: ["Borders methodologies","quantifying Kids New Jersey"]}}},28814,2065,[],new Date("2018-09-06T02:15:17.803Z"),new Date("2018-09-06T06:29:17.961Z"),{_id: 1600,str: "tangible primary",num: 976,date: new Date("2018-09-06T01:52:02.416Z"),obj: {_id: 1601,str: "Credit Card Account",array: [6339]}},[],"Arizona",new Date("2018-09-06T08:15:47.018Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1602,str: "yellow",num: 95057,date: new Date("2018-09-06T19:24:25.686Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1603,str: "approach unleash Buckinghamshire",num: 47423,date: new Date("2018-09-06T04:16:48.947Z"),obj: {_id: 1604,str: "Strategist Peru",num: 46484,date: new Date("2018-09-05T21:55:19.103Z"),array: [new Date("2018-09-06T03:18:26.684Z"),92715,[],83468,"Rubber Interactions Virginia",[new Date("2018-09-06T19:21:28.082Z"),[]],"cross-platform",97118,"Harbor FTP",85425,"PCI Gorgeous"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1605,str: "indexing Sri Lanka Shoes",num: 16473,date: new Date("2018-09-06T05:05:52.299Z"),obj: {_id: 1606,str: "productize",num: 86417,date: new Date("2018-09-06T04:25:20.634Z"),array: [],obj: {_id: 1607,num: 24875,date: new Date("2018-09-06T00:16:06.057Z"),array: [["Palestinian Territory",22160,new Date("2018-09-06T15:42:41.548Z"),80346],new Date("2018-09-06T01:50:33.055Z"),{_id: 1608,str: "web-readiness",date: new Date("2018-09-06T04:49:11.489Z"),array: [],obj: {}},59244,new Date("2018-09-06T04:28:03.813Z"),{_id: 1609,str: "Integrated",num: 76345,obj: {}},new Date("2018-09-06T10:50:16.441Z"),[],20121,[],"Ergonomic leading edge",{_id: 1610,num: 94089,array: [new Date("2018-09-06T00:12:17.504Z")],obj: {}}],obj: {_id: 1611,str: "ADP Saint Vincent and the Grenadines solid state",date: new Date("2018-09-05T21:01:40.380Z"),array: [new Date("2018-09-06T04:28:20.249Z"),"Uzbekistan Sum Licensed Frozen Salad"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 1612,str: "relationships",num: 36555,date: new Date("2018-09-06T01:36:39.643Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1613,str: "Baby Chair",num: 51205,date: new Date("2018-09-06T00:44:52.401Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1614,str: "deposit Bedfordshire Rand",num: 98820,date: new Date("2018-09-06T19:50:42.117Z"),array: [74734,new Date("2018-09-06T14:08:59.198Z"),[78281,12961,"deploy",new Date("2018-09-06T15:48:47.802Z")],{_id: 1615,str: "moratorium Table service-desk",num: 46196,array: [],obj: {}},"analyzing","best-of-breed frictionless",25985,"Grocery",new Date("2018-09-05T20:07:42.232Z"),[{_id: 1616,str: "Cayman Islands Dollar firewall online",date: new Date("2018-09-06T05:39:04.939Z"),array: []}],new Date("2018-09-06T11:18:02.968Z")]});
    },

    function(coll) {
        return coll.insert({_id: 1617,str: "hacking",num: 15110,date: new Date("2018-09-06T16:45:34.506Z"),array: [],obj: {_id: 1618,str: "auxiliary",num: 34234,date: new Date("2018-09-05T22:35:14.653Z"),array: [46215,[new Date("2018-09-06T02:29:11.928Z")],"back up deliver IB",88824,"Awesome Investor",new Date("2018-09-06T18:01:46.283Z"),"Total applications groupware",new Date("2018-09-06T14:59:29.329Z"),234,new Date("2018-09-06T10:28:57.321Z"),"Cross-group","Viaduct"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1619,str: "indigo Investment Account Generic",num: 67311,date: new Date("2018-09-06T12:02:27.567Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1620,str: "Clothing withdrawal",num: 27980,date: new Date("2018-09-05T23:18:56.604Z"),obj: {_id: 1621,num: 17595,date: new Date("2018-09-06T13:59:42.526Z"),array: [new Date("2018-09-06T11:21:23.475Z"),{_id: 1622,str: "Human Wisconsin Rubber",num: 62268,date: new Date("2018-09-05T23:48:09.549Z"),array: ["Accountability Frozen"],obj: {}},25905,"Lead",new Date("2018-09-06T06:28:15.087Z"),new Date("2018-09-06T16:26:22.431Z"),28331,{_id: 1623,str: "Baby",num: 58695,array: [],obj: {_id: 1624,str: "Creek turquoise",date: new Date("2018-09-06T16:50:51.911Z"),array: ["New Hampshire New York COM",88201]}},52769,[],["haptic throughput Unbranded Soft Hat"],new Date("2018-09-06T13:05:25.198Z"),43407],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1625,str: "granular Credit Card Account",num: 82928,date: new Date("2018-09-06T10:56:00.300Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1626,str: "Chicken Generic",num: 90787,date: new Date("2018-09-06T14:45:08.891Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1627,num: 82518,date: new Date("2018-09-06T04:12:45.633Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1628,num: 14013,date: new Date("2018-09-06T10:59:28.656Z"),array: [new Date("2018-09-06T12:20:48.018Z"),{_id: 1629,str: "payment",num: 17543,array: [],obj: {}},53893,"navigating",38616,"pixel Handmade Rubber",74848,"repurpose motivating",new Date("2018-09-05T21:53:16.866Z"),new Date("2018-09-06T15:46:48.699Z"),[],"Salad"],obj: {_id: 1630,str: "Canadian Dollar Buckinghamshire Utah",date: new Date("2018-09-06T01:47:38.551Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1631,str: "Auto Loan Account revolutionize",date: new Date("2018-09-06T11:20:32.757Z"),array: [new Date("2018-09-06T02:45:26.434Z"),"indexing channels compress",{_id: 1632,str: "Refined Personal Loan Account background",num: 33560,date: new Date("2018-09-06T15:34:32.199Z"),array: [18311,"quantify"],obj: {_id: 1633,str: "systems Personal Loan Account",num: 40569,array: [],obj: {}}},11732,new Date("2018-09-06T12:46:21.616Z"),new Date("2018-09-05T22:48:00.261Z"),new Date("2018-09-06T18:03:18.978Z"),80608,[],"override exploit"]});
    },

    function(coll) {
        return coll.insert({_id: 1634,str: "synthesizing Dong",num: 86791,date: new Date("2018-09-06T01:59:54.819Z"),array: [],obj: {_id: 1635,str: "Agent Illinois",num: 7004,date: new Date("2018-09-06T11:30:34.269Z"),array: [96213,"IB granular",new Date("2018-09-06T08:45:58.056Z"),"array interactive","ivory",44775,[new Date("2018-09-06T17:48:21.919Z")],new Date("2018-09-06T01:39:04.748Z"),"Via Berkshire Tonga",97740,"Robust Awesome Fresh Tuna District",{_id: 1636,str: "customer loyalty e-commerce New Mexico",num: 98376,date: new Date("2018-09-06T07:03:44.639Z"),array: [new Date("2018-09-06T07:14:09.169Z")]},84436,70744],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1637,str: "Alaska",num: 72112,date: new Date("2018-09-06T17:41:23.448Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1638,str: "Incredible Soft Mouse Human",num: 50147,date: new Date("2018-09-06T11:38:10.157Z"),array: [7303,new Date("2018-09-06T13:27:53.274Z"),88891,"reintermediate hierarchy",68131,"Manat Consultant backing up",new Date("2018-09-06T07:20:32.335Z"),new Date("2018-09-06T03:31:01.110Z"),"hacking Investment Account",[],{_id: 1639,str: "deposit",date: new Date("2018-09-06T05:08:48.670Z"),array: ["purple Guatemala",[97838]],obj: {_id: 1640,num: 51505,date: new Date("2018-09-06T09:03:33.826Z"),array: [],obj: {_id: 1641,str: "Engineer Integration haptic",num: 1997,obj: {}}}},[new Date("2018-09-05T22:52:21.993Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1642,str: "Division Chips",num: 94160,date: new Date("2018-09-06T13:18:01.158Z"),array: [8760,new Date("2018-09-06T04:15:55.616Z"),"reciprocal bandwidth",new Date("2018-09-05T22:28:10.458Z"),58315,59006,"District Technician Loaf",new Date("2018-09-06T01:21:57.516Z"),new Date("2018-09-06T08:36:15.856Z"),"Dobra",20151,29262,[{_id: 1643,str: "Technician withdrawal",date: new Date("2018-09-06T10:50:22.843Z")}]],obj: {_id: 1644,str: "Monitored indexing Principal",num: 4406,array: [],obj: {_id: 1645,str: "invoice invoice",num: 3117,date: new Date("2018-09-06T09:54:32.830Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 1646,str: "generate",num: 9347,date: new Date("2018-09-05T22:53:46.943Z"),array: [[],75452,new Date("2018-09-06T06:15:00.151Z"),[],new Date("2018-09-06T00:30:59.462Z"),28843,{_id: 1647,str: "Developer",num: 6442,date: new Date("2018-09-06T18:46:47.576Z"),array: [],obj: {}},"Alaska Mobility Kids",{_id: 1648,str: "Rustic Fresh Bacon",num: 16161,date: new Date("2018-09-06T17:51:15.013Z"),obj: {_id: 1649,str: "International Intelligent Soft Chips",date: new Date("2018-09-06T14:48:23.195Z"),array: [53159,"Officer invoice"]}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1650,str: "Triple-buffered maximize",num: 50973,date: new Date("2018-09-06T08:17:50.447Z"),array: ["cross-platform Car",new Date("2018-09-06T16:40:37.911Z"),38988,[],50708,new Date("2018-09-06T06:47:30.943Z"),"algorithm quantifying",[9276,new Date("2018-09-06T12:29:58.660Z")],new Date("2018-09-06T11:27:12.686Z"),new Date("2018-09-06T06:39:23.217Z"),"AGP"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1651,str: "Rubber Corporate Personal Loan Account",num: 56920,date: new Date("2018-09-06T02:36:27.624Z"),array: [],obj: {_id: 1652,str: "hardware Arkansas firewall",array: [new Date("2018-09-06T03:18:23.071Z"),new Date("2018-09-06T17:07:07.896Z"),80394,53396,61481,[new Date("2018-09-06T09:19:14.578Z"),"Intelligent Wooden Soap invoice",{_id: 1653,str: "mesh",num: 55639,date: new Date("2018-09-06T16:05:58.182Z"),array: [],obj: {_id: 1654,num: 49234,date: new Date("2018-09-06T16:02:18.383Z"),array: ["Riel Infrastructure"],obj: {}}},[],"proactive West Virginia"],45087,new Date("2018-09-06T11:29:04.914Z"),{_id: 1655,str: "Pass",array: ["Fantastic Rubber Shirt",{_id: 1656,num: 44679,date: new Date("2018-09-06T03:10:07.345Z"),array: [{_id: 1657,str: "Product viral Home",num: 56724,date: new Date("2018-09-06T03:15:54.451Z"),obj: {}},"Supervisor Object-based"]}]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1658,str: "Jewelery",num: 34332,date: new Date("2018-09-06T13:51:56.058Z"),array: [],obj: {_id: 1659,num: 72004,date: new Date("2018-09-06T04:10:10.548Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1660,num: 434,date: new Date("2018-09-05T21:40:32.479Z"),array: [98798,[],{_id: 1661,str: "Graphic Interface ADP",num: 20158,date: new Date("2018-09-06T00:11:59.074Z"),array: ["tan action-items calculate",new Date("2018-09-06T01:22:54.514Z"),new Date("2018-09-06T06:19:10.653Z"),new Date("2018-09-06T14:11:07.866Z")]},new Date("2018-09-05T21:57:10.753Z"),43279,[],91873,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1662,str: "markets",num: 85911,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1663,str: "metrics zero administration Court",num: 13967,array: ["Costa Rican Colon drive innovate","Cloned","Utah",{_id: 1664,str: "web-readiness bluetooth framework",num: 55284,date: new Date("2018-09-05T21:52:45.916Z"),array: [47010,new Date("2018-09-06T00:36:34.142Z"),16285],obj: {_id: 1665,str: "virtual",array: [],obj: {}}},new Date("2018-09-06T04:29:56.213Z"),{_id: 1666,date: new Date("2018-09-06T04:46:56.721Z"),obj: {}},41540],obj: {_id: 1667,str: "Gorgeous Rubber Pizza Rubber copy",num: 72203,date: new Date("2018-09-05T20:39:59.886Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1668,num: 94827,date: new Date("2018-09-06T07:14:30.785Z"),array: ["Salad model",14514,64546,"invoice",new Date("2018-09-06T11:09:42.699Z"),"New Hampshire systems Direct",{_id: 1669,str: "transmit ADP",num: 46548,date: new Date("2018-09-06T11:48:52.990Z"),array: [],obj: {}},{_id: 1670,str: "Grocery Specialist",num: 88697,date: new Date("2018-09-06T04:49:37.692Z"),array: [33233],obj: {}},"bricks-and-clicks real-time microchip",[97537,new Date("2018-09-06T04:41:04.302Z"),new Date("2018-09-06T10:36:02.300Z")],"Jewelery monitoring Books"]});
    },

    function(coll) {
        return coll.insert({_id: 1671,str: "Technician feed",num: 68230,array: [47029,[],new Date("2018-09-06T04:16:46.340Z"),60729,["International Minnesota"],34373,[87160,new Date("2018-09-06T11:09:41.319Z")],{_id: 1672,str: "Minnesota",num: 42527,date: new Date("2018-09-06T11:00:25.469Z"),obj: {}},new Date("2018-09-06T05:58:15.679Z"),{_id: 1673,num: 32962,date: new Date("2018-09-06T13:08:13.354Z"),array: []},"bypass Fantastic Rubber Soap",new Date("2018-09-06T06:52:12.681Z")],obj: {_id: 1674,str: "Synchronised Handmade",num: 14676,date: new Date("2018-09-06T00:03:22.365Z"),obj: {_id: 1675,str: "Tennessee",date: new Date("2018-09-05T20:19:55.083Z"),array: [{_id: 1676,num: 68014,date: new Date("2018-09-06T19:43:10.924Z"),array: ["partnerships invoice Cambridgeshire"],obj: {}},"Plains Technician","alarm"],obj: {_id: 1677,num: 22249,array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 1678,str: "JBOD",num: 15675,date: new Date("2018-09-06T10:58:27.553Z"),array: [],obj: {_id: 1679,str: "leading-edge Program Incredible Rubber Computer",num: 84871,date: new Date("2018-09-06T09:24:01.090Z"),obj: {_id: 1680,str: "Up-sized ADP solid state",num: 56888,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 1681,str: "Borders Mobility salmon",num: 31274,date: new Date("2018-09-06T08:31:53.210Z"),array: ["ADP circuit","Orchestrator",11154,new Date("2018-09-05T23:30:32.147Z"),{_id: 1682,str: "Branding envisioneer",num: 94825,date: new Date("2018-09-06T16:22:18.694Z"),array: [],obj: {}},new Date("2018-09-06T06:04:14.645Z"),"Small Rubber Shirt 4th generation",new Date("2018-09-06T13:51:30.960Z"),new Date("2018-09-06T09:29:42.205Z"),"input","payment Metal"],obj: {_id: 1683,str: "generating",num: 65772,array: [],obj: {_id: 1684,date: new Date("2018-09-06T06:17:41.667Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 1685,str: "Berkshire",num: 27808,date: new Date("2018-09-06T13:16:18.775Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1686,str: "compress Cambridgeshire",num: 19721,date: new Date("2018-09-06T01:21:28.075Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1687,num: 50128,date: new Date("2018-09-06T00:07:02.498Z"),obj: {_id: 1688,num: 67745,date: new Date("2018-09-05T23:36:55.378Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1689,str: "black Table reintermediate",num: 61269,date: new Date("2018-09-06T18:47:28.436Z"),array: [],obj: {_id: 1690,str: "Intelligent Granite Hat",num: 46674,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1691,str: "index Versatile",num: 13541,date: new Date("2018-09-06T06:31:59.616Z"),array: ["revolutionize",new Date("2018-09-05T22:13:52.352Z"),{_id: 1692,num: 32671,date: new Date("2018-09-06T15:30:03.357Z"),array: [],obj: {}},new Date("2018-09-06T18:08:07.154Z"),"engage invoice",3321,13664,{_id: 1693,str: "composite",num: 24159,obj: {_id: 1694,str: "deposit architectures bricks-and-clicks",num: 18143,date: new Date("2018-09-06T10:27:31.551Z"),obj: {_id: 1695,date: new Date("2018-09-05T20:58:26.646Z"),array: [{_id: 1696,str: "RAM",num: 55751,date: new Date("2018-09-06T02:57:08.938Z")}],obj: {}}}},new Date("2018-09-06T13:54:27.228Z"),{_id: 1697,num: 37138,array: [],obj: {}},"eyeballs","Saudi Arabia Estate Beauty","Tasty Cotton Pants"]});
    },

    function(coll) {
        return coll.insert({_id: 1698,str: "invoice",num: 43229,date: new Date("2018-09-06T16:53:45.405Z"),array: [63449,new Date("2018-09-06T10:17:06.195Z"),new Date("2018-09-06T07:39:57.743Z"),"AI salmon Practical",[],["rich Licensed Frozen Gloves","withdrawal",89740,new Date("2018-09-06T11:09:52.650Z")],90965,{_id: 1699,str: "embrace Idaho",date: new Date("2018-09-06T14:58:19.633Z"),array: [],obj: {}},"Small","product",78296],obj: {_id: 1700,num: 87413,date: new Date("2018-09-06T09:06:09.291Z")}});
    },

    function(coll) {
        return coll.insert({_id: 1701,str: "Tools Handcrafted",num: 98208,date: new Date("2018-09-06T00:30:36.853Z"),array: ["haptic",2545,new Date("2018-09-06T17:12:03.760Z"),[],["reboot",14900,66440,new Date("2018-09-05T21:27:02.851Z"),new Date("2018-09-05T20:05:14.240Z"),new Date("2018-09-06T04:36:16.192Z")],"Legacy invoice SAS",{_id: 1702,date: new Date("2018-09-06T16:02:24.403Z"),array: ["Profound Credit Card Account",{_id: 1703,str: "protocol Baby function",num: 97582,date: new Date("2018-09-06T09:03:48.921Z"),array: [],obj: {_id: 1704,str: "withdrawal synergies",num: 59312}}],obj: {_id: 1705,str: "Incredible Soft Sausages embrace deposit",num: 14994,date: new Date("2018-09-05T22:27:38.038Z")}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1706,str: "cross-platform Tasty",num: 85293,date: new Date("2018-09-06T02:07:50.209Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1707,str: "Polarised Garden Consultant",num: 61238,date: new Date("2018-09-06T17:47:07.244Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1708,str: "Central Concrete Buckinghamshire",num: 33628,date: new Date("2018-09-06T16:49:52.425Z"),array: [4725,{_id: 1709,str: "calculating Avon generate",num: 6469,date: new Date("2018-09-06T17:55:03.803Z"),array: [],obj: {_id: 1710,str: "Tools redundant",num: 96218,date: new Date("2018-09-05T20:31:22.191Z"),obj: {}}},["maroon"],new Date("2018-09-05T20:14:53.346Z"),"Fork Mobility Berkshire",4335,[],new Date("2018-09-06T01:11:52.488Z"),54487,[{_id: 1711,num: 86976,obj: {_id: 1712,num: 45470,date: new Date("2018-09-06T10:46:01.547Z"),array: []}}],new Date("2018-09-05T23:25:47.835Z"),new Date("2018-09-06T14:56:00.100Z"),{_id: 1713,str: "Burkina Faso Cayman Islands Dollar",date: new Date("2018-09-06T12:54:59.927Z"),obj: {}},"Product capacity"],obj: {_id: 1714,str: "Integration Cotton",num: 12298,date: new Date("2018-09-05T20:19:39.689Z"),array: [],obj: {_id: 1715,array: [20249,39884,"function systems"]}}});
    },

    function(coll) {
        return coll.insert({_id: 1716,str: "system synthesize",num: 397,date: new Date("2018-09-06T02:20:48.239Z"),array: [],obj: {_id: 1717,num: 16997,date: new Date("2018-09-05T20:06:48.062Z"),array: [new Date("2018-09-06T13:41:52.135Z"),"Money Market Account morph",99498,73293,"Venezuela",[{_id: 1718,str: "productize sensor Shoes",num: 41885,array: [new Date("2018-09-06T12:35:22.058Z"),new Date("2018-09-06T01:35:11.325Z"),new Date("2018-09-06T01:45:10.979Z")],obj: {_id: 1719,str: "experiences revolutionary Belgium",num: 97515,array: []}}],["Automated",{_id: 1720,str: "hard drive Jewelery Grass-roots",date: new Date("2018-09-05T22:32:29.682Z"),obj: {}},"firewall Sleek Metal Cheese Implemented"],12875,82651,"Kuwait"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1721,str: "Garden Generic Steel Tuna Som",num: 12973,date: new Date("2018-09-06T18:34:47.863Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1722,str: "override",num: 61154,date: new Date("2018-09-06T10:06:26.887Z"),array: [[],77530,"Implementation",{_id: 1723,str: "architectures",num: 49940,obj: {_id: 1724,str: "Corporate Cove",num: 75065,date: new Date("2018-09-06T05:07:22.981Z"),array: [new Date("2018-09-06T04:08:59.892Z"),{_id: 1725,date: new Date("2018-09-05T21:23:13.730Z"),array: [],obj: {_id: 1726,num: 35936,date: new Date("2018-09-06T14:49:07.048Z"),array: [[new Date("2018-09-05T20:45:44.453Z"),52735,new Date("2018-09-06T04:37:54.760Z"),29630],95664,"Fields methodical"],obj: {}}}],obj: {_id: 1727,str: "Small Cotton Gloves",date: new Date("2018-09-06T18:39:52.392Z")}}},"Checking Account",{_id: 1728,str: "Home recontextualize",num: 85917,date: new Date("2018-09-06T06:25:29.786Z"),array: [],obj: {}},45536,"Shoes Handmade asymmetric",new Date("2018-09-06T07:08:37.193Z"),{_id: 1729,str: "magnetic connect Cambridgeshire",num: 53949,date: new Date("2018-09-06T09:43:55.201Z"),array: ["Luxembourg Philippine Peso",new Date("2018-09-06T06:54:29.666Z")]},91729],obj: {_id: 1730,str: "deliverables"}});
    },

    function(coll) {
        return coll.insert({_id: 1731,str: "Chief Crescent",num: 5403,date: new Date("2018-09-06T19:24:00.119Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1732,str: "bluetooth primary",num: 12068,date: new Date("2018-09-06T13:37:15.763Z"),array: [],obj: {_id: 1733,str: "revolutionize Baby brand",array: [],obj: {_id: 1734,str: "Avon",num: 79668,date: new Date("2018-09-06T13:56:00.958Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 1735,str: "program New Mexico",num: 13843,date: new Date("2018-09-05T20:34:22.008Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1736,num: 53380,date: new Date("2018-09-06T19:28:44.467Z"),array: [[],"regional",new Date("2018-09-06T02:58:05.929Z"),"multi-byte throughput Jamaica",35597,new Date("2018-09-05T20:25:45.675Z"),{_id: 1737,str: "Loop capacitor",num: 48537,date: new Date("2018-09-06T16:57:17.272Z"),array: [new Date("2018-09-05T23:53:52.012Z"),{_id: 1738,str: "Manager",num: 31385,obj: {_id: 1739,str: "payment Research plum",num: 94314,date: new Date("2018-09-06T04:58:40.761Z"),array: [75456,"Oklahoma 24/365"],obj: {}}}],obj: {}},{_id: 1740,str: "Automated",date: new Date("2018-09-06T05:18:08.475Z"),array: [],obj: {_id: 1741,num: 26243,array: [],obj: {}}},"quantify deposit",new Date("2018-09-06T03:57:42.685Z"),"Orchestrator",[[],48068,41317]]});
    },

    function(coll) {
        return coll.insert({_id: 1742,str: "Practical Soft Soap Chief access",num: 83676,date: new Date("2018-09-06T12:45:30.959Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1743,str: "experiences Car",num: 54906,date: new Date("2018-09-06T13:36:22.348Z"),array: ["Books",86581,69741,new Date("2018-09-06T08:45:14.534Z"),"supply-chains impactful Future",new Date("2018-09-06T08:41:41.076Z"),{_id: 1744,num: 1156,date: new Date("2018-09-05T21:20:47.427Z"),array: [],obj: {}},[]],obj: {_id: 1745,str: "Gorgeous Books",num: 7530,date: new Date("2018-09-05T22:14:00.408Z"),array: [],obj: {_id: 1746,str: "Seychelles",num: 45431}}});
    },

    function(coll) {
        return coll.insert({_id: 1747,num: 96372,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1748,str: "sexy enhance",num: 8632,date: new Date("2018-09-06T10:30:12.948Z"),array: [{_id: 1749,num: 95306,date: new Date("2018-09-06T14:56:09.727Z"),array: [],obj: {}},"web-readiness Avon","Fresh",new Date("2018-09-05T23:31:00.872Z"),new Date("2018-09-05T20:08:12.915Z"),"Savings Account",[{_id: 1750,str: "Texas",date: new Date("2018-09-06T13:12:12.162Z"),array: [],obj: {}},2045,54286,17981,"application"],[[],16475],new Date("2018-09-05T20:31:05.363Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 1751,str: "parse Rustic Soft Chair",num: 29280,date: new Date("2018-09-06T02:07:50.548Z"),array: [75042,new Date("2018-09-06T13:54:06.220Z"),"Automated PCI",28108,"Lempira blue bandwidth-monitored",new Date("2018-09-06T11:32:10.585Z"),new Date("2018-09-05T23:11:43.158Z"),new Date("2018-09-06T10:56:20.573Z"),"Multi-layered compressing Tala",31118,77441,"feed solid state",{_id: 1752,str: "infrastructures scalable",num: 59448,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 1753,str: "invoice redefine North Dakota",num: 90699,date: new Date("2018-09-06T07:08:45.814Z"),array: [],obj: {_id: 1754,str: "Developer",num: 51155,date: new Date("2018-09-06T11:10:31.583Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1755,str: "pixel Dynamic",date: new Date("2018-09-06T02:58:55.952Z")});
    },

    function(coll) {
        return coll.insert({_id: 1756,str: "calculating",num: 59743,date: new Date("2018-09-06T09:38:27.561Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1757,str: "Small Steel Car Integrated Gorgeous Cotton Towels",num: 5570,date: new Date("2018-09-06T16:18:28.366Z"),array: [],obj: {_id: 1758,str: "Ergonomic Metal Table navigating Principal",num: 90389,date: new Date("2018-09-06T16:39:42.588Z"),array: ["Assurance Devolved synthesizing",new Date("2018-09-06T05:24:03.255Z"),39974,{_id: 1759,str: "Credit Card Account Mobility",num: 21565,date: new Date("2018-09-06T17:11:01.472Z"),array: [],obj: {}},"Representative Tennessee",62488,58030,[],{_id: 1760,num: 21871,date: new Date("2018-09-06T06:46:56.832Z"),array: [],obj: {_id: 1761,str: "Club Creative",num: 11590,date: new Date("2018-09-05T22:36:15.216Z"),array: ["Tuna open-source"]}},41043,21489],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1762,str: "Technician Licensed",num: 52984,date: new Date("2018-09-06T11:20:43.470Z"),array: [new Date("2018-09-06T14:08:59.174Z"),"Handcrafted",99888,96540,new Date("2018-09-06T06:58:25.368Z"),"alarm multimedia",{_id: 1763,str: "models",num: 27714,array: [],obj: {}},new Date("2018-09-05T21:47:14.389Z"),57626,21544,[]],obj: {_id: 1764,str: "Computer Communications methodology",date: new Date("2018-09-06T19:44:13.309Z")}});
    },

    function(coll) {
        return coll.insert({_id: 1765,num: 67845,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1766,str: "Savings Account Applications SMTP",num: 27464,date: new Date("2018-09-05T23:49:24.446Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1767,str: "sensor maroon",num: 5403,date: new Date("2018-09-06T19:48:58.672Z"),array: [11810,55091,"Buckinghamshire Forint",55296,49482,new Date("2018-09-06T16:44:31.996Z"),new Date("2018-09-06T17:26:09.930Z"),{_id: 1768,str: "Technician open-source Beauty",num: 72260,array: [[]],obj: {}},new Date("2018-09-06T13:34:08.480Z"),"reboot","Chicken Plastic",new Date("2018-09-06T12:11:05.705Z"),"Planner transition synthesize"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1769,str: "Savings Account Borders overriding",num: 43464,date: new Date("2018-09-06T12:10:59.406Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1770,str: "needs-based Sleek Frozen Fish",num: 68996,date: new Date("2018-09-06T04:01:22.518Z"),array: [88709,new Date("2018-09-06T04:58:18.835Z"),26031,new Date("2018-09-06T01:23:08.934Z"),"Assistant",new Date("2018-09-06T01:31:43.396Z"),[],"Berkshire Right-sized syndicate",{_id: 1771,str: "challenge Handmade Wooden Sausages",num: 3940,array: [[],new Date("2018-09-06T13:52:19.086Z"),"array Bedfordshire"],obj: {_id: 1772,str: "Paraguay Granite Paradigm",num: 58769,date: new Date("2018-09-05T21:57:06.879Z"),array: [[],"Agent XSS",32931,"Computers",{_id: 1773,str: "UIC-Franc Jewelery Incredible",date: new Date("2018-09-06T02:58:12.405Z"),array: [{_id: 1774,date: new Date("2018-09-05T20:00:18.600Z"),array: [],obj: {}},"Bedfordshire"]}],obj: {}}},99268,64416],obj: {_id: 1775,num: 46103,obj: {_id: 1776,str: "Soft",date: new Date("2018-09-05T21:32:07.136Z"),obj: {_id: 1777,num: 85283,array: [{_id: 1778,str: "Table",num: 9344}]}}}});
    },

    function(coll) {
        return coll.insert({_id: 1779,str: "driver auxiliary",num: 23602,date: new Date("2018-09-05T22:59:38.640Z"),array: [16481,"syndicate",new Date("2018-09-06T08:05:13.128Z"),[],"Savings Account Avon salmon"],obj: {_id: 1780,str: "International Savings Account",num: 54470,date: new Date("2018-09-06T16:02:09.078Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1781,str: "Rupiah open-source",num: 86913,date: new Date("2018-09-05T22:14:59.674Z"),array: [new Date("2018-09-06T07:21:51.092Z"),7412,"program",[],89184,"New Hampshire facilitate","Engineer Shoes",new Date("2018-09-05T20:24:18.771Z"),new Date("2018-09-06T07:13:41.239Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1782,str: "Denar",num: 31563,date: new Date("2018-09-06T04:56:05.090Z"),array: [19558,"Mountains quantifying",61960,[],90914,new Date("2018-09-06T18:11:57.127Z"),{_id: 1783,str: "Credit Card Account",num: 22943,date: new Date("2018-09-05T22:30:46.781Z"),array: [new Date("2018-09-06T01:25:02.722Z"),"Indiana virtual Focused",[]]},new Date("2018-09-06T00:58:08.021Z"),"interactive",{_id: 1784,str: "GB flexibility",date: new Date("2018-09-06T01:59:54.911Z"),array: ["leading-edge Computer Frozen",new Date("2018-09-06T05:17:59.727Z"),"PNG unleash"],obj: {}}],obj: {_id: 1785,str: "Surinam Dollar deposit",num: 12280,date: new Date("2018-09-06T13:28:43.350Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1786,str: "innovate Mills",num: 67460});
    },

    function(coll) {
        return coll.insert({_id: 1787,str: "transmitting Awesome Rubber Towels",num: 26289,date: new Date("2018-09-06T16:38:05.497Z"),array: ["users New York",74273,new Date("2018-09-06T02:48:20.147Z"),42307,new Date("2018-09-06T00:59:33.204Z"),[],"optical withdrawal",new Date("2018-09-05T21:24:09.952Z"),"Gorgeous Fresh Pizza panel web services","indexing Massachusetts",new Date("2018-09-06T18:10:27.389Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1788,str: "encoding Generic Granite Bike Beauty",num: 25048,date: new Date("2018-09-06T16:55:26.780Z"),array: [],obj: {_id: 1789,str: "Electronics Persevering invoice",num: 30088,array: [],obj: {_id: 1790,num: 55233,date: new Date("2018-09-06T16:35:35.196Z"),array: [],obj: {_id: 1791,str: "Florida innovate South Africa",date: new Date("2018-09-06T05:56:10.747Z"),array: [new Date("2018-09-05T23:14:27.226Z"),[59880],5444,"Grass-roots Music","Supervisor Strategist connect",new Date("2018-09-06T17:31:32.845Z"),"Chief North Carolina",86212,new Date("2018-09-06T04:11:59.457Z"),new Date("2018-09-06T17:00:36.393Z"),72168,{_id: 1792,str: "service-desk framework",array: [8001,["revolutionize"],new Date("2018-09-06T01:06:20.622Z"),{_id: 1793,num: 63081,date: new Date("2018-09-05T22:15:09.413Z"),obj: {}}]},{_id: 1794,str: "RSS",num: 82421,date: new Date("2018-09-06T02:52:43.828Z"),array: [],obj: {}}],obj: {_id: 1795,str: "bus hub violet",date: new Date("2018-09-06T15:21:52.361Z"),obj: {}}}}}});
    },

    function(coll) {
        return coll.insert({_id: 1796,str: "Officer Networked Alaska",num: 9950,date: new Date("2018-09-06T11:07:01.439Z"),array: [],obj: {_id: 1797,str: "Cambridgeshire",date: new Date("2018-09-06T01:10:48.929Z"),array: [47368,new Date("2018-09-06T17:50:27.465Z"),97167,"Refined Rubber Ball",new Date("2018-09-06T16:54:53.571Z"),["experiences Planner","deliver District Agent",{_id: 1798,num: 61913,date: new Date("2018-09-06T05:31:04.900Z")},"SMS multi-byte",{_id: 1799,str: "copying Chips",num: 28915,date: new Date("2018-09-06T14:27:19.199Z"),array: [{_id: 1800,str: "Paradigm",num: 91089,date: new Date("2018-09-06T13:31:25.664Z"),array: []},new Date("2018-09-06T10:55:55.512Z")],obj: {}},new Date("2018-09-06T19:13:28.770Z")],89674,{_id: 1801,str: "infomediaries Ball Zloty",num: 39497,date: new Date("2018-09-06T06:24:49.577Z"),obj: {}}],obj: {_id: 1802,str: "Money Market Account",array: [82699,"Planner copying",[],"Investment Account Somoni",[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 1803,str: "Producer",num: 9149,date: new Date("2018-09-06T01:33:55.953Z"),array: [],obj: {_id: 1804,str: "Virginia panel Tasty Wooden Hat",num: 45560,date: new Date("2018-09-06T16:20:12.149Z"),array: [92788,{_id: 1805,num: 49709,date: new Date("2018-09-06T04:01:04.902Z"),array: [new Date("2018-09-05T20:42:36.884Z"),new Date("2018-09-06T18:54:31.685Z")],obj: {_id: 1806,str: "mindshare Bedfordshire",date: new Date("2018-09-06T05:12:49.810Z"),obj: {}}},73972,"Refined Soft Pants Awesome Switzerland",40235,"program",new Date("2018-09-06T17:19:57.301Z"),"San Marino Jersey blue",{_id: 1807,str: "Senior Awesome Tugrik",array: []},"haptic Point",70787,{_id: 1808,str: "deposit Vietnam monitor",date: new Date("2018-09-06T11:32:07.659Z"),array: [[33467,new Date("2018-09-06T06:52:06.707Z")],new Date("2018-09-05T23:50:35.237Z")]}]}});
    },

    function(coll) {
        return coll.insert({_id: 1809,str: "workforce Auto Loan Account",num: 49301,date: new Date("2018-09-06T16:51:51.670Z"),array: [[],91543,new Date("2018-09-05T21:40:01.974Z"),new Date("2018-09-06T05:22:59.969Z"),{_id: 1810,str: "index",num: 77902,date: new Date("2018-09-06T05:02:18.748Z"),array: [1297],obj: {}},91741,"capacitor Consultant index","application Implementation","connecting",80140,new Date("2018-09-05T23:02:44.725Z"),[],[],{_id: 1811,str: "24/365 extranet",date: new Date("2018-09-06T07:36:44.473Z")},"quantify Optimized Trail"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1812,str: "redundant intuitive",num: 60104,date: new Date("2018-09-06T01:51:03.867Z"),array: [{_id: 1813,str: "North Carolina Licensed copying",num: 96864,date: new Date("2018-09-06T02:51:45.348Z"),obj: {}},"Tools Handmade Wooden Bacon transmitter",88993,63457,new Date("2018-09-06T07:25:43.886Z"),new Date("2018-09-06T14:50:26.504Z"),new Date("2018-09-06T02:55:15.723Z"),27447,{_id: 1814,str: "Nevada Locks",num: 56854,date: new Date("2018-09-06T08:46:06.954Z")},new Date("2018-09-05T20:18:10.090Z"),"Fish index"],obj: {_id: 1815,num: 29075,date: new Date("2018-09-06T10:06:37.399Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1816,num: 54684,date: new Date("2018-09-06T09:19:16.539Z"),array: [],obj: {_id: 1817,str: "Cuban Peso Peso Convertible copy",array: [new Date("2018-09-06T19:03:35.672Z"),95993,92200],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1818,str: "Engineer",num: 7568,date: new Date("2018-09-06T16:56:58.844Z"),array: [[new Date("2018-09-06T19:54:29.374Z"),"transmitting",new Date("2018-09-05T20:15:42.097Z"),59044],27378,"maximize Gorgeous","United States of America SQL Agent","markets",{_id: 1819,str: "contingency Wooden ROI",num: 92583,date: new Date("2018-09-05T20:24:26.315Z"),array: [],obj: {_id: 1820,str: "Mouse National hub",date: new Date("2018-09-06T09:30:49.980Z"),array: [95070],obj: {_id: 1821,str: "Bedfordshire Electronics",num: 95444,obj: {}}}},45962,{_id: 1822,num: 48807,date: new Date("2018-09-06T02:55:22.401Z"),array: []},new Date("2018-09-06T12:10:38.424Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1823,num: 51548,date: new Date("2018-09-06T17:19:04.767Z"),array: ["Tasty UIC-Franc",new Date("2018-09-06T17:57:09.840Z"),new Date("2018-09-06T07:34:49.555Z"),"Toys Towels",52453,[],"Wooden Gorgeous Lead",63967,[],"Ferry Turnpike Illinois",48245,[],{_id: 1824,str: "connecting Texas Graphical User Interface",num: 7498,date: new Date("2018-09-06T19:39:56.027Z"),array: [new Date("2018-09-06T09:01:51.389Z")],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1825,str: "Awesome Fresh Chips",num: 16530,date: new Date("2018-09-05T20:47:25.199Z"),array: [],obj: {_id: 1826,str: "connecting intangible ADP",date: new Date("2018-09-06T18:24:15.699Z"),array: ["multi-byte Suriname",29004,new Date("2018-09-06T16:48:29.594Z"),new Date("2018-09-06T17:58:04.392Z"),42148,24365,32657,[],[],new Date("2018-09-06T18:45:50.871Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1827,str: "Home Granite",num: 3555,date: new Date("2018-09-06T00:37:40.120Z"),array: [new Date("2018-09-06T12:54:29.407Z"),"Future Cambridgeshire function",39722,"adapter Gloves",43017,36307,"optical Tajikistan",81978,27261,new Date("2018-09-06T18:00:25.888Z"),"open-source",new Date("2018-09-06T04:19:16.347Z"),new Date("2018-09-05T23:30:13.610Z")],obj: {_id: 1828,str: "interface Mississippi",date: new Date("2018-09-05T20:50:04.547Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1829,str: "Forest Internal Cliffs",date: new Date("2018-09-06T18:39:45.100Z"),array: [new Date("2018-09-06T17:51:23.538Z"),35910,new Date("2018-09-05T23:58:57.801Z"),new Date("2018-09-05T20:38:42.394Z"),"Incredible",97129,"Delaware",[],7315,{_id: 1830,str: "Rand Loti copying",num: 20422,array: ["Industrial",{_id: 1831,str: "generating Down-sized morph",num: 66405,date: new Date("2018-09-06T13:16:10.532Z"),array: [],obj: {}},386],obj: {}},"Group Licensed Granite Mouse Chair",{_id: 1832,str: "seamless Berkshire Executive",num: 55399,date: new Date("2018-09-06T08:45:17.135Z"),array: [new Date("2018-09-05T21:48:58.791Z"),2915],obj: {_id: 1833,str: "gold card withdrawal",num: 79057,date: new Date("2018-09-06T17:29:33.295Z"),array: [[8288]]}}],obj: {_id: 1834,str: "back up artificial intelligence",date: new Date("2018-09-06T11:24:26.701Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1835,str: "Identity data-warehouse",num: 35689,date: new Date("2018-09-06T16:47:58.895Z"),array: [new Date("2018-09-05T19:58:57.023Z"),12312,77718,new Date("2018-09-05T21:36:18.334Z"),["concept intermediate","attitude"],{_id: 1836,str: "online",num: 53222,date: new Date("2018-09-05T23:58:19.241Z"),array: []},new Date("2018-09-06T15:15:21.665Z"),"Manager one-to-one support",30568,[],10228,{_id: 1837,str: "Direct knowledge base fresh-thinking",num: 35113,date: new Date("2018-09-05T23:02:19.336Z"),array: [[]],obj: {_id: 1838,str: "repurpose Soft",num: 53435,array: [78422,"Indian Rupee Ngultrum"]}},new Date("2018-09-06T01:31:31.605Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1839,str: "collaborative",num: 11424,date: new Date("2018-09-06T03:03:44.461Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1840,str: "infrastructure Engineer Soap",num: 21334,array: [new Date("2018-09-06T14:58:06.201Z"),"digital array","Handmade Granite Computer XML",47133,new Date("2018-09-06T12:08:15.813Z"),new Date("2018-09-06T05:07:38.417Z"),new Date("2018-09-06T15:50:27.578Z"),[],"Chief Road",6156,{_id: 1841,num: 81774,date: new Date("2018-09-06T08:13:45.456Z"),array: [],obj: {_id: 1842,str: "calculating",num: 59102,date: new Date("2018-09-06T10:34:20.676Z"),array: [],obj: {_id: 1843,str: "Cambridgeshire",date: new Date("2018-09-06T10:14:03.729Z"),obj: {_id: 1844,num: 3937,array: [new Date("2018-09-06T14:58:28.683Z"),2576]}}}},17239],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1845,str: "Crest empower microchip",date: new Date("2018-09-06T11:30:44.239Z"),array: ["fuchsia",16968,new Date("2018-09-06T01:14:38.669Z"),"yellow",{_id: 1846,str: "open-source Practical Metal Ball compressing",num: 21371,date: new Date("2018-09-06T02:33:12.448Z"),array: ["Applications Handmade transmitting",64726,new Date("2018-09-06T08:09:57.204Z"),{_id: 1847,date: new Date("2018-09-06T01:19:30.744Z"),obj: {}}],obj: {_id: 1848,num: 25985,date: new Date("2018-09-06T08:48:46.964Z"),array: []}},new Date("2018-09-06T05:49:37.994Z"),[],[],new Date("2018-09-06T09:03:00.256Z"),67914,"convergence",13069],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1849,str: "bluetooth auxiliary front-end",num: 56427,date: new Date("2018-09-06T07:40:28.241Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1850,str: "Buckinghamshire Arkansas system",num: 82318,array: [new Date("2018-09-06T14:00:34.441Z"),new Date("2018-09-06T03:51:04.976Z"),45405,{_id: 1851,num: 39603,date: new Date("2018-09-06T04:35:14.003Z")},[7918,"Fantastic sensor leading edge",new Date("2018-09-05T22:57:00.816Z"),70595],"fault-tolerant","Sleek Rubber Gloves infrastructures",new Date("2018-09-06T17:42:53.557Z"),{_id: 1852,str: "olive synthesize",num: 68138,date: new Date("2018-09-06T16:57:56.959Z"),array: [],obj: {}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 1853,str: "redefine",num: 3422,date: new Date("2018-09-06T00:10:47.917Z"),array: ["Gorgeous Wooden Gloves neural alliance",65095,new Date("2018-09-06T01:29:07.972Z"),97219,new Date("2018-09-06T08:14:57.978Z"),new Date("2018-09-05T22:19:35.129Z"),[],new Date("2018-09-05T21:25:11.127Z"),"strategic markets Oklahoma"],obj: {_id: 1854,str: "killer navigate",num: 34028,date: new Date("2018-09-06T04:23:55.262Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1855,str: "Washington backing up Sao Tome and Principe",num: 66668,date: new Date("2018-09-06T05:20:00.514Z"),array: [{_id: 1856,str: "e-business eyeballs",num: 40036,date: new Date("2018-09-06T16:06:44.253Z"),array: [[],{_id: 1857,str: "Handcrafted holistic Investment Account",num: 70158,date: new Date("2018-09-06T09:53:27.699Z"),array: ["Soft grid-enabled matrix"],obj: {}},"compress yellow",new Date("2018-09-06T00:39:13.501Z"),new Date("2018-09-06T11:17:17.066Z"),"optical dedicated eyeballs",7307,new Date("2018-09-06T11:38:15.446Z"),98575],obj: {}},[new Date("2018-09-05T22:31:05.265Z")],new Date("2018-09-06T18:31:37.358Z"),44908,12435,"Generic",[],new Date("2018-09-06T19:34:43.158Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1858,str: "wireless",num: 59384,date: new Date("2018-09-06T12:30:03.770Z"),array: ["Small Steel Chips Ville secured line",84114,"applications protocol",27807,[],53553,new Date("2018-09-06T01:48:49.277Z"),[],new Date("2018-09-06T11:46:35.525Z"),"budgetary management haptic",new Date("2018-09-06T10:42:06.472Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1859,str: "compress Operative",num: 71100,date: new Date("2018-09-06T01:50:45.309Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1860,str: "user-centric",num: 59516,date: new Date("2018-09-06T06:50:31.198Z"),array: [22774,new Date("2018-09-06T17:15:49.448Z"),"Refined",{_id: 1861,str: "Indonesia",num: 16864,date: new Date("2018-09-05T23:04:04.629Z"),array: [],obj: {_id: 1862,str: "sensor",date: new Date("2018-09-06T06:36:09.357Z"),array: [new Date("2018-09-06T11:02:25.993Z"),"Avon"]}},{_id: 1863,str: "Horizontal Representative",num: 97369,obj: {_id: 1864,num: 73599,obj: {}}},"interface calculate",{_id: 1865,date: new Date("2018-09-06T11:53:16.643Z"),obj: {}},39146,new Date("2018-09-06T00:48:23.193Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1866,str: "Small Concrete Car",num: 38819,array: [new Date("2018-09-06T16:23:56.390Z"),new Date("2018-09-06T09:55:34.276Z"),"regional",{_id: 1867,date: new Date("2018-09-06T06:10:03.575Z"),array: []},79257,new Date("2018-09-06T01:47:10.063Z"),"function",new Date("2018-09-06T00:55:26.993Z"),13394,[{_id: 1868,str: "Credit Card Account fresh-thinking",num: 11391,date: new Date("2018-09-05T20:24:15.255Z"),obj: {_id: 1869,str: "Internal Granite",date: new Date("2018-09-06T14:43:53.115Z"),obj: {}}}],["Croatian Kuna",new Date("2018-09-05T20:22:30.743Z"),61373],"teal"],obj: {_id: 1870,str: "1080p content",num: 58644,array: [],obj: {_id: 1871,num: 90155,date: new Date("2018-09-06T05:51:06.645Z"),array: [],obj: {_id: 1872,str: "Sleek Group",num: 23671,date: new Date("2018-09-06T19:34:37.962Z"),array: [19862,"Data deliverables backing up"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 1873,str: "microchip",num: 70856,obj: {_id: 1874,str: "evolve Wooden",num: 85377,date: new Date("2018-09-05T22:49:20.873Z"),array: [67791,new Date("2018-09-06T16:29:16.601Z"),23185,"parsing",new Date("2018-09-06T05:50:32.413Z"),["Uganda Dynamic transform"],{_id: 1875,str: "Small South Dakota overriding",num: 15114,date: new Date("2018-09-06T03:23:26.363Z"),array: [],obj: {}},new Date("2018-09-06T01:07:22.043Z"),"Lithuania",[],"Tuna",new Date("2018-09-06T06:59:22.389Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 1876,str: "Rustic Rubber Chicken Principal ADP",num: 40687,date: new Date("2018-09-05T22:09:42.159Z"),array: [],obj: {_id: 1877,str: "Cordoba Oro",num: 44182,date: new Date("2018-09-06T11:08:38.707Z"),array: [48537,new Date("2018-09-06T07:04:41.810Z"),"Borders",96193,{_id: 1878,str: "methodology Tala virtual",num: 40199,date: new Date("2018-09-06T01:45:21.761Z"),array: [],obj: {_id: 1879,num: 3367,date: new Date("2018-09-06T08:12:36.265Z"),obj: {_id: 1880,date: new Date("2018-09-06T05:46:43.987Z"),array: []}}},"intangible Corporate","Small Frozen Shoes Auto Loan Account Object-based",28466,29314,"SMS multi-byte"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1881,str: "Savings Account PNG pricing structure",num: 17859,date: new Date("2018-09-05T20:34:12.653Z"),array: [],obj: {_id: 1882,str: "invoice",num: 46156,date: new Date("2018-09-06T02:31:54.825Z"),array: [{_id: 1883,str: "Buckinghamshire national Wyoming",date: new Date("2018-09-06T09:17:14.937Z"),array: [new Date("2018-09-05T23:33:49.150Z")]},"neural-net orange driver",48959,["Frozen"],75629,{_id: 1884,str: "Glens",num: 3094,obj: {}},[],new Date("2018-09-05T23:31:03.100Z"),"Optional Money Market Account payment",new Date("2018-09-06T09:34:06.073Z"),new Date("2018-09-06T02:00:45.318Z"),52708,[95855],{_id: 1885,num: 70111,array: [[],"Handmade Small Fresh Pizza Mission"],obj: {_id: 1886,obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1887,str: "Paradigm eyeballs New Hampshire",num: 66955,date: new Date("2018-09-06T07:52:55.118Z"),array: [new Date("2018-09-06T06:44:05.917Z"),"reboot redefine",99774,21678,{_id: 1888,str: "Chips",num: 17254,date: new Date("2018-09-06T03:53:31.049Z"),array: [],obj: {_id: 1889,num: 37042,date: new Date("2018-09-06T11:39:37.111Z"),array: ["Minnesota"],obj: {_id: 1890,num: 70045,date: new Date("2018-09-06T09:53:07.998Z"),obj: {_id: 1891,str: "schemas recontextualize olive",date: new Date("2018-09-06T02:26:47.665Z"),array: [new Date("2018-09-06T17:12:18.084Z")]}}}},55751,"Argentine Peso",[],{_id: 1892,num: 46933,date: new Date("2018-09-06T03:33:26.315Z"),array: [],obj: {}},new Date("2018-09-05T21:51:44.902Z"),11615,{_id: 1893,str: "platforms Rubber",array: ["Hawaii",new Date("2018-09-06T09:30:28.128Z"),"Practical Shoes"],obj: {}},new Date("2018-09-05T23:00:09.495Z"),39500]});
    },

    function(coll) {
        return coll.insert({_id: 1894,str: "Solutions initiative",date: new Date("2018-09-05T20:05:50.210Z"),array: [new Date("2018-09-06T00:04:54.987Z"),new Date("2018-09-06T14:57:36.998Z"),"Corners Communications",[],59882,{_id: 1895,str: "invoice",num: 94428,date: new Date("2018-09-06T10:43:30.974Z"),array: ["Buckinghamshire virtual Money Market Account",84053],obj: {}},new Date("2018-09-06T18:52:34.215Z"),{_id: 1896,num: 95403,array: [],obj: {}},23675,"wireless","Sausages French Guiana",68725],obj: {_id: 1897,str: "Bike synthesizing",num: 92623,date: new Date("2018-09-05T20:53:21.109Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1898,str: "blue",num: 54167,date: new Date("2018-09-06T00:47:46.844Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1899,str: "bypassing Uganda Shilling applications",num: 86004,date: new Date("2018-09-05T20:37:33.742Z"),array: [[],"online",{_id: 1900,num: 35069,array: []},new Date("2018-09-06T00:50:57.656Z"),36879,[9038,new Date("2018-09-06T02:12:59.831Z"),"Cloned","withdrawal","Canyon exploit",32137],"Soft","incentivize deposit France",57521],obj: {_id: 1901,str: "Utah",date: new Date("2018-09-06T12:32:42.265Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1902,str: "compressing",num: 85661,date: new Date("2018-09-06T01:57:24.616Z"),array: [],obj: {_id: 1903,num: 58603,date: new Date("2018-09-06T08:50:59.099Z"),array: ["generating Rubber revolutionary",44446,"IB demand-driven virtual",51075,new Date("2018-09-06T11:31:15.367Z"),[{_id: 1904,num: 47872,date: new Date("2018-09-05T22:53:38.112Z"),obj: {_id: 1905,str: "Centralized",date: new Date("2018-09-06T07:53:06.050Z"),array: [],obj: {}}}],48377,[],new Date("2018-09-06T08:09:09.853Z"),new Date("2018-09-06T13:53:49.553Z"),new Date("2018-09-06T12:37:31.026Z"),"Tasty Plastic Sausages"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1906,str: "Avon",num: 10862,date: new Date("2018-09-06T02:09:17.884Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1907,str: "partnerships",num: 64331,date: new Date("2018-09-06T17:26:24.840Z"),obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $range: [5,2,18] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: { $toString: { $arrayToObject: [[["composite Auto Loan Account"],[],[992,'$obj.num']]] } } } },{ $toLower: '$obj.obj.obj.str' }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[],[92975],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $month: { $year: { $toDate: { $reverseArray: [['$obj.obj.num']] } } } },true],['$num',{ $floor: 36928 }],[],['$obj.num',16304,83685],[{ $substrBytes: ['$str',0,13] },"drive Rustic"]]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T18:13:22.123Z",format: "%j-%m-%H-%S-%S-%H-%M-%G-%L",timezone: "America/Blanc-Sablon",onError: { $isoDayOfWeek: { $month: { $hour: { $dayOfYear: { $toDate: { $ltrim: {input: '$obj.str',chars: '$obj.obj.obj.str'} } } } } } },onNull: "ability Savings Account Mexico"} } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Botswana connect transmit" } }, _id: 0}}],

        [{$project: {a: { $toString: { $range: [15,7] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $trim: { input: { $rtrim: {input: { $substrBytes: ['$obj.obj.str',10,6] },chars: '$obj.str'} } } } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["auxiliary Configurable"],as: 'petra',in: { $subtract: ['$$petra',18647] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["District"],as: 'theron',cond: { $and: [902,'$num','$$theron',{ $size: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str',"Credit Card Account"]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $substrBytes: ["compressing Fantastic Granite Shoes engineer",4,6] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Sleek Soft Mouse Customer-focused SQL",v: true}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $substr: ["Computer",1,19] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "East Caribbean Dollar New Mexico",v: "virtual connect"},{k: "Avon Central",v: 2842},{k: "Unbranded",v: 54838}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[71741],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num',9508,53531,{ $multiply: [] }],as: 'candido',cond: { $in: [{ $dayOfMonth: '$obj.obj.date' },{ $reverseArray: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[35554,'$num'],19552] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],69348] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',12,13] }, _id: 0}}],

        [{$project: {a: { $minute: { $minute: { $dateFromParts: {isoWeekYear: { $size: [[26808,76249,'$obj.num']] },isoWeek: { $ln: '$obj.obj.obj.num' },isoDayOfWeek: { $pow: ['$num',85311] },hour: { $multiply: [37969] },minute: { $ceil: 35894 },millisecond: { $indexOfArray: [{ $map: {input: ['$obj.obj.str'],in: { $multiply: [] }} },{ $arrayToObject: [[{k: "Coordinator",v: "Soft"}]] },19] }} } } }, _id: 0}}],

        [{$project: {a: { $week: { $dateToParts: {date: { $hour: { $second: { $month: { $year: { $dateToParts: { date: { $week: { $isoWeek: { $dayOfMonth: { $isoWeekYear: { $dateFromParts: {year: { $abs: 8178 },day: { $exp: '$obj.num' },minute: { $abs: 24503 }} } } } } } } } } } } },timezone: "Asia/Barnaul",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $concat: ["Awesome Steel Bacon","leading edge","green Toys Credit Card Account"] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $minute: '$obj.obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T00:17:34.642Z",timezone: "America/Indianapolis"} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Infrastructure",chars: { $toUpper: { $substrBytes: ["THX Berkshire",6,6] } }} }, _id: 0}}],

        [{$project: {a: { $substr: [{ $rtrim: { input: '$obj.obj.obj.str' } },14,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[79953,'$num',95998],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $month: { $second: { $isoWeekYear: { $dateFromParts: {isoWeekYear: { $add: [] },isoDayOfWeek: { $size: [[{ $toUpper: '$obj.obj.str' },'$str']] },hour: { $mod: [43174,57367] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: '$obj.obj.obj.str' } }],39933] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[{ $ltrim: {input: "Alaska turquoise",chars: '$str'} },"Shirt morph Lebanese Pound"],25456] } }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $dayOfMonth: { $hour: { $isoDayOfWeek: { $millesecond: { $isoWeekYear: { $toDate: { $filter: {input: [{ $substrCP: [{ $concat: [{ $toString: { $arrayElemAt: [[5466],'$obj.num'] } },'$str'] },6,17] }],as: 'lourdes',cond: { $in: [{ $arrayElemAt: [[],'$$lourdes'] },{ $map: {input: [],in: { $divide: ['$$lourdes',25057] }} }] }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: false,defaults: [{ str: "payment Borders" }]} }, _id: 0}}],

        [{$project: {a: { $toUpper: "Customer" }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoWeekYear: { $year: { $dayOfMonth: { $second: '$obj.date' } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toString: { $arrayElemAt: [[],'$obj.obj.num'] } },10,8] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.str'],'$obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Gorgeous Soft Shirt port",v: 82236}]] }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $isoWeek: { $dayOfMonth: { $isoWeek: { $second: { $year: { $minute: { $isoDayOfWeek: { $toDate: { $isoDayOfWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T14:12:32.995Z",timezone: "Europe/Bratislava",onError: { $arrayElemAt: [[],79316] }} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T02:58:10.043Z"),format: "%S-%H-%u-%u-%w-%L",timezone: "US/Mountain",onNull: { $substrBytes: ["Investment Account benchmark",19,14] }} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $week: { $dateToString: {date: '$obj.date',format: "%w-%G-%S-%u",onNull: { $concatArrays: [["solutions Bacon Designer",'$obj.str'],[],["JSON California frame",'$str'],['$num'],[]] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Soft",v: new Date("2018-09-05T21:04:56.057Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[89271,{ $ceil: 9049 },'$obj.obj.num'],["Industrial repurpose Republic of Korea"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str','$str'],[17604],[{ $trim: { input: "Toys Proactive Associate" } },"Plastic Awesome Metal Table calculate"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Synchronised orchestration",{ $toString: { $arrayToObject: [[{k: "Auto Loan Account Dynamic",v: 74327},{k: "invoice morph Kuwaiti Dinar",v: true}]] } }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $zip: {inputs: [['$obj.num'],['$obj.obj.str'],['$str','$obj.str',"Right-sized Berkshire"]],defaults: [/action\-items|incentivize|Music/]} } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeekYear: { $isoWeekYear: { $year: { $hour: { $dayOfWeek: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T18:32:57.809Z",timezone: "Europe/Ljubljana"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',10,5] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: '$str' },"homogeneous"],[],['$obj.obj.num'],["Bedfordshire Borders Home"]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $toUpper: '$obj.obj.obj.str' }],as: 'arnulfo',cond: { $in: [{ $second: { $year: { $isoDayOfWeek: { $millesecond: { $dateFromString: {dateString: "2018-09-06T07:09:30.022Z",format: "%Y-%Y-%G-%L-%d-%Y-%w-%Z-%M",timezone: "Asia/Ashgabat",onError: { $dayOfWeek: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $subtract: [32217,'$$arnulfo'] },hour: { $add: ['$$arnulfo'] },timezone: "Pacific/Tarawa"} } } }} } } } } },{ $range: [10,0,12] }] }} }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],42250] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $not: [new Date("2018-09-06T07:02:23.342Z")] }} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: "Future digital 5th generation" }],["Steel",{ $substrCP: ['$obj.obj.obj.str',13,14] },'$obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],46572] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "generating",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "optical override dot-com",v: 25380}]] }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfWeek: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-05T19:56:55.212Z",timezone: "Atlantic/Faroe"} },format: "%u-%j-%S-%w-%Y-%u-%z-%%-%V-%G",onNull: { $substrCP: ["Refined Plastic Sausages",20,14] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[68183,'$obj.obj.obj.num','$obj.obj.obj.num'],['$obj.obj.obj.str'],[],[{ $toUpper: "Industrial networks quantifying" }],["Libyan Arab Jamahiriya Incredible leading-edge",'$str'],[63342,20231],["TCP Handmade",{ $toLower: { $toUpper: "Unbranded Buckinghamshire" } },{ $dateToString: {date: { $dayOfYear: { $dayOfWeek: { $second: { $month: { $isoDayOfWeek: { $dayOfMonth: { $month: { $isoWeek: { $dayOfWeek: { $hour: { $dateFromString: {dateString: "2018-09-06T02:54:26.551Z",timezone: "Etc/GMT+12"} } } } } } } } } } } },format: "%V-%Y-%G-%u-%Y-%w-%w-%j-%U-%d"} }]]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "copy" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],73510] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',5,16] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.num',91755,13208,'$obj.num'],[],[],["architectures",{ $concat: ['$str',{ $rtrim: {input: '$str',chars: "Auto Loan Account"} },{ $toString: { $arrayToObject: [[["Intranet blue"],[54739]]] } }] }]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["demand-driven primary",{ $concat: ['$obj.str'] },'$obj.str'],93381] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: {input: '$obj.obj.obj.str',chars: "Pakistan Grocery input"} },'$str'],['$obj.num'],["Optional extranet"],[{ $dateToString: {date: '$date',format: "%j-%j-%Y-%u-%u-%G",onNull: { $map: {input: [53522,12576,24398,'$num','$obj.num'],as: 'tanner',in: { $exp: '$$tanner' }} }} },'$str','$obj.obj.obj.str',"CSS leading-edge"],[{ $log: [15481,84482] }]]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $toString: { $arrayToObject: [[[],['$obj.obj.obj.str'],[]]] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],92229] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $minute: { $second: { $hour: { $year: { $dateFromString: {dateString: "2018-09-06T11:21:38.854Z",timezone: "Australia/Darwin",onError: { $concat: ["transmitter microchip",'$str'] },onNull: "bandwidth"} } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.num',{ $divide: [1136,'$obj.obj.num'] },62106]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.str'],['$obj.obj.obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[5050,'$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',12,6] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: new Date("2018-09-06T09:12:27.254Z"),format: "%H-%d-%Y-%m-%w-%L-%m-%u-%L",onNull: { $millesecond: { $second: { $minute: { $dateToString: {date: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T09:53:23.544Z",timezone: "Asia/Irkutsk"} } },timezone: "Europe/Kirov",onNull: '$obj.obj.str'} } } } }} } }, _id: 0}}],

        [{$project: {a: { $range: [16,12,10] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Oklahoma Refined New York",8,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Principal out-of-the-box Realigned",v: { $dateFromString: {dateString: "2018-09-06T16:37:12.581Z",format: "%w-%V-%M-%M",timezone: "Africa/Brazzaville",onError: { $arrayElemAt: [[{ $substr: [{ $dateToString: {date: { $millesecond: { $dateFromParts: {year: { $indexOfArray: [{ $zip: {inputs: [[],['$obj.obj.obj.num','$obj.obj.num'],['$obj.str',{ $trim: {input: "purple",chars: "Wooden Engineer"} }]],defaults: [/^attitude|markets|Kyat/]} },{ $arrayToObject: [[[]]] },7,9] },minute: { $ln: 553 },second: { $pow: [95600,38624] },timezone: "America/Miquelon"} } },format: "%w-%j-%Y-%U-%L-%j-%w-%m-%S-%H-%u",timezone: "EST",onNull: { $toDate: { $range: [16,12] } }} },20,12] }],'$num'] },onNull: "web-enabled reboot Shoes"} }},{k: "Exclusive SMS Money Market Account",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Unbranded",{ $concat: ['$obj.str',"ivory encompassing parse"] }],[{ $abs: 67599 },66374]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],2430] }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $month: { $hour: { $week: { $dayOfYear: { $hour: { $dayOfYear: { $isoWeek: new Date("2018-09-06T12:17:09.395Z") } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "e-enable",v: 16372},{k: "infomediaries Cheese Operations",v: { $minute: { $isoWeek: { $year: { $hour: { $dayOfWeek: { $second: { $dayOfMonth: { $isoDayOfWeek: { $isoDayOfWeek: { $dateToParts: {date: { $second: { $month: { $dateToString: { date: '$obj.obj.obj.date' } } } },timezone: "Africa/El_Aaiun",iso8601: false} } } } } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $range: [0,4] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $month: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $concatArrays: [['$obj.obj.str'],[47110],[{ $substrBytes: ["Handcrafted fuchsia",13,3] },'$obj.str'],[]] },{ $hour: { $dayOfMonth: { $millesecond: { $second: { $dayOfYear: { $dateToParts: {date: { $year: { $isoWeekYear: { $toDate: { $ltrim: { input: "Crossing" } } } } },timezone: "Europe/Busingen"} } } } } } },12] },isoDayOfWeek: { $exp: '$num' },hour: { $pow: [73736,'$obj.num'] },minute: { $size: [[]] },second: { $cmp: [{ $arrayElemAt: [[{ $toLower: '$obj.obj.str' }],{ $size: [[{ $trim: { input: "integrated" } }]] }] },{ $arrayElemAt: [[false],66780] }] },timezone: "Europe/Busingen"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: "intuitive Supervisor transmit",chars: { $toLower: "Forward" }} }],68235] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeekYear: { $minute: { $millesecond: { $dayOfYear: { $year: { $hour: { $dateFromParts: {isoWeekYear: { $subtract: [80567,'$obj.num'] },hour: { $sqrt: 75993 },minute: { $log10: '$obj.num' },second: { $trunc: '$obj.num' },millisecond: { $log: [52083,{ $multiply: [31453] }] }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $log: ['$obj.obj.obj.num',11715] },isoWeek: { $mod: ['$obj.obj.num','$obj.obj.num'] },hour: { $trunc: 58544 },millisecond: { $divide: [82696,{ $size: [[]] }] },timezone: "Etc/GMT-14"} },iso8601: false} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.num'],['$obj.obj.str',"Persevering","alliance Shirt"],[{ $substrBytes: ["Turnpike synthesizing Berkshire",2,15] }],[]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [72067,94561],in: { $sqrt: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "1080p",v: 93410}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str'],as: 'sonny',in: { $floor: 16669 }} }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $rtrim: { input: '$obj.obj.obj.str' } },18,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],[{ $toLower: "Future-proofed" },{ $substrCP: ['$obj.obj.obj.str',12,12] },"CFP Franc"],['$obj.num','$obj.obj.obj.num'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $trim: { input: "Tools Wooden Avon" } },7,8] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Credit Card Account",v: false}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrCP: [{ $substrBytes: ['$obj.obj.str',0,19] },11,9] } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $rtrim: { input: '$obj.obj.obj.str' } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',17,17] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Berkshire circuit Indiana",{ $toString: { $arrayToObject: [[]] } }],53457] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["compress",0,17] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str','$obj.obj.str'],61174] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "vortals mindshare",v: true},{k: "Program Awesome",v: new Date("2018-09-06T00:42:18.907Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Money Market Account payment",v: 67233}]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: {date: { $isoWeekYear: { $second: { $dayOfWeek: '$obj.date' } } },timezone: "America/Kentucky/Louisville",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $month: { $week: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T19:15:48.685Z"),timezone: "Etc/GMT+11"} } } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Frozen",2,3] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "strategize",v: { $millesecond: { $dayOfYear: { $month: { $dayOfYear: { $dayOfWeek: '$obj.date' } } } } }},{k: "Product",v: 13549},{k: "TCP Supervisor",v: false}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $trim: { input: "Money Market Account" } },3,11] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],77190] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $toString: { $toString: { $range: [5,0,10] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["mindshare","Granite Human",{ $toLower: '$obj.str' }],41099] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $minute: { $dayOfMonth: { $dayOfWeek: { $millesecond: { $dateFromString: {dateString: "2018-09-05T21:33:01.598Z",onNull: { $ltrim: {input: '$obj.str',chars: "Shoes"} }} } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToParts: {date: { $isoWeek: { $millesecond: { $dateFromString: {dateString: "2018-09-06T09:08:48.437Z",timezone: "America/Boise",onError: { $arrayToObject: [[{k: "Strategist Small",v: '$date'}]] }} } } },iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $hour: { $isoDayOfWeek: { $minute: { $dayOfYear: { $second: { $dateToString: {date: new Date("2018-09-06T02:58:12.500Z"),format: "%w-%S-%H-%m",onNull: "Indiana Computer Turkey"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $dateToString: {date: '$date',format: "%S-%w-%G-%z-%z-%Z",timezone: "Egypt"} },16,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Hat"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Chief Checking Account Locks",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "payment" }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str'],as: 'olaf',in: 22246} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fresh Rubber Home Loan Account",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "supply-chains Implementation Tools",v: 2006},{k: "expedite Wooden zero administration",v: '$num'},{k: "North Dakota Soft GB",v: { $substr: [{ $substrBytes: ['$obj.str',12,1] },2,8] }}]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "incubate hardware Accounts",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["users circuit"],78858] }, _id: 0}}],

        [{$project: {a: { $range: [5,6,10] }, _id: 0}}],

        [{$project: {a: { $toString: { $concat: ['$str'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "cyan RAM",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Kansas",v: new Date("2018-09-06T16:32:08.665Z")}]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substr: [{ $toString: { $reverseArray: [['$obj.obj.obj.str','$obj.obj.obj.str',"bandwidth"]] } },6,18] }] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $ltrim: {input: '$obj.obj.str',chars: '$str'} }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],["Analyst",{ $substrBytes: ["UIC-Franc",10,6] },'$str'],[63453,'$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [5,9,0] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Handmade Granite Ball online"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[{ $toString: { $filter: {input: ['$num',92672],cond: { $in: [{ $week: { $hour: { $dayOfMonth: { $isoDayOfWeek: { $millesecond: { $millesecond: { $toDate: { $substr: [{ $trim: {input: '$$this',chars: { $ltrim: { input: "National Metal withdrawal" } }} },2,2] } } } } } } } },{ $zip: { inputs: [["Small quantify",'$obj.obj.str'],['$obj.str',"deposit Toys"],[78387,'$$this','$$this']] } }] }} } }],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[77242,63363],["Multi-channelled Manager"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[25120],['$obj.num',51493,{ $ln: '$obj.obj.num' }],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[53837],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $millesecond: { $dateFromString: {dateString: "2018-09-06T15:24:28.916Z",format: "%L-%S-%u-%Z-%H-%%-%Z-%m-%d-%%-%w-%G",timezone: "MST",onError: { $arrayElemAt: [['$num'],'$obj.num'] },onNull: { $arrayToObject: [[["silver",'$obj.obj.str'],['$obj.obj.str',{ $toString: { $objectToArray: '$obj.obj.obj' } }],[],[{ $trim: {input: "red USB interactive",chars: '$obj.obj.str'} },"Reactive bottom-line"],[65040,'$obj.obj.obj.num','$obj.num'],[]]] }} } },iso8601: false} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T01:29:08.263Z"),timezone: "Asia/Colombo"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',{ $trim: {input: "Synchronised",chars: '$obj.obj.obj.str'} },{ $dateToString: {date: '$obj.obj.date',format: "%G-%G-%G-%d-%Y-%S-%d-%w"} }],['$obj.obj.obj.num',97025,86580],['$obj.obj.obj.num'],['$obj.obj.obj.str'],["Cambridgeshire"]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.str',{ $substr: ['$obj.obj.obj.str',3,2] },"Refined auxiliary local"],as: 'salvador',in: { $trunc: '$obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Florida",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["strategize Syrian Pound Checking Account",15,10] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $isoWeek: { $dateToParts: {date: { $isoDayOfWeek: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-05T22:06:27.219Z",onNull: '$obj.obj.str'} } } },timezone: "Asia/Macau",iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $ne: [{ $range: [13,0,14] },{ $arrayToObject: [[['$$this'],["Missouri envisioneer protocol",{ $dateToString: {date: '$$this',format: "%%-%M-%d-%w-%m",timezone: "Asia/Yakutsk",onNull: "Wooden"} },{ $toString: { $dayOfWeek: { $week: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-05T22:25:02.890Z",format: "%w-%G-%m-%z-%z-%V-%M-%L",timezone: "Mexico/General"} } } } } },'$obj.obj.obj.str'],[],['$obj.str','$obj.obj.obj.str'],[{ $log: ['$obj.obj.obj.num','$obj.obj.obj.num'] }]]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[true],{ $exp: '$obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToParts: {date: { $toDate: { $isoDayOfWeek: { $millesecond: { $dayOfWeek: { $week: { $toDate: { $dateFromParts: {isoWeekYear: { $sqrt: 4495 },isoWeek: { $divide: ['$obj.obj.num',{ $multiply: [] }] },isoDayOfWeek: { $log: [52685,'$obj.obj.num'] },minute: { $divide: ['$num','$obj.num'] },millisecond: { $log10: 64760 }} } } } } } } },iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toUpper: '$obj.str' } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Games bi-directional Tokelau",v: 62769}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Land Keyboard Automotive",v: 25714}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromParts: {year: { $exp: '$obj.obj.obj.num' },month: { $cmp: [{ $arrayToObject: [[{k: "payment Awesome Frozen Chips",v: '$obj.date'}]] },{ $filter: {input: ["streamline Pakistan Rupee"],as: 'webster',cond: true} }] },hour: { $mod: [53535,41296] },minute: { $abs: { $floor: 68586 } },millisecond: { $ceil: '$num' }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',52132,{ $second: { $week: { $month: { $dateToString: {date: '$obj.date',onNull: { $reverseArray: [[]] }} } } } }],[{ $divide: ['$num','$obj.obj.num'] }]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "firmware Licensed Fresh Shoes Cambridgeshire",chars: { $ltrim: { input: "Configuration SCSI Officer" } }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $trim: {input: "Checking Account program grow",chars: "Tennessee info-mediaries"} }],cond: { $gte: [{ $arrayElemAt: [[48449],55588] },{ $substrBytes: [{ $toUpper: '$str' },16,12] }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Singapore Dollar",{ $toString: { $arrayElemAt: [[{ $toLower: '$str' }],81438] } },"parse background"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Towels Chicken",v: { $subtract: ['$num',82583] }}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[9551,'$obj.obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Bedfordshire",'$obj.obj.str','$obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str','$obj.obj.date',true],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',2941],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "software",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',"Beauty blue",{ $toString: { $second: { $month: { $dateFromParts: {year: { $pow: [12472,'$obj.obj.num'] },month: { $sqrt: '$obj.obj.num' },day: { $indexOfArray: [{ $objectToArray: '$obj' },{ $reverseArray: [[]] },15] },hour: { $abs: 5497 },second: { $exp: '$obj.obj.num' }} } } } }],['$obj.obj.num','$obj.obj.obj.num'],[],['$obj.obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["salmon"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],10465] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Borders"],[],[{ $toString: { $arrayToObject: [[['$obj.str'],[59625]]] } },{ $rtrim: {input: '$obj.str',chars: { $trim: {input: "Car Bedfordshire Rustic",chars: '$str'} }} },"Accounts Computer Intuitive",{ $toLower: "program Savings Account Guyana Dollar" }],['$obj.num',49885],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["lavender",{ $substrCP: [{ $substr: [{ $trim: { input: '$obj.obj.obj.str' } },1,10] },0,2] },'$str'],{ $log: ['$num',82567] }] }, _id: 0}}],

        [{$project: {a: { $month: { $millesecond: { $dateFromParts: {isoWeekYear: { $sqrt: '$obj.obj.obj.num' },isoDayOfWeek: { $subtract: [3133,'$obj.num'] },minute: { $abs: 38083 },second: { $exp: '$num' },millisecond: { $ln: { $add: ['$obj.obj.num'] } },timezone: "Atlantic/Stanley"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Licensed Intelligent",v: '$obj.obj.obj.num'},{k: "Global programming",v: false},{k: "Denmark",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%m-%G-%V-%%-%Y-%S-%S-%G-%U",timezone: "America/Boise",onNull: { $substrCP: ["Cambridgeshire virtual connect",7,19] }} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $second: new Date("2018-09-05T23:40:41.727Z") } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Hawaii cross-platform Nevada"],422] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substrBytes: ['$obj.obj.str',19,16] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["indigo Ohio wireless",19,1] }],93733] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromString: {dateString: "2018-09-06T00:14:31.374Z",onError: { $arrayToObject: [[{k: "eco-centric world-class",v: true},{k: "homogeneous",v: false}]] },onNull: { $toLower: '$obj.obj.obj.str' }} } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeek: { $year: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-05T21:00:03.185Z",timezone: "Zulu",onError: { $concat: ["quantify capacitor",'$obj.str'] },onNull: { $ltrim: { input: { $toString: { $zip: { inputs: [[{ $ltrim: {input: '$obj.obj.obj.str',chars: "ADP"} },'$date',"Agent navigating Organic"],['$obj.obj.str'],[76027]] } } } } }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[29214],75345] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

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
