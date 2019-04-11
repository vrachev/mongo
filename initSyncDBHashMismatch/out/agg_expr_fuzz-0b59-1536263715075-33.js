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
        return coll.insert({_id: 20650,num: 22839,date: new Date("2018-09-06T13:25:36.184Z"),array: [new Date("2018-09-06T10:07:07.709Z"),78013,"Rand Loti leading-edge Consultant",new Date("2018-09-06T07:35:58.238Z"),{_id: 20651,str: "turquoise",num: 9108,date: new Date("2018-09-06T04:53:41.710Z"),array: [],obj: {_id: 20652,array: [9669]}},"focus group",new Date("2018-09-06T12:11:23.025Z"),88451,"leading-edge SAS Cambridgeshire",["Specialist"],[],"Games copy",new Date("2018-09-06T09:36:00.543Z"),[new Date("2018-09-06T16:53:54.837Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20653,num: 25497,date: new Date("2018-09-06T17:21:23.912Z"),array: ["Coordinator Michigan mobile",38151,44146,[],new Date("2018-09-05T22:38:35.326Z"),new Date("2018-09-06T17:49:46.479Z"),{_id: 20654,str: "Generic",num: 44808,date: new Date("2018-09-06T14:32:44.812Z"),array: [],obj: {}},"port generate Gold",92416,95880,"strategize Generic Wooden Keyboard",new Date("2018-09-06T10:22:03.692Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20655,num: 49725,date: new Date("2018-09-06T11:00:32.491Z"),array: [],obj: {_id: 20656,str: "analyzing budgetary management",date: new Date("2018-09-06T10:16:15.503Z"),array: [],obj: {_id: 20657,str: "Italy Baby Incredible Fresh Hat",num: 42884,date: new Date("2018-09-06T11:34:34.012Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20658,str: "Gorgeous",num: 78607,date: new Date("2018-09-06T03:52:39.875Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20659,str: "24/7 Music",num: 37154,date: new Date("2018-09-05T22:59:13.786Z"),array: [],obj: {_id: 20660,str: "Crescent synergistic",num: 27043,date: new Date("2018-09-05T20:55:33.127Z"),array: ["Reactive",9699,[new Date("2018-09-06T11:33:52.124Z"),new Date("2018-09-06T12:10:29.638Z"),28980,[],new Date("2018-09-06T16:30:00.058Z")],43464,"Saint Kitts and Nevis AI Berkshire","solid state","algorithm hard drive payment",new Date("2018-09-06T01:57:54.213Z"),{_id: 20661,str: "Grocery Research",date: new Date("2018-09-06T00:40:02.532Z"),array: [],obj: {}},new Date("2018-09-06T11:17:04.767Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 20662,num: 39895,date: new Date("2018-09-06T01:58:17.934Z"),array: [13982,44854,new Date("2018-09-06T08:05:28.991Z"),"Georgia",new Date("2018-09-06T06:44:14.759Z"),new Date("2018-09-06T13:45:39.066Z"),"bypass redundant Data",[30756,new Date("2018-09-06T18:33:09.207Z"),"alliance Steel Bedfordshire"],new Date("2018-09-06T12:43:10.860Z"),[],{_id: 20663,str: "Buckinghamshire Computer",num: 24318,date: new Date("2018-09-06T07:10:44.975Z"),array: [],obj: {}},{_id: 20664,str: "Toys back-end",num: 61993,date: new Date("2018-09-06T14:43:02.305Z"),array: [],obj: {}},32221],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20665,str: "Fully-configurable microchip",num: 75464,obj: {_id: 20666,str: "Cheese gold",date: new Date("2018-09-06T19:40:43.251Z"),array: ["Licensed Concrete Ball wireless",new Date("2018-09-06T07:27:04.653Z"),new Date("2018-09-06T04:24:27.965Z"),706,new Date("2018-09-05T21:33:04.156Z"),new Date("2018-09-06T03:33:28.711Z"),"Operations","Algerian Dinar",91762,96581],obj: {_id: 20667,str: "hierarchy Factors Plastic",num: 54850,date: new Date("2018-09-05T23:19:52.879Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 20668,str: "Coordinator",num: 8694,date: new Date("2018-09-06T06:13:20.677Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20669,str: "Rustic Fresh Pizza convergence",num: 84509,date: new Date("2018-09-06T14:12:14.252Z"),array: [],obj: {_id: 20670,str: "Pizza withdrawal Usability",num: 8501,date: new Date("2018-09-06T15:22:38.795Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20671,str: "Pizza withdrawal",num: 30538,date: new Date("2018-09-06T00:54:43.432Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20672,str: "functionalities Estate",num: 54880,date: new Date("2018-09-06T07:37:18.380Z"),array: [92276,42935,"Home Loan Account navigate","benchmark Implementation Pakistan Rupee",[new Date("2018-09-05T22:02:13.099Z")],new Date("2018-09-06T03:56:30.140Z"),"Credit Card Account Granite Investment Account",84163,new Date("2018-09-06T15:51:02.590Z"),{_id: 20673,str: "Buckinghamshire",num: 90075,array: [],obj: {_id: 20674,num: 22339,date: new Date("2018-09-06T14:19:03.592Z"),array: []}},new Date("2018-09-05T23:54:59.226Z"),[],new Date("2018-09-06T06:59:37.143Z"),{_id: 20675,str: "Handcrafted reboot",num: 37359,date: new Date("2018-09-05T22:07:40.268Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20676,num: 16498,date: new Date("2018-09-06T18:35:38.391Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20677,date: new Date("2018-09-05T22:49:10.805Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20678,str: "Wooden Station Refined",num: 82943,date: new Date("2018-09-06T18:23:46.168Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20679,str: "Security",num: 21173,date: new Date("2018-09-06T06:56:00.499Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20680,str: "Identity Missouri",num: 34491,date: new Date("2018-09-05T20:50:36.570Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20681,str: "task-force Pizza Fantastic",num: 50165,date: new Date("2018-09-05T21:10:23.319Z"),array: [{_id: 20682,str: "Belize",num: 27309,date: new Date("2018-09-06T09:51:14.279Z"),array: [],obj: {}},{_id: 20683,num: 34866,array: [],obj: {}},16030,"static Ohio evolve",53452,new Date("2018-09-06T00:14:24.622Z"),[new Date("2018-09-06T10:18:17.373Z")],new Date("2018-09-06T18:15:02.195Z"),"Springs",8975,"Oman optical"],obj: {_id: 20684,str: "bottom-line Concrete bluetooth",num: 33619,date: new Date("2018-09-06T12:22:08.427Z"),obj: {_id: 20685,str: "Saint Barthelemy",date: new Date("2018-09-06T06:56:29.098Z"),array: ["Garden value-added Wooden",9504],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20686,str: "programming Fresh Fantastic",num: 80632,date: new Date("2018-09-06T08:47:05.887Z"),array: ["withdrawal strategize",new Date("2018-09-06T08:40:15.757Z"),53441,"withdrawal Solutions compress",78633,[],"transmit Intelligent Rubber Soap Bedfordshire",38493,[],new Date("2018-09-06T06:18:19.973Z"),"calculate Car Hill"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20687,str: "feed",num: 7044,date: new Date("2018-09-06T09:27:22.716Z"),array: [[],"Wallis and Futuna olive","Licensed Marketing override","Incredible Wooden Cheese Senior",76817,new Date("2018-09-06T17:54:03.743Z"),17541,new Date("2018-09-06T12:28:34.489Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20688,str: "withdrawal Avon support",num: 25241,date: new Date("2018-09-06T01:44:34.191Z"),array: [new Date("2018-09-06T11:05:50.738Z"),new Date("2018-09-06T19:52:44.862Z"),new Date("2018-09-06T06:49:22.521Z"),"knowledge user compressing",{_id: 20689,str: "Cambridgeshire scalable",num: 4791,obj: {}},63356,[],62689,"Illinois Kuwaiti Dinar Accountability","Bacon override Paradigm",71420,new Date("2018-09-06T13:08:34.914Z")],obj: {_id: 20690,str: "Dynamic payment success",num: 62179,date: new Date("2018-09-06T06:35:58.311Z"),array: ["Factors Licensed Granite Computer",{_id: 20691,num: 71852,date: new Date("2018-09-05T20:22:26.232Z"),obj: {_id: 20692,str: "productize Liberian Dollar",num: 37127,date: new Date("2018-09-06T04:17:45.877Z"),array: [{_id: 20693,str: "Gorgeous Frozen Fish ADP Stravenue",array: [],obj: {_id: 20694,str: "matrix",date: new Date("2018-09-06T17:10:08.050Z"),array: [],obj: {_id: 20695,str: "Frozen Internal Tasty Soft Bike",date: new Date("2018-09-06T08:21:45.152Z"),array: [],obj: {}}}}],obj: {_id: 20696,num: 32567,array: [68614]}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 20697,str: "transmitter",num: 41991,date: new Date("2018-09-05T23:30:49.607Z"),array: [{_id: 20698,num: 38976,array: [],obj: {}},new Date("2018-09-06T06:23:54.177Z"),"Versatile","mission-critical Personal Loan Account Planner",19023,"bi-directional",[],new Date("2018-09-06T16:26:43.239Z"),new Date("2018-09-06T03:06:57.096Z"),new Date("2018-09-05T22:28:21.682Z")],obj: {_id: 20699,str: "Granite Steel Lead",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20700,str: "CSS compressing withdrawal",obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20701,str: "adapter Bedfordshire",num: 7833,array: [[],"visualize models USB","Ville strategize",28710,new Date("2018-09-06T05:25:22.898Z"),{_id: 20702,num: 59519,date: new Date("2018-09-06T10:36:16.935Z"),obj: {_id: 20703,str: "Universal",num: 30242,date: new Date("2018-09-05T21:16:17.590Z"),array: [[64059]],obj: {_id: 20704,str: "California",num: 62196,date: new Date("2018-09-06T11:22:34.449Z"),array: [],obj: {}}}},{_id: 20705,str: "withdrawal"},27447,"deposit Generic Concrete Soap",new Date("2018-09-06T16:16:10.499Z"),new Date("2018-09-06T06:09:49.359Z"),24111],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20706,str: "evolve Paradigm",num: 63096,date: new Date("2018-09-06T06:40:21.948Z"),array: ["Diverse Strategist",48187,39979,96957,new Date("2018-09-06T15:55:17.626Z"),new Date("2018-09-06T19:41:03.378Z"),"Pizza",{_id: 20707,num: 13810,date: new Date("2018-09-06T14:07:35.629Z"),array: ["SCSI","Sleek Metal Ball Synchronised",[new Date("2018-09-06T14:00:17.577Z"),{_id: 20708,str: "programming moratorium vortals",num: 59969,date: new Date("2018-09-05T23:27:07.341Z"),array: [],obj: {_id: 20709,str: "Mouse Engineer",num: 70889,date: new Date("2018-09-06T08:30:55.930Z"),obj: {_id: 20710,array: [],obj: {}}}}],new Date("2018-09-06T10:28:32.177Z"),49768,["Wooden Robust Fresh"]],obj: {}},new Date("2018-09-06T13:32:36.720Z"),45218]});
    },

    function(coll) {
        return coll.insert({_id: 20711,str: "end-to-end SMS alarm",num: 33909,date: new Date("2018-09-06T19:55:09.255Z"),array: [19843,new Date("2018-09-05T23:56:11.164Z"),{_id: 20712,num: 56195,date: new Date("2018-09-06T19:45:29.115Z"),array: ["Corners"],obj: {_id: 20713,str: "South Carolina Bacon",num: 79108,array: ["Personal Loan Account","benchmark Montana"]}},new Date("2018-09-05T21:43:43.499Z"),68502,new Date("2018-09-06T03:55:35.848Z"),new Date("2018-09-06T04:32:24.101Z"),20202,64555,"Freeway Riel Lakes",new Date("2018-09-06T16:51:00.606Z"),new Date("2018-09-06T00:54:40.104Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20714,str: "Belgium",num: 7929,date: new Date("2018-09-06T10:50:59.662Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20715,str: "SCSI Accounts",num: 64161,date: new Date("2018-09-06T13:01:09.436Z"),array: ["Supervisor Buckinghamshire withdrawal",{_id: 20716,str: "feed deposit Soft",num: 30570,date: new Date("2018-09-05T23:47:29.223Z"),array: [],obj: {_id: 20717,str: "systems Future-proofed",date: new Date("2018-09-06T09:27:17.978Z"),array: [],obj: {}}},"SMS",new Date("2018-09-06T18:21:57.365Z"),62753,new Date("2018-09-06T06:01:30.721Z"),10297,[],18722,"Incredible",71722,{_id: 20718,str: "Alaska Money Market Account dynamic",num: 22357,date: new Date("2018-09-06T07:00:41.325Z"),array: [new Date("2018-09-05T23:46:18.207Z")]},{_id: 20719,str: "SDD",array: [new Date("2018-09-06T09:23:49.193Z"),"Tuna Rubber Salad",new Date("2018-09-05T20:36:50.859Z"),[66933],{_id: 20720,str: "Representative Cayman Islands Dollar frictionless",num: 29684,date: new Date("2018-09-06T19:40:48.883Z"),array: [],obj: {}}],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 20721,str: "Tuna",num: 49286,date: new Date("2018-09-06T14:42:23.476Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20722,str: "Jordanian Dinar Baby Money Market Account",num: 8335,date: new Date("2018-09-06T05:05:57.483Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20723,str: "Officer",num: 44537,date: new Date("2018-09-06T16:38:36.041Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20724,str: "withdrawal Steel",date: new Date("2018-09-06T16:03:18.650Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20725,str: "Utah",num: 84342,date: new Date("2018-09-06T19:44:53.737Z"),obj: {_id: 20726,num: 62254,date: new Date("2018-09-06T19:28:07.037Z"),array: [new Date("2018-09-06T10:53:22.732Z"),"Handmade Wooden Shoes",71740,"Mountain",74222,new Date("2018-09-05T22:32:04.062Z"),57022,{_id: 20727,num: 49830,date: new Date("2018-09-06T19:22:27.265Z"),array: [],obj: {}},"Agent","Chips",new Date("2018-09-06T05:53:21.987Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20728,str: "Squares Rustic Soft Chair Wooden",num: 83222,date: new Date("2018-09-06T01:24:17.018Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20729,str: "Future Wooden",num: 26100,date: new Date("2018-09-05T19:59:41.334Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20730,str: "framework mobile Sports",num: 58516,date: new Date("2018-09-05T23:15:32.477Z"),array: ["optimize",77476,[],{_id: 20731,str: "RSS application Visionary",num: 57553,date: new Date("2018-09-06T07:30:57.970Z"),array: [],obj: {_id: 20732,str: "leverage Tools leading edge",obj: {_id: 20733,num: 62948,date: new Date("2018-09-06T16:47:08.543Z"),obj: {}}}},95072,new Date("2018-09-05T20:11:12.691Z"),new Date("2018-09-06T06:57:41.909Z"),26882,"target synthesizing Pre-emptive",new Date("2018-09-06T06:13:36.634Z"),[],"array withdrawal integrate",{_id: 20734,str: "Court SMTP",num: 55361,date: new Date("2018-09-05T21:35:56.852Z"),array: ["Representative quantify composite",{_id: 20735,str: "Outdoors scale Cheese",array: [new Date("2018-09-06T07:28:47.838Z"),new Date("2018-09-06T18:16:22.236Z")]}],obj: {_id: 20736,num: 34575,date: new Date("2018-09-06T13:34:03.334Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 20737,str: "Park Quality-focused",num: 87165,date: new Date("2018-09-06T10:06:47.424Z"),array: [82948,73486,"deposit Groves",new Date("2018-09-06T06:16:00.290Z"),{_id: 20738,str: "EXE SAS",date: new Date("2018-09-06T17:44:35.614Z"),array: [],obj: {_id: 20739,str: "navigating maroon Intelligent Rubber Fish",num: 56892,array: [],obj: {_id: 20740,str: "strategy Self-enabling Implementation",num: 59895,date: new Date("2018-09-06T09:49:52.897Z"),obj: {}}}},new Date("2018-09-06T03:55:42.678Z"),"Iowa Arkansas Decentralized","Savings Account turquoise IB",["Salad",new Date("2018-09-06T07:58:14.307Z")],[6043,[],"Canyon Reduced Fantastic"]]});
    },

    function(coll) {
        return coll.insert({_id: 20741,str: "Auto Loan Account",num: 42116,date: new Date("2018-09-05T20:23:29.139Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20742,str: "bluetooth Money Market Account input",num: 91848,date: new Date("2018-09-06T05:43:36.151Z"),array: ["Functionality scale Sri Lanka",new Date("2018-09-06T01:20:33.706Z"),{_id: 20743,str: "Assurance",date: new Date("2018-09-05T23:07:40.161Z"),array: [],obj: {}},"Niue",45746,new Date("2018-09-06T05:11:56.855Z"),{_id: 20744,str: "Tools",num: 65858,date: new Date("2018-09-06T04:33:37.623Z"),array: [new Date("2018-09-06T16:18:09.862Z"),84359],obj: {_id: 20745,str: "Licensed lavender",num: 18980,array: [new Date("2018-09-06T07:54:52.337Z"),"Tenge Forint silver"],obj: {_id: 20746,array: [],obj: {}}}},{_id: 20747,str: "benchmark facilitate Pants",obj: {}},22628,[],new Date("2018-09-06T17:43:29.997Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20748,str: "Chair",num: 34678,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20749,str: "bypass",num: 77796,date: new Date("2018-09-06T03:04:08.491Z"),array: [],obj: {_id: 20750,str: "solution",num: 5152,date: new Date("2018-09-05T20:32:05.980Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20751,str: "Manager hacking",num: 97820,date: new Date("2018-09-06T18:02:18.486Z"),array: [],obj: {_id: 20752,str: "functionalities",num: 56315,date: new Date("2018-09-06T14:23:35.706Z"),array: [16343,"Salad Shirt impactful","Mission vortals Metal",{_id: 20753,str: "Comoros",num: 93880,date: new Date("2018-09-06T10:00:13.889Z")},42515,new Date("2018-09-06T15:40:03.936Z"),"Extension PNG",70798,new Date("2018-09-06T14:55:22.178Z"),new Date("2018-09-06T11:10:15.949Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20754,str: "Synergistic",num: 61544,date: new Date("2018-09-06T19:10:17.954Z"),array: [13061,"Awesome","Sleek Soft Ball Exclusive",new Date("2018-09-06T17:17:43.190Z"),[],"application port",[],new Date("2018-09-06T08:43:58.009Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20755,str: "mint green Robust",num: 6179,date: new Date("2018-09-06T15:20:28.625Z"),array: ["South Dakota AGP Group","Sleek Cotton Tuna Indiana moratorium",new Date("2018-09-05T21:28:26.065Z"),new Date("2018-09-06T05:46:16.877Z"),new Date("2018-09-06T15:08:16.020Z"),new Date("2018-09-06T10:03:00.134Z"),92951,{_id: 20756,str: "Borders tan solutions",array: [],obj: {}},67173,[],[{_id: 20757,num: 67537,date: new Date("2018-09-06T05:16:45.182Z"),array: [],obj: {}},"models back-end",6206]]});
    },

    function(coll) {
        return coll.insert({_id: 20758,str: "Incredible Steel Pants",num: 7186,date: new Date("2018-09-06T11:01:11.055Z"),array: [new Date("2018-09-05T23:07:38.986Z"),93777,new Date("2018-09-06T14:16:37.191Z"),5370,["e-business Ouguiya THX"],{_id: 20759,str: "interface tangible",date: new Date("2018-09-06T07:13:19.274Z"),array: [],obj: {_id: 20760,date: new Date("2018-09-06T10:29:21.468Z"),obj: {}}},[],"enable Rustic","policy",new Date("2018-09-06T04:54:29.256Z"),new Date("2018-09-06T11:40:04.068Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20761,str: "Data",num: 47583,date: new Date("2018-09-06T10:57:04.890Z"),array: [],obj: {_id: 20762,str: "Cambridgeshire Specialist",num: 60768,date: new Date("2018-09-06T06:30:00.974Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20763,str: "auxiliary Berkshire Crescent",date: new Date("2018-09-06T17:45:13.250Z"),array: ["Computers Mountain","Rustic green",7280,[],new Date("2018-09-06T03:55:04.731Z"),new Date("2018-09-06T17:24:03.570Z"),33732,{_id: 20764,str: "white",num: 90277,date: new Date("2018-09-06T12:36:51.836Z"),array: []},new Date("2018-09-06T15:12:29.351Z"),[],"collaborative","withdrawal Mount Kentucky",new Date("2018-09-06T04:23:11.812Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20765,str: "circuit",num: 81827,date: new Date("2018-09-06T02:17:20.859Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20766,str: "Vision-oriented",num: 65325,date: new Date("2018-09-06T13:04:34.837Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20767,str: "circuit Norwegian Krone",num: 78890,date: new Date("2018-09-06T02:23:19.519Z"),obj: {_id: 20768,str: "1080p",num: 37354,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20769,str: "Shoes Zambian Kwacha",num: 3891,array: [new Date("2018-09-06T17:36:02.748Z"),52535,"attitude-oriented Plastic",56457,20183,new Date("2018-09-06T08:32:21.075Z"),[],"transmit Credit Card Account",34296,{_id: 20770,str: "Maine",date: new Date("2018-09-06T18:05:48.267Z"),array: [],obj: {_id: 20771,str: "Berkshire",num: 78816,date: new Date("2018-09-05T23:05:22.039Z"),array: [[{_id: 20772,date: new Date("2018-09-06T07:48:11.483Z"),array: []},"Tasty Steel Sausages Soft",58100],"Shoes Liaison Cotton"],obj: {}}},[],new Date("2018-09-06T09:33:23.420Z")],obj: {_id: 20773,num: 61808,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20774,str: "gold Generic Soft Cheese Tasty Fresh Hat",num: 96537,date: new Date("2018-09-06T13:32:50.250Z"),array: [[new Date("2018-09-06T04:44:40.860Z"),48770,new Date("2018-09-06T18:33:22.885Z")],new Date("2018-09-05T19:55:46.899Z"),95789,"Rustic Gorgeous Plastic Car","Data Health",{_id: 20775,str: "Pa'anga",num: 89744,date: new Date("2018-09-06T17:11:11.214Z"),array: [75094],obj: {}},new Date("2018-09-05T23:15:09.578Z"),"panel empowering PCI",13358,85521,[]],obj: {_id: 20776,str: "orchid Agent",num: 75433,obj: {_id: 20777,str: "transitional",date: new Date("2018-09-06T14:43:22.661Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20778,num: 80286,date: new Date("2018-09-05T22:28:47.946Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20779,str: "zero administration Minnesota",num: 45669,date: new Date("2018-09-06T04:04:09.508Z"),array: [12212,new Date("2018-09-05T20:09:54.119Z"),{_id: 20780,str: "Rubber",num: 95413,array: [],obj: {_id: 20781,num: 29812,date: new Date("2018-09-06T19:25:48.910Z"),array: [],obj: {}}},43370,"Granite",[new Date("2018-09-06T02:24:17.455Z")],14169,"monitor Springs Designer","Congolese Franc","Internal",new Date("2018-09-05T23:22:13.945Z"),"back-end blue",{_id: 20782,str: "incentivize Assurance pixel",num: 79051,date: new Date("2018-09-06T05:56:39.723Z"),array: [new Date("2018-09-06T13:22:53.513Z")]},94253,62369],obj: {_id: 20783,str: "Licensed Cotton Bike sensor",date: new Date("2018-09-06T04:28:39.934Z")}});
    },

    function(coll) {
        return coll.insert({_id: 20784,str: "vertical Credit Card Account",num: 86512,array: []});
    },

    function(coll) {
        return coll.insert({_id: 20785,str: "Solutions",num: 98188,date: new Date("2018-09-06T13:17:09.497Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20786,str: "Kyat purple Gardens",num: 54828,date: new Date("2018-09-05T21:55:26.012Z"),array: [],obj: {_id: 20787,str: "Money Market Account convergence",num: 36405,date: new Date("2018-09-06T12:06:47.186Z"),array: [[82876,8785,"capacitor Pennsylvania extensible","compress"],new Date("2018-09-06T12:15:20.987Z"),new Date("2018-09-06T04:35:28.755Z"),84042,{_id: 20788,str: "Cheese",num: 40205,date: new Date("2018-09-06T04:44:23.106Z"),array: [],obj: {_id: 20789,str: "Tools primary",num: 83147,date: new Date("2018-09-06T18:29:15.535Z")}},new Date("2018-09-06T00:52:47.071Z"),75813,"AI grow Berkshire","Berkshire Avon"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20790,str: "purple programming Licensed",date: new Date("2018-09-06T08:20:55.828Z"),array: [new Date("2018-09-06T00:14:33.722Z"),new Date("2018-09-05T23:57:12.982Z"),"Persistent Officer red",85181,{_id: 20791,str: "Fundamental",num: 70387,date: new Date("2018-09-06T01:36:46.366Z"),array: [],obj: {}},new Date("2018-09-06T04:16:43.284Z"),25581,{_id: 20792,str: "installation Directives",num: 20269,date: new Date("2018-09-06T17:32:42.280Z"),array: [["multi-byte",62171,{_id: 20793,str: "Massachusetts core",num: 60248,date: new Date("2018-09-06T06:00:16.493Z"),obj: {_id: 20794,array: [],obj: {}}}],new Date("2018-09-06T06:47:06.448Z"),new Date("2018-09-06T12:57:14.583Z"),[51772,"Mouse"]]},[],"responsive Books"]});
    },

    function(coll) {
        return coll.insert({_id: 20795,str: "Credit Card Account target",num: 67837,date: new Date("2018-09-06T01:39:13.979Z"),array: ["Rhode Island",new Date("2018-09-06T16:21:16.775Z"),[],874,{_id: 20796,str: "panel",num: 71360,array: ["transmitting 1080p"],obj: {}},new Date("2018-09-06T04:34:16.255Z"),31035,"Steel",18837,41024,{_id: 20797,str: "Strategist Unbranded Cotton Cheese",array: [],obj: {_id: 20798,str: "Fantastic Frozen Ball Regional",num: 78459,date: new Date("2018-09-05T20:16:53.883Z"),array: [new Date("2018-09-06T09:24:19.117Z"),8400],obj: {}}}],obj: {_id: 20799,str: "Auto Loan Account Lodge",num: 72328,date: new Date("2018-09-05T23:12:58.560Z"),array: [[]]}});
    },

    function(coll) {
        return coll.insert({_id: 20800,str: "UAE Dirham",num: 10394,date: new Date("2018-09-05T23:12:45.158Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20801,str: "models",num: 847,date: new Date("2018-09-05T22:12:30.608Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20802,str: "Ergonomic Concrete Chips deposit",num: 33677,date: new Date("2018-09-06T00:21:35.269Z"),array: ["gold portals Plastic",78108,new Date("2018-09-05T22:42:15.455Z"),{_id: 20803,str: "invoice",num: 54565,date: new Date("2018-09-06T05:19:15.210Z"),array: [],obj: {_id: 20804,str: "gold",date: new Date("2018-09-06T07:18:29.562Z"),obj: {}}},"Barbados Dollar back up Adaptive",5905,new Date("2018-09-05T23:30:17.390Z"),new Date("2018-09-06T08:27:51.280Z"),[],41572],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20805,str: "International Investor",date: new Date("2018-09-06T15:54:57.494Z"),array: [new Date("2018-09-06T06:07:55.276Z"),new Date("2018-09-06T03:41:50.011Z"),"input JBOD bi-directional",87981,86883,"Village Practical concept",new Date("2018-09-05T23:55:37.103Z"),new Date("2018-09-06T13:25:40.946Z"),[],"GB",80703,{_id: 20806,num: 14513,date: new Date("2018-09-06T05:35:57.819Z"),array: [],obj: {}},new Date("2018-09-06T02:46:25.083Z"),{_id: 20807,str: "override Music",num: 56623,date: new Date("2018-09-06T03:57:21.262Z"),obj: {_id: 20808,str: "Auto Loan Account",num: 59167,array: [72565],obj: {}}},43909]});
    },

    function(coll) {
        return coll.insert({_id: 20809,str: "capacity",num: 5471,date: new Date("2018-09-05T22:31:05.048Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20810,str: "Trail",num: 11253,date: new Date("2018-09-06T05:55:54.529Z"),array: [new Date("2018-09-06T02:32:26.811Z"),89770,{_id: 20811,str: "cohesive Associate methodologies",num: 15312,date: new Date("2018-09-06T13:16:24.461Z"),array: [],obj: {_id: 20812,str: "haptic Iowa monitor",num: 91230,date: new Date("2018-09-06T12:24:15.645Z"),array: [],obj: {_id: 20813,str: "application",date: new Date("2018-09-06T12:24:21.256Z"),obj: {}}}},new Date("2018-09-06T07:34:28.213Z"),{_id: 20814,str: "Inlet Licensed navigate",num: 17527},"navigating Metal RAM",34860,14169,"Practical Soft Sausages New York","XML full-range Cambridgeshire",66800,new Date("2018-09-06T07:29:59.352Z")]});
    },

    function(coll) {
        return coll.insert({_id: 20815,str: "methodology",num: 59196,date: new Date("2018-09-06T12:41:26.383Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20816,str: "clear-thinking Cyprus initiatives",date: new Date("2018-09-06T05:21:00.324Z"),array: ["asymmetric Strategist",new Date("2018-09-06T15:14:09.735Z"),31379,[[]],46231,"violet Frozen",new Date("2018-09-06T01:30:03.786Z"),[{_id: 20817,str: "expedite RSS",date: new Date("2018-09-06T12:42:45.154Z"),array: [],obj: {_id: 20818,num: 2827,obj: {}}},9548],new Date("2018-09-05T22:44:55.278Z"),"Missouri Keyboard Steel",50516,new Date("2018-09-05T22:21:37.365Z"),{_id: 20819,str: "AI Mississippi",num: 48978,date: new Date("2018-09-06T14:42:35.292Z"),array: [],obj: {_id: 20820,str: "Chicken override blue",num: 75536,date: new Date("2018-09-06T04:41:21.103Z"),obj: {_id: 20821,str: "Architect Avon evolve",array: [new Date("2018-09-06T14:55:40.192Z"),{_id: 20822,num: 55909,date: new Date("2018-09-06T09:05:02.838Z"),array: []}],obj: {}}}},[new Date("2018-09-05T22:04:10.725Z"),"Sausages seize",84972]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20823,str: "Executive",num: 98542,date: new Date("2018-09-05T20:49:39.814Z"),array: [59745,89478,83506,{_id: 20824,str: "deposit Dynamic",num: 29261,array: [[],new Date("2018-09-06T00:02:23.907Z"),"exploit Product Exclusive",new Date("2018-09-06T07:50:10.873Z")],obj: {_id: 20825,num: 95381,date: new Date("2018-09-06T18:40:40.059Z"),array: ["homogeneous framework Belize Dollar",[],"Credit Card Account","distributed"]}},40791,{_id: 20826,num: 56007,date: new Date("2018-09-06T19:51:18.100Z"),array: [],obj: {}},new Date("2018-09-06T19:07:12.512Z"),[new Date("2018-09-06T13:30:07.707Z"),"Pa'anga Analyst"]]});
    },

    function(coll) {
        return coll.insert({_id: 20827,str: "sexy",num: 16752,date: new Date("2018-09-06T15:00:13.049Z"),array: [new Date("2018-09-06T16:26:19.912Z"),{_id: 20828,str: "Nakfa",num: 14367,date: new Date("2018-09-06T19:09:29.466Z"),array: ["synergistic",51442],obj: {}},82645,new Date("2018-09-05T22:13:04.348Z"),{_id: 20829,str: "bifurcated",num: 4216},45208,"impactful Awesome Steel Chips",{_id: 20830,str: "connect",array: ["auxiliary drive Cambridgeshire",new Date("2018-09-05T22:47:40.671Z"),39109,"rich sensor Keyboard"],obj: {_id: 20831,num: 64098,date: new Date("2018-09-06T10:16:28.666Z"),obj: {_id: 20832,str: "Refined Metal Bacon Bahamas mindshare",num: 14948,date: new Date("2018-09-06T04:45:28.744Z"),array: [42235,[]],obj: {_id: 20833,str: "coherent SDD Falkland Islands Pound",num: 6394,array: [],obj: {_id: 20834,str: "leading edge",num: 79838,date: new Date("2018-09-05T19:56:01.160Z")}}}}},[],new Date("2018-09-06T01:17:33.447Z"),34470]});
    },

    function(coll) {
        return coll.insert({_id: 20835,str: "Functionality",num: 85224,date: new Date("2018-09-06T06:21:28.405Z")});
    },

    function(coll) {
        return coll.insert({_id: 20836,num: 30298,date: new Date("2018-09-06T17:49:13.074Z"),array: ["web-readiness Investment Account Metal",34663,new Date("2018-09-06T17:49:38.481Z"),89067,new Date("2018-09-06T06:02:50.149Z"),"Infrastructure Bacon","aggregate best-of-breed Glen"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20837,str: "circuit",num: 87437,date: new Date("2018-09-06T00:50:22.311Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20838,str: "microchip",date: new Date("2018-09-06T10:45:46.768Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20839,str: "Paradigm",num: 74405,date: new Date("2018-09-05T21:32:46.845Z"),array: [],obj: {_id: 20840,str: "optimal",num: 12180,date: new Date("2018-09-06T04:44:20.016Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20841,str: "generate",num: 99268,date: new Date("2018-09-06T05:12:20.131Z"),obj: {_id: 20842,num: 7969,date: new Date("2018-09-05T20:05:03.173Z"),array: ["Architect",76765,new Date("2018-09-06T00:57:10.322Z"),{_id: 20843,str: "Crescent Distributed",num: 82564,array: [[],"Web","blue Ergonomic"],obj: {}},"Granite Soft Personal Loan Account",98655,"indexing",{_id: 20844,num: 7242,date: new Date("2018-09-06T12:40:03.479Z"),array: []},new Date("2018-09-06T02:38:32.193Z"),50322,[new Date("2018-09-06T00:26:46.856Z")],new Date("2018-09-06T14:12:04.812Z")],obj: {_id: 20845,str: "Future Plastic",date: new Date("2018-09-06T00:23:07.404Z"),array: [22243,{_id: 20846,str: "Refined Steel Ball",num: 72102,date: new Date("2018-09-06T15:21:12.704Z"),array: [],obj: {}},40491]}}});
    },

    function(coll) {
        return coll.insert({_id: 20847,str: "back-end Accountability",num: 58876,date: new Date("2018-09-06T16:55:39.824Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20848,str: "Fall redundant RAM",num: 71796,date: new Date("2018-09-05T20:03:43.403Z"),array: ["Haven compressing Toys",new Date("2018-09-06T19:51:50.327Z"),85245,"Mali",new Date("2018-09-06T00:32:50.729Z"),new Date("2018-09-06T14:47:15.790Z"),52644,{_id: 20849,num: 1559,date: new Date("2018-09-05T21:46:01.388Z"),array: [],obj: {}},75071,"application proactive Switzerland",45693,{_id: 20850,str: "Central Highway Gorgeous",obj: {_id: 20851,num: 51777,date: new Date("2018-09-05T20:14:24.770Z")}}],obj: {_id: 20852,str: "Baby Exclusive Directives",date: new Date("2018-09-06T14:21:09.379Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20853,str: "New Jersey Group Digitized",date: new Date("2018-09-06T08:40:01.803Z"),array: [[],new Date("2018-09-05T23:34:36.775Z"),47398,"archive Rest",87025,new Date("2018-09-06T07:18:54.722Z"),"Baby Tasty Rubber Gloves Dynamic",new Date("2018-09-05T20:12:17.929Z"),95368,{_id: 20854,num: 9166,date: new Date("2018-09-06T08:05:58.643Z"),obj: {}},{_id: 20855,str: "Table",num: 60921,date: new Date("2018-09-05T22:32:02.439Z"),obj: {_id: 20856,num: 3136,array: [new Date("2018-09-06T11:00:53.027Z")]}}],obj: {_id: 20857,str: "monitor Jewelery repurpose",num: 7786,date: new Date("2018-09-06T12:56:44.235Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20858,str: "monitor open system Awesome Plastic Table",num: 69959,date: new Date("2018-09-06T12:34:20.073Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20859,str: "zero tolerance THX CSS",num: 55199,date: new Date("2018-09-06T01:39:21.654Z"),array: [],obj: {_id: 20860,str: "Rest Money Market Account maroon",num: 45636,date: new Date("2018-09-06T17:57:07.660Z"),array: ["white","user-facing RAM",{_id: 20861,str: "user-facing",num: 28316,array: [],obj: {}},new Date("2018-09-06T03:33:47.882Z"),25884,"Buckinghamshire human-resource",32001,[new Date("2018-09-06T15:32:36.676Z"),new Date("2018-09-06T15:15:28.882Z"),new Date("2018-09-06T17:08:05.791Z")],[23391,"SQL Money Market Account executive","implementation facilitate"],89975,65933],obj: {_id: 20862,str: "Buckinghamshire Incredible Metal Tuna",date: new Date("2018-09-06T01:09:52.682Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20863,str: "transmitter",date: new Date("2018-09-06T01:54:03.053Z"),array: [],obj: {_id: 20864,num: 48499,date: new Date("2018-09-05T22:43:50.002Z"),array: [new Date("2018-09-06T02:01:14.394Z"),{_id: 20865,str: "Outdoors benchmark",num: 42051,date: new Date("2018-09-06T19:31:56.422Z"),array: [],obj: {_id: 20866,str: "Kids Zimbabwe Dollar",num: 68150,date: new Date("2018-09-06T08:47:51.477Z"),array: [919]}},new Date("2018-09-06T09:48:05.312Z"),"Ergonomic Ameliorated cross-media",79502,"California",{_id: 20867,str: "Computers Operations",num: 23547,date: new Date("2018-09-05T23:30:07.140Z")},"Concrete 6th generation Incredible","Tuna",new Date("2018-09-06T19:43:48.351Z"),56365]}});
    },

    function(coll) {
        return coll.insert({_id: 20868,str: "SMS",num: 40693,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20869,str: "Outdoors Handcrafted Metal Chicken",num: 34858,date: new Date("2018-09-06T08:11:19.959Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20870,str: "interface sky blue Shirt",num: 87860,date: new Date("2018-09-06T02:19:52.263Z"),array: ["program syndicate",{_id: 20871,str: "Credit Card Account Networked magenta",num: 39540,date: new Date("2018-09-06T03:27:51.420Z"),array: [{_id: 20872,num: 8640,date: new Date("2018-09-06T09:35:23.566Z"),array: [new Date("2018-09-06T18:22:24.481Z"),new Date("2018-09-06T10:22:50.976Z")]},[],new Date("2018-09-06T15:28:06.585Z")],obj: {}},46659,"open-source",39686,"innovate",45539,"Awesome Soft Chair SMTP National",new Date("2018-09-06T11:11:28.649Z"),{_id: 20873,str: "Customer-focused Programmable Cotton",date: new Date("2018-09-05T22:29:41.398Z"),obj: {_id: 20874,str: "Buckinghamshire",num: 11612,array: [],obj: {_id: 20875,str: "extend",date: new Date("2018-09-06T17:04:25.107Z")}}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 20876,str: "District",date: new Date("2018-09-06T07:34:11.436Z"),array: [74129,new Date("2018-09-05T23:10:40.950Z"),"Bike Portugal human-resource",53058,new Date("2018-09-06T17:55:08.765Z"),[90075],[],"next generation reboot models","Soap",new Date("2018-09-06T01:31:59.205Z"),{_id: 20877,num: 13700,date: new Date("2018-09-05T21:13:53.374Z"),array: [],obj: {}},97787],obj: {_id: 20878,num: 76770,date: new Date("2018-09-06T03:22:32.814Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20879,str: "Money Market Account Armenia Global",num: 68522,date: new Date("2018-09-06T03:53:31.062Z"),array: [13678,new Date("2018-09-06T01:38:13.916Z"),97240,"quantifying National",{_id: 20880,num: 18191,date: new Date("2018-09-06T00:07:48.594Z"),array: [],obj: {}},"Orchestrator Industrial Spring",new Date("2018-09-06T15:36:25.822Z"),new Date("2018-09-06T04:35:46.787Z"),["District Savings Account",761],"transmit Human","digital",new Date("2018-09-06T13:07:45.423Z"),68094,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20881,str: "SSL strategize",num: 93530,date: new Date("2018-09-06T15:11:34.231Z"),array: [],obj: {_id: 20882,str: "holistic Arizona bypassing",num: 65142,date: new Date("2018-09-06T14:43:39.285Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20883,str: "Intuitive salmon",num: 12980,date: new Date("2018-09-05T20:56:23.818Z"),array: [],obj: {_id: 20884,str: "plum wireless Philippine Peso",num: 72642,date: new Date("2018-09-06T10:31:17.968Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20885,str: "Officer",num: 94226,array: [58748,new Date("2018-09-06T11:53:08.441Z"),50086,"maroon Accounts",{_id: 20886,str: "turquoise Direct SSL",num: 28543,date: new Date("2018-09-06T10:10:25.227Z"),array: [[]],obj: {_id: 20887,str: "Savings Account Swiss Franc",obj: {}}},38915,"payment Coordinator conglomeration",new Date("2018-09-06T12:33:26.471Z"),new Date("2018-09-06T00:47:55.839Z"),new Date("2018-09-06T12:42:38.372Z"),[]],obj: {_id: 20888,str: "moratorium strategy Computer",num: 24193,date: new Date("2018-09-06T08:38:07.524Z"),array: [48931,95597,"Central black"]}});
    },

    function(coll) {
        return coll.insert({_id: 20889,str: "Uzbekistan Sum",num: 62682,date: new Date("2018-09-06T17:33:32.445Z"),array: ["Plastic Movies",7193,"Saint Kitts and Nevis",93729,70510,new Date("2018-09-05T21:21:35.414Z"),new Date("2018-09-06T14:41:41.384Z"),53528],obj: {_id: 20890,str: "secondary Massachusetts Ergonomic",num: 80702,date: new Date("2018-09-05T20:10:17.311Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20891,str: "redundant",date: new Date("2018-09-05T21:08:53.551Z")});
    },

    function(coll) {
        return coll.insert({_id: 20892,str: "conglomeration wireless",num: 13763,date: new Date("2018-09-06T00:49:27.405Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20893,str: "calculate framework",num: 4354,date: new Date("2018-09-06T18:25:50.284Z"),array: [79822,"customer loyalty mesh",new Date("2018-09-06T16:28:27.025Z"),new Date("2018-09-06T13:44:42.401Z"),"function",new Date("2018-09-06T08:37:32.346Z"),{_id: 20894,num: 13007,date: new Date("2018-09-06T13:27:15.703Z"),array: [[{_id: 20895,num: 79909,date: new Date("2018-09-06T01:59:13.834Z"),array: [],obj: {}}],"Web New Zealand Dollar system engine"]},"Ergonomic Borders Branding",42705,36051,new Date("2018-09-05T22:18:30.977Z"),"Shoals",2927],obj: {_id: 20896,str: "backing up",num: 90149,date: new Date("2018-09-05T21:10:21.633Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20897,num: 70752,date: new Date("2018-09-06T10:09:05.382Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20898,num: 65525,date: new Date("2018-09-05T20:40:00.784Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20899,str: "monetize",num: 64410,date: new Date("2018-09-06T15:22:32.979Z"),array: [new Date("2018-09-06T07:06:49.074Z"),"upward-trending",50039,new Date("2018-09-06T10:48:08.479Z"),38470,7306,new Date("2018-09-06T02:50:15.208Z"),{_id: 20900,str: "drive copy bottom-line",date: new Date("2018-09-06T13:31:25.021Z"),array: [{_id: 20901,str: "Frozen payment",date: new Date("2018-09-06T16:59:55.426Z"),array: [],obj: {_id: 20902,num: 18853,date: new Date("2018-09-06T01:39:43.020Z"),array: [],obj: {}}},"generate grey"],obj: {}},new Date("2018-09-06T17:35:24.617Z"),[93190,{_id: 20903,num: 13906,obj: {}}],"Shirt","Fantastic Object-based Maine"],obj: {_id: 20904,str: "collaboration California Switchable",num: 95754,date: new Date("2018-09-06T09:06:36.761Z")}});
    },

    function(coll) {
        return coll.insert({_id: 20905,str: "unleash Fantastic Metal Table",num: 31019,date: new Date("2018-09-06T01:07:41.327Z"),array: ["synthesize",new Date("2018-09-06T08:38:36.581Z"),"e-business",94780,new Date("2018-09-06T11:40:34.466Z"),44498,[48066],"payment card Phased",[],new Date("2018-09-05T22:06:29.932Z"),[new Date("2018-09-06T06:17:30.869Z"),96411,new Date("2018-09-05T22:28:07.968Z")]],obj: {_id: 20906,str: "e-business Hollow Operations",num: 21126,date: new Date("2018-09-06T12:29:33.807Z"),array: [],obj: {_id: 20907,str: "quantifying protocol",num: 55357,array: ["Unbranded","Advanced Technician Balboa US Dollar"]}}});
    },

    function(coll) {
        return coll.insert({_id: 20908,str: "models Factors Lead",num: 42101,date: new Date("2018-09-06T09:20:19.455Z"),array: [new Date("2018-09-05T23:01:32.090Z"),new Date("2018-09-06T01:42:29.462Z"),"bandwidth","Avon white","Strategist Gorgeous Cotton Computer Guyana",[],60715,92426,"Maryland",{_id: 20909,str: "Applications Savings Account Tanzanian Shilling",obj: {_id: 20910,str: "Sleek Unbranded",num: 55411,date: new Date("2018-09-06T08:28:28.403Z"),array: ["alarm Down-sized"],obj: {}}},new Date("2018-09-06T11:42:11.361Z"),68167],obj: {_id: 20911,num: 8140,date: new Date("2018-09-06T13:10:14.941Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20912,str: "Intranet Games",num: 55749,date: new Date("2018-09-06T04:07:16.975Z"),array: [],obj: {_id: 20913,str: "lavender",num: 56747,date: new Date("2018-09-06T06:18:08.588Z"),array: [new Date("2018-09-06T08:59:16.155Z"),2304,78789,35858,new Date("2018-09-05T22:18:41.310Z"),82381,31869,{_id: 20914,str: "solution-oriented navigate Coordinator",num: 51982,date: new Date("2018-09-06T04:33:34.341Z"),obj: {}},"Quality"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20915,num: 24403,array: [{_id: 20916,str: "infrastructure haptic",num: 81784,date: new Date("2018-09-05T22:47:51.733Z"),array: [],obj: {}},96548,"Cloned",new Date("2018-09-05T19:58:58.110Z"),67242,35858,"robust Pizza",{_id: 20917,str: "Tasty Rubber Chair Home Loan Account",num: 48995,date: new Date("2018-09-06T01:36:49.500Z"),array: []},["Program Administrator"],"indigo",new Date("2018-09-06T02:39:24.968Z"),{_id: 20918,str: "Sausages",array: [],obj: {}},new Date("2018-09-06T16:45:32.868Z")],obj: {_id: 20919,str: "Rubber back up",num: 2798,array: ["Texas New Taiwan Dollar",{_id: 20920,date: new Date("2018-09-06T03:27:17.079Z")},"sticky Intelligent Frozen Chair monetize",[],78141],obj: {_id: 20921,num: 50430,date: new Date("2018-09-06T14:15:22.047Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 20922,str: "reboot",num: 77977,date: new Date("2018-09-05T21:00:21.108Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20923,str: "Russian Ruble",date: new Date("2018-09-06T00:35:13.431Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 20924,num: 93665,date: new Date("2018-09-06T07:47:00.258Z"),array: [new Date("2018-09-06T00:34:51.450Z"),91757,"National open-source Practical Metal Hat",28082,new Date("2018-09-06T09:48:22.869Z"),"payment Principal Intelligent",48356,new Date("2018-09-06T06:59:49.408Z"),{_id: 20925,str: "clicks-and-mortar",num: 74901,date: new Date("2018-09-06T16:42:30.648Z"),array: [],obj: {_id: 20926,str: "contingency Games Personal Loan Account",num: 71781,date: new Date("2018-09-06T11:19:26.396Z"),obj: {}}},"generating"],obj: {_id: 20927,str: "array input Sleek",date: new Date("2018-09-06T04:05:51.192Z")}});
    },

    function(coll) {
        return coll.insert({_id: 20928,str: "context-sensitive Handcrafted Frozen Car",num: 56483,date: new Date("2018-09-06T15:07:22.943Z"),array: ["Minnesota maroon Wisconsin",new Date("2018-09-06T02:08:32.498Z"),new Date("2018-09-06T05:53:51.706Z"),52380,"azure Spain",35300,12405,{_id: 20929,str: "definition Inlet",num: 15570,date: new Date("2018-09-06T09:05:15.470Z"),array: [],obj: {}},"Table clicks-and-mortar","Money Market Account Assistant",new Date("2018-09-06T05:29:36.518Z"),[44772,{_id: 20930,date: new Date("2018-09-05T21:55:57.669Z"),obj: {_id: 20931,str: "quantifying invoice Rustic Granite Fish",num: 24999,array: []}}],new Date("2018-09-06T05:40:30.551Z")],obj: {_id: 20932,str: "Streets Alabama",num: 78319,date: new Date("2018-09-06T05:46:28.853Z"),array: [],obj: {_id: 20933,num: 84450,date: new Date("2018-09-06T18:50:21.594Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 20934,str: "Granite Greece Shoes",num: 94592,date: new Date("2018-09-06T09:46:35.333Z"),array: [54926,{_id: 20935,str: "Croatia",num: 86059,date: new Date("2018-09-06T18:29:28.454Z"),array: [[],"Bacon",new Date("2018-09-05T21:19:30.048Z"),"enhance interactive multi-state",69848,{_id: 20936,num: 58773,date: new Date("2018-09-06T19:31:19.884Z"),obj: {}}],obj: {_id: 20937,date: new Date("2018-09-06T02:58:35.205Z"),array: [],obj: {_id: 20938,str: "Steel Handmade",num: 61558,array: [],obj: {}}}},49857,new Date("2018-09-06T11:37:30.239Z"),new Date("2018-09-05T23:52:09.942Z"),["RSS AGP Kansas"],{_id: 20939,str: "Garden Clothing",date: new Date("2018-09-06T17:59:30.271Z")},[[]]],obj: {_id: 20940,str: "Causeway synergistic magenta",date: new Date("2018-09-06T01:35:00.192Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 20941,str: "benchmark",num: 57419,date: new Date("2018-09-06T01:07:13.489Z"),array: [52177,new Date("2018-09-06T02:46:54.062Z"),"online payment Granite",new Date("2018-09-06T16:41:41.357Z"),"Lock turn-key",["Court connecting","Concrete optical XSS"],18982,53580,new Date("2018-09-06T12:56:38.999Z"),new Date("2018-09-06T09:58:30.228Z"),[],{_id: 20942,str: "mint green Tuna Web",num: 61808,date: new Date("2018-09-06T16:31:15.624Z"),array: [],obj: {}},{_id: 20943,num: 37556,date: new Date("2018-09-06T03:13:14.723Z"),array: [],obj: {_id: 20944,str: "Texas",num: 32959,date: new Date("2018-09-06T18:43:14.350Z")}}]});
    },

    function(coll) {
        return coll.insert({_id: 20945,str: "white concept",num: 9777,date: new Date("2018-09-06T16:36:32.742Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20946,str: "green",num: 91552,date: new Date("2018-09-06T16:54:57.177Z"),array: [{_id: 20947,str: "Accountability",array: [],obj: {_id: 20948,str: "synthesizing",num: 44712,date: new Date("2018-09-06T19:49:59.459Z"),array: [95036,new Date("2018-09-06T19:27:18.727Z"),"Yemen",new Date("2018-09-05T20:17:29.228Z"),"help-desk",{_id: 20949,str: "Awesome Rubber Towels",num: 5227,date: new Date("2018-09-05T20:07:07.465Z"),obj: {_id: 20950,str: "payment West Virginia",num: 38244,date: new Date("2018-09-06T07:39:16.113Z"),array: [[],"Drive Configurable Refined",97950],obj: {}}}],obj: {_id: 20951,num: 53067,date: new Date("2018-09-05T22:12:32.950Z")}}},{_id: 20952,str: "Automotive productize intranet",num: 20783,array: [],obj: {}},[],new Date("2018-09-06T11:24:26.401Z"),{_id: 20953,num: 27988,obj: {}},"Cotton online",new Date("2018-09-06T07:26:22.432Z"),"deliver EXE",46464],obj: {_id: 20954,num: 80735,date: new Date("2018-09-05T21:37:36.246Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20955,str: "violet Antigua and Barbuda Extensions",num: 91717,date: new Date("2018-09-06T16:43:47.509Z"),array: [],obj: {_id: 20956,str: "empowering",date: new Date("2018-09-06T12:55:39.232Z"),array: [new Date("2018-09-06T06:53:54.971Z"),{_id: 20957,str: "cyan",array: [new Date("2018-09-05T23:53:57.474Z"),88855],obj: {}},90904,60174,new Date("2018-09-06T11:10:33.544Z"),3017,{_id: 20958,num: 44656,date: new Date("2018-09-06T07:58:27.609Z"),array: [],obj: {_id: 20959,str: "capacitor paradigm",num: 69727,date: new Date("2018-09-05T20:25:08.229Z"),obj: {}}},["Checking Account",[],"Gorgeous relationships Cambridgeshire"],new Date("2018-09-05T20:52:57.224Z"),{_id: 20960,date: new Date("2018-09-06T10:04:02.989Z"),array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20961,str: "encompassing",num: 84778,date: new Date("2018-09-06T01:08:35.531Z"),array: ["Small Fresh Hat Associate",new Date("2018-09-06T00:01:49.074Z"),61262,15753,{_id: 20962,str: "Metal value-added end-to-end",date: new Date("2018-09-06T15:43:04.200Z"),array: [],obj: {}},new Date("2018-09-06T11:24:54.055Z"),"payment Investment Account",new Date("2018-09-06T12:06:01.151Z")],obj: {_id: 20963,str: "Clothing",date: new Date("2018-09-06T05:00:10.621Z"),array: [new Date("2018-09-06T11:59:59.957Z"),{_id: 20964,date: new Date("2018-09-06T12:26:35.122Z"),obj: {}},{_id: 20965,num: 39945,date: new Date("2018-09-05T21:19:16.565Z"),array: []},new Date("2018-09-06T04:28:47.399Z"),"Senegal Home Loan Account Fresh",new Date("2018-09-06T02:54:16.595Z"),"e-services quantify",64022],obj: {_id: 20966,str: "cultivate modular transform",num: 20551,date: new Date("2018-09-06T18:17:58.670Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20967,str: "empower Extended solution-oriented",num: 37413,array: [],obj: {_id: 20968,str: "Avon e-business Interactions",date: new Date("2018-09-06T11:53:52.475Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 20969,str: "input bus Soft",num: 90301,date: new Date("2018-09-05T22:02:27.868Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20970,str: "input",num: 74625,date: new Date("2018-09-06T03:29:43.560Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20971,str: "orange Ports",num: 32204,date: new Date("2018-09-06T05:18:07.841Z"),obj: {_id: 20972,str: "Ergonomic 24/7",num: 38945,date: new Date("2018-09-06T02:34:52.570Z"),array: ["Principal Hat Awesome Wooden Table",54384,new Date("2018-09-06T09:53:15.750Z"),"Unbranded Wooden Shirt",{_id: 20973,str: "deposit",num: 41480,date: new Date("2018-09-05T23:19:33.985Z"),array: [],obj: {_id: 20974,str: "killer Personal Loan Account Jewelery",num: 9225,date: new Date("2018-09-06T07:00:29.604Z"),array: []}},"Configurable Books",72357],obj: {_id: 20975,str: "New Mexico projection SDD",num: 59374,array: [60361,81008,[new Date("2018-09-06T05:26:04.294Z"),{_id: 20976,date: new Date("2018-09-06T03:29:01.226Z"),array: ["Customer",68245,[]],obj: {_id: 20977,str: "Steel",num: 68615}},new Date("2018-09-06T03:55:06.709Z")],"deposit",new Date("2018-09-06T04:15:47.193Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 20978,str: "Intelligent Rubber Towels Bedfordshire Polarised",num: 95034,date: new Date("2018-09-05T20:33:15.367Z"),array: [],obj: {_id: 20979,str: "Solutions",num: 90686,date: new Date("2018-09-06T03:31:05.671Z"),array: [],obj: {_id: 20980,str: "Heard Island and McDonald Islands",num: 81622,array: ["markets Baht",new Date("2018-09-06T18:25:54.320Z"),33149,15250,new Date("2018-09-06T12:34:45.561Z"),39194,[["Concrete",new Date("2018-09-06T08:32:22.788Z"),new Date("2018-09-06T16:19:05.625Z")],{_id: 20981,str: "Cuba Rustic Steel Sausages",num: 68012,date: new Date("2018-09-06T07:04:40.929Z")},["Bedfordshire Regional"],new Date("2018-09-06T18:40:17.115Z"),{_id: 20982,str: "Developer invoice quantify",num: 88899,array: [],obj: {_id: 20983,num: 32339,date: new Date("2018-09-06T16:51:27.271Z"),array: [[],77754],obj: {}}}],"transmit",{_id: 20984,str: "Fantastic Cotton Shirt",array: [],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 20985,str: "Intelligent",num: 60939,date: new Date("2018-09-06T07:59:46.290Z"),array: [new Date("2018-09-06T19:04:40.637Z"),88298,40339,"back up Cross-group User-friendly",[],new Date("2018-09-05T22:24:23.704Z"),"auxiliary bottom-line"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 20986,str: "high-level",num: 71284,array: [[],"Landing",42357,new Date("2018-09-06T02:11:42.195Z"),"Buckinghamshire Shoes Keyboard",new Date("2018-09-06T08:18:48.843Z"),67119,[{_id: 20987,str: "Granite Incredible Plastic Computer Cambridgeshire",num: 31552,date: new Date("2018-09-06T17:55:01.592Z"),array: [new Date("2018-09-06T05:56:01.645Z"),1149],obj: {_id: 20988,str: "cyan Avon",date: new Date("2018-09-05T21:20:59.840Z"),array: ["GB European Unit of Account 17(E.U.A.-17)",new Date("2018-09-06T09:01:26.545Z"),{_id: 20989,num: 3027,date: new Date("2018-09-06T19:15:20.484Z"),obj: {_id: 20990,str: "Fresh",array: [],obj: {}}}],obj: {}}},{_id: 20991,str: "Enterprise-wide Chair",num: 39944,date: new Date("2018-09-06T04:52:19.062Z"),array: []}],28817,new Date("2018-09-06T08:41:34.900Z"),new Date("2018-09-06T08:32:14.849Z"),"Sleek Cotton Pizza input Regional"]});
    },

    function(coll) {
        return coll.insert({_id: 20992,str: "Connecticut",num: 80582,date: new Date("2018-09-06T14:04:48.206Z"),array: [],obj: {_id: 20993,str: "ability Division",num: 95703,date: new Date("2018-09-06T04:33:19.229Z"),array: [99909,new Date("2018-09-05T20:53:12.020Z"),"invoice migration",new Date("2018-09-06T18:44:51.700Z"),"back up Proactive","Extended B2C District",{_id: 20994,str: "Manager",num: 79708,date: new Date("2018-09-06T06:54:57.389Z"),array: [],obj: {_id: 20995,str: "Switzerland Heights",num: 35123,date: new Date("2018-09-06T05:42:29.890Z"),obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 20996,str: "haptic executive",num: 71546,array: [new Date("2018-09-06T17:44:58.947Z"),new Date("2018-09-06T13:54:32.465Z"),"virtual",16561,"Tasty Rubber Chips neural-net",7343,[[]],new Date("2018-09-06T10:24:31.785Z"),"Intelligent",{_id: 20997,str: "Awesome JBOD",num: 26123,date: new Date("2018-09-06T12:34:04.333Z"),array: [new Date("2018-09-06T14:19:21.737Z"),41800,new Date("2018-09-06T06:16:20.848Z")],obj: {}},66267],obj: {_id: 20998,str: "Health",num: 18962,date: new Date("2018-09-06T19:38:24.520Z"),array: [],obj: {_id: 20999,str: "Security overriding",date: new Date("2018-09-06T06:49:50.170Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21000,str: "Table Profit-focused deposit",num: 77354,date: new Date("2018-09-06T08:15:10.250Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21001,str: "Customer national",num: 39226,date: new Date("2018-09-06T05:09:54.762Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21002,str: "Lodge",num: 29794,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21003,str: "drive facilitate",num: 6704,date: new Date("2018-09-05T20:15:43.918Z"),array: [92703,{_id: 21004,str: "Spurs Multi-lateral matrix",num: 8845,date: new Date("2018-09-06T09:23:30.865Z"),array: [],obj: {}},[],1415,new Date("2018-09-06T10:15:38.078Z"),"Analyst Enhanced Producer","Egypt secondary",{_id: 21005,str: "Wooden",num: 47270,date: new Date("2018-09-05T22:33:30.910Z")},"Generic Plastic Gloves",30306,new Date("2018-09-05T23:39:25.701Z"),"Industrial",new Date("2018-09-05T21:26:54.386Z")],obj: {_id: 21006,str: "tan Cambridgeshire Towels",array: [61009,new Date("2018-09-06T07:03:51.943Z")],obj: {_id: 21007,str: "markets",num: 7819,date: new Date("2018-09-06T09:15:38.428Z"),array: [["invoice Court Creative"]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21008,str: "Vision-oriented input",num: 60646,date: new Date("2018-09-05T22:45:53.007Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21009,str: "killer International",num: 91575,date: new Date("2018-09-05T23:53:32.208Z"),array: [],obj: {_id: 21010,date: new Date("2018-09-06T07:35:12.272Z"),array: [88550,new Date("2018-09-06T13:14:59.034Z"),new Date("2018-09-06T14:28:52.332Z"),62097,"Parkway Bacon",new Date("2018-09-06T03:50:34.084Z"),[],"index",3547,8966,{_id: 21011,str: "Plastic dynamic New Caledonia",date: new Date("2018-09-05T20:43:43.232Z"),array: [[{_id: 21012,str: "Avon Cambridgeshire",num: 31066,array: [],obj: {}},81165]],obj: {_id: 21013,str: "Towels",num: 82975}},"programming","Ecuador TCP",31084],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21014,str: "override backing up",num: 47236,date: new Date("2018-09-05T23:34:20.206Z"),array: [],obj: {_id: 21015,str: "plug-and-play",num: 26783,date: new Date("2018-09-06T09:50:10.708Z"),array: [],obj: {_id: 21016,str: "help-desk Ergonomic Wooden Gloves",date: new Date("2018-09-06T00:39:37.852Z"),array: ["Fresh e-tailers","intermediate Berkshire Fantastic",40262,14700,80399,[{_id: 21017,str: "architecture FTP",num: 84389,array: []}],new Date("2018-09-06T13:11:52.677Z"),"revolutionary",new Date("2018-09-06T17:18:03.780Z"),[new Date("2018-09-06T12:40:26.540Z"),58146,"pixel Horizontal","Towels"],{_id: 21018,date: new Date("2018-09-06T09:33:31.790Z"),obj: {}},[new Date("2018-09-05T23:02:14.813Z")]]}}});
    },

    function(coll) {
        return coll.insert({_id: 21019,str: "Seamless Generic",num: 91426,array: [],obj: {_id: 21020,str: "Bedfordshire deposit e-business",num: 44346,date: new Date("2018-09-06T18:11:05.657Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21021,str: "South Carolina",date: new Date("2018-09-06T16:54:08.106Z"),array: ["synthesizing",[],new Date("2018-09-06T17:29:34.689Z"),"Games California mindshare",{_id: 21022,str: "Clothing",num: 22917},43278,98219,"Practical Bedfordshire harness",new Date("2018-09-06T08:04:19.685Z"),[],"compressing emulation",295,new Date("2018-09-06T06:49:44.197Z"),{_id: 21023,str: "Crest",num: 67348,date: new Date("2018-09-06T01:45:06.601Z"),array: [],obj: {}}],obj: {_id: 21024,num: 68759,date: new Date("2018-09-06T12:36:01.322Z"),obj: {_id: 21025,str: "Steel",date: new Date("2018-09-05T22:55:50.432Z"),array: [new Date("2018-09-06T13:36:34.522Z")],obj: {_id: 21026,array: [[],{_id: 21027,str: "Tasty Program",num: 68619,date: new Date("2018-09-06T14:15:07.073Z"),array: [new Date("2018-09-06T14:43:13.791Z")]},"pricing structure Clothing",24996],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 21028,str: "Unbranded Granite Ball Licensed Fresh Computer middleware",num: 35485,date: new Date("2018-09-06T03:59:16.461Z"),array: [],obj: {_id: 21029,str: "best-of-breed Strategist Pine",num: 67491,date: new Date("2018-09-06T03:24:07.044Z"),array: [18035,new Date("2018-09-06T15:25:19.941Z"),"Mall Grocery",{_id: 21030,num: 5396,date: new Date("2018-09-06T02:39:16.134Z"),array: ["bypass Handcrafted Granite Chair Finland",new Date("2018-09-06T19:29:35.051Z"),new Date("2018-09-06T01:04:13.049Z"),56965,83625],obj: {}},[],"Croatian Kuna","Bouvet Island (Bouvetoya)",{_id: 21031,str: "Berkshire panel invoice",array: [],obj: {_id: 21032,str: "Cocos (Keeling) Islands",num: 83269,array: [],obj: {_id: 21033,date: new Date("2018-09-06T00:15:31.080Z"),array: ["benchmark",{_id: 21034,str: "Awesome Bedfordshire Polarised",date: new Date("2018-09-05T21:23:49.861Z")}],obj: {}}}},{_id: 21035,num: 84872,date: new Date("2018-09-06T18:49:38.400Z")},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21036,num: 12520,date: new Date("2018-09-06T19:20:41.021Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21037,num: 20777,date: new Date("2018-09-06T19:18:42.423Z"),array: [],obj: {_id: 21038,num: 15912,date: new Date("2018-09-06T00:19:22.539Z")}});
    },

    function(coll) {
        return coll.insert({_id: 21039,str: "Games implementation",num: 81204,date: new Date("2018-09-06T15:39:57.657Z"),array: [{_id: 21040,str: "capacitor",num: 3753,date: new Date("2018-09-06T16:12:30.886Z"),obj: {}},new Date("2018-09-06T07:07:15.743Z"),89300,81483,"Specialist",{_id: 21041,str: "Syrian Pound Wooden",num: 44861,array: [47547,new Date("2018-09-06T13:12:43.367Z"),66026],obj: {_id: 21042,str: "Zimbabwe Dollar SSL",num: 43230,date: new Date("2018-09-06T15:15:57.791Z"),array: [],obj: {_id: 21043,array: [],obj: {}}}},[],"Fish Bedfordshire",{_id: 21044,date: new Date("2018-09-06T10:45:46.605Z")}]});
    },

    function(coll) {
        return coll.insert({_id: 21045,str: "groupware multi-byte copying",num: 96020,date: new Date("2018-09-06T05:57:46.351Z"),array: [],obj: {_id: 21046,str: "Investment Account",num: 37643,date: new Date("2018-09-06T19:17:21.396Z"),array: [93342,new Date("2018-09-05T23:10:36.256Z"),new Date("2018-09-05T20:38:10.532Z"),"Automotive TCP Regional",new Date("2018-09-06T13:40:37.407Z"),{_id: 21047,str: "Granite Handmade Metal Keyboard payment",array: ["Bedfordshire"],obj: {}},new Date("2018-09-06T19:40:44.543Z"),56021,[84242],"Tactics red",{_id: 21048,str: "open-source Licensed Wooden Shoes",num: 14091,date: new Date("2018-09-06T06:08:01.377Z"),array: [[],{_id: 21049,num: 78043,obj: {_id: 21050,str: "protocol Legacy ADP",num: 69758,date: new Date("2018-09-06T07:17:56.113Z"),array: ["Home JBOD Intuitive"]}},14885,new Date("2018-09-06T14:19:34.198Z"),"Indiana generate Internal"],obj: {_id: 21051,str: "silver transmitter",num: 47484,date: new Date("2018-09-05T20:31:13.986Z"),obj: {}}},[],86281]}});
    },

    function(coll) {
        return coll.insert({_id: 21052,str: "Bedfordshire Buckinghamshire",num: 36982,date: new Date("2018-09-06T08:21:38.658Z"),array: [],obj: {_id: 21053,num: 33732,date: new Date("2018-09-06T18:44:19.307Z"),array: ["Berkshire Guam Cayman Islands Dollar",new Date("2018-09-05T20:26:31.641Z"),"Analyst",32971,"users",new Date("2018-09-06T16:08:07.209Z"),68415,[66994,{_id: 21054,str: "Naira",num: 94183,array: [],obj: {}},51570],new Date("2018-09-06T09:41:55.288Z"),"upward-trending",[],new Date("2018-09-05T22:00:45.085Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21055,str: "Gorgeous Buckinghamshire withdrawal",num: 190,array: [],obj: {_id: 21056,str: "Somali Shilling neural",num: 21206,date: new Date("2018-09-06T13:23:33.959Z"),array: ["Rapid",new Date("2018-09-05T20:19:23.132Z"),new Date("2018-09-06T01:46:13.251Z"),86767,"systems",new Date("2018-09-05T20:43:50.401Z"),11694]}});
    },

    function(coll) {
        return coll.insert({_id: 21057,str: "Liberian Dollar Savings Account",num: 51892,date: new Date("2018-09-06T11:08:32.703Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21058,str: "markets invoice maroon",num: 43848,date: new Date("2018-09-06T09:39:03.140Z"),array: [],obj: {_id: 21059,str: "South Dakota",num: 63929,array: [new Date("2018-09-06T16:55:18.287Z"),31322,{_id: 21060,str: "Decentralized Cambridgeshire",date: new Date("2018-09-06T00:52:37.543Z"),obj: {_id: 21061,str: "Dynamic",num: 27196,date: new Date("2018-09-06T02:30:50.669Z"),obj: {}}},"Utah payment Mexico",new Date("2018-09-06T15:26:36.598Z"),"Slovenia Handmade Steel Table Home Loan Account",{_id: 21062,str: "Plastic Licensed Cotton Chips Triple-buffered",num: 9764,date: new Date("2018-09-06T16:14:56.366Z"),array: []},new Date("2018-09-06T08:02:03.796Z"),["navigating Automotive",[58009,{_id: 21063,num: 24173,array: []},21902]],"mobile Coves",78441],obj: {_id: 21064,date: new Date("2018-09-06T14:02:43.073Z"),array: ["Shirt",new Date("2018-09-06T07:13:44.700Z")],obj: {_id: 21065,str: "bandwidth Money Market Account Implementation",date: new Date("2018-09-06T00:22:23.745Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 21066,str: "Graphical User Interface Central",num: 84619,date: new Date("2018-09-06T03:21:25.148Z"),array: ["Health RAM evolve",76707,"Togo invoice Research",4480,"Kids",new Date("2018-09-06T10:41:09.213Z"),"wireless neural-net",[],74335,new Date("2018-09-06T10:53:10.704Z"),2950,new Date("2018-09-06T00:17:10.560Z"),"Markets",new Date("2018-09-06T14:51:41.086Z"),93211],obj: {_id: 21067,str: "granular",num: 57355,date: new Date("2018-09-05T21:18:24.304Z"),array: [],obj: {_id: 21068,str: "hack",num: 64320,date: new Date("2018-09-06T13:02:28.189Z"),array: [[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 21069,str: "Concrete proactive Cuban Peso Peso Convertible",num: 11175,date: new Date("2018-09-06T04:07:49.275Z"),array: [new Date("2018-09-06T16:38:07.286Z"),"Salad bottom-line","Optimization",93495,new Date("2018-09-06T19:04:54.887Z"),{_id: 21070,str: "Credit Card Account Shoes",num: 12802,date: new Date("2018-09-06T11:21:31.227Z"),array: [{_id: 21071,str: "exploit models",num: 27991,date: new Date("2018-09-06T01:25:20.036Z"),array: [new Date("2018-09-06T00:13:00.498Z"),"Concrete Rustic Cotton Chicken Nebraska"],obj: {}},new Date("2018-09-06T04:36:53.482Z"),44963,94493,[],"leading-edge generate product"],obj: {_id: 21072,str: "Avon Towels",date: new Date("2018-09-05T23:00:13.626Z"),obj: {}}},[91255],"index",93115]});
    },

    function(coll) {
        return coll.insert({_id: 21073,str: "Jordanian Dinar programming",num: 98546,date: new Date("2018-09-06T00:05:06.437Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21074,str: "Senior redefine",num: 60474,date: new Date("2018-09-06T11:37:24.382Z"),array: [new Date("2018-09-06T12:34:58.977Z"),new Date("2018-09-06T13:02:08.836Z"),"Virtual Armenian Dram sky blue","static",7605,new Date("2018-09-06T16:05:33.130Z"),[[],15989,[]],32749,{_id: 21075,str: "infrastructures parsing JBOD",num: 79200,date: new Date("2018-09-06T15:42:01.525Z"),array: ["Virtual"],obj: {}},new Date("2018-09-06T11:21:15.524Z")],obj: {_id: 21076,str: "withdrawal Beauty Cambridgeshire",num: 74420,date: new Date("2018-09-06T10:43:21.123Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 21077,str: "Pants",num: 2258,date: new Date("2018-09-06T01:04:03.656Z"),array: ["Pennsylvania Rustic",81485,10308,new Date("2018-09-06T19:09:41.052Z"),new Date("2018-09-06T12:04:41.408Z"),"Equatorial Guinea empower applications",{_id: 21078,str: "array",num: 8043,date: new Date("2018-09-06T02:20:52.951Z"),array: [new Date("2018-09-06T15:49:13.796Z"),{_id: 21079,num: 13932,date: new Date("2018-09-05T20:06:04.254Z"),obj: {_id: 21080,num: 92345,array: [],obj: {}}}]},{_id: 21081,str: "index",date: new Date("2018-09-06T18:05:31.023Z"),obj: {}},"Avon Wooden Personal Loan Account",[],[[]],"Tennessee Fantastic Granite Tuna",new Date("2018-09-06T14:54:28.307Z"),83580,"Rustic Rubber Bike strategize"],obj: {_id: 21082,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 21083,str: "Forward",num: 40085,date: new Date("2018-09-05T22:27:02.896Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21084,str: "programming Metal neural",num: 46587,date: new Date("2018-09-06T18:58:19.094Z"),array: [["aggregate","Borders",28557,new Date("2018-09-05T21:23:30.626Z"),28440,"Pound Sterling Estate",628,[]],new Date("2018-09-06T04:32:09.387Z"),64376,new Date("2018-09-06T15:07:55.791Z"),new Date("2018-09-06T15:02:43.648Z"),"Bahamas",new Date("2018-09-05T20:06:16.812Z")],obj: {_id: 21085,str: "India",num: 68290,date: new Date("2018-09-06T05:15:57.746Z"),array: [],obj: {_id: 21086,num: 97171,date: new Date("2018-09-06T00:10:17.622Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21087,str: "Cove",num: 31835,date: new Date("2018-09-06T19:09:34.880Z"),array: [{_id: 21088,num: 78118,date: new Date("2018-09-06T19:38:30.822Z"),array: [],obj: {_id: 21089,str: "Developer Internal Berkshire",date: new Date("2018-09-06T10:04:20.461Z"),array: [96453,"drive incubate"],obj: {_id: 21090,str: "Solomon Islands",num: 71112,date: new Date("2018-09-06T06:54:40.463Z"),array: []}}},new Date("2018-09-06T06:55:23.483Z"),new Date("2018-09-06T03:49:17.198Z"),"target Human",{_id: 21091,str: "Personal Loan Account connecting hack",date: new Date("2018-09-06T06:43:13.014Z")},[27280,[],"Soft facilitate"],new Date("2018-09-06T19:16:04.713Z"),{_id: 21092,num: 44395,obj: {}},new Date("2018-09-05T20:55:09.421Z"),new Date("2018-09-06T15:58:46.649Z"),97540,[27819]]});
    },

    function(coll) {
        return coll.insert({_id: 21093,str: "Small",num: 56573,date: new Date("2018-09-06T17:45:03.297Z"),array: ["methodical Intelligent Generic Rubber Chicken",new Date("2018-09-06T02:00:15.497Z"),68246,new Date("2018-09-06T13:41:55.412Z"),new Date("2018-09-05T21:52:19.444Z"),{_id: 21094,str: "USB Chair Garden",num: 89424,date: new Date("2018-09-06T12:33:39.868Z"),obj: {_id: 21095,str: "mint green Developer",date: new Date("2018-09-05T23:32:44.731Z"),array: [],obj: {_id: 21096,str: "Peso Uruguayo Uruguay Peso en Unidades Indexadas Seamless",num: 30599,date: new Date("2018-09-06T01:12:01.758Z"),array: [new Date("2018-09-06T01:23:53.193Z"),9286,{_id: 21097,num: 78091,array: [],obj: {}}],obj: {_id: 21098,num: 30756,array: []}}}},"Avon",[],14658,53235,["withdrawal firewall","Ergonomic web-enabled"]]});
    },

    function(coll) {
        return coll.insert({_id: 21099,num: 5526,date: new Date("2018-09-06T18:51:29.374Z"),array: ["Chips Ecuador",13141,"seize",91070,"partnerships hybrid","redundant maximized Expressway",{_id: 21100,str: "port",num: 41582,date: new Date("2018-09-06T06:01:28.688Z"),obj: {}},63375,new Date("2018-09-06T05:07:12.406Z"),[]],obj: {_id: 21101,num: 11013,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 21102,str: "Bike neutral magenta",num: 64564,date: new Date("2018-09-06T14:08:03.034Z"),array: [],obj: {_id: 21103,date: new Date("2018-09-06T16:39:26.068Z"),array: ["connect silver niches",new Date("2018-09-06T03:47:16.980Z"),"Vermont Accountability Forward",79316,new Date("2018-09-06T17:12:29.338Z"),90854,[],20248]}});
    },

    function(coll) {
        return coll.insert({_id: 21104,str: "Keyboard",num: 78039,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21105,str: "Rubber",num: 16563,date: new Date("2018-09-06T17:08:17.048Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21106,str: "Associate",num: 15535,date: new Date("2018-09-06T19:37:25.089Z"),obj: {_id: 21107,str: "Movies",num: 22379,date: new Date("2018-09-06T13:54:41.868Z"),array: [],obj: {_id: 21108,str: "Illinois",num: 39246,array: [new Date("2018-09-05T22:46:44.295Z"),"circuit",85347,30013,[new Date("2018-09-06T16:09:38.560Z"),30164],"Rustic","neural",49073,new Date("2018-09-06T01:14:49.886Z"),{_id: 21109,str: "navigate",num: 1360,date: new Date("2018-09-06T13:04:30.843Z"),array: [],obj: {}},[{_id: 21110,num: 10133,date: new Date("2018-09-06T11:35:15.013Z")},new Date("2018-09-06T00:22:07.406Z")],{_id: 21111,str: "Bedfordshire deposit",date: new Date("2018-09-06T15:58:58.325Z")}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21112,str: "Fiji info-mediaries",num: 49224,date: new Date("2018-09-05T21:33:35.198Z"),array: [],obj: {_id: 21113,str: "Pitcairn Islands GB",num: 71122,date: new Date("2018-09-06T10:32:19.057Z"),array: [41424,"pixel THX feed",39945,"Berkshire redefine",new Date("2018-09-06T10:42:12.585Z"),new Date("2018-09-06T17:48:29.341Z"),8532,34967,{_id: 21114,str: "synthesizing quantify",obj: {}},[34238,new Date("2018-09-06T07:53:57.175Z")],"Ergonomic Computer Awesome Plastic Chips",[[]]],obj: {_id: 21115,date: new Date("2018-09-06T07:06:05.659Z"),array: [{_id: 21116,str: "Michigan",num: 68774,date: new Date("2018-09-06T05:55:31.953Z"),array: []},{_id: 21117,num: 83073,date: new Date("2018-09-06T16:56:45.219Z")},new Date("2018-09-05T22:15:26.276Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21118,date: new Date("2018-09-06T05:46:34.621Z"),array: [],obj: {_id: 21119,str: "copy navigate",num: 19653,date: new Date("2018-09-05T21:49:24.338Z"),array: [new Date("2018-09-06T09:13:27.821Z"),new Date("2018-09-05T23:43:04.701Z"),[26802,3100],"Implementation",{_id: 21120,str: "Auto Loan Account Soft Triple-buffered",num: 62088,date: new Date("2018-09-06T15:20:48.555Z"),array: [],obj: {}},96102,[],"Fantastic reintermediate generate",new Date("2018-09-06T11:28:22.087Z"),"matrix Supervisor interfaces"],obj: {_id: 21121,str: "Bosnia and Herzegovina HDD Views",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 21122,str: "Centers",obj: {_id: 21123,str: "Avon",num: 13308,date: new Date("2018-09-06T03:15:59.675Z"),array: [],obj: {_id: 21124,str: "Administrator dedicated Louisiana",num: 4011,date: new Date("2018-09-06T16:22:39.504Z"),array: [54700,new Date("2018-09-06T02:53:28.348Z"),"Swiss Franc orange",{_id: 21125,num: 77957,date: new Date("2018-09-05T22:32:04.620Z"),array: [new Date("2018-09-05T22:36:33.958Z")],obj: {}},"Borders circuit methodical",new Date("2018-09-06T00:18:48.014Z"),7468,[],[],24591,11070,"Park",new Date("2018-09-06T14:22:39.958Z"),{_id: 21126,str: "National",num: 62344,date: new Date("2018-09-06T06:24:28.585Z")}],obj: {_id: 21127,str: "Bedfordshire",num: 7263,date: new Date("2018-09-06T00:24:12.987Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 21128,str: "Tasty",num: 13350,date: new Date("2018-09-05T20:26:27.848Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21129,str: "Ecuador",num: 48828,date: new Date("2018-09-06T03:57:10.503Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21130,str: "Lead back-end",date: new Date("2018-09-06T03:53:05.289Z"),array: [],obj: {_id: 21131,num: 26608,date: new Date("2018-09-06T04:49:21.979Z"),array: ["Arkansas",46815,"Bedfordshire payment","Ergonomic",new Date("2018-09-06T11:43:15.086Z"),20874,{_id: 21132,array: []},3263,[new Date("2018-09-06T06:18:09.685Z"),[]],"Home Loan Account 24/365",["granular",30403]],obj: {_id: 21133,str: "Realigned Multi-layered",num: 24995,date: new Date("2018-09-06T00:57:29.871Z"),array: [{_id: 21134,str: "Car",num: 36818,array: [new Date("2018-09-05T22:47:57.242Z")],obj: {_id: 21135,str: "Rustic Plastic Chicken Salad Buckinghamshire",num: 89659,date: new Date("2018-09-05T19:59:25.020Z"),obj: {}}},{_id: 21136,num: 81601,date: new Date("2018-09-06T03:54:05.048Z"),array: [],obj: {_id: 21137,str: "responsive"}},"Exclusive"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21138,str: "green knowledge base Bacon",num: 78331,date: new Date("2018-09-06T14:24:33.540Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21139,str: "Avon",num: 10103,date: new Date("2018-09-06T10:01:57.706Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21140,num: 43249,date: new Date("2018-09-06T16:23:57.825Z"),array: [],obj: {_id: 21141,str: "bluetooth coherent white",num: 34592,date: new Date("2018-09-06T18:17:12.267Z"),array: [new Date("2018-09-06T16:59:33.440Z"),16580,84156,72360,"array","brand",new Date("2018-09-06T08:52:23.512Z"),{_id: 21142,num: 31700,date: new Date("2018-09-06T15:32:53.711Z"),array: [],obj: {}},"THX Jewelery PCI",new Date("2018-09-06T03:58:26.035Z"),"Identity Trinidad and Tobago",{_id: 21143,str: "Producer backing up",num: 40619,date: new Date("2018-09-06T01:16:41.376Z"),obj: {}},[new Date("2018-09-05T22:58:34.679Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 21144,str: "West Virginia Garden Quality",num: 71748,date: new Date("2018-09-05T20:07:37.227Z"),array: [new Date("2018-09-06T14:18:59.792Z"),[new Date("2018-09-06T03:50:28.612Z"),65803,26166,new Date("2018-09-06T05:21:37.880Z"),"schemas"],"Web Bacon",33461,{_id: 21145,str: "Extension British Indian Ocean Territory (Chagos Archipelago)",num: 41010,array: [],obj: {_id: 21146,str: "compressing",num: 58466,date: new Date("2018-09-06T18:57:27.721Z"),obj: {}}},"Assistant Savings Account",{_id: 21147,str: "Reunion connecting Sleek",num: 14074,obj: {}},52042,"Pre-emptive Intelligent Cotton Chips needs-based","compressing Intelligent Soft Computer"]});
    },

    function(coll) {
        return coll.insert({_id: 21148,str: "Administrator Cotton",num: 69258,date: new Date("2018-09-06T08:17:05.919Z"),array: [42044,"calculating",new Date("2018-09-06T00:03:55.288Z"),new Date("2018-09-06T10:05:55.801Z"),[],{_id: 21149,str: "payment forecast",num: 44086,date: new Date("2018-09-06T18:23:43.737Z"),array: [],obj: {_id: 21150,num: 24702,date: new Date("2018-09-06T01:11:34.393Z"),array: [54628,"plum Manager Salad",["Group",88227]]}},new Date("2018-09-05T22:52:51.872Z"),"syndicate Home Loan Account invoice",[],35101,[],{_id: 21151,date: new Date("2018-09-06T06:08:21.530Z"),array: [],obj: {_id: 21152,str: "Electronics parse calculating",num: 71923,date: new Date("2018-09-05T22:17:19.091Z"),array: [{_id: 21153,str: "Industrial Virgin Islands, U.S.",num: 66735,obj: {_id: 21154,date: new Date("2018-09-06T01:12:16.019Z"),array: [],obj: {}}}],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21155,str: "Decentralized Terrace AGP",num: 55813,date: new Date("2018-09-05T23:48:19.047Z"),array: [39589,new Date("2018-09-06T08:43:27.586Z"),new Date("2018-09-06T05:06:03.089Z"),new Date("2018-09-06T11:41:18.327Z"),new Date("2018-09-05T23:16:11.161Z"),[94029],"Money Market Account silver violet","Saint Barthelemy",[],[],26101,"Aruban Guilder Metrics",84665,{_id: 21156,str: "Plaza",num: 66300,date: new Date("2018-09-06T02:56:29.782Z"),array: ["redundant Cotton Turnpike",["Plaza Assurance success",{_id: 21157,str: "Legacy",date: new Date("2018-09-06T06:28:20.222Z"),array: [{_id: 21158,str: "Ergonomic Movies",num: 49866,obj: {_id: 21159,str: "bleeding-edge Union panel",num: 1764,obj: {}}},new Date("2018-09-06T00:14:48.892Z")],obj: {_id: 21160,num: 34928,array: [],obj: {}}}],new Date("2018-09-06T19:22:49.506Z")],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 21161,str: "approach Wooden Quality-focused",num: 94470,date: new Date("2018-09-06T10:25:00.624Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21162,str: "Berkshire",num: 12223,date: new Date("2018-09-06T05:53:37.258Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21163,str: "Baht Analyst Metal",num: 96042,date: new Date("2018-09-06T01:05:37.072Z"),array: [new Date("2018-09-06T01:02:47.179Z"),10528,"Computer",74791,{_id: 21164,str: "Shirt Technician",num: 73382,date: new Date("2018-09-06T07:46:30.756Z"),array: [],obj: {_id: 21165,num: 81190,array: [],obj: {_id: 21166,str: "Internal Incredible Granite Mouse",num: 71418}}},9306,21566,"magnetic",new Date("2018-09-06T10:07:16.454Z"),"Handmade Soft Table Games copy",50868]});
    },

    function(coll) {
        return coll.insert({_id: 21167,str: "Manager Freeway strategize",num: 62521,date: new Date("2018-09-06T08:44:06.232Z"),array: [new Date("2018-09-06T08:04:08.488Z"),{_id: 21168,str: "French Polynesia",num: 91759,date: new Date("2018-09-06T15:46:58.721Z"),array: [],obj: {}},78406,{_id: 21169,str: "Home Jewelery",obj: {}},new Date("2018-09-06T13:35:22.770Z"),86569,"functionalities Hat",new Date("2018-09-06T07:18:14.433Z"),2241,"Small",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21170,str: "Maryland black",num: 91982,date: new Date("2018-09-06T07:03:50.550Z"),array: [41762,23204,new Date("2018-09-06T12:20:51.747Z"),"ubiquitous","content Designer",89321,{_id: 21171,str: "gold Mayotte Regional",date: new Date("2018-09-06T08:54:57.551Z"),array: ["withdrawal eyeballs Virginia","Metal"],obj: {_id: 21172,num: 46700,date: new Date("2018-09-06T18:12:01.211Z"),array: [],obj: {_id: 21173,num: 65840,date: new Date("2018-09-06T04:39:06.945Z")}}},[new Date("2018-09-06T06:56:47.935Z")],"Ball Cook Islands neural-net",16894,{_id: 21174,str: "National",obj: {}},[],new Date("2018-09-06T07:08:57.661Z")],obj: {_id: 21175,str: "Sports",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21176,str: "Belarussian Ruble evolve parse",num: 88782,date: new Date("2018-09-06T14:57:38.334Z"),array: ["Marketing",78890,new Date("2018-09-06T12:00:20.640Z"),new Date("2018-09-06T09:02:42.862Z"),{_id: 21177,str: "transmit Intelligent Berkshire",num: 8636,date: new Date("2018-09-06T12:59:24.192Z"),array: ["transmitter",new Date("2018-09-06T07:08:31.447Z"),15811],obj: {}},58100,24763,"Plastic mindshare Australian Dollar",new Date("2018-09-05T21:58:24.026Z"),{_id: 21178,str: "firmware e-services",date: new Date("2018-09-06T17:37:25.633Z"),array: []},[],new Date("2018-09-06T03:43:26.108Z"),new Date("2018-09-06T04:34:54.845Z")],obj: {_id: 21179,date: new Date("2018-09-06T11:38:16.563Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21180,str: "tan Representative Finland",num: 89114,date: new Date("2018-09-06T05:39:44.430Z"),array: ["synthesize",new Date("2018-09-06T17:03:29.859Z"),91855,{_id: 21181,str: "Pennsylvania",num: 40286,date: new Date("2018-09-06T15:15:12.676Z"),array: [],obj: {_id: 21182,str: "bandwidth Mill Steel",num: 95233,array: [],obj: {}}},new Date("2018-09-06T01:14:53.130Z"),"Unbranded Steel Table New Hampshire",{_id: 21183,num: 63642,obj: {_id: 21184,str: "Tunisia Investment Account",date: new Date("2018-09-06T18:13:32.161Z"),array: [93004,new Date("2018-09-06T17:09:13.614Z"),"deposit",5778,"Principal"]}},new Date("2018-09-06T17:19:08.651Z"),33807,[71864,19414]],obj: {_id: 21185,str: "Representative",num: 98229,date: new Date("2018-09-06T01:59:32.321Z"),array: [[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21186,str: "synthesize solid state",num: 22588,date: new Date("2018-09-06T09:30:35.564Z"),array: [94306,"transmit",[],new Date("2018-09-05T20:24:32.365Z"),{_id: 21187,str: "Clothing",num: 66770,array: [],obj: {}},"Liechtenstein Maryland",86410,"metrics EXE",new Date("2018-09-06T09:20:05.611Z"),"pixel Throughway",{_id: 21188,num: 1330,date: new Date("2018-09-05T20:31:15.853Z"),array: [{_id: 21189,array: [],obj: {_id: 21190,str: "integrated Representative",date: new Date("2018-09-06T12:06:36.705Z"),array: [[new Date("2018-09-05T23:59:13.416Z"),[],new Date("2018-09-06T05:53:14.666Z"),51977]],obj: {_id: 21191,str: "collaborative neutral Engineer",num: 86146,date: new Date("2018-09-06T15:38:13.756Z"),obj: {}}}}]}],obj: {_id: 21192,str: "Sports markets",date: new Date("2018-09-06T11:03:34.388Z"),array: [53133,[],new Date("2018-09-06T15:28:19.995Z"),"matrix"],obj: {_id: 21193,str: "Ohio Island",num: 55451,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21194,str: "optimize",num: 65140,date: new Date("2018-09-06T10:55:19.354Z"),array: [],obj: {_id: 21195,str: "Nevada",num: 61706,date: new Date("2018-09-05T22:40:44.291Z"),array: [],obj: {_id: 21196,num: 12913,date: new Date("2018-09-05T22:11:36.835Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21197,str: "West Virginia Centralized bypassing",num: 98764,date: new Date("2018-09-06T17:08:43.426Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21198,str: "Sleek Metal Pizza",date: new Date("2018-09-06T07:12:10.701Z"),array: [new Date("2018-09-06T00:34:43.650Z"),"Gloves",46079,[],"visualize Tasty",new Date("2018-09-05T20:09:40.749Z"),92385,{_id: 21199,str: "Dynamic Dynamic Mandatory",num: 94849,date: new Date("2018-09-06T01:41:11.054Z"),array: ["Mayotte Response database"]},new Date("2018-09-06T14:50:49.009Z"),"IB",34853],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21200,str: "Washington budgetary management Computer",num: 9580,date: new Date("2018-09-06T00:03:32.410Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21201,str: "Money Market Account Mayotte",num: 33968,date: new Date("2018-09-06T12:14:21.158Z"),array: [42246,new Date("2018-09-06T14:34:04.738Z"),new Date("2018-09-06T00:18:37.021Z"),12630,"leading-edge invoice",new Date("2018-09-06T08:04:02.230Z"),{_id: 21202,str: "secured line copy Handmade",num: 25903,date: new Date("2018-09-06T00:08:23.010Z"),array: [],obj: {}},"disintermediate Tuna parsing",{_id: 21203,str: "Credit Card Account",date: new Date("2018-09-06T10:42:15.977Z"),array: [[],74687,"cross-platform invoice salmon"]},"Developer",90078,new Date("2018-09-06T13:10:32.012Z")]});
    },

    function(coll) {
        return coll.insert({_id: 21204,str: "Investment Account",num: 98584,date: new Date("2018-09-06T19:14:02.879Z"),obj: {_id: 21205,str: "Field",num: 20359,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21206,str: "Fresh Garden",num: 70436,date: new Date("2018-09-06T17:13:53.521Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21207,str: "Gardens Investment Account",num: 41579,date: new Date("2018-09-06T03:36:43.723Z"),array: [new Date("2018-09-06T02:37:27.923Z"),"Personal Loan Account Corporate",55353,"intermediate COM",57931,[],new Date("2018-09-05T22:43:25.542Z"),39335,[]],obj: {_id: 21208,str: "Bedfordshire Bike",num: 19585,date: new Date("2018-09-06T16:54:47.593Z"),array: ["olive compressing bandwidth",{_id: 21209,num: 71250,array: [{_id: 21210,str: "web services",num: 36597,date: new Date("2018-09-06T17:14:00.389Z"),array: [],obj: {}}],obj: {}},new Date("2018-09-06T04:37:27.593Z"),42213],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21211,str: "Riel",num: 66646,date: new Date("2018-09-06T11:15:04.980Z"),array: [],obj: {_id: 21212,str: "Circles digital",num: 32959,date: new Date("2018-09-06T17:45:33.719Z"),array: [{_id: 21213,str: "SMTP Denmark synergize",num: 68917,date: new Date("2018-09-06T08:04:27.465Z"),obj: {}},new Date("2018-09-06T09:29:20.432Z"),"Personal Loan Account","violet optimal Orchestrator",new Date("2018-09-06T12:33:39.766Z"),83451,new Date("2018-09-06T00:28:11.443Z"),"neural",68653,"Outdoors Vista index"]}});
    },

    function(coll) {
        return coll.insert({_id: 21214,num: 99408,date: new Date("2018-09-05T22:28:50.167Z"),array: ["Grocery tan Pataca",5124,new Date("2018-09-05T23:39:42.442Z"),"process improvement","Cambridgeshire Garden",96718,14854,[],52274,new Date("2018-09-06T02:17:16.380Z"),new Date("2018-09-06T06:53:09.467Z"),"Intranet",{_id: 21215,str: "Massachusetts real-time matrix",num: 27118,date: new Date("2018-09-05T21:25:54.921Z"),array: [],obj: {_id: 21216,str: "Automotive RSS productivity",num: 85185,date: new Date("2018-09-06T02:03:19.842Z"),array: [],obj: {_id: 21217,str: "digital Hat Focused",num: 80414,array: [new Date("2018-09-06T07:13:41.516Z"),{_id: 21218,date: new Date("2018-09-06T02:44:55.173Z")},9258],obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21219,num: 56258,date: new Date("2018-09-06T07:25:33.379Z"),obj: {_id: 21220,str: "Illinois Developer",num: 96719,date: new Date("2018-09-06T14:30:53.193Z"),array: [new Date("2018-09-06T12:13:07.783Z"),9384,new Date("2018-09-05T22:38:15.902Z"),"Strategist",94230,"solid state Buckinghamshire French Polynesia",new Date("2018-09-06T08:10:02.612Z"),[[new Date("2018-09-06T15:32:57.029Z"),62767],"Chips parsing capability",new Date("2018-09-06T04:16:13.712Z")],{_id: 21221,str: "Silver",num: 88029,date: new Date("2018-09-06T02:47:14.146Z"),array: ["Chicken Generic Soft Fish back up",39000,"Diverse Developer North Korean Won"],obj: {_id: 21222,num: 73971,date: new Date("2018-09-06T11:47:47.755Z"),array: [],obj: {}}}],obj: {_id: 21223,str: "Bosnia and Herzegovina",date: new Date("2018-09-06T02:38:34.514Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 21224,str: "Minnesota",num: 54865,date: new Date("2018-09-06T02:55:28.634Z"),array: [],obj: {_id: 21225,str: "Engineer Berkshire",num: 90944,date: new Date("2018-09-06T09:42:07.386Z"),array: [[],{_id: 21226,str: "Boliviano Mvdol connecting",obj: {}},"Hat",new Date("2018-09-06T19:27:46.216Z"),49359,new Date("2018-09-06T18:24:00.826Z"),92195,new Date("2018-09-05T22:49:45.056Z"),75846,"Credit Card Account","24 hour Fork","hack"],obj: {_id: 21227,num: 80243,date: new Date("2018-09-05T23:21:03.676Z"),array: [["SQL",new Date("2018-09-06T13:26:40.430Z"),"Infrastructure"],new Date("2018-09-06T09:52:43.518Z")],obj: {_id: 21228,str: "Officer",num: 22706,array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 21229,str: "Tasty multi-byte Alaska",num: 23334,date: new Date("2018-09-06T12:25:54.649Z"),array: [10220,"SSL",43891,new Date("2018-09-06T07:25:49.985Z"),84250,"Unbranded Ethiopian Birr parsing",{_id: 21230,str: "THX Tasty Global",num: 36538,date: new Date("2018-09-05T23:09:05.448Z"),array: [],obj: {_id: 21231,date: new Date("2018-09-05T22:18:38.120Z"),array: [],obj: {}}},{_id: 21232,str: "interface Usability Technician",num: 22668,obj: {}},new Date("2018-09-06T14:03:32.326Z"),{_id: 21233,str: "CFA Franc BEAC",num: 71139,date: new Date("2018-09-05T21:01:43.791Z"),array: [],obj: {_id: 21234,obj: {_id: 21235,num: 64421,array: [new Date("2018-09-06T06:22:17.582Z"),77588,new Date("2018-09-06T14:13:28.934Z"),[[],"Road Licensed Metal Pants"],"bandwidth"],obj: {_id: 21236,str: "card",num: 20194,obj: {}}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 21237,str: "Supervisor",num: 90917,date: new Date("2018-09-06T06:38:37.587Z"),array: [27700,"3rd generation","Chair",new Date("2018-09-06T17:13:31.743Z"),"transition deposit",{_id: 21238,str: "intuitive Checking Account indigo",num: 86565,date: new Date("2018-09-06T05:15:31.226Z"),array: [],obj: {}},21493,new Date("2018-09-06T08:58:32.198Z"),[],new Date("2018-09-06T10:13:38.803Z"),99007,[{_id: 21239,str: "bypassing Lari",num: 85387,date: new Date("2018-09-06T04:20:32.419Z"),array: []},"Maine transmit Plains",53573]],obj: {_id: 21240,str: "Steel Upgradable Metal",array: [new Date("2018-09-06T11:48:46.687Z"),22038],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21241,str: "intranet",num: 71972,date: new Date("2018-09-06T01:16:37.563Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21242,str: "integrate Health",num: 84473,date: new Date("2018-09-06T15:11:52.477Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21243,str: "Computers parse",num: 84023,date: new Date("2018-09-06T12:01:18.312Z"),array: ["Marketing",93549,new Date("2018-09-06T08:39:29.410Z"),"JSON hacking","Berkshire e-services","Usability Home white",48774,27836,new Date("2018-09-05T20:23:46.052Z"),"Intranet",new Date("2018-09-06T17:03:40.021Z"),[new Date("2018-09-06T18:30:26.639Z"),"Quality program global",{_id: 21244,str: "interactive Response Iranian Rial",num: 66835,date: new Date("2018-09-06T04:47:23.070Z"),array: [],obj: {_id: 21245,num: 95667,date: new Date("2018-09-06T11:25:52.346Z"),array: []}}],{_id: 21246,str: "Granite wireless",num: 59334,date: new Date("2018-09-06T00:06:03.898Z"),obj: {}},[{_id: 21247,str: "Human Avon",array: [],obj: {_id: 21248,str: "turn-key empowering",num: 48886,date: new Date("2018-09-06T14:57:32.669Z"),obj: {}}}]],obj: { _id: 21249 }});
    },

    function(coll) {
        return coll.insert({_id: 21250,str: "Unbranded monitoring",num: 54067,date: new Date("2018-09-06T02:41:22.119Z"),array: [new Date("2018-09-06T15:38:35.681Z"),"microchip Investment Account",59602,"bypassing extensible",35025,"Group",{_id: 21251,str: "Burkina Faso Algerian Dinar Research",num: 37511,date: new Date("2018-09-06T08:21:09.176Z"),array: [],obj: {_id: 21252,str: "Connecticut generate",num: 65989,date: new Date("2018-09-06T13:51:13.528Z"),array: ["Ergonomic bandwidth Tunnel",new Date("2018-09-06T11:44:48.056Z"),{_id: 21253,str: "invoice",array: ["teal monitor Assurance",26690],obj: {}},[new Date("2018-09-06T09:27:06.222Z"),"Drive",{_id: 21254,num: 40156,date: new Date("2018-09-06T18:50:03.512Z")}]],obj: {}}},30390,[],69902,new Date("2018-09-06T06:15:34.217Z")]});
    },

    function(coll) {
        return coll.insert({_id: 21255,str: "CSS",num: 34812,date: new Date("2018-09-06T00:55:09.041Z"),array: [],obj: {_id: 21256,str: "Bedfordshire",num: 49505,date: new Date("2018-09-06T16:29:15.098Z"),array: [],obj: {_id: 21257,array: [new Date("2018-09-06T04:57:24.754Z"),{_id: 21258,str: "sky blue Tasty Wooden Gloves Leone",num: 78483,date: new Date("2018-09-06T12:05:21.860Z"),array: [80100,new Date("2018-09-05T21:11:33.505Z"),"Synergized alarm Web"]},"3rd generation AI",new Date("2018-09-06T16:32:05.615Z"),71291,29300,8817,[{_id: 21259,str: "Multi-tiered",num: 48149,date: new Date("2018-09-06T08:28:53.569Z")}],"Credit Card Account",[],new Date("2018-09-06T14:04:57.355Z"),99685],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 21260,str: "impactful",num: 61266,date: new Date("2018-09-06T02:30:54.911Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 21261,str: "Junctions violet Savings Account",num: 63349,date: new Date("2018-09-06T13:18:47.226Z"),array: ["next-generation auxiliary","Legacy",92604,{_id: 21262,str: "parse Chicken cohesive",num: 78903,date: new Date("2018-09-06T15:22:36.405Z"),array: [],obj: {}},new Date("2018-09-06T15:05:58.502Z"),{_id: 21263,str: "invoice Shoals visualize",date: new Date("2018-09-06T13:50:32.082Z"),obj: {_id: 21264,str: "capacitor Bahamian Dollar proactive",num: 68216,date: new Date("2018-09-05T22:17:41.158Z"),array: [69591,87311,[],19090],obj: {_id: 21265,num: 55593,date: new Date("2018-09-06T17:46:03.728Z")}}},[],new Date("2018-09-06T12:41:28.783Z"),"Director Identity Cambridgeshire","deposit"]});
    },

    function(coll) {
        return coll.insert({_id: 21266,str: "France auxiliary",num: 20545,array: [],obj: {_id: 21267,num: 49494,date: new Date("2018-09-05T20:24:43.768Z"),array: [["Auto Loan Account Denar"],84406,30416,new Date("2018-09-06T13:21:45.770Z"),"program",new Date("2018-09-06T17:15:36.689Z"),[new Date("2018-09-06T03:24:48.017Z"),71908,"South Dakota technologies"],{_id: 21268,str: "Steel",num: 28851,date: new Date("2018-09-06T07:54:52.703Z"),array: [],obj: {_id: 21269,str: "black navigate",date: new Date("2018-09-06T09:43:45.396Z"),array: [],obj: {}}},36630,[new Date("2018-09-06T07:46:02.212Z")],[],{_id: 21270,str: "6th generation Tasty Concrete Cheese",date: new Date("2018-09-06T18:55:41.787Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 21271,str: "recontextualize",num: 9479,date: new Date("2018-09-06T05:10:03.729Z"),array: [],obj: {_id: 21272,str: "Personal Loan Account Chief",num: 40857,date: new Date("2018-09-06T02:57:30.570Z"),array: [{_id: 21273,date: new Date("2018-09-06T12:40:32.503Z"),array: []},7339,"productize homogeneous Brand",new Date("2018-09-05T20:52:14.798Z"),90554,["Junction California","fuchsia Borders",{_id: 21274,str: "deposit",num: 14765,array: [],obj: {}},new Date("2018-09-06T08:36:58.977Z"),35261],"Intuitive Grocery protocol",{_id: 21275,num: 51964,date: new Date("2018-09-06T02:08:22.558Z"),obj: {}},[new Date("2018-09-06T11:03:00.617Z")],[]],obj: {_id: 21276,str: "scalable",date: new Date("2018-09-06T07:01:31.277Z"),array: ["calculate"]}}});
    },

    function(coll) {
        return coll.insert({_id: 21277,str: "Vatu",num: 53743,date: new Date("2018-09-06T04:34:25.481Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 21278,str: "Granite solid state",num: 32606,date: new Date("2018-09-06T16:07:20.396Z"),array: [],obj: {_id: 21279,str: "invoice",date: new Date("2018-09-06T10:22:15.765Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21280,str: "Specialist maroon",num: 77401,date: new Date("2018-09-06T15:33:18.807Z"),array: [],obj: {_id: 21281,str: "Alaska",num: 66541,array: [new Date("2018-09-06T16:56:19.807Z"),"Keyboard Fields enable","Maine Pants foreground",[10923,"Arkansas"],36898,new Date("2018-09-06T08:23:09.891Z"),{_id: 21282,str: "Outdoors initiatives",num: 64765,date: new Date("2018-09-05T23:57:59.497Z"),array: [],obj: {}},new Date("2018-09-06T05:04:00.697Z"),new Date("2018-09-05T21:00:18.389Z"),"Checking Account Saint Helena Pound Ecuador",{_id: 21283,str: "Cote d'Ivoire Shoes policy",num: 49232,date: new Date("2018-09-06T17:19:47.151Z")}]}});
    },

    function(coll) {
        return coll.insert({_id: 21284,str: "Frozen Haven maximize",num: 61080,array: ["Bahraini Dinar system",new Date("2018-09-06T14:35:30.996Z"),new Date("2018-09-06T00:33:47.628Z"),new Date("2018-09-06T17:15:49.572Z"),49072,"Checking Account microchip",[],{_id: 21285,str: "value-added Fantastic Frozen Shirt adapter",num: 44291,date: new Date("2018-09-06T12:23:46.003Z"),array: [],obj: {_id: 21286,str: "Savings Account Buckinghamshire next-generation",num: 95015,date: new Date("2018-09-06T05:59:00.010Z"),array: ["Fresh Handcrafted Soft Pants","Chair Station Home Loan Account",[47857],"Extended virtual",57762,78309],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 21287,str: "sky blue initiatives",num: 68867,date: new Date("2018-09-06T10:06:53.105Z"),array: [],obj: {_id: 21288,str: "Facilitator copying Car",date: new Date("2018-09-06T15:16:48.424Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 21289,str: "transmit multi-state silver",num: 66444,date: new Date("2018-09-06T12:32:32.855Z"),array: [new Date("2018-09-05T23:53:17.477Z"),[],"Books",new Date("2018-09-06T18:34:58.661Z"),{_id: 21290,str: "Taiwan convergence",num: 96771,array: [],obj: {_id: 21291,str: "Developer Chair",num: 48901,date: new Date("2018-09-06T18:18:52.673Z"),obj: {_id: 21292,date: new Date("2018-09-06T12:13:01.445Z"),array: ["Georgia",30676,"Analyst Western Sahara Berkshire"],obj: {}}}},new Date("2018-09-05T23:07:03.491Z"),[new Date("2018-09-06T19:45:10.023Z"),87368,"systemic Buckinghamshire"],79759,"Sausages",[],66652,[]]});
    },

    function(coll) {
        return coll.insert({_id: 21293,str: "Money Market Account",num: 88882,date: new Date("2018-09-05T19:58:11.632Z"),array: [{_id: 21294,str: "Puerto Rico Bedfordshire",date: new Date("2018-09-06T16:46:06.659Z"),array: [71501],obj: {}},"Ergonomic Wooden Towels open-source International",786,"synthesizing",[new Date("2018-09-05T23:32:51.675Z"),29697,new Date("2018-09-06T03:13:29.520Z"),27756,"Crossing","utilisation Rubber implement",{_id: 21295,str: "archive Investment Account Turkish Lira",num: 71964,date: new Date("2018-09-06T06:43:43.322Z"),array: [],obj: {_id: 21296,str: "Ameliorated Tuna Intelligent Rubber Bacon",num: 89456,array: [],obj: {_id: 21297,str: "Checking Account Mews orchid",num: 2023,date: new Date("2018-09-06T10:17:52.753Z")}}},new Date("2018-09-06T05:23:28.211Z")],"end-to-end Customer",[{_id: 21298,num: 23948,date: new Date("2018-09-06T08:54:11.885Z")}],new Date("2018-09-06T06:03:10.022Z"),new Date("2018-09-06T09:47:48.086Z"),"Walks Buckinghamshire",[]],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $dateToParts: { date: { $hour: { $isoWeekYear: { $week: { $isoDayOfWeek: { $isoWeek: { $dayOfMonth: { $toDate: { $substrCP: ["world-class Terrace",0,3] } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $millesecond: { $toDate: { $arrayToObject: [[{k: "PCI",v: { $dateToString: {date: new Date("2018-09-05T21:14:16.885Z"),format: "%Z-%u-%z-%w-%w-%Y-%U-%Y-%S"} }}]] } } },format: "%z-%L-%H-%Z",timezone: "America/Dawson_Creek",onNull: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num',96569,'$obj.obj.num',85113],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],76150] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $sqrt: 40081 }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $mod: ['$obj.obj.obj.num',65675] },isoWeek: { $divide: [{ $pow: [86892,'$obj.obj.obj.num'] },'$obj.obj.obj.num'] },isoDayOfWeek: { $subtract: [90,'$num'] },millisecond: { $indexOfArray: [{ $map: {input: ["Planner"],as: 'antonina',in: { $multiply: [] }} },{ $arrayToObject: [[{k: "Colombian Peso Unidad de Valor Real Applications EXE",v: { $dateToParts: {date: { $dayOfWeek: { $month: { $month: new Date("2018-09-06T01:41:20.832Z") } } },timezone: "America/Argentina/Cordoba",iso8601: false} }},{k: "e-commerce contextually-based indexing",v: false},{k: "optimize Health",v: { $dateToString: {date: '$obj.obj.obj.obj.date',timezone: "America/Argentina/Mendoza",onNull: { $arrayElemAt: [[],{ $ceil: 55580 }] }} }}]] },19,4] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toString: { $range: [20,10,1] } },12,9] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Generic Frozen Pants withdrawal transmit",{ $concat: ["payment matrix systems"] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],1025] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Arizona Licensed"]]] }, _id: 0}}],

        [{$project: {a: { $range: [12,12,11] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: [{ $rtrim: { input: "transform" } }] },"system-worthy Manager",'$obj.obj.obj.obj.str'],['$obj.obj.num',14366],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "projection Knoll bandwidth-monitored",v: '$obj.obj.obj.date'},{k: "Money Market Account",v: 48727},{k: "Innovative bifurcated Avon",v: new Date("2018-09-06T10:16:57.740Z")},{k: "Principal Graphic Interface Producer",v: { $substrBytes: ["Soap Buckinghamshire Ball",12,10] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',15046,'$num'],50923] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Steel",v: '$obj.obj.date'},{k: "reciprocal",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',31098],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $substrCP: ["Intelligent Steel Tuna Money Market Account Music",12,2] }],[{ $toString: { $arrayToObject: [[{k: "Refined Granite Bacon Savings Account",v: { $substr: ['$obj.obj.str',1,18] }},{k: "Auto Loan Account Auto Loan Account hard drive",v: '$obj.date'}]] } },"matrix withdrawal"],[468],[83839,{ $trunc: '$num' },'$obj.obj.num'],['$obj.obj.obj.obj.str']],defaults: []} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $size: [[]] }} }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $range: [13,8] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "tertiary scale Small Metal Ball",v: false},{k: "Garden",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $dateToString: {date: new Date("2018-09-06T08:01:00.746Z"),format: "%U-%M-%u-%G-%L-%S",onNull: '$obj.str'} },14,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayToObject: [[[],[18383],[false],[6348,'$num']]] } },{ $ltrim: { input: "Unbranded Concrete Soap encoding" } }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $year: { $millesecond: { $isoWeek: { $week: { $dateFromParts: {isoWeekYear: { $abs: '$obj.obj.num' },isoWeek: { $log10: 82549 },hour: { $cmp: [{ $arrayToObject: [[{k: "Seamless Communications",v: { $substrCP: ["Handmade",8,1] }}]] },{ $arrayToObject: [[[true,30589],[],['$str'],[73961],[true,'$obj.date']]] }] },second: { $floor: '$obj.obj.obj.obj.num' },millisecond: { $cmp: [{ $arrayElemAt: [[],17984] },{ $substrBytes: ['$obj.obj.obj.str',9,3] }] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $year: { $second: { $dayOfWeek: new Date("2018-09-06T13:27:36.733Z") } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateToString: { date: { $month: { $dayOfMonth: { $dateToString: {date: '$obj.obj.obj.date',format: "%u-%m-%S-%G-%d",timezone: "Europe/Copenhagen"} } } } } },timezone: "America/Indiana/Winamac"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toUpper: "microchip" },'$str',"Awesome Concrete Bike"],[97029]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Assurance Colorado radical",v: { $isoDayOfWeek: { $minute: { $isoWeek: { $isoWeekYear: { $dayOfMonth: { $millesecond: { $isoWeek: { $dateToString: {date: { $dateToParts: { date: { $dateFromParts: {year: { $indexOfArray: [{ $concatArrays: [[39775],[{ $substrBytes: ["maximize asynchronous Kuwait",10,2] }],[],[],['$obj.obj.obj.str','$obj.str'],['$obj.obj.num',true]] },{ $toLower: '$obj.obj.str' },17] },minute: { $mod: [{ $indexOfArray: [{ $reverseArray: [[76495]] },{ $year: { $minute: { $dateToParts: {date: { $toDate: { $reverseArray: [['$obj.obj.obj.obj.str',"Concrete e-commerce benchmark",{ $rtrim: {input: { $substrCP: [{ $trim: {input: "Borders South Dakota",chars: "copy interactive grey"} },10,7] },chars: "redundant"} }]] } },timezone: "America/Campo_Grande",iso8601: false} } } },5] },46752] },millisecond: { $indexOfArray: [{ $concatArrays: [] },{ $trim: { input: { $substrBytes: [{ $concat: [{ $trim: { input: '$obj.obj.str' } },"capacity",'$str'] },19,9] } } },8,6] },timezone: "America/Resolute"} } } },onNull: "drive lime Colorado"} } } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-05T23:35:06.997Z",timezone: "America/Porto_Acre",onError: { $isoWeek: { $dateToParts: { date: { $second: { $dateFromParts: {isoWeekYear: { $size: [[{ $substrCP: ['$obj.obj.obj.obj.str',13,19] }]] },isoWeek: { $log: ['$obj.obj.obj.obj.num',945] }} } } } } }} } }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfYear: { $week: { $dateFromParts: {year: { $pow: [39272,95213] },day: '$obj.obj.obj.obj.num',hour: { $log: ['$num',{ $sqrt: '$obj.obj.obj.num' }] },minute: { $log10: 19719 },second: { $exp: 33673 },timezone: "Pacific/Guam"} } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [3195,96599],as: 'kali',cond: { $gt: [{ $week: { $isoDayOfWeek: { $millesecond: { $toDate: { $trim: {input: "Fantastic Granite Gloves Bedfordshire",chars: { $substrCP: ["invoice",7,18] }} } } } } },{ $objectToArray: '$$kali' }] }} }, _id: 0}}],

        [{$project: {a: { $toLower: { $substrCP: ["reboot South Dakota Chief",18,14] } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [['$str'],52857] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',"Berkshire",'$obj.obj.str'],[{ $substrCP: ["AI",7,20] }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: {input: { $toLower: '$obj.obj.obj.str' },chars: "Lead Auto Loan Account"} }]]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToParts: { date: { $month: { $week: { $second: { $dateFromString: {dateString: "2018-09-06T03:50:18.429Z",timezone: "Asia/Colombo"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Sports Chair Grocery",v: new Date("2018-09-06T05:12:32.702Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.str',"cultivate Soap"],['$num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $ltrim: { input: '$obj.obj.str' } }],['$obj.obj.str','$obj.obj.obj.obj.str',"Quality"]]] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: { $dayOfMonth: { $dayOfYear: { $second: { $dayOfMonth: { $minute: { $dateFromParts: {year: 22110,second: { $pow: ['$num','$obj.num'] },millisecond: { $trunc: { $ceil: 49286 } }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.obj.str',17,17] },"Legacy Unbranded"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],['$obj.obj.obj.obj.str'],[{ $substrCP: [{ $substrBytes: ["Cayman Islands deposit",1,6] },15,16] },'$obj.str',"Sausages invoice",'$obj.obj.str'],["Consultant solution-oriented"],[69813,'$obj.obj.obj.num']] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.obj.str',3,9] }],49578] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "virtual",v: 17078}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $ltrim: { input: '$obj.str' } }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],89198] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str','$obj.obj.str','$str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $toUpper: "morph" }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $year: { $dayOfMonth: { $isoWeekYear: { $isoWeek: { $year: { $dateFromParts: {year: { $ln: 76773 },day: { $sqrt: 55911 },second: { $log: ['$obj.obj.obj.num','$obj.obj.num'] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Arkansas"],as: 'lucy',in: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $second: { $millesecond: { $dateFromString: {dateString: "2018-09-06T10:06:02.481Z",timezone: "Pacific/Kiritimati",onError: { $concatArrays: [[{ $toUpper: "Investment Account markets Accountability" }],[14874,'$obj.obj.num'],[{ $toString: { $arrayToObject: [[[],[36736,'$num'],['$obj.obj.str',"integrate Creek Incredible",{ $concat: [] }]]] } }],[false]] },onNull: { $substr: ['$obj.obj.obj.obj.str',17,12] }} } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T04:09:08.064Z",onError: { $filter: {input: ['$obj.obj.str',{ $dateToString: {date: { $year: { $millesecond: { $isoDayOfWeek: '$date' } } },format: "%Y-%z-%M-%S-%Z-%j-%H",timezone: "Etc/GMT+12",onNull: { $arrayToObject: [[[],[14292],["intuitive Liaison"],[75619],['$obj.obj.obj.num'],[{ $dateToParts: {date: { $second: { $dateFromString: {dateString: "2018-09-05T22:25:48.864Z",timezone: "Australia/Darwin",onNull: { $arrayElemAt: [[],21022] }} } },timezone: "America/Goose_Bay"} }]]] }} }],cond: { $in: [{ $rtrim: {input: "flexibility Sleek Senior",chars: '$obj.obj.obj.str'} },{ $range: [1,8] }] }} }} }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["e-tailers",0,8] },{ $substrCP: [{ $concat: [] },10,17] }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transitional COM",v: { $dateToString: {date: new Date("2018-09-06T13:11:27.374Z"),format: "%Y-%w-%j-%U",onNull: { $isoWeekYear: { $minute: { $millesecond: { $month: { $dayOfYear: new Date("2018-09-06T01:21:34.699Z") } } } } }} }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Representative"],97517] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $sqrt: 84416 }]]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $rtrim: { input: '$obj.str' } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $trim: {input: "Sports calculate Plastic",chars: { $concat: ["Incredible Soft Hat input"] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[48776],['$obj.obj.str','$obj.obj.str',{ $toUpper: "USB project SSL" }],[],[{ $dayOfMonth: { $year: '$obj.obj.obj.date' } },{ $rtrim: {input: "transmitting hard drive",chars: '$obj.obj.obj.str'} }],['$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $toDate: { $arrayToObject: [[{k: "Garden",v: 53635},{k: "innovative",v: '$obj.obj.obj.str'}]] } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $arrayElemAt: [[],'$obj.num'] } }]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T00:35:24.607Z",format: "%Z-%z-%w-%u-%G-%w-%S-%w-%S",timezone: "Pacific/Funafuti",onError: { $arrayToObject: [[[],['$str',"portal Home Loan Account Wooden"],['$num','$obj.obj.obj.obj.num'],['$obj.obj.obj.str']]] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'vickie',in: 52795} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrCP: ['$obj.obj.obj.str',6,15] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "open-source Refined Steel Shoes",v: '$obj.obj.num'},{k: "Virtual",v: { $toString: { $arrayElemAt: [['$obj.obj.obj.obj.num',10194],95119] } }},{k: "Health paradigms",v: '$obj.obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: {date: '$date',format: "%j-%Y-%d-%Y-%L-%u-%Z-%H-%G-%H",timezone: "Europe/Isle_of_Man"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "copying AI",v: { $second: { $millesecond: { $dateToParts: {date: { $dateFromParts: {year: { $subtract: ['$obj.num',59438] },minute: { $exp: 73114 },second: { $ln: { $ln: 92091 } },millisecond: { $cmp: [{ $arrayElemAt: [[],45603] },{ $arrayElemAt: [['$obj.obj.num','$obj.obj.num'],'$num'] }] }} },timezone: "Pacific/Funafuti"} } } }},{k: "Gorgeous",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trunc: 48733 },'$obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Face to face",'$obj.obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $zip: { inputs: [["Guyana Dollar haptic"],['$obj.num',59525]] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Legacy Tanzania Seamless"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Buckinghamshire Optimized",'$obj.obj.obj.str'],93734] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "infrastructure Personal Loan Account Profound",v: '$obj.obj.obj.obj.str'},{k: "Louisiana",v: false}]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T15:01:19.041Z",onError: { $arrayElemAt: [["Architect XSS Baby","AGP Expanded Switchable"],'$obj.obj.obj.obj.num'] },onNull: '$str'} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],6970] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ["Direct India Infrastructure",'$obj.str'] },'$obj.obj.str'],['$obj.obj.num',true],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T18:16:04.937Z"),format: "%%-%%-%M-%u-%Y",onNull: { $minute: { $toDate: { $range: [7,13,20] } } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[true,true],[48101,'$obj.num'],[],[],[],["deliverables Auto Loan Account"]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num'],cond: { $in: [{ $arrayElemAt: [[],145] },{ $objectToArray: '$obj.obj.obj.obj' }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],32339] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-05T20:57:03.367Z") } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',"Re-engineered reboot strategize"],[],['$obj.obj.obj.obj.num',32996]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $week: { $month: { $dateToParts: {date: { $toDate: { $range: [4,2] } },iso8601: false} } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str',"card"],in: { $floor: 99235 }} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $week: { $toDate: { $month: { $week: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-05T22:41:02.789Z",onError: { $arrayElemAt: [[],'$num'] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[35277,{ $log10: 48174 }],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $toDate: { $reverseArray: [['$obj.num',39333]] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ceil: 36456 }],399] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $substrCP: ['$obj.obj.str',8,14] } },{ $concat: ["radical explicit",'$str'] }],[],[new Date("2018-09-06T03:58:01.276Z"),'$obj.date','$str'],["Personal Loan Account primary"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[97161],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $divide: [34682,'$obj.num'] },isoWeek: { $ceil: '$num' },minute: { $sqrt: '$num' },millisecond: { $size: [[]] },timezone: "America/Argentina/Mendoza"} },timezone: "Europe/Uzhgorod",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $hour: { $dateFromString: {dateString: "2018-09-06T16:18:17.890Z",format: "%M-%G-%j-%m-%w-%d-%w",timezone: "Europe/Gibraltar",onError: { $toLower: '$str' },onNull: { $objectToArray: '$obj.obj.obj.obj' }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "North Carolina",v: 97658}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.obj.obj.str',17,20] }],97456] }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfYear: { $minute: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T18:35:16.304Z"),format: "%Y-%d-%d-%z-%L",timezone: "Asia/Urumqi",onNull: '$obj.obj.str'} } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $size: [[]] },isoDayOfWeek: { $size: [[]] },minute: { $subtract: ['$obj.obj.obj.obj.num',80199] },millisecond: { $log10: 60990 }} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $toDate: { $arrayElemAt: [['$str'],79862] } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $ln: 53457 },hour: { $abs: '$obj.num' },minute: { $divide: [{ $add: [] },37575] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.num'],in: { $divide: [61147,'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toLower: "Malagasy Ariary Metal" }],['$obj.obj.obj.obj.num',42971],['$obj.obj.obj.num',34272]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'bret',cond: { $gt: [{ $substr: ['$$bret',10,9] },{ $arrayToObject: [[{k: "Garden",v: '$obj.date'},{k: "connect implement Ranch",v: '$$bret'}]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$obj.obj.obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["withdrawal",{ $toLower: { $dateToString: {date: '$obj.obj.date',format: "%z-%w-%%-%w-%V-%G-%d"} } }],['$obj.obj.obj.str','$obj.str'],[{ $abs: 66111 },38995],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "FTP multi-byte",v: true},{k: "revolutionize Licensed Granite Chips",v: true}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $divide: [{ $abs: { $size: [["navigate",'$obj.str']] } },'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$str'],cond: { $ne: [{ $arrayElemAt: [[],'$$this'] },{ $arrayToObject: [[{k: "River Markets",v: 45353},{k: "leading-edge",v: "SSL"}]] }] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.str',19,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[70330,'$obj.obj.obj.num'],87625] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[5947],[{ $substrCP: [{ $dateToString: {date: '$obj.obj.date',format: "%m-%S-%d-%m-%Y-%z-%j-%z-%u-%Z-%m"} },8,14] },'$obj.obj.obj.str'],['$obj.obj.str']],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T21:23:27.037Z",format: "%M-%z-%u-%Y-%M-%M-%d-%M",timezone: "America/Resolute",onError: { $arrayToObject: [[[],[],["hack"],['$str',{ $toUpper: { $toLower: { $trim: { input: { $ltrim: { input: { $toLower: '$obj.obj.obj.obj.str' } } } } } } },false]]] },onNull: { $toString: { $year: { $month: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T13:18:01.320Z",format: "%m-%m-%m-%w-%w-%d"} },timezone: "America/Moncton"} } } } }} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "card Ball" } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $not: [{ $arrayElemAt: [[90492,88147,'$num'],{ $subtract: ['$num',25459] }] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[58413,'$obj.num'],18109] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Group Movies",v: '$obj.obj.obj.obj.num'},{k: "Open-architected",v: false}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toLower: "Tasty Wooden Ball" },{ $concat: [{ $trim: { input: "National deliver Manors" } }] }],in: { $floor: 88691 }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$num',true],[13288],["THX Salad mobile"],[{ $rtrim: {input: '$str',chars: '$obj.obj.obj.str'} },'$obj.str']],defaults: [new Date("2018-09-06T04:08:23.794Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $ltrim: {input: "Congo one-to-one",chars: "calculating"} },{ $ltrim: {input: { $concat: ['$obj.obj.obj.str'] },chars: '$obj.str'} }],[94],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $toDate: { $arrayToObject: [[{k: "Outdoors Up-sized",v: '$obj.obj.str'},{k: "Ergonomic Wooden Bike Cambridgeshire",v: 75949}]] } },format: "%S-%S-%u-%w",timezone: "Europe/Berlin",onNull: { $year: { $isoWeekYear: new Date("2018-09-06T12:11:29.881Z") } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[{ $ltrim: { input: '$str' } },"HTTP Fresh"],'$obj.num'] } }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [['$str','$obj.str'],78006] } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $week: { $second: { $second: { $dateToString: {date: '$date',format: "%U-%V-%U-%L-%%",timezone: "Australia/West"} } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $range: [7,3,9] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeek: { $isoWeek: { $year: { $hour: { $dayOfWeek: { $dateFromParts: {year: { $log10: 75025 },month: { $floor: '$obj.obj.obj.obj.num' },hour: { $ln: 85765 },second: { $size: [['$num','$obj.num']] },millisecond: { $mod: [{ $exp: 90423 },{ $ceil: 11964 }] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "leverage tan Cloned",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],29571] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["empower",2,15] },'$obj.obj.obj.obj.str'],{ $add: ['$num'] }] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T09:09:12.897Z",format: "%u-%H-%Y-%Y",timezone: "Europe/Belgrade",onNull: { $toDate: { $dateToString: {date: '$obj.obj.date',onNull: { $objectToArray: '$obj.obj' }} } }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: '$obj.obj.obj.str' },'$obj.obj.obj.obj.str',{ $toLower: '$obj.str' }],[],[],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[new Date("2018-09-06T14:56:07.912Z"),true,'$obj.date'],[60041],["Unbranded Orchestrator GB"],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Home hack" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',"Ergonomic Rubber Sausages Squares"],92390] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $subtract: ['$obj.obj.obj.num',94868] },isoDayOfWeek: { $divide: ['$num',93922] },hour: { $indexOfArray: [{ $zip: { inputs: [[]] } },{ $substrCP: ['$obj.obj.obj.obj.str',4,18] },13] },minute: { $divide: [{ $abs: '$obj.num' },67578] },millisecond: { $cmp: [{ $arrayElemAt: [['$num'],'$obj.num'] },{ $toUpper: { $ltrim: { input: '$obj.obj.obj.str' } } }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "solution",v: { $month: { $second: { $isoDayOfWeek: { $dayOfWeek: { $minute: { $dateFromParts: {isoWeekYear: { $sqrt: 69680 },isoWeek: { $abs: 40980 },hour: { $ln: '$obj.obj.obj.obj.num' },millisecond: { $pow: [1464,'$obj.obj.num'] },timezone: "America/Los_Angeles"} } } } } } }},{k: "Open-architected engineer Kyat",v: "Haiti navigating"}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',7,5] }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $millesecond: { $dayOfMonth: { $isoWeek: { $year: { $dateToString: {date: '$obj.obj.obj.obj.date',timezone: "Mexico/General",onNull: { $arrayElemAt: [[],61677] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Administrator Administrator Berkshire"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: {input: "alliance Credit Card Account",chars: { $ltrim: {input: { $substrBytes: ['$obj.str',1,9] },chars: '$obj.str'} }} }],[19599],[{ $cmp: [{ $arrayElemAt: [["invoice connect","pricing structure 1080p"],'$obj.obj.obj.num'] },{ $isoWeekYear: { $isoWeek: { $dateFromParts: {year: { $pow: [95374,46074] },second: { $divide: ['$obj.obj.obj.num','$obj.obj.obj.num'] },millisecond: 47597} } } }] },'$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],90256] }, _id: 0}}],

        [{$project: {a: { $concat: ["Money Market Account generate magenta",'$str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Nebraska back up Turkish Lira",v: false},{k: "collaborative Bolivar Fuerte secondary",v: '$obj.date'},{k: "Ethiopia",v: { $isoWeek: { $isoDayOfWeek: { $hour: '$obj.date' } } }}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfMonth: { $month: { $dayOfWeek: { $dateToParts: {date: { $dayOfYear: { $dateFromParts: {year: { $size: [['$str',"Azerbaijan envisioneer generate"]] },month: { $log10: 61956 },hour: 51863,minute: { $abs: '$obj.obj.num' },second: { $cmp: [{ $substrCP: [{ $concat: ["array"] },17,15] },{ $arrayElemAt: [[{ $ln: '$obj.num' },73278],{ $sqrt: '$obj.obj.obj.num' }] }] }} } },timezone: "Africa/Addis_Ababa",iso8601: false} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],4325] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str',"Small Rustic Steel Mouse Sleek"],cond: false} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["indigo",9,11] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "productivity",v: false},{k: "customized Senior navigate",v: 88939}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["middleware payment Principal",'$obj.obj.obj.str'],['$obj.obj.num'],['$obj.obj.obj.str'],["optical",{ $substr: [{ $toUpper: '$obj.str' },5,5] },'$str']]] }, _id: 0}}],

        [{$project: {a: { $substr: ["Unbranded Metal Bike",1,10] }, _id: 0}}],

        [{$project: {a: { $range: [9,17] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Well black Uganda Shilling",chars: "paradigms Intelligent Tuna"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $ln: 95312 }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "open-source",v: 62617}]] }, _id: 0}}],

        [{$project: {a: { $range: [19,3] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Handmade"],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["parsing matrix Rustic",4,3] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $range: [10,3] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Avon Sleek Cotton Table",v: 43735},{k: "synthesize",v: new Date("2018-09-06T08:01:38.568Z")},{k: "navigating Auto Loan Account Global",v: "orange directional SCSI"}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $substrCP: ["Open-source",14,11] },chars: '$obj.obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T13:35:47.941Z",onError: { $toLower: '$obj.str' },onNull: "Tanzania"} } },timezone: "America/Buenos_Aires",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: { $substr: ['$str',16,19] } } },"Keys Vista Practical Granite Ball"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toDate: { $ltrim: { input: { $rtrim: {input: { $toString: { $month: { $isoWeek: { $year: { $dayOfYear: { $isoDayOfWeek: { $toDate: { $range: [10,10] } } } } } } } },chars: '$obj.obj.str'} } } } }],{ $mod: ['$obj.obj.num',15205] }] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$str',{ $trim: { input: "Intelligent Fresh Sausages" } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ["Steel",1,4] },"contingency"]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Pre-emptive" } }, _id: 0}}],

        [{$project: {a: { $toLower: { $toString: { $range: [1,9,6] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.num',43731]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $week: { $minute: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-05T20:45:36.079Z",timezone: "Africa/Bissau",onNull: { $concat: ["Soft program",'$obj.obj.obj.str'] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],9826] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfYear: { $year: { $dayOfWeek: { $dateToParts: {date: { $dayOfYear: { $dateFromParts: {year: { $exp: 99712 },month: { $floor: 1110 },day: { $pow: ['$obj.obj.obj.num','$obj.obj.obj.obj.num'] },hour: { $sqrt: 65246 },minute: { $abs: '$num' }} } },iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',2,3] }, _id: 0}}],

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
