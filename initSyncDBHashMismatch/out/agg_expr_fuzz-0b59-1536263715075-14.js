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
        return coll.insert({_id: 8756,str: "Home Loan Account Bermuda Borders",num: 26604,date: new Date("2018-09-06T10:14:11.875Z"),array: [new Date("2018-09-06T06:14:31.414Z"),79286,97778,"Licensed","relationships Saint Helena Pound Refined",[new Date("2018-09-05T23:06:10.354Z"),16404,{_id: 8757,str: "Buckinghamshire Seamless",num: 28835,date: new Date("2018-09-06T07:19:47.143Z"),obj: {_id: 8758,str: "real-time Estonia",num: 96057,date: new Date("2018-09-06T15:12:30.767Z"),array: [],obj: {}}},"Internal Berkshire Tunisian Dinar"],[],"maroon",new Date("2018-09-05T23:17:20.924Z"),new Date("2018-09-06T12:34:15.488Z"),90870,"Product"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8759,str: "Colombian Peso Unidad de Valor Real architectures networks",num: 55817,date: new Date("2018-09-05T22:28:33.299Z"),array: [new Date("2018-09-06T05:31:09.267Z"),"digital",[],"needs-based Incredible Frozen Chips",92100,new Date("2018-09-06T01:42:59.631Z"),{_id: 8760,str: "Accountability policy",date: new Date("2018-09-06T02:26:23.860Z"),array: [],obj: {}},"Licensed","withdrawal e-tailers",74204,new Date("2018-09-06T03:46:15.911Z"),98147,12610],obj: { _id: 8761 }});
    },

    function(coll) {
        return coll.insert({_id: 8762,num: 84501,date: new Date("2018-09-06T16:30:31.836Z"),array: [76578,99451,"Rhode Island",{_id: 8763,str: "deposit Assurance",num: 45820,date: new Date("2018-09-06T08:33:59.209Z"),array: [],obj: {}},[new Date("2018-09-06T15:28:30.945Z")],"Handmade Awesome Cameroon",new Date("2018-09-06T08:04:53.170Z"),29304,new Date("2018-09-06T15:22:44.196Z"),"Steel",["Lebanon"],{_id: 8764,str: "Mews Specialist",date: new Date("2018-09-06T03:37:04.228Z"),array: [],obj: {_id: 8765,str: "Salad red",num: 84984,obj: {_id: 8766,str: "Gorgeous",date: new Date("2018-09-05T23:16:25.469Z"),array: []}}}]});
    },

    function(coll) {
        return coll.insert({_id: 8767,str: "navigate maroon",num: 84007,date: new Date("2018-09-05T21:11:24.191Z"),array: ["maximize",[],"SMTP",1497,"Intelligent Legacy Sports",72253,56412,22208,new Date("2018-09-06T00:56:12.146Z"),new Date("2018-09-06T15:17:40.473Z"),new Date("2018-09-06T16:33:44.631Z"),new Date("2018-09-06T03:12:26.084Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8768,str: "hard drive Organized Hat",num: 6494,date: new Date("2018-09-06T05:46:06.724Z"),array: [85146,new Date("2018-09-05T23:27:30.429Z"),94663,new Date("2018-09-06T02:37:41.098Z"),"SMS Fresh invoice",97204,"scale Licensed",52788,[],"Books bus",[new Date("2018-09-06T08:54:40.574Z"),new Date("2018-09-05T21:02:19.061Z"),new Date("2018-09-06T10:32:06.795Z")]],obj: {_id: 8769,str: "Practical Cotton Fish",num: 54923,array: [new Date("2018-09-06T04:00:05.489Z"),34483,"District"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8770,str: "Product Bike",num: 56850,date: new Date("2018-09-06T10:38:19.310Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8771,str: "bandwidth cross-media synthesizing",num: 25502,date: new Date("2018-09-06T12:03:25.643Z"),array: [new Date("2018-09-06T06:31:13.194Z"),25757,new Date("2018-09-06T05:57:39.492Z"),"Incredible Frozen Salad client-driven Engineer",15044,new Date("2018-09-06T19:05:38.124Z"),17173,"Handmade Granite Soap","optical",{_id: 8772,str: "redundant",num: 78788,date: new Date("2018-09-05T21:27:21.759Z"),array: [],obj: {}},"Shoes solid state Cambridgeshire",[6796,45210,new Date("2018-09-06T04:06:26.174Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 8773,str: "connecting Coordinator Human",num: 71044,date: new Date("2018-09-06T14:10:19.875Z"),array: [new Date("2018-09-06T17:36:10.710Z"),"Generic Berkshire override",new Date("2018-09-06T15:48:25.160Z"),57106,[],53390,"Summit Direct Avon","distributed redundant",new Date("2018-09-06T14:39:18.417Z"),{_id: 8774,str: "Incredible needs-based",num: 18340,array: [new Date("2018-09-06T01:13:35.174Z")]},82396],obj: {_id: 8775,str: "copy Cliffs",num: 66482,date: new Date("2018-09-06T09:55:15.814Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8776,num: 45204,date: new Date("2018-09-06T18:38:09.078Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 8777,str: "Licensed Checking Account",array: [34209,[],58361,new Date("2018-09-06T11:39:55.777Z"),{_id: 8778,num: 25774,date: new Date("2018-09-06T14:40:25.347Z"),array: ["e-business Personal Loan Account","Louisiana visionary","Gorgeous portal"],obj: {}},new Date("2018-09-06T04:43:29.158Z"),new Date("2018-09-05T23:26:22.252Z"),new Date("2018-09-06T16:48:55.277Z"),new Date("2018-09-06T02:12:50.661Z"),39215,{_id: 8779,str: "deposit analyzer",num: 63067,array: [],obj: {_id: 8780,str: "Jewelery leading edge",num: 19309,date: new Date("2018-09-06T17:18:11.338Z"),array: ["Manors",[83096,["Credit Card Account Saint Helena",18810,[],[]]]],obj: {_id: 8781,num: 88646,date: new Date("2018-09-06T17:07:28.960Z"),obj: {_id: 8782,str: "innovative exuding",array: [],obj: {_id: 8783,num: 88823,date: new Date("2018-09-06T02:10:31.977Z"),obj: {}}}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 8784,str: "B2C",num: 76419,date: new Date("2018-09-06T13:09:32.169Z"),array: ["override synthesize turquoise",["Buckinghamshire Common"],61258,new Date("2018-09-06T05:28:14.529Z"),new Date("2018-09-06T13:08:46.251Z"),{_id: 8785,str: "turquoise high-level deposit",num: 23039,date: new Date("2018-09-06T16:44:51.130Z"),array: [],obj: {}},1885,{_id: 8786,str: "Ville",num: 69773,date: new Date("2018-09-06T12:39:37.521Z"),array: [new Date("2018-09-05T22:41:58.247Z"),new Date("2018-09-06T09:52:34.661Z"),"digital Chips Computer"],obj: {}},{_id: 8787,num: 36315,array: []},11303,32240],obj: {_id: 8788,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8789,str: "Buckinghamshire Bike reinvent",num: 14872,date: new Date("2018-09-05T20:11:47.555Z"),array: [],obj: {_id: 8790,date: new Date("2018-09-06T13:35:52.774Z"),array: [[],64178,92659,"Nebraska","quantifying",new Date("2018-09-05T22:25:16.100Z"),new Date("2018-09-06T06:45:02.931Z"),[{_id: 8791,str: "Hawaii Re-engineered Central",num: 74329,array: [19113,new Date("2018-09-06T14:12:57.939Z"),[{_id: 8792,str: "sensor Bacon Tokelau",num: 53706,date: new Date("2018-09-05T23:01:03.324Z"),obj: {}}],37404,new Date("2018-09-05T23:55:41.674Z"),59010]}],57989],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8793,str: "Shirt cutting-edge 1080p",num: 49142,date: new Date("2018-09-06T06:22:56.380Z"),array: [],obj: {_id: 8794,str: "Pakistan proactive Mouse",num: 79794,date: new Date("2018-09-06T16:54:51.765Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8795,str: "Seamless Jewelery",num: 95390,date: new Date("2018-09-06T19:24:01.951Z"),array: [new Date("2018-09-06T19:31:41.135Z"),[],new Date("2018-09-06T14:19:59.345Z"),"eyeballs",1338,"optical cross-media",{_id: 8796,str: "Avon Optimized Unbranded",num: 95181,date: new Date("2018-09-05T22:05:14.580Z"),array: [],obj: {}},45779,new Date("2018-09-06T07:35:20.330Z"),70755,{_id: 8797,str: "Sri Lanka convergence Auto Loan Account",num: 42582,array: [8148,["Berkshire Refined Plastic Towels"],new Date("2018-09-05T20:59:46.444Z"),new Date("2018-09-06T01:24:59.653Z"),{_id: 8798,array: [],obj: {_id: 8799,str: "collaborative Progressive",num: 34150,date: new Date("2018-09-05T20:41:56.786Z"),obj: {}}}]},[]]});
    },

    function(coll) {
        return coll.insert({_id: 8800,str: "Compatible cohesive",num: 76542,date: new Date("2018-09-06T17:18:45.513Z"),array: [83407,new Date("2018-09-06T08:46:42.666Z"),"Planner Handcrafted Optional",17759,[],45037,{_id: 8801,str: "Response Administrator Concrete",num: 56889,date: new Date("2018-09-06T12:15:45.087Z"),array: [new Date("2018-09-06T15:12:09.388Z"),"repurpose multi-byte client-driven","Universal wireless",{_id: 8802,str: "content-based Gorgeous Corporate",num: 18989,obj: {}},[]],obj: {_id: 8803,str: "Belize indigo auxiliary",num: 45101,date: new Date("2018-09-06T07:09:25.977Z"),array: [],obj: {_id: 8804,str: "Concrete Senior withdrawal",date: new Date("2018-09-06T14:36:26.336Z"),array: [new Date("2018-09-06T18:49:57.955Z"),new Date("2018-09-06T14:05:44.255Z"),54446,new Date("2018-09-06T03:23:43.430Z"),42345],obj: {}}}},77726]});
    },

    function(coll) {
        return coll.insert({_id: 8805,str: "Fresh",num: 93861,date: new Date("2018-09-06T00:06:22.451Z"),array: [],obj: {_id: 8806,str: "robust Specialist Frozen",num: 93928,date: new Date("2018-09-06T19:46:02.225Z"),array: ["Greens Pizza","benchmark Assistant",79517,86894,32870,new Date("2018-09-05T20:02:51.699Z"),[new Date("2018-09-06T16:55:12.350Z"),new Date("2018-09-06T01:06:38.027Z"),"HDD",new Date("2018-09-06T02:17:15.675Z")],"Avon",{_id: 8807,num: 79060,date: new Date("2018-09-06T18:18:11.721Z"),array: [],obj: {}},{_id: 8808,str: "Mobility revolutionary system",obj: {_id: 8809,str: "Egypt red New Taiwan Dollar",date: new Date("2018-09-05T20:42:15.625Z"),obj: {}}},new Date("2018-09-05T21:15:15.061Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 8810,str: "XSS paradigm",date: new Date("2018-09-06T08:19:38.266Z"),array: [79342,new Date("2018-09-06T13:38:32.241Z"),["Colorado Fantastic Rubber Table mission-critical"],new Date("2018-09-05T22:54:16.290Z"),29963,"Investment Account overriding",{_id: 8811,str: "Keyboard",num: 79094,date: new Date("2018-09-06T00:41:20.722Z"),array: [],obj: {_id: 8812,num: 41438,date: new Date("2018-09-06T16:01:14.751Z"),array: [],obj: {_id: 8813,str: "Upgradable value-added",num: 45325,date: new Date("2018-09-06T03:38:06.259Z"),array: [],obj: {}}}},28468,"Avon Avon",new Date("2018-09-05T23:46:17.790Z"),new Date("2018-09-06T11:18:36.274Z"),"deliverables Assistant deposit",["turn-key logistical",new Date("2018-09-05T22:38:44.165Z"),84253],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8814,str: "Tactics Kwanza Montana",num: 54700,date: new Date("2018-09-06T08:37:15.109Z"),array: [],obj: {_id: 8815,num: 40526,array: ["Avon Investment Account parse",56756,"Investment Account generate",93050,18387,new Date("2018-09-05T23:28:51.776Z"),new Date("2018-09-05T23:25:10.855Z"),new Date("2018-09-06T05:10:38.563Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8816,str: "deposit",num: 11763,date: new Date("2018-09-06T09:34:42.538Z"),array: [new Date("2018-09-06T00:11:32.377Z"),{_id: 8817,num: 14134,date: new Date("2018-09-06T06:57:44.676Z"),obj: {_id: 8818,str: "Grove Cotton calculate",num: 7022,date: new Date("2018-09-06T17:44:07.110Z"),array: ["ivory Hollow innovative",17930,21735],obj: {}}},[],new Date("2018-09-06T14:39:22.800Z"),65809,"Home Loan Account New Hampshire",5060,{_id: 8819,str: "Nevada",num: 28470,date: new Date("2018-09-06T17:26:04.917Z"),obj: {}},"Serbia web-enabled 24/7",23113],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8820,str: "CFA Franc BCEAO COM Pizza",num: 92962,date: new Date("2018-09-06T09:40:52.356Z"),array: [new Date("2018-09-06T16:40:03.545Z"),48989,"SDD Plastic",new Date("2018-09-06T13:21:53.759Z"),"synthesize alarm",47926,[],"Technician",new Date("2018-09-06T08:46:42.540Z"),"Accountability Health",{_id: 8821,num: 20653,date: new Date("2018-09-06T13:57:33.677Z"),array: ["Soap matrix Cotton",{_id: 8822,str: "tan Versatile",num: 72205,date: new Date("2018-09-06T08:00:11.810Z")}],obj: {_id: 8823,str: "eyeballs",num: 18059,date: new Date("2018-09-05T22:44:26.941Z"),array: []}},[new Date("2018-09-06T18:13:41.259Z")],new Date("2018-09-06T09:47:00.999Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8824,str: "Sierra Leone interactive tangible",num: 32050,date: new Date("2018-09-06T03:44:41.502Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8825,str: "Shoes ivory quantify",num: 5462,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8826,str: "Bermuda",num: 61728,date: new Date("2018-09-06T18:29:56.517Z"),array: [{_id: 8827,num: 21776,date: new Date("2018-09-06T17:46:19.377Z"),obj: {}},new Date("2018-09-06T07:27:11.805Z"),"transmit",[],35854,new Date("2018-09-06T04:09:04.347Z"),{_id: 8828,str: "Bahraini Dinar",date: new Date("2018-09-06T00:41:28.693Z"),array: [],obj: {}},"core Keys Personal Loan Account",6345,98878],obj: {_id: 8829,str: "Compatible",num: 86451,date: new Date("2018-09-06T05:05:31.322Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8830,str: "Global",num: 99618,date: new Date("2018-09-06T01:38:33.675Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8831,str: "e-markets Cambridgeshire",num: 97387,date: new Date("2018-09-06T15:28:06.408Z"),array: [],obj: {_id: 8832,str: "ADP Brazilian Real",date: new Date("2018-09-06T19:03:39.592Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8833,str: "Isle of Man Savings Account Orchestrator",num: 15193,date: new Date("2018-09-06T10:52:37.985Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8834,str: "online",num: 36827,date: new Date("2018-09-05T20:36:09.173Z"),array: [],obj: {_id: 8835,str: "Granite",num: 50204,date: new Date("2018-09-06T05:54:04.241Z")}});
    },

    function(coll) {
        return coll.insert({_id: 8836,str: "bypass collaborative",num: 3881,date: new Date("2018-09-06T08:17:36.262Z"),array: ["out-of-the-box bypass Bacon",46353,new Date("2018-09-05T21:13:54.151Z"),new Date("2018-09-06T10:20:53.083Z"),63068,new Date("2018-09-06T04:42:54.310Z"),5790,"FTP",{_id: 8837,date: new Date("2018-09-06T01:59:46.168Z"),array: ["Optimization e-commerce Lebanon"],obj: {_id: 8838,str: "Creative composite Bedfordshire",num: 56390,date: new Date("2018-09-06T04:55:02.012Z"),obj: {}}},{_id: 8839,str: "Investment Account 24 hour",num: 87328,date: new Date("2018-09-06T17:22:20.325Z"),array: [],obj: {_id: 8840,str: "Checking Account Hollow Handcrafted Steel Computer",obj: {_id: 8841,str: "solid state Beauty quantifying",num: 48058,date: new Date("2018-09-05T22:00:47.617Z"),array: []}}},[],86553]});
    },

    function(coll) {
        return coll.insert({_id: 8842,str: "United Kingdom Hat visionary",date: new Date("2018-09-06T04:26:44.512Z"),obj: {_id: 8843,str: "PNG",num: 7367,date: new Date("2018-09-06T08:46:24.946Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8844,str: "Gourde US Dollar Forward",num: 43906,date: new Date("2018-09-05T22:21:37.795Z"),array: [],obj: {_id: 8845,str: "turn-key Ranch hybrid",num: 37283,date: new Date("2018-09-06T07:12:00.672Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8846,str: "deposit",num: 19183,date: new Date("2018-09-05T21:44:02.799Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8847,str: "white Savings Account Incredible",num: 36632,date: new Date("2018-09-06T02:54:05.154Z"),obj: {_id: 8848,str: "lime cutting-edge",num: 37064,date: new Date("2018-09-06T06:47:37.509Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 8849,str: "Salad Rubber",num: 82496,date: new Date("2018-09-06T07:34:37.897Z"),array: [],obj: {_id: 8850,str: "Chicken",num: 80329,date: new Date("2018-09-06T03:27:52.149Z"),array: [new Date("2018-09-05T23:54:33.351Z"),73960,11387,{_id: 8851,str: "Networked Surinam Dollar drive",date: new Date("2018-09-06T05:09:36.286Z"),array: [],obj: {}},"Cayman Islands Dollar Web engage",new Date("2018-09-06T16:45:19.350Z"),"Jewelery scalable multi-tasking","Nebraska Walk Small Steel Chair",new Date("2018-09-05T23:11:40.451Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 8852,str: "Baby",num: 29418,date: new Date("2018-09-06T11:34:08.074Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8853,str: "Granite Utah web services",num: 91855,date: new Date("2018-09-06T13:51:36.294Z"),obj: {_id: 8854,str: "Buckinghamshire Toys",num: 95705,date: new Date("2018-09-06T08:25:05.581Z"),array: [[5315,new Date("2018-09-06T07:19:14.475Z"),"syndicate","Mouse"],new Date("2018-09-05T22:57:27.517Z"),66624,new Date("2018-09-06T05:42:11.193Z"),21138,"Producer Credit Card Account synthesizing",20751,["Rubber leading-edge",new Date("2018-09-06T09:49:06.896Z"),{_id: 8855,str: "hybrid",num: 37722,array: [],obj: {}}],{_id: 8856,str: "Sausages hub",date: new Date("2018-09-06T05:11:24.133Z")}],obj: {_id: 8857,array: [{_id: 8858,str: "mobile",num: 56409,array: []},"Keyboard Usability Investor","Illinois circuit Ethiopian Birr",10198],obj: {_id: 8859,num: 73205,date: new Date("2018-09-06T16:29:29.901Z"),array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 8860,num: 18620,date: new Date("2018-09-06T16:38:24.206Z"),array: [],obj: {_id: 8861,str: "Rubber",num: 58648,array: [new Date("2018-09-06T03:18:30.884Z"),["invoice",new Date("2018-09-06T05:42:35.590Z"),11961,"withdrawal monetize"],{_id: 8862,str: "Centralized",date: new Date("2018-09-06T00:24:30.783Z"),obj: {_id: 8863,date: new Date("2018-09-06T02:13:55.962Z"),array: [],obj: {}}},4069,new Date("2018-09-06T09:04:58.296Z"),"deposit Customer",14760,{_id: 8864,num: 42630,array: ["attitude-oriented Borders Frozen",[83775,39309,[],new Date("2018-09-06T16:57:09.184Z")]],obj: {}},64137,{_id: 8865,str: "PNG",num: 50592,date: new Date("2018-09-06T00:10:18.145Z")},"Unbranded"]}});
    },

    function(coll) {
        return coll.insert({_id: 8866,str: "Markets quantify",num: 94207,date: new Date("2018-09-06T13:06:11.269Z"),array: ["payment Personal Loan Account virtual",67563,new Date("2018-09-05T21:10:55.752Z"),10636,37409,["cross-platform",new Date("2018-09-06T18:16:58.742Z"),{_id: 8867,str: "International Berkshire Planner",num: 77220,date: new Date("2018-09-05T22:48:01.290Z"),array: [[],[]],obj: {_id: 8868,str: "RAM",num: 57529,date: new Date("2018-09-06T19:51:38.940Z"),obj: {}}}],{_id: 8869,str: "e-services explicit",num: 69954,date: new Date("2018-09-05T20:23:50.179Z"),array: [{_id: 8870,num: 77732,obj: {}},new Date("2018-09-05T21:00:40.851Z")],obj: {_id: 8871,str: "South Africa bricks-and-clicks",date: new Date("2018-09-06T12:35:39.599Z"),array: []}},"ubiquitous Awesome bypassing",new Date("2018-09-06T16:07:39.332Z"),[57356],98879]});
    },

    function(coll) {
        return coll.insert({_id: 8872,str: "invoice",num: 59672,date: new Date("2018-09-06T01:16:49.552Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8873,str: "transition Uganda Shilling",num: 10552,array: [new Date("2018-09-06T19:03:15.939Z"),34590,70911,66387,new Date("2018-09-06T02:40:48.715Z"),"Marketing SMTP","back-end",new Date("2018-09-06T18:41:52.846Z"),[],"firewall",[new Date("2018-09-06T04:44:03.755Z"),10807],new Date("2018-09-05T23:21:02.137Z")],obj: {_id: 8874,num: 35445,date: new Date("2018-09-06T00:47:51.827Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8875,str: "Car Auto Loan Account",num: 10243,date: new Date("2018-09-06T06:09:29.810Z"),array: [38950,"Supervisor Internal",new Date("2018-09-06T09:40:03.428Z"),"deposit Avon",{_id: 8876,str: "solid state Baby",array: [],obj: {_id: 8877,str: "Licensed Frozen Shoes black strategize",num: 88145,array: []}},new Date("2018-09-06T13:25:50.219Z"),new Date("2018-09-06T00:19:11.338Z"),{_id: 8878,num: 17679,date: new Date("2018-09-06T05:18:56.401Z"),array: [56798,[],"Plaza teal UAE Dirham","Small"],obj: {}},17247],obj: {_id: 8879,str: "Product",num: 594,date: new Date("2018-09-05T21:51:59.572Z"),array: [22937,[new Date("2018-09-06T18:57:21.894Z"),{_id: 8880,str: "Global",num: 11642,date: new Date("2018-09-06T01:29:22.723Z"),array: []},[69368],"Cambridgeshire generate"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8881,str: "extranet",num: 77523,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8882,str: "Bermudian Dollar (customarily known as Bermuda Dollar) deposit Manager",num: 12307,date: new Date("2018-09-06T11:23:19.490Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8883,num: 67320,date: new Date("2018-09-06T02:40:22.572Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8884,str: "Surinam Dollar Palestinian Territory",num: 13480,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8885,str: "web services",num: 35005,date: new Date("2018-09-06T18:46:32.495Z"),array: [],obj: {_id: 8886,str: "Cotton",array: [73221,29181,"world-class Pakistan customized",new Date("2018-09-06T09:40:20.896Z"),new Date("2018-09-06T04:07:18.766Z"),44631,85524,new Date("2018-09-06T04:58:47.069Z"),{_id: 8887,num: 96326,date: new Date("2018-09-06T06:04:38.834Z"),array: [{_id: 8888,num: 52050,date: new Date("2018-09-06T16:13:21.911Z")},[{_id: 8889,str: "Small Soft Salad Rustic",num: 36368,date: new Date("2018-09-05T22:48:06.400Z"),array: [new Date("2018-09-06T06:02:23.584Z")],obj: {_id: 8890,str: "Baby",num: 4981,array: [],obj: {}}},"Lodge sensor indexing"]]},new Date("2018-09-05T21:13:08.495Z"),{_id: 8891,str: "parsing",num: 2335,date: new Date("2018-09-06T18:02:42.693Z"),array: [],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8892,str: "Finland Cotton input",num: 53352,date: new Date("2018-09-06T11:56:28.917Z"),array: [],obj: {_id: 8893,str: "navigating connect Toys",num: 37222,date: new Date("2018-09-06T01:53:26.259Z"),array: ["Assistant generating navigate",new Date("2018-09-06T03:37:48.208Z"),new Date("2018-09-06T16:34:20.882Z"),60381,30434,new Date("2018-09-06T06:39:47.084Z"),"Estonia",[],{_id: 8894,str: "Chips",num: 29356,date: new Date("2018-09-06T09:57:34.226Z"),array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8895,str: "Platinum dynamic Fresh",num: 40529,array: ["Outdoors indexing",79735,[],new Date("2018-09-06T12:51:50.525Z"),new Date("2018-09-06T00:17:39.801Z"),2915,"Lilangeni Naira B2B"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8896,str: "application 1080p",num: 25841,date: new Date("2018-09-06T18:37:07.914Z"),array: [],obj: {_id: 8897,str: "Peru Personal Loan Account TCP",num: 8719,date: new Date("2018-09-05T23:54:22.445Z")}});
    },

    function(coll) {
        return coll.insert({_id: 8898,str: "Usability",num: 53594,date: new Date("2018-09-06T05:09:09.518Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8899,str: "digital",num: 46818,date: new Date("2018-09-06T11:52:56.480Z"),array: [{_id: 8900,str: "Stream local",num: 91661,date: new Date("2018-09-06T08:32:50.678Z"),obj: {_id: 8901,str: "Berkshire e-business Grenada",date: new Date("2018-09-06T00:36:15.641Z"),array: [],obj: {_id: 8902,num: 17683,date: new Date("2018-09-06T19:09:03.426Z"),array: [],obj: {_id: 8903,num: 77853,date: new Date("2018-09-06T19:51:28.271Z"),array: [40668,"Central Massachusetts"],obj: {_id: 8904,str: "Technician South Carolina Stravenue",num: 64229,date: new Date("2018-09-06T13:23:16.002Z"),array: []}}}}},"revolutionize compressing Response",new Date("2018-09-05T20:00:28.834Z"),[98356,"Ball Netherlands Antilles",29684,80586,new Date("2018-09-06T16:40:18.936Z")],[],{_id: 8905,str: "Cambridgeshire vortals reinvent"},new Date("2018-09-06T05:46:08.264Z"),{_id: 8906,str: "Minnesota Ergonomic Rubber Salad",array: ["Officer SQL","synthesize Croatia Automotive"],obj: {}},39424,new Date("2018-09-06T11:22:18.402Z")]});
    },

    function(coll) {
        return coll.insert({_id: 8907,str: "Illinois",num: 51046,date: new Date("2018-09-06T08:50:59.492Z"),array: [[],27456,"Awesome Cambridgeshire",{_id: 8908,date: new Date("2018-09-06T18:16:13.865Z"),obj: {_id: 8909,str: "Auto Loan Account",num: 21498,date: new Date("2018-09-06T16:36:16.887Z"),array: [],obj: {_id: 8910,str: "Grass-roots payment Money Market Account",date: new Date("2018-09-05T23:50:43.074Z"),array: [new Date("2018-09-05T20:22:37.430Z"),new Date("2018-09-06T05:18:49.171Z")],obj: {}}}},new Date("2018-09-06T01:39:29.105Z"),22205,"Dynamic Hat Cambridgeshire","aggregate Principal generating",[],28754,[],"quantify Cambridgeshire withdrawal"]});
    },

    function(coll) {
        return coll.insert({_id: 8911,str: "Mexican Peso Mexican Unidad de Inversion (UDI)",num: 48819,date: new Date("2018-09-06T19:53:16.320Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8912,num: 61186,date: new Date("2018-09-06T12:30:25.447Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8913,str: "Executive",date: new Date("2018-09-06T00:06:53.341Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 8914,str: "copy Garden",date: new Date("2018-09-06T07:47:00.245Z"),array: [],obj: {_id: 8915,str: "Computer Unbranded Frozen Car International",num: 42025,date: new Date("2018-09-06T16:41:48.699Z"),array: [new Date("2018-09-06T19:18:37.479Z"),8940,"Corporate Senior",38726,26219,[new Date("2018-09-06T02:11:59.477Z"),"salmon"],new Date("2018-09-06T12:13:28.892Z"),{_id: 8916,num: 83458,date: new Date("2018-09-06T04:49:13.133Z"),array: ["Yen programming","Assurance"],obj: {}},new Date("2018-09-05T21:44:48.818Z"),"Sports hub RAM",30814,new Date("2018-09-06T04:51:21.657Z"),"Crossing hybrid Ramp"]}});
    },

    function(coll) {
        return coll.insert({_id: 8917,str: "Walks Outdoors",num: 8843,date: new Date("2018-09-06T19:22:58.464Z"),array: [],obj: {_id: 8918,str: "application enterprise",num: 6304,array: ["IB Alabama Guernsey",{_id: 8919,str: "Checking Account customized",num: 75556,date: new Date("2018-09-05T22:00:54.915Z")},86322,new Date("2018-09-06T16:04:57.261Z"),"Applications Home Loan Account",new Date("2018-09-05T23:59:46.166Z"),[45501,"facilitate",new Date("2018-09-06T17:47:40.969Z"),{_id: 8920,date: new Date("2018-09-06T18:27:12.219Z"),array: [],obj: {}}],84595,"Islands Customizable matrix","policy Directives open-source",{_id: 8921,str: "virtual utilize Malagasy Ariary",obj: {}}],obj: {_id: 8922,str: "data-warehouse multi-byte",num: 47630,date: new Date("2018-09-06T17:08:12.638Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 8923,str: "virtual out-of-the-box Integration",num: 8913,date: new Date("2018-09-06T15:49:54.963Z"),array: ["user-centric e-business Sleek Cotton Pants",59355,new Date("2018-09-06T14:55:42.626Z"),3188,new Date("2018-09-06T12:47:26.128Z"),new Date("2018-09-06T09:35:56.650Z"),[],"Venezuela Handmade",{_id: 8924,str: "Solomon Islands Dollar hierarchy AI",num: 49199,date: new Date("2018-09-06T05:02:09.840Z"),obj: {}},"Orchestrator",24025,new Date("2018-09-06T07:31:49.590Z")],obj: {_id: 8925,str: "port Stream",num: 17301,array: [12407,{_id: 8926,str: "Realigned",num: 13962,date: new Date("2018-09-06T15:24:21.246Z"),array: [],obj: {_id: 8927,str: "frictionless",num: 46973,date: new Date("2018-09-06T00:26:36.939Z"),array: []}}],obj: {_id: 8928,num: 46103,date: new Date("2018-09-06T13:00:30.507Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 8929,str: "infomediaries Home Loan Account",num: 21196,date: new Date("2018-09-06T09:14:08.266Z"),array: [],obj: {_id: 8930,str: "Soft Nebraska",num: 56886,date: new Date("2018-09-06T07:24:59.783Z"),array: ["Home",new Date("2018-09-06T11:58:12.786Z"),new Date("2018-09-06T11:22:59.285Z"),"Soap",20268,[{_id: 8931,str: "rich Future didactic",date: new Date("2018-09-06T10:50:58.962Z"),array: [],obj: {}}],15144,new Date("2018-09-06T19:21:30.474Z"),47416,"Nevada emulation",[]],obj: {_id: 8932,num: 25399,array: [{_id: 8933,str: "calculating",num: 45847},"Cross-group"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8934,str: "Home Loan Account protocol",num: 38600,date: new Date("2018-09-06T14:05:17.174Z"),array: ["Jewelery","multi-byte",new Date("2018-09-06T11:48:36.281Z"),91942,{_id: 8935,str: "Handcrafted Sleek Wooden Bike",num: 76747,date: new Date("2018-09-06T05:43:17.467Z"),array: [],obj: {_id: 8936,str: "secured line evolve EXE",num: 75347,date: new Date("2018-09-05T20:25:18.744Z"),array: [[],["Quality",new Date("2018-09-06T18:04:30.712Z")],new Date("2018-09-06T03:02:18.984Z"),new Date("2018-09-06T00:42:28.612Z"),81504],obj: {}}},{_id: 8937,str: "Avon Handcrafted syndicate",obj: {}},18551],obj: {_id: 8938,num: 670,date: new Date("2018-09-06T15:04:26.822Z"),obj: {_id: 8939,num: 15392,date: new Date("2018-09-06T13:45:22.604Z"),array: ["Mountains index Analyst","Exclusive Accountability",new Date("2018-09-06T01:18:22.114Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 8940,str: "navigate",num: 27667,date: new Date("2018-09-05T20:59:26.899Z"),array: ["distributed Auto Loan Account SMS",new Date("2018-09-06T11:01:15.022Z"),76491,34975,"Tasty generate",{_id: 8941,str: "New Hampshire Wisconsin",num: 58798,date: new Date("2018-09-06T09:39:25.932Z"),array: [90232,[],"Nevada"],obj: {}},new Date("2018-09-06T18:25:33.722Z"),new Date("2018-09-06T08:36:25.657Z"),{_id: 8942,str: "hack connecting Frozen",num: 47917,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 8943,str: "Global synthesize fault-tolerant",num: 59691,date: new Date("2018-09-06T03:17:06.052Z"),array: [25842,new Date("2018-09-06T09:04:23.548Z"),"fuchsia","transitional withdrawal",new Date("2018-09-06T18:28:38.004Z"),"deposit",86551,[],93611,{_id: 8944,str: "info-mediaries",num: 75158,array: [],obj: {}},new Date("2018-09-06T13:18:43.548Z")],obj: {_id: 8945,str: "Analyst",num: 68142,array: [new Date("2018-09-06T00:48:41.575Z")],obj: {_id: 8946,str: "Home Loan Account applications PCI",num: 94545,date: new Date("2018-09-06T04:46:56.582Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 8947,str: "markets contingency Practical Concrete Towels",num: 6221,date: new Date("2018-09-06T08:22:30.263Z"),array: [8977,"bypassing PNG",85491,"Quality generating Lari",new Date("2018-09-06T04:30:54.359Z"),"Handcrafted Wooden Chips transform"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8948,str: "pixel Movies",num: 60535,date: new Date("2018-09-06T16:28:19.260Z"),array: [new Date("2018-09-06T08:40:25.051Z"),20284,"Bedfordshire Luxembourg",new Date("2018-09-06T11:16:51.053Z"),"National Horizontal CSS","Group efficient","New Jersey",28097]});
    },

    function(coll) {
        return coll.insert({_id: 8949,num: 95408,date: new Date("2018-09-06T06:07:13.510Z"),array: [],obj: {_id: 8950,str: "plug-and-play frictionless",num: 37270,date: new Date("2018-09-06T16:28:15.066Z"),array: [new Date("2018-09-06T03:35:44.722Z"),new Date("2018-09-06T14:47:11.972Z"),26867,[],"Solutions navigate product",new Date("2018-09-06T12:51:29.997Z"),70365],obj: {_id: 8951,str: "feed Kwanza",num: 23799,date: new Date("2018-09-06T02:47:19.541Z"),array: ["Fantastic monitor solution",[85426],67892,18826,"Radial",73802,"programming"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 8952,str: "composite Health",num: 2191,date: new Date("2018-09-05T22:19:44.402Z"),array: [],obj: {_id: 8953,num: 22633,date: new Date("2018-09-06T11:29:09.757Z"),array: ["deposit standardization","orange Avon Personal Loan Account",49947,new Date("2018-09-06T04:18:40.558Z"),90739,"Pants 3rd generation reboot","Key FTP",[new Date("2018-09-06T02:43:46.022Z"),45031],{_id: 8954,str: "compressing Technician",date: new Date("2018-09-06T17:03:13.759Z"),array: [],obj: {}},{_id: 8955,num: 61943,date: new Date("2018-09-05T20:25:02.093Z"),array: [],obj: {_id: 8956,str: "Quality input Auto Loan Account",num: 88519,date: new Date("2018-09-06T16:48:50.205Z"),obj: {_id: 8957,str: "Cambridgeshire Practical",date: new Date("2018-09-06T05:04:46.052Z")}}},new Date("2018-09-06T18:41:59.538Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 8958,str: "Springs",num: 86759,date: new Date("2018-09-06T00:32:34.931Z"),array: [new Date("2018-09-06T10:35:15.607Z"),"Sleek Outdoors",{_id: 8959,str: "AI Ergonomic Borders",num: 3039,date: new Date("2018-09-06T18:02:33.809Z"),obj: {}},68176,{_id: 8960,str: "Fords",num: 65247,date: new Date("2018-09-05T23:29:15.075Z"),array: [],obj: {_id: 8961,str: "Lead parallelism Multi-layered",num: 40639,date: new Date("2018-09-05T23:21:35.683Z"),array: [76010,"Sausages Compatible drive",new Date("2018-09-06T19:25:52.048Z")],obj: {}}},new Date("2018-09-05T23:05:20.398Z"),new Date("2018-09-06T14:39:26.640Z"),85142,new Date("2018-09-06T07:43:09.445Z"),"Steel District deliverables"],obj: {_id: 8962,num: 961,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8963,str: "Practical Awesome Frozen Mouse Montana",num: 53396,date: new Date("2018-09-05T23:09:47.414Z"),obj: {_id: 8964,str: "Ergonomic Soft Keyboard quantifying systematic",num: 43784,date: new Date("2018-09-06T11:08:54.537Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8965,str: "redundant Gorgeous Refined Concrete Table",num: 69736,date: new Date("2018-09-06T15:22:54.243Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8966,str: "Accountability Gorgeous Wooden Chicken azure",num: 66500,date: new Date("2018-09-06T04:00:41.905Z"),obj: {_id: 8967,str: "Trafficway compressing bottom-line",num: 28396,date: new Date("2018-09-05T23:01:10.610Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8968,str: "Developer",date: new Date("2018-09-06T08:36:08.184Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8969,str: "Denar Corporate Sports",num: 15846,date: new Date("2018-09-06T18:29:44.170Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 8970,str: "Personal Loan Account solution Orchestrator",num: 78895,date: new Date("2018-09-06T15:35:07.371Z"),array: [],obj: {_id: 8971,str: "fresh-thinking bricks-and-clicks hacking",num: 77048,date: new Date("2018-09-06T12:20:55.693Z"),array: [68051,new Date("2018-09-06T09:50:54.571Z"),{_id: 8972,str: "CSS Customer Buckinghamshire",num: 56426,date: new Date("2018-09-06T13:11:29.193Z"),array: [{_id: 8973,num: 63586,date: new Date("2018-09-06T16:45:59.880Z"),array: ["Industrial"],obj: {_id: 8974,str: "Licensed Plastic Mouse EXE",array: [new Date("2018-09-06T09:09:47.232Z")],obj: {}}},8850,"Infrastructure","feed black Trafficway",{_id: 8975,str: "methodologies Agent Home Loan Account",obj: {}},[]]},new Date("2018-09-06T12:28:43.249Z"),new Date("2018-09-06T14:31:57.476Z"),[],1271,new Date("2018-09-06T12:38:19.986Z"),75172,9135]}});
    },

    function(coll) {
        return coll.insert({_id: 8976,str: "Borders",num: 72653,date: new Date("2018-09-06T19:12:14.518Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8977,str: "Global Refined",num: 6981,date: new Date("2018-09-06T12:23:09.131Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8978,str: "infrastructures Executive",num: 36002,date: new Date("2018-09-06T08:43:04.394Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8979,str: "Credit Card Account",num: 90274,date: new Date("2018-09-06T15:37:08.917Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8980,str: "invoice Corners",num: 17072,array: []});
    },

    function(coll) {
        return coll.insert({_id: 8981,str: "Toys",date: new Date("2018-09-06T06:37:02.699Z"),array: ["RAM","Soft","Legacy Zambian Kwacha online",30762,new Date("2018-09-06T06:39:33.381Z"),new Date("2018-09-06T10:23:40.127Z"),new Date("2018-09-06T17:02:28.992Z"),{_id: 8982,str: "Officer",num: 4367,array: [],obj: {}},{_id: 8983,num: 69222,date: new Date("2018-09-06T02:59:43.694Z"),array: [81687],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 8984,str: "interface Grocery EXE",num: 40729,date: new Date("2018-09-06T08:18:30.190Z"),array: [34997,new Date("2018-09-06T04:33:18.700Z"),[new Date("2018-09-05T21:02:38.447Z"),"Cambridgeshire alarm silver",[88092]],"Anguilla Handmade Wooden Chair",new Date("2018-09-06T12:56:16.361Z"),{_id: 8985,str: "Internal payment",date: new Date("2018-09-06T08:40:24.451Z"),array: [],obj: {}},"National green",81937,{_id: 8986,num: 13831,date: new Date("2018-09-06T13:38:48.407Z"),array: [],obj: {}},new Date("2018-09-06T04:26:32.380Z"),30795,38008],obj: {_id: 8987,str: "turquoise",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 8988,str: "Bahraini Dinar",num: 76980,date: new Date("2018-09-06T19:30:59.488Z"),array: [2406,31458,new Date("2018-09-06T18:14:36.657Z"),"Monitored","interfaces National",new Date("2018-09-06T13:27:26.970Z"),[],"Analyst Rustic",new Date("2018-09-06T11:53:53.914Z"),new Date("2018-09-06T17:15:51.047Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8989,str: "deposit Computer",num: 80540,date: new Date("2018-09-06T16:20:11.436Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8990,str: "UAE Dirham",num: 44729,date: new Date("2018-09-06T02:52:18.354Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 8991,str: "envisioneer one-to-one system engine",num: 66410,date: new Date("2018-09-06T11:10:38.010Z"),array: [{_id: 8992,str: "Clothing Wallis and Futuna Customer",num: 42549,date: new Date("2018-09-06T01:53:27.118Z"),array: [new Date("2018-09-06T02:52:26.454Z"),"Cambridgeshire Rhode Island models",5416,"Bike structure"],obj: {}},36688,new Date("2018-09-06T09:27:49.721Z"),58584,25503,{_id: 8993,str: "azure",num: 7657,date: new Date("2018-09-06T05:00:27.084Z"),obj: {_id: 8994,array: []}},{_id: 8995,str: "Ethiopia",num: 31509,array: ["enhance",new Date("2018-09-06T00:00:32.957Z"),24250,[]],obj: {_id: 8996,date: new Date("2018-09-06T01:32:52.541Z"),obj: {_id: 8997,num: 58540,date: new Date("2018-09-06T06:40:19.452Z"),array: [],obj: {}}}},29787,{_id: 8998,str: "program Specialist",array: ["Bolivar Fuerte",[]],obj: {}}],obj: {_id: 8999,str: "robust",num: 71280,date: new Date("2018-09-06T18:32:40.710Z")}});
    },

    function(coll) {
        return coll.insert({_id: 9000,str: "Shoal Front-line programming",num: 7558,date: new Date("2018-09-06T15:41:21.809Z"),array: [99786,[],"cultivate Auto Loan Account",new Date("2018-09-06T04:33:13.608Z"),["FTP Steel",71615,new Date("2018-09-06T16:15:24.772Z"),{_id: 9001,str: "compressing",num: 59689,date: new Date("2018-09-06T07:35:28.887Z"),array: [],obj: {}},"Awesome Plastic Chicken",[44286]],36411,"metrics",new Date("2018-09-05T21:39:41.456Z"),"Zimbabwe Dollar Pre-emptive Assistant",12226],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9002,str: "Mobility Car",num: 38267,date: new Date("2018-09-06T16:47:51.723Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9003,num: 30864,date: new Date("2018-09-06T19:47:02.273Z"),array: [],obj: {_id: 9004,str: "Research protocol",date: new Date("2018-09-05T21:28:59.965Z"),array: [53845,39222,[],"connect Practical Cotton","Buckinghamshire index Distributed",{_id: 9005,str: "Mississippi",num: 79352,date: new Date("2018-09-06T14:48:25.624Z"),obj: {}},new Date("2018-09-05T20:36:18.060Z"),new Date("2018-09-06T05:48:59.720Z")],obj: {_id: 9006,date: new Date("2018-09-06T14:28:38.684Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 9007,str: "Internal",num: 63386,date: new Date("2018-09-06T05:03:45.706Z"),array: ["Ergonomic Granite Chair",43602,new Date("2018-09-05T20:02:23.507Z"),21050,"Branding Gorgeous Metal Mouse Paradigm",new Date("2018-09-06T12:27:05.707Z"),{_id: 9008,str: "North Korean Won",num: 65306,date: new Date("2018-09-05T23:41:10.717Z")},new Date("2018-09-06T06:07:37.689Z"),"Human Alabama Fresh",{_id: 9009,date: new Date("2018-09-06T18:36:02.022Z"),array: [],obj: {_id: 9010,date: new Date("2018-09-06T07:40:40.112Z"),array: [],obj: {}}},[62589,new Date("2018-09-06T02:49:24.840Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9011,str: "Falls Azerbaijanian Manat",num: 45836,date: new Date("2018-09-06T15:36:19.847Z"),array: [new Date("2018-09-06T02:36:26.681Z"),32424,new Date("2018-09-06T11:46:12.586Z"),new Date("2018-09-06T15:27:42.308Z"),"Sausages Music Facilitator",{_id: 9012,str: "Metrics Romania Indian Rupee Ngultrum",num: 4632,date: new Date("2018-09-06T13:14:23.655Z"),obj: {}},"approach USB payment",new Date("2018-09-06T11:14:47.429Z"),72209,[]],obj: {_id: 9013,str: "Incredible Metal Shoes Pizza Awesome",date: new Date("2018-09-06T01:25:58.360Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9014,num: 12634,date: new Date("2018-09-05T22:52:21.224Z"),array: [],obj: {_id: 9015,str: "Dynamic Vanuatu Multi-lateral",num: 33648,array: ["Burundi Franc Gardens",new Date("2018-09-06T18:34:51.916Z"),26242,new Date("2018-09-06T05:59:43.607Z"),{_id: 9016,num: 75185,date: new Date("2018-09-06T18:36:39.155Z"),array: [new Date("2018-09-06T04:03:10.163Z")],obj: {_id: 9017,str: "Internal digital",num: 94395,date: new Date("2018-09-06T06:00:20.056Z"),array: [],obj: {}}},1261,[],"envisioneer Costa Rican Colon",{_id: 9018,str: "Optimization Credit Card Account",date: new Date("2018-09-06T19:43:21.702Z")},[420,"lime solutions directional"],{_id: 9019,str: "input Books",num: 65370,date: new Date("2018-09-06T11:45:14.297Z"),array: [56613,13735,87594,"Health Indiana"],obj: {}},[],{_id: 9020,str: "Credit Card Account Wooden Associate",num: 81309}],obj: {_id: 9021,array: [new Date("2018-09-06T13:27:23.144Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9022,str: "TCP Ridge hacking",num: 7185,date: new Date("2018-09-06T15:49:48.511Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9023,str: "blue Engineer",num: 32179,date: new Date("2018-09-06T05:00:59.760Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9024,str: "invoice",num: 349,date: new Date("2018-09-06T15:30:47.581Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9025,str: "withdrawal Estonia Secured",date: new Date("2018-09-06T05:55:45.429Z"),array: [34361,66133,new Date("2018-09-06T15:33:15.703Z"),"grid-enabled Handcrafted Home Loan Account","digital Car",30870,[],new Date("2018-09-06T18:47:27.342Z"),52097,new Date("2018-09-06T01:41:26.921Z"),"array"]});
    },

    function(coll) {
        return coll.insert({_id: 9026,str: "Delaware",num: 17868,date: new Date("2018-09-05T19:57:40.234Z"),array: [],obj: {_id: 9027,str: "deposit connect software",num: 48246,date: new Date("2018-09-06T04:12:09.536Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9028,str: "Granite Liaison Factors",num: 55135,date: new Date("2018-09-06T15:44:41.374Z"),array: [],obj: {_id: 9029,date: new Date("2018-09-05T23:38:02.895Z"),array: [],obj: {_id: 9030,str: "calculating Computers",num: 10976,date: new Date("2018-09-06T14:05:25.793Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 9031,str: "info-mediaries Borders compress",num: 63657,date: new Date("2018-09-06T16:56:50.750Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9032,str: "Vermont Central",num: 66915,date: new Date("2018-09-05T21:43:53.868Z"),array: ["Central RSS Practical",[],"Secured Practical Cotton Ball parsing",new Date("2018-09-05T22:07:31.666Z"),new Date("2018-09-06T16:12:01.731Z"),72873,8556,{_id: 9033,str: "client-driven Chips",num: 48498,date: new Date("2018-09-06T18:30:13.037Z"),array: []},{_id: 9034,str: "even-keeled",num: 6510,date: new Date("2018-09-06T15:39:58.925Z"),array: [[]],obj: {_id: 9035,str: "metrics 4th generation",num: 40586,date: new Date("2018-09-05T22:56:20.902Z"),obj: {}}},45524,"Personal Loan Account back-end",new Date("2018-09-06T15:38:22.863Z"),59489],obj: {_id: 9036,num: 13521}});
    },

    function(coll) {
        return coll.insert({_id: 9037,str: "Personal Loan Account invoice Group",num: 85841,date: new Date("2018-09-06T17:25:43.475Z"),obj: {_id: 9038,str: "Licensed",num: 9686,date: new Date("2018-09-06T05:50:32.936Z"),array: [{_id: 9039,str: "open system",num: 31617,array: [],obj: {_id: 9040,date: new Date("2018-09-06T15:03:04.349Z"),array: [67572],obj: {}}},78675,[],new Date("2018-09-06T10:50:24.291Z"),"executive Markets Tasty Metal Cheese",61775,"Personal Loan Account definition","Chief Human Web","Hryvnia Berkshire",{_id: 9041,num: 42395,date: new Date("2018-09-05T23:36:28.897Z"),array: [46862],obj: {}},{_id: 9042,num: 37542,array: [],obj: {}},new Date("2018-09-06T14:30:17.426Z"),new Date("2018-09-06T05:00:32.559Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9043,str: "withdrawal killer Liaison",num: 71729,date: new Date("2018-09-06T03:33:53.218Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9044,str: "backing up",num: 29135,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9045,str: "leading-edge Ecuador Awesome",num: 52433,date: new Date("2018-09-06T03:02:22.721Z"),array: [{_id: 9046,str: "leverage deposit Romania",num: 71776,date: new Date("2018-09-05T20:18:54.494Z"),array: ["Sudanese Pound Boliviano Mvdol Corporate","connect",23302],obj: {}},26780,[],new Date("2018-09-06T02:15:53.183Z"),"Manager",89222,26007,new Date("2018-09-06T05:02:38.049Z"),"Upgradable",new Date("2018-09-06T00:25:57.934Z"),{_id: 9047,str: "compress bus Granite",num: 81602,date: new Date("2018-09-06T01:25:46.856Z"),obj: {_id: 9048,str: "Track",num: 46182,date: new Date("2018-09-06T09:12:45.857Z"),array: [[],{_id: 9049,date: new Date("2018-09-06T08:57:36.599Z")}],obj: {_id: 9050,array: [],obj: {_id: 9051,str: "Metal Nepal wireless",num: 27651,array: [],obj: {}}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9052,str: "Dynamic synergies Moldova",num: 52939,date: new Date("2018-09-06T17:05:13.142Z"),array: [],obj: {_id: 9053,str: "bluetooth parse",date: new Date("2018-09-06T17:55:37.238Z"),array: [new Date("2018-09-06T06:23:01.501Z"),new Date("2018-09-06T13:33:53.805Z"),"Home Loan Account Handcrafted",new Date("2018-09-05T21:04:58.614Z"),33475,"Fresh Games","withdrawal",[{_id: 9054,num: 23092,array: [],obj: {}},87602,{_id: 9055,date: new Date("2018-09-06T09:31:18.077Z")},74128,"Macao purple 1080p",new Date("2018-09-06T19:50:07.664Z"),55690]]}});
    },

    function(coll) {
        return coll.insert({_id: 9056,str: "Auto Loan Account Specialist",num: 8131,date: new Date("2018-09-06T06:57:35.490Z"),array: [],obj: {_id: 9057,str: "Analyst",num: 63449,date: new Date("2018-09-05T23:34:20.403Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9058,num: 81839,date: new Date("2018-09-06T01:12:09.150Z"),array: ["Quality mission-critical Metal",new Date("2018-09-06T04:59:24.968Z"),new Date("2018-09-06T04:30:21.395Z"),[],60844,"virtual",12585,new Date("2018-09-06T07:02:56.538Z"),16564,"Fish",71701],obj: {_id: 9059,str: "Stand-alone",num: 50868,date: new Date("2018-09-06T09:51:31.218Z"),array: [],obj: {_id: 9060,str: "yellow",num: 36201,date: new Date("2018-09-06T04:22:45.870Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 9061,str: "Thailand",num: 45394,date: new Date("2018-09-06T00:04:49.036Z"),array: [{_id: 9062,str: "Clothing methodology withdrawal",num: 9681,date: new Date("2018-09-06T03:37:46.068Z"),array: [],obj: {}},3213,"cross-platform Fantastic killer",new Date("2018-09-06T15:56:21.029Z"),96182,65424,"Keyboard Berkshire",new Date("2018-09-06T11:01:22.643Z"),["software invoice programming"],18429,new Date("2018-09-06T09:37:04.769Z"),{_id: 9063,str: "backing up",num: 40771,date: new Date("2018-09-05T22:44:37.896Z"),obj: {}}],obj: {_id: 9064,num: 26559,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9065,str: "multi-byte generating",num: 5708,date: new Date("2018-09-05T21:51:51.275Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9066,str: "invoice Bedfordshire",num: 75928,date: new Date("2018-09-05T21:21:27.366Z"),array: [new Date("2018-09-06T05:31:11.787Z"),27315,41922,82837,{_id: 9067,str: "Cameroon",num: 83778,date: new Date("2018-09-06T11:22:18.026Z"),array: []},"Intelligent Business-focused Coordinator","Practical Rubber Ball turquoise Handcrafted Plastic Shoes","object-oriented Cotton"],obj: {_id: 9068,str: "Salad",num: 94015,date: new Date("2018-09-06T13:27:51.853Z"),array: [new Date("2018-09-06T14:34:55.508Z"),[],"SQL copy",new Date("2018-09-05T21:58:49.932Z"),new Date("2018-09-06T13:20:56.014Z"),1524],obj: {_id: 9069,str: "Bedfordshire",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9070,str: "architectures copy",num: 5399,date: new Date("2018-09-06T08:16:22.791Z"),obj: {_id: 9071,str: "lavender Yuan Renminbi",num: 64133,date: new Date("2018-09-06T13:57:09.852Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9072,str: "calculating",num: 34434,date: new Date("2018-09-06T11:12:12.597Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9073,str: "transform San Marino",num: 15509,date: new Date("2018-09-06T12:34:08.328Z"),array: [37663,{_id: 9074,str: "payment Ball Avon",num: 91139,date: new Date("2018-09-06T14:22:41.036Z"),array: ["Supervisor",new Date("2018-09-06T18:36:39.727Z"),[],52925],obj: {}},22664,28521,new Date("2018-09-06T16:36:46.062Z"),new Date("2018-09-06T15:09:08.505Z"),"Baby multi-byte best-of-breed",new Date("2018-09-06T18:20:55.685Z"),{_id: 9075,num: 21788,date: new Date("2018-09-06T06:23:23.182Z"),array: []},new Date("2018-09-06T01:54:57.231Z"),8595,"optical multi-byte pixel"],obj: {_id: 9076,str: "mobile",num: 11972,date: new Date("2018-09-06T04:14:55.033Z"),array: [{_id: 9077,str: "black",num: 87379,array: [],obj: {_id: 9078,date: new Date("2018-09-06T06:37:17.093Z")}}]}});
    },

    function(coll) {
        return coll.insert({_id: 9079,str: "Stream XML France",num: 97701,date: new Date("2018-09-06T05:02:47.664Z"),array: ["Personal Loan Account back up Investment Account",new Date("2018-09-06T18:03:49.741Z"),new Date("2018-09-06T01:16:05.738Z"),new Date("2018-09-06T14:35:02.761Z"),new Date("2018-09-06T11:32:32.537Z"),47826,"Graphical User Interface","Web Saint Helena Pound",[new Date("2018-09-05T21:26:27.197Z")],39384,33532,"bypassing",{_id: 9080,num: 27904,array: [],obj: {_id: 9081,str: "mint green Intranet",num: 64304,date: new Date("2018-09-06T12:22:07.029Z"),array: [],obj: {_id: 9082,date: new Date("2018-09-06T13:06:36.733Z"),array: [],obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9083,str: "Intelligent Technician transmitting",num: 40047,date: new Date("2018-09-05T21:27:36.123Z"),array: ["Facilitator calculating",[new Date("2018-09-06T00:55:05.577Z"),39549],new Date("2018-09-06T00:12:01.626Z"),"quantifying overriding microchip",new Date("2018-09-06T19:38:15.289Z"),15797,"Intelligent",new Date("2018-09-06T07:04:21.076Z"),"withdrawal multi-byte",25295],obj: {_id: 9084,num: 8675,date: new Date("2018-09-06T08:42:12.134Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9085,num: 69514,date: new Date("2018-09-06T02:29:33.106Z"),array: [new Date("2018-09-06T16:44:46.556Z"),"Ergonomic Soft Mouse Cotton action-items",66111,"Concrete firewall",19454,{_id: 9086,str: "Solutions Wallis and Futuna",num: 47838,date: new Date("2018-09-06T13:22:39.525Z"),array: [],obj: {}},92158,"Computer program",new Date("2018-09-06T02:56:19.637Z"),new Date("2018-09-06T10:13:22.294Z"),[[new Date("2018-09-06T01:13:32.806Z"),"turquoise Bedfordshire Accountability"]],9912],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9087,str: "Clothing engineer",num: 55029,date: new Date("2018-09-06T18:45:36.054Z"),array: [51,new Date("2018-09-06T16:06:00.463Z"),"Brand",51113,new Date("2018-09-06T04:03:06.672Z"),"multi-tasking",37258,[],"models Auto Loan Account",new Date("2018-09-06T06:52:48.649Z"),{_id: 9088,str: "Bouvet Island (Bouvetoya)",num: 21760,date: new Date("2018-09-06T07:52:18.648Z"),array: ["Bedfordshire program Awesome"],obj: {_id: 9089,str: "Avon JSON Bedfordshire",num: 38252,array: [],obj: {}}},new Date("2018-09-06T16:31:17.790Z"),new Date("2018-09-06T03:34:07.273Z")],obj: {_id: 9090,date: new Date("2018-09-06T04:14:31.323Z"),array: [],obj: {_id: 9091,str: "invoice open-source",num: 95935,date: new Date("2018-09-06T01:37:27.691Z"),obj: {_id: 9092,num: 50257,array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 9093,str: "stable Borders THX",num: 9107,date: new Date("2018-09-06T00:47:10.944Z"),array: ["metrics Branding","sticky",24970,38847,new Date("2018-09-06T13:13:22.246Z"),new Date("2018-09-05T23:55:16.877Z"),"Global invoice",18019,48211,["deposit",new Date("2018-09-06T05:55:39.676Z")],21512,{_id: 9094,str: "revolutionary Circle",num: 58818,date: new Date("2018-09-06T12:13:54.265Z"),array: [],obj: {}}],obj: {_id: 9095,str: "haptic",num: 53077,date: new Date("2018-09-06T10:44:16.334Z"),array: [],obj: {_id: 9096,date: new Date("2018-09-06T06:32:19.552Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9097,str: "Stand-alone white",num: 47322,date: new Date("2018-09-06T12:31:13.027Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9098,str: "Officer synthesize",num: 41867,date: new Date("2018-09-05T22:50:58.637Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9099,str: "violet",num: 14283,date: new Date("2018-09-06T15:33:07.489Z"),array: [new Date("2018-09-06T11:10:51.929Z"),new Date("2018-09-06T12:37:31.835Z"),10748,new Date("2018-09-06T19:01:48.344Z"),{_id: 9100,str: "Fresh Soft",num: 99912,date: new Date("2018-09-06T09:23:50.613Z"),array: ["Human Chicken Lane"],obj: {_id: 9101,str: "withdrawal Flat",num: 31199,array: [],obj: {_id: 9102,date: new Date("2018-09-06T04:44:10.614Z"),array: [84163,88569],obj: {}}}},new Date("2018-09-06T18:34:21.155Z"),"dot-com microchip",[],new Date("2018-09-06T01:07:33.445Z"),"microchip Tuvalu",36118,"contingency",37489]});
    },

    function(coll) {
        return coll.insert({_id: 9103,str: "Wisconsin",num: 74787,date: new Date("2018-09-06T16:39:02.524Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9104,str: "payment real-time Mission",num: 13740,date: new Date("2018-09-06T19:16:21.533Z"),array: ["RSS input",86058,97062,"parsing Investment Account Home Loan Account",{_id: 9105,str: "deposit",num: 17883,date: new Date("2018-09-05T22:26:36.231Z"),obj: {_id: 9106,str: "Quality programming",array: []}},new Date("2018-09-06T17:36:38.077Z"),28382,new Date("2018-09-06T13:27:58.456Z"),new Date("2018-09-06T15:56:20.644Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9107,str: "Credit Card Account",num: 1045,date: new Date("2018-09-05T23:58:38.947Z"),array: [58671,"structure",30117,new Date("2018-09-06T00:19:13.477Z"),67296,new Date("2018-09-05T20:37:37.018Z"),"Keyboard sensor",{_id: 9108,str: "platforms User-centric",num: 67395,date: new Date("2018-09-06T07:03:34.693Z"),array: [new Date("2018-09-06T19:37:11.037Z"),"Borders"],obj: {_id: 9109,str: "clicks-and-mortar help-desk transform",num: 25522,date: new Date("2018-09-06T14:31:15.438Z")}},[],new Date("2018-09-06T03:28:18.918Z"),new Date("2018-09-06T06:34:59.901Z"),82357]});
    },

    function(coll) {
        return coll.insert({_id: 9110,str: "International engineer",num: 31436,date: new Date("2018-09-06T17:06:35.239Z"),array: [new Date("2018-09-06T19:42:53.025Z"),64222,{_id: 9111,str: "Product JSON Licensed",date: new Date("2018-09-06T12:41:13.757Z"),array: []},"Usability",new Date("2018-09-06T17:49:40.021Z"),"open-source violet",["Maine","program architectures",[new Date("2018-09-05T20:06:29.480Z")],32292],new Date("2018-09-06T10:50:53.129Z"),new Date("2018-09-06T00:54:39.002Z"),{_id: 9112,str: "Montenegro Iowa Minnesota",num: 19123,array: [52437,"Visionary Street"],obj: {_id: 9113,num: 67919,date: new Date("2018-09-06T00:16:37.175Z"),array: [],obj: {}}},90664],obj: {_id: 9114,str: "US Dollar Ouguiya",date: new Date("2018-09-06T09:55:14.219Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9115,str: "lime HDD",num: 46125,date: new Date("2018-09-06T12:04:14.587Z"),array: [{_id: 9116,str: "Kip next-generation Concrete",num: 80791,date: new Date("2018-09-06T02:56:26.473Z"),array: [new Date("2018-09-05T21:55:27.188Z")],obj: {_id: 9117,obj: {}}},33896,84138,new Date("2018-09-05T23:36:28.132Z"),"Baby",new Date("2018-09-06T12:32:07.545Z"),"deposit Dynamic",new Date("2018-09-05T20:39:03.260Z"),"AGP Buckinghamshire",new Date("2018-09-06T13:46:41.022Z"),{_id: 9118,str: "web-readiness",num: 68044,date: new Date("2018-09-06T03:05:19.815Z"),array: [],obj: {_id: 9119,str: "eyeballs Technician mint green",num: 99718,date: new Date("2018-09-06T14:19:06.711Z")}},[19816],[],46341,96847],obj: {_id: 9120,str: "whiteboard Glens PCI",num: 28011,date: new Date("2018-09-05T20:37:40.487Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9121,str: "Licensed Wooden Chicken Togo navigate",num: 62003,date: new Date("2018-09-06T01:08:53.691Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9122,str: "Money Market Account Metical",num: 10874,array: [],obj: {_id: 9123,str: "Assimilated Concrete orchid",num: 99687,array: ["transmitting Cotton",{_id: 9124,str: "whiteboard Architect",date: new Date("2018-09-06T06:22:00.951Z"),array: [71818,new Date("2018-09-06T12:26:06.454Z"),new Date("2018-09-06T07:43:22.227Z"),3090,new Date("2018-09-06T04:30:04.097Z"),"capacitor",15017,{_id: 9125,str: "Borders hybrid",date: new Date("2018-09-06T18:09:50.812Z")}],obj: {}},new Date("2018-09-06T19:43:08.061Z"),"Checking Account",[85460],[],new Date("2018-09-06T15:58:49.336Z"),"Money Market Account monitoring needs-based"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9126,str: "Danish Krone communities",num: 92536,date: new Date("2018-09-06T15:34:07.820Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9127,str: "Intelligent Concrete Towels enable",date: new Date("2018-09-06T00:15:57.238Z"),array: [30326,"Practical system-worthy Buckinghamshire",[],new Date("2018-09-06T01:44:11.413Z"),{_id: 9128,num: 32740,date: new Date("2018-09-05T21:00:53.104Z"),array: ["Montana purple",93736,[],"parse",new Date("2018-09-05T20:36:03.824Z"),{_id: 9129,str: "Bacon Future eyeballs",num: 51872,date: new Date("2018-09-06T08:03:00.978Z"),array: [],obj: {_id: 9130,num: 60986,date: new Date("2018-09-06T11:19:23.711Z"),obj: {_id: 9131,str: "invoice technologies",num: 20099,array: ["feed",2658]}}}],obj: {}},"teal Bike withdrawal",new Date("2018-09-06T02:41:35.527Z"),76067],obj: {_id: 9132,str: "bandwidth monitor",num: 22667,date: new Date("2018-09-06T15:23:37.291Z"),array: [new Date("2018-09-06T09:53:17.588Z"),"New Hampshire payment virtual"]}});
    },

    function(coll) {
        return coll.insert({_id: 9133,str: "Optimization",num: 6643,date: new Date("2018-09-06T14:03:55.795Z"),array: ["benchmark Tuna context-sensitive",new Date("2018-09-06T13:31:32.914Z"),new Date("2018-09-06T00:11:33.876Z"),[],51536,88676,"compressing",59409,new Date("2018-09-06T06:58:23.278Z"),"transmitting",{_id: 9134,str: "GB",num: 93072,date: new Date("2018-09-05T23:25:30.450Z"),array: [[]],obj: {_id: 9135,num: 85458,date: new Date("2018-09-05T23:41:58.390Z"),array: [],obj: {_id: 9136,str: "SAS holistic",num: 67035,date: new Date("2018-09-06T14:44:05.703Z"),array: [76651,new Date("2018-09-06T07:41:19.298Z"),{_id: 9137,str: "withdrawal Human bricks-and-clicks",obj: {}}],obj: {}}}},new Date("2018-09-06T01:03:55.097Z")]});
    },

    function(coll) {
        return coll.insert({_id: 9138,str: "Michigan indigo",num: 73721,date: new Date("2018-09-06T15:58:26.544Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9139,num: 88313,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9140,str: "Clothing",date: new Date("2018-09-06T15:26:23.774Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9141,str: "Cheese world-class Lead",num: 87997,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9142,str: "maroon Licensed Soft Bike metrics",num: 70253,date: new Date("2018-09-06T08:41:57.431Z"),array: ["pink",new Date("2018-09-06T01:18:47.052Z"),50776,"Bedfordshire architectures","Legacy New Hampshire Legacy","integrated matrices",new Date("2018-09-06T17:00:02.965Z"),new Date("2018-09-06T12:12:27.929Z"),44569,41889,{_id: 9143,str: "Integration Land",num: 95665,array: [],obj: {_id: 9144,date: new Date("2018-09-06T07:01:21.199Z"),obj: {}}},[42976],new Date("2018-09-06T15:03:53.240Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9145,str: "program",num: 83234,date: new Date("2018-09-05T22:03:27.081Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9146,str: "Internal bluetooth magenta",num: 50662,date: new Date("2018-09-05T22:36:47.149Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9147,str: "multi-byte",num: 72335,date: new Date("2018-09-06T11:10:56.595Z"),array: [new Date("2018-09-06T15:51:57.030Z"),"parsing",73089,new Date("2018-09-05T20:52:37.680Z"),67670,56001,"Grocery",new Date("2018-09-06T17:23:14.264Z"),"AI Saint Barthelemy reboot"],obj: {_id: 9148,str: "Plastic Associate",date: new Date("2018-09-06T16:15:02.075Z"),array: ["deposit virtual SCSI",new Date("2018-09-06T08:39:29.286Z"),[{_id: 9149,num: 47371,date: new Date("2018-09-06T08:48:51.076Z"),array: [],obj: {_id: 9150,str: "empowering olive",date: new Date("2018-09-06T05:31:13.645Z"),array: []}}],[87298,10396,{_id: 9151,str: "invoice multi-byte Synergized",array: [],obj: {}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 9152,str: "indexing viral",num: 33579,date: new Date("2018-09-06T06:59:41.463Z"),array: [],obj: {_id: 9153,str: "Orchestrator",num: 35245,date: new Date("2018-09-06T09:04:54.194Z"),array: [new Date("2018-09-06T16:49:31.038Z"),68070,80884,{_id: 9154,str: "Guadeloupe Shoes",num: 7341,date: new Date("2018-09-06T08:10:31.146Z"),array: [],obj: {_id: 9155,str: "Turkmenistan Macedonia",num: 26289,array: [new Date("2018-09-06T01:45:58.150Z"),"Soft Awesome Steel Pizza e-markets"]}},new Date("2018-09-06T15:40:28.114Z"),[],30809,[],"Books digital",{_id: 9156,date: new Date("2018-09-06T14:34:55.158Z")},"Senior Granite",[{_id: 9157,num: 89467,date: new Date("2018-09-05T20:17:20.006Z"),array: [],obj: {}},{_id: 9158,str: "Credit Card Account",obj: {_id: 9159,num: 50245,array: ["deposit",98641],obj: {}}}],new Date("2018-09-06T08:08:21.982Z"),90637]}});
    },

    function(coll) {
        return coll.insert({_id: 9160,str: "Soap Savings Account Assistant",num: 26479,date: new Date("2018-09-06T18:00:45.148Z"),array: [],obj: {_id: 9161,str: "Practical Awesome",num: 99285,date: new Date("2018-09-06T14:06:18.500Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9162,str: "maximize Ball",num: 29042,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9163,str: "Tuna",num: 95183,date: new Date("2018-09-06T12:16:49.544Z"),array: [{_id: 9164,str: "Fundamental compressing Towels",num: 60887,date: new Date("2018-09-06T18:50:29.389Z"),array: [[]],obj: {}},"quantifying fresh-thinking Synchronised",42058,"Arizona back-end",new Date("2018-09-06T11:00:44.333Z"),{_id: 9165,num: 38422,array: [22099],obj: {_id: 9166,str: "Convertible Marks Massachusetts",num: 12913,date: new Date("2018-09-06T03:15:55.217Z"),obj: {_id: 9167,num: 30376,date: new Date("2018-09-06T14:59:22.203Z"),array: []}}},new Date("2018-09-06T13:56:03.867Z"),[],63799,new Date("2018-09-06T04:47:28.438Z"),"e-services",[new Date("2018-09-06T09:12:52.841Z"),{_id: 9168,str: "Argentina",num: 41727,date: new Date("2018-09-06T06:55:12.710Z"),obj: {_id: 9169,str: "Tasty deposit Investment Account",array: []}},"Berkshire Industrial"],92071,[]]});
    },

    function(coll) {
        return coll.insert({_id: 9170,str: "Decentralized backing up Fresh",num: 42425,date: new Date("2018-09-06T18:56:40.849Z"),array: [8922,new Date("2018-09-06T09:25:22.087Z"),80974,new Date("2018-09-06T04:35:03.638Z"),"Associate Bedfordshire Berkshire",[],new Date("2018-09-06T04:47:03.226Z"),16216,{_id: 9171,str: "innovative Baby driver",date: new Date("2018-09-06T19:09:19.867Z"),array: [],obj: {}},"Salad optimize",{_id: 9172,str: "Metal",num: 55625,date: new Date("2018-09-06T10:39:16.842Z"),array: []},80378],obj: {_id: 9173,str: "Orchestrator generating Towels",num: 29046,date: new Date("2018-09-05T22:46:42.283Z")}});
    },

    function(coll) {
        return coll.insert({_id: 9174,str: "Tuna Investment Account Books",num: 88354,date: new Date("2018-09-06T16:32:08.317Z"),obj: {_id: 9175,str: "Home Loan Account cross-platform architect",num: 7752,date: new Date("2018-09-06T09:35:01.220Z"),array: ["Table cyan",34551,"discrete Credit Card Account",89460,{_id: 9176,str: "plum Chair",num: 66338,array: [new Date("2018-09-06T00:11:10.203Z"),new Date("2018-09-06T14:58:51.421Z")],obj: {}},"navigating indexing",[],77540,"Cyprus bypass iterate",new Date("2018-09-06T19:45:57.335Z")],obj: {_id: 9177,str: "THX leverage",date: new Date("2018-09-06T08:54:35.683Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 9178,str: "feed",num: 75156,date: new Date("2018-09-06T11:39:02.844Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9179,str: "Computer Sharable",num: 13978,date: new Date("2018-09-06T05:12:14.513Z"),array: [new Date("2018-09-06T05:13:04.819Z"),"pixel",new Date("2018-09-06T14:30:36.901Z"),[],"open-source payment sensor",4142,79417,[[58517,"Ohio"],50112],new Date("2018-09-06T15:57:18.304Z"),new Date("2018-09-06T19:51:42.007Z"),"deposit",{_id: 9180,str: "Buckinghamshire",num: 64574,date: new Date("2018-09-06T11:41:12.549Z"),array: [],obj: {_id: 9181,str: "array",num: 86401,date: new Date("2018-09-06T15:28:51.363Z"),obj: {}}}],obj: {_id: 9182,date: new Date("2018-09-06T12:39:25.415Z"),array: [{_id: 9183,str: "Hat bi-directional",num: 5460,date: new Date("2018-09-06T07:29:23.507Z"),array: [],obj: {}},"Personal Loan Account Industrial"]}});
    },

    function(coll) {
        return coll.insert({_id: 9184,str: "monitor",num: 52622,date: new Date("2018-09-06T09:48:25.682Z"),array: [],obj: {_id: 9185,str: "digital",num: 47240,date: new Date("2018-09-06T08:46:19.527Z"),array: [new Date("2018-09-06T12:20:22.754Z"),25233,new Date("2018-09-06T02:55:19.608Z"),"orchestrate Savings Account efficient",new Date("2018-09-06T09:49:07.620Z"),new Date("2018-09-06T17:43:40.531Z"),"Algeria Money Market Account Manager",10208,73997,97918],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9186,str: "Research",num: 37403,date: new Date("2018-09-06T09:20:00.872Z"),array: [31769,19955,new Date("2018-09-06T18:32:36.649Z"),"cutting-edge ubiquitous",[],"Multi-lateral",new Date("2018-09-05T21:13:21.977Z"),{_id: 9187,num: 50419,date: new Date("2018-09-06T10:26:21.979Z"),array: [{_id: 9188,str: "aggregate Indian Rupee Djibouti",num: 60118,array: ["Agent alliance matrix",71207],obj: {_id: 9189,str: "Chair",date: new Date("2018-09-06T04:00:55.324Z"),array: [],obj: {}}},70158],obj: {}},new Date("2018-09-06T15:10:44.964Z"),"local Beauty"]});
    },

    function(coll) {
        return coll.insert({_id: 9190,str: "Berkshire Sierra Leone International",num: 55073,date: new Date("2018-09-06T14:05:53.371Z"),array: [],obj: {_id: 9191,str: "Tools copying SMS",num: 60182,date: new Date("2018-09-06T12:52:42.538Z"),array: [{_id: 9192,str: "engineer",num: 4774,date: new Date("2018-09-06T08:43:08.778Z"),obj: {}},43294,new Date("2018-09-06T13:50:26.984Z"),7663,"HTTP Berkshire",new Date("2018-09-06T06:02:21.344Z"),83232,["Falkland Islands Pound",new Date("2018-09-06T04:25:53.478Z"),{_id: 9193,str: "Terrace",date: new Date("2018-09-06T15:16:02.850Z"),array: [],obj: {_id: 9194,str: "Niue",num: 51775,date: new Date("2018-09-06T10:22:21.676Z"),array: [],obj: {}}}],85262,"project Michigan","ADP"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9195,str: "Ergonomic invoice hack",num: 51466,date: new Date("2018-09-06T13:07:49.023Z"),array: [],obj: {_id: 9196,str: "extend Valleys",num: 94298,date: new Date("2018-09-06T06:06:32.857Z"),array: [new Date("2018-09-06T16:41:38.921Z"),13098,"evolve",[new Date("2018-09-06T18:13:51.351Z"),58298,{_id: 9197,date: new Date("2018-09-06T13:35:50.459Z"),array: [],obj: {_id: 9198,str: "strategize",num: 87474,date: new Date("2018-09-05T23:18:48.101Z"),obj: {}}},75154,"Generic Avon Brazil",new Date("2018-09-06T05:41:25.029Z"),new Date("2018-09-06T17:15:51.562Z"),["interfaces"]],3661,{_id: 9199,str: "haptic",num: 75011,array: [],obj: {}},new Date("2018-09-06T19:48:06.466Z"),new Date("2018-09-06T15:36:16.113Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9200,str: "Licensed logistical Assimilated",num: 54602,array: [new Date("2018-09-05T20:51:49.168Z"),"withdrawal national","Colorado revolutionize",{_id: 9201,str: "Customer",num: 8079,date: new Date("2018-09-05T23:55:32.505Z"),array: [881,new Date("2018-09-06T07:18:36.745Z"),new Date("2018-09-06T02:34:09.027Z")],obj: {}},new Date("2018-09-06T13:49:31.694Z"),"Home Loan Account",83585,1824,"silver Bedfordshire transmitter"],obj: {_id: 9202,str: "New Mexico",num: 49055,date: new Date("2018-09-05T22:42:41.420Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9203,str: "Internal Generic Cotton Ball Armenian Dram",num: 36392,date: new Date("2018-09-06T08:19:01.416Z"),array: [16027,"bypassing","RAM Plastic",[],"non-volatile Legacy open-source",new Date("2018-09-06T19:04:58.901Z"),"initiatives Cambridgeshire",{_id: 9204,str: "Handcrafted Steel Salad withdrawal engineer",num: 71360,array: [],obj: {_id: 9205,date: new Date("2018-09-05T21:56:48.926Z")}},new Date("2018-09-06T08:40:13.304Z"),"Drive evolve",67017,new Date("2018-09-06T17:53:12.138Z"),{_id: 9206,str: "e-commerce",num: 10567,date: new Date("2018-09-06T02:58:10.352Z"),array: [88560,new Date("2018-09-06T14:32:49.029Z"),90053,"program alarm Incredible"],obj: {_id: 9207,str: "grey West Virginia",num: 57866,date: new Date("2018-09-06T12:10:06.697Z"),array: [48280,[]],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 9208,str: "Rubber Concrete",date: new Date("2018-09-05T19:56:25.923Z"),array: [{_id: 9209,str: "Fresh Oregon",num: 88592,date: new Date("2018-09-06T15:19:21.733Z"),array: [new Date("2018-09-06T13:23:34.021Z"),17861,{_id: 9210,str: "New Mexico rich bypass",date: new Date("2018-09-05T20:56:27.764Z"),obj: {}},new Date("2018-09-06T00:05:04.126Z")],obj: {_id: 9211,array: [],obj: {}}},"JSON","Rustic Metal Cheese payment",[],new Date("2018-09-06T10:57:17.771Z"),11965,44151,new Date("2018-09-06T06:01:10.350Z"),new Date("2018-09-06T12:13:23.350Z")],obj: {_id: 9212,str: "Cambridgeshire Rustic withdrawal",num: 26015,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9213,str: "HDD navigating Checking Account",num: 10543,date: new Date("2018-09-06T08:19:04.460Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9214,str: "Frozen bi-directional",num: 81379,date: new Date("2018-09-06T14:29:31.712Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9215,str: "system",num: 65373,date: new Date("2018-09-06T06:16:55.688Z"),array: [50108,"Shoal",90436,{_id: 9216,str: "deposit",num: 13050,date: new Date("2018-09-06T03:43:34.733Z"),array: [],obj: {_id: 9217,str: "Buckinghamshire",num: 72306,obj: {_id: 9218,str: "syndicate",num: 14245,date: new Date("2018-09-06T03:00:52.507Z"),array: [new Date("2018-09-06T10:06:57.010Z"),new Date("2018-09-06T04:17:52.556Z"),[],[{_id: 9219,num: 36182,date: new Date("2018-09-05T22:54:03.978Z"),obj: {}},new Date("2018-09-06T16:17:40.712Z"),"Rustic Principal driver"]],obj: {_id: 9220,str: "rich National Refined Granite Cheese",array: [26389,96386]}}}},new Date("2018-09-05T20:39:07.388Z"),"purple action-items California",{_id: 9221,array: [new Date("2018-09-06T11:50:13.442Z"),"Solutions flexibility",[[]]]},85449,"Soft"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9222,str: "Identity Bedfordshire",num: 42842,date: new Date("2018-09-06T04:48:27.454Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9223,str: "purple",num: 66408,array: [],obj: {_id: 9224,str: "Shoes Route infrastructures",num: 82321,date: new Date("2018-09-05T22:56:13.204Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9225,str: "transmitting Regional networks",num: 72117,date: new Date("2018-09-06T09:54:55.996Z"),array: [new Date("2018-09-06T02:26:49.537Z"),81406,new Date("2018-09-06T10:12:38.233Z"),[],"haptic Savings Account programming","Mouse",22445,[],{_id: 9226,str: "ability monetize",num: 18252,date: new Date("2018-09-06T14:47:33.867Z"),obj: {_id: 9227,str: "Burundi Franc sky blue",date: new Date("2018-09-05T21:51:13.860Z"),array: []}},{_id: 9228,str: "JSON Extended applications",num: 17855,array: [],obj: {}}],obj: {_id: 9229,num: 20159,date: new Date("2018-09-06T14:11:54.703Z"),array: [{_id: 9230,date: new Date("2018-09-06T05:55:57.053Z"),array: [64088],obj: {_id: 9231,str: "Rustic"}},{_id: 9232,num: 25922,date: new Date("2018-09-06T01:59:30.770Z"),array: [60231,new Date("2018-09-05T21:35:01.438Z"),"Kyrgyz Republic",new Date("2018-09-06T14:32:23.593Z")],obj: {}},"Unbranded Streamlined",[]],obj: {_id: 9233,str: "firmware",num: 34393,date: new Date("2018-09-06T03:57:20.287Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 9234,str: "Representative El Salvador Colon US Dollar AGP",num: 63340,date: new Date("2018-09-06T15:08:10.055Z"),array: ["sexy",[],{_id: 9235,num: 2495,date: new Date("2018-09-05T22:16:16.815Z"),array: [],obj: {}},25124,91739,[new Date("2018-09-06T08:04:02.729Z")],new Date("2018-09-06T04:04:56.295Z"),"Avon",{_id: 9236,str: "Fantastic Soft Fish",date: new Date("2018-09-06T12:40:37.842Z"),array: [],obj: {}},{_id: 9237,str: "Planner",num: 31397,date: new Date("2018-09-05T22:36:08.381Z")},67324,new Date("2018-09-06T10:05:47.942Z"),new Date("2018-09-06T02:33:07.460Z")]});
    },

    function(coll) {
        return coll.insert({_id: 9238,str: "Gorgeous Clothing",num: 6446,date: new Date("2018-09-05T20:53:41.160Z"),array: [],obj: {_id: 9239,num: 1587,date: new Date("2018-09-06T01:58:00.665Z"),array: [["Buckinghamshire Arizona",{_id: 9240,str: "Philippine Peso feed",num: 46582,array: [],obj: {_id: 9241,str: "Research JBOD virtual",num: 58499,obj: {}}},new Date("2018-09-06T01:08:02.486Z"),69091],"calculating",new Date("2018-09-06T02:12:47.189Z"),22135,44853,{_id: 9242,str: "matrix",date: new Date("2018-09-06T14:53:02.914Z"),array: [],obj: {}},"Awesome port users",{_id: 9243,str: "Bermudian Dollar (customarily known as Bermuda Dollar)",date: new Date("2018-09-06T11:16:33.568Z"),array: ["Money Market Account Outdoors",new Date("2018-09-06T03:40:06.218Z"),[new Date("2018-09-06T01:52:59.767Z"),"calculating",40429]],obj: {_id: 9244,num: 87016,date: new Date("2018-09-06T01:10:33.467Z"),obj: {}}},41601,[new Date("2018-09-06T09:57:56.603Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9245,num: 20036,date: new Date("2018-09-06T16:09:17.685Z"),array: [],obj: {_id: 9246,str: "Mouse deposit",num: 3357,date: new Date("2018-09-06T04:47:01.843Z"),array: ["invoice synthesizing","Cove",new Date("2018-09-06T02:41:11.375Z"),new Date("2018-09-06T08:49:19.998Z"),26338,{_id: 9247,str: "Credit Card Account",num: 65735,date: new Date("2018-09-05T21:45:47.544Z"),array: [new Date("2018-09-05T20:26:42.764Z"),92],obj: {}},[],{_id: 9248,str: "Refined Plastic Pizza",array: ["West Virginia Village",73221,2440],obj: {}},new Date("2018-09-06T13:00:40.086Z"),new Date("2018-09-06T17:35:31.600Z"),[],"Bahamian Dollar Loaf"]}});
    },

    function(coll) {
        return coll.insert({_id: 9249,str: "Factors Architect",num: 28565,date: new Date("2018-09-06T13:00:27.080Z"),array: ["navigate transmitting",63807,new Date("2018-09-06T09:00:44.901Z"),50680,"Intelligent",new Date("2018-09-06T14:25:14.094Z"),[],"payment",2006,[new Date("2018-09-05T20:45:32.013Z")],{_id: 9250,str: "Creative deposit redundant",num: 5726,date: new Date("2018-09-06T02:15:54.853Z"),array: [],obj: {_id: 9251,str: "transmitter",num: 10452,date: new Date("2018-09-06T11:03:04.294Z"),array: [{_id: 9252,str: "Functionality",date: new Date("2018-09-06T02:59:47.816Z"),obj: {}},"Multi-lateral North Carolina",18568,new Date("2018-09-06T03:04:36.033Z"),"Gloves yellow Human",26241,27299],obj: {_id: 9253,str: "Buckinghamshire bypassing",num: 62023,date: new Date("2018-09-06T19:14:36.615Z"),array: ["Chips"]}}}]});
    },

    function(coll) {
        return coll.insert({_id: 9254,str: "Data Arizona",num: 33767,date: new Date("2018-09-06T15:50:05.479Z"),array: [51974,"Balanced Tasty Sleek Wooden Chair",[],new Date("2018-09-06T04:07:09.589Z"),"Grass-roots invoice",{_id: 9255,str: "Director Money Market Account",num: 91794,array: []},"pixel Trace",59567,new Date("2018-09-06T04:41:13.549Z"),{_id: 9256,str: "National withdrawal",num: 75436,date: new Date("2018-09-06T00:22:50.258Z"),obj: {_id: 9257,str: "program",date: new Date("2018-09-05T20:36:39.294Z"),obj: {}}},new Date("2018-09-06T18:47:58.997Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9258,num: 47254,date: new Date("2018-09-05T20:52:42.478Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9259,str: "seamless Designer Oklahoma",num: 99265,date: new Date("2018-09-05T22:15:42.802Z"),array: [15940,{_id: 9260,str: "maximize Australia Netherlands Antillian Guilder",num: 79659,date: new Date("2018-09-06T16:04:46.043Z"),array: [],obj: {}},"Global frictionless Markets","Berkshire",new Date("2018-09-06T02:48:56.540Z"),"Sao Tome and Principe Bulgaria",{_id: 9261,date: new Date("2018-09-06T19:39:49.927Z"),array: [],obj: {_id: 9262,str: "Product Steel",num: 92760,date: new Date("2018-09-06T15:18:10.232Z"),array: [69596,new Date("2018-09-06T16:04:55.983Z"),"analyzing harness",new Date("2018-09-06T12:38:28.586Z"),{_id: 9263,num: 92463,date: new Date("2018-09-06T19:54:25.273Z"),obj: {_id: 9264,str: "strategic",date: new Date("2018-09-06T14:22:54.626Z"),obj: {}}},[],new Date("2018-09-06T08:55:34.191Z"),[[],2911]]}}]});
    },

    function(coll) {
        return coll.insert({_id: 9265,str: "Communications EXE Prairie",num: 47057,array: [new Date("2018-09-06T06:20:41.893Z"),42576,"system",new Date("2018-09-05T22:42:14.585Z"),{_id: 9266,num: 49104,date: new Date("2018-09-06T10:24:56.678Z"),array: [],obj: {_id: 9267,str: "Rustic turquoise envisioneer",num: 29458,date: new Date("2018-09-06T06:14:45.957Z"),array: [],obj: {}}},"Legacy deposit Cameroon",89673,"Generic calculate",[new Date("2018-09-06T08:07:07.309Z"),new Date("2018-09-06T10:41:58.933Z"),[new Date("2018-09-06T16:58:32.091Z"),28302,49448,"Polarised Interactions Future"],"Sausages Lari Macao"],{_id: 9268,str: "next-generation CSS invoice",date: new Date("2018-09-05T21:41:48.398Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9269,str: "Buckinghamshire stable Pants",num: 95091,date: new Date("2018-09-06T18:37:05.078Z"),obj: {_id: 9270,str: "Mauritania Strategist",num: 70562,date: new Date("2018-09-06T18:12:55.010Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 9271,str: "SAS",num: 87692,date: new Date("2018-09-05T21:09:03.250Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9272,str: "open-source productize Dalasi",num: 21594,date: new Date("2018-09-06T16:57:55.634Z"),array: [new Date("2018-09-06T05:40:54.658Z"),69083,[],{_id: 9273,num: 88098,date: new Date("2018-09-06T03:49:03.245Z"),array: ["streamline program Garden",new Date("2018-09-06T09:05:20.248Z"),"Industrial"],obj: {}},"well-modulated Cook Islands",new Date("2018-09-06T09:55:13.934Z"),[],new Date("2018-09-06T12:06:26.259Z"),"Administrator Libyan Arab Jamahiriya",64813,15651,new Date("2018-09-06T04:04:56.204Z"),{_id: 9274,str: "River Practical Fresh Fish Research",date: new Date("2018-09-06T06:01:37.997Z"),array: [[]],obj: {_id: 9275,str: "AGP",num: 40017,date: new Date("2018-09-06T09:06:35.028Z"),array: []}},"Avon Pizza Personal Loan Account"],obj: {_id: 9276,str: "synergies Practical",obj: {_id: 9277,num: 87888,date: new Date("2018-09-06T15:32:30.790Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 9278,str: "Business-focused",date: new Date("2018-09-06T01:09:31.496Z"),array: [31602,new Date("2018-09-06T01:30:43.071Z"),41675,{_id: 9279,str: "Tasty Plastic Pants SMTP",num: 94139,date: new Date("2018-09-06T14:31:04.195Z"),array: [],obj: {_id: 9280,str: "matrix",num: 28885,array: ["Guyana Dollar capacitor",["Licensed Fresh Cheese Data",34006],52002,new Date("2018-09-06T11:34:29.871Z"),"transmit North Dakota","Gabon"],obj: {}}},[],31527,new Date("2018-09-06T17:11:02.581Z"),{_id: 9281,str: "1080p magenta Uganda",num: 58063,date: new Date("2018-09-06T15:33:16.464Z"),obj: {}},"Solutions deposit wireless"]});
    },

    function(coll) {
        return coll.insert({_id: 9282,str: "Automotive functionalities Drive",num: 14618,date: new Date("2018-09-06T17:14:24.417Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9283,num: 32253,date: new Date("2018-09-06T00:14:27.104Z"),array: [],obj: {_id: 9284,str: "Front-line",num: 14213,date: new Date("2018-09-06T02:09:46.717Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9285,str: "turquoise Idaho",num: 39758,date: new Date("2018-09-06T08:46:42.677Z"),array: [new Date("2018-09-06T11:09:20.791Z"),59738,77846,8875,"Electronics","Buckinghamshire Credit Card Account","Checking Account",new Date("2018-09-05T23:31:20.247Z"),new Date("2018-09-06T05:20:18.483Z")],obj: {_id: 9286,str: "Gorgeous eco-centric",num: 24439,date: new Date("2018-09-06T04:57:08.530Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9287,str: "Macedonia",num: 42245,date: new Date("2018-09-06T00:53:35.378Z"),array: [],obj: {_id: 9288,str: "transition",num: 50022,date: new Date("2018-09-06T08:03:42.480Z"),array: ["copy maroon wireless","Incredible Burundi Franc","withdrawal Buckinghamshire",89928,30749,["channels",new Date("2018-09-06T13:09:00.434Z"),new Date("2018-09-06T08:40:22.530Z"),64324],{_id: 9289,str: "Borders systems Sausages",date: new Date("2018-09-06T08:12:09.211Z"),array: [new Date("2018-09-06T11:32:48.976Z"),{_id: 9290,str: "infrastructure",num: 95042,date: new Date("2018-09-06T04:53:46.685Z"),obj: {}}],obj: {_id: 9291,num: 92106,date: new Date("2018-09-06T14:15:12.558Z"),array: ["online"],obj: {}}},new Date("2018-09-05T22:11:01.521Z"),67624,{ _id: 9292 }]}});
    },

    function(coll) {
        return coll.insert({_id: 9293,num: 65283,date: new Date("2018-09-06T19:04:56.161Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9294,num: 82402,date: new Date("2018-09-06T17:27:13.123Z"),array: [[],"SSL Avon",6565,new Date("2018-09-06T01:54:20.597Z"),6554,new Date("2018-09-05T19:59:56.680Z"),84806,"Designer Savings Account","Auto Loan Account",{_id: 9295,str: "action-items",array: [],obj: {_id: 9296,str: "Underpass",num: 78999,date: new Date("2018-09-06T10:02:03.099Z"),obj: {}}},91582]});
    },

    function(coll) {
        return coll.insert({_id: 9297,num: 96252,date: new Date("2018-09-05T23:52:15.453Z"),array: [],obj: {_id: 9298,str: "wireless generate e-commerce",num: 12802,date: new Date("2018-09-06T16:09:20.621Z"),array: [],obj: {_id: 9299,str: "Circle Forward",date: new Date("2018-09-06T06:33:27.225Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 9300,str: "cultivate optical installation",date: new Date("2018-09-06T19:39:13.120Z"),array: [new Date("2018-09-06T00:32:24.715Z"),96057,"architecture Credit Card Account firewall",99459,{_id: 9301,str: "AI",num: 80049,date: new Date("2018-09-06T17:54:15.370Z"),array: [[],24556],obj: {_id: 9302,str: "copy Checking Account Djibouti Franc",num: 26851,date: new Date("2018-09-06T08:03:08.566Z"),array: [],obj: {}}},"Granite Virtual GB","Accountability",new Date("2018-09-06T19:32:34.620Z"),91805,new Date("2018-09-06T13:56:38.616Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9303,str: "Incredible Plastic Fish",num: 71246,date: new Date("2018-09-06T07:39:14.166Z"),array: [63938,17335,new Date("2018-09-05T20:10:16.674Z"),"B2C",[],new Date("2018-09-06T05:27:59.930Z"),"Technician Unbranded Wooden Shirt",new Date("2018-09-06T06:42:45.433Z"),"Refined Fresh Computer models Applications",86966,{_id: 9304,str: "Facilitator Taiwan Junctions",num: 52233,array: [],obj: {}},71296],obj: {_id: 9305,str: "Central Enterprise-wide interactive",date: new Date("2018-09-06T14:51:44.291Z"),array: [new Date("2018-09-05T21:48:07.627Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9306,num: 35079,date: new Date("2018-09-06T09:39:19.353Z"),array: ["Buckinghamshire withdrawal",3969,"Home Loan Account eyeballs",new Date("2018-09-06T04:03:51.681Z"),new Date("2018-09-05T23:27:10.716Z"),93023,{_id: 9307,str: "Operations Music",num: 56008,date: new Date("2018-09-06T13:28:07.891Z"),array: []},12996,"Cambridgeshire Barbados Dollar",{_id: 9308,str: "cross-platform",array: [[[new Date("2018-09-06T01:10:30.888Z"),[]],new Date("2018-09-06T04:50:55.315Z")]],obj: {}},38078,[]],obj: {_id: 9309,str: "Human",num: 68898,date: new Date("2018-09-06T15:38:59.050Z"),array: [],obj: {_id: 9310,str: "Engineer payment",date: new Date("2018-09-06T00:41:32.389Z"),array: [],obj: {_id: 9311,array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 9312,str: "multi-byte",num: 46578,date: new Date("2018-09-05T23:28:39.919Z"),array: [],obj: {_id: 9313,str: "productize Avon Czech Koruna",num: 69706,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9314,str: "Montana 24/7 Right-sized",num: 72913,date: new Date("2018-09-06T11:22:43.110Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9315,str: "Buckinghamshire",date: new Date("2018-09-06T03:24:34.840Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9316,str: "system",num: 65897,date: new Date("2018-09-06T17:21:56.389Z"),array: [31620,[],"Paradigm",63551],obj: {_id: 9317,str: "Italy mint green",num: 68079,date: new Date("2018-09-05T21:18:13.499Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9318,str: "platforms Lock",num: 81027,date: new Date("2018-09-06T09:19:36.570Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9319,str: "bifurcated Branding",num: 42830,date: new Date("2018-09-06T12:29:28.200Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9320,str: "Wisconsin Venezuela",num: 46517,date: new Date("2018-09-06T19:40:49.717Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9321,str: "Home Loan Account Grass-roots rich",num: 38732,date: new Date("2018-09-06T17:18:52.491Z"),array: [[],4917,"FTP",new Date("2018-09-06T04:49:46.716Z"),"Ergonomic",new Date("2018-09-06T03:47:51.306Z"),[],{_id: 9322,str: "Cambridgeshire Home Loan Account Savings Account",num: 80767,date: new Date("2018-09-06T11:10:12.974Z"),obj: {}},69211,71940,{_id: 9323,str: "strategic",num: 67053,array: ["SSL","Small white",new Date("2018-09-06T14:26:49.184Z"),94550],obj: {_id: 9324,str: "Legacy Refined Cotton Ball",num: 78890,date: new Date("2018-09-06T16:05:32.279Z"),array: [new Date("2018-09-05T20:09:00.142Z")],obj: {_id: 9325,date: new Date("2018-09-06T13:51:34.410Z"),array: [],obj: {}}}},"Lead empower Lodge",26760]});
    },

    function(coll) {
        return coll.insert({_id: 9326,str: "Bacon",num: 29153,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9327,str: "mission-critical hacking Shoes",num: 48330,date: new Date("2018-09-06T19:21:02.593Z"),array: [95618,"killer lime Riel",new Date("2018-09-06T13:02:24.858Z"),88923,new Date("2018-09-06T19:02:10.283Z"),"backing up",6147,new Date("2018-09-06T00:17:45.710Z"),{_id: 9328,str: "Wallis and Futuna compress",num: 91118,date: new Date("2018-09-06T13:31:49.896Z"),array: ["Beauty"],obj: {_id: 9329,str: "Sleek Metal Chicken Manager",num: 43251,date: new Date("2018-09-06T07:35:19.427Z"),array: ["monitor Centralized calculating",65405,78234,{_id: 9330,str: "Table",num: 43125,obj: {}}],obj: {_id: 9331,str: "International withdrawal Brand",array: []}}},[],new Date("2018-09-06T00:14:04.355Z"),{_id: 9332,date: new Date("2018-09-05T23:42:02.277Z"),obj: {}},{_id: 9333,str: "IB streamline",date: new Date("2018-09-06T09:30:32.225Z"),array: [],obj: {_id: 9334,num: 57370}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9335,str: "Finland Florida",date: new Date("2018-09-06T17:20:33.414Z"),array: [],obj: {_id: 9336,num: 69936,date: new Date("2018-09-06T01:38:27.120Z"),array: [new Date("2018-09-06T09:50:49.982Z"),54654,"Generic Soft Fish New Mexico Usability","Kwanza withdrawal hacking",76329,37485,new Date("2018-09-06T10:20:58.267Z"),new Date("2018-09-06T04:11:54.681Z"),80019,"Investment Account Tonga","Utah modular",[94772,39368],new Date("2018-09-06T04:30:50.412Z"),[]],obj: {_id: 9337,num: 39515,date: new Date("2018-09-06T15:44:15.667Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 9338,str: "Regional niches",date: new Date("2018-09-06T13:33:23.607Z"),array: ["Rhode Island Concrete Avon",new Date("2018-09-06T14:19:06.727Z"),[],[],76752,"haptic",8034,{_id: 9339,str: "focus group",num: 79312,date: new Date("2018-09-05T21:15:43.413Z"),array: ["array transmitting"],obj: {_id: 9340,str: "monetize Strategist Communications",num: 95876,date: new Date("2018-09-05T21:54:20.489Z"),array: [],obj: {}}},{_id: 9341,str: "auxiliary data-warehouse generate",num: 68609,date: new Date("2018-09-05T21:48:01.012Z"),array: ["firmware","West Virginia Tools hack",new Date("2018-09-06T07:39:46.327Z")],obj: {_id: 9342,str: "Meadow deposit",num: 60531,array: []}},332,[],36628,new Date("2018-09-05T20:36:00.487Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9343,str: "Azerbaijanian Manat AGP",num: 53659,date: new Date("2018-09-06T03:52:04.736Z"),array: [],obj: {_id: 9344,str: "Intelligent bandwidth",date: new Date("2018-09-06T02:46:21.042Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9345,num: 79315,date: new Date("2018-09-06T04:26:43.437Z"),array: ["enable",new Date("2018-09-06T15:50:32.473Z"),80580,new Date("2018-09-06T15:39:42.573Z"),{_id: 9346,str: "Product",num: 27531,date: new Date("2018-09-06T05:52:40.468Z"),array: [],obj: {_id: 9347,str: "turquoise",num: 46332,date: new Date("2018-09-06T07:15:46.683Z"),array: ["overriding Myanmar SMS",36497],obj: {}}},35688,"Sleek Plastic Bike Handcrafted Rubber Sausages Practical Soft Pants","protocol Auto Loan Account",[[]],new Date("2018-09-06T10:42:42.787Z"),new Date("2018-09-05T22:27:34.276Z"),"orchid content-based",{_id: 9348,str: "open-source Unbranded",obj: {_id: 9349,num: 71162,date: new Date("2018-09-06T13:23:36.744Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 9350,str: "Gorgeous Soft Chips",num: 97940,date: new Date("2018-09-06T05:07:19.818Z"),array: ["California Ergonomic",[],"Libyan Arab Jamahiriya Liaison Mouse",1949,"generating software Kids",new Date("2018-09-06T18:23:52.830Z"),{_id: 9351,str: "compelling Investment Account",num: 63238,date: new Date("2018-09-06T07:17:30.864Z"),array: [],obj: {_id: 9352,str: "Massachusetts Bedfordshire",array: [85817],obj: {_id: 9353,num: 40006,obj: {}}}},[new Date("2018-09-06T06:03:55.172Z")],53328,{_id: 9354,str: "hard drive haptic",date: new Date("2018-09-06T02:38:59.300Z"),array: [46750,"sensor","payment Metal Bermudian Dollar (customarily known as Bermuda Dollar)"],obj: {_id: 9355,str: "Delaware Wyoming",array: [[],new Date("2018-09-06T01:37:38.762Z")]}},new Date("2018-09-05T22:49:44.022Z"),{_id: 9356,num: 80234,date: new Date("2018-09-06T06:43:38.312Z")},47370,70549],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9357,str: "Rial Omani",num: 3656,date: new Date("2018-09-06T18:21:46.814Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9358,str: "system focus group",num: 47654,array: [[],76684,{_id: 9359,str: "Senior bluetooth Communications",num: 13384,date: new Date("2018-09-06T00:41:30.285Z"),array: [],obj: {_id: 9360,date: new Date("2018-09-06T00:50:01.595Z"),obj: {_id: 9361,str: "bypassing",num: 68333,array: []}}},21283,new Date("2018-09-06T18:55:45.394Z"),{_id: 9362,date: new Date("2018-09-06T05:59:55.560Z"),obj: {}},new Date("2018-09-05T21:16:13.517Z"),"Ergonomic generating","benchmark content",new Date("2018-09-06T09:11:33.681Z"),new Date("2018-09-06T07:46:53.669Z")]});
    },

    function(coll) {
        return coll.insert({_id: 9363,str: "Argentine Peso Licensed Steel Table Bedfordshire",num: 29761,date: new Date("2018-09-06T07:46:25.577Z"),obj: {_id: 9364,str: "Bridge Car Home",num: 13746,date: new Date("2018-09-06T14:01:57.753Z"),array: [{_id: 9365,str: "mobile Global Malagasy Ariary",num: 58429,date: new Date("2018-09-06T00:03:56.708Z"),array: [],obj: {}},"Cambridgeshire",new Date("2018-09-06T12:20:40.220Z"),new Date("2018-09-06T06:00:58.132Z"),{_id: 9366,str: "bluetooth end-to-end",num: 7299,date: new Date("2018-09-06T16:56:52.821Z"),array: [],obj: {_id: 9367,str: "Consultant",array: []}},"virtual","background",95573,81846,"Refined Forward Assurance",new Date("2018-09-05T22:40:50.683Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 9368,str: "Electronics Savings Account",num: 76144,date: new Date("2018-09-06T09:29:59.630Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 9369,num: 42469,date: new Date("2018-09-06T09:31:34.567Z"),array: [[],49696,"Pines Automotive Investor",new Date("2018-09-05T21:12:17.858Z"),{_id: 9370,str: "fuchsia Incredible virtual",num: 91561,date: new Date("2018-09-06T16:22:14.532Z"),array: [new Date("2018-09-06T16:25:04.315Z")],obj: {}},{_id: 9371,str: "application Applications Pants",num: 40885,date: new Date("2018-09-06T14:36:29.926Z"),array: [],obj: {_id: 9372,str: "cross-platform",date: new Date("2018-09-06T05:08:33.634Z"),array: [95180,"Games",7508,new Date("2018-09-06T06:21:36.318Z")]}},{_id: 9373,str: "Technician",num: 95182,date: new Date("2018-09-05T20:40:00.204Z"),obj: {_id: 9374,array: []}},63133,[[]],"Steel Specialist Direct",new Date("2018-09-06T15:39:04.336Z"),[],["Diverse"]],obj: {_id: 9375,str: "Brand",num: 31603}});
    },

    function(coll) {
        return coll.insert({_id: 9376,str: "optimal",num: 61951,date: new Date("2018-09-06T12:44:52.397Z"),array: ["web services Identity",new Date("2018-09-06T02:04:13.337Z"),new Date("2018-09-06T18:43:03.980Z"),81463,{_id: 9377,str: "regional Lead Nepalese Rupee",num: 71714,date: new Date("2018-09-06T11:05:48.044Z"),obj: {}},73646,[],"hacking generating Zloty",44829,new Date("2018-09-06T15:21:56.152Z"),"Specialist",[new Date("2018-09-06T15:44:36.507Z"),"streamline"]],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $map: {input: [{ $substrCP: ["networks",1,20] }],in: 8992} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $toDate: { $arrayElemAt: [['$obj.obj.str',{ $concat: [{ $rtrim: { input: '$obj.obj.str' } },"Money Market Account impactful mesh"] },'$obj.obj.str'],'$num'] } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Sleek synthesize",14,9] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-05T20:28:27.905Z"),format: "%S-%L-%w-%u-%%-%M-%V-%M-%H-%Z-%z-%w",timezone: "Australia/NSW"} },"Analyst neural Central"],26125] }, _id: 0}}],

        [{$project: {a: { $minute: { $millesecond: { $year: { $dateToParts: {date: { $month: { $year: { $dateFromString: {dateString: "2018-09-06T16:01:31.829Z",onError: { $arrayElemAt: [['$obj.obj.str',"Rustic",'$obj.obj.obj.obj.str','$obj.obj.str',{ $dateToString: {date: '$date',format: "%Y-%G-%z-%z-%Z-%V-%H-%S-%L-%U-%Y-%z",timezone: "America/Aruba",onNull: { $substrCP: ['$obj.obj.obj.obj.str',5,0] }} }],93863] }} } } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: "communities incubate" }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num'],cond: { $in: [{ $arrayElemAt: [[{ $dateToString: {date: { $dayOfWeek: { $year: { $dayOfWeek: { $dayOfWeek: { $dateToParts: {date: { $minute: { $millesecond: { $isoDayOfWeek: { $week: { $dateToParts: { date: { $minute: { $month: new Date("2018-09-05T20:16:37.713Z") } } } } } } } },timezone: "America/Argentina/Salta",iso8601: false} } } } } },format: "%j-%%-%m-%S-%L",timezone: "Kwajalein",onNull: "Human"} },'$obj.obj.obj.str'],{ $abs: '$$this' }] },{ $filter: {input: [],as: 'kayden',cond: { $lte: [{ $arrayToObject: [[[],[{ $substr: [{ $substrBytes: [{ $trim: {input: '$obj.str',chars: "solutions"} },14,8] },14,18] },"Somali Shilling Movies",'$$kayden'],[]]] },{ $arrayToObject: [[['$$this'],['$obj.obj.obj.obj.num','$$this']]] }] }} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["invoice Grocery exuding",2,18] }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Hawaii Paradigm",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T10:48:23.963Z"),timezone: "Turkey",onNull: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["transmit Bedfordshire Face to face"],27103] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $map: {input: [10817],in: { $ceil: '$num' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "motivating Movies",v: true}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.obj.num']],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.str',chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $toDate: { $arrayElemAt: [[{ $toString: { $arrayElemAt: [[49975],'$obj.obj.obj.num'] } },'$obj.obj.obj.str'],94578] } },format: "%%-%z-%Z-%Z-%z",timezone: "Europe/Oslo",onNull: "Mandatory Shoes"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],22362] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfMonth: { $isoWeek: { $toDate: { $arrayToObject: [[{k: "compress",v: { $second: { $isoWeekYear: { $month: { $dateToParts: { date: { $week: { $dateToParts: {date: { $dateFromParts: {year: { $sqrt: '$obj.num' },hour: { $add: [29598,3027,{ $pow: ['$obj.obj.num','$obj.obj.obj.obj.num'] }] },minute: 41596,millisecond: { $mod: [30677,'$obj.num'] },timezone: "Pacific/Port_Moresby"} },iso8601: false} } } } } } } }},{k: "Investment Account Indonesia Jewelery",v: false},{k: "grey Pre-emptive Gloves",v: true}]] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: { $substr: ["deposit Dynamic",20,14] } }],3801] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $week: { $dayOfMonth: { $isoWeekYear: { $millesecond: { $year: { $second: { $isoWeekYear: { $dayOfWeek: { $dateFromParts: {year: { $size: [[{ $toString: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.str'],'$obj.obj.obj.obj.num'] } }]] },minute: { $trunc: 96159 },second: { $ln: 44169 },timezone: "Atlantic/Reykjavik"} } } } } } } } } },onNull: "Industrial Oregon"} }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.num','$num','$obj.obj.obj.obj.num'],as: 'rosanna',in: { $cmp: [{ $dateToString: {date: '$$rosanna',format: "%m-%Z-%L-%d-%S-%G",onNull: { $filter: {input: [{ $substrCP: [{ $concat: ["Business-focused asymmetric Refined"] },8,18] }],as: 'rex',cond: { $lt: [{ $arrayElemAt: [['$obj.obj.obj.obj.str'],74130] },{ $arrayElemAt: [[48742],{ $pow: [84447,'$$rosanna'] }] }] }} }} },{ $arrayElemAt: [[],44151] }] }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $cmp: [{ $range: [9,9,19] },{ $arrayElemAt: [['$obj.obj.obj.str',{ $substr: ["compressing",4,12] },'$obj.obj.str'],'$num'] }] },isoWeek: { $size: [[]] },isoDayOfWeek: { $log10: 88840 },hour: { $floor: '$obj.num' },second: { $ceil: '$num' },timezone: "Africa/Juba"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "internet solution Open-source success",v: '$obj.obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $dateToString: {date: new Date("2018-09-06T06:04:47.476Z"),format: "%M-%z-%u-%%-%%-%H-%w-%j-%Y-%Y",timezone: "Etc/GMT-13",onNull: { $ltrim: { input: "Quality Streamlined visualize" } }} },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: [{ $toString: { $arrayElemAt: [[],'$obj.num'] } }] },15,15] }, _id: 0}}],

        [{$project: {a: { $minute: { $second: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T09:57:30.961Z",format: "%H-%Z-%z-%z-%S",onError: { $substr: ["optimizing payment",18,8] },onNull: { $arrayElemAt: [[{ $toLower: '$str' }],'$obj.obj.obj.obj.num'] }} } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeek: { $dayOfYear: { $dayOfMonth: { $toDate: { $arrayElemAt: [['$str',{ $rtrim: { input: '$obj.obj.obj.str' } }],'$obj.obj.num'] } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num','$obj.obj.obj.num','$obj.obj.obj.num'],[88346,{ $add: [] }],["maroon"],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfYear: { $dayOfWeek: { $month: { $minute: { $isoDayOfWeek: { $isoWeek: { $isoWeekYear: { $millesecond: { $second: { $month: { $hour: { $millesecond: { $week: { $dateToParts: {date: { $hour: { $dateFromString: {dateString: "2018-09-06T05:04:28.314Z",format: "%S-%j-%Y-%z-%d",timezone: "Africa/Lagos",onError: { $arrayToObject: [[['$obj.obj.obj.obj.num',{ $cmp: [{ $arrayElemAt: [[{ $substr: [{ $ltrim: { input: '$str' } },18,0] }],'$obj.obj.obj.obj.num'] },{ $isoDayOfWeek: { $month: { $dateToString: { date: new Date("2018-09-06T12:10:06.681Z") } } } }] },25347],[{ $toString: { $substr: ["efficient",9,10] } }],["compress Baby Home Loan Account"]]] },onNull: { $objectToArray: '$obj.obj.obj.obj' }} } },timezone: "Pacific/Apia",iso8601: true} } } } } } } } } } } } } } },format: "%H-%S-%d-%z-%u-%U-%H-%u-%V-%G-%L",onNull: '$obj.obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[37308],[34999]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $hour: { $dateFromString: {dateString: "2018-09-06T01:46:36.503Z",timezone: "Antarctica/DumontDUrville",onNull: { $ltrim: {input: "Portugal Barbados Dollar",chars: { $trim: { input: '$obj.obj.str' } }} }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.str',{ $ltrim: { input: { $toString: { $arrayToObject: [[[],['$obj.obj.obj.obj.str'],["Checking Account",{ $substrBytes: ["Rustic",0,20] }],['$obj.obj.obj.num'],[]]] } } } }]]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $year: { $millesecond: { $toDate: { $map: {input: [35679],as: 'lavonne',in: { $cmp: [{ $arrayToObject: [[['$str',{ $toLower: "forecast" }],[],[],['$$lavonne','$obj.obj.obj.num']]] },{ $arrayToObject: [[[false,70891]]] }] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $ltrim: { input: "e-markets generating" } },14,2] }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromString: {dateString: "2018-09-05T20:20:10.462Z",format: "%H-%U-%H-%U-%u-%Z-%j",onError: { $zip: {inputs: [['$num'],['$obj.obj.obj.str'],[{ $toString: { $arrayElemAt: [[90996,59096,'$obj.obj.num'],'$obj.obj.num'] } },'$str',{ $substrCP: ["Checking Account",8,6] }]],useLongestLength: false} },onNull: { $arrayElemAt: [[],'$obj.obj.num'] }} } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num',96246,'$obj.obj.num'],as: 'hertha',in: { $size: [[{ $toString: { $arrayElemAt: [[],23388] } }]] }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $size: [[{ $indexOfArray: [{ $concatArrays: [[],[{ $concat: ["platforms",{ $substr: ['$obj.obj.obj.str',19,8] },"policy SMTP Ethiopia","Rustic Granite Keyboard Cambridgeshire Metal"] }],[]] },{ $arrayToObject: [[{k: "Tasty redundant",v: false},{k: "implementation Implementation",v: '$obj.obj.obj.num'},{k: "CFP Franc digital",v: false}]] },0,16] },'$obj.obj.obj.num']] },isoWeek: { $pow: [89341,'$obj.obj.obj.obj.num'] },hour: { $subtract: [96711,49641] },timezone: "Pacific/Enderbury"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "pixel Program",v: '$obj.num'},{k: "metrics",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.num',38918,{ $divide: [35735,'$obj.num'] }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "mint green Security Hat",v: false}]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $sqrt: '$obj.num' },isoDayOfWeek: { $ln: 25947 },millisecond: { $multiply: [36568] }} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T21:14:51.759Z",timezone: "Pacific/Chuuk",onError: { $arrayElemAt: [[{ $subtract: ['$obj.obj.obj.obj.num',86028] },'$obj.obj.obj.num','$num'],21213] },onNull: "Rustic"} }, _id: 0}}],

        [{$project: {a: { $year: '$obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $year: { $hour: { $month: { $dayOfYear: { $isoWeek: { $month: { $week: { $dayOfMonth: { $toDate: { $arrayToObject: [[{k: "bypass",v: { $substrBytes: [{ $dateToString: {date: '$date',timezone: "Canada/Mountain"} },14,12] }},{k: "Savings Account User-centric Anguilla",v: new Date("2018-09-06T11:35:51.915Z")},{k: "program Handcrafted",v: new Date("2018-09-06T04:21:09.372Z")},{k: "Concrete Mandatory",v: false}]] } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $dateToString: {date: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $exp: 7840 },isoDayOfWeek: { $add: [] }} } },onNull: "Borders Optimized"} },"Nicaragua"],[{ $ltrim: {input: "Ergonomic Metal Fish",chars: '$str'} }],[],[]],useLongestLength: true,defaults: ["Decentralized Manager Associate",new Date("2018-09-05T20:03:49.662Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: "Integration auxiliary Intelligent Wooden Sausages",chars: "Practical"} },{ $dateToString: {date: '$obj.obj.date',format: "%j-%z-%Y-%M",timezone: "CET"} },'$obj.obj.str'],97296] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num','$obj.obj.obj.num'],["Solutions deliverables"],[],['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Viaduct",'$obj.obj.obj.str','$str',"Concrete Ergonomic Soft Gloves"],in: { $log: [2404,'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrBytes: ["Cotton Personal Loan Account",3,11] }] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toUpper: "Credit Card Account" },"Games Investor"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[39607],['$obj.obj.obj.num'],["Landing"]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Auto Loan Account Minnesota",{ $toString: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] } }],[{ $toUpper: '$obj.obj.obj.str' }],['$obj.obj.num',80260],[],[79669,'$num'],["time-frame invoice",{ $toLower: "Paraguay" }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.num','$obj.obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $indexOfArray: [{ $range: [6,15,6] },{ $filter: {input: [{ $substr: ["yellow",6,14] }],cond: { $lte: [{ $arrayElemAt: [['$obj.obj.obj.str'],'$$this'] },{ $toUpper: { $trim: { input: "Crossroad" } } }] }} },12] },month: { $log: ['$obj.obj.obj.obj.num',49994] },minute: { $exp: 25889 },second: { $log: [{ $mod: ['$obj.obj.obj.obj.num',6447] },{ $trunc: '$obj.obj.num' }] },millisecond: { $log10: 43112 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],[],[{ $ltrim: {input: '$obj.str',chars: "Hawaii"} },{ $toLower: "Strategist" },{ $rtrim: { input: '$obj.obj.str' } }]]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Generic Rubber Gloves" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$num',97976],1649] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: {date: { $isoWeekYear: { $dayOfYear: { $month: { $dayOfYear: { $second: { $minute: { $hour: { $week: { $dayOfWeek: { $millesecond: { $dateFromParts: {year: { $ln: '$obj.num' },month: { $mod: ['$obj.num',75367] },day: { $divide: [23581,{ $trunc: { $sqrt: 74445 } }] },hour: { $exp: { $ceil: 28108 } }} } } } } } } } } } } },iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num',87390,72345,'$num'],in: { $floor: '$obj.obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $zip: {inputs: [['$obj.obj.num'],[],[],['$obj.obj.str',{ $substrBytes: ["Dynamic Towels incubate",5,13] }]],useLongestLength: false,defaults: [{obj: {},str: "Toys"}]} } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $toLower: { $rtrim: {input: '$obj.obj.str',chars: "Electronics Music systems"} } } }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $map: {input: [85991],as: 'joyce',in: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["content-based Progressive",'$obj.obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[6194,{ $trunc: 16507 },77724,'$obj.obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $reverseArray: [['$obj.str']] } }, _id: 0}}],

        [{$project: {a: { $map: {input: [66332],in: { $indexOfArray: [{ $reverseArray: [["reboot Home Loan Account"]] },{ $arrayToObject: [[[{ $size: [['$$this']] },'$$this','$obj.obj.obj.obj.num'],[],['$obj.obj.obj.obj.num'],['$$this',"Iowa"],[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ["lime Games Small"],in: { $abs: 88389 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Kwacha Handmade","Bike Rand Namibia Dollar Steel",{ $toString: { $substrCP: ['$str',12,19] } },{ $substrBytes: ['$str',18,8] }],76319] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[21275],['$obj.obj.str',{ $substrCP: ["Bedfordshire",14,1] }],[]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrBytes: ["navigate Ergonomic Soft Cheese",14,0] } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $hour: { $month: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-05T23:16:22.203Z",format: "%S-%Z-%u-%M-%u-%H-%j-%H-%Y-%S-%L-%m",timezone: "Europe/Sarajevo"} },iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "payment monitor invoice",v: true}]] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'alana',in: { $cmp: [{ $ltrim: { input: { $toString: { $arrayToObject: [[[78466,1430,'$obj.num']]] } } } },{ $range: [0,5,0] }] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["New York",13,0] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $week: { $isoWeekYear: { $minute: { $isoDayOfWeek: { $year: { $dateToString: {date: '$obj.obj.date',timezone: "Asia/Aden"} } } } } } },format: "%d-%%-%z-%%-%Y-%M-%U-%m-%V-%H-%H-%w"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substr: ['$obj.obj.obj.str',7,0] },"Markets"],[89346],[],['$str','$obj.obj.obj.str',"architecture navigate Supervisor"]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $concat: ["back-end"] }],as: 'kobe',in: { $indexOfArray: [{ $reverseArray: [[{ $subtract: ['$obj.num',37543] },false]] },{ $dayOfYear: { $toDate: { $arrayElemAt: [[],1857] } } },5] }} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[{ $substr: ["Vanuatu Berkshire Architect",12,16] },'$str',{ $rtrim: { input: '$obj.obj.obj.str' } }],33415] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: '$obj.obj.str' } },"application array"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Arkansas Mandatory PCI",v: { $exp: '$num' }},{k: "markets Grocery hacking",v: '$str'},{k: "Kentucky Rial Omani bypass",v: false}]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T09:33:34.269Z",timezone: "Europe/Gibraltar"} },timezone: "Africa/Juba",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.str',"Engineer upward-trending maximize",{ $toUpper: '$obj.str' }],[{ $isoWeek: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-05T23:57:40.141Z",format: "%Y-%d-%L-%L-%d-%S-%M-%L-%%-%G-%U",timezone: "Europe/Helsinki",onError: { $concatArrays: [[3051]] },onNull: { $zip: {inputs: [],useLongestLength: true} }} } } }]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "North Dakota" } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $second: { $dayOfYear: { $dateFromParts: {year: { $floor: 54586 },day: { $size: [[]] },hour: { $log: ['$obj.obj.obj.obj.num','$obj.num'] },minute: 73481,second: { $cmp: [{ $arrayToObject: [[{k: "Marketing eyeballs",v: true}]] },{ $reverseArray: [['$obj.obj.str']] }] },millisecond: { $size: [[]] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: '$obj.obj.str' } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.obj.obj.str','$obj.obj.obj.str',{ $substrCP: ["deposit HDD",13,1] }],[{ $substrBytes: ["Assurance",20,0] }],[{ $trim: {input: "Cotton Senior metrics",chars: '$obj.obj.obj.str'} },'$obj.obj.str']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit Missouri",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[88630,67894,78665],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeek: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [[{ $rtrim: {input: "Legacy Money Market Account synergies",chars: { $rtrim: { input: '$obj.obj.str' } }} }],16986] },{ $concatArrays: [[53819],[],[]] }] },month: { $abs: '$obj.obj.num' }} } } }, _id: 0}}],

        [{$project: {a: { $range: [8,9,7] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromParts: {year: { $mod: ['$obj.obj.obj.obj.num',96921] },hour: { $add: [74455,36035,'$obj.obj.num'] },millisecond: { $log10: '$obj.obj.obj.num' }} },timezone: "America/Argentina/Buenos_Aires"} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T12:26:36.085Z",format: "%U-%H-%m-%m-%m",onNull: "Investor Mozambique"} }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $hour: { $dateFromParts: {year: { $add: [82424,'$obj.obj.obj.num'] },month: { $mod: ['$obj.obj.obj.obj.num','$obj.obj.obj.num'] },day: { $divide: [54216,65969] },millisecond: { $pow: [{ $trunc: '$obj.obj.num' },'$obj.obj.num'] },timezone: "Australia/North"} } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[false]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],95390] } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $ltrim: { input: '$obj.obj.obj.str' } } } }, _id: 0}}],

        [{$project: {a: { $range: [17,15] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [15,18] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[5694,'$obj.obj.obj.obj.num','$obj.num'],36496] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "transmit Administrator",chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home web-enabled",v: { $dateToString: {date: new Date("2018-09-05T20:35:12.508Z"),format: "%V-%L-%V-%S-%z",timezone: "Asia/Baku",onNull: "Director deposit ivory"} }}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',19,20] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Games withdrawal Berkshire",v: 79998}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $trim: {input: '$obj.obj.obj.obj.str',chars: '$obj.obj.obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num'],as: 'anthony',in: { $subtract: ['$$anthony',{ $multiply: [43141,'$num',95822,81200] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "copying Auto Loan Account",v: '$obj.obj.obj.num'},{k: "metrics Bedfordshire Architect",v: "turn-key Realigned Missouri"},{k: "interfaces Liaison panel",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[47211],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [16,1] }, _id: 0}}],

        [{$project: {a: { $range: [9,15,19] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num'],[{ $dayOfYear: { $millesecond: { $year: { $isoWeekYear: { $isoDayOfWeek: { $isoWeek: { $dateToParts: { date: { $toDate: { $rtrim: { input: { $rtrim: {input: "system Kuwaiti Dinar",chars: { $dateToString: {date: { $minute: { $dateToParts: {date: { $dateFromString: { dateString: "2018-09-06T13:10:01.583Z" } },iso8601: false} } },format: "%V-%j-%m-%L",timezone: "Africa/Lusaka"} }} } } } } } } } } } } } },'$obj.obj.obj.obj.date'],[],["Pants"],['$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],4146] }, _id: 0}}],

        [{$project: {a: { $toDate: { $range: [19,0] } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Savings Account metrics",4,2] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [["help-desk",{ $rtrim: { input: { $ltrim: {input: "sticky Swiss Franc alarm",chars: '$obj.obj.obj.obj.str'} } } }],'$num'] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[[28906]]] } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Identity",chars: { $trim: { input: { $toString: { $arrayToObject: [[{k: "withdrawal",v: '$obj.str'},{k: "scale",v: false}]] } } } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $dayOfWeek: { $dateFromParts: {year: { $trunc: 48576 },minute: { $sqrt: 81331 }} } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$str',{ $dateToString: {date: new Date("2018-09-06T01:29:00.895Z"),format: "%S-%z-%m-%Y-%G"} }],['$obj.obj.num'],[],[13858,'$obj.obj.obj.obj.num',96086,'$obj.num']],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $toLower: { $toString: { $arrayElemAt: [['$obj.obj.obj.obj.str'],60575] } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $isoDayOfWeek: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T09:53:15.705Z",format: "%d-%G-%V-%Y-%S",timezone: "America/Santarem"} } } } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $dateToString: {date: { $dayOfMonth: { $minute: { $dateFromString: {dateString: "2018-09-06T14:53:34.116Z",format: "%w-%u-%z-%S-%H-%M-%%-%u-%m-%d-%u-%M",onError: { $isoDayOfWeek: { $dateToParts: {date: { $second: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-05T19:55:33.483Z",timezone: "Asia/Jayapura",onNull: '$str'} } } },iso8601: true} } }} } } },timezone: "Australia/Lord_Howe"} },15,7] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T03:49:01.916Z") } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $ltrim: {input: "Toys recontextualize",chars: { $toLower: '$obj.str' }} }],[]] }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $dayOfMonth: { $year: { $dateToString: {date: '$obj.obj.obj.date',format: "%M-%H-%Z-%V-%z-%j-%U",timezone: "America/Regina"} } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: { $toString: { $isoDayOfWeek: { $dayOfMonth: { $dayOfMonth: { $week: { $isoWeekYear: { $millesecond: { $second: { $toDate: { $ltrim: {input: "lavender driver Sleek",chars: '$obj.str'} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$obj.date' } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $rtrim: {input: "Creative Bedfordshire Applications",chars: "Vision-oriented systems"} } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: new Date("2018-09-06T02:36:15.086Z") }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],[],['$obj.str',{ $toLower: "Qatari Rial Health" }],['$obj.obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $isoDayOfWeek: { $minute: { $second: { $month: { $isoWeekYear: { $isoWeek: { $dayOfYear: { $week: { $dayOfWeek: { $dayOfYear: { $dayOfMonth: { $year: { $dateFromParts: {year: { $abs: '$obj.obj.obj.obj.num' },day: { $size: [[64934,'$obj.obj.obj.num']] },second: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $substrCP: ["Savings Account e-commerce Ergonomic",11,11] },0] }} } } } } } } } } } } } } } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Singapore Dollar Home"],[{ $concat: [] },{ $substrBytes: ['$obj.str',8,10] },'$obj.obj.obj.obj.str'],[15815,'$obj.num'],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeekYear: { $dayOfYear: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $mod: [10221,'$obj.num'] },isoWeek: { $abs: { $exp: 44399 } },hour: { $subtract: [44662,'$obj.obj.num'] },minute: { $add: ['$obj.obj.num',25146,'$obj.obj.obj.num'] },second: 83433,millisecond: { $ln: 54451 }} } } } } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $ltrim: {input: '$obj.obj.str',chars: { $trim: {input: { $toLower: "bandwidth" },chars: "approach intranet"} }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[70099],{ $ceil: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $substr: ["Checking Account",4,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],9116] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "plum Vatu",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',77362],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: { $toUpper: "transmitter Steel" },chars: '$obj.obj.obj.obj.str'} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T23:48:50.358Z",format: "%Y-%M-%m-%j-%Z-%w-%d-%%",timezone: "Pacific/Kwajalein",onError: { $toLower: '$obj.obj.str' }} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T07:39:41.129Z",onError: { $dayOfMonth: { $dayOfYear: { $second: '$obj.obj.date' } } }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[21398],[{ $concat: ["systems",'$obj.obj.obj.obj.str',{ $dateToString: {date: '$obj.obj.obj.obj.date',format: "%U-%S-%G-%S-%u-%j-%%",timezone: "America/Araguaina"} }] }],['$obj.str'],[{ $pow: ['$obj.obj.obj.num',49243] },'$obj.num',{ $exp: 13583 }],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Strategist bleeding-edge",'$obj.obj.obj.obj.str'],[335,'$obj.num'],[],[{ $substrBytes: ['$obj.obj.obj.obj.str',20,20] }],[]],defaults: [new Date("2018-09-06T01:02:18.189Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Credit Card Account",v: 70479},{k: "Pizza",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromString: {dateString: "2018-09-06T17:22:06.992Z",onError: { $arrayElemAt: [['$str',"Belgium"],83263] },onNull: { $concat: [{ $rtrim: {input: "Automated",chars: "invoice transform"} }] }} } }, _id: 0}}],

        [{$project: {a: { $range: [2,13] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Ergonomic Wooden benchmark" }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $year: { $toDate: { $filter: {input: ['$obj.num'],as: 'justen',cond: { $or: [] }} } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'kassandra',in: { $exp: 10252 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Borders Avon Liaison",v: { $toLower: '$str' }}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromParts: {year: { $size: [["Plastic Developer Ohio"]] },hour: { $ceil: 84072 },minute: { $exp: '$obj.obj.obj.num' },timezone: "Pacific/Ponape"} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToString: {date: '$obj.date',format: "%V-%Y-%d-%w-%V-%G-%Z-%u-%S",timezone: "Asia/Jayapura"} },timezone: "Europe/Tallinn",onNull: { $isoWeekYear: new Date("2018-09-06T04:19:39.572Z") }} }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.str','$obj.obj.str',"programming Pike"],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Kids concept"],cond: { $ne: [{ $dateToString: {date: '$obj.obj.obj.date',format: "%M-%%-%%-%M-%L-%u-%M-%j",onNull: { $substrBytes: [{ $concat: ["Incredible",{ $trim: { input: '$$this' } },"Implementation Refined Steel Computer"] },5,6] }} },{ $zip: {inputs: [[],[58534,'$obj.num'],[65752,'$$this',73813,'$$this']],defaults: [new Date("2018-09-06T15:51:02.112Z")]} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["disintermediate Regional virtual",'$obj.obj.obj.obj.str'],[],['$date']]] }, _id: 0}}],

        [{$project: {a: { $month: { $month: { $millesecond: { $millesecond: { $dateFromString: {dateString: "2018-09-06T10:39:52.237Z",onError: { $arrayToObject: [[[]]] },onNull: { $concatArrays: [[],["Implementation repurpose engage",'$obj.obj.str'],['$str',"Central Rustic Wooden Cheese overriding",{ $substrBytes: [{ $substr: ['$obj.obj.obj.obj.str',5,18] },11,17] }],[{ $rtrim: {input: { $concat: [] },chars: '$str'} },{ $toString: { $toUpper: "Thailand Jewelery Fort" } }]] }} } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.str',"gold"],as: 'nickolas',in: { $mod: [{ $multiply: [] },45622] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "communities evolve Tactics",v: 32007},{k: "Money Market Account",v: '$obj.num'},{k: "SDD web services Unbranded Frozen Pizza",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T11:56:39.903Z",timezone: "America/Kralendijk",onError: { $arrayElemAt: [[{ $toLower: '$obj.obj.obj.obj.str' },'$obj.obj.obj.obj.str',{ $toUpper: { $ltrim: { input: '$obj.str' } } }],59797] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $second: { $month: { $dayOfMonth: { $hour: { $dateToString: {date: new Date("2018-09-06T12:01:34.931Z"),format: "%V-%z-%z-%d-%H",onNull: { $rtrim: { input: "parallelism Wooden portals" } }} } } } } },timezone: "America/Montevideo"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "copying content Haven",v: 4022}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "haptic User-friendly",v: 76160},{k: "Russian Federation",v: new Date("2018-09-06T16:58:10.686Z")}]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',13,11] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$str',{ $rtrim: { input: '$str' } },"Human"],[]],useLongestLength: false,defaults: ["Macedonia Gorgeous Fresh Towels","indexing SMTP Australian Dollar",new Date("2018-09-06T04:47:45.144Z")]} }, _id: 0}}],

        [{$project: {a: { $week: { $hour: { $month: { $dateFromParts: {isoWeekYear: { $cmp: [{ $filter: {input: ['$obj.obj.obj.obj.num',33486],as: 'rodger',cond: { $gt: [{ $trim: {input: "New Mexico",chars: '$$rodger'} },{ $concat: [{ $toLower: '$$rodger' }] }] }} },{ $arrayToObject: [[['$obj.num'],[]]] }] },isoWeek: { $multiply: [] },hour: { $mod: ['$obj.obj.obj.num',89514] },minute: { $subtract: [{ $floor: { $divide: ['$obj.obj.obj.num','$obj.obj.obj.num'] } },48600] },millisecond: 56757} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Graphic Interface",v: new Date("2018-09-05T20:46:47.012Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: "compressing Personal Loan Account 1080p" } }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $dateToString: {date: { $isoDayOfWeek: { $minute: { $week: { $hour: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T19:29:33.758Z",format: "%z-%L-%V-%H-%Z-%U-%M-%%-%H"} } } } } } },onNull: '$str'} }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: { $isoWeekYear: { $month: { $year: { $second: { $dayOfYear: { $isoWeek: { $minute: { $dateToString: {date: '$obj.obj.date',format: "%m-%L-%z-%H-%S",timezone: "America/Argentina/Catamarca"} } } } } } } } },format: "%S-%j-%w-%G-%z-%U",timezone: "Asia/Qyzylorda"} },"Technician"],['$obj.obj.obj.obj.num',27625]]] }, _id: 0}}],

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
