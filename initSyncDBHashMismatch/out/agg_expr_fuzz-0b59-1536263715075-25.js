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
        return coll.insert({_id: 15556,str: "West Virginia 24 hour",num: 53265,date: new Date("2018-09-06T05:52:20.089Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15557,str: "Savings Account Programmable",num: 91667,date: new Date("2018-09-05T23:08:31.880Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15558,str: "United States Minor Outlying Islands bypass",num: 93445,date: new Date("2018-09-06T16:17:54.294Z"),array: ["customized maroon",new Date("2018-09-06T02:23:56.552Z"),"Paraguay",[],[],56707,67154,new Date("2018-09-06T02:15:26.011Z"),7234,"Awesome Concrete Mouse input Sleek",new Date("2018-09-06T07:48:07.441Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15559,num: 23034,date: new Date("2018-09-06T18:29:47.745Z"),array: [],obj: {_id: 15560,str: "CSS invoice compress",num: 92373,array: ["world-class",53156,new Date("2018-09-06T18:44:52.602Z"),{_id: 15561,str: "Morocco parsing Research",date: new Date("2018-09-06T19:50:34.096Z"),obj: {}},27300,{_id: 15562,str: "Mall",num: 31726,date: new Date("2018-09-06T04:23:12.868Z"),array: [20686,new Date("2018-09-06T08:36:19.305Z")],obj: {}},new Date("2018-09-06T07:56:22.142Z"),21291,"Vietnam",new Date("2018-09-06T10:16:29.475Z"),[],"Future",[{_id: 15563,str: "hacking",num: 55469,date: new Date("2018-09-06T12:38:51.657Z"),obj: {_id: 15564,num: 53300,array: []}},49826,[61968,"hard drive"]]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15565,str: "Technician Practical Concrete Cheese",num: 19998,date: new Date("2018-09-06T15:28:15.613Z"),obj: {_id: 15566,str: "teal forecast",num: 75387,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15567,str: "projection Future",num: 21058,date: new Date("2018-09-06T05:31:44.780Z"),array: [28583,new Date("2018-09-06T04:40:01.495Z"),75606,31569,new Date("2018-09-06T11:35:41.477Z"),"convergence Practical","Investment Account France",{_id: 15568,str: "Toys port",num: 99381,date: new Date("2018-09-06T15:59:53.464Z"),array: [],obj: {}},new Date("2018-09-06T19:53:20.854Z"),{_id: 15569,str: "Electronics Brunei Dollar",num: 77836,date: new Date("2018-09-06T08:47:33.147Z"),obj: {_id: 15570,str: "Money Market Account Home Loan Account",num: 22981,date: new Date("2018-09-05T21:44:52.680Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 15571,str: "embrace Virginia",num: 31155,date: new Date("2018-09-06T03:45:33.666Z"),array: [new Date("2018-09-05T21:06:40.783Z"),"payment Cuban Peso Peso Convertible Metrics",new Date("2018-09-06T08:27:33.269Z"),21153,49787,{_id: 15572,str: "Oregon Danish Krone Fantastic",num: 46301,array: [],obj: {}},new Date("2018-09-06T04:09:58.063Z"),"blue",new Date("2018-09-06T12:23:40.202Z"),59815,[15191,[new Date("2018-09-06T13:26:00.268Z"),"Ergonomic Maldives Court",{_id: 15573,str: "Baby Toys compress",num: 5397,date: new Date("2018-09-05T20:29:22.018Z"),array: [],obj: {_id: 15574,str: "Unbranded Plastic Soap Cotton",date: new Date("2018-09-06T19:47:11.485Z"),array: []}},"Burundi Franc"]],"solid state"]});
    },

    function(coll) {
        return coll.insert({_id: 15575,str: "overriding recontextualize",num: 79189,date: new Date("2018-09-06T13:49:59.083Z"),array: [new Date("2018-09-06T04:52:10.973Z"),76047,"calculate Portugal calculating","Kenyan Shilling Kina",93703,new Date("2018-09-05T22:09:22.643Z"),{_id: 15576,str: "Credit Card Account",num: 19683,date: new Date("2018-09-06T13:26:05.902Z"),array: [],obj: {_id: 15577,str: "Ways Points Ball",num: 79920,array: [{_id: 15578,str: "USB EXE",num: 22494,date: new Date("2018-09-06T04:02:18.290Z"),array: []},73492],obj: {}}},{_id: 15579,date: new Date("2018-09-06T17:54:27.348Z"),obj: {_id: 15580,str: "Borders Handmade Frozen Car",num: 30116,date: new Date("2018-09-05T20:37:40.420Z"),obj: {}}},new Date("2018-09-06T07:03:22.377Z"),new Date("2018-09-06T01:26:35.686Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15581,str: "circuit Associate",date: new Date("2018-09-06T16:05:31.372Z"),array: [],obj: {_id: 15582,str: "synergy",num: 6411,date: new Date("2018-09-06T06:17:13.411Z"),array: [[],"Auto Loan Account Legacy Automotive",new Date("2018-09-06T00:31:22.449Z"),"Future tertiary District",87935,new Date("2018-09-05T20:18:57.134Z"),26026,{_id: 15583,num: 51426,date: new Date("2018-09-06T02:01:35.801Z"),array: [92608,{_id: 15584,str: "Manager",date: new Date("2018-09-06T14:48:01.588Z"),obj: {_id: 15585,str: "optical Applications invoice",num: 47210,array: [],obj: {_id: 15586,num: 24639,date: new Date("2018-09-06T19:38:07.114Z"),array: [["HTTP Buckinghamshire","Small",new Date("2018-09-06T16:56:59.153Z")]]}}},new Date("2018-09-06T10:08:27.176Z")]},97709,"Analyst hacking",new Date("2018-09-05T21:42:10.126Z"),"solutions withdrawal"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15587,num: 9724,date: new Date("2018-09-05T23:23:44.673Z"),array: [60346,{_id: 15588,str: "Borders homogeneous mission-critical",num: 78470,array: [[],new Date("2018-09-06T02:28:00.966Z"),new Date("2018-09-06T08:31:11.443Z"),"Tasty Producer","South Carolina Intelligent Steel Chair"]},{_id: 15589,str: "Health CSS",num: 35589,obj: {}},18293,[],new Date("2018-09-05T22:46:54.027Z"),19323,19824,{_id: 15590,str: "migration bluetooth Flat",date: new Date("2018-09-06T14:47:29.853Z"),array: [],obj: {}},"Customizable","repurpose"],obj: {_id: 15591,str: "Borders West Virginia",date: new Date("2018-09-06T02:10:41.204Z"),obj: {_id: 15592,num: 37223,date: new Date("2018-09-06T12:40:32.055Z"),array: [66224],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15593,str: "AGP Developer",num: 9914,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15594,str: "Buckinghamshire",num: 50879,date: new Date("2018-09-06T05:03:21.682Z"),array: ["silver multi-state knowledge user",86949,67175,"vertical Bahrain",new Date("2018-09-06T05:27:18.143Z"),"Uruguay Web",new Date("2018-09-06T11:02:04.949Z"),{_id: 15595,str: "Reduced throughput",num: 79582,date: new Date("2018-09-06T07:24:54.879Z"),array: [],obj: {_id: 15596,str: "SQL synthesize",num: 90340,date: new Date("2018-09-06T13:36:31.266Z"),obj: {_id: 15597,obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 15598,str: "Extended",num: 66912,date: new Date("2018-09-06T14:35:51.125Z")});
    },

    function(coll) {
        return coll.insert({_id: 15599,str: "Implemented next-generation generating",num: 88907,date: new Date("2018-09-06T09:41:31.950Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15600,str: "Identity Awesome magenta",num: 9373,date: new Date("2018-09-06T01:49:11.359Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15601,str: "pink platforms",num: 18373,date: new Date("2018-09-06T02:40:01.055Z"),array: [9693,29299,[],"XSS",{_id: 15602,str: "Streamlined e-commerce Salad",num: 22132,date: new Date("2018-09-06T16:37:37.181Z"),array: [{_id: 15603,str: "invoice Fish turquoise",date: new Date("2018-09-06T00:53:45.225Z"),array: [],obj: {}},new Date("2018-09-06T10:07:56.651Z"),new Date("2018-09-06T16:12:47.883Z")],obj: {_id: 15604,str: "virtual Optimization Front-line",date: new Date("2018-09-06T04:59:42.466Z")}},41404,new Date("2018-09-06T17:02:53.550Z"),"TCP Pike",43131]});
    },

    function(coll) {
        return coll.insert({_id: 15605,str: "plum",date: new Date("2018-09-06T04:22:38.695Z"),array: [new Date("2018-09-06T10:46:13.094Z"),47693,18872,new Date("2018-09-06T01:57:03.959Z"),"hacking","analyzer",{_id: 15606,str: "digital HTTP",num: 12508,array: [],obj: {}},{_id: 15607,str: "Integration exploit Customer",num: 559,date: new Date("2018-09-06T14:28:33.227Z"),array: [],obj: {_id: 15608,num: 70456,date: new Date("2018-09-06T14:33:46.941Z"),obj: {_id: 15609,str: "National online mint green",num: 59099}}},12747,"XSS Implemented",[new Date("2018-09-05T22:48:48.224Z"),{_id: 15610,str: "XML",date: new Date("2018-09-06T05:54:36.411Z"),array: [],obj: {}},new Date("2018-09-05T20:30:11.738Z")],"Tasty Producer Cotton"],obj: {_id: 15611,str: "Team-oriented International",num: 65191,date: new Date("2018-09-06T03:53:13.898Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15612,str: "vortals mobile Pakistan Rupee",num: 4692,date: new Date("2018-09-06T13:07:32.185Z"),array: [new Date("2018-09-06T12:11:12.830Z"),new Date("2018-09-05T20:02:49.915Z"),"Avon Oregon",42509,[],76694,new Date("2018-09-06T10:04:02.641Z"),{_id: 15613,str: "multimedia invoice",num: 54607,date: new Date("2018-09-06T11:24:41.517Z"),array: [["Data"]],obj: {}},"payment","transmit",new Date("2018-09-06T13:48:55.377Z"),97403],obj: {_id: 15614,str: "calculating",date: new Date("2018-09-06T06:25:56.943Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15615,str: "transmitting",num: 7335,date: new Date("2018-09-06T17:56:07.648Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15616,str: "Comoros",num: 79036,array: ["Up-sized withdrawal",new Date("2018-09-06T12:09:06.787Z"),92655,6221,70584,new Date("2018-09-06T10:02:14.001Z"),"Associate",new Date("2018-09-06T14:19:06.254Z"),"visualize copy",[],"SDD"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15617,str: "South Carolina",num: 7259,date: new Date("2018-09-06T04:54:29.419Z"),array: [47084,"payment Pants",[21592,14144,new Date("2018-09-06T09:05:34.183Z")],33417,"orange Investment Account",new Date("2018-09-06T09:30:33.463Z"),new Date("2018-09-06T02:06:01.475Z"),99611,"engage Rustic Cotton Sausages Soft",{_id: 15618,date: new Date("2018-09-06T17:33:59.064Z"),array: [],obj: {_id: 15619,str: "turquoise Ohio",num: 87557,date: new Date("2018-09-06T04:00:28.931Z"),obj: {_id: 15620,str: "Savings Account",num: 52001,array: [],obj: {}}}},[],[],new Date("2018-09-06T00:55:12.710Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15621,str: "Baby Awesome",date: new Date("2018-09-06T19:09:12.855Z"),array: [new Date("2018-09-06T16:17:28.399Z"),29768,"brand",new Date("2018-09-06T16:17:10.553Z"),86541,"scale Corner",[],75524,{_id: 15622,str: "SAS real-time deposit",num: 99512,date: new Date("2018-09-06T16:13:31.341Z"),array: [],obj: {_id: 15623,str: "orchid Officer",num: 33875,date: new Date("2018-09-06T14:50:44.784Z"),array: [new Date("2018-09-06T05:15:04.549Z"),"Music"],obj: {}}},"Fantastic Metal Gloves Handcrafted Plastic Chair Exclusive","Illinois"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15624,str: "Credit Card Account",num: 8755,array: ["Indiana",new Date("2018-09-06T09:22:31.259Z"),new Date("2018-09-06T12:52:40.380Z"),new Date("2018-09-06T19:24:01.303Z"),"challenge",82061,{_id: 15625,str: "incremental Devolved",num: 9086,date: new Date("2018-09-06T18:43:52.959Z"),array: [57270,37809,["Buckinghamshire infrastructures"],"invoice withdrawal digital"],obj: {}},{_id: 15626,str: "Manager frictionless revolutionary",num: 13144,date: new Date("2018-09-06T06:54:17.315Z"),array: [],obj: {_id: 15627,num: 57727,date: new Date("2018-09-06T01:17:30.558Z"),obj: {_id: 15628,str: "Bacon Graphic Interface",num: 20306,date: new Date("2018-09-06T10:03:06.312Z"),obj: {}}}},95541,new Date("2018-09-06T14:10:48.791Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 15629,str: "Cambridgeshire Technician matrix",num: 54297,date: new Date("2018-09-05T22:18:05.766Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15630,str: "withdrawal Cedi knowledge base",num: 79753,date: new Date("2018-09-06T17:37:35.737Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15631,str: "Granite",num: 57755,date: new Date("2018-09-06T15:24:13.539Z"),array: [],obj: {_id: 15632,num: 82307,date: new Date("2018-09-05T23:47:31.557Z"),array: [new Date("2018-09-05T22:51:02.889Z"),{_id: 15633,str: "withdrawal auxiliary violet",date: new Date("2018-09-06T16:53:10.226Z"),array: []},"synergize Metical",new Date("2018-09-06T04:47:43.053Z"),29523,[],"withdrawal Equatorial Guinea","Global Lao People's Democratic Republic Home Loan Account"]}});
    },

    function(coll) {
        return coll.insert({_id: 15634,str: "generate IB",num: 9710,date: new Date("2018-09-06T07:01:39.354Z"),array: [],obj: {_id: 15635,str: "Handmade",num: 89583,date: new Date("2018-09-06T16:23:58.902Z"),array: [new Date("2018-09-06T13:10:00.218Z"),45221,30780,"Sharable",new Date("2018-09-06T16:57:32.201Z"),"reboot payment Mali",{_id: 15636,date: new Date("2018-09-06T18:03:40.935Z")},new Date("2018-09-06T09:14:39.473Z"),61594,"PNG Montana",{_id: 15637,str: "Incredible Strategist Run",date: new Date("2018-09-06T14:31:27.716Z"),array: ["Table Cross-platform",71968,new Date("2018-09-06T15:55:30.154Z"),7099]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15638,str: "vertical",num: 2527,date: new Date("2018-09-05T21:54:02.323Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15639,str: "CSS",date: new Date("2018-09-05T21:44:06.762Z"),array: [],obj: {_id: 15640,num: 34187,date: new Date("2018-09-06T13:31:58.063Z"),array: [],obj: {_id: 15641,str: "Ergonomic Netherlands Antillian Guilder",num: 81746,array: ["AI",new Date("2018-09-06T11:01:49.567Z"),89498,"fault-tolerant program Accountability",23797,35084],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15642,str: "Steel Direct",num: 22485,date: new Date("2018-09-06T15:42:26.721Z"),array: [22797,"Stand-alone","Plastic Zloty deploy",new Date("2018-09-06T15:17:31.258Z"),["India"],58731,[35046,{_id: 15643,str: "override",num: 35232,date: new Date("2018-09-06T14:11:03.190Z"),array: [],obj: {_id: 15644,date: new Date("2018-09-06T04:20:06.903Z"),array: [],obj: {_id: 15645,str: "primary Seychelles Libyan Arab Jamahiriya",num: 5040,obj: {}}}},new Date("2018-09-06T10:50:01.330Z")],new Date("2018-09-05T23:19:03.792Z"),"regional SCSI",9874,"firewall Central Associate",new Date("2018-09-06T15:31:25.982Z")]});
    },

    function(coll) {
        return coll.insert({_id: 15646,str: "Buckinghamshire National",num: 67757,date: new Date("2018-09-06T10:29:05.636Z"),array: [42316,new Date("2018-09-06T08:42:15.442Z"),45189,new Date("2018-09-06T06:48:27.794Z"),new Date("2018-09-06T09:21:03.572Z"),"Cuban Peso Peso Convertible","digital Branch Boliviano Mvdol","Coordinator global optical",[],{_id: 15647,str: "Falkland Islands (Malvinas) connecting",num: 36711,date: new Date("2018-09-06T05:48:22.439Z"),array: [{_id: 15648,array: [new Date("2018-09-06T06:26:59.256Z"),74097],obj: {_id: 15649,str: "River Swedish Krona ubiquitous",num: 86266,date: new Date("2018-09-05T22:19:09.815Z"),array: [],obj: {}}},"IB","Games 1080p systems"]},92303,{_id: 15650,num: 36203,date: new Date("2018-09-06T19:44:34.220Z"),array: [],obj: {}},{_id: 15651,str: "Forward IB Home Loan Account",obj: {_id: 15652,str: "Money Market Account",num: 63400,array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 15653,str: "deposit Identity interface",date: new Date("2018-09-06T16:09:32.842Z"),array: [87279,"Light",new Date("2018-09-05T20:59:41.176Z"),new Date("2018-09-06T08:48:37.994Z"),[],new Date("2018-09-06T11:17:46.962Z"),36970,"grow",new Date("2018-09-06T06:10:50.914Z"),{_id: 15654,str: "Orchestrator Table",num: 28732,date: new Date("2018-09-06T19:26:58.490Z"),array: ["Unbranded Intelligent",44427],obj: {_id: 15655,str: "transmitter payment",num: 7381,date: new Date("2018-09-05T22:00:52.399Z")}},"Chief SCSI impactful",32243],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15656,num: 95645,array: ["open system Salad","Central Tasty Soap",893,"installation",{_id: 15657,str: "cyan invoice Granite",num: 77276,date: new Date("2018-09-05T23:16:40.798Z"),array: [],obj: {_id: 15658,str: "back up functionalities Oklahoma",num: 52863,date: new Date("2018-09-06T15:10:20.374Z"),array: [new Date("2018-09-06T02:57:52.105Z"),"capacity Licensed",56058],obj: {_id: 15659,date: new Date("2018-09-06T19:39:58.298Z"),array: []}}},35002,{_id: 15660,str: "Down-sized invoice",num: 18833,obj: {}},[],new Date("2018-09-06T13:33:10.335Z"),[new Date("2018-09-06T08:30:41.516Z")],new Date("2018-09-06T16:02:04.095Z"),87595],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15661,str: "Computer Ghana Solutions",num: 95518,array: [99750,new Date("2018-09-06T12:30:45.200Z"),new Date("2018-09-06T05:46:44.405Z"),"invoice system","Sleek Rubber Sausages",28960,53780,new Date("2018-09-06T01:56:08.339Z"),"Causeway Identity",24826],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15662,str: "International Home Loan Account Sleek",num: 92631,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15663,str: "project Netherlands Antillian Guilder index",num: 32335,date: new Date("2018-09-05T21:58:06.254Z"),array: [],obj: {_id: 15664,str: "calculate Forward withdrawal",num: 3231,date: new Date("2018-09-05T21:27:12.733Z"),array: [{_id: 15665,str: "Representative",num: 60971,date: new Date("2018-09-06T16:51:28.817Z"),obj: {}},[],new Date("2018-09-06T11:59:17.505Z"),32297,new Date("2018-09-05T21:24:32.517Z"),"blue global Moroccan Dirham","Philippines",[73012,"interfaces sky blue"],30404,new Date("2018-09-05T23:21:48.109Z"),new Date("2018-09-06T06:54:17.368Z"),"Mississippi Borders compressing"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15666,str: "Internal Music challenge",num: 38500,date: new Date("2018-09-06T19:28:19.263Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15667,str: "B2C New York",num: 11348,array: [62277,new Date("2018-09-06T01:12:09.764Z"),"transitional Generic bluetooth","projection",63282,new Date("2018-09-06T04:15:45.423Z"),{_id: 15668,str: "Oklahoma parse",num: 26796,date: new Date("2018-09-06T18:18:37.666Z"),array: [],obj: {_id: 15669,str: "integrate",num: 34133,date: new Date("2018-09-06T04:43:20.766Z"),array: [],obj: {}}},"empower Metrics",3260,new Date("2018-09-06T03:41:56.305Z"),new Date("2018-09-06T12:40:23.443Z"),{_id: 15670,date: new Date("2018-09-06T13:38:25.856Z"),array: [[],{_id: 15671,str: "Enhanced Cotton",num: 34976,date: new Date("2018-09-06T05:13:01.997Z"),obj: {}}],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 15672,str: "groupware concept",num: 34840,date: new Date("2018-09-06T19:08:49.093Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15673,str: "non-volatile",num: 58292,date: new Date("2018-09-06T09:06:27.381Z"),array: [[60375,new Date("2018-09-06T13:02:02.164Z"),77042,{_id: 15674,str: "invoice Arkansas",num: 43566,date: new Date("2018-09-06T13:14:20.829Z"),array: [],obj: {}},93875],new Date("2018-09-06T01:49:16.018Z"),"monitor Metal",new Date("2018-09-06T04:55:02.948Z"),18832,[],"Consultant European Unit of Account 9(E.U.A.-9) vertical",new Date("2018-09-05T22:23:47.667Z"),"didactic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15675,str: "deposit",num: 33896,date: new Date("2018-09-06T00:55:21.401Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15676,str: "bluetooth",num: 85201,array: [],obj: {_id: 15677,str: "Planner Integration",num: 55039,date: new Date("2018-09-06T16:46:17.207Z"),array: [new Date("2018-09-06T03:38:29.703Z"),"Music Auto Loan Account",new Date("2018-09-06T12:39:54.419Z"),"task-force invoice",{_id: 15678,array: [32524,"Interactions"],obj: {}},new Date("2018-09-06T14:20:45.021Z"),"navigate Organized",new Date("2018-09-06T06:30:17.814Z"),"SSL Human Universal",43069,[]],obj: {_id: 15679,str: "middleware National New Hampshire",num: 91012,date: new Date("2018-09-05T20:01:31.377Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15680,str: "bypass portals",date: new Date("2018-09-06T09:31:31.791Z"),array: ["Som Practical dynamic",88951,[new Date("2018-09-06T14:16:18.675Z")],19286,"Research Handmade Cotton Towels Shoes",new Date("2018-09-06T06:51:24.877Z"),"Cuba Sausages",39969,new Date("2018-09-06T02:43:22.528Z"),"primary",[38874,{_id: 15681,str: "synthesize Automotive",num: 52266,date: new Date("2018-09-05T23:53:13.186Z"),obj: {}}],{_id: 15682,str: "XML Investment Account",num: 94638,date: new Date("2018-09-06T05:39:29.737Z"),array: []},58711],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15683,str: "Outdoors Keyboard",num: 74305,date: new Date("2018-09-06T17:46:47.021Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15684,str: "Operations attitude",num: 88270,date: new Date("2018-09-06T02:40:37.016Z"),array: ["De-engineered web-enabled Division","conglomeration programming invoice",new Date("2018-09-06T03:09:28.479Z"),"portals calculating online",new Date("2018-09-05T22:01:34.950Z"),49647,24273,new Date("2018-09-05T22:45:00.364Z"),"Wisconsin",[97482],{_id: 15685,str: "front-end",num: 788,array: [],obj: {}},[],29999],obj: {_id: 15686,str: "streamline Fields extend",num: 74887,date: new Date("2018-09-06T19:10:04.339Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15687,str: "Fantastic Israel",num: 72271,date: new Date("2018-09-06T07:04:09.052Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15688,str: "Bike back up",num: 54971,array: []});
    },

    function(coll) {
        return coll.insert({_id: 15689,str: "lime",num: 41721,date: new Date("2018-09-06T06:23:24.855Z"),array: [13931,"Principal pixel bypass",[],{_id: 15690,str: "withdrawal 3rd generation",num: 18682,date: new Date("2018-09-06T05:38:25.617Z"),array: [new Date("2018-09-06T02:37:35.165Z"),73441,new Date("2018-09-06T13:34:06.362Z"),new Date("2018-09-06T17:58:38.975Z")],obj: {}},11646,9221,"Buckinghamshire Games",new Date("2018-09-06T11:54:44.908Z"),new Date("2018-09-06T11:01:02.674Z"),"Rustic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15691,str: "Bridge Steel Vision-oriented",date: new Date("2018-09-06T17:22:47.953Z"),array: [],obj: {_id: 15692,str: "interfaces Idaho systems",num: 93248,date: new Date("2018-09-06T04:56:39.916Z"),array: [4556,"intranet Forest Multi-channelled",new Date("2018-09-06T13:02:10.010Z"),{_id: 15693,num: 86059,date: new Date("2018-09-06T07:29:20.494Z"),array: [63360,"Micronesia generate",31996]},new Date("2018-09-06T03:47:49.109Z"),[],21015,"incubate",[new Date("2018-09-06T01:23:02.764Z"),{_id: 15694,str: "models Persevering",num: 97982,obj: {}}],"back up value-added backing up",[],"value-added Chair invoice"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15695,str: "back up",date: new Date("2018-09-06T02:35:20.483Z"),array: [],obj: {_id: 15696,str: "Implementation Agent",num: 67674,date: new Date("2018-09-06T07:16:43.336Z"),array: ["front-end",new Date("2018-09-06T17:27:36.752Z"),36940,new Date("2018-09-06T04:47:48.598Z"),"infomediaries","Granite Executive",new Date("2018-09-06T19:35:26.112Z"),[86327,{_id: 15697,str: "Ohio Gambia",num: 43015,array: [],obj: {_id: 15698,str: "firewall",num: 89726,date: new Date("2018-09-05T21:44:07.150Z"),array: []}}],{_id: 15699,str: "Car",num: 60086,date: new Date("2018-09-06T03:06:07.547Z")},{_id: 15700,array: [66740],obj: {}},9665,new Date("2018-09-06T08:58:03.398Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 15701,str: "Grocery override Costa Rica",num: 84747,array: [new Date("2018-09-06T04:32:35.645Z"),"Tools","throughput convergence",new Date("2018-09-06T11:21:42.913Z"),{_id: 15702,str: "Credit Card Account Egyptian Pound",date: new Date("2018-09-06T09:50:43.655Z"),array: [[],[42894],new Date("2018-09-06T01:48:21.039Z"),"Germany Towels grow"],obj: {}},"Rhode Island Maine quantify",73266,new Date("2018-09-05T22:50:49.926Z"),{_id: 15703,date: new Date("2018-09-06T04:54:27.790Z"),array: [],obj: {}},69946],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15704,num: 32831,date: new Date("2018-09-06T10:25:45.739Z"),array: [],obj: {_id: 15705,str: "Incredible",num: 20293,date: new Date("2018-09-06T02:56:20.428Z"),array: [{_id: 15706,str: "back-end",date: new Date("2018-09-06T10:43:41.527Z"),array: ["attitude-oriented violet"],obj: {}},36263,76842,54019,"Niger",new Date("2018-09-05T20:58:58.408Z"),new Date("2018-09-06T16:20:39.412Z"),new Date("2018-09-06T13:17:11.899Z"),"Re-engineered Cuban Peso Peso Convertible Games","markets","Planner"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15707,str: "Practical",num: 84391,date: new Date("2018-09-05T21:55:49.780Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15708,str: "Persevering Electronics parsing",num: 12347,date: new Date("2018-09-06T19:20:08.555Z"),array: [],obj: {_id: 15709,str: "enable synergistic Salad",num: 57902,date: new Date("2018-09-05T20:51:24.120Z"),array: [new Date("2018-09-05T23:13:05.517Z"),["neural",[],"bleeding-edge Integration"],"Markets logistical",64684,new Date("2018-09-06T15:43:40.752Z"),new Date("2018-09-06T13:02:23.938Z"),"adapter Avon",{_id: 15710,date: new Date("2018-09-06T08:50:18.191Z"),obj: {}},27046,{_id: 15711,str: "Books Pizza",date: new Date("2018-09-06T06:29:23.259Z"),array: [[]]}],obj: {_id: 15712,str: "Unbranded Fresh Keyboard e-business",num: 65584,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15713,str: "Forint Branding",num: 75927,date: new Date("2018-09-06T05:35:56.585Z"),array: [new Date("2018-09-05T22:57:40.354Z"),"open-source Massachusetts",[],new Date("2018-09-06T10:53:19.725Z"),59876,71306,"Technician Beauty",{_id: 15714,str: "Rhode Island",num: 24033,date: new Date("2018-09-05T22:23:13.460Z"),array: [],obj: {}},"Handcrafted","transform",new Date("2018-09-06T09:53:17.610Z"),new Date("2018-09-06T12:18:46.686Z")],obj: {_id: 15715,str: "China Configurable",num: 3484,date: new Date("2018-09-06T01:09:05.164Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15716,str: "Montana Awesome Granite Sausages Gloves",date: new Date("2018-09-05T22:48:30.929Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15717,str: "yellow Metal West Virginia",num: 95482,date: new Date("2018-09-06T05:39:46.929Z"),array: [new Date("2018-09-06T01:10:01.635Z"),{_id: 15718,num: 70059,date: new Date("2018-09-06T04:08:30.368Z"),array: [],obj: {}},85009,"USB",new Date("2018-09-06T03:35:57.218Z"),4250,new Date("2018-09-05T21:01:03.863Z"),[],["circuit",new Date("2018-09-06T10:59:56.518Z")],"cultivate Handcrafted",{_id: 15719,str: "South Carolina orchestration Drive",num: 84191,date: new Date("2018-09-06T17:16:20.712Z"),array: [new Date("2018-09-06T04:07:21.133Z"),36068],obj: {_id: 15720,str: "Facilitator payment",num: 50825,date: new Date("2018-09-05T22:43:23.059Z")}},29034],obj: {_id: 15721,str: "back up",num: 30214,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15722,str: "back-end",num: 32373,date: new Date("2018-09-06T18:53:21.722Z"),array: [],obj: {_id: 15723,str: "American Samoa",date: new Date("2018-09-06T08:11:29.749Z"),array: [{_id: 15724,str: "project",num: 39042,date: new Date("2018-09-06T14:20:47.343Z")},"bypassing",20,new Date("2018-09-06T03:16:16.215Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15725,str: "Granite Metal Keyboard",num: 73428,date: new Date("2018-09-06T00:05:30.160Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15726,str: "invoice magenta",num: 88278,date: new Date("2018-09-06T07:01:18.243Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15727,str: "Soap",num: 71367,date: new Date("2018-09-05T21:02:01.967Z"),array: [41996,new Date("2018-09-06T07:33:06.685Z"),83061,["array Fields Creative","bypass parsing PNG",71661,{_id: 15728,str: "open-source Concrete",num: 16123,date: new Date("2018-09-06T13:42:53.615Z"),obj: {}},new Date("2018-09-06T06:04:04.261Z"),{_id: 15729,str: "withdrawal Wallis and Futuna program",num: 98392,array: [10460,"Brand"],obj: {_id: 15730,str: "Shore cross-platform",num: 13732,date: new Date("2018-09-06T15:40:24.379Z"),array: []}},"Bike COM",[],new Date("2018-09-06T06:54:32.025Z"),new Date("2018-09-06T10:09:10.350Z")],{_id: 15731,obj: {}},11277],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15732,str: "deposit paradigms",num: 6072,date: new Date("2018-09-06T10:57:59.732Z"),obj: {_id: 15733,num: 4479,date: new Date("2018-09-06T12:14:08.824Z"),array: [29278,new Date("2018-09-05T21:19:48.617Z"),"Tuna Berkshire withdrawal","Berkshire",{_id: 15734,str: "matrix initiative",num: 94227,date: new Date("2018-09-05T23:26:05.083Z"),array: []},new Date("2018-09-06T11:52:58.155Z"),{_id: 15735,str: "monitor Keyboard",num: 82076,array: [],obj: {_id: 15736,array: [],obj: {}}},"Rand Namibia Dollar Ball Pennsylvania",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 15737,str: "EXE",num: 81868,date: new Date("2018-09-06T00:40:53.556Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15738,str: "Buckinghamshire",num: 62526,date: new Date("2018-09-05T21:53:44.203Z"),array: [],obj: {_id: 15739,str: "Vermont networks",date: new Date("2018-09-05T22:16:08.111Z"),array: [new Date("2018-09-06T00:38:35.756Z"),"Open-architected invoice",92456,{_id: 15740,num: 50125,date: new Date("2018-09-06T10:32:26.107Z"),array: [93144],obj: {}},"multi-byte quantify Soap",[],84039,"Jewelery quantify Security",[[],{_id: 15741,str: "withdrawal",date: new Date("2018-09-06T17:37:49.747Z"),array: [],obj: {_id: 15742,str: "program Tuna collaboration",date: new Date("2018-09-06T08:35:23.356Z"),array: []}}],new Date("2018-09-06T03:07:06.051Z"),new Date("2018-09-06T17:21:11.013Z"),"Coordinator bus",new Date("2018-09-06T02:38:02.049Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15743,str: "end-to-end",num: 20194,date: new Date("2018-09-06T01:24:31.866Z"),obj: {_id: 15744,str: "Auto Loan Account",num: 5194,date: new Date("2018-09-06T04:59:13.722Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15745,str: "redundant solutions",date: new Date("2018-09-06T09:56:35.255Z"),array: [new Date("2018-09-06T01:31:26.811Z"),"redefine Union Chair","architect Monaco",32695,66958,new Date("2018-09-05T21:20:02.594Z"),20184,[[],"Concrete GB",[],12861,"Engineer Stand-alone Kids"],new Date("2018-09-06T18:56:09.634Z")],obj: {_id: 15746,str: "Moldova Progressive Research",num: 83437,date: new Date("2018-09-06T12:22:01.010Z"),array: [],obj: {_id: 15747,str: "Dynamic PNG HTTP",num: 66032,date: new Date("2018-09-06T10:22:00.568Z"),array: [{_id: 15748,str: "utilisation Personal Loan Account Botswana",num: 85191,date: new Date("2018-09-05T20:41:58.594Z"),array: [],obj: {}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15749,str: "COM Generic card",num: 60419,array: [88085,{_id: 15750,str: "knowledge user payment",date: new Date("2018-09-06T01:14:01.716Z"),array: [],obj: {}},new Date("2018-09-06T04:35:54.403Z"),29645,new Date("2018-09-06T08:30:29.589Z"),"Internal",new Date("2018-09-06T02:49:42.851Z"),"copying partnerships",new Date("2018-09-05T23:32:43.633Z"),"Bedfordshire","Sports AI Louisiana",57711,[],[]],obj: {_id: 15751,str: "input Towels",num: 38571,date: new Date("2018-09-06T02:37:35.644Z"),array: [13889,new Date("2018-09-06T15:51:15.984Z")],obj: {_id: 15752,num: 46475,date: new Date("2018-09-06T07:04:43.697Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15753,str: "next generation",num: 75563,date: new Date("2018-09-05T23:21:44.597Z"),array: [],obj: {_id: 15754,num: 59149,date: new Date("2018-09-06T12:30:07.755Z"),array: [{_id: 15755,str: "back up red Home",num: 64124,date: new Date("2018-09-06T19:06:47.106Z"),array: [15605,[]],obj: {_id: 15756,str: "Rupiah",array: [[]]}},{_id: 15757,str: "Credit Card Account",num: 65832,date: new Date("2018-09-06T02:19:54.521Z"),array: [new Date("2018-09-06T12:33:51.354Z"),"Concrete Small",new Date("2018-09-06T16:09:54.797Z"),24048]},"installation",new Date("2018-09-06T02:02:17.555Z"),"payment","Generic Proactive",new Date("2018-09-06T18:24:42.274Z"),new Date("2018-09-06T06:30:03.526Z"),new Date("2018-09-05T20:38:40.093Z"),67276,1168,"synthesizing Silver"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15758,str: "system engine",num: 75696,date: new Date("2018-09-05T22:04:08.196Z"),array: ["Licensed Steel Bacon Buckinghamshire niches",new Date("2018-09-06T15:20:39.080Z"),new Date("2018-09-06T19:29:09.405Z"),4684,[72990,75551],268,"clear-thinking moratorium",{_id: 15759,str: "Forges Garden",num: 64057,array: []},"overriding Pizza District",new Date("2018-09-06T11:07:09.647Z"),{_id: 15760,str: "New Zealand Dollar mint green Benin",date: new Date("2018-09-05T20:42:21.288Z"),array: [{_id: 15761,num: 52500,date: new Date("2018-09-05T20:19:09.390Z"),obj: {_id: 15762,num: 43684,date: new Date("2018-09-06T18:57:32.564Z"),array: [],obj: {}}},"Buckinghamshire maximize Persistent"],obj: {}},50892,new Date("2018-09-06T17:01:21.754Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15763,str: "disintermediate Associate B2C",num: 69860,date: new Date("2018-09-06T07:57:12.380Z"),array: [new Date("2018-09-05T20:04:41.889Z"),86180,{_id: 15764,str: "Tactics Gorgeous Steel Pants",num: 85320,array: [],obj: {}},new Date("2018-09-06T18:13:49.254Z"),50220,"Pines","Cross-group convergence Ukraine","Movies",new Date("2018-09-06T15:55:06.904Z"),new Date("2018-09-06T18:14:38.044Z"),4999,new Date("2018-09-06T13:44:15.369Z"),[],{_id: 15765,num: 10633,date: new Date("2018-09-06T06:24:15.084Z"),array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 15766,str: "Jewelery programming",num: 76399,date: new Date("2018-09-06T03:01:18.852Z"),array: [],obj: {_id: 15767,str: "Cambridgeshire Unbranded Frozen Chicken",num: 47565,date: new Date("2018-09-06T13:36:06.843Z"),array: [64502,new Date("2018-09-06T00:40:08.422Z"),["Internal",{_id: 15768,str: "Chips",num: 72228,date: new Date("2018-09-05T19:56:42.013Z"),array: [],obj: {_id: 15769,str: "Soft aggregate",num: 45701,array: [],obj: {}}},"Distributed functionalities",new Date("2018-09-06T18:59:46.980Z"),84545],[new Date("2018-09-06T10:36:32.527Z"),26173,{_id: 15770,num: 11169,date: new Date("2018-09-06T19:36:51.370Z")}],"Checking Account definition Bedfordshire",new Date("2018-09-06T16:28:22.320Z"),{_id: 15771,array: [],obj: {}},{_id: 15772,str: "Checking Account",date: new Date("2018-09-05T20:29:28.890Z")}]}});
    },

    function(coll) {
        return coll.insert({_id: 15773,num: 75590,date: new Date("2018-09-06T17:29:57.708Z"),array: [],obj: {_id: 15774,str: "De-engineered",num: 3341,date: new Date("2018-09-06T07:25:10.700Z"),array: [53289,[new Date("2018-09-06T07:43:55.126Z"),1395,"Avon JSON"],17243,"orchid",["Plastic Business-focused Graphical User Interface"],new Date("2018-09-06T18:58:36.648Z"),new Date("2018-09-06T06:36:35.125Z"),new Date("2018-09-06T09:24:06.137Z"),{_id: 15775,str: "Generic real-time Berkshire",num: 48324,date: new Date("2018-09-06T11:41:54.642Z"),array: [73726,{_id: 15776,str: "supply-chains methodologies unleash",date: new Date("2018-09-06T01:41:11.193Z"),obj: {_id: 15777,num: 33656,array: []}}],obj: {}},37004,"intuitive","invoice Guinea-Bissau navigate",new Date("2018-09-06T15:15:29.095Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15778,str: "orchid Mountains",num: 26759,date: new Date("2018-09-05T23:15:10.876Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15779,str: "blue Small",num: 43593,date: new Date("2018-09-06T10:34:27.870Z")});
    },

    function(coll) {
        return coll.insert({_id: 15780,str: "platforms Iowa",num: 93579,date: new Date("2018-09-06T05:42:40.239Z"),obj: {_id: 15781,str: "user-centric Illinois",num: 65059,date: new Date("2018-09-05T21:07:45.081Z"),array: ["methodical Cross-platform magenta",37252,"Technician user-facing",18542,"whiteboard Money Market Account",{_id: 15782,num: 22511,array: []},new Date("2018-09-06T03:17:22.379Z"),new Date("2018-09-06T06:51:27.924Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15783,num: 11939,date: new Date("2018-09-06T09:41:39.118Z"),array: [57720,77488,new Date("2018-09-06T14:57:17.432Z"),"actuating Unbranded",[],"Ergonomic Music",{_id: 15784,str: "invoice Wooden",num: 84813,date: new Date("2018-09-06T14:03:55.202Z"),obj: {}},new Date("2018-09-06T16:45:29.685Z"),"primary American Samoa Granite",30519],obj: {_id: 15785,str: "system-worthy",date: new Date("2018-09-06T09:29:04.806Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15786,str: "Specialist Avon",num: 37241,date: new Date("2018-09-06T02:16:41.916Z"),array: [new Date("2018-09-06T06:09:54.619Z"),new Date("2018-09-06T15:42:13.527Z"),"North Carolina",new Date("2018-09-06T10:48:41.704Z"),"Wells Investment Account Factors",45492,53102,54860,[],{_id: 15787,array: [],obj: {_id: 15788,str: "Small hard drive",num: 25125,date: new Date("2018-09-05T22:38:58.671Z"),obj: {}}},"Granite Buckinghamshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15789,date: new Date("2018-09-06T08:53:32.943Z"),array: ["Investment Account withdrawal",64917,{_id: 15790,str: "Public-key Bedfordshire Intelligent",date: new Date("2018-09-06T12:08:35.768Z"),array: [],obj: {_id: 15791,str: "Inverse National protocol",num: 21024,obj: {_id: 15792,str: "revolutionize",num: 77054,date: new Date("2018-09-06T17:19:57.568Z"),array: []}}},{_id: 15793,str: "COM",num: 93644,date: new Date("2018-09-06T17:14:00.360Z"),array: [{_id: 15794,num: 13260,date: new Date("2018-09-06T01:01:08.395Z"),array: [],obj: {_id: 15795,array: [],obj: {}}},["Computer Auto Loan Account quantifying","1080p Nebraska"],new Date("2018-09-06T06:00:09.644Z"),1604,new Date("2018-09-06T16:35:27.746Z")]},[48352],33455,{_id: 15796,str: "Shirt",num: 98812,date: new Date("2018-09-06T19:35:07.181Z")},["Intelligent Fresh Chicken payment strategic",new Date("2018-09-05T20:46:30.886Z"),"sensor"],43505,70879]});
    },

    function(coll) {
        return coll.insert({_id: 15797,str: "Identity Ramp Ecuador",num: 16745,date: new Date("2018-09-06T04:24:49.907Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15798,str: "Senior",num: 22413,array: [],obj: {_id: 15799,num: 79139,date: new Date("2018-09-06T02:14:24.568Z"),array: [57026,95542,new Date("2018-09-06T03:06:27.711Z"),"Forward","Investment Account infomediaries",[new Date("2018-09-05T22:53:54.784Z"),"Checking Account Reduced Ball"],new Date("2018-09-06T07:35:31.620Z"),{_id: 15800,str: "black B2B Bacon",num: 59884,obj: {}},69654,"Marketing leverage Industrial",[{_id: 15801,str: "Research Baby Technician",num: 52404,date: new Date("2018-09-06T14:38:19.415Z"),obj: {_id: 15802,str: "Investment Account Handmade Wooden Soap Division",num: 37443,date: new Date("2018-09-06T07:18:49.668Z"),array: []}}],96516,{_id: 15803,str: "pixel",array: [],obj: {}},{_id: 15804,str: "artificial intelligence",num: 20363,date: new Date("2018-09-06T11:38:35.763Z"),array: [[["sticky fuchsia"],new Date("2018-09-06T02:52:50.713Z"),new Date("2018-09-05T20:42:10.849Z")],"protocol Generic Metal",[]],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 15805,str: "Small Gorgeous Cotton Ball fuchsia",date: new Date("2018-09-06T08:45:45.502Z"),array: [new Date("2018-09-06T11:42:26.550Z"),new Date("2018-09-06T00:07:40.884Z"),[],"Central African Republic Shoes","North Dakota CFP Franc"]});
    },

    function(coll) {
        return coll.insert({_id: 15806,str: "Money Market Account cross-platform connecting",num: 65947,date: new Date("2018-09-05T20:42:47.967Z"),array: [],obj: {_id: 15807,str: "Well sensor THX",num: 38700,date: new Date("2018-09-06T06:48:48.801Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15808,num: 2962,array: [new Date("2018-09-05T21:22:39.205Z"),"calculating e-services",new Date("2018-09-06T06:22:48.846Z"),{_id: 15809,str: "backing up Suriname Assurance",num: 98857,date: new Date("2018-09-06T09:30:27.645Z"),array: [{_id: 15810,date: new Date("2018-09-06T18:13:09.321Z"),obj: {_id: 15811,str: "Dynamic Swaziland Music",date: new Date("2018-09-05T21:29:51.926Z"),array: [],obj: {}}}],obj: {_id: 15812,str: "Nakfa upward-trending SAS",obj: {}}},47850,"payment generating migration",94747,"tan",new Date("2018-09-05T23:18:49.455Z"),"Branding","Sports","white Northern Mariana Islands",37996,new Date("2018-09-06T18:35:28.607Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15813,str: "orchid Cambridgeshire supply-chains",num: 40058,date: new Date("2018-09-05T22:52:16.828Z"),array: ["Bacon",new Date("2018-09-05T23:18:53.700Z"),16638,new Date("2018-09-05T20:06:58.780Z"),87328,"Meadows",[],83164,"Auto Loan Account Buckinghamshire bypass",{_id: 15814,str: "Quality-focused",num: 31279,date: new Date("2018-09-06T14:38:56.363Z"),array: [],obj: {}},{_id: 15815,num: 51843,date: new Date("2018-09-05T22:33:11.957Z"),array: ["Small Ranch functionalities"],obj: {}},new Date("2018-09-06T02:08:19.310Z"),new Date("2018-09-06T12:18:16.582Z")],obj: {_id: 15816,str: "capacitor Tuna deposit",num: 20534,date: new Date("2018-09-06T13:08:10.937Z"),array: [new Date("2018-09-06T07:49:45.771Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 15817,str: "plum",num: 72943,date: new Date("2018-09-06T01:55:33.939Z"),array: [30184,5368,[],new Date("2018-09-06T13:38:22.633Z"),"navigating","maximize Health Wisconsin",[],new Date("2018-09-06T13:46:03.561Z"),"Team-oriented Kids Burkina Faso",new Date("2018-09-06T14:00:07.171Z"),{_id: 15818,str: "District Producer Avon",num: 69769,date: new Date("2018-09-06T02:41:36.664Z"),array: [94479],obj: {_id: 15819,num: 87035,date: new Date("2018-09-06T17:17:17.544Z"),obj: {}}},"Lock New Mexico calculate"]});
    },

    function(coll) {
        return coll.insert({_id: 15820,str: "alliance Camp",num: 10241,date: new Date("2018-09-06T19:27:22.701Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15821,str: "Specialist",num: 86510,date: new Date("2018-09-06T07:35:56.952Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15822,str: "Cotton architecture Uzbekistan",num: 73668,date: new Date("2018-09-06T01:16:53.392Z"),array: [58844,new Date("2018-09-06T10:29:11.888Z"),42917,"firewall",17182,{_id: 15823,str: "Idaho",date: new Date("2018-09-06T09:56:48.769Z"),obj: {}},new Date("2018-09-06T00:03:46.720Z"),"Liaison program","e-commerce"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15824,num: 22041,array: [],obj: {_id: 15825,str: "programming radical",num: 60703,date: new Date("2018-09-06T05:36:44.956Z"),array: [new Date("2018-09-06T05:08:23.842Z"),73929,"Shoes back up CSS",30907,{_id: 15826,str: "Facilitator",num: 40000,date: new Date("2018-09-06T01:15:39.426Z"),array: [24157],obj: {}},16093,[new Date("2018-09-06T14:32:43.601Z"),43957,{_id: 15827,str: "mobile Cotton",date: new Date("2018-09-06T17:57:19.651Z"),obj: {}}],new Date("2018-09-06T13:32:09.757Z"),"Supervisor Incredible Cotton Chips",[],new Date("2018-09-06T09:54:11.682Z")],obj: {_id: 15828,num: 52654}}});
    },

    function(coll) {
        return coll.insert({_id: 15829,str: "Berkshire",num: 93951,date: new Date("2018-09-06T07:28:27.458Z"),array: [],obj: {_id: 15830,str: "extend South Carolina California",num: 81607,date: new Date("2018-09-06T17:52:39.027Z"),array: [65857,"withdrawal Intranet",new Date("2018-09-06T00:28:01.874Z"),84901,7092,"Jewelery",new Date("2018-09-06T09:13:49.545Z"),[],39572],obj: {_id: 15831,str: "collaborative violet superstructure",date: new Date("2018-09-06T08:32:41.436Z"),array: [[[new Date("2018-09-06T19:52:38.336Z"),"Metal override"],{_id: 15832,str: "Developer haptic",num: 31239,date: new Date("2018-09-06T02:08:43.408Z"),array: [],obj: {}},{_id: 15833,num: 28826,date: new Date("2018-09-06T18:00:59.571Z"),array: [],obj: {_id: 15834,str: "Table"}},"ivory",[new Date("2018-09-06T06:08:02.435Z")]],new Date("2018-09-06T14:16:06.107Z"),9095,86909],obj: {_id: 15835,str: "National backing up web services",obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 15836,str: "SQL",num: 85327,date: new Date("2018-09-06T09:48:05.911Z"),array: [87791,new Date("2018-09-05T22:55:01.148Z"),new Date("2018-09-06T18:08:06.301Z"),"virtual matrix card",88480,"e-business Fork","Administrator Borders Facilitator","experiences quantifying",{_id: 15837,str: "US Dollar",num: 16792,date: new Date("2018-09-05T21:27:13.089Z"),array: [],obj: {}},63159],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15838,num: 92052,date: new Date("2018-09-06T16:37:07.990Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15839,str: "Mouse firmware Markets",num: 13433,date: new Date("2018-09-05T21:12:35.291Z"),array: [21921,new Date("2018-09-06T16:07:15.807Z"),"Manager","Cambodia",48591,11117,{_id: 15840,num: 17197,obj: {_id: 15841,str: "drive",num: 2873,date: new Date("2018-09-06T01:59:01.400Z"),array: [new Date("2018-09-06T10:19:38.420Z"),new Date("2018-09-06T06:25:24.811Z"),[],95347,[]],obj: {}}},["Intuitive reciprocal orchestrate",{_id: 15842,str: "Christmas Island New Zealand Missouri",date: new Date("2018-09-06T08:36:54.096Z"),array: ["Rubber Licensed Cotton Gloves",[]],obj: {_id: 15843,str: "Computers metrics",num: 52292,date: new Date("2018-09-06T14:11:02.375Z"),array: [new Date("2018-09-06T11:08:46.727Z")],obj: {}}},"Cloned"],{_id: 15844,str: "payment revolutionary azure",date: new Date("2018-09-06T02:16:59.306Z")},67931],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15845,str: "initiative hack",num: 11952,date: new Date("2018-09-06T01:01:24.768Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15846,str: "4th generation",num: 34282,date: new Date("2018-09-06T09:38:33.845Z"),array: [new Date("2018-09-06T04:03:02.524Z"),36802,new Date("2018-09-06T13:12:35.253Z"),"Peso Uruguayo Uruguay Peso en Unidades Indexadas",32163,"Branding North Dakota",11047,"Granite back up",[],new Date("2018-09-06T04:02:08.611Z"),{_id: 15847,str: "process improvement Drive backing up",num: 80290,date: new Date("2018-09-06T03:09:40.518Z"),array: [],obj: {}}],obj: {_id: 15848,str: "Metal alarm collaboration",num: 78538,date: new Date("2018-09-06T09:15:20.757Z"),array: [new Date("2018-09-06T13:32:26.437Z"),[],"Tasty",22646],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15849,str: "indexing",num: 70934,date: new Date("2018-09-06T13:03:29.022Z"),array: [new Date("2018-09-06T11:28:49.213Z"),new Date("2018-09-06T17:26:56.436Z"),83553,62366,[],new Date("2018-09-06T01:48:42.186Z"),65369,{_id: 15850,str: "Gold Lead invoice",num: 18035,date: new Date("2018-09-06T14:58:10.217Z"),array: [],obj: {}},"Berkshire",[],new Date("2018-09-06T12:18:15.070Z"),{_id: 15851,str: "user-facing",num: 90950,date: new Date("2018-09-05T22:58:06.507Z"),array: ["Buckinghamshire Jewelery","utilisation Principal","Berkshire"]}],obj: {_id: 15852,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15853,str: "back-end Developer",num: 20013,date: new Date("2018-09-06T16:10:40.339Z"),array: [new Date("2018-09-05T23:10:42.237Z"),new Date("2018-09-06T17:15:45.669Z"),"Comoro Franc withdrawal",94900,68909,18077,[new Date("2018-09-06T07:20:16.071Z"),["Track Licensed"],2310,{_id: 15854,str: "overriding extranet Outdoors",num: 93150,date: new Date("2018-09-05T23:50:58.328Z"),array: [],obj: {_id: 15855,str: "Bedfordshire PCI",num: 608,date: new Date("2018-09-06T06:17:11.975Z"),array: []}},{_id: 15856,date: new Date("2018-09-05T21:33:27.426Z"),array: [],obj: {}}],[],"Markets",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15857,str: "Implementation Representative",date: new Date("2018-09-06T12:08:14.299Z"),array: [new Date("2018-09-06T03:06:43.645Z"),61556,18684,new Date("2018-09-06T14:29:55.892Z"),29357,[],"Shirt Metal mint green",new Date("2018-09-05T21:52:24.356Z"),"generate white",{_id: 15858,str: "Hong Kong Dollar",num: 6115,date: new Date("2018-09-06T04:03:40.607Z"),array: [],obj: {_id: 15859,str: "maroon black encryption",num: 80413,date: new Date("2018-09-06T19:08:56.795Z"),obj: {}}},42150,new Date("2018-09-06T13:26:22.105Z"),"PCI Home"]});
    },

    function(coll) {
        return coll.insert({_id: 15860,str: "Arizona",num: 44907,array: ["Ghana",new Date("2018-09-06T05:35:50.948Z"),[],38042,37767,[new Date("2018-09-06T15:02:09.754Z")],["card bypassing",59917,{_id: 15861,str: "technologies Cambridgeshire Credit Card Account",num: 36898,date: new Date("2018-09-06T12:08:40.128Z"),array: [],obj: {_id: 15862,str: "Chair",date: new Date("2018-09-06T18:41:17.998Z"),obj: {}}}],"Future","Specialist Fantastic Plastic Shirt Villages",new Date("2018-09-05T22:46:02.469Z"),new Date("2018-09-06T02:29:21.337Z"),7893]});
    },

    function(coll) {
        return coll.insert({_id: 15863,str: "Underpass",num: 14096,date: new Date("2018-09-06T05:52:50.764Z"),array: ["Incredible Cotton Car Home Loan Account",new Date("2018-09-06T04:19:02.772Z"),66194,new Date("2018-09-06T13:33:14.777Z"),{_id: 15864,str: "CSS mobile PNG",date: new Date("2018-09-06T17:07:55.209Z"),array: [],obj: {_id: 15865,str: "front-end",date: new Date("2018-09-06T16:02:29.091Z"),array: [[34530,new Date("2018-09-06T09:26:16.798Z"),"Managed payment Dynamic"],new Date("2018-09-06T18:37:16.232Z"),71109,29360]}},96764,[],27119,"Business-focused bypassing"],obj: {_id: 15866,str: "PNG Intelligent Soft Bacon",num: 86399}});
    },

    function(coll) {
        return coll.insert({_id: 15867,str: "Tactics Bike PNG",date: new Date("2018-09-05T20:11:16.195Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15868,str: "recontextualize Investment Account viral",date: new Date("2018-09-06T12:14:49.923Z"),array: ["parsing",70245,"Fish",[],new Date("2018-09-06T13:05:39.823Z"),66176,new Date("2018-09-05T23:08:09.650Z"),26200,"Designer SMTP","digital Cambridgeshire auxiliary"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15869,num: 97066,date: new Date("2018-09-05T22:01:34.215Z"),array: [25329,"zero administration","Sleek",[new Date("2018-09-06T16:15:10.474Z"),new Date("2018-09-06T05:03:35.792Z"),76907],"back-end eco-centric maroon",[],37287,new Date("2018-09-06T12:18:50.097Z"),{_id: 15870,str: "channels Chair",date: new Date("2018-09-06T17:48:56.898Z"),array: [new Date("2018-09-06T13:35:43.119Z")],obj: {}},new Date("2018-09-06T12:35:08.246Z"),"Investor"],obj: {_id: 15871,str: "synergize Liaison",num: 98696,date: new Date("2018-09-06T18:41:42.932Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15872,str: "Usability Savings Account e-tailers",num: 10087,date: new Date("2018-09-06T00:34:27.735Z"),array: [new Date("2018-09-06T07:34:13.103Z"),67849,"technologies Producer",[],"bandwidth dot-com",62967,56994,new Date("2018-09-06T02:01:07.311Z"),"invoice mission-critical THX"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15873,num: 48910,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15874,str: "analyzer Spring",num: 45473,date: new Date("2018-09-06T18:20:45.135Z"),array: [],obj: {_id: 15875,str: "payment ability silver",num: 5831,date: new Date("2018-09-05T20:10:22.331Z"),array: [89428,new Date("2018-09-06T07:03:01.998Z"),{_id: 15876,num: 24357,date: new Date("2018-09-06T04:11:51.660Z"),array: ["Electronics microchip",new Date("2018-09-06T16:49:31.789Z"),13018],obj: {}},"Louisiana",93545,new Date("2018-09-06T15:08:46.313Z"),[{_id: 15877,str: "markets stable",date: new Date("2018-09-06T00:30:59.373Z"),array: [new Date("2018-09-06T09:26:36.333Z"),86051],obj: {}},[]],"Indiana Refined Unbranded Fresh Mouse","sensor",{_id: 15878,str: "azure monitor generate",num: 18740,date: new Date("2018-09-05T21:30:22.124Z"),array: [],obj: {_id: 15879,str: "Buckinghamshire Tunnel",num: 25408,obj: {_id: 15880,str: "Factors"}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 15881,str: "internet solution",num: 57663,date: new Date("2018-09-06T08:53:26.864Z"),array: [{_id: 15882,str: "Cambridgeshire Incredible Soft Fish",num: 98033,date: new Date("2018-09-06T19:45:56.672Z"),obj: {}},11892,new Date("2018-09-06T17:23:19.966Z"),"world-class withdrawal","Gold Berkshire",new Date("2018-09-06T09:53:53.749Z"),"wireless Intelligent Steel Cheese",{_id: 15883,str: "hacking initiative maximize",date: new Date("2018-09-06T17:08:28.168Z"),array: ["Maryland Cambridgeshire",8759,[new Date("2018-09-06T15:02:15.826Z"),[],39195]],obj: {_id: 15884,num: 17275,date: new Date("2018-09-05T20:14:08.038Z")}},new Date("2018-09-06T04:21:13.002Z"),"Licensed Health backing up",87670],obj: {_id: 15885,date: new Date("2018-09-06T14:06:01.905Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15886,str: "quantifying Plastic Kansas",num: 14011,date: new Date("2018-09-06T10:06:41.351Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15887,str: "infomediaries XML Antarctica (the territory South of 60 deg S)",num: 41625,date: new Date("2018-09-06T03:59:51.828Z"),array: [],obj: {_id: 15888,str: "Investment Account",num: 23312,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15889,str: "Bedfordshire applications monitor",num: 33677,date: new Date("2018-09-06T01:28:05.581Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15890,str: "Games Guinea",num: 24076,date: new Date("2018-09-06T09:27:02.777Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15891,str: "navigate",num: 89120,date: new Date("2018-09-06T11:59:20.391Z"),array: ["Investment Account extend New Hampshire",69686,5877,new Date("2018-09-06T06:56:28.381Z"),"Bedfordshire sensor success",new Date("2018-09-06T18:02:58.383Z"),new Date("2018-09-06T12:52:55.470Z"),51350,50028,"full-range"],obj: {_id: 15892,str: "XSS",num: 7398,date: new Date("2018-09-06T17:29:13.219Z"),array: [],obj: {_id: 15893,num: 80828,date: new Date("2018-09-06T00:05:05.080Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15894,str: "intangible Kentucky Research",date: new Date("2018-09-06T02:36:45.806Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15895,str: "copying vertical",num: 40957,date: new Date("2018-09-06T06:17:00.127Z"),obj: {_id: 15896,str: "card Accounts Avon",num: 59174,date: new Date("2018-09-06T05:20:21.073Z"),array: [[],73777,new Date("2018-09-06T08:21:41.876Z"),"Reverse-engineered functionalities",49808,{_id: 15897,num: 52358,date: new Date("2018-09-06T03:56:39.066Z"),array: [new Date("2018-09-05T22:30:21.130Z"),["Fish back-end"],"synthesize",28137],obj: {_id: 15898,str: "Martinique",num: 12789,date: new Date("2018-09-06T04:34:16.976Z"),array: [],obj: {}}},[],15,new Date("2018-09-06T10:36:53.654Z"),11519,[{_id: 15899,date: new Date("2018-09-06T11:08:45.394Z"),array: []}],"productize"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15900,str: "orchestration Junction",num: 51498,date: new Date("2018-09-06T12:15:20.261Z"),obj: {_id: 15901,str: "invoice Luxembourg Incredible",num: 40147,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15902,str: "Tasty Rubber Computer Camp",num: 39833,date: new Date("2018-09-06T07:55:55.377Z"),array: [new Date("2018-09-06T17:31:20.467Z"),{_id: 15903,num: 19510,date: new Date("2018-09-06T15:00:53.043Z"),obj: {_id: 15904,str: "red static Unbranded",num: 51761,date: new Date("2018-09-06T11:13:46.312Z"),array: [],obj: {}}},75245,new Date("2018-09-06T01:00:04.069Z"),new Date("2018-09-06T18:30:53.167Z"),42574,"workforce Mouse sky blue","capacity Plastic hard drive",27510,"black",new Date("2018-09-06T03:13:18.132Z")]});
    },

    function(coll) {
        return coll.insert({_id: 15905,str: "Israel Fall Credit Card Account",num: 81703,date: new Date("2018-09-06T18:27:33.606Z"),array: [],obj: {_id: 15906,str: "open-source withdrawal",num: 33648,date: new Date("2018-09-05T21:02:42.674Z"),array: [[],78096,new Date("2018-09-06T17:10:59.840Z"),8132,{_id: 15907,str: "Ameliorated matrix Awesome Cotton Shirt",num: 3953,date: new Date("2018-09-05T23:08:27.602Z"),obj: {}},new Date("2018-09-06T16:56:00.197Z"),"24/365","tangible",92445,["migration Investment Account",{_id: 15908,str: "Tactics knowledge user Planner",num: 77526,date: new Date("2018-09-06T05:46:31.567Z"),array: [],obj: {}},new Date("2018-09-06T00:29:29.759Z"),{_id: 15909,num: 85522,date: new Date("2018-09-06T03:31:50.073Z")}],new Date("2018-09-05T20:02:12.047Z"),28775],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15910,str: "Gourde US Dollar",num: 30573,date: new Date("2018-09-06T09:01:06.766Z"),obj: {_id: 15911,str: "web services Supervisor harness",num: 11632,date: new Date("2018-09-06T18:02:01.867Z"),array: [{_id: 15912,str: "Cambridgeshire orange",num: 74019,date: new Date("2018-09-06T03:36:53.289Z"),array: ["Kids"],obj: {}},75362,{_id: 15913,str: "PCI",date: new Date("2018-09-06T13:14:40.630Z"),array: []},["Utah Associate Factors"],new Date("2018-09-06T10:19:05.202Z"),9505,85146,"time-frame Avon",new Date("2018-09-06T10:10:00.133Z"),new Date("2018-09-05T23:31:24.220Z"),new Date("2018-09-06T09:27:41.595Z"),"embrace Cambridgeshire Directives",{_id: 15914,str: "Shoes Montana",num: 59520,date: new Date("2018-09-06T03:27:00.641Z"),obj: {_id: 15915,str: "drive Bedfordshire JBOD",date: new Date("2018-09-05T22:52:01.165Z"),array: []}},"Oman Generic"],obj: {_id: 15916,num: 66187,array: [{_id: 15917,array: [],obj: {}},80742],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15918,str: "Bulgarian Lev",num: 42126,date: new Date("2018-09-06T18:45:02.520Z"),array: [{_id: 15919,str: "Intelligent Cotton Fish",num: 75219,date: new Date("2018-09-06T15:08:13.344Z"),array: [66160,70885],obj: {_id: 15920,str: "Incredible Rubber Shirt",date: new Date("2018-09-06T13:14:50.598Z"),array: [],obj: {}}},"Regional Soap","Iceland",58079,46165,new Date("2018-09-06T15:44:58.973Z"),new Date("2018-09-06T13:35:26.477Z"),new Date("2018-09-05T22:42:24.590Z"),"Tasty Handcrafted",new Date("2018-09-06T03:45:52.861Z"),121]});
    },

    function(coll) {
        return coll.insert({_id: 15921,str: "West Virginia repurpose",num: 5932,date: new Date("2018-09-06T09:07:11.469Z"),array: [70568,5337,"Belgium Rubber Virtual","maroon Forest Concrete","Berkshire JSON Operations",new Date("2018-09-06T11:55:28.691Z"),"British Indian Ocean Territory (Chagos Archipelago)",17779,[{_id: 15922,str: "time-frame",date: new Date("2018-09-06T04:58:07.041Z"),array: [],obj: {}}],new Date("2018-09-06T09:30:39.477Z"),{_id: 15923,num: 59150,date: new Date("2018-09-06T00:55:20.828Z")},"array",40280],obj: {_id: 15924,str: "Hryvnia Concrete",num: 91982,date: new Date("2018-09-06T08:59:56.261Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15925,str: "lavender Practical Djibouti",num: 86478,date: new Date("2018-09-06T19:28:49.361Z"),array: [new Date("2018-09-06T03:16:29.476Z"),"Nebraska wireless monitor","Bedfordshire compressing digital","navigate",new Date("2018-09-05T23:58:27.280Z"),{_id: 15926,num: 43735,date: new Date("2018-09-06T12:11:47.722Z"),array: [87334,95,new Date("2018-09-06T14:13:36.988Z")],obj: {_id: 15927,str: "wireless",date: new Date("2018-09-06T03:16:21.390Z"),obj: {}}},new Date("2018-09-06T17:24:12.205Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15928,str: "application frictionless Group",num: 92405,date: new Date("2018-09-06T14:34:03.745Z"),array: [],obj: {_id: 15929,str: "Global",num: 8651,date: new Date("2018-09-06T07:03:56.749Z"),array: [43398,{_id: 15930,num: 95082},new Date("2018-09-06T03:34:50.328Z"),"Direct schemas Fresh","seize 1080p mint green",[],"connect Burgs connect",new Date("2018-09-06T02:16:13.636Z"),83413,new Date("2018-09-06T19:17:52.094Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15931,str: "Generic hard drive",num: 57323,date: new Date("2018-09-06T09:36:32.172Z"),array: [],obj: {_id: 15932,str: "Home Loan Account Sierra Leone Fresh",num: 82045,date: new Date("2018-09-06T13:35:36.555Z"),array: ["Silver Incredible Soft Hat Decentralized",65671,83947,new Date("2018-09-06T00:02:18.670Z"),"deposit",66441,{_id: 15933,str: "parse Facilitator Kentucky",num: 35856,date: new Date("2018-09-06T08:54:00.224Z"),array: [],obj: {}},["Berkshire Cove",new Date("2018-09-06T10:59:08.862Z"),{_id: 15934,str: "hybrid transparent Steel",date: new Date("2018-09-06T05:10:11.667Z"),obj: {}},{_id: 15935,num: 60120,array: [17259],obj: {_id: 15936,str: "Extended green",num: 97558,date: new Date("2018-09-06T10:24:50.534Z")}}],16998,new Date("2018-09-06T14:48:06.262Z"),"Global Poland"]}});
    },

    function(coll) {
        return coll.insert({_id: 15937,str: "Handmade Granite Shirt XML monetize",num: 69378,array: ["deposit Michigan Louisiana",14009,new Date("2018-09-06T11:48:47.688Z"),[],{_id: 15938,str: "access Down-sized",num: 10821,date: new Date("2018-09-05T23:24:28.066Z"),array: [],obj: {_id: 15939,str: "Corporate virtual",num: 231,date: new Date("2018-09-05T22:51:19.834Z"),obj: {}}},new Date("2018-09-06T02:23:07.429Z"),"Switchable Gold cross-platform",73157,"Gorgeous",new Date("2018-09-06T07:58:32.629Z"),23538],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15940,str: "Shoal Savings Account Lek",num: 15090,date: new Date("2018-09-06T14:11:19.659Z"),array: [[],7254,[],new Date("2018-09-06T16:19:16.356Z"),99352,new Date("2018-09-06T10:55:29.687Z"),"Books blue Cotton",{_id: 15941,str: "deliverables Planner",num: 33114,date: new Date("2018-09-06T18:12:54.201Z"),array: [85878,new Date("2018-09-06T07:34:00.004Z"),"installation Concrete withdrawal"],obj: {_id: 15942,str: "Metrics Technician",num: 16166,array: [{_id: 15943,date: new Date("2018-09-06T05:26:13.488Z"),obj: {}}]}},[],47686,"payment North Carolina Ameliorated",new Date("2018-09-05T21:49:47.409Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15944,str: "XSS New York holistic",num: 70929,date: new Date("2018-09-06T01:22:29.244Z"),array: [],obj: {_id: 15945,str: "granular cross-platform robust",num: 85201,date: new Date("2018-09-06T02:45:35.348Z"),array: ["Washington Mouse",94888,48878,new Date("2018-09-06T18:10:40.685Z"),new Date("2018-09-05T19:57:49.179Z"),68799,[{_id: 15946,num: 44996,date: new Date("2018-09-05T23:23:37.943Z"),array: [],obj: {_id: 15947,str: "Palladium Savings Account copying",date: new Date("2018-09-06T17:57:42.827Z"),obj: {}}},19353,"real-time Guadeloupe HDD",28465],[{_id: 15948,str: "copying Fantastic Cotton Bacon",date: new Date("2018-09-06T15:35:00.726Z"),array: [new Date("2018-09-06T17:36:37.989Z")],obj: {_id: 15949,str: "Money Market Account",num: 2925,array: ["analyzing invoice","Lari",27961]}},new Date("2018-09-06T02:07:31.147Z"),7728],new Date("2018-09-05T23:43:01.570Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 15950,str: "Personal Loan Account Borders back-end",date: new Date("2018-09-06T14:16:03.061Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15951,str: "Organized Generic",num: 44549,date: new Date("2018-09-06T06:43:25.441Z"),array: [{_id: 15952,num: 15706,date: new Date("2018-09-06T05:32:23.624Z"),array: [],obj: {_id: 15953,str: "Indian Rupee Soft",num: 33427,date: new Date("2018-09-06T03:46:13.849Z"),array: ["Tools Internal grow",new Date("2018-09-05T21:04:21.093Z"),67360,25752,"generate Security Human",[new Date("2018-09-06T08:40:51.563Z"),"Uganda Auto Loan Account"]],obj: {_id: 15954,str: "Global Taka",num: 4807,date: new Date("2018-09-06T15:09:29.963Z"),array: [],obj: {}}}},new Date("2018-09-06T12:00:02.290Z"),"Sleek port","Personal Loan Account",{_id: 15955,str: "models hack",date: new Date("2018-09-05T23:09:33.966Z")},new Date("2018-09-06T14:20:42.205Z"),92926,[39756,[],16357,new Date("2018-09-06T09:08:29.149Z")]],obj: {_id: 15956,str: "Industrial Versatile Centers",num: 64598,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15957,str: "Multi-channelled Bedfordshire",num: 56566,date: new Date("2018-09-06T03:11:26.948Z"),array: [{_id: 15958,str: "Outdoors Multi-layered Colorado",num: 62433,date: new Date("2018-09-06T03:18:32.584Z"),array: []},"AGP Principal",new Date("2018-09-05T22:51:57.295Z"),"redundant uniform Wooden",58563,18088,"Ergonomic multi-byte",new Date("2018-09-06T03:36:18.687Z"),91152,new Date("2018-09-05T23:36:45.825Z"),{_id: 15959,array: [],obj: {}},[46120,{_id: 15960,num: 41502,array: [45656]}]],obj: {_id: 15961,str: "lavender extend Optimization",date: new Date("2018-09-06T15:39:39.745Z"),obj: {_id: 15962,str: "Auto Loan Account eyeballs",date: new Date("2018-09-06T13:22:09.317Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15963,str: "Ergonomic Rubber Shoes morph grey",num: 67743,date: new Date("2018-09-06T18:22:13.970Z"),array: [81586,"Savings Account",new Date("2018-09-05T23:29:17.765Z"),{_id: 15964,str: "Organized",num: 58783,date: new Date("2018-09-05T22:38:20.869Z"),array: [],obj: {}},new Date("2018-09-05T21:46:34.448Z"),{_id: 15965,str: "Stravenue radical Lead",num: 8509,array: [new Date("2018-09-06T02:37:36.549Z"),36505,{_id: 15966,obj: {}},[],21979],obj: {}},"Practical real-time","Alaska Cotton Denar"],obj: {_id: 15967,str: "moratorium Rustic Fresh Salad Hawaii",num: 31138,date: new Date("2018-09-06T04:13:35.918Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15968,str: "Car Congolese Franc Infrastructure",num: 69186,date: new Date("2018-09-06T07:14:11.059Z"),array: [96128,"Chicken Handmade","Michigan Supervisor",new Date("2018-09-06T10:19:50.959Z"),27190,new Date("2018-09-06T09:29:06.661Z"),"Extended",new Date("2018-09-06T19:22:17.829Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15969,str: "green Money Market Account",num: 45,date: new Date("2018-09-06T18:53:12.959Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15970,str: "iterate Customizable",num: 57398,date: new Date("2018-09-06T06:41:44.361Z"),obj: {_id: 15971,num: 71827,date: new Date("2018-09-05T20:31:00.801Z"),array: [new Date("2018-09-06T09:07:31.967Z"),"Estates",1311,21625,39880,new Date("2018-09-06T00:56:03.659Z"),71761,["Brooks Tasty capacitor"],[],"Investor Refined HDD","Avon",{_id: 15972,str: "Customizable Internal Money Market Account",array: [],obj: {}},4581],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15973,str: "metrics Fantastic cyan",num: 86051,date: new Date("2018-09-05T21:22:57.347Z"),array: [new Date("2018-09-06T16:22:11.568Z"),31093,new Date("2018-09-05T23:39:07.359Z"),83243,"Lead",26262,"copy",[new Date("2018-09-06T07:46:45.941Z")],{_id: 15974,str: "infomediaries Points Antarctica (the territory South of 60 deg S)",date: new Date("2018-09-06T07:51:09.537Z"),array: [],obj: {}},["Latvia Concrete"],"Credit Card Account Avon Fish"],obj: {_id: 15975,num: 86506,date: new Date("2018-09-06T01:12:25.670Z"),array: [[],{_id: 15976,str: "open-source Group",num: 7080,date: new Date("2018-09-06T03:29:21.448Z"),array: [],obj: {}},31262,{ _id: 15977 }],obj: {_id: 15978,str: "Licensed Soft Car primary",num: 96540,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 15979,str: "Marketing",num: 60404,date: new Date("2018-09-06T03:10:44.195Z"),array: [97585,28334,new Date("2018-09-06T12:41:28.801Z"),"orchid generating",11005,{_id: 15980,str: "Concrete Investment Account",num: 64931,date: new Date("2018-09-06T10:35:33.155Z"),obj: {}},[[],new Date("2018-09-06T17:19:36.217Z"),"calculating","Azerbaijanian Manat","pink strategic Infrastructure"],new Date("2018-09-06T14:44:19.033Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15981,str: "Cheese",num: 50001,date: new Date("2018-09-06T16:02:38.261Z"),array: [{_id: 15982,str: "distributed Garden bypassing",num: 48178,date: new Date("2018-09-06T07:05:05.298Z"),obj: {}},{_id: 15983,date: new Date("2018-09-05T23:12:04.501Z"),array: ["strategic feed Shoes",{_id: 15984,str: "Investor systemic",array: ["Personal Loan Account Dam Object-based",new Date("2018-09-06T11:35:28.681Z"),552,new Date("2018-09-06T18:38:36.207Z"),719,[]],obj: {_id: 15985,str: "bandwidth process improvement",num: 32009,array: [],obj: {}}}],obj: {_id: 15986,str: "Internal Direct",num: 48515,date: new Date("2018-09-06T18:24:18.634Z"),array: [],obj: {_id: 15987,num: 28530}}},65044,{_id: 15988,num: 71834,date: new Date("2018-09-06T02:09:35.011Z"),array: []},"Soap Djibouti",{_id: 15989,num: 11379,date: new Date("2018-09-06T12:39:35.737Z"),array: []},new Date("2018-09-06T17:51:13.188Z"),new Date("2018-09-06T13:12:55.398Z"),["THX Boliviano Mvdol quantify",85145,"Ball Practical Wooden Pants Global"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15990,str: "Branding scalable",date: new Date("2018-09-06T18:47:00.232Z"),array: ["Handcrafted reciprocal Developer",84545,[],new Date("2018-09-06T13:50:57.296Z"),"Refined Rubber Tuna",{_id: 15991,str: "ubiquitous Wooden",num: 73861,date: new Date("2018-09-06T17:46:50.275Z"),array: [],obj: {}},"impactful Valleys Tactics",71605,6723],obj: {_id: 15992,num: 7850,array: [new Date("2018-09-06T10:42:07.695Z"),1073,"Drive Awesome Metal Towels Legacy",new Date("2018-09-06T18:12:23.965Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15993,str: "exploit",num: 462,date: new Date("2018-09-05T21:12:43.080Z"),array: [11067,"morph service-desk invoice",{_id: 15994,str: "firewall",date: new Date("2018-09-06T02:35:49.325Z"),array: []},new Date("2018-09-06T11:29:17.750Z"),90003,new Date("2018-09-06T15:10:16.812Z")],obj: {_id: 15995,str: "Program XML",num: 87952,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15996,str: "Awesome Cotton Chicken Personal Loan Account Practical",num: 32115,date: new Date("2018-09-06T02:13:19.382Z"),obj: {_id: 15997,str: "withdrawal generate 24/7",num: 98712,date: new Date("2018-09-06T11:40:51.486Z"),obj: {_id: 15998,str: "deposit holistic",num: 35978,date: new Date("2018-09-06T14:40:11.108Z"),array: [new Date("2018-09-06T02:03:01.174Z"),6796,41337,[],new Date("2018-09-06T11:38:41.591Z"),{_id: 15999,str: "program primary",date: new Date("2018-09-06T15:34:52.477Z"),array: ["Personal Loan Account","Courts Principal alarm",new Date("2018-09-06T15:06:17.019Z"),93635],obj: {}},91271,{_id: 16000,array: []},[],["end-to-end Alabama synergistic"]],obj: {_id: 16001,str: "Nevada green users",date: new Date("2018-09-06T10:01:52.791Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 16002,str: "Human",num: 24471,date: new Date("2018-09-05T22:08:40.132Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 16003,str: "transmitting Fresh",num: 135,date: new Date("2018-09-06T11:35:37.761Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16004,str: "payment",num: 13079,date: new Date("2018-09-05T22:24:30.357Z"),array: ["Associate Rustic Texas","Paradigm withdrawal",[],67930,new Date("2018-09-06T17:23:23.234Z"),97205,"exploit Plastic indigo",new Date("2018-09-06T03:21:02.004Z"),new Date("2018-09-06T18:50:22.087Z"),{_id: 16005,str: "full-range virtual De-engineered",num: 39916,date: new Date("2018-09-06T05:31:15.870Z"),obj: {_id: 16006,str: "synthesize Mouse",num: 22080,date: new Date("2018-09-06T04:24:27.418Z"),array: [],obj: {}}},new Date("2018-09-06T16:02:08.314Z"),new Date("2018-09-05T19:59:54.947Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16007,str: "national",num: 21638,date: new Date("2018-09-06T11:09:07.910Z"),array: ["Generic Fantastic eyeballs",[],"Wooden deposit Expressway",new Date("2018-09-06T19:13:36.483Z"),17656,new Date("2018-09-05T20:25:10.201Z"),42128,new Date("2018-09-06T07:56:36.849Z"),{_id: 16008,date: new Date("2018-09-06T19:39:35.551Z"),array: []},45519,[{_id: 16009,str: "flexibility communities",num: 23405,array: [],obj: {}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16010,str: "real-time Licensed Croatian Kuna",num: 15655,array: [],obj: {_id: 16011,str: "driver Personal Loan Account",num: 73714,date: new Date("2018-09-06T15:52:32.540Z"),array: [50632,{_id: 16012,num: 74374,date: new Date("2018-09-06T16:35:06.682Z")},"Central",[],"payment",new Date("2018-09-06T09:57:37.329Z"),"Awesome Metal Pants Iraq indigo",27630,32957,new Date("2018-09-06T13:54:08.577Z"),new Date("2018-09-06T18:33:21.078Z"),new Date("2018-09-06T16:45:08.091Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16013,str: "Union Hat synthesizing",num: 48567,date: new Date("2018-09-06T06:06:33.918Z"),array: ["Isle optical Jewelery",new Date("2018-09-06T10:35:06.330Z"),[],"California",96418,new Date("2018-09-06T15:11:33.465Z"),34202,new Date("2018-09-06T16:10:36.310Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16014,num: 47211,date: new Date("2018-09-06T16:16:54.063Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16015,str: "Awesome withdrawal",num: 49960,date: new Date("2018-09-06T17:52:31.923Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 16016,str: "protocol Georgia",num: 13939,date: new Date("2018-09-06T15:00:13.257Z"),array: [44557,"model Michigan Cotton","extend Strategist open-source",new Date("2018-09-06T19:05:48.148Z"),68717,new Date("2018-09-05T22:26:40.497Z"),"Auto Loan Account","Usability red",{_id: 16017,str: "wireless Ergonomic Rubber Towels",date: new Date("2018-09-06T02:19:27.057Z"),array: [],obj: {}},[94874,new Date("2018-09-06T09:27:40.952Z"),19093],{_id: 16018,str: "Rhode Island",num: 3394,obj: {_id: 16019,num: 25649,date: new Date("2018-09-06T01:17:13.410Z"),array: [],obj: {}}},new Date("2018-09-06T03:24:12.991Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16020,str: "Pizza systemic",num: 72980,date: new Date("2018-09-06T17:32:48.113Z"),array: [{_id: 16021,str: "dedicated brand invoice",num: 20804,date: new Date("2018-09-06T18:10:55.807Z"),array: ["Finland Fresh",8110,"Investment Account SSL",83571],obj: {_id: 16022,num: 81751,date: new Date("2018-09-06T14:26:08.153Z"),obj: {}}},20385,new Date("2018-09-06T11:39:04.929Z"),"sticky",88286,new Date("2018-09-06T14:24:17.168Z"),[],[],new Date("2018-09-05T23:36:04.282Z")],obj: {_id: 16023,str: "web-readiness",num: 38533,date: new Date("2018-09-05T22:04:10.314Z")}});
    },

    function(coll) {
        return coll.insert({_id: 16024,str: "Officer card",num: 12770,date: new Date("2018-09-06T07:03:36.736Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16025,str: "next generation online",num: 71763,array: [],obj: {_id: 16026,str: "Tuna orchid card",num: 73062,date: new Date("2018-09-06T07:55:27.650Z"),array: ["deposit Buckinghamshire alarm",11990,new Date("2018-09-05T21:34:57.872Z"),new Date("2018-09-06T05:51:41.853Z"),"Mauritania Belarussian Ruble sensor",new Date("2018-09-06T09:50:51.054Z"),47758,"Accountability cross-platform",99441,"Future",{_id: 16027,str: "Direct magnetic Berkshire",num: 53865,date: new Date("2018-09-06T11:32:36.082Z"),array: [],obj: {}},"Alabama quantify"],obj: {_id: 16028,str: "Cambridgeshire open-source Robust",num: 91024,date: new Date("2018-09-06T09:46:31.637Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16029,str: "Checking Account Chicken",num: 16862,date: new Date("2018-09-06T09:47:46.516Z"),array: [],obj: {_id: 16030,str: "Assimilated red demand-driven",num: 25382,array: [{_id: 16031,str: "connecting",num: 80470,date: new Date("2018-09-06T00:10:40.755Z"),array: [],obj: {}},new Date("2018-09-06T09:57:27.352Z"),63371,32361,"Awesome Concrete Towels Total","Bedfordshire transmitting TCP",[93435,"benchmark SCSI orchid"],17438,new Date("2018-09-06T06:16:45.880Z"),71692,new Date("2018-09-06T02:01:32.220Z"),new Date("2018-09-06T00:47:54.992Z"),new Date("2018-09-05T23:04:02.987Z"),["Global"],new Date("2018-09-06T02:35:40.645Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16032,str: "Concrete Division",num: 9919,date: new Date("2018-09-06T17:37:46.951Z"),array: [new Date("2018-09-06T18:19:24.512Z"),47597,48316,"Clothing","protocol Direct","Refined Rubber Cheese Refined Rubber Tuna",79643,new Date("2018-09-06T17:07:18.583Z"),[new Date("2018-09-06T01:49:49.190Z"),"Developer"],"Greens Greece",73766,{_id: 16033,str: "Holy See (Vatican City State) flexibility channels",num: 22118,date: new Date("2018-09-06T05:47:45.135Z"),array: [new Date("2018-09-06T19:03:33.507Z")]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16034,str: "online Organic Chief",num: 45485,array: ["value-added application payment",new Date("2018-09-06T09:54:36.206Z"),{_id: 16035,num: 29066,date: new Date("2018-09-06T13:53:33.217Z"),array: [],obj: {_id: 16036,str: "Licensed Concrete Mouse redundant optimizing",date: new Date("2018-09-06T01:50:02.570Z"),array: [new Date("2018-09-06T15:32:28.616Z"),79275,[],"mindshare",{_id: 16037,str: "Personal Loan Account",num: 5869,date: new Date("2018-09-06T06:40:03.475Z"),array: []}],obj: {}}},85960,new Date("2018-09-06T19:39:03.316Z"),"Executive 1080p",39941,[new Date("2018-09-06T05:49:14.773Z"),["payment",{_id: 16038,str: "Plastic Avon bricks-and-clicks",num: 74099,date: new Date("2018-09-06T14:37:15.677Z"),obj: {_id: 16039,num: 95042,date: new Date("2018-09-06T09:05:07.685Z")}},9574]],"Bacon Senior"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16040,str: "Guarani deposit",num: 98544,date: new Date("2018-09-06T11:36:06.132Z"),array: ["Buckinghamshire Lead Steel",61711,"Industrial",83680,new Date("2018-09-05T20:31:05.305Z"),new Date("2018-09-06T12:07:26.943Z"),new Date("2018-09-05T21:08:37.371Z"),9446,[],new Date("2018-09-05T22:48:06.985Z"),new Date("2018-09-06T05:25:32.642Z")],obj: {_id: 16041,str: "solid state alarm",num: 94672,array: [[],"copying utilize hacking",new Date("2018-09-06T10:33:15.403Z")],obj: {_id: 16042,str: "input deposit",num: 20249,date: new Date("2018-09-06T11:47:41.031Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16043,str: "Syrian Pound Home Loan Account Legacy",num: 89048,date: new Date("2018-09-05T22:51:56.789Z"),array: [],obj: {_id: 16044,str: "calculating Self-enabling Product",num: 84598,date: new Date("2018-09-06T15:29:50.164Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16045,str: "primary Kuwaiti Dinar",num: 73137,date: new Date("2018-09-05T20:41:54.425Z"),array: [89818,new Date("2018-09-05T21:00:29.615Z"),"Rustic invoice",50790,new Date("2018-09-06T14:14:31.789Z"),[],87801,"hard drive implement","solid state",new Date("2018-09-06T15:35:47.037Z"),[],"Cotton",{_id: 16046,str: "sensor",num: 58757,date: new Date("2018-09-06T15:28:40.918Z"),array: [[93297],{_id: 16047,date: new Date("2018-09-06T05:37:35.066Z"),array: [],obj: {}}],obj: {_id: 16048,num: 11468,date: new Date("2018-09-06T09:24:48.936Z"),array: []}}],obj: {_id: 16049,str: "architectures",num: 10425,date: new Date("2018-09-06T17:45:11.989Z"),obj: {_id: 16050,str: "extranet Luxembourg"}}});
    },

    function(coll) {
        return coll.insert({_id: 16051,str: "mobile",num: 82802,date: new Date("2018-09-06T02:04:20.418Z"),array: ["RSS encryption",new Date("2018-09-06T06:28:03.486Z"),{_id: 16052,str: "Reduced Saint Helena Pound",num: 9902,date: new Date("2018-09-06T08:58:23.663Z"),array: [],obj: {_id: 16053,str: "Home Loan Account indigo port",date: new Date("2018-09-06T17:57:37.740Z"),obj: {}}},75534,{_id: 16054,num: 93616,date: new Date("2018-09-05T21:59:55.818Z"),array: []},"Extended","Mill Bedfordshire data-warehouse",new Date("2018-09-06T00:15:48.395Z"),"Applications",new Date("2018-09-06T03:00:58.142Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16055,str: "Burg incremental Investment Account",num: 69737,date: new Date("2018-09-06T02:29:52.744Z"),obj: {_id: 16056,num: 21718,date: new Date("2018-09-06T06:39:28.569Z"),array: ["neural Kids Keyboard",[39302,[new Date("2018-09-06T13:02:00.328Z"),4356,new Date("2018-09-06T10:10:14.220Z")],new Date("2018-09-06T14:05:56.097Z")],{_id: 16057,str: "Estates",num: 23681,array: [],obj: {}},{_id: 16058,str: "Canyon",date: new Date("2018-09-06T19:38:33.540Z"),array: [],obj: {}},"Corporate Intelligent Metal Cheese California",[],"Integration RAM",43474,82457,"Chief well-modulated",new Date("2018-09-05T22:44:52.906Z"),"Avon AGP"],obj: {_id: 16059,str: "Quality-focused foreground online",date: new Date("2018-09-06T16:48:59.855Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 16060,str: "ROI Towels",num: 53619,date: new Date("2018-09-06T04:54:15.779Z"),array: ["deliver",67589,new Date("2018-09-05T22:19:20.302Z"),96521,63369,{_id: 16061,str: "Arkansas hack",num: 75708,date: new Date("2018-09-06T06:25:22.315Z"),array: []},"bluetooth",[new Date("2018-09-06T09:09:55.659Z")],new Date("2018-09-06T12:21:33.915Z"),"index Texas parsing","streamline card Division","transmitting Groves Engineer",7005],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16062,str: "synthesizing Rustic",num: 86356,date: new Date("2018-09-06T05:37:27.742Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16063,str: "iterate",num: 34961,date: new Date("2018-09-06T12:29:04.254Z"),array: [],obj: {_id: 16064,num: 83356,date: new Date("2018-09-06T19:22:35.310Z"),array: [[25484],"override synthesizing","ADP Concrete incentivize",new Date("2018-09-06T06:39:20.842Z"),9666,new Date("2018-09-06T04:43:04.652Z"),new Date("2018-09-06T09:46:48.907Z"),new Date("2018-09-05T22:12:23.307Z"),29516,"Buckinghamshire Metal",14916,new Date("2018-09-06T19:44:42.967Z"),"Fantastic Roads"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16065,str: "parse",num: 27444,date: new Date("2018-09-06T09:25:40.202Z"),array: [],obj: {_id: 16066,num: 59241,date: new Date("2018-09-06T09:41:42.922Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16067,str: "Passage synergies primary",num: 97852,date: new Date("2018-09-06T05:47:17.756Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16068,str: "Security",num: 36458,date: new Date("2018-09-06T01:19:34.214Z"),array: ["neural",97720,"Shirt Facilitator transmitting",[],{_id: 16069,str: "teal Granite",num: 27400,date: new Date("2018-09-06T04:40:48.426Z"),array: [],obj: {}},"COM Ameliorated port",new Date("2018-09-06T13:06:52.822Z"),[],72735,"sky blue",[]],obj: {_id: 16070,str: "Turnpike Savings Account Manager",num: 83025,array: [new Date("2018-09-06T13:54:31.006Z"),9550,88323,63224],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16071,str: "lime Micronesia bandwidth-monitored",num: 49326,date: new Date("2018-09-06T13:59:29.231Z"),array: [new Date("2018-09-06T12:03:47.839Z"),53194,"Credit Card Account Designer intuitive",{_id: 16072,str: "TCP Cambridgeshire",num: 87216,date: new Date("2018-09-06T14:06:33.563Z"),array: [],obj: {_id: 16073,num: 67504,array: []}},"Research Product",new Date("2018-09-05T23:16:57.654Z"),69317,"Plastic partnerships","Awesome Jewelery",73461],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16074,str: "index alarm",date: new Date("2018-09-06T16:07:32.137Z"),array: [[],new Date("2018-09-06T07:07:07.609Z"),"Regional monitoring",20064,80522,36392,{_id: 16075,num: 74709,date: new Date("2018-09-05T21:33:33.858Z"),array: [],obj: {}},"schemas bricks-and-clicks",81805,[]]});
    },

    function(coll) {
        return coll.insert({_id: 16076,num: 19620,date: new Date("2018-09-06T13:50:52.865Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16077,num: 47595,array: []});
    },

    function(coll) {
        return coll.insert({_id: 16078,str: "Tasty Steel Pizza HDD",num: 3578,date: new Date("2018-09-06T05:45:07.922Z"),array: [83824,new Date("2018-09-06T15:28:34.481Z"),"alarm XSS",88174,"tertiary",5132,[],{_id: 16079,str: "Arkansas",num: 98586,date: new Date("2018-09-06T05:05:03.097Z"),array: [],obj: {}},88694,new Date("2018-09-06T17:11:52.108Z"),{_id: 16080,str: "architectures Handmade",num: 73567,array: [89148],obj: {}},new Date("2018-09-05T21:19:54.262Z"),"systems Manor","Vermont"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16081,str: "South Carolina silver",num: 77446,date: new Date("2018-09-06T10:29:06.062Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16082,str: "Row Product",num: 51983,array: [new Date("2018-09-06T00:56:34.545Z"),[],new Date("2018-09-06T14:49:38.452Z"),new Date("2018-09-06T06:39:39.771Z"),30643,"Steel Personal Loan Account",[65431,"Grocery mobile Refined Cotton Hat"],36592,"Boliviano Mvdol plug-and-play visionary",{_id: 16083,date: new Date("2018-09-06T19:12:29.335Z"),array: [new Date("2018-09-06T08:17:59.510Z"),new Date("2018-09-06T19:23:26.290Z"),[24591],{_id: 16084,str: "withdrawal GB",num: 74261,date: new Date("2018-09-06T02:25:24.116Z"),obj: {_id: 16085,str: "connect",date: new Date("2018-09-06T03:55:36.148Z"),array: []}}]},21412,"transmitting"],obj: {_id: 16086,str: "withdrawal didactic olive",num: 35515,date: new Date("2018-09-06T07:44:01.923Z"),obj: {_id: 16087,str: "Coordinator envisioneer",num: 70966,date: new Date("2018-09-06T01:33:40.480Z"),array: [{_id: 16088,num: 794,date: new Date("2018-09-06T10:01:40.237Z"),array: ["COM wireless",{_id: 16089,num: 17440,array: []}],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 16090,str: "rich global",num: 90632,date: new Date("2018-09-05T20:00:43.528Z"),array: [88548,"deposit","Forward",new Date("2018-09-06T11:32:17.340Z"),{_id: 16091,array: [new Date("2018-09-06T19:51:08.342Z"),99033],obj: {}},23357,new Date("2018-09-05T22:01:54.649Z"),new Date("2018-09-06T14:32:39.735Z"),88511,87220],obj: {_id: 16092,str: "Sleek",date: new Date("2018-09-06T02:44:48.235Z"),array: [],obj: {_id: 16093,str: "Belgium deposit Manager",num: 69483,date: new Date("2018-09-06T06:31:28.626Z"),array: ["virtual Bond Markets Units European Composite Unit (EURCO)",[]],obj: {_id: 16094,str: "visualize",num: 36179}}}});
    },

    function(coll) {
        return coll.insert({_id: 16095,str: "override unleash Investment Account",num: 57000,date: new Date("2018-09-06T17:45:59.466Z"),array: [new Date("2018-09-06T02:50:32.328Z"),"Creative",new Date("2018-09-06T00:39:26.826Z"),89952,{_id: 16096,date: new Date("2018-09-05T20:51:57.211Z"),obj: {_id: 16097,str: "Agent",num: 91453,date: new Date("2018-09-06T10:38:22.510Z"),array: [],obj: {}}},66131,new Date("2018-09-06T03:37:27.889Z"),"Borders streamline",[],{_id: 16098,str: "hack microchip",date: new Date("2018-09-06T07:05:04.720Z"),array: [{_id: 16099,num: 64504,obj: {_id: 16100,str: "withdrawal",num: 63432,array: []}},[],68736],obj: {_id: 16101,num: 12926,date: new Date("2018-09-06T09:29:03.176Z"),obj: {}}},new Date("2018-09-06T11:11:51.831Z"),new Date("2018-09-06T19:16:13.010Z"),"Factors Madagascar copy"]});
    },

    function(coll) {
        return coll.insert({_id: 16102,str: "azure Sri Lanka",num: 14352,date: new Date("2018-09-06T03:04:40.685Z"),obj: {_id: 16103,str: "salmon Configuration Australian Dollar",num: 75228,date: new Date("2018-09-06T01:12:45.211Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16104,str: "Granite Fresh",num: 10248,date: new Date("2018-09-06T12:57:00.508Z"),array: ["Handcrafted Wooden Car Checking Account",5961,new Date("2018-09-06T01:17:37.331Z"),[],24023,new Date("2018-09-06T18:21:29.022Z"),52792]});
    },

    function(coll) {
        return coll.insert({_id: 16105,num: 96086,date: new Date("2018-09-05T21:51:05.076Z"),array: [new Date("2018-09-06T14:14:01.570Z"),12545,"content THX","Rwanda Franc",71187,[68892,new Date("2018-09-06T04:07:54.808Z")],"index Fantastic Steel Shirt Usability",new Date("2018-09-06T08:22:39.898Z"),{_id: 16106,str: "Kentucky Solutions Credit Card Account",num: 24637,date: new Date("2018-09-06T13:23:18.067Z"),array: [],obj: {}},new Date("2018-09-06T19:25:49.027Z"),[],{_id: 16107,str: "generate indexing RSS",array: [],obj: {}},{_id: 16108,str: "toolset Sleek Steel Towels Berkshire",date: new Date("2018-09-06T07:26:01.044Z"),array: [new Date("2018-09-06T09:54:29.219Z")],obj: {_id: 16109,str: "viral copy",num: 68568,date: new Date("2018-09-06T04:33:33.070Z"),obj: {_id: 16110,date: new Date("2018-09-06T13:38:32.873Z")}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16111,date: new Date("2018-09-06T11:43:32.190Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16112,str: "Computer Cambridgeshire synthesize",num: 95210,date: new Date("2018-09-06T05:32:42.740Z"),array: [[23750],"Internal upward-trending circuit","orchid SDD",new Date("2018-09-06T15:11:32.067Z"),{_id: 16113,str: "Hat Saint Helena Pound Metal",num: 3571,date: new Date("2018-09-06T04:16:15.783Z"),array: [new Date("2018-09-06T11:53:23.730Z")],obj: {}},"indexing",{_id: 16114,str: "feed",date: new Date("2018-09-06T07:44:56.331Z")},new Date("2018-09-06T15:47:23.065Z"),new Date("2018-09-06T14:57:48.453Z"),61035,"Pants invoice indigo",64098,[],"global bypass"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16115,str: "Liechtenstein synthesizing Brand",num: 50498,date: new Date("2018-09-06T19:05:15.809Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16116,str: "customized Unbranded Metal Shirt",date: new Date("2018-09-06T07:56:46.289Z"),array: [14869,{_id: 16117,str: "Intelligent Fresh Sausages",num: 81918,date: new Date("2018-09-06T13:33:20.853Z"),array: [],obj: {}},93514,"Future Fresh Frozen","Clothing",new Date("2018-09-05T20:47:26.586Z"),new Date("2018-09-05T21:32:41.960Z"),"Afghani HTTP user-centric"],obj: {_id: 16118,str: "Hill Chair",num: 50381,date: new Date("2018-09-06T07:58:17.154Z"),array: [],obj: { _id: 16119 }}});
    },

    function(coll) {
        return coll.insert({_id: 16120,str: "protocol",date: new Date("2018-09-05T23:03:37.731Z"),array: [],obj: {_id: 16121,num: 87637,array: [],obj: {_id: 16122,str: "clicks-and-mortar architect",num: 27839,date: new Date("2018-09-05T21:59:58.773Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 16123,num: 14045,date: new Date("2018-09-06T03:43:20.460Z"),array: [new Date("2018-09-06T01:22:33.861Z"),"deposit",new Date("2018-09-06T02:23:05.070Z"),{_id: 16124,str: "turquoise",num: 46182,date: new Date("2018-09-06T14:07:44.008Z"),array: ["Wooden",[]],obj: {_id: 16125,str: "Salad",num: 99769,array: [],obj: {}}},79486,new Date("2018-09-06T13:29:31.397Z"),new Date("2018-09-06T03:28:07.848Z"),[81242,new Date("2018-09-05T22:32:46.113Z")],14832,96791,"circuit Licensed Credit Card Account",78278,[{_id: 16126,str: "Handcrafted Plastic Pizza Soap",date: new Date("2018-09-06T02:17:26.550Z"),array: [],obj: {}},[{_id: 16127,str: "Tuna",num: 52483,date: new Date("2018-09-06T17:47:03.612Z"),obj: {_id: 16128,num: 57367,date: new Date("2018-09-06T10:13:46.260Z"),obj: {}}},[],"Branding"]]]});
    },

    function(coll) {
        return coll.insert({_id: 16129,str: "Associate Antigua and Barbuda portals",num: 6444,date: new Date("2018-09-05T22:32:51.188Z"),array: [],obj: {_id: 16130,str: "Investment Account Automotive Direct",num: 39115,date: new Date("2018-09-05T20:35:07.701Z")}});
    },

    function(coll) {
        return coll.insert({_id: 16131,str: "input Buckinghamshire",num: 72652,date: new Date("2018-09-06T15:36:01.850Z"),array: [],obj: {_id: 16132,str: "optical contextually-based",num: 41677,date: new Date("2018-09-06T12:07:12.363Z"),array: [new Date("2018-09-06T18:23:14.086Z"),new Date("2018-09-05T21:49:12.689Z"),2517,"Computer 1080p invoice","driver optimal","Fiji innovate Communications",{_id: 16133,str: "empower Metal web-enabled",date: new Date("2018-09-06T17:09:37.144Z"),array: [],obj: {_id: 16134,num: 16594,obj: {}}},78250,new Date("2018-09-06T07:28:06.359Z"),11788,[58153,[33698]],"Bedfordshire Balanced"],obj: {_id: 16135,str: "Bacon United Kingdom bandwidth",num: 904,date: new Date("2018-09-06T07:36:06.390Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 16136,str: "Small Global Savings Account",num: 60794,date: new Date("2018-09-06T04:06:48.376Z"),array: ["Kwacha Bedfordshire Cheese",new Date("2018-09-06T00:35:57.546Z"),new Date("2018-09-05T23:32:13.961Z"),36431,{_id: 16137,str: "Plastic sexy fault-tolerant",date: new Date("2018-09-06T19:33:02.158Z"),array: [],obj: {}},81542,96146,[23756],"Handmade feed Pizza",{_id: 16138,str: "Exclusive",num: 3574},"Avon multi-byte",new Date("2018-09-06T12:35:41.483Z"),["reboot Identity",{_id: 16139,str: "Hat Palladium",num: 23920,date: new Date("2018-09-06T18:36:11.424Z"),array: [],obj: {}},"Mouse 5th generation"]],obj: {_id: 16140,num: 21540,date: new Date("2018-09-06T19:36:39.763Z"),array: [new Date("2018-09-06T18:00:04.388Z"),[]],obj: {_id: 16141,str: "AGP Beauty Customer",num: 84690,date: new Date("2018-09-06T09:59:38.941Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 16142,num: 63530,date: new Date("2018-09-05T21:47:21.598Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16143,str: "primary Investor extend",num: 36707,date: new Date("2018-09-06T07:54:07.638Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16144,str: "Sleek Fresh Bike International",num: 36053,date: new Date("2018-09-06T01:33:46.485Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16145,str: "transmitting wireless challenge",num: 30646,date: new Date("2018-09-06T08:30:27.569Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16146,str: "Manors Cambridgeshire empower",num: 89742,date: new Date("2018-09-06T13:47:04.904Z"),array: [60899,[],"Forest Personal Loan Account",66093,44771,"XML Branding",new Date("2018-09-06T06:09:02.235Z"),{_id: 16147,str: "Refined Concrete Pizza metrics",num: 50284,date: new Date("2018-09-06T13:10:43.594Z"),obj: {}},new Date("2018-09-06T16:06:25.187Z"),"Steel object-oriented",new Date("2018-09-06T02:24:02.224Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16148,str: "implement Tasty coherent",num: 14094,array: [],obj: {_id: 16149,str: "Facilitator markets input",num: 1511,date: new Date("2018-09-06T01:32:24.477Z"),array: [new Date("2018-09-06T15:44:11.002Z"),49911,"Plastic",new Date("2018-09-06T15:41:38.436Z"),16717,"Compatible policy XSS",new Date("2018-09-06T19:39:34.569Z"),[],new Date("2018-09-05T22:31:08.856Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16150,num: 13630,date: new Date("2018-09-05T23:00:01.110Z"),array: [],obj: {_id: 16151,str: "Ergonomic Seamless",num: 75768,date: new Date("2018-09-06T17:33:25.166Z"),array: ["Internal",{_id: 16152,str: "system experiences Bahrain",num: 15891,date: new Date("2018-09-06T07:37:43.105Z"),array: [],obj: {}},715,new Date("2018-09-06T17:39:41.993Z"),[91811,new Date("2018-09-06T05:13:55.710Z")],87689,75681,"attitude Program","Brand Texas content-based",new Date("2018-09-05T21:47:59.624Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16153,str: "redefine Bahraini Dinar back-end",num: 35091,date: new Date("2018-09-06T19:19:51.035Z"),array: [["encryption Health",new Date("2018-09-06T17:13:30.679Z"),84654,76168,"Mall hacking International"],"Digitized Buckinghamshire Maine",new Date("2018-09-05T20:51:50.610Z"),new Date("2018-09-06T08:07:05.425Z"),[{_id: 16154,str: "Functionality",num: 79264,date: new Date("2018-09-06T12:09:28.207Z"),array: [],obj: {}}],39289,{_id: 16155,str: "platforms",num: 70452,date: new Date("2018-09-06T04:17:03.960Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16156,str: "Directives",num: 81165,date: new Date("2018-09-06T17:24:30.608Z"),array: [61136,18377,new Date("2018-09-06T04:03:56.669Z"),new Date("2018-09-06T15:13:21.141Z"),"purple eyeballs payment",new Date("2018-09-06T11:09:04.276Z"),"input Wall Credit Card Account",{_id: 16157,str: "Automated SDD",num: 7831,date: new Date("2018-09-06T12:40:04.458Z"),array: [[],60827],obj: {}},"Sports metrics",[],"Flats Keyboard Automated",{_id: 16158,str: "Kyat",num: 38061},{_id: 16159,str: "Lebanese Pound front-end Mews",num: 14103,date: new Date("2018-09-06T19:21:23.546Z"),array: [[],new Date("2018-09-06T02:27:59.854Z")]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16160,str: "Saint Helena Pound Money Market Account silver",num: 74238,date: new Date("2018-09-05T21:06:55.415Z"),array: ["Borders",new Date("2018-09-06T15:14:09.106Z"),{_id: 16161,str: "parallelism indexing application",num: 80872,date: new Date("2018-09-06T14:51:55.769Z"),array: [],obj: {}},new Date("2018-09-06T15:59:26.962Z"),9887,["Incredible",25843,[new Date("2018-09-06T19:43:31.005Z")],{_id: 16162,str: "Forward",num: 56911,date: new Date("2018-09-06T18:45:18.561Z"),array: [],obj: {_id: 16163,num: 677,date: new Date("2018-09-06T10:00:00.754Z"),array: ["Buckinghamshire JBOD synthesize","Pre-emptive"]}}],93043,{_id: 16164,str: "port invoice",date: new Date("2018-09-06T01:17:51.041Z"),array: [],obj: {_id: 16165,str: "Auto Loan Account back up Glens",obj: {_id: 16166,date: new Date("2018-09-06T11:07:22.144Z")}}},[],{_id: 16167,num: 33045,array: ["Health EXE"],obj: {}},21579]});
    },

    function(coll) {
        return coll.insert({_id: 16168,str: "Borders Savings Account Awesome",num: 37282,date: new Date("2018-09-06T17:11:34.646Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16169,str: "Incredible Fresh Pizza Triple-buffered",num: 63870,date: new Date("2018-09-06T16:45:54.159Z"),array: ["North Dakota approach",new Date("2018-09-06T11:58:11.171Z"),"tangible Table",91632,["Bacon",64181,new Date("2018-09-06T16:30:58.107Z")],{_id: 16170,str: "solid state",num: 55887,array: []},6844,new Date("2018-09-06T03:21:58.803Z"),56031,[]],obj: {_id: 16171,str: "auxiliary framework Automotive",num: 27802,date: new Date("2018-09-06T03:33:37.243Z"),array: [{_id: 16172,num: 28714,date: new Date("2018-09-06T06:25:53.321Z"),obj: {}},new Date("2018-09-06T16:50:50.590Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16173,str: "envisioneer Fantastic Wooden Tuna withdrawal",num: 16920,date: new Date("2018-09-06T07:41:27.052Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16174,str: "Chips",num: 63702,date: new Date("2018-09-06T15:30:14.119Z"),array: [80301,new Date("2018-09-06T17:32:21.471Z"),{_id: 16175,str: "Stravenue",num: 22316,date: new Date("2018-09-06T16:13:28.715Z"),obj: {}},new Date("2018-09-06T07:15:55.243Z"),new Date("2018-09-06T19:22:00.498Z"),"Plains",23329,[],"value-added Croatian Kuna","Checking Account Chair",new Date("2018-09-06T06:58:47.874Z"),71197,35052],obj: {_id: 16176,str: "azure Investment Account sky blue",num: 9124,date: new Date("2018-09-06T14:41:07.747Z"),array: ["Rustic Soft Towels",{_id: 16177,num: 12590,array: []}],obj: {}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.str": -1, "date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayToObject: [[[],[39917,45925]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $dateToString: { date: '$obj.obj.date' } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $filter: {input: [{ $toLower: { $substrBytes: ["Venezuela Engineer Cotton",11,20] } }],as: 'ashlynn',cond: { $or: [] }} } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToString: {date: new Date("2018-09-06T05:30:30.517Z"),format: "%U-%Y-%V-%V-%Y-%V-%G",timezone: "Europe/Warsaw",onNull: "radical Kentucky"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],64294] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $month: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $ceil: '$obj.num' },minute: { $trunc: '$obj.obj.num' },millisecond: { $divide: ['$obj.obj.obj.num',{ $add: [40045] }] }} } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrBytes: ["Rustic Fresh Shoes EXE reboot",2,14] },'$str','$obj.obj.obj.str'],as: 'princess',cond: { $not: [{ $second: { $isoWeekYear: { $dayOfYear: { $week: { $dayOfWeek: { $isoWeek: { $year: { $isoWeek: { $millesecond: { $isoWeekYear: { $year: { $isoDayOfWeek: { $millesecond: { $month: { $dateFromString: {dateString: "2018-09-06T09:22:08.527Z",format: "%G-%j-%j-%G-%G-%Y-%j-%w-%Z",timezone: "Asia/Hovd"} } } } } } } } } } } } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Ameliorated Tools Assurance" } }, _id: 0}}],

        [{$project: {a: { $range: [17,14] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "niches primary port",v: false},{k: "Sleek",v: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $floor: 61641 },isoWeek: { $floor: 8092 },hour: { $ln: 49321 },millisecond: { $indexOfArray: [{ $filter: {input: ['$obj.obj.obj.num','$obj.num','$num'],as: 'velva',cond: { $gte: [{ $zip: {inputs: [[80529],['$$velva'],["orchestrate gold"]],useLongestLength: false,defaults: []} },{ $arrayElemAt: [[],90264] }] }} },{ $substr: [{ $toString: { $second: { $dayOfWeek: { $dayOfMonth: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T06:35:09.718Z",timezone: "America/Argentina/La_Rioja",onError: { $arrayElemAt: [[],{ $cmp: [{ $concatArrays: [[],['$obj.num'],[],[{ $toLower: '$str' },'$str',"Springs","parse primary 24/7"]] },{ $substrCP: [{ $toString: new Date("2018-09-06T15:47:21.828Z") },10,10] }] }] },onNull: '$obj.obj.obj.str'} } } } } } },8,17] },17] },timezone: "Africa/Harare"} },iso8601: false} }},{k: "open-source experiences",v: { $toLower: '$obj.obj.obj.str' }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "flexibility open-source",v: true},{k: "Tasty Cotton Pizza",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $substrCP: ["drive Colorado",8,13] },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str',"purple lime Egyptian Pound",'$obj.obj.str'],as: 'gerardo',in: { $subtract: [57972,'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fresh Designer Enterprise-wide",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $second: { $toDate: { $toLower: "Sri Lanka Handcrafted Metal Shoes Beauty" } } } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.obj.str'],[],["help-desk Rustic",'$obj.str','$obj.obj.obj.str'],[{ $trim: { input: "envisioneer generate" } },{ $substr: [{ $toLower: '$obj.obj.str' },5,9] },"Netherlands Antillian Guilder Direct"]] } }, _id: 0}}],

        [{$project: {a: { $range: [5,7] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: { $substrCP: ["synthesize 1080p Car",5,16] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],93459] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Advanced orange",v: { $multiply: [] }},{k: "Wisconsin",v: { $month: { $dateToString: { date: '$obj.date' } } }},{k: "transmitting Principal Outdoors",v: "circuit"}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Automotive" } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromString: {dateString: "2018-09-06T14:54:32.507Z",onNull: { $isoWeekYear: { $toDate: { $reverseArray: [["Pre-emptive",'$str']] } } }} } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfYear: { $toDate: { $toString: { $arrayToObject: [[{k: "application Bedfordshire",v: new Date("2018-09-05T20:59:21.237Z")},{k: "Wells hard drive",v: "embrace Fantastic transparent"}]] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [11,10] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToString: {date: new Date("2018-09-05T20:58:28.987Z"),format: "%w-%z-%M-%u",timezone: "Africa/Malabo",onNull: { $substr: [{ $trim: {input: "Sports innovative",chars: "Assistant leading-edge"} },17,6] }} },timezone: "Africa/Accra"} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrBytes: ['$obj.str',12,3] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[99571],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[79645],["District Fantastic Ergonomic"]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $substrCP: [{ $substrBytes: ['$obj.obj.obj.str',14,9] },12,14] },'$obj.obj.obj.str',"SCSI"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "IB Indian Rupee",v: false},{k: "Baby Lights Jewelery",v: '$obj.obj.obj.date'},{k: "e-enable Developer",v: "Incredible"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Utah local Home",v: '$obj.date'},{k: "TCP",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $mod: [7453,'$obj.num'] },isoWeek: { $log10: 83629 },isoDayOfWeek: { $abs: '$obj.obj.num' },minute: { $divide: [36566,'$num'] },timezone: "Asia/Srednekolymsk"} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $millesecond: { $dateToParts: {date: { $second: { $isoWeek: { $dateToParts: {date: { $dateFromParts: {year: { $sqrt: { $sqrt: '$obj.obj.num' } },day: { $trunc: '$obj.obj.num' },second: { $ceil: '$obj.obj.num' },millisecond: 68133,timezone: "Pacific/Noumea"} },iso8601: true} } } },iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T05:57:41.356Z",format: "%m-%M-%H-%M-%H-%L-%Y-%V-%j",timezone: "US/Aleutian",onError: { $arrayToObject: [[{k: "Digitized",v: { $rtrim: { input: '$str' } }}]] }} } }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $dayOfMonth: { $second: { $isoWeekYear: { $dateToString: {date: { $dateToParts: {date: { $dayOfWeek: { $month: { $dayOfWeek: { $toDate: { $arrayElemAt: [[],'$obj.num'] } } } } },timezone: "Africa/Nouakchott",iso8601: false} },format: "%m-%V-%M-%L-%Z-%L-%w-%G-%L",onNull: { $map: {input: [{ $ltrim: { input: { $toLower: { $concat: ['$obj.str'] } } } }],as: 'nora',in: { $mod: ['$$nora',46663] }} }} } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: '$obj.obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "embrace",v: new Date("2018-09-05T20:44:14.681Z")},{k: "expedite",v: '$num'},{k: "Libyan Dinar protocol Music",v: { $trim: { input: "Facilitator user-centric" } }}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substr: ["Home Loan Account",3,19] }],as: 'jovani',cond: { $lte: [{ $toLower: '$$jovani' },{ $arrayElemAt: [[],'$$jovani'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[96427,'$num','$num'],[],["Automotive Integration Fort","Panama"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: '$str' } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $millesecond: { $millesecond: { $isoDayOfWeek: { $toDate: { $dateToString: {date: '$date',format: "%Y-%H-%w-%U-%Y-%m-%u",onNull: { $arrayElemAt: [['$obj.obj.str'],78243] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$obj.obj.num'],46367] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'gerda',in: '$$gerda'} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "lime Wisconsin proactive",chars: "copy bypass bandwidth"} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toUpper: { $toLower: '$obj.obj.str' } },11,7] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: ["matrix Common Factors",'$obj.str'] },20,6] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],95418] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[26511],['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["deposit"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',11,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["withdrawal Awesome"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$obj.str',7,11] },'$obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfYear: { $dayOfWeek: { $week: { $second: { $dateToParts: {date: { $dateFromParts: {year: { $pow: [99145,37594] },hour: { $multiply: ['$obj.obj.obj.num','$obj.obj.obj.num',{ $mod: [99908,'$obj.obj.num'] },'$obj.obj.obj.num'] },second: { $ln: '$num' },millisecond: { $trunc: '$obj.obj.obj.num' },timezone: "America/Edmonton"} },timezone: "Asia/Phnom_Penh"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],68629] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str',"West Virginia Czech Koruna"],cond: { $eq: [{ $arrayElemAt: [[],'$num'] },{ $dayOfMonth: new Date("2018-09-06T18:51:03.876Z") }] }} }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $concat: [] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: 37821,month: { $pow: ['$obj.num','$obj.obj.num'] },day: { $indexOfArray: [{ $concatArrays: [[65947],[{ $trim: { input: "South Carolina" } },"AI deposit Credit Card Account"]] },{ $arrayElemAt: [["eyeballs Pizza time-frame",{ $substrBytes: ['$obj.obj.str',1,15] }],43427] },0] },hour: { $cmp: [{ $arrayToObject: [[{k: "Fresh Czech Koruna Mountain",v: new Date("2018-09-05T20:09:43.231Z")},{k: "circuit dynamic Investment Account",v: true},{k: "maximized Strategist Route",v: false}]] },{ $toString: { $arrayElemAt: [[],'$obj.obj.num'] } }] },minute: { $exp: '$obj.num' },second: { $floor: { $multiply: [] } }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str',true],as: 'raegan',cond: { $gte: [{ $trim: {input: '$$raegan',chars: { $rtrim: { input: "Lead" } }} },{ $arrayElemAt: [[],'$obj.obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],50958] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: "overriding Yemeni Rial" },"generating lime",'$obj.obj.str'],[82861],[85457,'$obj.obj.num','$obj.obj.num',26726],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["networks Incredible COM"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $divide: ['$obj.num','$obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateToParts: {date: new Date("2018-09-05T20:51:29.022Z"),timezone: "Asia/Harbin",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $month: { $millesecond: { $week: { $dateFromParts: {isoWeekYear: { $sqrt: '$obj.obj.obj.num' },isoWeek: { $sqrt: 43434 },isoDayOfWeek: { $pow: [40380,'$obj.obj.obj.num'] },second: { $log: [{ $abs: 60318 },'$num'] }} } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Representative optimize",chars: { $toUpper: "Tasty Concrete Tuna Accountability aggregate" }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[813],[9964]] }, _id: 0}}],

        [{$project: {a: { $toString: { $objectToArray: '$obj' } }, _id: 0}}],

        [{$project: {a: { $month: { $dateToParts: {date: { $isoWeek: { $dateFromParts: {isoWeekYear: { $pow: ['$num',25963] },isoDayOfWeek: { $indexOfArray: [{ $range: [16,0,0] },{ $arrayElemAt: [['$obj.obj.str'],{ $cmp: [{ $dayOfYear: { $dateToString: {date: new Date("2018-09-06T18:39:31.564Z"),format: "%m-%m-%u-%j-%m-%z-%%-%S"} } },{ $arrayElemAt: [['$obj.obj.num'],13469] }] }] },20] },minute: { $size: [[{ $dateToString: {date: { $second: { $dateFromString: {dateString: "2018-09-06T14:11:16.611Z",format: "%M-%w-%M-%L-%G-%m-%Y",timezone: "America/Monterrey",onError: { $filter: {input: [],as: 'flossie',cond: { $ne: [{ $rtrim: { input: '$$flossie' } },{ $arrayToObject: [[{k: "Chair Savings Account",v: { $ln: 10019 }}]] }] }} }} } },onNull: { $ltrim: {input: "Forward Jersey Investment Account",chars: "scalable invoice Industrial"} }} }]] },second: { $log10: '$num' }} } },timezone: "Australia/Broken_Hill",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substrCP: [{ $trim: { input: "THX" } },8,12] },16,9] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',60411,5530],89404] }, _id: 0}}],

        [{$project: {a: { $year: { $hour: { $dateFromParts: {year: { $log: ['$obj.obj.obj.num','$obj.obj.num'] },day: { $ln: '$num' },minute: { $trunc: 57213 },millisecond: { $add: [14563] }} } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $week: { $isoWeekYear: { $month: { $millesecond: { $dateFromString: {dateString: "2018-09-06T07:00:38.420Z",timezone: "Pacific/Marquesas"} } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $toLower: "Infrastructure" },chars: { $trim: {input: "Towels Serbian Dinar Exclusive",chars: { $dateToString: {date: new Date("2018-09-05T22:05:12.520Z"),onNull: '$obj.str'} }} }} }, _id: 0}}],

        [{$project: {a: { $month: { $year: { $isoDayOfWeek: { $dayOfMonth: { $dayOfYear: { $dayOfYear: new Date("2018-09-06T16:58:53.920Z") } } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $ltrim: {input: { $substrBytes: ['$obj.obj.obj.str',18,20] },chars: "TCP bypass"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Spurs",v: "Accountability"},{k: "payment 1080p Rubber",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Awesome Concrete Shoes",v: '$str'},{k: "Georgia Squares",v: { $month: { $dateFromString: {dateString: "2018-09-06T02:55:17.276Z",format: "%%-%H-%m-%Y",onNull: "multi-byte invoice lavender"} } }}]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $trim: {input: '$obj.obj.obj.str',chars: "Sports"} },"Optimized Forge"] }, _id: 0}}],

        [{$project: {a: { $substr: ["XSS compress",18,16] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[10702],['$obj.str',{ $ltrim: {input: '$obj.obj.str',chars: { $substr: ["Kids integrate Jersey",19,16] }} }],['$obj.obj.obj.str',"Spring extensible"],[]]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',18,10] }, _id: 0}}],

        [{$project: {a: { $range: [18,17,18] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Serbian Dinar intangible"],as: 'reilly',in: { $log: [2871,45210] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Games emulation",v: new Date("2018-09-06T04:13:46.197Z")}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfYear: { $dayOfMonth: { $isoWeek: { $week: { $dateToString: {date: { $dateToParts: {date: { $hour: { $isoWeekYear: { $isoWeek: { $week: { $hour: { $month: { $dateToString: {date: new Date("2018-09-06T16:20:16.286Z"),onNull: { $arrayElemAt: [[],{ $indexOfArray: [{ $range: [16,12,2] },{ $dayOfWeek: { $isoWeek: { $toDate: { $rtrim: {input: { $toUpper: "View Home Loan Account" },chars: "Beauty maroon"} } } } }] }] }} } } } } } } },timezone: "Asia/Karachi",iso8601: false} },format: "%d-%Z-%M-%w"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],7834] }, _id: 0}}],

        [{$project: {a: { $minute: { $hour: { $isoWeek: { $minute: { $second: new Date("2018-09-06T06:30:10.601Z") } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Supervisor Rustic",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $millesecond: new Date("2018-09-06T12:03:32.833Z") } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $week: { $dayOfMonth: { $minute: { $isoDayOfWeek: { $year: { $dateToParts: { date: { $isoWeekYear: { $dayOfYear: { $dayOfYear: { $dayOfMonth: { $month: { $toDate: { $dateToString: {date: new Date("2018-09-05T22:11:56.042Z"),format: "%m-%L-%U-%d-%G-%S-%Y-%u",timezone: "America/Belem"} } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "Tasty online Grocery",v: { $concat: [{ $substr: ['$str',11,2] },"Tasty HTTP directional",'$obj.obj.obj.str'] }},{k: "Monitored",v: new Date("2018-09-06T12:46:15.007Z")},{k: "navigating",v: 80047}]] } }, _id: 0}}],

        [{$project: {a: { $concat: ["Cambridgeshire models online",{ $substrCP: ["Producer Lempira",10,4] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "high-level",v: true}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $rtrim: { input: "cyan Oklahoma" } },chars: "online Light Metical"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',82211],["Granite optimizing China"],[]]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $ln: '$obj.num' },day: { $ceil: 20928 },minute: { $indexOfArray: [{ $map: {input: ["synthesizing online"],as: 'jordy',in: { $sqrt: 77940 }} },{ $arrayElemAt: [['$obj.num',79633],{ $floor: '$obj.obj.num' }] },20] },millisecond: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Mews"]]] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromParts: {isoWeekYear: { $ceil: '$obj.obj.num' },hour: { $multiply: [88435,'$obj.num'] },minute: 49414,second: { $exp: 69636 },millisecond: { $multiply: ['$obj.obj.obj.num','$obj.obj.num',14793,{ $mod: ['$obj.obj.obj.num',60335] }] }} } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $ltrim: {input: '$obj.obj.obj.str',chars: "rich Algeria back-end"} },8,9] }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $dateFromParts: {year: { $abs: '$obj.obj.num' },day: { $pow: ['$num',72664] },hour: 79188,minute: { $divide: ['$obj.num','$obj.num'] },second: { $ceil: 18777 },timezone: "America/Dominica"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',3842,24639,'$obj.obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "capability",v: '$obj.obj.num'},{k: "Wooden Massachusetts",v: { $log10: 64192 }},{k: "Outdoors",v: { $substr: ["explicit Games",7,15] }},{k: "Avon SMS",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $rtrim: {input: '$obj.str',chars: '$str'} } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substrBytes: ['$obj.obj.str',1,4] },4,19] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],['$str',{ $dateToString: {date: { $hour: { $second: { $dateToParts: {date: { $week: { $dateToString: {date: '$obj.obj.date',format: "%V-%U-%%-%M-%V-%u-%M-%M",onNull: "Licensed Steel Gloves Belgium"} } },timezone: "Europe/Volgograd"} } } },format: "%u-%u-%%-%%-%j-%M-%d-%z-%V",timezone: "America/Porto_Acre",onNull: "compress"} }],[{ $substrBytes: ["parse matrix",6,13] }]]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str',"Metal payment generate","Granite cross-platform"]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'pierre',in: { $cmp: [{ $ltrim: {input: { $toLower: { $substrBytes: ["Virginia",8,7] } },chars: '$$pierre'} },{ $second: { $dateFromParts: {year: { $ceil: '$$pierre' },hour: { $log: [24044,'$$pierre'] },minute: { $indexOfArray: [{ $range: [15,16,14] },{ $objectToArray: '$$pierre' },1,1] }} } }] }} }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: { $isoDayOfWeek: new Date("2018-09-06T13:33:16.832Z") } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $ltrim: {input: '$str',chars: { $trim: { input: { $substrCP: ["Avon vertical Supervisor",16,10] } } }} },4,18] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.num'],["Nuevo Sol"],['$obj.obj.obj.num',66483,{ $abs: 4695 },{ $size: [['$obj.obj.obj.str']] }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Personal Loan Account feed"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[54118,'$obj.obj.num'],67826] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: {date: '$obj.obj.date',format: "%j-%S-%z-%w-%Z-%Z-%U-%%-%Y-%H-%M-%L",timezone: "America/Puerto_Rico"} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toString: { $range: [16,16] } },6,16] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account overriding extranet",v: 66303}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $week: { $hour: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T14:52:13.562Z",format: "%w-%d-%d-%z-%G-%M",timezone: "Asia/Novokuznetsk",onError: { $arrayElemAt: [["didactic Rapids",'$str'],'$num'] }} } } } },'$obj.obj.obj.num',false,true],'$num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: '$date' }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToParts: { date: { $dayOfMonth: { $week: { $second: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $divide: ['$obj.obj.num',88920] },isoWeek: { $size: [[{ $substr: ["European Unit of Account 9(E.U.A.-9)",4,5] }]] },isoDayOfWeek: { $divide: [88716,'$num'] },hour: { $trunc: { $add: ['$num'] } },second: { $sqrt: '$obj.obj.obj.num' },millisecond: { $subtract: [87103,5445] }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: "EXE bandwidth-monitored" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Keyboard",{ $dateToString: {date: { $toDate: { $dayOfWeek: { $month: { $year: { $hour: { $dateToParts: {date: { $dayOfYear: { $isoWeekYear: { $dayOfMonth: { $minute: { $dateFromParts: {isoWeekYear: { $log: [19495,'$obj.obj.obj.num'] },hour: { $size: [['$obj.num']] },millisecond: { $ceil: 14598 }} } } } } },timezone: "Etc/GMT+3"} } } } } } },onNull: { $range: [19,20] }} }],43586] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toUpper: '$obj.str' },7,1] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "withdrawal",v: false}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[98807]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $week: { $dateToParts: {date: { $millesecond: { $second: { $toDate: { $arrayToObject: [[['$obj.obj.str'],[{ $toLower: '$str' },{ $rtrim: { input: "Investment Account Progressive Saint Barthelemy" } },"sky blue"],[],[21415,'$obj.num'],["Automated systemic","Minnesota SAS",{ $dateToString: {date: '$obj.obj.obj.date',format: "%H-%w-%L-%L-%M-%Z",timezone: "Etc/GMT+9",onNull: "teal non-volatile monitoring"} }],[]]] } } } },iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "protocol",v: { $ltrim: { input: '$obj.obj.obj.str' } }},{k: "haptic deposit reciprocal",v: '$obj.obj.obj.date'},{k: "Uganda Shilling monetize deposit",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],52353] }, _id: 0}}],

        [{$project: {a: { $toString: { $isoDayOfWeek: { $isoDayOfWeek: { $dayOfMonth: { $dateToParts: {date: { $dayOfYear: { $dateToString: {date: '$date',timezone: "US/Central",onNull: { $concatArrays: [[96992],[{ $substr: ["Multi-tiered",8,7] }],[{ $dateToString: {date: '$obj.date',format: "%m-%w-%Y-%z-%Z-%G-%u-%S-%Y-%u-%S"} },'$obj.obj.obj.str',"USB","Facilitator",'$obj.str']] }} } },timezone: "Etc/GMT+8",iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Producer Pennsylvania","Table"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substrCP: ["programming Saint Vincent and the Grenadines",14,14] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.str',12,8] }],3765] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $week: { $month: { $millesecond: { $second: { $hour: { $dateToString: {date: '$date',format: "%Z-%d-%d-%m-%U"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $millesecond: { $dateFromParts: {year: { $divide: [16051,'$obj.obj.obj.num'] },month: { $floor: 85730 },day: { $log: [{ $add: [] },{ $log10: '$obj.obj.obj.num' }] },hour: { $multiply: ['$num','$obj.obj.obj.num',78059] },minute: { $mod: [53876,'$obj.obj.obj.num'] },second: { $log10: 94998 }} } } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str'],in: { $ln: '$obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "alarm coherent",v: { $dateFromParts: {year: { $pow: ['$num',82108] },hour: { $abs: { $pow: [{ $log10: '$obj.obj.num' },50813] } },second: { $exp: 55719 },millisecond: { $floor: '$obj.obj.num' }} }},{k: "Clothing Metal",v: 5215}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: { $hour: { $year: { $toDate: { $arrayElemAt: [['$obj.obj.num'],29407] } } } },onNull: { $arrayElemAt: [[],10613] }} }],[98451,72458,'$obj.obj.obj.num'],["convergence Buckinghamshire","portals Rubber",'$obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Generic evolve",'$obj.obj.str',"Cambridgeshire"],['$obj.obj.num'],[],['$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],["Ball violet National"],[29816],["Jordanian Dinar pixel","eyeballs",{ $substrBytes: ['$obj.obj.obj.str',4,9] }]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: "Frozen mission-critical",chars: "IB"} }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Up-sized Tenge" }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $millesecond: { $isoWeek: { $millesecond: { $millesecond: { $isoWeekYear: { $second: { $dayOfYear: '$obj.date' } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $zip: {inputs: [["withdrawal Island",'$obj.str'],['$obj.obj.num',46363,{ $ceil: '$obj.num' }]],defaults: ["Nauru Rubber North Carolina",{}]} } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $minute: { $month: { $toDate: { $arrayElemAt: [[],22566] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $toLower: "Burg orchestration" }],[],[{ $substr: ['$obj.str',19,12] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["invoice"],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfYear: new Date("2018-09-06T12:09:20.858Z") },format: "%S-%j-%u-%S-%%-%G-%V",onNull: { $zip: {inputs: [['$str'],['$obj.obj.obj.str']],useLongestLength: true} }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bandwidth",v: '$obj.num'},{k: "multi-byte",v: { $millesecond: { $year: { $dayOfWeek: { $dayOfWeek: { $dayOfMonth: { $isoDayOfWeek: { $month: { $dayOfMonth: { $week: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-05T21:25:49.528Z",format: "%G-%H-%m-%U-%Y",timezone: "Universal",onNull: '$obj.obj.str'} } } } } } } } } } } }},{k: "Bond Markets Units European Composite Unit (EURCO) Fords synthesize",v: "Wisconsin"}]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',14,15] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],["archive program withdrawal"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Lead optimal"],[false,"Mission",'$obj.date'],[{ $toString: { $dateFromString: {dateString: "2018-09-06T10:32:15.335Z",format: "%u-%S-%d-%Y-%V-%m-%U-%w",onError: { $arrayElemAt: [[{ $substrCP: ['$str',4,2] },{ $rtrim: {input: '$obj.obj.obj.str',chars: "navigating invoice"} }],37316] }} } }],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[67244],['$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $pow: [90463,'$obj.obj.num'] },hour: 22778,second: { $ceil: { $add: [] } },timezone: "America/Martinique"} }, _id: 0}}],

        [{$project: {a: { $year: { $isoDayOfWeek: { $month: { $dateToParts: { date: { $dateFromParts: {year: { $abs: 87511 },month: { $indexOfArray: [{ $filter: {input: [20991],cond: { $gt: [{ $year: new Date("2018-09-06T15:30:18.669Z") },{ $arrayElemAt: [["Metal hard drive District"],'$$this'] }] }} },{ $arrayElemAt: [[],'$num'] },18] },day: { $cmp: [{ $arrayElemAt: [[],35737] },{ $toUpper: "Metal Cambridgeshire facilitate" }] },hour: { $divide: [61423,21432] },minute: { $exp: '$obj.num' },millisecond: { $ceil: '$num' },timezone: "Indian/Antananarivo"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Industrial collaboration fuchsia",v: true}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Fork eco-centric",{ $toUpper: '$obj.obj.str' },"visualize Accounts intuitive"],[],['$obj.num'],['$obj.obj.obj.str'],["Computers Sleek Frozen Towels Rubber","Intelligent parse leading-edge"],[false]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "primary pixel",v: true},{k: "vortals",v: '$obj.obj.obj.date'},{k: "Slovakia (Slovak Republic) Points",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "discrete" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "artificial intelligence Plastic copy",v: new Date("2018-09-06T16:21:21.315Z")},{k: "grow",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $ltrim: { input: '$obj.obj.obj.str' } },chars: { $concat: ["Views Mobility sky blue"] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$num']] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T16:14:28.551Z",timezone: "America/Lima"} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[71890,'$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "payment",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: new Date("2018-09-06T13:00:05.289Z") }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "teal",v: true}]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-05T23:42:25.429Z",timezone: "Asia/Novokuznetsk",onError: { $reverseArray: [["Investment Account Frozen strategic"]] }} } }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toUpper: { $toLower: '$obj.str' } },"Table"],in: { $sqrt: 92923 }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T07:09:01.210Z"),timezone: "Pacific/Funafuti",onNull: { $arrayElemAt: [['$obj.obj.str',{ $concat: ["Checking Account Auto Loan Account enterprise"] }],91111] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T12:17:02.227Z" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Afghanistan",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "override CSS",v: "pixel"},{k: "wireless Buckinghamshire",v: { $rtrim: { input: '$obj.str' } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $sqrt: 28909 }],[],[{ $toLower: '$obj.str' }],[],[],["mint green Handmade",'$obj.str'],[{ $dateToParts: {date: { $toDate: { $concatArrays: [] } },iso8601: false} },true]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Mission gold invoice"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[new Date("2018-09-06T04:08:18.792Z"),{ $second: { $toDate: { $filter: {input: [58538,'$obj.obj.obj.num'],as: 'maybelle',cond: { $isArray: [{ $zip: {inputs: [["Sleek Handmade Plastic Bike"],['$$maybelle',"Auto Loan Account"],[]],useLongestLength: true} }] }} } } }],80766] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $ltrim: { input: "Consultant payment" } },'$str'],[73824,'$obj.obj.obj.num'],[{ $rtrim: {input: { $dateToString: { date: new Date("2018-09-06T07:08:57.788Z") } },chars: "collaborative Synchronised"} },'$obj.obj.obj.str',"Tools",{ $toString: { $minute: { $millesecond: { $millesecond: { $dayOfWeek: { $dateFromString: { dateString: "2018-09-06T09:13:21.162Z" } } } } } } }],[],[13621,39738]],defaults: ["e-markets JSON copying"]} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $toDate: { $toLower: { $substrCP: ["Chief customized Health",14,0] } } },iso8601: false} }, _id: 0}}],

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
