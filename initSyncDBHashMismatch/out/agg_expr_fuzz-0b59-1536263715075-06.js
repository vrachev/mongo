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
        return coll.insert({_id: 3710,str: "Realigned",num: 71079,date: new Date("2018-09-05T20:25:40.334Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3711,str: "USB Pizza Concrete",num: 12473,date: new Date("2018-09-06T04:38:40.816Z"),array: [30713,"Bedfordshire Fresh Orchard",new Date("2018-09-06T11:20:14.104Z"),new Date("2018-09-06T07:43:37.638Z"),new Date("2018-09-06T01:46:16.182Z"),"Handmade e-tailers","mission-critical analyzer",[72413,new Date("2018-09-06T07:42:03.427Z"),["Granite Open-source e-commerce"],{_id: 3712,str: "yellow Personal Loan Account",num: 48068,date: new Date("2018-09-06T11:35:41.521Z"),array: [],obj: {_id: 3713,str: "orchid",num: 63189,array: [],obj: {_id: 3714,str: "e-services repurpose China",date: new Date("2018-09-06T10:05:16.126Z"),obj: {}}}},33999,{_id: 3715,str: "Investment Account local area network Vision-oriented",date: new Date("2018-09-06T16:49:11.612Z"),array: [],obj: {_id: 3716,num: 62803,date: new Date("2018-09-06T03:33:11.332Z"),array: [new Date("2018-09-06T19:31:57.458Z"),[89472]]}},"Handcrafted",{_id: 3717,str: "San Marino",num: 46253,obj: {_id: 3718,num: 19044,date: new Date("2018-09-06T19:54:02.793Z")}}],new Date("2018-09-06T12:33:48.967Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3719,str: "turn-key Incredible Steel Keyboard",array: []});
    },

    function(coll) {
        return coll.insert({_id: 3720,str: "Rubber",num: 87928,date: new Date("2018-09-06T00:17:37.071Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3721,date: new Date("2018-09-06T08:41:12.829Z"),array: [11754,new Date("2018-09-06T16:36:56.240Z"),[],new Date("2018-09-06T13:26:22.715Z"),"Incredible Frozen Sausages back-end Gorgeous",8380,"reciprocal",{_id: 3722,str: "heuristic bottom-line Coordinator",num: 38702,date: new Date("2018-09-06T06:52:31.716Z"),array: [new Date("2018-09-06T08:45:50.127Z")]},"Money Market Account Switzerland 24/7",new Date("2018-09-06T14:48:17.857Z"),30856,76494,[],"New Hampshire",{_id: 3723,str: "program",num: 78429,date: new Date("2018-09-06T16:13:33.145Z"),array: [{_id: 3724,array: [],obj: {_id: 3725,str: "Shoes Chips Cambridgeshire",num: 49053,date: new Date("2018-09-06T03:29:44.884Z"),array: [15496],obj: {}}}],obj: {}}],obj: {_id: 3726,str: "payment",num: 52165}});
    },

    function(coll) {
        return coll.insert({_id: 3727,str: "Ergonomic metrics Home Loan Account",num: 35521,date: new Date("2018-09-06T03:58:03.468Z"),array: ["reboot connect",92674,{_id: 3728,str: "Delaware Electronics virtual",num: 47197,date: new Date("2018-09-06T00:59:38.128Z"),array: [],obj: {_id: 3729,str: "generating",num: 61688,date: new Date("2018-09-06T11:58:57.437Z"),obj: {_id: 3730,date: new Date("2018-09-06T09:31:43.473Z"),array: []}}},3756,"Azerbaijan Manager port",new Date("2018-09-06T07:22:03.427Z"),["productivity Intelligent Cedi"],new Date("2018-09-06T07:23:27.314Z"),new Date("2018-09-06T18:19:07.890Z"),22392,new Date("2018-09-06T06:10:12.026Z"),{_id: 3731,str: "Implemented Licensed",num: 11935,date: new Date("2018-09-06T07:05:11.758Z"),array: [[],22631,"Branding Louisiana",27560,[]],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 3732,str: "Rubber Electronics Guyana Dollar",num: 99626,date: new Date("2018-09-06T09:22:56.617Z"),array: ["generate Cotton productize",new Date("2018-09-05T21:29:31.995Z"),34089,new Date("2018-09-06T10:14:27.302Z"),new Date("2018-09-06T01:05:03.564Z"),13709,"Home Loan Account Lodge",[],[70252,new Date("2018-09-06T19:35:40.308Z")],{_id: 3733,str: "primary Forint circuit",num: 82909,date: new Date("2018-09-06T01:40:25.002Z"),array: [],obj: {_id: 3734,num: 83733,obj: {}}},new Date("2018-09-06T14:36:56.681Z")]});
    },

    function(coll) {
        return coll.insert({_id: 3735,str: "initiatives Assistant Handmade Rubber Salad",num: 7959,date: new Date("2018-09-06T02:46:30.350Z"),array: [89187,[],39860,new Date("2018-09-06T05:39:38.041Z"),new Date("2018-09-05T20:27:02.022Z"),"virtual indexing Congolese Franc",[],"grey",[89291,{_id: 3736,str: "Ergonomic Cotton Sausages Handcrafted Metal Chips HDD",num: 95996,array: [4711,72483,new Date("2018-09-06T17:51:13.789Z"),47258]},"revolutionary"],{_id: 3737,num: 33423,date: new Date("2018-09-06T12:49:01.020Z"),array: [],obj: {_id: 3738,date: new Date("2018-09-06T18:21:35.274Z"),array: [],obj: {}}},new Date("2018-09-06T18:15:27.762Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3739,str: "Arizona",date: new Date("2018-09-06T05:35:04.006Z"),array: [[27566,new Date("2018-09-05T21:35:37.828Z"),"holistic","Massachusetts Oregon"],new Date("2018-09-06T17:27:09.296Z"),60844,80662,[],35324,{_id: 3740,str: "Security",num: 99135,date: new Date("2018-09-06T14:58:27.772Z"),array: [],obj: {}},new Date("2018-09-06T14:32:14.556Z"),"panel Mississippi",{_id: 3741,str: "Handcrafted",num: 69742,date: new Date("2018-09-06T19:45:58.263Z"),obj: {_id: 3742,str: "regional online",num: 94734,date: new Date("2018-09-06T06:46:18.139Z"),array: [],obj: {}}},"Syrian Pound"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3743,str: "synergistic Human Clothing",num: 68114,date: new Date("2018-09-06T00:40:40.704Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3744,str: "Towels Corner",num: 58793,date: new Date("2018-09-06T08:24:31.720Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3745,str: "1080p copying",num: 82004,date: new Date("2018-09-06T14:25:42.700Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3746,str: "Wells Operations virtual",num: 65813,date: new Date("2018-09-06T08:44:13.976Z"),array: [],obj: {_id: 3747,str: "Kuwaiti Dinar",num: 98396,date: new Date("2018-09-06T19:40:44.830Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3748,str: "Money Market Account",num: 76240,date: new Date("2018-09-06T11:55:05.205Z"),array: [],obj: {_id: 3749,str: "Steel",num: 22377,date: new Date("2018-09-06T11:30:22.544Z"),array: [77079,[],"Investment Account",55623,new Date("2018-09-06T06:05:45.786Z"),"bypass",77544,new Date("2018-09-06T18:52:28.970Z"),{_id: 3750,str: "Gloves",array: ["Intranet black Cambridgeshire"],obj: {}},"optical systemic",new Date("2018-09-05T20:47:18.231Z"),5503,{_id: 3751,num: 28969,date: new Date("2018-09-06T03:44:54.628Z"),array: [],obj: {}}],obj: {_id: 3752,str: "Steel Bouvet Island (Bouvetoya) haptic",num: 53107,array: [[new Date("2018-09-06T01:29:35.190Z")],{_id: 3753,str: "Adaptive Cotton",num: 67499,date: new Date("2018-09-06T11:45:59.380Z"),obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 3754,str: "copy Fish",num: 21085,date: new Date("2018-09-05T21:53:23.711Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3755,str: "Realigned",num: 61355,date: new Date("2018-09-06T19:17:26.594Z"),array: [31784,{_id: 3756,str: "Tools Bahrain",date: new Date("2018-09-06T05:47:09.218Z"),array: [],obj: {}},[],"focus group Refined Ball",new Date("2018-09-06T04:35:53.011Z"),new Date("2018-09-06T09:59:44.161Z"),[],60807,{_id: 3757,str: "mobile",num: 50854,date: new Date("2018-09-06T09:30:30.428Z")}],obj: {_id: 3758,str: "Indiana Borders",num: 80773,date: new Date("2018-09-06T02:54:19.019Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3759,str: "schemas",num: 74841,array: [],obj: {_id: 3760,str: "Senior impactful Missouri",date: new Date("2018-09-06T09:30:20.058Z"),array: [new Date("2018-09-06T16:01:55.495Z"),"Games",97650,{_id: 3761,str: "Fiji Dollar monitor Central",num: 3476,date: new Date("2018-09-05T23:36:00.725Z"),array: [],obj: {_id: 3762,str: "Rapids Concrete microchip",date: new Date("2018-09-05T23:50:13.426Z"),array: [],obj: {}}},"GB India invoice","HTTP innovate",new Date("2018-09-05T23:29:31.831Z"),[],44784,55702,new Date("2018-09-05T22:53:54.043Z"),35334],obj: {_id: 3763,num: 59208,array: ["brand"]}}});
    },

    function(coll) {
        return coll.insert({_id: 3764,str: "Baby",num: 6645,date: new Date("2018-09-06T18:53:45.496Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3765,str: "Codes specifically reserved for testing purposes back-end",num: 12416,date: new Date("2018-09-06T01:16:40.561Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3766,str: "Rest Norfolk Island analyzer",num: 36317,date: new Date("2018-09-06T08:49:09.136Z"),array: ["Future SDD one-to-one",new Date("2018-09-06T18:30:14.436Z"),{_id: 3767,str: "system hacking Intelligent Metal Chair",date: new Date("2018-09-06T08:05:03.970Z"),array: [],obj: {_id: 3768,num: 90148,date: new Date("2018-09-06T01:34:21.796Z"),array: [],obj: {}}},45042,80874,"multi-byte",68007,{_id: 3769,str: "implement e-markets Synchronised",num: 68995,array: ["optimize e-markets French Southern Territories",94962,new Date("2018-09-06T16:04:41.808Z")]},new Date("2018-09-06T01:19:12.128Z"),[],"Investment Account Beauty Kids"],obj: {_id: 3770,str: "Car Soft Distributed",date: new Date("2018-09-05T21:30:40.196Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3771,str: "ivory Vermont Money Market Account",num: 21662,array: [],obj: {_id: 3772,date: new Date("2018-09-05T23:42:51.970Z"),array: [],obj: {_id: 3773,str: "cohesive complexity",num: 57175,date: new Date("2018-09-06T15:32:40.602Z"),array: [new Date("2018-09-06T16:01:38.539Z"),"transmitting THX",37782,40572,new Date("2018-09-06T08:20:46.373Z"),{_id: 3774,str: "infrastructure Branding",num: 48917,array: [[],new Date("2018-09-06T02:49:14.003Z"),"hacking Administrator",[]]},"Handcrafted","intermediate indigo",43842],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3775,str: "extranet firewall Applications",num: 76848,date: new Date("2018-09-05T22:45:05.899Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3776,str: "Cambridgeshire mint green",num: 56654,date: new Date("2018-09-06T00:54:45.896Z"),array: [],obj: {_id: 3777,str: "generate",num: 94198,date: new Date("2018-09-06T07:59:18.532Z"),array: [[],92802,"Reunion",4576,"bypass Cloned",16258,[],new Date("2018-09-06T17:38:06.260Z"),new Date("2018-09-06T13:00:28.946Z"),{_id: 3778,num: 77149,date: new Date("2018-09-05T23:52:15.191Z"),array: ["Functionality Cheese Principal","transmit Mongolia Sleek Fresh Keyboard",new Date("2018-09-06T08:30:54.886Z"),{_id: 3779,str: "Focused",num: 22127,array: [{_id: 3780,date: new Date("2018-09-06T09:54:28.262Z"),array: [new Date("2018-09-06T18:25:21.280Z")],obj: {_id: 3781,str: "Ergonomic",num: 43932,obj: {_id: 3782,str: "Accounts multi-byte",num: 77845,date: new Date("2018-09-06T09:00:23.662Z"),array: [20097]}}},"methodology Table",new Date("2018-09-06T05:32:46.998Z")],obj: {}}]},65287],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3783,str: "Mouse",num: 18123,date: new Date("2018-09-06T03:56:39.447Z"),obj: {_id: 3784,str: "Investor encryption",num: 98252,date: new Date("2018-09-05T22:45:55.405Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3785,str: "Virginia Burundi Franc system",num: 87795,date: new Date("2018-09-06T11:52:01.173Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3786,str: "Money Market Account Center",num: 15409,date: new Date("2018-09-06T03:32:03.167Z"),array: [97154,new Date("2018-09-06T12:06:16.302Z"),[],61836,new Date("2018-09-06T05:47:48.477Z"),"Fresh Belarus","silver Refined",{_id: 3787,str: "Factors Soft program",num: 5456,date: new Date("2018-09-06T17:46:38.143Z"),obj: {}},new Date("2018-09-06T15:43:07.943Z"),[],new Date("2018-09-06T18:39:03.401Z"),60496],obj: {_id: 3788,num: 27952,array: ["grey","Planner",46056],obj: {_id: 3789,str: "Concrete",num: 74628,date: new Date("2018-09-06T03:36:56.707Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 3790,str: "multi-byte",num: 28464,date: new Date("2018-09-06T09:37:46.025Z"),array: [],obj: {_id: 3791,str: "Alabama Delaware Incredible Steel Hat",num: 93058,date: new Date("2018-09-06T07:47:58.204Z"),array: ["e-business",new Date("2018-09-06T12:58:13.085Z"),[31551,"XML",new Date("2018-09-06T13:59:27.151Z")],73292,"Centers",[{_id: 3792,str: "Unbranded Cotton Salad GB alarm",num: 8938,date: new Date("2018-09-06T09:46:44.146Z"),array: [new Date("2018-09-06T14:29:22.521Z")],obj: {}}],"Berkshire",{_id: 3793,str: "Ameliorated",array: [],obj: {}},{_id: 3794,num: 85906,date: new Date("2018-09-06T09:34:21.806Z"),obj: {}},[],27748,new Date("2018-09-06T12:04:58.592Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 3795,str: "syndicate bandwidth",num: 29863,date: new Date("2018-09-06T01:12:22.627Z"),array: [24293,14166,"Infrastructure","Industrial Granite",new Date("2018-09-06T16:22:02.039Z"),"deposit communities initiative",new Date("2018-09-05T23:30:07.010Z"),76400,{_id: 3796,str: "Operations",num: 79631,array: [new Date("2018-09-05T23:27:02.270Z"),{_id: 3797,str: "Home Loan Account Prairie",num: 37876,date: new Date("2018-09-06T15:08:48.147Z"),obj: {}}],obj: {_id: 3798,str: "Intelligent",date: new Date("2018-09-05T20:34:37.209Z"),array: [],obj: {}}},"Distributed Quality invoice",[],54863],obj: {_id: 3799,str: "Handmade Frozen Towels Direct",num: 38687,date: new Date("2018-09-05T23:39:43.897Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3800,str: "Integration Gloves CSS",num: 84709,date: new Date("2018-09-05T21:53:03.266Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3801,str: "upward-trending",num: 82673,date: new Date("2018-09-05T23:20:13.552Z"),array: [new Date("2018-09-06T13:11:32.375Z"),new Date("2018-09-06T06:58:58.377Z"),new Date("2018-09-05T22:35:52.762Z"),2012,"Front-line",82456,"Usability",97215,{_id: 3802,str: "whiteboard",num: 20989,array: [],obj: {_id: 3803,num: 47814,date: new Date("2018-09-06T09:27:31.241Z")}},73673,"quantify communities",81717,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3804,str: "red calculate",num: 8956,date: new Date("2018-09-06T09:45:18.088Z"),array: [32326,62408,"transmitting","transitional",new Date("2018-09-06T13:48:44.602Z"),[],{_id: 3805,str: "Belize Dollar",date: new Date("2018-09-06T13:59:22.394Z"),array: [15551,{_id: 3806,str: "synthesize Handcrafted",num: 51518,array: [],obj: {_id: 3807,str: "primary",num: 29179,date: new Date("2018-09-06T06:03:22.855Z"),array: [],obj: {}}}],obj: {}},new Date("2018-09-06T07:04:07.296Z"),98776,"Mauritius New Israeli Sheqel",["invoice",new Date("2018-09-06T15:47:16.804Z"),54127]],obj: {_id: 3808,num: 53918}});
    },

    function(coll) {
        return coll.insert({_id: 3809,str: "SDD schemas",num: 72033,date: new Date("2018-09-06T11:56:46.040Z"),array: ["Bridge",new Date("2018-09-06T05:57:20.558Z"),32245,24935,"copy actuating",[],16299,new Date("2018-09-06T02:51:04.959Z"),new Date("2018-09-06T05:53:32.163Z"),"synthesizing core copy",{_id: 3810,num: 51094,date: new Date("2018-09-06T18:57:09.802Z"),array: ["synthesize Table 1080p",97473],obj: {_id: 3811,str: "withdrawal Investment Account",num: 19170,date: new Date("2018-09-06T17:51:09.991Z"),array: [],obj: {}}},[],new Date("2018-09-06T16:03:44.467Z"),new Date("2018-09-06T10:05:49.492Z")],obj: {_id: 3812,str: "California"}});
    },

    function(coll) {
        return coll.insert({_id: 3813,str: "Decentralized Heard Island and McDonald Islands",num: 26153,date: new Date("2018-09-06T04:51:43.187Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3814,str: "Anguilla Underpass",num: 58638,date: new Date("2018-09-05T22:08:34.620Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3815,str: "Games",num: 40583,date: new Date("2018-09-06T10:15:00.994Z"),array: [72947,57268,75414,new Date("2018-09-06T17:51:14.079Z"),"copy Dam","extensible bluetooth",{_id: 3816,date: new Date("2018-09-05T21:14:37.925Z"),array: [],obj: {}},"Keyboard Pennsylvania Kids",new Date("2018-09-06T12:34:27.005Z"),new Date("2018-09-06T00:37:57.744Z"),52234,"programming",[new Date("2018-09-06T05:28:21.541Z"),{_id: 3817,str: "Cotton ivory",num: 29736,date: new Date("2018-09-06T03:43:00.357Z"),array: [],obj: {_id: 3818,str: "Corporate",num: 38990,date: new Date("2018-09-06T13:26:29.935Z"),obj: {}}}],[[]]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3819,str: "Representative monitor Jewelery",num: 73538,date: new Date("2018-09-06T07:36:13.883Z"),array: [new Date("2018-09-06T07:26:29.162Z"),"input withdrawal",4369,17179,{_id: 3820,str: "Grocery turquoise",num: 70217,date: new Date("2018-09-06T01:04:40.305Z"),array: ["digital EXE",62699],obj: {}},new Date("2018-09-06T02:21:11.506Z"),["Shoes sticky navigating",new Date("2018-09-06T01:28:48.202Z"),99261],"Key synthesize",31901,[],new Date("2018-09-06T02:38:18.983Z"),[]],obj: {_id: 3821,str: "Virginia",date: new Date("2018-09-06T18:06:30.403Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3822,str: "white Practical Wooden Table system",num: 8839,date: new Date("2018-09-06T13:34:37.848Z"),obj: {_id: 3823,str: "Seychelles Rupee",date: new Date("2018-09-06T16:08:17.425Z"),array: [9213,{_id: 3824,str: "functionalities transmitter parsing",num: 77467,date: new Date("2018-09-05T21:27:03.187Z"),array: [],obj: {}},"Granite",new Date("2018-09-06T01:46:35.477Z"),new Date("2018-09-06T05:16:59.255Z"),new Date("2018-09-06T01:12:53.700Z"),82569,"deploy Bypass",18386,21217,new Date("2018-09-06T14:09:43.985Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3825,str: "Director Checking Account AGP",num: 57651,date: new Date("2018-09-06T10:56:42.413Z"),array: [18803,"magnetic back up","black payment",12870,new Date("2018-09-06T00:47:34.809Z"),new Date("2018-09-06T13:06:45.714Z"),{_id: 3826,str: "Bedfordshire Optimization infrastructures",num: 93671,date: new Date("2018-09-06T12:03:01.828Z"),array: [new Date("2018-09-06T19:29:03.672Z")]},new Date("2018-09-05T20:12:12.105Z"),90250,new Date("2018-09-06T00:59:58.966Z"),"auxiliary","Principal",new Date("2018-09-06T04:11:39.844Z"),{_id: 3827,str: "Washington engineer",array: [],obj: {_id: 3828,num: 26501,date: new Date("2018-09-06T10:21:33.476Z"),array: [[]],obj: {_id: 3829,num: 60427,date: new Date("2018-09-06T04:37:42.101Z"),obj: {_id: 3830,num: 53497,date: new Date("2018-09-05T20:27:50.735Z"),array: []}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 3831,str: "Azerbaijan",num: 6752,date: new Date("2018-09-06T10:46:36.094Z"),array: [14469,new Date("2018-09-05T22:26:39.293Z"),"hierarchy Wooden reboot",new Date("2018-09-06T03:44:00.719Z"),{_id: 3832,str: "SAS",num: 33929,date: new Date("2018-09-05T23:42:07.770Z"),array: [{_id: 3833,str: "New Jersey",date: new Date("2018-09-06T04:41:53.835Z"),array: [],obj: {}},"initiatives blue",24086,new Date("2018-09-06T10:45:15.922Z")],obj: {}},15992,186,47037,new Date("2018-09-05T23:28:39.497Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3834,str: "Shoes Pre-emptive Face to face",num: 53968,date: new Date("2018-09-06T02:35:46.419Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3835,str: "system-worthy",num: 61068,date: new Date("2018-09-06T02:12:17.980Z"),array: [],obj: {_id: 3836,str: "Wooden",num: 4773,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3837,str: "green Fresh virtual",num: 25732,date: new Date("2018-09-06T06:47:38.351Z"),obj: {_id: 3838,str: "payment",num: 56971,array: [{_id: 3839,str: "Handcrafted",num: 39024,date: new Date("2018-09-06T15:44:18.605Z"),array: [],obj: {}},"Baby",2882,[new Date("2018-09-05T21:27:29.232Z"),[30158]],new Date("2018-09-06T14:13:58.336Z"),{_id: 3840,date: new Date("2018-09-06T08:54:51.930Z"),obj: {_id: 3841,str: "Fresh",array: []}},new Date("2018-09-06T18:52:41.503Z"),"Mississippi throughput Gorgeous","database Burundi","Gorgeous Granite Salad deposit",[],73794],obj: {_id: 3842,num: 81192,date: new Date("2018-09-06T07:59:54.679Z"),array: [],obj: {_id: 3843,str: "driver Customer-focused",num: 59930,date: new Date("2018-09-06T04:06:22.245Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 3844,str: "Sri Lanka Rupee projection",num: 77837,date: new Date("2018-09-05T22:19:04.587Z"),array: [89112,"Utah parsing transmitting","contingency District redundant",2189,new Date("2018-09-06T18:00:08.891Z"),new Date("2018-09-06T16:37:02.990Z"),new Date("2018-09-06T11:52:41.029Z"),[[],new Date("2018-09-06T06:41:47.286Z")],{_id: 3845,str: "Future",num: 39785,date: new Date("2018-09-06T19:14:24.407Z"),array: ["backing up",[]],obj: {_id: 3846,str: "feed Tasty New Mexico",num: 35213,date: new Date("2018-09-06T15:09:16.555Z"),array: [{_id: 3847,num: 64473},85690,97627],obj: {}}},{_id: 3848,num: 80423,date: new Date("2018-09-06T05:07:22.234Z"),array: [new Date("2018-09-06T01:38:12.615Z"),36117]},new Date("2018-09-06T18:00:24.900Z"),"Berkshire multi-byte"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3849,str: "bifurcated",num: 29372,date: new Date("2018-09-06T19:23:02.129Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3850,str: "Cross-platform CSS Ball",num: 69055,date: new Date("2018-09-06T17:54:59.863Z"),array: [{_id: 3851,str: "Botswana Buckinghamshire withdrawal",num: 24070,date: new Date("2018-09-05T23:36:09.424Z"),array: [],obj: {}},3098,new Date("2018-09-06T09:38:49.932Z"),new Date("2018-09-06T09:28:43.218Z"),new Date("2018-09-05T22:34:31.296Z"),[],90350,"navigating e-commerce","Rustic",18711,"Handcrafted technologies"],obj: {_id: 3852,str: "Solomon Islands Dollar Rue",date: new Date("2018-09-06T06:52:59.066Z"),array: [76014,new Date("2018-09-06T13:48:36.868Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 3853,str: "portal Wooden Chicken",num: 93302,date: new Date("2018-09-06T11:44:27.151Z"),array: ["Fish",new Date("2018-09-06T11:32:11.490Z"),19075,"black Mobility National",new Date("2018-09-06T06:45:03.895Z"),[],"productize indexing",65111,"global pixel payment",{_id: 3854,str: "Developer",num: 39802,array: [],obj: {}},"Tasty Frozen Mouse Indonesia Gorgeous Wooden Ball",new Date("2018-09-06T17:42:01.974Z"),14324,{_id: 3855,str: "Innovative",num: 98799,date: new Date("2018-09-05T23:49:17.273Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 3856,str: "Research Faroe Islands Home Loan Account",num: 91108,date: new Date("2018-09-05T21:31:01.089Z"),array: [],obj: {_id: 3857,str: "e-commerce Sports",array: [new Date("2018-09-06T06:14:37.798Z"),"Customer USB Handcrafted","Borders",new Date("2018-09-06T07:29:37.080Z"),91195,"backing up Shoes quantifying",22582,{_id: 3858,str: "ivory mobile ADP",num: 5952,date: new Date("2018-09-06T09:46:01.262Z"),obj: {_id: 3859,str: "Outdoors brand",num: 69355,date: new Date("2018-09-06T08:49:44.871Z"),array: [],obj: {}}},{_id: 3860,num: 75804,date: new Date("2018-09-06T13:14:52.899Z"),array: []},29286,{_id: 3861,num: 93313,array: [[64448],"Bedfordshire Cambridgeshire"]},new Date("2018-09-06T13:57:35.590Z"),28869,new Date("2018-09-05T23:22:59.757Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3862,str: "orange",num: 88096,date: new Date("2018-09-06T07:13:06.684Z"),array: [6864,new Date("2018-09-06T08:01:10.298Z"),{_id: 3863,str: "Pa'anga Producer",num: 67214,obj: {_id: 3864,date: new Date("2018-09-06T10:21:30.853Z"),array: [],obj: {_id: 3865,num: 2830,array: ["Hat"],obj: {_id: 3866,str: "circuit",num: 73354,date: new Date("2018-09-06T00:56:32.135Z"),array: []}}}},"lavender Walk",[86992,new Date("2018-09-06T18:49:08.938Z")],68518,{_id: 3867,str: "Cheese",num: 11806,date: new Date("2018-09-06T07:49:58.227Z")},new Date("2018-09-06T15:27:19.881Z"),[],{_id: 3868,array: ["National","generate"],obj: {}},7011,new Date("2018-09-06T06:39:14.284Z")]});
    },

    function(coll) {
        return coll.insert({_id: 3869,str: "CSS indexing Fantastic",num: 55370,date: new Date("2018-09-05T21:57:04.284Z"),array: [],obj: {_id: 3870,str: "models Accounts",num: 9640,array: [{_id: 3871,num: 3980,date: new Date("2018-09-06T05:12:22.952Z"),array: [],obj: {}},["protocol",68185,"Borders"],new Date("2018-09-06T19:29:28.687Z"),new Date("2018-09-06T01:05:26.411Z"),new Date("2018-09-06T15:13:28.617Z"),new Date("2018-09-06T15:01:38.342Z"),"Incredible Fresh Gourde US Dollar","Lithuania","Legacy",5197,25444,{_id: 3872,str: "Profound",date: new Date("2018-09-05T23:58:12.282Z"),array: [],obj: {_id: 3873,str: "Small Rubber Keyboard Soap Assurance",num: 98816,array: [new Date("2018-09-06T15:29:35.860Z")],obj: {}}},66781]}});
    },

    function(coll) {
        return coll.insert({_id: 3874,str: "teal backing up",num: 24386,date: new Date("2018-09-06T18:24:29.858Z"),array: ["Engineer Planner hack",{_id: 3875,num: 32479,date: new Date("2018-09-06T14:52:03.625Z"),array: [99483,{_id: 3876,str: "mint green web services Architect",num: 62725,array: ["groupware"],obj: {_id: 3877,num: 89550,date: new Date("2018-09-05T21:58:19.715Z"),obj: {}}},new Date("2018-09-06T08:35:56.417Z"),"Up-sized"],obj: {}},new Date("2018-09-05T23:57:43.190Z"),[],60965,new Date("2018-09-06T12:22:30.178Z"),"alliance Corners",3151,44112,{_id: 3878,str: "virtual alliance Alaska",array: []},new Date("2018-09-06T12:31:44.883Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3879,str: "Forward Pizza",num: 40184,array: [],obj: {_id: 3880,str: "foreground GB",num: 9073,date: new Date("2018-09-05T22:55:39.691Z"),array: ["bypassing integrated compress",[],48471,{_id: 3881,str: "system synthesize auxiliary",num: 25712,date: new Date("2018-09-06T03:39:59.208Z"),array: [],obj: {_id: 3882,array: ["Tasty"],obj: {}}},new Date("2018-09-05T20:17:20.957Z"),new Date("2018-09-06T13:57:55.626Z"),new Date("2018-09-06T00:33:50.008Z"),"Bedfordshire local Berkshire",new Date("2018-09-05T21:28:56.114Z"),45020,new Date("2018-09-06T03:21:08.420Z"),58331,new Date("2018-09-06T06:20:51.748Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 3883,str: "Liaison connecting",num: 51955,date: new Date("2018-09-06T03:57:42.008Z"),array: ["Clothing",32690,{_id: 3884,num: 34192,date: new Date("2018-09-05T21:09:47.742Z"),array: []},new Date("2018-09-06T09:20:56.010Z"),new Date("2018-09-06T03:56:32.732Z"),59969,{_id: 3885,str: "tan Analyst",num: 81031,obj: {}},"calculating bluetooth",["hacking",new Date("2018-09-06T12:15:37.723Z")],new Date("2018-09-06T00:38:49.582Z"),[],24696]});
    },

    function(coll) {
        return coll.insert({_id: 3886,str: "out-of-the-box Generic Plastic Fish Music",date: new Date("2018-09-06T01:25:45.589Z"),array: [],obj: {_id: 3887,str: "Polarised",num: 54911,date: new Date("2018-09-06T15:47:27.882Z"),array: ["program digital cross-platform",new Date("2018-09-05T23:49:28.243Z"),35898,"USB",98215,76897,"Intranet",{_id: 3888,str: "deploy",num: 22782,date: new Date("2018-09-06T11:53:55.431Z"),array: [new Date("2018-09-06T19:20:41.283Z"),"Sleek Concrete Chicken",new Date("2018-09-05T21:06:58.873Z")],obj: {}},"strategic East Caribbean Dollar",[],[{_id: 3889,num: 19523,date: new Date("2018-09-05T23:09:24.862Z"),obj: {_id: 3890,num: 15487,date: new Date("2018-09-06T03:06:28.794Z")}},39069,new Date("2018-09-06T06:05:19.961Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 3891,str: "Legacy",num: 61686,date: new Date("2018-09-06T14:59:29.690Z"),array: [new Date("2018-09-05T20:12:11.803Z"),44820,98201,new Date("2018-09-06T06:02:50.942Z"),"Functionality",new Date("2018-09-06T15:00:14.631Z"),"Diverse","convergence Mouse",new Date("2018-09-06T05:06:54.690Z"),1668,["Home Loan Account"],{_id: 3892,str: "SMTP monetize SAS",num: 91259,date: new Date("2018-09-05T21:10:30.036Z"),obj: {_id: 3893,str: "Cotton",num: 15233,date: new Date("2018-09-06T11:34:42.774Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 3894,str: "Forward gold",num: 16058,array: [],obj: {_id: 3895,date: new Date("2018-09-06T08:10:50.824Z"),obj: {_id: 3896,str: "payment optimize disintermediate",num: 34494,date: new Date("2018-09-06T19:19:16.839Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3897,str: "sky blue Soft",num: 93471,date: new Date("2018-09-06T10:03:29.867Z"),array: ["generate payment",77575,new Date("2018-09-05T22:50:48.428Z"),[],{_id: 3898,str: "SCSI Ergonomic Steel Bike deposit",num: 69521,date: new Date("2018-09-06T19:35:54.215Z"),array: [29011,new Date("2018-09-06T08:47:09.071Z"),21736,31938],obj: {}},"Kids ROI",{_id: 3899,str: "deposit world-class",num: 32076,obj: {_id: 3900,num: 93752,date: new Date("2018-09-06T13:46:47.289Z"),array: [new Date("2018-09-06T07:23:10.030Z")]}},new Date("2018-09-06T16:47:56.784Z"),"metrics",{_id: 3901,num: 61733,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 3902,str: "Bolivar Fuerte",num: 49915,date: new Date("2018-09-06T12:39:51.225Z")});
    },

    function(coll) {
        return coll.insert({_id: 3903,str: "embrace",num: 19948,date: new Date("2018-09-05T22:19:18.420Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3904,str: "Pants orchestrate dynamic",num: 92,date: new Date("2018-09-06T10:40:44.468Z"),array: [],obj: {_id: 3905,str: "THX",num: 895,array: [66761,"database",46506,{_id: 3906,num: 14397,date: new Date("2018-09-06T10:57:02.793Z")},new Date("2018-09-06T03:44:34.482Z"),[],new Date("2018-09-06T19:36:53.119Z"),"violet","Re-engineered",new Date("2018-09-06T18:40:53.160Z"),56293],obj: {_id: 3907,str: "partnerships Toys functionalities",date: new Date("2018-09-06T17:24:15.656Z"),array: ["leverage Washington Specialist",{_id: 3908,num: 87743,date: new Date("2018-09-05T20:08:29.746Z"),array: [31296,87735],obj: {}},new Date("2018-09-06T13:05:38.588Z")],obj: {_id: 3909,str: "Business-focused toolset",obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 3910,str: "synergies South Carolina Functionality",num: 91957,date: new Date("2018-09-05T22:58:07.604Z"),obj: {_id: 3911,str: "Human",num: 23694,date: new Date("2018-09-06T01:20:32.186Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 3912,str: "matrix SCSI",num: 97826,date: new Date("2018-09-06T04:01:23.044Z"),array: ["Architect lime Samoa",new Date("2018-09-05T23:36:09.692Z"),[],30975,29962,new Date("2018-09-06T07:26:07.749Z"),81020,"Universal interface",{_id: 3913,str: "Facilitator",num: 91434,date: new Date("2018-09-06T17:06:54.002Z"),array: [[],{_id: 3914,str: "solid state",obj: {_id: 3915,str: "teal",array: ["Handmade Frozen Bacon","Credit Card Account Turks and Caicos Islands",new Date("2018-09-06T12:59:32.993Z"),new Date("2018-09-06T13:28:13.678Z"),"SSL",48925],obj: {}}}]},[new Date("2018-09-06T12:48:01.988Z")]],obj: {_id: 3916,str: "program deposit back-end",num: 78102,date: new Date("2018-09-06T04:49:36.141Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3917,str: "SQL Money Market Account convergence",num: 86433,date: new Date("2018-09-06T03:13:57.377Z"),array: ["back up","withdrawal",32560,new Date("2018-09-06T17:39:39.379Z"),[31479,[]],"Kids",new Date("2018-09-06T00:03:24.472Z"),{_id: 3918,str: "channels Industrial",num: 84550,date: new Date("2018-09-06T11:14:31.008Z"),obj: {}},91720,"parsing Overpass",new Date("2018-09-06T14:25:46.351Z"),{_id: 3919,date: new Date("2018-09-06T16:24:19.463Z"),array: [],obj: {}}],obj: {_id: 3920,str: "Buckinghamshire",date: new Date("2018-09-06T06:27:11.703Z"),array: [],obj: {_id: 3921,str: "auxiliary Intelligent Metal Chips time-frame",num: 61854}}});
    },

    function(coll) {
        return coll.insert({_id: 3922,str: "Expanded Fresh connecting",num: 45469,date: new Date("2018-09-06T04:26:56.015Z"),array: [15099,new Date("2018-09-06T11:01:44.796Z"),65784,new Date("2018-09-06T16:51:40.658Z"),[],new Date("2018-09-05T22:54:05.625Z"),"Advanced Multi-tiered",{_id: 3923,str: "Granite Stream",num: 18142,date: new Date("2018-09-06T03:42:00.936Z"),array: [88117]},[],new Date("2018-09-05T21:07:10.522Z"),"Security Granite deploy",4087,"Guadeloupe deposit"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3924,str: "array",num: 66012,date: new Date("2018-09-06T06:09:15.731Z"),array: [23358,new Date("2018-09-06T14:14:04.292Z"),"National",new Date("2018-09-06T19:24:35.087Z"),{_id: 3925,str: "Operations",num: 31226,date: new Date("2018-09-06T02:15:39.911Z"),array: [new Date("2018-09-06T03:11:28.240Z"),"override Unbranded Granite Ball Universal","Borders SMTP","Games Nigeria",23802,[new Date("2018-09-06T09:34:59.293Z")]],obj: {}},{_id: 3926,str: "SSL Generic Metal Towels",date: new Date("2018-09-06T10:19:46.086Z"),array: [],obj: {}},15627],obj: {_id: 3927,num: 60266,date: new Date("2018-09-06T01:41:13.010Z")}});
    },

    function(coll) {
        return coll.insert({_id: 3928,str: "1080p didactic",num: 43750,date: new Date("2018-09-06T18:08:49.380Z"),array: ["Vermont",new Date("2018-09-06T19:35:08.822Z"),"monitor Health Checking Account",{_id: 3929,str: "Sausages e-business",num: 1954,date: new Date("2018-09-06T01:54:42.417Z"),array: [],obj: {}},23726,"architectures Money Market Account strategize",new Date("2018-09-06T16:35:52.736Z"),new Date("2018-09-06T06:21:36.234Z"),43758,"SCSI Directives",new Date("2018-09-06T03:51:36.073Z"),"Falkland Islands (Malvinas) transition circuit",[]],obj: {_id: 3930,str: "capacitor Netherlands Antillian Guilder",num: 41938}});
    },

    function(coll) {
        return coll.insert({_id: 3931,str: "Italy",num: 15160,date: new Date("2018-09-05T20:53:11.878Z"),array: [],obj: {_id: 3932,str: "Practical Concrete Sausages JBOD utilize",num: 18455,date: new Date("2018-09-06T10:18:09.409Z"),array: [[20831],new Date("2018-09-06T14:57:19.493Z"),{_id: 3933,str: "optical Practical Granite Mouse Ferry",obj: {}},"Trinidad and Tobago Dollar Personal Loan Account Persistent",new Date("2018-09-05T20:32:32.501Z"),"enterprise Awesome",new Date("2018-09-06T10:28:28.353Z"),[],"Cambridgeshire Direct metrics",31054],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3934,str: "Creative core Beauty",num: 73265,date: new Date("2018-09-06T02:39:20.583Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3935,str: "New Zealand deposit Wyoming",num: 19074,date: new Date("2018-09-06T05:46:10.113Z"),array: [],obj: {_id: 3936,str: "Exclusive back-end Virginia",num: 80896,date: new Date("2018-09-05T20:58:29.803Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3937,str: "Product Namibia",num: 34394,date: new Date("2018-09-06T18:48:41.508Z"),array: ["integrated",98295,new Date("2018-09-06T13:43:31.577Z"),{_id: 3938,num: 50244,date: new Date("2018-09-06T09:46:24.425Z"),array: [],obj: {_id: 3939,num: 25826,array: [],obj: {}}},41099,new Date("2018-09-06T19:18:18.466Z"),97296,"bypassing","Netherlands",82269,{_id: 3940,str: "generating Awesome Generic",num: 21365,date: new Date("2018-09-06T08:24:39.169Z"),array: ["collaboration Berkshire"]}]});
    },

    function(coll) {
        return coll.insert({_id: 3941,str: "Louisiana",num: 56049,date: new Date("2018-09-06T11:02:41.082Z"),array: [48511,"bandwidth-monitored circuit","application",{_id: 3942,date: new Date("2018-09-06T03:35:34.596Z"),obj: {}},new Date("2018-09-06T15:35:10.060Z"),new Date("2018-09-06T06:17:05.196Z"),"Multi-layered program Electronics",15785,40134,[],{_id: 3943,str: "New Jersey",date: new Date("2018-09-06T13:22:31.368Z"),array: [new Date("2018-09-06T10:56:57.120Z"),{_id: 3944,str: "virtual mint green Riel",num: 65115,array: [[],new Date("2018-09-06T04:20:47.572Z"),[],53773],obj: {_id: 3945,array: []}}],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3946,str: "feed",num: 67138,date: new Date("2018-09-05T21:50:31.186Z"),array: [],obj: {_id: 3947,str: "Licensed Soft Salad Michigan salmon",num: 85581,date: new Date("2018-09-06T07:15:19.893Z"),array: ["Maryland Small online",61486,"Bedfordshire",new Date("2018-09-06T19:49:44.039Z"),new Date("2018-09-05T23:54:21.292Z"),14057,{_id: 3948,num: 2273,date: new Date("2018-09-06T13:45:32.034Z"),array: ["Architect knowledge user firewall",[]]},76740,"COM payment","eco-centric CSS",{_id: 3949,str: "bifurcated Implementation",date: new Date("2018-09-05T23:40:38.217Z"),array: [],obj: {}},new Date("2018-09-06T04:41:25.797Z")],obj: {_id: 3950,str: "Refined",num: 86596,obj: {_id: 3951,str: "regional Sleek Sleek",num: 88506,array: [{_id: 3952,str: "Solutions",num: 21864,date: new Date("2018-09-06T11:59:35.246Z")},new Date("2018-09-06T13:02:38.035Z")],obj: { _id: 3953 }}}}});
    },

    function(coll) {
        return coll.insert({_id: 3954,str: "withdrawal transmit transparent",num: 59560,date: new Date("2018-09-06T12:08:48.346Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3955,str: "Officer",num: 45696,date: new Date("2018-09-06T06:27:37.955Z"),array: [new Date("2018-09-06T07:00:32.283Z"),"Pants",13724,new Date("2018-09-06T07:50:09.243Z"),["Incredible","portals Infrastructure rich",91133,7741,86323],new Date("2018-09-06T05:43:35.902Z"),"Investment Account",[{_id: 3956,str: "Forward"},new Date("2018-09-06T07:47:04.297Z"),"middleware"],new Date("2018-09-06T08:52:57.638Z")]});
    },

    function(coll) {
        return coll.insert({_id: 3957,str: "haptic Planner",num: 71717,date: new Date("2018-09-06T01:38:57.054Z"),obj: {_id: 3958,str: "Fresh Steel",num: 35454,date: new Date("2018-09-06T18:55:19.206Z"),array: [new Date("2018-09-05T21:46:42.599Z"),62539,new Date("2018-09-05T23:55:49.984Z"),new Date("2018-09-06T14:56:39.516Z"),40958,77288,[],11675,"Nakfa",new Date("2018-09-06T02:25:32.973Z"),"Applications"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3959,str: "Avon",num: 57563,date: new Date("2018-09-06T19:43:55.886Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3960,str: "Wallis and Futuna parsing olive",num: 67499,date: new Date("2018-09-06T11:26:58.371Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3961,str: "COM",num: 60929,date: new Date("2018-09-05T21:16:39.907Z"),array: [],obj: {_id: 3962,str: "Directives Awesome Principal",date: new Date("2018-09-06T07:52:03.636Z"),array: [15536,41773,"Home",new Date("2018-09-06T17:53:57.642Z"),{_id: 3963,str: "JBOD solutions",num: 20612,date: new Date("2018-09-06T15:42:17.054Z"),array: [new Date("2018-09-06T12:00:29.379Z"),"Tasty",4509,"Licensed Granite Fish",7554,new Date("2018-09-06T06:44:17.304Z")],obj: {_id: 3964,num: 91556,date: new Date("2018-09-06T13:04:25.188Z"),array: [[],[new Date("2018-09-06T08:41:02.713Z"),[],"intranet"],new Date("2018-09-06T03:15:47.134Z"),{_id: 3965,str: "leverage Nakfa Paradigm",num: 31575,obj: {}}]}},new Date("2018-09-06T03:02:23.396Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3966,str: "model",num: 8544,date: new Date("2018-09-06T15:05:05.482Z"),obj: {_id: 3967,str: "UAE Dirham mission-critical",date: new Date("2018-09-06T15:47:48.956Z"),array: ["Indiana Frozen",94815,43357,new Date("2018-09-06T08:05:26.013Z"),"mobile",new Date("2018-09-06T06:39:14.537Z"),{_id: 3968,num: 836,date: new Date("2018-09-06T06:13:48.595Z"),array: [],obj: {}},new Date("2018-09-05T21:50:08.755Z"),"Tuna",88442,[],48311]}});
    },

    function(coll) {
        return coll.insert({_id: 3969,str: "Sudan",num: 15751,date: new Date("2018-09-06T04:04:08.694Z"),array: [74076,new Date("2018-09-06T01:44:50.450Z"),new Date("2018-09-06T14:33:52.804Z"),new Date("2018-09-06T05:03:25.437Z"),"Re-contextualized driver",{_id: 3970,str: "Kenya West Virginia Games",array: [],obj: {_id: 3971,str: "content Park transmit",num: 70446,date: new Date("2018-09-06T19:10:27.484Z"),array: [76906]}},12886,[],"Russian Federation Ergonomic","HDD Digitized Costa Rican Colon","connecting schemas",[new Date("2018-09-06T16:29:26.141Z"),{_id: 3972,num: 264,date: new Date("2018-09-05T20:01:48.067Z"),obj: {}},[]]]});
    },

    function(coll) {
        return coll.insert({_id: 3973,str: "Costa Rican Colon infrastructures Integrated",num: 77475,date: new Date("2018-09-06T12:14:53.799Z"),array: [],obj: {_id: 3974,str: "payment",num: 34503,array: ["Iraqi Dinar Cotton Agent",new Date("2018-09-06T03:14:47.317Z"),39180,new Date("2018-09-05T20:12:54.200Z"),"zero tolerance Michigan",{_id: 3975,str: "Incredible web-readiness Marketing",num: 96224,date: new Date("2018-09-06T07:37:28.209Z"),array: [{_id: 3976,num: 89946,date: new Date("2018-09-05T23:22:22.235Z"),array: [],obj: {_id: 3977,array: [],obj: {_id: 3978,num: 46265,date: new Date("2018-09-06T01:25:43.564Z"),obj: {}}}}]},"Investment Account Senior Concrete",[new Date("2018-09-05T23:13:49.308Z"),17665,46402],35046,[],new Date("2018-09-06T15:40:26.221Z"),"Drive",{_id: 3979,str: "quantify",num: 41364,date: new Date("2018-09-06T05:07:15.751Z"),array: ["reinvent Hollow capacity",{_id: 3980,str: "Samoa",obj: {}}]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 3981,date: new Date("2018-09-06T15:11:18.128Z"),array: [{_id: 3982,str: "Sleek Frozen Car Glen Berkshire",num: 44636,date: new Date("2018-09-06T00:26:42.824Z"),array: [],obj: {_id: 3983,num: 18797,date: new Date("2018-09-06T02:39:27.084Z"),array: [],obj: {}}},"invoice compress analyzer",54920,15914,new Date("2018-09-06T03:48:51.515Z"),"structure bypassing",15447,"Small Plastic magnetic",new Date("2018-09-06T05:27:41.219Z"),{_id: 3984,str: "Borders",num: 27639,obj: {_id: 3985,str: "Rupiah Devolved Usability",num: 77953,date: new Date("2018-09-05T21:24:50.826Z"),obj: {}}},new Date("2018-09-06T16:50:52.928Z"),"deposit Bedfordshire",26639]});
    },

    function(coll) {
        return coll.insert({_id: 3986,str: "Malaysia",num: 31753,date: new Date("2018-09-06T18:03:30.940Z"),array: [],obj: {_id: 3987,str: "Assurance mobile",num: 16606,date: new Date("2018-09-06T15:30:50.912Z"),obj: {_id: 3988,str: "Plastic Incredible",num: 34545,date: new Date("2018-09-06T15:58:22.241Z"),array: [65827,"Cheese",new Date("2018-09-06T16:55:55.840Z"),17512,70782,"olive","Configuration Rustic","Money Market Account Money Market Account",[new Date("2018-09-06T07:43:28.906Z"),new Date("2018-09-06T04:58:50.579Z")],{_id: 3989,str: "Credit Card Account Trail Cape Verde Escudo",num: 99963,date: new Date("2018-09-05T23:24:56.848Z"),array: [],obj: {_id: 3990,str: "Wisconsin",date: new Date("2018-09-06T05:04:44.831Z")}},"reintermediate Monaco",44305],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 3991,str: "Infrastructure",num: 17233,date: new Date("2018-09-06T11:02:25.713Z"),array: [],obj: {_id: 3992,str: "Arkansas Liaison",num: 50630,date: new Date("2018-09-06T11:47:06.548Z"),array: [new Date("2018-09-06T02:56:30.385Z"),new Date("2018-09-05T22:48:24.941Z"),4915,69618,"Multi-lateral","Small Steel Shirt vertical",59953,new Date("2018-09-06T06:14:58.877Z"),new Date("2018-09-06T02:50:41.247Z"),{_id: 3993,date: new Date("2018-09-06T15:27:16.719Z"),array: [],obj: {}},{_id: 3994,str: "compressing",num: 97790,obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 3995,str: "Pizza transitional Soft",num: 24018,date: new Date("2018-09-05T21:35:43.810Z"),array: [[],"withdrawal",63051,new Date("2018-09-05T23:11:35.350Z"),"Fork Home Loan Account Wooden",new Date("2018-09-06T17:43:22.885Z"),63504,new Date("2018-09-05T21:30:10.905Z"),73253]});
    },

    function(coll) {
        return coll.insert({_id: 3996,str: "SCSI uniform",num: 44022,date: new Date("2018-09-05T23:27:45.571Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 3997,str: "Incredible Fresh Chair synthesizing systemic",num: 97925,date: new Date("2018-09-06T07:41:24.347Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 3998,str: "Belize Dollar Nevada Direct",date: new Date("2018-09-05T20:24:41.269Z"),array: [],obj: {_id: 3999,str: "hard drive",num: 73930,date: new Date("2018-09-06T01:01:07.766Z"),array: [],obj: {_id: 4000,str: "salmon Investment Account",num: 5920,date: new Date("2018-09-06T14:03:58.572Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4001,str: "Uganda",num: 12615,date: new Date("2018-09-06T08:37:13.841Z"),array: ["Intelligent Granite Bacon","Generic invoice convergence",73919,new Date("2018-09-06T03:05:57.765Z"),68530,new Date("2018-09-06T08:12:24.795Z"),"Web",56318,88258,new Date("2018-09-06T10:32:57.142Z"),[{_id: 4002,str: "Officer standardization gold",num: 42387,date: new Date("2018-09-06T19:45:02.979Z"),array: [],obj: {}}]],obj: {_id: 4003,num: 17245,date: new Date("2018-09-05T21:26:47.665Z"),array: [],obj: {_id: 4004,str: "Qatari Rial redefine",num: 11127,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4005,str: "embrace transmitting Administrator",num: 89200,date: new Date("2018-09-06T16:28:49.502Z"),array: [],obj: {_id: 4006,str: "streamline Forward",num: 96633,date: new Date("2018-09-05T20:40:49.079Z"),array: [{_id: 4007,str: "Global",num: 57916,date: new Date("2018-09-06T02:19:04.014Z"),array: [60092],obj: {}},new Date("2018-09-06T11:59:40.512Z"),["Soft Shirt",new Date("2018-09-06T09:04:08.389Z"),76293,new Date("2018-09-05T23:48:16.489Z")],90483,"Alabama Sleek grow",new Date("2018-09-06T12:15:04.047Z"),"Fantastic Fantastic",{_id: 4008,num: 7318,array: [],obj: {}},new Date("2018-09-05T23:09:05.330Z"),97929,{_id: 4009,str: "fuchsia override Ball",num: 93780,date: new Date("2018-09-06T14:08:04.696Z")},[],85259]}});
    },

    function(coll) {
        return coll.insert({_id: 4010,str: "artificial intelligence Auto Loan Account",date: new Date("2018-09-06T18:54:02.990Z"),array: [31345,new Date("2018-09-06T05:40:40.519Z"),new Date("2018-09-06T00:26:39.591Z"),59613,"Cambridgeshire",[],[],"gold",{_id: 4011,str: "Rapids",num: 49306,array: ["Chief"],obj: {}},{_id: 4012,str: "TCP Granite",num: 18101,date: new Date("2018-09-05T21:11:39.359Z"),array: [],obj: {_id: 4013,str: "Automotive",date: new Date("2018-09-06T06:01:34.190Z"),array: [new Date("2018-09-06T12:27:04.398Z")],obj: {}}},"Visionary HTTP deposit",33307,[]]});
    },

    function(coll) {
        return coll.insert({_id: 4014,str: "Tennessee logistical",num: 262,date: new Date("2018-09-06T16:45:55.561Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4015,str: "Kentucky compress Kyrgyz Republic",num: 63092,array: [],obj: {_id: 4016,str: "Pennsylvania payment TCP",date: new Date("2018-09-06T13:59:46.091Z"),array: [],obj: {_id: 4017,num: 99811,date: new Date("2018-09-05T22:26:45.796Z"),array: [{_id: 4018,str: "Soft",num: 18567,date: new Date("2018-09-06T18:47:06.395Z"),array: [84339,new Date("2018-09-06T14:56:24.886Z"),"programming Mouse array","microchip",new Date("2018-09-06T05:58:42.046Z")]},{_id: 4019,num: 29186,date: new Date("2018-09-05T23:34:15.058Z")},"actuating Profound",66592,[],new Date("2018-09-06T01:22:10.534Z"),84720,"Concrete Car Wooden",new Date("2018-09-06T00:52:27.882Z")],obj: {_id: 4020,str: "solid state Senior haptic",date: new Date("2018-09-06T12:06:16.800Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 4021,str: "withdrawal Norwegian Krone Tasty Cotton Hat",num: 20717,date: new Date("2018-09-06T13:14:39.462Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4022,str: "cyan Consultant Rubber",num: 47776,date: new Date("2018-09-06T19:00:08.913Z"),array: ["Polarised deposit",[],60489,new Date("2018-09-06T19:42:41.660Z"),38270,new Date("2018-09-05T20:00:00.252Z"),"Missouri overriding deposit",75860,"Anguilla e-tailers",{_id: 4023,str: "intangible",num: 78828,date: new Date("2018-09-06T07:22:38.116Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 4024,str: "Tools Drive",num: 78981,array: [30624,{_id: 4025,str: "cross-media",num: 9535,date: new Date("2018-09-06T17:57:29.789Z"),array: [],obj: {}},"Kentucky JBOD",53907,new Date("2018-09-06T17:14:33.081Z"),"Burkina Faso",[new Date("2018-09-06T03:06:12.740Z"),new Date("2018-09-06T01:00:55.594Z"),"violet program wireless",{_id: 4026,str: "Customer",date: new Date("2018-09-06T05:06:20.201Z"),obj: {_id: 4027,str: "Tasty SCSI",num: 78068,date: new Date("2018-09-06T03:06:01.807Z"),obj: {_id: 4028,num: 85026,date: new Date("2018-09-06T13:04:52.645Z"),array: [],obj: {}}}},53116],new Date("2018-09-06T14:55:15.868Z"),[["JSON transmitter",[]]],new Date("2018-09-05T22:54:53.087Z"),new Date("2018-09-06T01:25:32.023Z")],obj: {_id: 4029,str: "drive Grocery",num: 37895,date: new Date("2018-09-05T23:20:58.321Z"),array: [{_id: 4030,str: "Alaska override Data"},{_id: 4031,array: []}],obj: {_id: 4032,date: new Date("2018-09-06T08:52:07.519Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4033,str: "Intelligent Steel Sausages",num: 14424,date: new Date("2018-09-06T10:33:35.243Z"),array: [74472,"mission-critical","budgetary management gold",91354,[],"Car models Benin",new Date("2018-09-06T06:37:27.420Z"),new Date("2018-09-05T23:48:52.620Z"),new Date("2018-09-06T16:27:18.902Z"),"Intelligent visionary",{_id: 4034,str: "Generic primary",num: 22706,array: [{_id: 4035,str: "incubate program",date: new Date("2018-09-06T18:36:01.472Z"),array: [[],new Date("2018-09-06T11:12:13.762Z"),"Toys"],obj: {_id: 4036,str: "De-engineered",num: 36887,date: new Date("2018-09-06T01:40:40.946Z"),array: [44993,new Date("2018-09-06T08:08:50.042Z")],obj: {}}},[]],obj: {_id: 4037,num: 30609,date: new Date("2018-09-06T07:02:28.079Z"),obj: {}}},2931,{ _id: 4038 }]});
    },

    function(coll) {
        return coll.insert({_id: 4039,str: "Niger Corporate",date: new Date("2018-09-06T10:19:34.667Z"),array: ["Buckinghamshire Licensed Soft Sausages deploy",new Date("2018-09-06T04:52:05.900Z"),17477,new Date("2018-09-06T09:48:26.234Z"),62270,"partnerships backing up Berkshire",31857,"navigating Kids Licensed Rubber Chips",{_id: 4040,str: "Incredible Metal Tuna back-end User-friendly",num: 81721,date: new Date("2018-09-05T22:27:25.977Z"),array: [[],47024,{_id: 4041,str: "Frozen Vanuatu backing up",num: 3113,date: new Date("2018-09-06T07:37:39.247Z"),array: [],obj: {}},"Checking Account"]},new Date("2018-09-06T03:23:54.400Z"),"withdrawal"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4042,str: "Research proactive quantifying",num: 26587,date: new Date("2018-09-06T04:53:45.255Z"),array: [35097,"Turnpike back up Awesome Fresh Tuna",{_id: 4043,str: "payment Concrete Automotive",num: 29220,date: new Date("2018-09-06T16:30:37.191Z"),array: [],obj: {_id: 4044,str: "forecast azure users",num: 8382,date: new Date("2018-09-06T14:29:59.228Z"),array: [new Date("2018-09-06T17:42:02.412Z")],obj: {_id: 4045,str: "Borders",date: new Date("2018-09-06T03:13:17.340Z"),array: []}}},3896,88711,73081,"Cape",10022,new Date("2018-09-06T07:47:05.704Z"),[new Date("2018-09-06T05:22:50.328Z"),{_id: 4046,str: "Soft Savings Account Guyana",num: 30036,array: [],obj: {}}],new Date("2018-09-06T15:29:05.930Z"),"Connecticut","deposit"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4047,str: "SDR Sports",num: 8542,date: new Date("2018-09-05T23:58:08.762Z"),array: ["Practical Concrete Ball",{_id: 4048,str: "Iowa",date: new Date("2018-09-05T20:21:04.290Z"),array: [],obj: {_id: 4049,str: "cross-platform seamless",num: 69977,date: new Date("2018-09-05T21:18:17.368Z")}},17390,new Date("2018-09-06T17:31:07.893Z"),75658,49714,{_id: 4050,str: "Ergonomic Steel Tuna",num: 84218,obj: {}},{_id: 4051,num: 62457,date: new Date("2018-09-05T23:52:54.601Z"),obj: {}},"Concrete upward-trending Djibouti Franc",57371,"synthesizing Credit Card Account"]});
    },

    function(coll) {
        return coll.insert({_id: 4052,str: "Moldova leverage",num: 92141,date: new Date("2018-09-06T00:12:25.997Z"),array: [],obj: {_id: 4053,str: "Burkina Faso Identity",num: 28733,date: new Date("2018-09-06T18:09:04.459Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4054,num: 79460,date: new Date("2018-09-06T16:47:38.796Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4055,str: "Markets redundant",num: 48037,date: new Date("2018-09-06T16:23:41.192Z"),array: [34494,new Date("2018-09-06T11:55:16.373Z"),"Liaison Refined Steel Shirt Vision-oriented",18794,"empower",new Date("2018-09-06T06:37:39.563Z"),[],{_id: 4056,str: "Cloned",num: 7985,date: new Date("2018-09-05T23:31:51.374Z"),array: [new Date("2018-09-06T12:49:17.988Z")],obj: {}},63746,[],new Date("2018-09-06T17:53:20.860Z"),new Date("2018-09-06T03:24:35.035Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4057,str: "Lead",num: 1082,date: new Date("2018-09-06T17:44:02.267Z"),array: [[],28032,80253,new Date("2018-09-05T20:46:20.210Z"),36813,"Balanced Road","Mouse",{_id: 4058,str: "Practical Health",num: 65085,date: new Date("2018-09-06T14:43:57.226Z"),array: [],obj: {_id: 4059,str: "Awesome Rubber Salad Human directional",num: 33325,date: new Date("2018-09-06T00:31:08.214Z"),obj: {}}},"Mississippi",new Date("2018-09-06T09:12:30.639Z")],obj: {_id: 4060,str: "Cambridgeshire",date: new Date("2018-09-06T13:03:24.880Z"),array: [],obj: {_id: 4061,array: [{_id: 4062,num: 43976,array: [95800,36816]},"Fresh Dynamic",new Date("2018-09-06T05:04:02.102Z"),[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 4063,str: "Hat",num: 87744,date: new Date("2018-09-06T17:30:00.850Z"),array: [[],new Date("2018-09-06T12:08:44.002Z"),13668,"online Avon Consultant","Frozen","static Tasty Concrete Ball",{_id: 4064,str: "overriding Shoes",num: 36702,date: new Date("2018-09-05T22:09:08.521Z"),array: [10763,new Date("2018-09-06T09:42:21.020Z")],obj: {}},86047,2061,"sexy Ukraine Nevada",new Date("2018-09-06T08:36:44.946Z"),{_id: 4065,num: 47675,date: new Date("2018-09-06T01:49:32.127Z"),array: [],obj: {_id: 4066,num: 75929,array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4067,str: "Personal Loan Account Assurance Intranet",num: 4977,date: new Date("2018-09-06T12:28:21.839Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4068,str: "Proactive",num: 3552,date: new Date("2018-09-06T08:05:29.373Z"),array: [new Date("2018-09-06T09:35:39.834Z"),new Date("2018-09-05T22:51:21.873Z"),38027,"payment",56027,"Sports Re-engineered deposit","invoice streamline hacking",31753,new Date("2018-09-06T10:12:10.308Z"),"holistic Mayotte","online Philippines",64707,[]]});
    },

    function(coll) {
        return coll.insert({_id: 4069,num: 86361,date: new Date("2018-09-06T06:53:02.069Z"),array: ["deposit Investor",new Date("2018-09-06T14:16:25.245Z"),19239,new Date("2018-09-05T21:52:09.292Z"),{_id: 4070,str: "red Facilitator 6th generation",date: new Date("2018-09-06T03:55:40.353Z"),obj: {_id: 4071,str: "Lebanon Wyoming",num: 6700,date: new Date("2018-09-06T04:20:07.561Z"),array: ["initiatives Crest",{_id: 4072,str: "Computer Cotton",array: [],obj: {}},509],obj: {}}},[],"Global",[],"proactive",56493,new Date("2018-09-06T03:51:47.901Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4073,str: "Clothing Home Loan Account",num: 92318,date: new Date("2018-09-06T19:30:49.224Z"),array: [],obj: {_id: 4074,num: 5688,date: new Date("2018-09-06T13:58:54.666Z"),array: [19555,[],new Date("2018-09-06T16:44:28.963Z"),10026,"groupware",new Date("2018-09-06T03:22:15.059Z"),[],new Date("2018-09-06T06:41:53.226Z"),"Mississippi",{_id: 4075,date: new Date("2018-09-05T21:43:12.745Z"),obj: {}},[90746,new Date("2018-09-06T14:12:51.133Z"),92909,"Kansas Arizona"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4076,str: "models hack",num: 29948,date: new Date("2018-09-06T15:08:10.735Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4077,str: "Integration capability",num: 29935,date: new Date("2018-09-06T08:52:30.769Z"),array: [],obj: {_id: 4078,num: 64632,array: [],obj: {_id: 4079,str: "virtual Administrator Isle of Man",num: 53902,date: new Date("2018-09-06T11:18:03.261Z"),array: [new Date("2018-09-06T10:50:29.226Z"),5893,"Refined SCSI Common",[],"Turkish Lira Cameroon Dynamic",98624,new Date("2018-09-06T18:11:47.375Z"),"whiteboard Electronics Director"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4080,str: "Manager",num: 81000,date: new Date("2018-09-06T01:46:42.803Z"),array: [83652,{_id: 4081,str: "Ball Computers",num: 49412,array: [],obj: {}},new Date("2018-09-06T01:11:49.221Z"),82523,62638,new Date("2018-09-06T05:09:06.543Z"),"bluetooth Land",new Date("2018-09-06T07:13:55.800Z"),["hack USB International",67726,82314,new Date("2018-09-06T11:19:29.992Z")],[],{_id: 4082,str: "Analyst Universal",num: 48361,date: new Date("2018-09-06T00:06:48.975Z"),obj: {}},"application deposit disintermediate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4083,str: "Borders Bahamas",num: 32811,date: new Date("2018-09-06T15:34:12.807Z"),array: [39287,"maroon",58402,new Date("2018-09-06T13:24:54.914Z"),new Date("2018-09-06T18:12:44.264Z"),"Avon",new Date("2018-09-05T22:47:59.929Z"),{_id: 4084,str: "bypassing",num: 95421,date: new Date("2018-09-06T01:01:30.831Z"),array: [],obj: {_id: 4085,str: "relationships",num: 84274,date: new Date("2018-09-06T05:54:39.549Z"),obj: {_id: 4086,str: "Movies Plastic",num: 13124,obj: {_id: 4087,str: "Cotton Vermont",array: []}}}},12094,[],"Keyboard Personal Loan Account background",new Date("2018-09-06T05:22:15.275Z"),[84030]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4088,str: "niches",num: 84486,array: ["Incredible",87026,{_id: 4089,num: 44292,date: new Date("2018-09-06T08:41:28.868Z"),array: [new Date("2018-09-06T13:59:18.027Z"),[]],obj: {_id: 4090,str: "Rustic Cotton Tuna Tactics",num: 2409,date: new Date("2018-09-06T06:36:06.952Z"),obj: {_id: 4091,str: "Directives",date: new Date("2018-09-06T05:24:54.304Z"),array: [],obj: {}}}},{_id: 4092,date: new Date("2018-09-06T14:19:53.210Z"),obj: {}},"Research",new Date("2018-09-06T09:40:09.091Z"),12089,[],"HDD cross-platform",90464,new Date("2018-09-06T02:54:29.800Z"),"bandwidth US Dollar index",{_id: 4093,str: "Cloned Unbranded withdrawal",date: new Date("2018-09-05T23:55:57.755Z"),array: [new Date("2018-09-06T13:49:06.875Z")]},44944,[]],obj: {_id: 4094,str: "Pataca",num: 73652,array: [76964]}});
    },

    function(coll) {
        return coll.insert({_id: 4095,str: "RSS Comoro Franc Checking Account",num: 60801,date: new Date("2018-09-06T02:03:20.995Z"),array: [[new Date("2018-09-05T22:38:08.745Z")],"frictionless",new Date("2018-09-05T23:21:11.060Z"),87869,[],25141,new Date("2018-09-05T21:20:03.384Z"),35809,{_id: 4096,str: "channels migration olive",num: 82841,date: new Date("2018-09-06T07:56:13.012Z"),array: [],obj: {_id: 4097,str: "Liaison Rustic Metal Shoes Stream",num: 15644,date: new Date("2018-09-06T04:32:36.143Z"),array: ["Synchronised Director Iowa",new Date("2018-09-05T20:26:46.386Z"),"Grass-roots"],obj: {_id: 4098,str: "Persistent compress panel",array: [],obj: {_id: 4099,str: "Sleek Plastic Chicken virtual",num: 61686,date: new Date("2018-09-06T10:47:09.701Z")}}}},"primary Pants",{_id: 4100,num: 33987,array: [],obj: {}},new Date("2018-09-06T15:31:42.490Z"),25464]});
    },

    function(coll) {
        return coll.insert({_id: 4101,str: "Fantastic Metal Chips Rubber",num: 91268,date: new Date("2018-09-06T07:48:10.812Z"),array: [],obj: {_id: 4102,num: 51089,date: new Date("2018-09-05T22:32:43.801Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4103,str: "port facilitate models",date: new Date("2018-09-06T05:43:05.730Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4104,str: "Avon withdrawal",num: 10921,date: new Date("2018-09-06T08:17:18.313Z"),array: ["end-to-end",new Date("2018-09-06T15:07:54.804Z"),[new Date("2018-09-05T23:36:53.680Z")],new Date("2018-09-06T05:13:50.607Z"),56605,"pink Squares monitor",{_id: 4105,str: "transmitter",num: 79818,date: new Date("2018-09-06T04:00:32.497Z"),array: [],obj: {_id: 4106,array: [],obj: {_id: 4107,str: "Liaison",date: new Date("2018-09-06T15:04:21.445Z"),array: [],obj: {_id: 4108,num: 71019,date: new Date("2018-09-06T16:03:49.562Z")}}}},"Personal Loan Account solid state Towels","Wooden Hat Vista",94641,"Reactive copying Functionality",new Date("2018-09-06T13:23:53.448Z"),{_id: 4109,num: 79571,date: new Date("2018-09-06T02:56:55.806Z"),array: [99955],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4110,str: "View Manager",date: new Date("2018-09-06T05:20:52.856Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4111,str: "deposit Dynamic object-oriented",num: 75597,array: [],obj: {_id: 4112,num: 74662,date: new Date("2018-09-06T00:37:53.878Z"),array: [new Date("2018-09-06T08:58:59.379Z"),["Sharable",new Date("2018-09-06T01:48:14.076Z"),new Date("2018-09-06T05:43:23.588Z")],"override Philippines 24 hour",38105,{_id: 4113,str: "back-end Soft implementation",num: 78707,date: new Date("2018-09-06T15:59:53.172Z"),array: [],obj: {}},"Frozen",12985,new Date("2018-09-06T00:55:56.038Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4114,str: "web services",num: 70319,date: new Date("2018-09-06T08:58:13.292Z"),array: [new Date("2018-09-06T06:18:19.479Z"),"Usability initiatives Bacon",66896,new Date("2018-09-06T04:06:08.906Z"),"bypass",19804,new Date("2018-09-06T02:59:24.813Z"),29122,"Shirt Executive","extensible XSS lavender"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4115,str: "Borders",num: 27633,date: new Date("2018-09-06T03:23:31.109Z"),array: [],obj: {_id: 4116,str: "Internal adapter",obj: {_id: 4117,num: 47618,date: new Date("2018-09-06T04:03:47.902Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 4118,str: "Executive",num: 45762,date: new Date("2018-09-06T14:55:39.181Z"),array: [15933,"Table Alabama Awesome",{_id: 4119,str: "grey Ohio",num: 78293,date: new Date("2018-09-05T22:33:33.626Z"),array: [],obj: {}},47048,new Date("2018-09-06T04:29:39.031Z"),new Date("2018-09-05T23:01:59.807Z"),59670,"systems",["Specialist integrate Frozen",new Date("2018-09-06T01:09:47.149Z"),60233,new Date("2018-09-06T13:50:05.809Z")],"Music Creative Grocery"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4120,str: "Public-key Algeria",num: 43643,date: new Date("2018-09-05T22:45:30.627Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4121,str: "Nebraska",num: 2656,date: new Date("2018-09-06T00:21:22.658Z"),array: [44940,new Date("2018-09-06T10:22:39.998Z"),new Date("2018-09-05T23:21:01.014Z"),42422,14012,"Pants","Unbranded viral","Inverse","Handmade",20103,new Date("2018-09-06T14:19:34.426Z")],obj: {_id: 4122,str: "Ball service-desk",num: 76495,date: new Date("2018-09-06T12:49:11.245Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4123,str: "cutting-edge",num: 97199,date: new Date("2018-09-06T01:59:31.603Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4124,str: "panel didactic Mountains",num: 96659,date: new Date("2018-09-06T02:10:45.127Z"),array: ["Avon global",new Date("2018-09-06T03:50:43.227Z"),new Date("2018-09-06T16:27:26.088Z"),44940,11379,new Date("2018-09-05T23:18:07.339Z"),6056,{_id: 4125,str: "Springs",num: 50030,date: new Date("2018-09-06T07:40:38.075Z"),array: [],obj: {_id: 4126,str: "EXE",num: 64806,date: new Date("2018-09-06T09:59:08.601Z"),array: [],obj: {}}},"incremental Guarani",{_id: 4127,str: "backing up CSS",date: new Date("2018-09-06T13:14:42.951Z"),array: []}],obj: {_id: 4128,num: 63964,date: new Date("2018-09-06T02:39:26.402Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4129,str: "Mandatory",num: 57881,date: new Date("2018-09-06T15:59:16.467Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4130,str: "bypassing gold",num: 70996,date: new Date("2018-09-06T00:33:40.215Z"),array: ["Cambridgeshire invoice redundant",32087,"azure",[],"Cotton",new Date("2018-09-05T20:20:06.855Z"),"Product",new Date("2018-09-06T19:21:31.221Z"),new Date("2018-09-06T09:49:32.755Z"),[68586,new Date("2018-09-06T15:01:56.288Z"),14069,63148,"core Grocery invoice",{_id: 4131,str: "Sleek Fresh Towels",num: 7287,array: [],obj: {_id: 4132,str: "transform Senior",num: 30147,date: new Date("2018-09-06T01:32:21.194Z")}},{_id: 4133,num: 43188,date: new Date("2018-09-06T17:54:18.943Z"),array: [{_id: 4134,str: "neutral Strategist Computer",num: 30101,array: [],obj: {}}],obj: {_id: 4135,num: 75200,date: new Date("2018-09-06T11:35:45.834Z"),array: []}}]]});
    },

    function(coll) {
        return coll.insert({_id: 4136,str: "heuristic CSS Dynamic",num: 93850,date: new Date("2018-09-06T18:05:10.566Z"),array: [new Date("2018-09-06T14:21:55.934Z"),new Date("2018-09-06T01:49:44.612Z"),"Credit Card Account lavender SMTP","Fantastic Fresh Soap Bike",80087,new Date("2018-09-06T16:05:30.257Z"),"Grove Gorgeous approach",[98650],88014,"4th generation",[]],obj: {_id: 4137,str: "Streamlined Specialist enterprise",num: 21166,date: new Date("2018-09-05T22:35:26.525Z"),array: [new Date("2018-09-06T17:07:55.005Z"),[],"AGP Division invoice"]}});
    },

    function(coll) {
        return coll.insert({_id: 4138,date: new Date("2018-09-06T10:03:58.816Z"),array: [],obj: {_id: 4139,str: "Administrator reboot",num: 93028,date: new Date("2018-09-06T11:28:02.267Z"),obj: {_id: 4140,str: "Electronics Upgradable",num: 58006,date: new Date("2018-09-05T20:05:10.182Z"),array: [22905,"Home Loan Account",new Date("2018-09-05T23:59:37.405Z"),[],"Cotton Orchestrator Oregon","strategy invoice ubiquitous",35164,16736,"Surinam Dollar","Crossroad",new Date("2018-09-06T06:27:04.094Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 4141,str: "Senegal viral",num: 32364,date: new Date("2018-09-05T19:58:18.556Z"),array: [60222,[74420,"programming"],"Automotive Consultant",new Date("2018-09-06T05:04:04.837Z"),new Date("2018-09-06T02:00:19.714Z"),58512,[],{_id: 4142,array: [],obj: {}},"Computers IB",new Date("2018-09-06T00:17:56.882Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4143,str: "port Realigned Drives",num: 75416,date: new Date("2018-09-06T06:34:44.119Z"),array: ["Global Kids Forward",new Date("2018-09-06T09:42:30.017Z"),new Date("2018-09-05T23:45:16.340Z"),{_id: 4144,str: "fuchsia AI Garden",num: 56466,date: new Date("2018-09-06T05:29:32.541Z"),array: [46132,34959,"Mauritius Rupee Organic","calculate Cocos (Keeling) Islands transmit",[],new Date("2018-09-06T01:55:59.849Z")],obj: {}},52317,new Date("2018-09-06T14:24:21.702Z"),{_id: 4145,str: "Lodge Berkshire",num: 94619,date: new Date("2018-09-06T15:38:51.535Z"),array: [],obj: {_id: 4146,str: "Gorgeous",array: [80319,{_id: 4147,obj: {}}],obj: {}}},"Fish"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4148,num: 28475,date: new Date("2018-09-06T02:58:30.961Z"),array: ["quantifying Mobility Factors",{_id: 4149,str: "Avon proactive online",num: 35341,date: new Date("2018-09-05T21:20:21.321Z"),array: [],obj: {}},new Date("2018-09-06T02:58:36.015Z"),new Date("2018-09-06T09:16:52.250Z"),"Licensed Rubber Ball transmit",[],{_id: 4150,array: [24445]},19521,17377],obj: {_id: 4151,str: "Gorgeous Bedfordshire incubate",num: 52876,date: new Date("2018-09-05T20:53:01.562Z")}});
    },

    function(coll) {
        return coll.insert({_id: 4152,str: "azure synergy",num: 79706,date: new Date("2018-09-05T23:33:49.879Z"),array: [],obj: {_id: 4153,str: "Organic",num: 22401,array: ["Borders optimize",{_id: 4154,str: "contextually-based Cheese Chips",num: 42323,date: new Date("2018-09-06T04:21:36.505Z"),array: [],obj: {}},"Assimilated Incredible Cotton Shirt Utah",[],new Date("2018-09-06T00:35:25.087Z"),74838,"Books Steel",{_id: 4155,str: "Buckinghamshire",date: new Date("2018-09-06T12:41:06.242Z"),obj: {_id: 4156,num: 98198,date: new Date("2018-09-06T18:15:45.994Z"),obj: {_id: 4157,num: 92031,date: new Date("2018-09-06T03:35:26.516Z"),array: [],obj: {}}}},[new Date("2018-09-06T18:26:04.041Z"),"withdrawal Practical FTP",76386],new Date("2018-09-06T07:56:42.651Z"),{_id: 4158,str: "Metal New Jersey help-desk",num: 75949,date: new Date("2018-09-06T05:43:23.326Z"),array: [74267,67550,63348]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4159,str: "Incredible Concrete Keyboard invoice",num: 72773,date: new Date("2018-09-06T06:23:36.347Z"),array: [new Date("2018-09-06T03:47:27.440Z"),12090,56133,"Toys","24/365",new Date("2018-09-06T08:11:07.172Z"),"platforms","hacking Coordinator Bedfordshire",new Date("2018-09-05T22:20:32.862Z"),{_id: 4160,str: "Costa Rican Colon",num: 43197,array: [],obj: {}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 4161,str: "background Creative Sharable",num: 11407,date: new Date("2018-09-06T15:39:08.774Z"),array: [new Date("2018-09-06T16:17:01.872Z"),68494,new Date("2018-09-05T20:18:16.206Z"),new Date("2018-09-06T10:28:52.759Z"),[51900,73176,new Date("2018-09-06T15:01:00.161Z"),{_id: 4162,str: "Assistant Communications",num: 98679,date: new Date("2018-09-06T08:27:02.132Z"),obj: {}}],"Shore Metal",{_id: 4163,str: "Plains",num: 23143,date: new Date("2018-09-06T00:29:20.404Z"),array: [],obj: {_id: 4164,str: "turn-key Texas implement",date: new Date("2018-09-06T10:18:57.473Z")}},"Customer",47374,[],new Date("2018-09-06T08:06:05.418Z"),10406],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4165,str: "Buckinghamshire Quality Grocery",num: 60848,date: new Date("2018-09-06T07:59:19.913Z"),obj: {_id: 4166,str: "Philippines parsing Licensed Cotton Sausages",num: 49394,array: [],obj: {_id: 4167,str: "calculating Awesome",num: 34326,date: new Date("2018-09-05T20:18:54.598Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 4168,num: 2420,date: new Date("2018-09-06T06:29:03.091Z"),array: [],obj: {_id: 4169,str: "Cambridgeshire Germany Tools",array: ["North Korean Won RSS",new Date("2018-09-06T12:51:26.907Z"),52824,"Cambridgeshire",new Date("2018-09-06T01:21:12.973Z"),{_id: 4170,str: "engage synthesize",num: 78270,date: new Date("2018-09-06T06:08:54.955Z"),array: [],obj: {_id: 4171,str: "British Indian Ocean Territory (Chagos Archipelago) interfaces Auto Loan Account",num: 21369,date: new Date("2018-09-06T19:20:16.778Z"),array: ["holistic Phased"],obj: {}}},{_id: 4172,str: "Israel",date: new Date("2018-09-06T07:36:00.086Z")},"Gloves Tasty Rubber Fish",new Date("2018-09-06T00:55:41.810Z"),15703,"alarm attitude-oriented Savings Account",88313,new Date("2018-09-06T02:22:24.804Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4173,str: "quantifying",num: 10160,date: new Date("2018-09-06T05:15:31.330Z"),array: [24376,"Supervisor UAE Dirham programming",5357,new Date("2018-09-06T15:02:50.639Z"),{_id: 4174,str: "Interactions Republic of Korea Georgia",num: 9771,array: [],obj: {}},[],new Date("2018-09-05T20:17:08.590Z"),93286,4247,[{_id: 4175,str: "panel Music generate",num: 99497,date: new Date("2018-09-06T07:42:46.461Z"),array: ["port Michigan",new Date("2018-09-06T16:39:39.910Z"),new Date("2018-09-06T08:25:46.563Z"),"Internal Ergonomic"],obj: {}},{_id: 4176,num: 77066,date: new Date("2018-09-06T18:28:38.778Z")},{_id: 4177,str: "Money Market Account Savings Account",num: 53,obj: {_id: 4178,date: new Date("2018-09-06T14:01:07.142Z"),array: [new Date("2018-09-05T23:04:30.453Z"),[],new Date("2018-09-06T03:03:50.752Z")],obj: {_id: 4179,num: 92506,array: [],obj: {_id: 4180,str: "Berkshire",array: []}}}},72342]]});
    },

    function(coll) {
        return coll.insert({_id: 4181,str: "orchid",num: 89084,date: new Date("2018-09-05T21:06:12.382Z"),array: [],obj: {_id: 4182,str: "Music",num: 76567,date: new Date("2018-09-06T19:06:40.504Z"),array: [],obj: {_id: 4183,date: new Date("2018-09-06T17:12:52.637Z"),array: ["Technician","User-centric EXE Tasty",[90067,90997,"Comoro Franc withdrawal invoice",new Date("2018-09-05T23:16:02.195Z")],new Date("2018-09-06T09:11:37.534Z"),{_id: 4184,str: "Refined Hat Inlet",num: 88560,date: new Date("2018-09-06T09:58:58.252Z"),obj: {}},{_id: 4185,str: "infrastructures Belarus",num: 49158,date: new Date("2018-09-06T02:23:21.741Z"),array: [new Date("2018-09-06T19:45:45.533Z")],obj: {_id: 4186,str: "portals Tasty",num: 18856,array: [99554,"Gourde US Dollar",new Date("2018-09-06T02:55:08.592Z"),[],36433]}},50149,[],{_id: 4187,str: "Garden SMS",date: new Date("2018-09-06T07:01:06.864Z")},"Checking Account Liaison Internal"]}}});
    },

    function(coll) {
        return coll.insert({_id: 4188,str: "Practical withdrawal",num: 37085,date: new Date("2018-09-06T11:14:42.389Z"),array: ["Clothing Washington e-enable",46819,"Oklahoma",{_id: 4189,str: "Lodge",num: 92651,date: new Date("2018-09-05T20:38:02.459Z"),obj: {}},new Date("2018-09-06T01:09:49.345Z"),78853,58971,new Date("2018-09-06T11:44:55.631Z"),new Date("2018-09-06T12:47:54.850Z"),65668,["Hryvnia",[]],new Date("2018-09-06T06:39:38.049Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4190,str: "cohesive Automotive",num: 44302,date: new Date("2018-09-06T14:57:10.079Z"),array: [],obj: {_id: 4191,str: "Turnpike TCP multi-byte",num: 57441,date: new Date("2018-09-05T20:08:39.637Z"),array: [new Date("2018-09-06T19:22:06.271Z"),58861,"Web",new Date("2018-09-05T21:09:01.333Z"),"bluetooth Sausages invoice",new Date("2018-09-06T07:29:15.272Z"),"Refined",41904,3674,[],"card Mountain Bhutan",[new Date("2018-09-06T09:42:56.930Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 4192,str: "Lodge invoice Virgin Islands, British",num: 590,date: new Date("2018-09-05T22:21:06.113Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4193,str: "Gorgeous Cambridgeshire wireless",num: 6708,date: new Date("2018-09-06T00:07:46.482Z"),array: [],obj: {_id: 4194,str: "Berkshire SCSI",num: 76528,date: new Date("2018-09-05T23:45:32.058Z"),array: ["Toys",75335,7426,"knowledge user Kwacha",[],new Date("2018-09-06T09:02:28.731Z"),"Dynamic","bleeding-edge",{_id: 4195,date: new Date("2018-09-06T12:02:40.233Z"),array: [53868],obj: {_id: 4196,str: "New York Grocery Advanced",date: new Date("2018-09-06T00:51:15.678Z"),obj: {_id: 4197,str: "Handmade Quality",num: 97167,date: new Date("2018-09-06T12:07:07.876Z"),array: []}}},new Date("2018-09-06T18:17:32.941Z"),{_id: 4198,num: 87719,date: new Date("2018-09-06T01:09:21.129Z"),obj: {}},"back-end Massachusetts Falkland Islands Pound"]}});
    },

    function(coll) {
        return coll.insert({_id: 4199,str: "calculate capacity Monitored",num: 87772,date: new Date("2018-09-06T17:50:26.299Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4200,str: "Utah",num: 88463,date: new Date("2018-09-06T14:46:31.881Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4201,str: "FTP",num: 85398,date: new Date("2018-09-06T10:29:10.159Z"),array: [86839,"GB Home Loan Account",[],new Date("2018-09-06T00:48:37.661Z"),56844,new Date("2018-09-06T03:58:18.660Z"),77207,"AI Ball Chicken","Fantastic Plastic Chips backing up",new Date("2018-09-05T20:23:12.750Z"),39720,{_id: 4202,str: "pixel leverage quantifying",num: 37608,date: new Date("2018-09-06T03:25:37.940Z"),obj: {}}],obj: {_id: 4203,str: "calculate enable array",date: new Date("2018-09-06T06:48:19.011Z"),array: [new Date("2018-09-06T12:52:31.146Z"),{_id: 4204,str: "payment",num: 47722,date: new Date("2018-09-06T07:00:12.184Z"),array: [],obj: {_id: 4205,num: 20695,array: []}},"Cambridgeshire"],obj: {_id: 4206,str: "National payment",num: 24549,date: new Date("2018-09-06T12:00:14.762Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 4207,str: "parsing Roads",num: 20152,date: new Date("2018-09-06T00:23:15.926Z"),array: [19668,new Date("2018-09-06T14:55:43.088Z"),4465,"Planner virtual back up",[],"Orchestrator exuding white",new Date("2018-09-06T05:40:30.202Z"),[],78304],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4208,str: "Supervisor Integration transmitting",num: 80927,date: new Date("2018-09-05T23:39:02.294Z"),array: [{_id: 4209,str: "Central",num: 56072,date: new Date("2018-09-06T19:43:19.138Z"),array: ["Mississippi",new Date("2018-09-06T09:28:54.720Z"),new Date("2018-09-06T16:23:54.703Z"),78695],obj: {}},new Date("2018-09-06T01:16:25.277Z"),"Estonia Markets encryption",25947,new Date("2018-09-06T02:15:26.318Z"),69320,"Wooden ADP","card Auto Loan Account connecting",[],[new Date("2018-09-06T12:45:24.008Z")],55731],obj: {_id: 4210,str: "optimal Movies",num: 89694,date: new Date("2018-09-05T23:19:48.381Z"),array: [[],"navigate"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4211,str: "Bedfordshire",num: 68456,date: new Date("2018-09-06T07:15:20.981Z"),array: ["syndicate",{_id: 4212,str: "facilitate deposit",num: 89079,date: new Date("2018-09-06T13:42:15.963Z"),array: [new Date("2018-09-05T20:30:27.803Z"),73946,new Date("2018-09-06T13:04:43.911Z"),62417],obj: {}},[],"Soft",{_id: 4213,str: "Kazakhstan Fantastic Frozen Shirt Vatu",num: 96399,array: [],obj: {_id: 4214,num: 86903,date: new Date("2018-09-06T06:55:43.978Z"),obj: {_id: 4215,str: "platforms",array: [new Date("2018-09-05T22:17:03.411Z"),new Date("2018-09-05T23:56:42.269Z")]}}},74212,34467,new Date("2018-09-06T11:58:04.456Z"),"compressing Books Security",[],"time-frame synergies",new Date("2018-09-06T10:30:49.899Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4216,str: "generating",num: 74952,date: new Date("2018-09-06T03:36:21.903Z"),array: [{_id: 4217,str: "Wooden Rubber",num: 18563,date: new Date("2018-09-06T00:18:08.398Z"),array: [[82357],new Date("2018-09-06T13:09:35.150Z"),new Date("2018-09-06T04:34:13.734Z"),new Date("2018-09-06T01:26:48.639Z"),new Date("2018-09-06T11:56:28.229Z"),42772],obj: {_id: 4218,str: "Officer",num: 67076,array: [],obj: {}}},"Pizza","Response invoice Computer",48763,[],["Reactive content",new Date("2018-09-05T23:01:25.849Z")],"Optimized dynamic","schemas Awesome Rubber Chair",90078,{_id: 4219,num: 90676,date: new Date("2018-09-06T16:32:18.668Z"),array: [],obj: {}},[]],obj: {_id: 4220,array: [{_id: 4221,str: "Berkshire",obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 4222,str: "New Jersey Personal Loan Account Credit Card Account",num: 78059,date: new Date("2018-09-06T17:49:09.007Z"),array: [new Date("2018-09-06T13:54:02.594Z"),{_id: 4223,str: "Steel application",num: 91431,date: new Date("2018-09-05T23:00:35.826Z"),obj: {}},"Investment Account Industrial Rwanda Franc",15481,32432,new Date("2018-09-06T18:44:13.239Z"),"Factors","Frozen Borders New Jersey",new Date("2018-09-06T15:47:37.465Z"),[[],85055,{_id: 4224,str: "Alabama invoice transmitter",num: 46849,date: new Date("2018-09-05T23:36:26.325Z"),array: [],obj: {_id: 4225,str: "Bulgaria",date: new Date("2018-09-06T03:45:40.397Z"),array: [],obj: {}}},5082],40512],obj: {_id: 4226,str: "Beauty SCSI",num: 7759,date: new Date("2018-09-06T00:00:47.988Z"),obj: {_id: 4227,num: 13132,array: ["Lakes Drive",{_id: 4228,str: "killer",num: 71930,date: new Date("2018-09-05T22:39:47.706Z"),array: [new Date("2018-09-06T08:54:50.649Z")]},[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4229,date: new Date("2018-09-06T08:47:57.688Z"),array: ["e-business",new Date("2018-09-05T22:13:31.197Z"),new Date("2018-09-06T01:41:05.981Z"),"transitional Handmade EXE",51129,48158,"Clothing silver Steel",new Date("2018-09-05T20:35:00.812Z"),{_id: 4230,str: "hack",num: 21772,array: [],obj: {}},new Date("2018-09-06T13:22:42.608Z")],obj: {_id: 4231,str: "EXE Trafficway",num: 13657,date: new Date("2018-09-05T23:13:12.102Z"),array: [new Date("2018-09-05T23:25:41.739Z"),89585,{_id: 4232,str: "Personal Loan Account Money Market Account Incredible",num: 14948,date: new Date("2018-09-06T07:21:35.806Z"),array: []},[],84735,85232],obj: {_id: 4233,str: "lavender Gloves Automotive",date: new Date("2018-09-06T08:43:23.402Z"),array: ["violet",60670],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4234,num: 47930,date: new Date("2018-09-06T09:51:04.188Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4235,str: "plum",num: 82671,date: new Date("2018-09-06T18:37:44.540Z"),array: [59877,19216,new Date("2018-09-05T23:03:12.148Z"),new Date("2018-09-05T23:07:12.342Z"),"card Auto Loan Account Turkey",[],25530,"Auto Loan Account Centralized plug-and-play",new Date("2018-09-06T02:17:23.247Z"),"withdrawal",new Date("2018-09-06T08:52:57.551Z"),44685,{_id: 4236,num: 96395,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 4237,str: "deposit",num: 38500,date: new Date("2018-09-06T09:32:10.777Z"),array: [new Date("2018-09-06T15:56:49.644Z"),88714,93950,"indigo",new Date("2018-09-06T07:33:36.460Z"),"Maine program Organized",45348,{_id: 4238,str: "e-tailers El Salvador circuit",num: 48956,date: new Date("2018-09-06T16:06:52.095Z"),array: [],obj: {_id: 4239,str: "Regional Kip",num: 66184,obj: {}}},new Date("2018-09-06T02:37:34.803Z"),[]],obj: {_id: 4240,array: ["monitor black","array"]}});
    },

    function(coll) {
        return coll.insert({_id: 4241,str: "bandwidth Alaska interface",num: 11036,date: new Date("2018-09-06T10:03:40.306Z"),array: [51440,[],"Personal Loan Account",new Date("2018-09-06T11:42:51.474Z"),82694,57564,new Date("2018-09-06T17:40:52.228Z"),"Multi-lateral Corporate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4242,str: "forecast",num: 20297,date: new Date("2018-09-05T21:06:15.117Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4243,str: "overriding",num: 42205,array: [],obj: {_id: 4244,str: "Investment Account",num: 65895,date: new Date("2018-09-05T20:12:45.492Z"),array: [80967,new Date("2018-09-06T18:03:27.526Z"),new Date("2018-09-06T03:12:49.563Z"),"visionary Administrator","cyan","interface Facilitator",{_id: 4245,str: "web services",num: 91658,date: new Date("2018-09-06T02:04:20.568Z"),array: [38199,{_id: 4246,str: "real-time calculating",num: 30393,date: new Date("2018-09-06T09:02:26.974Z"),array: [13959,2304],obj: {}},new Date("2018-09-05T21:40:10.921Z"),new Date("2018-09-06T14:53:45.178Z")]},{_id: 4247,date: new Date("2018-09-06T18:15:41.184Z"),array: [],obj: {}},[]],obj: {_id: 4248,date: new Date("2018-09-06T00:22:10.683Z"),obj: {_id: 4249,str: "Andorra",num: 9404,date: new Date("2018-09-06T18:40:02.012Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 4250,str: "Paradigm Frozen withdrawal",num: 46775,date: new Date("2018-09-06T09:04:44.281Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4251,str: "IB Creative",num: 34639,date: new Date("2018-09-06T12:34:38.525Z"),array: [17124,[],"Assurance utilisation grid-enabled",{_id: 4252,num: 10342,date: new Date("2018-09-06T02:42:12.559Z"),array: [],obj: {_id: 4253,str: "Albania",num: 41429,array: [],obj: {}}},new Date("2018-09-06T07:57:51.699Z"),"Money Market Account maximized",[new Date("2018-09-06T14:41:36.931Z"),[79021,"generate","Configuration Tasty Concrete Pants"],20320,46340,"PNG IB best-of-breed"],new Date("2018-09-05T23:47:46.929Z"),"Berkshire adapter Concrete"],obj: {_id: 4254,num: 91455,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4255,str: "embrace",num: 94002,date: new Date("2018-09-06T13:54:18.171Z"),array: [18624,"Solutions array",new Date("2018-09-05T22:06:00.738Z"),30430,new Date("2018-09-06T10:31:15.822Z"),23312,"Customer Chips","synthesizing Slovakia (Slovak Republic) Music",40108,[],"bypassing payment"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4256,str: "Cotton input Ways",num: 42859,date: new Date("2018-09-05T23:15:50.682Z"),array: [new Date("2018-09-06T10:27:36.949Z"),"orchestrate one-to-one","parse",18856,{_id: 4257,str: "Implementation e-business",num: 72701,date: new Date("2018-09-06T07:44:05.058Z"),array: [],obj: {}},69904,50980,new Date("2018-09-05T23:37:09.030Z"),["copying intranet",new Date("2018-09-05T22:00:46.771Z"),95877,new Date("2018-09-06T11:33:00.434Z")],{_id: 4258,str: "RSS",num: 52790,date: new Date("2018-09-06T06:51:36.508Z"),obj: {_id: 4259,str: "Licensed Steel Pants Ball",num: 56910,array: ["Sleek Wooden monitor"]}},{_id: 4260,date: new Date("2018-09-06T14:37:50.431Z"),array: [42385],obj: {_id: 4261,num: 87417}},"Coordinator",new Date("2018-09-06T01:45:40.063Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4262,str: "bypass",num: 2556,date: new Date("2018-09-06T16:42:07.859Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4263,str: "Buckinghamshire Maine Investment Account",date: new Date("2018-09-06T11:34:44.262Z"),array: [],obj: {_id: 4264,str: "Wyoming encryption Communications",num: 93935,date: new Date("2018-09-06T04:54:09.685Z"),array: [new Date("2018-09-06T07:15:46.302Z"),14524,{_id: 4265,num: 83703,date: new Date("2018-09-05T20:39:56.626Z"),array: [[],64809,"hard drive",new Date("2018-09-06T03:14:39.309Z"),[48629],"card Designer",new Date("2018-09-05T23:46:55.944Z"),new Date("2018-09-06T17:37:31.422Z")],obj: {_id: 4266,str: "copy regional",num: 5248,array: [],obj: {_id: 4267,str: "payment Forks",num: 46087,date: new Date("2018-09-06T07:56:44.808Z"),obj: {}}}},["Configurable Tuna e-enable",45496],35285,new Date("2018-09-06T15:47:06.754Z"),85034,{_id: 4268,array: ["Chicken Gorgeous Frozen Fish"],obj: {}},{_id: 4269,str: "United Kingdom",num: 18500}]}});
    },

    function(coll) {
        return coll.insert({_id: 4270,str: "firewall Global Berkshire",num: 36123,date: new Date("2018-09-06T01:35:18.002Z"),array: [new Date("2018-09-06T12:03:13.514Z"),"Refined Frozen Fish Florida","magenta bi-directional",new Date("2018-09-06T10:49:56.657Z"),new Date("2018-09-06T06:15:09.644Z"),64171,7293,"Borders","invoice",30158,{_id: 4271,str: "Planner",num: 34389,date: new Date("2018-09-06T06:56:18.604Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 4272,str: "invoice Unbranded",num: 724,date: new Date("2018-09-05T22:03:00.486Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4273,str: "Rhode Island implement Delaware",num: 8828,date: new Date("2018-09-06T17:04:07.590Z"),array: ["revolutionize program initiatives",{_id: 4274,str: "mobile Self-enabling connecting",num: 6204,date: new Date("2018-09-06T06:11:49.208Z")},new Date("2018-09-05T21:29:37.686Z"),97569,"technologies Mexican Peso Mexican Unidad de Inversion (UDI)",new Date("2018-09-06T15:26:08.644Z"),new Date("2018-09-06T07:55:53.197Z"),"COM Computers",54052,new Date("2018-09-06T09:14:24.161Z"),{_id: 4275,num: 66872,array: [80289,[],[[],65012,"Brand Music"]]},82803],obj: {_id: 4276,str: "Face to face Director Principal",date: new Date("2018-09-06T05:53:54.246Z"),array: [],obj: {_id: 4277,num: 59365,date: new Date("2018-09-06T03:55:20.990Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4278,str: "Configurable alarm",num: 42066,date: new Date("2018-09-06T17:05:44.836Z"),array: [],obj: {_id: 4279,str: "internet solution Maine",num: 91233,date: new Date("2018-09-06T05:06:46.178Z"),array: [new Date("2018-09-06T01:53:00.282Z"),56915,new Date("2018-09-05T23:52:21.545Z"),"Timor-Leste New Mexico COM",9993,[],"generating Handmade Concrete Computer","schemas Handcrafted",{_id: 4280,str: "Shoes Organic sensor",num: 28191,date: new Date("2018-09-06T09:05:03.608Z")},"markets Shoes Madagascar",new Date("2018-09-06T17:23:29.136Z")],obj: {_id: 4281,str: "Marketing",num: 41762,date: new Date("2018-09-05T22:59:20.156Z"),array: ["Savings Account",{ _id: 4282 },{_id: 4283,str: "compelling",num: 8173,date: new Date("2018-09-06T04:43:37.688Z"),array: [56006],obj: {}},new Date("2018-09-06T16:34:09.107Z"),[new Date("2018-09-06T19:53:35.368Z"),83581,new Date("2018-09-06T17:16:05.329Z")]],obj: {_id: 4284,num: 72937,date: new Date("2018-09-06T07:03:30.199Z"),array: [],obj: {_id: 4285,date: new Date("2018-09-06T03:30:50.040Z")}}}}});
    },

    function(coll) {
        return coll.insert({_id: 4286,str: "Burg withdrawal niches",num: 23649,date: new Date("2018-09-06T11:45:34.549Z"),array: [9433,new Date("2018-09-05T20:38:41.603Z"),"program synergies cross-platform",99350,new Date("2018-09-05T23:17:21.791Z"),27591,"Markets",{_id: 4287,num: 89759,array: [new Date("2018-09-06T09:05:25.593Z"),{_id: 4288,str: "Handmade Steel Bacon Customer-focused Metal",num: 84850,date: new Date("2018-09-06T02:41:45.121Z"),array: [new Date("2018-09-06T14:01:26.167Z")],obj: {_id: 4289,str: "invoice hacking",date: new Date("2018-09-06T12:40:17.480Z"),obj: {}}},"parsing",11476],obj: {}},[],17131,new Date("2018-09-06T03:22:10.477Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4290,str: "Malagasy Ariary withdrawal",num: 68278,date: new Date("2018-09-06T17:54:51.851Z"),array: [],obj: {_id: 4291,num: 29593,date: new Date("2018-09-06T14:27:17.535Z"),array: [{_id: 4292,str: "back-end",num: 64688,date: new Date("2018-09-06T13:57:17.995Z"),array: [new Date("2018-09-06T04:15:49.452Z"),39222,{_id: 4293,str: "Salad Cotton",array: [86991,"Reverse-engineered"],obj: {_id: 4294,str: "Michigan",date: new Date("2018-09-05T20:21:05.361Z"),array: [[]],obj: {}}},72468,[],new Date("2018-09-06T02:20:28.425Z"),"Shoes Ergonomic card",new Date("2018-09-06T10:38:09.701Z"),"West Virginia","Lithuanian Litas"],obj: {_id: 4295,str: "deliver Puerto Rico Personal Loan Account",date: new Date("2018-09-06T14:26:08.727Z"),array: [],obj: {}}},[new Date("2018-09-06T07:08:16.647Z"),new Date("2018-09-06T09:32:00.729Z"),{_id: 4296,num: 39729},{_id: 4297,num: 60742,array: ["Advanced models"]},87074],66563,"visionary"]}});
    },

    function(coll) {
        return coll.insert({_id: 4298,str: "Consultant Investor",num: 28607,array: ["copy Idaho Rustic Frozen Fish",76320,new Date("2018-09-06T14:35:01.931Z"),[new Date("2018-09-05T23:39:35.624Z")],"wireless Pizza Vermont",{_id: 4299,str: "RSS architectures Central",num: 15583,obj: {}},33212,new Date("2018-09-06T10:19:40.331Z"),{_id: 4300,str: "Brand",num: 24246,date: new Date("2018-09-05T23:30:43.914Z"),obj: {_id: 4301,str: "generating",num: 78558,date: new Date("2018-09-06T07:26:26.321Z"),array: [],obj: {}}},"Savings Account","Liaison deposit circuit",87469]});
    },

    function(coll) {
        return coll.insert({_id: 4302,str: "Manager",num: 15299,date: new Date("2018-09-06T18:18:12.302Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4303,str: "Cape green",num: 41337,date: new Date("2018-09-06T01:32:09.561Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4304,str: "program",num: 6975,date: new Date("2018-09-06T16:46:12.624Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4305,str: "Generic Granite Soap",num: 46502,date: new Date("2018-09-06T16:19:17.680Z")});
    },

    function(coll) {
        return coll.insert({_id: 4306,str: "Car Auto Loan Account COM",num: 4824,date: new Date("2018-09-05T21:52:16.008Z"),array: [new Date("2018-09-06T04:53:22.434Z"),"Martinique Illinois","Down-sized black hierarchy",new Date("2018-09-06T07:10:45.896Z"),673,"driver Movies",[]],obj: {_id: 4307,str: "Oregon Vermont bandwidth",num: 80816,date: new Date("2018-09-06T15:47:39.346Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 4308,str: "input Borders grow",num: 35904,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4309,str: "Lebanese Pound Phased",num: 61183,date: new Date("2018-09-06T01:30:51.023Z"),array: ["Lari maximize",40237,"sensor Cross-platform panel",[new Date("2018-09-05T23:56:10.790Z")],"navigating",new Date("2018-09-05T20:10:41.431Z"),59673,new Date("2018-09-06T04:26:23.574Z"),99555,{_id: 4310,str: "Tuna user-facing Baby",num: 79932,date: new Date("2018-09-06T14:29:40.324Z"),array: [new Date("2018-09-06T12:53:32.862Z"),"bypass cross-platform","Handcrafted","Tennessee"],obj: {}},47697,{_id: 4311,num: 63787,date: new Date("2018-09-06T16:43:11.911Z"),array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 4312,str: "auxiliary system",num: 35316,date: new Date("2018-09-06T05:06:21.599Z"),array: [new Date("2018-09-06T12:41:13.041Z"),new Date("2018-09-06T13:53:14.154Z"),75650,"Web","Frozen",72184,39572,new Date("2018-09-06T09:03:11.312Z"),69168],obj: {_id: 4313,num: 57447,date: new Date("2018-09-06T02:57:24.539Z"),array: [],obj: {_id: 4314,num: 87860,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4315,str: "Granite Auto Loan Account",num: 13749,date: new Date("2018-09-05T22:48:46.222Z"),array: [],obj: {_id: 4316,str: "invoice",num: 78964,date: new Date("2018-09-06T09:27:50.558Z"),array: [96356,46270,{_id: 4317,str: "Investment Account Liaison approach",num: 64007,date: new Date("2018-09-06T02:37:17.417Z"),array: [],obj: {}},"e-services",new Date("2018-09-06T14:24:06.511Z"),new Date("2018-09-05T22:52:05.373Z"),"withdrawal Forward Cuban Peso Peso Convertible",20691,[],"Movies concept synthesizing","productize Customer-focused","convergence Rubber Metal"]}});
    },

    function(coll) {
        return coll.insert({_id: 4318,str: "Avon",num: 89028,date: new Date("2018-09-06T03:21:45.576Z"),array: ["Shoes National",77544,new Date("2018-09-06T12:27:27.923Z"),new Date("2018-09-06T10:39:20.429Z"),"analyzing Bacon",new Date("2018-09-06T17:13:14.211Z"),{_id: 4319,date: new Date("2018-09-06T16:57:54.971Z"),array: ["RAM Soft Terrace",[],95055,["e-markets Mauritius Rupee",74298,[],"Serbian Dinar withdrawal vortals"],{_id: 4320,str: "connect revolutionary yellow",num: 84100,date: new Date("2018-09-05T23:39:56.097Z"),obj: {_id: 4321,str: "magenta optimize model",num: 78095,obj: {}}}],obj: {_id: 4322,num: 98372,date: new Date("2018-09-06T10:27:35.607Z"),array: [{_id: 4323,str: "Michigan Belize Dollar Gorgeous Steel Tuna"}],obj: {_id: 4324,str: "Congo",num: 55280,date: new Date("2018-09-06T15:21:37.229Z"),array: [],obj: {}}}},38554]});
    },

    function(coll) {
        return coll.insert({_id: 4325,str: "Generic",num: 33321,date: new Date("2018-09-05T22:36:22.756Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4326,str: "Cedi Som connecting",num: 43341,date: new Date("2018-09-06T04:51:19.621Z"),array: [10952,"Multi-channelled Lodge panel",new Date("2018-09-06T03:23:11.718Z"),new Date("2018-09-06T17:30:55.605Z"),"envisioneer",14048,250,"Switchable"],obj: {_id: 4327,num: 51499,array: [[],34309,{_id: 4328,str: "empower",date: new Date("2018-09-06T14:47:42.856Z"),obj: {_id: 4329,str: "Shoes Chair Pizza",num: 12345,date: new Date("2018-09-06T04:29:00.651Z"),array: ["bus",new Date("2018-09-06T16:44:04.319Z"),{_id: 4330,str: "copying Awesome Plastic Towels Tasty Steel Shoes",num: 68899,date: new Date("2018-09-06T12:43:18.930Z"),obj: {}},[{_id: 4331,str: "matrix",num: 84227,date: new Date("2018-09-06T03:33:57.702Z"),array: [],obj: {}},new Date("2018-09-06T10:27:17.558Z")]]}},new Date("2018-09-06T05:54:35.346Z"),{_id: 4332,str: "Swaziland Human",date: new Date("2018-09-06T09:47:15.030Z"),array: [],obj: {}},[26632]]}});
    },

    function(coll) {
        return coll.insert({_id: 4333,str: "Republic of Korea interfaces",date: new Date("2018-09-06T01:10:46.892Z"),array: [63749,new Date("2018-09-06T12:51:47.568Z"),85645,[new Date("2018-09-06T02:17:00.253Z"),16687,"Baby"],"Steel","infrastructures",{_id: 4334,str: "hack",num: 94239,date: new Date("2018-09-06T10:48:59.461Z"),array: [],obj: {}},"matrix auxiliary paradigms",{_id: 4335,num: 13095,obj: {}},628,35390],obj: {_id: 4336,str: "Avon",date: new Date("2018-09-06T02:32:58.572Z"),array: [],obj: {_id: 4337,date: new Date("2018-09-06T05:32:07.296Z"),array: [new Date("2018-09-06T05:19:59.024Z"),{_id: 4338,str: "User-friendly New Jersey Ergonomic",num: 92743}]}}});
    },

    function(coll) {
        return coll.insert({_id: 4339,str: "Awesome",num: 24026,date: new Date("2018-09-05T21:59:29.832Z"),array: ["Uzbekistan Lead actuating",37894,[new Date("2018-09-06T18:11:12.850Z")],new Date("2018-09-05T20:13:07.845Z"),[],{_id: 4340,str: "Yuan Renminbi",num: 24033,date: new Date("2018-09-05T20:32:13.895Z"),obj: {_id: 4341,num: 42023,date: new Date("2018-09-06T05:53:27.584Z"),array: [],obj: {}}},{_id: 4342,str: "Principal capability Gardens",array: []},new Date("2018-09-06T10:59:30.220Z"),63779,"Indian Rupee Ngultrum extranet back-end","Soft",46103,15847,new Date("2018-09-06T00:57:53.060Z")],obj: {_id: 4343,str: "Sausages",num: 41050,date: new Date("2018-09-06T02:08:29.653Z"),obj: {_id: 4344,num: 90228,array: [40079,["generating Course",new Date("2018-09-06T04:46:17.028Z"),"Human"]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4345,str: "Bedfordshire",num: 89178,date: new Date("2018-09-05T21:17:05.263Z"),array: [96832,"maroon Brand Proactive",[],new Date("2018-09-05T23:24:45.174Z"),new Date("2018-09-06T05:13:30.512Z"),"Unbranded",844,[],"Cambridgeshire zero tolerance"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4346,str: "Kiribati 24/7 Nauru",num: 75718,date: new Date("2018-09-06T19:47:06.672Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4347,str: "tan Credit Card Account",num: 51793,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4348,str: "payment FTP Slovenia",num: 78449,date: new Date("2018-09-06T05:30:29.265Z"),array: [],obj: {_id: 4349,str: "payment",num: 44269,date: new Date("2018-09-06T17:41:07.635Z"),array: [65062,"Mozambique",21552,new Date("2018-09-06T18:24:53.959Z"),new Date("2018-09-06T09:04:30.331Z"),90221,new Date("2018-09-06T17:06:25.065Z"),"Uzbekistan",2402,new Date("2018-09-06T00:21:45.272Z"),[{_id: 4350,num: 92820,array: []},78860,"Soft Division",[],"bandwidth Berkshire implement"],"Parkway"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4351,str: "engineer mint green",num: 65267,date: new Date("2018-09-05T21:54:19.048Z"),array: [91598,"wireless primary",new Date("2018-09-06T08:57:19.474Z"),new Date("2018-09-06T04:33:04.293Z"),99219,new Date("2018-09-06T08:12:35.834Z"),"cohesive",96774,{_id: 4352,str: "application attitude",num: 19049,date: new Date("2018-09-06T15:49:03.160Z"),array: [],obj: {_id: 4353,str: "Diverse primary",num: 11381,date: new Date("2018-09-06T02:24:39.786Z"),array: []}},new Date("2018-09-06T12:41:44.960Z"),"Shoes"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4354,str: "Manager",num: 146,date: new Date("2018-09-06T04:04:17.191Z"),array: [new Date("2018-09-06T18:19:28.632Z"),"visionary Versatile tan",40539,"Kwacha",new Date("2018-09-06T00:11:57.298Z"),25339,57650,new Date("2018-09-05T23:21:53.251Z"),{_id: 4355,str: "synthesizing green bypass",date: new Date("2018-09-06T02:11:24.125Z"),array: [["Synergistic Leone Grenada",4439,[],{_id: 4356,str: "Directives Course",num: 48723,date: new Date("2018-09-06T16:34:45.664Z"),array: [],obj: {_id: 4357,str: "neural Alaska synthesize",date: new Date("2018-09-05T20:19:18.741Z"),array: [new Date("2018-09-06T00:53:22.248Z"),[{_id: 4358,num: 60253,array: []}],"synthesizing"],obj: {}}}]]},[new Date("2018-09-06T13:32:16.360Z")],87287]});
    },

    function(coll) {
        return coll.insert({_id: 4359,str: "payment Grass-roots",num: 24389,date: new Date("2018-09-06T18:24:56.037Z"),array: [new Date("2018-09-06T19:07:28.802Z"),94068,"compressing",[],"Argentine Peso",80625,new Date("2018-09-06T14:25:02.724Z"),[[],3986],new Date("2018-09-06T12:47:43.083Z"),{_id: 4360,str: "Iraqi Dinar",num: 63966,date: new Date("2018-09-05T21:10:45.085Z"),array: [],obj: {_id: 4361,array: [],obj: {}}},"payment calculate"]});
    },

    function(coll) {
        return coll.insert({_id: 4362,str: "Investment Account",num: 27920,date: new Date("2018-09-05T21:37:16.326Z"),array: [39257,new Date("2018-09-06T12:57:20.463Z"),"Avon Colorado bypass",[],"Mexican Peso Mexican Unidad de Inversion (UDI) Pakistan Rupee",new Date("2018-09-06T10:37:41.165Z"),58015,5118],obj: {_id: 4363,str: "cutting-edge program",num: 53051,date: new Date("2018-09-06T11:32:46.458Z"),array: [new Date("2018-09-06T01:39:26.937Z"),{_id: 4364,str: "enhance Infrastructure",num: 27393,date: new Date("2018-09-06T09:26:24.697Z"),obj: {_id: 4365,str: "24/7",num: 87850,date: new Date("2018-09-06T12:51:06.636Z"),array: [],obj: {}}},"Tasty Automated Clothing",new Date("2018-09-05T21:22:53.280Z"),42034,new Date("2018-09-06T12:30:00.073Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 4366,str: "Forward",date: new Date("2018-09-06T00:04:21.151Z"),array: [1650,"Baby magenta Rustic Soft Keyboard",new Date("2018-09-05T23:32:59.730Z"),new Date("2018-09-05T23:59:12.678Z"),42497,"solid state",new Date("2018-09-06T09:32:09.253Z"),36515,["Auto Loan Account Assistant Port",{_id: 4367,num: 72403,date: new Date("2018-09-05T22:51:11.923Z"),obj: {_id: 4368,str: "web services orchid Computers",num: 4236,array: [97159,"withdrawal Generic Soft Car",[]]}}],new Date("2018-09-06T18:12:17.557Z")],obj: {_id: 4369,num: 7402,date: new Date("2018-09-06T02:53:53.951Z"),obj: {_id: 4370,str: "Baby",num: 80078,date: new Date("2018-09-06T12:23:49.638Z"),array: [],obj: {_id: 4371,str: "Berkshire",date: new Date("2018-09-06T02:30:39.275Z"),array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 4372,str: "bluetooth",num: 84802,array: [new Date("2018-09-06T05:36:07.661Z"),8515,23356,"Wooden","Licensed Soft Plastic",new Date("2018-09-05T21:58:09.629Z"),new Date("2018-09-06T02:59:06.672Z"),{_id: 4373,str: "Salad Ball Incredible Soft Tuna",array: [],obj: {_id: 4374,str: "Soft Music Chief",num: 7178,date: new Date("2018-09-06T05:02:18.528Z"),array: [[{_id: 4375,str: "Sleek Metal Car magenta",num: 45067,date: new Date("2018-09-06T12:19:03.214Z"),array: [],obj: {}}]],obj: {}}},"deposit Road",{_id: 4376,str: "Valley Home Loan Account",num: 83746,date: new Date("2018-09-06T13:55:33.331Z"),array: [],obj: {_id: 4377,date: new Date("2018-09-06T00:13:59.873Z"),array: [{_id: 4378,num: 47909,obj: {_id: 4379,str: "Synchronised",num: 955,date: new Date("2018-09-06T13:43:13.085Z")}},18442,[76928,"Shoes solutions"],new Date("2018-09-06T09:58:29.563Z"),new Date("2018-09-06T01:45:59.084Z")]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4380,str: "connecting",num: 5099,date: new Date("2018-09-06T00:30:22.795Z"),array: [15059,38135,["AI Seychelles Movies",new Date("2018-09-06T18:29:18.171Z")],new Date("2018-09-06T00:24:10.305Z"),21263,new Date("2018-09-06T03:45:47.652Z"),24904,new Date("2018-09-06T06:10:32.657Z"),"Fresh SSL",[{_id: 4381,str: "Supervisor Savings Account",num: 21860,date: new Date("2018-09-06T04:36:03.377Z"),array: [],obj: {}},"Digitized Borders compressing"],"red","Bike"]});
    },

    function(coll) {
        return coll.insert({_id: 4382,str: "Seychelles Rupee deliverables",num: 34042,date: new Date("2018-09-06T10:20:13.558Z"),array: ["Illinois Associate",new Date("2018-09-06T13:55:03.731Z"),44929,{_id: 4383,str: "web-enabled",num: 66986,date: new Date("2018-09-06T11:38:13.511Z"),obj: {_id: 4384,date: new Date("2018-09-06T10:11:05.497Z"),array: [new Date("2018-09-06T12:24:55.762Z"),[],new Date("2018-09-06T15:13:52.121Z")]}},"e-markets","calculating",{_id: 4385,str: "Oregon alarm portal",num: 13997,array: [],obj: {}},"cultivate Arizona",80716],obj: {_id: 4386,str: "Frozen",date: new Date("2018-09-06T02:05:13.889Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4387,str: "backing up Ball",num: 60176,date: new Date("2018-09-06T13:14:26.916Z"),array: [93974,new Date("2018-09-05T22:10:41.013Z"),{_id: 4388,str: "Bangladesh",num: 57622,date: new Date("2018-09-06T12:09:49.014Z"),array: ["Home Loan Account","connecting Programmable capacity",new Date("2018-09-06T15:10:11.934Z"),20934,"multi-byte deposit tan"],obj: {}},new Date("2018-09-06T07:59:20.227Z"),[],23206,{_id: 4389,str: "bleeding-edge Direct",num: 79698,obj: {}},"green Chicken Movies",new Date("2018-09-06T08:02:38.266Z"),[]],obj: {_id: 4390,str: "Arizona salmon",date: new Date("2018-09-06T17:46:35.905Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4391,str: "Credit Card Account Cambridgeshire quantify",num: 77259,date: new Date("2018-09-06T18:20:04.631Z"),array: [97090,86045,[[]],new Date("2018-09-06T12:10:29.200Z"),new Date("2018-09-06T07:34:59.833Z"),"architectures redefine",{_id: 4392,str: "Mouse networks Supervisor",num: 90067,date: new Date("2018-09-06T03:02:03.238Z"),array: [],obj: {}},"Home Loan Account digital",new Date("2018-09-05T22:02:31.416Z"),"Creative Leone District",60200,new Date("2018-09-06T00:02:27.083Z")]});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.num": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $hour: { $second: { $isoDayOfWeek: { $toDate: { $ltrim: {input: { $toLower: "teal Reverse-engineered" },chars: "Music Street deposit"} } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $log: ['$obj.obj.num',37023] },minute: { $divide: ['$obj.obj.obj.num',{ $sqrt: 84463 }] },second: { $log: [55267,15789] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.obj.str'],{ $cmp: [{ $toString: { $concatArrays: [[],["virtual Chilean Peso Unidades de fomento Director","Clothing",{ $substrBytes: [{ $substrCP: ["clear-thinking Poland hack",17,16] },5,13] }],[21972]] } },{ $dayOfWeek: { $isoWeek: { $week: { $dateFromString: {dateString: "2018-09-05T23:48:03.693Z",onNull: { $toUpper: "applications Developer Ergonomic Soft Gloves" }} } } } }] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "strategize Global",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substr: ["Health recontextualize discrete",10,3] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T10:05:21.347Z" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Integration"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],35490] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $second: { $toDate: { $arrayToObject: [[[],[],[{ $trim: {input: { $substrBytes: ["unleash withdrawal Practical Soft Pizza",20,17] },chars: { $substr: ["Toys Sleek Steel Shirt Vietnam",10,2] }} },"copying Liberian Dollar calculate"]]] } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["parse calculate fault-tolerant",{ $rtrim: { input: "Principal" } },'$obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $arrayElemAt: [["implementation Principal"],90672] } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str'],in: { $log: [483,'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],[29516],[{ $toUpper: "product" },"deposit Exclusive transform"]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],["project"],['$num',new Date("2018-09-05T22:09:57.342Z")],[]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $month: { $toDate: { $arrayToObject: [[{k: "implement fresh-thinking",v: true},{k: "violet",v: '$obj.obj.obj.num'}]] } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $month: { $dayOfMonth: { $millesecond: { $isoWeek: { $dayOfYear: { $millesecond: { $isoWeekYear: { $minute: { $week: { $dateFromParts: {year: { $log: [84360,68214] },minute: { $log: ['$num','$obj.obj.obj.num'] },timezone: "Japan"} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substr: ["connect Belize",15,7] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["USB bypassing",10,20] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $dateToString: {date: { $dateToString: {date: { $millesecond: { $dateFromString: {dateString: "2018-09-06T08:47:40.179Z",format: "%z-%j-%w-%Y-%G-%U",timezone: "Asia/Tehran",onError: { $arrayToObject: [[["back-end Automotive Refined Cotton Bike",'$obj.str',"Mobility",{ $substrBytes: ['$obj.str',13,12] }],[],[],[19136,98978],['$obj.num',35006],[]]] },onNull: { $year: { $month: { $dayOfYear: { $second: { $second: { $hour: { $dateFromString: {dateString: "2018-09-06T18:31:01.736Z",format: "%V-%H-%m-%m-%S-%u-%U-%G-%G-%w"} } } } } } } }} } },timezone: "Pacific/Galapagos"} },timezone: "Indian/Mayotte",onNull: { $substrCP: [{ $ltrim: { input: '$obj.obj.obj.str' } },17,19] }} },"radical challenge Saint Martin"],['$obj.num']],defaults: [new Date("2018-09-06T16:53:21.874Z"),false,[{obj: { num: 71499 },array: [],date: new Date("2018-09-06T15:28:31.747Z")}]]} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str',{ $substr: ['$str',17,14] }],as: 'jazmyne',in: { $cmp: [{ $arrayElemAt: [['$$jazmyne'],63432] },{ $second: { $dateFromString: {dateString: "2018-09-06T03:36:06.254Z",onError: { $map: {input: [{ $toLower: { $substr: ["interface Cotton Concrete",3,5] } }],in: { $pow: [73806,31421] }} },onNull: "multi-state grey Baby"} } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Quality-focused",v: '$str'},{k: "Albania",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[false],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T10:34:12.045Z",timezone: "America/Cuiaba",onError: { $arrayElemAt: [[],'$obj.num'] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],73543] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',timezone: "Africa/Niamey"} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Indian Rupee Ngultrum Ghana PNG",9,16] }, _id: 0}}],

        [{$project: {a: { $toString: { $range: [13,9,18] } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "connect calculating",chars: "migration Data"} }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $indexOfArray: [{ $concatArrays: [[14045,46215],['$str',{ $ltrim: {input: "Multi-lateral",chars: { $trim: {input: "Buckinghamshire indexing Awesome",chars: '$str'} }} }],[{ $toString: { $zip: {inputs: [['$obj.obj.obj.num'],['$obj.num',11949,82536],[],[{ $toUpper: "Chicken Open-architected" },"asynchronous SMS New York",'$obj.obj.str','$$this']],useLongestLength: true,defaults: [false]} } },'$$this'],[]] },{ $arrayToObject: [[['$$this'],['$str',{ $trim: {input: "FTP",chars: "Identity Fresh"} }],[]]] },9] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account",v: '$obj.obj.num'},{k: "Executive",v: false}]] }, _id: 0}}],

        [{$project: {a: { $toString: { $ltrim: {input: "JBOD navigating",chars: '$obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[95050],{ $multiply: [96175] }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],38720] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Unbranded ubiquitous",v: "Plastic Assurance"},{k: "Refined Plastic Soap",v: false},{k: "withdrawal neural Shoes",v: new Date("2018-09-06T14:27:34.248Z")},{k: "bluetooth",v: '$obj.obj.num'},{k: "neural scale Garden",v: false}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $mod: [69107,'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.str'],['$obj.obj.obj.num'],[{ $rtrim: {input: "Soft Multi-lateral sensor",chars: "Pants overriding"} },"Concrete Kids Cambridgeshire",{ $substr: ['$obj.str',15,0] },{ $toString: { $dayOfWeek: { $second: { $isoWeek: { $dateToParts: {date: { $year: { $toDate: { $range: [10,3] } } },iso8601: true} } } } } }]]] }, _id: 0}}],

        [{$project: {a: { $range: [9,11,15] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.str',chars: { $concat: ['$obj.obj.obj.str',{ $trim: { input: "bus" } }] }} }, _id: 0}}],

        [{$project: {a: { $range: [1,11,4] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num',51874],[],[{ $toString: { $dateToString: {date: '$obj.obj.obj.date',format: "%V-%L-%U-%Y-%Z-%z-%M-%Y-%U-%d",timezone: "Pacific/Midway",onNull: '$obj.obj.str'} } },"Pizza Kids",'$str',"calculate",{ $substrBytes: [{ $toUpper: { $trim: { input: '$obj.obj.str' } } },15,13] },'$obj.obj.str'],["Michigan"],[],[],['$obj.obj.obj.num','$num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[85835],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',30663],[],[],["Accountability Plastic eco-centric",'$obj.num'],['$str',"Lead",{ $toUpper: { $substrCP: ['$str',8,17] } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[56235,'$num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.obj.obj.num',88911,{ $add: [] },88712],[{ $substr: ['$obj.str',20,20] }],[],["Sleek Spring",{ $trim: {input: "back-end",chars: '$obj.obj.obj.str'} }]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: '$obj.date',format: "%H-%U-%M-%m",timezone: "Asia/Aqtau"} }],55265] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$num'],[],["Harbor utilize","Steel Incredible"],[],[80456]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$obj.obj.obj.num',85151,{ $exp: 88074 },'$obj.obj.obj.num'],33755] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.num','$obj.obj.num',86989],[],[]],defaults: [{}]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],89679] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: { date: new Date("2018-09-05T21:26:46.832Z") } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',timezone: "America/Managua",onNull: { $substr: [{ $toString: { $arrayElemAt: [["Personal Loan Account Markets","transform"],'$obj.num'] } },3,20] }} }, _id: 0}}],

        [{$project: {a: { $year: { $dateToParts: {date: { $isoWeekYear: { $second: { $dayOfMonth: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T01:05:01.949Z",format: "%U-%m-%u-%Y-%V-%H-%V-%M-%Y",onError: { $range: [6,18] },onNull: { $dateToParts: { date: { $dateFromParts: {year: { $floor: '$num' },month: 42772,day: { $indexOfArray: [{ $zip: { inputs: [[],[97387,'$obj.num'],[],[]] } },{ $dateToString: {date: { $minute: { $dateToParts: {date: { $month: { $dayOfWeek: { $dayOfMonth: { $minute: { $isoWeek: { $dayOfMonth: { $week: { $week: { $dateFromString: {dateString: "2018-09-06T09:31:38.173Z",onNull: { $arrayElemAt: [[{ $concat: ["transmitting"] },'$str',"Buckinghamshire"],97196] }} } } } } } } } } },timezone: "Antarctica/Troll",iso8601: false} } },format: "%m-%V-%M-%j-%j-%V-%V-%L-%Z-%u",timezone: "Canada/Yukon"} },0] },minute: { $trunc: '$obj.obj.num' },timezone: "America/Montevideo"} } } }} } } } } },iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["robust"],[],['$obj.str',{ $toUpper: "Branch Assurance" },"primary Digitized Singapore",{ $concat: [] }]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$str'],as: 'jorge',cond: true} }, _id: 0}}],

        [{$project: {a: { $toUpper: { $ltrim: { input: '$obj.obj.str' } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T04:41:08.305Z"),timezone: "America/Managua"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'sidney',cond: { $lte: [{ $second: '$$sidney' },{ $arrayElemAt: [["pixel",{ $substrBytes: [{ $dateToString: {date: { $dayOfMonth: { $isoDayOfWeek: { $isoWeek: { $hour: { $dayOfWeek: { $dateToParts: {date: { $second: { $minute: { $week: { $week: { $dateToParts: {date: { $toDate: { $toUpper: '$$sidney' } },iso8601: false} } } } } },timezone: "America/North_Dakota/Beulah",iso8601: true} } } } } } },timezone: "America/Recife",onNull: { $arrayToObject: [[{k: "Handcrafted users Tasty Concrete Towels",v: '$$sidney'}]] }} },6,7] }],'$num'] }] }} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T06:22:26.905Z",timezone: "Iceland"} } } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[85349,1658],["sensor Cayman Islands Dollar","FTP"],[],[{ $substrBytes: ['$str',10,3] }]] } }, _id: 0}}],

        [{$project: {a: { $second: { $hour: { $dayOfMonth: { $dayOfMonth: { $dayOfYear: { $dayOfWeek: { $minute: { $toDate: { $zip: {inputs: [[],['$obj.num','$obj.obj.obj.num']],useLongestLength: false,defaults: ["Faroe Islands open-source Cambridgeshire",{ num: 67963 },true]} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: [] },'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],[new Date("2018-09-06T05:19:53.445Z")],['$num',50100],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "array",v: { $rtrim: { input: '$obj.str' } }},{k: "Bosnia and Herzegovina Forest Practical Fresh Shirt",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $and: [36065,{ $abs: '$num' }] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [12975,'$num','$obj.obj.num'],cond: { $eq: [{ $dateToString: {date: new Date("2018-09-06T16:34:22.021Z"),format: "%%-%Z-%U-%S-%G-%Z-%w-%j-%z-%u-%m",timezone: "Europe/Paris"} },{ $arrayElemAt: [[{ $concat: [] }],61009] }] }} }, _id: 0}}],

        [{$project: {a: { $range: [1,8,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[8671,1162],36791] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $toString: { $arrayToObject: [[{k: "reboot Buckinghamshire Fantastic Plastic Shoes",v: new Date("2018-09-06T19:35:52.894Z")}]] } },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $log10: 41877 },48017],['$obj.str',{ $trim: { input: { $substrCP: [{ $substrBytes: ['$obj.obj.obj.str',10,5] },9,13] } } }],[],['$obj.obj.obj.num',95951],[true,"neural"],[{ $toString: { $arrayElemAt: [['$num','$obj.obj.num'],2548] } },"Tuna Wisconsin","Frozen Norway Tunisian Dinar"],[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Buckinghamshire",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["deposit explicit New Leu"],'$num'] }, _id: 0}}],

        [{$project: {a: { $second: { $hour: { $dayOfMonth: { $isoWeek: { $year: { $dateFromParts: {isoWeekYear: { $ln: '$obj.num' },isoDayOfWeek: { $multiply: [] },hour: { $subtract: [6388,48107] },millisecond: { $size: [[29326]] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: { $dateToString: { date: new Date("2018-09-06T02:57:39.783Z") } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str',"action-items",{ $substrBytes: ['$obj.obj.str',5,9] }],cond: { $lt: [{ $month: { $dayOfWeek: { $second: { $year: { $minute: { $isoDayOfWeek: { $isoWeek: { $dayOfYear: { $week: { $dateToString: {date: '$$this',format: "%V-%w-%U-%L-%S",timezone: "Europe/Helsinki",onNull: { $substr: ["Cambridgeshire copy calculate",3,18] }} } } } } } } } } } },{ $arrayElemAt: [[{ $concat: ['$$this',"Unbranded Ball Checking Account"] }],'$obj.obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $ltrim: {input: '$obj.obj.str',chars: '$str'} },"compressing neural Metal"],as: 'hettie',in: { $trunc: 87799 }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[55977]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $rtrim: { input: "impactful" } } }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: new Date("2018-09-05T23:54:15.021Z"),format: "%H-%%-%u-%G-%%-%j-%j-%w-%V-%u",onNull: { $toLower: "Plastic Virtual" }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $concatArrays: [[],['$obj.str',"Jewelery","Rubber"],['$obj.obj.obj.str',{ $ltrim: { input: "Investment Account Ball" } }],[],['$obj.obj.num']] } }],[],[],[86509,'$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$num'],cond: { $eq: [{ $filter: {input: [],as: 'sylvester',cond: { $not: [{ $arrayElemAt: [["Technician quantify transform"],{ $log10: { $sqrt: 54957 } }] }] }} },{ $arrayToObject: [[["Practical Soft Car Personal Loan Account",{ $toUpper: '$$this' },'$$this','$$this'],[{ $toString: { $minute: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T10:50:35.895Z",timezone: "America/Noronha"} } } } },{ $dateToString: {date: '$$this',format: "%H-%m-%Z-%z-%G-%S",onNull: { $toDate: { $toLower: { $substr: ["Walk back up",3,9] } } }} }],[true]]] }] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],['$obj.obj.str'],['$obj.obj.obj.str',{ $ltrim: {input: '$obj.obj.str',chars: "cross-platform"} }]],defaults: [new Date("2018-09-06T07:08:27.334Z"),/^Hawaii/]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Ethiopian Birr white integrate",v: "solid state Uruguay Chair"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',95506],'$num'] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $concat: ['$obj.obj.obj.str'] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T11:02:50.437Z"),format: "%H-%Z-%U-%M-%M-%m",timezone: "America/Tegucigalpa"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toUpper: '$obj.str' }],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:56:38.322Z"),timezone: "Europe/Stockholm"} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoDayOfWeek: { $hour: { $dayOfMonth: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $divide: ['$obj.num',54322] },isoWeek: { $sqrt: '$obj.obj.obj.num' },hour: { $cmp: [{ $arrayToObject: [[[21776]]] },{ $range: [4,11,16] }] },timezone: "Asia/Ashgabat"} },timezone: "America/Dominica"} } } } } }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ["Refined red Planner",{ $concat: ["architecture microchip"] }] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromString: {dateString: "2018-09-06T12:51:21.642Z",onNull: { $dateFromString: {dateString: "2018-09-06T01:12:13.497Z",format: "%H-%U-%L-%d-%%-%Y-%Y-%%-%m",timezone: "Africa/Juba",onError: { $arrayElemAt: [[{ $substrBytes: [{ $substrCP: ['$obj.obj.obj.str',11,1] },7,1] },'$obj.obj.str'],'$num'] }} }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Walk indexing"],[],[{ $ltrim: {input: '$obj.obj.str',chars: '$obj.obj.obj.str'} },"Consultant front-end Credit Card Account",{ $toUpper: "non-volatile calculating" }]]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T11:23:04.885Z" } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrCP: ["navigate Identity",9,4] },'$obj.str'],cond: false} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $second: { $year: { $dateToString: {date: '$date',timezone: "America/Boa_Vista",onNull: { $toUpper: { $substrBytes: ["Automotive",8,5] } }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $size: [["collaborative"]] },50463],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfWeek: { $dayOfYear: { $isoWeekYear: '$obj.obj.date' } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "visualize",v: 20240}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ["Open-architected Montana",18,5] },"24 hour Quality",'$obj.str'],[],['$str',{ $trim: { input: "Knoll payment Virgin Islands, U.S." } }]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoDayOfWeek: { $dayOfWeek: { $hour: { $dateFromString: {dateString: "2018-09-06T07:46:47.656Z",format: "%L-%U-%u-%w-%w-%S-%M",timezone: "US/Arizona"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[{ $ltrim: { input: '$obj.str' } }],['$str'],["lime Drive"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transmitting International",v: '$date'},{k: "Bedfordshire Incredible Licensed Metal Chicken",v: 30993},{k: "Configurable seize",v: true}]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $dayOfWeek: { $dateToParts: {date: { $dateToParts: {date: { $dateFromParts: {year: { $abs: 98495 },day: '$obj.obj.obj.num',second: { $ceil: 30539 },millisecond: { $log10: '$obj.obj.num' }} },timezone: "Pacific/Fakaofo"} },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["Investment Account Stravenue AGP",3,5] },{ $trim: { input: '$str' } }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num','$obj.obj.obj.num'],cond: { $gt: [{ $map: {input: [{ $abs: '$num' },71180],as: 'berniece',in: { $abs: 85755 }} },'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: '$str' } },{ $trim: {input: '$obj.str',chars: "Personal Loan Account challenge"} }],36336] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',62239],["empower e-tailers Rubber"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Barbados Dollar Plains synthesizing"],44202] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Shoes"],[],['$obj.str','$str'],[{ $rtrim: {input: { $toUpper: { $rtrim: {input: "back-end",chars: "firewall connect Soft"} } },chars: '$obj.obj.obj.str'} }]]] }, _id: 0}}],

        [{$project: {a: { $range: [6,8,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],2268] }, _id: 0}}],

        [{$project: {a: { $range: [11,20,3] }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $range: [1,17,19] },{ $millesecond: { $minute: { $hour: { $hour: { $year: { $dayOfWeek: { $isoWeekYear: { $dateToParts: { date: { $isoWeek: { $week: { $isoWeek: { $toDate: { $arrayElemAt: [['$obj.obj.str'],'$obj.num'] } } } } } } } } } } } } } },6] },minute: { $size: [[]] },second: 91120,millisecond: { $indexOfArray: [{ $reverseArray: [[{ $multiply: [47665,'$obj.obj.obj.num','$obj.num'] }]] },{ $arrayToObject: [[['$obj.obj.obj.str'],[{ $substr: ["Bedfordshire tan Czech Republic",2,15] },"web-enabled Ergonomic Fresh Mouse Gorgeous"],['$obj.date',{ $substrBytes: [{ $ltrim: {input: '$obj.obj.str',chars: { $dateToString: {date: '$obj.date',timezone: "Africa/Porto-Novo",onNull: { $arrayElemAt: [[],90275] }} }} },2,1] }],['$obj.obj.obj.num']]] },2] }} } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $or: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["supply-chains hack Rustic Rubber Chair",{ $toUpper: '$str' },'$obj.obj.str'],11997] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "capacity",v: 39363}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'rasheed',cond: { $and: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Future",v: '$obj.obj.obj.str'},{k: "Senior orange",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toUpper: '$obj.obj.str' },chars: "Diverse National"} }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "24/7 Samoa Personal Loan Account",v: '$num'}]] } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substrCP: ['$str',20,7] } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $eq: [{ $arrayElemAt: [[{ $toString: { $zip: { inputs: [['$obj.obj.obj.num','$$this'],["Manager Frozen",'$obj.str'],["Cotton Granite Home Loan Account",'$$this',"alarm mission-critical",{ $toLower: { $toUpper: '$obj.obj.str' } },'$$this'],[new Date("2018-09-06T01:33:55.852Z"),{ $week: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $map: {input: [],as: 'kiel',in: { $indexOfArray: [{ $concatArrays: [[]] },{ $substrBytes: ['$$this',20,14] },20] }} },{ $dateToString: {date: { $isoWeekYear: { $dayOfYear: { $dayOfWeek: { $month: new Date("2018-09-06T16:40:17.567Z") } } } },timezone: "Australia/Hobart"} },4] },isoDayOfWeek: { $mod: [49371,83659] },minute: { $trunc: 67410 },second: { $ln: { $sqrt: 28284 } }} } }],[]] } } }],'$$this'] },{ $dateToParts: {date: { $dateToString: {date: '$obj.obj.obj.date',format: "%Z-%u-%G-%d-%L-%%-%Z-%m"} },timezone: "America/Araguaina"} }] }} }, _id: 0}}],

        [{$project: {a: { $substr: ["Refined",15,0] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfYear: new Date("2018-09-05T21:50:58.308Z") } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T06:37:42.709Z",format: "%S-%U-%V-%j",timezone: "Africa/Dakar"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[{ $concat: ['$str',"Refined"] }],["Engineer compressing",'$obj.obj.obj.str'],[84661]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfYear: { $dateToParts: {date: { $week: { $month: { $dateToString: {date: '$obj.date',onNull: { $ltrim: {input: '$obj.obj.str',chars: "Lead"} }} } } },timezone: "America/Argentina/Tucuman"} } },format: "%G-%z-%Y-%U-%M-%%-%S-%H-%u",onNull: { $substr: ["withdrawal payment",15,2] }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $multiply: [81044] },minute: { $mod: ['$obj.obj.num','$obj.obj.num'] },second: { $abs: 76503 }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $trim: {input: { $toUpper: "Awesome Shoes" },chars: { $rtrim: { input: '$obj.str' } }} },10,10] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["port",2,20] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfMonth: { $dateFromParts: {year: '$obj.obj.num',hour: { $mod: [26592,38038] },second: { $indexOfArray: [{ $reverseArray: [["grey Cambridgeshire compressing"]] },{ $arrayToObject: [[[{ $log10: '$num' }],[{ $rtrim: {input: '$str',chars: { $substrBytes: ['$obj.str',9,5] }} },"monitor Supervisor"],[{ $indexOfArray: [{ $range: [15,7] },{ $arrayElemAt: [[{ $concat: [] },"Fantastic Wooden Salad gold"],'$obj.num'] },15] },3392],[]]] },13] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "HDD payment whiteboard" }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: ["deliverables harness",2,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "clear-thinking",v: { $substr: ["Keyboard Connecticut Home",11,14] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "holistic Gorgeous Steel Shoes Ergonomic Rubber Pizza",v: false},{k: "Cambridgeshire Borders",v: false},{k: "Upgradable ROI",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trim: {input: '$str',chars: { $rtrim: {input: "Tasty Cotton Chair invoice Auto Loan Account",chars: { $toString: { $trim: { input: '$obj.obj.str' } } }} }} }],[],[23754],[]]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "Realigned",v: new Date("2018-09-06T17:01:43.398Z")},{k: "sky blue parsing",v: '$obj.obj.obj.num'}]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],19336] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeek: { $minute: { $minute: { $dayOfYear: { $millesecond: { $hour: { $hour: { $isoWeekYear: { $dayOfWeek: { $month: { $dayOfYear: { $isoDayOfWeek: { $hour: { $second: { $dayOfWeek: new Date("2018-09-06T19:26:19.225Z") } } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Officer"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toUpper: '$obj.obj.str' },chars: { $substrCP: ["architectures Thailand",6,9] }} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $minute: { $minute: { $dateToParts: {date: { $millesecond: { $dayOfYear: { $isoDayOfWeek: { $minute: { $dateFromParts: {isoWeekYear: { $divide: ['$obj.num',2787] },isoWeek: { $pow: ['$obj.obj.num','$num'] },isoDayOfWeek: { $cmp: [{ $arrayToObject: [[{k: "Checking Account clicks-and-mortar",v: 6018},{k: "input Buckinghamshire",v: { $pow: ['$obj.obj.obj.num',34101] }}]] },{ $toDate: { $arrayElemAt: [[],{ $abs: '$obj.num' }] } }] },second: { $trunc: 56531 }} } } } } },timezone: "America/Vancouver",iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [["overriding end-to-end Associate"],['$obj.obj.num','$obj.obj.num',53756,'$num','$obj.num'],[],[58370]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[73972],[{ $concat: ['$obj.obj.str',"standardization"] },{ $toLower: { $substrCP: ["Automotive Berkshire back up",4,17] } },'$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[86679],['$str',"parse invoice copy"],['$obj.obj.obj.str',{ $rtrim: {input: { $trim: { input: "structure Finland microchip" } },chars: { $toLower: "connecting Extended" }} }],['$obj.obj.obj.num','$obj.obj.obj.num'],[],['$obj.obj.obj.str',"port 24/365 salmon"],[],[]] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[true,true,'$obj.obj.date']]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:28:40.547Z"),format: "%w-%Y-%u-%S-%M-%j-%%-%G-%w-%L"} }, _id: 0}}],

        [{$project: {a: { $week: { $isoDayOfWeek: { $dayOfMonth: { $isoDayOfWeek: { $isoWeekYear: { $hour: '$obj.obj.obj.date' } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $eq: [{ $concatArrays: [] },{ $arrayElemAt: [['$$this',86210,{ $pow: ['$obj.num',71082] },{ $multiply: [] }],'$$this'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num',72388],["Movies dot-com Gorgeous Fresh Shirt",{ $substrBytes: ["value-added compress application",0,1] }],['$str',{ $toString: { $arrayElemAt: [['$obj.obj.obj.num'],97108] } }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $dateToString: {date: { $second: { $dateToParts: {date: { $isoWeekYear: { $year: { $dayOfMonth: { $dayOfWeek: { $hour: { $week: { $millesecond: { $isoDayOfWeek: { $toDate: { $map: {input: [],in: { $ln: '$obj.obj.num' }} } } } } } } } } } },timezone: "America/Campo_Grande",iso8601: true} } },format: "%m-%z-%z-%u-%M-%G",timezone: "Europe/Volgograd"} } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $month: { $isoDayOfWeek: { $minute: { $month: { $week: { $second: new Date("2018-09-06T02:11:41.006Z") } } } } } },iso8601: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: "convergence Peso Uruguayo Uruguay Peso en Unidades Indexadas Checking Account",chars: '$obj.obj.str'} },"Sleek Plastic Keyboard Phased",{ $toString: { $isoWeekYear: { $minute: { $toDate: { $substrBytes: ['$str',7,2] } } } } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T17:30:31.067Z"),format: "%V-%V-%S-%H-%j",timezone: "America/Indiana/Knox"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],47699] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $dateFromString: {dateString: "2018-09-06T18:55:44.441Z",format: "%L-%z-%Y-%H-%z-%L-%S-%Y-%V-%w-%j",timezone: "Australia/Brisbane",onError: { $concat: ["Brand Marketing",{ $dateToString: { date: { $dateToParts: {date: { $isoDayOfWeek: { $hour: { $minute: new Date("2018-09-06T18:38:54.872Z") } } },iso8601: false} } } }] },onNull: { $arrayElemAt: [[],'$num'] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Azerbaijanian Manat",v: false},{k: "digital Practical Bedfordshire",v: false},{k: "Assistant Isle of Man TCP",v: 98897}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Licensed connecting SAS"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[],[{ $toUpper: "California Computer" },"invoice intermediate"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Auto Loan Account",{ $ltrim: { input: { $substr: ["Borders",16,5] } } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $substr: ["Producer enable Director",0,4] },19,17] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],97575] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $concat: [{ $dateToString: {date: '$date',timezone: "Asia/Dhaka"} }] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num','$obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.str'],["pink","Small azure alarm",{ $substrBytes: [{ $substr: [{ $toUpper: '$str' },10,10] },20,8] },'$obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $toUpper: "Fresh salmon synthesizing" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[7528],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [44845,31255,'$num'],cond: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $substrBytes: [{ $concat: ['$obj.obj.str',"invoice Music 1080p","Garden circuit",{ $concat: [] },"Buckinghamshire Practical Rubber Shoes Latvia"] },18,11] } }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num','$num',16325]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fresh cross-media gold",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[36203,'$obj.num'],[{ $substr: [{ $concat: ['$obj.obj.obj.str',"extend"] },4,7] },'$obj.str'],[82954]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $dateToString: {date: new Date("2018-09-06T16:23:16.722Z"),timezone: "America/Winnipeg"} },chars: { $ltrim: { input: "compressing" } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[8911],[{ $trim: {input: '$obj.obj.str',chars: "Street Unbranded"} }],[],['$obj.num','$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[1380],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "info-mediaries Computers",v: true},{k: "Fresh Credit Card Account Research",v: { $rtrim: { input: "Chief Practical" } }}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfYear: { $second: { $year: { $isoDayOfWeek: { $month: { $millesecond: { $year: { $dateFromString: {dateString: "2018-09-05T20:49:20.087Z",onError: { $arrayElemAt: [[],89088] },onNull: { $reverseArray: [['$obj.num','$num']] }} } } } } } } } } }, _id: 0}}],

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
