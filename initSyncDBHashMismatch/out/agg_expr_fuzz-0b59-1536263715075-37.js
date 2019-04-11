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
        return coll.insert({_id: 23241,str: "Forward",date: new Date("2018-09-06T10:50:48.750Z"),obj: {_id: 23242,str: "red",num: 39746,date: new Date("2018-09-06T16:58:09.615Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23243,str: "Supervisor",num: 43072,date: new Date("2018-09-06T13:39:28.481Z"),array: [31975,new Date("2018-09-06T10:32:18.286Z"),new Date("2018-09-06T02:52:39.706Z"),76779,"Outdoors",{_id: 23244,str: "web-readiness Beauty",array: [new Date("2018-09-06T14:57:04.016Z")]},"open-source deposit multi-byte",89719,new Date("2018-09-06T14:37:55.502Z"),4843,[],"generate invoice Web",new Date("2018-09-06T17:02:44.865Z")],obj: {_id: 23245,str: "Car",num: 5533,date: new Date("2018-09-06T08:46:46.871Z"),array: [[],76213],obj: {_id: 23246,num: 77232,date: new Date("2018-09-06T08:21:23.760Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 23247,str: "non-volatile green",num: 57767,date: new Date("2018-09-06T04:02:58.903Z"),array: [new Date("2018-09-06T19:29:04.761Z"),12416,"Digitized","invoice Sleek",[],2852],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23248,str: "Associate microchip",num: 80922,date: new Date("2018-09-05T23:36:34.572Z"),array: [],obj: {_id: 23249,num: 14114,date: new Date("2018-09-06T16:28:19.104Z"),array: [new Date("2018-09-06T11:45:07.008Z"),[],84687,{_id: 23250,str: "Hat navigating",num: 49752,array: [],obj: {}},"invoice Cayman Islands Dollar",new Date("2018-09-06T15:45:43.257Z"),"solution-oriented","XSS array","Web quantifying",50744,new Date("2018-09-06T09:12:58.827Z"),65294,new Date("2018-09-06T12:13:27.645Z"),{_id: 23251,num: 10514,date: new Date("2018-09-06T06:31:47.930Z"),array: [[74654]],obj: {_id: 23252,str: "violet",obj: {_id: 23253,str: "Granite payment"}}}],obj: {_id: 23254,str: "Dominica",date: new Date("2018-09-06T17:04:57.021Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 23255,str: "Shoes",num: 44520,date: new Date("2018-09-06T09:56:18.989Z"),array: [8823,new Date("2018-09-06T09:59:07.965Z"),78066,75606,"Supervisor optimal SCSI",new Date("2018-09-06T10:51:13.273Z"),new Date("2018-09-06T05:35:44.622Z"),{_id: 23256,num: 39742,date: new Date("2018-09-06T02:17:48.296Z"),array: ["bypassing initiatives e-services",[],{_id: 23257,str: "Zambia quantify",num: 7750,date: new Date("2018-09-06T06:50:15.344Z"),obj: {_id: 23258,array: [[]],obj: {}}},45218,45343,"withdrawal",{_id: 23259,num: 36181,date: new Date("2018-09-05T22:39:55.010Z"),array: [],obj: {_id: 23260,num: 2707,obj: {_id: 23261,str: "Handmade Berkshire",date: new Date("2018-09-05T23:30:21.156Z"),array: [new Date("2018-09-06T10:22:23.098Z"),"gold Shoes"]}}}],obj: {_id: 23262,str: "Enterprise-wide sky blue",num: 73465,date: new Date("2018-09-06T12:26:47.381Z"),array: []}},{_id: 23263,str: "Islands Mauritius Rupee Ergonomic Frozen Pizza",num: 21175,obj: {}},new Date("2018-09-06T18:02:25.112Z")]});
    },

    function(coll) {
        return coll.insert({_id: 23264,num: 27513,date: new Date("2018-09-06T01:28:50.626Z"),array: [],obj: {_id: 23265,num: 15826,date: new Date("2018-09-05T22:39:55.620Z"),array: ["olive",new Date("2018-09-06T14:32:50.684Z"),61624,75209,"synergy Austria",{_id: 23266,str: "Points District payment",num: 43199,date: new Date("2018-09-06T08:09:06.045Z"),array: [81492,{_id: 23267,str: "Officer",num: 58987,array: [],obj: {}}],obj: {}},41814,["Wooden Generic markets",new Date("2018-09-06T07:24:44.607Z")],"monitor cyan",[],new Date("2018-09-05T22:37:06.298Z"),new Date("2018-09-06T13:26:33.036Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 23268,str: "Table",num: 69900,date: new Date("2018-09-06T07:21:26.023Z"),array: [],obj: {_id: 23269,str: "Regional",num: 17936,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23270,str: "digital",num: 49039,date: new Date("2018-09-06T10:31:12.230Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23271,str: "internet solution cyan",num: 60178,date: new Date("2018-09-06T00:56:10.520Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23272,num: 63203,date: new Date("2018-09-05T23:07:14.505Z"),array: [],obj: {_id: 23273,str: "transmit content mesh",num: 82467,date: new Date("2018-09-06T17:59:57.552Z"),array: [31262,{_id: 23274,str: "Mouse",num: 61468,array: []},8023,"Lead",29668,new Date("2018-09-06T10:16:18.486Z"),{_id: 23275,str: "Global cultivate",date: new Date("2018-09-06T01:10:46.047Z"),array: [],obj: {}},30108,{_id: 23276,str: "neural-net",obj: {_id: 23277,str: "Ethiopia",num: 28800,date: new Date("2018-09-06T10:27:56.571Z"),obj: {}}},"Bolivia Borders",[new Date("2018-09-06T09:46:07.407Z")],["Dynamic Representative Movies","knowledge user Pizza"],new Date("2018-09-05T20:09:15.367Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23278,str: "withdrawal",num: 62641,date: new Date("2018-09-06T05:02:40.180Z"),array: [new Date("2018-09-05T20:36:40.205Z"),30825,new Date("2018-09-06T02:21:31.870Z"),"Home Loan Account alarm","networks National",67011,{_id: 23279,str: "monitor Trail Planner",num: 15820,date: new Date("2018-09-06T05:28:35.039Z"),array: [],obj: {_id: 23280,str: "Computers Integration empowering",num: 60632,date: new Date("2018-09-06T05:01:46.866Z"),array: [],obj: {}}},"Montserrat infrastructures Product",[],[],{_id: 23281,num: 19726,date: new Date("2018-09-06T12:57:44.501Z"),obj: {_id: 23282,array: [new Date("2018-09-05T21:09:34.267Z")],obj: {_id: 23283,str: "back-end Bacon",num: 33496,date: new Date("2018-09-06T10:30:31.915Z"),array: ["Hawaii virtual"]}}},"clicks-and-mortar",[{_id: 23284,str: "Arkansas generate"},95541]]});
    },

    function(coll) {
        return coll.insert({_id: 23285,str: "Pa'anga Frozen",num: 68438,date: new Date("2018-09-06T13:24:25.743Z"),obj: {_id: 23286,str: "paradigms",date: new Date("2018-09-06T19:24:25.227Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23287,str: "virtual Intelligent overriding",date: new Date("2018-09-06T12:16:11.977Z"),array: [28455,"gold 5th generation Quality",new Date("2018-09-06T08:48:22.698Z"),new Date("2018-09-06T09:05:55.256Z"),new Date("2018-09-06T19:49:54.328Z"),"payment",86926,56325,new Date("2018-09-05T22:52:59.441Z"),"Colorado capacitor"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23288,str: "capacitor",date: new Date("2018-09-06T16:27:42.214Z"),obj: {_id: 23289,num: 81825,date: new Date("2018-09-06T11:39:48.733Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23290,str: "azure",num: 26689,date: new Date("2018-09-06T10:15:05.168Z"),array: [],obj: {_id: 23291,str: "architect",num: 8417,array: [{_id: 23292,str: "Senior Bedfordshire",num: 59580,date: new Date("2018-09-06T08:29:56.744Z"),obj: {_id: 23293,num: 51546,date: new Date("2018-09-05T21:55:15.345Z"),array: ["Estonia reboot bypass",45428,new Date("2018-09-06T17:09:28.526Z")]}},new Date("2018-09-06T08:18:28.307Z"),55876,35748,"Brunei Darussalam deposit",[[],new Date("2018-09-05T23:56:34.472Z")],62343,"Multi-tiered",{_id: 23294,str: "calculate alarm action-items",array: [],obj: {_id: 23295,num: 56662,date: new Date("2018-09-06T07:48:45.360Z"),obj: {}}},new Date("2018-09-06T04:01:12.797Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 23296,str: "Fantastic Metal Bacon Guarani capacitor",date: new Date("2018-09-06T16:18:42.903Z"),array: ["International tan Indonesia",new Date("2018-09-05T20:56:06.303Z"),"Borders",89106,{_id: 23297,str: "Intelligent Wooden Table",num: 3442,date: new Date("2018-09-06T09:57:53.668Z"),obj: {}},23350,new Date("2018-09-05T22:00:29.850Z"),new Date("2018-09-06T11:24:23.702Z"),{_id: 23298,str: "index Regional",num: 6733,date: new Date("2018-09-06T06:20:34.348Z"),array: [],obj: {}}],obj: {_id: 23299,str: "synergize New Jersey Beauty",num: 28242,obj: {_id: 23300,num: 80650,date: new Date("2018-09-05T22:35:55.682Z"),array: ["Unbranded Cotton Chips e-tailers",73311]}}});
    },

    function(coll) {
        return coll.insert({_id: 23301,str: "granular Customer multi-byte",date: new Date("2018-09-06T18:12:38.549Z"),array: [],obj: {_id: 23302,str: "back up bandwidth",num: 48265,date: new Date("2018-09-05T23:21:48.948Z"),array: [],obj: {_id: 23303,str: "Garden reboot National",num: 91842,date: new Date("2018-09-05T23:36:56.314Z"),array: ["compressing transmitter",72969,new Date("2018-09-06T16:59:11.503Z"),new Date("2018-09-06T04:40:10.170Z"),[70182,"withdrawal Oregon Ethiopian Birr",[],"systematic Outdoors","revolutionary Handcrafted Cotton Car Intelligent"],20258,new Date("2018-09-06T09:46:03.252Z"),94427,new Date("2018-09-06T19:21:11.632Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23304,str: "stable Iowa white",num: 65975,date: new Date("2018-09-05T23:42:41.400Z"),array: [[],87666,28707,96248,new Date("2018-09-06T05:19:56.219Z"),"Kyrgyz Republic Auto Loan Account","empower Mali Rustic Frozen Car",49475,[{_id: 23305,str: "bandwidth task-force",num: 68888,array: [],obj: {_id: 23306,str: "calculate Buckinghamshire program",num: 43957,date: new Date("2018-09-06T17:18:03.965Z"),obj: {_id: 23307,date: new Date("2018-09-06T11:18:02.887Z"),array: [],obj: {}}}}],new Date("2018-09-06T08:13:44.214Z"),{_id: 23308,str: "Regional Ergonomic",num: 70425,array: ["Summit",new Date("2018-09-06T15:09:42.889Z")],obj: {_id: 23309,num: 2180,date: new Date("2018-09-06T14:48:46.398Z")}},["invoice"],8978,{_id: 23310,str: "JSON National",date: new Date("2018-09-06T16:19:52.637Z"),array: [],obj: {}},{_id: 23311,date: new Date("2018-09-06T00:36:16.546Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 23312,str: "incentivize New Taiwan Dollar e-markets",num: 64325,date: new Date("2018-09-06T11:04:19.203Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23313,str: "reboot",num: 79247,array: [new Date("2018-09-06T11:32:11.532Z"),"systems Investor target",71583,new Date("2018-09-06T10:48:23.266Z"),"web services Tools",56158,"1080p",{_id: 23314,num: 92566,date: new Date("2018-09-05T20:00:32.065Z"),array: [[],new Date("2018-09-05T23:03:36.703Z")],obj: {_id: 23315,str: "circuit Washington Unbranded",num: 60068,date: new Date("2018-09-06T17:02:44.645Z"),array: [[],68846]}},"Borders eco-centric Awesome Granite Pizza",{_id: 23316,str: "responsive Mobility Ball",num: 82636,date: new Date("2018-09-06T13:17:19.560Z"),obj: {_id: 23317,str: "Frozen Consultant open-source",array: [],obj: {_id: 23318,num: 54777,date: new Date("2018-09-06T18:33:49.933Z")}}},40456,"e-business backing up",{_id: 23319,date: new Date("2018-09-05T21:32:04.435Z"),array: [new Date("2018-09-06T09:42:45.143Z")],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23320,str: "maroon Awesome scalable",num: 82439,date: new Date("2018-09-06T13:09:55.378Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23321,str: "SAS",num: 20504,date: new Date("2018-09-06T19:34:54.695Z"),array: [50394,"moratorium Dynamic invoice",["Beauty open-source metrics"],new Date("2018-09-06T15:59:15.643Z"),{_id: 23322,str: "Multi-lateral withdrawal 1080p",date: new Date("2018-09-06T08:45:23.656Z"),array: [],obj: {}},31371,{_id: 23323,num: 4854,array: [],obj: {_id: 23324,num: 54891,array: [],obj: {_id: 23325,str: "Unbranded Granite Tuna synergies",num: 40641}}},49249,"Tools",new Date("2018-09-05T20:02:58.543Z"),15996,new Date("2018-09-05T21:47:48.679Z"),91269,["productivity"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23326,str: "Cotton Vietnam communities",num: 19207,array: []});
    },

    function(coll) {
        return coll.insert({_id: 23327,str: "Handcrafted Chair",num: 10120,date: new Date("2018-09-06T00:21:07.632Z")});
    },

    function(coll) {
        return coll.insert({_id: 23328,str: "cross-platform Georgia",num: 84127,date: new Date("2018-09-06T14:56:27.987Z"),array: [87529,"backing up functionalities Investor","ROI",new Date("2018-09-06T17:42:26.762Z"),[],90622,18870,{_id: 23329,date: new Date("2018-09-05T22:44:32.921Z"),array: [],obj: {_id: 23330,str: "Oregon",num: 92498,date: new Date("2018-09-05T20:00:56.674Z"),array: [82518,new Date("2018-09-06T16:04:47.144Z"),{_id: 23331,str: "optical District program",num: 51417,date: new Date("2018-09-06T15:41:33.377Z"),array: []},[new Date("2018-09-06T13:20:31.315Z")],new Date("2018-09-06T11:27:43.950Z")],obj: {}}},{_id: 23332,str: "Awesome Cotton Shoes exuding",num: 51245,array: [],obj: {_id: 23333,str: "dedicated Car",num: 11670,date: new Date("2018-09-06T08:16:48.302Z"),obj: {_id: 23334,num: 2456,array: [],obj: {}}}},5565,"global"]});
    },

    function(coll) {
        return coll.insert({_id: 23335,str: "Accounts Credit Card Account",num: 49645,date: new Date("2018-09-06T14:10:02.273Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23336,str: "Fields integrated",date: new Date("2018-09-06T05:02:11.306Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23337,str: "Legacy Incredible Granite Chair",num: 94979,date: new Date("2018-09-06T16:56:49.306Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23338,str: "Handcrafted Rubber Chair lime Kids",num: 42767,date: new Date("2018-09-06T19:10:17.749Z"),array: [{_id: 23339,str: "Sleek Rubber Shoes",num: 52620,date: new Date("2018-09-05T23:52:25.808Z"),array: ["solutions","Manager",{_id: 23340,num: 35798,array: [],obj: {_id: 23341,str: "Usability circuit AGP",date: new Date("2018-09-06T07:04:26.444Z"),obj: {_id: 23342,str: "Square North Carolina primary",num: 53807,date: new Date("2018-09-06T16:13:29.033Z"),array: [],obj: {}}}},new Date("2018-09-05T21:53:56.644Z")],obj: {_id: 23343,num: 60619,array: [new Date("2018-09-05T20:24:51.796Z")],obj: {}}},90354,new Date("2018-09-06T07:09:10.259Z"),"Total driver",76492,4826,[{_id: 23344,num: 50055,array: [8106],obj: {}},22434,[]],{_id: 23345,str: "Health Credit Card Account indexing",num: 64300,date: new Date("2018-09-05T23:28:43.177Z")},62802,"bypass Djibouti",new Date("2018-09-06T15:26:56.445Z")]});
    },

    function(coll) {
        return coll.insert({_id: 23346,str: "quantifying Buckinghamshire vertical",num: 75524,date: new Date("2018-09-06T04:20:37.220Z"),array: [48376,88456,"Borders Mouse",new Date("2018-09-06T01:27:37.939Z"),"Reverse-engineered Forward Table","Communications",new Date("2018-09-06T02:07:03.764Z"),31611,63475,[new Date("2018-09-06T06:20:37.656Z"),{_id: 23347,str: "Ranch",date: new Date("2018-09-06T06:06:19.972Z"),array: [],obj: {}},[],"toolset Personal Loan Account",20756],{_id: 23348,str: "Developer",num: 93023,date: new Date("2018-09-06T07:29:44.601Z"),array: ["Trinidad and Tobago Dollar integrated Belarussian Ruble"],obj: {_id: 23349,str: "facilitate",num: 59306}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23350,str: "microchip Facilitator PCI",date: new Date("2018-09-06T18:01:29.407Z"),array: [new Date("2018-09-06T09:34:39.653Z"),"Lempira",87203,new Date("2018-09-06T19:19:23.855Z"),{_id: 23351,str: "Tunisia e-business Chips",num: 70565,date: new Date("2018-09-05T20:22:41.434Z"),array: [],obj: {}},"Toys","facilitate",24980,58607,{_id: 23352,num: 13961,array: [[],"Universal Exclusive"]},19465,new Date("2018-09-06T18:19:18.806Z"),"Unbranded Handmade",60333],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23353,str: "Garden Secured",num: 5376,date: new Date("2018-09-06T15:08:27.987Z"),array: [6609,"online","action-items digital",new Date("2018-09-06T09:12:00.464Z")],obj: {_id: 23354,num: 90015,date: new Date("2018-09-06T12:39:44.753Z"),array: ["local matrices Intelligent Concrete Sausages",[],new Date("2018-09-05T23:02:52.807Z"),35079,31112,new Date("2018-09-05T21:51:13.644Z"),{_id: 23355,str: "Handmade payment B2C",date: new Date("2018-09-06T06:29:09.232Z"),array: [],obj: {_id: 23356,str: "functionalities gold CSS",date: new Date("2018-09-06T15:32:42.779Z"),array: []}},{_id: 23357,str: "evolve navigating systemic",num: 57535,date: new Date("2018-09-05T21:42:09.930Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23358,str: "Implementation productivity Texas",num: 42863,obj: {_id: 23359,num: 73560,date: new Date("2018-09-06T01:29:18.873Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23360,str: "maroon multi-byte Buckinghamshire",num: 26275,date: new Date("2018-09-05T21:11:12.559Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 23361,str: "Illinois SQL invoice",num: 70969,date: new Date("2018-09-06T01:13:22.382Z"),array: [70913,new Date("2018-09-06T06:23:56.144Z"),"Web Chips overriding",45090,19761,new Date("2018-09-05T22:49:24.387Z"),89772,new Date("2018-09-06T11:44:28.078Z"),"system tan",{_id: 23362,str: "Parkway Mongolia",num: 34542,date: new Date("2018-09-06T17:02:59.362Z"),array: [new Date("2018-09-06T14:35:39.032Z")],obj: {}},"haptic Berkshire","Convertible Marks Open-source THX",[19276],{_id: 23363,str: "Manager IB infomediaries",num: 34002,date: new Date("2018-09-06T04:30:58.983Z"),array: []},[[]],"e-commerce"],obj: {_id: 23364,str: "Games Checking Account",date: new Date("2018-09-06T00:26:11.790Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 23365,str: "exuding Massachusetts Developer",num: 8333,date: new Date("2018-09-06T09:15:44.665Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23366,str: "Dynamic payment",date: new Date("2018-09-06T06:46:22.460Z"),array: [new Date("2018-09-05T22:12:33.883Z"),47021,[],"Refined Networked copy","invoice enterprise","Berkshire Home transmit",{_id: 23367,num: 28421,date: new Date("2018-09-05T23:45:17.927Z"),array: [46110,{_id: 23368,str: "Handmade",date: new Date("2018-09-05T21:37:01.470Z"),array: [60231,"mobile"],obj: {}}],obj: {_id: 23369,str: "contingency Lead Credit Card Account",num: 43970,array: [],obj: {}}},{_id: 23370,str: "parse orange",num: 48819,date: new Date("2018-09-06T08:36:34.362Z")},new Date("2018-09-06T01:34:26.409Z"),[],new Date("2018-09-06T18:57:30.453Z"),54529],obj: {_id: 23371,str: "Unbranded",date: new Date("2018-09-06T00:45:29.691Z"),array: ["Beauty",new Date("2018-09-06T14:23:23.710Z"),[],new Date("2018-09-06T19:13:33.471Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23372,str: "Convertible Marks",num: 84380,date: new Date("2018-09-06T05:24:53.428Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23373,str: "Springs",num: 76239,date: new Date("2018-09-06T11:30:09.478Z"),array: [],obj: {_id: 23374,str: "Reactive",num: 44897,date: new Date("2018-09-06T19:33:32.851Z"),array: [45962,"knowledge base multi-byte transmit",10524,new Date("2018-09-06T14:33:45.647Z"),"grey",{_id: 23375,date: new Date("2018-09-06T05:44:40.539Z"),array: [new Date("2018-09-06T14:53:18.892Z")],obj: {_id: 23376,str: "Solomon Islands Bedfordshire",num: 16039}},70191,new Date("2018-09-06T03:30:52.179Z"),[[],new Date("2018-09-06T13:30:21.812Z"),"Personal Loan Account Singapore Dollar"],50316,{_id: 23377,str: "Generic Frozen Keyboard digital Home Loan Account",date: new Date("2018-09-06T05:00:01.157Z"),array: [46865],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 23378,str: "Plastic Configuration",num: 4743,date: new Date("2018-09-06T09:32:15.417Z"),array: ["Table Sausages",new Date("2018-09-06T14:16:22.952Z"),"back up",[],"Keyboard Health",68636,new Date("2018-09-05T22:54:30.692Z"),12004,"adapter quantify viral","protocol"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23379,str: "synthesizing Florida",num: 55980,date: new Date("2018-09-06T16:50:46.625Z"),array: ["enhance Louisiana",{_id: 23380,str: "Tasty JSON Wooden",num: 2950,date: new Date("2018-09-06T03:23:53.654Z"),array: [],obj: {}},new Date("2018-09-06T15:32:56.276Z"),29883,[new Date("2018-09-06T06:48:17.218Z")],"Christmas Island mobile bottom-line",96742,{_id: 23381,str: "Gorgeous RSS United Kingdom",num: 17580,array: []},"Manager transmit",84847,new Date("2018-09-05T20:34:20.265Z")],obj: {_id: 23382,str: "input multi-byte",num: 39062,date: new Date("2018-09-06T08:20:54.844Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 23383,str: "Ramp Brunei Darussalam Salad",num: 6583,array: [[],69537,{_id: 23384,num: 79629,date: new Date("2018-09-06T18:30:06.484Z"),array: [new Date("2018-09-05T22:43:17.183Z"),"open-source"]},"asymmetric",302,new Date("2018-09-06T07:46:27.338Z"),new Date("2018-09-06T09:50:50.518Z"),[],"Avon reciprocal",new Date("2018-09-06T18:11:14.554Z"),67240,49835,50131],obj: {_id: 23385,str: "Italy",date: new Date("2018-09-06T00:34:17.755Z"),array: [],obj: {_id: 23386,str: "Unbranded Computer",date: new Date("2018-09-05T23:43:20.437Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 23387,str: "Granite Licensed Global",num: 64791,date: new Date("2018-09-06T18:19:27.385Z"),array: [],obj: {_id: 23388,str: "Bedfordshire Refined Web",date: new Date("2018-09-06T18:20:50.941Z"),array: [new Date("2018-09-06T00:56:48.918Z"),"systems Maryland",12024,"ROI",16680,32779,new Date("2018-09-06T15:20:45.301Z"),50033,new Date("2018-09-05T22:16:14.351Z"),[],37644],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23389,str: "olive",num: 37943,date: new Date("2018-09-06T13:45:24.363Z"),obj: {_id: 23390,str: "Accountability Synergized Investment Account",num: 85841,array: [49961,37534,new Date("2018-09-06T02:29:31.523Z"),"SMTP Ford","multimedia Lari",new Date("2018-09-06T12:29:45.546Z"),1933,[],{_id: 23391,str: "deposit",date: new Date("2018-09-06T09:03:35.681Z"),array: [47140,"Pound Sterling Licensed"],obj: {_id: 23392,num: 28335,date: new Date("2018-09-05T20:29:05.478Z"),array: [],obj: {}}},"deposit incentivize Monitored",[{_id: 23393,str: "synergies",num: 55324,date: new Date("2018-09-06T16:58:33.436Z"),array: [new Date("2018-09-05T20:51:59.379Z"),"Games"]},[],{_id: 23394,str: "bypass",array: [new Date("2018-09-06T01:48:28.083Z")],obj: {}}],{_id: 23395,num: 63357,date: new Date("2018-09-06T09:08:53.934Z")},new Date("2018-09-05T20:42:43.990Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23396,str: "Investment Account compress compress",num: 78317,date: new Date("2018-09-06T13:11:43.429Z"),array: ["real-time ADP",5964,"overriding Beauty indigo",new Date("2018-09-06T07:12:14.485Z"),"SDD Auto Loan Account",53304,73072]});
    },

    function(coll) {
        return coll.insert({_id: 23397,str: "Ergonomic",num: 85202,date: new Date("2018-09-06T11:36:15.966Z"),obj: {_id: 23398,str: "Fresh Home Loan Account",num: 88146,date: new Date("2018-09-06T01:58:42.686Z"),array: ["Washington Soap SCSI",new Date("2018-09-06T00:41:10.602Z"),{_id: 23399,str: "Small",date: new Date("2018-09-05T20:56:41.873Z"),array: [],obj: {}},95606,"Pants",[],74930,["Coordinator Refined Fresh Hat"],new Date("2018-09-06T13:26:13.244Z"),66798,{_id: 23400,num: 29807,date: new Date("2018-09-06T02:18:36.404Z"),array: []},68590,new Date("2018-09-06T18:06:38.296Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 23401,str: "Tuna Chief",num: 64627,date: new Date("2018-09-05T21:35:30.671Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23402,str: "plug-and-play target Illinois",num: 59998,date: new Date("2018-09-06T02:13:15.354Z"),array: ["Svalbard & Jan Mayen Islands",50009,"deposit",new Date("2018-09-06T00:01:35.570Z"),68563,{_id: 23403,str: "Internal Director",date: new Date("2018-09-05T23:08:28.277Z"),array: [],obj: {}},2026],obj: {_id: 23404,str: "ivory e-business Small Granite Shoes",num: 42108,date: new Date("2018-09-06T11:11:53.516Z"),array: [{_id: 23405,str: "Auto Loan Account matrix Mouse",num: 10278,array: []},new Date("2018-09-06T09:25:02.781Z"),new Date("2018-09-06T16:19:06.130Z"),[],["Mali revolutionize quantify",new Date("2018-09-06T12:17:34.409Z"),{_id: 23406,num: 86389,date: new Date("2018-09-06T11:23:56.586Z"),obj: {_id: 23407,str: "Ukraine Licensed Concrete Ball",date: new Date("2018-09-06T12:21:54.452Z"),array: [new Date("2018-09-06T00:39:59.155Z")]}}],74199,"Granite navigate deposit",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23408,str: "out-of-the-box redundant methodology",num: 67655,date: new Date("2018-09-06T08:31:58.250Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23409,str: "FTP TCP wireless",date: new Date("2018-09-06T09:34:35.835Z"),array: [[],new Date("2018-09-05T20:56:53.722Z"),[],75373,"HDD Keyboard",new Date("2018-09-06T06:40:16.678Z"),21945,46793,new Date("2018-09-06T10:57:12.115Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23410,str: "deposit Cotton PCI",num: 61112,date: new Date("2018-09-06T15:53:21.879Z"),array: [60125,"deposit Terrace Brand","withdrawal",new Date("2018-09-06T11:52:10.851Z"),new Date("2018-09-05T22:40:26.814Z"),98108,"IB Utah invoice",new Date("2018-09-06T14:41:08.528Z"),[],85034,new Date("2018-09-06T01:55:00.557Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23411,str: "extend",num: 24960,date: new Date("2018-09-06T15:15:52.045Z"),array: ["Handmade Wooden Car Officer Practical",new Date("2018-09-06T10:16:29.089Z"),"Metal Rustic",21954,"evolve",{_id: 23412,str: "Money Market Account partnerships Intelligent Metal Chicken",num: 78861,date: new Date("2018-09-06T01:19:32.560Z"),array: [],obj: {}},52604,new Date("2018-09-06T17:03:46.865Z"),{_id: 23413,str: "Small",num: 41386,date: new Date("2018-09-06T00:02:08.276Z"),array: [],obj: {_id: 23414,str: "Accountability Home copy",array: [],obj: {_id: 23415,num: 97642,date: new Date("2018-09-06T11:36:17.323Z"),array: [],obj: {}}}},48127,[98069,new Date("2018-09-06T09:36:03.326Z")],49011,new Date("2018-09-06T04:49:54.985Z")]});
    },

    function(coll) {
        return coll.insert({_id: 23416,str: "Unbranded Wooden Bacon eco-centric",num: 44027,date: new Date("2018-09-06T15:07:25.732Z"),array: [],obj: {_id: 23417,str: "Implementation target",num: 12043,date: new Date("2018-09-06T00:45:33.478Z"),array: [new Date("2018-09-06T08:49:07.791Z"),50876,54480,"SMTP",new Date("2018-09-06T12:41:20.464Z"),"Fantastic Corporate",["Villages Towels",[],"transmitting invoice",{_id: 23418,num: 73466,date: new Date("2018-09-05T22:18:23.973Z"),array: [],obj: {}}],[{_id: 23419,str: "mobile Borders",date: new Date("2018-09-06T14:05:06.233Z"),obj: {}}],{_id: 23420,str: "intuitive Bedfordshire",num: 30624,array: [new Date("2018-09-06T05:42:27.578Z"),94025,"Toys website"]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23421,str: "infrastructure protocol virtual",num: 51579,date: new Date("2018-09-06T12:34:49.579Z"),array: [new Date("2018-09-06T17:44:36.407Z"),"Light Functionality","Direct RSS online",32094,46447,new Date("2018-09-06T10:43:18.381Z"),"e-commerce",[],new Date("2018-09-06T17:28:32.515Z"),[],"local area network Quality Web",42881],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23422,str: "invoice",num: 97812,date: new Date("2018-09-06T04:17:05.056Z"),array: [9277,"Groves payment program",74356,"generate cultivate user-facing",new Date("2018-09-06T14:11:07.250Z"),[],new Date("2018-09-06T07:03:12.687Z"),99910,{_id: 23423,str: "Indiana Balanced",num: 93478,date: new Date("2018-09-06T19:38:44.812Z"),array: ["French Polynesia Refined Games"],obj: {}},58947,new Date("2018-09-06T19:04:48.447Z"),[]],obj: {_id: 23424,str: "Security microchip",date: new Date("2018-09-06T15:09:02.625Z"),array: [],obj: {_id: 23425,str: "multi-tasking open-source Avon",date: new Date("2018-09-06T08:11:07.430Z"),array: [[],"deposit"]}}});
    },

    function(coll) {
        return coll.insert({_id: 23426,str: "Thailand Bolivar Fuerte Bedfordshire",num: 43198,date: new Date("2018-09-05T20:27:29.218Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 23427,str: "withdrawal EXE",date: new Date("2018-09-06T10:24:26.235Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23428,num: 29757,date: new Date("2018-09-06T15:45:50.813Z"),array: [],obj: {_id: 23429,str: "quantifying",num: 55807,date: new Date("2018-09-06T13:39:09.231Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23430,str: "mesh Future-proofed",num: 72916,array: [],obj: {_id: 23431,str: "enterprise grid-enabled infrastructures",num: 71761,date: new Date("2018-09-06T18:19:36.133Z"),array: [],obj: {_id: 23432,date: new Date("2018-09-05T20:16:56.649Z"),array: [{_id: 23433,str: "input fresh-thinking capacitor",num: 18139,date: new Date("2018-09-06T07:51:24.119Z"),obj: {}},95679,new Date("2018-09-06T18:03:40.352Z"),new Date("2018-09-05T20:28:42.794Z"),"24/7","Credit Card Account fuchsia",[75691,{_id: 23434,str: "Global HDD static",obj: {_id: 23435,str: "Sports Fully-configurable Intelligent",num: 51648,date: new Date("2018-09-06T10:36:51.444Z"),array: [new Date("2018-09-06T11:50:02.664Z"),82013,23180],obj: {_id: 23436,num: 66940,date: new Date("2018-09-05T21:39:30.749Z"),array: []}}},["open-source"]],new Date("2018-09-06T07:09:02.970Z"),new Date("2018-09-06T18:08:29.332Z"),"deposit",48189,{_id: 23437,str: "overriding Belgium"}]}}});
    },

    function(coll) {
        return coll.insert({_id: 23438,str: "brand",num: 85332,date: new Date("2018-09-06T00:17:23.564Z"),array: [],obj: {_id: 23439,str: "Rustic Soft Gloves Outdoors Centralized",date: new Date("2018-09-06T11:53:07.024Z"),obj: {_id: 23440,str: "connecting Ergonomic Wooden Chair Berkshire",num: 54392,date: new Date("2018-09-06T01:44:51.857Z"),array: ["Administrator Future European Unit of Account 9(E.U.A.-9)",new Date("2018-09-05T22:09:11.037Z"),70145,new Date("2018-09-06T08:56:07.572Z"),[],"lime bandwidth",new Date("2018-09-06T11:09:07.170Z"),15610,92245,"Mississippi",{_id: 23441,num: 7657,date: new Date("2018-09-05T21:42:54.684Z"),array: [55642]},21810,[],{_id: 23442,str: "client-server invoice",num: 12670,date: new Date("2018-09-06T15:29:20.827Z"),array: [{_id: 23443,obj: {_id: 23444,str: "Cloned indexing deposit",num: 64109,array: [new Date("2018-09-06T15:36:12.082Z")],obj: {}}}],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 23445,str: "Auto Loan Account Administrator",num: 1618,date: new Date("2018-09-06T04:04:40.778Z"),array: [77604,77825,new Date("2018-09-06T18:34:23.244Z"),"Investor","killer Hill Balanced",80273,"Robust",[new Date("2018-09-06T05:09:39.282Z")],{_id: 23446,str: "e-tailers Progressive Licensed",num: 84808,date: new Date("2018-09-06T09:03:09.069Z"),array: [{_id: 23447,str: "copying",num: 26385,date: new Date("2018-09-06T11:09:12.982Z"),array: [],obj: {_id: 23448,date: new Date("2018-09-06T17:12:28.773Z"),obj: {}}},[{_id: 23449,date: new Date("2018-09-06T18:25:14.523Z"),array: []}],"Ergonomic Wooden Mouse architect infomediaries",new Date("2018-09-06T09:15:14.081Z"),{_id: 23450,str: "Tenge Analyst",num: 36884,obj: {_id: 23451,date: new Date("2018-09-06T14:16:56.920Z"),array: [],obj: {}}}]},{_id: 23452,num: 50358,obj: {_id: 23453,str: "Implementation Soap",array: [],obj: {}}},new Date("2018-09-05T21:27:13.802Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23454,str: "Rwanda maximize",num: 25605,date: new Date("2018-09-06T11:41:09.879Z"),array: [{_id: 23455,str: "instruction set",num: 62522,date: new Date("2018-09-06T06:31:10.418Z"),array: [new Date("2018-09-06T09:29:23.413Z")],obj: {_id: 23456,str: "Fords Branch Books",num: 93930,array: [],obj: {}}},"Cheese",new Date("2018-09-06T16:51:32.696Z"),"Personal Loan Account Lempira driver",new Date("2018-09-06T15:39:33.703Z"),20625,"Fresh Swedish Krona navigate",83027,{_id: 23457,str: "deposit 24 hour methodologies",num: 73790,date: new Date("2018-09-06T07:55:33.441Z"),array: [92905,{_id: 23458,str: "solutions",date: new Date("2018-09-06T05:40:15.161Z"),array: []},71923,new Date("2018-09-06T08:41:14.527Z"),new Date("2018-09-06T03:38:34.404Z")],obj: {_id: 23459,date: new Date("2018-09-06T11:29:04.506Z"),array: []}},[["deposit black Washington"]],new Date("2018-09-06T11:13:12.967Z"),8367],obj: {_id: 23460,num: 50499,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23461,str: "backing up quantifying",num: 98889,date: new Date("2018-09-06T06:51:35.572Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23462,str: "Shirt",num: 38648,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23463,str: "Producer Steel",num: 12647,date: new Date("2018-09-06T01:20:37.535Z"),array: [53836,{_id: 23464,str: "Global vortals Licensed Frozen Computer",num: 81280,date: new Date("2018-09-06T05:20:25.156Z"),array: [],obj: {}},new Date("2018-09-06T07:52:40.440Z"),"functionalities",{_id: 23465,num: 10512,date: new Date("2018-09-06T00:50:23.045Z"),array: [32701],obj: {}},{_id: 23466,num: 1664,date: new Date("2018-09-06T01:17:43.064Z"),array: ["International Bedfordshire lime",80223,"teal Intelligent"],obj: {}},[],new Date("2018-09-06T05:12:03.214Z"),new Date("2018-09-06T04:28:02.703Z"),new Date("2018-09-06T05:25:16.524Z"),new Date("2018-09-06T05:40:22.719Z")]});
    },

    function(coll) {
        return coll.insert({_id: 23467,str: "Face to face Berkshire Hawaii",num: 45436,date: new Date("2018-09-06T05:18:06.661Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23468,str: "Serbian Dinar Gloves",num: 32147,array: [new Date("2018-09-06T06:14:36.808Z"),new Date("2018-09-06T01:45:13.284Z"),5430,{_id: 23469,str: "Rustic Cotton Sausages analyzer Personal Loan Account",num: 74471,date: new Date("2018-09-06T11:43:09.689Z"),array: [],obj: {}},"Facilitator Developer",{_id: 23470,str: "Bahamian Dollar",date: new Date("2018-09-05T22:53:11.998Z"),obj: {}},"Fall content Berkshire",83687,12029,[{_id: 23471,num: 63625,date: new Date("2018-09-06T18:53:02.218Z"),array: [],obj: {_id: 23472,str: "De-engineered Cameroon Money Market Account",num: 90105,obj: {}}}],21251,"Strategist Money Market Account"]});
    },

    function(coll) {
        return coll.insert({_id: 23473,str: "calculating Lead reboot",num: 37444,date: new Date("2018-09-06T17:00:10.399Z"),array: [34450,"repurpose Awesome bypass",new Date("2018-09-06T10:25:00.032Z"),new Date("2018-09-06T01:23:12.344Z"),42404,"back-end Berkshire","Tasty",[],{_id: 23474,str: "hierarchy Awesome Cayman Islands",num: 50823,date: new Date("2018-09-06T19:06:13.066Z"),obj: {}},65979,99307,"Industrial"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23475,str: "B2C East Caribbean Dollar",num: 96196,date: new Date("2018-09-06T05:29:07.496Z"),array: ["payment optimize orange",new Date("2018-09-06T17:15:20.896Z"),"maroon Georgia","withdrawal Clothing","Sausages interactive indexing","interface",54824,{_id: 23476,num: 40974,date: new Date("2018-09-06T04:58:42.951Z"),obj: {}},1958,new Date("2018-09-06T14:44:12.970Z"),new Date("2018-09-06T08:31:21.494Z"),9810]});
    },

    function(coll) {
        return coll.insert({_id: 23477,str: "protocol Automotive",num: 93114,date: new Date("2018-09-06T13:49:46.522Z"),array: [],obj: {_id: 23478,date: new Date("2018-09-06T02:19:46.571Z"),array: [new Date("2018-09-06T16:36:40.859Z"),89297,10782,{_id: 23479,num: 9369,date: new Date("2018-09-06T04:47:40.815Z"),array: [new Date("2018-09-06T12:30:18.674Z"),"driver","override Administrator","efficient",{_id: 23480,str: "New Mexico Borders",num: 77902,array: [68741,25422,"Senior",[new Date("2018-09-06T03:47:57.967Z")],[]]}],obj: {_id: 23481,num: 76327,date: new Date("2018-09-06T01:20:52.756Z"),array: [],obj: {}}},[],new Date("2018-09-06T19:48:58.270Z"),{_id: 23482,str: "Home Loan Account",num: 84446,array: [{_id: 23483,str: "Rubber Regional Money Market Account"}]}],obj: {_id: 23484,str: "Chief",date: new Date("2018-09-06T05:59:16.374Z"),obj: {_id: 23485,str: "mint green deposit scale",date: new Date("2018-09-06T03:47:58.031Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 23486,str: "Salad Soft",date: new Date("2018-09-06T14:37:58.018Z"),array: [],obj: {_id: 23487,str: "infomediaries Bedfordshire backing up",num: 57202,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23488,str: "brand calculating",num: 42208,date: new Date("2018-09-06T08:10:38.831Z"),array: [],obj: {_id: 23489,str: "Planner Corporate",num: 27774,date: new Date("2018-09-06T02:41:33.795Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23490,str: "olive withdrawal program",num: 49445,date: new Date("2018-09-06T09:28:41.492Z"),array: [],obj: {_id: 23491,str: "synergies redundant",date: new Date("2018-09-05T21:16:03.479Z"),array: ["Fantastic Metal Fish Response Gloves",16138,"Clothing",new Date("2018-09-06T16:47:17.005Z"),[33852],new Date("2018-09-06T15:49:17.495Z"),new Date("2018-09-06T16:09:58.718Z"),[{_id: 23492,str: "Buckinghamshire Car Future",num: 18489,date: new Date("2018-09-05T20:39:20.244Z"),array: [],obj: {_id: 23493,num: 85110}}],new Date("2018-09-06T09:30:55.723Z"),"synthesizing success",36973,"Ergonomic Cotton Shirt Frozen",[93916,{_id: 23494,str: "Home Loan Account Naira bus",num: 54253,date: new Date("2018-09-06T06:36:39.276Z"),array: [39032,56262,{_id: 23495,str: "Pants",num: 41088,obj: {}}],obj: {_id: 23496,str: "copying pricing structure",date: new Date("2018-09-06T07:15:57.794Z")}},new Date("2018-09-06T05:05:17.444Z"),"Checking Account SMS"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23497,str: "Legacy Ouguiya",num: 9402,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23498,str: "functionalities needs-based",num: 88341,date: new Date("2018-09-06T13:58:02.689Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23499,str: "Central EXE",num: 69983,date: new Date("2018-09-06T12:53:10.672Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23500,str: "Small invoice backing up",date: new Date("2018-09-06T00:33:23.779Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23501,str: "Designer upward-trending coherent",date: new Date("2018-09-06T04:10:14.781Z"),array: [],obj: {_id: 23502,str: "programming",num: 18813,date: new Date("2018-09-06T05:13:06.301Z"),array: [64262,[],16576,new Date("2018-09-05T23:12:13.379Z"),"Markets",{_id: 23503,str: "context-sensitive",num: 83491,date: new Date("2018-09-06T01:03:49.247Z"),array: [new Date("2018-09-05T20:49:16.043Z"),new Date("2018-09-06T10:41:38.204Z")],obj: {_id: 23504,num: 13317,date: new Date("2018-09-06T19:25:20.573Z"),obj: {}}},"withdrawal matrix",new Date("2018-09-06T12:07:42.050Z"),{_id: 23505,array: [],obj: {}},{_id: 23506,str: "Island back-end Director",num: 6773,date: new Date("2018-09-06T11:12:48.293Z"),array: [98153,[],"JSON",new Date("2018-09-06T09:47:59.354Z")]},"online",[30791]]}});
    },

    function(coll) {
        return coll.insert({_id: 23507,str: "gold fuchsia",num: 56646,date: new Date("2018-09-06T15:24:44.133Z"),array: [80112,"THX",[752],[],new Date("2018-09-06T10:56:12.887Z"),"support",new Date("2018-09-05T20:19:30.093Z"),41289,{_id: 23508,str: "Home Pa'anga Circle",num: 15694,date: new Date("2018-09-06T00:25:18.053Z"),array: [],obj: {}},38018,new Date("2018-09-06T07:19:55.587Z"),"action-items bandwidth",{_id: 23509,str: "Money Market Account",num: 30906,array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 23510,str: "payment Tugrik connecting",num: 68887,date: new Date("2018-09-05T21:40:26.170Z"),array: [],obj: {_id: 23511,num: 43818,date: new Date("2018-09-06T05:34:52.212Z"),array: [new Date("2018-09-06T10:36:21.740Z"),66525,"Florida",36282,"Garden",[],21123,{_id: 23512,str: "Armenia",date: new Date("2018-09-06T08:53:51.155Z"),array: [{_id: 23513,str: "Berkshire granular Direct",array: ["Palladium","deploy Pants Balboa US Dollar",73676],obj: {}},{_id: 23514,str: "users Frozen THX",num: 10186,date: new Date("2018-09-06T08:32:06.543Z"),obj: {}},new Date("2018-09-06T01:28:04.216Z")]},new Date("2018-09-05T23:09:19.363Z"),new Date("2018-09-05T20:36:40.287Z"),"Bedfordshire sticky",new Date("2018-09-06T19:48:43.796Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 23515,str: "adapter Home Loan Account Accounts",num: 59389,date: new Date("2018-09-06T16:19:14.678Z"),array: ["Games cross-platform",new Date("2018-09-06T08:08:22.525Z"),{_id: 23516,str: "Belgium",num: 18793,date: new Date("2018-09-06T17:39:16.833Z"),array: [],obj: {_id: 23517,str: "Personal Loan Account Representative",array: [new Date("2018-09-06T03:41:22.543Z"),"Chicken compressing Tasty Fresh Salad",68566]}},new Date("2018-09-06T12:19:46.012Z"),3075,"framework",8731,new Date("2018-09-06T07:29:16.437Z"),new Date("2018-09-06T10:26:42.888Z"),new Date("2018-09-06T18:59:35.153Z"),82200,72049],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23518,str: "Rubber Enterprise-wide Auto Loan Account",num: 47032,date: new Date("2018-09-06T09:16:38.560Z"),array: [58234,[new Date("2018-09-06T17:17:52.981Z"),new Date("2018-09-06T15:57:16.042Z"),"Assistant",new Date("2018-09-06T12:18:12.194Z"),25780],"Tools","Applications back up HTTP",{_id: 23519,str: "Steel Health Nevada",num: 82548,date: new Date("2018-09-06T12:30:58.909Z"),array: [[],new Date("2018-09-06T13:59:14.028Z")],obj: {}},"Shoes",[],new Date("2018-09-06T06:47:53.679Z"),"Soft Credit Card Account Estonia"],obj: {_id: 23520,str: "hack",num: 71589}});
    },

    function(coll) {
        return coll.insert({_id: 23521,str: "Sports cross-platform",num: 49608,date: new Date("2018-09-06T19:31:27.297Z"),array: [],obj: {_id: 23522,str: "Streets",num: 12986,date: new Date("2018-09-05T23:12:31.082Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23523,str: "back-end",num: 90080,date: new Date("2018-09-06T02:31:42.682Z"),array: [new Date("2018-09-06T11:24:30.302Z"),"plum Customer",{_id: 23524,num: 70840,date: new Date("2018-09-06T07:57:46.351Z"),array: [new Date("2018-09-06T11:03:43.578Z"),[6787,{_id: 23525,num: 95355,date: new Date("2018-09-06T01:10:08.793Z"),obj: {}},new Date("2018-09-06T11:20:48.335Z"),"California systems ubiquitous",61869,[]]],obj: {_id: 23526,str: "lime Connecticut",num: 41535,date: new Date("2018-09-06T06:22:55.127Z"),array: [],obj: {}}},13931,40992,["Chips Regional Yemeni Rial",{_id: 23527,str: "Officer Home Loan Account",array: [],obj: {}},75778],"Cheese Technician Credit Card Account",new Date("2018-09-06T17:45:08.625Z")],obj: {_id: 23528,str: "application Producer",date: new Date("2018-09-06T19:31:11.221Z"),array: ["seamless Lebanese Pound"]}});
    },

    function(coll) {
        return coll.insert({_id: 23529,str: "Quality South Dakota parallelism",num: 90308,date: new Date("2018-09-05T20:09:14.167Z"),array: ["copy","Personal Loan Account synthesize embrace","Bouvet Island (Bouvetoya)",1052,25274,98011,"array",new Date("2018-09-06T13:07:57.952Z"),new Date("2018-09-06T14:20:44.747Z"),19585],obj: {_id: 23530,str: "Gorgeous Wooden Computer",num: 51825,date: new Date("2018-09-06T05:50:31.453Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 23531,str: "deposit",date: new Date("2018-09-06T06:42:20.087Z"),array: [],obj: {_id: 23532,str: "microchip",num: 41119,array: [90545,new Date("2018-09-05T20:23:18.888Z"),{_id: 23533,num: 12757,date: new Date("2018-09-06T06:04:57.156Z"),array: [],obj: {}},59952,"SSL Ergonomic",new Date("2018-09-06T15:34:51.212Z"),new Date("2018-09-06T08:10:14.603Z"),22291,[],new Date("2018-09-06T04:54:13.779Z"),"calculating"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23534,str: "input Corporate",date: new Date("2018-09-06T14:23:05.079Z"),array: [],obj: {_id: 23535,str: "Concrete",num: 91008,date: new Date("2018-09-06T05:01:13.747Z"),array: [new Date("2018-09-06T11:13:14.850Z"),"Niue",new Date("2018-09-06T09:13:17.174Z"),[{_id: 23536,str: "application Mozambique",num: 62928,date: new Date("2018-09-05T23:12:15.359Z"),obj: {}},[],new Date("2018-09-06T15:31:57.720Z")],"policy","PNG",68206,new Date("2018-09-06T16:59:21.022Z"),45119,88064],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23537,str: "Lead",num: 67618,date: new Date("2018-09-06T05:04:10.717Z"),array: [],obj: {_id: 23538,str: "Concrete",num: 93260,array: [new Date("2018-09-06T06:14:22.263Z"),"Glens Avon calculating",86178,39050,new Date("2018-09-06T07:28:28.444Z"),new Date("2018-09-05T20:27:36.199Z"),"CFA Franc BEAC copying",95699,{_id: 23539,str: "maroon Berkshire Orchestrator",num: 16748,date: new Date("2018-09-05T21:39:48.190Z"),array: ["cultivate"],obj: {}},new Date("2018-09-06T01:55:28.198Z"),"Planner Syrian Arab Republic",82876,"Credit Card Account",[]],obj: {_id: 23540,str: "cyan Buckinghamshire",obj: {_id: 23541,num: 77822,date: new Date("2018-09-05T20:56:53.617Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 23542,str: "Australian Dollar secondary primary",num: 57453,date: new Date("2018-09-06T14:06:20.851Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23543,str: "Intelligent Fresh Fish",date: new Date("2018-09-06T12:33:25.115Z"),array: [48243,new Date("2018-09-06T02:07:01.362Z"),200,"Licensed Steel Towels Burundi",new Date("2018-09-06T17:43:30.696Z"),38964,{_id: 23544,num: 5043,date: new Date("2018-09-06T19:48:52.452Z"),array: [],obj: {_id: 23545,str: "synergistic granular Burg",num: 69321,date: new Date("2018-09-06T09:35:38.864Z")}},"Cambridgeshire Open-source",["Euro IB",{_id: 23546,str: "card",date: new Date("2018-09-06T18:52:30.657Z"),array: [],obj: {_id: 23547,num: 77224,date: new Date("2018-09-06T10:43:38.042Z"),array: [new Date("2018-09-06T08:43:55.940Z"),[]]}},{_id: 23548,str: "Fantastic Plastic Tuna payment whiteboard",num: 4411,date: new Date("2018-09-06T01:03:01.075Z"),obj: {}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23549,str: "frictionless",num: 63781,date: new Date("2018-09-06T04:03:24.587Z"),array: [],obj: {_id: 23550,str: "Vision-oriented invoice withdrawal",num: 98238,array: [new Date("2018-09-06T11:20:24.388Z"),"Sleek",new Date("2018-09-06T11:44:28.651Z"),[{_id: 23551,str: "Bedfordshire",num: 76650,date: new Date("2018-09-06T11:40:58.433Z"),array: [],obj: {}},new Date("2018-09-06T04:10:52.020Z"),92466,"24 hour"],86108,"1080p",{_id: 23552,str: "calculate navigate Niger",date: new Date("2018-09-05T22:00:27.683Z")},"e-enable Lodge Administrator",new Date("2018-09-05T22:49:04.841Z"),{_id: 23553,str: "Accountability",obj: {}},2309,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 23554,str: "Washington",num: 86410,date: new Date("2018-09-05T23:12:38.861Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23555,str: "real-time visualize Dominican Peso",num: 26603,date: new Date("2018-09-05T21:45:12.572Z"),array: [],obj: {_id: 23556,str: "Sudanese Pound 1080p robust",num: 3125,date: new Date("2018-09-06T13:17:07.019Z"),array: [11650,new Date("2018-09-06T03:38:50.844Z"),{_id: 23557,num: 24336,date: new Date("2018-09-05T20:46:23.299Z"),array: [],obj: {_id: 23558,str: "Generic Frozen Bike concept Stand-alone",num: 82751,date: new Date("2018-09-06T13:27:00.817Z"),obj: {}}},"Dynamic Cross-platform blue",14065,{_id: 23559,str: "sky blue",date: new Date("2018-09-06T04:17:38.385Z"),array: [],obj: {_id: 23560,str: "Investment Account pink back up",num: 93336,obj: {}}},new Date("2018-09-06T07:47:20.256Z"),"back-end partnerships Home Loan Account","generate"]}});
    },

    function(coll) {
        return coll.insert({_id: 23561,str: "EXE",num: 33774,date: new Date("2018-09-06T06:08:39.561Z"),array: ["viral bandwidth syndicate",9219,{_id: 23562,str: "tangible back-end Computers",num: 78029,date: new Date("2018-09-06T11:49:11.872Z"),obj: {_id: 23563,num: 92193,date: new Date("2018-09-05T23:22:26.503Z"),obj: {}}},"Metal Persevering out-of-the-box",new Date("2018-09-05T21:02:59.356Z"),"Ergonomic backing up database",new Date("2018-09-06T00:53:05.436Z"),[],63620,38194,24591,new Date("2018-09-05T23:16:56.697Z")],obj: {_id: 23564,str: "envisioneer application neural",array: [28031,"Games","Digitized"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23565,str: "Designer",num: 35816,date: new Date("2018-09-06T08:45:56.967Z"),array: ["solid state innovative Solomon Islands Dollar",{_id: 23566,str: "Legacy Bedfordshire Future-proofed",num: 1728,date: new Date("2018-09-06T09:06:14.355Z"),array: [],obj: {}},"architectures New Jersey",69867,72216,74587,new Date("2018-09-06T04:30:33.145Z"),new Date("2018-09-06T06:57:09.776Z"),66979,"Investment Account Division input"],obj: {_id: 23567,str: "Plastic quantifying",num: 37334,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23568,str: "port",num: 71829,array: [[],"azure Cotton Personal Loan Account","Tasty Concrete Bacon monetize synthesizing","Sleek mission-critical Berkshire",new Date("2018-09-06T05:00:31.954Z"),"Automotive",76192,95038,new Date("2018-09-06T03:15:58.127Z"),93787,{_id: 23569,date: new Date("2018-09-05T22:42:42.008Z"),array: [new Date("2018-09-06T17:21:59.082Z")],obj: {}}],obj: {_id: 23570,str: "virtual Metal",num: 9786,date: new Date("2018-09-06T11:18:54.227Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 23571,str: "Shoal Health",num: 99260,date: new Date("2018-09-06T16:15:42.396Z"),array: [],obj: {_id: 23572,str: "Automotive azure orchid",num: 47994,date: new Date("2018-09-06T03:32:25.597Z"),array: [21334,"Security","Cambridgeshire plug-and-play Rustic Wooden Towels",new Date("2018-09-06T16:41:46.604Z"),80019,new Date("2018-09-06T01:49:21.070Z"),"Fundamental Table",[new Date("2018-09-06T12:35:25.668Z"),48406],"extranet Toys Exclusive",{_id: 23573,str: "black",num: 97565,date: new Date("2018-09-05T23:00:06.935Z")},{_id: 23574,array: [],obj: {_id: 23575,str: "bus",array: [],obj: {}}},[],[new Date("2018-09-06T13:41:56.719Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23576,str: "backing up",num: 38138,date: new Date("2018-09-06T19:49:47.880Z"),array: [],obj: {_id: 23577,str: "Outdoors Sleek",num: 77896,date: new Date("2018-09-06T01:23:56.796Z"),array: [29224,"Credit Card Account Kenyan Shilling Facilitator",[],new Date("2018-09-06T04:33:47.275Z"),new Date("2018-09-06T18:09:38.510Z"),6610,["Bangladesh Plastic",{_id: 23578,str: "Wooden index deliverables",num: 21,date: new Date("2018-09-06T10:30:34.481Z"),array: ["bus District neural",90101],obj: {_id: 23579,date: new Date("2018-09-06T18:41:09.416Z"),array: [new Date("2018-09-06T14:24:58.215Z")]}},{_id: 23580,str: "Frozen neural Practical Cotton Chicken",num: 89296,obj: {_id: 23581,str: "input workforce panel",num: 51340,array: [],obj: {}}}],90331,[],31800,78313]}});
    },

    function(coll) {
        return coll.insert({_id: 23582,num: 84948,date: new Date("2018-09-05T20:23:51.823Z"),array: ["Mauritius Rupee",new Date("2018-09-05T20:06:22.381Z"),new Date("2018-09-06T13:05:18.053Z"),11884,97181,4122,[{_id: 23583,str: "turn-key Home Loan Account even-keeled",num: 56445,date: new Date("2018-09-06T16:53:30.031Z"),array: []}],"Frozen action-items",{_id: 23584,str: "Bacon",num: 58369,date: new Date("2018-09-06T12:16:16.964Z"),array: [],obj: {}},"Regional",new Date("2018-09-06T06:47:10.295Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23585,num: 80132,date: new Date("2018-09-06T06:51:49.840Z"),array: [[],2439,41804,new Date("2018-09-06T06:50:55.238Z"),79925,"compress",{_id: 23586,str: "alarm",num: 30189,date: new Date("2018-09-06T06:58:40.639Z"),array: [new Date("2018-09-06T16:59:41.343Z"),new Date("2018-09-06T13:08:01.367Z"),{_id: 23587,str: "logistical",array: [],obj: {}},new Date("2018-09-05T20:55:11.061Z")],obj: {}},"incubate discrete Forward",new Date("2018-09-06T14:44:26.084Z"),9350]});
    },

    function(coll) {
        return coll.insert({_id: 23588,str: "content Russian Ruble Bangladesh",date: new Date("2018-09-06T00:33:22.646Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23589,str: "cross-media",num: 25113,date: new Date("2018-09-06T05:15:34.076Z"),array: [new Date("2018-09-06T16:46:44.523Z"),"Handcrafted Cotton Bike",{_id: 23590,str: "digital Total unleash",date: new Date("2018-09-06T16:39:10.532Z"),array: [],obj: {}},5424,new Date("2018-09-06T19:48:49.725Z"),4113,"Central TCP Innovative",new Date("2018-09-05T22:49:52.030Z"),new Date("2018-09-05T20:56:42.404Z"),[],"Up-sized District"],obj: {_id: 23591,str: "Ohio Concrete",num: 87001,date: new Date("2018-09-06T00:10:46.593Z"),array: [{_id: 23592,num: 846,obj: {_id: 23593,str: "Iran override",num: 46655,date: new Date("2018-09-06T06:56:53.186Z")}}],obj: {_id: 23594,str: "Fresh Data Cotton",num: 11707,array: [5908,79632,"Practical Metal Salad",{_id: 23595,num: 84204,obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 23596,str: "open-source Belarussian Ruble",num: 57432,date: new Date("2018-09-06T07:15:56.240Z"),array: [new Date("2018-09-06T11:12:49.117Z"),66436,new Date("2018-09-05T23:21:02.849Z"),70529,new Date("2018-09-06T06:09:18.353Z"),"Orchestrator","Cross-platform wireless",67,95533,"USB",new Date("2018-09-06T07:36:40.710Z")],obj: {_id: 23597,str: "Beauty back-end Auto Loan Account",num: 59734,date: new Date("2018-09-06T11:02:55.464Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23598,str: "Kiribati",num: 89828,date: new Date("2018-09-06T10:02:30.044Z"),array: ["Credit Card Account Customizable",[],new Date("2018-09-06T14:57:54.925Z"),new Date("2018-09-06T14:12:46.756Z"),new Date("2018-09-05T23:13:30.194Z"),"Solutions Suriname open-source","South Carolina",48848,64217,{_id: 23599,str: "budgetary management Salad",num: 33892,obj: {}},{_id: 23600,date: new Date("2018-09-06T19:07:54.383Z"),array: [26852]},new Date("2018-09-06T18:31:15.295Z")],obj: {_id: 23601,str: "Incredible Plastic Car Persevering Metal",date: new Date("2018-09-06T19:31:25.060Z"),array: ["matrix Avon"]}});
    },

    function(coll) {
        return coll.insert({_id: 23602,str: "copy programming",num: 99525,date: new Date("2018-09-06T13:12:20.922Z"),array: [],obj: {_id: 23603,str: "interface Cheese Iceland Krona",num: 8968,date: new Date("2018-09-06T02:00:15.842Z"),array: [64378,new Date("2018-09-06T14:09:39.872Z"),"Intelligent Metal Chips Wallis and Futuna",{_id: 23604,num: 27839,date: new Date("2018-09-05T21:41:56.469Z"),obj: {}},new Date("2018-09-06T08:41:46.616Z"),{_id: 23605,array: ["payment Facilitator Jamaican Dollar",7937,"COM",[],22095]},new Date("2018-09-06T04:39:34.941Z"),[],"Berkshire invoice",21622,new Date("2018-09-06T02:34:42.767Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23606,str: "Port synthesizing",num: 46135,date: new Date("2018-09-06T03:52:15.515Z"),array: ["Illinois mint green Hawaii",46981,new Date("2018-09-06T16:40:45.780Z"),new Date("2018-09-06T04:54:29.239Z"),"Markets HDD",[{_id: 23607,str: "collaborative Wisconsin Grocery",num: 66475,array: [],obj: {}},"Principal",17946,new Date("2018-09-06T01:59:36.237Z"),{_id: 23608,str: "Incredible Soft Chicken methodology",num: 87063,date: new Date("2018-09-05T21:52:42.791Z"),array: [],obj: {_id: 23609,str: "Avon HDD",date: new Date("2018-09-05T23:14:14.084Z")}}],{_id: 23610,str: "Identity productize",num: 24178,array: [],obj: { _id: 23611 }},51508,{_id: 23612,str: "payment Principal harness",num: 3223,date: new Date("2018-09-06T04:18:54.871Z"),array: [],obj: {_id: 23613,date: new Date("2018-09-06T03:44:40.046Z"),array: [83086,"Points","Netherlands Antilles next-generation"]}},[],new Date("2018-09-06T04:06:13.631Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23614,str: "Rubber Interactions reintermediate",num: 42405,date: new Date("2018-09-06T10:04:03.355Z"),array: [],obj: {_id: 23615,str: "Bedfordshire Division Colorado",num: 11849,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23616,str: "optical Trinidad and Tobago Dollar",num: 93877,date: new Date("2018-09-05T23:58:43.659Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23617,num: 50981,date: new Date("2018-09-06T00:24:20.405Z"),array: [],obj: {_id: 23618,str: "Incredible Granite Mouse copying Shirt",num: 31208,date: new Date("2018-09-05T20:19:37.772Z"),array: ["SQL",{_id: 23619,num: 71562,date: new Date("2018-09-06T05:34:26.448Z"),array: [81048],obj: {_id: 23620,date: new Date("2018-09-06T13:17:30.969Z"),array: [],obj: {}}},new Date("2018-09-06T16:00:57.617Z"),28860,new Date("2018-09-06T16:13:19.028Z"),"auxiliary orchid","Reduced",68168,new Date("2018-09-06T03:52:10.754Z"),"Timor-Leste Dynamic",new Date("2018-09-05T20:12:02.317Z"),[new Date("2018-09-06T16:20:55.367Z")],[],20792],obj: {_id: 23621,str: "deposit Planner Gorgeous",num: 33550}}});
    },

    function(coll) {
        return coll.insert({_id: 23622,str: "calculating Cotton card",num: 32307,date: new Date("2018-09-06T11:07:07.258Z"),array: [],obj: {_id: 23623,str: "Avon generating",num: 99853,date: new Date("2018-09-06T02:03:01.137Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23624,str: "Solomon Islands Dollar Shoes",num: 99243,date: new Date("2018-09-06T15:26:09.443Z"),array: ["front-end",new Date("2018-09-06T18:23:30.379Z"),[],59654,new Date("2018-09-06T12:50:31.124Z"),18145,{_id: 23625,str: "Future Namibia IB",num: 49870,date: new Date("2018-09-06T05:38:58.936Z"),array: [],obj: {_id: 23626,str: "input",num: 26954,array: []}},"Industrial Fantastic Rubber Fish",58711,new Date("2018-09-06T02:18:56.891Z"),new Date("2018-09-06T14:28:33.308Z"),new Date("2018-09-06T17:25:01.400Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23627,str: "Generic",num: 84165,date: new Date("2018-09-06T10:55:25.214Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23628,str: "Gibraltar ADP Sports",num: 16676,date: new Date("2018-09-06T08:54:13.764Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23629,str: "deposit Money Market Account Rwanda",num: 53803,date: new Date("2018-09-05T21:54:45.662Z"),array: [],obj: {_id: 23630,str: "Checking Account",date: new Date("2018-09-06T19:12:00.301Z"),obj: {_id: 23631,date: new Date("2018-09-06T10:22:50.924Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23632,str: "Analyst",num: 79301,date: new Date("2018-09-05T22:38:40.502Z"),array: [],obj: {_id: 23633,str: "Platinum",date: new Date("2018-09-06T02:41:26.166Z"),array: [48500,new Date("2018-09-06T06:34:40.788Z"),51183,"Czech Republic",new Date("2018-09-06T10:52:38.976Z"),"compressing",{_id: 23634,num: 1734,date: new Date("2018-09-06T03:07:06.075Z"),array: []},22806,"architectures Incredible Plastic Cheese",11391,94402,{_id: 23635,str: "Rustic Kids",num: 30452,array: ["ivory"],obj: {}},[]],obj: {_id: 23636,str: "Computer hacking Shirt",num: 93860,date: new Date("2018-09-06T15:16:36.055Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23637,str: "Valleys real-time Beauty",num: 26012,date: new Date("2018-09-06T07:17:20.541Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23638,num: 13554,date: new Date("2018-09-06T02:14:35.045Z"),array: [],obj: {_id: 23639,str: "models payment invoice",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23640,str: "Director",num: 91472,date: new Date("2018-09-06T14:20:04.261Z"),array: [],obj: {_id: 23641,str: "middleware",num: 35339,date: new Date("2018-09-06T07:22:26.419Z"),array: [new Date("2018-09-06T17:52:29.963Z"),"Handcrafted",14603,31717,new Date("2018-09-06T14:43:20.935Z"),99380,new Date("2018-09-06T07:29:34.312Z"),"Cross-platform Pants",["Tasty Wooden Hat Mobility interfaces",25360],"synthesize Soap deposit",{_id: 23642,num: 49559,date: new Date("2018-09-06T06:13:29.722Z"),array: [new Date("2018-09-06T09:37:00.713Z")],obj: {}},[{_id: 23643,num: 53150,obj: {}},95744,new Date("2018-09-05T23:07:48.243Z"),new Date("2018-09-06T07:36:51.189Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 23644,str: "Montenegro",array: [],obj: {_id: 23645,str: "middleware 24 hour Networked",num: 67958,date: new Date("2018-09-06T08:14:09.725Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23646,num: 79700,date: new Date("2018-09-06T08:13:56.604Z"),array: ["Nevada","product SMS Manager",44136,new Date("2018-09-06T05:33:32.349Z"),{_id: 23647,str: "programming networks Pizza",num: 88505,array: [],obj: {}},new Date("2018-09-06T08:19:49.014Z"),new Date("2018-09-06T15:11:05.856Z"),"models","Liaison Multi-lateral",[66008,[]],19350],obj: {_id: 23648,str: "Technician scalable orchid",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 23649,str: "attitude-oriented Computers",num: 2434,date: new Date("2018-09-06T09:45:56.041Z"),array: [2745,new Date("2018-09-06T05:07:18.993Z"),"back-end",26645,"mobile payment Handcrafted Rubber Car",{_id: 23650,str: "Drive",num: 43261,date: new Date("2018-09-06T00:12:14.895Z"),array: ["Shoes Syrian Pound Chips",[]],obj: {}},new Date("2018-09-06T00:21:00.381Z"),13276,25403,"impactful Branding",{_id: 23651,str: "ROI Georgia",num: 79547,date: new Date("2018-09-06T06:36:52.461Z"),array: [],obj: {_id: 23652,date: new Date("2018-09-06T06:57:06.798Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 23653,str: "Factors Swiss Franc Fresh",num: 83355,date: new Date("2018-09-05T23:47:19.276Z"),array: [],obj: {_id: 23654,str: "core demand-driven Extended",num: 7991,date: new Date("2018-09-06T10:36:31.678Z"),array: [56541,"Chair multi-byte Bike",["synthesizing",new Date("2018-09-05T22:31:53.563Z")],75836,{_id: 23655,str: "Handcrafted Metal Chair pink real-time",num: 14101,date: new Date("2018-09-06T03:05:55.298Z"),array: [],obj: {}},{ _id: 23656 },{_id: 23657,str: "Buckinghamshire",num: 55578,date: new Date("2018-09-06T12:03:35.626Z"),array: ["access Germany calculating",new Date("2018-09-06T10:18:13.254Z")],obj: {}},"national Georgia",new Date("2018-09-05T21:47:12.739Z"),new Date("2018-09-06T13:02:15.489Z"),56571,96704,new Date("2018-09-05T21:14:13.410Z")],obj: {_id: 23658,str: "monitoring navigate visionary",num: 53422,date: new Date("2018-09-06T10:38:01.629Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23659,str: "streamline",num: 14364,date: new Date("2018-09-05T23:22:35.922Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23660,str: "black",num: 27675,date: new Date("2018-09-06T15:53:54.146Z"),array: [],obj: {_id: 23661,str: "salmon",num: 74621,date: new Date("2018-09-06T18:06:53.829Z"),array: [new Date("2018-09-06T16:17:04.191Z"),"Borders",new Date("2018-09-06T10:41:10.706Z"),16121,[],[68182],{_id: 23662,str: "dot-com transparent virtual",num: 42600,date: new Date("2018-09-05T21:01:03.087Z"),array: [],obj: {_id: 23663,str: "open-source web-readiness",num: 67360,date: new Date("2018-09-05T20:43:40.039Z"),obj: {}}},93009,new Date("2018-09-05T19:55:40.233Z"),"Quality","motivating synergize",new Date("2018-09-05T20:39:20.562Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 23664,str: "Bedfordshire",num: 40674,date: new Date("2018-09-05T22:12:30.011Z"),array: [],obj: {_id: 23665,str: "Legacy",date: new Date("2018-09-06T08:16:40.811Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23666,str: "XSS Investment Account",num: 73156,date: new Date("2018-09-05T21:58:15.011Z"),obj: {_id: 23667,num: 46158,date: new Date("2018-09-06T12:07:31.526Z"),array: ["complexity Interactions Jamaica","radical",22725,70891,"Licensed",new Date("2018-09-05T22:22:58.307Z"),new Date("2018-09-06T00:56:57.555Z"),{_id: 23668,str: "Quality",num: 39633,date: new Date("2018-09-06T14:31:06.677Z"),obj: {}},[{_id: 23669,str: "Borders Architect invoice",num: 29544,date: new Date("2018-09-06T16:18:08.386Z"),array: [],obj: {}}],["Coordinator success Passage","Regional Senior",67223,{_id: 23670,str: "Alaska Metal schemas",date: new Date("2018-09-06T16:20:19.135Z"),array: []}],604,[]],obj: {_id: 23671,str: "Gorgeous Fresh Salad repurpose",num: 78178,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 23672,str: "Investment Account",num: 27158,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23673,num: 6708,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23674,str: "Legacy Buckinghamshire",num: 82012,date: new Date("2018-09-06T04:04:26.135Z"),obj: {_id: 23675,num: 99356,date: new Date("2018-09-06T16:19:59.314Z"),array: [87922,9182,new Date("2018-09-06T00:21:32.145Z"),{_id: 23676,str: "Credit Card Account hacking",num: 41800,date: new Date("2018-09-06T15:18:13.628Z"),array: [],obj: {_id: 23677,str: "Neck Unbranded",num: 36237,date: new Date("2018-09-06T19:48:05.734Z"),array: [],obj: {}}},"Fantastic Fresh Tuna networks",new Date("2018-09-06T09:04:10.430Z"),new Date("2018-09-06T19:28:38.685Z"),[new Date("2018-09-06T02:55:31.311Z"),"Kyrgyz Republic array Fish",{_id: 23678,date: new Date("2018-09-05T23:42:09.478Z"),array: [62610],obj: {}},"Assurance Incredible Web",77028],[],[32671],{_id: 23679,str: "HTTP"}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23680,str: "withdrawal",num: 2320,date: new Date("2018-09-06T02:37:19.718Z"),array: [],obj: {_id: 23681,num: 50653,date: new Date("2018-09-06T05:14:20.507Z"),array: ["Auto Loan Account Gorgeous",new Date("2018-09-06T12:16:05.529Z"),new Date("2018-09-06T19:51:08.849Z"),69597,[new Date("2018-09-05T20:17:34.059Z"),77769],{_id: 23682,str: "mint green",num: 64965,date: new Date("2018-09-06T09:37:44.985Z"),array: [59224],obj: {_id: 23683,str: "backing up Solutions",num: 66756,date: new Date("2018-09-05T21:54:38.208Z"),obj: {}}},"International olive Books","Phased EXE virtual",{_id: 23684,str: "olive Money Market Account",date: new Date("2018-09-06T06:51:41.131Z"),array: [new Date("2018-09-06T00:34:00.046Z"),new Date("2018-09-06T01:41:18.212Z"),new Date("2018-09-06T11:47:01.470Z")]},[],[],6368],obj: {_id: 23685,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 23686,str: "Quetzal navigating Bermuda",num: 89042,date: new Date("2018-09-06T05:11:20.900Z"),array: [],obj: {_id: 23687,num: 38079,date: new Date("2018-09-06T13:55:13.778Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23688,str: "navigate Jewelery Buckinghamshire",num: 97694,date: new Date("2018-09-06T18:08:51.572Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23689,str: "Refined Canadian Dollar",num: 89574,date: new Date("2018-09-06T11:51:51.285Z"),array: [86354,new Date("2018-09-05T20:01:36.770Z"),new Date("2018-09-06T19:42:48.871Z"),{_id: 23690,str: "robust Generic Steel Computer matrix",num: 4228,date: new Date("2018-09-06T02:31:42.182Z"),array: [],obj: {_id: 23691,str: "Global Ergonomic Rubber Chair",num: 52439,date: new Date("2018-09-06T06:05:51.453Z"),array: [73740,"paradigms Direct Auto Loan Account"],obj: {}}},"RSS","time-frame Bedfordshire invoice","scalable Chicken",{_id: 23692,str: "deposit systems Senior",num: 45028,date: new Date("2018-09-06T00:01:50.726Z"),array: [35453],obj: {_id: 23693,date: new Date("2018-09-06T14:04:36.674Z")}},new Date("2018-09-05T20:38:16.278Z"),new Date("2018-09-06T17:47:47.566Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23694,num: 20026,date: new Date("2018-09-06T02:30:44.696Z"),array: [[new Date("2018-09-05T21:01:41.729Z"),63210,"Web",new Date("2018-09-06T16:10:22.800Z"),16764],89439,66174,"payment",37004,"dynamic",new Date("2018-09-06T19:39:08.142Z"),{_id: 23695,str: "killer",num: 82619,date: new Date("2018-09-06T17:13:01.516Z"),array: [],obj: {_id: 23696,str: "Frozen",num: 74675,date: new Date("2018-09-05T22:06:35.539Z")}}],obj: {_id: 23697,str: "Borders Frozen",num: 2104,date: new Date("2018-09-06T18:51:03.574Z"),obj: {_id: 23698,str: "Iraqi Dinar Throughway eyeballs",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23699,str: "Robust mindshare Investment Account",num: 57512,date: new Date("2018-09-06T15:03:10.929Z"),array: [],obj: {_id: 23700,str: "Avon HDD open-source",num: 17494,date: new Date("2018-09-06T17:43:24.702Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23701,str: "JBOD",num: 96889,date: new Date("2018-09-06T00:23:56.770Z"),array: ["Awesome Plastic Gloves Handcrafted Wooden Shoes",{_id: 23702,str: "eyeballs local Salad",num: 29378,date: new Date("2018-09-06T17:53:58.408Z"),array: []},"Hat Fields",new Date("2018-09-06T14:56:36.352Z"),{_id: 23703,str: "Rubber",num: 24310,array: ["Gourde US Dollar Awesome Rubber Bike strategic",new Date("2018-09-06T13:56:43.285Z")],obj: {}},{_id: 23704,date: new Date("2018-09-06T13:12:30.584Z"),array: [],obj: {_id: 23705,num: 20014,date: new Date("2018-09-05T20:42:57.431Z"),obj: {}}},"utilisation",{_id: 23706,num: 73414,date: new Date("2018-09-06T08:36:52.468Z"),obj: {_id: 23707,str: "applications white Web",array: [72397,97292,[],new Date("2018-09-06T06:33:26.679Z")]}},37416,"Ball"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23708,str: "conglomeration",num: 74413,date: new Date("2018-09-06T07:33:01.048Z"),obj: {_id: 23709,str: "models Unbranded",num: 48466,array: ["Steel",87532,new Date("2018-09-06T02:33:14.924Z"),{_id: 23710,str: "Grass-roots didactic bypass",num: 11378,date: new Date("2018-09-06T13:55:33.385Z"),array: [],obj: {_id: 23711,num: 69111,date: new Date("2018-09-06T08:28:45.381Z"),array: ["parsing",48664]}},new Date("2018-09-06T10:02:14.127Z"),"Gorgeous","primary synthesizing Way",64544,[[],new Date("2018-09-06T08:45:48.351Z"),new Date("2018-09-06T18:22:31.695Z"),39732],new Date("2018-09-06T11:00:21.818Z"),[new Date("2018-09-06T04:23:53.516Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23712,str: "New Zealand Implementation",num: 36613,date: new Date("2018-09-06T06:21:34.294Z"),obj: {_id: 23713,str: "Center Architect well-modulated",date: new Date("2018-09-06T08:03:19.415Z"),array: ["calculating generating haptic",62323,new Date("2018-09-06T14:52:53.842Z"),6298,"Tools National",[],new Date("2018-09-06T19:34:57.038Z"),{_id: 23714,str: "bus cyan Accounts",num: 7789,date: new Date("2018-09-06T15:21:36.808Z"),array: [[90727]],obj: {}},"Buckinghamshire Stravenue",new Date("2018-09-05T22:37:40.593Z"),"Concrete Springs","Handmade Plastic Bike",50008,new Date("2018-09-05T23:54:47.573Z"),[new Date("2018-09-06T08:09:05.488Z"),{_id: 23715,str: "Rustic Soft Keyboard facilitate sticky",num: 44146,array: [96820,"Money Market Account Programmable Multi-layered","solid state Rustic"],obj: {_id: 23716,str: "Rustic Soft Mouse Borders Markets",num: 9070,date: new Date("2018-09-06T03:41:47.045Z"),array: []}},{_id: 23717,num: 50497,date: new Date("2018-09-06T14:54:15.263Z"),array: [],obj: {}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 23718,str: "Berkshire encompassing Buckinghamshire",num: 41398,date: new Date("2018-09-06T02:32:03.792Z"),array: ["monetize Gorgeous Rubber Soap Robust",new Date("2018-09-06T00:46:16.074Z"),"Djibouti",85417,new Date("2018-09-06T01:23:47.120Z"),35260,"Paradigm",[],new Date("2018-09-06T16:20:26.206Z"),9711,{_id: 23719,date: new Date("2018-09-06T08:14:59.992Z"),array: [],obj: {}},"bypass solid state index"]});
    },

    function(coll) {
        return coll.insert({_id: 23720,str: "mint green Group",num: 48131,date: new Date("2018-09-06T13:02:59.003Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23721,str: "deposit dynamic Mississippi",num: 14408,date: new Date("2018-09-06T06:49:03.179Z"),array: ["proactive transmitter transition",69340,new Date("2018-09-06T13:28:50.606Z"),"Accounts",[],[20195,new Date("2018-09-06T02:04:19.947Z"),37907],new Date("2018-09-06T16:06:31.544Z"),"Consultant","Agent Cambridgeshire Suriname",{_id: 23722,str: "Dam Multi-lateral Iceland Krona",num: 88281,date: new Date("2018-09-06T00:13:29.271Z"),array: [],obj: {}},[],"microchip encoding"],obj: {_id: 23723,str: "Chips XSS Fresh",date: new Date("2018-09-06T10:26:21.192Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23724,str: "invoice",date: new Date("2018-09-06T15:32:42.088Z"),array: [],obj: {_id: 23725,str: "Handmade Cotton Salad deposit Tasty Soft Chair",num: 98674,date: new Date("2018-09-05T22:53:10.749Z"),array: [new Date("2018-09-05T23:06:34.221Z"),{_id: 23726,str: "action-items",num: 35989,array: [],obj: {}},67956,"Cambridgeshire Loaf",["Awesome Metal Car Specialist",{_id: 23727,num: 87181,array: [new Date("2018-09-06T08:48:02.053Z"),new Date("2018-09-06T02:20:03.760Z"),"payment solid state content"],obj: {}},[],new Date("2018-09-05T22:46:20.689Z"),52898],82828,85481]}});
    },

    function(coll) {
        return coll.insert({_id: 23728,str: "Refined Frozen Cheese",date: new Date("2018-09-06T10:09:07.380Z"),array: ["application alarm",68567,new Date("2018-09-06T12:37:30.029Z"),new Date("2018-09-06T02:04:30.078Z"),"invoice","Buckinghamshire Quality",new Date("2018-09-06T05:56:47.761Z"),[],{_id: 23729,str: "pixel Licensed Pakistan Rupee",num: 68490,array: [75363],obj: {}},43251,{_id: 23730,str: "internet solution Shoes",num: 32787,date: new Date("2018-09-06T19:54:34.251Z"),array: [],obj: {_id: 23731,num: 68397,date: new Date("2018-09-06T04:57:49.245Z"),array: [56967,new Date("2018-09-06T10:19:44.588Z"),{_id: 23732,str: "parse XML",num: 90561,date: new Date("2018-09-06T11:04:09.578Z"),array: [],obj: {}}]}},new Date("2018-09-05T20:18:21.367Z")],obj: {_id: 23733,str: "grow Public-key orchestrate",num: 55186,date: new Date("2018-09-06T01:18:00.745Z"),obj: {_id: 23734,str: "applications Credit Card Account",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23735,str: "Unbranded Frozen Table European Unit of Account 17(E.U.A.-17) turquoise",num: 63513,date: new Date("2018-09-05T21:56:23.228Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23736,str: "parse scalable",num: 70189,date: new Date("2018-09-06T18:29:22.396Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 23737,str: "Tactics background",date: new Date("2018-09-06T00:38:03.440Z"),array: ["Pizza",new Date("2018-09-06T17:17:54.039Z"),49557,{_id: 23738,str: "groupware deposit dot-com",num: 84444,date: new Date("2018-09-06T08:41:01.270Z"),array: [],obj: {_id: 23739,str: "Practical Rubber Salad",num: 94706,array: [14012,"Tasty Puerto Rico interface"],obj: {_id: 23740,str: "Fresh Hat calculating",num: 64997,date: new Date("2018-09-06T15:08:53.952Z"),array: [],obj: {_id: 23741,date: new Date("2018-09-06T00:51:22.934Z")}}}},9301,{_id: 23742,str: "Practical PNG",num: 28733,date: new Date("2018-09-05T22:50:26.157Z"),array: [],obj: {}},new Date("2018-09-06T08:44:23.864Z"),new Date("2018-09-06T00:42:26.078Z"),"Cheese Savings Account",[],new Date("2018-09-06T06:38:04.271Z"),new Date("2018-09-06T11:50:18.643Z"),63803]});
    },

    function(coll) {
        return coll.insert({_id: 23743,str: "Awesome",num: 15394,date: new Date("2018-09-06T18:47:37.968Z"),array: [],obj: {_id: 23744,str: "firewall",num: 47242,date: new Date("2018-09-05T22:03:50.329Z"),array: ["connecting Optional",new Date("2018-09-05T23:25:14.762Z"),[],new Date("2018-09-06T11:38:18.762Z"),25858,"Handmade",6584,new Date("2018-09-05T22:36:52.845Z"),{_id: 23745,num: 74341,date: new Date("2018-09-06T01:33:27.338Z"),array: [21647],obj: {}},"Technician bypass Rustic Concrete Table",57399,"streamline efficient"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23746,num: 57368,date: new Date("2018-09-05T22:35:49.625Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23747,str: "Home Loan Account",num: 99188,date: new Date("2018-09-06T00:37:39.555Z"),array: [40195,new Date("2018-09-06T02:41:02.927Z"),[],new Date("2018-09-06T03:14:46.704Z"),[],new Date("2018-09-05T20:10:32.036Z"),"Court",new Date("2018-09-06T06:22:11.858Z"),new Date("2018-09-06T09:17:57.921Z"),{_id: 23748,str: "neural alarm",num: 80169,date: new Date("2018-09-06T06:52:44.898Z"),obj: {}},85918,"Producer"],obj: {_id: 23749,num: 17645,date: new Date("2018-09-06T10:23:25.745Z"),array: [[],"Tactics wireless",29283,"neural Multi-lateral Tunnel"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23750,str: "Iranian Rial iterate Music",date: new Date("2018-09-06T05:13:09.225Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23751,str: "Licensed Granite Keyboard Associate",num: 25188,date: new Date("2018-09-06T08:07:21.992Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23752,str: "user-facing",num: 15881,date: new Date("2018-09-05T21:18:20.823Z"),array: [41564,"Branding Forint Down-sized",new Date("2018-09-05T21:40:54.488Z"),[],"Silver",4531,55187,"Michigan empower Rustic Soft Keyboard",new Date("2018-09-06T07:01:46.473Z"),[]],obj: {_id: 23753,num: 49617,date: new Date("2018-09-06T04:32:47.813Z")}});
    },

    function(coll) {
        return coll.insert({_id: 23754,str: "alarm",num: 88464,date: new Date("2018-09-05T21:14:10.950Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23755,str: "Handcrafted exuding",num: 3480,date: new Date("2018-09-06T15:39:51.640Z"),array: [],obj: {_id: 23756,num: 16806,date: new Date("2018-09-06T00:06:15.642Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23757,str: "Industrial Ergonomic copy",num: 89067,date: new Date("2018-09-05T23:25:42.838Z"),array: [],obj: {_id: 23758,str: "Iranian Rial Wooden Chicken",num: 89864,obj: {_id: 23759,num: 41813,date: new Date("2018-09-06T16:12:20.352Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 23760,str: "Tasty Steel Pizza",num: 90457,date: new Date("2018-09-06T14:21:17.686Z"),array: ["Cotton",new Date("2018-09-06T18:12:04.502Z"),[],new Date("2018-09-06T02:07:40.628Z"),"cultivate Cambridgeshire enable","utilize Health e-markets",40106,88556,{_id: 23761,str: "mint green Cambridgeshire",num: 74356,date: new Date("2018-09-06T13:38:38.608Z"),obj: {}},{_id: 23762,str: "input Springs",num: 11182,array: []},new Date("2018-09-06T12:02:21.647Z"),new Date("2018-09-06T15:02:02.007Z")],obj: {_id: 23763,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23764,num: 75045,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23765,str: "Won customer loyalty Forward",num: 67397,date: new Date("2018-09-06T12:00:35.787Z"),array: [96459,"secondary Comoro Franc optical","Orchestrator",new Date("2018-09-06T17:11:03.380Z"),new Date("2018-09-06T00:19:00.052Z"),"deposit",21727,new Date("2018-09-06T12:54:25.044Z"),"challenge Plaza Communications",25779,{_id: 23766,str: "Keys application",num: 47220,date: new Date("2018-09-06T14:31:01.031Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 23767,str: "Configuration implement Brand",num: 58860,date: new Date("2018-09-06T13:22:38.226Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23768,num: 9774,date: new Date("2018-09-06T06:31:59.411Z"),array: ["Vision-oriented driver",new Date("2018-09-05T20:52:25.986Z"),new Date("2018-09-06T05:24:38.450Z"),75076,"Borders Practical mint green",[],[new Date("2018-09-06T09:48:08.139Z"),78223,new Date("2018-09-06T01:15:54.740Z")],23392,{_id: 23769,str: "Steel Public-key",num: 88247,date: new Date("2018-09-06T16:34:43.442Z"),obj: {}},new Date("2018-09-06T15:01:38.086Z"),"generating Shoes Texas",58827],obj: {_id: 23770,str: "interactive Wooden Berkshire",num: 15590,date: new Date("2018-09-06T05:08:27.051Z"),array: [],obj: {_id: 23771,str: "Florida",num: 17300,array: [],obj: {_id: 23772,str: "Garden visionary",date: new Date("2018-09-05T22:52:42.522Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 23773,str: "protocol Soft Buckinghamshire",num: 69976,date: new Date("2018-09-06T08:02:36.338Z"),array: ["synthesize",new Date("2018-09-06T14:27:02.391Z"),"invoice",{_id: 23774,str: "Mountains withdrawal interactive",num: 74629,date: new Date("2018-09-06T14:22:51.580Z"),array: [],obj: {}},new Date("2018-09-06T05:51:11.008Z"),41882,"optimize Sleek Soft Gloves system",[44433,new Date("2018-09-06T17:52:38.653Z"),80563],6800,{_id: 23775,str: "Washington compress Pants",num: 17023,date: new Date("2018-09-06T15:39:52.908Z"),array: [],obj: {_id: 23776,date: new Date("2018-09-06T13:51:32.468Z")}},new Date("2018-09-06T12:58:20.513Z"),{_id: 23777,num: 55688,obj: {}}],obj: {_id: 23778,str: "India grow Handcrafted Wooden Tuna",array: [],obj: {_id: 23779,str: "auxiliary bricks-and-clicks",num: 16048,date: new Date("2018-09-06T11:56:54.629Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 23780,str: "blue Small Tuvalu",num: 31971,date: new Date("2018-09-06T10:19:27.867Z"),obj: {_id: 23781,num: 74584,array: ["embrace Mouse channels",new Date("2018-09-06T09:47:08.926Z"),"Puerto Rico SSL override",new Date("2018-09-06T05:30:12.059Z"),new Date("2018-09-06T16:41:17.357Z"),76121,"invoice Rhode Island Rupiah",88401],obj: {_id: 23782,str: "hierarchy Bulgaria Western Sahara",date: new Date("2018-09-06T17:08:14.615Z"),array: [],obj: {_id: 23783,str: "Tennessee Versatile programming",date: new Date("2018-09-06T06:59:26.674Z"),array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 23784,num: 6743,date: new Date("2018-09-06T06:54:13.184Z"),array: [new Date("2018-09-06T06:44:32.099Z"),{_id: 23785,str: "Ergonomic",num: 29841,date: new Date("2018-09-06T16:18:06.713Z"),array: ["implement","success Engineer navigating",[new Date("2018-09-06T02:15:00.942Z"),43363],{_id: 23786,num: 59519,date: new Date("2018-09-05T21:15:33.362Z"),array: [],obj: {}},{_id: 23787,str: "benchmark",num: 94032,date: new Date("2018-09-06T03:47:57.625Z"),array: ["Sleek Concrete Car enterprise",48205,52722],obj: {}}],obj: {_id: 23788,str: "synthesizing Home TCP",date: new Date("2018-09-06T16:00:42.000Z"),array: []}},new Date("2018-09-05T21:05:58.192Z"),new Date("2018-09-06T02:30:09.128Z"),[],new Date("2018-09-06T13:50:12.984Z"),[new Date("2018-09-06T12:33:24.671Z")],"payment","Rustic Handmade",22802,"proactive Borders Credit Card Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23789,str: "Cambridgeshire transmitting Ergonomic Soft Fish",num: 18955,date: new Date("2018-09-06T11:10:52.920Z"),array: ["Checking Account Incredible Metical","compressing Up-sized Avon",new Date("2018-09-06T02:37:46.125Z"),{_id: 23790,num: 67166,date: new Date("2018-09-06T17:59:33.379Z"),obj: {}},"Chief invoice",new Date("2018-09-06T06:27:29.287Z"),new Date("2018-09-05T20:44:57.121Z"),99875,"protocol",69552],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23791,num: 15759,date: new Date("2018-09-06T12:18:43.553Z"),array: [30460,"Martinique",new Date("2018-09-06T18:42:30.058Z"),59147,"Consultant Florida silver",85989,new Date("2018-09-06T14:55:48.038Z"),22851,{_id: 23792,num: 61317,date: new Date("2018-09-06T18:30:46.186Z"),array: [[]],obj: {}},"Digitized Analyst",new Date("2018-09-06T19:54:40.113Z")]});
    },

    function(coll) {
        return coll.insert({_id: 23793,str: "Berkshire",num: 58862,date: new Date("2018-09-06T15:35:41.624Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 23794,str: "Moldova",num: 40872,date: new Date("2018-09-06T01:02:25.577Z"),obj: {_id: 23795,str: "lime",date: new Date("2018-09-06T05:16:51.477Z"),array: [[],6391,11922,[],new Date("2018-09-06T01:05:38.322Z"),"Comoro Franc","Personal Loan Account online Lilangeni",new Date("2018-09-06T07:13:13.397Z"),"Wyoming action-items",new Date("2018-09-06T14:46:04.683Z"),75418,"Dam incentivize functionalities",{_id: 23796,num: 35002,date: new Date("2018-09-06T08:49:54.591Z"),array: ["circuit"],obj: {_id: 23797,str: "Equatorial Guinea",num: 942,array: [45624,62121],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23798,str: "Antigua and Barbuda Plastic Small",obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23799,str: "object-oriented system",num: 27852,date: new Date("2018-09-06T19:28:49.851Z"),array: ["quantifying open-source",32364,new Date("2018-09-06T16:27:52.320Z"),[new Date("2018-09-06T13:30:06.331Z"),{_id: 23800,str: "virtual deposit Fresh",date: new Date("2018-09-06T07:45:06.857Z"),array: [],obj: {_id: 23801,str: "revolutionize Associate payment",num: 98736,obj: {}}}],43357,"program",new Date("2018-09-06T07:22:20.038Z"),"SSL Moroccan Dirham Svalbard & Jan Mayen Islands",12849,"Human","Clothing",{_id: 23802,str: "Principal",date: new Date("2018-09-06T14:48:27.071Z"),obj: {_id: 23803,str: "experiences Functionality",num: 34591,date: new Date("2018-09-06T16:53:11.531Z"),array: [],obj: {_id: 23804,num: 5393,date: new Date("2018-09-05T20:43:44.682Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 23805,str: "input",num: 30418,date: new Date("2018-09-06T09:16:14.884Z"),obj: {_id: 23806,str: "Pants",num: 31969,date: new Date("2018-09-06T05:44:25.750Z"),array: ["lavender expedite Ergonomic Frozen Soap",new Date("2018-09-05T20:03:25.706Z"),"Operations Jewelery synthesizing",new Date("2018-09-05T22:24:07.956Z"),53746,"Frozen",[],"Programmable killer Refined Granite Bike",{_id: 23807,num: 50647,date: new Date("2018-09-05T22:09:37.434Z"),array: [new Date("2018-09-06T18:57:09.558Z")],obj: {}},42525,78610,{_id: 23808,str: "cyan system-worthy Intelligent Wooden Shoes",num: 82482,date: new Date("2018-09-05T20:35:13.257Z"),array: [],obj: {}},"Yen"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23809,str: "models synergies",array: [new Date("2018-09-06T05:19:47.584Z"),"SAS SMS",44757,"paradigm Generic Kiribati",new Date("2018-09-06T16:35:13.575Z"),{_id: 23810,str: "Persevering Analyst",num: 87318,array: [new Date("2018-09-06T15:54:49.194Z"),new Date("2018-09-06T13:38:50.731Z"),new Date("2018-09-05T22:19:59.895Z")],obj: {_id: 23811,str: "architect disintermediate",num: 7669,date: new Date("2018-09-06T11:37:34.977Z"),array: [[],76502,"Polarised"],obj: {}}},["Music",[]],66026,{_id: 23812,str: "feed",num: 67567,date: new Date("2018-09-06T18:04:11.748Z"),array: [],obj: {}},2250]});
    },

    function(coll) {
        return coll.insert({_id: 23813,str: "Money Market Account",num: 92274,date: new Date("2018-09-06T03:19:55.762Z"),array: ["framework Antarctica (the territory South of 60 deg S) Money Market Account",55958,"Wyoming",84554],obj: {_id: 23814,str: "implement deposit",num: 18206,date: new Date("2018-09-06T05:02:21.336Z"),array: [{_id: 23815,str: "IB",num: 23493,array: []},new Date("2018-09-06T08:16:46.052Z"),24068,43790,new Date("2018-09-06T19:03:22.398Z"),[new Date("2018-09-06T09:43:04.372Z"),{_id: 23816,num: 17801,date: new Date("2018-09-05T22:13:15.326Z")}],new Date("2018-09-06T08:21:04.213Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23817,num: 45054,date: new Date("2018-09-06T16:50:38.482Z"),array: [new Date("2018-09-06T03:09:48.202Z"),[new Date("2018-09-06T18:18:21.617Z"),27868,"New Zealand Dollar Consultant",new Date("2018-09-06T18:48:38.358Z")],54838,"Team-oriented online",new Date("2018-09-06T17:04:05.176Z"),[],new Date("2018-09-06T15:53:19.332Z"),new Date("2018-09-06T10:52:48.057Z"),60121,"e-markets copy"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23818,num: 22682,date: new Date("2018-09-06T00:21:27.216Z"),array: ["Aruban Guilder New Jersey Graphical User Interface",[new Date("2018-09-06T07:09:52.027Z"),"Checking Account",40269],new Date("2018-09-06T11:07:18.042Z"),64818,{_id: 23819,str: "hack",num: 83912,date: new Date("2018-09-06T12:18:02.625Z"),array: []},"vortals",{_id: 23820,str: "deposit virtual bypassing",num: 8453,date: new Date("2018-09-06T02:56:49.975Z")},48582,{_id: 23821,str: "Congolese Franc",num: 80654,date: new Date("2018-09-06T08:15:04.249Z"),array: [],obj: {_id: 23822,str: "bi-directional Awesome Plastic Soap",num: 20450,obj: {}}},new Date("2018-09-05T20:13:54.125Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23823,num: 11205,date: new Date("2018-09-05T22:52:43.335Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23824,str: "complexity Operative",num: 68745,date: new Date("2018-09-06T04:13:56.128Z"),array: [[],"Iraq",41704,new Date("2018-09-06T10:56:37.703Z"),44,new Date("2018-09-06T00:32:43.724Z"),"withdrawal","Home Loan Account connect web-enabled",new Date("2018-09-06T19:52:20.389Z"),["Licensed Awesome Small",new Date("2018-09-06T13:16:42.085Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23825,str: "Faroe Islands cyan",num: 55922,date: new Date("2018-09-06T17:21:19.196Z"),array: [new Date("2018-09-06T19:11:22.590Z"),42121,new Date("2018-09-06T09:15:19.490Z"),25018,81689,"Auto Loan Account Rhode Island",{_id: 23826,str: "XML",num: 91453,date: new Date("2018-09-05T23:11:37.584Z"),array: [],obj: {}},"Clothing",new Date("2018-09-05T21:59:53.578Z"),new Date("2018-09-06T19:51:05.005Z"),[]],obj: {_id: 23827,str: "Louisiana Paradigm",num: 26741,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 23828,str: "Fresh impactful firewall",num: 36722,date: new Date("2018-09-06T09:29:13.275Z"),array: [new Date("2018-09-06T04:14:38.514Z"),98856,new Date("2018-09-06T13:44:32.846Z"),55396,{_id: 23829,num: 37558,date: new Date("2018-09-06T16:25:22.471Z"),obj: {}},new Date("2018-09-06T06:33:40.505Z"),"circuit Books","Concrete Programmable","Outdoors",[],55407,15960],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23830,str: "Wisconsin heuristic Malta",num: 47520,date: new Date("2018-09-05T20:37:55.735Z"),array: ["Robust next generation",{_id: 23831,str: "Intelligent",num: 46613,array: ["navigate teal Web",new Date("2018-09-06T12:40:36.683Z"),new Date("2018-09-06T15:06:53.390Z")],obj: {}},60669,[{_id: 23832,str: "e-business yellow",num: 96543,date: new Date("2018-09-06T08:52:42.754Z"),obj: {}},45213],14642,6064,[],new Date("2018-09-06T15:33:01.241Z"),"Florida Portugal Car","mobile Table","Soft"],obj: {_id: 23833,str: "Iranian Rial Graphic Interface",date: new Date("2018-09-06T10:55:27.036Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23834,str: "vertical",num: 25865,date: new Date("2018-09-06T08:50:21.682Z"),array: [92326,new Date("2018-09-06T13:01:31.961Z"),new Date("2018-09-05T23:34:22.552Z"),{_id: 23835,str: "JBOD Yuan Renminbi",num: 67606,date: new Date("2018-09-05T23:52:23.366Z"),array: ["deposit Games","US Dollar violet aggregate",7099],obj: {_id: 23836,str: "Paradigm iterate Soap",num: 36369,date: new Date("2018-09-05T22:05:37.728Z"),array: [],obj: {}}},"Strategist transmitter",[],"e-business Gibraltar Pound","calculating quantifying Money Market Account",71855,new Date("2018-09-06T09:39:34.545Z"),98848,new Date("2018-09-06T08:49:36.174Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23837,str: "bricks-and-clicks Berkshire",num: 28047,date: new Date("2018-09-06T06:15:39.283Z"),array: [],obj: {_id: 23838,str: "Vermont optimal",num: 81005,date: new Date("2018-09-05T20:14:55.092Z"),array: [9333,"Mandatory Licensed Metal Keyboard","New Leu Oman",new Date("2018-09-06T06:51:28.738Z"),[],[new Date("2018-09-06T10:13:27.488Z"),80312],27894,new Date("2018-09-06T03:46:53.593Z"),23864,{_id: 23839,str: "Investment Account deposit cutting-edge",num: 36401,date: new Date("2018-09-06T10:31:34.764Z"),array: []},{_id: 23840,num: 66671,array: ["Fantastic",new Date("2018-09-06T07:16:05.283Z"),69738,"zero tolerance Switzerland parsing",{_id: 23841,str: "withdrawal Home Loan Account",num: 1836,date: new Date("2018-09-06T19:14:22.886Z"),obj: {}}],obj: {}}],obj: {_id: 23842,num: 54621,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23843,str: "back-end morph Home",num: 97377,date: new Date("2018-09-06T14:48:53.214Z"),array: [new Date("2018-09-06T09:53:19.528Z"),"invoice Intelligent Concrete Chicken Auto Loan Account",[36348,new Date("2018-09-06T05:10:29.129Z")],"methodology Tennessee Concrete",{_id: 23844,str: "withdrawal Rhode Island",num: 58502,date: new Date("2018-09-06T09:52:22.473Z"),array: [],obj: {}},[],21357,39896,{_id: 23845,str: "Hong Kong Regional web-readiness",date: new Date("2018-09-06T00:19:07.714Z"),array: []},new Date("2018-09-06T15:47:50.942Z"),"Pataca Dominica"],obj: {_id: 23846,str: "Investment Account Investment Account JBOD",date: new Date("2018-09-06T05:27:29.354Z"),obj: {_id: 23847,num: 34631}}});
    },

    function(coll) {
        return coll.insert({_id: 23848,str: "Markets Technician",num: 1917,date: new Date("2018-09-06T02:42:26.273Z"),array: ["solid state Savings Account",72607,"program Fresh",new Date("2018-09-06T06:24:05.867Z"),64983,45160,new Date("2018-09-06T04:02:02.813Z"),{_id: 23849,str: "program aggregate implement",num: 19678,date: new Date("2018-09-06T07:57:19.679Z")},new Date("2018-09-06T06:43:32.764Z"),"alarm",[],{_id: 23850,num: 87690,array: [],obj: {_id: 23851,str: "Cheese quantify",num: 37815,date: new Date("2018-09-05T21:29:58.858Z"),array: [{_id: 23852,str: "Harbor",obj: {}}],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23853,str: "Customer",num: 18152,date: new Date("2018-09-06T09:03:21.665Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23854,str: "online Licensed",num: 69223,date: new Date("2018-09-06T07:11:09.005Z"),obj: {_id: 23855,num: 85774,date: new Date("2018-09-05T21:05:37.533Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23856,str: "lavender Sausages",num: 17326,date: new Date("2018-09-06T18:10:44.227Z"),array: ["Refined Steel Sausages",[[42484]],new Date("2018-09-05T22:08:11.470Z"),"generate",new Date("2018-09-06T16:51:46.112Z"),new Date("2018-09-06T14:12:00.920Z"),3741,{_id: 23857,str: "moderator deliverables synthesize",num: 88715,date: new Date("2018-09-06T07:36:16.852Z")},new Date("2018-09-06T11:39:14.322Z"),"quantifying JSON quantify",{_id: 23858,str: "bifurcated withdrawal solid state",num: 84399,date: new Date("2018-09-06T13:49:39.096Z"),array: [],obj: {}},"enable extranet Clothing","encoding withdrawal",48276],obj: {_id: 23859,str: "card",array: [8842,33925,new Date("2018-09-05T22:24:38.246Z"),"compressing Bedfordshire Kids",78858],obj: {_id: 23860,num: 14100,date: new Date("2018-09-06T05:02:13.180Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23861,str: "Credit Card Account mint green",date: new Date("2018-09-06T04:10:32.895Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23862,str: "IB Reverse-engineered",num: 97407,date: new Date("2018-09-06T08:28:41.768Z"),array: ["Oklahoma Fantastic granular",79000,new Date("2018-09-06T13:16:39.939Z"),29056,31109,new Date("2018-09-06T14:05:14.761Z"),[],"COM",{_id: 23863,date: new Date("2018-09-06T03:33:46.914Z"),array: [{_id: 23864,str: "Brand Gibraltar Pound sensor",num: 99255,date: new Date("2018-09-06T00:42:17.565Z"),array: [],obj: {_id: 23865,str: "enable azure Tasty",num: 97348,array: [],obj: {}}},84292,56371]},"Liberia Senior",new Date("2018-09-05T23:32:21.130Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23866,num: 29568,date: new Date("2018-09-05T21:17:23.227Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23867,str: "Kuwait",date: new Date("2018-09-05T22:05:14.111Z"),array: [],obj: {_id: 23868,str: "Investment Account Personal Loan Account",num: 45360,date: new Date("2018-09-06T01:09:28.942Z"),array: ["portals",new Date("2018-09-06T13:36:16.387Z"),[new Date("2018-09-06T00:15:00.505Z")],84107,"Cross-group strategize navigate",{_id: 23869,str: "Frozen object-oriented Handmade Plastic Chair",num: 84909,date: new Date("2018-09-06T03:23:43.445Z"),array: [],obj: {_id: 23870,str: "index Cotton leading edge",num: 32112,array: ["Tasty Plastic Ball",{_id: 23871,num: 62962},"Fresh Naira calculating",[]],obj: {}}},new Date("2018-09-05T23:50:16.646Z"),88866,2591,76791,{_id: 23872,str: "Buckinghamshire Algerian Dinar",num: 87671,array: [],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23873,str: "Optimized",num: 26973,date: new Date("2018-09-06T11:24:03.993Z"),obj: {_id: 23874,str: "New Zealand Virgin Islands, U.S.",num: 8204,array: [],obj: {_id: 23875,str: "invoice PCI array",date: new Date("2018-09-06T04:26:17.383Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 23876,date: new Date("2018-09-06T02:14:56.280Z"),array: ["stable COM relationships",{_id: 23877,str: "Ergonomic",num: 59652,date: new Date("2018-09-06T07:32:34.426Z"),array: [],obj: {_id: 23878,str: "Secured compress",date: new Date("2018-09-06T19:01:06.419Z"),array: [],obj: {_id: 23879,str: "neural Granite Steel",date: new Date("2018-09-05T22:10:33.426Z")}}},28156,"quantify",new Date("2018-09-06T01:16:39.440Z"),[[]],new Date("2018-09-06T11:48:33.870Z"),94391,1753,[12209,"azure","copying standardization"],new Date("2018-09-06T02:43:59.971Z"),30729,new Date("2018-09-06T07:09:39.193Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23880,str: "efficient",num: 69246,date: new Date("2018-09-06T01:05:36.121Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23881,num: 93050,date: new Date("2018-09-06T05:06:51.990Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23882,str: "extend functionalities strategic",num: 65385,date: new Date("2018-09-05T21:27:00.604Z"),array: [new Date("2018-09-06T01:44:40.521Z"),"generating","enterprise Liaison",new Date("2018-09-06T02:58:34.372Z"),51216,[],"fault-tolerant",new Date("2018-09-06T02:52:33.534Z"),75933,{_id: 23883,str: "Assurance",num: 4931,date: new Date("2018-09-06T12:00:55.144Z"),array: [51553,"Practical engineer"],obj: {}},new Date("2018-09-06T19:05:15.687Z"),94015],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23884,str: "Directives users",num: 23777,date: new Date("2018-09-06T19:26:56.931Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23885,num: 80503,date: new Date("2018-09-06T14:46:50.220Z"),array: [],obj: {_id: 23886,str: "Radial",date: new Date("2018-09-05T21:50:31.526Z"),array: [new Date("2018-09-06T02:26:58.067Z"),24211,"invoice UAE Dirham Strategist","applications Jordanian Dinar task-force",38886,new Date("2018-09-06T04:23:19.182Z"),79872,new Date("2018-09-06T14:21:18.466Z"),new Date("2018-09-06T07:11:05.609Z"),"hacking","Cote d'Ivoire reboot",{_id: 23887,str: "Streets",num: 11135,date: new Date("2018-09-06T15:30:21.148Z"),obj: {}},new Date("2018-09-06T17:46:19.403Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 23888,str: "lime Shoes niches",num: 9497,date: new Date("2018-09-06T11:53:12.840Z"),array: [],obj: {_id: 23889,str: "North Carolina bus homogeneous",num: 21728,date: new Date("2018-09-06T00:22:08.744Z"),array: [new Date("2018-09-05T23:43:19.775Z"),90945,57215,{_id: 23890,str: "quantify Virtual Buckinghamshire",date: new Date("2018-09-05T23:04:51.352Z"),obj: {_id: 23891,str: "reboot Cambridgeshire",num: 97752,array: [{_id: 23892,date: new Date("2018-09-06T12:07:15.888Z"),obj: {}},"fuchsia Hryvnia auxiliary",new Date("2018-09-06T15:13:47.604Z")]}},new Date("2018-09-06T18:58:25.363Z"),"Buckinghamshire invoice",51108,"overriding",[22639,"invoice withdrawal Music"],[],new Date("2018-09-06T06:47:11.987Z"),"Wooden deliver Dynamic"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 23893,str: "application",num: 53840,date: new Date("2018-09-06T18:43:42.450Z"),array: [new Date("2018-09-06T02:33:44.050Z"),"Soft Jordanian Dinar",95683,91691,"Supervisor","monitor cutting-edge Morocco",67861,"Ergonomic Steel Shirt synergies Toys",new Date("2018-09-05T22:51:24.131Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 23894,str: "e-enable generating",num: 1455,date: new Date("2018-09-06T09:49:35.616Z"),array: [],obj: {_id: 23895,str: "Arizona",date: new Date("2018-09-06T18:46:53.565Z"),array: [new Date("2018-09-06T13:52:58.371Z"),"Ethiopia",56791,"Holy See (Vatican City State)",new Date("2018-09-06T09:26:15.032Z"),"Gorgeous gold",new Date("2018-09-06T14:05:54.234Z"),63052,[]],obj: {_id: 23896,str: "protocol parse mobile",num: 48417,date: new Date("2018-09-06T10:44:44.776Z"),array: [{_id: 23897,num: 86302,date: new Date("2018-09-06T14:06:41.330Z")},29991,44432,[],"Cliffs Buckinghamshire Surinam Dollar",82089,{_id: 23898,str: "Republic of Korea",array: ["overriding"],obj: {}}],obj: {_id: 23899,num: 38198,date: new Date("2018-09-06T05:37:31.628Z")}}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayToObject: [[["Refined Wooden Sausages Refined"],[],["Bedfordshire Assurance AI",{ $substrBytes: ['$str',3,10] }],['$obj.num'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Associate protocol",{ $toUpper: '$obj.obj.str' },"Hryvnia"],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $substrBytes: [{ $ltrim: { input: { $toString: { $dayOfYear: { $dateToString: {date: '$obj.date',format: "%j-%U-%M-%j-%Z-%z-%u-%Y-%Y-%z-%L"} } } } } },3,4] }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Tools SQL",{ $substrCP: ["Cambodia",13,5] }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toString: { $arrayElemAt: [[{ $substr: ['$obj.str',17,4] }],48465] } },"Automotive Home"],as: 'kaleigh',in: { $abs: '$obj.obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],11482] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire Arizona",v: new Date("2018-09-05T20:31:33.049Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],[94113],["Tuna transitional Dynamic"],["Concrete Village back up",'$obj.str',{ $dateToString: {date: new Date("2018-09-06T18:08:33.056Z"),onNull: { $second: { $millesecond: { $dateToString: {date: { $dateFromParts: {isoWeekYear: { $floor: '$obj.obj.num' },isoDayOfWeek: { $exp: 74658 },hour: { $ceil: '$num' },minute: { $mod: [{ $indexOfArray: [{ $reverseArray: [[]] },{ $substr: ['$obj.obj.str',5,11] },19] },4903] },millisecond: { $trunc: 41331 },timezone: "Africa/Porto-Novo"} },timezone: "Africa/Djibouti"} } } }} }],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Operative",'$obj.str',{ $substr: ["feed",6,4] }],[],['$obj.str',{ $trim: { input: '$str' } },{ $substrBytes: [{ $ltrim: { input: '$obj.obj.str' } },9,15] }],[],[98497,44105]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "system engine e-services",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $toDate: { $dateToParts: {date: { $dateToParts: {date: { $isoWeek: { $week: { $isoWeekYear: { $dateToParts: { date: { $year: { $dateFromParts: {year: { $mod: ['$num',89958] },month: { $pow: [40685,79144] },minute: { $size: [['$obj.obj.str']] },second: { $ceil: '$obj.obj.obj.num' },timezone: "America/Grand_Turk"} } } } } } } },timezone: "Pacific/Gambier",iso8601: false} },timezone: "Europe/Ulyanovsk"} } },onNull: { $arrayElemAt: [['$obj.num','$obj.num'],67164] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["generating Universal Music",19,5] }],29758] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Unbranded Fresh Soap" } }, _id: 0}}],

        [{$project: {a: { $trim: {input: "AI",chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[60496,96125,'$obj.obj.obj.num'],7213] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Movies",v: 95067},{k: "gold Lek Handcrafted",v: true}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $second: { $week: { $isoDayOfWeek: { $toDate: { $arrayElemAt: [[],49728] } } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $map: {input: [{ $rtrim: { input: "Assistant Sports" } },'$obj.obj.obj.str'],as: 'eulalia',in: { $add: [84117,45300] }} } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $ltrim: { input: "Cambridgeshire" } },6,0] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $substrBytes: ['$str',7,9] },15,15] }, _id: 0}}],

        [{$project: {a: { $map: {input: [14184],as: 'orion',in: { $divide: ['$$orion','$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $trim: { input: "compress wireless" } },"Salad Alabama"],as: 'gerardo',cond: { $gt: [{ $toString: { $arrayToObject: [[{k: "niches Handcrafted",v: true},{k: "deposit Personal Loan Account",v: true}]] } },{ $reverseArray: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: { $substrCP: ["synthesizing Music Jamaican Dollar",2,19] } } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num','$num'],cond: { $ne: [{ $map: {input: ["Forward"],as: 'mauricio',in: { $sqrt: 44747 }} },{ $dayOfMonth: { $minute: { $minute: { $toDate: { $arrayToObject: [[[]]] } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bluetooth Syrian Pound",v: '$obj.date'},{k: "Quality-focused Jewelery",v: "Kwacha Cotton"},{k: "invoice Assurance indigo",v: { $second: { $isoWeekYear: { $dateToParts: {date: { $isoWeek: new Date("2018-09-06T02:28:13.538Z") },timezone: "Africa/Casablanca"} } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ['$obj.str',6,13] },"Bahamas RAM"],[{ $rtrim: {input: '$obj.str',chars: "bus quantify Rubber"} },"disintermediate payment whiteboard"],[],[],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfMonth: { $toDate: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.obj.str'],'$obj.obj.obj.num'] } } },format: "%Y-%V-%M-%S-%U-%d-%G-%Z-%H-%S-%Y-%L"} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $hour: { $second: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $exp: '$obj.num' },minute: { $ln: 16623 }} } } } },timezone: "Zulu",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $hour: { $dayOfMonth: { $toDate: { $range: [16,2] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],58122] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfWeek: { $toDate: { $arrayToObject: [[{k: "XSS solution-oriented Designer",v: true}]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "violet visionary Supervisor",v: "virtual pixel generate"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["GB",17,2] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $cmp: [{ $dateFromString: {dateString: "2018-09-06T10:33:18.269Z",timezone: "Iceland"} },{ $arrayElemAt: [['$str'],'$obj.num'] }] },isoDayOfWeek: { $divide: [30267,{ $exp: '$obj.num' }] },hour: { $add: ['$num'] },timezone: "Europe/Copenhagen"} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $month: { $millesecond: { $dateToParts: {date: { $minute: { $dateFromString: { dateString: "2018-09-06T01:33:59.424Z" } } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $toLower: "Facilitator Indiana" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: "Licensed" } },{ $toUpper: "International JBOD distributed" }],11611] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bluetooth 1080p",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $millesecond: { $minute: { $year: { $month: { $dateToString: {date: { $dayOfWeek: { $isoDayOfWeek: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T01:27:15.105Z",format: "%M-%U-%j-%G-%z-%z-%Z-%z-%M",onNull: { $arrayElemAt: [[],97615] }} } } } },timezone: "America/Belize"} } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateFromParts: {year: { $abs: '$obj.obj.num' },month: { $sqrt: 93342 },hour: { $floor: '$obj.obj.obj.num' },minute: { $subtract: [53809,'$obj.num'] },second: { $pow: [92182,{ $ln: '$num' }] },millisecond: { $cmp: [{ $zip: {inputs: [],defaults: [[{}],"District withdrawal"]} },{ $substrCP: ["overriding Borders Intelligent Steel Salad",12,1] }] },timezone: "Etc/GMT0"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',27773],{ $ln: 64822 }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[63909,'$obj.obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toUpper: { $trim: {input: "input Table input",chars: "Pants Home Loan Account"} } },'$obj.str']] }, _id: 0}}],

        [{$project: {a: { $month: new Date("2018-09-06T10:29:09.309Z") }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrCP: ['$obj.str',16,5] },{ $substrBytes: ['$obj.str',20,14] },"Norfolk Island",{ $rtrim: { input: '$obj.obj.str' } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',31927],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str'],in: { $trunc: '$num' }} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $month: { $dayOfYear: { $dateToParts: { date: { $isoDayOfWeek: { $toDate: { $millesecond: { $isoDayOfWeek: { $dayOfWeek: { $minute: { $minute: { $isoWeekYear: { $dateToParts: {date: { $minute: { $isoWeekYear: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T16:25:13.071Z"),format: "%d-%%-%m-%G-%Y-%m-%d-%U-%S-%w-%Z",timezone: "Europe/Astrakhan"} } } } },iso8601: false} } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Bedfordshire mesh Sleek",'$obj.str','$obj.obj.obj.str'],99803] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["multi-byte Shoes Fresh",{ $toUpper: "optical" }],['$num']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[87569],[{ $toString: { $dateToString: {date: '$obj.obj.date',format: "%d-%%-%z-%M-%L-%m",onNull: "circuit bandwidth Yemeni Rial"} } }],["Right-sized withdrawal",'$obj.str',{ $dateToString: {date: { $isoWeekYear: { $dayOfWeek: { $isoWeek: { $month: { $second: { $dateFromString: {dateString: "2018-09-06T15:14:42.622Z",format: "%G-%d-%Y-%w-%j-%j-%G"} } } } } } },timezone: "Asia/Yekaterinburg",onNull: { $reverseArray: [[{ $dateToString: {date: new Date("2018-09-06T13:25:43.773Z"),timezone: "Etc/GMT+4",onNull: { $arrayToObject: [[{k: "Pants deposit repurpose",v: new Date("2018-09-06T10:12:55.995Z")}]] }} }]] }} }],[],["transmitting cross-platform",'$str']]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $month: { $dateFromString: {dateString: "2018-09-05T22:18:18.590Z",format: "%U-%U-%V-%z-%m",timezone: "America/Argentina/Mendoza",onError: { $isoWeekYear: { $year: { $dateFromString: {dateString: "2018-09-06T15:50:23.463Z",format: "%d-%M-%Y-%M"} } } },onNull: { $reverseArray: [[]] }} } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',19,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Right-sized Industrial",v: { $ceil: 96670 }},{k: "gold Officer",v: false},{k: "Direct",v: { $substr: [{ $substr: ['$str',17,9] },19,3] }}]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toString: { $millesecond: { $toDate: { $range: [6,20,4] } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Incredible Metal Pizza Front-line"],['$obj.obj.str',"Garden Unbranded",{ $rtrim: {input: { $ltrim: { input: "Home Loan Account Egyptian Pound" } },chars: "online AI Clothing"} }],['$obj.obj.obj.str'],[],['$num',91917]],defaults: []} }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str',"yellow",'$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $isoWeekYear: { $dayOfYear: { $second: { $minute: { $dayOfMonth: { $isoWeekYear: { $second: { $year: { $dateToString: {date: { $toDate: { $arrayElemAt: [[{ $toUpper: '$obj.obj.str' },{ $concat: ['$str'] },"Credit Card Account virtual"],'$obj.obj.num'] } },onNull: { $objectToArray: '$obj.obj.obj.obj' }} } } } } } } } } },timezone: "America/Danmarkshavn"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',"Auto Loan Account Mandatory forecast",{ $toString: { $arrayElemAt: [['$obj.obj.str',"alarm Bedfordshire"],'$obj.obj.num'] } }]]] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Practical",v: 71207},{k: "Tools Multi-channelled Generic",v: new Date("2018-09-06T10:11:08.702Z")}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $year: { $dayOfWeek: { $toDate: { $arrayElemAt: [[{ $month: { $hour: { $dayOfMonth: { $dateFromParts: {year: { $abs: 62085 },month: { $divide: ['$obj.num',35441] },day: { $ceil: '$obj.num' },minute: { $ceil: '$num' },millisecond: { $cmp: [{ $arrayToObject: [[{k: "microchip salmon Awesome",v: 95735},{k: "Berkshire",v: '$num'}]] },{ $zip: {inputs: [["Summit",'$obj.obj.str'],['$obj.str'],[{ $pow: ['$obj.obj.num',{ $add: [23739,63158] }] }]],useLongestLength: true} }] },timezone: "America/Resolute"} } } } },{ $ltrim: { input: '$obj.obj.obj.str' } }],{ $sqrt: 9996 }] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[60149,'$num'],[{ $toLower: "Pre-emptive Handmade" },{ $substrBytes: ['$obj.obj.str',11,5] }],['$obj.obj.num'],[],[{ $toUpper: '$obj.obj.obj.str' }]]] }, _id: 0}}],

        [{$project: {a: { $range: [12,1,20] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fiji Health microchip",v: 93559}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Common",v: false}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%M-%m-%S-%z-%L-%L-%S-%V-%S-%M",timezone: "America/Argentina/Buenos_Aires"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["impactful Croatia PNG",4,11] },'$obj.obj.obj.str'],{ $exp: 27396 }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "capability mint green distributed",v: "deposit Unbranded"},{k: "Forest generate",v: '$num'},{k: "Bedfordshire magenta",v: { $millesecond: { $dayOfMonth: { $minute: { $week: { $dayOfYear: { $second: { $dateToString: {date: { $minute: { $isoWeek: { $month: new Date("2018-09-06T13:05:50.207Z") } } },format: "%j-%d-%d-%V-%L-%%-%H",timezone: "Africa/Dar_es_Salaam",onNull: { $substrBytes: [{ $rtrim: { input: "focus group" } },4,10] }} } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],75387] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $year: { $dayOfWeek: { $second: { $millesecond: { $month: { $toDate: { $concat: [{ $substr: ["payment",8,10] }] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $ln: '$obj.obj.num' },month: { $trunc: 84059 },minute: { $log10: 3447 },millisecond: { $cmp: [{ $range: [2,6,20] },{ $arrayElemAt: [['$obj.num',37413],'$obj.num'] }] },timezone: "America/Caracas"} }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Front-line Intelligent"],in: { $indexOfArray: [{ $concatArrays: [[],['$obj.obj.str',{ $substr: ['$obj.str',4,18] },"Manors parsing"],[],[new Date("2018-09-06T03:25:00.227Z")]] },{ $arrayToObject: [[{k: "Salad Metal solutions",v: 66902},{k: "Small Frozen Cheese New Taiwan Dollar Avon",v: { $millesecond: { $second: { $month: { $year: { $dateToParts: {date: { $dayOfMonth: { $hour: { $isoWeekYear: { $minute: { $dateToString: {date: new Date("2018-09-06T13:55:19.515Z"),format: "%%-%L-%z-%U-%%-%u-%j-%m-%M-%H",onNull: { $dateToString: {date: '$$this',timezone: "Australia/Victoria"} }} } } } } },iso8601: true} } } } } }},{k: "Global Ameliorated Baby",v: "leverage"},{k: "auxiliary",v: true}]] },9] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [1,16,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "incentivize Tasty Fresh Keyboard",v: { $millesecond: { $dateToString: {date: new Date("2018-09-06T06:02:35.139Z"),timezone: "Singapore",onNull: { $dayOfYear: { $toDate: { $arrayToObject: [[]] } } }} } }},{k: "Credit Card Account Granite",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: ["help-desk"] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToParts: { date: { $minute: { $dayOfMonth: { $week: { $dateFromParts: {isoWeekYear: { $abs: 16676 },second: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $rtrim: {input: "Handcrafted Concrete Pizza Specialist Chair",chars: { $substrCP: ['$obj.obj.obj.str',19,3] }} },9,0] },timezone: "Pacific/Easter"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.obj.str',chars: { $rtrim: { input: "Home Chief Avon" } }} }, _id: 0}}],

        [{$project: {a: { $toUpper: "panel" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],65782] }, _id: 0}}],

        [{$project: {a: { $toLower: "blue Rustic" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[25376,'$num','$num'],[],[{ $trim: { input: { $substrCP: ["Corporate sexy",20,18] } } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[66377,'$obj.obj.num','$obj.obj.obj.num'],[22962],['$str',"calculate","Tanzanian Shilling",{ $rtrim: {input: { $ltrim: { input: '$obj.obj.obj.str' } },chars: { $concat: [] }} }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "port",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "vortals",v: { $toLower: { $substrCP: ['$obj.obj.str',4,17] } }},{k: "Coordinator Tanzanian Shilling bandwidth",v: 93248}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Platinum",v: true},{k: "calculating",v: "Computers"}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $substrCP: [{ $trim: { input: "content" } },0,0] } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeek: { $isoDayOfWeek: { $dateToString: { date: new Date("2018-09-05T23:54:50.338Z") } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Frozen Berkshire revolutionize",{ $toLower: "parse transition" },'$obj.str'],41668] }, _id: 0}}],

        [{$project: {a: { $range: [2,16] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $pow: ['$$this','$obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["dynamic Cliffs"],[],['$obj.obj.obj.str'],["Tennessee Balboa US Dollar Gloves",'$str']]] }, _id: 0}}],

        [{$project: {a: { $toString: { $rtrim: {input: { $trim: { input: '$obj.str' } },chars: '$str'} } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[]] } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["calculate programming back up",{ $substrCP: ['$obj.str',2,3] }],[],[91990],['$num',94716],[{ $concat: ["exuding Checking Account",'$obj.obj.obj.str'] },"homogeneous"]] }, _id: 0}}],

        [{$project: {a: { $range: [15,1] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.str',3,6] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[{ $dateToString: { date: '$date' } },{ $rtrim: { input: '$obj.obj.str' } }],59573] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Money Market Account",16,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],31261] }, _id: 0}}],

        [{$project: {a: { $year: { $isoWeekYear: { $month: { $toDate: { $arrayElemAt: [['$obj.obj.obj.str'],51510] } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToParts: {date: { $week: '$obj.obj.date' },timezone: "Africa/Banjul",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%d-%%-%m-%j-%L-%H"} }, _id: 0}}],

        [{$project: {a: { $month: { $isoDayOfWeek: { $millesecond: { $month: { $dayOfYear: { $minute: { $dateToString: {date: new Date("2018-09-06T12:22:03.657Z"),onNull: '$obj.obj.obj.str'} } } } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [7627,'$obj.obj.obj.num'],as: 'matilda',in: { $subtract: ['$obj.obj.obj.num',{ $trunc: 83430 }] }} }, _id: 0}}],

        [{$project: {a: { $substr: ["Ergonomic",11,10] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.obj.obj.str',6,11] },'$obj.str'],62459] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"primary Singapore Investment Account"],38771] }, _id: 0}}],

        [{$project: {a: { $range: [2,9] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Computer Administrator Hat",'$str'],[79547,'$obj.obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: "niches Convertible Marks supply-chains" } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: ['$str',9,13] } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str','$obj.str'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.str',18,5] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeekYear: { $dayOfMonth: { $millesecond: { $week: { $dateFromString: {dateString: "2018-09-06T11:40:52.990Z",format: "%G-%G-%M-%M",onError: { $arrayToObject: [[[],['$obj.obj.obj.str'],['$obj.obj.num','$obj.obj.num'],["user-facing scale",'$obj.obj.str',"interface overriding"],[{ $concat: [{ $dateToString: {date: { $minute: { $isoWeek: { $isoDayOfWeek: { $hour: { $dayOfWeek: { $dateToParts: {date: { $month: { $dayOfWeek: { $dateToString: { date: '$date' } } } },timezone: "America/Glace_Bay"} } } } } } },format: "%Y-%Y-%z-%L-%d-%Z-%Y",onNull: { $dateToString: {date: new Date("2018-09-06T19:13:28.794Z"),timezone: "Antarctica/Palmer",onNull: '$obj.str'} }} },"Bedfordshire Avon",'$str'] },"Gold Re-contextualized"],[]]] }} } } } } } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Sports"],73116] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $rtrim: {input: "Plastic Coordinator",chars: '$obj.obj.obj.str'} }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Soft Bike white",v: new Date("2018-09-06T04:23:37.657Z")},{k: "applications interactive",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T18:53:12.507Z",format: "%S-%V-%j-%%-%u-%M-%z",onError: { $reverseArray: [[{ $rtrim: { input: "didactic" } }]] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T14:53:39.290Z"),format: "%L-%u-%Y-%V-%H-%V-%Y-%z",timezone: "Canada/Yukon",onNull: "Assurance Devolved"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Croatia maximized navigating",v: { $ceil: '$num' }}]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T04:50:58.014Z",timezone: "America/Port-au-Prince",onError: { $concatArrays: [["Refined Metal Chair"],['$obj.obj.obj.num']] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],78872] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[false,new Date("2018-09-06T10:02:49.258Z"),new Date("2018-09-06T12:47:58.269Z"),77606],[{ $ltrim: { input: "Savings Account" } },'$str'],["Kentucky 24/365 redundant","Tunisian Dinar"],['$obj.obj.num'],[{ $substrCP: [{ $rtrim: {input: "database Niue auxiliary",chars: '$obj.obj.str'} },14,12] },{ $trim: { input: '$str' } }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],74894] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T09:36:30.817Z",format: "%M-%u-%Z-%V-%G-%M",timezone: "Asia/Brunei"} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $isoDayOfWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T01:36:10.557Z",onError: { $range: [7,12,15] }} } } },format: "%j-%d-%U-%Z-%d-%u",timezone: "America/Indiana/Knox"} }, _id: 0}}],

        [{$project: {a: { $map: {input: ["hack incubate Canada"],as: 'daisha',in: { $size: [[]] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $zip: {inputs: [['$obj.obj.obj.num'],[],[]],useLongestLength: false} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $range: [8,10] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],[6166],[{ $substr: [{ $toLower: "Dominican Peso" },0,17] },"quantifying Square"],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',{ $toString: { $arrayToObject: [[{k: "approach Cove",v: "Nakfa conglomeration Bike"}]] } }] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.str'],[28090,95005,'$num'],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T08:45:39.888Z",timezone: "Etc/UTC",onError: { $isoWeek: { $isoWeekYear: { $isoWeek: { $week: { $dayOfMonth: { $toDate: { $map: {input: [94733,'$obj.obj.obj.num'],as: 'nasir',in: { $add: [] }} } } } } } } }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: "Borders cross-platform Credit Card Account" } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $toLower: '$obj.obj.str' },chars: "reinvent"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],32130] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$str'],61864] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.obj.str','$str'],[{ $dateToString: {date: '$obj.date',format: "%S-%S-%w-%U-%S-%V-%S-%j",onNull: { $dayOfYear: { $month: { $millesecond: { $dayOfYear: { $hour: { $month: { $second: { $dayOfYear: { $week: { $dayOfMonth: { $week: { $dateToParts: {date: { $dateToParts: {date: { $isoWeekYear: { $year: { $dayOfWeek: { $dateToString: {date: { $minute: { $dateFromParts: {year: { $multiply: ['$obj.obj.obj.num'] },hour: { $sqrt: { $log: [72446,'$obj.obj.num'] } },second: { $subtract: ['$obj.num','$obj.num'] },timezone: "Asia/Macao"} } },timezone: "Asia/Kolkata",onNull: "methodology"} } } } },timezone: "Africa/Algiers",iso8601: true} },iso8601: true} } } } } } } } } } } } }} }],[]],defaults: ["Licensed Plastic Bike",[new Date("2018-09-06T15:01:30.123Z"),[7596]],4234]} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[]],useLongestLength: false,defaults: [{array: [new Date("2018-09-06T06:14:26.520Z")],num: 76025}]} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%S-%d-%Z-%%-%Y-%d",timezone: "Etc/GMT+11"} }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.obj.obj.num',58342,{ $log: ['$obj.obj.num',87230] }]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num',97019],[],["knowledge user Regional red",'$obj.obj.str'],[{ $toUpper: { $substrBytes: ["Tasty Metal Mouse bypassing",3,13] } }]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Congo Specialist",8,13] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Movies bypass",v: 12838},{k: "compress",v: '$obj.obj.date'},{k: "Chips",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $range: [5,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfMonth: { $second: { $dayOfYear: { $millesecond: { $hour: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $exp: 7394 },isoWeek: { $ln: 32249 },isoDayOfWeek: { $pow: ['$obj.num',224] },hour: { $log10: 61735 },second: { $sqrt: '$obj.obj.obj.num' },millisecond: { $add: [] }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],13590] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [{ $trim: { input: "mobile" } },'$obj.str'] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $reverseArray: [[3523,68962]] },{ $arrayElemAt: [['$obj.obj.num'],{ $multiply: [93877,'$obj.obj.num'] }] },10] },isoDayOfWeek: { $indexOfArray: [{ $range: [2,7,11] },{ $arrayToObject: [[['$str',{ $substrCP: ['$obj.str',8,19] }]]] },10] },hour: { $log: ['$obj.obj.num','$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $second: { $minute: { $dateToString: { date: '$date' } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["turn-key Aruban Guilder",9,18] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["algorithm e-business granular",{ $ltrim: {input: "Car",chars: '$obj.obj.str'} }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $ln: 68026 },isoDayOfWeek: { $divide: ['$obj.num',56061] },hour: { $size: [[{ $floor: '$num' }]] },minute: { $abs: 76932 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire Auto Loan Account",v: true}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.obj.str',chars: { $substrCP: [{ $toLower: "synthesizing Devolved" },9,13] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],46066] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoDayOfWeek: { $dayOfMonth: { $dayOfMonth: { $dayOfMonth: { $millesecond: '$obj.date' } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $pow: ['$obj.obj.num',61117] }] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $ln: 2561 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],29452] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[['$obj.str',{ $rtrim: { input: { $dateToString: {date: new Date("2018-09-06T06:16:19.971Z"),format: "%d-%L-%V-%m",onNull: '$str'} } } },"Forward"],['$obj.obj.num'],[],[],[],["Tanzanian Shilling Response groupware"]]] } },'$obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $range: [0,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],["Handcrafted circuit",{ $trim: { input: '$str' } }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transitional Industrial",v: { $isoDayOfWeek: { $minute: { $isoDayOfWeek: { $minute: { $isoWeek: { $isoWeekYear: { $hour: { $month: { $isoWeekYear: { $isoWeekYear: { $second: { $dateFromParts: {year: { $ln: 8806 },month: '$obj.obj.num',day: { $size: [[{ $toUpper: '$obj.obj.obj.str' },'$obj.str']] },hour: { $exp: 52435 },second: { $divide: ['$num',17908] },millisecond: { $abs: '$obj.num' },timezone: "America/St_Johns"} } } } } } } } } } } } }},{k: "card Fantastic Technician",v: false},{k: "SMS",v: { $dateToString: {date: '$obj.obj.date',onNull: "Principal"} }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["back-end Operative port"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $year: { $dateToParts: {date: { $week: { $dayOfWeek: { $isoWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T12:36:58.914Z",onError: { $arrayToObject: [[[],[{ $substrCP: ['$obj.str',11,8] },'$obj.obj.obj.str',"AGP Nepal",{ $concat: ["syndicate"] }],[],[6009,'$obj.obj.obj.num'],[],[{ $concat: [{ $substr: ['$obj.obj.obj.str',4,6] }] }],['$obj.obj.num']]] }} } } } } },iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"mission-critical Gloves"],4571] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Chief SCSI Cambridgeshire",v: new Date("2018-09-06T00:00:47.484Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],22396] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',20,13] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Dynamic Auto Loan Account"],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoWeek: { $hour: { $dateFromParts: {year: { $ln: '$obj.num' },second: { $exp: 66065 }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$date',false],81650] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Bike",4,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],55138] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [["Tonga Representative quantifying",{ $substrBytes: ["real-time Shoes",2,10] },'$obj.obj.str'],'$num'] } }, _id: 0}}],

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
