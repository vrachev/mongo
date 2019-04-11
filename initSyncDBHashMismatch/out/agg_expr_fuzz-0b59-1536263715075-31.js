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
        return coll.insert({_id: 19340,str: "program",num: 71264,date: new Date("2018-09-06T17:44:38.715Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19341,str: "Auto Loan Account",num: 13253,date: new Date("2018-09-06T08:15:38.608Z"),array: [new Date("2018-09-06T10:13:56.233Z"),49491,["motivating",[],new Date("2018-09-06T02:17:20.878Z"),new Date("2018-09-06T04:36:08.360Z"),467,"Response","Cedi Sausages",{_id: 19342,str: "synergistic",num: 60854,date: new Date("2018-09-06T08:42:46.639Z"),obj: {_id: 19343,num: 27686,date: new Date("2018-09-06T15:21:19.766Z"),array: [],obj: {}}},[],96306,69349,new Date("2018-09-06T08:19:29.344Z"),"Agent Response SQL"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19344,str: "Borders",num: 99544,date: new Date("2018-09-06T15:26:22.988Z"),array: ["payment deposit incentivize",18929,"Alabama",new Date("2018-09-06T05:11:25.525Z"),new Date("2018-09-06T01:46:31.698Z"),new Date("2018-09-06T16:14:26.354Z"),84456,new Date("2018-09-05T21:47:47.637Z"),83550,{_id: 19345,str: "Idaho",num: 77242,date: new Date("2018-09-05T20:55:56.357Z"),array: [],obj: {}},"synthesize analyzer"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19346,str: "Optimization",num: 89057,date: new Date("2018-09-06T08:51:13.177Z"),array: [48311,16927,"Liaison",91393,new Date("2018-09-06T11:00:23.506Z"),[],"Bedfordshire Hat","Cheese knowledge base",[],91599,new Date("2018-09-06T11:33:53.950Z"),{_id: 19347,str: "workforce digital cross-platform",date: new Date("2018-09-06T15:53:27.859Z"),array: [],obj: {_id: 19348,str: "COM RAM Manat",num: 5053,array: [],obj: {}}},{_id: 19349,str: "Program Small Frozen Pizza",num: 4784,date: new Date("2018-09-06T04:54:19.512Z"),array: ["wireless"]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19350,str: "azure firewall Tennessee",num: 92967,date: new Date("2018-09-06T16:06:26.656Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19351,str: "Loop",num: 72851,date: new Date("2018-09-06T14:43:05.578Z"),array: [],obj: {_id: 19352,str: "productize parsing",date: new Date("2018-09-06T11:51:22.210Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19353,str: "Plaza",num: 66989,date: new Date("2018-09-06T10:11:11.532Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19354,str: "digital",num: 71031,date: new Date("2018-09-06T06:51:41.371Z"),array: ["bricks-and-clicks content",new Date("2018-09-06T13:52:10.081Z"),"Managed models","platforms",{_id: 19355,str: "extranet alarm Bedfordshire",date: new Date("2018-09-06T18:21:43.194Z"),array: [38729,new Date("2018-09-06T01:48:58.945Z"),60179,12349],obj: {}},new Date("2018-09-05T20:26:26.319Z"),"Metrics back-end schemas",{_id: 19356,str: "Gorgeous Fantastic Wooden Car Personal Loan Account",num: 58271,date: new Date("2018-09-05T22:16:01.918Z"),array: ["Rubber",3647],obj: {_id: 19357,num: 29281,array: [],obj: {_id: 19358,str: "Representative executive",date: new Date("2018-09-06T05:56:39.675Z"),array: []}}},[[]],95909],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19359,str: "networks",date: new Date("2018-09-06T01:14:55.697Z"),array: [],obj: {_id: 19360,num: 7503,date: new Date("2018-09-06T14:54:03.476Z"),array: [new Date("2018-09-06T05:07:58.398Z"),88459,new Date("2018-09-06T06:41:03.926Z"),"Avon Buckinghamshire Practical",[8280,9005,new Date("2018-09-06T02:39:38.319Z"),"Malta Profound","Tools connecting engage"],"didactic","AGP panel plum",{_id: 19361,str: "Rapid Borders",num: 2019,date: new Date("2018-09-06T05:23:05.127Z"),array: [],obj: {_id: 19362,num: 10466,array: [],obj: {}}},8922]}});
    },

    function(coll) {
        return coll.insert({_id: 19363,str: "driver",num: 20152,date: new Date("2018-09-06T04:58:25.569Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19364,str: "Functionality Multi-channelled Gorgeous",num: 78619,date: new Date("2018-09-05T22:52:31.435Z"),array: ["Cambridgeshire Research Cheese",67888,{_id: 19365,num: 60807,date: new Date("2018-09-05T23:19:24.801Z"),obj: {_id: 19366,str: "Peso Uruguayo Uruguay Peso en Unidades Indexadas Human",date: new Date("2018-09-06T05:11:06.737Z"),array: [],obj: {_id: 19367,num: 8944,array: ["Metal Tuvalu"]}}},93328,43773,{_id: 19368,str: "Liberia",date: new Date("2018-09-05T21:16:26.402Z"),obj: {_id: 19369,str: "Keyboard",num: 37317,date: new Date("2018-09-06T18:24:14.480Z"),array: [],obj: {}}},new Date("2018-09-06T01:29:21.519Z"),"interfaces success",new Date("2018-09-06T19:14:07.823Z"),[new Date("2018-09-06T09:42:17.498Z"),new Date("2018-09-06T18:28:43.162Z"),4771,"Division"],{_id: 19370,str: "Associate Italy",array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 19371,str: "green Principal",num: 84092,date: new Date("2018-09-06T17:37:16.430Z"),array: [],obj: {_id: 19372,str: "Coordinator",num: 1600,date: new Date("2018-09-06T14:16:17.335Z"),array: ["Future functionalities sensor",83668,new Date("2018-09-06T01:41:16.345Z"),new Date("2018-09-06T14:57:44.379Z"),87023,"Car",[],"reintermediate Quetzal Russian Federation",new Date("2018-09-06T10:29:58.262Z")],obj: {_id: 19373,str: "enterprise",num: 91933,date: new Date("2018-09-06T18:17:14.268Z"),array: [],obj: {_id: 19374,str: "Shirt invoice",num: 48215}}}});
    },

    function(coll) {
        return coll.insert({_id: 19375,str: "Intelligent markets",num: 85681,date: new Date("2018-09-06T05:46:51.121Z"),array: ["Small Fresh Chips",24460,"Latvian Lats program Gorgeous",new Date("2018-09-06T13:07:40.062Z"),{_id: 19376,str: "Synchronised Consultant invoice",num: 32669,date: new Date("2018-09-06T04:22:25.199Z"),obj: {}},new Date("2018-09-06T13:16:24.880Z"),new Date("2018-09-06T07:46:23.278Z"),"B2C Forward Manager",new Date("2018-09-06T02:19:52.176Z"),32803,[],"Officer content SMTP",48027],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19377,str: "Games Unbranded Cotton",num: 36729,date: new Date("2018-09-05T21:45:14.796Z"),array: [new Date("2018-09-05T20:17:00.488Z"),"foreground Outdoors","invoice 5th generation Handmade",25169,4627,new Date("2018-09-06T15:35:23.703Z"),new Date("2018-09-06T19:08:38.359Z"),65792,[],"Somalia",{_id: 19378,str: "revolutionize",num: 77355,date: new Date("2018-09-06T06:22:29.864Z"),array: [[{_id: 19379,str: "Russian Ruble info-mediaries open system",date: new Date("2018-09-05T21:32:35.471Z"),array: [],obj: {}},{_id: 19380,num: 16367,array: [],obj: {_id: 19381,str: "Chief back-end",num: 73903,date: new Date("2018-09-06T16:37:45.666Z"),array: [],obj: {}}},"Sleek Metal Towels"],10649,"Berkshire robust Bedfordshire",new Date("2018-09-06T17:35:29.002Z")]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19382,str: "invoice Handcrafted Gorgeous Rubber Computer",num: 48281,date: new Date("2018-09-05T23:28:40.116Z"),array: [],obj: {_id: 19383,str: "proactive Applications Quality",date: new Date("2018-09-06T07:52:34.122Z"),array: [],obj: {_id: 19384,str: "Hill Senior",date: new Date("2018-09-06T03:38:26.129Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19385,str: "synthesizing",date: new Date("2018-09-06T16:18:49.858Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19386,str: "parsing Palladium",num: 95823,date: new Date("2018-09-06T15:06:51.276Z")});
    },

    function(coll) {
        return coll.insert({_id: 19387,str: "Accountability",num: 91660,date: new Date("2018-09-06T14:24:40.088Z"),array: [7327,new Date("2018-09-06T00:36:37.933Z"),62763,"extensible","Organized Greenland",[new Date("2018-09-06T18:19:49.344Z"),"Technician"],{_id: 19388,num: 92369,date: new Date("2018-09-06T19:43:16.599Z"),array: [],obj: {_id: 19389,str: "Cape e-business maroon",num: 31126,date: new Date("2018-09-05T21:40:51.272Z"),array: ["RAM hacking"],obj: {}}},new Date("2018-09-06T14:56:52.052Z"),{_id: 19390,num: 63082},78781,45209],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19391,str: "Managed",date: new Date("2018-09-05T20:12:18.393Z"),array: [],obj: {_id: 19392,str: "Kyrgyz Republic Auto Loan Account Borders",num: 12346,date: new Date("2018-09-06T19:49:11.557Z"),array: ["incentivize compressing Customer",74749,new Date("2018-09-06T06:28:47.050Z"),18914,{_id: 19393,str: "synthesizing",num: 6623,date: new Date("2018-09-06T19:19:56.952Z"),array: ["Netherlands Antilles",new Date("2018-09-06T11:50:13.951Z")],obj: {_id: 19394,date: new Date("2018-09-06T15:14:17.175Z"),obj: {}}},["Investment Account"],{_id: 19395,str: "FTP",num: 53376,date: new Date("2018-09-06T09:22:04.393Z"),array: [],obj: {}},72569,new Date("2018-09-06T06:56:35.061Z"),new Date("2018-09-05T22:22:09.524Z"),new Date("2018-09-06T07:53:58.000Z"),[68546,"Saudi Riyal","Enhanced"]]}});
    },

    function(coll) {
        return coll.insert({_id: 19396,num: 67767,date: new Date("2018-09-06T18:33:51.551Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19397,str: "Awesome",date: new Date("2018-09-06T01:29:11.655Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19398,str: "azure Intelligent Plastic",num: 50281,date: new Date("2018-09-06T01:59:33.339Z"),array: [],obj: {_id: 19399,str: "Falkland Islands (Malvinas) Configuration",num: 8246,date: new Date("2018-09-06T04:19:52.681Z"),obj: {_id: 19400,str: "Bulgarian Lev",num: 94019,array: ["bottom-line",new Date("2018-09-06T17:43:52.641Z"),51584,"Books Self-enabling",new Date("2018-09-06T08:09:15.563Z"),[],32510,82345,12817]}}});
    },

    function(coll) {
        return coll.insert({_id: 19401,str: "pink budgetary management Ameliorated",num: 86420,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19402,str: "Tunnel SCSI IB",num: 66362,array: [80265,53214,new Date("2018-09-06T04:46:56.984Z"),"index target Analyst",18683,"overriding Focused",{_id: 19403,str: "deliverables invoice metrics",num: 18928,date: new Date("2018-09-05T20:48:08.246Z"),array: [[new Date("2018-09-06T07:53:08.818Z"),61693,"Rustic",75501],[],new Date("2018-09-05T20:27:35.671Z"),"Intuitive Towels"],obj: {}},{_id: 19404,str: "redefine",num: 92561,date: new Date("2018-09-06T14:36:14.348Z"),obj: {_id: 19405,date: new Date("2018-09-06T02:58:22.065Z"),array: [],obj: {_id: 19406,array: []}}},[],"New York schemas"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19407,str: "Berkshire Handcrafted Steel Pants Incredible",date: new Date("2018-09-05T20:57:14.479Z"),array: ["Virtual RSS payment",{_id: 19408,num: 44920,date: new Date("2018-09-06T17:58:57.638Z"),array: [],obj: {}},new Date("2018-09-06T13:10:01.294Z"),81819,67859,[new Date("2018-09-05T23:46:21.126Z"),"Unbranded",83130],new Date("2018-09-06T05:34:08.507Z"),"functionalities",new Date("2018-09-06T11:37:25.398Z"),new Date("2018-09-05T22:57:36.753Z"),new Date("2018-09-06T05:36:59.204Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19409,str: "North Dakota synthesizing",num: 63227,date: new Date("2018-09-05T22:49:56.452Z"),array: [73312,[],"Ergonomic",new Date("2018-09-06T10:47:52.971Z"),new Date("2018-09-06T02:34:25.841Z"),"metrics",{_id: 19410,str: "Fresh vertical",num: 61986,date: new Date("2018-09-06T14:59:17.961Z"),array: [40676,new Date("2018-09-05T23:41:54.653Z"),[]],obj: {}},{_id: 19411,str: "reboot Utah",num: 89087,date: new Date("2018-09-06T10:32:13.615Z"),array: [],obj: {_id: 19412,num: 28968,date: new Date("2018-09-06T13:55:06.776Z"),obj: { _id: 19413 }}},new Date("2018-09-05T22:55:55.486Z"),new Date("2018-09-05T22:00:37.986Z"),38475,"Motorway Intelligent Bedfordshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19414,str: "Cheese",array: [new Date("2018-09-05T23:06:53.622Z"),new Date("2018-09-06T03:19:13.745Z"),19579,"bandwidth Small Cotton Chips",[{_id: 19415,str: "Montana Chicken Jewelery",num: 10289,date: new Date("2018-09-05T23:56:00.617Z"),array: [],obj: {_id: 19416,str: "Movies JBOD",num: 88999,date: new Date("2018-09-06T05:27:38.338Z"),array: []}},82026],new Date("2018-09-06T15:53:13.492Z"),new Date("2018-09-06T01:01:18.600Z"),"turn-key",78508,"Bedfordshire","Dynamic Jewelery analyzing"],obj: {_id: 19417,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 19418,str: "mint green paradigms European Unit of Account 9(E.U.A.-9)",num: 77082,date: new Date("2018-09-06T00:57:34.146Z"),array: [new Date("2018-09-06T04:29:43.340Z"),"Markets Cambridgeshire target",{_id: 19419,str: "Dobra",date: new Date("2018-09-06T03:58:19.326Z"),array: [],obj: {}},new Date("2018-09-06T14:20:51.657Z"),"SMTP Functionality",93494,5782,60341,new Date("2018-09-05T22:58:29.861Z"),new Date("2018-09-06T01:03:43.412Z")],obj: {_id: 19420,str: "haptic Cambridgeshire Azerbaijanian Manat",num: 70718,date: new Date("2018-09-05T22:49:43.359Z"),array: [["Granite Consultant Tactics",[],{_id: 19421,str: "matrix Grocery redundant",obj: {}},51549,new Date("2018-09-06T17:41:30.622Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 19422,str: "Checking Account",num: 81106,date: new Date("2018-09-06T18:09:29.718Z"),array: [],obj: {_id: 19423,str: "invoice",num: 79277,date: new Date("2018-09-05T22:57:11.347Z"),array: [new Date("2018-09-06T12:48:22.938Z"),94105,new Date("2018-09-06T08:42:49.006Z"),"Keyboard Tennessee systemic",new Date("2018-09-06T10:24:40.679Z"),[],"seamless",new Date("2018-09-05T22:38:33.903Z"),23620,"Wooden XML Central",54881,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19424,str: "Tasty Wooden Ball",num: 41379,date: new Date("2018-09-06T12:38:43.678Z"),obj: {_id: 19425,str: "Arizona",num: 42629,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19426,str: "Sausages Tasty",num: 97226,date: new Date("2018-09-06T11:58:10.869Z"),array: [],obj: {_id: 19427,str: "system Turkey efficient",num: 26355,date: new Date("2018-09-06T06:44:02.602Z"),array: [new Date("2018-09-06T08:03:13.496Z"),new Date("2018-09-06T04:27:20.632Z"),"Computers fuchsia",[],23334,{_id: 19428,str: "Fantastic",num: 84855,array: []},"Latvian Lats Licensed Granite Bike enhance","protocol index algorithm",[new Date("2018-09-06T06:45:17.300Z"),28114],"monetize China info-mediaries"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19429,str: "override zero defect",num: 91361,array: [37850,"circuit Secured","Outdoors aggregate sticky",new Date("2018-09-05T22:05:19.436Z"),"indigo back up",{_id: 19430,str: "flexibility",num: 68918,date: new Date("2018-09-06T02:57:51.176Z"),obj: {_id: 19431,str: "Concrete needs-based Concrete",num: 36065,date: new Date("2018-09-06T11:02:43.906Z"),array: [],obj: {}}},{_id: 19432,date: new Date("2018-09-06T04:32:24.894Z"),array: [new Date("2018-09-06T16:16:02.475Z"),44730,new Date("2018-09-06T02:16:11.777Z")],obj: {}},[],"Mandatory empowering Fantastic Wooden Fish",{_id: 19433,array: [new Date("2018-09-06T01:32:41.536Z"),[],"Investor generate Electronics",76895]}]});
    },

    function(coll) {
        return coll.insert({_id: 19434,str: "Fresh",num: 32930,date: new Date("2018-09-06T03:39:18.967Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19435,str: "port Cook Islands",num: 81802,date: new Date("2018-09-05T20:01:59.873Z"),array: [new Date("2018-09-06T15:50:08.466Z"),new Date("2018-09-06T01:11:20.432Z"),"sensor Plaza",56448,new Date("2018-09-05T23:19:55.315Z"),{_id: 19436,str: "Operations",num: 71495,date: new Date("2018-09-06T13:04:05.313Z"),array: [],obj: {_id: 19437,str: "Brand copying",num: 764,date: new Date("2018-09-06T17:18:58.709Z"),array: [],obj: {_id: 19438,num: 86502,date: new Date("2018-09-06T06:27:10.074Z"),array: [52892,"SSL invoice transmitting",[],"bluetooth Borders target"]}}},[],new Date("2018-09-06T12:02:49.105Z"),"Euro programming","Niue Generic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19439,str: "hacking Gardens",num: 30004,date: new Date("2018-09-06T08:36:30.238Z")});
    },

    function(coll) {
        return coll.insert({_id: 19440,str: "Regional",num: 46599,date: new Date("2018-09-06T12:50:20.523Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19441,num: 5666,date: new Date("2018-09-06T03:44:34.551Z")});
    },

    function(coll) {
        return coll.insert({_id: 19442,str: "firewall Toys",num: 2753,date: new Date("2018-09-06T12:20:24.469Z"),array: [95992,new Date("2018-09-06T16:48:09.538Z"),"Maine alarm",new Date("2018-09-06T09:11:11.003Z"),{_id: 19443,str: "copying SQL",num: 44799,date: new Date("2018-09-06T14:03:53.216Z"),array: [],obj: {_id: 19444,str: "orchestration 24/7 mobile",date: new Date("2018-09-06T18:48:53.839Z"),obj: {}}},[],{_id: 19445,str: "navigate",num: 31326,date: new Date("2018-09-06T03:57:48.409Z"),array: ["database transmit"],obj: {_id: 19446,str: "SMS Bond Markets Units European Composite Unit (EURCO) Spur",num: 13341,date: new Date("2018-09-06T10:53:20.733Z"),array: [],obj: {_id: 19447,num: 75901,array: [{_id: 19448,date: new Date("2018-09-05T20:40:55.525Z"),obj: {}},29323,"infrastructures success Gorgeous Wooden Towels"]}}},new Date("2018-09-06T01:55:27.823Z"),45994,new Date("2018-09-06T14:59:48.286Z")]});
    },

    function(coll) {
        return coll.insert({_id: 19449,str: "Fork utilize extensible",date: new Date("2018-09-06T14:28:02.323Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19450,str: "connecting Berkshire",num: 20876,date: new Date("2018-09-06T15:45:58.784Z"),array: ["Home Loan Account transmit Investment Account",new Date("2018-09-06T03:50:14.271Z"),"Metal",62405,69623,"capability indexing",{_id: 19451,str: "Mobility",num: 64914,date: new Date("2018-09-06T14:10:20.867Z"),obj: {_id: 19452,num: 33403,array: [],obj: {}}},[],new Date("2018-09-05T23:51:16.736Z"),{_id: 19453,date: new Date("2018-09-06T07:57:19.857Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 19454,str: "Corporate SQL",num: 32641,date: new Date("2018-09-06T14:39:22.190Z"),array: [],obj: {_id: 19455,str: "online International",array: ["fresh-thinking bus","Via Junction","Denar supply-chains connecting",72536,{_id: 19456,str: "Bahrain",num: 27417},67458,new Date("2018-09-06T15:16:04.789Z"),"Coordinator cohesive","Cambridgeshire sexy Summit",new Date("2018-09-06T02:21:56.604Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19457,str: "invoice primary models",num: 70048,date: new Date("2018-09-06T10:10:32.423Z"),array: [new Date("2018-09-06T13:07:21.882Z"),new Date("2018-09-06T13:02:46.954Z"),{_id: 19458,num: 58891,date: new Date("2018-09-06T15:27:24.240Z"),array: []},"quantifying",[],"Concrete",16338,"withdrawal",78761,"Auto Loan Account",new Date("2018-09-06T13:41:23.759Z"),"implement neural",82020,{_id: 19459,str: "Czech Koruna",num: 91821,obj: {_id: 19460,str: "indexing",num: 24096,date: new Date("2018-09-06T10:40:52.200Z"),array: [new Date("2018-09-06T06:12:44.143Z"),81929],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19461,str: "Accounts",num: 85086,date: new Date("2018-09-05T20:58:22.294Z"),array: [new Date("2018-09-06T18:41:22.864Z"),"auxiliary Industrial SDD",13339,46892,"Metrics","Coves","Ball transmitting Credit Card Account",new Date("2018-09-06T04:57:15.075Z"),51091,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19462,str: "interface Cross-group e-tailers",num: 31679,array: [80068,86137,{_id: 19463,str: "invoice neutral",num: 40499,date: new Date("2018-09-05T22:11:23.354Z"),array: ["Developer","productize heuristic",new Date("2018-09-06T02:20:00.758Z")],obj: {}},new Date("2018-09-05T23:53:54.220Z"),51444,new Date("2018-09-05T21:34:12.391Z"),51004,"Rustic Frozen Towels Hat action-items",[]],obj: {_id: 19464,str: "groupware invoice",date: new Date("2018-09-06T08:26:29.355Z"),array: [],obj: {_id: 19465,str: "North Korean Won Glen Credit Card Account",obj: {_id: 19466,num: 43927,date: new Date("2018-09-06T17:14:28.939Z"),array: [new Date("2018-09-06T06:36:06.187Z"),[{_id: 19467,str: "Beauty exploit hardware",num: 48904,date: new Date("2018-09-06T18:36:56.257Z"),array: [],obj: {}},"Missouri Industrial Shoes"],{_id: 19468,str: "Nauru",num: 39100,date: new Date("2018-09-06T07:06:03.528Z"),obj: {}},[],new Date("2018-09-06T19:27:45.404Z")]}}}});
    },

    function(coll) {
        return coll.insert({_id: 19469,str: "Administrator clicks-and-mortar Gorgeous Steel Hat",date: new Date("2018-09-06T09:02:58.092Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19470,str: "Utah",num: 41861,date: new Date("2018-09-05T22:14:33.557Z"),array: [43882,new Date("2018-09-06T12:32:24.913Z"),59927,new Date("2018-09-06T18:13:41.335Z"),{_id: 19471,str: "experiences",num: 47370,date: new Date("2018-09-06T13:13:56.268Z"),array: ["Concrete",[],"neural",3434,new Date("2018-09-06T17:12:11.959Z")],obj: {}},[],{_id: 19472,array: ["protocol Ergonomic Steel Bike Brazil",77037,[{_id: 19473,str: "Licensed Concrete",num: 16966,date: new Date("2018-09-05T22:29:41.426Z"),obj: {}},40528,new Date("2018-09-05T21:15:11.479Z")]],obj: {}},new Date("2018-09-06T03:08:11.431Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 19474,str: "payment",date: new Date("2018-09-06T14:52:38.901Z"),array: ["Toys Optimization Cambridgeshire",28611,new Date("2018-09-05T20:06:53.242Z"),24420,{_id: 19475,str: "leading edge",num: 24036,date: new Date("2018-09-06T01:47:17.902Z"),obj: {}},new Date("2018-09-06T05:46:35.101Z"),new Date("2018-09-06T01:04:57.571Z"),new Date("2018-09-06T18:08:49.188Z"),"Intuitive Salad"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19476,str: "Ridges Salad",num: 64978,date: new Date("2018-09-06T01:06:10.809Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19477,str: "Proactive leverage",num: 30226,date: new Date("2018-09-06T19:15:48.093Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19478,str: "Specialist Mexico Auto Loan Account",num: 92204,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19479,str: "Wooden Plaza deposit",num: 85670,array: [33473,new Date("2018-09-06T05:13:41.925Z"),new Date("2018-09-05T22:02:33.762Z"),"budgetary management overriding",28662,37876,[],new Date("2018-09-06T16:20:36.519Z"),"mobile","reboot integrated",{_id: 19480,str: "auxiliary Future",num: 96552,date: new Date("2018-09-06T17:26:50.719Z"),array: [],obj: {}},{_id: 19481,str: "flexibility blue Beauty",num: 60863,date: new Date("2018-09-06T10:58:08.489Z"),array: [],obj: {}},"web-readiness Ergonomic"],obj: {_id: 19482,str: "Forward Accounts Home Loan Account",num: 26566,date: new Date("2018-09-06T08:05:17.811Z"),array: [2178],obj: {_id: 19483,array: [],obj: {_id: 19484,num: 95449,date: new Date("2018-09-06T17:23:41.220Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 19485,str: "Awesome Plastic Salad Pass Sausages",num: 62778,date: new Date("2018-09-05T21:14:26.306Z"),array: [],obj: {_id: 19486,str: "open-source Hong Kong Dollar",num: 55706,date: new Date("2018-09-06T16:14:30.139Z"),array: [45141,new Date("2018-09-06T14:34:53.808Z"),"Rustic Granite Salad Metrics Somalia","Borders strategic",54356,{_id: 19487,str: "bypass Strategist brand",date: new Date("2018-09-06T10:42:34.117Z"),obj: {_id: 19488,str: "Health generating",num: 51326,date: new Date("2018-09-05T20:59:35.258Z"),array: [new Date("2018-09-05T21:52:04.481Z")],obj: {}}},48427,28116,new Date("2018-09-06T19:10:13.426Z"),[],"Dale"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19489,str: "Spring",num: 72439,date: new Date("2018-09-06T15:00:10.384Z"),array: ["North Dakota holistic Bedfordshire",47899,"contextually-based Orchestrator contingency",new Date("2018-09-06T10:15:44.381Z"),new Date("2018-09-06T15:07:23.751Z"),{_id: 19490,date: new Date("2018-09-05T23:21:45.474Z"),array: [],obj: {_id: 19491,str: "Connecticut intranet red",num: 1535,date: new Date("2018-09-06T08:59:54.979Z"),array: [],obj: {_id: 19492,str: "Officer motivating",num: 50828,obj: {}}}},"Customer database Georgia",new Date("2018-09-06T01:29:44.280Z"),74510,4427],obj: {_id: 19493,num: 39803,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19494,str: "Granite",num: 17064,date: new Date("2018-09-05T23:37:23.276Z"),array: [],obj: {_id: 19495,str: "salmon",num: 74345,date: new Date("2018-09-06T04:51:43.719Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19496,str: "Handmade",num: 67168,array: []});
    },

    function(coll) {
        return coll.insert({_id: 19497,str: "quantifying",num: 85168,date: new Date("2018-09-06T15:56:18.015Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19498,str: "sensor proactive Markets",num: 51142,date: new Date("2018-09-06T11:09:28.432Z"),array: ["B2B Sausages Garden","teal Associate Syrian Pound",2658,new Date("2018-09-06T13:54:35.926Z"),44373,new Date("2018-09-06T04:21:21.499Z"),[],65731,{_id: 19499,date: new Date("2018-09-06T03:26:44.454Z"),array: [],obj: {_id: 19500,str: "empower cross-media"}},new Date("2018-09-06T10:45:16.719Z"),new Date("2018-09-05T23:27:04.751Z"),"transmit mission-critical Avon","Cheese Plastic Licensed Fresh Gloves","Progressive Handcrafted Steel Bacon"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19501,num: 77513,date: new Date("2018-09-06T17:06:47.451Z"),array: ["initiatives Row","attitude-oriented",new Date("2018-09-06T19:38:57.886Z"),62436,new Date("2018-09-06T17:43:51.274Z"),20668,76488,"open-source",[],13560],obj: {_id: 19502,str: "Granite Rubber",array: ["firmware Ramp",{_id: 19503,str: "Idaho Gorgeous Frozen Ball Borders",num: 1818,date: new Date("2018-09-06T17:36:43.065Z"),array: [],obj: {}},77547],obj: {_id: 19504,str: "New Hampshire",num: 44066}}});
    },

    function(coll) {
        return coll.insert({_id: 19505,str: "integrate",num: 46620,date: new Date("2018-09-06T02:35:59.760Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19506,str: "Profit-focused Beauty models",num: 37371,date: new Date("2018-09-06T00:10:57.480Z"),array: [],obj: {_id: 19507,str: "Personal Loan Account",date: new Date("2018-09-06T06:18:59.418Z"),array: ["Steel hierarchy",6619,new Date("2018-09-05T23:47:33.535Z"),{_id: 19508,str: "Chicken innovative Garden",num: 12479,array: [[]],obj: {}},new Date("2018-09-06T06:02:15.053Z"),{_id: 19509,str: "Buckinghamshire Human",num: 43587,date: new Date("2018-09-06T14:43:13.804Z"),array: [90622],obj: {}},"reboot Central",53490,72043,43326,"revolutionary Research Computer",37795,new Date("2018-09-06T01:59:06.118Z"),new Date("2018-09-05T21:36:16.579Z")],obj: {_id: 19510,str: "South Carolina models",num: 68554,date: new Date("2018-09-06T08:55:07.684Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 19511,str: "South Africa monitor",num: 95338,date: new Date("2018-09-06T16:52:57.880Z"),array: [],obj: {_id: 19512,str: "Liaison matrix",num: 35281,date: new Date("2018-09-06T10:26:31.467Z"),array: [new Date("2018-09-05T21:28:25.790Z"),"payment","deposit teal compelling",79911,"Bedfordshire",new Date("2018-09-06T09:21:09.761Z"),{_id: 19513,str: "Dynamic Frozen multimedia",num: 61141,obj: {}},[],new Date("2018-09-06T19:31:51.337Z"),12205,[new Date("2018-09-06T14:56:12.871Z"),["Moldovan Leu Gloves withdrawal"],93711,"Incredible Fresh Chair XSS",new Date("2018-09-05T22:04:56.861Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19514,str: "solutions",num: 12034,date: new Date("2018-09-05T21:41:33.608Z"),array: ["time-frame","RSS",new Date("2018-09-05T20:29:44.374Z"),new Date("2018-09-06T02:59:36.268Z"),36783,70868,59867,{_id: 19515,num: 31435,date: new Date("2018-09-05T22:14:35.409Z"),array: [],obj: {}},new Date("2018-09-06T08:19:21.560Z"),{_id: 19516,str: "black Canada Rufiyaa",num: 96979,date: new Date("2018-09-06T03:59:37.432Z"),array: [new Date("2018-09-06T19:35:58.765Z"),[]],obj: {}},"connecting",[{_id: 19517,str: "intuitive",num: 66094,date: new Date("2018-09-06T13:04:37.821Z"),obj: {_id: 19518,str: "cross-media Sausages Mandatory",num: 41094,array: []}},[]]]});
    },

    function(coll) {
        return coll.insert({_id: 19519,str: "Granite",num: 18870,date: new Date("2018-09-06T10:12:04.067Z"),obj: {_id: 19520,date: new Date("2018-09-06T17:20:49.234Z"),array: [],obj: {_id: 19521,str: "Supervisor USB",num: 48460,date: new Date("2018-09-06T18:49:34.620Z"),array: ["override microchip deposit",[new Date("2018-09-06T14:09:38.488Z"),new Date("2018-09-05T20:25:55.337Z"),"Licensed Rubber Ball"],"Industrial protocol",new Date("2018-09-05T20:47:42.440Z"),62011,[new Date("2018-09-06T07:50:51.421Z"),"HDD","Refined copy Checking Account",14933],{_id: 19522,date: new Date("2018-09-06T07:48:35.604Z"),array: [],obj: {_id: 19523,str: "Reverse-engineered",num: 17204,date: new Date("2018-09-05T22:21:06.985Z"),obj: {_id: 19524,str: "solid state facilitate optimal",num: 51614,array: [],obj: {}}}},new Date("2018-09-06T06:43:34.594Z"),[[],12404],26373,88110,{_id: 19525,str: "sensor concept global",num: 85959,array: [],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 19526,num: 31555,date: new Date("2018-09-05T22:48:56.686Z"),array: ["synthesize eco-centric",new Date("2018-09-06T19:51:59.021Z"),"hack Jamaican Dollar invoice",20801,{_id: 19527,str: "bypassing Ouguiya",num: 9252,date: new Date("2018-09-06T01:44:35.253Z"),array: [],obj: {_id: 19528,str: "invoice Auto Loan Account",num: 93030,date: new Date("2018-09-06T18:35:26.376Z"),obj: {_id: 19529,str: "panel Gloves",array: []}}},new Date("2018-09-06T08:26:38.062Z"),"Automotive",45142,new Date("2018-09-06T13:34:35.476Z"),"Central",120,["Auto Loan Account Hawaii Direct"],89320,"Personal Loan Account Fantastic Rubber Tuna Legacy",[[],new Date("2018-09-05T23:52:09.818Z"),94354]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19530,str: "online policy",num: 81679,array: ["HTTP Kwanza connecting",[],11794,new Date("2018-09-06T03:30:56.339Z"),{_id: 19531,str: "empowering copying",num: 88756,date: new Date("2018-09-06T17:40:15.019Z"),array: [],obj: {_id: 19532,str: "transmitter zero administration local area network",num: 31777,date: new Date("2018-09-06T15:06:31.052Z"),array: [],obj: {}}},33959,new Date("2018-09-06T16:04:26.159Z"),33488,new Date("2018-09-05T22:29:06.225Z"),"Multi-channelled","Rustic","payment Florida Wisconsin"]});
    },

    function(coll) {
        return coll.insert({_id: 19533,str: "Unions",num: 95168,date: new Date("2018-09-06T13:18:17.096Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19534,str: "Chilean Peso Unidades de fomento system platforms",num: 15059,date: new Date("2018-09-06T06:31:31.658Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19535,num: 88447,date: new Date("2018-09-05T22:23:14.774Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19536,str: "Phased",num: 97544,date: new Date("2018-09-05T20:01:24.950Z"),array: [new Date("2018-09-06T13:48:21.632Z"),"target virtual",98053,{_id: 19537,str: "Wooden",num: 65922,date: new Date("2018-09-06T19:43:50.470Z"),obj: {_id: 19538,str: "initiatives XML",num: 37988,date: new Date("2018-09-05T20:21:22.175Z"),array: [56474,new Date("2018-09-06T04:14:04.070Z"),"AI Tasty Soft Soap"],obj: {}}},new Date("2018-09-06T01:44:51.602Z"),{_id: 19539,str: "Locks Designer",date: new Date("2018-09-06T08:43:47.837Z"),array: [],obj: {}},"Rubber",{_id: 19540,date: new Date("2018-09-05T20:53:32.489Z"),array: [],obj: {}},new Date("2018-09-06T02:01:34.068Z"),[],new Date("2018-09-06T16:09:20.800Z"),"core Games"]});
    },

    function(coll) {
        return coll.insert({_id: 19541,str: "navigate index multi-byte",num: 9388,date: new Date("2018-09-06T11:41:02.451Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19542,str: "generating approach connect",date: new Date("2018-09-06T05:11:38.100Z"),array: [new Date("2018-09-06T06:44:42.860Z"),"black Tajikistan Borders",337,new Date("2018-09-06T02:08:35.222Z"),new Date("2018-09-06T05:30:41.791Z"),[],{_id: 19543,str: "Savings Account infomediaries",num: 21140,date: new Date("2018-09-06T15:00:52.878Z"),array: [65806,"Buckinghamshire lavender"],obj: {_id: 19544,num: 87109,array: ["SQL deploy Circle",79673,{_id: 19545,num: 17470,array: []}],obj: {_id: 19546,str: "digital revolutionary",num: 19185,date: new Date("2018-09-06T07:33:13.414Z"),obj: {}}}},"Vista scale holistic","back up",new Date("2018-09-06T03:02:34.752Z")]});
    },

    function(coll) {
        return coll.insert({_id: 19547,str: "Applications",num: 8182,date: new Date("2018-09-06T13:50:51.940Z"),array: [new Date("2018-09-06T11:39:14.567Z"),new Date("2018-09-06T16:15:40.026Z"),1890,new Date("2018-09-06T10:24:20.979Z"),[],"Fully-configurable cross-platform","background Fresh","Wooden",25514,{_id: 19548,str: "Ville Analyst",num: 65404,date: new Date("2018-09-05T21:37:54.749Z"),obj: {_id: 19549,str: "Assurance Somalia",num: 96830,date: new Date("2018-09-06T04:55:39.183Z"),array: [],obj: {}}},"Concrete non-volatile"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19550,str: "Health back-end",num: 75930,date: new Date("2018-09-06T07:14:29.339Z"),array: ["Applications",new Date("2018-09-06T09:28:18.629Z"),33029,20310,new Date("2018-09-06T07:39:51.845Z"),[],{_id: 19551,str: "customized Row Accountability",num: 37326,date: new Date("2018-09-06T14:24:23.930Z"),array: [new Date("2018-09-06T00:10:47.090Z")],obj: {}},62937,{_id: 19552,str: "quantify",array: [],obj: {_id: 19553,str: "Bedfordshire",num: 24850,date: new Date("2018-09-05T21:00:11.926Z"),array: [new Date("2018-09-06T08:05:25.521Z"),57640,"THX redundant","New Jersey Kentucky communities"],obj: {}}},73327,[]],obj: {_id: 19554,num: 90509,date: new Date("2018-09-06T02:50:35.097Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19555,str: "RAM Handcrafted synergies",num: 34644,date: new Date("2018-09-06T02:38:05.796Z"),array: ["invoice e-markets overriding",35320,new Date("2018-09-06T04:41:02.778Z"),72032,"SSL next-generation",{_id: 19556,num: 23061,date: new Date("2018-09-06T01:43:25.518Z"),array: [],obj: {}},[new Date("2018-09-06T01:43:16.307Z")],[],21729,"Home Loan Account",13147],obj: {_id: 19557,str: "Refined Steel Pizza Outdoors",num: 17661,date: new Date("2018-09-05T22:40:56.950Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19558,str: "Iraqi Dinar",num: 43220,date: new Date("2018-09-06T19:25:35.215Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19559,str: "invoice",num: 2501,date: new Date("2018-09-06T07:06:23.907Z"),array: [61041,new Date("2018-09-06T09:11:27.440Z"),"Movies Movies Brand",new Date("2018-09-06T18:05:31.156Z"),{_id: 19560,str: "wireless Forward Bedfordshire",num: 85260,date: new Date("2018-09-06T13:43:30.235Z"),array: [],obj: {_id: 19561,num: 67011,array: ["purple Congolese Franc"]}},"Liaison Quality-focused",[],{_id: 19562,str: "protocol methodologies users",num: 63673,date: new Date("2018-09-06T17:39:25.682Z"),obj: {}},"Web",47632],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19563,str: "multi-state Object-based",num: 65051,date: new Date("2018-09-06T14:22:09.813Z"),array: [new Date("2018-09-05T22:13:50.553Z"),"New Hampshire Tools",23893,new Date("2018-09-06T09:15:05.010Z"),{_id: 19564,str: "Illinois digital",date: new Date("2018-09-06T12:34:16.737Z"),array: [91718,new Date("2018-09-06T18:44:46.215Z"),"olive Phased"],obj: {}},[{_id: 19565,str: "Dynamic",num: 41472,date: new Date("2018-09-06T12:06:36.304Z"),array: [],obj: {_id: 19566,num: 62797,array: []}}],48124,new Date("2018-09-06T09:08:05.778Z"),15963,"Auto Loan Account Auto Loan Account overriding",{_id: 19567,num: 24046,obj: {_id: 19568,str: "web-readiness Concrete",num: 67378,date: new Date("2018-09-05T20:16:15.045Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 19569,str: "primary primary",num: 94939,date: new Date("2018-09-06T16:59:28.810Z"),array: [71679,new Date("2018-09-06T13:21:46.098Z"),"Croatia incremental Ergonomic",84886,new Date("2018-09-06T15:50:19.912Z"),"array",[],new Date("2018-09-05T20:10:12.189Z"),["Persistent",[]],{_id: 19570,str: "backing up Rubber synthesizing",date: new Date("2018-09-06T04:08:29.477Z"),obj: {_id: 19571,str: "Egypt",num: 20692,date: new Date("2018-09-06T13:36:35.753Z"),array: []}},{_id: 19572,num: 93475,date: new Date("2018-09-06T18:31:33.564Z"),obj: {_id: 19573,str: "revolutionary",num: 55008,date: new Date("2018-09-05T22:44:57.232Z"),array: [],obj: {_id: 19574,str: "interfaces",num: 36866,array: ["Industrial SMS Tasty",96562],obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19575,str: "Granite payment back-end",num: 1568,date: new Date("2018-09-06T12:17:54.703Z"),array: [],obj: {_id: 19576,str: "deposit Manager",num: 18402,date: new Date("2018-09-06T07:39:44.793Z"),array: [new Date("2018-09-06T03:30:05.381Z"),new Date("2018-09-06T16:22:26.713Z"),34421,"interfaces Rustic Rubber Tuna optical",new Date("2018-09-06T06:49:22.715Z"),{_id: 19577,str: "Seychelles Rupee Checking Account",num: 44330,date: new Date("2018-09-06T10:51:03.852Z"),array: [[],"XSS",72754],obj: {_id: 19578,num: 78250,date: new Date("2018-09-06T12:43:31.726Z"),array: ["transitional Central"],obj: {_id: 19579,str: "Practical application",num: 51602,date: new Date("2018-09-06T12:53:51.099Z"),obj: {}}}},86057,"payment deposit",{ _id: 19580 },"Manat Dam Handmade Concrete Keyboard",50924,[new Date("2018-09-06T15:01:23.465Z"),new Date("2018-09-06T17:10:51.021Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19581,str: "Central Czech Koruna",num: 9193,date: new Date("2018-09-06T02:02:42.217Z"),array: [],obj: {_id: 19582,str: "reboot Union",num: 10930,date: new Date("2018-09-06T11:22:59.204Z"),array: [{_id: 19583,str: "withdrawal",num: 64349,array: [new Date("2018-09-06T01:41:00.362Z"),44146,new Date("2018-09-05T20:09:48.970Z"),"Upgradable Refined Steel Computer"],obj: {_id: 19584,date: new Date("2018-09-06T03:51:34.394Z"),array: []}},10433,"Rustic bluetooth models",{_id: 19585,str: "El Salvador Seychelles Rupee",num: 64574,date: new Date("2018-09-06T12:04:21.863Z"),array: [54075,"Sleek Frozen Car overriding","lavender alarm"],obj: {}},[77754],new Date("2018-09-05T21:20:06.340Z"),61106,"deposit transmitter",new Date("2018-09-06T07:03:52.207Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19586,str: "plum Computer Principal",num: 81321,date: new Date("2018-09-06T07:46:19.322Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19587,str: "transmitting XSS",num: 94858,date: new Date("2018-09-06T13:45:24.140Z"),array: ["purple Vermont initiative",[],new Date("2018-09-06T00:55:03.017Z"),38183,1386,new Date("2018-09-06T02:57:16.831Z"),new Date("2018-09-06T18:17:31.417Z"),41646,14271,{_id: 19588,str: "Refined Plastic Gloves Unbranded Granite Pizza",num: 11256,date: new Date("2018-09-06T04:25:02.476Z"),obj: {_id: 19589,str: "haptic JSON",date: new Date("2018-09-06T01:47:37.030Z"),array: [new Date("2018-09-06T01:44:13.402Z"),"Cambridgeshire",97216,["HTTP Multi-lateral cohesive","withdrawal Analyst Refined"]],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 19590,num: 93268,date: new Date("2018-09-06T10:29:52.031Z"),array: [49452,{_id: 19591,str: "Points Pants",num: 86220,date: new Date("2018-09-05T23:37:34.941Z"),array: [],obj: {}},new Date("2018-09-06T12:12:25.940Z"),56650,"deposit Neck Fantastic Rubber Gloves",[],79856,"primary Representative","Fish initiatives",new Date("2018-09-06T13:08:09.241Z"),"Awesome Cotton Car override",{_id: 19592,str: "panel Architect blue",num: 32343,date: new Date("2018-09-06T15:35:19.724Z"),array: [[]],obj: {_id: 19593,str: "Security JSON",num: 41326,date: new Date("2018-09-06T05:01:21.537Z"),obj: {}}},{_id: 19594,str: "Oklahoma",num: 69500,array: [new Date("2018-09-05T22:46:16.973Z"),32119]},{_id: 19595,str: "Response",num: 53702,array: [],obj: {_id: 19596,date: new Date("2018-09-05T20:45:27.950Z")}}]});
    },

    function(coll) {
        return coll.insert({_id: 19597,str: "generating",num: 43145,array: [new Date("2018-09-06T15:19:41.213Z"),new Date("2018-09-06T07:40:30.983Z"),[new Date("2018-09-05T22:44:03.391Z")],"blue connect interfaces",79181,"Cedi salmon",{_id: 19598,str: "optical Coordinator invoice",date: new Date("2018-09-05T20:23:28.453Z"),array: [],obj: {}},{_id: 19599,str: "magenta",num: 66825,date: new Date("2018-09-06T17:04:45.990Z"),array: [3837,"synthesizing Devolved Burkina Faso",new Date("2018-09-05T21:18:11.404Z"),{_id: 19600,str: "port",num: 94591,obj: {}},37186],obj: {_id: 19601,date: new Date("2018-09-06T18:33:55.305Z"),array: [],obj: {}}},new Date("2018-09-06T13:19:38.610Z"),68173,"Checking Account"]});
    },

    function(coll) {
        return coll.insert({_id: 19602,str: "initiatives",num: 9192,date: new Date("2018-09-06T05:08:26.814Z"),array: ["Cambridgeshire index",65896,71794,[new Date("2018-09-06T17:32:10.457Z"),11220],new Date("2018-09-06T08:28:42.001Z"),new Date("2018-09-05T22:31:15.404Z"),"Communications Salad",[],{_id: 19603,num: 980,date: new Date("2018-09-06T06:39:02.471Z"),array: ["Grocery Profound"],obj: {}},{_id: 19604,num: 83199,date: new Date("2018-09-06T01:46:59.918Z"),array: [],obj: {_id: 19605,str: "gold",date: new Date("2018-09-06T17:54:05.633Z"),obj: {}}},"Mouse customized",new Date("2018-09-06T00:00:01.789Z"),24259]});
    },

    function(coll) {
        return coll.insert({_id: 19606,str: "web-enabled",num: 22724,date: new Date("2018-09-06T01:04:10.874Z"),array: [],obj: {_id: 19607,num: 64507,date: new Date("2018-09-06T15:27:39.438Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19608,str: "Maryland",num: 20146,date: new Date("2018-09-06T03:24:28.832Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19609,str: "strategize calculate Nevada",num: 71459,date: new Date("2018-09-06T17:17:27.132Z"),array: ["Computer","backing up New Taiwan Dollar",new Date("2018-09-06T15:08:27.718Z"),4275,{_id: 19610,str: "communities cyan",num: 6702,date: new Date("2018-09-06T13:11:55.588Z"),obj: {}},new Date("2018-09-06T08:51:01.802Z"),"CFA Franc BCEAO",94382],obj: {_id: 19611,str: "methodologies synergize",date: new Date("2018-09-06T01:08:44.314Z"),array: ["payment array",{_id: 19612,str: "invoice",num: 27680,array: [],obj: {}},68044,"Mill"]}});
    },

    function(coll) {
        return coll.insert({_id: 19613,num: 28548,date: new Date("2018-09-06T00:48:56.630Z"),array: ["disintermediate","1080p",new Date("2018-09-06T11:28:41.477Z"),17156,new Date("2018-09-06T17:22:49.596Z"),16027,new Date("2018-09-05T23:26:41.195Z"),11861,{_id: 19614,str: "digital",num: 98331,date: new Date("2018-09-06T02:18:06.062Z"),obj: {_id: 19615,str: "Manager Corporate Enterprise-wide",array: [{_id: 19616,str: "white Berkshire",date: new Date("2018-09-06T07:25:59.449Z"),array: [],obj: {_id: 19617,str: "integrated",num: 94744,array: [],obj: {_id: 19618,str: "architect Meadows scalable",num: 81492,date: new Date("2018-09-05T21:37:56.689Z"),array: []}}}]}},68132,new Date("2018-09-06T13:12:34.149Z"),"payment Personal Loan Account District"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19619,str: "virtual",num: 90145,date: new Date("2018-09-06T01:13:21.169Z"),array: [new Date("2018-09-06T19:38:13.496Z"),"Bermudian Dollar (customarily known as Bermuda Dollar)",{_id: 19620,str: "Investor Rubber",obj: {_id: 19621,str: "Intranet Surinam Dollar Bike",num: 85256,date: new Date("2018-09-06T09:34:16.537Z"),array: [],obj: {}}},38757,new Date("2018-09-05T20:55:12.043Z"),28953,"Home Loan Account",58122,{_id: 19622,str: "hack Delaware",num: 14202,date: new Date("2018-09-06T18:04:27.626Z"),array: ["Planner Direct Ranch",new Date("2018-09-05T23:48:03.818Z"),{_id: 19623,str: "Garden Berkshire Auto Loan Account",num: 53276,date: new Date("2018-09-06T16:42:19.374Z"),array: [],obj: {}}]},14495,new Date("2018-09-06T16:37:21.395Z"),"contingency Egyptian Pound Self-enabling"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19624,str: "Ville purple Ireland",num: 67383,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19625,str: "6th generation",num: 17819,date: new Date("2018-09-05T21:44:55.421Z"),array: ["Fantastic",[[],new Date("2018-09-06T13:32:28.863Z"),{_id: 19626,num: 98829,date: new Date("2018-09-06T15:01:02.365Z"),array: []},74569],"Central bluetooth","plum matrix",83321,new Date("2018-09-06T15:56:00.207Z"),"port",{_id: 19627,str: "intangible",num: 85129,date: new Date("2018-09-05T20:45:12.063Z"),array: [],obj: {_id: 19628,str: "Outdoors",array: [],obj: {}}},33717,"SAS Honduras",{_id: 19629,str: "Missouri deposit",num: 65076,date: new Date("2018-09-05T22:12:26.998Z"),array: [28154],obj: {_id: 19630,str: "radical policy",num: 68871}}],obj: {_id: 19631,date: new Date("2018-09-06T15:51:32.671Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19632,str: "invoice Money Market Account Bedfordshire",num: 55107,array: [new Date("2018-09-05T21:14:19.407Z"),new Date("2018-09-06T10:11:45.051Z"),[{_id: 19633,str: "scalable",num: 23021,date: new Date("2018-09-06T02:44:25.157Z"),array: [],obj: {}}],new Date("2018-09-06T09:31:24.624Z"),3343,{_id: 19634,str: "Engineer Plains Gorgeous",num: 76175,date: new Date("2018-09-06T10:33:35.577Z"),obj: {_id: 19635,str: "Frozen reboot",array: [],obj: {}}},"RAM mobile Savings Account",2066,"calculating Applications",new Date("2018-09-06T15:19:23.451Z"),"Alabama",new Date("2018-09-06T14:25:55.599Z"),"transparent attitude"],obj: {_id: 19636,str: "New Zealand Dollar",num: 63482,date: new Date("2018-09-06T01:44:42.839Z")}});
    },

    function(coll) {
        return coll.insert({_id: 19637,str: "Streamlined West Virginia",num: 35574,date: new Date("2018-09-06T19:41:38.695Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19638,str: "Pound Sterling",num: 13241,date: new Date("2018-09-06T14:38:50.358Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19639,str: "HDD",num: 38753,date: new Date("2018-09-06T08:11:45.119Z"),array: [],obj: {_id: 19640,str: "Chicken Agent",num: 46515,date: new Date("2018-09-06T13:10:16.482Z"),array: [[47034,"Buckinghamshire visionary open system",32554,81848,new Date("2018-09-06T08:37:44.078Z")],new Date("2018-09-06T09:50:14.555Z"),"Cotton Future clicks-and-mortar","payment indexing",43198,"Developer Markets Plastic",{_id: 19641,str: "card Wooden web services",array: [],obj: {_id: 19642,num: 96550,date: new Date("2018-09-06T06:08:53.345Z"),array: []}},22421,new Date("2018-09-06T06:41:02.274Z"),"e-tailers infrastructure online",new Date("2018-09-06T11:47:22.857Z")],obj: {_id: 19643,str: "lavender",num: 64059,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19644,str: "overriding Cambridgeshire",num: 36143,date: new Date("2018-09-06T18:39:46.768Z"),array: [],obj: {_id: 19645,str: "content mobile",num: 89492,date: new Date("2018-09-05T22:20:16.780Z"),array: [],obj: {_id: 19646,num: 58188,date: new Date("2018-09-06T11:55:27.238Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19647,str: "optical access",num: 75501,date: new Date("2018-09-06T18:04:30.725Z"),array: [new Date("2018-09-06T11:02:06.542Z"),[],38580,"monitor data-warehouse overriding","content-based","Associate",37291,[],new Date("2018-09-06T03:36:25.415Z"),{_id: 19648,str: "navigate Programmable",num: 21302,date: new Date("2018-09-05T22:57:40.433Z"),array: ["Supervisor programming Syrian Pound","Granite Identity Directives",{_id: 19649,str: "virtual",num: 39819,obj: {}},[78571,new Date("2018-09-06T10:12:59.259Z")]]}],obj: {_id: 19650,str: "Netherlands Antilles SSL Investor",num: 57403,date: new Date("2018-09-06T19:27:02.475Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19651,str: "THX Assistant Rustic",num: 68808,array: [28417,54575,new Date("2018-09-06T03:37:31.227Z"),"New Hampshire","compressing neutral back-end",{_id: 19652,str: "Representative deploy Indiana",date: new Date("2018-09-05T22:05:35.770Z"),array: [new Date("2018-09-06T05:49:38.605Z")]},[],new Date("2018-09-06T12:35:56.609Z"),"expedite Codes specifically reserved for testing purposes",30865,"Plastic turquoise",{_id: 19653,str: "Small Granite Hat",num: 40816,date: new Date("2018-09-06T17:05:01.023Z"),array: [],obj: {}},new Date("2018-09-06T09:13:02.451Z"),10567],obj: {_id: 19654,str: "Global Ports SDR",num: 33455,date: new Date("2018-09-06T03:29:31.043Z"),obj: {_id: 19655,str: "Personal Loan Account",num: 48920,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19656,str: "Creative multi-tasking",num: 48281,date: new Date("2018-09-06T15:25:58.964Z"),array: [new Date("2018-09-06T16:29:21.523Z"),"haptic HDD",92567,new Date("2018-09-06T11:03:00.730Z"),new Date("2018-09-06T12:48:41.319Z"),{_id: 19657,str: "Usability South Dakota frame",num: 5869,date: new Date("2018-09-06T04:50:10.444Z"),array: [],obj: {_id: 19658,str: "mint green bandwidth",num: 33629,obj: {_id: 19659,num: 3431,date: new Date("2018-09-06T07:34:31.645Z"),array: [],obj: {_id: 19660,num: 94736,date: new Date("2018-09-06T09:20:19.516Z"),array: [{_id: 19661,str: "infrastructure bandwidth Steel",date: new Date("2018-09-06T12:46:01.930Z")},[49554,"Savings Account Tools",new Date("2018-09-06T02:49:08.868Z")]],obj: {}}}}},{_id: 19662,str: "Nicaragua synthesize",num: 84049,date: new Date("2018-09-06T12:02:24.877Z"),array: []},29500,new Date("2018-09-06T17:41:08.181Z"),[],"Accounts"]});
    },

    function(coll) {
        return coll.insert({_id: 19663,num: 16298,date: new Date("2018-09-06T19:41:34.405Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19664,str: "blue 1080p",num: 80851,date: new Date("2018-09-06T08:17:00.163Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19665,num: 77254,date: new Date("2018-09-05T21:49:43.329Z"),array: [],obj: {_id: 19666,str: "partnerships Planner",array: [new Date("2018-09-06T01:33:38.508Z"),88412,33817,"Colombian Peso Unidad de Valor Real Burkina Faso Pennsylvania",new Date("2018-09-06T07:30:01.501Z"),"Cambridgeshire compress",{_id: 19667,str: "bypass Networked",num: 87795,date: new Date("2018-09-06T02:15:53.284Z"),obj: {_id: 19668,str: "Passage Ergonomic Metal Salad",num: 71270,date: new Date("2018-09-06T14:43:06.960Z"),array: []}},new Date("2018-09-06T15:25:50.432Z"),[[]],"cross-platform",33628,{_id: 19669,num: 93105,array: [],obj: {}},72974,{_id: 19670,str: "back-end neural",date: new Date("2018-09-06T18:45:10.423Z")}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19671,str: "Ergonomic Cotton Bacon",num: 40792,date: new Date("2018-09-06T11:45:06.538Z"),array: [new Date("2018-09-06T01:47:59.897Z"),11010,"digital collaboration","Fundamental",[],new Date("2018-09-06T02:47:59.483Z"),"Court Mouse","Developer",2334,[],68232,84327,{_id: 19672,str: "violet Corporate",num: 39553,date: new Date("2018-09-06T16:11:09.925Z"),array: [90548,{_id: 19673,num: 64954,array: [],obj: {}}]}],obj: {_id: 19674,str: "Handmade Tugrik",num: 76834,date: new Date("2018-09-05T21:32:09.638Z"),obj: {_id: 19675,num: 31220,date: new Date("2018-09-05T20:21:59.507Z"),obj: {_id: 19676,str: "Peru reboot",date: new Date("2018-09-06T06:59:02.094Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 19677,str: "architectures Spur tertiary",num: 18968,date: new Date("2018-09-06T18:59:27.185Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19678,str: "Bike",date: new Date("2018-09-06T12:39:39.865Z"),array: ["Cyprus",new Date("2018-09-05T23:34:29.078Z"),new Date("2018-09-06T14:57:04.673Z"),new Date("2018-09-06T05:50:45.235Z"),40867,"plum Liaison incentivize",10805,50088,{_id: 19679,str: "Michigan front-end supply-chains",num: 93737,date: new Date("2018-09-06T01:41:12.184Z"),obj: {_id: 19680,num: 11943,date: new Date("2018-09-06T12:39:02.837Z"),array: [],obj: {_id: 19681,str: "standardization invoice",num: 624,date: new Date("2018-09-06T11:42:28.309Z")}}},81762]});
    },

    function(coll) {
        return coll.insert({_id: 19682,str: "logistical Small Frozen Bacon Saint Vincent and the Grenadines",num: 81620,date: new Date("2018-09-06T11:30:19.093Z"),array: [],obj: {_id: 19683,str: "Organized invoice Executive",num: 18073,date: new Date("2018-09-06T02:06:32.928Z"),array: ["Orchestrator",35999,25416,new Date("2018-09-06T06:46:18.486Z"),new Date("2018-09-06T03:06:23.532Z"),"Home Loan Account","withdrawal Licensed Agent",3530,new Date("2018-09-06T00:21:07.759Z"),{_id: 19684,num: 9098,date: new Date("2018-09-06T04:22:54.560Z"),array: [],obj: {}},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19685,str: "primary",num: 30521,date: new Date("2018-09-05T21:59:16.150Z"),array: [new Date("2018-09-05T20:48:14.112Z"),{_id: 19686,str: "Ergonomic Fresh Hat Practical",num: 61511,date: new Date("2018-09-06T09:26:14.157Z"),array: ["Usability Angola",80438,"capacitor Bike Indiana",10031,new Date("2018-09-05T20:10:15.309Z")],obj: {}},"Montenegro",77591,"Representative Latvia Assistant",81446,new Date("2018-09-06T11:53:29.692Z"),[],new Date("2018-09-06T14:01:24.515Z"),25939],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19687,str: "turquoise override Cayman Islands Dollar",num: 36605,date: new Date("2018-09-06T17:06:01.304Z"),array: [],obj: {_id: 19688,num: 73105,date: new Date("2018-09-06T12:46:58.583Z")}});
    },

    function(coll) {
        return coll.insert({_id: 19689,num: 16780,date: new Date("2018-09-06T01:33:15.978Z"),array: [],obj: {_id: 19690,str: "Steel",num: 50994,date: new Date("2018-09-06T10:28:22.045Z"),array: [new Date("2018-09-06T10:37:16.827Z"),"Plastic JBOD bypassing","capacitor",[87138,"granular",14230,new Date("2018-09-06T01:53:40.308Z"),54101,new Date("2018-09-06T18:25:53.639Z"),"PNG",new Date("2018-09-06T07:59:39.715Z")],{_id: 19691,str: "eco-centric",array: [],obj: {}},{_id: 19692,str: "Gorgeous Web Tasty Rubber Chair",num: 10970,date: new Date("2018-09-06T07:26:28.096Z"),array: [],obj: {}},"Group Investment Account Facilitator",new Date("2018-09-06T04:29:09.975Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19693,str: "monitor EXE Table",num: 46870,date: new Date("2018-09-06T06:01:21.331Z"),array: [37015,"Grocery blue Rustic Rubber Pants",59637,new Date("2018-09-06T01:40:55.886Z"),"compressing hacking Movies",new Date("2018-09-06T00:22:56.962Z"),46903,[new Date("2018-09-06T08:04:32.668Z"),new Date("2018-09-05T21:22:35.575Z"),"bus SAS",52448],[],{_id: 19694,str: "Health primary connect",num: 97480,date: new Date("2018-09-06T01:35:50.350Z"),array: ["plum Soft"],obj: {}},"Personal Loan Account"]});
    },

    function(coll) {
        return coll.insert({_id: 19695,str: "United States Minor Outlying Islands quantify",num: 43367,date: new Date("2018-09-06T09:36:02.372Z"),array: ["proactive Assistant",[],new Date("2018-09-05T20:59:17.946Z"),49871,54974,["deposit","Hawaii Cambridgeshire disintermediate",new Date("2018-09-06T14:13:49.150Z"),{_id: 19696,str: "Savings Account",num: 93077,date: new Date("2018-09-05T21:07:12.119Z"),array: [],obj: {}},{_id: 19697,str: "heuristic Representative payment",array: [21990,"Convertible Marks West Virginia Hawaii",new Date("2018-09-06T14:21:16.426Z"),50631],obj: {_id: 19698,str: "input",date: new Date("2018-09-06T16:11:44.825Z"),array: [new Date("2018-09-06T19:21:51.051Z")],obj: {}}}],89210,new Date("2018-09-06T08:32:45.990Z"),68432]});
    },

    function(coll) {
        return coll.insert({_id: 19699,str: "Direct neural",num: 87753,date: new Date("2018-09-06T18:54:05.001Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19700,str: "quantify Codes specifically reserved for testing purposes indigo",num: 65296,date: new Date("2018-09-06T06:27:33.509Z"),array: ["mindshare payment data-warehouse",1727,new Date("2018-09-06T19:27:53.991Z"),{_id: 19701,str: "Afghanistan program",date: new Date("2018-09-06T03:17:21.223Z"),array: [],obj: {}},16549,"Electronics Dynamic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19702,str: "invoice flexibility",num: 32493,array: ["Shoes",new Date("2018-09-06T10:04:08.884Z"),52500,33063,"payment",new Date("2018-09-06T13:43:50.768Z"),{_id: 19703,str: "Gloves neural",date: new Date("2018-09-06T17:03:29.832Z"),array: [11863,new Date("2018-09-05T23:36:35.743Z"),"Bike user-centric haptic",new Date("2018-09-05T23:53:22.928Z"),[]],obj: {}},new Date("2018-09-06T05:50:49.897Z"),{_id: 19704,str: "Cotton",num: 33817,date: new Date("2018-09-06T12:58:45.397Z"),array: [new Date("2018-09-06T12:29:17.261Z")]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19705,str: "deliverables",num: 29212,date: new Date("2018-09-06T16:36:24.580Z"),array: [69011,"Metal","Small Fresh Pants Branding",new Date("2018-09-06T10:42:00.380Z"),new Date("2018-09-06T06:44:35.946Z"),64720,"Chair",61196,new Date("2018-09-06T08:53:04.880Z"),[],{_id: 19706,num: 37741,date: new Date("2018-09-05T21:07:48.900Z"),array: [],obj: {_id: 19707,str: "didactic",num: 80647,date: new Date("2018-09-06T07:29:39.471Z"),array: [63349],obj: {}}},"copy"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19708,str: "Administrator",num: 32057,date: new Date("2018-09-06T10:07:27.309Z"),array: ["Mouse Savings Account",new Date("2018-09-06T15:49:15.686Z"),[],39166,new Date("2018-09-06T12:16:08.407Z"),36958,[],new Date("2018-09-06T12:18:35.165Z"),"Small Cotton Pants deposit",{_id: 19709,str: "Interactions",array: [81841,"Oval"],obj: {_id: 19710,num: 85423,date: new Date("2018-09-06T06:56:30.410Z"),obj: {}}},52549,32034,"Synergized Jordanian Dinar",new Date("2018-09-06T03:02:07.418Z"),40330],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19711,str: "Gorgeous",num: 67469,date: new Date("2018-09-06T06:38:54.448Z"),array: [],obj: {_id: 19712,str: "B2B calculate",num: 23727,date: new Date("2018-09-06T14:17:08.376Z"),array: [],obj: {_id: 19713,str: "Sports",num: 59801,date: new Date("2018-09-06T08:26:27.487Z"),array: ["workforce Global Forward",62369,98273,"SAS Phased Customer-focused",new Date("2018-09-06T02:07:13.496Z"),16475,"Michigan Kids",new Date("2018-09-06T11:29:42.595Z"),"gold Bedfordshire payment",{_id: 19714,date: new Date("2018-09-06T16:48:51.775Z"),obj: {}},62961],obj: {_id: 19715,str: "Incredible"}}}});
    },

    function(coll) {
        return coll.insert({_id: 19716,str: "United States Minor Outlying Islands Money Market Account",num: 6705,date: new Date("2018-09-06T09:22:08.348Z"),array: [new Date("2018-09-06T00:46:59.405Z"),93284,{_id: 19717,str: "Sleek array",num: 16273,date: new Date("2018-09-06T04:04:21.898Z"),array: ["deposit",47869,new Date("2018-09-06T18:48:08.340Z"),{_id: 19718,str: "Cambodia reboot",num: 6678,date: new Date("2018-09-06T09:27:07.023Z"),array: [],obj: {}},"withdrawal Row Steel",new Date("2018-09-06T19:46:06.713Z"),{_id: 19719,num: 3605,date: new Date("2018-09-06T06:16:12.198Z"),array: [],obj: {_id: 19720,str: "Intelligent Pakistan Rupee Road",num: 84612,date: new Date("2018-09-06T08:03:05.460Z"),array: [],obj: {}}},17445,"Lao People's Democratic Republic Toys"],obj: {_id: 19721,str: "Common Licensed Soft Soap Ball"}},new Date("2018-09-06T09:26:11.510Z"),[],[28668]]});
    },

    function(coll) {
        return coll.insert({_id: 19722,str: "card communities generating",num: 12593,array: [new Date("2018-09-06T00:39:25.111Z"),19384,"CSS analyzer","Handmade Wooden Soap",{_id: 19723,str: "indigo Refined Fresh Bacon",num: 61882,date: new Date("2018-09-06T09:19:55.030Z"),array: [[new Date("2018-09-05T20:32:46.850Z"),49574,"digital Arkansas"]],obj: {}},"Iowa initiatives database",[],{_id: 19724,str: "parse",num: 30542,date: new Date("2018-09-06T10:04:07.086Z"),array: []},new Date("2018-09-06T08:41:24.679Z"),"Soft Director back-end",{_id: 19725,str: "back-end Overpass Rufiyaa",num: 84480,date: new Date("2018-09-06T12:46:55.691Z"),array: [],obj: {}},37462,97263,[new Date("2018-09-05T21:23:31.193Z")]],obj: {_id: 19726,num: 22538,date: new Date("2018-09-06T03:13:45.806Z"),array: [],obj: {_id: 19727,str: "toolset SDD",array: [],obj: {_id: 19728,date: new Date("2018-09-06T08:37:31.752Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 19729,str: "bypass Sleek Metal Sausages Central",num: 18953,date: new Date("2018-09-06T07:45:40.408Z"),array: [67832,new Date("2018-09-05T21:29:42.653Z"),"Rubber AI",46761,"Global",{_id: 19730,str: "Sleek deposit Belarussian Ruble",num: 81058,date: new Date("2018-09-06T06:21:33.902Z"),array: [84401,new Date("2018-09-06T01:38:40.548Z")],obj: {}},68618,new Date("2018-09-06T03:02:41.385Z"),"quantify cyan",new Date("2018-09-06T16:03:24.790Z"),17225,"Plastic pricing structure","index Money Market Account Intelligent"]});
    },

    function(coll) {
        return coll.insert({_id: 19731,str: "Chicken mobile next generation",num: 43124,date: new Date("2018-09-06T06:31:53.914Z"),array: ["program",94675,new Date("2018-09-06T06:19:29.778Z"),new Date("2018-09-06T13:29:33.628Z"),[new Date("2018-09-05T22:20:20.727Z"),new Date("2018-09-06T10:53:45.543Z"),73449],50337,78234,"Administrator",{_id: 19732,str: "purple",num: 54580,date: new Date("2018-09-05T21:19:34.103Z"),array: [],obj: {_id: 19733,str: "Chips",num: 98853,date: new Date("2018-09-05T22:23:34.557Z"),array: [],obj: {_id: 19734,num: 37590,date: new Date("2018-09-06T04:49:15.886Z")}}},{_id: 19735,date: new Date("2018-09-06T16:55:00.625Z"),array: [],obj: {_id: 19736,str: "XML",num: 3249,date: new Date("2018-09-06T07:31:43.922Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 19737,str: "Maine",num: 52348,date: new Date("2018-09-06T08:16:11.116Z"),array: [],obj: {_id: 19738,str: "framework Cheese",num: 69942,date: new Date("2018-09-06T12:43:31.383Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19739,str: "Frozen Vision-oriented",num: 56252,date: new Date("2018-09-06T07:35:58.840Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19740,str: "algorithm navigating",num: 63810,date: new Date("2018-09-05T23:13:59.659Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19741,str: "Rubber",num: 29217,date: new Date("2018-09-06T06:24:13.580Z"),array: [],obj: {_id: 19742,str: "Product Canada",num: 96072,date: new Date("2018-09-06T01:00:17.437Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19743,num: 86098,date: new Date("2018-09-06T09:55:54.828Z"),array: [new Date("2018-09-06T00:24:26.310Z"),92895,"Kids","Interactions",58118,new Date("2018-09-06T08:19:02.579Z"),new Date("2018-09-06T04:28:40.638Z"),87529,[],new Date("2018-09-05T23:51:20.418Z"),{_id: 19744,str: "Books",date: new Date("2018-09-06T11:30:43.786Z"),array: [],obj: {_id: 19745,str: "Tunnel",num: 70344,date: new Date("2018-09-05T21:04:20.073Z"),array: ["SDD",42645],obj: {}}},"tan",{_id: 19746,str: "online overriding",num: 31300,date: new Date("2018-09-06T06:23:52.421Z"),obj: {_id: 19747,str: "Pine",array: [65048],obj: {}}},["Handmade strategize Berkshire"]],obj: {_id: 19748,str: "Money Market Account firewall Computer",num: 44206,date: new Date("2018-09-06T12:51:43.648Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 19749,str: "Plaza Flats",num: 1699,date: new Date("2018-09-06T14:55:45.765Z"),array: [],obj: {_id: 19750,str: "integrated",num: 56940,date: new Date("2018-09-05T23:00:31.559Z"),array: [new Date("2018-09-06T02:31:41.506Z"),"Intelligent",24037,87265,new Date("2018-09-06T01:43:04.197Z"),"USB","Accounts Summit",69805,new Date("2018-09-06T08:02:26.365Z"),"copying Shoes Cambridgeshire",62993,{_id: 19751,str: "supply-chains",date: new Date("2018-09-06T03:42:09.209Z"),array: [[],new Date("2018-09-06T11:36:29.931Z")],obj: {}}],obj: {_id: 19752,num: 45831,date: new Date("2018-09-06T13:08:17.886Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 19753,str: "Expressway Kina payment",num: 38101,date: new Date("2018-09-06T02:26:03.813Z"),array: [46682,new Date("2018-09-06T17:14:17.854Z"),"mission-critical Mobility",[],11680,new Date("2018-09-06T13:06:50.756Z"),"1080p hard drive",79218],obj: {_id: 19754,str: "strategize",num: 94906,date: new Date("2018-09-06T08:07:54.424Z"),array: ["harness",new Date("2018-09-06T06:18:58.680Z"),74522,93647,{_id: 19755,str: "Checking Account Wooden panel",num: 76411,date: new Date("2018-09-05T20:10:56.331Z"),array: [],obj: {}},"streamline"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19756,str: "Personal Loan Account",num: 29060,date: new Date("2018-09-06T02:54:03.555Z"),array: [],obj: {_id: 19757,str: "American Samoa Salad Avon",num: 4659,date: new Date("2018-09-06T11:15:04.741Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19758,str: "pink Division disintermediate",date: new Date("2018-09-06T09:30:41.510Z"),array: [[],"Avon reciprocal",new Date("2018-09-06T14:19:13.930Z"),50929,"wireless Mouse",{_id: 19759,str: "Awesome coherent",num: 55914,date: new Date("2018-09-06T18:48:56.327Z"),array: ["Home Loan Account implement Sports",{_id: 19760,str: "FTP",num: 53764,obj: {}}],obj: {_id: 19761,str: "Technician navigating Home Loan Account",num: 40494,date: new Date("2018-09-06T06:20:32.051Z"),array: [],obj: {}}},20568,"synthesizing",53461,28416,new Date("2018-09-06T05:30:23.106Z"),[1931,43950]]});
    },

    function(coll) {
        return coll.insert({_id: 19762,str: "Syrian Pound",num: 62007,date: new Date("2018-09-06T14:19:56.871Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19763,str: "Salad Computer West Virginia",num: 12204,date: new Date("2018-09-05T23:37:43.671Z"),obj: {_id: 19764,str: "Chief",num: 86625,array: ["Designer Home Concrete","card Baby cross-media",new Date("2018-09-06T06:29:23.180Z"),87361,76284,new Date("2018-09-06T01:35:48.998Z"),"Summit salmon",{_id: 19765,str: "Alabama innovate",num: 12817,date: new Date("2018-09-06T12:54:12.476Z"),array: []},[],[new Date("2018-09-06T03:07:09.245Z")],{_id: 19766,str: "New Leu Rubber",num: 59299,array: []},"firmware","Mouse protocol lime",new Date("2018-09-06T18:39:02.195Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19767,str: "District Kids Licensed Fresh Soap",num: 40282,date: new Date("2018-09-06T00:21:30.405Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19768,str: "Handmade Rubber Hat Specialist",num: 75976,date: new Date("2018-09-06T12:35:21.276Z"),array: [new Date("2018-09-05T21:57:42.263Z"),84466,"copying",66976,[],new Date("2018-09-06T18:27:31.701Z")],obj: {_id: 19769,str: "transmitter",num: 8826,array: ["cutting-edge Tasty withdrawal",[],"pink transmit navigate","Profound Avon",{_id: 19770,str: "national",num: 25363,date: new Date("2018-09-06T06:07:41.438Z"),array: [43197],obj: {}},new Date("2018-09-06T11:59:47.496Z"),{_id: 19771,str: "Liaison Plastic",num: 75132,date: new Date("2018-09-06T15:13:58.452Z"),array: []},[new Date("2018-09-06T16:45:03.387Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19772,str: "Berkshire Credit Card Account",num: 79201,date: new Date("2018-09-06T11:19:38.169Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19773,str: "Stravenue plum Car",date: new Date("2018-09-06T09:12:47.719Z"),array: ["SMS extensible synthesizing",new Date("2018-09-06T00:19:18.198Z"),63777,new Date("2018-09-05T22:23:03.724Z"),"Representative Practical Cotton Computer Configuration",[],{_id: 19774,num: 8531,date: new Date("2018-09-06T06:06:43.630Z"),array: [],obj: {}},new Date("2018-09-06T07:06:04.652Z"),74731,"Strategist override International","copying Villages",{_id: 19775,date: new Date("2018-09-06T00:08:14.593Z"),array: [59275,57827],obj: {}},new Date("2018-09-05T23:43:23.209Z")],obj: {_id: 19776,str: "system data-warehouse",num: 81911,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19777,str: "hack Turkish Lira Money Market Account",num: 85901,date: new Date("2018-09-06T10:03:09.278Z"),array: [42057,"Steel",new Date("2018-09-06T19:25:51.167Z"),"Customer Money Market Account","Arkansas Directives",{_id: 19778,str: "Applications",num: 14453,date: new Date("2018-09-06T06:12:35.132Z"),array: [new Date("2018-09-05T20:02:48.956Z")]},new Date("2018-09-06T02:47:20.958Z"),26886,{_id: 19779,str: "adapter",num: 55467,date: new Date("2018-09-06T02:16:29.253Z"),array: [],obj: {_id: 19780,str: "Plastic",obj: {}}},99387,"invoice bypassing",56749,"ivory generating"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19781,str: "Sausages parse Home",num: 93326,date: new Date("2018-09-06T15:16:16.618Z"),array: [],obj: {_id: 19782,str: "Island",num: 48289,date: new Date("2018-09-06T02:41:55.829Z"),array: [59813,new Date("2018-09-06T19:19:57.187Z"),"hard drive XSS",6839,{_id: 19783,str: "Cloned Norway panel",num: 84191,date: new Date("2018-09-06T10:40:37.940Z"),obj: {_id: 19784,str: "Throughway Associate",date: new Date("2018-09-05T22:34:30.960Z"),array: [new Date("2018-09-05T22:38:43.532Z")],obj: {}}},"Fantastic Tennessee Licensed Plastic Shirt",37900,17666],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19785,str: "neural National incremental",num: 601,date: new Date("2018-09-06T06:47:22.332Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19786,str: "Specialist",num: 75828,date: new Date("2018-09-06T16:12:14.934Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19787,str: "Unbranded Steel Shoes Fish",date: new Date("2018-09-06T02:35:38.455Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19788,str: "Rubber",num: 37366,date: new Date("2018-09-06T15:05:10.851Z"),array: ["neural card",new Date("2018-09-06T15:51:26.484Z"),"Sleek",[],63886,new Date("2018-09-06T10:15:19.953Z"),"reciprocal fuchsia",65299,new Date("2018-09-05T20:58:22.655Z"),11638],obj: {_id: 19789,num: 73468,date: new Date("2018-09-06T18:44:44.442Z"),obj: {_id: 19790,str: "SQL Applications",num: 66192,date: new Date("2018-09-06T14:31:59.005Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19791,str: "haptic",num: 77835,date: new Date("2018-09-06T08:45:26.178Z"),array: ["Division Paradigm Fresh",65737,979,[],"Small Metal Mouse",new Date("2018-09-06T07:19:29.367Z"),new Date("2018-09-06T03:23:24.404Z"),new Date("2018-09-05T21:38:41.527Z"),"Bedfordshire Investment Account"],obj: {_id: 19792,str: "Savings Account",date: new Date("2018-09-05T21:59:07.300Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19793,str: "Clothing solid state Squares",num: 51269,date: new Date("2018-09-05T23:04:52.586Z"),array: [new Date("2018-09-05T21:05:36.351Z"),3956,96108,"azure Checking Account quantifying","Awesome Wooden Bacon","Focused",new Date("2018-09-05T22:38:21.656Z"),44836,{_id: 19794,date: new Date("2018-09-06T15:27:55.792Z"),array: [],obj: {}},[],{_id: 19795,str: "ivory Cotton e-commerce",array: [],obj: {_id: 19796,str: "compress Auto Loan Account Representative",num: 41307,date: new Date("2018-09-06T16:04:23.911Z"),obj: {}}},"Avon",[["Chief withdrawal Indiana"]],new Date("2018-09-06T18:35:05.979Z")],obj: {_id: 19797,str: "strategy 1080p USB",num: 17752,date: new Date("2018-09-06T06:55:48.151Z"),array: [new Date("2018-09-06T15:13:58.846Z"),"Fresh capacitor wireless","generate"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19798,str: "Fresh",num: 9635,date: new Date("2018-09-06T05:28:51.601Z"),array: [],obj: {_id: 19799,str: "visualize",num: 41876,date: new Date("2018-09-06T11:35:57.357Z"),array: ["Internal",53536,new Date("2018-09-06T01:43:02.307Z"),80429,["Cheese",new Date("2018-09-06T11:31:34.683Z")],new Date("2018-09-06T12:23:50.445Z"),71680,{_id: 19800,str: "flexibility",num: 2594,array: [],obj: {}},new Date("2018-09-06T01:28:58.266Z"),"XSS Books",{_id: 19801,date: new Date("2018-09-06T10:41:18.790Z"),obj: {}}],obj: {_id: 19802,str: "SDD",num: 19001,date: new Date("2018-09-06T19:15:47.570Z"),obj: {_id: 19803,num: 75144,date: new Date("2018-09-06T14:46:03.898Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 19804,str: "Direct deposit",num: 82863,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19805,str: "hack Ergonomic",num: 81302,date: new Date("2018-09-06T19:54:33.352Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19806,str: "Operative niches unleash",num: 81077,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19807,str: "Health",num: 57415,date: new Date("2018-09-06T19:49:55.083Z"),array: [],obj: {_id: 19808,str: "Kyat",num: 7816,date: new Date("2018-09-06T08:37:08.778Z"),array: ["Shore viral infomediaries",{_id: 19809,str: "Customer",num: 79511,date: new Date("2018-09-06T17:53:33.150Z"),array: [{_id: 19810,num: 56172,date: new Date("2018-09-06T10:01:48.039Z"),array: [{_id: 19811,str: "Frozen",obj: {}},new Date("2018-09-05T22:10:34.797Z"),"Uzbekistan Sum interface"],obj: {}},"secured line Stravenue"]},6082,5562,new Date("2018-09-06T19:03:37.519Z"),"feed Manager",28769,{_id: 19812,str: "Iraqi Dinar synthesize",num: 38108,date: new Date("2018-09-06T08:14:14.885Z"),array: [],obj: {_id: 19813,str: "Adaptive",obj: {_id: 19814,num: 32343,array: [],obj: {_id: 19815,date: new Date("2018-09-06T04:30:03.218Z"),array: []}}}},[],new Date("2018-09-06T15:41:23.777Z"),17518]}});
    },

    function(coll) {
        return coll.insert({_id: 19816,date: new Date("2018-09-05T21:20:16.072Z"),array: [new Date("2018-09-06T11:08:22.557Z"),"purple Open-architected Tokelau",new Date("2018-09-06T09:36:16.638Z"),4284,new Date("2018-09-06T08:32:55.768Z"),74068,"feed",new Date("2018-09-06T08:47:34.699Z"),{_id: 19817,str: "synthesizing",num: 4130,date: new Date("2018-09-06T09:06:47.787Z"),array: [50340,"gold withdrawal Beauty"]},"withdrawal North Dakota",{_id: 19818,str: "supply-chains",obj: {}},22950],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19819,str: "mesh Shirt",num: 78458,date: new Date("2018-09-06T15:26:46.473Z"),obj: {_id: 19820,num: 80171,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19821,str: "Fresh Cook Islands card",num: 620,date: new Date("2018-09-06T01:11:33.381Z"),array: [20139,24721,[new Date("2018-09-06T05:58:39.954Z"),"Engineer Lebanese Pound",new Date("2018-09-06T16:08:58.166Z"),"Lights Usability",new Date("2018-09-06T16:20:50.470Z"),{_id: 19822,str: "Overpass Berkshire",num: 26800,array: [],obj: {}}],22369,{_id: 19823,str: "Auto Loan Account model Maine",date: new Date("2018-09-06T09:57:04.314Z"),array: [new Date("2018-09-06T05:41:01.299Z"),"Frozen",63360],obj: {_id: 19824,num: 33080,date: new Date("2018-09-06T15:44:38.779Z"),obj: {_id: 19825,str: "Dynamic",date: new Date("2018-09-05T21:11:57.169Z"),array: [new Date("2018-09-06T02:42:54.236Z")],obj: {_id: 19826,str: "frictionless Congo",num: 70817,date: new Date("2018-09-06T13:39:46.734Z"),array: []}}}},[],3816,{_id: 19827,str: "Coordinator Integrated transmitting"},[],"Investor azure red"]});
    },

    function(coll) {
        return coll.insert({_id: 19828,str: "Intelligent Steel Sausages systems",num: 82679,date: new Date("2018-09-06T08:02:00.428Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19829,str: "Plastic Soft Mountains",num: 19794,date: new Date("2018-09-06T16:25:57.405Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19830,str: "Wisconsin backing up bifurcated",num: 40735,date: new Date("2018-09-06T01:00:12.945Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19831,str: "Inlet matrices Division",num: 96789,date: new Date("2018-09-06T15:39:36.438Z"),array: [new Date("2018-09-06T07:55:14.739Z"),8761,{_id: 19832,str: "matrices",num: 3421,date: new Date("2018-09-06T17:26:12.413Z"),obj: {_id: 19833,str: "Facilitator",date: new Date("2018-09-06T15:14:50.186Z"),array: ["Incredible Wooden Tuna Lebanese Pound Practical Fresh Sausages",87930,"maroon",{_id: 19834,str: "upward-trending",array: [],obj: {}},92234],obj: {}}},new Date("2018-09-06T19:26:34.359Z"),90513,new Date("2018-09-06T13:04:46.382Z"),"Intelligent","Berkshire",31076,84612,new Date("2018-09-06T01:25:57.514Z")],obj: {_id: 19835,num: 15827,date: new Date("2018-09-06T07:54:37.105Z")}});
    },

    function(coll) {
        return coll.insert({_id: 19836,str: "Buckinghamshire Pizza",num: 8409,date: new Date("2018-09-05T22:22:33.752Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19837,date: new Date("2018-09-06T04:52:23.699Z"),array: [],obj: {_id: 19838,str: "wireless",num: 35385,date: new Date("2018-09-06T09:46:36.093Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19839,str: "Philippine Peso",num: 97362,date: new Date("2018-09-06T10:37:32.791Z"),array: [56946,new Date("2018-09-05T23:18:49.812Z"),"Coves",[],{_id: 19840,str: "Islands New Caledonia",num: 24563,date: new Date("2018-09-06T00:45:27.329Z"),array: [],obj: {}},15627,new Date("2018-09-06T02:44:42.105Z"),new Date("2018-09-06T19:34:01.452Z"),"calculating zero administration",46208,"parsing leverage 1080p",["Unbranded 1080p",new Date("2018-09-06T02:27:43.437Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19841,str: "Mobility",num: 96205,date: new Date("2018-09-06T12:00:01.591Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19842,str: "Fords 24/365 disintermediate",num: 96602,date: new Date("2018-09-06T08:16:55.399Z"),array: ["XSS Administrator",{_id: 19843,str: "Jamaican Dollar",num: 35400,date: new Date("2018-09-06T13:20:35.408Z"),array: [new Date("2018-09-06T12:02:05.973Z"),10116,97249,[],[79058],new Date("2018-09-05T21:51:16.626Z"),"Cambridgeshire Garden","neural"],obj: {_id: 19844,str: "Rubber",num: 27255,date: new Date("2018-09-06T05:27:17.326Z"),obj: {}}},74295,{_id: 19845,date: new Date("2018-09-06T06:30:08.318Z"),array: [],obj: {_id: 19846,str: "orange disintermediate",num: 9982,date: new Date("2018-09-06T03:48:23.084Z"),array: [8911,"Outdoors Engineer"],obj: {_id: 19847,str: "Engineer",num: 89408,array: [],obj: {}}}},new Date("2018-09-06T06:19:21.390Z"),"Handmade Home Tasty Frozen Computer","Avon Incredible transmit",new Date("2018-09-06T09:28:57.386Z")]});
    },

    function(coll) {
        return coll.insert({_id: 19848,str: "program Handmade",num: 37079,date: new Date("2018-09-06T01:49:04.696Z"),array: ["Andorra Ergonomic",{_id: 19849,str: "Awesome Pa'anga",date: new Date("2018-09-05T22:32:50.502Z"),array: [[]],obj: {}},new Date("2018-09-05T21:23:20.794Z"),[],new Date("2018-09-06T08:27:01.361Z"),44653,"Jamaica","Sleek SAS",35605,82389,new Date("2018-09-05T20:27:06.249Z"),new Date("2018-09-06T19:31:55.867Z"),"Brand channels"]});
    },

    function(coll) {
        return coll.insert({_id: 19850,str: "Sudan",num: 48696,date: new Date("2018-09-05T23:03:34.217Z"),array: [new Date("2018-09-06T17:20:49.663Z"),new Date("2018-09-06T16:51:44.651Z"),36605,53531,new Date("2018-09-05T20:58:09.032Z"),{_id: 19851,str: "maroon Direct",num: 39310,date: new Date("2018-09-06T08:28:32.560Z"),array: [],obj: {_id: 19852,num: 46114,array: [28981],obj: {_id: 19853,str: "Romania Rubber",date: new Date("2018-09-06T04:49:53.776Z"),array: [],obj: {_id: 19854,str: "Fields Licensed",array: [48256]}}}},"Personal Loan Account Oregon",{_id: 19855,str: "Markets",num: 3351,date: new Date("2018-09-05T23:38:19.301Z")},["online"],"XSS New Leu",[],new Date("2018-09-06T05:45:17.006Z"),"Saudi Riyal Surinam Dollar"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19856,str: "Reunion",num: 91645,date: new Date("2018-09-06T10:16:11.974Z"),array: ["capacitor Ball Maryland",{_id: 19857,str: "utilisation",date: new Date("2018-09-05T22:44:57.693Z"),array: [{_id: 19858,num: 50291,array: [],obj: {}},new Date("2018-09-06T09:26:15.376Z"),new Date("2018-09-06T06:33:53.072Z"),"Auto Loan Account generating",new Date("2018-09-06T12:42:57.676Z"),29059],obj: {_id: 19859,str: "scalable",num: 43375,date: new Date("2018-09-06T08:28:53.226Z"),array: [],obj: {}}},{_id: 19860,str: "generating JSON",date: new Date("2018-09-06T14:54:20.078Z"),obj: {}},"sensor web-enabled Beauty",new Date("2018-09-06T06:32:28.243Z"),"empower",64285,75805,"driver Director Course"]});
    },

    function(coll) {
        return coll.insert({_id: 19861,str: "Awesome Steel Table",num: 79419,date: new Date("2018-09-06T11:00:49.054Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19862,str: "protocol Dalasi silver",date: new Date("2018-09-06T07:24:51.395Z"),array: [],obj: {_id: 19863,str: "fuchsia yellow",num: 74468,date: new Date("2018-09-06T01:58:33.675Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19864,str: "Unbranded Concrete Ball teal",num: 22016,date: new Date("2018-09-06T17:18:39.208Z"),array: [],obj: {_id: 19865,str: "Rustic Metal Chair",num: 17749,date: new Date("2018-09-06T00:41:20.263Z"),array: [86143,new Date("2018-09-06T11:28:34.763Z"),{_id: 19866,str: "Hat incubate",num: 85803,date: new Date("2018-09-06T12:50:20.819Z"),obj: {_id: 19867,str: "content Money Market Account Branch",array: [52282]}},new Date("2018-09-06T15:57:36.846Z"),[],new Date("2018-09-06T09:03:35.595Z"),{_id: 19868,str: "action-items",num: 98822,array: [93883],obj: {}},43639,"Corporate","Facilitator","COM Orchestrator",new Date("2018-09-05T20:31:28.190Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 19869,str: "transparent",num: 23661,date: new Date("2018-09-06T00:49:10.929Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19870,str: "vortals",num: 9460,date: new Date("2018-09-06T16:09:30.840Z"),array: [],obj: {_id: 19871,str: "networks",date: new Date("2018-09-05T21:52:00.406Z"),obj: {_id: 19872,str: "purple optimizing",num: 2083,date: new Date("2018-09-05T20:48:01.814Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19873,str: "Argentine Peso HDD didactic",num: 46089,date: new Date("2018-09-06T01:52:56.318Z"),array: [58392,"copy",new Date("2018-09-05T20:37:59.941Z"),new Date("2018-09-06T05:31:19.511Z"),"alarm card non-volatile",62350,"AI lime Comoro Franc",new Date("2018-09-06T11:07:19.986Z"),69172,2806,{_id: 19874,str: "Buckinghamshire uniform front-end",num: 52929,array: [32513,88544,[]],obj: {}}],obj: {_id: 19875,num: 73945,array: [],obj: {_id: 19876,str: "Representative",num: 15117,date: new Date("2018-09-06T13:30:11.254Z"),obj: {_id: 19877,num: 75463,date: new Date("2018-09-06T04:48:30.966Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 19878,str: "Avon",num: 6190,date: new Date("2018-09-06T03:39:02.869Z"),array: [],obj: {_id: 19879,str: "Assistant",num: 56990,date: new Date("2018-09-06T03:18:25.014Z")}});
    },

    function(coll) {
        return coll.insert({_id: 19880,str: "open-source parsing",num: 66816,date: new Date("2018-09-06T04:06:18.529Z"),array: ["withdrawal program online",new Date("2018-09-06T11:03:26.864Z"),"Investor Home Loan Account Direct",new Date("2018-09-06T05:25:47.916Z"),58581,{_id: 19881,str: "Uganda networks Awesome Rubber Gloves",num: 85290,date: new Date("2018-09-06T15:08:30.653Z"),array: [67500,45931],obj: {_id: 19882,str: "Fantastic Plastic Bacon strategic",num: 90076,date: new Date("2018-09-06T09:26:38.015Z"),array: [],obj: {}}},{_id: 19883,str: "Grass-roots",date: new Date("2018-09-06T07:22:31.478Z"),obj: {}},new Date("2018-09-06T01:34:40.334Z"),"Mouse Iowa gold",new Date("2018-09-06T05:46:32.771Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 19884,str: "platforms",num: 89804,date: new Date("2018-09-06T07:35:35.783Z"),obj: {_id: 19885,str: "Keyboard",num: 90195,date: new Date("2018-09-06T07:16:40.582Z"),array: [new Date("2018-09-06T08:28:54.791Z"),"Beauty Spring","EXE Personal Loan Account Saudi Riyal",89152,[],"transform Soft",new Date("2018-09-06T15:13:14.534Z"),new Date("2018-09-06T15:30:33.416Z"),"Junction",{_id: 19886,str: "Cambridgeshire portal",num: 36779,date: new Date("2018-09-06T05:20:24.470Z"),array: ["Intelligent",28943],obj: {}},39946,81715,{_id: 19887,str: "navigating Diverse",num: 36819,date: new Date("2018-09-06T14:21:09.695Z"),array: [],obj: {}}],obj: {_id: 19888,str: "Moldova",date: new Date("2018-09-06T15:15:44.661Z"),array: [new Date("2018-09-06T19:44:37.821Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19889,str: "Loop",num: 87872,date: new Date("2018-09-06T05:14:17.680Z"),array: [48957,new Date("2018-09-06T08:35:09.862Z"),{_id: 19890,str: "transmitting innovate Small Rubber Chicken",date: new Date("2018-09-06T03:47:32.325Z"),array: [],obj: {_id: 19891,num: 84687,array: [],obj: {_id: 19892,str: "quantify Technician capacitor",array: ["matrix utilize capability",["open-source",44104],"dynamic black Benin"],obj: {}}}},55831,new Date("2018-09-05T21:41:17.010Z"),[new Date("2018-09-06T17:26:55.745Z")],"Towels implement",new Date("2018-09-06T16:44:45.664Z"),new Date("2018-09-06T18:56:44.970Z"),[],[95170,{_id: 19893,str: "Accountability Kids",num: 48733,date: new Date("2018-09-06T18:18:22.063Z")},47957],{_id: 19894,str: "Computer Automotive Bacon",num: 48396,date: new Date("2018-09-05T21:43:18.481Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 19895,str: "moratorium Factors",num: 14457,date: new Date("2018-09-06T02:18:13.205Z"),array: [new Date("2018-09-05T20:18:04.382Z"),"Rand Loti",[],[31213],new Date("2018-09-05T21:47:09.030Z"),93702,"Director",{_id: 19896,str: "Cotton",num: 80439,date: new Date("2018-09-06T10:38:43.531Z"),array: [new Date("2018-09-06T05:28:40.962Z"),"haptic",new Date("2018-09-06T11:42:10.837Z"),{_id: 19897,str: "Prairie",num: 32631,date: new Date("2018-09-06T01:52:47.992Z"),array: ["microchip Specialist Indiana"]},89697,6158],obj: {}},85892,50008,new Date("2018-09-06T12:23:55.097Z"),{_id: 19898,str: "Unbranded Concrete Shirt virtual Supervisor",date: new Date("2018-09-06T04:23:53.130Z"),array: [],obj: {_id: 19899,str: "Reactive",num: 6562,obj: {}}}],obj: {_id: 19900,date: new Date("2018-09-06T18:18:21.704Z")}});
    },

    function(coll) {
        return coll.insert({_id: 19901,str: "quantifying",date: new Date("2018-09-06T01:44:09.768Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19902,str: "compressing Pataca JBOD",num: 34387,date: new Date("2018-09-06T07:57:10.737Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19903,str: "input Regional Global",num: 65838,date: new Date("2018-09-06T15:49:51.682Z"),array: [new Date("2018-09-06T10:43:19.534Z"),41428,new Date("2018-09-06T02:12:22.852Z"),new Date("2018-09-06T03:32:58.535Z"),[],new Date("2018-09-06T10:38:51.345Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19904,str: "Cyprus Streets",num: 14907,date: new Date("2018-09-06T03:38:17.210Z"),array: [[],new Date("2018-09-06T06:37:13.412Z"),"initiatives","Pizza end-to-end portals",new Date("2018-09-06T18:31:02.517Z"),87763,{_id: 19905,str: "Adaptive",num: 70038,date: new Date("2018-09-06T05:04:18.237Z"),array: [],obj: {_id: 19906,str: "web-enabled",num: 25043,array: [],obj: {_id: 19907,str: "Dynamic port",num: 26875,date: new Date("2018-09-06T17:18:46.555Z"),array: [69899,43160,new Date("2018-09-06T05:11:47.382Z"),[new Date("2018-09-06T03:47:13.524Z"),{_id: 19908,num: 80376,date: new Date("2018-09-06T06:31:48.599Z"),array: [82306]},[]]],obj: {}}}},"Refined Cotton Tuna Burundi Franc hub","grey plum",{_id: 19909,str: "Unbranded Concrete Shoes payment Intelligent",obj: {_id: 19910,str: "open-source Incredible",date: new Date("2018-09-06T12:58:53.816Z"),obj: {}}},new Date("2018-09-05T22:37:01.756Z")]});
    },

    function(coll) {
        return coll.insert({_id: 19911,str: "Cambridgeshire Virginia Dynamic",num: 77706,date: new Date("2018-09-06T04:57:09.118Z"),array: ["Regional Orchard Saint Vincent and the Grenadines","Plastic",4173,75939,"Awesome Frozen Bacon","calculating Small Frozen Mouse","Republic of Korea",71673,new Date("2018-09-06T11:53:00.742Z"),new Date("2018-09-06T06:27:24.744Z"),{_id: 19912,str: "Timor-Leste Rapids back-end",num: 59132,date: new Date("2018-09-06T16:15:59.817Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 19913,str: "bluetooth Incredible Concrete Bacon",num: 29362,array: [[],{_id: 19914,num: 81200,date: new Date("2018-09-06T00:38:30.385Z"),array: [new Date("2018-09-05T21:31:29.004Z"),"Developer Small pricing structure"],obj: {_id: 19915,str: "neural-net Peso Uruguayo Uruguay Peso en Unidades Indexadas",num: 76586,array: [],obj: {_id: 19916,str: "digital",num: 53988,date: new Date("2018-09-05T21:49:01.611Z"),array: [],obj: {}}}},200,26400,new Date("2018-09-06T10:15:25.904Z"),"synthesizing",52930,"rich connecting",{_id: 19917,num: 89963,date: new Date("2018-09-06T12:39:11.360Z")},42378,[new Date("2018-09-06T16:18:37.081Z"),"Awesome Frozen Pizza Global Washington",new Date("2018-09-06T10:15:44.390Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 19918,str: "applications Berkshire Spain",num: 99033,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19919,str: "olive Regional firewall",num: 31796,date: new Date("2018-09-06T05:31:23.322Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19920,str: "Metal Route",num: 5882,date: new Date("2018-09-06T04:27:39.617Z"),array: [29743,new Date("2018-09-06T08:06:27.279Z"),"Producer",[],new Date("2018-09-06T08:44:58.317Z"),new Date("2018-09-06T03:35:33.272Z"),new Date("2018-09-06T00:37:02.237Z"),"Comoros Cheese",new Date("2018-09-06T18:23:49.743Z"),"input Strategist Burgs","interface Investor Gorgeous Frozen Pants",{_id: 19921,str: "Officer array Plains",num: 7471,date: new Date("2018-09-05T19:58:17.199Z"),array: [8472,44713],obj: {_id: 19922,str: "Proactive dynamic Sports",num: 32496,date: new Date("2018-09-06T14:34:57.212Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19923,str: "monitoring Extended rich",num: 58751,date: new Date("2018-09-06T11:22:07.156Z"),array: [new Date("2018-09-06T02:41:21.386Z"),"Agent Shoes",new Date("2018-09-06T13:51:51.476Z"),77601,76447,"Samoa",new Date("2018-09-06T10:24:35.800Z"),{_id: 19924,str: "coherent Grove",num: 55841,date: new Date("2018-09-06T04:23:04.168Z"),array: [],obj: {}},[],66402,"hard drive Nebraska",{_id: 19925,str: "synthesize",date: new Date("2018-09-06T00:10:09.838Z"),array: [new Date("2018-09-06T06:27:15.654Z")],obj: {_id: 19926,array: [],obj: {_id: 19927,str: "Florida synergies Handmade Fresh Cheese",num: 32051}}},"Bulgarian Lev Books"],obj: {_id: 19928,str: "embrace Massachusetts harness",num: 87843,date: new Date("2018-09-06T07:57:20.667Z"),array: [[],"Designer Soft",67898,"bypass bluetooth"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19929,str: "aggregate dot-com",num: 75481,date: new Date("2018-09-06T13:38:50.229Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19930,str: "Grocery",num: 82241,date: new Date("2018-09-06T00:03:07.899Z"),array: [],obj: {_id: 19931,str: "composite secondary",num: 3849,date: new Date("2018-09-06T03:51:26.100Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19932,str: "Table",num: 80362,date: new Date("2018-09-06T03:21:33.239Z"),array: [[],"methodologies withdrawal",46358,new Date("2018-09-06T06:19:30.956Z"),{_id: 19933,str: "Savings Account modular circuit",num: 89172,date: new Date("2018-09-06T11:01:13.544Z"),array: [],obj: {}},[new Date("2018-09-05T22:50:19.425Z"),[new Date("2018-09-06T05:56:14.991Z")],new Date("2018-09-06T02:57:25.826Z"),75135],31120,"bypass out-of-the-box Barbados","Berkshire Rustic Plastic Salad Handmade Rubber Chicken",10655],obj: {_id: 19934,str: "optical Soap bus",num: 9125,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19935,str: "Home Loan Account",num: 78876,date: new Date("2018-09-06T11:29:04.879Z"),array: [new Date("2018-09-06T13:18:19.722Z"),61736,new Date("2018-09-06T14:25:10.900Z"),"Cayman Islands Dollar deposit",new Date("2018-09-06T14:43:27.018Z"),"Unbranded Alaska",97940,59956,"Product calculate back up",[],76888,{_id: 19936,str: "green Applications Progressive",num: 35502,date: new Date("2018-09-05T21:44:16.458Z"),array: [96693],obj: {_id: 19937,str: "Buckinghamshire invoice",num: 77271,obj: {_id: 19938,str: "Loaf Global",num: 47589,date: new Date("2018-09-06T03:06:29.153Z"),array: [],obj: {_id: 19939,str: "fresh-thinking brand",date: new Date("2018-09-06T05:36:49.171Z"),array: [],obj: {}}}}},new Date("2018-09-06T14:41:03.187Z"),"white"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19940,str: "channels Refined Metal Gloves",date: new Date("2018-09-06T12:48:45.880Z"),array: [new Date("2018-09-06T18:06:14.531Z"),"Handmade orange",4359,"Practical Computer Towels",34555,{_id: 19941,str: "US Dollar web-readiness",num: 30966,date: new Date("2018-09-05T23:22:04.172Z"),array: [],obj: {_id: 19942,str: "Handmade Towels",num: 32847,date: new Date("2018-09-06T11:34:10.836Z"),array: ["Program clicks-and-mortar",new Date("2018-09-05T20:23:05.755Z")],obj: {_id: 19943,str: "Legacy Small Concrete Ball neutral",num: 27881,date: new Date("2018-09-05T22:33:44.472Z"),array: [],obj: {}}}},new Date("2018-09-06T08:59:48.693Z"),[],new Date("2018-09-06T04:31:24.394Z"),["Dominica",51665,[{_id: 19944,num: 96819,date: new Date("2018-09-06T02:57:01.943Z")},new Date("2018-09-06T16:50:17.917Z")],new Date("2018-09-05T23:24:50.778Z")],71366,"interactive microchip Multi-tiered",{_id: 19945,str: "Clothing",obj: {_id: 19946,str: "Pike calculating",array: [],obj: {}}}],obj: {_id: 19947,num: 77345,date: new Date("2018-09-06T19:40:37.247Z")}});
    },

    function(coll) {
        return coll.insert({_id: 19948,str: "Fantastic Steel Pizza Usability Personal Loan Account",num: 59379,date: new Date("2018-09-05T20:04:34.852Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19949,str: "6th generation Versatile",num: 38156,date: new Date("2018-09-06T04:44:46.786Z"),array: [[],"Clothing synergize Maryland",93920,"rich Street deposit",new Date("2018-09-06T18:39:25.114Z"),new Date("2018-09-06T01:22:16.857Z"),39868,new Date("2018-09-05T20:23:54.952Z"),"Refined Frozen Bacon cutting-edge Manager",new Date("2018-09-06T07:03:03.930Z"),{_id: 19950,str: "Table neural",num: 13897,date: new Date("2018-09-06T13:29:43.696Z"),array: [],obj: {_id: 19951,str: "system Supervisor",date: new Date("2018-09-06T18:49:36.144Z"),array: [],obj: {}}}],obj: {_id: 19952,str: "parse",num: 23431,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19953,str: "Chips array hacking",num: 17622,date: new Date("2018-09-06T13:13:00.147Z"),array: [],obj: {_id: 19954,str: "convergence Bedfordshire",num: 55269,date: new Date("2018-09-06T14:54:54.723Z"),array: [11824,"Small",{_id: 19955,str: "Cape Verde Escudo Money Market Account Internal",num: 92365,date: new Date("2018-09-06T15:46:58.952Z"),obj: {}},99406,"Clothing synthesizing whiteboard",new Date("2018-09-06T01:46:34.421Z"),{_id: 19956,str: "web-enabled Managed",num: 32226,date: new Date("2018-09-06T04:00:39.510Z")},new Date("2018-09-06T13:13:44.524Z"),{_id: 19957,str: "Forest",array: [[new Date("2018-09-06T03:55:58.584Z"),{_id: 19958,date: new Date("2018-09-06T16:55:51.649Z"),array: [],obj: {_id: 19959,str: "matrix bypassing",num: 5211}},78900]],obj: {}},"Guam payment",50534,[]],obj: {_id: 19960,num: 5725,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 19961,str: "Chicken Sleek Fresh Bacon Unbranded",num: 99629,date: new Date("2018-09-05T23:06:03.846Z"),array: [],obj: {_id: 19962,str: "metrics engage Paraguay",date: new Date("2018-09-06T02:06:13.825Z"),array: ["Brand iterate",new Date("2018-09-05T20:32:32.295Z"),3864,52651,new Date("2018-09-05T21:01:43.193Z"),"Seamless Tokelau","Bike supply-chains Sleek",[],[63273,new Date("2018-09-06T07:53:37.651Z"),44524]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19963,str: "overriding",num: 936,date: new Date("2018-09-06T17:49:25.029Z"),array: ["silver overriding Officer","encompassing web-readiness","solid state Street",new Date("2018-09-05T20:31:50.366Z"),{_id: 19964,str: "Taka",num: 84066,array: [[],"orchid"],obj: {_id: 19965,str: "Washington",date: new Date("2018-09-06T04:18:01.638Z"),array: [],obj: {_id: 19966,str: "Applications",num: 95640,date: new Date("2018-09-06T00:34:25.406Z"),obj: {}}}},new Date("2018-09-06T13:43:10.935Z"),"Integrated Games stable",["feed United States of America wireless",new Date("2018-09-06T12:33:07.722Z")],26297,[],79334,{_id: 19967,str: "Refined North Dakota Berkshire",date: new Date("2018-09-06T14:34:19.184Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 19968,str: "Club",num: 38804,date: new Date("2018-09-06T13:16:05.782Z"),array: ["connecting e-markets Refined Frozen Bike",new Date("2018-09-06T06:50:47.787Z"),"COM forecast",2207,41755,[],new Date("2018-09-06T03:15:17.828Z"),"Web",new Date("2018-09-06T13:47:25.040Z"),new Date("2018-09-05T20:59:57.806Z"),"Supervisor",15813,{_id: 19969,str: "Markets interface",num: 16652}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 19970,str: "Spurs",num: 80606,date: new Date("2018-09-06T15:32:52.215Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 19971,str: "THX backing up compress",num: 32200,date: new Date("2018-09-06T17:09:07.184Z"),array: [new Date("2018-09-05T22:40:11.204Z"),"Money Market Account Virginia",13920,[],new Date("2018-09-06T05:38:28.837Z"),{_id: 19972,str: "analyzing",num: 70830,date: new Date("2018-09-05T23:51:32.139Z"),array: [],obj: {_id: 19973,num: 19612,date: new Date("2018-09-06T18:58:10.566Z"),obj: {_id: 19974,str: "Credit Card Account RSS",array: [32924,"invoice",82710,{_id: 19975,str: "neutral Fresh morph",num: 55741,date: new Date("2018-09-06T14:04:03.877Z"),array: []},new Date("2018-09-06T05:26:12.045Z")],obj: {}}}},"Mountains projection SQL",8166,33289,"navigate Mission Ohio",new Date("2018-09-06T13:08:16.155Z")],obj: {_id: 19976,str: "schemas",num: 55496,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 19977,str: "Burundi Franc",num: 27751,date: new Date("2018-09-06T05:14:57.403Z"),array: [[],new Date("2018-09-06T06:12:22.427Z"),"incentivize repurpose",{_id: 19978,str: "system-worthy silver enterprise",obj: {}},4264,76826,"Rustic withdrawal Cedi",new Date("2018-09-06T14:28:41.505Z"),55303,"Movies orchestrate IB"],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.num": 1, "obj.obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayElemAt: [[],91087] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeek: { $isoWeekYear: { $minute: { $minute: { $isoDayOfWeek: { $dayOfMonth: { $isoDayOfWeek: { $year: { $dateToParts: { date: { $dayOfYear: { $dateToString: {date: { $week: new Date("2018-09-06T07:31:09.291Z") },format: "%Y-%j-%Z-%G-%w-%j",timezone: "America/Nipigon",onNull: { $arrayToObject: [[{k: "Program Creek Cotton",v: '$obj.obj.obj.str'}]] }} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "South Dakota" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["matrix backing up"],[],[{ $substrBytes: [{ $substrBytes: ['$str',12,18] },14,3] }]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: "ability Cambridgeshire Personal Loan Account",chars: '$obj.obj.str'} },"time-frame Administrator protocol"],88619] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T07:57:05.011Z",format: "%%-%u-%Y-%U-%w-%d-%G-%d-%Y-%L-%G-%L"} } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.str','$obj.obj.str',{ $dateToString: {date: new Date("2018-09-06T05:35:19.851Z"),onNull: "reintermediate Nebraska calculate"} },{ $concat: [{ $ltrim: { input: "Supervisor" } }] }],[],[28656],[28390],[]],defaults: [false]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$obj.obj.obj.str',5,4] },{ $toString: { $objectToArray: '$obj.obj.obj.obj' } }],60199] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Unbranded Wooden Chair",v: "generating"},{k: "Colorado Tactics",v: "Investment Account Sharable parsing"},{k: "Shoes Washington Response",v: { $year: { $dayOfWeek: { $dateFromParts: {year: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj' },{ $arrayElemAt: [[],'$num'] },13,14] },hour: { $multiply: [67137,31093,'$obj.obj.num','$obj.obj.obj.num'] },second: { $cmp: [{ $zip: {inputs: [[],['$obj.obj.obj.str',{ $trim: { input: '$str' } }]],useLongestLength: false,defaults: [true,29460]} },{ $substrBytes: [{ $rtrim: { input: { $substrBytes: ['$obj.obj.str',10,8] } } },12,12] }] }} } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],14486] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: "Gorgeous scalable Product" }],[{ $toUpper: '$obj.obj.obj.str' }],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num','$num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Nepalese Rupee",v: false},{k: "Auto Loan Account",v: 53221}]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: new Date("2018-09-06T08:36:08.617Z") }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-05T22:52:59.035Z",format: "%L-%z-%L-%M-%j-%H-%U-%L-%U-%Z-%Z-%j",timezone: "Australia/Yancowinna",onError: { $arrayElemAt: [['$obj.num'],91882] },onNull: { $arrayToObject: [[{k: "Mandatory adapter Realigned",v: "intermediate Unbranded Cotton Cheese"}]] }} } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substrCP: [{ $dateToString: { date: { $week: { $year: { $dayOfMonth: { $minute: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-05T21:51:28.444Z"),format: "%w-%u-%S-%w-%z-%L-%z-%Y-%V-%u-%w",timezone: "America/Phoenix"} } } } } } } } },19,3] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $rtrim: {input: '$obj.obj.obj.obj.str',chars: "pixel Freeway whiteboard"} } },"e-services"],["Handmade"],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $month: { $hour: { $isoWeek: { $isoWeekYear: { $dateFromParts: {year: { $mod: ['$obj.num','$obj.obj.num'] },minute: { $pow: ['$obj.obj.obj.num',20142] },millisecond: { $cmp: [{ $toString: { $arrayToObject: [[[],[87006],[50972],[{ $concat: ['$obj.obj.str',"Yen Licensed calculating",{ $substrCP: ['$obj.obj.obj.obj.str',11,1] },'$obj.obj.obj.obj.str'] }],["Credit Card Account",'$date']]] } },{ $substr: ['$str',12,10] }] }} } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Soft Distributed",18,14] }, _id: 0}}],

        [{$project: {a: { $toUpper: "payment Shoes" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[65998],16612] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $arrayElemAt: [[75102],'$obj.obj.obj.num'] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToString: {date: new Date("2018-09-05T20:53:28.521Z"),format: "%H-%d-%U-%V-%H-%S",timezone: "America/Fortaleza",onNull: { $arrayToObject: [[{k: "Garden Junction executive",v: '$str'}]] }} } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $divide: [48593,'$obj.obj.obj.num'] },minute: { $subtract: ['$obj.obj.num',35075] },second: { $log: [{ $add: ['$obj.num'] },'$obj.obj.obj.obj.num'] },timezone: "Asia/Calcutta"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[true,"withdrawal",new Date("2018-09-06T06:25:54.164Z"),true],[{ $ltrim: {input: '$str',chars: '$obj.obj.str'} }],[{ $mod: ['$num',60792] },'$num'],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Assistant Kwacha",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.obj.obj.str'],31387] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $abs: '$obj.num' },isoWeek: { $multiply: [] },hour: { $ceil: 18026 },minute: { $divide: [22593,'$obj.obj.obj.num'] },second: { $sqrt: 32172 },millisecond: { $size: [['$obj.obj.obj.num',{ $abs: 49621 }]] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Generic Fresh Soap Assistant Fort",v: { $isoWeekYear: { $isoDayOfWeek: { $dayOfWeek: { $dateToString: {date: { $isoWeek: { $toDate: { $objectToArray: '$obj.obj.obj.obj' } } },format: "%H-%S-%d-%Z-%S-%L-%L",timezone: "Atlantic/Reykjavik"} } } } }}]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $ln: 72941 },month: { $log: ['$obj.obj.num',91616] },timezone: "Europe/Tallinn"} }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "Ergonomic Rubber",v: true}]] } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "payment Product" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"sticky Auto Loan Account",{ $trim: {input: { $toString: { $arrayToObject: [[{k: "sensor extensible New York",v: new Date("2018-09-05T21:29:49.480Z")},{k: "Cheese",v: false},{k: "Checking Account deposit green",v: false}]] } },chars: { $toUpper: '$obj.str' }} }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $floor: '$obj.obj.obj.num' },isoWeek: { $ceil: 42449 },isoDayOfWeek: { $log: [70340,'$obj.obj.obj.obj.num'] },hour: { $log10: '$num' },minute: { $add: [] },second: { $exp: '$obj.obj.num' },millisecond: { $pow: [76676,10404] },timezone: "Europe/Busingen"} } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "array index pixel",v: new Date("2018-09-06T13:40:25.015Z")},{k: "Cambridgeshire program revolutionary",v: '$obj.obj.obj.str'}]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num'],72954] }, _id: 0}}],

        [{$project: {a: { $hour: { $year: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T06:07:13.507Z",format: "%z-%j-%u-%w-%M",timezone: "Etc/GMT0",onError: { $ltrim: {input: "Kwanza withdrawal",chars: { $substrCP: ["Cape Global Integrated",18,20] }} }} } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToParts: { date: { $isoDayOfWeek: { $dayOfYear: { $isoWeek: { $millesecond: { $dayOfWeek: { $minute: { $dateFromParts: {year: { $divide: ['$obj.obj.num',44063] },day: { $trunc: 10026 },millisecond: { $ln: { $size: [[56307]] } },timezone: "Asia/Ust-Nera"} } } } } } } } } },onNull: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $range: [20,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $substr: ["input Saint Helena Pound",20,9] }, _id: 0}}],

        [{$project: {a: { $map: {input: [5553,'$obj.num'],as: 'alfreda',in: { $log: [44473,'$$alfreda'] }} }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.num'],[],['$obj.obj.str',{ $ltrim: { input: '$obj.obj.str' } }],[]] } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $isoDayOfWeek: { $isoWeek: '$obj.obj.date' } },format: "%H-%V-%z-%U",onNull: { $zip: {inputs: [[{ $toUpper: { $concat: ["Quality copy"] } },{ $trim: {input: "web services",chars: '$obj.obj.str'} },'$str',"parse"],[],['$obj.obj.obj.obj.num',13670,98800]],useLongestLength: true} }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T11:20:04.715Z"),format: "%m-%w-%u-%Y-%U-%V-%j-%d",onNull: { $objectToArray: '$obj.obj.obj' }} }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],["enhance Digitized Executive",{ $toString: { $zip: { inputs: [['$num'],['$num',61439]] } } },'$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $month: { $dateToParts: { date: { $dayOfWeek: { $dayOfMonth: { $week: { $hour: { $dateFromParts: {isoWeekYear: { $multiply: [83619,49338] },hour: { $pow: ['$obj.obj.num','$obj.obj.obj.obj.num'] },timezone: "Europe/Simferopol"} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: "cutting-edge Jordanian Dinar" },"ADP",{ $concat: [] },'$obj.obj.obj.obj.str',{ $substr: ['$obj.obj.obj.obj.str',4,19] }],[72558,'$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $toDate: { $toLower: { $rtrim: {input: { $substrCP: ["Berkshire",6,17] },chars: '$obj.str'} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.num',32457],44311] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["bandwidth-monitored Tools"],[],["Industrial Bedfordshire Practical Steel Bacon",{ $trim: { input: { $toString: { $map: {input: ['$obj.obj.obj.num'],in: { $ln: 59667 }} } } } },"Customer Licensed"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$str',18,9] },'$obj.obj.obj.str'],27730] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[53825,62178],['$obj.obj.obj.obj.str'],[{ $toUpper: "internet solution quantifying calculating" },'$obj.obj.obj.str',{ $substrCP: ["Grocery Texas Checking Account",17,8] }],['$obj.obj.obj.num'],['$obj.obj.num','$obj.obj.obj.obj.num',43741,'$obj.obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"out-of-the-box",'$obj.obj.str'],29406] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Licensed Hawaii",v: { $year: { $minute: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T03:52:15.406Z",format: "%Z-%G-%j-%w",onError: { $arrayElemAt: [[],'$obj.obj.num'] },onNull: { $trim: { input: "XSS encryption" } }} },iso8601: true} } } }},{k: "Mountains",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],19931] }, _id: 0}}],

        [{$project: {a: { $range: [9,2,20] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $log: ['$obj.obj.obj.obj.num',93254] },isoWeek: { $floor: '$num' },isoDayOfWeek: { $log10: 60932 },timezone: "Africa/Algiers"} } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],[],["FTP"]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: { $rtrim: { input: "Towels Multi-layered revolutionize" } },chars: '$obj.obj.str'} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[24245],['$obj.obj.obj.obj.num','$obj.obj.obj.num','$obj.num'],[{ $toString: { $arrayElemAt: [["back-end copying"],'$obj.obj.obj.num'] } },'$str'],[{ $toUpper: '$obj.obj.str' }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [10,0] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[false,"customized Synchronised Architect"],['$obj.str',{ $substrBytes: ["Ergonomic",6,7] }],[{ $substrCP: ['$obj.obj.obj.str',14,6] },"payment Serbian Dinar GB"],['$obj.obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "innovate Dong Soap",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.num',9984],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $size: [["New York"]] },day: { $pow: [25789,60300] },hour: { $exp: '$obj.obj.obj.num' },minute: { $ln: 66118 },timezone: "Etc/GMT-7"} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Turkey eyeballs"],["Tactics Producer",{ $dateToString: {date: new Date("2018-09-06T10:31:21.525Z"),format: "%w-%S-%Y-%H-%j",timezone: "CET",onNull: { $arrayToObject: [[{k: "systemic New York",v: 72949}]] }} },'$obj.obj.obj.str'],[{ $cmp: [{ $toLower: { $toUpper: '$str' } },{ $dateFromParts: {year: { $trunc: { $exp: 87442 } },month: { $ceil: '$obj.obj.num' },hour: { $ln: '$obj.obj.num' },minute: { $add: [14615,'$num','$obj.obj.obj.num'] },millisecond: { $exp: '$obj.obj.obj.num' },timezone: "America/Indiana/Petersburg"} }] }],[77886,{ $abs: 72397 }],["Programmable Borders",{ $toUpper: '$obj.obj.obj.obj.str' },'$str'],['$obj.obj.obj.obj.num']],defaults: []} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Awesome Guam",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["connect"],81970] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%M-%w-%U-%u-%%-%w",timezone: "America/Winnipeg"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%u-%G-%Z-%w",onNull: "bluetooth revolutionary Seamless"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Representative Toys"],'$num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.obj.obj.obj.str',{ $dateToString: {date: '$obj.date',format: "%U-%S-%M-%j",timezone: "Asia/Magadan"} }],8339] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ["Quality-focused e-markets",10,5] }],[53382],['$obj.obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.obj.str',20,5] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfYear: { $isoWeek: { $toDate: { $arrayToObject: [[{k: "utilisation Ameliorated Maryland",v: '$obj.obj.obj.obj.str'}]] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',"Corporate Practical"],97421] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toLower: '$obj.str' },"scalable",{ $substr: ['$obj.obj.str',18,0] }],["wireless",'$obj.obj.obj.obj.str'],[],[],["Indian Rupee Ngultrum Automotive"],[53618,false]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Fantastic Malagasy Ariary Configuration","Dynamic didactic"],[],[75256,'$obj.obj.obj.obj.num'],["Denar",{ $toUpper: '$obj.obj.obj.str' }]],defaults: [false,new Date("2018-09-06T11:23:13.160Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $substr: ["mobile",17,2] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeek: { $millesecond: { $dateFromParts: {year: { $ln: '$obj.obj.obj.num' },day: { $divide: [72549,'$obj.obj.obj.obj.num'] },hour: { $ln: 87220 },millisecond: { $exp: '$obj.num' },timezone: "Africa/Bissau"} } } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfYear: { $year: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T18:27:20.933Z"),format: "%G-%j-%j-%L-%V-%U",timezone: "Asia/Srednekolymsk"} } } } } }, _id: 0}}],

        [{$project: {a: { $range: [14,15,12] }, _id: 0}}],

        [{$project: {a: { $second: new Date("2018-09-05T20:11:18.355Z") }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[50321,'$obj.obj.num',52819],["systemic Rufiyaa"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],43058] }, _id: 0}}],

        [{$project: {a: { $year: { $millesecond: { $dateFromString: { dateString: "2018-09-06T05:53:08.271Z" } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.str',17,0] }],11116] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: "Yen French Polynesia Towels"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $toString: { $objectToArray: '$obj.obj.obj.obj' } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Tasty Cotton Sausages monitoring",chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $hour: { $toDate: { $arrayToObject: [[{k: "parse",v: "Operative"},{k: "synthesize",v: '$obj.obj.obj.num'}]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["open system AGP action-items"],[{ $rtrim: { input: "deliverables quantify" } },'$obj.obj.str'],['$obj.num'],[],['$obj.obj.obj.str',88762,false]]] }, _id: 0}}],

        [{$project: {a: { $range: [7,7] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $month: { $dateFromParts: {year: { $pow: [70923,'$obj.obj.num'] },month: { $pow: [30009,'$obj.num'] },hour: { $add: [] },minute: { $floor: { $multiply: ['$num'] } },second: { $ln: 46156 },millisecond: { $ceil: 36242 },timezone: "America/Argentina/ComodRivadavia"} } } }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromString: {dateString: "2018-09-06T00:13:14.139Z",timezone: "Africa/Harare",onError: { $range: [5,5] }} } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $rtrim: { input: '$obj.obj.obj.obj.str' } }] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.obj.str',chars: { $substr: ["Re-engineered Arkansas",0,13] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Dynamic Rustic Awesome"],47746] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],93548] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Vision-oriented maximize",chars: { $trim: { input: '$obj.obj.obj.str' } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: "Mountain Customer-focused" } },{ $substrBytes: ["Chips",11,4] }],53834] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toLower: "Direct Chief hard drive" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toUpper: "Sleek Dynamic facilitate" },11,17] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.obj.str',0,1] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Sri Lanka Rupee",{ $substrCP: ['$obj.str',11,6] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "synthesize",v: '$obj.num'},{k: "programming Branding Personal Loan Account",v: "Chips"},{k: "Tasty throughput synthesize",v: "systemic"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $cmp: [{ $trim: { input: { $dateToString: {date: new Date("2018-09-06T08:57:15.766Z"),format: "%%-%U-%d-%m-%u-%L-%m-%U-%G",timezone: "Europe/Amsterdam",onNull: "killer solutions"} } } },{ $toDate: { $arrayElemAt: [["Avon"],'$obj.obj.num'] } }] },month: '$obj.obj.obj.obj.num',hour: { $floor: 9354 },minute: { $add: [] },second: { $ln: 98478 },timezone: "America/Metlakatla"} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Administrator invoice Program",9,9] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],79091] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toLower: '$obj.str' },8,17] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $isoDayOfWeek: { $week: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T04:51:57.619Z",format: "%%-%G-%z-%M-%u-%z-%z-%V-%U-%j-%j"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Consultant optical Missouri",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["solid state GB"],[],["enhance",'$obj.obj.str',{ $substrBytes: ['$obj.obj.obj.obj.str',5,7] }],[]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "niches",chars: { $substr: ['$obj.obj.obj.obj.str',19,18] }} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: new Date("2018-09-06T03:12:45.408Z") }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrBytes: ["Shoes Rustic Soft Salad",10,11] },{ $rtrim: {input: '$obj.obj.obj.str',chars: "Gambia"} }] }, _id: 0}}],

        [{$project: {a: { $range: [0,7] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "navigate Keyboard",v: "matrix Technician"}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T19:12:51.985Z",format: "%z-%Z-%d-%m-%z-%z-%w-%z",timezone: "Europe/Skopje",onNull: { $arrayToObject: [[['$obj.obj.obj.str','$str'],[{ $toUpper: "Security PCI Gorgeous" }],['$num',37849],["Zambia"],[]]] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[96873],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T02:34:07.907Z",format: "%d-%z-%S-%Z-%m-%S-%z",onError: { $arrayToObject: [[[{ $ltrim: { input: "azure wireless Avon" } }],['$obj.obj.num']]] }} } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToParts: { date: { $isoWeekYear: { $month: { $dateToParts: {date: '$obj.obj.obj.date',iso8601: false} } } } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $dateToString: {date: '$date',format: "%H-%m-%j-%%-%%-%d-%j-%L-%U-%L",timezone: "Canada/Newfoundland",onNull: { $arrayElemAt: [["cultivate copy"],79288] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $toDate: { $arrayToObject: [[['$str'],['$num','$obj.num'],[92113],[],[],[],[],["viral withdrawal artificial intelligence","Forward",{ $substrCP: [{ $substrCP: [{ $toString: { $map: {input: [],in: { $floor: 19877 }} } },14,3] },18,7] }]]] } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',timezone: "America/Jamaica",onNull: { $toUpper: "AI Assurance" }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: {input: '$obj.obj.str',chars: '$obj.str'} },"Money Market Account",{ $toString: { $dateToString: {date: '$obj.date',format: "%U-%m-%U-%M-%z",timezone: "America/Ojinaga"} } },"Surinam Dollar"],[11432,{ $concat: ['$obj.str'] }]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[37218,24248]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toLower: '$obj.obj.obj.obj.str' }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],7809] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',onNull: { $arrayElemAt: [[{ $trim: { input: '$obj.obj.obj.obj.str' } }],{ $log: ['$obj.obj.num',68517] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $mod: ['$obj.obj.num',30656] },'$num'],[54275],[],[{ $substr: ['$obj.obj.obj.obj.str',5,0] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],64] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[8612,97073,'$obj.obj.obj.obj.num'],[],[],[{ $substr: [{ $rtrim: { input: { $substrBytes: ['$obj.str',8,4] } } },17,17] },"bus"]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $size: [[{ $trim: { input: { $toUpper: '$str' } } }]] }]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Bacon Specialist","Corporate EXE tan"],as: 'amira',in: { $log10: 59964 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $concat: ['$obj.str',"SAS parsing Data"] } },"brand"],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $rtrim: {input: '$str',chars: { $dateToString: {date: new Date("2018-09-06T05:57:36.391Z"),format: "%G-%j-%d-%Z-%z-%m-%m-%V-%Y"} }} } } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $concat: ["enable"] },19,16] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $in: [{ $arrayElemAt: [[24788],'$obj.obj.obj.num'] },{ $zip: {inputs: [['$$this','$num']],defaults: [/Jewelery|Senior/,"Intelligent",/deliverables|synergize|back up|monitor|online/]} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[[20692,11356],[],['$obj.str'],['$obj.num','$obj.num'],[]]] } },"wireless cutting-edge"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$num',41182,'$obj.obj.obj.num'],[],['$obj.obj.str','$obj.str']] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[82973,'$obj.num'],["Rubber leading-edge array",'$obj.str'],[],['$obj.obj.obj.str'],[]]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[],[96861]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Pizza bleeding-edge RAM",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "mindshare Table Money Market Account",v: '$obj.obj.date'},{k: "coherent Human Moroccan Dirham",v: { $rtrim: {input: '$obj.str',chars: "array e-business"} }},{k: "Baby Row bypassing",v: "bottom-line"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "well-modulated",v: false},{k: "client-server Knoll",v: '$obj.obj.date'}]] } }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromParts: {year: { $abs: 16589 },month: { $indexOfArray: [{ $range: [7,11,16] },{ $dayOfMonth: { $hour: { $minute: { $week: { $millesecond: new Date("2018-09-05T23:32:18.311Z") } } } } },11] },hour: { $pow: [76867,'$obj.obj.obj.num'] },minute: { $add: [25964,'$obj.obj.obj.num'] },timezone: "Asia/Tashkent"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $dateToString: {date: '$date',format: "%G-%H-%L-%m-%S-%G-%u-%L-%Z-%H-%Y-%j",onNull: "Vision-oriented markets"} },'$str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$str',{ $rtrim: {input: "Shirt",chars: { $concat: [{ $rtrim: { input: "Investment Account index" } },'$obj.obj.obj.str','$obj.str'] }} }],[17973,'$obj.obj.num',98987],['$obj.obj.num','$obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Guyana Orchestrator THX" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Phased Gorgeous Frozen Towels"],3110] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],[{ $toString: { $arrayElemAt: [['$obj.num',40578,'$obj.obj.obj.obj.num'],'$obj.obj.num'] } },'$obj.str'],["extensible"],['$obj.str',{ $concat: ["Fantastic",'$str'] }],[],[]] } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $concat: ['$obj.str',{ $rtrim: {input: "calculate synthesize",chars: "virtual e-services"} },'$obj.obj.str'] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Concrete Frozen emulation",v: '$obj.obj.obj.num'},{k: "Soft Latvia",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromString: {dateString: "2018-09-06T16:14:55.912Z",timezone: "Australia/Perth",onError: { $arrayToObject: [[{k: "indexing Auto Loan Account",v: '$obj.obj.date'},{k: "hack bi-directional",v: false}]] },onNull: "Credit Card Account Product Rubber"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "navigating",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],86101] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[82169],['$str',"open-source"],[],[{ $trim: { input: "Malawi back up" } },'$obj.obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $cmp: [{ $month: { $dateToString: {date: '$date',format: "%U-%Y-%u-%M"} } },{ $arrayToObject: [[{k: "dot-com bypassing tertiary",v: new Date("2018-09-06T05:28:58.323Z")}]] }] },month: { $add: [38384] },minute: { $sqrt: { $ln: 96920 } },second: { $add: [73190] },timezone: "UTC"} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $month: new Date("2018-09-05T22:31:42.808Z") } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.date','$obj.obj.obj.str'],[],['$num',3518,'$num']]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',15,17] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfWeek: { $second: { $week: { $dateToString: {date: new Date("2018-09-06T08:07:17.259Z"),format: "%%-%S-%Z-%%-%L-%V-%Y-%w"} } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $dateToString: {date: { $isoDayOfWeek: { $minute: { $dateFromString: {dateString: "2018-09-06T02:47:10.500Z",format: "%j-%H-%%-%H-%%-%w"} } } },format: "%d-%G-%Z-%Y-%H-%w-%w-%w-%U-%w",timezone: "Asia/Chongqing"} } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $ltrim: { input: '$obj.obj.obj.str' } },12,7] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],29570] } }, _id: 0}}],

        [{$project: {a: { $range: [20,11] }, _id: 0}}],

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
