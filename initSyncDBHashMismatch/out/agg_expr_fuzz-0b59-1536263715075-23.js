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
        return coll.insert({_id: 14392,str: "Towels Unbranded Fresh Sausages",num: 70502,array: [new Date("2018-09-06T11:01:50.684Z"),"Ukraine Managed Forward",new Date("2018-09-06T04:09:34.478Z"),8971,"Home Loan Account Fantastic",["tertiary",77803,new Date("2018-09-06T11:46:53.777Z"),new Date("2018-09-06T07:11:15.251Z"),67732]]});
    },

    function(coll) {
        return coll.insert({_id: 14393,str: "Up-sized orange",num: 32459,date: new Date("2018-09-06T19:08:07.300Z"),array: [{_id: 14394,str: "deposit",num: 26478,date: new Date("2018-09-05T21:33:03.291Z"),obj: {_id: 14395,str: "invoice cultivate",num: 23604,date: new Date("2018-09-06T09:59:29.958Z"),array: []}},50633,"partnerships Soap",new Date("2018-09-06T04:52:40.367Z"),67195,96051,new Date("2018-09-06T07:54:38.116Z"),"RAM Generic",new Date("2018-09-06T17:38:39.696Z"),{_id: 14396,str: "scale",date: new Date("2018-09-06T12:56:02.878Z"),array: [[],"Diverse Assimilated"],obj: {}},"Fantastic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14397,str: "bypass",num: 5505,date: new Date("2018-09-05T22:04:10.081Z"),array: [22782,5954,new Date("2018-09-06T03:34:56.987Z"),{_id: 14398,str: "Accounts Towels contextually-based",num: 61332,date: new Date("2018-09-06T19:25:38.750Z"),array: []},[],"Incredible Granite Salad",{_id: 14399,str: "Solutions Identity Steel",num: 56507,date: new Date("2018-09-06T08:00:46.114Z"),array: [],obj: {_id: 14400,num: 66907,array: ["bluetooth experiences","Sleek Wooden Chair Senior"],obj: {}}},[20566,{_id: 14401,num: 76601,obj: {}},new Date("2018-09-06T18:54:31.499Z"),"gold"],6454,86575,[new Date("2018-09-06T15:07:50.427Z"),new Date("2018-09-06T12:51:28.874Z")]],obj: {_id: 14402,str: "Computer Rustic Steel Fish transmit",num: 93965,date: new Date("2018-09-06T19:20:46.429Z"),array: [],obj: {_id: 14403,str: "Keyboard",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14404,str: "implementation Wooden benchmark",num: 20829,date: new Date("2018-09-06T05:34:07.150Z"),array: ["Ball metrics content",new Date("2018-09-06T08:58:27.896Z"),{_id: 14405,str: "Liaison bus",num: 79065,date: new Date("2018-09-05T20:12:23.682Z"),array: [],obj: {_id: 14406,num: 24351,date: new Date("2018-09-05T23:24:23.956Z"),obj: {_id: 14407,str: "Ohio",num: 96232,date: new Date("2018-09-06T07:21:35.725Z"),array: [[16261,new Date("2018-09-06T14:24:30.945Z")],new Date("2018-09-06T16:54:16.114Z"),"actuating Plastic Auto Loan Account",{_id: 14408,str: "Norway",num: 81273,array: [],obj: {}},{_id: 14409,str: "Practical Metal Tuna Leone Nigeria",date: new Date("2018-09-05T20:15:32.364Z"),array: [],obj: {}}]}}},33379,48396,"Licensed Rubber Table functionalities","deposit Lead Ergonomic","metrics haptic",27118],obj: { _id: 14410 }});
    },

    function(coll) {
        return coll.insert({_id: 14411,str: "Salad",num: 49805,date: new Date("2018-09-06T01:59:29.967Z"),array: ["Regional Rustic Cotton Car Baby",new Date("2018-09-06T06:50:59.459Z"),[],60308,new Date("2018-09-05T22:53:11.536Z"),96418,64818,new Date("2018-09-06T08:49:57.752Z"),"Rwanda Franc Centers magenta",{_id: 14412,str: "virtual invoice",num: 13956,date: new Date("2018-09-06T03:36:41.764Z"),obj: {_id: 14413,str: "Clothing open-source",num: 84991,date: new Date("2018-09-06T18:42:56.845Z"),array: [41847],obj: {}}},new Date("2018-09-06T01:38:25.798Z"),"intuitive",{_id: 14414,str: "integrate",num: 33174,date: new Date("2018-09-05T22:32:37.011Z"),obj: {_id: 14415,array: [{_id: 14416,date: new Date("2018-09-06T10:00:43.640Z")},"redundant"],obj: { _id: 14417 }}}]});
    },

    function(coll) {
        return coll.insert({_id: 14418,num: 38778,date: new Date("2018-09-06T00:49:58.718Z"),array: [[],42647,new Date("2018-09-06T06:26:50.851Z"),"New Hampshire payment Configuration",[new Date("2018-09-06T14:33:01.266Z"),"Throughway one-to-one Officer"],{_id: 14419,str: "Books distributed",date: new Date("2018-09-06T17:54:46.713Z"),array: [],obj: {}},"Estates Ergonomic Steel Bacon",99503,[new Date("2018-09-05T21:35:07.643Z"),"Martinique process improvement",81166],{_id: 14420,str: "Licensed",num: 72868,date: new Date("2018-09-05T20:55:50.830Z"),array: [new Date("2018-09-06T12:06:45.729Z")],obj: {_id: 14421,str: "ADP",num: 45142,date: new Date("2018-09-06T16:21:47.539Z"),array: []}},{_id: 14422,str: "Global Grove",array: [],obj: {_id: 14423,num: 31049,date: new Date("2018-09-06T05:32:58.773Z"),obj: {_id: 14424,str: "silver HDD Somoni",date: new Date("2018-09-05T22:20:05.160Z"),obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 14425,str: "reciprocal Compatible",num: 26789,date: new Date("2018-09-06T05:15:45.784Z"),array: [151,"navigating invoice",new Date("2018-09-06T12:23:39.647Z"),"hack Home Loan Account Granite",19301,[[],77330,"Alabama Granite Avon",[64179]],new Date("2018-09-06T14:22:49.426Z"),"Sleek",{_id: 14426,str: "enable Buckinghamshire viral",num: 1621,array: [[],82644,new Date("2018-09-06T19:47:47.517Z")]},new Date("2018-09-06T12:54:00.441Z")],obj: {_id: 14427,num: 36551,date: new Date("2018-09-06T07:35:45.340Z"),array: [71510],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14428,str: "Fantastic Soft Keyboard",num: 35627,date: new Date("2018-09-06T06:56:50.298Z"),array: [29515,new Date("2018-09-06T17:13:14.010Z"),"wireless",new Date("2018-09-06T01:08:38.292Z"),"Mouse",[new Date("2018-09-06T09:00:04.487Z"),3735,46276],"Money Market Account fuchsia","Handcrafted Concrete Bike",{_id: 14429,str: "West Virginia",date: new Date("2018-09-06T11:33:30.805Z"),array: [],obj: {}},new Date("2018-09-06T17:47:19.550Z"),[],89388]});
    },

    function(coll) {
        return coll.insert({_id: 14430,str: "compress Venezuela Credit Card Account",num: 90220,date: new Date("2018-09-06T10:09:45.215Z"),array: [],obj: {_id: 14431,str: "multi-byte payment",array: ["program Key","Auto Loan Account",new Date("2018-09-05T20:37:25.680Z"),42818,[60256,{_id: 14432,str: "Internal Direct",num: 94723,date: new Date("2018-09-06T11:55:57.963Z"),array: [],obj: {}}],"even-keeled value-added Fiji","knowledge base Investment Account","digital recontextualize",{_id: 14433,num: 40926,date: new Date("2018-09-06T10:21:24.340Z"),array: [],obj: {_id: 14434,str: "cross-platform Grass-roots",date: new Date("2018-09-06T12:55:51.449Z")}},[],new Date("2018-09-06T13:17:11.106Z"),56261,new Date("2018-09-06T13:24:05.045Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14435,str: "Research grey",num: 79537,date: new Date("2018-09-06T14:00:02.762Z"),array: ["Object-based Interactions Dynamic",new Date("2018-09-06T07:05:47.396Z"),"multimedia",new Date("2018-09-06T10:51:41.988Z"),81693,44909,19853,new Date("2018-09-05T20:25:36.235Z"),new Date("2018-09-06T00:01:23.387Z"),[]],obj: {_id: 14436,str: "Avon override Pants",num: 24428,date: new Date("2018-09-06T01:21:15.896Z"),array: [],obj: {_id: 14437,str: "Bike Rustic Fresh Mouse",num: 73768,date: new Date("2018-09-06T02:17:18.765Z"),array: [new Date("2018-09-05T22:15:18.992Z"),"Florida Multi-layered Fresh",74459],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14438,str: "bricks-and-clicks",num: 56201,date: new Date("2018-09-06T19:15:15.077Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14439,str: "Tugrik Rand Namibia Dollar Mayotte",num: 97570,date: new Date("2018-09-06T07:37:57.794Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14440,str: "Bike Chile",num: 75296,date: new Date("2018-09-06T01:15:51.991Z"),array: ["Personal Loan Account synthesizing Fresh",new Date("2018-09-06T02:28:50.710Z"),new Date("2018-09-06T12:39:45.751Z"),61364,80217,"Direct Paradigm",{_id: 14441,str: "Bedfordshire",num: 48511,date: new Date("2018-09-06T09:55:14.436Z"),array: [],obj: {}},[],new Date("2018-09-05T21:57:32.794Z"),6721,"hard drive redundant Buckinghamshire",77492,"bricks-and-clicks"],obj: {_id: 14442,str: "Baby",num: 57673,date: new Date("2018-09-06T18:29:07.252Z"),array: [[],new Date("2018-09-06T18:10:15.640Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14443,str: "Panama capability",num: 80477,date: new Date("2018-09-06T04:33:27.470Z"),array: [94947,new Date("2018-09-06T08:34:27.310Z"),"AGP technologies cross-platform",{_id: 14444,str: "Buckinghamshire indigo",num: 23539,date: new Date("2018-09-05T21:56:39.520Z"),array: [],obj: {}},new Date("2018-09-05T22:25:32.956Z"),41118,{_id: 14445,num: 723,date: new Date("2018-09-05T21:13:38.739Z"),array: [{_id: 14446,str: "approach",date: new Date("2018-09-06T04:51:03.467Z"),array: [],obj: {_id: 14447,str: "maximized protocol payment",num: 35636,date: new Date("2018-09-06T12:48:53.124Z"),obj: { _id: 14448 }}},"relationships",[new Date("2018-09-06T07:41:44.580Z")],new Date("2018-09-06T14:41:34.954Z")],obj: {}},{_id: 14449,num: 20251,date: new Date("2018-09-06T17:30:25.909Z"),obj: {}},"experiences quantifying FTP","payment",[29897,"Branding ability Cross-platform"],53236],obj: {_id: 14450,str: "International",num: 53546,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14451,str: "Trace facilitate Avon",num: 20954,date: new Date("2018-09-06T05:54:04.479Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14452,str: "magenta bandwidth withdrawal",num: 60028,date: new Date("2018-09-05T21:53:26.293Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14453,str: "quantifying analyzing",array: [],obj: {_id: 14454,str: "wireless zero administration collaborative",num: 98776,date: new Date("2018-09-06T05:42:06.744Z"),array: [79670,"Comoro Franc","multi-byte Tasty Checking Account",new Date("2018-09-06T02:30:08.637Z"),42263,"Legacy front-end ADP",new Date("2018-09-05T23:28:23.222Z"),{_id: 14455,str: "grow distributed",num: 6416,date: new Date("2018-09-06T03:18:14.563Z"),array: [86089,[],new Date("2018-09-06T08:15:41.216Z")],obj: {}},"Awesome",["Credit Card Account"],11199,{_id: 14456,str: "Unbranded Plastic Fish Fish wireless",num: 67873,date: new Date("2018-09-06T18:52:45.209Z")},{_id: 14457,date: new Date("2018-09-06T00:41:58.923Z"),array: [new Date("2018-09-06T13:49:38.952Z"),[],new Date("2018-09-06T11:57:13.517Z")],obj: {_id: 14458,str: "Lithuania",num: 21963,array: [new Date("2018-09-06T14:02:08.502Z")],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 14459,str: "Hat magnetic Credit Card Account",num: 71894,date: new Date("2018-09-06T14:32:44.037Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14460,str: "parsing morph",num: 40421,date: new Date("2018-09-06T02:06:01.210Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14461,str: "harness Analyst Shoes",num: 23582,date: new Date("2018-09-06T14:04:22.454Z"),array: [{_id: 14462,str: "Branding application",array: [],obj: {}},new Date("2018-09-06T19:04:39.273Z"),49654,36422,37918,[],[],89502,new Date("2018-09-06T02:24:41.800Z"),"applications",new Date("2018-09-06T10:53:49.341Z")]});
    },

    function(coll) {
        return coll.insert({_id: 14463,str: "Mauritius Rupee Vermont",num: 84437,date: new Date("2018-09-06T06:45:15.990Z"),array: [],obj: {_id: 14464,str: "Gorgeous interactive",num: 4457,date: new Date("2018-09-05T23:14:49.164Z"),array: [{_id: 14465,str: "Secured utilisation",num: 38716,array: [],obj: {}},new Date("2018-09-06T01:05:06.355Z"),"Brook Ethiopia",16372,[],new Date("2018-09-06T03:31:36.464Z"),{_id: 14466,str: "Health Cayman Islands",num: 14520,date: new Date("2018-09-06T01:13:13.588Z"),array: [new Date("2018-09-05T22:10:10.241Z"),new Date("2018-09-06T19:21:26.925Z")],obj: {}},"Georgia","streamline black"]}});
    },

    function(coll) {
        return coll.insert({_id: 14467,str: "dynamic",num: 67702,date: new Date("2018-09-06T12:05:50.435Z"),array: [],obj: {_id: 14468,str: "Dynamic executive",num: 7784,date: new Date("2018-09-06T01:35:56.753Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14469,str: "full-range Direct Specialist",num: 84157,date: new Date("2018-09-05T23:51:58.066Z"),array: [[],"Libyan Dinar indexing Vatu",new Date("2018-09-06T17:23:54.064Z"),"Avon","emulation payment",{_id: 14470,str: "GB clear-thinking bus",num: 80557,date: new Date("2018-09-05T20:33:34.659Z"),array: [],obj: {}},new Date("2018-09-06T14:49:47.827Z"),78186,25168,{_id: 14471,str: "Dynamic",num: 61921,array: ["Louisiana",72536],obj: {_id: 14472,str: "panel Refined Metal Keyboard",num: 61859,date: new Date("2018-09-06T15:21:07.297Z"),array: [new Date("2018-09-06T03:43:13.718Z"),"hacking Incredible"],obj: {_id: 14473,obj: {_id: 14474,str: "Movies Rubber partnerships",num: 3711,date: new Date("2018-09-05T20:45:05.942Z"),array: [[],new Date("2018-09-06T02:05:05.514Z")],obj: {}}}}},"Credit Card Account Credit Card Account"]});
    },

    function(coll) {
        return coll.insert({_id: 14475,str: "violet Steel online",num: 28324,date: new Date("2018-09-06T04:37:35.496Z"),array: [new Date("2018-09-06T10:08:03.112Z"),"ivory silver Credit Card Account",46298,[new Date("2018-09-06T05:55:20.753Z"),new Date("2018-09-06T18:10:59.946Z"),"uniform FTP JBOD",96421,"Oklahoma"],new Date("2018-09-06T01:52:47.688Z"),{_id: 14476,str: "Borders",num: 93876,date: new Date("2018-09-06T19:43:13.403Z"),obj: {_id: 14477,str: "calculating Electronics zero administration",date: new Date("2018-09-05T22:42:52.239Z"),array: [{_id: 14478,num: 8887,date: new Date("2018-09-06T13:30:01.612Z"),array: [],obj: {_id: 14479,str: "Indian Rupee Ngultrum",num: 13665,obj: {}}}]}},46103,["Handcrafted Plastic Soap AI",60278,[],"Credit Card Account"],"robust Avon background",new Date("2018-09-05T22:25:23.460Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14480,str: "static experiences",num: 2141,date: new Date("2018-09-06T10:42:06.695Z"),array: [],obj: {_id: 14481,str: "SSL",num: 92838,array: [],obj: {_id: 14482,num: 83940,date: new Date("2018-09-06T09:45:20.166Z"),array: ["Interactions",98099,{_id: 14483,str: "e-business payment haptic",date: new Date("2018-09-06T01:28:23.265Z"),array: [],obj: {}},new Date("2018-09-06T10:46:47.308Z"),23506,"Qatari Rial systems Fantastic Soft Ball",[new Date("2018-09-06T16:05:45.688Z"),new Date("2018-09-06T11:52:22.047Z"),"wireless streamline GB",new Date("2018-09-06T15:10:05.732Z"),{_id: 14484,num: 67474,date: new Date("2018-09-06T19:18:39.532Z")},{_id: 14485,str: "Manors Massachusetts",num: 33182,date: new Date("2018-09-05T20:11:49.100Z"),array: [88360,["content-based Branding",new Date("2018-09-06T11:25:40.807Z"),72853,[]]],obj: {_id: 14486,date: new Date("2018-09-05T22:11:35.049Z")}}]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14487,str: "deliverables",num: 41505,date: new Date("2018-09-06T05:14:55.087Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14488,str: "Proactive",num: 60079,date: new Date("2018-09-06T16:09:32.525Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14489,num: 69945,date: new Date("2018-09-06T03:14:31.989Z"),array: [],obj: {_id: 14490,str: "redundant",num: 71656,date: new Date("2018-09-06T05:58:52.582Z"),array: [new Date("2018-09-06T02:28:07.774Z"),new Date("2018-09-06T15:24:08.500Z"),50234,{_id: 14491,str: "Books",num: 78068,date: new Date("2018-09-06T12:21:13.572Z"),obj: {_id: 14492,str: "Handmade Granite Hat productivity",num: 32289,date: new Date("2018-09-06T17:21:03.174Z"),obj: {}}},73301,"virtual FTP multi-byte","forecast",72869,[],[84865,"Dynamic",{_id: 14493,num: 7989,array: ["markets gold"],obj: {}},new Date("2018-09-05T21:37:52.869Z"),new Date("2018-09-05T23:24:54.033Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14494,str: "Profound",num: 25751,date: new Date("2018-09-06T05:11:52.437Z"),array: [],obj: {_id: 14495,str: "Afghani synthesize",num: 39669,date: new Date("2018-09-06T03:57:05.894Z"),array: [new Date("2018-09-06T15:49:21.393Z"),76619,"generate",new Date("2018-09-06T19:44:48.076Z"),75269,[],{_id: 14496,num: 36985,date: new Date("2018-09-06T16:10:29.545Z"),array: [],obj: {_id: 14497,str: "tangible",date: new Date("2018-09-06T10:55:06.830Z"),array: ["lime Incredible",17097]}},44550,new Date("2018-09-06T19:50:50.015Z"),52165]}});
    },

    function(coll) {
        return coll.insert({_id: 14498,str: "Fantastic expedite Virginia",num: 63020,date: new Date("2018-09-06T11:20:00.217Z"),array: ["Credit Card Account","capability",new Date("2018-09-05T20:48:12.944Z"),"bluetooth navigating",[30240,{_id: 14499,date: new Date("2018-09-06T18:38:09.725Z"),array: [94525,[],"navigate",20366],obj: {}},new Date("2018-09-05T21:22:51.590Z")],55392,new Date("2018-09-06T05:07:25.919Z"),new Date("2018-09-05T23:58:48.970Z"),"Home Arizona",52901],obj: {_id: 14500,str: "Rustic firewall",num: 93485,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14501,num: 47507,date: new Date("2018-09-06T10:53:40.727Z"),array: [91740,new Date("2018-09-06T07:35:05.109Z"),83741,new Date("2018-09-05T20:45:40.845Z"),"New Zealand methodology web services","enhance",89669,"Operations",new Date("2018-09-06T00:20:15.064Z"),{_id: 14502,str: "generating",date: new Date("2018-09-05T20:27:46.687Z"),array: []}],obj: {_id: 14503,str: "24/365 Island blue",num: 68245,date: new Date("2018-09-05T22:09:58.714Z"),array: [],obj: {_id: 14504,str: "Auto Loan Account Handmade sexy",num: 65287,date: new Date("2018-09-06T03:34:38.266Z"),array: [new Date("2018-09-06T01:18:20.180Z"),new Date("2018-09-05T20:03:25.746Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14505,str: "Soft invoice 1080p",num: 21424,date: new Date("2018-09-06T11:44:08.932Z"),array: [85795,"Operative",[],new Date("2018-09-06T04:39:09.643Z"),{_id: 14506,str: "Investment Account Automotive withdrawal",num: 49046,date: new Date("2018-09-06T07:31:58.151Z"),array: [33342],obj: {}},99163,[],new Date("2018-09-06T19:10:43.423Z"),"JBOD","back up Designer Borders",35980,"Bahraini Dinar"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14507,str: "Zimbabwe Dollar",num: 57054,date: new Date("2018-09-06T12:15:46.794Z"),array: [],obj: {_id: 14508,str: "Games Markets",num: 93409,date: new Date("2018-09-06T03:14:32.981Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14509,str: "Strategist Small",num: 51838,date: new Date("2018-09-05T21:33:37.808Z"),array: [24953,new Date("2018-09-06T02:33:15.876Z"),new Date("2018-09-06T05:58:51.771Z"),"multi-byte Money Market Account",[],{_id: 14510,str: "data-warehouse auxiliary",date: new Date("2018-09-06T17:30:14.496Z"),obj: {_id: 14511,str: "Intranet navigate Alabama",num: 37489,date: new Date("2018-09-06T10:37:58.393Z"),array: ["indexing",[],"Savings Account Metrics Concrete","Buckinghamshire Handcrafted",new Date("2018-09-06T18:32:20.832Z"),new Date("2018-09-05T20:35:44.248Z")],obj: {_id: 14512,str: "lavender",num: 95208,array: [],obj: {}}}},[21342,67326],68211]});
    },

    function(coll) {
        return coll.insert({_id: 14513,str: "violet",num: 51917,date: new Date("2018-09-06T05:09:53.894Z"),array: [72836,new Date("2018-09-06T08:54:37.691Z"),new Date("2018-09-06T10:16:35.996Z"),"cross-platform Marshall Islands Tuna",89792,{_id: 14514,str: "Checking Account",num: 26231,date: new Date("2018-09-06T05:56:54.715Z"),array: [new Date("2018-09-06T00:14:31.598Z"),[],"Credit Card Account"],obj: {}},"iterate Operations",36705,{_id: 14515,str: "quantify",num: 10537,date: new Date("2018-09-06T14:18:17.277Z"),array: [],obj: {}},new Date("2018-09-05T23:01:54.651Z"),[2849,new Date("2018-09-05T20:03:27.612Z")]],obj: {_id: 14516,str: "Wooden e-business Awesome",date: new Date("2018-09-06T11:03:22.898Z"),obj: {_id: 14517,str: "bluetooth Interactions Books",num: 35039,date: new Date("2018-09-06T12:46:30.249Z"),array: ["model withdrawal",[],"Wooden Licensed website"],obj: {_id: 14518,num: 94067,array: [[new Date("2018-09-06T01:32:59.214Z")]]}}}});
    },

    function(coll) {
        return coll.insert({_id: 14519,str: "evolve proactive quantify",num: 68931,date: new Date("2018-09-05T21:41:45.442Z"),array: [new Date("2018-09-06T09:17:06.323Z"),new Date("2018-09-06T17:50:38.788Z"),44250,"portals",97899,"Connecticut attitude",[],new Date("2018-09-05T21:10:25.782Z")],obj: {_id: 14520,str: "reboot",num: 23393,date: new Date("2018-09-05T23:03:55.407Z"),array: [],obj: {_id: 14521,str: "cutting-edge",num: 89881,date: new Date("2018-09-06T01:52:15.559Z"),array: [{_id: 14522,num: 70722,date: new Date("2018-09-06T00:47:20.597Z"),array: [],obj: {}},"Identity Rustic capacitor",new Date("2018-09-06T02:01:41.963Z"),"archive",new Date("2018-09-06T07:09:01.243Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14523,str: "Junction",num: 31985,date: new Date("2018-09-06T09:18:10.703Z"),array: [],obj: {_id: 14524,str: "Industrial Officer",num: 96155,date: new Date("2018-09-06T01:29:50.907Z"),array: [40201,"Bedfordshire impactful",new Date("2018-09-06T12:13:49.439Z"),[24287,new Date("2018-09-05T20:20:15.406Z"),"Overpass Advanced withdrawal"],"Engineer Home Loan Account Human",32005,77243,48209,new Date("2018-09-06T18:18:16.962Z"),72696,64157,29826,[[]]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14525,str: "Louisiana Credit Card Account harness",num: 57841,date: new Date("2018-09-06T11:43:01.022Z"),array: [56573,"Avon policy Savings Account",[],new Date("2018-09-06T02:50:21.198Z"),"International",66840,{_id: 14526,str: "Savings Account transmit",num: 52650,date: new Date("2018-09-06T02:57:24.033Z"),array: [[],"deposit",new Date("2018-09-06T12:42:30.238Z"),{_id: 14527,obj: {_id: 14528,date: new Date("2018-09-06T07:03:53.202Z"),array: [new Date("2018-09-06T03:00:51.995Z")],obj: {}}},[],"Ergonomic Wooden Fish Shoes",39872],obj: {}},26996,new Date("2018-09-05T22:47:41.996Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14529,str: "Keyboard Identity Rubber",num: 634,date: new Date("2018-09-06T02:29:25.127Z"),array: [{_id: 14530,num: 91070,date: new Date("2018-09-05T23:24:46.706Z"),array: ["Credit Card Account Paradigm quantify"],obj: {}},[],33892,"Maryland Director Lesotho",[],new Date("2018-09-06T08:41:43.058Z"),new Date("2018-09-06T12:05:51.890Z"),6669,50991,new Date("2018-09-06T14:44:48.861Z"),"Shirt","Fish"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14531,str: "Libyan Arab Jamahiriya",num: 28531,date: new Date("2018-09-06T17:33:12.828Z"),array: ["Sleek",new Date("2018-09-06T02:30:47.568Z"),"Lock CSS Savings Account",new Date("2018-09-06T00:21:31.744Z"),63905,new Date("2018-09-06T09:10:19.480Z"),[],93783,new Date("2018-09-06T08:28:23.070Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14532,str: "navigate",num: 51923,date: new Date("2018-09-06T15:15:23.186Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14533,str: "Unbranded Soft Pants human-resource Bermudian Dollar (customarily known as Bermuda Dollar)",num: 11935,date: new Date("2018-09-06T05:28:29.240Z"),array: [],obj: {_id: 14534,str: "Chair",date: new Date("2018-09-06T10:51:57.327Z"),array: [new Date("2018-09-06T09:18:08.166Z"),new Date("2018-09-06T15:03:44.283Z"),[29899,[[]],"maximize",32113,{_id: 14535,str: "Hong Kong generating",num: 10953,array: [],obj: {_id: 14536,str: "calculate Licensed",num: 5505,date: new Date("2018-09-06T09:42:58.195Z"),array: [],obj: {}}},new Date("2018-09-06T17:17:06.804Z"),"Centers Land optical",new Date("2018-09-05T23:08:42.484Z")],"synthesize","Home Loan Account interfaces Checking Account",12700,27789,1076,83152,{_id: 14537,num: 7583,date: new Date("2018-09-06T08:19:51.187Z"),array: [new Date("2018-09-06T18:41:25.231Z")]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14538,str: "Inlet",num: 68501,date: new Date("2018-09-06T00:16:19.557Z"),obj: {_id: 14539,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14540,str: "Mauritius Rupee Malaysian Ringgit Plastic",num: 55947,date: new Date("2018-09-06T13:08:41.088Z"),array: [],obj: {_id: 14541,str: "Hat",num: 32300,date: new Date("2018-09-06T00:29:16.200Z"),array: [],obj: {_id: 14542,str: "Incredible",date: new Date("2018-09-06T04:24:23.545Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14543,str: "Gabon Profound system",num: 55537,date: new Date("2018-09-05T21:42:06.548Z"),array: [new Date("2018-09-05T20:34:33.133Z"),"orange Computer",51296,new Date("2018-09-06T14:36:21.352Z"),77442,new Date("2018-09-05T21:48:30.558Z"),[],"Supervisor invoice",{_id: 14544,num: 39186,date: new Date("2018-09-06T00:58:41.413Z"),array: [],obj: {}},"Response Awesome Steel Shirt",new Date("2018-09-06T19:16:06.131Z"),new Date("2018-09-06T00:11:09.204Z"),"hacking Shirt Uzbekistan"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14545,str: "Intelligent Cotton Tuna",num: 50559,date: new Date("2018-09-06T07:05:54.267Z"),array: ["Jamaica Naira",new Date("2018-09-06T01:48:28.083Z"),{_id: 14546,str: "regional",num: 12976,date: new Date("2018-09-05T21:17:57.761Z"),array: []},50712,"Incredible Intelligent Cotton Cheese Garden",new Date("2018-09-06T01:48:34.158Z"),"extranet Cambridgeshire Virtual",[new Date("2018-09-06T12:36:19.241Z"),79825],64171,new Date("2018-09-06T06:10:49.244Z"),{_id: 14547,str: "Soap",num: 64834,date: new Date("2018-09-06T01:26:03.270Z"),array: [],obj: {_id: 14548,str: "PCI",date: new Date("2018-09-06T16:43:49.222Z"),obj: {}}}],obj: {_id: 14549,num: 25032,date: new Date("2018-09-06T03:28:48.784Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14550,str: "dynamic revolutionary",num: 29468,date: new Date("2018-09-06T02:30:23.385Z"),array: [],obj: {_id: 14551,num: 6633,date: new Date("2018-09-06T08:58:56.428Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14552,str: "Steel",num: 95994,date: new Date("2018-09-06T14:25:15.788Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14553,str: "Skyway",num: 62377,date: new Date("2018-09-06T06:42:44.663Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14554,num: 53529,date: new Date("2018-09-05T23:22:06.970Z"),array: [new Date("2018-09-06T08:00:22.868Z"),60304,[],"Investment Account Buckinghamshire","Licensed collaborative payment",new Date("2018-09-06T17:02:12.861Z"),54829,21839,new Date("2018-09-06T16:37:37.254Z"),[],42310,new Date("2018-09-06T03:14:44.837Z")],obj: {_id: 14555,str: "copying parse",date: new Date("2018-09-06T08:35:08.280Z"),array: ["violet Borders",new Date("2018-09-05T23:41:57.706Z"),18614,{_id: 14556,str: "real-time programming",date: new Date("2018-09-06T05:04:26.601Z"),array: [],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14557,str: "Customer Directives",num: 95825,date: new Date("2018-09-06T11:58:16.519Z"),array: [new Date("2018-09-05T23:35:10.427Z"),new Date("2018-09-06T04:41:54.444Z"),"Checking Account Track payment",41927,84304,"incremental Home Loan Account","neural frictionless",{_id: 14558,str: "bluetooth extend Path",num: 1411,date: new Date("2018-09-06T13:27:18.757Z"),array: [],obj: {_id: 14559,num: 11261,date: new Date("2018-09-06T13:45:20.956Z"),array: [76007],obj: {}}},{_id: 14560,str: "FTP lime",date: new Date("2018-09-06T12:29:57.147Z"),array: [49100,[]]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14561,num: 74405,date: new Date("2018-09-06T18:10:38.333Z"),array: ["invoice Toys",new Date("2018-09-06T16:06:50.194Z"),72510,48871,new Date("2018-09-06T19:10:24.472Z"),99465,{_id: 14562,str: "target Avon",num: 2201,date: new Date("2018-09-06T16:25:46.314Z"),array: [81270,"directional",{_id: 14563,str: "Rustic Granite Shoes",num: 14838,array: [],obj: {}},[]],obj: {_id: 14564,str: "Supervisor calculate",num: 85282,date: new Date("2018-09-06T18:59:04.155Z"),array: [[new Date("2018-09-06T09:04:54.885Z")]],obj: {}}},"Greenland Central",{_id: 14565,str: "Baby",date: new Date("2018-09-06T08:40:39.431Z"),array: []},68152,28867,new Date("2018-09-05T21:27:22.958Z")],obj: {_id: 14566,str: "circuit yellow",num: 21392}});
    },

    function(coll) {
        return coll.insert({_id: 14567,num: 85139,array: ["Virtual responsive Quality",[],33841,new Date("2018-09-06T00:03:17.973Z"),{_id: 14568,str: "Village",num: 71213,date: new Date("2018-09-06T15:13:25.166Z"),array: [new Date("2018-09-06T10:08:24.281Z"),82697,["Gloves Face to face Designer"]],obj: {_id: 14569,str: "leading-edge invoice primary",num: 32207,date: new Date("2018-09-06T06:03:09.582Z"),array: [],obj: {_id: 14570,str: "SQL",num: 32340,date: new Date("2018-09-06T00:47:57.493Z")}}},85567,7981,new Date("2018-09-06T12:49:13.451Z"),{_id: 14571,str: "lavender",array: [new Date("2018-09-06T03:16:58.119Z"),new Date("2018-09-06T16:32:20.523Z"),"Louisiana deposit"],obj: {}},13190,{_id: 14572,str: "navigating Arizona",num: 79212,date: new Date("2018-09-05T23:22:45.462Z"),array: ["override JSON",{_id: 14573,date: new Date("2018-09-06T10:55:57.744Z"),array: [],obj: {}},"contextually-based",[],{_id: 14574,date: new Date("2018-09-06T10:11:41.773Z"),array: [],obj: {}}]},new Date("2018-09-06T03:24:39.966Z")],obj: {_id: 14575,num: 14872}});
    },

    function(coll) {
        return coll.insert({_id: 14576,str: "Personal Loan Account RSS 1080p",num: 45744,date: new Date("2018-09-05T22:16:09.586Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14577,str: "Stravenue",num: 73997,date: new Date("2018-09-06T02:35:36.181Z"),array: [],obj: {_id: 14578,str: "Indiana",num: 54484,date: new Date("2018-09-05T23:15:26.115Z"),array: [{_id: 14579,str: "efficient Associate",num: 32129,date: new Date("2018-09-06T17:02:08.143Z"),array: [[]],obj: {}},88829,new Date("2018-09-06T03:28:30.181Z"),13849,{_id: 14580,num: 45684},"wireless","Island Factors",[],67166,65627,new Date("2018-09-06T10:19:14.614Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14581,str: "Functionality system Locks",num: 29388,date: new Date("2018-09-06T10:34:21.716Z"),array: [69615,"Towels",new Date("2018-09-05T20:50:06.374Z"),"Refined",[],"evolve connecting Internal",{_id: 14582,str: "West Virginia XSS",num: 842,array: ["Licensed Steel Hat Sleek Soft Mouse Small",71318,31987,68515],obj: {}},{_id: 14583,date: new Date("2018-09-06T16:47:30.650Z"),array: [new Date("2018-09-06T14:57:22.358Z")]},new Date("2018-09-06T19:31:12.323Z"),[[]],7771,[],new Date("2018-09-05T20:01:06.258Z"),"wireless"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14584,str: "fuchsia",num: 68072,date: new Date("2018-09-06T14:59:47.014Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14585,str: "auxiliary",num: 11778,date: new Date("2018-09-05T22:50:07.006Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14586,str: "Frozen",num: 85007,date: new Date("2018-09-06T12:56:26.361Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14587,str: "reintermediate copy",num: 53557,date: new Date("2018-09-06T09:18:07.915Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14588,str: "Devolved Pennsylvania Cross-group",num: 41407,date: new Date("2018-09-06T12:21:33.095Z"),obj: {_id: 14589,str: "SCSI",num: 34399,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14590,str: "Home Loan Account",num: 47998,date: new Date("2018-09-06T14:55:34.939Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14591,str: "Personal Loan Account withdrawal",num: 98086,date: new Date("2018-09-06T12:19:00.596Z"),array: [],obj: {_id: 14592,num: 41056,date: new Date("2018-09-06T15:59:56.955Z"),array: [[],"connecting calculating",90878,64203,93561,new Date("2018-09-06T14:44:58.742Z"),{_id: 14593,str: "Integrated Cambridgeshire",num: 92253,array: [],obj: {}},[new Date("2018-09-05T22:06:16.695Z"),new Date("2018-09-06T15:42:27.049Z"),"Optional alarm",new Date("2018-09-06T14:32:47.265Z")],69538,89717,"Incredible Concrete Wyoming"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14594,str: "context-sensitive Incredible Granite Soap compress",date: new Date("2018-09-06T10:53:04.143Z"),array: [new Date("2018-09-05T20:22:05.113Z"),new Date("2018-09-05T22:45:15.632Z"),"CFA Franc BEAC purple",5181,72532,39792,{_id: 14595,num: 88673,date: new Date("2018-09-06T14:24:28.652Z"),array: [],obj: {}},new Date("2018-09-05T21:16:57.647Z"),["green sensor",[],[]],new Date("2018-09-06T18:38:27.675Z"),"copying"]});
    },

    function(coll) {
        return coll.insert({_id: 14596,str: "hard drive deposit dedicated",num: 8227,date: new Date("2018-09-05T22:18:25.010Z"),array: [42599,"eyeballs multimedia",6959,"wireless black",new Date("2018-09-06T01:30:50.247Z"),"driver",[],48052,new Date("2018-09-06T04:35:26.852Z"),new Date("2018-09-06T06:57:44.755Z"),{_id: 14597,str: "Shoes",num: 57035,date: new Date("2018-09-06T11:35:32.684Z"),array: [],obj: {_id: 14598,str: "copying Optimization copying",num: 12190,date: new Date("2018-09-06T13:23:37.384Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14599,num: 96246,date: new Date("2018-09-06T18:39:51.202Z"),array: [new Date("2018-09-06T01:59:51.247Z"),{_id: 14600,str: "Hawaii Corporate port",num: 42948,array: [],obj: {_id: 14601,str: "Tasty",num: 95429,date: new Date("2018-09-06T06:12:31.602Z"),obj: {}}},"override",[new Date("2018-09-06T17:42:28.019Z")],50782,{_id: 14602,date: new Date("2018-09-06T13:18:14.408Z"),array: [],obj: {_id: 14603,str: "Fish budgetary management",num: 2000,date: new Date("2018-09-06T00:03:55.228Z"),array: []}},"strategize",18124,[],{_id: 14604,str: "Auto Loan Account payment",array: [new Date("2018-09-05T21:03:37.289Z"),82350,{_id: 14605,str: "green Alaska ability",num: 31627}],obj: {_id: 14606,date: new Date("2018-09-06T09:23:59.817Z"),obj: {}}},"Practical Frozen Keyboard Checking Account Administrator","Synergized Central",44203]});
    },

    function(coll) {
        return coll.insert({_id: 14607,str: "Games radical",num: 95765,date: new Date("2018-09-05T22:54:18.957Z"),array: [9939,new Date("2018-09-06T17:37:28.919Z"),"Health",new Date("2018-09-06T06:59:05.642Z"),new Date("2018-09-06T05:37:29.283Z"),[40482,[],"Estate tertiary"],"deposit Credit Card Account programming",new Date("2018-09-06T11:55:49.990Z"),"Computers",{_id: 14608,str: "Sleek Response payment",num: 46608,date: new Date("2018-09-06T03:50:24.597Z"),array: ["Locks Delaware"],obj: {}},1449],obj: {_id: 14609,str: "e-commerce",num: 35877,date: new Date("2018-09-06T13:25:32.844Z")}});
    },

    function(coll) {
        return coll.insert({_id: 14610,str: "web-enabled SQL Iraqi Dinar",num: 66807,date: new Date("2018-09-06T03:15:42.691Z"),array: [new Date("2018-09-05T21:47:23.069Z"),new Date("2018-09-05T23:07:08.312Z"),29781,[],74764,"deposit","bandwidth"],obj: {_id: 14611,str: "white hard drive",array: ["IB out-of-the-box card",6389,{_id: 14612,str: "architectures Kuwaiti Dinar",num: 17126,date: new Date("2018-09-05T23:43:50.788Z"),array: [],obj: {}},new Date("2018-09-05T22:39:38.182Z"),"monitor cyan",["1080p",{_id: 14613,str: "generate West Virginia",num: 17126,array: [72480]}],"Administrator partnerships",new Date("2018-09-06T06:35:05.387Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14614,str: "methodologies Factors payment",num: 6687,date: new Date("2018-09-05T22:46:08.997Z"),array: [31057,new Date("2018-09-06T13:57:54.991Z"),new Date("2018-09-06T02:17:22.711Z"),84596,"info-mediaries",new Date("2018-09-06T13:31:29.529Z"),24811,58252,{_id: 14615,str: "Valley executive",num: 13753,date: new Date("2018-09-06T15:13:35.386Z"),array: [],obj: {}},"Florida solutions","deposit Strategist","24/7"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14616,str: "Jewelery",num: 5346,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14617,str: "Operations Ergonomic Metal Chicken",num: 43107,array: [68898,[],{_id: 14618,str: "River online",num: 55889,date: new Date("2018-09-06T08:47:49.798Z"),array: [{_id: 14619,str: "bus",num: 43202,date: new Date("2018-09-06T07:51:43.714Z"),array: [new Date("2018-09-06T10:33:58.939Z")],obj: {}},new Date("2018-09-06T04:53:57.522Z"),"Crossroad Saint Helena"]},new Date("2018-09-06T10:18:26.096Z"),"auxiliary","Corporate deposit optimal",[],new Date("2018-09-05T23:51:42.027Z"),[29418,{_id: 14620,str: "Rustic",num: 89162,date: new Date("2018-09-06T16:23:23.873Z"),obj: {_id: 14621,str: "model integrated",num: 92922,date: new Date("2018-09-06T09:03:51.502Z"),array: [[],new Date("2018-09-06T13:19:21.958Z")],obj: {}}},54758],83953,"Creative"]});
    },

    function(coll) {
        return coll.insert({_id: 14622,str: "Representative homogeneous",num: 37311,date: new Date("2018-09-06T03:56:05.955Z"),array: [],obj: {_id: 14623,str: "Principal Rubber",num: 89017,date: new Date("2018-09-06T13:34:46.754Z"),array: [new Date("2018-09-06T11:33:18.299Z"),"Factors",88855,new Date("2018-09-05T21:48:01.951Z"),"synergy",93161,{_id: 14624,str: "collaboration Dominican Republic Steel",date: new Date("2018-09-06T10:06:07.845Z"),array: [[],17913,{_id: 14625,num: 91051,date: new Date("2018-09-06T02:12:07.225Z"),array: [64128],obj: {}},new Date("2018-09-06T14:29:43.006Z")],obj: {}},"SDD",new Date("2018-09-06T01:24:27.510Z"),[],{_id: 14626,array: [34256]}],obj: {_id: 14627,str: "focus group compelling Harbors",num: 56545,date: new Date("2018-09-06T17:08:04.415Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 14628,str: "end-to-end sensor Virginia",num: 62466,date: new Date("2018-09-06T01:35:24.849Z"),array: [{_id: 14629,str: "deposit",num: 72136,date: new Date("2018-09-06T07:55:54.519Z"),obj: {}},89891,"withdrawal networks",68953,new Date("2018-09-06T17:26:06.481Z"),"interface Producer","scalable Mobility"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14630,str: "navigate heuristic",num: 515,date: new Date("2018-09-05T23:49:53.626Z"),obj: {_id: 14631,str: "Response",num: 34232,array: ["Syrian Pound mission-critical",{_id: 14632,str: "Money Market Account gold Granite",num: 87945,date: new Date("2018-09-06T12:14:40.754Z"),array: [new Date("2018-09-06T14:46:58.160Z"),33276,{_id: 14633,str: "program encoding",num: 10032,date: new Date("2018-09-05T23:24:01.624Z"),array: [new Date("2018-09-06T07:23:56.147Z"),"system-worthy Baby Tasty"],obj: {}},[]],obj: {_id: 14634,date: new Date("2018-09-06T02:20:36.619Z"),array: [],obj: {}}},89352,new Date("2018-09-06T13:44:20.174Z"),33693,53150,"intangible Concrete bandwidth-monitored",new Date("2018-09-06T06:30:16.438Z"),{_id: 14635,num: 3941,date: new Date("2018-09-06T06:26:20.464Z"),array: [],obj: {_id: 14636,str: "back-end networks",num: 54380}},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 14637,num: 10769,date: new Date("2018-09-06T00:07:28.419Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14638,str: "encoding Wooden",num: 54985,date: new Date("2018-09-06T00:11:57.572Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14639,str: "cross-media",num: 66502,date: new Date("2018-09-06T09:25:55.794Z"),array: [new Date("2018-09-06T08:42:41.471Z"),new Date("2018-09-06T11:15:40.264Z"),"Heights",54780,new Date("2018-09-06T10:39:34.351Z"),"reboot application Handcrafted Wooden Pants",{_id: 14640,str: "Hong Kong Dollar USB Optimization",num: 51370,date: new Date("2018-09-06T02:15:54.564Z"),array: ["input sensor lime",12652]},"Unbranded Soft Gloves",49150,[]],obj: {_id: 14641,str: "efficient back-end",num: 93570,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14642,str: "dynamic Buckinghamshire",date: new Date("2018-09-06T04:18:16.741Z"),array: [[],new Date("2018-09-06T09:11:50.902Z"),"payment engineer",new Date("2018-09-06T05:45:17.350Z"),45668,"Bahamian Dollar navigate",43704,{_id: 14643,str: "Regional Highway",num: 60749,array: [],obj: {_id: 14644,str: "open-source Bangladesh collaborative",num: 45887,date: new Date("2018-09-05T21:23:47.538Z"),obj: {}}},{_id: 14645,date: new Date("2018-09-06T17:48:53.769Z"),array: [],obj: {}},new Date("2018-09-06T03:29:37.988Z"),[58464,new Date("2018-09-05T23:51:38.321Z"),"Fantastic",new Date("2018-09-06T01:40:03.091Z")],new Date("2018-09-06T08:45:47.806Z")],obj: {_id: 14646,num: 57163}});
    },

    function(coll) {
        return coll.insert({_id: 14647,num: 3587,date: new Date("2018-09-06T06:09:16.954Z"),array: [25062,"indexing calculating PCI",{_id: 14648,str: "application invoice withdrawal",date: new Date("2018-09-06T02:38:24.530Z"),obj: {}},new Date("2018-09-06T18:03:03.783Z"),59973,"Director Developer Tasty Rubber Pants",new Date("2018-09-06T08:32:45.822Z"),27280,["PCI auxiliary",93902],[],1832,new Date("2018-09-06T01:50:46.360Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14649,str: "Tennessee application transmit",num: 97757,array: [15717,"parsing",new Date("2018-09-06T03:16:01.882Z"),41558,"out-of-the-box Metal Egyptian Pound",new Date("2018-09-06T03:04:22.446Z"),[27455],{_id: 14650,str: "auxiliary payment",num: 70423,date: new Date("2018-09-06T02:13:36.935Z"),array: ["web services",new Date("2018-09-06T02:25:01.145Z"),new Date("2018-09-06T15:31:27.169Z"),"Dynamic online",[]],obj: {}},[],new Date("2018-09-05T22:14:53.873Z"),"bandwidth-monitored matrix feed",43829],obj: {_id: 14651,str: "infomediaries synergize synthesizing",num: 42442,date: new Date("2018-09-06T05:04:07.019Z"),array: [13396],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14652,str: "Convertible Marks Pizza SAS",num: 58286,date: new Date("2018-09-05T21:11:21.377Z"),array: [57394,"withdrawal Isle","adapter bypassing",new Date("2018-09-06T13:09:23.906Z"),new Date("2018-09-06T19:48:07.463Z"),new Date("2018-09-06T08:43:48.559Z"),"payment Fundamental",85580,[],"Agent XML",[[],{_id: 14653,str: "visualize",num: 15775,date: new Date("2018-09-06T08:35:59.108Z"),obj: {}}],[60427]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14654,str: "Reactive Identity",num: 59763,date: new Date("2018-09-06T18:16:30.647Z"),array: [new Date("2018-09-06T06:05:58.373Z"),"generating platforms",new Date("2018-09-06T04:05:45.800Z"),"Lari",new Date("2018-09-06T12:08:11.823Z"),63133,"Lead",30382,32681,{_id: 14655,str: "Wall",num: 49347,date: new Date("2018-09-06T14:22:00.117Z"),array: [],obj: {}},"Checking Account"]});
    },

    function(coll) {
        return coll.insert({_id: 14656,str: "synthesize",num: 83243,date: new Date("2018-09-06T10:56:07.166Z"),array: [new Date("2018-09-06T06:47:52.569Z"),52008,"Licensed",new Date("2018-09-05T20:48:58.744Z"),{_id: 14657,str: "Cape Verde Escudo",num: 90123,date: new Date("2018-09-06T07:09:44.002Z"),obj: {_id: 14658,str: "Generic migration",num: 63735,array: [],obj: {}}},"bricks-and-clicks Handcrafted Metal Table white",new Date("2018-09-05T23:22:28.762Z"),"protocol orchestrate deposit",83167,[9790,[],"Chips matrix Handmade"],{_id: 14659,str: "EXE Borders generate",num: 70462,date: new Date("2018-09-06T07:04:26.521Z"),array: ["Future-proofed Manager Officer",new Date("2018-09-05T21:13:03.828Z"),1886],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 14660,str: "Outdoors",num: 97208,date: new Date("2018-09-06T11:41:54.256Z"),array: ["Unbranded Granite Fish",new Date("2018-09-06T10:25:54.678Z"),72860,new Date("2018-09-06T02:53:14.932Z"),83096,new Date("2018-09-06T16:09:00.172Z"),95389],obj: {_id: 14661,str: "holistic",num: 17797,date: new Date("2018-09-06T14:20:08.753Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14662,str: "Orchestrator",num: 21738,date: new Date("2018-09-05T23:17:57.477Z"),array: [],obj: {_id: 14663,str: "indexing Regional",num: 66669,date: new Date("2018-09-06T14:10:43.135Z"),array: [new Date("2018-09-05T22:10:51.787Z"),"Kentucky Kiribati",46624,new Date("2018-09-06T05:37:11.717Z"),new Date("2018-09-06T14:45:53.268Z"),{_id: 14664,str: "Auto Loan Account Somali Shilling",num: 93522},{_id: 14665,str: "Refined asymmetric digital",date: new Date("2018-09-06T06:29:58.254Z"),obj: {}},new Date("2018-09-06T18:52:34.155Z"),54526,"Japan",60889,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14666,str: "Kina orchid mission-critical",num: 74733,date: new Date("2018-09-06T02:09:03.771Z"),array: ["virtual Credit Card Account",new Date("2018-09-06T02:28:24.883Z"),"bandwidth Investor Djibouti",[],{_id: 14667,num: 252,date: new Date("2018-09-06T07:28:56.626Z"),array: [],obj: {_id: 14668,str: "withdrawal Salad Technician",date: new Date("2018-09-06T11:23:56.112Z"),array: [49898]}},new Date("2018-09-06T00:12:59.292Z"),"multi-tasking Security","radical leading-edge Soft",new Date("2018-09-06T08:18:06.548Z"),31270,new Date("2018-09-06T03:36:34.068Z"),15048],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14669,str: "Analyst",num: 45699,date: new Date("2018-09-06T17:53:04.153Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14670,str: "Officer Berkshire",num: 81176,date: new Date("2018-09-05T22:45:27.593Z"),array: [36796,"real-time Data",53394,new Date("2018-09-05T22:59:13.662Z"),"Credit Card Account intranet","generating Cambridgeshire",new Date("2018-09-06T01:36:26.095Z"),[40000],{_id: 14671,str: "calculating payment Global",num: 1086,date: new Date("2018-09-05T22:03:46.708Z"),array: [],obj: {_id: 14672,str: "Berkshire",array: []}},"Baby Outdoors Timor-Leste",new Date("2018-09-06T02:00:39.699Z"),51005,[],new Date("2018-09-06T12:16:43.537Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14673,str: "Awesome compress",num: 36534,date: new Date("2018-09-06T18:46:25.368Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14674,str: "Granite",num: 16742,date: new Date("2018-09-06T01:46:29.390Z"),obj: {_id: 14675,str: "Quality",date: new Date("2018-09-05T20:11:36.957Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14676,str: "Chief Uganda Shilling programming",num: 68107,date: new Date("2018-09-06T07:41:46.287Z"),array: [],obj: {_id: 14677,str: "Avon intermediate Sri Lanka Rupee",num: 6824,date: new Date("2018-09-06T10:06:51.885Z")}});
    },

    function(coll) {
        return coll.insert({_id: 14678,str: "disintermediate Hryvnia",num: 6727,date: new Date("2018-09-06T00:41:09.255Z"),array: [65519,"Incredible Wooden Keyboard",{_id: 14679,date: new Date("2018-09-06T12:47:47.604Z"),obj: {_id: 14680,str: "Health",num: 43651,date: new Date("2018-09-06T12:05:13.232Z"),array: []}},[new Date("2018-09-06T02:54:03.454Z"),14854,"Common communities matrix",new Date("2018-09-05T23:33:31.937Z")],new Date("2018-09-06T18:59:00.712Z"),new Date("2018-09-05T20:57:19.594Z"),93429,"deposit",{_id: 14681,str: "Developer Refined",num: 88007,date: new Date("2018-09-06T16:56:18.706Z"),array: [],obj: {_id: 14682,num: 29003,date: new Date("2018-09-06T02:32:35.421Z"),array: [{_id: 14683,str: "indexing",num: 24416,obj: {}},[40576]],obj: {}}},39821,new Date("2018-09-06T14:43:45.950Z"),new Date("2018-09-06T11:39:53.114Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14684,str: "Metrics",num: 82605,date: new Date("2018-09-06T04:08:30.866Z"),array: [40314,"analyzer Credit Card Account","ROI copying",[],34525,50408,{_id: 14685,str: "compress Savings Account",num: 34635,date: new Date("2018-09-06T06:51:04.463Z"),array: [],obj: {}},54535,new Date("2018-09-05T21:14:47.346Z"),"Accountability Practical",9846,new Date("2018-09-06T14:18:51.452Z"),new Date("2018-09-06T15:47:14.371Z")],obj: {_id: 14686,str: "program",date: new Date("2018-09-06T11:59:20.408Z"),array: [new Date("2018-09-06T08:19:11.496Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 14687,str: "Triple-buffered mobile bandwidth",num: 25308,date: new Date("2018-09-05T19:59:04.626Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14688,str: "1080p",num: 39178,date: new Date("2018-09-06T04:26:30.154Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14689,str: "Intelligent Rubber Mouse",num: 16235,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14690,str: "Baby bandwidth-monitored",num: 11736,date: new Date("2018-09-06T04:10:01.489Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14691,num: 81751,date: new Date("2018-09-06T06:47:50.192Z"),array: ["Implementation ability",new Date("2018-09-05T22:52:22.979Z"),9928,[],new Date("2018-09-06T11:12:18.537Z"),new Date("2018-09-05T20:53:09.787Z"),57573,["Investor Supervisor",new Date("2018-09-06T02:26:38.028Z"),63771,"Fantastic Granite Pizza","Chips",75799,{_id: 14692,str: "Malawi connecting",date: new Date("2018-09-06T08:27:35.287Z"),array: [],obj: {_id: 14693,str: "Stravenue",num: 73423,obj: {}}}],{_id: 14694,str: "web-readiness South Dakota",date: new Date("2018-09-06T00:20:18.767Z"),array: [],obj: {_id: 14695,str: "Awesome Awesome Frozen Gloves",num: 76830,date: new Date("2018-09-06T15:54:29.340Z"),array: ["Strategist"],obj: {_id: 14696,str: "Engineer",num: 62258,date: new Date("2018-09-06T05:48:40.017Z")}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14697,str: "Sports",num: 54460,date: new Date("2018-09-06T19:42:33.904Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14698,str: "transmit",num: 40666,date: new Date("2018-09-06T08:39:02.744Z"),obj: {_id: 14699,str: "Streamlined driver Forward",num: 46133,date: new Date("2018-09-06T07:25:44.646Z"),array: [],obj: {_id: 14700,str: "Sleek Fresh Chair interface",num: 13036,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14701,str: "Salad Intelligent Fresh Bacon microchip",date: new Date("2018-09-06T02:49:57.229Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14702,str: "Money Market Account 5th generation",num: 8765,date: new Date("2018-09-06T03:34:20.090Z"),array: ["action-items",new Date("2018-09-06T10:17:02.010Z"),"Home Loan Account eyeballs Table",9641,"mobile",91575,{_id: 14703,str: "array mesh",num: 69574,date: new Date("2018-09-06T09:27:35.714Z"),array: [{_id: 14704,str: "open-source",num: 95390,date: new Date("2018-09-06T16:20:51.255Z"),array: [],obj: {}},new Date("2018-09-06T06:33:27.511Z"),new Date("2018-09-05T20:39:33.365Z"),"Heard Island and McDonald Islands clicks-and-mortar",[21708,[]]],obj: {_id: 14705,str: "program Metrics Chair",num: 78180,date: new Date("2018-09-06T06:55:11.330Z"),array: [new Date("2018-09-06T02:17:31.536Z"),new Date("2018-09-05T20:11:37.539Z"),{_id: 14706,str: "deliver Poland",array: [],obj: {}}],obj: {}}},92131,{ _id: 14707 },"reintermediate yellow"],obj: {_id: 14708,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14709,str: "Lead Montserrat microchip",num: 62237,date: new Date("2018-09-06T15:08:59.333Z"),array: [31334,"USB programming Quality",{_id: 14710,str: "HDD Self-enabling Virgin Islands, U.S.",num: 29255,date: new Date("2018-09-06T18:07:03.163Z")},"matrix CSS models",new Date("2018-09-05T22:54:39.144Z"),"Kuwaiti Dinar Refined Cotton Gloves",new Date("2018-09-06T04:44:58.127Z"),[],new Date("2018-09-06T16:48:10.076Z"),47055,[]],obj: {_id: 14711,str: "turn-key circuit",array: [],obj: {_id: 14712,str: "metrics",num: 45727,date: new Date("2018-09-06T11:37:59.216Z"),array: [new Date("2018-09-06T06:54:24.667Z"),"Usability",58952],obj: {_id: 14713,str: "Vision-oriented Orchard cross-platform",date: new Date("2018-09-06T17:35:51.731Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 14714,str: "Shoes Data Specialist",num: 79733,date: new Date("2018-09-06T18:35:55.693Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14715,str: "Licensed Cotton Chair Plastic Incredible Fresh Shirt",num: 73949,date: new Date("2018-09-06T06:39:29.878Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14716,str: "Heard Island and McDonald Islands Corners Svalbard & Jan Mayen Islands",num: 34751,date: new Date("2018-09-06T13:48:12.046Z"),array: ["Money Market Account copy Intelligent",new Date("2018-09-06T12:56:32.948Z"),89389,{_id: 14717,str: "Cuba",num: 981,array: [new Date("2018-09-06T14:01:04.907Z"),[],[]],obj: {}},"Steel",new Date("2018-09-06T13:25:32.873Z"),39393,"Awesome Steel Shirt",{_id: 14718,str: "array Cheese",date: new Date("2018-09-06T06:32:39.195Z")},98088,"Program Usability",94475],obj: {_id: 14719,str: "optimizing",array: [new Date("2018-09-05T22:12:49.008Z"),new Date("2018-09-06T08:08:05.475Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 14720,str: "Metrics Generic",num: 58960,date: new Date("2018-09-06T01:15:52.836Z"),array: [8208,[new Date("2018-09-06T04:11:52.819Z"),"networks Alaska Cliffs","sky blue"],{_id: 14721,str: "Investor",num: 56210,date: new Date("2018-09-06T10:06:21.113Z"),array: [],obj: {_id: 14722,str: "Synchronised",date: new Date("2018-09-06T15:41:22.329Z"),array: [],obj: {}}},"Representative Comoro Franc","Generic Metal Fish",65795,new Date("2018-09-06T01:53:49.735Z"),new Date("2018-09-05T22:21:02.404Z"),new Date("2018-09-06T19:50:48.283Z"),64757,new Date("2018-09-05T21:25:17.426Z"),40256],obj: {_id: 14723,num: 56576,date: new Date("2018-09-06T00:06:53.744Z"),array: [68984,[{_id: 14724,str: "Intuitive Russian Ruble",num: 81887,date: new Date("2018-09-06T16:34:07.392Z"),obj: {_id: 14725,str: "Exclusive Wooden",num: 18522,date: new Date("2018-09-06T14:28:29.044Z"),array: [],obj: {}}}],new Date("2018-09-06T12:47:08.765Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 14726,str: "Open-architected Rustic Rubber Tuna Cambridgeshire",num: 5614,date: new Date("2018-09-06T08:17:57.180Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14727,str: "Niue Chicken Future-proofed",num: 47916,date: new Date("2018-09-06T00:01:51.986Z"),obj: {_id: 14728,str: "CSS Pants Avon",num: 36870,date: new Date("2018-09-06T17:33:53.548Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14729,num: 71439,date: new Date("2018-09-06T03:02:36.383Z"),array: ["Home Loan Account incentivize",9443,new Date("2018-09-06T00:29:14.552Z"),new Date("2018-09-06T17:04:53.511Z"),{_id: 14730,str: "firewall Bacon",num: 69786,date: new Date("2018-09-06T02:33:27.279Z"),array: [new Date("2018-09-06T12:06:51.557Z"),"Plastic Generic Fresh Soap"],obj: {}},"Beauty engineer moratorium",57369,[],{_id: 14731,str: "tertiary Computer",num: 1930,date: new Date("2018-09-05T22:08:45.822Z"),array: [17955,"Bosnia and Herzegovina XSS",[]],obj: {}},[{_id: 14732,str: "pixel",num: 33796,date: new Date("2018-09-06T13:04:16.826Z"),array: [],obj: {_id: 14733,num: 5461,array: [],obj: {}}}],new Date("2018-09-05T23:28:43.337Z"),10762]});
    },

    function(coll) {
        return coll.insert({_id: 14734,str: "Hollow India",num: 30560,date: new Date("2018-09-06T15:15:50.249Z"),array: [],obj: {_id: 14735,str: "Avon",num: 63067,date: new Date("2018-09-06T14:30:13.253Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14736,str: "infrastructures",num: 93734,date: new Date("2018-09-06T10:33:33.297Z"),array: [],obj: {_id: 14737,str: "Sleek Principal",num: 60432,date: new Date("2018-09-05T22:18:10.283Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14738,str: "withdrawal",num: 10748,date: new Date("2018-09-06T01:34:17.898Z"),array: [],obj: {_id: 14739,str: "transparent West Virginia AGP",num: 10486,date: new Date("2018-09-06T18:15:35.399Z"),array: [new Date("2018-09-06T12:28:20.805Z"),"Berkshire",77503,75064,"turquoise user-centric Chicken","deploy",66150,{_id: 14740,str: "system International",num: 64541,date: new Date("2018-09-06T12:18:05.298Z"),array: []},new Date("2018-09-06T17:11:25.610Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14741,str: "real-time 3rd generation Home Loan Account",num: 29242,date: new Date("2018-09-06T02:36:47.550Z"),array: [{_id: 14742,str: "incubate Markets Global",num: 66937,date: new Date("2018-09-06T02:08:32.761Z"),array: [],obj: {}},"Nepalese Rupee","Security array","card",new Date("2018-09-06T13:18:50.696Z"),[[],new Date("2018-09-06T09:12:00.990Z"),"plug-and-play Outdoors",53268,36580],{_id: 14743,str: "Overpass Congolese Franc Implemented",num: 23945,date: new Date("2018-09-06T13:11:16.344Z"),array: [],obj: {_id: 14744,str: "plum Dynamic",date: new Date("2018-09-06T16:29:13.938Z"),array: [],obj: {}}},new Date("2018-09-06T14:08:43.439Z"),"utilize PCI Handmade"]});
    },

    function(coll) {
        return coll.insert({_id: 14745,str: "Savings Account matrix function",num: 1554,date: new Date("2018-09-06T19:45:28.049Z"),array: [new Date("2018-09-06T00:19:37.115Z"),"Avon mindshare",22529,37489,445,[new Date("2018-09-06T10:17:55.953Z"),"open-source Investment Account Data",{_id: 14746,str: "haptic synergy interfaces",num: 94205,date: new Date("2018-09-06T01:40:56.475Z")},new Date("2018-09-06T03:56:40.340Z"),{_id: 14747,date: new Date("2018-09-06T08:52:40.283Z"),array: [],obj: {}}],"seize transmitting",22020,"Manager",[],new Date("2018-09-06T00:37:31.675Z"),[],87330]});
    },

    function(coll) {
        return coll.insert({_id: 14748,str: "web-readiness Enhanced",array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14749,str: "Re-engineered Plaza",num: 80291,array: [18601,new Date("2018-09-06T11:46:41.448Z"),"emulation Infrastructure Group",new Date("2018-09-06T08:00:18.234Z"),"Connecticut","TCP frictionless",70828,{_id: 14750,str: "support",date: new Date("2018-09-06T04:26:54.533Z"),array: [],obj: {_id: 14751,str: "override South Georgia and the South Sandwich Islands Team-oriented",num: 27255,date: new Date("2018-09-05T20:56:58.636Z"),array: [],obj: {}}},67973,{_id: 14752,num: 90428,date: new Date("2018-09-06T09:04:40.870Z"),array: ["input Handcrafted quantify",3499,{_id: 14753,str: "capacitor",num: 21118,date: new Date("2018-09-06T04:49:56.508Z")},new Date("2018-09-06T04:32:21.430Z")],obj: {}},new Date("2018-09-06T07:30:51.168Z")],obj: {_id: 14754,num: 68953}});
    },

    function(coll) {
        return coll.insert({_id: 14755,str: "Berkshire Baby",num: 10965,date: new Date("2018-09-06T11:37:06.531Z"),array: [97397,[],"national",new Date("2018-09-06T16:07:25.846Z"),new Date("2018-09-06T15:21:23.667Z"),"extranet bandwidth Frozen",[[],19699],{_id: 14756,str: "Licensed",num: 84751,date: new Date("2018-09-06T13:49:56.361Z"),obj: {}},new Date("2018-09-06T07:36:10.062Z"),"cutting-edge Lead",4271,4711,new Date("2018-09-06T08:20:55.272Z"),{_id: 14757,str: "haptic",num: 12461,date: new Date("2018-09-05T20:29:22.421Z"),array: [],obj: {}}],obj: {_id: 14758,str: "pixel Canyon core",array: ["Money Market Account Louisiana"]}});
    },

    function(coll) {
        return coll.insert({_id: 14759,str: "bandwidth",num: 38537,date: new Date("2018-09-06T18:50:31.669Z"),array: [39988,new Date("2018-09-05T21:33:33.869Z"),new Date("2018-09-05T20:54:46.591Z"),[],"Philippine Peso",new Date("2018-09-05T20:19:53.065Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14760,num: 4109,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14761,str: "Pizza structure",num: 57265,date: new Date("2018-09-06T09:52:42.558Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14762,str: "Manager",num: 99071,date: new Date("2018-09-06T00:28:07.931Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14763,str: "cross-media Multi-layered SDD",num: 99405,date: new Date("2018-09-06T19:47:44.217Z"),array: [new Date("2018-09-06T08:17:18.707Z"),"service-desk",new Date("2018-09-05T22:09:01.807Z"),10981,new Date("2018-09-06T15:14:52.666Z"),17632,{_id: 14764,str: "paradigms Incredible",num: 18642,date: new Date("2018-09-06T16:51:08.941Z"),array: [],obj: {}},[],"Table Licensed Sausages",{_id: 14765,num: 48566,obj: {_id: 14766,str: "Agent",num: 85178,date: new Date("2018-09-06T18:20:17.967Z"),array: [new Date("2018-09-06T05:17:57.809Z")],obj: {_id: 14767,str: "calculate Jersey mobile",num: 89811,date: new Date("2018-09-06T14:53:03.417Z"),array: ["PNG monitor",[]],obj: {}}}},86788,new Date("2018-09-06T18:12:46.756Z"),"Organized Guyana Administrator"]});
    },

    function(coll) {
        return coll.insert({_id: 14768,str: "silver solid state invoice",num: 1333,date: new Date("2018-09-05T21:37:28.177Z"),array: [],obj: {_id: 14769,num: 61003,date: new Date("2018-09-06T06:44:14.166Z"),obj: {_id: 14770,str: "zero defect",num: 46329,date: new Date("2018-09-05T20:42:37.470Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 14771,str: "override navigating",num: 90426,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14772,str: "French Polynesia Product evolve",num: 26389,date: new Date("2018-09-06T13:53:41.613Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14773,str: "Factors Ergonomic",num: 96471,date: new Date("2018-09-05T22:36:17.154Z"),array: [],obj: {_id: 14774,str: "cohesive",date: new Date("2018-09-05T21:17:47.291Z"),array: ["programming client-server seize",new Date("2018-09-06T05:02:00.891Z"),57242,["Guinea Franc reboot"],[],"Street",new Date("2018-09-05T22:54:29.815Z"),"Avon Generic Wooden",36890,"mobile teal",{_id: 14775,num: 89637,date: new Date("2018-09-06T17:12:45.918Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14776,str: "interface overriding Unbranded Granite Bike",num: 70232,date: new Date("2018-09-06T00:37:35.845Z"),array: [],obj: {_id: 14777,str: "Steel",num: 19068,date: new Date("2018-09-06T06:24:55.900Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14778,str: "Applications index",num: 8484,date: new Date("2018-09-06T17:59:00.997Z"),array: [13308,43616],obj: {_id: 14779,str: "radical online mission-critical",num: 21639,date: new Date("2018-09-06T04:33:39.797Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14780,str: "Specialist",num: 670,date: new Date("2018-09-06T06:07:59.879Z"),array: [new Date("2018-09-06T06:14:30.163Z"),new Date("2018-09-06T15:22:52.243Z"),43498,{_id: 14781,str: "Cambridgeshire",num: 97723,date: new Date("2018-09-05T20:49:03.277Z"),array: [],obj: {}},"indexing","Cambridgeshire Fresh Ukraine",{_id: 14782,date: new Date("2018-09-06T11:25:02.565Z"),array: [],obj: {_id: 14783,str: "Investment Account",date: new Date("2018-09-06T05:47:36.179Z"),array: []}},new Date("2018-09-06T16:30:59.049Z"),{_id: 14784,str: "Aruba one-to-one",num: 87108,obj: {}},99644,[5850,15734,new Date("2018-09-06T14:57:39.452Z")],new Date("2018-09-06T10:24:31.256Z"),"Plastic Function-based SSL"],obj: {_id: 14785,str: "infrastructure Alabama",num: 54337,date: new Date("2018-09-06T06:26:00.997Z"),array: [[3871,"Computers Health Turkmenistan"],new Date("2018-09-06T12:39:21.069Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 14786,str: "SMS stable Iceland",num: 20237,date: new Date("2018-09-06T02:13:50.185Z"),array: ["input approach",[],90407,new Date("2018-09-06T15:38:44.772Z"),[new Date("2018-09-05T20:38:23.131Z"),"leading-edge next-generation Wooden",{_id: 14787,str: "Chair",num: 1323,obj: {}}],94296,"transform Tactics mobile",new Date("2018-09-06T04:22:19.535Z"),78961,{_id: 14788,num: 26020,date: new Date("2018-09-06T14:11:21.168Z"),array: [],obj: {_id: 14789,str: "optical",date: new Date("2018-09-06T12:35:15.994Z"),array: [],obj: {}}},94979,new Date("2018-09-05T21:24:16.803Z"),21373],obj: {_id: 14790,str: "Licensed Unbranded"}});
    },

    function(coll) {
        return coll.insert({_id: 14791,str: "streamline",num: 69003,date: new Date("2018-09-06T11:47:48.608Z"),array: [{_id: 14792,str: "Yemeni Rial Soft back-end",num: 51543,date: new Date("2018-09-05T20:00:00.470Z"),array: [],obj: {}},"Guarani",39950,13321,"Licensed Wooden Hat Practical",13665,new Date("2018-09-06T04:42:35.661Z"),"panel bypass",new Date("2018-09-06T16:33:16.429Z"),"US Dollar",new Date("2018-09-06T03:32:54.814Z"),{_id: 14793,str: "toolset",date: new Date("2018-09-05T22:58:22.152Z"),array: [],obj: {_id: 14794,str: "SDD",num: 96761}}],obj: {_id: 14795,str: "program Home",num: 35300,date: new Date("2018-09-06T03:34:47.401Z"),array: [new Date("2018-09-05T23:07:41.596Z"),32489,new Date("2018-09-06T17:00:25.579Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14796,str: "Convertible Marks Configurable",num: 92052,date: new Date("2018-09-06T19:51:13.241Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14797,str: "parse deposit Home Loan Account",num: 1535,date: new Date("2018-09-06T01:53:59.190Z"),array: [new Date("2018-09-06T13:29:15.115Z"),new Date("2018-09-06T13:22:43.798Z"),40178,"Supervisor adapter Frozen",{_id: 14798,str: "bypassing Practical",num: 50336,date: new Date("2018-09-05T23:30:22.073Z"),array: [],obj: {}},"experiences visionary",new Date("2018-09-06T09:12:15.021Z"),"Buckinghamshire",90214],obj: {_id: 14799,str: "Managed bi-directional iterate",num: 54323,date: new Date("2018-09-06T17:15:30.555Z"),array: ["Beauty deliverables",64041]}});
    },

    function(coll) {
        return coll.insert({_id: 14800,str: "Marketing feed",num: 85552,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14801,str: "Intelligent Wooden Tuna Tools",num: 63231,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14802,str: "clear-thinking SDD pink",num: 94965,date: new Date("2018-09-06T08:46:41.800Z"),array: [],obj: {_id: 14803,str: "Sports Solutions Incredible Granite Car",num: 37028,date: new Date("2018-09-06T11:15:07.235Z")}});
    },

    function(coll) {
        return coll.insert({_id: 14804,str: "Intelligent Metal Chicken multi-tasking",num: 37915,date: new Date("2018-09-06T05:01:13.917Z"),array: [new Date("2018-09-06T07:55:26.258Z"),"Optimized Azerbaijan",[],78611,new Date("2018-09-06T12:40:50.264Z"),"Money Market Account Refined",29768,new Date("2018-09-06T13:47:11.410Z"),{_id: 14805,str: "indexing quantifying Agent",num: 64852,date: new Date("2018-09-06T17:44:25.269Z"),array: []},"Crescent Chair Mobility"],obj: {_id: 14806,date: new Date("2018-09-06T01:52:09.190Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14807,str: "motivating index",num: 45940,date: new Date("2018-09-06T08:32:00.440Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14808,str: "Taiwan Checking Account",num: 67829,date: new Date("2018-09-06T07:48:19.452Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14809,str: "Investor",num: 56998,date: new Date("2018-09-06T14:24:43.678Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14810,str: "Gorgeous",num: 70783,date: new Date("2018-09-05T22:15:34.377Z"),array: ["programming Divide Interactions",new Date("2018-09-06T16:27:58.421Z"),92106,"index revolutionary Savings Account",[],[],18919,50078,{_id: 14811,num: 91803,date: new Date("2018-09-06T08:28:39.053Z"),array: [new Date("2018-09-06T02:08:17.694Z"),54401,new Date("2018-09-06T17:59:01.827Z"),"black calculating",new Date("2018-09-06T15:48:35.742Z")],obj: {_id: 14812,str: "Cotton",date: new Date("2018-09-06T05:27:09.204Z"),array: [],obj: {_id: 14813,str: "COM",num: 61640,date: new Date("2018-09-06T18:58:13.620Z"),array: ["payment Health",new Date("2018-09-06T03:16:34.479Z")]}}},{_id: 14814,str: "Avon",num: 25951,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 14815,str: "Kansas Buckinghamshire",num: 55628,date: new Date("2018-09-06T04:23:44.650Z"),array: [],obj: {_id: 14816,str: "Beauty multimedia white",num: 88181,date: new Date("2018-09-06T06:41:00.017Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14817,str: "definition XML Chicken",num: 71400,date: new Date("2018-09-06T04:38:12.471Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14818,str: "Small Awesome Wooden Computer",num: 62920,date: new Date("2018-09-06T04:46:35.150Z"),array: ["Home Loan Account",76966,"benchmark Fresh invoice",new Date("2018-09-06T11:37:28.772Z"),new Date("2018-09-05T20:55:49.762Z"),"invoice South Dakota Indiana",41898,68817,new Date("2018-09-06T09:32:03.562Z"),new Date("2018-09-06T17:25:00.043Z"),[],{_id: 14819,str: "Lek Movies Producer",num: 90226,date: new Date("2018-09-06T13:40:05.994Z"),array: []}],obj: {_id: 14820,num: 25742,array: [[]],obj: {_id: 14821,str: "Metal communities",num: 49191,date: new Date("2018-09-06T06:04:49.256Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 14822,str: "matrix",num: 14758,date: new Date("2018-09-06T03:18:12.540Z"),array: [{_id: 14823,str: "withdrawal",num: 58032,date: new Date("2018-09-06T00:46:30.516Z"),array: [4057,new Date("2018-09-06T13:39:02.557Z"),"extend",{_id: 14824,str: "local area network 5th generation",num: 70479,date: new Date("2018-09-06T01:50:39.806Z"),array: [],obj: {}},32679,"database",{_id: 14825,num: 14158,date: new Date("2018-09-05T22:54:37.720Z"),obj: {}}],obj: {_id: 14826,str: "Berkshire Angola Grocery",date: new Date("2018-09-06T03:03:46.370Z")}},"Idaho Personal Loan Account indexing",new Date("2018-09-06T17:03:04.189Z"),"Shirt streamline",new Date("2018-09-06T18:17:20.860Z"),71578,22800,[new Date("2018-09-06T01:50:18.880Z")],{_id: 14827,array: ["Chips","scalable open-source copy"],obj: {_id: 14828,str: "Unbranded Cotton Table",num: 61000,date: new Date("2018-09-06T17:38:16.860Z"),obj: {_id: 14829,num: 62531,array: []}}}],obj: {_id: 14830,str: "XSS Investment Account Operative",date: new Date("2018-09-06T07:26:28.476Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14831,str: "Automotive",date: new Date("2018-09-06T05:58:33.977Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14832,str: "transition generating backing up",num: 24701,date: new Date("2018-09-06T14:02:11.147Z"),obj: {_id: 14833,str: "intermediate",num: 49372,array: [],obj: {_id: 14834,str: "Configuration",date: new Date("2018-09-05T20:44:20.441Z"),array: [new Date("2018-09-06T09:23:25.459Z"),{_id: 14835,str: "calculating lime Creek",date: new Date("2018-09-06T17:42:43.775Z"),array: [26367,82395]},"Fantastic","gold HTTP","Algerian Dinar",new Date("2018-09-05T22:18:46.358Z"),[],[],35798,new Date("2018-09-06T08:24:37.443Z"),[80682,{_id: 14836,num: 5639,array: [],obj: {}}]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14837,str: "card New Mexico",date: new Date("2018-09-06T13:25:32.841Z"),array: [],obj: {_id: 14838,str: "harness Borders encompassing",num: 31884,date: new Date("2018-09-06T12:17:36.311Z"),array: [{_id: 14839,str: "Gorgeous Soft Tuna Buckinghamshire",num: 47590,date: new Date("2018-09-06T13:07:12.374Z"),array: [12112,new Date("2018-09-06T02:38:21.744Z")],obj: {_id: 14840,num: 9593,array: [],obj: {}}},[],"Fantastic Rubber Sausages",new Date("2018-09-06T19:06:53.858Z"),new Date("2018-09-05T21:20:54.611Z"),45017,"Keyboard Cambridgeshire",new Date("2018-09-05T22:19:49.952Z"),[13645,"teal Guernsey"],73975,{_id: 14841,str: "Rustic Principal Regional",num: 27027,obj: {_id: 14842,num: 78378,date: new Date("2018-09-06T19:39:39.994Z"),array: ["copy",8046]}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14843,str: "Serbian Dinar",num: 63181,date: new Date("2018-09-05T21:57:33.655Z"),array: ["Ergonomic",new Date("2018-09-06T18:55:23.313Z"),42405,84199,35188,new Date("2018-09-05T21:58:29.450Z"),"West Virginia",new Date("2018-09-05T22:49:36.922Z"),new Date("2018-09-06T00:40:16.185Z"),"Shoes multi-byte Berkshire",35118],obj: {_id: 14844,str: "channels Generic Rubber Chicken",date: new Date("2018-09-06T19:41:23.638Z"),array: [67700,{_id: 14845,num: 57916,array: [],obj: {}},{_id: 14846,str: "JSON",num: 61461,date: new Date("2018-09-06T08:28:58.529Z"),obj: {_id: 14847,str: "Automated",date: new Date("2018-09-06T16:08:39.397Z"),array: []}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14848,str: "open-source optimize",num: 26874,date: new Date("2018-09-06T19:11:51.493Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14849,str: "Liaison",num: 15531,date: new Date("2018-09-06T07:02:55.163Z"),array: [new Date("2018-09-05T20:12:14.181Z"),"best-of-breed",89622,new Date("2018-09-06T17:27:15.702Z"),[],new Date("2018-09-06T16:02:51.970Z"),5460,"Awesome Granite Ball e-business","Hat invoice Investor","Producer",{_id: 14850,str: "Usability",num: 80454,date: new Date("2018-09-06T02:39:28.648Z"),obj: {_id: 14851,str: "Car"}},36992],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14852,str: "Kids",num: 60862,date: new Date("2018-09-06T00:37:46.908Z"),array: [],obj: {_id: 14853,str: "Licensed Wisconsin Cambridgeshire",date: new Date("2018-09-06T04:09:36.244Z"),obj: {_id: 14854,str: "models",num: 79276,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14855,str: "synthesizing Grocery",num: 6930,date: new Date("2018-09-06T09:23:11.997Z"),array: [new Date("2018-09-06T11:00:09.812Z"),new Date("2018-09-05T20:48:13.623Z"),74681,97456,new Date("2018-09-06T04:55:00.376Z"),"grey Sleek Bulgarian Lev","plug-and-play Barbados Fish",[new Date("2018-09-05T20:56:41.750Z"),"Small Plastic Table strategize Branch"],73795,new Date("2018-09-06T10:02:20.894Z"),new Date("2018-09-06T17:28:23.067Z"),"solid state parsing",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14856,num: 93551,array: []});
    },

    function(coll) {
        return coll.insert({_id: 14857,str: "Liaison Awesome ADP",num: 33153,date: new Date("2018-09-06T07:44:38.101Z"),array: ["Generic Granite Chips Mongolia",63856,{_id: 14858,str: "Fantastic Wooden Shoes South Dakota",num: 98790,date: new Date("2018-09-05T21:04:00.622Z"),array: [],obj: {_id: 14859,str: "matrix",num: 49381,date: new Date("2018-09-06T17:23:39.213Z")}},[],new Date("2018-09-06T17:19:35.426Z"),25991,new Date("2018-09-05T20:37:52.575Z"),new Date("2018-09-06T16:27:12.066Z"),"Ireland Beauty Indian Rupee",32214,new Date("2018-09-06T00:00:16.140Z")]});
    },

    function(coll) {
        return coll.insert({_id: 14860,str: "Solutions Wall Keyboard",num: 90895,date: new Date("2018-09-06T19:52:11.692Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14861,str: "fuchsia Awesome",num: 49821,date: new Date("2018-09-06T19:20:29.141Z"),array: [],obj: {_id: 14862,str: "Practical multi-byte",num: 74240,date: new Date("2018-09-06T05:44:40.383Z"),array: [new Date("2018-09-06T05:47:49.111Z"),new Date("2018-09-06T08:22:42.753Z"),56909,"value-added",{_id: 14863,str: "innovate Practical Wooden Gloves Factors",num: 41998,date: new Date("2018-09-06T00:48:33.520Z"),array: [new Date("2018-09-06T15:02:14.559Z")],obj: {_id: 14864,str: "innovative Sri Lanka Checking Account",num: 33721,obj: {}}},39222,64621,["Tasty Fresh Bacon"],"Intuitive","heuristic Intelligent De-engineered",84463,[],"New Zealand definition",new Date("2018-09-06T11:28:03.116Z")],obj: {_id: 14865,num: 421,date: new Date("2018-09-06T01:35:19.127Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14866,str: "transmitting SAS parse",num: 99016,date: new Date("2018-09-06T17:58:17.241Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14867,str: "Cape Frozen sensor",date: new Date("2018-09-06T01:29:24.266Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14868,num: 9559,date: new Date("2018-09-05T23:04:57.113Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14869,str: "calculate ivory",num: 18479,date: new Date("2018-09-06T05:39:59.958Z"),array: [new Date("2018-09-06T15:45:19.615Z"),34835,"Intelligent Cotton Shirt Way Planner","Bike Mexican Peso Mexican Unidad de Inversion (UDI) withdrawal",21937,new Date("2018-09-06T04:19:33.423Z"),{_id: 14870,num: 57673,date: new Date("2018-09-06T19:15:19.259Z"),obj: {_id: 14871,str: "Antarctica (the territory South of 60 deg S) application strategy",num: 83405,date: new Date("2018-09-06T03:30:42.232Z"),array: [],obj: {}}},new Date("2018-09-06T14:06:00.026Z"),{_id: 14872,str: "Saint Helena monitor needs-based",num: 66266,date: new Date("2018-09-06T10:12:20.106Z"),array: [],obj: {}},[new Date("2018-09-05T23:09:37.217Z"),["technologies Indiana",73223,83255,new Date("2018-09-06T03:56:47.235Z"),87897],"Licensed Frozen Mouse"]],obj: {_id: 14873,str: "Turkmenistan",date: new Date("2018-09-06T08:13:08.576Z"),obj: {_id: 14874,str: "zero tolerance Human",num: 10509,date: new Date("2018-09-06T04:28:24.928Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 14875,str: "Forward circuit well-modulated",num: 23552,date: new Date("2018-09-06T14:44:44.897Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14876,str: "quantify",num: 87778,date: new Date("2018-09-06T11:54:11.699Z"),array: [33376,"multi-byte",{_id: 14877,str: "efficient East Caribbean Dollar",num: 56027,date: new Date("2018-09-05T23:16:04.891Z"),array: []},[],36341,new Date("2018-09-05T23:07:03.899Z"),[],new Date("2018-09-06T16:26:36.082Z"),new Date("2018-09-05T21:26:03.641Z"),"withdrawal",[11215,"payment Incredible Soft Cheese Engineer"],{_id: 14878,str: "web-readiness Awesome",num: 1867,date: new Date("2018-09-06T00:54:22.084Z"),array: [new Date("2018-09-06T19:33:02.871Z"),82131],obj: {}},33714],obj: {_id: 14879,num: 93976,date: new Date("2018-09-06T03:54:27.987Z")}});
    },

    function(coll) {
        return coll.insert({_id: 14880,str: "invoice application",num: 35802,date: new Date("2018-09-05T20:38:48.716Z"),array: [{_id: 14881,str: "Cotton invoice Usability",num: 44815,date: new Date("2018-09-06T09:25:15.587Z"),obj: {}},new Date("2018-09-06T06:21:24.990Z"),50481,53204,new Date("2018-09-06T15:15:44.911Z"),new Date("2018-09-06T16:47:43.565Z"),new Date("2018-09-06T14:15:34.691Z"),[60936],"XML Sleek Concrete Ball",{_id: 14882,str: "Credit Card Account internet solution Tuna",num: 3177,date: new Date("2018-09-06T11:19:16.188Z"),array: [],obj: {}},[]],obj: {_id: 14883,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14884,str: "synthesizing Tasty",num: 45732,date: new Date("2018-09-05T21:26:20.874Z"),array: [new Date("2018-09-06T07:59:58.263Z"),82986,64861,40880,{_id: 14885,str: "Ecuador",num: 54979,date: new Date("2018-09-06T12:57:25.025Z")},new Date("2018-09-06T19:44:27.886Z"),["Courts"],"Glens Soap","Lari compressing circuit","success Fantastic Plastic Table THX",1247,new Date("2018-09-06T08:47:01.408Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14886,num: 96785,date: new Date("2018-09-06T17:07:15.950Z"),array: [{_id: 14887,num: 54981,date: new Date("2018-09-06T15:06:06.387Z"),array: [],obj: {}},{_id: 14888,str: "Small",date: new Date("2018-09-05T22:11:00.292Z"),obj: {_id: 14889,str: "Sleek Frozen Car asynchronous",num: 98378,date: new Date("2018-09-05T20:53:53.614Z"),array: ["PNG content Ethiopia",56307],obj: {_id: 14890,str: "microchip payment relationships",num: 60966,date: new Date("2018-09-06T16:55:15.548Z"),obj: {}}}},new Date("2018-09-06T05:30:31.385Z"),[],24509,[new Date("2018-09-06T10:13:58.206Z"),"supply-chains value-added"],"proactive","AGP Awesome flexibility",4087,"Metrics cyan Agent",new Date("2018-09-05T22:10:48.087Z")]});
    },

    function(coll) {
        return coll.insert({_id: 14891,num: 54842,date: new Date("2018-09-06T13:20:18.012Z"),array: [],obj: {_id: 14892,str: "USB Credit Card Account",num: 79373,date: new Date("2018-09-06T01:03:23.767Z"),array: [new Date("2018-09-05T20:41:59.375Z"),76529,"task-force hacking seamless",[],{_id: 14893,str: "AI",num: 88256,date: new Date("2018-09-06T02:55:32.774Z")},[4551,"Savings Account",new Date("2018-09-06T03:02:40.505Z"),"customer loyalty",[],"Gloves Incredible gold",56225,new Date("2018-09-06T00:43:05.523Z")],93550,{_id: 14894,str: "Computers Buckinghamshire Licensed Plastic Ball",num: 8512,array: [{_id: 14895,num: 44171,obj: {_id: 14896,num: 95109,date: new Date("2018-09-06T00:19:09.696Z"),array: [new Date("2018-09-06T17:41:08.678Z")]}},"experiences"],obj: {_id: 14897,str: "strategic Central African Republic",date: new Date("2018-09-06T10:24:04.089Z"),array: ["Rustic throughput",new Date("2018-09-06T00:41:43.937Z")],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14898,str: "Handmade",num: 37168,date: new Date("2018-09-05T20:28:09.728Z"),array: ["Algeria payment withdrawal",new Date("2018-09-06T08:49:21.530Z"),new Date("2018-09-06T14:51:26.105Z"),19588,"Refined Plastic Chicken Mongolia","Ergonomic Lead backing up",64351,10759],obj: {_id: 14899,str: "Garden",num: 14779,date: new Date("2018-09-06T16:22:36.620Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14900,str: "ADP Senegal",num: 65976,date: new Date("2018-09-06T13:35:32.162Z"),array: [new Date("2018-09-05T22:58:32.735Z"),{_id: 14901,str: "Agent",num: 95099,date: new Date("2018-09-06T00:08:30.682Z"),array: [],obj: {_id: 14902,str: "haptic firmware Creative",num: 17137,date: new Date("2018-09-06T00:39:56.621Z"),obj: {}}},61140,31571,"Salad Algerian Dinar",38550,new Date("2018-09-06T17:43:50.272Z"),new Date("2018-09-06T02:55:36.294Z"),["Internal"],75815,new Date("2018-09-06T08:51:44.941Z")]});
    },

    function(coll) {
        return coll.insert({_id: 14903,str: "Checking Account",num: 8357,date: new Date("2018-09-06T13:36:31.477Z"),array: [[74239,"Intelligent Metal Mouse SQL",new Date("2018-09-06T05:46:08.159Z"),"Savings Account"],38713,67808,new Date("2018-09-06T09:20:49.507Z"),"communities Keyboard","Practical Rubber Table mindshare",new Date("2018-09-06T13:24:33.988Z"),[],[]],obj: {_id: 14904,str: "back-end TCP wireless",num: 63820,date: new Date("2018-09-06T17:39:26.743Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14905,str: "copy Gorgeous Concrete Ball clicks-and-mortar",num: 14182,date: new Date("2018-09-06T02:03:29.074Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14906,num: 35826,date: new Date("2018-09-06T14:00:59.047Z"),array: [62989,"hub Argentine Peso",93429,{_id: 14907,str: "Accountability Sports",num: 82976,date: new Date("2018-09-06T11:51:32.561Z"),array: [new Date("2018-09-06T18:29:00.560Z")],obj: {}},"Kuwaiti Dinar Nepal",4676,new Date("2018-09-06T08:06:08.056Z"),49892,new Date("2018-09-06T14:37:42.145Z"),[],{_id: 14908,str: "Books Fantastic Wooden Hat",num: 85665,date: new Date("2018-09-06T17:04:49.277Z"),array: [],obj: {_id: 14909,str: "Awesome Steel Towels niches",date: new Date("2018-09-06T16:03:22.703Z"),array: ["RSS Gloves",{_id: 14910,str: "Investment Account Internal Incredible Plastic Pizza",num: 75864,date: new Date("2018-09-06T03:55:53.022Z")}],obj: {_id: 14911,date: new Date("2018-09-06T17:16:46.775Z"),array: [],obj: {}}}},[]],obj: {_id: 14912,str: "El Salvador Colon US Dollar Outdoors",array: ["Program local",new Date("2018-09-05T23:44:19.203Z"),"backing up"]}});
    },

    function(coll) {
        return coll.insert({_id: 14913,str: "Savings Account Manager Incredible",num: 43620,date: new Date("2018-09-06T16:49:49.307Z"),array: [45827,new Date("2018-09-06T06:34:53.407Z"),10469,"firewall 1080p","Factors sexy",new Date("2018-09-06T18:46:00.030Z"),"Handcrafted Frozen Table bypass",[],"enable",{_id: 14914,str: "Quality niches",num: 95036,date: new Date("2018-09-06T01:53:08.351Z"),array: [],obj: {}},82157,new Date("2018-09-06T10:28:59.654Z"),48268],obj: {_id: 14915,num: 6540,date: new Date("2018-09-06T09:11:26.655Z"),array: ["logistical Implemented",33357],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14916,str: "matrix",num: 25827,date: new Date("2018-09-06T15:14:12.937Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14917,str: "deposit action-items Coordinator",num: 47240,date: new Date("2018-09-06T19:35:31.822Z"),array: [[],"Fresh Director Rupiah",new Date("2018-09-06T08:52:53.174Z"),"withdrawal",new Date("2018-09-06T16:47:04.456Z"),54083,58135,"Car",80209,new Date("2018-09-06T01:41:51.841Z")],obj: {_id: 14918,str: "Credit Card Account",num: 61631,date: new Date("2018-09-05T22:15:22.661Z"),obj: {_id: 14919,num: 61412,date: new Date("2018-09-06T10:09:03.663Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 14920,str: "Louisiana Minnesota Refined Concrete Computer",num: 17683,date: new Date("2018-09-06T04:37:44.828Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14921,str: "Persevering",num: 54210,date: new Date("2018-09-06T08:10:02.519Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14922,str: "invoice Plastic Fantastic Frozen Computer",num: 34076,date: new Date("2018-09-06T09:19:51.722Z"),array: [],obj: {_id: 14923,str: "maroon",num: 42268,date: new Date("2018-09-05T21:30:26.829Z"),array: ["non-volatile",new Date("2018-09-06T08:15:29.078Z"),["North Carolina",new Date("2018-09-06T10:39:22.332Z"),new Date("2018-09-06T17:21:20.103Z"),39661,{_id: 14924,date: new Date("2018-09-06T07:20:31.940Z"),obj: {}}],new Date("2018-09-06T08:29:19.584Z"),"Village Denar",66269,33201,48348,{_id: 14925,date: new Date("2018-09-06T13:05:51.353Z")},["Handcrafted Rubber Sausages navigating Passage"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14926,str: "Direct alarm Cambridgeshire",num: 18934,date: new Date("2018-09-06T05:07:25.814Z"),array: [],obj: {_id: 14927,num: 11068,date: new Date("2018-09-05T20:59:18.411Z"),array: [31705,new Date("2018-09-06T00:16:06.002Z"),"Skyway",16989,{_id: 14928,str: "bypassing",num: 26897,date: new Date("2018-09-06T15:37:10.920Z"),array: [],obj: {_id: 14929,date: new Date("2018-09-06T00:36:24.389Z"),obj: {}}},new Date("2018-09-06T01:12:25.956Z"),"synthesize",[],69671,"Paradigm portals",{_id: 14930,str: "function parsing Checking Account",num: 84763,obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 14931,num: 84511,date: new Date("2018-09-06T17:58:31.884Z"),array: [],obj: {_id: 14932,str: "Cross-group Personal Loan Account",num: 85244,date: new Date("2018-09-06T14:20:26.813Z"),array: [new Date("2018-09-06T12:22:07.082Z"),"Hill","Investor digital",[38606,{_id: 14933,str: "sexy mesh",num: 43453,array: [11330]}],{_id: 14934,str: "Bedfordshire hack",num: 91529,obj: {}},new Date("2018-09-05T20:39:40.427Z"),new Date("2018-09-06T10:18:12.880Z"),59540,14658],obj: {_id: 14935,str: "deposit",date: new Date("2018-09-06T14:10:52.108Z"),array: [],obj: {_id: 14936,str: "Avon",date: new Date("2018-09-06T04:57:30.173Z"),array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 14937,str: "PCI Checking Account Credit Card Account",num: 72703,date: new Date("2018-09-06T11:47:33.029Z"),array: [new Date("2018-09-06T03:45:45.015Z"),"Generic Niue",new Date("2018-09-06T16:26:43.572Z"),65623,90422,"reboot Technician navigate",50689,new Date("2018-09-06T14:17:43.254Z"),{_id: 14938,num: 27062,date: new Date("2018-09-06T03:50:44.102Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 14939,str: "Louisiana unleash",num: 63186,date: new Date("2018-09-06T16:38:59.789Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14940,str: "Utah SMTP Checking Account",num: 70663,date: new Date("2018-09-06T02:20:37.445Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14941,str: "Universal Lake",num: 68788,date: new Date("2018-09-06T14:19:03.596Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14942,str: "Branding",num: 39041,date: new Date("2018-09-06T02:47:40.694Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 14943,str: "open-source mission-critical",num: 88536,array: [new Date("2018-09-06T16:03:27.206Z"),[],"Toys",{_id: 14944,date: new Date("2018-09-05T22:47:46.731Z"),obj: {_id: 14945,str: "Chair Producer CFP Franc",num: 90083,date: new Date("2018-09-05T20:07:26.000Z"),array: [59263,"Home Loan Account"],obj: {_id: 14946,str: "Credit Card Account envisioneer",num: 67546,date: new Date("2018-09-05T22:53:44.404Z"),array: [new Date("2018-09-06T17:05:49.840Z"),{_id: 14947,num: 75973,date: new Date("2018-09-06T10:51:02.477Z"),obj: {}},32721]}}},4062,"Realigned",[],2652,53820,"web-readiness"],obj: {_id: 14948,str: "Agent",num: 39054,date: new Date("2018-09-06T09:44:58.414Z"),array: [],obj: {_id: 14949,str: "parse",num: 79468,date: new Date("2018-09-06T01:50:31.997Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 14950,str: "programming feed product",num: 64065,date: new Date("2018-09-05T23:13:13.293Z"),array: ["applications Well",new Date("2018-09-06T12:04:25.014Z"),{_id: 14951,str: "Auto Loan Account",num: 86722,date: new Date("2018-09-06T07:16:04.123Z"),array: [58661],obj: {}},"haptic GB",28102,new Date("2018-09-06T08:20:49.534Z"),16482,new Date("2018-09-06T18:30:29.986Z"),[],9962,[],new Date("2018-09-06T08:20:00.324Z"),3784],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14952,str: "Checking Account Orchard",num: 65359,array: [new Date("2018-09-06T06:24:27.828Z"),46884,"Shoes e-services","approach calculating",[],84372,new Date("2018-09-06T03:26:10.210Z"),"maroon",{_id: 14953,str: "Graphic Interface",num: 48545,date: new Date("2018-09-06T11:16:15.243Z"),array: ["Refined Soft Bacon",new Date("2018-09-06T15:10:58.052Z")],obj: {_id: 14954,str: "Soft Global distributed",num: 37487,date: new Date("2018-09-06T17:09:10.086Z"),array: [],obj: {}}},[],new Date("2018-09-06T19:09:12.898Z")]});
    },

    function(coll) {
        return coll.insert({_id: 14955,str: "Dynamic",num: 13346,date: new Date("2018-09-06T09:57:37.085Z"),obj: {_id: 14956,str: "Liechtenstein",num: 87517,date: new Date("2018-09-06T04:31:57.477Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14957,str: "Web",num: 53989,array: [90002,new Date("2018-09-05T20:54:48.575Z"),"Cambridgeshire",[],89689,["Unbranded deposit Industrial",{_id: 14958,str: "SQL",num: 47135,date: new Date("2018-09-05T20:53:41.313Z"),array: [],obj: {_id: 14959,str: "Buckinghamshire",num: 57220,array: [],obj: {}}}],["bypassing Zambia Distributed",new Date("2018-09-06T19:03:32.463Z"),{_id: 14960,str: "front-end Applications",num: 75286,date: new Date("2018-09-06T08:25:40.331Z"),array: []}],28301,new Date("2018-09-05T20:45:52.791Z"),"leverage array program",[{_id: 14961,str: "Regional generate",num: 38887,date: new Date("2018-09-06T08:42:26.955Z"),obj: {_id: 14962,array: [new Date("2018-09-06T09:22:31.182Z"),{_id: 14963,obj: {_id: 14964,str: "Avon middleware",date: new Date("2018-09-06T14:31:03.907Z"),obj: {}}}]}}],new Date("2018-09-06T16:19:10.324Z")]});
    },

    function(coll) {
        return coll.insert({_id: 14965,str: "Gorgeous",num: 20175,date: new Date("2018-09-05T22:28:24.297Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14966,str: "cultivate",num: 90975,date: new Date("2018-09-06T09:04:41.754Z"),array: [],obj: {_id: 14967,str: "JBOD Cambridgeshire",num: 98462,date: new Date("2018-09-06T06:03:16.883Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14968,str: "transitional",date: new Date("2018-09-06T17:10:08.386Z"),array: ["Awesome Metal Bacon Engineer",14548,99982,new Date("2018-09-06T10:05:09.098Z"),3415,85778,"Object-based tertiary Salad","transmitter JSON","generate Bike",new Date("2018-09-06T03:48:02.166Z"),new Date("2018-09-06T12:04:50.833Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14969,str: "Marketing Cheese",num: 77557,date: new Date("2018-09-06T10:07:37.605Z"),array: [4512,"Movies",15922,"Kids leverage",new Date("2018-09-06T10:44:51.639Z"),81024,new Date("2018-09-06T11:21:02.838Z"),"iterate Regional grey","Unbranded next-generation",[]]});
    },

    function(coll) {
        return coll.insert({_id: 14970,str: "Legacy",num: 39039,date: new Date("2018-09-06T13:38:53.648Z"),array: [new Date("2018-09-06T11:32:30.331Z"),new Date("2018-09-06T19:14:25.252Z"),66413,25407,"digital",{_id: 14971,str: "Buckinghamshire cultivate B2B",num: 93184,date: new Date("2018-09-06T09:42:21.361Z"),array: ["global solid state Buckinghamshire",new Date("2018-09-05T22:03:59.295Z")],obj: {}},new Date("2018-09-05T21:08:18.802Z"),2774,"Generic",[],[]],obj: {_id: 14972,str: "CSS SAS",date: new Date("2018-09-06T05:24:41.904Z"),array: [new Date("2018-09-06T02:55:48.829Z"),new Date("2018-09-06T01:19:31.601Z"),[{_id: 14973,str: "Ergonomic Program transmitter",num: 14205,obj: {}},78155,42533],{_id: 14974,date: new Date("2018-09-06T10:15:36.782Z"),array: ["Home Loan Account"],obj: {_id: 14975,str: "Berkshire",num: 66372,date: new Date("2018-09-06T00:34:21.217Z"),array: [],obj: { _id: 14976 }}}]}});
    },

    function(coll) {
        return coll.insert({_id: 14977,str: "Secured",num: 90869,date: new Date("2018-09-06T01:59:53.143Z"),array: [],obj: {_id: 14978,str: "Boliviano Mvdol Handcrafted Checking Account",num: 15085,date: new Date("2018-09-06T00:43:50.402Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 14979,str: "Investor input Coordinator",num: 80741,date: new Date("2018-09-05T22:40:42.878Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14980,str: "Rue auxiliary wireless",num: 50241,date: new Date("2018-09-06T07:01:02.805Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14981,str: "Administrator Granite Ohio",num: 45549,date: new Date("2018-09-06T15:16:00.244Z"),array: [72306,new Date("2018-09-05T23:15:53.375Z"),"pixel RSS",66559,new Date("2018-09-06T14:53:44.096Z"),"mobile program ability",{_id: 14982,str: "withdrawal Unbranded",num: 82675,array: [],obj: {}},{_id: 14983,str: "parallelism",num: 23274,date: new Date("2018-09-06T13:37:25.820Z"),obj: {_id: 14984,num: 39811,date: new Date("2018-09-06T00:55:12.218Z"),array: [[]],obj: {}}},"Hat online",new Date("2018-09-06T00:55:15.881Z"),61845,39489,new Date("2018-09-06T09:58:32.676Z"),"Sharable Buckinghamshire"]});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "num": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$obj.str',13,16] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cayman Islands Dollar Sports plum",v: 1236},{k: "Fresh",v: { $dayOfWeek: { $year: { $dateToString: {date: '$obj.obj.date',format: "%w-%G-%S-%H-%G-%Z-%Y-%w-%H",timezone: "America/Cordoba"} } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "structure Baby Forint",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "seamless",v: true},{k: "users",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Regional Indian Rupee"],'$num'] }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeek: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T13:27:58.457Z",format: "%u-%L-%H-%Y-%S-%S-%G-%Z-%S",onNull: { $arrayElemAt: [[],75773] }} } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str',"AGP applications"],[{ $substr: ["Money Market Account cross-platform",15,7] }],[]] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfWeek: { $dayOfMonth: { $second: { $isoWeek: { $isoWeek: { $millesecond: { $dateToString: {date: '$obj.obj.date',format: "%w-%u-%M-%U-%L-%M-%H-%z-%w-%L-%G-%w",onNull: "visionary bluetooth South Carolina"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[41246,'$obj.num'],["neural streamline"],["Berkshire solid state Identity"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num'],cond: { $and: [] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Colorado enterprise",0,10] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Tasty Metal Tuna Corporate"],35616] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Personal Loan Account Morocco",'$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[41238],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toString: { $second: { $week: { $dateToString: {date: '$date',format: "%S-%Y-%L-%Y-%d-%w-%u-%H",timezone: "Asia/Macau",onNull: { $arrayToObject: [[{k: "Sleek Wooden Hat",v: true},{k: "Configuration Practical Fantastic Fresh Towels",v: { $isoDayOfWeek: { $hour: { $year: { $millesecond: { $dateToString: { date: { $isoWeek: { $isoDayOfWeek: { $year: { $isoWeekYear: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Asia/Bangkok"} } } } } } } } } } } }},{k: "Keyboard Fantastic Concrete Fish Web",v: false}]] }} } } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Music interfaces asynchronous" } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Home",'$obj.obj.str',{ $ltrim: {input: { $dateToString: {date: { $minute: { $millesecond: { $toDate: { $week: '$obj.obj.date' } } } },format: "%Z-%G-%V-%%-%d-%H-%L-%Y-%w-%L",onNull: '$obj.obj.obj.str'} },chars: "Turkey"} }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "enable enable Buckinghamshire",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $month: { $dateFromParts: {year: { $indexOfArray: [{ $objectToArray: '$obj.obj' },{ $range: [18,13,3] },14] },month: { $exp: { $ln: 86293 } },hour: { $subtract: [88004,'$num'] },minute: { $floor: { $log: ['$obj.obj.obj.num',60418] } },millisecond: { $pow: [7930,'$obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $toUpper: { $dateToString: {date: new Date("2018-09-05T21:57:32.000Z"),format: "%Y-%V-%M-%V-%j-%%-%U-%m-%G-%d",timezone: "US/Indiana-Starke"} } }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromString: {dateString: "2018-09-06T07:07:17.338Z",format: "%%-%U-%Y-%m-%V-%w-%S",onError: { $arrayElemAt: [["Table auxiliary withdrawal"],1918] },onNull: "compressing Village Handcrafted"} } }, _id: 0}}],

        [{$project: {a: { $toUpper: "Ohio interface Direct" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: '$obj.obj.date',format: "%u-%V-%M-%M-%G-%%-%V-%Y-%L-%j-%d"} },{ $substrBytes: ['$obj.obj.obj.str',11,2] }],[64960,'$num',21269],["white haptic Credit Card Account"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["Central invoice panel",20,6] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $trim: {input: "transitional",chars: { $toString: { $arrayElemAt: [[],'$obj.num'] } }} },chars: { $toString: { $filter: {input: ['$obj.obj.obj.num'],as: 'viola',cond: { $gt: [{ $arrayToObject: [[{k: "Cotton Gorgeous JSON",v: 46656}]] },{ $month: { $dateFromString: {dateString: "2018-09-06T15:28:33.750Z",format: "%%-%m-%w-%Z-%w-%U-%H",onError: { $dateToString: {date: { $dateToString: {date: new Date("2018-09-06T01:16:59.446Z"),timezone: "Etc/GMT-8"} },timezone: "Pacific/Norfolk"} },onNull: { $arrayElemAt: [[],'$$viola'] }} } }] }} } }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str',"deposit Generic Soft Pizza"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],11254] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[{ $dateToString: {date: new Date("2018-09-06T07:26:29.776Z"),format: "%z-%w-%d-%Y-%j-%H-%w-%Y-%S-%m-%z",onNull: { $arrayToObject: [[[],[{ $rtrim: {input: '$str',chars: "RSS Holy See (Vatican City State)"} },"secondary green Awesome Cotton Computer"],['$obj.obj.obj.str','$obj.obj.str'],[64358,'$obj.obj.num',50129],[66643,{ $pow: ['$obj.obj.obj.num','$obj.obj.obj.num'] },'$obj.obj.num'],[28183]]] }} }]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "pink",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Optimization Web",{ $toLower: '$obj.obj.obj.str' }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cheese",v: '$num'},{k: "SMTP Sleek",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Mount",{ $toLower: '$obj.obj.str' }],['$obj.num',54354]]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',13,4] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str',"Sleek Switchable niches"],as: 'kameron',in: { $mod: [68804,'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["withdrawal programming"],29256] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Serbia copy",v: new Date("2018-09-06T00:54:32.136Z")}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $ne: [{ $arrayElemAt: [[47847],'$obj.obj.num'] },{ $arrayToObject: [[[],['$$this',"Zimbabwe Dollar"],[{ $substr: ['$obj.obj.str',8,7] },'$obj.str',"lime sensor Wooden"],[],['$num',false,{ $concat: ["quantify District EXE",{ $dateToString: {date: '$obj.date',timezone: "US/Mountain",onNull: { $dateToString: {date: new Date("2018-09-06T14:44:41.575Z"),format: "%G-%L-%m-%Y-%V-%M-%G-%L-%j-%Y-%G-%G"} }} }] },'$$this']]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire haptic programming",v: true}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',7,9] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeek: { $week: { $isoWeekYear: { $week: { $dateFromParts: {isoWeekYear: 80306,isoWeek: { $ceil: '$obj.num' },isoDayOfWeek: { $ceil: '$obj.obj.obj.num' },hour: { $multiply: [] },second: { $cmp: [{ $arrayElemAt: [['$obj.obj.num',18560,27778,98021],11476] },{ $isoWeekYear: { $year: { $hour: { $hour: { $minute: { $week: { $month: { $year: '$obj.date' } } } } } } } }] },timezone: "Asia/Singapore"} } } } } } }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeekYear: { $dateToParts: {date: { $dayOfMonth: { $isoWeekYear: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T03:42:42.431Z",onNull: "integrated architectures Licensed"} },iso8601: false} } } },timezone: "America/Argentina/Buenos_Aires"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[[],['$num',94454],[new Date("2018-09-06T00:57:55.927Z"),'$obj.num'],["fuchsia Buckinghamshire"],['$obj.obj.obj.num',4957],[]]] } }],83118] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["moratorium target Frozen"],38403] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[8698],['$str',"productize"],[],[]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $size: [['$obj.obj.str',{ $substr: ['$obj.str',7,15] }]] },day: { $abs: '$num' }} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $trim: {input: { $trim: { input: '$obj.str' } },chars: "Grocery card"} },chars: "Rubber"} }, _id: 0}}],

        [{$project: {a: { $range: [9,5,17] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $dateToString: {date: new Date("2018-09-06T04:28:51.360Z"),format: "%U-%%-%%-%u-%L-%z-%j-%u-%Y-%V-%Y",timezone: "Asia/Manila",onNull: { $toUpper: '$obj.str' }} } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Granite teal",0,13] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[67004],{ $trunc: 16398 }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],["Club Bedfordshire Borders",{ $toLower: '$obj.obj.obj.str' },"Graphical User Interface Cambodia invoice",'$str'],['$num',58832,'$obj.obj.num'],[],[],[49261]]] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: { $dateToParts: {date: { $second: new Date("2018-09-06T15:17:51.041Z") },iso8601: true} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $second: { $isoDayOfWeek: { $week: { $minute: { $dateToString: {date: '$obj.date',timezone: "America/Atikokan",onNull: { $toUpper: '$obj.obj.obj.str' }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $dayOfYear: { $dayOfMonth: { $toDate: { $arrayElemAt: [[],17950] } } } },timezone: "Atlantic/Stanley"} }],48728] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num'],['$obj.num',97729,{ $floor: 53730 },29748,'$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $hour: { $dateToString: {date: { $week: { $minute: { $dayOfMonth: { $isoWeekYear: { $dateFromParts: {year: { $subtract: [41840,'$obj.num'] },hour: { $abs: 28971 },minute: { $pow: [{ $cmp: [{ $arrayElemAt: [[28653,'$num'],'$obj.num'] },{ $dateToString: {date: { $month: { $isoDayOfWeek: { $year: { $week: { $millesecond: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T07:19:57.781Z",format: "%G-%z-%%-%S-%j-%d-%%",onError: { $arrayElemAt: [[],72013] }} },timezone: "Europe/Chisinau",iso8601: false} } } } } } },timezone: "Asia/Manila",onNull: { $arrayToObject: [[[38353,54367]]] }} }] },45251] }} } } } } },format: "%%-%%-%u-%U-%U-%V",timezone: "Europe/Saratov",onNull: { $substr: ["Buckinghamshire",1,15] }} } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T22:03:07.286Z"),onNull: { $zip: {inputs: [[],[],['$str'],[],[82515,true],['$num','$obj.num']],defaults: [{num: 43590,str: "Configuration e-services 24/365",obj: {}},false]} }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T23:52:35.039Z"),format: "%L-%u-%j-%M-%u-%z-%S-%Y",timezone: "America/Juneau",onNull: { $zip: {inputs: [['$obj.obj.obj.str'],[],[],[false,'$obj.obj.num',false,'$str']],useLongestLength: false} }} }, _id: 0}}],

        [{$project: {a: { $range: [19,9] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[41322,45489],[],["Quetzal invoice",'$str',"Small RSS deposit"],['$obj.num','$num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "interfaces",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[64485,'$obj.obj.num',7734],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Practical Principal"],25121] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $substrBytes: ["instruction set",12,10] } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromString: {dateString: "2018-09-06T15:27:39.257Z",format: "%w-%M-%L-%G-%m-%H-%U-%m-%Y",timezone: "Asia/Bangkok",onError: { $arrayToObject: [[{k: "Shoes overriding Incredible",v: "panel Gloves"}]] },onNull: { $hour: { $second: { $dateToString: {date: new Date("2018-09-06T10:35:02.686Z"),format: "%U-%u-%U-%G-%%-%Z-%d-%Z-%V-%w",onNull: "Cyprus"} } } }} } }, _id: 0}}],

        [{$project: {a: { $range: [19,9,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],5497] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $divide: ['$obj.obj.num',32392] },isoWeek: { $indexOfArray: [{ $reverseArray: [[]] },{ $filter: {input: ['$str'],cond: { $not: [{ $substrBytes: ['$$this',4,8] }] }} },3,6] },isoDayOfWeek: { $size: [[]] },hour: { $ln: { $cmp: [{ $arrayToObject: [[["Cheese",{ $toString: { $arrayElemAt: [['$num'],20957] } },'$str'],["navigating Jamaican Dollar"]]] },{ $millesecond: { $dayOfMonth: { $month: { $dayOfMonth: { $year: { $month: { $isoWeek: { $year: { $dateToString: {date: { $dateToParts: {date: { $isoWeekYear: { $year: { $dateToString: {date: '$obj.obj.date',format: "%M-%H-%j-%S",onNull: { $arrayToObject: [[{k: "override",v: false},{k: "Developer",v: '$obj.obj.obj.num'}]] }} } } },timezone: "Africa/Bissau"} },onNull: '$obj.obj.obj.str'} } } } } } } } } }] } },minute: { $pow: [66857,79683] },second: { $add: [{ $mod: [{ $ln: 45754 },'$obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],96535] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str',"Forest open system",{ $toString: { $reverseArray: [[]] } }]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Massachusetts Fantastic Plastic Bacon Maldives",chars: { $trim: { input: "sticky Salad back-end" } }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $size: [['$obj.str',"New Leu Metal olive"]] },isoDayOfWeek: { $cmp: [{ $arrayToObject: [[{k: "Iran",v: '$obj.obj.obj.str'}]] },{ $arrayToObject: [[[],[],['$obj.num',6329],[new Date("2018-09-05T22:25:16.039Z")]]] }] },hour: { $subtract: [31536,'$obj.obj.obj.num'] },minute: { $abs: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],['$obj.obj.str',{ $dateToString: {date: '$obj.obj.obj.date',timezone: "Africa/Luanda",onNull: { $rtrim: { input: "systemic Human leading-edge" } }} },'$str'],[],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $toLower: "gold" }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.obj.obj.num'],[],[false],[{ $concat: [{ $toLower: "Director end-to-end" },{ $trim: {input: '$obj.str',chars: "Cross-platform Chile"} }] },{ $toUpper: "24/7 Home Loan Account" }],[]] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $arrayToObject: [[{k: "Soft Refined Steel Chips Wall",v: "Generic virtual"},{k: "Associate",v: '$obj.obj.obj.num'}]] } },{ $concat: ['$obj.obj.str'] },'$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $second: new Date("2018-09-06T02:57:55.137Z") }, _id: 0}}],

        [{$project: {a: { $range: [9,16,20] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%m-%%-%L-%L-%V-%S-%S-%H",onNull: { $substrBytes: ['$obj.obj.str',4,10] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[53240,34276],["firmware"],[],[],['$obj.obj.str',{ $toUpper: { $concat: ['$str',"Ford pixel Russian Federation","olive virtual"] } },'$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Home SSL hierarchy",{ $toUpper: { $substrCP: ['$obj.str',14,4] } },"South Carolina"],22840] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Lebanese Pound IB Pants","Auto Loan Account Rustic"]] }, _id: 0}}],

        [{$project: {a: { $second: { $dateToString: {date: new Date("2018-09-06T09:28:37.173Z"),timezone: "Africa/Ndjamena",onNull: { $arrayToObject: [[{k: "niches Washington",v: "generate"},{k: "Computers pixel",v: false}]] }} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Tools"],cond: { $or: [{ $rtrim: { input: "index Expressway" } },'$$this',{ $toUpper: "West Virginia program" },'$$this',{ $trim: {input: '$obj.obj.str',chars: { $concat: ["Outdoors Integration"] }} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[59917]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Designer",v: new Date("2018-09-06T16:16:01.357Z")}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $dateToParts: {date: { $dayOfMonth: { $dayOfWeek: { $toDate: { $arrayElemAt: [['$obj.num'],{ $log: [71571,63929] }] } } } },timezone: "Antarctica/Palmer",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $substrBytes: ["National Research",0,13] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $toDate: { $dateToString: {date: new Date("2018-09-06T02:55:38.830Z"),format: "%z-%H-%U-%d-%w-%S-%j"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoDayOfWeek: { $dateToString: {date: '$obj.date',timezone: "Asia/Kuching"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "PNG Guam",v: true},{k: "Books heuristic",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["reboot silver",8,9] },'$obj.obj.str',"parse"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $substrBytes: ["e-tailers Georgia",5,3] },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.obj.num',43245,85217],[],[],["middleware"]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["primary Kip world-class"],[],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[53455],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToParts: { date: { $dateToParts: {date: { $second: { $isoDayOfWeek: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T14:35:24.328Z",timezone: "Pacific/Port_Moresby",onNull: { $map: {input: ['$str',"Planner Granite Tools"],as: 'andreane',in: { $ln: '$obj.obj.obj.num' }} }} } } } },timezone: "Asia/Nicosia"} } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[32011],[{ $rtrim: { input: { $substr: ['$str',9,13] } } }],[],[],[],["Uganda Home Loan Account"]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $mod: [{ $ln: '$$this' },46123] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["circuit",{ $rtrim: {input: '$str',chars: '$obj.obj.str'} },"quantify Analyst back-end"],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $concat: ["Vietnam",'$str'] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$num']] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $hour: { $week: { $dateToParts: {date: { $dayOfWeek: { $toDate: { $map: {input: ["Interactions e-tailers Fantastic Cotton Chips"],in: { $pow: [4732,{ $size: [[]] }] }} } } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: new Date("2018-09-06T18:08:06.680Z") } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[94899],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $week: { $year: { $month: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T01:19:25.304Z",onError: { $minute: { $minute: { $dayOfYear: { $hour: { $isoWeek: { $dayOfWeek: { $dayOfYear: { $dayOfMonth: { $hour: { $dateToString: {date: '$obj.obj.date',timezone: "Asia/Yerevan"} } } } } } } } } } }} } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $substrBytes: ["Cross-platform online",2,2] }]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $dateToString: { date: { $minute: { $hour: { $week: '$obj.obj.obj.date' } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["knowledge base plum"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num',3807,'$obj.obj.obj.num'],[50157,42462,{ $add: [] }],["Rhode Island",'$obj.obj.str'],[{ $concat: [{ $ltrim: {input: "leading-edge synthesizing Representative",chars: '$obj.obj.str'} },'$str',"red complexity Island"] }],[57915]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',{ $dateToString: {date: '$obj.obj.obj.date',format: "%Y-%d-%H-%%-%z-%L-%%"} }],18539] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: { $millesecond: { $millesecond: { $dayOfMonth: { $dateToString: {date: '$obj.date',format: "%V-%z-%j-%d-%S",timezone: "America/Dominica",onNull: { $arrayElemAt: [['$obj.str'],78573] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $toDate: { $substr: [{ $substrBytes: ["Fish Kentucky",1,8] },16,10] } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Tasty Wooden Keyboard Towels",'$obj.obj.obj.str',{ $substrBytes: [{ $toUpper: "strategic Applications Digitized" },13,2] }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire executive online",v: false},{k: "channels Plastic Democratic People's Republic of Korea",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.str',16,5] },"Shoes"],22431] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',"Quality Marketing"],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $hour: { $isoDayOfWeek: { $dayOfMonth: { $month: { $dayOfYear: { $week: { $isoWeekYear: { $year: { $second: { $hour: { $dayOfMonth: { $dateToParts: {date: { $dateFromParts: {year: { $exp: 75594 },month: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj' },{ $rtrim: { input: '$obj.obj.obj.str' } },10,11] },day: { $divide: [73807,'$obj.obj.obj.num'] },minute: { $subtract: ['$obj.obj.num',47258] },second: { $exp: { $sqrt: { $add: [24520,'$obj.obj.num'] } } },timezone: "Africa/Asmara"} },iso8601: false} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: { $concat: [] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $multiply: ['$obj.obj.obj.num',28379,89810] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire bleeding-edge",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfYear: { $month: { $dayOfMonth: { $dateToParts: {date: { $dateToString: { date: new Date("2018-09-06T11:13:57.738Z") } },iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["International"],49029] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Springs withdrawal",v: { $week: { $dateToParts: { date: { $month: { $isoWeekYear: { $millesecond: { $isoDayOfWeek: { $dateFromParts: {year: { $add: ['$num',44560,{ $ceil: '$num' }] },month: { $exp: { $abs: '$obj.obj.obj.num' } },hour: { $add: [29891] },millisecond: { $pow: [34258,{ $size: [[]] }] },timezone: "GB-Eire"} } } } } } } } }},{k: "invoice Soft",v: false},{k: "Delaware parse Fresh",v: { $substrCP: ["architectures",18,2] }}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%d-%m-%Z-%U-%V-%d-%j-%j",timezone: "Australia/Sydney",onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $month: { $dateFromParts: {year: { $ln: { $ceil: 79419 } },hour: { $log10: '$obj.obj.num' },minute: { $sqrt: 10857 },millisecond: { $abs: 93156 }} } },format: "%V-%G-%%-%u",onNull: { $arrayToObject: [[["success",'$obj.str'],[],[{ $rtrim: { input: '$obj.obj.str' } },{ $substrBytes: ['$str',14,1] }],[]]] }} }, _id: 0}}],

        [{$project: {a: { $year: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-05T23:11:55.777Z",timezone: "Pacific/Noumea",onError: { $arrayToObject: [[{k: "ivory",v: { $minute: { $dayOfMonth: { $isoWeekYear: '$obj.date' } } }}]] },onNull: { $trim: {input: { $ltrim: { input: '$str' } },chars: { $toString: { $range: [8,18] } }} }} } } }, _id: 0}}],

        [{$project: {a: { $toUpper: "Human bypassing" }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'hannah',cond: { $isArray: [{ $arrayElemAt: [['$obj.obj.num'],'$num'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: ["Implementation Public-key",1,9] }],[new Date("2018-09-05T22:02:18.246Z")],[31860,'$obj.num','$num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[63160],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Realigned collaborative invoice",'$obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[{ $trim: {input: '$obj.obj.obj.str',chars: "Pants Small withdrawal"} }],[79611,59979],['$obj.obj.str',{ $toUpper: { $substrCP: ["Gorgeous",9,16] } }],['$obj.obj.str'],[]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],[false],[19644,91625]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[90673,'$obj.num'],46950] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str',{ $substrBytes: ["Wooden withdrawal",1,14] },'$obj.str'],in: { $divide: ['$obj.obj.num',55590] }} }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: '$obj.date' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Buckinghamshire Brazilian Real Steel",v: { $second: { $dayOfYear: { $toDate: { $millesecond: { $year: { $isoWeek: { $dateToString: {date: '$date',format: "%G-%L-%u-%u-%%-%Y-%m-%z-%V-%L-%U"} } } } } } } }},{k: "Rubber monitoring",v: false}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $trim: {input: { $substrCP: ['$obj.obj.obj.str',9,15] },chars: "Handcrafted"} } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $ln: 32303 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $substrBytes: ["IB",13,12] }]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "compelling process improvement",v: '$obj.date'},{k: "turquoise",v: { $dayOfMonth: { $dayOfWeek: { $millesecond: { $second: { $dateFromParts: {isoWeekYear: { $abs: '$obj.obj.obj.num' },isoDayOfWeek: { $log: [6193,86513] },second: 26438,millisecond: { $ceil: '$num' },timezone: "Europe/Vienna"} } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Canadian Dollar Montana Incredible",'$obj.obj.str',{ $trim: {input: { $substrBytes: [{ $substrBytes: ["generating mindshare",4,3] },7,20] },chars: '$obj.obj.obj.str'} }],[{ $toString: { $arrayElemAt: [[false,'$obj.date'],18548] } },'$obj.str'],['$obj.obj.obj.num',60093]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],43833] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trunc: '$obj.obj.num' },{ $subtract: [23541,'$obj.obj.obj.num'] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromParts: {year: { $pow: [41063,45771] },day: { $indexOfArray: [{ $zip: {inputs: [['$obj.obj.str',{ $substrCP: ['$str',12,4] }],[{ $dateFromString: {dateString: "2018-09-06T01:58:59.963Z",onNull: { $millesecond: { $toDate: { $arrayToObject: [[["Cambridgeshire"],[],['$obj.obj.obj.num'],['$obj.obj.obj.num','$obj.obj.num'],[],[],[{ $ltrim: {input: '$obj.str',chars: "4th generation Home Loan Account calculate"} },"magenta",{ $trim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.str'} }]]] } } }} }]],useLongestLength: false} },{ $month: { $year: { $dayOfMonth: { $dayOfMonth: { $minute: { $dateToString: {date: '$date',format: "%%-%w-%Z-%w-%Y-%w-%u-%z-%L-%V-%Z-%w",timezone: "Brazil/Acre",onNull: { $arrayToObject: [[{k: "Intelligent Concrete Soap deposit Aruba",v: "Ethiopian Birr"},{k: "1080p",v: false},{k: "Producer",v: true}]] }} } } } } } },17,8] },minute: { $ceil: '$obj.obj.obj.num' },millisecond: { $ln: '$obj.obj.obj.num' },timezone: "America/Indiana/Tell_City"} } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeekYear: { $toDate: { $toUpper: "user-facing Principal architectures" } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "navigating generate quantifying",v: false},{k: "Electronics",v: new Date("2018-09-05T20:17:53.083Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Intelligent",{ $substrCP: ['$obj.obj.obj.str',10,16] },'$obj.obj.obj.str',"driver"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $pow: ['$obj.obj.num','$obj.obj.obj.num'] },isoWeek: { $abs: 25763 },isoDayOfWeek: { $divide: ['$num',59682] },hour: { $log10: 84859 }} },timezone: "America/Lima",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T16:25:06.603Z"),format: "%V-%Z-%U-%z",onNull: "Borders"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],['$obj.obj.num',31209],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.obj.str',20,6] },"driver Wyoming","Identity Handmade"],39359] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Checking Account",{ $toString: { $arrayElemAt: [['$str'],'$obj.obj.obj.num'] } },{ $substrCP: ["throughput Incredible Rubber Fish firewall",15,19] }],[91104],['$obj.num'],[{ $dateToString: {date: '$obj.obj.obj.date',format: "%M-%m-%w-%z-%m-%m-%%",timezone: "Iceland"} },true],[],['$obj.obj.obj.str',"Open-source"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str','$str'],7306] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$str' }],95870] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: { $toString: { $arrayElemAt: [[],68258] } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Refined Wooden Ball"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[83198],[],[],[{ $ltrim: {input: '$str',chars: "integrate disintermediate"} }]]] }, _id: 0}}],

        [{$project: {a: { $range: [11,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["leading edge"],[],[],['$obj.obj.num'],['$obj.str','$obj.str','$obj.obj.obj.str'],[{ $substrBytes: [{ $ltrim: { input: "Gorgeous Wooden Tuna navigating" } },1,8] }],[40927,'$obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $second: { $second: { $dayOfYear: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: 17688,isoWeek: { $mod: ['$obj.obj.num','$obj.num'] },isoDayOfWeek: { $log: [77525,59474] }} },timezone: "America/Knox_IN",iso8601: true} } } } } } }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $millesecond: { $isoWeekYear: { $year: { $month: { $toDate: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T07:50:31.117Z"),format: "%Y-%w-%U-%Y-%L-%u-%V-%d",timezone: "Europe/Andorra",onNull: '$obj.obj.obj.str'} }],59275] } } } } } },iso8601: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: new Date("2018-09-06T09:10:10.735Z"),onNull: { $arrayElemAt: [[{ $trim: {input: { $toLower: '$obj.obj.obj.str' },chars: "synthesizing"} },"Administrator lavender",{ $rtrim: { input: "Group Agent Savings Account" } }],61098] }} } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Ball ubiquitous",19,19] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "focus group Tuvalu Togo",chars: { $substrBytes: ["Soap Future Sports",20,3] }} }, _id: 0}}],

        [{$project: {a: { $second: { $dateToParts: {date: { $minute: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-05T20:32:37.899Z",format: "%Y-%%-%U-%z-%L",onNull: { $ltrim: { input: "Games Burundi Markets" } }} } } },timezone: "Pacific/Majuro",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrCP: ['$obj.str',5,14] } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],[{ $toString: { $dayOfWeek: { $dayOfWeek: { $toDate: { $filter: {input: ['$obj.obj.str',"Baht South Georgia and the South Sandwich Islands"],as: 'ara',cond: true} } } } } },"Mouse"],['$num'],[5995,84828]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$str',8,17] }],37947] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

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
