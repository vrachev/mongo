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
        return coll.insert({_id: 637,str: "synergies",num: 67006,date: new Date("2018-09-06T10:55:43.945Z"),array: [],obj: {_id: 638,str: "withdrawal bypassing",num: 84996,date: new Date("2018-09-06T02:38:05.334Z"),array: [76416,new Date("2018-09-06T02:20:21.329Z"),"purple",33161,{_id: 639,str: "withdrawal",num: 42212,date: new Date("2018-09-06T11:05:32.820Z"),obj: {}},new Date("2018-09-05T21:21:44.297Z"),new Date("2018-09-06T07:27:44.295Z"),"Massachusetts Credit Card Account USB",[],79644,"application capacitor",26211],obj: {_id: 640,str: "real-time copy",date: new Date("2018-09-06T18:36:23.758Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 641,str: "Jamaican Dollar",num: 32824,date: new Date("2018-09-06T07:13:26.711Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 642,str: "Customer-focused",array: ["Integration IB Micronesia",19254,new Date("2018-09-06T10:09:11.778Z"),"bleeding-edge",81080,"Customer Bedfordshire full-range",{_id: 643,str: "encoding Home Loan Account Bike",num: 9514,date: new Date("2018-09-05T21:43:36.653Z"),array: [],obj: {}},54536],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 644,str: "Rustic cyan Berkshire",num: 37582,date: new Date("2018-09-05T21:34:50.141Z"),array: ["Lock Falkland Islands Pound",93302,new Date("2018-09-06T13:21:14.762Z"),87205,"azure United States Minor Outlying Islands",3909,"Hat Belgium",93451,new Date("2018-09-05T21:48:29.126Z"),new Date("2018-09-06T17:57:30.737Z"),{_id: 645,num: 87376,date: new Date("2018-09-06T19:44:10.144Z"),array: [],obj: {}},2941],obj: {_id: 646,num: 59085,date: new Date("2018-09-05T23:59:38.801Z"),array: [[],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 647,str: "incubate Home Loan Account",num: 20569,date: new Date("2018-09-06T04:17:54.238Z"),obj: {_id: 648,str: "Down-sized metrics",num: 85986,array: [],obj: {_id: 649,num: 51619,date: new Date("2018-09-06T16:43:57.076Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 650,num: 47734,date: new Date("2018-09-06T01:01:52.226Z"),obj: {_id: 651,str: "Dynamic architectures withdrawal",num: 95165,date: new Date("2018-09-06T05:15:54.326Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 652,str: "ADP productize copying",num: 41937,date: new Date("2018-09-06T14:02:10.718Z"),array: ["Generic Frozen Fish Vision-oriented","Generic redundant",72347,new Date("2018-09-06T14:52:44.433Z"),5124,[new Date("2018-09-06T06:27:13.388Z"),"Interactions copy navigating",new Date("2018-09-06T14:28:17.097Z")],new Date("2018-09-05T22:53:28.476Z"),94374,new Date("2018-09-06T18:58:21.493Z"),[],{_id: 653,str: "Berkshire Kina secured line",num: 7882,date: new Date("2018-09-06T05:54:53.012Z"),obj: {}},"empowering Bosnia and Herzegovina Legacy",25802],obj: {_id: 654,str: "Progressive",num: 26805,array: [],obj: {_id: 655,num: 46716,date: new Date("2018-09-06T13:28:34.384Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 656,str: "multimedia firewall Implementation",num: 49571,date: new Date("2018-09-06T17:56:37.751Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 657,str: "Checking Account Nebraska Triple-buffered",num: 19899,date: new Date("2018-09-06T01:03:16.407Z"),array: [],obj: {_id: 658,str: "Stream",num: 26262,date: new Date("2018-09-06T09:33:36.375Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 659,num: 18952,date: new Date("2018-09-06T15:25:17.991Z"),array: ["Mouse connecting","Virginia",44004,new Date("2018-09-05T21:27:12.761Z"),{_id: 660,str: "Tasty Steel Tuna",date: new Date("2018-09-06T13:38:48.326Z"),array: [],obj: {_id: 661,str: "Auto Loan Account Generic Metal Keyboard",num: 20781,date: new Date("2018-09-06T14:45:47.801Z"),array: [],obj: {_id: 662,str: "empower",num: 20173,date: new Date("2018-09-06T19:12:15.040Z")}}},94887,[],65376,"Computers withdrawal North Dakota",new Date("2018-09-06T09:26:45.945Z"),39701,new Date("2018-09-06T03:29:45.728Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 663,str: "contingency Baby",num: 8732,date: new Date("2018-09-06T15:02:43.635Z"),array: [["Borders",new Date("2018-09-06T07:41:50.999Z"),{_id: 664,str: "supply-chains Texas",date: new Date("2018-09-06T19:04:23.707Z"),array: [],obj: {_id: 665,num: 81856,array: [],obj: {}}},84045,"solution-oriented","Throughway",[],new Date("2018-09-06T02:02:47.942Z"),{_id: 666,str: "Generic Rubber Pizza Small Concrete Chips Forward",num: 32818,date: new Date("2018-09-05T22:42:54.497Z"),obj: {}}],new Date("2018-09-06T16:22:57.076Z"),66704,{_id: 667,str: "interface",array: [12428,"holistic",new Date("2018-09-06T12:38:44.646Z"),"Berkshire"],obj: {}}],obj: {_id: 668,num: 97258,date: new Date("2018-09-05T20:26:28.496Z"),obj: {_id: 669,str: "bypass PCI SSL",date: new Date("2018-09-06T06:25:34.098Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 670,str: "Graphic Interface Island",num: 94887,date: new Date("2018-09-06T06:41:34.744Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 671,str: "Steel Mountains wireless",num: 54759,date: new Date("2018-09-06T15:38:44.032Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 672,str: "Burundi JSON",num: 94946,date: new Date("2018-09-05T23:10:56.270Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 673,str: "Buckinghamshire Faroe Islands Syrian Pound",num: 32196,date: new Date("2018-09-06T02:14:20.945Z"),array: ["Arizona Corporate","Gibraltar Personal Loan Account",new Date("2018-09-06T07:19:32.245Z"),{_id: 674,str: "Soft",date: new Date("2018-09-06T17:22:09.953Z"),array: [],obj: {}},57458,77395,[new Date("2018-09-06T09:14:51.417Z"),[],18436,new Date("2018-09-05T20:19:13.331Z")],{_id: 675,str: "Practical Cross-platform",num: 89937,date: new Date("2018-09-06T04:44:21.988Z"),array: [new Date("2018-09-05T22:21:21.182Z"),"open-source backing up","index"],obj: {_id: 676,str: "Organized models",num: 81347,array: [],obj: {_id: 677,date: new Date("2018-09-06T00:05:23.787Z"),array: []}}},new Date("2018-09-06T10:29:58.358Z"),new Date("2018-09-06T09:39:13.554Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 678,str: "knowledge user",num: 72442,date: new Date("2018-09-06T02:03:08.462Z"),array: [],obj: {_id: 679,str: "Investor",num: 75763,array: [{_id: 680,date: new Date("2018-09-05T19:55:59.414Z"),array: [new Date("2018-09-06T19:29:02.203Z"),86277,"Czech Koruna deposit"],obj: {}},new Date("2018-09-06T03:30:35.456Z"),"Malaysian Ringgit",30912,{_id: 681,str: "Electronics leverage",num: 39655,date: new Date("2018-09-06T15:52:58.812Z")},"Frozen hacking Refined",new Date("2018-09-06T18:00:01.492Z"),"Data Movies",61094,[],67589,"Chair backing up neural"]}});
    },

    function(coll) {
        return coll.insert({_id: 682,str: "microchip",num: 63747,date: new Date("2018-09-06T04:38:21.285Z"),array: ["application",new Date("2018-09-06T06:28:37.704Z"),new Date("2018-09-05T23:44:11.552Z"),[],44236,"Saint Martin","Luxembourg Croatian Kuna",{_id: 683,str: "Ergonomic Soft Mouse Washington innovative",num: 56073,date: new Date("2018-09-06T16:39:02.149Z"),array: [new Date("2018-09-06T07:11:26.355Z"),"Norfolk Island Officer Central"],obj: {}},35954,45419,[],[],457],obj: {_id: 684,str: "Fresh",num: 23737,date: new Date("2018-09-06T14:35:39.215Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 685,str: "algorithm Shoes",num: 59271,date: new Date("2018-09-06T13:04:57.577Z"),array: [new Date("2018-09-06T09:41:24.360Z"),87095,"deliverables",{_id: 686,str: "transmitting",num: 36654,date: new Date("2018-09-06T18:24:15.966Z"),array: [],obj: {}},new Date("2018-09-06T04:50:47.163Z"),new Date("2018-09-06T01:46:57.140Z"),[],"discrete hacking",[43973,28814,new Date("2018-09-06T00:54:11.424Z")],["Technician",99102],["digital transmitter bypass",new Date("2018-09-06T10:55:10.420Z"),97401],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 687,str: "Re-engineered Argentine Peso",num: 42864,array: [{_id: 688,str: "Bike Suriname array",num: 17475,date: new Date("2018-09-06T13:20:33.956Z"),array: [new Date("2018-09-06T10:56:29.405Z"),15255],obj: {}},new Date("2018-09-06T14:53:46.879Z"),"Field",89375,75330,"Borders Borders",new Date("2018-09-05T21:19:22.715Z"),new Date("2018-09-06T19:43:20.757Z"),[],{_id: 689,str: "Terrace",num: 35697,date: new Date("2018-09-06T00:11:05.364Z"),array: [13965,"azure SMS Kentucky",[],[]],obj: {_id: 690,str: "Auto Loan Account Florida",array: [],obj: {_id: 691,str: "utilize",num: 24689,date: new Date("2018-09-06T12:06:34.949Z"),obj: {_id: 692,num: 1674,date: new Date("2018-09-06T03:34:22.379Z")}}}},{_id: 693,str: "Customer white withdrawal",num: 62269,date: new Date("2018-09-05T21:14:50.196Z"),array: ["Personal Loan Account"],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 694,str: "microchip",num: 92112,date: new Date("2018-09-06T14:13:16.752Z"),array: ["Handmade Plastic Towels circuit","red Health","turquoise Bedfordshire",80825,83269,new Date("2018-09-06T17:59:56.799Z"),61052,{_id: 695,str: "Home Loan Account Buckinghamshire",num: 83014,date: new Date("2018-09-05T23:48:50.593Z"),array: [],obj: {_id: 696,str: "United States of America Florida schemas",array: [],obj: {_id: 697,str: "New Mexico",num: 17720,date: new Date("2018-09-06T08:54:51.038Z"),array: [new Date("2018-09-06T09:11:37.240Z"),{_id: 698,num: 4280,date: new Date("2018-09-05T20:12:54.608Z"),obj: {}},"synergistic USB vertical"],obj: {_id: 699,date: new Date("2018-09-06T10:56:42.775Z"),array: []}}}},"fresh-thinking",new Date("2018-09-06T12:04:19.887Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 700,str: "GB Cambridgeshire Towels",num: 94350,date: new Date("2018-09-06T02:40:53.822Z"),array: ["magenta",5024,new Date("2018-09-05T22:23:45.616Z"),new Date("2018-09-06T04:16:47.118Z"),new Date("2018-09-06T16:00:52.956Z"),new Date("2018-09-06T15:16:34.983Z"),[],"United Kingdom copy pricing structure","USB protocol",60212,89407,"instruction set",new Date("2018-09-06T05:38:04.701Z")],obj: {_id: 701,str: "Unbranded",num: 84244,date: new Date("2018-09-06T15:49:11.464Z"),array: [{_id: 702,str: "Comoro Franc Towels",num: 60460,date: new Date("2018-09-05T20:15:03.859Z"),obj: {}},{_id: 703,str: "connect",obj: {}}],obj: {_id: 704,str: "3rd generation Tools calculating",num: 80199,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 705,str: "Generic Research Road",date: new Date("2018-09-06T06:02:51.617Z"),array: [],obj: {_id: 706,str: "neural",num: 83894,date: new Date("2018-09-05T23:53:30.050Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 707,str: "transmit Automated",num: 51338,array: [{_id: 708,str: "Mission Frozen feed",date: new Date("2018-09-06T04:56:32.478Z"),array: [],obj: {_id: 709,str: "streamline Generic Wisconsin",num: 61277,date: new Date("2018-09-06T11:25:14.503Z"),array: [],obj: {}}},49792,"Practical Rubber Pants primary invoice","Virtual",[new Date("2018-09-06T13:36:13.765Z")],[],"Director Ergonomic",92983,"Auto Loan Account Manager Liaison",new Date("2018-09-06T18:21:35.124Z"),39212,new Date("2018-09-06T05:09:24.698Z")],obj: {_id: 710,str: "integrated Peru",num: 53166,date: new Date("2018-09-06T08:08:05.338Z")}});
    },

    function(coll) {
        return coll.insert({_id: 711,str: "Usability Avon Supervisor",num: 58661,date: new Date("2018-09-06T01:25:30.817Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 712,str: "Islands maximize open-source",num: 21785,date: new Date("2018-09-06T05:05:02.587Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 713,str: "whiteboard",date: new Date("2018-09-06T06:27:07.408Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 714,str: "Singapore Dollar",num: 91772,date: new Date("2018-09-06T13:13:54.988Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 715,str: "1080p hacking",num: 3744,array: ["Borders Frozen","system-worthy Industrial",new Date("2018-09-05T20:55:14.002Z"),39133,4884,new Date("2018-09-06T13:25:33.858Z"),{_id: 716,str: "Pants Kansas web services",num: 15922,date: new Date("2018-09-05T22:35:49.447Z"),array: [],obj: {_id: 717,str: "Fully-configurable Berkshire deposit",num: 27768,date: new Date("2018-09-06T08:44:21.602Z"),obj: {}}},{_id: 718,str: "Union Checking Account",date: new Date("2018-09-06T16:53:17.114Z"),array: [],obj: {_id: 719,num: 50979,date: new Date("2018-09-06T14:04:17.146Z"),array: [974],obj: {}}},["yellow deposit Pizza",new Date("2018-09-06T13:20:23.140Z")],"Route RAM","bricks-and-clicks",62297]});
    },

    function(coll) {
        return coll.insert({_id: 720,str: "Wooden",num: 67793,date: new Date("2018-09-06T00:11:19.942Z"),obj: {_id: 721,str: "Hollow",num: 9843,array: [new Date("2018-09-06T12:42:42.630Z"),new Date("2018-09-06T10:26:16.417Z"),51988,new Date("2018-09-06T12:37:13.941Z"),new Date("2018-09-06T03:34:48.314Z"),13614,{_id: 722,str: "Rest PNG Pizza",num: 45464,date: new Date("2018-09-06T17:30:52.386Z"),array: ["Fantastic Metal Sausages"],obj: {}},75293,"Gloves",new Date("2018-09-06T09:58:46.551Z"),40958,"background","Highway",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 723,str: "Checking Account haptic",num: 66618,date: new Date("2018-09-06T09:01:48.967Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 724,str: "Bedfordshire",num: 34244,date: new Date("2018-09-06T05:36:09.386Z"),array: [77054,"Auto Loan Account",new Date("2018-09-05T23:49:10.645Z"),17903,"Shirt",new Date("2018-09-06T16:06:18.392Z"),27742,2947,"payment",new Date("2018-09-06T12:55:36.304Z"),"Fresh",24735],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 725,str: "lime",num: 45914,date: new Date("2018-09-06T00:53:14.562Z"),array: [],obj: {_id: 726,str: "Ergonomic Rubber Tuna EXE Money Market Account",num: 66422,date: new Date("2018-09-06T12:03:44.275Z"),obj: {_id: 727,num: 77332,date: new Date("2018-09-05T23:38:07.115Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 728,str: "Diverse Auto Loan Account",num: 79434,date: new Date("2018-09-06T13:18:32.082Z"),array: ["Avon Executive","Investment Account Croatia",12051,new Date("2018-09-06T11:49:19.690Z"),new Date("2018-09-06T12:08:34.670Z"),[{_id: 729,str: "withdrawal Islands",num: 8448,date: new Date("2018-09-06T01:09:01.618Z"),obj: {}},99404,new Date("2018-09-06T02:22:51.647Z"),"Regional",32612],[],{_id: 730,str: "pixel ivory",num: 82852,date: new Date("2018-09-06T05:10:57.909Z"),obj: {_id: 731,str: "Steel Savings Account revolutionary",date: new Date("2018-09-06T10:16:38.024Z"),array: []}},"Wyoming",{_id: 732,date: new Date("2018-09-06T16:37:35.838Z"),array: [4989,"Outdoors",[new Date("2018-09-06T15:49:02.692Z")]],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 733,str: "Refined Rubber Salad bricks-and-clicks",num: 77676,date: new Date("2018-09-06T10:52:42.237Z"),array: [{_id: 734,str: "navigating",date: new Date("2018-09-06T06:56:17.216Z")},new Date("2018-09-05T20:46:25.189Z"),17121,66250,"Internal payment Nauru",1967,new Date("2018-09-06T05:29:00.402Z"),"instruction set grey neural",[],new Date("2018-09-05T19:57:21.557Z"),"Credit Card Account",63315,"SMTP Consultant"],obj: {_id: 735,str: "Awesome",num: 82512,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 736,str: "Colombia bandwidth Kwacha",num: 77247,date: new Date("2018-09-06T15:27:07.840Z"),array: [],obj: {_id: 737,num: 78016,date: new Date("2018-09-05T20:54:38.172Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 738,num: 15224,date: new Date("2018-09-06T04:47:55.354Z"),array: ["Burgs generate Product",{_id: 739,num: 43522,date: new Date("2018-09-06T11:19:46.117Z"),array: []},{_id: 740,str: "Cotton",num: 71475,date: new Date("2018-09-06T03:06:10.619Z"),array: [55102,new Date("2018-09-06T11:15:49.209Z"),{_id: 741,str: "Phased Manor",num: 2346,obj: {}}],obj: {_id: 742,str: "digital payment",num: 52980,date: new Date("2018-09-05T20:57:00.944Z"),array: ["Maine Up-sized",new Date("2018-09-06T11:10:37.445Z"),19847,new Date("2018-09-06T06:28:45.146Z")],obj: {_id: 743,str: "parsing structure",obj: {}}}},"deposit Applications copying",42156,[],new Date("2018-09-06T09:46:33.815Z"),"Unbranded Rubber Pizza",[],76044]});
    },

    function(coll) {
        return coll.insert({_id: 744,str: "Product connect",num: 98899,date: new Date("2018-09-06T00:01:25.077Z"),array: [28922,new Date("2018-09-05T20:03:12.165Z"),14257,"TCP",new Date("2018-09-06T05:01:47.571Z"),new Date("2018-09-05T23:08:12.771Z"),new Date("2018-09-06T09:14:10.339Z"),7940,"SDR Utah Fords",["Clothing",[[]],{_id: 745,str: "Rustic Granite Chair",num: 84432,date: new Date("2018-09-06T19:48:57.930Z"),array: [],obj: {}},new Date("2018-09-06T14:50:52.171Z"),"Intelligent Soft Salad"]],obj: {_id: 746,num: 88158,date: new Date("2018-09-06T17:19:46.918Z"),array: [89654]}});
    },

    function(coll) {
        return coll.insert({_id: 747,str: "end-to-end connect Tools",num: 80678,date: new Date("2018-09-05T21:41:25.800Z"),array: [["transmitting payment"],"East Caribbean Dollar Swedish Krona card",54918,[59145,"array metrics",new Date("2018-09-06T08:28:21.477Z"),new Date("2018-09-06T11:16:05.169Z")],85897,"3rd generation",28670,new Date("2018-09-05T21:35:56.986Z"),new Date("2018-09-06T10:58:58.970Z"),new Date("2018-09-06T09:36:11.434Z"),{_id: 748,str: "Rustic payment system engine",date: new Date("2018-09-06T10:24:41.732Z"),obj: {_id: 749,num: 52453,date: new Date("2018-09-06T17:37:32.165Z"),array: [],obj: {}}},{_id: 750,str: "Vista invoice Madagascar",num: 2353},[]],obj: {_id: 751,str: "Customer grow Investor",date: new Date("2018-09-05T20:16:00.693Z"),array: [{_id: 752,num: 12483,array: [],obj: {}},30272]}});
    },

    function(coll) {
        return coll.insert({_id: 753,str: "Tasty Chicken",num: 27365,date: new Date("2018-09-06T16:39:33.065Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 754,str: "Regional Direct parsing",num: 69059,date: new Date("2018-09-06T15:51:11.869Z"),array: [62927,new Date("2018-09-06T12:37:13.873Z"),"Auto Loan Account Practical","impactful bluetooth Soft",{_id: 755,str: "redefine backing up",num: 86234,date: new Date("2018-09-06T16:42:08.287Z"),array: [],obj: {_id: 756,str: "Universal Credit Card Account navigating",date: new Date("2018-09-05T21:43:02.761Z"),array: [12623,[],new Date("2018-09-06T01:17:38.410Z")],obj: {}}},new Date("2018-09-06T09:08:41.480Z"),[new Date("2018-09-06T17:59:42.289Z"),[],59763],"turquoise hard drive seize",{_id: 757,num: 78410,date: new Date("2018-09-06T17:22:53.546Z"),array: [65354]},"Refined Steel Bike Pine Steel",[]]});
    },

    function(coll) {
        return coll.insert({_id: 758,str: "compress Data Fantastic",num: 69112,date: new Date("2018-09-06T18:36:13.686Z"),array: [],obj: {_id: 759,str: "synthesizing",num: 21732,date: new Date("2018-09-06T01:57:23.973Z"),array: [{_id: 760,str: "mission-critical Virgin Islands, British",num: 40824,array: []},new Date("2018-09-06T02:54:11.662Z"),"leverage",new Date("2018-09-06T05:55:21.184Z"),"Analyst support productivity",65454,[10531],47931,"deposit",{_id: 761,str: "Tuna Lead Cedi",num: 2680,date: new Date("2018-09-06T17:52:36.625Z"),obj: {_id: 762,str: "Pants",obj: {}}},"Borders invoice",{_id: 763,str: "Fantastic",date: new Date("2018-09-06T11:52:19.367Z"),array: [new Date("2018-09-06T12:33:59.298Z"),new Date("2018-09-06T17:20:56.894Z")],obj: {_id: 764,str: "Refined Plastic Cheese",num: 27112,date: new Date("2018-09-06T19:54:47.838Z"),array: [new Date("2018-09-06T01:14:17.477Z"),5018],obj: {_id: 765,date: new Date("2018-09-06T03:18:36.116Z"),array: ["Administrator Bike"]}}},"Representative Integration"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 766,str: "PCI Kip",num: 33266,date: new Date("2018-09-06T11:10:37.305Z"),array: [new Date("2018-09-06T03:13:35.525Z"),"Developer Sleek Soft Cheese",86199,[82856,"Crossing",38298,"bypass 5th generation"],new Date("2018-09-06T03:47:07.725Z"),new Date("2018-09-06T11:46:16.205Z"),{_id: 767,str: "reinvent cross-platform",num: 46377,date: new Date("2018-09-06T14:23:22.453Z"),array: [],obj: {_id: 768,num: 3293,array: [],obj: {}}},new Date("2018-09-06T03:32:51.335Z"),{_id: 769,str: "attitude Austria Unions",date: new Date("2018-09-06T00:23:48.831Z"),obj: {_id: 770,str: "Lead B2C Credit Card Account",date: new Date("2018-09-06T12:36:03.527Z")}},new Date("2018-09-06T09:11:52.572Z"),[],"Steel"],obj: {_id: 771,num: 88928,array: [[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 772,str: "proactive backing up Profit-focused",num: 26319,date: new Date("2018-09-06T12:09:21.119Z"),array: [],obj: {_id: 773,str: "impactful",num: 68410,date: new Date("2018-09-05T23:12:57.084Z"),array: [],obj: {_id: 774,date: new Date("2018-09-05T20:07:38.634Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 775,str: "Customer compress Games",date: new Date("2018-09-06T11:24:41.581Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 776,str: "Metal Mobility RAM",num: 39684,date: new Date("2018-09-06T04:22:25.480Z"),array: [],obj: {_id: 777,str: "Refined Wooden Ball panel",date: new Date("2018-09-06T19:01:41.171Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 778,str: "Home Steel",date: new Date("2018-09-06T05:14:43.036Z"),array: ["Villages overriding reintermediate",10932,new Date("2018-09-06T16:58:33.050Z"),96124,new Date("2018-09-05T23:59:35.112Z"),"communities",{_id: 779,str: "compress neutral",num: 34141,date: new Date("2018-09-06T15:25:07.822Z"),array: [new Date("2018-09-06T16:13:43.825Z"),52952,[],"eyeballs turquoise",64881,[[],{_id: 780,str: "Manat Computers",date: new Date("2018-09-06T03:50:39.734Z"),obj: {_id: 781,str: "Skyway",num: 75981,date: new Date("2018-09-05T21:41:00.465Z"),obj: {}}}]]},77175,"Port primary"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 782,str: "Tools multi-tasking haptic",num: 29669,date: new Date("2018-09-06T01:16:31.357Z"),array: ["Configuration",new Date("2018-09-06T12:27:14.836Z"),39385,17964,{_id: 783,num: 42595,date: new Date("2018-09-06T09:18:48.231Z"),array: [],obj: {}},78681,{_id: 784,str: "HTTP Massachusetts",num: 30510,date: new Date("2018-09-06T00:33:21.101Z"),array: [5226,new Date("2018-09-06T05:28:16.684Z"),"Glens"],obj: {_id: 785,str: "quantifying",num: 5919,obj: {}}},["next-generation Cambridgeshire",[]],new Date("2018-09-06T12:32:48.166Z"),new Date("2018-09-06T06:47:04.612Z"),{_id: 786,str: "Small Granite Car",num: 94547,date: new Date("2018-09-06T12:36:35.614Z"),array: []},"Tasty Wooden"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 787,str: "Group",num: 87480,date: new Date("2018-09-06T11:58:52.947Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 788,str: "Avon maroon Buckinghamshire",num: 6769,date: new Date("2018-09-06T06:55:07.234Z"),array: ["primary Wooden Engineer",{_id: 789,date: new Date("2018-09-05T20:36:52.658Z"),array: [],obj: {}},{_id: 790,str: "niches",num: 96176,date: new Date("2018-09-05T20:59:45.178Z"),array: [],obj: {}},40666,57967,"Palestinian Territory",new Date("2018-09-06T18:21:47.916Z"),"compress Handcrafted",17472,new Date("2018-09-06T15:08:41.584Z"),"Money Market Account Chief"],obj: {_id: 791,str: "Baby communities Pizza",num: 93170}});
    },

    function(coll) {
        return coll.insert({_id: 792,str: "Wooden Response Mall",num: 55106,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 793,str: "reboot Auto Loan Account Tactics",num: 74698,date: new Date("2018-09-06T11:49:06.642Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 794,str: "Groves matrices",num: 38368,date: new Date("2018-09-06T12:09:12.773Z"),array: [],obj: {_id: 795,str: "Burundi Franc Borders Programmable",num: 89831,date: new Date("2018-09-06T14:52:29.063Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 796,str: "generate clicks-and-mortar",num: 2771,date: new Date("2018-09-06T09:18:32.547Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 797,str: "transmitting Tasty Soft Shoes",num: 48021,date: new Date("2018-09-06T16:19:12.660Z"),array: [new Date("2018-09-05T22:09:19.622Z"),48805,97956,43374,new Date("2018-09-06T04:11:53.230Z"),"Strategist","Plains",[],"Oval",{_id: 798,num: 84936,date: new Date("2018-09-06T00:35:13.173Z"),array: [new Date("2018-09-06T01:20:16.245Z"),"navigating Moldovan Leu"],obj: {_id: 799,num: 66767,date: new Date("2018-09-06T03:23:24.630Z"),array: [new Date("2018-09-06T00:04:48.757Z"),{_id: 800,str: "Investment Account Fresh",date: new Date("2018-09-06T13:19:44.415Z"),obj: {}},[],"deposit revolutionize Health"],obj: {_id: 801,num: 25516}}},81607],obj: {_id: 802,str: "Handcrafted Fresh Computer Belgium utilize",num: 42378,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 803,str: "Investment Account Connecticut Money Market Account",num: 72705,date: new Date("2018-09-06T18:11:16.793Z"),obj: {_id: 804,num: 45763,date: new Date("2018-09-06T17:22:24.157Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 805,date: new Date("2018-09-06T16:22:38.947Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 806,str: "Maine",num: 42997,date: new Date("2018-09-06T05:07:17.541Z"),array: [{_id: 807,str: "front-end",num: 3241,date: new Date("2018-09-06T02:07:16.180Z"),array: ["multi-byte",57256],obj: {}},new Date("2018-09-05T22:53:23.521Z"),74162,"input generating",new Date("2018-09-06T08:52:08.962Z"),35909,"Investor",[],15475,{_id: 808,str: "Platinum virtual Auto Loan Account",num: 45456,date: new Date("2018-09-06T07:40:21.832Z"),array: [],obj: {_id: 809,num: 51319,array: [[],"card auxiliary"],obj: {}}},new Date("2018-09-06T17:11:39.628Z"),{_id: 810,str: "Profit-focused",date: new Date("2018-09-06T10:16:16.360Z"),array: [],obj: {}},new Date("2018-09-05T22:49:39.320Z"),{_id: 811,num: 91575,date: new Date("2018-09-06T04:36:48.680Z"),array: [],obj: { _id: 812 }}]});
    },

    function(coll) {
        return coll.insert({_id: 813,str: "Estates",num: 92153,date: new Date("2018-09-05T22:49:35.365Z"),array: ["Human",new Date("2018-09-06T06:44:47.408Z"),{_id: 814,str: "black East Caribbean Dollar",num: 32193,date: new Date("2018-09-06T12:40:34.965Z"),array: [],obj: {_id: 815,str: "ivory Cotton Tasty",num: 19451,date: new Date("2018-09-06T13:03:01.805Z"),array: [{_id: 816,num: 94264,date: new Date("2018-09-06T14:13:10.997Z"),array: [],obj: {_id: 817,str: "Investor",obj: {}}},new Date("2018-09-06T09:42:49.906Z"),"streamline synergize"],obj: {}}},28078,new Date("2018-09-06T11:29:13.172Z"),new Date("2018-09-05T23:46:27.571Z"),88441,[],"invoice",new Date("2018-09-06T19:31:50.633Z"),71510,99676,"THX monitoring transparent"]});
    },

    function(coll) {
        return coll.insert({_id: 818,str: "niches Garden Georgia",num: 99842,date: new Date("2018-09-06T19:20:53.554Z"),array: [],obj: {_id: 819,str: "Massachusetts strategic",num: 48002,array: ["calculate Chief",68259,"El Salvador",[new Date("2018-09-05T23:28:51.477Z"),892,"Product",26536],new Date("2018-09-06T15:21:24.040Z"),new Date("2018-09-06T02:56:14.160Z"),new Date("2018-09-06T04:35:43.199Z"),"Architect transmitting client-driven",{_id: 820,str: "Shoal Investment Account",num: 81414,date: new Date("2018-09-06T16:07:41.852Z"),obj: {}},[],22585],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 821,str: "matrix Practical",date: new Date("2018-09-05T23:24:06.823Z"),array: [new Date("2018-09-06T18:50:24.004Z"),{_id: 822,str: "SSL Bedfordshire Avon",num: 98337,date: new Date("2018-09-06T19:09:27.092Z"),array: [],obj: {}},93550,new Date("2018-09-06T00:33:16.918Z"),"West Virginia cutting-edge","multi-byte"],obj: {_id: 823,str: "Connecticut magenta Savings Account",num: 68575,date: new Date("2018-09-05T22:05:28.300Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 824,str: "Savings Account",date: new Date("2018-09-06T07:06:01.847Z"),array: ["Fantastic Frozen Gloves Table","metrics",13278,23704,new Date("2018-09-05T23:34:39.626Z"),new Date("2018-09-06T13:54:04.578Z"),96599,{_id: 825,str: "Rustic Hollow quantify",num: 95123,date: new Date("2018-09-05T20:23:07.656Z"),array: [],obj: {_id: 826,num: 96069,date: new Date("2018-09-06T18:12:11.930Z"),array: ["firewall generate","European Unit of Account 9(E.U.A.-9) solid state New York",new Date("2018-09-06T13:56:58.242Z"),new Date("2018-09-06T04:22:56.313Z"),[],[]],obj: {_id: 827,str: "calculate Functionality",num: 89921,array: [],obj: {_id: 828,str: "Trail mobile invoice",num: 72595,date: new Date("2018-09-06T08:15:02.917Z"),obj: {_id: 829,date: new Date("2018-09-06T12:15:33.458Z"),array: [{_id: 830,str: "convergence",num: 65754}]}}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 831,str: "Key Clothing",num: 70771,date: new Date("2018-09-06T08:12:20.986Z"),array: [],obj: {_id: 832,str: "Incredible payment",num: 78652,date: new Date("2018-09-06T01:46:44.266Z"),array: [24300,new Date("2018-09-06T11:09:38.781Z"),52132,"Human",[],new Date("2018-09-06T07:39:51.576Z"),38663,"encompassing",{_id: 833,str: "Dale",num: 49056,array: [],obj: {_id: 834,str: "redundant neural Sausages",date: new Date("2018-09-06T19:37:16.744Z"),obj: {_id: 835,str: "Texas Berkshire array",num: 47166,date: new Date("2018-09-06T04:05:28.827Z"),array: [],obj: {}}}},60662,{ _id: 836 },"Hat Personal Loan Account budgetary management"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 837,str: "SSL",num: 16319,date: new Date("2018-09-06T16:10:20.941Z"),array: [],obj: {_id: 838,str: "ADP",num: 53962,date: new Date("2018-09-05T22:15:31.318Z"),array: ["schemas","Stream pixel",new Date("2018-09-06T03:38:07.942Z"),new Date("2018-09-06T08:51:11.420Z"),["Web orchid",43865,"Bacon",81508],[new Date("2018-09-06T05:34:44.087Z")],"dynamic",[],{_id: 839,str: "withdrawal",date: new Date("2018-09-06T13:13:09.458Z"),array: [],obj: {_id: 840,str: "SAS Money Market Account",num: 76397,array: [27744,new Date("2018-09-06T15:50:59.684Z"),42324],obj: {}}},51894,{_id: 841,date: new Date("2018-09-06T05:00:37.036Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 842,str: "Senior",num: 81015,date: new Date("2018-09-06T03:23:12.857Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 843,str: "invoice",num: 84419,date: new Date("2018-09-06T15:12:49.106Z"),array: ["Checking Account","IB","US Dollar",[],new Date("2018-09-06T11:16:21.775Z"),55422,19580,new Date("2018-09-06T18:22:37.683Z"),new Date("2018-09-06T05:49:15.221Z"),"needs-based systematic Mayotte",{_id: 844,str: "Fantastic Steel Bike Accounts Fresh",date: new Date("2018-09-06T11:42:33.537Z"),array: [{_id: 845,str: "Ergonomic Granite Bacon matrix",num: 92268,obj: {_id: 846,str: "Director withdrawal Puerto Rico",num: 4047,date: new Date("2018-09-06T04:14:33.639Z"),array: [],obj: {}}}],obj: {}},"Practical Cotton Pizza backing up Concrete"]});
    },

    function(coll) {
        return coll.insert({_id: 847,str: "Principal Towels partnerships",date: new Date("2018-09-06T09:53:00.995Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 848,num: 79411,date: new Date("2018-09-06T06:31:47.287Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 849,str: "transmitting",num: 75056,date: new Date("2018-09-06T04:29:58.761Z"),array: [{_id: 850,str: "Myanmar back-end Cambridgeshire",num: 65151,date: new Date("2018-09-06T03:58:05.954Z"),array: [],obj: {_id: 851,str: "Jamaican Dollar cross-platform navigating",num: 84332,array: [],obj: {}}},new Date("2018-09-06T01:01:52.889Z"),"synthesize Orchestrator Handmade","Cambridgeshire Director",89697,[new Date("2018-09-06T18:00:51.202Z"),"Intuitive monetize"],18157,84484,[],new Date("2018-09-06T10:04:13.226Z"),"Dynamic"],obj: {_id: 852,str: "Practical Cotton Pants",num: 4714,date: new Date("2018-09-05T23:21:02.489Z"),array: [{_id: 853,str: "content Bouvet Island (Bouvetoya)",num: 67313,array: [new Date("2018-09-06T18:53:28.787Z"),"Bahamian Dollar optimize",99148],obj: {}},new Date("2018-09-06T05:47:07.259Z"),{_id: 854,date: new Date("2018-09-06T05:43:45.173Z"),obj: {_id: 855,date: new Date("2018-09-06T10:20:55.194Z")}},[]]}});
    },

    function(coll) {
        return coll.insert({_id: 856,str: "Gabon",date: new Date("2018-09-06T10:40:45.250Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 857,str: "intranet",num: 16381,date: new Date("2018-09-06T04:50:27.353Z"),array: [80915,84497,"Heard Island and McDonald Islands",{_id: 858,str: "navigating",num: 73073,date: new Date("2018-09-06T06:17:55.191Z"),array: [],obj: {}},"client-server",new Date("2018-09-06T15:21:19.655Z"),49161,"program Branding",[new Date("2018-09-06T00:43:36.918Z"),{_id: 859,str: "red navigating",num: 73058,date: new Date("2018-09-06T06:04:42.247Z"),array: [],obj: {_id: 860,str: "artificial intelligence 1080p functionalities",date: new Date("2018-09-06T17:00:09.467Z"),obj: {_id: 861,array: [new Date("2018-09-06T00:17:41.477Z"),"leading edge"],obj: {}}}},55469],new Date("2018-09-06T05:13:21.978Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 862,num: 50535,date: new Date("2018-09-06T10:25:39.258Z"),array: ["withdrawal",35226,"end-to-end",40747,new Date("2018-09-06T18:17:35.484Z"),69280,"input seize",new Date("2018-09-06T06:39:59.654Z"),{_id: 863,str: "lime",num: 24220,date: new Date("2018-09-05T20:08:38.299Z"),array: [{_id: 864,str: "Reduced Assurance",array: [],obj: {}},"Future",new Date("2018-09-06T05:40:28.672Z"),[]],obj: {_id: 865,str: "demand-driven composite interface",num: 51858,obj: {_id: 866,str: "User-friendly recontextualize",num: 65634,date: new Date("2018-09-06T10:06:27.798Z")}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 867,str: "Programmable",num: 88264,date: new Date("2018-09-06T09:30:51.811Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 868,str: "web-readiness AGP Grocery",array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 869,str: "Virginia RAM",date: new Date("2018-09-06T08:14:35.144Z"),array: [],obj: {_id: 870,str: "JBOD Tennessee SMTP",num: 42971,date: new Date("2018-09-06T04:31:36.778Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 871,str: "Borders Principal neural",num: 98207,date: new Date("2018-09-06T09:21:12.690Z"),array: ["Interactions Manager Parkways",3910,"Investor GB Arkansas",new Date("2018-09-06T05:12:24.264Z"),2709,{_id: 872,num: 95857,array: [65935,"mint green Auto Loan Account Principal"],obj: {_id: 873,num: 49590,date: new Date("2018-09-05T21:26:37.098Z"),obj: {_id: 874,str: "array",date: new Date("2018-09-06T07:08:25.054Z"),obj: {}}}},"Bolivar Fuerte","SMTP Customer channels",{_id: 875,str: "value-added",num: 63413,array: []},{_id: 876,str: "Coordinator",num: 94398,date: new Date("2018-09-06T07:55:43.711Z"),array: [],obj: {_id: 877,str: "Car Cloned",num: 82317,date: new Date("2018-09-06T06:49:44.196Z"),array: []}},57363],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 878,str: "fuchsia solution",num: 66077,date: new Date("2018-09-06T03:39:38.311Z"),array: [new Date("2018-09-05T20:56:05.983Z"),"Lakes didactic 24/7",15719,"Incredible",new Date("2018-09-06T13:10:56.103Z"),[new Date("2018-09-05T20:23:36.551Z"),37581,new Date("2018-09-06T08:31:26.605Z"),"architect Cambridgeshire"],83466,"paradigms",43260],obj: {_id: 879,str: "haptic",date: new Date("2018-09-05T20:04:48.303Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 880,str: "invoice Auto Loan Account",num: 77066,date: new Date("2018-09-06T02:15:10.576Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 881,str: "Gorgeous Rubber Table Central",num: 83961,date: new Date("2018-09-06T01:17:39.947Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 882,str: "Computers Washington Auto Loan Account",num: 49815,date: new Date("2018-09-06T05:44:08.270Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 883,date: new Date("2018-09-06T16:54:21.062Z"),array: [72586,new Date("2018-09-06T17:09:37.965Z"),new Date("2018-09-06T19:16:20.931Z"),{_id: 884,str: "open-source Technician payment",num: 57772,date: new Date("2018-09-06T01:14:36.979Z"),array: [],obj: {_id: 885,str: "program back up Kids",num: 28387,obj: {}}},"Namibia",{_id: 886,str: "contextually-based violet reboot",num: 44392,date: new Date("2018-09-06T10:34:12.376Z"),array: []},["quantifying",50482],21987,new Date("2018-09-06T06:33:40.416Z"),new Date("2018-09-06T18:26:25.061Z"),"Barbados Dollar SQL",66936],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 887,str: "invoice Plastic bus",num: 69133,date: new Date("2018-09-06T10:00:36.833Z"),array: [64209,new Date("2018-09-06T10:17:21.843Z"),"generating",19443,[],"deliverables pink",74582,new Date("2018-09-06T16:32:00.405Z"),"Somoni Corporate",32414,{_id: 888,str: "applications",num: 45314,array: [],obj: {}},"Rustic Frozen Soap"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 889,str: "Borders mobile",num: 18172,date: new Date("2018-09-06T09:48:13.604Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 890,str: "tan overriding",num: 37112,date: new Date("2018-09-06T13:40:09.875Z"),array: ["Georgia","Savings Account Personal Loan Account",77264,44643,"hack Rhode Island",new Date("2018-09-06T11:14:45.764Z"),"quantifying killer",{_id: 891,str: "Home Loan Account",num: 30620,date: new Date("2018-09-06T15:55:10.266Z"),array: [],obj: {_id: 892,str: "Officer system backing up",num: 14414,date: new Date("2018-09-05T21:41:33.873Z"),array: [],obj: { _id: 893 }}},new Date("2018-09-06T03:00:20.096Z")]});
    },

    function(coll) {
        return coll.insert({_id: 894,str: "vertical didactic Brand",num: 80555,date: new Date("2018-09-06T05:45:49.649Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 895,str: "hard drive Incredible Mongolia",num: 24914,date: new Date("2018-09-05T22:35:34.076Z"),array: [new Date("2018-09-06T16:00:45.026Z"),93591,{_id: 896,str: "Outdoors",array: [],obj: {}},85601,"GB HDD",["Industrial",new Date("2018-09-06T07:15:32.332Z"),new Date("2018-09-06T17:05:40.842Z"),"Open-architected deposit Minnesota"],new Date("2018-09-06T19:42:39.883Z"),"Architect Program deposit","Way Montana",58557,96957,new Date("2018-09-06T17:22:46.606Z")],obj: {_id: 897,num: 28985,date: new Date("2018-09-06T08:35:21.023Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 898,str: "Associate",num: 14043,date: new Date("2018-09-06T19:47:20.071Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 899,str: "monitor transmit",num: 26671,date: new Date("2018-09-06T03:42:06.184Z"),array: [[],66781,new Date("2018-09-06T00:53:37.332Z"),new Date("2018-09-06T12:14:27.522Z"),55020,"Tanzania",new Date("2018-09-06T07:19:55.488Z"),"discrete Iowa Unbranded Wooden Computer",50538,{_id: 900,num: 5956,date: new Date("2018-09-06T17:47:14.806Z"),array: ["Applications Switchable",{_id: 901,str: "groupware Borders XSS",num: 90112,array: [[new Date("2018-09-06T10:43:48.496Z"),"neural wireless"],"composite",17284,[]],obj: {_id: 902,str: "withdrawal Salad deploy",date: new Date("2018-09-06T08:20:07.625Z"),array: [],obj: {_id: 903,str: "Generic Concrete Computer CSS withdrawal",num: 9795,date: new Date("2018-09-06T01:06:59.105Z"),array: []}}}],obj: {}},{_id: 904,str: "Sleek",num: 19686,obj: {_id: 905,obj: {_id: 906,str: "Court",date: new Date("2018-09-06T11:32:46.976Z"),array: []}}}]});
    },

    function(coll) {
        return coll.insert({_id: 907,str: "Extensions",num: 45378,date: new Date("2018-09-06T08:51:11.980Z"),array: [],obj: {_id: 908,str: "initiatives Colorado indexing",num: 67831,array: [],obj: {_id: 909,str: "Philippine Peso North Dakota",num: 60932,date: new Date("2018-09-06T18:57:03.916Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 910,str: "Administrator Colombia Sao Tome and Principe",num: 34564,date: new Date("2018-09-05T20:06:58.095Z"),array: [new Date("2018-09-06T19:00:36.796Z"),"index primary International",new Date("2018-09-05T20:51:45.002Z"),73860,"Unbranded Wooden Shoes plum Personal Loan Account",{_id: 911,str: "interface",num: 30576,date: new Date("2018-09-05T22:38:46.697Z"),obj: {_id: 912,str: "Generic Cotton Car",array: [],obj: {}}},"open-source",[],33541,35438,51359],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 913,str: "Virtual",num: 92601,date: new Date("2018-09-06T14:00:43.316Z"),array: [21296,new Date("2018-09-06T00:25:40.579Z"),new Date("2018-09-06T05:19:26.547Z"),86676,"Money Market Account Quality","generating Tasty niches","Chilean Peso Unidades de fomento",[],71315,[87587,"iterate copying Oregon",{_id: 914,str: "Western Sahara Mississippi RSS",num: 37006,array: [],obj: {_id: 915,str: "connecting e-markets",num: 42394,date: new Date("2018-09-05T20:10:36.121Z"),array: []}}],[{_id: 916,date: new Date("2018-09-06T11:50:53.256Z"),array: [new Date("2018-09-05T20:27:42.959Z"),new Date("2018-09-06T05:32:15.682Z"),"Regional Sierra Leone Sao Tome and Principe"],obj: {}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 917,str: "Ridges approach Direct",num: 22326,date: new Date("2018-09-06T13:46:14.102Z"),array: [67793,new Date("2018-09-05T20:01:59.788Z"),new Date("2018-09-06T13:52:10.154Z"),"monetize Quality Kids","Unbranded Cotton Ball Florida",90718,{_id: 918,num: 65294,date: new Date("2018-09-06T00:42:34.779Z"),array: [],obj: {_id: 919,str: "24/365",num: 95918,date: new Date("2018-09-06T14:25:39.707Z"),array: [new Date("2018-09-05T20:54:12.724Z"),"violet Slovakia (Slovak Republic) Computers"],obj: {}}},"Devolved Diverse",[],new Date("2018-09-05T21:07:59.459Z")],obj: {_id: 920,str: "Developer",num: 2286,date: new Date("2018-09-05T22:39:38.217Z")}});
    },

    function(coll) {
        return coll.insert({_id: 921,num: 40931,date: new Date("2018-09-05T21:44:18.180Z"),array: [new Date("2018-09-05T22:16:08.645Z"),22384,65081,"well-modulated compressing","logistical engineer","solution-oriented Rustic",{_id: 922,str: "non-volatile",date: new Date("2018-09-06T00:53:38.507Z"),array: [],obj: {_id: 923,str: "Intelligent Health",date: new Date("2018-09-06T02:59:17.023Z"),array: [new Date("2018-09-05T23:53:50.223Z")],obj: {}}},74553,new Date("2018-09-06T15:54:46.969Z"),["green disintermediate pixel",24402],new Date("2018-09-05T20:54:24.958Z"),37067],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 924,str: "Nicaragua input virtual",num: 29659,date: new Date("2018-09-06T17:48:48.102Z"),array: [568,57293,new Date("2018-09-05T23:36:10.230Z"),86500,new Date("2018-09-06T02:10:11.319Z"),"circuit circuit","hard drive Borders Orchestrator",{_id: 925,str: "methodical",date: new Date("2018-09-06T04:47:52.991Z"),obj: {}},[],{_id: 926,date: new Date("2018-09-05T23:37:03.493Z"),array: [{_id: 927,str: "UAE Dirham",date: new Date("2018-09-06T05:23:38.637Z"),obj: {}},new Date("2018-09-06T15:29:32.897Z"),new Date("2018-09-06T14:44:14.301Z")],obj: {_id: 928,str: "Outdoors",num: 62860,array: [],obj: {_id: 929,num: 16281,array: []}}},[58081,[],"Outdoors"],81361],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 930,str: "Synergized Tuna",num: 1897,date: new Date("2018-09-06T05:04:31.685Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 931,str: "paradigm redundant synthesizing",num: 62053,array: [],obj: {_id: 932,str: "Internal multi-byte South Georgia and the South Sandwich Islands",date: new Date("2018-09-06T10:19:03.010Z"),array: [new Date("2018-09-06T10:04:51.658Z"),"Avon flexibility",new Date("2018-09-06T08:29:31.902Z"),18281,["benchmark dynamic users",33923],new Date("2018-09-06T19:00:29.572Z"),99073,{_id: 933,str: "Buckinghamshire",num: 70819,date: new Date("2018-09-06T00:38:27.666Z"),obj: {}},{_id: 934,num: 94898,date: new Date("2018-09-06T03:21:57.892Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 935,str: "AI Metrics",num: 59846,date: new Date("2018-09-06T04:52:23.152Z"),array: ["synthesize","West Virginia",new Date("2018-09-06T03:36:07.428Z"),55621,76295,new Date("2018-09-06T14:23:02.295Z"),[],{_id: 936,str: "payment Generic Granite Gloves transmitting",num: 77065,array: [{_id: 937,num: 50867,date: new Date("2018-09-06T02:19:11.296Z"),array: []},["Lithuania Orchestrator"],85642,"mindshare New Israeli Sheqel"],obj: {}},new Date("2018-09-06T03:46:38.110Z"),25307,72185]});
    },

    function(coll) {
        return coll.insert({_id: 938,str: "Response",num: 36902,date: new Date("2018-09-05T20:06:24.382Z"),array: [],obj: {_id: 939,str: "Wyoming disintermediate wireless",num: 86107,date: new Date("2018-09-06T05:21:00.388Z"),array: ["generate","copying RAM",[],new Date("2018-09-06T12:07:13.060Z"),7195,61277,"Small Wooden Soap Sri Lanka Rupee strategic",{_id: 940,num: 55112,array: [83567,90927]},[],new Date("2018-09-06T05:13:43.543Z"),"Colombia channels",[51847]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 941,str: "magenta",num: 85920,array: [{_id: 942,str: "Sausages engage Buckinghamshire",num: 97296,date: new Date("2018-09-06T16:50:10.900Z"),obj: {_id: 943,str: "heuristic",num: 8300,date: new Date("2018-09-06T19:00:14.878Z"),array: [],obj: {}}},new Date("2018-09-05T20:30:45.970Z"),"mobile","Developer",62824,new Date("2018-09-06T00:11:44.759Z"),[],[],new Date("2018-09-06T03:46:34.251Z"),14333,new Date("2018-09-06T13:09:34.726Z"),47531],obj: {_id: 944,str: "Investment Account",num: 93651,date: new Date("2018-09-06T00:12:58.107Z"),array: [new Date("2018-09-06T01:03:54.152Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 945,str: "Customer Human Intelligent",num: 22230,date: new Date("2018-09-06T08:58:05.952Z"),array: [10945,76561,26646,"Rubber",21835,"Plastic","methodology users JBOD",[],new Date("2018-09-06T15:27:11.784Z"),new Date("2018-09-06T13:00:08.277Z"),6674,new Date("2018-09-06T10:51:05.416Z"),[{_id: 946,str: "Towels backing up",num: 3823,date: new Date("2018-09-06T04:49:10.816Z"),array: ["transmitting connecting"],obj: {}},{_id: 947,str: "Money Market Account distributed sensor",num: 98543,obj: {_id: 948,date: new Date("2018-09-05T21:28:20.885Z"),array: [new Date("2018-09-06T00:36:42.712Z")],obj: {}}}],"Security violet infrastructure","Investment Account productivity Chicken"]});
    },

    function(coll) {
        return coll.insert({_id: 949,str: "payment utilize SSL",num: 2784,date: new Date("2018-09-05T20:39:29.741Z"),array: [],obj: {_id: 950,str: "Liaison",num: 85076,date: new Date("2018-09-06T04:03:14.566Z"),array: [],obj: {_id: 951,str: "deposit",date: new Date("2018-09-05T20:59:21.155Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 952,str: "payment",num: 60537,date: new Date("2018-09-06T15:28:59.155Z"),array: [],obj: {_id: 953,str: "Inlet Enhanced",num: 6112,date: new Date("2018-09-06T09:11:27.178Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 954,str: "deliver",num: 55783,date: new Date("2018-09-06T12:06:44.981Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 955,str: "Interactions Berkshire",num: 36515,date: new Date("2018-09-06T14:21:19.451Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 956,str: "payment Frozen",num: 72076,date: new Date("2018-09-05T19:58:10.613Z"),array: [],obj: {_id: 957,str: "Public-key",num: 26601,date: new Date("2018-09-06T16:36:09.374Z"),array: ["mission-critical synergistic",new Date("2018-09-06T06:34:19.494Z"),new Date("2018-09-06T09:56:48.512Z"),99807,"payment","parsing strategic platforms",39189,[],new Date("2018-09-06T18:54:28.683Z"),10382],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 958,str: "payment Maine Forge",num: 74592,date: new Date("2018-09-05T22:43:17.187Z"),array: [],obj: {_id: 959,num: 47251,array: ["experiences","Rwanda Franc Producer calculate",new Date("2018-09-06T03:31:28.973Z"),99525,[],"Fresh portals",new Date("2018-09-06T02:35:22.245Z"),5657,[],new Date("2018-09-06T11:52:33.474Z"),"Global"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 960,str: "Tactics Kids",date: new Date("2018-09-06T18:47:50.002Z"),array: [81081,new Date("2018-09-06T05:27:02.356Z"),"Tasty Soft Fish Checking Account Seamless",["Philippine Peso","Berkshire",new Date("2018-09-05T21:11:59.838Z"),18911,[new Date("2018-09-06T04:23:05.515Z")]],"target grey capacitor",37273,63311,{_id: 961,str: "Persistent District virtual",num: 69291,date: new Date("2018-09-06T08:23:54.429Z"),array: [new Date("2018-09-06T05:46:41.200Z")],obj: {_id: 962,num: 53671,date: new Date("2018-09-06T08:37:47.456Z"),array: [],obj: {_id: 963,str: "Divide plum Personal Loan Account",obj: {}}}},{_id: 964,str: "Movies",num: 70194,obj: {}},"compressing empowering relationships"]});
    },

    function(coll) {
        return coll.insert({_id: 965,num: 64265,date: new Date("2018-09-06T17:00:06.278Z"),array: [],obj: {_id: 966,str: "XML GB",num: 53547,date: new Date("2018-09-06T19:01:46.819Z"),array: [{_id: 967,str: "Handmade Frozen Shoes target",num: 47648,date: new Date("2018-09-06T07:30:27.153Z"),array: [],obj: {_id: 968,str: "Refined Rubber Tuna",date: new Date("2018-09-06T15:29:13.284Z"),array: ["Principal Managed",{_id: 969,str: "Solutions",num: 15942,obj: {}}]}},new Date("2018-09-06T17:56:03.680Z"),72214,"Associate Configurable","Practical high-level back up",76173,new Date("2018-09-05T23:39:09.015Z"),[new Date("2018-09-06T02:49:43.895Z"),"parse Intelligent neutral"],1697,[74483],"cross-platform Car",new Date("2018-09-06T15:36:08.641Z"),44786]}});
    },

    function(coll) {
        return coll.insert({_id: 970,str: "facilitate Music Costa Rica",array: [83081,"Martinique","auxiliary Toys",7118,{_id: 971,str: "Botswana Cambridgeshire",num: 23782,date: new Date("2018-09-06T04:17:33.850Z"),array: [new Date("2018-09-05T20:49:02.654Z"),new Date("2018-09-06T15:17:14.653Z")],obj: {}},42985,[],16469,["logistical Saint Kitts and Nevis"],69326,{_id: 972,str: "mobile",num: 5366,date: new Date("2018-09-06T16:45:28.489Z"),array: [],obj: {_id: 973,num: 97595,date: new Date("2018-09-05T22:39:08.700Z"),obj: {}}},"Avon",new Date("2018-09-06T05:38:07.414Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 974,num: 28234,date: new Date("2018-09-06T12:10:51.567Z")});
    },

    function(coll) {
        return coll.insert({_id: 975,str: "sensor Steel",num: 90060,date: new Date("2018-09-06T18:21:48.968Z"),array: ["Outdoors",28525,new Date("2018-09-05T20:23:45.515Z"),"sky blue Tactics",{_id: 976,str: "Pennsylvania",num: 66140,array: [34616,new Date("2018-09-05T23:48:22.264Z"),[],new Date("2018-09-06T18:51:04.311Z")]},"Bedfordshire",{_id: 977,str: "visualize Personal Loan Account",num: 40756,date: new Date("2018-09-06T08:08:17.510Z"),array: [],obj: {_id: 978,date: new Date("2018-09-06T04:50:44.306Z")}},[],39606,new Date("2018-09-06T02:01:56.511Z"),4881,["sexy Egyptian Pound Ethiopian Birr"],{_id: 979,str: "Serbian Dinar",num: 26272,date: new Date("2018-09-06T08:42:43.425Z"),obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 980,str: "Legacy",num: 73532,array: [new Date("2018-09-06T07:47:26.069Z"),"Toys hard drive Credit Card Account",68030,"hybrid Accounts Kiribati","Unbranded",9410,new Date("2018-09-06T15:19:38.196Z"),[],{_id: 981,str: "mobile Fantastic Granite",date: new Date("2018-09-05T20:27:14.636Z"),array: ["Senior"],obj: {}},79430,new Date("2018-09-05T20:37:23.208Z"),{_id: 982,num: 68764,date: new Date("2018-09-05T20:46:51.331Z"),obj: {}}],obj: {_id: 983,str: "Steel capacitor coherent",num: 41170,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 984,str: "COM harness generating",num: 8748,date: new Date("2018-09-05T21:17:01.750Z"),array: [],obj: {_id: 985,str: "Isle Platinum",num: 73524,date: new Date("2018-09-06T07:25:58.689Z"),array: [20463,new Date("2018-09-06T05:37:48.169Z"),new Date("2018-09-06T11:01:20.043Z"),"Decentralized",{_id: 986,date: new Date("2018-09-06T12:07:14.381Z"),array: [],obj: {_id: 987,str: "multi-byte generating",num: 93801,date: new Date("2018-09-05T22:39:34.031Z"),array: [[new Date("2018-09-06T17:05:20.459Z")]]}},new Date("2018-09-06T07:06:48.013Z"),"Iceland Krona Producer",89999,36857,27925,48067,"Saint Martin Knolls"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 988,str: "Investment Account invoice withdrawal",num: 1727,date: new Date("2018-09-06T18:19:25.183Z"),array: ["compressing Concrete","Infrastructure structure",new Date("2018-09-06T10:40:46.584Z"),[],70090,new Date("2018-09-06T09:57:01.059Z"),"Virtual",new Date("2018-09-06T06:03:12.202Z"),{_id: 989,str: "Circles Designer Gloves",num: 48791,date: new Date("2018-09-06T15:57:57.205Z"),array: [],obj: {_id: 990,num: 69414,date: new Date("2018-09-06T18:08:23.993Z"),array: [],obj: {}}},["content withdrawal",new Date("2018-09-06T04:33:18.721Z"),{_id: 991,str: "Senegal",num: 16662,date: new Date("2018-09-06T11:15:42.426Z"),array: [53340,new Date("2018-09-06T03:33:00.764Z")]},70521],new Date("2018-09-06T12:36:55.076Z"),26616],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 992,num: 11005,date: new Date("2018-09-06T02:36:49.049Z"),array: [],obj: {_id: 993,str: "orchestrate",date: new Date("2018-09-05T21:19:09.237Z"),array: ["Universal calculate auxiliary",59880,64927,new Date("2018-09-05T20:00:28.924Z"),new Date("2018-09-06T15:40:40.783Z"),84964,"payment Garden Streamlined",new Date("2018-09-06T19:07:22.700Z"),[],{_id: 994,str: "channels Avon",num: 57490,array: [],obj: {}},new Date("2018-09-06T01:29:52.013Z"),"Principal function"]}});
    },

    function(coll) {
        return coll.insert({_id: 995,str: "wireless RAM",num: 89827,date: new Date("2018-09-06T05:26:34.136Z"),array: [],obj: {_id: 996,num: 29488,array: [[],new Date("2018-09-06T10:28:31.516Z"),{_id: 997,str: "Frozen Synergized",num: 9147,date: new Date("2018-09-06T12:36:14.186Z"),array: [],obj: {}},"matrix Bedfordshire Organized",["protocol","policy","Soap Saint Vincent and the Grenadines THX",5086],{_id: 998,str: "quantifying Mission empowering",date: new Date("2018-09-06T14:43:07.485Z")},new Date("2018-09-06T07:59:00.268Z"),75643,66408,{_id: 999,str: "enterprise",obj: {_id: 1000,str: "Gorgeous",date: new Date("2018-09-06T09:32:24.702Z"),array: [],obj: {_id: 1001,str: "initiative",num: 45852,date: new Date("2018-09-05T23:29:49.641Z"),array: [new Date("2018-09-06T12:12:09.288Z"),40163],obj: {}}}}],obj: {_id: 1002,date: new Date("2018-09-05T20:10:01.649Z"),array: [new Date("2018-09-06T19:02:33.187Z"),64285,[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 1003,str: "Auto Loan Account",num: 32493,date: new Date("2018-09-06T02:22:41.440Z"),array: [],obj: {_id: 1004,str: "parse Metal",num: 18770,date: new Date("2018-09-06T17:43:07.883Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1005,str: "distributed mesh zero defect",num: 20242,date: new Date("2018-09-05T22:47:07.463Z"),array: ["Cross-group implementation Keyboard",new Date("2018-09-06T13:13:29.759Z"),new Date("2018-09-06T06:40:49.946Z"),10901,37745,[],{_id: 1006,str: "Assistant orchestrate portals",num: 13985,array: [85404,{_id: 1007,str: "copy Square Rustic",num: 12961,obj: {_id: 1008,str: "Awesome Steel Sausages",num: 58977,date: new Date("2018-09-06T09:11:44.220Z"),array: [],obj: {}}}]},{_id: 1009,str: "solutions silver",date: new Date("2018-09-05T23:32:12.282Z"),array: [],obj: {_id: 1010,str: "Money Market Account Argentine Peso",num: 42909,date: new Date("2018-09-06T11:57:25.261Z"),obj: {}}},new Date("2018-09-05T21:37:09.043Z"),"Quality-focused Tanzanian Shilling Profound","Solutions",new Date("2018-09-06T16:18:23.203Z"),"Sausages Integration paradigm"],obj: {_id: 1011,num: 35787,date: new Date("2018-09-05T21:06:50.818Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1012,str: "Tools New York Auto Loan Account",num: 42926,date: new Date("2018-09-06T06:31:25.419Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1013,str: "Netherlands Antillian Guilder modular",num: 15757,date: new Date("2018-09-06T02:59:00.809Z"),array: [],obj: {_id: 1014,str: "Bedfordshire neural",num: 78168,date: new Date("2018-09-06T10:56:26.446Z"),array: [8838,"Solutions SSL quantify",new Date("2018-09-05T23:51:40.691Z"),new Date("2018-09-06T02:06:29.794Z"),new Date("2018-09-06T12:44:42.782Z"),[],{_id: 1015,num: 78404,array: [],obj: {}},"Terrace Track Forges",24408,{_id: 1016,str: "superstructure Soft",num: 19594,date: new Date("2018-09-06T19:09:56.935Z"),array: [],obj: {_id: 1017,str: "capacitor Berkshire",num: 27008,date: new Date("2018-09-06T13:22:34.582Z")}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1018,str: "info-mediaries parsing",num: 2020,date: new Date("2018-09-05T23:15:38.055Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1019,str: "Cambridgeshire",num: 94557,date: new Date("2018-09-06T08:41:23.381Z"),array: [new Date("2018-09-05T20:20:24.318Z"),22942,"FTP matrices",[13041,new Date("2018-09-06T04:02:11.092Z")],{_id: 1020,num: 34879,date: new Date("2018-09-05T21:44:55.975Z"),array: [],obj: {}},"Liaison","Missouri Senior Shirt",47473,"Coordinator eyeballs",new Date("2018-09-05T23:21:20.847Z"),"HDD lime Books",95764,[]],obj: {_id: 1021,str: "Kids",num: 83107,date: new Date("2018-09-05T22:05:55.975Z"),obj: {_id: 1022,str: "SDD",date: new Date("2018-09-06T04:38:20.166Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 1023,str: "Mississippi",num: 36575,date: new Date("2018-09-05T23:46:14.359Z"),array: [],obj: {_id: 1024,str: "Chips magenta Small Soft Bacon",num: 98128,date: new Date("2018-09-06T06:14:11.582Z"),array: [new Date("2018-09-06T10:24:51.173Z"),"bus SCSI Soft","Automotive",38047,new Date("2018-09-05T20:18:15.109Z"),{_id: 1025,str: "deposit",num: 20622,date: new Date("2018-09-06T19:14:48.510Z"),array: [],obj: {}},82438,74498,["Marketing capacity",[26287,new Date("2018-09-05T21:00:57.098Z"),{_id: 1026,str: "Applications solid state",date: new Date("2018-09-06T01:55:43.002Z"),array: []}]],{_id: 1027,str: "Assurance",num: 60729,obj: {}}],obj: {_id: 1028,str: "optical efficient",date: new Date("2018-09-06T00:23:18.543Z"),array: ["24/365 Bike","Incredible Frozen Salad",new Date("2018-09-06T18:12:14.848Z"),50175,2238]}}});
    },

    function(coll) {
        return coll.insert({_id: 1029,str: "Rubber programming Metal",num: 83553,date: new Date("2018-09-06T03:44:48.780Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1030,str: "transparent Unbranded Soft Pizza",num: 26227,date: new Date("2018-09-06T00:45:08.636Z"),array: [{_id: 1031,str: "users Cheese Outdoors",num: 82372,date: new Date("2018-09-06T10:32:07.036Z"),array: [38817,new Date("2018-09-06T00:24:27.286Z")],obj: {_id: 1032,str: "Chief Small Soft Pants payment",num: 38177,date: new Date("2018-09-06T05:39:08.158Z"),array: [],obj: {}}},"Checking Account",95968,77798,new Date("2018-09-05T23:27:38.443Z"),"hacking Steel",{_id: 1033,date: new Date("2018-09-05T21:46:06.153Z"),array: []},new Date("2018-09-06T10:56:45.990Z"),53772,[],"Trinidad and Tobago",[447],"Savings Account",new Date("2018-09-06T14:44:33.669Z")],obj: {_id: 1034,date: new Date("2018-09-06T03:43:03.202Z"),array: ["viral synthesizing",88561,{_id: 1035,str: "Gateway",num: 54295,obj: {_id: 1036,str: "parallelism online deposit",num: 36148,date: new Date("2018-09-06T06:31:41.847Z"),obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 1037,str: "bypass mindshare online",num: 26357,array: [new Date("2018-09-06T06:08:34.884Z"),32990,"Incredible Metrics Electronics",{_id: 1038,str: "Nauru",num: 95138,date: new Date("2018-09-06T16:33:30.660Z"),array: [],obj: {_id: 1039,str: "Auto Loan Account",num: 2250,date: new Date("2018-09-06T12:58:09.645Z"),array: [],obj: {_id: 1040,num: 21485,array: ["Hat 24/7",87442,90120,"Personal Loan Account action-items"],obj: {}}}},"interface IB User-centric",new Date("2018-09-05T22:29:18.351Z"),18113,new Date("2018-09-06T19:21:27.037Z"),new Date("2018-09-05T23:33:37.560Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1041,str: "alarm Electronics background",num: 18081,array: [36012,3397,new Date("2018-09-06T00:08:40.973Z"),[],"Pants quantifying Developer",new Date("2018-09-06T01:13:29.569Z"),"California Engineer",{_id: 1042,num: 20412,date: new Date("2018-09-06T06:47:15.976Z"),array: [new Date("2018-09-05T23:35:26.447Z"),"SCSI"],obj: {}},"sexy Manager",{_id: 1043,num: 88181,date: new Date("2018-09-06T17:50:11.377Z"),array: [63929,76660,49764],obj: {_id: 1044,str: "productize generate Shoes",num: 10734,date: new Date("2018-09-05T21:43:20.566Z"),obj: {_id: 1045,str: "Cambridgeshire",date: new Date("2018-09-06T15:04:25.536Z"),obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1046,str: "Sri Lanka Rupee empowering",date: new Date("2018-09-06T13:21:53.447Z"),array: [],obj: {_id: 1047,str: "deposit monetize",num: 3938,date: new Date("2018-09-06T08:01:12.167Z"),obj: {_id: 1048,str: "Steel bifurcated",num: 17469,date: new Date("2018-09-06T12:34:10.626Z"),array: [new Date("2018-09-05T21:14:58.056Z"),new Date("2018-09-06T00:22:04.471Z"),new Date("2018-09-06T11:05:32.918Z"),97891,[],"International",new Date("2018-09-05T21:09:51.736Z"),{_id: 1049,str: "value-added Investment Account",num: 3448,array: [new Date("2018-09-05T21:18:50.167Z"),{_id: 1050,str: "withdrawal Frozen Swaziland",num: 71722,array: []}],obj: {}},64725,"navigating Response Berkshire","generate withdrawal",90240,"driver Cordoba Oro Fish"]}}});
    },

    function(coll) {
        return coll.insert({_id: 1051,str: "copy backing up",num: 57442,date: new Date("2018-09-05T20:47:34.263Z"),array: [53286,66630,new Date("2018-09-05T22:02:24.977Z"),"Bacon",new Date("2018-09-06T15:27:07.043Z"),"Bedfordshire Licensed Point","Books dynamic Kuwait",{_id: 1052,num: 67158,date: new Date("2018-09-06T12:24:20.543Z"),array: [["e-services",33969],new Date("2018-09-06T02:15:44.551Z")],obj: {}},40641,{_id: 1053,str: "attitude-oriented copy salmon",num: 13897,date: new Date("2018-09-06T09:27:33.575Z"),array: [],obj: {_id: 1054,str: "Advanced",num: 28236}},12192,[new Date("2018-09-06T04:55:49.969Z"),[]],"Moldovan Leu"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1055,str: "Intranet Practical Iowa",num: 10898,date: new Date("2018-09-06T11:17:44.477Z"),array: [],obj: {_id: 1056,str: "Vanuatu withdrawal",num: 33672,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1057,str: "Ohio Awesome Metal Bike Games",num: 66689,date: new Date("2018-09-06T18:42:21.623Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1058,str: "Incredible Wooden Profound",num: 76970,date: new Date("2018-09-06T13:00:33.803Z"),array: [78494,77532,"Kiribati withdrawal Computers",[],new Date("2018-09-06T03:33:55.242Z"),new Date("2018-09-06T03:55:20.369Z"),[],{_id: 1059,str: "invoice Movies",num: 133,date: new Date("2018-09-05T20:07:19.878Z"),array: [],obj: {}},"Croatian Kuna","payment",new Date("2018-09-06T11:15:26.783Z"),{_id: 1060,str: "Steel Baby Human",date: new Date("2018-09-06T07:59:30.608Z"),obj: {}}],obj: {_id: 1061,num: 72145,date: new Date("2018-09-06T17:38:30.406Z"),obj: {_id: 1062,str: "payment backing up copying",num: 42567,array: ["Outdoors"]}}});
    },

    function(coll) {
        return coll.insert({_id: 1063,str: "Checking Account",num: 43865,date: new Date("2018-09-06T05:57:59.815Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1064,num: 61902,date: new Date("2018-09-06T07:59:57.980Z"),array: [],obj: {_id: 1065,str: "portal Berkshire",num: 18857,date: new Date("2018-09-06T00:18:41.917Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1066,str: "Pass",num: 71332,date: new Date("2018-09-05T22:40:28.120Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1067,str: "Refined Intelligent productivity",num: 86447,date: new Date("2018-09-06T00:25:34.919Z"),array: [],obj: {_id: 1068,str: "indexing Program",num: 66862,date: new Date("2018-09-06T16:05:44.988Z"),array: [new Date("2018-09-06T14:16:37.514Z"),new Date("2018-09-06T00:03:47.775Z"),[],"Checking Account",56907,{_id: 1069,str: "Senior",num: 88820,date: new Date("2018-09-06T10:29:56.185Z")},"Handcrafted Sleek Concrete",79721,34293],obj: {_id: 1070,str: "orchid Investment Account Berkshire",array: [new Date("2018-09-05T23:47:57.734Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 1071,str: "Money Market Account International Indiana",num: 54244,date: new Date("2018-09-06T19:26:46.641Z"),array: ["Baby value-added","black",new Date("2018-09-06T14:44:00.126Z"),new Date("2018-09-06T17:04:48.839Z"),[71301,27038,[{_id: 1072,str: "internet solution",num: 51849,date: new Date("2018-09-06T01:04:34.677Z"),array: [],obj: {_id: 1073,str: "help-desk",obj: {_id: 1074,str: "Reduced withdrawal Cotton",num: 21013,date: new Date("2018-09-06T16:53:25.240Z"),array: [new Date("2018-09-05T22:02:59.532Z"),85555,92041,70393,new Date("2018-09-06T05:30:24.989Z")]}}},"Home Loan Account Concrete green"]],{_id: 1075,num: 32833,date: new Date("2018-09-06T02:56:09.199Z"),array: [{_id: 1076,date: new Date("2018-09-05T23:02:31.625Z"),obj: {}},new Date("2018-09-06T18:15:29.419Z"),"Cheese Compatible FTP",[]],obj: {}},{_id: 1077,str: "British Indian Ocean Territory (Chagos Archipelago) Bedfordshire",num: 59765,obj: {}},"Idaho"]});
    },

    function(coll) {
        return coll.insert({_id: 1078,str: "navigating Mountains even-keeled",num: 92017,date: new Date("2018-09-06T18:00:41.879Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1079,str: "Montenegro world-class",num: 91371,date: new Date("2018-09-06T13:23:44.636Z"),array: [22064,{_id: 1080,str: "Steel connecting",num: 54008,date: new Date("2018-09-05T23:12:06.883Z"),array: [new Date("2018-09-06T05:50:59.085Z"),{_id: 1081,str: "synergy",num: 68471,date: new Date("2018-09-06T08:53:43.891Z")},"Checking Account HTTP Points"],obj: {}},[],"mission-critical",84949,"Incredible Fresh Pizza",new Date("2018-09-05T20:03:22.316Z"),59111,[],"Savings Account index Table"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1082,str: "calculating synergies",date: new Date("2018-09-06T11:00:49.211Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1083,str: "primary Cotton Soft",num: 43799,date: new Date("2018-09-06T12:17:30.170Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1084,str: "FTP Product",num: 44183,date: new Date("2018-09-06T02:29:24.511Z"),array: [],obj: {_id: 1085,str: "Movies Unbranded payment",num: 26249,date: new Date("2018-09-05T22:58:22.809Z"),array: ["Investor transmitter",new Date("2018-09-05T23:22:09.353Z"),new Date("2018-09-06T08:57:30.470Z"),75290,["hard drive",77569,[],"Kazakhstan Generic Soft Pizza","Concrete Fantastic transmitting"],[{_id: 1086,array: [],obj: {_id: 1087,str: "Berkshire",num: 14954,date: new Date("2018-09-06T18:48:28.639Z"),array: ["neural",new Date("2018-09-06T16:08:07.813Z")],obj: {}}}],{_id: 1088,str: "yellow Innovative",date: new Date("2018-09-06T03:36:56.108Z")},new Date("2018-09-06T18:20:35.828Z"),89116,{_id: 1089,str: "Plastic Toys violet",num: 22820,array: [49755],obj: {_id: 1090,num: 99453,date: new Date("2018-09-06T12:02:55.176Z"),obj: {_id: 1091,str: "Guadeloupe cohesive",num: 84785,date: new Date("2018-09-06T19:45:34.660Z"),array: []}}},new Date("2018-09-06T04:03:11.639Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 1092,num: 41858,date: new Date("2018-09-06T16:47:48.007Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1093,str: "Refined Rubber Fish Virginia",num: 83604,date: new Date("2018-09-06T00:02:04.368Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1094,str: "capacitor ivory",num: 12610,date: new Date("2018-09-05T21:42:53.203Z"),array: [264,new Date("2018-09-05T23:44:37.129Z"),new Date("2018-09-06T17:45:36.664Z"),{_id: 1095,num: 4536,date: new Date("2018-09-06T06:24:30.908Z"),array: [new Date("2018-09-06T10:14:59.758Z"),48163,{_id: 1096,str: "best-of-breed multi-byte",num: 11686,date: new Date("2018-09-05T23:08:32.821Z"),array: [],obj: {}},"Direct invoice Industrial","bleeding-edge microchip",{_id: 1097,date: new Date("2018-09-06T00:27:51.495Z"),obj: {_id: 1098,str: "Integration Soft 24 hour",num: 17879,obj: {_id: 1099,str: "Concrete",num: 68333,date: new Date("2018-09-05T20:41:04.437Z"),array: [],obj: {}}}},new Date("2018-09-06T08:17:59.278Z")]},976,"Ergonomic",76183,new Date("2018-09-06T09:22:40.016Z")],obj: {_id: 1100,str: "Israel Tactics extensible",num: 6516,date: new Date("2018-09-06T19:20:34.466Z"),array: [[]]}});
    },

    function(coll) {
        return coll.insert({_id: 1101,str: "Kids Generic Steel Chair",num: 49387,date: new Date("2018-09-06T05:04:36.020Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1102,str: "Switchable Lead",num: 28247,date: new Date("2018-09-06T04:35:12.966Z"),array: [],obj: {_id: 1103,num: 48930,date: new Date("2018-09-06T14:36:05.596Z"),array: [new Date("2018-09-06T04:49:55.714Z"),"District",94222,{_id: 1104,str: "Small Soft Fish Avon Burg",num: 77036,date: new Date("2018-09-05T20:59:13.071Z"),obj: {}},new Date("2018-09-06T02:11:31.645Z"),"invoice Reactive Balanced",58243,30605,92364,{_id: 1105,str: "Wooden",num: 92106,array: []},new Date("2018-09-06T18:57:16.674Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 1106,str: "Andorra Dynamic parse",num: 54602,date: new Date("2018-09-06T06:14:15.500Z"),array: [new Date("2018-09-06T04:20:56.871Z"),new Date("2018-09-06T07:29:13.402Z"),new Date("2018-09-06T19:38:26.357Z"),"Savings Account Dynamic groupware","firewall","multi-state programming",{_id: 1107,str: "Future Wooden",date: new Date("2018-09-06T09:19:23.456Z"),array: [],obj: {_id: 1108,num: 52858,date: new Date("2018-09-06T18:43:27.630Z"),array: [89558,48991]}},[],80949,77633,new Date("2018-09-05T23:30:08.507Z"),"communities Buckinghamshire",39724],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1109,str: "Keyboard",num: 71449,date: new Date("2018-09-06T01:08:38.485Z"),array: [{_id: 1110,str: "Investment Account",num: 21259,date: new Date("2018-09-06T00:10:11.599Z"),array: [],obj: {_id: 1111,str: "Health open-source",num: 59505,date: new Date("2018-09-06T00:19:10.090Z"),array: [new Date("2018-09-05T21:13:13.416Z")],obj: {}}},37953,"Product partnerships Engineer",26412,"quantify azure Money Market Account",new Date("2018-09-05T20:51:37.404Z"),"Implementation",new Date("2018-09-06T15:47:30.414Z"),{_id: 1112,num: 99598,obj: {_id: 1113,str: "application RAM Michigan",date: new Date("2018-09-06T14:14:41.262Z"),obj: {}}},[],"virtual","Azerbaijan Manager Engineer"],obj: {_id: 1114,str: "Chief",num: 12184,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1115,str: "Games",num: 86934,date: new Date("2018-09-06T01:49:10.214Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1116,str: "Credit Card Account paradigms",num: 891,date: new Date("2018-09-06T10:17:16.989Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1117,str: "generate",num: 5131,date: new Date("2018-09-06T09:58:04.708Z"),array: [],obj: {_id: 1118,str: "capacitor Wall Libyan Arab Jamahiriya",num: 28084,date: new Date("2018-09-06T08:16:34.592Z"),array: ["infomediaries",new Date("2018-09-06T15:48:52.704Z"),new Date("2018-09-06T04:37:40.602Z"),92868,33378,[],"virtual","Forward quantifying withdrawal","Diverse innovate",new Date("2018-09-06T01:39:02.430Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1119,str: "algorithm encryption pink",num: 25850,date: new Date("2018-09-06T12:23:14.994Z"),array: [{_id: 1120,str: "Washington index",num: 16051,array: [],obj: {}},new Date("2018-09-06T08:46:04.489Z"),62447,new Date("2018-09-05T22:48:18.624Z"),new Date("2018-09-06T06:19:42.473Z"),38256,"Ergonomic silver Estates",{_id: 1121,str: "next generation Oklahoma Home Loan Account",num: 18569,date: new Date("2018-09-06T11:55:41.278Z"),array: [],obj: {_id: 1122,str: "Gambia Quality ability",num: 22088,obj: {}}},66648],obj: {_id: 1123,num: 53997,date: new Date("2018-09-06T03:21:13.823Z")}});
    },

    function(coll) {
        return coll.insert({_id: 1124,str: "concept navigate capacitor",num: 86807,date: new Date("2018-09-06T00:01:43.118Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1125,str: "SSL navigate",num: 62549,date: new Date("2018-09-05T23:10:32.133Z"),array: [42816,{_id: 1126,str: "Buckinghamshire",num: 31807,date: new Date("2018-09-06T02:57:53.718Z"),array: [new Date("2018-09-06T04:41:33.660Z"),new Date("2018-09-06T15:22:24.073Z")],obj: {_id: 1127,str: "Iraqi Dinar payment Corporate",num: 97772,date: new Date("2018-09-06T07:05:19.688Z")}},63890,"Oman cross-platform Intelligent","Generic Rubber Ball Cambridgeshire Somoni","ivory",[],new Date("2018-09-06T09:48:12.256Z"),"standardization e-commerce Division",[],new Date("2018-09-06T01:41:13.123Z"),"HTTP Forks harness"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1128,str: "bus",num: 76632,date: new Date("2018-09-06T00:07:29.007Z"),array: [new Date("2018-09-06T12:03:35.481Z"),"sky blue","copying firewall","global",new Date("2018-09-06T05:13:29.032Z"),85970,73802,47956,[],[new Date("2018-09-06T07:11:35.747Z"),52310,new Date("2018-09-06T04:34:23.284Z")],["e-tailers users"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1129,str: "Auto Loan Account",num: 28298,date: new Date("2018-09-06T05:53:07.209Z"),array: [79170,{_id: 1130,str: "contingency",num: 80255,date: new Date("2018-09-06T04:07:31.464Z"),array: [{_id: 1131,num: 96823,date: new Date("2018-09-06T12:03:19.542Z"),obj: {}}]},new Date("2018-09-06T06:46:24.533Z"),new Date("2018-09-06T05:34:48.901Z"),"Buckinghamshire",69093,[],new Date("2018-09-06T01:41:50.063Z"),"Sleek","back up",7068,new Date("2018-09-06T15:00:37.208Z"),"Virtual",[[],{_id: 1132,str: "Exclusive",date: new Date("2018-09-06T00:53:09.709Z"),array: [],obj: {_id: 1133,str: "Afghanistan index Nevada",obj: {}}}]]});
    },

    function(coll) {
        return coll.insert({_id: 1134,str: "Designer orchid Implementation",date: new Date("2018-09-05T22:20:08.760Z"),obj: {_id: 1135,str: "Auto Loan Account Administrator orchestration",num: 34485,date: new Date("2018-09-06T03:13:48.642Z"),array: [new Date("2018-09-06T05:01:44.901Z"),{_id: 1136,str: "Licensed Fresh Ball",num: 30734,date: new Date("2018-09-06T08:30:45.981Z"),array: [85056]},"local Investment Account transmitter",56409,new Date("2018-09-06T06:58:49.064Z"),new Date("2018-09-06T03:23:59.347Z"),"Rubber",29287,[],{_id: 1137,str: "Sao Tome and Principe circuit visionary",array: [],obj: {}},75769],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1138,str: "HTTP Visionary",num: 90786,date: new Date("2018-09-06T15:54:02.278Z"),array: [],obj: {_id: 1139,str: "invoice Buckinghamshire task-force",num: 1005,date: new Date("2018-09-06T01:18:25.670Z"),array: [new Date("2018-09-06T18:55:06.401Z"),"invoice",46665,"Internal Future",75400,"mobile",[{_id: 1140,str: "Distributed Prairie",date: new Date("2018-09-06T01:44:22.759Z"),array: [],obj: {}}],new Date("2018-09-06T16:39:41.377Z"),new Date("2018-09-05T20:39:45.840Z"),22694,[],45091,"generating brand"],obj: {_id: 1141,num: 79016,date: new Date("2018-09-05T20:36:21.499Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 1142,str: "Visionary structure",date: new Date("2018-09-05T20:13:03.049Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1143,str: "orange",num: 93370,date: new Date("2018-09-06T18:14:33.249Z"),array: [new Date("2018-09-06T05:02:47.061Z"),{_id: 1144,str: "coherent Industrial needs-based",num: 39353,date: new Date("2018-09-06T02:33:11.949Z"),array: [[],17398],obj: {}},new Date("2018-09-06T02:36:03.629Z"),new Date("2018-09-06T17:15:01.548Z"),"neural Unbranded Representative",new Date("2018-09-06T08:59:24.799Z"),[18534],[],"Officer Director payment","Kina data-warehouse monetize",80248,"Cambridgeshire HDD"],obj: {_id: 1145,str: "Personal Loan Account",num: 92981,date: new Date("2018-09-06T12:18:35.182Z"),obj: {_id: 1146,str: "infomediaries Analyst Mountains",num: 31086,array: [],obj: {_id: 1147,num: 69954,array: [{_id: 1148,date: new Date("2018-09-06T06:36:43.860Z")},69523]}}}});
    },

    function(coll) {
        return coll.insert({_id: 1149,str: "deposit",num: 8235,date: new Date("2018-09-06T16:39:25.953Z"),array: [new Date("2018-09-06T19:06:02.334Z"),72936,"Home Loan Account","payment",41116,[],new Date("2018-09-06T18:14:44.861Z"),4769,"index",{_id: 1150,str: "Applications",num: 3804,date: new Date("2018-09-06T12:33:17.278Z"),obj: {}},88019],obj: {_id: 1151,str: "Handmade International Lead",num: 85805,date: new Date("2018-09-05T20:51:30.050Z")}});
    },

    function(coll) {
        return coll.insert({_id: 1152,str: "Liaison Bahraini Dinar",num: 42985,date: new Date("2018-09-06T19:47:17.983Z"),array: [new Date("2018-09-06T03:58:11.580Z"),58440,"Sausages",59308,"Argentine Peso Cambridgeshire systematic","Awesome Steel Fish Handcrafted Rubber Towels Principal",new Date("2018-09-06T02:50:49.441Z"),new Date("2018-09-06T14:38:02.988Z"),new Date("2018-09-06T13:21:06.711Z"),[88109]],obj: {_id: 1153,str: "Kuwait",num: 44898,date: new Date("2018-09-06T09:34:06.691Z"),array: [],obj: {_id: 1154,str: "User-centric Director Ramp",date: new Date("2018-09-06T02:47:20.347Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 1155,str: "Rhode Island",num: 33766,date: new Date("2018-09-06T15:42:36.212Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1156,num: 41767,date: new Date("2018-09-06T03:41:34.660Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1157,str: "Plain clear-thinking",date: new Date("2018-09-06T02:57:35.270Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1158,str: "Indian Rupee Infrastructure",num: 51139,date: new Date("2018-09-06T07:32:42.506Z"),array: ["Buckinghamshire","Intranet Savings Account Locks",{_id: 1159,str: "superstructure Investment Account primary",num: 66548,date: new Date("2018-09-06T04:48:04.422Z"),array: [new Date("2018-09-06T18:56:12.938Z"),[],13814],obj: {}},"Vermont",6783,new Date("2018-09-06T13:06:49.630Z"),"Texas",new Date("2018-09-06T04:44:45.692Z"),58420,new Date("2018-09-06T05:27:39.511Z"),new Date("2018-09-05T21:30:17.493Z"),{_id: 1160,str: "copy",num: 16447,obj: {_id: 1161,num: 17431,date: new Date("2018-09-06T04:36:16.441Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 1162,str: "flexibility",num: 37422,date: new Date("2018-09-06T03:03:14.144Z"),array: [],obj: {_id: 1163,str: "visionary",num: 80719,date: new Date("2018-09-06T13:09:58.937Z"),array: ["value-added",[],5366,new Date("2018-09-06T15:08:19.434Z"),"Bedfordshire",{_id: 1164,str: "Intelligent Louisiana Adaptive",date: new Date("2018-09-06T13:34:23.551Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 1165,str: "Borders",date: new Date("2018-09-06T00:07:05.567Z"),array: ["Intelligent sky blue North Dakota",22622,new Date("2018-09-06T10:02:44.168Z"),"Fantastic Granite Towels",{_id: 1166,str: "Kentucky",num: 54254,date: new Date("2018-09-06T15:31:58.038Z"),array: [],obj: {}},25195,[],"maximize",new Date("2018-09-06T02:19:33.465Z"),{_id: 1167,str: "Lari Rustic Steel Mouse",num: 72790,date: new Date("2018-09-06T00:32:13.301Z")},new Date("2018-09-06T18:15:25.980Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1168,str: "Computers",num: 18827,date: new Date("2018-09-05T21:26:50.871Z"),array: [],obj: {_id: 1169,str: "Oregon hack",date: new Date("2018-09-06T14:37:15.816Z"),array: ["virtual eyeballs",new Date("2018-09-06T03:42:37.193Z"),new Date("2018-09-06T15:43:32.343Z"),["West Virginia Nicaragua Money Market Account",new Date("2018-09-06T04:59:30.644Z")],"Berkshire Georgia Fantastic",31158,new Date("2018-09-06T10:03:33.521Z"),47941,new Date("2018-09-05T22:40:49.027Z"),{_id: 1170,str: "Applications Executive New Taiwan Dollar",num: 22813,date: new Date("2018-09-06T18:49:36.999Z"),array: [{_id: 1171,str: "Berkshire",num: 22154,obj: {}}],obj: {_id: 1172,str: "Checking Account",date: new Date("2018-09-06T11:14:28.486Z"),array: []}},"transitional optical Fantastic Frozen Sausages","discrete Money Market Account",68050]}});
    },

    function(coll) {
        return coll.insert({_id: 1173,str: "Wooden",num: 96491,date: new Date("2018-09-06T04:01:39.127Z"),array: [],obj: {_id: 1174,str: "hard drive",num: 57259,date: new Date("2018-09-06T10:13:22.333Z"),array: [11506,66079,new Date("2018-09-06T17:27:55.177Z"),"Right-sized Research parsing",{_id: 1175,str: "Rustic Granite Computer robust Marketing",date: new Date("2018-09-06T15:53:58.331Z"),array: [],obj: {_id: 1176,obj: {}}},"Investment Account Ferry",56593,new Date("2018-09-06T03:52:45.947Z"),{_id: 1177,str: "Nicaragua customer loyalty Chips",num: 98058,date: new Date("2018-09-06T09:44:45.824Z"),obj: {_id: 1178,str: "Agent",num: 50675,date: new Date("2018-09-05T22:37:21.218Z"),array: [2332,new Date("2018-09-05T23:55:31.954Z"),34137,new Date("2018-09-06T08:28:44.104Z"),"Awesome methodology",new Date("2018-09-05T21:18:14.185Z")]}},98829]}});
    },

    function(coll) {
        return coll.insert({_id: 1179,str: "quantifying Norwegian Krone Circles",num: 29579,date: new Date("2018-09-06T19:01:24.700Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1180,num: 85706,date: new Date("2018-09-06T13:47:36.070Z"),array: [],obj: {_id: 1181,str: "magenta",num: 1962,date: new Date("2018-09-05T22:55:38.072Z"),array: [new Date("2018-09-05T23:52:44.480Z"),55547,"Avon",76870,[66315],new Date("2018-09-06T09:04:02.719Z"),{_id: 1182,str: "integrated Face to face",date: new Date("2018-09-06T08:10:44.349Z"),array: ["Steel"]},new Date("2018-09-06T03:56:01.632Z"),new Date("2018-09-06T03:42:40.123Z"),[],[],{_id: 1183,str: "Home Loan Account",num: 55358},new Date("2018-09-06T10:08:36.710Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1184,str: "Congo connect",num: 46633,date: new Date("2018-09-06T18:38:21.735Z"),array: ["cross-platform Re-engineered",[39472,new Date("2018-09-05T22:05:41.094Z"),new Date("2018-09-06T00:45:28.802Z")],"Metal Chips Tajikistan",43803,[],new Date("2018-09-06T18:33:19.893Z"),"Metrics Unbranded Argentina",79512,{_id: 1185,str: "XSS GB",num: 20784,date: new Date("2018-09-06T08:47:04.457Z"),array: [],obj: {}},"solid state"],obj: {_id: 1186,str: "Practical Steel Computer Producer",num: 18379,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1187,str: "Synchronised array grey",num: 58147,date: new Date("2018-09-06T05:52:43.242Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1188,str: "Licensed Frozen Cheese Practical Granite Gloves",num: 40715,date: new Date("2018-09-06T15:17:13.756Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1189,str: "national Graphic Interface heuristic",num: 88856,date: new Date("2018-09-06T02:32:01.923Z"),array: ["panel Shores paradigms",new Date("2018-09-06T17:18:46.492Z"),12194,[],8105,82328,{_id: 1190,num: 13037,date: new Date("2018-09-06T01:54:02.902Z"),array: [],obj: {_id: 1191,str: "Tasty Granite Shirt Designer dot-com",num: 21254,date: new Date("2018-09-06T15:22:00.637Z"),obj: {}}},41328,new Date("2018-09-06T10:45:01.821Z"),{_id: 1192,array: [],obj: {_id: 1193,str: "Business-focused connect",date: new Date("2018-09-06T14:46:40.117Z"),array: ["dot-com magnetic","Handcrafted Rubber Soap",77716,new Date("2018-09-06T13:57:42.939Z"),"bypassing Developer"],obj: {_id: 1194,str: "Garden Chicken Armenian Dram",num: 32245,array: [new Date("2018-09-06T14:53:19.757Z")]}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1195,str: "compress Unbranded Concrete Gloves",num: 27539,date: new Date("2018-09-06T16:42:12.860Z"),array: [new Date("2018-09-06T08:30:42.800Z"),{_id: 1196,str: "Forward quantifying",num: 58993,array: [49062,[]],obj: {}},"Tasty","Idaho cultivate","Dynamic invoice",95102,new Date("2018-09-06T00:30:56.478Z"),57045,new Date("2018-09-06T19:45:18.095Z"),new Date("2018-09-06T00:08:36.002Z"),{_id: 1197,str: "zero defect",num: 13646,date: new Date("2018-09-06T04:12:42.891Z"),array: [{ _id: 1198 },{_id: 1199,str: "primary Awesome",num: 32287,date: new Date("2018-09-06T00:39:05.272Z"),obj: {}}]}],obj: {_id: 1200,str: "Enterprise-wide compress",date: new Date("2018-09-06T03:32:34.554Z"),array: [],obj: {_id: 1201,num: 9424,array: [],obj: {_id: 1202,str: "input Plastic",num: 76707,date: new Date("2018-09-05T22:01:38.915Z"),array: [],obj: {_id: 1203,num: 35102,date: new Date("2018-09-05T23:55:15.801Z"),obj: {}}}}}});
    },

    function(coll) {
        return coll.insert({_id: 1204,str: "Berkshire transmitter Generic",num: 1020,date: new Date("2018-09-06T11:51:10.635Z"),array: [["Gorgeous deposit Unbranded",85309],new Date("2018-09-05T20:36:04.804Z"),new Date("2018-09-06T02:44:52.415Z"),"asymmetric",72332,"magenta HDD quantifying",21426,55347,{_id: 1205,date: new Date("2018-09-06T06:57:10.208Z"),array: [{_id: 1206,str: "haptic",num: 2205,array: [],obj: {_id: 1207,str: "input",num: 52763,array: [],obj: {}}},[new Date("2018-09-06T18:53:36.576Z")],new Date("2018-09-06T15:33:23.532Z"),{_id: 1208,num: 98036,date: new Date("2018-09-06T06:01:00.089Z")}],obj: {}},"Intranet Buckinghamshire User-friendly",new Date("2018-09-06T03:32:54.282Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1209,str: "Frozen Corporate Corporate",num: 60650,date: new Date("2018-09-06T05:30:10.464Z"),array: [],obj: {_id: 1210,str: "Avon cyan",num: 27088,date: new Date("2018-09-06T04:53:15.717Z"),array: [65657,"Soft",new Date("2018-09-06T18:08:37.008Z"),"Practical Fish",91700,{_id: 1211,num: 68622,date: new Date("2018-09-06T13:12:59.733Z"),array: [],obj: {}},[new Date("2018-09-06T07:09:20.131Z")],new Date("2018-09-06T06:17:29.655Z"),"function",28218,[],new Date("2018-09-05T22:38:16.693Z"),"Borders Metrics deposit",[6699],[{_id: 1212,str: "Personal Loan Account Sausages",obj: {_id: 1213,str: "deposit",date: new Date("2018-09-06T08:57:12.413Z"),array: []}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 1214,str: "Hat dedicated streamline",num: 42900,date: new Date("2018-09-05T23:11:10.367Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1215,str: "Kentucky Samoa",array: [23511,"wireless communities",4048,[]],obj: {_id: 1216,str: "invoice Won Rubber",num: 40168,date: new Date("2018-09-06T19:27:46.818Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1217,str: "SMTP Configurable",num: 43257,array: [],obj: {_id: 1218,str: "virtual web services",num: 46681,date: new Date("2018-09-06T18:28:41.695Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1219,num: 99009,date: new Date("2018-09-06T19:04:43.554Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1220,str: "indexing parsing e-tailers",num: 82084,date: new Date("2018-09-06T02:59:50.193Z"),array: [new Date("2018-09-06T15:04:45.259Z"),"Metal AGP Sports",{_id: 1221,str: "process improvement even-keeled Minnesota",date: new Date("2018-09-06T03:55:08.948Z")},88704,{_id: 1222,num: 78015,date: new Date("2018-09-06T09:18:07.122Z"),array: [new Date("2018-09-06T13:28:56.288Z")]},23462,74859,"Wooden Credit Card Account",{_id: 1223,str: "fuchsia Identity mission-critical",num: 55858,array: [],obj: {}},13247,new Date("2018-09-06T03:25:38.599Z"),"Guadeloupe Bedfordshire indexing",[],9227],obj: {_id: 1224,str: "withdrawal multi-state",num: 85579,array: [new Date("2018-09-06T05:50:21.387Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1225,str: "networks hack",num: 21953,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1226,str: "Barbados Dollar Fresh Handcrafted Cotton Towels",num: 20521,date: new Date("2018-09-06T03:51:08.426Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1227,str: "Pennsylvania Research Ethiopian Birr",num: 73553,date: new Date("2018-09-06T01:17:10.886Z"),array: [new Date("2018-09-06T03:00:02.919Z"),92121,96090,"Games",[],new Date("2018-09-06T11:51:02.074Z"),"COM",[],new Date("2018-09-06T03:25:27.781Z"),new Date("2018-09-06T10:17:34.120Z"),"Customer Tasty",8988,91885],obj: {_id: 1228,num: 3450,date: new Date("2018-09-06T17:37:55.358Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1229,str: "Latvian Lats clear-thinking Baby",num: 14928,date: new Date("2018-09-06T09:48:23.706Z"),array: [],obj: {_id: 1230,str: "program Minnesota Hat",num: 55165,array: [95784,"Borders Clothing Health",new Date("2018-09-06T08:30:49.674Z"),new Date("2018-09-05T22:14:43.172Z"),new Date("2018-09-06T13:14:43.619Z"),5222,{_id: 1231,str: "scalable",num: 86275,date: new Date("2018-09-06T03:37:30.228Z"),array: ["Nauru Throughway",new Date("2018-09-06T06:15:11.642Z")],obj: {_id: 1232,str: "Electronics",num: 67575,date: new Date("2018-09-06T05:56:16.612Z"),array: ["recontextualize deposit"],obj: {}}},83552,[],new Date("2018-09-05T21:15:43.362Z"),new Date("2018-09-05T22:55:09.226Z"),"users Bedfordshire Checking Account",25504]}});
    },

    function(coll) {
        return coll.insert({_id: 1233,str: "zero tolerance orange firmware",num: 86354,date: new Date("2018-09-05T19:59:24.685Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1234,str: "scalable",num: 14448,date: new Date("2018-09-05T23:09:08.982Z"),array: [[],[],"overriding Executive",96086,2547,10397,new Date("2018-09-06T18:47:57.292Z"),new Date("2018-09-06T08:27:16.550Z")],obj: {_id: 1235,str: "Toys",date: new Date("2018-09-06T05:40:29.900Z"),array: [],obj: {_id: 1236,str: "monetize",num: 38302,date: new Date("2018-09-06T18:17:25.825Z"),array: ["array","Frozen","Tuna Checking Account",72121,{_id: 1237,str: "system-worthy",num: 98895},new Date("2018-09-06T04:48:06.848Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 1238,str: "architectures instruction set",num: 81685,date: new Date("2018-09-06T12:02:58.453Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1239,str: "leverage Generic",num: 46003,date: new Date("2018-09-05T22:15:24.558Z"),array: ["Industrial",58409,new Date("2018-09-06T01:57:10.434Z"),"5th generation Fundamental internet solution",[],new Date("2018-09-06T11:03:22.002Z"),34980,"Brook Identity software",new Date("2018-09-06T07:38:29.717Z")],obj: {_id: 1240,num: 42735,date: new Date("2018-09-06T08:39:13.393Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1241,num: 64966,date: new Date("2018-09-06T00:19:36.050Z"),array: [9146,new Date("2018-09-05T23:18:44.739Z"),28866,{_id: 1242,str: "applications",num: 94436,date: new Date("2018-09-06T11:24:29.940Z"),array: []},new Date("2018-09-05T20:02:02.628Z"),"Bypass","hack","e-services Practical payment",new Date("2018-09-05T23:20:19.596Z"),new Date("2018-09-06T01:12:14.370Z"),27948,"Kentucky productize deposit"],obj: {_id: 1243,str: "flexibility human-resource Car",num: 38532,date: new Date("2018-09-06T14:37:21.685Z"),array: [],obj: {_id: 1244,num: 46634,date: new Date("2018-09-06T08:32:45.267Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 1245,num: 17627,date: new Date("2018-09-05T22:20:04.801Z"),array: [77131,{_id: 1246,num: 68172,date: new Date("2018-09-06T05:42:03.576Z"),array: []},38752,"brand","Practical Granite Bacon",new Date("2018-09-06T13:37:11.258Z"),97829],obj: {_id: 1247,str: "Product Dominican Peso",num: 6147,array: [new Date("2018-09-06T04:37:49.954Z"),["Granite Gloves payment","Incredible Frozen Mouse solid state",new Date("2018-09-06T11:57:35.320Z")],52608,[],[{_id: 1248,str: "Lebanon Money Market Account",num: 51918,array: [],obj: {}},new Date("2018-09-06T14:18:03.216Z")],"Customizable Fantastic Fresh Ball",{_id: 1249,str: "Steel Beauty New York",date: new Date("2018-09-06T10:37:43.771Z"),obj: {_id: 1250,num: 1629,date: new Date("2018-09-06T03:07:03.999Z"),obj: {_id: 1251,str: "Car",date: new Date("2018-09-06T13:58:32.386Z"),array: [88827,new Date("2018-09-06T19:34:58.724Z")],obj: {}}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1252,str: "neural Response navigating",num: 27609,array: [new Date("2018-09-05T22:58:44.705Z"),[],"New Zealand Dollar","Pataca",new Date("2018-09-06T06:02:51.920Z"),19034,"Station Health",1853,new Date("2018-09-06T17:27:08.006Z"),[],{_id: 1253,str: "Stand-alone",num: 19666,date: new Date("2018-09-06T03:58:16.436Z"),array: [],obj: {}},{_id: 1254,str: "Internal Michigan primary",num: 56913,date: new Date("2018-09-06T17:25:49.689Z"),array: [329]},{_id: 1255,str: "plug-and-play generating",num: 38466,obj: {}}],obj: {_id: 1256,date: new Date("2018-09-06T16:42:06.261Z"),array: [new Date("2018-09-06T05:26:34.958Z")],obj: {_id: 1257,str: "connect Games Oklahoma",num: 95623,date: new Date("2018-09-06T00:52:22.912Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 1258,str: "maroon",num: 20341,date: new Date("2018-09-06T01:00:42.004Z"),array: [],obj: {_id: 1259,str: "TCP",date: new Date("2018-09-06T07:57:35.820Z"),array: [{_id: 1260,num: 78147,date: new Date("2018-09-06T03:47:08.249Z"),array: [],obj: {}},80837,"sticky payment",new Date("2018-09-06T04:03:33.016Z"),12148,"Home Loan Account Mission Ethiopian Birr",8117,66098,new Date("2018-09-06T16:06:34.445Z"),[new Date("2018-09-06T12:08:23.846Z"),"Oklahoma Multi-channelled",["toolset"],{_id: 1261,str: "Locks",num: 70521,obj: {}}],new Date("2018-09-06T11:41:04.162Z"),46095],obj: {_id: 1262,str: "initiative Lodge",num: 94398,date: new Date("2018-09-06T08:03:42.100Z"),obj: {_id: 1263,array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 1264,str: "Argentine Peso",num: 30199,date: new Date("2018-09-06T17:16:02.327Z"),array: [22818,new Date("2018-09-05T21:40:20.695Z"),"portals",new Date("2018-09-06T17:27:34.541Z"),97817,{_id: 1265,num: 593,date: new Date("2018-09-06T16:40:12.550Z"),array: ["methodologies teal Books",new Date("2018-09-05T21:48:24.704Z")],obj: {_id: 1266,str: "Avon Infrastructure hybrid",num: 29704,date: new Date("2018-09-06T13:46:03.425Z"),obj: {}}},"Practical benchmark",{_id: 1267,str: "magenta",num: 76646,array: []},new Date("2018-09-06T19:03:04.967Z")],obj: {_id: 1268,str: "reinvent",num: 26263,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1269,str: "Future-proofed back-end Automotive",num: 91915,date: new Date("2018-09-06T13:52:49.499Z"),array: [],obj: {_id: 1270,str: "Connecticut",num: 59992,date: new Date("2018-09-06T07:53:45.403Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1271,str: "Regional Kentucky",num: 65150,date: new Date("2018-09-06T15:22:59.861Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1272,str: "hacking",num: 36905,date: new Date("2018-09-06T12:40:45.259Z"),array: [],obj: {_id: 1273,str: "Associate Engineer",num: 32735,date: new Date("2018-09-06T09:33:25.427Z"),array: [new Date("2018-09-06T19:19:07.139Z"),2716,new Date("2018-09-06T13:59:18.101Z"),"Mall override grey",50182,26821,84922,[],"virtual Movies backing up"]}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $concatArrays: [[],[],[91639]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $trim: {input: '$obj.obj.obj.str',chars: "Avon Security Buckinghamshire"} }],['$obj.obj.str',"Agent index action-items"]] }, _id: 0}}],

        [{$project: {a: { $hour: { $millesecond: { $minute: { $second: { $year: { $isoWeekYear: { $toDate: { $isoWeek: { $dayOfWeek: { $second: { $dayOfMonth: { $week: { $dateToParts: {date: { $month: { $dayOfMonth: new Date("2018-09-06T10:08:45.276Z") } },iso8601: true} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',{ $concat: ['$obj.obj.obj.str',"invoice"] }],['$obj.obj.num'],[],["overriding process improvement ivory",{ $substrCP: ["optimize",2,9] }]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.obj.str'],cond: { $gt: [{ $arrayElemAt: [[],'$$this'] },{ $second: { $millesecond: { $dateToString: {date: '$$this',format: "%%-%u-%m-%z-%j-%w-%G-%%-%j-%Z-%H-%M",onNull: { $substr: ["superstructure",19,7] }} } } }] }} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T14:16:59.728Z",timezone: "Asia/Ulan_Bator",onNull: { $arrayToObject: [[{k: "Manors Baht back up",v: false}]] }} },format: "%M-%Y-%S-%H-%H-%L-%u-%u-%%-%Z",onNull: { $substr: ["deposit leading edge",19,13] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["North Dakota"],{ $abs: '$obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T04:38:15.868Z",format: "%j-%S-%d-%L-%Z-%d-%U-%z-%L-%w-%M-%d",timezone: "Africa/Kampala",onNull: '$obj.obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $week: { $dayOfWeek: { $dayOfWeek: { $hour: '$obj.obj.obj.obj.date' } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Rupiah"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],78288] }, _id: 0}}],

        [{$project: {a: { $range: [18,18] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],66670] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.str',chars: { $toUpper: "Fresh" }} }, _id: 0}}],

        [{$project: {a: { $toDate: { $dateToParts: {date: { $dateToString: {date: { $isoWeekYear: { $month: { $week: { $dateFromString: {dateString: "2018-09-06T08:54:17.645Z",format: "%L-%j-%m-%H-%M-%L-%G-%Z",onError: { $arrayToObject: [[[],['$obj.obj.obj.num'],[],['$obj.obj.str',{ $toUpper: "open-source" },'$obj.obj.obj.str'],['$obj.obj.obj.obj.str'],[]]] },onNull: { $concat: ["Engineer Corporate",'$obj.obj.str',"tan"] }} } } } },format: "%L-%w-%Z-%u-%H-%m"} },timezone: "America/Indiana/Tell_City",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $toString: { $isoWeekYear: { $month: { $isoDayOfWeek: { $dayOfMonth: { $dateToParts: {date: { $dateToString: { date: '$obj.obj.date' } },timezone: "America/Argentina/ComodRivadavia",iso8601: false} } } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $second: { $dayOfYear: { $week: { $isoDayOfWeek: { $dayOfYear: { $dayOfMonth: '$obj.date' } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num'],[],[{ $substrCP: ['$obj.str',10,5] }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "EXE capacity",v: false},{k: "California Bacon",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $week: { $millesecond: { $hour: { $dayOfMonth: { $dayOfYear: { $hour: { $dateFromString: {dateString: "2018-09-06T14:28:09.720Z",timezone: "Europe/Athens",onError: { $toDate: { $arrayElemAt: [["Multi-layered","Digitized"],11216] } },onNull: { $concat: [{ $dateToString: {date: '$obj.obj.date',format: "%m-%z-%u-%V-%Z-%u-%S-%m",onNull: "Developer"} },'$obj.str'] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str'],cond: { $or: ['$obj.obj.obj.str'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],56676] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Regional",{ $ltrim: { input: { $toLower: "Auto Loan Account invoice" } } }],in: { $cmp: [{ $hour: { $dateFromString: {dateString: "2018-09-06T00:24:57.609Z",onError: { $arrayToObject: [[{k: "synergies website",v: false},{k: "Bahrain",v: new Date("2018-09-06T05:20:42.197Z")}]] }} } },{ $arrayElemAt: [[{ $trunc: 67006 },'$obj.obj.obj.obj.num'],58415] }] }} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T14:05:16.638Z",timezone: "Europe/Athens",onError: { $range: [1,16] },onNull: { $concat: ["bricks-and-clicks PCI"] }} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T08:04:56.809Z"),format: "%%-%H-%G-%G"} }, _id: 0}}],

        [{$project: {a: { $map: {input: [26308,'$obj.num',30148],as: 'verlie',in: { $pow: [3440,'$obj.obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: '$str',chars: "eyeballs Identity"} },{ $dateToString: {date: { $isoWeek: { $dateFromString: {dateString: "2018-09-05T20:29:32.845Z",timezone: "Asia/Srednekolymsk",onError: { $toUpper: '$obj.obj.obj.obj.str' }} } },format: "%Y-%H-%L-%m-%U-%j-%H",onNull: { $arrayElemAt: [["SMTP Borders","Practical Metal Tuna Distributed yellow"],87432] }} },"Bedfordshire"],81636] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],89762] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["calculating hack matrix",{ $dateToString: {date: { $isoWeek: { $dateFromParts: {year: { $indexOfArray: [{ $reverseArray: [[]] },{ $arrayElemAt: [[{ $substrBytes: ["initiatives New Hampshire port",17,2] }],5350] },17] },second: { $cmp: [{ $range: [0,19] },{ $concatArrays: [[40839],['$obj.obj.obj.obj.num',66427]] }] },millisecond: { $log: ['$obj.obj.obj.obj.num',{ $abs: 56212 }] },timezone: "America/Boa_Vista"} } },format: "%j-%w-%z-%M-%H"} }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "content",v: new Date("2018-09-06T15:39:40.579Z")},{k: "bypass Regional mobile",v: "Movies one-to-one"},{k: "Fiji Dollar Dynamic Borders",v: '$obj.obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $second: { $dateFromString: {dateString: "2018-09-06T14:26:50.967Z",timezone: "MET"} } } }, _id: 0}}],

        [{$project: {a: { $hour: { $millesecond: { $dateToParts: {date: { $isoWeek: new Date("2018-09-06T14:02:23.668Z") },timezone: "America/Sitka"} } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],[],[{ $substr: ['$str',6,18] },'$obj.obj.str'],['$obj.obj.obj.obj.num']],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $substrBytes: [{ $toUpper: '$str' },11,15] },chars: "Bedfordshire"} }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [['$obj.str','$obj.obj.obj.str'],29182] } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T21:28:19.630Z",format: "%Z-%u-%M-%z-%m-%%",onError: { $arrayToObject: [[['$obj.num',80864],[],["Monitored Branding",{ $toLower: '$obj.obj.str' }],['$obj.obj.obj.num'],[],['$obj.obj.obj.obj.str',"communities Granite User-centric",{ $toUpper: { $rtrim: { input: '$obj.obj.obj.obj.str' } } },"Directives"],['$obj.obj.num']]] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [48321,'$obj.obj.obj.obj.num',96632],in: { $log10: 25229 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "payment",v: { $year: { $month: { $dateFromParts: {year: { $indexOfArray: [{ $objectToArray: '$obj' },{ $arrayElemAt: [[{ $substrCP: ["Specialist",8,3] }],'$obj.num'] },16,16] },month: { $sqrt: 50971 },second: { $exp: '$obj.num' },millisecond: { $ceil: '$obj.obj.obj.num' }} } } }}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $dateToString: {date: '$obj.obj.obj.obj.date',format: "%H-%V-%m-%j-%m-%S"} }]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toString: { $arrayElemAt: [[],{ $indexOfArray: [{ $filter: {input: [],as: 'roderick',cond: { $lt: [{ $dayOfWeek: { $dateToString: {date: new Date("2018-09-06T04:19:27.379Z"),format: "%w-%U-%V-%G",timezone: "Australia/Brisbane",onNull: { $arrayToObject: [[["Advanced circuit"],['$num',35021,95459],[]]] }} } },{ $arrayElemAt: [[],'$$roderick'] }] }} },{ $dayOfYear: { $second: { $week: { $year: { $dayOfMonth: { $millesecond: { $hour: { $isoWeekYear: { $dayOfMonth: { $week: { $toDate: { $rtrim: {input: { $substr: ['$obj.str',9,13] },chars: '$str'} } } } } } } } } } } } }] }] } },"intuitive Lakes"],in: { $log: [70075,66325] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToParts: { date: { $minute: new Date("2018-09-06T16:47:41.919Z") } } },timezone: "Asia/Bangkok",onNull: "XSS"} }, _id: 0}}],

        [{$project: {a: { $toString: { $concat: [{ $rtrim: { input: "North Dakota Ball alarm" } }] } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $toLower: "solid state channels" }],[],['$obj.obj.obj.str','$obj.obj.obj.obj.str',{ $toUpper: '$obj.obj.obj.obj.str' },{ $dateToString: {date: '$obj.obj.obj.obj.date',format: "%Y-%j-%j-%L-%z",timezone: "Europe/Lisbon",onNull: { $substrCP: ["integrated Keyboard",17,15] }} },"Ergonomic Mississippi"]],useLongestLength: false,defaults: [new Date("2018-09-06T16:41:45.971Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],30561] }, _id: 0}}],

        [{$project: {a: { $hour: { $year: { $millesecond: { $second: { $isoWeekYear: { $dayOfYear: { $isoDayOfWeek: { $millesecond: { $week: { $dayOfMonth: { $isoWeek: { $dayOfMonth: { $minute: { $dateFromParts: {isoWeekYear: { $divide: [46597,30287] },isoWeek: { $trunc: 69850 },hour: { $mod: ['$obj.obj.num','$obj.obj.obj.num'] },millisecond: { $cmp: [{ $arrayElemAt: [[66150],{ $multiply: ['$num','$obj.num'] }] },{ $reverseArray: [['$obj.obj.obj.str',{ $concat: ['$str'] }]] }] },timezone: "Asia/Singapore"} } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[73060],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],28817] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $ltrim: {input: { $substrCP: ['$obj.obj.str',4,2] },chars: "Concrete Toys open architecture"} }],[],[73356]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $toUpper: "Grocery infomediaries" },{ $ltrim: {input: '$obj.obj.obj.obj.str',chars: "connect evolve Tenge"} }],[{ $toString: { $second: { $dateToString: {date: '$obj.obj.date',timezone: "America/Los_Angeles",onNull: { $map: {input: [{ $ltrim: {input: '$obj.obj.obj.obj.str',chars: "coherent invoice Granite"} }],in: { $exp: 17417 }} }} } } }],["Avon emulation HTTP",'$str',"redundant lavender",'$obj.str'],['$obj.obj.obj.num',{ $divide: [34231,{ $add: [{ $subtract: [85925,'$obj.obj.num'] },'$num'] }] },'$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.num','$obj.num'],as: 'dena',in: { $log10: 76576 }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [74283],as: 'katharina',in: '$$katharina'} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Human withdrawal"],56781] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toUpper: "optimizing killer Automotive" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["transition"],as: 'oren',cond: { $not: [{ $isoWeek: { $toDate: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[[]]] } },'$$oren'],{ $floor: 22820 }] } } }] }} }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $second: { $dayOfMonth: new Date("2018-09-06T16:02:14.541Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["methodologies Kids"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T15:24:39.921Z",format: "%U-%G-%S-%L-%j-%U-%M-%z",timezone: "Asia/Ulaanbaatar",onError: { $substrCP: ["SDD Checking Account Director",2,16] },onNull: { $zip: {inputs: [],useLongestLength: false,defaults: []} }} } } },'$obj.obj.obj.str'],69841] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Soft silver Concrete",{ $substrCP: ['$obj.str',19,19] }],['$obj.obj.num',73636,28948],['$obj.obj.obj.obj.str',{ $rtrim: {input: { $concat: ["quantifying bricks-and-clicks CFA Franc BEAC"] },chars: "Venezuela Granite"} }],["Pass Human",'$obj.obj.obj.obj.str','$str','$obj.obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],75022] }, _id: 0}}],

        [{$project: {a: { $week: { $dateToString: {date: { $second: { $dateFromParts: {isoWeekYear: { $log10: 6554 },isoDayOfWeek: { $sqrt: '$obj.num' },hour: { $cmp: [{ $arrayToObject: [[{k: "Automotive virtual withdrawal",v: 89134}]] },{ $trim: {input: "Wooden",chars: "Electronics ivory"} }] },minute: { $ln: '$obj.obj.num' },second: { $log10: 60071 }} } },timezone: "America/Porto_Acre"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%u-%U-%H-%S-%Z-%u-%Y-%m-%u-%u-%Y-%Y",timezone: "GMT"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[93940],20930] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $concat: ['$str'] },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "system",v: 52529}]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $year: { $minute: { $dateToString: {date: '$obj.date',timezone: "Asia/Seoul",onNull: { $concatArrays: [['$obj.obj.obj.obj.num']] }} } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num'],cond: { $in: [{ $arrayElemAt: [[],'$obj.num'] },{ $zip: {inputs: [['$$this',{ $substr: ["wireless",19,19] },'$$this',"Electronics PNG"],[25566],[{ $substrBytes: [{ $substrCP: [{ $trim: {input: "Pataca",chars: { $toLower: { $toUpper: '$obj.obj.str' } }} },7,7] },9,16] },"reintermediate supply-chains"]],useLongestLength: true,defaults: []} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: { input: "override Alabama" } }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $dateToString: {date: '$obj.obj.date',onNull: { $trim: { input: { $substrBytes: ["bypassing Oregon Robust",12,1] } } }} },"Solutions"],3634] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: '$date' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T13:41:53.178Z",format: "%G-%L-%G-%%-%S",timezone: "Australia/South",onError: { $dateToString: {date: '$obj.date',timezone: "Africa/Ouagadougou",onNull: '$obj.str'} }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str',"parse HDD port"]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $rtrim: {input: { $substrCP: ['$obj.obj.str',7,9] },chars: '$obj.obj.obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $concat: ["Optional","quantify Borders",{ $substr: ['$obj.obj.obj.str',8,8] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Uganda vortals",v: 98280},{k: "Money Market Account Tuna",v: '$obj.obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',"index Granite"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$num','$obj.obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToString: { date: { $dateToString: {date: { $isoWeek: { $isoWeekYear: { $week: { $dateFromParts: {isoWeekYear: { $subtract: [55916,79887] },isoWeek: { $subtract: ['$num','$obj.num'] },isoDayOfWeek: { $sqrt: '$obj.obj.num' },second: { $pow: [4871,92092] },millisecond: { $ln: '$obj.num' }} } } } },timezone: "America/Kralendijk"} } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["sky blue",{ $trim: {input: '$obj.obj.str',chars: { $concat: ["Rustic grey",'$obj.str','$str'] }} }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Borders JBOD Administrator","bandwidth experiences Refined",{ $toString: { $dayOfMonth: { $isoDayOfWeek: { $dayOfYear: { $isoWeek: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T19:24:38.477Z",format: "%z-%U-%L-%%-%U-%w-%Y-%H-%w-%Z",timezone: "Etc/GMT-3",onError: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.num'] }} } } } } } } }],[],[],['$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $year: new Date("2018-09-05T22:34:54.902Z") }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],91245] }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],26518] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Intelligent",v: false},{k: "Nevada Awesome Metal Shoes JBOD",v: new Date("2018-09-06T13:00:24.586Z")}]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $ltrim: { input: '$obj.str' } },{ $dateToString: {date: '$obj.obj.obj.obj.date',format: "%w-%u-%u-%Z-%d-%%-%j-%%-%z-%S-%Y",timezone: "Etc/GMT-3"} }] }, _id: 0}}],

        [{$project: {a: { $second: { $week: { $year: { $isoWeekYear: { $week: { $dateFromString: {dateString: "2018-09-06T01:22:44.107Z",format: "%M-%U-%j-%j-%Y-%S",timezone: "Pacific/Marquesas",onError: { $range: [0,14] },onNull: { $toUpper: '$str' }} } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $abs: '$obj.num' },isoDayOfWeek: { $divide: ['$num',48468] },hour: { $mod: [98212,{ $add: [] }] },millisecond: { $abs: 79885 }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[40654,'$obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromString: {dateString: "2018-09-06T13:54:08.053Z",format: "%w-%G-%j-%d-%S",timezone: "America/Shiprock",onNull: { $substrBytes: [{ $substrCP: [{ $concat: [] },20,9] },5,20] }} } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T18:11:26.023Z"),timezone: "Europe/Belfast"} }, _id: 0}}],

        [{$project: {a: { $hour: { $isoDayOfWeek: { $isoWeek: { $millesecond: { $toDate: { $toLower: { $substr: [{ $substr: ["hack red e-commerce",10,2] },17,18] } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str',{ $ltrim: { input: '$str' } }],[16371],[],['$num',{ $abs: '$obj.obj.obj.num' }]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],[]],useLongestLength: false,defaults: [{}]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Face to face quantify Automotive",v: { $substr: ["aggregate Practical",17,7] }},{k: "calculate withdrawal Louisiana",v: false},{k: "Buckinghamshire",v: "Street model"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "overriding",v: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T00:32:33.961Z",onError: { $dateFromParts: {isoWeekYear: { $divide: ['$obj.obj.num',5129] },hour: { $cmp: [{ $concatArrays: [['$obj.str',{ $trim: {input: '$obj.obj.obj.str',chars: "Chief"} }],["withdrawal",'$obj.obj.str']] },{ $concat: [{ $toLower: { $substr: ["tan",18,19] } }] }] },second: { $mod: ['$num','$obj.obj.obj.num'] },millisecond: { $ceil: 89627 },timezone: "GB-Eire"} },onNull: { $toUpper: '$obj.obj.str' }} },iso8601: true} }},{k: "Practical Frozen Gloves",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"Steel Investment Account"],73598] }, _id: 0}}],

        [{$project: {a: { $hour: { $hour: { $dayOfWeek: { $week: new Date("2018-09-06T18:08:04.325Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Upgradable",v: { $toLower: '$obj.obj.obj.str' }}]] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToParts: {date: { $dayOfYear: { $hour: { $second: { $dateToString: {date: '$obj.obj.obj.obj.date',format: "%u-%M-%Z-%%",timezone: "America/Catamarca"} } } } },timezone: "Europe/San_Marino",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "innovate",v: { $add: [] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $abs: '$obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: { $isoWeek: { $dateFromParts: {isoWeekYear: { $trunc: '$num' },isoWeek: { $exp: 28651 },isoDayOfWeek: { $log10: 93643 },hour: { $log10: 55642 },timezone: "Etc/GMT+0"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "haptic Liaison" }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.num',"Avon Borders Plaza",false]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[78167],{ $log10: '$obj.obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],[{ $month: { $toDate: { $substrBytes: ['$str',7,3] } } }],['$obj.obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfMonth: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T18:25:41.192Z"),format: "%G-%m-%M-%M-%%-%S"} } } },format: "%w-%L-%z-%z-%%-%m-%%-%j-%L",timezone: "America/Anguilla"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],{ $cmp: [{ $arrayToObject: [[[],[],[60878,86881,'$obj.obj.obj.num'],['$str'],['$obj.str'],[{ $substrCP: ["Web Grocery",17,13] },{ $toUpper: "applications copying" }]]] },{ $arrayToObject: [[{k: "array",v: false},{k: "Specialist",v: true},{k: "bypass solid state Liaison",v: '$obj.date'}]] }] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[true],67276] }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromString: {dateString: "2018-09-06T14:50:24.189Z",format: "%S-%Z-%Y-%m-%H-%z-%z-%G-%Y"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[32819]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "unleash Refined Metal",v: false},{k: "interface Dale",v: '$obj.obj.obj.date'},{k: "Computer",v: "invoice digital"}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $trim: { input: '$obj.obj.obj.obj.str' } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toLower: "optimize Borders Pizza" } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $in: [{ $concat: [{ $substrBytes: [{ $toString: { $arrayToObject: [[{k: "Fantastic Wooden Tuna functionalities",v: '$$this'},{k: "Hollow Electronics",v: 53994}]] } },12,2] }] },{ $objectToArray: '$obj' }] }} }, _id: 0}}],

        [{$project: {a: { $substr: ["Credit Card Account National Incredible Soft Fish",13,19] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "pixel hub",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Streamlined withdrawal Rapid",'$obj.obj.obj.str',"Object-based Human Cambridgeshire"],['$num','$obj.obj.num'],['$obj.obj.obj.str',{ $dateToString: { date: new Date("2018-09-06T13:29:59.677Z") } }],['$obj.str',{ $substr: [{ $toString: { $arrayElemAt: [[],'$num'] } },9,0] }],['$obj.obj.obj.date',true]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfWeek: { $minute: { $isoWeek: { $dateFromParts: {year: { $subtract: [83384,'$obj.obj.obj.num'] },month: { $subtract: [{ $pow: [64882,'$obj.obj.num'] },'$obj.num'] },second: { $floor: { $mod: [99335,78890] } },millisecond: { $ln: '$obj.num' }} } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toLower: "Reunion Brand initiatives" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',{ $concat: [] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Montana Terrace",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[30590],[{ $dateToString: {date: new Date("2018-09-06T04:16:18.823Z"),format: "%H-%L-%M-%j-%M-%d-%j-%z-%u-%z-%L",timezone: "Africa/Niamey",onNull: { $concatArrays: [["Producer Faroe Islands Tala","calculate Kina"],[{ $concat: [] },'$obj.str','$str'],[],['$obj.num'],[{ $toLower: "connecting" }]] }} },'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],21119] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "quantifying",v: 66586},{k: "Plain 5th generation",v: "adapter Strategist"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Chief Universal Taka",v: true},{k: "platforms",v: "Frozen Frozen"}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrCP: ['$obj.obj.obj.obj.str',13,17] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[72688],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: { $substrBytes: ["paradigm",2,8] } }],18687] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str','$obj.str'],7230] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "streamline Creative seize",v: { $substr: ["Licensed Plastic Fish Rustic Incredible",15,5] }}]] }, _id: 0}}],

        [{$project: {a: { $range: [8,19] }, _id: 0}}],

        [{$project: {a: { $second: { $millesecond: { $hour: { $dateFromString: {dateString: "2018-09-06T00:11:54.936Z",onError: { $arrayToObject: [[['$obj.obj.str']]] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "bypassing" }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $millesecond: { $year: { $toDate: { $substr: ["Rubber",4,10] } } } } }, _id: 0}}],

        [{$project: {a: { $concat: ["Soft","Isle Markets"] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["GB Jewelery","Soap hacking holistic"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $hour: { $isoWeekYear: { $dateToString: {date: { $minute: { $isoDayOfWeek: { $minute: '$obj.obj.date' } } },format: "%Y-%%-%G-%M-%d-%m-%d-%G-%%-%%-%z-%z",timezone: "Europe/Guernsey"} } } } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $rtrim: { input: { $substrBytes: ['$obj.str',7,17] } } },'$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $millesecond: { $hour: { $toDate: { $arrayToObject: [[{k: "withdrawal",v: true}]] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Vietnam",v: "card ability copy"},{k: "cross-platform transmitter Chicken",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T16:40:20.209Z",format: "%Z-%u-%%-%U-%u-%V-%S-%%",timezone: "MST7MDT",onNull: { $arrayToObject: [[[],[],['$obj.obj.str',"De-engineered stable Personal Loan Account"]]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["morph Pitcairn Islands"],[],[62813,'$obj.obj.obj.num',{ $log: [72900,'$obj.num'] },'$obj.num'],[86076],[{ $substr: ["Fantastic Steel Ball",3,13] },'$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["silver Arkansas"],71505] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $isoWeekYear: { $isoWeek: { $dateFromParts: {year: { $ln: { $sqrt: '$obj.obj.obj.obj.num' } },day: { $floor: 88416 },second: { $mod: ['$obj.obj.num','$num'] },millisecond: { $abs: '$num' },timezone: "America/St_Barthelemy"} } } },timezone: "Asia/Hong_Kong"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "payment",v: new Date("2018-09-05T23:00:04.935Z")},{k: "Bedfordshire Applications Lead",v: { $isoWeek: { $millesecond: { $isoDayOfWeek: { $second: { $dayOfMonth: { $minute: '$obj.obj.date' } } } } } }},{k: "Shoes Islands",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Profit-focused Fish",'$obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $range: [19,0] }, _id: 0}}],

        [{$project: {a: { $range: [7,11] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateToString: {date: '$obj.date',format: "%w-%G-%L-%j-%m-%M-%%-%M-%m-%L"} },timezone: "Australia/Lord_Howe",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $hour: { $dateFromString: {dateString: "2018-09-06T03:48:36.922Z",timezone: "Africa/Douala",onError: { $substrBytes: ['$obj.str',13,2] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Arizona"],[true,{ $dateToString: {date: '$obj.obj.obj.obj.date',format: "%Z-%j-%z-%u-%u-%L-%%",timezone: "Pacific/Yap",onNull: { $rtrim: {input: '$obj.obj.str',chars: '$obj.obj.str'} }} }],[],[],[49845,{ $log: ['$obj.obj.obj.num',73836] }]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $ln: 28449 },'$num']] }, _id: 0}}],

        [{$project: {a: { $year: { $minute: { $isoWeek: { $dayOfWeek: { $hour: { $dayOfMonth: { $isoDayOfWeek: { $isoWeek: { $month: { $minute: { $isoDayOfWeek: { $year: { $week: new Date("2018-09-05T22:51:30.335Z") } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $toString: { $arrayElemAt: [[21517,'$obj.obj.obj.obj.num'],28830] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num',44685],[{ $concat: ["redundant",{ $toUpper: "AI distributed" },"Home Loan Account Books"] }],['$obj.obj.obj.obj.str',{ $rtrim: {input: "PCI Uganda Shilling",chars: { $dateToString: {date: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T06:04:47.495Z"),format: "%Z-%S-%L-%w-%%-%j-%U-%M",timezone: "US/Central",onNull: '$obj.str'} } },timezone: "Australia/Perth",onNull: '$obj.obj.str'} }} },"Rubber UIC-Franc"],['$num',81353,49977],["back-end bifurcated"],[]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Proactive"]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $dateToString: {date: new Date("2018-09-06T11:53:24.526Z"),format: "%j-%z-%j-%S-%d-%L",onNull: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T05:03:26.244Z",onNull: { $week: { $hour: { $dateToParts: {date: { $toDate: { $toUpper: '$obj.obj.str' } },timezone: "Europe/Kiev"} } } }} } }} }],as: 'amalia',in: { $multiply: ['$obj.obj.obj.obj.num','$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num','$obj.obj.obj.obj.num',22147],["Facilitator"],['$obj.obj.str',{ $ltrim: {input: "Investment Account Salad",chars: "Tunisian Dinar local area network"} }],['$str'],[],[13469],[{ $toUpper: { $dateToString: {date: { $hour: { $dayOfWeek: { $dateFromParts: {year: { $divide: ['$obj.num',{ $add: [] }] },month: { $floor: 19505 },day: { $ceil: '$obj.obj.num' },hour: { $ceil: { $size: [[49604]] } }} } } },format: "%L-%z-%z-%d-%w-%M-%Y-%V-%G-%L-%V-%u",timezone: "Europe/Sarajevo",onNull: '$obj.obj.obj.obj.str'} } }]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$str',4,13] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["capacitor AGP port","Electronics port",{ $substrCP: [{ $toString: { $ltrim: { input: "Assurance Kansas Infrastructure" } } },0,8] }],[12576],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "end-to-end Borders" },{ $substrBytes: ['$obj.obj.str',14,12] }],74501] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',61478,'$obj.obj.obj.num'],61946] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Europe/Istanbul",onNull: { $substr: ['$obj.str',13,1] }} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: { $dateFromParts: {isoWeekYear: { $subtract: ['$obj.obj.num','$num'] },hour: { $abs: 25006 },minute: { $divide: [2145,'$num'] },second: { $multiply: [{ $add: [] }] },timezone: "Australia/Melbourne"} } } }, _id: 0}}],

        [{$project: {a: { $toUpper: "Syrian Pound programming" }, _id: 0}}],

        [{$project: {a: { $concat: ["Kwanza real-time"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Investment Account",v: { $millesecond: { $week: { $minute: { $dateToString: { date: '$obj.obj.date' } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.obj.num'],['$obj.obj.obj.str'],[{ $toUpper: "Algerian Dinar" },'$obj.obj.obj.obj.str'],[],['$obj.obj.obj.obj.num',61144,61307]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',10557,'$obj.obj.obj.obj.num'],'$num'] }, _id: 0}}],

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
