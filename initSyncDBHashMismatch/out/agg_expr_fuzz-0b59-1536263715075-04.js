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
        return coll.insert({_id: 2521,str: "monitor mobile",num: 38665,date: new Date("2018-09-06T10:35:45.934Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2522,str: "salmon pixel South Carolina",num: 6183,array: ["supply-chains turquoise",6428,28596,[],"Bahamas Marketing Gourde US Dollar",92005,new Date("2018-09-05T20:20:57.256Z"),{_id: 2523,str: "Fresh Liaison",num: 85601,date: new Date("2018-09-06T18:03:01.877Z"),array: []},63592,new Date("2018-09-05T22:54:16.625Z"),{_id: 2524,str: "portal Small Granite Shirt",num: 5502,date: new Date("2018-09-06T11:20:05.338Z"),obj: {_id: 2525,date: new Date("2018-09-06T01:55:02.979Z"),array: [new Date("2018-09-05T21:10:20.216Z"),new Date("2018-09-06T10:52:32.170Z"),"Plastic"],obj: {}}},"compressing Rustic"],obj: {_id: 2526,str: "online",num: 26262,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2527,str: "connecting",num: 72177,date: new Date("2018-09-06T06:17:33.105Z"),array: [],obj: {_id: 2528,str: "Director override Chief",num: 77692,date: new Date("2018-09-05T22:17:16.110Z")}});
    },

    function(coll) {
        return coll.insert({_id: 2529,str: "infrastructure Computer",num: 48794,date: new Date("2018-09-06T06:46:44.382Z"),array: [],obj: {_id: 2530,str: "Global",num: 75212,date: new Date("2018-09-06T06:46:08.248Z"),array: [90648,new Date("2018-09-06T00:35:19.736Z"),new Date("2018-09-06T14:09:56.700Z"),20256,"Practical Metal Hat application","Estates",[48986,{_id: 2531,str: "Future-proofed",date: new Date("2018-09-06T03:11:24.452Z"),obj: {}},"mesh project"],new Date("2018-09-06T00:52:11.621Z"),{_id: 2532,num: 92378,date: new Date("2018-09-05T22:51:51.527Z"),array: [],obj: {_id: 2533,str: "system",array: []}},[1898],new Date("2018-09-06T12:16:53.887Z"),[[]]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2534,str: "Indian Rupee Ngultrum Manager",num: 58292,array: ["initiative",new Date("2018-09-06T15:35:37.108Z"),53235,new Date("2018-09-06T13:49:59.535Z"),"Brazilian Real Borders",new Date("2018-09-06T09:22:03.076Z"),{_id: 2535,str: "Switchable",num: 37896,date: new Date("2018-09-06T04:55:11.024Z"),array: [],obj: {}},29068,{_id: 2536,num: 27198,date: new Date("2018-09-06T02:25:44.610Z"),array: [],obj: {_id: 2537,str: "SAS Sri Lanka",date: new Date("2018-09-06T13:01:22.583Z")}},79826,"Plastic Ball","Spain"],obj: {_id: 2538,str: "Crossroad Checking Account Bridge",num: 67856,date: new Date("2018-09-06T19:36:58.510Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2539,str: "Ergonomic Granite Chips open-source",num: 34474,date: new Date("2018-09-06T02:01:16.934Z"),array: [8679,new Date("2018-09-06T17:40:32.414Z"),"Kentucky yellow De-engineered","District Cambridgeshire",{_id: 2540,str: "Cheese Court",date: new Date("2018-09-06T05:10:38.675Z"),array: [],obj: {}},"experiences International",{_id: 2541,num: 66357,date: new Date("2018-09-05T23:55:13.132Z"),obj: {_id: 2542,str: "UIC-Franc Sleek technologies",num: 14948,date: new Date("2018-09-06T13:00:03.521Z"),array: [],obj: {}}},[],"Engineer Sharable",new Date("2018-09-06T07:51:50.975Z"),44847,[{_id: 2543,str: "Union",date: new Date("2018-09-06T09:35:33.519Z"),array: [[]]},new Date("2018-09-06T16:45:59.198Z")],new Date("2018-09-06T10:43:00.287Z")],obj: {_id: 2544,num: 47445}});
    },

    function(coll) {
        return coll.insert({_id: 2545,str: "COM Outdoors",num: 21136,array: [34478,new Date("2018-09-06T01:43:03.176Z"),new Date("2018-09-06T06:44:35.063Z"),"Nebraska Licensed",new Date("2018-09-06T07:30:23.610Z"),new Date("2018-09-06T09:03:32.923Z"),{_id: 2546,str: "Quality",num: 35656,date: new Date("2018-09-06T19:27:56.972Z"),array: ["Savings Account Electronics",[]],obj: {}},6466,"Mills Investment Account","Clothing calculating",56334,new Date("2018-09-06T18:33:42.581Z"),{_id: 2547,num: 89501,date: new Date("2018-09-06T18:13:58.484Z"),obj: {_id: 2548,str: "Realigned",num: 52281,date: new Date("2018-09-06T16:17:33.519Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 2549,str: "Yuan Renminbi impactful",date: new Date("2018-09-06T13:00:20.921Z"),array: [new Date("2018-09-06T03:31:58.179Z"),74757,"bandwidth Dynamic","Gorgeous Tonga hack",{_id: 2550,str: "fuchsia moratorium Direct",num: 28674,date: new Date("2018-09-06T07:10:45.831Z"),array: ["infomediaries Hills",88749,new Date("2018-09-05T22:47:42.122Z"),50638],obj: {}},new Date("2018-09-06T19:52:12.986Z"),"generate",[],[],84518],obj: {_id: 2551,str: "Customer-focused",num: 28702,date: new Date("2018-09-06T04:03:21.501Z")}});
    },

    function(coll) {
        return coll.insert({_id: 2552,str: "encryption California",num: 8597,date: new Date("2018-09-06T02:56:03.139Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2553,str: "infrastructures",num: 15637,date: new Date("2018-09-06T05:05:41.069Z"),array: [47550,"Director Direct Zloty","Home",new Date("2018-09-06T18:38:09.730Z"),{_id: 2554,str: "Berkshire Leone Cambridgeshire",num: 66403,date: new Date("2018-09-06T19:25:18.900Z"),array: [],obj: {}},{_id: 2555,num: 88011,date: new Date("2018-09-06T16:33:51.220Z"),obj: {_id: 2556,array: [[91478,"open-source",new Date("2018-09-05T21:58:42.774Z")],"Antigua and Barbuda",new Date("2018-09-06T00:40:45.516Z")],obj: {_id: 2557,str: "optimize Configuration models",num: 39789,array: ["Metal Bedfordshire",[]],obj: {}}}},92749,new Date("2018-09-06T13:13:37.942Z"),new Date("2018-09-06T14:30:58.073Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2558,str: "Synergistic well-modulated Mexico",date: new Date("2018-09-06T11:42:35.255Z"),array: ["Alabama",57021,new Date("2018-09-06T09:01:48.490Z"),[78648,"quantifying calculating Toys"],"Arizona maximized open-source",new Date("2018-09-06T11:20:17.389Z"),new Date("2018-09-05T21:38:04.618Z"),{_id: 2559,str: "Switchable",num: 85248,date: new Date("2018-09-06T14:46:37.490Z"),array: [],obj: {}},{_id: 2560,str: "withdrawal invoice Chips",num: 65167,date: new Date("2018-09-06T09:40:59.669Z"),array: [],obj: {_id: 2561,num: 51204,date: new Date("2018-09-06T15:08:50.557Z"),obj: {}}},new Date("2018-09-06T03:02:09.096Z"),4897,97545,5600,new Date("2018-09-05T22:00:35.820Z")],obj: {_id: 2562,str: "bypass Kentucky index",num: 18318,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2563,num: 26923,date: new Date("2018-09-05T23:07:06.158Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2564,num: 68878,date: new Date("2018-09-06T10:54:07.833Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2565,str: "Cordoba Oro payment",num: 70217,date: new Date("2018-09-06T02:15:07.343Z"),array: ["IB open-source","programming Concrete",86708,new Date("2018-09-06T11:44:48.139Z"),new Date("2018-09-06T10:13:41.362Z"),["interface seamless",{_id: 2566,str: "convergence portals",date: new Date("2018-09-06T07:48:10.067Z"),array: [],obj: {}}],90525,new Date("2018-09-06T09:23:38.742Z"),"Intranet Sleek Fresh Gloves",new Date("2018-09-06T17:56:21.063Z"),6529,24879],obj: {_id: 2567,str: "empower parse Cambridgeshire",num: 5573,date: new Date("2018-09-06T00:50:17.338Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2568,str: "reboot",num: 53112,date: new Date("2018-09-06T04:18:47.154Z"),array: [new Date("2018-09-06T14:12:19.938Z"),64744,[],["scale",76060],"strategize",[],"Metal",new Date("2018-09-06T18:12:44.053Z"),97759,{_id: 2569,str: "Customizable parse",num: 2450,date: new Date("2018-09-06T13:17:58.868Z"),array: [],obj: {}},new Date("2018-09-06T03:59:41.799Z"),{_id: 2570,num: 96276,obj: {_id: 2571,str: "withdrawal user-facing",num: 69749,date: new Date("2018-09-06T03:03:27.671Z"),array: [15947],obj: {_id: 2572,num: 37538,date: new Date("2018-09-06T15:34:31.682Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 2573,str: "Turnpike Managed",date: new Date("2018-09-06T13:43:26.979Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2574,str: "hard drive SMS",num: 17322,array: ["Checking Account",68774,39941,new Date("2018-09-06T17:34:00.199Z"),"generate Missouri envisioneer",new Date("2018-09-06T10:55:38.286Z"),{_id: 2575,str: "knowledge base implement",num: 83596,date: new Date("2018-09-06T02:45:26.592Z"),array: [72124,29620,new Date("2018-09-06T10:45:19.965Z"),[]],obj: {}},{_id: 2576,date: new Date("2018-09-05T20:42:50.370Z"),array: [],obj: {}},"connecting","Gloves Avon"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2577,str: "moratorium",num: 94945,date: new Date("2018-09-06T15:57:22.151Z"),array: [new Date("2018-09-06T15:32:14.140Z"),5458,59141,"Philippine Peso","circuit",new Date("2018-09-05T22:58:31.301Z"),new Date("2018-09-06T18:01:02.674Z"),[],"calculating",new Date("2018-09-06T02:39:40.610Z"),22533],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2578,str: "Up-sized",num: 91387,date: new Date("2018-09-06T18:53:45.921Z"),array: [new Date("2018-09-05T22:05:35.751Z"),91428,{_id: 2579,num: 34948,date: new Date("2018-09-06T15:56:05.279Z")},"JBOD Shoes",[],57881,{_id: 2580,str: "Jewelery Checking Account",num: 94556,date: new Date("2018-09-06T03:07:03.427Z"),array: [new Date("2018-09-06T12:33:09.180Z")],obj: {_id: 2581,str: "withdrawal",date: new Date("2018-09-06T03:57:18.320Z"),array: [],obj: {}}},20159,new Date("2018-09-05T23:57:05.103Z"),"silver deposit",75183,[],new Date("2018-09-06T06:29:13.056Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2582,str: "Fresh invoice",num: 14130,date: new Date("2018-09-06T11:50:30.167Z"),array: [],obj: {_id: 2583,str: "azure",num: 49540,date: new Date("2018-09-05T23:31:28.681Z"),array: [97037,new Date("2018-09-05T20:26:36.542Z"),"Via cross-platform",{_id: 2584,str: "withdrawal",array: [[],new Date("2018-09-05T20:39:01.638Z"),"purple Wells",73643,new Date("2018-09-06T01:43:01.739Z")]},"haptic input",new Date("2018-09-06T17:45:24.380Z"),48402,40389],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2585,str: "Mouse quantifying",num: 87841,date: new Date("2018-09-06T07:12:57.266Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2586,str: "payment deposit District",num: 58371,date: new Date("2018-09-06T09:07:09.263Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2587,str: "system Chips",num: 59891,date: new Date("2018-09-06T06:07:23.036Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2588,str: "Wall",num: 22011,date: new Date("2018-09-06T19:41:12.519Z"),array: ["bi-directional Associate",63751,new Date("2018-09-06T18:39:08.997Z"),new Date("2018-09-06T09:26:26.759Z"),33869,61932,new Date("2018-09-06T14:30:55.042Z"),["teal orchestrate system","Oregon architect",new Date("2018-09-06T16:45:45.448Z"),{_id: 2589,str: "Internal solid state",num: 28168,date: new Date("2018-09-05T22:45:45.122Z"),array: [],obj: {_id: 2590,date: new Date("2018-09-05T20:00:45.613Z"),array: [],obj: {}}},new Date("2018-09-06T15:19:11.452Z"),{_id: 2591,str: "program",num: 96966,array: ["primary"],obj: {}}],[],new Date("2018-09-06T18:15:33.244Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2592,num: 13182,date: new Date("2018-09-06T03:29:08.385Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2593,str: "Licensed Producer Engineer",num: 19432,date: new Date("2018-09-06T14:11:59.009Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2594,str: "seize Trinidad and Tobago Dollar plug-and-play",num: 60702,date: new Date("2018-09-06T18:20:23.272Z"),obj: {_id: 2595,str: "Hat Directives",num: 81342,array: [63289,new Date("2018-09-05T21:57:29.812Z"),"Product Incredible",[78831],"Tajikistan","Quality quantify Avon",[],new Date("2018-09-06T08:01:53.862Z"),[],25658,"Illinois hack optimal",new Date("2018-09-06T16:01:53.450Z"),"Graphic Interface generating"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2596,str: "Bedfordshire",num: 2928,date: new Date("2018-09-06T11:40:59.864Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2597,str: "Small Steel Shoes Ohio Unbranded",num: 30317,date: new Date("2018-09-06T07:03:10.290Z"),array: [new Date("2018-09-06T15:30:59.179Z"),"invoice Ethiopia Books",new Date("2018-09-06T05:14:51.238Z"),"firewall HDD markets",60727,58611,39416,new Date("2018-09-06T17:30:17.859Z"),new Date("2018-09-06T11:06:15.157Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2598,str: "Divide 24/7",num: 46969,date: new Date("2018-09-05T21:47:57.396Z"),array: ["Auto Loan Account neural",54162,new Date("2018-09-06T18:55:13.155Z"),24290,"markets Florida",{_id: 2599,str: "auxiliary orange",num: 81757,date: new Date("2018-09-05T22:42:30.469Z"),array: [],obj: {_id: 2600,str: "Administrator Manager Tools",obj: {}}},new Date("2018-09-06T10:29:21.963Z"),[],{_id: 2601,date: new Date("2018-09-06T19:42:13.270Z"),array: ["copy deploy Borders",3179,49159,"rich Metal Investor"],obj: {_id: 2602,str: "Borders system",num: 72808,date: new Date("2018-09-06T04:02:13.130Z"),array: [new Date("2018-09-05T23:42:54.424Z")],obj: {_id: 2603,str: "Democratic People's Republic of Korea paradigm Health",num: 24106,array: [],obj: {}}}},"Self-enabling Global Bedfordshire"]});
    },

    function(coll) {
        return coll.insert({_id: 2604,str: "Home Loan Account",num: 59413,date: new Date("2018-09-06T18:18:18.587Z"),array: [21368,"pricing structure primary programming",30982,new Date("2018-09-06T00:57:21.662Z"),"Puerto Rico",new Date("2018-09-06T00:27:41.195Z"),8309,new Date("2018-09-06T16:14:18.854Z"),[{_id: 2605,str: "Decentralized",num: 8568,date: new Date("2018-09-06T00:25:15.195Z"),array: []},{_id: 2606,num: 90297,array: [],obj: {_id: 2607,str: "compressing Checking Account Squares",num: 62378,date: new Date("2018-09-06T00:05:45.273Z"),obj: {}}},new Date("2018-09-06T12:08:40.302Z"),"Graphic Interface",[],"COM networks"]]});
    },

    function(coll) {
        return coll.insert({_id: 2608,str: "red interface",num: 67590,date: new Date("2018-09-06T06:28:03.625Z"),array: [new Date("2018-09-06T06:41:38.338Z"),16758,new Date("2018-09-06T08:06:06.355Z"),new Date("2018-09-06T19:47:04.238Z"),"Branding Consultant Bacon","Refined",17471,3174,"payment",["dynamic envisioneer Advanced"],{_id: 2609,str: "ivory",date: new Date("2018-09-06T11:49:38.331Z"),obj: {_id: 2610,str: "Niue",num: 10271,array: [],obj: {_id: 2611,str: "1080p Unbranded Frozen Towels Credit Card Account",num: 75876,array: [{_id: 2612,date: new Date("2018-09-05T20:17:52.761Z"),array: [],obj: {}},"Afghani",[]]}}},21028],obj: {_id: 2613,str: "France",num: 92917,date: new Date("2018-09-06T12:14:45.260Z"),array: [new Date("2018-09-06T04:19:32.709Z"),new Date("2018-09-05T21:02:26.555Z"),[new Date("2018-09-06T10:01:08.695Z")],{_id: 2614,str: "index",num: 93841,date: new Date("2018-09-06T18:14:54.613Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 2615,num: 515,date: new Date("2018-09-06T00:22:28.251Z"),array: [],obj: {_id: 2616,str: "Credit Card Account users",num: 60372,date: new Date("2018-09-06T08:59:08.515Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2617,str: "generating firewall Grass-roots",num: 63575,date: new Date("2018-09-06T03:01:19.230Z"),array: [],obj: {_id: 2618,num: 16436,date: new Date("2018-09-06T17:25:23.682Z"),array: [52111,new Date("2018-09-06T12:09:58.531Z"),"quantify",{_id: 2619,str: "Electronics extend",date: new Date("2018-09-06T03:56:21.942Z"),obj: {}},75229,"Plastic",new Date("2018-09-05T19:58:18.320Z"),"Director West Virginia payment",new Date("2018-09-06T06:20:52.906Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2620,str: "Crest",num: 51523,date: new Date("2018-09-05T20:42:39.918Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2621,str: "open-source",num: 53165,date: new Date("2018-09-06T19:49:51.037Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2622,str: "teal",num: 68678,date: new Date("2018-09-06T09:26:53.735Z"),array: [],obj: {_id: 2623,str: "Future reciprocal Zimbabwe",num: 94550,date: new Date("2018-09-06T05:54:04.135Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2624,str: "hub",num: 38443,date: new Date("2018-09-06T03:39:29.373Z"),array: [],obj: {_id: 2625,str: "Business-focused",num: 81863,date: new Date("2018-09-06T16:02:21.686Z"),array: [33380,new Date("2018-09-06T03:26:17.347Z"),"Money Market Account software synthesizing","Games",new Date("2018-09-06T15:26:26.292Z"),new Date("2018-09-06T19:25:34.154Z"),[new Date("2018-09-06T02:45:13.537Z")],35146,18316,{_id: 2626,num: 5358,date: new Date("2018-09-06T08:52:52.911Z"),array: [],obj: {_id: 2627,date: new Date("2018-09-06T06:21:17.621Z"),obj: {}}},33497,{_id: 2628,str: "input",num: 73521},41771],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2629,str: "Lead",num: 44455,date: new Date("2018-09-06T11:40:57.792Z"),array: [new Date("2018-09-05T23:24:20.046Z"),new Date("2018-09-06T04:38:00.845Z"),52771,"Implementation",96824,"Bedfordshire Generic black",[],7840,{_id: 2630,str: "cohesive De-engineered bottom-line",num: 47241,date: new Date("2018-09-06T07:48:27.161Z"),array: [],obj: {_id: 2631,str: "Tactics Landing Delaware",num: 36513,date: new Date("2018-09-06T15:27:07.470Z"),array: ["Borders leading-edge",[]],obj: {_id: 2632,num: 2605,array: [new Date("2018-09-06T05:58:30.026Z")],obj: {}}}},70121,new Date("2018-09-06T14:23:39.114Z"),{_id: 2633,str: "Ergonomic",num: 24680,date: new Date("2018-09-06T18:36:03.363Z")},new Date("2018-09-06T00:39:17.176Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2634,str: "payment Sausages",num: 99168,date: new Date("2018-09-06T12:54:10.034Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2635,str: "Consultant contingency",date: new Date("2018-09-06T00:01:43.759Z"),array: [36830,"orchestrate invoice",new Date("2018-09-06T15:54:54.849Z"),{_id: 2636,str: "Refined PCI",num: 31434,date: new Date("2018-09-06T02:27:26.567Z"),array: [new Date("2018-09-06T00:08:14.519Z")],obj: {}},"Corporate transmitting Computer",new Date("2018-09-06T01:56:44.925Z"),1821,37065,"Denar",[],[]],obj: {_id: 2637,num: 47512,date: new Date("2018-09-06T11:53:24.603Z"),array: ["quantify navigating",65254,new Date("2018-09-06T18:44:11.785Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2638,str: "hack panel",num: 67384,date: new Date("2018-09-06T00:54:43.836Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2639,str: "revolutionary ROI Rustic",num: 35756,date: new Date("2018-09-06T14:49:58.793Z"),array: [new Date("2018-09-06T09:06:52.447Z"),{_id: 2640,str: "scalable",num: 68661,date: new Date("2018-09-06T14:13:45.063Z"),array: [],obj: {_id: 2641,num: 13457,date: new Date("2018-09-06T18:21:45.444Z"),array: []}},"Metical connecting",98669,new Date("2018-09-06T02:02:40.931Z"),"cross-platform Handcrafted Wooden Computer global",new Date("2018-09-06T07:35:37.350Z"),15844,"Bedfordshire Orchestrator bricks-and-clicks","programming Ramp",new Date("2018-09-06T07:59:28.253Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2642,str: "Electronics",num: 40202,date: new Date("2018-09-06T02:31:48.018Z"),array: [],obj: {_id: 2643,str: "Concrete firmware Music",num: 96801,date: new Date("2018-09-06T04:20:55.712Z"),array: [60198,new Date("2018-09-06T00:28:09.282Z"),15072,new Date("2018-09-06T07:47:59.050Z"),"Illinois","Executive background",new Date("2018-09-05T20:50:52.454Z"),65772,["Usability",{_id: 2644,str: "navigating product",num: 92625,date: new Date("2018-09-06T01:40:01.589Z")},91446,new Date("2018-09-06T08:36:41.920Z")],"Cheese",17735],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2645,str: "Centers Generic Concrete Salad evolve",num: 69511,date: new Date("2018-09-06T16:43:48.923Z"),array: [new Date("2018-09-06T16:45:05.608Z"),[],65230,63727,"hack Outdoors",new Date("2018-09-06T17:54:27.130Z"),new Date("2018-09-06T13:44:41.732Z"),"Cambridgeshire Avon ubiquitous",46737,new Date("2018-09-06T13:59:35.033Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2646,str: "copy Industrial",num: 50084,date: new Date("2018-09-06T18:03:34.920Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2647,str: "Tasty secured line",num: 73617,date: new Date("2018-09-05T21:57:56.988Z"),array: ["feed Generic Directives",new Date("2018-09-05T21:08:47.756Z"),new Date("2018-09-06T09:52:26.259Z"),[],{_id: 2648,str: "Books Games",date: new Date("2018-09-05T23:57:28.712Z"),array: [new Date("2018-09-06T02:08:05.802Z"),29632,new Date("2018-09-06T03:57:23.540Z"),{_id: 2649,str: "Sleek Plastic Pizza",num: 2591,date: new Date("2018-09-06T00:49:12.913Z"),array: [],obj: {_id: 2650,str: "Data",num: 15993,date: new Date("2018-09-06T14:00:24.981Z"),array: [],obj: {_id: 2651,num: 11036}}}]},"ADP payment Forward",92665,new Date("2018-09-06T17:16:47.300Z"),90023,"Designer Group Land",[{_id: 2652,str: "Somalia Metal",num: 38732,obj: {_id: 2653,date: new Date("2018-09-06T06:02:37.494Z"),array: ["Profound",69705]}},[]]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2654,str: "circuit",num: 46748,date: new Date("2018-09-06T17:58:55.035Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2655,str: "calculate Maryland Comoro Franc",num: 58569,array: [],obj: {_id: 2656,str: "Handmade Soft Pizza system engine",num: 58412,date: new Date("2018-09-06T15:41:07.227Z"),array: [90818,82583,new Date("2018-09-06T12:47:07.034Z"),{_id: 2657,str: "Algeria Program",num: 51332,date: new Date("2018-09-06T06:52:03.888Z"),array: [],obj: {}},"1080p enable Pound Sterling",new Date("2018-09-06T10:02:45.893Z"),96612,"application mindshare",new Date("2018-09-06T02:54:56.563Z"),"Sleek Frozen Sausages",[4273,new Date("2018-09-06T07:42:51.538Z"),[58620,"Internal"],"Granite"],48120]}});
    },

    function(coll) {
        return coll.insert({_id: 2658,str: "Causeway PNG",num: 88587,date: new Date("2018-09-05T20:25:41.999Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2659,str: "adapter",num: 16533,date: new Date("2018-09-06T05:15:44.277Z"),array: ["Tasty Agent input","New York teal Way",[3557,new Date("2018-09-06T10:55:23.537Z")],{_id: 2660,num: 13436,date: new Date("2018-09-06T09:11:24.000Z"),array: [new Date("2018-09-06T04:48:26.104Z"),63199,37919],obj: {}},new Date("2018-09-06T04:17:47.430Z"),"Nepal static",{_id: 2661,str: "hack Internal metrics",date: new Date("2018-09-06T18:31:09.620Z"),obj: {_id: 2662,str: "Analyst Borders",num: 36728,date: new Date("2018-09-06T07:37:26.491Z"),array: [],obj: {}}},99698,[],{_id: 2663,str: "hacking SMS",num: 32153}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2664,str: "Synergistic Plastic",num: 94934,date: new Date("2018-09-06T10:52:54.786Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2665,str: "Bedfordshire paradigms leading-edge",num: 56995,date: new Date("2018-09-06T09:13:37.120Z"),array: ["Generic",22153,new Date("2018-09-06T08:35:34.776Z"),68344,39891,"Implementation static integrate",[]],obj: {_id: 2666,str: "zero administration",date: new Date("2018-09-06T02:43:33.336Z"),obj: {_id: 2667,str: "Up-sized",date: new Date("2018-09-06T08:35:23.716Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 2668,str: "overriding Sleek",num: 60325,date: new Date("2018-09-06T19:25:39.729Z"),array: [],obj: {_id: 2669,str: "utilize Re-engineered Stand-alone",num: 76070,date: new Date("2018-09-06T15:43:08.947Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2670,str: "Hills",num: 64762,date: new Date("2018-09-06T00:06:52.720Z"),array: ["Wooden grey",73014,[79334,[],new Date("2018-09-05T23:07:33.112Z")],{_id: 2671,str: "Savings Account",date: new Date("2018-09-05T23:57:05.803Z"),array: [],obj: {_id: 2672,str: "calculating",date: new Date("2018-09-06T16:07:35.219Z"),array: [[new Date("2018-09-06T11:11:23.574Z"),53873]],obj: {_id: 2673,num: 30954,date: new Date("2018-09-06T17:02:41.603Z"),array: [],obj: {_id: 2674,str: "Generic Clothing",array: [],obj: {}}}}},"CSS Checking Account Bike",{_id: 2675,num: 38644,date: new Date("2018-09-06T12:34:08.041Z")},"virtual",73923,new Date("2018-09-06T03:24:51.322Z"),"Incredible Incredible Rubber Mouse JSON",17669,new Date("2018-09-06T12:05:22.375Z"),new Date("2018-09-05T23:18:56.362Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2676,str: "Money Market Account index granular",num: 32496,date: new Date("2018-09-06T11:55:50.668Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2677,str: "Tasty interface Music",num: 52802,date: new Date("2018-09-06T04:24:03.464Z"),array: [],obj: {_id: 2678,str: "program teal",num: 71852,date: new Date("2018-09-06T08:39:32.810Z"),array: [[new Date("2018-09-06T05:57:35.882Z"),new Date("2018-09-06T03:30:44.575Z"),65844,"TCP Park","supply-chains Representative quantify",6290],new Date("2018-09-06T10:27:10.020Z"),{_id: 2679,num: 13617,date: new Date("2018-09-06T13:11:36.263Z"),obj: {}},new Date("2018-09-06T04:43:09.914Z"),13411,"Pizza SMTP",[],{_id: 2680,str: "Soft User-friendly bus",num: 95637,array: [10905,new Date("2018-09-06T10:42:37.254Z"),83569,{_id: 2681,str: "Wisconsin moratorium circuit",num: 7512,obj: {}}],obj: {}},"definition Cambridgeshire",new Date("2018-09-06T02:24:37.232Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2682,str: "olive",num: 60052,date: new Date("2018-09-06T15:48:00.674Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2683,str: "Handcrafted",num: 58528,date: new Date("2018-09-06T14:58:50.269Z"),array: [83064,"Handmade Frozen Hat calculating",{_id: 2684,str: "Estates Michigan HDD",date: new Date("2018-09-06T04:34:34.348Z"),array: [],obj: {_id: 2685,date: new Date("2018-09-06T15:39:44.451Z"),array: ["Chief project Triple-buffered",4362,new Date("2018-09-06T18:52:46.642Z"),39785,[]],obj: {}}},"Afghani Kwanza transitional",{_id: 2686,str: "deposit",num: 73221},new Date("2018-09-06T03:18:01.136Z"),new Date("2018-09-06T06:19:56.068Z"),"expedite Sleek Wooden Fish"]});
    },

    function(coll) {
        return coll.insert({_id: 2687,str: "Bedfordshire Outdoors SDD",num: 2313,date: new Date("2018-09-06T12:42:07.335Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2688,str: "Nepalese Rupee Oval",num: 5463,date: new Date("2018-09-06T05:26:35.461Z"),obj: {_id: 2689,str: "action-items Grocery",num: 75883,date: new Date("2018-09-05T20:50:40.245Z"),array: [new Date("2018-09-06T18:21:57.384Z"),92880,"Usability",[new Date("2018-09-06T19:29:49.179Z"),20983,99880,{_id: 2690,str: "Pennsylvania circuit blue",num: 64212,date: new Date("2018-09-06T18:31:55.583Z"),array: [],obj: {_id: 2691,str: "multi-byte Electronics",array: [new Date("2018-09-06T19:03:07.239Z"),new Date("2018-09-06T16:21:30.836Z"),"heuristic HDD"],obj: {}}},49738],new Date("2018-09-05T23:58:58.285Z"),9658,"Forward Administrator"]}});
    },

    function(coll) {
        return coll.insert({_id: 2692,str: "hacking",array: [new Date("2018-09-06T02:28:34.472Z"),[],"Checking Account",{_id: 2693,str: "eyeballs enterprise Handcrafted Rubber Tuna",num: 69658,date: new Date("2018-09-06T14:21:51.546Z"),array: ["Future Ball Palau",50091],obj: {_id: 2694,num: 49644,date: new Date("2018-09-06T03:25:37.350Z"),array: [],obj: {}}},"Director withdrawal",new Date("2018-09-05T20:44:09.983Z"),72755,89976]});
    },

    function(coll) {
        return coll.insert({_id: 2695,str: "Small",num: 42292,date: new Date("2018-09-06T11:43:30.607Z"),array: [18499,{_id: 2696,num: 1915,date: new Date("2018-09-06T10:35:33.801Z"),array: [],obj: {_id: 2697,str: "Books Investment Account intranet",num: 99747,array: [new Date("2018-09-06T03:00:41.445Z"),"THX Investment Account","Branch"],obj: {}}},"indexing Ergonomic Metal Shirt",52233,new Date("2018-09-06T03:54:10.534Z"),new Date("2018-09-06T07:10:11.386Z"),41136,[],"Soap",40958,{_id: 2698,str: "Specialist Security pink",num: 42639},{_id: 2699,str: "calculate Tuna Cambridgeshire",date: new Date("2018-09-05T23:34:47.152Z"),array: [],obj: {_id: 2700,date: new Date("2018-09-06T16:10:51.943Z"),obj: {}}},87207]});
    },

    function(coll) {
        return coll.insert({_id: 2701,str: "cross-platform 4th generation IB",num: 73506,date: new Date("2018-09-05T22:08:09.739Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2702,str: "Guinea",num: 69750,date: new Date("2018-09-06T13:25:17.820Z"),array: [],obj: {_id: 2703,str: "holistic grey Personal Loan Account",num: 76490,date: new Date("2018-09-06T19:16:01.403Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2704,str: "XML empower 1080p",num: 63845,date: new Date("2018-09-06T00:32:38.412Z"),array: [],obj: {_id: 2705,str: "fresh-thinking",num: 83243,date: new Date("2018-09-05T21:21:57.252Z"),obj: {_id: 2706,str: "USB index Meadows",date: new Date("2018-09-06T13:29:15.254Z"),array: ["Montana",64105,61981,new Date("2018-09-06T13:11:23.983Z"),[],"navigating Glen groupware",new Date("2018-09-06T00:16:12.893Z"),"Associate",[new Date("2018-09-06T16:57:26.838Z"),{_id: 2707,str: "Human Moldova",num: 12900,array: []},"Awesome Steel Towels",new Date("2018-09-05T21:43:21.639Z")],"Fish Function-based"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2708,str: "Reverse-engineered Rustic Steel Car",num: 57152,date: new Date("2018-09-06T06:24:49.871Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2709,str: "input",num: 30351,date: new Date("2018-09-06T11:55:06.002Z"),array: [],obj: {_id: 2710,str: "Universal info-mediaries",num: 21157,date: new Date("2018-09-06T14:32:45.429Z"),array: [new Date("2018-09-06T05:02:38.541Z"),"Mali Extensions Metrics",new Date("2018-09-06T15:07:33.080Z"),56450],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2711,str: "Supervisor",num: 86215,date: new Date("2018-09-06T10:13:26.229Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2712,str: "Unbranded Fresh Pants Markets monitor",num: 96036,date: new Date("2018-09-06T13:34:09.292Z"),array: ["encoding Credit Card Account pixel",new Date("2018-09-06T13:23:09.813Z"),22896,new Date("2018-09-05T22:46:41.584Z"),{_id: 2713,str: "deposit one-to-one Berkshire",array: [],obj: {}},new Date("2018-09-05T20:16:58.217Z"),98860,"Arizona Checking Account",{_id: 2714,num: 48269,date: new Date("2018-09-05T23:32:00.818Z"),obj: {_id: 2715,num: 88591,array: [],obj: {}}},[new Date("2018-09-06T01:25:00.094Z"),[]],"Checking Account",8560,"Turnpike"]});
    },

    function(coll) {
        return coll.insert({_id: 2716,str: "firewall",num: 83754,array: [],obj: {_id: 2717,str: "orange 5th generation",num: 95366,date: new Date("2018-09-06T11:51:26.762Z"),array: [],obj: {_id: 2718,str: "Cambridgeshire Brazil",num: 59686,date: new Date("2018-09-05T19:57:29.116Z"),array: [{_id: 2719,num: 57797,date: new Date("2018-09-05T23:17:55.872Z")},{_id: 2720,str: "Consultant artificial intelligence deposit",date: new Date("2018-09-06T03:36:19.846Z"),obj: {}},"Specialist backing up",[94617,"Concrete black Computer",new Date("2018-09-06T05:33:32.343Z"),new Date("2018-09-06T03:02:14.321Z"),"RSS calculating Argentina",{_id: 2721,num: 6214,date: new Date("2018-09-06T14:21:37.766Z"),array: [],obj: {}},14878],new Date("2018-09-06T02:55:01.730Z"),[new Date("2018-09-06T11:37:52.200Z")],"Adaptive system-worthy",27237]}}});
    },

    function(coll) {
        return coll.insert({_id: 2722,str: "Checking Account internet solution",date: new Date("2018-09-06T14:28:45.120Z"),array: [],obj: {_id: 2723,str: "Sleek Plastic Sausages Avon",num: 41319,date: new Date("2018-09-06T05:35:45.314Z"),array: [new Date("2018-09-06T04:30:33.194Z"),"value-added Intelligent Fresh Mouse",new Date("2018-09-05T23:48:11.835Z"),"SMS",58357,86765,[{_id: 2724,str: "feed Light",num: 84168,date: new Date("2018-09-05T23:13:11.813Z"),array: [],obj: {_id: 2725,str: "client-server Concrete",num: 58189,array: [],obj: {}}},[2066,{_id: 2726,str: "Kids",num: 18547,date: new Date("2018-09-06T01:03:25.274Z"),array: [[],"silver",{_id: 2727,str: "Berkshire",date: new Date("2018-09-06T15:01:11.193Z"),obj: {_id: 2728,array: [{_id: 2729,num: 68201,obj: {}}]}},new Date("2018-09-06T07:35:58.855Z")]}],new Date("2018-09-06T17:34:19.640Z"),29650],{_id: 2730,date: new Date("2018-09-06T09:37:34.617Z")},new Date("2018-09-06T01:16:53.295Z"),21052,new Date("2018-09-06T08:17:27.259Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2731,str: "Rubber protocol",num: 68578,date: new Date("2018-09-06T09:25:47.108Z"),array: [],obj: {_id: 2732,str: "Buckinghamshire",num: 18108,date: new Date("2018-09-06T09:23:45.895Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2733,str: "SMTP Music Technician",num: 57535,date: new Date("2018-09-05T23:26:22.282Z"),array: [],obj: {_id: 2734,num: 36639,date: new Date("2018-09-05T23:41:10.854Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2735,str: "Generic",num: 27689,date: new Date("2018-09-06T17:06:17.048Z"),array: [new Date("2018-09-06T10:17:24.748Z"),"Pants backing up",new Date("2018-09-06T18:51:57.279Z"),new Date("2018-09-06T03:35:28.825Z"),49283,59123,92440,{_id: 2736,str: "Sausages Beauty",date: new Date("2018-09-06T19:38:57.121Z"),array: [],obj: {}},"innovate Versatile Agent",["Awesome Wooden Cheese","Orchestrator Practical Unbranded"],{_id: 2737,str: "array Plastic",num: 53299,obj: {_id: 2738,str: "Wooden",date: new Date("2018-09-06T00:10:04.913Z"),obj: {_id: 2739,str: "Solutions",num: 98264,array: []}}},{_id: 2740,num: 62957,date: new Date("2018-09-05T22:21:05.492Z"),array: ["Colorado neural",{_id: 2741,num: 30806,date: new Date("2018-09-06T03:24:57.979Z"),obj: {}}]}]});
    },

    function(coll) {
        return coll.insert({_id: 2742,num: 57244,date: new Date("2018-09-06T12:07:26.798Z"),array: ["sky blue transition",new Date("2018-09-06T18:32:16.560Z"),"CSS Personal Loan Account",76774,"relationships copy",{_id: 2743,str: "Baby RAM",num: 82861,date: new Date("2018-09-06T04:16:39.827Z"),array: []},[],new Date("2018-09-06T01:44:17.810Z"),35248,17995,{_id: 2744,str: "Rustic Tasty Steel Ball",num: 65878,obj: {}},new Date("2018-09-06T04:21:19.578Z")],obj: {_id: 2745,num: 45063,date: new Date("2018-09-06T02:47:23.803Z"),array: ["Borders","Intelligent Rustic Soft Pants Pants"],obj: {_id: 2746,str: "Security e-commerce",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 2747,str: "empower generate",num: 56965,date: new Date("2018-09-06T18:10:47.079Z"),array: ["Metical frictionless",75308,16444,[],"tan Tasty","Soft viral Taka",new Date("2018-09-06T04:19:51.847Z"),new Date("2018-09-06T13:06:33.065Z"),{_id: 2748,num: 43030,date: new Date("2018-09-06T12:12:40.455Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2749,str: "connecting bi-directional Refined Steel Pizza",num: 77909,date: new Date("2018-09-06T01:53:36.075Z"),array: ["SDD Licensed Concrete Gloves Wooden",94923,52358,"Saint Helena Pound quantifying",new Date("2018-09-06T12:36:50.071Z"),[78841,"e-business"],72588,new Date("2018-09-06T11:30:59.357Z"),{_id: 2750,str: "microchip capacitor",num: 90388,date: new Date("2018-09-05T20:25:04.486Z"),array: [],obj: {}},85906,[],"Alaska extend synthesizing"],obj: {_id: 2751,str: "Car Nuevo Sol hard drive",date: new Date("2018-09-06T05:08:51.491Z"),array: [new Date("2018-09-06T14:50:06.393Z"),"approach",[91890],{_id: 2752,str: "Denmark Table",array: [],obj: {}}],obj: {_id: 2753,num: 31755,array: [],obj: {_id: 2754,str: "circuit Berkshire",num: 89145,date: new Date("2018-09-06T13:16:28.763Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 2755,str: "Bike",array: [[[],new Date("2018-09-06T10:02:48.266Z"),50727,"Western Sahara Cotton",71622,new Date("2018-09-05T23:12:01.344Z"),new Date("2018-09-06T05:42:24.499Z")],"Producer magnetic",90175,55470,{_id: 2756,str: "Awesome Handmade generating",num: 96874,date: new Date("2018-09-06T15:11:39.257Z"),array: ["optical open-source local"],obj: {_id: 2757,str: "service-desk",num: 88193,date: new Date("2018-09-06T03:32:49.430Z"),obj: {_id: 2758,str: "sensor",num: 11490,array: [],obj: {_id: 2759,num: 68685,date: new Date("2018-09-06T18:43:56.482Z")}}}},{_id: 2760,str: "Small Checking Account",date: new Date("2018-09-05T20:51:58.403Z"),array: ["value-added Fresh",new Date("2018-09-06T08:16:14.067Z"),{_id: 2761,num: 73674,date: new Date("2018-09-06T04:27:54.181Z"),obj: {}}],obj: {}},{_id: 2762,str: "Georgia",num: 68345,date: new Date("2018-09-06T08:24:15.988Z"),array: []},new Date("2018-09-06T08:08:51.890Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2763,str: "Iowa Jewelery collaborative",num: 56370,date: new Date("2018-09-06T14:07:49.894Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2764,str: "Awesome Creek reinvent",num: 66532,date: new Date("2018-09-06T05:41:04.186Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2765,str: "Orchestrator Accounts",num: 53203,date: new Date("2018-09-06T18:41:00.388Z"),array: [],obj: {_id: 2766,str: "teal",num: 38273,array: [new Date("2018-09-06T01:49:28.414Z"),new Date("2018-09-06T04:13:34.760Z"),5480,new Date("2018-09-06T17:09:32.555Z"),"Cambridgeshire Malawi",["Salad Bond Markets Units European Composite Unit (EURCO) Business-focused",36916,"Granite Chief"],"Right-sized",new Date("2018-09-05T20:17:49.773Z"),95842,[],new Date("2018-09-06T15:43:26.788Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2767,str: "alliance black Salad",num: 50850,date: new Date("2018-09-06T14:05:39.392Z"),array: [3800,new Date("2018-09-06T04:56:39.781Z"),"haptic functionalities South Georgia and the South Sandwich Islands",10523,"Cambridgeshire wireless",35548,new Date("2018-09-05T23:23:36.551Z"),[[]],new Date("2018-09-05T20:01:49.117Z"),"Liaison Bedfordshire compelling"],obj: {_id: 2768,str: "help-desk Ergonomic Soft Mouse",num: 50603,date: new Date("2018-09-06T10:39:07.157Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2769,str: "productize",num: 14545,date: new Date("2018-09-06T17:15:06.156Z"),array: ["lavender pixel schemas",[{_id: 2770,date: new Date("2018-09-06T07:50:29.192Z"),array: [],obj: {}},new Date("2018-09-06T15:28:07.292Z"),38937],new Date("2018-09-06T10:21:44.678Z"),new Date("2018-09-06T08:33:40.977Z"),4022,[],"Designer",59515,{_id: 2771,str: "Savings Account",num: 70977,date: new Date("2018-09-05T20:18:24.600Z"),array: [new Date("2018-09-06T09:49:05.021Z"),"Associate","ivory"],obj: {_id: 2772,num: 56976,obj: {}}},[],new Date("2018-09-06T12:17:59.079Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 2773,str: "wireless Ergonomic",num: 83845,date: new Date("2018-09-05T23:01:37.744Z"),array: [],obj: {_id: 2774,date: new Date("2018-09-06T00:40:57.747Z"),array: ["Home",2241,{_id: 2775,str: "Gorgeous backing up Small Granite Chair",num: 94295,date: new Date("2018-09-05T21:37:54.416Z"),array: [[],new Date("2018-09-05T22:25:27.292Z"),"Luxembourg",new Date("2018-09-06T09:51:02.512Z"),{_id: 2776,str: "HDD",num: 86913,array: [],obj: {}}],obj: {_id: 2777,str: "Ville",num: 66445,array: [99675]}},"Camp",[],{_id: 2778,date: new Date("2018-09-06T12:34:48.659Z"),array: []},new Date("2018-09-06T18:07:08.123Z"),21644,"Tasty transmit"],obj: {_id: 2779,str: "California",num: 9120,date: new Date("2018-09-06T17:34:11.816Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2780,str: "online Human",num: 94917,date: new Date("2018-09-06T01:59:19.128Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2781,str: "Mobility zero administration",num: 40167,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2782,str: "Granite",num: 9145,date: new Date("2018-09-06T19:03:44.159Z"),array: [],obj: {_id: 2783,str: "Flats Keyboard Small Concrete Shoes",num: 75565,date: new Date("2018-09-06T01:19:24.644Z"),array: ["Tasty Granite Chips Sleek Granite Bacon",4569,new Date("2018-09-06T10:26:27.668Z"),94643,{_id: 2784,str: "dynamic efficient explicit",num: 68230,array: [new Date("2018-09-05T23:20:48.441Z"),54661],obj: {}},"Programmable Manors South Dakota",[],{_id: 2785,str: "backing up initiative backing up",date: new Date("2018-09-06T17:46:31.115Z"),array: [],obj: {}},new Date("2018-09-06T01:13:21.189Z"),29434]}});
    },

    function(coll) {
        return coll.insert({_id: 2786,str: "value-added Beauty",num: 24092,date: new Date("2018-09-06T06:19:19.582Z")});
    },

    function(coll) {
        return coll.insert({_id: 2787,str: "killer Granite",num: 87788,date: new Date("2018-09-06T08:06:13.854Z"),array: [[],new Date("2018-09-06T10:12:31.879Z"),"Mount",18572,new Date("2018-09-06T03:16:24.896Z"),"Borders","Buckinghamshire Analyst",54049,{_id: 2788,str: "1080p Executive intuitive",num: 38763,date: new Date("2018-09-05T21:25:18.729Z"),array: [new Date("2018-09-06T00:12:10.430Z"),914,new Date("2018-09-06T08:50:50.170Z")],obj: {_id: 2789,num: 49926,date: new Date("2018-09-06T19:45:48.520Z"),array: [],obj: {}}},"Shoes Palladium Table"]});
    },

    function(coll) {
        return coll.insert({_id: 2790,num: 86024,date: new Date("2018-09-06T17:12:46.380Z"),array: ["input Russian Ruble",55557,new Date("2018-09-06T13:35:42.814Z"),19857,[],82081,"Response product",new Date("2018-09-06T13:11:00.604Z"),"Creative Cotton",new Date("2018-09-06T05:18:05.870Z"),{_id: 2791,str: "Strategist copying Grocery",num: 98078,date: new Date("2018-09-06T11:57:21.783Z"),array: [],obj: {_id: 2792,str: "Iowa",date: new Date("2018-09-06T13:20:45.887Z"),array: [{_id: 2793,str: "next-generation pixel Mews",num: 66089,array: [],obj: {}},7893,"vortals e-business",[22398],new Date("2018-09-06T07:30:48.872Z")],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 2794,str: "initiatives Hat Gorgeous Soft Cheese",num: 8916,date: new Date("2018-09-06T19:43:07.585Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2795,str: "payment Vista",num: 45245,array: ["Savings Account program",["IB clicks-and-mortar"],new Date("2018-09-06T14:16:00.495Z"),71657,"JBOD",new Date("2018-09-06T01:28:30.377Z"),new Date("2018-09-06T07:52:25.905Z"),"Handmade Plastic Bacon","Buckinghamshire Quality pricing structure",new Date("2018-09-06T11:55:49.770Z"),{_id: 2796,str: "bypass Program digital",num: 10929,date: new Date("2018-09-05T20:09:03.282Z"),array: ["Graphic Interface Central"],obj: {_id: 2797,str: "quantifying internet solution technologies",num: 49499,date: new Date("2018-09-06T07:18:06.604Z"),array: [],obj: {}}},{_id: 2798,str: "Trinidad and Tobago Dollar parsing",num: 91756,date: new Date("2018-09-05T20:29:38.319Z"),array: [],obj: {}},17308,346,64141],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2799,str: "Small cross-platform",num: 28374,date: new Date("2018-09-06T05:08:24.724Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2800,num: 59531,date: new Date("2018-09-06T17:27:53.142Z"),array: [],obj: {_id: 2801,str: "Investment Account deliver invoice",num: 52007,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2802,str: "Re-contextualized synergistic Sleek Rubber Table",num: 38027,date: new Date("2018-09-06T14:34:57.776Z"),array: [],obj: {_id: 2803,num: 77285,date: new Date("2018-09-06T06:39:05.018Z"),array: ["grey Armenia Rustic","XML withdrawal Vermont",new Date("2018-09-06T04:04:22.514Z"),49723,new Date("2018-09-06T16:30:23.474Z"),{_id: 2804,num: 37952,date: new Date("2018-09-06T13:56:12.896Z"),array: [],obj: {}},8696,new Date("2018-09-06T16:23:46.911Z"),{_id: 2805,str: "RSS solid state",array: [[]]},"RSS Baby Plastic",57484],obj: {_id: 2806,str: "conglomeration Indiana",num: 80164}}});
    },

    function(coll) {
        return coll.insert({_id: 2807,str: "client-driven",num: 68915,date: new Date("2018-09-06T09:49:06.446Z"),array: [],obj: {_id: 2808,str: "Reverse-engineered",date: new Date("2018-09-05T23:56:18.471Z"),array: [new Date("2018-09-06T09:50:35.618Z"),46448,"Handcrafted Plastic Keyboard Ergonomic Steel Bacon Missouri",["magenta Customer Savings Account",{_id: 2809,str: "override",num: 15681,array: [82086,new Date("2018-09-06T16:55:41.777Z")],obj: {}},new Date("2018-09-05T23:29:19.072Z"),"Supervisor"],"cross-platform deposit",63245,53177,8525,"bluetooth navigating heuristic",new Date("2018-09-06T16:41:28.523Z"),new Date("2018-09-06T10:09:58.794Z"),{_id: 2810,str: "haptic",num: 78545,date: new Date("2018-09-06T08:05:53.585Z"),array: [],obj: {_id: 2811,str: "users Infrastructure",num: 72205,date: new Date("2018-09-06T09:02:38.205Z")}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2812,str: "Iowa Plastic",num: 79939,date: new Date("2018-09-06T16:39:37.800Z"),array: [6434,{_id: 2813,str: "connect Kwacha",num: 59036,date: new Date("2018-09-06T17:34:49.596Z"),array: [],obj: {_id: 2814,num: 15849,date: new Date("2018-09-06T17:21:18.529Z"),array: [new Date("2018-09-06T08:29:45.457Z"),new Date("2018-09-06T02:52:37.164Z"),46840],obj: {}}},"New Mexico capacity Colorado","definition Unbranded",new Date("2018-09-06T12:32:37.003Z"),76991,"Awesome Granite Hat transmitter",37928,{_id: 2815,str: "Ball withdrawal",date: new Date("2018-09-06T18:10:49.135Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2816,str: "parsing",num: 38378,date: new Date("2018-09-06T04:51:55.132Z"),array: [],obj: {_id: 2817,str: "Personal Loan Account",date: new Date("2018-09-06T05:17:55.486Z"),obj: {_id: 2818,str: "streamline Games Gateway",num: 2518,array: [new Date("2018-09-06T02:24:00.340Z"),{_id: 2819,str: "Buckinghamshire Money Market Account",date: new Date("2018-09-06T10:49:53.217Z"),array: [],obj: {_id: 2820,num: 69512,date: new Date("2018-09-06T11:26:14.830Z"),array: ["streamline Assistant",75356,"invoice transmit"],obj: {}}},15489,"Awesome Soft Pants Personal Loan Account","Vatu Buckinghamshire",{ _id: 2821 },[17816],new Date("2018-09-06T02:50:03.136Z"),16198,[],new Date("2018-09-05T20:13:19.159Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 2822,str: "Legacy invoice Credit Card Account",num: 30564,date: new Date("2018-09-06T17:59:40.945Z"),array: ["SQL viral Springs",26812,new Date("2018-09-06T11:05:32.260Z"),new Date("2018-09-06T10:04:52.123Z"),25202,[],{_id: 2823,str: "Intelligent withdrawal deposit",num: 80729,date: new Date("2018-09-05T20:10:11.194Z"),array: [],obj: {}},new Date("2018-09-06T18:34:48.915Z"),"Investment Account",5438,new Date("2018-09-06T02:51:54.838Z"),["online French Polynesia wireless","enterprise capacitor optical",{_id: 2824,date: new Date("2018-09-06T12:59:38.066Z"),obj: {_id: 2825,str: "Small Plastic Pizza",num: 9936,array: [],obj: {}}}],[],18515]});
    },

    function(coll) {
        return coll.insert({_id: 2826,num: 67603,date: new Date("2018-09-06T18:52:27.108Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2827,str: "Liberian Dollar GB solid state",num: 54768,date: new Date("2018-09-06T11:22:11.537Z"),array: ["Associate alarm","Practical Steel Tuna orchestrate",51538,22066,new Date("2018-09-06T10:29:08.751Z"),{_id: 2828,num: 33078,date: new Date("2018-09-06T00:53:41.418Z"),array: [],obj: {}},new Date("2018-09-06T18:47:46.901Z"),"Visionary Cambridgeshire",83035,"Auto Loan Account Handmade Granite Gloves",[],[{_id: 2829,str: "Libyan Dinar index",num: 52920,date: new Date("2018-09-06T09:28:58.014Z"),obj: {_id: 2830,str: "mobile",num: 708,array: []}},"Incredible Concrete Cheese real-time"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2831,str: "pricing structure",num: 76900,date: new Date("2018-09-06T17:22:46.030Z"),array: [new Date("2018-09-06T10:30:21.143Z"),{_id: 2832,str: "override withdrawal",num: 82551,date: new Date("2018-09-06T17:21:55.270Z"),array: [],obj: {_id: 2833,str: "Locks Buckinghamshire",num: 7391,array: ["Sports override card",new Date("2018-09-06T16:23:39.281Z"),"Cotton",[new Date("2018-09-06T00:45:05.863Z")],new Date("2018-09-05T20:36:39.388Z")],obj: {_id: 2834,str: "next-generation",date: new Date("2018-09-06T12:02:11.964Z"),array: [37846,36473,81552]}}},[],new Date("2018-09-06T08:54:47.757Z"),58823,"digital","Vista",25163]});
    },

    function(coll) {
        return coll.insert({_id: 2835,str: "alliance Borders Regional",num: 73223,date: new Date("2018-09-06T04:09:53.415Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2836,str: "generate Ergonomic Wooden Towels RSS",num: 83100,date: new Date("2018-09-06T11:26:12.460Z"),array: [20452,new Date("2018-09-06T10:19:47.194Z"),"Junction Investor",new Date("2018-09-05T21:49:27.629Z"),new Date("2018-09-06T15:30:53.030Z"),[],"hard drive Steel Incredible",new Date("2018-09-06T19:33:29.908Z"),6237,["Integration South Africa Accountability",{_id: 2837,str: "generating green multi-byte",num: 65367,date: new Date("2018-09-06T16:26:36.791Z"),array: [57524,85541,new Date("2018-09-06T14:33:16.920Z")],obj: {_id: 2838,str: "extranet New Jersey",num: 25498,date: new Date("2018-09-06T01:31:39.762Z"),array: [],obj: {}}},{_id: 2839,str: "AI Towels Intelligent Soft Hat",num: 39695,date: new Date("2018-09-06T04:55:48.147Z"),array: [{_id: 2840,num: 46468,date: new Date("2018-09-06T04:10:27.195Z")}],obj: {_id: 2841,str: "Industrial",date: new Date("2018-09-05T23:04:48.101Z"),array: [],obj: {_id: 2842,num: 17516,obj: {}}}},"interface Gorgeous"],new Date("2018-09-06T03:06:27.955Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2843,str: "COM partnerships",num: 53016,date: new Date("2018-09-06T01:02:03.499Z"),array: [],obj: {_id: 2844,num: 84589,date: new Date("2018-09-05T20:18:17.940Z"),array: [new Date("2018-09-06T06:39:44.347Z"),{_id: 2845,str: "New Zealand Dollar",num: 98342,array: [],obj: {}},22375,"Jewelery","bypass Maine",97481,new Date("2018-09-06T02:58:33.063Z"),"Technician","Bacon",[36981,[]],new Date("2018-09-06T07:21:20.966Z"),6989,new Date("2018-09-06T19:49:15.580Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2846,str: "syndicate",num: 63351,date: new Date("2018-09-06T00:34:48.963Z"),array: [new Date("2018-09-05T20:11:31.511Z"),"Checking Account cross-media robust",new Date("2018-09-06T14:02:36.707Z"),33059,{_id: 2847,str: "capacitor bus tertiary",num: 66670,date: new Date("2018-09-06T15:01:32.872Z"),array: [73364,[],76211],obj: {_id: 2848,str: "Maryland utilize",num: 81315}},50524,{_id: 2849,num: 47300,date: new Date("2018-09-06T19:54:38.082Z"),array: ["Intelligent Metal Bacon black GB"],obj: {}},35474,new Date("2018-09-06T07:07:55.392Z"),"Gorgeous Wooden Gloves Garden collaborative",["Corporate plum",[],new Date("2018-09-06T01:22:06.659Z")],new Date("2018-09-06T06:02:48.732Z")],obj: {_id: 2850,str: "users Handcrafted Concrete Cheese",num: 83891,array: [],obj: {_id: 2851,str: "user-facing Berkshire",num: 74414,date: new Date("2018-09-05T20:57:17.335Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 2852,str: "Frozen",num: 56307,date: new Date("2018-09-06T08:55:13.204Z"),array: ["target Avon",{_id: 2853,str: "disintermediate American Samoa wireless",num: 93084,date: new Date("2018-09-06T02:42:04.987Z"),array: [],obj: {_id: 2854,str: "Sports",date: new Date("2018-09-06T04:06:03.163Z"),obj: {}}},6198,new Date("2018-09-06T01:35:29.986Z"),"scalable Anguilla",new Date("2018-09-05T20:39:32.013Z"),new Date("2018-09-06T17:37:47.030Z"),{_id: 2855,str: "whiteboard",num: 59625,obj: {}},46600,"scalable transmitting Rustic Plastic Car",[[],new Date("2018-09-06T03:55:35.486Z")],"Direct Concrete matrix",20920]});
    },

    function(coll) {
        return coll.insert({_id: 2856,num: 93242,date: new Date("2018-09-05T22:43:35.411Z"),array: [8223,11318,new Date("2018-09-05T21:32:48.693Z"),"Plastic Accountability Intranet",new Date("2018-09-05T20:26:45.539Z"),"Bedfordshire",74206,"Configuration gold",{_id: 2857,str: "deposit indexing Investment Account",num: 79363,date: new Date("2018-09-06T18:41:46.577Z"),array: [],obj: {_id: 2858,str: "Consultant Garden navigating",date: new Date("2018-09-06T12:26:20.949Z"),array: []}}],obj: {_id: 2859,str: "Fiji e-commerce overriding",num: 56777,date: new Date("2018-09-06T07:52:41.495Z"),array: ["SMS payment Analyst",["panel",[],"Bedfordshire Bouvet Island (Bouvetoya)"],new Date("2018-09-05T20:34:31.001Z")],obj: {_id: 2860,str: "fuchsia Data Automotive",num: 34703,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2861,str: "optimal",num: 86185,date: new Date("2018-09-06T01:59:51.024Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2862,str: "Chips Tennessee",num: 10969,date: new Date("2018-09-06T19:41:11.302Z"),array: [],obj: {_id: 2863,str: "task-force Coordinator 24/7",num: 72946,date: new Date("2018-09-06T08:06:26.652Z"),array: [new Date("2018-09-06T04:59:51.744Z"),"alarm User-friendly Distributed",5252,{_id: 2864,str: "AGP",date: new Date("2018-09-06T13:34:05.435Z"),obj: {}},79864,76731,{_id: 2865,str: "Incredible Granite Shoes Right-sized Small Metal Car",num: 39978,array: [65491,new Date("2018-09-06T02:28:16.800Z"),"cross-media Ergonomic"],obj: {}},[],new Date("2018-09-06T14:19:31.930Z"),"mint green parse Accounts",95332],obj: {_id: 2866,num: 27227,date: new Date("2018-09-06T02:56:09.997Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2867,str: "indexing Road",num: 15722,date: new Date("2018-09-05T22:02:33.949Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2868,str: "hacking dot-com solid state",num: 60516,date: new Date("2018-09-05T21:34:35.474Z"),obj: {_id: 2869,str: "bus withdrawal",date: new Date("2018-09-05T23:10:16.420Z"),array: [new Date("2018-09-06T06:43:24.108Z"),87661,91138,"Rubber","Human Soft Interactions",{_id: 2870,str: "deposit",num: 54484,date: new Date("2018-09-06T00:41:48.161Z"),array: ["Synergized",36975],obj: {_id: 2871,num: 47536,date: new Date("2018-09-06T15:41:01.103Z")}},new Date("2018-09-06T10:27:55.086Z"),new Date("2018-09-06T00:01:01.734Z"),{_id: 2872,num: 24341,array: []},new Date("2018-09-06T01:30:43.542Z"),66710,"digital"],obj: {_id: 2873,str: "distributed Multi-tiered",date: new Date("2018-09-06T15:40:15.703Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 2874,str: "Turnpike invoice projection",num: 76036,date: new Date("2018-09-06T09:34:24.930Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2875,str: "South Dakota withdrawal functionalities",num: 7055,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2876,str: "gold partnerships violet",num: 79576,date: new Date("2018-09-06T15:16:55.109Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2877,str: "yellow index Trail",num: 42510,date: new Date("2018-09-06T05:36:45.435Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2878,num: 19837,date: new Date("2018-09-06T11:53:46.020Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2879,str: "connect",num: 41498,date: new Date("2018-09-06T14:09:17.927Z"),obj: {_id: 2880,num: 72830,array: ["North Carolina Borders SMTP",[],new Date("2018-09-06T07:15:51.193Z"),[],["multi-state Hawaii gold",new Date("2018-09-06T11:27:05.820Z"),82709],"Configuration process improvement invoice","architectures convergence Handcrafted Steel Chicken",46911,{_id: 2881,str: "Iowa",date: new Date("2018-09-06T16:47:19.995Z"),array: [],obj: {}},{_id: 2882,str: "Serbian Dinar open-source",date: new Date("2018-09-05T21:57:20.547Z"),array: [33713],obj: {_id: 2883,str: "bypass white e-tailers",num: 77986,array: [],obj: {}}},68720,"Music Botswana standardization"]}});
    },

    function(coll) {
        return coll.insert({_id: 2884,str: "deposit",num: 94245,date: new Date("2018-09-06T14:51:05.091Z"),array: [new Date("2018-09-06T05:46:47.280Z"),"Generic Incredible","Metal open-source instruction set",new Date("2018-09-05T22:10:54.053Z"),new Date("2018-09-06T07:15:05.555Z"),51510,"time-frame Cambridgeshire Borders",new Date("2018-09-06T03:20:34.031Z"),49971,9408,"users",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2885,str: "Wooden Frozen",num: 29978,date: new Date("2018-09-05T20:49:37.372Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2886,str: "Buckinghamshire Home Loan Account",num: 42083,date: new Date("2018-09-06T02:21:24.454Z"),array: ["Games",46193,new Date("2018-09-06T06:18:00.721Z"),44133,new Date("2018-09-06T13:40:11.720Z"),97015,[{_id: 2887,str: "alarm",num: 39550,array: [],obj: {}},"Outdoors",new Date("2018-09-06T06:31:48.512Z")],"Maryland","Unbranded",{_id: 2888,str: "Sleek Versatile",num: 16780,date: new Date("2018-09-06T09:07:11.426Z"),array: [73753],obj: {}},{_id: 2889,num: 58185,date: new Date("2018-09-06T08:09:31.129Z"),array: [],obj: {_id: 2890,str: "action-items Uzbekistan Sum Industrial",date: new Date("2018-09-06T18:24:26.571Z"),array: []}},new Date("2018-09-06T19:31:25.739Z")],obj: {_id: 2891,num: 76103,date: new Date("2018-09-06T19:38:51.129Z"),obj: {_id: 2892,date: new Date("2018-09-05T23:44:54.516Z"),array: [{_id: 2893,str: "uniform",num: 98,array: [{_id: 2894,str: "Fantastic Frozen Tuna withdrawal",num: 91017,date: new Date("2018-09-06T03:21:47.374Z"),array: []},new Date("2018-09-06T16:44:23.248Z"),"Money Market Account Shirt workforce"],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 2895,str: "IB groupware",num: 445,date: new Date("2018-09-06T07:43:35.425Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2896,str: "quantifying",num: 57595,date: new Date("2018-09-06T11:21:37.026Z")});
    },

    function(coll) {
        return coll.insert({_id: 2897,num: 31060,date: new Date("2018-09-06T07:23:58.693Z"),array: [],obj: {_id: 2898,str: "deploy",num: 53611,date: new Date("2018-09-06T02:55:45.696Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2899,num: 18837,date: new Date("2018-09-06T03:42:55.361Z"),array: [61027,{_id: 2900,str: "Grocery Nauru",date: new Date("2018-09-06T08:31:37.315Z")},new Date("2018-09-06T01:12:09.952Z"),7782,new Date("2018-09-06T17:28:52.159Z"),new Date("2018-09-06T16:24:10.672Z"),"Ports Soft ability",new Date("2018-09-06T01:03:33.779Z"),"overriding",75538,[]],obj: {_id: 2901,num: 79750,date: new Date("2018-09-06T03:09:38.572Z"),array: [],obj: {_id: 2902,str: "distributed",num: 16902,array: ["Direct payment Investment Account",[],"yellow"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2903,str: "architectures infomediaries Michigan",num: 80125,date: new Date("2018-09-06T04:03:21.450Z"),array: [[new Date("2018-09-05T20:11:18.768Z")],new Date("2018-09-06T13:37:58.747Z"),74221,"empowering bifurcated synthesize",46889,[],{_id: 2904,str: "Generic architectures",num: 83809,date: new Date("2018-09-06T12:54:08.356Z")},["even-keeled"],85566,new Date("2018-09-06T05:02:05.035Z"),70592,["haptic"],new Date("2018-09-06T14:28:37.885Z"),"wireless online users"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2905,str: "New Caledonia",num: 8007,date: new Date("2018-09-06T01:54:42.441Z"),array: [28504,"index copying",67502,new Date("2018-09-06T06:57:01.759Z"),{_id: 2906,str: "XSS Intuitive responsive",num: 55339,date: new Date("2018-09-06T15:48:25.543Z"),obj: {}},new Date("2018-09-06T05:49:44.483Z"),{_id: 2907,str: "exuding",num: 25771,date: new Date("2018-09-06T12:11:31.798Z"),array: [[]],obj: {}},"Home Loan Account auxiliary paradigms",78622,12347,"Cordoba Oro Concrete"],obj: {_id: 2908,num: 89257,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2909,str: "Pula",num: 31857,date: new Date("2018-09-06T14:39:02.330Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2910,str: "Down-sized",num: 17190,date: new Date("2018-09-05T23:48:23.087Z"),array: ["lavender Tunnel Directives","Buckinghamshire Planner",25104,new Date("2018-09-05T23:29:56.044Z"),35733,new Date("2018-09-06T06:12:59.600Z"),[32113,"port redundant"],"Tanzania",65319,{_id: 2911,str: "Dynamic strategic Shirt",num: 67090,array: []},new Date("2018-09-06T02:43:24.439Z"),new Date("2018-09-06T15:07:19.530Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2912,str: "Somali Shilling",num: 45481,date: new Date("2018-09-06T04:33:56.042Z"),obj: {_id: 2913,str: "United States Minor Outlying Islands turquoise",num: 31261,date: new Date("2018-09-05T23:22:46.895Z"),array: [new Date("2018-09-05T23:33:35.434Z"),new Date("2018-09-06T12:53:50.236Z"),29685,"Engineer",37118,{_id: 2914,num: 33887,array: [],obj: {}},new Date("2018-09-06T00:03:24.754Z"),"Supervisor Cross-group",{_id: 2915,str: "Ohio Universal",num: 6818,date: new Date("2018-09-05T22:11:37.221Z"),array: ["deliverables Frozen",[]],obj: {}},new Date("2018-09-06T01:18:38.198Z")],obj: {_id: 2916,str: "Cotton",num: 33481,array: [],obj: {_id: 2917,str: "driver",date: new Date("2018-09-06T18:21:21.930Z"),array: ["Incredible neutral bypassing",[{_id: 2918,num: 67039,date: new Date("2018-09-06T06:03:41.623Z"),array: [],obj: {}},3130,76651,new Date("2018-09-06T17:24:28.364Z"),new Date("2018-09-06T01:44:13.262Z")]]}}}});
    },

    function(coll) {
        return coll.insert({_id: 2919,str: "Customer invoice Nevada",num: 25024,date: new Date("2018-09-06T06:36:04.576Z"),array: [],obj: {_id: 2920,str: "Bacon copy New Taiwan Dollar",num: 52851,date: new Date("2018-09-06T04:00:21.592Z"),array: [],obj: {_id: 2921,str: "Industrial",num: 3597,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2922,str: "system-worthy leverage",num: 34431,date: new Date("2018-09-06T12:22:35.898Z"),array: ["gold Liaison",new Date("2018-09-06T00:08:13.221Z"),64567,"Small Wooden Bike Oklahoma","Cotton HDD Electronics",new Date("2018-09-06T03:20:40.941Z"),[],new Date("2018-09-06T06:15:15.076Z"),[],16762,"Directives",new Date("2018-09-06T14:45:12.374Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2923,str: "Computers Administrator",num: 25501,date: new Date("2018-09-06T13:24:16.720Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2924,str: "driver Colorado Forward",num: 95000,date: new Date("2018-09-06T16:54:11.735Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2925,str: "capability Lead",num: 96272,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2926,str: "Small Intelligent Frozen Ball Principal",num: 59796,date: new Date("2018-09-06T10:52:29.152Z")});
    },

    function(coll) {
        return coll.insert({_id: 2927,str: "Technician Awesome Wooden Hat",num: 67047,date: new Date("2018-09-06T11:49:13.171Z"),array: [new Date("2018-09-06T14:51:39.319Z"),new Date("2018-09-06T10:58:52.391Z"),57722,66282,[],15467,"Shoes THX parsing","transmit",new Date("2018-09-06T09:57:04.144Z"),{_id: 2928,str: "Guernsey bluetooth withdrawal",num: 35511,array: [[],"Health Intuitive Utah",{_id: 2929,str: "brand",date: new Date("2018-09-06T10:03:04.160Z"),array: [8163,"Guam IB turquoise"],obj: {}}],obj: {_id: 2930,str: "bluetooth Future-proofed",num: 72257,date: new Date("2018-09-06T19:30:46.957Z"),obj: {_id: 2931,num: 20967,date: new Date("2018-09-06T15:33:26.167Z"),obj: {_id: 2932,date: new Date("2018-09-06T19:40:55.386Z")}}}},{_id: 2933,str: "Accounts Sleek Wooden Cheese",num: 57813}],obj: {_id: 2934,num: 71897,date: new Date("2018-09-06T10:07:24.595Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2935,str: "Outdoors Home Loan Account",num: 54141,date: new Date("2018-09-06T11:08:16.076Z"),array: [3926,new Date("2018-09-06T04:07:40.069Z"),"Movies Bouvet Island (Bouvetoya)",{_id: 2936,num: 62896,date: new Date("2018-09-06T00:28:42.000Z"),obj: {}},[],[],"holistic",new Date("2018-09-06T00:26:52.455Z"),71443,["sticky Paradigm"],new Date("2018-09-06T10:43:52.100Z"),[]],obj: {_id: 2937,str: "Unbranded Steel Pants tan",num: 21819,date: new Date("2018-09-06T00:20:00.975Z"),array: [{_id: 2938,str: "Oklahoma web services",num: 93697,date: new Date("2018-09-06T07:54:23.879Z"),array: [],obj: {}},new Date("2018-09-06T10:34:30.704Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 2939,str: "Minnesota CSS",num: 61930,date: new Date("2018-09-06T17:39:37.385Z"),array: ["wireless pixel Computers","Borders",new Date("2018-09-06T12:15:05.035Z"),new Date("2018-09-06T14:09:59.824Z"),13726,"24 hour",3442,{_id: 2940,str: "index Executive",num: 94969,array: [],obj: {_id: 2941,str: "Chips Rhode Island",num: 64489,date: new Date("2018-09-05T21:51:51.412Z"),array: ["Home Loan Account",{_id: 2942,str: "input",date: new Date("2018-09-06T09:15:42.790Z"),array: [],obj: {_id: 2943,num: 83626,obj: {}}},[2861],24545],obj: {}}},"Cambridgeshire",new Date("2018-09-06T06:47:08.060Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2944,str: "intranet",num: 45976,date: new Date("2018-09-06T12:23:51.787Z"),array: [],obj: {_id: 2945,str: "connect",num: 9839,date: new Date("2018-09-06T04:29:21.962Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2946,str: "Towels Borders back up",num: 66238,date: new Date("2018-09-05T22:41:21.069Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2947,str: "Corporate",num: 21265,date: new Date("2018-09-06T04:16:23.567Z"),array: [new Date("2018-09-06T01:24:52.503Z"),"Principal","Marketing Fork functionalities",10093,83039,new Date("2018-09-06T11:52:02.997Z"),{_id: 2948,str: "application",num: 88671,date: new Date("2018-09-06T02:17:08.050Z"),array: [],obj: {_id: 2949,date: new Date("2018-09-06T03:17:08.480Z"),array: [],obj: {_id: 2950,str: "deposit",num: 18003,date: new Date("2018-09-06T13:08:49.040Z"),obj: {}}}},71875,"Sleek Fresh Tuna deliverables Product",[77411,{_id: 2951,str: "Small Cotton Gloves Handcrafted",num: 56785,date: new Date("2018-09-06T04:54:50.357Z"),array: ["Realigned circuit non-volatile",[],{ _id: 2952 }]}],new Date("2018-09-06T02:12:08.273Z"),357],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2953,str: "program Table",num: 38584,date: new Date("2018-09-06T13:11:23.394Z"),array: [],obj: {_id: 2954,str: "Hat Georgia access",num: 78044,date: new Date("2018-09-06T12:53:33.314Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2955,str: "Buckinghamshire Bedfordshire",num: 83446,date: new Date("2018-09-06T10:20:37.989Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2956,str: "deposit",num: 10138,date: new Date("2018-09-05T21:40:22.844Z"),array: [43584,"De-engineered driver",31141,new Date("2018-09-06T02:03:09.963Z"),{_id: 2957,str: "Rustic Soft Tuna Rustic Technician",date: new Date("2018-09-06T00:12:54.727Z"),array: [],obj: {}},"Salad transmitting auxiliary",37452,23544,"Car incremental"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2958,num: 13270,date: new Date("2018-09-06T07:57:45.087Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2959,str: "Steel",num: 49668,date: new Date("2018-09-06T19:47:21.886Z"),array: ["web services end-to-end violet",[98854,68945,1119,new Date("2018-09-06T15:24:53.379Z")],new Date("2018-09-06T17:37:01.451Z"),"Gorgeous Metal Gloves",new Date("2018-09-06T16:03:02.863Z"),"monitor",71408,new Date("2018-09-06T15:40:51.635Z"),"Corporate Decentralized",{_id: 2960,str: "withdrawal Soft",date: new Date("2018-09-06T17:58:14.441Z"),array: [],obj: {_id: 2961,num: 5304,array: [[],"Cuban Peso Peso Convertible","Industrial"]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2962,str: "invoice Lithuanian Litas discrete",num: 20596,date: new Date("2018-09-06T08:55:28.693Z"),array: ["Manager focus group",{_id: 2963,str: "innovate Orchestrator",num: 62411,date: new Date("2018-09-06T18:09:51.657Z"),array: [92505,new Date("2018-09-06T08:31:22.860Z"),new Date("2018-09-05T23:17:43.792Z")],obj: {}},"Direct Berkshire Technician","National",new Date("2018-09-06T05:31:36.333Z"),56067,"system Pennsylvania",[94375,29086,[],{_id: 2964,num: 82397,date: new Date("2018-09-06T13:35:41.806Z"),obj: {}}],"connect frame",{_id: 2965,str: "Buckinghamshire backing up bandwidth",num: 99781,array: ["technologies Ergonomic"],obj: {_id: 2966,num: 9864,date: new Date("2018-09-06T04:15:41.540Z"),array: []}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 2967,str: "solution Turnpike Kids",num: 1678,date: new Date("2018-09-06T05:00:25.111Z"),obj: {_id: 2968,str: "Rustic Steel Pizza Technician",num: 95153,date: new Date("2018-09-06T01:01:20.149Z"),array: [27232,"tangible regional",new Date("2018-09-06T08:56:42.764Z"),[],["transmitting calculating",new Date("2018-09-06T12:01:28.546Z"),new Date("2018-09-06T15:13:57.184Z"),"exuding"],"Advanced payment",29273,38189,new Date("2018-09-06T00:45:58.830Z"),{_id: 2969,str: "Automotive compelling explicit",num: 57179,date: new Date("2018-09-06T10:12:48.001Z"),array: [77335]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2970,str: "one-to-one methodologies",num: 99080,date: new Date("2018-09-06T07:03:21.804Z"),array: [],obj: {_id: 2971,str: "paradigms Auto Loan Account",num: 61813,date: new Date("2018-09-06T13:39:03.858Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2972,str: "Car Table",num: 64939,array: [new Date("2018-09-06T14:51:50.571Z"),42335,new Date("2018-09-06T00:45:33.246Z"),78127,[],new Date("2018-09-06T06:07:47.708Z"),"multi-byte Dalasi granular",{_id: 2973,str: "Home Loan Account Networked Bedfordshire",num: 12828,date: new Date("2018-09-06T02:35:53.850Z"),array: [],obj: {_id: 2974,str: "bus Incredible Cotton Fish West Virginia",num: 46836,array: ["Berkshire intermediate revolutionary",44426,"Greens Grass-roots invoice","Car"],obj: {}}},new Date("2018-09-05T21:47:42.159Z"),[{_id: 2975,str: "card",date: new Date("2018-09-05T20:54:17.631Z"),obj: {}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2976,str: "Tuvalu",date: new Date("2018-09-05T22:38:58.415Z"),array: [],obj: {_id: 2977,str: "invoice logistical Facilitator",num: 92281,array: ["online","Mouse",new Date("2018-09-06T19:27:33.620Z"),57113,new Date("2018-09-06T07:56:32.635Z"),{_id: 2978,str: "website",num: 89045,date: new Date("2018-09-06T07:56:11.016Z"),array: [],obj: {}},57958,{_id: 2979,array: [],obj: {_id: 2980,num: 12982,date: new Date("2018-09-06T01:39:13.232Z"),array: [],obj: {}}},10542]}});
    },

    function(coll) {
        return coll.insert({_id: 2981,str: "Trinidad and Tobago scalable",num: 22108,date: new Date("2018-09-06T11:36:01.431Z"),array: [],obj: {_id: 2982,str: "hybrid",num: 78512,date: new Date("2018-09-05T22:53:54.947Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2983,num: 72594,date: new Date("2018-09-06T13:17:53.497Z"),array: ["Personal Loan Account users","payment Supervisor","Money Market Account transmit",{_id: 2984,str: "Bike generating",array: [],obj: {}},[18969,new Date("2018-09-06T04:06:07.533Z"),[],57172],"Junction synthesizing",23919,new Date("2018-09-06T01:11:03.959Z"),new Date("2018-09-06T14:31:21.898Z"),{_id: 2985,str: "out-of-the-box incubate",num: 69409,date: new Date("2018-09-06T15:26:37.059Z"),array: [],obj: {}},new Date("2018-09-06T07:00:52.300Z")],obj: {_id: 2986,str: "Representative didactic",num: 29442,date: new Date("2018-09-06T11:58:01.811Z")}});
    },

    function(coll) {
        return coll.insert({_id: 2987,str: "methodologies invoice",num: 81882,date: new Date("2018-09-06T01:06:06.010Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2988,str: "web-readiness",num: 67157,date: new Date("2018-09-05T19:59:49.012Z"),array: [{_id: 2989,str: "deposit extend Bedfordshire",date: new Date("2018-09-05T20:52:50.551Z"),array: [],obj: {}},44870,15412,"didactic interfaces",new Date("2018-09-06T01:23:02.905Z"),"cross-platform Graphic Interface reboot","value-added Refined Fresh Car"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2990,num: 74066,date: new Date("2018-09-06T18:29:04.102Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2991,str: "analyzer Bypass",date: new Date("2018-09-06T07:53:23.239Z"),array: [new Date("2018-09-06T04:27:40.496Z"),29168,69406,"Mexican Peso Mexican Unidad de Inversion (UDI) Response","Concrete",new Date("2018-09-06T17:02:33.314Z"),{_id: 2992,str: "toolset grey Analyst",num: 7504,date: new Date("2018-09-05T20:22:16.109Z"),array: [],obj: {_id: 2993,str: "Agent empower Avon",num: 41268,date: new Date("2018-09-06T09:48:36.155Z"),obj: {}}},"programming",[9052,{_id: 2994,num: 35766,date: new Date("2018-09-06T03:05:54.350Z"),array: [],obj: {}}],[new Date("2018-09-06T02:44:41.762Z"),"Small",87987,{_id: 2995,num: 14580,array: [],obj: {}},[new Date("2018-09-06T13:20:20.870Z"),"Reactive"]]]});
    },

    function(coll) {
        return coll.insert({_id: 2996,str: "Plains calculating application",date: new Date("2018-09-05T22:11:46.887Z"),array: [],obj: {_id: 2997,str: "Unbranded",num: 83914,date: new Date("2018-09-06T06:11:01.316Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2998,str: "Viaduct Place Dynamic",num: 59188,date: new Date("2018-09-06T07:04:24.109Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2999,str: "functionalities haptic",num: 53516,date: new Date("2018-09-06T13:13:26.983Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3000,str: "plug-and-play grey intranet",num: 68770,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3001,str: "Nuevo Sol Expanded Research",num: 78764,date: new Date("2018-09-06T18:44:01.661Z"),array: [],obj: {_id: 3002,str: "tan Diverse Avon",date: new Date("2018-09-06T18:14:18.293Z"),array: [80520,"deposit Generic Metal Hat",new Date("2018-09-06T04:32:13.482Z"),{_id: 3003,num: 24552,array: ["Investment Account"],obj: {}},44725,new Date("2018-09-06T18:29:06.806Z"),"Arizona Handmade synthesize",new Date("2018-09-06T16:34:07.765Z"),new Date("2018-09-05T22:47:44.287Z"),64695,91130,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 3004,str: "orange Hat",num: 79360,date: new Date("2018-09-05T22:12:02.817Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3005,str: "calculate Associate Sports",num: 76722,date: new Date("2018-09-06T12:28:11.100Z"),array: [65812,new Date("2018-09-06T10:49:09.025Z"),"azure Arizona",new Date("2018-09-06T06:16:27.947Z"),[],66418,"Lakes Delaware","Associate",84906],obj: {_id: 3006,str: "Engineer",num: 89896,date: new Date("2018-09-06T05:11:25.868Z"),array: [],obj: {_id: 3007,str: "hybrid synthesizing users",num: 17850,date: new Date("2018-09-06T14:24:36.111Z"),array: [new Date("2018-09-06T16:33:38.142Z"),"Security copy",{_id: 3008,num: 42877,array: [new Date("2018-09-06T03:05:51.058Z"),81286,new Date("2018-09-06T05:54:43.011Z")],obj: {}},[]],obj: {_id: 3009,date: new Date("2018-09-06T16:59:51.611Z"),array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 3010,str: "Intelligent Plastic Pizza",array: [],obj: {_id: 3011,str: "Myanmar methodologies infomediaries",num: 38213,date: new Date("2018-09-06T17:28:26.004Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3012,str: "platforms",num: 96992,date: new Date("2018-09-06T03:20:51.632Z"),array: [{_id: 3013,str: "Games Response",num: 56688,date: new Date("2018-09-05T20:33:10.541Z"),obj: {}},"Philippines schemas Communications",42410,new Date("2018-09-06T14:17:03.408Z"),"Metal","Accountability",new Date("2018-09-06T12:05:40.634Z"),[],77525],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3014,num: 16252,date: new Date("2018-09-06T15:12:21.375Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3015,str: "Parkway Unbranded Borders",num: 21574,date: new Date("2018-09-06T11:50:08.107Z"),array: [],obj: {_id: 3016,str: "Industrial Rustic Fresh Pizza",num: 34793,date: new Date("2018-09-05T22:10:42.665Z"),array: [],obj: {_id: 3017,str: "invoice Buckinghamshire",num: 22864,array: [new Date("2018-09-06T15:20:58.869Z"),new Date("2018-09-06T07:30:39.674Z"),86991,"even-keeled Stravenue",["Sausages Berkshire",66838,29759,new Date("2018-09-05T23:25:04.947Z")],{_id: 3018,num: 38535,date: new Date("2018-09-06T16:09:45.037Z"),array: ["Barbados deposit help-desk",new Date("2018-09-06T15:31:43.486Z")],obj: {_id: 3019,str: "array purple",num: 62958,date: new Date("2018-09-06T00:52:47.221Z"),obj: {}}},"Fish program","Soap",[],{_id: 3020,array: [24010]}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3021,str: "Berkshire Computer",num: 97660,date: new Date("2018-09-06T19:04:08.724Z"),array: [],obj: {_id: 3022,str: "Future-proofed violet solid state",num: 86877,date: new Date("2018-09-05T21:05:32.612Z"),array: ["e-tailers",72106,new Date("2018-09-06T13:21:33.191Z"),44817,new Date("2018-09-05T23:15:04.147Z"),new Date("2018-09-06T06:51:08.735Z"),{_id: 3023,obj: {_id: 3024,str: "Metal",num: 37117,date: new Date("2018-09-06T17:00:33.268Z"),array: [new Date("2018-09-06T09:37:29.906Z"),36664],obj: {_id: 3025,str: "quantify Buckinghamshire",num: 73956,obj: {}}}},"Missouri efficient Forward",94041,[],85562,new Date("2018-09-06T17:23:15.629Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 3026,str: "proactive ivory parse",num: 77322,date: new Date("2018-09-05T23:51:12.264Z"),array: [90742,28784,80997,18821,["Liaison Wooden"],[],"Administrator",new Date("2018-09-06T17:53:10.130Z"),new Date("2018-09-06T05:01:35.957Z"),new Date("2018-09-06T10:09:58.404Z"),new Date("2018-09-06T03:06:50.930Z"),{_id: 3027,array: ["Money Market Account drive Granite"],obj: {}},42754,new Date("2018-09-06T19:04:12.303Z")],obj: {_id: 3028,str: "transmitting Frozen",num: 15024,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3029,str: "Applications",num: 7194,date: new Date("2018-09-06T18:24:08.459Z"),array: [[],new Date("2018-09-06T05:15:18.921Z"),44757,"knowledge user",81184,"deposit",4767,{_id: 3030,str: "Intelligent Concrete Hat COM",num: 17704,date: new Date("2018-09-05T23:51:17.155Z"),array: []},96976,67780,new Date("2018-09-06T09:31:56.389Z"),new Date("2018-09-06T02:39:22.397Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3031,num: 69219,date: new Date("2018-09-06T18:52:25.427Z"),array: [],obj: {_id: 3032,str: "violet service-desk Refined Soft Pizza",num: 44498,date: new Date("2018-09-06T15:54:49.755Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3033,str: "Music solid state users",num: 42876,date: new Date("2018-09-05T21:44:28.119Z"),array: [],obj: {_id: 3034,num: 43811,date: new Date("2018-09-06T19:07:05.014Z"),array: ["Accountability navigating",16405,new Date("2018-09-06T14:35:02.696Z"),{_id: 3035,num: 5339,array: ["Mouse Future global",69651,new Date("2018-09-06T00:21:34.059Z")]},43088,"Soap white Pataca",[],new Date("2018-09-06T05:50:16.977Z"),new Date("2018-09-06T05:21:53.168Z"),"Sleek Granite Sausages circuit","Minnesota National"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3036,str: "Kwanza Rest Outdoors",num: 37400,date: new Date("2018-09-05T21:01:01.020Z"),array: [],obj: {_id: 3037,str: "protocol bus",num: 84763,date: new Date("2018-09-06T16:24:08.447Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3038,str: "indigo Inlet",num: 2431,date: new Date("2018-09-05T21:43:01.474Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3039,str: "Avon",num: 54885,array: [[],"Applications Program",94001,new Date("2018-09-06T02:32:36.510Z"),[],81709,37705,"human-resource RAM",new Date("2018-09-06T00:53:25.962Z"),new Date("2018-09-06T16:45:04.360Z")],obj: {_id: 3040,num: 70523,date: new Date("2018-09-06T19:43:44.644Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3041,str: "primary Berkshire Regional",num: 57312,date: new Date("2018-09-06T05:29:48.089Z"),array: [],obj: {_id: 3042,str: "monetize",date: new Date("2018-09-06T11:58:09.861Z"),array: ["Cambridgeshire world-class",new Date("2018-09-06T12:34:43.641Z"),{_id: 3043,str: "Handmade vertical",num: 22434,date: new Date("2018-09-06T08:43:35.597Z"),obj: {}},23194,72199,84585,[],new Date("2018-09-06T01:24:50.679Z"),"Dynamic architect"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3044,str: "red Chief",num: 8109,date: new Date("2018-09-06T12:19:29.172Z"),array: [new Date("2018-09-06T00:42:49.941Z"),90057,[],new Date("2018-09-05T23:54:40.772Z"),"Producer",7510,"Bedfordshire foreground TCP",new Date("2018-09-06T09:08:28.230Z"),91355,new Date("2018-09-05T20:37:30.902Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3045,num: 56567,date: new Date("2018-09-06T12:11:04.534Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3046,str: "teal system",num: 38631,date: new Date("2018-09-06T00:50:16.232Z"),array: [34128,"e-markets Seamless","Fantastic Frozen Chicken",[],[new Date("2018-09-05T21:24:02.802Z")],new Date("2018-09-06T13:04:16.697Z"),4758,44623,{_id: 3047,str: "web services Global",num: 54453,date: new Date("2018-09-06T16:01:07.480Z"),array: [],obj: {_id: 3048,str: "Ohio Web",num: 74165,array: [],obj: {_id: 3049,str: "Senior Cotton experiences",num: 42403,date: new Date("2018-09-06T19:25:34.484Z"),obj: {}}}},"Cambridgeshire dot-com Ergonomic Concrete Ball",new Date("2018-09-06T11:47:26.934Z"),{_id: 3050,date: new Date("2018-09-06T05:43:06.805Z"),array: [],obj: {_id: 3051,str: "cutting-edge Avon",num: 16029,array: ["Automotive"]}},20272,new Date("2018-09-05T22:08:13.282Z"),{_id: 3052,str: "action-items Ergonomic",date: new Date("2018-09-06T13:44:42.220Z"),array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 3053,num: 61164,date: new Date("2018-09-06T15:49:04.747Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3054,str: "Future",num: 81617,date: new Date("2018-09-06T12:18:28.985Z"),array: [12643,["Tactics challenge West Virginia",[],new Date("2018-09-06T16:43:09.520Z"),new Date("2018-09-05T20:16:39.980Z"),"Implementation Usability Plastic"],{_id: 3055,num: 95694,obj: {}},96980,"Buckinghamshire",38247,"Analyst",[],29685]});
    },

    function(coll) {
        return coll.insert({_id: 3056,str: "frame",num: 29000,date: new Date("2018-09-06T16:01:27.587Z"),array: [new Date("2018-09-05T20:00:27.519Z"),new Date("2018-09-05T22:21:08.961Z"),"USB",{_id: 3057,num: 63203,date: new Date("2018-09-06T06:36:43.527Z"),array: [],obj: {}},new Date("2018-09-06T17:50:39.534Z"),new Date("2018-09-06T19:27:32.762Z"),56557,[[],"Checking Account"],50974],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3058,str: "matrix",date: new Date("2018-09-06T03:06:34.375Z"),array: [24779,"Solutions transform","Missouri Unbranded",new Date("2018-09-05T23:23:14.581Z"),{_id: 3059,str: "local area network Via Computers",num: 44357,date: new Date("2018-09-06T09:40:24.392Z"),array: [],obj: {}},72616,90362,{_id: 3060,str: "definition Re-engineered",date: new Date("2018-09-06T08:19:06.414Z"),array: ["Handcrafted Mouse Walk",new Date("2018-09-06T06:48:44.899Z"),[],new Date("2018-09-06T12:58:46.344Z"),"Administrator Seamless compressing",new Date("2018-09-06T00:16:19.644Z")],obj: {_id: 3061,num: 6244,array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3062,str: "Forest Product",num: 14981,date: new Date("2018-09-06T03:04:40.354Z"),array: [],obj: {_id: 3063,str: "olive hierarchy Berkshire",num: 70770,date: new Date("2018-09-06T01:18:38.350Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3064,str: "withdrawal",num: 94875,date: new Date("2018-09-06T02:44:07.837Z"),array: [14033,new Date("2018-09-06T13:19:52.398Z"),93544,"Fish",{_id: 3065,str: "bluetooth",num: 89223,date: new Date("2018-09-06T02:49:08.138Z"),array: []},[new Date("2018-09-06T12:36:04.927Z"),{_id: 3066,num: 12671,array: [],obj: {}},5587,20398,[],"Intelligent Extended Incredible"],"mobile Chair",new Date("2018-09-06T09:23:02.657Z")],obj: {_id: 3067,num: 90593,date: new Date("2018-09-06T19:48:58.009Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3068,str: "Mews sky blue",num: 62955,date: new Date("2018-09-06T09:49:46.667Z"),array: [],obj: {_id: 3069,str: "navigating mesh",num: 53238,date: new Date("2018-09-06T02:30:50.772Z"),obj: {_id: 3070,str: "indexing",date: new Date("2018-09-05T23:08:21.439Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3071,str: "service-desk",num: 33040,date: new Date("2018-09-06T01:50:00.891Z"),array: [],obj: {_id: 3072,str: "migration",num: 66148,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3073,str: "Industrial compressing",num: 30062,date: new Date("2018-09-05T21:27:30.037Z"),array: [new Date("2018-09-05T22:51:02.526Z"),[2059],[],{_id: 3074,str: "Virginia website",num: 76192,date: new Date("2018-09-06T08:28:35.679Z"),array: [new Date("2018-09-06T15:53:11.462Z")]},"Savings Account",[],77761,new Date("2018-09-06T16:33:37.050Z"),33867,"redefine Cotton","Incredible Cotton Tuna Refined"],obj: {_id: 3075,str: "Shoes Awesome Rubber Fish Concrete",num: 73421,date: new Date("2018-09-05T20:24:51.399Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3076,str: "Handcrafted 1080p",num: 92633,date: new Date("2018-09-05T22:58:10.943Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3077,str: "concept recontextualize",num: 3990,array: [7781,new Date("2018-09-06T10:19:29.645Z"),"cross-platform",new Date("2018-09-06T09:09:43.725Z"),"homogeneous FTP Checking Account",29072,new Date("2018-09-06T11:54:26.493Z"),{_id: 3078,num: 61749,date: new Date("2018-09-06T01:08:51.423Z"),array: [],obj: {_id: 3079,str: "enhance",date: new Date("2018-09-06T07:48:05.021Z"),array: [],obj: {_id: 3080,str: "Savings Account Metical background",num: 943,date: new Date("2018-09-05T21:47:27.616Z"),array: [],obj: {}}}},"vertical International",["Gorgeous Cotton Soap",{_id: 3081,str: "Union",num: 90533,date: new Date("2018-09-06T03:47:56.689Z")},30397],[new Date("2018-09-06T05:10:13.680Z"),[],new Date("2018-09-05T23:13:55.963Z")],"Legacy Cambridgeshire"]});
    },

    function(coll) {
        return coll.insert({_id: 3082,str: "Steel Towels calculate",num: 94676,date: new Date("2018-09-06T12:02:15.430Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3083,str: "Mississippi Car Organized",num: 30110,date: new Date("2018-09-05T22:03:17.692Z"),obj: {_id: 3084,str: "Missouri Borders Sausages",num: 41860,date: new Date("2018-09-06T05:56:14.106Z"),array: [new Date("2018-09-05T20:23:10.044Z"),56806,new Date("2018-09-06T17:37:05.859Z"),3841,"customized engineer Quality",[26972,[],new Date("2018-09-06T14:35:14.957Z"),"1080p"],{_id: 3085,str: "channels",date: new Date("2018-09-06T09:29:17.274Z"),array: ["Malawi"],obj: {}},11343,new Date("2018-09-06T16:57:59.743Z"),{_id: 3086,num: 31166,date: new Date("2018-09-06T10:52:44.269Z"),array: []},45875,new Date("2018-09-06T10:07:26.365Z")],obj: {_id: 3087,num: 99211,array: [{_id: 3088,num: 38317,obj: {}}],obj: {_id: 3089,str: "Awesome Concrete Bacon Mexican Peso Mexican Unidad de Inversion (UDI)",num: 37702,date: new Date("2018-09-05T23:38:35.327Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 3090,str: "Rustic HTTP",num: 36738,date: new Date("2018-09-06T14:49:30.107Z"),array: [],obj: {_id: 3091,str: "Consultant digital THX",num: 89487,date: new Date("2018-09-06T14:45:38.865Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3092,str: "functionalities Money Market Account",num: 36675,date: new Date("2018-09-06T06:21:43.402Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3093,str: "bandwidth Soap",num: 12880,date: new Date("2018-09-06T05:03:35.007Z"),array: ["Personal Loan Account Cambridgeshire calculating",new Date("2018-09-06T04:07:33.362Z"),70300,new Date("2018-09-06T14:20:39.703Z"),"Ball",74699,{_id: 3094,str: "killer Steel Cambridgeshire",num: 22572,date: new Date("2018-09-06T03:55:31.300Z"),array: ["Administrator Checking Account Ball",68210],obj: {_id: 3095,str: "bricks-and-clicks",num: 11939,date: new Date("2018-09-06T07:07:11.510Z"),obj: {}}},[],[],{_id: 3096,str: "Utah monitor impactful",num: 16446,date: new Date("2018-09-06T12:55:10.706Z"),obj: {_id: 3097,str: "Legacy",date: new Date("2018-09-06T12:11:18.138Z"),array: [new Date("2018-09-06T11:18:44.152Z"),"olive hack distributed","Concrete",74627],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 3098,str: "Engineer technologies",num: 82026,date: new Date("2018-09-05T21:38:09.667Z"),array: [[],17165,new Date("2018-09-06T10:03:09.522Z"),{_id: 3099,str: "repurpose",num: 25274,date: new Date("2018-09-06T01:44:24.243Z"),array: [36945,"incubate Savings Account",new Date("2018-09-06T03:11:43.316Z"),new Date("2018-09-06T10:33:45.479Z"),"Cotton plum Handmade Plastic Chips","Tools"],obj: {}},new Date("2018-09-06T02:00:44.636Z"),[],"Dynamic Myanmar",64896]});
    },

    function(coll) {
        return coll.insert({_id: 3100,str: "National deposit firewall",num: 41950,date: new Date("2018-09-06T13:10:33.122Z"),array: [[],89168,18489,new Date("2018-09-06T05:33:10.419Z"),new Date("2018-09-05T22:08:36.115Z"),"transmitter Platinum protocol",new Date("2018-09-06T11:21:09.342Z")],obj: {_id: 3101,str: "backing up navigating",num: 50581,date: new Date("2018-09-05T22:43:01.894Z"),obj: {_id: 3102,str: "Auto Loan Account",num: 22907,date: new Date("2018-09-06T14:02:39.501Z"),array: [],obj: {}}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.num": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $map: {input: ["navigating"],in: { $log10: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],['$obj.obj.num',46841]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[71456]] }, _id: 0}}],

        [{$project: {a: { $range: [0,4] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[['$num','$num'],["Rand Steel",{ $concat: ["Senior Accounts",{ $dateToString: {date: '$obj.obj.obj.date',timezone: "America/North_Dakota/Beulah"} },'$obj.obj.obj.str'] },'$str'],['$obj.obj.obj.num',45205],[]]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Money Market Account",v: { $substrBytes: ['$str',16,2] }},{k: "driver Shoes",v: { $log10: '$obj.obj.num' }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "infrastructures indexing optical",v: new Date("2018-09-06T10:44:16.349Z")},{k: "Unbranded Rubber Bike eyeballs",v: { $toLower: "Vatu Buckinghamshire" }}]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfMonth: { $isoWeek: { $isoDayOfWeek: { $dayOfMonth: { $dateToParts: {date: { $month: { $dayOfWeek: { $week: { $year: '$obj.obj.obj.date' } } } },iso8601: true} } } } } } }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromString: {dateString: "2018-09-06T18:54:35.415Z",format: "%u-%z-%L-%Z-%H",onError: { $arrayElemAt: [['$obj.obj.num'],57155] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str','$obj.obj.str',"back-end"],58141] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfMonth: { $hour: { $dateFromString: {dateString: "2018-09-06T01:42:46.338Z",timezone: "Europe/Jersey",onNull: { $arrayToObject: [[]] }} } } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfYear: { $toDate: { $arrayElemAt: [[],'$num'] } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Realigned Intelligent Concrete Pants",{ $trim: {input: '$str',chars: "Chile leverage optical"} }],as: 'lilly',cond: { $isArray: [{ $toString: { $arrayElemAt: [['$$lilly',"Codes specifically reserved for testing purposes"],26400] } }] }} }, _id: 0}}],

        [{$project: {a: { $second: '$obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],61720] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Gateway Down-sized Keyboard",v: true},{k: "navigate Cape Verde robust",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$obj.str' }],19666] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["PNG Total Integration",'$obj.obj.obj.str','$obj.str',"hard drive Grocery Sleek"],'$num'] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Kazakhstan optical",v: 71860},{k: "Cambridgeshire",v: 83294}]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["backing up connecting"],[{ $toLower: "bluetooth scalable" }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: '$str' }],75258] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $substr: ["solid state Kids",1,6] },'$str'],[{ $toUpper: { $rtrim: { input: '$str' } } }],['$str',"Marketing","envisioneer West Virginia"],[],[{ $dateFromString: {dateString: "2018-09-06T01:13:21.544Z",format: "%m-%U-%H-%w-%L-%M-%d-%L-%u-%U-%j"} }]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $concat: [{ $toString: { $arrayToObject: [[{k: "Shoes",v: "ROI functionalities port"},{k: "Tools",v: '$obj.obj.obj.str'},{k: "circuit Ergonomic Plastic Gloves",v: 95022}]] } },{ $rtrim: {input: '$str',chars: "zero tolerance Lithuania feed"} }] },'$str']] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T04:50:51.269Z"),format: "%Z-%u-%z-%j-%U-%M-%z-%z-%L-%u-%U",onNull: { $range: [7,11] }} }, _id: 0}}],

        [{$project: {a: { $substr: [{ $substrBytes: [{ $toString: { $arrayElemAt: [[],'$num'] } },10,6] },16,19] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Mission",v: false},{k: "deposit",v: true},{k: "methodical Ergonomic Fresh",v: true}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $substrBytes: ['$obj.str',4,13] },'$obj.obj.obj.str','$str',"full-range Focused"],['$obj.obj.obj.num'],[{ $substr: ['$str',2,3] }],[],[44536,92756]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "driver Table Integration",v: '$obj.obj.obj.str'},{k: "convergence Personal Loan Account overriding",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $toString: { $map: {input: [],as: 'oma',in: { $log10: '$$oma' }} } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [59736],as: 'chadd',cond: false} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["Personal Loan Account",{ $toString: { $ltrim: {input: '$obj.str',chars: { $rtrim: {input: '$obj.str',chars: "Cove override Home Loan Account"} }} } }],[45471,'$num']] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $rtrim: { input: { $toLower: "Shirt" } } },5,19] }, _id: 0}}],

        [{$project: {a: { $range: [9,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[12569,'$num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[[],['$str'],['$obj.str','$str']]] } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],defaults: [/^Multi\-tiered/]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transmitting policy",v: '$obj.date'},{k: "Ball matrix technologies",v: 68478},{k: "copy",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"embrace"],26119] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T13:54:51.194Z",format: "%u-%S-%m-%%-%G-%G-%S-%U-%%"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ["grey bleeding-edge USB",16,16] },'$obj.obj.str',"TCP"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [8,1] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str','$str',"heuristic"],['$obj.num','$obj.num'],["Saint Helena Pound virtual calculate",'$obj.obj.obj.str'],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $range: [0,0,8] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Gambia Tools",v: 5456}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],75031] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "JBOD",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account Bedfordshire ivory",v: 69122}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromParts: {year: { $abs: 4374 },month: { $cmp: [{ $substrCP: ["Granite Shirt Credit Card Account",11,19] },{ $arrayToObject: [[{k: "copying",v: true},{k: "empowering Operative",v: '$obj.obj.obj.num'}]] }] },day: { $abs: 90771 },hour: { $trunc: '$obj.obj.obj.num' },minute: { $log: [{ $floor: '$obj.num' },83896] }} } }, _id: 0}}],

        [{$project: {a: { $toDate: { $substrCP: ['$str',19,5] } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["maroon Wisconsin Computer",1,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],32166] }, _id: 0}}],

        [{$project: {a: { $toLower: "Arizona Investment Account" }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrCP: [{ $concat: [] },8,14] }],in: { $cmp: [{ $week: { $isoWeekYear: new Date("2018-09-05T23:40:55.544Z") } },{ $isoDayOfWeek: { $second: { $minute: { $isoDayOfWeek: { $year: { $hour: { $isoDayOfWeek: { $dateToString: {date: { $month: { $dayOfYear: { $toDate: { $concatArrays: [[],["withdrawal Frozen",'$$this']] } } } },timezone: "MST7MDT"} } } } } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["redundant navigate",17,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[40552],[],[new Date("2018-09-05T22:18:29.654Z"),"Bacon channels Track"]]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $divide: ['$obj.obj.obj.num','$obj.num'] },month: { $multiply: [] },day: { $log10: 80315 },minute: { $indexOfArray: [{ $map: {input: ['$num',{ $ln: 16247 },13650,89473],as: 'linda',in: { $ln: '$obj.obj.num' }} },{ $arrayToObject: [[['$obj.obj.obj.str'],[false,new Date("2018-09-06T02:39:41.227Z"),{ $toString: { $arrayElemAt: [[{ $log10: 5498 }],'$obj.obj.num'] } }],["seamless Fantastic",'$obj.str'],[],[]]] },4] },millisecond: { $abs: { $floor: { $size: [["Senior Gorgeous",'$obj.obj.obj.str',{ $dateToString: {date: '$obj.date',format: "%z-%L-%d-%z-%L-%j-%Z-%H-%H",onNull: { $filter: {input: [],cond: { $and: [{ $ltrim: {input: '$obj.obj.obj.str',chars: "calculate deposit Gibraltar Pound"} }] }} }} }]] } } },timezone: "Australia/LHI"} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $toDate: { $substr: [{ $substrCP: ["Credit Card Account Wooden",7,1] },13,3] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["deposit back-end Berkshire"],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $second: { $millesecond: { $toDate: { $dayOfMonth: { $isoWeek: { $minute: { $millesecond: { $dayOfYear: { $dateToString: {date: new Date("2018-09-06T14:04:38.363Z"),onNull: { $substrBytes: ['$obj.obj.obj.str',5,18] }} } } } } } } } } },timezone: "Asia/Kuala_Lumpur",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $substr: [{ $substr: [{ $concat: ['$str'] },11,10] },10,11] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: [{ $dateToString: {date: new Date("2018-09-06T09:12:15.016Z"),format: "%H-%H-%d-%m-%V-%H-%U",onNull: { $arrayElemAt: [[{ $multiply: [] }],20278] }} },0,7] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "azure Investment Account",v: '$obj.obj.obj.str'},{k: "Key invoice",v: 22709}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "envisioneer Utah Plastic",v: { $dateToString: {date: '$obj.obj.obj.date',format: "%z-%L-%L-%z",onNull: { $toLower: "Handcrafted Arkansas" }} }},{k: "Cambridgeshire Danish Krone Specialist",v: 24710},{k: "Handmade Causeway withdrawal",v: '$obj.obj.obj.num'},{k: "Representative matrix",v: true}]] }, _id: 0}}],

        [{$project: {a: { $week: { $toDate: { $arrayToObject: [[{k: "Functionality",v: { $dayOfMonth: { $isoDayOfWeek: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $exp: 41909 },isoWeek: { $sqrt: 29974 },hour: { $cmp: [{ $arrayToObject: [[['$obj.obj.obj.num'],[],[{ $dateToString: {date: '$obj.obj.obj.date',format: "%j-%d-%U-%m-%w-%d-%w-%U-%H-%Y-%m",onNull: "task-force Arkansas Auto Loan Account"} }],[],[]]] },{ $range: [18,4] }] }} },timezone: "Asia/Nicosia"} } } }},{k: "violet deposit",v: '$obj.obj.obj.num'}]] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["indexing",18,16] }],38055] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num'],as: 'destin',cond: { $lt: [{ $arrayElemAt: [[],30297] },{ $millesecond: { $dateFromParts: {year: 63046,day: { $size: [[{ $dateToString: {date: '$$destin',format: "%Z-%V-%S-%Z-%Z-%w",timezone: "Pacific/Majuro"} }]] },millisecond: { $ln: 33428 }} } }] }} }, _id: 0}}],

        [{$project: {a: { $toDate: { $filter: {input: ['$obj.str',"Accountability Rustic"],cond: { $gt: [{ $arrayElemAt: [[],'$$this'] },{ $dateToString: {date: { $dayOfMonth: { $year: { $dateFromParts: {year: { $add: [4570] },minute: { $mod: [74041,'$$this'] },second: { $trunc: 19861 },millisecond: { $exp: '$num' }} } } },format: "%u-%w-%G-%Y",timezone: "Europe/Riga"} }] }} } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T16:00:39.351Z",onNull: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Fantastic Plastic Chicken Face to face"],69977] }, _id: 0}}],

        [{$project: {a: { $week: { $year: { $dayOfWeek: { $dayOfMonth: { $dateToString: {date: '$obj.obj.obj.date',onNull: { $substrBytes: ['$str',0,16] }} } } } } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $ltrim: {input: '$obj.obj.obj.str',chars: { $dateToString: { date: new Date("2018-09-06T19:12:14.934Z") } }} },15,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: '$obj.obj.str' },'$obj.obj.obj.str','$str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',49204,'$obj.obj.num'],[{ $toUpper: "upward-trending Saint Kitts and Nevis Markets" }],[{ $substrBytes: [{ $substr: ['$obj.obj.str',0,6] },19,12] },{ $rtrim: { input: '$str' } },'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $concat: ["bypass Buckinghamshire Colombia"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Response Frozen",v: false},{k: "transmitting",v: { $ltrim: { input: "indexing Car" } }}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],[],['$obj.num',3301,{ $log: [8426,{ $multiply: [] }] }],[{ $toString: { $arrayElemAt: [[],'$obj.num'] } },"Unbranded Metal Pizza synthesize"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [2888],as: 'joe',cond: { $in: [{ $arrayToObject: [[["Functionality"],[],[],['$$joe','$$joe']]] },{ $objectToArray: '$$joe' }] }} }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $toLower: "AI Steel Pakistan" }],[86550,'$obj.num']],defaults: [false]} }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',15,12] }, _id: 0}}],

        [{$project: {a: { $month: { $dateToParts: { date: { $dateFromParts: {year: { $sqrt: '$obj.num' },day: { $divide: [{ $floor: 5627 },35734] },hour: { $exp: 88244 },minute: { $log10: '$num' },second: { $cmp: [{ $substrBytes: [{ $toLower: '$obj.obj.str' },2,11] },{ $arrayToObject: [[]] }] },millisecond: { $pow: [56892,{ $divide: ['$num','$obj.obj.num'] }] },timezone: "America/Barbados"} } } } }, _id: 0}}],

        [{$project: {a: { $month: { $millesecond: { $week: { $dateToParts: {date: { $toDate: { $arrayToObject: [[{k: "Mountains experiences",v: true}]] } },iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Car Programmable Handcrafted"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toString: { $dateFromParts: {year: { $trunc: 34528 },month: { $ceil: 19824 },minute: { $floor: '$obj.obj.obj.num' },millisecond: { $abs: { $divide: [81393,48492] } }} } },0,19] }, _id: 0}}],

        [{$project: {a: { $second: { $minute: { $dayOfMonth: { $toDate: { $arrayElemAt: [[{ $substr: ["Garden",11,9] },'$obj.str'],'$obj.obj.num'] } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'nannie',cond: { $in: [{ $dateToString: {date: { $isoDayOfWeek: { $year: { $dayOfYear: { $isoWeekYear: { $second: { $dateFromParts: {year: { $indexOfArray: [{ $zip: {inputs: [["Cayman Islands Dollar COM deliver"],['$obj.obj.obj.num'],[{ $indexOfArray: [{ $range: [2,5] },{ $arrayElemAt: [['$$nannie',2572,47682],'$num'] },5] },{ $substrBytes: ['$$nannie',15,11] }],[{ $substrBytes: [{ $toUpper: '$$nannie' },4,7] },'$obj.obj.str',{ $concat: [{ $ltrim: {input: "lavender Cambridgeshire",chars: "Refined Soft Salad JBOD capacitor"} },"navigating Rest Chair","Rustic"] }]],useLongestLength: false} },{ $isoDayOfWeek: { $minute: { $second: { $hour: { $dateToString: {date: new Date("2018-09-06T07:57:16.491Z"),timezone: "MST7MDT"} } } } } },7] },month: { $multiply: [] },hour: { $trunc: 10685 },second: { $trunc: 1416 },timezone: "US/Pacific"} } } } } } },format: "%w-%S-%z-%d-%V-%z-%G-%U-%G-%%",onNull: '$$nannie'} },{ $zip: {inputs: [[],[]],defaults: []} }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%G-%u-%L-%%-%U-%z-%L-%u-%S-%L",timezone: "Kwajalein"} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T12:27:02.412Z",timezone: "America/Glace_Bay"} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$str',{ $toString: { $arrayElemAt: [[{ $pow: ['$obj.obj.num',66747] },'$obj.obj.num'],{ $floor: 56721 }] } }],[],[],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[62203],'$num'] }, _id: 0}}],

        [{$project: {a: { $toLower: "El Salvador Colon US Dollar Ramp" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "matrix Yemeni Rial",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["quantifying Cambridgeshire","Sudanese Pound panel Tasty Concrete Bacon"],[],['$str'],[{ $substrCP: [{ $concat: ["digital exploit Row"] },2,7] },{ $concat: [] }]]] }, _id: 0}}],

        [{$project: {a: { $toString: { $rtrim: { input: { $ltrim: {input: '$obj.str',chars: "e-commerce XML"} } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["South Dakota navigating Corporate"],[{ $dateToString: {date: '$obj.obj.obj.date',format: "%H-%m-%S-%M-%d-%L-%j",timezone: "America/Inuvik"} },{ $dateToString: {date: new Date("2018-09-06T12:11:06.345Z"),format: "%Y-%m-%L-%G-%u-%Y-%%-%j",onNull: { $substr: ['$str',0,0] }} }],[14433,98201],[{ $substrBytes: ["Credit Card Account",6,6] }],[],['$obj.obj.obj.str'],['$str',"Rial Omani","Computers calculating",'$obj.str'],['$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[66255,42545],61171] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["optimize",9,4] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[90572,'$num'],19728] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toString: { $objectToArray: '$obj' } },8,7] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str'],cond: { $gte: [{ $arrayElemAt: [['$obj.str'],81453] },{ $concatArrays: [[],[{ $log10: 47487 }],[],['$obj.obj.obj.str',{ $substrBytes: ["Home Loan Account sticky Graphical User Interface",9,20] },{ $trim: {input: { $concat: [{ $substrCP: ["Frozen turn-key",6,1] }] },chars: '$$this'} }],['$$this',{ $exp: '$$this' }]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num','$num'],[{ $toString: { $trim: {input: "Automated",chars: "Netherlands"} } },'$str','$obj.obj.obj.str'],[{ $concat: ['$obj.obj.str'] }],[],['$obj.obj.num',97836]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[false,false,11983,'$obj.obj.num'],44382] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:24:06.288Z"),timezone: "Europe/Vienna"} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $year: { $isoDayOfWeek: { $dayOfWeek: { $minute: { $dayOfWeek: { $toDate: { $arrayToObject: [[{k: "calculating Pizza protocol",v: 11915},{k: "Facilitator implement Associate",v: new Date("2018-09-06T12:36:35.477Z")}]] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',12,10] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "Indonesia Exclusive" },'$obj.obj.obj.str'],85602] }, _id: 0}}],

        [{$project: {a: { $range: [13,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],26027] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[82645],19907] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $size: [[{ $substrCP: ["invoice Practical synthesize",8,17] }]] },isoDayOfWeek: { $multiply: ['$obj.num'] },hour: { $ln: '$num' },millisecond: { $trunc: 84744 },timezone: "America/Juneau"} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[33340,95440]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $ltrim: { input: "reciprocal Burgs" } },{ $toString: { $map: {input: ['$num',54923],in: { $mod: [88077,'$$this'] }} } }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $year: { $toDate: { $concatArrays: [[{ $ltrim: { input: { $substrBytes: [{ $trim: {input: "SMTP",chars: '$obj.obj.obj.str'} },7,13] } } },"Illinois withdrawal Fresh"],[],["real-time Gorgeous"],[]] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Bedfordshire THX",'$obj.obj.obj.str'],[],[{ $dateToString: {date: '$obj.date',format: "%j-%H-%z-%U-%Z-%S-%%-%G-%%",onNull: { $concat: [] }} },{ $toLower: "invoice Cliff" }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $substrBytes: ["one-to-one Customer-focused redundant",2,6] }],['$obj.num','$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $reverseArray: [[]] } }],[],[],[58983],["Quality Florida",'$obj.obj.str',{ $substrBytes: ["architectures Cotton",1,12] }],['$obj.obj.str',"Industrial web-readiness"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Inverse",v: { $toString: { $isoWeek: new Date("2018-09-06T09:30:50.999Z") } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["generate Licensed application",{ $toLower: "e-services mobile incentivize" }],4063] }, _id: 0}}],

        [{$project: {a: { $hour: { $second: { $dateToParts: {date: { $millesecond: { $dateFromParts: {isoWeekYear: { $subtract: [96031,{ $divide: [91721,'$obj.obj.num'] }] },isoWeek: { $size: [[{ $dateToString: { date: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T12:56:52.784Z",format: "%d-%U-%u-%%-%U-%j-%m-%u",timezone: "Pacific/Apia",onError: { $arrayToObject: [[{k: "Cotton Practical",v: true},{k: "deposit solutions",v: 52083}]] }} } } } }]] },isoDayOfWeek: { $ln: '$num' },minute: { $add: ['$num',{ $subtract: [36801,'$obj.num'] }] },second: { $floor: { $ln: '$obj.obj.num' } }} } },timezone: "GB",iso8601: true} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',18396],[2542],["Practical",'$obj.obj.obj.str'],[{ $substr: [{ $toUpper: "sticky e-tailers SMS" },9,19] },{ $ltrim: {input: '$obj.str',chars: "Movies hack"} },'$str'],[]]] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $toLower: "Face to face Money Market Account panel" },'$str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["Horizontal",18,9] },"Designer",'$obj.str'],{ $trunc: 99680 }] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.num'],["parse Developer",{ $dateToString: { date: { $dateToParts: {date: { $second: { $hour: { $year: { $dateFromString: {dateString: "2018-09-06T15:47:08.830Z",timezone: "America/Vancouver",onNull: { $toLower: { $toString: { $dateFromString: {dateString: "2018-09-06T11:35:35.302Z",format: "%Y-%V-%G-%L-%%-%d-%M-%u-%S"} } } }} } } } },timezone: "America/Aruba",iso8601: true} } } }],["markets",{ $rtrim: {input: '$obj.str',chars: '$obj.obj.str'} }]],defaults: [/Advanced/]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],57133] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.str',"Ergonomic Wooden Sausages"],as: 'amy',in: { $trunc: { $mod: ['$$amy',74245] } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $cmp: [{ $arrayToObject: [[{k: "Bacon Web",v: 48793}]] },{ $map: {input: ['$num','$obj.obj.obj.num'],in: { $log: [4567,'$obj.obj.obj.num'] }} }] }] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$obj.obj.obj.str' }],56818] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["wireless"],['$obj.str',{ $substrBytes: [{ $toUpper: "moratorium Lead Japan" },3,18] },"Berkshire",'$obj.str'],[]],useLongestLength: true,defaults: [{}]} }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfYear: { $isoWeekYear: { $isoWeek: new Date("2018-09-06T12:11:00.505Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ['$str',"Steel olive"] },"FTP"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',23014,'$obj.num'],91721] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoDayOfWeek: { $isoDayOfWeek: { $week: { $millesecond: { $year: { $month: { $minute: { $dateToString: {date: { $dayOfWeek: { $millesecond: { $dateFromParts: {year: { $abs: 77658 },month: { $multiply: ['$obj.num','$obj.obj.num',11341] },millisecond: { $exp: { $subtract: ['$obj.obj.num','$obj.obj.obj.num'] } }} } } },format: "%u-%G-%H-%d-%H-%u-%z-%u-%w-%z-%V-%d",timezone: "Etc/GMT-8",onNull: "Credit Card Account Avon Movies"} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $sqrt: '$num' }],91194] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.str',chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str','$str'],as: 'nicola',in: { $cmp: [{ $isoWeek: { $dayOfMonth: { $dateToString: {date: { $millesecond: new Date("2018-09-05T22:27:30.117Z") },format: "%G-%Z-%U-%j-%m-%j-%m-%S",onNull: { $substrBytes: [{ $substr: ["connecting",4,16] },5,1] }} } } },{ $arrayToObject: [[[{ $concat: ["quantifying","withdrawal"] },{ $toString: { $month: { $second: { $isoDayOfWeek: { $dateToString: {date: { $dayOfYear: { $isoWeekYear: { $dayOfWeek: { $hour: { $isoDayOfWeek: { $minute: { $dateToParts: {date: { $dayOfYear: { $dayOfWeek: { $dateToString: {date: '$$nicola',format: "%L-%z-%G-%d-%V-%V-%H",timezone: "America/Indiana/Indianapolis",onNull: { $arrayElemAt: [[],32103] }} } } },timezone: "America/Argentina/Mendoza",iso8601: false} } } } } } } },timezone: "America/Tortola"} } } } } }],['$obj.num'],[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Tactics"],['$obj.obj.num','$obj.num'],[7922],[],[{ $toLower: { $substrBytes: ["Sausages Bedfordshire",7,9] } },'$str']],useLongestLength: true,defaults: [/^Unbranded Rubber Chair|Buckinghamshire|multi\-state|innovate/]} }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Steel open-source"],[{ $substrCP: ['$obj.str',5,3] }],[73919,'$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $week: { $millesecond: { $dateFromString: {dateString: "2018-09-06T09:19:34.649Z",timezone: "Pacific/Midway",onError: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T17:52:29.598Z",onError: { $map: {input: [],in: { $log: [87908,1460] }} },onNull: { $arrayToObject: [[{k: "Practical bifurcated",v: new Date("2018-09-06T03:53:04.375Z")}]] }} } }} } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $week: { $isoWeek: { $millesecond: { $dayOfWeek: { $second: { $year: { $dateFromParts: {year: { $pow: [31489,38109] },day: { $exp: '$obj.num' },hour: { $multiply: [] }} } } } } } } },onNull: { $ltrim: { input: "Director Advanced Jordanian Dinar" } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],63341] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $range: [18,15] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toString: { $reverseArray: [['$obj.obj.str']] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num',14030],[{ $concat: ['$obj.obj.str'] }],[],["New Leu",{ $substrCP: ["Jamaican Dollar",19,0] },"payment plug-and-play"]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $minute: { $isoDayOfWeek: { $isoWeekYear: { $year: { $toDate: { $arrayElemAt: [[{ $trim: { input: "Orchestrator" } }],73212] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: { $dayOfWeek: { $toDate: { $concatArrays: [["Hryvnia",{ $ltrim: { input: '$obj.obj.str' } }],[16594,{ $multiply: [] }],[{ $rtrim: {input: { $toUpper: '$obj.str' },chars: '$str'} },'$obj.str',"Borders Credit Card Account Cuba"]] } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toString: { $dayOfYear: { $hour: { $dateFromParts: {year: { $divide: ['$obj.obj.num','$num'] },day: 1084,hour: { $log10: 85737 },second: { $sqrt: '$obj.obj.num' },millisecond: { $abs: '$num' }} } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $year: '$obj.date' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: [] }],['$obj.obj.str',"fresh-thinking Strategist Fantastic",'$str'],[],[],['$obj.str',56964]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "rich",v: 30297}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.str',chars: "firewall incubate"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Lesotho Checking Account"],[],['$obj.num'],[{ $dateToString: { date: new Date("2018-09-06T11:26:51.517Z") } },'$obj.obj.str',"deposit"],[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',{ $ceil: '$obj.num' }],1976] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "open-source Regional haptic",v: { $week: { $month: { $dayOfMonth: { $hour: '$date' } } } }}]] }, _id: 0}}],

        [{$project: {a: { $minute: { $hour: { $week: { $millesecond: new Date("2018-09-06T02:47:58.153Z") } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',18,19] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $second: { $dayOfMonth: { $dayOfWeek: { $dayOfWeek: { $dateToParts: {date: { $dayOfYear: { $dayOfWeek: { $hour: { $second: { $dateToParts: { date: { $hour: { $toDate: { $reverseArray: [["Cook Islands envisioneer"]] } } } } } } } } },timezone: "Asia/Macao",iso8601: false} } } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["copy",8,6] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],54862] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T03:47:14.566Z",format: "%V-%%-%w-%Z-%S-%j-%z-%M-%L-%Z-%M-%U",onError: { $reverseArray: [[{ $rtrim: { input: "Sleek" } }]] },onNull: { $arrayElemAt: [[],54932] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $millesecond: { $isoWeek: { $dayOfWeek: { $week: { $isoWeekYear: { $dateFromParts: {year: { $multiply: [36173] },millisecond: { $subtract: ['$obj.obj.obj.num','$obj.obj.obj.num'] }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "yellow",v: true},{k: "even-keeled benchmark",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[]] } }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $dateToString: {date: '$date',format: "%G-%u-%Z-%M-%L-%u-%d-%w-%Z",onNull: { $arrayToObject: [[['$obj.num'],[],[],[],["copy",{ $substr: [{ $ltrim: { input: '$obj.obj.str' } },17,5] }]]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "reboot Credit Card Account transmit",v: new Date("2018-09-06T18:07:41.644Z")},{k: "analyzer",v: { $concat: [{ $toString: { $year: { $dayOfYear: { $isoWeekYear: { $isoDayOfWeek: { $second: { $month: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $log10: '$num' },isoDayOfWeek: { $sqrt: '$num' },hour: { $abs: '$obj.obj.num' },minute: { $subtract: [55558,45456] },second: { $cmp: [{ $dayOfWeek: { $dateToString: {date: new Date("2018-09-06T00:26:57.432Z"),format: "%d-%S-%S-%V-%%-%m-%w-%S-%m-%M-%m",timezone: "Europe/Athens",onNull: '$obj.obj.str'} } },{ $arrayElemAt: [[],68733] }] },millisecond: 92537} },timezone: "America/Argentina/Ushuaia"} } } } } } } } }] }}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["blue"],as: 'martina',cond: { $in: [{ $arrayElemAt: [[],'$obj.num'] },{ $objectToArray: '$$martina' }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["Groves"],[{ $dateToString: { date: new Date("2018-09-06T17:52:27.893Z") } },'$obj.obj.str',"Avenue info-mediaries"]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["bandwidth Australia encoding",'$str'],in: { $ln: 19708 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],45945] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfWeek: { $isoWeekYear: { $month: { $dayOfMonth: { $toDate: { $arrayToObject: [[['$obj.str'],[],[],[],[{ $substr: ['$obj.obj.str',19,2] },'$obj.obj.str']]] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $hour: { $isoWeekYear: { $isoDayOfWeek: { $month: { $dateToString: {date: '$date',format: "%u-%m-%H-%H-%M-%M",onNull: '$str'} } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $map: {input: [32613,25988,'$obj.num','$num'],in: { $add: [{ $exp: 19599 }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["moderator white Rapids",{ $substrBytes: [{ $concat: [{ $rtrim: { input: '$str' } },"Multi-channelled Administrator",{ $toUpper: "Regional Future" }] },13,5] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$str'],[{ $trunc: 4886 }],[2067],[]] }, _id: 0}}],

        [{$project: {a: { $substr: ["SMS Creative",13,17] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $week: { $dateToParts: { date: { $isoWeekYear: { $dayOfWeek: { $toDate: { $arrayToObject: [[[{ $toString: { $dateFromParts: {isoWeekYear: { $ln: 3938 },hour: { $abs: '$obj.obj.num' },minute: { $multiply: ['$obj.obj.obj.num'] },second: { $floor: '$num' },timezone: "Etc/GMT-11"} } }]]] } } } } } } } } }, _id: 0}}],

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
