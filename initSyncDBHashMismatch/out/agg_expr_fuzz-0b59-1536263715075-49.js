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
        return coll.insert({_id: 30634,str: "Baht",num: 71786,date: new Date("2018-09-06T10:23:50.982Z"),array: [],obj: {_id: 30635,str: "Networked",num: 15865,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30636,str: "Representative multi-byte Tunnel",num: 45355,date: new Date("2018-09-06T13:53:55.319Z"),array: [{_id: 30637,str: "Cambridgeshire open system plug-and-play",num: 25072,date: new Date("2018-09-06T09:20:07.683Z"),array: [],obj: {}},38958,new Date("2018-09-06T12:41:02.113Z"),"maroon Pakistan Rupee deposit",60796,new Date("2018-09-06T11:32:36.152Z"),95740,new Date("2018-09-06T04:11:06.355Z"),"Optimization markets clicks-and-mortar","driver"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30638,str: "transmitter salmon",num: 71397,date: new Date("2018-09-06T00:09:30.506Z"),array: [],obj: {_id: 30639,str: "Lock SAS Fantastic Metal Shirt",num: 5554,date: new Date("2018-09-05T23:43:58.103Z"),array: [{_id: 30640,str: "neural-net",num: 10704,array: [43980,"Representative Turkey Chile"],obj: {_id: 30641,str: "solution",num: 54792,date: new Date("2018-09-06T04:20:52.627Z"),array: [new Date("2018-09-06T15:13:10.703Z")]}},80262,{_id: 30642,str: "challenge",date: new Date("2018-09-06T08:55:26.270Z"),obj: {}},new Date("2018-09-05T20:43:06.154Z"),new Date("2018-09-06T15:37:41.197Z"),"USB 5th generation","Unbranded Soft Pants models Principal",82358,new Date("2018-09-06T18:37:41.042Z"),"CSS",92195,"Digitized Right-sized"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30643,str: "payment",num: 82764,date: new Date("2018-09-06T02:57:25.159Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30644,str: "green orchestration",num: 5935,date: new Date("2018-09-06T14:20:08.307Z"),obj: {_id: 30645,str: "Paradigm Chips Customer-focused",date: new Date("2018-09-06T10:08:24.129Z"),array: [26787,54333,"District Kentucky",new Date("2018-09-05T23:43:17.240Z"),[new Date("2018-09-06T07:21:50.041Z"),"bandwidth"],{_id: 30646,str: "monitor",array: [],obj: {_id: 30647,str: "Technician 4th generation bypassing",num: 46222,date: new Date("2018-09-06T00:10:40.939Z"),array: [],obj: {}}},new Date("2018-09-06T12:32:54.705Z"),new Date("2018-09-06T17:30:56.092Z"),[new Date("2018-09-06T17:03:15.019Z")],67640,"systems"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30648,num: 13970,date: new Date("2018-09-06T18:20:47.188Z"),array: [new Date("2018-09-06T17:06:03.491Z"),87250,"SSL",new Date("2018-09-06T17:53:10.599Z"),"visualize navigate",{_id: 30649,str: "Gloves",num: 26388,date: new Date("2018-09-05T22:13:02.998Z"),array: [],obj: {}},5561,47385,"bus",57094,new Date("2018-09-06T10:29:59.744Z"),"Philippine Peso Avon e-business",[]],obj: {_id: 30650,str: "Games multi-byte",date: new Date("2018-09-06T11:03:04.402Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30651,str: "Computers",num: 9427,date: new Date("2018-09-05T20:42:49.510Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30652,num: 43807,date: new Date("2018-09-06T03:18:48.554Z"),array: [],obj: {_id: 30653,str: "Ergonomic Soft Pizza Division logistical",date: new Date("2018-09-06T18:06:27.002Z"),array: [66422,14875,"connecting transmitter",new Date("2018-09-06T18:32:20.922Z"),new Date("2018-09-06T19:32:42.646Z"),26795,"parsing","Buckinghamshire function Handmade Plastic Computer","Movies",[],51121,new Date("2018-09-06T08:04:25.979Z")],obj: {_id: 30654,str: "reboot Dynamic",num: 50300,date: new Date("2018-09-06T02:37:15.873Z"),array: [3290,{_id: 30655,str: "Cambridgeshire deposit transform",num: 95032,array: [],obj: {_id: 30656,str: "Yemeni Rial Music",obj: {}}},new Date("2018-09-05T22:46:48.391Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 30657,str: "Borders",num: 47278,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30658,str: "Money Market Account",num: 93681,date: new Date("2018-09-06T00:37:46.482Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30659,str: "quantify",num: 47583,date: new Date("2018-09-05T23:46:54.672Z"),array: [[],"Practical European Unit of Account 17(E.U.A.-17) US Dollar",{_id: 30660,str: "Lead",num: 85544,array: [],obj: {_id: 30661,str: "Specialist",num: 34000,date: new Date("2018-09-06T12:49:15.839Z"),obj: {}}},"quantifying",new Date("2018-09-06T00:33:39.997Z"),"Tuvalu Tasty Steel Table"],obj: {_id: 30662,date: new Date("2018-09-05T21:05:47.760Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30663,str: "Interactions matrix",num: 58966,date: new Date("2018-09-05T22:25:43.843Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30664,str: "tan incentivize grey",num: 57458,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30665,str: "Innovative",num: 58052,array: [27164,"24/7",{_id: 30666,str: "backing up",num: 67586,date: new Date("2018-09-05T20:01:36.795Z"),obj: {_id: 30667,num: 50283,date: new Date("2018-09-06T05:43:57.496Z"),array: ["yellow target",new Date("2018-09-05T23:48:14.267Z")],obj: {_id: 30668,str: "Cuba collaborative",date: new Date("2018-09-05T20:01:38.572Z"),array: [new Date("2018-09-06T03:05:41.295Z"),"monetize"],obj: {}}}},62280,80880,{_id: 30669,str: "Plastic back up",num: 77526,array: [new Date("2018-09-06T12:46:53.526Z"),"ROI Finland",19394,[]]},new Date("2018-09-06T02:48:30.722Z"),{_id: 30670,num: 65317,date: new Date("2018-09-06T10:02:40.092Z"),array: [],obj: {}},{_id: 30671,date: new Date("2018-09-06T14:56:00.897Z"),array: ["Incredible",69896,6742,17085,[],new Date("2018-09-06T03:09:14.831Z")],obj: {_id: 30672,str: "black Kenyan Shilling"}},[],"Money Market Account Tunisia Fish"]});
    },

    function(coll) {
        return coll.insert({_id: 30673,str: "experiences Functionality",num: 13029,date: new Date("2018-09-06T08:42:45.849Z"),array: [],obj: {_id: 30674,num: 70382,date: new Date("2018-09-06T14:12:40.344Z"),array: [new Date("2018-09-06T10:01:32.052Z"),35434,new Date("2018-09-06T05:48:17.181Z"),new Date("2018-09-06T15:59:24.421Z"),"Refined Plastic Chips Kwacha",44160,"Soft didactic",new Date("2018-09-06T00:57:23.300Z"),19014,[],"Multi-tiered",13929,[{_id: 30675,str: "Visionary",num: 93103,array: ["compress Specialist Sleek Metal Car"],obj: {}}],"system engine"]}});
    },

    function(coll) {
        return coll.insert({_id: 30676,str: "Gorgeous",date: new Date("2018-09-06T17:49:34.775Z"),array: [65134,23285,new Date("2018-09-05T22:44:12.877Z"),new Date("2018-09-06T10:32:55.799Z"),new Date("2018-09-06T12:37:09.978Z"),new Date("2018-09-06T09:12:29.466Z"),"Configuration Salad",{_id: 30677,str: "Concrete Direct",num: 96709,date: new Date("2018-09-05T23:56:38.923Z"),array: ["California Metrics alarm",new Date("2018-09-05T21:59:20.489Z"),"bricks-and-clicks"],obj: {_id: 30678,str: "exploit New Mexico Associate",num: 51145,date: new Date("2018-09-06T03:48:57.712Z")}},[],{_id: 30679,str: "Chicken paradigms Forward",num: 61992,obj: {_id: 30680,str: "Danish Krone Accounts",num: 15070,date: new Date("2018-09-05T23:57:58.885Z"),array: []}},"Representative communities Mews",63722],obj: {_id: 30681,date: new Date("2018-09-06T19:12:42.989Z"),array: [19520],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30682,str: "Associate Table",num: 82389,date: new Date("2018-09-06T10:01:48.560Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30683,str: "mobile Harbors bluetooth",num: 9496,date: new Date("2018-09-06T12:17:18.229Z"),array: [],obj: {_id: 30684,num: 82229,date: new Date("2018-09-05T23:41:31.306Z"),array: [],obj: {_id: 30685,str: "cyan concept"}}});
    },

    function(coll) {
        return coll.insert({_id: 30686,str: "Soft Car Implementation",num: 83282,date: new Date("2018-09-05T23:37:36.895Z"),array: [],obj: {_id: 30687,str: "transmitter XML",num: 88751,date: new Date("2018-09-06T10:57:00.335Z")}});
    },

    function(coll) {
        return coll.insert({_id: 30688,str: "Representative Curve index",num: 27953,date: new Date("2018-09-05T23:57:36.057Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30689,str: "Belize Dollar Land Analyst",date: new Date("2018-09-06T12:46:56.746Z"),array: ["National Cheese Implementation",{_id: 30690,num: 83096,date: new Date("2018-09-06T00:28:26.481Z"),array: [new Date("2018-09-06T15:58:05.525Z"),57912,"Crossing",new Date("2018-09-06T19:30:40.880Z"),new Date("2018-09-06T06:18:19.312Z")],obj: {_id: 30691,str: "panel web-readiness",num: 93806,date: new Date("2018-09-06T09:01:36.098Z"),array: [],obj: {_id: 30692,str: "Lodge",array: [],obj: {}}}},new Date("2018-09-06T17:33:49.416Z"),31183,[new Date("2018-09-06T01:04:19.206Z")],"calculating Washington Keyboard","red",new Date("2018-09-06T09:08:59.472Z"),[88845],"24/365 Cape Verde Sleek",77938,{_id: 30693,str: "engage Fresh",num: 88706,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 30694,str: "Directives Plastic Licensed",num: 6974,date: new Date("2018-09-06T16:22:06.310Z"),array: [],obj: {_id: 30695,num: 27518,date: new Date("2018-09-05T22:19:31.759Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30696,str: "Cape Verde copy",num: 89495,date: new Date("2018-09-06T01:20:45.927Z"),array: [new Date("2018-09-06T18:56:26.891Z"),"optical Markets Djibouti",[],"National",{_id: 30697,str: "Forward Marshall Islands",num: 40118,date: new Date("2018-09-06T11:00:15.979Z"),array: [],obj: {}},"solid state Lead",new Date("2018-09-06T10:41:41.331Z"),58110],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30698,str: "content Proactive website",num: 49625,array: [15976,7580,"Future convergence","firmware",new Date("2018-09-06T17:43:21.068Z"),{_id: 30699,str: "Credit Card Account Generic Fresh Bacon Iowa",num: 19500,array: [],obj: {}},new Date("2018-09-06T03:43:51.146Z"),new Date("2018-09-06T08:09:58.201Z"),85898,3035],obj: {_id: 30700,str: "haptic",date: new Date("2018-09-06T04:42:14.972Z"),array: ["payment RSS Function-based","Credit Card Account Personal Loan Account",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 30701,str: "Decentralized bandwidth",num: 82313,date: new Date("2018-09-06T07:45:26.564Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30702,num: 4368,date: new Date("2018-09-06T12:57:36.700Z"),array: [94389,12755,"Buckinghamshire Pataca Steel",new Date("2018-09-06T13:53:26.346Z"),[new Date("2018-09-06T01:33:41.830Z"),new Date("2018-09-05T23:20:34.926Z")],{_id: 30703,str: "Montana array",num: 95707,date: new Date("2018-09-06T12:50:14.419Z"),obj: {}},"Fantastic De-engineered","Progressive",new Date("2018-09-06T04:39:40.896Z"),[],[],{_id: 30704,str: "middleware",num: 5399,date: new Date("2018-09-06T19:41:07.648Z"),array: [],obj: {_id: 30705,str: "Borders magenta Cliffs",num: 86894,array: [],obj: {_id: 30706,num: 55488}}}]});
    },

    function(coll) {
        return coll.insert({_id: 30707,str: "SSL Mexican Peso Mexican Unidad de Inversion (UDI)",num: 89812,date: new Date("2018-09-05T20:05:29.960Z"),array: [],obj: {_id: 30708,str: "Coordinator Virgin Islands, U.S. supply-chains",num: 2657,date: new Date("2018-09-06T18:19:36.767Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30709,num: 53381,date: new Date("2018-09-06T00:10:59.167Z"),array: [new Date("2018-09-06T18:38:49.767Z"),73589,new Date("2018-09-06T09:46:05.408Z"),"Auto Loan Account",72340,new Date("2018-09-06T13:24:02.186Z"),{_id: 30710,str: "Nicaragua Architect connect",num: 65022,array: ["seamless Greens"],obj: {}},"conglomeration IB connecting",[],[9024],[],20277,[],new Date("2018-09-06T19:55:13.086Z"),"index Handcrafted Keyboard",new Date("2018-09-06T12:09:58.668Z")],obj: {_id: 30711,str: "Virginia",num: 27437,date: new Date("2018-09-06T03:10:07.845Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30712,str: "Credit Card Account programming",num: 89257,array: ["Intelligent hardware Handcrafted Fresh Shirt",79406,new Date("2018-09-06T11:26:29.193Z"),"calculate","Lodge architect",new Date("2018-09-05T22:05:58.583Z"),[{_id: 30713,num: 88658,date: new Date("2018-09-06T02:06:12.337Z"),array: [{_id: 30714,str: "Saint Helena",num: 82456,date: new Date("2018-09-06T14:00:27.244Z"),obj: {_id: 30715,date: new Date("2018-09-06T18:53:05.933Z"),array: [],obj: {}}}]},{_id: 30716,str: "forecast",num: 6829,array: [98188],obj: {_id: 30717,str: "schemas integrated",num: 43898,date: new Date("2018-09-06T15:33:12.577Z"),array: [],obj: {}}}],new Date("2018-09-06T17:12:06.154Z"),new Date("2018-09-06T10:39:46.819Z"),[],"Chips firmware needs-based","Rubber American Samoa Computers"],obj: {_id: 30718,num: 51928,date: new Date("2018-09-06T02:42:10.872Z")}});
    },

    function(coll) {
        return coll.insert({_id: 30719,str: "Avon backing up",num: 91535,date: new Date("2018-09-06T14:59:20.239Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30720,str: "FTP online",num: 10378,date: new Date("2018-09-06T08:32:44.395Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30721,str: "Mall",date: new Date("2018-09-06T04:56:59.457Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30722,str: "Mauritius Rupee Alley Tasty Granite Towels",num: 77469,date: new Date("2018-09-06T09:38:10.585Z"),array: [],obj: {_id: 30723,str: "deposit solid state SMTP",num: 39742,date: new Date("2018-09-06T14:20:19.215Z"),array: [[],"schemas",new Date("2018-09-06T09:56:39.889Z"),"New Jersey Credit Card Account Colombia",new Date("2018-09-06T15:02:49.379Z"),1745,{_id: 30724,str: "Open-architected Berkshire",num: 85436,date: new Date("2018-09-06T14:38:43.583Z"),array: [new Date("2018-09-06T02:26:02.405Z"),63355],obj: {}},21922,new Date("2018-09-06T03:25:54.390Z"),[83026,"Digitized e-markets",{_id: 30725,str: "Regional",num: 5748,date: new Date("2018-09-06T16:09:42.103Z")}],new Date("2018-09-06T09:25:27.590Z"),"Cambridgeshire override"]}});
    },

    function(coll) {
        return coll.insert({_id: 30726,str: "Cross-platform Plastic driver",num: 2885,date: new Date("2018-09-05T23:57:30.870Z"),array: [],obj: {_id: 30727,str: "executive generate AGP",num: 23371,date: new Date("2018-09-06T01:54:01.649Z"),array: ["Refined Rubber Computer Guam revolutionary",[48353,{_id: 30728,date: new Date("2018-09-06T04:17:21.276Z"),array: [],obj: {}},new Date("2018-09-06T14:53:36.727Z"),"Extended needs-based Zloty",[]],29675,new Date("2018-09-06T02:56:41.309Z"),62096,"Sports cultivate Berkshire","CFA Franc BEAC",new Date("2018-09-06T12:12:30.423Z"),{_id: 30729,str: "platforms Avon",num: 9809,array: [],obj: {_id: 30730,str: "Ohio Auto Loan Account",array: [{_id: 30731,num: 22572,date: new Date("2018-09-06T10:17:06.772Z"),obj: {}},new Date("2018-09-06T10:22:16.003Z"),new Date("2018-09-06T12:02:33.641Z")]}}],obj: {_id: 30732,date: new Date("2018-09-06T02:25:30.037Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 30733,str: "Gloves Croatian Kuna",num: 80113,date: new Date("2018-09-06T15:59:00.196Z"),array: [],obj: {_id: 30734,str: "Metal quantify",num: 33027,date: new Date("2018-09-05T21:05:15.482Z"),array: [[],new Date("2018-09-05T22:22:21.429Z"),"deliver",52056,new Date("2018-09-06T13:14:15.270Z"),"Uzbekistan overriding primary",[{_id: 30735,str: "generate",num: 89641,array: ["Awesome index",65499,"application Egypt Data",new Date("2018-09-06T09:21:52.841Z")],obj: {}},"Specialist Toys",41421,new Date("2018-09-06T05:36:39.903Z"),42414]]}});
    },

    function(coll) {
        return coll.insert({_id: 30736,str: "California Configurable",num: 40288,date: new Date("2018-09-06T15:21:40.544Z"),array: ["cutting-edge",53067,43621,31403,new Date("2018-09-06T04:49:55.953Z"),"Metal",new Date("2018-09-06T16:26:22.675Z"),new Date("2018-09-06T13:24:12.957Z"),{_id: 30737,str: "productivity",num: 35391,date: new Date("2018-09-06T13:07:00.225Z"),array: ["reboot azure Implementation",[]],obj: {}},"Configuration",[]]});
    },

    function(coll) {
        return coll.insert({_id: 30738,array: [],obj: {_id: 30739,str: "index Designer",num: 15784,date: new Date("2018-09-06T16:46:59.150Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30740,str: "interfaces",num: 61844,date: new Date("2018-09-06T08:24:32.199Z"),array: [[],"Tennessee",{_id: 30741,str: "Tasty strategize Infrastructure",num: 77804,date: new Date("2018-09-06T01:41:28.088Z"),array: [],obj: {}},new Date("2018-09-06T04:21:04.824Z"),[],39723,"Metrics deposit Consultant","metrics Intelligent value-added",{_id: 30742,str: "Licensed Soft Tuna primary Checking Account",num: 7635,date: new Date("2018-09-06T08:40:16.982Z"),array: [new Date("2018-09-06T04:46:52.029Z"),13151]},new Date("2018-09-06T19:01:17.058Z"),43083,["Credit Card Account",50136]],obj: {_id: 30743,num: 38451,date: new Date("2018-09-06T01:38:16.904Z"),obj: {_id: 30744,str: "green Flat",date: new Date("2018-09-06T00:26:36.034Z"),array: [new Date("2018-09-06T02:02:44.270Z"),{_id: 30745,obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 30746,str: "North Dakota Clothing connect",num: 49481,date: new Date("2018-09-06T16:24:13.692Z"),array: [40104,"mobile Strategist Outdoors",new Date("2018-09-06T11:00:00.457Z"),new Date("2018-09-06T00:04:28.492Z"),3899,new Date("2018-09-06T10:29:29.140Z"),"technologies Electronics JBOD",29800,"Auto Loan Account",{_id: 30747,str: "Vermont",date: new Date("2018-09-06T13:36:31.911Z"),array: [new Date("2018-09-06T01:56:47.892Z"),[],new Date("2018-09-05T21:12:37.438Z")],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30748,str: "Computer Metical port",num: 77128,date: new Date("2018-09-06T13:50:05.060Z"),array: [[],"Bedfordshire Refined Rubber Ball","multi-byte Vatu Health",new Date("2018-09-06T13:15:30.464Z"),36633,new Date("2018-09-06T14:51:54.572Z")],obj: {_id: 30749,str: "synergistic Cotton",num: 73567,date: new Date("2018-09-06T02:14:33.095Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30750,str: "blue Quality-focused Representative",num: 82040,date: new Date("2018-09-06T05:17:31.552Z"),array: [],obj: {_id: 30751,str: "alliance Rest",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30752,str: "New Mexico Unbranded Licensed",num: 6730,date: new Date("2018-09-06T11:31:37.608Z"),array: ["Functionality Investment Account Malaysia",[],new Date("2018-09-05T23:55:51.281Z"),new Date("2018-09-06T03:02:59.304Z"),{_id: 30753,num: 7514,date: new Date("2018-09-06T01:28:48.220Z"),obj: {}},new Date("2018-09-05T22:05:06.576Z"),"bandwidth","HDD",91353,new Date("2018-09-05T21:01:49.869Z"),[24110,{_id: 30754,str: "client-server Personal Loan Account",num: 12537,date: new Date("2018-09-06T11:33:40.932Z"),array: []},{_id: 30755,num: 15161,date: new Date("2018-09-06T01:46:41.612Z"),array: [],obj: {}}]],obj: {_id: 30756,str: "New Hampshire",date: new Date("2018-09-06T01:42:37.223Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30757,str: "invoice Fall",num: 80074,date: new Date("2018-09-06T12:41:24.612Z"),array: [76777,new Date("2018-09-06T00:21:28.894Z"),{_id: 30758,str: "Future deposit",num: 48957,date: new Date("2018-09-06T07:31:44.338Z"),obj: {}},new Date("2018-09-06T01:25:06.949Z"),"red Savings Account Incredible","Licensed lime gold",new Date("2018-09-06T04:08:31.890Z"),["Bedfordshire",[],"monitor HDD Small Frozen Hat"]],obj: {_id: 30759,str: "mobile Generic Bedfordshire",num: 97363,date: new Date("2018-09-06T05:55:44.908Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30760,str: "e-services orchid Games",num: 4336,date: new Date("2018-09-06T05:59:31.784Z"),array: [],obj: {_id: 30761,str: "Response",date: new Date("2018-09-06T19:20:48.163Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30762,str: "SSL intranet Grocery",num: 12676,date: new Date("2018-09-06T04:37:29.501Z"),array: [37561,"envisioneer Avon Ergonomic",new Date("2018-09-06T11:08:10.781Z"),54505,{_id: 30763,str: "purple Metrics Facilitator",num: 79809,date: new Date("2018-09-06T09:20:31.943Z"),array: [[],"Mobility bandwidth Metal"],obj: {}},"Electronics Music Plastic",new Date("2018-09-06T17:08:01.140Z"),[],92833,new Date("2018-09-06T01:29:00.841Z"),[new Date("2018-09-06T08:14:56.882Z"),1914]],obj: {_id: 30764,str: "transition",num: 3590,array: [{_id: 30765,date: new Date("2018-09-06T07:12:32.776Z"),obj: {}},13900]}});
    },

    function(coll) {
        return coll.insert({_id: 30766,str: "TCP neural functionalities",num: 70365,date: new Date("2018-09-06T01:17:29.583Z"),array: [],obj: {_id: 30767,str: "empower RSS Baby",num: 87654,array: [new Date("2018-09-06T03:16:36.986Z"),49603,"implementation Handcrafted Plastic Keyboard",58601,{_id: 30768,str: "bandwidth Ohio",num: 14760,array: [],obj: {_id: 30769,str: "embrace program bypass",num: 6117,date: new Date("2018-09-06T12:44:53.025Z"),array: [],obj: {_id: 30770,date: new Date("2018-09-06T18:41:06.503Z"),array: [new Date("2018-09-06T03:58:15.034Z")],obj: {}}}},"invoice collaborative overriding","Infrastructure USB Right-sized",new Date("2018-09-06T00:47:28.377Z"),{_id: 30771,str: "New Hampshire Branding Dynamic",date: new Date("2018-09-06T18:03:53.584Z"),obj: {}},19750,new Date("2018-09-06T02:01:06.951Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 30772,str: "Lari copying Incredible",num: 96038,date: new Date("2018-09-06T03:39:45.450Z"),array: [],obj: {_id: 30773,str: "online scalable parse",num: 67327,date: new Date("2018-09-06T18:17:57.622Z"),array: [35409,[],76180,new Date("2018-09-06T12:05:36.605Z"),new Date("2018-09-05T23:38:59.825Z"),"Personal Loan Account Seamless compressing",7749,"Avon",45982,"Data",new Date("2018-09-05T21:35:32.261Z"),[],{_id: 30774,str: "Cote d'Ivoire Refined",num: 51577,array: [{_id: 30775,array: []}],obj: {}},new Date("2018-09-06T10:04:09.030Z")],obj: {_id: 30776,num: 14198,date: new Date("2018-09-06T11:48:57.834Z"),array: [30575,[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30777,str: "Synergistic redundant",num: 50918,date: new Date("2018-09-06T16:14:28.699Z"),array: [],obj: {_id: 30778,date: new Date("2018-09-06T10:00:27.411Z"),array: ["Junction",80290,32626,new Date("2018-09-06T05:55:28.308Z"),"CFP Franc",40852,new Date("2018-09-06T05:14:00.960Z"),{_id: 30779,str: "Handmade panel Virtual",num: 41294,date: new Date("2018-09-06T14:58:59.334Z"),array: [{_id: 30780,str: "Legacy",num: 59777,date: new Date("2018-09-06T09:26:11.580Z"),array: [],obj: {}}]},new Date("2018-09-06T08:19:59.568Z"),{_id: 30781,str: "Garden Belgium",num: 91508,obj: {_id: 30782,str: "Group SSL",date: new Date("2018-09-06T19:48:19.535Z"),obj: {_id: 30783,num: 9108,date: new Date("2018-09-06T15:06:46.330Z")}}},"Product Central Shoes","integrate Granite"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30784,str: "AI magenta",num: 97886,date: new Date("2018-09-06T16:13:01.028Z"),array: [43947,new Date("2018-09-06T17:16:56.352Z"),"Auto Loan Account","synthesizing Cheese Gorgeous",{_id: 30785,array: [757,new Date("2018-09-06T00:18:31.196Z"),{_id: 30786,str: "Legacy",num: 46795,date: new Date("2018-09-06T13:14:15.381Z"),array: [],obj: {}},16290,[]],obj: {_id: 30787,str: "transmit solution-oriented",num: 35324,date: new Date("2018-09-06T11:34:42.464Z"),obj: {}}},new Date("2018-09-06T07:40:36.735Z"),"engage Division",new Date("2018-09-06T06:51:39.105Z")]});
    },

    function(coll) {
        return coll.insert({_id: 30788,str: "wireless Markets Ball",num: 80724,date: new Date("2018-09-05T20:34:26.529Z"),array: [],obj: {_id: 30789,str: "Compatible Kansas architecture",num: 99945,date: new Date("2018-09-06T11:35:22.487Z"),array: ["panel",new Date("2018-09-06T16:09:15.433Z"),"Centers Organized Frozen",new Date("2018-09-06T10:43:57.156Z"),66074,[],new Date("2018-09-06T08:17:23.915Z"),73955,{_id: 30790,str: "Sports GB calculating",num: 83476,date: new Date("2018-09-06T02:59:29.024Z"),array: ["Agent"],obj: {}},{_id: 30791,str: "Consultant digital",num: 34951,array: [74744,"Lead Ohio"],obj: {_id: 30792,str: "Creative",date: new Date("2018-09-05T20:18:56.276Z")}},new Date("2018-09-06T11:42:11.928Z"),19170,"solution Electronics",44590],obj: {_id: 30793,str: "Bedfordshire quantify International",num: 28793,obj: {_id: 30794,date: new Date("2018-09-06T04:17:15.120Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 30795,str: "models implement",num: 91886,date: new Date("2018-09-06T17:30:21.349Z"),array: [new Date("2018-09-06T05:31:19.648Z"),new Date("2018-09-06T02:16:40.592Z"),84273,"Awesome Rubber Car New Jersey Associate","bandwidth digital indexing",new Date("2018-09-06T10:47:57.549Z"),[],70830,31064,"bandwidth",new Date("2018-09-06T05:03:39.634Z"),{_id: 30796,date: new Date("2018-09-06T16:26:23.728Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30797,str: "synergies Tunnel monitor",num: 18628,date: new Date("2018-09-06T04:13:03.151Z"),array: [],obj: {_id: 30798,str: "ADP",num: 56186,date: new Date("2018-09-06T10:13:59.874Z"),array: [new Date("2018-09-06T09:54:35.238Z"),"SDD empowering access",new Date("2018-09-05T23:04:18.997Z"),15671,56869,86371,"Dong",{_id: 30799,str: "Neck",date: new Date("2018-09-06T18:30:25.706Z"),array: [],obj: {_id: 30800,str: "PNG Shoal generate",num: 74077,date: new Date("2018-09-06T07:27:24.053Z")}},new Date("2018-09-06T13:12:16.217Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 30801,str: "Buckinghamshire Product",num: 5772,array: [],obj: {_id: 30802,str: "Coordinator",num: 84120,date: new Date("2018-09-06T03:10:55.503Z"),array: [new Date("2018-09-06T18:41:00.219Z"),82447,69247,"virtual Chad Associate",75505,"proactive Kyat digital",new Date("2018-09-06T04:22:07.414Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30803,str: "Bahamas Iowa",num: 20753,date: new Date("2018-09-06T11:34:16.728Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30804,str: "Digitized incentivize Cuba",num: 58685,date: new Date("2018-09-06T15:20:38.995Z"),array: [11459,"ubiquitous Senior sky blue",96178,new Date("2018-09-06T12:22:11.623Z"),["application Health XSS",93439,[],new Date("2018-09-06T07:02:00.863Z"),"Hawaii Technician","deposit",{_id: 30805,str: "magenta Aruban Guilder",num: 78428,date: new Date("2018-09-06T01:42:22.930Z"),array: [],obj: {}},new Date("2018-09-06T16:43:40.921Z")],25334],obj: {_id: 30806,num: 89009,array: [],obj: {_id: 30807,str: "Health card interfaces",num: 80063,date: new Date("2018-09-05T20:43:14.767Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30808,str: "global",num: 85076,date: new Date("2018-09-06T03:19:19.299Z"),array: ["Mississippi XSS",33241,new Date("2018-09-06T06:18:45.301Z"),new Date("2018-09-06T08:36:47.178Z"),["human-resource deposit",27764],{_id: 30809,str: "Wooden deliver synthesize",num: 64118,date: new Date("2018-09-06T11:37:05.051Z"),array: [new Date("2018-09-06T10:43:54.756Z"),["Granite Junction"],"Liaison Savings Account payment"]},[],[],[],33176,{_id: 30810,str: "paradigms circuit",num: 91188,date: new Date("2018-09-06T13:23:53.733Z"),array: [],obj: {_id: 30811,str: "Practical Quetzal Factors",num: 37685,date: new Date("2018-09-06T02:59:19.526Z"),array: [],obj: {}}},new Date("2018-09-06T16:46:35.947Z")],obj: {_id: 30812,obj: {_id: 30813,num: 97840,date: new Date("2018-09-06T11:58:24.837Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 30814,str: "Graphical User Interface Fish Afghanistan",num: 10063,date: new Date("2018-09-06T05:29:23.255Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30815,str: "visualize Personal Loan Account",num: 81569,date: new Date("2018-09-06T14:51:51.736Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30816,str: "killer",date: new Date("2018-09-06T14:15:15.097Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30817,str: "Rustic efficient",num: 48435,date: new Date("2018-09-06T06:06:36.311Z"),array: [],obj: {_id: 30818,str: "Licensed virtual withdrawal",num: 97116,date: new Date("2018-09-06T12:04:33.167Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30819,str: "protocol process improvement Frozen",num: 94336,date: new Date("2018-09-06T15:23:32.376Z"),array: [56218,new Date("2018-09-06T14:32:18.224Z"),"connect",{_id: 30820,str: "global Lead",num: 34331,date: new Date("2018-09-06T07:46:44.820Z"),array: [],obj: {}},new Date("2018-09-05T21:43:40.007Z"),new Date("2018-09-06T02:40:56.112Z"),["Sleek Metal Fish Sports",58742,{_id: 30821,str: "Re-engineered transmitter Incredible",date: new Date("2018-09-06T06:42:37.477Z"),obj: {}},[]],"Nebraska",37342,{_id: 30822,num: 62501,date: new Date("2018-09-06T16:26:55.212Z"),array: [["navigate",8151]]},new Date("2018-09-06T13:22:23.294Z")],obj: {_id: 30823,num: 93837,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30824,str: "empowering",num: 78598,date: new Date("2018-09-06T15:37:19.123Z"),array: [23392,new Date("2018-09-06T04:55:52.115Z"),69007,new Date("2018-09-06T10:54:01.020Z"),{_id: 30825,str: "Ergonomic Steel Soap programming",date: new Date("2018-09-06T04:51:55.442Z"),array: [],obj: {}},"markets transmit",new Date("2018-09-05T23:52:39.142Z")],obj: {_id: 30826,str: "data-warehouse Pizza partnerships",num: 36862,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30827,str: "Texas Steel",num: 17277,date: new Date("2018-09-06T18:35:50.747Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30828,str: "Regional National Borders",num: 38306,date: new Date("2018-09-06T08:29:02.757Z"),array: [],obj: {_id: 30829,str: "Plastic withdrawal Maldives",num: 75581,date: new Date("2018-09-06T17:54:56.410Z"),array: [{_id: 30830,num: 68350,date: new Date("2018-09-06T18:37:43.401Z"),array: [],obj: {}},71244,"Ergonomic Rubber Fish payment",[],"overriding e-business indexing",new Date("2018-09-06T11:36:12.265Z"),new Date("2018-09-06T09:48:51.049Z"),new Date("2018-09-05T22:13:28.912Z"),94317,38758,[84978,{_id: 30831,str: "back-end Row",date: new Date("2018-09-05T21:49:47.047Z"),array: [74379,new Date("2018-09-05T20:23:34.668Z")]},"Trail"],new Date("2018-09-06T17:58:12.397Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30832,str: "Money Market Account",num: 44218,date: new Date("2018-09-06T17:33:35.950Z"),array: [98915,{_id: 30833,str: "Junctions",num: 97364,date: new Date("2018-09-05T20:10:20.487Z"),array: [],obj: {}},new Date("2018-09-06T13:08:58.733Z"),91751,new Date("2018-09-06T09:41:31.764Z"),"Rupiah Investment Account",new Date("2018-09-06T16:24:37.686Z"),92591,[],new Date("2018-09-06T18:17:54.245Z"),"Berkshire Investment Account Bike","Money Market Account North Dakota",{_id: 30834,num: 56741,date: new Date("2018-09-06T00:22:39.829Z")}]});
    },

    function(coll) {
        return coll.insert({_id: 30835,str: "Gloves",num: 23718,date: new Date("2018-09-06T16:45:35.109Z"),array: [],obj: {_id: 30836,str: "synergy Games",date: new Date("2018-09-06T18:26:53.935Z"),array: [],obj: {_id: 30837,str: "bandwidth",num: 75512,date: new Date("2018-09-06T11:54:09.473Z"),array: [{_id: 30838,str: "synthesize Gourde US Dollar Georgia",obj: {}},63937,11726,"connecting deploy","Mouse Savings Account","generate platforms",new Date("2018-09-06T06:26:36.078Z"),65540,new Date("2018-09-06T06:42:27.837Z"),new Date("2018-09-06T11:08:26.109Z"),[20728,{_id: 30839,num: 51756,date: new Date("2018-09-05T21:25:31.741Z"),obj: {}}],{_id: 30840,str: "input Bedfordshire white",date: new Date("2018-09-06T16:41:02.525Z")}]}}});
    },

    function(coll) {
        return coll.insert({_id: 30841,str: "Refined Metal Shoes Money Market Account models",num: 64744,date: new Date("2018-09-06T07:21:45.142Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30842,str: "access",num: 7687,date: new Date("2018-09-06T02:02:57.160Z"),array: [],obj: {_id: 30843,str: "hard drive success Fantastic Soft Pants",num: 72302,date: new Date("2018-09-06T18:37:13.487Z"),array: [[20900],new Date("2018-09-05T21:03:36.372Z"),{_id: 30844,str: "Chips",num: 2707,date: new Date("2018-09-06T19:21:11.629Z"),array: [],obj: {}},{_id: 30845,num: 51465,date: new Date("2018-09-06T15:12:12.313Z"),array: ["Investment Account wireless synthesizing",21653],obj: {}},new Date("2018-09-06T07:11:07.945Z"),"Vietnam Falls",new Date("2018-09-06T12:27:38.791Z"),[new Date("2018-09-06T00:32:49.327Z")],"Program parsing",16354,"modular",{_id: 30846,array: ["Cotton",82653,"efficient Cambridgeshire withdrawal"],obj: {_id: 30847,str: "Loop Optimized",num: 3664,date: new Date("2018-09-06T16:49:49.262Z"),obj: {}}},new Date("2018-09-06T05:56:46.845Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 30848,str: "optical port Generic",num: 63807,date: new Date("2018-09-06T02:10:21.808Z"),array: [],obj: {_id: 30849,str: "Practical Rubber Chips robust Squares",num: 8877,date: new Date("2018-09-06T02:18:53.384Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30850,str: "Sports",num: 52661,date: new Date("2018-09-06T06:29:05.496Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30851,str: "Vatu Regional Small Rubber Computer",num: 48878,date: new Date("2018-09-06T10:46:15.767Z"),array: ["Fish Assurance",1127,77458,new Date("2018-09-05T23:36:26.643Z"),"Enterprise-wide PCI",{_id: 30852,str: "web services",num: 29608,date: new Date("2018-09-06T17:40:13.333Z"),array: [],obj: {}},"South Carolina",new Date("2018-09-06T07:17:32.768Z"),72782],obj: {_id: 30853,str: "Tuna Bermuda Fresh",date: new Date("2018-09-06T08:10:00.850Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30854,str: "Ergonomic Soft Gloves Toys",num: 1717,date: new Date("2018-09-06T16:30:30.521Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30855,str: "Licensed Soft Shirt Assurance Bahraini Dinar",num: 10028,date: new Date("2018-09-06T07:38:09.356Z"),array: [new Date("2018-09-06T05:32:33.729Z"),"Auto Loan Account Baby Cuba",78946,54188,"markets",13917,new Date("2018-09-06T18:30:41.724Z"),new Date("2018-09-06T01:12:02.491Z"),"Ridge card Savings Account",85384,"explicit scalable schemas",{_id: 30856,str: "Concrete",num: 12732,date: new Date("2018-09-05T21:46:54.086Z"),array: [],obj: {}}],obj: {_id: 30857,date: new Date("2018-09-06T13:59:22.985Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30858,str: "Pizza Web radical",num: 38691,date: new Date("2018-09-06T06:34:06.805Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30859,str: "bi-directional payment partnerships",num: 47580,date: new Date("2018-09-06T00:26:11.084Z"),obj: {_id: 30860,str: "Liaison Wooden",array: [new Date("2018-09-05T20:53:30.470Z"),"Polarised morph",16602,{_id: 30861,str: "transmitting",num: 12800,date: new Date("2018-09-05T22:27:56.107Z"),array: ["Home Wyoming Factors"]},new Date("2018-09-06T19:47:08.856Z"),[],"Mobility indexing Dynamic",new Date("2018-09-06T11:57:32.486Z"),58831,new Date("2018-09-05T22:36:28.850Z"),{_id: 30862,date: new Date("2018-09-06T09:03:42.388Z"),obj: {}},new Date("2018-09-05T22:50:30.341Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 30863,str: "Concrete Marshall Islands Bedfordshire",num: 55609,date: new Date("2018-09-06T03:31:25.899Z"),array: [],obj: {_id: 30864,str: "artificial intelligence",date: new Date("2018-09-06T06:14:20.697Z"),obj: {_id: 30865,str: "asynchronous deploy quantify",num: 3062,date: new Date("2018-09-06T07:33:49.571Z"),array: ["Michigan SCSI PNG","Chips contingency",24299,59078,[],new Date("2018-09-06T11:04:28.369Z"),new Date("2018-09-06T02:19:00.375Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30866,str: "cross-platform back-end South Carolina",num: 17855,date: new Date("2018-09-06T09:01:38.770Z"),array: ["Stream digital","dot-com Customer knowledge base",43597,"Taiwan Dynamic",new Date("2018-09-06T03:52:07.139Z"),48280,new Date("2018-09-06T14:53:37.082Z"),[65572,new Date("2018-09-06T16:34:18.581Z")],5800,[],{_id: 30867,num: 77604,date: new Date("2018-09-06T11:30:24.870Z"),array: ["Avon deliverables",{_id: 30868,str: "dot-com Antarctica (the territory South of 60 deg S)",num: 21054,date: new Date("2018-09-06T12:30:10.505Z"),obj: {_id: 30869,str: "Cotton transparent",num: 44743,date: new Date("2018-09-05T22:44:56.767Z"),array: [],obj: {}}}],obj: {}}],obj: {_id: 30870,str: "schemas XSS",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30871,date: new Date("2018-09-06T13:55:52.384Z"),array: [],obj: {_id: 30872,str: "Operative",num: 17490,date: new Date("2018-09-06T05:16:58.849Z"),array: [68720,"Handcrafted Ergonomic Wooden Shoes Liaison",94026,new Date("2018-09-06T18:09:03.144Z"),"Naira Berkshire",45697,new Date("2018-09-06T14:01:35.868Z"),[],new Date("2018-09-06T16:00:37.920Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30873,str: "Cambridgeshire indexing",num: 79048,date: new Date("2018-09-05T22:15:57.245Z"),array: ["Knolls Health","background","applications",new Date("2018-09-06T15:36:27.067Z"),new Date("2018-09-06T16:26:19.653Z"),89330,new Date("2018-09-06T13:22:08.580Z"),96866,38740,[],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30874,str: "Syrian Pound",num: 42814,date: new Date("2018-09-06T05:51:19.968Z"),array: [],obj: {_id: 30875,num: 72645,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30876,str: "Tools Bedfordshire asynchronous",num: 59501,date: new Date("2018-09-06T01:32:26.926Z"),array: [],obj: {_id: 30877,str: "Gardens synergistic Savings Account",num: 30632,date: new Date("2018-09-06T13:07:08.560Z"),array: [new Date("2018-09-06T13:10:01.301Z"),"microchip Customer","robust",new Date("2018-09-06T01:16:52.382Z"),"e-business panel","Ways",71863,57518],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30878,str: "supply-chains",num: 82895,date: new Date("2018-09-06T13:25:23.572Z"),array: [new Date("2018-09-06T00:34:51.752Z"),new Date("2018-09-06T10:22:12.474Z"),"Multi-channelled architect",8942,78646,"web-enabled",52524,["Grenada Seamless","PCI Corporate"],98982,{_id: 30879,str: "invoice invoice Auto Loan Account",num: 98954,date: new Date("2018-09-06T00:59:07.906Z"),obj: {_id: 30880,str: "Intelligent Unbranded turn-key",date: new Date("2018-09-06T14:45:58.134Z"),array: [],obj: {}}},{_id: 30881,num: 82731,date: new Date("2018-09-06T09:41:17.393Z"),array: []},38396,new Date("2018-09-06T05:51:36.330Z")],obj: {_id: 30882,str: "Dynamic invoice",num: 3187}});
    },

    function(coll) {
        return coll.insert({_id: 30883,num: 31341,date: new Date("2018-09-06T15:28:09.337Z"),array: [[],17196,"Computer red Alabama",new Date("2018-09-05T22:40:21.575Z"),new Date("2018-09-05T23:30:27.702Z"),"Internal","Chair Infrastructure",{_id: 30884,str: "bypass function",num: 28166,date: new Date("2018-09-06T17:57:57.612Z"),array: [46075,new Date("2018-09-06T15:07:05.737Z"),45747,new Date("2018-09-06T15:04:03.769Z")],obj: {}},98270,"Chair 24 hour primary",{_id: 30885,str: "Licensed Bedfordshire program",num: 21539,array: [],obj: {_id: 30886,str: "indexing Minnesota Plaza",num: 40325,date: new Date("2018-09-06T13:46:40.968Z"),array: [[71237,{_id: 30887,str: "Money Market Account Wooden Chicken",date: new Date("2018-09-06T16:43:32.468Z"),obj: {}}],"JBOD Small Granite Ball Response","Harbor National",{_id: 30888,str: "integrated Practical Cotton Pants Hungary",num: 53402,date: new Date("2018-09-06T12:36:46.573Z")}]}}]});
    },

    function(coll) {
        return coll.insert({_id: 30889,str: "calculate Ohio",num: 62920,date: new Date("2018-09-06T00:49:00.453Z"),obj: {_id: 30890,num: 13912,date: new Date("2018-09-06T17:08:20.513Z"),array: ["3rd generation synthesize",{_id: 30891,str: "Malawi",num: 9562,array: [],obj: {_id: 30892,str: "e-business",date: new Date("2018-09-06T09:38:16.983Z"),obj: {}}},38894,"Costa Rican Colon",96881,[[],new Date("2018-09-06T08:01:29.791Z"),new Date("2018-09-06T03:42:00.556Z"),"Forward dedicated purple",45215],"revolutionize",{_id: 30893,num: 68885,date: new Date("2018-09-05T20:15:34.203Z"),array: [[],new Date("2018-09-06T15:51:03.323Z")],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 30894,str: "Developer harness",num: 42505,array: [94023,new Date("2018-09-05T21:36:03.105Z"),"Corporate Loaf navigating",8142,[],[],[],new Date("2018-09-06T18:58:01.899Z"),{_id: 30895,str: "online deposit back up",date: new Date("2018-09-06T00:33:33.579Z"),obj: {_id: 30896,num: 42172,array: [new Date("2018-09-06T02:55:03.117Z")],obj: {_id: 30897,str: "Valleys",num: 2135,date: new Date("2018-09-06T05:53:49.974Z"),array: ["SQL COM Incredible",{_id: 30898,str: "quantify grey web-readiness",num: 2169,date: new Date("2018-09-06T05:49:25.131Z")},"networks",15806],obj: {}}}},new Date("2018-09-06T19:50:00.219Z"),"Fantastic Rubber Sausages Latvian Lats Fantastic Metal Chair"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30899,str: "Small Innovative",num: 18286,date: new Date("2018-09-05T20:09:35.040Z"),array: [],obj: {_id: 30900,str: "Practical Granite Tuna",num: 75154,date: new Date("2018-09-06T10:25:09.914Z"),array: [[],new Date("2018-09-06T17:06:51.710Z"),new Date("2018-09-06T19:46:54.320Z"),"solid state interfaces sky blue",21487,"Run Mobility",32434,{_id: 30901,date: new Date("2018-09-06T00:05:30.119Z"),array: [],obj: {_id: 30902,str: "Granite Pizza",date: new Date("2018-09-06T18:00:12.116Z"),array: ["program Turks and Caicos Islands Well"]}},15694,[new Date("2018-09-06T00:41:49.130Z"),"invoice Paradigm",new Date("2018-09-05T20:46:40.801Z"),50389,new Date("2018-09-06T15:20:14.293Z")],[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30903,str: "invoice invoice SSL",num: 94846,date: new Date("2018-09-06T00:05:14.024Z"),array: [new Date("2018-09-06T02:35:24.480Z"),"User-centric Kyrgyz Republic Incredible Concrete Bike",new Date("2018-09-06T04:49:40.642Z"),new Date("2018-09-06T01:09:13.364Z"),6318,"customized","Bedfordshire Mali",{_id: 30904,str: "Investment Account",num: 83818,date: new Date("2018-09-06T09:54:19.387Z"),array: [],obj: {}},"ubiquitous Wooden","Personal Loan Account",[new Date("2018-09-06T08:13:05.146Z")],93612],obj: {_id: 30905,date: new Date("2018-09-06T18:51:20.597Z"),array: [],obj: {_id: 30906,num: 51077,date: new Date("2018-09-06T01:23:56.967Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 30907,str: "methodology",num: 32155,date: new Date("2018-09-06T12:16:39.753Z"),array: ["New Jersey",new Date("2018-09-06T14:22:48.689Z"),"Cambridgeshire Orchestrator",60909,new Date("2018-09-06T16:57:10.830Z"),97683,[],44717,[],[68630],"Gorgeous Books Refined",62222],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30908,str: "silver Saint Helena",num: 45890,date: new Date("2018-09-06T15:24:01.852Z"),array: [15346,28794,92134,new Date("2018-09-06T08:13:48.084Z"),40419,"schemas",new Date("2018-09-06T14:32:21.375Z"),new Date("2018-09-06T02:43:24.497Z"),"Fantastic Wooden Towels Bedfordshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30909,str: "olive schemas",num: 20407,date: new Date("2018-09-06T17:29:34.306Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30910,num: 16463,date: new Date("2018-09-06T16:28:48.472Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30911,str: "Berkshire",num: 51069,date: new Date("2018-09-06T16:55:59.627Z"),array: [],obj: {_id: 30912,str: "deposit pixel",num: 16748,date: new Date("2018-09-06T15:23:11.082Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30913,str: "capacitor infomediaries",num: 30975,date: new Date("2018-09-06T14:14:32.572Z"),array: [],obj: {_id: 30914,str: "groupware",num: 83350,date: new Date("2018-09-05T22:03:57.143Z"),obj: {_id: 30915,num: 83591,date: new Date("2018-09-06T14:03:09.420Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 30916,str: "Rubber PCI Home",num: 88436,date: new Date("2018-09-06T12:29:14.871Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30917,str: "Uzbekistan Sum Indiana",date: new Date("2018-09-06T13:07:15.614Z"),array: [],obj: {_id: 30918,str: "didactic communities",num: 76752,date: new Date("2018-09-05T23:50:00.005Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30919,str: "reboot",num: 82799,date: new Date("2018-09-06T03:22:23.637Z"),array: [],obj: {_id: 30920,str: "Credit Card Account Syrian Pound Turkish Lira",num: 89067,date: new Date("2018-09-06T05:43:45.287Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30921,str: "Vision-oriented Borders Universal",num: 28989,date: new Date("2018-09-06T17:33:07.764Z"),array: [47597,[],"Lead","Singapore Dollar utilize RAM",new Date("2018-09-06T12:59:24.793Z"),"grow",new Date("2018-09-06T15:13:52.729Z"),{_id: 30922,str: "Serbian Dinar client-driven",num: 8223,date: new Date("2018-09-06T02:21:44.307Z"),obj: {}},new Date("2018-09-06T18:57:58.150Z"),["payment","Savings Account"],3322,92839],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30923,str: "Hat",num: 38937,date: new Date("2018-09-06T18:13:49.559Z"),array: [new Date("2018-09-06T12:10:08.742Z"),"Generic service-desk",new Date("2018-09-05T21:01:12.726Z"),44415,"Designer",34803,new Date("2018-09-06T03:16:21.895Z"),new Date("2018-09-06T01:11:31.786Z"),"full-range Soft",20671,{_id: 30924,num: 59439,date: new Date("2018-09-06T10:04:56.522Z"),array: [{_id: 30925,str: "Fresh deposit Pines",date: new Date("2018-09-05T22:04:49.498Z"),array: [77174,[new Date("2018-09-06T18:52:22.507Z"),new Date("2018-09-06T00:26:43.851Z"),[]]]}],obj: {}},"Russian Ruble Research Optimized",{_id: 30926,str: "Manager",num: 5144,date: new Date("2018-09-06T16:05:45.780Z"),array: [new Date("2018-09-06T07:28:04.337Z"),[]],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30927,str: "black",num: 4234,date: new Date("2018-09-06T05:57:30.018Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30928,str: "teal Global Locks",num: 47970,date: new Date("2018-09-05T22:59:02.790Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30929,str: "ADP bluetooth",num: 67185,date: new Date("2018-09-06T08:37:10.033Z"),array: [new Date("2018-09-05T21:15:32.863Z"),[],{_id: 30930,str: "firewall streamline",num: 86505,array: ["Chief ADP",new Date("2018-09-05T20:48:59.027Z")]},52120,{_id: 30931,num: 22359,date: new Date("2018-09-06T19:21:22.562Z"),array: [32079,{_id: 30932,str: "Mauritius Rupee",date: new Date("2018-09-06T11:14:32.617Z"),obj: {_id: 30933,str: "COM Tasty Wooden Pizza",date: new Date("2018-09-05T22:31:09.184Z"),array: [],obj: {_id: 30934,num: 72519,date: new Date("2018-09-06T09:06:56.592Z"),array: []}}}],obj: {}},{_id: 30935,str: "input override CSS",num: 7835,date: new Date("2018-09-05T22:57:54.813Z"),array: [],obj: {}},"AI Idaho",new Date("2018-09-06T19:24:21.383Z"),[91728,new Date("2018-09-06T14:56:35.479Z")],12986,"4th generation",59316,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30936,str: "mobile Tasty",num: 87529,date: new Date("2018-09-05T23:33:27.657Z"),array: [],obj: {_id: 30937,str: "salmon",num: 33658,date: new Date("2018-09-06T00:23:23.194Z"),array: [62324,new Date("2018-09-06T17:09:06.600Z"),new Date("2018-09-06T05:42:44.893Z"),new Date("2018-09-05T21:48:32.468Z"),{_id: 30938,str: "Re-contextualized",date: new Date("2018-09-05T21:09:17.061Z"),array: [["Iowa","system-worthy e-tailers calculating",new Date("2018-09-05T21:15:16.492Z"),"regional Cliff"]],obj: {}},2001,98209,"Armenian Dram interactive",{_id: 30939,str: "applications generating",num: 20523,date: new Date("2018-09-06T16:42:53.759Z"),array: ["e-services",{_id: 30940,obj: {_id: 30941,str: "capacity",num: 31295,date: new Date("2018-09-06T01:18:31.961Z"),array: [],obj: {_id: 30942,num: 58581,date: new Date("2018-09-06T11:06:48.227Z"),array: []}}}]},"Louisiana Avon",65223,24109,23776],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30943,str: "Island",num: 62087,date: new Date("2018-09-06T06:59:03.742Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30944,str: "European Unit of Account 17(E.U.A.-17) primary",num: 75390,date: new Date("2018-09-06T13:03:50.942Z"),array: [],obj: {_id: 30945,str: "Expressway integrate",date: new Date("2018-09-06T05:19:03.317Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30946,str: "tertiary Borders",num: 42365,array: [{_id: 30947,num: 61158,date: new Date("2018-09-06T13:00:02.223Z"),array: [],obj: {_id: 30948,str: "SDD Open-source",date: new Date("2018-09-06T14:33:15.533Z"),obj: {}}},40997,"actuating","cohesive","transmit Legacy responsive","Taka compress",49655,new Date("2018-09-06T04:06:35.108Z"),[63188,new Date("2018-09-06T08:49:51.512Z"),{_id: 30949,str: "explicit plum",num: 89994,date: new Date("2018-09-06T19:01:42.912Z"),obj: {}},[]],new Date("2018-09-06T01:13:35.340Z"),{_id: 30950,str: "Incredible Books",date: new Date("2018-09-06T05:20:13.557Z"),array: [],obj: {_id: 30951,str: "Customizable",num: 6745,array: []}}],obj: {_id: 30952,num: 76892,date: new Date("2018-09-05T20:24:23.507Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 30953,str: "transmitter Handmade Soap",num: 90691,date: new Date("2018-09-06T05:50:52.109Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30954,str: "technologies Managed Avon",num: 62187,date: new Date("2018-09-06T05:21:04.051Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30955,str: "Operations",num: 53149,date: new Date("2018-09-06T05:12:06.775Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30956,str: "Honduras Madagascar National",num: 91540,date: new Date("2018-09-06T12:31:38.498Z"),array: [{_id: 30957,str: "Costa Rica Bedfordshire quantify",num: 86024,date: new Date("2018-09-06T16:52:31.514Z"),array: ["Lead",new Date("2018-09-06T13:46:02.423Z")]},2945,"Facilitator Generic",new Date("2018-09-06T09:50:36.473Z"),{_id: 30958,str: "Japan Somali Shilling",num: 16909,date: new Date("2018-09-06T10:48:03.548Z"),array: []},[],[new Date("2018-09-06T11:04:34.772Z"),94170,90323,new Date("2018-09-06T19:55:26.831Z"),97943,"withdrawal Cotton Monitored",98575],["hack Berkshire"],{_id: 30959,date: new Date("2018-09-06T14:22:49.090Z"),array: [],obj: {}},"monitoring Home Loan Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30960,str: "copy Multi-channelled",num: 97415,date: new Date("2018-09-06T04:32:53.281Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30961,str: "infrastructures Station deposit",num: 80278,date: new Date("2018-09-06T12:12:07.681Z"),array: [[new Date("2018-09-06T16:48:35.667Z"),23682,32907,{_id: 30962,str: "Tuna cross-platform seize",num: 34949,date: new Date("2018-09-06T17:51:26.026Z"),array: [],obj: {_id: 30963,str: "Yemen",num: 27404,array: [],obj: {_id: 30964,str: "Spring granular Bedfordshire",num: 28062,obj: {}}}}],98428,"HDD Investment Account",new Date("2018-09-06T09:56:02.584Z"),"Refined",new Date("2018-09-06T14:09:19.534Z"),new Date("2018-09-05T22:32:10.077Z"),["Square 6th generation",[{_id: 30965,str: "Garden Director",date: new Date("2018-09-05T21:31:07.826Z"),obj: {}}],"card District New Leu"],4080,new Date("2018-09-06T01:45:57.056Z"),[56492,{_id: 30966,array: []}],"archive"],obj: {_id: 30967,num: 51006,date: new Date("2018-09-05T21:01:45.775Z"),obj: {_id: 30968,str: "Walks metrics Alabama",num: 11980,date: new Date("2018-09-06T19:52:46.670Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 30969,str: "revolutionize Small Frozen",num: 50949,date: new Date("2018-09-06T16:01:28.007Z"),obj: {_id: 30970,num: 62689,date: new Date("2018-09-06T08:26:30.237Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30971,str: "secondary synthesizing",num: 4669,date: new Date("2018-09-06T13:33:57.632Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30972,num: 36044,date: new Date("2018-09-06T09:35:32.522Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30973,str: "Plains",num: 35191,date: new Date("2018-09-06T09:45:45.505Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 30974,str: "Legacy hub Credit Card Account",num: 11361,date: new Date("2018-09-06T13:12:37.749Z"),array: ["Supervisor",38719,new Date("2018-09-06T06:15:09.742Z"),"Tools",18036,[]],obj: {_id: 30975,str: "Handmade",num: 68115,date: new Date("2018-09-06T16:56:39.505Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 30976,str: "synthesizing Lane",num: 24803,date: new Date("2018-09-06T17:56:33.314Z"),array: [new Date("2018-09-06T19:05:48.211Z"),"Coves Fork compressing",61316,[],"high-level Grocery Computer",new Date("2018-09-06T09:17:00.556Z"),76635,{_id: 30977,str: "feed Auto Loan Account",num: 52254,date: new Date("2018-09-06T18:40:02.638Z"),obj: {_id: 30978,str: "Puerto Rico encoding e-commerce",num: 43077,date: new Date("2018-09-06T13:24:12.343Z"),array: [],obj: {}}},{_id: 30979,str: "SSL calculate",date: new Date("2018-09-06T02:52:16.428Z"),array: ["backing up","online",51837],obj: {}},{_id: 30980,str: "Soap",num: 58771},new Date("2018-09-05T23:10:50.079Z"),59962,[]]});
    },

    function(coll) {
        return coll.insert({_id: 30981,str: "Phased pink Cuban Peso Peso Convertible",num: 79608,date: new Date("2018-09-06T08:35:52.256Z"),array: [61112,["Customer","e-tailers gold bandwidth",[],"1080p Grocery"],new Date("2018-09-06T08:31:45.420Z"),{_id: 30982,num: 23823,array: [80118,40439,new Date("2018-09-06T14:43:42.287Z"),new Date("2018-09-06T18:24:44.620Z"),{_id: 30983,num: 78415,date: new Date("2018-09-06T14:01:49.254Z"),array: [],obj: {_id: 30984,str: "Rustic Ferry",date: new Date("2018-09-05T22:10:39.836Z"),array: []}}],obj: {}},"Center","definition Baht",40365,11140,new Date("2018-09-05T22:35:16.958Z"),50711],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30985,num: 62158,date: new Date("2018-09-06T07:32:50.482Z"),array: ["Cambridgeshire Beauty",40509,new Date("2018-09-06T07:25:30.394Z"),[],1257,{_id: 30986,str: "quantify bypassing",num: 55551,date: new Date("2018-09-06T17:59:08.412Z"),array: [],obj: {_id: 30987,num: 57937,date: new Date("2018-09-06T15:00:29.624Z"),array: [],obj: {}}},"Games static bus",new Date("2018-09-06T01:38:24.358Z"),"Car Tennessee Persistent",77307],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30988,str: "Argentine Peso Moroccan Dirham Auto Loan Account",num: 19245,date: new Date("2018-09-06T12:28:44.922Z"),array: [14154,new Date("2018-09-06T02:15:02.350Z"),8798,"parallelism",new Date("2018-09-06T18:54:49.508Z"),new Date("2018-09-06T14:11:12.286Z"),new Date("2018-09-05T21:06:33.829Z"),[],25232,[],new Date("2018-09-05T22:10:26.801Z"),91208],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30989,str: "open-source withdrawal",num: 45298,array: [],obj: {_id: 30990,str: "cohesive",num: 19016,date: new Date("2018-09-06T13:02:20.042Z"),obj: {_id: 30991,str: "Incredible Rubber Towels monetize",num: 1548,array: [[],{_id: 30992,date: new Date("2018-09-06T10:37:07.828Z"),array: ["full-range partnerships",{_id: 30993,str: "Jordan Tasty Concrete Cheese invoice",num: 86565,date: new Date("2018-09-06T02:58:34.686Z"),obj: {}},85874,17373],obj: {}},new Date("2018-09-06T02:02:20.855Z"),[],new Date("2018-09-06T13:16:45.059Z"),7718,new Date("2018-09-05T22:56:23.459Z"),{_id: 30994,str: "Tactics digital",date: new Date("2018-09-05T23:11:27.675Z"),array: [],obj: {}},"azure Internal Generic","ADP",[{_id: 30995,num: 86417,date: new Date("2018-09-06T06:06:24.481Z"),array: [63176,97834]}],"maximize"]}}});
    },

    function(coll) {
        return coll.insert({_id: 30996,num: 46718,date: new Date("2018-09-06T16:13:50.878Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 30997,str: "Awesome transmitting",num: 16743,date: new Date("2018-09-06T18:19:17.989Z"),array: ["object-oriented upward-trending Borders",[],new Date("2018-09-06T18:46:19.719Z"),{_id: 30998,num: 63997,date: new Date("2018-09-05T22:32:44.556Z"),array: []},new Date("2018-09-06T17:25:16.992Z"),"Granite Auto Loan Account",87997,{_id: 30999,str: "Borders Berkshire Open-source",date: new Date("2018-09-06T14:24:46.262Z"),array: [],obj: {_id: 31000,str: "methodologies",date: new Date("2018-09-06T04:04:35.833Z"),obj: {_id: 31001,str: "Canada Maryland",num: 7094,array: [new Date("2018-09-06T14:51:30.625Z")],obj: {_id: 31002,num: 92343,array: ["Computer withdrawal Product",["solid state Refined"],23550],obj: {}}}}},{_id: 31003,num: 29653,date: new Date("2018-09-05T23:57:22.048Z"),array: []},new Date("2018-09-06T00:40:21.238Z"),67821,new Date("2018-09-06T01:30:49.278Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31004,str: "hard drive generating New York",num: 33462,date: new Date("2018-09-06T15:18:38.012Z"),array: [[],14281,new Date("2018-09-06T07:08:18.015Z"),"impactful compressing","magnetic","strategize Computers Investment Account",58794,"Money Market Account enable Oklahoma",new Date("2018-09-06T04:40:09.683Z"),new Date("2018-09-06T02:46:07.768Z"),new Date("2018-09-06T03:42:28.781Z"),{_id: 31005,str: "Refined Oregon payment",num: 60208,date: new Date("2018-09-06T01:32:00.508Z"),obj: {_id: 31006,str: "SQL",num: 44625,date: new Date("2018-09-05T23:09:09.355Z"),array: [[{_id: 31007,num: 41798,array: []},93631,new Date("2018-09-05T23:53:16.414Z")]],obj: {}}}],obj: {_id: 31008,str: "ROI cross-platform East Caribbean Dollar",array: [[]],obj: {_id: 31009,str: "Refined Plastic Pants Alaska",num: 20373,date: new Date("2018-09-06T06:10:19.076Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 31010,str: "North Carolina",num: 92822,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31011,str: "contextually-based",num: 79136,date: new Date("2018-09-05T21:44:25.377Z"),array: [18850,"Handmade",new Date("2018-09-06T16:29:53.088Z"),[],"Tactics extensible Tasty Rubber Pants",new Date("2018-09-06T19:48:51.667Z"),[],"Persevering",new Date("2018-09-06T01:09:18.067Z"),56829,"navigating maximize Customizable"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31012,num: 10776,date: new Date("2018-09-06T14:16:17.831Z"),array: [new Date("2018-09-06T04:08:47.892Z"),60599,new Date("2018-09-05T21:13:56.412Z"),87340,"Car AI",new Date("2018-09-06T16:49:14.313Z"),[{_id: 31013,str: "Cambridgeshire Paradigm",date: new Date("2018-09-06T06:58:53.153Z"),array: [],obj: {_id: 31014,str: "payment",num: 45666,array: [],obj: {}}},"solid state hacking",62674,[]],{_id: 31015,str: "orchid 24/7",num: 82564,date: new Date("2018-09-06T07:19:49.315Z"),array: ["Expanded interface Devolved",44527,"invoice Fords generate"],obj: {_id: 31016,str: "Lek Berkshire Australian Dollar",num: 26343,obj: {}}},new Date("2018-09-05T21:15:42.967Z"),"Boliviano Mvdol Direct Money Market Account"]});
    },

    function(coll) {
        return coll.insert({_id: 31017,str: "input",num: 31614,date: new Date("2018-09-06T03:24:12.072Z"),array: [52865,new Date("2018-09-06T09:03:06.308Z"),46774,11945,"human-resource Gorgeous Cotton Hat Investment Account",new Date("2018-09-06T03:38:26.474Z"),[],{_id: 31018,str: "Causeway Creative",num: 56650,date: new Date("2018-09-06T02:52:55.133Z"),obj: {}},[],"mobile Clothing quantifying",new Date("2018-09-06T00:40:12.920Z"),"Ergonomic Frozen Pizza",30537],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31019,str: "Handmade Granite Fish Profit-focused user-centric",date: new Date("2018-09-06T09:36:45.085Z"),array: [],obj: {_id: 31020,str: "Fantastic Maine deliver",num: 54023,date: new Date("2018-09-06T15:50:35.478Z"),array: [[new Date("2018-09-06T01:48:57.623Z")],87181,"Ergonomic Branding Functionality",new Date("2018-09-06T11:15:54.721Z"),"transmitter",[],"Course","Mouse",{_id: 31021,num: 7197,date: new Date("2018-09-06T12:33:46.881Z"),array: [30098,new Date("2018-09-06T04:17:17.385Z")]},{_id: 31022,str: "Nebraska envisioneer generate",num: 5265,date: new Date("2018-09-05T23:30:39.951Z"),array: [13383,new Date("2018-09-06T14:32:48.603Z")],obj: {}},[59949,new Date("2018-09-06T04:43:07.018Z"),25054,["Soap Alabama"],62088],[],"Michigan Northern Mariana Islands"],obj: {_id: 31023,num: 99717,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 31024,str: "redundant",num: 53463,date: new Date("2018-09-06T08:43:43.601Z"),array: [{_id: 31025,num: 98136,date: new Date("2018-09-06T09:38:34.236Z"),array: [],obj: {}},[],new Date("2018-09-06T13:41:14.759Z"),new Date("2018-09-06T10:46:12.999Z"),new Date("2018-09-06T04:01:51.717Z"),"Coordinator Licensed",43824,"cultivate Associate Organized"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31026,str: "Harbors wireless salmon",num: 19760,date: new Date("2018-09-06T17:10:50.277Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31027,str: "action-items circuit",date: new Date("2018-09-06T15:34:28.745Z"),array: ["program e-markets",83285,[],new Date("2018-09-05T23:22:32.188Z"),new Date("2018-09-05T23:15:38.208Z"),new Date("2018-09-05T20:12:12.904Z"),68086,[79271,"Utah",new Date("2018-09-06T02:29:37.798Z")],{_id: 31028,str: "Shoes Future mindshare",num: 26580,date: new Date("2018-09-05T23:59:35.010Z"),array: [],obj: {}},"haptic Designer Maryland",new Date("2018-09-06T14:06:01.926Z"),{_id: 31029,str: "Awesome Cliff",num: 70545,date: new Date("2018-09-06T11:10:10.967Z"),array: [],obj: {_id: 31030,num: 23847,date: new Date("2018-09-06T00:29:36.380Z"),array: [],obj: {_id: 31031,str: "experiences",num: 56594,date: new Date("2018-09-06T17:05:26.308Z"),obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31032,str: "Sleek XML Intuitive",num: 4376,date: new Date("2018-09-06T03:28:29.544Z"),array: [new Date("2018-09-06T12:16:49.296Z"),"withdrawal Sleek Plastic Hat",69721,67840,new Date("2018-09-06T18:14:38.362Z"),{_id: 31033,str: "SMS asynchronous",date: new Date("2018-09-06T13:05:42.089Z"),obj: {_id: 31034,str: "Savings Account generating",num: 20450,array: [],obj: {}}},"frictionless online challenge","supply-chains convergence red",new Date("2018-09-06T17:03:09.101Z"),new Date("2018-09-06T16:19:39.440Z")]});
    },

    function(coll) {
        return coll.insert({_id: 31035,str: "Toys Intelligent Pula",num: 85972,date: new Date("2018-09-06T01:49:09.211Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31036,str: "back up system Directives",num: 59157,date: new Date("2018-09-06T13:11:05.765Z"),array: [new Date("2018-09-06T13:22:38.950Z"),new Date("2018-09-06T07:13:08.014Z"),"mindshare discrete copying","interfaces middleware Orchard",{_id: 31037,num: 95924,date: new Date("2018-09-06T16:34:16.927Z"),array: ["XSS",21697,new Date("2018-09-06T11:14:16.621Z"),78345],obj: {}},{_id: 31038,str: "database copy",date: new Date("2018-09-06T07:45:15.156Z"),obj: {_id: 31039,str: "strategy Integration",num: 80577,array: []}},[],new Date("2018-09-06T09:50:13.925Z"),36672,[],{_id: 31040,str: "Tools United States of America Licensed",num: 65336,date: new Date("2018-09-06T00:35:27.293Z"),array: ["bypass Human",new Date("2018-09-06T11:47:44.656Z"),{_id: 31041,str: "generate",num: 26604,array: [[11478]],obj: {}},82630],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 31042,str: "matrix withdrawal",num: 42221,array: [],obj: {_id: 31043,str: "Garden impactful driver",num: 24385,date: new Date("2018-09-06T14:23:09.670Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 31044,num: 2332,date: new Date("2018-09-06T10:30:49.559Z"),array: ["hacking",new Date("2018-09-06T17:26:43.689Z"),{_id: 31045,str: "Buckinghamshire",num: 71075,array: [],obj: {_id: 31046,str: "mesh",date: new Date("2018-09-06T15:05:29.706Z"),array: [],obj: {_id: 31047,str: "deposit application Norwegian Krone",num: 20905,array: [31386,"Fantastic",new Date("2018-09-05T21:59:59.581Z")],obj: {}}}},"best-of-breed Village",65338,new Date("2018-09-06T03:50:52.854Z"),"Implementation Investor",69749],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31048,str: "Chief Intranet",num: 98248,date: new Date("2018-09-06T02:42:57.908Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31049,num: 41404,date: new Date("2018-09-06T08:12:14.392Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31050,str: "global",num: 63911,date: new Date("2018-09-06T09:20:26.247Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31051,str: "installation back-end capacitor",num: 40079,date: new Date("2018-09-06T12:36:49.918Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31052,str: "Canyon",num: 27038,date: new Date("2018-09-06T09:58:45.678Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31053,str: "convergence",date: new Date("2018-09-06T12:50:37.298Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31054,str: "Automotive",num: 37740,date: new Date("2018-09-06T06:49:02.676Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31055,str: "Handcrafted Frozen Car Italy Plastic",num: 27293,date: new Date("2018-09-06T14:25:43.500Z"),array: [],obj: {_id: 31056,num: 4057,date: new Date("2018-09-05T23:50:56.270Z"),array: [],obj: {_id: 31057,str: "metrics Customer",num: 79299,date: new Date("2018-09-06T01:56:48.401Z"),array: [40013,{_id: 31058,str: "Intranet PNG Oregon",num: 87394,date: new Date("2018-09-06T07:39:33.764Z"),array: [new Date("2018-09-06T13:14:21.316Z"),42582]},"systematic Arizona",new Date("2018-09-06T05:02:43.810Z"),"monitor infrastructures",["Netherlands Antillian Guilder Granite Generic Cotton Table"],new Date("2018-09-05T22:35:45.204Z"),6300,48905,new Date("2018-09-06T05:10:42.223Z"),88328,96635,"South Dakota"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 31059,str: "Light Home Supervisor",num: 17142,date: new Date("2018-09-06T09:41:45.135Z"),array: [new Date("2018-09-06T11:00:46.460Z"),81848,[],new Date("2018-09-05T19:57:55.044Z"),["Technician unleash",23050,45746],60720,{_id: 31060,str: "background Bike Corporate",num: 3746,date: new Date("2018-09-06T17:53:46.472Z"),obj: {}},new Date("2018-09-06T11:44:52.991Z"),"radical relationships Granite","invoice regional",new Date("2018-09-05T23:23:29.862Z")],obj: {_id: 31061,str: "Intelligent indexing",date: new Date("2018-09-06T09:47:35.312Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 31062,str: "Customer Creek",num: 4656,date: new Date("2018-09-06T00:47:26.269Z"),array: [70718,new Date("2018-09-06T12:39:19.590Z"),"withdrawal",new Date("2018-09-06T00:27:19.230Z"),"Home Loan Account",[],13686,{_id: 31063,str: "Avon",date: new Date("2018-09-06T19:29:19.625Z"),array: [11450,[89520,84545]]},53126,{_id: 31064,str: "workforce",num: 34198,date: new Date("2018-09-06T01:08:07.198Z"),array: [],obj: {_id: 31065,num: 45613,date: new Date("2018-09-05T21:13:03.551Z"),array: [],obj: {}}},new Date("2018-09-06T04:03:17.631Z"),"Rupiah"],obj: {_id: 31066,str: "Connecticut",array: [new Date("2018-09-06T08:16:29.136Z"),"West Virginia Toys"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 31067,str: "intranet Auto Loan Account",num: 54705,date: new Date("2018-09-06T13:53:45.639Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31068,str: "capacitor Supervisor Division",num: 52883,date: new Date("2018-09-05T21:12:25.876Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 31069,str: "United Kingdom user-facing",num: 15837,date: new Date("2018-09-06T04:39:24.547Z"),array: [45901,["Tuna Home Loan Account",{_id: 31070,str: "Steel",num: 75697,date: new Date("2018-09-06T03:10:27.977Z"),array: [],obj: {}}],62225,new Date("2018-09-06T06:12:28.543Z"),new Date("2018-09-06T06:46:21.990Z"),"Malta payment",58797,{_id: 31071,str: "Sleek back up",num: 38773,obj: {_id: 31072,num: 10225,date: new Date("2018-09-06T03:30:59.805Z"),array: [new Date("2018-09-06T10:10:25.780Z")]}},"Buckinghamshire Handmade Plastic Chair connecting",78019,86228,"Infrastructure",{_id: 31073,str: "clear-thinking SDD",date: new Date("2018-09-06T19:39:04.758Z"),array: [new Date("2018-09-06T18:16:23.757Z"),[]],obj: {_id: 31074,str: "Generic Metal Hat system",date: new Date("2018-09-06T03:46:18.237Z"),obj: {}}},new Date("2018-09-06T06:51:35.204Z")],obj: {_id: 31075,num: 29852,array: [],obj: {_id: 31076,num: 81967,date: new Date("2018-09-06T01:06:30.874Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 31077,str: "alliance exploit groupware",num: 30792,date: new Date("2018-09-06T13:11:43.599Z"),array: ["Incredible Concrete Bacon strategic digital",{_id: 31078,str: "24/7 Borders",date: new Date("2018-09-05T22:25:21.127Z"),array: [],obj: {}},67438,12183,new Date("2018-09-06T15:32:37.212Z"),19943,new Date("2018-09-05T20:12:49.651Z"),"Netherlands Antilles Architect transmit",new Date("2018-09-06T17:49:23.282Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 31079,str: "Money Market Account online Hawaii",num: 26736,date: new Date("2018-09-06T19:00:22.282Z"),array: [14247,27298,76666,9487,"synthesize Checking Account silver",new Date("2018-09-06T05:12:20.071Z"),"Future Soap Grocery",{_id: 31080,str: "Grocery",num: 64240,date: new Date("2018-09-06T08:34:02.990Z"),array: [],obj: {}},new Date("2018-09-06T10:39:21.382Z"),[new Date("2018-09-06T05:36:36.274Z"),"product violet interactive",{_id: 31081,str: "neural Buckinghamshire",num: 97741,date: new Date("2018-09-05T22:25:23.418Z"),array: [],obj: {_id: 31082,date: new Date("2018-09-06T08:48:54.897Z"),array: []}}],new Date("2018-09-06T10:19:56.199Z"),[],{_id: 31083,date: new Date("2018-09-06T07:45:47.193Z"),array: ["plum Money Market Account metrics"]},53058],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31084,str: "Security knowledge user e-business",num: 91430,date: new Date("2018-09-06T09:17:03.295Z"),array: [[],98371,new Date("2018-09-06T17:57:40.905Z"),new Date("2018-09-06T01:04:32.126Z"),{_id: 31085,str: "portals Shoes Chicken",num: 43026,date: new Date("2018-09-06T10:08:35.805Z"),array: [],obj: {}},new Date("2018-09-06T07:50:32.137Z"),"Persevering 6th generation","Communications Outdoors","compressing Applications",39387],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31086,str: "Table West Virginia override",num: 78302,date: new Date("2018-09-05T22:19:49.347Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31087,str: "invoice Diverse",num: 99789,date: new Date("2018-09-05T22:21:47.301Z"),array: ["interface",37997,new Date("2018-09-06T17:43:00.869Z"),35454,[],{_id: 31088,str: "database Kentucky Cuba",num: 45542,date: new Date("2018-09-06T01:38:16.805Z"),array: [],obj: {_id: 31089,array: ["Berkshire Practical","Pants",6357],obj: {}}},new Date("2018-09-06T07:59:33.544Z"),new Date("2018-09-06T16:20:35.626Z"),84749,{_id: 31090,str: "Australia copying bandwidth",num: 44563,date: new Date("2018-09-06T07:20:03.492Z"),array: [],obj: {}},"Cameroon Auto Loan Account","even-keeled"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31091,str: "withdrawal alliance",num: 97486,date: new Date("2018-09-05T20:13:36.324Z"),array: [new Date("2018-09-06T03:39:10.184Z"),"red",2481,["GB yellow Cedi",61341,new Date("2018-09-06T17:44:38.243Z"),"Money Market Account extensible",[],36681],new Date("2018-09-06T07:48:07.515Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31092,str: "Incredible interface overriding",num: 45110,date: new Date("2018-09-06T11:03:46.926Z"),array: [29757,new Date("2018-09-06T07:47:22.983Z"),new Date("2018-09-05T20:51:14.606Z"),new Date("2018-09-06T02:14:59.878Z"),[],43035,"Cambridgeshire Myanmar Frozen",74886,[{_id: 31093,str: "evolve",date: new Date("2018-09-06T03:15:21.754Z"),array: [],obj: {}},new Date("2018-09-06T09:34:23.453Z")]],obj: {_id: 31094,str: "Beauty Internal Wyoming",num: 95515,date: new Date("2018-09-06T14:09:50.620Z"),array: ["bandwidth-monitored","tan bypass",50332,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 31095,str: "Tools Kip",num: 45350,date: new Date("2018-09-06T11:14:02.949Z"),array: [],obj: {_id: 31096,str: "Rubber",num: 6079,date: new Date("2018-09-06T13:32:43.565Z"),array: ["Identity Incredible Wooden Sausages generate",30924,new Date("2018-09-06T13:43:06.603Z"),86682,44640,{_id: 31097,str: "Metrics",num: 77439,obj: {_id: 31098,str: "lime Unbranded Manager",num: 79631,array: []}},new Date("2018-09-06T12:44:23.237Z"),new Date("2018-09-06T02:35:28.296Z"),["feed",new Date("2018-09-06T01:22:01.537Z"),"Way transform Senior"],{_id: 31099,date: new Date("2018-09-06T11:41:58.475Z"),array: [],obj: {}},[[63521],"Cotton sensor",81521]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 31100,str: "Berkshire schemas",date: new Date("2018-09-06T01:42:31.200Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31101,str: "moderator Bedfordshire brand",num: 54966,date: new Date("2018-09-06T15:06:28.759Z"),array: [],obj: {_id: 31102,str: "Field Data Money Market Account",date: new Date("2018-09-06T15:54:19.171Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 31103,str: "Borders SQL Markets",num: 58165,date: new Date("2018-09-05T21:16:35.589Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31104,str: "National Facilitator",num: 49027,date: new Date("2018-09-06T07:24:39.004Z"),array: [[{_id: 31105,num: 81533,date: new Date("2018-09-06T13:50:30.567Z"),array: [],obj: {_id: 31106,str: "Dynamic Suriname",num: 72936,date: new Date("2018-09-06T04:43:47.479Z"),obj: {_id: 31107,str: "Brazilian Real index Congolese Franc",num: 21953,array: [35800],obj: {}}}}],31974,"Toys hack Shoes",new Date("2018-09-06T15:29:00.644Z"),new Date("2018-09-06T17:04:20.047Z"),new Date("2018-09-06T08:14:03.502Z"),"Passage Reactive",39273,{_id: 31108,str: "cutting-edge circuit info-mediaries",num: 36761,date: new Date("2018-09-06T06:51:50.058Z")},[],new Date("2018-09-05T21:54:47.084Z"),["Checking Account copying input"],"internet solution HDD","SCSI compress"]});
    },

    function(coll) {
        return coll.insert({_id: 31109,str: "architectures",num: 16869,date: new Date("2018-09-06T12:21:21.507Z"),obj: {_id: 31110,str: "invoice Team-oriented Serbian Dinar",num: 49611,date: new Date("2018-09-06T16:57:54.856Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 31111,str: "North Carolina Kansas",num: 35474,date: new Date("2018-09-06T03:12:53.589Z"),array: [],obj: {_id: 31112,str: "California",num: 61156,date: new Date("2018-09-06T15:21:15.687Z"),array: [73579,13826,"Antigua and Barbuda Credit Card Account Kids",[],new Date("2018-09-06T15:44:53.278Z"),22760,new Date("2018-09-06T19:11:14.160Z"),"Sausages Directives Awesome","override cross-media"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 31113,str: "Oman Bedfordshire Buckinghamshire",num: 89273,date: new Date("2018-09-06T09:12:21.349Z"),array: ["Sleek Frozen Bacon",new Date("2018-09-06T04:58:17.507Z"),new Date("2018-09-06T08:25:36.282Z"),85838,33267,"mint green HDD",{_id: 31114,str: "Health",num: 90714,date: new Date("2018-09-06T09:59:09.094Z"),array: [],obj: {_id: 31115,num: 94505,date: new Date("2018-09-05T22:32:53.902Z"),array: [],obj: {}}},new Date("2018-09-06T14:30:26.373Z"),"FTP Legacy",57334],obj: {_id: 31116,str: "next generation",num: 44389,date: new Date("2018-09-06T14:47:20.910Z"),array: [[],57991]}});
    },

    function(coll) {
        return coll.insert({_id: 31117,str: "Awesome Cyprus Iowa",num: 98605,date: new Date("2018-09-05T22:25:45.225Z"),array: [{_id: 31118,str: "Sleek Planner",num: 38575,date: new Date("2018-09-05T22:43:20.334Z"),obj: {_id: 31119,date: new Date("2018-09-06T07:56:47.260Z"),obj: {}}},new Date("2018-09-05T21:00:08.802Z"),new Date("2018-09-06T00:57:52.673Z"),new Date("2018-09-05T21:30:14.195Z"),"generate Handmade Guadeloupe",{_id: 31120,str: "matrix firewall",array: [43695,94528,[],61662,new Date("2018-09-06T07:17:17.278Z"),"Berkshire Pakistan Rupee"],obj: {}},"program Overpass",{_id: 31121,num: 70539,date: new Date("2018-09-06T05:03:08.764Z"),array: []},[]]});
    },

    function(coll) {
        return coll.insert({_id: 31122,str: "Agent",date: new Date("2018-09-06T16:44:08.801Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31123,str: "Mauritania",num: 70143,date: new Date("2018-09-06T04:29:39.709Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31124,str: "bypass",num: 7247,date: new Date("2018-09-06T10:18:36.554Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31125,str: "Cloned Money Market Account markets",num: 38988,date: new Date("2018-09-06T01:44:19.710Z"),array: [],obj: {_id: 31126,str: "Liaison",array: [59658,87832,"SAS Point Managed",{_id: 31127,num: 59361,date: new Date("2018-09-06T08:17:11.076Z"),obj: {}},new Date("2018-09-05T20:38:11.548Z"),83645,{_id: 31128,num: 50551,date: new Date("2018-09-06T17:07:21.904Z"),array: []},new Date("2018-09-06T14:36:40.038Z"),"functionalities"],obj: {_id: 31129,str: "Fantastic Frozen Towels magnetic Credit Card Account",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 31130,str: "Small Computers",num: 27719,date: new Date("2018-09-06T09:24:29.186Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31131,str: "index",num: 94488,date: new Date("2018-09-06T11:57:01.148Z"),array: ["revolutionize transmit",new Date("2018-09-06T08:37:07.307Z"),21294,21023,{_id: 31132,str: "Keyboard Jewelery Saint Lucia",num: 60506,date: new Date("2018-09-06T04:43:55.811Z"),array: [new Date("2018-09-06T16:40:14.868Z"),77607,[]],obj: {_id: 31133,num: 16957,array: [],obj: {_id: 31134,str: "Down-sized XSS portals",array: [],obj: {}}}},"Montana Money Market Account","process improvement Checking Account transmitter",{_id: 31135,str: "application Granite Infrastructure",num: 11204,date: new Date("2018-09-06T17:29:42.621Z")},new Date("2018-09-06T06:49:26.833Z"),[21084,new Date("2018-09-06T01:38:17.321Z")],[],9682,new Date("2018-09-06T12:05:24.164Z")],obj: {_id: 31136,str: "Metal payment secondary",date: new Date("2018-09-06T12:28:06.308Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 31137,str: "Forks Alaska",num: 78818,date: new Date("2018-09-06T06:17:49.484Z"),array: [new Date("2018-09-06T02:23:09.219Z"),38771,{_id: 31138,str: "Bond Markets Units European Composite Unit (EURCO) Soap",num: 99597,date: new Date("2018-09-06T16:04:06.832Z"),array: []},"Lao People's Democratic Republic Buckinghamshire utilisation","contextually-based Administrator Money Market Account",87093,new Date("2018-09-06T11:21:15.899Z"),new Date("2018-09-06T01:37:28.677Z"),[59838,{_id: 31139,str: "Mobility Music",date: new Date("2018-09-06T12:48:37.333Z"),array: [],obj: {_id: 31140,num: 56244,array: [new Date("2018-09-06T17:38:41.331Z")],obj: {}}},[{_id: 31141,str: "AI payment extensible",num: 31234,date: new Date("2018-09-06T02:51:36.401Z"),obj: {}},[]]],"Highway Checking Account Engineer"],obj: {_id: 31142,str: "Manors Creative Car",num: 66552,date: new Date("2018-09-05T21:08:15.780Z"),array: [],obj: {_id: 31143,str: "application homogeneous",date: new Date("2018-09-06T17:12:42.889Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 31144,str: "Avon Kids",num: 26133,date: new Date("2018-09-06T06:38:56.025Z"),array: ["North Carolina Optimization","Gorgeous Wooden Computer driver",new Date("2018-09-05T22:20:37.754Z"),"plum Usability",new Date("2018-09-06T18:50:21.441Z"),new Date("2018-09-06T07:58:39.295Z"),83872,45454,"wireless Vista Algerian Dinar",2271,85575],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31145,str: "convergence Mobility bi-directional",num: 25845,date: new Date("2018-09-06T04:55:05.320Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31146,str: "orchid Accounts",num: 10747,date: new Date("2018-09-06T17:33:35.826Z"),array: [],obj: {_id: 31147,str: "haptic real-time XML",num: 20852,array: ["Refined Wooden Pants Cambridgeshire Bedfordshire",69525,{_id: 31148,str: "Bedfordshire",num: 49081,date: new Date("2018-09-06T19:43:11.035Z"),array: [new Date("2018-09-06T14:36:51.360Z")]},[],"strategic","bypassing generating engineer",77599,{_id: 31149,date: new Date("2018-09-06T14:22:16.723Z"),array: [14016,new Date("2018-09-05T21:28:43.916Z")],obj: {}},new Date("2018-09-06T15:11:33.405Z"),16931,new Date("2018-09-06T06:35:42.837Z"),"Open-source Savings Account Vermont"],obj: {_id: 31150,str: "primary background",date: new Date("2018-09-06T09:00:19.593Z"),array: [],obj: {_id: 31151,str: "engage South Africa override",num: 56538,date: new Date("2018-09-06T12:15:47.710Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 31152,str: "Accounts data-warehouse",num: 75800,date: new Date("2018-09-06T10:15:20.167Z"),array: [],obj: {_id: 31153,str: "Public-key",num: 23013,date: new Date("2018-09-05T20:13:12.026Z"),obj: {_id: 31154,str: "Kansas",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 31155,str: "schemas bypass",num: 9843,date: new Date("2018-09-06T13:58:12.749Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31156,num: 81662,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31157,str: "killer Pizza",date: new Date("2018-09-05T19:57:18.868Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31158,str: "Consultant",num: 91676,date: new Date("2018-09-06T00:43:23.649Z"),array: [new Date("2018-09-06T14:36:20.980Z"),{_id: 31159,str: "Investment Account strategize Avon",num: 35981,date: new Date("2018-09-06T19:33:09.194Z"),array: [],obj: {}},76627,"orchid content","Switchable Grocery",[],new Date("2018-09-06T01:55:40.158Z"),[new Date("2018-09-05T22:07:19.899Z")],"compressing",["Movies Trinidad and Tobago Dollar invoice",86589,21802],new Date("2018-09-06T10:54:20.633Z"),52793],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31160,str: "Junctions relationships",num: 76241,date: new Date("2018-09-06T15:33:25.777Z"),array: [],obj: {_id: 31161,str: "quantify",num: 16453,date: new Date("2018-09-06T12:50:28.681Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 31162,str: "calculate Hawaii Sleek",num: 51359,date: new Date("2018-09-06T00:52:26.783Z"),array: [],obj: {_id: 31163,str: "deposit hack Berkshire",num: 27618,date: new Date("2018-09-06T09:31:03.840Z"),array: [54393,39242,"content Ports withdrawal",{_id: 31164,str: "tan connect",date: new Date("2018-09-06T06:03:08.680Z"),array: [],obj: {_id: 31165,num: 91591,date: new Date("2018-09-06T10:56:09.691Z"),array: [],obj: {}}},new Date("2018-09-06T02:34:00.947Z"),new Date("2018-09-05T21:22:15.625Z"),36924,"National",[59440,["Cotton",new Date("2018-09-06T19:53:17.197Z")]],"Fantastic process improvement",39388],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 31166,str: "Savings Account cross-platform neural",num: 55872,date: new Date("2018-09-06T19:31:41.077Z"),array: ["Handmade Steel Pants Networked grey",new Date("2018-09-05T23:36:37.303Z"),56332,new Date("2018-09-06T18:21:45.711Z"),"Utah",97010,"Infrastructure",new Date("2018-09-06T08:32:06.189Z"),{_id: 31167,str: "systems Serbia Games",num: 74260,date: new Date("2018-09-06T03:02:14.486Z"),array: [],obj: {}},[50636,"generate Parkways Assimilated",8155,"Fantastic Concrete Fish"]],obj: {_id: 31168,str: "Computer Group",num: 17616,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 31169,str: "facilitate Keyboard",num: 55609,date: new Date("2018-09-06T02:13:17.630Z"),array: [19604,"Handcrafted Granite",new Date("2018-09-06T09:57:24.906Z"),73121,18027,[],"Sports North Carolina payment",new Date("2018-09-06T18:26:00.787Z"),61172,new Date("2018-09-06T12:10:35.245Z"),"circuit local area network Refined"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31170,str: "convergence deliver Berkshire",num: 78861,date: new Date("2018-09-06T15:30:54.803Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31171,str: "Missouri",num: 44042,date: new Date("2018-09-06T11:33:05.270Z"),array: [new Date("2018-09-06T15:12:27.079Z"),73981,[29757,"invoice Arizona British Indian Ocean Territory (Chagos Archipelago)","Persistent Handmade Frozen Salad",new Date("2018-09-05T23:13:19.977Z")],"sticky",{_id: 31172,str: "quantifying",num: 91817,date: new Date("2018-09-06T00:13:44.150Z"),array: [],obj: {_id: 31173,num: 91650,date: new Date("2018-09-06T18:36:35.502Z"),obj: {}}},new Date("2018-09-06T16:32:16.025Z"),69198,84405,new Date("2018-09-06T18:51:23.708Z"),45999,new Date("2018-09-06T01:46:35.085Z")],obj: {_id: 31174,str: "Soft",date: new Date("2018-09-05T20:58:07.844Z"),array: ["Direct SMS Computers",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 31175,str: "Quetzal Berkshire navigating",num: 64937,date: new Date("2018-09-06T10:54:47.828Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31176,str: "Group",num: 26823,date: new Date("2018-09-05T20:16:34.723Z"),array: ["Bedfordshire transmit","invoice overriding Personal Loan Account",new Date("2018-09-05T21:24:11.853Z"),49996,new Date("2018-09-06T17:28:09.282Z"),{_id: 31177,str: "Bosnia and Herzegovina payment JBOD",num: 22784},new Date("2018-09-06T15:08:34.639Z"),31443,"Beauty",{_id: 31178,str: "Baby Concrete interface",date: new Date("2018-09-06T18:05:04.516Z"),array: [],obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31179,str: "technologies Licensed auxiliary",num: 74987,date: new Date("2018-09-06T06:25:31.028Z"),array: ["benchmark Netherlands Antilles",new Date("2018-09-06T05:17:01.848Z"),64598,"content back-end seamless",28460,89251,{_id: 31180,str: "Awesome Soft Pants",num: 60568,date: new Date("2018-09-06T01:39:12.939Z"),array: [],obj: {}},84862,new Date("2018-09-05T22:17:32.523Z"),"Costa Rica",new Date("2018-09-06T19:21:26.335Z"),[new Date("2018-09-06T07:31:27.484Z"),"Pizza withdrawal"]],obj: {_id: 31181,str: "policy",num: 19349,date: new Date("2018-09-05T19:56:46.199Z"),array: [],obj: {_id: 31182,str: "Designer Electronics",date: new Date("2018-09-06T13:24:30.198Z"),obj: { _id: 31183 }}}});
    },

    function(coll) {
        return coll.insert({_id: 31184,str: "Incredible copying",num: 36319,date: new Date("2018-09-06T01:23:45.945Z"),array: [],obj: {_id: 31185,str: "superstructure calculating Personal Loan Account",num: 95545,date: new Date("2018-09-05T22:17:26.707Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 31186,num: 43493,date: new Date("2018-09-06T04:22:24.542Z"),array: [new Date("2018-09-06T05:37:40.640Z"),new Date("2018-09-05T20:17:22.779Z"),"Configuration",new Date("2018-09-06T03:11:10.797Z"),[{_id: 31187,str: "Direct Operations",num: 64972,date: new Date("2018-09-06T10:25:30.275Z"),array: [],obj: {_id: 31188,num: 35289,date: new Date("2018-09-06T17:29:03.785Z"),array: [],obj: {}}},"Program",{_id: 31189,str: "hard drive Frozen",num: 97171,obj: {}}],75270,"Knolls Data",{_id: 31190,str: "compressing index synthesize",date: new Date("2018-09-06T04:30:13.533Z"),array: []},36221,"Integration Practical Wooden Hat",new Date("2018-09-05T20:10:00.419Z"),"Jersey Licensed"]});
    },

    function(coll) {
        return coll.insert({_id: 31191,str: "background",num: 2284,date: new Date("2018-09-06T19:36:19.612Z"),array: ["Montana withdrawal","Coordinator",67297,32123,new Date("2018-09-05T23:33:00.084Z"),{_id: 31192,str: "Unbranded Wooden Cheese Buckinghamshire",num: 41552,date: new Date("2018-09-05T20:37:49.862Z"),array: []},"bus Incredible",31968,new Date("2018-09-06T01:26:39.265Z"),[87148],[{_id: 31193,str: "hacking",num: 62273,date: new Date("2018-09-06T16:55:52.534Z"),obj: {_id: 31194,num: 12644,date: new Date("2018-09-06T12:38:15.049Z")}},{_id: 31195,str: "SSL revolutionize Avon",date: new Date("2018-09-06T09:02:05.570Z"),array: [],obj: {}},{_id: 31196,array: [88867],obj: {_id: 31197,str: "Berkshire Metrics e-services",date: new Date("2018-09-06T17:54:15.579Z"),array: [],obj: {}}}],new Date("2018-09-06T12:00:27.532Z"),"payment withdrawal",new Date("2018-09-06T18:52:53.915Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31198,str: "alliance",num: 70526,date: new Date("2018-09-06T02:50:26.616Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31199,str: "monitor",num: 37010,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31200,str: "conglomeration card Gateway",num: 8965,date: new Date("2018-09-06T07:29:48.856Z"),array: [],obj: {_id: 31201,str: "Barbados Personal Loan Account Cambridgeshire",date: new Date("2018-09-06T04:00:26.389Z"),array: ["Paradigm",{_id: 31202,str: "exuding",num: 50492,date: new Date("2018-09-06T05:24:30.613Z"),array: [],obj: {}},23124,"Technician","Cotton",new Date("2018-09-06T04:46:54.796Z"),new Date("2018-09-06T07:19:41.847Z"),"end-to-end",28670,{_id: 31203,str: "Electronics",num: 83384,date: new Date("2018-09-06T09:16:07.663Z"),obj: {_id: 31204,num: 62404,array: [],obj: {}}},[["TCP world-class",43105]],new Date("2018-09-05T22:19:10.421Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 31205,num: 46020,date: new Date("2018-09-06T16:26:13.861Z"),array: ["Metal Incredible Steel Ball Gorgeous Concrete Table",32489,43015,[{_id: 31206,str: "user-facing",date: new Date("2018-09-06T19:40:16.206Z"),array: [],obj: {_id: 31207,str: "discrete Salad",num: 40081,date: new Date("2018-09-05T23:40:16.886Z"),obj: {_id: 31208,str: "Credit Card Account generating",date: new Date("2018-09-06T05:16:54.124Z"),obj: {}}}},new Date("2018-09-05T21:15:03.964Z"),new Date("2018-09-06T18:50:41.002Z"),new Date("2018-09-06T14:24:42.432Z"),54420],{_id: 31209,str: "Cheese white Guam",num: 71920,array: [],obj: {_id: 31210,str: "Open-architected Plastic platforms",array: [new Date("2018-09-06T03:35:26.033Z")],obj: {}}},"Sausages Sri Lanka Total",{_id: 31211,num: 93177,date: new Date("2018-09-06T08:07:20.775Z"),array: [[]]},"Profound",{_id: 31212,str: "bypassing Lead",num: 86626,date: new Date("2018-09-05T21:20:56.494Z")},98796,new Date("2018-09-06T11:44:38.711Z"),21508]});
    },

    function(coll) {
        return coll.insert({_id: 31213,str: "Consultant primary Versatile",num: 97038,date: new Date("2018-09-06T15:19:18.303Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 31214,str: "budgetary management",num: 98377,date: new Date("2018-09-06T05:09:46.578Z"),array: [30926,"bypass encryption",[],new Date("2018-09-06T14:21:00.274Z"),{_id: 31215,str: "Hungary",num: 29957,date: new Date("2018-09-06T02:18:42.848Z"),array: [],obj: {}},"fuchsia Rhode Island","framework Wooden Functionality",92078,96515,{_id: 31216,str: "card",num: 48064,date: new Date("2018-09-06T18:17:23.509Z"),obj: {_id: 31217,str: "green hard drive",array: ["Fall pink invoice"],obj: {_id: 31218,num: 94908,date: new Date("2018-09-06T02:51:31.870Z"),obj: {}}}},new Date("2018-09-06T12:09:47.476Z"),new Date("2018-09-06T02:10:35.443Z"),new Date("2018-09-06T15:44:35.721Z")],obj: {_id: 31219,str: "Shoes",array: [[53745,"networks"],new Date("2018-09-06T06:06:51.976Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 31220,str: "Refined",num: 5778,date: new Date("2018-09-06T04:23:38.139Z"),array: [new Date("2018-09-05T22:17:20.225Z"),35483,"South Carolina Supervisor repurpose",56830,81129,{_id: 31221,str: "Borders Walk",num: 72496,date: new Date("2018-09-05T20:18:15.896Z"),array: [],obj: {_id: 31222,str: "Savings Account Bedfordshire",num: 11590,date: new Date("2018-09-06T14:51:56.219Z"),array: [new Date("2018-09-06T10:59:44.950Z"),"Silver Total","Unbranded Rubber Mouse invoice"],obj: {}}},64783,new Date("2018-09-06T07:05:36.773Z"),80789,"ROI",{_id: 31223,num: 5766,date: new Date("2018-09-06T05:04:12.731Z"),array: []}],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.date": 1, "str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $toString: { $arrayElemAt: [[],'$obj.num'] } }, _id: 0}}],

        [{$project: {a: { $toString: { $toUpper: { $dateToString: { date: new Date("2018-09-06T07:11:18.076Z") } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',12,2] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $concat: ['$obj.obj.str'] },0,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["Mountain",20,15] },'$str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num'],['$str'],[],['$obj.str','$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $month: { $minute: { $dateToParts: {date: { $toDate: { $trim: { input: '$obj.obj.str' } } },iso8601: false} } } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $multiply: ['$obj.num'] },month: { $log10: { $divide: ['$obj.num',{ $ceil: 55441 }] } },day: { $ln: 65754 },second: { $add: [] },timezone: "US/Pacific-New"} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T13:35:58.259Z",format: "%w-%j-%H-%%-%V",timezone: "America/Detroit",onError: { $arrayToObject: [[[],['$obj.obj.num',30149],["one-to-one Future-proofed system"]]] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Facilitator envisioneer back up",chars: { $concat: [{ $toUpper: '$obj.str' },"explicit Rustic Rubber Fish"] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.str',"digital"],[97996,'$obj.obj.obj.num'],['$obj.obj.str',{ $dateToString: {date: '$obj.date',format: "%S-%u-%L-%w-%w-%Z-%m",onNull: "Rustic Soft Shoes web-enabled"} },"withdrawal"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$num']]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $rtrim: { input: { $ltrim: { input: '$obj.str' } } } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "magenta hack",v: { $millesecond: { $dateFromParts: {isoWeekYear: { $exp: '$obj.obj.num' },isoWeek: { $add: [] },hour: { $cmp: [{ $map: {input: [{ $trim: { input: { $toString: { $arrayToObject: [[["Developer"],[],[80361],['$obj.obj.obj.str']]] } } } },'$obj.str'],as: 'missouri',in: { $log10: 28038 }} },{ $arrayToObject: [[[{ $floor: '$obj.obj.obj.num' },95805,20153],['$obj.obj.obj.num',93820],[]]] }] },second: { $subtract: [44836,'$num'] },millisecond: { $sqrt: '$num' },timezone: "America/Bahia_Banderas"} } }},{k: "Licensed Frozen Soap Generic Concrete Chicken",v: '$obj.obj.obj.date'},{k: "Games West Virginia Washington",v: { $log: ['$num',{ $indexOfArray: [{ $objectToArray: '$obj.obj' },{ $zip: {inputs: [[],[false]],defaults: []} },17,11] }] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Intranet"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[false],56678] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Pines B2B"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',14,20] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str'],as: 'alia',in: { $size: [['$obj.obj.obj.str']] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [48125,'$obj.obj.num'],in: { $floor: 65474 }} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[["program B2B optical",{ $ltrim: {input: '$obj.str',chars: { $concat: ['$obj.str'] }} },"Future Sports","Decentralized"],[35107]]] } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $isoWeekYear: { $dayOfMonth: { $month: { $dateFromParts: {isoWeekYear: { $abs: 87321 },isoDayOfWeek: { $multiply: [] },second: { $indexOfArray: [{ $concatArrays: [[],["Camp",{ $rtrim: { input: "Associate" } },{ $toLower: '$str' }],["Creative magnetic"],['$obj.obj.obj.str'],[],[],[{ $trim: {input: '$str',chars: { $substr: ['$obj.obj.str',8,16] }} },"Future synthesizing",'$obj.obj.str']] },{ $arrayToObject: [[[83416]]] },18] },millisecond: { $subtract: ['$obj.obj.num','$obj.obj.obj.num'] }} } } } },format: "%U-%w-%w-%z",timezone: "Israel"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "yellow",v: "Developer turn-key Self-enabling"}]] }, _id: 0}}],

        [{$project: {a: { $range: [19,0,9] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Trinidad and Tobago Pizza Home",v: "withdrawal Streamlined"},{k: "solid state",v: { $hour: { $isoDayOfWeek: { $isoDayOfWeek: { $second: { $dateFromParts: {year: { $log: [93861,'$obj.obj.obj.num'] },month: { $cmp: [{ $rtrim: {input: '$obj.str',chars: { $concat: [{ $substrCP: ["Rubber generate",4,8] },'$obj.obj.str',"alarm Secured","bandwidth"] }} },{ $objectToArray: '$obj.obj' }] },hour: { $exp: 6762 },minute: { $size: [[]] }} } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Movies plum Manager",18,6] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[[{ $substr: ["Re-engineered",14,3] }],[]]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Sleek Gorgeous",{ $ltrim: {input: '$str',chars: { $rtrim: { input: "ADP" } }} },"Directives"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $pow: [54730,'$obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $range: [8,10,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toString: { $arrayToObject: [[{k: "Persistent",v: false},{k: "Soft Decentralized",v: false},{k: "Macao",v: '$obj.num'},{k: "Fresh",v: '$obj.date'}]] } },12,11] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T11:07:08.604Z"),format: "%U-%%-%Y-%j-%m-%Z-%j-%j-%M-%M",timezone: "Antarctica/Troll",onNull: { $arrayToObject: [[[],["Pitcairn Islands"],[79583,84579],['$num'],[]]] }} },"Argentina migration"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[70892,95825],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Accounts",'$str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],60047] } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toString: { $arrayToObject: [[{k: "Ergonomic",v: '$obj.obj.str'},{k: "Money Market Account knowledge base Georgia",v: 28480},{k: "matrices",v: { $toDate: { $arrayElemAt: [[],75235] } }}]] } },1,6] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Computer",16,15] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.str',{ $substrBytes: [{ $toUpper: '$obj.str' },12,12] }] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $dateToString: {date: new Date("2018-09-05T23:35:57.193Z"),format: "%U-%L-%H-%m-%d-%M-%S-%S-%G-%w-%m-%H"} }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["Credit Card Account",8,13] },'$obj.obj.str'],4401] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],80738] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],13257] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["overriding COM Auto Loan Account",{ $toString: { $arrayElemAt: [[{ $toUpper: "revolutionize alarm" }],5473] } },{ $rtrim: {input: { $ltrim: { input: "synthesize" } },chars: '$str'} },'$obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],9285] }, _id: 0}}],

        [{$project: {a: { $range: [4,18,18] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[6849]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Global compressing Rubber",{ $substrCP: ['$obj.str',8,15] },{ $substrBytes: [{ $rtrim: {input: "Senior Wooden",chars: "niches"} },5,1] },"redundant"],['$obj.num',44940],[]]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T17:20:36.879Z",format: "%w-%d-%V-%G",onError: { $arrayToObject: [[{k: "Prairie deposit Singapore Dollar",v: false},{k: "Cheese Bedfordshire auxiliary",v: '$obj.obj.obj.str'},{k: "Metrics Markets",v: { $substrCP: ["Kenya calculate seamless",15,18] }},{k: "Kenyan Shilling Steel",v: new Date("2018-09-06T15:34:26.976Z")}]] },onNull: { $rtrim: {input: '$obj.str',chars: { $toLower: "Spain Keyboard" }} }} }, _id: 0}}],

        [{$project: {a: { $range: [1,9] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "strategic Customer drive",v: 96710},{k: "neutral",v: "invoice interfaces"},{k: "auxiliary",v: { $dayOfYear: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T06:25:29.980Z",timezone: "America/Argentina/La_Rioja",onNull: { $dateToParts: {date: { $hour: { $isoWeek: { $isoWeekYear: { $dayOfWeek: { $isoWeekYear: { $week: { $millesecond: { $dayOfMonth: { $week: { $toDate: { $arrayElemAt: [['$obj.num'],'$num'] } } } } } } } } } } },timezone: "America/Lower_Princes",iso8601: true} }} } } }}]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $range: [12,19,3] }, _id: 0}}],

        [{$project: {a: { $month: '$date' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[80348,85758],{ $floor: '$num' }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: '$obj.obj.str' } },true],99891] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Zimbabwe Executive",v: '$obj.str'},{k: "matrix Delaware invoice",v: new Date("2018-09-06T16:56:33.427Z")},{k: "Shirt convergence Personal Loan Account",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $substrBytes: ["Barbados Dollar withdrawal Vermont",10,15] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Electronics"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $second: { $dayOfMonth: { $week: { $week: { $dateFromParts: {isoWeekYear: { $floor: '$obj.obj.obj.num' },isoWeek: { $subtract: [70435,{ $log: ['$obj.obj.obj.num',{ $abs: 14770 }] }] },hour: { $log10: '$obj.obj.num' },minute: { $floor: '$obj.obj.num' },second: { $size: [['$obj.num']] },millisecond: { $sqrt: 21486 }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num','$obj.num'],53471] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "generate SDD",v: 15540}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Tasty Small Cotton Keyboard"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["reboot optimal",'$obj.obj.obj.str'],as: 'adelia',cond: { $ne: [{ $substrBytes: [{ $substr: [{ $ltrim: {input: "Fantastic",chars: '$str'} },0,3] },2,1] },{ $arrayElemAt: [[{ $add: [] },'$num'],64959] }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$num']] }, _id: 0}}],

        [{$project: {a: { $range: [3,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Haiti Vision-oriented",'$str'],[],[],[{ $dateToString: {date: '$date',format: "%z-%z-%w-%Z-%m-%G-%L",timezone: "Etc/Zulu",onNull: '$str'} },"groupware initiatives"],[34180]],defaults: ["Overpass pixel transmitting"]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $trim: { input: '$obj.obj.str' } }] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],30946] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Avon capacitor",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: { $toLower: "workforce back up" }} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $hour: { $dateFromString: {dateString: "2018-09-05T23:30:27.956Z",format: "%M-%V-%U-%H-%u-%M-%H-%m-%Y",timezone: "America/Denver",onNull: { $arrayElemAt: [[{ $ltrim: { input: { $toString: { $zip: {inputs: [["digital Graphic Interface",{ $substrCP: ["SMS Cotton",3,1] },'$obj.obj.str'],[],[],[42550],[]],useLongestLength: false} } } } }],'$obj.obj.obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],97382] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],75465] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',39455],843] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $range: [15,6] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],19615] }, _id: 0}}],

        [{$project: {a: { $minute: { $millesecond: { $minute: { $dateToParts: { date: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T04:38:48.520Z",format: "%G-%H-%G-%u-%z",timezone: "America/Miquelon"} },onNull: { $rtrim: { input: { $trim: { input: "reboot Human" } } } }} } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: { $rtrim: { input: "bluetooth Tools" } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: { $ltrim: {input: '$str',chars: "seize"} },chars: '$str'} }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $mod: [57114,15935] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: '$obj.obj.obj.str' },'$str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromString: { dateString: "2018-09-05T22:38:02.759Z" } } }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "monitor Granite",v: true}]] }, _id: 0}}],

        [{$project: {a: { $range: [16,0,10] }, _id: 0}}],

        [{$project: {a: { $toString: { $range: [1,19,15] } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $dateToParts: {date: { $second: { $dateFromParts: {year: { $cmp: [{ $arrayElemAt: [['$obj.obj.str',"methodical extend"],'$num'] },{ $zip: {inputs: [[8825],[{ $substr: ["asymmetric",17,18] },'$obj.obj.str',"intranet"],[{ $ltrim: { input: "bus synergy Tools" } },'$str']],useLongestLength: true,defaults: [new Date("2018-09-06T07:37:32.746Z"),{}]} }] },month: { $exp: 73542 },day: { $ln: { $sqrt: '$obj.num' } },minute: { $floor: 13908 },second: '$obj.num'} } },timezone: "Antarctica/South_Pole",iso8601: true} } } }, _id: 0}}],

        [{$project: {a: { $second: { $hour: { $minute: { $isoWeek: { $isoDayOfWeek: { $dateToString: {date: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T06:34:44.816Z",format: "%S-%Z-%H-%j-%V-%U-%Z-%m-%%"} } },format: "%Y-%%-%j-%H-%Y-%w-%U",timezone: "America/Indianapolis"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Meadow",{ $substr: ['$str',8,2] }],[81176]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[43139,'$obj.obj.num'],["Regional",{ $ltrim: { input: { $toLower: '$obj.obj.str' } } }],['$obj.obj.num',{ $abs: 22723 },81701]]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $toDate: { $rtrim: { input: { $concat: [{ $substr: ["bypassing Personal Loan Account deposit",4,5] },"Savings Account invoice Personal Loan Account"] } } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',{ $ltrim: {input: "one-to-one Delaware capacity",chars: "AI Accountability"} }],['$str',"Bedfordshire"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T10:55:54.497Z"),format: "%M-%H-%Y-%M-%U-%Z-%V-%w",timezone: "Africa/Asmara"} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Representative Practical Granite Fish Practical"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$str',"payment needs-based"],[{ $substr: [{ $substrBytes: ["Administrator explicit",1,12] },8,13] },"ubiquitous Global interactive",'$str'],['$obj.obj.obj.str']],useLongestLength: true,defaults: [true]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["focus group circuit"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[9220],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "hack integrated Global",v: new Date("2018-09-06T17:43:03.600Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $filter: {input: [],cond: { $ne: [{ $arrayElemAt: [['$$this'],'$$this'] },{ $arrayToObject: [[['$obj.obj.obj.str',"deposit",{ $rtrim: { input: "Investment Account iterate" } }],[26332,'$obj.num',{ $exp: 22454 }],[],[],["Fresh Officer copy",{ $rtrim: {input: '$obj.obj.str',chars: "RAM Connecticut"} }]]] }] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],79861] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $year: { $isoDayOfWeek: { $month: { $dateToString: {date: '$obj.date',format: "%m-%j-%u-%M"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $trim: {input: { $substrCP: ["navigating Investment Account",5,9] },chars: "Soft Rustic Wooden Gloves Cayman Islands"} }],8778] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $floor: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: { $substrCP: ['$obj.obj.str',9,8] } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Wooden Faroe Islands" }, _id: 0}}],

        [{$project: {a: { $map: {input: [8479],in: { $floor: 81652 }} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: { $rtrim: { input: '$str' } }} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $concat: [] } }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $week: { $year: { $isoWeekYear: { $isoWeek: { $second: { $dayOfMonth: { $month: { $hour: { $minute: { $dateToString: {date: new Date("2018-09-05T22:06:02.968Z"),format: "%S-%G-%S-%V-%M-%H-%%-%Z-%V-%U",timezone: "Africa/Luanda"} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $substrCP: ["Sports",15,10] },"6th generation indigo bandwidth-monitored"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T02:51:49.832Z") } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%M-%L-%G-%M-%L-%U"} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$str',11,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toUpper: { $concat: ["Tasty Frozen Towels Handcrafted Cotton Car productize",'$obj.obj.str',"Pitcairn Islands compress"] } },'$obj.str'],[],[97154]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "ivory",v: 86256}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substr: ["Home Loan Account Checking Account enhance",4,7] }],as: 'ryleigh',in: { $indexOfArray: [{ $reverseArray: [[]] },{ $dateToString: {date: '$obj.date',format: "%w-%%-%w-%z-%d-%M-%G-%H-%w-%H-%H",timezone: "America/Monterrey"} },0] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handmade Plastic Towels Bahamian Dollar Borders",v: "Customer"},{k: "Developer IB HTTP",v: '$str'},{k: "Tasty Granite Gloves grid-enabled",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $isArray: [{ $second: { $millesecond: { $minute: { $isoWeek: { $dayOfWeek: { $isoWeekYear: { $millesecond: { $dateToString: {date: '$$this',format: "%M-%m-%G-%L",timezone: "America/Santo_Domingo"} } } } } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $toUpper: "non-volatile" }],9617] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Arkansas Arkansas expedite",v: false},{k: "Operative Mississippi",v: new Date("2018-09-06T11:07:00.766Z")},{k: "navigating out-of-the-box Marketing",v: { $rtrim: { input: '$str' } }},{k: "Program",v: "Bridge orchid"}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T06:52:19.753Z"),timezone: "America/Kentucky/Monticello",onNull: "Ouguiya bus"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "firewall solid state",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["matrix","firewall Refined Concrete Shoes monitor",'$str',{ $dateToString: {date: new Date("2018-09-05T23:51:30.617Z"),format: "%j-%w-%u-%%-%z-%H-%%-%Y-%M",timezone: "Pacific/Ponape",onNull: { $arrayToObject: [[{k: "optical",v: '$obj.obj.obj.date'}]] }} }],[89704,'$num'],[],[],[{ $trim: { input: '$str' } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[3035,'$obj.num'],[],["embrace",'$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoDayOfWeek: { $month: { $dateToString: {date: '$obj.obj.obj.date',onNull: { $concat: ["frame Digitized asymmetric",'$obj.obj.str'] }} } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $rtrim: { input: "Personal Loan Account" } },'$str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "withdrawal",v: false},{k: "bandwidth zero administration Vermont",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $substr: ["Small Kroon Bike",2,8] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["parse Digitized streamline",'$obj.str','$str',{ $substrCP: [{ $toLower: '$str' },14,14] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'vern',in: { $exp: 6935 }} }, _id: 0}}],

        [{$project: {a: { $range: [4,3,7] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $rtrim: { input: "Customer-focused connecting Practical" } }],in: { $floor: 96566 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[44210]]] }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromString: {dateString: "2018-09-06T08:50:46.442Z",format: "%G-%w-%V-%L-%Z-%S",onNull: { $arrayToObject: [[['$obj.obj.str',{ $toString: { $arrayToObject: [[['$num'],[],[{ $rtrim: {input: "interfaces Integration",chars: "Brand"} },"Buckinghamshire"],[{ $substrBytes: ['$str',5,19] },'$str','$obj.obj.str']]] } }],[]]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[70591]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $add: ['$obj.obj.num',16971] },isoDayOfWeek: { $indexOfArray: [{ $map: {input: [],in: { $pow: ['$num',77335] }} },{ $toLower: { $toUpper: '$obj.obj.obj.str' } },4,1] },hour: '$obj.obj.num'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateFromParts: {year: { $log10: 63214 },day: { $log10: 47621 },minute: { $add: [] },second: { $trunc: '$obj.num' },timezone: "America/Winnipeg"} } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $week: { $month: { $millesecond: { $minute: { $hour: { $second: { $dayOfWeek: { $dateFromParts: {year: { $log10: 51426 },day: { $sqrt: 74456 },hour: { $divide: ['$obj.obj.num',{ $indexOfArray: [{ $filter: {input: [],as: 'marjorie',cond: { $lte: [{ $dateToString: {date: new Date("2018-09-06T15:41:03.711Z"),onNull: { $year: { $month: { $dayOfMonth: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-05T20:06:21.191Z",timezone: "Asia/Qyzylorda"} },timezone: "America/Cordoba",iso8601: true} } } } }} },{ $arrayToObject: [[[],['$$marjorie'],[{ $substr: ["GB interactive Tuna",1,19] }],['$str'],[],[]]] }] }} },{ $concatArrays: [[]] }] }] },second: { $abs: 56859 },timezone: "Europe/Guernsey"} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Applications Administrator",'$obj.str','$obj.str'],[],['$num']]] }, _id: 0}}],

        [{$project: {a: { $year: { $month: { $hour: { $millesecond: { $year: { $dateFromString: {dateString: "2018-09-06T07:23:07.902Z",onError: { $arrayToObject: [[{k: "feed benchmark Tasty",v: 32483},{k: "Cambridgeshire killer",v: new Date("2018-09-05T21:35:10.902Z")}]] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T07:45:34.110Z"),format: "%S-%u-%H-%u"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "SCSI Metal",v: 8962},{k: "Course Auto Loan Account back up",v: false},{k: "Borders",v: { $ltrim: { input: "24/7" } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[{ $toString: { $dateToString: {date: '$obj.obj.date',format: "%z-%M-%u-%G-%z",onNull: "paradigms deposit"} } },"Avon Sleek Fresh Sausages",'$str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Unbranded",'$obj.str'],as: 'americo',cond: { $ne: [{ $arrayElemAt: [[],60038] },{ $concat: ["Multi-lateral",{ $toLower: "Credit Card Account" }] }] }} }, _id: 0}}],

        [{$project: {a: { $range: [17,18] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: { $substrCP: ["Graphical User Interface Unbranded Fresh Salad",0,12] }} }, _id: 0}}],

        [{$project: {a: { $toLower: { $rtrim: {input: '$obj.obj.obj.str',chars: "digital"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$obj.obj.num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $toDate: { $isoWeek: { $hour: { $isoWeekYear: { $month: { $second: { $isoDayOfWeek: { $minute: { $isoDayOfWeek: { $dateFromParts: {year: { $ceil: '$obj.obj.num' },hour: { $cmp: [{ $objectToArray: '$obj.obj.obj' },{ $zip: {inputs: [[],[{ $trim: { input: '$obj.str' } }],[],[],['$obj.obj.obj.num'],[]],useLongestLength: false} }] },minute: { $ln: 86728 },millisecond: { $abs: '$obj.obj.num' },timezone: "Etc/GMT-10"} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $month: { $isoDayOfWeek: { $minute: { $dateToString: {date: '$date',format: "%%-%w-%L-%S-%Y-%j-%%-%L-%w-%%",onNull: { $dayOfMonth: { $year: { $month: { $millesecond: { $toDate: { $concatArrays: [[false,"holistic transmitting hard drive"],[],["Iceland Nauru wireless"],[],[],[]] } } } } } }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "instruction set scalable",v: "facilitate Pennsylvania Car"},{k: "ADP",v: '$obj.obj.obj.date'},{k: "ubiquitous Towels",v: 28795}]] }, _id: 0}}],

        [{$project: {a: { $range: [19,19] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: '$obj.str' } }],83385] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [["open-source Pennsylvania Communications"],[{ $trim: {input: "bleeding-edge",chars: '$obj.obj.obj.str'} },{ $toLower: "Cloned" },'$obj.str',{ $trim: {input: "Beauty Markets Creative",chars: '$obj.obj.str'} }],[{ $multiply: [] },77265,'$obj.obj.obj.num','$obj.obj.num'],[81731],[],[]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $trunc: '$obj.obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoDayOfWeek: { $second: { $dateFromString: {dateString: "2018-09-06T12:06:46.026Z",onNull: "workforce Street"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Radial deposit Shoes",v: '$num'},{k: "redundant",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',7226],['$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $year: { $month: { $dateFromString: {dateString: "2018-09-06T03:26:30.244Z",format: "%Z-%U-%j-%S",onError: { $arrayElemAt: [["multi-state Norfolk Island bypassing",'$obj.str'],17330] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Mission deposit",'$str'],[{ $toString: { $arrayElemAt: [['$obj.num'],98183] } },'$obj.obj.obj.str','$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str',{ $substrBytes: [{ $toLower: { $concat: [] } },18,3] }] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',10,3] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[87636,'$num'],["viral"],['$str',{ $dateToString: {date: '$obj.obj.date',timezone: "America/Indiana/Marengo",onNull: "Cambridgeshire"} },'$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $millesecond: new Date("2018-09-06T14:53:21.073Z") } }, _id: 0}}],

        [{$project: {a: { $toLower: { $toLower: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $isoWeek: { $millesecond: { $dateFromParts: {year: { $log: ['$obj.num','$obj.num'] },month: 30507,day: { $sqrt: '$obj.obj.obj.num' },minute: { $add: [] },millisecond: { $log10: 2541 }} } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: ['$obj.obj.str',16,20] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$str'],91067] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $ne: [{ $ltrim: {input: "JSON",chars: { $rtrim: { input: "program" } }} },{ $arrayToObject: [[{k: "Venezuela bus vortals",v: '$$this'}]] }] }} }, _id: 0}}],

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
