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
        return coll.insert({_id: 21915,str: "JSON Refined Soft Chicken compressing",num: 31289,date: new Date("2018-09-06T17:03:23.149Z"),array: [new Date("2018-09-05T20:24:42.937Z"),{_id: 21916,num: 89708,array: [],obj: {_id: 21917,str: "Intelligent Soft Shoes Cambridgeshire Fantastic Frozen Shoes",num: 13157,date: new Date("2018-09-06T02:24:41.651Z"),array: [53012],obj: {_id: 21918,str: "payment cultivate",num: 11205,date: new Date("2018-09-06T15:39:15.470Z"),array: []}}},[new Date("2018-09-06T15:09:06.192Z"),51358,{_id: 21919,str: "Expanded extranet Chicken",date: new Date("2018-09-06T08:07:34.268Z"),array: [],obj: {}}],"black quantifying Personal Loan Account",{_id: 21920,num: 91751,date: new Date("2018-09-06T08:03:44.615Z"),array: ["Handcrafted Soft Gloves",54056],obj: {_id: 21921,date: new Date("2018-09-06T02:11:36.336Z"),obj: {}}},"Savings Account Guyana Dollar Thailand","XSS Israel",new Date("2018-09-06T15:18:36.270Z"),53555,[68991],"user-centric",new Date("2018-09-06T07:16:40.855Z"),"South Carolina Customizable"],obj: {_id: 21922,array: [new Date("2018-09-05T19:56:11.018Z"),new Date("2018-09-06T06:12:42.573Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 21923,str: "deposit Legacy interface",date: new Date("2018-09-06T03:12:09.058Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21924,str: "pixel cross-platform",num: 59497,date: new Date("2018-09-06T04:32:44.063Z"),array: [],obj: {_id: 21925,str: "transmitting IB Brand",num: 70847,date: new Date("2018-09-06T19:33:48.768Z"),array: [new Date("2018-09-06T15:40:29.734Z"),"Group deposit",new Date("2018-09-06T11:14:24.699Z"),"killer Utah",56892,[],{_id: 21926,str: "plum intuitive",num: 61298,date: new Date("2018-09-06T14:37:59.301Z"),array: [],obj: {_id: 21927,str: "New Mexico Awesome Concrete Table reinvent",num: 55997,obj: {}}},{_id: 21928,date: new Date("2018-09-05T23:45:36.547Z"),array: ["channels"]},"Summit XML",44880,49995,32293,new Date("2018-09-06T03:23:07.610Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21929,str: "Money Market Account",num: 49657,date: new Date("2018-09-05T20:01:39.017Z"),array: ["payment GB heuristic","Money Market Account Tuna mindshare",new Date("2018-09-06T07:17:01.637Z"),{_id: 21930,str: "monetize",num: 91514,date: new Date("2018-09-06T13:53:41.410Z"),array: []},{_id: 21931,str: "structure",num: 94783,obj: {}},[],"Grass-roots compressing parse",[],46657,new Date("2018-09-06T13:07:48.721Z"),82787,28146,"SAS"],obj: {_id: 21932,str: "Frozen Architect",num: 1865,date: new Date("2018-09-06T10:10:19.540Z"),array: [{_id: 21933,date: new Date("2018-09-06T03:15:49.289Z"),array: ["methodologies Mozambique"],obj: {}}],obj: {_id: 21934,str: "Front-line",date: new Date("2018-09-06T09:21:58.151Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 21935,str: "Avon Accounts",num: 99943,date: new Date("2018-09-06T06:49:06.935Z"),array: ["compressing",{_id: 21936,str: "copy",num: 26953,date: new Date("2018-09-06T18:50:41.587Z"),array: [],obj: {_id: 21937,str: "dot-com indigo Towels",num: 4671,date: new Date("2018-09-06T16:50:20.234Z"),obj: {_id: 21938,str: "Officer Metal",date: new Date("2018-09-05T20:14:52.516Z"),array: [],obj: {}}}},44884,"lavender convergence",28557,77671,"quantify",[],81000,"communities Sharable Mountain",new Date("2018-09-06T05:16:59.032Z"),new Date("2018-09-06T19:10:57.772Z")]});
    },

    function(coll) {
        return coll.insert({_id: 21939,str: "Senior",num: 71036,date: new Date("2018-09-06T11:51:25.622Z"),array: ["pink Pizza turn-key",new Date("2018-09-06T09:01:41.466Z"),"transmitter blue","digital protocol zero administration",62665,71430,new Date("2018-09-06T09:01:57.626Z"),[],new Date("2018-09-06T09:45:27.178Z"),{_id: 21940,str: "Towels",num: 50930,date: new Date("2018-09-06T16:41:07.562Z"),array: ["array",new Date("2018-09-06T11:57:57.563Z"),28579],obj: {}}],obj: {_id: 21941,str: "Optimization Cotton evolve",num: 22998,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21942,str: "payment",num: 51106,date: new Date("2018-09-06T16:01:50.122Z"),array: [],obj: {_id: 21943,str: "Cambridgeshire black",num: 50253,date: new Date("2018-09-06T11:22:04.531Z"),array: [89516,"Accountability override",8338,new Date("2018-09-06T17:36:32.123Z"),new Date("2018-09-06T17:03:00.699Z"),"Technician system-worthy","Home Loan Account Industrial",new Date("2018-09-06T16:44:16.670Z"),78773,{_id: 21944,date: new Date("2018-09-06T04:37:01.558Z"),array: [],obj: {}}],obj: {_id: 21945,num: 26000,date: new Date("2018-09-06T04:35:47.238Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 21946,str: "Wyoming",num: 27964,date: new Date("2018-09-06T08:56:56.883Z"),array: [[],76123,[],new Date("2018-09-06T12:01:09.355Z"),{_id: 21947,str: "Rustic Metal Towels Gorgeous",date: new Date("2018-09-06T11:39:14.734Z"),array: [],obj: {_id: 21948,str: "online monitor Circles",num: 5327,date: new Date("2018-09-06T03:12:20.965Z"),array: ["Refined Fresh Cheese copying microchip","Bike Pataca"],obj: {_id: 21949,str: "Georgia",num: 8451,date: new Date("2018-09-06T01:06:12.588Z"),obj: {}}}},73562,new Date("2018-09-06T10:13:11.041Z"),[],53946,{_id: 21950,str: "Handcrafted Grenada",num: 41349,date: new Date("2018-09-05T21:57:00.999Z")},71232,new Date("2018-09-06T13:47:31.000Z")]});
    },

    function(coll) {
        return coll.insert({_id: 21951,str: "intuitive SMS",num: 68298,date: new Date("2018-09-05T22:29:13.424Z"),array: [],obj: {_id: 21952,str: "Movies Human online",num: 73596,date: new Date("2018-09-05T22:19:03.067Z"),array: [],obj: {_id: 21953,str: "FTP",date: new Date("2018-09-06T06:11:09.459Z"),array: ["purple",90364,new Date("2018-09-05T23:30:09.579Z"),76034,{_id: 21954,num: 46191,obj: {}},[[],new Date("2018-09-06T12:10:44.666Z")],70167,["Identity"],"payment","SAS",82233,new Date("2018-09-06T02:15:28.575Z"),{_id: 21955,date: new Date("2018-09-06T16:57:43.679Z"),array: [60211,new Date("2018-09-06T01:57:49.197Z"),{_id: 21956,str: "application copying",num: 1690,date: new Date("2018-09-06T13:14:32.133Z"),array: [[],"Corner",new Date("2018-09-06T14:06:27.242Z")],obj: {}}]}],obj: {_id: 21957,str: "proactive"}}}});
    },

    function(coll) {
        return coll.insert({_id: 21958,str: "cutting-edge",num: 77556,date: new Date("2018-09-05T23:31:19.857Z"),array: [],obj: {_id: 21959,str: "syndicate",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21960,str: "Ergonomic multi-byte alarm",num: 57077,date: new Date("2018-09-06T17:39:42.297Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21961,str: "orange",num: 75679,date: new Date("2018-09-06T12:07:41.145Z"),array: [65041,{_id: 21962,str: "Unbranded Soft Shirt Practical",num: 63874,date: new Date("2018-09-06T01:49:14.371Z"),array: [],obj: {}},{_id: 21963,str: "Tuna",num: 61189,date: new Date("2018-09-06T15:43:42.718Z"),array: [new Date("2018-09-06T02:47:48.954Z")],obj: {_id: 21964,date: new Date("2018-09-06T12:08:28.403Z"),array: [],obj: {}}},new Date("2018-09-06T03:58:49.801Z"),5601,83082,"out-of-the-box Bedfordshire",new Date("2018-09-06T02:05:27.576Z"),55067,new Date("2018-09-05T20:01:34.550Z"),["backing up Operations Central African Republic","magenta Bedfordshire circuit","Salad"]],obj: {_id: 21965,str: "extend Steel",num: 88997,date: new Date("2018-09-05T20:15:44.622Z")}});
    },

    function(coll) {
        return coll.insert({_id: 21966,str: "holistic Kansas",num: 44347,date: new Date("2018-09-06T00:19:04.753Z"),array: ["monitor generating",new Date("2018-09-06T13:23:13.571Z"),"California",new Date("2018-09-06T13:15:23.998Z"),65025,[],49319,12288],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21967,str: "Nicaragua Bedfordshire driver",num: 3703,date: new Date("2018-09-06T11:27:36.576Z"),array: [],obj: {_id: 21968,str: "Nebraska US Dollar payment",num: 82256,date: new Date("2018-09-05T23:56:48.443Z"),array: [[],"Optimized Checking Account AGP",15524,new Date("2018-09-06T14:23:55.195Z"),new Date("2018-09-06T07:46:33.235Z"),{_id: 21969,str: "systemic Global",num: 77347,array: [84670,"Home Loan Account Consultant","Pennsylvania",45324,{_id: 21970,date: new Date("2018-09-06T07:56:46.405Z"),array: [[new Date("2018-09-06T07:15:01.694Z")],{_id: 21971,str: "Massachusetts Berkshire Administrator",num: 3301,date: new Date("2018-09-06T06:01:55.912Z")}],obj: {}},[],"bypassing Wisconsin"],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21972,str: "experiences",num: 91785,date: new Date("2018-09-06T13:32:21.366Z"),array: [],obj: {_id: 21973,str: "extensible Rustic Soft Ball Generic",num: 34389,date: new Date("2018-09-06T15:46:33.948Z"),array: [88948,new Date("2018-09-06T10:19:14.008Z"),"Intranet hack","copying Gloves","Arizona Alaska",90169,{_id: 21974,str: "Senior solutions",obj: {_id: 21975,num: 56747,date: new Date("2018-09-06T08:22:15.406Z")}},new Date("2018-09-05T20:41:24.426Z"),63282,new Date("2018-09-06T01:23:16.799Z"),[{_id: 21976,str: "Tools",num: 58941,date: new Date("2018-09-05T22:36:40.758Z"),array: [],obj: {}}],79529],obj: {_id: 21977,str: "Quality-focused Keyboard Developer",date: new Date("2018-09-06T10:49:55.491Z"),array: [{_id: 21978,str: "Bedfordshire target calculate",num: 25583,date: new Date("2018-09-05T23:59:28.254Z"),array: ["Assurance",22006],obj: {}},"Robust Agent Concrete","alarm Concrete"]}}});
    },

    function(coll) {
        return coll.insert({_id: 21979,str: "District",num: 65695,date: new Date("2018-09-06T05:22:00.164Z"),array: [],obj: {_id: 21980,str: "Operations calculate",date: new Date("2018-09-05T22:40:45.825Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21981,str: "Programmable Program",num: 79866,date: new Date("2018-09-06T13:07:36.283Z"),array: [],obj: {_id: 21982,str: "deposit Ergonomic Steel Sausages",num: 46955,obj: {_id: 21983,num: 81906,date: new Date("2018-09-06T03:10:16.727Z"),array: ["back up synergy",new Date("2018-09-06T14:24:26.577Z"),54473,new Date("2018-09-05T23:55:40.654Z"),{_id: 21984,num: 4246,date: new Date("2018-09-06T16:06:55.048Z"),array: []},"Gorgeous",92036,[new Date("2018-09-06T08:47:45.605Z")],[70106,"Pizza system interface",45795,"withdrawal Granite open-source"],new Date("2018-09-06T06:47:52.893Z"),2816,{_id: 21985,str: "visualize bus synthesize",array: []}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21986,num: 34962,date: new Date("2018-09-06T17:18:26.630Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21987,num: 27824,date: new Date("2018-09-06T04:28:03.746Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21988,num: 85701,date: new Date("2018-09-06T04:07:44.210Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21989,str: "Soft",num: 87880,date: new Date("2018-09-05T23:38:34.395Z"),array: [57971,53551,"Cambridgeshire Implementation hacking",[new Date("2018-09-05T23:44:53.514Z"),"hacking backing up"],[new Date("2018-09-06T03:45:29.474Z"),87850,"quantify Kwacha syndicate"],{_id: 21990,str: "Taka online",num: 71074,date: new Date("2018-09-06T15:22:44.747Z"),array: [],obj: {_id: 21991,str: "Harbors",num: 19412,date: new Date("2018-09-06T06:35:30.269Z"),array: [],obj: {}}},"Data structure withdrawal",new Date("2018-09-06T17:26:39.743Z"),new Date("2018-09-06T02:55:56.483Z"),{_id: 21992,str: "Small Concrete Cheese",date: new Date("2018-09-06T16:23:41.072Z"),array: [],obj: {}},"Vietnam evolve Extended","Planner Alabama capacitor"]});
    },

    function(coll) {
        return coll.insert({_id: 21993,str: "Refined Metal Bacon",date: new Date("2018-09-05T22:38:20.041Z"),array: [new Date("2018-09-06T18:32:32.827Z"),new Date("2018-09-05T20:24:38.063Z"),new Date("2018-09-06T15:20:42.065Z"),35190,["hybrid Kids Functionality",{_id: 21994,str: "cross-platform ADP XSS",num: 86129,array: [],obj: {_id: 21995,num: 38922,date: new Date("2018-09-06T18:01:46.357Z"),obj: {}}}],"high-level program",[367,"Practical alarm Kentucky","Universal Yemeni Rial Pants",64228,{_id: 21996,str: "Representative architect Madagascar",num: 99060,date: new Date("2018-09-06T00:20:51.162Z"),array: [],obj: {_id: 21997,str: "Director EXE",num: 51805,date: new Date("2018-09-05T21:18:28.452Z"),array: []}},67296],new Date("2018-09-06T12:21:05.891Z"),"brand Garden reciprocal"]});
    },

    function(coll) {
        return coll.insert({_id: 21998,str: "bus sexy",num: 88380,date: new Date("2018-09-05T21:34:37.601Z"),array: ["red leverage","Ergonomic Hawaii",new Date("2018-09-06T01:56:10.081Z"),new Date("2018-09-06T08:26:28.804Z"),[],36740,97809,31463,"Rubber JBOD",{_id: 21999,str: "Ergonomic Investment Account bandwidth",num: 52803,date: new Date("2018-09-06T17:44:57.533Z"),array: [],obj: {_id: 22000,str: "Investment Account initiative Sleek Steel Bacon",date: new Date("2018-09-06T05:44:43.353Z"),array: ["driver Polarised superstructure"],obj: {_id: 22001,str: "Buckinghamshire",num: 18603,date: new Date("2018-09-06T17:28:46.957Z"),obj: {}}}},new Date("2018-09-06T08:51:21.516Z"),new Date("2018-09-06T13:05:35.549Z")]});
    },

    function(coll) {
        return coll.insert({_id: 22002,str: "District fuchsia",date: new Date("2018-09-06T11:27:25.166Z"),array: [14010,"Jewelery navigating Awesome Concrete Car",new Date("2018-09-06T03:42:00.039Z"),"payment wireless Internal",new Date("2018-09-05T21:15:17.074Z"),74673,75139,"Dynamic Rubber",{_id: 22003,str: "Metal enable",num: 89462,date: new Date("2018-09-06T18:43:42.928Z"),obj: {_id: 22004,str: "Principal Chief Assistant",num: 23168,date: new Date("2018-09-05T19:57:49.262Z"),array: [],obj: {}}},[]],obj: {_id: 22005,num: 29887,date: new Date("2018-09-06T10:11:51.943Z"),array: [new Date("2018-09-06T15:31:30.543Z"),"scale best-of-breed Borders",new Date("2018-09-06T12:15:47.582Z"),"Baby",[{_id: 22006,str: "input moderator Gabon",num: 75122,array: []}],62122],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22007,str: "hardware synthesize Public-key",date: new Date("2018-09-06T09:32:36.425Z"),array: ["transmitting invoice Sri Lanka Rupee",new Date("2018-09-06T03:30:17.807Z"),"Rustic Frozen Chair",69148,58310,{_id: 22008,str: "California methodologies",num: 24342,date: new Date("2018-09-06T18:34:22.081Z"),array: [],obj: {}},new Date("2018-09-05T23:32:26.603Z"),[81000,new Date("2018-09-06T02:44:38.174Z"),94484,["matrix",new Date("2018-09-06T05:03:07.622Z")]],"gold Research Micronesia",{_id: 22009,num: 20603,date: new Date("2018-09-06T05:33:42.496Z"),array: [],obj: {_id: 22010,str: "feed foreground",num: 23266,date: new Date("2018-09-06T16:29:08.244Z"),array: [],obj: {_id: 22011,str: "protocol Steel",date: new Date("2018-09-05T22:23:06.934Z")}}}],obj: {_id: 22012,num: 49841}});
    },

    function(coll) {
        return coll.insert({_id: 22013,num: 49892,date: new Date("2018-09-06T19:19:01.417Z"),array: [],obj: {_id: 22014,str: "experiences Human Isle",num: 32379,date: new Date("2018-09-06T04:21:47.575Z"),array: ["AI","Cheese Table web services","impactful backing up Infrastructure",70386,65632,54238,[new Date("2018-09-06T06:26:13.234Z"),{_id: 22015,str: "backing up withdrawal",num: 67989,array: [74946,new Date("2018-09-06T10:43:04.902Z"),[],new Date("2018-09-06T00:57:15.863Z")],obj: {}}],new Date("2018-09-06T18:03:09.374Z"),"Generic Soft Pants Principal"]}});
    },

    function(coll) {
        return coll.insert({_id: 22016,str: "bypassing",num: 43866,date: new Date("2018-09-06T19:23:56.745Z"),array: [new Date("2018-09-06T01:29:16.139Z"),"Mouse","e-markets",65670,new Date("2018-09-06T06:08:08.266Z"),new Date("2018-09-06T15:13:44.863Z"),80755,{_id: 22017,str: "Kansas Steel",num: 15394,date: new Date("2018-09-05T22:37:15.686Z"),array: [],obj: {_id: 22018,str: "Concrete Rubber Metrics",num: 8631,date: new Date("2018-09-06T05:48:28.952Z"),obj: {_id: 22019,str: "magnetic Berkshire",num: 50421,array: [[],"Ranch Djibouti Franc USB"],obj: {}}}},"Balanced Pizza",14655,{_id: 22020,date: new Date("2018-09-06T08:16:43.075Z"),array: [new Date("2018-09-06T02:11:10.015Z")]},68295],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22021,str: "transform",num: 35510,date: new Date("2018-09-06T07:06:14.553Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22022,str: "panel Director",num: 90517,date: new Date("2018-09-05T21:42:59.356Z"),array: [],obj: {_id: 22023,str: "Vision-oriented Rustic",num: 30832,date: new Date("2018-09-05T20:40:42.571Z"),array: [new Date("2018-09-06T02:14:41.541Z"),new Date("2018-09-06T07:43:55.500Z"),54540,"Fantastic Metal Soap Cotton","bypass Shoes explicit",{_id: 22024,num: 95455,obj: {_id: 22025,str: "California embrace",num: 43054,date: new Date("2018-09-06T11:07:16.260Z"),array: [],obj: {}}},81510,"Kuwait Bike protocol",26161,"Handcrafted Creative",new Date("2018-09-06T11:12:44.422Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 22026,str: "cross-platform",num: 12647,date: new Date("2018-09-05T21:46:49.289Z"),array: [26236,68187,new Date("2018-09-06T13:32:04.356Z"),"Gorgeous Metal Sausages Outdoors Sleek Plastic Tuna",396,[],"Applications",{_id: 22027,str: "Concrete connect Producer",num: 80029,date: new Date("2018-09-06T00:38:42.982Z"),array: [new Date("2018-09-06T16:58:26.484Z"),new Date("2018-09-06T06:07:39.445Z")],obj: {_id: 22028,str: "invoice",date: new Date("2018-09-06T07:05:17.937Z"),array: [],obj: {_id: 22029,num: 36793,date: new Date("2018-09-05T22:28:59.840Z"),array: ["zero defect",new Date("2018-09-06T06:35:15.244Z"),new Date("2018-09-06T05:27:28.329Z")],obj: {}}}},{_id: 22030,str: "invoice",num: 51277,array: []},"Representative program methodical",new Date("2018-09-06T15:47:57.143Z"),84236]});
    },

    function(coll) {
        return coll.insert({_id: 22031,str: "Manager Avon",num: 62714,date: new Date("2018-09-06T04:07:37.966Z"),array: [{_id: 22032,str: "Handcrafted Frozen Bike",num: 56351,date: new Date("2018-09-06T15:22:36.353Z"),array: [],obj: {}},"disintermediate indigo disintermediate",[62264,36621],new Date("2018-09-06T09:35:41.718Z"),{_id: 22033,str: "maximize Associate",num: 42440,date: new Date("2018-09-06T01:11:12.460Z"),array: [],obj: {}},"Profit-focused",31391,new Date("2018-09-06T09:11:20.508Z"),"primary parallelism payment",70565,"synergies Unbranded redundant",["Dynamic Regional",new Date("2018-09-06T19:38:37.472Z")]],obj: {_id: 22034,str: "deposit",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22035,str: "Springs models",num: 57612,date: new Date("2018-09-06T15:54:35.281Z"),array: [],obj: {_id: 22036,str: "Rand",date: new Date("2018-09-06T09:31:30.252Z"),array: [[],96986,new Date("2018-09-06T00:17:14.571Z"),"Trace enhance Springs",48566,"cross-platform Group streamline",[57679,[]],new Date("2018-09-06T02:01:19.245Z"),{_id: 22037,str: "Down-sized neural bypassing",num: 57199,date: new Date("2018-09-06T09:01:38.090Z"),array: ["online"],obj: {}},new Date("2018-09-05T21:36:06.953Z"),24303,new Date("2018-09-06T16:50:57.926Z"),{_id: 22038,str: "cultivate stable Checking Account",num: 52582,date: new Date("2018-09-06T18:37:00.830Z"),array: [new Date("2018-09-06T15:57:24.198Z"),19924],obj: {_id: 22039,str: "Unbranded Soft Hat Metal Borders",num: 65123}}]}});
    },

    function(coll) {
        return coll.insert({_id: 22040,num: 46857,date: new Date("2018-09-05T21:39:34.432Z"),array: [],obj: {_id: 22041,str: "Regional",num: 40967,date: new Date("2018-09-06T12:30:05.167Z"),array: [new Date("2018-09-05T21:21:51.249Z"),38302,"Baby transmitter feed",80108,new Date("2018-09-06T03:31:17.498Z"),new Date("2018-09-06T12:07:21.426Z"),{_id: 22042,str: "Credit Card Account markets alarm",num: 54919,date: new Date("2018-09-06T00:07:21.623Z"),obj: {}},[],"driver Bike dynamic"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22043,str: "Circle Borders Bouvet Island (Bouvetoya)",num: 52145,date: new Date("2018-09-06T19:19:07.788Z"),array: [new Date("2018-09-06T03:37:09.776Z"),[],new Date("2018-09-06T09:37:13.265Z"),4374,"Tools Refined",55335,new Date("2018-09-06T16:07:52.170Z"),"Product",new Date("2018-09-06T13:59:38.888Z")],obj: {_id: 22044,array: [1183,"Integration Soft eyeballs",{_id: 22045,str: "payment Refined",num: 81835,date: new Date("2018-09-06T17:58:25.235Z"),array: [],obj: {_id: 22046,num: 37447,date: new Date("2018-09-06T17:36:48.427Z"),obj: {}}},[],{_id: 22047,str: "overriding attitude"}],obj: {_id: 22048,str: "Metrics Optional",num: 54796,date: new Date("2018-09-06T10:50:21.481Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 22049,str: "auxiliary copy De-engineered",num: 34523,date: new Date("2018-09-06T16:42:30.378Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 22050,str: "alarm grid-enabled",num: 48641,date: new Date("2018-09-06T19:08:21.495Z"),array: [11142,"Shores",new Date("2018-09-06T01:33:12.950Z"),{_id: 22051,str: "back up wireless context-sensitive",num: 87532,date: new Date("2018-09-06T03:52:07.428Z"),array: [],obj: {}},10932,{_id: 22052,str: "Cape Verde Escudo capacitor",array: [],obj: {}},"24/7 Iraqi Dinar Plaza",[68266,new Date("2018-09-06T07:48:35.164Z"),["navigate holistic"]],[new Date("2018-09-06T13:39:12.846Z")],{_id: 22053,str: "Generic deposit",num: 57001,date: new Date("2018-09-05T20:34:32.718Z"),array: [],obj: {_id: 22054,num: 37273,date: new Date("2018-09-06T16:58:08.980Z"),obj: {_id: 22055,num: 60108,date: new Date("2018-09-06T13:46:56.759Z"),array: [new Date("2018-09-06T03:12:22.823Z")]}}},16743,9694],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22056,str: "Rustic Soft Chips",num: 8417,date: new Date("2018-09-06T07:33:31.261Z"),obj: {_id: 22057,str: "Soft JSON navigate",array: [new Date("2018-09-05T20:16:19.723Z"),1409,78799,"bypass Small",{_id: 22058,str: "optimizing",num: 61525,array: []},{_id: 22059,str: "encompassing harness convergence",num: 30193,date: new Date("2018-09-06T11:36:35.586Z"),array: [],obj: {}}],obj: {_id: 22060,str: "Pants",num: 95228,date: new Date("2018-09-05T22:47:31.108Z"),array: [new Date("2018-09-06T15:34:57.329Z"),[99096,[],62196,{_id: 22061,date: new Date("2018-09-06T05:48:25.448Z"),array: ["Bedfordshire connecting Keyboard"],obj: {}},"Kwanza time-frame",new Date("2018-09-06T10:33:22.250Z")],[],4725,"scalable"],obj: {_id: 22062,date: new Date("2018-09-06T17:38:27.690Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 22063,str: "Mews",num: 52727,date: new Date("2018-09-06T10:28:12.318Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22064,str: "web services Auto Loan Account",num: 67461,date: new Date("2018-09-06T05:11:52.069Z"),obj: {_id: 22065,str: "Lead Ferry",num: 47840,date: new Date("2018-09-06T09:33:44.296Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22066,str: "card copy",num: 79122,date: new Date("2018-09-06T18:34:11.587Z"),array: [67253,37893,[],new Date("2018-09-05T22:55:09.964Z"),[],"generate lime",new Date("2018-09-06T17:10:24.296Z"),"Dynamic","input",new Date("2018-09-06T01:52:29.869Z"),"synthesizing application",27495,10805],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22067,str: "Mouse Cayman Islands Dollar Garden",date: new Date("2018-09-06T14:01:24.004Z"),array: ["Wooden",["disintermediate Metal Coordinator",27576,"COM",new Date("2018-09-06T06:40:47.236Z")],{_id: 22068,str: "Cambridgeshire Checking Account",num: 10434,date: new Date("2018-09-06T15:28:12.005Z"),array: [],obj: {_id: 22069,str: "cross-platform",num: 19769,date: new Date("2018-09-05T21:49:17.055Z"),array: [],obj: {}}},new Date("2018-09-06T10:42:19.807Z"),35464,new Date("2018-09-06T04:23:11.100Z"),new Date("2018-09-06T07:33:33.422Z"),"matrix",75181,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22070,str: "non-volatile",num: 14039,date: new Date("2018-09-06T16:59:42.817Z"),array: [],obj: {_id: 22071,str: "payment responsive",num: 42423,date: new Date("2018-09-05T21:24:01.098Z"),array: [[],84082,new Date("2018-09-06T06:49:23.868Z"),new Date("2018-09-06T00:47:51.937Z"),"withdrawal Customizable feed",new Date("2018-09-06T05:07:33.407Z"),["Bedfordshire Agent Credit Card Account","ADP Handcrafted",33599],[[26214,new Date("2018-09-06T15:55:44.483Z"),new Date("2018-09-05T21:30:11.704Z"),{_id: 22072,num: 28208,obj: {}}]],{_id: 22073,num: 86372,date: new Date("2018-09-06T13:51:23.802Z"),array: []},{_id: 22074,str: "monetize pixel Florida",date: new Date("2018-09-06T14:44:22.555Z"),array: [64588,25127],obj: {_id: 22075,str: "Savings Account seize",num: 57312,date: new Date("2018-09-06T14:37:11.887Z"),obj: {_id: 22076,date: new Date("2018-09-06T12:40:28.638Z"),obj: {}}}},{_id: 22077,date: new Date("2018-09-06T02:55:37.685Z"),array: [],obj: {_id: 22078,str: "Egyptian Pound",num: 23694,array: []}}]}});
    },

    function(coll) {
        return coll.insert({_id: 22079,num: 29719,date: new Date("2018-09-06T05:53:38.376Z"),array: ["orchestrate",[{_id: 22080,str: "Hollow Chicken Panama",num: 69032,date: new Date("2018-09-06T02:58:55.816Z"),array: [],obj: {}},new Date("2018-09-06T19:08:07.289Z"),94390,82064,new Date("2018-09-06T00:38:51.060Z")],new Date("2018-09-06T12:39:55.733Z"),"bricks-and-clicks",{_id: 22081,str: "Clothing generating Ethiopia",num: 42070,date: new Date("2018-09-06T14:22:04.446Z"),obj: {_id: 22082,str: "compressing",num: 6604,date: new Date("2018-09-06T00:55:43.321Z"),array: [],obj: {_id: 22083,num: 2637,date: new Date("2018-09-05T23:47:33.905Z")}}},new Date("2018-09-06T19:47:37.044Z"),9845]});
    },

    function(coll) {
        return coll.insert({_id: 22084,str: "panel",num: 62398,date: new Date("2018-09-06T01:36:48.328Z"),array: [[],new Date("2018-09-06T17:34:15.259Z"),"neural Games",24792,"Chair plum Avon","Implemented Court Licensed",{_id: 22085,str: "Health",num: 96711,date: new Date("2018-09-06T19:33:59.106Z"),obj: {_id: 22086,num: 84459,date: new Date("2018-09-06T09:27:31.460Z"),array: [18989,new Date("2018-09-06T10:51:15.401Z"),"New Jersey"],obj: {}}},18551,new Date("2018-09-05T21:05:49.277Z"),77855,{_id: 22087,num: 99117,date: new Date("2018-09-05T23:49:41.612Z"),array: [new Date("2018-09-06T16:16:01.255Z")],obj: {_id: 22088,array: []}}]});
    },

    function(coll) {
        return coll.insert({_id: 22089,str: "syndicate visualize Fresh",num: 14383,date: new Date("2018-09-06T17:56:39.584Z"),array: [],obj: {_id: 22090,num: 40406,date: new Date("2018-09-06T09:19:03.475Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22091,str: "5th generation driver",num: 52791,date: new Date("2018-09-06T00:50:07.562Z"),array: [{_id: 22092,str: "collaborative Taka multi-tasking",num: 14669,date: new Date("2018-09-06T15:37:45.729Z"),array: [],obj: {_id: 22093,str: "Steel",num: 7034,date: new Date("2018-09-05T22:49:57.235Z"),array: [],obj: {_id: 22094,str: "Saint Vincent and the Grenadines",num: 19368,date: new Date("2018-09-06T08:36:30.522Z"),array: [],obj: {}}}},"navigate","Director",new Date("2018-09-06T08:42:37.365Z"),61972,new Date("2018-09-06T19:42:57.523Z"),84107,67366,new Date("2018-09-06T02:23:14.504Z"),new Date("2018-09-06T18:12:19.902Z"),new Date("2018-09-06T04:16:00.368Z"),{_id: 22095,num: 3874,obj: {}},["evolve auxiliary"],"Maine"]});
    },

    function(coll) {
        return coll.insert({_id: 22096,str: "Jewelery",num: 14768,date: new Date("2018-09-06T06:21:04.552Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22097,str: "channels redefine",num: 79591,date: new Date("2018-09-05T21:24:37.481Z"),array: ["Isle of Man Garden Supervisor",1342,new Date("2018-09-06T12:58:52.580Z"),new Date("2018-09-05T22:16:21.087Z"),{_id: 22098,str: "Supervisor",num: 94768,date: new Date("2018-09-06T07:49:12.935Z"),obj: {}},{_id: 22099,str: "capability",num: 70997,date: new Date("2018-09-06T17:18:42.088Z"),array: [62710],obj: {}},95108,"Avon Implementation software",{_id: 22100,str: "Table overriding",num: 82062,array: []},[new Date("2018-09-06T16:07:16.485Z")],{_id: 22101,str: "Credit Card Account",date: new Date("2018-09-06T01:46:49.642Z"),obj: {_id: 22102,num: 57835,date: new Date("2018-09-06T17:53:05.888Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 22103,str: "Ergonomic",num: 16558,date: new Date("2018-09-05T20:38:38.862Z"),array: [],obj: {_id: 22104,str: "heuristic",date: new Date("2018-09-06T11:13:41.416Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22105,str: "cyan",num: 16630,date: new Date("2018-09-05T23:11:54.634Z"),array: [48050,"Venezuela",[],new Date("2018-09-05T21:30:56.696Z"),"hack",68648,new Date("2018-09-05T20:20:24.457Z"),"California",[],"panel Enhanced",new Date("2018-09-06T09:05:39.877Z"),[{_id: 22106,str: "haptic Personal Loan Account matrix",num: 96527,date: new Date("2018-09-06T05:12:22.465Z"),obj: {}},95652],new Date("2018-09-06T07:32:19.739Z"),[]],obj: {_id: 22107,str: "one-to-one Assimilated",date: new Date("2018-09-06T00:39:31.903Z"),array: [{_id: 22108,str: "Hill Granite",array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 22109,str: "attitude-oriented Czech Republic",num: 55904,date: new Date("2018-09-06T03:10:38.580Z"),array: [35325,new Date("2018-09-06T05:59:45.293Z"),97051,new Date("2018-09-06T08:53:02.674Z"),"24/7 North Dakota",89993,"Shoes cultivate",41266,"Squares",[],new Date("2018-09-06T04:23:28.802Z"),"Avon"],obj: {_id: 22110,str: "Fantastic transmitter",num: 2217,array: [new Date("2018-09-06T07:17:47.784Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22111,str: "tertiary invoice",num: 91020,date: new Date("2018-09-06T17:37:41.888Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22112,str: "Grass-roots intangible Uruguay",num: 4870,date: new Date("2018-09-05T21:14:05.995Z"),array: [46977,"virtual Steel matrix",new Date("2018-09-06T02:27:05.708Z"),80369,[],"SDD Grocery Electronics","generating teal",[],{_id: 22113,str: "International holistic",num: 84039,date: new Date("2018-09-05T23:49:40.669Z"),array: [91912,66483,new Date("2018-09-06T01:57:09.658Z"),new Date("2018-09-06T18:14:56.382Z"),new Date("2018-09-06T03:13:26.041Z"),"New Israeli Sheqel payment"],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22114,str: "override Switchable",num: 49382,date: new Date("2018-09-05T21:57:48.038Z"),array: [99564,45150,new Date("2018-09-06T16:56:54.060Z"),30939,"Rand Metal",new Date("2018-09-05T22:44:21.691Z"),new Date("2018-09-05T22:14:06.382Z"),"Cambridgeshire",33845,58159,new Date("2018-09-06T04:41:14.415Z")],obj: {_id: 22115,num: 89165,obj: {_id: 22116,str: "Internal Forward",num: 39602,date: new Date("2018-09-06T06:25:29.039Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22117,str: "Outdoors 1080p back up",num: 14253,date: new Date("2018-09-06T09:48:10.901Z"),obj: {_id: 22118,str: "Haven XML Cambridgeshire",num: 88710,date: new Date("2018-09-06T16:25:33.413Z"),array: [new Date("2018-09-06T17:27:41.663Z"),18750,"Computers Movies Cliff",28236,[],new Date("2018-09-06T01:42:58.673Z"),"Optimization USB Handmade Rubber Salad","workforce virtual",new Date("2018-09-06T18:12:48.934Z"),{_id: 22119,str: "Brand Metal Ergonomic",array: [],obj: {_id: 22120,num: 39454,date: new Date("2018-09-06T14:05:56.564Z"),array: [{_id: 22121,str: "calculating Creative redundant",date: new Date("2018-09-06T17:08:17.055Z"),array: []},76148,55415,new Date("2018-09-06T04:36:55.272Z"),32328],obj: {}}},"back up Handmade Steel Computer"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22122,str: "port Avon",num: 25016,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22123,num: 29970,date: new Date("2018-09-06T10:27:30.888Z"),array: [new Date("2018-09-05T23:02:00.400Z"),54316,{_id: 22124,str: "De-engineered Jewelery Director",date: new Date("2018-09-06T18:08:50.855Z"),array: [],obj: {}},"Somalia technologies Music",57612,new Date("2018-09-06T03:15:16.225Z"),{_id: 22125,str: "Team-oriented Stand-alone Fords",num: 98835,date: new Date("2018-09-05T21:05:23.163Z"),array: ["online",5261]},[],69820,23233,73356,{_id: 22126,str: "Passage Baby salmon",num: 51275,date: new Date("2018-09-05T23:13:19.857Z"),array: ["archive Beauty Graphic Interface","sensor"]},"THX"],obj: {_id: 22127,str: "mobile",date: new Date("2018-09-06T09:40:14.090Z")}});
    },

    function(coll) {
        return coll.insert({_id: 22128,str: "Accountability payment",num: 15533,date: new Date("2018-09-06T05:22:07.272Z"),array: [new Date("2018-09-06T13:02:54.938Z"),9068,78989,new Date("2018-09-06T15:38:11.961Z"),{_id: 22129,date: new Date("2018-09-06T16:00:28.930Z"),array: [],obj: {_id: 22130,str: "Frozen Fiji",num: 15143,array: [],obj: {_id: 22131,str: "wireless",num: 71324,date: new Date("2018-09-05T22:31:06.021Z"),array: [new Date("2018-09-06T16:21:57.168Z")],obj: {}}}},"Reverse-engineered",[],"Zambia Circles"]});
    },

    function(coll) {
        return coll.insert({_id: 22132,str: "Advanced",num: 5081,date: new Date("2018-09-06T13:59:13.588Z"),array: [89870,79930,{_id: 22133,str: "real-time",num: 15256,date: new Date("2018-09-05T20:35:01.532Z"),obj: {_id: 22134,str: "Shoes paradigm Borders",num: 4834,date: new Date("2018-09-06T06:54:08.669Z"),array: ["unleash"],obj: {_id: 22135,str: "New Israeli Sheqel Bedfordshire",num: 10907,date: new Date("2018-09-06T11:47:11.202Z"),array: [],obj: {_id: 22136,date: new Date("2018-09-06T11:18:55.726Z"),array: []}}}},new Date("2018-09-06T10:20:26.851Z"),56422,new Date("2018-09-05T20:17:04.656Z"),[],"Marketing Zimbabwe Dollar",[8287,"Dynamic Response",new Date("2018-09-06T05:14:09.397Z"),[new Date("2018-09-06T11:01:57.369Z"),"bus"],85014,[{_id: 22137,str: "Re-contextualized PCI",array: [],obj: {}}]],"Senior Table executive",{_id: 22138,str: "Global Berkshire connect",date: new Date("2018-09-06T02:00:03.385Z"),array: ["Toys digital JSON",10501,13560],obj: {_id: 22139,str: "Factors quantify Forward",num: 33241}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22140,str: "violet",num: 99794,date: new Date("2018-09-06T05:51:30.703Z"),array: ["multimedia",95551,new Date("2018-09-06T08:45:26.862Z"),[],new Date("2018-09-06T00:50:24.665Z"),44557,new Date("2018-09-06T05:52:03.321Z"),"Interactions target",[],74559,"Human",new Date("2018-09-05T22:09:17.213Z"),{_id: 22141,num: 18573,date: new Date("2018-09-06T10:24:16.755Z"),array: [[]],obj: {_id: 22142,str: "encryption",date: new Date("2018-09-06T18:17:56.723Z"),array: [new Date("2018-09-05T20:27:00.858Z")],obj: {_id: 22143,str: "integrated Gorgeous Rubber Table homogeneous",num: 61153,array: [4623],obj: {_id: 22144,str: "TCP cultivate",num: 72215,date: new Date("2018-09-06T08:23:19.911Z")}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 22145,num: 20025,date: new Date("2018-09-06T00:34:22.579Z"),obj: {_id: 22146,str: "payment Automotive copying",num: 986,date: new Date("2018-09-06T10:45:00.039Z"),array: [],obj: {_id: 22147,str: "application scale 24/365",num: 48115,date: new Date("2018-09-05T22:40:59.724Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 22148,str: "New York",date: new Date("2018-09-06T09:00:28.266Z"),array: [new Date("2018-09-06T14:17:23.998Z"),"Gorgeous port",71908,23474,25409,{_id: 22149,str: "Incredible Auto Loan Account",num: 88928,date: new Date("2018-09-06T19:43:34.725Z"),array: [],obj: {}},"HDD 24/7 New Jersey",36476,[new Date("2018-09-05T20:20:27.517Z")],new Date("2018-09-06T07:53:14.257Z"),new Date("2018-09-05T20:59:57.594Z"),"eyeballs"],obj: {_id: 22150,str: "Mill Terrace quantifying",num: 8826,array: ["Refined Rubber Table Tools calculating",65832],obj: {_id: 22151,str: "Technician Forges",num: 58234,array: ["function",[],new Date("2018-09-06T17:36:05.189Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 22152,str: "Administrator",num: 3576,date: new Date("2018-09-06T11:00:41.422Z"),obj: {_id: 22153,num: 3031,date: new Date("2018-09-06T07:17:01.149Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22154,str: "Product Fantastic Steel Computer back up",num: 12349,date: new Date("2018-09-06T16:19:00.054Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22155,str: "Director Arizona Graphic Interface",num: 1173,date: new Date("2018-09-06T06:00:07.529Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22156,str: "Grocery Fantastic Concrete",num: 69961,date: new Date("2018-09-05T20:23:58.004Z"),array: [new Date("2018-09-06T18:02:22.009Z"),29022,"Bedfordshire lime",[],48751,"RAM transmit","challenge","override parse",new Date("2018-09-06T04:13:36.320Z"),94792,new Date("2018-09-05T23:50:18.029Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22157,str: "driver Car Cambridgeshire",num: 48896,date: new Date("2018-09-06T01:27:58.661Z"),array: ["Administrator Concrete",new Date("2018-09-06T00:45:05.771Z"),"Bedfordshire",{_id: 22158,str: "Indian Rupee",num: 51155,date: new Date("2018-09-05T20:03:58.736Z"),obj: {}},[],4085,9939,new Date("2018-09-06T06:40:33.222Z"),[[new Date("2018-09-06T06:41:20.590Z"),new Date("2018-09-06T17:39:40.092Z"),{_id: 22159,num: 27121,date: new Date("2018-09-05T23:51:48.360Z"),array: [],obj: {_id: 22160,str: "Shoes",num: 66435,date: new Date("2018-09-06T01:56:26.946Z"),array: [],obj: {}}}],95375,59844],new Date("2018-09-05T20:36:53.142Z"),"Incredible Metal Bacon Concrete program",new Date("2018-09-06T10:44:09.622Z")]});
    },

    function(coll) {
        return coll.insert({_id: 22161,str: "payment Product",num: 28865,date: new Date("2018-09-06T14:53:05.436Z"),array: ["revolutionary Intelligent Steel Pizza",new Date("2018-09-06T09:53:47.951Z"),26176,new Date("2018-09-06T19:47:39.860Z"),[98893,new Date("2018-09-06T02:26:02.198Z"),"compress Product Grocery",[]],"Industrial SMS",new Date("2018-09-06T16:34:10.709Z"),88729,67936,{_id: 22162,str: "Gloves",date: new Date("2018-09-05T21:21:31.593Z"),obj: {_id: 22163,str: "Sausages Shore Metal",num: 60377,date: new Date("2018-09-05T22:21:28.008Z"),array: [],obj: {}}},"override"],obj: {_id: 22164,num: 53728,date: new Date("2018-09-06T15:18:06.748Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22165,str: "revolutionize magenta",num: 56274,date: new Date("2018-09-06T11:23:31.379Z"),array: ["Louisiana orange",new Date("2018-09-06T10:40:28.397Z"),61003,new Date("2018-09-06T15:42:32.331Z"),{_id: 22166,str: "monitor Manor Rustic",num: 60718,date: new Date("2018-09-05T20:41:06.489Z"),array: [5986,82588,new Date("2018-09-06T04:14:01.339Z")],obj: {}},"analyzer","Direct deposit",8278,{_id: 22167,str: "Auto Loan Account e-business",num: 59279,array: [],obj: {}},"pixel",new Date("2018-09-06T01:32:40.027Z")]});
    },

    function(coll) {
        return coll.insert({_id: 22168,str: "Manager CFP Franc",num: 59900,date: new Date("2018-09-06T07:59:03.335Z"),array: ["magenta",new Date("2018-09-06T00:32:45.325Z"),new Date("2018-09-05T20:43:29.918Z"),"back-end",99614,"Soft metrics",new Date("2018-09-06T07:58:26.142Z"),new Date("2018-09-05T20:10:28.903Z"),{_id: 22169,str: "regional",num: 54661,date: new Date("2018-09-06T06:31:26.126Z"),obj: {_id: 22170,str: "Incredible Germany Future",date: new Date("2018-09-06T07:31:32.867Z"),array: [new Date("2018-09-05T22:14:17.464Z")],obj: {}}},new Date("2018-09-05T23:08:55.096Z"),"Assistant",[],new Date("2018-09-06T01:44:46.806Z")],obj: {_id: 22171,str: "Applications panel",num: 46318,date: new Date("2018-09-06T10:05:29.380Z"),array: [33944]}});
    },

    function(coll) {
        return coll.insert({_id: 22172,str: "Fresh",num: 28100,date: new Date("2018-09-05T22:46:32.593Z"),array: [60253,86113,{_id: 22173,str: "XML multi-byte",num: 91088,date: new Date("2018-09-06T08:54:16.613Z"),array: [],obj: {_id: 22174,str: "3rd generation",num: 58440,array: [[],"Keyboard eco-centric teal"],obj: {}}},"withdrawal","withdrawal",new Date("2018-09-06T10:13:44.095Z"),new Date("2018-09-06T03:36:30.399Z"),new Date("2018-09-06T07:23:51.254Z"),{_id: 22175,str: "invoice",num: 21236,date: new Date("2018-09-06T09:01:46.956Z"),array: ["Outdoors invoice generating",35375,96883],obj: {_id: 22176,obj: {}}},"Interactions",new Date("2018-09-06T00:06:59.934Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22177,str: "Sleek Steel Mouse interactive robust",num: 73344,date: new Date("2018-09-06T16:36:38.324Z"),array: [{_id: 22178,str: "Green",num: 8234,date: new Date("2018-09-06T03:10:08.649Z"),array: [],obj: {}},51714,new Date("2018-09-06T01:52:56.007Z"),"infomediaries Customizable Chief",10936,"Fresh",new Date("2018-09-06T04:39:10.508Z"),new Date("2018-09-06T17:11:05.030Z"),new Date("2018-09-06T13:07:26.412Z"),"Assurance Chief",new Date("2018-09-05T21:56:27.487Z"),"Estates Home Loan Account",73050],obj: {_id: 22179,str: "Response Tasty Plastic Pants",num: 2664,date: new Date("2018-09-06T03:09:25.283Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22180,str: "payment",num: 33026,date: new Date("2018-09-06T11:54:18.431Z"),array: ["Concrete",13311,"Cambodia cross-platform deploy",72018,new Date("2018-09-06T19:19:29.077Z"),{_id: 22181,str: "Steel",date: new Date("2018-09-06T00:59:29.698Z"),obj: {_id: 22182,str: "Key",num: 84462,date: new Date("2018-09-06T09:03:24.837Z"),obj: {_id: 22183,str: "Officer",num: 67242,array: []}}},[95395],new Date("2018-09-06T10:33:36.437Z"),[],[662],{_id: 22184,num: 15836,array: [],obj: {}},"human-resource back up",40304,new Date("2018-09-06T10:05:58.996Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22185,str: "Multi-layered North Korean Won",num: 55010,date: new Date("2018-09-06T00:13:08.551Z"),array: [],obj: {_id: 22186,num: 88285,date: new Date("2018-09-06T08:58:49.102Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22187,str: "alarm Chief SDD",num: 68539,date: new Date("2018-09-06T14:00:53.686Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22188,str: "Managed Analyst",num: 55409,date: new Date("2018-09-06T02:06:53.807Z"),array: [88728,"Sausages Solomon Islands Dollar efficient",77155,"payment",[88523,new Date("2018-09-06T08:29:43.731Z")],new Date("2018-09-06T09:58:14.688Z"),9253,"Soft Senegal",new Date("2018-09-06T08:23:42.920Z"),[],{_id: 22189,str: "payment interface Causeway",num: 21784,date: new Date("2018-09-06T13:40:20.437Z")}],obj: {_id: 22190,str: "fuchsia",num: 88978,date: new Date("2018-09-06T08:47:42.444Z"),array: [],obj: {_id: 22191,str: "reinvent",date: new Date("2018-09-06T18:55:59.821Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22192,str: "panel Gorgeous Cotton Tuna",num: 34547,date: new Date("2018-09-06T14:17:07.362Z"),array: [new Date("2018-09-06T01:41:57.237Z"),"payment Branch",49871,74681,new Date("2018-09-06T08:51:05.895Z"),new Date("2018-09-06T07:56:07.918Z"),[],"Buckinghamshire Ergonomic Designer","fresh-thinking",61740,75066,{_id: 22193,date: new Date("2018-09-06T16:25:41.416Z")},36598],obj: {_id: 22194,str: "uniform users transmitter",num: 57874,array: [["withdrawal Chief Station",new Date("2018-09-06T14:40:44.907Z")],new Date("2018-09-06T01:42:31.590Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22195,num: 34806,date: new Date("2018-09-05T20:10:44.382Z"),array: [new Date("2018-09-06T19:42:45.504Z"),35465,new Date("2018-09-06T15:47:15.000Z"),11302,new Date("2018-09-06T09:40:01.394Z"),new Date("2018-09-05T22:34:10.466Z"),{_id: 22196,str: "Somoni Buckinghamshire Unbranded Granite Gloves",num: 48059,date: new Date("2018-09-06T05:33:24.148Z"),array: [],obj: {_id: 22197,str: "Implemented"}},"back-end",{_id: 22198,str: "Crest Optional",obj: {}},95819,new Date("2018-09-06T06:35:03.022Z"),16034],obj: {_id: 22199,str: "Philippine Peso Down-sized",num: 43986,date: new Date("2018-09-06T02:23:43.654Z")}});
    },

    function(coll) {
        return coll.insert({_id: 22200,str: "Tunnel",num: 56008,array: [],obj: {_id: 22201,str: "streamline",date: new Date("2018-09-06T11:44:19.227Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22202,str: "Steel synergies",num: 34268,date: new Date("2018-09-06T08:21:52.884Z"),array: [17023,new Date("2018-09-06T05:43:23.354Z"),new Date("2018-09-06T07:14:14.724Z"),"Movies transmitting Tasty",{_id: 22203,str: "Cambridgeshire",num: 42528,date: new Date("2018-09-06T18:57:51.629Z"),array: [],obj: {}},52786,new Date("2018-09-06T06:09:54.018Z"),58935,"redundant Central",{_id: 22204,str: "users coherent Tonga",num: 66533},"solid state",2058,["Keyboard Games Buckinghamshire"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22205,str: "Arkansas",num: 1926,date: new Date("2018-09-06T02:08:42.005Z"),array: [29503,"local area network communities systems",{_id: 22206,num: 89778,date: new Date("2018-09-06T16:26:47.188Z"),array: [],obj: {_id: 22207,str: "back-end Director",num: 90061,date: new Date("2018-09-06T02:30:48.109Z"),array: [],obj: {}}},"relationships",new Date("2018-09-06T00:03:51.392Z"),[33805],39286,"Beauty COM Compatible",{_id: 22208,str: "Chief connecting",date: new Date("2018-09-06T12:23:46.149Z"),array: [],obj: {}},new Date("2018-09-06T19:09:03.291Z"),3305,new Date("2018-09-06T07:46:54.034Z"),"XML"],obj: {_id: 22209,str: "Soft",array: [2846,{_id: 22210,str: "Games bypassing",num: 78100,date: new Date("2018-09-06T15:22:45.187Z")},[2147,"Marshall Islands Washington Intelligent Cotton Mouse"]]}});
    },

    function(coll) {
        return coll.insert({_id: 22211,str: "parsing SAS Mission",num: 37919,date: new Date("2018-09-06T10:14:38.314Z"),array: [69112,"Frozen","Refined",new Date("2018-09-06T03:23:21.829Z"),new Date("2018-09-06T01:51:55.981Z"),new Date("2018-09-06T13:29:09.843Z"),81833,[],"paradigm Louisiana",[]],obj: {_id: 22212,str: "Tuna infomediaries Hat",num: 74430,array: [64795,73683]}});
    },

    function(coll) {
        return coll.insert({_id: 22213,str: "JSON",date: new Date("2018-09-06T10:25:40.145Z"),array: ["Implementation parse Ports",new Date("2018-09-05T22:32:50.814Z"),90,"Granite",50677,new Date("2018-09-05T21:33:42.280Z"),{_id: 22214,str: "connect Investment Account Cameroon",num: 92025,date: new Date("2018-09-05T20:50:06.330Z"),array: [35795,[],"Chief Integrated","Savings Account Investment Account","lavender Auto Loan Account deliverables"],obj: {_id: 22215,str: "COM Engineer Checking Account",num: 31167,date: new Date("2018-09-06T08:40:42.830Z"),array: [],obj: {}}},new Date("2018-09-06T03:28:26.953Z"),[],[]]});
    },

    function(coll) {
        return coll.insert({_id: 22216,str: "1080p",num: 8766,date: new Date("2018-09-06T00:28:01.077Z"),array: [new Date("2018-09-06T00:51:29.855Z"),77911,"Auto Loan Account Bedfordshire",new Date("2018-09-06T19:15:20.686Z"),{_id: 22217,str: "Director Coordinator",num: 34391,date: new Date("2018-09-06T05:25:11.481Z"),array: [],obj: {_id: 22218,str: "cutting-edge European Monetary Unit (E.M.U.-6) eyeballs",num: 54777,date: new Date("2018-09-06T18:43:53.601Z"),array: [new Date("2018-09-06T12:39:52.862Z"),{_id: 22219,str: "Practical Metal Soap",num: 38523,date: new Date("2018-09-05T20:11:39.493Z"),array: [],obj: {_id: 22220,date: new Date("2018-09-05T22:29:09.909Z"),obj: {}}},"Borders",5310],obj: {_id: 22221,str: "Personal Loan Account Soft Investor",num: 51406,date: new Date("2018-09-06T09:39:44.812Z"),array: []}}},52108,"Soft Buckinghamshire withdrawal",[{_id: 22222,date: new Date("2018-09-06T13:25:12.502Z")},40985,"Kansas robust"],[new Date("2018-09-06T04:02:44.277Z")],61470,"bypassing technologies dynamic",new Date("2018-09-06T13:30:36.403Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22223,str: "Practical Rubber Car",num: 7154,date: new Date("2018-09-06T13:49:46.190Z"),array: ["syndicate uniform Rand Loti",new Date("2018-09-06T06:45:25.062Z"),40674,new Date("2018-09-06T04:56:31.437Z"),5620,52219,{_id: 22224,str: "AGP channels Shirt",date: new Date("2018-09-06T01:41:13.933Z"),array: [],obj: {}},[[new Date("2018-09-06T13:28:38.611Z")],"Developer"],[],"Steel Ball","Falkland Islands Pound",new Date("2018-09-06T18:49:52.860Z")],obj: {_id: 22225,num: 14676,date: new Date("2018-09-06T01:06:33.299Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22226,str: "Response",num: 66062,date: new Date("2018-09-06T13:38:46.507Z"),array: [],obj: {_id: 22227,str: "Kids Extended",num: 18626,date: new Date("2018-09-06T08:11:03.227Z"),array: [new Date("2018-09-06T09:28:42.864Z"),"invoice Cambridgeshire",new Date("2018-09-05T20:42:03.151Z"),"neural",{_id: 22228,str: "Mississippi programming harness",num: 10085,date: new Date("2018-09-05T20:44:23.393Z"),array: [89571],obj: {}},27779,40990,"convergence Licensed Concrete Chicken",new Date("2018-09-06T07:35:55.787Z"),new Date("2018-09-06T14:31:32.425Z"),[81718,new Date("2018-09-06T09:22:04.012Z")],[41624,[]],{_id: 22229,str: "Legacy",date: new Date("2018-09-06T12:45:07.115Z"),array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22230,str: "Sleek Fundamental",date: new Date("2018-09-06T09:07:31.046Z"),obj: {_id: 22231,str: "Berkshire",num: 87829,date: new Date("2018-09-06T17:31:49.419Z"),array: [{_id: 22232,str: "Road",num: 16794,date: new Date("2018-09-06T14:44:07.737Z"),array: ["Savings Account solid state",87089,"Lodge Chair Auto Loan Account",91774],obj: {}},new Date("2018-09-06T07:37:37.344Z"),new Date("2018-09-05T21:20:57.901Z"),[],"indexing orange Pa'anga",[50722,new Date("2018-09-06T04:32:01.374Z"),94797],"Guinea technologies Incredible",17416,new Date("2018-09-06T07:29:40.240Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22233,str: "encompassing navigate seize",num: 52916,date: new Date("2018-09-05T21:24:15.505Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22234,str: "Outdoors Functionality",num: 68258,date: new Date("2018-09-06T12:01:32.375Z"),array: [["compress",new Date("2018-09-05T21:31:19.086Z"),81146,new Date("2018-09-06T13:34:55.093Z")],23472,{_id: 22235,str: "override internet solution Prairie",num: 79636,date: new Date("2018-09-06T00:00:53.883Z"),array: [],obj: {}},13962,["Auto Loan Account",[]],{_id: 22236,str: "Rubber Facilitator",num: 53224},"Associate Persevering Virginia","Practical",new Date("2018-09-06T07:41:36.626Z"),new Date("2018-09-06T05:29:01.694Z"),15009],obj: {_id: 22237,date: new Date("2018-09-06T17:13:46.904Z"),array: [],obj: {_id: 22238,str: "Markets Tunisian Dinar",num: 43936,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22239,str: "Plaza",num: 15055,date: new Date("2018-09-06T01:38:32.463Z"),array: [new Date("2018-09-05T21:30:12.203Z"),"matrix reboot Tools",15595,32809,29227,"Home quantify transmitter",[],"Taiwan"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22240,str: "Licensed Fresh Mouse",num: 67642,date: new Date("2018-09-05T23:54:40.782Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22241,str: "niches withdrawal",num: 3999,date: new Date("2018-09-06T18:16:13.044Z"),array: [{_id: 22242,str: "enhance Solutions",date: new Date("2018-09-06T11:23:27.420Z"),array: [24791,new Date("2018-09-06T12:42:31.799Z"),"hack Associate",new Date("2018-09-05T20:37:14.663Z"),85061],obj: {}},"grey",new Date("2018-09-05T20:18:00.861Z"),58856,{_id: 22243,str: "Surinam Dollar",num: 43893,array: [],obj: {_id: 22244,num: 92372,date: new Date("2018-09-06T11:48:16.976Z"),array: [],obj: {_id: 22245,str: "calculating Hat lime",date: new Date("2018-09-06T03:46:01.765Z"),obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 22246,str: "transmit",num: 93749,date: new Date("2018-09-05T23:05:52.939Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22247,str: "Cheese grid-enabled Investor",num: 80312,date: new Date("2018-09-06T16:46:49.277Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22248,str: "Anguilla",num: 93372,date: new Date("2018-09-05T22:09:13.097Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22249,num: 66272,date: new Date("2018-09-06T06:28:04.205Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22250,str: "bypassing Sausages Handcrafted",num: 7848,date: new Date("2018-09-06T02:55:25.986Z"),array: [],obj: {_id: 22251,str: "invoice Team-oriented solution-oriented",num: 88163,date: new Date("2018-09-06T04:40:37.786Z")}});
    },

    function(coll) {
        return coll.insert({_id: 22252,str: "Tasty Plastic Pizza Lao People's Democratic Republic",num: 87935,date: new Date("2018-09-06T15:20:31.523Z"),array: [new Date("2018-09-06T19:49:09.071Z"),66055,78544,"JSON","next-generation application",[new Date("2018-09-06T14:23:28.257Z"),{_id: 22253,str: "Chicken teal",num: 6565,date: new Date("2018-09-06T13:40:07.344Z"),array: [],obj: {}},[]],7538,"Groves",new Date("2018-09-06T18:37:52.848Z"),new Date("2018-09-06T16:28:17.341Z"),52939,new Date("2018-09-06T08:49:52.966Z"),1560,{_id: 22254,str: "Compatible relationships Refined Granite Towels",num: 38733,date: new Date("2018-09-06T03:44:40.359Z"),obj: {_id: 22255,str: "Innovative",num: 31006,date: new Date("2018-09-06T15:41:18.855Z"),array: [new Date("2018-09-05T20:44:23.906Z")],obj: {}}}],obj: {_id: 22256,num: 80189,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22257,str: "Sierra Leone Group Handmade",date: new Date("2018-09-06T11:56:26.396Z"),array: [{_id: 22258,str: "FTP",num: 94084,obj: {_id: 22259,num: 37845,date: new Date("2018-09-06T14:44:22.371Z"),array: []}},new Date("2018-09-06T12:51:22.160Z"),"Tasty generate program",17788,90554,[new Date("2018-09-05T22:18:06.156Z"),new Date("2018-09-05T23:08:22.047Z"),new Date("2018-09-06T03:45:47.296Z"),"Small channels Licensed Granite Car","Azerbaijan",[]],50908,98245,"Brand Plastic Generic Metal Fish",{_id: 22260,date: new Date("2018-09-06T16:43:43.888Z"),array: [],obj: {_id: 22261,str: "vortals Sleek Plastic Keyboard Belize Dollar",num: 11546,date: new Date("2018-09-06T06:01:16.251Z"),array: [[]],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 22262,str: "copying",num: 12810,date: new Date("2018-09-05T23:24:45.198Z"),array: [],obj: {_id: 22263,num: 8493,date: new Date("2018-09-06T18:49:54.619Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22264,str: "compressing Home Loan Account application",num: 67522,date: new Date("2018-09-05T20:02:03.143Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 22265,str: "innovate",num: 56089,date: new Date("2018-09-06T15:16:51.947Z"),array: [57305,new Date("2018-09-06T00:24:24.964Z"),10313,[],["Generic Steel Tuna sensor navigate","Singapore Dollar Yemeni Rial transmit"],new Date("2018-09-06T03:50:12.359Z"),new Date("2018-09-06T00:49:56.672Z"),new Date("2018-09-06T19:52:25.430Z"),"synthesize",10477,"Tasty"],obj: {_id: 22266,num: 20577,date: new Date("2018-09-06T02:36:22.837Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22267,str: "Computer",num: 77310,date: new Date("2018-09-05T21:10:44.670Z"),array: [],obj: {_id: 22268,str: "definition Implementation",num: 44250,date: new Date("2018-09-06T05:00:08.731Z"),array: [95667,"Florida Bike e-tailers",[],new Date("2018-09-06T01:59:34.437Z"),44796,[8839,"Hollow hack",new Date("2018-09-06T03:54:30.282Z"),[new Date("2018-09-06T09:58:59.436Z"),78170]],new Date("2018-09-06T04:35:57.118Z"),"Mozambique content",{_id: 22269,str: "CSS microchip",num: 96369,array: [{_id: 22270,num: 46108,date: new Date("2018-09-06T00:56:44.373Z"),obj: {}},{_id: 22271,array: ["red Computer","Albania"]}]},"Granite",new Date("2018-09-05T20:33:57.016Z"),new Date("2018-09-06T15:56:37.412Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22272,str: "1080p Kids",num: 28191,date: new Date("2018-09-06T09:23:54.505Z"),array: ["Pants Maryland violet","indexing index",17630,"Pennsylvania",new Date("2018-09-06T14:45:06.559Z"),new Date("2018-09-06T06:45:42.930Z"),"Run",22414,"Investment Account",new Date("2018-09-06T10:36:16.431Z"),19458,10168,{_id: 22273,str: "generating Tasty Frozen Bacon optimizing",date: new Date("2018-09-06T03:14:26.922Z"),obj: {_id: 22274,str: "olive Ergonomic Wooden Car",num: 23609,date: new Date("2018-09-06T07:30:49.510Z"),array: [],obj: {}}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 22275,str: "card reciprocal",num: 94532,date: new Date("2018-09-06T08:06:09.222Z"),array: [new Date("2018-09-05T22:12:38.715Z"),"Representative",7283,"Saudi Arabia Implementation British Indian Ocean Territory (Chagos Archipelago)",54011,"SDD indexing",new Date("2018-09-06T15:34:09.518Z"),{_id: 22276,str: "Product brand",num: 47900,date: new Date("2018-09-06T14:50:58.494Z"),array: [],obj: {}},"national",[new Date("2018-09-06T04:48:56.397Z"),72991],new Date("2018-09-05T21:30:02.611Z"),{_id: 22277,str: "Home Loan Account Communications",num: 72,array: [],obj: {_id: 22278,num: 69134,date: new Date("2018-09-06T15:18:41.692Z"),array: [27398,20686,new Date("2018-09-06T09:55:44.165Z")]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22279,str: "Pound Sterling",num: 97197,date: new Date("2018-09-06T14:17:21.755Z"),array: [{_id: 22280,str: "redundant Rwanda Franc",date: new Date("2018-09-06T09:16:04.775Z"),array: [],obj: {}},"Handcrafted Frozen Gloves Engineer",new Date("2018-09-06T16:56:05.802Z"),81714,new Date("2018-09-06T12:12:14.577Z"),"purple Metal",{_id: 22281,str: "Markets",num: 22314,date: new Date("2018-09-06T13:28:43.148Z"),array: ["Cambridgeshire Nebraska"],obj: {_id: 22282,str: "Singapore Dollar",date: new Date("2018-09-06T12:44:39.328Z"),obj: {}}},33790,5414,new Date("2018-09-06T08:22:18.923Z"),[[91941,new Date("2018-09-06T15:55:41.035Z")],"Frozen Identity Facilitator"],{_id: 22283,str: "redefine budgetary management",num: 42672,array: []},new Date("2018-09-06T11:09:54.848Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22284,str: "Focused",num: 34313,date: new Date("2018-09-06T01:59:55.977Z"),array: [],obj: {_id: 22285,array: [],obj: {_id: 22286,str: "Director",num: 5278,date: new Date("2018-09-06T11:48:26.230Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22287,str: "Washington Operations benchmark",num: 78792,date: new Date("2018-09-05T20:12:59.778Z"),array: [42138,new Date("2018-09-06T02:29:29.764Z"),[new Date("2018-09-06T09:54:26.477Z")],new Date("2018-09-05T22:40:10.695Z"),19430,"Radial Iraqi Dinar",{_id: 22288,str: "Cheese generate Fiji Dollar",num: 96919,date: new Date("2018-09-06T18:17:09.618Z"),array: [[]],obj: {_id: 22289,str: "Personal Loan Account Soft",num: 64662,date: new Date("2018-09-06T00:40:11.462Z"),array: [],obj: {_id: 22290,str: "Unions",num: 54406,date: new Date("2018-09-06T09:56:34.719Z"),array: [new Date("2018-09-05T20:28:24.241Z"),new Date("2018-09-05T20:42:26.210Z"),"Gourde US Dollar embrace Implementation"],obj: {}}}},"real-time",76558,80946,new Date("2018-09-06T15:17:11.891Z"),{_id: 22291,str: "Avon Synergistic",date: new Date("2018-09-05T23:50:41.482Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 22292,str: "bandwidth Credit Card Account",num: 65842,date: new Date("2018-09-05T21:01:40.915Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 22293,str: "withdrawal",num: 36674,date: new Date("2018-09-06T13:07:50.137Z"),array: [],obj: {_id: 22294,str: "Movies",num: 34402,date: new Date("2018-09-06T17:12:05.910Z"),array: [49308,1959,new Date("2018-09-06T18:24:59.981Z"),"Representative",{_id: 22295,str: "CFP Franc",num: 15232,date: new Date("2018-09-06T16:11:40.034Z"),obj: {}},["pixel"],15683,{_id: 22296,num: 55621,date: new Date("2018-09-06T02:22:41.168Z"),array: [],obj: {}},new Date("2018-09-06T00:35:26.202Z"),[],{_id: 22297,num: 877,array: ["Squares"],obj: {}},new Date("2018-09-06T04:36:54.510Z"),{_id: 22298,str: "Nebraska white",num: 42165,date: new Date("2018-09-05T23:46:14.749Z")}]}});
    },

    function(coll) {
        return coll.insert({_id: 22299,str: "benchmark Executive",num: 97560,date: new Date("2018-09-05T22:09:26.619Z"),array: [28514,6625,"Corporate Table","Malta synergies",new Date("2018-09-06T06:19:51.380Z"),{_id: 22300,str: "Saint Lucia SDR",date: new Date("2018-09-06T13:36:39.715Z"),array: [],obj: {}},new Date("2018-09-06T15:28:11.449Z"),new Date("2018-09-06T13:31:10.965Z"),"pink Antigua and Barbuda Towels",[],new Date("2018-09-06T09:01:33.539Z"),"Refined Handmade"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22301,str: "microchip Consultant parsing",num: 70201,array: [37522,new Date("2018-09-06T00:44:43.340Z"),"e-tailers Small Steel Ball Ergonomic",[new Date("2018-09-06T02:28:51.035Z"),new Date("2018-09-06T06:40:00.534Z"),91256,"relationships cultivate",8540,"mobile Canada"],new Date("2018-09-05T21:27:54.112Z"),"yellow feed",87738,{_id: 22302,str: "bus",num: 86858,date: new Date("2018-09-06T10:24:40.430Z"),array: []},{_id: 22303,num: 4411,date: new Date("2018-09-06T02:35:32.566Z"),array: [],obj: {}}],obj: {_id: 22304,num: 76415,date: new Date("2018-09-06T06:09:14.880Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22305,str: "Fresh Awesome Fresh Chair",num: 91908,date: new Date("2018-09-06T09:12:44.239Z"),array: [86884,7971,31420,new Date("2018-09-06T13:13:14.404Z"),new Date("2018-09-06T07:00:25.961Z"),"Tasty Plastic Computer Paradigm invoice",[],"Shirt Berkshire Ergonomic Fresh Sausages",[new Date("2018-09-06T16:53:58.883Z")],55269,"1080p",{_id: 22306,str: "Hat",num: 30390,date: new Date("2018-09-06T18:03:23.666Z"),obj: {_id: 22307,str: "Electronics",num: 11293,date: new Date("2018-09-06T18:01:58.450Z"),array: [],obj: {}}},[]],obj: {_id: 22308,date: new Date("2018-09-06T06:31:19.880Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22309,str: "synergistic",num: 73967,date: new Date("2018-09-06T06:01:53.670Z"),array: [26603,92280,new Date("2018-09-06T12:22:37.269Z"),"array",71306,new Date("2018-09-06T18:29:19.432Z"),{_id: 22310,str: "Island Pants transparent",num: 30658,date: new Date("2018-09-06T03:15:30.808Z"),array: [],obj: {_id: 22311,date: new Date("2018-09-06T09:48:42.064Z"),array: ["Savings Account Small program"],obj: {}}},{_id: 22312,num: 89630,date: new Date("2018-09-06T15:00:15.959Z"),array: [],obj: {_id: 22313,str: "virtual Accountability Checking Account",num: 92120}},[new Date("2018-09-06T17:49:01.163Z"),[]],["port",62143],"analyzing model",new Date("2018-09-06T15:14:31.453Z"),"schemas"],obj: {_id: 22314,str: "architect Bacon Buckinghamshire",num: 19361,array: [new Date("2018-09-06T14:01:57.478Z"),{_id: 22315,str: "motivating",num: 12816,date: new Date("2018-09-05T22:24:20.535Z"),array: [new Date("2018-09-06T02:32:59.324Z"),{_id: 22316,array: [],obj: {}},"International"]},{_id: 22317,str: "Home Loan Account",date: new Date("2018-09-06T07:59:14.551Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22318,num: 61456,date: new Date("2018-09-06T08:11:11.423Z"),array: ["card National Health",new Date("2018-09-06T05:59:00.295Z"),83721,new Date("2018-09-06T03:32:31.184Z"),new Date("2018-09-05T22:44:36.416Z"),22067,["Peso Uruguayo Uruguay Peso en Unidades Indexadas turquoise"],{_id: 22319,str: "Cordoba Oro transmit",num: 57328,date: new Date("2018-09-06T00:39:48.553Z"),array: [],obj: {}},11100,69226,73885,new Date("2018-09-05T23:16:01.348Z"),"eyeballs"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22320,str: "local",num: 52925,date: new Date("2018-09-06T10:54:10.073Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 22321,str: "Lead",num: 71842,obj: {_id: 22322,str: "open-source",num: 54744,date: new Date("2018-09-06T16:35:19.994Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22323,str: "Program Grocery ROI",num: 29280,date: new Date("2018-09-06T13:54:28.594Z"),obj: {_id: 22324,str: "Sleek",num: 91505,date: new Date("2018-09-06T07:44:31.684Z"),array: [new Date("2018-09-05T20:08:03.018Z"),{_id: 22325,num: 1464,array: [],obj: {_id: 22326,str: "ROI unleash Horizontal",num: 19253,date: new Date("2018-09-06T08:50:26.953Z"),array: ["Jordan SMTP"],obj: {_id: 22327,date: new Date("2018-09-06T18:53:31.497Z"),obj: {}}}},48853,"Berkshire",new Date("2018-09-06T08:53:16.266Z"),{_id: 22328,str: "Generic Granite Chair"},new Date("2018-09-06T18:58:09.072Z"),69557,45114,[],45494,"auxiliary",[{_id: 22329,str: "Music",num: 38912,array: [],obj: {_id: 22330,num: 12561,date: new Date("2018-09-06T10:07:49.274Z"),array: [new Date("2018-09-06T17:49:21.023Z"),["Extended"],[new Date("2018-09-05T21:52:07.164Z"),34545],new Date("2018-09-06T12:55:49.616Z")]}},"invoice"]]}});
    },

    function(coll) {
        return coll.insert({_id: 22331,str: "Bhutan",num: 67357,date: new Date("2018-09-06T18:35:42.477Z"),array: [],obj: {_id: 22332,str: "Customizable National",num: 10975,array: [new Date("2018-09-06T12:02:43.184Z"),new Date("2018-09-06T15:31:28.603Z"),55199,79802,{_id: 22333,str: "Digitized",date: new Date("2018-09-06T15:51:12.670Z"),array: [],obj: {}},"District infomediaries South Dakota",[],28491,"Movies",73477],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22334,str: "port Fresh",num: 22353,date: new Date("2018-09-06T00:53:57.716Z"),array: [],obj: {_id: 22335,num: 98096,date: new Date("2018-09-06T14:04:53.663Z"),array: [new Date("2018-09-06T16:07:34.878Z"),"upward-trending",13493,"Malta Outdoors Home",{_id: 22336,str: "driver",num: 93200,date: new Date("2018-09-06T15:14:18.103Z"),array: [],obj: {}},95826,"Union",new Date("2018-09-06T01:38:47.627Z"),new Date("2018-09-06T01:53:45.662Z"),69727,24230],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22337,str: "Strategist",num: 74603,array: ["project",63700,10423,{_id: 22338,str: "Refined Wooden Pants",num: 57406,date: new Date("2018-09-05T21:57:31.708Z"),obj: {}},new Date("2018-09-06T05:05:34.892Z"),new Date("2018-09-06T01:56:50.232Z"),"magnetic","programming Jewelery Fish",{_id: 22339,str: "Baby indexing",num: 29455,date: new Date("2018-09-06T04:22:23.304Z"),array: [],obj: {_id: 22340,num: 13449,date: new Date("2018-09-05T20:19:15.328Z"),array: []}},new Date("2018-09-06T07:40:00.377Z")],obj: {_id: 22341,str: "feed tan",date: new Date("2018-09-06T07:20:11.107Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22342,str: "e-enable local transmitting",num: 15089,date: new Date("2018-09-06T16:58:16.351Z"),obj: {_id: 22343,str: "hack",num: 98966,date: new Date("2018-09-06T12:47:46.465Z"),array: [90232,"Soft FTP zero tolerance","core","Executive Investor Luxembourg",new Date("2018-09-05T23:59:55.423Z"),{_id: 22344,str: "Bedfordshire supply-chains",num: 82585,date: new Date("2018-09-06T09:27:48.998Z"),obj: {}},45826,25433,[],new Date("2018-09-05T20:27:54.994Z")],obj: {_id: 22345,str: "support migration",num: 18915,date: new Date("2018-09-06T12:31:24.606Z"),array: [new Date("2018-09-06T14:55:30.838Z"),"index deposit",[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22346,str: "Savings Account",num: 49445,array: ["Idaho Mountains Cambridgeshire",75112,new Date("2018-09-06T19:29:49.111Z"),17127,[],"Wooden Handcrafted Wooden Fish calculating",56792,new Date("2018-09-06T05:13:16.902Z"),{_id: 22347,num: 20526,date: new Date("2018-09-06T00:44:29.923Z"),array: [],obj: {_id: 22348,num: 28842,date: new Date("2018-09-05T22:45:06.545Z"),array: [],obj: {}}},19701,"core port SSL"],obj: {_id: 22349,str: "Administrator Function-based",num: 69121,array: [[new Date("2018-09-06T15:54:42.505Z"),"Gold Future Computers"],"sensor",52612]}});
    },

    function(coll) {
        return coll.insert({_id: 22350,str: "Silver salmon Venezuela",num: 66618,date: new Date("2018-09-05T23:31:35.517Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22351,str: "client-server",num: 39067,date: new Date("2018-09-05T22:16:47.353Z"),array: [75897,{_id: 22352,str: "engage",num: 22871,date: new Date("2018-09-05T23:57:29.591Z"),array: [],obj: {}},48948,new Date("2018-09-06T19:33:39.830Z"),38641,new Date("2018-09-06T10:11:44.030Z"),"cross-platform",{_id: 22353,num: 6965,array: [68918,new Date("2018-09-06T14:16:29.215Z"),"scalable","Incredible"],obj: {}}],obj: {_id: 22354,str: "scale",date: new Date("2018-09-06T08:50:18.249Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22355,str: "paradigms calculating",num: 35331,date: new Date("2018-09-06T16:02:39.316Z"),array: ["Concrete",new Date("2018-09-06T19:04:30.217Z"),"Cotton alarm",[],new Date("2018-09-06T14:07:28.353Z"),996,52346,17589,{_id: 22356,str: "Cambridgeshire",num: 95859,date: new Date("2018-09-06T12:37:26.147Z"),obj: {}},new Date("2018-09-05T19:58:33.816Z"),81286],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22357,str: "Oman",num: 29096,date: new Date("2018-09-05T20:45:53.190Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22358,str: "Handcrafted Concrete Hat",num: 85041,date: new Date("2018-09-05T22:14:59.229Z"),array: [],obj: {_id: 22359,str: "azure Health",num: 16832,date: new Date("2018-09-06T17:43:48.142Z"),array: [35501,new Date("2018-09-06T10:54:06.981Z"),new Date("2018-09-06T05:07:23.147Z"),{_id: 22360,str: "Architect",num: 13348,date: new Date("2018-09-06T19:26:34.364Z"),obj: {}},new Date("2018-09-06T08:36:07.029Z"),"haptic redundant","Rubber New York Fantastic Wooden Chicken",67500,"Intelligent plum Incredible Frozen Keyboard",20348,[{_id: 22361,str: "Borders",num: 73437,date: new Date("2018-09-06T02:57:50.046Z"),array: [],obj: {_id: 22362,date: new Date("2018-09-06T12:20:47.966Z"),array: [],obj: {_id: 22363,str: "impactful navigate Generic Soft Car",num: 88489,date: new Date("2018-09-06T12:20:06.679Z"),array: ["COM",28094],obj: {}}}}],[43332]]}});
    },

    function(coll) {
        return coll.insert({_id: 22364,num: 26788,date: new Date("2018-09-06T19:49:44.637Z"),array: ["Sharable contingency panel",25012,88019,"Neck Avon",new Date("2018-09-06T07:52:53.067Z"),"Rue Bedfordshire",47173,new Date("2018-09-06T11:48:43.445Z"),{_id: 22365,str: "Producer Regional",num: 8423,array: [],obj: {_id: 22366,str: "Mississippi Analyst",num: 80548,date: new Date("2018-09-06T10:07:20.195Z"),array: [],obj: {}}},new Date("2018-09-06T01:08:01.475Z"),new Date("2018-09-05T22:44:50.136Z")],obj: {_id: 22367,str: "Personal Loan Account connect",date: new Date("2018-09-06T13:24:52.651Z"),array: [{_id: 22368,num: 80530,array: [[],[86925,[],new Date("2018-09-06T11:26:53.588Z")]],obj: {}},"Small Fresh Pants coherent Technician",[4297,new Date("2018-09-06T16:07:04.797Z")],"Forward turn-key Wall"]}});
    },

    function(coll) {
        return coll.insert({_id: 22369,num: 4594,date: new Date("2018-09-06T03:23:04.828Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22370,str: "Program",num: 44349,date: new Date("2018-09-06T11:39:43.293Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22371,str: "Chair Planner",num: 758,date: new Date("2018-09-06T07:38:55.451Z"),array: [new Date("2018-09-06T04:52:21.072Z"),new Date("2018-09-06T16:17:33.518Z"),"Incredible Keyboard",56920,[47583,new Date("2018-09-06T12:32:59.257Z"),6020],"turquoise navigating green",new Date("2018-09-06T00:59:57.751Z"),"sensor",67567,[],{_id: 22372,str: "microchip",num: 65913,date: new Date("2018-09-05T23:51:23.132Z"),obj: {_id: 22373,str: "Auto Loan Account real-time Factors",obj: {_id: 22374,array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 22375,str: "Fantastic Fresh Towels granular JBOD",num: 54230,date: new Date("2018-09-06T14:25:09.675Z"),array: [],obj: {_id: 22376,num: 87888,date: new Date("2018-09-06T04:29:19.343Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22377,str: "task-force hacking Concrete",num: 22992,date: new Date("2018-09-06T00:31:29.578Z"),array: [92927,[],new Date("2018-09-06T02:49:18.865Z"),74258,"hack",81751,"Cotton"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22378,str: "Nauru Generic Soft Salad",date: new Date("2018-09-05T23:10:01.963Z"),array: [56059,"generating Generic Rubber Salad Supervisor",new Date("2018-09-06T18:07:44.685Z"),"Representative system engine",48916,96766,new Date("2018-09-06T12:42:35.511Z"),{_id: 22379,str: "systematic Nevada",num: 58547,date: new Date("2018-09-06T11:53:29.246Z"),array: [new Date("2018-09-06T11:18:33.246Z"),"Small Steel Towels Cambridgeshire",[]],obj: {_id: 22380,num: 37841,date: new Date("2018-09-06T02:08:37.288Z"),array: [],obj: {}}},{_id: 22381,str: "proactive",date: new Date("2018-09-06T11:27:28.060Z"),obj: {}},{_id: 22382,str: "microchip Rubber",num: 5007,array: [],obj: {}},34599,"Ergonomic Wooden Pizza front-end Licensed Frozen Bike"]});
    },

    function(coll) {
        return coll.insert({_id: 22383,num: 30724,array: ["Steel",90985,new Date("2018-09-06T13:56:21.605Z"),94435,new Date("2018-09-06T02:34:48.777Z"),63985,"product compressing",[],"Baht Shoes Checking Account"],obj: {_id: 22384,str: "Checking Account",num: 37409,date: new Date("2018-09-06T16:57:37.096Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22385,str: "Wooden Fish Sudan",num: 9041,date: new Date("2018-09-05T23:30:30.091Z"),array: [new Date("2018-09-06T15:30:29.949Z"),[],73160,new Date("2018-09-06T06:17:40.690Z"),{_id: 22386,str: "green bandwidth-monitored",num: 8737,date: new Date("2018-09-06T12:46:04.166Z"),array: [],obj: {}},"Central lime",new Date("2018-09-05T23:39:14.716Z"),"generating client-server redundant",20733],obj: {_id: 22387,str: "users",num: 34351,date: new Date("2018-09-05T23:23:52.818Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22388,str: "Personal Loan Account",num: 87882,array: [],obj: {_id: 22389,num: 10233,date: new Date("2018-09-06T06:04:11.377Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22390,str: "Canadian Dollar",num: 95113,date: new Date("2018-09-06T02:48:37.239Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22391,str: "Refined Macao",num: 58838,date: new Date("2018-09-06T02:59:48.604Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22392,str: "Rhode Island indexing",num: 48279,date: new Date("2018-09-05T21:35:05.018Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22393,str: "Expanded Cambridgeshire",num: 62082,date: new Date("2018-09-06T12:54:20.026Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22394,str: "plum Generic Metal Computer",num: 32295,date: new Date("2018-09-06T19:35:57.127Z"),array: [],obj: {_id: 22395,str: "enhance Analyst Streamlined",num: 72825,array: [46507,new Date("2018-09-06T15:39:47.773Z"),new Date("2018-09-06T11:17:05.032Z"),"Division",new Date("2018-09-06T13:13:44.744Z"),{_id: 22396,str: "FTP Personal Loan Account",num: 39369,date: new Date("2018-09-06T03:47:20.257Z"),array: [16556,{_id: 22397,date: new Date("2018-09-06T17:33:03.883Z"),obj: {}},"orchid Land foreground","invoice"],obj: {_id: 22398,str: "Oregon throughput Unbranded Fresh Chicken",date: new Date("2018-09-05T20:56:43.298Z"),array: [],obj: {}}},[new Date("2018-09-06T01:36:11.894Z"),[]],"Kwacha deposit Shoes","expedite multi-byte SMTP",58982]}});
    },

    function(coll) {
        return coll.insert({_id: 22399,str: "partnerships",num: 65156,date: new Date("2018-09-06T03:13:28.193Z"),array: [],obj: {_id: 22400,str: "Robust invoice",num: 46161,array: [75030,"Executive",new Date("2018-09-06T03:48:04.987Z"),new Date("2018-09-06T01:31:48.022Z"),new Date("2018-09-06T01:06:32.948Z"),57501,"Dynamic","AI copying",new Date("2018-09-06T13:53:22.135Z"),"disintermediate",new Date("2018-09-05T23:29:57.031Z"),["Cliffs connecting",89258]]}});
    },

    function(coll) {
        return coll.insert({_id: 22401,str: "cyan",num: 54154,date: new Date("2018-09-06T10:37:39.203Z"),array: [],obj: {_id: 22402,str: "Tasty Soft Keyboard",num: 23972,date: new Date("2018-09-06T07:14:27.833Z"),array: ["Personal Loan Account Practical Steel Shoes Planner",new Date("2018-09-06T01:37:20.570Z"),92873,50546,new Date("2018-09-06T11:59:42.758Z"),"Extensions",new Date("2018-09-06T08:11:34.601Z"),"Unbranded Borders white",new Date("2018-09-06T11:16:33.601Z"),"HDD Cotton",{_id: 22403,str: "Assistant Director",num: 21722,array: [new Date("2018-09-06T14:41:32.088Z"),"value-added"],obj: {_id: 22404,str: "deposit Functionality",num: 72848,array: [],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 22405,str: "Communications methodical",num: 98486,date: new Date("2018-09-06T11:15:51.232Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22406,str: "Parkway lime pink",num: 38183,date: new Date("2018-09-06T12:05:40.489Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22407,str: "Shoes",num: 31379,date: new Date("2018-09-06T10:32:37.738Z"),array: [new Date("2018-09-06T00:44:02.275Z"),new Date("2018-09-06T12:17:18.116Z"),{_id: 22408,str: "Licensed Assimilated Arizona",num: 12518,date: new Date("2018-09-06T04:32:38.554Z"),obj: {}},"encompassing",50129,{_id: 22409,num: 75576,array: [],obj: {_id: 22410,str: "Investment Account Garden",num: 61832,date: new Date("2018-09-06T07:19:50.309Z"),array: [92843,[]]}},"Quality backing up index",92536,70201,"Kyrgyz Republic Data indexing"],obj: {_id: 22411,str: "card multi-byte deposit",date: new Date("2018-09-05T22:02:48.721Z"),array: [new Date("2018-09-06T05:49:18.806Z"),45730,65672,{_id: 22412,num: 4381,date: new Date("2018-09-05T21:54:48.447Z"),array: [[]],obj: {}},{_id: 22413,str: "Response",obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 22414,str: "parsing Checking Account",num: 26860,date: new Date("2018-09-06T17:37:53.128Z"),array: ["Rapid generate",new Date("2018-09-06T01:12:34.046Z"),"Buckinghamshire Cambridgeshire SDD",{_id: 22415,date: new Date("2018-09-06T10:42:19.425Z")},62788,59190,new Date("2018-09-05T22:39:43.020Z"),{_id: 22416,str: "Movies Team-oriented",num: 79639,array: [],obj: {_id: 22417,str: "Gorgeous AI",num: 72636,date: new Date("2018-09-05T20:25:57.600Z"),array: [new Date("2018-09-06T09:47:27.714Z"),68192],obj: {}}},"Identity",new Date("2018-09-06T13:16:43.019Z")],obj: {_id: 22418,str: "mobile",num: 37448,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22419,str: "Solutions Public-key North Carolina",num: 58379,date: new Date("2018-09-06T17:58:55.702Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22420,str: "Tactics",num: 93825,date: new Date("2018-09-06T05:04:44.605Z"),array: [{_id: 22421,str: "transmit Fresh Sports",num: 67256,array: [74200],obj: {_id: 22422,num: 96869,date: new Date("2018-09-06T01:02:02.545Z"),array: [],obj: {}}},"California Integration Directives","withdrawal Industrial",new Date("2018-09-06T01:44:37.735Z"),new Date("2018-09-06T07:00:21.959Z"),new Date("2018-09-06T06:45:44.541Z"),90656,new Date("2018-09-06T10:59:54.277Z"),89978,{_id: 22423,str: "Roads",date: new Date("2018-09-06T00:37:42.771Z"),obj: {}},new Date("2018-09-06T02:08:51.633Z"),38926,[],15171],obj: {_id: 22424,str: "Ergonomic Frozen Salad invoice adapter",date: new Date("2018-09-05T21:41:51.606Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22425,str: "synthesizing TCP transmitter",date: new Date("2018-09-06T11:33:46.075Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22426,num: 11167,array: ["panel",[],"Awesome reinvent",[37606,32452],new Date("2018-09-05T21:59:03.545Z"),"6th generation Synchronised Accountability",{_id: 22427,str: "Handmade deposit programming",num: 43913,date: new Date("2018-09-06T15:20:10.294Z"),array: [],obj: {_id: 22428,str: "Cambridgeshire complexity",date: new Date("2018-09-06T18:29:47.752Z"),array: ["Towels Re-contextualized wireless",new Date("2018-09-05T22:46:35.358Z")]}},23258,new Date("2018-09-05T23:17:15.383Z"),{_id: 22429,str: "Awesome",num: 51746,date: new Date("2018-09-05T23:20:03.382Z"),array: [],obj: {}},new Date("2018-09-06T06:10:57.028Z"),39622],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22430,str: "lime Program Security",num: 41335,date: new Date("2018-09-06T15:19:49.342Z"),array: [],obj: {_id: 22431,array: [new Date("2018-09-06T19:08:11.111Z"),"Money Market Account SAS Books",4852,89799,["Gorgeous 1080p",new Date("2018-09-06T11:09:36.336Z"),new Date("2018-09-06T11:50:03.710Z")],new Date("2018-09-06T06:17:27.604Z"),[],63597,{_id: 22432,str: "copy Lebanese Pound",num: 66982,date: new Date("2018-09-06T07:25:10.384Z"),array: [],obj: {_id: 22433,str: "program focus group Implementation",num: 27199,date: new Date("2018-09-05T23:30:53.787Z"),array: ["Team-oriented",8624,{_id: 22434,str: "sensor",array: [],obj: {}}],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22435,str: "Handmade Wooden Table transmitting",num: 56022,date: new Date("2018-09-05T23:46:42.259Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22436,str: "Cross-platform",num: 30310,date: new Date("2018-09-06T17:14:05.259Z"),array: [],obj: {_id: 22437,str: "haptic Internal",date: new Date("2018-09-06T05:19:34.235Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22438,str: "Consultant generate Agent",num: 3533,date: new Date("2018-09-06T02:03:31.888Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22439,str: "Mauritius Games",num: 74774,date: new Date("2018-09-06T01:29:07.905Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22440,str: "parsing Ghana copying",date: new Date("2018-09-06T15:33:32.662Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22441,str: "New Mexico",num: 11931,date: new Date("2018-09-06T12:16:53.418Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22442,str: "transform Solomon Islands leverage",num: 85875,date: new Date("2018-09-06T11:36:23.317Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22443,str: "Berkshire next-generation",num: 20193,date: new Date("2018-09-06T13:54:49.208Z"),array: [],obj: {_id: 22444,str: "clicks-and-mortar Sports",num: 62868,date: new Date("2018-09-05T22:06:17.006Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22445,str: "Avon solid state Associate",num: 65377,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22446,num: 92726,date: new Date("2018-09-06T06:03:39.887Z"),array: [{_id: 22447,str: "Credit Card Account Well",num: 32176,date: new Date("2018-09-06T15:33:50.232Z"),array: [35297],obj: {_id: 22448,str: "Wisconsin circuit",num: 39544,date: new Date("2018-09-06T04:29:14.290Z"),array: [],obj: {}}},75162,"redundant Ergonomic Metal Cheese",new Date("2018-09-06T03:06:26.773Z"),new Date("2018-09-06T14:36:26.183Z"),67936,new Date("2018-09-06T16:25:41.237Z"),"Pizza capacitor extranet",46634,new Date("2018-09-06T17:29:39.530Z"),["compressing USB",{_id: 22449,num: 59415,date: new Date("2018-09-06T06:41:55.417Z"),array: []},"project","action-items",[]],new Date("2018-09-05T21:26:06.739Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22450,str: "harness Regional transmit",num: 97568,date: new Date("2018-09-06T19:10:04.895Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22451,str: "override Associate",num: 19069,date: new Date("2018-09-06T16:08:42.479Z"),array: [new Date("2018-09-06T00:28:44.858Z"),"background AGP",23878,new Date("2018-09-06T01:37:29.486Z"),new Date("2018-09-06T15:28:38.159Z"),"bifurcated Books",12927,{_id: 22452,str: "payment",num: 40763,date: new Date("2018-09-06T15:19:32.062Z"),array: [],obj: {_id: 22453,num: 5637,date: new Date("2018-09-06T10:57:11.676Z"),array: [],obj: {_id: 22454,num: 55572,date: new Date("2018-09-06T05:53:28.616Z"),obj: {}}}},28865,21137,"invoice Practical envisioneer"]});
    },

    function(coll) {
        return coll.insert({_id: 22455,str: "Usability",date: new Date("2018-09-06T00:49:37.469Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22456,str: "partnerships Hawaii",num: 79797,date: new Date("2018-09-05T22:53:53.559Z"),array: [],obj: {_id: 22457,str: "solution Personal Loan Account",num: 46859,date: new Date("2018-09-06T14:25:04.144Z"),array: ["Camp Croatia",[10300,"back up",41427,new Date("2018-09-05T20:42:32.814Z")],new Date("2018-09-06T10:06:49.333Z"),"Hill Handmade Concrete Gloves",new Date("2018-09-06T07:59:49.991Z"),new Date("2018-09-06T07:09:23.396Z"),[],{_id: 22458,str: "Kenya",date: new Date("2018-09-05T21:52:42.682Z"),obj: {_id: 22459,num: 44217,array: [],obj: {_id: 22460,str: "Web",num: 33761,date: new Date("2018-09-05T19:57:54.155Z"),obj: {_id: 22461,str: "District",num: 11575,array: [],obj: {}}}}},84914]}});
    },

    function(coll) {
        return coll.insert({_id: 22462,str: "syndicate quantifying sticky",num: 16306,date: new Date("2018-09-06T17:10:23.862Z"),array: [new Date("2018-09-06T18:31:18.983Z"),"calculate compressing District","Wall",new Date("2018-09-05T23:38:27.276Z"),"redundant firmware mindshare","Lodge web services",82472,new Date("2018-09-06T05:40:26.877Z"),[],96227,[]],obj: {_id: 22463,str: "circuit",num: 66922,date: new Date("2018-09-06T15:11:28.242Z"),array: [{_id: 22464,str: "Ridges repurpose Cambridgeshire",num: 69381,date: new Date("2018-09-06T17:24:32.668Z"),array: [],obj: {}},{_id: 22465,num: 44123,obj: {_id: 22466,str: "web-enabled haptic",num: 50350,date: new Date("2018-09-06T04:52:44.213Z"),obj: {}}},87200,14530],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22467,str: "plum Tennessee sky blue",num: 10257,date: new Date("2018-09-05T20:49:55.140Z"),array: ["systems Keyboard Product",new Date("2018-09-06T05:21:47.687Z"),[],"mobile mission-critical green",new Date("2018-09-06T17:56:21.679Z"),{_id: 22468,str: "Sleek",num: 29588,date: new Date("2018-09-06T03:11:44.256Z"),array: [],obj: {}},48150,new Date("2018-09-06T11:39:53.348Z"),"JSON gold",97601,"Infrastructure",{_id: 22469,str: "Brazilian Real Beauty Parkway",date: new Date("2018-09-06T08:59:33.075Z"),array: [41253],obj: {_id: 22470,num: 67518,array: [],obj: {}}},"Turnpike Handcrafted fresh-thinking",[]]});
    },

    function(coll) {
        return coll.insert({_id: 22471,str: "architectures",num: 99258,date: new Date("2018-09-06T17:46:14.048Z"),array: [{_id: 22472,str: "Montenegro Home Loan Account Concrete",num: 44264,date: new Date("2018-09-05T21:36:37.380Z"),array: [],obj: {_id: 22473,str: "Industrial optical Facilitator",date: new Date("2018-09-06T17:17:50.234Z"),obj: {_id: 22474,num: 42614,array: ["violet transmitting"],obj: {}}}},new Date("2018-09-06T04:04:08.545Z"),["Auto Loan Account Credit Card Account",{_id: 22475,num: 75256,array: [],obj: {}},93327,88279,new Date("2018-09-06T15:24:52.057Z")],{_id: 22476,str: "Refined AGP Seamless",num: 21455,date: new Date("2018-09-06T15:00:34.643Z")},new Date("2018-09-06T07:30:29.606Z"),[11423],"client-server stable",new Date("2018-09-06T12:54:08.309Z"),92272,new Date("2018-09-06T04:12:18.087Z")],obj: {_id: 22477,str: "static Berkshire",date: new Date("2018-09-06T05:09:28.180Z"),array: [],obj: {_id: 22478,str: "Puerto Rico national Soft",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 22479,str: "Pants",num: 23816,date: new Date("2018-09-06T14:31:53.707Z"),array: [83884,"redefine",new Date("2018-09-05T21:07:36.526Z"),15518,38910,{_id: 22480,str: "Books secondary",num: 75232,date: new Date("2018-09-06T19:47:51.174Z"),array: [{_id: 22481,str: "Refined Plastic Hat Tunnel",num: 33221,date: new Date("2018-09-06T00:42:49.425Z"),array: [],obj: {_id: 22482,obj: {}}},{_id: 22483,num: 17061,date: new Date("2018-09-06T07:27:17.685Z"),array: []}],obj: {_id: 22484,str: "invoice Accounts",date: new Date("2018-09-06T13:19:14.387Z"),array: [[],"Future","California deposit"],obj: {_id: 22485,str: "Small back up overriding",num: 61640,obj: {}}}},new Date("2018-09-06T17:33:38.504Z"),new Date("2018-09-06T09:06:45.635Z"),"array Incredible Granite Chicken seamless",{_id: 22486,str: "high-level Soap",date: new Date("2018-09-06T05:52:47.661Z")},[],new Date("2018-09-06T15:22:59.694Z"),42777]});
    },

    function(coll) {
        return coll.insert({_id: 22487,num: 18997,date: new Date("2018-09-06T13:51:51.597Z"),array: ["open-source",48389,new Date("2018-09-06T16:27:09.909Z"),8631,{_id: 22488,str: "Dynamic Oklahoma cross-platform",num: 48993,date: new Date("2018-09-06T05:06:39.973Z"),obj: {_id: 22489,str: "solid state Legacy",num: 69855,date: new Date("2018-09-06T04:16:45.206Z"),array: [],obj: {}}},"Somali Shilling Granite Lempira",[],new Date("2018-09-06T17:01:20.608Z"),51321,["Steel",44857],[],new Date("2018-09-06T01:28:43.435Z"),"Rustic Metal Chair","Marketing Cocos (Keeling) Islands generating"],obj: {_id: 22490,str: "generating Directives",array: [new Date("2018-09-06T11:33:40.367Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22491,str: "Generic bi-directional Cotton",num: 66195,date: new Date("2018-09-06T13:07:45.599Z"),array: ["Alabama Consultant Rufiyaa",53067,new Date("2018-09-06T10:13:47.852Z"),new Date("2018-09-05T22:29:29.427Z"),14102,{_id: 22492,str: "Isle of Man",date: new Date("2018-09-06T16:30:25.141Z")},new Date("2018-09-06T12:36:31.586Z"),{_id: 22493,str: "RAM customer loyalty Shirt",num: 8889,array: [],obj: {_id: 22494,num: 70367,date: new Date("2018-09-06T02:50:59.024Z"),obj: {}}},"West Virginia",67675,"generate","Gloves empowering Vermont"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22495,str: "Bike Avon Group",num: 61939,date: new Date("2018-09-06T08:53:50.230Z"),array: ["motivating Personal Loan Account input",[{_id: 22496,str: "yellow",num: 92840,date: new Date("2018-09-06T15:27:13.524Z"),array: [],obj: {_id: 22497,str: "Tasty Bedfordshire compress",num: 50516,date: new Date("2018-09-06T12:32:44.965Z"),obj: {}}},new Date("2018-09-06T16:06:59.418Z")],23063,61530,"Credit Card Account Practical Metal Bacon",new Date("2018-09-06T14:40:54.027Z"),new Date("2018-09-06T15:45:39.177Z"),26369,[[],"Object-based Intelligent Wooden Table"],{_id: 22498,num: 84248,date: new Date("2018-09-06T16:04:34.885Z"),array: [new Date("2018-09-06T18:19:50.435Z")]},[87465,"Sleek Key","Creative Plastic"],"Ball Director"],obj: {_id: 22499,str: "composite optimizing Gloves",num: 29174,date: new Date("2018-09-05T23:17:47.452Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22500,num: 70302,date: new Date("2018-09-06T04:22:00.023Z"),array: ["Vermont Refined open-source","Bedfordshire",new Date("2018-09-06T01:27:52.352Z"),[48753,"Hawaii Producer","Configuration support",{_id: 22501,str: "calculate",num: 97397,date: new Date("2018-09-06T07:13:43.728Z"),array: [],obj: {}},{_id: 22502,str: "Clothing Frozen Usability",num: 42430,array: [33799,{_id: 22503,obj: {_id: 22504,date: new Date("2018-09-06T14:43:01.524Z"),array: [],obj: {}}}],obj: {_id: 22505,str: "hack Technician",num: 3045,date: new Date("2018-09-05T20:30:49.029Z"),obj: {}}}],new Date("2018-09-06T02:37:37.002Z"),16611,46990,new Date("2018-09-06T18:49:23.786Z"),27840,new Date("2018-09-06T05:24:28.718Z"),new Date("2018-09-06T13:14:08.758Z"),[]],obj: {_id: 22506,str: "Fresh synthesize 1080p",date: new Date("2018-09-06T18:35:29.319Z")}});
    },

    function(coll) {
        return coll.insert({_id: 22507,str: "Danish Krone Tuna",num: 31848,array: ["benchmark Fresh maroon","leading edge overriding",new Date("2018-09-06T12:52:25.759Z"),new Date("2018-09-06T04:09:16.746Z"),40372,new Date("2018-09-06T02:09:54.008Z"),{_id: 22508,str: "Identity Networked Grocery",num: 24818,date: new Date("2018-09-06T03:51:15.826Z"),array: [],obj: {}},new Date("2018-09-05T23:32:47.182Z"),41782,"Usability interactive navigate","Communications Rubber Money Market Account",9874,58795],obj: {_id: 22509,str: "Optimized methodologies",num: 64826,date: new Date("2018-09-06T19:14:53.634Z"),array: [34284],obj: { _id: 22510 }}});
    },

    function(coll) {
        return coll.insert({_id: 22511,str: "utilize Money Market Account PCI",num: 5694,date: new Date("2018-09-05T23:38:26.613Z"),array: ["Bangladesh",new Date("2018-09-05T20:22:05.081Z"),{_id: 22512,str: "Director port",num: 37499,date: new Date("2018-09-05T19:56:23.530Z"),array: [],obj: {_id: 22513,str: "override",array: []}},new Date("2018-09-06T09:20:40.709Z"),52240,98543,"deploy National metrics","Georgia",{_id: 22514,num: 93580,date: new Date("2018-09-06T08:40:13.871Z"),array: [{_id: 22515,str: "Polarised",num: 23251,date: new Date("2018-09-06T06:12:27.533Z"),obj: {_id: 22516,str: "Borders Lek",num: 36974,array: [],obj: {}}},new Date("2018-09-06T12:46:34.110Z"),new Date("2018-09-06T05:50:46.751Z"),[]],obj: {}},new Date("2018-09-06T15:59:10.640Z")],obj: {_id: 22517,str: "Bedfordshire Bedfordshire Practical Cotton Sausages",date: new Date("2018-09-06T13:10:30.122Z")}});
    },

    function(coll) {
        return coll.insert({_id: 22518,str: "hack Maine",num: 51821,date: new Date("2018-09-05T21:31:14.823Z"),array: [[],"24/365 driver France","Incredible Granite Gloves Sleek Legacy",new Date("2018-09-06T08:36:12.187Z"),{_id: 22519,str: "North Korean Won",num: 29857,date: new Date("2018-09-06T12:41:06.525Z"),obj: {_id: 22520,str: "Intelligent United States of America",array: [24802,26818,47908,new Date("2018-09-06T06:40:47.280Z"),61801,{_id: 22521,date: new Date("2018-09-06T08:38:20.081Z"),obj: {}},[30987]]}},"Music Incredible Soft","Coordinator"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22522,str: "maroon",num: 27145,date: new Date("2018-09-06T13:19:33.070Z"),obj: {_id: 22523,str: "Practical invoice virtual",num: 99966,date: new Date("2018-09-06T06:24:41.438Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22524,str: "deposit",num: 20421,date: new Date("2018-09-06T04:59:13.158Z"),array: [new Date("2018-09-05T23:20:49.074Z"),"RAM",{_id: 22525,str: "lime",num: 76797,date: new Date("2018-09-06T12:22:42.027Z"),array: [new Date("2018-09-06T12:03:36.863Z"),new Date("2018-09-06T13:10:18.383Z")],obj: {_id: 22526,str: "Fresh",num: 98030,date: new Date("2018-09-06T03:47:56.913Z"),array: [],obj: {_id: 22527,str: "Rand Loti",num: 28105,date: new Date("2018-09-06T16:07:57.278Z"),obj: {}}}},21371,79221,new Date("2018-09-06T19:50:47.246Z"),96614,"array applications Designer","Wells","Savings Account",new Date("2018-09-06T19:22:26.242Z"),"Bacon",[[]]]});
    },

    function(coll) {
        return coll.insert({_id: 22528,str: "end-to-end",num: 62946,date: new Date("2018-09-06T14:17:56.590Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22529,str: "Practical Cotton Bacon Global",num: 10417,date: new Date("2018-09-06T12:51:09.416Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22530,str: "Personal Loan Account technologies Gorgeous",num: 48708,date: new Date("2018-09-06T06:36:28.400Z"),array: [],obj: {_id: 22531,str: "silver Mobility Industrial",date: new Date("2018-09-06T15:14:09.816Z"),array: [new Date("2018-09-06T08:08:42.643Z"),"payment",78380,[],{_id: 22532,str: "bypassing Incredible Frozen Towels",num: 63563,date: new Date("2018-09-06T16:46:39.995Z"),array: [],obj: {_id: 22533,str: "Chicken zero tolerance",array: [{_id: 22534,str: "Manager compressing",num: 19916,date: new Date("2018-09-06T19:53:35.618Z"),array: ["Ergonomic Concrete Shirt Music sensor"],obj: {_id: 22535,num: 39540}},8314,"lime Cotton overriding"],obj: {}}},71252,[18622,"Fantastic Concrete Sausages Mouse Personal Loan Account"],new Date("2018-09-05T23:22:26.058Z"),"Mission withdrawal Bedfordshire",new Date("2018-09-06T08:05:33.726Z"),{_id: 22536,str: "next-generation Wooden Unbranded Cotton Shirt",num: 92042,obj: {}},"bypassing relationships"]}});
    },

    function(coll) {
        return coll.insert({_id: 22537,str: "Hill one-to-one",num: 13853,date: new Date("2018-09-06T19:23:43.638Z"),array: [7817,"Kids Fresh British Indian Ocean Territory (Chagos Archipelago)","schemas",new Date("2018-09-06T05:44:56.699Z"),new Date("2018-09-06T10:58:16.620Z"),[],"Shoes",new Date("2018-09-06T14:59:24.724Z"),new Date("2018-09-06T08:12:40.614Z"),15663],obj: {_id: 22538,str: "Avon",date: new Date("2018-09-06T12:07:21.480Z"),obj: {_id: 22539,num: 56454,date: new Date("2018-09-06T07:17:16.572Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22540,str: "Guyana Dollar Tools Yuan Renminbi",num: 16778,date: new Date("2018-09-05T20:02:30.816Z"),array: [new Date("2018-09-06T10:16:39.861Z"),66097,"Credit Card Account extend","white global SMTP","withdrawal",{_id: 22541,str: "Implementation",num: 99861,array: [],obj: {}},{_id: 22542,str: "Montserrat",date: new Date("2018-09-06T10:22:30.571Z")},"GB redundant out-of-the-box",2692,[new Date("2018-09-06T17:43:10.788Z"),new Date("2018-09-05T21:43:49.103Z")],96599],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22543,str: "Utah",num: 75410,date: new Date("2018-09-06T04:30:12.109Z"),array: [new Date("2018-09-06T13:20:09.748Z"),{_id: 22544,str: "networks reboot THX",num: 26404,date: new Date("2018-09-06T15:36:25.702Z"),array: [],obj: {}},14101,new Date("2018-09-06T00:24:14.508Z"),"Island",new Date("2018-09-06T03:35:59.689Z"),"Key Liaison",46670,"digital red",48236,82372],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22545,str: "core Legacy Senior",num: 85423,date: new Date("2018-09-06T02:33:20.848Z"),array: [new Date("2018-09-06T12:50:16.022Z"),"Music Ergonomic Wooden Keyboard",71676,new Date("2018-09-06T04:17:44.860Z"),"Consultant coherent Malta",new Date("2018-09-06T07:01:00.178Z"),{_id: 22546,num: 26123,date: new Date("2018-09-06T04:11:45.372Z"),array: [],obj: {_id: 22547,array: [],obj: {}}},79410,[],{_id: 22548,str: "Frozen Fresh",num: 70305,date: new Date("2018-09-06T17:11:22.716Z"),obj: {}},75414],obj: {_id: 22549,str: "Automated turquoise Bridge",num: 5607,date: new Date("2018-09-05T20:17:19.083Z"),array: [new Date("2018-09-06T01:29:09.486Z"),[{_id: 22550,str: "Credit Card Account",num: 33266},"Corporate Clothing Configuration",27829],"Operations mesh"],obj: {_id: 22551,str: "Louisiana Tasty Wooden Pants",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 22552,str: "Cordoba Oro Chicken",num: 52324,date: new Date("2018-09-05T23:54:26.367Z"),array: [{_id: 22553,num: 28990,array: [],obj: {}},new Date("2018-09-06T02:38:04.904Z"),83393,new Date("2018-09-05T21:02:06.230Z"),"portals Cocos (Keeling) Islands","deposit",{_id: 22554,num: 98878,date: new Date("2018-09-06T02:56:23.891Z"),array: [],obj: {}},"toolset Investment Account",52040,12320,[],{_id: 22555,str: "Borders",date: new Date("2018-09-06T02:46:58.404Z")},"driver"],obj: {_id: 22556,str: "Persistent Mobility Malaysian Ringgit",date: new Date("2018-09-06T01:29:55.102Z"),obj: {_id: 22557,str: "Small Face to face",num: 94335,array: [new Date("2018-09-06T07:19:54.399Z"),new Date("2018-09-05T23:06:00.333Z"),91697]}}});
    },

    function(coll) {
        return coll.insert({_id: 22558,str: "Vermont 24/7 New Taiwan Dollar",date: new Date("2018-09-06T04:44:45.986Z"),array: [],obj: {_id: 22559,str: "hybrid",num: 6432,date: new Date("2018-09-06T04:53:41.434Z"),array: ["Product incubate Borders",["Persevering black grey",29325,new Date("2018-09-06T19:24:53.793Z")],new Date("2018-09-06T00:07:33.770Z"),{_id: 22560,str: "Integration",num: 11733,date: new Date("2018-09-06T07:43:50.280Z"),array: [{_id: 22561,num: 69312,date: new Date("2018-09-06T02:17:07.416Z"),array: [90219],obj: {_id: 22562,str: "Bangladesh New York leverage",num: 43391,array: [],obj: {}}},11102,39203,"directional Hat",new Date("2018-09-06T10:55:59.769Z")]},[new Date("2018-09-06T05:10:38.069Z"),[]],{_id: 22563,str: "parse Rustic",array: []},{_id: 22564,str: "Savings Account transmit",num: 63930,date: new Date("2018-09-06T05:00:32.827Z"),array: []},new Date("2018-09-06T18:09:18.583Z"),new Date("2018-09-06T07:58:38.533Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 22565,str: "orange",date: new Date("2018-09-06T00:44:18.633Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22566,str: "payment Cambridgeshire Public-key",num: 78056,date: new Date("2018-09-06T03:31:36.658Z"),array: [],obj: {_id: 22567,str: "Dynamic Health forecast",num: 42501,date: new Date("2018-09-06T09:12:48.234Z"),array: [],obj: {_id: 22568,num: 12815,date: new Date("2018-09-06T04:33:17.035Z"),array: [new Date("2018-09-06T01:44:53.132Z"),{_id: 22569,num: 49962,date: new Date("2018-09-06T00:34:24.089Z"),array: [],obj: {}},"Pizza Concrete",new Date("2018-09-06T11:03:14.894Z"),"Concrete Minnesota",75216,{_id: 22570,str: "violet incubate Manager"},["harness hack",13248,"Customer microchip",{_id: 22571,str: "Manat protocol",num: 73951,array: [],obj: {_id: 22572,str: "Court",date: new Date("2018-09-06T02:21:56.545Z"),array: [25667]}}],[],"program Vatu"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22573,str: "Incredible Fantastic",date: new Date("2018-09-06T02:05:19.799Z"),array: [new Date("2018-09-06T09:28:36.814Z"),new Date("2018-09-05T21:12:07.671Z"),67445,21731,"Maryland Accounts Malawi",new Date("2018-09-06T04:42:07.829Z"),"Buckinghamshire",75970,new Date("2018-09-06T08:13:05.616Z"),{_id: 22574,str: "withdrawal",date: new Date("2018-09-06T01:38:35.934Z"),array: ["pink haptic",new Date("2018-09-06T02:33:05.407Z"),[]],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22575,str: "application copying",num: 73906,date: new Date("2018-09-06T18:40:08.199Z"),array: [],obj: {_id: 22576,str: "bus Investment Account optimizing",num: 56928,date: new Date("2018-09-05T21:24:29.170Z"),array: [new Date("2018-09-05T21:45:38.414Z"),{_id: 22577,str: "Chief withdrawal",num: 29136,date: new Date("2018-09-06T16:06:36.430Z")},"Senior",89711,"Progressive",50264,new Date("2018-09-06T03:41:40.440Z"),new Date("2018-09-06T07:13:43.287Z"),[{_id: 22578,str: "Awesome",date: new Date("2018-09-06T04:15:56.487Z"),obj: {}},[]],"bypass Handcrafted Steel Pants",new Date("2018-09-06T00:06:42.207Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 22579,str: "SMTP Multi-layered Director",num: 4581,date: new Date("2018-09-05T23:01:11.886Z"),array: [],obj: {_id: 22580,str: "contingency contingency",num: 42096,date: new Date("2018-09-06T16:20:14.400Z"),array: ["Neck Designer",78592,new Date("2018-09-06T03:31:53.746Z"),16690,new Date("2018-09-06T05:07:32.763Z"),"Springs Sausages",62838,"Cloned Chips Handcrafted Metal Bacon",{_id: 22581,num: 59226,date: new Date("2018-09-05T20:59:43.516Z"),array: [],obj: {}},{_id: 22582,num: 55786,obj: {_id: 22583,str: "Ball Handmade Fresh Chips Incredible",num: 1994}}],obj: {_id: 22584,str: "Synergistic payment",date: new Date("2018-09-06T03:22:56.622Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22585,str: "Credit Card Account backing up",date: new Date("2018-09-06T11:56:54.651Z"),array: [35156,new Date("2018-09-06T04:30:47.972Z"),new Date("2018-09-05T22:17:49.748Z"),"cohesive IB deposit",40276,new Date("2018-09-06T17:05:20.507Z"),[],{_id: 22586,str: "Guinea Producer",num: 78191,date: new Date("2018-09-05T21:49:15.014Z"),array: [],obj: {}},"24/365 RSS",18696],obj: {_id: 22587,str: "Handmade clear-thinking",obj: {_id: 22588,str: "synthesize Director",num: 80892,date: new Date("2018-09-06T10:55:26.197Z"),array: [88049,"content",new Date("2018-09-06T19:44:11.796Z"),new Date("2018-09-06T01:31:53.601Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22589,str: "Personal Loan Account",num: 41556,date: new Date("2018-09-05T23:05:22.507Z"),array: ["Optimization","architectures models Programmable",new Date("2018-09-06T01:01:07.716Z"),new Date("2018-09-06T16:04:35.611Z"),"Brand",[[],"Squares Incredible National",13982,78893],98989,new Date("2018-09-06T08:51:37.307Z"),80877,"Games user-facing",new Date("2018-09-06T02:37:52.251Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 22590,str: "Lead system Iceland",num: 64747,date: new Date("2018-09-06T05:30:50.346Z"),array: [],obj: {_id: 22591,str: "invoice Bedfordshire",num: 9035,date: new Date("2018-09-06T06:41:24.961Z"),array: [new Date("2018-09-06T02:00:49.472Z"),"applications protocol card",43004,"quantify",64843,new Date("2018-09-06T09:03:44.985Z"),new Date("2018-09-06T07:58:35.331Z"),41786,43295,{_id: 22592,str: "Central African Republic Toys Sleek Fresh Hat",num: 21582,array: []},new Date("2018-09-05T20:24:38.349Z")],obj: {_id: 22593,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 22594,str: "24/365 Beauty",num: 43610,date: new Date("2018-09-06T06:28:12.726Z"),array: ["benchmark",39570,[],"real-time",new Date("2018-09-05T21:42:07.473Z"),{_id: 22595,str: "transmitting",num: 14499,date: new Date("2018-09-06T07:19:02.186Z"),array: [47386],obj: {_id: 22596,num: 73161,date: new Date("2018-09-06T06:59:45.801Z"),obj: {}}},new Date("2018-09-06T03:56:30.719Z"),61540,53597,new Date("2018-09-05T22:22:45.134Z"),"Computers compressing Australian Dollar"],obj: {_id: 22597,str: "auxiliary Home",num: 35191,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 22598,str: "Outdoors Web",num: 45405,date: new Date("2018-09-06T14:58:10.633Z"),array: [new Date("2018-09-06T14:53:06.632Z"),"intangible","knowledge user Cambridgeshire Malawi",[],19134,new Date("2018-09-06T14:16:49.624Z"),new Date("2018-09-06T18:29:51.182Z"),7270,86630,"Small Multi-lateral",[58803],{_id: 22599,num: 6567,date: new Date("2018-09-05T20:51:42.628Z"),array: [{_id: 22600,str: "content primary PCI",num: 80457,date: new Date("2018-09-06T09:41:28.304Z"),array: []},new Date("2018-09-06T04:25:06.939Z")],obj: {}}],obj: {_id: 22601,str: "Graphical User Interface Sharable Legacy",array: ["Unbranded Cambridgeshire Shirt",[],["open system mission-critical copy",{_id: 22602,str: "Engineer",num: 65879,date: new Date("2018-09-06T02:26:15.573Z"),array: ["transform Optional",87672],obj: {_id: 22603,str: "monitor application feed",array: [],obj: {}}}],65900]}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $concat: [{ $trim: { input: '$obj.obj.obj.obj.str' } }] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Practical Cotton Bacon CSS Arkansas"],as: 'esther',in: { $log10: '$$esther' }} }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromParts: {isoWeekYear: { $abs: 21524 },isoWeek: { $floor: '$obj.obj.obj.obj.num' },isoDayOfWeek: { $indexOfArray: [{ $map: {input: ['$obj.obj.str','$obj.obj.str','$obj.obj.obj.str'],in: '$$this'} },{ $minute: { $week: { $dateToParts: { date: { $year: { $hour: new Date("2018-09-05T23:22:31.084Z") } } } } } },17] },minute: { $add: [] },millisecond: { $pow: ['$num',{ $exp: { $mod: [19152,87852] } }] }} } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substrBytes: [{ $toString: { $trim: { input: "Mission EXE" } } },10,6] },"Networked payment payment"],[85698,'$obj.obj.obj.obj.num'],['$obj.obj.obj.str','$obj.obj.str'],[{ $indexOfArray: [{ $zip: { inputs: [[]] } },{ $millesecond: { $dateToParts: { date: { $dayOfWeek: '$date' } } } },15,1] },'$obj.obj.num',65434]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',14,19] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str',{ $toString: { $dayOfWeek: { $toDate: { $arrayElemAt: [[],'$obj.obj.num'] } } } }]] }, _id: 0}}],

        [{$project: {a: { $toString: { $range: [16,3,0] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],96157] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Assurance Baby optical",'$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "silver",v: '$obj.obj.str'},{k: "Refined e-services",v: { $toDate: { $arrayToObject: [[["Czech Koruna",{ $concat: ['$str','$obj.obj.str'] }],[{ $toString: { $arrayToObject: [[{k: "Liaison",v: false}]] } }],['$obj.obj.obj.num'],[],[],[{ $exp: '$num' },14390,'$obj.obj.obj.num','$obj.obj.num']]] } }}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T02:48:26.322Z",onNull: { $arrayToObject: [[{k: "calculate Tennessee",v: "copying Visionary"},{k: "SCSI bandwidth deposit",v: '$obj.obj.date'},{k: "Investment Account Adaptive",v: { $substrCP: ['$obj.obj.str',18,13] }}]] }} },format: "%G-%z-%S-%S-%d-%%-%V-%d-%M-%m",timezone: "America/Knox_IN",onNull: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Engineer JBOD",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: '$obj.obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T06:38:33.207Z",onError: { $concatArrays: [["Officer Automotive 5th generation"],[],['$obj.obj.num',34785],[{ $rtrim: { input: "Re-engineered Bedfordshire system engine" } }],[],['$obj.obj.obj.obj.num','$obj.num']] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'jamal',in: { $ceil: 26243 }} }, _id: 0}}],

        [{$project: {a: { $toString: { $concatArrays: [[],[46798],['$str'],[{ $toUpper: '$obj.obj.str' },'$obj.obj.obj.obj.str',"Small Cotton Chicken"],[]] } }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfMonth: { $isoDayOfWeek: { $second: { $dateToString: {date: '$obj.obj.obj.date',format: "%u-%L-%M-%Z"} } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $toDate: { $arrayToObject: [[]] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Kroon multi-tasking Georgia"],['$obj.obj.obj.obj.str'],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[94198,'$obj.obj.num'],["deposit"],[{ $substr: [{ $substrCP: ['$obj.obj.obj.str',15,16] },0,2] },"firewall override lime"],["Montserrat",'$obj.obj.obj.obj.str'],['$num','$obj.obj.num',86837],[44731]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfMonth: { $isoWeek: { $week: { $toDate: { $trim: { input: "Bridge Towels calculate" } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $substr: ["Toys technologies",4,1] },chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Turkish Lira",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $year: { $toDate: { $arrayToObject: [[{k: "Throughway Bedfordshire",v: false},{k: "Morocco Small hack",v: '$obj.obj.obj.obj.num'}]] } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],defaults: [new Date("2018-09-06T15:21:30.183Z"),false]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],41879] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Grass-roots client-server conglomeration",v: "Computers hacking"}]] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToParts: {date: { $isoWeekYear: { $week: { $minute: { $dateFromString: {dateString: "2018-09-06T05:47:37.129Z",timezone: "Europe/Monaco",onError: { $map: {input: [false,true],in: { $sqrt: '$obj.num' }} }} } } } },timezone: "Asia/Srednekolymsk",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $second: { $hour: { $dateToParts: {date: { $week: { $dateFromParts: {year: { $ceil: 1318 },hour: { $mod: [{ $exp: '$obj.obj.obj.num' },37235] },second: { $add: [] }} } },timezone: "Pacific/Kiritimati"} } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',18,20] }, _id: 0}}],

        [{$project: {a: { $range: [17,11] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'jaeden',cond: { $lt: [{ $arrayElemAt: [[42201,'$obj.num'],'$obj.obj.obj.obj.num'] },{ $arrayToObject: [[[{ $substrBytes: ['$$jaeden',14,18] }],[86375,'$$jaeden'],[],["Creek 1080p hybrid"]]] }] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',19,17] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $hour: { $dayOfYear: { $dateToString: {date: new Date("2018-09-06T05:22:20.740Z"),format: "%j-%S-%G-%U-%u-%d-%Z-%%-%U"} } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToParts: { date: { $dateFromParts: {year: { $trunc: 79708 },month: { $abs: '$num' },minute: { $log: [52743,23509] },millisecond: '$obj.obj.num',timezone: "America/Havana"} } } } }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toString: { $dateFromString: {dateString: "2018-09-06T00:34:20.951Z",onNull: { $reverseArray: [[]] }} } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],3257] } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeek: { $minute: { $dateFromString: {dateString: "2018-09-06T14:41:10.146Z",format: "%G-%m-%d-%%",onError: { $arrayToObject: [[[147,{ $ceil: '$num' },{ $indexOfArray: [{ $zip: { inputs: [['$obj.obj.obj.str'],[],[45797],['$obj.obj.obj.str',"Synergistic visualize","maroon",'$obj.obj.obj.obj.str']] } },{ $arrayToObject: [[{k: "Rubber",v: '$obj.str'},{k: "Freeway",v: { $dateToString: {date: { $week: { $dayOfWeek: { $minute: { $dateFromParts: {year: { $pow: [6974,'$obj.num'] },day: { $abs: '$num' },hour: { $size: [[98101]] },millisecond: { $cmp: [{ $range: [12,9,13] },{ $toLower: { $trim: {input: { $substrBytes: ["Jewelery Viaduct",15,5] },chars: { $substr: ["olive Principal",0,3] }} } }] }} } } } },format: "%G-%%-%Z-%Z-%H-%G",timezone: "US/East-Indiana",onNull: "Road Money Market Account"} }}]] },1] },'$num'],['$obj.str'],[]]] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $divide: [33704,'$num'] },hour: { $floor: '$obj.num' },second: { $indexOfArray: [{ $reverseArray: [[]] },{ $year: { $minute: { $dayOfYear: { $isoDayOfWeek: { $dateToString: { date: { $dayOfWeek: { $isoDayOfWeek: { $dayOfWeek: { $minute: { $millesecond: { $isoWeekYear: { $toDate: { $arrayToObject: [[{k: "matrix Face to face e-business",v: true},{k: "back-end",v: { $concat: [] }}]] } } } } } } } } } } } } } },9] },timezone: "Europe/San_Marino"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["deposit",'$obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[70008,{ $log: ['$obj.obj.obj.num',99182] },'$obj.obj.num'],[{ $toUpper: { $substr: ['$obj.obj.str',8,15] } },{ $trim: { input: '$obj.obj.str' } },"Assistant"]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: { $millesecond: { $minute: { $isoWeek: { $minute: { $dateToParts: {date: { $week: new Date("2018-09-05T23:39:40.197Z") },timezone: "Africa/Asmera"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $trunc: '$obj.obj.obj.obj.num' },second: { $multiply: [] },millisecond: { $sqrt: 67808 },timezone: "Africa/Juba"} }, _id: 0}}],

        [{$project: {a: { $toLower: "Fish" }, _id: 0}}],

        [{$project: {a: { $toUpper: { $concat: ['$obj.obj.str'] } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Ergonomic Soft Shoes withdrawal",11,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Avon Throughway","unleash Vatu",'$obj.obj.obj.obj.str'],99027] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[75174],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str',{ $trim: { input: "aggregate dynamic" } }],["Games Forward Serbian Dinar"],[{ $toLower: "Universal" },{ $trim: { input: "Steel Connecticut" } },{ $toUpper: '$obj.str' }],['$date',16576,'$obj.date',"Oklahoma"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "B2C Egypt ADP",v: false}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Licensed Supervisor Valleys",'$obj.obj.obj.str'],[],[{ $substr: ['$obj.obj.obj.obj.str',12,7] }],[],[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T02:45:49.711Z"),onNull: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T08:07:46.400Z"),format: "%j-%z-%G-%M-%%-%Z-%%-%V-%j",timezone: "America/Cayenne",onNull: { $substrBytes: [{ $toLower: '$obj.obj.obj.obj.str' },4,12] }} } }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$num','$obj.obj.obj.obj.num'],cond: { $gte: [{ $arrayElemAt: [["back-end adapter",{ $substrCP: ['$$this',11,17] }],{ $ceil: 26603 }] },{ $dayOfWeek: { $month: { $second: { $toDate: { $dayOfYear: { $dateFromString: { dateString: "2018-09-06T07:13:29.776Z" } } } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [64588,'$obj.num','$obj.obj.num'],in: { $mod: [45471,'$obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["back-end Fresh"],61243] }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfMonth: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T08:51:24.143Z",format: "%V-%z-%G-%%-%Y-%L-%w-%j-%S-%M-%U-%S"} },iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "protocol",v: "COM payment Security"},{k: "Unbranded Frozen Keyboard",v: new Date("2018-09-05T23:53:36.857Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[4601,82303],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],20501] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Producer Accounts",{ $trim: {input: "Checking Account indigo",chars: '$obj.obj.str'} }],42379] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ceil: '$num' },81189,'$obj.obj.num',89854],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $second: { $minute: { $week: { $dayOfMonth: { $second: { $millesecond: { $toDate: { $dateToString: {date: '$obj.obj.date',format: "%j-%S-%S-%U-%Z-%Z-%u-%%-%z-%d-%S-%u"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str','$obj.obj.obj.obj.str',{ $concat: ["global"] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[70317,80957],[{ $toString: { $arrayToObject: [[[],[],["schemas"]]] } },"Zimbabwe Dollar Small",{ $substrCP: ["Customer-focused",17,13] },{ $concat: [] }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[],['$obj.obj.obj.num'],[{ $ltrim: { input: "solid state" } },'$obj.obj.obj.str'],[{ $substrCP: ['$str',0,3] },"Gibraltar AGP Minnesota"]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toString: { $arrayElemAt: [[8047],'$obj.num'] } },1,15] }, _id: 0}}],

        [{$project: {a: { $week: { $week: '$date' } }, _id: 0}}],

        [{$project: {a: { $range: [20,11,19] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[false,{ $ceil: 55809 }],47474] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Books",{ $toUpper: '$obj.obj.obj.obj.str' }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.num',31024]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["real-time SMS","Internal",'$obj.obj.str'],29898] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num'],45162] }, _id: 0}}],

        [{$project: {a: { $year: { $minute: { $toDate: { $map: {input: [],as: 'casey',in: { $multiply: [] }} } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%j-%j-%V-%w-%j-%u-%H-%L-%d-%H",timezone: "Greenwich"} }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfWeek: { $toDate: { $concatArrays: [['$obj.str','$obj.obj.obj.obj.str'],[true],[],[],[{ $trim: {input: "Berkshire Rubber",chars: '$obj.obj.obj.str'} }],['$obj.obj.obj.num',88091,'$obj.num']] } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: { $substr: [{ $dateToString: {date: '$obj.obj.date',timezone: "Etc/GMT-2"} },1,14] } }],72886] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "infrastructures Concrete Point",v: 62865}]] } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $week: { $dateToString: { date: new Date("2018-09-06T03:30:32.563Z") } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToParts: {date: { $isoDayOfWeek: { $second: { $toDate: { $arrayToObject: [[[],["virtual Bike Granite","Automotive Brook"]]] } } } },timezone: "US/Pacific"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "global Leone",v: false},{k: "payment SCSI",v: 44940}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Sleek Practical Cotton Pizza",v: 54383},{k: "Berkshire",v: "Shoes"},{k: "Tasty Soft Car",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $substr: ["engineer",8,12] }],["Executive Soft",'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Fresh transparent XSS"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $year: { $dayOfMonth: { $minute: { $second: { $dateToParts: {date: { $dayOfWeek: { $dayOfYear: '$obj.obj.obj.date' } },iso8601: false} } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Pizza"],[],[],[]],defaults: [{ obj: {} },[false],{}]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "full-range",v: false},{k: "Ethiopian Birr Kids",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T09:59:56.160Z"),timezone: "Etc/GMT-3",onNull: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str',"Norfolk Island Group Home Loan Account"]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toString: { $arrayElemAt: [[95437,'$num'],'$obj.obj.obj.obj.num'] } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: false} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str'],in: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $second: { $year: { $millesecond: { $dateToParts: {date: { $isoDayOfWeek: { $month: { $week: { $isoWeekYear: { $second: { $isoDayOfWeek: { $toDate: { $arrayElemAt: [[77818,19508],'$obj.obj.obj.num'] } } } } } } } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Nauru Yen"],'$num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["override",'$str'],in: 98705} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Views copying"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.str',"Infrastructure Auto Loan Account"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Alaska",v: new Date("2018-09-06T07:23:37.062Z")},{k: "Customer Cotton Analyst",v: false},{k: "paradigm Savings Account Group",v: { $millesecond: { $toDate: { $substr: ['$obj.obj.str',4,14] } } }}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $rtrim: {input: '$obj.str',chars: { $substrCP: ["connecting",14,15] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[45427,'$obj.obj.obj.num','$obj.obj.obj.num',{ $mod: [2358,'$obj.num'] },25215],{ $ln: 53463 }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],59497] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[{ $ltrim: {input: "leverage Communications wireless",chars: { $substrCP: ['$obj.obj.str',17,13] }} }],33606] } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Pants wireless","Auto Loan Account Licensed"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Global",'$obj.obj.obj.str'],94227] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T16:02:22.842Z"),timezone: "Indian/Antananarivo"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Engineer",v: { $toLower: '$obj.str' }}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $millesecond: { $dateToParts: {date: { $second: { $year: { $dayOfWeek: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[{k: "bluetooth",v: { $dayOfWeek: { $hour: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T14:07:50.100Z",timezone: "America/Argentina/Salta",onError: { $substrBytes: ["COM",7,2] },onNull: { $arrayToObject: [[{k: "India",v: '$obj.obj.obj.obj.num'},{k: "Cook Islands",v: true},{k: "CSS",v: '$obj.str'}]] }} } } } }},{k: "solution reboot Electronics",v: true},{k: "tan",v: '$obj.num'}]] } } } } } },timezone: "America/Winnipeg"} } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handcrafted Orchestrator",v: false},{k: "transmit Tennessee Dynamic",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrCP: ["array Kentucky Rhode Island",12,6] },'$obj.obj.obj.str',"invoice olive","payment Connecticut payment"],[{ $toLower: "Graphical User Interface AI" }],[{ $toString: { $arrayElemAt: [[17370,'$obj.num','$obj.num'],'$obj.num'] } }],[]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfYear: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $log: [66525,'$obj.num'] },isoDayOfWeek: { $exp: 21813 },hour: { $subtract: [84694,'$obj.obj.obj.obj.num'] },minute: { $mod: [50422,{ $size: [[{ $rtrim: {input: '$obj.obj.obj.str',chars: "bypassing gold AI"} }]] }] },second: { $multiply: [9138] },millisecond: { $abs: { $size: [["XSS transmitter Cotton"]] } },timezone: "Asia/Tokyo"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Money Market Account Washington",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $toDate: { $dateToString: {date: new Date("2018-09-06T01:41:04.185Z"),format: "%M-%V-%U-%G-%%-%U-%U",timezone: "Jamaica"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[92739],{ $exp: 19270 }] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfYear: { $isoWeek: { $dateFromParts: {year: { $multiply: [] },month: { $log10: 59362 },day: { $mod: ['$obj.obj.obj.obj.num','$obj.obj.obj.num'] },second: { $size: [["unleash Gorgeous Cotton Fish"]] }} } } } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T08:54:16.455Z"),format: "%Z-%S-%w-%H-%S-%M-%G-%d-%w-%V-%U"} }, _id: 0}}],

        [{$project: {a: { $range: [14,6] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $minute: { $second: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T10:50:31.600Z",timezone: "Africa/Conakry",onNull: '$obj.str'} },iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Sharable intranet",v: 14378},{k: "demand-driven mint green",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $month: { $second: { $isoDayOfWeek: { $minute: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T15:17:44.057Z",format: "%G-%%-%S-%Y-%Y-%%-%M-%m",onNull: { $arrayElemAt: [[],'$num'] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $dateToString: {date: new Date("2018-09-06T01:52:39.188Z"),format: "%w-%M-%G-%w-%z-%w-%Y-%u-%j-%%",timezone: "America/Managua",onNull: '$obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[60841],[{ $toString: { $trim: {input: '$obj.obj.obj.str',chars: '$obj.obj.obj.obj.str'} } },{ $concat: [] }],['$num','$num']]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $dateToString: {date: '$obj.date',format: "%S-%m-%S-%V-%G-%w",timezone: "Indian/Mahe",onNull: { $concat: ["Investment Account","online"] }} } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $trim: {input: { $toLower: { $dateToString: {date: { $week: { $week: { $hour: '$obj.date' } } },format: "%u-%u-%M-%z-%m-%d-%z-%w-%M",onNull: { $arrayElemAt: [[67147],'$obj.obj.num'] }} } },chars: "copying zero tolerance"} }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.str',{ $substrCP: ["Wooden Buckinghamshire Burkina Faso",2,16] },{ $toUpper: { $substr: ["Assurance interactive",7,6] } }],[69283,14039],[{ $ltrim: {input: '$obj.obj.str',chars: '$obj.obj.obj.obj.str'} }],[],['$obj.obj.obj.obj.num','$num',44467,'$obj.obj.obj.num','$obj.obj.obj.obj.num',8742],["Tasty Fresh Keyboard Rubber",'$obj.obj.str'],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $week: { $millesecond: { $millesecond: { $minute: { $week: { $dateToParts: {date: { $second: { $dateFromString: { dateString: "2018-09-06T17:49:38.290Z" } } },timezone: "Asia/Baku"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.num'],["haptic"],[{ $substrBytes: ['$obj.str',11,14] }]]] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfYear: { $toDate: { $arrayToObject: [[{k: "Distributed quantify",v: '$obj.obj.date'},{k: "Handmade Steel Gloves Electronics interface",v: '$obj.obj.obj.obj.num'}]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["program Sausages",'$obj.obj.obj.str'],9147] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["process improvement withdrawal Algeria"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $cmp: [{ $isoDayOfWeek: { $isoDayOfWeek: { $millesecond: { $week: { $dayOfMonth: { $minute: { $isoWeekYear: { $toDate: { $toLower: '$obj.str' } } } } } } } } },{ $arrayToObject: [[[{ $trim: { input: { $toLower: "digital primary Factors" } } },"Sports Central"]]] }] }] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[{ $concat: ['$obj.obj.obj.obj.str','$str',{ $trim: { input: "Small Fresh Bacon Dominica" } }] }],[84747,1016,{ $abs: '$obj.obj.obj.obj.num' },'$obj.num'],[],["Officer"],[]]] } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeek: { $dateFromString: { dateString: "2018-09-06T16:17:28.652Z" } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.str',"mobile",{ $rtrim: { input: { $substrCP: ["SCSI Bouvet Island (Bouvetoya) Course",1,14] } } }],49899] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ["Self-enabling","channels global vertical",'$str'] }],78145] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[]] } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $toString: { $filter: {input: ['$num','$obj.obj.num',36599],as: 'betty',cond: { $gte: [{ $millesecond: { $dayOfWeek: { $minute: { $dayOfWeek: { $dayOfYear: { $hour: { $isoDayOfWeek: { $dateToParts: {date: { $dayOfMonth: { $toDate: { $substr: ["database Plastic navigate",18,18] } } },timezone: "America/Paramaribo",iso8601: true} } } } } } } } },{ $substr: ["payment Handcrafted Granite Sausages supply-chains",4,16] }] }} } }],["sticky"],[],[96073]],useLongestLength: true,defaults: [/Practical/]} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $year: { $hour: { $minute: { $isoWeek: { $dayOfMonth: { $dateFromParts: {year: { $log: [75454,32460] },month: { $log10: '$obj.obj.num' },hour: { $indexOfArray: [{ $concatArrays: [[50342,'$obj.obj.obj.num'],["synthesizing HDD paradigms"]] },{ $arrayElemAt: [[],'$num'] },1] },millisecond: { $ceil: 12038 },timezone: "Europe/Amsterdam"} } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: { $dateFromString: {dateString: "2018-09-06T19:11:17.248Z",format: "%%-%H-%V-%M-%d-%L",timezone: "Indian/Maldives"} } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T13:13:58.544Z",timezone: "Europe/Mariehamn",onError: { $isoWeekYear: { $week: { $dateToParts: {date: { $minute: { $isoDayOfWeek: { $isoDayOfWeek: { $toDate: '$date' } } } },timezone: "MST",iso8601: true} } } },onNull: { $concatArrays: [['$obj.obj.obj.num',57513,'$obj.obj.obj.num'],[{ $ltrim: {input: '$str',chars: "technologies"} }],[52931],["Marketing"]] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],[],['$obj.obj.obj.str',{ $substr: ["Monaco Small Cotton Table compressing",11,12] },'$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Gorgeous",15,7] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrCP: [{ $toString: { $map: {input: ["Baby web-enabled SQL"],in: { $abs: 32022 }} } },4,0] } } }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromParts: {year: { $exp: '$obj.obj.obj.num' },hour: { $trunc: '$num' },minute: { $ceil: 52285 },millisecond: { $log10: 24339 }} } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str'],as: 'demarcus',in: 71045} }, _id: 0}}],

        [{$project: {a: { $range: [7,14,14] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["haptic Function-based",0,13] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str',"Connecticut Gorgeous Cotton Table Mississippi"],in: { $pow: ['$num',10995] }} }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',17,1] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $millesecond: { $isoDayOfWeek: { $minute: { $dateToParts: {date: { $dayOfMonth: { $isoWeekYear: '$date' } },timezone: "Australia/Adelaide"} } } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [40332,'$obj.obj.num'],as: 'lamar',in: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["analyzing indexing","navigating Egypt seize"],'$num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfMonth: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T12:15:37.612Z",onError: { $substrCP: ["New York",12,2] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],49015] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.str',{ $dateToString: {date: { $month: { $hour: { $dateFromString: {dateString: "2018-09-06T02:34:06.207Z",onError: { $zip: {inputs: [],defaults: []} },onNull: "National Handcrafted Steel Chips Gorgeous Frozen Mouse"} } } },timezone: "Africa/Gaborone"} },'$str'],['$obj.obj.num','$obj.num',54289,{ $trunc: 4168 }],["Research"],["system grow"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["China backing up"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T13:55:37.729Z" } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $rtrim: { input: "Rhode Island back up Aruban Guilder" } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Generic",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],38892] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "target",v: '$obj.obj.num'},{k: "Hat initiative Botswana",v: "Officer Rhode Island"}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfWeek: { $week: { $isoWeekYear: { $dayOfYear: { $isoWeekYear: { $isoDayOfWeek: { $toDate: { $millesecond: { $dateToParts: {date: { $millesecond: { $year: { $week: { $year: { $dayOfMonth: { $hour: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-05T23:20:04.611Z",timezone: "Europe/Copenhagen"} } } } } } } } },timezone: "Africa/Bangui",iso8601: false} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToParts: {date: { $toDate: { $range: [11,6] } },timezone: "Europe/Bucharest"} } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromParts: {isoWeekYear: { $exp: '$obj.obj.obj.num' },isoWeek: { $multiply: [27423,93082] },hour: { $divide: ['$obj.num','$obj.obj.num'] }} } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "functionalities" } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateFromParts: {isoWeekYear: { $subtract: ['$obj.num',64032] },hour: { $log: ['$num','$obj.obj.obj.num'] },minute: { $multiply: [] },millisecond: { $ln: 27143 },timezone: "America/Guyana"} },onNull: { $arrayToObject: [[{k: "Berkshire Sports Money Market Account",v: true}]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],75323] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "magnetic reciprocal Towels",chars: "Sausages concept"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.str',"Solomon Islands"],['$obj.obj.obj.str','$obj.str',{ $toString: { $map: {input: [],in: { $abs: { $multiply: [86405,'$$this',47900] } }} } }],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$date' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num','$num'],76438] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

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
