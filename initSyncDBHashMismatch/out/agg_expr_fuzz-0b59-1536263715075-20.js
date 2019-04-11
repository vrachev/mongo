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
        return coll.insert({_id: 12522,str: "circuit",num: 79713,date: new Date("2018-09-06T03:55:39.856Z"),array: [],obj: {_id: 12523,str: "B2B capacitor markets",num: 45745,date: new Date("2018-09-06T13:42:18.255Z"),array: ["Checking Account Fresh",[8865,{_id: 12524,str: "system-worthy",num: 33300,date: new Date("2018-09-06T18:49:19.303Z"),array: [],obj: {}},new Date("2018-09-06T12:35:52.807Z"),85084,"Keyboard Planner",[67215],new Date("2018-09-05T20:01:48.315Z")],60403,"New Jersey",91742,new Date("2018-09-06T15:46:50.885Z"),new Date("2018-09-06T06:26:30.612Z"),[],"copying target",{_id: 12525,str: "utilize Music",obj: {_id: 12526,str: "CSS Rand",num: 44743}}]}});
    },

    function(coll) {
        return coll.insert({_id: 12527,str: "New York",num: 45016,date: new Date("2018-09-06T00:29:39.176Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12528,str: "Handcrafted connecting toolset",num: 97673,date: new Date("2018-09-06T15:28:54.309Z"),array: ["Crossing",new Date("2018-09-06T11:52:02.723Z"),87854,[new Date("2018-09-06T13:45:07.984Z"),74010,[],44820,"solutions Division Ball"],new Date("2018-09-05T22:53:43.610Z"),new Date("2018-09-06T08:39:56.412Z"),"Cyprus Niue salmon",[{_id: 12529,str: "PCI override B2C",num: 62951,date: new Date("2018-09-06T14:11:47.437Z"),array: [],obj: {_id: 12530,str: "transparent Saint Helena",obj: {}}}],{_id: 12531,str: "Hawaii cyan",num: 81904,date: new Date("2018-09-06T19:14:18.351Z"),array: [],obj: {}},67678],obj: {_id: 12532,num: 2456,array: ["Central Cayman Islands Dollar convergence",{_id: 12533,str: "Product deposit",date: new Date("2018-09-06T06:08:02.550Z"),array: [],obj: {_id: 12534,num: 8290}},22783]}});
    },

    function(coll) {
        return coll.insert({_id: 12535,str: "Brand Forward wireless",num: 19810,date: new Date("2018-09-06T19:24:36.312Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12536,str: "Savings Account",num: 41796,date: new Date("2018-09-06T15:23:58.758Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12537,num: 59733,date: new Date("2018-09-06T02:10:31.785Z"),array: [77946,new Date("2018-09-06T01:55:49.568Z"),"bus","Guernsey leverage",76865,[],{_id: 12538,str: "content-based",num: 28995,date: new Date("2018-09-06T06:36:02.786Z"),obj: {_id: 12539,str: "Gold Unbranded secured line",date: new Date("2018-09-06T05:00:07.958Z"),obj: {_id: 12540,str: "Phased customer loyalty",num: 20673,date: new Date("2018-09-06T16:27:23.639Z"),array: [],obj: {}}}},"Missouri Savings Account functionalities",93746,25065,{_id: 12541,str: "pink zero tolerance",array: [new Date("2018-09-06T13:51:22.436Z")],obj: {}},[],[new Date("2018-09-06T16:09:36.671Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 12542,str: "Toys deposit",num: 80581,date: new Date("2018-09-06T11:58:02.977Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12543,str: "JSON",num: 79794,date: new Date("2018-09-05T23:31:31.707Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12544,str: "Data",num: 42164,date: new Date("2018-09-06T19:04:39.332Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12545,str: "Jewelery Cambridgeshire transform",num: 51461,date: new Date("2018-09-06T18:41:40.003Z"),array: ["quantifying value-added",{_id: 12546,str: "wireless Intelligent",array: []},52069,"Personal Loan Account lime",38214,new Date("2018-09-06T00:20:21.715Z"),new Date("2018-09-06T03:05:55.798Z"),new Date("2018-09-06T14:21:28.019Z"),29221],obj: {_id: 12547,str: "withdrawal",num: 11158,date: new Date("2018-09-05T21:19:03.519Z"),array: [[],63683,"Nakfa niches","Fundamental",{_id: 12548,str: "mint green New Mexico Car",num: 95808,date: new Date("2018-09-06T09:38:04.650Z"),array: [new Date("2018-09-06T03:28:31.965Z")],obj: {}}],obj: {_id: 12549,num: 90513,date: new Date("2018-09-06T06:30:45.419Z"),obj: {_id: 12550,str: "Incredible Bangladesh",date: new Date("2018-09-06T05:46:54.418Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 12551,str: "Steel Senior Applications",num: 96553,date: new Date("2018-09-06T16:01:04.900Z"),array: [],obj: {_id: 12552,str: "cross-platform",num: 29093,date: new Date("2018-09-06T12:29:45.927Z"),array: [51832,new Date("2018-09-06T12:17:11.399Z"),[{_id: 12553,str: "Pass grey Table",num: 31733,array: [],obj: {}},"Mobility Fresh Operative",new Date("2018-09-06T19:51:22.337Z"),57438,87732,["Eritrea",{_id: 12554,str: "connect",num: 21039,date: new Date("2018-09-06T05:19:28.789Z"),array: ["virtual payment","content-based teal",new Date("2018-09-05T22:34:29.357Z"),new Date("2018-09-06T10:47:22.332Z")],obj: {_id: 12555,date: new Date("2018-09-06T13:07:13.071Z"),array: [new Date("2018-09-06T06:36:47.287Z"),89541],obj: {}}},"payment",[]]],new Date("2018-09-05T22:07:54.085Z"),45724,{_id: 12556,str: "ubiquitous Dynamic",num: 39583,date: new Date("2018-09-06T04:50:54.047Z"),obj: {_id: 12557,num: 602,array: []}}],obj: {_id: 12558,num: 67362,date: new Date("2018-09-06T02:21:40.439Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12559,str: "installation Baby",num: 79664,date: new Date("2018-09-06T05:26:37.298Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12560,str: "Avon Handcrafted Fresh Computer Car",num: 13313,date: new Date("2018-09-05T21:18:02.693Z"),array: [],obj: {_id: 12561,str: "Wooden",num: 96907,date: new Date("2018-09-05T22:30:43.963Z"),obj: {_id: 12562,str: "Metal",num: 60832,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 12563,str: "copy initiative Directives",num: 56661,date: new Date("2018-09-06T02:31:00.563Z"),array: [],obj: {_id: 12564,str: "feed Michigan",num: 31413,date: new Date("2018-09-06T01:43:34.750Z"),array: ["knowledge user XSS",new Date("2018-09-06T10:41:47.538Z"),"Home Loan Account Rustic",55663,{_id: 12565,num: 54177,date: new Date("2018-09-05T23:51:37.087Z"),array: [],obj: {}},54099,new Date("2018-09-06T16:38:00.697Z"),30038,{_id: 12566,str: "Incredible Frozen Pizza",num: 10258,date: new Date("2018-09-06T16:27:23.594Z"),array: ["Right-sized override",new Date("2018-09-06T10:27:07.286Z")],obj: {_id: 12567,str: "parse",array: ["Usability Credit Card Account",new Date("2018-09-05T22:43:22.029Z")]}},[],new Date("2018-09-06T02:56:08.536Z"),9924],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12568,str: "dot-com Licensed Fresh Mouse Cocos (Keeling) Islands",num: 24431,date: new Date("2018-09-06T15:00:43.738Z"),array: [{_id: 12569,str: "killer FTP",date: new Date("2018-09-05T23:01:57.010Z"),array: [],obj: {_id: 12570,str: "optical",num: 82746,date: new Date("2018-09-05T23:35:12.401Z"),array: [],obj: {_id: 12571,num: 96922,obj: {}}}},78049,new Date("2018-09-06T16:49:28.314Z"),72559,"Awesome Fresh Pizza cross-media Security","Chips",new Date("2018-09-06T18:43:37.243Z"),52017,"Tasty Frozen Salad vortals"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12572,str: "Extensions",num: 51094,date: new Date("2018-09-06T15:52:09.157Z"),array: [],obj: {_id: 12573,str: "Concrete Chair quantify",num: 74414,date: new Date("2018-09-05T23:55:47.044Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12574,str: "National supply-chains Nigeria",num: 98890,date: new Date("2018-09-06T02:44:27.071Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12575,str: "Soft override",num: 8023,date: new Date("2018-09-06T07:57:59.197Z"),array: ["mission-critical standardization",58144,"Producer Quality-focused Total","Avon",{_id: 12576,num: 11634,array: [],obj: {}},{_id: 12577,str: "system-worthy overriding Configuration",num: 19102,date: new Date("2018-09-06T14:29:12.875Z"),array: [new Date("2018-09-06T18:26:00.976Z"),19310],obj: {}},new Date("2018-09-05T22:37:38.905Z"),"firewall Multi-lateral",59564,new Date("2018-09-06T05:55:18.123Z"),68734,new Date("2018-09-06T09:50:28.041Z"),{_id: 12578,str: "toolset Assurance Fresh",date: new Date("2018-09-06T01:54:50.721Z"),array: []},"mobile"],obj: {_id: 12579,str: "EXE",num: 26049,array: [],obj: {_id: 12580,str: "back up transmit IB",num: 84347,date: new Date("2018-09-05T23:52:37.982Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 12581,str: "Eritrea",num: 98011,date: new Date("2018-09-06T04:35:07.048Z"),array: [68447,"Saint Martin",33414,new Date("2018-09-06T08:21:10.139Z"),new Date("2018-09-06T15:18:12.899Z"),82007,"Brand optical bifurcated",[],[],{_id: 12582,str: "red Principal",num: 98949,date: new Date("2018-09-06T09:30:45.035Z"),array: [88903,new Date("2018-09-06T10:00:41.178Z"),new Date("2018-09-06T09:00:10.020Z"),["Customer-focused green",new Date("2018-09-05T23:33:46.284Z"),{_id: 12583,str: "Cotton programming",num: 62122,date: new Date("2018-09-06T09:57:11.709Z")}]],obj: {_id: 12584,str: "card",array: [],obj: {_id: 12585,str: "back up",num: 9883,date: new Date("2018-09-06T06:36:19.431Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 12586,str: "partnerships open-source",date: new Date("2018-09-06T17:48:36.254Z"),obj: {_id: 12587,str: "XSS US Dollar",num: 34714,date: new Date("2018-09-06T14:05:11.158Z"),array: ["fault-tolerant Cambridgeshire Ergonomic",{_id: 12588,str: "Applications Research",num: 69168},62865,new Date("2018-09-06T00:01:42.889Z"),47272,"Steel Fresh",new Date("2018-09-06T05:06:58.673Z"),{_id: 12589,str: "Walk",num: 36468,date: new Date("2018-09-06T17:30:53.936Z"),array: [],obj: {_id: 12590,str: "withdrawal New Jersey reciprocal",num: 98406,date: new Date("2018-09-06T11:18:06.675Z"),array: ["Harbor deploy"],obj: {_id: 12591,date: new Date("2018-09-06T03:26:03.597Z"),array: [new Date("2018-09-06T03:00:08.205Z")]}}},[],new Date("2018-09-06T18:07:58.558Z"),[],79558,new Date("2018-09-05T21:00:53.847Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12592,str: "efficient Wooden action-items",num: 95908,date: new Date("2018-09-06T05:08:26.959Z"),array: [],obj: {_id: 12593,str: "reboot",num: 97523,date: new Date("2018-09-05T21:25:30.568Z")}});
    },

    function(coll) {
        return coll.insert({_id: 12594,str: "Belize Dollar Direct",num: 44353,date: new Date("2018-09-06T11:53:03.003Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12595,str: "AGP",num: 7260,array: [75342,"Garden","Licensed Gorgeous",26288,[{_id: 12596,str: "SMTP encoding",num: 41483,date: new Date("2018-09-06T16:49:16.668Z"),array: [],obj: {_id: 12597,str: "redundant",num: 6120,date: new Date("2018-09-05T21:35:14.589Z"),obj: {_id: 12598,str: "synergize Garden",date: new Date("2018-09-06T02:21:53.177Z"),obj: {}}}},new Date("2018-09-06T10:49:41.902Z"),65341,"Infrastructure actuating Steel",new Date("2018-09-05T21:04:14.126Z")],new Date("2018-09-06T18:50:59.948Z"),{_id: 12599,str: "deposit Avon",date: new Date("2018-09-06T16:04:38.013Z"),array: [26978]},"transform withdrawal Assurance"],obj: {_id: 12600,date: new Date("2018-09-06T04:44:36.897Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12601,str: "value-added Fantastic Money Market Account",num: 27915,date: new Date("2018-09-06T02:12:05.162Z"),array: ["Equatorial Guinea Albania",44435,new Date("2018-09-06T09:15:32.526Z"),new Date("2018-09-06T14:07:29.842Z"),{_id: 12602,str: "Lead Savings Account white",num: 41346,date: new Date("2018-09-05T22:53:36.457Z"),obj: {}},70510,58206,"convergence",new Date("2018-09-05T20:35:16.091Z"),"collaborative programming",new Date("2018-09-06T02:22:20.328Z"),"Jewelery Auto Loan Account parse",[]],obj: {_id: 12603,str: "Barbados Borders California",num: 40643,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12604,str: "auxiliary",num: 48896,date: new Date("2018-09-06T03:25:22.431Z"),array: [],obj: {_id: 12605,str: "Games matrix Granite",num: 99901,date: new Date("2018-09-06T02:03:52.353Z"),array: [new Date("2018-09-06T18:59:28.603Z"),"West Virginia vertical",98114,43337,"eyeballs collaborative bandwidth-monitored",new Date("2018-09-06T09:54:36.014Z"),58009,31208],obj: {_id: 12606,str: "Analyst New Hampshire",num: 95306,date: new Date("2018-09-06T03:57:37.745Z"),array: [new Date("2018-09-05T20:40:34.268Z"),"French Polynesia frame neural","compressing static customized",new Date("2018-09-06T08:17:21.491Z"),{_id: 12607,date: new Date("2018-09-06T09:27:48.929Z"),array: [[[],{_id: 12608,num: 1244,date: new Date("2018-09-06T19:28:09.210Z")}],"Direct white EXE",new Date("2018-09-06T06:51:10.126Z"),[],new Date("2018-09-05T20:35:34.473Z")],obj: {}}],obj: {_id: 12609,num: 27859,array: ["zero tolerance infomediaries deliverables"],obj: {_id: 12610,str: "Kentucky"}}}}});
    },

    function(coll) {
        return coll.insert({_id: 12611,num: 26844,date: new Date("2018-09-06T17:31:00.186Z"),array: [],obj: {_id: 12612,str: "Practical blue",num: 54634,date: new Date("2018-09-06T02:33:57.825Z"),array: [new Date("2018-09-05T22:45:59.942Z"),[new Date("2018-09-06T18:28:45.909Z"),"Synchronised port",71132,[],{_id: 12613,str: "Trail web-readiness",date: new Date("2018-09-06T07:18:49.394Z"),array: [],obj: {_id: 12614,num: 96504,obj: {}}},"Functionality"],{_id: 12615,str: "projection Skyway CFA Franc BCEAO",obj: {}},67593,new Date("2018-09-06T07:25:27.656Z"),"mindshare",new Date("2018-09-06T01:51:33.474Z"),40806]}});
    },

    function(coll) {
        return coll.insert({_id: 12616,str: "Accounts withdrawal",num: 86924,date: new Date("2018-09-06T17:54:43.564Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12617,str: "HDD",num: 50869,date: new Date("2018-09-06T11:50:14.712Z"),array: [],obj: {_id: 12618,str: "Books",num: 29757,date: new Date("2018-09-05T23:35:07.545Z"),array: [70736,[],"backing up","payment wireless Tonga","bandwidth Fantastic Concrete Soap","interactive Optimization",84871,new Date("2018-09-06T00:37:52.576Z"),{_id: 12619,str: "Corporate engineer Sleek Metal Ball",date: new Date("2018-09-06T09:30:10.662Z"),array: [75182,new Date("2018-09-06T05:31:58.973Z")],obj: {_id: 12620,str: "interface Music",num: 87900,date: new Date("2018-09-06T00:30:15.676Z"),array: [new Date("2018-09-06T02:22:17.872Z")],obj: {}}},new Date("2018-09-06T03:54:10.579Z"),[new Date("2018-09-06T03:34:28.299Z"),2374,{_id: 12621,num: 11383,array: []}],[]],obj: {_id: 12622,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12623,str: "Intelligent Unbranded",array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12624,str: "protocol",num: 42622,date: new Date("2018-09-06T15:05:05.732Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 12625,num: 59069,date: new Date("2018-09-05T20:57:22.474Z"),array: ["Terrace Egyptian Pound transmit","Steel 5th generation XSS",new Date("2018-09-06T12:31:13.832Z"),30677,new Date("2018-09-06T16:56:18.634Z"),59104,new Date("2018-09-06T07:03:57.044Z"),[{_id: 12626,str: "Frozen bluetooth",num: 46260,date: new Date("2018-09-06T09:21:49.534Z"),obj: {}},"Granite enterprise Bedfordshire",{_id: 12627,str: "Albania Rustic",num: 72757,date: new Date("2018-09-06T18:59:36.169Z"),array: [],obj: {}}],29851,"Phased"],obj: {_id: 12628,str: "parse",num: 9174,date: new Date("2018-09-06T02:01:53.933Z"),array: [],obj: {_id: 12629,str: "Credit Card Account global bluetooth",date: new Date("2018-09-06T02:53:35.811Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12630,str: "invoice",num: 18975,date: new Date("2018-09-06T13:31:20.492Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 12631,str: "circuit",num: 40358,date: new Date("2018-09-06T14:45:50.036Z"),array: [19389,"Fantastic",[],"Buckinghamshire",75951,"Road",new Date("2018-09-06T09:29:44.668Z"),new Date("2018-09-06T04:39:41.007Z"),{_id: 12632,str: "Oregon communities",num: 53827,date: new Date("2018-09-06T11:30:38.370Z"),array: [2341,new Date("2018-09-06T06:15:45.527Z")],obj: {_id: 12633,date: new Date("2018-09-06T07:43:28.020Z"),obj: {}}},[78801],[],new Date("2018-09-06T01:05:53.440Z"),"infomediaries back-end",58231],obj: {_id: 12634,str: "interface Fantastic",num: 83847,date: new Date("2018-09-06T19:42:52.292Z"),array: [[],11831],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12635,str: "generate",num: 68106,date: new Date("2018-09-06T10:47:52.891Z"),array: ["Nakfa revolutionary","Rustic Gorgeous",[98476,43975,new Date("2018-09-06T03:35:07.729Z"),4957,new Date("2018-09-06T04:56:13.757Z"),{_id: 12636,str: "optical cultivate",array: [],obj: {_id: 12637,num: 52072,date: new Date("2018-09-06T13:50:32.663Z")}},"Infrastructure neutral Rest",[],{_id: 12638,str: "Quality turquoise Bike",num: 62295,array: ["Moldovan Leu Towels productivity"],obj: {_id: 12639,str: "port",num: 81805,date: new Date("2018-09-05T23:46:19.126Z"),array: [],obj: {}}},62355,new Date("2018-09-06T14:42:14.158Z")],new Date("2018-09-05T23:24:49.798Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12640,str: "leverage Practical",num: 96856,array: [{_id: 12641,str: "Germany District",num: 50895,date: new Date("2018-09-06T05:16:15.674Z"),array: [],obj: {_id: 12642,num: 63263,date: new Date("2018-09-06T15:41:14.313Z"),array: ["cross-platform Balboa US Dollar",48581,new Date("2018-09-06T08:16:14.831Z"),new Date("2018-09-06T12:47:58.582Z"),23114,new Date("2018-09-06T13:14:43.788Z")],obj: {}}},{_id: 12643,str: "Auto Loan Account Glen",date: new Date("2018-09-06T14:15:03.580Z"),array: [],obj: {_id: 12644,str: "Specialist",array: [],obj: {}}},"optimize grey networks","Solomon Islands deposit magenta",91230,[],"Baby orchestrate",4511,[],new Date("2018-09-06T14:55:21.929Z")]});
    },

    function(coll) {
        return coll.insert({_id: 12645,str: "schemas Designer",num: 73777,date: new Date("2018-09-05T23:44:06.860Z"),array: [new Date("2018-09-06T19:53:17.127Z"),new Date("2018-09-06T07:25:47.660Z"),[93844,"Utah Practical utilisation",new Date("2018-09-06T06:37:03.593Z")],{_id: 12646,str: "override",num: 2572,date: new Date("2018-09-06T07:07:18.554Z"),array: [],obj: {}},[],26453,"Rapid",{_id: 12647,num: 46390,obj: {}},"Operative Cayman Islands",new Date("2018-09-06T09:53:45.325Z"),29616,new Date("2018-09-06T15:29:52.322Z")]});
    },

    function(coll) {
        return coll.insert({_id: 12648,str: "Open-source Tuvalu",num: 71938,date: new Date("2018-09-06T16:47:20.348Z"),array: [new Date("2018-09-06T06:55:30.837Z"),35298,"revolutionary infomediaries Credit Card Account",74080,7042,new Date("2018-09-06T11:58:50.708Z")],obj: {_id: 12649,str: "Health withdrawal Principal",date: new Date("2018-09-06T16:38:18.023Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12650,str: "feed",num: 75583,date: new Date("2018-09-06T03:27:13.756Z"),array: [new Date("2018-09-06T18:37:47.447Z"),"Clothing override Research",new Date("2018-09-06T11:00:44.057Z"),38486,"Ports Cloned",new Date("2018-09-06T14:13:40.943Z"),56593,{_id: 12651,array: [],obj: {}},48656,"turquoise"]});
    },

    function(coll) {
        return coll.insert({_id: 12652,str: "Mandatory backing up Meadow",num: 44583,date: new Date("2018-09-06T03:40:29.960Z"),array: [59234,new Date("2018-09-06T09:55:24.701Z"),"Sports invoice",23075,"Multi-layered cyan",51137,new Date("2018-09-06T06:07:11.080Z"),"white",new Date("2018-09-05T23:02:10.218Z"),{_id: 12653,str: "Graphic Interface",num: 54165,date: new Date("2018-09-06T18:34:44.414Z"),array: [],obj: {}},new Date("2018-09-06T18:53:57.301Z"),15393,{_id: 12654,str: "invoice grey payment",num: 3389,array: ["Metal"],obj: {_id: 12655,date: new Date("2018-09-06T19:30:49.206Z"),array: [[],"24/7 Locks Shoes",new Date("2018-09-06T04:58:02.317Z")],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 12656,str: "United Arab Emirates",num: 60308,date: new Date("2018-09-06T13:00:08.700Z"),array: [],obj: {_id: 12657,str: "Unbranded Car copying",num: 78756,date: new Date("2018-09-06T12:22:30.014Z"),array: [new Date("2018-09-06T05:17:25.549Z"),"holistic",[],9084,new Date("2018-09-06T01:06:55.736Z"),43219,"Borders","utilize",[],new Date("2018-09-06T19:45:55.482Z"),45685,{_id: 12658,str: "panel Frozen",num: 76002,date: new Date("2018-09-06T00:21:49.484Z"),array: [31150],obj: {_id: 12659,num: 33678}},new Date("2018-09-06T11:26:42.810Z"),"bypassing",84022],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12660,str: "Gorgeous Gorgeous Granite Hat Corporate",num: 22855,date: new Date("2018-09-06T02:27:11.714Z"),array: ["overriding brand",68399,new Date("2018-09-06T14:23:00.828Z"),new Date("2018-09-05T22:28:23.134Z"),[],new Date("2018-09-06T14:39:00.917Z"),87783,"Consultant leverage Rwanda",{_id: 12661,str: "salmon",num: 71185,obj: {_id: 12662,num: 72220,array: [],obj: {_id: 12663,str: "Underpass",date: new Date("2018-09-06T03:03:50.413Z"),obj: {_id: 12664,str: "Home Avon",num: 95828,date: new Date("2018-09-05T23:12:17.543Z"),array: [[76062],{_id: 12665,str: "Gloves Sleek",array: [],obj: {}},"Moldovan Leu mission-critical cross-platform",{_id: 12666,num: 31441,date: new Date("2018-09-06T05:04:58.527Z"),array: [new Date("2018-09-06T19:00:28.111Z"),["compress"]]},new Date("2018-09-06T01:51:52.377Z")]}}}},47664]});
    },

    function(coll) {
        return coll.insert({_id: 12667,str: "Director Operative",num: 13818,date: new Date("2018-09-06T14:34:26.871Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12668,str: "Designer haptic",num: 54885,date: new Date("2018-09-06T13:53:37.469Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12669,str: "Shoes Maine",num: 96025,date: new Date("2018-09-06T15:00:46.877Z"),array: [45088,5532,"Music Cliffs","Architect white alarm",new Date("2018-09-06T12:49:14.910Z"),12229,"Georgia reboot invoice",{_id: 12670,num: 29501,date: new Date("2018-09-05T21:27:59.670Z"),array: [["Berkshire redundant Mobility"],{_id: 12671,str: "synthesizing engage optimize",num: 9585,obj: {_id: 12672,str: "Chief B2C Ghana",date: new Date("2018-09-06T07:21:25.744Z"),array: [],obj: {_id: 12673,str: "quantify Direct optical",num: 3547,date: new Date("2018-09-06T16:50:37.837Z"),array: []}}}],obj: {}},10532,new Date("2018-09-05T21:46:34.211Z"),new Date("2018-09-06T19:09:59.915Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12674,str: "action-items feed SDD",num: 84467,date: new Date("2018-09-06T04:56:01.562Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12675,str: "input",num: 46583,date: new Date("2018-09-06T00:44:34.988Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12676,str: "deposit archive",num: 54801,date: new Date("2018-09-06T09:29:07.112Z"),array: [96128,"revolutionize","benchmark collaborative Quality",new Date("2018-09-06T17:21:08.653Z"),"USB visionary Soap",new Date("2018-09-06T12:22:19.337Z"),new Date("2018-09-06T09:56:52.587Z"),new Date("2018-09-06T01:15:02.748Z"),[29098,47787,new Date("2018-09-05T23:38:36.776Z")],"Consultant Corporate incubate","Manager"],obj: {_id: 12677,num: 17047,date: new Date("2018-09-06T09:25:31.762Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12678,str: "Realigned Intelligent COM",num: 39396,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12679,str: "synergy benchmark migration",num: 63672,date: new Date("2018-09-06T13:33:55.546Z"),array: [91001,["Books"],new Date("2018-09-06T04:43:58.027Z"),6488,new Date("2018-09-06T11:29:24.391Z"),"non-volatile",new Date("2018-09-06T10:33:44.896Z"),new Date("2018-09-06T11:32:32.824Z"),"RSS",64405,34035,new Date("2018-09-05T20:39:20.810Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12680,num: 89730,date: new Date("2018-09-05T20:17:29.266Z"),array: [90791,"Baby capacitor Assistant",59270,[],new Date("2018-09-06T11:10:36.822Z"),new Date("2018-09-06T10:05:11.234Z"),new Date("2018-09-06T06:34:59.037Z"),"Bedfordshire Zimbabwe Dollar",40828],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12681,str: "regional",num: 41888,date: new Date("2018-09-06T14:27:39.615Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12682,num: 33000,date: new Date("2018-09-06T00:10:43.577Z"),array: [],obj: {_id: 12683,str: "Baby",num: 39891,array: ["bifurcated transmitter azure",new Date("2018-09-06T16:07:18.550Z"),"Industrial",new Date("2018-09-06T18:47:01.901Z"),"orange",new Date("2018-09-06T18:24:58.635Z"),new Date("2018-09-06T00:32:00.087Z"),94857,6542,"back up Handmade Strategist",[36806,new Date("2018-09-06T08:14:31.816Z")],6332]}});
    },

    function(coll) {
        return coll.insert({_id: 12684,str: "Antarctica (the territory South of 60 deg S) granular Grenada",num: 48233,date: new Date("2018-09-06T02:28:53.859Z"),array: [],obj: {_id: 12685,str: "Incredible Soft Mouse array applications",num: 58990,date: new Date("2018-09-06T13:23:58.262Z"),array: [76007,"grow index",12867,61737,new Date("2018-09-06T13:40:41.775Z"),"Table Configuration Self-enabling",new Date("2018-09-06T11:35:14.512Z"),"backing up Borders","array",[{_id: 12686,str: "knowledge base",date: new Date("2018-09-05T23:46:29.691Z"),array: [],obj: {}},30992],{_id: 12687,str: "Cook Islands alarm",num: 69517,date: new Date("2018-09-06T18:19:29.563Z"),obj: {}},new Date("2018-09-05T23:14:24.489Z")],obj: {_id: 12688,num: 44515,date: new Date("2018-09-06T16:20:31.181Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 12689,str: "PNG",num: 6230,date: new Date("2018-09-05T20:28:12.648Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12690,str: "silver",num: 25320,array: [20108,"Cotton Toys",new Date("2018-09-06T19:34:01.949Z"),"Mobility",92761,{_id: 12691,str: "invoice programming",num: 57913,array: [],obj: {_id: 12692,date: new Date("2018-09-06T07:28:12.633Z"),array: [],obj: {}}},18405,new Date("2018-09-06T06:32:44.912Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12693,str: "morph transmitting",num: 91696,date: new Date("2018-09-05T21:17:24.520Z"),array: [13381,new Date("2018-09-06T19:37:56.354Z"),"user-centric",73238,"payment Soft","Congolese Franc synthesizing Web",new Date("2018-09-06T17:33:20.069Z"),{_id: 12694,str: "bus",num: 1383,date: new Date("2018-09-06T01:58:29.459Z"),obj: {_id: 12695,str: "hybrid Sleek Frozen Fish navigate",array: ["Cotton needs-based directional",[]],obj: {}}},new Date("2018-09-06T10:15:40.612Z"),4412]});
    },

    function(coll) {
        return coll.insert({_id: 12696,str: "open-source Kyrgyz Republic",num: 36492,date: new Date("2018-09-06T15:40:04.935Z"),array: [new Date("2018-09-06T18:47:02.765Z"),[],"Gorgeous Soft Chips orchestration",4624,"B2C",{_id: 12697,num: 8594,date: new Date("2018-09-06T02:02:30.795Z"),obj: {}},new Date("2018-09-06T01:22:30.624Z"),24834,[{_id: 12698,str: "Supervisor utilize",date: new Date("2018-09-06T07:12:01.023Z"),array: [{_id: 12699,str: "virtual circuit plum",num: 93468,date: new Date("2018-09-06T16:42:21.513Z"),array: []}],obj: {}},72224],77305,"Books Sports Product",new Date("2018-09-06T17:39:24.132Z"),new Date("2018-09-05T22:31:29.750Z")],obj: {_id: 12700,num: 2336,obj: {_id: 12701,str: "Iowa",num: 40280,date: new Date("2018-09-05T23:53:07.004Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12702,str: "bluetooth Sao Tome and Principe",num: 1518,date: new Date("2018-09-06T08:04:17.149Z"),array: [new Date("2018-09-06T04:55:04.932Z"),71813,69392,"Forward action-items virtual",31574,{_id: 12703,str: "primary Eritrea",num: 43051,date: new Date("2018-09-06T01:26:17.144Z"),array: [new Date("2018-09-06T12:13:29.088Z")],obj: {}},"Automotive Massachusetts haptic",4388,new Date("2018-09-06T15:55:44.220Z"),new Date("2018-09-06T11:56:33.435Z"),[],[],new Date("2018-09-06T00:02:59.114Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12704,str: "system-worthy Avon",num: 15561,date: new Date("2018-09-05T20:06:16.127Z"),array: [new Date("2018-09-06T14:08:14.155Z"),19990,"XML",[],27911,new Date("2018-09-06T17:17:05.518Z"),new Date("2018-09-06T08:10:08.315Z"),{_id: 12705,str: "payment",date: new Date("2018-09-06T10:56:53.275Z"),array: [],obj: {}},new Date("2018-09-06T04:46:04.921Z"),new Date("2018-09-06T18:14:03.688Z"),"Venezuela",7904],obj: {_id: 12706,str: "solid state",num: 71215,date: new Date("2018-09-06T02:15:44.036Z"),array: ["Argentina calculating",{_id: 12707,str: "Guarani deploy uniform",num: 43777,date: new Date("2018-09-06T05:22:34.062Z"),array: [],obj: {}},"Home Loan Account relationships",45778],obj: {_id: 12708,str: "Factors Ports",num: 19074}}});
    },

    function(coll) {
        return coll.insert({_id: 12709,str: "synergy PCI Refined Wooden Chair",num: 20927,date: new Date("2018-09-06T01:59:54.560Z"),array: ["Bacon Profound","Devolved multi-byte",[new Date("2018-09-06T13:11:11.827Z")],{_id: 12710,str: "index Cross-group",num: 21466,date: new Date("2018-09-06T04:20:11.797Z"),array: ["copying payment",new Date("2018-09-06T13:06:23.001Z"),"e-services",40894,78531],obj: {_id: 12711,str: "alarm Brazilian Real",num: 93908,date: new Date("2018-09-05T23:07:01.452Z"),array: [{_id: 12712,str: "FTP Wallis and Futuna",num: 42471,obj: {_id: 12713,date: new Date("2018-09-06T01:48:32.509Z"),array: [],obj: {}}}]}},29854,93288,[],new Date("2018-09-06T10:55:43.914Z"),new Date("2018-09-06T05:42:38.495Z"),"hybrid channels Drives",91998],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12714,num: 60680,date: new Date("2018-09-06T19:03:33.236Z"),array: [57952,"fault-tolerant optimize Ergonomic","Intelligent Granite Car",new Date("2018-09-06T11:58:57.305Z"),new Date("2018-09-06T12:54:06.793Z"),{_id: 12715,str: "open-source Granite Exclusive",num: 22330,date: new Date("2018-09-06T03:41:24.838Z"),array: [],obj: {}},"deposit feed Checking Account",48531,94530,new Date("2018-09-05T20:14:43.144Z"),new Date("2018-09-06T14:00:31.122Z")],obj: {_id: 12716,num: 43876,date: new Date("2018-09-06T10:38:04.496Z"),array: [new Date("2018-09-06T06:50:02.656Z")],obj: {_id: 12717,str: "reciprocal",num: 76139,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12718,str: "Kansas",num: 47358,array: [50444,new Date("2018-09-06T18:33:46.939Z"),[new Date("2018-09-06T19:06:26.744Z"),"Rustic Surinam Dollar","Internal"],"Research Brand Soap",{_id: 12719,str: "Berkshire e-markets exploit",date: new Date("2018-09-06T18:16:10.052Z"),array: [],obj: {_id: 12720,str: "SQL Optional",num: 97013,date: new Date("2018-09-06T05:31:08.140Z"),array: [],obj: {}}},96018,new Date("2018-09-06T04:36:52.343Z"),79868,"recontextualize Group Refined Fresh Table",{_id: 12721,num: 15859,date: new Date("2018-09-06T11:44:44.752Z")},new Date("2018-09-06T14:27:22.809Z")],obj: {_id: 12722,num: 8322,date: new Date("2018-09-06T00:08:28.040Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12723,str: "driver Cloned Legacy",num: 73665,date: new Date("2018-09-06T14:50:09.157Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12724,str: "indexing Salad",num: 83236,date: new Date("2018-09-06T02:46:22.832Z"),obj: {_id: 12725,num: 70959,date: new Date("2018-09-06T01:28:19.065Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12726,str: "Practical Soft Bacon Avon Plastic",num: 82872,date: new Date("2018-09-06T16:26:18.777Z"),array: [10814,"Licensed Steel Sausages",new Date("2018-09-06T04:00:10.590Z"),{_id: 12727,str: "Jewelery Home Loan Account",num: 16354,array: [],obj: {_id: 12728,str: "Virtual",num: 40801,date: new Date("2018-09-06T10:44:58.431Z"),array: [91463,new Date("2018-09-06T11:38:23.125Z")]}},85772,"generate Administrator",new Date("2018-09-06T11:11:50.486Z"),"Legacy Bacon Games","panel Auto Loan Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12729,str: "solid state",num: 792,date: new Date("2018-09-06T10:46:09.689Z"),array: [new Date("2018-09-06T02:05:10.419Z"),new Date("2018-09-06T08:39:23.276Z"),8664,6679,["Berkshire",7262,new Date("2018-09-06T06:13:56.377Z"),"payment"],{_id: 12730,num: 657,date: new Date("2018-09-06T12:33:26.301Z"),array: [[],"aggregate bi-directional Persevering"],obj: {}},{_id: 12731,str: "Point Chair navigating",num: 79417,date: new Date("2018-09-06T05:40:09.608Z"),obj: {_id: 12732,str: "Metal Berkshire program"}},96765,"Solutions Strategist circuit","Intelligent Rubber Tuna Generic Wooden Chips Licensed"],obj: {_id: 12733,str: "Vermont",num: 22995,date: new Date("2018-09-06T19:31:02.645Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12734,str: "Cuban Peso Peso Convertible pink",num: 49096,date: new Date("2018-09-05T22:45:11.596Z"),array: [],obj: {_id: 12735,str: "Accountability Falls",num: 41381,date: new Date("2018-09-06T13:55:18.458Z"),array: [[],"Chips budgetary management",62332,84846,{_id: 12736,str: "FTP monitor payment",num: 83350,array: ["salmon","hard drive navigate"]},99391,new Date("2018-09-05T21:10:59.940Z"),new Date("2018-09-06T18:58:23.585Z"),53355,new Date("2018-09-06T00:28:03.783Z"),[{_id: 12737,str: "cultivate copying attitude",num: 47191,date: new Date("2018-09-06T11:10:34.023Z"),array: [],obj: {}},new Date("2018-09-06T13:55:00.911Z"),new Date("2018-09-06T02:48:55.609Z"),58014]],obj: {_id: 12738,str: "orchid Innovative Architect",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 12739,str: "framework",num: 36149,date: new Date("2018-09-06T17:00:11.631Z"),array: [new Date("2018-09-06T13:24:04.224Z"),"bypass",34831,new Date("2018-09-06T17:30:11.840Z"),new Date("2018-09-06T18:39:38.265Z"),new Date("2018-09-06T09:46:06.411Z"),"4th generation utilize Berkshire",10572,"Accounts Danish Krone portals",new Date("2018-09-06T06:39:27.446Z"),"Views Ridges",{_id: 12740,str: "Analyst Computers overriding",num: 87435,date: new Date("2018-09-06T02:29:35.305Z"),array: [51088],obj: {}},{_id: 12741,str: "Unbranded Concrete Bacon Lead Metal",obj: {_id: 12742,str: "Bedfordshire overriding experiences",num: 78113,date: new Date("2018-09-06T10:32:07.189Z"),array: [],obj: {}}},11584]});
    },

    function(coll) {
        return coll.insert({_id: 12743,str: "envisioneer Home Loan Account Practical Granite Towels",num: 98030,date: new Date("2018-09-06T14:07:13.465Z"),array: [{_id: 12744,str: "Adaptive",num: 31409,date: new Date("2018-09-06T14:05:01.555Z"),array: [],obj: {}},81941,96438,8180,new Date("2018-09-06T07:39:37.272Z"),"Assimilated Electronics Texas","Representative",new Date("2018-09-06T11:07:50.501Z"),[new Date("2018-09-06T06:38:16.015Z"),"silver interface",new Date("2018-09-06T11:48:46.959Z")],"Concrete Intuitive",new Date("2018-09-06T04:45:21.534Z")],obj: {_id: 12745,str: "Self-enabling Bangladesh",num: 52605,date: new Date("2018-09-06T06:31:49.883Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12746,str: "RAM SDR",num: 11621,date: new Date("2018-09-06T01:50:40.697Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12747,str: "bandwidth redundant",num: 89166,date: new Date("2018-09-06T13:42:01.782Z"),array: [81597,"mint green microchip online",new Date("2018-09-06T01:22:07.785Z"),83461,new Date("2018-09-06T13:45:23.271Z"),"moratorium",new Date("2018-09-05T19:56:11.423Z"),"Business-focused",[],67826,["demand-driven",[],25611],77210],obj: {_id: 12748,str: "envisioneer",num: 89590,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12749,str: "Intelligent Plastic Hat invoice",num: 67849,date: new Date("2018-09-06T19:38:21.225Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12750,num: 22471,date: new Date("2018-09-06T12:48:19.176Z"),array: [[],new Date("2018-09-06T11:45:35.310Z"),5506,"deposit Customer secured line","hack",new Date("2018-09-05T22:07:36.254Z"),new Date("2018-09-06T18:32:07.998Z"),65602,{_id: 12751,str: "Data Ergonomic",num: 18116,date: new Date("2018-09-06T14:18:06.033Z"),obj: {}},"Czech Koruna",54712],obj: {_id: 12752,str: "back-end Optimization",num: 85919,date: new Date("2018-09-06T19:13:59.888Z"),array: [],obj: {_id: 12753,str: "Principal maximized EXE",num: 73721,date: new Date("2018-09-06T12:04:49.643Z"),array: ["Investor withdrawal",[],"Ireland payment",{_id: 12754,str: "Gibraltar Pound Quetzal"}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12755,str: "architectures Strategist neural",num: 88473,date: new Date("2018-09-05T21:47:09.719Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 12756,str: "deposit invoice system engine",num: 27285,date: new Date("2018-09-06T19:40:53.330Z"),array: [26994,"haptic California",50812,{_id: 12757,str: "Mouse parsing",num: 59069,date: new Date("2018-09-05T20:17:28.355Z"),array: [],obj: {_id: 12758,date: new Date("2018-09-06T10:17:51.866Z"),obj: {}}},new Date("2018-09-05T22:00:15.665Z"),"Metal European Unit of Account 9(E.U.A.-9)",1732,new Date("2018-09-05T22:41:30.982Z"),[52759,"multi-byte",38779,"National",[]],new Date("2018-09-06T11:26:58.495Z"),new Date("2018-09-06T01:26:31.227Z")],obj: {_id: 12759,str: "auxiliary 5th generation Assurance",num: 59124,date: new Date("2018-09-05T23:24:04.559Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12760,str: "internet solution",num: 43979,date: new Date("2018-09-06T13:06:40.726Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12761,str: "Handmade redundant",num: 13547,date: new Date("2018-09-06T14:06:00.811Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12762,str: "hacking",num: 46847,date: new Date("2018-09-06T11:23:04.852Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12763,str: "driver",date: new Date("2018-09-06T15:45:16.124Z"),array: [38266,"Handmade Soft Fish Streamlined Cliff",[],15620,{_id: 12764,str: "Money Market Account Bedfordshire",num: 78370,date: new Date("2018-09-06T03:58:00.239Z"),array: [new Date("2018-09-06T10:24:17.317Z"),1598,28326,"Money Market Account Steel","Lari"],obj: {_id: 12765,num: 49535,date: new Date("2018-09-06T05:08:23.806Z"),obj: {}}},{_id: 12766,str: "payment",array: [],obj: {_id: 12767,str: "payment compressing",date: new Date("2018-09-06T19:05:59.065Z"),array: [[new Date("2018-09-06T11:44:31.015Z"),new Date("2018-09-06T01:14:45.066Z")]]}},{_id: 12768,num: 2259,date: new Date("2018-09-06T02:10:42.603Z"),array: [],obj: {}},51223,84964,"Universal Oregon","e-business unleash haptic","Rand Namibia Dollar"],obj: {_id: 12769,num: 2100,date: new Date("2018-09-06T18:35:37.880Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12770,str: "Program",num: 23466,date: new Date("2018-09-06T15:00:48.002Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12771,str: "Kyrgyz Republic Cotton fuchsia",num: 43190,array: ["protocol",23998,new Date("2018-09-06T01:42:24.925Z"),new Date("2018-09-06T00:36:40.081Z"),"Robust",{_id: 12772,str: "withdrawal Row hack",num: 11585,date: new Date("2018-09-06T07:12:26.828Z"),array: [],obj: {}},14538,{_id: 12773,str: "deposit",num: 73472,date: new Date("2018-09-06T11:55:46.005Z"),array: [],obj: {_id: 12774,str: "Granite",num: 69275,date: new Date("2018-09-06T03:14:53.306Z"),obj: {_id: 12775,num: 87,date: new Date("2018-09-05T22:10:11.358Z"),array: [["Nebraska indexing Toys",60725,"mindshare"]]}}},"Massachusetts Small",new Date("2018-09-06T03:27:51.286Z"),new Date("2018-09-06T06:51:15.490Z"),{_id: 12776,str: "Metal innovative bluetooth",num: 8382,date: new Date("2018-09-06T16:13:04.064Z"),array: []},67605],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12777,str: "FTP",num: 28115,date: new Date("2018-09-06T18:24:33.260Z"),array: [],obj: {_id: 12778,str: "Licensed",date: new Date("2018-09-05T23:50:16.506Z"),array: ["Front-line","Bacon","Interactions initiatives encompassing",15026,new Date("2018-09-06T07:50:48.352Z"),70767],obj: {_id: 12779,num: 21106,date: new Date("2018-09-06T05:33:37.684Z"),array: [59698,"National card Future",{_id: 12780,str: "open system calculate ROI",num: 19582,date: new Date("2018-09-06T01:54:08.285Z"),obj: {}},new Date("2018-09-06T17:44:05.303Z"),new Date("2018-09-06T06:43:05.757Z"),[],[],46177,new Date("2018-09-06T16:55:46.220Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 12781,str: "zero tolerance Granite Customer-focused",num: 59768,date: new Date("2018-09-06T13:35:06.608Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12782,str: "transmitter",num: 21997,date: new Date("2018-09-06T04:37:40.005Z"),array: [new Date("2018-09-06T13:38:52.199Z"),"Toys",{_id: 12783,str: "Buckinghamshire Global",num: 23906,date: new Date("2018-09-06T00:08:29.169Z"),array: ["Exclusive digital",12983,[new Date("2018-09-05T20:47:29.011Z"),43841,new Date("2018-09-06T15:26:20.060Z")],10524],obj: {}},new Date("2018-09-06T07:23:19.813Z"),"Credit Card Account Fantastic",["index Chips Ford"],new Date("2018-09-06T02:03:47.013Z"),"Home Loan Account superstructure",[],79001,21994]});
    },

    function(coll) {
        return coll.insert({_id: 12784,str: "Outdoors",num: 19095,date: new Date("2018-09-06T19:24:45.178Z"),array: [],obj: {_id: 12785,str: "Associate National",num: 39567,date: new Date("2018-09-06T19:03:11.229Z"),array: [68791,35736,new Date("2018-09-06T19:28:46.624Z"),[],88916,new Date("2018-09-06T02:04:24.646Z"),"Gorgeous Wooden Shoes",[],"Managed indexing virtual",new Date("2018-09-06T10:55:58.884Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 12786,str: "alarm Auto Loan Account",date: new Date("2018-09-05T23:28:54.487Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12787,str: "port",num: 30375,date: new Date("2018-09-06T10:28:00.956Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12788,str: "New Mexico",num: 66690,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12789,str: "distributed Refined",num: 69375,date: new Date("2018-09-06T06:55:19.850Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12790,str: "Cote d'Ivoire Executive Granite",num: 8441,date: new Date("2018-09-06T06:20:39.349Z"),array: [72791,"Licensed Rubber Chair","El Salvador Colon US Dollar","Rustic",new Date("2018-09-06T11:49:48.261Z"),new Date("2018-09-05T21:47:31.058Z"),99134,{_id: 12791,str: "salmon Savings Account Handcrafted Fresh Cheese",num: 96400,date: new Date("2018-09-06T15:17:52.211Z"),obj: {_id: 12792,str: "heuristic Plaza",num: 6381,date: new Date("2018-09-06T07:24:58.486Z"),array: [],obj: {}}},new Date("2018-09-06T09:56:13.902Z")],obj: {_id: 12793,str: "Burkina Faso port Berkshire",date: new Date("2018-09-06T12:57:53.602Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12794,str: "EXE neural Germany",num: 74452,date: new Date("2018-09-05T23:48:28.207Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 12795,str: "Networked vertical input",num: 51121,date: new Date("2018-09-06T07:19:15.401Z"),array: [4571,new Date("2018-09-06T14:41:16.056Z"),"IB",82310,[],"brand transparent SAS",{_id: 12796,str: "reboot",date: new Date("2018-09-06T12:46:37.739Z"),array: [],obj: {_id: 12797,num: 61715,date: new Date("2018-09-05T21:08:00.840Z"),array: [new Date("2018-09-06T12:23:36.054Z")],obj: {_id: 12798,num: 55251,array: [],obj: {}}}},new Date("2018-09-06T09:05:09.006Z")],obj: {_id: 12799,str: "Maryland payment",num: 28756,date: new Date("2018-09-05T20:33:29.595Z")}});
    },

    function(coll) {
        return coll.insert({_id: 12800,str: "Accountability",num: 30109,date: new Date("2018-09-05T23:41:22.200Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12801,str: "CSS Security",num: 96048,date: new Date("2018-09-06T12:51:14.292Z"),array: [90028,new Date("2018-09-06T09:55:13.998Z"),"Plastic implement",{_id: 12802,str: "intranet Agent",date: new Date("2018-09-06T08:29:35.774Z"),array: []},[new Date("2018-09-06T03:56:55.170Z")],"Valley productize",[],61299,new Date("2018-09-06T01:29:27.408Z"),19506,[{_id: 12803,str: "neural Analyst",num: 55408,date: new Date("2018-09-05T22:47:32.024Z"),array: [],obj: {_id: 12804,num: 53579,array: [],obj: {}}}],"Iowa multi-byte","Intelligent",10698,new Date("2018-09-06T14:39:17.445Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12805,str: "asynchronous",num: 11893,date: new Date("2018-09-06T02:38:44.983Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12806,str: "Via",num: 89269,date: new Date("2018-09-06T14:14:53.604Z"),array: [81509,"Savings Account maroon",98734,new Date("2018-09-05T22:20:31.811Z"),"Gourde US Dollar","whiteboard",{_id: 12807,num: 77841,date: new Date("2018-09-06T06:31:47.608Z"),array: []},43705,[3608,[],new Date("2018-09-06T17:02:36.719Z"),"sticky"],{_id: 12808,str: "Small Fresh Towels Wooden deposit",num: 77875,date: new Date("2018-09-06T00:41:31.505Z"),array: [new Date("2018-09-06T02:51:30.992Z")],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 12809,str: "unleash Missouri",num: 57904,date: new Date("2018-09-06T13:22:23.815Z"),array: ["stable",93751,[],{_id: 12810,str: "background Graphical User Interface Cambridgeshire",num: 43661,date: new Date("2018-09-06T10:44:25.139Z"),array: [],obj: {}},"Bacon",94052,{_id: 12811,str: "Sleek infrastructure paradigm",num: 5881,date: new Date("2018-09-06T17:29:25.670Z"),obj: {_id: 12812,date: new Date("2018-09-06T12:20:03.006Z"),array: [new Date("2018-09-06T11:14:43.488Z")],obj: {}}},"Triple-buffered","harness","Baby partnerships",84587,new Date("2018-09-05T22:27:53.866Z"),new Date("2018-09-06T04:40:20.189Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12813,str: "end-to-end",num: 81040,date: new Date("2018-09-06T08:06:24.229Z"),array: [],obj: {_id: 12814,str: "Bedfordshire Congo Fundamental",date: new Date("2018-09-06T07:21:08.213Z"),array: [73510,new Date("2018-09-06T16:47:39.823Z"),"logistical",new Date("2018-09-06T18:40:50.667Z"),[new Date("2018-09-06T00:15:42.691Z"),"Money Market Account Credit Card Account","synthesize",new Date("2018-09-05T23:25:00.061Z"),[46621],new Date("2018-09-06T01:35:05.633Z"),65895],new Date("2018-09-06T05:13:44.375Z"),"Fantastic reintermediate Associate",{_id: 12815,str: "Rwanda Franc",num: 15148,array: [68203],obj: {}},"innovative","El Salvador",{_id: 12816,num: 78896,date: new Date("2018-09-06T14:39:39.323Z"),array: [],obj: {}}],obj: {_id: 12817,str: "Sausages extranet",num: 68649,date: new Date("2018-09-06T14:26:45.988Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 12818,str: "District well-modulated",num: 50921,date: new Date("2018-09-05T20:00:14.700Z"),obj: {_id: 12819,str: "Handcrafted Oregon attitude-oriented",num: 60185,date: new Date("2018-09-06T16:31:57.828Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12820,num: 3640,date: new Date("2018-09-05T23:17:08.752Z"),array: ["seize Alabama Investment Account","Wooden calculate",{_id: 12821,str: "Benin UIC-Franc index",array: [new Date("2018-09-06T19:14:18.170Z")]},18408,new Date("2018-09-06T15:34:35.043Z"),"Producer",new Date("2018-09-06T01:55:48.602Z"),new Date("2018-09-06T19:45:25.351Z"),50165,{_id: 12822,str: "Lead",num: 29651,date: new Date("2018-09-06T16:55:34.295Z"),array: [[],[],15235],obj: {}},4713,41304,{_id: 12823,str: "generating Cheese directional",num: 91692,date: new Date("2018-09-06T08:51:57.200Z"),array: [],obj: {}},"Global"],obj: {_id: 12824,str: "Chad payment",num: 92559,date: new Date("2018-09-06T16:37:25.933Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12825,str: "Baby",num: 24493,date: new Date("2018-09-06T07:54:19.657Z"),array: [23724,new Date("2018-09-06T07:26:29.290Z"),new Date("2018-09-06T00:03:52.340Z"),"AI Credit Card Account",new Date("2018-09-06T03:48:50.589Z"),17891,"compress solid state Viaduct",[],"back up"],obj: {_id: 12826,str: "Dynamic",num: 95062,date: new Date("2018-09-06T08:26:30.930Z"),array: [22470,{_id: 12827,str: "concept Gorgeous",date: new Date("2018-09-06T14:58:51.749Z")},{_id: 12828,num: 71509,array: [["Clothing",new Date("2018-09-05T23:24:47.775Z"),new Date("2018-09-06T16:45:29.209Z"),[],new Date("2018-09-06T16:23:20.343Z")],{_id: 12829,num: 55464,date: new Date("2018-09-06T03:01:25.787Z"),array: [],obj: {}}],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 12830,str: "users Light",num: 51293,date: new Date("2018-09-06T12:00:26.795Z"),array: [[45726],30211,new Date("2018-09-06T19:37:13.602Z"),"hardware Direct",new Date("2018-09-06T06:36:20.654Z"),new Date("2018-09-06T09:32:05.730Z"),[],{_id: 12831,str: "Buckinghamshire",num: 46840,date: new Date("2018-09-06T16:21:14.389Z"),obj: {_id: 12832,str: "benchmark interfaces",num: 85627,date: new Date("2018-09-06T14:37:54.279Z"),array: [],obj: {}}},"schemas global","Awesome Metal Shoes",21898]});
    },

    function(coll) {
        return coll.insert({_id: 12833,num: 59099,date: new Date("2018-09-06T01:14:39.280Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 12834,str: "International deposit",num: 16419,date: new Date("2018-09-06T19:32:41.011Z"),array: ["synthesize Ford open-source",new Date("2018-09-06T05:17:31.393Z"),"Rustic","pixel Jewelery",46242,{_id: 12835,str: "revolutionize withdrawal Devolved",date: new Date("2018-09-06T08:20:03.767Z"),array: [],obj: {}},"bottom-line",[],5442,new Date("2018-09-05T21:26:37.387Z"),23615,[{_id: 12836,str: "Paraguay",num: 5186,date: new Date("2018-09-06T06:03:54.200Z"),array: [[],{_id: 12837,str: "Bacon Lithuanian Litas plug-and-play",num: 80259,date: new Date("2018-09-06T05:52:05.513Z"),array: [],obj: {_id: 12838,str: "XML New Taiwan Dollar Cheese",num: 10012,array: ["Automated"],obj: {_id: 12839,str: "Falls Home",num: 49090,date: new Date("2018-09-06T19:22:43.329Z"),array: [],obj: {_id: 12840,date: new Date("2018-09-06T07:54:48.774Z")}}}},new Date("2018-09-05T20:27:51.276Z"),"Global pink"],obj: {}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12841,str: "payment cross-platform",num: 36775,date: new Date("2018-09-06T17:24:52.793Z"),array: [],obj: {_id: 12842,str: "Synchronised Tasty Granite Car Architect",date: new Date("2018-09-06T00:26:33.834Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12843,str: "Brand compressing connect",num: 75909,date: new Date("2018-09-05T21:12:53.643Z"),array: [],obj: {_id: 12844,str: "SMTP connect",num: 57645,date: new Date("2018-09-06T07:18:25.814Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12845,str: "Licensed Home Loan Account",num: 24028,date: new Date("2018-09-06T09:11:49.251Z"),array: [62097,92768,new Date("2018-09-06T04:30:05.663Z"),"unleash",new Date("2018-09-06T02:58:58.190Z"),"firewall fuchsia",33243,new Date("2018-09-05T23:01:04.910Z"),[new Date("2018-09-06T06:08:04.690Z")],new Date("2018-09-06T05:17:58.719Z"),"deposit",[],new Date("2018-09-06T12:49:19.727Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12846,str: "Small Soft Fish hack",num: 81864,date: new Date("2018-09-06T04:01:20.326Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12847,str: "THX",num: 80751,date: new Date("2018-09-05T22:39:33.362Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12848,str: "SQL Savings Account",num: 89938,date: new Date("2018-09-06T13:53:34.605Z"),array: [],obj: {_id: 12849,str: "Wooden payment orange",num: 2848,date: new Date("2018-09-06T15:32:05.132Z"),array: [94429,28058,new Date("2018-09-06T00:21:53.379Z"),"open-source",new Date("2018-09-05T22:34:44.876Z"),"Intelligent iterate","Ball",[new Date("2018-09-06T07:58:20.924Z"),"black synthesize gold",new Date("2018-09-06T11:02:56.001Z")],27606,new Date("2018-09-06T06:22:21.190Z"),"Checking Account bypassing connect",[]],obj: {_id: 12850,num: 62473,date: new Date("2018-09-06T08:42:58.432Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12851,str: "tangible",num: 15192,date: new Date("2018-09-05T23:38:08.212Z"),array: [],obj: {_id: 12852,str: "Virginia",num: 94059,date: new Date("2018-09-06T12:48:23.454Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12853,str: "Future",num: 46693,date: new Date("2018-09-06T12:46:54.270Z"),array: [47645,new Date("2018-09-06T13:55:39.407Z"),1246,78606,new Date("2018-09-06T11:37:47.311Z"),74474,new Date("2018-09-06T12:52:01.728Z"),"Movies Directives",{_id: 12854,str: "Operations Bahrain",num: 14803,date: new Date("2018-09-05T20:20:30.197Z"),obj: {}},"indexing deposit analyzing","Clothing New Mexico redundant",{_id: 12855,str: "Networked Tuna",num: 73939,date: new Date("2018-09-06T17:00:59.201Z"),array: [],obj: {_id: 12856,str: "RAM Extensions"}},17844],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12857,str: "Central driver channels",num: 15416,array: [{_id: 12858,str: "bandwidth invoice",num: 43296,date: new Date("2018-09-06T00:38:36.492Z"),array: [],obj: {_id: 12859,str: "sensor Checking Account",date: new Date("2018-09-06T19:17:11.072Z"),obj: {_id: 12860,num: 29999,date: new Date("2018-09-05T22:47:38.203Z"),array: [],obj: {}}}},new Date("2018-09-06T07:53:02.120Z"),"Investor invoice",new Date("2018-09-06T09:55:10.178Z"),new Date("2018-09-06T06:46:37.307Z"),84033,"Fantastic Rubber Shirt",82727,new Date("2018-09-06T15:32:03.696Z"),82826,{_id: 12861,str: "Fish",num: 65047,date: new Date("2018-09-05T21:17:10.364Z"),array: [{_id: 12862,str: "Concrete",num: 42394,array: [],obj: {}}]},"Frozen"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12863,str: "deposit Dominica digital",num: 37015,date: new Date("2018-09-06T04:07:07.140Z"),array: ["Ball Nevada fault-tolerant",[],new Date("2018-09-05T21:15:01.157Z"),new Date("2018-09-06T11:00:59.017Z"),52890,34627,"South Georgia and the South Sandwich Islands",[],{_id: 12864,str: "feed",date: new Date("2018-09-05T22:42:33.433Z"),array: ["Forges Cambridgeshire",new Date("2018-09-06T11:48:24.482Z"),"redundant"],obj: {}},{_id: 12865,str: "XSS",num: 91209,array: [],obj: {_id: 12866,num: 23673,date: new Date("2018-09-06T10:31:45.352Z")}},{_id: 12867,str: "archive GB CFA Franc BEAC",num: 10851},[new Date("2018-09-06T02:27:49.348Z"),[34252,95048],new Date("2018-09-06T04:08:23.208Z")]],obj: {_id: 12868,num: 21714,date: new Date("2018-09-05T22:15:06.860Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12869,str: "invoice Cambridgeshire Granite",num: 36104,date: new Date("2018-09-06T18:19:42.887Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12870,str: "Cheese utilize",num: 16727,date: new Date("2018-09-06T03:28:50.635Z"),array: [new Date("2018-09-05T21:46:54.899Z"),"Concrete","moderator","Small",98565,84476,"eyeballs",new Date("2018-09-06T18:46:39.473Z"),{_id: 12871,str: "client-driven Cambridgeshire",num: 67588,date: new Date("2018-09-06T07:06:44.563Z"),obj: {_id: 12872,str: "Officer Pa'anga framework",num: 41617,date: new Date("2018-09-06T13:29:32.514Z"),array: [],obj: {}}},71926,["Savings Account payment Intelligent Frozen Towels",new Date("2018-09-06T09:16:31.711Z")],[20105,{_id: 12873,num: 62714,array: [],obj: {}}]],obj: {_id: 12874,date: new Date("2018-09-06T06:09:54.055Z"),array: [new Date("2018-09-05T21:37:41.732Z"),"Kuwait Ergonomic deposit"],obj: {_id: 12875,str: "extend program",num: 90007}}});
    },

    function(coll) {
        return coll.insert({_id: 12876,str: "Plastic",date: new Date("2018-09-06T06:48:00.071Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12877,str: "Persistent interfaces",date: new Date("2018-09-06T08:29:33.049Z"),array: ["Fish visualize invoice",new Date("2018-09-06T17:44:27.149Z"),28092,{_id: 12878,str: "Avon withdrawal",num: 63606,date: new Date("2018-09-06T17:19:18.084Z"),array: [],obj: {}},"Central Auto Loan Account",56909,new Date("2018-09-06T04:35:45.969Z"),new Date("2018-09-05T23:38:53.850Z"),{_id: 12879,num: 70375,date: new Date("2018-09-06T15:04:59.311Z"),array: [],obj: {_id: 12880,str: "UIC-Franc",num: 45385,array: [new Date("2018-09-06T03:42:32.110Z"),["Executive forecast invoice","Dynamic",41570],"Avon JSON",new Date("2018-09-06T13:44:28.718Z"),75305,[{_id: 12881,str: "firewall transmitting directional",date: new Date("2018-09-06T02:00:39.114Z"),array: []}]],obj: {_id: 12882,str: "Union Unbranded",num: 51783,date: new Date("2018-09-06T02:53:21.876Z"),obj: {_id: 12883,str: "Tactics UAE Dirham",date: new Date("2018-09-06T00:45:27.256Z")}}}},31517]});
    },

    function(coll) {
        return coll.insert({_id: 12884,str: "strategic Concrete",num: 1538,date: new Date("2018-09-06T10:04:39.610Z"),array: [],obj: {_id: 12885,str: "Operations gold brand",date: new Date("2018-09-06T00:04:54.837Z"),array: [57827,{_id: 12886,str: "Computers Central",num: 43693,date: new Date("2018-09-06T14:47:16.307Z"),array: [],obj: {}},new Date("2018-09-06T17:36:26.828Z"),new Date("2018-09-06T06:39:27.173Z"),"Enterprise-wide compressing",new Date("2018-09-06T13:02:43.280Z"),"markets",90940,"Credit Card Account","function Personal Loan Account","viral communities"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12887,str: "synthesize alarm",num: 84325,array: ["Generic Internal payment",new Date("2018-09-06T16:23:16.810Z"),7043,["magenta JSON",65153,97439,"Bedfordshire Angola empower",new Date("2018-09-06T02:21:46.734Z")],new Date("2018-09-06T13:32:46.377Z"),new Date("2018-09-06T09:24:50.913Z"),[],{_id: 12888,str: "Unbranded wireless Money Market Account",date: new Date("2018-09-06T08:46:38.777Z"),array: [],obj: {}},"Colorado",[]],obj: {_id: 12889,num: 83612,date: new Date("2018-09-06T10:19:11.404Z"),array: [7841,new Date("2018-09-06T08:55:32.824Z")],obj: {_id: 12890,str: "Proactive",num: 51502,array: [{_id: 12891,num: 79175,date: new Date("2018-09-06T05:19:32.095Z"),array: [],obj: {_id: 12892,str: "Chief Handmade Fresh Car supply-chains",date: new Date("2018-09-06T15:37:58.706Z")}},57559]}}});
    },

    function(coll) {
        return coll.insert({_id: 12893,str: "Progressive utilisation XML",num: 12276,date: new Date("2018-09-06T05:41:06.859Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12894,str: "structure Refined Wooden Ball e-commerce",num: 72452,array: [new Date("2018-09-06T06:20:45.844Z"),"wireless Avon",53263,37965,"International",new Date("2018-09-05T21:02:56.963Z"),40052,new Date("2018-09-06T05:57:57.692Z"),new Date("2018-09-06T15:32:19.484Z"),78715,"payment throughput",{_id: 12895,str: "Vista Movies",num: 91884,date: new Date("2018-09-05T22:20:36.231Z"),array: [],obj: {_id: 12896,str: "Intelligent Fresh Fish Garden",date: new Date("2018-09-06T06:42:12.123Z"),array: []}},"Frozen fresh-thinking"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12897,str: "Afghanistan Supervisor silver",num: 10312,date: new Date("2018-09-06T12:28:11.890Z"),array: [],obj: {_id: 12898,str: "Practical Cotton Bike",date: new Date("2018-09-05T22:06:40.523Z"),array: ["Generic","Music",["open-source",53055,22035,"silver"],new Date("2018-09-06T06:40:29.053Z"),{_id: 12899,str: "input invoice",num: 28529,obj: {}},56773,"Digitized Home Loan Account",new Date("2018-09-06T00:04:42.702Z"),[new Date("2018-09-06T04:44:40.195Z"),[]],{_id: 12900,num: 30600,date: new Date("2018-09-06T01:12:15.269Z"),array: [],obj: {_id: 12901,str: "Alabama",date: new Date("2018-09-06T08:31:14.957Z"),obj: {}}},new Date("2018-09-06T06:01:45.386Z"),8188],obj: {_id: 12902,date: new Date("2018-09-06T12:21:21.124Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 12903,str: "indexing Wisconsin Illinois",num: 30346,date: new Date("2018-09-06T06:37:27.482Z"),array: [70815,new Date("2018-09-06T05:04:03.075Z"),"Quality coherent Bacon",86631,94894,[],"Intuitive repurpose",{_id: 12904,str: "Grocery Rustic",num: 47793,date: new Date("2018-09-06T03:35:46.480Z"),obj: {}},"application virtual"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12905,str: "tan Wooden systems",date: new Date("2018-09-06T05:12:34.034Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12906,str: "value-added",num: 95932,date: new Date("2018-09-06T01:34:28.070Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12907,str: "focus group Personal Loan Account Intelligent",num: 86077,date: new Date("2018-09-06T00:49:12.054Z"),array: ["Handcrafted payment",18002,new Date("2018-09-05T20:23:18.118Z"),new Date("2018-09-06T05:01:26.263Z"),{_id: 12908,str: "fault-tolerant Tennessee Sleek",num: 37776,date: new Date("2018-09-06T10:07:14.010Z"),array: []},"generating Quality models",[new Date("2018-09-05T21:00:36.962Z"),"Baby programming fuchsia"],new Date("2018-09-05T21:36:31.993Z"),59740,32360,[],"Analyst Checking Account invoice"],obj: {_id: 12909,str: "Refined Fresh Fish Dynamic Money Market Account",num: 97133,array: [[]],obj: {_id: 12910,num: 68827,date: new Date("2018-09-06T18:51:31.890Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12911,str: "convergence",num: 93407,date: new Date("2018-09-05T21:06:52.629Z"),array: [99371,new Date("2018-09-06T04:06:17.922Z"),"Metal New Leu",48564,new Date("2018-09-06T12:58:05.617Z"),new Date("2018-09-06T00:57:48.000Z"),"Delaware",[],"transform override",{_id: 12912,str: "Representative quantify",num: 52920,date: new Date("2018-09-06T04:19:20.118Z"),array: [97680,{_id: 12913,str: "ROI iterate",num: 71940,date: new Date("2018-09-06T18:32:53.047Z"),array: [],obj: {_id: 12914,str: "bypassing",num: 23671,date: new Date("2018-09-06T02:41:01.920Z"),array: []}}],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12915,str: "Bike Spring",num: 24102,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12916,str: "optical",num: 90619,date: new Date("2018-09-06T16:56:10.578Z"),array: [80623,"Liaison","Research invoice Car",new Date("2018-09-06T10:20:21.762Z"),new Date("2018-09-06T15:12:52.929Z"),90551,[91311,71700],new Date("2018-09-06T18:38:02.508Z"),{_id: 12917,str: "indexing deposit",num: 74443,date: new Date("2018-09-06T11:27:46.058Z"),array: [],obj: {_id: 12918,num: 90160,date: new Date("2018-09-06T16:43:09.199Z"),obj: {}}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 12919,str: "web-enabled",date: new Date("2018-09-06T01:28:24.253Z"),obj: {_id: 12920,num: 44594,date: new Date("2018-09-05T23:27:56.367Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12921,str: "bleeding-edge deposit",date: new Date("2018-09-06T17:00:13.606Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12922,str: "Granite Cambridgeshire Sports",num: 34062,date: new Date("2018-09-06T02:27:11.946Z"),array: [new Date("2018-09-06T13:24:02.354Z"),"payment TCP Product",55242,64936,new Date("2018-09-05T21:33:49.351Z"),{_id: 12923,str: "synthesize",date: new Date("2018-09-06T10:29:01.728Z"),array: ["Zloty impactful","compressing Forward Investment Account",[[],[]]],obj: {_id: 12924,num: 76918,date: new Date("2018-09-06T17:59:40.373Z"),array: []}},new Date("2018-09-06T13:56:17.369Z"),"IB collaborative",51454,62999]});
    },

    function(coll) {
        return coll.insert({_id: 12925,str: "web-enabled",date: new Date("2018-09-06T02:06:28.855Z"),array: [["Factors navigate Cotton",[63422],new Date("2018-09-06T06:25:53.453Z")],"Shoes",45832,{_id: 12926,str: "Legacy",num: 31991,date: new Date("2018-09-06T07:37:07.500Z"),array: [],obj: {}},32480,new Date("2018-09-06T19:30:43.404Z"),"Gold",new Date("2018-09-06T14:45:50.046Z"),78675,{_id: 12927,num: 86039,date: new Date("2018-09-06T16:05:39.176Z"),obj: {_id: 12928,str: "Implementation",num: 34221,date: new Date("2018-09-05T20:29:48.113Z"),array: [[]]}}],obj: {_id: 12929,str: "orchid invoice transmitter",date: new Date("2018-09-06T14:44:19.684Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12930,str: "Communications",num: 4287,date: new Date("2018-09-05T22:39:47.141Z"),array: [],obj: {_id: 12931,num: 29665,date: new Date("2018-09-06T04:06:27.037Z"),array: [new Date("2018-09-06T06:14:25.106Z"),82471,"Myanmar withdrawal","Tactics Up-sized",new Date("2018-09-05T23:39:33.001Z"),[],{_id: 12932,str: "Home Loan Account Courts",date: new Date("2018-09-06T05:03:08.304Z"),obj: {}},18357,"Organized",new Date("2018-09-06T08:38:13.482Z"),"synergize",2063,[19649,6177]]}});
    },

    function(coll) {
        return coll.insert({_id: 12933,str: "neural Creative Kyrgyz Republic",num: 27115,date: new Date("2018-09-06T05:55:52.634Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12934,num: 66658,date: new Date("2018-09-06T06:27:57.045Z"),array: [new Date("2018-09-06T11:07:49.273Z"),"Central Intelligent Plastic Cheese Cambridgeshire",91204,[],"national",{_id: 12935,num: 90780,date: new Date("2018-09-06T04:53:18.555Z"),array: [],obj: {_id: 12936,str: "Nebraska Executive GB",num: 32465,date: new Date("2018-09-06T01:47:10.118Z"),array: ["Money Market Account",78757,new Date("2018-09-05T22:10:01.319Z"),18197,{_id: 12937,str: "Global",date: new Date("2018-09-06T02:49:17.881Z"),array: ["secondary installation"],obj: {}},new Date("2018-09-06T18:20:34.030Z"),{_id: 12938,str: "lime",num: 95187},74761,new Date("2018-09-06T06:09:58.669Z"),new Date("2018-09-06T17:54:53.195Z")],obj: {}}},66048],obj: {_id: 12939,str: "Unbranded Steel Shirt Shore Research",num: 70572,date: new Date("2018-09-06T11:12:51.604Z"),array: ["Refined Frozen Chips","invoice"],obj: {_id: 12940,str: "Brazil Avon index",date: new Date("2018-09-06T18:46:23.187Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 12941,str: "neural Wooden",date: new Date("2018-09-06T15:09:04.874Z"),array: ["Fish Generic Rubber Towels","Sausages Handcrafted",new Date("2018-09-06T07:54:13.939Z"),15503,"24/365 redundant",new Date("2018-09-06T03:06:08.757Z"),61478,43239,29426,[],new Date("2018-09-06T11:57:53.197Z"),{_id: 12942,str: "Unbranded Cotton Towels Health Nevada",num: 75774,date: new Date("2018-09-06T02:11:31.871Z"),array: [],obj: {_id: 12943,str: "connecting Senior Organic",num: 95560,date: new Date("2018-09-06T00:00:59.523Z"),array: [new Date("2018-09-06T01:41:12.990Z")],obj: {}}},new Date("2018-09-06T18:59:50.465Z"),[]],obj: {_id: 12944,str: "Jamaica Cambridgeshire Phased",num: 47649,array: ["monetize"]}});
    },

    function(coll) {
        return coll.insert({_id: 12945,str: "Avon",date: new Date("2018-09-06T17:08:16.184Z"),array: [],obj: {_id: 12946,str: "quantify feed AI",num: 40289,date: new Date("2018-09-06T17:09:09.417Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 12947,str: "Forint Specialist",num: 35465,date: new Date("2018-09-06T00:50:11.019Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12948,str: "approach Industrial",num: 81110,date: new Date("2018-09-06T10:15:34.459Z"),array: ["Intelligent Metal Cheese sticky AGP",41070,new Date("2018-09-06T14:51:02.229Z"),[],new Date("2018-09-06T01:42:39.338Z"),[],{_id: 12949,str: "contextually-based",num: 77402,date: new Date("2018-09-05T20:20:52.020Z"),array: [],obj: {}},14559,"Rustic Plastic Bacon Cambridgeshire",new Date("2018-09-06T16:28:59.982Z"),["Checking Account Tasty"],43372],obj: {_id: 12950,str: "Secured Wooden",num: 91315,date: new Date("2018-09-05T20:31:40.844Z"),array: ["Credit Card Account"],obj: {_id: 12951,str: "Minnesota intuitive transmitting",array: [38004,{_id: 12952,str: "Architect Metal",num: 27836,date: new Date("2018-09-05T23:45:45.383Z"),obj: {}},54690,new Date("2018-09-06T12:47:05.920Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 12953,num: 82223,date: new Date("2018-09-06T08:13:38.170Z"),array: [{_id: 12954,str: "Refined",num: 41482,date: new Date("2018-09-06T07:32:10.198Z"),array: [{_id: 12955,str: "deposit",num: 68717,date: new Date("2018-09-06T11:22:50.305Z"),array: [],obj: {_id: 12956,str: "connect",num: 55706,obj: {_id: 12957,str: "Berkshire Ridges",num: 79025,date: new Date("2018-09-06T05:57:37.465Z"),array: [],obj: {}}}}]},"Home Loan Account neural Personal Loan Account",new Date("2018-09-05T23:25:01.722Z"),"Home Loan Account",69171,{_id: 12958,str: "Oman",date: new Date("2018-09-06T10:55:05.396Z")},new Date("2018-09-06T02:01:22.021Z"),[88318,"Officer facilitate",[19858],"rich"],"Run",[],83544,[63109,new Date("2018-09-06T14:51:13.341Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12959,str: "Canadian Dollar",num: 17499,array: [61569,[],69172,new Date("2018-09-06T12:14:24.146Z"),"Corporate","black engage Chicken",{_id: 12960,str: "deposit Borders",num: 89161,date: new Date("2018-09-05T19:58:38.266Z"),array: [],obj: {}},36139,"Cambridgeshire",new Date("2018-09-06T13:23:43.394Z"),{_id: 12961,num: 73357,date: new Date("2018-09-06T10:59:20.211Z"),obj: {_id: 12962,str: "SQL",date: new Date("2018-09-06T11:58:44.716Z"),array: [88635,[],"Concrete synergistic Auto Loan Account"]}}],obj: {_id: 12963,num: 666,date: new Date("2018-09-06T18:04:33.205Z"),array: [{_id: 12964,str: "AI",num: 57702,array: [new Date("2018-09-06T13:59:31.883Z"),"Beauty"],obj: {}},new Date("2018-09-06T16:53:48.128Z"),[],97596,"program bypass"]}});
    },

    function(coll) {
        return coll.insert({_id: 12965,str: "deploy",num: 51299,date: new Date("2018-09-06T00:16:05.896Z"),array: [new Date("2018-09-06T17:17:45.497Z"),68707,36905,"Kip Berkshire",new Date("2018-09-06T18:00:03.859Z"),[{_id: 12966,str: "pixel",num: 55158,date: new Date("2018-09-06T14:18:42.518Z"),array: [],obj: {}},86657],"applications hacking",96276,new Date("2018-09-05T20:15:45.055Z"),{_id: 12967,num: 26678,date: new Date("2018-09-06T16:03:52.069Z"),obj: {}},17156,"bandwidth",{_id: 12968,date: new Date("2018-09-06T14:30:39.444Z"),array: [new Date("2018-09-06T02:17:05.922Z")],obj: {_id: 12969,str: "Branding Gorgeous bandwidth",num: 42385,date: new Date("2018-09-05T23:07:53.531Z"),array: [],obj: {_id: 12970,str: "Handcrafted Fresh Towels empower Tasty Frozen Salad"}}},"neural plum Wooden"]});
    },

    function(coll) {
        return coll.insert({_id: 12971,str: "Auto Loan Account system engine",num: 38101,date: new Date("2018-09-06T01:56:18.185Z"),array: ["back up Planner Central","Slovakia (Slovak Republic) Chair",95516,"optimal leverage New Jersey",new Date("2018-09-06T08:01:29.639Z"),[38971],new Date("2018-09-06T02:31:58.078Z"),[],{_id: 12972,str: "cyan View",date: new Date("2018-09-06T13:10:38.350Z"),array: [],obj: {}},new Date("2018-09-06T18:58:20.450Z")],obj: {_id: 12973,num: 60358,date: new Date("2018-09-06T06:50:38.659Z"),array: [[]],obj: {_id: 12974,num: 26300,array: [],obj: {_id: 12975,str: "Summit technologies recontextualize",num: 12151,date: new Date("2018-09-06T10:46:37.686Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 12976,str: "Tools purple Sleek Frozen Bike",num: 77418,date: new Date("2018-09-06T16:20:38.284Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12977,str: "USB deliver Organized",num: 36652,date: new Date("2018-09-05T23:29:24.273Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12978,str: "Nigeria",num: 36475,date: new Date("2018-09-06T08:12:48.217Z"),array: [],obj: {_id: 12979,str: "Tools",num: 7518,date: new Date("2018-09-06T04:57:38.727Z"),array: [{_id: 12980,num: 66005,date: new Date("2018-09-06T00:45:55.958Z"),array: [],obj: {}},82049,"Money Market Account Coves",new Date("2018-09-05T23:45:45.523Z"),"ADP Electronics solutions",new Date("2018-09-05T23:37:03.784Z"),"plum pink",56451,new Date("2018-09-06T02:25:37.917Z"),86506,{_id: 12981,str: "Ramp optimizing Unbranded",num: 98955,obj: {_id: 12982,str: "RSS",date: new Date("2018-09-06T14:36:59.949Z")}},76646]}});
    },

    function(coll) {
        return coll.insert({_id: 12983,str: "connect Customer",num: 39718,date: new Date("2018-09-06T18:49:32.265Z"),array: [72785,new Date("2018-09-06T07:09:41.303Z"),"copy sexy",new Date("2018-09-06T14:03:08.714Z"),{_id: 12984,str: "Sausages mint green Paraguay",array: [],obj: {_id: 12985,str: "Technician Cambridgeshire",num: 86169,date: new Date("2018-09-06T13:05:50.764Z"),array: ["solution-oriented Money Market Account",{_id: 12986,num: 97550,date: new Date("2018-09-06T00:19:23.859Z"),array: [new Date("2018-09-06T00:19:56.244Z"),[],new Date("2018-09-06T15:38:16.176Z"),87064],obj: {}},94203,"pixel USB",[]],obj: {_id: 12987,str: "EXE program Legacy",num: 36145,obj: {}}}},39674,[],[],"multi-tasking Supervisor"],obj: {_id: 12988,str: "front-end Taka feed",date: new Date("2018-09-06T03:55:21.348Z")}});
    },

    function(coll) {
        return coll.insert({_id: 12989,str: "Future circuit THX",num: 81256,date: new Date("2018-09-06T08:03:08.879Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12990,str: "Technician Investment Account",num: 63442,date: new Date("2018-09-06T16:18:28.393Z"),array: [new Date("2018-09-06T15:52:34.575Z"),"Handmade deposit open system",24071,new Date("2018-09-06T11:36:04.023Z"),17488,"Awesome Cotton Shirt",36845,"structure",new Date("2018-09-06T00:17:35.222Z"),"turquoise fresh-thinking",{_id: 12991,str: "Intranet yellow",num: 98083,array: [{_id: 12992,str: "digital orchestration",num: 45659,date: new Date("2018-09-06T17:12:31.231Z"),obj: {_id: 12993,str: "Auto Loan Account",date: new Date("2018-09-05T21:52:58.967Z"),array: [],obj: {}}},[],"grey Pizza mindshare"],obj: {_id: 12994,num: 12369,date: new Date("2018-09-06T09:50:13.130Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 12995,str: "e-markets Profound Oregon",num: 73513,date: new Date("2018-09-06T17:28:58.825Z"),array: [],obj: {_id: 12996,str: "Chief Handcrafted XSS",num: 71127,date: new Date("2018-09-06T09:04:36.809Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 12997,str: "Customer withdrawal",num: 99293,array: ["Pants lavender",new Date("2018-09-06T18:11:31.322Z"),"index District Somoni",16617,[new Date("2018-09-06T18:32:40.764Z")],new Date("2018-09-06T08:46:27.305Z"),["Chief interactive Bedfordshire"],50198,{_id: 12998,num: 94501,date: new Date("2018-09-06T02:52:10.897Z"),array: [new Date("2018-09-06T05:36:31.164Z")],obj: {}},11304,41993,{_id: 12999,str: "generating Engineer azure",num: 30362,array: [[],new Date("2018-09-06T11:53:04.222Z"),[],[]],obj: {_id: 13000,str: "feed",num: 12051,date: new Date("2018-09-05T22:45:32.653Z"),obj: {_id: 13001,str: "Sports quantify",date: new Date("2018-09-06T06:33:10.700Z"),array: []}}},{_id: 13002,array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 13003,str: "scalable",num: 2959,date: new Date("2018-09-06T05:27:42.179Z"),array: [new Date("2018-09-06T08:17:55.700Z"),new Date("2018-09-06T05:26:15.479Z"),new Date("2018-09-06T15:48:54.425Z"),54450,"foreground Bedfordshire Bulgaria","payment deposit Guyana",[],{_id: 13004,str: "alliance",num: 98439,date: new Date("2018-09-05T20:35:29.463Z"),array: [new Date("2018-09-05T23:02:27.967Z"),35698],obj: {_id: 13005,num: 60999,date: new Date("2018-09-06T03:03:11.074Z"),array: [],obj: {}}},{_id: 13006,str: "Baby synergies",num: 45189,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 13007,str: "methodology transmitter",num: 55524,date: new Date("2018-09-06T19:50:04.569Z"),array: [],obj: {_id: 13008,num: 14798,date: new Date("2018-09-06T04:32:14.191Z"),obj: {_id: 13009,date: new Date("2018-09-05T20:03:12.013Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13010,str: "mint green CFP Franc",num: 71472,date: new Date("2018-09-06T19:20:44.378Z"),array: [48077,91315,new Date("2018-09-05T20:23:22.454Z"),"Valley","Faroe Islands local Garden",{_id: 13011,str: "Forges bluetooth Research",num: 77942,date: new Date("2018-09-06T10:45:42.613Z"),array: [],obj: {_id: 13012,str: "Falkland Islands Pound",num: 83306,date: new Date("2018-09-06T06:47:16.001Z"),obj: {_id: 13013,str: "Montenegro Cambridgeshire",array: [],obj: {}}}},57972,{_id: 13014,num: 76577,date: new Date("2018-09-06T13:05:42.404Z"),array: []},"methodology",20947,new Date("2018-09-06T11:03:51.528Z"),[{_id: 13015,str: "niches",array: [new Date("2018-09-06T04:32:39.207Z"),[92037,new Date("2018-09-06T15:43:05.590Z")],93302],obj: {_id: 13016,str: "Moroccan Dirham",num: 93216,obj: {_id: 13017,num: 13158,date: new Date("2018-09-05T19:57:23.069Z"),array: ["Dominica card",new Date("2018-09-06T13:21:23.886Z"),"Borders Indiana Moldovan Leu"]}}}]]});
    },

    function(coll) {
        return coll.insert({_id: 13018,num: 25576,date: new Date("2018-09-05T22:58:09.448Z"),array: [47524,"users Unbranded Cotton Fish Tools",new Date("2018-09-06T13:06:52.082Z"),new Date("2018-09-06T05:10:08.279Z"),"hard drive",35712,new Date("2018-09-06T17:04:28.252Z"),{_id: 13019,str: "content homogeneous",date: new Date("2018-09-06T06:59:31.272Z"),array: [],obj: {_id: 13020,str: "monitor solutions",num: 44347,array: ["Summit Salad Planner","Idaho Gorgeous Rubber Chicken Associate"],obj: {_id: 13021,num: 32129,date: new Date("2018-09-06T11:37:37.098Z"),obj: {}}}},new Date("2018-09-06T12:01:40.994Z"),"Planner",[[]],52585],obj: {_id: 13022,str: "Accounts Checking Account",num: 42081,date: new Date("2018-09-06T03:25:31.573Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13023,str: "parse adapter Computer",num: 85531,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13024,str: "Greenland",num: 51747,date: new Date("2018-09-05T20:06:13.563Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13025,str: "invoice RAM",num: 13103,date: new Date("2018-09-06T18:41:26.749Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13026,str: "matrix Associate Handmade Cotton Keyboard",num: 29006,date: new Date("2018-09-05T23:30:21.301Z"),array: [{_id: 13027,str: "New Caledonia coherent",num: 53715,date: new Date("2018-09-06T01:34:26.620Z"),array: [],obj: {_id: 13028,str: "Unbranded Frozen Salad Tunnel Ranch",num: 13778,date: new Date("2018-09-06T09:12:22.590Z"),array: [80582,"Security Swedish Krona Unbranded",58974,new Date("2018-09-06T19:53:23.053Z")],obj: {_id: 13029,str: "Awesome Designer",num: 94079,date: new Date("2018-09-06T18:22:50.453Z"),array: []}}},[[new Date("2018-09-06T19:00:02.940Z"),28827,"Developer"],new Date("2018-09-06T16:39:35.356Z")],"input programming",new Date("2018-09-06T01:35:02.015Z"),{_id: 13030,str: "Representative vortals Gorgeous",date: new Date("2018-09-06T00:36:05.630Z"),array: [],obj: {}},"Future Michigan Chief",new Date("2018-09-06T18:57:02.580Z"),2072,"facilitate Adaptive revolutionize",[57507,"Orchestrator",[]],12037],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13031,num: 30409,array: [],obj: {_id: 13032,str: "Optimization",num: 75331,date: new Date("2018-09-05T22:50:50.219Z"),array: [17719,new Date("2018-09-06T03:59:44.508Z"),[],"Dynamic","Hill Buckinghamshire Guinea Franc",76970,new Date("2018-09-05T20:17:09.338Z"),"Fresh",18453,"invoice Salad content-based","Configurable connecting Avon",new Date("2018-09-06T06:10:25.408Z"),new Date("2018-09-05T22:51:41.222Z"),{_id: 13033,num: 27211,date: new Date("2018-09-06T09:13:22.782Z"),array: [new Date("2018-09-06T12:14:51.365Z")],obj: {_id: 13034,str: "Proactive Common",num: 78483,date: new Date("2018-09-06T09:23:18.068Z"),array: [],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13035,str: "Table Bedfordshire Maldives",num: 47053,date: new Date("2018-09-06T10:52:36.951Z"),array: [new Date("2018-09-06T02:10:12.903Z"),59032,14511,"users Dobra Lane",[],new Date("2018-09-06T14:55:59.422Z"),34036,"Kids","bypassing Research New Mexico",[],77729],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13036,str: "magenta Alabama",num: 73889,date: new Date("2018-09-06T10:09:00.994Z"),array: [],obj: {_id: 13037,str: "Chair input",num: 35176,date: new Date("2018-09-05T20:38:22.453Z"),array: [new Date("2018-09-06T10:38:31.289Z"),{_id: 13038,num: 55420,date: new Date("2018-09-06T19:18:15.065Z"),array: ["Integration HTTP"],obj: {_id: 13039,str: "Trail Secured",date: new Date("2018-09-06T00:53:06.333Z"),array: []}},76774,new Date("2018-09-06T02:48:52.284Z"),61819,new Date("2018-09-05T21:12:51.910Z"),new Date("2018-09-06T18:45:54.821Z"),"Rand Supervisor","Practical","Kansas Hungary",19007,[11500,{_id: 13040,str: "optical platforms",num: 39379,obj: {}}],"alarm Garden Fantastic",98695]}});
    },

    function(coll) {
        return coll.insert({_id: 13041,str: "Oman",num: 33609,date: new Date("2018-09-06T14:25:31.205Z"),array: [],obj: {_id: 13042,str: "calculating",num: 3325,date: new Date("2018-09-06T04:56:19.549Z"),array: [new Date("2018-09-06T04:46:56.580Z"),"Reduced",new Date("2018-09-06T13:05:09.497Z"),82205,"Configuration Usability Avon",[{_id: 13043,str: "Gorgeous dynamic",num: 9923,date: new Date("2018-09-06T07:10:58.165Z"),obj: {}},58530,86538],new Date("2018-09-06T17:23:34.515Z"),new Date("2018-09-06T01:45:08.352Z")],obj: {_id: 13044,str: "Kuwaiti Dinar",num: 86432,date: new Date("2018-09-06T01:15:16.238Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13045,str: "quantify",num: 77598,date: new Date("2018-09-06T13:56:19.992Z"),array: ["Licensed mobile",29362,new Date("2018-09-06T04:44:12.132Z"),{_id: 13046,str: "Tasty Metal Ball Handmade Granite Cheese black",num: 94611,date: new Date("2018-09-05T20:44:58.203Z"),array: [],obj: {_id: 13047,str: "e-markets Small Concrete Mouse",array: []}},new Date("2018-09-06T01:52:41.243Z"),new Date("2018-09-05T21:17:25.694Z"),"Savings Account Belarussian Ruble experiences",18534,[[],"Massachusetts hard drive",new Date("2018-09-06T00:26:38.033Z")],53926],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13048,str: "Data interface Port",num: 16705,date: new Date("2018-09-06T19:16:20.220Z"),array: [],obj: {_id: 13049,str: "initiatives hardware infrastructures",num: 43839,date: new Date("2018-09-06T10:39:30.624Z"),array: [{_id: 13050,str: "Pants Computer",date: new Date("2018-09-06T14:54:16.342Z"),obj: {_id: 13051,str: "payment",array: []}},new Date("2018-09-05T21:47:34.715Z"),[],90481,"action-items",new Date("2018-09-06T09:18:51.129Z"),new Date("2018-09-05T21:37:22.529Z"),"reboot",[[],19661],85976,"View",new Date("2018-09-05T20:07:41.411Z"),{_id: 13052,str: "New Mexico",num: 22849,date: new Date("2018-09-06T17:14:43.751Z"),array: [{_id: 13053,num: 63547,date: new Date("2018-09-06T17:34:46.990Z"),array: [new Date("2018-09-06T08:01:57.666Z"),"ROI Bedfordshire hard drive"],obj: {}},{_id: 13054,str: "customer loyalty Networked",num: 10676},60886],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 13055,str: "firewall invoice application",num: 31780,date: new Date("2018-09-06T16:48:21.242Z"),array: [],obj: {_id: 13056,str: "magenta",num: 88014,date: new Date("2018-09-06T11:47:14.789Z"),array: [93892,["withdrawal Tasty Frozen Towels users",63497,new Date("2018-09-06T08:26:08.085Z"),new Date("2018-09-05T21:02:31.980Z"),{_id: 13057,str: "Auto Loan Account open system",num: 67275,array: []},"Cambridgeshire","Shoes"],22317,new Date("2018-09-06T17:24:04.652Z"),new Date("2018-09-06T01:29:30.986Z"),[],55468,"Awesome schemas Crescent"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13058,str: "Handmade Granite Salad Inverse CSS",num: 35076,date: new Date("2018-09-06T05:58:30.448Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13059,str: "Small Granite Hat moratorium back-end",num: 75154,array: [],obj: {_id: 13060,str: "granular",date: new Date("2018-09-06T06:35:20.615Z"),array: [],obj: {_id: 13061,str: "Wisconsin Borders",num: 95739,date: new Date("2018-09-06T08:46:30.604Z"),array: ["Orchestrator Tasty Fresh Mouse Salad",5449,[new Date("2018-09-06T18:26:57.431Z"),"Credit Card Account Small",[new Date("2018-09-05T20:26:18.197Z")],new Date("2018-09-05T21:43:30.081Z")],new Date("2018-09-06T08:40:25.663Z"),60924,"cultivate Direct",22061,new Date("2018-09-06T13:14:32.528Z"),{_id: 13062,num: 5866,date: new Date("2018-09-06T06:04:42.740Z")},{_id: 13063,num: 29426,date: new Date("2018-09-06T13:55:40.488Z"),array: [],obj: {}},62720,new Date("2018-09-05T22:48:51.486Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13064,str: "reintermediate",num: 10880,date: new Date("2018-09-06T14:58:29.614Z"),array: [new Date("2018-09-06T11:39:17.261Z"),"withdrawal artificial intelligence",60369,"Unbranded Concrete Chips",73013,{_id: 13065,str: "Checking Account International",num: 84510,date: new Date("2018-09-06T08:34:00.109Z"),array: [],obj: {}},new Date("2018-09-06T02:47:54.648Z"),[66600],"bus",37209],obj: {_id: 13066,str: "Chief non-volatile",num: 53795,date: new Date("2018-09-06T18:42:22.699Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13067,str: "Home Loan Account Specialist XSS",num: 30030,date: new Date("2018-09-06T16:52:06.631Z"),obj: {_id: 13068,str: "zero tolerance mobile Practical Plastic Bike",num: 10918,date: new Date("2018-09-06T11:03:21.701Z"),array: [{_id: 13069,str: "action-items",num: 60980,array: [],obj: {}},52101,73007,"compress",new Date("2018-09-05T21:17:10.297Z"),93331,[],"synergies Human",new Date("2018-09-06T00:45:42.454Z"),"Games Realigned",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 13070,str: "synthesizing Sausages Soap",num: 39145,date: new Date("2018-09-05T21:02:59.413Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 13071,str: "Agent",date: new Date("2018-09-06T03:30:28.350Z"),array: [],obj: {_id: 13072,str: "24 hour",num: 64297,date: new Date("2018-09-06T17:50:17.801Z"),array: [new Date("2018-09-06T11:53:14.994Z"),new Date("2018-09-05T21:08:01.337Z"),new Date("2018-09-05T21:50:16.804Z"),{_id: 13073,str: "Sleek Zimbabwe Dollar",num: 18693,array: [],obj: {}},"Hat Central",92470,"lime navigating array",new Date("2018-09-06T04:04:20.486Z"),[64786,["visualize"],{_id: 13074,str: "Triple-buffered",num: 69903,date: new Date("2018-09-06T17:17:41.366Z"),array: [],obj: {}},27446],34504,"empower Sleek Usability"],obj: {_id: 13075,str: "Up-sized card",num: 55025,date: new Date("2018-09-06T17:20:36.599Z"),obj: {_id: 13076,date: new Date("2018-09-06T06:59:52.480Z"),obj: {_id: 13077,str: "online multi-byte",num: 42303,array: []}}}}});
    },

    function(coll) {
        return coll.insert({_id: 13078,str: "Arkansas",num: 74803,date: new Date("2018-09-06T04:35:59.449Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13079,str: "quantify Chips Granite",num: 60180,date: new Date("2018-09-06T17:21:44.985Z"),array: [99872,"Computer Berkshire",new Date("2018-09-05T23:24:26.093Z"),new Date("2018-09-06T13:09:15.931Z"),{_id: 13080,str: "primary",num: 53221,date: new Date("2018-09-06T16:14:47.832Z"),array: [],obj: {_id: 13081,str: "hacking Technician hub",num: 70843,date: new Date("2018-09-06T04:46:48.545Z"),array: [],obj: {}}},10860,[[],["Turnpike methodology"],new Date("2018-09-06T08:14:50.232Z")],"Liechtenstein integrate",{_id: 13082,str: "invoice Mouse",num: 15687,date: new Date("2018-09-06T08:10:59.325Z"),array: [76369,new Date("2018-09-05T20:31:01.683Z")],obj: {_id: 13083,date: new Date("2018-09-06T14:28:43.011Z"),array: [73162,"Car Chief Grocery"]}},new Date("2018-09-06T06:25:07.481Z"),47977,{ _id: 13084 },{_id: 13085,num: 81970,date: new Date("2018-09-06T18:26:30.832Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13086,str: "Uruguay Fantastic Frozen Tuna",date: new Date("2018-09-06T06:29:49.992Z"),obj: {_id: 13087,str: "Home",num: 80985,date: new Date("2018-09-06T18:53:58.754Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13088,str: "salmon",num: 77375,date: new Date("2018-09-06T19:03:19.017Z"),array: [],obj: {_id: 13089,str: "Intuitive Implementation",num: 16851,date: new Date("2018-09-06T08:51:29.175Z"),array: [new Date("2018-09-06T10:14:28.536Z"),76791,new Date("2018-09-06T08:39:05.699Z"),92940,"extensible","Cotton full-range Costa Rica",[53150],{_id: 13090,str: "enable Movies",num: 23785,date: new Date("2018-09-06T00:29:05.580Z"),array: [new Date("2018-09-05T23:55:01.423Z")],obj: {}},[],43515,new Date("2018-09-06T03:11:06.056Z"),"Checking Account maroon Lights",{_id: 13091,str: "transparent open architecture",num: 34131,array: [37838,{_id: 13092,str: "Forward Automotive",num: 28611},"Cordoba Oro Incredible Soft Mouse",new Date("2018-09-06T01:45:38.442Z")]},87158],obj: {_id: 13093,date: new Date("2018-09-06T00:48:33.859Z"),obj: {_id: 13094,str: "Program calculate",num: 90720,date: new Date("2018-09-06T03:48:48.103Z"),array: [[[],"Accounts Games open-source",51628],new Date("2018-09-06T00:04:44.878Z")],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 13095,str: "metrics",num: 2475,array: [new Date("2018-09-06T16:52:32.633Z"),"back up Comoro Franc Garden",28387,[],44946,"EXE",[3218,{_id: 13096,str: "violet Belarussian Ruble",num: 55846,date: new Date("2018-09-06T02:48:01.127Z"),array: [],obj: {_id: 13097,str: "B2B",num: 48253}}],new Date("2018-09-06T01:24:39.086Z"),new Date("2018-09-06T02:10:00.306Z"),"Metal card",{_id: 13098,str: "Frozen turquoise",date: new Date("2018-09-05T23:18:57.552Z"),array: [],obj: {_id: 13099,str: "zero administration parse",num: 56217,date: new Date("2018-09-06T03:13:59.892Z"),array: ["Supervisor Manat"]}},90504,{_id: 13100,date: new Date("2018-09-06T05:39:38.539Z"),obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13101,str: "back-end Computer",date: new Date("2018-09-06T15:33:24.726Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13102,str: "Soft Bolivar Fuerte",date: new Date("2018-09-06T01:41:57.879Z"),array: [77513,"Self-enabling Sausages",60185,new Date("2018-09-06T04:08:46.586Z"),"Polarised info-mediaries JBOD","Kazakhstan Baby Unbranded Plastic Cheese",new Date("2018-09-06T07:00:54.704Z"),{_id: 13103,num: 79127,date: new Date("2018-09-06T11:08:52.007Z"),array: [{_id: 13104,str: "Sausages Meadow",num: 14798,array: [],obj: {_id: 13105,str: "Berkshire Automotive",num: 81738,date: new Date("2018-09-06T00:58:00.757Z"),obj: {}}},89973,new Date("2018-09-06T18:36:54.642Z")],obj: {_id: 13106,str: "Cotton exuding deliverables",date: new Date("2018-09-06T03:48:28.964Z"),array: []}},"Electronics","Soft",[]]});
    },

    function(coll) {
        return coll.insert({_id: 13107,num: 12533,date: new Date("2018-09-06T15:44:25.422Z"),array: [],obj: {_id: 13108,str: "Baby Assistant",num: 4784,array: ["International Solomon Islands Reduced",92361,26336,{_id: 13109,str: "synthesizing",num: 39532,date: new Date("2018-09-06T19:14:59.150Z"),array: [97966],obj: {}},[],"quantifying parsing",new Date("2018-09-06T06:53:45.153Z"),{_id: 13110,str: "Secured Soft Robust",num: 60511,date: new Date("2018-09-06T11:39:43.744Z"),array: [new Date("2018-09-06T15:53:47.972Z"),"solutions Personal Loan Account override"],obj: {}},"Iceland Planner",[],new Date("2018-09-06T06:13:53.340Z"),60214,[],{_id: 13111,str: "District"}],obj: {_id: 13112,str: "generate",num: 50382,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 13113,str: "parsing",num: 48812,date: new Date("2018-09-06T08:53:04.536Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13114,str: "Home Legacy",num: 39091,date: new Date("2018-09-05T21:34:06.931Z"),array: [],obj: {_id: 13115,str: "Tools leverage",num: 56812,array: [[{_id: 13116,date: new Date("2018-09-05T22:29:07.379Z"),array: [],obj: {}},15215,"Tactics"],"Credit Card Account New Zealand Dollar",85881,{_id: 13117,str: "Shoes",num: 5273,date: new Date("2018-09-06T17:26:20.901Z")},new Date("2018-09-06T07:52:50.040Z"),new Date("2018-09-06T00:17:15.389Z"),new Date("2018-09-06T10:05:49.800Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13118,str: "initiatives",num: 91528,date: new Date("2018-09-06T13:39:32.564Z"),array: [66110,new Date("2018-09-06T03:53:31.878Z"),27309,new Date("2018-09-06T18:59:47.042Z"),[],"redundant Direct HDD",new Date("2018-09-06T07:05:31.184Z"),95798,{_id: 13119,str: "iterate Expanded Direct",date: new Date("2018-09-05T19:59:56.688Z"),obj: {}},[],new Date("2018-09-05T21:45:04.992Z")],obj: {_id: 13120,str: "Soft",num: 46436,date: new Date("2018-09-05T23:17:33.704Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13121,str: "Rustic Checking Account",num: 90022,date: new Date("2018-09-06T13:35:01.922Z"),obj: {_id: 13122,str: "Handcrafted Wooden Bacon clicks-and-mortar",num: 80204,date: new Date("2018-09-06T03:00:38.807Z"),array: ["orchestrate Investment Account Union",37039,new Date("2018-09-06T15:24:33.471Z"),"calculating",new Date("2018-09-06T10:35:51.956Z"),"Maine orchestration connecting",{_id: 13123,str: "synergies overriding Infrastructure",num: 69625,date: new Date("2018-09-06T17:06:36.945Z"),array: [],obj: {}},"Stand-alone",64039,new Date("2018-09-06T05:49:23.167Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 13124,str: "Fresh indigo Kids",date: new Date("2018-09-06T02:45:03.255Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13125,str: "Car cross-platform",num: 25512,date: new Date("2018-09-06T14:00:18.441Z"),array: [],obj: {_id: 13126,str: "Supervisor Utah Isle",array: [new Date("2018-09-06T00:05:16.716Z"),new Date("2018-09-06T11:29:02.959Z"),20646,[],4949,new Date("2018-09-06T11:28:58.666Z"),"knowledge user","Wallis and Futuna"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13127,str: "Plastic plum",num: 74125,date: new Date("2018-09-06T03:22:44.977Z"),array: [new Date("2018-09-06T08:07:35.242Z"),"New Jersey","Tactics",[],67913,"Licensed","responsive Awesome Swiss Franc",22548],obj: {_id: 13128,str: "Rubber Home Loan Account",num: 35087,date: new Date("2018-09-06T05:17:07.571Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 13129,str: "program program exploit",num: 31350,array: ["Generic Granite Soap",new Date("2018-09-05T23:46:19.482Z"),13404,{_id: 13130,num: 93329,date: new Date("2018-09-06T02:12:29.090Z"),array: [],obj: {}},5714,20856,new Date("2018-09-06T19:52:39.943Z"),["Handcrafted Soft Pants",new Date("2018-09-06T19:39:55.068Z")],"Gorgeous Awesome Consultant",{_id: 13131,num: 99552,date: new Date("2018-09-06T01:47:57.291Z"),array: [],obj: {_id: 13132,str: "Multi-tiered Berkshire",num: 95785,date: new Date("2018-09-06T13:59:44.959Z")}},new Date("2018-09-06T11:41:27.728Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13133,str: "Producer matrix",date: new Date("2018-09-05T20:21:37.000Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13134,str: "communities Graphical User Interface",num: 5798,date: new Date("2018-09-06T14:43:25.741Z"),array: [new Date("2018-09-05T21:45:40.047Z"),33685,[],26240,new Date("2018-09-06T12:54:23.865Z"),"B2B Frozen invoice",[new Date("2018-09-06T07:41:57.577Z")],"Cotton","optimizing",new Date("2018-09-06T02:49:34.136Z"),{_id: 13135,num: 26373,array: [],obj: {_id: 13136,str: "iterate copy Interactions",date: new Date("2018-09-05T22:45:08.820Z"),array: [{_id: 13137,str: "auxiliary Creative",num: 40476,date: new Date("2018-09-06T17:37:06.268Z"),array: [83598,{_id: 13138,date: new Date("2018-09-05T21:59:12.070Z"),obj: {}},81064],obj: {_id: 13139,str: "National Car",num: 67342,date: new Date("2018-09-06T10:17:52.428Z"),array: [[],"orchid"],obj: {_id: 13140,str: "Liaison",num: 86101,date: new Date("2018-09-05T21:24:06.334Z"),array: []}}}]}}]});
    },

    function(coll) {
        return coll.insert({_id: 13141,str: "intermediate",num: 90910,date: new Date("2018-09-05T23:03:01.305Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13142,str: "Dynamic Rand Loti",num: 70309,date: new Date("2018-09-06T14:09:12.854Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13143,num: 51821,date: new Date("2018-09-06T13:51:01.632Z"),array: ["Pizza",45996,"Phased",new Date("2018-09-06T00:38:11.590Z"),34021,64433,3505,[new Date("2018-09-06T08:52:59.145Z"),new Date("2018-09-06T17:39:19.161Z"),[]],{_id: 13144,str: "Junctions Shoes robust",num: 91017,date: new Date("2018-09-06T13:24:12.346Z"),array: [[]]},"killer actuating application",68889],obj: {_id: 13145,str: "silver quantifying Cambridgeshire",num: 84959,date: new Date("2018-09-06T15:29:39.646Z"),array: [new Date("2018-09-06T10:41:32.256Z"),new Date("2018-09-06T09:35:16.404Z"),"gold"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13146,str: "Shoes value-added",num: 70399,date: new Date("2018-09-05T22:32:52.156Z"),array: [],obj: {_id: 13147,str: "Shoes",num: 48433,date: new Date("2018-09-05T20:09:10.391Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 13148,num: 88240,date: new Date("2018-09-05T23:05:27.884Z"),array: [44915,1416,{_id: 13149,str: "mobile infomediaries Pizza",num: 65856,date: new Date("2018-09-06T17:34:46.680Z"),array: [],obj: {_id: 13150,str: "Borders",num: 94520,obj: {}}},new Date("2018-09-06T19:41:15.284Z"),["cross-platform",new Date("2018-09-06T12:29:31.619Z")],new Date("2018-09-06T02:56:52.738Z"),49666,"Auto Loan Account Dalasi Bolivar Fuerte",{_id: 13151,str: "tangible capacity",date: new Date("2018-09-06T12:51:39.312Z"),obj: {_id: 13152,str: "Peru calculate Rhode Island",num: 62055,date: new Date("2018-09-06T02:58:17.309Z"),array: [],obj: {}}},72849,"SDD withdrawal RAM",91584],obj: {_id: 13153,str: "Greens deposit Steel",num: 28148,array: [[],new Date("2018-09-06T05:38:45.982Z"),25804],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13154,num: 26188,date: new Date("2018-09-06T01:39:30.960Z"),array: ["Configuration red Keyboard",{_id: 13155,str: "Car Intelligent transmitting",date: new Date("2018-09-05T22:21:32.676Z"),obj: {_id: 13156,str: "Practical Metal Bacon",num: 86066,date: new Date("2018-09-06T06:47:00.762Z"),array: [81144],obj: {}}},"Solutions Streamlined",new Date("2018-09-06T10:18:14.834Z"),"Bedfordshire Producer open architecture",[],34520,{_id: 13157,str: "Samoa Universal",num: 454,date: new Date("2018-09-06T05:43:38.025Z"),array: [],obj: {}},new Date("2018-09-06T02:59:51.841Z")],obj: {_id: 13158,str: "Ergonomic Wooden Salad Music",num: 86368}});
    },

    function(coll) {
        return coll.insert({_id: 13159,str: "virtual Home Loan Account",num: 9884,date: new Date("2018-09-06T01:35:52.510Z"),array: [44010,{_id: 13160,str: "distributed Money Market Account modular",num: 85656,date: new Date("2018-09-06T04:15:53.843Z"),array: ["Outdoors Avon engineer",94803,"Keyboard engineer"],obj: {}},{_id: 13161,str: "Towels haptic Station",num: 22098,date: new Date("2018-09-06T15:47:00.361Z"),obj: {}},new Date("2018-09-06T09:05:41.904Z"),new Date("2018-09-06T14:07:05.261Z"),new Date("2018-09-06T00:12:02.947Z"),new Date("2018-09-06T08:47:00.503Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 13162,str: "Investor Dam National",num: 53808,date: new Date("2018-09-06T00:50:37.760Z"),array: ["Handcrafted Wooden Keyboard Generic Rubber Computer","Plastic Branding",70722,4864,{_id: 13163,str: "New Caledonia incubate",num: 82616,date: new Date("2018-09-06T12:40:57.925Z"),array: ["Indian Rupee Ngultrum payment Unbranded Soft Hat"],obj: {_id: 13164,num: 11036,date: new Date("2018-09-06T09:04:26.162Z"),array: [],obj: {_id: 13165,num: 55709}}},new Date("2018-09-06T16:45:50.703Z"),13215,"upward-trending back-end Sleek",[new Date("2018-09-05T21:39:55.886Z")],11858,new Date("2018-09-06T15:29:48.274Z"),[],new Date("2018-09-06T00:41:53.278Z")],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayToObject: [[{k: "violet hack",v: true}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Texas Plastic",chars: { $trim: { input: "pixel payment" } }} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $ltrim: { input: '$str' } },chars: "JSON"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Oregon platforms protocol",{ $trim: {input: "Refined Profound reintermediate",chars: { $toLower: "hierarchy" }} },'$obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfWeek: { $dayOfWeek: '$obj.obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $cmp: [{ $arrayToObject: [[{k: "analyzer Internal Functionality",v: '$obj.num'},{k: "Usability",v: { $concat: ['$obj.obj.obj.str',"Graphical User Interface"] }}]] },{ $map: {input: [3613],in: { $divide: ['$$this',41682] }} }] },month: { $ln: 59615 }} }, _id: 0}}],

        [{$project: {a: { $week: { $minute: { $dayOfMonth: '$obj.obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',onNull: "Group withdrawal SQL"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num','$obj.obj.obj.num'],[],[],["bypass experiences"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "magenta vertical Rand",v: '$obj.num'},{k: "Bedfordshire repurpose XSS",v: { $substrCP: [{ $substrCP: ['$obj.obj.obj.str',5,20] },0,19] }}]] }, _id: 0}}],

        [{$project: {a: { $hour: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[{k: "Hills District digital",v: { $dayOfMonth: { $dayOfYear: { $dateToString: {date: '$obj.obj.date',timezone: "MST7MDT",onNull: { $dateToString: {date: new Date("2018-09-06T08:17:20.139Z"),format: "%z-%d-%Z-%L-%Y-%L",timezone: "Iran"} }} } } }},{k: "Assistant Refined",v: 75640},{k: "card Auto Loan Account hard drive",v: 46905}]] } } } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["cultivate",{ $rtrim: {input: '$obj.obj.str',chars: { $concat: [{ $substrBytes: ['$str',2,3] }] }} }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [4,8] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $toDate: { $arrayElemAt: [['$obj.obj.str'],43208] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Money Market Account"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T13:57:54.590Z",timezone: "Africa/Niamey",onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Point Open-architected",15,3] }, _id: 0}}],

        [{$project: {a: { $range: [13,18,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],39001] }, _id: 0}}],

        [{$project: {a: { $range: [6,19] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $second: { $isoWeek: { $year: new Date("2018-09-06T12:40:57.084Z") } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $month: { $minute: { $year: { $dayOfWeek: { $isoDayOfWeek: { $minute: { $second: { $dateFromString: {dateString: "2018-09-05T22:32:27.402Z",timezone: "Atlantic/St_Helena",onNull: '$str'} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Turkmenistan Incredible Steel Cheese Investor",v: '$obj.obj.date'},{k: "withdrawal",v: { $toLower: "ROI" }}]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $substrCP: ['$obj.obj.obj.str',19,9] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Right-sized Taka Dale",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ["Savings Account",'$obj.str','$obj.str'] }],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["withdrawal",{ $dateToString: {date: new Date("2018-09-06T09:31:48.134Z"),timezone: "America/Whitehorse"} },"Unbranded Rubber Sausages Group",{ $toUpper: '$obj.str' },'$obj.str'],as: 'lawson',in: { $exp: '$num' }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%G-%U-%U-%S-%z-%Z-%w-%u-%d-%Y-%u",timezone: "Europe/Tirane"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Club Tasty Plastic Car Money Market Account"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num','$obj.num',2719,{ $add: [] }],83653] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Mali" } }, _id: 0}}],

        [{$project: {a: { $substr: ["European Unit of Account 17(E.U.A.-17) user-facing Books",2,13] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],[],[{ $concat: ["protocol"] }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],[10410,99435],["Administrator"]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'mya',in: { $ceil: 49604 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrCP: ['$obj.obj.obj.str',12,6] },"Buckinghamshire algorithm North Dakota"],[13395,'$obj.obj.obj.num'],[true],["Sausages"],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',6,15] }, _id: 0}}],

        [{$project: {a: { $range: [10,17,6] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeekYear: { $dateToString: {date: new Date("2018-09-06T06:16:48.417Z"),format: "%z-%S-%V-%V",timezone: "Europe/Istanbul"} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$str',19,11] }],12718] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'lionel',cond: { $lte: [{ $arrayToObject: [[[],['$$lionel',{ $ltrim: { input: "Credit Card Account" } }],['$$lionel',5251]]] },{ $substr: ['$obj.obj.str',13,9] }] }} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $isoWeek: { $second: { $toDate: { $concat: [{ $toLower: '$obj.str' }] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],10486] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["model Rustic",{ $toUpper: '$obj.obj.obj.str' },{ $substr: ["paradigms reintermediate",15,5] }],in: { $log: [25084,{ $subtract: ['$$this','$$this'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [0,15,0] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: {input: '$str',chars: "Locks Gorgeous proactive"} }],22813] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[48343,96999],["FTP virtual Usability","Producer"],[],[{ $trim: { input: "Rustic" } },'$str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $concat: ['$obj.obj.obj.str','$obj.obj.str'] }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: {input: { $trim: {input: '$obj.obj.obj.str',chars: "solid state reboot Harbor"} },chars: "Sleek calculating"} }],[],[84246],[{ $ltrim: { input: { $toString: { $rtrim: {input: '$obj.obj.str',chars: "Soap circuit"} } } } },'$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.str'],[],[{ $dateToString: {date: { $dayOfMonth: { $second: { $isoWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-05T23:24:36.975Z",format: "%j-%Z-%Y-%%",timezone: "Africa/Harare"} } } } } },format: "%z-%%-%V-%Z"} },'$obj.obj.obj.str',"Intelligent Rubber Sausages Mission Directives"],[{ $rtrim: { input: '$obj.obj.obj.str' } }]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[{ $dateToString: {date: new Date("2018-09-06T04:25:07.453Z"),format: "%%-%G-%Y-%S",timezone: "Asia/Istanbul"} }],[69221,'$obj.obj.obj.num'],["transmitting Plastic","Consultant Gloves",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $second: { $dateToString: {date: '$obj.obj.obj.date',onNull: { $toUpper: "Cambridgeshire" }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $substr: [{ $rtrim: {input: "fuchsia Idaho web-readiness",chars: '$str'} },12,8] }],73176] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num'],[],[{ $substrBytes: ['$str',15,10] },'$str'],[48109]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],[],["olive Gibraltar Berkshire"],['$num','$obj.obj.obj.num']] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.date'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T06:04:11.334Z"),timezone: "Portugal"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',"Fantastic Frozen Chair navigate"],[{ $substrCP: [{ $ltrim: { input: "Ergonomic Concrete Gloves" } },16,9] },"Future"],[],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $range: [18,11,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',"deposit Unbranded",{ $ltrim: { input: "mint green Product" } },'$str'],[],[92829],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["cross-platform deliverables calculating",'$obj.obj.str'],89238] }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Communications" } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToParts: {date: { $hour: { $week: { $isoWeek: { $dateToParts: {date: { $month: { $week: { $dateFromParts: {isoWeekYear: 60318,isoDayOfWeek: { $size: [[]] },second: '$obj.num'} } } },timezone: "America/Rosario"} } } } },timezone: "America/Bogota",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],36060] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $toDate: { $arrayToObject: [[[],[3151,'$num']]] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],[19614]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: {input: '$str',chars: '$obj.obj.obj.str'} },{ $dateToString: {date: '$date',format: "%G-%G-%U-%L-%S-%Z-%w",timezone: "Pacific/Tahiti"} }]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: { $substrBytes: ['$obj.str',15,20] }} }, _id: 0}}],

        [{$project: {a: { $toDate: { $substr: ['$str',16,2] } }, _id: 0}}],

        [{$project: {a: { $map: {input: [35613,'$obj.num'],in: { $ln: 20818 }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.str',chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Organic Virtual Denar",v: "Books"}]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoDayOfWeek: { $dateFromParts: {year: { $subtract: ['$obj.obj.obj.num',50777] },day: { $subtract: [86355,'$obj.num'] },minute: { $ceil: '$obj.obj.num' },millisecond: { $multiply: [] },timezone: "Africa/Bamako"} } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'leila',cond: { $gt: [{ $arrayToObject: [[['$obj.str',"secured line"],[{ $toLower: '$obj.obj.obj.str' },new Date("2018-09-06T14:10:44.210Z")],['$obj.obj.obj.str'],["redefine Auto Loan Account",{ $substrBytes: ["web services",20,13] },{ $substrCP: [{ $ltrim: { input: '$obj.obj.str' } },15,1] }],[]]] },{ $map: {input: [],in: { $log10: 30416 }} }] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $month: { $dateToString: {date: '$obj.obj.date',format: "%U-%%-%Z-%%-%V-%u-%%",timezone: "Europe/Warsaw"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],75984] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $ln: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],["redefine"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "SCSI Savings Account generate",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"Fundamental"],55463] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $trim: { input: '$str' } },"deposit"],[],[],[],[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $millesecond: { $dateFromParts: {year: { $exp: '$obj.obj.num' },month: { $size: [[]] },minute: { $add: [] },timezone: "America/Indiana/Indianapolis"} } } },"redundant Handmade Frozen Pizza",'$obj.str']] }, _id: 0}}],

        [{$project: {a: { $range: [13,7,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[70547,88698],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toString: { $range: [19,5,15] } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "innovative Books",chars: { $substrBytes: ["Cambridgeshire Director",6,8] }} }, _id: 0}}],

        [{$project: {a: { $toDate: { $toUpper: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',8,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substr: ["Supervisor Ramp Cambridgeshire",9,15] },5,3] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.str',"Quality",{ $substrBytes: ['$obj.obj.obj.str',11,3] }],as: 'rachel',cond: { $in: [{ $arrayElemAt: [[],27339] },{ $zip: {inputs: [[{ $toLower: '$str' }],[{ $add: ['$$rachel',56380] }],[]],defaults: [false,"optical"]} }] }} }, _id: 0}}],

        [{$project: {a: { $month: { $millesecond: { $hour: { $week: { $dayOfYear: { $second: { $year: '$obj.obj.date' } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Cambridgeshire lime",'$obj.obj.str'],[],[{ $substrBytes: ['$obj.obj.obj.str',13,20] }],[93694,31301,'$num']] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str',{ $substrCP: ["Unbranded",3,6] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Gorgeous encryption purple",v: "programming Jewelery"}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $millesecond: { $dateToString: {date: new Date("2018-09-06T07:35:42.673Z"),timezone: "Asia/Ust-Nera",onNull: { $zip: {inputs: [[{ $rtrim: { input: "Mouse primary Canadian Dollar" } },'$obj.obj.str'],[],['$num','$obj.obj.obj.num',98130],[]],useLongestLength: true,defaults: [false,["Buckinghamshire Arizona","Latvian Lats"]]} }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],98595] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],55317] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["next generation mobile"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],['$str',{ $dateToString: {date: '$date',timezone: "America/El_Salvador",onNull: '$str'} }],['$obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["EXE",3,20] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [11083],in: { $size: [["bluetooth"]] }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "COM Bacon",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Ergonomic Louisiana seize",v: '$obj.obj.num'},{k: "THX Associate",v: new Date("2018-09-06T00:04:07.945Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],89461] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "invoice back up Orchestrator",v: true},{k: "Sleek",v: { $toDate: { $concat: ["SCSI",{ $trim: {input: '$obj.obj.obj.str',chars: "alliance GB"} }] } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],["withdrawal Networked Rustic"],['$obj.obj.str',"Greece sensor Stream",'$obj.str',{ $substrBytes: [{ $dateToString: {date: '$obj.obj.date',timezone: "HST"} },16,14] }],[57618,'$obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: new Date("2018-09-05T20:59:55.436Z"),timezone: "NZ"} } }, _id: 0}}],

        [{$project: {a: { $range: [6,13] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$str',15,15] }, _id: 0}}],

        [{$project: {a: { $range: [2,15,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $zip: {inputs: [[56538],['$obj.str',"Directives"],[]],useLongestLength: true} } }],51411] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: [{ $substr: [{ $substr: ['$obj.obj.obj.str',12,20] },7,2] },"District Colombian Peso Unidad de Valor Real methodologies"] },{ $toLower: '$obj.obj.str' }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $millesecond: { $second: { $dateFromParts: {year: { $pow: ['$num',22126] },hour: { $sqrt: 63630 },minute: { $trunc: 70547 }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[17705,'$num','$obj.obj.num',21695,'$obj.obj.obj.num'],["extensible","Practical Steel Mouse SMS Incredible Plastic Towels",{ $toLower: '$obj.obj.str' }],[94616],[{ $substr: ["Thailand neural",4,0] }],['$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Refined Wooden Towels Generic Wooden Gloves",'$obj.str',{ $rtrim: {input: '$obj.obj.str',chars: { $rtrim: { input: "Chips yellow mindshare" } }} }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $subtract: [3245,'$obj.obj.num'] },month: { $cmp: [{ $arrayToObject: [[{k: "holistic Wisconsin Iceland Krona",v: '$obj.obj.obj.str'},{k: "real-time wireless",v: false},{k: "New Hampshire open architecture Cloned",v: '$obj.obj.num'}]] },{ $trim: {input: "redundant Chicken matrix",chars: '$obj.obj.str'} }] },hour: { $trunc: { $exp: 13785 } },second: { $add: [] },timezone: "Africa/Libreville"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: "Lao People's Democratic Republic Soap experiences" },0,4] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "blue Steel",v: { $dateToParts: {date: { $year: { $second: { $dateFromString: {dateString: "2018-09-06T12:01:46.691Z",timezone: "America/Jujuy",onNull: "Berkshire"} } } },timezone: "Africa/Nouakchott",iso8601: true} }},{k: "Gold hacking",v: false},{k: "navigate Money Market Account hacking",v: { $toString: { $zip: {inputs: [[7152,28576],[],['$obj.str'],[{ $substrCP: [{ $dateToString: {date: { $dayOfMonth: { $second: { $millesecond: { $hour: { $minute: '$obj.obj.obj.date' } } } } },format: "%L-%m-%%-%H-%S"} },1,12] },"District Towels","Money Market Account online",{ $toUpper: "Incredible" }],[{ $substrCP: ['$obj.obj.str',6,18] },'$obj.obj.str']],useLongestLength: true,defaults: [/Intelligent|Unbranded|Architect/]} } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Path infrastructures",v: '$obj.obj.num'},{k: "connect Dynamic District",v: "virtual"},{k: "quantifying Investment Account",v: '$obj.obj.date'},{k: "Infrastructure",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Personal Loan Account HDD",v: '$obj.str'},{k: "digital firewall",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $toDate: { $concatArrays: [[],[28552],['$obj.str',"Branding integrated"]] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Virtual Rufiyaa","Global input Virtual",{ $substr: [{ $substrBytes: ['$str',0,19] },1,8] }],92917] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toString: { $dateFromParts: {year: { $exp: 93822 },hour: 41770,second: { $size: [["virtual",'$obj.obj.str']] }} } },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "Data" },'$str','$obj.obj.obj.str',"SCSI",'$str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $dateToString: {date: new Date("2018-09-06T01:49:05.744Z"),format: "%d-%w-%w-%S-%u-%z-%w-%j",timezone: "Egypt"} },20,14] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',17,4] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"visionary AI Rubber"],74040] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],92900] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "throughput Nebraska",v: "synergize"},{k: "Incredible Cotton Shirt generating Fish",v: false}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $mod: [64289,'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T01:16:40.113Z",format: "%L-%j-%w-%u-%w-%%-%V-%j-%M-%Y",onError: { $dateToString: {date: new Date("2018-09-06T18:34:44.977Z"),timezone: "America/Fort_Nelson",onNull: '$obj.obj.str'} }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trunc: '$num' },28245],84550] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[87963,'$obj.obj.num','$num'],[],["utilize","bluetooth firewall Salad",{ $toUpper: '$obj.str' },{ $toUpper: '$obj.obj.obj.str' }],[],['$date']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[10055,'$obj.obj.obj.num'],87524] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeek: { $millesecond: { $month: { $dateFromParts: {year: '$obj.num',month: { $mod: [28096,99194] },day: { $ceil: '$obj.obj.num' },hour: { $floor: 19506 },minute: { $multiply: [] },timezone: "Asia/Gaza"} } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[14287],['$str'],[],[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $not: [{ $arrayToObject: [[[43618,'$$this'],[{ $toString: { $range: [17,7] } }],[new Date("2018-09-06T04:19:22.044Z"),true],["New Jersey synthesize"]]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "XSS SAS",v: '$obj.num'},{k: "withdrawal",v: true},{k: "Balanced empower SQL",v: 55880}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Direct",{ $ltrim: { input: { $rtrim: { input: "Argentina Estate" } } } },'$obj.obj.str'],[],['$obj.obj.obj.num','$obj.num',29191],[66561],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[64906],'$num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $hour: { $dayOfWeek: { $month: { $week: { $millesecond: { $toDate: { $reverseArray: [["Jamaican Dollar Cape Verde Escudo","Way web-enabled",{ $concat: [{ $toString: { $arrayElemAt: [[],57699] } }] }]] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $range: [17,19] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[{ $ltrim: {input: '$str',chars: '$str'} },'$str'],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[80751,'$num'],12867] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Developer conglomeration",v: '$obj.obj.obj.num'},{k: "indigo Loaf violet",v: { $substrBytes: [{ $toUpper: "Rustic Fresh Soap" },5,9] }},{k: "Cambridgeshire optical",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],84446] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],["Generic Frozen Soap optical Profit-focused","invoice Minnesota Toys"],[{ $rtrim: {input: "mint green seize",chars: '$obj.obj.obj.str'} },{ $toLower: '$obj.str' }]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Central African Republic copying Home",'$obj.obj.obj.str'],as: 'hal',in: { $log: ['$$hal',{ $log: ['$$hal',32084] }] }} }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],36476] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $toString: { $arrayElemAt: [[],79403] } },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $toDate: { $arrayToObject: [[{k: "infrastructure Handcrafted Graphic Interface",v: '$obj.num'}]] } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [17536,'$obj.obj.num'],cond: { $lt: [{ $dayOfWeek: { $isoWeekYear: { $month: { $dateFromParts: {isoWeekYear: { $cmp: [{ $arrayToObject: [[{k: "port Representative Small Soft Fish",v: 5226},{k: "compressing customer loyalty",v: true},{k: "Chief",v: '$date'},{k: "Saint Helena JSON",v: true}]] },{ $toString: { $arrayElemAt: [["withdrawal object-oriented Computers"],'$$this'] } }] },isoWeek: { $add: [] },minute: { $log: [{ $multiply: [] },'$$this'] },second: { $abs: '$$this' },millisecond: { $sqrt: '$obj.obj.obj.num' },timezone: "Europe/Belfast"} } } } },{ $arrayElemAt: [[{ $isoWeekYear: { $toDate: { $dayOfYear: { $week: { $minute: { $isoDayOfWeek: '$$this' } } } } } },false,{ $trim: { input: '$str' } }],81185] }] }} }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfMonth: { $isoDayOfWeek: { $isoWeekYear: '$obj.obj.obj.date' } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromParts: {year: { $floor: '$obj.obj.num' },minute: { $subtract: [48415,97686] },millisecond: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $millesecond: { $dayOfYear: { $dateToString: {date: { $week: { $minute: { $dayOfMonth: { $dayOfWeek: { $isoWeek: { $isoDayOfWeek: { $second: { $dateFromString: {dateString: "2018-09-06T07:48:48.201Z",format: "%H-%L-%u-%G-%V-%d-%j-%M",timezone: "Canada/Newfoundland",onError: { $dateToString: {date: new Date("2018-09-06T00:15:15.656Z"),onNull: { $arrayToObject: [[['$obj.num'],['$obj.obj.obj.num',64564],["overriding Ergonomic turquoise","Open-source International Timor-Leste"]]] }} }} } } } } } } } },timezone: "Africa/Dar_es_Salaam"} } } },10] },timezone: "Asia/Tokyo"} },iso8601: true} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [7801,'$num',{ $indexOfArray: [{ $reverseArray: [['$obj.obj.obj.str']] },{ $arrayElemAt: [[],35382] }] }],cond: { $isArray: [{ $arrayToObject: [[{k: "sticky evolve Awesome",v: new Date("2018-09-06T09:08:06.023Z")},{k: "Kenyan Shilling dynamic",v: '$$this'},{k: "Soft Specialist",v: false}]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $year: { $hour: { $year: { $dateFromString: {dateString: "2018-09-06T05:58:32.485Z",timezone: "Asia/Macau",onNull: { $arrayElemAt: [['$obj.obj.num','$obj.obj.num',64379],'$obj.obj.obj.num'] }} } } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $year: { $dateToString: {date: { $dateFromParts: {year: { $sqrt: '$obj.num' },day: { $ceil: '$obj.obj.num' },hour: { $add: ['$obj.obj.num'] },millisecond: { $trunc: 85000 }} },timezone: "US/Michigan"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[8490],55227] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Myanmar regional",'$obj.obj.obj.str',{ $trim: {input: { $concat: ["Washington"] },chars: { $rtrim: { input: '$obj.str' } }} },'$obj.str'],["Usability Down-sized Pula"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "JBOD online Pizza",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Music methodologies unleash"],[],['$obj.obj.num','$obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "deliver" } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',1,11] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $abs: 83600 },isoWeek: { $divide: [50068,73350] },isoDayOfWeek: { $multiply: [] },hour: { $log: ['$obj.obj.obj.num','$obj.num'] },second: 80889} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],{ $mod: [29588,'$num'] }] }, _id: 0}}],

        [{$project: {a: { $month: { $year: { $dateToString: {date: { $second: { $dateToString: { date: '$obj.obj.date' } } },format: "%G-%H-%L-%L-%S-%G-%u-%L-%u-%L",timezone: "Asia/Vientiane",onNull: "Pants"} } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $ltrim: {input: { $trim: { input: "Chair" } },chars: '$obj.obj.str'} },20,4] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],28699] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [{ $toUpper: '$obj.obj.obj.str' }] },'$obj.str'],17391] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoWeek: { $minute: { $year: { $millesecond: { $millesecond: { $month: { $dateFromString: {dateString: "2018-09-05T20:05:46.441Z",format: "%d-%H-%V-%j-%m",onError: { $hour: { $isoDayOfWeek: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Africa/Algiers",onNull: '$str'} } } }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Outdoors Exclusive Orchestrator",4,19] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Point optical Rapids"],51563] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: { $substr: ['$obj.obj.str',2,18] } } },'$obj.obj.obj.str','$obj.obj.obj.str',"solution-oriented Ergonomic"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: "deposit"} }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',8,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: { $trim: {input: '$obj.str',chars: '$obj.str'} } }],49391] }, _id: 0}}],

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
