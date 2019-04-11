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
        return coll.insert({_id: 26303,str: "Tools indigo transmitter",num: 15995,date: new Date("2018-09-06T19:22:00.858Z"),array: [21228,8073,"National Buckinghamshire",new Date("2018-09-06T07:03:50.539Z"),{_id: 26304,num: 21745,date: new Date("2018-09-06T13:42:02.753Z"),array: [],obj: {_id: 26305,str: "firewall",num: 98299,date: new Date("2018-09-06T05:17:12.066Z"),array: [],obj: {_id: 26306,str: "Parkway Research",num: 19231,date: new Date("2018-09-06T01:03:14.254Z"),array: [],obj: {}}}},{_id: 26307,str: "utilize India Orchestrator",array: []},new Date("2018-09-06T06:11:07.057Z"),"Tasty connect networks"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26308,str: "Data bus disintermediate",num: 41059,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26309,str: "Pizza",num: 24657,date: new Date("2018-09-06T15:17:19.586Z"),array: [27027,46771,73567,"Customer Ergonomic Maine",new Date("2018-09-05T22:20:45.843Z"),{_id: 26310,num: 16157,date: new Date("2018-09-06T19:01:14.052Z"),array: [],obj: {}},{_id: 26311,str: "parse Kids methodologies",num: 57479,array: ["invoice",83242,[]],obj: {_id: 26312,str: "unleash Architect Integration",num: 51847,date: new Date("2018-09-06T04:10:29.266Z"),array: ["navigate",[54375,"Colorado"]],obj: {_id: 26313,str: "New Mexico web services Macedonia",date: new Date("2018-09-06T15:01:05.447Z")}}},new Date("2018-09-06T09:11:58.439Z"),new Date("2018-09-06T13:42:24.142Z"),90365,{_id: 26314,date: new Date("2018-09-05T20:56:57.684Z"),obj: {}},"auxiliary",[]]});
    },

    function(coll) {
        return coll.insert({_id: 26315,str: "parsing RSS",num: 42007,date: new Date("2018-09-06T15:07:59.458Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 26316,str: "Iceland Krona SAS Radial",date: new Date("2018-09-06T15:14:08.069Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26317,num: 31669,date: new Date("2018-09-06T19:54:33.463Z"),array: [],obj: {_id: 26318,str: "Industrial",num: 55507,date: new Date("2018-09-06T13:25:19.411Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26319,str: "payment Refined Steel Sausages",num: 88955,array: [88907,"human-resource parsing cultivate",new Date("2018-09-06T06:37:12.341Z"),81711,78049,new Date("2018-09-06T16:39:03.656Z"),[],"pink ivory aggregate",61546],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26320,str: "non-volatile",num: 47281,date: new Date("2018-09-06T09:05:06.890Z"),array: [],obj: {_id: 26321,num: 95775,date: new Date("2018-09-06T17:35:34.545Z"),array: [new Date("2018-09-05T23:49:10.436Z"),"partnerships niches Creative",88861,["invoice Checking Account ADP"],"methodical exploit Mews",new Date("2018-09-06T02:53:10.809Z"),21076,[],"navigate reboot Towels",new Date("2018-09-06T19:08:50.101Z"),{_id: 26322,str: "Dynamic Analyst",num: 78333,date: new Date("2018-09-06T04:10:01.141Z")},99501],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26323,str: "Faroe Islands Response Cross-group",num: 73891,date: new Date("2018-09-05T22:48:39.399Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26324,str: "payment recontextualize",num: 86559,array: [],obj: {_id: 26325,str: "Open-architected experiences Branch",num: 65259,date: new Date("2018-09-06T02:09:22.121Z"),array: ["Cove Checking Account calculating","neutral Awesome Granite Bacon ROI",new Date("2018-09-06T16:22:45.060Z"),20772,new Date("2018-09-06T06:27:47.379Z"),61519,new Date("2018-09-06T12:43:28.344Z"),"purple Home Loan Account radical",{_id: 26326,str: "Operations Iowa generate",date: new Date("2018-09-06T18:11:10.575Z"),obj: {}},23703,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 26327,str: "Checking Account 24/365 Communications",num: 19936,array: [new Date("2018-09-06T17:20:23.978Z"),93595,43468,84904,"Nauru Zambia Bike","blue",96864,new Date("2018-09-06T10:00:05.918Z"),{_id: 26328,str: "Associate",num: 43206,date: new Date("2018-09-06T05:30:53.619Z"),array: [[],"deposit Metal",new Date("2018-09-06T03:10:39.038Z")],obj: {}},new Date("2018-09-06T02:38:20.630Z"),"CSS Bike Unbranded",47960],obj: {_id: 26329,str: "Steel",num: 43524,date: new Date("2018-09-06T06:48:48.634Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26330,str: "Credit Card Account infomediaries",num: 16162,date: new Date("2018-09-06T15:29:24.290Z"),obj: {_id: 26331,str: "maximize interfaces Lilangeni",num: 9679,date: new Date("2018-09-06T04:19:48.664Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26332,str: "Designer input Gorgeous",num: 58653,date: new Date("2018-09-06T01:21:32.266Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26333,str: "array",num: 33039,date: new Date("2018-09-06T11:04:21.807Z"),array: [],obj: {_id: 26334,str: "index open system",num: 75612,date: new Date("2018-09-06T16:12:35.411Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26335,str: "Persistent Developer",num: 28687,date: new Date("2018-09-06T09:38:40.943Z"),array: [new Date("2018-09-06T11:45:44.134Z"),{_id: 26336,str: "lime Analyst Tennessee",num: 60469,date: new Date("2018-09-05T23:09:04.483Z"),array: ["JSON Meadows East Caribbean Dollar",90077,"optimize",new Date("2018-09-06T09:14:11.313Z")],obj: {_id: 26337,str: "Gorgeous Branding",num: 6636,date: new Date("2018-09-05T23:12:27.186Z"),array: ["Auto Loan Account Chair"],obj: {}}},68293,"Avon Accountability Handcrafted Fresh Hat",new Date("2018-09-05T20:56:39.218Z"),64781,43989,[],[],[],{_id: 26338,str: "generating supply-chains",num: 34649}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26339,str: "Cliff deposit",num: 11897,date: new Date("2018-09-06T13:59:14.976Z"),array: [99833,59305,"Frozen Sausages",new Date("2018-09-06T18:56:45.164Z"),{_id: 26340,num: 50865,date: new Date("2018-09-06T11:56:21.953Z"),array: [],obj: {}},new Date("2018-09-05T23:47:53.873Z"),"Savings Account firewall 1080p","payment override",64649,{_id: 26341,str: "Kentucky proactive",date: new Date("2018-09-06T13:50:49.743Z"),array: []},["Handcrafted Liechtenstein Customer"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26342,str: "navigating Home Loan Account",num: 3576,date: new Date("2018-09-06T16:13:50.139Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26343,str: "Keyboard Auto Loan Account",num: 24776,date: new Date("2018-09-06T09:29:46.989Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26344,str: "New Mexico world-class Tunnel",num: 89243,date: new Date("2018-09-06T07:58:54.243Z"),obj: {_id: 26345,str: "unleash Applications Buckinghamshire",date: new Date("2018-09-05T23:04:05.135Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26346,str: "capacity Branding e-markets",num: 38988,date: new Date("2018-09-06T11:27:26.799Z"),array: [98086,new Date("2018-09-06T14:48:05.066Z"),"Toys Togo Devolved","Architect",new Date("2018-09-06T08:47:15.683Z"),new Date("2018-09-06T09:36:07.824Z"),5824,new Date("2018-09-06T02:05:18.356Z"),"RSS",[],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26347,str: "eyeballs Senior",date: new Date("2018-09-05T21:56:33.124Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26348,str: "digital Division Kids",num: 11347,date: new Date("2018-09-06T01:41:27.319Z"),array: [],obj: {_id: 26349,str: "South Carolina North Carolina Bahamas",date: new Date("2018-09-06T14:58:02.490Z"),array: [],obj: {_id: 26350,str: "attitude-oriented auxiliary withdrawal",num: 28367,date: new Date("2018-09-06T08:01:35.695Z"),array: [[new Date("2018-09-06T12:47:50.274Z"),"Movies JSON bus"],["Executive",new Date("2018-09-06T13:51:46.506Z"),71471],54498,77608,new Date("2018-09-06T04:40:30.557Z"),"Dobra","algorithm Savings Account",[75168],new Date("2018-09-06T07:08:37.658Z"),79520,{_id: 26351,str: "Corner optical Mississippi",num: 52487,date: new Date("2018-09-06T14:58:30.322Z"),array: [],obj: {}},46441]}}});
    },

    function(coll) {
        return coll.insert({_id: 26352,str: "Pizza",num: 19232,date: new Date("2018-09-06T03:54:56.639Z"),array: [new Date("2018-09-06T12:21:59.117Z"),"Engineer system",{_id: 26353,str: "convergence Customer",num: 49077,date: new Date("2018-09-06T02:27:14.921Z"),array: [97074],obj: {}},new Date("2018-09-06T16:55:27.746Z"),"New Mexico",91254,new Date("2018-09-06T08:46:30.467Z"),new Date("2018-09-06T19:27:35.840Z"),"neural best-of-breed",[],[91597,"Gloves",24792,"incentivize Sleek Cotton Shoes matrix"],77937,40551],obj: {_id: 26354,str: "strategic",num: 5239,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26355,str: "Face to face Buckinghamshire",num: 37258,date: new Date("2018-09-06T14:55:13.130Z"),array: [],obj: {_id: 26356,str: "Rustic",num: 87193,date: new Date("2018-09-06T18:44:24.877Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26357,str: "Bedfordshire Squares Cheese",num: 41339,date: new Date("2018-09-05T23:59:26.283Z"),array: [{_id: 26358,str: "calculate",num: 64372,date: new Date("2018-09-06T12:37:40.711Z"),obj: {_id: 26359,str: "purple Sri Lanka CSS",num: 32718,date: new Date("2018-09-06T07:39:03.809Z"),array: ["Automotive help-desk",94517,new Date("2018-09-06T10:25:11.389Z"),48263,"Keyboard EXE Intelligent",[],"24/365 Checking Account online"],obj: {}}},{_id: 26360,str: "overriding Alabama",date: new Date("2018-09-05T23:14:07.501Z"),array: [],obj: {}},new Date("2018-09-06T16:54:19.749Z"),new Date("2018-09-06T08:35:51.887Z"),{_id: 26361,date: new Date("2018-09-06T12:12:45.104Z"),array: [66574,"multimedia Way","Lithuanian Litas",new Date("2018-09-06T11:32:47.535Z")]},[],new Date("2018-09-06T06:03:47.780Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26362,str: "Gorgeous Movies",num: 34762,array: [],obj: {_id: 26363,str: "Analyst e-services Metrics",num: 9923,date: new Date("2018-09-06T15:38:07.418Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26364,str: "quantify bypassing orchestrate",num: 17811,date: new Date("2018-09-06T01:20:59.437Z"),array: [{_id: 26365,str: "Frozen 5th generation",num: 57289,date: new Date("2018-09-06T12:23:15.513Z"),obj: {}},[],new Date("2018-09-05T20:14:51.259Z"),new Date("2018-09-06T07:28:18.309Z"),{_id: 26366,str: "Slovakia (Slovak Republic)",date: new Date("2018-09-06T01:27:54.189Z"),array: [],obj: {_id: 26367,str: "hacking array",num: 12956,date: new Date("2018-09-05T23:53:49.325Z"),array: [[],"directional"],obj: {}}},76475,new Date("2018-09-06T14:30:04.543Z"),"Directives",57609,"Automated",4146,[47090,12862]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26368,str: "invoice",num: 41652,date: new Date("2018-09-06T07:36:54.165Z"),array: [73410,"e-business support HTTP","Unbranded Soft",new Date("2018-09-06T17:43:59.309Z"),[],{_id: 26369,str: "AGP Savings Account",num: 7904,date: new Date("2018-09-06T18:57:01.908Z"),array: [[],{_id: 26370,str: "withdrawal reinvent Extension",num: 44019,date: new Date("2018-09-06T11:00:09.338Z"),array: [],obj: {}},new Date("2018-09-06T00:57:34.156Z")],obj: {}},80882,30962,new Date("2018-09-06T16:07:37.342Z"),"Chips Berkshire Wisconsin",51814],obj: {_id: 26371,str: "Antarctica (the territory South of 60 deg S)",array: [new Date("2018-09-06T09:36:17.054Z")],obj: {_id: 26372,str: "payment killer Manager",num: 17828}}});
    },

    function(coll) {
        return coll.insert({_id: 26373,str: "overriding",num: 7304,date: new Date("2018-09-06T13:21:53.247Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26374,str: "hacking",num: 53133,date: new Date("2018-09-06T00:35:06.394Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26375,num: 96082,date: new Date("2018-09-06T17:43:09.920Z"),array: ["networks Hawaii",91338,50984,new Date("2018-09-06T03:21:21.258Z"),80651,"Berkshire systems THX",new Date("2018-09-06T12:34:37.365Z"),66882,"Shoes",[],[[],"overriding"],new Date("2018-09-06T08:37:19.401Z"),{_id: 26376,str: "Future context-sensitive Cedi",num: 61474,array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26377,str: "SCSI Cotton",num: 81135,date: new Date("2018-09-05T22:45:35.114Z"),array: [new Date("2018-09-06T09:32:27.790Z"),32209,"deposit",33575,new Date("2018-09-06T16:24:38.107Z"),[47199,new Date("2018-09-06T18:32:10.479Z"),{_id: 26378,str: "productize Illinois",num: 7651,date: new Date("2018-09-06T01:48:58.111Z"),array: [],obj: {}}],new Date("2018-09-06T00:50:42.216Z"),{_id: 26379,str: "Movies",num: 92868,array: [],obj: {_id: 26380,num: 10808,date: new Date("2018-09-06T03:02:36.361Z"),array: ["Rustic technologies Plastic",{_id: 26381,str: "web-readiness",date: new Date("2018-09-06T13:35:01.416Z"),array: [],obj: {_id: 26382,str: "Credit Card Account Web Savings Account",num: 2066,array: [81082,71089],obj: {}}}]}},"reboot Assistant",new Date("2018-09-05T20:28:53.684Z"),"Home Loan Account Outdoors"],obj: {_id: 26383,date: new Date("2018-09-06T17:44:39.690Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26384,str: "Falkland Islands (Malvinas)",num: 98044,date: new Date("2018-09-06T09:13:07.976Z"),array: [new Date("2018-09-06T05:04:26.721Z"),"synthesize",new Date("2018-09-05T20:13:17.425Z"),{_id: 26385,str: "holistic",num: 51246,date: new Date("2018-09-06T10:00:14.127Z"),array: [{_id: 26386,str: "Cambridgeshire calculate",num: 79092,array: [],obj: {_id: 26387,num: 25259,date: new Date("2018-09-06T19:27:40.866Z"),array: [],obj: {}}},71573]},[],["Cambridgeshire Home Loan Account bandwidth",35622,new Date("2018-09-06T11:20:32.302Z")],"Cheese Lead",72521,new Date("2018-09-06T06:17:04.079Z"),44992,40097,"Central content Steel"],obj: {_id: 26388,num: 93867,date: new Date("2018-09-06T15:29:14.889Z"),array: [new Date("2018-09-05T20:42:32.651Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 26389,str: "overriding",num: 51867,date: new Date("2018-09-05T21:25:08.854Z"),array: [],obj: {_id: 26390,str: "United States Minor Outlying Islands",num: 60957,date: new Date("2018-09-06T13:25:42.974Z"),array: [new Date("2018-09-06T16:10:59.264Z"),99002,"interface hacking e-business",56887,17020,new Date("2018-09-06T01:34:41.114Z"),[{_id: 26391,str: "next generation bypassing",num: 52345,array: [],obj: {_id: 26392,num: 50286,date: new Date("2018-09-06T13:31:56.673Z"),array: []}}],"upward-trending empower fuchsia","violet backing up parse",new Date("2018-09-06T07:07:07.224Z"),new Date("2018-09-06T15:31:08.055Z"),58667,"Borders background Norfolk Island",[{_id: 26393,str: "Rustic granular",date: new Date("2018-09-05T20:17:28.888Z"),obj: {}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 26394,str: "Buckinghamshire French Guiana",num: 5595,date: new Date("2018-09-06T17:26:45.420Z"),array: [],obj: {_id: 26395,str: "input Chair Generic Granite Towels",date: new Date("2018-09-06T16:58:56.853Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26396,str: "salmon Supervisor collaborative",num: 83149,date: new Date("2018-09-06T09:39:59.555Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26397,str: "navigating Fish",num: 40035,date: new Date("2018-09-06T13:53:59.317Z"),array: [],obj: {_id: 26398,str: "Architect back up",num: 82364,array: ["Malaysia high-level Idaho",new Date("2018-09-05T20:45:34.496Z"),[],17109,99510,64951,"transmit Checking Account Synergistic",{_id: 26399,date: new Date("2018-09-05T21:05:45.329Z"),array: [new Date("2018-09-06T12:11:21.782Z"),"Intelligent discrete",{_id: 26400,str: "Strategist Shoes Avon",obj: {}},"Music"]},new Date("2018-09-06T18:27:37.018Z"),"Eritrea microchip"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26401,str: "Kids RSS ROI",num: 18482,date: new Date("2018-09-06T06:01:57.374Z"),array: [66020,"Rhode Island withdrawal repurpose","Product",new Date("2018-09-06T19:29:45.407Z"),64131],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26402,num: 66558,date: new Date("2018-09-06T13:53:19.540Z"),array: [new Date("2018-09-06T14:46:39.591Z"),"paradigms",[],new Date("2018-09-06T15:46:49.516Z"),48011,66662,new Date("2018-09-06T05:44:57.359Z"),39532,"Awesome Rubber Chips bus withdrawal",{_id: 26403,str: "Beauty Designer Refined Rubber Ball",date: new Date("2018-09-06T01:53:59.286Z"),array: [{_id: 26404,str: "Small",num: 95108,date: new Date("2018-09-06T07:59:03.075Z"),array: [],obj: {}}],obj: {_id: 26405,str: "invoice",num: 94956}},"back-end"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26406,str: "Fantastic Buckinghamshire Beauty",num: 41060,date: new Date("2018-09-06T16:25:59.014Z"),array: [[],27256,new Date("2018-09-05T21:04:18.375Z"),{_id: 26407,str: "Granite",num: 63077,date: new Date("2018-09-06T15:43:38.387Z"),array: ["Junctions",new Date("2018-09-06T12:31:42.382Z")],obj: {}},"primary Credit Card Account",16510,{_id: 26408,str: "Belarus",date: new Date("2018-09-06T17:37:21.440Z"),array: [],obj: {}},"Towels",new Date("2018-09-06T06:44:46.537Z"),52464],obj: {_id: 26409,str: "Refined Credit Card Account",num: 4271}});
    },

    function(coll) {
        return coll.insert({_id: 26410,str: "Fantastic recontextualize",num: 91352,date: new Date("2018-09-05T21:11:28.071Z"),array: [],obj: {_id: 26411,str: "Intelligent invoice Personal Loan Account",date: new Date("2018-09-06T18:01:59.196Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26412,str: "platforms",num: 59451,date: new Date("2018-09-06T07:08:45.328Z"),array: [{_id: 26413,str: "Handmade Cotton Keyboard Gibraltar Pound",num: 60553,date: new Date("2018-09-06T09:00:46.899Z"),array: ["Tuvalu payment",new Date("2018-09-06T07:11:35.816Z"),14827,30406,[],new Date("2018-09-06T12:14:20.982Z"),"Port Virgin Islands, U.S.",new Date("2018-09-06T10:27:01.430Z")],obj: {}},new Date("2018-09-06T17:58:45.775Z"),7071,[],[],"Lempira",new Date("2018-09-05T20:45:07.472Z")],obj: {_id: 26414,str: "Pizza Generic",date: new Date("2018-09-06T11:26:10.935Z"),array: [26807],obj: {_id: 26415,str: "microchip",num: 93480,date: new Date("2018-09-06T15:13:17.190Z"),array: [],obj: {_id: 26416,num: 94362,date: new Date("2018-09-05T20:34:06.164Z"),array: [98777]}}}});
    },

    function(coll) {
        return coll.insert({_id: 26417,num: 18949,date: new Date("2018-09-06T09:57:50.042Z"),array: [32232,"Soft 3rd generation Boliviano Mvdol",new Date("2018-09-06T18:01:14.179Z"),"Principal",11486,new Date("2018-09-06T19:04:18.493Z"),new Date("2018-09-06T00:58:44.269Z"),{_id: 26418,str: "Developer",date: new Date("2018-09-06T12:33:31.585Z"),array: [],obj: {_id: 26419,str: "mission-critical Branding Chips",num: 69510,array: [67708,95626,"quantify"],obj: {}}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26420,str: "primary Gateway",num: 39425,date: new Date("2018-09-06T12:20:44.709Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26421,str: "Arkansas Orchestrator",num: 17201,date: new Date("2018-09-06T03:40:52.981Z"),obj: {_id: 26422,str: "Georgia",array: ["composite",new Date("2018-09-06T14:03:17.865Z"),17336,"Personal Loan Account hard drive",new Date("2018-09-06T12:45:47.301Z"),52820,"Spurs non-volatile expedite",{_id: 26423,str: "Grocery teal",num: 74984,date: new Date("2018-09-06T08:10:33.103Z"),array: [],obj: {}},18238,87856,[],"help-desk Island compress"],obj: {_id: 26424,str: "Mouse",num: 47894,date: new Date("2018-09-06T07:16:18.604Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 26425,num: 87504,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26426,str: "virtual Generic Incredible",num: 35288,date: new Date("2018-09-05T22:47:25.441Z"),array: [],obj: {_id: 26427,str: "sky blue New Zealand Buckinghamshire",num: 2751,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26428,num: 31801,date: new Date("2018-09-06T19:52:52.865Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26429,num: 79029,date: new Date("2018-09-06T12:28:14.273Z"),array: [],obj: {_id: 26430,str: "Netherlands revolutionary Small Metal Gloves",num: 95632,date: new Date("2018-09-06T02:59:57.760Z"),array: [2375,12416,new Date("2018-09-06T15:40:36.127Z"),"Licensed Soft Chair Home Loan Account middleware",11772,new Date("2018-09-06T02:58:52.570Z"),70035,97357,{_id: 26431,str: "Dobra programming",date: new Date("2018-09-06T12:00:04.765Z"),obj: {}},"Kenyan Shilling Berkshire empowering"]}});
    },

    function(coll) {
        return coll.insert({_id: 26432,str: "Avon",num: 39914,date: new Date("2018-09-06T19:22:46.166Z"),array: [],obj: {_id: 26433,str: "alarm",num: 30798,date: new Date("2018-09-05T20:10:56.537Z")}});
    },

    function(coll) {
        return coll.insert({_id: 26434,str: "wireless",num: 67564,date: new Date("2018-09-06T04:07:11.928Z"),array: [],obj: {_id: 26435,str: "functionalities",num: 61040,date: new Date("2018-09-06T08:12:16.430Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26436,str: "Tasty Steel Soap wireless deposit",num: 29410,date: new Date("2018-09-06T16:48:15.899Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26437,str: "Fantastic Plastic Pants Valley navigating",num: 12206,date: new Date("2018-09-06T19:45:23.109Z"),array: [{_id: 26438,str: "Orchestrator",date: new Date("2018-09-06T16:13:54.197Z"),array: []},new Date("2018-09-05T21:53:13.972Z"),55665,new Date("2018-09-06T01:54:40.117Z"),"Generic magnetic convergence",59234,new Date("2018-09-06T00:23:20.393Z"),new Date("2018-09-06T17:07:26.011Z"),["Saint Martin"],{_id: 26439,str: "Shirt Junctions Australian Dollar",num: 80324,date: new Date("2018-09-05T22:25:16.397Z"),array: [],obj: {}},31933,"B2B"]});
    },

    function(coll) {
        return coll.insert({_id: 26440,str: "Iranian Rial Steel Cambridgeshire",num: 78659,date: new Date("2018-09-06T03:02:13.484Z"),array: [],obj: {_id: 26441,str: "Integration wireless",num: 17422,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26442,str: "heuristic cross-platform Tasty",num: 72096,date: new Date("2018-09-06T15:04:03.307Z"),array: [],obj: {_id: 26443,num: 37081,array: [new Date("2018-09-06T13:05:39.728Z"),"Planner Lead","redundant",69102,"Avon Savings Account",new Date("2018-09-06T08:21:52.559Z"),54104,new Date("2018-09-06T08:28:33.383Z"),new Date("2018-09-06T19:25:07.394Z"),{_id: 26444,str: "Tasty",date: new Date("2018-09-06T09:33:09.755Z"),array: [],obj: {}},[],47824]}});
    },

    function(coll) {
        return coll.insert({_id: 26445,str: "mint green Shoes",num: 78131,date: new Date("2018-09-05T20:54:40.300Z"),array: ["Vatu high-level",[],{_id: 26446,str: "Outdoors Investment Account",num: 14890,array: [],obj: {_id: 26447,str: "Berkshire Philippine Peso",date: new Date("2018-09-05T22:51:05.976Z"),array: [new Date("2018-09-06T14:54:21.313Z"),31305,37641,"generating Tactics",new Date("2018-09-06T16:59:16.575Z"),{_id: 26448,date: new Date("2018-09-06T05:23:04.184Z"),array: [{_id: 26449,str: "COM Loop Concrete",num: 67453,date: new Date("2018-09-06T02:35:12.324Z")}]}],obj: {}}},new Date("2018-09-06T17:18:27.550Z"),74513,"integrated projection Operative","exploit Missouri","optical Accountability Bedfordshire",new Date("2018-09-06T00:09:19.630Z"),"Rustic Steel Avon"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26450,num: 36032,date: new Date("2018-09-06T04:20:30.136Z"),array: [80004,"Gorgeous Cotton Bike",new Date("2018-09-06T06:11:55.124Z"),48904,new Date("2018-09-06T02:07:37.291Z"),{_id: 26451,str: "Solutions e-commerce",num: 49572,date: new Date("2018-09-05T20:42:08.940Z"),array: [],obj: {_id: 26452,str: "Berkshire",num: 1810,date: new Date("2018-09-06T18:32:16.203Z"),array: ["engage"],obj: {}}},new Date("2018-09-06T10:42:48.486Z"),[],new Date("2018-09-05T21:38:48.095Z"),new Date("2018-09-06T03:11:05.269Z"),"matrix lime",new Date("2018-09-06T00:49:52.722Z"),[],72625],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26453,num: 50259,date: new Date("2018-09-06T12:53:01.826Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26454,str: "Shoes",num: 11715,date: new Date("2018-09-06T10:18:38.108Z"),array: [new Date("2018-09-06T11:27:48.803Z"),{_id: 26455,num: 60250,date: new Date("2018-09-06T10:34:11.108Z"),obj: {_id: 26456,str: "Iceland Krona programming Generic",num: 5718,date: new Date("2018-09-06T10:34:48.486Z"),array: [],obj: {}}},new Date("2018-09-06T15:50:39.655Z"),"mobile","parallelism",[],99718,[[],29878,new Date("2018-09-06T17:25:28.159Z")],72043,80993,"innovative deposit",37260],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26457,str: "Cambridgeshire Rubber supply-chains",num: 26871,date: new Date("2018-09-06T15:39:41.112Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26458,str: "envisioneer payment",num: 35568,date: new Date("2018-09-05T20:47:56.862Z"),array: [["extend application",12756,{_id: 26459,str: "invoice Borders",num: 48932,date: new Date("2018-09-06T15:45:46.927Z"),array: [],obj: {_id: 26460,str: "invoice",date: new Date("2018-09-06T01:41:36.250Z"),array: [],obj: {_id: 26461,num: 2053,date: new Date("2018-09-06T05:35:35.415Z")}}},new Date("2018-09-06T10:30:07.077Z"),"California"],[],new Date("2018-09-06T11:08:47.875Z"),77291,[],"Money Market Account Branding plum",42480,"teal sky blue",15364],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26462,str: "Specialist Agent",date: new Date("2018-09-06T19:19:40.310Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26463,str: "incentivize Chips",num: 67088,array: [],obj: {_id: 26464,str: "XSS extensible Indiana",num: 42565,date: new Date("2018-09-06T17:37:54.691Z"),array: [61115,new Date("2018-09-06T17:01:04.868Z"),"neural Product AGP","alarm parsing",new Date("2018-09-05T23:33:40.067Z"),[],new Date("2018-09-05T21:57:47.058Z"),{_id: 26465,str: "generate Technician",num: 41257,date: new Date("2018-09-06T15:28:24.574Z"),array: [new Date("2018-09-06T05:38:51.511Z"),"turquoise intermediate"],obj: {}},43871,30975,{_id: 26466,num: 48884,date: new Date("2018-09-06T01:06:18.841Z"),array: [],obj: {_id: 26467,array: [[]]}},[22229,"Illinois"],"Austria synthesizing",{_id: 26468,str: "Rue",num: 60914,date: new Date("2018-09-06T08:47:29.086Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26469,str: "function",num: 82746,date: new Date("2018-09-06T01:00:21.679Z"),array: [],obj: {_id: 26470,str: "Programmable optical ADP",num: 17925,date: new Date("2018-09-06T15:19:25.339Z"),array: [new Date("2018-09-05T20:11:44.318Z"),"redundant Pass",new Date("2018-09-06T13:12:42.421Z"),"vortals SAS Refined Steel Ball","Central program Optimized",new Date("2018-09-06T02:36:26.271Z"),31756,"Intuitive",80650]}});
    },

    function(coll) {
        return coll.insert({_id: 26471,str: "Frozen Concrete PNG",num: 28062,date: new Date("2018-09-05T21:17:06.000Z"),array: [new Date("2018-09-06T19:08:38.948Z"),new Date("2018-09-06T07:53:16.188Z"),91442,"ADP Officer Mouse",new Date("2018-09-06T05:46:44.360Z"),84339,16805,{_id: 26472,str: "workforce",num: 46312,date: new Date("2018-09-06T03:34:30.441Z"),array: [],obj: {_id: 26473,str: "Infrastructure index",date: new Date("2018-09-05T22:28:24.671Z"),obj: {}}},38082,"compress Technician optical"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26474,str: "Visionary",num: 28083,date: new Date("2018-09-06T17:03:17.818Z"),array: [51991,{_id: 26475,num: 75039,date: new Date("2018-09-05T20:38:09.935Z"),array: [[],"Assistant United Kingdom",27168,78777,new Date("2018-09-06T09:39:01.512Z")]},new Date("2018-09-06T04:49:09.723Z"),{_id: 26476,str: "Cambridgeshire",num: 47815,date: new Date("2018-09-06T14:48:21.210Z"),obj: {}},new Date("2018-09-06T05:51:03.714Z"),"feed Beauty",new Date("2018-09-06T09:39:31.280Z")],obj: {_id: 26477,str: "Practical markets",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26478,str: "silver Guarani",num: 33237,date: new Date("2018-09-06T18:34:38.464Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26479,num: 99716,date: new Date("2018-09-06T06:34:38.088Z"),array: [new Date("2018-09-06T06:26:56.809Z"),new Date("2018-09-05T22:18:03.132Z"),"invoice",35745,"Administrator",{_id: 26480,str: "Texas",num: 39435,date: new Date("2018-09-06T18:50:45.201Z"),array: [],obj: {}},4361,new Date("2018-09-06T13:59:12.467Z"),"fresh-thinking",72687,{_id: 26481,num: 42611,date: new Date("2018-09-06T15:57:27.549Z"),obj: {}},"lavender Investment Account target"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26482,str: "cross-platform Practical Cotton Sausages copy",num: 67141,date: new Date("2018-09-06T09:43:15.016Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26483,str: "Concrete",num: 43124,date: new Date("2018-09-06T15:47:15.909Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 26484,str: "well-modulated",num: 49462,array: [64750,"navigating",[],new Date("2018-09-06T01:21:19.156Z"),"Refined Concrete Hat Danish Krone Borders",39513,new Date("2018-09-06T11:05:30.700Z"),[10861,[]],new Date("2018-09-05T21:29:51.330Z"),{_id: 26485,str: "attitude SAS Bike",num: 34279,date: new Date("2018-09-06T17:31:50.329Z"),obj: {}},{_id: 26486,date: new Date("2018-09-06T06:58:37.263Z"),array: [],obj: {_id: 26487,str: "cultivate Knolls action-items",date: new Date("2018-09-06T03:50:37.674Z"),array: ["Licensed Granite Pants Fresh withdrawal"],obj: {}}},new Date("2018-09-05T23:55:08.061Z"),new Date("2018-09-06T06:52:33.322Z"),36262,{_id: 26488,str: "matrix XML ivory",num: 81640,array: [new Date("2018-09-06T18:30:51.731Z")],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 26489,str: "Concrete Tennessee Manager",num: 81946,date: new Date("2018-09-06T06:47:06.571Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26490,str: "dot-com",num: 83202,date: new Date("2018-09-06T02:35:54.303Z"),array: [],obj: {_id: 26491,str: "Tasty neural",num: 83375,date: new Date("2018-09-06T14:44:01.119Z"),array: [63194,"distributed","Configuration",49681,new Date("2018-09-06T17:14:34.209Z"),60182,new Date("2018-09-06T16:34:54.181Z"),93650,{_id: 26492,str: "communities cyan application",num: 32437,date: new Date("2018-09-06T14:45:02.720Z"),array: [],obj: {}},"initiatives",new Date("2018-09-05T22:39:15.320Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26493,str: "Trinidad and Tobago Dollar Land",num: 94110,date: new Date("2018-09-06T14:27:07.729Z"),array: [new Date("2018-09-06T15:42:32.625Z"),new Date("2018-09-06T07:01:22.973Z"),70800,"Sports",47160,[],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26494,num: 85299,date: new Date("2018-09-06T12:18:39.485Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 26495,str: "Credit Card Account",num: 7959,date: new Date("2018-09-06T06:56:44.492Z"),array: [8707,56159,"supply-chains",80275,"Technician Danish Krone capacitor",new Date("2018-09-06T08:05:46.802Z"),"Montana Bike",[new Date("2018-09-06T17:17:01.761Z"),13040,new Date("2018-09-06T17:24:04.911Z")],new Date("2018-09-06T16:56:33.322Z"),[{_id: 26496,str: "XSS International",num: 15585,array: [],obj: {_id: 26497,str: "Organized AGP",date: new Date("2018-09-06T00:14:26.563Z"),array: [],obj: {}}},68063]]});
    },

    function(coll) {
        return coll.insert({_id: 26498,str: "Shoes",num: 49473,date: new Date("2018-09-06T12:43:22.074Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26499,num: 80119,date: new Date("2018-09-05T21:24:53.255Z"),array: [],obj: {_id: 26500,str: "synthesize",num: 54038,date: new Date("2018-09-06T00:32:05.916Z"),array: [new Date("2018-09-06T15:18:41.014Z"),4679,"copying Implemented invoice",54108,new Date("2018-09-06T01:49:39.000Z"),{_id: 26501,str: "systems",num: 42279,date: new Date("2018-09-06T15:43:09.952Z"),array: [],obj: {_id: 26502,str: "generate",num: 98978}},new Date("2018-09-05T20:39:34.470Z"),new Date("2018-09-05T22:05:04.603Z"),"gold","algorithm project Chips","Dominican Republic Russian Ruble Kyat",[],{_id: 26503,str: "payment User-centric",num: 93215,array: [new Date("2018-09-06T03:48:18.782Z"),[],{_id: 26504,str: "Berkshire",date: new Date("2018-09-06T07:10:56.124Z"),array: [],obj: {}}],obj: {}},43198],obj: {_id: 26505,num: 72948,date: new Date("2018-09-06T07:57:32.726Z"),array: ["card Future"],obj: {_id: 26506,date: new Date("2018-09-06T03:27:09.199Z"),array: [38327]}}}});
    },

    function(coll) {
        return coll.insert({_id: 26507,str: "Money Market Account Usability Divide",num: 93290,date: new Date("2018-09-06T01:21:01.565Z"),array: ["Handmade","Interactions",89514,new Date("2018-09-06T09:27:00.670Z"),new Date("2018-09-06T18:24:00.336Z"),"matrix overriding Credit Card Account",83643,95356,new Date("2018-09-06T05:43:43.139Z"),{_id: 26508,str: "Principal Savings Account wireless",num: 20730,date: new Date("2018-09-06T12:03:55.092Z"),array: [],obj: {}},"Director synthesizing blue",52357],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26509,num: 61642,array: [["Afghani orange",65329],new Date("2018-09-06T10:10:28.646Z"),{_id: 26510,str: "Walks Poland Usability",num: 38349,date: new Date("2018-09-06T17:39:36.154Z"),obj: {}},"interactive",[],97851,new Date("2018-09-05T20:18:02.414Z"),"Specialist","PNG Outdoors",new Date("2018-09-05T20:00:56.565Z"),45353,"cross-platform"]});
    },

    function(coll) {
        return coll.insert({_id: 26511,str: "Assistant",num: 39959,date: new Date("2018-09-06T00:43:13.069Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26512,str: "plug-and-play",num: 32894,date: new Date("2018-09-06T15:24:42.487Z"),array: ["Exclusive",320,29384,23743,[],"attitude",new Date("2018-09-06T01:38:36.006Z"),{_id: 26513,str: "Small Concrete Car",num: 44926,date: new Date("2018-09-06T04:33:33.516Z"),array: [],obj: {}},new Date("2018-09-06T13:14:14.944Z")],obj: {_id: 26514,date: new Date("2018-09-06T11:13:39.874Z"),array: [new Date("2018-09-05T22:37:14.840Z"),35753,"TCP","reboot",80211,[{_id: 26515,str: "scalable Avon",array: ["Incredible Direct","generating Fort"],obj: {}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 26516,str: "Soap Shoes",num: 6740,array: [92944,"Branding Movies",96476,86267,new Date("2018-09-06T00:28:34.266Z"),[],new Date("2018-09-06T07:26:00.280Z"),"Qatari Rial revolutionize","Cheese Functionality Computers",20444,{_id: 26517,str: "Latvia dot-com Credit Card Account",num: 39152,date: new Date("2018-09-06T05:04:47.502Z"),obj: {}}],obj: {_id: 26518,str: "Credit Card Account Virgin Islands, U.S.",num: 34512,date: new Date("2018-09-06T13:24:10.820Z"),array: [{_id: 26519,num: 99509,date: new Date("2018-09-06T13:01:27.236Z"),array: []},new Date("2018-09-06T16:08:31.144Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26520,str: "Hat systematic Assistant",num: 83108,date: new Date("2018-09-06T10:02:01.347Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26521,str: "open-source",num: 35008,date: new Date("2018-09-06T03:22:52.765Z"),array: [{_id: 26522,str: "SAS",num: 51985,date: new Date("2018-09-05T23:09:02.104Z"),array: [],obj: {_id: 26523,num: 24718,array: [],obj: {_id: 26524,str: "Tennessee",date: new Date("2018-09-06T08:14:51.216Z")}}},[],new Date("2018-09-06T10:59:42.854Z"),new Date("2018-09-06T07:19:28.218Z"),{_id: 26525,str: "Home Loan Account",date: new Date("2018-09-06T11:15:44.170Z"),obj: {_id: 26526,num: 58761,date: new Date("2018-09-06T14:59:41.499Z"),array: ["Horizontal Director Vermont",30007,"Synchronised Georgia","Berkshire",20928,"array South Dakota",53246,new Date("2018-09-05T23:53:33.082Z")],obj: {_id: 26527,str: "white Dynamic SAS",num: 99073,obj: {}}}},new Date("2018-09-06T18:48:24.996Z"),[],37880]});
    },

    function(coll) {
        return coll.insert({_id: 26528,str: "transmitting Personal Loan Account",num: 89903,date: new Date("2018-09-06T00:19:09.243Z"),array: [[],new Date("2018-09-06T11:28:05.571Z"),"Toys open-source",new Date("2018-09-06T07:11:59.452Z"),"turquoise",new Date("2018-09-06T12:34:43.158Z"),68341,[76780],"Fresh",12074,{_id: 26529,str: "tertiary Car Plastic",num: 25267,date: new Date("2018-09-06T01:01:37.082Z"),array: [{_id: 26530,str: "back-end functionalities",date: new Date("2018-09-06T04:33:36.525Z"),array: [],obj: {}},"Flats extensible Steel",{_id: 26531,str: "withdrawal Manager",num: 80980,date: new Date("2018-09-06T14:16:30.843Z"),array: [new Date("2018-09-06T10:07:01.441Z")],obj: { _id: 26532 }}],obj: {}},26688,new Date("2018-09-06T15:22:22.878Z")],obj: {_id: 26533,str: "Marketing",num: 1450,date: new Date("2018-09-05T20:36:14.426Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26534,str: "Handcrafted Fresh Shoes synthesize Frozen",num: 3800,date: new Date("2018-09-06T07:14:43.618Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26535,str: "Slovakia (Slovak Republic)",num: 94855,date: new Date("2018-09-06T07:01:29.710Z"),array: [],obj: {_id: 26536,str: "Proactive",num: 92243,date: new Date("2018-09-06T12:52:17.590Z"),array: [],obj: {_id: 26537,str: "clear-thinking",date: new Date("2018-09-06T13:52:45.613Z"),array: [new Date("2018-09-06T19:49:08.429Z"),59664,{_id: 26538,str: "tertiary Integration",date: new Date("2018-09-06T11:21:47.477Z"),obj: {}},81139,new Date("2018-09-06T15:40:25.999Z"),"Quality",[],{_id: 26539,num: 95646,array: [97007,[55636,new Date("2018-09-06T19:32:18.555Z")],{_id: 26540,str: "Awesome Metal Chair Montana",num: 11575,date: new Date("2018-09-06T16:41:10.088Z"),array: ["Horizontal","Berkshire Persistent Savings Account"]},"Serbian Dinar Awesome Rubber Table Pennsylvania"]},"red Marketing Rustic",new Date("2018-09-06T13:10:05.550Z")],obj: {_id: 26541,num: 74640,obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 26542,num: 89070,date: new Date("2018-09-06T06:15:56.777Z"),array: [new Date("2018-09-06T17:18:43.724Z"),new Date("2018-09-06T10:17:11.235Z"),36770,43771,{_id: 26543,str: "THX",num: 73857,date: new Date("2018-09-05T23:53:20.399Z"),array: [],obj: {_id: 26544,str: "transmitter synergies Lari",num: 41611,array: ["input Borders AI",[53540,16269,new Date("2018-09-06T02:03:46.335Z")]]}},{_id: 26545,str: "4th generation programming Generic Concrete Chicken",date: new Date("2018-09-06T03:58:40.703Z"),obj: {}},"Unbranded Agent Pants",[],"Incredible local area network","Handmade Rubber Hat protocol Fresh","black",{_id: 26546,array: [],obj: {_id: 26547,str: "task-force portal",num: 63961,date: new Date("2018-09-06T16:55:48.676Z"),obj: {}}},{_id: 26548,str: "Specialist Computers Garden",num: 92301,array: []}],obj: {_id: 26549,date: new Date("2018-09-06T19:12:23.706Z"),array: ["Assistant"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26550,num: 88346,date: new Date("2018-09-06T06:58:35.618Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26551,str: "olive",num: 75136,date: new Date("2018-09-06T12:53:31.110Z"),array: [89549,"SMTP",new Date("2018-09-06T13:09:41.182Z"),new Date("2018-09-05T21:08:25.858Z"),7816,new Date("2018-09-05T21:03:24.442Z"),{_id: 26552,num: 1818,array: [],obj: {}},[],20612,84028,"Bedfordshire Car","Global Awesome Metal Chair hub",{_id: 26553,str: "cross-media black",num: 87834,date: new Date("2018-09-06T19:13:19.062Z"),array: [],obj: {_id: 26554,str: "Quality Home Loan Account",date: new Date("2018-09-06T11:11:06.621Z"),obj: {}}},29273]});
    },

    function(coll) {
        return coll.insert({_id: 26555,str: "compressing seize",num: 55983,date: new Date("2018-09-06T01:33:13.820Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26556,str: "Cambridgeshire International B2C",num: 11551,date: new Date("2018-09-06T03:02:26.105Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26557,str: "Sleek Frozen Tuna",num: 72414,array: ["empower neural regional",{_id: 26558,str: "pricing structure Delaware Refined Frozen Fish",num: 8959,date: new Date("2018-09-06T16:13:08.453Z"),array: [],obj: {}},[{_id: 26559,str: "synthesize Isle of Man overriding",num: 70830,date: new Date("2018-09-06T09:03:33.916Z"),array: [],obj: {_id: 26560,date: new Date("2018-09-06T09:56:56.043Z"),array: [41813,[],new Date("2018-09-06T00:59:08.038Z")],obj: {_id: 26561,date: new Date("2018-09-06T18:28:58.227Z"),array: ["virtual payment Montana"],obj: {}}}}],new Date("2018-09-06T16:25:54.165Z"),new Date("2018-09-06T10:20:27.830Z"),80084,new Date("2018-09-06T01:49:37.058Z"),"Ferry Bolivia",20577,new Date("2018-09-06T14:12:18.157Z"),"Checking Account real-time",42635,[]],obj: {_id: 26562,str: "Practical mobile",date: new Date("2018-09-06T09:49:16.018Z")}});
    },

    function(coll) {
        return coll.insert({_id: 26563,str: "Total Field",num: 41013,date: new Date("2018-09-06T09:47:23.657Z"),array: [],obj: {_id: 26564,str: "Jewelery synergies Books",date: new Date("2018-09-05T22:47:44.254Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26565,str: "Borders Cotton",num: 38312,array: [new Date("2018-09-06T06:40:09.001Z"),60946,32324,new Date("2018-09-06T00:30:13.927Z"),[],"Shirt",[],"Infrastructure",[{_id: 26566,str: "circuit",num: 94109,date: new Date("2018-09-06T07:10:05.991Z"),array: [],obj: {}},[{_id: 26567,str: "zero tolerance input",num: 35318,date: new Date("2018-09-06T13:32:32.791Z"),array: [],obj: {}},"Chips maroon"],47646,new Date("2018-09-05T21:40:19.146Z"),6348]],obj: {_id: 26568,date: new Date("2018-09-05T21:53:56.364Z"),array: ["Pike","copy Movies"],obj: {_id: 26569,str: "SAS Plastic",num: 25400}}});
    },

    function(coll) {
        return coll.insert({_id: 26570,str: "projection Open-architected",num: 78341,date: new Date("2018-09-06T02:00:43.215Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26571,str: "compressing",num: 87111,date: new Date("2018-09-05T21:56:18.573Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26572,str: "Bosnia and Herzegovina",num: 10956,date: new Date("2018-09-06T03:10:52.386Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26573,str: "compress Salad",num: 89419,date: new Date("2018-09-06T17:45:20.772Z"),array: ["Outdoors Rustic Re-contextualized",new Date("2018-09-06T16:53:08.480Z"),new Date("2018-09-06T17:42:46.593Z"),35104,"Credit Card Account Tuna",24369,new Date("2018-09-05T22:29:44.307Z"),78114,37384,{_id: 26574,str: "red turquoise SMS",num: 78721,date: new Date("2018-09-06T04:53:29.995Z"),obj: {_id: 26575,str: "Security frame Cayman Islands",num: 90369,array: ["framework Right-sized Flat",new Date("2018-09-06T16:29:15.778Z"),[]],obj: {}}},"Lead withdrawal aggregate"]});
    },

    function(coll) {
        return coll.insert({_id: 26576,str: "Communications",num: 14882,date: new Date("2018-09-06T17:12:55.632Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26577,str: "1080p compressing",num: 64995,array: [new Date("2018-09-06T18:45:47.962Z"),new Date("2018-09-06T18:53:54.038Z"),{_id: 26578,str: "Saint Lucia firewall",num: 33754,date: new Date("2018-09-06T02:24:58.721Z"),array: ["Taka",[],50587,[],59574]},"neural tangible",new Date("2018-09-06T01:57:11.457Z"),["Sports"],{_id: 26579,num: 23580,date: new Date("2018-09-06T06:53:25.107Z"),obj: {}},new Date("2018-09-06T13:46:59.827Z"),29297]});
    },

    function(coll) {
        return coll.insert({_id: 26580,str: "Vermont",num: 21996,date: new Date("2018-09-06T01:00:02.036Z"),array: [],obj: {_id: 26581,str: "5th generation",num: 23300,date: new Date("2018-09-06T12:54:04.955Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26582,str: "Stand-alone Stravenue",num: 54769,date: new Date("2018-09-06T05:08:52.327Z"),array: [new Date("2018-09-06T17:25:22.414Z"),72838,"deposit","implement Avon District",94865,"Applications",new Date("2018-09-06T15:00:26.413Z"),[],15956,{_id: 26583,str: "leverage",date: new Date("2018-09-06T11:02:53.056Z"),array: [new Date("2018-09-06T14:44:28.516Z"),31837,"reciprocal multi-byte Table"]},{_id: 26584,str: "Zloty Borders program",num: 16100,array: ["payment wireless best-of-breed"],obj: {_id: 26585,num: 51984,obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26586,num: 56239,date: new Date("2018-09-06T17:13:32.873Z"),array: [new Date("2018-09-06T02:37:47.915Z"),new Date("2018-09-06T12:30:54.439Z"),28703,"supply-chains Investor",53553,new Date("2018-09-05T23:57:59.271Z"),{_id: 26587,str: "Berkshire",array: [],obj: {_id: 26588,str: "hacking Director Rhode Island",num: 35931,date: new Date("2018-09-06T00:13:40.811Z"),array: ["connecting Auto Loan Account withdrawal"],obj: {}}},82469,"Generic invoice",[],[],37394,{_id: 26589,str: "Row payment index",array: [[new Date("2018-09-06T13:38:48.883Z"),"matrix gold Nebraska"]]},["deploy Well"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26590,str: "Guadeloupe Small Cotton Computer",num: 13935,date: new Date("2018-09-06T08:12:11.013Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26591,str: "Louisiana",num: 23536,date: new Date("2018-09-06T03:56:43.277Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26592,str: "SMTP Designer grey",num: 31115,date: new Date("2018-09-06T00:30:29.929Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26593,str: "grey",num: 51627,date: new Date("2018-09-06T04:00:32.434Z"),array: [80782,new Date("2018-09-05T23:25:34.760Z"),"compress Customer SMS",new Date("2018-09-06T15:53:13.689Z"),"Kenyan Shilling",24464,{_id: 26594,str: "green navigating Fort",num: 80577,date: new Date("2018-09-06T16:37:02.131Z"),array: [],obj: {_id: 26595,str: "Right-sized",num: 71679,array: [[82483],new Date("2018-09-05T20:48:42.361Z"),new Date("2018-09-06T08:48:46.799Z"),"Arizona Ouguiya Accounts"],obj: {}}},86656,"override Isle vortals","IB Hong Kong Dollar",[],{_id: 26596,str: "Small Colorado Identity",num: 17066,date: new Date("2018-09-06T14:24:57.213Z")}],obj: {_id: 26597,date: new Date("2018-09-06T08:13:03.839Z"),array: [5213]}});
    },

    function(coll) {
        return coll.insert({_id: 26598,str: "Wooden Soft",date: new Date("2018-09-06T12:25:19.947Z"),array: ["Integrated","Engineer Bike","Chief deposit",new Date("2018-09-06T02:14:47.560Z"),new Date("2018-09-06T14:42:09.857Z"),{_id: 26599,str: "Re-engineered Groves",num: 26080,array: [44852],obj: {_id: 26600,num: 50725,date: new Date("2018-09-05T23:02:14.180Z"),array: [new Date("2018-09-06T05:03:14.016Z"),36524],obj: {}}},7650,"transmitting",{_id: 26601,str: "invoice Steel",num: 17080,date: new Date("2018-09-06T02:13:38.604Z"),obj: {_id: 26602,str: "Wooden scale",num: 48644,date: new Date("2018-09-06T01:30:16.625Z"),array: []}},85763,"North Dakota"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26603,str: "24 hour",num: 3901,date: new Date("2018-09-06T06:15:36.788Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26604,num: 18764,date: new Date("2018-09-05T20:55:55.495Z"),array: [],obj: {_id: 26605,str: "teal neural-net Total",num: 95649,date: new Date("2018-09-05T19:57:18.654Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26606,str: "blue Jordanian Dinar payment",num: 2070,date: new Date("2018-09-06T04:09:29.777Z"),array: [new Date("2018-09-06T17:58:57.282Z"),29268,"Hat generate","magenta",87867,new Date("2018-09-05T20:27:18.472Z"),"Metal orange Credit Card Account",new Date("2018-09-06T04:55:21.911Z"),{_id: 26607,str: "digital alarm",date: new Date("2018-09-06T18:31:37.739Z"),array: [],obj: {}},[89809],"Ways Tasty Investor",[],new Date("2018-09-06T02:03:57.367Z"),24731,new Date("2018-09-05T22:00:28.384Z")],obj: {_id: 26608,str: "Lead mobile Borders",num: 46390,array: [[],{_id: 26609,num: 36976,date: new Date("2018-09-06T16:19:32.834Z"),array: [{_id: 26610,str: "transmitter SMS facilitate",date: new Date("2018-09-06T04:39:35.602Z")},[]],obj: {}},"Licensed Steel Cheese payment solid state"],obj: {_id: 26611,num: 40073,date: new Date("2018-09-06T19:16:40.842Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26612,str: "Home bluetooth Home",num: 69450,date: new Date("2018-09-05T20:20:45.219Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26613,str: "Health generating interface",num: 49667,array: [],obj: {_id: 26614,str: "panel monitor sticky",num: 85162,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26615,str: "alliance",num: 1473,date: new Date("2018-09-06T18:54:02.917Z"),array: [[new Date("2018-09-05T21:45:44.037Z"),"SMTP Grocery content-based",3988],"Shoes",new Date("2018-09-06T00:48:44.169Z"),new Date("2018-09-06T08:04:53.616Z"),{_id: 26616,str: "back-end migration",num: 88398,obj: {}},[],55121,9874,53836,{_id: 26617,num: 95068,date: new Date("2018-09-06T02:35:01.141Z"),array: []},63753],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26618,num: 78136,date: new Date("2018-09-06T06:12:34.930Z"),array: [{_id: 26619,str: "Web interfaces Hat",num: 1457,date: new Date("2018-09-06T17:43:44.336Z"),obj: {}},"Rustic Steel Gloves",[],"Borders","Virgin Islands, U.S.",40493,new Date("2018-09-05T20:56:54.500Z"),56323,new Date("2018-09-06T19:46:44.511Z"),new Date("2018-09-06T15:00:48.009Z"),"indexing Unbranded Cotton Keyboard Beauty",39645],obj: {_id: 26620,str: "Canyon Developer invoice",num: 48714,array: [],obj: {_id: 26621,str: "Implementation compress dynamic",num: 63142,date: new Date("2018-09-06T16:12:09.432Z"),array: ["multi-byte Group"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26622,str: "Dynamic Toys",num: 41872,date: new Date("2018-09-06T12:32:23.757Z"),array: [],obj: {_id: 26623,str: "Saint Lucia",date: new Date("2018-09-06T06:00:48.841Z"),array: ["navigating Forward web-enabled",[2801,66776,new Date("2018-09-05T23:29:11.237Z"),"Architect Codes specifically reserved for testing purposes portals",{_id: 26624,str: "Plastic Granite Club",array: [],obj: {_id: 26625,str: "Borders",num: 49635,date: new Date("2018-09-06T00:09:22.494Z"),array: [85088,"Director bypass Buckinghamshire"],obj: {_id: 26626,num: 41318,date: new Date("2018-09-06T13:02:29.302Z")}}}],new Date("2018-09-06T07:20:42.935Z"),new Date("2018-09-06T08:01:55.936Z"),new Date("2018-09-06T11:49:04.400Z"),"Isle of Man B2B",16847,"Incredible Concrete Ball drive","Lead",new Date("2018-09-06T16:41:00.526Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26627,str: "infrastructures connecting invoice",num: 37518,date: new Date("2018-09-06T00:18:49.757Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26628,str: "Research",num: 70247,date: new Date("2018-09-06T17:35:25.959Z"),array: [],obj: {_id: 26629,str: "payment Pakistan Rupee",date: new Date("2018-09-06T06:37:49.913Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26630,str: "Visionary",num: 53736,date: new Date("2018-09-06T05:26:17.809Z"),array: [],obj: {_id: 26631,str: "solid state",num: 68583,date: new Date("2018-09-06T14:27:25.652Z"),array: [64324,["Corporate Massachusetts",new Date("2018-09-06T19:21:54.226Z")],"RAM Gorgeous Metal Pants",new Date("2018-09-06T14:19:42.011Z"),new Date("2018-09-06T01:27:08.949Z"),["Generic multi-byte"],68805,new Date("2018-09-06T06:58:28.172Z"),42942,{_id: 26632,str: "deliver Congo",date: new Date("2018-09-05T21:08:19.504Z"),array: [],obj: {_id: 26633,str: "Sleek bluetooth",num: 17044,array: [],obj: {}}},{_id: 26634,num: 16740,date: new Date("2018-09-06T19:23:53.723Z")},[77690,"Borders transmitting",new Date("2018-09-06T17:25:31.843Z")],[]],obj: {_id: 26635,num: 83209,array: ["CSS Savings Account Rustic Soft Shirt",new Date("2018-09-06T02:43:38.241Z"),{_id: 26636,str: "Producer access",date: new Date("2018-09-05T20:55:48.461Z")}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26637,num: 7014,date: new Date("2018-09-05T21:35:33.244Z"),array: ["Checking Account UAE Dirham",new Date("2018-09-05T21:49:11.368Z"),[],new Date("2018-09-06T02:04:15.119Z"),new Date("2018-09-05T20:45:04.786Z"),[],58670,31932,24664,"functionalities Solomon Islands",{_id: 26638,str: "Checking Account Soap",date: new Date("2018-09-06T07:00:05.116Z"),array: [38951],obj: {}},new Date("2018-09-06T19:08:34.277Z"),[],"Chile"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26639,str: "6th generation",num: 50717,date: new Date("2018-09-06T03:13:25.459Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26640,str: "Croatia Plastic synthesizing",num: 67736,date: new Date("2018-09-05T21:45:17.259Z"),array: [],obj: {_id: 26641,str: "Intelligent rich",array: [new Date("2018-09-06T04:47:48.088Z"),new Date("2018-09-06T02:22:59.345Z"),"Soft",{_id: 26642,str: "Ergonomic Cotton Pizza Generic Frozen Table payment",num: 4976,date: new Date("2018-09-06T09:44:37.672Z"),array: [],obj: {}},"withdrawal COM",52037,{_id: 26643,str: "Oklahoma",num: 97705,date: new Date("2018-09-06T14:02:40.065Z"),array: [],obj: {}},[],75048,31909,95252,"driver Intelligent Officer","transmitting cyan Automotive",new Date("2018-09-06T11:30:59.783Z")],obj: {_id: 26644,str: "payment",num: 18543,date: new Date("2018-09-06T18:56:34.026Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 26645,str: "Electronics Texas",num: 66035,date: new Date("2018-09-06T07:22:00.982Z"),array: [],obj: {_id: 26646,str: "New Jersey neural driver",num: 31834,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26647,str: "Fantastic Soft Keyboard payment",num: 49857,date: new Date("2018-09-06T09:21:57.837Z"),array: [87271,"Pre-emptive Response","Profit-focused Health",new Date("2018-09-06T09:21:04.805Z"),new Date("2018-09-06T00:00:01.558Z"),12814,[{_id: 26648,num: 16396,date: new Date("2018-09-06T09:27:47.509Z"),array: [],obj: {_id: 26649,str: "methodology",num: 27024}},new Date("2018-09-06T05:30:01.044Z"),82482],{_id: 26650,str: "CSS Intelligent Soft Hat",date: new Date("2018-09-06T03:20:45.981Z"),array: [[]],obj: {_id: 26651,date: new Date("2018-09-06T18:30:08.627Z"),array: []}},"Savings Account",41364,93160],obj: {_id: 26652,str: "invoice content FTP",num: 4894,date: new Date("2018-09-06T04:56:46.771Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26653,str: "Principal",num: 12411,date: new Date("2018-09-06T18:25:13.361Z"),obj: {_id: 26654,num: 27773,date: new Date("2018-09-06T04:42:49.716Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26655,str: "Money Market Account",date: new Date("2018-09-06T08:25:54.831Z"),array: [],obj: {_id: 26656,str: "Division bypass",num: 65772,date: new Date("2018-09-06T03:10:40.726Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26657,str: "optimal Avon",num: 40902,date: new Date("2018-09-06T00:00:14.331Z"),array: [10703,[],"back up toolset mission-critical",new Date("2018-09-05T20:42:19.129Z"),new Date("2018-09-06T03:24:35.064Z"),"Senior",[],"hacking 24/365 RSS",{_id: 26658,str: "payment",num: 46342,date: new Date("2018-09-06T18:30:54.697Z"),array: [22112],obj: {}},[new Date("2018-09-06T04:10:11.795Z")],new Date("2018-09-06T08:25:58.692Z"),15111,19798,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26659,str: "Producer",num: 72509,date: new Date("2018-09-06T03:16:51.142Z"),array: [],obj: {_id: 26660,str: "Borders transmitting",num: 93524,date: new Date("2018-09-05T22:09:17.978Z"),array: [],obj: {_id: 26661,str: "deposit Face to face Re-contextualized",num: 41880,date: new Date("2018-09-06T07:26:34.964Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 26662,str: "leading edge Supervisor cohesive",date: new Date("2018-09-05T22:22:37.084Z"),obj: {_id: 26663,num: 70075,date: new Date("2018-09-06T02:27:30.300Z"),array: ["Brand",3313,"Automotive superstructure input",new Date("2018-09-06T13:38:04.045Z"),586,new Date("2018-09-06T08:45:02.851Z"),[]],obj: {_id: 26664,str: "Wisconsin Chips systems",num: 41,date: new Date("2018-09-06T10:09:14.225Z"),array: [9651,[new Date("2018-09-05T21:02:30.205Z")],{_id: 26665,str: "archive embrace Health",num: 40464,date: new Date("2018-09-06T02:35:31.153Z"),array: []},"Wooden",new Date("2018-09-06T06:45:57.007Z"),{_id: 26666,num: 24726,obj: {}},75079],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26667,str: "synthesizing",num: 47131,date: new Date("2018-09-06T15:53:05.136Z"),array: [],obj: {_id: 26668,str: "copying scalable Accounts",num: 21670,array: [new Date("2018-09-06T09:46:44.139Z"),63680,68190,{_id: 26669,str: "Realigned",num: 74183,date: new Date("2018-09-06T19:10:29.138Z"),array: [],obj: {}},"SDD",new Date("2018-09-06T10:41:53.712Z"),"cross-platform Mississippi",{_id: 26670,str: "function installation",num: 82150,date: new Date("2018-09-05T20:17:12.960Z"),array: []},[8794,new Date("2018-09-06T02:01:00.302Z"),new Date("2018-09-06T19:28:46.300Z"),[]],[["De-engineered blue"]],7622,12974],obj: {_id: 26671,str: "analyzing"}}});
    },

    function(coll) {
        return coll.insert({_id: 26672,str: "Fresh back-end concept",num: 75224,date: new Date("2018-09-06T05:47:50.380Z"),array: [24964,{_id: 26673,str: "Inlet",num: 76675,obj: {_id: 26674,str: "firewall",num: 19980,date: new Date("2018-09-06T05:13:29.482Z"),array: [],obj: {_id: 26675,str: "red Paradigm",date: new Date("2018-09-06T03:38:53.973Z"),obj: {}}}},"Alabama empower Leone",new Date("2018-09-06T04:46:05.399Z"),38587,{_id: 26676,num: 31384,date: new Date("2018-09-06T16:29:23.609Z"),array: [["generating",1733,new Date("2018-09-06T07:33:42.014Z")],new Date("2018-09-06T08:29:39.766Z"),"override bus",[]],obj: {}},"content",{_id: 26677,str: "Checking Account",array: [new Date("2018-09-05T20:01:53.872Z"),77456]},"Bond Markets Units European Composite Unit (EURCO) Investor",{_id: 26678,str: "Car Assistant Rubber",num: 62737,date: new Date("2018-09-06T10:37:50.148Z"),array: [],obj: {}},99176]});
    },

    function(coll) {
        return coll.insert({_id: 26679,str: "XSS",num: 32497,date: new Date("2018-09-05T21:46:40.711Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26680,str: "green turquoise",num: 36387,date: new Date("2018-09-05T20:32:16.994Z"),array: ["deposit SCSI Jewelery","Kina Intelligent",new Date("2018-09-06T10:38:44.381Z"),32393,new Date("2018-09-06T04:42:28.247Z"),27653,"generate Kids Chicken",20213,"navigate",new Date("2018-09-06T02:39:24.899Z"),[]],obj: {_id: 26681,str: "Vietnam",num: 44312,date: new Date("2018-09-06T00:15:26.796Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26682,num: 99470,date: new Date("2018-09-06T01:30:07.058Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26683,str: "next-generation",num: 54987,date: new Date("2018-09-05T23:16:18.741Z"),array: ["District compress content",{_id: 26684,str: "Towels Clothing Vermont",num: 48522,date: new Date("2018-09-06T10:46:50.202Z"),array: [],obj: {}},"niches",43463,new Date("2018-09-06T01:54:11.110Z"),new Date("2018-09-05T21:32:04.749Z"),new Date("2018-09-06T06:58:01.485Z"),"pixel"],obj: {_id: 26685,str: "Outdoors platforms Checking Account",num: 84409,date: new Date("2018-09-06T05:52:20.686Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26686,num: 6331,date: new Date("2018-09-05T23:15:08.554Z"),array: [42243,"Plastic Credit Card Account",new Date("2018-09-06T11:57:27.601Z"),"generate Berkshire extend",{_id: 26687,str: "FTP Principal",num: 89604,date: new Date("2018-09-06T05:06:42.701Z"),obj: {}},new Date("2018-09-06T07:07:21.997Z"),87668,79745,"Trinidad and Tobago Dollar Intranet",[],"Fresh Dynamic",new Date("2018-09-06T01:41:42.827Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26688,str: "Gloves",num: 61408,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26689,str: "mobile HTTP",num: 16592,date: new Date("2018-09-06T17:43:10.445Z"),array: [new Date("2018-09-06T07:43:15.663Z"),"deploy deposit Investment Account",66213,"Operative Profound Arkansas","e-enable",{_id: 26690,str: "Gabon Pennsylvania",array: [],obj: {_id: 26691,str: "B2C Home Loan Account Tennessee",num: 99726,date: new Date("2018-09-06T17:08:41.822Z"),array: [[]],obj: {_id: 26692,str: "cyan Wooden payment",num: 10253,date: new Date("2018-09-06T01:33:46.889Z"),obj: {}}}},34149,new Date("2018-09-05T22:13:54.701Z"),71244,53882,15494,new Date("2018-09-06T00:01:59.021Z"),"info-mediaries Fields Guinea"],obj: {_id: 26693,num: 16342,date: new Date("2018-09-06T16:39:42.751Z")}});
    },

    function(coll) {
        return coll.insert({_id: 26694,str: "payment Corporate",num: 36622,date: new Date("2018-09-06T15:13:49.207Z"),array: [],obj: {_id: 26695,str: "interactive methodology Savings Account",num: 15914,date: new Date("2018-09-06T11:14:15.160Z"),array: ["Compatible Shirt Credit Card Account",67120,new Date("2018-09-06T03:20:53.994Z"),45990,new Date("2018-09-06T04:07:30.063Z"),new Date("2018-09-06T14:47:22.786Z"),"connect yellow Rubber",[89574,{_id: 26696,num: 31560,date: new Date("2018-09-06T02:12:12.183Z"),array: [],obj: {}},89825,{_id: 26697,str: "orange",date: new Date("2018-09-06T15:07:47.743Z")}],"pricing structure Frozen benchmark"],obj: {_id: 26698,str: "target Libyan Dinar",num: 80904,array: [],obj: {_id: 26699,array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 26700,str: "Graphical User Interface",date: new Date("2018-09-05T23:36:11.344Z"),array: [],obj: {_id: 26701,str: "Dynamic Engineer",date: new Date("2018-09-06T16:25:24.053Z"),array: [],obj: {_id: 26702,num: 18471,date: new Date("2018-09-06T00:58:12.067Z"),array: ["wireless",32205,28276,new Date("2018-09-06T03:48:39.782Z"),"Money Market Account generate Iowa",71368,{_id: 26703,str: "enable front-end Ball",num: 89933},92282,new Date("2018-09-06T05:16:37.003Z"),new Date("2018-09-06T15:42:03.991Z"),71251,[new Date("2018-09-05T23:06:40.681Z"),"world-class"],{_id: 26704,str: "cohesive",num: 19423,date: new Date("2018-09-05T21:29:46.932Z"),array: [],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 26705,str: "yellow sticky unleash",num: 42593,date: new Date("2018-09-05T23:20:24.401Z"),array: [new Date("2018-09-06T15:37:00.190Z"),"paradigms copying robust",20994,new Date("2018-09-06T05:59:14.747Z"),"cross-platform",new Date("2018-09-06T06:28:55.549Z"),"Pike Incredible Frozen Soap",99865,{_id: 26706,str: "Fantastic Metal",num: 60143,date: new Date("2018-09-06T03:31:27.303Z"),array: [{_id: 26707,str: "Industrial middleware",date: new Date("2018-09-06T09:03:29.206Z"),obj: {}}],obj: {_id: 26708,str: "transitional innovative zero administration",array: [],obj: {}}},"Facilitator",new Date("2018-09-05T23:10:21.128Z"),"Guinea-Bissau"]});
    },

    function(coll) {
        return coll.insert({_id: 26709,num: 22550,date: new Date("2018-09-06T02:00:20.833Z"),array: [12435,new Date("2018-09-06T19:28:43.580Z"),new Date("2018-09-06T15:52:02.506Z"),"web-readiness Extensions","Refined Rubber Gloves","grey",87062,{_id: 26710,str: "seamless architect",num: 26724,date: new Date("2018-09-05T20:31:18.896Z"),array: [],obj: {_id: 26711,str: "Car Arkansas Buckinghamshire",num: 24151,date: new Date("2018-09-06T04:08:38.398Z"),array: [],obj: {}}},new Date("2018-09-06T15:06:11.079Z"),[new Date("2018-09-05T20:43:58.704Z"),11240,3735],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26712,str: "Trinidad and Tobago Dollar Centralized Savings Account",num: 29351,date: new Date("2018-09-06T16:37:01.112Z"),array: ["Massachusetts",99239,new Date("2018-09-05T20:37:24.152Z"),{_id: 26713,str: "Bedfordshire moratorium",num: 68789,date: new Date("2018-09-05T21:54:04.852Z"),array: [],obj: {}},69867,new Date("2018-09-06T10:12:11.747Z"),"synthesize",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26714,str: "Silver array middleware",date: new Date("2018-09-06T05:06:23.088Z"),array: [new Date("2018-09-05T22:13:03.125Z"),87397,[new Date("2018-09-06T02:40:55.693Z")],{_id: 26715,str: "Front-line Dynamic",num: 63685,date: new Date("2018-09-06T09:38:16.074Z"),array: [],obj: {_id: 26716,str: "Division",array: []}},"zero tolerance out-of-the-box",88262,59769,[],5213,new Date("2018-09-06T16:22:34.590Z"),"Interactions toolset",new Date("2018-09-05T23:46:43.606Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26717,str: "copying deploy Grocery",num: 91175,date: new Date("2018-09-06T05:10:20.451Z"),array: [{_id: 26718,str: "incubate Awesome Concrete Computer Planner",num: 60621,array: [],obj: {}},"Soap Unbranded transmitter",new Date("2018-09-06T12:12:36.856Z"),[new Date("2018-09-06T15:30:37.600Z"),"Fantastic Plastic New Hampshire",15280],{_id: 26719,str: "PCI Global Bike",num: 24589,date: new Date("2018-09-06T12:28:54.391Z"),array: [new Date("2018-09-06T19:39:12.025Z"),"pink Fords",new Date("2018-09-06T01:37:59.321Z")],obj: {_id: 26720,date: new Date("2018-09-06T09:42:51.752Z"),array: [],obj: {}}},"hacking input",99702,"Baht Summit",76940,42028,"Montana distributed"],obj: {_id: 26721,str: "Savings Account",num: 30215,date: new Date("2018-09-06T07:47:36.276Z"),array: [[new Date("2018-09-06T14:20:44.958Z"),new Date("2018-09-05T21:38:15.485Z")]],obj: {_id: 26722,str: "Intelligent",date: new Date("2018-09-06T11:25:23.051Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 26723,str: "copying",num: 90727,date: new Date("2018-09-06T19:46:21.617Z"),array: [new Date("2018-09-06T09:10:21.350Z"),79861,new Date("2018-09-06T08:12:43.296Z"),"lime",new Date("2018-09-06T02:29:40.537Z"),59498,"AGP Heights Division"],obj: {_id: 26724,str: "indexing",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26725,str: "programming",num: 65018,date: new Date("2018-09-06T13:02:57.135Z"),obj: {_id: 26726,str: "Sports sensor Concrete",num: 80449,date: new Date("2018-09-06T17:27:15.697Z"),array: ["Exclusive Granite copy",57248,{_id: 26727,date: new Date("2018-09-06T00:08:59.466Z"),array: [],obj: {}},56816,"Tunisia",new Date("2018-09-06T06:48:32.167Z"),new Date("2018-09-06T14:12:45.073Z"),new Date("2018-09-06T07:52:38.794Z"),{_id: 26728,str: "generate",num: 85113,array: [[81326],[],74549,new Date("2018-09-05T22:36:46.006Z")],obj: {_id: 26729,str: "paradigms Buckinghamshire content",num: 70197,date: new Date("2018-09-06T04:30:46.503Z"),obj: {_id: 26730,str: "Swiss Franc Sweden SMTP",num: 89195,array: []}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26731,str: "azure",num: 19634,date: new Date("2018-09-06T03:14:16.630Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26732,str: "parse",num: 13101,date: new Date("2018-09-06T11:50:15.958Z"),array: [],obj: {_id: 26733,str: "viral",date: new Date("2018-09-06T13:52:50.759Z"),array: [],obj: {_id: 26734,num: 85848,date: new Date("2018-09-05T20:28:43.381Z"),array: [new Date("2018-09-06T11:56:50.744Z"),new Date("2018-09-05T20:24:57.052Z"),33341,"input","lavender",19728,[{_id: 26735,str: "cross-platform Dong",num: 28078,array: [[],35883,new Date("2018-09-06T06:46:38.418Z")]},[],new Date("2018-09-06T11:47:35.276Z")],"Human Checking Account",{_id: 26736,num: 31859,date: new Date("2018-09-06T17:09:34.544Z")},30922,"Auto Loan Account robust Books"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26737,str: "Markets",num: 82980,array: [],obj: {_id: 26738,str: "Focused Tactics",num: 91505,date: new Date("2018-09-06T08:41:10.985Z"),array: [],obj: {_id: 26739,num: 84495,date: new Date("2018-09-05T20:38:30.701Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 26740,str: "bluetooth",num: 58378,date: new Date("2018-09-06T16:40:58.129Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 26741,str: "dot-com quantify",num: 21660,date: new Date("2018-09-06T07:23:37.230Z"),array: [new Date("2018-09-06T03:20:40.744Z"),[42736,21731,"Frozen Avon"],"programming",78105,new Date("2018-09-05T21:25:29.560Z"),61417,[],34106,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26742,num: 67967,date: new Date("2018-09-06T10:38:21.178Z"),array: [new Date("2018-09-06T08:33:47.690Z"),"Seychelles Rupee integrated",new Date("2018-09-06T08:23:50.462Z"),[],new Date("2018-09-06T02:58:13.853Z"),78680,"Intelligent Cotton Soap auxiliary","Refined Concrete Fish Cambridgeshire",{_id: 26743,str: "Centers Senior haptic",num: 28180,date: new Date("2018-09-06T00:40:12.007Z"),array: [42076,"Awesome Soft Table policy black"],obj: {_id: 26744,str: "Electronics GB",date: new Date("2018-09-05T21:52:37.541Z"),obj: {_id: 26745,str: "Auto Loan Account",num: 84343,date: new Date("2018-09-06T03:52:41.940Z"),array: [44445]}}},{_id: 26746,str: "New Mexico Chicken",num: 6226,obj: {_id: 26747,date: new Date("2018-09-06T01:51:36.708Z"),array: [[],62234],obj: {}}},new Date("2018-09-06T17:10:38.440Z"),[],new Date("2018-09-05T23:30:02.079Z")],obj: {_id: 26748,str: "pink",date: new Date("2018-09-06T09:47:11.787Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26749,str: "Practical Rubber Towels",num: 34841,date: new Date("2018-09-06T13:59:29.508Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26750,str: "Sleek Rustic Frozen Salad uniform",num: 90082,date: new Date("2018-09-06T02:14:48.821Z"),array: [],obj: {_id: 26751,str: "frame",num: 37139,array: ["Buckinghamshire schemas Human",new Date("2018-09-06T04:13:12.878Z"),39934,[],"HDD Future Home Loan Account","deposit copy aggregate",new Date("2018-09-06T01:16:23.665Z"),new Date("2018-09-06T04:59:51.588Z"),22745,new Date("2018-09-06T17:08:35.711Z"),{_id: 26752,str: "Canyon Extensions",num: 8656,date: new Date("2018-09-06T00:27:22.660Z"),array: [46573],obj: {}},21774,new Date("2018-09-06T08:30:08.435Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26753,str: "1080p",num: 48185,array: []});
    },

    function(coll) {
        return coll.insert({_id: 26754,str: "Arkansas teal cutting-edge",num: 6525,date: new Date("2018-09-06T10:33:24.353Z"),array: ["Cambridgeshire",{_id: 26755,str: "transition Summit",num: 96612,array: [new Date("2018-09-06T11:28:02.633Z"),new Date("2018-09-06T15:38:07.794Z"),79024],obj: {_id: 26756,str: "Toys Mountains XML",num: 64761,date: new Date("2018-09-06T09:10:34.779Z"),obj: {_id: 26757,str: "Granite",num: 22435,array: []}}},"THX Gorgeous",12668,[new Date("2018-09-05T21:18:32.399Z")],43791,86361,new Date("2018-09-06T07:18:59.727Z"),"didactic interface initiatives",[],[],"technologies"],obj: {_id: 26758,num: 26266,date: new Date("2018-09-06T17:13:00.420Z"),array: [new Date("2018-09-06T05:06:43.963Z")],obj: {_id: 26759,num: 52654,date: new Date("2018-09-06T02:11:01.445Z"),array: ["Fantastic action-items","Strategist infomediaries",{_id: 26760,str: "deposit Fresh",date: new Date("2018-09-06T09:06:16.428Z"),array: []}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26761,str: "Data Pants navigating",num: 14423,date: new Date("2018-09-06T12:07:46.523Z"),array: [80699,new Date("2018-09-06T05:21:31.570Z"),new Date("2018-09-06T07:14:14.079Z"),"Falkland Islands (Malvinas) Investment Account payment","Soft Cotton","data-warehouse regional matrix",new Date("2018-09-06T15:56:33.906Z"),93679,"compressing Ethiopia Metal",{_id: 26762,str: "deposit Metal THX",num: 61725,date: new Date("2018-09-06T10:34:21.241Z"),array: [],obj: {}},85361,70923],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26763,str: "disintermediate",num: 16291,array: ["Strategist",new Date("2018-09-06T17:05:49.213Z"),39634,[],83377,new Date("2018-09-06T06:50:40.984Z"),50639,{_id: 26764,str: "parse Gorgeous Wooden Chair",date: new Date("2018-09-06T08:33:09.174Z"),array: [new Date("2018-09-06T12:09:57.125Z"),"standardization","copying Crescent online"],obj: {}},{_id: 26765,str: "Automotive Virginia blue",num: 86985,date: new Date("2018-09-06T06:34:44.307Z"),array: [],obj: {_id: 26766,str: "sensor navigating",num: 80904,obj: {_id: 26767,num: 12522,array: [new Date("2018-09-06T11:12:39.392Z"),36893,53900]}}},74493,[]],obj: {_id: 26768,str: "background monitor",num: 71697,date: new Date("2018-09-06T03:12:59.468Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26769,num: 80450,date: new Date("2018-09-06T10:23:33.746Z"),array: [],obj: {_id: 26770,str: "Orchestrator",num: 62383,date: new Date("2018-09-06T01:39:49.385Z"),obj: {_id: 26771,str: "Sleek Gorgeous",num: 38717,date: new Date("2018-09-06T17:34:03.722Z"),array: ["Tasty Branding",new Date("2018-09-06T03:13:15.783Z"),38350,[new Date("2018-09-06T03:46:28.707Z"),"Metal Configurable ROI",{_id: 26772,str: "deposit",date: new Date("2018-09-05T22:37:14.735Z"),array: [],obj: {}}],["Pre-emptive schemas"],65820,{_id: 26773,str: "Borders global Unbranded"},new Date("2018-09-06T02:35:08.580Z"),"Garden"]}}});
    },

    function(coll) {
        return coll.insert({_id: 26774,str: "Chilean Peso Unidades de fomento Home Loan Account",num: 3368,date: new Date("2018-09-06T08:20:03.824Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26775,str: "grey",num: 27327,date: new Date("2018-09-06T17:04:22.753Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26776,str: "Avon",num: 33355,array: [{_id: 26777,str: "Jewelery Avon",date: new Date("2018-09-06T13:29:27.295Z"),array: [],obj: {_id: 26778,str: "reboot Fantastic Practical",num: 38799,date: new Date("2018-09-06T11:54:37.338Z")}},"Utah",new Date("2018-09-05T20:12:42.219Z"),83444,{_id: 26779,num: 66672,date: new Date("2018-09-06T06:19:36.050Z"),array: [new Date("2018-09-06T00:31:40.960Z"),new Date("2018-09-06T09:52:50.769Z"),"Bedfordshire benchmark"],obj: {}},new Date("2018-09-06T08:45:29.743Z"),[],19604,"Path Customizable Argentine Peso",65420,{_id: 26780,num: 50313,date: new Date("2018-09-06T04:53:23.721Z"),array: [],obj: {_id: 26781,str: "Cambridgeshire mobile",date: new Date("2018-09-05T22:52:13.214Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26782,str: "salmon",num: 10867,date: new Date("2018-09-06T13:20:48.430Z"),array: [],obj: {_id: 26783,num: 93646,array: [[],{_id: 26784,str: "Fantastic",num: 75563,date: new Date("2018-09-05T23:00:02.511Z"),array: [99628,88831]},"Berkshire Car",new Date("2018-09-06T00:35:06.562Z"),[],new Date("2018-09-05T23:14:17.228Z"),"GB quantify expedite",{_id: 26785,str: "Small cross-platform",date: new Date("2018-09-06T00:48:55.350Z"),array: ["enterprise PCI",new Date("2018-09-06T12:30:44.961Z"),"Granite"],obj: {_id: 26786,str: "Fantastic",num: 98756}},"Adaptive",980],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26787,str: "Lek wireless",num: 53326,date: new Date("2018-09-06T03:30:21.765Z"),array: [],obj: {_id: 26788,str: "EXE",num: 11419,date: new Date("2018-09-06T06:24:02.136Z"),array: [40833,[],new Date("2018-09-06T00:03:25.982Z"),"Avon",new Date("2018-09-06T08:42:19.516Z"),39073,new Date("2018-09-06T14:06:09.579Z"),[21923],{_id: 26789,num: 13714,obj: {}},["program","Club scalable",{_id: 26790,str: "visionary",num: 27228,date: new Date("2018-09-06T18:21:00.596Z"),array: [{_id: 26791,array: []},98372]}],new Date("2018-09-06T00:58:22.101Z"),90121],obj: {_id: 26792,str: "Forward withdrawal",num: 45899,date: new Date("2018-09-06T17:59:25.225Z"),obj: {_id: 26793,str: "Grenada intuitive",date: new Date("2018-09-06T09:56:37.951Z"),array: ["Moldovan Leu maroon","Incredible"],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 26794,str: "SQL",num: 43825,date: new Date("2018-09-06T00:17:17.313Z"),array: [95157,new Date("2018-09-05T22:04:10.633Z"),"Tuna Cyprus",{_id: 26795,str: "innovative",num: 32630,date: new Date("2018-09-06T09:01:26.689Z"),array: [],obj: {}},3801,[],"logistical homogeneous cyan","Home Global",["payment Awesome optical",9515,new Date("2018-09-06T13:56:40.479Z"),new Date("2018-09-06T15:09:23.429Z")],29364,"connecting Burgs redefine"],obj: {_id: 26796,str: "Fresh foreground",date: new Date("2018-09-05T23:11:51.020Z"),array: [[{_id: 26797,str: "Generic",num: 59931,date: new Date("2018-09-06T00:50:56.768Z"),obj: {_id: 26798,num: 37587,array: []}}]],obj: {_id: 26799,str: "transmitter",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 26800,str: "grow",date: new Date("2018-09-06T19:15:05.730Z"),array: [],obj: {_id: 26801,str: "Keys Tala Licensed",num: 16564,array: ["Rustic Fresh Car",22415,20298,new Date("2018-09-06T13:55:13.812Z"),96822,[{_id: 26802,str: "holistic",date: new Date("2018-09-06T14:25:47.507Z"),array: [],obj: {_id: 26803,str: "Zimbabwe Dollar Auto Loan Account programming",num: 85219,date: new Date("2018-09-05T23:49:24.062Z")}},new Date("2018-09-06T10:38:37.789Z")],[],"Circle Maine Forks","Fantastic"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26804,str: "overriding",num: 59023,date: new Date("2018-09-06T01:45:01.758Z"),array: [],obj: {_id: 26805,array: ["Norwegian Krone overriding",42226,new Date("2018-09-06T17:45:27.980Z"),2736,"Metal Missouri SSL",new Date("2018-09-06T04:57:49.993Z"),{_id: 26806,str: "Practical Small Soft Bike leverage",num: 26051,date: new Date("2018-09-06T01:47:03.287Z"),array: ["Antigua and Barbuda unleash Health"],obj: {}},[77967,new Date("2018-09-06T12:45:48.410Z")],new Date("2018-09-06T19:45:01.514Z"),"generating attitude-oriented",62263,[],new Date("2018-09-06T16:02:55.965Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 26807,str: "lime Down-sized",num: 10801,date: new Date("2018-09-06T05:54:15.651Z"),array: [42561,87163,"B2B",new Date("2018-09-06T16:54:51.934Z"),"Island",{_id: 26808,str: "Rwanda Ergonomic Rubber Chair Djibouti Franc",num: 68060,date: new Date("2018-09-06T13:16:48.236Z"),array: [],obj: {}},new Date("2018-09-06T01:16:19.680Z"),"software enable AGP",59892,new Date("2018-09-06T14:10:02.696Z"),new Date("2018-09-06T19:43:34.674Z"),[[],37120,"Nevada redefine",58861]],obj: {_id: 26809,num: 86478,array: [],obj: {_id: 26810,str: "exploit Turnpike",date: new Date("2018-09-06T19:37:13.784Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 26811,num: 2661,date: new Date("2018-09-06T19:16:54.276Z"),array: [19557,"hierarchy mission-critical Usability",38173,new Date("2018-09-06T03:58:57.171Z"),60960,[new Date("2018-09-06T09:44:16.554Z"),"client-driven grid-enabled Bedfordshire","cutting-edge","Money Market Account Rubber"],{_id: 26812,str: "Consultant circuit Bedfordshire",num: 60399,date: new Date("2018-09-06T07:29:35.900Z"),array: [],obj: {}},new Date("2018-09-06T00:16:01.843Z"),{_id: 26813,str: "Rwanda Franc withdrawal",num: 74434,date: new Date("2018-09-06T17:19:37.623Z"),array: [{_id: 26814,str: "Ramp Savings Account Tunnel",num: 12522,date: new Date("2018-09-06T05:43:19.471Z"),array: [],obj: {}},[],68425],obj: {}},new Date("2018-09-06T07:32:36.211Z")],obj: {_id: 26815,str: "Cambridgeshire",date: new Date("2018-09-05T21:59:11.367Z")}});
    },

    function(coll) {
        return coll.insert({_id: 26816,str: "Saint Helena Pound rich",num: 4179,date: new Date("2018-09-06T13:46:59.159Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26817,str: "SSL uniform",num: 26124,date: new Date("2018-09-06T14:48:05.661Z"),array: [],obj: {_id: 26818,str: "invoice Arkansas Wyoming",num: 58211,array: [5772,24067,"navigating Checking Account","Bedfordshire","deploy program deposit",new Date("2018-09-06T09:00:18.393Z"),"application revolutionize",{_id: 26819,date: new Date("2018-09-05T20:02:46.253Z"),array: [new Date("2018-09-06T07:29:37.270Z"),"Concrete"]},new Date("2018-09-06T01:53:28.658Z"),[],new Date("2018-09-06T14:55:27.234Z"),18426],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26820,str: "mint green",num: 16066,date: new Date("2018-09-06T01:55:31.428Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26821,str: "Metrics",num: 61869,date: new Date("2018-09-06T06:16:53.297Z"),array: [],obj: {_id: 26822,str: "Engineer",num: 62942,date: new Date("2018-09-06T17:50:41.938Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26823,str: "Delaware",num: 5084,date: new Date("2018-09-06T02:05:59.193Z"),array: [],obj: {_id: 26824,str: "ADP",array: [new Date("2018-09-06T04:35:58.061Z"),new Date("2018-09-05T22:12:48.586Z"),44196,{_id: 26825,str: "Intelligent Concrete Gloves Avon",date: new Date("2018-09-06T17:58:47.854Z"),array: [63036,"Intelligent Fresh Fish Clothing",19719,{_id: 26826,num: 96321,obj: {_id: 26827,str: "Music back-end Springs",date: new Date("2018-09-06T13:16:05.884Z"),array: [],obj: {}}},{_id: 26828,num: 3764,date: new Date("2018-09-05T23:38:05.234Z"),obj: {}},[],new Date("2018-09-05T20:06:48.711Z")]},"Team-oriented Borders","Unbranded Wooden Bacon Consultant",new Date("2018-09-06T10:40:46.812Z"),"Niue Granite Marketing",new Date("2018-09-06T19:46:04.765Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 26829,str: "THX Handmade context-sensitive",num: 36762,date: new Date("2018-09-06T11:29:30.913Z"),array: [],obj: {_id: 26830,str: "withdrawal",date: new Date("2018-09-06T00:38:03.303Z"),array: [new Date("2018-09-06T14:39:29.596Z"),54975,"copy",90676,"Ergonomic",[],{_id: 26831,str: "utilize Gorgeous Granite Gloves",num: 26406,date: new Date("2018-09-06T02:41:53.890Z"),array: [],obj: {}},[55284,"upward-trending Mali navigating",new Date("2018-09-05T20:10:54.009Z")],new Date("2018-09-06T17:53:23.004Z"),[62627,"calculating users","Buckinghamshire Shoes Dynamic"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26832,num: 17597,date: new Date("2018-09-06T01:06:51.304Z"),array: [84861,79864,new Date("2018-09-06T18:24:24.717Z"),"experiences Producer Credit Card Account",new Date("2018-09-06T12:41:24.963Z"),"Awesome Rubber Ball New Hampshire","moratorium Face to face Cuban Peso Peso Convertible",new Date("2018-09-06T11:11:38.727Z"),[],{_id: 26833,str: "HTTP FTP",num: 60106,date: new Date("2018-09-06T00:38:14.506Z"),array: [],obj: {}},"bandwidth Reverse-engineered"],obj: {_id: 26834,str: "Future-proofed haptic",num: 51015,date: new Date("2018-09-06T16:17:35.610Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26835,num: 80047,date: new Date("2018-09-06T16:28:29.226Z"),array: [new Date("2018-09-06T16:32:24.562Z"),new Date("2018-09-06T01:20:10.352Z"),"mobile transmitter",59252,[],"Singapore portals Outdoors",5620,20776,new Date("2018-09-05T20:31:09.683Z"),54104,{_id: 26836,str: "1080p Expanded system",num: 2519,date: new Date("2018-09-06T01:36:20.383Z"),array: [[[new Date("2018-09-06T07:29:09.882Z")]],{_id: 26837,num: 54666,date: new Date("2018-09-06T11:29:41.606Z"),array: [],obj: {}},"Central"],obj: {_id: 26838,str: "plug-and-play Christmas Island efficient",date: new Date("2018-09-06T08:32:55.691Z"),obj: {}}},new Date("2018-09-06T15:45:30.206Z"),new Date("2018-09-06T17:18:44.112Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26839,str: "connecting Chair",num: 28595,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26840,str: "partnerships",num: 22546,date: new Date("2018-09-06T12:34:48.966Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26841,str: "explicit protocol",date: new Date("2018-09-06T19:46:44.901Z"),obj: {_id: 26842,str: "Movies",num: 10490,date: new Date("2018-09-06T13:44:18.655Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26843,str: "interface Fantastic bandwidth",num: 58913,date: new Date("2018-09-06T08:59:49.890Z"),array: ["Books",91604,10188,new Date("2018-09-06T00:31:13.870Z"),new Date("2018-09-06T01:51:44.714Z"),"open-source vortals Table","compressing circuit Focused",39133,new Date("2018-09-05T20:26:53.978Z"),34478,{_id: 26844,num: 33703,date: new Date("2018-09-06T12:29:38.977Z"),array: [90759,"mobile Administrator Money Market Account","Mouse"],obj: {_id: 26845,str: "explicit Generic Soft Chips",num: 20843,date: new Date("2018-09-06T05:47:22.235Z"),array: [],obj: {}}},new Date("2018-09-06T13:50:27.142Z"),90634],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26846,str: "Jersey Music",num: 37221,array: [new Date("2018-09-06T10:12:37.285Z"),[],87178,45611,["Organic Louisiana",78555,"Electronics navigate"],new Date("2018-09-06T09:36:24.822Z"),{_id: 26847,str: "Small Fresh Bacon Poland capacity",num: 85154,date: new Date("2018-09-06T04:40:53.795Z"),array: [],obj: {}},[],"overriding Car compress",new Date("2018-09-06T15:22:59.866Z"),41910],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26848,str: "transmitter",num: 71925,date: new Date("2018-09-06T15:23:33.911Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26849,str: "index distributed programming",num: 76557,date: new Date("2018-09-06T19:20:05.991Z"),array: [],obj: {_id: 26850,str: "monitoring National",num: 66610,date: new Date("2018-09-06T07:58:24.592Z"),array: [77856,"Planner Lilangeni yellow",new Date("2018-09-06T04:52:29.962Z"),["synthesizing superstructure visualize",new Date("2018-09-06T01:48:21.982Z"),83495,35288],{_id: 26851,str: "Venezuela",date: new Date("2018-09-06T03:40:43.461Z"),array: ["Cambridgeshire networks Enhanced"],obj: {}},new Date("2018-09-06T18:22:42.166Z"),"Programmable Codes specifically reserved for testing purposes Somalia",[],new Date("2018-09-06T03:57:32.297Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 26852,str: "Gorgeous Steel Towels",num: 5885,date: new Date("2018-09-06T04:01:14.066Z"),array: [new Date("2018-09-06T09:31:45.271Z"),new Date("2018-09-06T19:18:16.403Z"),68965,"Granite Team-oriented",[],53680,[],new Date("2018-09-06T05:23:27.717Z"),new Date("2018-09-06T12:52:12.214Z"),7648,76182],obj: {_id: 26853,str: "tan infrastructures",num: 24653,date: new Date("2018-09-06T11:45:16.796Z"),array: ["Iceland",new Date("2018-09-06T03:54:16.944Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 26854,str: "Chips",num: 60809,date: new Date("2018-09-06T01:44:20.217Z"),array: [],obj: {_id: 26855,str: "Ergonomic Granite Tuna Accounts Borders",num: 21078,date: new Date("2018-09-06T00:25:55.486Z"),array: [18422,new Date("2018-09-06T13:43:17.067Z"),68892,"Computer Home Loan Account","withdrawal bypassing",16979,new Date("2018-09-06T00:53:13.805Z"),"XSS Future",[new Date("2018-09-06T15:57:16.619Z"),["background Architect bypassing",new Date("2018-09-05T20:27:59.728Z"),{_id: 26856,str: "Colorado revolutionize",num: 20620,obj: {_id: 26857,num: 67905,date: new Date("2018-09-06T06:52:24.178Z"),array: [75126]}},"deposit Industrial Wooden",70696]],{_id: 26858,str: "Computer",num: 15752,date: new Date("2018-09-06T11:12:33.113Z"),array: [],obj: {_id: 26859,array: []}}]}});
    },

    function(coll) {
        return coll.insert({_id: 26860,str: "help-desk Malawi back up",date: new Date("2018-09-05T22:39:49.018Z"),array: [],obj: {_id: 26861,str: "Small driver",num: 95117,array: [56628,new Date("2018-09-06T09:37:16.290Z"),{_id: 26862,str: "Tugrik",num: 72459,date: new Date("2018-09-06T06:30:38.058Z"),array: [[],new Date("2018-09-06T01:40:04.408Z"),new Date("2018-09-06T00:23:29.874Z")],obj: {}},13121,"generate","primary","scalable",new Date("2018-09-06T12:36:13.824Z"),52233,{_id: 26863,str: "enhance",date: new Date("2018-09-06T18:46:29.885Z"),array: [68073],obj: {_id: 26864,str: "Home",num: 75715,date: new Date("2018-09-06T01:18:36.255Z"),obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 26865,str: "Investment Account sexy",num: 2397,date: new Date("2018-09-06T13:09:05.193Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26866,date: new Date("2018-09-06T04:57:41.680Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26867,str: "Oval Developer European Unit of Account 17(E.U.A.-17)",num: 92365,date: new Date("2018-09-06T08:53:16.859Z"),array: [new Date("2018-09-06T08:49:23.838Z"),new Date("2018-09-06T15:12:11.786Z"),"infrastructures Liaison Internal","Iraq Grocery",{_id: 26868,str: "Boliviano Mvdol",num: 53513,date: new Date("2018-09-06T05:29:43.854Z"),array: [],obj: {_id: 26869,str: "Borders Markets",num: 11387,date: new Date("2018-09-06T01:07:30.060Z"),array: [[],19908,"Soap Electronics",94470],obj: {}}},{_id: 26870,str: "Baby",num: 40718,date: new Date("2018-09-05T22:53:58.941Z"),array: [77502],obj: {_id: 26871,str: "1080p content UAE Dirham",date: new Date("2018-09-05T23:10:13.550Z"),array: [],obj: {}}},"connect Pizza",46174,new Date("2018-09-06T18:38:56.168Z"),{_id: 26872,num: 64220,date: new Date("2018-09-06T13:11:06.099Z")},new Date("2018-09-06T12:41:40.039Z")]});
    },

    function(coll) {
        return coll.insert({_id: 26873,str: "deposit THX",num: 53988,date: new Date("2018-09-06T07:25:27.207Z"),array: [15771,"initiative CSS","Planner Cheese",new Date("2018-09-06T03:40:34.121Z"),new Date("2018-09-06T03:27:25.800Z"),50050,{_id: 26874,str: "Chief microchip",num: 73179,date: new Date("2018-09-06T03:46:55.559Z"),obj: {}},72651,{_id: 26875,str: "Plaza Yemen",num: 29641,date: new Date("2018-09-06T07:00:30.123Z"),array: [],obj: {_id: 26876,str: "Optimization Total",array: [new Date("2018-09-06T16:58:36.950Z"),{_id: 26877,num: 59961,obj: {}},[],"Practical",19449],obj: {_id: 26878,num: 23584,date: new Date("2018-09-05T23:07:10.122Z"),array: ["New Taiwan Dollar"]}}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 26879,str: "payment Home Loan Account",num: 84079,date: new Date("2018-09-05T22:40:21.645Z"),array: [],obj: {_id: 26880,str: "Designer",date: new Date("2018-09-06T02:26:01.104Z"),array: [new Date("2018-09-06T17:51:50.022Z"),93423,["Buckinghamshire white","payment"],14937,63309,new Date("2018-09-06T09:12:59.963Z"),{_id: 26881,num: 71643,date: new Date("2018-09-06T12:50:30.558Z"),array: [],obj: {_id: 26882,str: "XML Internal",num: 5525,date: new Date("2018-09-06T02:45:28.214Z"),obj: {_id: 26883,obj: {}}}},new Date("2018-09-06T09:04:50.170Z"),"mission-critical Future mint green","Home Loan Account Object-based",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 26884,str: "override Tasty",num: 84981,date: new Date("2018-09-06T19:14:45.316Z"),array: [21996,"Generic Rubber Chair web services",24048,new Date("2018-09-06T10:07:15.058Z"),"hacking",new Date("2018-09-06T13:54:50.939Z"),new Date("2018-09-05T22:00:45.375Z"),{_id: 26885,str: "brand",num: 18876,array: [[]],obj: {_id: 26886,str: "solutions driver",num: 12724,date: new Date("2018-09-06T07:37:10.655Z"),array: []}},new Date("2018-09-06T02:45:40.489Z"),"Public-key","Metal"]});
    },

    function(coll) {
        return coll.insert({_id: 26887,str: "Legacy Cook Islands",num: 85101,date: new Date("2018-09-06T07:02:26.632Z"),array: [new Date("2018-09-06T06:54:21.840Z"),"payment redundant Arizona","Investment Account",[],"integrated Buckinghamshire Principal",87718,{_id: 26888,str: "Steel array Incredible",num: 69426,date: new Date("2018-09-06T01:31:03.795Z"),array: [],obj: {}},50562,2181,new Date("2018-09-06T09:10:01.262Z"),"Money Market Account Buckinghamshire",{_id: 26889,num: 73730,date: new Date("2018-09-06T15:00:05.525Z"),obj: {_id: 26890,date: new Date("2018-09-05T21:56:21.921Z"),array: [new Date("2018-09-06T14:59:40.340Z"),new Date("2018-09-06T15:48:25.988Z")],obj: {_id: 26891,str: "schemas matrix Fresh",num: 9079}}},[]]});
    },

    function(coll) {
        return coll.insert({_id: 26892,str: "Architect",num: 44194,date: new Date("2018-09-05T21:40:18.642Z"),array: [],obj: {_id: 26893,str: "Forward",num: 88230,date: new Date("2018-09-06T03:48:54.410Z"),array: [],obj: {_id: 26894,str: "red Designer",num: 8417,date: new Date("2018-09-06T11:41:00.434Z"),array: [89040,29578,"Frozen Refined Cotton Pants","implement",new Date("2018-09-06T13:36:57.071Z"),new Date("2018-09-06T11:28:40.353Z"),44643,["interface extensible",{_id: 26895,num: 28336,date: new Date("2018-09-06T06:51:36.729Z"),array: ["reboot cutting-edge",new Date("2018-09-06T00:21:06.479Z"),[32116,28703,"Alaska Kenya"],23334,"Saint Vincent and the Grenadines Tasty"],obj: {}}],new Date("2018-09-06T17:30:39.401Z"),{_id: 26896,str: "Malaysian Ringgit Officer Rustic",date: new Date("2018-09-06T06:25:11.599Z"),obj: {}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26897,num: 27397,date: new Date("2018-09-06T04:09:40.499Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26898,str: "backing up Direct networks",num: 46789,array: [21416,new Date("2018-09-06T02:24:13.343Z"),[],{_id: 26899,str: "SMS Stand-alone",num: 61414,date: new Date("2018-09-06T02:08:42.627Z"),array: [new Date("2018-09-06T19:34:20.282Z"),"Intuitive Industrial",new Date("2018-09-06T03:58:16.025Z"),87833,"SQL",[{_id: 26900,str: "Tools auxiliary",num: 25646,date: new Date("2018-09-06T16:00:48.270Z"),array: [],obj: {}},"optical grid-enabled",26714,79504,new Date("2018-09-06T00:03:39.080Z")],new Date("2018-09-06T10:35:09.750Z")],obj: {_id: 26901,str: "support Profit-focused transmitting",date: new Date("2018-09-05T22:08:39.093Z"),obj: { _id: 26902 }}}],obj: {_id: 26903,str: "El Salvador Colon US Dollar Borders",num: 40700,date: new Date("2018-09-05T21:30:22.239Z"),array: [91791],obj: {}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "date": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $trim: {input: "AGP wireless",chars: { $concat: [{ $toUpper: { $toLower: '$str' } },{ $toString: { $dayOfWeek: { $hour: { $second: { $second: { $year: { $second: '$obj.date' } } } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],69484] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Money Market Account"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $rtrim: { input: "redundant Delaware" } },6,9] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[94153],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T12:28:25.071Z",format: "%G-%G-%M-%L-%w-%d-%%-%z-%G-%H-%d"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str','$obj.obj.str'],[42799],[],['$obj.obj.str',"EXE circuit"]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Chips",1,6] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfMonth: { $dateToParts: {date: { $minute: { $year: { $dateToString: { date: new Date("2018-09-06T15:27:07.005Z") } } } },timezone: "Zulu",iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToString: {date: '$obj.obj.date',onNull: "Regional auxiliary Visionary"} },timezone: "America/Mendoza",onNull: { $toDate: { $toLower: { $substr: ['$obj.obj.str',0,2] } } }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: "Borders Gorgeous Cotton Cheese system" },2,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],76090] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Avon","Auto Loan Account",'$obj.obj.str'],[],['$obj.str',{ $toLower: { $substrCP: ['$str',17,14] } },{ $substr: ["invoice",9,8] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[40674,'$num'],51576] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $second: { $hour: '$date' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Bedfordshire synthesize Hawaii"],68639] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "visualize Infrastructure",v: '$obj.obj.obj.date'},{k: "AGP Lead robust",v: { $dateToParts: { date: { $year: { $millesecond: { $toDate: { $arrayElemAt: [["Tasty Granite Keyboard","Sports",'$obj.obj.str'],'$obj.obj.num'] } } } } } }},{k: "online Bahraini Dinar Sri Lanka Rupee",v: { $substrCP: [{ $substrBytes: [{ $toString: { $month: { $dayOfWeek: { $dayOfWeek: { $dayOfWeek: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T15:20:30.697Z",timezone: "America/Cancun"} } } } } } } },9,4] },11,6] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Ethiopian Birr",'$obj.str'],27950] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Sleek Granite Hat",v: '$num'},{k: "Configuration",v: true}]] }, _id: 0}}],

        [{$project: {a: { $range: [8,19] }, _id: 0}}],

        [{$project: {a: { $hour: { $isoDayOfWeek: { $dayOfWeek: { $isoWeek: { $dayOfYear: { $week: { $second: { $isoWeekYear: { $millesecond: { $toDate: { $arrayToObject: [[[{ $substr: ['$obj.obj.str',12,3] }],[]]] } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $year: { $week: { $hour: { $dateFromString: {dateString: "2018-09-06T15:49:10.763Z",onNull: "Small"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "solid state",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $range: [11,20] } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [["application","JBOD Monitored"],[]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Handcrafted deposit"],as: 'harvey',cond: false} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $week: { $minute: { $isoDayOfWeek: { $dayOfYear: { $isoDayOfWeek: { $dayOfWeek: { $dayOfMonth: { $hour: { $week: { $millesecond: { $toDate: { $substrCP: ['$obj.str',4,14] } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num']]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Alabama" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $toString: { $arrayElemAt: [[],79713] } },'$str',{ $substrBytes: ["Shirt mobile",14,2] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "benchmark morph" },"Investor"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $isoDayOfWeek: { $dateToString: { date: '$obj.date' } } } }],["Auto Loan Account",'$obj.str',{ $dateToString: {date: '$obj.date',format: "%S-%w-%w-%G-%U-%w-%j-%G-%G",timezone: "Pacific/Marquesas"} }],["Group Research sky blue"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],["West Virginia","Agent payment Chips"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$num',57824],['$str']]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T22:43:11.186Z"),format: "%G-%u-%U-%m-%M-%S-%L-%d-%w-%Y-%%",timezone: "Canada/Pacific",onNull: { $arrayElemAt: [[],99150] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Solutions",v: new Date("2018-09-06T11:11:12.808Z")},{k: "transmitting",v: { $toUpper: "Philippines Pakistan Rupee gold" }}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $substrCP: [{ $ltrim: {input: '$obj.str',chars: '$str'} },5,4] }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],22720] }, _id: 0}}],

        [{$project: {a: { $range: [14,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$str'],["AI fresh-thinking Books"],[],['$num','$obj.date',true],[]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $trim: {input: '$obj.str',chars: "Haven transparent"} },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.str'],['$num',91252],['$obj.obj.obj.num',60171,'$num']]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Specialist backing up Automotive" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ['$obj.str',"Wisconsin"] },'$obj.str'],[],[94380]]] }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfWeek: { $minute: { $dateFromParts: {isoWeekYear: 68528,isoWeek: { $ceil: '$obj.obj.obj.num' },isoDayOfWeek: { $sqrt: '$obj.obj.obj.num' },minute: { $add: [{ $cmp: [{ $zip: {inputs: [["Vermont",{ $trim: {input: '$obj.str',chars: '$obj.obj.str'} },{ $concat: ["backing up invoice"] },"transmit Fresh"],[],[{ $substrBytes: ["functionalities Investment Account",7,5] },{ $substrCP: ['$str',5,20] }]],defaults: [{},15113]} },{ $arrayElemAt: [[{ $substrCP: ['$str',14,2] },"connecting cohesive",{ $rtrim: { input: '$str' } },"silver Buckinghamshire Assurance"],57855] }] },'$obj.obj.num',53870] },second: { $cmp: [{ $dateFromString: {dateString: "2018-09-06T10:48:21.944Z",format: "%u-%d-%L-%Z-%V-%m-%w-%H-%S"} },{ $arrayToObject: [[]] }] },millisecond: { $floor: '$obj.obj.num' }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $dayOfMonth: { $isoWeekYear: { $week: { $dateToParts: {date: { $minute: { $dateToParts: {date: { $year: { $week: { $week: { $dateFromParts: {isoWeekYear: { $floor: 60272 },isoWeek: { $abs: '$obj.num' },isoDayOfWeek: { $subtract: [88965,51255] },hour: { $size: [[]] },minute: '$obj.obj.obj.num',millisecond: { $pow: ['$obj.obj.num','$obj.obj.obj.num'] }} } } } },timezone: "Asia/Dubai"} } },timezone: "America/Cayenne",iso8601: false} } } } },onNull: '$str'} },"incentivize bandwidth","extend"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $dateFromString: {dateString: "2018-09-05T23:54:31.710Z",format: "%G-%G-%w-%V-%L",timezone: "Asia/Vientiane",onError: { $zip: {inputs: [[{ $toUpper: '$obj.obj.str' }],['$obj.num'],[33639],[]],useLongestLength: false} }} } } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],[78276,'$obj.obj.num'],['$obj.obj.str',{ $concat: ["Computer orange Savings Account",{ $substr: ["alliance programming technologies",4,1] }] },'$obj.str','$obj.obj.str'],['$obj.num'],[],[{ $dateToString: {date: new Date("2018-09-06T10:50:05.891Z"),format: "%M-%U-%H-%%",onNull: "deposit mesh"} }]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [8,8,18] }, _id: 0}}],

        [{$project: {a: { $toLower: { $rtrim: { input: "Bypass" } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["navigating middleware",7,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],40436] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $week: { $dateToString: {date: { $minute: { $dateFromParts: {year: { $mod: ['$num',26958] },day: { $floor: 30722 },hour: { $trunc: '$obj.obj.num' },millisecond: { $ceil: 55499 },timezone: "America/Danmarkshavn"} } },timezone: "America/Indiana/Indianapolis"} } },timezone: "ROK"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $toString: { $filter: {input: [],as: 'maureen',cond: true} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],93659] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ["standardization",'$obj.str'] },"Clothing Avon Ball",'$obj.obj.str',{ $rtrim: {input: "Wooden",chars: "Incredible synergies Shoes"} }],[{ $concat: ['$obj.obj.str'] }],[],[{ $substr: ['$str',2,7] },{ $ltrim: { input: '$obj.str' } },"payment"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: '$str' } },"Tasty Fresh Pants indigo"],14988] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: '$obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Credit Card Account Arkansas European Monetary Unit (E.M.U.-6)",'$obj.obj.str'],59494] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],87433] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Avon cross-media interface",'$str',"Industrial Automotive Rustic Granite Soap"],[]]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Agent",chars: { $trim: { input: "Administrator TCP" } }} }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $ltrim: { input: '$str' } },chars: { $toUpper: "Optimization" }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $size: [[{ $substrCP: ["Movies",7,1] }]] }] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $minute: { $toDate: { $concatArrays: [[{ $cmp: [{ $arrayElemAt: [[],60824] },{ $arrayToObject: [[[{ $substrBytes: ['$str',20,7] },'$obj.obj.str'],["payment Savings Account","Sleek Wooden Tuna"],[{ $substrCP: ['$obj.obj.str',18,12] },{ $ltrim: {input: { $concat: ["open-source"] },chars: '$obj.obj.str'} },"Jewelery matrix SQL"]]] }] },20105,{ $exp: '$num' }],['$obj.str',{ $toUpper: "paradigm microchip" },"capacitor Turks and Caicos Islands turn-key"]] } } },timezone: "Asia/Ulan_Bator"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[2995,'$obj.num',61473,'$num'],98880] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T05:24:28.529Z"),format: "%U-%G-%V-%j-%G-%H-%z-%U",timezone: "Pacific/Guadalcanal",onNull: { $map: {input: [33495],as: 'makenna',in: { $subtract: ['$$makenna','$$makenna'] }} }} }, _id: 0}}],

        [{$project: {a: { $toLower: "lavender Pizza application" }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.num']] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[60755],["Niue"],['$obj.obj.obj.num','$obj.obj.num'],[{ $substrCP: ["purple",3,19] },'$str',{ $substrBytes: ['$obj.obj.str',13,6] },'$obj.str'],["digital Credit Card Account tertiary",{ $substrBytes: ['$obj.str',8,12] }]] } }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.str',chars: { $dateToString: {date: new Date("2018-09-06T05:22:58.999Z"),format: "%G-%Y-%S-%V-%d-%Y-%G-%m-%%-%%-%Y",onNull: { $arrayElemAt: [[19149,10998,10309],'$num'] }} }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[61229,'$obj.obj.obj.num'],[],[87500,'$obj.num',{ $multiply: [] }]]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Granite generating Bedfordshire" }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "New Zealand Dollar Soft synthesize",v: { $dayOfMonth: { $dateToParts: {date: { $month: { $minute: { $millesecond: { $dayOfYear: { $isoWeek: { $year: { $dateToParts: {date: { $dayOfMonth: { $isoWeekYear: { $minute: { $toDate: { $objectToArray: '$obj.obj.obj.obj' } } } } },timezone: "Chile/Continental"} } } } } } } },iso8601: true} } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "programming input Cuban Peso Peso Convertible",v: 34071}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $dateToString: {date: new Date("2018-09-06T09:47:10.629Z"),format: "%w-%V-%u-%Y-%%-%G",timezone: "America/North_Dakota/Center"} } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str'],as: 'toby',in: { $exp: 11077 }} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfWeek: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T10:07:42.654Z",onError: { $arrayElemAt: [['$obj.str'],80614] },onNull: { $toUpper: "Cotton" }} } } },timezone: "America/Virgin"} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfWeek: { $month: { $dateFromString: {dateString: "2018-09-06T13:28:25.486Z",onError: { $dateToString: {date: new Date("2018-09-06T10:46:30.837Z"),timezone: "Australia/Broken_Hill"} },onNull: { $filter: {input: [733],cond: { $gt: [{ $arrayToObject: [[{k: "utilize Mozambique Lead",v: "wireless transmitting"},{k: "Mission digital",v: '$str'}]] },{ $objectToArray: '$$this' }] }} }} } } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfWeek: { $second: { $dateToString: {date: { $dateFromParts: {year: { $sqrt: '$num' },day: { $trunc: 46557 }} },format: "%d-%G-%w-%%-%V-%d-%z",timezone: "Europe/Podgorica",onNull: '$obj.str'} } } } }, _id: 0}}],

        [{$project: {a: { $range: [14,1,8] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $concat: ['$obj.str'] },'$obj.str'],in: { $pow: [77758,'$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $ltrim: { input: { $substrCP: ['$obj.obj.str',7,11] } } }],as: 'caleb',cond: { $in: [{ $arrayToObject: [[[],[41505,71591],[{ $rtrim: {input: "azure",chars: "HDD"} }],["navigating black hard drive"],[],[]]] },{ $zip: {inputs: [['$obj.obj.num'],['$$caleb']],defaults: ["Research"]} }] }} }, _id: 0}}],

        [{$project: {a: { $week: { $year: { $minute: { $isoWeekYear: { $week: { $hour: { $isoDayOfWeek: { $second: { $millesecond: { $dateToString: {date: { $month: { $minute: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-05T22:42:55.968Z",timezone: "Europe/Belgrade"} } } } },onNull: { $ltrim: { input: { $concat: ["Bike card vortals",'$obj.str'] } } }} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $substr: [{ $ltrim: { input: '$obj.str' } },16,0] }],["Distributed",'$obj.str'],[{ $toLower: '$obj.str' }],['$obj.num','$num',79744],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],330] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T23:07:11.465Z"),onNull: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.obj.num'],'$obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fantastic Fresh Gloves",v: new Date("2018-09-06T10:04:15.240Z")}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfYear: new Date("2018-09-06T13:41:20.350Z") } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: { $trim: {input: '$str',chars: "microchip"} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],21817] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $rtrim: {input: '$str',chars: "SAS Square Down-sized"} }],['$obj.obj.str'],[],[66884,91476]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.num'],[],[],['$obj.obj.obj.num',85071]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str',"ROI Granite Internal"]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $ln: 91893 },isoWeek: 54727,second: { $floor: '$obj.num' },millisecond: { $abs: 79949 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[56541,'$obj.obj.obj.num',{ $size: [['$obj.obj.str']] }],["exuding action-items SMS",{ $concat: ['$obj.str'] }],[],['$obj.str',"Home","system index"]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Arkansas" }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateToString: {date: new Date("2018-09-06T02:55:37.061Z"),format: "%S-%V-%m-%%-%M-%U-%Z-%z-%M"} } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Home Loan Account Bangladesh",'$obj.obj.str',{ $toString: { $concatArrays: [] } }],[96547],['$obj.num','$obj.obj.num',22009]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Handmade"],78338] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $toString: { $dateFromParts: {isoWeekYear: { $cmp: [{ $arrayToObject: [[{k: "interfaces deliverables Grocery",v: { $second: { $second: { $isoDayOfWeek: { $millesecond: { $dayOfMonth: { $month: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-05T21:13:40.798Z",onError: { $arrayToObject: [[{k: "paradigms Greece Legacy",v: '$obj.num'},{k: "West Virginia",v: new Date("2018-09-06T07:13:19.318Z")},{k: "monitor",v: false}]] },onNull: '$obj.obj.str'} },iso8601: true} } } } } } } }}]] },{ $arrayToObject: [[["Knolls Cayman Islands Dollar",{ $toUpper: "sensor calculate" },{ $substrBytes: ['$str',0,16] }],[],[],[],[]]] }] },isoDayOfWeek: { $log: ['$obj.num',67334] },hour: { $sqrt: '$obj.obj.num' },minute: { $floor: 52384 },second: { $subtract: ['$num',14017] },millisecond: { $cmp: [{ $ltrim: { input: "Auto Loan Account" } },{ $objectToArray: '$obj.obj' }] },timezone: "America/Santiago"} } },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[71686,'$obj.num',86389],'$num'] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $dateToString: {date: '$obj.obj.date',format: "%z-%u-%%-%L-%G-%w-%U-%S-%w-%z",timezone: "Etc/GMT+2",onNull: { $dateToString: {date: { $isoDayOfWeek: { $millesecond: { $dateToString: {date: new Date("2018-09-06T04:27:06.066Z"),format: "%G-%Y-%G-%u-%H-%u"} } } },format: "%G-%L-%Z-%V-%U-%w",onNull: { $arrayToObject: [[['$obj.obj.num']]] }} }} } } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substr: [{ $toUpper: "magnetic tan" },14,8] } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoWeek: { $dateFromParts: {isoWeekYear: { $multiply: [96696,73751,94295] },isoWeek: { $mod: ['$obj.obj.num','$obj.num'] },isoDayOfWeek: { $log10: '$obj.num' },hour: { $floor: 46440 },second: { $add: [] },timezone: "America/Nome"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Lead eyeballs Grocery",v: false},{k: "Legacy",v: '$obj.obj.num'},{k: "Designer",v: '$obj.date'},{k: "Rhode Island tertiary Saint Pierre and Miquelon",v: true}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: [] },15,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"calculate programming",{ $toString: { $arrayElemAt: [[{ $toString: { $arrayElemAt: [[{ $toLower: { $toString: { $arrayElemAt: [[],99862] } } },'$obj.str'],46644] } },"sensor"],'$obj.obj.num'] } }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num',{ $abs: 52181 }],[false,'$obj.obj.str',27778],["El Salvador Colon US Dollar"],[],[{ $trim: {input: "Vision-oriented",chars: { $substrCP: [{ $substr: ["envisioneer",15,19] },3,8] }} }]]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $minute: { $hour: { $isoWeek: { $year: { $isoDayOfWeek: '$obj.obj.obj.date' } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.num',27110,10758],["Practical Frozen Cheese Rustic Wooden Bacon",'$obj.obj.str',{ $concat: ['$str'] }],[{ $substr: ["Crest Buckinghamshire superstructure",1,7] }]],useLongestLength: false,defaults: [true]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [12,2] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $dateToString: {date: new Date("2018-09-05T20:45:37.725Z"),format: "%V-%V-%U-%d-%L",onNull: "TCP"} }],['$str','$str'],[{ $concat: [] },'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "override",v: { $toUpper: '$obj.str' }},{k: "capacitor",v: true}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $ltrim: {input: '$obj.str',chars: '$obj.obj.str'} },"Kids"]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "orange Turkey black",chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $toLower: "Rustic Fresh Keyboard supply-chains Towels" }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T17:02:22.792Z"),timezone: "Africa/Malabo"} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $minute: { $isoWeek: { $dateFromParts: {year: { $abs: '$num' },day: { $subtract: [9962,11234] },minute: { $multiply: ['$obj.obj.obj.num','$obj.obj.num'] },millisecond: { $multiply: [] },timezone: "Pacific/Funafuti"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfYear: { $dateToParts: {date: { $year: { $dateToParts: {date: { $isoWeek: { $dayOfWeek: { $hour: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T15:01:48.045Z",onError: { $trim: { input: "Arkansas" } },onNull: "Avon Incredible bluetooth"} } } } } },timezone: "America/Araguaina"} } },timezone: "America/Martinique",iso8601: false} } } }, _id: 0}}],

        [{$project: {a: { $second: { $week: { $dateFromString: {dateString: "2018-09-06T09:48:17.335Z",onNull: '$obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $toUpper: "Administrator cyan salmon" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[656],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [93184],cond: { $lt: [{ $second: { $dayOfYear: { $week: { $dateFromParts: {year: { $add: ['$$this'] },hour: { $multiply: [] },minute: { $sqrt: '$$this' },millisecond: { $add: [] },timezone: "Africa/Accra"} } } } },{ $month: { $dateFromString: {dateString: "2018-09-06T07:46:53.285Z",format: "%w-%w-%u-%m-%Z",onError: { $arrayToObject: [[[{ $trim: {input: "Soft Cambridgeshire",chars: '$obj.obj.str'} },'$obj.obj.str'],[31428],[{ $toUpper: { $dateToString: {date: '$$this',format: "%%-%w-%M-%U-%U-%j",timezone: "Atlantic/Faeroe"} } },"dynamic",'$str'],[]]] }} } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T03:07:21.537Z"),format: "%L-%L-%u-%Z-%m-%u-%L-%H",onNull: { $arrayElemAt: [[],'$obj.obj.num'] }} },{ $toUpper: "Money Market Account" }],97788] }, _id: 0}}],

        [{$project: {a: { $substr: ["olive Licensed",2,2] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num',18023],cond: { $lte: [{ $toLower: { $toString: { $dateFromString: {dateString: "2018-09-06T10:54:29.601Z",format: "%Z-%w-%j-%Y-%U-%U-%%-%j-%V-%G-%Z-%U",onNull: { $zip: {inputs: [['$obj.obj.str'],['$$this',"Ameliorated Nevada","Investment Account pixel red",'$obj.obj.str'],[]],useLongestLength: true,defaults: [false]} }} } } },{ $dateToString: {date: new Date("2018-09-06T07:42:01.643Z"),format: "%L-%V-%L-%w",timezone: "Brazil/DeNoronha"} }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T01:15:59.096Z"),timezone: "EET",onNull: "Assistant Soft deposit"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[8700],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$str',{ $toUpper: "parsing Tunisian Dinar index" }],[],[63340]],useLongestLength: false,defaults: [/aggregate|mesh/,"Fresh interfaces"]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num',52521,'$num'],[{ $rtrim: {input: { $toLower: "payment Unbranded Plastic Chips" },chars: '$obj.str'} },"Manager Handmade","Generic Plastic Cheese Crescent"],[49726,{ $add: [] },'$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $hour: { $millesecond: { $toDate: { $toString: { $arrayToObject: [[[],['$obj.num','$num','$obj.num',52524],['$obj.obj.str',{ $toLower: { $substr: ['$obj.str',5,4] } }]]] } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $millesecond: { $dayOfMonth: { $minute: { $toDate: { $arrayToObject: [[{k: "array",v: '$num'}]] } } } } },onNull: { $zip: {inputs: [[],[],[{ $substrBytes: ['$str',7,13] }]],useLongestLength: true} }} }, _id: 0}}],

        [{$project: {a: { $toLower: { $concat: [] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $toUpper: "Argentine Peso Dominican Republic" } }]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: {date: '$obj.obj.obj.date',format: "%j-%V-%m-%Y-%d-%u",onNull: '$obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num',30514],["microchip Liberian Dollar Kenya"],[],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $second: { $minute: { $dateFromString: {dateString: "2018-09-06T14:26:23.188Z",format: "%S-%S-%H-%S-%d-%U",onError: { $arrayElemAt: [['$obj.str',"Re-engineered payment primary"],'$obj.obj.num'] },onNull: { $arrayToObject: [[]] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Functionality Oregon" } }, _id: 0}}],

        [{$project: {a: { $map: {input: [19560,48037],as: 'sabrina',in: { $abs: 90588 }} }, _id: 0}}],

        [{$project: {a: { $toLower: "index panel" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [{ $ltrim: { input: { $substrCP: ["bluetooth streamline",8,8] } } },'$obj.str',{ $toLower: '$str' }] }],49526] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Orchestrator e-services withdrawal",v: new Date("2018-09-06T01:02:28.734Z")}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "National",chars: "connect"} }, _id: 0}}],

        [{$project: {a: { $toLower: "Accountability SMS Extended" }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',19,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ["SCSI",4,12] },"Cape Principal payment"],['$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [11,19,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Rustic Soft Tuna yellow Fantastic",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-06T16:46:18.805Z",format: "%V-%j-%d-%Y-%L"} } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T17:07:48.514Z",onError: { $isoWeek: { $year: { $hour: { $week: { $month: { $isoDayOfWeek: { $dateToString: {date: '$date',format: "%j-%w-%Y-%Z-%L-%V-%S-%m-%H",timezone: "Atlantic/South_Georgia"} } } } } } } },onNull: { $arrayElemAt: [[{ $trim: {input: { $ltrim: {input: '$obj.obj.str',chars: "Handcrafted Steel Computer bluetooth"} },chars: { $substr: ["copying open-source invoice",1,17] }} }],51911] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num'],["Bike empower networks"],['$obj.str',{ $substrCP: ['$obj.str',15,19] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: '$obj.str' }],['$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [3,12] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',"hack Bedfordshire"],["Compatible Orchestrator alarm"],[96514],['$obj.obj.num'],['$obj.str','$date','$num']]] }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromString: {dateString: "2018-09-06T18:52:38.829Z",timezone: "Africa/Ouagadougou"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [{ $substr: ['$obj.obj.str',10,11] },"Quality"] },"vortals Movies"],62584] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $toString: { $substrCP: ["Borders Personal Loan Account Refined",18,17] } },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfYear: '$date' },format: "%S-%j-%%-%%-%z-%d-%u-%L"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit Republic of Korea",v: { $trim: { input: "Investment Account" } }},{k: "Dynamic Brand",v: '$obj.obj.str'},{k: "Fish",v: 66870}]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToParts: {date: { $dayOfWeek: { $minute: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T09:58:39.666Z",onError: { $arrayToObject: [[]] }} } } } },iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $minute: { $isoDayOfWeek: { $year: { $minute: '$obj.obj.date' } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',{ $dateToString: {date: { $dayOfWeek: { $dateToString: {date: new Date("2018-09-06T02:04:39.817Z"),format: "%L-%V-%U-%V-%M-%d-%d-%U-%L",timezone: "Europe/Uzhgorod"} } },format: "%Y-%H-%Z-%m-%%-%Z-%L-%d-%U-%j-%j-%S",onNull: '$str'} }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],82016] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $second: { $isoWeekYear: { $hour: { $toDate: { $zip: {inputs: [[],[69841,'$obj.obj.obj.num'],['$obj.date','$date',new Date("2018-09-05T22:59:52.428Z")],['$obj.obj.str',"Idaho orchestrate Dynamic",{ $ltrim: {input: '$obj.str',chars: { $toString: { $dateToParts: {date: { $isoWeek: { $week: { $dateFromParts: {year: { $log: [44893,{ $cmp: [{ $arrayToObject: [[{k: "Personal Loan Account",v: true},{k: "Branding Applications",v: '$num'}]] },{ $reverseArray: [[]] }] }] },hour: { $ceil: '$obj.num' },second: { $pow: [75759,4069] },millisecond: { $abs: 29147 }} } } },timezone: "America/Indianapolis"} } }} }],[]],defaults: [39841]} } } } } },format: "%M-%S-%L-%d-%L-%m-%V-%V-%%-%S-%d"} }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',10,8] }, _id: 0}}],

        [{$project: {a: { $toString: { $filter: {input: ["moderator","Borders Cotton solid state",{ $toUpper: '$obj.str' },'$obj.str'],cond: { $eq: [{ $arrayToObject: [[{k: "Accounts",v: true},{k: "Sleek ADP",v: 88712},{k: "Re-engineered Lari Frozen",v: { $size: [[{ $substrBytes: ["Cambridgeshire Group Awesome",19,3] }]] }}]] },{ $arrayElemAt: [[],'$$this'] }] }} } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $trim: { input: "Qatar" } }] }, _id: 0}}],

        [{$project: {a: { $range: [7,11] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T23:40:18.156Z"),format: "%M-%M-%z-%L-%m-%w-%w",timezone: "Etc/GMT-7"} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $cmp: [{ $arrayToObject: [[{k: "secondary",v: 28513}]] },{ $arrayElemAt: [['$obj.obj.str',{ $toLower: "Riel" }],'$num'] }] },'$num'],[],[29569,'$obj.obj.num',41442],[{ $substrBytes: ['$obj.obj.str',7,15] }],[],['$obj.str'],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ['$str'] }],[]]] }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeek: { $isoWeek: { $year: { $dayOfYear: { $dayOfWeek: { $second: { $isoDayOfWeek: { $toDate: { $arrayElemAt: [[],'$num'] } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',{ $trim: { input: '$str' } },"Gorgeous Frozen Salad"],[],[],['$obj.num',33806],[]]] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: { $isoDayOfWeek: { $dateToParts: {date: '$date',iso8601: true} } } } }, _id: 0}}],

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
